using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace JobSeeker.Models
{
    public class ExperienceModel
    {
        [Key]
        public int experienceId { get; set; }

        [Required]
        public string companyName { get; set; }


        [Required]
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:dd-mm-yyy}", ApplyFormatInEditMode = true)]

        public DateTime startDate { get; set; }


        [Required]
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:dd-mm-yyy}", ApplyFormatInEditMode = true)]

        public DateTime endDate { get; set; }
        

        [Required]
        public string companyUrl { get; set; }

        [Required]
        public string designation { get; set; }

        [Required]
        public string jobDescription { get; set; }


        [ForeignKey("jobSeekerDetail")]
        public string jobSeekerEmail { get; set; }
        public JobSeekerDetailModel jobSeekerDetail { get; set; }


    }
}

