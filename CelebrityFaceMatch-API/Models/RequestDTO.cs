﻿using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CelebrityFaceMatch_API.Models
{
    public class RequestDTO
    {
        public IFormFile File { get; set; }
    }
}
