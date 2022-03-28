using Identity.Models;
using Identity.Models.ViewModels;
using IdentityModule.Context;
using IdentityModule.Models.ViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace IdentityModule.Repository
{
    public class UserIdentityRepository : IUserIdentityRepository
    {
        private readonly UserManager<UserModel> _user;
        private readonly SignInManager<UserModel> _signInManager;
        private readonly IConfiguration _configuration;


        public UserIdentityRepository(UserManager<UserModel> user, SignInManager<UserModel> signInManager, IConfiguration configuration)
        {
            _user = user;
            _signInManager = signInManager;
            _configuration = configuration;
        }

        public async Task<IdentityResult> RegisterAsync(RegisterModel registerModel)
        {
            var identity = new UserModel()
            {
                UserName = registerModel.UserName,
                FullName = registerModel.FullName,
                Email = registerModel.Email,
                PhoneNumber = registerModel.PhoneNumber,
                UserType = registerModel.UserType
            };

            return await _user.CreateAsync(identity, registerModel.Password);
        }

        public async Task<string> LoginAsync(LoginModel loginModel)
        {
            var result = await _signInManager.PasswordSignInAsync(loginModel.UserName, loginModel.Password, false, false);

            if (!result.Succeeded)
            {
                return null;
            }
            else
            {
                var claims = new[] {
                new Claim(ClaimTypes.Name, loginModel.UserName),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),

                };

                var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration.GetValue<string>("Jwt:Secret")));

                var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

                var token = new JwtSecurityToken(
                    issuer: _configuration.GetValue<string>("Jwt: Issuer"),
                    audience: _configuration.GetValue<string>("Jwt: Audience"),
                    claims: claims,
                    expires: DateTime.Now.AddDays(1),
                    signingCredentials: credentials
                );
                return new JwtSecurityTokenHandler().WriteToken(token);

            }

        }

        public async Task<UserModel> GetUserByUserNameAsync(string username)
        {
            var result = await _user.FindByNameAsync(username);
            return result;
        }

        public async Task ChangePasswordByUserName(ChangePasswordModel changePasswordModel)
        {
            var user = await _user.FindByNameAsync(changePasswordModel.UserName);
            if(user != null)
            {
                await _user.ChangePasswordAsync(user, changePasswordModel.OldPassword, changePasswordModel.NewPassword);
            }
            
        }
    }

}
 

