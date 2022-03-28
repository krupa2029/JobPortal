using JobSeeker.Models;
using JobSeekerModule.RequestModels;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace JobSeekerModule.Repository.JobSeekerDetailRepo
{
    public interface IJobSeekerDetailRepository
    {

        Task<List<JobSeekerDetailReqModel>> GetAll();

        Task<List<JobSeekerDetailReqModel>> GetById(int id);

        Task<List<JobSeekerDetailReqModel>> GetByEmail(string email);

        Task<List<JobSeekerDetailModel>> GetAllDataByEmail(string email);

        Task AddNew(JobSeekerDetailReqModel item);

        Task UpdateJobSeekerDetail(string email, JobSeekerDetailReqModel item);

        Task Delete(int id);
    }
}
