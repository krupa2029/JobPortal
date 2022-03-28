using Identity.Models;
using Identity.Models.ViewModels;
using IdentityModule.Models.ViewModels;
using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;

namespace IdentityModule.Repository
{
    public interface IUserIdentityRepository
    {
        Task<IdentityResult> RegisterAsync(RegisterModel registerModel);

        Task<string> LoginAsync(LoginModel loginModel);

        Task<UserModel> GetUserByUserNameAsync(string userName);

        Task ChangePasswordByUserName(ChangePasswordModel changePasswordModel);    
    }
}
