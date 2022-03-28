using EmployerModule.Contexts;
using EmployerModule.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployerModule.Repository.VacancyRequestRepo
{
    public class VacancyRequestRepository : IVacancyRequestRepository
    {
        private readonly VacancyRequestContext _vacancyRequestContext;

        public VacancyRequestRepository(VacancyRequestContext vacancyDetailContext)
        {

            _vacancyRequestContext = vacancyDetailContext;
        }

        public async Task<List<VacancyRequestModel>> GetAll()
        {
            return await _vacancyRequestContext.VacancyRequests.ToListAsync();
        }

        public async Task<VacancyRequestModel> GetById(int id)
        {
            var item = await _vacancyRequestContext.VacancyRequests.FindAsync(id);

            if (item != null)
            {
                return item;
            }
            else
            {
                return null;
            }
        }

        public async Task<List<VacancyRequestModel>> GetByVacancyId(int id)
        {
            var item = await _vacancyRequestContext.VacancyRequests.Where(data => data.vacancyId == id).Select(items => new VacancyRequestModel()
            {
                requestId = items.requestId,
                jobSeekerEmail = items.jobSeekerEmail,
                employerEmail = items.employerEmail,
                vacancyId = items.vacancyId,
                status = items.status,
                appliedDate = items.appliedDate,
                companyName = items.companyName,
                applicantFirstName = items.applicantFirstName,
                applicantLastName = items.applicantLastName,
                jobTitle = items.jobTitle

            }).ToListAsync();

            return (item);

        }
        public async Task<List<VacancyRequestModel>> GetByJobSeekerEmail(string email)
        {
            var item = await _vacancyRequestContext.VacancyRequests.Where(data => data.jobSeekerEmail == email).Select(items => new VacancyRequestModel()
            {
                requestId = items.requestId,
                jobSeekerEmail = items.jobSeekerEmail,
                employerEmail=items.employerEmail,
                vacancyId = items.vacancyId,
                status = items.status,
                appliedDate = items.appliedDate,
                companyName = items.companyName,
                applicantFirstName = items.applicantFirstName,
                applicantLastName = items.applicantLastName,
                jobTitle = items.jobTitle

            }).ToListAsync();

            return (item);

        }
        public async Task<List<VacancyRequestModel>> GetByEmployerEmail(string email)
        {
            var item = await _vacancyRequestContext.VacancyRequests.Where(data => data.employerEmail == email).Select(items => new VacancyRequestModel()
            {
                requestId = items.requestId,
                jobSeekerEmail = items.jobSeekerEmail,
                employerEmail = items.employerEmail,
                vacancyId = items.vacancyId,
                status = items.status,
                appliedDate = items.appliedDate,
                companyName = items.companyName,
                applicantFirstName = items.applicantFirstName,
                applicantLastName = items.applicantLastName,
                jobTitle = items.jobTitle

            }).ToListAsync();

            return (item);

        }

        public async Task<VacancyRequestModel> AddNew(VacancyRequestModel item)
        {
            _vacancyRequestContext.VacancyRequests.Add(item);
            await _vacancyRequestContext.SaveChangesAsync();
            return item;
        }

        public async Task Update(int id, VacancyRequestModel items)
        {
            var vacReq = await _vacancyRequestContext.VacancyRequests.FindAsync(id);

            if (vacReq != null)
            {

                vacReq.requestId = items.requestId;
                vacReq.jobSeekerEmail = items.jobSeekerEmail;
                vacReq.employerEmail = items.employerEmail;
                vacReq.vacancyId = items.vacancyId;
                vacReq.status = items.status;
                vacReq.appliedDate = items.appliedDate;
                vacReq.companyName = items.companyName;
                vacReq.applicantFirstName = items.applicantFirstName;
                vacReq.applicantLastName = items.applicantLastName;
                vacReq.jobTitle = items.jobTitle;

                await _vacancyRequestContext.SaveChangesAsync();
            }
        }
        public async Task Delete(int id)
        {
            var item = await _vacancyRequestContext.VacancyRequests.FindAsync(id);
            _vacancyRequestContext.VacancyRequests.Remove(item);
            await _vacancyRequestContext.SaveChangesAsync();
        }
    }
}

