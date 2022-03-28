using EmployerModule.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace EmployerModule.Repository.VacancyRequestRepo
{
    public interface IVacancyRequestRepository
    {
        Task<List<VacancyRequestModel>> GetAll();
        Task<VacancyRequestModel> GetById(int id);

        Task<List<VacancyRequestModel>> GetByVacancyId(int id);
        Task<List<VacancyRequestModel>> GetByJobSeekerEmail(string email); 
        Task<List<VacancyRequestModel>> GetByEmployerEmail(string email);
        Task<VacancyRequestModel> AddNew(VacancyRequestModel item);

        Task Update(int id, VacancyRequestModel item);
        Task Delete(int id);
    }
}
