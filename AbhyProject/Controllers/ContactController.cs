using AbhyProject.Classes;
using AbhyProject.Models;
using AbhyProject.Utility;
using ClosedXML.Excel;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Drawing;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Net.Security;
using System.Security.Cryptography;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;
using System.Windows.Media.Animation;

namespace AbhyProject.Controllers
{
    
    public class ContactController : Controller
    {
        AbhyEntity ABE = new AbhyEntity();
        AtaljalEntity AJE = new AtaljalEntity();

        // GET: Contact
        public ActionResult Index()
        {

            return View();
        }
        public ActionResult Contact_TAMC()
        {
            List<abhy_tamc> Data = ABE.objabhy_tamc.ToList();

            return View(Data);

        }
        public ActionResult Admin_feedback()
        {
            return View();
        }
        public static string RandomString(int Length)
        {
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            Random r = new Random();
            return new string(Enumerable.Repeat(chars, Length).Select(s => s[r.Next(s.Length)]).ToArray());
        }
        public static byte[] GetHash(string inputString)
        {
            HashAlgorithm algorithm = SHA256.Create();
            return algorithm.ComputeHash(Encoding.UTF8.GetBytes(inputString));

        }

        public static string GetHashString(string inputString)
        {
            StringBuilder sb = new StringBuilder();
            foreach (byte b in GetHash(inputString))
                sb.Append(b.ToString("X2"));
            return sb.ToString().ToUpper();

        }
        public DateTime ParseDate(string date)
        {
            DateTimeFormatInfo dateFormatProvider = new DateTimeFormatInfo();
            dateFormatProvider.ShortDatePattern = "MM/dd/yyyy";
            return DateTime.Parse(date, dateFormatProvider);
        }
        public string Set_Date(string date)
        {
            string[] Date112 = date.Split('/');
            var FinalDate = "";
            if (Date112.Length == 1)
            {
                string[] Date1121 = date.Split('-');
                FinalDate = Date1121[0] + "/" + Date1121[1] + "/" + Date1121[2];
            }
            else
            {
                FinalDate = Date112[0] + "/" + Date112[1] + "/" + Date112[2];
            }
            return FinalDate;
        }
        public ActionResult App_Change_password(string code)
        {
            if (code != "" && code != null)
            {
                var Data = ABE.obj_abhy_email_verification.Where(x => x.verification_code == code && x.application_type == "APP").ToList();

                if (Data.Count != 0)
                {
                    var Email = Data[0].email;

                    var Data1 = ABE.obj_abhy_email_verification.Where(x => x.email == Email && x.application_type == "APP").ToList();
                    string count = Data1.Count.ToString();

                    if (Data[0].email_count == count)
                    {
                        var contract_award_date = Set_Date(Data[0].date_today);
                        DateTime publisheddate1 = ParseDate(contract_award_date);
                        DateTime ToDay_Date = DateTime.Today;

                        string DB_Date = publisheddate1.ToString("MM/dd/yyyy");
                        string ToDay_Date1 = ToDay_Date.ToString("MM/dd/yyyy");


                        if (DB_Date == ToDay_Date1)
                        {
                            string today_time = DateTime.Now.ToString("t");

                            string MainTime;
                            string originalTime = Data[0].time_today;
                            string TODAYTIME;
                            DateTime dt;
                            DateTime DT;
                            if (DateTime.TryParse(originalTime, out dt))
                                MainTime = dt.ToString("HH:mm");

                            if (DateTime.TryParse(today_time, out DT))
                                TODAYTIME = DT.ToString("HH:mm");

                            DateTime DT3 = dt.AddMinutes(30);

                            if (dt <= DT3 && DT >= dt)
                            {
                                return View();
                            }
                            else
                            {
                                ViewBag.list = "Expired Your Mail Permission";
                                //  return RedirectToAction("WSP_GWM_HOME", "WspNew");
                            }

                        }
                        else
                        {
                            ViewBag.list = "Expired Your Mail Permission";
                            // return RedirectToAction("WSP_GWM_HOME", "WspNew");
                            // return Json("Expired Your Mail Permission", JsonRequestBehavior.AllowGet);
                        }
                    }
                    else
                    {
                        ViewBag.list = "Please Check Latest Mail, This Mail is Expired";
                        // return RedirectToAction("WSP_GWM_HOME", "WspNew");
                        //  return Json("Please Check Latest Mail, This Mail is Expired ", JsonRequestBehavior.AllowGet);
                    }


                }
                else
                {
                    ViewBag.list = "Your VerificationLink is Expired, Please Resend ForgetPassword From Ataljal App";
                }
                return View();
            }
            else
            {
                return RedirectToAction("WSP_GWM_HOME", "WspNew");
            }
        }
        public string Set_Date_Mobile(string date)
        {
            string[] Date112 = date.Split('/');
            var FinalDate = "";
            string time = DateTime.Now.ToString("h:mm:ss tt");
            if (Date112.Length == 1)
            {
                string[] Date1121 = date.Split('-');
                FinalDate = Date1121[0] + "-" + Date1121[1] + "-" + Date1121[2] + "  " + time;
            }
            else
            {
                FinalDate = Date112[0] + "-" + Date112[1] + "-" + Date112[2] + "  " + time;
            }

            return FinalDate;
        }

        public ActionResult Change_Password_Web()
        {
            if (Session["UserId"] != null)
            {
                ViewBag.RandomNumber = RandomString(6);

                return View();
            }
            else
            {

                return RedirectToAction("WSP_GWM_HOME", "WspNew");
            }
        }

        [HttpPost]
        public ActionResult Change_Password_Web(Users Data)
        {
            var Email = Data.Email;
            var Users_Info = ABE.objUsers.Where(x => x.Email == Email).ToList();
            if (Data.CheckingCode != Data.Password)
            {
                ViewBag.Error = "New Password and Confirm Password is Not Same";
                return View();
            }
            if (Session["REGCaptcha"] != null)
            {
                if (Session["REGCaptcha"].ToString() != Data.clientcaptcha)
                {

                    ViewBag.Error = "Captcha is Not Matched";
                    return View();
                }
            }
            else
            {
                ViewBag.Error = "Captcha is Expired";
                return View();
            }

            if (Users_Info.Count != 0)
            {
                if (Users_Info.Count != 1)
                {
                    for (var i = 1; i < Users_Info.Count; i++)
                    {
                        var U_Info = Users_Info[i];
                        ABE.Entry(U_Info).State = EntityState.Deleted;
                        ABE.SaveChanges();
                    }
                }


                if (Users_Info[0].Verifiedornot == "False")
                {
                    ViewBag.Error = "State Officer not Approved Your Credentials";
                    return View();
                }
                else
                {
                    var OLD_PassWord = Data.Verifiedornot;

                    var New_Password = Data.Password;

                    string random = RandomString(6);


                    // Client Side Old Password Encription

                    string old_pwd = OLD_PassWord;

                    //string old_hashtext = GetHashString(old_pwd);

                    string old_ranpwd = random + old_pwd.ToLower();
                    //Password
                    string old_encription_pew = GetHashString(old_ranpwd);
                    //Password
                    var old_xx = old_encription_pew.ToLower();

                    // DB Side Old Password Encription
                    var DB_PWD = Users_Info[0].Password;
                    // string DB_old_hashtext = GetHashString(DB_PWD);

                    string DB_old_ranpwd = random + DB_PWD.ToLower();
                    //Password
                    string DB_old_encription_pew = GetHashString(DB_old_ranpwd);
                    //Password
                    var DB_old_xx = DB_old_encription_pew.ToLower();

                    if (old_xx != DB_old_xx)
                    {
                        ViewBag.Error = "Old Password is Not Matched";
                        return View();
                    }
                    else
                    {
                        string new_pwd = New_Password;

                        //string new_hashtext = GetHashString(new_pwd);

                        // string new_ranpwd = random + new_hashtext.ToLower();
                        //Password
                        //  string new_encription_pew = GetHashString(new_ranpwd);
                        //Password
                        // var new_xx = new_encription_pew.ToLower();
                        if (DB_PWD == new_pwd)
                        {
                            ViewBag.Error = "Old Password and New Password is  Same";
                            return View();
                        }
                        else
                        {
                            Users_Info[0].Password = new_pwd;
                            ABE.Entry(Users_Info[0]).State = EntityState.Modified;
                            ABE.SaveChanges();
                            ViewBag.Error = "Password Changed Successfully";
                            return View();
                        }

                    }

                }

            }
            else
            {
                ViewBag.Error = "Please Register Ataljal Application, Your Credentials not Matched";
                return View();
            }

        }


        // End Captcha code


        [HttpPost]
        public ActionResult App_Change_password(Users Data)
        {

            users NewUser = new users();
            var Email = Data.Email.ToLower().Trim();

            //--End
            var reg1 = AJE.obj_users.Where(x => x.email == Email).SingleOrDefault();
            var logs_table = new userlogs();
            string ipAddress = Request.ServerVariables["HTTP_X_FORWARDED_FOR"];
            if (string.IsNullOrEmpty(ipAddress))
            {
                ipAddress = Request.ServerVariables["REMOTE_ADDR"];
            }
            if (reg1 != null)
            {

                string pwd = Data.Villagename;
                if (reg1.verification == "true")
                {
                    string hashtext = GetHashString(pwd);
                    if (reg1.hash_password == hashtext.ToLower())
                    {
                        logs_table.actionperformed = "Change Password";
                        logs_table.ipaddress = ipAddress;
                        logs_table.status = "Old Password and New Password is Same , Please Change Your New Password";
                        logs_table.userid = Email;
                        logs_table.dateandtime = Set_Date_Mobile(DateTime.Today.ToString());

                        AJE.obj_userlogs.Add(logs_table);
                        AJE.SaveChanges();
                        ViewBag.Error = "Old Password and New Password is Same , Please Change Your New Password";
                        return View();
                    }
                    else
                    {

                        reg1.plain_password = Data.Villagename;
                        reg1.hash_password = hashtext.ToLower();

                        AJE.Entry(reg1).State = EntityState.Modified;
                        AJE.SaveChanges();
                        logs_table.actionperformed = "Change Password";
                        logs_table.ipaddress = ipAddress;
                        logs_table.status = "Password Changed Successfully";
                        logs_table.userid = Email;
                        logs_table.dateandtime = Set_Date_Mobile(DateTime.Today.ToString());

                        AJE.obj_userlogs.Add(logs_table);
                        AJE.SaveChanges();

                        ViewBag.Error = "Password Changed Successfully";
                        return View();
                    }
                }
                else
                {
                    ViewBag.Error = "State Officer Not Approved Your Credentionals";
                    return View();
                }
            }
            else
            {
                logs_table.actionperformed = "Change Password";
                logs_table.ipaddress = ipAddress;
                logs_table.status = "Enter Valid Email id ";
                logs_table.userid = Email;
                logs_table.dateandtime = Set_Date_Mobile(DateTime.Today.ToString());

                AJE.obj_userlogs.Add(logs_table);
                AJE.SaveChanges();
                ViewBag.Error = "Please Enter Valid Email id";
                return View();

            }

        }



        public string APP_ForgetPassword(string Data)
        {

            string vcode = Data.Trim();
            var IDd = Data.Split(',');
            var Email = IDd[1];
            Guid vid = Guid.NewGuid();
            string viid = vid.ToString();
            var users = AJE.obj_users.Where(x => x.email == Email).ToList();

            var users11 = ABE.obj_abhy_email_verification.Where(x => x.email == Email).ToList();


            if (users.Count != 0 && Email == users[0].email.Trim())
            {

                if (users[0].verification == "true")
                {

                    string[] uuu = Request.Url.AbsoluteUri.Split('/');
                    string GrievanceAprroved = uuu[0] + "//" + uuu[2] + "/Contact/App_Change_password?code=" + viid;

                    string Mail_Subject = "PasswordRecovery";


                    StringBuilder sb = new StringBuilder();

                    sb.Append("<table style='margin-left:50px;'>");
                    sb.Append("<tr  style='width:300px'>");
                    sb.Append("</tr>");
                    sb.Append("<tr style='width:300px'>");
                    sb.Append("<td>");

                    sb.Append("</td>");

                    sb.Append("</tr>");

                    sb.Append("<tr  style='width:300px'>");
                    sb.Append("<td>");

                    sb.Append("</td>");
                    sb.Append("</tr>");
                    sb.Append("<br>");
                    sb.Append("<br>");
                    sb.Append("<br>");
                    sb.Append("<tr  style='width:300px'>");

                    sb.Append("<td>");

                    sb.Append("Hi,");
                    sb.Append("<br>");
                    sb.Append("<br>");

                    sb.AppendLine("WE RECEIVED YOUR HELP REQUEST!");

                    sb.Append("<br>");
                    sb.Append("User Name: " + users[0].username.Trim());
                    sb.Append("<br>");
                    sb.Append("Email: " + users[0].email.Trim());
                    sb.Append("<br>");
                    sb.Append("<br>");

                    sb.Append("Please Click on the following link To Reset Your Password:");
                    sb.Append($"<a href='{GrievanceAprroved}' style='text-decoration: none;color:blue;'>Click Here</a>");


                    /*width = 50 height = 31 border = 0 alt = Click title = Click ></ a >*/

                    sb.Append("</td>");
                    sb.Append("<tr  style='width:300px'>");

                    sb.Append("<td>");
                    sb.Append("<br>");
                    sb.Append("Note: Never Share Your Credentials With Others!");
                    sb.Append("<br>");
                    sb.Append("<br>");
                    sb.Append("Thanking You,");
                    sb.Append("<br>");
                    sb.Append("ATAL JAL Team");

                    sb.Append("</td>");
                    sb.Append("</tr>");
                    sb.Append("<tr>");
                    sb.Append("</tr>");
                    sb.Append("</table>");


                    string result1 = WebConstents.SendEmailSMTP(Email, null, Mail_Subject, sb.ToString(), "");


                    var abhy_email_verification = new abhy_email_verification();

                    int count1 = users11.Count + 1;

                    abhy_email_verification.application_type = "APP";
                    abhy_email_verification.date_today = DateTime.Now.ToString();
                    string time = DateTime.Now.ToString("t");
                    abhy_email_verification.time_today = time;
                    abhy_email_verification.email = Email;
                    abhy_email_verification.email_count = count1.ToString();
                    abhy_email_verification.verification_code = viid;
                    ABE.obj_abhy_email_verification.Add(abhy_email_verification);
                    ABE.SaveChanges();

                    ViewBag.Error = "Please Check Your Mail";
                    //Session["FCode"] = Code;
                    return "Please Check Your Mail";
                }
                else
                {
                    return "State Officer not Approved Your Credentials";
                }
            }
            else
            {
                ViewBag.Error = "You Have Not Registered";
                var reg11 = AJE.obj_users.Where(x => x.email == Email).ToList();
                if (reg11.Count == 0)
                {

                    return "You Have Not Registered";
                }
                else
                {
                    return "You had Registered but, you have to Activate your Account, Please check your Email";
                }

            }

        }

        public ActionResult Water_level()
        {
            return View();
        }
        public ActionResult Water_quality()
        {
            return View();
        }
        public ActionResult Hydrogeological_reports()
        {
            return View();
        }
        [HttpGet]
        public ActionResult Hydrogeological_reports_Info(string StateName)
        {
            try
            {
                if (StateName == "ALL")
                {
                    var Details = ABE.obj_abhy_disclosure_23.Where(x => x.module == "Hydrogeological Report").ToList();

                    return Json(Details, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    var Details = ABE.obj_abhy_disclosure_23.Where(x => x.state_name == StateName && x.module == "Hydrogeological Report").ToList();

                    return Json(Details, JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception ex)
            {
                Log(ex.InnerException.Message.ToString());
                return Json("error", JsonRequestBehavior.AllowGet);

            }

            return Json("ok", JsonRequestBehavior.AllowGet);

        }


        private void Log(string message)
        {
            string logFilePath = Server.MapPath("~/log24_25.txt");
            using (StreamWriter writer = new StreamWriter(logFilePath, true))
            {
                writer.WriteLine($"{DateTime.Now}: {message}");
            }
        }

        [HttpGet]
        public ActionResult Water_Level_Info(string StateName)
        {

            var Details = ABE.obj_abhy_disclosure.Where(x => x.state_name == StateName && x.module == "Water Level").ToList();

            return Json(Details, JsonRequestBehavior.AllowGet);
            //if (StateName == "ALL")
            //{
            //    var Details = ABE.obj_abhy_disclosure.Where(x => x.module == "Water Level").ToList();

            //    return Json(Details, JsonRequestBehavior.AllowGet);
            //}
            //else
            //{
            //    var Details = ABE.obj_abhy_disclosure.Where(x => x.state_name == StateName && x.module == "Water Level").ToList();

            //    return Json(Details, JsonRequestBehavior.AllowGet);
            //}

        }
        [HttpGet]
        public ActionResult WaterQuality_Info(string StateName)
        {
            if (StateName == "ALL")
            {
                var Details = ABE.obj_abhy_disclosure.Where(x => x.module == "Water Quality").ToList();

                return Json(Details, JsonRequestBehavior.AllowGet);
            }
            else
            {
                var Details = ABE.obj_abhy_disclosure.Where(x => x.state_name == StateName && x.module == "Water Quality").ToList();

                return Json(Details, JsonRequestBehavior.AllowGet);
            }

        }
        public ActionResult Implementing_Agencies()
        {
            //List<abhy_about_contact_agencies> Data = ABE.objabhy_about_contact_agencies.ToList();

            return View();

        }
        public ActionResult Agencies_Info()
        {
            List<abhy_about_contact_agencies> states = ABE.objabhy_about_contact_agencies.ToList();
            ViewBag.scount = states.Count;
            return Json(states, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Additional_Contacts()
        {
            List<abhy_agencies> Data = ABE.objabhy_agencies.ToList();

            return View(Data);

        }

        public ActionResult FeedBack(string rr = "")
        {
            var reg_no = rr;
            if (reg_no != "")
            {
                string aaa = ENCandDEC.DecryptAES256(reg_no);

                ViewBag.rr = aaa;
            }
            else
            {
                ViewBag.rr = "";
            }
            var Data = ABE.objabhy_published_documents.ToList();

            JavaScriptSerializer js = new JavaScriptSerializer();
            js.MaxJsonLength = 2147483647;
            ViewBag.Data = js.Serialize(Data);
            return View();

           
        }

        [HttpPost]
        public ActionResult FeedBack(string mobile, FormCollection form, string clientCaptcha, string address, string name, string email, string agency, string feedback, string apdid, string docuname)
        {
            abhy_feedback af = new abhy_feedback();
            af.address = address;
            af.agency = agency;
            af.document = docuname;
            if (apdid != "")
            {
                af.apdid = Convert.ToInt32(apdid);
            }

            af.feedback = feedback;
            af.mobile = mobile;
            af.name = name;
            if (Session["UserId"] != null)
            {
                af.UserId = Session["UserId"].ToString();
            }
            ABE.objabhy_feedback.Add(af);
            ABE.SaveChanges();
            string contemail = ".Kreate Technologies.net2019@gmail.com";

            //  string mobile,  string feedback,
            string body = "Dear Sir/Madam," + "\r\n" + "\n" + "User Name:" + name + "," + "\r\n Agency Name::" + agency + "," + "," + "\r\n Agency Address::" + address + "," + "\r\n  EmailId::" + email + "," + "\r\n Mobile Number::" + mobile + "," + "," + "\r\n FeedBack::" + feedback + "," + "\r\n\r\n\r\n Thank You";
            string result1 = WebConstents.SendEmailSMTP(contemail, null, "Enquire", body.ToString(), "");
            ModelState.Clear();
            ViewBag.Error = "Message Sent Successfully.";
            TempData["FeedBack"] = "data";
            Session["Data"] = "Data";
            return RedirectToAction("FeedBack");
        }


        [HttpPost]
        public ActionResult FeedBackData(string mobile)
        {
            //if (Session["UserId"] != null)
            //{
            var Data1 = ABE.objabhy_agencies.Where(x => x.mobile == mobile).ToList();
            JavaScriptSerializer js1 = new JavaScriptSerializer();
            ViewBag.Data = js1.Serialize(Data1);

            return Json(ViewBag.Data, JsonRequestBehavior.AllowGet);
            //}
            //else
            //{
            //    return RedirectToAction("MisLogin", "Home");
            //}


        }
        [HttpPost]
        public ActionResult FeedBackInforamtion(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    //var result = js.Deserialize<abhy_feedback_latest>(Data);
                    var result = js.Deserialize<abhy_IEC>(Data);
                    var data = ABE.obj_abhy_feedback_latest.ToList();
                    List<abhy_feedback_latest> ddetails = new List<abhy_feedback_latest>();
                    var State = result.state_name;
                    var Dist = result.district_name;
                    var Block = result.block_name;

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        ddetails = ABE.obj_abhy_feedback_latest.Where(x => x.level_of_event == State && x.dist == Dist && x.block == Block).OrderByDescending(x => x.id).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        ddetails = ABE.obj_abhy_feedback_latest.Where(x => x.level_of_event == State && x.dist == Dist).OrderByDescending(x => x.id).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        ddetails = ABE.obj_abhy_feedback_latest.Where(x => x.level_of_event == State).OrderByDescending(x => x.id).ToList();//total list

                    }




                    //return Json(ddetails, JsonRequestBehavior.AllowGet);
                    var HouseHolddata = ddetails;
                    var jsonresults30 = Json(HouseHolddata, JsonRequestBehavior.AllowGet);
                    jsonresults30.MaxJsonLength = int.MaxValue;
                    return jsonresults30;
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
        public ActionResult FeedBackInforamtion_total(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_IEC>(Data);
                    //var data = ABE.obj_vw_abhy_feedback_latest.ToList();
                    List<vw_abhy_feedback_latest> ddetails = new List<vw_abhy_feedback_latest>();
                    var State = result.state_name;
                    var Dist = result.district_name;
                    var Block = result.block_name;
                    var year = result.year;
                    var month = result.month;
                    if (State == "All")
                    {
                        if (State == "All" && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            ddetails = ABE.obj_vw_abhy_feedback_latest.Where(x => x.year == year && x.month == month).OrderByDescending(x => x.id).ToList();//total list

                        }
                        else if (State == "All" && year != "0" && year != "" && year != null)
                        {
                            ddetails = ABE.obj_vw_abhy_feedback_latest.Where(x => x.year == year).OrderByDescending(x => x.id).ToList();//total list

                        }
                        else if (State == "All")
                        {
                            ddetails = ABE.obj_vw_abhy_feedback_latest.OrderByDescending(x => x.id).ToList();//total list

                        }
                    }
                    else
                    {

                        if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            ddetails = ABE.obj_vw_abhy_feedback_latest.Where(x => x.level_of_event == State && x.dist == Dist && x.block == Block && x.year == year && x.month == month).OrderByDescending(x => x.id).ToList();//total list

                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
                        {
                            ddetails = ABE.obj_vw_abhy_feedback_latest.Where(x => x.level_of_event == State && x.dist == Dist && x.block == Block && x.year == year).OrderByDescending(x => x.id).ToList();//total list

                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                        {
                            ddetails = ABE.obj_vw_abhy_feedback_latest.Where(x => x.level_of_event == State && x.dist == Dist && x.block == Block).OrderByDescending(x => x.id).ToList();//total list

                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            ddetails = ABE.obj_vw_abhy_feedback_latest.Where(x => x.level_of_event == State && x.dist == Dist && x.year == year && x.month == month).OrderByDescending(x => x.id).ToList();//total list

                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
                        {
                            ddetails = ABE.obj_vw_abhy_feedback_latest.Where(x => x.level_of_event == State && x.dist == Dist && x.year == year).OrderByDescending(x => x.id).ToList();//total list

                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                        {
                            ddetails = ABE.obj_vw_abhy_feedback_latest.Where(x => x.level_of_event == State && x.dist == Dist).OrderByDescending(x => x.id).ToList();//total list

                        }
                        else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            ddetails = ABE.obj_vw_abhy_feedback_latest.Where(x => x.level_of_event == State && x.year == year && x.month == month).OrderByDescending(x => x.id).ToList();//total list

                        }
                        else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
                        {
                            ddetails = ABE.obj_vw_abhy_feedback_latest.Where(x => x.level_of_event == State && x.year == year).OrderByDescending(x => x.id).ToList();//total list

                        }
                        else if (State != "0" && State != "" && State != null)
                        {
                            ddetails = ABE.obj_vw_abhy_feedback_latest.Where(x => x.level_of_event == State).OrderByDescending(x => x.id).ToList();//total list

                        }

                    }
                    var jsonresults = Json(ddetails, JsonRequestBehavior.AllowGet);
                    jsonresults.MaxJsonLength = int.MaxValue;
                    return jsonresults;

                    //return Json(ddetails, JsonRequestBehavior.AllowGet);
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
        public ActionResult FeedBackInforamtion_search(string Data, string topic_of_event)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    //var result = js.Deserialize<abhy_feedback_latest>(Data);
                    var result = js.Deserialize<abhy_IEC>(Data);
                    //var data = ABE.obj_abhy_feedback_latest.ToList();
                    List<vw_abhy_feedback_latest> ddetails = new List<vw_abhy_feedback_latest>();
                    var State = result.state_name;
                    var Dist = result.district_name;
                    var Block = result.block_name;
                    var traning = topic_of_event;
                    if (State == "All")
                    {
                        if (traning != "0" && traning != "" && traning != null)
                        {
                            ddetails = ABE.obj_vw_abhy_feedback_latest.Where(x => x.p_training_name == traning).OrderByDescending(x => x.id).ToList();//total list

                        }
                    }
                    else
                    {
                        if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && traning != "0" && traning != "" && traning != null)
                        {
                            ddetails = ABE.obj_vw_abhy_feedback_latest.Where(x => x.level_of_event == State && x.dist == Dist && x.block == Block && x.p_training_name == traning).OrderByDescending(x => x.id).ToList();//total list

                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && traning != "0" && traning != "" && traning != null)
                        {
                            ddetails = ABE.obj_vw_abhy_feedback_latest.Where(x => x.level_of_event == State && x.dist == Dist && x.p_training_name == traning).OrderByDescending(x => x.id).ToList();//total list

                        }
                        else if (State != "0" && State != "" && State != null && traning != "0" && traning != "" && traning != null)
                        {
                            ddetails = ABE.obj_vw_abhy_feedback_latest.Where(x => x.level_of_event == State && x.p_training_name == traning).OrderByDescending(x => x.id).ToList();//total list

                        }
                        else if (traning != "0" && traning != "" && traning != null)
                        {
                            ddetails = ABE.obj_vw_abhy_feedback_latest.Where(x => x.p_training_name == traning).OrderByDescending(x => x.id).ToList();//total list

                        }
                    }




                    //return Json(ddetails, JsonRequestBehavior.AllowGet);
                    var HouseHolddata = ddetails;
                    var jsonresults30 = Json(HouseHolddata, JsonRequestBehavior.AllowGet);
                    jsonresults30.MaxJsonLength = int.MaxValue;
                    return jsonresults30;
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



        public ActionResult feedback_Excel( string state1 , string district1 , string block01 ,  string traning1 , string year1, string month1)
        {

            var State = "";
            var Dist = "";
            var Block = "";
            var Gram = "";

            if (Session["gstate"] != null)
            {
                State = Session["gstate"].ToString();
            }
            else
            {
                State = state1;
            }
            if (Session["gdist"] != null)
            {
                Dist = Session["gdist"].ToString();
            }
            else
            {
                Dist = district1;
            }
            if (Session["gblock"] != null)
            {
                Block = Session["gblock"].ToString();
            }
            else
            {
                Block = block01;
            }
            if (Session["ggram"] != null)
            {
                Gram = Session["ggram"].ToString();
            }
            else
            {
                Gram = "0";
            }
            var traning = traning1;
            var year = year1;
            var month = month1;



            List<vw_abhy_feedback_latest> ddetails = new List<vw_abhy_feedback_latest>();

            if (State == "All")
            {
                if (State == "All"&& year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                {
                    ddetails = ABE.obj_vw_abhy_feedback_latest.Where(x =>  x.year == year && x.month == month).OrderByDescending(x => x.id).ToList();//total list

                }
                else if (State == "All" && year != "0" && year != "" && year != null)
                {
                    ddetails = ABE.obj_vw_abhy_feedback_latest.Where(x => x.year == year).OrderByDescending(x => x.id).ToList();//total list

                }
                else if (State == "All")
                {
                    ddetails = ABE.obj_vw_abhy_feedback_latest.OrderByDescending(x => x.id).ToList();//total list

                }
            }
            else {
                if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && traning != "0" && traning != "" && traning != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                {
                    ddetails = ABE.obj_vw_abhy_feedback_latest.Where(x => x.level_of_event == State && x.dist == Dist && x.block == Block && x.p_training_name == traning && x.year == year && x.month == month).OrderByDescending(x => x.id).ToList();//total list

                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && traning != "0" && traning != "" && traning != null && year != "0" && year != "" && year != null)
                {
                    ddetails = ABE.obj_vw_abhy_feedback_latest.Where(x => x.level_of_event == State && x.dist == Dist && x.block == Block && x.p_training_name == traning && x.year == year).OrderByDescending(x => x.id).ToList();//total list

                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && traning != "0" && traning != "" && traning != null)
                {
                    ddetails = ABE.obj_vw_abhy_feedback_latest.Where(x => x.level_of_event == State && x.dist == Dist && x.block == Block && x.p_training_name == traning).OrderByDescending(x => x.id).ToList();//total list

                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && traning != "0" && traning != "" && traning != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                {
                    ddetails = ABE.obj_vw_abhy_feedback_latest.Where(x => x.level_of_event == State && x.dist == Dist && x.block == Block && x.p_training_name == traning && x.year == year && x.month == month).OrderByDescending(x => x.id).ToList();//total list

                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && traning != "0" && traning != "" && traning != null && year != "0" && year != "" && year != null)
                {
                    ddetails = ABE.obj_vw_abhy_feedback_latest.Where(x => x.level_of_event == State && x.dist == Dist && x.block == Block && x.p_training_name == traning && x.year == year).OrderByDescending(x => x.id).ToList();//total list

                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                {
                    ddetails = ABE.obj_vw_abhy_feedback_latest.Where(x => x.level_of_event == State && x.dist == Dist && x.block == Block).OrderByDescending(x => x.id).ToList();//total list

                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && traning != "0" && traning != "" && traning != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                {
                    ddetails = ABE.obj_vw_abhy_feedback_latest.Where(x => x.level_of_event == State && x.dist == Dist && x.p_training_name == traning && x.year == year && x.month == month).OrderByDescending(x => x.id).ToList();//total list

                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && traning != "0" && traning != "" && traning != null && year != "0" && year != "" && year != null)
                {
                    ddetails = ABE.obj_vw_abhy_feedback_latest.Where(x => x.level_of_event == State && x.dist == Dist && x.p_training_name == traning && x.year == year).OrderByDescending(x => x.id).ToList();//total list

                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && traning != "0" && traning != "" && traning != null)
                {
                    ddetails = ABE.obj_vw_abhy_feedback_latest.Where(x => x.level_of_event == State && x.dist == Dist && x.p_training_name == traning).OrderByDescending(x => x.id).ToList();//total list

                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                {
                    ddetails = ABE.obj_vw_abhy_feedback_latest.Where(x => x.level_of_event == State && x.dist == Dist && x.year == year && x.month == month).OrderByDescending(x => x.id).ToList();//total list

                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
                {
                    ddetails = ABE.obj_vw_abhy_feedback_latest.Where(x => x.level_of_event == State && x.dist == Dist && x.year == year).OrderByDescending(x => x.id).ToList();//total list

                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
                {
                    ddetails = ABE.obj_vw_abhy_feedback_latest.Where(x => x.level_of_event == State && x.dist == Dist && x.year == year).OrderByDescending(x => x.id).ToList();//total list

                }
                else if (State != "0" && State != "" && State != null && traning != "0" && traning != "" && traning != null)
                {
                    ddetails = ABE.obj_vw_abhy_feedback_latest.Where(x => x.level_of_event == State && x.p_training_name == traning).OrderByDescending(x => x.id).ToList();//total list

                }
                else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                {
                    ddetails = ABE.obj_vw_abhy_feedback_latest.Where(x => x.level_of_event == State && x.year == year && x.month == month).OrderByDescending(x => x.id).ToList();//total list

                }
                else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
                {
                    ddetails = ABE.obj_vw_abhy_feedback_latest.Where(x => x.level_of_event == State && x.year == year).OrderByDescending(x => x.id).ToList();//total list

                }
                else if (State != "0" && State != "" && State != null)
                {
                    ddetails = ABE.obj_vw_abhy_feedback_latest.Where(x => x.level_of_event == State).OrderByDescending(x => x.id).ToList();//total list

                }
                else if (traning != "0" && traning != "" && traning != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                {
                    ddetails = ABE.obj_vw_abhy_feedback_latest.Where(x => x.p_training_name == traning && x.year == year && x.month == month).OrderByDescending(x => x.id).ToList();//total list

                }
                else if (traning != "0" && traning != "" && traning != null && year != "0" && year != "" && year != null)
                {
                    ddetails = ABE.obj_vw_abhy_feedback_latest.Where(x => x.p_training_name == traning && x.year == year).OrderByDescending(x => x.id).ToList();//total list

                }
                else if (traning != "0" && traning != "" && traning != null)
                {
                    ddetails = ABE.obj_vw_abhy_feedback_latest.Where(x => x.p_training_name == traning).OrderByDescending(x => x.id).ToList();//total list

                }
            }

            using (var workbook = new XLWorkbook())
            {

                var worksheet = workbook.Worksheets.Add("Participants Feedback");
                var currentRow = 1;
                worksheet.Cell(currentRow, 1).Value = "Registration No";
                worksheet.Cell(currentRow, 2).Value = "Topics";
                worksheet.Cell(currentRow, 3).Value = "Name of the Participant";
                worksheet.Cell(currentRow, 4).Value = "State";
                worksheet.Cell(currentRow, 5).Value = "District";
                worksheet.Cell(currentRow, 6).Value = "Block";
                worksheet.Cell(currentRow, 7).Value = "Event Platform";
                worksheet.Cell(currentRow, 8).Value = "From Date";
                worksheet.Cell(currentRow, 9).Value = "To Date";
                worksheet.Cell(currentRow, 10).Value = "Total Days";
                worksheet.Cell(currentRow, 11).Value = "Structure Of Training";
                worksheet.Cell(currentRow, 12).Value = "Course Material";
                worksheet.Cell(currentRow, 13).Value = "Interactio With Trainer";
                worksheet.Cell(currentRow, 14).Value = "Hands On Practice";
                worksheet.Cell(currentRow, 15).Value = "Usefulness Of Course";
                worksheet.Cell(currentRow, 16).Value = "Information Presented Was";
                worksheet.Cell(currentRow, 17).Value = "Participant Questions Were";
                worksheet.Cell(currentRow, 18).Value = "Food Quality/Logging Facilities";
                worksheet.Cell(currentRow, 19).Value = "Most Interesting Thing You Learn";
                worksheet.Cell(currentRow, 20).Value = "Overall Impression";
                worksheet.Cell(currentRow, 21).Value = "Your Suggestions";
                worksheet.Cell(currentRow, 22).Value = "Feedback Submission Date";
                worksheet.Cell(currentRow, 23).Value = "Year";
                worksheet.Cell(currentRow, 24).Value = "Month";

                if (ddetails.Count != 0)
                {


                    foreach (var user in ddetails)
                    {
                        currentRow++;
                        worksheet.Cell(currentRow, 1).Value = user.registration_no;
                        worksheet.Cell(currentRow, 2).Value = user.p_training_name;
                        worksheet.Cell(currentRow, 3).Value = user.participant_name;
                        worksheet.Cell(currentRow, 4).Value = user.level_of_event;
                        worksheet.Cell(currentRow, 5).Value = user.dist;
                        worksheet.Cell(currentRow, 6).Value = user.block;
                        worksheet.Cell(currentRow, 7).Value = user.event_platform;
                        worksheet.Cell(currentRow, 8).Value = user.from_date;
                        worksheet.Cell(currentRow, 9).Value = user.to_date;
                        worksheet.Cell(currentRow, 10).Value = user.total_days;
                        worksheet.Cell(currentRow, 11).Value = user.structure_of_training;
                        worksheet.Cell(currentRow, 12).Value = user.course_material;
                        worksheet.Cell(currentRow, 13).Value = user.interaction_with_trainer;
                        worksheet.Cell(currentRow, 14).Value = user.hands_on_practice;
                        worksheet.Cell(currentRow, 15).Value = user.usefulness_of_contents;
                        worksheet.Cell(currentRow, 16).Value = user.information_presented;
                        worksheet.Cell(currentRow, 17).Value = user.participant_questions;
                        worksheet.Cell(currentRow, 18).Value = user.food_quality;
                        worksheet.Cell(currentRow, 19).Value = user.most_interesting_thing;
                        worksheet.Cell(currentRow, 20).Value = user.overall_impression;
                        worksheet.Cell(currentRow, 21).Value = user.your_suggestions;
                        worksheet.Cell(currentRow, 22).Value = user.DateTime;
                        worksheet.Cell(currentRow, 23).Value = user.year;
                        worksheet.Cell(currentRow, 24).Value = user.month;
                    }
                }
                else
                {
                    currentRow++;
                    worksheet.Cell(currentRow, 1).Value = "";
                    worksheet.Cell(currentRow, 2).Value = "";
                    worksheet.Cell(currentRow, 3).Value = "";
                    worksheet.Cell(currentRow, 4).Value = "";
                    worksheet.Cell(currentRow, 5).Value = "";
                    worksheet.Cell(currentRow, 6).Value = "";
                    worksheet.Cell(currentRow, 7).Value = "";
                    worksheet.Cell(currentRow, 8).Value = "";
                    worksheet.Cell(currentRow, 9).Value = "";
                    worksheet.Cell(currentRow, 10).Value = "";
                    worksheet.Cell(currentRow, 11).Value = "No Data";
                    worksheet.Cell(currentRow, 12).Value = "";
                    worksheet.Cell(currentRow, 13).Value = "";
                    worksheet.Cell(currentRow, 14).Value = "";
                    worksheet.Cell(currentRow, 15).Value = "";
                    worksheet.Cell(currentRow, 16).Value = "";
                    worksheet.Cell(currentRow, 17).Value = "";
                    worksheet.Cell(currentRow, 18).Value = "";
                    worksheet.Cell(currentRow, 19).Value = "";
                    worksheet.Cell(currentRow, 20).Value = "";
                    worksheet.Cell(currentRow, 21).Value = "";
                    worksheet.Cell(currentRow, 22).Value = "";


                }
                using (var stream = new MemoryStream())
                {
                    workbook.SaveAs(stream);
                    var content = stream.ToArray();

                    return File(
                        content,
                        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                        "Participants Feedback.csv");
                }
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




        [HttpGet]
        public ActionResult feedback_search_Data(string Topic_OF_EVENT)     //12/13/2022
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    if (Topic_OF_EVENT == "Select Event/Training")
                    {
                        var data = ABE.obj_abhy_feedback_latest.ToList();

                        return Json(data, JsonRequestBehavior.AllowGet);
                    }
                    else
                    {

                        var data = ABE.obj_abhy_feedback_latest.Where(x => x.p_training_name == Topic_OF_EVENT).ToList();

                        return Json(data, JsonRequestBehavior.AllowGet);
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
        public ActionResult Save_FeedBackInfo(string Data)
        {
            JavaScriptSerializer js = new JavaScriptSerializer();
            var result = js.Deserialize<abhy_feedback_new>(Data);
            abhy_feedback_new obj = new abhy_feedback_new();
            obj.participant_name = result.participant_name;
            obj.participant_address = result.participant_address;
            obj.state_name = result.state_name;
            obj.program_title = result.program_title;
            obj.venue = result.venue;
            obj.other_state_name = result.other_state_name;
            obj.start_date = result.start_date;
            obj.duration = result.duration;
            obj.strcuture_of_course = result.strcuture_of_course;
            obj.strcuture_of_course_rating = result.strcuture_of_course_rating;
            obj.course_material = result.course_material;
            obj.course_material_rating = result.course_material_rating;
            obj.teaching_faculty = result.teaching_faculty;
            obj.teaching_faculty_rating = result.teaching_faculty_rating;
            obj.partical_session = result.partical_session;
            obj.partical_session_rating = result.partical_session_rating;
            obj.food_quality_logging_facility = result.food_quality_logging_facility;
            obj.food_quality_logging_facility_rating = result.food_quality_logging_facility_rating;
            obj.interaction_with_faculty = result.interaction_with_faculty;
            obj.interaction_with_faculty_rating = result.interaction_with_faculty_rating;
            obj.unless_of_course = result.unless_of_course;
            obj.unless_of_course_rating = result.unless_of_course_rating;
            obj.overall_impression = result.overall_impression;
            obj.overall_impression_rating = result.overall_impression_rating;
            obj.course_found1 = result.course_found1;
            obj.course_found2 = result.course_found2;
            obj.course_found3 = result.course_found3;
            obj.registration_no = result.registration_no;
            var Course_Comment = result.course_found1;
            if (Course_Comment == "" || Course_Comment == null)
            {
                Course_Comment = result.course_found2;
            }
            string Mail_Subject = "FeedBack Information";

            StringBuilder sb = new StringBuilder();
            sb.Append("<br>");
            sb.Append("<br>");
            sb.Append("<table style='margin-left:50px;'>");
            sb.Append("<tr  style='width:300px'>");
            sb.Append("</tr>");
            sb.Append("<tr style='width:300px'>");
            sb.Append("<td>");
            sb.Append("<b>Dear Sir/Madam,</b>");
            sb.Append("<br>");
            sb.Append("</td>");
            sb.Append("<br>");
            sb.Append("</tr>");
            sb.Append("<br>");
            sb.Append("<tr>");
            sb.Append("<td>");
            sb.Append("<b>Program Title :   </b>" + result.program_title + " ");
            sb.Append("</td>");
            sb.Append("<td>");
            sb.Append("<b>Venue :   </b>" + result.venue + " ");
            sb.Append("</td>");
            sb.Append("</tr>");
            sb.Append("<tr>");
            sb.Append("<td>");
            sb.Append("<b>Starting Date:   </b>" + result.start_date + "");
            sb.Append("</td>");
            sb.Append("<td>");
            sb.Append("<b>Duration :   </b>" + result.duration + " ");
            sb.Append("</td>");
            sb.Append("</tr>");
            sb.Append("<tr>");
            sb.Append("<td>");
            sb.Append("<b>1.Structure of course:   </b>" + result.strcuture_of_course + " ");
            sb.Append("</td>");
            sb.Append("<td>");
            sb.Append("<b>Rating :   </b>" + result.strcuture_of_course_rating + " ");
            sb.Append("<td>");
            sb.Append("</td>");
            sb.Append("</tr>");
            sb.Append("<tr>");
            sb.Append("<td>");
            sb.Append("<b>2. Course Material:   </b>" + result.course_material + " ");
            sb.Append("</td>");
            sb.Append("<td>");
            sb.Append("<b>Rating :   </b>" + result.course_material_rating + " ");
            sb.Append("<td>");
            sb.Append("</td>");
            sb.Append("</tr>");
            sb.Append("<tr>");
            sb.Append("<td>");
            sb.Append("<b>3.Teaching Faculty:   </b>" + result.teaching_faculty + " ");
            sb.Append("</td>");
            sb.Append("<td>");
            sb.Append("<b>Rating :   </b>" + result.teaching_faculty_rating + " ");
            sb.Append("</td>");
            sb.Append("</tr>");
            sb.Append("<tr>");
            sb.Append("<td>");
            sb.Append("<b>4.Practical session:   </b>" + result.partical_session + " ");
            sb.Append("</td>");
            sb.Append("<td>");
            sb.Append("<b>Rating :   </b>" + result.partical_session_rating + " ");
            sb.Append("</td>");
            sb.Append("</tr>");
            sb.Append("<tr>");
            sb.Append("<td>");
            sb.Append("<b>5. Food Quality/Logging Facilities (if applicable):   </b>" + result.food_quality_logging_facility + " ");
            sb.Append("</td>");
            sb.Append("<td>");
            sb.Append("<b>Rating :   </b>" + result.food_quality_logging_facility_rating + " ");
            sb.Append("</td>");
            sb.Append("</tr>");
            sb.Append("<tr>");
            sb.Append("<td>");
            sb.Append("<b>6. Interaction with Faculty:   </b>" + result.interaction_with_faculty + " ");
            sb.Append("</td>");
            sb.Append("<td>");
            sb.Append("<b>Rating :   </b>" + result.interaction_with_faculty_rating + " ");
            sb.Append("</td>");
            sb.Append("</tr>");
            sb.Append("<tr>");
            sb.Append("<td>");
            sb.Append("<b>7. Usefulness of Course:   </b>" + result.unless_of_course + " ");
            sb.Append("</td>");
            sb.Append("<td>");
            sb.Append("<b>Rating :   </b>" + result.unless_of_course_rating + " ");
            sb.Append("</td>");
            sb.Append("</tr>");
            sb.Append("<tr>");
            sb.Append("<td>");
            sb.Append("<b>8. Overall impression:   </b>" + result.overall_impression + " ");
            sb.Append("</td>");
            sb.Append("<td>");
            sb.Append("<b>Rating :   </b>" + result.overall_impression_rating + " ");
            sb.Append("</td>");
            sb.Append("</tr>");
            sb.Append("<tr>");
            sb.Append("<td>");
            sb.Append("<b>II. Which topic of the Course You found:   </b>" + Course_Comment + " ");
            sb.Append("</td>");
            sb.Append("</tr>");
            sb.Append("<tr>");
            sb.Append("<td>");
            sb.Append("<b> III. Your suggestions /Comments for further improvements:   </b>" + result.course_found3 + " ");
            sb.Append("</td>");
            sb.Append("<td>");
            sb.Append("</td>");
            sb.Append("</tr>");
            sb.Append("<br>");
            sb.Append("<br>");
            sb.Append("<br>");
            sb.Append("<tr  style='width:300px'>");
            sb.Append("<td>");
            sb.Append("</td>");
            sb.Append("<tr  style='width:300px'>");
            sb.Append("<td>");
            sb.Append("<br>");
            sb.Append("Thanking You");
            sb.Append("<br>");
            //sb.Append(".Kreate Technologies Team");
            sb.Append("</td>");
            sb.Append("</tr>");
            sb.Append("<tr>");
            sb.Append("</tr>");
            sb.Append("</table>");
            string result1 = WebConstents.SendEmailSMTP(".Kreate Technologies.net2019@gmail.com", null, Mail_Subject, sb.ToString(), "");
            ABE.obj_abhy_feedback_new.Add(obj);
            ABE.SaveChanges();
            return Json("FeedBack Send Successfully");
        }


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
            TempData["Captcha"] = Session["text"];
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
        public ActionResult FeedBackGet(string clientCaptcha)
        {
            string Captcha = Session["text"].ToString();
            if (Captcha == clientCaptcha)
            {
                return Json("Matched");
            }
            else
            {
                return Json("NotMatched");
            }


        }


        [HttpGet]
        public ActionResult contact_npmu()
        {
            return View();
        }


        [HttpGet]
        public ActionResult contact_npmu_Info()
        {
            try
            {
                List<abhy_contact_npmu> ddetails = ABE.obj_abhy_contact_npmu.OrderBy(x=> x.list_order).ToList();//total list

                return Json(ddetails, JsonRequestBehavior.AllowGet);
            }
            catch (Exception Ex)
            {
                return Json("Error", JsonRequestBehavior.AllowGet);
            }
        }
        [HttpGet]
        public ActionResult contact_spmu()
        {
            return View();
        }
        [HttpGet]
        public ActionResult contact_spmu_Info()
        {
            try
            {
                List<abhy_contact_spmu> ddetails = ABE.obj_abhy_contact_spmu.OrderBy(x => x.state_name).ToList();//total list

                return Json(ddetails, JsonRequestBehavior.AllowGet);
            }
            catch (Exception Ex)
            {
                return Json("Error", JsonRequestBehavior.AllowGet);
            }
        }
        [HttpGet]
        public ActionResult contact_NTSA()
        {
            return View();
        }

        [HttpGet]
        public ActionResult contact_cgwb_Info()
        {
            try
            {
                List<abhy_contact_cgwb> ddetails = ABE.obj_abhy_contact_cgwb.OrderBy(x=>x.list_order).ToList();//total list

                return Json(ddetails, JsonRequestBehavior.AllowGet);
            }
            catch (Exception Ex)
            {
                return Json("Error", JsonRequestBehavior.AllowGet);
            }
        }
        [HttpGet]
        public ActionResult contact_others()
        {
            return View();
        }
        [HttpPost]
        public JsonResult CustomCaptcha_feedback(string clientCaptcha)
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
        public ActionResult Change_password(string code)
        {
            if (code != "" && code != null)
            {

                var Data = ABE.obj_abhy_forgotpwd.Where(x => x.resetlink == code && x.application_type == "WEB").ToList();

                if (Data.Count != 0)
                {
                    ViewBag.RandomNumber = RandomString(6);
                    ViewBag.Error = "";
                    var Email = Data[0].email;

                    Session["FEmail"] = Email;
                    var FullDetails = ABE.obj_abhy_forgotpwd.Where(x => x.email == Email && x.application_type == "WEB").ToList();

                    for (var i = 0; i < FullDetails.Count; i++)
                    {
                        if (code != FullDetails[i].resetlink)
                        {
                            ABE.Entry(FullDetails[i]).State = EntityState.Deleted;

                            ABE.SaveChanges();
                        }
                        else
                        {
                            DateTime publisheddate1 = ParseDate(Data[0].activedate);
                            DateTime ToDay_Date = DateTime.Today;

                            string DB_Date = publisheddate1.ToString("MM/dd/yyyy");
                            string ToDay_Date1 = ToDay_Date.ToString("MM/dd/yyyy");
                            if (DB_Date == ToDay_Date1)
                            {
                                string today_time = DateTime.Now.ToString("t");
                                string MainTime;
                                string originalTime = Data[0].time_today;
                                string TODAYTIME;
                                DateTime dt;
                                DateTime DT;
                                if (DateTime.TryParse(originalTime, out dt))
                                    MainTime = dt.ToString("HH:mm");

                                if (DateTime.TryParse(today_time, out DT))
                                    TODAYTIME = DT.ToString("HH:mm");

                                DateTime DT3 = dt.AddMinutes(60);
                                
                                if (dt <= DT3 && DT >= dt && DT3 >= DT)
                                {
                                    return View();
                                    //return Json("Show ChangePasswird Viewpage", JsonRequestBehavior.AllowGet);
                                }
                                else
                                {
                                    return RedirectToAction("WSP_GWM_HOME", "WspNew");
                                    // return Json("Expired Your Mail Permission", JsonRequestBehavior.AllowGet);
                                }
                            }
                        }

                    }
                    return View();
                }
                else
                {
                    Session["FEmail"] = "";
                    ViewBag.Error = "Your password reset link has expired. Please request a new one";
                    return View();
                }
            }

            else
            {
                
                return RedirectToAction("WSP_GWM_HOME", "WspNew");
            }


        }
        [HttpPost]
        public ActionResult Change_password(Users Data)
        {

            Users NewUser = new Users();
            var Email = Data.Email.ToLower().Trim();

            string E_Email = "";


            if (Session["text"] != null)
            {
                if (Session["text"].ToString() == Data.clientcaptcha)
                {
                    if (Session["FEmail"] != null)
                    {
                        E_Email = Session["FEmail"].ToString();
                    }
                    if(E_Email == "")
                    {
                        ViewBag.Error = "Your password reset link has expired. Please request a new one";
                        return View();
                    }
                    if (Email != E_Email)
                    {
                        ViewBag.Error = "Your Forget Password Email not Matched Current Email , Please Check Your Latest Password Recovery Mail";
                        return View();
                    }

                    var reg1 = ABE.objUsers.Where(x => x.Email == Data.Email).SingleOrDefault();
                    if (reg1 != null)
                    {
                        if (reg1.Verifiedornot == "True")
                        {
                            string random = RandomString(6);
                            string pwd = Data.Password;
                            string ranpwd = random + pwd.ToLower();
                            //Password
                            string encription_pew = GetHashString(ranpwd);
                            //Password
                            var xx = encription_pew.ToLower();

                            string Old_Pwd = reg1.Password.ToLower();

                            string ranpwd1 = random + Old_Pwd.ToLower();

                            string Old_encription_pew = GetHashString(ranpwd1);

                            var xx1 = Old_encription_pew.ToLower();
                            if (xx1 == xx)
                            {
                                ViewBag.Error = "Old Password and New Password is Same , Please Change Your New Password";
                                return View();
                            }
                            else
                            {
                                reg1.Password = Data.Password;
                                reg1.Villagename = Data.CheckingCode;
                                ABE.Entry(reg1).State = EntityState.Modified;
                                ABE.SaveChanges();
                                ViewBag.Error = "Password Changed Successfully";
                                return View();
                            }
                        }
                        else
                        {
                            ViewBag.Error = "State Officer not Approved Your Credentials";
                            return View();
                        }
                    }
                    else
                    {
                        ViewBag.Error = "Please Enter Valid Email id ";
                        return View();
                    }

                }
                else
                {
                    ViewBag.Error = "Captcha is Not Matched";
                    return View();
                }

            }
            else
            {
                ViewBag.Error = "Your Captcha is Expired";
                return View();
            }

        }




        [HttpPost]
        public JsonResult CustomCaptcha_password_change(string clientCaptcha)
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
        public JsonResult CustomCaptcha_contact(string clientCaptcha)
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


        // FeedBack Registration search
        [HttpGet]
        public ActionResult registration_selection(string REG)
        {
            //if (Session["UserId"] != null)
            //{

            try
            {
                List<abhy_training_newregs> details = ABE.obj_abhy_training_newregs.Where(x => x.registration_no == REG).ToList();
                List<current_events> data = ABE.obj_current_events.ToList();

                var ddetails = (from a in details
                                join b in data on a.p_training_name equals b.p_training_name
                                orderby b.p_training_name
                                select new
                                {
                                    a.p_name,
                                    a.registration_no,
                                    b.level_event,
                                    b.district,
                                    b.block,
                                    b.event_platform,
                                    a.p_training_name,
                                    b.from_date,
                                    b.to_date,

                                }).FirstOrDefault();

                return Json(ddetails, JsonRequestBehavior.AllowGet);
            }

            catch (Exception Ex)
            {
                return Json("Error", JsonRequestBehavior.AllowGet);
            }



            //try
            //{
            //    var ddetails = ABE.obj_abhy_training_newregs.Where(x => x.registration_no == REG).ToList();

            //    return Json(ddetails, JsonRequestBehavior.AllowGet);
            //}
            //catch (Exception Ex)
            //{
            //    return Json("Error", JsonRequestBehavior.AllowGet);
            //}
            ////}
            ////else
            ////{
            ////    return Json("Logout", JsonRequestBehavior.AllowGet);

            ////}

        }


        [HttpGet]

        public ActionResult Save_Feedback()
        {
            return View();
        }

        [HttpPost]

        public ActionResult Save_Feedback(List<abhy_feedback_latest> Data)
        {

            var Data1 = Data.AsQueryable().FirstOrDefault();
            var registration_no = Data1.registration_no;
            var REG = ABE.obj_abhy_feedback_latest.Where(x => x.registration_no == registration_no).ToList();
            if (REG.Count != 0)
            {
                return Json("You have already submitted your Feedback", JsonRequestBehavior.AllowGet);
            }
            else
            {
                //date save on datebase defaultbase

                Data[0].DateTime = DateTime.Today.ToString("yyyy-MM-dd");
                

                ABE.obj_abhy_feedback_latest.Add(Data[0]);
                ABE.SaveChanges();
            }



            return Json("Feedback Saved Successfully", JsonRequestBehavior.AllowGet);


        }



    }
}
