using AbhyProject.Classes;
using AbhyProject.Models;
using AbhyProject.Utility;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;

namespace AbhyProject.Controllers
{
    public class SocialMointoringController : Controller
    {
        AbhyEntity ABE = new AbhyEntity();
        // GET: SocialMointoring
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Social_management_report()
        {
            return View();
        }
        public ActionResult Social_management()
        {
            
            ViewBag.GPLIst = ABE.obj_abhy_gpdata_new.ToList();
            return View();
        }

        //GRAM PANCHAYAT DATABASE ( Details of Members of various Committees / Agencies)
        [HttpGet]
        public ActionResult abhy_socialmgt_gramdb()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_socialmgt_gramdb> ddetails = new List<abhy_socialmgt_gramdb>();
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_gramdb.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_gramdb.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_gramdb.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_gramdb.Where(x => x.state_name == State).ToList();//total list

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


        //completed

        [HttpPost]
        public ActionResult Save_abhy_socialmgt_gramdb(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_socialmgt_gramdb>(Data);

                    var Details = new abhy_socialmgt_gramdb();
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
                        return Json("Please Select  Gender");
                    }
                    if (result.member_name != "" && result.member_name != null)
                    {
                        Details.member_name = result.member_name;
                    }
                    else
                    {
                        return Json("Please Enter  Name");
                    }


                    if (result.reserved_unreserved != "0" && result.reserved_unreserved != "" && result.reserved_unreserved != null)
                    {
                        Details.reserved_unreserved = result.reserved_unreserved;
                    }
                    else
                    {
                        return Json("Please Select  Category");
                    }
                    Details.userid = Convert.ToInt32(Session["UserId"]);
                    ABE.obj_abhy_socialmgt_gramdb.Add(Details);
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
        [HttpGet]
        public ActionResult VWSC_Info()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_socialmgt_sanitation_committee> ddetails = new List<abhy_socialmgt_sanitation_committee>();
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
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

        [HttpGet]
        public ActionResult Support_Agency_DIP_Info()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_socialmgt_support_agency> ddetails = new List<abhy_socialmgt_support_agency>();
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_support_agency.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_support_agency.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_support_agency.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                    }
                    else if (State != "" && State != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_support_agency.Where(x => x.state_name == State).ToList();//total list

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
                    var result = js.Deserialize<abhy_socialmgt_support_agency>(Data);

                    if (result.id != 0)
                    {
                        var TKID = Convert.ToInt32(result.id);
                        var Data1 = ABE.obj_abhy_socialmgt_support_agency.Where(x => x.id == TKID).SingleOrDefault();
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
                    var result = js.Deserialize<abhy_socialmgt_support_agency>(Data);

                    var Details = new abhy_socialmgt_support_agency();
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

                    if (result.member_name != "" && result.member_name != null)
                    {
                        Details.member_name = result.member_name;
                    }
                    else
                    {
                        return Json("Please Enter Member Name");
                    }
                    Details.reserved_unreserved = result.reserved_unreserved;
                    Details.userid = Convert.ToInt32(Session["UserId"]);
                    ABE.obj_abhy_socialmgt_support_agency.Add(Details);
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

        [HttpGet]
        public ActionResult Others_local_instituions_citizen_leaders_Info()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_socialmgt_other_local_institues> ddetails = new List<abhy_socialmgt_other_local_institues>();
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_other_local_institues.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_other_local_institues.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_other_local_institues.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                    }
                    else if (State != "" && State != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_other_local_institues.Where(x => x.state_name == State).ToList();//total list

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
                    var result = js.Deserialize<abhy_socialmgt_other_local_institues>(Data);

                    if (result.id != 0)
                    {
                        var TKID = Convert.ToInt32(result.id);
                        var Data1 = ABE.obj_abhy_socialmgt_other_local_institues.Where(x => x.id == TKID).SingleOrDefault();
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
        public ActionResult Save_Others_local_instituions_citizen_leaders_Info(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_socialmgt_other_local_institues>(Data);

                    var Details = new abhy_socialmgt_other_local_institues();
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

                    if (result.member_name != "" && result.member_name != null)
                    {
                        Details.member_name = result.member_name;
                    }
                    else
                    {
                        return Json("Please Enter Member Name");
                    }
                    Details.reserved_unreserved = result.reserved_unreserved;
                    Details.userid = Convert.ToInt32(Session["UserId"]);
                    ABE.obj_abhy_socialmgt_other_local_institues.Add(Details);
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
        [HttpGet]
        public ActionResult IEC_Activities_Info()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_socialmgt_iec_activities> ddetails = new List<abhy_socialmgt_iec_activities>();
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
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

        //Social Audit

        [HttpGet]
        public ActionResult Social_Audit_Info()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_socialmgt_social_audit> ddetails = new List<abhy_socialmgt_social_audit>();
                    var userid = Convert.ToInt32(Session["UserId"]);
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
                            var Dataaa = ddetails.SingleOrDefault();
                            if (Session["gstate"] != null)
                            {
                                Dataaa.state_name = Session["gstate"].ToString();
                            }
                            else
                            {
                                Dataaa.state_name = State;
                            }
                            if (Session["gdist"] != null)
                            {
                                Dataaa.district_name = Session["gdist"].ToString();
                            }
                            else
                            {
                                Dataaa.district_name = Dist;
                            }
                            if (Session["ggram"] != null)
                            {
                                Dataaa.gpname = Session["ggram"].ToString();
                            }
                            else
                            {
                                Dataaa.gpname = Gram;
                            }
                            if (Session["gblock"] != null)
                            {
                                Dataaa.block_name = Session["gblock"].ToString();
                            }
                            else
                            {
                                Dataaa.block_name = Block;
                            }
                            Dataaa.toolkit = result.toolkit;
                            Dataaa.pilot_under = result.pilot_under;
                            Dataaa.rollout_cal = result.rollout_cal;
                            Dataaa.audit_report = result.audit_report;
                            Dataaa.analysis_summary = result.analysis_summary;
                            Dataaa.userid = Convert.ToInt32(Session["UserId"]);
                            //ABE.obj_abhy_socialmgt_iec_activities.Add(Dataaa);
                            ABE.Entry(Dataaa).State = EntityState.Modified;
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

        [HttpGet]
        public ActionResult Total_Population_of_the_GP_Info()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_socialmgt_tol_population> ddetails = new List<abhy_socialmgt_tol_population>();
                    var userid = Convert.ToInt32(Session["UserId"]);
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
                            Details.basic_data = "0";
                        }


                        if (result.pop_20_21 != null && result.pop_20_21 != "")
                        {
                            Details.pop_20_21 = result.pop_20_21;
                        }
                        else
                        {
                            //return Json("Please Enter 2021");
                            Details.pop_20_21 = "0";
                        }


                        if (result.pop_21_22 != null && result.pop_21_22 != "")
                        {
                            Details.pop_21_22 = result.pop_21_22;
                        }
                        else
                        {
                            Details.pop_21_22 = "0";
                        }


                        if (result.pop_22_23 != null && result.pop_22_23 != "")
                        {
                            Details.pop_22_23 = result.pop_22_23;
                        }
                        else
                        {
                            /*return Json("Please Enter 2023");*/
                            Details.pop_22_23 = "0";
                        }


                        if (result.pop_23_24 != null && result.pop_23_24 != "")
                        {
                            Details.pop_23_24 = result.pop_23_24;
                        }
                        else
                        {
                            //return Json("Please Enter 2024");
                            Details.pop_23_24 = "0";
                        }


                        if (result.pop_24_25 != null && result.pop_24_25 != "")
                        {
                            Details.pop_24_25 = result.pop_24_25;
                        }
                        else
                        {
                            //return Json("Please Enter 2025");
                            Details.pop_24_25 = "0";
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
                            var Dataaa = ddetails.SingleOrDefault();
                            if (Session["gstate"] != null)
                            {
                                Dataaa.state_name = Session["gstate"].ToString();
                            }
                            else
                            {
                                Dataaa.state_name = State;
                            }
                            if (Session["gdist"] != null)
                            {
                                Dataaa.district_name = Session["gdist"].ToString();
                            }
                            else
                            {
                                Dataaa.district_name = Dist;
                            }
                            if (Session["ggram"] != null)
                            {
                                Dataaa.gpname = Session["ggram"].ToString();
                            }
                            else
                            {
                                Dataaa.gpname = Gram;
                            }
                            if (Session["gblock"] != null)
                            {
                                Dataaa.block_name = Session["gblock"].ToString();
                            }
                            else
                            {
                                Dataaa.block_name = Block;
                            }

                            // Dataaa.tol_population = result.tol_population;
                            if (result.basic_data != null && result.basic_data != "")
                            {
                                Dataaa.basic_data = result.basic_data;
                            }
                            else
                            {
                                return Json("Please Enter Census Year");
                            }


                            if (result.pop_20_21 != null && result.pop_20_21 != "")
                            {
                                Dataaa.pop_20_21 = result.pop_20_21;
                            }
                            else
                            {
                                return Json("Please Enter 2021");
                            }


                            if (result.pop_21_22 != null && result.pop_21_22 != "")
                            {
                                Dataaa.pop_21_22 = result.pop_21_22;
                            }
                            else
                            {
                                return Json("Please Enter 2022");
                            }


                            if (result.pop_22_23 != null && result.pop_22_23 != "")
                            {
                                Dataaa.pop_22_23 = result.pop_22_23;
                            }
                            else
                            {
                                return Json("Please Enter 2023");
                            }


                            if (result.pop_23_24 != null && result.pop_23_24 != "")
                            {
                                Dataaa.pop_23_24 = result.pop_23_24;
                            }
                            else
                            {
                                return Json("Please Enter 2024");
                            }


                            if (result.pop_24_25 != null && result.pop_24_25 != "")
                            {
                                Dataaa.pop_24_25 = result.pop_24_25;
                            }
                            else
                            {
                                return Json("Please Enter 2025");
                            }


                            // Dataaa.cumulative = result.cumulative;
                            Dataaa.userid = Convert.ToInt32(Session["UserId"]);
                            //ABE.obj_abhy_socialmgt_iec_activities.Add(Dataaa);
                            ABE.Entry(Dataaa).State = EntityState.Modified;
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


        [HttpGet]
        public ActionResult Socio_economic_demographic_profile_Info()
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
                            var Dataaa = ddetails.SingleOrDefault();
                            if (Session["gstate"] != null)
                            {
                                Dataaa.state_name = Session["gstate"].ToString();
                            }
                            else
                            {
                                Dataaa.state_name = State;
                            }
                            if (Session["gdist"] != null)
                            {
                                Dataaa.district_name = Session["gdist"].ToString();
                            }
                            else
                            {
                                Dataaa.district_name = Dist;
                            }
                            if (Session["ggram"] != null)
                            {
                                Dataaa.gpname = Session["ggram"].ToString();
                            }
                            else
                            {
                                Dataaa.gpname = Gram;
                            }
                            if (Session["gblock"] != null)
                            {
                                Dataaa.block_name = Session["gblock"].ToString();
                            }
                            else
                            {
                                Dataaa.block_name = Block;
                            }
                            if (result.male_basic_data != null && result.male_basic_data != "")
                            {
                                Dataaa.male_basic_data = result.male_basic_data;
                            }
                            else
                            {
                                return Json("Please Enter Male Census Year");
                            }
                            Dataaa.male_pop_20_21 = result.male_pop_20_21;
                            Dataaa.male_pop_21_22 = result.male_pop_21_22;
                            Dataaa.male_pop_22_23 = result.male_pop_22_23;
                            Dataaa.male_pop_23_24 = result.male_pop_23_24;
                            Dataaa.male_pop_24_25 = result.male_pop_24_25;
                            //Dataaa.male_cumulative = result.male_cumulative;
                            if (result.female_basic_data != null && result.female_basic_data != "")
                            {
                                Dataaa.female_basic_data = result.female_basic_data;
                            }
                            else
                            {
                                return Json("Please Enter FeMale Census Year");
                            }
                            Dataaa.female_pop_20_21 = result.female_pop_20_21;
                            Dataaa.female_pop_21_22 = result.female_pop_21_22;
                            Dataaa.female_pop_22_23 = result.female_pop_22_23;
                            Dataaa.female_pop_23_24 = result.female_pop_23_24;
                            Dataaa.female_pop_24_25 = result.female_pop_24_25;
                            //Dataaa.female_cumulative = result.female_cumulative;
                            if (result.sexratio_basic_data != null && result.sexratio_basic_data != "")
                            {
                                Dataaa.sexratio_basic_data = result.sexratio_basic_data;
                            }
                            else
                            {
                                return Json("Please Enter Sex Ratio(Women per 1000) Census Year");
                            }
                            Dataaa.sexratio_pop_20_21 = result.sexratio_pop_20_21;
                            Dataaa.sexratio_pop_21_22 = result.sexratio_pop_21_22;
                            Dataaa.sexratio_pop_22_23 = result.sexratio_pop_22_23;
                            Dataaa.sexratio_pop_23_24 = result.sexratio_pop_23_24;
                            Dataaa.sexratio_pop_24_25 = result.sexratio_pop_24_25;
                            //Dataaa.sexratio_cumulative = result.sexratio_cumulative;
                            if (result.other_basic_year != null && result.other_basic_year != "")
                            {
                                Dataaa.other_basic_year = result.other_basic_year;
                            }
                            else
                            {
                                return Json("Please Enter Other Census Year");
                            }
                            Dataaa.other_pop_20_21 = result.other_pop_20_21;
                            Dataaa.other_pop_21_22 = result.other_pop_21_22;
                            Dataaa.other_pop_22_23 = result.other_pop_22_23;
                            Dataaa.other_pop_23_24 = result.other_pop_23_24;
                            Dataaa.other_pop_24_25 = result.other_pop_24_25;
                            Dataaa.userid = Convert.ToInt32(Session["UserId"]);
                            //ABE.obj_abhy_socialmgt_iec_activities.Add(Dataaa);
                            ABE.Entry(Dataaa).State = EntityState.Modified;
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

        [HttpGet]
        public ActionResult abhy_socialmgt_vulnerable_communities_Info()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_socialmgt_vulnerable_communities> ddetails = new List<abhy_socialmgt_vulnerable_communities>();
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_vulnerable_communities.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_vulnerable_communities.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_vulnerable_communities.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                    }
                    else if (State != "" && State != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_vulnerable_communities.Where(x => x.state_name == State).ToList();//total list

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
        public ActionResult Save_abhy_socialmgt_vulnerable_communities_Info(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_socialmgt_vulnerable_communities> ddetails = new List<abhy_socialmgt_vulnerable_communities>();
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_vulnerable_communities.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_vulnerable_communities.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_vulnerable_communities.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                    }
                    else if (State != "" && State != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_vulnerable_communities.Where(x => x.state_name == State).ToList();//total list

                    }
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_socialmgt_vulnerable_communities>(Data);
                    if (ddetails.Count == 0)
                    {


                        var Details = new abhy_socialmgt_vulnerable_communities();

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

                        if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                        {
                            ddetails = ABE.obj_abhy_socialmgt_vulnerable_communities.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                        {
                            ddetails = ABE.obj_abhy_socialmgt_vulnerable_communities.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                        {
                            ddetails = ABE.obj_abhy_socialmgt_vulnerable_communities.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                        }
                        else if (State != "" && State != null)
                        {
                            ddetails = ABE.obj_abhy_socialmgt_vulnerable_communities.Where(x => x.state_name == State).ToList();//total list

                        }

                        Details.bpl_pop_20_21 = result.bpl_pop_20_21;

                        Details.bpl_pop_21_22 = result.bpl_pop_21_22;

                        Details.bpl_pop_22_23 = result.bpl_pop_22_23;

                        Details.bpl_pop_23_24 = result.bpl_pop_23_24;

                        Details.bpl_pop_24_25 = result.bpl_pop_24_25;

                        // Details.bpl_cumulative = result.bpl_cumulative;
                        if (result.sc_basic_data != "" && result.sc_basic_data != null)
                        {
                            Details.sc_basic_data = result.sc_basic_data;
                        }
                        else
                        {
                            return Json("Please Enter SC Census Year");
                        }
                        Details.sc_pop_20_21 = result.sc_pop_20_21;
                        Details.sc_pop_21_22 = result.sc_pop_21_22;
                        Details.sc_pop_22_23 = result.sc_pop_22_23;
                        Details.sc_pop_23_24 = result.sc_pop_23_24;
                        Details.sc_pop_24_25 = result.sc_pop_24_25;
                        //Details.sc_cumulative = result.sc_cumulative;
                        if (result.st_basic_data != "" && result.st_basic_data != null)
                        {
                            Details.st_basic_data = result.st_basic_data;
                        }
                        else
                        {
                            return Json("Please Enter ST Census Year");
                        }
                        Details.st_pop_20_21 = result.st_pop_20_21;
                        Details.st_pop_21_22 = result.st_pop_21_22;
                        Details.st_pop_22_23 = result.st_pop_22_23;
                        Details.st_pop_23_24 = result.st_pop_23_24;
                        Details.st_pop_24_25 = result.st_pop_24_25;
                        //Details.st_cumulative = result.st_cumulative;
                        if (result.obc_basic_data != "" && result.obc_basic_data != null)
                        {
                            Details.obc_basic_data = result.obc_basic_data;
                        }
                        else
                        {
                            return Json("Please Enter OBC Census Year");
                        }
                        Details.obc_pop_20_21 = result.obc_pop_20_21;
                        Details.obc_pop_21_22 = result.obc_pop_21_22;
                        Details.obc_pop_22_23 = result.obc_pop_22_23;
                        Details.obc_pop_23_24 = result.obc_pop_23_24;
                        Details.obc_pop_24_25 = result.obc_pop_24_25;
                        //Details.obc_cumulative = result.obc_cumulative;
                        if (result.minorities_basic_data != "" && result.minorities_basic_data != null)
                        {
                            Details.minorities_basic_data = result.minorities_basic_data;
                        }
                        else
                        {
                            return Json("Please Enter Religious minorities Census Year");
                        }
                        Details.minorities_pop_20_21 = result.minorities_pop_20_21;
                        Details.minorities_pop_21_22 = result.minorities_pop_21_22;
                        Details.minorities_pop_22_23 = result.minorities_pop_22_23;
                        Details.minorities_pop_23_24 = result.minorities_pop_23_24;
                        Details.minorities_pop_24_25 = result.minorities_pop_24_25;
                        //Details.minorities_cumulative = result.minorities_cumulative;
                        if (result.pwd_basic_data != "" && result.pwd_basic_data != null)
                        {
                            Details.pwd_basic_data = result.pwd_basic_data;
                        }
                        else
                        {
                            return Json("Please Enter Persons with Disabilities (PWD) Census Year");
                        }
                        Details.pwd_pop_20_21 = result.pwd_pop_20_21;
                        Details.pwd_pop_21_22 = result.pwd_pop_21_22;
                        Details.pwd_pop_22_23 = result.pwd_pop_22_23;
                        Details.pwd_pop_23_24 = result.pwd_pop_23_24;
                        Details.pwd_pop_24_25 = result.pwd_pop_24_25;
                        //Details.pwd_cumulative = result.pwd_cumulative;
                        if (result.women_hh_basic_data != "" && result.women_hh_basic_data != null)
                        {
                            Details.women_hh_basic_data = result.women_hh_basic_data;
                        }
                        else
                        {
                            return Json("Please Enter Women headed HH( No. of Households) Census Year");
                        }
                        Details.women_hh_pop_20_21 = result.women_hh_pop_20_21;
                        Details.women_hh_pop_21_22 = result.women_hh_pop_21_22;
                        Details.women_hh_pop_22_23 = result.women_hh_pop_22_23;
                        Details.women_hh_pop_23_24 = result.women_hh_pop_23_24;
                        Details.women_hh_pop_24_25 = result.women_hh_pop_24_25;
                        // Details.women_hh_cumulative = result.women_hh_cumulative;

                        Details.userid = Convert.ToInt32(Session["UserId"]);
                        ABE.obj_abhy_socialmgt_vulnerable_communities.Add(Details);
                        ABE.SaveChanges();
                        return Json("Successfully Saved", JsonRequestBehavior.AllowGet);
                    }
                    else
                    {

                        if (ddetails.Count == 1)
                        {
                            var Dataaa = ddetails.SingleOrDefault();
                            if (Session["gstate"] != null)
                            {
                                Dataaa.state_name = Session["gstate"].ToString();
                            }
                            else
                            {
                                Dataaa.state_name = State;
                            }
                            if (Session["gdist"] != null)
                            {
                                Dataaa.district_name = Session["gdist"].ToString();
                            }
                            else
                            {
                                Dataaa.district_name = Dist;
                            }
                            if (Session["ggram"] != null)
                            {
                                Dataaa.gpname = Session["ggram"].ToString();
                            }
                            else
                            {
                                Dataaa.gpname = Gram;
                            }
                            if (Session["gblock"] != null)
                            {
                                Dataaa.block_name = Session["gblock"].ToString();
                            }
                            else
                            {
                                Dataaa.block_name = Block;
                            }

                            if (result.bpl_basic_data != "" && result.bpl_basic_data != null)
                            {
                                Dataaa.bpl_basic_data = result.bpl_basic_data;
                            }
                            else
                            {
                                return Json("Please Enter General Census Year");
                            }

                            Dataaa.bpl_pop_20_21 = result.bpl_pop_20_21;

                            Dataaa.bpl_pop_21_22 = result.bpl_pop_21_22;

                            Dataaa.bpl_pop_22_23 = result.bpl_pop_22_23;

                            Dataaa.bpl_pop_23_24 = result.bpl_pop_23_24;

                            Dataaa.bpl_pop_24_25 = result.bpl_pop_24_25;


                            if (result.sc_basic_data != "" && result.sc_basic_data != null)
                            {
                                Dataaa.sc_basic_data = result.sc_basic_data;
                            }
                            else
                            {
                                return Json("Please Enter SC Census Year");
                            }
                            Dataaa.sc_pop_20_21 = result.sc_pop_20_21;
                            Dataaa.sc_pop_21_22 = result.sc_pop_21_22;
                            Dataaa.sc_pop_22_23 = result.sc_pop_22_23;
                            Dataaa.sc_pop_23_24 = result.sc_pop_23_24;
                            Dataaa.sc_pop_24_25 = result.sc_pop_24_25;

                            if (result.st_basic_data != "" && result.st_basic_data != null)
                            {
                                Dataaa.st_basic_data = result.st_basic_data;
                            }
                            else
                            {
                                return Json("Please Enter ST Census Year");
                            }
                            Dataaa.st_pop_20_21 = result.st_pop_20_21;
                            Dataaa.st_pop_21_22 = result.st_pop_21_22;
                            Dataaa.st_pop_22_23 = result.st_pop_22_23;
                            Dataaa.st_pop_23_24 = result.st_pop_23_24;
                            Dataaa.st_pop_24_25 = result.st_pop_24_25;
                            // Dataaa.st_cumulative = result.st_cumulative;

                            if (result.obc_basic_data != "" && result.obc_basic_data != null)
                            {
                                Dataaa.obc_basic_data = result.obc_basic_data;
                            }
                            else
                            {
                                return Json("Please Enter OBC Census Year");
                            }
                            Dataaa.obc_pop_20_21 = result.obc_pop_20_21;
                            Dataaa.obc_pop_21_22 = result.obc_pop_21_22;
                            Dataaa.obc_pop_22_23 = result.obc_pop_22_23;
                            Dataaa.obc_pop_23_24 = result.obc_pop_23_24;
                            Dataaa.obc_pop_24_25 = result.obc_pop_24_25;

                            if (result.minorities_basic_data != "" && result.minorities_basic_data != null)
                            {
                                Dataaa.minorities_basic_data = result.minorities_basic_data;
                            }
                            else
                            {
                                return Json("Please Enter Religious minorities Census Year");
                            }

                            Dataaa.minorities_pop_20_21 = result.minorities_pop_20_21;
                            Dataaa.minorities_pop_21_22 = result.minorities_pop_21_22;
                            Dataaa.minorities_pop_22_23 = result.minorities_pop_22_23;
                            Dataaa.minorities_pop_23_24 = result.minorities_pop_23_24;
                            Dataaa.minorities_pop_24_25 = result.minorities_pop_24_25;

                            if (result.pwd_basic_data != "" && result.pwd_basic_data != null)
                            {
                                Dataaa.pwd_basic_data = result.pwd_basic_data;
                            }
                            else
                            {
                                return Json("Please Enter Persons with Disabilities (PWD) Census Year");
                            }
                            Dataaa.pwd_pop_20_21 = result.pwd_pop_20_21;
                            Dataaa.pwd_pop_21_22 = result.pwd_pop_21_22;
                            Dataaa.pwd_pop_22_23 = result.pwd_pop_22_23;
                            Dataaa.pwd_pop_23_24 = result.pwd_pop_23_24;
                            Dataaa.pwd_pop_24_25 = result.pwd_pop_24_25;

                            if (result.women_hh_basic_data != "" && result.women_hh_basic_data != null)
                            {
                                Dataaa.women_hh_basic_data = result.women_hh_basic_data;
                            }
                            else
                            {
                                return Json("Please Enter Women headed HH( No. of Households) Census Year");
                            }
                            Dataaa.women_hh_pop_20_21 = result.women_hh_pop_20_21;
                            Dataaa.women_hh_pop_21_22 = result.women_hh_pop_21_22;
                            Dataaa.women_hh_pop_22_23 = result.women_hh_pop_22_23;
                            Dataaa.women_hh_pop_23_24 = result.women_hh_pop_23_24;
                            Dataaa.women_hh_pop_24_25 = result.women_hh_pop_24_25;
                            //   Dataaa.women_hh_cumulative = result.women_hh_cumulative;


                            Dataaa.userid = Convert.ToInt32(Session["UserId"]);
                            //ABE.obj_abhy_socialmgt_iec_activities.Add(Dataaa);
                            ABE.Entry(Dataaa).State = EntityState.Modified;
                            ABE.SaveChanges();
                            return Json("Successfully Saved", JsonRequestBehavior.AllowGet);
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


        //abhy_socialmgt_farmers
        [HttpGet]
        public ActionResult abhy_socialmgt_farmers_Info()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_socialmgt_farmers> ddetails = new List<abhy_socialmgt_farmers>();
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_farmers.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_farmers.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_farmers.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                    }
                    else if (State != "" && State != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_farmers.Where(x => x.state_name == State).ToList();//total list

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
                    List<abhy_socialmgt_farmers> ddetails = new List<abhy_socialmgt_farmers>();
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_farmers.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_farmers.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_farmers.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                    }
                    else if (State != "" && State != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_farmers.Where(x => x.state_name == State).ToList();//total list

                    }
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_socialmgt_farmers>(Data);
                    if (ddetails.Count == 0)
                    {


                        var Details = new abhy_socialmgt_farmers();

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

                        if (result.large_basic_data != "" && result.large_basic_data != null)
                        {
                            Details.large_basic_data = result.large_basic_data;
                        }
                        else
                        {
                            return Json("Please Enter Large Census Year");
                        }

                        Details.large_pop_20_21 = result.large_pop_20_21;

                        Details.large_pop_21_22 = result.large_pop_21_22;

                        Details.large_pop_22_23 = result.large_pop_22_23;

                        Details.large_pop_23_24 = result.large_pop_23_24;

                        Details.large_pop_24_25 = result.large_pop_24_25;

                        //  Details.large_cumulative = result.large_cumulative;

                        if (result.marginal_basic_data != "" && result.marginal_basic_data != null)
                        {
                            Details.marginal_basic_data = result.marginal_basic_data;
                        }
                        else
                        {
                            return Json("Please Enter Marginal Census Year");
                        }

                        Details.marginal_pop_20_21 = result.marginal_pop_20_21;
                        Details.marginal_pop_21_22 = result.marginal_pop_21_22;
                        Details.marginal_pop_22_23 = result.marginal_pop_22_23;
                        Details.marginal_pop_23_24 = result.marginal_pop_23_24;
                        Details.marginal_pop_24_25 = result.marginal_pop_24_25;
                        //Details.marginal_cumulative = result.marginal_cumulative;

                        if (result.small_basic_data != "" && result.small_basic_data != null)
                        {
                            Details.small_basic_data = result.small_basic_data;
                        }
                        else
                        {
                            return Json("Please Enter Small Census Year");
                        }
                        Details.small_pop_20_21 = result.small_pop_20_21;
                        Details.small_pop_21_22 = result.small_pop_21_22;
                        Details.small_pop_22_23 = result.small_pop_22_23;
                        Details.small_pop_23_24 = result.small_pop_23_24;
                        Details.small_pop_24_25 = result.small_pop_24_25;

                        if (result.medium_basic_data != "" && result.medium_basic_data != null)
                        {
                            Details.medium_basic_data = result.medium_basic_data;
                        }
                        else
                        {
                            return Json("Please Enter Medium Census Year");
                        }
                        Details.medium_pop_20_21 = result.medium_pop_20_21;
                        Details.medium_pop_21_22 = result.medium_pop_21_22;
                        Details.medium_pop_22_23 = result.medium_pop_22_23;
                        Details.medium_pop_23_24 = result.medium_pop_23_24;
                        Details.medium_pop_24_25 = result.medium_pop_24_25;
                        //Details.medium_cumulative = result.medium_cumulative;

                        Details.landless_pop_20_21 = result.landless_pop_20_21;
                        Details.landless_pop_21_22 = result.landless_pop_21_22;
                        Details.landless_pop_22_23 = result.landless_pop_22_23;
                        Details.landless_pop_23_24 = result.landless_pop_23_24;
                        Details.landless_pop_24_25 = result.landless_pop_24_25;
                        //Details.landless_cumulative = result.landless_cumulative;


                        Details.userid = Convert.ToInt32(Session["UserId"]);
                        ABE.obj_abhy_socialmgt_farmers.Add(Details);
                        ABE.SaveChanges();
                        return Json("Successfully Saved", JsonRequestBehavior.AllowGet);
                    }
                    else
                    {
                        if (ddetails.Count == 1)
                        {
                            var Dataaa = ddetails.SingleOrDefault();
                            if (Session["gstate"] != null)
                            {
                                Dataaa.state_name = Session["gstate"].ToString();
                            }
                            else
                            {
                                Dataaa.state_name = State;
                            }
                            if (Session["gdist"] != null)
                            {
                                Dataaa.district_name = Session["gdist"].ToString();
                            }
                            else
                            {
                                Dataaa.district_name = Dist;
                            }
                            if (Session["ggram"] != null)
                            {
                                Dataaa.gpname = Session["ggram"].ToString();
                            }
                            else
                            {
                                Dataaa.gpname = Gram;
                            }
                            if (Session["gblock"] != null)
                            {
                                Dataaa.block_name = Session["gblock"].ToString();
                            }
                            else
                            {
                                Dataaa.block_name = Block;
                            }

                            if (result.large_basic_data != "" && result.large_basic_data != null)
                            {
                                Dataaa.large_basic_data = result.large_basic_data;
                            }
                            else
                            {
                                return Json("Please Enter Large Census Year");
                            }

                            Dataaa.large_pop_20_21 = result.large_pop_20_21;

                            Dataaa.large_pop_21_22 = result.large_pop_21_22;

                            Dataaa.large_pop_22_23 = result.large_pop_22_23;

                            Dataaa.large_pop_23_24 = result.large_pop_23_24;

                            Dataaa.large_pop_24_25 = result.large_pop_24_25;


                            if (result.marginal_basic_data != "" && result.marginal_basic_data != null)
                            {
                                Dataaa.marginal_basic_data = result.marginal_basic_data;
                            }
                            else
                            {
                                return Json("Please Enter Marginal Census Year");
                            }

                            Dataaa.marginal_pop_20_21 = result.marginal_pop_20_21;
                            Dataaa.marginal_pop_21_22 = result.marginal_pop_21_22;
                            Dataaa.marginal_pop_22_23 = result.marginal_pop_22_23;
                            Dataaa.marginal_pop_23_24 = result.marginal_pop_23_24;
                            Dataaa.marginal_pop_24_25 = result.marginal_pop_24_25;

                            if (result.small_basic_data != "" && result.small_basic_data != null)
                            {
                                Dataaa.small_basic_data = result.small_basic_data;
                            }
                            else
                            {
                                return Json("Please Enter Small Census Year");
                            }
                            Dataaa.small_pop_20_21 = result.small_pop_20_21;
                            Dataaa.small_pop_21_22 = result.small_pop_21_22;
                            Dataaa.small_pop_22_23 = result.small_pop_22_23;
                            Dataaa.small_pop_23_24 = result.small_pop_23_24;
                            Dataaa.small_pop_24_25 = result.small_pop_24_25;
                            //Dataaa.small_cumulative = result.small_cumulative;
                            if (result.medium_basic_data != "" && result.medium_basic_data != null)
                            {
                                Dataaa.medium_basic_data = result.medium_basic_data;
                            }
                            else
                            {
                                return Json("Please Enter Medium Census Year");
                            }

                            Dataaa.medium_pop_20_21 = result.medium_pop_20_21;
                            Dataaa.medium_pop_21_22 = result.medium_pop_21_22;
                            Dataaa.medium_pop_22_23 = result.medium_pop_22_23;
                            Dataaa.medium_pop_23_24 = result.medium_pop_23_24;
                            Dataaa.medium_pop_24_25 = result.medium_pop_24_25;
                            //Dataaa.medium_cumulative = result.medium_cumulative;
                            Dataaa.landless_basic_data = result.landless_basic_data;
                            Dataaa.landless_pop_20_21 = result.landless_pop_20_21;
                            Dataaa.landless_pop_21_22 = result.landless_pop_21_22;
                            Dataaa.landless_pop_22_23 = result.landless_pop_22_23;
                            Dataaa.landless_pop_23_24 = result.landless_pop_23_24;
                            Dataaa.landless_pop_24_25 = result.landless_pop_24_25;
                            //Dataaa.landless_cumulative = result.landless_cumulative;


                            Dataaa.userid = Convert.ToInt32(Session["UserId"]);
                            //ABE.obj_abhy_socialmgt_iec_activities.Add(Dataaa);
                            ABE.Entry(Dataaa).State = EntityState.Modified;
                            ABE.SaveChanges();
                            return Json("Successfully Saved", JsonRequestBehavior.AllowGet);
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

        //Village/Ward/Commumity Meetings
        [HttpGet]
        public ActionResult abhy_socialmgt_village_meetings_Info()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_socialmgt_village_meetings> ddetails = new List<abhy_socialmgt_village_meetings>();
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();


                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_village_meetings.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_village_meetings.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_village_meetings.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                    }
                    else if (State != "" && State != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_village_meetings.Where(x => x.state_name == State).ToList();//total list

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
        public ActionResult Save_abhy_socialmgt_village_meetings_Info(string location, string prior_info, string noof_attendees, string male, string female, string other, string total, string disaggregated_data, string key_issues, HttpPostedFileBase mom, HttpPostedFileBase photographs, string name_of_meeting, string curr_date)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_socialmgt_village_meetings> ddetails = new List<abhy_socialmgt_village_meetings>();
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_village_meetings.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_village_meetings.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_village_meetings.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                    }
                    else if (State != "" && State != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_village_meetings.Where(x => x.state_name == State).ToList();//total list

                    }

                    Malicious_File_Upload_Restriction obj_Validate = new Malicious_File_Upload_Restriction();
                    string allowed_file_format = "pdf,jpg,png,jpeg";


                    var Details = new abhy_socialmgt_village_meetings();

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

                    Details.noof_attendees = noof_attendees;
                    Details.male = male;
                    Details.female = female;
                    Details.other = other;
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

                        bool flag = obj_Validate.CheckValidFile(mom, allowed_file_format);
                        if (flag == false)
                        {
                            return Json("Your Upload file has Not valid File, Please Upload proper file", JsonRequestBehavior.AllowGet);
                        }


                        if (mom.FileName != null)
                        {
                            String FileExt = Path.GetExtension(mom.FileName).ToUpper();

                            string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                            string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");
                            string name = Path.GetFileNameWithoutExtension(mom.FileName);                           
                            string fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{FileExt}";
                            path = path + fname;
                            string[] count = mom.FileName.Split('.');
                            if (count.Length != 2)
                            {
                                return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                            }
                            mom.SaveAs(path);
                            Details.mom_filename = fname;
                            Details.mom = "/Ataljalimages/" + fname;

                        }
                    }

                    if (photographs != null)
                    {
                        bool flag1 = obj_Validate.CheckValidFile(photographs, allowed_file_format);
                        if (flag1 == false)
                        {
                            return Json("Your Upload file has Not valid File, Please Upload proper file", JsonRequestBehavior.AllowGet);
                        }
                        if (photographs.FileName != null)
                        {
                            String FileExt = Path.GetExtension(photographs.FileName).ToUpper();

                            string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                            string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");
                            string name = Path.GetFileNameWithoutExtension(photographs.FileName);
                            string fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{FileExt}";
                            path = path + fname;
                            string[] count = photographs.FileName.Split('.');
                            if (count.Length != 2)
                            {
                                return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                            }
                            photographs.SaveAs(path);
                            Details.photographs_filename = fname;
                            Details.photographs = "/Ataljalimages/" + fname;

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

                    Details.curr_date = curr_date;

                    Details.userid = Convert.ToInt32(Session["UserId"]);
                    ABE.obj_abhy_socialmgt_village_meetings.Add(Details);
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
                                string name = Path.GetFileNameWithoutExtension(community_feedback.FileName);
                                string fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{FileExt}";
                                path = path + fname;
                                string[] count = community_feedback.FileName.Split('.');
                                if (count.Length != 2)
                                {
                                    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                }
                                community_feedback.SaveAs(path);
                                Details.community_feedback_filename = fname;
                                Details.community_feedback = "/Ataljalimages/" + fname; 

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

                            var Dataaa = ddetails.SingleOrDefault();
                            if (Session["gstate"] != null)
                            {
                                Dataaa.state_name = Session["gstate"].ToString();
                            }
                            else
                            {
                                Dataaa.state_name = State;
                            }
                            if (Session["gdist"] != null)
                            {
                                Dataaa.district_name = Session["gdist"].ToString();
                            }
                            else
                            {
                                Dataaa.district_name = Dist;
                            }
                            if (Session["ggram"] != null)
                            {
                                Dataaa.gpname = Session["ggram"].ToString();
                            }
                            else
                            {
                                Dataaa.gpname = Gram;
                            }
                            if (Session["gblock"] != null)
                            {
                                Dataaa.block_name = Session["gblock"].ToString();
                            }
                            else
                            {
                                Dataaa.block_name = Block;
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
                                    string name = Path.GetFileNameWithoutExtension(community_feedback.FileName);
                                    string fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{FileExt}";
                                    path = path + fname;
                                    string[] count = community_feedback.FileName.Split('.');
                                    if (count.Length != 2)
                                    {
                                        return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                    }
                                    community_feedback.SaveAs(path);
                                    Dataaa.community_feedback = "/Ataljalimages/" + fname;

                                }
                            }


                            Dataaa.userid = Convert.ToInt32(Session["UserId"]);
                            //ABE.obj_abhy_socialmgt_iec_activities.Add(Dataaa);
                            ABE.Entry(Dataaa).State = EntityState.Modified;
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
        public JsonResult delete_socialmgt_capacity_building_Info(int id)
        {
            var obj = new abhy_socialmgt_capacity_building();
            obj.id = id;
            ABE.Entry(obj).State = EntityState.Deleted;
            //ABE.obj_dli4_area_with_crop_shifting.Remove(obj);
            int rs = ABE.SaveChanges();
            return Json(rs, JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public ActionResult Save_abhy_socialmgt_capacity_building_Info(HttpPostedFileBase training_schedule, HttpPostedFileBase training_materials, HttpPostedFileBase noof_trainings, HttpPostedFileBase training_report, HttpPostedFileBase achievements, HttpPostedFileBase findings_of_survey, HttpPostedFileBase actual_training, string training_date, string name_of_training, string training_location)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    int k = 0;
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
                    string allowed_file_format = "jpg,png,jpeg,doc,docx,pdf,PDF";
                    if (training_schedule != null)
                    {
                        ++k;
                        string ext = Path.GetExtension(training_schedule.FileName);
                        string name = Path.GetFileNameWithoutExtension(training_schedule.FileName);
                        string FileName = name + DateTime.Now.Ticks + k + ext;
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
                        ++k;
                        string ext = Path.GetExtension(training_materials.FileName);
                        string name = Path.GetFileNameWithoutExtension(training_materials.FileName);
                        string FileName = name + DateTime.Now.Ticks + k + ext;
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
                        ++k;
                        string ext = Path.GetExtension(noof_trainings.FileName);
                        string name = Path.GetFileNameWithoutExtension(noof_trainings.FileName);
                        string FileName = name + DateTime.Now.Ticks + k + ext;
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
                        ++k;
                        string ext = Path.GetExtension(training_report.FileName);
                        string name = Path.GetFileNameWithoutExtension(training_report.FileName);
                        string FileName = name + DateTime.Now.Ticks + k + ext;
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
                        ++k;
                        string ext = Path.GetExtension(achievements.FileName);
                        string name = Path.GetFileNameWithoutExtension(achievements.FileName);
                        string FileName = name + DateTime.Now.Ticks + k + ext;
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
                        ++k;
                        string ext = Path.GetExtension(findings_of_survey.FileName);
                        string name = Path.GetFileNameWithoutExtension(findings_of_survey.FileName);
                        string FileName = name + DateTime.Now.Ticks + k + ext;
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
                        ++k;
                        string ext = Path.GetExtension(actual_training.FileName);
                        string name = Path.GetFileNameWithoutExtension(actual_training.FileName);
                        string FileName = name + DateTime.Now.Ticks + k + ext;
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

        [HttpGet]
        public ActionResult abhy_socialmgt_capacity_building_Info()
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

        [HttpGet]
        public ActionResult abhy_GRM_Info()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_socialmgt_grm> ddetails = new List<abhy_socialmgt_grm>();
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_grm.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_grm.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_grm.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                    }
                    else if (State != "" && State != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_grm.Where(x => x.state_name == State).ToList();//total list

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
                    List<abhy_socialmgt_grm> ddetails = new List<abhy_socialmgt_grm>();
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_grm.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_grm.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_grm.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                    }
                    else if (State != "" && State != null)
                    {
                        ddetails = ABE.obj_abhy_socialmgt_grm.Where(x => x.state_name == State).ToList();//total list

                    }
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_socialmgt_grm>(Data);
                    if (ddetails.Count == 0)
                    {


                        var Details = new abhy_socialmgt_grm();

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

                        Details.sys_aval = result.sys_aval;
                        Details.tollfreeno = result.tollfreeno;
                        Details.adds_dissemination = result.adds_dissemination;
                        Details.noof_complaints = result.noof_complaints;
                        Details.noof_resolved = result.noof_resolved;
                        Details.noof_pending = result.noof_pending;


                        Details.userid = Convert.ToInt32(Session["UserId"]);
                        ABE.obj_abhy_socialmgt_grm.Add(Details);
                        ABE.SaveChanges();
                        return Json("Successfully Saved", JsonRequestBehavior.AllowGet);
                    }
                    else
                    {
                        if (ddetails.Count == 1)
                        {
                            var Dataaa = ddetails.SingleOrDefault();
                            if (Session["gstate"] != null)
                            {
                                Dataaa.state_name = Session["gstate"].ToString();
                            }
                            else
                            {
                                Dataaa.state_name = State;
                            }
                            if (Session["gdist"] != null)
                            {
                                Dataaa.district_name = Session["gdist"].ToString();
                            }
                            else
                            {
                                Dataaa.district_name = Dist;
                            }
                            if (Session["ggram"] != null)
                            {
                                Dataaa.gpname = Session["ggram"].ToString();
                            }
                            else
                            {
                                Dataaa.gpname = Gram;
                            }
                            if (Session["gblock"] != null)
                            {
                                Dataaa.block_name = Session["gblock"].ToString();
                            }
                            else
                            {
                                Dataaa.block_name = Block;
                            }

                            Dataaa.sys_aval = result.sys_aval;
                            Dataaa.tollfreeno = result.tollfreeno;
                            Dataaa.adds_dissemination = result.adds_dissemination;
                            Dataaa.noof_complaints = result.noof_complaints;
                            Dataaa.noof_resolved = result.noof_resolved;
                            Dataaa.noof_pending = result.noof_pending;


                            Dataaa.userid = Convert.ToInt32(Session["UserId"]);
                            //ABE.obj_abhy_socialmgt_iec_activities.Add(Dataaa);
                            ABE.Entry(Dataaa).State = EntityState.Modified;
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


    }
}