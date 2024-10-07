using AbhyProject.Classes;
using AbhyProject.Models;
using AbhyProject.Utility;
using CaptchaMvc.HtmlHelpers;
using ClosedXML.Excel;
using LinqToExcel;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Validation;
using System.Drawing;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Net.Security;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;

namespace AbhyProject.Controllers
{
    public class VendorsController : Controller
    {
        AbhyEntity ABE = new AbhyEntity();
        // GET: Vendors
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Environmental_Safeguards_Tool()
        {
            
            return View();
        }

        public ActionResult admin_Training_Workshop()
        {
            return View();
        }

        [HttpPost]
        public ActionResult admin_Training_Workshop(abhy_training_workshops users, HttpPostedFileBase filetraining)
        {

            List<string> data = new List<string>();
            if (filetraining != null)
            {
                // tdata.ExecuteCommand("truncate table OtherCompanyAssets");
                if (filetraining.ContentType == "application/vnd.ms-excel" || filetraining.ContentType == "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
                {
                    string filename = filetraining.FileName;
                    //D:\Ataljal_grievnce\training_workshop_excel
                    string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                    string targetpath = System.IO.Path.Combine(BasePath, "Ataljalimages\\training_workshop_excel\\");


                    //string targetpath = Server.MapPath("~/Content/Pdf_files/");
                    filetraining.SaveAs(targetpath + filename);
                    string pathToExcelFile = targetpath + filename;


                    string sheetName = "abhy_training_workshops";
                    var excelFile = new ExcelQueryFactory(pathToExcelFile);
                    var artistAlbums = from a in excelFile.Worksheet<abhy_training_workshops>(sheetName) select a;
                    foreach (var a in artistAlbums)
                    {

                        try
                        {
                            abhy_training_workshops ABC = new abhy_training_workshops();
                            if (a.from_date != "" && a.from_date != null)
                            {
                                ABC.from_date = a.from_date;
                            }
                            if (a.other_state_name != "" && a.other_state_name != null)
                            {
                                ABC.other_state_name = a.other_state_name;
                            }

                            if (a.p_training_name != "" && a.p_training_name != null)
                            {
                                ABC.p_training_name = a.p_training_name;
                            }

                            if (a.state_name != "" && a.state_name != null)
                            {
                                ABC.state_name = a.state_name;
                            }

                            if (a.to_date != "" && a.to_date != null)
                            {
                                ABC.to_date = a.to_date;
                            }

                            if (a.training_end != "" && a.training_end != null)
                            {
                                ABC.training_end = a.training_end;
                            }

                            if (a.training_start != "" && a.training_start != null)
                            {
                                ABC.training_start = a.training_start;
                            }
                            if (a.training_status != "" && a.training_status != null)
                            {
                                ABC.training_status = a.training_status;
                            }

                            ABE.obj_abhy_training_workshops.Add(ABC);
                            ABE.SaveChanges();


                        }
                        catch (DbEntityValidationException ex)
                        {
                            foreach (var entityValidationErrors in ex.EntityValidationErrors)
                            {
                                foreach (var validationError in entityValidationErrors.ValidationErrors)
                                {
                                    Response.Write("Property: " + validationError.PropertyName + " Error: " + validationError.ErrorMessage);
                                }
                            }
                        }
                    }
                    //deleting excel file from folder
                    if ((System.IO.File.Exists(pathToExcelFile)))
                    {
                        System.IO.File.Delete(pathToExcelFile);
                    }
                    ViewBag.Error = "Upload Successfully";
                    return View();
                }
                else
                {

                    ViewBag.Error = "Only Excel file format is allowed";

                    return View();
                }
            }
            else
            {

                ViewBag.Error = "Please choose Excel file";


                return View();
            }
        }


        public ActionResult Vendors()
        {
            //if (Session["UserId"] != null)
            //{
            return View();
            //}
            //else
            //{
            //    return RedirectToAction("MisLogin", "Home");
            //}
        }
        [HttpPost]
        public ActionResult Vendors(string CompanyName, string NodalOfficer, string PhoneNumber, string MobileNumber, string WebsiteLink, string Email, string Address, string ck1, string ck3, string category, string description, string clientCaptcha)
        {
            //if (TempData["captch"] != null)
            //{
            //    return View("Vendors");
            //}
            //else
            //{
            if (!ModelState.IsValid)
            {
                return View("Vendors");
            }
            else
            {

                // Code for validating the CAPTCHA 
                if (TempData["captch"] != null && Session["text"].ToString() != clientCaptcha)
                {
                    ViewBag.CaptchaError1 = "Captcha is Not Matched";
                    return View("Vendors");
                }
                //if (!this.IsCaptchaValid(" "))
                //{
                //    ViewBag.ErrMessage = "Error: captcha is not valid.";
                //    return View("Vendors");

                //}
                else
                {
                    VendorRegisters vendors = new VendorRegisters();
                    vendors.CompanyName = CompanyName;
                    vendors.NodalOfficer = NodalOfficer;
                    vendors.PhoneNumber = PhoneNumber;
                    vendors.MobileNumber = MobileNumber;
                    vendors.WebsiteLink = WebsiteLink;
                    vendors.Email = Email;
                    vendors.Address = Address;
                    vendors.AreYou = ck1;
                    vendors.CategoryofHydro = ck3;
                    vendors.Category = category;
                    vendors.Description = description;
                    ABE.objVendorRegisters.Add(vendors);
                    ABE.SaveChanges();
                    string contemail = Email;
                    ViewBag.Success = "Successfully Registered";
                    return View("Vendors");
                }
            }
            //}
        }

        public ActionResult VendorList()
        {
            var res = ABE.objVendorRegisters.ToList();
            return View(res);
        }

        public ActionResult demo()
        {
            return View();
        }

        //dont delete below method its for dateparse mohan
        public DateTime ParseDate(string date)
        {
            DateTimeFormatInfo dateFormatProvider = new DateTimeFormatInfo();
            dateFormatProvider.ShortDatePattern = "dd/MM/yyyy";
            return DateTime.Parse(date, dateFormatProvider);
        }


        [HttpGet]
        public ActionResult workshop_Training_form()
        {
            return View();
        }
        [HttpGet]
        public ActionResult workshop_Training_form_new()       // abhi phase2
        {
            return View();
        }

        [HttpPost]
        public ActionResult workshop_Training_form(string Data)
        {
            JavaScriptSerializer js = new JavaScriptSerializer();
            var result = js.Deserialize<Abhy_Training_Workshops>(Data);
            Abhy_Training_Workshops data1 = new Abhy_Training_Workshops();
            data1.description = result.description;
            data1.Event = result.Event;
            data1.from_date = result.from_date;
            data1.no_of_registered_users = result.no_of_registered_users;
            data1.pan_number = result.pan_number;
            data1.phone_number = result.phone_number;
            data1.to_date = result.to_date;
            data1.Trainingname = result.Trainingname;
            data1.Venue = result.Venue;
            ABE.objAbhy_Training_Workshops.Add(data1);
            ABE.SaveChanges();
            return Json("Saved Successfully");

        }

        [HttpGet]
        public ActionResult workshop_Training()
        {
            List<Abhy_Training_Workshops> works = ABE.objAbhy_Training_Workshops.ToList();
            List<Abhy_Training_Workshops> Data = new List<Models.Abhy_Training_Workshops>();

            foreach (var item in works)

            {
                DateTime Todate = ParseDate(item.to_date);
                DateTime FromDate = ParseDate(item.from_date);

                if (Todate >= DateTime.Today)
                {
                    ViewBag.Dates = (FromDate - Todate).TotalDays;
                    Data.Add(item);
                }
                ViewBag.Data = Data;
                ViewBag.Count = Data.Count;
            }


            return View(Data);
        }
        [HttpPost]
        public ActionResult workshop_Training(string phone, string pan)
        {
            List<Abhy_Training_Workshops> works = ABE.objAbhy_Training_Workshops.Where(x => x.pan_number == pan || x.phone_number == phone).ToList();
            List<Abhy_Training_Workshops> Data = new List<Models.Abhy_Training_Workshops>();

            foreach (var item in works)

            {

                DateTime Todate = ParseDate(item.to_date);
                DateTime FromDate = ParseDate(item.from_date);


                if (Todate >= DateTime.Today)
                {
                    ViewBag.Dates = (FromDate - Todate).TotalDays;
                    Data.Add(item);
                }
                ViewBag.Data = Data;
                ViewBag.Count = Data.Count;
            }
            return View(Data);
        }

        public ActionResult Add_info_Training(int id)
        {
            ViewBag.id = id;
            return View();
        }
        [HttpPost]
        public ActionResult Add_info_Training(string Mobile, string PANNumber)
        {
            List<Abhy_Training_Workshops> Data = ABE.objAbhy_Training_Workshops.Where(x => x.pan_number == PANNumber || x.phone_number == Mobile).ToList();
            return View(Data);

        }
        [HttpGet]
        public ActionResult Upload_Docs_for_raining()
        {

            return View();
        }

        [HttpGet]
        public ActionResult Upload_Docs_for_raining1(string training_name, string participant_name)
        {
            //var events = ABE.obj_abhy_training_workshops.ToList();
            //var newregs = ABE.obj_abhy_training_newregs.ToList();

            var xx = training_name.ToString();
            var yy = participant_name.ToString();

            var dddd = xx;
            var ssss = yy;
            //var namedetails = ABE.obj_abhy_training_newregs.Where(x => x.p_name == participant_name).ToList();
            //Nmae of training Filtering
            var TrainingSearchModel_details = from s in ABE.obj_abhy_training_workshops
                                              join st in ABE.obj_abhy_training_newregs on s.p_training_name equals st.p_training_name
                                              into table1
                                              from st in table1.DefaultIfEmpty()
                                              where st.p_training_name == training_name && s.p_training_name == training_name && st.registration_no == participant_name
                                              select new TrainingSearchModel { eventsvm = s, newregsvm = st };
            return Json(TrainingSearchModel_details, JsonRequestBehavior.AllowGet);
            //if (dddd != "" && dddd != "0" && dddd != null)
            //{
            //    //var namedetails = ABE.obj_abhy_training_newregs.Where(x => x.p_name == participant_name).ToList();
            //    //Nmae of training Filtering
            //    var TrainingSearchModel_details = from s in ABE.obj_abhy_training_workshops
            //                                      join st in ABE.obj_abhy_training_newregs on s.p_training_name equals st.p_training_name
            //                                      into table1
            //                                      from st in table1.DefaultIfEmpty()
            //                                      where st.p_training_name == training_name && s.p_training_name == training_name
            //                                      select new TrainingSearchModel { eventsvm = s, newregsvm = st };
            //    return Json(TrainingSearchModel_details, JsonRequestBehavior.AllowGet);
            //}
            //else if (ssss != "" && ssss != null)
            //{
            //    //participant name filtering
            //    var TrainingSearchModel_details1 = from s in ABE.obj_abhy_training_workshops
            //                                       join st in ABE.obj_abhy_training_newregs.Where(x => x.registration_no == participant_name) on s.p_training_name equals st.p_training_name
            //                                       into table2
            //                                       from st in table2.DefaultIfEmpty()
            //                                       where st.p_training_name == training_name && s.p_training_name == training_name || st.registration_no == participant_name
            //                                       select new TrainingSearchModel { eventsvm = s, newregsvm = st };

            //    return Json(TrainingSearchModel_details1, JsonRequestBehavior.AllowGet);
            //}
            //else
            //{
            //    return Json("NoData", JsonRequestBehavior.AllowGet);
            //}

        }

        //Captcha code start///

        private string GetRandomText()
        {
            StringBuilder randomText = new StringBuilder();
            string alphabets = "012345679ACEFGHKLMNPRSWXZabcdefghijkhlmnopqrstuvwxyz";
            Random r = new Random();
            for (int j = 0; j <= 5; j++)
            {
                randomText.Append(alphabets[r.Next(alphabets.Length)]);
            }
            return randomText.ToString();
        }
        public FileResult GetCaptchaImage()
        {
            //string text = Session["CAPTCHA"].ToString();
            string text = GetRandomText();
            Session["text"] = text;
            //first, create a dummy bitmap just to get a graphics object
            Image img = new Bitmap(1, 1);
            Graphics drawing = Graphics.FromImage(img);

            Font font = new Font("Arial", 15);
            //measure the string to see how big the image needs to be
            SizeF textSize = drawing.MeasureString(text, font);

            //free up the dummy image and old graphics object
            img.Dispose();
            drawing.Dispose();

            //create a new image of the right size
            img = new Bitmap((int)textSize.Width + 40, (int)textSize.Height + 20);
            drawing = Graphics.FromImage(img);

            Color backColor = Color.SeaShell;
            Color textColor = Color.Red;
            //paint the background
            drawing.Clear(backColor);

            //create a brush for the text
            Brush textBrush = new SolidBrush(textColor);

            drawing.DrawString(text, font, textBrush, 20, 10);

            drawing.Save();

            font.Dispose();
            textBrush.Dispose();
            drawing.Dispose();

            MemoryStream ms = new MemoryStream();
            img.Save(ms, System.Drawing.Imaging.ImageFormat.Png);
            img.Dispose();

            return File(ms.ToArray(), "image/png");
        }

        [HttpPost]
        public JsonResult CustomCaptcha(FormCollection form, string clientCaptcha)
        {
            System.Threading.Thread.Sleep(200);
            //string clientCaptcha = form["clientCaptcha"];
            string serverCaptcha = "";
            if (Session["text"] != null)
            {
                serverCaptcha = Session["text"].ToString();
            }

            if (!clientCaptcha.Equals(serverCaptcha))
            {
                //ViewBag.ShowCAPTCHA = serverCaptcha;

                TempData["captch"] = "notmatched";
                return Json(0);
            }
            else
            {
                return Json("Vendors");
            }


        }

        // End Captcha code

        //Training_Workshops new code
        [HttpGet]
        public ActionResult Save_Training_Working_Info()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Save_Training_Working_Info(string Data)
        {
            JavaScriptSerializer js = new JavaScriptSerializer();
            var result = js.Deserialize<abhy_training_workshops>(Data);
            abhy_training_workshops data1 = new abhy_training_workshops();
            data1.p_training_name = result.p_training_name;
            data1.from_date = result.from_date;
            data1.to_date = result.to_date;
            data1.state_name = result.state_name;
            data1.other_state_name = result.other_state_name;
            data1.training_status = result.training_status;
            data1.training_start = result.training_start;
            data1.training_end = result.training_end;
            ABE.obj_abhy_training_workshops.Add(data1);
            ABE.SaveChanges();
            return Json("Saved Successfully");
        }

        [HttpGet]
        public ActionResult Get_Training_Working_Info()  //abhi
        {
            try
            {

                List<current_events> ddetails = ABE.obj_current_events.ToList();//total list
                List<current_events> eventlist = new List<current_events>();
                DateTime TwoDaysAgo = DateTime.Today.AddDays(-2);
                foreach (var item in ddetails)
                {
                    DateTime closedate = Convert.ToDateTime(item.to_date);
                    if (closedate >= TwoDaysAgo)
                    {
                        eventlist.Add(item);
                        // int count = ddetails.ToList().Count;
                        // for (int i = 0; i < count; i++)
                        //{
                        //    count = ddetails.ToList().Count;
                        //    if (count < 0)
                        //    {
                        //        string Test = ddetails[i].p_training_name;
                        //        //  pos = ddetails.
                        //        bool IsValid = Event_Registration_Date_Checking_All(Test);
                        //        if (!IsValid)
                        //        {
                        //            ddetails.RemoveAt(i);
                        //            i--;
                        //        }
                        //    }
                    }

                }

                var jsonResult = Json(eventlist, JsonRequestBehavior.AllowGet);
                jsonResult.MaxJsonLength = int.MaxValue;
                return jsonResult;

            }
            catch (Exception Ex)
            {
                return Json("Error", JsonRequestBehavior.AllowGet);
            }
            return Json("NoData", JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult Get_Training_Working_Info_all(string Data)  //abhi
        
        {
            try
            {
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<abhy_IEC>(Data);
                //var data = ABE.obj_vw_abhy_feedback_latest.ToList();
                List<vw_current_events> ddetails = new List<vw_current_events>();
                var State = result.state_name;
                var Dist = result.district_name;
                var Block = result.block_name;
                var year = result.year;
                var month = result.month;
                if (State == "All")
                {
                    if (State == "All" && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        ddetails = ABE.obj_vw_current_events.Where(x => x.yearname == year && x.monthname == month && x.Nodal_officer!= "Gram Panchyat Nodal Officer").OrderByDescending(x => x.id).ToList();//total list

                    }
                    else if (State == "All" && year != "0" && year != "" && year != null)
                    {
                        ddetails = ABE.obj_vw_current_events.Where(x => x.yearname == year && x.Nodal_officer != "Gram Panchyat Nodal Officer").OrderByDescending(x => x.id).ToList();//total list

                    }
                    else if (State == "All")
                    {
                        ddetails = ABE.obj_vw_current_events.Where(x=> x.Nodal_officer != "Gram Panchyat Nodal Officer").OrderByDescending(x => x.id).ToList();//total list

                    }
                }
                else
                {

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        ddetails = ABE.obj_vw_current_events.Where(x => x.level_event == State && x.Nodal_officer != "Gram Panchyat Nodal Officer" && x.district == Dist && x.block == Block && x.yearname == year && x.monthname == month).OrderByDescending(x => x.id).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = ABE.obj_vw_current_events.Where(x => x.level_event == State && x.Nodal_officer != "Gram Panchyat Nodal Officer" && x.district == Dist && x.block == Block && x.yearname == year).OrderByDescending(x => x.id).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        ddetails = ABE.obj_vw_current_events.Where(x => x.level_event == State && x.Nodal_officer != "Gram Panchyat Nodal Officer" && x.district == Dist && x.block == Block).OrderByDescending(x => x.id).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        ddetails = ABE.obj_vw_current_events.Where(x => x.level_event == State && x.Nodal_officer != "Gram Panchyat Nodal Officer" && x.district == Dist && x.yearname == year && x.monthname == month).OrderByDescending(x => x.id).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = ABE.obj_vw_current_events.Where(x => x.level_event == State && x.Nodal_officer != "Gram Panchyat Nodal Officer" && x.district == Dist && x.yearname == year).OrderByDescending(x => x.id).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        ddetails = ABE.obj_vw_current_events.Where(x => x.level_event == State && x.Nodal_officer != "Gram Panchyat Nodal Officer" && x.district == Dist).OrderByDescending(x => x.id).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        ddetails = ABE.obj_vw_current_events.Where(x => x.level_event == State && x.Nodal_officer != "Gram Panchyat Nodal Officer" && x.yearname == year && x.monthname == month).OrderByDescending(x => x.id).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = ABE.obj_vw_current_events.Where(x => x.level_event == State && x.Nodal_officer != "Gram Panchyat Nodal Officer" && x.yearname == year).OrderByDescending(x => x.id).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        ddetails = ABE.obj_vw_current_events.Where(x => x.level_event == State && x.Nodal_officer != "Gram Panchyat Nodal Officer").OrderByDescending(x => x.id).ToList();//total list

                    }

                }
                var jsonresults = Json(ddetails, JsonRequestBehavior.AllowGet);
                jsonresults.MaxJsonLength = int.MaxValue;
                return jsonresults;
            }
            catch (Exception Ex)
            {
                return Json("Error", JsonRequestBehavior.AllowGet);
            }
            //return Json("NoData", JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult Get_Training_Working_Info_fetch(string state, string dist, string block, string event_name, string year, string month)  //abhi new
        {
            try
            {
                List<vw_current_events> current = new List<vw_current_events>();
               
                var State = state;
                var Dist = dist;
                var Block = block;
                if (Dist == "undefined")
                {
                    Dist = "";
                }
                if (Block == "undefined")
                {
                    Block = "";
                }
                if (State == "NPMU (Delhi)")
                {
                    if (event_name == "All")
                    {
                        if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            current = ABE.obj_vw_current_events.Where(x => x.level_event == State && x.yearname == year && x.monthname == month).OrderByDescending(x => x.id).ToList();

                        }
                        else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
                        {
                            current = ABE.obj_vw_current_events.Where(x => x.level_event == State && x.yearname == year).OrderByDescending(x => x.id).ToList();
                        }
                        else if (State != "0" && State != "" && State != null)
                        {
                            current = ABE.obj_vw_current_events.Where(x => x.level_event == State).OrderByDescending(x => x.id).ToList();
                        }
                    }
                    else
                    {
                        if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            current = ABE.obj_vw_current_events.Where(x => x.type_of_event == event_name && x.type_of_event == event_name && x.level_event == State && x.yearname == year && x.monthname == month).OrderByDescending(x => x.id).ToList();
                        }
                        else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
                        {
                            current = ABE.obj_vw_current_events.Where(x => x.type_of_event == event_name && x.level_event == State && x.yearname == year).OrderByDescending(x => x.id).ToList();
                        }
                        else if (State != "0" && State != "" && State != null)
                        {
                            current = ABE.obj_vw_current_events.Where(x => x.type_of_event == event_name && x.level_event == State).OrderByDescending(x => x.id).ToList();
                        }
                    }
                }
                if (State != "All" && State != "NPMU (Delhi)")
                {
                    if (event_name == "All")
                    {
                        if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            current = ABE.obj_vw_current_events.Where(x => x.level_event == State && x.district == Dist && x.block == Block && x.yearname == year && x.monthname == month && x.Nodal_officer == "Block Level Nodal Officer").OrderByDescending(x => x.id).ToList();
                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
                        {
                            current = ABE.obj_vw_current_events.Where(x => x.level_event == State && x.district == Dist && x.block == Block && x.yearname == year && x.Nodal_officer == "Block Level Nodal Officer").OrderByDescending(x => x.id).ToList();
                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                        {
                            current = ABE.obj_vw_current_events.Where(x => x.level_event == State && x.district == Dist && x.block == Block && x.Nodal_officer == "Block Level Nodal Officer").OrderByDescending(x => x.id).ToList();
                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            current = ABE.obj_vw_current_events.Where(x => x.level_event == State && x.district == Dist && x.yearname == year && x.monthname == month && x.Nodal_officer == "District Level Nodal Officer").OrderByDescending(x => x.id).ToList();                            
                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
                        {
                            current = ABE.obj_vw_current_events.Where(x => x.level_event == State && x.district == Dist && x.yearname == year && x.Nodal_officer == "District Level Nodal Officer").OrderByDescending(x => x.id).ToList();
                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                        {
                            current = ABE.obj_vw_current_events.Where(x => x.level_event == State && x.district == Dist && x.Nodal_officer == "District Level Nodal Officer").OrderByDescending(x => x.id).ToList();
                        }
                        else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            current = ABE.obj_vw_current_events.Where(x => x.level_event == State && x.yearname == year && x.monthname == month && x.Nodal_officer == "State Level Nodal Officer").OrderByDescending(x => x.id).ToList();
                        }
                        else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
                        {
                            current = ABE.obj_vw_current_events.Where(x => x.level_event == State && x.yearname == year && x.Nodal_officer == "State Level Nodal Officer").OrderByDescending(x => x.id).ToList();
                        }
                        else if (State != "0" && State != "" && State != null)
                        {
                            current = ABE.obj_vw_current_events.Where(x => x.level_event == State && x.Nodal_officer == "State Level Nodal Officer").OrderByDescending(x => x.id).ToList();
                        }
                    }
                    else
                    {
                        if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            current = ABE.obj_vw_current_events.Where(x => x.type_of_event == event_name && x.level_event == State && x.district == Dist && x.block == Block && x.yearname == year && x.monthname == month && x.Nodal_officer == "Block Level Nodal Officer").OrderByDescending(x => x.id).ToList();
                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
                        {
                            current = ABE.obj_vw_current_events.Where(x => x.type_of_event == event_name && x.level_event == State && x.district == Dist && x.block == Block && x.yearname == year && x.Nodal_officer == "Block Level Nodal Officer").OrderByDescending(x => x.id).ToList();
                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                        {
                            current = ABE.obj_vw_current_events.Where(x => x.type_of_event == event_name && x.level_event == State && x.district == Dist && x.block == Block && x.Nodal_officer == "Block Level Nodal Officer").OrderByDescending(x => x.id).ToList();
                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            current = ABE.obj_vw_current_events.Where(x => x.type_of_event == event_name && x.level_event == State && x.district == Dist && x.yearname == year && x.monthname == month && x.Nodal_officer == "District Level Nodal Officer").OrderByDescending(x => x.id).ToList();
                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
                        {
                            current = ABE.obj_vw_current_events.Where(x => x.type_of_event == event_name && x.level_event == State && x.district == Dist && x.yearname == year && x.Nodal_officer == "District Level Nodal Officer").OrderByDescending(x => x.id).ToList();
                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                        {
                            current = ABE.obj_vw_current_events.Where(x => x.type_of_event == event_name && x.level_event == State && x.district == Dist && x.Nodal_officer == "District Level Nodal Officer").OrderByDescending(x => x.id).ToList();
                        }
                        else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            current = ABE.obj_vw_current_events.Where(x => x.type_of_event == event_name && x.level_event == State && x.yearname == year && x.monthname == month && x.Nodal_officer == "State Level Nodal Officer").OrderByDescending(x => x.id).ToList();
                        }
                        else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
                        {
                            current = ABE.obj_vw_current_events.Where(x => x.type_of_event == event_name && x.level_event == State && x.yearname == year && x.Nodal_officer == "State Level Nodal Officer").OrderByDescending(x => x.id).ToList();
                        }
                        else if (State != "0" && State != "" && State != null)
                        {
                            current = ABE.obj_vw_current_events.Where(x => x.type_of_event == event_name && x.level_event == State && x.Nodal_officer == "State Level Nodal Officer").OrderByDescending(x => x.id).ToList();
                        }
                    }
                }

                List<vw_current_events> ddetails = new List<vw_current_events>();//total list


                var date = DateTime.Now.ToString("yyyy-MM-dd");
                DateTime dd = Convert.ToDateTime(date);
                foreach (var item in current)
                {
                    var todate = item.to_date;
                    DateTime tt = Convert.ToDateTime(todate);
                    if (tt <= dd)
                    {
                        ddetails.Add(item);
                    }

                }

                //int pos = 0;

                int count = ddetails.ToList().Count;
                for (int i = 0; i < count; i++)
                {
                    count = ddetails.ToList().Count;
                    if (count < 0)
                    {
                        string Test = ddetails[i].p_training_name;
                        //  pos = ddetails.
                        bool IsValid = Event_Registration_Date_Checking_All(Test);
                        if (!IsValid)
                        {
                            ddetails.RemoveAt(i);
                            i--;
                        }
                    }
                    else
                    {

                    }
                }
                var jsonresult = Json(ddetails, JsonRequestBehavior.AllowGet);
                jsonresult.MaxJsonLength = int.MaxValue;
                return jsonresult;

                //return Json(ddetails, JsonRequestBehavior.AllowGet);
            }
            catch (Exception Ex)
            {
                return Json("Error", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult updatetraining(string updatetraining_string)
        {

            JavaScriptSerializer js = new JavaScriptSerializer();
            var result = js.Deserialize<abhy_training_workshops>(updatetraining_string);

            var Details = ABE.obj_abhy_training_workshops.Where(x => x.id == result.id).SingleOrDefault();


            abhy_training_workshops obj = new abhy_training_workshops();
            Details.p_training_name = result.p_training_name;
            Details.from_date = result.from_date;
            Details.to_date = result.to_date;
            Details.training_start = result.training_start;
            Details.training_end = result.training_end;
            if (result.state_name == null)
            {
                Details.state_name = result.other_state_name;
            }
            else
            {
                Details.state_name = result.state_name;
            }
            if (result.state_name != null && result.state_name != "0" && result.state_name != "")
            {
                Details.state_name = result.state_name;

                if (result.state_name == "Other")
                {
                    if (result.other_state_name != "")
                    {
                        Details.other_state_name = result.other_state_name;
                    }
                    else
                    {
                        return Json("Please Enter Other State Value");
                    }

                }

                Details.other_state_name = result.other_state_name;

            }



            Details.training_status = result.training_status;
            ABE.Entry(Details).State = EntityState.Modified;
            ABE.SaveChanges();
            return Json("Updated Successfully");



        }

        [HttpPost]
        public ActionResult deletetraining(string updatetraining_string)
        {

            JavaScriptSerializer js = new JavaScriptSerializer();
            var result = js.Deserialize<abhy_training_workshops>(updatetraining_string);

            if (result.id != 0)
            {
                var ARID = Convert.ToInt32(result.id);
                var Data1 = ABE.obj_abhy_training_workshops.Where(x => x.id == ARID).FirstOrDefault();
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

        public string randomCodeGeneration()
        {
            string builder = "";
            Random random = new Random();
            string ch = null;
            for (int i = 0; i < 3; i++)
            {
                ch = (Convert.ToInt32(Math.Floor(26 * random.NextDouble() + 65))).ToString();
                builder += ch;
            }
            return builder;
        }
        //new registration traing and workshops
        [HttpGet]
        public ActionResult Save_NewRegs_Training_Info()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Save_NewRegs(abhy_training_newregs result)     //7/12/22
        {
            JavaScriptSerializer js = new JavaScriptSerializer();
            //var result = js.Deserialize<abhy_training_newregs>(Data);
            abhy_training_newregs data1 = new abhy_training_newregs();
            data1.p_name = result.p_name;
            if (Session["REGCaptcha"] != null)
            {
                if (Session["REGCaptcha"].ToString() != result.clientcaptcha)
                {
                    return Json("Captcha is Not Matched");
                }
            }
            else
            {
                return Json("Your Captcha is Expired");
            }

            data1.p_gender = result.p_gender;
            data1.p_age = result.p_age;
            data1.p_occupation = result.p_occupation;
            data1.p_qual = result.p_qual;
            data1.p_phoneno = result.p_phoneno;
            data1.p_emailid = result.p_emailid;
            data1.p_address = result.p_address;
            data1.p_state_name = result.p_state_name;
            data1.parti_state = result.parti_state;
            data1.p_district_name = result.p_district_name;
            data1.p_block_name = result.p_block_name;
            data1.p_other_state_name = result.p_other_state_name;
            data1.p_training_name = result.p_training_name;
            data1.to_date = result.to_date;
            data1.from_date = result.from_date;
            data1.year = result.year;
            data1.month = result.month;
            data1.nodal = result.nodal;
            data1.unic_key = result.unic_key;
            data1.typeofevent = result.typeofevent;
            data1.entry_date = DateTime.Now.ToString("yyyy-MM-dd");
            data1.currentdate = result.currentdate;
            //string Code = randomCodeGeneration();
            Random random = new Random();
            string Code = DateTime.Now.Ticks.ToString();
            string Str = "ET" + Code;

            data1.registration_no = Str;

            ABE.obj_abhy_training_newregs.Add(data1);
            ABE.SaveChanges();

            var contemail = result.p_emailid.Trim();


            //  string mobile,  string feedback,

            string body = "Dear Sir/Madam," + "\r\n" + "\n" + "Participant Name:" + result.p_name + "," + "\r\n Occupation:" + result.p_occupation + "," + "\r\n Address:" + result.p_address + "," + "\r\n  EmailId:" + result.p_emailid + "," + "\r\n Mobile Number:" + result.p_phoneno + "," + "\r\n Registration No:" + Str + "," + "\r\n\r\n\r\n Thank You";

            string results = WebConstents.SendEmailSMTP(contemail, "", "New Training Registration Enquiry", body.ToString(), "");

            var Str1 = "Training Registration No:" + Str + ", Saved Successfully Your Application";

            return Json(Str1);
        }
        //[HttpPost]
        //public ActionResult Save_NewRegs_Training_Info(string Data)
        //{
        //    JavaScriptSerializer js = new JavaScriptSerializer();
        //    var result = js.Deserialize<abhy_training_newregs>(Data);
        //    abhy_training_newregs data1 = new abhy_training_newregs();
        //    data1.p_name = result.p_name;
        //    data1.p_gender = result.p_gender;
        //    data1.p_age = result.p_age;
        //    data1.p_occupation = result.p_occupation;
        //    data1.p_qual = result.p_qual;
        //    data1.p_phoneno = result.p_phoneno;
        //    data1.p_emailid = result.p_emailid;
        //    data1.p_address = result.p_address;
        //    data1.p_state_name = result.p_state_name;
        //    data1.p_other_state_name = result.p_other_state_name;
        //    data1.p_training_name = result.p_training_name;
        //    string Code = randomCodeGeneration();

        //    string Str = "ET" + Code;

        //    data1.registration_no = Str;

        //    ABE.obj_abhy_training_newregs.Add(data1);
        //    ABE.SaveChanges();

        //    var contemail = result.p_emailid.Trim();

        //    using (MailMessage mm = new MailMessage(".Kreate Technologies.net2019@gmail.com", contemail))
        //    {
        //        //  string mobile,  string feedback,

        //        mm.Subject = "New Training Registration Enquiry";
        //        string body = "Dear Sir/Madam," + "\r\n" + "\n" + "Participant Name:" + result.p_name + "," + "\r\n Occupation:" + result.p_occupation  + "," + "\r\n Address:" + result.p_address + "," + "\r\n  EmailId:" + result.p_emailid + "," + "\r\n Mobile Number:" + result.p_phoneno  + "," + "\r\n Registration No:" + Str + "," + "\r\n\r\n\r\n Thank You";
        //        mm.Body = body;

        //        mm.IsBodyHtml = false;
        //        using (SmtpClient smtp = new SmtpClient())
        //        {
        //            smtp.Host = "email-smtp.us-east-1.amazonaws.com";
        //            smtp.EnableSsl = true;
        //            ServicePointManager.ServerCertificateValidationCallback = delegate (object s, X509Certificate certificate, X509Chain chain, SslPolicyErrors sslPolicyErrors) { return true; };

        //            NetworkCredential networkCred = new NetworkCredential(".Kreate Technologies.net2019@gmail.com", ".Kreate Technologiespsm2019");
        //            smtp.UseDefaultCredentials = false;
        //            smtp.Credentials = new NetworkCredential("AKIA2ATOP3U7LD2CG2VQ", "BHgDPfnXySVgb2nM8OFYUXsC5Ctj51sjgtUojeAykgsR");
        //            //smtp.Credentials = NetworkCred;
        //            smtp.Port = 587;
        //            smtp.Send(mm);


        //            ModelState.Clear();

        //        }

        //    }

        //    var Str1 = "Training Registration No:" + Str + ", Saved Successfully Your Application";

        //    return Json(Str1);
        //}



        [HttpGet]
        public ActionResult Get_Newregs_Training_Info()
        {
            try
            {
                List<abhy_training_newregs> ddetails = ABE.obj_abhy_training_newregs.ToList();//total list

                var jsonResult = Json(ddetails, JsonRequestBehavior.AllowGet);
                jsonResult.MaxJsonLength = int.MaxValue;
                return jsonResult;
            }
            catch (Exception Ex)
            {
                return Json("Error", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult updatenewregs(string updatenewregs_string)
        {

            JavaScriptSerializer js = new JavaScriptSerializer();
            var result = js.Deserialize<abhy_training_newregs>(updatenewregs_string);

            var Details = ABE.obj_abhy_training_newregs.Where(x => x.id == result.id).SingleOrDefault();


            abhy_training_newregs obj = new abhy_training_newregs();
            Details.p_name = result.p_name;
            Details.p_gender = result.p_gender;
            Details.p_age = result.p_age;
            Details.p_occupation = result.p_occupation;
            Details.p_qual = result.p_qual;
            Details.p_phoneno = result.p_phoneno;
            Details.p_emailid = result.p_emailid;
            Details.p_address = result.p_address;
            Details.p_training_name = result.p_training_name;

            if (Details.p_state_name == "Other")
            {
                Details.p_other_state_name = result.p_state_name;
            }
            else
            {
                Details.p_state_name = result.p_state_name;
            }


            ABE.Entry(Details).State = EntityState.Modified;
            ABE.SaveChanges();
            return Json("Updated Successfully");



        }

        [HttpPost]
        public ActionResult deletenewregs(string updatenewregs_string)
        {

            JavaScriptSerializer js = new JavaScriptSerializer();
            var result = js.Deserialize<abhy_training_newregs>(updatenewregs_string);

            if (result.id != 0)
            {
                var ARID = Convert.ToInt32(result.id);
                var Data1 = ABE.obj_abhy_training_newregs.Where(x => x.id == ARID).FirstOrDefault();
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


        //Environment Safegaurd Tool
        [HttpGet]
        public ActionResult Environment_Safe_Tool_GetInfo(string safeguard_tool)
        {
            try
            {
                List<abhy_safeguard_tool_download> ddetails = ABE.obj_abhy_safeguard_tool_download.Where(x => x.safeguard_tool == safeguard_tool).ToList();//total list                
                return Json(ddetails, JsonRequestBehavior.AllowGet);
            }
            catch (Exception Ex)
            {
                return Json("Error", JsonRequestBehavior.AllowGet);
            }
        }


        [HttpPost]
        public ActionResult Save_Environment_Info(HttpPostedFileBase files, string state_name, string district_name, string block_name, string gpname, string finacial_year, string latitude, string longitude, string safeguard_waterstructure_type, string safeguard_tool, string safeguard_when, string safeguard_download, string safeguard_compliance, string resused_water_irri)
        {
            if (Session["UserId"] != null)

            {
                var obj = new abhy_safeguard_tool();

                if (files != null)
                {
                    if (files.FileName != null)
                    {
                        Malicious_File_Upload_Restriction obj_Validate = new Malicious_File_Upload_Restriction();
                        string allowed_file_format = "pdf";
                        bool flag = obj_Validate.CheckValidFile(files, allowed_file_format);
                        if (flag == false)
                        {
                            return Json("Your Upload file has Not valid File, Please Upload proper file", JsonRequestBehavior.AllowGet);
                        }
                        String FileExt = Path.GetExtension(files.FileName).ToUpper();
                        string acronym = safeguard_tool.Substring(safeguard_tool.LastIndexOf("(") + 1).Replace(")", "");

                        string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                        string fname = $"{gpname}_{DateTime.Now.ToString("yyyyMMddHHmmssfff")}_{acronym}{FileExt}";//67876760abc-5665.pdf
                        string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");
                        path = path + fname;
                        string[] count = files.FileName.Split('.');
                        if (count.Length != 2)
                        {
                            return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                        }
                        files.SaveAs(path);
                       
                        obj.safeguard_filepath = $"/Ataljalimages/{fname}";// "/Ataljalimages/" + state_name + "_" + district_name + "_" + block_name + "_" + gpname + "_" + finacial_year + "_" + files.FileName;
                        obj.safeguard_filename = fname;// files.FileName;

                    }
                }
                obj.state_name = state_name;
                obj.district_name = district_name;
                obj.block_name = block_name;
                if (gpname != "0" && gpname != "" && gpname != null)
                {
                    obj.gpname = gpname;
                }
                else
                {
                    return Json("Please Select Grampanchayat Name");
                }
                if (finacial_year != "0" && finacial_year != "" && finacial_year != null)
                {
                    obj.finacial_year = finacial_year;
                }
                else
                {
                    return Json("Please Select Financial Year");
                }
                if (finacial_year != "0" && finacial_year != "" && finacial_year != null)
                {
                    obj.finacial_year = finacial_year;
                }
                else
                {
                    return Json("Please Select Financial Year");
                }


                if (latitude != "" && latitude != null)
                {
                    obj.latitude = latitude;
                }
                else
                {
                    return Json("Please Enter Latitude");
                }

                if (longitude != "" && longitude != null)
                {
                    obj.longitude = longitude;
                }
                else
                {
                    return Json("Please Enter Longitude");
                }
                obj.resused_water_irri = resused_water_irri;
                obj.safeguard_waterstructure_type = safeguard_waterstructure_type;
                if (safeguard_tool != "0" && safeguard_tool != "" && safeguard_tool != null)
                {
                    obj.safeguard_tool = safeguard_tool;
                }
                else
                {
                    return Json("Please Select Tool");
                }
                if (safeguard_when != "0" && safeguard_when != "" && safeguard_when != null)
                {
                    obj.safeguard_when = safeguard_when;
                }
                else
                {
                    return Json("Please Select Tool , When is not Getting");
                }
                if (safeguard_download != "0" && safeguard_download != "" && safeguard_download != null)
                {
                    obj.safeguard_download = safeguard_download;
                }
                else
                {
                    return Json("Please Select Tool , Download is not Getting");
                }


                if (safeguard_compliance != "0" && safeguard_compliance != "" && safeguard_compliance != null)
                {
                    obj.safeguard_compliance = safeguard_compliance;
                }
                else
                {
                    return Json("Please Select ComplianceYes/No");
                }
                obj.userid = Convert.ToInt32(Session["UserId"]);
                ABE.obj_abhy_safeguard_tool.Add(obj);
                ABE.SaveChanges();
                return Json("Saved Successfully", JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpGet]

        public ActionResult Get_Environment_Info(string StateName)
        {

            try
            {
                List<abhy_safeguard_tool> ddetails = new List<abhy_safeguard_tool>();
                //var district_name = "";
                //var block_name = "";
                //var gpname = "";
                var state_name = StateName;
                if (state_name == "" || state_name == "0")
                {
                    state_name = Session["gstate"].ToString();
                }

                //if (Session["gdist"] != null)
                //{
                //    district_name = Session["gdist"].ToString();
                //}
                //if (Session["gblock"] != null)
                //{
                //    block_name = Session["gblock"].ToString();
                //}
                //if (Session["ggram"] != null)
                //{
                //    gpname = Session["ggram"].ToString();
                //}


                //if (state_name != "" && state_name != null && district_name != "" && district_name != null && block_name != "" && block_name != null && gpname != "" && gpname != null)
                //{

                //    ddetails = ABE.obj_abhy_safeguard_tool.Where(x => x.state_name == state_name && x.district_name == district_name && x.block_name == block_name && x.gpname == gpname).ToList();//total list                
                //}
                //else if (state_name != "" && state_name != null && district_name != "" && district_name != null && block_name != "" && block_name != null)
                //{
                //    ddetails = ABE.obj_abhy_safeguard_tool.Where(x => x.state_name == state_name && x.district_name == district_name && x.block_name == block_name).ToList();//total list
                //}
                //else if (state_name != "" && state_name != null && district_name != "" && district_name != null)
                //{
                //    ddetails = ABE.obj_abhy_safeguard_tool.Where(x => x.state_name == state_name && x.district_name == district_name).ToList();//total list
                //}
                if (state_name == "ALL")
                {
                    ddetails = ABE.obj_abhy_safeguard_tool.ToList();
                }
                else if (state_name != "" && state_name != null)
                {
                    ddetails = ABE.obj_abhy_safeguard_tool.Where(x => x.state_name == state_name).ToList();//total list
                }


                var jsonResult = Json(ddetails, JsonRequestBehavior.AllowGet);
                jsonResult.MaxJsonLength = int.MaxValue;
                return jsonResult;
            }
            catch (Exception Ex)
            {
                return Json("Error", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult Get_Environment_Info_1(string Data)
        {

            try
            {
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<abhy_safeguard_tool>(Data);
                List<abhy_safeguard_tool> ddetails = new List<abhy_safeguard_tool>();
                var state_name = result.state_name;

                if (state_name != "" && state_name != null)
                {
                    if (state_name != "ALL")
                    {
                        ddetails = ABE.obj_abhy_safeguard_tool.Where(x => x.state_name == state_name).ToList();//total list
                    }
                    else
                    {
                        ddetails = ABE.obj_abhy_safeguard_tool.ToList();//total list
                    }

                }

                return Json(ddetails, JsonRequestBehavior.AllowGet);
            }
            catch (Exception Ex)
            {
                return Json("Error", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult updatesafeguard(string updatesafeguard_string)
        {

            JavaScriptSerializer js = new JavaScriptSerializer();
            var result = js.Deserialize<abhy_safeguard_tool>(updatesafeguard_string);

            var Details1 = ABE.obj_abhy_safeguard_tool.Where(x => x.id == result.id).SingleOrDefault();


            abhy_safeguard_tool obj = new abhy_safeguard_tool();
            Details1.state_name = result.state_name;
            Details1.district_name = result.district_name;
            Details1.block_name = result.block_name;
            Details1.gpname = result.gpname;
            Details1.latitude = result.latitude;
            Details1.longitude = result.longitude;
            Details1.resused_water_irri = result.resused_water_irri;
            Details1.finacial_year = result.finacial_year;
            Details1.safeguard_waterstructure_type = result.safeguard_waterstructure_type;
            Details1.safeguard_tool = result.safeguard_tool;
            // Details1.safeguard_when = result.safeguard_when;
            Details1.safeguard_download = result.safeguard_download;
            Details1.safeguard_compliance = result.safeguard_compliance;
            ABE.Entry(Details1).State = EntityState.Modified;
            ABE.SaveChanges();
            return Json("Updated Successfully");



        }

        public ActionResult excel(string state1)
        {

            List<abhy_safeguard_tool> ddetails = new List<abhy_safeguard_tool>();

            var officer = Session["Officer"].ToString();
            var state = state1;

            if (officer == "Admin" || officer == "National Level Nodal Officer")
            {
                if (state == "ALL")
                {
                    ddetails = ABE.obj_abhy_safeguard_tool.ToList();
                }
                else if (state != "" && state != null)
                {
                    ddetails = ABE.obj_abhy_safeguard_tool.Where(x => x.state_name == state).ToList();
                }

            }
            else
            {
                var district_name = "";
                var block_name = "";
                var gpname = "";
                var state_name = "";
                if (state_name == "" || state_name == "0")
                {
                    state_name = Session["gstate"].ToString();
                }

                if (Session["gdist"] != null)
                {
                    district_name = Session["gdist"].ToString();
                }
                if (Session["gblock"] != null)
                {
                    block_name = Session["gblock"].ToString();
                }
                if (Session["ggram"] != null)
                {
                    gpname = Session["ggram"].ToString();
                }

                if (state_name != "" && state_name != null && district_name != "" && district_name != null && block_name != "" && block_name != null && gpname != "" && gpname != null)
                {

                    ddetails = ABE.obj_abhy_safeguard_tool.Where(x => x.state_name == state_name && x.district_name == district_name && x.block_name == block_name && x.gpname == gpname).ToList();//total list                
                }
                else if (state_name != "" && state_name != null && district_name != "" && district_name != null && block_name != "" && block_name != null)
                {
                    ddetails = ABE.obj_abhy_safeguard_tool.Where(x => x.state_name == state_name && x.district_name == district_name && x.block_name == block_name).ToList();//total list
                }
                else if (state_name != "" && state_name != null && district_name != "" && district_name != null)
                {
                    ddetails = ABE.obj_abhy_safeguard_tool.Where(x => x.state_name == state_name && x.district_name == district_name).ToList();//total list
                }
                else if (state_name != "" && state_name != null)
                {
                    ddetails = ABE.obj_abhy_safeguard_tool.Where(x => x.state_name == state_name).ToList();//total list
                }

            }



            using (var workbook = new XLWorkbook())
            {

                var worksheet = workbook.Worksheets.Add("Geo Tagging");
                var currentRow = 1;
                worksheet.Cell(currentRow, 1).Value = "State";
                worksheet.Cell(currentRow, 2).Value = "District";
                worksheet.Cell(currentRow, 3).Value = "Block";
                worksheet.Cell(currentRow, 4).Value = "Gram Panchayat";
                worksheet.Cell(currentRow, 5).Value = "Latitude";
                worksheet.Cell(currentRow, 6).Value = "Longitude";
                worksheet.Cell(currentRow, 7).Value = "Tool";
                worksheet.Cell(currentRow, 8).Value = "Download";
                worksheet.Cell(currentRow, 9).Value = "ComplianceYes/No";



                if (ddetails.Count != 0)
                {


                    foreach (var user in ddetails)
                    {
                        currentRow++;
                        worksheet.Cell(currentRow, 1).Value = user.state_name;
                        worksheet.Cell(currentRow, 2).Value = user.district_name;
                        worksheet.Cell(currentRow, 3).Value = user.block_name;
                        worksheet.Cell(currentRow, 4).Value = user.gpname;
                        worksheet.Cell(currentRow, 5).Value = user.latitude;
                        worksheet.Cell(currentRow, 6).Value = user.longitude;
                        worksheet.Cell(currentRow, 7).Value = user.safeguard_tool;
                        worksheet.Cell(currentRow, 8).Value = user.safeguard_filename;
                        worksheet.Cell(currentRow, 9).Value = user.safeguard_compliance;


                    }
                }
                else
                {
                    currentRow++;
                    worksheet.Cell(currentRow, 1).Value = "";
                    worksheet.Cell(currentRow, 2).Value = "";
                    worksheet.Cell(currentRow, 3).Value = "";
                    worksheet.Cell(currentRow, 4).Value = "No Data";
                    worksheet.Cell(currentRow, 5).Value = "";
                    worksheet.Cell(currentRow, 6).Value = "";
                    worksheet.Cell(currentRow, 7).Value = "";
                    worksheet.Cell(currentRow, 8).Value = "";
                    worksheet.Cell(currentRow, 9).Value = "";






                }
                using (var stream = new MemoryStream())
                {
                    workbook.SaveAs(stream);
                    var content = stream.ToArray();

                    return File(
                        content,
                        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                        "ENVIRONMENT AND SOCIAL SAFEGUARDS & MONITORING TOOL.xlsx");
                }
            }
        }


        [HttpPost]
        public ActionResult deletesafegaurd(string updatesafeguard_string)
        {

            JavaScriptSerializer js = new JavaScriptSerializer();
            var result = js.Deserialize<abhy_safeguard_tool>(updatesafeguard_string);

            if (result.id != 0)
            {
                var ARID = Convert.ToInt32(result.id);
                var Data1 = ABE.obj_abhy_safeguard_tool.Where(x => x.id == ARID).FirstOrDefault();
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

        [HttpPost]
        public ActionResult State_SessionInfo_1(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_socialmgt_gramdb>(Data);
                    if (Session["Officer"] != null && Session["Officer"].ToString() == "Admin")
                    {
                        var Statename = "Admin";
                        var Str = Statename;
                        return Json(Str, JsonRequestBehavior.AllowGet);

                    }
                    else if (Session["Officer"] != null && Session["Officer"].ToString() == "National Level Nodal Officer")
                    {
                        var Statename = "Admin";
                        var Str = Statename;
                        return Json(Str, JsonRequestBehavior.AllowGet);

                    }
                    else if (Session["Officer"] != null && Session["Officer"].ToString() == "State Level Nodal Officer")
                    {
                        var Officer = "State Level Nodal Officer";
                        var Statename = Session["gstate"].ToString();
                        var Str = Officer + ',' + Statename;
                        return Json(Str, JsonRequestBehavior.AllowGet);

                    }
                    else if (Session["Officer"] != null && Session["Officer"].ToString() == "District Level Nodal Officer")
                    {
                        var Officer = "District Level Nodal Officer";
                        var Statename = Session["gstate"].ToString();
                        var Dist = Session["gdist"].ToString();
                        var Str = Officer + ',' + Statename + ',' + Dist;
                        return Json(Str, JsonRequestBehavior.AllowGet);

                    }
                    else if (Session["Officer"] != null && Session["Officer"].ToString() == "Block Level Nodal Officer")
                    {
                        var Officer = "Block Level Nodal Officer";
                        var Statename = Session["gstate"].ToString();
                        var Dist = Session["gdist"].ToString();
                        var Block = Session["gblock"].ToString();
                        var Str = Officer + ',' + Statename + ',' + Dist + ',' + Block;
                        return Json(Str, JsonRequestBehavior.AllowGet);

                    }
                    else if (Session["Officer"] != null && Session["Officer"].ToString() == "Gram Panchyat Nodal Officer")
                    {
                        var Officer = "Gram Panchyat Nodal Officer";
                        var Statename = Session["gstate"].ToString();
                        var Dist = Session["gdist"].ToString();
                        var Block = Session["gblock"].ToString();
                        var Gram = Session["ggram"].ToString();
                        var Str = Officer + ',' + Statename + ',' + Dist + ',' + Block + ',' + Gram;
                        return Json(Str, JsonRequestBehavior.AllowGet);

                    }

                    else
                    {
                        return Json("Admin", JsonRequestBehavior.AllowGet);

                    }

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
        [HttpPost]
        public JsonResult CustomCaptcha_training(string clientCaptcha)
        {
            System.Threading.Thread.Sleep(200);
            //string clientCaptcha = form["clientCaptcha"];
            string serverCaptcha = "";
            if (Session["text"] != null)
            {
                serverCaptcha = Session["text"].ToString();
            }
            if (!clientCaptcha.Equals(serverCaptcha))
            {
                //ViewBag.ShowCAPTCHA = serverCaptcha;
                TempData["captch"] = "notmatched";
                return Json(0);
            }
            else
            {
                return Json("Save_FeedBackInfo");
            }

        }
        // End Captcha code

        [HttpPost]
        public ActionResult Event_Registration_Date_Checking(string Data)   //abhi
        {
            JavaScriptSerializer js = new JavaScriptSerializer();
            var result = js.Deserialize<current_events>(Data);

            var Data11 = ABE.obj_current_events.Where(x => x.p_training_name == result.p_training_name).ToList();
            if (Data11.Count != 0)
            {
                DateTime Reg_closed_date = ParseDate(Data11[0].reg_close_date);

                if (DateTime.Today <= Reg_closed_date)
                {
                    return Json("Matched", JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("Matched", JsonRequestBehavior.AllowGet);
                    //return Json("Event Registration Date is Already Closed", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("NoData", JsonRequestBehavior.AllowGet);
            }


        }

        public bool Event_Registration_Date_Checking_All(string Data)
        {
            var Data11 = ABE.obj_current_events.Where(x => x.p_training_name == Data).ToList();
            if (Data11.Count != 0)
            {

                if (Data11[0].reg_close_date != null)
                {
                    DateTime Reg_closed_date = ParseDate(Data11[0].reg_close_date);  //abhi

                    if (DateTime.Today <= Reg_closed_date)
                    {
                        return true;
                        //return Json("Matched", JsonRequestBehavior.AllowGet);
                    }
                    else
                    {
                        return false;
                        //return Json("Event Registration Date is Already Closed", JsonRequestBehavior.AllowGet);
                    }
                }
                else
                {
                    return false;
                }
            }
            else
            {
                //return Json("NoData", JsonRequestBehavior.AllowGet);
                return false;
            }

        }

        [HttpPost]
        public ActionResult Bind_Event(String STATE)   //latest abhi
        {
            //try
            //{
            List<string> events = new List<string>();

            if (STATE == "Other")
            {
                var details = ABE.obj_current_events.ToList();
                foreach (var item in details)
                {
                    DateTime Reg_date = ParseDate(item.reg_close_date);
                    if (Reg_date >= DateTime.Today)
                    {


                        events.Add(item.p_training_name);

                    }
                }
                return Json(events, JsonRequestBehavior.AllowGet);
            }


            var ddetails = ABE.obj_current_events.Where(x => x.level_event == STATE).ToList();

            //if (ddetails[0] != null)
            //{

            if (STATE != "" && STATE != null)
            {
                if (STATE != "Other")
                {
                    foreach (var item in ddetails)
                    {
                        DateTime Reg_date = ParseDate(item.reg_close_date);
                        if (Reg_date >= DateTime.Today)
                        {


                            events.Add(item.p_training_name);

                        }
                        //else
                        //{
                        //    ABE.Entry(item).State = EntityState.Deleted;

                        //    //ddetails.RemoveAt(item);
                        //}

                    }

                    return Json(events, JsonRequestBehavior.AllowGet);

                    //return Json("Event Closed", JsonRequestBehavior.AllowGet);


                }

                //ddetails = ABE.obj_current_events.ToList();    //total list
                //else
                //{
                //    foreach (var item in ddetails)
                //    {
                //        DateTime Reg_date = ParseDate(item.reg_close_date);
                //        if (Reg_date >= DateTime.Today)
                //        {
                //            events.Add(item.p_training_name);

                //        }

                //    }

                //    return Json(events, JsonRequestBehavior.AllowGet);

                //    //return Json("Event Closed", JsonRequestBehavior.AllowGet);
                //}


            }
            return Json("NO Events Registered", JsonRequestBehavior.AllowGet);


            //}
            //return Json("NO Events", JsonRequestBehavior.AllowGet);
            //}
            //catch (Exception Ex)
            //{
            //    return Json("Error", JsonRequestBehavior.AllowGet);
            //}
        }

        [HttpPost]
        public ActionResult admin_Training_Workshop1(abhy_training_workshops Data)
        {
            var i = 0;
            abhy_training_workshops data1 = new abhy_training_workshops();
            if (Data.training_status != "" && Data.training_status != null)
            {
                data1.training_status = Data.training_status;
            }
            else
            {
                i = 1;
                Session["Training_Error"] = "Pleae Enter Status";
            }

            if (Data.p_training_name != "" && Data.p_training_name != null)
            {
                data1.p_training_name = Data.p_training_name;
            }
            else
            {
                i = 1;
                Session["Training_Error"] = "Please Enter Event/Training Name";
            }

            if (Data.from_date != "" && Data.from_date != null)
            {
                data1.from_date = Data.from_date;
            }
            else
            {
                i = 1;
                Session["Training_Error"] = "Please Enter From Date";
            }
            if (Data.to_date != "" && Data.to_date != null)
            {
                data1.to_date = Data.to_date;
            }
            else
            {
                i = 1;
                Session["Training_Error"] = "Please Enter to Date";
            }

            if (Convert.ToDateTime(Data.from_date) < Convert.ToDateTime(Data.to_date))
            {
                // data1.from_date = Data.from_date;
            }
            else
            {
                i = 1;
                Session["Training_Error"] = "Please Enter Valid Date";
            }
            if (Data.state_name != "0" && Data.state_name != "" && Data.state_name != null)
            {
                data1.state_name = Data.state_name;
                if (Data.state_name == "Other")
                {
                    if (Data.other_state_name != "" && Data.other_state_name != null)
                    {
                        data1.other_state_name = Data.other_state_name;
                    }
                    else
                    {
                        i = 1;
                        Session["Training_Error"] = "Please Enter Other State Name";
                    }
                }
            }
            else
            {
                i = 1;
                Session["Training_Error"] = "Please Select State Name";
            }


            if (Data.to_date != "" && Data.to_date != null)
            {
                data1.to_date = Data.to_date;
            }
            else
            {
                i = 1;
                Session["Training_Error"] = "Pleae Enter To Date";
            }

            if (Data.training_end != "" && Data.training_end != null)
            {
                data1.training_end = Data.training_end;
            }
            else
            {
                i = 1;
                Session["Training_Error"] = "Pleae Enter Registration Close Date";
            }
            if (Data.training_start != "" && Data.training_start != null)
            {
                data1.training_start = Data.training_start;
            }
            else
            {
                i = 1;
                Session["Training_Error"] = "Pleae Enter Registration Open Date";
            }

            if (i == 0)
            {

                ABE.obj_abhy_training_workshops.Add(data1);
                ABE.SaveChanges();
                Session["Training_Error"] = "Saved Successfully";
            }
            return RedirectToAction("admin_Training_Workshop", "Vendors");
        }

        [HttpPost]
        public ActionResult admin_Training_Workshop11(abhy_training_workshops Data)
        {
            var i = 0;
            abhy_training_workshops data1 = new abhy_training_workshops();

            if (Data.p_training_name == "" || Data.p_training_name == null)
            {

                return View();
            }
            else
            {
                i = 1;
                Session["Training_Error"] = "Please Enter Event/Training Name";
            }
            if (Data.from_date == "" || Data.from_date == null)
            {
                i = 1;
                Session["Training_Error"] = "Pleae Enter To Date";
                return View();

            }

            if (Data.to_date == "" || Data.to_date == null)
            {
                i = 1;
                Session["Training_Error"] = "Pleae Enter To Date";
                return View();
            }



            if (Convert.ToDateTime(Data.from_date) > Convert.ToDateTime(Data.to_date))
            {
                return View();
            }
            else
            {
                i = 1;
                Session["Training_Error"] = "Please Enter Valid Date";
            }
            if (Data.state_name != "0" && Data.state_name != "" && Data.state_name != null)
            {
                data1.state_name = Data.state_name;
                if (Data.state_name == "Other")
                {
                    if (Data.other_state_name == "" || Data.other_state_name == null)
                    {
                        return View();
                    }
                    else
                    {
                        i = 1;
                        Session["Training_Error"] = "Please Enter Other State Name";
                    }
                }
            }
            else
            {
                i = 1;
                Session["Training_Error"] = "Please Select State Name";
            }
            if (Data.training_status == "" || Data.training_status == null)
            {
                return View();

            }
            else
            {
                i = 1;
                Session["Training_Error"] = "Pleae Enter Status";
            }
            if (Data.training_end == "" || Data.training_end == null)
            {
                return View();

            }
            else
            {
                i = 1;
                Session["Training_Error"] = "Pleae Enter Registration Close Date";
            }
            if (Data.training_start == "" || Data.training_start == null)
            {
                return View();

            }
            else
            {
                i = 1;
                Session["Training_Error"] = "Pleae Enter Registration Open Date";
            }


            data1.p_training_name = Data.p_training_name;
            data1.from_date = Data.from_date;
            data1.to_date = Data.to_date;
            data1.other_state_name = Data.other_state_name;
            data1.state_name = Data.state_name;
            data1.training_start = Data.training_start;
            data1.training_end = Data.training_end;

            data1.training_status = Data.training_status;


            if (Data.to_date != "" && Data.to_date != null)
            {
                data1.to_date = Data.to_date;
            }
            else
            {
                i = 1;
                Session["Training_Error"] = "Pleae Enter To Date";
            }



            if (i == 0)
            {

                ABE.obj_abhy_training_workshops.Add(data1);
                ABE.SaveChanges();
                Session["Training_Error"] = "Saved Successfully";
            }
            return RedirectToAction("admin_Training_Workshop", "Vendors");
        }

    }
}
