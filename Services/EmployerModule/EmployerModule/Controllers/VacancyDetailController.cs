using EmployerModule.Models;
using EmployerModule.Repository.VacancyDetailRepo;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace EmployerModule.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VacancyDetailController : ControllerBase
    {
        private readonly IVacancyDetailRepository _vacancyDetail;

        public VacancyDetailController(IVacancyDetailRepository vacancyDetail)
        {
            _vacancyDetail = vacancyDetail;
        }



        // GET: /api/VacancyDetail
        [HttpGet]
        public async Task<IActionResult> GetAllVacancies([FromQuery] string filterByJobType, [FromQuery] int minSalary, [FromQuery] int maxSalary, [FromQuery] string sortBy="all", [FromQuery] int pageSize=5, [FromQuery] int pageIndex=1)

        {
            var result = await _vacancyDetail.GetAllVacancies(sortBy, pageSize, pageIndex, filterByJobType, minSalary, maxSalary);
            if (result != null)
            {
                return Ok(result);
            }
            else
            {
                return NoContent();
            }
        }

        // GET: /api/VacancyDetail/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<VacancyDetailModel>> GetVacancyById(int id)
        {
            var item = await _vacancyDetail.GetById(id);
            if (item == null)
            {
                return NotFound(); //return status code 404
            }
            else
            {
                return Ok(item); // return data with status code 200
            }
        }

        // GET: /api/VacancyDetail/getByEmail/{email}
        [HttpGet("getByEmail/{email}")]
        public async Task<ActionResult<VacancyDetailModel>> GetVacancyByEmail(string email)
        {
            var item = await _vacancyDetail.GetByEmail(email);
            if (item == null)
            {
                return NotFound(); //return status code 404
            }
            else
            {
                return Ok(item); // return data with status code 200
            }
        }


        // POST: /api/VacancyDetail
        [HttpPost]
        public async Task<IActionResult> AddNewEmployer(VacancyDetailModel vacancy)
        {
            var result = await _vacancyDetail.AddNewVacancy(vacancy);
            return Ok(result);

        }

        //DELETE: /api/VacancyDetail/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteVacancy(int id)
        {
            var item = await _vacancyDetail.GetById(id);
            if (item == null)
            {
                return NotFound();
            }
            else
            {
                await _vacancyDetail.Delete(id);
                return Ok(true); // status code: 204 (No Content)
            }
        }


        //PUT: /api/VacancyDetail/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateVacancyDetail([FromRoute] int id, [FromBody] VacancyDetailModel vacancyDetailModel)
        {
            await _vacancyDetail.UpdateVacancyDetail(id, vacancyDetailModel);
            return Ok(vacancyDetailModel);
        }
    }
}
