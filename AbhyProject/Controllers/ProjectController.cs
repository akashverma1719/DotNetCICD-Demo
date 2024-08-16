using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Globalization;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;
using AbhyProject.Models;
using System.Configuration;

namespace AbhyProject.Controllers
{
    public class ProjectController : Controller
    {
        AbhyEntity ABE = new AbhyEntity();
        // GET: ProjectWSP_Approved
        public ActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public ActionResult Disbursement()
        {
            return View();
        }
        public ActionResult wsp_approved()
        {
            ViewBag.GPLIst = ABE.obj_abhy_gpdata_new.ToList();
            return View();
        }
        public ActionResult wsp_page()
        {
            return View();
        }

        public ActionResult ApprovedWspReport()
        {
            return View();
        }

        public ActionResult DownloadZipFile(int Id)
        {
            // Retrieve file paths from the database using Entity Framework
            string State = "";
            string Dist = "";
            string Block = "";
            string Gram = "";
            string Year = "";
            List<string> obj = new List<string>();
            var Data = ABE.obj_abhy_mis_wsp_approved.Where(x => x.id == Id).FirstOrDefault();
            var Wsp_Pdf = ABE.obj_abhy_mis_wsp_approved.Where(x => x.id == Id).Select(x => x.wsp_23_filepath).FirstOrDefault();
            if (Data != null)
            {
                State = Data.state_name;
                Dist = Data.district_name;
                Block = Data.block_name;
                Gram = Data.gpname;
                Year = Data.fy_year;

                if (Wsp_Pdf != null)
                {
                    obj.Add(Wsp_Pdf);
                }
                var DPMU_Pdf = ABE.obj_abhy_wsp_dpmu_declaration_vw.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.data_year == Year).Select(x => x.dpmu_declaration).FirstOrDefault();
                if (DPMU_Pdf != null)
                {
                    obj.Add(DPMU_Pdf);
                }
                var MOM_Pdf = ABE.obj_abhy_wsp_pgwm_committee_meeting_vw.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.data_year == Year).Select(x => x.mom_doc).FirstOrDefault();
                if (MOM_Pdf != null)
                {
                    obj.Add(MOM_Pdf);
                }
                var meeting_res = ABE.obj_abhy_wsp_pgwm_committee_meeting_vw.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.data_year == Year).Select(x => x.meeting_resolution).FirstOrDefault();
                if (meeting_res != null)
                {
                    obj.Add(meeting_res);
                }
                var attendance_sheet = ABE.obj_abhy_wsp_pgwm_committee_meeting_vw.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.data_year == Year).Select(x => x.attendance_sheet).FirstOrDefault();
                if (attendance_sheet != null)
                {
                    obj.Add(attendance_sheet);
                }
            }
            // Create a memory stream to store the zip file
            using (MemoryStream memoryStream = new MemoryStream())
            {
                // Create a zip archive
                using (ZipArchive archive = new ZipArchive(memoryStream, ZipArchiveMode.Create, true))
                {
                    // Add each PDF file to the zip archive
                    foreach (string pdfFilePath in obj)
                    {
                        //string fileName = Path.GetFileName(pdfFilePath);
                        //// Add files to the zip archive (replace "FilePath1" and "FilePath2" with actual file paths)
                        //AddFileToZip(archive, Server.MapPath(pdfFilePath), fileName);
                        string fileName = Path.GetFileName(pdfFilePath);
                        // Add files to the zip archive (replace "FilePath1" and "FilePath2" with actual file paths)
                        string key = ConfigurationManager.AppSettings["path"];
                        string _fname = pdfFilePath.Substring(1);
                        string _filepath = $"{key}{pdfFilePath.Substring(1)}";
                        if (System.IO.File.Exists(_filepath))
                        {
                            AddFileToZip(archive, _filepath, fileName);
                        }
                        else
                        {
                            AddFileToZip(archive, Server.MapPath(pdfFilePath), fileName);
                        }

                    }
                }

                // Set the position to the beginning of the stream
                memoryStream.Position = 0;

                // Set the response headers
                Response.Clear();
                Response.AddHeader("Content-Disposition", "attachment; filename=" + Gram + "_" + Year + "_WaterSecurityPlan.zip");
                Response.ContentType = "application/zip";

                // Copy the zip file to the response stream
                memoryStream.CopyTo(Response.OutputStream);
                Response.Flush();
                Response.End();
            }
            return View();
        }



        private void AddFileToZip(ZipArchive archive, string filePath, string entryName)
        {
            // Create a new entry in the zip archive
            ZipArchiveEntry entry = archive.CreateEntry(entryName);

            // Open the file to be added to the archive
            using (FileStream fileStream = new FileStream(filePath, FileMode.Open))
            {
                // Copy the file content to the zip entry
                using (Stream entryStream = entry.Open())
                {
                    fileStream.CopyTo(entryStream);
                }
            }
        }

        //public ActionResult DownloadFiles()
        //{
        //    // Retrieve file paths from the database using Entity Framework
        //    var Wsp_Pdf = ABE.obj_abhy_mis_wsp_approved.Select(x => x.wsp_23_filepath).ToList();

        //    //List<string> pdfFilePaths = db.PdfFiles.Select(p => p.FilePath).ToList();

        //    // Create a memory stream to hold the zip file
        //    //using (MemoryStream memoryStream = new MemoryStream())
        //    //{
        //    //    // Create a ZipArchive
        //    //    using (ZipArchive zipArchive = new ZipArchive(memoryStream, ZipArchiveMode.Create, true))
        //    //    {
        //    //        // Add each PDF file to the zip archive
        //    //        foreach (string pdfFilePath in Wsp_Pdf)
        //    //        {
        //    //            string fileName = Path.GetFileName(pdfFilePath);
        //    //            //zipArchive.CreateEntryFromFile(pdfFilePath, fileName, CompressionLevel.Optimal, true);
        //    //            //zipArchive.CreateEntry(pdfFilePath, fileName);
        //    //            //zipArchive.CreateEntry(fileName, CompressionLevel.Optimal);
        //    //        }
        //    //    }

        //    //    // Set the position of the memory stream back to the beginning
        //    //    memoryStream.Position = 0;

        //    //    // Send the zip file to the user for download
        //    //    return File(memoryStream, "application/zip", "DownloadedFiles.zip");
        //    //}


        //    Response.AddHeader("Content-Disposition", "attachment; filename=DownloadedFiles.zip");
        //    Response.ContentType = "application/zip";

        //    using (var zipStream = new ZipOutputStream(Response.OutputStream))
        //    {
        //        foreach (string filePath in Wsp_Pdf)
        //        {
        //            byte[] fileBytes = System.IO.File.ReadAllBytes(filePath);

        //            var fileEntry = new ZipEntry(Path.GetFileName(filePath))
        //            {
        //                Size = fileBytes.Length
        //            };

        //            zipStream.PutNextEntry(fileEntry);
        //            zipStream.Write(fileBytes, 0, fileBytes.Length);
        //        }

        //        zipStream.Flush();
        //        zipStream.Close();
        //    }
        //}

        //public ActionResult WspZipFileDownload()
        //{
        //    string zipFilePath = "output.zip";
        //    string[] pdfFilePaths = { "file1.pdf", "file2.pdf", "file3.pdf" };

        //    CreateZipArchive(zipFilePath, pdfFilePaths);

        //    Console.WriteLine("Zip file created successfully.");

        //    return Json("", JsonRequestBehavior.AllowGet);
        //}

        //private void CreateZipArchive(string zipFilePath, string[] pdfFilePaths)
        //{
        //    using (FileStream zipStream = new FileStream(zipFilePath, FileMode.Create))
        //    {
        //        using (ZipArchive zipArchive = new ZipArchive(zipStream, ZipArchiveMode.Create))
        //        {
        //            foreach (string pdfFilePath in pdfFilePaths)
        //            {
        //                // Add each PDF file to the zip archive
        //                string entryName = Path.GetFileName(pdfFilePath);
        //                zipArchive.CreateEntryFromFile(pdfFilePath, entryName);
        //            }
        //        }
        //    }
        //}

        [HttpPost]
        public ActionResult WSP_Approved(HttpPostedFileBase report_2021, HttpPostedFileBase report_2022, HttpPostedFileBase report_2023, HttpPostedFileBase report_2024, HttpPostedFileBase report_2025)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    int Year = 0;
                    if (report_2021 != null)
                    {
                        Year = 2021;
                    }
                    else if (report_2022 != null)
                    { Year = 2022; }
                    else if (report_2023 != null)
                    { Year = 2023; }
                    else if (report_2024 != null)
                    { Year = 2024; }
                    else if (report_2025 != null)
                    { Year = 2025; }
                    var state_name = Session["gstate"].ToString();
                    var district_name = Session["gdist"].ToString();
                    var block_name = Session["gblock"].ToString();
                    var gpname = Session["ggram"].ToString();
                    // string currMonth = DateTime.Today.ToString("MMMM");
                    string currMonth = "Sept";
                    int CurrYear = DateTime.Today.Year;
                    //string currMonth = "January";
                    //var Data = ABE.obj_abhy_mis_wsp_approved.Where(x => x.state_name == state_name && x.district_name == district_name && x.block_name == block_name && x.gpname == gpname && x.month_name != null).ToList();
                    var Data = ABE.obj_abhy_mis_wsp_approved.Where(x => x.state_name == state_name && x.district_name == district_name && x.block_name == block_name && x.gpname == gpname && x.isarchive == "1").ToList();

                    //var qry = (from x in ABE.obj_abhy_mis_wsp_approved
                    //           where x.state_name == state_name && x.district_name == district_name && x.block_name == block_name && x.gpname == gpname && x.month_name != null
                    //           select x).ToList();

                    //foreach (var item in qry)
                    //{
                    //    item.isarchive = "0";
                    //    ABE.SaveChanges();
                    //    Data.Clear();
                    //}
                    //Malicious_File_Upload_Restriction obj_Validate = new Malicious_File_Upload_Restriction();
                    //string allowed_file_format = "pdf";
                    //bool flag = obj_Validate.CheckValidFile(report_2021, allowed_file_format);
                    //if (flag == false)
                    //{
                    //    return Json("Your Upload file has Not valid File, Please Upload proper file", JsonRequestBehavior.AllowGet);
                    //}
                    //Malicious_File_Upload_Restriction obj_Validate2 = new Malicious_File_Upload_Restriction();
                    //string allowed_file_format2 = "pdf";
                    //bool flag2 = obj_Validate.CheckValidFile(report_2022, allowed_file_format2);
                    //if (flag2 == false)
                    //{
                    //    return Json("Your Upload file has Not valid File, Please Upload proper file", JsonRequestBehavior.AllowGet);
                    //}
                    //Malicious_File_Upload_Restriction obj_Validate3 = new Malicious_File_Upload_Restriction();
                    //string allowed_file_format3 = "pdf";
                    //bool flag3 = obj_Validate.CheckValidFile(report_2023, allowed_file_format3);
                    //if (flag == false)
                    //{
                    //    return Json("Your Upload file has Not valid File, Please Upload proper file", JsonRequestBehavior.AllowGet);
                    //}
                    //Malicious_File_Upload_Restriction obj_Validate4 = new Malicious_File_Upload_Restriction();
                    //string allowed_file_format4 = "pdf";
                    //bool flag4 = obj_Validate.CheckValidFile(report_2024, allowed_file_format4);
                    //if (flag4 == false)
                    //{
                    //    return Json("Your Upload file has Not valid File, Please Upload proper file", JsonRequestBehavior.AllowGet);
                    //}
                    //Malicious_File_Upload_Restriction obj_Validate5 = new Malicious_File_Upload_Restriction();
                    //string allowed_file_format5 = "pdf";
                    //bool flag5 = obj_Validate.CheckValidFile(report_2025, allowed_file_format5);
                    //if (flag5 == false)
                    //{
                    //    return Json("Your Upload file has Not valid File, Please Upload proper file", JsonRequestBehavior.AllowGet);
                    //}


                    var Details = new abhy_mis_wsp_approved();

                    if (Data.Count == 1)
                    {

                        var data1 = Data.SingleOrDefault();
                        if (data1.wsp_finename != "" || data1.wsp_22_finename != "" || data1.wsp_23_finename != "" || data1.wsp_24_finename != "")
                        {


                            var i = 0;
                            if (report_2021 != null)
                            {
                                if (report_2021.FileName != null)
                                {
                                    String FileExt = Path.GetExtension(report_2021.FileName).ToUpper();

                                    string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                    string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\AtaljalWsp\\UpdatedWsp\\" + state_name + "\\" + district_name + "\\" + block_name + "\\" + gpname + "\\2022\\" + currMonth + "\\");
                                    if (!Directory.Exists(path))
                                    {
                                        Directory.CreateDirectory(path);
                                    }
                                    else
                                    {
                                        string[] files = Directory.GetFiles(path);
                                        foreach (string file in files)
                                        {
                                            System.IO.File.Delete(file);
                                        }
                                    }
                                    path = path + report_2021.FileName;
                                    string[] count = report_2021.FileName.Split('.');
                                    if (count.Length != 2)
                                    {
                                        return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                    }
                                    report_2021.SaveAs(path);
                                    data1.wsp_update_filename = report_2021.FileName;
                                    data1.wsp_update_filepath = "/Ataljalimages/AtaljalWsp/UpdatedWsp/" + state_name + "/" + district_name + "/" + block_name + "/" + gpname + "/2022/" + currMonth + "/" + report_2021.FileName;
                                    //data1.wsp_date = DateTime.Today.ToString();
                                    // data1.wsp_date = DateTime.Today.ToString("yyyy-MM-dd");
                                    data1.wsp_update_date = "2022-09-30";
                                    data1.fy_year = "2022";
                                    data1.isarchive = "1";
                                    i = 1;
                                }
                            }
                            if (report_2022 != null)
                            {
                                if (report_2022.FileName != null)
                                {
                                    i = 1;
                                    String FileExt = Path.GetExtension(report_2022.FileName).ToUpper();

                                    string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                    string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\AtaljalWsp\\Revised_Wsp\\" + state_name + "\\" + district_name + "\\" + block_name + "\\" + gpname + "\\2022\\" + currMonth + "\\");
                                    if (!Directory.Exists(path))
                                    {
                                        Directory.CreateDirectory(path);
                                    }
                                    else
                                    {
                                        string[] files = Directory.GetFiles(path);
                                        foreach (string file in files)
                                        {
                                            System.IO.File.Delete(file);
                                        }
                                    }
                                    path = path + report_2022.FileName;
                                    string[] count = report_2022.FileName.Split('.');
                                    if (count.Length != 2)
                                    {
                                        return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                    }
                                    report_2022.SaveAs(path);
                                    data1.revised_wsp_filename = report_2022.FileName;
                                    data1.revised_wsp_filepath = "/Ataljalimages/AtaljalWsp/Revised_Wsp/" + state_name + "/" + district_name + "/" + block_name + "/" + gpname + "/2022/" + currMonth + "/" + report_2022.FileName;
                                    data1.revised_wsp_date = DateTime.Today.ToString("yyyy-MM-dd");
                                    //data1.wsp_date = "2022-01-25";
                                    data1.fy_year = "2022";
                                    data1.isarchive = "1";
                                }
                            }

                            if (report_2023 != null)
                            {
                                if (report_2023.FileName != null)
                                {
                                    i = 1;
                                    String FileExt = Path.GetExtension(report_2023.FileName).ToUpper();

                                    string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                    string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\AtaljalWsp\\" + state_name + "\\" + district_name + "\\" + block_name + "\\" + gpname + "\\2022\\Jan\\");
                                    if (!Directory.Exists(path))
                                    {
                                        Directory.CreateDirectory(path);
                                    }
                                    else
                                    {
                                        string[] files = Directory.GetFiles(path);
                                        foreach (string file in files)
                                        {
                                            System.IO.File.Delete(file);
                                        }
                                    }
                                    path = path + report_2023.FileName;
                                    string[] count = report_2023.FileName.Split('.');
                                    if (count.Length != 2)
                                    {
                                        return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                    }
                                    report_2023.SaveAs(path);
                                    data1.wsp_finename = report_2023.FileName;
                                    data1.wsp_filepath = "/Ataljalimages/AtaljalWsp/" + state_name + "/" + district_name + "/" + block_name + "/" + gpname + "/2022/Jan/" + report_2023.FileName;
                                    //data1.wsp_update_date = DateTime.Today.ToString();
                                    data1.wsp_date = "2022-01-25";
                                    data1.fy_year = "2022";
                                    data1.isarchive = "1";
                                }
                            }
                            if (report_2024 != null)
                            {
                                if (report_2024.FileName != null)
                                {
                                    i = 1;
                                    String FileExt = Path.GetExtension(report_2024.FileName).ToUpper();

                                    string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                    string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\AtaljalWsp\\UpdatedWsp\\" + state_name + "\\" + district_name + "\\" + block_name + "\\" + gpname + "\\2024\\" + currMonth + "\\");
                                    if (!Directory.Exists(path))
                                    {
                                        Directory.CreateDirectory(path);
                                    }
                                    else
                                    {
                                        string[] files = Directory.GetFiles(path);
                                        foreach (string file in files)
                                        {
                                            System.IO.File.Delete(file);
                                        }
                                    }
                                    path = path + report_2024.FileName;
                                    string[] count = report_2024.FileName.Split('.');
                                    if (count.Length != 2)
                                    {
                                        return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                    }
                                    report_2024.SaveAs(path);
                                    data1.wsp_update_filename = report_2024.FileName;
                                    data1.wsp_update_filepath = "/Ataljalimages/AtaljalWsp/UpdatedWsp/" + state_name + "/" + district_name + "/" + block_name + "/" + gpname + "/2024/" + currMonth + "/" + report_2024.FileName;
                                    //data1.wsp_update_date = DateTime.Today.ToString();
                                    data1.wsp_date = "2022-01-25";
                                    data1.fy_year = "2022";

                                }
                            }
                            if (report_2025 != null)
                            {
                                if (report_2025.FileName != null)
                                {
                                    i = 1;
                                    String FileExt = Path.GetExtension(report_2025.FileName).ToUpper();

                                    string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                    string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\AtaljalWsp\\UpdatedWsp\\" + state_name + "\\" + district_name + "\\" + block_name + "\\" + gpname + "\\2025\\" + currMonth + "\\");
                                    if (!Directory.Exists(path))
                                    {
                                        Directory.CreateDirectory(path);
                                    }
                                    else
                                    {
                                        string[] files = Directory.GetFiles(path);
                                        foreach (string file in files)
                                        {
                                            System.IO.File.Delete(file);
                                        }
                                    }
                                    path = path + report_2025.FileName;
                                    string[] count = report_2025.FileName.Split('.');
                                    if (count.Length != 2)
                                    {
                                        return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                    }
                                    report_2025.SaveAs(path);
                                    data1.wsp_update_filename = report_2025.FileName;
                                    data1.wsp_update_filepath = "/Ataljalimages/AtaljalWsp/UpdatedWsp/" + state_name + "/" + district_name + "/" + block_name + "/" + gpname + "/2025/" + currMonth + "/" + report_2025.FileName;
                                    data1.wsp_update_date = DateTime.Today.ToString();
                                    //data1.wsp_date = "25-01-2022";
                                    data1.fy_year = "2025";
                                }
                            }

                            if (i == 1)
                            {
                                data1.userid = Convert.ToInt32(Session["UserId"]);
                                data1.state_name = Session["gstate"].ToString();
                                data1.district_name = Session["gdist"].ToString();
                                data1.block_name = Session["gblock"].ToString();
                                data1.gpname = Session["ggram"].ToString();
                                data1.month_name = currMonth;
                                data1.entry_by = Session["Email"].ToString();
                                ABE.Entry(data1).State = EntityState.Modified;
                                ABE.SaveChanges();
                            }
                            else
                            {
                                return Json("Please Upload File", JsonRequestBehavior.AllowGet);

                            }
                        }

                    }
                    else
                    {
                        if (Data.Count == 0)
                        {

                            var i = 0;
                            if (report_2021 != null)
                            {
                                if (report_2021.FileName != null)
                                {
                                    String FileExt = Path.GetExtension(report_2021.FileName).ToUpper();

                                    string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                    string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\AtaljalWsp\\UpdatedWsp\\" + state_name + "\\" + district_name + "\\" + block_name + "\\" + gpname + "\\2022\\" + currMonth + "\\");
                                    if (!Directory.Exists(path))
                                    {
                                        Directory.CreateDirectory(path);
                                    }
                                    else
                                    {
                                        string[] files = Directory.GetFiles(path);
                                        foreach (string file in files)
                                        {
                                            System.IO.File.Delete(file);
                                        }
                                    }
                                    path = path + report_2021.FileName;
                                    string[] count = report_2021.FileName.Split('.');
                                    if (count.Length != 2)
                                    {
                                        return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                    }
                                    report_2021.SaveAs(path);
                                    Details.wsp_update_filename = report_2021.FileName;
                                    Details.wsp_update_filepath = "/Ataljalimages/AtaljalWsp/UpdatedWsp/" + state_name + "/" + district_name + "/" + block_name + "/" + gpname + "/2022/" + currMonth + "/" + report_2021.FileName;
                                    //data1.wsp_date = DateTime.Today.ToString();
                                    // data1.wsp_date = DateTime.Today.ToString("yyyy-MM-dd");
                                    Details.wsp_update_date = "2022-09-30";
                                    Details.fy_year = "2022";
                                    Details.isarchive = "1";
                                    i = 1;
                                }
                            }
                            if (report_2022 != null)
                            {
                                if (report_2022.FileName != null)
                                {
                                    i = 1;
                                    String FileExt = Path.GetExtension(report_2022.FileName).ToUpper();
                                    string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                    string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\AtaljalWsp\\Revised_Wsp\\" + state_name + "\\" + district_name + "\\" + block_name + "\\" + gpname + "\\2022\\" + currMonth + "\\");
                                    if (!Directory.Exists(path))
                                    {
                                        Directory.CreateDirectory(path);
                                    }
                                    else
                                    {
                                        string[] files = Directory.GetFiles(path);
                                        foreach (string file in files)
                                        {
                                            System.IO.File.Delete(file);
                                        }
                                    }
                                    path = path + report_2022.FileName;
                                    string[] count = report_2022.FileName.Split('.');
                                    if (count.Length != 2)
                                    {
                                        return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                    }
                                    report_2022.SaveAs(path);
                                    Details.revised_wsp_filename = report_2022.FileName;
                                    Details.revised_wsp_filepath = "/Ataljalimages/AtaljalWsp/Revised_Wsp/" + state_name + "/" + district_name + "/" + block_name + "/" + gpname + "/2022/" + currMonth + "/" + report_2022.FileName;
                                    Details.revised_wsp_date = DateTime.Today.ToString("yyyy-MM-dd");
                                    Details.isarchive = "1";
                                    //Details.wsp_date = "25-01-2022";
                                    Details.fy_year = "2022";
                                }
                            }

                            if (report_2023 != null)
                            {
                                if (report_2023.FileName != null)
                                {
                                    i = 1;
                                    String FileExt = Path.GetExtension(report_2023.FileName).ToUpper();

                                    string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                    string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\AtaljalWsp\\" + state_name + "\\" + district_name + "\\" + block_name + "\\" + gpname + "\\2022\\Jan\\");
                                    if (!Directory.Exists(path))
                                    {
                                        Directory.CreateDirectory(path);
                                    }
                                    else
                                    {
                                        string[] files = Directory.GetFiles(path);
                                        foreach (string file in files)
                                        {
                                            System.IO.File.Delete(file);
                                        }
                                    }
                                    path = path + report_2023.FileName;
                                    string[] count = report_2023.FileName.Split('.');
                                    if (count.Length != 2)
                                    {
                                        return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                    }
                                    report_2023.SaveAs(path);
                                    Details.wsp_finename = report_2023.FileName;
                                    Details.wsp_filepath = "/Ataljalimages/AtaljalWsp/" + state_name + "/" + district_name + "/" + block_name + "/" + gpname + "/2022/Jan/" + report_2023.FileName;
                                    //Details.wsp_date = DateTime.Today.ToString();
                                    Details.isarchive = "1";
                                    Details.fy_year = "2022";
                                    Details.wsp_date = "2022-01-25";
                                }
                            }
                            if (report_2024 != null)
                            {
                                if (report_2024.FileName != null)
                                {
                                    i = 1;
                                    String FileExt = Path.GetExtension(report_2024.FileName).ToUpper();

                                    string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                    string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\AtaljalWsp\\" + state_name + "\\" + district_name + "\\" + block_name + "\\" + gpname + "\\2024\\" + currMonth + "\\");
                                    if (!Directory.Exists(path))
                                    {
                                        Directory.CreateDirectory(path);
                                    }
                                    else
                                    {
                                        string[] files = Directory.GetFiles(path);
                                        foreach (string file in files)
                                        {
                                            System.IO.File.Delete(file);
                                        }
                                    }
                                    path = path + report_2024.FileName;
                                    string[] count = report_2024.FileName.Split('.');
                                    if (count.Length != 2)
                                    {
                                        return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                    }
                                    report_2024.SaveAs(path);
                                    Details.wsp_24_finename = report_2024.FileName;
                                    Details.wsp_24_filepath = "/Ataljalimages/AtaljalWsp/" + state_name + "/" + district_name + "/" + block_name + "/" + gpname + "/2024/" + currMonth + "/" + report_2024.FileName;
                                    Details.wsp_date = DateTime.Today.ToString();
                                    //Details.wsp_date = "25-01-2022";
                                    Details.isarchive = "1";
                                    Details.fy_year = "2024";
                                }
                            }
                            if (report_2025 != null)
                            {
                                if (report_2025.FileName != null)
                                {
                                    i = 1;
                                    String FileExt = Path.GetExtension(report_2025.FileName).ToUpper();

                                    string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                    string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\AtaljalWsp\\" + state_name + "\\" + district_name + "\\" + block_name + "\\" + gpname + "\\2025\\" + currMonth + "\\");
                                    if (!Directory.Exists(path))
                                    {
                                        Directory.CreateDirectory(path);
                                    }
                                    else
                                    {
                                        string[] files = Directory.GetFiles(path);
                                        foreach (string file in files)
                                        {
                                            System.IO.File.Delete(file);
                                        }
                                    }
                                    path = path + report_2025.FileName;
                                    string[] count = report_2025.FileName.Split('.');
                                    if (count.Length != 2)
                                    {
                                        return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                    }
                                    report_2025.SaveAs(path);
                                    Details.wsp_25_finename = report_2025.FileName;
                                    Details.wsp_25_filepath = "/Ataljalimages/AtaljalWsp/" + state_name + "/" + district_name + "/" + block_name + "/" + gpname + "/2025/" + currMonth + "/" + report_2025.FileName;
                                    Details.wsp_date = DateTime.Today.ToString();
                                    //Details.wsp_date = "25-01-2022";
                                    Details.isarchive = "1";
                                    Details.fy_year = "2025";
                                }
                            }

                            if (i == 1)
                            {

                                Details.userid = Convert.ToInt32(Session["UserId"]);
                                Details.state_name = Session["gstate"].ToString();
                                Details.district_name = Session["gdist"].ToString();
                                Details.block_name = Session["gblock"].ToString();
                                Details.gpname = Session["ggram"].ToString();
                                Details.month_name = currMonth;
                                Details.entry_by = Session["Email"].ToString();
                                ABE.obj_abhy_mis_wsp_approved.Add(Details);
                                ABE.SaveChanges();
                            }
                            else
                            {
                                return Json("Please Upload File", JsonRequestBehavior.AllowGet);

                            }

                        }

                    }


                    return Json("Successfully Saved", JsonRequestBehavior.AllowGet);
                }
                catch (Exception Ex)
                {
                    return Json(Ex.Message, JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }


        public ActionResult GET_WSP_Approved_Info(string State, string Dist, string Block, string Gram, string Year)
        {
            try
            {

                List<abhy_mis_wsp_approved> ddetails = new List<abhy_mis_wsp_approved>();
                if (Session["UserId"] != null)
                {
                    List<abhy_mis_wsp_approved> Data = new List<abhy_mis_wsp_approved>();
                    if (State != null && State != "0" && Dist != null && Dist != "0" && Block != null && Block != "0" && Gram != null && Gram != "0" && Year != null && Year != "0")
                    {
                        Data = ABE.obj_abhy_mis_wsp_approved.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.fy_year == Year && (x.wsp_23_finename != null || x.wsp_23_finename != "")).OrderByDescending(s => s.wsp_23_date).ToList();
                    }
                    else if (State != null && State != "0" && Dist != null && Dist != "0" && Block != null && Block != "0" && Year != null && Year != "0")
                    {
                        Data = ABE.obj_abhy_mis_wsp_approved.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.fy_year == Year && (x.wsp_23_finename != null || x.wsp_23_finename != "")).OrderByDescending(s => s.wsp_23_date).ToList();
                    }
                    else if (State != null && State != "0" && Dist != null && Dist != "0" && Year != null && Year != "0")
                    {
                        Data = ABE.obj_abhy_mis_wsp_approved.Where(x => x.state_name == State && x.district_name == Dist && x.fy_year == Year && (x.wsp_23_finename != null || x.wsp_23_finename != "")).OrderByDescending(s => s.wsp_23_date).ToList();
                    }
                    else if (State != null && State != "0" && Year != null && Year != "0")
                    {
                        Data = ABE.obj_abhy_mis_wsp_approved.Where(x => x.state_name == State && x.fy_year == Year && (x.wsp_23_finename != null || x.wsp_23_finename != "")).OrderByDescending(s => s.wsp_23_date).ToList();
                    }
                    else
                    {
                        Data = ABE.obj_abhy_mis_wsp_approved.Where(x => x.state_name != "Delhi_7" && x.fy_year == Year && (x.wsp_23_finename != null || x.wsp_23_finename != "")).OrderByDescending(s => s.wsp_23_date).ToList();
                    }
                    var jsonResult = Json(Data, JsonRequestBehavior.AllowGet);
                    jsonResult.MaxJsonLength = int.MaxValue;
                    return jsonResult;
                }
                else
                {
                    return Json("Logout", JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception Ex)
            {
                return Json(Ex, JsonRequestBehavior.AllowGet);
            }
        }


        public ActionResult GET_WSP_Approved_Info_update(string State, string Dist, string Block, string Gram, string Year)
        {
            try
            {

                List<abhy_mis_wsp_approved> ddetails = new List<abhy_mis_wsp_approved>();
                if (Session["UserId"] != null)
                {
                    List<abhy_mis_wsp_approved> Data = new List<abhy_mis_wsp_approved>();
                    if (State != null && State != "0" && Dist != null && Dist != "0" && Block != null && Block != "0" && Gram != null && Gram != "0" && Year != null && Year != "0")
                    {
                        Data = ABE.obj_abhy_mis_wsp_approved.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.fy_year == Year && (x.wsp_23_update_file != null)).OrderByDescending(s => s.wsp_23_update_date).ToList();
                    }
                    else if (State != null && State != "0" && Dist != null && Dist != "0" && Block != null && Block != "0" && Year != null && Year != "0")
                    {
                        Data = ABE.obj_abhy_mis_wsp_approved.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.fy_year == Year && (x.wsp_23_update_file != null)).OrderByDescending(s => s.wsp_23_update_date).ToList();
                    }
                    else if (State != null && State != "0" && Dist != null && Dist != "0" && Year != null && Year != "0")
                    {
                        Data = ABE.obj_abhy_mis_wsp_approved.Where(x => x.state_name == State && x.district_name == Dist && x.fy_year == Year && (x.wsp_23_update_file != null)).OrderByDescending(s => s.wsp_23_update_date).ToList();
                    }
                    else if (State != null && State != "0" && Year != null && Year != "0")
                    {
                        Data = ABE.obj_abhy_mis_wsp_approved.Where(x => x.state_name == State && x.fy_year == Year && (x.wsp_23_update_file != null)).OrderByDescending(s => s.wsp_23_update_date).ToList();
                    }
                    else
                    {
                        Data = ABE.obj_abhy_mis_wsp_approved.Where(x => x.state_name != "Delhi_7" && x.fy_year == Year && x.wsp_23_update_file != null).OrderByDescending(s => s.wsp_23_update_date).ToList();
                    }
                    var jsonResult = Json(Data, JsonRequestBehavior.AllowGet);
                    jsonResult.MaxJsonLength = int.MaxValue;
                    return jsonResult;
                }
                else
                {
                    return Json("Logout", JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception Ex)
            {
                return Json(Ex, JsonRequestBehavior.AllowGet);
            }
        }



        public ActionResult GET_WSP_Approved_Info_24(string State, string Dist, string Block, string Gram, string Year)
        {
            try
            {

                List<abhy_mis_wsp_approved_24> ddetails = new List<abhy_mis_wsp_approved_24>();
                if (Session["UserId"] != null)
                {
                    List<abhy_mis_wsp_approved_24> Data = new List<abhy_mis_wsp_approved_24>();
                    if (State != null && State != "0" && Dist != null && Dist != "0" && Block != null && Block != "0" && Gram != null && Gram != "0" && Year != null && Year != "0")
                    {
                        Data = ABE.obj_abhy_mis_wsp_approved_24.Where(x => x.state == State && x.dist == Dist && x.block == Block && x.gp == Gram && x.fy_year == Year && (x.wsp_file != null || x.wsp_file != "")).OrderByDescending(s => s.wsp_date).ToList();
                    }
                    else if (State != null && State != "0" && Dist != null && Dist != "0" && Block != null && Block != "0" && Year != null && Year != "0")
                    {
                        Data = ABE.obj_abhy_mis_wsp_approved_24.Where(x => x.state == State && x.dist == Dist && x.block == Block && x.fy_year == Year && (x.wsp_file != null || x.wsp_file != "")).OrderByDescending(s => s.wsp_date).ToList();
                    }
                    else if (State != null && State != "0" && Dist != null && Dist != "0" && Year != null && Year != "0")
                    {
                        Data = ABE.obj_abhy_mis_wsp_approved_24.Where(x => x.state == State && x.dist == Dist && x.fy_year == Year && (x.wsp_file != null || x.wsp_file != "")).OrderByDescending(s => s.wsp_date).ToList();
                    }
                    else if (State != null && State != "0" && Year != null && Year != "0")
                    {
                        Data = ABE.obj_abhy_mis_wsp_approved_24.Where(x => x.state == State && x.fy_year == Year && (x.wsp_file != null || x.wsp_file != "")).OrderByDescending(s => s.wsp_date).ToList();
                    }
                    else
                    {
                        Data = ABE.obj_abhy_mis_wsp_approved_24.Where(x => x.state != "Delhi_7" && x.fy_year == Year && (x.wsp_file != null || x.wsp_file != "")).OrderByDescending(s => s.wsp_date).ToList();
                    }
                    var jsonResult = Json(Data, JsonRequestBehavior.AllowGet);
                    jsonResult.MaxJsonLength = int.MaxValue;
                    return jsonResult;
                }
                else
                {
                    return Json("Logout", JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception Ex)
            {
                return Json(Ex, JsonRequestBehavior.AllowGet);
            }
        }
        /// <summary>
        /// for 2024-25 Update 
        /// </summary>
        /// <param name="State"></param>
        /// <param name="Dist"></param>
        /// <param name="Block"></param>
        /// <param name="Gram"></param>
        /// <param name="Year"></param>
        /// <returns></returns>
        public ActionResult GET_WSP_Approved_Info_24_Update(string State, string Dist, string Block, string Gram, string Year)
        {
            try
            {

                List<abhy_mis_wsp_approved_24_update> ddetails = new List<abhy_mis_wsp_approved_24_update>();
                if (Session["UserId"] != null)
                {
                    List<abhy_mis_wsp_approved_24_update> Data = new List<abhy_mis_wsp_approved_24_update>();
                    if (State != null && State != "0" && Dist != null && Dist != "0" && Block != null && Block != "0" && Gram != null && Gram != "0" && Year != null && Year != "0")
                    {
                        Data = ABE.obj_abhy_mis_wsp_approved_24_update.Where(x => x.state == State && x.dist == Dist && x.block == Block && x.gp == Gram && x.fy_year == Year && (x.wsp_file != null || x.wsp_file != "")).OrderByDescending(s => s.wsp_date).ToList();
                    }
                    else if (State != null && State != "0" && Dist != null && Dist != "0" && Block != null && Block != "0" && Year != null && Year != "0")
                    {
                        Data = ABE.obj_abhy_mis_wsp_approved_24_update.Where(x => x.state == State && x.dist == Dist && x.block == Block && x.fy_year == Year && (x.wsp_file != null || x.wsp_file != "")).OrderByDescending(s => s.wsp_date).ToList();
                    }
                    else if (State != null && State != "0" && Dist != null && Dist != "0" && Year != null && Year != "0")
                    {
                        Data = ABE.obj_abhy_mis_wsp_approved_24_update.Where(x => x.state == State && x.dist == Dist && x.fy_year == Year && (x.wsp_file != null || x.wsp_file != "")).OrderByDescending(s => s.wsp_date).ToList();
                    }
                    else if (State != null && State != "0" && Year != null && Year != "0")
                    {
                        Data = ABE.obj_abhy_mis_wsp_approved_24_update.Where(x => x.state == State && x.fy_year == Year && (x.wsp_file != null || x.wsp_file != "")).OrderByDescending(s => s.wsp_date).ToList();
                    }
                    else
                    {
                        Data = ABE.obj_abhy_mis_wsp_approved_24_update.Where(x => x.state != "Delhi_7" && x.fy_year == Year && (x.wsp_file != null || x.wsp_file != "")).OrderByDescending(s => s.wsp_date).ToList();
                    }
                    var jsonResult = Json(Data, JsonRequestBehavior.AllowGet);
                    jsonResult.MaxJsonLength = int.MaxValue;
                    return jsonResult;
                }
                else
                {
                    return Json("Logout", JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception Ex)
            {
                return Json(Ex, JsonRequestBehavior.AllowGet);
            }
        }

        [HttpGet]
        public ActionResult PIP_wsp_Approved_Info(string State, string Dist, string Block, string Gram)
        {
            try
            {
                //ParseDate

                List<abhy_mis_wsp_approved> ddetails = new List<abhy_mis_wsp_approved>();
                if (Session["UserId"] != null)
                {
                    if (State != null && State != "0" && Dist != null && Dist != "0" && Block != null && Block != "0" && Gram != null && Gram != "0")
                    {
                        var Data = ABE.obj_abhy_mis_wsp_approved.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.month_name != null && x.isarchive == "1").OrderByDescending(s => s.wsp_date).ToList();

                        if (Data.Count != 0)
                        {
                            for (var i = 0; i < Data.Count; i++)
                            {
                                if (Data[i].wsp_date != "" && Data[i].wsp_date != null && Data[i].wsp_date != "null")
                                {
                                    string[] words = Data[i].wsp_date.Split(' ');
                                    string[] words1 = words[0].Split('/', '-');
                                    var FinalDate = words1[2] + '/' + words1[1] + "/" + words1[0];

                                    //var Date11 = ParseDate(FinalDate);

                                    Data[i].wsp_date = FinalDate.ToString();
                                    ddetails.Add(Data[i]);
                                }
                                else
                                {

                                    ddetails.Add(Data[i]);
                                }
                            }
                        }


                        return Json(ddetails, JsonRequestBehavior.AllowGet);
                    }
                    else if (State != null && State != "0" && Dist != null && Dist != "0" && Block != null && Block != "0")
                    {
                        var Data = ABE.obj_abhy_mis_wsp_approved.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.month_name != null && x.isarchive == "1").ToList().OrderByDescending(s => s.wsp_date).ToList();
                        if (Data.Count != 0)
                        {
                            for (var i = 0; i < Data.Count; i++)
                            {
                                if (Data[i].wsp_date != "" && Data[i].wsp_date != null && Data[i].wsp_date != "null")
                                {
                                    string[] words = Data[i].wsp_date.Split(' ');
                                    string[] words1 = words[0].Split('/', '-');
                                    var FinalDate = words1[2] + '/' + words1[1] + "/" + words1[0];

                                    //var Date11 = ParseDate(FinalDate);
                                    Data[i].wsp_date = FinalDate.ToString();
                                    ddetails.Add(Data[i]);
                                }
                                else
                                {

                                    ddetails.Add(Data[i]);
                                }
                            }
                        }


                        return Json(ddetails, JsonRequestBehavior.AllowGet);
                    }
                    else if (State != null && State != "0" && Dist != null && Dist != "0")
                    {
                        var Data = ABE.obj_abhy_mis_wsp_approved.Where(x => x.state_name == State && x.district_name == Dist && x.month_name != null && x.isarchive == "1").ToList().OrderByDescending(s => s.wsp_date).ToList();
                        if (Data.Count != 0)
                        {
                            for (var i = 0; i < Data.Count; i++)
                            {
                                if (Data[i].wsp_date != "" && Data[i].wsp_date != null && Data[i].wsp_date != "null")
                                {
                                    string[] words = Data[i].wsp_date.Split(' ');
                                    string[] words1 = words[0].Split('/', '-');
                                    var FinalDate = words1[2] + '/' + words1[1] + "/" + words1[0];

                                    //var Date11 = ParseDate(FinalDate);
                                    Data[i].wsp_date = FinalDate.ToString();
                                    ddetails.Add(Data[i]);
                                }
                                else
                                {

                                    ddetails.Add(Data[i]);
                                }
                            }
                        }


                        return Json(ddetails, JsonRequestBehavior.AllowGet);
                    }
                    else if (State != null && State != "0")
                    {
                        var Data = ABE.obj_abhy_mis_wsp_approved.Where(x => x.state_name == State && x.month_name != null && x.isarchive == "1").ToList().OrderByDescending(s => s.wsp_date).ToList();
                        if (Data.Count != 0)
                        {
                            for (var i = 0; i < Data.Count; i++)
                            {
                                if (Data[i].wsp_date != "" && Data[i].wsp_date != null && Data[i].wsp_date != "null")
                                {
                                    string[] words = Data[i].wsp_date.Split(' ');
                                    string[] words1 = words[0].Split('/', '-');
                                    var FinalDate = words1[2] + '/' + words1[1] + "/" + words1[0];

                                    //var Date11 = ParseDate(FinalDate);
                                    Data[i].wsp_date = FinalDate.ToString();
                                    ddetails.Add(Data[i]);
                                }
                                else
                                {

                                    ddetails.Add(Data[i]);
                                }
                            }
                        }


                        return Json(ddetails, JsonRequestBehavior.AllowGet);
                    }
                    else
                    {
                        //var Data = ABE.obj_abhy_mis_wsp_approved.Where(x => x.month_name != null).ToList();

                        var Data = ABE.obj_abhy_mis_wsp_approved.Where(x => x.month_name != null && x.isarchive == "1").OrderByDescending(s => s.wsp_date).ToList();

                        if (Data.Count != 0)
                        {
                            for (var i = 0; i < Data.Count; i++)
                            {
                                if (Data[i].wsp_date != "" && Data[i].wsp_date != null && Data[i].wsp_date != "null")
                                {
                                    string[] words = Data[i].wsp_date.Split(' ');
                                    string[] words1 = words[0].Split('/', '-');
                                    //var FinalDate = words1[1] + '/' + words1[0] + "/" + words1[2];
                                    var FinalDate = words1[2] + '/' + words1[1] + "/" + words1[0];

                                    // var Date11 = ParseDate(FinalDate);
                                    Data[i].wsp_date = FinalDate.ToString();
                                    ddetails.Add(Data[i]);
                                }
                                else
                                {

                                    ddetails.Add(Data[i]);
                                }
                            }
                        }
                        var jsonResult = Json(ddetails, JsonRequestBehavior.AllowGet);
                        jsonResult.MaxJsonLength = int.MaxValue;
                        return jsonResult;
                    }

                }
                else
                {
                    return Json("Logout", JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception Ex)
            {
                return Json(Ex, JsonRequestBehavior.AllowGet);
            }

        }
        //public ActionResult PIP_wsp_Approved_Info(string State, string Dist, string Block, string Gram)
        //{
        //    try
        //    {
        //        //ParseDate

        //        List<abhy_mis_wsp_approved> ddetails = new List<abhy_mis_wsp_approved>();
        //        if (Session["UserId"] != null)
        //        {
        //            if (State != null && State != "0" && Dist != null && Dist != "0" && Block != null && Block != "0" && Gram != null && Gram != "0")
        //            {
        //                var Data = ABE.obj_abhy_mis_wsp_approved.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.month_name != null).ToList();

        //                if (Data.Count != 0)
        //                {
        //                    for (var i = 0; i < Data.Count; i++)
        //                    {
        //                        if (Data[i].wsp_date != "" && Data[i].wsp_date != null && Data[i].wsp_date != "null")
        //                        {
        //                            string[] words = Data[i].wsp_date.Split(' ');
        //                            DateTime dt = Convert.ToDateTime(words[0].ToString());
        //                            //string[] words1 = words[0].Split('/','-','.');
        //                            string FinalDate = dt.Day.ToString() + '/' + dt.Month.ToString() + "/" + dt.Year.ToString();

        //                            var Date11 = ParseDate(FinalDate);

        //                            Data[i].wsp_date = Date11.ToString();
        //                            ddetails.Add(Data[i]);
        //                        }
        //                        else
        //                        {

        //                            ddetails.Add(Data[i]);
        //                        }
        //                    }
        //                }


        //                return Json(ddetails, JsonRequestBehavior.AllowGet);
        //            }
        //            else if (State != null && State != "0" && Dist != null && Dist != "0" && Block != null && Block != "0")
        //            {
        //                var Data = ABE.obj_abhy_mis_wsp_approved.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.month_name != null).ToList();
        //                if (Data.Count != 0)
        //                {
        //                    for (var i = 0; i < Data.Count; i++)
        //                    {
        //                        if (Data[i].wsp_date != "" && Data[i].wsp_date != null && Data[i].wsp_date != "null")
        //                        {
        //                            //string[] words = Data[i].wsp_date.Split(' ');
        //                            //string[] words1 = words[0].Split('/', '-', '.');
        //                            //var FinalDate = words1[0] + '/' + words1[1] + "/" + words1[2];
        //                            string[] words = Data[i].wsp_date.Split(' ');
        //                            DateTime dt = Convert.ToDateTime(words[0].ToString());
        //                            //string FinalDate = dt.Day.ToString() + '/' + dt.Month.ToString() + "/" + dt.Year.ToString();
        //                            string FinalDate = dt.Day.ToString() + "/" + dt.Month.ToString() + "/" + dt.Year.ToString();

        //                            var Date11 = ParseDate(FinalDate);

        //                            Data[i].wsp_date = Date11.ToString();
        //                            ddetails.Add(Data[i]);
        //                        }
        //                        else
        //                        {

        //                            ddetails.Add(Data[i]);
        //                        }
        //                    }
        //                }


        //                return Json(ddetails, JsonRequestBehavior.AllowGet);
        //            }
        //            else if (State != null && State != "0" && Dist != null && Dist != "0")
        //            {
        //                var Data = ABE.obj_abhy_mis_wsp_approved.Where(x => x.state_name == State && x.district_name == Dist && x.month_name != null).ToList();
        //                if (Data.Count != 0)
        //                {
        //                    for (var i = 0; i < Data.Count; i++)
        //                    {
        //                        if (Data[i].wsp_date != "" && Data[i].wsp_date != null && Data[i].wsp_date != "null")
        //                        {
        //                            //string[] words = Data[i].wsp_date.Split(' ');
        //                            //string[] words1 = words[0].Split('/', '-', '.');
        //                            //var FinalDate = words1[0] + '/' + words1[1] + "/" + words1[2];
        //                            string[] words = Data[i].wsp_date.Split(' ');
        //                            DateTime dt = Convert.ToDateTime(words[0].ToString());
        //                            string FinalDate = dt.Day.ToString() + '/' + dt.Month.ToString() + "/" + dt.Year.ToString();
        //                            //string FinalDate = dt.Day.ToString() + "-" + dt.Month.ToString() + "-" + dt.Year.ToString();
        //                            var Date11 = ParseDate(FinalDate);
        //                            Data[i].wsp_date = Date11.ToString();
        //                            ddetails.Add(Data[i]);
        //                        }
        //                        else
        //                        {

        //                            ddetails.Add(Data[i]);
        //                        }
        //                    }
        //                }


        //                return Json(ddetails, JsonRequestBehavior.AllowGet);
        //            }
        //            else if (State != null && State != "0")
        //            {
        //                var Data = ABE.obj_abhy_mis_wsp_approved.Where(x => x.state_name == State && x.month_name != null).ToList();
        //                if (Data.Count != 0)
        //                {
        //                    for (var i = 0; i < Data.Count; i++)
        //                    {
        //                        if (Data[i].wsp_date != "" && Data[i].wsp_date != null && Data[i].wsp_date != "null")
        //                        {
        //                            //string[] words = Data[i].wsp_date.Split(' ');
        //                            //string[] words1 = words[0].Split('/', '-', '.');
        //                            //var FinalDate = words1[0] + '/' + words1[1] + "/" + words1[2];
        //                            string[] words = Data[i].wsp_date.Split(' ');
        //                            DateTime dt = Convert.ToDateTime(words[0].ToString());
        //                            //string[] words1 = words[0].Split('/','-','.');
        //                             string FinalDate = dt.Day.ToString() + '/' + dt.Month.ToString() + "/" + dt.Year.ToString();
        //                            //string FinalDate = dt.Day.ToString() + "-" + dt.Month.ToString() + "-" + dt.Year.ToString();
        //                            var Date11 = ParseDate(FinalDate);
        //                            Data[i].wsp_date = Date11.ToString();
        //                            ddetails.Add(Data[i]);
        //                        }
        //                        else
        //                        {

        //                            ddetails.Add(Data[i]);
        //                        }
        //                    }
        //                }


        //                return Json(ddetails, JsonRequestBehavior.AllowGet);
        //            }
        //            else
        //            {
        //                var Data = ABE.obj_abhy_mis_wsp_approved.Where(x => x.month_name != null).ToList();
        //                if (Data.Count != 0)
        //                {
        //                    for (var i = 0; i < Data.Count; i++)
        //                    {
        //                        if (Data[i].wsp_date != "" && Data[i].wsp_date != null && Data[i].wsp_date != "null")
        //                        {
        //                            //string[] words = Data[i].wsp_date.Split(' ');
        //                            //string[] words1 = words[0].Split('/', '-', '.');
        //                            //var FinalDate = words1[0] + '/' + words1[1] + "/" + words1[2];
        //                            string[] words = Data[i].wsp_date.Split(' ');
        //                            DateTime dt = Convert.ToDateTime(words[0].ToString());
        //                            //string[] words1 = words[0].Split('/','-','.');
        //                            string FinalDate = dt.Day.ToString() + '/' + dt.Month.ToString() + "/" + dt.Year.ToString();
        //                            //string FinalDate = dt.Day.ToString() + "-" + dt.Month.ToString() + "-" + dt.Year.ToString();
        //                            var Date11 = ParseDate(FinalDate);
        //                            Data[i].wsp_date = Date11.ToString();
        //                            ddetails.Add(Data[i]);
        //                        }
        //                        else
        //                        {

        //                            ddetails.Add(Data[i]);
        //                        }
        //                    }
        //                }


        //                return Json(ddetails, JsonRequestBehavior.AllowGet);
        //            }

        //        }
        //        else
        //        {
        //            return Json("Logout", JsonRequestBehavior.AllowGet);
        //        }
        //    }
        //    catch (Exception Ex)
        //    {
        //        return Json(Ex.Message, JsonRequestBehavior.AllowGet);
        //    }

        //}

        //[HttpGet]
        //public ActionResult PIP_wsp_Approved_Info(string State, string Dist, string Block, string Gram)
        //{
        //    try
        //    {
        //        if (Session["UserId"] != null)
        //        {
        //            if (State != null && State != "0" && Dist != null && Dist != "0" && Block != null && Block != "0" && Gram != null && Gram != "0")
        //            {
        //                var Data = ABE.obj_abhy_mis_wsp_approved.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();
        //                return Json(Data, JsonRequestBehavior.AllowGet);
        //            }
        //            else if (State != null && State != "0" && Dist != null && Dist != "0" && Block != null && Block != "0")
        //            {
        //                var Data = ABE.obj_abhy_mis_wsp_approved.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();
        //                return Json(Data, JsonRequestBehavior.AllowGet);
        //            }
        //            else if (State != null && State != "0" && Dist != null && Dist != "0")
        //            {
        //                var Data = ABE.obj_abhy_mis_wsp_approved.Where(x => x.state_name == State && x.district_name == Dist).ToList();
        //                return Json(Data, JsonRequestBehavior.AllowGet);
        //            }
        //            else if (State != null && State != "0")
        //            {
        //                var Data = ABE.obj_abhy_mis_wsp_approved.Where(x => x.state_name == State).ToList();
        //                return Json(Data, JsonRequestBehavior.AllowGet);
        //            }
        //            else
        //            {
        //                var Data = ABE.obj_abhy_mis_wsp_approved.ToList();
        //                return Json(Data, JsonRequestBehavior.AllowGet);
        //            }

        //        }
        //        else
        //        {
        //            return Json("Logout", JsonRequestBehavior.AllowGet);
        //        }
        //    }
        //    catch (Exception Ex)
        //    {
        //        return Json(Ex, JsonRequestBehavior.AllowGet);
        //    }

        //}

        [HttpPost]
        public ActionResult Disbursement1(string ddlstate)
        {
            try
            {
                if (ddlstate != "SelectyourState")
                {
                    ViewBag.data = ABE.objabhy_disbursement.Where(c => c.state_name == ddlstate).Distinct().ToList();
                    var Data = ViewBag.data;
                    if (Data.Count == 0)
                    {
                        return Json("ok", JsonRequestBehavior.AllowGet);
                    }
                    else
                    {
                        var jsonresult = Json(Data, JsonRequestBehavior.AllowGet);
                        jsonresult.MaxJsonLength = int.MaxValue;
                        return jsonresult;
                    }
                }
            }
            catch (Exception ex)
            {

            }

            return View();
        }
        [HttpPost]
        public ActionResult Disbursement2(string disburseobj)
        {
            try
            {
                abhy_disbursement disbursedata = new abhy_disbursement();
                if (disburseobj != "" && disburseobj != null)
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_disbursement>(disburseobj);
                    var statename = result.state_name;
                    var data = ABE.objabhy_disbursement.Where(c => c.state_name == statename).Distinct().ToList();

                    if (data.Count == 0)
                    {
                        disbursedata.state_name = result.state_name;
                        disbursedata.district_name = result.district_name;
                        disbursedata.block = result.block;
                        disbursedata.gname = result.gname;
                        disbursedata.villname = result.villname;
                        disbursedata.dli1_finance_alloc_gwl_decline = result.dli1_finance_alloc_gwl_decline;
                        disbursedata.dli1_finance_amt_gwl_decline = result.dli1_finance_amt_gwl_decline;
                        disbursedata.dli1_baseline_gwl_decline = result.dli1_baseline_gwl_decline;
                        disbursedata.dli1_17_18 = result.dli1_17_18;
                        disbursedata.dli1_18_19 = result.dli1_18_19;
                        disbursedata.dli1_19_20 = result.dli1_19_20;
                        disbursedata.dli1_20_21 = result.dli1_20_21;
                        disbursedata.dli1_21_22 = result.dli1_21_22;
                        disbursedata.dli1_22_23 = result.dli1_22_23;
                        disbursedata.dli2_finance_alloc_wsp_community = result.dli2_finance_alloc_wsp_community;
                        disbursedata.dli2_finance_amt_wsp_community = result.dli2_finance_amt_wsp_community;
                        disbursedata.dli2_baseline_wsp_community = result.dli2_baseline_wsp_community;
                        disbursedata.dli2_17_18 = result.dli2_17_18;
                        disbursedata.dli2_18_19 = result.dli2_18_19;
                        disbursedata.dli2_19_20 = result.dli2_19_20;
                        disbursedata.dli2_20_21 = result.dli2_20_21;
                        disbursedata.dli2_21_22 = result.dli2_21_22;
                        disbursedata.dli2_22_23 = result.dli2_22_23;
                        disbursedata.dli3_finance_alloc_gw_adoption = result.dli3_finance_alloc_gw_adoption;
                        disbursedata.dli3_finance_amt_wsp_adoption = result.dli3_finance_amt_wsp_adoption;
                        disbursedata.dli3_baseline_wsp_adoption = result.dli3_baseline_wsp_adoption;
                        disbursedata.dli3_17_18 = result.dli3_17_18;
                        disbursedata.dli3_18_19 = result.dli3_18_19;
                        disbursedata.dli3_19_20 = result.dli3_19_20;
                        disbursedata.dli3_20_21 = result.dli3_20_21;
                        disbursedata.dli3_21_22 = result.dli3_21_22;
                        disbursedata.dli3_22_23 = result.dli3_22_23;
                        disbursedata.dli4_finance_alloc_reduced_wtr_con = result.dli4_finance_alloc_reduced_wtr_con;
                        disbursedata.dli4_finance_amt_reduced_wtr_con = result.dli4_finance_amt_reduced_wtr_con;
                        disbursedata.dli4_baseline_reduced_wtr_con = result.dli4_baseline_reduced_wtr_con;
                        disbursedata.dli4_17_18 = result.dli4_17_18;
                        disbursedata.dli4_18_19 = result.dli4_18_19;
                        disbursedata.dli4_19_20 = result.dli4_19_20;
                        disbursedata.dli4_20_21 = result.dli4_20_21;
                        disbursedata.dli4_21_22 = result.dli4_21_22;
                        disbursedata.dli4_22_23 = result.dli4_22_23;
                        disbursedata.dli5_finance_alloc_wsp_pending_opcs = result.dli5_finance_alloc_wsp_pending_opcs;
                        disbursedata.dli5_finance_amt_wsp_pending_opcs = result.dli5_finance_amt_wsp_pending_opcs;
                        disbursedata.dli5_baseline_wsp_pending_opcs = result.dli5_baseline_wsp_pending_opcs;
                        disbursedata.dli5_17_18 = result.dli5_17_18;
                        disbursedata.dli5_18_19 = result.dli5_18_19;
                        disbursedata.dli5_19_20 = result.dli5_19_20;
                        disbursedata.dli5_20_21 = result.dli5_20_21;
                        disbursedata.dli5_21_22 = result.dli5_21_22;
                        disbursedata.dli5_22_23 = result.dli5_22_23;
                        //disbursedata.dli6_finance_alloc_gwmu_mis = result.dli6_finance_alloc_gwmu_mis;
                        //disbursedata.dli6_finance_amt_gwmu_mis = result.dli6_finance_amt_gwmu_mis;
                        //disbursedata.dli6_baseline_gwmu_mis = result.dli6_baseline_gwmu_mis;
                        //disbursedata.dli6_17_18 = result.dli6_17_18;
                        //disbursedata.dli6_18_19 = result.dli6_18_19;
                        //disbursedata.dli6_19_20 = result.dli6_19_20;
                        //disbursedata.dli6_20_21 = result.dli6_20_21;
                        //disbursedata.dli6_21_22 = result.dli6_21_22;
                        //disbursedata.dli6_22_23 = result.dli6_22_23;
                        //disbursedata.dli7_finance_alloc_gwm_mowr_rd_gr = result.dli7_finance_alloc_gwm_mowr_rd_gr;
                        //disbursedata.dli7_finance_amt_gwm_mowr_rd_gr = result.dli7_finance_amt_gwm_mowr_rd_gr;
                        //disbursedata.dli7_baseline_gwm_mowr_rd_gr = result.dli7_baseline_gwm_mowr_rd_gr;
                        //disbursedata.dli7_17_18 = result.dli7_17_18;
                        //disbursedata.dli7_18_19 = result.dli7_18_19;
                        //disbursedata.dli7_19_20 = result.dli7_19_20;
                        //disbursedata.dli7_20_21 = result.dli7_20_21;
                        //disbursedata.dli7_21_22 = result.dli7_21_22;
                        //disbursedata.dli7_22_23 = result.dli7_22_23;
                        ABE.objabhy_disbursement.Add(disbursedata);
                        ABE.SaveChanges();
                        return Json("insert", JsonRequestBehavior.AllowGet);
                    }
                    else
                    {
                        var vdata = data;
                        vdata[0].state_name = result.state_name;
                        vdata[0].district_name = result.district_name;
                        vdata[0].block = result.block;
                        vdata[0].gname = result.gname;
                        vdata[0].villname = result.villname;
                        vdata[0].dli1_finance_alloc_gwl_decline = result.dli1_finance_alloc_gwl_decline;
                        vdata[0].dli1_finance_amt_gwl_decline = result.dli1_finance_amt_gwl_decline;
                        vdata[0].dli1_baseline_gwl_decline = result.dli1_baseline_gwl_decline;
                        vdata[0].dli1_17_18 = result.dli1_17_18;
                        vdata[0].dli1_18_19 = result.dli1_18_19;
                        vdata[0].dli1_19_20 = result.dli1_19_20;
                        vdata[0].dli1_20_21 = result.dli1_20_21;
                        vdata[0].dli1_21_22 = result.dli1_21_22;
                        vdata[0].dli1_22_23 = result.dli1_22_23;
                        vdata[0].dli2_finance_alloc_wsp_community = result.dli2_finance_alloc_wsp_community;
                        vdata[0].dli2_finance_amt_wsp_community = result.dli2_finance_amt_wsp_community;
                        vdata[0].dli2_baseline_wsp_community = result.dli2_baseline_wsp_community;
                        vdata[0].dli2_17_18 = result.dli2_17_18;
                        vdata[0].dli2_18_19 = result.dli2_18_19;
                        vdata[0].dli2_19_20 = result.dli2_19_20;
                        vdata[0].dli2_20_21 = result.dli2_20_21;
                        vdata[0].dli2_21_22 = result.dli2_21_22;
                        vdata[0].dli2_22_23 = result.dli2_22_23;
                        vdata[0].dli3_finance_alloc_gw_adoption = result.dli3_finance_alloc_gw_adoption;
                        vdata[0].dli3_finance_amt_wsp_adoption = result.dli3_finance_amt_wsp_adoption;
                        vdata[0].dli3_baseline_wsp_adoption = result.dli3_baseline_wsp_adoption;
                        vdata[0].dli3_17_18 = result.dli3_17_18;
                        vdata[0].dli3_18_19 = result.dli3_18_19;
                        vdata[0].dli3_19_20 = result.dli3_19_20;
                        vdata[0].dli3_20_21 = result.dli3_20_21;
                        vdata[0].dli3_21_22 = result.dli3_21_22;
                        vdata[0].dli3_22_23 = result.dli3_22_23;
                        vdata[0].dli4_finance_alloc_reduced_wtr_con = result.dli4_finance_alloc_reduced_wtr_con;
                        vdata[0].dli4_finance_amt_reduced_wtr_con = result.dli4_finance_amt_reduced_wtr_con;
                        vdata[0].dli4_baseline_reduced_wtr_con = result.dli4_baseline_reduced_wtr_con;
                        vdata[0].dli4_17_18 = result.dli4_17_18;
                        vdata[0].dli4_18_19 = result.dli4_18_19;
                        vdata[0].dli4_19_20 = result.dli4_19_20;
                        vdata[0].dli4_20_21 = result.dli4_20_21;
                        vdata[0].dli4_21_22 = result.dli4_21_22;
                        vdata[0].dli4_22_23 = result.dli4_22_23;
                        vdata[0].dli5_finance_alloc_wsp_pending_opcs = result.dli5_finance_alloc_wsp_pending_opcs;
                        vdata[0].dli5_finance_amt_wsp_pending_opcs = result.dli5_finance_amt_wsp_pending_opcs;
                        vdata[0].dli5_baseline_wsp_pending_opcs = result.dli5_baseline_wsp_pending_opcs;
                        vdata[0].dli5_17_18 = result.dli5_17_18;
                        vdata[0].dli5_18_19 = result.dli5_18_19;
                        vdata[0].dli5_19_20 = result.dli5_19_20;
                        vdata[0].dli5_20_21 = result.dli5_20_21;
                        vdata[0].dli5_21_22 = result.dli5_21_22;
                        vdata[0].dli5_22_23 = result.dli5_22_23;
                        //vdata[0].dli6_finance_alloc_gwmu_mis = result.dli6_finance_alloc_gwmu_mis;
                        //vdata[0].dli6_finance_amt_gwmu_mis = result.dli6_finance_amt_gwmu_mis;
                        //vdata[0].dli6_baseline_gwmu_mis = result.dli6_baseline_gwmu_mis;
                        //vdata[0].dli6_17_18 = result.dli6_17_18;
                        //vdata[0].dli6_18_19 = result.dli6_18_19;
                        //vdata[0].dli6_19_20 = result.dli6_19_20;
                        //vdata[0].dli6_20_21 = result.dli6_20_21;
                        //vdata[0].dli6_21_22 = result.dli6_21_22;
                        //vdata[0].dli6_22_23 = result.dli6_22_23;
                        //vdata[0].dli7_finance_alloc_gwm_mowr_rd_gr = result.dli7_finance_alloc_gwm_mowr_rd_gr;
                        //vdata[0].dli7_finance_amt_gwm_mowr_rd_gr = result.dli7_finance_amt_gwm_mowr_rd_gr;
                        //vdata[0].dli7_baseline_gwm_mowr_rd_gr = result.dli7_baseline_gwm_mowr_rd_gr;
                        //vdata[0].dli7_17_18 = result.dli7_17_18;
                        //vdata[0].dli7_18_19 = result.dli7_18_19;
                        //vdata[0].dli7_19_20 = result.dli7_19_20;
                        //vdata[0].dli7_20_21 = result.dli7_20_21;
                        //vdata[0].dli7_21_22 = result.dli7_21_22;
                        //vdata[0].dli7_22_23 = result.dli7_22_23;
                        ABE.SaveChanges();
                        return Json("Updated", JsonRequestBehavior.AllowGet);
                    }

                }
            }
            catch (Exception ex)
            {

            }


            return View();
        }
        [HttpPost]
        public ActionResult disbursedelete(string statename)
        {
            try
            {
                abhy_disbursement disbursdata = new abhy_disbursement();
                var data = ABE.objabhy_disbursement.Where(c => c.state_name == statename).Distinct().ToList();

                if (data.Count == 1)
                {
                    ABE.objabhy_disbursement.Remove(data[0]);
                    ABE.SaveChanges();
                    return Json("Delete", JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("Nodata", JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception ex)
            {

            }

            return View();
        }

        public ActionResult GALLERY()
        {
            return View();
        }

        public ActionResult testingdrobdown()
        {
            return View();
        }

        [HttpGet]
        public ActionResult Framework_Matrix()
        {
            return View();
        }


        [HttpPost]
        public ActionResult Framework_Matrix(string FrameworkData)
        {
            JavaScriptSerializer js = new JavaScriptSerializer();
            var result = js.Deserialize<abhy_framework_matrix>(FrameworkData);


            abhy_framework_matrix obj = new abhy_framework_matrix();

            obj.benefit_dsm_achieved = result.benefit_dsm_achieved;
            obj.benefit_dsm_baseline_16_17 = result.benefit_dsm_baseline_16_17;
            obj.benefit_dsm_ca = result.benefit_dsm_ca;
            obj.benefit_dsm_endtarget_22_23 = result.benefit_dsm_endtarget_22_23;
            obj.blocks_gwq_achieved = result.blocks_gwq_achieved;
            obj.blocks_gwq_baseline_16_17 = result.blocks_gwq_baseline_16_17;
            obj.blocks_gwq_ca = result.blocks_gwq_ca;
            obj.blocks_gwq_endtarget_22_23 = result.blocks_gwq_endtarget_22_23;
            obj.block = result.block;
            obj.community_led_wsp_achieved = result.community_led_wsp_achieved;
            obj.community_led_wsp_baseline_16_17 = result.community_led_wsp_baseline_16_17;
            obj.community_led_wsp_ca = result.community_led_wsp_ca;
            obj.community_led_wsp_endtarget_22_23 = result.community_led_wsp_endtarget_22_23;
            obj.decline_gwl_achieved = result.decline_gwl_achieved;
            obj.decline_gwl_baseline_16_17 = result.decline_gwl_baseline_16_17;
            obj.decline_gwl_ca = result.decline_gwl_ca;
            obj.decline_gwl_endtarget_22_23 = result.decline_gwl_endtarget_22_23;
            obj.district_name = result.district_name;
            obj.direct_prog_beneficiaries_achieved = result.direct_prog_beneficiaries_achieved;
            obj.direct_prog_beneficiaries_baseline_16_17 = result.direct_prog_beneficiaries_baseline_16_17;
            obj.direct_prog_beneficiaries_ca = result.direct_prog_beneficiaries_ca;
            obj.direct_prog_beneficiaries_endtarget_22_23 = result.direct_prog_beneficiaries_endtarget_22_23;
            obj.fmdate = result.fmdate;
            obj.gp_wbc_achieved = result.gp_wbc_achieved;
            obj.gp_wbc_baseline_16_17 = result.gp_wbc_baseline_16_17;
            obj.gp_wbc_ca = result.gp_wbc_ca;
            obj.gp_wbc_endtarget_22_23 = result.gp_wbc_endtarget_22_23;
            obj.pgwm_achieved = result.pgwm_achieved;
            obj.pgwm_baseline_16_17 = result.pgwm_baseline_16_17;
            obj.pgwm_ca = result.pgwm_ca;
            obj.pgwm_endtarget_22_23 = result.pgwm_endtarget_22_23;
            obj.reduction_gwd_achieved = result.reduction_gwd_achieved;
            obj.reduction_gwd_baseline_16_17 = result.reduction_gwd_baseline_16_17;
            obj.reduction_gwd_endtarget_ca = result.reduction_gwd_endtarget_ca;
            obj.reduction_gwd_endtarget_22_23 = result.reduction_gwd_endtarget_22_23;
            obj.reduction_wc_achieved = result.reduction_wc_achieved;
            obj.reduction_wc_baseline_16_17 = result.reduction_wc_baseline_16_17;
            obj.reduction_wc_ca = result.reduction_wc_ca;
            obj.reduction_wc_endtarget_22_23 = result.reduction_wc_endtarget_22_23;
            obj.states_gwm_achieved = result.states_gwm_achieved;
            obj.states_gwm_baseline_16_17 = result.states_gwm_baseline_16_17;
            obj.states_gwm_ca = result.states_gwm_ca;
            obj.states_gwm_endtarget_22_23 = result.states_gwm_endtarget_22_23;
            obj.states_gwq_achieved = result.states_gwq_achieved;
            obj.states_gwq_baseline_16_17 = result.states_gwq_baseline_16_17;
            obj.states_gwq_ca = result.states_gwq_ca;
            obj.states_gwq_endtarget_22_23 = result.states_gwq_endtarget_22_23;
            obj.village_wc_achieved = result.village_wc_achieved;
            obj.village_wc_baseline_16_17 = result.village_wc_baseline_16_17;
            obj.village_wc_ca = result.village_wc_ca;
            obj.village_wc_endtarget_22_23 = result.village_wc_endtarget_22_23;
            obj.state_name = result.state_name;
            obj.wells_mgwl_achieved = result.wells_mgwl_achieved;
            obj.wells_mgwl_baseline_16_17 = result.wells_mgwl_baseline_16_17;
            obj.wells_mgwl_ca = result.wells_mgwl_ca;
            obj.wells_mgwl_endtarget_22_23 = result.wells_mgwl_endtarget_22_23;
            obj.women_decision_roles_achieved = result.women_decision_roles_achieved;
            obj.women_decision_roles_baseline_16_17 = result.women_decision_roles_baseline_16_17;
            obj.women_decision_roles_ca = result.women_decision_roles_ca;
            obj.women_decision_roles_endtarget_22_23 = result.women_decision_roles_endtarget_22_23;
            obj.women_village_wc_achieved = result.women_village_wc_achieved;
            obj.women_village_wc_baseline_16_17 = result.women_village_wc_baseline_16_17;
            obj.women_village_wc_ca = result.women_village_wc_ca;
            obj.women_village_wc_endtarget_22_23 = result.women_village_wc_endtarget_22_23;
            obj.state_name = result.state_name;
            ABE.objabhy_framework_matrix.Add(obj);
            ABE.SaveChanges();


            return Json("Successfully Saved", JsonRequestBehavior.AllowGet);
        }

        public DateTime ParseDate(string date)
        {
            DateTimeFormatInfo dateFormatProvider = new DateTimeFormatInfo();
            dateFormatProvider.ShortDatePattern = "dd-MM-yyyy";
            return DateTime.Parse(date, dateFormatProvider);
        }

        [HttpGet]
        public ActionResult Committee_functionality()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Committee_functionality(string Data)
        {
            try
            {
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<abhy_committee_functionality>(Data);
                //DateTime mdate = ParseDate(result.meet_date);


                abhy_committee_functionality Data123 = new abhy_committee_functionality();
                Data123.wm_community_name = result.wm_community_name;
                Data123.meet_date = result.meet_date;
                Data123.meet_date = ParseDate(result.meet_date).ToString();
                Data123.meet_start_time = result.meet_start_time;
                Data123.meet_end_time = result.meet_end_time;
                Data123.meet_organizer = result.meet_organizer;
                Data123.chair_person = result.chair_person;
                Data123.meet_location = result.meet_location;
                Data123.meet_attendees = result.meet_attendees;
                Data123.action_item = result.action_item;
                Data123.conflicts_received = result.conflicts_received;
                Data123.conflicts_resolved = result.conflicts_resolved;
                Data123.objective_discussed = result.objective_discussed;
                Data123.gw_discussed = result.gw_discussed;
                Data123.wsp_discussed = result.wsp_discussed;
                Data123.role_clarify = result.role_clarify;
                Data123.budget_expenditure = result.budget_expenditure;
                Data123.committee_fees = result.committee_fees;

                Data123.image_type = result.image_type;
                Data123.image_name = "~/Content/committee_images/" + result.image_name;

                Data123.mck1 = result.mck1;
                Data123.mck2 = result.mck2;
                Data123.mck3 = result.mck3;
                Data123.mck4 = result.mck4;

                ABE.objabhy_committee_functionality.Add(Data123);
                ABE.SaveChanges();

                return Json("Inserted Sucessfully", JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(ex, JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult Committee_functionality1()
        {
            if (Request.Files.Count > 0)
            {
                try
                {
                    //  Get all files from Request object  
                    HttpFileCollectionBase files = Request.Files;
                    for (int i = 0; i < files.Count; i++)
                    {
                        //string path = AppDomain.CurrentDomain.BaseDirectory + "Uploads/";  
                        //string filename = Path.GetFileName(Request.Files[i].FileName);  

                        HttpPostedFileBase file = files[i];
                        string fname;

                        // Checking for Internet Explorer  
                        if (Request.Browser.Browser.ToUpper() == "IE" || Request.Browser.Browser.ToUpper() == "INTERNETEXPLORER")
                        {
                            string[] testfiles = file.FileName.Split(new char[] { '\\' });
                            fname = testfiles[testfiles.Length - 1];
                        }
                        else
                        {
                            fname = file.FileName;
                        }

                        // Get the complete folder path and store the file inside it.  
                        fname = Path.Combine(Server.MapPath("~/Content/committee_images/"), fname);
                        file.SaveAs(fname);
                    }
                    // Returns message that successfully uploaded  
                    return Json("File Uploaded Successfully!");
                }
                catch (Exception ex)
                {
                    return Json("Error occurred. Error details: " + ex.Message);
                }
            }
            else
            {
                return Json("No files selected.");
            }
        }
        //households  code                                

        [HttpPost]
        public ActionResult SaveHouseHolds(string Data)
        {
            JavaScriptSerializer js = new JavaScriptSerializer();
            var result = js.Deserialize<abhy_households>(Data);
            var Obj = new abhy_households();
            Obj.category = result.category;
            Obj.minority_f = result.minority_f;
            Obj.minority_m = result.minority_m;
            Obj.obc_f = result.obc_f;
            Obj.obc_m = result.obc_m;
            Obj.others_f = result.others_f;
            Obj.others_m = result.others_m;
            Obj.sc_f = result.sc_f;
            Obj.sc_m = result.sc_m;
            Obj.st_f = result.st_f;
            Obj.st_m = result.st_m;
            Obj.tol_households = result.tol_households;
            if (Session["gstate"] != null)
            {
                Obj.state_name = Session["gstate"].ToString();
            }
            else
            {
                Obj.state_name = "null";
            }

            if (Session["gdist"] != null)
            {
                Obj.district_name = Session["gdist"].ToString();
            }
            else
            {
                Obj.district_name = "null";
            }
            if (Session["gblock"] != null)
            {
                Obj.block = Session["gblock"].ToString();
            }
            else
            {
                Obj.block = "null";
            }
            if (Session["ggram"] != null)
            {
                Obj.gname = Session["ggram"].ToString();
            }
            else
            {
                Obj.gname = "null";
            }
            if (Session["UserId"] != null)
            {
                Obj.userid = Convert.ToInt32(Session["UserId"]);
            }
            else
            {
                Obj.userid = 0;
            }
            //if (Session["gvill"] != null)
            //{
            //    Obj.villname = Session["gvill"].ToString();
            //}
            //else
            //{
            //    Obj.villname = "null";
            //}
            ABE.objabhy_households.Add(Obj);
            ABE.SaveChanges();

            return Json("Successfully Saved", JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult UpdateHouseholds(string Data)
        {
            JavaScriptSerializer js = new JavaScriptSerializer();
            var result = js.Deserialize<abhy_households>(Data);
            var iddd = Convert.ToInt32(result.hlid);
            var Obj = ABE.objabhy_households.Where(x => x.hlid == iddd).SingleOrDefault();
            if (Obj != null)
            {
                Obj.category = result.category;
                Obj.minority_f = result.minority_f;
                Obj.minority_m = result.minority_m;
                Obj.obc_f = result.obc_f;
                Obj.obc_m = result.obc_m;
                Obj.others_f = result.others_f;
                Obj.others_m = result.others_m;
                Obj.sc_f = result.sc_f;
                Obj.sc_m = result.sc_m;
                Obj.st_f = result.st_f;
                Obj.st_m = result.st_m;
                Obj.tol_households = result.tol_households;

                ABE.Entry(Obj).State = EntityState.Modified;
                ABE.SaveChanges();
                return Json("Updated Successfully", JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("No Data", JsonRequestBehavior.AllowGet);
            }
        }


        [HttpPost]
        public ActionResult DeleteHouseholds(string Data)
        {
            JavaScriptSerializer js = new JavaScriptSerializer();
            var result = js.Deserialize<abhy_households>(Data);
            if (result != null)
            {
                var Idd = Convert.ToInt32(result.hlid);
                var Obj = ABE.objabhy_households.Where(x => x.hlid == Idd).SingleOrDefault();
                ABE.Entry(Obj).State = EntityState.Deleted;
                ABE.SaveChanges();
                return Json("Deleted Succesfully", JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("No Data", JsonRequestBehavior.AllowGet);
            }


        }
        [HttpPost]
        public ActionResult HouseholdDetails(string condval)
        {

            if (condval == "0")
            {
                var details = ABE.objabhy_households.Distinct().ToList();
                var jsonresults = Json(details, JsonRequestBehavior.AllowGet);
                jsonresults.MaxJsonLength = int.MaxValue;
                return jsonresults;
            }
            else
            {

                ViewBag.data = ABE.objabhy_households.OrderByDescending(p => p.hlid).FirstOrDefault().hlid;
                var details1 = ViewBag.data;
                int maxval = details1;
                // int max = ABE.objabhy_households.Max(p => p.hlid);
                var details2 = ABE.objabhy_households.Where(d => d.hlid == maxval).ToList();
                return Json(details2, JsonRequestBehavior.AllowGet);
            }

        }

        // adminframework


        [HttpPost]
        public ActionResult admin_framematrix(string state)
        {
            Session["AdminFrameworkstate"] = state;

            var Data1 = ABE.obj_abhy_frameworkmatrix_new.Where(x => x.state_name == state).ToList();
            if (Data1.Count != 0)
            {
                var Datata = Data1.LastOrDefault();
                return Json(Datata, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("NO", JsonRequestBehavior.AllowGet);
            }

        }





        [HttpGet]
        public ActionResult Dli_1_Details(string state)
        {

            var StateName = state;

            var Data1 = ABE.objabhy_dli_one.Where(x => x.state_name == StateName).ToList();
            if (Data1.Count != 0)
            {
                var Datata = Data1.LastOrDefault();
                return Json(Datata, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("NO", JsonRequestBehavior.AllowGet);
            }


        }

        [HttpGet]
        public ActionResult Dli_2_Details(string state)
        {
            var StateName = state;

            var Data1 = ABE.objabhy_dli_two.Where(x => x.state_name == StateName).ToList();
            if (Data1.Count != 0)
            {
                var Datata = Data1.LastOrDefault();
                return Json(Datata, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("NO", JsonRequestBehavior.AllowGet);
            }

        }


        [HttpGet]
        public ActionResult Total_Population_of_the_GP_Info(string state)
        {

            List<abhy_socialmgt_tol_population> ddetails = new List<abhy_socialmgt_tol_population>();

            ddetails = ABE.obj_abhy_socialmgt_tol_population.Where(x => x.state_name == state).ToList();//total list

            var speciesdata1 = Json(ddetails, JsonRequestBehavior.AllowGet);
            speciesdata1.MaxJsonLength = int.MaxValue;
            return speciesdata1;

        }

        [HttpGet]
        public ActionResult Socio_economic_demographic_profile_Info(string state)
        {

            List<abhy_socialmgt_socio_economic> ddetails = new List<abhy_socialmgt_socio_economic>();

            ddetails = ABE.obj_abhy_socialmgt_socio_economic.Where(x => x.state_name == state).ToList();//total list

            var speciesdata1 = Json(ddetails, JsonRequestBehavior.AllowGet);
            speciesdata1.MaxJsonLength = int.MaxValue;
            return speciesdata1;

        }
        [HttpGet]
        public ActionResult VWSC_Info(string state)
        {
            List<abhy_socialmgt_sanitation_committee> ddetails = new List<abhy_socialmgt_sanitation_committee>();

            ddetails = ABE.obj_abhy_socialmgt_sanitation_committee.Where(x => x.state_name == state).ToList();//total list


            var Data = ddetails.LastOrDefault();
            return Json(ddetails, JsonRequestBehavior.AllowGet);


        }


        [HttpGet]
        public ActionResult Dli_4_Details(string state)
        {


            var StateName = state;

            var Data1 = ABE.objabhy_dli_four.Where(x => x.state_name == StateName).ToList();
            if (Data1.Count != 0)
            {
                var Datata = Data1.LastOrDefault();
                return Json(Datata, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("NO", JsonRequestBehavior.AllowGet);
            }


        }

        [HttpGet]
        public ActionResult Dli_5_Details(string state)
        {

            var StateName = state;

            var Data1 = ABE.objabhy_dli_five.Where(x => x.state_name == StateName).ToList();
            if (Data1.Count != 0)
            {
                var Datata = Data1.LastOrDefault();
                return Json(Datata, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("NO", JsonRequestBehavior.AllowGet);
            }


        }


        public ActionResult wsp_tracker()
        {

            if (Session["Officer"] != null)
            {

                ViewBag.GPLIst = ABE.obj_abhy_gpdata_new.ToList();


                var Officer_Name = Session["Officer"].ToString();

                //if (Officer_Name != "District Level Nodal Officer")
                //{
                //    WSP_TrakerDataModel data = new WSP_TrakerDataModel();
                //    data.abhy_gpdata_new = ABE.obj_abhy_gpdata_new.Distinct().ToList();
                //    data.PGWN_Department_Details = ABE.objPGWN_Department_Details.Where(x=>x.officer_name!= "District Level Nodal Officer").Distinct().ToList();
                //    data.abhy_wateravailability_new = ABE.obj_abhy_wateravailability_new.Where(x => x.officer_name != "District Level Nodal Officer").Distinct().ToList();
                //    data.abhy_waterdraft_domestic_new = ABE.obj_abhy_waterdraft_domestic_new.Where(x => x.officer_name != "District Level Nodal Officer").Distinct().ToList();
                //    data.abhy_waterbudget_new = ABE.obj_abhy_waterbudget_new.Where(x => x.officer_name != "District Level Nodal Officer").Distinct().ToList();
                //    data.abhy_waterbalance_new = ABE.obj_abhy_waterbalance_new.Where(x => x.officer_name != "District Level Nodal Officer").Distinct().ToList();
                //    data.abhy_demandside_sprinkler_saveddata = ABE.obj_sprinkler.Where(x => x.officer_name != "District Level Nodal Officer").Distinct().ToList();
                //    data.supply_AR_Structures = ABE.obj_supply_AR_Structures.Where(x => x.officer_name != "District Level Nodal Officer").Distinct().ToList();

                //    ViewBag.FullData = data;
                //}
                //if (Officer_Name == "District Level Nodal Officer")
                //{
                WSP_TrakerDataModel data = new WSP_TrakerDataModel();
                data.abhy_gpdata_new = ABE.obj_abhy_gpdata_new.Distinct().ToList();
                data.PGWN_Department_Details = ABE.objPGWN_Department_Details.Where(x => x.officer_name == "District Level Nodal Officer").Distinct().ToList();
                data.abhy_wateravailability_new = ABE.obj_abhy_wateravailability_new.Where(x => x.officer_name == "District Level Nodal Officer").Distinct().ToList();
                data.abhy_waterdraft_domestic_new = ABE.obj_abhy_waterdraft_domestic_new.Where(x => x.officer_name == "District Level Nodal Officer").Distinct().ToList();
                data.abhy_waterbudget_new = ABE.obj_abhy_waterbudget_new.Where(x => x.officer_name == "District Level Nodal Officer").Distinct().ToList();
                data.abhy_waterbalance_new = ABE.obj_abhy_waterbalance_new.Where(x => x.officer_name == "District Level Nodal Officer").Distinct().ToList();
                data.abhy_demandside_sprinkler_saveddata = ABE.obj_sprinkler.Where(x => x.officer_name == "District Level Nodal Officer").Distinct().ToList();
                data.supply_AR_Structures = ABE.obj_supply_AR_Structures.Where(x => x.officer_name == "District Level Nodal Officer").Distinct().ToList();

                ViewBag.FullData = data;
                //}

                return View();
            }
            else
            {
                return View();
            }

        }
        [HttpPost]
        public ActionResult wsp_tracker(string Data)
        {
            try
            {
                if (Session["UserId"] != null)
                {
                    var Officer_Name = Session["Officer"].ToString();


                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_training_manuals>(Data);
                    if (result.state_name != "0" && result.state_name != null && result.district_name != "0" && result.district_name != null && result.block_name != "0" && result.block_name != null)
                    {
                        var statename = result.state_name;
                        var distname = result.district_name;
                        var blockname = result.block_name;

                        WSP_TrakerDataModel data = new WSP_TrakerDataModel();
                        //if (Officer_Name != "District Level Nodal Officer")
                        //{
                        //    data.abhy_gpdata_new = ABE.obj_abhy_gpdata_new.Where(s => s.state_name == statename && s.district_name == distname && s.block_name == blockname).Distinct().ToList();
                        //    data.PGWN_Department_Details = ABE.objPGWN_Department_Details.Where(s => s.state_name == statename && s.district_name == distname && s.block == blockname && s.officer_name != "District Level Nodal Officer").Distinct().ToList();

                        //    data.abhy_wateravailability_new = ABE.obj_abhy_wateravailability_new.Where(s => s.state_name == statename && s.district_name == distname && s.block_name == blockname && s.officer_name == "District Level Nodal Officer").Distinct().ToList();
                        //    data.abhy_waterdraft_domestic_new = ABE.obj_abhy_waterdraft_domestic_new.Where(s => s.state_name == statename && s.district_name == distname && s.block_name == blockname && s.officer_name == "District Level Nodal Officer").Distinct().ToList();
                        //    data.abhy_waterbudget_new = ABE.obj_abhy_waterbudget_new.Where(s => s.state_name == statename && s.district_name == distname && s.block_name == blockname && s.officer_name == "District Level Nodal Officer").Distinct().ToList();
                        //    data.abhy_waterbalance_new = ABE.obj_abhy_waterbalance_new.Where(s => s.state_name == statename && s.district_name == distname && s.block_name == blockname && s.officer_name == "District Level Nodal Officer").Distinct().ToList();
                        //    data.abhy_demandside_sprinkler_saveddata = ABE.obj_sprinkler.Where(s => s.statename == statename && s.districtname == distname && s.blockname == blockname && s.officer_name == "District Level Nodal Officer").Distinct().ToList();
                        //    data.supply_AR_Structures = ABE.obj_supply_AR_Structures.Where(x => x.officer_name == "District Level Nodal Officer" && x.state_name==statename && x.district_name==distname && x.block_name==blockname).ToList();
                        //}
                        //else
                        //if (Officer_Name == "District Level Nodal Officer")
                        //{

                        data.abhy_gpdata_new = ABE.obj_abhy_gpdata_new.Where(s => s.state_name == statename && s.district_name == distname && s.block_name == blockname).Distinct().ToList();
                        data.PGWN_Department_Details = ABE.objPGWN_Department_Details.Where(s => s.state_name == statename && s.district_name == distname && s.block == blockname && s.officer_name == "District Level Nodal Officer").Distinct().ToList();

                        data.abhy_wateravailability_new = ABE.obj_abhy_wateravailability_new.Where(s => s.state_name == statename && s.district_name == distname && s.block_name == blockname && s.officer_name == "District Level Nodal Officer").Distinct().ToList();
                        data.abhy_waterdraft_domestic_new = ABE.obj_abhy_waterdraft_domestic_new.Where(s => s.state_name == statename && s.district_name == distname && s.block_name == blockname && s.officer_name == "District Level Nodal Officer").Distinct().ToList();
                        data.abhy_waterbudget_new = ABE.obj_abhy_waterbudget_new.Where(s => s.state_name == statename && s.district_name == distname && s.block_name == blockname && s.officer_name == "District Level Nodal Officer").Distinct().ToList();
                        data.abhy_waterbalance_new = ABE.obj_abhy_waterbalance_new.Where(s => s.state_name == statename && s.district_name == distname && s.block_name == blockname && s.officer_name == "District Level Nodal Officer").Distinct().ToList();
                        data.abhy_demandside_sprinkler_saveddata = ABE.obj_sprinkler.Where(s => s.statename == statename && s.districtname == distname && s.blockname == blockname && s.officer_name == "District Level Nodal Officer").Distinct().ToList();
                        data.supply_AR_Structures = ABE.obj_supply_AR_Structures.Where(x => x.officer_name == "District Level Nodal Officer" && x.state_name == statename && x.district_name == distname && x.block_name == blockname).ToList();

                        //}
                        var data1 = Json(data, JsonRequestBehavior.AllowGet);
                        data1.MaxJsonLength = int.MaxValue;
                        return data1;
                    }

                    else if (result.state_name != "0" && result.state_name != null && result.district_name != "0" && result.district_name != null)
                    {
                        var statename = result.state_name;
                        var distname = result.district_name;

                        WSP_TrakerDataModel data = new WSP_TrakerDataModel();
                        //if (Officer_Name != "District Level Nodal Officer")
                        //{
                        //    data.abhy_gpdata_new = ABE.obj_abhy_gpdata_new.Where(s => s.state_name == statename && s.district_name == distname).Distinct().ToList();
                        //    data.PGWN_Department_Details = ABE.objPGWN_Department_Details.Where(s => s.state_name == statename && s.district_name == distname && s.officer_name != "District Level Nodal Officer").Distinct().ToList();

                        //    data.abhy_wateravailability_new = ABE.obj_abhy_wateravailability_new.Where(s => s.state_name == statename && s.district_name == distname  && s.officer_name != "District Level Nodal Officer").Distinct().ToList();
                        //    data.abhy_waterdraft_domestic_new = ABE.obj_abhy_waterdraft_domestic_new.Where(s => s.state_name == statename && s.district_name == distname && s.officer_name != "District Level Nodal Officer").Distinct().ToList();
                        //    data.abhy_waterbudget_new = ABE.obj_abhy_waterbudget_new.Where(s => s.state_name == statename && s.district_name == distname  && s.officer_name != "District Level Nodal Officer").Distinct().ToList();
                        //    data.abhy_waterbalance_new = ABE.obj_abhy_waterbalance_new.Where(s => s.state_name == statename && s.district_name == distname  && s.officer_name != "District Level Nodal Officer").Distinct().ToList();
                        //    data.abhy_demandside_sprinkler_saveddata = ABE.obj_sprinkler.Where(s => s.statename == statename && s.districtname == distname && s.officer_name != "District Level Nodal Officer").Distinct().ToList();
                        //    data.supply_AR_Structures = ABE.obj_supply_AR_Structures.Where(x => x.officer_name != "District Level Nodal Officer" && x.state_name == statename && x.district_name == distname ).ToList();
                        //}
                        //else
                        //{
                        //if (Officer_Name == "District Level Nodal Officer")
                        //{
                        data.abhy_gpdata_new = ABE.obj_abhy_gpdata_new.Where(s => s.state_name == statename && s.district_name == distname).Distinct().ToList();
                        data.PGWN_Department_Details = ABE.objPGWN_Department_Details.Where(s => s.state_name == statename && s.district_name == distname && s.officer_name == "District Level Nodal Officer").Distinct().ToList();

                        data.abhy_wateravailability_new = ABE.obj_abhy_wateravailability_new.Where(s => s.state_name == statename && s.district_name == distname && s.officer_name == "District Level Nodal Officer").Distinct().ToList();
                        data.abhy_waterdraft_domestic_new = ABE.obj_abhy_waterdraft_domestic_new.Where(s => s.state_name == statename && s.district_name == distname && s.officer_name == "District Level Nodal Officer").Distinct().ToList();
                        data.abhy_waterbudget_new = ABE.obj_abhy_waterbudget_new.Where(s => s.state_name == statename && s.district_name == distname && s.officer_name == "District Level Nodal Officer").Distinct().ToList();
                        data.abhy_waterbalance_new = ABE.obj_abhy_waterbalance_new.Where(s => s.state_name == statename && s.district_name == distname && s.officer_name == "District Level Nodal Officer").Distinct().ToList();
                        data.abhy_demandside_sprinkler_saveddata = ABE.obj_sprinkler.Where(s => s.statename == statename && s.districtname == distname && s.officer_name == "District Level Nodal Officer").Distinct().ToList();
                        data.supply_AR_Structures = ABE.obj_supply_AR_Structures.Where(x => x.officer_name == "District Level Nodal Officer" && x.state_name == statename && x.district_name == distname).ToList();

                        //}
                        var data1 = Json(data, JsonRequestBehavior.AllowGet);
                        data1.MaxJsonLength = int.MaxValue;
                        return data1;
                    }
                    else if (result.state_name != "0" && result.state_name != null)
                    {
                        var statename = result.state_name;

                        WSP_TrakerDataModel data = new WSP_TrakerDataModel();

                        //if (Officer_Name == "District Level Nodal Officer")
                        //{
                        data.abhy_gpdata_new = ABE.obj_abhy_gpdata_new.Where(s => s.state_name == statename).Distinct().ToList();
                        data.PGWN_Department_Details = ABE.objPGWN_Department_Details.Where(s => s.state_name == statename && s.officer_name == "District Level Nodal Officer").Distinct().ToList();

                        data.abhy_wateravailability_new = ABE.obj_abhy_wateravailability_new.Where(s => s.state_name == statename && s.officer_name == "District Level Nodal Officer").Distinct().ToList();
                        data.abhy_waterdraft_domestic_new = ABE.obj_abhy_waterdraft_domestic_new.Where(s => s.state_name == statename && s.officer_name == "District Level Nodal Officer").Distinct().ToList();
                        data.abhy_waterbudget_new = ABE.obj_abhy_waterbudget_new.Where(s => s.state_name == statename && s.officer_name == "District Level Nodal Officer").Distinct().ToList();
                        data.abhy_waterbalance_new = ABE.obj_abhy_waterbalance_new.Where(s => s.state_name == statename && s.officer_name == "District Level Nodal Officer").Distinct().ToList();
                        data.abhy_demandside_sprinkler_saveddata = ABE.obj_sprinkler.Where(s => s.statename == statename && s.officer_name == "District Level Nodal Officer").Distinct().ToList();
                        data.supply_AR_Structures = ABE.obj_supply_AR_Structures.Where(x => x.officer_name == "District Level Nodal Officer" && x.state_name == statename).ToList();

                        //}
                        var data1 = Json(data, JsonRequestBehavior.AllowGet);
                        data1.MaxJsonLength = int.MaxValue;
                        return data1;
                    }
                    else
                    {
                        WSP_TrakerDataModel data = new WSP_TrakerDataModel();
                        //if (Officer_Name != "District Level Nodal Officer")
                        //{
                        //    data.abhy_gpdata_new = ABE.obj_abhy_gpdata_new.Distinct().ToList();
                        //    data.PGWN_Department_Details = ABE.objPGWN_Department_Details.Where(s =>  s.officer_name != "District Level Nodal Officer").Distinct().ToList();

                        //    data.abhy_wateravailability_new = ABE.obj_abhy_wateravailability_new.Where(s => s.officer_name != "District Level Nodal Officer").Distinct().ToList();
                        //    data.abhy_waterdraft_domestic_new = ABE.obj_abhy_waterdraft_domestic_new.Where(s =>  s.officer_name != "District Level Nodal Officer").Distinct().ToList();
                        //    data.abhy_waterbudget_new = ABE.obj_abhy_waterbudget_new.Where(s => s.officer_name != "District Level Nodal Officer").Distinct().ToList();
                        //    data.abhy_waterbalance_new = ABE.obj_abhy_waterbalance_new.Where(s => s.officer_name != "District Level Nodal Officer").Distinct().ToList();
                        //    data.abhy_demandside_sprinkler_saveddata = ABE.obj_sprinkler.Where(s => s.officer_name != "District Level Nodal Officer").Distinct().ToList();
                        //    data.supply_AR_Structures = ABE.obj_supply_AR_Structures.Where(x => x.officer_name != "District Level Nodal Officer").ToList();
                        //}
                        //else
                        //{
                        if (Officer_Name == "District Level Nodal Officer")
                        {
                            data.abhy_gpdata_new = ABE.obj_abhy_gpdata_new.Distinct().ToList();
                            data.PGWN_Department_Details = ABE.objPGWN_Department_Details.Where(s => s.officer_name == "District Level Nodal Officer").Distinct().ToList();

                            data.abhy_wateravailability_new = ABE.obj_abhy_wateravailability_new.Where(s => s.officer_name == "District Level Nodal Officer").Distinct().ToList();
                            data.abhy_waterdraft_domestic_new = ABE.obj_abhy_waterdraft_domestic_new.Where(s => s.officer_name == "District Level Nodal Officer").Distinct().ToList();
                            data.abhy_waterbudget_new = ABE.obj_abhy_waterbudget_new.Where(s => s.officer_name == "District Level Nodal Officer").Distinct().ToList();
                            data.abhy_waterbalance_new = ABE.obj_abhy_waterbalance_new.Where(s => s.officer_name == "District Level Nodal Officer").Distinct().ToList();
                            data.abhy_demandside_sprinkler_saveddata = ABE.obj_sprinkler.Where(s => s.officer_name == "District Level Nodal Officer").Distinct().ToList();
                            data.supply_AR_Structures = ABE.obj_supply_AR_Structures.Where(x => x.officer_name == "District Level Nodal Officer").ToList();

                        }
                        var data1 = Json(data, JsonRequestBehavior.AllowGet);
                        data1.MaxJsonLength = int.MaxValue;
                        return data1;
                    }
                }
                else
                {
                    return Json("Logout", JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception ex)
            {

            }
            return View();
        }

        //fundrequirementcode
        [HttpPost]
        public ActionResult Fund_requirements_saving(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {

                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_fund_requirements>(Data);
                    var obj = new abhy_fund_requirements();
                    var State = result.state_name;
                    var Dist = result.district_name;

                    //var Block = result.block_name;
                    //var Gram = result.gpname;

                    obj.state_name = State.Trim();
                    obj.district_name = Dist.Trim();
                    obj.block_name = result.block_name.Trim();
                    obj.gpname = result.gpname;
                    obj.demandside_module = result.demandside_module;
                    obj.demandside_funding_source = result.demandside_funding_source;
                    obj.demandside_fund_through_convergance = result.demandside_fund_through_convergance;
                    obj.demandside_gap_funding = result.demandside_gap_funding;
                    obj.supplyside_fund_through_convergance = result.supplyside_fund_through_convergance;
                    var TodayDate1 = DateTime.Today.ToString();
                    var Datea = TodayDate1.Split('-', ' ');
                    var Today1 = Datea[0] + '/' + Datea[1] + '/' + Datea[2];
                    obj.fund_date = Today1;
                    obj.supplyside_gap_funding = result.supplyside_gap_funding;
                    obj.supplyside_module = result.supplyside_module;
                    obj.userid = Convert.ToInt32(Session["UserId"]);
                    ABE.obj_abhy_fund_requirements.Add(obj);
                    ABE.SaveChanges();
                    return Json("Successfully Saved");

                }
                catch (Exception Ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }


        }

        [HttpGet]
        public ActionResult Fund_requirements_getting()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();
                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    var UserIdd = Convert.ToInt32(Session["UserId"]);
                    var de = ABE.obj_abhy_fund_requirements.ToList();
                    var Dataa = ABE.obj_abhy_fund_requirements.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();
                    if (Dataa.Count != 0)
                    {
                        return Json(Dataa, JsonRequestBehavior.AllowGet);

                    }
                    else
                    {
                        return Json("NO", JsonRequestBehavior.AllowGet);
                    }
                }
                catch (Exception ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }

        }
        [HttpPost]
        public ActionResult update_fund_req(string fund_req_update1)
        {

            JavaScriptSerializer js = new JavaScriptSerializer();
            var result = js.Deserialize<abhy_fund_requirements>(fund_req_update1);


            var ARID = Convert.ToInt32(result.id);
            var Data1 = ABE.obj_abhy_fund_requirements.Where(x => x.id == ARID).FirstOrDefault();
            if (Data1 != null)
            {
                Data1.demandside_module = result.demandside_module;
                Data1.demandside_funding_source = result.demandside_funding_source;
                Data1.demandside_fund_through_convergance = result.demandside_fund_through_convergance;
                Data1.demandside_gap_funding = result.demandside_gap_funding;
                Data1.supplyside_module = result.supplyside_module;
                Data1.supplyside_fund_through_convergance = result.supplyside_fund_through_convergance;
                Data1.supplyside_gap_funding = result.supplyside_gap_funding;
                var TodayDate1 = DateTime.Today.ToString();
                Data1.fund_date = TodayDate1;
                // Data1.userid = Convert.ToInt32(Session["UserId"]);
                ABE.Entry(Data1).State = EntityState.Modified;
                ABE.SaveChanges();
                return Json("Updated Successfully");
            }
            else
            {
                return Json("Not Updated");
            }

        }


        [HttpPost]
        public ActionResult deletefund_req(string fund_req_delete1)
        {

            JavaScriptSerializer js = new JavaScriptSerializer();
            var result = js.Deserialize<abhy_fund_requirements>(fund_req_delete1);

            if (result.id != 0)
            {
                var ARID = Convert.ToInt32(result.id);
                var Data1 = ABE.obj_abhy_fund_requirements.Where(x => x.id == ARID).FirstOrDefault();
                if (Data1 != null)
                {

                    ABE.Entry(Data1).State = EntityState.Deleted;
                    ABE.SaveChanges();
                    return Json("Deleted Successfully");
                }
                else
                {
                    return Json("Not Deleted");
                }

            }
            else
            {
                return View();
            }

        }
    }
}