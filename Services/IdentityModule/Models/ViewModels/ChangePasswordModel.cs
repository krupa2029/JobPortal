using System.ComponentModel.DataAnnotations;

namespace IdentityModule.Models.ViewModels
{
    public class ChangePasswordModel
    {
        [Required]
        public string UserName { get; set; }

        [Required]
        public string OldPassword { get; set; }

        [Required]
        public string NewPassword { get; set; }
    }
}
