using JobSeeker.Models;
using JobSeekerModule.Repository.ExperienceRepo;
using JobSeekerModule.RequestModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace JobSeekerModule.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExperienceController : ControllerBase
    {
        private readonly IExperienceRepository _experience;

        public ExperienceController(IExperienceRepository experience)
        {
            _experience = experience;
        }

     
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var result = await _experience.GetAll();
            if (result != null)
            {
                return Ok(result);
            }
            else
            {
                return NoContent();
            }
        }

   
        [HttpPost]
        public async Task<IActionResult> AddNew(ExperienceReqModel experience)
        {
            await _experience.AddNew(experience);
            return Ok(true);

        }

        
        [HttpGet("getById/{id}")]
        public async Task<ActionResult<ExperienceReqModel>> GetById(int id)
        {
            var item = await _experience.GetById(id);
            if (item == null)
            {
                return NotFound(); //return status code 404
            }
            else
            {
                return Ok(item); // return data with status code 200
            }
        }


        [HttpGet("getByEmail/{email}")]
        public async Task<ActionResult<ExperienceReqModel>> GetByEmail(string email)
        {
            var item = await _experience.GetByEmail(email);
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
            var item = await _experience.GetById(id);
            if (item == null)
            {
                return NotFound();
            }
            else
            {
                await _experience.Delete(id);
                return Ok(true); // status code: 204 (No Content)
            }
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateExperience([FromRoute] int id, [FromBody] ExperienceReqModel experience)
        {
            await _experience.UpdateExperience(id, experience);
            return Ok(experience);
        }

    }
}
