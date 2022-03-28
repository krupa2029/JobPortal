using EmployerModule.Models;
using EmployerModule.ResponseModels;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace EmployerModule.Repository.VacancyDetailRepo
{
    public interface IVacancyDetailRepository
    {
        Task<VacancyDetailRes> GetAllVacancies(string sortBy,int pageSize, int pageIndex, string filterByJobType, string minSalary, string maxSalary);
        Task<VacancyDetailModel> GetById(int id);

        Task<List<VacancyDetailModel>> GetByEmail(string email);
        Task<VacancyDetailModel> AddNewVacancy(VacancyDetailModel item);

        Task UpdateVacancyDetail(int id, VacancyDetailModel item);
        Task Delete(int id);
    }
}
