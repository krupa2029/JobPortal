using JobSeeker.Models;
using JobSeekerModule.Repository.JobSeekerDetailRepo;
using JobSeekerModule.RequestModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace JobSeekerModule.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobSeekerDetailController : ControllerBase
    {
        private readonly IJobSeekerDetailRepository _jobSeekerDetail;

        public JobSeekerDetailController(IJobSeekerDetailRepository jobSeekerDetail)
        {
            _jobSeekerDetail = jobSeekerDetail;
        }


        // GET: api/JobSeeker
        [HttpGet]
        public async Task<IActionResult> GetAllJobSeekers()
        {
            var result = await _jobSeekerDetail.GetAll();
            if (result != null)
            {
                return Ok(result);
            }
            else
            {
                return NoContent();
            }
        }

        // POST: api/Employer
        [HttpPost]
        public async Task<IActionResult> AddNew(JobSeekerDetailReqModel jobSeekerDetail)
        {
            await _jobSeekerDetail.AddNew(jobSeekerDetail);
            return Ok(true);

        }

        // GET: api/Employer/5
        [HttpGet("getById/{id}")]
        public async Task<ActionResult<JobSeekerDetailReqModel>> GetById(int id)
        {
            var item = await _jobSeekerDetail.GetById(id);
            if (item == null)
            {
                return NotFound(); //return status code 404
            }
            else
            {
                return Ok(item); // return data with status code 200
            }
        }

        // GET: api/Employer/5
        [HttpGet("getByEmail/{email}")]
        public async Task<ActionResult<JobSeekerDetailReqModel>> GetByEmail(string email)
        {
            var item = await _jobSeekerDetail.GetByEmail(email);
            if (item == null)
            {
                return NotFound(); //return status code 404
            }
            else
            {
                return Ok(item); // return data with status code 200
            }
        }

        // GET: api/Employer/5
        [HttpGet("getAllByEmail/{email}")]
        public async Task<ActionResult<JobSeekerDetailModel>> GetAllByEmail(string email)
        {
            var item = await _jobSeekerDetail.GetAllDataByEmail(email);
            if (item == null)
            {
                return NotFound(); //return status code 404
            }
            else
            {
                return Ok(item); // return data with status code 200
            }
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDetail(int id)
        {
            var item = await _jobSeekerDetail.GetById(id);
            if (item == null)
            {
                return NotFound();
            }
            else
            {
                await _jobSeekerDetail.Delete(id);
                return Ok(true); // status code: 204 (No Content)
            }
        }

        [HttpPut("{email}")]
        public async Task<IActionResult> UpdateDetail([FromRoute] string email, [FromBody] JobSeekerDetailReqModel jobSeekerDetail)
        {
            await _jobSeekerDetail.UpdateJobSeekerDetail(email, jobSeekerDetail);
            return Ok(jobSeekerDetail);
        }
    }
}
