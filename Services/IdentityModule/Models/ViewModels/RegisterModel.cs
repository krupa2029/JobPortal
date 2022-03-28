using System.ComponentModel.DataAnnotations;

namespace IdentityModule.Models.ViewModels
{
    public class RegisterModel
    {

        [Required]
        public string FullName { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [Phone]
        public string PhoneNumber { get; set; }

        [StringLength(20), Required]
        public string UserType { get; set; }

        [StringLength(20), Required]
        public string UserName { get; set; }

        [Required, DataType(DataType.Password)]
        [Compare("ConfirmPassword")]
        public string Password { get; set; }

        [Required, DataType(DataType.Password)]
        public string ConfirmPassword { get; set; }

    }
}

