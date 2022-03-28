using System;
using System.ComponentModel.DataAnnotations;

namespace EmployerModule.Models
{
    public class VacancyDetailModel
    {
        // JobId
        [Key]
        public int jobId { get; set; }


        // Job Publisher Email
        [Required]
        [EmailAddress]
        public string publisherEmail { get; set; }

        // Company Name
        [Required]
        public string companyName { get; set; }

        // JobTitle 
        [Required]
        public string jobTitle { get; set; }


        // jobType
        [Required]
        public string jobType { get; set; }

        //jobLocation
        [Required]
        public string jobLocation { get; set; }
        

        //Published Date

        [Required]
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:dd-mm-yyy}", ApplyFormatInEditMode = true)]
        public DateTime publishedDate { get; set; }

        //No of Vacancies

        [Required]
        public int noOfVacancies { get; set; }


        //Minimum qualification

        [Required]
        public string minimumQualification { get; set; }

        //Job Description
        [Required]
        public string jobDescription { get; set; }


        //Experience required
        [Required]
        public string experienceRequired { get; set; }


        // MinSalary
        [Required]
        public long minSalary { get; set; }

        //Max Salary
        [Required]
        public long maxSalary { get; set; }

        //LastDate
       
        [Required]
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:dd-mm-yyy}", ApplyFormatInEditMode = true)]
        public DateTime lastDate { get; set; }


    }
}
