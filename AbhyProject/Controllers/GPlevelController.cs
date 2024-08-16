using AbhyProject.Classes;
using AbhyProject.Excel;
using AbhyProject.Models;
using AbhyProject.Utility;
using ClosedXML.Excel;
using DocumentFormat.OpenXml.Wordprocessing;
using OfficeOpenXml;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Configuration;
using System.Data;
using System.Data.Entity;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Net.Security;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Timers;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace AbhyProject.Controllers
{
    public class GPlevelController : Controller
    {
        AbhyEntity ABE = new AbhyEntity();
        AtaljalEntity AJE = new AtaljalEntity();
        // GET: GPlevel
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Gplevel()
        {
            
            ViewBag.GPLIst = ABE.obj_abhy_gpdata_new.ToList();
            return View();
        }

        public ActionResult Gplevel_Report()
        {
            return View();
        }

        public ActionResult Gplevel_Tracker()
        {
            return View();
        }

        public ActionResult Session_month_year(string Year, string Month)
        {
            Session["year"] = Year;
            Session["month"] = Month;


            return null;
        }
        public ActionResult GPlevelreport_getting()
        {

            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_baseline_gpdata> ddetails = new List<abhy_baseline_gpdata>();


                    //JavaScriptSerializer js = new JavaScriptSerializer();
                    //var result = js.Deserialize<abhy_baseline_gpdata>(Data);
                    //var State = result.state_name;
                    //var Dist = result.district_name;
                    //var Block = result.block_name;
                    //var Gram = result.gpname;
                    //var Year = result.year;

                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    var Year = Session["year"].ToString();
                    //var Month = Session["month"].ToString();

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null)
                    {
                        ddetails = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year).OrderByDescending(x => x.month_order_by).ToList();//total list
                    }

                    if (ddetails.Count != 0)
                    {
                        var details = ddetails.FirstOrDefault();
                        var ID = details.id;
                        var remarks_details = ABE.obj_abhy_baseline_gpdata_remarks.Where(x => x.id == ID).ToList();
                        var livestock_details = ABE.obj_abhy_baseline_gp_livestock.Where(x => x.id == ID).ToList();
                        var surfacewater_details = ABE.obj_abhy_baseline_gp_surfacewater.Where(x => x.id == ID).ToList();
                        var groundwater_details = ABE.obj_abhy_baseline_gp_groundwater.Where(x => x.id == ID).ToList();
                        var existingwells_details = ABE.obj_abhy_baseline_gp_existingwells.Where(x => x.id == ID).ToList();
                        var watereff_details = ABE.obj_abhy_baseline_gp_watereff.Where(x => x.id == ID).ToList();
                        var upload_details = ABE.obj_abhy_baseline_gp_upload.Where(x => x.id == ID).ToList();
                        Allgpdata objgetdata = new Allgpdata();
                        List<Allgpdata> objFinalList = new List<Allgpdata>();

                        objgetdata.objgpdata = ddetails;
                        objgetdata.objremarks = remarks_details;
                        objgetdata.objlivestock = livestock_details;
                        objgetdata.objsurfacewater = surfacewater_details;
                        objgetdata.objgroundwater = groundwater_details;
                        objgetdata.objexwells = existingwells_details;
                        objgetdata.objwatereff = watereff_details;
                        objgetdata.objupload = upload_details;
                        objFinalList.Add(objgetdata);

                        return Json(objFinalList, JsonRequestBehavior.AllowGet);
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
                // return RedirectToAction("WSP_GWM_HOME", "WSPNew");
            }
            return View();
        }

        public string Validation_NegitiveVal(string Number_value)
        {
            Double checking_value;
            bool checking_value_1 = Double.TryParse(Number_value, out checking_value);
            if (checking_value_1 == true)
            {

                double a2 = Convert.ToDouble(Number_value);

                if (a2 <= 0)
                {
                    return "Negitive value is not allowed";
                }
                else if (a2 < 0)
                {
                    return "0 value is not allowed";
                }
                else
                {
                    return "True";
                }
            }
            else
            {
                return "Characters are not allowed";
            }
            return "String is not allowed";
        }


        public ActionResult GPlevelreport_sarpanch_getting()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<sarpanchdetails> ddetails = new List<sarpanchdetails>();


                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    var Year = Session["year"].ToString();
                    //var Month = Session["month"].ToString();


                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        ddetails = ABE.obj_sarpanchdetails.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year).OrderByDescending(x => x.month_order_by).ToList();//total list
                    }

                    return Json(ddetails, JsonRequestBehavior.AllowGet);
                }
                catch (Exception Ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
                // return RedirectToAction("WSP_GWM_HOME", "WSPNew");
            }
        }

        [HttpPost]
        public ActionResult baselinedata_geting_status(string Data)
        {

            List<abhy_baseline_gpdata> ddetails = new List<abhy_baseline_gpdata>();
            //List<abhy_baseline_gpdata_remarks> remarks_details = ABE.obj_abhy_baseline_gpdata_remarks.ToList();
            //List<abhy_baseline_gp_remarks> remarks_details = new List<abhy_baseline_gp_remarks>();
            List<abhy_baseline_gpdata> gpdata_details = ABE.obj_abhy_baseline_gpdata.ToList();
            // List<gpprofile> ddetails = new List<gpprofile>();
            JavaScriptSerializer js = new JavaScriptSerializer();
            var result = js.Deserialize<abhy_baseline_gpdata>(Data);
            var State = result.state_name;
            var Dist = result.district_name;
            var Block = result.block_name;
            var Gram = result.gpname;
            var Year = "2023-24";
            //var Year = result.year;
            //var Month = Session["month"].ToString();

            if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null)/*  && Month != "0" && Month != "" && Month != null*/
            {
                ddetails = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year && x.d_sent == true).ToList();//total list
            }
            return Json(ddetails, JsonRequestBehavior.AllowGet);
        }



        [HttpPost]
        public ActionResult baselinedata_geting(string Data)
        {

            List<abhy_baseline_gpdata> ddetails = new List<abhy_baseline_gpdata>();
            //List<abhy_baseline_gpdata_remarks> remarks_details = ABE.obj_abhy_baseline_gpdata_remarks.ToList();
            //List<abhy_baseline_gp_remarks> remarks_details = new List<abhy_baseline_gp_remarks>();
            List<abhy_baseline_gpdata> gpdata_details = ABE.obj_abhy_baseline_gpdata.ToList();
            // List<gpprofile> ddetails = new List<gpprofile>();
            JavaScriptSerializer js = new JavaScriptSerializer();
            var result = js.Deserialize<abhy_baseline_gpdata>(Data);
            var State = result.state_name;
            var Dist = result.district_name;
            var Block = result.block_name;
            var Gram = result.gpname;
            var Year = result.year;
            var Month = result.month;

            if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Month != "" && Year != null)
            {
                ddetails = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year).OrderByDescending(x => x.month_order_by).ToList();//total list
            }


            if (ddetails.Count != 0)
            {
                var details = ddetails.FirstOrDefault();
                var ID = details.id;
                var remarks_details = ABE.obj_abhy_baseline_gpdata_remarks.Where(x => x.id == ID).ToList();
                var livestock_details = ABE.obj_abhy_baseline_gp_livestock.Where(x => x.id == ID).ToList();
                var surfacewater_details = ABE.obj_abhy_baseline_gp_surfacewater.Where(x => x.id == ID).ToList();
                var groundwater_details = ABE.obj_abhy_baseline_gp_groundwater.Where(x => x.id == ID).ToList();
                var existingwells_details = ABE.obj_abhy_baseline_gp_existingwells.Where(x => x.id == ID).ToList();
                var watereff_details = ABE.obj_abhy_baseline_gp_watereff.Where(x => x.id == ID).ToList();
                var upload_details = ABE.obj_abhy_baseline_gp_upload.Where(x => x.id == ID).ToList();
                Allgpdata objgetdata = new Allgpdata();
                List<Allgpdata> objFinalList = new List<Allgpdata>();

                objgetdata.objgpdata = ddetails;
                objgetdata.objremarks = remarks_details;
                objgetdata.objlivestock = livestock_details;
                objgetdata.objsurfacewater = surfacewater_details;
                objgetdata.objgroundwater = groundwater_details;
                objgetdata.objexwells = existingwells_details;
                objgetdata.objwatereff = watereff_details;
                objgetdata.objupload = upload_details;
                objFinalList.Add(objgetdata);

                #region join code

                #endregion
                return Json(objFinalList, JsonRequestBehavior.AllowGet);
            }
            return Json("No Data Found");
        }

        [HttpPost]
        public ActionResult baselinedata_submit_ndo(string Data)
        {
            if (Session["Userid"] != null)
            {
                DateTime now = DateTime.Now;
                int MonthNumber = now.Month;

                // Get the name of the month
                string monthName = CultureInfo.CurrentCulture.DateTimeFormat.GetMonthName(MonthNumber);
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<abhy_baseline_gpdata>(Data);
                var State = result.state_name;
                var Dist = result.district_name;
                var Block = result.block_name;
                var Gram = result.gpname;
                var Year = result.year;
                var UserEmail = Session["Email"].ToString();
                var Officer = Session["Officer"].ToString();
                var Month = monthName;
                var NodalOfficer = "";
                if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null)
                {
                    var obj = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year).OrderByDescending(x => x.month_order_by).FirstOrDefault();
                    var sarpanch = ABE.obj_sarpanchdetails.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year).OrderByDescending(x => x.month_order_by).FirstOrDefault();
                    if (obj != null && sarpanch != null)
                    {
                        if (obj.reject == true)
                        {
                            obj.reject = false;

                        }
                        if (obj.s_reject == true && obj.e_sent == true)
                        {
                            obj.s_reject = false;
                        }
                        if (obj.e_sent == true)
                        {
                            obj.d_sent = true;
                        }
                        obj.e_sent = true;

                        if (Officer == "Gram Panchyat Nodal Officer")
                        {
                            obj.gp_submit_date = DateTime.Now.ToString("dd-MM-yyyy");
                        }
                        else if (Officer == "District Level Nodal Officer")
                        {
                            obj.dist_submit_date = DateTime.Now.ToString("dd-MM-yyyy");
                        }

                        ABE.Entry(obj).State = EntityState.Modified;
                        ABE.SaveChanges();

                    }
                    else
                    {
                        return Json("Please complete all of the fields in Sections (A) and (B)");
                    }
                }
                else
                {
                    return Json("Error");
                }


                var gp_email = ABE.objUsers.Where(x => x.StateName == State && x.DistrictName == Dist && x.BlockName == Block && x.GramPanchayatName == Gram && x.NodalOfficer == "Gram Panchyat Nodal Officer").Select(x => x.Email).FirstOrDefault();
                StringBuilder sb = new StringBuilder();
                if (Officer == "Gram Panchyat Nodal Officer")
                {

                    NodalOfficer = "Gram Panchyat Nodal Officer";
                    string subject = "Thank you for submitting the GP-level data collected for verification";



                    sb.Append("Dear,");
                    sb.Append("<br>");
                    sb.Append("<br>");

                    sb.Append("<table style='margin-left:50px;'>");
                    sb.Append("<tr>");
                    sb.Append("<td>");
                    sb.Append("Input details of Gram Panchayat Data Collection Information Module have been submitted for your approvel.");
                    sb.Append("</td>");
                    sb.Append("</tr>");
                    sb.Append("</table>");

                    sb.Append("<br>");
                    sb.Append("<br>");

                    sb.Append("<table width='800' border='8' cellspacing='5' cellpadding='5' align = 'center'>");
                    sb.Append("<tr>");
                    sb.Append("<th>");
                    sb.Append("State Name");
                    sb.Append("</th>");
                    sb.Append("<th>");
                    sb.Append("District Name");
                    sb.Append("</th>");
                    sb.Append("<th>");
                    sb.Append("Block Name");
                    sb.Append("</th>");
                    sb.Append("<th>");
                    sb.Append("Gram Panchayat Name");
                    sb.Append("</th>");
                    sb.Append("<th>");
                    sb.Append("Financial Year");
                    sb.Append("</th>");
                    sb.Append("<th>");
                    sb.Append("Month");
                    sb.Append("</th>");
                    sb.Append("</tr>");
                    sb.Append("<tr>");
                    sb.Append("<td>");
                    sb.Append(State);
                    sb.Append("</td>");
                    sb.Append("<td>");
                    sb.Append(Dist);
                    sb.Append("</td>");
                    sb.Append("<td>");
                    sb.Append(Block);
                    sb.Append("</td>");
                    sb.Append("<td>");
                    sb.Append(Gram);
                    sb.Append("</td>");
                    sb.Append("<td>");
                    sb.Append(Year);
                    sb.Append("</td>");
                    sb.Append("<td>");
                    sb.Append(Month);
                    sb.Append("</td>");
                    sb.Append("</tr>");
                    sb.Append("</table>");


                    sb.Append("<table style='margin-left:50px;'>");
                    sb.Append("<tr>");
                    sb.Append("<td>");
                    sb.Append("Please note that this is an automated message and we are unable to respond to replies to this email.");
                    sb.Append("</td>");
                    sb.Append("</tr>");
                    sb.Append("</table>");

                    sb.Append("<br>");

                    sb.Append("<table style='margin-left:50px;'>");
                    sb.Append("<tr>");
                    sb.Append("<td>");
                    sb.Append("DPMU will review your information and get back to you as soon as possible.");
                    sb.Append("</td>");
                    sb.Append("</tr>");
                    sb.Append("</table>");

                    sb.Append("<br>");


                    sb.Append("<table style='margin-left:50px;'>");
                    sb.Append("<tr>");
                    sb.Append("<td>");
                    sb.Append("Or");
                    sb.Append("</td>");
                    sb.Append("</tr>");
                    sb.Append("</table>");

                    sb.Append("<br>");


                    sb.Append("<table style='margin-left:50px;'>");
                    sb.Append("<tr>");
                    sb.Append("<td>");
                    sb.Append("You can check the status under the MIS in the tracker module.");
                    sb.Append("</td>");
                    sb.Append("</tr>");
                    sb.Append("</table>");

                    sb.Append("<br>");


                    sb.Append("<table style='margin-left:50px;'>");
                    sb.Append("<tr>");
                    sb.Append("<td>");
                    sb.Append("Thank you again for your submission.");
                    sb.Append("</td>");
                    sb.Append("</tr>");
                    sb.Append("</table>");

                    sb.Append("<br>");


                    sb.Append("<table style='margin-left:50px;'>");
                    sb.Append("<tr>");
                    sb.Append("<td>");
                    sb.Append("Best regards,");
                    sb.Append("</td>");
                    sb.Append("</tr>");
                    sb.Append("<tr>");
                    sb.Append("<td>");
                    sb.Append("Atal Bhujal Yojana");
                    sb.Append("</td>");
                    sb.Append("</tr>");

                    sb.Append("</table>");

                    string results1 = WebConstents.SendEmailSMTP(gp_email, "", subject, sb.ToString(), "");


                    StringBuilder dpmu = new StringBuilder();
                    NodalOfficer = "District Level Nodal Officer";
                    string subject2 = "GP-filled-out information has been submitted for verification at your level";
                    string dpmu_email = "";
                    var users2 = ABE.obj_abhy_baseline_emailid.Where(x => x.state_name == State && x.district_name == Dist && x.nodalofficer == NodalOfficer).FirstOrDefault();
                    if(users2 != null) { 
                    dpmu_email = users2.email;
                    }
                    dpmu.Append("Dear,");
                    dpmu.Append("<br>");
                    dpmu.Append("<br>");

                    dpmu.Append("<table style='margin-left:50px;'>");
                    dpmu.Append("<tr>");
                    dpmu.Append("<td>");
                    dpmu.Append("The gathered information for the following Gram Panchayat has been submitted for verification at your level.");
                    dpmu.Append("</td>");
                    dpmu.Append("</tr>");
                    dpmu.Append("</table>");

                    dpmu.Append("<br>");
                    dpmu.Append("<br>");

                    dpmu.Append("<table width='800' border='8' cellspacing='5' cellpadding='5' align = 'center'>");
                    dpmu.Append("<tr>");
                    dpmu.Append("<th>");
                    dpmu.Append("State Name");
                    dpmu.Append("</th>");
                    dpmu.Append("<th>");
                    dpmu.Append("District Name");
                    dpmu.Append("</th>");
                    dpmu.Append("<th>");
                    dpmu.Append("Block Name");
                    dpmu.Append("</th>");
                    dpmu.Append("<th>");
                    dpmu.Append("Gram Panchayat Name");
                    dpmu.Append("</th>");
                    dpmu.Append("<th>");
                    dpmu.Append("Financial Year");
                    dpmu.Append("</th>");
                    dpmu.Append("<th>");
                    dpmu.Append("Month");
                    dpmu.Append("</th>");
                    dpmu.Append("</tr>");
                    dpmu.Append("<tr>");
                    dpmu.Append("<td>");
                    dpmu.Append(State);
                    dpmu.Append("</td>");
                    dpmu.Append("<td>");
                    dpmu.Append(Dist);
                    dpmu.Append("</td>");
                    dpmu.Append("<td>");
                    dpmu.Append(Block);
                    dpmu.Append("</td>");
                    dpmu.Append("<td>");
                    dpmu.Append(Gram);
                    dpmu.Append("</td>");
                    dpmu.Append("<td>");
                    dpmu.Append(Year);
                    dpmu.Append("</td>");
                    dpmu.Append("<td>");
                    dpmu.Append(Month);
                    dpmu.Append("</td>");
                    dpmu.Append("</tr>");
                    dpmu.Append("</table>");


                    dpmu.Append("<table style='margin-left:50px;'>");
                    dpmu.Append("<tr>");
                    dpmu.Append("<td>");
                    dpmu.Append("You will review the submitted information and, if satisfied, approved it; if not, reject it for correction at the GP level with your remarks in the GPDCI module within the MIS portal. ");
                    dpmu.Append("</td>");
                    dpmu.Append("</tr>");
                    dpmu.Append("</table>");

                    dpmu.Append("<br>");

                    dpmu.Append("<table style='margin-left:50px;'>");
                    dpmu.Append("<tr>");
                    dpmu.Append("<td>");
                    dpmu.Append("You can also check the status under the MIS in the tracker module.");
                    dpmu.Append("</td>");
                    dpmu.Append("</tr>");
                    dpmu.Append("</table>");


                    dpmu.Append("<br>");


                    dpmu.Append("<table style='margin-left:50px;'>");
                    dpmu.Append("<tr>");
                    dpmu.Append("<td>");
                    dpmu.Append("Please note that this is an automated message and we are unable to respond to replies to this email.");
                    dpmu.Append("</td>");
                    dpmu.Append("</tr>");
                    dpmu.Append("</table>");

                    dpmu.Append("<br>");

                    dpmu.Append("<table style='margin-left:50px;'>");
                    dpmu.Append("<tr>");
                    dpmu.Append("<td>");
                    dpmu.Append("Best regards,");
                    dpmu.Append("</td>");
                    dpmu.Append("</tr>");
                    dpmu.Append("<tr>");
                    dpmu.Append("<td>");
                    dpmu.Append("Atal Bhujal Yojana");
                    dpmu.Append("</td>");
                    dpmu.Append("</tr>");

                    dpmu.Append("</table>");
                    string results2 = WebConstents.SendEmailSMTP(dpmu_email, "", subject2, dpmu.ToString(), "");
                }
                else
                {
                    string spmu_email = "";
                    StringBuilder spmu = new StringBuilder();
                    NodalOfficer = "State Level Nodal Officer";
                    string subject = "GP-filled-out information has been submitted for verification at your level after being verified by DPMU.";
                    var users = ABE.obj_abhy_baseline_emailid.Where(x => x.state_name == State && x.nodalofficer == NodalOfficer).FirstOrDefault();
                    if(users != null) { 
                    spmu_email = users.email;
                    }
                    spmu.Append("Dear,");
                    spmu.Append("<br>");
                    spmu.Append("<br>");

                    spmu.Append("<table style='margin-left:50px;'>");
                    spmu.Append("<tr>");
                    spmu.Append("<td>");
                    spmu.Append("The gathered information for the following Gram Panchayat has been submitted for verification at your level.");
                    spmu.Append("</td>");
                    spmu.Append("</tr>");
                    spmu.Append("</table>");

                    spmu.Append("<br>");
                    spmu.Append("<br>");

                    spmu.Append("<table width='800' border='8' cellspacing='5' cellpadding='5' align = 'center'>");
                    spmu.Append("<tr>");
                    spmu.Append("<th>");
                    spmu.Append("State Name");
                    spmu.Append("</th>");
                    spmu.Append("<th>");
                    spmu.Append("District Name");
                    spmu.Append("</th>");
                    spmu.Append("<th>");
                    spmu.Append("Block Name");
                    spmu.Append("</th>");
                    spmu.Append("<th>");
                    spmu.Append("Gram Panchayat Name");
                    spmu.Append("</th>");
                    spmu.Append("<th>");
                    spmu.Append("Financial Year");
                    spmu.Append("</th>");
                    spmu.Append("<th>");
                    spmu.Append("Month");
                    spmu.Append("</th>");
                    spmu.Append("</tr>");
                    spmu.Append("<tr>");
                    spmu.Append("<td>");
                    spmu.Append(State);
                    spmu.Append("</td>");
                    spmu.Append("<td>");
                    spmu.Append(Dist);
                    spmu.Append("</td>");
                    spmu.Append("<td>");
                    spmu.Append(Block);
                    spmu.Append("</td>");
                    spmu.Append("<td>");
                    spmu.Append(Gram);
                    spmu.Append("</td>");
                    spmu.Append("<td>");
                    spmu.Append(Year);
                    spmu.Append("</td>");
                    spmu.Append("<td>");
                    spmu.Append(Month);
                    spmu.Append("</td>");
                    spmu.Append("</tr>");
                    spmu.Append("</table>");


                    spmu.Append("<table style='margin-left:50px;'>");
                    spmu.Append("<tr>");
                    spmu.Append("<td>");
                    spmu.Append("You will review the approved information.");
                    spmu.Append("</td>");
                    spmu.Append("</tr>");
                    spmu.Append("</table>");

                    spmu.Append("<br>");
                    spmu.Append("<table style='margin-left:50px;'>");
                    spmu.Append("<tr>");
                    spmu.Append("<td>");
                    spmu.Append("You can also check the status under the MIS in the tracker module.");
                    spmu.Append("</td>");
                    spmu.Append("</tr>");
                    spmu.Append("</table>");

                    spmu.Append("<br>");


                    spmu.Append("<table style='margin-left:50px;'>");
                    spmu.Append("<tr>");
                    spmu.Append("<td>");
                    spmu.Append("Please note that this is an automated message and we are unable to respond to replies to this email.");
                    spmu.Append("</td>");
                    spmu.Append("</tr>");
                    spmu.Append("</table>");

                    spmu.Append("<br>");

                    spmu.Append("<table style='margin-left:50px;'>");
                    spmu.Append("<tr>");
                    spmu.Append("<td>");
                    spmu.Append("Best regards,");
                    spmu.Append("</td>");
                    spmu.Append("</tr>");
                    spmu.Append("<tr>");
                    spmu.Append("<td>");
                    spmu.Append("Atal Bhujal Yojana");
                    spmu.Append("</td>");
                    spmu.Append("</tr>");

                    spmu.Append("</table>");
                    //string results = WebConstents.SendEmailSMTP(spmu_email, "", subject, spmu.ToString(), "");




                    string subject2 = "Approved by District Level Nodal Officer.";


                    sb.Append("Dear,");
                    sb.Append("<br>");
                    sb.Append("<br>");

                    sb.Append("<table style='margin-left:50px;'>");
                    sb.Append("<tr>");
                    sb.Append("<td>");
                    sb.Append("The gathered information for verification at the DPMU level for the following Gram Panchayat has been approved by the district-level nodal officer.");
                    sb.Append("</td>");
                    sb.Append("</tr>");
                    sb.Append("</table>");

                    sb.Append("<br>");
                    sb.Append("<br>");

                    sb.Append("<table width='800' border='8' cellspacing='5' cellpadding='5' align = 'center'>");
                    sb.Append("<tr>");
                    sb.Append("<th>");
                    sb.Append("State Name");
                    sb.Append("</th>");
                    sb.Append("<th>");
                    sb.Append("District Name");
                    sb.Append("</th>");
                    sb.Append("<th>");
                    sb.Append("Block Name");
                    sb.Append("</th>");
                    sb.Append("<th>");
                    sb.Append("Gram Panchayat Name");
                    sb.Append("</th>");
                    sb.Append("<th>");
                    sb.Append("Financial Year");
                    sb.Append("</th>");
                    sb.Append("<th>");
                    sb.Append("Month");
                    sb.Append("</th>");
                    sb.Append("</tr>");
                    sb.Append("<tr>");
                    sb.Append("<td>");
                    sb.Append(State);
                    sb.Append("</td>");
                    sb.Append("<td>");
                    sb.Append(Dist);
                    sb.Append("</td>");
                    sb.Append("<td>");
                    sb.Append(Block);
                    sb.Append("</td>");
                    sb.Append("<td>");
                    sb.Append(Gram);
                    sb.Append("</td>");
                    sb.Append("<td>");
                    sb.Append(Year);
                    sb.Append("</td>");
                    sb.Append("<td>");
                    sb.Append(Month);
                    sb.Append("</td>");
                    sb.Append("</tr>");
                    sb.Append("</table>");


                    sb.Append("<table style='margin-left:50px;'>");
                    sb.Append("<tr>");
                    sb.Append("<td>");
                    sb.Append("You can also check the status under the MIS in the tracker module.");
                    sb.Append("</td>");
                    sb.Append("</tr>");
                    sb.Append("</table>");

                    sb.Append("<br>");
                    sb.Append("<table style='margin-left:50px;'>");
                    sb.Append("<tr>");
                    sb.Append("<td>");
                    sb.Append("Please note that this is an automated message and we are unable to respond to replies to this email.");
                    sb.Append("</td>");
                    sb.Append("</tr>");
                    sb.Append("</table>");

                    sb.Append("<br>");


                    sb.Append("<table style='margin-left:50px;'>");
                    sb.Append("<tr>");
                    sb.Append("<td>");
                    sb.Append("Best regards,");
                    sb.Append("</td>");
                    sb.Append("</tr>");
                    sb.Append("<tr>");
                    sb.Append("<td>");
                    sb.Append("Atal Bhujal Yojana");
                    sb.Append("</td>");
                    sb.Append("</tr>");

                    sb.Append("</table>");
                    string results2 = WebConstents.SendEmailSMTP(gp_email, "", subject2, sb.ToString(), "");
                }


                return Json("Successfully Saved");



            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult baselinedata_approved(string Data)
        {
            if (Session["Userid"] != null)
            {
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<abhy_baseline_gpdata>(Data);
                var State = result.state_name;
                var Dist = result.district_name;
                var Block = result.block_name;
                var Gram = result.gpname;
                var Year = result.year;
                //var Month = Session["month"].ToString();
                var NodalOfficer = "";
                var subject = "";

                if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null)
                {

                    StringBuilder spmu = new StringBuilder();
                    NodalOfficer = "District Level Nodal Officer";
                    var gp_email = ABE.objUsers.Where(x => x.StateName == State && x.DistrictName == Dist && x.BlockName == Block && x.GramPanchayatName == Gram && x.NodalOfficer == "Gram Panchyat Nodal Officer").Select(x => x.Email).FirstOrDefault();
                    string dpmu_email = "";
                    var users = ABE.obj_abhy_baseline_emailid.Where(x => x.state_name == State && x.district_name == Dist && x.nodalofficer == NodalOfficer).FirstOrDefault();
                    if(users != null) { 
                    dpmu_email = users.email;
                    }
                    subject = "Approved by State Level Nodal Officer.";
                    spmu.Append("Dear,");
                    spmu.Append("<br>");
                    spmu.Append("<br>");

                    spmu.Append("<table style='margin-left:50px;'>");
                    spmu.Append("<tr>");
                    spmu.Append("<td>");
                    spmu.Append("The gathered information for verification at the SPMU level for the following Gram Panchayat has been approved by the state-level nodal officer, and that GP is locked for further changes or rectification at any level.");
                    spmu.Append("</td>");
                    spmu.Append("</tr>");
                    spmu.Append("</table>");

                    spmu.Append("<br>");
                    spmu.Append("<br>");

                    spmu.Append("<table width='800' border='8' cellspacing='5' cellpadding='5' align = 'center'>");
                    spmu.Append("<tr>");
                    spmu.Append("<th>");
                    spmu.Append("State Name");
                    spmu.Append("</th>");
                    spmu.Append("<th>");
                    spmu.Append("District Name");
                    spmu.Append("</th>");
                    spmu.Append("<th>");
                    spmu.Append("Block Name");
                    spmu.Append("</th>");
                    spmu.Append("<th>");
                    spmu.Append("Gram Panchayat Name");
                    spmu.Append("</th>");
                    spmu.Append("<th>");
                    spmu.Append("Financial Year");
                    spmu.Append("</th>");
                    //spmu.Append("<th>");
                    //spmu.Append("Month");
                    //spmu.Append("</th>");
                    spmu.Append("</tr>");
                    spmu.Append("<tr>");
                    spmu.Append("<td>");
                    spmu.Append(State);
                    spmu.Append("</td>");
                    spmu.Append("<td>");
                    spmu.Append(Dist);
                    spmu.Append("</td>");
                    spmu.Append("<td>");
                    spmu.Append(Block);
                    spmu.Append("</td>");
                    spmu.Append("<td>");
                    spmu.Append(Gram);
                    spmu.Append("</td>");
                    spmu.Append("<td>");
                    spmu.Append(Year);
                    spmu.Append("</td>");
                    //spmu.Append("<td>");
                    //spmu.Append(Month);
                    //spmu.Append("</td>");
                    spmu.Append("</tr>");
                    spmu.Append("</table>");


                    spmu.Append("<table style='margin-left:50px;'>");
                    spmu.Append("<tr>");
                    spmu.Append("<td>");
                    spmu.Append("You can also check the status under the MIS in the tracker module.");
                    spmu.Append("</td>");
                    spmu.Append("</tr>");
                    spmu.Append("</table>");

                    spmu.Append("<br>");
                    spmu.Append("<table style='margin-left:50px;'>");
                    spmu.Append("<tr>");
                    spmu.Append("<td>");
                    spmu.Append("Please note that this is an automated message and we are unable to respond to replies to this email.");
                    spmu.Append("</td>");
                    spmu.Append("</tr>");
                    spmu.Append("</table>");



                    spmu.Append("<br>");

                    spmu.Append("<table style='margin-left:50px;'>");
                    spmu.Append("<tr>");
                    spmu.Append("<td>");
                    spmu.Append("Best regards,");
                    spmu.Append("</td>");
                    spmu.Append("</tr>");
                    spmu.Append("<tr>");
                    spmu.Append("<td>");
                    spmu.Append("Atal Bhujal Yojana");
                    spmu.Append("</td>");
                    spmu.Append("</tr>");

                    spmu.Append("</table>");
                    string results = WebConstents.SendEmailSMTP(dpmu_email, gp_email, subject, spmu.ToString(), "");


                    var obj = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year).OrderByDescending(x => x.month_order_by).FirstOrDefault();
                    obj.approved = "true";
                    obj.approved_date = DateTime.Now.ToString("dd-MM-yyyy");
                    ABE.Entry(obj).State = EntityState.Modified;
                    ABE.SaveChanges();
                    return Json("Successfully Approved", JsonRequestBehavior.AllowGet);
                }
                return Json("Error", JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult baselinedata_reject_ndo(string Data)
        {

            if (Session["Userid"] != null)
            {
                DateTime now = DateTime.Now;
                int MonthNumber = now.Month;

                // Get the name of the month
                string monthName = CultureInfo.CurrentCulture.DateTimeFormat.GetMonthName(MonthNumber);
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<abhy_baseline_gpdata>(Data);
                var result1 = js.Deserialize<abhy_baseline_gp_remarks>(Data);
                if (result1.gpdata_remarks != "")
                {
                    var State = result.state_name;
                    var Dist = result.district_name;
                    var Block = result.block_name;
                    var Gram = result.gpname;
                    var Year = result.year;
                    var Month = monthName;

                    var UserEmail = Session["Email"].ToString();
                    var Officer = Session["Officer"].ToString();
                    var NodalOfficer = "";
                    var subject = "";

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null && Month != "0" && Month != "" && Month != null)
                    {
                        var obj = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year).OrderByDescending(x => x.month_order_by).FirstOrDefault();
                        if(Officer == "District Level Nodal Officer") {
                            obj.reject = true;
                            obj.e_sent = false;
                            obj.dist_reject_date = DateTime.Now.ToString("dd-MM-yyyy");
                        }
                        else if(Officer == "State Level Nodal Officer")
                        {
                            obj.s_reject = true;
                            obj.d_sent = false;
                            obj.state_reject_date = DateTime.Now.ToString("dd-MM-yyyy");
                        }

                        ABE.Entry(obj).State = EntityState.Modified;
                        ABE.SaveChanges();

                        var ID = obj.id;

                        var ListObjRemarks = ABE.obj_abhy_baseline_gpdata_remarks.Where(x => x.id == ID).ToList();

                        abhy_baseline_gp_remarks objRemarks = new abhy_baseline_gp_remarks();

                        var ddetails = ListObjRemarks.SingleOrDefault();
                        if (ListObjRemarks.Count == 1)
                        {
                            ddetails.state_remarks = result1.state_remarks;
                            ddetails.gpdata_remarks = result1.gpdata_remarks;
                            ABE.Entry(ddetails).State = EntityState.Modified;
                            ABE.SaveChanges();
                        }
                        else
                        {
                            objRemarks.id = obj.id;
                            objRemarks.state_remarks = result1.state_remarks;
                            objRemarks.gpdata_remarks = result1.gpdata_remarks;
                            ABE.obj_abhy_baseline_gpdata_remarks.Add(objRemarks);
                            ABE.SaveChanges();
                        }
                    }
                    else
                    {
                        return Json("Logout");
                    }
                    StringBuilder sb = new StringBuilder();
                    if (Officer == "District Level Nodal Officer")
                    {
                        var reject = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.reject == true && x.s_reject == true).ToList();
                        if (reject.Count == 1)
                        {
                            NodalOfficer = "Gram Panchyat Nodal Officer";
                            var users = ABE.objUsers.Where(x => x.StateName == State && x.DistrictName == Dist && x.BlockName == Block && x.GramPanchayatName == Gram && x.NodalOfficer == NodalOfficer).FirstOrDefault();
                            var gp_email = users.Email;
                            StringBuilder dpmu = new StringBuilder();
                            subject = "Rejected by State Level Nodal Officer and District Level Nodal Officer.";
                            dpmu.Append("Dear,");
                            dpmu.Append("<br>");
                            dpmu.Append("<br>");

                            dpmu.Append("<table style='margin-left:50px;'>");
                            dpmu.Append("<tr>");
                            dpmu.Append("<td>");
                            dpmu.Append("The gathered information for verification submitted to the SPMU level for the following Gram Panchayat has been rejected with remarks by the state-level nodal officer. In addition, the district-level nodal officer also rejected the same with his or her remarks.");
                            dpmu.Append("</td>");
                            dpmu.Append("</tr>");
                            dpmu.Append("</table>");

                            dpmu.Append("<br>");
                            dpmu.Append("<br>");

                            dpmu.Append("<table width='800' border='8' cellspacing='5' cellpadding='5' align = 'center'>");
                            dpmu.Append("<tr>");
                            dpmu.Append("<th>");
                            dpmu.Append("State Name");
                            dpmu.Append("</th>");
                            dpmu.Append("<th>");
                            dpmu.Append("District Name");
                            dpmu.Append("</th>");
                            dpmu.Append("<th>");
                            dpmu.Append("Block Name");
                            dpmu.Append("</th>");
                            dpmu.Append("<th>");
                            dpmu.Append("Gram Panchayat Name");
                            dpmu.Append("</th>");
                            dpmu.Append("<th>");
                            dpmu.Append("Financial Year");
                            dpmu.Append("</th>");
                            dpmu.Append("<th>");
                            dpmu.Append("Month");
                            dpmu.Append("</th>");
                            dpmu.Append("</tr>");
                            dpmu.Append("<tr>");
                            dpmu.Append("<td>");
                            dpmu.Append(State);
                            dpmu.Append("</td>");
                            dpmu.Append("<td>");
                            dpmu.Append(Dist);
                            dpmu.Append("</td>");
                            dpmu.Append("<td>");
                            dpmu.Append(Block);
                            dpmu.Append("</td>");
                            dpmu.Append("<td>");
                            dpmu.Append(Gram);
                            dpmu.Append("</td>");
                            dpmu.Append("<td>");
                            dpmu.Append(Year);
                            dpmu.Append("</td>");
                            dpmu.Append("<td>");
                            dpmu.Append(Month);
                            dpmu.Append("</td>");
                            dpmu.Append("</tr>");
                            dpmu.Append("</table>");


                            dpmu.Append("<table style='margin-left:50px;'>");
                            dpmu.Append("<tr>");
                            dpmu.Append("<td>");
                            dpmu.Append("Please correct the information as per the remarks in the GPDCI module under the MIS and submit it again for verification as soon as possible.");
                            dpmu.Append("</td>");
                            dpmu.Append("</tr>");
                            dpmu.Append("</table>");

                            dpmu.Append("<br>");
                            dpmu.Append("<table style='margin-left:50px;'>");
                            dpmu.Append("<tr>");
                            dpmu.Append("<td>");
                            dpmu.Append("You can also check the status under the MIS in the tracker module.");
                            dpmu.Append("</td>");
                            dpmu.Append("</tr>");
                            dpmu.Append("</table>");
                            dpmu.Append("<br>");
                            dpmu.Append("<table style='margin-left:50px;'>");
                            dpmu.Append("<tr>");
                            dpmu.Append("<td>");
                            dpmu.Append("Please note that this is an automated message and we are unable to respond to replies to this email.");
                            dpmu.Append("</td>");
                            dpmu.Append("</tr>");
                            dpmu.Append("</table>");



                            dpmu.Append("<br>");

                            dpmu.Append("<table style='margin-left:50px;'>");
                            dpmu.Append("<tr>");
                            dpmu.Append("<td>");
                            dpmu.Append("Best regards,");
                            dpmu.Append("</td>");
                            dpmu.Append("</tr>");
                            dpmu.Append("<tr>");
                            dpmu.Append("<td>");
                            dpmu.Append("Atal Bhujal Yojana");
                            dpmu.Append("</td>");
                            dpmu.Append("</tr>");

                            dpmu.Append("</table>");
                            string results = WebConstents.SendEmailSMTP(gp_email, "", subject, dpmu.ToString(), "");
                        }
                        else
                        {
                            NodalOfficer = "Gram Panchyat Nodal Officer";
                            var users = ABE.objUsers.Where(x => x.StateName == State && x.DistrictName == Dist && x.BlockName == Block && x.GramPanchayatName == Gram && x.NodalOfficer == NodalOfficer).FirstOrDefault();
                            var gp_email = users.Email;
                            StringBuilder dpmu = new StringBuilder();
                            subject = "Rejected by District Level Nodal Officer.";
                            dpmu.Append("Dear,");
                            dpmu.Append("<br>");
                            dpmu.Append("<br>");

                            dpmu.Append("<table style='margin-left:50px;'>");
                            dpmu.Append("<tr>");
                            dpmu.Append("<td>");
                            dpmu.Append("The gathered information for verification at the DPMU level for the following Gram Panchayat has been rejected with remarks by the district-level nodal officer.");
                            dpmu.Append("</td>");
                            dpmu.Append("</tr>");
                            dpmu.Append("</table>");

                            dpmu.Append("<br>");
                            dpmu.Append("<br>");

                            dpmu.Append("<table width='800' border='8' cellspacing='5' cellpadding='5' align = 'center'>");
                            dpmu.Append("<tr>");
                            dpmu.Append("<th>");
                            dpmu.Append("State Name");
                            dpmu.Append("</th>");
                            dpmu.Append("<th>");
                            dpmu.Append("District Name");
                            dpmu.Append("</th>");
                            dpmu.Append("<th>");
                            dpmu.Append("Block Name");
                            dpmu.Append("</th>");
                            dpmu.Append("<th>");
                            dpmu.Append("Gram Panchayat Name");
                            dpmu.Append("</th>");
                            dpmu.Append("<th>");
                            dpmu.Append("Financial Year");
                            dpmu.Append("</th>");
                            dpmu.Append("<th>");
                            dpmu.Append("Month");
                            dpmu.Append("</th>");
                            dpmu.Append("</tr>");
                            dpmu.Append("<tr>");
                            dpmu.Append("<td>");
                            dpmu.Append(State);
                            dpmu.Append("</td>");
                            dpmu.Append("<td>");
                            dpmu.Append(Dist);
                            dpmu.Append("</td>");
                            dpmu.Append("<td>");
                            dpmu.Append(Block);
                            dpmu.Append("</td>");
                            dpmu.Append("<td>");
                            dpmu.Append(Gram);
                            dpmu.Append("</td>");
                            dpmu.Append("<td>");
                            dpmu.Append(Year);
                            dpmu.Append("</td>");
                            dpmu.Append("<td>");
                            dpmu.Append(Month);
                            dpmu.Append("</td>");
                            dpmu.Append("</tr>");
                            dpmu.Append("</table>");


                            dpmu.Append("<table style='margin-left:50px;'>");
                            dpmu.Append("<tr>");
                            dpmu.Append("<td>");
                            dpmu.Append("Please correct the information as per the remarks in the GPDCI module under the MIS and submit again for verification as soon as possible.");
                            dpmu.Append("</td>");
                            dpmu.Append("</tr>");
                            dpmu.Append("</table>");

                            dpmu.Append("<br>");
                            dpmu.Append("<table style='margin-left:50px;'>");
                            dpmu.Append("<tr>");
                            dpmu.Append("<td>");
                            dpmu.Append("You can also check the status under the MIS in the tracker module.");
                            dpmu.Append("</td>");
                            dpmu.Append("</tr>");
                            dpmu.Append("</table>");
                            dpmu.Append("<br>");
                            dpmu.Append("<table style='margin-left:50px;'>");
                            dpmu.Append("<tr>");
                            dpmu.Append("<td>");
                            dpmu.Append("Please note that this is an automated message and we are unable to respond to replies to this email.");
                            dpmu.Append("</td>");
                            dpmu.Append("</tr>");
                            dpmu.Append("</table>");



                            dpmu.Append("<br>");

                            dpmu.Append("<table style='margin-left:50px;'>");
                            dpmu.Append("<tr>");
                            dpmu.Append("<td>");
                            dpmu.Append("Best regards,");
                            dpmu.Append("</td>");
                            dpmu.Append("</tr>");
                            dpmu.Append("<tr>");
                            dpmu.Append("<td>");
                            dpmu.Append("Atal Bhujal Yojana");
                            dpmu.Append("</td>");
                            dpmu.Append("</tr>");

                            dpmu.Append("</table>");
                            string results = WebConstents.SendEmailSMTP(gp_email, "", subject, dpmu.ToString(), "");


                        }

                    }
                    //else if (Officer == "State Level Nodal Officer")
                    //{
                    //    NodalOfficer = "District Level Nodal Officer";
                    //    var users = ABE.objUsers.Where(x => x.StateName == State && x.DistrictName == Dist && x.NodalOfficer == NodalOfficer).FirstOrDefault();
                    //    var dpmu_email = users.Email;

                    //    StringBuilder spmu = new StringBuilder();
                    //    subject = "Rejected by State Level Nodal Officer.";
                    //    spmu.Append("Dear,");
                    //    spmu.Append("<br>");
                    //    spmu.Append("<br>");

                    //    spmu.Append("<table style='margin-left:50px;'>");
                    //    spmu.Append("<tr>");
                    //    spmu.Append("<td>");
                    //    spmu.Append("The gathered information for verification submitted to the SPMU level for the following Gram Panchayat has been rejected with remarks by the state-level nodal officer.Check the remarks, add from your level, and reject so that the GP level can correct and submit again as soon as possible.");
                    //    spmu.Append("</td>");
                    //    spmu.Append("</tr>");
                    //    spmu.Append("</table>");

                    //    spmu.Append("<br>");
                    //    spmu.Append("<br>");

                    //    spmu.Append("<table width='800' border='8' cellspacing='5' cellpadding='5' align = 'center'>");
                    //    spmu.Append("<tr>");
                    //    spmu.Append("<th>");
                    //    spmu.Append("State Name");
                    //    spmu.Append("</th>");
                    //    spmu.Append("<th>");
                    //    spmu.Append("District Name");
                    //    spmu.Append("</th>");
                    //    spmu.Append("<th>");
                    //    spmu.Append("Block Name");
                    //    spmu.Append("</th>");
                    //    spmu.Append("<th>");
                    //    spmu.Append("Gram Panchayat Name");
                    //    spmu.Append("</th>");
                    //    spmu.Append("<th>");
                    //    spmu.Append("Financial Year");
                    //    spmu.Append("</th>");
                    //    spmu.Append("<th>");
                    //    spmu.Append("Month");
                    //    spmu.Append("</th>");
                    //    spmu.Append("</tr>");
                    //    spmu.Append("<tr>");
                    //    spmu.Append("<td>");
                    //    spmu.Append(State);
                    //    spmu.Append("</td>");
                    //    spmu.Append("<td>");
                    //    spmu.Append(Dist);
                    //    spmu.Append("</td>");
                    //    spmu.Append("<td>");
                    //    spmu.Append(Block);
                    //    spmu.Append("</td>");
                    //    spmu.Append("<td>");
                    //    spmu.Append(Gram);
                    //    spmu.Append("</td>");
                    //    spmu.Append("<td>");
                    //    spmu.Append(Year);
                    //    spmu.Append("</td>");
                    //    spmu.Append("<td>");
                    //    spmu.Append(Month);
                    //    spmu.Append("</td>");
                    //    spmu.Append("</tr>");
                    //    spmu.Append("</table>");





                    //    spmu.Append("<br>");
                    //    spmu.Append("<table style='margin-left:50px;'>");
                    //    spmu.Append("<tr>");
                    //    spmu.Append("<td>");
                    //    spmu.Append("You can also check the status under the MIS in the tracker module.");
                    //    spmu.Append("</td>");
                    //    spmu.Append("</tr>");
                    //    spmu.Append("</table>");

                    //    spmu.Append("<br>");

                    //    spmu.Append("<table style='margin-left:50px;'>");
                    //    spmu.Append("<tr>");
                    //    spmu.Append("<td>");
                    //    spmu.Append("Please note that this is an automated message and we are unable to respond to replies to this email.");
                    //    spmu.Append("</td>");
                    //    spmu.Append("</tr>");
                    //    spmu.Append("</table>");



                    //    spmu.Append("<br>");

                    //    spmu.Append("<table style='margin-left:50px;'>");
                    //    spmu.Append("<tr>");
                    //    spmu.Append("<td>");
                    //    spmu.Append("Best regards,");
                    //    spmu.Append("</td>");
                    //    spmu.Append("</tr>");
                    //    spmu.Append("<tr>");
                    //    spmu.Append("<td>");
                    //    spmu.Append("Atal Bhujal Yojana");
                    //    spmu.Append("</td>");
                    //    spmu.Append("</tr>");

                    //    spmu.Append("</table>");
                    //    string results = WebConstents.SendEmailSMTP(dpmu_email, "", subject, spmu.ToString(), "");

                    //}

                    return Json("Successfully Rejected");


                }
                else
                {
                    return Json("Error");
                }

            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }

        //akash

        [HttpPost]
        public JsonResult DeleteImage_From_baseline_gp_upload(string SectionName, int id)
        {
            var data = ABE.obj_abhy_baseline_gp_upload.Where(x => x.p_id == id).FirstOrDefault();
            var state_name = data.state_name;
            var gpname = data.gpname;
            var year = data.year;
            var month = data.month;
            if (SectionName == "demographic_file")
            {
                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\AtaljalGPDCI\\" + state_name + "\\" + gpname + "\\" + year + "\\" + month + "\\Demographic Profile\\" + "\\");
                string[] files = Directory.GetFiles(path);
                foreach (string file in files)
                {
                    System.IO.File.Delete(file);
                }
                data.demographic_file = "";
                data.demographic_path = "";

            }
            else if (SectionName == "livestock_file")
            {
                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\AtaljalGPDCI\\" + state_name + "\\" + gpname + "\\" + year + "\\" + month + "\\Livestock Population\\" + "\\");
                string[] files = Directory.GetFiles(path);
                foreach (string file in files)
                {

                    System.IO.File.Delete(file);

                }
                data.livestock_file = "";
                data.livestock_path = "";
            }
            else if (SectionName == "netsown_area_file")
            {
                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\AtaljalGPDCI\\" + state_name + "\\" + gpname + "\\" + year + "\\" + month + "\\Net Sown Area\\" + "\\");
                string[] files = Directory.GetFiles(path);
                foreach (string file in files)
                {
                    System.IO.File.Delete(file);
                }
                data.netsown_area_file = "";
                data.netsown_area_path = "";
            }
            else if (SectionName == "area_cultivation_file")
            {
                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\AtaljalGPDCI\\" + state_name + "\\" + gpname + "\\" + year + "\\" + month + "\\Area Under Cultivation\\" + "\\");
                string[] files = Directory.GetFiles(path);
                foreach (string file in files)
                {
                    System.IO.File.Delete(file);
                }
                data.area_cultivation_file = "";
                data.area_cultivation_path = "";
            }
            else if (SectionName == "suface_water_file")
            {
                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\AtaljalGPDCI\\" + state_name + "\\" + gpname + "\\" + year + "\\" + month + "\\Surface Water\\" + "\\");
                string[] files = Directory.GetFiles(path);
                foreach (string file in files)
                {
                    System.IO.File.Delete(file);
                }
                data.suface_water_file = "";
                data.suface_water_path = "";
            }
            else if (SectionName == "ground_water_file")
            {
                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\AtaljalGPDCI\\" + state_name + "\\" + gpname + "\\" + year + "\\" + month + "\\Ground Water\\" + "\\");
                string[] files = Directory.GetFiles(path);
                foreach (string file in files)
                {
                    System.IO.File.Delete(file);
                }
                data.ground_water_file = "";
                data.ground_water_path = "";
            }
            else if (SectionName == "existing_wells_file")
            {
                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\AtaljalGPDCI\\" + state_name + "\\" + gpname + "\\" + year + "\\" + month + "\\Existing Wells\\" + "\\");
                string[] files = Directory.GetFiles(path);
                foreach (string file in files)
                {
                    System.IO.File.Delete(file);
                }
                data.existing_wells_file = "";
                data.existing_wells_path = "";
            }
            else if (SectionName == "water_lifting_file")
            {
                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\AtaljalGPDCI\\" + state_name + "\\" + gpname + "\\" + year + "\\" + month + "\\Water Lifting\\" + "\\");
                string[] files = Directory.GetFiles(path);
                foreach (string file in files)
                {
                    System.IO.File.Delete(file);
                }
                data.water_lifting_file = "";
                data.water_lifting_path = "";
            }
            else if (SectionName == "water_efficient_file")
            {
                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\AtaljalGPDCI\\" + state_name + "\\" + gpname + "\\" + year + "\\" + month + "\\Water Efficient\\" + "\\");
                string[] files = Directory.GetFiles(path);
                foreach (string file in files)
                {
                    System.IO.File.Delete(file);
                }
                data.water_efficient_file = "";
                data.water_efficient_path = "";
            }

            //ABE.obj_abhy_baseline_gp_upload.Add(data);
            ABE.Entry(data).State = EntityState.Modified;
            ABE.SaveChanges();
            return Json("Deleted Successfully", JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult Saveimage(int id, HttpPostedFileBase txtimage1, HttpPostedFileBase txtimage2, HttpPostedFileBase txtimage4, HttpPostedFileBase txtimage5, HttpPostedFileBase txtimage6, HttpPostedFileBase txtimage7, HttpPostedFileBase txtimage8, HttpPostedFileBase txtimage9, HttpPostedFileBase txtimage10)
        {
            try
            {
                var data = ABE.obj_abhy_baseline_gpdata.Where(x => x.id == id).FirstOrDefault();
                var state_name = data.state_name;
                var district_name = data.district_name;
                var block_name = data.block_name;
                var gpname = data.gpname;
                var year = data.year;
                var month = data.month;
                int month_num = Get_Month_Number(month);
                abhy_baseline_gp_upload objUpload = new abhy_baseline_gp_upload();
                if (data != null)
                {
                    //data.id = id;
                    var UploadData = ABE.obj_abhy_baseline_gp_upload.Where(x => x.id == id).FirstOrDefault();
                    if (UploadData != null)
                    {
                        if (txtimage1 != null)
                        {
                            if (txtimage1.FileName != null)
                            {
                                string filename = Path.GetFileNameWithoutExtension(txtimage1.FileName);
                                string ext = Path.GetExtension(txtimage1.FileName);
                                string fname = $"{filename}_{Guid.NewGuid().ToString("N").Substring(0, 8)}";
                                filename = fname + ext;

                                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\AtaljalGPDCI\\" + state_name + "\\" + gpname + "\\" + year + "\\" + month + "\\Demographic Profile\\" + "\\");
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
                                path = path + filename;
                                UploadData.demographic_file = filename;
                                UploadData.demographic_path = "/Ataljalimages/AtaljalGPDCI/" + state_name + "/" + gpname + "/" + year + "/" + month + "/Demographic Profile/" + filename;
                                txtimage1.SaveAs(path);
                            }
                        }
                        if (txtimage2 != null)
                        {
                            if (txtimage2.FileName != null)
                            {
                                string filename = Path.GetFileNameWithoutExtension(txtimage2.FileName);
                                string ext = Path.GetExtension(txtimage2.FileName);
                                string fname = $"{filename}_{Guid.NewGuid().ToString("N").Substring(0, 8)}";
                                filename = fname + ext;

                                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\AtaljalGPDCI\\" + state_name + "\\" + gpname + "\\" + year + "\\" + month + "\\Livestock Population\\" + "\\");

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
                                path = path + filename;
                                UploadData.livestock_file = filename;
                                UploadData.livestock_path = "/Ataljalimages/AtaljalGPDCI/" + state_name + "/" + gpname + "/" + year + "/" + month + "/Livestock Population/" + filename;
                                txtimage2.SaveAs(path);
                            }
                        }

                        if (txtimage4 != null)
                        {
                            if (txtimage4.FileName != null)
                            {

                                string filename = Path.GetFileNameWithoutExtension(txtimage4.FileName);
                                string ext = Path.GetExtension(txtimage4.FileName);
                                string fname = $"{filename}_{Guid.NewGuid().ToString("N").Substring(0, 8)}";
                                filename = fname + ext;

                                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\AtaljalGPDCI\\" + state_name + "\\" + gpname + "\\" + year + "\\" + month + "\\Net Sown Area\\" + "\\");

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
                                path = path + filename;
                                UploadData.netsown_area_file = filename;
                                UploadData.netsown_area_path = "/Ataljalimages/AtaljalGPDCI/" + state_name + "/" + gpname + "/" + year + "/" + month + "/Net Sown Area/" + filename;
                                txtimage4.SaveAs(path);
                            }
                        }
                        if (txtimage5 != null)
                        {
                            if (txtimage5.FileName != null)
                            {

                                string filename = Path.GetFileNameWithoutExtension(txtimage5.FileName);
                                string ext = Path.GetExtension(txtimage5.FileName);
                                string fname = $"{filename}_{Guid.NewGuid().ToString("N").Substring(0, 8)}";
                                filename = fname + ext;

                                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\AtaljalGPDCI\\" + state_name + "\\" + gpname + "\\" + year + "\\" + month + "\\Area Under Cultivation\\" + "\\");

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
                                path = path + filename;
                                UploadData.area_cultivation_file = filename;
                                UploadData.area_cultivation_path = "/Ataljalimages/AtaljalGPDCI/" + state_name + "/" + gpname + "/" + year + "/" + month + "/Area Under Cultivation/" + filename;
                                txtimage5.SaveAs(path);
                            }
                        }
                        if (txtimage6 != null)
                        {
                            if (txtimage6.FileName != null)
                            {

                                string filename = Path.GetFileNameWithoutExtension(txtimage6.FileName);
                                string ext = Path.GetExtension(txtimage6.FileName);
                                string fname = $"{filename}_{Guid.NewGuid().ToString("N").Substring(0, 8)}";
                                filename = fname + ext;

                                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\AtaljalGPDCI\\" + state_name + "\\" + gpname + "\\" + year + "\\" + month + "\\Surface Water\\" + "\\");

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
                                path = path + filename;
                                UploadData.suface_water_file = filename;
                                UploadData.suface_water_path = "/Ataljalimages/AtaljalGPDCI/" + state_name + "/" + gpname + "/" + year + "/" + month + "/Surface Water/" + filename;
                                txtimage6.SaveAs(path);
                            }
                        }
                        if (txtimage7 != null)
                        {
                            if (txtimage7.FileName != null)
                            {

                                string filename = Path.GetFileNameWithoutExtension(txtimage7.FileName);
                                string ext = Path.GetExtension(txtimage7.FileName);
                                string fname = $"{filename}_{Guid.NewGuid().ToString("N").Substring(0, 8)}";
                                filename = fname + ext;

                                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\AtaljalGPDCI\\" + state_name + "\\" + gpname + "\\" + year + "\\" + month + "\\Ground Water\\" + "\\");

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
                                path = path + filename;
                                UploadData.ground_water_file = filename;
                                UploadData.ground_water_path = "/Ataljalimages/AtaljalGPDCI/" + state_name + "/" + gpname + "/" + year + "/" + month + "/Ground Water/" + filename;
                                txtimage7.SaveAs(path);
                            }
                        }
                        if (txtimage8 != null)
                        {
                            if (txtimage8.FileName != null)
                            {

                                string filename = Path.GetFileNameWithoutExtension(txtimage8.FileName);
                                string ext = Path.GetExtension(txtimage8.FileName);
                                string fname = $"{filename}_{Guid.NewGuid().ToString("N").Substring(0, 8)}";
                                filename = fname + ext;

                                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\AtaljalGPDCI\\" + state_name + "\\" + gpname + "\\" + year + "\\" + month + "\\Existing Wells\\" + "\\");

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
                                path = path + filename;
                                UploadData.existing_wells_file = filename;
                                UploadData.existing_wells_path = "/Ataljalimages/AtaljalGPDCI/" + state_name + "/" + gpname + "/" + year + "/" + month + "/Existing Wells/" + filename;
                                txtimage8.SaveAs(path);
                            }
                        }
                        if (txtimage9 != null)
                        {
                            if (txtimage9.FileName != null)
                            {

                                string filename = Path.GetFileNameWithoutExtension(txtimage9.FileName);
                                string ext = Path.GetExtension(txtimage9.FileName);
                                string fname = $"{filename}_{Guid.NewGuid().ToString("N").Substring(0, 8)}";
                                filename = fname + ext;

                                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\AtaljalGPDCI\\" + state_name + "\\" + gpname + "\\" + year + "\\" + month + "\\Water Lifting\\" + "\\");

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
                                path = path + filename;
                                UploadData.water_lifting_file = filename;
                                UploadData.water_lifting_path = "/Ataljalimages/AtaljalGPDCI/" + state_name + "/" + gpname + "/" + year + "/" + month + "/Water Lifting/" + filename;
                                txtimage9.SaveAs(path);
                            }
                        }
                        if (txtimage10 != null)
                        {
                            if (txtimage10.FileName != null)
                            {

                                string filename = Path.GetFileNameWithoutExtension(txtimage10.FileName);
                                string ext = Path.GetExtension(txtimage10.FileName);
                                string fname = $"{filename}_{Guid.NewGuid().ToString("N").Substring(0, 8)}";
                                filename = fname + ext;

                                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\AtaljalGPDCI\\" + state_name + "\\" + gpname + "\\" + year + "\\" + month + "\\Water Efficient\\" + "\\");

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
                                path = path + filename;
                                UploadData.water_efficient_file = filename;
                                UploadData.water_efficient_path = "/Ataljalimages/AtaljalGPDCI/" + state_name + "/" + gpname + "/" + year + "/" + month + "/Water Efficient/" + filename;
                                txtimage10.SaveAs(path);
                            }
                        }

                        UploadData.state_name = data.state_name;
                        UploadData.district_name = data.district_name;
                        UploadData.block_name = data.block_name;
                        UploadData.gpname = data.gpname;
                        UploadData.year = data.year;
                        UploadData.month = data.month;
                        ABE.Entry(UploadData).State = EntityState.Modified;
                        ABE.SaveChanges();
                        //return Json(" Updated Successfully ");
                    }
                    else
                    {

                        var UploadData1 = ABE.obj_abhy_baseline_gp_upload.Where(x => x.gpname == gpname).OrderByDescending(x => x.p_id).FirstOrDefault();
                        if (txtimage1 != null)
                        {
                            if (txtimage1.FileName != null)
                            {
                                string filename = Path.GetFileNameWithoutExtension(txtimage1.FileName);
                                string ext = Path.GetExtension(txtimage1.FileName);
                                string fname = $"{filename}_{Guid.NewGuid().ToString("N").Substring(0, 8)}";
                                filename = fname + ext;

                                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\AtaljalGPDCI\\" + state_name + "\\" + gpname + "\\" + year + "\\" + month + "\\Demographic Profile\\" + "\\");

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
                                path = path + filename;
                                objUpload.demographic_file = filename;
                                objUpload.demographic_path = "/Ataljalimages/AtaljalGPDCI/" + state_name + "/" + gpname + "/" + year + "/" + month + "/Demographic Profile/" + filename;
                                txtimage1.SaveAs(path);
                            }
                        }
                        else
                        {
                           
                            objUpload.demographic_file = "";
                            objUpload.demographic_path = "";
                            
                        }
                        if (txtimage2 != null)
                        {
                            if (txtimage2.FileName != null)
                            {

                                string filename = Path.GetFileNameWithoutExtension(txtimage2.FileName);
                                string ext = Path.GetExtension(txtimage2.FileName);
                                string fname = $"{filename}_{Guid.NewGuid().ToString("N").Substring(0, 8)}";
                                filename = fname + ext;

                                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\AtaljalGPDCI\\" + state_name + "\\" + gpname + "\\" + year + "\\" + month + "\\Livestock Population\\" + "\\");

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
                                path = path + filename;
                                objUpload.livestock_file = filename;
                                objUpload.livestock_path = "/Ataljalimages/AtaljalGPDCI/" + state_name + "/" + gpname + "/" + year + "/" + month + "/Livestock Population/" + filename;
                                txtimage2.SaveAs(path);
                            }
                        }
                        else
                        {
                            objUpload.livestock_file = "";
                            objUpload.livestock_path = "";
                        }

                        if (txtimage4 != null)
                        {
                            if (txtimage4.FileName != null)
                            {

                                string filename = Path.GetFileNameWithoutExtension(txtimage4.FileName);
                                string ext = Path.GetExtension(txtimage4.FileName);
                                string fname = $"{filename}_{Guid.NewGuid().ToString("N").Substring(0, 8)}";
                                filename = fname + ext;

                                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\AtaljalGPDCI\\" + state_name + "\\" + gpname + "\\" + year + "\\" + month + "\\Net Sown Area\\" + "\\");

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
                                path = path + filename;
                                objUpload.netsown_area_file = filename;
                                objUpload.netsown_area_path = "/Ataljalimages/AtaljalGPDCI/" + state_name + "/" + gpname + "/" + year + "/" + month + "/Net Sown Area/" + filename;
                                txtimage4.SaveAs(path);
                            }
                        }
                        else
                        {
                            objUpload.netsown_area_file = "";
                            objUpload.netsown_area_path = "";
                        }
                        if (txtimage5 != null)
                        {
                            if (txtimage5.FileName != null)
                            {

                                string filename = Path.GetFileNameWithoutExtension(txtimage5.FileName);
                                string ext = Path.GetExtension(txtimage5.FileName);
                                string fname = $"{filename}_{Guid.NewGuid().ToString("N").Substring(0, 8)}";
                                filename = fname + ext;

                                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\AtaljalGPDCI\\" + state_name + "\\" + gpname + "\\" + year + "\\" + month + "\\Area Under Cultivation\\" + "\\");

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
                                path = path + filename;
                                objUpload.area_cultivation_file = filename;
                                objUpload.area_cultivation_path = "/Ataljalimages/AtaljalGPDCI/" + state_name + "/" + gpname + "/" + year + "/" + month + "/Area Under Cultivation/" + filename;
                                txtimage5.SaveAs(path);
                            }
                        }
                        else
                        {
                            
                                objUpload.area_cultivation_file = "";
                                objUpload.area_cultivation_path = "";
                            
                        }
                        if (txtimage6 != null)
                        {
                            if (txtimage6.FileName != null)
                            {

                                string filename = Path.GetFileNameWithoutExtension(txtimage6.FileName);
                                string ext = Path.GetExtension(txtimage6.FileName);
                                string fname = $"{filename}_{Guid.NewGuid().ToString("N").Substring(0, 8)}";
                                filename = fname + ext;

                                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\AtaljalGPDCI\\" + state_name + "\\" + gpname + "\\" + year + "\\" + month + "\\Surface Water\\" + "\\");

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
                                path = path + filename;
                                objUpload.suface_water_file = filename;
                                objUpload.suface_water_path = "/Ataljalimages/AtaljalGPDCI/" + state_name + "/" + gpname + "/" + year + "/" + month + "/Surface Water/" + filename;
                                txtimage6.SaveAs(path);
                            }
                        }
                        else
                        {
                            objUpload.suface_water_file = "";
                            objUpload.suface_water_path = "";
                        }
                        if (txtimage7 != null)
                        {
                            if (txtimage7.FileName != null)
                            {

                                string filename = Path.GetFileNameWithoutExtension(txtimage7.FileName);
                                string ext = Path.GetExtension(txtimage7.FileName);
                                string fname = $"{filename}_{Guid.NewGuid().ToString("N").Substring(0, 8)}";
                                filename = fname + ext;

                                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\AtaljalGPDCI\\" + state_name + "\\" + gpname + "\\" + year + "\\" + month + "\\Ground Water\\" + "\\");

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
                                path = path + filename;
                                objUpload.ground_water_file = filename;
                                objUpload.ground_water_path = "/Ataljalimages/AtaljalGPDCI/" + state_name + "/" + gpname + "/" + year + "/" + month + "/Ground Water/" + filename;
                                txtimage7.SaveAs(path);
                            }
                        }
                        else
                        {
                            objUpload.ground_water_file = "";
                            objUpload.ground_water_path = "";
                        }
                        if (txtimage8 != null)
                        {
                            if (txtimage8.FileName != null)
                            {

                                string filename = Path.GetFileNameWithoutExtension(txtimage8.FileName);
                                string ext = Path.GetExtension(txtimage8.FileName);
                                string fname = $"{filename}_{Guid.NewGuid().ToString("N").Substring(0, 8)}";
                                filename = fname + ext;

                                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\AtaljalGPDCI\\" + state_name + "\\" + gpname + "\\" + year + "\\" + month + "\\Existing Wells\\" + "\\");

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
                                path = path + filename;
                                objUpload.existing_wells_file = filename;
                                objUpload.existing_wells_path = "/Ataljalimages/AtaljalGPDCI/" + state_name + "/" + gpname + "/" + year + "/" + month + "/Existing Wells/" + filename;
                                txtimage8.SaveAs(path);
                            }
                        }
                        else
                        {
                            objUpload.existing_wells_file = "";
                            objUpload.existing_wells_path = "";
                        }
                        if (txtimage9 != null)
                        {
                            if (txtimage9.FileName != null)
                            {

                                string filename = Path.GetFileNameWithoutExtension(txtimage9.FileName);
                                string ext = Path.GetExtension(txtimage9.FileName);
                                string fname = $"{filename}_{Guid.NewGuid().ToString("N").Substring(0, 8)}";
                                filename = fname + ext;

                                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\AtaljalGPDCI\\" + state_name + "\\" + gpname + "\\" + year + "\\" + month + "\\Water Lifting\\" + "\\");

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
                                path = path + filename;
                                objUpload.water_lifting_file = filename;
                                objUpload.water_lifting_path = "/Ataljalimages/AtaljalGPDCI/" + state_name + "/" + gpname + "/" + year + "/" + month + "/Water Lifting/" + filename;
                                txtimage9.SaveAs(path);
                            }
                        }
                        else
                        {
                            objUpload.water_lifting_file = "";
                            objUpload.water_lifting_path = "";
                        }
                        if (txtimage10 != null)
                        {
                            if (txtimage10.FileName != null)
                            {

                                string filename = Path.GetFileNameWithoutExtension(txtimage10.FileName);
                                string ext = Path.GetExtension(txtimage10.FileName);
                                string fname = $"{filename}_{Guid.NewGuid().ToString("N").Substring(0, 8)}";
                                filename = fname + ext;

                                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\AtaljalGPDCI\\" + state_name + "\\" + gpname + "\\" + year + "\\" + month + "\\Water Efficient\\" + "\\");

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
                                path = path + filename;
                                objUpload.water_efficient_file = filename;
                                objUpload.water_efficient_path = "/Ataljalimages/AtaljalGPDCI/" + state_name + "/" + gpname + "/" + year + "/" + month + "/Water Efficient/" + filename;
                                txtimage10.SaveAs(path);
                            }
                        }
                        else
                        {
                            objUpload.water_efficient_file = "";
                            objUpload.water_efficient_path = "";
                        }
                        objUpload.id = id;
                        objUpload.state_name = data.state_name;
                        objUpload.district_name = data.district_name;
                        objUpload.block_name = data.block_name;
                        objUpload.gpname = data.gpname;
                        objUpload.year = data.year;
                        objUpload.month = data.month;
                        ABE.obj_abhy_baseline_gp_upload.Add(objUpload);
                        ABE.SaveChanges();
                        //return Json("Successfully Saved");
                    }
                }
            }
            catch (Exception Ex)
            {

                return Json("Error", JsonRequestBehavior.AllowGet);
            }
            return Json("Successfully Saved");


        }


        //negective code added
        [HttpPost]
        public ActionResult baselinedata_saveing(AbhyBaselineGpModel result)
        {

            if (Session["UserId"] != null)
            {
                List<abhy_baseline_gpdata> ddetails = new List<abhy_baseline_gpdata>();
                abhy_baseline_gpdata obj = new abhy_baseline_gpdata();

                abhy_baseline_gp_livestock livestock = new abhy_baseline_gp_livestock();
                abhy_baseline_gp_surfacewater surface = new abhy_baseline_gp_surfacewater();
                abhy_baseline_gp_groundwater ground = new abhy_baseline_gp_groundwater();
                abhy_baseline_gp_existingwells existing = new abhy_baseline_gp_existingwells();
                abhy_baseline_gp_watereff watereff = new abhy_baseline_gp_watereff();

                //JavaScriptSerializer js = new JavaScriptSerializer();
                //var result = js.Deserialize<AbhyBaselineGpModel>(Data);

                var Email = Session["Email"].ToString();
                var State = result.state_name;
                var Dist = result.district_name;
                var Block = result.block_name;
                var Gram = result.gpname;
                var Year = result.year;
                var Month = result.month;
                int month_num = Get_Month_Number(Month);
                if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null && Month != "0" && Month != "" && Month != null)
                {
                    ddetails = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year && x.month == Month).ToList();//total list                                                                                          
                }

                var ddetails1 = ddetails.SingleOrDefault();
                if (ddetails.Count == 1)
                {
                    ddetails1.state_name = State.Trim();
                    ddetails1.district_name = Dist.Trim();

                    ddetails1.block_name = Block.Trim();

                    ddetails1.gpname = Gram.Trim(); ;
                    ddetails1.year = Year;
                    ddetails1.month = Month;
                    ddetails1.month_order_by = month_num;
                    ddetails1.entry_by = Email;

                    if (result.approved != null && result.approved != "")
                    {
                        ddetails1.approved = result.approved;
                    }

                    if (result.source_year != null && result.source_year != "")
                    {
                        ddetails1.source_year = result.source_year;
                    }

                    if (result.tol_population != null && result.tol_population != "")
                    {

                        ddetails1.tol_population = result.tol_population;

                    }
                    if (result.male_population != null && result.male_population != "")
                    {

                        ddetails1.male_population = result.male_population;

                    }
                    if (result.female_population != null && result.female_population != "")
                    {
                        ddetails1.female_population = result.female_population;

                    }
                    if (result.transgender_population != null && result.transgender_population != "")
                    {
                        ddetails1.transgender_population = result.transgender_population;
                    }

                    if (result.no_of_bpl != null && result.no_of_bpl != "")
                    {
                        ddetails1.no_of_bpl = result.no_of_bpl;
                    }
                    if (result.no_of_sc != null && result.no_of_sc != "")
                    {
                        ddetails1.no_of_sc = result.no_of_sc;
                    }
                    if (result.no_of_st != null && result.no_of_st != "")
                    {

                        ddetails1.no_of_st = result.no_of_st;

                    }
                    if (result.no_of_obc != null && result.no_of_obc != "")
                    {

                        ddetails1.no_of_obc = result.no_of_obc;

                    }

                    if (result.no_of_households != null && result.no_of_households != "")
                    {

                        ddetails1.no_of_households = result.no_of_households;

                    }

                    if (result.gp_area_in_ha != null && result.gp_area_in_ha != "")
                    {

                        ddetails1.gp_area_in_ha = result.gp_area_in_ha;

                    }

                    if (result.forest_area_in_ha != null && result.forest_area_in_ha != "")
                    {

                        ddetails1.forest_area_in_ha = result.forest_area_in_ha;

                    }
                    if (result.fallow_land_in_ha != null && result.fallow_land_in_ha != "")
                    {

                        ddetails1.fallow_land_in_ha = result.fallow_land_in_ha;

                    }
                    if (result.cultivable_land_in_ha != null && result.cultivable_land_in_ha != "")
                    {

                        ddetails1.cultivable_land_in_ha = result.cultivable_land_in_ha;

                    }
                    if (result.net_sown_area != null && result.net_sown_area != "")
                    {

                        ddetails1.net_sown_area = result.net_sown_area;

                    }
                    if (result.net_irrigated_area != null && result.net_irrigated_area != "")
                    {

                        ddetails1.net_irrigated_area = result.net_irrigated_area;

                    }
                    if (result.irrigated_area_in_kharif != null && result.irrigated_area_in_kharif != "")
                    {

                        ddetails1.irrigated_area_in_kharif = result.irrigated_area_in_kharif;

                    }
                    if (result.irrigated_area_in_rabi != null && result.irrigated_area_in_rabi != "")
                    {

                        ddetails1.irrigated_area_in_rabi = result.irrigated_area_in_rabi;

                    }
                    if (result.irrigated_area_in_summer != null && result.irrigated_area_in_summer != "")
                    {

                        ddetails1.irrigated_area_in_summer = result.irrigated_area_in_summer;

                    }


                    if (result.non_energised != null && result.non_energised != "")
                    {

                        ddetails1.non_energised = result.non_energised;

                    }
                    if (result.diesel_pumps != null && result.diesel_pumps != "")
                    {

                        ddetails1.diesel_pumps = result.diesel_pumps;

                    }
                    if (result.centrifugal_pumps != null && result.centrifugal_pumps != "")
                    {

                        ddetails1.centrifugal_pumps = result.centrifugal_pumps;

                    }
                    if (result.submersible_pumps != null && result.submersible_pumps != "")
                    {

                        ddetails1.submersible_pumps = result.submersible_pumps;

                    }
                    if (result.solar_pumps != null && result.solar_pumps != "")
                    {

                        ddetails1.solar_pumps = result.solar_pumps;

                    }
                    if (result.total_electric_pumps != null && result.total_electric_pumps != "")
                    {

                        ddetails1.total_electric_pumps = result.total_electric_pumps;

                    }
                    if (result.total_water_lifting_devices != null && result.total_water_lifting_devices != "")
                    {

                        ddetails1.total_water_lifting_devices = result.total_water_lifting_devices;

                    }
                    if (result.total_cropped_area != null && result.total_cropped_area != "")
                    {

                        ddetails1.total_cropped_area = result.total_cropped_area;

                    }

                    if (result.no_of_general != null && result.no_of_general != "")
                    {

                        ddetails1.no_of_general = result.no_of_general;

                    }
                    string village_name = "";
                    if (result.village_name != null)
                    {

                        for (var i = 0; i < result.village_name.Length; i++)
                        {
                            if (i == 0)
                                village_name += result.village_name[i];
                            else
                                village_name += "," + result.village_name[i];
                        }
                    }
                    ddetails1.total_no_of_village = result.total_no_of_village;
                    ddetails1.village_name = village_name;
                    ddetails1.other_land_use = result.other_land_use;
                    ddetails1.total_irrigated_area = result.total_irrigated_area;
                    //ddetails1.net_irrigated_area = result.net_irrigated_area;
                    ddetails1.un_irrigated_area_in_kharif = result.un_irrigated_area_in_kharif;
                    ddetails1.un_irrigated_area_in_rabi = result.un_irrigated_area_in_rabi;
                    ddetails1.un_irrigated_area_in_summer = result.un_irrigated_area_in_summer;
                    ddetails1.total_un_irrigated_area = result.total_un_irrigated_area;

                    ABE.Entry(ddetails1).State = EntityState.Modified;
                    var Data_details = ABE.obj_abhy_wsp_wateravailbility_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.year == Year).ToList();
                    if(Data_details.Count != 0)
                    {
                        ABE.Entry(Data_details[0]).State = EntityState.Deleted;
                    }
                    var data1 = ABE.obj_abhy_uti_waterdraft_domestic_new.
              Where(n => n.state == State && n.district == Dist && n.block == Block && n.gp == Gram && n.year == Year).ToList();
                    if(data1.Count != 0)
                    {
                        ABE.Entry(data1[0]).State = EntityState.Deleted;
                    }

                    var details = ABE.obj_abhy_wsp_waterbudget_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year).FirstOrDefault();
                    if (details != null)
                    {
                        ABE.Entry(details).State = EntityState.Deleted;
                    }
                    ABE.SaveChanges();
                    // AJE.Entry(ddetails1).State = EntityState.Modified;
                    // AJE.SaveChanges();


                    #region DELETE ALL DROPDOWN ENTRY
                    var ID = ddetails1.id;

                    var livestock_dt = ABE.obj_abhy_baseline_gp_livestock.Where(x => x.id == ID).ToList();
                    var surfacewater_dt = ABE.obj_abhy_baseline_gp_surfacewater.Where(x => x.id == ID).ToList();
                    var groundwater_dt = ABE.obj_abhy_baseline_gp_groundwater.Where(x => x.id == ID).ToList();
                    var existingwells_dt = ABE.obj_abhy_baseline_gp_existingwells.Where(x => x.id == ID).ToList();
                    var watereff_dt = ABE.obj_abhy_baseline_gp_watereff.Where(x => x.id == ID).ToList();
                    if (livestock_dt.Count != 0)
                    {
                        foreach (var L in livestock_dt)
                        {
                            ABE.obj_abhy_baseline_gp_livestock.Remove(L);
                        }
                        ABE.SaveChanges();
                    }

                    if (surfacewater_dt.Count != 0)
                    {
                        foreach (var sr in surfacewater_dt)
                        {
                            ABE.obj_abhy_baseline_gp_surfacewater.Remove(sr);
                        }
                        ABE.SaveChanges();
                    }

                    if (groundwater_dt.Count != 0)
                    {
                        foreach (var gr in groundwater_dt)
                        {
                            ABE.obj_abhy_baseline_gp_groundwater.Remove(gr);
                        }
                        ABE.SaveChanges();
                    }

                    if (existingwells_dt.Count != 0)
                    {
                        foreach (var ex in existingwells_dt)
                        {
                            ABE.obj_abhy_baseline_gp_existingwells.Remove(ex);
                        }
                        ABE.SaveChanges();
                    }

                    if (watereff_dt.Count != 0)
                    {
                        foreach (var we in watereff_dt)
                        {
                            ABE.obj_abhy_baseline_gp_watereff.Remove(we);
                        }
                        ABE.SaveChanges();
                    }

                    #endregion
                    #region abhy_baseline_gp_ All DropDown


                    if (result.livestock_name != null)
                    {
                        for (int i = 0; i < result.livestock_name.Length; i++)
                        {
                            livestock.id = ddetails1.id;
                            livestock.state_name = State.Trim();
                            livestock.district_name = Dist.Trim();
                            livestock.block_name = Block.Trim();
                            livestock.gpname = Gram.Trim(); ;
                            livestock.year = Year;
                            livestock.month = Month;
                            livestock.source_year_liv = result.source_year_liv;
                            livestock.livestock_name = result.livestock_name[i];
                            livestock.livestock_value = result.livestock_value[i];
                            ABE.obj_abhy_baseline_gp_livestock.Add(livestock);
                            ABE.SaveChanges();
                        }
                    }

                    if (result.surface_water_name != null)
                    {
                        for (int i = 0; i < result.surface_water_name.Length; i++)
                        {
                            surface.id = ddetails1.id;
                            surface.state_name = State.Trim();
                            surface.district_name = Dist.Trim();
                            surface.block_name = Block.Trim();
                            surface.gpname = Gram.Trim(); ;
                            surface.year = Year;
                            surface.month = Month;
                            surface.surface_water_name = result.surface_water_name[i];
                            surface.surface_water_value = result.surface_water_value[i];
                            ABE.obj_abhy_baseline_gp_surfacewater.Add(surface);
                            ABE.SaveChanges();
                        }
                    }

                    if (result.ground_water_name != null)
                    {
                        for (int i = 0; i < result.ground_water_name.Length; i++)
                        {
                            ground.id = ddetails1.id;
                            ground.state_name = State.Trim();
                            ground.district_name = Dist.Trim();
                            ground.block_name = Block.Trim();
                            ground.gpname = Gram.Trim(); ;
                            ground.year = Year;
                            ground.month = Month;
                            ground.ground_water_name = result.ground_water_name[i];
                            ground.ground_water_value = result.ground_water_value[i];
                            ABE.obj_abhy_baseline_gp_groundwater.Add(ground);
                            ABE.SaveChanges();
                        }
                    }

                    if (result.existing_wells_name != null)
                    {
                        for (int i = 0; i < result.existing_wells_name.Length; i++)
                        {
                            existing.id = ddetails1.id;
                            existing.state_name = State.Trim();
                            existing.district_name = Dist.Trim();
                            existing.block_name = Block.Trim();
                            existing.gpname = Gram.Trim(); ;
                            existing.year = Year;
                            existing.month = Month;
                            existing.existing_wells_name = result.existing_wells_name[i];
                            existing.existing_wells_value = result.existing_wells_value[i];
                            ABE.obj_abhy_baseline_gp_existingwells.Add(existing);
                            ABE.SaveChanges();
                        }
                    }

                    if (result.water_eff_practices_name != null)
                    {
                        for (int i = 0; i < result.water_eff_practices_name.Length; i++)
                        {
                            watereff.id = ddetails1.id;
                            watereff.state_name = State.Trim();
                            watereff.district_name = Dist.Trim();
                            watereff.block_name = Block.Trim();
                            watereff.gpname = Gram.Trim(); ;
                            watereff.year = Year;
                            watereff.month = Month;
                            watereff.water_eff_practices_name = result.water_eff_practices_name[i];
                            watereff.water_eff_practices_value = result.water_eff_practices_value[i];
                            ABE.obj_abhy_baseline_gp_watereff.Add(watereff);
                            ABE.SaveChanges();
                        }
                    }

                    #endregion


                    return Json(ddetails1.id + "," + "Successfully Saved");
                }
                else
                {
                    if (ddetails.Count == 0)
                    {
                        obj.state_name = State.Trim();
                        obj.district_name = Dist.Trim();

                        obj.block_name = Block;

                        obj.gpname = Gram;
                        obj.year = Year;
                        obj.entry_by = Email;
                        obj.month = Month;
                        obj.month_order_by = month_num;

                        if (result.approved != null && result.approved != "")
                        {
                            obj.approved = result.approved;
                        }
                        float tol_population = 0;

                        if (result.male_population != null && result.male_population != "")
                        {
                            tol_population += float.Parse(result.male_population);
                        }
                        if (result.female_population != null && result.female_population != "")
                        {
                            tol_population += float.Parse(result.female_population);
                        }
                        if (result.transgender_population != null && result.transgender_population != "")
                        {
                            tol_population += float.Parse(result.transgender_population);
                        }



                        if (result.tol_population != null && result.tol_population != "")
                        {


                            obj.tol_population = tol_population.ToString();

                        }
                        if (result.male_population != null && result.male_population != "")
                        {

                            obj.male_population = result.male_population;

                        }
                        if (result.female_population != null && result.female_population != "")
                        {

                            obj.female_population = result.female_population;

                        }
                        if (result.transgender_population != null && result.transgender_population != "")
                        {

                            obj.transgender_population = result.transgender_population;

                        }

                        if (result.no_of_bpl != null && result.no_of_bpl != "")
                        {

                            obj.no_of_bpl = result.no_of_bpl;

                        }
                        if (result.no_of_sc != null && result.no_of_sc != "")
                        {

                            obj.no_of_sc = result.no_of_sc;

                        }
                        if (result.no_of_st != null && result.no_of_st != "")
                        {

                            obj.no_of_st = result.no_of_st;

                        }
                        if (result.no_of_obc != null && result.no_of_obc != "")
                        {

                            obj.no_of_obc = result.no_of_obc;

                        }
                        if (result.no_of_households != null && result.no_of_households != "")
                        {

                            obj.no_of_households = result.no_of_households;

                        }

                        if (result.gp_area_in_ha != null && result.gp_area_in_ha != "")
                        {

                            obj.gp_area_in_ha = result.gp_area_in_ha;

                        }
                        if (result.forest_area_in_ha != null && result.forest_area_in_ha != "")
                        {

                            obj.forest_area_in_ha = result.forest_area_in_ha;

                        }
                        if (result.fallow_land_in_ha != null && result.fallow_land_in_ha != "")
                        {

                            obj.fallow_land_in_ha = result.fallow_land_in_ha;

                        }
                        if (result.cultivable_land_in_ha != null && result.cultivable_land_in_ha != "")
                        {

                            obj.cultivable_land_in_ha = result.cultivable_land_in_ha;


                        }
                        if (result.net_sown_area != null && result.net_sown_area != "")
                        {

                            obj.net_sown_area = result.net_sown_area;

                        }
                        if (result.net_irrigated_area != null && result.net_irrigated_area != "")
                        {

                            obj.net_irrigated_area = result.net_irrigated_area;

                        }
                        if (result.irrigated_area_in_kharif != null && result.irrigated_area_in_kharif != "")
                        {

                            obj.irrigated_area_in_kharif = result.irrigated_area_in_kharif;

                        }
                        if (result.irrigated_area_in_rabi != null && result.irrigated_area_in_rabi != "")
                        {

                            obj.irrigated_area_in_rabi = result.irrigated_area_in_rabi;

                        }
                        if (result.irrigated_area_in_summer != null && result.irrigated_area_in_summer != "")
                        {

                            obj.irrigated_area_in_summer = result.irrigated_area_in_summer;


                        }
                        if (result.non_energised != null && result.non_energised != "")
                        {

                            obj.non_energised = result.non_energised;

                        }
                        if (result.diesel_pumps != null && result.diesel_pumps != "")
                        {

                            obj.diesel_pumps = result.diesel_pumps;

                        }

                        if (result.centrifugal_pumps != null && result.centrifugal_pumps != "")
                        {

                            obj.centrifugal_pumps = result.centrifugal_pumps;

                        }
                        if (result.submersible_pumps != null && result.submersible_pumps != "")
                        {

                            obj.submersible_pumps = result.submersible_pumps;

                        }

                        if (result.total_cropped_area != null && result.total_cropped_area != "")
                        {

                            //new columns
                            obj.total_cropped_area = result.total_cropped_area;

                        }
                        if (result.solar_pumps != null && result.solar_pumps != "")
                        {

                            obj.solar_pumps = result.solar_pumps;

                        }
                        if (result.total_electric_pumps != null && result.total_electric_pumps != "")
                        {

                            obj.total_electric_pumps = result.total_electric_pumps;

                        }

                        if (result.total_water_lifting_devices != null && result.total_water_lifting_devices != "")
                        {

                            obj.total_water_lifting_devices = result.total_water_lifting_devices;

                        }


                        if (result.no_of_general != null && result.no_of_general != "")
                        {

                            obj.no_of_general = result.no_of_general;

                        }
                        string village_name = "";
                        if (result.village_name != null)
                        {

                            for (var i = 0; i < result.village_name.Length; i++)
                            {
                                if (i == 0)
                                    village_name += result.village_name[i];
                                else
                                    village_name += "," + result.village_name[i];
                            }
                        }
                        obj.source_year = result.source_year;
                        obj.total_no_of_village = result.total_no_of_village;
                        obj.village_name = village_name;
                        obj.other_land_use = result.other_land_use;
                        obj.total_irrigated_area = result.total_irrigated_area;
                        //obj.net_irrigated_area = result.net_irrigated_area;
                        obj.un_irrigated_area_in_kharif = result.un_irrigated_area_in_kharif;
                        obj.un_irrigated_area_in_rabi = result.un_irrigated_area_in_rabi;
                        obj.un_irrigated_area_in_summer = result.un_irrigated_area_in_summer;
                        obj.total_un_irrigated_area = result.total_un_irrigated_area;
                        ABE.obj_abhy_baseline_gpdata.Add(obj);
                        ABE.SaveChanges();


                        #region abhy_baseline_gp_ All DropDown

                        if (result.livestock_name != null)
                        {
                            for (int i = 0; i < result.livestock_name.Length; i++)
                            {
                                livestock.id = obj.id;
                                livestock.state_name = obj.state_name;
                                livestock.district_name = obj.district_name;
                                livestock.block_name = obj.block_name;
                                livestock.gpname = obj.gpname;
                                livestock.year = obj.year;
                                livestock.month = obj.month;
                                livestock.source_year_liv = result.source_year_liv;
                                livestock.livestock_name = result.livestock_name[i];
                                livestock.livestock_value = result.livestock_value[i];
                                ABE.obj_abhy_baseline_gp_livestock.Add(livestock);
                                ABE.SaveChanges();
                            }
                        }

                        if (result.surface_water_name != null)
                        {
                            for (int i = 0; i < result.surface_water_name.Length; i++)
                            {
                                surface.id = obj.id;
                                surface.state_name = obj.state_name;
                                surface.district_name = obj.district_name;
                                surface.block_name = obj.block_name;
                                surface.gpname = obj.gpname;
                                surface.year = obj.year;
                                surface.month = obj.month;
                                surface.surface_water_name = result.surface_water_name[i];
                                surface.surface_water_value = result.surface_water_value[i];
                                ABE.obj_abhy_baseline_gp_surfacewater.Add(surface);
                                ABE.SaveChanges();
                            }
                        }

                        if (result.ground_water_name != null)
                        {
                            for (int i = 0; i < result.ground_water_name.Length; i++)
                            {
                                ground.id = obj.id;
                                ground.state_name = obj.state_name;
                                ground.district_name = obj.district_name;
                                ground.block_name = obj.block_name;
                                ground.gpname = obj.gpname;
                                ground.year = obj.year;
                                ground.month = obj.month;
                                ground.ground_water_name = result.ground_water_name[i];
                                ground.ground_water_value = result.ground_water_value[i];
                                ABE.obj_abhy_baseline_gp_groundwater.Add(ground);
                                ABE.SaveChanges();
                            }
                        }

                        if (result.existing_wells_name != null)
                        {
                            for (int i = 0; i < result.existing_wells_name.Length; i++)
                            {
                                existing.id = obj.id;
                                existing.state_name = obj.state_name;
                                existing.district_name = obj.district_name;
                                existing.block_name = obj.block_name;
                                existing.gpname = obj.gpname;
                                existing.year = obj.year;
                                existing.month = obj.month;
                                existing.existing_wells_name = result.existing_wells_name[i];
                                existing.existing_wells_value = result.existing_wells_value[i];
                                ABE.obj_abhy_baseline_gp_existingwells.Add(existing);
                                ABE.SaveChanges();
                            }
                        }

                        if (result.water_eff_practices_name != null)
                        {
                            for (int i = 0; i < result.water_eff_practices_name.Length; i++)
                            {
                                watereff.id = obj.id;
                                watereff.state_name = obj.state_name;
                                watereff.district_name = obj.district_name;
                                watereff.block_name = obj.block_name;
                                watereff.gpname = obj.gpname;
                                watereff.year = obj.year;
                                watereff.month = obj.month;
                                watereff.water_eff_practices_name = result.water_eff_practices_name[i];
                                watereff.water_eff_practices_value = result.water_eff_practices_value[i];
                                ABE.obj_abhy_baseline_gp_watereff.Add(watereff);
                                ABE.SaveChanges();
                            }
                        }


                        #endregion

                        //AJE.obj_gpprofiles.Add(obj);
                        //AJE.SaveChanges();
                        return Json(obj.id + "," + "Successfully Saved");
                    }
                    else
                    {
                        return Json("Duplicate Data is there");
                    }

                }
            }
            else
            {
                Session["WSPHOME"] = "Data";
                return RedirectToAction("WSP_GWM_HOME", "WSPNew");
            }
        }



        [HttpPost]
        public ActionResult b_chart_data_saveing(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {

                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_baseline_drinkingwater_irrigation_gpdata>(Data);
                    var obj = new abhy_baseline_drinkingwater_irrigation_gpdata();
                    var State = result.state_name;
                    var Dist = result.district_name;

                    var Block = result.block_name;
                    var Gram = result.gpname;

                    obj.state_name = State.Trim();
                    obj.district_name = Dist.Trim();

                    obj.block_name = Block;

                    obj.gpname = Gram;

                    obj.habitation_village = result.habitation_village;
                    obj.irri_water_req_monsoon = result.irri_water_req_monsoon;
                    obj.irri_water_req_nonmonsoon = result.irri_water_req_nonmonsoon;
                    obj.drinking_water_req_human = result.drinking_water_req_human;

                    obj.drinking_water_req_livestock = result.drinking_water_req_livestock;
                    obj.drinking_water_req_total = result.drinking_water_req_total;
                    obj.water_avail_drinking = result.water_avail_drinking;
                    obj.water_avail_irrigation = result.water_avail_irrigation;
                    obj.percapita_water_avail_people = result.percapita_water_avail_people;

                    obj.userid = Convert.ToInt32(Session["UserId"]);
                    ABE.obj_abhy_baseline_drinkingwater_irrigation_gpdata.Add(obj);
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
        [HttpPost]
        public ActionResult b_table_data_geting(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_baseline_drinkingwater_irrigation_gpdata> ddetails = new List<abhy_baseline_drinkingwater_irrigation_gpdata>();
                    // List<gpprofile> ddetails = new List<gpprofile>();
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_baseline_drinkingwater_irrigation_gpdata>(Data);
                    List<abhy_baseline_drinkingwater_irrigation_gpdata> TDetails = new List<abhy_baseline_drinkingwater_irrigation_gpdata>();
                    var State = result.state_name;
                    var Dist = result.district_name;
                    var Block = result.block_name;
                    var Gram = result.gpname;

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        TDetails = ABE.obj_abhy_baseline_drinkingwater_irrigation_gpdata.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        TDetails = ABE.obj_abhy_baseline_drinkingwater_irrigation_gpdata.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        TDetails = ABE.obj_abhy_baseline_drinkingwater_irrigation_gpdata.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        TDetails = ABE.obj_abhy_baseline_drinkingwater_irrigation_gpdata.Where(x => x.state_name == State).ToList();//total list

                    }


                    return Json(TDetails, JsonRequestBehavior.AllowGet);
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
        public ActionResult b_table_data_delete(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_baseline_drinkingwater_irrigation_gpdata>(Data);

                    if (result.id != 0)
                    {
                        var TKID = Convert.ToInt32(result.id);
                        var Data1 = ABE.obj_abhy_baseline_drinkingwater_irrigation_gpdata.Where(x => x.id == TKID).SingleOrDefault();
                        if (Data1 != null)
                        {

                            ABE.Entry(Data1).State = EntityState.Deleted;
                            ABE.SaveChanges();
                            return Json("Deleted Successfully");
                        }
                        else
                        {
                            return Json("Error", JsonRequestBehavior.AllowGet);
                        }


                    }
                    else
                    {
                        return Json("No Data", JsonRequestBehavior.AllowGet);
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
        public ActionResult c_chart_data_saveing(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {

                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_baseline_borewell_tubewell_gpdata>(Data);
                    var obj = new abhy_baseline_borewell_tubewell_gpdata();
                    var State = result.state_name;
                    var Dist = result.district_name;

                    var Block = result.block_name;
                    var Gram = result.gpname;

                    obj.state_name = State.Trim();
                    obj.district_name = Dist.Trim();

                    obj.block_name = Block;

                    obj.gpname = Gram;

                    obj.latitude = result.latitude;
                    obj.longitude = result.longitude;
                    obj.founctional_water = result.founctional_water;
                    obj.habitation_village = result.habitation_village;
                    obj.typeofwell = result.typeofwell;
                    obj.borewell_depth = result.borewell_depth;
                    obj.casing_depth = result.casing_depth;
                    obj.depth_of_pump_install = result.depth_of_pump_install;

                    obj.pump_capacity_hp = result.pump_capacity_hp;
                    obj.pump_capacity_stages = result.pump_capacity_stages;
                    obj.yield = result.yield;
                    obj.water_supply_3hrs = result.water_supply_3hrs;
                    obj.water_supply_6hrs = result.water_supply_6hrs;

                    obj.userid = Convert.ToInt32(Session["UserId"]);
                    ABE.obj_abhy_baseline_borewell_tubewell_gpdata.Add(obj);
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
        [HttpPost]
        public ActionResult c_table_data_geting(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_baseline_borewell_tubewell_gpdata>(Data);
                    List<abhy_baseline_borewell_tubewell_gpdata> TDetails = new List<abhy_baseline_borewell_tubewell_gpdata>();
                    var State = result.state_name;
                    var Dist = result.district_name;
                    var Block = result.block_name;
                    var Gram = result.gpname;

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        TDetails = ABE.obj_abhy_baseline_borewell_tubewell_gpdata.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        TDetails = ABE.obj_abhy_baseline_borewell_tubewell_gpdata.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        TDetails = ABE.obj_abhy_baseline_borewell_tubewell_gpdata.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        TDetails = ABE.obj_abhy_baseline_borewell_tubewell_gpdata.Where(x => x.state_name == State).ToList();//total list

                    }


                    return Json(TDetails, JsonRequestBehavior.AllowGet);
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
        public ActionResult c_table_data_delete(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_baseline_borewell_tubewell_gpdata>(Data);

                    if (result.id != 0)
                    {
                        var TKID = Convert.ToInt32(result.id);
                        var Data1 = ABE.obj_abhy_baseline_borewell_tubewell_gpdata.Where(x => x.id == TKID).SingleOrDefault();
                        if (Data1 != null)
                        {

                            ABE.Entry(Data1).State = EntityState.Deleted;
                            ABE.SaveChanges();
                            return Json("Deleted Successfully");
                        }
                        else
                        {
                            return Json("Error", JsonRequestBehavior.AllowGet);
                        }


                    }
                    else
                    {
                        return Json("No Data", JsonRequestBehavior.AllowGet);
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
        public ActionResult d_chart_data_saveing(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {

                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_baseline_gwl_observation_wells_gpdata>(Data);
                    var obj = new abhy_baseline_gwl_observation_wells_gpdata();
                    var State = result.state_name;
                    var Dist = result.district_name;

                    var Block = result.block_name;
                    var Gram = result.gpname;

                    obj.state_name = State.Trim();
                    obj.district_name = Dist.Trim();

                    obj.block_name = Block;

                    obj.gpname = Gram;

                    obj.block_district_village_name = result.block_district_village_name;
                    obj.latitude = result.latitude;
                    obj.logitude = result.logitude;
                    obj.well_depth = result.well_depth;

                    obj.reduced_level = result.reduced_level;
                    obj.height_mp = result.height_mp;
                    obj.aquifer = result.aquifer;
                    obj.depth_waterlevel_bgl = result.depth_waterlevel_bgl;
                    obj.userid = Convert.ToInt32(Session["UserId"]);
                    ABE.obj_abhy_baseline_gwl_observation_wells_gpdata.Add(obj);
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
        [HttpPost]
        public ActionResult d_table_data_geting(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_baseline_gwl_observation_wells_gpdata>(Data);
                    List<abhy_baseline_gwl_observation_wells_gpdata> TDetails = new List<abhy_baseline_gwl_observation_wells_gpdata>();
                    var State = result.state_name;
                    var Dist = result.district_name;
                    var Block = result.block_name;
                    var Gram = result.gpname;

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        TDetails = ABE.obj_abhy_baseline_gwl_observation_wells_gpdata.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        TDetails = ABE.obj_abhy_baseline_gwl_observation_wells_gpdata.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        TDetails = ABE.obj_abhy_baseline_gwl_observation_wells_gpdata.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        TDetails = ABE.obj_abhy_baseline_gwl_observation_wells_gpdata.Where(x => x.state_name == State).ToList();//total list

                    }


                    return Json(TDetails, JsonRequestBehavior.AllowGet);
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
        public ActionResult d_table_data_delete(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_baseline_gwl_observation_wells_gpdata>(Data);

                    if (result.id != 0)
                    {
                        var TKID = Convert.ToInt32(result.id);
                        var Data1 = ABE.obj_abhy_baseline_gwl_observation_wells_gpdata.Where(x => x.id == TKID).SingleOrDefault();
                        if (Data1 != null)
                        {

                            ABE.Entry(Data1).State = EntityState.Deleted;
                            ABE.SaveChanges();
                            return Json("Deleted Successfully");
                        }
                        else
                        {
                            return Json("Error", JsonRequestBehavior.AllowGet);
                        }


                    }
                    else
                    {
                        return Json("No Data", JsonRequestBehavior.AllowGet);
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
        public ActionResult e_chart_data_saveing(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {

                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_baseline_gw_qualitydata_gpdata>(Data);
                    var obj = new abhy_baseline_gw_qualitydata_gpdata();
                    var State = result.state_name;
                    var Dist = result.district_name;

                    var Block = result.block_name;
                    var Gram = result.gpname;

                    obj.state_name = State.Trim();
                    obj.district_name = Dist.Trim();

                    obj.block_name = Block;

                    obj.gpname = Gram;

                    obj.block_district_village_name = result.block_district_village_name;
                    obj.latitude = result.latitude;
                    obj.logitude = result.logitude;
                    obj.well_depth = result.well_depth;
                    obj.aquifer = result.aquifer;
                    obj.wq_cations = result.wq_cations;
                    obj.wq_anions = result.wq_anions;
                    obj.wq_key_pollution = result.wq_key_pollution;
                    obj.userid = Convert.ToInt32(Session["UserId"]);
                    ABE.obj_abhy_baseline_gw_qualitydata_gpdata.Add(obj);
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
        [HttpPost]
        public ActionResult e_table_data_geting(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_baseline_gw_qualitydata_gpdata>(Data);
                    List<abhy_baseline_gw_qualitydata_gpdata> TDetails = new List<abhy_baseline_gw_qualitydata_gpdata>();
                    var State = result.state_name;
                    var Dist = result.district_name;

                    var Block = result.block_name;
                    var Gram = result.gpname;

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        TDetails = ABE.obj_abhy_baseline_gw_qualitydata_gpdata.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        TDetails = ABE.obj_abhy_baseline_gw_qualitydata_gpdata.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        TDetails = ABE.obj_abhy_baseline_gw_qualitydata_gpdata.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        TDetails = ABE.obj_abhy_baseline_gw_qualitydata_gpdata.Where(x => x.state_name == State).ToList();//total list

                    }


                    return Json(TDetails, JsonRequestBehavior.AllowGet);
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
        public ActionResult e_table_data_delete(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_baseline_gw_qualitydata_gpdata>(Data);

                    if (result.id != 0)
                    {
                        var TKID = Convert.ToInt32(result.id);
                        var Data1 = ABE.obj_abhy_baseline_gw_qualitydata_gpdata.Where(x => x.id == TKID).SingleOrDefault();
                        if (Data1 != null)
                        {

                            ABE.Entry(Data1).State = EntityState.Deleted;
                            ABE.SaveChanges();
                            return Json("Deleted Successfully");
                        }
                        else
                        {
                            return Json("Error", JsonRequestBehavior.AllowGet);
                        }


                    }
                    else
                    {
                        return Json("No Data", JsonRequestBehavior.AllowGet);
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
        public ActionResult g_chart_data_saveing(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {

                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_baseline_water_management_measures_gpdata>(Data);
                    var obj = new abhy_baseline_water_management_measures_gpdata();
                    var State = result.state_name;
                    var Dist = result.district_name;

                    var Block = result.block_name;
                    var Gram = result.gpname;

                    obj.state_name = State.Trim();
                    obj.district_name = Dist.Trim();

                    obj.block_name = Block;

                    obj.gpname = Gram;

                    obj.scheme_name = result.scheme_name;
                    obj.activities_undertaken = result.activities_undertaken;
                    obj.area_covered_numbers = result.area_covered_numbers;
                    obj.numbers_of_members = result.numbers_of_members;
                    obj.userid = Convert.ToInt32(Session["UserId"]);
                    ABE.obj_abhy_baseline_water_management_measures_gpdata.Add(obj);
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
        [HttpPost]
        public ActionResult g_table_data_geting(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_baseline_water_management_measures_gpdata>(Data);
                    List<abhy_baseline_water_management_measures_gpdata> TDetails = new List<abhy_baseline_water_management_measures_gpdata>();
                    var State = result.state_name;
                    var Dist = result.district_name;
                    var Block = result.block_name;
                    var Gram = result.gpname;

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        TDetails = ABE.obj_abhy_baseline_water_management_measures_gpdata.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        TDetails = ABE.obj_abhy_baseline_water_management_measures_gpdata.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        TDetails = ABE.obj_abhy_baseline_water_management_measures_gpdata.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        TDetails = ABE.obj_abhy_baseline_water_management_measures_gpdata.Where(x => x.state_name == State).ToList();//total list

                    }


                    return Json(TDetails, JsonRequestBehavior.AllowGet);
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
        public ActionResult g_table_data_delete(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_baseline_water_management_measures_gpdata>(Data);

                    if (result.id != 0)
                    {
                        var TKID = Convert.ToInt32(result.id);
                        var Data1 = ABE.obj_abhy_baseline_water_management_measures_gpdata.Where(x => x.id == TKID).SingleOrDefault();
                        if (Data1 != null)
                        {

                            ABE.Entry(Data1).State = EntityState.Deleted;
                            ABE.SaveChanges();
                            return Json("Deleted Successfully");
                        }
                        else
                        {
                            return Json("Error", JsonRequestBehavior.AllowGet);
                        }


                    }
                    else
                    {
                        return Json("No Data", JsonRequestBehavior.AllowGet);
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
        public ActionResult a_chart_data_saveing(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {

                    JavaScriptSerializer js = new JavaScriptSerializer();
                    // var result = js.Deserialize<abhy_baseline_sarpanchdetails_gpdata>(Data);
                    // var obj = new abhy_baseline_sarpanchdetails_gpdata();
                    var result = js.Deserialize<sarpanchdetails>(Data);
                    var obj = new sarpanchdetails();
                    var State = "";
                    var Dist = "";
                    var Block = "";
                    var Gram = "";
                    var Year = "";
                    var Email = Session["Email"].ToString();
                    if (result.state_name != null && result.state_name != "")
                    {
                        State = result.state_name;
                    }
                    else
                    {
                        return Json("Please Select StateName");
                    }
                    if (result.district_name != null && result.district_name != "")
                    {
                        Dist = result.district_name;
                    }
                    else
                    {
                        return Json("Please Select DistrictName");

                    }
                    if (result.block_name != null && result.block_name != "")
                    {
                        Block = result.block_name;
                    }
                    else
                    {
                        return Json("Please Select Block Name");
                    }
                    if (result.gpname != null && result.gpname != "")
                    {
                        Gram = result.gpname;
                    }
                    else
                    {
                        return Json("Please Select GramPanchayat Name");
                    }
                    if (result.year != null && result.year != "")
                    {
                        Year = result.year;
                    }
                    else
                    {
                        return Json("Please Select GramPanchayat Name");
                    }


                    obj.state_name = State.Trim();
                    obj.district_name = Dist.Trim();

                    obj.block_name = Block;

                    obj.gpname = Gram;
                    obj.year = Year;
                    obj.month = result.month;
                    obj.entry_by = Email;

                    int month_number = Get_Month_Number(result.month);
                    obj.month_order_by = month_number;
                    if (result.designation_name != null && result.designation_name != "")
                    {
                        obj.designation_name = result.designation_name;
                    }
                    else
                    {
                        return Json("Please Select Designation Name");
                    }
                    if (result.name != null && result.name != "")
                    {
                        obj.name = result.name;
                    }
                    else
                    {
                        return Json("Please Enter Sarpanch Name");
                    }
                    //if (result.panchayat_secretary_name != null && result.panchayat_secretary_name != "")
                    //{
                    //    obj.panchayat_secretary_name = result.panchayat_secretary_name;
                    //}
                    //else
                    //{
                    //    return Json("Please Enter Panchayat Secretary");
                    //}

                    //if (result.sarpanch_contact_details != null && result.sarpanch_contact_details != "")
                    //{
                    //    obj.sarpanch_contact_details = result.sarpanch_contact_details;
                    //}
                    //else
                    //{
                    //    return Json("Please Enter Sarpanch Contact Details");
                    //}
                    if (result.contact_details != null && result.contact_details != "")
                    {
                        obj.contact_details = result.contact_details;
                    }
                    else
                    {
                        return Json("Please Enter  Contact Details");
                    }

                    if (result.gender != null && result.gender != "" && result.gender != "0")
                    {
                        obj.gender = result.gender;
                    }
                    else
                    {
                        return Json("Please Select Gender");
                    }
                    //obj.userid = Convert.ToInt32(Session["UserId"]);
                    //ABE.obj_abhy_baseline_sarpanchdetails_gpdata.Add(obj);
                    // ABE.SaveChanges();
                    ABE.obj_sarpanchdetails.Add(obj);
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
        [HttpPost]
        public ActionResult a_table_data_geting(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<sarpanchdetails>(Data);
                    List<sarpanchdetails> TDetails = new List<sarpanchdetails>();

                    var State = result.state_name;
                    var Dist = result.district_name;
                    var Block = result.block_name;
                    var Gram = result.gpname;
                    string data_year = result.year;
                    string month = result.month;

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        // TDetails = ABE.obj_abhy_baseline_sarpanchdetails_gpdata.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list
                        var GetMonthNumber = ABE.obj_sarpanchdetails.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == data_year).OrderByDescending(x => x.month_order_by).FirstOrDefault();//total list
                        if (GetMonthNumber != null)
                        {
                            TDetails = ABE.obj_sarpanchdetails.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == data_year && x.month_order_by == GetMonthNumber.month_order_by).ToList();//total list
                        }
                    }

                    return Json(TDetails, JsonRequestBehavior.AllowGet);
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
        public ActionResult a_table_data_delete(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    //var result = js.Deserialize<abhy_baseline_sarpanchdetails_gpdata>(Data);
                    var result = js.Deserialize<sarpanchdetails>(Data);

                    if (result.id != 0)
                    {
                        var TKID = Convert.ToInt32(result.id);
                        // var Data1 = ABE.obj_abhy_baseline_sarpanchdetails_gpdata.Where(x => x.id == TKID).SingleOrDefault();
                        var Data1 = ABE.obj_sarpanchdetails.Where(x => x.id == TKID).SingleOrDefault();
                        if (Data1 != null)
                        {
                            //ABE.Entry(Data1).State = EntityState.Deleted;
                            //ABE.SaveChanges();
                            ABE.Entry(Data1).State = EntityState.Deleted;
                            ABE.SaveChanges();
                            return Json("Deleted Successfully");
                        }
                        else
                        {
                            return Json("Error", JsonRequestBehavior.AllowGet);
                        }


                    }
                    else
                    {
                        return Json("No Data", JsonRequestBehavior.AllowGet);
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
        public ActionResult j_chart_data_saveing(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {

                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_baseline_waterbodies_ponds_gpdata>(Data);
                    var obj = new abhy_baseline_waterbodies_ponds_gpdata();

                    var State = result.state_name;
                    var Dist = result.district_name;

                    var Block = result.block_name;
                    var Gram = result.gpname;

                    obj.state_name = State.Trim();
                    obj.district_name = Dist.Trim();

                    obj.block_name = Block;

                    obj.gpname = Gram;

                    obj.name_of_gp = result.name_of_gp;
                    obj.name_of_water_body = result.name_of_water_body;
                    obj.name_of_count = result.name_of_count;
                    obj.storage_capacity_ham = result.storage_capacity_ham;

                    obj.userid = Convert.ToInt32(Session["UserId"]);
                    ABE.obj_abhy_baseline_waterbodies_ponds_gpdata.Add(obj);
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
        [HttpPost]
        public ActionResult j_table_data_geting(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_baseline_waterbodies_ponds_gpdata>(Data);
                    List<abhy_baseline_waterbodies_ponds_gpdata> TDetails = new List<abhy_baseline_waterbodies_ponds_gpdata>();
                    var State = result.state_name;
                    var Dist = result.district_name;

                    var Block = result.block_name;
                    var Gram = result.gpname;

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        TDetails = ABE.obj_abhy_baseline_waterbodies_ponds_gpdata.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        TDetails = ABE.obj_abhy_baseline_waterbodies_ponds_gpdata.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        TDetails = ABE.obj_abhy_baseline_waterbodies_ponds_gpdata.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        TDetails = ABE.obj_abhy_baseline_waterbodies_ponds_gpdata.Where(x => x.state_name == State).ToList();//total list

                    }


                    return Json(TDetails, JsonRequestBehavior.AllowGet);
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
        public ActionResult j_table_data_delete(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_baseline_waterbodies_ponds_gpdata>(Data);

                    if (result.id != 0)
                    {
                        var TKID = Convert.ToInt32(result.id);
                        var Data1 = ABE.obj_abhy_baseline_waterbodies_ponds_gpdata.Where(x => x.id == TKID).SingleOrDefault();
                        if (Data1 != null)
                        {

                            ABE.Entry(Data1).State = EntityState.Deleted;
                            ABE.SaveChanges();
                            return Json("Deleted Successfully");
                        }
                        else
                        {
                            return Json("Error", JsonRequestBehavior.AllowGet);
                        }


                    }
                    else
                    {
                        return Json("No Data", JsonRequestBehavior.AllowGet);
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
        public ActionResult i_part_table_saveing(string Data)
        {
            if (Session["UserId"] != null)
            {
                List<abhy_baseline_adoption_gpdata> ddetails = new List<abhy_baseline_adoption_gpdata>();
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<abhy_baseline_adoption_gpdata>(Data);
                abhy_baseline_adoption_gpdata obj = new abhy_baseline_adoption_gpdata();
                var State = result.state_name;
                var Dist = result.district_name;

                var Block = result.block_name;
                var Gram = result.gpname;

                if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                {
                    ddetails = ABE.obj_abhy_baseline_adoption_gpdata.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                {
                    ddetails = ABE.obj_abhy_baseline_adoption_gpdata.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                {
                    ddetails = ABE.obj_abhy_baseline_adoption_gpdata.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                }
                else if (State != "0" && State != "" && State != null)
                {
                    ddetails = ABE.obj_abhy_baseline_adoption_gpdata.Where(x => x.state_name == State).ToList();//total list

                }
                if (ddetails.Count == 1)
                {
                    var ddetails1 = ddetails.SingleOrDefault();
                    ddetails1.state_name = State.Trim();
                    ddetails1.district_name = Dist.Trim();

                    ddetails1.block_name = Block;

                    ddetails1.gpname = Gram;

                    ddetails1.metering_monitoring_pgwm = result.metering_monitoring_pgwm;
                    ddetails1.metering_monitoring_count = result.metering_monitoring_count;
                    ddetails1.wsp_prepared_pgwm = result.wsp_prepared_pgwm;
                    ddetails1.wsp_prepared_count = result.wsp_prepared_count;
                    ddetails1.wua_committees_pgwm = result.wua_committees_pgwm;
                    ddetails1.wua_committees_count = result.wua_committees_count;
                    ddetails1.adoption_miro_irri_crops_pgwm = result.adoption_miro_irri_crops_pgwm;
                    ddetails1.adoption_miro_irri_crops_count = result.adoption_miro_irri_crops_count;
                    ;

                    ddetails1.userid = Convert.ToInt32(Session["UserId"]);

                    ABE.Entry(ddetails1).State = EntityState.Modified;
                    ABE.SaveChanges();
                    return Json("Successfully Saved");
                }
                else
                {
                    if (ddetails.Count == 0)
                    {
                        obj.state_name = State.Trim();
                        obj.district_name = Dist.Trim();

                        obj.block_name = Block;

                        obj.gpname = Gram;

                        obj.metering_monitoring_pgwm = result.metering_monitoring_pgwm;
                        obj.metering_monitoring_count = result.metering_monitoring_count;
                        obj.wsp_prepared_pgwm = result.wsp_prepared_pgwm;
                        obj.wsp_prepared_count = result.wsp_prepared_count;

                        obj.wua_committees_pgwm = result.wua_committees_pgwm;
                        obj.wua_committees_count = result.wua_committees_count;
                        obj.adoption_miro_irri_crops_pgwm = result.adoption_miro_irri_crops_pgwm;
                        obj.adoption_miro_irri_crops_count = result.adoption_miro_irri_crops_count;

                        obj.userid = Convert.ToInt32(Session["UserId"]);
                        ABE.obj_abhy_baseline_adoption_gpdata.Add(obj);
                        ABE.SaveChanges();
                        return Json("Successfully Saved");
                    }
                    else
                    {
                        return Json("Duplicate Data is there");
                    }

                }
            }
            else
            {
                Session["WSPHOME"] = "Data";
                return RedirectToAction("WSP_GWM_HOME", "WSPNew");
            }
        }

        [HttpPost]
        public ActionResult i_part_table_geting(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_baseline_adoption_gpdata> ddetails = new List<abhy_baseline_adoption_gpdata>();
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_baseline_adoption_gpdata>(Data);

                    var userid = Convert.ToInt32(Session["UserId"]);

                    var State = result.state_name;
                    var Dist = result.district_name;

                    var Block = result.block_name;
                    var Gram = result.gpname;
                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        ddetails = ABE.obj_abhy_baseline_adoption_gpdata.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        ddetails = ABE.obj_abhy_baseline_adoption_gpdata.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        ddetails = ABE.obj_abhy_baseline_adoption_gpdata.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list
                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        ddetails = ABE.obj_abhy_baseline_adoption_gpdata.Where(x => x.state_name == State).ToList();//total list
                    }
                    return Json(ddetails, JsonRequestBehavior.AllowGet);
                }
                catch (Exception Ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
                // return RedirectToAction("WSP_GWM_HOME", "WSPNew");
            }
            // return View();
        }



        [HttpPost]
        public ActionResult social_org_gp_contactdetails(HttpPostedFileBase files, string social_org_gp_contactdetails_name, string social_org_gp_contactdetails_mobilenumber, string social_org_gp_noofworkers_count, string State_name, string District_name, string Block, string Gname)
        {
            var obj = new abhy_baseline_social_org_gpdata();
            Malicious_File_Upload_Restriction obj_Validate = new Malicious_File_Upload_Restriction();
            string allowed_file_format = "jpg,png,jpeg,doc,docx";
            bool flag = obj_Validate.CheckValidFile(files, allowed_file_format);
            if (flag == false)
            {
                return Json("Your Upload file has Not valid File, Please Upload proper file", JsonRequestBehavior.AllowGet);
            }
            if (files != null)
            {
                if (files.FileName != null)
                {
                    String FileExt = Path.GetExtension(files.FileName).ToUpper();

                    string path = @"D:\Ataljal_grievnce\";
                    path = path + files.FileName;
                    string[] count = files.FileName.Split('.');
                    if (count.Length != 2)
                    {
                        return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                    }
                    files.SaveAs(path);
                    obj.contact_image = path.Replace("D:\\Ataljal_grievnce\\", "http://54.221.131.231:8014/ataljalimages/");


                }
            }

            obj.state_name = Session["gstate"].ToString();
            obj.district_name = Session["gdist"].ToString();
            obj.block_name = Session["gblock"].ToString(); ;
            obj.gpname = Session["ggram"].ToString();
            obj.userid = Convert.ToInt32(Session["UserId"]);

            obj.contact_name = social_org_gp_contactdetails_name;

            obj.contact_mobile = social_org_gp_contactdetails_mobilenumber;

            obj.workers_count = social_org_gp_noofworkers_count;
            ABE.obj_abhy_baseline_social_org_gpdata.Add(obj);
            ABE.SaveChanges();
            return Json("Upload Successfully", JsonRequestBehavior.AllowGet);
        }


        [HttpPost]
        public ActionResult abhy_baseline_social_org_gpdata_getting_data(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {

                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_baseline_social_org_gpdata>(Data);
                    var data = ABE.obj_abhy_baseline_social_org_gpdata.ToList();
                    List<abhy_baseline_social_org_gpdata> TDetails = new List<abhy_baseline_social_org_gpdata>();
                    var State = result.state_name;
                    var Dist = result.district_name;

                    var Block = result.block_name;
                    var Gram = result.gpname;
                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        TDetails = ABE.obj_abhy_baseline_social_org_gpdata.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        TDetails = ABE.obj_abhy_baseline_social_org_gpdata.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        TDetails = ABE.obj_abhy_baseline_social_org_gpdata.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        TDetails = ABE.obj_abhy_baseline_social_org_gpdata.Where(x => x.state_name == State).ToList();//total list

                    }


                    return Json(TDetails, JsonRequestBehavior.AllowGet);
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
        public ActionResult abhy_baseline_social_org_gpdata_Delete_data(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {

                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_baseline_social_org_gpdata>(Data);
                    var IDD = Convert.ToInt32(result.id);
                    var Data1 = ABE.obj_abhy_baseline_social_org_gpdata.Where(x => x.id == IDD).SingleOrDefault();
                    ABE.Entry(Data1).State = EntityState.Deleted;
                    ABE.SaveChanges();
                    return Json("Deleted Successfully");

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



        //Downloads code

        public ActionResult Export_baselinedata_geting_ToExcel()
        {
            List<abhy_baseline_gpdata> ddetails = new List<abhy_baseline_gpdata>();
            //List<gpprofile> ddetails = new List<gpprofile>();
            var State = Session["gstate"].ToString();
            var Dist = Session["gdist"].ToString();
            var Block = Session["gblock"].ToString();
            var Gram = Session["ggram"].ToString();
            if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
            {
                // ddetails = AJE.obj_gpprofiles.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list
                ddetails = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list
            }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
            {
                // ddetails = AJE.obj_gpprofiles.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list
                ddetails = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list
            }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
            {
                //ddetails = AJE.obj_gpprofiles.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list
                ddetails = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list
            }
            else if (State != "0" && State != "" && State != null)
            {
                //ddetails = AJE.obj_gpprofiles.Where(x => x.state_name == State).ToList();//total list
                ddetails = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == State).ToList();//total list
            }
            using (var workbook = new XLWorkbook())
            {

                var worksheet = workbook.Worksheets.Add("Users");
                var currentRow = 1;
                worksheet.Cell(currentRow, 1).Value = "StateName";
                worksheet.Cell(currentRow, 2).Value = "Distname";
                worksheet.Cell(currentRow, 3).Value = "BlockName";
                worksheet.Cell(currentRow, 4).Value = "GramName";
                worksheet.Cell(currentRow, 5).Value = "MalePopulation";
                worksheet.Cell(currentRow, 6).Value = "Female_Population";
                worksheet.Cell(currentRow, 7).Value = "Others";
                worksheet.Cell(currentRow, 8).Value = "TotalPopulation";
                worksheet.Cell(currentRow, 9).Value = "APL";
                worksheet.Cell(currentRow, 10).Value = "BPL";
                worksheet.Cell(currentRow, 11).Value = "SC";
                worksheet.Cell(currentRow, 12).Value = "ST";
                worksheet.Cell(currentRow, 13).Value = "OBC";
                worksheet.Cell(currentRow, 14).Value = "General";
                worksheet.Cell(currentRow, 15).Value = "Households";
                worksheet.Cell(currentRow, 16).Value = "Cows";
                worksheet.Cell(currentRow, 17).Value = "Bullocks";
                worksheet.Cell(currentRow, 18).Value = "Buffaloas";
                worksheet.Cell(currentRow, 19).Value = "SheepsOrGoats";
                worksheet.Cell(currentRow, 20).Value = "Other(General)";
                worksheet.Cell(currentRow, 21).Value = "TotalLivestockPopulation";
                worksheet.Cell(currentRow, 22).Value = "GramArea";
                worksheet.Cell(currentRow, 23).Value = "ForestArea";
                worksheet.Cell(currentRow, 24).Value = "FallowLand";
                worksheet.Cell(currentRow, 25).Value = "CultivableLand";
                worksheet.Cell(currentRow, 26).Value = "NetSownArea";
                worksheet.Cell(currentRow, 27).Value = "KharifIrrigatedArea";
                worksheet.Cell(currentRow, 28).Value = "RabiIrrigatedArea";
                worksheet.Cell(currentRow, 29).Value = "SummerIrrigatedArea";
                worksheet.Cell(currentRow, 30).Value = "Un-IrrigatedArea";
                worksheet.Cell(currentRow, 31).Value = "Gross_Cropped_Area";
                worksheet.Cell(currentRow, 32).Value = "CanalIrrigatedType";
                worksheet.Cell(currentRow, 33).Value = "TankIrrigatedType";
                worksheet.Cell(currentRow, 34).Value = "DugWells";
                worksheet.Cell(currentRow, 35).Value = "DugBoreWells";
                worksheet.Cell(currentRow, 36).Value = "BoreWellOrTubeWell";
                worksheet.Cell(currentRow, 37).Value = "DugWellExisting";
                worksheet.Cell(currentRow, 38).Value = "BoreWellExisting";
                worksheet.Cell(currentRow, 39).Value = "TubeWellExisting";
                worksheet.Cell(currentRow, 40).Value = "DugCumBoreExisting";
                worksheet.Cell(currentRow, 41).Value = "OtherWellExisting";
                worksheet.Cell(currentRow, 42).Value = "NonEnergised";
                worksheet.Cell(currentRow, 43).Value = "DieselPump";
                worksheet.Cell(currentRow, 44).Value = "ElectricPump";
                worksheet.Cell(currentRow, 45).Value = "CentrifugalPump";
                worksheet.Cell(currentRow, 46).Value = "SubmersiblePump";
                worksheet.Cell(currentRow, 47).Value = "Solarpump";
                worksheet.Cell(currentRow, 48).Value = "AreaUnderSprinklerIrrigation";
                worksheet.Cell(currentRow, 49).Value = "AreaUnderDripIrrigation";
                worksheet.Cell(currentRow, 50).Value = "OtherIrrigation";
                // worksheet.Cell(currentRow, 48).Value = "WellsElectricMeter";
                // worksheet.Cell(currentRow, 49).Value = "WaterMeter";
                if (ddetails.Count != 0)
                {


                    foreach (var user in ddetails)
                    {
                        currentRow++;
                        worksheet.Cell(currentRow, 1).Value = user.state_name;
                        worksheet.Cell(currentRow, 2).Value = user.district_name;
                        worksheet.Cell(currentRow, 3).Value = user.block_name;
                        worksheet.Cell(currentRow, 4).Value = user.gpname;
                        worksheet.Cell(currentRow, 5).Value = user.male_population;
                        worksheet.Cell(currentRow, 6).Value = user.female_population;
                        worksheet.Cell(currentRow, 7).Value = user.transgender_population;
                        worksheet.Cell(currentRow, 8).Value = user.tol_population;

                        worksheet.Cell(currentRow, 10).Value = user.no_of_bpl;
                        worksheet.Cell(currentRow, 11).Value = user.no_of_sc;
                        worksheet.Cell(currentRow, 12).Value = user.no_of_st;
                        worksheet.Cell(currentRow, 13).Value = user.no_of_obc;
                        worksheet.Cell(currentRow, 14).Value = user.no_of_general;
                        worksheet.Cell(currentRow, 15).Value = user.no_of_households;


                        worksheet.Cell(currentRow, 22).Value = user.gp_area_in_ha;
                        worksheet.Cell(currentRow, 23).Value = user.forest_area_in_ha;
                        worksheet.Cell(currentRow, 24).Value = user.fallow_land_in_ha;

                        worksheet.Cell(currentRow, 27).Value = user.irrigated_area_in_kharif;
                        worksheet.Cell(currentRow, 28).Value = user.irrigated_area_in_rabi;
                        worksheet.Cell(currentRow, 29).Value = user.irrigated_area_in_summer;



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
                    worksheet.Cell(currentRow, 10).Value = "NO DATA";
                    worksheet.Cell(currentRow, 11).Value = "";
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
                    worksheet.Cell(currentRow, 23).Value = "";
                    worksheet.Cell(currentRow, 24).Value = "";
                    worksheet.Cell(currentRow, 25).Value = "NO DATA";
                    worksheet.Cell(currentRow, 26).Value = "";
                    worksheet.Cell(currentRow, 27).Value = "";
                    worksheet.Cell(currentRow, 28).Value = "";
                    worksheet.Cell(currentRow, 29).Value = "";
                    worksheet.Cell(currentRow, 30).Value = "";
                    worksheet.Cell(currentRow, 31).Value = "";
                    worksheet.Cell(currentRow, 32).Value = "";
                    worksheet.Cell(currentRow, 33).Value = "";
                    worksheet.Cell(currentRow, 34).Value = "";
                    worksheet.Cell(currentRow, 35).Value = "";
                    worksheet.Cell(currentRow, 36).Value = "";
                    worksheet.Cell(currentRow, 37).Value = "";
                    worksheet.Cell(currentRow, 38).Value = "";
                    worksheet.Cell(currentRow, 39).Value = "NO DATA";
                    worksheet.Cell(currentRow, 40).Value = "";
                    worksheet.Cell(currentRow, 41).Value = "";
                    worksheet.Cell(currentRow, 42).Value = "";
                    worksheet.Cell(currentRow, 43).Value = "";
                    worksheet.Cell(currentRow, 44).Value = "";
                    worksheet.Cell(currentRow, 45).Value = "";
                    worksheet.Cell(currentRow, 46).Value = "";
                    worksheet.Cell(currentRow, 47).Value = "";
                    worksheet.Cell(currentRow, 48).Value = "";
                    worksheet.Cell(currentRow, 49).Value = "";
                    worksheet.Cell(currentRow, 50).Value = "";
                }
                using (var stream = new MemoryStream())
                {
                    workbook.SaveAs(stream);
                    var content = stream.ToArray();

                    return File(
                        content,
                        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                        "GP_Profile_Information.xlsx");
                }
            }
        }

        public ActionResult Export_sarpanchdetails_ToExcel()
        {
            List<sarpanchdetails> TDetails = new List<sarpanchdetails>();
            var State = "";
            var Dist = "";
            var Block = "";
            var Gram = "";
            if (Session["gstate"] != null)
            {
                State = Session["gstate"].ToString();
            }
            if (Session["gdist"] != null)
            {
                Dist = Session["gdist"].ToString();
            }
            if (Session["gblock"] != null)
            {
                Block = Session["gblock"].ToString();
            }
            if (Session["ggram"] != null)
            {
                Gram = Session["ggram"].ToString();
            }

            if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
            {
                TDetails = ABE.obj_sarpanchdetails.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list
            }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
            {
                TDetails = ABE.obj_sarpanchdetails.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list
            }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
            {
                TDetails = ABE.obj_sarpanchdetails.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list
            }
            else if (State != "0" && State != "" && State != null)
            {
                TDetails = ABE.obj_sarpanchdetails.Where(x => x.state_name == State).ToList();//total list
            }

            using (var workbook = new XLWorkbook())
            {

                var worksheet = workbook.Worksheets.Add("Users");
                var currentRow = 1;
                worksheet.Cell(currentRow, 1).Value = "StateName";
                worksheet.Cell(currentRow, 2).Value = "Distname";
                worksheet.Cell(currentRow, 3).Value = "BlockName";
                worksheet.Cell(currentRow, 4).Value = "GramName";
                worksheet.Cell(currentRow, 5).Value = "designation_name";
                worksheet.Cell(currentRow, 6).Value = "name";
                worksheet.Cell(currentRow, 7).Value = "Gender";
                worksheet.Cell(currentRow, 8).Value = "Contact_Details";
                worksheet.Cell(currentRow, 9).Value = "latitude";
                worksheet.Cell(currentRow, 10).Value = "longitude";


                if (TDetails.Count != 0)
                {


                    foreach (var user in TDetails)
                    {
                        currentRow++;
                        worksheet.Cell(currentRow, 1).Value = user.state_name;
                        worksheet.Cell(currentRow, 2).Value = user.district_name;
                        worksheet.Cell(currentRow, 3).Value = user.block_name;
                        worksheet.Cell(currentRow, 4).Value = user.gpname;
                        worksheet.Cell(currentRow, 5).Value = user.designation_name;
                        worksheet.Cell(currentRow, 6).Value = user.name;
                        worksheet.Cell(currentRow, 7).Value = user.gender;
                        worksheet.Cell(currentRow, 8).Value = user.contact_details;
                        worksheet.Cell(currentRow, 9).Value = user.latitude;
                        worksheet.Cell(currentRow, 10).Value = user.longitude;


                    }
                }
                else
                {
                    currentRow++;
                    worksheet.Cell(currentRow, 1).Value = "";
                    worksheet.Cell(currentRow, 2).Value = "";
                    worksheet.Cell(currentRow, 3).Value = "";
                    worksheet.Cell(currentRow, 4).Value = "";
                    worksheet.Cell(currentRow, 5).Value = "No Data";
                    worksheet.Cell(currentRow, 6).Value = "";
                    worksheet.Cell(currentRow, 7).Value = "";
                    worksheet.Cell(currentRow, 8).Value = "";
                    worksheet.Cell(currentRow, 9).Value = "";
                    worksheet.Cell(currentRow, 10).Value = "";
                }
                using (var stream = new MemoryStream())
                {
                    workbook.SaveAs(stream);
                    var content = stream.ToArray();

                    return File(
                        content,
                        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                        "Sarpanch_Information.xlsx");
                }
            }
        }


        public ActionResult Export_Well_Inventory_ToExcel()
        {
            List<wellinventory> TDetails = new List<wellinventory>();
            var State = Session["gstate"].ToString();
            var Dist = Session["gdist"].ToString();
            var Block = Session["gblock"].ToString();
            var Gram = Session["ggram"].ToString();

            if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
            {
                TDetails = AJE.obj_wellinventory.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram).ToList();//total list
            }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
            {
                TDetails = AJE.obj_wellinventory.Where(x => x.state == State && x.district == Dist && x.block == Block).ToList();//total list
            }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
            {
                TDetails = AJE.obj_wellinventory.Where(x => x.state == State && x.district == Dist).ToList();//total list
            }
            else if (State != "0" && State != "" && State != null)
            {
                TDetails = AJE.obj_wellinventory.Where(x => x.state == State).ToList();//total list
            }
            using (var workbook = new XLWorkbook())
            {

                var worksheet = workbook.Worksheets.Add("Users");
                var currentRow = 1;
                worksheet.Cell(currentRow, 1).Value = "WellNo";
                worksheet.Cell(currentRow, 2).Value = "Date";
                worksheet.Cell(currentRow, 3).Value = "StateName";
                worksheet.Cell(currentRow, 4).Value = "Distname";
                worksheet.Cell(currentRow, 5).Value = "BlockName";
                worksheet.Cell(currentRow, 6).Value = "GramName";
                worksheet.Cell(currentRow, 7).Value = "VillageName";
                worksheet.Cell(currentRow, 8).Value = "SiteName";
                worksheet.Cell(currentRow, 9).Value = "LocationDetails";
                worksheet.Cell(currentRow, 10).Value = "OwnerName";
                worksheet.Cell(currentRow, 11).Value = "Latitude";
                worksheet.Cell(currentRow, 12).Value = "Longitude";
                worksheet.Cell(currentRow, 13).Value = "WellDiameter";
                worksheet.Cell(currentRow, 14).Value = "WellDepth";
                worksheet.Cell(currentRow, 15).Value = "MeasuringPoint";
                worksheet.Cell(currentRow, 16).Value = "WellType";
                worksheet.Cell(currentRow, 17).Value = "WellWaterPotable";
                worksheet.Cell(currentRow, 18).Value = "WaterLevelDepth";
                worksheet.Cell(currentRow, 19).Value = "Use";
                worksheet.Cell(currentRow, 20).Value = "PumpInstalled";
                //worksheet.Cell(currentRow, 21).Value = "TypeOfPump";
                //worksheet.Cell(currentRow, 22).Value = "PumpCapacity";
                //worksheet.Cell(currentRow, 23).Value = "Discharge";
                //worksheet.Cell(currentRow, 24).Value = "PumpingDuration";
                //worksheet.Cell(currentRow, 25).Value = "DaysPumped";
                worksheet.Cell(currentRow, 21).Value = "ElectricMeterSelectedItem";
                // worksheet.Cell(currentRow, 27).Value = "MajorCrops";
                //  worksheet.Cell(currentRow, 22).Value = "Geom";
                worksheet.Cell(currentRow, 22).Value = "DateTime";
                worksheet.Cell(currentRow, 23).Value = "Email";
                worksheet.Cell(currentRow, 24).Value = "Image";
                if (TDetails.Count != 0)
                {


                    foreach (var user in TDetails)
                    {
                        currentRow++;
                        worksheet.Cell(currentRow, 1).Value = user.wellno;
                        worksheet.Cell(currentRow, 2).Value = user.date;
                        worksheet.Cell(currentRow, 3).Value = user.state;
                        worksheet.Cell(currentRow, 4).Value = user.district;
                        worksheet.Cell(currentRow, 5).Value = user.block;
                        worksheet.Cell(currentRow, 6).Value = user.gp;
                        worksheet.Cell(currentRow, 7).Value = user.village;
                        worksheet.Cell(currentRow, 8).Value = user.sitename;
                        worksheet.Cell(currentRow, 9).Value = user.locationdetails;
                        worksheet.Cell(currentRow, 10).Value = user.ownername;
                        worksheet.Cell(currentRow, 11).Value = user.latitude;
                        worksheet.Cell(currentRow, 12).Value = user.longitude;
                        worksheet.Cell(currentRow, 13).Value = user.welldiameter;
                        worksheet.Cell(currentRow, 14).Value = user.welldepth;
                        worksheet.Cell(currentRow, 15).Value = user.measuringpoint;
                        worksheet.Cell(currentRow, 16).Value = user.welltype;
                        worksheet.Cell(currentRow, 17).Value = user.wellwaterpotable;
                        worksheet.Cell(currentRow, 18).Value = user.waterleveldepth;
                        worksheet.Cell(currentRow, 19).Value = user.use;
                        worksheet.Cell(currentRow, 20).Value = user.pumpinstalled;
                        //worksheet.Cell(currentRow, 21).Value = user.typeofpump;
                        //worksheet.Cell(currentRow, 22).Value = user.pumpcapacity;
                        //worksheet.Cell(currentRow, 23).Value = user.discharge;
                        //worksheet.Cell(currentRow, 24).Value = user.pumpingduration;
                        //worksheet.Cell(currentRow, 25).Value = user.dayspumped;
                        worksheet.Cell(currentRow, 21).Value = user.electricmeterselecteditem;
                        //worksheet.Cell(currentRow, 27).Value = user.majorcrops;
                        // worksheet.Cell(currentRow, 22).Value = user.geom;
                        worksheet.Cell(currentRow, 22).Value = user.datetime;
                        worksheet.Cell(currentRow, 23).Value = user.email;
                        worksheet.Cell(currentRow, 24).Value = user.image;
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
                    worksheet.Cell(currentRow, 11).Value = "";
                    worksheet.Cell(currentRow, 12).Value = "";
                    worksheet.Cell(currentRow, 13).Value = "NO DATA";
                    worksheet.Cell(currentRow, 14).Value = "";
                    worksheet.Cell(currentRow, 15).Value = "";
                    worksheet.Cell(currentRow, 16).Value = "";
                    worksheet.Cell(currentRow, 17).Value = "";
                    worksheet.Cell(currentRow, 18).Value = "";
                    worksheet.Cell(currentRow, 19).Value = "";
                    worksheet.Cell(currentRow, 20).Value = "";
                    worksheet.Cell(currentRow, 21).Value = "";
                    worksheet.Cell(currentRow, 22).Value = "";
                    worksheet.Cell(currentRow, 23).Value = "";
                    worksheet.Cell(currentRow, 24).Value = "";
                    //worksheet.Cell(currentRow, 25).Value = "";
                    //worksheet.Cell(currentRow, 26).Value = "";
                    //worksheet.Cell(currentRow, 27).Value = "";
                }
                using (var stream = new MemoryStream())
                {
                    workbook.SaveAs(stream);
                    var content = stream.ToArray();

                    return File(
                        content,
                        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                        "Wellinventory_Information.xlsx");
                }



            }
            //return View("Gplevel");
        }

        ////[HttpPost]
        ////public ActionResult abhy_GroundwaterMonitoringImages_getting_data(string Data)
        ////{
        ////    if (Session["UserId"] != null)
        ////    {
        ////        try
        ////        {
        ////            JavaScriptSerializer js = new JavaScriptSerializer();
        ////            var result = js.Deserialize<wellinventory>(Data);
        ////            List<groundwaterlevel> TDetails = new List<groundwaterlevel>();
        ////            var State = result.state;
        ////            var Dist = result.district;

        ////            var Block = result.block;
        ////            var Gram = result.gp;

        ////            if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
        ////            {
        ////                TDetails = AJE.obj_groundwaterlevel.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram).ToList();//total list
        ////            }
        ////            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
        ////            {
        ////                TDetails = AJE.obj_groundwaterlevel.Where(x => x.state == State && x.district == Dist && x.block == Block).ToList();//total list
        ////            }
        ////            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
        ////            {
        ////                TDetails = AJE.obj_groundwaterlevel.Where(x => x.state == State && x.district == Dist).ToList();//total list
        ////            }
        ////            else if (State != "0" && State != "" && State != null)
        ////            {
        ////                TDetails = AJE.obj_groundwaterlevel.Where(x => x.state == State).ToList();//total list
        ////            }

        ////            return Json(TDetails, JsonRequestBehavior.AllowGet);
        ////        }
        ////        catch (Exception Ex)
        ////        {
        ////            return Json("Error", JsonRequestBehavior.AllowGet);
        ////        }
        ////    }
        ////    else
        ////    {
        ////        return Json("Logout", JsonRequestBehavior.AllowGet);
        ////    }
        ////}



        public ActionResult Export_Geo_tagging_of_Artificial_Recharge_Structures_ToExcel()
        {
            List<geotagging> TDetails = new List<geotagging>();
            var State = Session["gstate"].ToString();
            var Dist = Session["gdist"].ToString();
            var Block = Session["gblock"].ToString();
            var Gram = Session["ggram"].ToString();

            if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
            {
                TDetails = AJE.obj_geotagging.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.gpname == Gram).ToList();//total list
            }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
            {
                TDetails = AJE.obj_geotagging.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block).ToList();//total list
            }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
            {
                TDetails = AJE.obj_geotagging.Where(x => x.statename == State && x.districtname == Dist).ToList();//total list
            }
            else if (State != "0" && State != "" && State != null)
            {
                TDetails = AJE.obj_geotagging.Where(x => x.statename == State).ToList();//total list
            }
            using (var workbook = new XLWorkbook())
            {

                var worksheet = workbook.Worksheets.Add("Users");
                var currentRow = 1;
                worksheet.Cell(currentRow, 1).Value = "StateName";
                worksheet.Cell(currentRow, 2).Value = "Distname";
                worksheet.Cell(currentRow, 3).Value = "BlockName";
                worksheet.Cell(currentRow, 4).Value = "GramName";
                worksheet.Cell(currentRow, 5).Value = "Latitude";
                worksheet.Cell(currentRow, 6).Value = "Longitude";
                worksheet.Cell(currentRow, 7).Value = "TypeOfStructure";
                worksheet.Cell(currentRow, 8).Value = "StorageCapacity";
                worksheet.Cell(currentRow, 9).Value = "Fillings";
                worksheet.Cell(currentRow, 10).Value = "Image1";
                worksheet.Cell(currentRow, 11).Value = "Image2";
                worksheet.Cell(currentRow, 12).Value = "Deviceid";
                worksheet.Cell(currentRow, 13).Value = "Others";
                worksheet.Cell(currentRow, 14).Value = "Date";
                worksheet.Cell(currentRow, 15).Value = "Email";
                worksheet.Cell(currentRow, 16).Value = "Village";
                worksheet.Cell(currentRow, 17).Value = "SiteName";

                if (TDetails.Count != 0)
                {


                    foreach (var user in TDetails)
                    {
                        currentRow++;
                        worksheet.Cell(currentRow, 1).Value = user.statename;
                        worksheet.Cell(currentRow, 2).Value = user.districtname;
                        worksheet.Cell(currentRow, 3).Value = user.blockname;
                        worksheet.Cell(currentRow, 4).Value = user.gpname;
                        worksheet.Cell(currentRow, 5).Value = user.latitude;
                        worksheet.Cell(currentRow, 6).Value = user.longitude;
                        worksheet.Cell(currentRow, 7).Value = user.typeofstructure;
                        worksheet.Cell(currentRow, 8).Value = user.storagecapacity;
                        worksheet.Cell(currentRow, 9).Value = user.nooffillings;
                        worksheet.Cell(currentRow, 10).Value = user.image1;
                        worksheet.Cell(currentRow, 11).Value = user.image2;
                        worksheet.Cell(currentRow, 12).Value = user.deviceid;
                        worksheet.Cell(currentRow, 13).Value = user.others;
                        worksheet.Cell(currentRow, 14).Value = user.date;
                        worksheet.Cell(currentRow, 15).Value = user.email;
                        worksheet.Cell(currentRow, 16).Value = user.village;
                        worksheet.Cell(currentRow, 17).Value = user.sitename;
                    }
                }
                else
                {
                    currentRow++;
                    worksheet.Cell(currentRow, 1).Value = "";
                    worksheet.Cell(currentRow, 2).Value = "";
                    worksheet.Cell(currentRow, 3).Value = "";
                    worksheet.Cell(currentRow, 4).Value = "";
                    worksheet.Cell(currentRow, 5).Value = "NO Data";
                    worksheet.Cell(currentRow, 6).Value = "";
                    worksheet.Cell(currentRow, 7).Value = "";
                    worksheet.Cell(currentRow, 8).Value = "";
                    worksheet.Cell(currentRow, 9).Value = "";
                    worksheet.Cell(currentRow, 10).Value = "NO Data";
                    worksheet.Cell(currentRow, 11).Value = "";
                    worksheet.Cell(currentRow, 12).Value = "";
                    worksheet.Cell(currentRow, 13).Value = "";
                    worksheet.Cell(currentRow, 14).Value = "";
                    worksheet.Cell(currentRow, 15).Value = "";
                    worksheet.Cell(currentRow, 16).Value = "";
                    worksheet.Cell(currentRow, 17).Value = "";

                }
                using (var stream = new MemoryStream())
                {
                    workbook.SaveAs(stream);
                    var content = stream.ToArray();

                    return File(
                        content,
                        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                        "GeoTagging_Information.xlsx");
                }



            }
            //return View("Gplevel");
        }

        //[HttpPost]
        //public ActionResult abhy_Geo_tagging_of_Artificial_Recharge_Structures_getting_data(string Data)
        //{
        //    if (Session["UserId"] != null)
        //    {
        //        try
        //        {
        //            JavaScriptSerializer js = new JavaScriptSerializer();
        //            var result = js.Deserialize<geotagging>(Data);
        //            List<geotagging> TDetails = new List<geotagging>();
        //            var State = result.statename;
        //            var Dist = result.districtname;

        //            var Block = result.blockname;
        //            var Gram = result.gpname;

        //            if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
        //            {
        //                TDetails = AJE.obj_geotagging.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.gpname == Gram).ToList();//total list
        //            }
        //            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
        //            {
        //                TDetails = AJE.obj_geotagging.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block).ToList();//total list
        //            }
        //            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
        //            {
        //                TDetails = AJE.obj_geotagging.Where(x => x.statename == State && x.districtname == Dist).ToList();//total list
        //            }
        //            else if (State != "0" && State != "" && State != null)
        //            {
        //                TDetails = AJE.obj_geotagging.Where(x => x.statename == State).ToList();//total list
        //            }

        //            return Json(TDetails, JsonRequestBehavior.AllowGet);
        //        }
        //        catch (Exception Ex)
        //        {
        //            return Json("Error", JsonRequestBehavior.AllowGet);
        //        }
        //    }
        //    else
        //    {
        //        return Json("Logout", JsonRequestBehavior.AllowGet);
        //    }
        //}

        public ActionResult Export_Rainfall_Data_ToExcel()
        {
            List<rainfall> TDetails = new List<rainfall>();
            var State = Session["gstate"].ToString();
            var Dist = Session["gdist"].ToString();
            var Block = Session["gblock"].ToString();
            var Gram = Session["ggram"].ToString();

            if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
            {
                TDetails = AJE.obj_rainfall.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.gpname == Gram).ToList();//total list
            }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
            {
                TDetails = AJE.obj_rainfall.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block).ToList();//total list
            }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
            {
                TDetails = AJE.obj_rainfall.Where(x => x.statename == State && x.districtname == Dist).ToList();//total list
            }
            else if (State != "0" && State != "" && State != null)
            {
                TDetails = AJE.obj_rainfall.Where(x => x.statename == State).ToList();//total list
            }
            using (var workbook = new XLWorkbook())
            {

                var worksheet = workbook.Worksheets.Add("Users");
                var currentRow = 1;
                worksheet.Cell(currentRow, 1).Value = "StateName";
                worksheet.Cell(currentRow, 2).Value = "DistrictName";
                worksheet.Cell(currentRow, 3).Value = "BlockName";
                worksheet.Cell(currentRow, 4).Value = "GramName";
                worksheet.Cell(currentRow, 5).Value = "SiteName";
                worksheet.Cell(currentRow, 6).Value = "Latitude";
                worksheet.Cell(currentRow, 7).Value = "Longitude";
                worksheet.Cell(currentRow, 8).Value = "Raingauge";
                worksheet.Cell(currentRow, 9).Value = "Date";
                worksheet.Cell(currentRow, 10).Value = "RainFall";
                worksheet.Cell(currentRow, 11).Value = "Device Id";
                worksheet.Cell(currentRow, 12).Value = "Image1";
                worksheet.Cell(currentRow, 13).Value = "Image2";
                worksheet.Cell(currentRow, 14).Value = "Email";

                //worksheet.Cell(currentRow, 8).Value ="Jan_2020";
                //worksheet.Cell(currentRow, 9).Value ="Feb_2020";
                //worksheet.Cell(currentRow, 10).Value ="Mar_2020";
                //worksheet.Cell(currentRow, 11).Value ="Apr_2020";
                //worksheet.Cell(currentRow, 12).Value ="May_2020";
                //worksheet.Cell(currentRow, 13).Value ="Jun_2020";
                //worksheet.Cell(currentRow, 14).Value ="Jul_2020";
                //worksheet.Cell(currentRow, 15).Value ="Aug_2020";
                //worksheet.Cell(currentRow, 16).Value ="Sep_2020";
                //worksheet.Cell(currentRow, 17).Value ="Oct_2020";
                //worksheet.Cell(currentRow, 18).Value ="Nov_2020";
                //worksheet.Cell(currentRow, 19).Value ="Dec_2020";
                //worksheet.Cell(currentRow, 20).Value ="Jan_2021";
                //worksheet.Cell(currentRow, 21).Value ="Feb_2021";
                //worksheet.Cell(currentRow, 22).Value ="Mar_2021";
                //worksheet.Cell(currentRow, 23).Value ="Apr_2021";
                //worksheet.Cell(currentRow, 24).Value ="May_2021";
                //worksheet.Cell(currentRow, 25).Value ="Jun_2021";
                //worksheet.Cell(currentRow, 26).Value ="Jul_2021";
                //worksheet.Cell(currentRow, 27).Value ="Aug_2021";
                //worksheet.Cell(currentRow, 28).Value ="Sep_2021";
                //worksheet.Cell(currentRow, 29).Value ="Oct_2021";
                //worksheet.Cell(currentRow, 30).Value ="Nov_2021";
                //worksheet.Cell(currentRow, 31).Value ="Dec_2021";
                //worksheet.Cell(currentRow, 32).Value ="Jan_2022";
                //worksheet.Cell(currentRow, 33).Value ="Feb_2022";
                //worksheet.Cell(currentRow, 34).Value ="Mar_2022";
                //worksheet.Cell(currentRow, 35).Value ="Apr_2022";
                //worksheet.Cell(currentRow, 36).Value ="May_2022";
                //worksheet.Cell(currentRow, 37).Value ="Jun_2022";
                //worksheet.Cell(currentRow, 38).Value ="Jul_2022";
                //worksheet.Cell(currentRow, 39).Value ="Aug_2022";
                //worksheet.Cell(currentRow, 40).Value ="Sep_2022";
                //worksheet.Cell(currentRow, 41).Value ="Oct_2022";
                //worksheet.Cell(currentRow, 42).Value ="Nov_2022";
                //worksheet.Cell(currentRow, 43).Value ="Dec_2022";
                //worksheet.Cell(currentRow, 44).Value ="Jan_2023";
                //worksheet.Cell(currentRow, 45).Value ="Feb_2023";
                //worksheet.Cell(currentRow, 46).Value ="Mar_2023";
                //worksheet.Cell(currentRow, 47).Value ="Apr_2023";
                //worksheet.Cell(currentRow, 48).Value ="May_2023";
                //worksheet.Cell(currentRow, 49).Value ="Jun_2023";
                //worksheet.Cell(currentRow, 50).Value ="Jul_2023";
                //worksheet.Cell(currentRow, 51).Value ="Aug_2023";
                //worksheet.Cell(currentRow, 52).Value ="Sep_2023";
                //worksheet.Cell(currentRow, 53).Value ="Oct_2023";
                //worksheet.Cell(currentRow, 54).Value ="Nov_2023";
                //worksheet.Cell(currentRow, 55).Value ="Dec_2023";
                //worksheet.Cell(currentRow, 56).Value ="Jan_2024";
                //worksheet.Cell(currentRow, 57).Value ="Feb_2024";
                //worksheet.Cell(currentRow, 58).Value ="Mar_2024";
                //worksheet.Cell(currentRow, 59).Value ="Apr_2024";
                //worksheet.Cell(currentRow, 60).Value ="May_2024";
                //worksheet.Cell(currentRow, 61).Value ="Jun_2024";
                //worksheet.Cell(currentRow, 62).Value ="Jul_2024";
                //worksheet.Cell(currentRow, 63).Value ="Aug_2024";
                //worksheet.Cell(currentRow, 64).Value ="Sep_2024";
                //worksheet.Cell(currentRow, 65).Value ="Oct_2024";
                //worksheet.Cell(currentRow, 66).Value ="Nov_2024";
                //worksheet.Cell(currentRow, 67).Value ="Dec_2024";
                //worksheet.Cell(currentRow, 68).Value ="Jan_2025";
                //worksheet.Cell(currentRow, 69).Value ="Feb_2025";
                //worksheet.Cell(currentRow, 70).Value ="Mar_2025";
                //worksheet.Cell(currentRow, 71).Value ="Apr_2025";
                //worksheet.Cell(currentRow, 72).Value ="May_2025";
                //worksheet.Cell(currentRow, 73).Value ="Jun_2025";
                //worksheet.Cell(currentRow, 74).Value ="Jul_2025";
                //worksheet.Cell(currentRow, 75).Value ="Aug_2025";
                //worksheet.Cell(currentRow, 76).Value ="Sep_2025";
                //worksheet.Cell(currentRow, 77).Value ="Oct_2025";
                //worksheet.Cell(currentRow, 78).Value ="Nov_2025";
                //worksheet.Cell(currentRow, 79).Value ="Dec_2025";
                if (TDetails.Count != 0)
                {


                    foreach (var user in TDetails)
                    {
                        currentRow++;
                        worksheet.Cell(currentRow, 1).Value = user.statename;
                        worksheet.Cell(currentRow, 2).Value = user.districtname;
                        worksheet.Cell(currentRow, 3).Value = user.blockname;
                        worksheet.Cell(currentRow, 4).Value = user.gpname;
                        worksheet.Cell(currentRow, 5).Value = user.sitename;
                        worksheet.Cell(currentRow, 6).Value = user.latitude;
                        worksheet.Cell(currentRow, 7).Value = user.longitude;

                        worksheet.Cell(currentRow, 8).Value = user.raingauge;
                        worksheet.Cell(currentRow, 9).Value = user.date;
                        worksheet.Cell(currentRow, 10).Value = user.rainfall1;
                        worksheet.Cell(currentRow, 11).Value = user.deviceid;
                        worksheet.Cell(currentRow, 12).Value = user.image1;
                        worksheet.Cell(currentRow, 13).Value = user.image2;
                        worksheet.Cell(currentRow, 14).Value = user.email;

                        //worksheet.Cell(currentRow, 8).Value = user.jan_2020;
                        //worksheet.Cell(currentRow, 9).Value = user.feb_2020;
                        //worksheet.Cell(currentRow, 10).Value = user.mar_2020;
                        //worksheet.Cell(currentRow, 11).Value = user.apr_2020;
                        //worksheet.Cell(currentRow, 12).Value = user.may_2020;
                        //worksheet.Cell(currentRow, 13).Value = user.jun_2020;
                        //worksheet.Cell(currentRow, 14).Value = user.jul_2020;
                        //worksheet.Cell(currentRow, 15).Value = user.aug_2020;
                        //worksheet.Cell(currentRow, 16).Value = user.sep_2020;
                        //worksheet.Cell(currentRow, 17).Value = user.oct_2020;
                        //worksheet.Cell(currentRow, 18).Value = user.nov_2020;
                        //worksheet.Cell(currentRow, 19).Value = user.dec_2020;
                        //worksheet.Cell(currentRow, 20).Value = user.jan_2021;
                        //worksheet.Cell(currentRow, 21).Value = user.feb_2021;
                        //worksheet.Cell(currentRow, 22).Value = user.mar_2021;
                        //worksheet.Cell(currentRow, 23).Value = user.apr_2021;
                        //worksheet.Cell(currentRow, 24).Value = user.may_2021;
                        //worksheet.Cell(currentRow, 25).Value = user.jun_2021;
                        //worksheet.Cell(currentRow, 26).Value = user.jul_2021;
                        //worksheet.Cell(currentRow, 27).Value = user.aug_2021;
                        //worksheet.Cell(currentRow, 28).Value = user.sep_2021;
                        //worksheet.Cell(currentRow, 29).Value = user.oct_2021;
                        //worksheet.Cell(currentRow, 30).Value = user.nov_2021;
                        //worksheet.Cell(currentRow, 31).Value = user.dec_2021;
                        //worksheet.Cell(currentRow, 32).Value = user.jan_2022;
                        //worksheet.Cell(currentRow, 33).Value = user.feb_2022;
                        //worksheet.Cell(currentRow, 34).Value = user.mar_2022;
                        //worksheet.Cell(currentRow, 35).Value = user.apr_2022;
                        //worksheet.Cell(currentRow, 36).Value = user.may_2022;
                        //worksheet.Cell(currentRow, 37).Value = user.jun_2022;
                        //worksheet.Cell(currentRow, 38).Value = user.jul_2022;
                        //worksheet.Cell(currentRow, 39).Value = user.aug_2022;
                        //worksheet.Cell(currentRow, 40).Value = user.sep_2022;
                        //worksheet.Cell(currentRow, 41).Value = user.oct_2022;
                        //worksheet.Cell(currentRow, 42).Value = user.nov_2022;
                        //worksheet.Cell(currentRow, 43).Value = user.dec_2022;
                        //worksheet.Cell(currentRow, 44).Value = user.jan_2023;
                        //worksheet.Cell(currentRow, 45).Value = user.feb_2023;
                        //worksheet.Cell(currentRow, 46).Value = user.mar_2023;
                        //worksheet.Cell(currentRow, 47).Value = user.apr_2023;
                        //worksheet.Cell(currentRow, 48).Value = user.may_2023;
                        //worksheet.Cell(currentRow, 49).Value = user.jun_2023;
                        //worksheet.Cell(currentRow, 50).Value = user.jul_2023;
                        //worksheet.Cell(currentRow, 51).Value = user.aug_2023;
                        //worksheet.Cell(currentRow, 52).Value = user.sep_2023;
                        //worksheet.Cell(currentRow, 53).Value = user.oct_2023;
                        //worksheet.Cell(currentRow, 54).Value = user.nov_2023;
                        //worksheet.Cell(currentRow, 55).Value = user.dec_2023;
                        //worksheet.Cell(currentRow, 56).Value = user.jan_2024;
                        //worksheet.Cell(currentRow, 57).Value = user.feb_2024;
                        //worksheet.Cell(currentRow, 58).Value = user.mar_2024;
                        //worksheet.Cell(currentRow, 59).Value = user.apr_2024;
                        //worksheet.Cell(currentRow, 60).Value = user.may_2024;
                        //worksheet.Cell(currentRow, 61).Value = user.jun_2024;
                        //worksheet.Cell(currentRow, 62).Value = user.jul_2024;
                        //worksheet.Cell(currentRow, 63).Value = user.aug_2024;
                        //worksheet.Cell(currentRow, 64).Value = user.sep_2024;
                        //worksheet.Cell(currentRow, 65).Value = user.oct_2024;
                        //worksheet.Cell(currentRow, 66).Value = user.nov_2024;
                        //worksheet.Cell(currentRow, 67).Value = user.dec_2024;
                        //worksheet.Cell(currentRow, 68).Value = user.jan_2025;
                        //worksheet.Cell(currentRow, 69).Value = user.feb_2025;
                        //worksheet.Cell(currentRow, 70).Value = user.mar_2025;
                        //worksheet.Cell(currentRow, 71).Value = user.apr_2025;
                        //worksheet.Cell(currentRow, 72).Value = user.may_2025;
                        //worksheet.Cell(currentRow, 73).Value = user.jun_2025;
                        //worksheet.Cell(currentRow, 74).Value = user.jul_2025;
                        //worksheet.Cell(currentRow, 75).Value = user.aug_2025;
                        //worksheet.Cell(currentRow, 76).Value = user.sep_2025;
                        //worksheet.Cell(currentRow, 77).Value = user.oct_2025;
                        //worksheet.Cell(currentRow, 78).Value = user.nov_2025;
                        //worksheet.Cell(currentRow, 79).Value = user.dec_2025;


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
                    worksheet.Cell(currentRow, 7).Value = "NO DATA";
                    worksheet.Cell(currentRow, 8).Value = "";
                    worksheet.Cell(currentRow, 9).Value = "";
                    worksheet.Cell(currentRow, 10).Value = "";
                    worksheet.Cell(currentRow, 11).Value = "";
                    worksheet.Cell(currentRow, 12).Value = "";
                    worksheet.Cell(currentRow, 13).Value = "";
                    worksheet.Cell(currentRow, 14).Value = "";
                    //worksheet.Cell(currentRow, 15).Value = "";
                    //worksheet.Cell(currentRow, 16).Value = "";
                    //worksheet.Cell(currentRow, 17).Value = "";
                    //worksheet.Cell(currentRow, 18).Value = "";
                    //worksheet.Cell(currentRow, 19).Value = "";
                    //worksheet.Cell(currentRow, 20).Value = "";
                    //worksheet.Cell(currentRow, 21).Value = "";
                    //worksheet.Cell(currentRow, 22).Value = "";
                    //worksheet.Cell(currentRow, 23).Value = "";
                    //worksheet.Cell(currentRow, 24).Value = "";
                    //worksheet.Cell(currentRow, 25).Value = "";
                    //worksheet.Cell(currentRow, 26).Value = "";
                    //worksheet.Cell(currentRow, 27).Value = "";
                    //worksheet.Cell(currentRow, 28).Value = "";
                    //worksheet.Cell(currentRow, 29).Value = "";
                    //worksheet.Cell(currentRow, 30).Value = "";
                    //worksheet.Cell(currentRow, 31).Value = "";
                    //worksheet.Cell(currentRow, 32).Value = "";
                    //worksheet.Cell(currentRow, 33).Value = "";
                    //worksheet.Cell(currentRow, 34).Value = "";
                    //worksheet.Cell(currentRow, 35).Value = "";
                    //worksheet.Cell(currentRow, 36).Value = "";
                    //worksheet.Cell(currentRow, 37).Value = "";
                    //worksheet.Cell(currentRow, 38).Value = "";
                    //worksheet.Cell(currentRow, 39).Value = "";
                    //worksheet.Cell(currentRow, 40).Value = "";
                    //worksheet.Cell(currentRow, 41).Value = "";
                    //worksheet.Cell(currentRow, 42).Value = "";
                    //worksheet.Cell(currentRow, 43).Value = "";
                    //worksheet.Cell(currentRow, 44).Value = "";
                    //worksheet.Cell(currentRow, 45).Value = "";
                    //worksheet.Cell(currentRow, 46).Value = "";
                    //worksheet.Cell(currentRow, 47).Value = "";
                    //worksheet.Cell(currentRow, 48).Value = "";
                    //worksheet.Cell(currentRow, 49).Value = "";
                    //worksheet.Cell(currentRow, 50).Value = "";
                    //worksheet.Cell(currentRow, 51).Value = "";
                    //worksheet.Cell(currentRow, 52).Value = "";
                    //worksheet.Cell(currentRow, 53).Value = "";
                    //worksheet.Cell(currentRow, 54).Value = "";
                    //worksheet.Cell(currentRow, 55).Value = "";
                    //worksheet.Cell(currentRow, 56).Value = "";
                    //worksheet.Cell(currentRow, 57).Value = "";
                    //worksheet.Cell(currentRow, 58).Value = "";
                    //worksheet.Cell(currentRow, 59).Value = "";
                    //worksheet.Cell(currentRow, 60).Value = "";
                    //worksheet.Cell(currentRow, 61).Value = "";
                    //worksheet.Cell(currentRow, 62).Value = "";
                    //worksheet.Cell(currentRow, 63).Value = "";
                    //worksheet.Cell(currentRow, 64).Value = "";
                    //worksheet.Cell(currentRow, 65).Value = "";
                    //worksheet.Cell(currentRow, 66).Value = "";
                    //worksheet.Cell(currentRow, 67).Value = "";
                    //worksheet.Cell(currentRow, 68).Value = "";
                    //worksheet.Cell(currentRow, 69).Value = "";
                    //worksheet.Cell(currentRow, 70).Value = "";
                    //worksheet.Cell(currentRow, 71).Value = "";
                    //worksheet.Cell(currentRow, 72).Value = "";
                    //worksheet.Cell(currentRow, 73).Value = "";
                    //worksheet.Cell(currentRow, 74).Value = "";
                    //worksheet.Cell(currentRow, 75).Value = "";
                    //worksheet.Cell(currentRow, 76).Value = "";
                    //worksheet.Cell(currentRow, 77).Value = "";
                    //worksheet.Cell(currentRow, 78).Value = "";
                    //worksheet.Cell(currentRow, 79).Value = "";


                }
                using (var stream = new MemoryStream())
                {
                    workbook.SaveAs(stream);
                    var content = stream.ToArray();

                    return File(
                        content,
                        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                        "Rainfall_Information.xlsx");
                }



            }

        }

        [HttpGet]
        public ActionResult abhy_Rainfall_Data_getting_data()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<rainfall> TDetails = new List<rainfall>();
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();
                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        TDetails = AJE.obj_rainfall.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.gpname == Gram).ToList();//total list
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        TDetails = AJE.obj_rainfall.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block).ToList();//total list
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        TDetails = AJE.obj_rainfall.Where(x => x.statename == State && x.districtname == Dist).ToList();//total list
                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        TDetails = AJE.obj_rainfall.Where(x => x.statename == State).ToList();//total list
                    }
                    return Json(TDetails, JsonRequestBehavior.AllowGet);
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

        public ActionResult Export_Social_Monitoring_ToExcel()
        {
            List<socialmonitoring> TDetails = new List<socialmonitoring>();
            var State = Session["gstate"].ToString();
            var Dist = Session["gdist"].ToString();
            var Block = Session["gblock"].ToString();
            var Gram = Session["ggram"].ToString();

            if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
            {
                TDetails = AJE.obj_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram).ToList();//total list
            }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
            {
                TDetails = AJE.obj_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block).ToList();//total list
            }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
            {
                TDetails = AJE.obj_socialmonitoring.Where(x => x.state == State && x.district == Dist).ToList();//total list
            }
            else if (State != "0" && State != "" && State != null)
            {
                TDetails = AJE.obj_socialmonitoring.Where(x => x.state == State).ToList();//total list
            }
            using (var workbook = new XLWorkbook())
            {

                var worksheet = workbook.Worksheets.Add("Users");
                var currentRow = 1;
                worksheet.Cell(currentRow, 1).Value = "StateName";
                worksheet.Cell(currentRow, 2).Value = "Distname";
                worksheet.Cell(currentRow, 3).Value = "BlockName";
                worksheet.Cell(currentRow, 4).Value = "GramName";
                worksheet.Cell(currentRow, 5).Value = "Location";
                worksheet.Cell(currentRow, 6).Value = "Date";
                worksheet.Cell(currentRow, 7).Value = "Attendees";
                worksheet.Cell(currentRow, 8).Value = "Male";
                worksheet.Cell(currentRow, 9).Value = "Female";
                // worksheet.Cell(currentRow, 10).Value = "Agenda";
                worksheet.Cell(currentRow, 10).Value = "MinutesOfMeeting";
                worksheet.Cell(currentRow, 11).Value = "Image";
                worksheet.Cell(currentRow, 12).Value = "Latitude";
                worksheet.Cell(currentRow, 13).Value = "Longitude";
                worksheet.Cell(currentRow, 14).Value = "Event";
                worksheet.Cell(currentRow, 15).Value = "Others";
                worksheet.Cell(currentRow, 16).Value = "Email";
                if (TDetails.Count != 0)
                {


                    foreach (var user in TDetails)
                    {
                        currentRow++;
                        worksheet.Cell(currentRow, 1).Value = user.state;
                        worksheet.Cell(currentRow, 2).Value = user.district;
                        worksheet.Cell(currentRow, 3).Value = user.block;
                        worksheet.Cell(currentRow, 4).Value = user.grampanchayat;
                        worksheet.Cell(currentRow, 5).Value = user.location;
                        worksheet.Cell(currentRow, 6).Value = user.date;
                        worksheet.Cell(currentRow, 7).Value = user.numberofattendees;
                        worksheet.Cell(currentRow, 8).Value = user.male;
                        worksheet.Cell(currentRow, 9).Value = user.female;
                        // worksheet.Cell(currentRow, 10).Value = user.agenda;
                        worksheet.Cell(currentRow, 10).Value = user.minutesofmeeting;
                        worksheet.Cell(currentRow, 11).Value = user.image;
                        worksheet.Cell(currentRow, 12).Value = user.latitude;
                        worksheet.Cell(currentRow, 13).Value = user.longitude;
                        worksheet.Cell(currentRow, 14).Value = user.event1;
                        worksheet.Cell(currentRow, 15).Value = user.others;
                        worksheet.Cell(currentRow, 16).Value = user.email;

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
                    worksheet.Cell(currentRow, 8).Value = "NO DATA";
                    worksheet.Cell(currentRow, 9).Value = "";
                    worksheet.Cell(currentRow, 10).Value = "";
                    worksheet.Cell(currentRow, 11).Value = "";
                    worksheet.Cell(currentRow, 12).Value = "";
                    worksheet.Cell(currentRow, 13).Value = "";
                    worksheet.Cell(currentRow, 14).Value = "";
                    worksheet.Cell(currentRow, 15).Value = "";
                    worksheet.Cell(currentRow, 16).Value = "";

                }
                using (var stream = new MemoryStream())
                {
                    workbook.SaveAs(stream);
                    var content = stream.ToArray();

                    return File(
                        content,
                        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                        "SocialMonitoring_Information.xlsx");
                }



            }

        }

        [HttpPost]
        public ActionResult abhy_Social_Monitoring_getting_data(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<socialmonitoring>(Data);
                    List<socialmonitoring> TDetails = new List<socialmonitoring>();
                    var State = result.state;
                    var Dist = result.district;
                    var Block = result.block;
                    var Gram = result.grampanchayat;

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        TDetails = AJE.obj_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram).ToList();//total list
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        TDetails = AJE.obj_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block).ToList();//total list
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        TDetails = AJE.obj_socialmonitoring.Where(x => x.state == State && x.district == Dist).ToList();//total list
                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        TDetails = AJE.obj_socialmonitoring.Where(x => x.state == State).ToList();//total list
                    }
                    return Json(TDetails, JsonRequestBehavior.AllowGet);
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



        public ActionResult Export_Ground_Water_Monitoring_ToExcel()
        {
            List<groundwaterlevel> TDetails = new List<groundwaterlevel>();
            var State = Session["gstate"].ToString();
            var Dist = Session["gdist"].ToString();
            var Block = Session["gblock"].ToString();
            var Gram = Session["ggram"].ToString();

            if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
            {
                TDetails = AJE.obj_groundwaterlevel.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram).ToList();//total list
            }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
            {
                TDetails = AJE.obj_groundwaterlevel.Where(x => x.state == State && x.district == Dist && x.block == Block).ToList();//total list
            }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
            {
                TDetails = AJE.obj_groundwaterlevel.Where(x => x.state == State && x.district == Dist).ToList();//total list
            }
            else if (State != "0" && State != "" && State != null)
            {
                TDetails = AJE.obj_groundwaterlevel.Where(x => x.state == State).ToList();//total list
            }
            using (var workbook = new XLWorkbook())
            {

                var worksheet = workbook.Worksheets.Add("Users");
                var currentRow = 1;
                worksheet.Cell(currentRow, 1).Value = "State";
                worksheet.Cell(currentRow, 2).Value = "District";
                worksheet.Cell(currentRow, 3).Value = "Block";
                worksheet.Cell(currentRow, 4).Value = "Gampanchayat";
                worksheet.Cell(currentRow, 5).Value = "Sitename";
                worksheet.Cell(currentRow, 6).Value = "Typeofwell";
                worksheet.Cell(currentRow, 7).Value = "Source";
                worksheet.Cell(currentRow, 8).Value = "Latitude";
                worksheet.Cell(currentRow, 9).Value = "Longitude";
                worksheet.Cell(currentRow, 10).Value = "Wellid";
                worksheet.Cell(currentRow, 11).Value = "Well_Depth";
                worksheet.Cell(currentRow, 12).Value = "Aquifer";
                worksheet.Cell(currentRow, 13).Value = "Pre2015";
                worksheet.Cell(currentRow, 14).Value = "Post2015";
                worksheet.Cell(currentRow, 15).Value = "Pre2016";
                worksheet.Cell(currentRow, 16).Value = "Post2016";
                worksheet.Cell(currentRow, 17).Value = "Pre2017";
                worksheet.Cell(currentRow, 18).Value = "Post2017";
                worksheet.Cell(currentRow, 19).Value = "Pre2018";
                worksheet.Cell(currentRow, 20).Value = "Post2018";
                worksheet.Cell(currentRow, 21).Value = "Pre2019";
                worksheet.Cell(currentRow, 22).Value = "Post2019";
                worksheet.Cell(currentRow, 23).Value = "Uid";
                worksheet.Cell(currentRow, 24).Value = "Dec_2020";
                worksheet.Cell(currentRow, 25).Value = "Jan_2021";
                worksheet.Cell(currentRow, 26).Value = "Feb_2021";
                worksheet.Cell(currentRow, 27).Value = "Mar_2021";
                worksheet.Cell(currentRow, 28).Value = "Apr_2021";
                worksheet.Cell(currentRow, 29).Value = "May_2021";
                worksheet.Cell(currentRow, 30).Value = "Jun_2021";
                worksheet.Cell(currentRow, 31).Value = "Jul_2021";
                worksheet.Cell(currentRow, 32).Value = "Aug_2021";
                worksheet.Cell(currentRow, 33).Value = "Sep_2021";
                worksheet.Cell(currentRow, 34).Value = "Oct_2021";
                worksheet.Cell(currentRow, 35).Value = "Nov_2021";
                worksheet.Cell(currentRow, 36).Value = "Dec_2021";
                worksheet.Cell(currentRow, 37).Value = "Jan_2022";
                worksheet.Cell(currentRow, 38).Value = "Feb_2022";
                worksheet.Cell(currentRow, 39).Value = "Mar_2022";
                worksheet.Cell(currentRow, 40).Value = "Apr_2022";
                worksheet.Cell(currentRow, 41).Value = "May_2022";
                worksheet.Cell(currentRow, 42).Value = "Jun_2022";
                worksheet.Cell(currentRow, 43).Value = "Jul_2022";
                worksheet.Cell(currentRow, 44).Value = "Aug_2022";
                worksheet.Cell(currentRow, 45).Value = "Sep_2022";
                worksheet.Cell(currentRow, 46).Value = "Oct_2022";
                worksheet.Cell(currentRow, 47).Value = "Nov_2022";
                worksheet.Cell(currentRow, 48).Value = "Dec_2022";
                worksheet.Cell(currentRow, 49).Value = "Jan_2023";
                worksheet.Cell(currentRow, 50).Value = "Feb_2023";
                worksheet.Cell(currentRow, 51).Value = "Mar_2023";
                worksheet.Cell(currentRow, 52).Value = "Apr_2023";
                worksheet.Cell(currentRow, 53).Value = "May_2023";
                worksheet.Cell(currentRow, 54).Value = "Jun_2023";
                worksheet.Cell(currentRow, 55).Value = "Jul_2023";
                worksheet.Cell(currentRow, 56).Value = "Aug_2023";
                worksheet.Cell(currentRow, 57).Value = "Sep_2023";
                worksheet.Cell(currentRow, 58).Value = "Oct_2023";
                worksheet.Cell(currentRow, 59).Value = "Nov_2023";
                worksheet.Cell(currentRow, 60).Value = "Dec_2023";
                worksheet.Cell(currentRow, 61).Value = "Jan_2024";
                worksheet.Cell(currentRow, 62).Value = "Feb_2024";
                worksheet.Cell(currentRow, 63).Value = "Mar_2024";
                worksheet.Cell(currentRow, 64).Value = "Apr_2024";
                worksheet.Cell(currentRow, 65).Value = "May_2024";
                worksheet.Cell(currentRow, 66).Value = "Jun_2024";
                worksheet.Cell(currentRow, 67).Value = "Jul_2024";
                worksheet.Cell(currentRow, 68).Value = "Aug_2024";
                worksheet.Cell(currentRow, 69).Value = "Sep_2024";
                worksheet.Cell(currentRow, 70).Value = "Oct_2024";
                worksheet.Cell(currentRow, 71).Value = "Nov_2024";
                worksheet.Cell(currentRow, 72).Value = "Dec_2024";
                worksheet.Cell(currentRow, 73).Value = "Jan_2025";
                worksheet.Cell(currentRow, 74).Value = "Feb_2025";
                worksheet.Cell(currentRow, 75).Value = "Mar_2025";
                worksheet.Cell(currentRow, 76).Value = "Apr_2025";
                worksheet.Cell(currentRow, 77).Value = "May_2025";
                worksheet.Cell(currentRow, 78).Value = "Jun_2025";
                worksheet.Cell(currentRow, 79).Value = "Jul_2025";
                worksheet.Cell(currentRow, 80).Value = "Aug_2025";
                worksheet.Cell(currentRow, 81).Value = "Sep_2025";
                worksheet.Cell(currentRow, 82).Value = "Oct_2025";
                worksheet.Cell(currentRow, 83).Value = "Nov_2025";
                worksheet.Cell(currentRow, 84).Value = "Dec_2025";
                worksheet.Cell(currentRow, 85).Value = "Well";
                worksheet.Cell(currentRow, 86).Value = "DateTime";
                worksheet.Cell(currentRow, 87).Value = "Email";
                worksheet.Cell(currentRow, 88).Value = "Image";


                if (TDetails.Count != 0)
                {


                    foreach (var user in TDetails)
                    {
                        currentRow++;
                        worksheet.Cell(currentRow, 1).Value = user.state;
                        worksheet.Cell(currentRow, 2).Value = user.district;
                        worksheet.Cell(currentRow, 3).Value = user.block;
                        worksheet.Cell(currentRow, 4).Value = user.grampanchayat;
                        worksheet.Cell(currentRow, 5).Value = user.sitename;
                        worksheet.Cell(currentRow, 6).Value = user.typeofwell;
                        worksheet.Cell(currentRow, 7).Value = user.source;
                        worksheet.Cell(currentRow, 8).Value = user.latitude;
                        worksheet.Cell(currentRow, 9).Value = user.longitude;
                        worksheet.Cell(currentRow, 10).Value = user.wellid;
                        worksheet.Cell(currentRow, 11).Value = user.welldepth;
                        worksheet.Cell(currentRow, 12).Value = user.aquifer;
                        worksheet.Cell(currentRow, 13).Value = user.pre2015;
                        worksheet.Cell(currentRow, 14).Value = user.post2015;
                        worksheet.Cell(currentRow, 15).Value = user.pre2016;
                        worksheet.Cell(currentRow, 16).Value = user.post2016;
                        worksheet.Cell(currentRow, 17).Value = user.pre2017;
                        worksheet.Cell(currentRow, 18).Value = user.post2017;
                        worksheet.Cell(currentRow, 19).Value = user.pre2018;
                        worksheet.Cell(currentRow, 20).Value = user.post2018;
                        worksheet.Cell(currentRow, 21).Value = user.pre2019;
                        worksheet.Cell(currentRow, 22).Value = user.post2019;
                        worksheet.Cell(currentRow, 23).Value = user.uid;
                        worksheet.Cell(currentRow, 24).Value = user.dec_2020;
                        worksheet.Cell(currentRow, 25).Value = user.jan_2021;
                        worksheet.Cell(currentRow, 26).Value = user.feb_2021;
                        worksheet.Cell(currentRow, 27).Value = user.mar_2021;
                        worksheet.Cell(currentRow, 28).Value = user.apr_2021;
                        worksheet.Cell(currentRow, 29).Value = user.may_2021;
                        worksheet.Cell(currentRow, 30).Value = user.jun_2021;
                        worksheet.Cell(currentRow, 31).Value = user.jul_2021;
                        worksheet.Cell(currentRow, 32).Value = user.aug_2021;
                        worksheet.Cell(currentRow, 33).Value = user.sep_2021;
                        worksheet.Cell(currentRow, 34).Value = user.oct_2021;
                        worksheet.Cell(currentRow, 35).Value = user.nov_2021;
                        worksheet.Cell(currentRow, 36).Value = user.dec_2021;
                        worksheet.Cell(currentRow, 37).Value = user.jan_2022;
                        worksheet.Cell(currentRow, 38).Value = user.feb_2022;
                        worksheet.Cell(currentRow, 39).Value = user.mar_2022;
                        worksheet.Cell(currentRow, 40).Value = user.apr_2022;
                        worksheet.Cell(currentRow, 41).Value = user.may_2022;
                        worksheet.Cell(currentRow, 42).Value = user.jun_2022;
                        worksheet.Cell(currentRow, 43).Value = user.jul_2022;
                        worksheet.Cell(currentRow, 44).Value = user.aug_2022;
                        worksheet.Cell(currentRow, 45).Value = user.sep_2022;
                        worksheet.Cell(currentRow, 46).Value = user.oct_2022;
                        worksheet.Cell(currentRow, 47).Value = user.nov_2022;
                        worksheet.Cell(currentRow, 48).Value = user.dec_2022;
                        worksheet.Cell(currentRow, 49).Value = user.jan_2023;
                        worksheet.Cell(currentRow, 50).Value = user.feb_2023;
                        worksheet.Cell(currentRow, 51).Value = user.mar_2023;
                        worksheet.Cell(currentRow, 52).Value = user.apr_2023;
                        worksheet.Cell(currentRow, 53).Value = user.may_2023;
                        worksheet.Cell(currentRow, 54).Value = user.jun_2023;
                        worksheet.Cell(currentRow, 55).Value = user.jul_2023;
                        worksheet.Cell(currentRow, 56).Value = user.aug_2023;
                        worksheet.Cell(currentRow, 57).Value = user.sep_2023;
                        worksheet.Cell(currentRow, 58).Value = user.oct_2023;
                        worksheet.Cell(currentRow, 59).Value = user.nov_2023;
                        worksheet.Cell(currentRow, 60).Value = user.dec_2023;
                        worksheet.Cell(currentRow, 61).Value = user.jan_2024;
                        worksheet.Cell(currentRow, 62).Value = user.feb_2024;
                        worksheet.Cell(currentRow, 63).Value = user.mar_2024;
                        worksheet.Cell(currentRow, 64).Value = user.apr_2024;
                        worksheet.Cell(currentRow, 65).Value = user.may_2024;
                        worksheet.Cell(currentRow, 66).Value = user.jun_2024;
                        worksheet.Cell(currentRow, 67).Value = user.jul_2024;
                        worksheet.Cell(currentRow, 68).Value = user.aug_2024;
                        worksheet.Cell(currentRow, 69).Value = user.sep_2024;
                        worksheet.Cell(currentRow, 70).Value = user.oct_2024;
                        worksheet.Cell(currentRow, 71).Value = user.nov_2024;
                        worksheet.Cell(currentRow, 72).Value = user.dec_2024;
                        worksheet.Cell(currentRow, 73).Value = user.jan_2025;
                        worksheet.Cell(currentRow, 74).Value = user.feb_2025;
                        worksheet.Cell(currentRow, 75).Value = user.mar_2025;
                        worksheet.Cell(currentRow, 76).Value = user.apr_2025;
                        worksheet.Cell(currentRow, 77).Value = user.may_2025;
                        worksheet.Cell(currentRow, 78).Value = user.jun_2025;
                        worksheet.Cell(currentRow, 79).Value = user.jul_2025;
                        worksheet.Cell(currentRow, 80).Value = user.aug_2025;
                        worksheet.Cell(currentRow, 81).Value = user.sep_2025;
                        worksheet.Cell(currentRow, 82).Value = user.oct_2025;
                        worksheet.Cell(currentRow, 83).Value = user.nov_2025;
                        worksheet.Cell(currentRow, 84).Value = user.dec_2025;
                        worksheet.Cell(currentRow, 85).Value = user.well;
                        worksheet.Cell(currentRow, 86).Value = user.datetime;
                        worksheet.Cell(currentRow, 87).Value = user.email;
                        worksheet.Cell(currentRow, 88).Value = user.image;
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
                    worksheet.Cell(currentRow, 10).Value = "NO DATA";
                    worksheet.Cell(currentRow, 11).Value = "";
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
                    worksheet.Cell(currentRow, 23).Value = "";
                    worksheet.Cell(currentRow, 24).Value = "";
                    worksheet.Cell(currentRow, 25).Value = "NO DATA";
                    worksheet.Cell(currentRow, 26).Value = "";
                    worksheet.Cell(currentRow, 27).Value = "";
                    worksheet.Cell(currentRow, 28).Value = "";
                    worksheet.Cell(currentRow, 29).Value = "";
                    worksheet.Cell(currentRow, 30).Value = "";
                    worksheet.Cell(currentRow, 31).Value = "";
                    worksheet.Cell(currentRow, 32).Value = "";
                    worksheet.Cell(currentRow, 33).Value = "";
                    worksheet.Cell(currentRow, 34).Value = "";
                    worksheet.Cell(currentRow, 35).Value = "";
                    worksheet.Cell(currentRow, 36).Value = "";
                    worksheet.Cell(currentRow, 37).Value = "";
                    worksheet.Cell(currentRow, 38).Value = "";
                    worksheet.Cell(currentRow, 39).Value = "";
                    worksheet.Cell(currentRow, 40).Value = "";
                    worksheet.Cell(currentRow, 41).Value = "";
                    worksheet.Cell(currentRow, 42).Value = "";
                    worksheet.Cell(currentRow, 43).Value = "";
                    worksheet.Cell(currentRow, 44).Value = "";
                    worksheet.Cell(currentRow, 45).Value = "";
                    worksheet.Cell(currentRow, 46).Value = "";
                    worksheet.Cell(currentRow, 47).Value = "";
                    worksheet.Cell(currentRow, 48).Value = "";
                    worksheet.Cell(currentRow, 49).Value = "";
                    worksheet.Cell(currentRow, 50).Value = "";
                    worksheet.Cell(currentRow, 51).Value = "";
                    worksheet.Cell(currentRow, 52).Value = "";
                    worksheet.Cell(currentRow, 53).Value = "";
                    worksheet.Cell(currentRow, 54).Value = "";
                    worksheet.Cell(currentRow, 55).Value = "";
                    worksheet.Cell(currentRow, 56).Value = "";
                    worksheet.Cell(currentRow, 57).Value = "";
                    worksheet.Cell(currentRow, 58).Value = "";
                    worksheet.Cell(currentRow, 59).Value = "";
                    worksheet.Cell(currentRow, 60).Value = "";
                    worksheet.Cell(currentRow, 61).Value = "";
                    worksheet.Cell(currentRow, 62).Value = "";
                    worksheet.Cell(currentRow, 63).Value = "";
                    worksheet.Cell(currentRow, 64).Value = "";
                    worksheet.Cell(currentRow, 65).Value = "";
                    worksheet.Cell(currentRow, 66).Value = "";
                    worksheet.Cell(currentRow, 67).Value = "";
                    worksheet.Cell(currentRow, 68).Value = "";
                    worksheet.Cell(currentRow, 69).Value = "";
                    worksheet.Cell(currentRow, 70).Value = "";
                    worksheet.Cell(currentRow, 71).Value = "";
                    worksheet.Cell(currentRow, 72).Value = "";
                    worksheet.Cell(currentRow, 73).Value = "";
                    worksheet.Cell(currentRow, 74).Value = "";
                    worksheet.Cell(currentRow, 75).Value = "";
                    worksheet.Cell(currentRow, 76).Value = "";
                    worksheet.Cell(currentRow, 77).Value = "";
                    worksheet.Cell(currentRow, 78).Value = "";
                    worksheet.Cell(currentRow, 79).Value = "";
                    worksheet.Cell(currentRow, 80).Value = "";
                    worksheet.Cell(currentRow, 81).Value = "";
                    worksheet.Cell(currentRow, 82).Value = "";
                    worksheet.Cell(currentRow, 83).Value = "";
                    worksheet.Cell(currentRow, 84).Value = "";
                    worksheet.Cell(currentRow, 85).Value = "";
                    worksheet.Cell(currentRow, 86).Value = "";
                    worksheet.Cell(currentRow, 87).Value = "";
                    worksheet.Cell(currentRow, 88).Value = "";


                }
                using (var stream = new MemoryStream())
                {
                    workbook.SaveAs(stream);
                    var content = stream.ToArray();

                    return File(
                        content,
                        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                        "GroundWaterLevels_Information.xlsx");
                }



            }

        }

        public ActionResult Upload_GeoTagging_image()
        {
            if (Session["UserId"] != null)
            {

                var Obj = new geotagging();
                string upload_count = Request["upload_count"];
                string State_name = Request["State"];
                string Dist = Request["Dist"];
                string Block = Request["Block"];
                string Gram = Request["Gram"];

                var str = upload_count.Split(',');
                int ll = str.Length - 1;
                var upload_Count_Value = str[ll];


                HttpFileCollectionBase files = Request.Files;
                var obj = new geotagging();
                string Paths = "";
                string File_Names = "";
                if (files.Count == 0)
                {
                    return Json("Please Upload Files", JsonRequestBehavior.AllowGet);
                }
                else
                {

                    for (int i = 0; i < files.Count; i++)
                    {

                        HttpPostedFileBase file = files[i];
                        Malicious_File_Upload_Restriction obj_Validate = new Malicious_File_Upload_Restriction();
                        string allowed_file_format = "jpg,png,jpeg";
                        bool flag = obj_Validate.CheckValidFile(file, allowed_file_format);
                        if (flag == false)
                        {
                            return Json("Your Upload file has Not valid File, Please Upload proper file", JsonRequestBehavior.AllowGet);
                        }
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
                        //string path = @"D:\dli_images\";
                        string path = @"D:\Ataljal_grievnce\";
                        string[] count = file.FileName.Split('.');
                        if (count.Length != 2)
                        {
                            return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                        }
                        path = path + fname;
                        file.SaveAs(path);
                        // Get the complete folder path and store the file inside it.      
                        //fname = "@D:\bsi_images\BSi_images\"", fname);
                        //var MainPath = path.Replace("D:\\dli_images\\", "http://54.221.131.231:8014/dli_images/");
                        var MainPath = path.Replace("D:\\Ataljal_grievnce\\", "http://54.221.131.231:8078/Ataljalimages/");
                        Paths = MainPath;
                        //file.SaveAs(fname);
                        File_Names = file.FileName + ',';

                    }

                    obj.statename = State_name;
                    obj.districtname = Dist;
                    obj.blockname = Block;
                    obj.gpname = Gram;
                    obj.image1 = Paths;
                    AJE.obj_geotagging.Add(obj);
                    AJE.SaveChanges();
                    return Json("Your files uploaded successfully", JsonRequestBehavior.AllowGet);



                }
            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpGet]
        public ActionResult GeoTagging_Images_Info(string state, string dist, string block, string gram)
        {
            if (Session["UserId"] != null)
            {
                var StateName = state;
                Session["DLI_State"] = state;
                var Data1 = AJE.obj_geotagging.Where(x => x.statename == state && x.districtname == dist && x.blockname == block && x.gpname == gram).ToList();
                if (Data1.Count != 0)
                {
                    return Json(Data1, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("NO", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }

        }



        public ActionResult Upload_Rain_gauge_Station_Image()
        {
            if (Session["UserId"] != null)
            {

                var Obj = new rainfall();
                string upload_count = Request["upload_count"];
                string State_name = Request["State"];
                string Dist = Request["Dist"];
                string Block = Request["Block"];
                string Gram = Request["Gram"];

                var str = upload_count.Split(',');
                int ll = str.Length - 1;
                var upload_Count_Value = str[ll];


                HttpFileCollectionBase files = Request.Files;
                var obj = new rainfall();
                string Paths = "";
                string File_Names = "";
                if (files.Count == 0)
                {
                    return Json("Please Upload Files", JsonRequestBehavior.AllowGet);
                }
                else
                {

                    for (int i = 0; i < files.Count; i++)
                    {

                        HttpPostedFileBase file = files[i];
                        Malicious_File_Upload_Restriction obj_Validate = new Malicious_File_Upload_Restriction();
                        string allowed_file_format = "jpg,png,jpeg,doc,docx";
                        bool flag = obj_Validate.CheckValidFile(file, allowed_file_format);
                        if (flag == false)
                        {
                            return Json("Your Upload file has Not valid File, Please Upload proper file", JsonRequestBehavior.AllowGet);
                        }
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
                        //string path = @"D:\dli_images\";
                        string path = @"D:\Ataljal_grievnce\";
                        path = path + fname;
                        string[] count = file.FileName.Split('.');
                        if (count.Length != 2)
                        {
                            return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                        }
                        file.SaveAs(path);
                        // Get the complete folder path and store the file inside it.      
                        //fname = "@D:\bsi_images\BSi_images\"", fname);
                        //var MainPath = path.Replace("D:\\dli_images\\", "http://54.221.131.231:8014/dli_images/");
                        var MainPath = path.Replace("D:\\Ataljal_grievnce\\", "http://54.221.131.231:8078/Ataljalimages/");
                        Paths = MainPath;
                        //file.SaveAs(fname);
                        File_Names = file.FileName + ',';

                    }

                    obj.statename = State_name;
                    obj.districtname = Dist;
                    obj.blockname = Block;
                    obj.gpname = Gram;
                    obj.image1 = Paths;
                    AJE.obj_rainfall.Add(obj);
                    AJE.SaveChanges();
                    return Json("Your files uploaded successfully", JsonRequestBehavior.AllowGet);



                }
            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }
        [HttpPost]
        //public ActionResult Create_Excel(string state1, string district1, string block01, string gp1, string year1)
        //{
        //    string path = "";
        //    string msg = "";

        //    string MapedPathoutputout = "";
        //    try
        //    {

        //        //List<abhy_baseline_gpdata> ddetails = new List<abhy_baseline_gpdata>();
        //        DataSet FinalData = new DataSet();
        //        List<abhy_baseline_gpdata> ddetails = new List<abhy_baseline_gpdata>();
        //        List<abhy_baseline_gp_remarks> remarks_details = new List<abhy_baseline_gp_remarks>();
        //        List<abhy_baseline_gp_livestock> livestock_details = new List<abhy_baseline_gp_livestock>();
        //        List<abhy_baseline_gp_surfacewater> surfacewater_details = new List<abhy_baseline_gp_surfacewater>();
        //        List<abhy_baseline_gp_groundwater> groundwater_details = new List<abhy_baseline_gp_groundwater>();
        //        List<abhy_baseline_gp_existingwells> existingwells_details = new List<abhy_baseline_gp_existingwells>();
        //        List<abhy_baseline_gp_watereff> watereff_details = new List<abhy_baseline_gp_watereff>();
        //        List<abhy_baseline_gp_upload> upload_details = new List<abhy_baseline_gp_upload>();
        //        List<sarpanchdetails> sarpanch = new List<sarpanchdetails>();
        //        //List<dynamic> baseline_data = new List<dynamic>();
        //        List<Allgpdata> baseline_data = new List<Allgpdata>();

        //        var State = state1;
        //        var Dist = district1;
        //        var Block = block01;
        //        var Gram = gp1;
        //        var Year = year1;
        //        //var Month = month1;

        //        if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null)
        //        {
        //            var BaseLineData = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year).GroupBy(o => o.gpname).ToList();//total list

        //            if (BaseLineData.Count != 0)
        //            {
        //                foreach (var items in BaseLineData.AsEnumerable())
        //                {
        //                    var item = items.First();
        //                    var data = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == State && x.year == Year && x.gpname == item.gpname).OrderByDescending(x => x.month_order_by).Take(1);

        //                    ddetails.AddRange(data);
        //                    var temp = data.ToList();
        //                    var id = Convert.ToInt32(temp[0].id);
        //                    var ID = ABE.obj_abhy_baseline_gpdata.Where(x => x.id == id).FirstOrDefault();
        //                    var livestock = ABE.obj_abhy_baseline_gp_livestock.Where(x => x.id == id).ToList();
        //                    livestock_details.AddRange(livestock);
        //                    var remarks = ABE.obj_abhy_baseline_gpdata_remarks.Where(x => x.id == id).ToList();
        //                    remarks_details.AddRange(remarks);
        //                    var surfacewater = ABE.obj_abhy_baseline_gp_surfacewater.Where(x => x.id == id).ToList();
        //                    surfacewater_details.AddRange(surfacewater);
        //                    var groundwater = ABE.obj_abhy_baseline_gp_groundwater.Where(x => x.id == id).ToList();
        //                    groundwater_details.AddRange(groundwater);
        //                    var existingwells = ABE.obj_abhy_baseline_gp_existingwells.Where(x => x.id == id).ToList();
        //                    existingwells_details.AddRange(existingwells);
        //                    var watereff = ABE.obj_abhy_baseline_gp_watereff.Where(x => x.id == id).ToList();
        //                    watereff_details.AddRange(watereff);
        //                    var upload = ABE.obj_abhy_baseline_gp_upload.Where(x => x.id == id).ToList();
        //                    upload_details.AddRange(upload);
        //                    var GetSpMonth = ABE.obj_sarpanchdetails.Where(x => x.state_name == State && x.year == Year && x.gpname == item.gpname).OrderByDescending(x => x.month_order_by).Take(1);
        //                    var SpList = GetSpMonth.ToList();
        //                    if (SpList.Count != 0)
        //                    {
        //                        string MonthName = Convert.ToString(SpList[0].month);
        //                        var sarpanch_data = ABE.obj_sarpanchdetails.Where(x => x.state_name == State && x.year == Year && x.gpname == item.gpname && x.month == MonthName).ToList();
        //                        sarpanch.AddRange(sarpanch_data);
        //                    }
        //                }
        //            }
        //        }
        //        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Year != "0" && Year != "" && Year != null)
        //        {
        //            var BaseLineData = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.year == Year).GroupBy(o => o.gpname).ToList();//total list

        //            if (BaseLineData.Count != 0)
        //            {
        //                foreach (var items in BaseLineData.AsEnumerable())
        //                {
        //                    var item = items.First();
        //                    var data = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == State && x.year == Year && x.gpname == item.gpname).OrderByDescending(x => x.month_order_by).Take(1);

        //                    ddetails.AddRange(data);
        //                    var temp = data.ToList();
        //                    var id = Convert.ToInt32(temp[0].id);
        //                    var ID = ABE.obj_abhy_baseline_gpdata.Where(x => x.id == id).FirstOrDefault();
        //                    var livestock = ABE.obj_abhy_baseline_gp_livestock.Where(x => x.id == id).ToList();
        //                    livestock_details.AddRange(livestock);
        //                    var remarks = ABE.obj_abhy_baseline_gpdata_remarks.Where(x => x.id == id).ToList();
        //                    remarks_details.AddRange(remarks);
        //                    var surfacewater = ABE.obj_abhy_baseline_gp_surfacewater.Where(x => x.id == id).ToList();
        //                    surfacewater_details.AddRange(surfacewater);
        //                    var groundwater = ABE.obj_abhy_baseline_gp_groundwater.Where(x => x.id == id).ToList();
        //                    groundwater_details.AddRange(groundwater);
        //                    var existingwells = ABE.obj_abhy_baseline_gp_existingwells.Where(x => x.id == id).ToList();
        //                    existingwells_details.AddRange(existingwells);
        //                    var watereff = ABE.obj_abhy_baseline_gp_watereff.Where(x => x.id == id).ToList();
        //                    watereff_details.AddRange(watereff);
        //                    var upload = ABE.obj_abhy_baseline_gp_upload.Where(x => x.id == id).ToList();
        //                    upload_details.AddRange(upload);
        //                    var GetSpMonth = ABE.obj_sarpanchdetails.Where(x => x.state_name == State && x.year == Year && x.gpname == item.gpname).OrderByDescending(x => x.month_order_by).Take(1);
        //                    var SpList = GetSpMonth.ToList();
        //                    if (SpList.Count != 0)
        //                    {
        //                        string MonthName = Convert.ToString(SpList[0].month);
        //                        var sarpanch_data = ABE.obj_sarpanchdetails.Where(x => x.state_name == State && x.year == Year && x.gpname == item.gpname && x.month == MonthName).ToList();
        //                        sarpanch.AddRange(sarpanch_data);
        //                    }
        //                }
        //            }
        //        }
        //        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null)
        //        {
        //            var BaseLineData = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == State && x.district_name == Dist && x.year == Year).GroupBy(o => o.gpname).ToList();//total list

        //            if (BaseLineData.Count != 0)
        //            {
        //                foreach (var items in BaseLineData.AsEnumerable())
        //                {
        //                    var item = items.First();
        //                    var data = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == State && x.year == Year && x.gpname == item.gpname).OrderByDescending(x => x.month_order_by).Take(1);

        //                    ddetails.AddRange(data);
        //                    var temp = data.ToList();
        //                    var id = Convert.ToInt32(temp[0].id);
        //                    var ID = ABE.obj_abhy_baseline_gpdata.Where(x => x.id == id).FirstOrDefault();
        //                    var livestock = ABE.obj_abhy_baseline_gp_livestock.Where(x => x.id == id).ToList();
        //                    livestock_details.AddRange(livestock);
        //                    var remarks = ABE.obj_abhy_baseline_gpdata_remarks.Where(x => x.id == id).ToList();
        //                    remarks_details.AddRange(remarks);
        //                    var surfacewater = ABE.obj_abhy_baseline_gp_surfacewater.Where(x => x.id == id).ToList();
        //                    surfacewater_details.AddRange(surfacewater);
        //                    var groundwater = ABE.obj_abhy_baseline_gp_groundwater.Where(x => x.id == id).ToList();
        //                    groundwater_details.AddRange(groundwater);
        //                    var existingwells = ABE.obj_abhy_baseline_gp_existingwells.Where(x => x.id == id).ToList();
        //                    existingwells_details.AddRange(existingwells);
        //                    var watereff = ABE.obj_abhy_baseline_gp_watereff.Where(x => x.id == id).ToList();
        //                    watereff_details.AddRange(watereff);
        //                    var upload = ABE.obj_abhy_baseline_gp_upload.Where(x => x.id == id).ToList();
        //                    upload_details.AddRange(upload);
        //                    var GetSpMonth = ABE.obj_sarpanchdetails.Where(x => x.state_name == State && x.year == Year && x.gpname == item.gpname).OrderByDescending(x => x.month_order_by).Take(1);
        //                    var SpList = GetSpMonth.ToList();
        //                    if (SpList.Count != 0)
        //                    {
        //                        string MonthName = Convert.ToString(SpList[0].month);
        //                        var sarpanch_data = ABE.obj_sarpanchdetails.Where(x => x.state_name == State && x.year == Year && x.gpname == item.gpname && x.month == MonthName).ToList();
        //                        sarpanch.AddRange(sarpanch_data);
        //                    }
        //                }
        //            }
        //        }
        //        else if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null)
        //        {
        //            var BaseLineData = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == State && x.year == Year).GroupBy(o => o.gpname).ToList();//total list

        //            if (BaseLineData.Count != 0)
        //            {
        //                foreach (var items in BaseLineData.AsEnumerable())
        //                {
        //                    var item = items.First();
        //                    var data = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == State && x.year == Year && x.gpname == item.gpname).OrderByDescending(x => x.month_order_by).Take(1);

        //                    ddetails.AddRange(data);
        //                    var temp = data.ToList();
        //                    var id = Convert.ToInt32(temp[0].id);
        //                    var ID = ABE.obj_abhy_baseline_gpdata.Where(x => x.id == id).FirstOrDefault();
        //                    var livestock = ABE.obj_abhy_baseline_gp_livestock.Where(x => x.id == id).ToList();
        //                    livestock_details.AddRange(livestock);
        //                    var remarks = ABE.obj_abhy_baseline_gpdata_remarks.Where(x => x.id == id).ToList();
        //                    remarks_details.AddRange(remarks);
        //                    var surfacewater = ABE.obj_abhy_baseline_gp_surfacewater.Where(x => x.id == id).ToList();
        //                    surfacewater_details.AddRange(surfacewater);
        //                    var groundwater = ABE.obj_abhy_baseline_gp_groundwater.Where(x => x.id == id).ToList();
        //                    groundwater_details.AddRange(groundwater);
        //                    var existingwells = ABE.obj_abhy_baseline_gp_existingwells.Where(x => x.id == id).ToList();
        //                    existingwells_details.AddRange(existingwells);
        //                    var watereff = ABE.obj_abhy_baseline_gp_watereff.Where(x => x.id == id).ToList();
        //                    watereff_details.AddRange(watereff);
        //                    var upload = ABE.obj_abhy_baseline_gp_upload.Where(x => x.id == id).ToList();
        //                    upload_details.AddRange(upload);
        //                    var GetSpMonth = ABE.obj_sarpanchdetails.Where(x => x.state_name == State && x.year == Year && x.gpname == item.gpname).OrderByDescending(x => x.month_order_by).Take(1);
        //                    var SpList = GetSpMonth.ToList();
        //                    if (SpList.Count != 0)
        //                    {
        //                        string MonthName = Convert.ToString(SpList[0].month);
        //                        var sarpanch_data = ABE.obj_sarpanchdetails.Where(x => x.state_name == State && x.year == Year && x.gpname == item.gpname && x.month == MonthName).ToList();
        //                        sarpanch.AddRange(sarpanch_data);
        //                    }
        //                }
        //            }

        //        }

        //        if (ddetails.Count > 0)
        //        {
        //            DataTable dt = ListToDataTable(ddetails, "BaseLine");
        //            FinalData.Tables.Add(dt);
        //        }
        //        if (livestock_details.Count > 0)
        //        {
        //            DataTable dt = ListToDataTable(livestock_details, "BaseLine_Livestock");
        //            FinalData.Tables.Add(dt);
        //        }

        //        if (surfacewater_details.Count > 0)
        //        {
        //            DataTable dt = ListToDataTable(surfacewater_details, "BaseLine_Surface_Water");
        //            FinalData.Tables.Add(dt);
        //        }
        //        if (groundwater_details.Count > 0)
        //        {
        //            DataTable dt = ListToDataTable(groundwater_details, "BaseLine_Ground_Water");
        //            FinalData.Tables.Add(dt);
        //        }
        //        if (existingwells_details.Count > 0)
        //        {
        //            DataTable dt = ListToDataTable(existingwells_details, "BaseLine_Existing_Wells");
        //            FinalData.Tables.Add(dt);
        //        }
        //        if (watereff_details.Count > 0)
        //        {
        //            DataTable dt = ListToDataTable(watereff_details, "BaseLine_Watereff_Details");
        //            FinalData.Tables.Add(dt);
        //        }
        //        if (upload_details.Count > 0)
        //        {
        //            DataTable dt = ListToDataTable(upload_details, "BaseLine_Upload_Details");
        //            FinalData.Tables.Add(dt);
        //        }
        //        if (remarks_details.Count > 0)
        //        {
        //            DataTable dt = ListToDataTable(remarks_details, "BaseLine_Remarks");
        //            FinalData.Tables.Add(dt);
        //        }
        //        if (sarpanch.Count > 0)
        //        {
        //            DataTable dt = ListToDataTable(sarpanch, "Key Personal of GP");
        //            FinalData.Tables.Add(dt);
        //        }

        //        //string BasePath = AppDomain.CurrentDomain.BaseDirectory;
        //        //path = System.IO.Path.Combine(BasePath, "Template_temp\\");
        //        path = Server.MapPath("Template_temp\\");
        //        MapedPathoutputout = path + "\\Abhy_Baseline_Data.xlsx";
        //        string rootPath = Server.MapPath(@"/Template/Data.xlsx");
        //        using (XLWorkbook workbook = new XLWorkbook(rootPath))
        //        {
        //            for (int s = 0; s < FinalData.Tables.Count; s++)//data set loop
        //            {
        //                for (int r = 0; r < FinalData.Tables[s].Rows.Count; r++) // rows loop
        //                {
        //                    for (int c = 1; c < FinalData.Tables[s].Columns.Count; c++)
        //                    {

        //                        var worksheet = workbook.Worksheet(s + 1);
        //                        worksheet.Name = FinalData.Tables[s].TableName.ToString();
        //                        worksheet.Cell(1, c).Value = FinalData.Tables[s].Columns[c].ColumnName;
        //                        worksheet.Cell(r + 2, c).Value = FinalData.Tables[s].Rows[r][c].ToString();
        //                        worksheet.Column(c).AdjustToContents();
        //                        // worksheet.Range("A" + i).Value =
        //                    }

        //                }
        //            }
        //            if (!Directory.Exists(path))
        //            {
        //                Directory.CreateDirectory(path);
        //            }
        //            else
        //            {
        //                string[] files = Directory.GetFiles(path);
        //                foreach (string file in files)
        //                {
        //                    System.IO.File.Delete(file);
        //                }
        //            }
        //            msg = "/Template_temp/Abhy_Baseline_Data.xlsx";
        //            //msg = Server.MapPath(@"/Template_temp/Abhy_Baseline_Data.xlsx");
        //            workbook.SaveAs(MapedPathoutputout);

        //        }

        //        DirectoryInfo dir = new DirectoryInfo(path);
        //        FileInfo[] filess = dir.GetFiles();
        //        bool filefound = false;
        //        string filename = "Abhy_Baseline_Data.xlsx";
        //        foreach (var file in filess)
        //        {
        //            if (String.Compare(file.Name, filename) == 0)
        //            {
        //                filefound = true;
        //            }
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //    }
        //    //finally
        //    //{

        //    //if (filefound)
        //    //{
        //    //    Response.ContentType = "";
        //    //    Response.AppendHeader("Content-Disposition", "attachment; filename=" + filename);
        //    //    Response.WriteFile(path + filename);
        //    //    Response.End();
        //    //    //msg = "Success";
        //    //}
        //    //}
        //    return Json(msg, JsonRequestBehavior.AllowGet);
        //}



        public ActionResult Create_Excel(string state1, string district1, string block01, string gp1, string year1)
        {
            string path = "";
            string msg = "";

            string MapedPathoutputout = "";
            try
            {
                DataSet FinalData = new DataSet();
                List<abhy_baseline_gpdata> ddetails = new List<abhy_baseline_gpdata>();
                List<abhy_baseline_gp_remarks> remarks_details = new List<abhy_baseline_gp_remarks>();
                List<abhy_baseline_gp_livestock> livestock_details = new List<abhy_baseline_gp_livestock>();
                List<abhy_baseline_gp_surfacewater> surfacewater_details = new List<abhy_baseline_gp_surfacewater>();
                List<abhy_baseline_gp_groundwater> groundwater_details = new List<abhy_baseline_gp_groundwater>();
                List<abhy_baseline_gp_existingwells> existingwells_details = new List<abhy_baseline_gp_existingwells>();
                List<abhy_baseline_gp_watereff> watereff_details = new List<abhy_baseline_gp_watereff>();
                List<abhy_baseline_gp_upload> upload_details = new List<abhy_baseline_gp_upload>();
                List<sarpanchdetails> sarpanch = new List<sarpanchdetails>();
                List<Allgpdata> baseline_data = new List<Allgpdata>();

                var State = state1;
                var Dist = district1;
                var Block = block01;
                var Gram = gp1;
                var Year = year1;


                if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null)
                {
                    var BaseLineData = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year).GroupBy(o => o.gpname).ToList();//total list

                    if (BaseLineData.Count != 0)
                    {
                        foreach (var items in BaseLineData.AsEnumerable())
                        {
                            var item = items.First();
                            var data = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == State && x.year == Year && x.gpname == item.gpname).OrderByDescending(x => x.month_order_by).Take(1);

                            ddetails.AddRange(data);
                            var temp = data.ToList();
                            var id = Convert.ToInt32(temp[0].id);
                            var ID = ABE.obj_abhy_baseline_gpdata.Where(x => x.id == id).FirstOrDefault();
                            var livestock = ABE.obj_abhy_baseline_gp_livestock.Where(x => x.id == id).ToList();
                            livestock_details.AddRange(livestock);
                            var remarks = ABE.obj_abhy_baseline_gpdata_remarks.Where(x => x.id == id).ToList();
                            remarks_details.AddRange(remarks);
                            var surfacewater = ABE.obj_abhy_baseline_gp_surfacewater.Where(x => x.id == id).ToList();
                            surfacewater_details.AddRange(surfacewater);
                            var groundwater = ABE.obj_abhy_baseline_gp_groundwater.Where(x => x.id == id).ToList();
                            groundwater_details.AddRange(groundwater);
                            var existingwells = ABE.obj_abhy_baseline_gp_existingwells.Where(x => x.id == id).ToList();
                            existingwells_details.AddRange(existingwells);
                            var watereff = ABE.obj_abhy_baseline_gp_watereff.Where(x => x.id == id).ToList();
                            watereff_details.AddRange(watereff);
                            var upload = ABE.obj_abhy_baseline_gp_upload.Where(x => x.id == id).ToList();
                            upload_details.AddRange(upload);
                            var GetSpMonth = ABE.obj_sarpanchdetails.Where(x => x.state_name == State && x.year == Year && x.gpname == item.gpname).OrderByDescending(x => x.month_order_by).Take(1);
                            var SpList = GetSpMonth.ToList();
                            if (SpList.Count != 0)
                            {
                                string MonthName = Convert.ToString(SpList[0].month);
                                var sarpanch_data = ABE.obj_sarpanchdetails.Where(x => x.state_name == State && x.year == Year && x.gpname == item.gpname && x.month == MonthName).ToList();
                                sarpanch.AddRange(sarpanch_data);
                            }
                        }
                    }
                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Year != "0" && Year != "" && Year != null)
                {
                    var BaseLineData = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.year == Year).GroupBy(o => o.gpname).ToList();//total list

                    if (BaseLineData.Count != 0)
                    {
                        foreach (var items in BaseLineData.AsEnumerable())
                        {
                            var item = items.First();
                            var data = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == State && x.year == Year && x.gpname == item.gpname).OrderByDescending(x => x.month_order_by).Take(1);

                            ddetails.AddRange(data);
                            var temp = data.ToList();
                            var id = Convert.ToInt32(temp[0].id);
                            var ID = ABE.obj_abhy_baseline_gpdata.Where(x => x.id == id).FirstOrDefault();
                            var livestock = ABE.obj_abhy_baseline_gp_livestock.Where(x => x.id == id).ToList();
                            livestock_details.AddRange(livestock);
                            var remarks = ABE.obj_abhy_baseline_gpdata_remarks.Where(x => x.id == id).ToList();
                            remarks_details.AddRange(remarks);
                            var surfacewater = ABE.obj_abhy_baseline_gp_surfacewater.Where(x => x.id == id).ToList();
                            surfacewater_details.AddRange(surfacewater);
                            var groundwater = ABE.obj_abhy_baseline_gp_groundwater.Where(x => x.id == id).ToList();
                            groundwater_details.AddRange(groundwater);
                            var existingwells = ABE.obj_abhy_baseline_gp_existingwells.Where(x => x.id == id).ToList();
                            existingwells_details.AddRange(existingwells);
                            var watereff = ABE.obj_abhy_baseline_gp_watereff.Where(x => x.id == id).ToList();
                            watereff_details.AddRange(watereff);
                            var upload = ABE.obj_abhy_baseline_gp_upload.Where(x => x.id == id).ToList();
                            upload_details.AddRange(upload);
                            var GetSpMonth = ABE.obj_sarpanchdetails.Where(x => x.state_name == State && x.year == Year && x.gpname == item.gpname).OrderByDescending(x => x.month_order_by).Take(1);
                            var SpList = GetSpMonth.ToList();
                            if (SpList.Count != 0)
                            {
                                string MonthName = Convert.ToString(SpList[0].month);
                                var sarpanch_data = ABE.obj_sarpanchdetails.Where(x => x.state_name == State && x.year == Year && x.gpname == item.gpname && x.month == MonthName).ToList();
                                sarpanch.AddRange(sarpanch_data);
                            }
                        }
                    }
                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null)
                {
                    var BaseLineData = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == State && x.district_name == Dist && x.year == Year).GroupBy(o => o.gpname).ToList();//total list

                    if (BaseLineData.Count != 0)
                    {
                        foreach (var items in BaseLineData.AsEnumerable())
                        {
                            var item = items.First();
                            var data = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == State && x.year == Year && x.gpname == item.gpname).OrderByDescending(x => x.month_order_by).Take(1);

                            ddetails.AddRange(data);
                            var temp = data.ToList();
                            var id = Convert.ToInt32(temp[0].id);
                            var ID = ABE.obj_abhy_baseline_gpdata.Where(x => x.id == id).FirstOrDefault();
                            var livestock = ABE.obj_abhy_baseline_gp_livestock.Where(x => x.id == id).ToList();
                            livestock_details.AddRange(livestock);
                            var remarks = ABE.obj_abhy_baseline_gpdata_remarks.Where(x => x.id == id).ToList();
                            remarks_details.AddRange(remarks);
                            var surfacewater = ABE.obj_abhy_baseline_gp_surfacewater.Where(x => x.id == id).ToList();
                            surfacewater_details.AddRange(surfacewater);
                            var groundwater = ABE.obj_abhy_baseline_gp_groundwater.Where(x => x.id == id).ToList();
                            groundwater_details.AddRange(groundwater);
                            var existingwells = ABE.obj_abhy_baseline_gp_existingwells.Where(x => x.id == id).ToList();
                            existingwells_details.AddRange(existingwells);
                            var watereff = ABE.obj_abhy_baseline_gp_watereff.Where(x => x.id == id).ToList();
                            watereff_details.AddRange(watereff);
                            var upload = ABE.obj_abhy_baseline_gp_upload.Where(x => x.id == id).ToList();
                            upload_details.AddRange(upload);
                            var GetSpMonth = ABE.obj_sarpanchdetails.Where(x => x.state_name == State && x.year == Year && x.gpname == item.gpname).OrderByDescending(x => x.month_order_by).Take(1);
                            var SpList = GetSpMonth.ToList();
                            if (SpList.Count != 0)
                            {
                                string MonthName = Convert.ToString(SpList[0].month);
                                var sarpanch_data = ABE.obj_sarpanchdetails.Where(x => x.state_name == State && x.year == Year && x.gpname == item.gpname && x.month == MonthName).ToList();
                                sarpanch.AddRange(sarpanch_data);
                            }
                        }
                    }
                }
                else if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null)
                {
                    var BaseLineData = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == State && x.year == Year).GroupBy(o => o.gpname).ToList();//total list

                    if (BaseLineData.Count != 0)
                    {
                        foreach (var items in BaseLineData.AsEnumerable())
                        {
                            var item = items.First();
                            var data = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == State && x.year == Year && x.gpname == item.gpname).OrderByDescending(x => x.month_order_by).Take(1);

                            ddetails.AddRange(data);
                            var temp = data.ToList();
                            var id = Convert.ToInt32(temp[0].id);
                            var ID = ABE.obj_abhy_baseline_gpdata.Where(x => x.id == id).FirstOrDefault();
                            var livestock = ABE.obj_abhy_baseline_gp_livestock.Where(x => x.id == id).ToList();
                            livestock_details.AddRange(livestock);
                            var remarks = ABE.obj_abhy_baseline_gpdata_remarks.Where(x => x.id == id).ToList();
                            remarks_details.AddRange(remarks);
                            var surfacewater = ABE.obj_abhy_baseline_gp_surfacewater.Where(x => x.id == id).ToList();
                            surfacewater_details.AddRange(surfacewater);
                            var groundwater = ABE.obj_abhy_baseline_gp_groundwater.Where(x => x.id == id).ToList();
                            groundwater_details.AddRange(groundwater);
                            var existingwells = ABE.obj_abhy_baseline_gp_existingwells.Where(x => x.id == id).ToList();
                            existingwells_details.AddRange(existingwells);
                            var watereff = ABE.obj_abhy_baseline_gp_watereff.Where(x => x.id == id).ToList();
                            watereff_details.AddRange(watereff);
                            var upload = ABE.obj_abhy_baseline_gp_upload.Where(x => x.id == id).ToList();
                            upload_details.AddRange(upload);
                            var GetSpMonth = ABE.obj_sarpanchdetails.Where(x => x.state_name == State && x.year == Year && x.gpname == item.gpname).OrderByDescending(x => x.month_order_by).Take(1);
                            var SpList = GetSpMonth.ToList();
                            if (SpList.Count != 0)
                            {
                                string MonthName = Convert.ToString(SpList[0].month);
                                var sarpanch_data = ABE.obj_sarpanchdetails.Where(x => x.state_name == State && x.year == Year && x.gpname == item.gpname && x.month == MonthName).ToList();
                                sarpanch.AddRange(sarpanch_data);
                            }
                        }
                    }

                }


                if (ddetails.Count > 0)
                {
                    DataTable dt = ListToDataTable(ddetails, "BaseLine");
                    FinalData.Tables.Add(dt);
                }
                if (livestock_details.Count > 0)
                {
                    DataTable dt = ListToDataTable(livestock_details, "BaseLine_Livestock");
                    FinalData.Tables.Add(dt);
                }
                if (surfacewater_details.Count > 0)
                {
                    DataTable dt = ListToDataTable(surfacewater_details, "BaseLine_Surface_Water");
                    FinalData.Tables.Add(dt);
                }
                if (groundwater_details.Count > 0)
                {
                    DataTable dt = ListToDataTable(groundwater_details, "BaseLine_Ground_Water");
                    FinalData.Tables.Add(dt);
                }
                if (existingwells_details.Count > 0)
                {
                    DataTable dt = ListToDataTable(existingwells_details, "BaseLine_Existing_Wells");
                    FinalData.Tables.Add(dt);
                }
                if (watereff_details.Count > 0)
                {
                    DataTable dt = ListToDataTable(watereff_details, "BaseLine_Watereff_Details");
                    FinalData.Tables.Add(dt);
                }
                if (upload_details.Count > 0)
                {
                    DataTable dt = ListToDataTable(upload_details, "BaseLine_Upload_Details");
                    FinalData.Tables.Add(dt);
                }
                if (remarks_details.Count > 0)
                {
                    DataTable dt = ListToDataTable(remarks_details, "BaseLine_Remarks");
                    FinalData.Tables.Add(dt);
                }
                if (sarpanch.Count > 0)
                {
                    DataTable dt = ListToDataTable(sarpanch, "Key Personal of GP");
                    FinalData.Tables.Add(dt);
                }

                path = Server.MapPath("/GPlevel/Template_temp/");
                MapedPathoutputout = path + "Abhy_Baseline_Data.xlsx";
                string rootPath = Server.MapPath("/Template/Data.xlsx");
                //string rootPath = Server.MapPath(@"/Template/Data.xlsx");

                // Ensure each time we create a new workbook from the template
                using (XLWorkbook workbook = new XLWorkbook(rootPath))
                {
                    for (int s = 0; s < FinalData.Tables.Count; s++)
                    {
                        var worksheet = workbook.Worksheet(s + 1);
                        worksheet.Name = FinalData.Tables[s].TableName.ToString();
                        for (int c = 0; c < FinalData.Tables[s].Columns.Count; c++)
                        {
                            worksheet.Cell(1, c + 1).Value = FinalData.Tables[s].Columns[c].ColumnName;
                            for (int r = 0; r < FinalData.Tables[s].Rows.Count; r++)
                            {
                                worksheet.Cell(r + 2, c + 1).Value = FinalData.Tables[s].Rows[r][c].ToString();
                            }
                            worksheet.Column(c + 1).AdjustToContents();
                        }
                    }

                    // Ensure the directory exists and is clean
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

                    // Save the workbook
                    workbook.SaveAs(MapedPathoutputout);
                }

                msg = "/GPlevel/Template_temp/Abhy_Baseline_Data.xlsx";
            }
            catch (Exception ex)
            {
                // Handle exception
            }

            return Json(msg, JsonRequestBehavior.AllowGet);
        }




        public DataTable ListToDataTable<T>(List<T> data, string TableName)
        {
            PropertyDescriptorCollection properties = TypeDescriptor.GetProperties(typeof(T));
            DataTable dataTable = new DataTable();
            dataTable.TableName = TableName;
            for (int i = 0; i < properties.Count; i++)
            {
                PropertyDescriptor property = properties[i];
                dataTable.Columns.Add(property.Name, Nullable.GetUnderlyingType(property.PropertyType) ?? property.PropertyType);
            }

            object[] values = new object[properties.Count];
            foreach (T item in data)
            {
                for (int i = 0; i < values.Length; i++)
                {
                    values[i] = properties[i].GetValue(item);
                }

                dataTable.Rows.Add(values);
            }
            return dataTable;
        }
       
        [HttpPost]
        public ActionResult deletesocialmanagement_list(string socialmanagement_list_string)
        {
            JavaScriptSerializer js = new JavaScriptSerializer();
            var result = js.Deserialize<socialmonitoring>(socialmanagement_list_string);
            if (result.id != 0)
            {
                var ARID = Convert.ToInt32(result.id);
                var Data1 = AJE.obj_socialmonitoring.Where(x => x.id == ARID).FirstOrDefault();
                if (Data1 != null)
                {
                    AJE.Entry(Data1).State = EntityState.Deleted;
                    AJE.SaveChanges();
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

        public ActionResult baselinedata_Check_Approved_or_Not(string Data)
        {
            string ddetails = "false";
            JavaScriptSerializer js = new JavaScriptSerializer();
            var result = js.Deserialize<abhy_baseline_gpdata>(Data);
            var State = result.state_name;
            var Dist = result.district_name;
            var Block = result.block_name;
            var Gram = result.gpname;
            var Year = "2023-24";
            //var Year = result.year;
            //var Month = result.month;

            if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != null)
            {
                ddetails = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year).OrderByDescending(x => x.month_order_by).Select(x => x.approved).FirstOrDefault();//total list

            }
            return Json(ddetails, JsonRequestBehavior.AllowGet);
        }
        public int Get_Month_Number(string month)
        {
            int month_num = 0;
            switch (month)
            {
                case "April":
                    month_num = 1;
                    break;
                case "May":
                    month_num = 2;
                    break;
                case "June":
                    month_num = 3;
                    break;
                case "July":
                    month_num = 4;
                    break;
                case "August":
                    month_num = 5;
                    break;
                case "September":
                    month_num = 6;
                    break;
                case "October":
                    month_num = 7;
                    break;
                case "November":
                    month_num = 8;
                    break;
                case "December":
                    month_num = 9;
                    break;
                case "January":
                    month_num = 10;
                    break;
                case "February":
                    month_num = 11;
                    break;
                case "March":
                    month_num = 12;
                    break;
            }
            return month_num;
        }

        public void ViewFile(string FileName)
        {
            string Reg_Date = FileName;
            string[] Reg_Date11 = Reg_Date.Split('/');
            var one = Reg_Date11[1];
            var two = Reg_Date11[2];
            var three = Reg_Date11[3];
            var four = Reg_Date11[4];
            var five = Reg_Date11[5];
            var six = Reg_Date11[6];
            var seven = Reg_Date11[7];

            var Fdrive = "I:";

            string path = "";
            string filename = Path.GetFileName(Reg_Date);

            if (FileName != null && FileName != "")
            {
                string Hfilepath = Fdrive + '\\' + one + '\\' + two + '\\' + three + '\\' + four + '\\' + five + '\\' + six + '\\' + seven + '\\';
                //string Hfilepath = Fdrive + FileName;

                path = @Hfilepath;

                DirectoryInfo directory = new DirectoryInfo(path);
                FileInfo[] files = directory.GetFiles();
                bool fileFound = false;
                foreach (FileInfo file in files)
                {
                    if (String.Compare(file.Name, filename) == 0)
                    {
                        fileFound = true;
                        Console.WriteLine(path);
                        break;
                    }
                }

                if (fileFound)
                {
                    Response.ContentType = "image/jpeg";
                    Response.AppendHeader("Content-Disposition", "attachment; filename=" + Path.GetFileName(filename));
                    Response.WriteFile(path + filename);
                    Response.Flush();
                    Response.End();
                }
                else
                {
                    TempData["Message"] = "File not found!";

                }

            }
            else
            {
                TempData["Message"] = "File not found!";

            }


        }


    }
}