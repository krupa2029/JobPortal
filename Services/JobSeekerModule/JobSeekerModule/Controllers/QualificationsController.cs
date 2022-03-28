using JobSeeker.Models;
using JobSeekerModule.Repository.QualificationRepo;
using JobSeekerModule.RequestModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace JobSeekerModule.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QualificationsController : ControllerBase
    {
        private readonly IQualificationsRepository _qualifications;

        public QualificationsController(IQualificationsRepository qualifications)
        {
            _qualifications = qualifications;
        }


        // GET: api/JobSeeker
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var result = await _qualifications.GetAll();
            if (result != null)
            {
                return Ok(result);
            }
            else
            {
                return NoContent();
            }
        }

        // POST: api/JobSeeker
        [HttpPost]
        public async Task<IActionResult> AddNewQualification(QualificationsReqModel qualification)
        {
            await _qualifications.AddNew(qualification);
            return Ok(true);

        }

        // GET: api/JobSeeker/5
        [HttpGet("getById/{id}")]
        public async Task<ActionResult<QualificationsReqModel>> GetById(int id)
        {
            var item = await _qualifications.GetById(id);
            if (item == null)
            {
                return NotFound(); //return status code 404
            }
            else
            {
                return Ok(item); // return data with status code 200
            }
        }

        // GET: api/JobSeeker/5
        [HttpGet("getByEmail/{email}")]
        public async Task<ActionResult<QualificationsReqModel>> GetByEmail(string email)
        {
            var item = await _qualifications.GetByEmail(email);
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
        public async Task<IActionResult> Delete(int id)
        {
            var item = await _qualifications.GetById(id);
            if (item == null)
            {
                return NotFound();
            }
            else
            {
                await _qualifications.Delete(id);
                return Ok(true); // status code: 204 (No Content)
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateQualification([FromRoute] int id, [FromBody] QualificationsReqModel qualification)
        {
            await _qualifications.UpdateQualification(id, qualification);
            return Ok(qualification);
        }
    }
}
