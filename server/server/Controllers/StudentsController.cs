using Microsoft.AspNetCore.Mvc;
using System;
using System.Numerics;
using static System.Net.Mime.MediaTypeNames;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController : ControllerBase
    {
        public static List<Student> STUDENTS = new List<Student>
        {
            new Student { id= 1, firstName= "Zipi", familyName="Lindenfeld", adress= "כהנמן 83 א בני ברק", phone= "0556776310", active= false, marksAvg=98, profession= 1, leaveDate= DateTime.Now, year=1 },
            new Student{ id=2, firstName= "Ruth", familyName= "Hershler", adress= "פתח תקווה", phone= "0533137873", active= true, marksAvg= 99, leaveDate=DateTime.Now, profession=1, year= 2 },
            new Student { id= 3, firstName= "dfg", familyName="Lindenfeld", adress= "כהנמן 83 א בני ברק", phone= "0556776310", active= false, marksAvg=98, profession= 1, leaveDate= DateTime.Now, year= 1 },
            new Student{ id=4, firstName= "xcdvfbg", familyName= "Hershler", adress= "פתח תקווה", phone= "0533137873", active= true, marksAvg= 99, leaveDate=DateTime.Now, profession=1, year= 2 },
            new Student { id= 5, firstName= "sdfgh", familyName="Lindenfeld", adress= "כהנמן 83 א בני ברק", phone= "0556776310", active= false, marksAvg=98, profession= 1, leaveDate= DateTime.Now, year= 1 },
            new Student{ id=6, firstName= "dfghj", familyName= "Hershler", adress= "פתח תקווה", phone= "0533137873", active= true, marksAvg= 99, leaveDate=DateTime.Now, profession=1, year= 3 }
        };
        // GET: api/<TasksController>
        [HttpGet]
        public IEnumerable<Student> Get()
        {
            return STUDENTS;
        }

        // GET api/<TasksController>/5
        [HttpGet("active={active}")]
        public IEnumerable<Student> Get(bool active)
        {
            if (active)
                return STUDENTS.Where(s => s.active);
            return STUDENTS;
        }
        [HttpGet("name={name}")]
        public IEnumerable<Student>Get(string name)
        {
            return STUDENTS.Where(s=>s.firstName.Equals(name)||s.familyName.Equals(name));
        }

        // POST api/<TasksController>
        [HttpPost]
        public IActionResult Post([FromBody] Student student)
        {
            STUDENTS.Add(student);
            return Ok(true);
        }

        // PUT api/<TasksController>/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Student value)
        {
            Student student = STUDENTS.Find(s => s.id == id);
            if (student != null)
            {
                student.phone = value.phone;
                student.active = value.active;
                student.year = value.year;
                student.profession = value.profession;
                student.adress = value.adress;
                student.leaveDate = value.leaveDate;
                student.familyName = value.familyName;
                student.firstName = value.firstName;
                return Ok(true);
            }
            return Ok(false);
        }

        // DELETE api/<TasksController>/5
        [HttpDelete("{id}")]
        public bool Delete(int id)
        {
            var student = STUDENTS.Find(s=>s.id == id);
            STUDENTS.Remove(student);
            if(!STUDENTS.Contains(student))
                return true;
            return false;
        }
    }
}
