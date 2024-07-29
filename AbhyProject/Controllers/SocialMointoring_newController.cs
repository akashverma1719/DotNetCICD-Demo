using AbhyProject.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;
using ClosedXML.Excel;
using System.ComponentModel;
using Newtonsoft.Json;
using System.Text;
using AbhyProject.Utility;
using System.Globalization;
using AbhyProject.Classes;

namespace AbhyProject.Controllers
{
    public class SocialMointoring_newController : Controller
    {
        AbhyEntity ABE = new AbhyEntity();
        AtaljalEntity AJE = new AtaljalEntity();
        // GET: SocialMointoring
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Social_management_report()
        {
            return View();
        }
        public ActionResult Social_management_report_new()
        {
            return View();
        }
        public ActionResult Social_management_new()
        {
            
            ViewBag.GPLIst = ABE.obj_abhy_gpdata_new.ToList();
            return View();
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

        [HttpPost]
        public ActionResult abhy_socialmgt_gramdb(string Data)//4190 
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<sarpanchdetails>(Data);
                    List<sarpanchdetails> ddetails_new = new List<sarpanchdetails>();
                    List<abhy_baseline_gpdata> ddetails = new List<abhy_baseline_gpdata>();

                    var State = result.state_name;
                    var Dist = result.district_name;
                    var Block = result.block_name;
                    var Gram = result.gpname;
                    var Year = result.year;

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null)
                    {
                        ddetails = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year && x.approved == "true").ToList();
                    }

                    if (ddetails.Count != 0)
                    {
                        if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null)
                        {
                            ddetails_new = ABE.obj_sarpanchdetails.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year).ToList();
                        }
                    }
                    else
                    {
                        return Json("", JsonRequestBehavior.AllowGet);
                    }


                    return Json(ddetails_new, JsonRequestBehavior.AllowGet);
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


        public ActionResult abhy_socialmgt_gramdb_getting()
        {

            if (Session["UserId"] != null)
            {
                try
                {

                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();
                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    var Year = Session["year"].ToString();

                    List<sarpanchdetails> ddetails_new = new List<sarpanchdetails>();
                    List<abhy_baseline_gpdata> ddetails = new List<abhy_baseline_gpdata>();

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null)
                    {
                        ddetails = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year && x.d_sent == true).ToList();
                    }

                    if (ddetails.Count != 0)
                    {
                        if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null)
                        {
                            ddetails_new = ABE.obj_sarpanchdetails.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year).ToList();
                        }
                    }
                    else
                    {
                        return Json("", JsonRequestBehavior.AllowGet);
                    }


                    return Json(ddetails_new, JsonRequestBehavior.AllowGet);
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
        public ActionResult Delete_abhy_socialmgt_gramdb(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_socialmgt_gramdb>(Data);

                    if (result.id != 0)
                    {
                        var TKID = Convert.ToInt32(result.id);
                        var Data1 = ABE.obj_abhy_socialmgt_gramdb.Where(x => x.id == TKID).SingleOrDefault();
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
        public ActionResult Delete_data(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<social_socialmgt_grm>(Data);

                    if (result.id != 0)
                    {
                        var TKID = Convert.ToInt32(result.id);
                        var Data1 = ABE.obj_social_socialmgt_grm.Where(x => x.id == TKID).SingleOrDefault();
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


        //completed

        [HttpPost]
        public ActionResult Save_abhy_socialmgt_gramdb(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<sarpanchdetails>(Data);

                    var Details = new sarpanchdetails();
                    var State = "";
                    var Dist = "";
                    var Gram = "";
                    var Block = "";
                    if (Session["gstate"] != null)
                    {
                        Details.state_name = Session["gstate"].ToString();
                    }
                    else
                    {
                        Details.state_name = State;
                    }
                    if (Session["gdist"] != null)
                    {
                        Details.district_name = Session["gdist"].ToString();
                    }
                    else
                    {
                        Details.district_name = Dist;
                    }
                    if (Session["ggram"] != null)
                    {
                        Details.gpname = Session["ggram"].ToString();
                    }
                    else
                    {
                        Details.gpname = Gram;
                    }
                    if (Session["gblock"] != null)
                    {
                        Details.block_name = Session["gblock"].ToString();
                    }
                    else
                    {
                        Details.block_name = Block;
                    }
                    if (result.contact_details != "" && result.contact_details != null)
                    {
                        Details.contact_details = result.contact_details;
                    }
                    else
                    {
                        return Json("Please Enter Contact Number");
                    }


                    if (result.gender != "0" && result.gender != "" && result.gender != null)
                    {
                        Details.gender = result.gender;
                    }
                    else
                    {
                        return Json("Please Select  Gender");
                    }
                    if (result.name != "" && result.name != null)
                    {
                        Details.name = result.name;
                    }
                    else
                    {
                        return Json("Please Enter  Name");
                    }

                    Details.designation_name = result.designation_name;

                    Details.id = Convert.ToInt32(Session["UserId"]);
                    ABE.obj_sarpanchdetails.Add(Details);
                    ABE.SaveChanges();
                    return Json("Successfully Saved", JsonRequestBehavior.AllowGet);


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



        //Water User Association/ Village Water and Sanitation Committee (VWSC)
        [HttpPost]
        public ActionResult VWSC_Info(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_socialmgt_sanitation_committee>(Data);
                    var data = ABE.obj_abhy_socialmgt_sanitation_committee.ToList();
                    List<abhy_socialmgt_sanitation_committee> ddetails = new List<abhy_socialmgt_sanitation_committee>();
                    var State = result.state_name;
                    var Dist = result.district_name;
                    var Block = result.block_name;
                    var Gram = result.gpname;
                    var year = result.year;





                    //List<abhy_socialmgt_sanitation_committee> ddetails = new List<abhy_socialmgt_sanitation_committee>();
                    //var userid = Convert.ToInt32(Session["UserId"]);
                    //var State = Session["gstate"].ToString();
                    //var Dist = Session["gdist"].ToString();
                    //var Block = Session["gblock"].ToString();
                    //var Gram = Session["ggram"].ToString();
                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_sanitation_committee.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == year).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_sanitation_committee.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_sanitation_committee.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_sanitation_committee.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                    }
                    else if (State != "" && State != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_sanitation_committee.Where(x => x.state_name == State).ToList();//total list

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

            }
        }

        public ActionResult VWSC_Info_getting()
        {

            if (Session["UserId"] != null)
            {
                try
                {

                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();
                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    var year = Session["year"].ToString();
                    

                    List<social_socialmgt_other_local_institues> ddetails = new List<social_socialmgt_other_local_institues>();

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = ABE.obj_social_socialmgt_other_local_institues.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == year).ToList();//total list

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

            }

        }






        [HttpPost]
        public ActionResult Delete_VWSC_Info(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_socialmgt_sanitation_committee>(Data);

                    if (result.id != 0)
                    {
                        var TKID = Convert.ToInt32(result.id);
                        var Data1 = ABE.obj_abhy_socialmgt_sanitation_committee.Where(x => x.id == TKID).SingleOrDefault();
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
        public ActionResult Save_VWSC_Info(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_socialmgt_sanitation_committee>(Data);

                    var Details = new abhy_socialmgt_sanitation_committee();
                    var State = "";
                    var Dist = "";
                    var Gram = "";
                    var Block = "";
                    if (Session["gstate"] != null)
                    {
                        Details.state_name = Session["gstate"].ToString();
                    }
                    else
                    {
                        Details.state_name = State;
                    }
                    if (Session["gdist"] != null)
                    {
                        Details.district_name = Session["gdist"].ToString();
                    }
                    else
                    {
                        Details.district_name = Dist;
                    }
                    if (Session["ggram"] != null)
                    {
                        Details.gpname = Session["ggram"].ToString();
                    }
                    else
                    {
                        Details.gpname = Gram;
                    }
                    if (Session["gblock"] != null)
                    {
                        Details.block_name = Session["gblock"].ToString();
                    }
                    else
                    {
                        Details.block_name = Block;
                    }
                    if (result.contact_number != "" && result.contact_number != null)
                    {
                        Details.contact_number = result.contact_number;
                    }
                    else
                    {
                        return Json("Please Enter Contact Number");
                    }


                    if (result.designation != "0" && result.designation != "" && result.designation != null)
                    {
                        Details.designation = result.designation;
                    }
                    else
                    {
                        return Json("Please Select Designation");
                    }

                    if (result.gender != "0" && result.gender != null)
                    {
                        Details.gender = result.gender;
                    }
                    else
                    {
                        return Json("Please Select Gender");
                    }


                    if (result.member_name != "" && result.member_name != null)
                    {
                        Details.member_name = result.member_name;
                    }
                    else
                    {
                        return Json("Please Enter Member Name");
                    }

                    if (result.reserved_unreserved != "0" && result.reserved_unreserved != "" && result.reserved_unreserved != null)
                    {
                        Details.reserved_unreserved = result.reserved_unreserved;
                    }
                    else
                    {
                        return Json("Please Select Reserved_Unreserved");
                    }

                    if (result.category_fa != "0" && result.category_fa != "" && result.category_fa != null)
                    {
                        Details.category_fa = result.category_fa;
                    }
                    else
                    {
                        return Json("Please Select Category");
                    }
                    Details.marginal_fa = result.marginal_fa;
                    Details.category_value = result.category_value;
                    Details.userid = Convert.ToInt32(Session["UserId"]);
                    ABE.obj_abhy_socialmgt_sanitation_committee.Add(Details);
                    ABE.SaveChanges();
                    return Json("Successfully Saved", JsonRequestBehavior.AllowGet);


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

        //Support Agency/ DIP

        [HttpPost]
        public ActionResult Support_Agency_DIP_Info(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<social_socialmgt_support_agency>(Data);

                    List<social_socialmgt_support_agency> ddetails = new List<social_socialmgt_support_agency>();
                    var State = result.state_name;
                    var Dist = result.district_name;
                    var Block = result.block_name;
                    var Gram = result.gpname;
                    var year = result.year;
                    var month = result.month;

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = ABE.obj_social_socialmgt_support_agency.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == year).OrderByDescending(o => o.id).ToList();//total list

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

            }
        }

        public ActionResult Support_Agency_DIP_Info_getting()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                   
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    var year = Session["year"].ToString();
                    

                    List<social_socialmgt_support_agency> ddetails = new List<social_socialmgt_support_agency>();


                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = ABE.obj_social_socialmgt_support_agency.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year==year).OrderByDescending(o => o.id).ToList();//total list

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

            }
        }

        [HttpPost]
        public ActionResult Delete_Support_Agency_DIP_Info(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<social_socialmgt_support_agency>(Data);

                    if (result.id != 0)
                    {
                        var TKID = Convert.ToInt32(result.id);
                        var Data1 = ABE.obj_social_socialmgt_support_agency.Where(x => x.id == TKID).SingleOrDefault();
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
        public ActionResult Save_Support_Agency_DIP_Info(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<social_socialmgt_support_agency>(Data);

                    var Details = new social_socialmgt_support_agency();
                    var State = "";
                    var Dist = "";
                    var Gram = "";
                    var Block = "";
                    var Email = Session["Email"].ToString();
                    var Month = result.month;
                    int month_num = Get_Month_Number(Month);
                    Details.month = result.month;
                    Details.month_order_by = month_num;
                    Details.entry_by = Email;
                    if (Session["gstate"] != null)
                    {
                        Details.state_name = Session["gstate"].ToString();
                    }
                    else
                    {
                        Details.state_name = State;
                    }
                    if (Session["gdist"] != null)
                    {
                        Details.district_name = Session["gdist"].ToString();
                    }
                    else
                    {
                        Details.district_name = Dist;
                    }
                    if (Session["ggram"] != null)
                    {
                        Details.gpname = Session["ggram"].ToString();
                    }
                    else
                    {
                        Details.gpname = Gram;
                    }
                    if (Session["gblock"] != null)
                    {
                        Details.block_name = Session["gblock"].ToString();
                    }
                    else
                    {
                        Details.block_name = Block;
                    }
                    if (result.contact_number != "" && result.contact_number != null)
                    {
                        Details.contact_number = result.contact_number;
                    }
                    else
                    {
                        return Json("Please Enter Contact Number");
                    }

                    if (result.ddldesignation != "0" && result.ddldesignation != "" && result.ddldesignation != null)
                    {
                        Details.ddldesignation = result.ddldesignation;
                    }
                    else
                    {
                        return Json("Please Select Designation");
                    }

                    if (result.gender != "0" && result.gender != "" && result.gender != null)
                    {
                        Details.gender = result.gender;
                    }
                    else
                    {
                        return Json("Please Select Gender");
                    }

                    if (result.member_name != "" && result.member_name != null)
                    {
                        Details.member_name = result.member_name;
                    }
                    else
                    {
                        return Json("Please Enter Member Name");
                    }
                    if (result.date_of_dip != "" && result.date_of_dip != null)
                    {
                        Details.date_of_dip = result.date_of_dip;
                    }
                    else
                    {
                        return Json("Please Enter Date");
                    }

                    if (result.year != "0" && result.year != null)
                    {
                        Details.year = result.year;
                    }
                    else
                    {
                        return Json("Please Select Year");
                    }
                    Details.designation = result.designation;
                    Details.ca_date_of_dip = result.ca_date_of_dip;
                    Details.reserved_unreserved = result.reserved_unreserved;
                    Details.userid = Convert.ToInt32(Session["UserId"]);
                    ABE.obj_social_socialmgt_support_agency.Add(Details);
                    ABE.SaveChanges();
                    return Json("Successfully Saved", JsonRequestBehavior.AllowGet);


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

        //Others local instituions or citizen leaders/influencers

        [HttpPost]
        public ActionResult Others_local_instituions_citizen_leaders_Info(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {

                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<social_socialmgt_other_local_institues>(Data);
                    List<social_socialmgt_other_local_institues> ddetails = new List<social_socialmgt_other_local_institues>();
                    var State = result.state_name;
                    var Dist = result.district_name;
                    var Block = result.block_name;
                    var Gram = result.gpname;
                    var year = result.year;
                    var month = result.month;


                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = ABE.obj_social_socialmgt_other_local_institues.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == year).OrderByDescending(o => o.id).ToList();//total list

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

            }
        }

        [HttpPost]
        public ActionResult Delete_Others_local_instituions_citizen_leaders_Info(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<social_socialmgt_other_local_institues>(Data);

                    if (result.id != 0)
                    {
                        var TKID = Convert.ToInt32(result.id);
                        var Data1 = ABE.obj_social_socialmgt_other_local_institues.Where(x => x.id == TKID).SingleOrDefault();
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
        public JsonResult Submit_To_DPMU(string state, string district, string block, string gram, string year, string month)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var State = state;
                    var Dist = district;
                    var Block = block;
                    var Gram = gram;
                    var Year = year;



                    var ddetails1 = ABE.obj_social_socialmgt_other_local_institues.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year).ToList();
                    var ddetails2 = ABE.obj_social_socialmgt_support_agency.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year).ToList();
                    var ddetails3 = ABE.obj_social_socialmgt_grm.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year).ToList();
                    var ddetails4 = ABE.obj_social_socialmgt_farmers.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year).ToList();
                    var ddetails5 = ABE.obj_social_socialmgt_remarks.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year).ToList();

                    if (ddetails1.Count != 0)
                    {
                        foreach (var item in ddetails1)
                        {
                            if (item.approve != "" || item.approve != null || item.approve != "Reject")
                            {
                                item.approve = "District";
                                var Month = month;
                                int month_num = Get_Month_Number(Month);
                                item.month = month;
                                item.month_order_by = month_num;
                                ABE.Entry(item).State = EntityState.Modified;
                                ABE.SaveChanges();
                            }
                        }

                    }
                    if (ddetails2.Count != 0)
                    {
                        foreach (var item in ddetails2)
                        {
                            if (item.approve != "" || item.approve != null || item.approve != "Reject")
                            {
                                item.approve = "District";
                                var Month = month;
                                int month_num = Get_Month_Number(Month);
                                item.month = month;
                                item.month_order_by = month_num;
                                ABE.Entry(item).State = EntityState.Modified;
                                ABE.SaveChanges();
                            }
                        }
                    }
                    if (ddetails3.Count != 0)
                    {
                        foreach (var item in ddetails3)
                        {
                            if (item.approve != "" || item.approve != null || item.approve != "Reject")
                            {
                                item.approve = "District";
                                var Month = month;
                                int month_num = Get_Month_Number(Month);
                                item.month = month;
                                item.month_order_by = month_num;
                                ABE.Entry(item).State = EntityState.Modified;
                                ABE.SaveChanges();
                            }
                        }
                    }
                    if (ddetails4.Count != 0)
                    {
                        foreach (var item in ddetails4)
                        {
                            if (item.approve != "" || item.approve != null || item.approve != "Reject")
                            {
                                item.approve = "District";
                                var Month = month;
                                int month_num = Get_Month_Number(Month);
                                item.month = month;
                                item.month_order_by = month_num;
                                ABE.Entry(item).State = EntityState.Modified;
                                ABE.SaveChanges();
                            }
                        }
                    }
                    if (ddetails5.Count == 0)
                    {
                        var Details = new social_socialmgt_remark();
                        Details.state_name = state;
                        Details.district_name = district;
                        Details.block_name = block;
                        Details.gpname = gram;
                        Details.year = year;
                        Details.month = month;
                        Details.approve = "District";
                        Details.remarks = "";
                        ABE.obj_social_socialmgt_remarks.Add(Details);
                        ABE.SaveChanges();

                    }
                    if (ddetails5.Count != 0)
                    {
                        foreach (var item in ddetails5)
                        {
                            if (item.approve != "" || item.approve != null || item.approve != "Reject")
                            {
                                item.approve = "District";
                                item.remarks = "";
                                ABE.Entry(item).State = EntityState.Modified;
                                ABE.SaveChanges();
                            }
                        }

                    }
                    if (ddetails1.Count == 0 || ddetails2.Count == 0 || ddetails3.Count == 0 || ddetails4.Count == 0)
                    {
                        return Json("Already submit Data");
                    }
                    else
                    {
                        return Json("Successfully submit to DPMU");
                    }




                }
                catch (Exception Ex)
                {
                    return Json(Ex, JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }

        }

        [HttpPost]
        public JsonResult Submit_To_SPMU(string state, string district, string block, string gram, string year, string month)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var State = state;
                    var Dist = district;
                    var Block = block;
                    var Gram = gram;
                    var Year = year;
                    var Month = month;



                    var ddetails1 = ABE.obj_social_socialmgt_other_local_institues.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year && x.approve == "District" || x.approve == "Sreject").ToList();
                    var ddetails2 = ABE.obj_social_socialmgt_support_agency.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year && x.approve == "District" || x.approve == "Sreject").ToList();
                    var ddetails3 = ABE.obj_social_socialmgt_grm.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year && x.approve == "District" || x.approve == "Sreject").ToList();
                    var ddetails4 = ABE.obj_social_socialmgt_farmers.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year && x.approve == "District" || x.approve == "Sreject").ToList();
                    var ddetails5 = ABE.obj_social_socialmgt_remarks.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year && x.approve == "District" || x.approve == "Sreject").ToList();
                    if (ddetails1.Count != 0)
                    {
                        foreach (var item in ddetails1)
                        {
                            if (item.approve == "District" || item.approve == "Sreject")
                            {
                                item.approve = "Approve";
                                ABE.Entry(item).State = EntityState.Modified;
                                ABE.SaveChanges();
                            }
                        }

                    }
                    if (ddetails2.Count != 0)
                    {
                        foreach (var item in ddetails2)
                        {
                            if (item.approve == "District" || item.approve == "Sreject")
                            {
                                item.approve = "Approve";
                                ABE.Entry(item).State = EntityState.Modified;
                                ABE.SaveChanges();
                            }
                        }
                    }
                    if (ddetails3.Count != 0)
                    {
                        foreach (var item in ddetails3)
                        {
                            if (item.approve == "District" || item.approve == "Sreject")
                            {
                                item.approve = "Approve";
                                ABE.Entry(item).State = EntityState.Modified;
                                ABE.SaveChanges();
                            }
                        }
                    }
                    if (ddetails4.Count != 0)
                    {
                        foreach (var item in ddetails4)
                        {
                            if (item.approve == "District" || item.approve == "Sreject")
                            {
                                item.approve = "Approve";
                                ABE.Entry(item).State = EntityState.Modified;
                                ABE.SaveChanges();
                            }
                        }
                    }
                    if (ddetails5.Count != 0)
                    {
                        foreach (var item in ddetails5)
                        {
                            if (item.approve == "District" || item.approve == "Sreject")
                            {
                                item.approve = "Approve";
                                item.remarks = "";
                                ABE.Entry(item).State = EntityState.Modified;
                                ABE.SaveChanges();
                            }
                        }
                    }
                    if (ddetails1.Count == 0 || ddetails2.Count == 0 || ddetails3.Count == 0 || ddetails4.Count == 0)
                    {
                        return Json("Already Approved");
                    }
                    else
                    {
                        return Json("Successfully Approved");
                    }





                }
                catch (Exception Ex)
                {
                    return Json(Ex, JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }

        }

        [HttpPost]
        public JsonResult Reject_To_DPMU(string state, string district, string block, string gram, string year, string month, string remark)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var State = state;
                    var Dist = district;
                    var Block = block;
                    var Gram = gram;
                    var Year = year;



                    var ddetails1 = ABE.obj_social_socialmgt_other_local_institues.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year  && x.approve == "District").ToList();
                    var ddetails2 = ABE.obj_social_socialmgt_support_agency.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year  && x.approve == "District").ToList();
                    var ddetails3 = ABE.obj_social_socialmgt_grm.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year  && x.approve == "District").ToList();
                    var ddetails4 = ABE.obj_social_socialmgt_farmers.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year  && x.approve == "District").ToList();
                    var ddetails5 = ABE.obj_social_socialmgt_remarks.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year  && x.approve == "District").ToList();

                    if (ddetails1.Count != 0)
                    {
                        foreach (var item in ddetails1)
                        {
                            if (item.approve == "District" )
                            {
                                item.approve = "Reject";
                                ABE.Entry(item).State = EntityState.Modified;
                                ABE.SaveChanges();
                            }
                        }

                    }
                    if (ddetails2.Count != 0)
                    {
                        foreach (var item in ddetails2)
                        {
                            if (item.approve == "District")
                            {
                                item.approve = "Reject";
                                ABE.Entry(item).State = EntityState.Modified;
                                ABE.SaveChanges();
                            }
                        }
                    }
                    if (ddetails3.Count != 0)
                    {
                        foreach (var item in ddetails3)
                        {
                            if (item.approve == "District")
                            {
                                item.approve = "Reject";
                                ABE.Entry(item).State = EntityState.Modified;
                                ABE.SaveChanges();
                            }
                        }
                    }
                    if (ddetails4.Count != 0)
                    {
                        foreach (var item in ddetails4)
                        {
                            if (item.approve == "District")
                            {
                                item.approve = "Reject";
                                ABE.Entry(item).State = EntityState.Modified;
                                ABE.SaveChanges();
                            }
                        }
                    }
                    if (ddetails5.Count != 0)
                    {
                        foreach (var item in ddetails5)
                        {
                            if (item.approve == "District")
                            {
                                item.approve = "Reject";
                                item.remarks = remark;
                                ABE.Entry(item).State = EntityState.Modified;
                                ABE.SaveChanges();
                            }
                        }
                    }
                    if (ddetails1.Count == 0 || ddetails2.Count == 0 || ddetails3.Count == 0 || ddetails4.Count == 0)
                    {
                        return Json("Already Reject Data");
                    }
                    else
                    {
                        return Json("Reject Successfully");
                    }

                }
                catch (Exception Ex)
                {
                    return Json(Ex, JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }

        }

        [HttpPost]
        public JsonResult Submit_To_approve(string state, string district, string block, string gram, string year, string month)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var State = state;
                    var Dist = district;
                    var Block = block;
                    var Gram = gram;
                    var Year = year;



                    var ddetails1 = ABE.obj_social_socialmgt_other_local_institues.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year && x.approve == "State").ToList();
                    var ddetails2 = ABE.obj_social_socialmgt_support_agency.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year  && x.approve == "State").ToList();
                    var ddetails3 = ABE.obj_social_socialmgt_grm.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year  && x.approve == "State").ToList();
                    var ddetails4 = ABE.obj_social_socialmgt_farmers.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year  && x.approve == "State").ToList();
                    var ddetails5 = ABE.obj_social_socialmgt_remarks.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year  && x.approve == "State").ToList();

                    if (ddetails1.Count != 0)
                    {
                        foreach (var item in ddetails1)
                        {
                            if (item.approve == "State")
                            {
                                item.approve = "Approve";
                                ABE.Entry(item).State = EntityState.Modified;
                                ABE.SaveChanges();
                            }
                        }

                    }
                    if (ddetails2.Count != 0)
                    {
                        foreach (var item in ddetails2)
                        {
                            if (item.approve == "State")
                            {
                                item.approve = "Approve";
                                ABE.Entry(item).State = EntityState.Modified;
                                ABE.SaveChanges();
                            }
                        }
                    }
                    if (ddetails3.Count != 0)
                    {
                        foreach (var item in ddetails3)
                        {
                            if (item.approve == "State")
                            {
                                item.approve = "Approve";
                                ABE.Entry(item).State = EntityState.Modified;
                                ABE.SaveChanges();
                            }
                        }
                    }
                    if (ddetails4.Count != 0)
                    {
                        foreach (var item in ddetails4)
                        {
                            if (item.approve == "State")
                            {
                                item.approve = "Approve";
                                ABE.Entry(item).State = EntityState.Modified;
                                ABE.SaveChanges();
                            }
                        }
                    }
                    if (ddetails5.Count != 0)
                    {
                        foreach (var item in ddetails5)
                        {
                            if (item.approve == "State")
                            {
                                item.approve = "Approve";
                                item.remarks = "";
                                ABE.Entry(item).State = EntityState.Modified;
                                ABE.SaveChanges();
                            }
                        }
                    }
                    if (ddetails1.Count == 0 || ddetails2.Count == 0 || ddetails3.Count == 0 || ddetails4.Count == 0)
                    {
                        return Json("Already Approved Data");
                    }
                    else
                    {
                        return Json("Successfully Approved");
                    }




                }
                catch (Exception Ex)
                {
                    return Json(Ex, JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }

        }

        [HttpPost]
        public JsonResult Reject_To_SPMU(string state, string district, string block, string gram, string year, string month, string remark)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var State = state;
                    var Dist = district;
                    var Block = block;
                    var Gram = gram;
                    var Year = year;



                    var ddetails1 = ABE.obj_social_socialmgt_other_local_institues.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year && x.month == month && x.approve == "State").ToList();
                    var ddetails2 = ABE.obj_social_socialmgt_support_agency.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year && x.month == month && x.approve == "State").ToList();
                    var ddetails3 = ABE.obj_social_socialmgt_grm.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year && x.month == month && x.approve == "State").ToList();
                    var ddetails4 = ABE.obj_social_socialmgt_farmers.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year && x.month == month && x.approve == "State").ToList();
                    var ddetails5 = ABE.obj_social_socialmgt_remarks.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year && x.month == month && x.approve == "State").ToList();

                    if (ddetails1.Count != 0)
                    {
                        foreach (var item in ddetails1)
                        {
                            if (item.approve == "State")
                            {
                                item.approve = "Sreject";
                                ABE.Entry(item).State = EntityState.Modified;
                                ABE.SaveChanges();
                            }
                        }

                    }
                    if (ddetails2.Count != 0)
                    {
                        foreach (var item in ddetails2)
                        {
                            if (item.approve == "State")
                            {
                                item.approve = "Sreject";
                                ABE.Entry(item).State = EntityState.Modified;
                                ABE.SaveChanges();
                            }
                        }
                    }
                    if (ddetails3.Count != 0)
                    {
                        foreach (var item in ddetails3)
                        {
                            if (item.approve == "State")
                            {
                                item.approve = "Sreject";
                                ABE.Entry(item).State = EntityState.Modified;
                                ABE.SaveChanges();
                            }
                        }
                    }
                    if (ddetails4.Count != 0)
                    {
                        foreach (var item in ddetails4)
                        {
                            if (item.approve == "State")
                            {
                                item.approve = "Sreject";
                                ABE.Entry(item).State = EntityState.Modified;
                                ABE.SaveChanges();
                            }
                        }
                    }
                    if (ddetails5.Count != 0)
                    {
                        foreach (var item in ddetails5)
                        {
                            if (item.approve == "State")
                            {
                                item.approve = "Sreject";
                                item.remarks = remark;
                                ABE.Entry(item).State = EntityState.Modified;
                                ABE.SaveChanges();
                            }
                        }
                    }
                    if (ddetails1.Count == 0 || ddetails2.Count == 0 || ddetails3.Count == 0 || ddetails4.Count == 0)
                    {
                        return Json("Already Reject Data");
                    }
                    else
                    {
                        return Json("Reject Successfully");
                    }




                }
                catch (Exception Ex)
                {
                    return Json(Ex, JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }

        }

        public ActionResult Create_Excelaa(string state1, string district1, string block01, string gp1, string year1)
        {
            string path = "";
            string msg = "";
            string MapedPathoutputout = "";

            try
            {
                List<social_socialmgt_other_local_institues> ddetails = new List<social_socialmgt_other_local_institues>();
                DataSet FinalData = new DataSet();
                List<social_socialmgt_other_local_institues> gpdata_details = new List<social_socialmgt_other_local_institues>();
                List<social_socialmgt_support_agency> remarks_details = new List<social_socialmgt_support_agency>();
                List<social_socialmgt_farmers> social_farmers = new List<social_socialmgt_farmers>();
                List<social_socialmgt_village_meetings> surfacewater_details = new List<social_socialmgt_village_meetings>();
                List<social_socialmgt_grm> social_grm = new List<social_socialmgt_grm>();
                List<sarpanchdetails> sarpanch_deatls = new List<sarpanchdetails>();
                List<Allsocialevent> Social_data = new List<Allsocialevent>();

                var State = state1;
                var Dist = district1;
                var Block = block01;
                var Gram = gp1;
                var Year = year1;

                if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                {
                    ddetails = ABE.obj_social_socialmgt_other_local_institues.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year).OrderByDescending(x=>x.id).ToList();
                    remarks_details = ABE.obj_social_socialmgt_support_agency.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year).OrderByDescending(x => x.id).ToList();
                    social_farmers = ABE.obj_social_socialmgt_farmers.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year).OrderByDescending(x => x.id).ToList();
                    social_grm = ABE.obj_social_socialmgt_grm.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year).OrderByDescending(x => x.id).ToList();
                    sarpanch_deatls = ABE.obj_sarpanchdetails.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year).OrderByDescending(x => x.id).ToList();
                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Year != "0" && Year != "" && Year != null)
                {
                    ddetails = ABE.obj_social_socialmgt_other_local_institues.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.year == Year).OrderByDescending(x => x.id).ToList();//total list
                    remarks_details = ABE.obj_social_socialmgt_support_agency.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.year == Year).OrderByDescending(x => x.id).ToList();
                    social_farmers = ABE.obj_social_socialmgt_farmers.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.year == Year).OrderByDescending(x => x.id).ToList();
                    social_grm = ABE.obj_social_socialmgt_grm.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.year == Year).OrderByDescending(x => x.id).ToList();
                    sarpanch_deatls = ABE.obj_sarpanchdetails.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.year == Year).OrderByDescending(x => x.id).ToList();
                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null)
                {
                    ddetails = ABE.obj_social_socialmgt_other_local_institues.Where(x => x.state_name == State && x.district_name == Dist && x.year == Year).OrderByDescending(x => x.id).ToList();//total list
                    remarks_details = ABE.obj_social_socialmgt_support_agency.Where(x => x.state_name == State && x.district_name == Dist && x.year == Year).OrderByDescending(x => x.id).ToList();
                    social_farmers = ABE.obj_social_socialmgt_farmers.Where(x => x.state_name == State && x.district_name == Dist && x.year == Year).OrderByDescending(x => x.id).ToList();
                    social_grm = ABE.obj_social_socialmgt_grm.Where(x => x.state_name == State && x.district_name == Dist && x.year == Year).OrderByDescending(x => x.id).ToList();
                    sarpanch_deatls = ABE.obj_sarpanchdetails.Where(x => x.state_name == State && x.district_name == Dist && x.year == Year).OrderByDescending(x => x.id).ToList();
                }
                else if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null)
                {
                    ddetails = ABE.obj_social_socialmgt_other_local_institues.Where(x => x.state_name == State && x.year == Year).OrderByDescending(x => x.id).ToList();//total list
                    remarks_details = ABE.obj_social_socialmgt_support_agency.Where(x => x.state_name == State && x.year == Year).OrderByDescending(x => x.id).ToList();
                    social_farmers = ABE.obj_social_socialmgt_farmers.Where(x => x.state_name == State && x.year == Year).OrderByDescending(x => x.id).ToList();
                    social_grm = ABE.obj_social_socialmgt_grm.Where(x => x.state_name == State && x.year == Year).OrderByDescending(x => x.id).ToList();
                    sarpanch_deatls = ABE.obj_sarpanchdetails.Where(x => x.state_name == State && x.year == Year).OrderByDescending(x => x.id).ToList();
                }
                else if (State != "0" && State != "" && State != null)
                {
                    ddetails = ABE.obj_social_socialmgt_other_local_institues.Where(x => x.state_name == State).OrderByDescending(x => x.id).ToList();//total list
                    remarks_details = ABE.obj_social_socialmgt_support_agency.Where(x => x.state_name == State).OrderByDescending(x => x.id).ToList();
                    social_farmers = ABE.obj_social_socialmgt_farmers.Where(x => x.state_name == State).OrderByDescending(x => x.id).ToList();
                    social_grm = ABE.obj_social_socialmgt_grm.Where(x => x.state_name == State).OrderByDescending(x => x.id).ToList();
                    sarpanch_deatls = ABE.obj_sarpanchdetails.Where(x => x.state_name == State).OrderByDescending(x => x.id).ToList();
                }

                if (sarpanch_deatls.Count > 0)
                {
                    DataTable dt = ListToDataTable(sarpanch_deatls, "Key Persons of GP");
                    FinalData.Tables.Add(dt);
                }
                if (ddetails.Count > 0)
                {
                    DataTable dt = ListToDataTable(ddetails, "Committee");
                    FinalData.Tables.Add(dt);
                }
                if (remarks_details.Count > 0)
                {
                    DataTable dt = ListToDataTable(remarks_details, "DIP");
                    FinalData.Tables.Add(dt);
                }
                if (social_farmers.Count > 0)
                {
                    DataTable dt = ListToDataTable(social_farmers, "Demographic Profile");
                    FinalData.Tables.Add(dt);
                }
                if (social_grm.Count > 0)
                {
                    DataTable dt = ListToDataTable(social_grm, "Awarness about Greivance");
                    FinalData.Tables.Add(dt);
                }

                path = Server.MapPath("/social/Template_temp/");
                MapedPathoutputout = path + "Social_Management.xlsx";
                string rootPath = Server.MapPath("/Template/Data.xlsx");
               

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

                msg = "/social/Template_temp/Social_Management.xlsx";
            }
            catch (Exception ex)
            {
                // Handle exception
            }


            return Json(msg, JsonRequestBehavior.AllowGet);
        }
        public ActionResult Create_Excel(string state1, string district1, string block01, string gp1, string year1)
        {
            string path = "";
            string msg = "";
            string MapedPathoutputout = "";

            try
            {
                // Initialize lists
                List<social_socialmgt_other_local_institues> ddetails = new List<social_socialmgt_other_local_institues>();
                DataSet FinalData = new DataSet();
                List<social_socialmgt_other_local_institues> gpdata_details = new List<social_socialmgt_other_local_institues>();
                List<social_socialmgt_support_agency> remarks_details = new List<social_socialmgt_support_agency>();
                List<social_socialmgt_farmers> social_farmers = new List<social_socialmgt_farmers>();
                List<social_socialmgt_village_meetings> surfacewater_details = new List<social_socialmgt_village_meetings>();
                List<social_socialmgt_grm> social_grm = new List<social_socialmgt_grm>();
                List<sarpanchdetails> sarpanch_deatls = new List<sarpanchdetails>();
                List<Allsocialevent> Social_data = new List<Allsocialevent>();

                // Assign input parameters to variables
                var State = state1;
                var Dist = district1;
                var Block = block01;
                var Gram = gp1;
                var Year = year1;

                // Query database based on input parameters
                if (State != "0" && !string.IsNullOrEmpty(State) && Dist != "0" && !string.IsNullOrEmpty(Dist) && Block != "0" && !string.IsNullOrEmpty(Block) && Gram != "0" && !string.IsNullOrEmpty(Gram))
                {
                    ddetails = ABE.obj_social_socialmgt_other_local_institues.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year).OrderByDescending(x => x.id).ToList();
                    remarks_details = ABE.obj_social_socialmgt_support_agency.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year).OrderByDescending(x => x.id).ToList();
                    social_farmers = ABE.obj_social_socialmgt_farmers.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year).OrderByDescending(x => x.id).ToList();
                    social_grm = ABE.obj_social_socialmgt_grm.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year).OrderByDescending(x => x.id).ToList();
                    sarpanch_deatls = ABE.obj_sarpanchdetails.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year).OrderByDescending(x => x.id).ToList();
                }
                // Other conditions here...

                // Convert lists to DataTables and add to DataSet
                if (sarpanch_deatls.Count > 0)
                {
                    DataTable dt = ListToDataTable(sarpanch_deatls, "Key Persons of GP");
                    FinalData.Tables.Add(dt);
                }
                if (ddetails.Count > 0)
                {
                    DataTable dt = ListToDataTable(ddetails, "Committee");
                    FinalData.Tables.Add(dt);
                }
                if (remarks_details.Count > 0)
                {
                    DataTable dt = ListToDataTable(remarks_details, "DIP");
                    FinalData.Tables.Add(dt);
                }
                if (social_farmers.Count > 0)
                {
                    DataTable dt = ListToDataTable(social_farmers, "Demographic Profile");
                    FinalData.Tables.Add(dt);
                }
                if (social_grm.Count > 0)
                {
                    DataTable dt = ListToDataTable(social_grm, "Awareness about Grievance");
                    FinalData.Tables.Add(dt);
                }


                path = Server.MapPath("/social/Template_temp/");
                string datea = DateTime.Now.ToString("yyyyMMddHHmmss");
                string uniqueFileName = "Social_Management_" +datea + ".xlsx";
                MapedPathoutputout = Path.Combine(path, uniqueFileName); // Use a unique file name based on timestamp
                string rootPath = Server.MapPath("/Template/Data.xlsx");

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

                    // Retry logic for saving the workbook
                    const int MaxRetries = 3;
                    const int DelayBetweenRetries = 1000; // in milliseconds
                    int retryCount = 0;
                    bool saved = false;

                    while (retryCount < MaxRetries && !saved)
                    {
                        try
                        {
                            workbook.SaveAs(MapedPathoutputout);
                            saved = true;
                        }
                        catch (IOException)
                        {
                            retryCount++;
                            System.Threading.Thread.Sleep(DelayBetweenRetries); // Wait before retrying
                        }
                    }

                    if (!saved)
                    {
                        throw new IOException("Failed to save the file after multiple attempts.");
                    }
                }

                msg = "/social/Template_temp/" + uniqueFileName;
            }
            catch (Exception ex)
            {
                msg = "Error: " + ex.Message;
            }

            return Json(msg, JsonRequestBehavior.AllowGet);
        }

        public bool IsFileLocked(string filePath)
        {
            try
            {
                using (FileStream stream = new FileStream(filePath, FileMode.Open, FileAccess.Read, FileShare.None))
                {
                    // File is not locked
                }
            }
            catch (IOException)
            {
                // File is locked
                return true;
            }
            return false;
        }



        public string Create_Excel_old(string state1, string district1, string block01, string gp1, string year1)
        {
            string path = "";
            string msg = "";

            string MapedPathoutputout = "";
            try
            {

                List<social_socialmgt_other_local_institues> ddetails = new List<social_socialmgt_other_local_institues>();
                DataSet FinalData = new DataSet();
                List<social_socialmgt_other_local_institues> gpdata_details = new List<social_socialmgt_other_local_institues>();
                List<social_socialmgt_support_agency> remarks_details = new List<social_socialmgt_support_agency>();
                List<social_socialmgt_farmers> social_farmers = new List<social_socialmgt_farmers>();
                List<social_socialmgt_village_meetings> surfacewater_details = new List<social_socialmgt_village_meetings>();
                List<social_socialmgt_grm> social_grm = new List<social_socialmgt_grm>();
                List<sarpanchdetails> sarpanch_deatls = new List<sarpanchdetails>();

                List<Allsocialevent> Social_data = new List<Allsocialevent>();

                var State = state1;
                var Dist = district1;
                var Block = block01;
                var Gram = gp1;
                var Year = year1;

                if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                {
                    ddetails = ABE.obj_social_socialmgt_other_local_institues.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year).ToList();
                    remarks_details = ABE.obj_social_socialmgt_support_agency.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year).ToList();
                    social_farmers = ABE.obj_social_socialmgt_farmers.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year).ToList();
                    social_grm = ABE.obj_social_socialmgt_grm.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year).ToList();
                    sarpanch_deatls = ABE.obj_sarpanchdetails.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year).ToList();
                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Year != "0" && Year != "" && Year != null)
                {
                    ddetails = ABE.obj_social_socialmgt_other_local_institues.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.year == Year).ToList();//total list
                    remarks_details = ABE.obj_social_socialmgt_support_agency.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.year == Year).ToList();
                    social_farmers = ABE.obj_social_socialmgt_farmers.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.year == Year).ToList();
                    social_grm = ABE.obj_social_socialmgt_grm.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.year == Year).ToList();
                    sarpanch_deatls = ABE.obj_sarpanchdetails.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.year == Year).ToList();
                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null)
                {
                    ddetails = ABE.obj_social_socialmgt_other_local_institues.Where(x => x.state_name == State && x.district_name == Dist && x.year == Year).ToList();//total list
                    remarks_details = ABE.obj_social_socialmgt_support_agency.Where(x => x.state_name == State && x.district_name == Dist && x.year == Year).ToList();
                    social_farmers = ABE.obj_social_socialmgt_farmers.Where(x => x.state_name == State && x.district_name == Dist && x.year == Year).ToList();
                    social_grm = ABE.obj_social_socialmgt_grm.Where(x => x.state_name == State && x.district_name == Dist && x.year == Year).ToList();
                    sarpanch_deatls = ABE.obj_sarpanchdetails.Where(x => x.state_name == State && x.district_name == Dist && x.year == Year).ToList();
                }
                else if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null)
                {
                    ddetails = ABE.obj_social_socialmgt_other_local_institues.Where(x => x.state_name == State && x.year == Year).ToList();//total list
                    remarks_details = ABE.obj_social_socialmgt_support_agency.Where(x => x.state_name == State && x.year == Year).ToList();
                    social_farmers = ABE.obj_social_socialmgt_farmers.Where(x => x.state_name == State && x.year == Year).ToList();
                    social_grm = ABE.obj_social_socialmgt_grm.Where(x => x.state_name == State && x.year == Year).ToList();
                    sarpanch_deatls = ABE.obj_sarpanchdetails.Where(x => x.state_name == State && x.year == Year).ToList();
                }
                else if (State != "0" && State != "" && State != null)
                {
                    ddetails = ABE.obj_social_socialmgt_other_local_institues.Where(x => x.state_name == State).ToList();//total list
                    remarks_details = ABE.obj_social_socialmgt_support_agency.Where(x => x.state_name == State).ToList();
                    social_farmers = ABE.obj_social_socialmgt_farmers.Where(x => x.state_name == State).ToList();
                    social_grm = ABE.obj_social_socialmgt_grm.Where(x => x.state_name == State).ToList();
                    sarpanch_deatls = ABE.obj_sarpanchdetails.Where(x => x.state_name == State).ToList();
                }
                if (sarpanch_deatls.Count > 0)
                {
                    DataTable dt = ListToDataTable(sarpanch_deatls, "Key Persons of GP");
                    FinalData.Tables.Add(dt);
                }
                if (ddetails.Count > 0)
                {
                    DataTable dt = ListToDataTable(ddetails, "Committee");
                    FinalData.Tables.Add(dt);
                }
                if (remarks_details.Count > 0)
                {
                    DataTable dt = ListToDataTable(remarks_details, "DIP");
                    FinalData.Tables.Add(dt);
                }
                if (social_farmers.Count > 0)
                {
                    DataTable dt = ListToDataTable(social_farmers, "Demographic Profile");
                    FinalData.Tables.Add(dt);
                }
                if (social_grm.Count > 0)
                {
                    DataTable dt = ListToDataTable(social_grm, "Awarness about Greivance");
                    FinalData.Tables.Add(dt);
                }

                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                path = Path.Combine(BasePath, "Template_temp\\");
                MapedPathoutputout = Path.Combine(path, "Social_Management_Data.xlsx");

                try
                {
                    if (!Directory.Exists(path))
                    {
                        Directory.CreateDirectory(path);
                    }
                    else
                    {
                        // Clear existing files in the directory
                        foreach (string file in Directory.GetFiles(path))
                        {
                            System.IO.File.Delete(file);
                        }
                    }

                    using (XLWorkbook workbook = new XLWorkbook())
                    {
                        for (int s = 0; s < FinalData.Tables.Count; s++) // data set loop
                        {
                            var worksheet = workbook.Worksheets.Add(FinalData.Tables[s], FinalData.Tables[s].TableName);
                            worksheet.Columns().AdjustToContents();
                        }

                        workbook.SaveAs(MapedPathoutputout);
                    }

                    msg = "Success";
                }
                catch (Exception ex)
                {
                    // Handle exceptions
                }
                finally
                {
                    // Your existing code for downloading the file
                }

                return msg;




                //string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                path = System.IO.Path.Combine(BasePath, "Template_temp\\");
                MapedPathoutputout = path + "\\Social_Management_Data.xlsx";
                string rootPath = HttpContext.Server.MapPath(@"/Template/Data.xlsx");
                using (XLWorkbook workbook = new XLWorkbook(rootPath))
                {


                    for (int s = 0; s < FinalData.Tables.Count; s++)//data set loop
                    {
                        for (int r = 0; r < FinalData.Tables[s].Rows.Count; r++) // rows loop
                        {
                            for (int c = 1; c < FinalData.Tables[s].Columns.Count; c++)
                            {

                                var worksheet = workbook.Worksheet(s + 1);
                                worksheet.Name = FinalData.Tables[s].TableName.ToString();
                                worksheet.Cell(1, c).Value = FinalData.Tables[s].Columns[c].ColumnName;
                                worksheet.Cell(r + 2, c).Value = FinalData.Tables[s].Rows[r][c].ToString();
                                worksheet.Column(c).AdjustToContents();
                                // worksheet.Range("A" + i).Value =
                            }

                        }
                    }


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

                    workbook.SaveAs(MapedPathoutputout);

                }

                //return pathoutputout;

            }
            catch (Exception ex)
            {
            }
            finally
            {
                DirectoryInfo dir = new DirectoryInfo(path);
                FileInfo[] files = dir.GetFiles();
                bool filefound = false;
                string filename = "Social_Management_Data.xlsx";
                foreach (var file in files)
                {
                    if (String.Compare(file.Name, filename) == 0)
                    {
                        filefound = true;
                    }
                }
                if (filefound)
                {
                    Response.ContentType = "";
                    Response.AppendHeader("Content-Disposition", "attachment; filename=" + filename);
                    Response.WriteFile(path + filename);
                    Response.End();
                    msg = "Success";
                }
            }

            return msg;
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
        public ActionResult Save_Others_local_instituions_citizen_leaders_Info(string Data) //saving
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<social_socialmgt_other_local_institues>(Data);

                    var Details = new social_socialmgt_other_local_institues();
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();
                    var Gram = Session["ggram"].ToString();
                    var Block = Session["gblock"].ToString();
                    var Email = Session["Email"].ToString();
                    var Month = result.month;
                    var year = result.year;
                    int month_num = Get_Month_Number(Month);
                    Details.month = result.month;
                    Details.month_order_by = month_num;
                    Details.entry_by = Email;
                    var asso = result.comm_name;
                    social_socialmgt_other_local_institues ddetails = new social_socialmgt_other_local_institues();
                    Details.state_name = State;
                    Details.district_name = Dist;
                    Details.block_name = Block;
                    Details.gpname = Gram;

                    if (result.contact_number != "" && result.contact_number != null)
                    {
                        Details.contact_number = result.contact_number;
                    }
                    else
                    {
                        return Json("Please Enter Contact Number");
                    }

                    if (result.designation != "" && result.designation != null)
                    {
                        Details.designation = result.designation;
                    }
                    else
                    {
                        return Json("Please Enter Designation");
                    }


                    if (result.gender != "0" && result.gender != "" && result.gender != null)
                    {
                        Details.gender = result.gender;
                    }
                    else
                    {
                        return Json("Please Select Gender");
                    }
                    if (result.year != "0" && result.year != "" && result.year != null)
                    {
                        Details.year = result.year;
                    }
                    else
                    {
                        return Json("Please Select year");
                    }
                    if (result.member_name != "" && result.member_name != null)
                    {
                        Details.member_name = result.member_name;
                    }
                    if (result.category != "" && result.category != null)
                    {
                        Details.category = result.category;
                    }
                    if (result.comm_name != "" && result.comm_name != null)
                    {
                        Details.comm_name = result.comm_name;
                    }
                    if (result.category_other != "" && result.category_other != null)
                    {
                        Details.category_other = result.category_other;
                    }
                    if (result.year != "0" && result.year != null)
                    {
                        Details.year = result.year;
                    }
                    if (result.date_of_commi != "" && result.date_of_commi != null)
                    {
                        Details.date_of_commi = result.date_of_commi;
                    }
                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null && Month != "0" && Month != "" && Month != null && asso != "0" && asso != "" && asso != null)
                    {
                        ddetails = ABE.obj_social_socialmgt_other_local_institues.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == year && x.comm_name == asso && x.establishment_date != "").FirstOrDefault();//total list

                    }
                    if (ddetails != null)
                    {
                        if (result.establishment_date == "")
                        {
                            Details.establishment_date = ddetails.establishment_date;
                        }
                        if (result.establishment_date == "")
                        {
                            var date2 = result.date_of_commi.ToString();
                            var date1 = ddetails.establishment_date.ToString();

                            if (DateTime.Parse(date2, CultureInfo.InvariantCulture) < DateTime.Parse(date1, CultureInfo.InvariantCulture))

                            {
                                return Json("Please Enter the Correct Date in Member From Date column");
                            }
                        }

                    }
                    else
                    {
                        Details.establishment_date = result.establishment_date;
                    }

                    Details.reserved_unreserved = result.reserved_unreserved;
                    Details.userid = Convert.ToInt32(Session["UserId"]);
                    ABE.obj_social_socialmgt_other_local_institues.Add(Details);
                    ABE.SaveChanges();
                    return Json("Successfully Saved", JsonRequestBehavior.AllowGet);


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

        //IEC Activities (suggestive list)
        //IEC Activities (suggestive list)
        [HttpPost]
        public ActionResult IEC_Activities_Info(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_socialmgt_iec_activities>(Data);
                    var data = ABE.obj_abhy_socialmgt_iec_activities.ToList();
                    List<abhy_socialmgt_iec_activities> ddetails = new List<abhy_socialmgt_iec_activities>();
                    var State = result.state_name;
                    var Dist = result.district_name;
                    var Block = result.block_name;
                    var Gram = result.gpname;
                    var year = result.year;






                    //List<abhy_socialmgt_iec_activities> ddetails = new List<abhy_socialmgt_iec_activities>();
                    //var userid = Convert.ToInt32(Session["UserId"]);
                    //var State = Session["gstate"].ToString();
                    //var Dist = Session["gdist"].ToString();

                    //var Block = Session["gblock"].ToString();
                    //var Gram = Session["ggram"].ToString();
                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_iec_activities.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == year).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_iec_activities.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_iec_activities.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_iec_activities.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                    }
                    else if (State != "" && State != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_iec_activities.Where(x => x.state_name == State).ToList();//total list

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

            }
        }

        [HttpPost]
        public ActionResult Save_IEC_Activities(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_socialmgt_iec_activities>(Data);

                    var Details = new abhy_socialmgt_iec_activities();
                    var State = "";
                    var Dist = "";
                    var Gram = "";
                    var Block = "";
                    if (Session["gstate"] != null)
                    {
                        Details.state_name = Session["gstate"].ToString();
                    }
                    else
                    {
                        Details.state_name = State;
                    }
                    if (Session["gdist"] != null)
                    {
                        Details.district_name = Session["gdist"].ToString();
                    }
                    else
                    {
                        Details.district_name = Dist;
                    }
                    if (Session["ggram"] != null)
                    {
                        Details.gpname = Session["ggram"].ToString();
                    }
                    else
                    {
                        Details.gpname = Gram;
                    }
                    if (Session["gblock"] != null)
                    {
                        Details.block_name = Session["gblock"].ToString();
                    }
                    else
                    {
                        Details.block_name = Block;
                    }
                    if (result.print_media != "0" && result.print_media != "" && result.print_media != null)
                    {

                        Details.print_media = result.print_media;
                    }
                    else
                    {
                        return Json("Please Select IEC Activities");
                    }

                    if (result.loud_speakers != "0" && result.loud_speakers != "" && result.loud_speakers != null)
                    {

                        Details.loud_speakers = result.loud_speakers;
                    }
                    else
                    {
                        return Json("Please Select Yes/No");
                    }
                    Details.print_media = result.print_media;
                    Details.loud_speakers = result.loud_speakers;
                    Details.radio = result.radio;
                    Details.userid = Convert.ToInt32(Session["UserId"]);
                    ABE.obj_abhy_socialmgt_iec_activities.Add(Details);

                    ABE.SaveChanges();
                    return Json("Successfully Saved", JsonRequestBehavior.AllowGet);


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
        public ActionResult Delete_IEC_Activities(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_socialmgt_iec_activities>(Data);

                    if (result.id != 0)
                    {
                        var TKID = Convert.ToInt32(result.id);
                        var Data1 = ABE.obj_abhy_socialmgt_iec_activities.Where(x => x.id == TKID).SingleOrDefault();
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
        public ActionResult Delete_SocMon_CommPart(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<social_socialmgt_village_meetings>(Data);

                    if (result.id != 0)
                    {
                        var SocID = Convert.ToInt32(result.id);
                        var Data1 = ABE.obj_social_socialmgt_village_meetings.Where(x => x.id == SocID).SingleOrDefault();
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



        //[HttpPost]
        //public ActionResult Delete_Gplevel_CommPart(string Data)
        //{
        //    if (Session["UserId"] != null)
        //    {
        //        try
        //        {
        //            JavaScriptSerializer js = new JavaScriptSerializer();
        //            var result = js.Deserialize<socialmon_traininggp>(Data);

        //            if (result.id != 0)
        //            {
        //                var GPID = Convert.ToInt32(result.id);
        //                var Data1 = ABE.obj_socialmon_traininggp_vw.Where(x => x.id == GPID).SingleOrDefault();
        //                if (Data1 != null)
        //                {

        //                    ABE.Entry(Data1).State = EntityState.Deleted;
        //                    ABE.SaveChanges();
        //                    return Json("Deleted Successfully");
        //                }
        //                else
        //                {
        //                    return Json("Error", JsonRequestBehavior.AllowGet);
        //                }


        //            }
        //            else
        //            {
        //                return Json("No Data", JsonRequestBehavior.AllowGet);
        //            }
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




        // abhi1006
        [HttpPost]
        public ActionResult Update_Comm_Part_Info(string id, string name_of_meeting, string curr_date, string other_name_of_meeting, string location, string prior_info, string male, string female, string other, string total, string no_of_sc_sc, string no_of_st_st, string no_of_obc, string no_of_gen, string key_issues, HttpPostedFileBase mom_filename, HttpPostedFileBase photographs_filename)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    //JavaScriptSerializer js = new JavaScriptSerializer();
                    // var result = js.Deserialize<abhy_socialmgt_village_meetings>;


                    var SocID = Convert.ToInt32(id);
                    var Data1 = ABE.obj_social_socialmgt_village_meetings.Where(x => x.id == SocID).SingleOrDefault();
                    if (Data1 != null)
                    {
                        Data1.id = SocID;
                        Data1.name_of_meeting = name_of_meeting;
                        Data1.other_name_of_meeting = other_name_of_meeting;
                        Data1.curr_date = curr_date;

                        Data1.location = location;
                        Data1.prior_info = prior_info;
                        Data1.male = male;
                        Data1.female = female;
                        Data1.other = other;
                        Data1.total = total;
                        Data1.no_of_sc_sc = no_of_sc_sc;
                        Data1.no_of_st_st = no_of_st_st;
                        Data1.no_of_obc = no_of_obc;
                        Data1.no_of_gen = no_of_gen;
                        Data1.key_issues = key_issues;

                        if (mom_filename != null)
                        {
                            if (mom_filename.FileName != null)
                            {

                                string filename = Path.GetFileNameWithoutExtension(mom_filename.FileName);

                                String ext = Path.GetExtension(mom_filename.FileName).ToUpper();

                                if (ext != ".PDF" && ext != ".JPG" && ext != ".DOC")
                                {
                                    return Json("Choose Valid image", JsonRequestBehavior.AllowGet);

                                }
                                filename = filename + ext;
                                Data1.mom_filename = filename;
                                filename = Path.Combine(Server.MapPath("/imageakash/"), filename);
                                mom_filename.SaveAs(filename);
                            }
                        }

                        if (photographs_filename != null)
                        {
                            if (photographs_filename.FileName != null)
                            {

                                string filename = Path.GetFileNameWithoutExtension(photographs_filename.FileName);
                                string ext = Path.GetExtension(photographs_filename.FileName).ToUpper();
                                if (ext != ".PNG" && ext != ".JPG")
                                {
                                    return Json("Choose Valid image", JsonRequestBehavior.AllowGet);

                                }
                                filename = filename + ext;
                                Data1.photographs_filename = filename;
                                filename = Path.Combine(Server.MapPath("/imageakash/"), filename);
                                photographs_filename.SaveAs(filename);
                            }
                        }

                        ABE.Entry(Data1).State = System.Data.Entity.EntityState.Modified;
                        int A = ABE.SaveChanges();
                        if (A > 0)
                        {
                            return Json("Updated Successfully");
                        }
                        else
                        {
                            return Json("Not Updated");
                        }
                    }

                }
                catch (Exception ex)
                {
                    return Json("Unsuccessful Update");

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }

        // abhi2706
        [HttpPost]
        public ActionResult Update_VWMS_Part_Info(string id, string comm_name, string designation, string member_name, string gender, string category, string category_other, string contact_number, string date_of_commi, string establishment_date, string year, string month)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_social_socialmgt_other_local_institues.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        Data.id = ID;
                        Data.comm_name = comm_name;
                        Data.designation = designation;
                        Data.member_name = member_name;
                        Data.gender = gender;
                        Data.category = category;
                        Data.category_other = category_other;
                        Data.contact_number = contact_number;
                        Data.date_of_commi = date_of_commi;
                        Data.establishment_date = establishment_date;
                        Data.year = year;
                        Data.month = month;
                        Data.month_order_by = Get_Month_Number(month);
                        Data.entry_by = Session["Email"].ToString();

                        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = ABE.SaveChanges();
                        if (A > 0)
                        {
                            return Json("Updated Successfully");
                        }
                        else
                        {
                            return Json("Not Updated");
                        }
                    }

                }
                catch (Exception ex)
                {
                    return Json("Unsuccessful Update");

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }



        [HttpPost]
        public ActionResult Update_DIP_Part_Info(string id, string designation, string month, string member_name, string gender, string contact_number, string ddldesignation, string date)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_social_socialmgt_support_agency.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        Data.id = ID;
                        Data.designation = designation;
                        Data.member_name = member_name;
                        Data.ddldesignation = ddldesignation;
                        Data.gender = gender;
                        Data.contact_number = contact_number;
                        Data.month = month;
                        Data.month_order_by = Get_Month_Number(month);
                        Data.entry_by = Session["Email"].ToString();


                        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = ABE.SaveChanges();
                        if (A > 0)
                        {
                            return Json("Updated Successfully");
                        }
                        else
                        {
                            return Json("Not Updated");
                        }
                    }

                }
                catch (Exception ex)
                {
                    return Json("Unsuccessful Update");

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }



        //[HttpPost]
        //public ActionResult Update_Gplvl_Info(string id, string topic_training, string location, string date_training, string sc_t, string st_t, string obc_t, string general_t, string male_population, string female_population, string other_population, string total_participants, HttpPostedFileBase atten_sheet, HttpPostedFileBase photograph, HttpPostedFileBase feedback)
        //{
        //    if (Session["UserId"] != null)
        //    {
        //        try
        //        {



        //            var GPID = Convert.ToInt32(id);
        //            var Data1 = ABE.obj_socialmon_traininggp.Where(x => x.id == GPID).SingleOrDefault();
        //            if (Data1 != null)
        //            {
        //                Data1.id = GPID;
        //                Data1.topic_training = topic_training;
        //                Data1.location = location;
        //                Data1.date_training = date_training;
        //                Data1.male_population = Convert.ToInt32(male_population);
        //                Data1.female_population = Convert.ToInt32(female_population);
        //                Data1.other_population = Convert.ToInt32(other_population);
        //                Data1.total_participants = Convert.ToInt32(total_participants);
        //                Data1.SC = sc_t;
        //                Data1.ST = st_t;
        //                Data1.OBC = obc_t;
        //                Data1.General = general_t;

        //                if (atten_sheet != null)
        //                {

        //                    if (atten_sheet.FileName != null)
        //                    {
        //                        String FileExt = Path.GetExtension(atten_sheet.FileName).ToUpper();

        //                        if (FileExt != ".PDF" && FileExt != ".JPG" && FileExt != ".DOC")
        //                        {
        //                            return Json("Choose Valid image", JsonRequestBehavior.AllowGet);

        //                        }
        //                        string BasePath = AppDomain.CurrentDomain.BaseDirectory;
        //                        string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");
        //                        path = path + atten_sheet.FileName;
        //                        string[] count = atten_sheet.FileName.Split('.');
        //                        if (count.Length != 2)
        //                        {
        //                            return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
        //                        }
        //                        atten_sheet.SaveAs(path);
        //                        Data1.atten_sheet_filename = atten_sheet.FileName;
        //                        Data1.atten_sheet = "/Ataljalimages/" + atten_sheet.FileName;

        //                    }
        //                }

        //                if (photograph != null)
        //                {

        //                    if (photograph.FileName != null)
        //                    {
        //                        String FileExt = Path.GetExtension(photograph.FileName).ToUpper();

        //                        if (FileExt != ".PDF" && FileExt != ".JPG" && FileExt != ".DOC")
        //                        {
        //                            return Json("Choose Valid image", JsonRequestBehavior.AllowGet);

        //                        }
        //                        string BasePath = AppDomain.CurrentDomain.BaseDirectory;
        //                        string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");
        //                        path = path + photograph.FileName;
        //                        string[] count = photograph.FileName.Split('.');
        //                        if (count.Length != 2)
        //                        {
        //                            return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
        //                        }
        //                        atten_sheet.SaveAs(path);
        //                        Data1.photograph_filename = photograph.FileName;
        //                        Data1.photograph = "/Ataljalimages/" + photograph.FileName;

        //                    }
        //                }
        //                if (feedback != null)
        //                {

        //                    if (feedback.FileName != null)
        //                    {
        //                        String FileExt = Path.GetExtension(feedback.FileName).ToUpper();

        //                        if (FileExt != ".PDF" && FileExt != ".JPG" && FileExt != ".DOC")
        //                        {
        //                            return Json("Choose Valid image", JsonRequestBehavior.AllowGet);

        //                        }
        //                        string BasePath = AppDomain.CurrentDomain.BaseDirectory;
        //                        string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");
        //                        path = path + feedback.FileName;
        //                        string[] count = feedback.FileName.Split('.');
        //                        if (count.Length != 2)
        //                        {
        //                            return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
        //                        }
        //                        atten_sheet.SaveAs(path);
        //                        Data1.feedback_filename = feedback.FileName;
        //                        Data1.feedback = "/Ataljalimages/" + feedback.FileName;

        //                    }
        //                }




        //                ABE.Entry(Data1).State = System.Data.Entity.EntityState.Modified;
        //                int A = ABE.SaveChanges();
        //                if (A > 0)
        //                {
        //                    return Json("Updated Successfully");
        //                }
        //                else
        //                {
        //                    return Json("Not Updated");
        //                }
        //            }

        //        }
        //        catch (Exception ex)
        //        {
        //            return Json("Unsuccessful Update");

        //        }
        //        return Json("Invalid");
        //    }
        //    else
        //    {
        //        return Json("Logout", JsonRequestBehavior.AllowGet);
        //    }
        //}

        //Social Audit

        [HttpPost]
        public ActionResult Social_Audit_Info(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_socialmgt_social_audit>(Data);
                    var data = ABE.obj_abhy_socialmgt_social_audit.ToList();
                    List<abhy_socialmgt_social_audit> ddetails = new List<abhy_socialmgt_social_audit>();
                    var State = result.state_name;
                    var Dist = result.district_name;

                    var Block = result.block_name;
                    var Gram = result.gpname;
                    var year = result.year;



                    //List<abhy_socialmgt_social_audit> ddetails = new List<abhy_socialmgt_social_audit>();
                    //var userid = Convert.ToInt32(Session["UserId"]);
                    //var State = Session["gstate"].ToString();
                    //var Dist = Session["gdist"].ToString();
                    //var Block = Session["gblock"].ToString();
                    //var Gram = Session["ggram"].ToString();
                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_social_audit.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == year).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_social_audit.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_social_audit.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_social_audit.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                    }
                    else if (State != "" && State != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_social_audit.Where(x => x.state_name == State).ToList();//total list

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

            }
        }


        [HttpPost]
        public ActionResult Save_Social_Audit(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_socialmgt_social_audit> ddetails = new List<abhy_socialmgt_social_audit>();
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_social_audit.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_social_audit.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_social_audit.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                    }
                    else if (State != "" && State != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_social_audit.Where(x => x.state_name == State).ToList();//total list

                    }
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_socialmgt_social_audit>(Data);
                    if (ddetails.Count == 0)
                    {


                        var Details = new abhy_socialmgt_social_audit();

                        if (Session["gstate"] != null)
                        {
                            Details.state_name = Session["gstate"].ToString();
                        }
                        else
                        {
                            Details.state_name = State;
                        }
                        if (Session["gdist"] != null)
                        {
                            Details.district_name = Session["gdist"].ToString();
                        }
                        else
                        {
                            Details.district_name = Dist;
                        }
                        if (Session["ggram"] != null)
                        {
                            Details.gpname = Session["ggram"].ToString();
                        }
                        else
                        {
                            Details.gpname = Gram;
                        }
                        if (Session["gblock"] != null)
                        {
                            Details.block_name = Session["gblock"].ToString();
                        }
                        else
                        {
                            Details.block_name = Block;
                        }
                        Details.toolkit = result.toolkit;
                        Details.pilot_under = result.pilot_under;
                        Details.rollout_cal = result.rollout_cal;
                        Details.audit_report = result.audit_report;
                        Details.analysis_summary = result.analysis_summary;
                        Details.userid = Convert.ToInt32(Session["UserId"]);
                        ABE.obj_abhy_socialmgt_social_audit.Add(Details);
                        ABE.SaveChanges();
                        return Json("Successfully Saved", JsonRequestBehavior.AllowGet);
                    }
                    else
                    {
                        if (ddetails.Count == 1)
                        {
                            var Dataa = ddetails.SingleOrDefault();
                            if (Session["gstate"] != null)
                            {
                                Dataa.state_name = Session["gstate"].ToString();
                            }
                            else
                            {
                                Dataa.state_name = State;
                            }
                            if (Session["gdist"] != null)
                            {
                                Dataa.district_name = Session["gdist"].ToString();
                            }
                            else
                            {
                                Dataa.district_name = Dist;
                            }
                            if (Session["ggram"] != null)
                            {
                                Dataa.gpname = Session["ggram"].ToString();
                            }
                            else
                            {
                                Dataa.gpname = Gram;
                            }
                            if (Session["gblock"] != null)
                            {
                                Dataa.block_name = Session["gblock"].ToString();
                            }
                            else
                            {
                                Dataa.block_name = Block;
                            }
                            Dataa.toolkit = result.toolkit;
                            Dataa.pilot_under = result.pilot_under;
                            Dataa.rollout_cal = result.rollout_cal;
                            Dataa.audit_report = result.audit_report;
                            Dataa.analysis_summary = result.analysis_summary;
                            Dataa.userid = Convert.ToInt32(Session["UserId"]);
                            //ABE.obj_abhy_socialmgt_iec_activities.Add(Dataa);
                            ABE.Entry(Dataa).State = EntityState.Modified;
                            ABE.SaveChanges();
                            return Json("Successfully Saved", JsonRequestBehavior.AllowGet);
                        }
                        else
                        {
                            return Json("Duplicate Data is there");
                        }

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

        //Total Population of the GP

        [HttpPost]
        public ActionResult Total_Population_of_the_GP_Info()
        {
            if (Session["UserId"] != null)
            {
                try
                {

                    //JavaScriptSerializer js = new JavaScriptSerializer();
                    //var result = js.Deserialize<abhy_baseline_gpdata>(Data);

                    //List<abhy_baseline_gpdata> ddetails = new List<abhy_baseline_gpdata>();
                    //var State = result.state_name;
                    //var Dist = result.district_name;
                    //var Block = result.block_name;
                    //var Gram = result.gpname;
                    //var year = result.year;





                    List<abhy_baseline_gpdata> ddetails = new List<abhy_baseline_gpdata>();
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();
                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        ddetails = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        ddetails = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        ddetails = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                    }
                    else if (State != "" && State != null)
                    {
                        ddetails = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == State).ToList();//total list

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

            }
        }


        [HttpPost]
        public ActionResult Save_Total_Population_of_the_GP_Info(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_socialmgt_tol_population> ddetails = new List<abhy_socialmgt_tol_population>();
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_tol_population.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_tol_population.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_tol_population.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                    }
                    else if (State != "" && State != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_tol_population.Where(x => x.state_name == State).ToList();//total list

                    }
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_socialmgt_tol_population>(Data);
                    if (ddetails.Count == 0)
                    {


                        var Details = new abhy_socialmgt_tol_population();

                        if (Session["gstate"] != null)
                        {
                            Details.state_name = Session["gstate"].ToString();
                        }
                        else
                        {
                            Details.state_name = State;
                        }
                        if (Session["gdist"] != null)
                        {
                            Details.district_name = Session["gdist"].ToString();
                        }
                        else
                        {
                            Details.district_name = Dist;
                        }
                        if (Session["ggram"] != null)
                        {
                            Details.gpname = Session["ggram"].ToString();
                        }
                        else
                        {
                            Details.gpname = Gram;
                        }
                        if (Session["gblock"] != null)
                        {
                            Details.block_name = Session["gblock"].ToString();
                        }
                        else
                        {
                            Details.block_name = Block;
                        }
                        //if (result.tol_population != null && result.tol_population != "")
                        //{
                        //    Details.tol_population = result.tol_population;
                        //}
                        //else
                        //{
                        //    return Json("Please Enter TotalPapulation");
                        //}



                        if (result.basic_data != null && result.basic_data != "")
                        {
                            Details.basic_data = result.basic_data;
                        }
                        else
                        {
                            return Json("Please Enter Census Year");
                        }


                        if (result.pop_20_21 != null && result.pop_20_21 != "")
                        {
                            Details.pop_20_21 = result.pop_20_21;
                        }
                        else
                        {
                            return Json("Please Enter 2021");
                        }


                        if (result.pop_21_22 != null && result.pop_21_22 != "")
                        {
                            Details.pop_21_22 = result.pop_21_22;
                        }
                        else
                        {
                            return Json("Please Enter 2022");
                        }


                        if (result.pop_22_23 != null && result.pop_22_23 != "")
                        {
                            Details.pop_22_23 = result.pop_22_23;
                        }
                        else
                        {
                            return Json("Please Enter 2023");
                        }


                        if (result.pop_23_24 != null && result.pop_23_24 != "")
                        {
                            Details.pop_23_24 = result.pop_23_24;
                        }
                        else
                        {
                            return Json("Please Enter 2024");
                        }


                        if (result.pop_24_25 != null && result.pop_24_25 != "")
                        {
                            Details.pop_24_25 = result.pop_24_25;
                        }
                        else
                        {
                            return Json("Please Enter 2025");
                        }

                        //Details.cumulative = result.cumulative;
                        Details.userid = Convert.ToInt32(Session["UserId"]);
                        ABE.obj_abhy_socialmgt_tol_population.Add(Details);
                        ABE.SaveChanges();
                        return Json("Successfully Saved", JsonRequestBehavior.AllowGet);
                    }
                    else
                    {
                        if (ddetails.Count == 1)
                        {
                            var Dataa = ddetails.SingleOrDefault();
                            if (Session["gstate"] != null)
                            {
                                Dataa.state_name = Session["gstate"].ToString();
                            }
                            else
                            {
                                Dataa.state_name = State;
                            }
                            if (Session["gdist"] != null)
                            {
                                Dataa.district_name = Session["gdist"].ToString();
                            }
                            else
                            {
                                Dataa.district_name = Dist;
                            }
                            if (Session["ggram"] != null)
                            {
                                Dataa.gpname = Session["ggram"].ToString();
                            }
                            else
                            {
                                Dataa.gpname = Gram;
                            }
                            if (Session["gblock"] != null)
                            {
                                Dataa.block_name = Session["gblock"].ToString();
                            }
                            else
                            {
                                Dataa.block_name = Block;
                            }

                            // Dataa.tol_population = result.tol_population;
                            if (result.basic_data != null && result.basic_data != "")
                            {
                                Dataa.basic_data = result.basic_data;
                            }
                            else
                            {
                                return Json("Please Enter Census Year");
                            }


                            if (result.pop_20_21 != null && result.pop_20_21 != "")
                            {
                                Dataa.pop_20_21 = result.pop_20_21;
                            }
                            else
                            {
                                return Json("Please Enter 2021");
                            }


                            if (result.pop_21_22 != null && result.pop_21_22 != "")
                            {
                                Dataa.pop_21_22 = result.pop_21_22;
                            }
                            else
                            {
                                return Json("Please Enter 2022");
                            }


                            if (result.pop_22_23 != null && result.pop_22_23 != "")
                            {
                                Dataa.pop_22_23 = result.pop_22_23;
                            }
                            else
                            {
                                return Json("Please Enter 2023");
                            }


                            if (result.pop_23_24 != null && result.pop_23_24 != "")
                            {
                                Dataa.pop_23_24 = result.pop_23_24;
                            }
                            else
                            {
                                return Json("Please Enter 2024");
                            }


                            if (result.pop_24_25 != null && result.pop_24_25 != "")
                            {
                                Dataa.pop_24_25 = result.pop_24_25;
                            }
                            else
                            {
                                return Json("Please Enter 2025");
                            }


                            // Dataa.cumulative = result.cumulative;
                            Dataa.userid = Convert.ToInt32(Session["UserId"]);
                            //ABE.obj_abhy_socialmgt_iec_activities.Add(Dataa);
                            ABE.Entry(Dataa).State = EntityState.Modified;
                            ABE.SaveChanges();
                            return Json("Successfully Saved", JsonRequestBehavior.AllowGet);
                        }
                        else
                        {
                            return Json("Duplicate Data is there");
                        }

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

        // Socio-economic demographic profile


        [HttpPost]
        public ActionResult Socio_economic_demographic_profile_Info(string Data)
        {

            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_baseline_gpdata>(Data);
                    var data = ABE.obj_abhy_baseline_gpdata.ToList();
                    List<abhy_baseline_gpdata> ddetails = new List<abhy_baseline_gpdata>();
                    var State = result.state_name;
                    var Dist = result.district_name;
                    var Block = result.block_name;
                    var Gram = result.gpname;
                    var year = result.year;



                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == year && x.d_sent == true).ToList();//total list

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

            }
        }


        public ActionResult Socio_economic_demographic_profile_Info_getting()
        {

            if (Session["UserId"] != null)
            {
                try
                {

                    List<abhy_baseline_gpdata> ddetails = new List<abhy_baseline_gpdata>();
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();
                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    var year = Session["year"].ToString();
                    
                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null )
                    {
                        ddetails = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == year  && x.d_sent == true).ToList();//total list

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

            }
        }


        [HttpPost]
        public ActionResult Save_Socio_economic_demographic_profile_Info(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_socialmgt_socio_economic> ddetails = new List<abhy_socialmgt_socio_economic>();
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_socio_economic.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_socio_economic.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_socio_economic.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                    }
                    else if (State != "" && State != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_socio_economic.Where(x => x.state_name == State).ToList();//total list

                    }
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_socialmgt_socio_economic>(Data);
                    if (ddetails.Count == 0)
                    {


                        var Details = new abhy_socialmgt_socio_economic();

                        if (Session["gstate"] != null)
                        {
                            Details.state_name = Session["gstate"].ToString();
                        }
                        else
                        {
                            Details.state_name = State;
                        }
                        if (Session["gdist"] != null)
                        {
                            Details.district_name = Session["gdist"].ToString();
                        }
                        else
                        {
                            Details.district_name = Dist;
                        }
                        if (Session["ggram"] != null)
                        {
                            Details.gpname = Session["ggram"].ToString();
                        }
                        else
                        {
                            Details.gpname = Gram;
                        }
                        if (Session["gblock"] != null)
                        {
                            Details.block_name = Session["gblock"].ToString();
                        }
                        else
                        {
                            Details.block_name = Block;
                        }
                        if (result.male_basic_data != null && result.male_basic_data != "")
                        {
                            Details.male_basic_data = result.male_basic_data;
                        }
                        else
                        {
                            return Json("Please Enter Male Census Year");
                        }
                        Details.male_pop_20_21 = result.male_pop_20_21;
                        Details.male_pop_21_22 = result.male_pop_21_22;
                        Details.male_pop_22_23 = result.male_pop_22_23;
                        Details.male_pop_23_24 = result.male_pop_23_24;
                        Details.male_pop_24_25 = result.male_pop_24_25;
                        //   Details.male_cumulative = result.male_cumulative;
                        if (result.female_basic_data != null && result.female_basic_data != "")
                        {
                            Details.female_basic_data = result.female_basic_data;
                        }
                        else
                        {
                            return Json("Please Enter FeMale Census Year");
                        }
                        Details.female_pop_20_21 = result.female_pop_20_21;
                        Details.female_pop_21_22 = result.female_pop_21_22;
                        Details.female_pop_22_23 = result.female_pop_22_23;
                        Details.female_pop_23_24 = result.female_pop_23_24;
                        Details.female_pop_24_25 = result.female_pop_24_25;
                        // Details.female_cumulative = result.female_cumulative;
                        if (result.sexratio_basic_data != null && result.sexratio_basic_data != "")
                        {
                            Details.sexratio_basic_data = result.sexratio_basic_data;
                        }
                        else
                        {
                            return Json("Please Enter Sex Ratio(Women per 1000) Census Year");
                        }

                        Details.sexratio_pop_20_21 = result.sexratio_pop_20_21;
                        Details.sexratio_pop_21_22 = result.sexratio_pop_21_22;
                        Details.sexratio_pop_22_23 = result.sexratio_pop_22_23;
                        Details.sexratio_pop_23_24 = result.sexratio_pop_23_24;
                        Details.sexratio_pop_24_25 = result.sexratio_pop_24_25;
                        // Details.sexratio_cumulative = result.sexratio_cumulative;
                        if (result.other_basic_year != null && result.other_basic_year != "")
                        {
                            Details.other_basic_year = result.other_basic_year;
                        }
                        else
                        {
                            return Json("Please Enter Other Census Year");
                        }
                        Details.other_pop_20_21 = result.other_pop_20_21;
                        Details.other_pop_21_22 = result.other_pop_21_22;
                        Details.other_pop_22_23 = result.other_pop_22_23;
                        Details.other_pop_23_24 = result.other_pop_23_24;
                        Details.other_pop_24_25 = result.other_pop_24_25;
                        Details.userid = Convert.ToInt32(Session["UserId"]);
                        ABE.obj_abhy_socialmgt_socio_economic.Add(Details);
                        ABE.SaveChanges();
                        return Json("Successfully Saved", JsonRequestBehavior.AllowGet);
                    }
                    else
                    {
                        if (ddetails.Count == 1)
                        {
                            var Dataa = ddetails.SingleOrDefault();
                            if (Session["gstate"] != null)
                            {
                                Dataa.state_name = Session["gstate"].ToString();
                            }
                            else
                            {
                                Dataa.state_name = State;
                            }
                            if (Session["gdist"] != null)
                            {
                                Dataa.district_name = Session["gdist"].ToString();
                            }
                            else
                            {
                                Dataa.district_name = Dist;
                            }
                            if (Session["ggram"] != null)
                            {
                                Dataa.gpname = Session["ggram"].ToString();
                            }
                            else
                            {
                                Dataa.gpname = Gram;
                            }
                            if (Session["gblock"] != null)
                            {
                                Dataa.block_name = Session["gblock"].ToString();
                            }
                            else
                            {
                                Dataa.block_name = Block;
                            }
                            if (result.male_basic_data != null && result.male_basic_data != "")
                            {
                                Dataa.male_basic_data = result.male_basic_data;
                            }
                            else
                            {
                                return Json("Please Enter Male Census Year");
                            }
                            Dataa.male_pop_20_21 = result.male_pop_20_21;
                            Dataa.male_pop_21_22 = result.male_pop_21_22;
                            Dataa.male_pop_22_23 = result.male_pop_22_23;
                            Dataa.male_pop_23_24 = result.male_pop_23_24;
                            Dataa.male_pop_24_25 = result.male_pop_24_25;
                            //Dataa.male_cumulative = result.male_cumulative;
                            if (result.female_basic_data != null && result.female_basic_data != "")
                            {
                                Dataa.female_basic_data = result.female_basic_data;
                            }
                            else
                            {
                                return Json("Please Enter FeMale Census Year");
                            }
                            Dataa.female_pop_20_21 = result.female_pop_20_21;
                            Dataa.female_pop_21_22 = result.female_pop_21_22;
                            Dataa.female_pop_22_23 = result.female_pop_22_23;
                            Dataa.female_pop_23_24 = result.female_pop_23_24;
                            Dataa.female_pop_24_25 = result.female_pop_24_25;
                            //Dataa.female_cumulative = result.female_cumulative;
                            if (result.sexratio_basic_data != null && result.sexratio_basic_data != "")
                            {
                                Dataa.sexratio_basic_data = result.sexratio_basic_data;
                            }
                            else
                            {
                                return Json("Please Enter Sex Ratio(Women per 1000) Census Year");
                            }
                            Dataa.sexratio_pop_20_21 = result.sexratio_pop_20_21;
                            Dataa.sexratio_pop_21_22 = result.sexratio_pop_21_22;
                            Dataa.sexratio_pop_22_23 = result.sexratio_pop_22_23;
                            Dataa.sexratio_pop_23_24 = result.sexratio_pop_23_24;
                            Dataa.sexratio_pop_24_25 = result.sexratio_pop_24_25;
                            //Dataa.sexratio_cumulative = result.sexratio_cumulative;
                            if (result.other_basic_year != null && result.other_basic_year != "")
                            {
                                Dataa.other_basic_year = result.other_basic_year;
                            }
                            else
                            {
                                return Json("Please Enter Other Census Year");
                            }
                            Dataa.other_pop_20_21 = result.other_pop_20_21;
                            Dataa.other_pop_21_22 = result.other_pop_21_22;
                            Dataa.other_pop_22_23 = result.other_pop_22_23;
                            Dataa.other_pop_23_24 = result.other_pop_23_24;
                            Dataa.other_pop_24_25 = result.other_pop_24_25;
                            Dataa.userid = Convert.ToInt32(Session["UserId"]);
                            //ABE.obj_abhy_socialmgt_iec_activities.Add(Dataa);
                            ABE.Entry(Dataa).State = EntityState.Modified;
                            ABE.SaveChanges();
                            return Json("Successfully Saved", JsonRequestBehavior.AllowGet);
                        }
                        else
                        {
                            return Json("Duplicate Data is there");
                        }

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

        //Based On Farmer

        [HttpPost]
        public ActionResult abhy_socialmgt_vulnerable_communities_Info(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_baseline_gpdata>(Data);
                    List<abhy_baseline_gpdata> ddetails = new List<abhy_baseline_gpdata>();
                    var State = result.state_name;
                    var Dist = result.district_name;

                    var Block = result.block_name;
                    var Gram = result.gpname;
                    var year = result.year;
                    var month = result.month;

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == year && x.d_sent == true).ToList();//total list

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

            }
        }

        public ActionResult abhy_socialmgt_vulnerable_communities_Info_getting()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    

                    List<abhy_baseline_gpdata> ddetails = new List<abhy_baseline_gpdata>();
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();
                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    var year = Session["year"].ToString();
                    
                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null )
                    {
                        ddetails = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == year  && x.d_sent == true).ToList();//total list

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

            }
        }


        //[HttpPost]
        //public ActionResult Save_abhy_socialmgt_vulnerable_communities_Info(string Data1,string Data2, string Data3, string Data4, string Data5, string Data6)
        //{
        //    if (Session["UserId"] != null)
        //    {
        //        try
        //        {
        //            List<abhy_baseline_gpdata> ddetails = new List<abhy_baseline_gpdata>();
        //            var userid = Convert.ToInt32(Session["UserId"]);
        //            var State = Session["gstate"].ToString();
        //            var Dist = Session["gdist"].ToString();

        //            var Block = Session["gblock"].ToString();
        //            var Gram = Session["ggram"].ToString();

        //            if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
        //            {
        //                ddetails = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

        //            }
        //            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
        //            {
        //                ddetails = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

        //            }
        //            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
        //            {
        //                ddetails = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

        //            }
        //            else if (State != "" && State != null)
        //            {
        //                ddetails = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == State).ToList();//total list

        //            }
        //            JavaScriptSerializer js = new JavaScriptSerializer();
        //            var result = js.Deserialize<abhy_baseline_gpdata>(Data1);


        //                var Details = new abhy_baseline_gpdata();

        //                if (Session["gstate"] != null)
        //                {
        //                    Details.state_name = Session["gstate"].ToString();
        //                }
        //                else
        //                {
        //                    Details.state_name = State;
        //                }
        //                if (Session["gdist"] != null)
        //                {
        //                    Details.district_name = Session["gdist"].ToString();
        //                }
        //                else
        //                {
        //                    Details.district_name = Dist;
        //                }
        //                if (Session["ggram"] != null)
        //                {
        //                    Details.gpname = Session["ggram"].ToString();
        //                }
        //                else
        //                {
        //                    Details.gpname = Gram;
        //                }
        //            if (Session["gblock"] != null)
        //            {
        //                Details.block_name = Session["gblock"].ToString();
        //            }
        //            else
        //            {
        //                Details.block_name = Block;
        //            }


        //            if(Data1!=null)
        //            {


        //            }


        //                //Details.userid = Convert.ToInt32(Session["UserId"]);
        //                ABE.obj_abhy_baseline_gpdata.Add(Details);
        //                ABE.SaveChanges();
        //                return Json("Successfully Saved", JsonRequestBehavior.AllowGet);


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


        //abhy_socialmgt_farmers
        [HttpPost]
        public ActionResult abhy_socialmgt_farmers_Info(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<social_socialmgt_farmers>(Data);
                    var data = ABE.obj_social_socialmgt_farmers.ToList();
                    List<social_socialmgt_farmers> ddetails = new List<social_socialmgt_farmers>();
                    var State = result.state_name;
                    var Dist = result.district_name;
                    var Block = result.block_name;
                    var Gram = result.gpname;
                    var year = result.year;
                    var month = result.month;

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = ABE.obj_social_socialmgt_farmers.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == year).ToList();//total list

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

            }
        }

        public ActionResult abhy_socialmgt_farmers_Info_getting()
        {
            if (Session["UserId"] != null)
            {
                try
                {



                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();
                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    var year = Session["year"].ToString();
                    
                    List<social_socialmgt_farmers> ddetails = new List<social_socialmgt_farmers>();
                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null )
                    {
                        ddetails = ABE.obj_social_socialmgt_farmers.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == year ).ToList();//total list

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

            }
        }



        [HttpPost]
        public ActionResult Save_abhy_socialmgt_farmers_Info(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<social_socialmgt_farmers> ddetails = new List<social_socialmgt_farmers>();
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();
                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();




                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        ddetails = ABE.obj_social_socialmgt_farmers.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                    }
                    //else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    //{
                    //    ddetails = ABE.obj_social_socialmgt_farmers.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                    //}
                    //else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    //{
                    //    ddetails = ABE.obj_social_socialmgt_farmers.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                    //}
                    //else if (State != "" && State != null)
                    //{
                    //    ddetails = ABE.obj_social_socialmgt_farmers.Where(x => x.state_name == State).ToList();//total list

                    //}
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<social_socialmgt_farmers>(Data);
                    var Month = result.month;
                    var ord_month = Get_Month_Number(Month);
                    var Email = Session["Email"].ToString();
                    if (ddetails.Count == 0)
                    {


                        var Details = new social_socialmgt_farmers();

                        if (Session["gstate"] != null)
                        {
                            Details.state_name = Session["gstate"].ToString();
                        }
                        else
                        {
                            Details.state_name = State;
                        }
                        if (Session["gdist"] != null)
                        {
                            Details.district_name = Session["gdist"].ToString();
                        }
                        else
                        {
                            Details.district_name = Dist;
                        }
                        if (Session["ggram"] != null)
                        {
                            Details.gpname = Session["ggram"].ToString();
                        }
                        else
                        {
                            Details.gpname = Gram;
                        }
                        if (Session["gblock"] != null)
                        {
                            Details.block_name = Session["gblock"].ToString();
                        }
                        else
                        {
                            Details.block_name = Block;
                        }
                        if (result.year != "0" && result.year != null)
                        {
                            Details.year = result.year;
                        }
                        else
                        {
                            return Json("Please Select  Year");
                        }
                        Details.month = result.month;
                        Details.month_order_by = ord_month;
                        Details.entry_by = Email;


                        Details.large_basic_data = result.large_basic_data;
                        Details.large_pop_20_21 = result.large_pop_20_21;
                        Details.large_pop_21_22 = result.large_pop_21_22;
                        Details.large_pop_22_23 = result.large_pop_22_23;
                        Details.large_pop_23_24 = result.large_pop_23_24;
                        Details.large_pop_24_25 = result.large_pop_24_25;
                        //  Details.large_cumulative = result.large_cumulative;

                        Details.marginal_basic_data = result.marginal_basic_data;
                        Details.marginal_pop_20_21 = result.marginal_pop_20_21;
                        Details.marginal_pop_21_22 = result.marginal_pop_21_22;
                        Details.marginal_pop_22_23 = result.marginal_pop_22_23;
                        Details.marginal_pop_23_24 = result.marginal_pop_23_24;
                        Details.marginal_pop_24_25 = result.marginal_pop_24_25;
                        //Details.marginal_cumulative = result.marginal_cumulative;


                        Details.small_basic_data = result.small_basic_data;
                        Details.small_pop_20_21 = result.small_pop_20_21;
                        Details.small_pop_21_22 = result.small_pop_21_22;
                        Details.small_pop_22_23 = result.small_pop_22_23;
                        Details.small_pop_23_24 = result.small_pop_23_24;
                        Details.small_pop_24_25 = result.small_pop_24_25;


                        Details.medium_basic_data = result.medium_basic_data;
                        Details.medium_pop_20_21 = result.medium_pop_20_21;
                        Details.medium_pop_21_22 = result.medium_pop_21_22;
                        Details.medium_pop_22_23 = result.medium_pop_22_23;
                        Details.medium_pop_23_24 = result.medium_pop_23_24;
                        Details.medium_pop_24_25 = result.medium_pop_24_25;




                        Details.medium_semi_basic_data = result.medium_semi_basic_data;
                        Details.medium_semi_pop_20_21 = result.medium_semi_pop_20_21;
                        Details.medium_semi_pop_21_22 = result.medium_semi_pop_21_22;
                        Details.medium_semi_pop_22_23 = result.medium_semi_pop_22_23;
                        Details.medium_semi_pop_23_24 = result.medium_semi_pop_23_24;
                        Details.medium_semi_pop_24_25 = result.medium_semi_pop_24_25;



                        Details.userid = Convert.ToInt32(Session["UserId"]);
                        ABE.obj_social_socialmgt_farmers.Add(Details);
                        ABE.SaveChanges();
                        return Json("Successfully Saved", JsonRequestBehavior.AllowGet);
                    }
                    else
                    {
                        if (ddetails.Count == 1)
                        {
                            var Dataa = ddetails.SingleOrDefault();
                            if (Session["gstate"] != null)
                            {
                                Dataa.state_name = Session["gstate"].ToString();
                            }
                            else
                            {
                                Dataa.state_name = State;
                            }
                            if (Session["gdist"] != null)
                            {
                                Dataa.district_name = Session["gdist"].ToString();
                            }
                            else
                            {
                                Dataa.district_name = Dist;
                            }
                            if (Session["ggram"] != null)
                            {
                                Dataa.gpname = Session["ggram"].ToString();
                            }
                            else
                            {
                                Dataa.gpname = Gram;
                            }
                            if (Session["gblock"] != null)
                            {
                                Dataa.block_name = Session["gblock"].ToString();
                            }
                            else
                            {
                                Dataa.block_name = Block;
                            }



                            Dataa.year = result.year;
                            Dataa.month = result.month;
                            Dataa.month_order_by = ord_month;
                            Dataa.entry_by = Email;
                            Dataa.large_basic_data = result.large_basic_data;
                            Dataa.large_pop_20_21 = result.large_pop_20_21;
                            Dataa.large_pop_21_22 = result.large_pop_21_22;
                            Dataa.large_pop_22_23 = result.large_pop_22_23;
                            Dataa.large_pop_23_24 = result.large_pop_23_24;
                            Dataa.large_pop_24_25 = result.large_pop_24_25;



                            Dataa.marginal_basic_data = result.marginal_basic_data;
                            Dataa.marginal_pop_20_21 = result.marginal_pop_20_21;
                            Dataa.marginal_pop_21_22 = result.marginal_pop_21_22;
                            Dataa.marginal_pop_22_23 = result.marginal_pop_22_23;
                            Dataa.marginal_pop_23_24 = result.marginal_pop_23_24;
                            Dataa.marginal_pop_24_25 = result.marginal_pop_24_25;


                            Dataa.small_basic_data = result.small_basic_data;
                            Dataa.small_pop_20_21 = result.small_pop_20_21;
                            Dataa.small_pop_21_22 = result.small_pop_21_22;
                            Dataa.small_pop_22_23 = result.small_pop_22_23;
                            Dataa.small_pop_23_24 = result.small_pop_23_24;
                            Dataa.small_pop_24_25 = result.small_pop_24_25;
                            //Dataa.small_cumulative = result.small_cumulative;

                            Dataa.medium_basic_data = result.medium_basic_data;
                            Dataa.medium_pop_20_21 = result.medium_pop_20_21;
                            Dataa.medium_pop_21_22 = result.medium_pop_21_22;
                            Dataa.medium_pop_22_23 = result.medium_pop_22_23;
                            Dataa.medium_pop_23_24 = result.medium_pop_23_24;
                            Dataa.medium_pop_24_25 = result.medium_pop_24_25;



                            Dataa.medium_semi_basic_data = result.medium_semi_basic_data;
                            Dataa.medium_semi_pop_20_21 = result.medium_semi_pop_20_21;
                            Dataa.medium_semi_pop_21_22 = result.medium_semi_pop_21_22;
                            Dataa.medium_semi_pop_22_23 = result.medium_semi_pop_22_23;
                            Dataa.medium_semi_pop_23_24 = result.medium_semi_pop_23_24;
                            Dataa.medium_semi_pop_24_25 = result.medium_semi_pop_24_25;
                            //Dataa.gp_sent = false;


                            Dataa.userid = Convert.ToInt32(Session["UserId"]);
                            //ABE.obj_abhy_socialmgt_iec_activities.Add(Dataa);
                            ABE.Entry(Dataa).State = EntityState.Modified;
                            ABE.SaveChanges();
                            return Json("Successfully Updated", JsonRequestBehavior.AllowGet);
                        }
                        else
                        {
                            return Json("Duplicate data is there");
                        }

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


        public ActionResult abhy_grm_report()
        {
            if (Session["UserId"] != null)
            {
                try
                {



                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();
                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    var year = Session["year"].ToString();
                    
                    List<social_socialmgt_grm> ddetails = new List<social_socialmgt_grm>();

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null )
                    {
                        ddetails = ABE.obj_social_socialmgt_grm.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == year ).OrderByDescending(o => o.id).ToList();//total list

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

            }

        }

        public static DataTable ListToDataTable<T>(List<T> data)
        {
            PropertyDescriptorCollection properties = TypeDescriptor.GetProperties(typeof(T));
            DataTable dataTable = new DataTable();
            dataTable.TableName = "12";
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

        //Village/Ward/Commumity Meetings
        [HttpPost]
        public ActionResult abhy_socialmgt_village_meetings_Info(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<social_socialmgt_village_meetings>(Data);

                    List<social_socialmgt_village_meetings> ddetails = new List<social_socialmgt_village_meetings>();
                    var State = result.state_name;
                    var Dist = result.district_name;

                    var Block = result.block_name;
                    var Gram = result.gpname;
                    var year = result.year;
                    var month = result.month;



                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        ddetails = ABE.obj_social_socialmgt_village_meetings.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == year && x.month == month).ToList();//total list

                    }
                    //else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
                    //{
                    //    ddetails = ABE.obj_social_socialmgt_village_meetings.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == year).ToList();//total list

                    //}
                    //else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    //{
                    //    ddetails = ABE.obj_social_socialmgt_village_meetings.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                    //}
                    //else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    //{
                    //    ddetails = ABE.obj_social_socialmgt_village_meetings.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                    //}
                    //else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    //{
                    //    ddetails = ABE.obj_social_socialmgt_village_meetings.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                    //}
                    //else if (State != "" && State != null)
                    //{
                    //    ddetails = ABE.obj_social_socialmgt_village_meetings.Where(x => x.state_name == State).ToList();//total list

                    //}
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

            }
        }

        public ActionResult abhy_socialmgt_village_meetings_Info_getting()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();
                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    var year = Session["year"].ToString();
                    

                    List<social_socialmgt_village_meetings> ddetails = new List<social_socialmgt_village_meetings>();

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null )
                    {
                        ddetails = ABE.obj_social_socialmgt_village_meetings.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == year ).ToList();//total list

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

            }
        }

        [HttpPost]
        public ActionResult abhy_socialmgt_village_meetings_Info_month_meeting(string Data, string meeting_name, string month, string year)
        {
            if (Session["UserId"] != null)
            {

                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<social_socialmgt_village_meetings_vw>(Data);
                    //var ddetails = ABE.obj_social_socialmgt_village_meetings_vw.ToList();
                    List<social_socialmgt_village_meetings_vw> ddetails = new List<social_socialmgt_village_meetings_vw>();
                    var State = result.state_name;
                    var Dist = result.district_name;
                    var Block = result.block_name;
                    var Gram = result.gpname;
                    var ddlyear = result.year;
                    var ddlmonth = result.month;

                    if (State != "0")
                    {
                        if (year == "0")
                        {
                            if (meeting_name == "0" && month == "0")
                            {

                                if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && ddlyear != "0" && ddlyear != "" && ddlyear != null && ddlmonth != "0" && ddlmonth != "" && ddlmonth != null)
                                {
                                    ddetails = ABE.obj_social_socialmgt_village_meetings_vw.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == ddlyear && x.month == ddlmonth).ToList();//total list

                                }
                                //else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                                //{
                                //    ddetails = ABE.obj_social_socialmgt_village_meetings_vw.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                                //}
                                //else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                                //{
                                //    ddetails = ABE.obj_social_socialmgt_village_meetings_vw.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                                //}
                                //else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                                //{
                                //    ddetails = ABE.obj_social_socialmgt_village_meetings_vw.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                                //}
                                //else if (State != "" && State != null)
                                //{
                                //    ddetails = ABE.obj_social_socialmgt_village_meetings_vw.Where(x => x.state_name == State).ToList();//total list

                                //}
                            }
                            if (meeting_name != "0" && month == "0")
                            {

                                if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && ddlyear != "0" && ddlyear != "" && ddlyear != null && ddlmonth != "0" && ddlmonth != "" && ddlmonth != null)
                                {
                                    ddetails = ABE.obj_social_socialmgt_village_meetings_vw.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == ddlyear && x.month == ddlmonth && x.name_of_meeting == meeting_name).ToList();//total list

                                }
                                //else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                                //{
                                //    ddetails = ABE.obj_social_socialmgt_village_meetings_vw.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.name_of_meeting == meeting_name).ToList();//total list

                                //}
                                //else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                                //{
                                //    ddetails = ABE.obj_social_socialmgt_village_meetings_vw.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.name_of_meeting == meeting_name).ToList();//total list

                                //}
                                //else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                                //{
                                //    ddetails = ABE.obj_social_socialmgt_village_meetings_vw.Where(x => x.state_name == State && x.district_name == Dist && x.name_of_meeting == meeting_name).ToList();//total list

                                //}
                                //else if (State != "0" && State != "" && State != null)
                                //{
                                //    ddetails = ABE.obj_social_socialmgt_village_meetings_vw.Where(x => x.state_name == State && x.name_of_meeting == meeting_name).ToList();//total list

                                //}
                            }
                            if (meeting_name == "0" && month != "0")
                            {


                                if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && ddlyear != "0" && ddlyear != "" && ddlyear != null)
                                {
                                    ddetails = ABE.obj_social_socialmgt_village_meetings_vw.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == ddlyear && x.fymonth == month && x.fyyear == year).ToList();//total list

                                }
                                //else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                                //{
                                //    ddetails = ABE.obj_social_socialmgt_village_meetings_vw.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.fymonth == month && x.fyyear == year).ToList();//total list

                                //}
                                //else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                                //{
                                //    ddetails = ABE.obj_social_socialmgt_village_meetings_vw.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.fymonth == month && x.fyyear == year).ToList();//total list

                                //}
                                //else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                                //{
                                //    ddetails = ABE.obj_social_socialmgt_village_meetings_vw.Where(x => x.state_name == State && x.district_name == Dist && x.gpname == Gram && x.fymonth == month && x.fyyear == year).ToList();//total list

                                //}
                                //else if (State != "" && State != null)
                                //{
                                //    ddetails = ABE.obj_social_socialmgt_village_meetings_vw.Where(x => x.state_name == State && x.gpname == Gram && x.fymonth == month && x.fyyear == year).ToList();//total list

                                //}
                            }
                            if (meeting_name != "0" && month != "0")
                            {

                                if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && ddlyear != "0" && ddlyear != "" && ddlyear != null)
                                {
                                    ddetails = ABE.obj_social_socialmgt_village_meetings_vw.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == ddlyear && x.name_of_meeting == meeting_name && x.fymonth == month && x.fyyear == year).ToList();//total list

                                }
                                //else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                                //{
                                //    ddetails = ABE.obj_social_socialmgt_village_meetings_vw.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.name_of_meeting == meeting_name && x.fymonth == month && x.fyyear == year).ToList();//total list

                                //}
                                //else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                                //{
                                //    ddetails = ABE.obj_social_socialmgt_village_meetings_vw.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.name_of_meeting == meeting_name && x.fymonth == month && x.fyyear == year).ToList();//total list

                                //}
                                //else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                                //{
                                //    ddetails = ABE.obj_social_socialmgt_village_meetings_vw.Where(x => x.state_name == State && x.district_name == Dist && x.name_of_meeting == meeting_name && x.fymonth == month && x.fyyear == year).ToList();//total list

                                //}
                                //else if (State != "" && State != null)
                                //{
                                //    ddetails = ABE.obj_social_socialmgt_village_meetings_vw.Where(x => x.state_name == State && x.name_of_meeting == meeting_name && x.fymonth == month && x.fyyear == year).ToList();//total list

                                //}
                            }
                        }
                        else
                        {
                            if (meeting_name == "0" && month == "0")
                            {

                                if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                                {
                                    ddetails = ABE.obj_social_socialmgt_village_meetings_vw.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.fyyear == year).ToList();//total list

                                }
                                //else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                                //{
                                //    ddetails = ABE.obj_social_socialmgt_village_meetings_vw.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.fyyear == year).ToList();//total list

                                //}
                                //else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                                //{
                                //    ddetails = ABE.obj_social_socialmgt_village_meetings_vw.Where(x => x.state_name == State && x.district_name == Dist && x.fyyear == year).ToList();//total list

                                //}
                                //else if (State != "" && State != null)
                                //{
                                //    ddetails = ABE.obj_social_socialmgt_village_meetings_vw.Where(x => x.state_name == State && x.fyyear == year).ToList();//total list

                                //}
                            }
                            if (meeting_name != "0" && month == "0")
                            {

                                if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                                {
                                    ddetails = ABE.obj_social_socialmgt_village_meetings_vw.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.name_of_meeting == meeting_name && x.fyyear == year).ToList();//total list

                                }
                                //else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                                //{
                                //    ddetails = ABE.obj_social_socialmgt_village_meetings_vw.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.name_of_meeting == meeting_name && x.fyyear == year).ToList();//total list

                                //}
                                //else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                                //{
                                //    ddetails = ABE.obj_social_socialmgt_village_meetings_vw.Where(x => x.state_name == State && x.district_name == Dist && x.name_of_meeting == meeting_name && x.fyyear == year).ToList();//total list

                                //}
                                //else if (State != "" && State != null)
                                //{
                                //    ddetails = ABE.obj_social_socialmgt_village_meetings_vw.Where(x => x.state_name == State && x.name_of_meeting == meeting_name && x.fyyear == year).ToList();//total list

                                //}
                            }
                            if (meeting_name == "0" && month != "0")
                            {


                                if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                                {
                                    ddetails = ABE.obj_social_socialmgt_village_meetings_vw.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.fymonth == month && x.fyyear == year).ToList();//total list

                                }
                                //else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                                //{
                                //    ddetails = ABE.obj_social_socialmgt_village_meetings_vw.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.fymonth == month && x.fyyear == year).ToList();//total list

                                //}
                                //else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                                //{
                                //    ddetails = ABE.obj_social_socialmgt_village_meetings_vw.Where(x => x.state_name == State && x.district_name == Dist && x.gpname == Gram && x.fymonth == month && x.fyyear == year).ToList();//total list

                                //}
                                //else if (State != "" && State != null)
                                //{
                                //    ddetails = ABE.obj_social_socialmgt_village_meetings_vw.Where(x => x.state_name == State && x.gpname == Gram && x.fymonth == month && x.fyyear == year).ToList();//total list

                                //}
                            }
                            if (meeting_name != "0" && month != "0")
                            {

                                if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                                {
                                    ddetails = ABE.obj_social_socialmgt_village_meetings_vw.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.name_of_meeting == meeting_name && x.fymonth == month && x.fyyear == year).ToList();//total list

                                }
                                //else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                                //{
                                //    ddetails = ABE.obj_social_socialmgt_village_meetings_vw.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.name_of_meeting == meeting_name && x.fymonth == month && x.fyyear == year).ToList();//total list

                                //}
                                //else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                                //{
                                //    ddetails = ABE.obj_social_socialmgt_village_meetings_vw.Where(x => x.state_name == State && x.district_name == Dist && x.name_of_meeting == meeting_name && x.fymonth == month && x.fyyear == year).ToList();//total list

                                //}
                                //else if (State != "" && State != null)
                                //{
                                //    ddetails = ABE.obj_social_socialmgt_village_meetings_vw.Where(x => x.state_name == State && x.name_of_meeting == meeting_name && x.fymonth == month && x.fyyear == year).ToList();//total list

                                //}
                            }
                        }
                        DataTable dt = ListToDataTable(ddetails);
                        return Json(ddetails, JsonRequestBehavior.AllowGet);
                    }
                    else
                    {
                        return Json("", JsonRequestBehavior.AllowGet);
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

        //[HttpPost] 
        //public ActionResult Save_Gp_Level_Data(string date_training, string year, string month, string topic_training, string location, string SC, string ST, string OBC, string General, int male_population, int female_population, int other_population, int total_participants, HttpPostedFileBase atten_sheet, HttpPostedFileBase photograph, HttpPostedFileBase feedback)
        //{

        //    if (Session["UserId"] != null)
        //    {
        //        try
        //        {
        //            List<socialmon_traininggp> ddetails = new List<socialmon_traininggp>();
        //            var userid = Convert.ToInt32(Session["UserId"]);
        //            var State = Session["gstate"].ToString();
        //            var Dist = Session["gdist"].ToString();
        //            var Block = Session["gblock"].ToString();
        //            var Gram = Session["ggram"].ToString();

        //            if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
        //            {
        //                ddetails = ABE.obj_socialmon_traininggp.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).OrderByDescending(o => o.id).ToList();//total list

        //            }
        //            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
        //            {
        //                ddetails = ABE.obj_socialmon_traininggp.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).OrderByDescending(o => o.id).ToList();//total list

        //            }
        //            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
        //            {
        //                ddetails = ABE.obj_socialmon_traininggp.Where(x => x.state_name == State && x.district_name == Dist).OrderByDescending(o => o.id).ToList();//total list

        //            }
        //            else if (State != "" && State != null)
        //            {
        //                ddetails = ABE.obj_socialmon_traininggp.Where(x => x.state_name == State).OrderByDescending(o => o.id).ToList();//total list

        //            }

        //            Malicious_File_Upload_Restriction obj_Validate = new Malicious_File_Upload_Restriction();


        //            var Details = new socialmon_traininggp();

        //            if (Session["gstate"] != null)
        //            {
        //                Details.state_name = Session["gstate"].ToString();
        //            }
        //            else
        //            {
        //                Details.state_name = State;
        //            }
        //            if (Session["gdist"] != null)
        //            {
        //                Details.district_name = Session["gdist"].ToString();
        //            }
        //            else
        //            {
        //                Details.district_name = Dist;
        //            }
        //            if (Session["ggram"] != null)
        //            {
        //                Details.gpname = Session["ggram"].ToString();
        //            }
        //            else
        //            {
        //                Details.gpname = Gram;
        //            }
        //            if (Session["gblock"] != null)
        //            {
        //                Details.block_name = Session["gblock"].ToString();
        //            }
        //            else
        //            {
        //                Details.block_name = Block;
        //            }

        //            if (location != "" && location != null)
        //            {
        //                Details.location = location;
        //            }
        //            else
        //            {
        //                return Json("Please Enter Location Name");
        //            }


        //            Details.topic_training = topic_training;
        //            Details.location = location;
        //            Details.date_training = date_training;
        //            Details.male_population = male_population;
        //            Details.female_population = female_population;
        //            Details.other_population = other_population;
        //            Details.total_participants = total_participants;
        //            Details.SC = SC;
        //            Details.ST = ST;
        //            Details.OBC = OBC;
        //            Details.General = General;
        //            Details.year = year;
        //            Details.month = month;
        //            Details.month_order_by = Get_Month_Number(month);
        //            Details.entry_by = Session["Email"].ToString();

        //            if (atten_sheet != null)
        //            {

        //                if (atten_sheet.FileName != null)
        //                {
        //                    String FileExt = Path.GetExtension(atten_sheet.FileName).ToUpper();

        //                    if (FileExt != ".PDF" && FileExt != ".JPG" && FileExt != ".DOC")
        //                    {
        //                        return Json("Choose Valid file for Upload attendance sheet of the participant", JsonRequestBehavior.AllowGet);

        //                    }
        //                    string BasePath = AppDomain.CurrentDomain.BaseDirectory;
        //                    string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");
        //                    path = path + atten_sheet.FileName;
        //                    string[] count = atten_sheet.FileName.Split('.');
        //                    if (count.Length != 2)
        //                    {
        //                        return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
        //                    }
        //                    atten_sheet.SaveAs(path);
        //                    Details.atten_sheet_filename = atten_sheet.FileName;
        //                    Details.atten_sheet = "/Ataljalimages/" + atten_sheet.FileName;

        //                }
        //            }

        //            if (photograph != null)
        //            {

        //                if (photograph.FileName != null)
        //                {
        //                    String FileExt = Path.GetExtension(photograph.FileName).ToUpper();

        //                    if (FileExt != ".PNG" && FileExt != ".JPG")
        //                    {
        //                        return Json("Choose Valid file for Upload Photograph of the training", JsonRequestBehavior.AllowGet);

        //                    }
        //                    string BasePath = AppDomain.CurrentDomain.BaseDirectory;
        //                    string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");
        //                    path = path + photograph.FileName;
        //                    string[] count = photograph.FileName.Split('.');
        //                    if (count.Length != 2)
        //                    {
        //                        return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
        //                    }
        //                    atten_sheet.SaveAs(path);
        //                    Details.photograph_filename = photograph.FileName;
        //                    Details.photograph = "/Ataljalimages/" + photograph.FileName;

        //                }
        //            }
        //            if (feedback != null)
        //            {

        //                if (feedback.FileName != null)
        //                {
        //                    String FileExt = Path.GetExtension(feedback.FileName).ToUpper();

        //                    if (FileExt != ".PDF" && FileExt != ".JPG" && FileExt != ".DOC")
        //                    {
        //                        return Json("Choose Valid file Feedback from Participants on prescribed format", JsonRequestBehavior.AllowGet);

        //                    }
        //                    string BasePath = AppDomain.CurrentDomain.BaseDirectory;
        //                    string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");
        //                    path = path + feedback.FileName;
        //                    string[] count = feedback.FileName.Split('.');
        //                    if (count.Length != 2)
        //                    {
        //                        return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
        //                    }
        //                    atten_sheet.SaveAs(path);
        //                    Details.feedback_filename = feedback.FileName;
        //                    Details.feedback = "/Ataljalimages/" + feedback.FileName;

        //                }
        //            }



        //            //Details.userid = Convert.ToInt32(Session["UserId"]);
        //            ABE.obj_socialmon_traininggp.Add(Details);
        //            ABE.SaveChanges();
        //            return Json("Successfully Saved", JsonRequestBehavior.AllowGet);


        //        }
        //        catch (Exception Ex)
        //        {
        //            return Json("Unable to save data", JsonRequestBehavior.AllowGet);
        //        }
        //    }
        //    else
        //    {
        //        return Json("Logout", JsonRequestBehavior.AllowGet);
        //    }

        //}

        [HttpPost]
        public ActionResult Save_abhy_socialmgt_village_meetings_Info(string name_of_meeting, string year, string month, string curr_date, string other_name_of_meeting, string location, string prior_info, string noof_attendees, string male, string female, string other, string total, string disaggregated_data, string no_of_sc, string no_of_st, string no_of_gen, string no_of_obc, string key_issues, HttpPostedFileBase mom, HttpPostedFileBase photographs)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<social_socialmgt_village_meetings> ddetails = new List<social_socialmgt_village_meetings>();
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        ddetails = ABE.obj_social_socialmgt_village_meetings.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).OrderByDescending(o => o.id).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        ddetails = ABE.obj_social_socialmgt_village_meetings.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).OrderByDescending(o => o.id).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        ddetails = ABE.obj_social_socialmgt_village_meetings.Where(x => x.state_name == State && x.district_name == Dist).OrderByDescending(o => o.id).ToList();//total list

                    }
                    else if (State != "" && State != null)
                    {
                        ddetails = ABE.obj_social_socialmgt_village_meetings.Where(x => x.state_name == State).OrderByDescending(o => o.id).ToList();//total list

                    }

                    Malicious_File_Upload_Restriction obj_Validate = new Malicious_File_Upload_Restriction();
                    //   string allowed_file_format = "jpg,png,jpeg";


                    var Details = new social_socialmgt_village_meetings();

                    if (Session["gstate"] != null)
                    {
                        Details.state_name = Session["gstate"].ToString();
                    }
                    else
                    {
                        Details.state_name = State;
                    }
                    if (Session["gdist"] != null)
                    {
                        Details.district_name = Session["gdist"].ToString();
                    }
                    else
                    {
                        Details.district_name = Dist;
                    }
                    if (Session["ggram"] != null)
                    {
                        Details.gpname = Session["ggram"].ToString();
                    }
                    else
                    {
                        Details.gpname = Gram;
                    }
                    if (Session["gblock"] != null)
                    {
                        Details.block_name = Session["gblock"].ToString();
                    }
                    else
                    {
                        Details.block_name = Block;
                    }

                    if (location != "" && location != null)
                    {
                        Details.location = location;
                    }
                    else
                    {
                        return Json("Please Enter Location Name");
                    }


                    Details.prior_info = prior_info;
                    Details.other_name_of_meeting = other_name_of_meeting;
                    Details.noof_attendees = noof_attendees;
                    Details.male = male;
                    Details.female = female;
                    Details.other = other;
                    Details.no_of_st_st = no_of_st;
                    Details.no_of_sc_sc = no_of_sc;
                    Details.no_of_gen = no_of_gen;
                    Details.no_of_obc = no_of_obc;
                    Details.year = year;
                    Details.month = month;
                    Details.month_order_by = Get_Month_Number(month);
                    Details.entry_by = Session["Email"].ToString();
                    // Details.total = total;

                    var male1 = 0;
                    var female1 = 0;
                    var other1 = 0;
                    if (male != null && male != "")
                    {
                        male1 = Convert.ToInt32(male);
                    }
                    if (female != null && female != "")
                    {
                        female1 = Convert.ToInt32(female);
                    }
                    if (other != null && other != "")
                    {
                        other1 = Convert.ToInt32(other);
                    }
                    var Total = male1 + female1 + other1;
                    Details.total = Total.ToString();

                    Details.disaggregated_data = disaggregated_data;

                    Details.key_issues = key_issues;
                    if (mom != null)
                    {

                        if (mom.FileName != null)
                        {
                            String FileExt = Path.GetExtension(mom.FileName).ToUpper();

                            if (FileExt != ".PDF" && FileExt != ".JPG" && FileExt != ".DOC")
                            {
                                return Json("Choose Valid image", JsonRequestBehavior.AllowGet);

                            }
                            string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                            string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");
                            path = path + mom.FileName;
                            string[] count = mom.FileName.Split('.');
                            if (count.Length != 2)
                            {
                                return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                            }
                            mom.SaveAs(path);
                            Details.mom_filename = mom.FileName;
                            Details.mom = "/Ataljalimages/" + mom.FileName;

                        }
                    }

                    if (photographs != null)
                    {

                        if (photographs.FileName != null)
                        {
                            String FileExt = Path.GetExtension(photographs.FileName).ToUpper();
                            if (FileExt != ".JPG" && FileExt != ".PNG")
                            {
                                return Json("Choose Valid image", JsonRequestBehavior.AllowGet);

                            }
                            string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                            string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");
                            path = path + photographs.FileName;
                            string[] count = photographs.FileName.Split('.');
                            if (count.Length != 2)
                            {
                                return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                            }
                            photographs.SaveAs(path);
                            Details.photographs_filename = photographs.FileName;
                            Details.photographs = "/Ataljalimages/" + photographs.FileName;

                        }
                    }

                    if (name_of_meeting != "" && name_of_meeting != null)
                    {
                        Details.name_of_meeting = name_of_meeting;
                    }
                    else
                    {
                        return Json("Please Enter Meeting Name");
                    }
                    //DateTime curr_date_d = Convert.ToDateTime(curr_date);
                    Details.curr_date = curr_date;

                    Details.userid = Convert.ToInt32(Session["UserId"]);
                    ABE.obj_social_socialmgt_village_meetings.Add(Details);
                    ABE.SaveChanges();
                    return Json("Successfully Saved", JsonRequestBehavior.AllowGet);


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

        //Community Feedback (suggestive list)

        [HttpPost]
        public ActionResult Save_abhy_socialmgt_community_feedback_Info(HttpPostedFileBase community_feedback)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_socialmgt_community_feedback> ddetails = new List<abhy_socialmgt_community_feedback>();
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_community_feedback.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_community_feedback.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_community_feedback.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                    }
                    else if (State != "" && State != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_community_feedback.Where(x => x.state_name == State).ToList();//total list

                    }
                    Malicious_File_Upload_Restriction obj_Validate = new Malicious_File_Upload_Restriction();
                    string allowed_file_format = "jpg,png,jpeg,doc,docx,pdf";

                    if (ddetails.Count == 0)
                    {


                        var Details = new abhy_socialmgt_community_feedback();

                        if (Session["gstate"] != null)
                        {
                            Details.state_name = Session["gstate"].ToString();
                        }
                        else
                        {
                            Details.state_name = State;
                        }
                        if (Session["gdist"] != null)
                        {
                            Details.district_name = Session["gdist"].ToString();
                        }
                        else
                        {
                            Details.district_name = Dist;
                        }
                        if (Session["ggram"] != null)
                        {
                            Details.gpname = Session["ggram"].ToString();
                        }
                        else
                        {
                            Details.gpname = Gram;
                        }
                        if (Session["gblock"] != null)
                        {
                            Details.block_name = Session["gblock"].ToString();
                        }
                        else
                        {
                            Details.block_name = Block;
                        }



                        if (community_feedback != null)
                        {
                            bool flag = obj_Validate.CheckValidFile(community_feedback, allowed_file_format);
                            if (flag == false)
                            {
                                return Json("Your Upload file has Not valid File, Please Upload proper file", JsonRequestBehavior.AllowGet);
                            }
                            if (community_feedback.FileName != null)
                            {
                                String FileExt = Path.GetExtension(community_feedback.FileName).ToUpper();

                                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");
                                path = path + community_feedback.FileName;
                                string[] count = community_feedback.FileName.Split('.');
                                if (count.Length != 2)
                                {
                                    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                }
                                community_feedback.SaveAs(path);
                                Details.community_feedback_filename = community_feedback.FileName;
                                Details.community_feedback = "/Ataljalimages/" + community_feedback.FileName;

                            }
                        }

                        Details.userid = Convert.ToInt32(Session["UserId"]);
                        ABE.obj_abhy_socialmgt_community_feedback.Add(Details);
                        ABE.SaveChanges();
                        return Json("Successfully Saved", JsonRequestBehavior.AllowGet);
                    }
                    else
                    {
                        if (ddetails.Count == 1)
                        {

                            var Dataa = ddetails.SingleOrDefault();
                            if (Session["gstate"] != null)
                            {
                                Dataa.state_name = Session["gstate"].ToString();
                            }
                            else
                            {
                                Dataa.state_name = State;
                            }
                            if (Session["gdist"] != null)
                            {
                                Dataa.district_name = Session["gdist"].ToString();
                            }
                            else
                            {
                                Dataa.district_name = Dist;
                            }
                            if (Session["ggram"] != null)
                            {
                                Dataa.gpname = Session["ggram"].ToString();
                            }
                            else
                            {
                                Dataa.gpname = Gram;
                            }
                            if (Session["gblock"] != null)
                            {
                                Dataa.block_name = Session["gblock"].ToString();
                            }
                            else
                            {
                                Dataa.block_name = Block;
                            }
                            if (community_feedback != null)
                            {
                                bool flag = obj_Validate.CheckValidFile(community_feedback, allowed_file_format);
                                if (flag == false)
                                {
                                    return Json("Your Upload file has Not valid File, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                }
                                if (community_feedback.FileName != null)
                                {
                                    String FileExt = Path.GetExtension(community_feedback.FileName).ToUpper();

                                    string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                    string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");
                                    path = path + community_feedback.FileName;
                                    string[] count = community_feedback.FileName.Split('.');
                                    if (count.Length != 2)
                                    {
                                        return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                    }
                                    community_feedback.SaveAs(path);
                                    Dataa.community_feedback = "/Ataljalimages/" + community_feedback.FileName;

                                }
                            }


                            Dataa.userid = Convert.ToInt32(Session["UserId"]);
                            //ABE.obj_abhy_socialmgt_iec_activities.Add(Dataa);
                            ABE.Entry(Dataa).State = EntityState.Modified;
                            ABE.SaveChanges();
                            return Json("Successfully Saved", JsonRequestBehavior.AllowGet);
                        }
                        else
                        {
                            return Json("Duplicate Data is there");
                        }


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

        //CAPACITY BUILDING & TRAINING
        [HttpPost]
        public ActionResult Save_abhy_socialmgt_capacity_building_Info(HttpPostedFileBase training_schedule, HttpPostedFileBase training_materials, HttpPostedFileBase noof_trainings, HttpPostedFileBase training_report, HttpPostedFileBase achievements, HttpPostedFileBase findings_of_survey, HttpPostedFileBase actual_training, string training_date, string name_of_training, string training_location)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_socialmgt_capacity_building> ddetails = new List<abhy_socialmgt_capacity_building>();
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_capacity_building.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_capacity_building.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_capacity_building.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                    }
                    else if (State != "" && State != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_capacity_building.Where(x => x.state_name == State).ToList();//total list

                    }




                    var Details = new abhy_socialmgt_capacity_building();

                    if (Session["gstate"] != null)
                    {
                        Details.state_name = Session["gstate"].ToString();
                    }
                    else
                    {
                        Details.state_name = State;
                    }
                    if (Session["gdist"] != null)
                    {
                        Details.district_name = Session["gdist"].ToString();
                    }
                    else
                    {
                        Details.district_name = Dist;
                    }
                    if (Session["ggram"] != null)
                    {
                        Details.gpname = Session["ggram"].ToString();
                    }
                    else
                    {
                        Details.gpname = Gram;
                    }
                    if (Session["gblock"] != null)
                    {
                        Details.block_name = Session["gblock"].ToString();
                    }
                    else
                    {
                        Details.block_name = Block;
                    }
                    Malicious_File_Upload_Restriction obj_Validate = new Malicious_File_Upload_Restriction();
                    string allowed_file_format = "jpg,png,jpeg,doc,docx,pdf";
                    if (training_schedule != null)
                    {
                        string ext = Path.GetExtension(training_schedule.FileName);
                        string name = Path.GetFileNameWithoutExtension(training_schedule.FileName);
                        string FileName = name + DateTime.Now.Ticks + ext;
                        bool flag = obj_Validate.CheckValidFile(training_schedule, allowed_file_format);
                        if (flag == false)
                        {
                            return Json("Your Upload file has Not valid File, Please Upload proper file", JsonRequestBehavior.AllowGet);
                        }
                        if (training_schedule.FileName != null)
                        {
                            String FileExt = Path.GetExtension(training_schedule.FileName).ToUpper();

                            string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                            string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");
                            path = path + FileName;
                            string[] count = training_schedule.FileName.Split('.');
                            if (count.Length != 2)
                            {
                                return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                            }
                            training_schedule.SaveAs(path);
                            Details.train_schedule_filename = FileName;
                            Details.training_schedule = "/Ataljalimages/" + FileName;

                        }
                    }
                    if (training_materials != null)
                    {
                        string ext = Path.GetExtension(training_materials.FileName);
                        string name = Path.GetFileNameWithoutExtension(training_materials.FileName);
                        string FileName = name + DateTime.Now.Ticks + ext;
                        bool flag1 = obj_Validate.CheckValidFile(training_materials, allowed_file_format);
                        if (flag1 == false)
                        {
                            return Json("Your Upload file has Not valid File, Please Upload proper file", JsonRequestBehavior.AllowGet);
                        }
                        if (training_materials.FileName != null)
                        {
                            String FileExt = Path.GetExtension(training_materials.FileName).ToUpper();

                            string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                            string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");
                            path = path + FileName;
                            string[] count = training_materials.FileName.Split('.');
                            if (count.Length != 2)
                            {
                                return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                            }
                            training_materials.SaveAs(path);
                            Details.train_materials_filename = FileName;
                            Details.training_materials = "/Ataljalimages/" + FileName;

                        }
                    }

                    if (noof_trainings != null)
                    {
                        string ext = Path.GetExtension(noof_trainings.FileName);
                        string name = Path.GetFileNameWithoutExtension(noof_trainings.FileName);
                        string FileName = name + DateTime.Now.Ticks + ext;
                        bool flag2 = obj_Validate.CheckValidFile(noof_trainings, allowed_file_format);
                        if (flag2 == false)
                        {
                            return Json("Your Upload file has Not valid File, Please Upload proper file", JsonRequestBehavior.AllowGet);
                        }
                        if (noof_trainings.FileName != null)
                        {
                            String FileExt = Path.GetExtension(noof_trainings.FileName).ToUpper();

                            string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                            string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");
                            path = path + FileName;
                            string[] count = noof_trainings.FileName.Split('.');
                            if (count.Length != 2)
                            {
                                return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                            }
                            noof_trainings.SaveAs(path);
                            Details.nooftrain_filename = FileName;
                            Details.noof_trainings = "/Ataljalimages/" + FileName;

                        }
                    }

                    if (training_report != null)
                    {
                        string ext = Path.GetExtension(training_report.FileName);
                        string name = Path.GetFileNameWithoutExtension(training_report.FileName);
                        string FileName = name + DateTime.Now.Ticks + ext;
                        bool flag3 = obj_Validate.CheckValidFile(training_report, allowed_file_format);
                        if (flag3 == false)
                        {
                            return Json("Your Upload file has Not valid File, Please Upload proper file", JsonRequestBehavior.AllowGet);
                        }
                        if (training_report.FileName != null)
                        {
                            String FileExt = Path.GetExtension(training_report.FileName).ToUpper();

                            string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                            string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");
                            path = path + FileName;
                            string[] count = training_report.FileName.Split('.');
                            if (count.Length != 2)
                            {
                                return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                            }
                            training_report.SaveAs(path);
                            Details.training_report_filename = FileName;
                            Details.training_report = "/Ataljalimages/" + FileName;

                        }
                    }

                    if (achievements != null)
                    {
                        string ext = Path.GetExtension(achievements.FileName);
                        string name = Path.GetFileNameWithoutExtension(achievements.FileName);
                        string FileName = name + DateTime.Now.Ticks + ext;
                        bool flag4 = obj_Validate.CheckValidFile(achievements, allowed_file_format);
                        if (flag4 == false)
                        {
                            return Json("Your Upload file has Not valid File, Please Upload proper file", JsonRequestBehavior.AllowGet);
                        }
                        if (achievements.FileName != null)
                        {
                            String FileExt = Path.GetExtension(achievements.FileName).ToUpper();

                            string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                            string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");
                            path = path + FileName;
                            string[] count = achievements.FileName.Split('.');
                            if (count.Length != 2)
                            {
                                return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                            }
                            achievements.SaveAs(path);
                            Details.achievements_filename = FileName;
                            Details.achievements = "/Ataljalimages/" + FileName;

                        }
                    }


                    if (findings_of_survey != null)
                    {
                        string ext = Path.GetExtension(findings_of_survey.FileName);
                        string name = Path.GetFileNameWithoutExtension(findings_of_survey.FileName);
                        string FileName = name + DateTime.Now.Ticks + ext;
                        bool flag5 = obj_Validate.CheckValidFile(findings_of_survey, allowed_file_format);
                        if (flag5 == false)
                        {
                            return Json("Your Upload file has Not valid File, Please Upload proper file", JsonRequestBehavior.AllowGet);
                        }
                        if (findings_of_survey.FileName != null)
                        {
                            String FileExt = Path.GetExtension(findings_of_survey.FileName).ToUpper();

                            string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                            string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");
                            path = path + FileName;
                            string[] count = findings_of_survey.FileName.Split('.');
                            if (count.Length != 2)
                            {
                                return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                            }
                            findings_of_survey.SaveAs(path);
                            Details.findings_filename = FileName;
                            Details.findings_of_survey = "/Ataljalimages/" + FileName;

                        }
                    }

                    if (actual_training != null)
                    {
                        string ext = Path.GetExtension(actual_training.FileName);
                        string name = Path.GetFileNameWithoutExtension(actual_training.FileName);
                        string FileName = name + DateTime.Now.Ticks + ext;
                        bool flag6 = obj_Validate.CheckValidFile(actual_training, allowed_file_format);
                        if (flag6 == false)
                        {
                            return Json("Your Upload file has Not valid File, Please Upload proper file", JsonRequestBehavior.AllowGet);
                        }
                        if (actual_training.FileName != null)
                        {
                            String FileExt = Path.GetExtension(actual_training.FileName).ToUpper();

                            string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                            string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");
                            path = path + FileName;
                            string[] count = actual_training.FileName.Split('.');
                            if (count.Length != 2)
                            {
                                return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                            }
                            actual_training.SaveAs(path);

                            Details.actual_training = "/Ataljalimages/" + FileName;

                        }
                    }

                    if (name_of_training != null && name_of_training != "")
                    {
                        Details.name_of_training = name_of_training;
                    }
                    else
                    {
                        return Json("Please Enter Training Name");
                    }

                    if (training_location != null && training_location != "")
                    {
                        Details.training_location = training_location;
                    }
                    else
                    {
                        return Json("Please Enter Training Location");
                    }
                    Details.training_date = training_date;

                    Details.userid = Convert.ToInt32(Session["UserId"]);
                    ABE.obj_abhy_socialmgt_capacity_building.Add(Details);
                    ABE.SaveChanges();
                    return Json("Successfully Saved", JsonRequestBehavior.AllowGet);


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

        //Community Feedback (suggestive list)
        [HttpGet]
        public ActionResult abhy_socialmgt_community_feedback_Info()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_socialmgt_community_feedback> ddetails = new List<abhy_socialmgt_community_feedback>();
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_community_feedback.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_community_feedback.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_community_feedback.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                    }
                    else if (State != "" && State != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_community_feedback.Where(x => x.state_name == State).ToList();//total list

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

            }
        }

        //CAPACITY BUILDING & TRAINING

        [HttpPost]
        public ActionResult abhy_socialmgt_capacity_building_Info(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_socialmgt_capacity_building>(Data);

                    List<abhy_socialmgt_capacity_building> ddetails = new List<abhy_socialmgt_capacity_building>();
                    var State = result.state_name;
                    var Dist = result.district_name;

                    var Block = result.block_name;
                    var Gram = result.gpname;
                    var year = result.year;





                    //List<abhy_socialmgt_capacity_building> ddetails = new List<abhy_socialmgt_capacity_building>();
                    //var userid = Convert.ToInt32(Session["UserId"]);
                    //var State = Session["gstate"].ToString();
                    //var Dist = Session["gdist"].ToString();

                    //var Block = Session["gblock"].ToString();
                    //var Gram = Session["ggram"].ToString();
                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_capacity_building.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == year).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_capacity_building.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_capacity_building.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_capacity_building.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                    }
                    else if (State != "" && State != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_capacity_building.Where(x => x.state_name == State).ToList();//total list

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

            }
        }


        //GRM

        [HttpPost]
        public ActionResult abhy_GRM_Info(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<social_socialmgt_grm>(Data);
                    var data = ABE.obj_social_socialmgt_grm.ToList();
                    List<social_socialmgt_grm> ddetails = new List<social_socialmgt_grm>();
                    var State = result.state_name;
                    var Dist = result.district_name;
                    var Block = result.block_name;
                    var Gram = result.gpname;
                    var year = result.year;
                    var month = result.month;

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        ddetails = ABE.obj_social_socialmgt_grm.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == year && x.month == month).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        ddetails = ABE.obj_social_socialmgt_grm.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        ddetails = ABE.obj_social_socialmgt_grm.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        ddetails = ABE.obj_social_socialmgt_grm.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                    }
                    else if (State != "" && State != null)
                    {
                        ddetails = ABE.obj_social_socialmgt_grm.Where(x => x.state_name == State).ToList();//total list

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

            }
        }

        public ActionResult abhy_GRM_Info_new(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<social_socialmgt_grm>(Data);
                    var data = ABE.obj_social_socialmgt_grm.ToList();
                    List<social_socialmgt_grm> ddetails = new List<social_socialmgt_grm>();
                    var State = result.state_name;
                    var Dist = result.district_name;
                    var Block = result.block_name;
                    var Gram = result.gpname;
                    var year = result.year;
                    var month = result.month;

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = ABE.obj_social_socialmgt_grm.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == year).ToList();//total list

                    }
                    //else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
                    //{
                    //    ddetails = ABE.obj_social_socialmgt_grm.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == year).ToList();//total list

                    //}
                    //else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    //{
                    //    ddetails = ABE.obj_social_socialmgt_grm.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                    //}
                    //else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    //{
                    //    ddetails = ABE.obj_social_socialmgt_grm.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                    //}
                    //else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    //{
                    //    ddetails = ABE.obj_social_socialmgt_grm.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                    //}
                    //else if (State != "" && State != null)
                    //{
                    //    ddetails = ABE.obj_social_socialmgt_grm.Where(x => x.state_name == State).ToList();//total list

                    //}
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

            }
        }

        public ActionResult date_find(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<social_socialmgt_other_local_institues>(Data);
                    var data = ABE.obj_social_socialmgt_other_local_institues.ToList();
                    List<social_socialmgt_other_local_institues> ddetails = new List<social_socialmgt_other_local_institues>();
                    var State = result.state_name;
                    var Dist = result.district_name;
                    var Block = result.block_name;
                    var Gram = result.gpname;
                    var year = result.year;
                    var month = result.month;
                    var asso = result.comm_name;

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null && asso != "0" && asso != "" && asso != null)
                    {
                        ddetails = ABE.obj_social_socialmgt_other_local_institues.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == year && x.month == month && x.comm_name == asso).ToList();//total list

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

            }
        }


        [HttpPost]
        public ActionResult Save_abhy_GRM_Info(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<social_socialmgt_grm> ddetails = new List<social_socialmgt_grm>();
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<social_socialmgt_grm>(Data);
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    //var year = Session["year"].ToString();
                    var year = result.year;
                    var Month = result.month;

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = ABE.obj_social_socialmgt_grm.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == year).OrderByDescending(o => o.id).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = ABE.obj_social_socialmgt_grm.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.year == year).OrderByDescending(o => o.id).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = ABE.obj_social_socialmgt_grm.Where(x => x.state_name == State && x.district_name == Dist && x.year == year).OrderByDescending(o => o.id).ToList();//total list

                    }
                    else if (State != "" && State != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = ABE.obj_social_socialmgt_grm.Where(x => x.state_name == State && x.year == year).OrderByDescending(o => o.id).ToList();//total list

                    }

                    //if (ddetails.Count == 0)
                    //{


                    var Details = new social_socialmgt_grm();

                    if (Session["gstate"] != null)
                    {
                        Details.state_name = Session["gstate"].ToString();
                    }
                    else
                    {
                        Details.state_name = State;
                    }
                    if (Session["gdist"] != null)
                    {
                        Details.district_name = Session["gdist"].ToString();
                    }
                    else
                    {
                        Details.district_name = Dist;
                    }
                    if (Session["ggram"] != null)
                    {
                        Details.gpname = Session["ggram"].ToString();
                    }
                    else
                    {
                        Details.gpname = Gram;
                    }
                    if (Session["gblock"] != null)
                    {
                        Details.block_name = Session["gblock"].ToString();
                    }
                    else
                    {
                        Details.block_name = Block;
                    }
                    Details.ddlawareness = result.ddlawareness;
                    Details.vil_awa_grm = result.vil_awa_grm;
                    Details.vil_awa_tfn = result.vil_awa_tfn;
                    Details.mea_of_awar = result.mea_of_awar;
                    Details.mea_of_awar_oth = result.mea_of_awar_oth;
                    Details.year = result.year;
                    Details.month = result.month;
                    Details.month_order_by = Get_Month_Number(Month);
                    Details.entry_by = Session["Email"].ToString();


                    Details.userid = Convert.ToInt32(Session["UserId"]);
                    ABE.obj_social_socialmgt_grm.Add(Details);
                    ABE.SaveChanges();
                    return Json("Successfully Saved", JsonRequestBehavior.AllowGet);
                    //}
                    //else
                    //{
                    //    if (ddetails.Count == 1)
                    //    {
                    //        var Dataa = ddetails.SingleOrDefault();
                    //        if (Session["gstate"] != null)
                    //        {
                    //            Dataa.state_name = Session["gstate"].ToString();
                    //        }
                    //        else
                    //        {
                    //            Dataa.state_name = State;
                    //        }
                    //        if (Session["gdist"] != null)
                    //        {
                    //            Dataa.district_name = Session["gdist"].ToString();
                    //        }
                    //        else
                    //        {
                    //            Dataa.district_name = Dist;
                    //        }
                    //        if (Session["ggram"] != null)
                    //        {
                    //            Dataa.gpname = Session["ggram"].ToString();
                    //        }
                    //        else
                    //        {
                    //            Dataa.gpname = Gram;
                    //        }
                    //        if (Session["gblock"] != null)
                    //        {
                    //            Dataa.block_name = Session["gblock"].ToString();
                    //        }
                    //        else
                    //        {
                    //            Dataa.block_name = Block;
                    //        }
                    //        Dataa.ddlawareness = result.ddlawareness;
                    //        Dataa.vil_awa_grm = result.vil_awa_grm;
                    //        Dataa.vil_awa_tfn = result.vil_awa_tfn;
                    //        Dataa.mea_of_awar = result.mea_of_awar;
                    //        Dataa.mea_of_awar_oth = result.mea_of_awar_oth;
                    //        Dataa.year = result.year;
                    //        Dataa.month = result.month;
                    //        Dataa.month_order_by = Get_Month_Number(Month);
                    //        Dataa.entry_by = Session["Email"].ToString();


                    //        Dataa.userid = Convert.ToInt32(Session["UserId"]);
                    //        //ABE.obj_abhy_socialmgt_iec_activities.Add(Dataa);
                    //        ABE.Entry(Dataa).State = EntityState.Modified;
                    //        ABE.SaveChanges();
                    //        return Json("Successfully Saved", JsonRequestBehavior.AllowGet);
                    //    }
                    //    else
                    //    {
                    //        return Json("Duplicate Data is there");
                    //    }

                    //}

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
        public ActionResult State_SessionInfo()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    if (Session["Officer"] != null && Session["Officer"].ToString() == "Admin")
                    {
                        return Json("Admin", JsonRequestBehavior.AllowGet);
                    }
                    else if (Session["gstate"] != null && Session["gstate"].ToString() != "0" && Session["gstate"].ToString() != "")
                    {
                        var Statename = Session["gstate"].ToString();
                        var Dist = Session["gdist"].ToString();
                        var Block = Session["gblock"].ToString();
                        var Gram = Session["ggram"].ToString();
                        var Str = Statename + ',' + Dist + ',' + Block + ',' + Gram;
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
                        var Gram = Session["ggram"].ToString(); //var year = Session["Year"].ToString();
                        var Str = Officer + ',' + Statename + ',' + Dist + ',' + Block + ',' + Gram /*+ ',' + year*/;
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


        //Ehtasham Code for Approved 
        //[HttpPost]
        //public ActionResult socialmgt_submit_ndo(string Data)
        //{

        //    if (Session["Userid"] != null)
        //    {

        //        JavaScriptSerializer js = new JavaScriptSerializer();
        //        var result = js.Deserialize<social_socialmgt_other_local_institues>(Data);
        //        var State = result.state_name;
        //        var Dist = result.district_name;
        //        var Block = result.block_name;
        //        var Gram = result.gpname;
        //        var Year = result.year;
        //        var UserEmail = Session["Email"].ToString();
        //        var Officer = Session["Officer"].ToString();
        //        var NodalOfficer = "";
        //        var emailid = "";
        //        StringBuilder sb = new StringBuilder();
        //        if (Officer == "Gram Panchyat Nodal Officer")
        //        {

        //            NodalOfficer = "District Level Nodal Officer";
        //            var users = ABE.objUsers.Where(x => x.StateName == State && x.DistrictName == Dist && x.NodalOfficer == NodalOfficer).FirstOrDefault();
        //            emailid = users.Email;

        //            sb.Append("Dear Sir/Madam,");
        //            sb.Append("<br>");
        //            sb.Append("<br>");

        //            sb.Append("<table style='margin-left:50px;'>");
        //            sb.Append("<tr style='width:300px'>");
        //            sb.Append("<td>");
        //            sb.Append("Input details of Social Management Module have been submitted for your approvel.");
        //            sb.Append("</td>");
        //            sb.Append("</tr>");

        //            sb.Append("<br>");
        //            sb.Append("<br>");

        //            sb.Append("<tr style='width:300px'>");
        //            sb.Append("<td>");
        //            sb.Append("Thank You");
        //            sb.Append("</td>");
        //            sb.Append("</tr>");

        //            sb.Append("<tr style='width:300px'>");
        //            sb.Append("<td>");
        //            sb.Append(UserEmail);
        //            sb.Append("</td>");
        //            sb.Append("</tr>");
        //            sb.Append("</table>");



        //        }
        //        else if (Officer == "District Level Nodal Officer")
        //        {
        //            NodalOfficer = "State Level Nodal Officer";

        //            var users = ABE.objUsers.Where(x => x.StateName == State && x.NodalOfficer == NodalOfficer).FirstOrDefault();
        //            emailid = users.Email;
        //            sb.Append("Dear Sir/Madam,");
        //            sb.Append("<br>");
        //            sb.Append("<br>");

        //            sb.Append("<table style='margin-left:50px;'>");
        //            sb.Append("<tr style='width:300px'>");
        //            sb.Append("<td>");
        //            sb.Append("Details of Social Management Module(Thoroughly Checked and Verified By DPMU) have been submitted for your approvel.");
        //            sb.Append("</td>");
        //            sb.Append("</tr>");

        //            sb.Append("<br>");
        //            sb.Append("<br>");

        //            sb.Append("<tr style='width:300px'>");
        //            sb.Append("<td>");
        //            sb.Append("Thank You");
        //            sb.Append("</td>");
        //            sb.Append("</tr>");

        //            sb.Append("<tr style='width:300px'>");
        //            sb.Append("<td>");
        //            sb.Append(UserEmail);
        //            sb.Append("</td>");
        //            sb.Append("</tr>");
        //            sb.Append("</table>");



        //        }
        //        if (Officer == "Gram Panchyat Nodal Officer")
        //        {
        //            if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null)
        //            {
        //                var obj = ABE.obj_social_socialmgt_other_local_institues.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year && x.gp_sent == false).ToList();
        //                var obj1 = ABE.obj_social_socialmgt_support_agency.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year && x.gp_sent == false).ToList();
        //                var obj2 = ABE.obj_social_socialmgt_farmers.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year && x.gp_sent == false).ToList();
        //                var obj3 = ABE.obj_social_socialmgt_grm.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year && x.gp_sent == false).ToList();
        //                var obj4 = ABE.obj_social_socialmgt_village_meetings.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year && x.gp_sent == false).ToList();
        //                //var obj5 = ABE.obj_socialmon_traininggp.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year && x.gp_sent == false).ToList();
        //                var obj6 = ABE.obj_social_socialmgt_remarks.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year).FirstOrDefault();
        //                if (obj.Count == 0 && obj1.Count == 0 && obj2.Count == 0 && obj3.Count == 0 && obj4.Count == 0)  /*&& obj5.Count == 0*/
        //                {
        //                    return Json("No Data Available for Submit");
        //                }
        //                if (obj.Count != 0)
        //                {
        //                    foreach (var item in obj)
        //                    {
        //                        if (item.remarks != "")
        //                        {
        //                            item.remarks = "";
        //                        }
        //                        item.gp_sent = true;
        //                        item.d_reject = false;
        //                        ABE.Entry(item).State = EntityState.Modified;
        //                        ABE.SaveChanges();
        //                    }
        //                }
        //                if (obj1.Count != 0)
        //                {
        //                    foreach (var item in obj1)
        //                    {
        //                        if (item.remarks != "")
        //                        {
        //                            item.remarks = "";
        //                        }
        //                        item.gp_sent = true;
        //                        item.d_reject = false;
        //                        ABE.Entry(item).State = EntityState.Modified;
        //                        ABE.SaveChanges();
        //                    }
        //                }
        //                if (obj2.Count != 0)
        //                {
        //                    foreach (var item in obj2)
        //                    {
        //                        if (item.remarks != "")
        //                        {
        //                            item.remarks = "";
        //                        }
        //                        item.gp_sent = true;
        //                        item.d_reject = false;
        //                        ABE.Entry(item).State = EntityState.Modified;
        //                        ABE.SaveChanges();
        //                    }
        //                }
        //                if (obj3.Count != 0)
        //                {
        //                    foreach (var item in obj3)
        //                    {
        //                        if (item.remarks != "")
        //                        {
        //                            item.remarks = "";
        //                        }
        //                        item.gp_sent = true;
        //                        item.d_reject = false;
        //                        ABE.Entry(item).State = EntityState.Modified;
        //                        ABE.SaveChanges();
        //                    }
        //                }
        //                if (obj4.Count != 0)
        //                {
        //                    foreach (var item in obj4)
        //                    {
        //                        if (item.remarks != "")
        //                        {
        //                            item.remarks = "";
        //                        }
        //                        item.gp_sent = true;
        //                        item.d_reject = false;
        //                        ABE.Entry(item).State = EntityState.Modified;
        //                        ABE.SaveChanges();
        //                    }
        //                }
        //                //if (obj5.Count != 0)
        //                //{
        //                //    foreach (var item in obj5)
        //                //    {
        //                //        if (item.remarks != "")
        //                //        {
        //                //            item.remarks = "";
        //                //        }
        //                //        item.gp_sent = true;
        //                //        item.d_reject = false;
        //                //        ABE.Entry(item).State = EntityState.Modified;
        //                //        ABE.SaveChanges();
        //                //    }
        //                //}
        //                var contemail = emailid.Trim();
        //                string results = WebConstents.SendEmailSMTP(contemail, "", "Data Verification of GPDCI", sb.ToString(), "");
        //                if (obj6 != null)
        //                {
        //                    obj6.remarks = "";
        //                    ABE.Entry(obj6).State = EntityState.Modified;
        //                    ABE.SaveChanges();
        //                }

        //                return Json("Successfully Saved");
        //            }
        //            else
        //            {
        //                return Json("Error");
        //            }
        //        }
        //        else if (Officer == "District Level Nodal Officer")
        //        {
        //            if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null)
        //            {
        //                var obj = ABE.obj_social_socialmgt_other_local_institues.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year && x.gp_sent == true && x.d_sent != true).ToList();
        //                var obj1 = ABE.obj_social_socialmgt_support_agency.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year && x.gp_sent == true && x.d_sent != true).ToList();
        //                var obj2 = ABE.obj_social_socialmgt_farmers.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year && x.gp_sent == true && x.d_sent != true).ToList();
        //                var obj3 = ABE.obj_social_socialmgt_grm.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year && x.gp_sent == true && x.d_sent != true).ToList();
        //                var obj4 = ABE.obj_social_socialmgt_village_meetings.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year && x.gp_sent == true && x.d_sent != true).ToList();
        //                //var obj5 = ABE.obj_socialmon_traininggp.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year && x.gp_sent == true && x.d_sent != true).ToList();
        //                var obj6 = ABE.obj_social_socialmgt_remarks.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year).FirstOrDefault();
        //                if (obj.Count == 0 && obj1.Count == 0 && obj2.Count == 0 && obj3.Count == 0 && obj4.Count == 0) /*&& obj5.Count == 0*/
        //                {
        //                    return Json("No Data Available for Submit");
        //                }
        //                if (obj.Count != 0)
        //                {
        //                    foreach (var item in obj)
        //                    {
        //                        if (item.remarks != "")
        //                        {
        //                            item.remarks = "";
        //                        }
        //                        item.d_sent = true;
        //                        item.s_reject = false;
        //                        ABE.Entry(item).State = EntityState.Modified;
        //                        ABE.SaveChanges();

        //                    }
        //                }
        //                if (obj1.Count != 0)
        //                {
        //                    foreach (var item in obj1)
        //                    {
        //                        if (item.remarks != "")
        //                        {
        //                            item.remarks = "";
        //                        }
        //                        item.d_sent = true;
        //                        item.s_reject = false;
        //                        ABE.Entry(item).State = EntityState.Modified;
        //                        ABE.SaveChanges();
        //                    }
        //                }
        //                if (obj2.Count != 0)
        //                {
        //                    foreach (var item in obj2)
        //                    {
        //                        if (item.remarks != "")
        //                        {
        //                            item.remarks = "";
        //                        }
        //                        item.d_sent = true;
        //                        item.s_reject = false;
        //                        ABE.Entry(item).State = EntityState.Modified;
        //                        ABE.SaveChanges();
        //                    }
        //                }
        //                if (obj3.Count != 0)
        //                {
        //                    foreach (var item in obj3)
        //                    {
        //                        if (item.remarks != "")
        //                        {
        //                            item.remarks = "";
        //                        }
        //                        item.d_sent = true;
        //                        item.s_reject = false;
        //                        ABE.Entry(item).State = EntityState.Modified;
        //                        ABE.SaveChanges();
        //                    }
        //                }
        //                if (obj4.Count != 0)
        //                {
        //                    foreach (var item in obj4)
        //                    {
        //                        if (item.remarks != "")
        //                        {
        //                            item.remarks = "";
        //                        }
        //                        item.d_sent = true;
        //                        item.s_reject = false;
        //                        ABE.Entry(item).State = EntityState.Modified;
        //                        ABE.SaveChanges();
        //                    }
        //                }
        //                //if (obj5.Count != 0)
        //                //{
        //                //    foreach (var item in obj5)
        //                //    {
        //                //        if (item.remarks != "")
        //                //        {
        //                //            item.remarks = "";
        //                //        }
        //                //        item.d_sent = true;
        //                //        item.s_reject = false;
        //                //        ABE.Entry(item).State = EntityState.Modified;
        //                //        ABE.SaveChanges();
        //                //    }
        //                //}

        //                var contemail = emailid.Trim();
        //                string results = WebConstents.SendEmailSMTP(contemail, "", "Data Verification of GPDCI", sb.ToString(), "");
        //                if (obj6 != null)
        //                {
        //                    obj6.remarks = "";
        //                    ABE.Entry(obj6).State = EntityState.Modified;
        //                    ABE.SaveChanges();
        //                }
        //                return Json("Successfully Saved");
        //            }
        //            else
        //            {
        //                return Json("Error");
        //            }
        //        }
        //        else if (Officer == "State Level Nodal Officer")
        //        {
        //            if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null)
        //            {
        //                var obj = ABE.obj_social_socialmgt_other_local_institues.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year && x.d_sent == true).ToList();
        //                var obj1 = ABE.obj_social_socialmgt_support_agency.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year && x.d_sent == true).ToList();
        //                var obj2 = ABE.obj_social_socialmgt_farmers.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year && x.d_sent == true).ToList();
        //                var obj3 = ABE.obj_social_socialmgt_grm.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year && x.d_sent == true).ToList();
        //                var obj4 = ABE.obj_social_socialmgt_village_meetings.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year && x.d_sent == true).ToList();
        //                //var obj5 = ABE.obj_socialmon_traininggp.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year && x.d_sent == true).ToList();
        //                var obj6 = ABE.obj_social_socialmgt_remarks.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year).FirstOrDefault();
        //                if (obj.Count == 0 && obj1.Count == 0 && obj2.Count == 0 && obj3.Count == 0 && obj4.Count == 0)/*&& obj5.Count == 0*/
        //                {
        //                    return Json("No Data Available for Submit");
        //                }
        //                if (obj.Count != 0)
        //                {
        //                    foreach (var item in obj)
        //                    {
        //                        if (item.gp_sent == true || item.d_sent == true)
        //                        {
        //                            if (item.remarks != "")
        //                            {
        //                                item.remarks = "";
        //                            }
        //                            item.approved = true;
        //                            ABE.Entry(item).State = EntityState.Modified;
        //                            ABE.SaveChanges();
        //                        }
        //                    }
        //                }
        //                if (obj1.Count != 0)
        //                {
        //                    foreach (var item in obj1)
        //                    {
        //                        if (item.gp_sent == true || item.d_sent == true)
        //                        {
        //                            if (item.remarks != "")
        //                            {
        //                                item.remarks = "";
        //                            }
        //                            item.approved = true;
        //                            ABE.Entry(item).State = EntityState.Modified;
        //                            ABE.SaveChanges();
        //                        }
        //                    }
        //                }
        //                if (obj2.Count != 0)
        //                {
        //                    foreach (var item in obj2)
        //                    {
        //                        if (item.gp_sent == true || item.d_sent == true)
        //                        {
        //                            if (item.remarks != "")
        //                            {
        //                                item.remarks = "";
        //                            }
        //                            item.approved = true;
        //                            ABE.Entry(item).State = EntityState.Modified;
        //                            ABE.SaveChanges();
        //                        }
        //                    }
        //                }
        //                if (obj3.Count != 0)
        //                {
        //                    foreach (var item in obj3)
        //                    {
        //                        if (item.gp_sent == true || item.d_sent == true)
        //                        {
        //                            if (item.remarks != "")
        //                            {
        //                                item.remarks = "";
        //                            }
        //                            item.approved = true;
        //                            ABE.Entry(item).State = EntityState.Modified;
        //                            ABE.SaveChanges();
        //                        }
        //                    }
        //                }
        //                if (obj4.Count != 0)
        //                {
        //                    foreach (var item in obj4)
        //                    {
        //                        if (item.gp_sent == true || item.d_sent == true)
        //                        {
        //                            if (item.remarks != "")
        //                            {
        //                                item.remarks = "";
        //                            }
        //                            item.approved = true;
        //                            ABE.Entry(item).State = EntityState.Modified;
        //                            ABE.SaveChanges();
        //                        }
        //                    }
        //                }
        //                //if (obj5.Count != 0)
        //                //{
        //                //    foreach (var item in obj5)
        //                //    {
        //                //        if (item.gp_sent == true || item.d_sent == true)
        //                //        {
        //                //            if (item.remarks != "")
        //                //            {
        //                //                item.remarks = "";
        //                //            }
        //                //            item.approved = true;
        //                //            ABE.Entry(item).State = EntityState.Modified;
        //                //            ABE.SaveChanges();
        //                //        }
        //                //    }
        //                //}

        //                var contemail = emailid.Trim();
        //                string results = WebConstents.SendEmailSMTP(contemail, "", "Data Verification of GPDCI", sb.ToString(), "");
        //                if (obj6 != null)
        //                {
        //                    obj6.remarks = "";
        //                    ABE.Entry(obj6).State = EntityState.Modified;
        //                    ABE.SaveChanges();
        //                }
        //                return Json("Successfully Saved");
        //            }
        //            else
        //            {
        //                return Json("Error");
        //            }
        //        }

        //        return Json("Error");
        //    }
        //    else
        //    {
        //        return Json("Logout", JsonRequestBehavior.AllowGet);
        //    }
        //}

        //[HttpPost]
        //public ActionResult socialmgt_reject(string Data)
        //{
        //    if (Session["Userid"] != null)
        //    {

        //        JavaScriptSerializer js = new JavaScriptSerializer();
        //        var result = js.Deserialize<social_socialmgt_other_local_institues>(Data);
        //        var result1 = js.Deserialize<social_socialmgt_remark>(Data);
        //        var State = result.state_name;
        //        var Dist = result.district_name;
        //        var Block = result.block_name;
        //        var Gram = result.gpname;
        //        var Year = result.year;
        //        var UserEmail = Session["Email"].ToString();
        //        var Officer = Session["Officer"].ToString();
        //        social_socialmgt_remark smremark = new social_socialmgt_remark();
        //        if (Officer == "District Level Nodal Officer")
        //        {
        //            if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null)
        //            {
        //                var ob = ABE.obj_social_socialmgt_other_local_institues.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year && x.d_sent == true).ToList();
        //                var ob1 = ABE.obj_social_socialmgt_support_agency.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year && x.d_sent == true).ToList();
        //                var ob2 = ABE.obj_social_socialmgt_farmers.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year && x.d_sent == true).ToList();
        //                var ob3 = ABE.obj_social_socialmgt_grm.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year && x.d_sent == true).ToList();
        //                var ob4 = ABE.obj_social_socialmgt_village_meetings.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year && x.d_sent == true).ToList();
        //                //var ob5 = ABE.obj_socialmon_traininggp.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year && x.d_sent == true).ToList();
        //                var ob6 = ABE.obj_social_socialmgt_remarks.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year).FirstOrDefault();
        //                if (ob.Count != 0 && ob1.Count != 0 && ob2.Count != 0 && ob3.Count != 0 && ob4.Count != 0) /*&& ob5.Count != 0*/
        //                {
        //                    return Json("No Data Available for Reject");
        //                }


        //                var obj = ABE.obj_social_socialmgt_other_local_institues.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year && x.gp_sent == true).ToList();
        //                var obj1 = ABE.obj_social_socialmgt_support_agency.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year && x.gp_sent == true).ToList();
        //                var obj2 = ABE.obj_social_socialmgt_farmers.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year && x.gp_sent == true).ToList();
        //                var obj3 = ABE.obj_social_socialmgt_grm.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year && x.gp_sent == true).ToList();
        //                var obj4 = ABE.obj_social_socialmgt_village_meetings.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year && x.gp_sent == true).ToList();
        //                //var obj5 = ABE.obj_socialmon_traininggp.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year && x.gp_sent == true).ToList();
        //                var obj6 = ABE.obj_social_socialmgt_remarks.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year).FirstOrDefault();
        //                if (obj.Count == 0 && obj1.Count == 0 && obj2.Count == 0 && obj3.Count == 0 && obj4.Count == 0) /*&& obj5.Count == 0*/
        //                {
        //                    return Json("No Data Available for Submit");
        //                }
        //                if (obj.Count != 0)
        //                {
        //                    foreach (var item in obj)
        //                    {
        //                        if (item.gp_sent == true && item.d_sent == false)
        //                        {
        //                            item.d_reject = true;
        //                            item.gp_sent = false;
        //                            ABE.Entry(item).State = EntityState.Modified;
        //                            ABE.SaveChanges();
        //                        }
        //                    }
        //                }
        //                if (obj1.Count != 0)
        //                {
        //                    foreach (var item in obj1)
        //                    {
        //                        if (item.gp_sent == true && item.d_sent == false)
        //                        {
        //                            item.d_reject = true;
        //                            item.gp_sent = false;
        //                            ABE.Entry(item).State = EntityState.Modified;
        //                            ABE.SaveChanges();
        //                        }
        //                    }
        //                }
        //                if (obj2.Count != 0)
        //                {
        //                    foreach (var item in obj2)
        //                    {
        //                        if (item.gp_sent == true && item.d_sent == false)
        //                        {
        //                            item.d_reject = true;
        //                            item.gp_sent = false;
        //                            ABE.Entry(item).State = EntityState.Modified;
        //                            ABE.SaveChanges();
        //                        }
        //                    }
        //                }
        //                if (obj3.Count != 0)
        //                {
        //                    foreach (var item in obj3)
        //                    {
        //                        if (item.gp_sent == true && item.d_sent == false)
        //                        {
        //                            item.d_reject = true;
        //                            item.gp_sent = false;
        //                            ABE.Entry(item).State = EntityState.Modified;
        //                            ABE.SaveChanges();
        //                        }
        //                    }
        //                }
        //                if (obj4.Count != 0)
        //                {
        //                    foreach (var item in obj4)
        //                    {
        //                        if (item.gp_sent == true && item.d_sent == false)
        //                        {
        //                            item.d_reject = true;
        //                            item.gp_sent = false;
        //                            ABE.Entry(item).State = EntityState.Modified;
        //                            ABE.SaveChanges();
        //                        }
        //                    }
        //                }
        //                //if (obj5.Count != 0)
        //                //{
        //                //    foreach (var item in obj5)
        //                //    {
        //                //        if (item.gp_sent == true && item.d_sent == false)
        //                //        {
        //                //            item.d_reject = true;
        //                //            item.gp_sent = false;
        //                //            ABE.Entry(item).State = EntityState.Modified;
        //                //            ABE.SaveChanges();
        //                //        }
        //                //    }
        //                //}
        //                if (obj6 != null)
        //                {
        //                    obj6.state_name = State;
        //                    obj6.district_name = Dist;
        //                    obj6.block_name = Block;
        //                    obj6.gpname = Gram;
        //                    obj6.year = Year;
        //                    obj6.remarks = result.remarks;
        //                    ABE.Entry(obj6).State = EntityState.Modified;
        //                    ABE.SaveChanges();
        //                }
        //                else
        //                {
        //                    smremark.state_name = State;
        //                    smremark.district_name = Dist;
        //                    smremark.block_name = Block;
        //                    smremark.gpname = Gram;
        //                    smremark.year = Year;
        //                    smremark.remarks = result1.remarks;
        //                    ABE.obj_social_socialmgt_remarks.Add(smremark);
        //                    ABE.SaveChanges();

        //                }

        //                return Json("Successfully Saved");
        //            }
        //            else
        //            {
        //                return Json("Error");
        //            }
        //        }
        //        else if (Officer == "State Level Nodal Officer")
        //        {
        //            if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null)
        //            {
        //                var obj = ABE.obj_social_socialmgt_other_local_institues.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year && x.d_sent == true).ToList();
        //                var obj1 = ABE.obj_social_socialmgt_support_agency.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year && x.d_sent == true).ToList();
        //                var obj2 = ABE.obj_social_socialmgt_farmers.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year && x.d_sent == true).ToList();
        //                var obj3 = ABE.obj_social_socialmgt_grm.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year && x.d_sent == true).ToList();
        //                var obj4 = ABE.obj_social_socialmgt_village_meetings.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year && x.d_sent == true).ToList();
        //                //var obj5 = ABE.obj_socialmon_traininggp.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year && x.d_sent == true).ToList();
        //                var obj6 = ABE.obj_social_socialmgt_remarks.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year).FirstOrDefault();
        //                if (obj.Count == 0 && obj1.Count == 0 && obj2.Count == 0 && obj3.Count == 0 && obj4.Count == 0) /*&& obj5.Count == 0*/
        //                {
        //                    return Json("No Data Available for Submit");
        //                }
        //                if (obj.Count != 0)
        //                {
        //                    foreach (var item in obj)
        //                    {
        //                        if (item.d_sent == true)
        //                        {
        //                            item.s_reject = true;
        //                            item.d_sent = false;
        //                            ABE.Entry(item).State = EntityState.Modified;
        //                            ABE.SaveChanges();
        //                        }
        //                    }
        //                }
        //                if (obj1.Count != 0)
        //                {
        //                    foreach (var item in obj1)
        //                    {
        //                        if (item.d_sent == true)
        //                        {
        //                            item.s_reject = true;
        //                            item.d_sent = false;
        //                            ABE.Entry(item).State = EntityState.Modified;
        //                            ABE.SaveChanges();
        //                        }
        //                    }
        //                }
        //                if (obj2.Count != 0)
        //                {
        //                    foreach (var item in obj2)
        //                    {
        //                        if (item.d_sent == true)
        //                        {
        //                            item.s_reject = true;
        //                            item.d_sent = false;
        //                            ABE.Entry(item).State = EntityState.Modified;
        //                            ABE.SaveChanges();
        //                        }
        //                    }
        //                }
        //                if (obj3.Count != 0)
        //                {
        //                    foreach (var item in obj3)
        //                    {
        //                        if (item.d_sent == true)
        //                        {
        //                            item.s_reject = true;
        //                            item.d_sent = false;
        //                            ABE.Entry(item).State = EntityState.Modified;
        //                            ABE.SaveChanges();
        //                        }
        //                    }
        //                }
        //                if (obj4.Count != 0)
        //                {
        //                    foreach (var item in obj4)
        //                    {
        //                        if (item.d_sent == true)
        //                        {
        //                            item.s_reject = true;
        //                            item.d_sent = false;
        //                            ABE.Entry(item).State = EntityState.Modified;
        //                            ABE.SaveChanges();
        //                        }
        //                    }
        //                }
                        
        //                if (obj6 != null)
        //                {
        //                    obj6.state_name = State;
        //                    obj6.district_name = Dist;
        //                    obj6.block_name = Block;
        //                    obj6.gpname = Gram;
        //                    obj6.year = Year;
        //                    obj6.remarks = result.remarks;
        //                    ABE.Entry(obj6).State = EntityState.Modified;
        //                    ABE.SaveChanges();
        //                }
        //                else
        //                {
        //                    smremark.state_name = State;
        //                    smremark.district_name = Dist;
        //                    smremark.block_name = Block;
        //                    smremark.gpname = Gram;
        //                    smremark.year = Year;
        //                    smremark.remarks = result1.remarks;
        //                    ABE.obj_social_socialmgt_remarks.Add(smremark);
        //                    ABE.SaveChanges();

        //                }
        //                return Json("Successfully Saved");
        //            }
        //            else
        //            {
        //                return Json("Error");
        //            }
        //        }
        //        return Json("Error");
        //    }
        //    else
        //    {
        //        return Json("Logout", JsonRequestBehavior.AllowGet);
        //    }
        //}

        //[HttpPost]
        //public ActionResult socialmgt_rejectrow1(string Data)
        //{
        //    if (Session["Userid"] != null)
        //    {

        //        JavaScriptSerializer js = new JavaScriptSerializer();
        //        var result = js.Deserialize<social_socialmgt_other_local_institues>(Data);
        //        var Officer = Session["Officer"].ToString();
        //        if (Officer == "District Level Nodal Officer")
        //        {
        //            if (result.id != null)
        //            {
        //                var GPID = Convert.ToInt32(result.id);
        //                var obj = ABE.obj_social_socialmgt_other_local_institues.Where(x => x.id == GPID).FirstOrDefault();
        //                if (obj.id != 0)
        //                {
        //                    if (obj.gp_sent == true)
        //                    {
        //                        obj.d_reject = true;
        //                        obj.gp_sent = false;
        //                        obj.remarks = result.remarks;
        //                        ABE.Entry(obj).State = EntityState.Modified;
        //                        ABE.SaveChanges();
        //                    }
        //                }

        //                return Json("Successfully Saved");
        //            }
        //            else
        //            {
        //                return Json("Error");
        //            }
        //        }
        //        else if (Officer == "State Level Nodal Officer")
        //        {
        //            if (result.id != null)
        //            {
        //                var GPID = Convert.ToInt32(result.id);
        //                var obj = ABE.obj_social_socialmgt_other_local_institues.Where(x => x.id == GPID).FirstOrDefault();
        //                if (obj.id != 0)
        //                {
        //                    if (obj.d_sent == true)
        //                    {
        //                        obj.s_reject = true;
        //                        obj.d_sent = false;
        //                        obj.remarks = result.remarks;
        //                        ABE.Entry(obj).State = EntityState.Modified;
        //                        ABE.SaveChanges();
        //                    }
        //                }
        //                return Json("Successfully Saved");
        //            }
        //            else
        //            {
        //                return Json("Error");
        //            }
        //        }
        //        return Json("Error");
        //    }
        //    else
        //    {
        //        return Json("Logout", JsonRequestBehavior.AllowGet);
        //    }
        //}

        //[HttpPost]
        //public ActionResult socialmgt_rejectrow2(string Data)
        //{
        //    if (Session["Userid"] != null)
        //    {

        //        JavaScriptSerializer js = new JavaScriptSerializer();
        //        var result = js.Deserialize<social_socialmgt_support_agency>(Data);
        //        var Officer = Session["Officer"].ToString();
        //        if (Officer == "District Level Nodal Officer")
        //        {
        //            if (result.id != null)
        //            {
        //                var GPID = Convert.ToInt32(result.id);
        //                var obj = ABE.obj_social_socialmgt_support_agency.Where(x => x.id == GPID).FirstOrDefault();
        //                if (obj.id != 0)
        //                {
        //                    if (obj.gp_sent == true)
        //                    {
        //                        obj.d_reject = true;
        //                        obj.gp_sent = false;
        //                        obj.remarks = result.remarks;
        //                        ABE.Entry(obj).State = EntityState.Modified;
        //                        ABE.SaveChanges();
        //                    }
        //                }

        //                return Json("Successfully Saved");
        //            }
        //            else
        //            {
        //                return Json("Error");
        //            }
        //        }
        //        else if (Officer == "State Level Nodal Officer")
        //        {
        //            if (result.id != null)
        //            {
        //                var GPID = Convert.ToInt32(result.id);
        //                var obj = ABE.obj_social_socialmgt_support_agency.Where(x => x.id == GPID).FirstOrDefault();
        //                if (obj.id != 0)
        //                {
        //                    if (obj.d_sent == true)
        //                    {
        //                        obj.s_reject = true;
        //                        obj.d_sent = false;
        //                        obj.remarks = result.remarks;
        //                        ABE.Entry(obj).State = EntityState.Modified;
        //                        ABE.SaveChanges();
        //                    }
        //                }
        //                return Json("Successfully Saved");
        //            }
        //            else
        //            {
        //                return Json("Error");
        //            }
        //        }
        //        return Json("Error");
        //    }
        //    else
        //    {
        //        return Json("Logout", JsonRequestBehavior.AllowGet);
        //    }
        //}

        //[HttpPost]
        //public ActionResult socialmgt_rejectrow3(string Data)
        //{
        //    if (Session["Userid"] != null)
        //    {

        //        JavaScriptSerializer js = new JavaScriptSerializer();
        //        var result = js.Deserialize<social_socialmgt_village_meetings>(Data);
        //        var Officer = Session["Officer"].ToString();
        //        if (Officer == "District Level Nodal Officer")
        //        {
        //            if (result.id != null)
        //            {
        //                var GPID = Convert.ToInt32(result.id);
        //                var obj = ABE.obj_social_socialmgt_village_meetings.Where(x => x.id == GPID).FirstOrDefault();
        //                if (obj.id != 0)
        //                {
        //                    if (obj.gp_sent == true)
        //                    {
        //                        obj.d_reject = true;
        //                        obj.gp_sent = false;
        //                        obj.remarks = result.remarks;
        //                        ABE.Entry(obj).State = EntityState.Modified;
        //                        ABE.SaveChanges();
        //                    }
        //                }

        //                return Json("Successfully Saved");
        //            }
        //            else
        //            {
        //                return Json("Error");
        //            }
        //        }
        //        else if (Officer == "State Level Nodal Officer")
        //        {
        //            if (result.id != null)
        //            {
        //                var GPID = Convert.ToInt32(result.id);
        //                var obj = ABE.obj_social_socialmgt_village_meetings.Where(x => x.id == GPID).FirstOrDefault();
        //                if (obj.id != 0)
        //                {
        //                    if (obj.d_sent == true)
        //                    {
        //                        obj.s_reject = true;
        //                        obj.d_sent = false;
        //                        obj.remarks = result.remarks;
        //                        ABE.Entry(obj).State = EntityState.Modified;
        //                        ABE.SaveChanges();
        //                    }
        //                }
        //                return Json("Successfully Saved");
        //            }
        //            else
        //            {
        //                return Json("Error");
        //            }
        //        }
        //        return Json("Error");
        //    }
        //    else
        //    {
        //        return Json("Logout", JsonRequestBehavior.AllowGet);
        //    }
        //}

        [HttpPost]
        public ActionResult abhy_socialmgt_remarks(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<social_socialmgt_remark>(Data);
                    List<social_socialmgt_remark> ddetails = new List<social_socialmgt_remark>();
                    var State = result.state_name;
                    var Dist = result.district_name;

                    var Block = result.block_name;
                    var Gram = result.gpname;
                    var Year = result.year;
                    var Month = result.month;

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null)
                    {
                        ddetails = ABE.obj_social_socialmgt_remarks.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year).ToList();

                    }

                    if (ddetails.Count != 0)
                    {
                        return Json(ddetails, JsonRequestBehavior.AllowGet);
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



    }
}