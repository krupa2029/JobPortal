using EmployerModule.Models;
using EmployerModule.Repository.EmployerDetailRepo;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace EmployerModule.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployerDetailController : ControllerBase
    {
        private readonly IEmployerDetailRepository _employerDetail;

        public EmployerDetailController(IEmployerDetailRepository employerDetail)
        {
           _employerDetail = employerDetail;
        }




        // GET: api/Employer
        [HttpGet]
        public async Task<IActionResult> GetAllEmployers()
        {
            var result = await _employerDetail.GetAllEmployers();
            if (result != null)
            {
                return Ok(result);
            }
            else
            {
                return NoContent();
            }
        }

        // GET: api/Employer/5
        [HttpGet("getById/{id}")]
        public async Task<ActionResult<EmployerDetailModel>> GetEmployerById(int id)
        {
            var item = await _employerDetail.GetById(id);
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
        public async Task<ActionResult<EmployerDetailModel>> GetEmployerByEmail(string email)
        {
            var item = await _employerDetail.GetByEmail(email);
            if (item == null)
            {
                return NotFound(); //return status code 404
            }
            else
            {
                return Ok(item); // return data with status code 200
            }
        }

        // POST: api/Employer
        [HttpPost]
        public async Task<IActionResult> AddNewEmployer(EmployerDetailModel employer)
        {
            var result = await _employerDetail.AddNew(employer);
            return Ok(result);

        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmployerDetail(int id)
        {
            var item = await _employerDetail.GetById(id);
            if (item == null)
            {
                return NotFound();
            }
            else
            {
                await _employerDetail.Delete(id);
                return Ok(true); // status code: 204 (No Content)
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateEmployerDetail([FromRoute] int id, [FromBody] EmployerDetailModel employerDetailModel)
        {
            await _employerDetail.UpdateEmployerDetails(id, employerDetailModel);
            return Ok(employerDetailModel);
        }
    }
}
