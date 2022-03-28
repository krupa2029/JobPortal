using Employer.Contexts;
using EmployerModule.Models;
using EmployerModule.Pagination;
using EmployerModule.ResponseModels;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployerModule.Repository.VacancyDetailRepo
{
    public class VacancyDetailRepository : IVacancyDetailRepository
    {
      
        private readonly VacancyDetailContext _vacancyDetailContext;

        public VacancyDetailRepository(VacancyDetailContext vacancyDetailContext)
        {
          
            _vacancyDetailContext = vacancyDetailContext;
        }

        public async Task<VacancyDetailRes> GetAllVacancies(string sortBy, int pageSize, int pageIndex, string filterByJobType, string minSalary, string maxSalary)
        {
            var result = await _vacancyDetailContext.VacancyDetails.ToListAsync();

            if (!string.IsNullOrEmpty(filterByJobType))
            {
                result = result.Where(x => x.jobType == filterByJobType).ToList();
            }
            if (!string.IsNullOrEmpty(minSalary))
            {
                result = result.Where(x => x.minSalary.ToString() == minSalary).ToList();
            }
            if (!string.IsNullOrEmpty(maxSalary))
            {
                result = result.Where(x => x.maxSalary.ToString() == maxSalary).ToList();
            }

            switch (sortBy)
                {
                    case "pub_asc": 
                        result =result.OrderBy(data => data.publishedDate).ToList();
                        break;
                    case "pub_dsc":
                        result = result.OrderByDescending(data => data.publishedDate).ToList();
                        break;
                    case "ld_asc":
                        result = result.OrderBy(data => data.lastDate).ToList();
                        break;
                    case "ld_dsc":
                        result = result.OrderByDescending(data => data.lastDate).ToList();
                        break;
                    default:
                         result = result.OrderByDescending(data => data.publishedDate).ToList();
                         break;

                }
           
            var pagination_result = Pagination<VacancyDetailModel>.Create(result, pageIndex, pageSize);
            var pagination_data = new VacancyDetailRes()
            {
                totalItem = result.Count,
                vacancyDetailModel = pagination_result
            };
            return pagination_data;


            
        }



        public async Task<VacancyDetailModel> GetById(int id)
        {
            var item = await _vacancyDetailContext.VacancyDetails.FindAsync(id);

            if (item != null)
            {
                return item;
            }
            else
            {
                return null;
            }
        }

        public async Task<List<VacancyDetailModel>> GetByEmail(string email)
        {
            var item = await _vacancyDetailContext.VacancyDetails.Where(data => data.publisherEmail == email).Select(items => new VacancyDetailModel()
            {
                jobId = items.jobId,
                publisherEmail = items.publisherEmail,
                companyName = items.companyName,
                jobTitle = items.jobTitle,
                jobType = items.jobType,
                jobLocation = items.jobLocation,
                publishedDate = items.publishedDate,
                noOfVacancies = items.noOfVacancies,
                minimumQualification = items.minimumQualification,
                jobDescription = items.jobDescription,
                experienceRequired = items.experienceRequired,
                minSalary = items.minSalary,
                maxSalary = items.maxSalary,
                lastDate= items.lastDate
        }).ToListAsync();

            return (item);

        }

        public async Task<VacancyDetailModel> AddNewVacancy(VacancyDetailModel item)
        {
            _vacancyDetailContext.VacancyDetails.Add(item);
            await _vacancyDetailContext.SaveChangesAsync();
            return item;
        }

        public async Task UpdateVacancyDetail(int id, VacancyDetailModel item)
        {
            var employer = await _vacancyDetailContext.VacancyDetails.FindAsync(id);

            if (employer != null)
            {
                employer.publisherEmail = item.publisherEmail;
                employer.companyName = item.companyName;
                employer.jobTitle = item.jobTitle;
                employer.jobType = item.jobType;
                employer.jobLocation = item.jobLocation;
                employer.publishedDate = item.publishedDate;
                employer.noOfVacancies = item.noOfVacancies;
                employer.minimumQualification = item.minimumQualification;
                employer.jobDescription = item.jobDescription;
                employer.experienceRequired = item.experienceRequired;
                employer.minSalary = item.minSalary;
                employer.maxSalary = item.maxSalary;

                await _vacancyDetailContext.SaveChangesAsync();
            }
        }
        public async Task Delete(int id)
        {
            var item = await _vacancyDetailContext.VacancyDetails.FindAsync(id);
            _vacancyDetailContext.VacancyDetails.Remove(item);
            await _vacancyDetailContext.SaveChangesAsync();
        }
    }
}
