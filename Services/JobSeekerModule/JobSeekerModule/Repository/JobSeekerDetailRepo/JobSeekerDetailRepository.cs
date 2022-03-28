using JobSeeker.Contexts;
using JobSeeker.Models;
using JobSeekerModule.RequestModels;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JobSeekerModule.Repository.JobSeekerDetailRepo
{
  
        public class JobSeekerDetailRepository : IJobSeekerDetailRepository
        {

            private readonly JobSeekerDetailContext _jobSeekerDetailContext;

            public JobSeekerDetailRepository(JobSeekerDetailContext jobSeekerDetailContext)
            {

                _jobSeekerDetailContext = jobSeekerDetailContext;
            }

            public async Task<List<JobSeekerDetailReqModel>> GetAll()
            {
                var item = await _jobSeekerDetailContext.JobSeekerDetails.Select(items => new JobSeekerDetailReqModel()
                {
                    jobSeekerId = items.jobSeekerId,
                    firstName = items.firstName,
                    lastName = items.lastName,
                    email = items.email,
                    phoneNumber = items.phoneNumber,
                    address = items.address,
                    totalWorkExpericence = items.totalWorkExpericence,
                    expectedSalary = items.expectedSalary,
                    dateOfBirth = items.dateOfBirth,

                }).ToListAsync();

            return (item); 
 
            }

            public async Task AddNew(JobSeekerDetailReqModel items)
            {
            var itemData = new JobSeekerDetailModel()
            {

                jobSeekerId = items.jobSeekerId,
                firstName = items.firstName,
                lastName = items.lastName,
                email = items.email,
                phoneNumber = items.phoneNumber,
                address = items.address,
                totalWorkExpericence = items.totalWorkExpericence,
                expectedSalary = items.expectedSalary,
                dateOfBirth = items.dateOfBirth,
            };

                _jobSeekerDetailContext.JobSeekerDetails.Add(itemData);
                await _jobSeekerDetailContext.SaveChangesAsync();
                
            }
            public async Task<List<JobSeekerDetailReqModel>> GetById(int id)
                {
                    var item = await _jobSeekerDetailContext.JobSeekerDetails.Where(data => data.jobSeekerId == id).Select(items => new JobSeekerDetailReqModel()
                    {
                        jobSeekerId = items.jobSeekerId,
                        firstName = items.firstName,
                        lastName = items.lastName,
                        email = items.email,
                        phoneNumber = items.phoneNumber,
                        address = items.address,
                        totalWorkExpericence = items.totalWorkExpericence,
                        expectedSalary = items.expectedSalary,
                        dateOfBirth = items.dateOfBirth,

                    }).ToListAsync();

                    return (item);
                }

        public async Task<List<JobSeekerDetailModel>> GetAllDataByEmail(string email)
        {
            var item = await _jobSeekerDetailContext.JobSeekerDetails.Where(data => data.email == email)
           .ToListAsync();

            return (item);

        }
        public async Task<List<JobSeekerDetailReqModel>> GetByEmail(string email)
            {
                var item = await _jobSeekerDetailContext.JobSeekerDetails.Where(data => data.email == email).Select(items => new JobSeekerDetailReqModel()
                {
                    jobSeekerId = items.jobSeekerId,
                    firstName = items.firstName,
                    lastName = items.lastName,
                    email = items.email,
                    phoneNumber = items.phoneNumber,
                    address = items.address,
                    totalWorkExpericence = items.totalWorkExpericence,
                    expectedSalary = items.expectedSalary,
                    dateOfBirth = items.dateOfBirth,

                }).ToListAsync();

                return (item);

            }


            public async Task UpdateJobSeekerDetail(string email, JobSeekerDetailReqModel item)
            {
            var jobSeeker =  _jobSeekerDetailContext.JobSeekerDetails.Where(data => data.email == email).FirstOrDefault(); ;
            
        
            if (jobSeeker != null)
                {
                jobSeeker.jobSeekerId = item.jobSeekerId;
                jobSeeker.firstName = item.firstName;
                jobSeeker.lastName = item.lastName;
                jobSeeker.email = item.email;
                jobSeeker.phoneNumber = item.phoneNumber;
                jobSeeker.address = item.address;
                jobSeeker.totalWorkExpericence = item.totalWorkExpericence;
                jobSeeker.expectedSalary = item.expectedSalary;
                jobSeeker.dateOfBirth = item.dateOfBirth;


                await _jobSeekerDetailContext.SaveChangesAsync();
                }
            }
            public async Task Delete(int id)
            {
                var item = await _jobSeekerDetailContext.JobSeekerDetails.FindAsync(id);
                _jobSeekerDetailContext.JobSeekerDetails.Remove(item);
                await _jobSeekerDetailContext.SaveChangesAsync();
            }

    }
 }

