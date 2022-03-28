using System.ComponentModel.DataAnnotations;

namespace JobSeekerModule.RequestModels
{
    public class QualificationsReqModel
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

        [Required]
        public string jobSeekerEmail { get; set; }

    }
}
