using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace WebApplication1.Controllers
{
    [ApiController]
    [Route("/people")]
    public class PeopleController : ControllerBase
    {
        public PeopleController() { }

        [HttpGet]
        public IActionResult Get()
        {
            Person person = new Person()
            {
                Id = 1,
                Name = "Nicolás",
                Age = 25
            };
            Person person2 = new Person()
            {
                Id = 2,
                Name = "Eustaquio",
                Age = 67
            };
            Person person3 = new Person()
            {
                Id = 3,
                Name = "Jacinta",
                Age = 40
            };
            List<Person> people = new List<Person>
            {
                person,
                person2,
                person3
            };

            return Ok(people);
        }
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            Person person = new Person()
            {
                Id = id,
                Name = "Nicolás",
                Age = 25
            };

            if (id == 1) return Ok(person);
            else return NotFound("No se encontro persona de id: " + id);
        }
        [HttpPost]
        public IActionResult Post([FromBody] Person person)
        {
            return Created("Creado exitoso", person);
        }
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Person person)
        {
            return Ok($"Se modifico a la persona de id: {id}");
        }
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            return Ok($"Se elimino a la persona de id: {id}");
        }
        [HttpGet("example")]
        public IActionResult GetByName([FromQuery] string name)
        {
            if (name == null) return BadRequest("Debe ingresar un nombre");
            Person person = new Person()
            {
                Id = 1,
                Name = name,
                Age = 25
            };
            return Ok(person);

        }
    }
}
