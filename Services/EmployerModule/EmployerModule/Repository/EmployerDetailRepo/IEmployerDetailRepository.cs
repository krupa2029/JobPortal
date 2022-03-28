using EmployerModule.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace EmployerModule.Repository.EmployerDetailRepo
{
    public interface IEmployerDetailRepository
    {
        Task<List<EmployerDetailModel>> GetAllEmployers();

        Task<EmployerDetailModel> GetById(int id);

        Task<List<EmployerDetailModel>> GetByEmail(string email);
        Task<EmployerDetailModel> AddNew(EmployerDetailModel item);

        Task UpdateEmployerDetails(int id, EmployerDetailModel item);
        Task Delete(int id);
    }
}
