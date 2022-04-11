using Employer.Contexts;
using EmployerModule.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployerModule.Repository.EmployerDetailRepo
{
    public class EmployerDetailRepository : IEmployerDetailRepository
    {

        private readonly EmployerDetailContext _employerDetailContext;
      

        public EmployerDetailRepository(EmployerDetailContext employerDetailContext)
        {
            _employerDetailContext = employerDetailContext; 
            
        }

        // GET: All employers 
        public async Task<List<EmployerDetailModel>> GetAllEmployers()
        {
            return await _employerDetailContext.EmployerDetails.ToListAsync();
        }


        // GET: Employer by Id
        public async Task<EmployerDetailModel> GetById(int id)
        {
            var item = await _employerDetailContext.EmployerDetails.FindAsync(id);

            if (item != null)
            {
                return item;
            }
            else
            {
                return null;
            }
        }

        // GET: Employer by email
        public async Task<List<EmployerDetailModel>> GetByEmail(string email)
        {
            var item = await _employerDetailContext.EmployerDetails.Where(data => data.createdBy==email).Select(items => new EmployerDetailModel()
            {
                employerId = items.employerId,
                organizationName = items.organizationName,
                orgnizationType = items.orgnizationType,
                companyEmail = items.companyEmail,
                companyPhone = items.companyPhone,
                noOfEmployees = items.noOfEmployees,
                startYear = items.startYear,
                about = items.about,
                createdBy = items.createdBy
        }).ToListAsync();

            return(item);
            
        }

        // POST: Add new employer
        public async Task<EmployerDetailModel> AddNew(EmployerDetailModel item)
        {
            _employerDetailContext.EmployerDetails.Add(item);
            await _employerDetailContext.SaveChangesAsync();
            return item;
        }


        // PUT: Update employer details using employer Id
        public async Task UpdateEmployerDetails(int id, EmployerDetailModel item)
        {
            var employer = await _employerDetailContext.EmployerDetails.FindAsync(id);

            if (employer != null)
            {
                employer.organizationName = item.organizationName;
                employer.orgnizationType = item.orgnizationType;
                employer.companyEmail = item.companyEmail;
                employer.companyPhone = item.companyPhone;
                employer.noOfEmployees = item.noOfEmployees;
                employer.startYear = item.startYear;
                employer.about = item.about;
                employer.createdBy = item.createdBy;

                await _employerDetailContext.SaveChangesAsync();
            }
        }

        // DELETE : Delete employer detail using Id
        public async Task Delete(int id)
        {
            var item = await _employerDetailContext.EmployerDetails.FindAsync(id);
            _employerDetailContext.EmployerDetails.Remove(item);
            await _employerDetailContext.SaveChangesAsync();
        }
    }
}
