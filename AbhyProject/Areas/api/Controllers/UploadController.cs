using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Web;
using System.Web.Http;
using System.Net;
using System.Web.Script.Serialization;

namespace AbhyProject.Areas.api.Controllers
{
    public class UploadController : ApiController //Controller
    {
        string sBaseURL = ConfigurationManager.AppSettings.Get("mobilebaseurl").ToString() + "/attachments/";// "http://ataljal-mobileapi.mowr.gov.in";
        string sUploadDirectory = ConfigurationManager.AppSettings.Get("mobileuploaddir").ToString();//"C:/WebSites/MobileImages/";
        string sNewFileName = DateTime.Now.ToString("ddMMyyyy_HHmmss");



        [Route("api/upload/imageupload")]
        [HttpPost]
        public IHttpActionResult imageUpload()
        {
            try
            {

                var httpRequest = HttpContext.Current.Request;
                if (httpRequest.Files.Count > 0)
                {
                    string Fname = "";
                    foreach (string file in httpRequest.Files)
                    {
                        if (string.Equals(Path.GetExtension(httpRequest.Files[file].FileName), ".jpg") || string.Equals(Path.GetExtension(httpRequest.Files[file].FileName), ".jpeg"))
                        {
                            string sFileName = "ataljal_gt_" + sNewFileName + ".jpg";
                            var postedFile = httpRequest.Files[file];
                            if (!Directory.Exists(sUploadDirectory))
                            {
                                Directory.CreateDirectory(sUploadDirectory);
                            }
                            postedFile.SaveAs(sUploadDirectory + sFileName);
                            Fname = sBaseURL + sFileName;
                            //var sOutput = new Dictionary<string, string>();                       
                        }
                        else
                        {
                            Dictionary<object, object> dict2 = new Dictionary<object, object>();
                            dict2.Add("status", "upload image");
                            //dict.Add("data", Final_data);
                            return Ok(dict2);
                        }
                    }
                    Dictionary<object, object> dict1 = new Dictionary<object, object>();
                    dict1.Add("status", "success");
                    dict1.Add("path", Fname);
                    //dict.Add("data", Final_data);
                    return Ok(dict1);
                }
                else
                {
                    Dictionary<object, object> dict1 = new Dictionary<object, object>();
                    dict1.Add("status", "file not uploaded");
                    //dict.Add("data", Final_data);
                    return Ok(dict1);
                }


            }
            catch (Exception ex)
            {
                Dictionary<object, object> dict = new Dictionary<object, object>();
                dict.Add("status", ex.Message);
                return Content(HttpStatusCode.BadRequest, dict);

                //var sOutput = new Dictionary<string, string>
                //{
                //    { "status", ex.Message}
                //};
                //return Json(sOutput, JsonRequestBehavior.AllowGet);
            }
        }

        [Route("api/upload/wordupload")]
        [HttpPost]
        public IHttpActionResult wordUpload()
        {
            try
            {

                var httpRequest = HttpContext.Current.Request;
                if (httpRequest.Files.Count > 0)
                {
                    string Fname = "";
                    foreach (string file in httpRequest.Files)
                    {
                        if (string.Equals(Path.GetExtension(httpRequest.Files[file].FileName), ".docx"))
                        {
                            string sFileName = "ataljal_gt_" + sNewFileName + ".docx";
                            var postedFile = httpRequest.Files[file];
                            if (!Directory.Exists(sUploadDirectory))
                            {
                                Directory.CreateDirectory(sUploadDirectory);
                            }
                            postedFile.SaveAs(sUploadDirectory + sFileName);
                            Fname = sBaseURL + sFileName;
                            //var sOutput = new Dictionary<string, string>();                           
                        }
                        else
                        {
                            Dictionary<object, object> dict2 = new Dictionary<object, object>();
                            dict2.Add("status", "upload file");
                            //dict.Add("data", Final_data);
                            return Ok(dict2);
                        }
                    }
                    Dictionary<object, object> dict1 = new Dictionary<object, object>();
                    dict1.Add("status", "success");
                    dict1.Add("path", Fname);
                    //dict.Add("data", Final_data);
                    return Ok(dict1);
                }
                else
                {
                    Dictionary<object, object> dict1 = new Dictionary<object, object>();
                    dict1.Add("status", "file not uploaded");
                    //dict.Add("data", Final_data);
                    return Ok(dict1);
                }


            }
            catch (Exception ex)
            {
                Dictionary<object, object> dict = new Dictionary<object, object>();
                dict.Add("status", false);
                dict.Add("message", ex.InnerException.ToString());
                return Content(HttpStatusCode.BadRequest, dict);

                //var sOutput = new Dictionary<string, string>
                //{
                //    { "status", ex.Message}
                //};
                //return Json(sOutput, JsonRequestBehavior.AllowGet);
            }
        }

        [Route("api/upload/pdfupload")]
        [HttpPost]
        public IHttpActionResult pdfUpload()
        {
            try
            {

                var httpRequest = HttpContext.Current.Request;
                if (httpRequest.Files.Count > 0)
                {
                    string Fname = "";
                    foreach (string file in httpRequest.Files)
                    {
                        if (string.Equals(Path.GetExtension(httpRequest.Files[file].FileName), ".pdf"))
                        {
                            string sFileName = "ataljal_gt_" + sNewFileName + ".pdf";
                            var postedFile = httpRequest.Files[file];
                            if (!Directory.Exists(sUploadDirectory))
                            {
                                Directory.CreateDirectory(sUploadDirectory);
                            }
                            postedFile.SaveAs(sUploadDirectory + sFileName);
                            Fname = sBaseURL + sFileName;
                            //var sOutput = new Dictionary<string, string>();                         
                        }
                        else
                        {
                            Dictionary<object, object> dict2 = new Dictionary<object, object>();
                            dict2.Add("status", "upload file");
                            //dict.Add("data", Final_data);
                            return Ok(dict2);
                        }
                    }

                    Dictionary<object, object> dict1 = new Dictionary<object, object>();
                    dict1.Add("status", "success");
                    dict1.Add("path", Fname);
                    //dict.Add("data", Final_data);
                    return Ok(dict1);
                }
                else
                {
                    Dictionary<object, object> dict1 = new Dictionary<object, object>();
                    dict1.Add("status", "file not uploaded");
                    //dict.Add("data", Final_data);
                    return Ok(dict1);
                }


            }
            catch (Exception ex)
            {
                Dictionary<object, object> dict = new Dictionary<object, object>();
                dict.Add("status", false);
                dict.Add("message", ex.InnerException.ToString());
                return Content(HttpStatusCode.BadRequest, dict);

                //var sOutput = new Dictionary<string, string>
                //{
                //    { "status", ex.Message}
                //};
                //return Json(sOutput, JsonRequestBehavior.AllowGet);
            }
        }
    }
}