using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace JobSeeker.Models
{
    public class QualificationsModel
    {
        [Key]
        public int qualificationId { get; set; }


        [Required]
        [MinLength(2)]
        public string qualificationName { get; set; }

        [Required]
        [MinLength(3)]
        public string university { get; set; }

        [Required]
    
        public int yearOfCompletion { get; set; }

        [Required]
        public string grade { get; set; }



        [ForeignKey("jobSeekerDetail")]
        public string jobSeekerEmail { get; set; }
        public JobSeekerDetailModel jobSeekerDetail { get; set; }



    }
}
