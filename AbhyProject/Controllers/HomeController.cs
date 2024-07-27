using AbhyProject.Classes;
using AbhyProject.Models;
using AbhyProject.Utility;
using DocumentFormat.OpenXml.ExtendedProperties;
using DocumentFormat.OpenXml.Office2010.Excel;
using DocumentFormat.OpenXml.VariantTypes;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Net.Sockets;
using System.Net;
using System.Security.Cryptography;
using System.Text;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;
using System.Net.NetworkInformation;

namespace AbhyProject.Controllers
{
    public class HomeController : Controller
    {
        //main code
        AbhyEntity ABE = new AbhyEntity();
        AtaljalEntity AJE = new AtaljalEntity();
        string path = "https://ataljal-mis.mowr.gov.in/Images/atal_jal_logo.png";

        //mainn code
        public static string RandomString(int Length)
        {
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            Random r = new Random();
            return new string(Enumerable.Repeat(chars, Length).Select(s => s[r.Next(s.Length)]).ToArray());
        }

        public ActionResult Help_hi()
        {
            return View();
        }
        public ActionResult Help()
        {
            return View();
        }

        public ActionResult Web_information()
        {
            return View();
        }
        public ActionResult Web_information_hi()
        {
            return View();
        }
        public ActionResult contact_hi()
        {
            return View();
        }
        public ActionResult feedback()
        {
            return View();
        }
        public ActionResult feedback_hi()
        {
            return View();
        }
        public ActionResult policy()
        {
            return View();
        }
        public ActionResult policy_hi()
        {
            return View();
        }

        public ActionResult term_condition()
        {
            return View();
        }

        public ActionResult term_condition_hi()
        {
            return View();
        }
        public ActionResult content_policy()
        {
            return View();
        }
        public ActionResult content_policy_hi()
        {
            return View();
        }
        public ActionResult hyper_policy()
        {
            return View();
        }
        public ActionResult content_policy_new()
        {
            return View();
        }

        public ActionResult hyper_policy_hi()
        {
            return View();
        }
        public ActionResult content_policy_new_hi()
        {
            return View();
        }


        public ActionResult Audio_Visual()
        {
            return View();
        }
        public ActionResult Pakhwada()
        {
            return View();
        }
        public ActionResult IEC_Material()
        {
            return View();
        }
        public ActionResult Photographs()
        {
            return View();
        }

        public ActionResult map_view()
        {
            return View();
        }

        public static byte[] GetHash(string inputString)
        {
            HashAlgorithm algorithm = SHA256.Create();
            return algorithm.ComputeHash(Encoding.UTF8.GetBytes(inputString));

        }

        public ActionResult under_maintainance()
        {
            return View();
        }
        public ActionResult flash()
        {
            return View();
        }

        public ActionResult hi()
        {
            return View();
        }
        public static string GetHashString(string inputString)
        {
            StringBuilder sb = new StringBuilder();
            foreach (byte b in GetHash(inputString))
                sb.Append(b.ToString("X2"));
            return sb.ToString().ToUpper();

        }


        [HttpGet]
        public ActionResult Index()
        {
            return View();
        }


        [HttpPost]
        public ActionResult StateLevel_Dropdown(string StateName, string Dist, string Block, string Gram, string Year)
        {
            Session["gstate"] = StateName.TrimEnd('\n').TrimEnd(' ');
            Session["gdist"] = Dist.TrimEnd('\n').TrimEnd(' ');
            Session["gblock"] = Block.TrimEnd('\n').TrimEnd(' ');
            Session["ggram"] = Gram.TrimEnd('\n').TrimEnd(' ');
            Session["year"] = Year;
            return Json("Yes", JsonRequestBehavior.AllowGet);
        }




        //[HttpGet]
        //public ActionResult LogOut()
        //{
        //    if (Session["UserId"] != null)
        //    {
        //        var UserId = Convert.ToInt32(Session["UserId"]);

        //        var res = ABE.objUsers.Where(x => x.UserId == UserId).SingleOrDefault();
        //        if (res != null)
        //        {
        //            res.isactive = 0;//concurrent logout
        //            ABE.Entry(res).State = EntityState.Modified;
        //            ABE.SaveChanges();
        //        }

        //        Session.Abandon();
        //        //Session.Clear();
        //        return RedirectToAction("WSP_GWM_HOME", "WspNew");

        //    }
        //    else
        //    {
        //        return RedirectToAction("WSP_GWM_HOME", "WspNew");
        //    }
        //}
        [HttpGet]
        public ActionResult LogOut()
        {
            try
            {
                //HomeController obj_logFileClass = new HomeController();
                //string ActionPerform = "User Logout";
                //string Status = "Logout";
                //string UserIdd = Session["Officer"].ToString();
                //string LogFile_Info = obj_logFileClass.LogFile_insertion(ActionPerform, Status,UserIdd);
                //if (LogFile_Info == "Saved Successfully") {
                int UserId = Convert.ToInt32(Session["UserId"]);
                string stemail = Convert.ToString(Session["Email"]);
                WspNewController wspNew = new WspNewController();
                //wspNew.WSP_GWM_HOME();
                var IP = wspNew.GetIp();
                //Rajnish
                string stdate = DateTime.Now.ToString("yyyy-MM-dd");
                var data = ABE.obj_user_autologin.Where(x => x.user_id == UserId).ToList();//.FirstOrDefault();
                var userlog = ABE.obj_login_datetime.Where(x => x.email == stemail
                                        && x.date == stdate
                                        //&& x.loginlogout == "Login"
                                        ).OrderByDescending(x => x.id).FirstOrDefault();
                if ((userlog != null) && (userlog.loginlogout == "Login"))
                {
                    login_datetime logindata = new login_datetime();
                    if (UserId > 0)
                    {
                        logindata.name = Session["UserName"].ToString();
                        logindata.email = Session["Email"].ToString();
                        logindata.loginlogout = "Logout";
                        logindata.checkloginlogout = "0";
                        logindata.date = DateTime.Now.ToString("yyyy-MM-dd");
                        logindata.datetime = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
                        ABE.obj_login_datetime.Add(logindata);
                        ABE.SaveChanges();
                        if (data != null)
                        {
                            //Rajnish
                            //ABE.obj_user_autologin.Remove(data);
                            ABE.obj_user_autologin.RemoveRange(data);
                            ABE.SaveChanges();
                        }
                        AutoLogin.EndSession(Convert.ToInt32(Session["UserId"]));
                        Session.Clear();
                        Session.Abandon();
                        Session.RemoveAll();
                    }
                }
                //Session.Clear();

                return RedirectToAction("WSP_GWM_HOME", "WspNew");
            }
            catch (Exception ex)
            {
                if (Session["UserName"] != null)
                {
                    login_datetime logindata = new login_datetime();
                    logindata.name = Session["UserName"].ToString();
                    logindata.email = Session["Email"].ToString();
                    logindata.loginlogout = "Logout";
                    logindata.checkloginlogout = "0";
                    logindata.date = DateTime.Now.ToString("yyyy-MM-dd");
                    logindata.datetime = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
                    ABE.obj_login_datetime.Add(logindata);
                    ABE.SaveChanges();
                    ABE.SaveChanges();
                }
                return RedirectToAction("WSP_GWM_HOME", "WspNew");
            }
        }
        [HttpGet]
        public ActionResult MisLogin()
        {
            if (Session["UserId"] == null)
            {
                List<abhy_villages> model = ABE.objabhy_villages.ToList();
                return View(model);
            }
            else
            {
                ViewBag.Error = "Alredy Logined";
                return RedirectToAction("WSP_GWM_HOME", "WspNew");

            }

        }



        [HttpGet]
        public ActionResult ForgetPassword()
        {
            return View();
        }


        [HttpPost]
        public ActionResult ForgetPassword(string Email)
        {

            List<Users> reg1 = ABE.objUsers.Where(x => x.Email.Contains(Email) && x.Verifiedornot == "True").ToList();

            if (reg1.Count == 1 && Email == reg1[0].Email.Trim())
            {

                StringBuilder sb = new StringBuilder();
                sb.Append("Hi,");
                sb.AppendLine();
                sb.AppendLine();

                sb.AppendLine("WE RECEIVED YOUR HELP REQUEST!");

                sb.AppendLine();
                sb.Append("User Name: " + reg1[0].UserName.Trim());
                sb.AppendLine();
                sb.Append("Email: " + reg1[0].Email.Trim());
                sb.AppendLine();
                sb.Append("Password: " + reg1[0].Password.Trim());
                sb.AppendLine();
                sb.AppendLine();
                sb.Append("Note: Never Share Your Credentials With Others!");
                sb.AppendLine();


                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("<img src='https://img1.wsimg.com/isteam/ip/c7009415-e7fa-45c8-b5e4-cbb576963468/logo/5a843789-34b8-41ac-8a9c-2fdb06ce0b89.png/:/rs=h:150/qt=q:95' width='300px'>");
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("Thanking You,");
                sb.Append("<br>");
                sb.Append("Ataljal Team");

                string results = WebConstents.SendEmailSMTP(Email, "", "Approval from Ataljal", sb.ToString(), "");
                if (results == "success")
                {
                    ViewBag.Error = "Sent";
                }
                else
                {
                    ViewBag.Error = "Please Check Your Mail";
                }
                //Session["FCode"] = Code;
                return RedirectToAction("WspNew/WSP_GWM_HOME");
            }
            else
            {
                if (reg1.Count == 0)
                {
                    ViewBag.Error = "You Have Not Registered";
                    return RedirectToAction("WspNew/WSP_GWM_HOME");
                }
                else
                {
                    ViewBag.Error = "Duplicate data is there";
                    return RedirectToAction("WspNew/WSP_GWM_HOME");
                }

            }

        }



        [HttpGet]
        public ActionResult MisSignUp()
        {
            return View();
        }
        //UsersInfoo
        [HttpGet]
        public ActionResult UsersInfoo()
        {

            try
            {
                var State = Session["SState"].ToString();
                List<Users> ddetails = ABE.objUsers.Where(x => x.Verifiedornot != "True" && x.StateName == State).ToList();//total list
                return Json(ddetails, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json("Error", JsonRequestBehavior.AllowGet);
            }

        }

        [HttpPost]
        public ActionResult WSPHomeAdminRole(string Data)
        {

            JavaScriptSerializer js = new JavaScriptSerializer();
            var result = js.Deserialize<Users>(Data);
            var users = ABE.objUsers.Where(x => x.Email == result.Email.Trim() && x.Password == result.Password.Trim()).ToList();
            if (users.Count != 0)
            {
                Session["SState"] = users[0].StateName;
                if (users[0].RollId == "1")
                {
                    return Json("OK", JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("Please Enter Admin Credentials", JsonRequestBehavior.AllowGet);
                }

            }
            else
            {
                return Json("Your Credentials not Matched", JsonRequestBehavior.AllowGet);
            }

        }

        [HttpPost]
        public ActionResult WSPHomeAdminApproved(string Data)
        {

            JavaScriptSerializer js = new JavaScriptSerializer();
            var result = js.Deserialize<Users>(Data);
            var UserId = Convert.ToInt32(result.UserId);
            var users = ABE.objUsers.Where(x => x.UserId == UserId).ToList();
            if (users.Count != 0)
            {
                var Dataa = users.LastOrDefault();
                Dataa.Verifiedornot = "True";

                string contemail = Dataa.Email.Trim();

                StringBuilder sb = new StringBuilder();
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("<table style='margin-left:50px;'>");
                sb.Append("<tr  style='width:300px'>");
                sb.Append("</tr>");
                sb.Append("<tr>");
                sb.Append("<b>Dear " + Dataa.UserName + ",</b>");
                sb.Append("</tr>");
                sb.Append("<tr style='width:300px'>");
                sb.Append("<td>");
                sb.Append("Welcome to Atal Jal Yojana MIS portal.");
                sb.Append("<br>");

                sb.Append("<br>");
                sb.Append("Please click on the provided link in order to finish the registration process. ");
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("Thank you");
                sb.Append("<br>");
                sb.Append("Admin");
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("This is an automated generated email please do not reply back on this email id.");
                sb.Append("<br>");
                sb.Append("</td>");
                sb.Append("</tr>");
                sb.Append("<tr>");
                sb.Append("</tr>");
                sb.Append("</table>");
                string results = WebConstents.SendEmailSMTP(contemail, "", "Approval from Ataljal", sb.ToString(), "");


                ABE.Entry(Dataa).State = EntityState.Modified;
                ABE.SaveChanges();
                return Json("Approved", JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json(" Not Approved", JsonRequestBehavior.AllowGet);
            }

        }

        [HttpPost]
        public ActionResult WSPHomeAdminRejected(string Data)
        {

            JavaScriptSerializer js = new JavaScriptSerializer();
            var result = js.Deserialize<Users>(Data);
            var UserId = Convert.ToInt32(result.UserId);
            var users = ABE.objUsers.Where(x => x.UserId == UserId).ToList();
            if (users.Count != 0)
            {
                var Dataa = users.LastOrDefault();
                Dataa.Verifiedornot = "True";
                string contemail = Dataa.Email.Trim();
                StringBuilder sb = new StringBuilder();
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("<table style='margin-left:50px;'>");
                sb.Append("<tr  style='width:300px'>");
                sb.Append("</tr>");
                sb.Append("<tr>");
                sb.Append("<b>Dear " + Dataa.UserName + ",</b>");
                sb.Append("</tr>");
                sb.Append("<tr style='width:300px'>");
                sb.Append("<td>");
                sb.Append("Your credential does not fulfil the login criteria.");
                sb.Append("<br>");

                sb.Append("<br>");
                sb.Append("Please contact the concerned (NPMU/SPMU/DPMU) administrator at xxx@gov.in for further details.");
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("Thank you");
                sb.Append("Administrator");
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("This is an automated generated email please do not reply back on this email id.");
                sb.Append("<br>");
                sb.Append("</td>");
                sb.Append("</tr>");
                sb.Append("<tr>");
                sb.Append("</tr>");
                sb.Append("</table>");
                string results = WebConstents.SendEmailSMTP(contemail, "", "Ataljal:Request you to Contact", sb.ToString(), "");

                ABE.Entry(Dataa).State = EntityState.Deleted;
                ABE.SaveChanges();
                return Json("Rejected", JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("Rejected", JsonRequestBehavior.AllowGet);
            }

        }

        [HttpPost]
        public ActionResult LoginPageSessionName(string Data)
        {

            JavaScriptSerializer js = new JavaScriptSerializer();
            var result = js.Deserialize<Users>(Data);
            var LoginPageSessionName = result.UserName;
            Session["LoginPageSessionName"] = LoginPageSessionName;
            return Json("Ok", JsonRequestBehavior.AllowGet);

        }

        [HttpPost]
        public ActionResult MisLogin(string Data)
        {
            try
            {
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<Users>(Data);
                //convert email to tolower
                var Email = result.Email.ToLower().Trim();
                var Tokeen = result.stateofficer_email.ToString();
                var users = ABE.objUsers.Where(x => x.Email == Email && x.Verifiedornot == "True").ToList();
                //var activestatus = users[0].isactive;
                //   string result11 = "";
                //if (users.Count != 0)
                //{
                //    var Epass_ = users[0].Password;
                //    UTF8Encoding encodepwd = new UTF8Encoding();
                //    Decoder Decode = encodepwd.GetDecoder();
                //    byte[] todecode_byte = Convert.FromBase64String(Epass_);
                //    int charCount = Decode.GetCharCount(todecode_byte, 0, todecode_byte.Length);
                //    char[] decoded_char = new char[charCount];
                //    Decode.GetChars(todecode_byte, 0, todecode_byte.Length, decoded_char, 0);
                //    result11 = new String(decoded_char);


                //}
                // if (activestatus == 0)//comparing concurrent logins...
                // {
                if (users.Count == 1 && Tokeen != "")
                {
                    //  var Info11 = Get_sessionstatus_active(users[0].Email, 0);// passing to update method to change isactive from 0 to 1...
                    var keyNew = users[0].CheckingCode;
                    var Test = result.Password;
                    var password = EncodePassword(Test, keyNew);
                    if (users[0].Password == password)
                    {
                        Session["Email"] = users[0].Email;
                        Session["Officer"] = users[0].NodalOfficer;
                        Session["UserName"] = users[0].UserName;
                        Session["UserId"] = users[0].UserId;
                        Session["gstate"] = users[0].StateName;
                        var LoginPageSessionName = result.DepartmentName.ToString();
                        if (LoginPageSessionName == "Gplevel_data")
                        {
                            var UserName = users[0].NodalOfficer;
                            if (UserName == "Admin" || UserName == "State Level Nodal Officer" || UserName == "National Level Nodal Officer")
                            {
                                var Str_ = "Gplevel_data";
                                var plainTextBytes = System.Text.Encoding.UTF8.GetBytes(Str_);
                                string ss = System.Convert.ToBase64String(plainTextBytes);
                                string Return_Value = Tokeen + "Ataljal" + ss;
                                return Json(new { json_return = Return_Value });
                                // return Json("Gplevel_data", JsonRequestBehavior.AllowGet);
                            }
                            else
                            {
                                var Str_ = "NOTNPMUState";
                                var plainTextBytes = System.Text.Encoding.UTF8.GetBytes(Str_);
                                string ss = System.Convert.ToBase64String(plainTextBytes);
                                string Return_Value = Tokeen + "Ataljal" + ss;
                                return Json(new { json_return = Return_Value });
                                // return Json("NOTNPMUState", JsonRequestBehavior.AllowGet);
                            }
                        }
                        else if (LoginPageSessionName == "frame_work_module")
                        {
                            var NodelOfficer1 = users[0].NodalOfficer;
                            if (NodelOfficer1 == "Admin")
                            {
                                var Str_ = LoginPageSessionName;
                                var plainTextBytes = System.Text.Encoding.UTF8.GetBytes(Str_);
                                string ss = System.Convert.ToBase64String(plainTextBytes);
                                string Return_Value = Tokeen + "Ataljal" + ss;
                                return Json(new { json_return = Return_Value });
                                // return Json(LoginPageSessionName, JsonRequestBehavior.AllowGet);

                            }
                            else if (NodelOfficer1 == "State Level Nodal Officer")
                            {
                                var Str_ = LoginPageSessionName;
                                var plainTextBytes = System.Text.Encoding.UTF8.GetBytes(Str_);
                                string ss = System.Convert.ToBase64String(plainTextBytes);
                                string Return_Value = Tokeen + "Ataljal" + ss;
                                return Json(new { json_return = Return_Value });
                                //   return Json(LoginPageSessionName, JsonRequestBehavior.AllowGet);
                            }
                            else
                            {
                                var Str_ = "Please Enter StateOfficer/ NPMU Officer Credentials";
                                var plainTextBytes = System.Text.Encoding.UTF8.GetBytes(Str_);
                                string ss = System.Convert.ToBase64String(plainTextBytes);
                                string Return_Value = Tokeen + "Ataljal" + ss;
                                return Json(new { json_return = Return_Value });

                                // return Json("Please Enter StateOfficer/ NPMU Officer Credentials", JsonRequestBehavior.AllowGet);
                            }
                        }
                        else if (LoginPageSessionName != "Financial_view" && LoginPageSessionName != "grm_module" && LoginPageSessionName != "WSP_HOME_tender")
                        {
                            Session["Email"] = users[0].Email;
                            Session["Officer"] = users[0].NodalOfficer;
                            Session["UserName"] = users[0].UserName;
                            Session["UserId"] = users[0].UserId;
                            Session["gstate"] = users[0].StateName;
                            if (users[0].DistrictName != "0")
                            {
                                Session["gdist"] = users[0].DistrictName;
                            }
                            else
                            {
                                Session["gdist"] = "";
                            }
                            if (users[0].BlockName != "0")
                            {
                                Session["gblock"] = users[0].BlockName;
                            }
                            else
                            {
                                Session["gblock"] = "";
                            }
                            if (users[0].GramPanchayatName != "0")
                            {
                                Session["ggram"] = users[0].GramPanchayatName;
                            }
                            else
                            {
                                Session["ggram"] = "";
                            }
                            if (users[0].Villagename != "0")
                            {
                                Session["gvill"] = users[0].Villagename;
                            }
                            else
                            {
                                Session["gvill"] = "";
                            }



                            if (Session["Officer"].ToString() == "Admin" || Session["Officer"].ToString() == "National Level Nodal Officer")
                            {
                                Session["Adminid"] = "0";
                            }


                            string[] Rolls = users[0].RollId.Split(',');

                            for (int z = 0; z < Rolls.Length; z++)
                            {
                                if (Rolls[z].ToString() == "1")
                                {
                                    Session["Admin"] = Rolls[z];
                                }
                            }

                            string id = "";
                            string id1 = "";
                            string id2 = "";
                            for (int k = 0; k < Rolls.Length; k++)
                            {
                                if (k == 0 && Rolls[k] != "")
                                {
                                    id = Rolls[k];
                                    Session["Roll"] = id;
                                }
                                if (k == 1 && Rolls[k] != "")
                                {
                                    id1 = Rolls[k];
                                    Session["Roll1"] = id1;
                                }
                                if (k == 2 && Rolls[k] != "")
                                {
                                    id2 = Rolls[k];
                                    Session["Roll2"] = id2;
                                }
                            }
                            var Str_ = LoginPageSessionName;
                            var plainTextBytes = System.Text.Encoding.UTF8.GetBytes(Str_);
                            string ss = System.Convert.ToBase64String(plainTextBytes);
                            string Return_Value = Tokeen + "Ataljal" + ss;
                            return Json(new { json_return = Return_Value });

                            //  return Json(LoginPageSessionName, JsonRequestBehavior.AllowGet);
                        }
                        else
                        {
                            if (users[0].DistrictName != "0")
                            {
                                var Str_ = "NotState";
                                var plainTextBytes = System.Text.Encoding.UTF8.GetBytes(Str_);
                                string ss = System.Convert.ToBase64String(plainTextBytes);
                                string Return_Value = Tokeen + "Ataljal" + ss;
                                return Json(new { json_return = Return_Value });
                                // return Json("NotState", JsonRequestBehavior.AllowGet);
                            }
                            else
                            {
                                Session["Email"] = users[0].Email;
                                Session["Officer"] = users[0].NodalOfficer;
                                Session["UserName"] = users[0].UserName;
                                Session["UserId"] = users[0].UserId;
                                Session["gstate"] = users[0].StateName;
                                Session["gdist"] = users[0].DistrictName;

                                Session["gblock"] = users[0].BlockName;
                                Session["ggram"] = users[0].GramPanchayatName;
                                Session["gvill"] = users[0].Villagename;
                                if (Session["Officer"].ToString() == "Admin" || Session["Officer"].ToString() == "National Level Nodal Officer")
                                {
                                    Session["Adminid"] = "0";
                                }


                                string[] Rolls = users[0].RollId.Split(',');

                                for (int z = 0; z < Rolls.Length; z++)
                                {
                                    if (Rolls[z].ToString() == "1")
                                    {
                                        Session["Admin"] = Rolls[z];
                                    }
                                }

                                string id = "";
                                string id1 = "";
                                string id2 = "";
                                for (int k = 0; k < Rolls.Length; k++)
                                {
                                    if (k == 0 && Rolls[k] != "")
                                    {
                                        id = Rolls[k];
                                        Session["Roll"] = id;
                                    }
                                    if (k == 1 && Rolls[k] != "")
                                    {
                                        id1 = Rolls[k];
                                        Session["Roll1"] = id1;
                                    }
                                    if (k == 2 && Rolls[k] != "")
                                    {
                                        id2 = Rolls[k];
                                        Session["Roll2"] = id2;
                                    }
                                }
                                var Str_ = LoginPageSessionName;
                                var plainTextBytes = System.Text.Encoding.UTF8.GetBytes(Str_);
                                string ss = System.Convert.ToBase64String(plainTextBytes);
                                string Return_Value = Tokeen + "Ataljal" + ss;
                                return Json(new { json_return = Return_Value });
                                // return Json(LoginPageSessionName, JsonRequestBehavior.AllowGet);
                            }
                        }


                    }
                    else
                    {
                        var Str_ = "Your Credentials not Matched";
                        var plainTextBytes = System.Text.Encoding.UTF8.GetBytes(Str_);
                        string ss = System.Convert.ToBase64String(plainTextBytes);
                        string Return_Value = Tokeen + "Ataljal" + ss;
                        return Json(new { json_return = Return_Value });
                        // return Json("Your Credentials not Matched", JsonRequestBehavior.AllowGet);
                    }
                }
                else
                {
                    if (users.Count == 0)
                    {
                        var Str_ = "Your Credentials not Matched";
                        var plainTextBytes = System.Text.Encoding.UTF8.GetBytes(Str_);
                        string ss = System.Convert.ToBase64String(plainTextBytes);
                        string Return_Value = Tokeen + "Ataljal" + ss;
                        return Json(new { json_return = Return_Value });
                    }
                    else
                    {
                        var Str_ = "Duplicate Data is there";
                        var plainTextBytes = System.Text.Encoding.UTF8.GetBytes(Str_);
                        string ss = System.Convert.ToBase64String(plainTextBytes);
                        string Return_Value = Tokeen + "Ataljal" + ss;
                        return Json(new { json_return = Return_Value });
                    }

                    //    return Json("Your Credentials not Matched", JsonRequestBehavior.AllowGet);
                }
                //}
                //else
                //{
                //    return Json("Multiple User is Not Allowed", JsonRequestBehavior.AllowGet);
                //}
            }
            catch (Exception ex)
            {
                var Str_ = ex.ToString();
                var plainTextBytes = System.Text.Encoding.UTF8.GetBytes(Str_);
                string ss = System.Convert.ToBase64String(plainTextBytes);
                string Return_Value = "Ataljal" + ss;
                return Json(new { json_return = Return_Value });
                //   return View(ex);
            }

        }
        //below method for concurrent logins 0=>1 isactive
        //public ActionResult Get_sessionstatus_active(string Email, int isactive)
        //{
        //    var activecode = isactive;
        //    var Email1 = Email;

        //    List<Users> users = ABE.objUsers.Where(x => x.isactive == activecode && x.Email == Email && x.Verifiedornot == "True").ToList();

        //    var User11 = users.SingleOrDefault();
        //    User11.isactive = 1;
        //    ABE.Entry(User11).State = EntityState.Modified;
        //    ABE.SaveChanges();
        //    return Json("activated code sucesss", JsonRequestBehavior.AllowGet);
        //}

        //[HttpPost]
        //public ActionResult MisLogin(string Data)
        //{
        //    try
        //    {
        //        JavaScriptSerializer js = new JavaScriptSerializer();
        //        var result = js.Deserialize<Users>(Data);
        //        var users = ABE.objUsers.Where(x => x.Email == result.Email.Trim() && x.Password == result.Password.Trim()).ToList();
        //        if (users.Count != 0)
        //        {

        //            var LoginPageSessionName = result.DepartmentName.ToString();

        //            if (LoginPageSessionName != "Financial_view" && LoginPageSessionName != "grm_module" && LoginPageSessionName != "WSP_HOME_tender")
        //            {
        //                Session["Email"] = users[0].Email;
        //                Session["Officer"] = users[0].NodalOfficer;
        //                Session["UserName"] = users[0].UserName;
        //                Session["UserId"] = users[0].UserId;
        //                Session["gstate"] = users[0].StateName;
        //                if (users[0].DistrictName != "0")
        //                {
        //                    Session["gdist"] = users[0].DistrictName;
        //                }
        //                else
        //                {
        //                    Session["gdist"] = "";
        //                }
        //                if (users[0].BlockName != "0")
        //                {
        //                    Session["gblock"] = users[0].BlockName;
        //                }
        //                else
        //                {
        //                    Session["gblock"] = "";
        //                }
        //                if (users[0].GramPanchayatName != "0")
        //                {
        //                    Session["ggram"] = users[0].GramPanchayatName;
        //                }
        //                else
        //                {
        //                    Session["ggram"] = "";
        //                }
        //                if (users[0].Villagename != "0")
        //                {
        //                    Session["gvill"] = users[0].Villagename;
        //                }
        //                else
        //                {
        //                    Session["gvill"] = "";
        //                }



        //                if (Session["Officer"].ToString() == "Admin" || Session["Officer"].ToString() == "National Level Nodal Officer")
        //                {
        //                    Session["Adminid"] = "0";
        //                }


        //                string[] Rolls = users[0].RollId.Split(',');

        //                for (int z = 0; z < Rolls.Length; z++)
        //                {
        //                    if (Rolls[z].ToString() == "1")
        //                    {
        //                        Session["Admin"] = Rolls[z];
        //                    }
        //                }

        //                string id = "";
        //                string id1 = "";
        //                string id2 = "";
        //                for (int k = 0; k < Rolls.Length; k++)
        //                {
        //                    if (k == 0 && Rolls[k] != "")
        //                    {
        //                        id = Rolls[k];
        //                        Session["Roll"] = id;
        //                    }
        //                    if (k == 1 && Rolls[k] != "")
        //                    {
        //                        id1 = Rolls[k];
        //                        Session["Roll1"] = id1;
        //                    }
        //                    if (k == 2 && Rolls[k] != "")
        //                    {
        //                        id2 = Rolls[k];
        //                        Session["Roll2"] = id2;
        //                    }
        //                }

        //                return Json(LoginPageSessionName, JsonRequestBehavior.AllowGet);
        //            }
        //            else
        //            {
        //                if (users[0].DistrictName != "0")
        //                {
        //                    return Json("NotState", JsonRequestBehavior.AllowGet);
        //                }
        //                else
        //                {
        //                    Session["Email"] = users[0].Email;
        //                    Session["Officer"] = users[0].NodalOfficer;
        //                    Session["UserName"] = users[0].UserName;
        //                    Session["UserId"] = users[0].UserId;
        //                    Session["gstate"] = users[0].StateName;
        //                    Session["gdist"] = users[0].DistrictName;

        //                    Session["gblock"] = users[0].BlockName;
        //                    Session["ggram"] = users[0].GramPanchayatName;
        //                    Session["gvill"] = users[0].Villagename;
        //                    if (Session["Officer"].ToString() == "Admin" || Session["Officer"].ToString() == "National Level Nodal Officer")
        //                    {
        //                        Session["Adminid"] = "0";
        //                    }


        //                    string[] Rolls = users[0].RollId.Split(',');

        //                    for (int z = 0; z < Rolls.Length; z++)
        //                    {
        //                        if (Rolls[z].ToString() == "1")
        //                        {
        //                            Session["Admin"] = Rolls[z];
        //                        }
        //                    }

        //                    string id = "";
        //                    string id1 = "";
        //                    string id2 = "";
        //                    for (int k = 0; k < Rolls.Length; k++)
        //                    {
        //                        if (k == 0 && Rolls[k] != "")
        //                        {
        //                            id = Rolls[k];
        //                            Session["Roll"] = id;
        //                        }
        //                        if (k == 1 && Rolls[k] != "")
        //                        {
        //                            id1 = Rolls[k];
        //                            Session["Roll1"] = id1;
        //                        }
        //                        if (k == 2 && Rolls[k] != "")
        //                        {
        //                            id2 = Rolls[k];
        //                            Session["Roll2"] = id2;
        //                        }
        //                    }

        //                    return Json(LoginPageSessionName, JsonRequestBehavior.AllowGet);
        //                }
        //            }


        //        }
        //        else
        //        {
        //            return Json("Your Credentials not Matched", JsonRequestBehavior.AllowGet);
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        return View(ex);
        //    }

        //}



        [HttpPost]
        public ActionResult MisSignUp(string Data)
        {
            try
            {

                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<Users>(Data);
                //var Email = result.Email.ToLower();
                var users = ABE.objUsers.Where(x => x.Email == result.Email.Trim()).ToList();

                if (users.Count == 1)
                {
                    var Dataa = ABE.objUsers.Where(x => x.Email == result.Email.Trim() && x.Verifiedornot == "False").ToList();
                    //var Dataa = ABE.objUsers.Where(x => x.Email == result.Email.Trim() && x.VerificationCode == "False" && x.isactive == 0).ToList();
                    if (Dataa.Count != 0)
                    {
                        return Json("Alredy registered, Officer Not Approved Your Account", JsonRequestBehavior.AllowGet);
                    }
                    else
                    {
                        return Json("Alredy registered", JsonRequestBehavior.AllowGet);
                    }

                }

                else
                {
                    if (users.Count == 0)
                    {

                        var Grampanchayat = "";
                        var StateName = "";
                        var DistName = "";
                        var BlockName = "";
                        if (result.GramPanchayatName != "" && result.GramPanchayatName != "0" && result.GramPanchayatName != null)
                        {

                            Grampanchayat = result.GramPanchayatName;
                            Session["ggram"] = Grampanchayat;
                        }
                        else
                        {
                            Session["ggram"] = "";
                        }
                        if (result.StateName != "" && result.StateName != "0" && result.StateName != null)
                        {

                            StateName = result.StateName;
                            Session["gstate"] = StateName;

                        }
                        else
                        {
                            Session["gstate"] = "";
                        }
                        if (result.DistrictName != "" && result.DistrictName != "0" && result.DistrictName != null)
                        {

                            DistName = result.DistrictName;
                            Session["gdist"] = DistName;

                        }
                        else
                        {
                            Session["gdist"] = "";
                        }

                        if (result.BlockName != "" && result.BlockName != "0" && result.BlockName != null)
                        {

                            BlockName = result.BlockName;
                            Session["gblock"] = BlockName;

                        }
                        else
                        {
                            Session["gblock"] = "";
                        }

                        Session["Email"] = result.Email;
                        Users newuser = new Users();
                        if (Grampanchayat != "" && StateName != "" && DistName != "" && BlockName != "")
                        {
                            var users132 = ABE.objUsers.Where(x => x.StateName == StateName && x.DistrictName == DistName && x.BlockName == BlockName && x.GramPanchayatName == Grampanchayat).ToList();
                            if (users132.Count != 0)
                            {
                                return Json("The GramPanchayat is Alreddy Registered", JsonRequestBehavior.AllowGet);
                            }
                        }

                        string Code = randomCodeGeneration();
                        string email1 = result.Email.ToLower().Trim();
                        string NodalOfficer_mail = result.NodalOfficer.ToLower().Trim();
                        string ContactNumber_mail = result.ContactNumber.ToLower().Trim();
                        string StateName_mail = result.StateName.ToLower().Trim();
                        string DepartmentName_mail = result.DepartmentName.ToLower().Trim();
                        string DistrictName_mail = result.DistrictName.ToLower().Trim();
                        string BlockName_mail = result.BlockName.ToLower().Trim();
                        string GramPanchayatName_mail = result.GramPanchayatName.ToLower().Trim();


                        string userName = result.UserName.ToLower().Trim();
                    A1:
                        Guid vid = Guid.NewGuid();
                        string viid = vid.ToString();
                        List<Users> existingcodes = ABE.objUsers.Where(x => x.VerificationCode == viid).ToList();
                        if (existingcodes.Count != 0)
                        {
                            goto A1;
                        }


                        string[] uuu = Request.Url.AbsoluteUri.Split('/');
                        string vertificatincode = uuu[0] + "//" + uuu[2] + "/Home/Verify?code=" + viid;



                        TempData["VerificationCode"] = vid.ToString();
                        TempData["Verifiedornot"] = "false";

                        var Officer11 = result.NodalOfficer;
                        var StateName1 = "";
                        if (Officer11 == "Admin")
                        {
                            StateName1 = "NPMU";
                        }
                        else if (Officer11 == "National Level Nodal Officer")
                        {
                            StateName1 = "NPMU";
                        }
                        else if (Officer11 == "State Level Nodal Officer")
                        {
                            StateName1 = "NPMU";
                        }
                        else
                        {
                            StateName1 = result.StateName;
                        }


                        var Data123 = ABE.obj_abhy_stateofficer_regs.Where(x => x.state_name == StateName1).ToList();
                        string contemail_user = email1;
                        // string contemail = Data123[0].stateofficer_mailid;
                        string contemail = Data123[0].stateofficer_mailid;


                        StringBuilder sb = new StringBuilder();
                        sb.Append("<br>");
                        sb.Append("<br>");
                        sb.Append("<table style='margin-left:50px;'>");
                        sb.Append("<tr  style='width:300px'>");
                        sb.Append("</tr>");
                        sb.Append("<tr style='width:300px'>");

                        sb.Append("<td>");
                        sb.Append("<b>Greetings!!!</b>");
                        sb.Append("<br>");
                        sb.Append("</td>");
                        sb.Append("<br>");
                        sb.Append("</tr>");
                        sb.Append("<br>");
                        sb.Append("<br>");
                        sb.Append("<br>");
                        sb.Append("<tr  style='width:300px'>");

                        sb.Append("<td>");

                        sb.Append("<h4>");
                        sb.Append("Thank you for furnishing your details in Atal Jal MIS.");
                        sb.Append("<br>");
                        sb.Append("You will be intimated once your registration is approved.");
                        sb.Append("</h4>");
                        sb.Append("</td>");
                        sb.Append("</tr>");
                        sb.Append("<br>");
                        sb.Append("<br>");
                        sb.Append("<br>");
                        sb.Append("<tr  style='width:300px'>");

                        sb.Append("<td>");


                        /*width = 50 height = 31 border = 0 alt = Click title = Click ></ a >*/

                        sb.Append("</td>");
                        sb.Append("<tr  style='width:300px'>");

                        sb.Append("<td>");
                        sb.Append("<br>");


                        sb.Append("Regards");
                        sb.Append("<br>");
                        sb.Append("MIS Team");
                        sb.Append("</td>");
                        sb.Append("</tr>");
                        sb.Append("<tr>");
                        sb.Append("</tr>");
                        sb.Append("</table>");
                        string results = WebConstents.SendEmailSMTP(contemail, "", "Atal Jal MIS acknowledgement", sb.ToString(), "");

                        string Approved = uuu[0] + "//" + uuu[2] + "/Home/MIS_Registration_Aprroved?code=" + viid;
                        //string GrievancePending = uuu[0] + "//" + uuu[2] + "/Grievance/GrievancePending?code=" + sth;
                        string Decline = uuu[0] + "//" + uuu[2] + "/Home/MIS_Registration_Decline?code=" + viid;

                        StringBuilder sb1 = new StringBuilder();
                        sb1.Append("<br>");
                        sb1.Append("<br>");
                        sb1.Append("<body style='background:#dfdfdf;'>");
                        sb1.Append("<div style='border: 1px solid green; padding:25px;'>");

                        sb1.Append("<div>");
                        sb1.Append("<b>Kindly approve Atal Jal MIS new registration after authenticating the details as below.</b>");
                        sb1.Append("<br>");
                        sb1.Append("<b>User Name:  " + userName + ",</b>");
                        sb1.Append("</div>");
                        sb1.Append("<br>");
                        sb1.Append("<br>");
                        sb1.Append("<br>");

                        sb1.Append("<table role='presentation' style='margin-left:50px;border: 1px solid black;border-collapse: collapse; padding:5px 10px'>");
                        sb1.Append("<tbody>");
                        sb1.Append("</tr>");
                        sb1.Append("<th style='border: 1px solid black;border-collapse: collapse;text-align: left; text-transform: capitalize; padding:5px 10px'>");
                        sb1.Append("<b> <span style='color:#337ab7'> Nodel officer : </span> " + NodalOfficer_mail + "</b>");
                        sb1.Append("</th>");
                        sb1.Append("<th style='border: 1px solid black;border-collapse: collapse; text-align: left; text-transform: capitalize;  padding:5px 10px'>");
                        sb1.Append("<b>  <span style='color:#337ab7'>State : </span>" + StateName_mail + "</b>");
                        sb1.Append("</th>");
                        sb1.Append("</tr >");

                        sb1.Append("<tr>");
                        sb1.Append("<th style='border: 1px solid black;border-collapse: collapse; text-align: left; text-transform: capitalize;  padding:5px 10px'>");
                        sb1.Append("<b> <span style='color:#337ab7'> District :</span> " + DistrictName_mail + "</b>");
                        sb1.Append("</th>");
                        sb1.Append("<th style='border: 1px solid black;border-collapse: collapse; text-align: left; text-transform: capitalize;  padding:5px 10px'>");
                        sb1.Append("<b><span style='color:#337ab7'> Block :</span> " + BlockName_mail + "</b>");
                        sb1.Append("</th>");
                        sb1.Append("</tr >");

                        sb1.Append("<tr >");

                        sb1.Append("<th style='border: 1px solid black;border-collapse: collapse; text-align: left; text-transform: capitalize;  padding:5px 10px'>");
                        sb1.Append("<b> <span style='color:#337ab7'>Gram Panchayat : </span> " + GramPanchayatName_mail + "</b>");
                        sb1.Append("</th>");
                        sb1.Append("<th style='border: 1px solid black;border-collapse: collapse; text-align: left; text-transform: capitalize;  padding:5px 10px'>");
                        sb1.Append("<b> <span style='color:#337ab7'>Email :</span> " + email1 + "</b>");
                        sb1.Append("</th>");
                        sb1.Append("</tr >");

                        sb1.Append("<tr >");

                        sb1.Append("<th style='border: 1px solid black;border-collapse: collapse; text-align: left; text-transform: capitalize;  padding:5px 10px'>");
                        sb1.Append("<b> <span style='color:#337ab7'> Department Name : </span> " + DepartmentName_mail + "</b>");
                        sb1.Append("</th>");
                        sb1.Append("<th style='border: 1px solid black;border-collapse: collapse; text-align: left; text-transform: capitalize;  padding:5px 10px'>");
                        sb1.Append("<b> <span style='color:#337ab7'> Contact Number : </span> " + ContactNumber_mail + "</b>");
                        sb1.Append("</th>");
                        sb1.Append("</tr >");




                        /*width = 50 height = 31 border = 0 alt = Click title = Click ></ a >*/
                        sb1.Append("<br>");
                        sb1.Append("<br>");
                        sb1.Append("</tr>");
                        sb1.Append("</tbody >");


                        sb1.Append("</table>");
                        //sb.Append("<h4>");
                        //  sb.Append("Thanks for getting started with Ataljal! We need a little more information to complete your registration, including confirmation of your email address. Click on Register button to confirm your email address:");
                        //sb.Append("</h4>");
                        sb1.Append("<br>");
                        sb1.Append($"<a href='{Approved}' class='btn btn-primary' style='background-color:#5cb85c; display:inline-block; font-family: sans-serif; font-size: 15px; line-height: 15px; text-decoration: none; padding: 13px 17px; color: #ffffff; border-radius: 4px;margin-right: 10px;'>Approve</a>");

                        sb1.Append($"<a href='{Decline}' class=' btn btn-danger' style='background-color:#f0ad4e; display:inline-block; font-family: sans-serif; font-size: 15px; line-height: 15px; text-decoration: none; padding: 13px 17px; color: #ffffff; border-radius: 4px;'>Decline</a>");

                        sb1.Append("<br>");

                        //  sb.Append("Note: Never Share Your Credentials With Others!");
                        // sb.Append("<br>");
                        sb1.Append("<br>");
                        sb1.Append("<br>");
                        //sb.Append("<img src=https://img1.wsimg.com/isteam/ip/c7009415-e7fa-45c8-b5e4-cbb576963468/logo/5a843789-34b8-41ac-8a9c-2fdb06ce0b89.png/:/rs=h:150/qt=q:95 width='300px'>");

                        sb1.Append("</body>");
                        sb1.Append("</div>");
                        sb1.Append("<br>");
                        sb1.Append("<br>");
                        sb1.Append("Regards");
                        sb1.Append("<br>");
                        sb1.Append("MIS Team");

                        string results1 = WebConstents.SendEmailSMTP(contemail, "", "New registration request", sb1.ToString(), "");

                        if (results1 == "success")
                        {
                            ViewBag.Error = "Activation Link sent to registered email id!";

                            Users NewUser = new Users();
                            NewUser.VerificationCode = vid.ToString().Trim();
                            NewUser.Verifiedornot = "False".Trim();
                            NewUser.UserName = result.UserName.ToString().Trim();
                            NewUser.ContactNumber = result.ContactNumber.ToString().Trim();
                            //kept tolower to email 
                            NewUser.Email = result.Email.ToLower().ToString();
                            NewUser.DepartmentName = result.DepartmentName.ToString().Trim();
                            //Encription Code

                            var Test = result.Password.ToString().Trim();
                            var keyNew = GeneratePassword(10);
                            var password = EncodePassword(Test, keyNew);

                            NewUser.Password = password;
                            NewUser.CheckingCode = keyNew;
                            NewUser.Villagename = Test;
                            //--End
                            NewUser.NodalOfficer = result.NodalOfficer.ToString().Trim();
                            NewUser.RollId = "3".Trim();
                            // NewUser.isactive = 0;

                            if (result.GramPanchayatName != "" && result.GramPanchayatName != null && result.GramPanchayatName != "0")
                            {

                                NewUser.GramPanchayatName = result.GramPanchayatName;
                                Session["ggram"] = Grampanchayat;
                            }
                            else
                            {
                                NewUser.GramPanchayatName = "";
                                Session["ggram"] = "";
                            }
                            if (result.StateName != "" && result.StateName != null && result.StateName != "0")
                            {

                                NewUser.StateName = result.StateName;
                                Session["gstate"] = StateName;

                            }
                            else
                            {

                                NewUser.StateName = "";
                                Session["gstate"] = "";
                            }
                            if (result.DistrictName != "" && result.DistrictName != null && result.DistrictName != "0")
                            {

                                NewUser.DistrictName = result.DistrictName;
                                Session["gdist"] = DistName;

                            }
                            else
                            {
                                NewUser.DistrictName = "";
                                Session["gdist"] = "";
                            }

                            if (result.BlockName != "" && result.BlockName != null && result.BlockName != "0")
                            {

                                NewUser.BlockName = result.BlockName;
                                Session["gblock"] = BlockName;

                            }
                            else
                            {
                                NewUser.BlockName = "";
                                Session["gblock"] = "";
                            }

                            //  NewUser.stateofficer_email = contemail;
                            NewUser.VerificationCode = vid.ToString().Trim();
                            NewUser.Verifiedornot = "False";
                            ABE.objUsers.Add(NewUser);

                            Abhy_Verifications objver = new Abhy_Verifications();
                            objver.verification_code = vid.ToString().Trim();

                            ABE.objAbhy_Verifications.Add(objver);
                            ABE.SaveChanges();

                            return Json("Please Check Your Registered Mail for Registration", JsonRequestBehavior.AllowGet);
                        }
                        else
                        {
                            return Json("Failed Mail", JsonRequestBehavior.AllowGet);
                        }




                    }
                    else
                    {
                        return Json("Duplicate Data is there");
                    }



                }



            }
            catch (Exception ex)
            {
                return Json(ex);
            }
        }


        public ActionResult MIS_Registration_Aprroved_MIS(string code)
        {
            string vcode = code.Trim();
            string Officer = "";
            List<Abhy_Verifications> Details = ABE.objAbhy_Verifications.Where(x => x.verification_code == vcode).ToList();

            List<Users> users = ABE.objUsers.Where(x => x.VerificationCode == vcode).ToList();

            var Email1 = "";
            var StateName = "";
            if (users.Count != 0)
            {
                if (users[0].Verifiedornot == "True")
                {
                    return RedirectToAction("WSP_GWM_HOME", "WspNew");
                }
                if (users[0].NodalOfficer == "National Level Nodal Officer")
                {
                    StateName = "NPMU";
                }
                else if (users[0].NodalOfficer == "State Level Nodal Officer")
                {
                    StateName = "NPMU";

                }
                else
                {
                    StateName = users[0].StateName;

                }
                var Details11 = ABE.obj_abhy_stateofficer_regs.Where(x => x.state_name == StateName).ToList();
                Email1 = Details11[0].stateofficer_mailid;
            }


            if (Details.Count != 0 && users.Count != 0)
            {
                var Dataa = ABE.obj_abhy_stateofficer_regs.Where(x => x.stateofficer_mailid == Email1).ToList();

                string Email = "";
                string PassWord = "";

                var OfficerName = Dataa[0].state_name;

                var User_Name = "";
                if (users.Count != 0)
                {
                    var User11 = users.SingleOrDefault();
                    User11.Verifiedornot = "True";
                    User_Name = User11.UserName;
                    Email = User11.Email;
                    User11.approved_by = Dataa[0].state_name;
                    ABE.Entry(User11).State = EntityState.Modified;

                    ABE.SaveChanges();

                    var Epass_ = User11.Password;
                    //System.Text.UTF8Encoding encoder = new System.Text.UTF8Encoding();
                    //System.Text.Decoder utf8Decode = encoder.GetDecoder();
                    //byte[] todecode_byte = Convert.FromBase64String(Epass_);
                    //int charCount = utf8Decode.GetCharCount(todecode_byte, 0, todecode_byte.Length);
                    //char[] decoded_char = new char[charCount];
                    //utf8Decode.GetChars(todecode_byte, 0, todecode_byte.Length, decoded_char, 0);
                    PassWord = Epass_;
                }
                if (Dataa[0].state_name == "NPMU")
                {
                    Officer = "National Level Nodal Officer";
                }
                else
                {
                    Officer = "State Level Nodal Officer";
                }

                string Mail_Subject = users[0].NodalOfficer + " credential verified and approved for MIS under ATAL BHUJAL YOJANA";

                StringBuilder sb = new StringBuilder();
                sb.Append("<p>Dear Sir/Madam,</p>");
                sb.Append("<br>");
                sb.Append("<p>Your registered credentials for <b> " + users[0].NodalOfficer + " </b> has been verified and approved by the <b>" + Officer + "</b>. Now you can login to MIS with the below-mentioned credentials.</p>");
                sb.Append("<p><b>Credential is:-</b></p>");
                sb.Append("<p><b>Email ID: " + users[0].Email + "</b></p>");
                sb.Append("<p><b>Password: " + users[0].Villagename + "</b></p>");
                sb.Append("<br>");
                sb.Append("<img src='" + path + "' border='0' style='margin-top: 5px; width: 100px; height: 100px; margin-left: 5px; margin-bottom: 5px;'>");

                string results = WebConstents.SendEmailSMTP(Email, "", Mail_Subject, sb.ToString(), "");


                //Sending Admin Mail
                string Mail_Subject1 = "Atal Jal MIS registration approved";

                sb.Clear();
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("<table style='margin-left:50px;'>");
                sb.Append("<tr  style='width:300px'>");
                sb.Append("</tr>");
                sb.Append("<tr style='width:300px'>");

                sb.Append("<td>");
                sb.Append("<b>Greetings!!!</b>");
                sb.Append("<br>");
                sb.Append("</td>");
                sb.Append("<br>");
                sb.Append("</tr>");
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("<tr  style='width:300px'>");

                sb.Append("<td>");

                sb.Append("<h4>");
                sb.Append(User_Name + " Successfully approved this Credentials.");
                sb.Append("<br>");
                //sb.Append("Your registration has been approved. ");
                sb.Append("</h4>");
                sb.Append("</td>");
                sb.Append("</tr>");
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("<tr  style='width:300px'>");

                sb.Append("<td>");

                // sb.Append("Please find below your Login Credentials ");
                sb.Append("<br>");
                sb.Append("<br>");
                // sb.Append("Email:  " + Email);
                sb.Append("<br>");
                // sb.Append("Password:  " + PassWord);
                sb.Append("</td>");
                sb.Append("<tr  style='width:300px'>");

                sb.Append("<td>");
                sb.Append("<br>");

                sb.Append("<br>");

                sb.Append("Regards");
                sb.Append("<br>");
                sb.Append("MIS Team");
                sb.Append("</td>");
                sb.Append("</tr>");
                sb.Append("<tr>");
                sb.Append("</tr>");
                sb.Append("</table>");
                string results1 = WebConstents.SendEmailSMTP(Email1, "", Mail_Subject1, sb.ToString(), "");
                return RedirectToAction("WSP_GWM_HOME", "WspNew");
            }
            else
            {
                return RedirectToAction("WSP_GWM_HOME", "WspNew");
            }

        }

        public ActionResult MIS_Registration_Decline_MIS(string code)
        {
            string vcode = code.Trim();
            string Officer = "";
            List<Abhy_Verifications> Details = ABE.objAbhy_Verifications.Where(x => x.verification_code == vcode).ToList();

            List<Users> users = ABE.objUsers.Where(x => x.VerificationCode == vcode).ToList();
            var Email1 = "";

            var StateName = "";
            if (users.Count != 0)
            {

                if (users[0].NodalOfficer == "National Level Nodal Officer")
                {
                    StateName = "NPMU";
                }
                else if (users[0].NodalOfficer == "State Level Nodal Officer")
                {
                    StateName = "NPMU";

                }
                else
                {
                    StateName = users[0].StateName;

                }
                var Details11 = ABE.obj_abhy_stateofficer_regs.Where(x => x.state_name == StateName).ToList();
                Email1 = Details11[0].stateofficer_mailid;
            }
            if (Details.Count != 0 && users.Count != 0)
            {
                var Dataa = ABE.obj_abhy_stateofficer_regs.Where(x => x.stateofficer_mailid == Email1).ToList();

                string Email = "";
                //string PassWord = "";

                var OfficerName = Dataa[0].state_name;

                var User_Name = "";
                if (users.Count != 0)
                {
                    var User11 = users.SingleOrDefault();
                    User11.Verifiedornot = "False";
                    Email = User11.Email;
                    User_Name = User11.UserName;
                    ABE.Entry(User11).State = EntityState.Modified;

                    ABE.SaveChanges();
                }
                if (Dataa[0].state_name == "NPMU")
                {
                    Officer = "National Level Nodal Officer";
                }
                else
                {
                    Officer = "State Level Nodal Officer";
                }

                string Mail_Subject = users[0].NodalOfficer + " credential rejected for MIS under ATAL BHUJAL YOJANA";


                StringBuilder sb = new StringBuilder();
                sb.Append("<p>Dear Sir/Madam,</p>");
                sb.Append("<br>");
                sb.Append("<p>Your registered credentials for <b>" + users[0].NodalOfficer + "</b> has been rejected by the <b> " + Officer + " </b>. If you have any queries, please contact your <b> " + Officer + " </b>.</p>");
                sb.Append("<br>");
                sb.Append("<img src='" + path + "' border='0' style='margin-top: 5px; width: 100px; height: 100px; margin-left: 5px; margin-bottom: 5px;'>");

                string results1 = WebConstents.SendEmailSMTP(Email, "", Mail_Subject, sb.ToString(), "");




                //Sending Admin Mail
                string Mail_Subject1 = "Atal Jal MIS registration declined";
                sb.Clear();
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("<table style='margin-left:50px;'>");
                sb.Append("<tr  style='width:300px'>");
                sb.Append("</tr>");
                sb.Append("<tr style='width:300px'>");

                sb.Append("<td>");
                sb.Append("<b>Greetings!!!</b>");
                sb.Append("<br>");
                sb.Append("</td>");
                sb.Append("<br>");
                sb.Append("</tr>");
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("<tr  style='width:300px'>");

                sb.Append("<td>");

                sb.Append("<h4>");
                sb.Append(User_Name + " Successfully Decline this Credentials.");
                sb.Append("<br>");
                //sb.Append("Your registration has been approved. ");
                sb.Append("</h4>");
                sb.Append("</td>");
                sb.Append("</tr>");
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("<tr  style='width:300px'>");

                sb.Append("<td>");

                // sb.Append("Please find below your Login Credentials ");
                sb.Append("<br>");
                sb.Append("<br>");
                // sb.Append("Email:  " + Email);
                sb.Append("<br>");
                // sb.Append("Password:  " + PassWord);
                sb.Append("</td>");
                sb.Append("<tr  style='width:300px'>");

                sb.Append("<td>");
                sb.Append("<br>");

                sb.Append("<br>");

                sb.Append("Regards");
                sb.Append("<br>");
                sb.Append("MIS Team");
                sb.Append("</td>");
                sb.Append("</tr>");
                sb.Append("<tr>");
                sb.Append("</tr>");
                sb.Append("</table>");
                string results = WebConstents.SendEmailSMTP(Email1, "", Mail_Subject1, sb.ToString(), "");
                return RedirectToAction("Index", "Home");
            }
            else
            {
                return RedirectToAction("Index", "Home");
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

        public ActionResult APP_MIS_Registration_Aprroved(string code)
        {
            string vcode = code.Trim();

            List<users> Details = AJE.obj_users.Where(x => x.email == vcode).ToList();

            string Email = code;
            string PassWord = "";

            var Email1 = "";
            var StateName1 = "";

            if (Details.Count == 1)
            {
                for (var i = 1; i < Details.Count; i++)
                {
                    var SS1 = Details[i];
                    AJE.Entry(SS1).State = EntityState.Deleted;

                    AJE.SaveChanges();
                }

                if (Details[0].verification == "true")
                {

                    var logs_table1 = new userlogs();
                    string ipAddress1 = Request.ServerVariables["HTTP_X_FORWARDED_FOR"];
                    if (string.IsNullOrEmpty(ipAddress1))
                    {
                        ipAddress1 = Request.ServerVariables["REMOTE_ADDR"];
                    }
                    logs_table1.actionperformed = "Atal Jal Mobile APP registration approved";
                    logs_table1.ipaddress = ipAddress1;
                    logs_table1.status = "User Details Alredy Approved";
                    logs_table1.userid = Email;

                    logs_table1.dateandtime = Set_Date_Mobile(DateTime.Today.ToString());

                    AJE.obj_userlogs.Add(logs_table1);
                    AJE.SaveChanges();
                    return RedirectToAction("WSP_GWM_HOME", "WspNew");
                }
                if (Details[0].nodalofficer == "National Level Nodal Officer")
                {
                    StateName1 = "NPMU";
                }
                else if (Details[0].nodalofficer == "State Level Nodal Officer")
                {
                    StateName1 = "NPMU";

                }
                else
                {
                    StateName1 = Details[0].statename;

                }

                var Details11 = ABE.obj_abhy_stateofficer_regs.Where(x => x.state_name == StateName1).ToList();
                Email1 = Details11[0].stateofficer_mailid;


                Email = Details[0].email;
                PassWord = Details[0].password;

                var User11 = Details.SingleOrDefault();
                User11.verification = "true";

                var User_Name = User11.username;
                AJE.Entry(User11).State = EntityState.Modified;

                AJE.SaveChanges();
                string Mail_Subject = "Atal Jal  Mobile App registration approved";


                StringBuilder sb = new StringBuilder();
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("<table style='margin-left:50px;'>");
                sb.Append("<tr  style='width:300px'>");
                sb.Append("</tr>");
                sb.Append("<tr style='width:300px'>");

                sb.Append("<td>");
                sb.Append("<b>Greetings!!!</b>");
                sb.Append("<br>");
                sb.Append("</td>");
                sb.Append("<br>");
                sb.Append("</tr>");
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("<tr  style='width:300px'>");

                sb.Append("<td>");

                sb.Append("<h4>");
                sb.Append("Thank you for registering in Atal Jal  Mobile App.");
                sb.Append("<br>");
                sb.Append("Your registration has been approved. ");
                sb.Append("</h4>");
                sb.Append("</td>");
                sb.Append("</tr>");
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("<tr  style='width:300px'>");

                sb.Append("<td>");

                sb.Append("Please find below your Login Credentials ");
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("Email:  " + Email);
                sb.Append("<br>");
                //  sb.Append("Password:  " + PassWord);
                sb.Append("</td>");
                sb.Append("<tr  style='width:300px'>");

                sb.Append("<td>");
                sb.Append("<br>");

                sb.Append("<br>");

                sb.Append("Regards");
                sb.Append("<br>");
                sb.Append("MIS Team");
                sb.Append("</td>");
                sb.Append("</tr>");
                sb.Append("<tr>");
                sb.Append("</tr>");
                sb.Append("</table>");
                string results1 = WebConstents.SendEmailSMTP(Email, "", Mail_Subject, sb.ToString(), "");


                // Admin Sending Mail

                //Sending Admin Mail
                string Mail_Subject1 = "Atal Jal MIS registration approved";


                StringBuilder sb1 = new StringBuilder();
                sb1.Append("<br>");
                sb1.Append("<br>");
                sb1.Append("<table style='margin-left:50px;'>");
                sb1.Append("<tr  style='width:300px'>");
                sb1.Append("</tr>");
                sb1.Append("<tr style='width:300px'>");

                sb1.Append("<td>");
                sb1.Append("<b>Greetings!!!</b>");
                sb1.Append("<br>");
                sb1.Append("</td>");
                sb1.Append("<br>");
                sb1.Append("</tr>");
                sb1.Append("<br>");
                sb1.Append("<br>");
                sb1.Append("<br>");
                sb1.Append("<tr  style='width:300px'>");

                sb1.Append("<td>");

                sb1.Append("<h4>");
                sb1.Append(User_Name + " Successfully approved this Credentials.");
                sb1.Append("<br>");
                //sb.Append("Your registration has been approved. ");
                sb1.Append("</h4>");
                sb1.Append("</td>");
                sb1.Append("</tr>");
                sb1.Append("<br>");
                sb1.Append("<br>");
                sb1.Append("<br>");
                sb1.Append("<tr  style='width:300px'>");

                sb1.Append("<td>");

                // sb.Append("Please find below your Login Credentials ");
                sb1.Append("<br>");
                sb1.Append("<br>");
                // sb.Append("Email:  " + Email);
                sb1.Append("<br>");
                // sb.Append("Password:  " + PassWord);
                sb1.Append("</td>");
                sb1.Append("<tr  style='width:300px'>");

                sb1.Append("<td>");
                sb1.Append("<br>");

                sb1.Append("<br>");

                sb1.Append("Regards");
                sb1.Append("<br>");
                sb1.Append("MIS Team");
                sb1.Append("</td>");
                sb1.Append("</tr>");
                sb1.Append("<tr>");
                sb1.Append("</tr>");
                sb1.Append("</table>");

                string results = WebConstents.SendEmailSMTP(Email1, "", Mail_Subject1, sb1.ToString(), "");




                var logs_table = new userlogs();
                string ipAddress = Request.ServerVariables["HTTP_X_FORWARDED_FOR"];
                if (string.IsNullOrEmpty(ipAddress))
                {
                    ipAddress = Request.ServerVariables["REMOTE_ADDR"];
                }
                logs_table.actionperformed = "Atal Jal Mobile App registration approved";
                logs_table.ipaddress = ipAddress;
                logs_table.status = "Approved Successufully";
                logs_table.userid = Email;
                logs_table.dateandtime = Set_Date_Mobile(DateTime.Today.ToString());

                AJE.obj_userlogs.Add(logs_table);
                AJE.SaveChanges();
                return RedirectToAction("WSP_GWM_HOME", "WspNew");
            }
            else
            {
                if (Details.Count == 0)
                {
                    var logs_table = new userlogs();
                    string ipAddress = Request.ServerVariables["HTTP_X_FORWARDED_FOR"];
                    if (string.IsNullOrEmpty(ipAddress))
                    {
                        ipAddress = Request.ServerVariables["REMOTE_ADDR"];
                    }
                    logs_table.actionperformed = "Atal Jal Mobile APP registration approved";
                    logs_table.ipaddress = ipAddress;
                    logs_table.status = "User Details Not Matched";
                    logs_table.userid = Email;
                    logs_table.dateandtime = Set_Date_Mobile(DateTime.Today.ToString());

                    AJE.obj_userlogs.Add(logs_table);
                    AJE.SaveChanges();
                    return RedirectToAction("WSP_GWM_HOME", "WspNew");
                }
                else
                {
                    var logs_table = new userlogs();
                    string ipAddress = Request.ServerVariables["HTTP_X_FORWARDED_FOR"];
                    if (string.IsNullOrEmpty(ipAddress))
                    {
                        ipAddress = Request.ServerVariables["REMOTE_ADDR"];
                    }
                    logs_table.actionperformed = "Atal Jal Mobile APP registration approved";
                    logs_table.ipaddress = ipAddress;
                    logs_table.status = "Duplicate Data is there";
                    logs_table.userid = Email;
                    logs_table.dateandtime = Set_Date_Mobile(DateTime.Today.ToString());

                    AJE.obj_userlogs.Add(logs_table);
                    AJE.SaveChanges();
                    return RedirectToAction("WSP_GWM_HOME", "WspNew");

                }

            }

        }

        public ActionResult APP_MIS_Registration_Decline(string code)
        {
            string vcode = code.Trim();

            var Email = code;

            List<users> Details = AJE.obj_users.Where(x => x.email == vcode).ToList();

            var Email1 = "";
            var StateName1 = "";


            if (Details.Count == 1)
            {

                if (Details[0].nodalofficer == "National Level Nodal Officer")
                {
                    StateName1 = "NPMU";
                }
                else if (Details[0].nodalofficer == "State Level Nodal Officer")
                {
                    StateName1 = "NPMU";

                }
                else
                {
                    StateName1 = Details[0].statename;

                }

                var Details11 = ABE.obj_abhy_stateofficer_regs.Where(x => x.state_name == StateName1).ToList();
                Email1 = Details11[0].stateofficer_mailid;


                var User11 = Details.SingleOrDefault();
                User11.verification = "false";
                var User_Name = User11.username;
                AJE.Entry(User11).State = EntityState.Modified;

                AJE.SaveChanges();


                string Mail_Subject = "Atal Jal MIS registration declined";

                StringBuilder sb = new StringBuilder();
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("<table style='margin-left:50px;'>");
                sb.Append("<tr  style='width:300px'>");
                sb.Append("</tr>");
                sb.Append("<tr style='width:300px'>");
                sb.Append("<td>");
                sb.Append("<b>Greetings!!!</b>");
                sb.Append("<br>");
                sb.Append("</td>");
                sb.Append("<br>");
                sb.Append("</tr>");
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("<tr  style='width:300px'>");
                sb.Append("<td>");
                sb.Append("<h4>");
                sb.Append("Thank you for registering to  Mobile App.");
                sb.Append("<br>");
                sb.Append("Your registration has been declined. Kindly try to register again after verifying your details with the concern competent authority.");
                sb.Append("</h4>");
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
                sb.Append("Regards");
                sb.Append("<br>");
                sb.Append("MIS Team");
                sb.Append("</td>");
                sb.Append("</tr>");
                sb.Append("<tr>");
                sb.Append("</tr>");
                sb.Append("</table>");

                string results = WebConstents.SendEmailSMTP(Email1, "", Mail_Subject, sb.ToString(), "");





                // Admin Sending Mail

                //Sending Admin Mail
                string Mail_Subject1 = "Atal Jal MIS registration Decline";
                sb.Clear();
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("<table style='margin-left:50px;'>");
                sb.Append("<tr  style='width:300px'>");
                sb.Append("</tr>");
                sb.Append("<tr style='width:300px'>");

                sb.Append("<td>");
                sb.Append("<b>Greetings!!!</b>");
                sb.Append("<br>");
                sb.Append("</td>");
                sb.Append("<br>");
                sb.Append("</tr>");
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("<tr  style='width:300px'>");

                sb.Append("<td>");

                sb.Append("<h4>");
                sb.Append(User_Name + " Successfully decline this Credentials.");
                sb.Append("<br>");
                //sb.Append("Your registration has been approved. ");
                sb.Append("</h4>");
                sb.Append("</td>");
                sb.Append("</tr>");
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("<tr  style='width:300px'>");

                sb.Append("<td>");

                // sb.Append("Please find below your Login Credentials ");
                sb.Append("<br>");
                sb.Append("<br>");
                // sb.Append("Email:  " + Email);
                sb.Append("<br>");
                // sb.Append("Password:  " + PassWord);
                sb.Append("</td>");
                sb.Append("<tr  style='width:300px'>");

                sb.Append("<td>");
                sb.Append("<br>");

                sb.Append("<br>");

                sb.Append("Regards");
                sb.Append("<br>");
                sb.Append("MIS Team");
                sb.Append("</td>");
                sb.Append("</tr>");
                sb.Append("<tr>");
                sb.Append("</tr>");
                sb.Append("</table>");
                string results1 = WebConstents.SendEmailSMTP(Email1, "", Mail_Subject1, sb.ToString(), "");

                var logs_table = new userlogs();
                string ipAddress = Request.ServerVariables["HTTP_X_FORWARDED_FOR"];
                if (string.IsNullOrEmpty(ipAddress))
                {
                    ipAddress = Request.ServerVariables["REMOTE_ADDR"];
                }
                logs_table.actionperformed = "Atal Jal Mobile APP registration decline";
                logs_table.ipaddress = ipAddress;
                logs_table.status = "Decline Successufully";
                logs_table.userid = Email;
                logs_table.dateandtime = Set_Date_Mobile(DateTime.Today.ToString());

                AJE.obj_userlogs.Add(logs_table);
                AJE.SaveChanges();
                return RedirectToAction("Index", "Home");
            }
            else
            {
                if (Details.Count == 0)
                {
                    var logs_table = new userlogs();
                    string ipAddress = Request.ServerVariables["HTTP_X_FORWARDED_FOR"];
                    if (string.IsNullOrEmpty(ipAddress))
                    {
                        ipAddress = Request.ServerVariables["REMOTE_ADDR"];
                    }
                    logs_table.actionperformed = "Atal Jal Mobile APP registration decline";
                    logs_table.ipaddress = ipAddress;
                    logs_table.status = "User Details Not Matched";
                    logs_table.userid = Email;
                    logs_table.dateandtime = Set_Date_Mobile(DateTime.Today.ToString());

                    AJE.obj_userlogs.Add(logs_table);
                    AJE.SaveChanges();
                    return RedirectToAction("Index", "Home");
                }
                else
                {
                    var logs_table = new userlogs();
                    string ipAddress = Request.ServerVariables["HTTP_X_FORWARDED_FOR"];
                    if (string.IsNullOrEmpty(ipAddress))
                    {
                        ipAddress = Request.ServerVariables["REMOTE_ADDR"];
                    }
                    logs_table.actionperformed = "Atal Jal Mobile APP registration decline";
                    logs_table.ipaddress = ipAddress;
                    logs_table.status = "Duplicate Data is there";
                    logs_table.userid = Email;
                    logs_table.dateandtime = Set_Date_Mobile(DateTime.Today.ToString());

                    AJE.obj_userlogs.Add(logs_table);
                    AJE.SaveChanges();
                    return RedirectToAction("Index", "Home");
                }

            }


        }

        public string APP_Registration_mail(string Data)
        {
            string vcode = Data.Trim();
            var IDd = Data.Split(',');
            var Users11 = AJE.obj_users.ToList();
            var Emaill = IDd[1].Trim();
            var users = AJE.obj_users.Where(x => x.email == Emaill).ToList();

            string result11 = "";
            if (users.Count == 1)
            {

                //result11 = users[0].password;

                Session["Email"] = IDd[1];
                Users newuser = new Users();
                string email1 = IDd[1].ToLower().Trim();
                string NodalOfficer_mail = IDd[2].ToLower().Trim();
                string ContactNumber_mail = IDd[3].ToLower().Trim();

                string StateName_mail = "";
                if (IDd[5] != "0")
                {
                    StateName_mail = IDd[5].ToLower().Trim();
                }

                string DepartmentName_mail = IDd[9].ToLower().Trim();
                string DistrictName_mail = "";
                if (IDd[6] != "0")
                {
                    DistrictName_mail = IDd[6].ToLower().Trim();
                }
                string BlockName_mail = "";
                if (IDd[7] != "0")
                {
                    BlockName_mail = IDd[7].ToLower().Trim();
                }
                string GramPanchayatName_mail = "";

                if (IDd[8] != "0")
                {
                    GramPanchayatName_mail = IDd[8].ToLower().Trim();
                }
                string userName = IDd[4].ToLower().Trim();
            A1:
                Guid vid = Guid.NewGuid();
                string viid = vid.ToString();
                List<Users> existingcodes = ABE.objUsers.Where(x => x.VerificationCode == viid).ToList();
                if (existingcodes.Count != 0)
                {
                    goto A1;
                }


                string[] uuu = Request.Url.AbsoluteUri.Split('/');


                TempData["VerificationCode"] = vid.ToString();
                TempData["Verifiedornot"] = "false";

                var Officer11 = IDd[2];
                var StateName1 = "";
                if (Officer11 == "NPMU")
                {
                    StateName1 = "NPMU";
                }
                //else if (Officer11 == "National Level Nodal Officer")
                //{
                //    StateName1 = "NPMU";
                //}
                //else if (Officer11 == "State Level Nodal Officer")
                //{
                //    StateName1 = "NPMU";
                //}
                else
                {
                    StateName1 = IDd[5];
                }

                var Data123 = ABE.obj_abhy_stateofficer_regs.Where(x => x.state_name == StateName1).ToList();
                string contemail_user = email1;
                string contemail = Data123[0].stateofficer_mailid;

                // string contemail = "venkat.chigurupati11@gmail.com";

                StringBuilder sb = new StringBuilder();
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("<table style='margin-left:50px;'>");
                sb.Append("<tr  style='width:300px'>");
                sb.Append("</tr>");
                sb.Append("<tr style='width:300px'>");

                sb.Append("<td>");
                sb.Append("<b>Greetings!!!</b>");
                sb.Append("<br>");
                sb.Append("</td>");
                sb.Append("<br>");
                sb.Append("</tr>");
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("<tr  style='width:300px'>");

                sb.Append("<td>");

                sb.Append("<h4>");
                sb.Append("Thank you for furnishing your details in Atal Jal  Mobile App.");
                sb.Append("<br>");
                sb.Append("You will be intimated once your registration is approved.");
                sb.Append("</h4>");
                sb.Append("</td>");
                sb.Append("</tr>");
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("<tr  style='width:300px'>");

                sb.Append("<td>");


                /*width = 50 height = 31 border = 0 alt = Click title = Click ></ a >*/

                sb.Append("</td>");
                sb.Append("<tr  style='width:300px'>");

                sb.Append("<td>");
                sb.Append("<br>");


                sb.Append("Regards");
                sb.Append("<br>");
                sb.Append("MIS Team");
                sb.Append("</td>");
                sb.Append("</tr>");
                sb.Append("<tr>");
                sb.Append("</tr>");
                sb.Append("</table>");
                string results1 = WebConstents.SendEmailSMTP(contemail_user, "", "Atal Jal  Mobile App acknowledgement", sb.ToString(), "");

                string Approved = uuu[0] + "//" + uuu[2] + "/Home/APP_MIS_Registration_Aprroved?code=" + contemail_user;
                //string GrievancePending = uuu[0] + "//" + uuu[2] + "/Grievance/GrievancePending?code=" + sth;
                string Decline = uuu[0] + "//" + uuu[2] + "/Home/APP_MIS_Registration_Decline?code=" + contemail_user;

                sb.Clear();
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("<body style='background:#dfdfdf;'>");
                sb.Append("<div style='border: 1px solid green; padding:25px;'>");

                sb.Append("<div>");
                sb.Append("<b>Kindly approve Atal Jal Mobile App new registration after authenticating the details as below.</b>");
                sb.Append("<br>");
                sb.Append("<b>User Name:  " + userName + ",</b>");
                sb.Append("</div>");
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("<br>");

                sb.Append("<table style='margin-left:50px;border: 1px solid black;border-collapse: collapse; padding:5px 10px'>");
                sb.Append("<tbody>");
                sb.Append("</tr>");
                sb.Append("<th style='border: 1px solid black;border-collapse: collapse;text-align: left; text-transform: capitalize; padding:5px 10px'>");
                sb.Append("<b> <span style='color:#337ab7'> Nodel officer : </span> " + NodalOfficer_mail + "</b>");
                sb.Append("</th>");
                sb.Append("<th style='border: 1px solid black;border-collapse: collapse; text-align: left; text-transform: capitalize;  padding:5px 10px'>");
                sb.Append("<b>  <span style='color:#337ab7'>State : </span>" + StateName_mail + "</b>");
                sb.Append("</th>");
                sb.Append("</tr >");

                sb.Append("<tr>");
                sb.Append("<th style='border: 1px solid black;border-collapse: collapse; text-align: left; text-transform: capitalize;  padding:5px 10px'>");
                sb.Append("<b> <span style='color:#337ab7'> District :</span> " + DistrictName_mail + "</b>");
                sb.Append("</th>");
                sb.Append("<th style='border: 1px solid black;border-collapse: collapse; text-align: left; text-transform: capitalize;  padding:5px 10px'>");
                sb.Append("<b><span style='color:#337ab7'> Block :</span> " + BlockName_mail + "</b>");
                sb.Append("</th>");
                sb.Append("</tr >");

                sb.Append("<tr >");

                sb.Append("<th style='border: 1px solid black;border-collapse: collapse; text-align: left; text-transform: capitalize;  padding:5px 10px'>");
                sb.Append("<b> <span style='color:#337ab7'>Gram Panchayat : </span> " + GramPanchayatName_mail + "</b>");
                sb.Append("</th>");
                sb.Append("<th style='border: 1px solid black;border-collapse: collapse; text-align: left; text-transform: capitalize;  padding:5px 10px'>");
                sb.Append("<b> <span style='color:#337ab7'>Email :</span> " + email1 + "</b>");
                sb.Append("</th>");
                sb.Append("</tr >");

                sb.Append("<tr >");

                sb.Append("<th style='border: 1px solid black;border-collapse: collapse; text-align: left; text-transform: capitalize;  padding:5px 10px'>");
                sb.Append("<b> <span style='color:#337ab7'> Department Name : </span> " + DepartmentName_mail + "</b>");
                sb.Append("</th>");
                sb.Append("<th style='border: 1px solid black;border-collapse: collapse; text-align: left; text-transform: capitalize;  padding:5px 10px'>");
                sb.Append("<b> <span style='color:#337ab7'> Contact Number : </span> " + ContactNumber_mail + "</b>");
                sb.Append("</th>");
                sb.Append("</tr >");
                sb.Append("</tbody >");
                sb.Append("</table>");
                //sb.Append("<h4>");
                //  sb.Append("Thanks for getting started with Ataljal! We need a little more information to complete your registration, including confirmation of your email address. Click on Register button to confirm your email address:");
                //sb.Append("</h4>");

                sb.Append("<br>");
                sb.Append($"<a href='{Approved}' class='btn btn-primary' style='background-color:#5cb85c; display:inline-block; font-family: sans-serif; font-size: 15px; line-height: 15px; text-decoration: none; padding: 13px 17px; color: #ffffff; border-radius: 4px;margin-right: 10px;'>Approve</a>");

                sb.Append($"<a href='{Decline}' class=' btn btn-danger' style='background-color:#f0ad4e; display:inline-block; font-family: sans-serif; font-size: 15px; line-height: 15px; text-decoration: none; padding: 13px 17px; color: #ffffff; border-radius: 4px;'>Decline</a>");

                sb.Append("<br>");

                //  sb.Append("Note: Never Share Your Credentials With Others!");
                // sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("<br>");
                //  sb.Append("Note: Never Share Your Credentials With Others!");
                // sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("<br>");
                //sb.Append("<img src=https://img1.wsimg.com/isteam/ip/c7009415-e7fa-45c8-b5e4-cbb576963468/logo/5a843789-34b8-41ac-8a9c-2fdb06ce0b89.png/:/rs=h:150/qt=q:95 width='300px'>");

                sb.Append("</body>");
                sb.Append("</div>");
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("Regards");
                sb.Append("<br>");
                sb.Append("MIS Team");

                string results = WebConstents.SendEmailSMTP(contemail, "", "New registration request", sb.ToString(), "");
                return "Please Check Your Registered Mail for Registration";
            }
            else
            {
                if (users.Count == 0)
                {
                    return "Invalid Email";
                }
                else
                {
                    return "Duplicate data is there";
                }

            }
        }
        public ActionResult Verify(string code)
        {
            try
            {
                string vcode = code.Trim();
                List<Abhy_Verifications> ver = ABE.objAbhy_Verifications.Where(x => x.verification_code == vcode).ToList();


                if (ver.Count == 1)
                {
                    List<Users> users = ABE.objUsers.Where(x => x.VerificationCode == vcode).ToList();

                    if (users.Count != 0)
                    {

                        users[0].Verifiedornot = "True";
                        //ABE.Entry(Data1).State = EntityState.Deleted;
                        ABE.SaveChanges();
                    }
                    return RedirectToAction("WSP_GWM_HOME", "WspNew");


                }
                else
                {
                    if (ver.Count == 0)
                    {
                        ViewBag.Error = "Your Verification Code is Expired ";
                        return View("WSP_GWM_HOME", "WspNew");
                    }
                    else
                    {
                        ViewBag.Error = "Duplicate data is there ";
                        return View("WSP_GWM_HOME", "WspNew");
                    }

                }
            }

            catch (Exception ex)
            {
                return RedirectToAction("WSP_GWM_HOME", "WspNew");
            }

        }

        public ActionResult MIS_Registration_Aprroved(string code)
        {
            string vcode = code.Trim();

            List<Abhy_Verifications> Details = ABE.objAbhy_Verifications.Where(x => x.verification_code == vcode).ToList();

            List<Users> users = ABE.objUsers.Where(x => x.VerificationCode == vcode).ToList();

            var Email1 = "";
            var StateName = "";
            if (users.Count != 0)
            {
                if (users[0].Verifiedornot == "True")
                {
                    return RedirectToAction("WSP_GWM_HOME", "WspNew");
                }
                if (users[0].NodalOfficer == "National Level Nodal Officer")
                {
                    StateName = "NPMU";
                }
                else if (users[0].NodalOfficer == "State Level Nodal Officer")
                {
                    StateName = "NPMU";

                }
                else
                {
                    StateName = users[0].StateName;

                }
                var Details11 = ABE.obj_abhy_stateofficer_regs.Where(x => x.state_name == StateName).ToList();
                Email1 = Details11[0].stateofficer_mailid;
            }


            if (Details.Count != 0 && users.Count != 0)
            {
                var Dataa = ABE.obj_abhy_stateofficer_regs.Where(x => x.stateofficer_mailid == Email1).ToList();

                string Email = "";
                string PassWord = "";

                var OfficerName = Dataa[0].state_name;

                var User_Name = "";
                if (users.Count != 0)
                {
                    var User11 = users.SingleOrDefault();
                    User11.Verifiedornot = "True";
                    User_Name = User11.UserName;
                    Email = User11.Email;
                    ABE.Entry(User11).State = EntityState.Modified;

                    ABE.SaveChanges();

                    var Epass_ = User11.Password;
                    //System.Text.UTF8Encoding encoder = new System.Text.UTF8Encoding();
                    //System.Text.Decoder utf8Decode = encoder.GetDecoder();
                    //byte[] todecode_byte = Convert.FromBase64String(Epass_);
                    //int charCount = utf8Decode.GetCharCount(todecode_byte, 0, todecode_byte.Length);
                    //char[] decoded_char = new char[charCount];
                    //utf8Decode.GetChars(todecode_byte, 0, todecode_byte.Length, decoded_char, 0);
                    PassWord = Epass_;
                }


                string Mail_Subject = "Atal Jal MIS registration approved";

                StringBuilder sb = new StringBuilder();
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("<table style='margin-left:50px;'>");
                sb.Append("<tr  style='width:300px'>");
                sb.Append("</tr>");
                sb.Append("<tr style='width:300px'>");

                sb.Append("<td>");
                sb.Append("<b>Greetings!!!</b>");
                sb.Append("<br>");
                sb.Append("</td>");
                sb.Append("<br>");
                sb.Append("</tr>");
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("<tr  style='width:300px'>");

                sb.Append("<td>");

                sb.Append("<h4>");
                sb.Append("Thank you for registering in Atal Jal MIS.");
                sb.Append("<br>");
                sb.Append("Your registration has been approved. ");
                sb.Append("</h4>");
                sb.Append("</td>");
                sb.Append("</tr>");
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("<tr  style='width:300px'>");

                sb.Append("<td>");

                sb.Append("Please find below your Login Credentials ");
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("Email:  " + Email);
                sb.Append("<br>");
                //   sb.Append("Password:  " + PassWord);
                sb.Append("</td>");
                sb.Append("<tr  style='width:300px'>");

                sb.Append("<td>");
                sb.Append("<br>");

                sb.Append("<br>");

                sb.Append("Regards");
                sb.Append("<br>");
                sb.Append("MIS Team");
                sb.Append("</td>");
                sb.Append("</tr>");
                sb.Append("<tr>");
                sb.Append("</tr>");
                sb.Append("</table>");
                string results = WebConstents.SendEmailSMTP(Email, "", Mail_Subject, sb.ToString(), "");


                //Sending Admin Mail
                string Mail_Subject1 = "Atal Jal MIS registration approved";

                sb.Clear();
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("<table style='margin-left:50px;'>");
                sb.Append("<tr  style='width:300px'>");
                sb.Append("</tr>");
                sb.Append("<tr style='width:300px'>");

                sb.Append("<td>");
                sb.Append("<b>Greetings!!!</b>");
                sb.Append("<br>");
                sb.Append("</td>");
                sb.Append("<br>");
                sb.Append("</tr>");
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("<tr  style='width:300px'>");

                sb.Append("<td>");

                sb.Append("<h4>");
                sb.Append(User_Name + " Successfully approved this Credentials.");
                sb.Append("<br>");
                //sb.Append("Your registration has been approved. ");
                sb.Append("</h4>");
                sb.Append("</td>");
                sb.Append("</tr>");
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("<tr  style='width:300px'>");

                sb.Append("<td>");

                // sb.Append("Please find below your Login Credentials ");
                sb.Append("<br>");
                sb.Append("<br>");
                // sb.Append("Email:  " + Email);
                sb.Append("<br>");
                // sb.Append("Password:  " + PassWord);
                sb.Append("</td>");
                sb.Append("<tr  style='width:300px'>");

                sb.Append("<td>");
                sb.Append("<br>");

                sb.Append("<br>");

                sb.Append("Regards");
                sb.Append("<br>");
                sb.Append("MIS Team");
                sb.Append("</td>");
                sb.Append("</tr>");
                sb.Append("<tr>");
                sb.Append("</tr>");
                sb.Append("</table>");
                string results1 = WebConstents.SendEmailSMTP(Email1, "", Mail_Subject1, sb.ToString(), "");
                return RedirectToAction("WSP_GWM_HOME", "WspNew");
            }
            else
            {
                return RedirectToAction("WSP_GWM_HOME", "WspNew");
            }

        }

        public ActionResult MIS_Registration_Decline(string code)
        {
            string vcode = code.Trim();

            List<Abhy_Verifications> Details = ABE.objAbhy_Verifications.Where(x => x.verification_code == vcode).ToList();

            List<Users> users = ABE.objUsers.Where(x => x.VerificationCode == vcode).ToList();
            var Email1 = "";

            var StateName = "";
            if (users.Count != 0)
            {

                if (users[0].NodalOfficer == "National Level Nodal Officer")
                {
                    StateName = "NPMU";
                }
                else if (users[0].NodalOfficer == "State Level Nodal Officer")
                {
                    StateName = "NPMU";

                }
                else
                {
                    StateName = users[0].StateName;

                }
                var Details11 = ABE.obj_abhy_stateofficer_regs.Where(x => x.state_name == StateName).ToList();
                Email1 = Details11[0].stateofficer_mailid;
            }
            if (Details.Count != 0 && users.Count != 0)
            {
                var Dataa = ABE.obj_abhy_stateofficer_regs.Where(x => x.stateofficer_mailid == Email1).ToList();

                string Email = "";
                //string PassWord = "";

                var OfficerName = Dataa[0].state_name;

                var User_Name = "";
                if (users.Count != 0)
                {
                    var User11 = users.SingleOrDefault();
                    User11.Verifiedornot = "False";
                    Email = User11.Email;
                    User_Name = User11.UserName;
                    ABE.Entry(User11).State = EntityState.Modified;

                    ABE.SaveChanges();
                }


                string Mail_Subject = "Atal Jal MIS registration declined";


                StringBuilder sb = new StringBuilder();
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("<table style='margin-left:50px;'>");
                sb.Append("<tr  style='width:300px'>");
                sb.Append("</tr>");
                sb.Append("<tr style='width:300px'>");
                sb.Append("<td>");
                sb.Append("<b>Greetings!!!</b>");
                sb.Append("<br>");
                sb.Append("</td>");
                sb.Append("<br>");
                sb.Append("</tr>");
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("<tr  style='width:300px'>");
                sb.Append("<td>");
                sb.Append("<h4>");
                sb.Append("Thank you for registering to MIS.");
                sb.Append("<br>");
                sb.Append("Your registration has been declined. Kindly try to register again after verifying your details with the concern competent authority.");
                sb.Append("</h4>");
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
                sb.Append("Regards");
                sb.Append("<br>");
                sb.Append("MIS Team");
                sb.Append("</td>");
                sb.Append("</tr>");
                sb.Append("<tr>");
                sb.Append("</tr>");
                sb.Append("</table>");
                string results1 = WebConstents.SendEmailSMTP(Email, "", Mail_Subject, sb.ToString(), "");




                //Sending Admin Mail
                string Mail_Subject1 = "Atal Jal MIS registration declined";
                sb.Clear();
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("<table style='margin-left:50px;'>");
                sb.Append("<tr  style='width:300px'>");
                sb.Append("</tr>");
                sb.Append("<tr style='width:300px'>");

                sb.Append("<td>");
                sb.Append("<b>Greetings!!!</b>");
                sb.Append("<br>");
                sb.Append("</td>");
                sb.Append("<br>");
                sb.Append("</tr>");
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("<tr  style='width:300px'>");

                sb.Append("<td>");

                sb.Append("<h4>");
                sb.Append(User_Name + " Successfully Decline this Credentials.");
                sb.Append("<br>");
                //sb.Append("Your registration has been approved. ");
                sb.Append("</h4>");
                sb.Append("</td>");
                sb.Append("</tr>");
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("<tr  style='width:300px'>");

                sb.Append("<td>");

                // sb.Append("Please find below your Login Credentials ");
                sb.Append("<br>");
                sb.Append("<br>");
                // sb.Append("Email:  " + Email);
                sb.Append("<br>");
                // sb.Append("Password:  " + PassWord);
                sb.Append("</td>");
                sb.Append("<tr  style='width:300px'>");

                sb.Append("<td>");
                sb.Append("<br>");

                sb.Append("<br>");

                sb.Append("Regards");
                sb.Append("<br>");
                sb.Append("MIS Team");
                sb.Append("</td>");
                sb.Append("</tr>");
                sb.Append("<tr>");
                sb.Append("</tr>");
                sb.Append("</table>");
                string results = WebConstents.SendEmailSMTP(Email1, "", Mail_Subject1, sb.ToString(), "");
                return RedirectToAction("Index", "Home");
            }
            else
            {
                return RedirectToAction("Index", "Home");
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

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }
        [HttpGet]
        public ActionResult Contact()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }
        [HttpPost]
        public ActionResult Contact(string UserName, string Email, string Message, string MobileNumber, string Subject, string clientCaptcha)
        {
            string contemail = "atal-jal@gov.in";

            if (Session["ContactCaptcha"] != null)
            {
                if (Session["ContactCaptcha"].ToString() != clientCaptcha)
                {
                    return Json("Captcha is Not Matched");
                }
            }
            else
            {
                return Json("Your Captcha is Expired");
            }
            string ipAddress1 = Request.ServerVariables["HTTP_X_FORWARDED_FOR"];

            if (string.IsNullOrEmpty(ipAddress1))
            {
                ipAddress1 = Request.ServerVariables["REMOTE_ADDR"];
            }
            feedback_count obj = new feedback_count();
            DateTime now = DateTime.Now;
            var DataCheck = ABE.obj_feedback_count.Where(x => x.ip_address == ipAddress1).FirstOrDefault();
            if (DataCheck != null)
            {
                var LastAttempts = DateTime.Parse(DataCheck.entry_date);
                if (DataCheck.count > 2)
                {
                    if ((now - LastAttempts).TotalHours <= 24)
                    {
                        return Json("You have exceeded the maximum enquiry attempts");
                    }
                    else
                    {
                        ABE.Entry(DataCheck).State = EntityState.Deleted;
                        ABE.SaveChanges();

                        obj.ip_address = ipAddress1;
                        obj.count = 1;
                        obj.entry_date = now.ToString();
                        ABE.obj_feedback_count.Add(obj);
                        ABE.SaveChanges();
                    }
                }
                else
                {
                    DataCheck.count += 1;
                    DataCheck.entry_date = now.ToString();
                    ABE.Entry(DataCheck).State = EntityState.Modified;
                    ABE.SaveChanges();
                }
            }
            else
            {
                obj.ip_address = ipAddress1;
                obj.count = 1;
                obj.entry_date = now.ToString();
                ABE.obj_feedback_count.Add(obj);
                ABE.SaveChanges();
            }


            StringBuilder sb = new StringBuilder();
            sb.Append("Dear Sir/Madam,");
            sb.Append("<br>");
            sb.Append("<br>");

            sb.Append("<table style='margin-left:50px;'>");
            sb.Append("<tr style='width:300px'>");
            sb.Append("<td>");
            sb.Append("Name :" + UserName);
            sb.Append("</td>");
            sb.Append("</tr>");

            sb.Append("<tr style='width:300px'>");
            sb.Append("<td>");
            sb.Append("Email Id :" + Email);
            sb.Append("</td>");
            sb.Append("</tr>");

            sb.Append("<tr style='width:300px'>");
            sb.Append("<td>");
            sb.Append("Mobile Number :" + MobileNumber);
            sb.Append("</td>");
            sb.Append("</tr>");

            sb.Append("<tr style='width:300px'>");
            sb.Append("<td>");
            sb.Append("Description :" + Message);
            sb.Append("</td>");
            sb.Append("</tr>");




            sb.Append("<br>");
            sb.Append("<br>");

            sb.Append("<tr style='width:300px'>");
            sb.Append("<td>");
            sb.Append("Thank You");
            sb.Append("</td>");
            sb.Append("</tr>");

            //sb.Append("<tr style='width:300px'>");
            //sb.Append("<td>");
            //sb.Append("Atal Bhujal Yojana");
            //sb.Append("</td>");
            //sb.Append("</tr>");
            sb.Append("</table>");
            string sub = "Enquire for " + Subject;
            //string body = "Dear Sir/Madam," + "\r\n" + "\n" + "Name:" + UserName + "," + "\r\nEmail:" + Email + "," + "," + "\r\n Mobile Number:" + MobileNumber + "," + "\r\nDescription:" + Message;

            string results = WebConstents.SendEmailSMTP(contemail, "", sub, sb.ToString(), "");

            return Json("Your request has been saved successfully!", JsonRequestBehavior.AllowGet);
            //return View("Contact");
        }

        public ActionResult Homepage()
        {
            return View();
        }
        public ActionResult AdminPanel()
        {
            return View();

        }
        public ActionResult SiteMAp()
        {
            return View();
        }
        public ActionResult FAQs()
        {
            return View();
        }
        public ActionResult Privacy_Policy()
        {
            return View();
        }
        public ActionResult MobilePrivacy()
        {
            return View();
        }
        public ActionResult Terms_Conditions()
        {
            return View();
        }
        public ActionResult More_news()
        {
            return View();
        }
        public ActionResult More_news_hi()
        {
            return View();
        }
        public ActionResult Login_tender_wsp()
        {
            return View();
        }

        [HttpPost]

        public ActionResult Location_map_Image_Uplaod(HttpPostedFileBase Location_map_Image_Uplaod, string state_name, string district_name, string block_name, string gpname)
        {

            Session["Images_Upload"] = "";
            var response = "";
            var userid = Convert.ToInt32(Session["UserId"]);
            var State = state_name;
            var Dist = district_name;
            var Block = block_name;
            var Gram = gpname;
            var Details = ABE.obj_abhy_gram_images.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();
            var Obj = new abhy_gram_images();
            string _imgname = string.Empty;
            Malicious_File_Upload_Restriction obj_Validate = new Malicious_File_Upload_Restriction();
            string allowed_file_format = "jpg,png,jpeg";
            bool flag = obj_Validate.CheckValidFile(Location_map_Image_Uplaod, allowed_file_format);
            if (flag == false)
            {
                response = "Your Upload file has Not valid File, Please Upload proper file";
                //return RedirectToAction("WSPgram", "Wsp_new");
                //return Json("Your Upload file has Not valid File, Please Upload proper file", JsonRequestBehavior.AllowGet);
            }
            if (Details.Count == 1)
            {
                var Data = Details.SingleOrDefault();
                if (Location_map_Image_Uplaod != null)
                {
                    if (Location_map_Image_Uplaod.FileName != null)
                    {
                        //string path = @"D:\Ataljal_grievnce\";
                        //path = path + Location_map_Image_Uplaod.FileName;
                        //string[] count = Location_map_Image_Uplaod.FileName.Split('.');
                        //if (count.Length != 2)
                        //{
                        //    Session["Images_Upload"] = "Your Upload file has Double Extention, Please Upload proper file";
                        //    //return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                        //    return RedirectToAction("WSPgram", "Wsp_new");
                        //}
                        //else
                        //{
                        //    Location_map_Image_Uplaod.SaveAs(path);
                        //    // File_path = path.Replace("D:\\Ataljal_grievnce\\", "http://54.221.131.231:8014/ataljalimages/");
                        //    var File_path = path.Replace("D:\\Ataljal_grievnce\\", "~/Ataljalimages/");
                        //    Data.gpimage1 = File_path;
                        //    Data.gpimage1_filename = Location_map_Image_Uplaod.FileName;

                        //    ABE.Entry(Data).State = EntityState.Modified;
                        //    ABE.SaveChanges();
                        //    Session["Images_Upload"] = "Location Map Image Upload Sussessfully";
                        //}
                        string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                        string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");
                        string Add_dt = DateTime.Now.ToString();
                        if (Add_dt.Contains('-') || Add_dt.Contains('/') || Add_dt.Contains(' ') || Add_dt.Contains(':'))
                        {
                            //Add_dt = Regex.Replace(Add_dt, @"(\[|""|\-])", "");
                            Add_dt = Add_dt.Replace(@"\", string.Empty);
                            Add_dt = Add_dt.Replace(@"/", string.Empty);
                            Add_dt = Add_dt.Replace(@"-", string.Empty);
                            Add_dt = Add_dt.Replace(@" ", string.Empty);
                            Add_dt = Add_dt.Replace(@":", string.Empty);
                        }
                        if (!Directory.Exists(path))
                        {
                            Directory.CreateDirectory(path);
                        }
                        string[] Ext = Location_map_Image_Uplaod.FileName.Split('.');

                        //path = path + Location_map_Image_Uplaod.FileName;
                        path = path + Ext[0] + "_" + Add_dt + "." + Ext[1];
                        string[] count = Location_map_Image_Uplaod.FileName.Split('.');
                        if (count.Length != 2)
                        {
                            //Session["Images_Upload"] = "Your Upload file has Double Extention, Please Upload proper file";
                            response = "Your Upload file has Double Extention, Please Upload proper file";
                            //return RedirectToAction("WSPgram", "Wsp_new");
                        }
                        else
                        {
                            Location_map_Image_Uplaod.SaveAs(path);
                            var File_path = "/Ataljalimages/" + (Ext[0] + "_" + Add_dt + "." + Ext[1]).ToString();
                            Data.gpimage1 = File_path;
                            Data.gpimage1_filename = (Ext[0] + "_" + Add_dt + "." + Ext[1]).ToString();
                            //Data.gpimage1_filename = Location_map_Image_Uplaod.FileName;

                            ABE.Entry(Data).State = EntityState.Modified;
                            ABE.SaveChanges();
                            //Session["Images_Upload"] = "Location Map Image Upload Sussessfully";
                            response = "Location Map Image Upload Sussessfully";
                        }


                    }
                }


            }
            else
            {
                if (Details.Count == 0)
                {
                    Obj.block_name = Block;
                    Obj.district_name = Dist;
                    Obj.gpname = Gram;
                    Obj.state_name = State;
                    Obj.userid = userid;
                    if (Location_map_Image_Uplaod != null)
                    {
                        if (Location_map_Image_Uplaod.FileName != null)
                        {

                            //string path = @"D:\Ataljal_grievnce\";
                            string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                            string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");
                            path = path + Location_map_Image_Uplaod.FileName;
                            string[] count = Location_map_Image_Uplaod.FileName.Split('.');
                            if (count.Length != 2)
                            {
                                //Session["Images_Upload"] = "Your Upload file has Double Extention, Please Upload proper file";
                                response = "Your Upload file has Double Extention, Please Upload proper file";
                                // return RedirectToAction("WSPgram", "Wsp_new");
                            }
                            else
                            {
                                Location_map_Image_Uplaod.SaveAs(path);
                                // File_path = path.Replace("D:\\Ataljal_grievnce\\", "http://54.221.131.231:8014/ataljalimages/");
                                var File_path = "/Ataljalimages/" + Location_map_Image_Uplaod.FileName;
                                Obj.gpimage1 = File_path;
                                Obj.gpimage1_filename = Location_map_Image_Uplaod.FileName;
                                var TodayDate1 = DateTime.Now.ToString();
                                var Datea = TodayDate1.Split('/', ' ', '-');
                                var Today1 = Datea[1] + '/' + Datea[0] + '/' + Datea[2];
                                Obj.datetime = Today1;
                                ABE.obj_abhy_gram_images.Add(Obj);
                                ABE.SaveChanges();
                                response = "Location Map Image Upload Sussessfully";
                            }
                        }
                    }

                }
                else
                {
                    response = "Duplicate Data is there";
                    //return Json("Duplicate Data is there", JsonRequestBehavior.AllowGet);
                    //return RedirectToAction("WSPgram", "Wsp_new");

                }
            }
            //return RedirectToAction("WSPgram", "Wsp_new");
            return Json(response);

        }



        [HttpPost]

        public ActionResult Watershed_map_Image_Uplaod(HttpPostedFileBase Watershed_map_Image_Uplaod, string state_name, string district_name, string block_name, string gpname)
        {
            var response = "";
            Session["Images_Upload"] = "";
            var userid = Convert.ToInt32(Session["UserId"]);
            var State = state_name;
            var Dist = district_name;
            var Block = block_name;
            var Gram = gpname;
            var Details = ABE.obj_abhy_gram_images.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();
            var Obj = new abhy_gram_images();

            string _imgname = string.Empty;
            Malicious_File_Upload_Restriction obj_Validate = new Malicious_File_Upload_Restriction();
            string allowed_file_format = "jpg,png,jpeg";
            bool flag = obj_Validate.CheckValidFile(Watershed_map_Image_Uplaod, allowed_file_format);
            if (flag == false)
            {
                //Session["Images_Upload"] = "Your Upload file has Not valid File, Please Upload proper file";
                //return RedirectToAction("WSPgram", "Wsp_new");
                response = "Your Upload file has Not valid File, Please Upload proper file";
            }
            if (Watershed_map_Image_Uplaod != null)
            {
                if (Details.Count == 1)
                {
                    var Data = Details.SingleOrDefault();

                    string Add_dt = DateTime.Now.ToString();
                    if (Add_dt.Contains('-') || Add_dt.Contains('/') || Add_dt.Contains(' ') || Add_dt.Contains(':'))
                    {
                        //Add_dt = Regex.Replace(Add_dt, @"(\[|""|\-])", "");
                        Add_dt = Add_dt.Replace(@"\", string.Empty);
                        Add_dt = Add_dt.Replace(@"/", string.Empty);
                        Add_dt = Add_dt.Replace(@"-", string.Empty);
                        Add_dt = Add_dt.Replace(@" ", string.Empty);
                        Add_dt = Add_dt.Replace(@":", string.Empty);
                    }

                    string fname = Watershed_map_Image_Uplaod.FileName;
                    string[] Ext = Watershed_map_Image_Uplaod.FileName.Split('.');

                    string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                    string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");
                    //path = path + fname;
                    path = path + Ext[0] + "_" + Add_dt + "." + Ext[1];
                    string[] count = Watershed_map_Image_Uplaod.FileName.Split('.');
                    if (count.Length != 2)
                    {
                        //Session["Images_Upload"] = "Your Upload file has Double Extention, Please Upload proper file";
                        response = "Your Upload file has Double Extention, Please Upload proper file";
                        //return RedirectToAction("WSPgram", "Wsp_new");
                    }
                    else
                    {

                        Watershed_map_Image_Uplaod.SaveAs(path);
                        // File_path = path.Replace("D:\\Ataljal_grievnce\\", "http://54.221.131.231:8014/ataljalimages/");
                        var File_path = "/Ataljalimages/" + (Ext[0] + "_" + Add_dt + "." + Ext[1]).ToString();
                        Data.gpimage2 = File_path;
                        Data.gpimage2_filename = (Ext[0] + "_" + Add_dt + "." + Ext[1]).ToString();
                        ABE.Entry(Data).State = EntityState.Modified;
                        ABE.SaveChanges();
                        response = "Watershed Map Image Upload Sussessfully";
                    }
                }
                else
                {
                    if (Details.Count == 0)
                    {
                        Obj.block_name = Block;
                        Obj.district_name = Dist;
                        Obj.gpname = Gram;
                        Obj.state_name = State;
                        Obj.userid = userid;


                        //string path = AppDomain.CurrentDomain.BaseDirectory + "Uploads/";  
                        //string filename = Path.GetFileName(Request.Files[i].FileName);  


                        string fname;

                        fname = Watershed_map_Image_Uplaod.FileName;

                        string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                        string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");
                        path = path + fname;
                        string[] count = Watershed_map_Image_Uplaod.FileName.Split('.');
                        if (count.Length != 2)
                        {
                            //Session["Images_Upload"] = "Your Upload file has Double Extention, Please Upload proper file";
                            response = "Your Upload file has Double Extention, Please Upload proper file";
                            //return RedirectToAction("WSPgram", "Wsp_new");
                        }
                        else
                        {
                            Watershed_map_Image_Uplaod.SaveAs(path);
                            // File_path = path.Replace("D:\\Ataljal_grievnce\\", "http://54.221.131.231:8014/ataljalimages/");
                            var File_path = "/Ataljalimages/" + fname;
                            Obj.gpimage2 = File_path;
                            Obj.gpimage2_filename = fname;

                            var TodayDate1 = DateTime.Now.ToString();
                            var Datea = TodayDate1.Split('/', ' ', '-');
                            var Today1 = Datea[1] + '/' + Datea[0] + '/' + Datea[2];
                            Obj.datetime = Today1;
                            ABE.obj_abhy_gram_images.Add(Obj);
                            ABE.SaveChanges();
                            //Session["Images_Upload"] = "Watershed Map Image Upload Sussessfully";
                            response = "Watershed Map Image Upload Sussessfully";
                        }
                    }
                    else
                    {
                        //Session["Images_Upload"] = "Duplicate Data is there";
                        response = "Duplicate Data is there";
                        //return RedirectToAction("WSPgram", "Wsp_new");

                    }
                }

            }
            else
            {
                //Session["Images_Upload"] = "Please Upload Watershed Map Image";
                response = "Please Upload Watershed Map Image";
            }
            //return RedirectToAction("WSPgram", "Wsp_new");
            return Json(response);


        }

        [HttpPost]

        public ActionResult Aquifer_map_Image_Uplaod(HttpPostedFileBase Aquifer_map_Image_Uplaod, string state_name, string district_name, string block_name, string gpname)
        {
            var response = "";
            Session["Images_Upload"] = "";
            var userid = Convert.ToInt32(Session["UserId"]);
            var State = state_name;
            var Dist = district_name;
            var Block = block_name;
            var Gram = gpname;
            var Details = ABE.obj_abhy_gram_images.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();
            var Obj = new abhy_gram_images();
            string _imgname = string.Empty;
            Malicious_File_Upload_Restriction obj_Validate = new Malicious_File_Upload_Restriction();
            string allowed_file_format = "jpg,png,jpeg";
            bool flag = obj_Validate.CheckValidFile(Aquifer_map_Image_Uplaod, allowed_file_format);
            if (flag == false)
            {
                response = "Your Upload file has Not valid File, Please Upload proper file";

                //return Json("Your Upload file has Not valid File, Please Upload proper file", JsonRequestBehavior.AllowGet);
            }
            if (Details.Count == 1)
            {
                var Data = Details.SingleOrDefault();

                if (Aquifer_map_Image_Uplaod != null)
                {
                    if (Aquifer_map_Image_Uplaod.FileName != null)
                    {
                        string Add_dt = DateTime.Now.ToString();
                        if (Add_dt.Contains('-') || Add_dt.Contains('/') || Add_dt.Contains(' ') || Add_dt.Contains(':'))
                        {
                            //Add_dt = Regex.Replace(Add_dt, @"(\[|""|\-])", "");
                            Add_dt = Add_dt.Replace(@"\", string.Empty);
                            Add_dt = Add_dt.Replace(@"/", string.Empty);
                            Add_dt = Add_dt.Replace(@"-", string.Empty);
                            Add_dt = Add_dt.Replace(@" ", string.Empty);
                            Add_dt = Add_dt.Replace(@":", string.Empty);
                        }
                        string[] Ext = Aquifer_map_Image_Uplaod.FileName.Split('.');
                        string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                        string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");
                        //path = path + Aquifer_map_Image_Uplaod.FileName;
                        path = path + Ext[0] + "_" + Add_dt + "." + Ext[1];
                        string[] count = Aquifer_map_Image_Uplaod.FileName.Split('.');
                        if (count.Length != 2)
                        {
                            //Session["Images_Upload"] = "Your Upload file has Double Extention, Please Upload proper file";
                            response = "Your Upload file has Double Extention, Please Upload proper file";
                            //return RedirectToAction("WSPgram", "Wsp_new");
                        }
                        else
                        {

                            Aquifer_map_Image_Uplaod.SaveAs(path);
                            // File_path = path.Replace("D:\\Ataljal_grievnce\\", "http://54.221.131.231:8014/ataljalimages/");
                            var File_path = "/Ataljalimages/" + (Ext[0] + "_" + Add_dt + "." + Ext[1]).ToString();
                            Data.gpimage3 = File_path;
                            Data.gpimage3_filename = (Ext[0] + "_" + Add_dt + "." + Ext[1]).ToString();
                            ABE.Entry(Data).State = EntityState.Modified;
                            ABE.SaveChanges();
                            response = "Aquifer Map Image Upload Sussessfully";


                        }
                    }
                }
            }
            else
            {
                if (Details.Count == 0)
                {
                    Obj.block_name = Block;
                    Obj.district_name = Dist;
                    Obj.gpname = Gram;
                    Obj.state_name = State;
                    Obj.userid = userid;
                    if (Aquifer_map_Image_Uplaod != null)
                    {
                        if (Aquifer_map_Image_Uplaod.FileName != null)
                        {

                            string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                            string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");
                            path = path + Aquifer_map_Image_Uplaod.FileName;
                            string[] count = Aquifer_map_Image_Uplaod.FileName.Split('.');
                            if (count.Length != 2)
                            {
                                //Session["Images_Upload"] = "Your Upload file has Double Extention, Please Upload proper file";
                                response = "Your Upload file has Double Extention, Please Upload proper file";
                                //return RedirectToAction("WSPgram", "Wsp_new");
                            }
                            else
                            {
                                Aquifer_map_Image_Uplaod.SaveAs(path);

                                var File_path = "/Ataljalimages/" + Aquifer_map_Image_Uplaod.FileName;
                                Obj.gpimage3 = File_path;
                                Obj.gpimage3_filename = Aquifer_map_Image_Uplaod.FileName;
                                var TodayDate1 = DateTime.Now.ToString();
                                var Datea = TodayDate1.Split('/', ' ', '-');
                                var Today1 = Datea[1] + '/' + Datea[0] + '/' + Datea[2];
                                Obj.datetime = Today1;
                                ABE.obj_abhy_gram_images.Add(Obj);
                                ABE.SaveChanges();
                                //Session["Images_Upload"] = "Aquifer Map Image Upload Sussessfully";
                                response = "Aquifer Map Image Upload Sussessfully";
                            }

                        }
                    }

                }
                else
                {
                    //Session["Images_Upload"] = "Duplicate Data is there";
                    response = "Duplicate Data is there";
                    //return RedirectToAction("WSPgram", "Wsp_new");

                }
            }
            return Json(response);
            //return RedirectToAction("WSPgram", "Wsp_new");


        }

        [HttpPost]

        public ActionResult Drainage_map_Image_Uplaod(HttpPostedFileBase Drainage_map_Image_Uplaod, string state_name, string district_name, string block_name, string gpname)
        {
            var response = "";
            Session["Images_Upload"] = "";
            var userid = Convert.ToInt32(Session["UserId"]);
            var State = state_name;
            var Dist = district_name;

            var Block = block_name;
            var Gram = gpname;
            var Details = ABE.obj_abhy_gram_images.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();
            var Obj = new abhy_gram_images();
            string _imgname = string.Empty;
            Malicious_File_Upload_Restriction obj_Validate = new Malicious_File_Upload_Restriction();
            string allowed_file_format = "jpg,png,jpeg";
            bool flag = obj_Validate.CheckValidFile(Drainage_map_Image_Uplaod, allowed_file_format);
            if (flag == false)
            {
                response = "Your Upload file has Not valid File, Please Upload proper file";
                //return RedirectToAction("WSPgram", "Wsp_new");
                //return Json("Your Upload file has Not valid File, Please Upload proper file", JsonRequestBehavior.AllowGet);
            }
            if (Details.Count == 1)
            {
                var Data = Details.SingleOrDefault();
                if (Drainage_map_Image_Uplaod != null)
                {
                    if (Drainage_map_Image_Uplaod.FileName != null)
                    {
                        string Add_dt = DateTime.Now.ToString();
                        if (Add_dt.Contains('-') || Add_dt.Contains('/') || Add_dt.Contains(' ') || Add_dt.Contains(':'))
                        {
                            //Add_dt = Regex.Replace(Add_dt, @"(\[|""|\-])", "");
                            Add_dt = Add_dt.Replace(@"\", string.Empty);
                            Add_dt = Add_dt.Replace(@"/", string.Empty);
                            Add_dt = Add_dt.Replace(@"-", string.Empty);
                            Add_dt = Add_dt.Replace(@" ", string.Empty);
                            Add_dt = Add_dt.Replace(@":", string.Empty);
                        }
                        string[] Ext = Drainage_map_Image_Uplaod.FileName.Split('.');

                        string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                        string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");
                        //path = path + Drainage_map_Image_Uplaod.FileName;
                        path = path + Ext[0] + "_" + Add_dt + "." + Ext[1];
                        string[] count = Drainage_map_Image_Uplaod.FileName.Split('.');
                        if (count.Length != 2)
                        {
                            //Session["Images_Upload"] = "Your Upload file has Double Extention, Please Upload proper file";
                            response = "Your Upload file has Double Extention, Please Upload proper file";
                            //return RedirectToAction("WSPgram", "Wsp_new");
                        }
                        else
                        {
                            Drainage_map_Image_Uplaod.SaveAs(path);
                            // File_path = path.Replace("D:\\Ataljal_grievnce\\", "http://54.221.131.231:8014/ataljalimages/");
                            var File_path = "/Ataljalimages/" + (Ext[0] + "_" + Add_dt + "." + Ext[1]).ToString();
                            Data.gpimage4 = File_path;
                            Data.gpimage4_filename = (Ext[0] + "_" + Add_dt + "." + Ext[1]).ToString();
                            ABE.Entry(Data).State = EntityState.Modified;
                            ABE.SaveChanges();
                            //Session["Images_Upload"] = "Drainage Map Image Upload Sussessfully";
                            response = "Drainage Map Image Upload Sussessfully";
                        }

                    }
                }

            }
            else
            {

                if (Details.Count == 0)
                {
                    Obj.block_name = Block;
                    Obj.district_name = Dist;
                    Obj.gpname = Gram;
                    Obj.state_name = State;
                    Obj.userid = userid;
                    if (Drainage_map_Image_Uplaod != null)
                    {
                        if (Drainage_map_Image_Uplaod.FileName != null)
                        {

                            string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                            string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");
                            path = path + Drainage_map_Image_Uplaod.FileName;
                            string[] count = Drainage_map_Image_Uplaod.FileName.Split('.');
                            if (count.Length != 2)
                            {
                                //Session["Images_Upload"] = "Your Upload file has Double Extention, Please Upload proper file";
                                response = "Your Upload file has Double Extention, Please Upload proper file";
                                //return RedirectToAction("WSPgram", "Wsp_new");
                            }
                            else
                            {
                                Drainage_map_Image_Uplaod.SaveAs(path);
                                // File_path = path.Replace("D:\\Ataljal_grievnce\\", "http://54.221.131.231:8014/ataljalimages/");
                                var File_path = "/Ataljalimages/" + Drainage_map_Image_Uplaod.FileName;
                                Obj.gpimage4 = File_path;
                                Obj.gpimage4_filename = Drainage_map_Image_Uplaod.FileName;
                                var TodayDate1 = DateTime.Now.ToString();
                                var Datea = TodayDate1.Split('/', ' ', '-');
                                var Today1 = Datea[1] + '/' + Datea[0] + '/' + Datea[2];
                                Obj.datetime = Today1;
                                ABE.obj_abhy_gram_images.Add(Obj);
                                ABE.SaveChanges();
                                //Session["Images_Upload"] = "Drainage Map Image Upload Sussessfully";
                                response = "Drainage Map Image Upload Sussessfully";
                            }
                        }
                    }

                }
                else
                {

                    response = "Duplicate is there";
                    //return RedirectToAction("WSPgram", "Wsp_new");

                }
            }
            return Json(response);
            //return RedirectToAction("WSPgram", "Wsp_new");


        }



        [HttpPost]
        public ActionResult Sign_Up_DropdownInfo()
        {
            //string state = string.Empty;

            try
            {
                var slist = ABE.obj_abhy_block_gp_area_info.ToList();
                //var slist = ABE.obj_abhy_gpdata_new.ToList();
                //state = Session["gstate_name"].ToString();
                var HouseHolddata = slist;
                var jsonresults30 = Json(HouseHolddata, JsonRequestBehavior.AllowGet);
                jsonresults30.MaxJsonLength = int.MaxValue;
                return jsonresults30;

            }
            catch (Exception ex)
            {
                return Json("OK");
            }



        }
        [HttpPost]
        public ActionResult DropdownInfo_GpTraining()
        {
            //string state = string.Empty;
            try
            {
                string email = Session["email"].ToString();
                var slist = ABE.obj_abhy_master_tbl_gptraining.Where(x => x.email == email).ToList();
                if (slist.Count == 0)
                {
                    var list = ABE.obj_abhy_block_gp_area_info.ToList();
                    var data = list;
                    var jsonresults = Json(data, JsonRequestBehavior.AllowGet);
                    jsonresults.MaxJsonLength = int.MaxValue;
                    return jsonresults;
                }
                //var slist = ABE.obj_abhy_gpdata_new.ToList();
                //state = Session["gstate_name"].ToString();
                var HouseHolddata = slist;
                var jsonresults30 = Json(HouseHolddata, JsonRequestBehavior.AllowGet);
                jsonresults30.MaxJsonLength = int.MaxValue;
                return jsonresults30;

            }
            catch (Exception ex)
            {
                return Json("OK");
            }
        }
        public string Get_11(int id)
        {
            return "value";
        }


        [HttpPost]
        public ActionResult GPLevelDropDownInfo()
        {
            //string state = string.Empty;

            try
            {
                var slist = AJE.obj_states.ToList();
                //state = Session["gstate_name"].ToString();
                var HouseHolddata = slist;
                var jsonresults30 = Json(HouseHolddata, JsonRequestBehavior.AllowGet);
                jsonresults30.MaxJsonLength = int.MaxValue;
                return jsonresults30;
            }
            catch (Exception ex)
            {
                return Json("OK");
            }



        }

        public ActionResult DataInfo11a()
        {
            var Data11 = ABE.objUsers.ToList();

            for (var i = 0; i < Data11.Count; i++)
            {

                var Daya = Data11[i];
                var Epass_ = Data11[i].Password;
                UTF8Encoding encodepwd = new UTF8Encoding();
                Decoder Decode = encodepwd.GetDecoder();
                byte[] todecode_byte = Convert.FromBase64String(Epass_);
                int charCount = Decode.GetCharCount(todecode_byte, 0, todecode_byte.Length);
                char[] decoded_char = new char[charCount];
                Decode.GetChars(todecode_byte, 0, todecode_byte.Length, decoded_char, 0);
                string result11 = new String(decoded_char);
                Daya.Password = result11;
                Daya.Villagename = result11;
                ABE.Entry(Daya).State = EntityState.Modified;
                ABE.SaveChanges();


            }
            return View();
        }


        [HttpPost]
        public ActionResult ChangePassword(string Data)
        {
            JavaScriptSerializer js = new JavaScriptSerializer();
            var result = js.Deserialize<Users>(Data);
            Users NewUser = new Users();
            var Email = result.Email.ToLower().Trim();
            //Encription Code old password

            //var oldpassword = result.DepartmentName.ToString().Trim();

            //byte[] encode = new byte[oldpassword.Length];
            //encode = Encoding.UTF8.GetBytes(oldpassword);
            //var old_password = Convert.ToBase64String(encode);

            //     NewUser.Password = old_password;
            //Encription Code


            //byte[] encode11 = new byte[password.Length];
            //encode11 = Encoding.UTF8.GetBytes(password);
            //var new_password = Convert.ToBase64String(encode11);

            //NewUser.Password = new_password;
            //--End
            var reg1 = ABE.objUsers.Where(x => x.Email == Email).SingleOrDefault();
            if (reg1 != null)
            {
                if (reg1.Verifiedornot == "True")
                {
                    if (reg1.Villagename == result.Password)
                    {
                        return Json("Old Password and New Password is Same , Please Change Your New Password", JsonRequestBehavior.AllowGet);
                    }
                    else
                    {
                        var password1 = result.Password.ToString().Trim();
                        var keyNew = GeneratePassword(10);
                        var password = EncodePassword(password1, keyNew);
                        reg1.CheckingCode = keyNew;
                        reg1.Villagename = result.Password.ToString().Trim();
                        reg1.Password = password;
                        ABE.Entry(reg1).State = EntityState.Modified;
                        ABE.SaveChanges();
                        return Json("Password Changed Successfully", JsonRequestBehavior.AllowGet);
                    }
                }
                else
                {
                    return Json("State Ofiicer Not Approved Your Credentials", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {

                return Json("Please Enter Valid Email id ", JsonRequestBehavior.AllowGet);
            }

        }

        [HttpGet]
        public ActionResult MobilePrivacy(string Data)
        {
            return View();
        }



        public static string GeneratePassword(int length) //length of salt    
        {
            const string allowedChars = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ0123456789";
            var randNum = new Random();
            var chars = new char[length];
            var allowedCharCount = allowedChars.Length;
            for (var i = 0; i <= length - 1; i++)
            {
                chars[i] = allowedChars[(Convert.ToInt32((allowedCharCount) * randNum.NextDouble()))];
            }
            return new string(chars);
        }
        public static string EncodePassword(string pass, string salt) //encrypt password    
        {
            byte[] bytes = Encoding.Unicode.GetBytes(pass);
            byte[] src = Encoding.Unicode.GetBytes(salt);
            byte[] dst = new byte[src.Length + bytes.Length];
            System.Buffer.BlockCopy(src, 0, dst, 0, src.Length);
            System.Buffer.BlockCopy(bytes, 0, dst, src.Length, bytes.Length);
            HashAlgorithm algorithm = HashAlgorithm.Create("SHA1");
            byte[] inArray = algorithm.ComputeHash(dst);
            //return Convert.ToBase64String(inArray);    
            return EncodePasswordMd5(Convert.ToBase64String(inArray));
        }
        public static string EncodePasswordMd5(string pass) //Encrypt using MD5    
        {
            Byte[] originalBytes;
            Byte[] encodedBytes;
            MD5 md5;
            //Instantiate MD5CryptoServiceProvider, get bytes for original password and compute hash (encoded password)    
            md5 = new MD5CryptoServiceProvider();
            originalBytes = ASCIIEncoding.Default.GetBytes(pass);
            encodedBytes = md5.ComputeHash(originalBytes);
            //Convert encoded bytes back to a 'readable' string    
            return BitConverter.ToString(encodedBytes);
        }
        public string DataInfo11()
        {
            try
            {
                var Details11 = ABE.obj_abhy_gram_images_test.ToList();

                if (Details11.Count != 0)
                {
                    // var Satates=["Gujarat","Maharashtra","Karnataka", "Madhya Pradesh", "Rajasthan"];

                    // string[] Satates = { "Gujarat", "Haryana", "Karnataka", "Madhya Pradesh", "Maharashtra",   "Rajasthan", "Uttar Pradesh" };
                    for (var i = 0; i < Details11.Count; i++)
                    {

                        //for (var z = 0; z < Satates.Length; z++)
                        //{
                        //    if (Satates[z] == Details11[i].state_name)
                        //    {

                        var Dataa = Details11[i];
                        if (Dataa.gpimage1 != null && Dataa.gpimage1 != "")
                        {
                            string Code = randomCodeGeneration();
                            string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                            string folderPath = System.IO.Path.Combine(BasePath, "Ataljalimages\\");

                            // string folderPath = @"E:\base64toimage\";  //Create a Folder in your Root directory on your solution.
                            string fileName = Code + ".jpg";
                            string imagePath = folderPath + fileName;

                            string base64StringData = "data:image/png;base64," + Details11[i].gpimage1; // Your base 64 string data
                                                                                                        //  string cleandata = base64StringData.Replace("data:image/png;base64,", "");
                            string cleandata = Details11[i].gpimage1;
                            byte[] data = System.Convert.FromBase64String(cleandata);
                            MemoryStream ms = new MemoryStream(data);
                            System.Drawing.Image img = System.Drawing.Image.FromStream(ms);
                            img.Save(imagePath, System.Drawing.Imaging.ImageFormat.Jpeg);
                            var MainPath = "/Ataljalimages/" + fileName;

                            Dataa.gpimage1 = MainPath;
                            Dataa.gpimage1_filename = fileName;
                        }
                        if (Dataa.gpimage2 != null && Dataa.gpimage2 != "")
                        {
                            string Code = randomCodeGeneration();
                            string folderPath = @"D:\Ataljal_grievnce\";

                            // string folderPath = @"E:\base64toimage\";  //Create a Folder in your Root directory on your solution.
                            string fileName = Code + ".jpg";
                            string imagePath = folderPath + fileName;
                            Dataa.gpimage2_filename = fileName;
                            string base64StringData = "data:image/png;base64," + Details11[i].gpimage2; // Your base 64 string data
                            string cleandata = Details11[i].gpimage2;
                            //    string cleandata = base64StringData.Replace("data:image/png;base64,", "");
                            byte[] data = System.Convert.FromBase64String(cleandata);
                            MemoryStream ms = new MemoryStream(data);
                            System.Drawing.Image img = System.Drawing.Image.FromStream(ms);
                            img.Save(imagePath, System.Drawing.Imaging.ImageFormat.Jpeg);
                            var MainPath = imagePath.Replace("D:\\Ataljal_grievnce\\", "~/Ataljalimages/");

                            Dataa.gpimage2 = MainPath;

                        }

                        if (Dataa.gpimage3 != null && Dataa.gpimage3 != "")
                        {
                            string Code = randomCodeGeneration();
                            string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                            string folderPath = System.IO.Path.Combine(BasePath, "Ataljalimages\\");

                            // string folderPath = @"E:\base64toimage\";  //Create a Folder in your Root directory on your solution.
                            string fileName = Code + ".jpg";
                            Dataa.gpimage3_filename = fileName;
                            string imagePath = folderPath + fileName;

                            string base64StringData = "data:image/png;base64," + Details11[i].gpimage3; // Your base 64 string data
                                                                                                        //string cleandata = base64StringData.Replace("data:image/png;base64,", "");
                            string cleandata = Details11[i].gpimage3;
                            byte[] data = System.Convert.FromBase64String(cleandata);
                            MemoryStream ms = new MemoryStream(data);
                            System.Drawing.Image img = System.Drawing.Image.FromStream(ms);
                            img.Save(imagePath, System.Drawing.Imaging.ImageFormat.Jpeg);
                            var MainPath = "/Ataljalimages/" + fileName;
                            Dataa.gpimage3 = MainPath;
                        }
                        if (Dataa.gpimage4 != null && Dataa.gpimage4 != "")
                        {
                            string Code = randomCodeGeneration();
                            string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                            string folderPath = System.IO.Path.Combine(BasePath, "Ataljalimages\\");

                            // string folderPath = @"E:\base64toimage\";  //Create a Folder in your Root directory on your solution.
                            string fileName = Code + ".jpg";
                            string imagePath = folderPath + fileName;
                            Dataa.gpimage4_filename = fileName;
                            string base64StringData = "data:image/png;base64," + Details11[i].gpimage4; // Your base 64 string data
                            string cleandata = Details11[i].gpimage4;
                            //  string cleandata = base64StringData.Replace("data:image/png;base64,", "");
                            byte[] data = System.Convert.FromBase64String(cleandata);
                            MemoryStream ms = new MemoryStream(data);
                            System.Drawing.Image img = System.Drawing.Image.FromStream(ms);
                            img.Save(imagePath, System.Drawing.Imaging.ImageFormat.Jpeg);
                            var MainPath = "/Ataljalimages/" + fileName;

                            Dataa.gpimage4 = MainPath;
                        }

                        ABE.Entry(Dataa).State = EntityState.Modified;
                        ABE.SaveChanges();

                    }

                    // }


                    // }
                }
                return "Success";
            }
            catch (Exception ex)
            {
                string Exx = ex.ToString();
                return Exx;
            }

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
                return Json("MisLogin");
            }

        }


        public ActionResult Data_encrypt()
        {
            var Data123 = ABE.objUsers_Test.ToList();

            for (var i = 0; i < Data123.Count; i++)
            {
                var NewUser = Data123[i];
                var Test = Data123[i].Password.ToString().Trim();
                var keyNew = GeneratePassword(10);
                var password = EncodePassword(Test, keyNew);

                NewUser.stateofficer_email = "1";
                NewUser.Password = password;
                NewUser.CheckingCode = keyNew;
                NewUser.Villagename = Test;

                ABE.Entry(NewUser).State = EntityState.Modified;
                ABE.SaveChanges();


            }
            return View();
        }
        [HttpPost]
        public JsonResult CustomCaptcha_register(FormCollection form, string clientCaptcha1)
        {
            System.Threading.Thread.Sleep(200);
            //string clientCaptcha = form["clientCaptcha"];
            string serverCaptcha = "";
            if (Session["text"] != null)
            {
                serverCaptcha = Session["text"].ToString();
            }
            if (!clientCaptcha1.Equals(serverCaptcha))
            {
                //ViewBag.ShowCAPTCHA = serverCaptcha;
                TempData["captch"] = "notmatched";
                return Json(0);
            }
            else
            {
                return Json("MisSignUp");
            }

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

            System.Drawing.Color backColor = System.Drawing.Color.SeaShell;
            System.Drawing.Color textColor = System.Drawing.Color.Red;
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

        public FileResult ContactGetCaptchaImage()
        {
            //string text = Session["CAPTCHA"].ToString();
            string text = GetRandomText();
            Session["ContactCaptcha"] = text;
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

            System.Drawing.Color backColor = System.Drawing.Color.SeaShell;
            System.Drawing.Color textColor = System.Drawing.Color.Red;
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
        public FileResult Reg_GetCaptchaImage()
        {
            //string text = Session["CAPTCHA"].ToString();
            string text = GetRandomText();
            Session["REGCaptcha"] = text;
            //first, create a dummy bitmap just to get a graphics object
            System.Drawing.Image img = new Bitmap(1, 1);
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

            System.Drawing.Color backColor = System.Drawing.Color.SeaShell;
            System.Drawing.Color textColor = System.Drawing.Color.Red;
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


        public FileResult Forget_PWD__GetCaptchaImage()
        {
            //string text = Session["CAPTCHA"].ToString();
            string text = GetRandomText();
            Session["Forget_PWD_Captcha"] = text;
            //first, create a dummy bitmap just to get a graphics object
            System.Drawing.Image img = new Bitmap(1, 1);
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

            System.Drawing.Color backColor = System.Drawing.Color.SeaShell;
            System.Drawing.Color textColor = System.Drawing.Color.Red;
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
        public JsonResult Login_CustomCaptcha(FormCollection form, string clientCaptcha)
        {
            System.Threading.Thread.Sleep(200);
            //string clientCaptcha = form["clientCaptcha"];
            string serverCaptcha = "";
            if (Session["LoginCaptcha"] != null)
            {
                serverCaptcha = Session["LoginCaptcha"].ToString();
            }
            if (!clientCaptcha.Equals(serverCaptcha))
            {
                //ViewBag.ShowCAPTCHA = serverCaptcha;
                TempData["captch"] = "notmatched";
                return Json(0);
            }
            else
            {
                return Json("MisLogin");
            }

        }

        [HttpPost]
        public JsonResult Reg_CustomCaptcha(FormCollection form, string clientCaptcha)
        {
            System.Threading.Thread.Sleep(200);
            //string clientCaptcha = form["clientCaptcha"];
            string serverCaptcha = "";
            if (Session["REGCaptcha"] != null)
            {
                serverCaptcha = Session["REGCaptcha"].ToString();
            }
            if (!clientCaptcha.Equals(serverCaptcha))
            {
                //ViewBag.ShowCAPTCHA = serverCaptcha;
                TempData["captch"] = "notmatched";
                return Json(0);
            }
            else
            {
                return Json("MisLogin");
            }

        }


        [HttpPost]
        public JsonResult ForgetPwd_CustomCaptcha(FormCollection form, string clientCaptcha)
        {
            System.Threading.Thread.Sleep(200);
            //string clientCaptcha = form["clientCaptcha"];
            string serverCaptcha = "";
            if (Session["Forget_PWD_Captcha"] != null)
            {
                serverCaptcha = Session["Forget_PWD_Captcha"].ToString();
            }
            if (!clientCaptcha.Equals(serverCaptcha))
            {
                //ViewBag.ShowCAPTCHA = serverCaptcha;
                TempData["captch"] = "notmatched";
                return Json(0);
            }
            else
            {
                return Json("MisLogin");
            }

        }


        public ActionResult LogOutNew()
        {

            return View();
        }

        [HttpPost]
        public ActionResult LogOutNew(string EmailId)
        {

            try
            {
                if (EmailId != "")
                {
                    WspNewController wspNew = new WspNewController();
                    var IP = wspNew.GetIp();
                    //Rajnish
                    var sUser = ABE.objUsers.Where(x => x.Email == EmailId).FirstOrDefault();
                    if (sUser != null)
                    {
                        var data = ABE.obj_user_autologin.Where(x => x.user_id == sUser.UserId).ToList();//.FirstOrDefault();
                        login_datetime logindata = new login_datetime();
                        logindata.name = sUser.UserName;// Session["UserName"].ToString();
                        logindata.email = sUser.Email;// Session["Email"].ToString();
                        logindata.loginlogout = "Logout";
                        logindata.checkloginlogout = "0";
                        logindata.date = DateTime.Now.ToString("yyyy-MM-dd");
                        logindata.datetime = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
                        ABE.obj_login_datetime.Add(logindata);
                        ABE.SaveChanges();
                        if ((data.Count != 0) && (data != null))
                        {
                            //ABE.obj_user_autologin.Remove(data);
                            ABE.obj_user_autologin.RemoveRange(data);
                            ABE.SaveChanges();
                        }
                        AutoLogin.EndSession(Convert.ToInt32(sUser.UserId));
                        Session["Email"] = "";
                        Session["UserName"] = "";
                        Session["UserId"] = "";

                        Session.Clear();
                        Session.Abandon();
                        Session.RemoveAll();
                        //return RedirectToAction("redi", "Home");
                    }
                }
                string urls = string.Format("/WspNew/WSP_GWM_HOME_new");
                return Redirect(urls);
            }
            catch (Exception ex)
            {
                Users sUser = ABE.objUsers.Where((Users x) => x.Email == EmailId).FirstOrDefault();
                if (sUser != null)
                {
                    login_datetime logindata = new login_datetime();
                    logindata.name = sUser.UserName;
                    logindata.email = sUser.Email;
                    logindata.loginlogout = "Logout";
                    logindata.checkloginlogout = "0";
                    logindata.date = DateTime.Now.ToString("yyyy-MM-dd");
                    logindata.datetime = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
                    ABE.obj_login_datetime.Add(logindata);
                    ABE.SaveChanges();
                    ABE.SaveChanges();
                }
                string urls = string.Format("/WspNew/WSP_GWM_HOME");
                return Redirect(urls);
                //return RedirectToAction("redi", "Home");
            }
        }

        public ActionResult redi()
        {
            return RedirectToAction("WSP_GWM_HOME_new", "WspNew");
        }

        public string PasswordEncrypt()
        {
            var keyNew = "UnpdeKWPfb";
            var Test = "Chalsidd1031@";
            string password = EncodePassword(Test, keyNew);

            return password;
        }


        public ActionResult CaptchaImage()
        {
            string[] strArray = new string[36];
            strArray = new string[] { "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" };

            Random autoRand = new Random();
            string strCaptcha = string.Empty;
            for (int i = 0; i < 6; i++)
            {
                int j = Convert.ToInt32(autoRand.Next(0, 62));
                strCaptcha += strArray[j].ToString();
            }
            Session["Captcha"] = strCaptcha;
            ImageConverter converter = new ImageConverter();
            // Response.BinaryWrite((byte[])converter.ConvertTo(CaptchaGeneration(strCaptcha), typeof(byte[])));
            var xx = Convert.ToBase64String((byte[])converter.ConvertTo(CaptchaGeneration(strCaptcha), typeof(byte[])));
            var x11 = xx + "ataljal1" + strCaptcha;
            return Json(x11, JsonRequestBehavior.AllowGet);
        }
        public Bitmap CaptchaGeneration(string captchatxt)
        {
            Bitmap bmp = new Bitmap(133, 48);
            using (Graphics graphics = Graphics.FromImage(bmp))
            {
                Font font = new Font("Arial", 15);
                graphics.FillRectangle(new SolidBrush(System.Drawing.Color.SeaShell), 0, 0, bmp.Width, bmp.Height);
                graphics.DrawString(captchatxt, font, new SolidBrush(System.Drawing.Color.Red), 25, 10);
                graphics.Flush();
                font.Dispose();
                graphics.Dispose();
            }
            return bmp;
        }
       
    }
}