using JobSeeker.Contexts;
using JobSeeker.Models;
using JobSeekerModule.RequestModels;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JobSeekerModule.Repository.QualificationRepo
{
    public class QualificationsRepository : IQualificationsRepository
    {
        private readonly JobSeekerDetailContext _jobSeekerDetailContext;

        public QualificationsRepository(JobSeekerDetailContext jobSeekerDetailContext)
        {

            _jobSeekerDetailContext = jobSeekerDetailContext;
        }

        public async Task<List<QualificationsReqModel>> GetAll()
        {
            var item = await _jobSeekerDetailContext.Qualifications.Select(items => new QualificationsReqModel()
            {
                qualificationId = items.qualificationId,
                qualificationName = items.qualificationName,
                university = items.university,
                yearOfCompletion = items.yearOfCompletion,
                grade = items.grade,
                jobSeekerEmail = items.jobSeekerEmail

            }).ToListAsync();

            return (item);
        }

        public async Task<List<QualificationsReqModel>> GetById(int id)
        {
            var item = await _jobSeekerDetailContext.Qualifications.Where(data => data.qualificationId == id).Select(items => new QualificationsReqModel()
            {
                qualificationId = items.qualificationId,
                qualificationName = items.qualificationName,
                university = items.university,
                yearOfCompletion = items.yearOfCompletion,
                grade = items.grade,
                jobSeekerEmail = items.jobSeekerEmail

            }).ToListAsync();

            return (item);
        }

        public async Task AddNew(QualificationsReqModel items)
        {
            var itemData = new QualificationsModel()
            {
                qualificationId = items.qualificationId,
                qualificationName = items.qualificationName,
                university = items.university,
                yearOfCompletion = items.yearOfCompletion,
                grade = items.grade,
                jobSeekerEmail = items.jobSeekerEmail

            };
            _jobSeekerDetailContext.Qualifications.Add(itemData);
            await _jobSeekerDetailContext.SaveChangesAsync();
            
        }

        public async Task<List<QualificationsReqModel>> GetByEmail(string email)
        {
            var item = await _jobSeekerDetailContext.Qualifications.Where(data => data.jobSeekerEmail == email).Select(items => new QualificationsReqModel()
            {
                qualificationId = items.qualificationId,
                qualificationName = items.qualificationName,
                university = items.university,
                yearOfCompletion = items.yearOfCompletion,
                grade = items.grade,
                jobSeekerEmail = items.jobSeekerEmail
              
            }).ToListAsync();

            return (item);

        }



        public async Task UpdateQualification(int id, QualificationsReqModel item)
        {
            var qualification = await _jobSeekerDetailContext.Qualifications.FindAsync(id);

            if (qualification != null)
            {
                qualification.qualificationId = item.qualificationId;
                qualification.qualificationName = item.qualificationName;
                qualification.university = item.university;
                qualification.yearOfCompletion = item.yearOfCompletion;
                qualification.grade = item.grade;
                qualification.jobSeekerEmail = item.jobSeekerEmail;

                await _jobSeekerDetailContext.SaveChangesAsync();
            }

        }
        public async Task Delete(int id)
        {
            var item = await _jobSeekerDetailContext.Qualifications.FindAsync(id);
            _jobSeekerDetailContext.Qualifications.Remove(item);
            await _jobSeekerDetailContext.SaveChangesAsync();
        }
    }
}
