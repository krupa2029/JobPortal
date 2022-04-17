﻿using EmployerModule.Models;
using EmployerModule.Repository.VacancyRequestRepo;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace EmployerModule.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VacancyRequestController : ControllerBase
    {
      
            private readonly IVacancyRequestRepository _vacancyRequest;

            public VacancyRequestController(IVacancyRequestRepository vacancyRequest)
            {
                 _vacancyRequest = vacancyRequest;
            }



            // GET: /api/VacancyRequest
            [HttpGet]
                public async Task<IActionResult> GetAll()
                {
                    var result = await _vacancyRequest.GetAll();
                    if (result != null)
                    {
                        return Ok(result);
                    }
                    else
                    {
                        return NoContent();
                    }
                }

            // GET: /api/VacancyRequest/{id}
            [HttpGet("{id}")]
                public async Task<ActionResult<VacancyRequestModel>> GetById(int id)
                {
                    var item = await _vacancyRequest.GetById(id);
                    if (item == null)
                    {
                        return NotFound(); //return status code 404
                    }
                    else
                    {
                        return Ok(item); // return data with status code 200
                    }
                }

            // GET: /api/VacancyRequest/getByVacancyId/{id}
            [HttpGet("getByVacancyId/{id}")]
                public async Task<ActionResult<VacancyRequestModel>> GetByVacancyId(int id)
                {
                    var item = await _vacancyRequest.GetByVacancyId(id);
                    if (item == null)
                    {
                        return NotFound(); //return status code 404
                    }
                    else
                    {
                        return Ok(item); // return data with status code 200
                    }
                }

            // GET: /api/VacancyRequest/getByJobSeekerEmail/{email}
            [HttpGet("getByJobSeekerEmail/{email}")]
                public async Task<ActionResult<VacancyRequestModel>> GetByJobSeekerEmail(string email)
                {
                    var item = await _vacancyRequest.GetByJobSeekerEmail(email);
                    if (item == null)
                    {
                        return NotFound(); //return status code 404
                    }
                    else
                    {
                        return Ok(item); // return data with status code 200
                    }
                }

            // GET: /api/VacancyRequest/getByEmployerEmail/{email}
            [HttpGet("getByEmployerEmail/{email}")]
                public async Task<ActionResult<VacancyRequestModel>> GetByEmployerEmail(string email)
                {
                    var item = await _vacancyRequest.GetByEmployerEmail(email);
                    if (item == null)
                    {
                        return NotFound(); //return status code 404
                    }
                    else
                    {
                        return Ok(item); // return data with status code 200
                    }
                }


            // POST: /api/VacancyRequest
            [HttpPost]
                public async Task<IActionResult> AddNew(VacancyRequestModel vacancy)
                {
                    var result = await _vacancyRequest.AddNew(vacancy);
                    return Ok(result);

                }

            //DELETE: /api/VacancyRequest/{id}
            [HttpDelete("{id}")]
                public async Task<IActionResult> Delete(int id)
                {
                    var item = await _vacancyRequest.GetById(id);
                    if (item == null)
                    {
                        return NotFound();
                    }
                    else
                    {
                        await _vacancyRequest.Delete(id);
                        return Ok(true); // status code: 204 (No Content)
                    }
                }


            // PUT: /api/VacancyRequest/{id}
            [HttpPut("{id}")]
                public async Task<IActionResult> Update([FromRoute] int id, [FromBody] VacancyRequestModel vacancyDetailModel)
                {
                    await _vacancyRequest.Update(id, vacancyDetailModel);
                    return Ok(vacancyDetailModel);
                }
            }
    }
