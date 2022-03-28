using System;
using System.ComponentModel.DataAnnotations;

namespace EmployerModule.Models
{
    public class VacancyRequestModel
    {
        [Key]
        public int requestId { get; set; }


        [Required]
        public int vacancyId { get; set; }

        [Required]
        public string companyName { get; set;}

        [Required]
        public string jobTitle { get; set; }

        [Required]
        public string applicantFirstName { get; set;} 
        
        [Required]
        public string applicantLastName { get; set;}

        //jobSeekerEmail
        [Required]
        [EmailAddress]
        public string jobSeekerEmail { get; set; }

        [Required]
        [EmailAddress]
        public string employerEmail { get; set; }

        [Required]
        public string status { get; set; }

       
        [Required]
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:dd-mm-yyy}", ApplyFormatInEditMode = true)]
        public DateTime appliedDate { get; set; }

    }
}
