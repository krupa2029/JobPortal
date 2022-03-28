using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Identity.Models
{
    [Table("Users")]
    public class UserModel : IdentityUser
    {
        public string FullName { get; set; }
        public string UserType { get; set; }
    }
}
    

 