using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace JobSeekerModule.RequestModels
{
    public class JobSeekerDetailReqModel
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int jobSeekerId { get; set; }

        [Required]
        public string firstName { get; set; }

        [Required]
        public string lastName { get; set; }

        [Key]
        [Required]
        [EmailAddress]
        public string email { get; set; }

        [Required]
        [StringLength(10)]
        [Phone]
        public string phoneNumber { get; set; }

        [Required]
        [MinLength(3)]
        public string address { get; set; }

        [Required]
        public string totalWorkExpericence { get; set; }

        [Required]
        public long expectedSalary { get; set; }


        [Required]
        [DataType(DataType.Date)]

        [DisplayFormat(DataFormatString = "{0:dd-mm-yyy}", ApplyFormatInEditMode = true)]
        public DateTime dateOfBirth { get; set; }
    }
}
