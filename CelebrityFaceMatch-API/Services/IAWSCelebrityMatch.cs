using CelebrityFaceMatch_API.Models;
using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;

namespace CelebrityFaceMatch_API.Services
{
    public interface IAWSCelebrityMatch
    {
        Task<ResponseDTO> GetMatches(IFormFile photo);
    }
}
