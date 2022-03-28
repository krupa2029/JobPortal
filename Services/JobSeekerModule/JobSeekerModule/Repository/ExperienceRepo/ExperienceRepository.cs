using JobSeeker.Contexts;
using JobSeeker.Models;
using JobSeekerModule.RequestModels;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JobSeekerModule.Repository.ExperienceRepo
{
    public class ExperienceRepository : IExperienceRepository
    {
        private readonly JobSeekerDetailContext _jobSeekerDetailContext;

        public ExperienceRepository(JobSeekerDetailContext jobSeekerDetailContext)
        {

            _jobSeekerDetailContext = jobSeekerDetailContext;
        }

        public async Task<List<ExperienceReqModel>> GetAll()
        {
            var item = await _jobSeekerDetailContext.Experiences.Select(items => new ExperienceReqModel()
            {
                experienceId = items.experienceId,
                companyName = items.companyName,
                startDate = items.startDate,
                endDate = items.endDate,
                companyUrl = items.companyUrl,
                designation = items.designation,
                jobDescription = items.jobDescription,
                jobSeekerEmail = items.jobSeekerEmail

            }).ToListAsync();

            return (item);
            
        }

        public async Task<List<ExperienceReqModel>> GetById(int id)
        {
            var item = await _jobSeekerDetailContext.Experiences.Where(data => data.experienceId == id).Select(items => new ExperienceReqModel()
            {
                experienceId = items.experienceId,
                companyName = items.companyName,
                startDate = items.startDate,
                endDate = items.endDate,
                companyUrl = items.companyUrl,
                designation = items.designation,
                jobDescription = items.jobDescription,
                jobSeekerEmail = items.jobSeekerEmail

            }).ToListAsync();

            return (item);

        }

        public async Task AddNew(ExperienceReqModel items)
        {
            var itemData = new ExperienceModel()
            {
                experienceId = items.experienceId,
                companyName = items.companyName,
                startDate = items.startDate,
                endDate = items.endDate,
                companyUrl = items.companyUrl,
                designation = items.designation,
                jobDescription = items.jobDescription,
                jobSeekerEmail = items.jobSeekerEmail
            };
            _jobSeekerDetailContext.Experiences.Add(itemData);
            await _jobSeekerDetailContext.SaveChangesAsync();
            
        }

        public async Task<List<ExperienceReqModel>> GetByEmail(string email)
        {
            var item = await _jobSeekerDetailContext.Experiences.Where(data => data.jobSeekerEmail == email).Select(items => new ExperienceReqModel()
            {
                experienceId = items.experienceId,
                companyName = items.companyName,
                startDate = items.startDate,
                endDate = items.endDate,
                companyUrl = items.companyUrl,
                designation = items.designation,
                jobDescription = items.jobDescription,
                jobSeekerEmail = items.jobSeekerEmail

            }).ToListAsync();

            return (item);

        }



        public async Task UpdateExperience(int id, ExperienceReqModel item)
        {
            var qualification = await _jobSeekerDetailContext.Experiences.FindAsync(id);

            if (qualification != null)
            {
                qualification.experienceId = item.experienceId;
                qualification.companyName = item.companyName;
                qualification.startDate = item.startDate;
                qualification.endDate = item.endDate;
                qualification.companyUrl = item.companyUrl;
                qualification.designation = item.designation;
                qualification.jobDescription = item.jobDescription;
               

                await _jobSeekerDetailContext.SaveChangesAsync();
            }

        }
        public async Task Delete(int id)
        {
            var item = await _jobSeekerDetailContext.Experiences.FindAsync(id);
            _jobSeekerDetailContext.Experiences.Remove(item);
            await _jobSeekerDetailContext.SaveChangesAsync();
        }

       
    }
}