using Identity.Models.ViewModels;
using IdentityModule.Models.ViewModels;
using IdentityModule.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace IdentityModule.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IdentityController : ControllerBase
    {
        public readonly IUserIdentityRepository _userIdentity;

        public IdentityController(IUserIdentityRepository userIdentity)
        {
            _userIdentity = userIdentity;
        }


        [HttpPost("register")]
        public async Task<IActionResult> Register(RegisterModel registerModel)
        {
            var result = await _userIdentity.RegisterAsync(registerModel);
            if (result.Succeeded)
            {
                return Ok(result);
            }
            else
            {
                return Unauthorized(result);
            }
        }

        [HttpPost("login")]
        public async Task<IActionResult> login([FromBody] LoginModel loginModel)
        {
            var tokenString = await _userIdentity.LoginAsync(loginModel);
            var response = new ResponseModel()
            {
                tokenString = tokenString,
            };

            if (string.IsNullOrEmpty(tokenString))
            {
                return Unauthorized();
            }
            else
            {
                return Ok(response);
            }
        }

        [HttpGet("getByUserName/{userName}")]
        public async Task<IActionResult> getByUserName([FromRoute] string userName)
        {
            var result = await _userIdentity.GetUserByUserNameAsync(userName);
            return Ok(result);
        }

        [HttpPost("changePassword")]

        public async Task<IActionResult> changePassword(ChangePasswordModel changePasswordModel)
        {
            await _userIdentity.ChangePasswordByUserName(changePasswordModel);
            return Ok(true);
        }
    }


}




