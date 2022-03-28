using JobSeeker.Models;
using JobSeekerModule.RequestModels;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace JobSeekerModule.Repository.ExperienceRepo
{
    public interface IExperienceRepository
    {
        Task<List<ExperienceReqModel>> GetAll();

        Task<List<ExperienceReqModel>> GetById(int id);

        Task<List<ExperienceReqModel>> GetByEmail(string email);

        Task AddNew(ExperienceReqModel item);

        Task UpdateExperience(int id, ExperienceReqModel item);

        Task Delete(int id);
    }
}
