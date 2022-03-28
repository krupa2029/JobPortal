using Employer.Contexts;
using EmployerModule.Models;
using Microsoft.EntityFrameworkCore;

namespace EmployerModule.Contexts
{
    public class VacancyRequestContext : DbContext
    {
        public VacancyRequestContext(DbContextOptions<VacancyRequestContext> options) : base(options)
        {
        }

        public DbSet<VacancyRequestModel> VacancyRequests{ get; set; }
    }
}

