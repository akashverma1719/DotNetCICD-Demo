using AbhyProject.Models;
using AbhyProject.Utility;
using DocumentFormat.OpenXml.Drawing.Charts;
using DocumentFormat.OpenXml.Office2010.Excel;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using OfficeOpenXml.FormulaParsing.Excel.Functions.DateTime;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web;
using System.Web.Hosting;
using System.Web.Http;
using System.Web.Http.Results;
using System.Web.Script.Serialization;

namespace AbhyProject.Areas.api.Controllers
{
    public class DiskInfoController : ApiController
    {
        AbhyEntity ABE = new AbhyEntity();


        [Route("api/DiskInfoController/getDiskInfo")]
        [HttpPost]
        public IHttpActionResult DiskInfo()//rainfall
        {
            try
            {

                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<dynamic>(HttpContext.Current.Request.Params["Data"]);

                if (result["capacity"] == null || result["used"] == null || result["drive"] == null || result["req"] == null)
                {
                    return BadRequest("Please provide capacity , Used Space");
                }

                string sDriveName = result["drive"];
                string sRequire = result["req"];
                double dTotalCapacity = Convert.ToDouble(result["capacity"]);
                double dUsedCapacity = Convert.ToDouble(result["used"]);
                double dTotalCapacityInPer = 100.00;

                double dFreeCapacity = dTotalCapacity - dUsedCapacity;

                double dFreeCapacityInPer = Math.Round(dFreeCapacity / dTotalCapacity * 100, 2);
                double dUsedCapacityInPer = Math.Round(dTotalCapacityInPer - dFreeCapacityInPer, 2);
                double dMoreThanUsed = Math.Round(dTotalCapacityInPer - dFreeCapacityInPer, 2);


                var Email_info = ABE.obj_abhy_wsp_email_info.Where(x => x.active == 1).ToList();

                string Email = "";
                string Email_cc = "";
                for (int i = 0; i < Email_info.Count; i++)
                {
                    Email += Email_info[i].email_id + ",";
                    if (Email_info[i].email_cc != "")
                    {
                        Email_cc += Email_info[i].email_cc + ",";
                    }
                }

                if (Email != "")
                {
                    Email = Email.TrimEnd(',');
                    Email_cc = Email_cc.TrimEnd(',');
                }

                //string Email = "vivekvivektiwari80@gmail.com";

                string Mail_Subject = "ATAL JAL NIC SERVER - CRITICAL DISK USAGE ALERT [" + DateTime.Now + "]";

                StringBuilder sb = new StringBuilder();
                sb.Append("<p><strong><span style='font-size:14px'>Dear Concern,</span></strong></p>");
                sb.Append("<hr/>");
                sb.Append("<p><span style='font-size:14px'><strong>Disk Usage on <span style='color:#ff0000'>{{DriveName}}</span> is more than <span style='color:#ff0000'>{{MoreThanUsed}}%</span>.</strong></span></p>");
                sb.Append("<hr/>");
                sb.Append("<table style='width: 340px'>");
                sb.Append("<tbody>");
                sb.Append("<tr>");
                sb.Append("<td style='width:124px'><span style='font-size:14px'><strong>Total Capacity:</strong></span></td>");
                sb.Append("<td style='text-align:right; width:90px'><span style='font-size:14px'><strong>{{TotalCapacity}} GB</strong></span></td>");
                sb.Append("<td style='text-align:right; width:103px'><span style='font-size:14px'><strong>{{TotalCapacityInPer}}%</strong></span></td>");
                sb.Append("</tr>");
                sb.Append("<tr>");
                sb.Append("<td style='width:124px'><span style='font-size:14px'><strong>Used Capacity:</strong></span></td>");
                sb.Append("<td style='text-align:right; width:90px'><span style='font-size:14px'><strong>{{UsedCapacity}} GB</strong></span></td>");
                sb.Append("<td style='text-align:right; width:103px'><span style='font-size:14px'><strong>{{UsedCapacityInPer}}%</strong></span></td>");
                sb.Append("</tr>");
                sb.Append("<tr>");
                sb.Append("<td style='width:124px'><span style='font-size:14px'><strong>Free Capacity:</strong></span></td>");
                sb.Append("<td style='text-align:right; width:90px'><span style='font-size:14px'><strong>{{FreeCapacity}} GB</strong></span></td>");
                sb.Append("<td style='text-align:right; width:103px'><span style='font-size:14px'><strong>{{FreeCapacityInPer}}%</strong></span></td>");
                sb.Append("</tr>");
                sb.Append("</tbody>");
                sb.Append("</table>");
                sb.Append("<hr/>");
                sb.Append("<p><span style='font-size:14px'><strong>You are requested to kindly intiate the disk space requirement to NIC for atleast <span style='color:#ff0000'>{{sRequire}} GB</span>.</strong></span></p>");


                sb.Replace("{{DriveName}}", sDriveName);
                sb.Replace("{{TotalCapacity}}", dTotalCapacity.ToString());
                sb.Replace("{{TotalCapacityInPer}}", dTotalCapacityInPer.ToString());
                sb.Replace("{{UsedCapacity}}", dUsedCapacity.ToString());
                sb.Replace("{{UsedCapacityInPer}}", dUsedCapacityInPer.ToString());
                sb.Replace("{{FreeCapacity}}", dFreeCapacity.ToString());
                sb.Replace("{{FreeCapacityInPer}}", dFreeCapacityInPer.ToString());
                sb.Replace("{{MoreThanUsed}}", dMoreThanUsed.ToString());
                sb.Replace("{{sRequire}}", sRequire.ToString());


                var results = WebConstents.SendEmailSMTP(Email, Email_cc, Mail_Subject, sb.ToString(), "");

                if (results == "success")
                {
                    Dictionary<object, object> dict = new Dictionary<object, object>();
                    dict.Add("status", true);
                    dict.Add("message", "Email Sent.");
                    //dict.Add("data", Final_data);
                    return Ok(dict);

                }
                else
                {
                    Dictionary<object, object> dict = new Dictionary<object, object>();
                    dict.Add("status", false);
                    dict.Add("message", "Failed");
                    //dict.Add("data", Final_data);
                    return Content(HttpStatusCode.BadRequest, dict);
                }
            }
            catch (Exception e)
            {
                if (e.Message == "An error occurred while updating the entries. See the inner exception for details.")
                {
                    Dictionary<object, object> dict = new Dictionary<object, object>();
                    dict.Add("status", false);
                    dict.Add("message", e.InnerException.ToString());
                    return Content(HttpStatusCode.BadRequest, dict);
                }
                else
                {
                    Dictionary<object, object> dict = new Dictionary<object, object>();
                    dict.Add("status", false);
                    dict.Add("message", e.Message.ToString());
                    return Content(HttpStatusCode.BadRequest, dict);
                }
            }
        }

        //[Route("api/DiskInfo/GetAllUsers")]
        //[HttpGet]
        //public IHttpActionResult GetAllUsers()
        //{
        //    try
        //    {
        //        var data = ABENew.objUsers.Take(1).ToList();
        //        string json = JsonConvert.SerializeObject(data);
        //        Log($"Success{json}");
        //        return Ok(new { status = 200, data = data });

        //    }
        //    catch (Exception ex)
        //    {
        //        Log($"Error{ex.InnerException.Message.ToString()}");
        //        return Content(HttpStatusCode.BadRequest, ex.Message.ToString());

        //    }
        //    return Content(HttpStatusCode.BadRequest, "failed");
        //}

        //private void Log(string message)
        //{
        //    string logFilePath = HostingEnvironment.MapPath("~/Apilog24_25.txt");
        //    using (StreamWriter writer = new StreamWriter(logFilePath, true))
        //    {
        //        writer.WriteLine($"{DateTime.Now}: {message}");
        //    }
        //}



        [HttpGet]
        [Route("api/DiskInfo/GetFilepath/{state}/{dist}/{block}/{gram}")]
        public HttpResponseMessage GetFilepath(string state,string dist,string block,string gram)
        {
             
            string fileName = string.Empty;
            var Wsp_Pdf = string.Empty;
            string fullPath = string.Empty;
            string fullPath_UpdateAtaljalimages = string.Empty;
            string baseDirectory = string.Empty;
            string baseDirectory2 = string.Empty;
                       
            var Data = ABE.obj_abhy_mis_wsp_approved.Where(x => x.state_name == state.Trim() && x.district_name == dist.Trim() && x.block_name == block.Trim() && x.gpname == gram.Trim()).FirstOrDefault();
            if (Data.wsp_23_update_path != null)
            {
                baseDirectory = $"~/Ataljalimages/WspApproved/{state}/{dist}/{block}/2023-24 Update/";
                baseDirectory2 = $"~/UpdateAtaljalimages/WspApproved/{state}/{dist}/{block}/2023-24 Update/";
                fileName = Data.wsp_23_update_file;
                Wsp_Pdf = Data.wsp_23_update_path;
                string sanitizedFileName = Path.GetFileName(fileName);
                fullPath = HostingEnvironment.MapPath(baseDirectory) + sanitizedFileName; 
                fullPath_UpdateAtaljalimages = HostingEnvironment.MapPath(baseDirectory) + sanitizedFileName; 
                
                if (File.Exists(fullPath))
                {
                    // Read the file content
                    byte[] pdfBytes = System.IO.File.ReadAllBytes(fullPath);

                    // Create a response message with the PDF data
                    HttpResponseMessage response = new HttpResponseMessage(HttpStatusCode.OK);
                    response.Content = new ByteArrayContent(pdfBytes);
                    response.Content.Headers.ContentDisposition = new System.Net.Http.Headers.ContentDispositionHeaderValue("attachment")
                    {
                        FileName = sanitizedFileName
                    };
                    response.Content.Headers.ContentType = new System.Net.Http.Headers.MediaTypeHeaderValue("application/pdf");
                    return response;
                }
                else if (File.Exists(fullPath_UpdateAtaljalimages))
                {

                    // Read the file content
                    byte[] pdfBytes = System.IO.File.ReadAllBytes(fullPath_UpdateAtaljalimages);

                    // Create a response message with the PDF data
                    HttpResponseMessage response = new HttpResponseMessage(HttpStatusCode.OK);
                    response.Content = new ByteArrayContent(pdfBytes);
                    response.Content.Headers.ContentDisposition = new System.Net.Http.Headers.ContentDispositionHeaderValue("attachment")
                    {
                        FileName = sanitizedFileName
                    };
                    response.Content.Headers.ContentType = new System.Net.Http.Headers.MediaTypeHeaderValue("application/pdf");
                    return response;
                }
                else
                {
                    return Request.CreateErrorResponse(HttpStatusCode.NotFound, "PDF file not found.");

                }
            }
            else
            {
                baseDirectory = $"~/Ataljalimages/WspApproved/{state}/{dist}/{block}/2023-24/";
                baseDirectory2 = $"~/UpdateAtaljalimages/WspApproved/{state}/{dist}/{block}/2023-24/";
                fileName = Data.wsp_23_finename;
                Wsp_Pdf = Data.wsp_23_filepath;
                string sanitizedFileName = Path.GetFileName(fileName);
                fullPath = HostingEnvironment.MapPath(baseDirectory) + sanitizedFileName;
                fullPath_UpdateAtaljalimages = HostingEnvironment.MapPath(baseDirectory) + sanitizedFileName;

                if (File.Exists(fullPath))
                {
                    byte[] pdfBytes = System.IO.File.ReadAllBytes(fullPath_UpdateAtaljalimages);

                    // Create a response message with the PDF data
                    HttpResponseMessage response = new HttpResponseMessage(HttpStatusCode.OK);
                    response.Content = new ByteArrayContent(pdfBytes);
                    response.Content.Headers.ContentDisposition = new System.Net.Http.Headers.ContentDispositionHeaderValue("attachment")
                    {
                        FileName = sanitizedFileName
                    };
                    response.Content.Headers.ContentType = new System.Net.Http.Headers.MediaTypeHeaderValue("application/pdf");
                    return response;

                }
                else if (File.Exists(fullPath_UpdateAtaljalimages))
                {

                    // Read the file content
                    byte[] pdfBytes = System.IO.File.ReadAllBytes(fullPath_UpdateAtaljalimages);

                    // Create a response message with the PDF data
                    HttpResponseMessage response = new HttpResponseMessage(HttpStatusCode.OK);
                    response.Content = new ByteArrayContent(pdfBytes);
                    response.Content.Headers.ContentDisposition = new System.Net.Http.Headers.ContentDispositionHeaderValue("attachment")
                    {
                        FileName = sanitizedFileName
                    };
                    response.Content.Headers.ContentType = new System.Net.Http.Headers.MediaTypeHeaderValue("application/pdf");
                    return response;
                }
                else
                {
                    return Request.CreateErrorResponse(HttpStatusCode.NotFound, "PDF file not found.");

                }

            }
            //var Wsp_Pdf = ABE.obj_abhy_mis_wsp_approved.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).Select(x => x.wsp_23_update_path).FirstOrDefault();


            // Path to the PDF file
            //string filePath = @"D:\docs\MOM.pdf";


            //// Check if the file exists
            //if (!System.IO.File.Exists(filePath))
            //{
            //    return Request.CreateErrorResponse(HttpStatusCode.NotFound, "PDF file not found.");
            //}

            //if (File.Exists(fullPath))
            //{
            //    // Read the file content
            //    byte[] pdfBytes = System.IO.File.ReadAllBytes(filePath);

            //    // Create a response message with the PDF data
            //    HttpResponseMessage response = new HttpResponseMessage(HttpStatusCode.OK);
            //    response.Content = new ByteArrayContent(pdfBytes);
            //    response.Content.Headers.ContentDisposition = new System.Net.Http.Headers.ContentDispositionHeaderValue("attachment")
            //    {
            //        FileName = "your_pdf_file.pdf"
            //    };
            //    response.Content.Headers.ContentType = new System.Net.Http.Headers.MediaTypeHeaderValue("application/pdf");
            //    return response;
            //}


            

        }

    }
}