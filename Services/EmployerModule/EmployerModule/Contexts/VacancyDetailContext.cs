using EmployerModule.Models;
using Microsoft.EntityFrameworkCore;

namespace Employer.Contexts
{
    public class VacancyDetailContext : DbContext
    {
        public VacancyDetailContext(DbContextOptions<VacancyDetailContext> options) : base(options)
        {
        }

        //property for 'VacancyDetail' Model class
        public DbSet<VacancyDetailModel> VacancyDetails { get; set; }
    }

}
