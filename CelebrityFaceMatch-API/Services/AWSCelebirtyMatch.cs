using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;
using Amazon.Rekognition;
using Amazon.Rekognition.Model;
using Microsoft.Extensions.Options;
using Microsoft.AspNetCore.Http;
using CelebrityFaceMatch_API.Services;

namespace CelebrityFaceMatch_API.Models
{
    public class AWSCelebirtyMatch: IAWSCelebrityMatch
    {
        private readonly IOptionsSnapshot<AWSCredentials> _awsCredentials;
        ResponseDTO ResponseDetail = new ResponseDTO();
        List<CelebrityDetail> CelebrityDetails = new List<CelebrityDetail>();
        CelebrityDetail CelebrityDetail = new CelebrityDetail();
        public AWSCelebirtyMatch(IOptionsSnapshot<AWSCredentials> awsCredentials)
        {
            _awsCredentials = awsCredentials;
        }
        /// <summary>
        /// Get Face Matches for Celebrities from Amazon service 
        /// </summary>
        /// <param name="photo"></param>
        /// <returns></returns>
        public async Task<ResponseDTO> GetMatches(IFormFile photo)
        {
            try
            {
                AmazonRekognitionClient rekognitionClient = new AmazonRekognitionClient(_awsCredentials.Value.Id, _awsCredentials.Value.Key, Amazon.RegionEndpoint.USEast2);
                RecognizeCelebritiesRequest recognizeCelebritiesRequest = new RecognizeCelebritiesRequest();
                Image img = new Image();
                byte[] data = null;
                try
                {
                    if (photo.Length > 0)
                    {
                        using (var ms = new MemoryStream())
                        {
                            photo.CopyTo(ms);
                            data = ms.ToArray();
                        }
                    }
                }
                catch (Exception ex)
                {
                    throw ex;
                }
                img.Bytes = new MemoryStream(data);
                recognizeCelebritiesRequest.Image = img;
                RecognizeCelebritiesResponse recognizeCelebritiesResponse = await rekognitionClient.RecognizeCelebritiesAsync(recognizeCelebritiesRequest);
                foreach (Celebrity celebrity in recognizeCelebritiesResponse.CelebrityFaces)
                {
                    CelebrityDetail.Name = celebrity.Name;
                    foreach (string url in celebrity.Urls)
                    {
                        CelebrityDetail.Url = url;
                    }
                    CelebrityDetails.Add(CelebrityDetail);
                    CelebrityDetail = new CelebrityDetail();
                }
                ResponseDetail.CelebrityDetails = CelebrityDetails;
                ResponseDetail.UnMatchCount = recognizeCelebritiesResponse.UnrecognizedFaces.Count;
                return ResponseDetail;
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
    }
}
