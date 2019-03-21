using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CelebrityFaceMatch_API.Models;
using CelebrityFaceMatch_API.Services;
using Microsoft.AspNetCore.Mvc;

namespace CelebrityFaceMatch_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FaceMatchController : ControllerBase
    {
        private readonly IAWSCelebrityMatch _aws;
        public FaceMatchController(IAWSCelebrityMatch aws)
        {
            _aws = aws;
        }
       
        // POST api/values
        [HttpPost]
        public async Task<IActionResult> Post([FromForm]RequestDTO request)
        {
            if(request != null || request.Image.Length  > 0)
            {
                var matches = await _aws.GetMatches(request.Image);
                if (matches.CelebrityDetails != null)
                    return Ok(matches);
                return BadRequest("No celebrity match");
            }
            return BadRequest("request error");
        }

    }
}
