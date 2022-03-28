using JobSeeker.Models;
using Microsoft.EntityFrameworkCore;

namespace JobSeeker.Contexts
{
        public class JobSeekerDetailContext : DbContext
        {
            public JobSeekerDetailContext(DbContextOptions<JobSeekerDetailContext> options) : base(options)
            {
            }

            protected override void OnModelCreating(ModelBuilder builder)
            {
                builder.Entity<JobSeekerDetailModel>()
                    .HasIndex(u => u.email)
                    .IsUnique();

            }
            public DbSet<JobSeekerDetailModel> JobSeekerDetails { get; set; }
            public DbSet<QualificationsModel> Qualifications { get; set; }
            public DbSet<ExperienceModel> Experiences { get; set; }
        }
    
}
