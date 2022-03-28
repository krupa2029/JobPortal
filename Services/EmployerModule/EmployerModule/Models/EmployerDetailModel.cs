using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EmployerModule.Models
{
    public class EmployerDetailModel
    {
       

        // EmployerId
        [Key]
        public int employerId { get; set; }

        // CreatedBy : Email Id of the registering person
        [Required]
        [EmailAddress]
        public string createdBy { get; set; }

        // OrganizationName
        [Required]
        [MinLength(3)]
        public string organizationName { get; set; }


        //OrgnizationType

        [Required]
        [MinLength(2)]
        public string orgnizationType { get; set; }


        //CompanyEmail
        [Required]
        [EmailAddress]
        public string companyEmail { get; set; }


        //CompanyPhone
        [Phone]
        [Required]
        public string companyPhone { get; set; }

        //NoOfEmployees
        [Required]
        public int noOfEmployees { get; set; }


        //StartYear : Year when the company is commenced.
        [Range(1800, 2022)]
        [Column(TypeName = "nvarchar(4)")]
        [Required]
        public int startYear { get; set; }


        //About
        [Required]
        [MinLength(3)]
        public string about { get; set; }
       
    }


}
