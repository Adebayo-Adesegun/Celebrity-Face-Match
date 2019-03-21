using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CelebrityFaceMatch_API.Models
{
    public class ResponseDTO
    {
      public int UnMatchCount { get; set; }
      public List<CelebrityDetail> CelebrityDetails { get; set; }
    }
}
