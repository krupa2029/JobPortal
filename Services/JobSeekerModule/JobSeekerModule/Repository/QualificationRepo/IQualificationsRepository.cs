using JobSeeker.Models;
using JobSeekerModule.RequestModels;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace JobSeekerModule.Repository.QualificationRepo
{
    public interface IQualificationsRepository
    {
        Task<List<QualificationsReqModel>> GetAll();

        Task<List<QualificationsReqModel>> GetById(int id);

        Task<List<QualificationsReqModel>> GetByEmail(string email);

        Task AddNew(QualificationsReqModel item);

        Task UpdateQualification(int id, QualificationsReqModel item);

        Task Delete(int id);
    }
}
