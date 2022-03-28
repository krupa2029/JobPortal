using EmployerModule.Models;
using Microsoft.EntityFrameworkCore;

namespace Employer.Contexts
{
    public class EmployerDetailContext : DbContext
    {
     
        public EmployerDetailContext(DbContextOptions<EmployerDetailContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<EmployerDetailModel>()
                .HasIndex(u => u.companyEmail)
                .IsUnique();

            builder.Entity<EmployerDetailModel>()
               .HasIndex(u => u.createdBy)
               .IsUnique();
        }

        //property for 'EmployerDetail' Model class
        public DbSet<EmployerDetailModel> EmployerDetails { get; set; }
    }
}
