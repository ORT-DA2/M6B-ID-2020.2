using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace WebApplication1.Controllers
{
    [ApiController]
    [Route("v1/People")]
    public class PeopleControllerv1 : ControllerBase
    {
        public PeopleControllerv1() { }

        [HttpGet]
        public IEnumerable<Person> Get()
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

            return people;
        }
        [HttpGet("{id}")]
        public Person GetById(int id)
        {
            Person person = new Person()
            {
                Id = id,
                Name = "Nicolás",
                Age = 25
            };

            return person;
        }
        [HttpPost]
        public string Post([FromBody] Person person)
        {
            return $"Se agrego a la persona de nombre: {person.Name}";
        }
        [HttpPut("{id}")]
        public string Put(int id, [FromBody] Person person)
        {
            return $"Se modifico a la persona de id: {id}";
        }
        [HttpDelete("{id}")]
        public string Delete(int id)
        {
            return $"Se elimino a la persona de id: {id}";
        }
        [HttpGet("example")]
        public Person GetByName([FromQuery] string name)
        {
            Person person = new Person()
            {
                Id = 1,
                Name = name,
                Age = 25
            };
            return person;
        }
    }
}
