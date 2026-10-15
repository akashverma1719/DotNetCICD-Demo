using AbhyProject.Classes;
using AbhyProject.Excel;
using AbhyProject.Models;
using AbhyProject.Utility;
using DocumentFormat.OpenXml.Drawing.Charts;
using DocumentFormat.OpenXml.Wordprocessing;
using OpenXmlPowerTools;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Core.Metadata.Edm;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;
using System.Web.Services.Description;

namespace AbhyProject.Controllers
{
    public class mis_newController : Controller
    {
        AbhyEntity ABE = new AbhyEntity();
        // GET: mis_new
        public ActionResult Index()
        {
            
            return View();
        }
        public ActionResult report_summery()
        {
            
            return View();
        }
        public ActionResult NPMU_report_1()
        {
            
            return View();
        }
        public ActionResult NPMU_report_2()
        {
            
            return View();
        }
        public ActionResult NPMU_report_3()
        {
            
            return View();
        }
        public ActionResult pip()
        {
           
            return View();
        }
        [HttpGet]
        public ActionResult TESTING()
        {
            return View();
        }
        [HttpPost]
        public ActionResult TESTING(string Name, HttpPostedFileBase studImg)
        {
            return View();
        }
        [HttpGet]

        public ActionResult AWP_Fetch()
        {

            List<abhy_mis_pip_form> ddetails = new List<abhy_mis_pip_form>();
            ddetails = ABE.obj_abhy_mis_pip_form.ToList();//total list
            return Json(ddetails, JsonRequestBehavior.AllowGet);

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
                    if (Session["Officer"] != null && Session["Officer"].ToString() == "State Level Nodal Officer")
                    {
                        if (Session["gstate"] != null && Session["gstate"].ToString() != "0" && Session["gstate"].ToString() != "")
                        {
                            var Statename = Session["gstate"].ToString();
                            return Json(Statename, JsonRequestBehavior.AllowGet);
                        }
                        else
                        {
                            return Json("Admin", JsonRequestBehavior.AllowGet);

                        }
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
        public ActionResult PIP_WorkActivity_Info()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    
                    List<abhy_mis_pip_activity> ddetails = ABE.obj_abhy_mis_pip_activity.OrderBy(x => x.pip_item_code).ToList();//total list

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

        [HttpGet]
        public ActionResult PIP_Agency_Info()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    
                    List<abhy_mis_pip_awp_feedback> ddetails = ABE.obj_abhy_mis_pip_awp_feedback.ToList();//total list

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
        public ActionResult report_data(String state, string year)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    
                    if (state == "0")
                    {
                        state = Session["gstate"].ToString();
                    }
                    List<abhy_mis_pip_form> ddetails = new List<abhy_mis_pip_form>();
                    List<abhy_mis_awp_form> ddetails1 = new List<abhy_mis_awp_form>();

                    if (year == "ALL")
                    {
                        ddetails = ABE.obj_abhy_mis_pip_form.Where(x => x.state_name == state).ToList();//total list
                        return Json(ddetails, JsonRequestBehavior.AllowGet);
                    }
                    else
                    {
                        ddetails1 = ABE.obj_abhy_mis_awp_form.Where(x => x.state_name == state && x.awp_fin_year == year).ToList();//total list
                        return Json(ddetails1, JsonRequestBehavior.AllowGet);
                    }
                    return Json(ddetails1, JsonRequestBehavior.AllowGet);
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
        public ActionResult report_data_monthly(String state, string year, int month)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    
                    if (state == "0")
                    {
                        state = Session["gstate"].ToString();
                    }
                    List<abhy_physicalmonitoring_insertdata_view> ddetails = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == state && x.support_year == year && x.month_number == month).ToList();//total list
                                                                                                                                                                                                                             //decimal totolsum = ddetails.Sum(x => Convert.ToDecimal(x.support_item_procured));
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
        public ActionResult report_data_cum(String state, string year)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    
                    List<abhy_physicalmonitoring_insertdata_view> ddetails = new List<abhy_physicalmonitoring_insertdata_view>();
                    if (state == "0")
                    {
                        state = Session["gstate"].ToString();
                    }
                    if (year == "ALL")
                    {
                        ddetails = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == state).OrderBy(x => x.support_item_code).ToList();
                    }
                    else
                    {
                        ddetails = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == state && x.support_year == year).OrderBy(x => x.support_item_code).ToList();
                    }

                    //decimal totolsum = ddetails.Sum(x => Convert.ToDecimal(x.support_item_procured));
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
        public ActionResult report_data_cum_new(String state, string year, int month)
        {
            if (Session["UserId"] != null)
            {
                try
                {

                    
                    List<abhy_physicalmonitoring_insertdata_view> alldata = new List<abhy_physicalmonitoring_insertdata_view>();

                    var dd = ABE.obj_abhy_physicalmonitoring_insertdata_view.ToList();
                    if (state == "0")
                    {
                        state = Session["gstate"].ToString();
                    }
                    if (state != "0" && state != "null" && state != "" && year != "0" && year != "null" && year != "" && month != 0)
                    {
                        var dt1 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == state && x.support_year == year && x.month_number == month && x.support_item_code == "A1.1.01").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt1 != null)
                        {
                            alldata.Add(dt1);
                        }
                        var dt2 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == state && x.support_year == year && x.month_number == month && x.support_item_code == "A1.1.02").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt2 != null)
                        {
                            alldata.Add(dt2);
                        }
                        var dt3 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == state && x.support_year == year && x.month_number == month && x.support_item_code == "A1.2.01").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt3 != null)
                        {
                            alldata.Add(dt3);
                        }
                        var dt4 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == state && x.support_year == year && x.month_number == month && x.support_item_code == "A1.2.02").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt4 != null)
                        {
                            alldata.Add(dt4);
                        }
                        var dt5 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == state && x.support_year == year && x.month_number == month && x.support_item_code == "A1.2.03").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt5 != null)
                        {
                            alldata.Add(dt5);
                        }
                        var dt6 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == state && x.support_year == year && x.month_number == month && x.support_item_code == "A1.2.03").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt6 != null)
                        {
                            alldata.Add(dt6);
                        }
                        var dt7 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == state && x.support_year == year && x.month_number == month && x.support_item_code == "A1.2.05").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt7 != null)
                        {
                            alldata.Add(dt7);
                        }
                        var dt8 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == state && x.support_year == year && x.month_number == month && x.support_item_code == "A1.2.06").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt8 != null)
                        {
                            alldata.Add(dt8);
                        }
                        var dt9 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == state && x.support_year == year && x.month_number == month && x.support_item_code == "A1.2.07").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt9 != null)
                        {
                            alldata.Add(dt9);
                        }
                    }
                    else if (state != "0" && state != "null" && state != "" && year != "0" && year != "ALL" && year != "")
                    {
                        var dt1 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == state && x.support_year == year && x.support_item_code == "A1.1.01").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt1 != null)
                        {
                            alldata.Add(dt1);
                        }
                        var dt2 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == state && x.support_year == year && x.support_item_code == "A1.1.02").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt2 != null)
                        {
                            alldata.Add(dt2);
                        }
                        var dt3 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == state && x.support_year == year && x.support_item_code == "A1.2.01").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt3 != null)
                        {
                            alldata.Add(dt3);
                        }
                        var dt4 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == state && x.support_year == year && x.support_item_code == "A1.2.02").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt4 != null)
                        {
                            alldata.Add(dt4);
                        }
                        var dt5 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == state && x.support_year == year && x.support_item_code == "A1.2.03").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt5 != null)
                        {
                            alldata.Add(dt5);
                        }
                        var dt6 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == state && x.support_year == year && x.support_item_code == "A1.2.03").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt6 != null)
                        {
                            alldata.Add(dt6);
                        }
                        var dt7 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == state && x.support_year == year && x.support_item_code == "A1.2.05").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt7 != null)
                        {
                            alldata.Add(dt7);
                        }
                        var dt8 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == state && x.support_year == year && x.support_item_code == "A1.2.06").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt8 != null)
                        {
                            alldata.Add(dt8);
                        }
                        var dt9 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == state && x.support_year == year && x.support_item_code == "A1.2.07").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt9 != null)
                        {
                            alldata.Add(dt9);
                        }
                    }
                    else if (year == "ALL")
                    {
                        var dt1 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == state && x.support_item_code == "A1.1.01").OrderByDescending(x => x.fyyear).ToList();
                        var dd1 = dt1.Where(x => x.fyyear == dt1[0].fyyear).OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dd1 != null)
                        {
                            alldata.Add(dd1);
                        }
                        var dt2 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == state && x.support_item_code == "A1.1.02").OrderByDescending(x => x.fyyear).ToList();
                        var dd2 = dt2.Where(x => x.fyyear == dt2[0].fyyear).OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dd2 != null)
                        {
                            alldata.Add(dd1);
                        }
                        var dt3 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == state && x.support_item_code == "A1.2.01").OrderByDescending(x => x.fyyear).ToList();
                        var dd3 = dt3.Where(x => x.fyyear == dt3[0].fyyear).OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dd3 != null)
                        {
                            alldata.Add(dd3);
                        }
                        var dt4 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == state && x.support_item_code == "A1.2.02").OrderByDescending(x => x.fyyear).ToList();
                        var dd4 = dt4.Where(x => x.fyyear == dt4[0].fyyear).OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dd4 != null)
                        {
                            alldata.Add(dd4);
                        }
                        var dt5 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == state && x.support_item_code == "A1.2.03").OrderByDescending(x => x.fyyear).ToList();
                        var dd5 = dt5.Where(x => x.fyyear == dt5[0].fyyear).OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dd5 != null)
                        {
                            alldata.Add(dd5);
                        }
                        var dt6 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == state && x.support_item_code == "A1.2.03").OrderByDescending(x => x.fyyear).ToList();
                        var dd6 = dt6.Where(x => x.fyyear == dt6[0].fyyear).OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dd6 != null)
                        {
                            alldata.Add(dd6);
                        }
                        var dt7 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == state && x.support_item_code == "A1.2.05").OrderByDescending(x => x.fyyear).ToList();
                        var dd7 = dt7.Where(x => x.fyyear == dt7[0].fyyear).OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dd7 != null)
                        {
                            alldata.Add(dd7);
                        }
                        var dt8 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == state && x.support_item_code == "A1.2.06").OrderByDescending(x => x.fyyear).ToList();
                        var dd8 = dt8.Where(x => x.fyyear == dt8[0].fyyear).OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dd8 != null)
                        {
                            alldata.Add(dd8);
                        }
                        var dt9 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == state && x.support_item_code == "A1.2.07").OrderByDescending(x => x.fyyear).ToList();
                        var dd9 = dt9.Where(x => x.fyyear == dt9[0].fyyear).OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dd9 != null)
                        {
                            alldata.Add(dd9);
                        }
                    }


                    //decimal totolsum = ddetails.Sum(x => Convert.ToDecimal(x.support_item_procured));
                    return Json(alldata, JsonRequestBehavior.AllowGet);

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
        public ActionResult report_data_cum_new_report3(string year, int month)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                   

                    List<abhy_physicalmonitoring_insertdata_view> alldata = new List<abhy_physicalmonitoring_insertdata_view>();

                    if (year != "0" && year != "null" && year != "" && month != 0)
                    {
                        var dt1 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Gujarat_24" && x.support_year == year && x.month_number == month && x.support_type == "Support" && x.support_name == "Hiring of Agency/Domain Experts for SPMU").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt1 != null)
                        {
                            alldata.Add(dt1);
                        }
                        var dt2 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Haryana_6" && x.support_year == year && x.month_number == month && x.support_type == "Support" && x.support_name == "Hiring of Agency/Domain Experts for SPMU").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt2 != null)
                        {
                            alldata.Add(dt2);
                        }
                        var dt3 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Karnataka_29" && x.support_year == year && x.month_number == month && x.support_type == "Support" && x.support_name == "Hiring of Agency/Domain Experts for SPMU").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt3 != null)
                        {
                            alldata.Add(dt3);
                        }
                        var dt4 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Madhya Pradesh_23" && x.support_year == year && x.month_number == month && x.support_type == "Support" && x.support_name == "Hiring of Agency/Domain Experts for SPMU").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt4 != null)
                        {
                            alldata.Add(dt4);
                        }
                        var dt5 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Rajasthan_8" && x.support_year == year && x.month_number == month && x.support_type == "Support" && x.support_name == "Hiring of Agency/Domain Experts for SPMU").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt5 != null)
                        {
                            alldata.Add(dt5);
                        }
                        var dt6 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Maharashtra_27" && x.support_year == year && x.month_number == month && x.support_type == "Support" && x.support_name == "Hiring of Agency/Domain Experts for SPMU").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt6 != null)
                        {
                            alldata.Add(dt6);
                        }
                        var dt7 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Uttar Pradesh_9" && x.support_year == year && x.month_number == month && x.support_type == "Support" && x.support_name == "Hiring of Agency/Domain Experts for SPMU").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt7 != null)
                        {
                            alldata.Add(dt7);
                        }

                        var dt8 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Gujarat_24" && x.support_year == year && x.month_number == month && x.support_type == "Support" && x.support_name == "Hiring of Agency/Domain Experts for DPMU").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt8 != null)
                        {
                            alldata.Add(dt8);
                        }
                        var dt9 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Haryana_6" && x.support_year == year && x.month_number == month && x.support_type == "Support" && x.support_name == "Hiring of Agency/Domain Experts for DPMU").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt9 != null)
                        {
                            alldata.Add(dt9);
                        }
                        var dt10 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Karnataka_29" && x.support_year == year && x.month_number == month && x.support_type == "Support" && x.support_name == "Hiring of Agency/Domain Experts for DPMU").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt10 != null)
                        {
                            alldata.Add(dt10);
                        }
                        var dt11 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Madhya Pradesh_23" && x.support_year == year && x.month_number == month && x.support_type == "Support" && x.support_name == "Hiring of Agency/Domain Experts for DPMU").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt11 != null)
                        {
                            alldata.Add(dt11);
                        }
                        var dt12 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Rajasthan_8" && x.support_year == year && x.month_number == month && x.support_type == "Support" && x.support_name == "Hiring of Agency/Domain Experts for DPMU").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt12 != null)
                        {
                            alldata.Add(dt12);
                        }
                        var dt13 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Maharashtra_27" && x.support_year == year && x.month_number == month && x.support_type == "Support" && x.support_name == "Hiring of Agency/Domain Experts for DPMU").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt13 != null)
                        {
                            alldata.Add(dt13);
                        }
                        var dt14 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Uttar Pradesh_9" && x.support_year == year && x.month_number == month && x.support_type == "Support" && x.support_name == "Hiring of Agency/Domain Experts for DPMU").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt14 != null)
                        {
                            alldata.Add(dt14);
                        }

                        var dt15 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Gujarat_24" && x.support_year == year && x.month_number == month && x.support_type == "Support" && x.support_name == "Hiring of Support Staff for SPMU (Field Staff/MTS/Guards,etc..)").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt15 != null)
                        {
                            alldata.Add(dt15);
                        }
                        var dt16 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Haryana_6" && x.support_year == year && x.month_number == month && x.support_type == "Support" && x.support_name == "Hiring of Support Staff for SPMU (Field Staff/MTS/Guards,etc..)").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt16 != null)
                        {
                            alldata.Add(dt16);
                        }
                        var dt17 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Karnataka_29" && x.support_year == year && x.month_number == month && x.support_type == "Support" && x.support_name == "Hiring of Support Staff for SPMU (Field Staff/MTS/Guards,etc..)").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt17 != null)
                        {
                            alldata.Add(dt17);
                        }
                        var dt18 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Madhya Pradesh_23" && x.support_year == year && x.month_number == month && x.support_type == "Support" && x.support_name == "Hiring of Support Staff for SPMU (Field Staff/MTS/Guards,etc..)").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt18 != null)
                        {
                            alldata.Add(dt18);
                        }
                        var dt19 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Rajasthan_8" && x.support_year == year && x.month_number == month && x.support_type == "Support" && x.support_name == "Hiring of Support Staff for SPMU (Field Staff/MTS/Guards,etc..)").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt19 != null)
                        {
                            alldata.Add(dt19);
                        }
                        var dt20 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Maharashtra_27" && x.support_year == year && x.month_number == month && x.support_type == "Support" && x.support_name == "Hiring of Support Staff for SPMU (Field Staff/MTS/Guards,etc..)").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt20 != null)
                        {
                            alldata.Add(dt20);
                        }
                        var dt21 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Uttar Pradesh_9" && x.support_year == year && x.month_number == month && x.support_type == "Support" && x.support_name == "Hiring of Support Staff for SPMU (Field Staff/MTS/Guards,etc..)").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt21 != null)
                        {
                            alldata.Add(dt21);
                        }

                        var dt22 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Gujarat_24" && x.support_year == year && x.month_number == month && x.support_type == "Support" && x.support_name == "Hiring of Support Staff for DPMU (Field Staff/MTS/Guards,etc..)").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt22 != null)
                        {
                            alldata.Add(dt22);
                        }
                        var dt23 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Haryana_6" && x.support_year == year && x.month_number == month && x.support_type == "Support" && x.support_name == "Hiring of Support Staff for DPMU (Field Staff/MTS/Guards,etc..)").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt23 != null)
                        {
                            alldata.Add(dt23);
                        }
                        var dt24 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Karnataka_29" && x.support_year == year && x.month_number == month && x.support_type == "Support" && x.support_name == "Hiring of Support Staff for DPMU (Field Staff/MTS/Guards,etc..)").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt24 != null)
                        {
                            alldata.Add(dt24);
                        }
                        var dt25 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Madhya Pradesh_23" && x.support_year == year && x.month_number == month && x.support_type == "Support" && x.support_name == "Hiring of Support Staff for DPMU (Field Staff/MTS/Guards,etc..)").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt25 != null)
                        {
                            alldata.Add(dt25);
                        }
                        var dt26 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Rajasthan_8" && x.support_year == year && x.month_number == month && x.support_type == "Support" && x.support_name == "Hiring of Support Staff for DPMU (Field Staff/MTS/Guards,etc..)").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt26 != null)
                        {
                            alldata.Add(dt26);
                        }
                        var dt27 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Maharashtra_27" && x.support_year == year && x.month_number == month && x.support_type == "Support" && x.support_name == "Hiring of Support Staff for DPMU (Field Staff/MTS/Guards,etc..)").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt27 != null)
                        {
                            alldata.Add(dt27);
                        }
                        var dt28 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Uttar Pradesh_9" && x.support_year == year && x.month_number == month && x.support_type == "Support" && x.support_name == "Hiring of Support Staff for DPMU (Field Staff/MTS/Guards,etc..)").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt28 != null)
                        {
                            alldata.Add(dt28);
                        }

                        var dt29 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Gujarat_24" && x.support_year == year && x.month_number == month && x.support_type == "Support" && x.support_name == "Engagement of DIPs/NGOs").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt29 != null)
                        {
                            alldata.Add(dt29);
                        }
                        var dt30 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Haryana_6" && x.support_year == year && x.month_number == month && x.support_type == "Support" && x.support_name == "Engagement of DIPs/NGOs").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt30 != null)
                        {
                            alldata.Add(dt30);
                        }
                        var dt31 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Karnataka_29" && x.support_year == year && x.month_number == month && x.support_type == "Support" && x.support_name == "Engagement of DIPs/NGOs").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt31 != null)
                        {
                            alldata.Add(dt31);
                        }
                        var dt32 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Madhya Pradesh_23" && x.support_year == year && x.month_number == month && x.support_type == "Support" && x.support_name == "Engagement of DIPs/NGOs").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt32 != null)
                        {
                            alldata.Add(dt32);
                        }
                        var dt33 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Rajasthan_8" && x.support_year == year && x.month_number == month && x.support_type == "Support" && x.support_name == "Engagement of DIPs/NGOs").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt33 != null)
                        {
                            alldata.Add(dt33);
                        }
                        var dt34 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Maharashtra_27" && x.support_year == year && x.month_number == month && x.support_type == "Support" && x.support_name == "Engagement of DIPs/NGOs").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt34 != null)
                        {
                            alldata.Add(dt34);
                        }
                        var dt35 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Uttar Pradesh_9" && x.support_year == year && x.month_number == month && x.support_type == "Support" && x.support_name == "Engagement of DIPs/NGOs").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt35 != null)
                        {
                            alldata.Add(dt35);
                        }


                    }
                    else if (year != "0" && year != "ALL" && year != "")
                    {

                        var dt1 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Gujarat_24" && x.support_year == year && x.support_type == "Support" && x.support_name == "Hiring of Agency/Domain Experts for SPMU").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt1 != null)
                        {
                            alldata.Add(dt1);
                        }
                        var dt2 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Haryana_6" && x.support_year == year && x.support_type == "Support" && x.support_name == "Hiring of Agency/Domain Experts for SPMU").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt2 != null)
                        {
                            alldata.Add(dt2);
                        }
                        var dt3 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Karnataka_29" && x.support_year == year && x.support_type == "Support" && x.support_name == "Hiring of Agency/Domain Experts for SPMU").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt3 != null)
                        {
                            alldata.Add(dt3);
                        }
                        var dt4 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Madhya Pradesh_23" && x.support_year == year && x.support_type == "Support" && x.support_name == "Hiring of Agency/Domain Experts for SPMU").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt4 != null)
                        {
                            alldata.Add(dt4);
                        }
                        var dt5 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Rajasthan_8" && x.support_year == year && x.support_type == "Support" && x.support_name == "Hiring of Agency/Domain Experts for SPMU").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt5 != null)
                        {
                            alldata.Add(dt5);
                        }
                        var dt6 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Maharashtra_27" && x.support_year == year && x.support_type == "Support" && x.support_name == "Hiring of Agency/Domain Experts for SPMU").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt6 != null)
                        {
                            alldata.Add(dt6);
                        }
                        var dt7 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Uttar Pradesh_9" && x.support_year == year && x.support_type == "Support" && x.support_name == "Hiring of Agency/Domain Experts for SPMU").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt7 != null)
                        {
                            alldata.Add(dt7);
                        }

                        var dt8 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Gujarat_24" && x.support_year == year && x.support_type == "Support" && x.support_name == "Hiring of Agency/Domain Experts for DPMU").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt8 != null)
                        {
                            alldata.Add(dt8);
                        }
                        var dt9 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Haryana_6" && x.support_year == year && x.support_type == "Support" && x.support_name == "Hiring of Agency/Domain Experts for DPMU").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt9 != null)
                        {
                            alldata.Add(dt9);
                        }
                        var dt10 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Karnataka_29" && x.support_year == year && x.support_type == "Support" && x.support_name == "Hiring of Agency/Domain Experts for DPMU").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt10 != null)
                        {
                            alldata.Add(dt10);
                        }
                        var dt11 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Madhya Pradesh_23" && x.support_year == year && x.support_type == "Support" && x.support_name == "Hiring of Agency/Domain Experts for DPMU").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt11 != null)
                        {
                            alldata.Add(dt11);
                        }
                        var dt12 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Rajasthan_8" && x.support_year == year && x.support_type == "Support" && x.support_name == "Hiring of Agency/Domain Experts for DPMU").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt12 != null)
                        {
                            alldata.Add(dt12);
                        }
                        var dt13 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Maharashtra_27" && x.support_year == year && x.support_type == "Support" && x.support_name == "Hiring of Agency/Domain Experts for DPMU").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt13 != null)
                        {
                            alldata.Add(dt13);
                        }
                        var dt14 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Uttar Pradesh_9" && x.support_year == year && x.support_type == "Support" && x.support_name == "Hiring of Agency/Domain Experts for DPMU").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt14 != null)
                        {
                            alldata.Add(dt14);
                        }

                        var dt15 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Gujarat_24" && x.support_year == year && x.support_type == "Support" && x.support_name == "Hiring of Support Staff for SPMU (Field Staff/MTS/Guards,etc..)").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt15 != null)
                        {
                            alldata.Add(dt15);
                        }
                        var dt16 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Haryana_6" && x.support_year == year && x.support_type == "Support" && x.support_name == "Hiring of Support Staff for SPMU (Field Staff/MTS/Guards,etc..)").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt16 != null)
                        {
                            alldata.Add(dt16);
                        }
                        var dt17 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Karnataka_29" && x.support_year == year && x.support_type == "Support" && x.support_name == "Hiring of Support Staff for SPMU (Field Staff/MTS/Guards,etc..)").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt17 != null)
                        {
                            alldata.Add(dt17);
                        }
                        var dt18 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Madhya Pradesh_23" && x.support_year == year && x.support_type == "Support" && x.support_name == "Hiring of Support Staff for SPMU (Field Staff/MTS/Guards,etc..)").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt18 != null)
                        {
                            alldata.Add(dt18);
                        }
                        var dt19 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Rajasthan_8" && x.support_year == year && x.support_type == "Support" && x.support_name == "Hiring of Support Staff for SPMU (Field Staff/MTS/Guards,etc..)").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt19 != null)
                        {
                            alldata.Add(dt19);
                        }
                        var dt20 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Maharashtra_27" && x.support_year == year && x.support_type == "Support" && x.support_name == "Hiring of Support Staff for SPMU (Field Staff/MTS/Guards,etc..)").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt20 != null)
                        {
                            alldata.Add(dt20);
                        }
                        var dt21 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Uttar Pradesh_9" && x.support_year == year && x.support_type == "Support" && x.support_name == "Hiring of Support Staff for SPMU (Field Staff/MTS/Guards,etc..)").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt21 != null)
                        {
                            alldata.Add(dt21);
                        }

                        var dt22 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Gujarat_24" && x.support_year == year && x.support_type == "Support" && x.support_name == "Hiring of Support Staff for DPMU (Field Staff/MTS/Guards,etc..)").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt22 != null)
                        {
                            alldata.Add(dt22);
                        }
                        var dt23 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Haryana_6" && x.support_year == year && x.support_type == "Support" && x.support_name == "Hiring of Support Staff for DPMU (Field Staff/MTS/Guards,etc..)").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt23 != null)
                        {
                            alldata.Add(dt23);
                        }
                        var dt24 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Karnataka_29" && x.support_year == year && x.support_type == "Support" && x.support_name == "Hiring of Support Staff for DPMU (Field Staff/MTS/Guards,etc..)").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt24 != null)
                        {
                            alldata.Add(dt24);
                        }
                        var dt25 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Madhya Pradesh_23" && x.support_year == year && x.support_type == "Support" && x.support_name == "Hiring of Support Staff for DPMU (Field Staff/MTS/Guards,etc..)").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt25 != null)
                        {
                            alldata.Add(dt25);
                        }
                        var dt26 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Rajasthan_8" && x.support_year == year && x.support_type == "Support" && x.support_name == "Hiring of Support Staff for DPMU (Field Staff/MTS/Guards,etc..)").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt26 != null)
                        {
                            alldata.Add(dt26);
                        }
                        var dt27 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Maharashtra_27" && x.support_year == year && x.support_type == "Support" && x.support_name == "Hiring of Support Staff for DPMU (Field Staff/MTS/Guards,etc..)").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt27 != null)
                        {
                            alldata.Add(dt27);
                        }
                        var dt28 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Uttar Pradesh_9" && x.support_year == year && x.support_type == "Support" && x.support_name == "Hiring of Support Staff for DPMU (Field Staff/MTS/Guards,etc..)").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt28 != null)
                        {
                            alldata.Add(dt28);
                        }


                        var dt29 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Gujarat_24" && x.support_year == year && x.support_type == "Support" && x.support_name == "Engagement of DIPs/NGOs").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt29 != null)
                        {
                            alldata.Add(dt29);
                        }
                        var dt30 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Haryana_6" && x.support_year == year && x.support_type == "Support" && x.support_name == "Engagement of DIPs/NGOs").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt30 != null)
                        {
                            alldata.Add(dt30);
                        }
                        var dt31 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Karnataka_29" && x.support_year == year && x.support_type == "Support" && x.support_name == "Engagement of DIPs/NGOs").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt31 != null)
                        {
                            alldata.Add(dt31);
                        }
                        var dt32 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Madhya Pradesh_23" && x.support_year == year && x.support_type == "Support" && x.support_name == "Engagement of DIPs/NGOs").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt32 != null)
                        {
                            alldata.Add(dt32);
                        }
                        var dt33 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Rajasthan_8" && x.support_year == year && x.support_type == "Support" && x.support_name == "Engagement of DIPs/NGOs").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt33 != null)
                        {
                            alldata.Add(dt33);
                        }
                        var dt34 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Maharashtra_27" && x.support_year == year && x.support_type == "Support" && x.support_name == "Engagement of DIPs/NGOs").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt34 != null)
                        {
                            alldata.Add(dt34);
                        }
                        var dt35 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Uttar Pradesh_9" && x.support_year == year && x.support_type == "Support" && x.support_name == "Engagement of DIPs/NGOs").OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dt35 != null)
                        {
                            alldata.Add(dt35);
                        }

                    }
                    else if (year == "ALL")
                    {
                        var dt1 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Gujarat_24" && x.support_type == "Support" && x.support_name == "Hiring of Agency/Domain Experts for SPMU").OrderByDescending(x => x.fyyear).ToList();
                        var dd1 = dt1.Where(x => x.fyyear == dt1[0].fyyear).OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dd1 != null)
                        {
                            alldata.Add(dd1);
                        }
                        var dt2 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Haryana_6" && x.support_type == "Support" && x.support_name == "Hiring of Agency/Domain Experts for SPMU").OrderByDescending(x => x.fyyear).ToList();
                        var dd2 = dt2.Where(x => x.fyyear == dt1[0].fyyear).OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dd2 != null)
                        {
                            alldata.Add(dd2);
                        }
                        var dt3 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Karnataka_29" && x.support_type == "Support" && x.support_name == "Hiring of Agency/Domain Experts for SPMU").OrderByDescending(x => x.fyyear).ToList();
                        var dd3 = dt3.Where(x => x.fyyear == dt1[0].fyyear).OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dd3 != null)
                        {
                            alldata.Add(dd3);
                        }
                        var dt4 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Madhya Pradesh_23" && x.support_type == "Support" && x.support_name == "Hiring of Agency/Domain Experts for SPMU").OrderByDescending(x => x.fyyear).ToList();
                        var dd4 = dt4.Where(x => x.fyyear == dt1[0].fyyear).OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dd4 != null)
                        {
                            alldata.Add(dd4);
                        }
                        var dt5 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Rajasthan_8" && x.support_type == "Support" && x.support_name == "Hiring of Agency/Domain Experts for SPMU").OrderByDescending(x => x.fyyear).ToList();
                        var dd5 = dt5.Where(x => x.fyyear == dt1[0].fyyear).OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dd5 != null)
                        {
                            alldata.Add(dd5);
                        }
                        var dt6 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Maharashtra_27" && x.support_type == "Support" && x.support_name == "Hiring of Agency/Domain Experts for SPMU").OrderByDescending(x => x.fyyear).ToList();
                        var dd6 = dt6.Where(x => x.fyyear == dt1[0].fyyear).OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dd6 != null)
                        {
                            alldata.Add(dd6);
                        }
                        var dt7 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Uttar Pradesh_9" && x.support_type == "Support" && x.support_name == "Hiring of Agency/Domain Experts for SPMU").OrderByDescending(x => x.fyyear).ToList();
                        var dd7 = dt7.Where(x => x.fyyear == dt1[0].fyyear).OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dd7 != null)
                        {
                            alldata.Add(dd7);
                        }

                        var dt8 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Gujarat_24" && x.support_type == "Support" && x.support_name == "Hiring of Agency/Domain Experts for DPMU").OrderByDescending(x => x.fyyear).ToList();
                        var dd8 = dt8.Where(x => x.fyyear == dt1[0].fyyear).OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dd8 != null)
                        {
                            alldata.Add(dd8);
                        }
                        var dt9 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Haryana_6" && x.support_type == "Support" && x.support_name == "Hiring of Agency/Domain Experts for DPMU").OrderByDescending(x => x.fyyear).ToList();
                        var dd9 = dt9.Where(x => x.fyyear == dt1[0].fyyear).OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dd9 != null)
                        {
                            alldata.Add(dd9);
                        }
                        var dt10 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Karnataka_29" && x.support_type == "Support" && x.support_name == "Hiring of Agency/Domain Experts for DPMU").OrderByDescending(x => x.fyyear).ToList();
                        var dd10 = dt10.Where(x => x.fyyear == dt1[0].fyyear).OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dd10 != null)
                        {
                            alldata.Add(dd10);
                        }
                        var dt11 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Madhya Pradesh_23" && x.support_type == "Support" && x.support_name == "Hiring of Agency/Domain Experts for DPMU").OrderByDescending(x => x.fyyear).ToList();
                        var dd11 = dt11.Where(x => x.fyyear == dt1[0].fyyear).OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dd11 != null)
                        {
                            alldata.Add(dd11);
                        }
                        var dt12 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Rajasthan_8" && x.support_type == "Support" && x.support_name == "Hiring of Agency/Domain Experts for DPMU").OrderByDescending(x => x.fyyear).ToList();
                        var dd12 = dt12.Where(x => x.fyyear == dt1[0].fyyear).OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dd12 != null)
                        {
                            alldata.Add(dd12);
                        }
                        var dt13 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Maharashtra_27" && x.support_type == "Support" && x.support_name == "Hiring of Agency/Domain Experts for DPMU").OrderByDescending(x => x.fyyear).ToList();
                        var dd13 = dt13.Where(x => x.fyyear == dt1[0].fyyear).OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dd13 != null)
                        {
                            alldata.Add(dd13);
                        }
                        var dt14 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Uttar Pradesh_9" && x.support_type == "Support" && x.support_name == "Hiring of Agency/Domain Experts for DPMU").OrderByDescending(x => x.fyyear).ToList();
                        var dd14 = dt14.Where(x => x.fyyear == dt1[0].fyyear).OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dd14 != null)
                        {
                            alldata.Add(dd14);
                        }
                        var dt15 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Gujarat_24" && x.support_type == "Support" && x.support_name == "Hiring of Support Staff for SPMU (Field Staff/MTS/Guards,etc..)").OrderByDescending(x => x.fyyear).ToList();
                        var dd15 = dt15.Where(x => x.fyyear == dt1[0].fyyear).OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dd15 != null)
                        {
                            alldata.Add(dd15);
                        }
                        var dt16 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Haryana_6" && x.support_type == "Support" && x.support_name == "Hiring of Support Staff for SPMU (Field Staff/MTS/Guards,etc..)").OrderByDescending(x => x.fyyear).ToList();
                        var dd16 = dt16.Where(x => x.fyyear == dt1[0].fyyear).OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dd16 != null)
                        {
                            alldata.Add(dd16);
                        }
                        var dt17 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Karnataka_29" && x.support_type == "Support" && x.support_name == "Hiring of Support Staff for SPMU (Field Staff/MTS/Guards,etc..)").OrderByDescending(x => x.fyyear).ToList();
                        var dd17 = dt17.Where(x => x.fyyear == dt1[0].fyyear).OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dd17 != null)
                        {
                            alldata.Add(dd17);
                        }
                        var dt18 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Madhya Pradesh_23" && x.support_type == "Support" && x.support_name == "Hiring of Support Staff for SPMU (Field Staff/MTS/Guards,etc..)").OrderByDescending(x => x.fyyear).ToList();
                        var dd18 = dt18.Where(x => x.fyyear == dt1[0].fyyear).OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dd18 != null)
                        {
                            alldata.Add(dd18);
                        }
                        var dt19 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Rajasthan_8" && x.support_type == "Support" && x.support_name == "Hiring of Support Staff for SPMU (Field Staff/MTS/Guards,etc..)").OrderByDescending(x => x.fyyear).ToList();
                        var dd19 = dt19.Where(x => x.fyyear == dt1[0].fyyear).OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dd19 != null)
                        {
                            alldata.Add(dd19);
                        }
                        var dt20 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Maharashtra_27" && x.support_type == "Support" && x.support_name == "Hiring of Support Staff for SPMU (Field Staff/MTS/Guards,etc..)").OrderByDescending(x => x.fyyear).ToList();
                        var dd20 = dt20.Where(x => x.fyyear == dt1[0].fyyear).OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dd20 != null)
                        {
                            alldata.Add(dd20);
                        }
                        var dt21 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Uttar Pradesh_9" && x.support_type == "Support" && x.support_name == "Hiring of Support Staff for SPMU (Field Staff/MTS/Guards,etc..)").OrderByDescending(x => x.fyyear).ToList();
                        var dd21 = dt21.Where(x => x.fyyear == dt1[0].fyyear).OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dd21 != null)
                        {
                            alldata.Add(dd21);
                        }
                        var dt22 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Gujarat_24" && x.support_type == "Support" && x.support_name == "Hiring of Support Staff for DPMU (Field Staff/MTS/Guards,etc..)").OrderByDescending(x => x.fyyear).ToList();
                        var dd22 = dt22.Where(x => x.fyyear == dt1[0].fyyear).OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dd22 != null)
                        {
                            alldata.Add(dd22);
                        }
                        var dt23 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Haryana_6" && x.support_type == "Support" && x.support_name == "Hiring of Support Staff for DPMU (Field Staff/MTS/Guards,etc..)").OrderByDescending(x => x.fyyear).ToList();
                        var dd23 = dt23.Where(x => x.fyyear == dt1[0].fyyear).OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dd23 != null)
                        {
                            alldata.Add(dd23);
                        }
                        var dt24 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Karnataka_29" && x.support_type == "Support" && x.support_name == "Hiring of Support Staff for DPMU (Field Staff/MTS/Guards,etc..)").OrderByDescending(x => x.fyyear).ToList();
                        var dd24 = dt24.Where(x => x.fyyear == dt1[0].fyyear).OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dd24 != null)
                        {
                            alldata.Add(dd24);
                        }
                        var dt25 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Madhya Pradesh_23" && x.support_type == "Support" && x.support_name == "Hiring of Support Staff for DPMU (Field Staff/MTS/Guards,etc..)").OrderByDescending(x => x.fyyear).ToList();
                        var dd25 = dt25.Where(x => x.fyyear == dt1[0].fyyear).OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dd25 != null)
                        {
                            alldata.Add(dd25);
                        }
                        var dt26 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Rajasthan_8" && x.support_type == "Support" && x.support_name == "Hiring of Support Staff for DPMU (Field Staff/MTS/Guards,etc..)").OrderByDescending(x => x.fyyear).ToList();
                        var dd26 = dt26.Where(x => x.fyyear == dt1[0].fyyear).OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dd26 != null)
                        {
                            alldata.Add(dd26);
                        }
                        var dt27 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Maharashtra_27" && x.support_type == "Support" && x.support_name == "Hiring of Support Staff for DPMU (Field Staff/MTS/Guards,etc..)").OrderByDescending(x => x.fyyear).ToList();
                        var dd27 = dt27.Where(x => x.fyyear == dt1[0].fyyear).OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dd27 != null)
                        {
                            alldata.Add(dd27);
                        }
                        var dt28 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Uttar Pradesh_9" && x.support_type == "Support" && x.support_name == "Hiring of Support Staff for DPMU (Field Staff/MTS/Guards,etc..)").OrderByDescending(x => x.fyyear).ToList();
                        var dd28 = dt28.Where(x => x.fyyear == dt1[0].fyyear).OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dd28 != null)
                        {
                            alldata.Add(dd28);
                        }
                        var dt29 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Gujarat_24" && x.support_type == "Support" && x.support_name == "Engagement of DIPs/NGOs").OrderByDescending(x => x.fyyear).ToList();
                        var dd29 = dt29.Where(x => x.fyyear == dt1[0].fyyear).OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dd29 != null)
                        {
                            alldata.Add(dd29);
                        }
                        var dt30 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Haryana_6" && x.support_type == "Support" && x.support_name == "Engagement of DIPs/NGOs").OrderByDescending(x => x.fyyear).ToList();
                        var dd30 = dt30.Where(x => x.fyyear == dt1[0].fyyear).OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dd30 != null)
                        {
                            alldata.Add(dd30);
                        }
                        var dt31 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Karnataka_29" && x.support_type == "Support" && x.support_name == "Engagement of DIPs/NGOs").OrderByDescending(x => x.fyyear).ToList();
                        var dd31 = dt31.Where(x => x.fyyear == dt1[0].fyyear).OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dd31 != null)
                        {
                            alldata.Add(dd31);
                        }
                        var dt32 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Madhya Pradesh_23" && x.support_type == "Support" && x.support_name == "Engagement of DIPs/NGOs").OrderByDescending(x => x.fyyear).ToList();
                        var dd32 = dt32.Where(x => x.fyyear == dt1[0].fyyear).OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dd32 != null)
                        {
                            alldata.Add(dd32);
                        }
                        var dt33 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Rajasthan_8" && x.support_type == "Support" && x.support_name == "Engagement of DIPs/NGOs").OrderByDescending(x => x.fyyear).ToList();
                        var dd33 = dt33.Where(x => x.fyyear == dt1[0].fyyear).OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dd33 != null)
                        {
                            alldata.Add(dd33);
                        }
                        var dt34 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Maharashtra_27" && x.support_type == "Support" && x.support_name == "Engagement of DIPs/NGOs").OrderByDescending(x => x.fyyear).ToList();
                        var dd34 = dt34.Where(x => x.fyyear == dt1[0].fyyear).OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dd34 != null)
                        {
                            alldata.Add(dd34);
                        }
                        var dt35 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Uttar Pradesh_9" && x.support_type == "Support" && x.support_name == "Engagement of DIPs/NGOs").OrderByDescending(x => x.fyyear).ToList();
                        var dd35 = dt35.Where(x => x.fyyear == dt1[0].fyyear).OrderByDescending(x => x.month_number).FirstOrDefault();
                        if (dd35 != null)
                        {
                            alldata.Add(dd35);
                        }

                    }


                    //decimal totolsum = ddetails.Sum(x => Convert.ToDecimal(x.support_item_procured));
                    return Json(alldata, JsonRequestBehavior.AllowGet);

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
        public ActionResult report_data_monthly_fin(String state, string year)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    
                    List<abhy_financialprogress_insertdata_vw> ddetails = new List<abhy_financialprogress_insertdata_vw>();
                    if (state == "0")
                    {
                        state = Session["gstate"].ToString();
                    }
                    if (year == "ALL")
                    {
                        ddetails = ABE.obj_abhy_financialprogress_insertdata_vw.Where(x => x.state_name == state).OrderBy(x => x.item_code).ToList();//total list
                    }
                    else
                    {

                        ddetails = ABE.obj_abhy_financialprogress_insertdata_vw.Where(x => x.state_name == state && x.fin_year == year).OrderBy(x => x.item_code).ToList();//total list
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
        public ActionResult report_data_npmu(string year)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    
                    List<abhy_mis_pip_form> ddetails = new List<abhy_mis_pip_form>();
                    List<abhy_mis_awp_form> ddetails1 = new List<abhy_mis_awp_form>();

                    if (year == "ALL")
                    {
                        ddetails = ABE.obj_abhy_mis_pip_form.ToList();//total list
                        return Json(ddetails, JsonRequestBehavior.AllowGet);
                    }
                    else
                    {
                        ddetails1 = ABE.obj_abhy_mis_awp_form.Where(x => x.awp_fin_year == year).ToList();//total list
                        return Json(ddetails1, JsonRequestBehavior.AllowGet);
                    }
                    var jsonResult = Json(ddetails1, JsonRequestBehavior.AllowGet);
                    jsonResult.MaxJsonLength = int.MaxValue;
                    return jsonResult;

                    /*return Json(ddetails1, JsonRequestBehavior.AllowGet)*/
                    ;
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
        public ActionResult report_data_monthly_npmu(string year, int month)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    
                    List<abhy_physicalmonitoring_insertdata_view> ddetails = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.support_year == year && x.month_number == month).ToList();//total list
                                                                                                                                                                                                    //decimal totolsum = ddetails.Sum(x => Convert.ToDecimal(x.support_item_procured));
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
        public ActionResult report_data_cum_npmu(string year)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    
                    List<abhy_physicalmonitoring_insertdata_view> ddetails = new List<abhy_physicalmonitoring_insertdata_view>();

                    if (year == "ALL")
                    {
                        ddetails = ABE.obj_abhy_physicalmonitoring_insertdata_view.OrderBy(x => x.support_item_code).ToList();
                    }
                    else
                    {
                        ddetails = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.support_year == year).OrderBy(x => x.support_item_code).ToList();
                    }

                    var jsonResult = Json(ddetails, JsonRequestBehavior.AllowGet);
                    jsonResult.MaxJsonLength = int.MaxValue;
                    return jsonResult;

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
        public ActionResult report_data_cum_npmu_new(string year)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    
                    List<abhy_physicalmonitoring_insertdata_view> ddetails = new List<abhy_physicalmonitoring_insertdata_view>();

                    if (year == "ALL")
                    {
                        var ddetails1 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Gujarat_24").OrderByDescending(x => x.fyyear).FirstOrDefault();
                        var Guj_dt = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Gujarat_24" && x.fyyear == ddetails1.fyyear).OrderByDescending(v => v.month_number).FirstOrDefault();

                        var ddetails2 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Haryana_6").OrderByDescending(x => x.fyyear).FirstOrDefault();
                        var Har_dt = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Haryana_6" && x.fyyear == ddetails2.fyyear).OrderByDescending(v => v.month_number).FirstOrDefault();

                        var ddetails3 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Karnataka_29").OrderByDescending(x => x.fyyear).FirstOrDefault();
                        var Kar_dt = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Karnataka_29" && x.fyyear == ddetails3.fyyear).OrderByDescending(v => v.month_number).FirstOrDefault();

                        var ddetails4 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Madhya Pradesh_23").OrderByDescending(x => x.fyyear).FirstOrDefault();
                        var Madhya_dt = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Madhya Pradesh_23" && x.fyyear == ddetails4.fyyear).OrderByDescending(v => v.month_number).FirstOrDefault();

                        var ddetails5 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Maharashtra_27").OrderByDescending(x => x.fyyear).FirstOrDefault();
                        var Maha_dt = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Maharashtra_27" && x.fyyear == ddetails5.fyyear).OrderByDescending(v => v.month_number).FirstOrDefault();

                        var ddetails6 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Rajasthan_8").OrderByDescending(x => x.fyyear).FirstOrDefault();
                        var Raj_dt = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Rajasthan_8" && x.fyyear == ddetails6.fyyear).OrderByDescending(v => v.month_number).FirstOrDefault();

                        var ddetails7 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Uttar Pradesh_9").OrderByDescending(x => x.fyyear).FirstOrDefault();
                        var Uttar_dt = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == "Uttar Pradesh_9" && x.fyyear == ddetails7.fyyear).OrderByDescending(v => v.month_number).FirstOrDefault();
                        return Json(Guj_dt + "," + Har_dt + "," + Kar_dt + "," + Madhya_dt + "," + Maha_dt + "," + Raj_dt + "," + Uttar_dt, JsonRequestBehavior.AllowGet);
                    }
                    else
                    {
                        ddetails = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.support_year == year).OrderBy(x => x.support_item_code).ToList();
                    }
                    var jsonResult = Json(ddetails, JsonRequestBehavior.AllowGet);
                    jsonResult.MaxJsonLength = int.MaxValue;
                    return jsonResult;
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
        public ActionResult report_data_cum_npmu_report3(string year)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    
                    List<abhy_physicalmonitoring_insertdata_view> ddetails = new List<abhy_physicalmonitoring_insertdata_view>();

                    if (year == "ALL")
                    {
                        ddetails = ABE.obj_abhy_physicalmonitoring_insertdata_view.OrderBy(x => x.support_item_code).ToList();
                    }
                    else
                    {
                        ddetails = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.support_year == year).OrderBy(x => x.support_item_code).ToList();
                    }
                    var jsonResult = Json(ddetails, JsonRequestBehavior.AllowGet);
                    jsonResult.MaxJsonLength = int.MaxValue;
                    return jsonResult;


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



        [HttpGet]
        public ActionResult PIP_Agency_StateWise_AgencyInfo(string pip_agency_state_name)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    
                    List<abhy_mis_pip_awp_feedback> ddetails = ABE.obj_abhy_mis_pip_awp_feedback.Where(x => x.state_name == pip_agency_state_name && x.observation_type == "pip").ToList();//total list

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

        [HttpGet]
        public ActionResult Npmu_List() //chetan saini
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    
                    List<abhy_mis_pip_activity> ddetails = ABE.obj_abhy_mis_pip_activity.Where(x => x.is_npmu == "1").ToList();

                    return Json(ddetails, JsonRequestBehavior.AllowGet);
                }
                catch (Exception Ex)
                {
                    return Json(Ex.InnerException, JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);

            }
        }

        [HttpGet]
        public ActionResult Npmu_List_Show(string WorkActivity) //chetan saini & prateek 
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    
                    List<abhy_mis_pip_activity> ddetails = ABE.obj_abhy_mis_pip_activity.Where(x => x.pip_work_activity_name == WorkActivity).ToList();

                    return Json(ddetails, JsonRequestBehavior.AllowGet);
                }
                catch (Exception Ex)
                {
                    return Json(Ex.InnerException, JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);

            }
        }



        public string randomCodeGeneration1()
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

        public string randomCodeGeneration2()
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

        [HttpGet]
        public ActionResult PIP_Activity_Name_Info(string pip_workactivity)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    
                    List<abhy_mis_pip_activity> ddetails = ABE.obj_abhy_mis_pip_activity.Where(x => x.pip_work_activity_name == pip_workactivity).ToList();//total list

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

        [HttpGet]
        public ActionResult PIP_Items_Info()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    
                    List<abhy_mis_pip_activity> ddetails = ABE.obj_abhy_mis_pip_activity.ToList();//total list

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



        [HttpGet]
        public ActionResult Pip_Agency_Name(string state_name)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    
                    List<abhy_mis_pip_awp_feedback> ddetails = ABE.obj_abhy_mis_pip_awp_feedback.Where(x => x.state_name == state_name && x.observation_type == "pip").ToList();//total list

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






        [HttpGet]
        public ActionResult PIP_Info(string StateName)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    
                    List<abhy_mis_pip_form> ddetails = new List<abhy_mis_pip_form>();
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = "";
                    if (Session["gstate"] != null)
                    {
                        State = Session["gstate"].ToString();
                    }
                    //var Dist = Session["gdist"].ToString();

                    //var Block = Session["gblock"].ToString();
                    //var Gram = Session["ggram"].ToString();

                    //if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null && Gram != "" && Gram != null)
                    //{
                    //    ddetails = ABE.obj_abhy_mis_pip_form.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                    //}
                    //else if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null)
                    //{
                    //    ddetails = ABE.obj_abhy_mis_pip_form.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                    //}
                    //else if (State != "" && State != null && Dist != "" && Dist != null)
                    //{
                    //    ddetails = ABE.obj_abhy_mis_pip_form.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                    //}
                    //else 
                    if (StateName != "" && StateName != null && StateName != "0")
                    {
                        if (StateName == "ALL")
                        {
                            ddetails = ABE.obj_abhy_mis_pip_form.OrderBy(x => x.state_name == StateName).ToList();//total list
                        }
                        else
                        {
                            ddetails = ABE.obj_abhy_mis_pip_form.Where(x => x.state_name == StateName).OrderBy(x => x.state_name == StateName).ToList();//total list
                        }
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

        [HttpGet]
        public ActionResult PIP_B_Info(string StateName)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    
                    List<abhy_mis_pip_b_form> ddetails = new List<abhy_mis_pip_b_form>();
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = "";
                    if (Session["gstate"] != null)
                    {
                        State = Session["gstate"].ToString();
                    }
                    //var Dist = Session["gdist"].ToString();

                    //var Block = Session["gblock"].ToString();
                    //var Gram = Session["ggram"].ToString();

                    //if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null && Gram != "" && Gram != null)
                    //{
                    //    ddetails = ABE.obj_abhy_mis_pip_b_form.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                    //}
                    //else if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null)
                    //{
                    //    ddetails = ABE.obj_abhy_mis_pip_b_form.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                    //}
                    //else if (State != "" && State != null && Dist != "" && Dist != null)
                    //{
                    //    ddetails = ABE.obj_abhy_mis_pip_b_form.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                    //}
                    //else 
                    if (StateName != "" && StateName != null && StateName != "0")
                    {
                        if (StateName == "ALL")
                        {
                            ddetails = ABE.obj_abhy_mis_pip_b_form.ToList();//total list
                        }
                        else
                        {
                            ddetails = ABE.obj_abhy_mis_pip_b_form.Where(x => x.state_name == StateName).ToList();//total list
                        }


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
        public ActionResult Save_PIP_Form_Info(string Data)
        {
            if (Session["UserId"] != null)
            {
                
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<abhy_mis_pip_form>(Data);

                abhy_mis_pip_form obj = new abhy_mis_pip_form();
                string UID = randomCodeGeneration1();
                obj.userid = Convert.ToInt32(Session["UserId"]);
                obj.pipcomponent = result.pipcomponent;
                if (result.state_name != "0" && result.state_name != "" && result.state_name != null)
                {
                    obj.state_name = result.state_name;
                }
                else
                {
                    return Json("Please Select StateName");
                }

                if (Session["gdist"] != null)
                {
                    obj.district_name = Session["gdist"].ToString();
                }
                if (Session["gblock"] != null)
                {
                    obj.block_name = Session["gblock"].ToString();
                }
                if (Session["ggram"] != null)
                {
                    obj.gpname = Session["ggram"].ToString();
                }

                List<abhy_mis_pip_activity> ddetails11 = ABE.obj_abhy_mis_pip_activity.Where(x => x.pip_work_activity_name == result.pip_workactivity).ToList();//total list
                obj.pip_item_code = ddetails11[0].pip_item_code;
                obj.pipcomponent = ddetails11[0].pip_component_id;
                obj.pip_total = result.pip_total;
                obj.pip_estimated_cost_for_five_years = result.pip_estimated_cost_for_five_years;
                obj.pip_uid = UID;
                obj.pip_date_time = DateTime.Today.ToString();
                if (result.pip_workactivity != "0" && result.pip_workactivity != "" && result.pip_workactivity != null)
                {
                    obj.pip_workactivity = result.pip_workactivity;
                }
                else
                {
                    return Json("Please Select Work Activity");
                }
                obj.pip_physical_year1_20_21 = result.pip_physical_year1_20_21;
                obj.pip_financial_year1_20_21 = result.pip_financial_year1_20_21;
                obj.pip_physical_year2_21_22 = result.pip_physical_year2_21_22;
                obj.pip_financial_year2_21_22 = result.pip_financial_year2_21_22;
                obj.pip_physical_year3_22_23 = result.pip_physical_year3_22_23;
                obj.pip_financial_year3_22_23 = result.pip_financial_year3_22_23;
                obj.pip_physical_year4_23_24 = result.pip_physical_year4_23_24;
                obj.pip_financial_year4_23_24 = result.pip_financial_year4_23_24;
                obj.pip_physical_year5_24_25 = result.pip_physical_year5_24_25;

                obj.pip_financial_year5_24_25 = result.pip_financial_year5_24_25;
                obj.pip_remarks = result.pip_remarks;

                obj.pip_agency_name = result.pip_agency_name;
                obj.pip_agency_officer_name = result.pip_agency_officer_name;
                obj.pip_activity_id = result.pip_activity_id;
                ABE.obj_abhy_mis_pip_form.Add(obj);
                ABE.SaveChanges();
                return Json("Successfully Saved");


            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }


        [HttpPost]
        public ActionResult Save_PIP_B_Form_Info(string Data)
        {
            if (Session["UserId"] != null)
            {
                
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<abhy_mis_pip_b_form>(Data);

                abhy_mis_pip_b_form obj = new abhy_mis_pip_b_form();
                string UID = randomCodeGeneration1();
                obj.pipcomponent = result.pipcomponent;
                obj.userid = Convert.ToInt32(Session["UserId"]);
                if (result.state_name != "0" && result.state_name != "" && result.state_name != null)
                {
                    obj.state_name = result.state_name;
                }
                else
                {
                    return Json("Please Select StateName");
                }

                if (Session["gdist"] != null)
                {
                    obj.district_name = Session["gdist"].ToString();
                }
                if (Session["gblock"] != null)
                {
                    obj.block_name = Session["gblock"].ToString();
                }
                if (Session["ggram"] != null)
                {
                    obj.gpname = Session["ggram"].ToString();
                }
                List<abhy_mis_pip_activity> ddetails11 = ABE.obj_abhy_mis_pip_activity.Where(x => x.pip_work_activity_name == result.pip_workactivity).ToList();//total list
                obj.pipcomponent = ddetails11[0].pip_component_id;
                obj.pip_item_code = ddetails11[0].pip_item_code;
                obj.pip_total = result.pip_total;
                obj.pip_estimated_cost_for_five_years = result.pip_estimated_cost_for_five_years;
                obj.pip_uid = UID;
                obj.pip_date_time = DateTime.Today.ToString();
                if (result.pip_workactivity != "0" && result.pip_workactivity != "" && result.pip_workactivity != null)
                {
                    obj.pip_workactivity = result.pip_workactivity;
                }
                else
                {
                    return Json("Please Select Work Activity");
                }
                obj.pip_physical_year1_20_21 = result.pip_physical_year1_20_21;
                obj.pip_financial_year1_20_21 = result.pip_financial_year1_20_21;
                obj.pip_physical_year2_21_22 = result.pip_physical_year2_21_22;
                obj.pip_financial_year2_21_22 = result.pip_financial_year2_21_22;
                obj.pip_physical_year3_22_23 = result.pip_physical_year3_22_23;
                obj.pip_financial_year3_22_23 = result.pip_financial_year3_22_23;
                obj.pip_physical_year4_23_24 = result.pip_physical_year4_23_24;
                obj.pip_financial_year4_23_24 = result.pip_financial_year4_23_24;
                obj.pip_physical_year5_24_25 = result.pip_physical_year5_24_25;

                obj.pip_financial_year5_24_25 = result.pip_financial_year5_24_25;
                obj.pip_remarks = result.pip_remarks;
                obj.pip_agency_name = result.pip_agency_name;
                obj.pip_agency_officer_name = result.pip_agency_officer_name;
                obj.pip_activity_id = result.pip_activity_id;
                ABE.obj_abhy_mis_pip_b_form.Add(obj);
                ABE.SaveChanges();
                return Json("Successfully Saved");


            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult updatecomp_A_pip(string comp_A_pip_string)
        {
            
            JavaScriptSerializer js = new JavaScriptSerializer();
            var result = js.Deserialize<abhy_mis_pip_form>(comp_A_pip_string);

            var ARID = Convert.ToInt32(result.id);
            var Data1 = ABE.obj_abhy_mis_pip_form.Where(x => x.id == ARID).FirstOrDefault();
            if (Data1 != null)
            {

                Data1.pip_uid = result.pip_uid;
                Data1.pipcomponent = result.pipcomponent;
                Data1.pip_activity_id = result.pip_activity_id;
                Data1.pip_item_code = result.pip_item_code;
                Data1.state_name = result.state_name;
                Data1.pip_total = result.pip_total;
                Data1.pip_estimated_cost_for_five_years = result.pip_estimated_cost_for_five_years;
                Data1.pip_physical_year1_20_21 = result.pip_physical_year1_20_21;
                Data1.pip_financial_year1_20_21 = result.pip_financial_year1_20_21;
                Data1.pip_physical_year2_21_22 = result.pip_physical_year2_21_22;
                Data1.pip_financial_year2_21_22 = result.pip_financial_year2_21_22;
                Data1.pip_physical_year3_22_23 = result.pip_physical_year3_22_23;
                Data1.pip_financial_year3_22_23 = result.pip_financial_year3_22_23;

                Data1.pip_physical_year4_23_24 = result.pip_physical_year4_23_24;
                Data1.pip_financial_year4_23_24 = result.pip_financial_year4_23_24;
                Data1.pip_physical_year5_24_25 = result.pip_physical_year5_24_25;
                Data1.pip_financial_year5_24_25 = result.pip_financial_year5_24_25;
                Data1.pip_remarks = result.pip_remarks;

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
        public ActionResult deletecomp_A_pip(string comp_A_pip_string)
        {
            
            JavaScriptSerializer js = new JavaScriptSerializer();
            var result = js.Deserialize<abhy_mis_pip_form>(comp_A_pip_string);

            if (result.id != 0)
            {
                var ARID = Convert.ToInt32(result.id);
                var Data1 = ABE.obj_abhy_mis_pip_form.Where(x => x.id == ARID).FirstOrDefault();
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
        public ActionResult updatecomp_B_pip(string comp_B_pip_string)
        {
            
            JavaScriptSerializer js = new JavaScriptSerializer();
            var result = js.Deserialize<abhy_mis_pip_b_form>(comp_B_pip_string);

            var ARID = Convert.ToInt32(result.id);
            var Data1 = ABE.obj_abhy_mis_pip_b_form.Where(x => x.id == ARID).FirstOrDefault();
            if (Data1 != null)
            {

                Data1.pip_uid = result.pip_uid;
                Data1.state_name = result.state_name;
                Data1.pipcomponent = result.pipcomponent;
                Data1.pip_activity_id = result.pip_activity_id;
                Data1.pip_item_code = result.pip_item_code;

                Data1.pip_total = result.pip_total;
                Data1.pip_estimated_cost_for_five_years = result.pip_estimated_cost_for_five_years;
                Data1.pip_physical_year1_20_21 = result.pip_physical_year1_20_21;
                Data1.pip_financial_year1_20_21 = result.pip_financial_year1_20_21;
                Data1.pip_physical_year2_21_22 = result.pip_physical_year2_21_22;
                Data1.pip_financial_year2_21_22 = result.pip_financial_year2_21_22;
                Data1.pip_physical_year3_22_23 = result.pip_physical_year3_22_23;
                Data1.pip_financial_year3_22_23 = result.pip_financial_year3_22_23;

                Data1.pip_physical_year4_23_24 = result.pip_physical_year4_23_24;
                Data1.pip_financial_year4_23_24 = result.pip_financial_year4_23_24;
                Data1.pip_physical_year5_24_25 = result.pip_physical_year5_24_25;
                Data1.pip_financial_year5_24_25 = result.pip_financial_year5_24_25;
                Data1.pip_remarks = result.pip_remarks;

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
        public ActionResult deletecomp_B_pip(string comp_B_pip_string)
        {
            
            JavaScriptSerializer js = new JavaScriptSerializer();
            var result = js.Deserialize<abhy_mis_pip_b_form>(comp_B_pip_string);

            if (result.id != 0)
            {
                var ARID = Convert.ToInt32(result.id);
                var Data1 = ABE.obj_abhy_mis_pip_b_form.Where(x => x.id == ARID).FirstOrDefault();
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


        //finacial monitoring update/edit 

        [HttpPost]
        public ActionResult updatecomp_A_php_fn(string comp_A_php_fn_string)
        {
            
            JavaScriptSerializer js = new JavaScriptSerializer();
            var result = js.Deserialize<abhy_financialprogress_insertdata>(comp_A_php_fn_string);

            var ARID = Convert.ToInt32(result.id);
            var Data1 = ABE.obj_abhy_financialprogress_insertdata.Where(x => x.id == ARID).FirstOrDefault();
            if (Data1 != null)
            {
                Data1.component_id = result.component_id;
                Data1.sub_component_id = result.sub_component_id;
                Data1.activity_id = result.activity_id;
                Data1.item_code = result.item_code;
                Data1.state_name = result.state_name;
                Data1.activity_name = result.activity_name;
                Data1.financial_awp = result.financial_awp;
                Data1.producrment_selection = result.producrment_selection;
                // Data1.financial_awp = result.financial_awp;
                Data1.category_of_procurement = result.category_of_procurement;

                Data1.component_budget_head = result.component_budget_head;
                Data1.expenditure_code = result.expenditure_code;
                Data1.expenditure_made = result.expenditure_made;
                Data1.cumulative_expenditure = result.cumulative_expenditure;
                Data1.fin_year = result.fin_year;
                Data1.fin_month = result.fin_month;
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
        public ActionResult deletecomp_A_php_fn(string comp_A_php_fn_string)
        {
            
            JavaScriptSerializer js = new JavaScriptSerializer();
            var result = js.Deserialize<abhy_financialprogress_insertdata>(comp_A_php_fn_string);

            if (result.id != 0)
            {
                var ARID = Convert.ToInt32(result.id);
                var Data1 = ABE.obj_abhy_financialprogress_insertdata.Where(x => x.id == ARID).FirstOrDefault();
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
        public ActionResult updatecomp_B_php_fn(string comp_B_php_fn_string)
        {
            
            JavaScriptSerializer js = new JavaScriptSerializer();
            var result = js.Deserialize<abhy_financialprogress_b_insertdata>(comp_B_php_fn_string);

            var ARID = Convert.ToInt32(result.id);
            var Data1 = ABE.obj_abhy_financialprogress_b_insertdata.Where(x => x.id == ARID).FirstOrDefault();
            if (Data1 != null)
            {
                Data1.state_name = result.state_name;
                Data1.component_id = result.component_id;
                Data1.activity_name = result.activity_name;
                Data1.component_budget_head = result.component_budget_head;
                Data1.expenditure_code = result.expenditure_code;
                Data1.expenditure_made = result.expenditure_made;
                Data1.cumulative_expenditure = result.cumulative_expenditure;
                Data1.fin_b_year = result.fin_b_year;
                Data1.fin_b_month = result.fin_b_month;
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
        public ActionResult deletecomp_B_php_fn(string comp_B_php_fn_string)
        {

            JavaScriptSerializer js = new JavaScriptSerializer();
            var result = js.Deserialize<abhy_financialprogress_b_insertdata>(comp_B_php_fn_string);

            if (result.id != 0)
            {
                var ARID = Convert.ToInt32(result.id);
                var Data1 = ABE.obj_abhy_financialprogress_b_insertdata.Where(x => x.id == ARID).FirstOrDefault();
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

        // AWP
        [HttpGet]
        public ActionResult AWP_Agency_StateWise_AgencyInfo(string awp_agency_state_name)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    
                    List<abhy_mis_pip_awp_feedback> ddetails = ABE.obj_abhy_mis_pip_awp_feedback.Where(x => x.state_name == awp_agency_state_name && x.observation_type == "awp").ToList();//total list

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




        [HttpGet]
        public ActionResult AWP_WorkActivity_Info()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_mis_awp_activity> ddetails = ABE.obj_abhy_mis_awp_activity.OrderBy(x => x.awp_item_code).ToList();//total list

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

        [HttpGet]
        public ActionResult AWP_Info(string StateName)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    
                    List<abhy_mis_awp_form> ddetails = new List<abhy_mis_awp_form>();
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = StateName;
                    //var Dist = Session["gdist"].ToString();

                    //var Block = Session["gblock"].ToString();
                    //var Gram = Session["ggram"].ToString();

                    //if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null && Gram != "" && Gram != null)
                    //{
                    //    ddetails = ABE.obj_abhy_mis_awp_form.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                    //}
                    //else if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null)
                    //{
                    //    ddetails = ABE.obj_abhy_mis_awp_form.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                    //}
                    //else if (State != "" && State != null && Dist != "" && Dist != null)
                    //{
                    //    ddetails = ABE.obj_abhy_mis_awp_form.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                    //}
                    //else 
                    if (State != "" && State != null && State != "0")
                    {
                        if (State == "ALL")
                        {
                            ddetails = ABE.obj_abhy_mis_awp_form.OrderBy(x => x.state_name == State).ToList();//total list

                        }
                        else
                        {
                            ddetails = ABE.obj_abhy_mis_awp_form.Where(x => x.state_name == State).OrderBy(x => x.state_name == State).ToList();//total list

                        }

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

        [HttpGet]
        public ActionResult AWP_B_Info(string StateName)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    
                    List<abhy_mis_awp_b_form> ddetails = new List<abhy_mis_awp_b_form>();
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = StateName;
                    //var Dist = Session["gdist"].ToString();

                    //var Block = Session["gblock"].ToString();
                    //var Gram = Session["ggram"].ToString();

                    //if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null && Gram != "" && Gram != null)
                    //{
                    //    ddetails = ABE.obj_abhy_mis_awp_b_form.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                    //}
                    //else if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null)
                    //{
                    //    ddetails = ABE.obj_abhy_mis_awp_b_form.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                    //}
                    //else if (State != "" && State != null && Dist != "" && Dist != null)
                    //{
                    //    ddetails = ABE.obj_abhy_mis_awp_b_form.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                    //}
                    //else
                    if (State != "" && State != null)
                    {
                        if (State == "ALL")
                        {
                            ddetails = ABE.obj_abhy_mis_awp_b_form.ToList();//total list

                        }
                        else
                        {
                            ddetails = ABE.obj_abhy_mis_awp_b_form.Where(x => x.state_name == State).ToList();//total list

                        }

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
        [HttpGet]
        public ActionResult IsNpmuThere()
        {      //prateek1

            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_mis_awp_activity> npmudetails = ABE.obj_abhy_mis_awp_activity.Where(x => x.is_npmu == "1").OrderBy(x => x.awp_item_code).ToList();//total list
                    return Json(npmudetails, JsonRequestBehavior.AllowGet);
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


        [HttpGet]
        public ActionResult AWP_Activity_Name_Info(string awp_workactivity)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    
                    List<abhy_mis_awp_activity> ddetails = ABE.obj_abhy_mis_awp_activity.Where(x => x.awp_work_activity_name == awp_workactivity).ToList();//total list
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

        //physical monitoring Agency name dropdown
        [HttpGet]
        public ActionResult AWP_Agency_Name(string state_name)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    
                    List<abhy_mis_pip_awp_feedback> ddetails = ABE.obj_abhy_mis_pip_awp_feedback.Where(x => x.state_name == state_name && x.observation_type == "awp").ToList();//total list

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
        public ActionResult Save_AWP_Form_Info(string Data)
        {
            if (Session["UserId"] != null)
            {
                
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<abhy_mis_awp_form>(Data);

                abhy_mis_awp_form obj = new abhy_mis_awp_form();
                string UID = randomCodeGeneration2();
                obj.userid = Convert.ToInt32(Session["UserId"]);
                //obj.awpcomponent = result.awpcomponent;
                List<abhy_mis_awp_activity> ddetails12 = ABE.obj_abhy_mis_awp_activity.Where(x => x.awp_work_activity_name == result.awp_workactivity).ToList();//total list

                obj.awpcomponent = ddetails12[0].awp_component_id;

                if (result.state_name != "0" && result.state_name != "" && result.state_name != null)
                {
                    obj.state_name = result.state_name;
                }
                else
                {
                    return Json("Please Select StateName");
                }
                if (Session["gdist"] != null)
                {
                    obj.district_name = Session["gdist"].ToString();
                }
                if (Session["gblock"] != null)
                {
                    obj.block_name = Session["gblock"].ToString();
                }
                if (Session["ggram"] != null)
                {
                    obj.gpname = Session["ggram"].ToString();
                }
                obj.awp_date_time = DateTime.Today.ToString();
                obj.awp_uid = UID;
                obj.awp_estimated_cost_for_five_years = result.awp_estimated_cost_for_five_years;
                obj.awp_date_time = DateTime.Today.ToString();
                if (result.awp_workactivity != "0" && result.awp_workactivity != "" && result.awp_workactivity != null)
                {
                    obj.awp_workactivity = result.awp_workactivity;
                }
                else
                {
                    return Json("Please Select Work Activity");
                }
                obj.awp_item_code = ddetails12[0].awp_item_code;
                obj.awp_total = result.awp_total;
                obj.awp_physical_year_20_21 = result.awp_physical_year_20_21;
                obj.awp_financial_year_20_21 = result.awp_financial_year_20_21;
                obj.awp_agency_name = result.awp_agency_name;
                obj.awp_agency_officer_name = result.awp_agency_officer_name;
                obj.awp_activity_id = ddetails12[0].awp_activity_id;
                obj.awp_fin_year = result.awp_fin_year;
                obj.awp_category = ddetails12[0].awp_category;
                // obj.awp_month = result.awp_month;
                // obj.awp_cumulative = result.awp_cumulative;
                ABE.obj_abhy_mis_awp_form.Add(obj);
                ABE.SaveChanges();
                return Json("Successfully Saved");


            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }


        [HttpPost]
        public ActionResult Save_AWP_B_Form_Info(string Data)
        {
            if (Session["UserId"] != null)
            {
                
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<abhy_mis_awp_b_form>(Data);

                abhy_mis_awp_b_form obj = new abhy_mis_awp_b_form();
                string UID = randomCodeGeneration2();
                obj.userid = Convert.ToInt32(Session["UserId"]);


                if (result.state_name != "0" && result.state_name != "" && result.state_name != null)
                {
                    obj.state_name = result.state_name;
                }
                else
                {
                    return Json("Please Select StateName");
                }
                if (Session["gdist"] != null)
                {
                    obj.district_name = Session["gdist"].ToString();
                }
                if (Session["gblock"] != null)
                {
                    obj.block_name = Session["gblock"].ToString();
                }
                if (Session["ggram"] != null)
                {
                    obj.gpname = Session["ggram"].ToString();
                }

                List<abhy_mis_awp_activity> ddetails12 = ABE.obj_abhy_mis_awp_activity.Where(x => x.awp_work_activity_name == result.awp_workactivity).ToList();//total list
                obj.awpcomponent = ddetails12[0].awp_component_id;
                obj.awp_date_time = DateTime.Today.ToString();
                obj.awp_uid = UID;
                obj.awp_estimated_cost_for_five_years = result.awp_estimated_cost_for_five_years;
                obj.awp_date_time = DateTime.Today.ToString();
                if (result.awp_workactivity != "0" && result.awp_workactivity != "" && result.awp_workactivity != null)
                {
                    obj.awp_workactivity = result.awp_workactivity;
                }
                else
                {
                    return Json("Please Select Work Activity");
                }

                obj.awp_total = result.awp_total;
                obj.awp_physical_year_20_21 = result.awp_physical_year_20_21;
                obj.awp_financial_year_20_21 = result.awp_financial_year_20_21;
                obj.awp_agency_name = result.awp_agency_name;
                obj.awp_agency_officer_name = result.awp_agency_officer_name;
                obj.awp_activity_id = ddetails12[0].awp_activity_id;
                obj.awp_item_code = ddetails12[0].awp_item_code;
                //obj.awp_month = result.awp_month;
                //obj.awp_cumulative = result.awp_cumulative;
                obj.awp_fin_year = result.awp_fin_year;
                ABE.obj_abhy_mis_awp_b_form.Add(obj);
                ABE.SaveChanges();
                return Json("Successfully Saved");


            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }


        public ActionResult AWP()
        {
            
            return View();
        }
        public ActionResult Agency_dashboard()
        {
            
            return View();
        }
        public ActionResult Pip_form()
        {
            
            return View();
        }
        public ActionResult Awp_form()
        {
            
            return View();
        }

        public ActionResult Awp_b_component_form()
        {
            
            return View();
        }
        public ActionResult Pip_b_component_form()
        {
            
            return View();
        }
        public ActionResult Awp_b_component_Report()
        {
            return View();
        }
        public ActionResult Pip_b_component_Report()
        {
            return View();
        }
        public ActionResult php_and_fn()
        {
            return View();
        }
        public ActionResult php_and_fn_report()
        {
            return View();
        }
        public ActionResult physical_monitoring()
        {
            
            return View();
        }
        public ActionResult physical_monitoring_report()
        {
            
            return View();
        }

        [HttpGet]
        public ActionResult Procurement_milestone()
        {
            if (TempData["PID"] != null)
            {
                
                var Id = Convert.ToInt32(TempData["PID"]);
                var Dataa = ABE.obj_abhy_procurement_milestone_insertdata.Where(x => x.id == Id).ToList();

                ViewBag.Infoo = Dataa;

                return View();
            }
            else
            {
                return View();
            }

        }
        public ActionResult Procurement_milestone_report()
        {
            
            return View();
        }

        //Akash
        [HttpGet]
        public ActionResult Incentive_Fund_Utilization()
        {
            if (TempData["PID"] != null)
            {
                
                var Id = Convert.ToInt32(TempData["PID"]);
                var Dataa = ABE.obj_abhy_procurement_milestone_insertdata.Where(x => x.id == Id).ToList();

                ViewBag.Infoo = Dataa;

                return View();
            }
            else
            {
                return View();
            }

        }
        public ActionResult Incentive_Fund_Utilization_report()
        {
            
            return View();
        }





        [HttpGet]
        public ActionResult php_and_fn_Info_A_Form(string StateName)
        {
            if (Session["UserId"] != null)
            {
                try
                {

                    List<abhy_financialprogress_insertdata_vw> ddetails = new List<abhy_financialprogress_insertdata_vw>();
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = StateName;

                    if (State != "" && State != null && State != "0")
                    {
                        if (State == "ALL")
                        {
                            ddetails = ABE.obj_abhy_financialprogress_insertdata_vw.OrderBy(x => x.fin_year).ToList();//total list
                        }
                        else
                        {
                            ddetails = ABE.obj_abhy_financialprogress_insertdata_vw.Where(x => x.state_name == StateName).OrderBy(x=>x.fin_year).ToList();//total list
                        }
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
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }

        public ActionResult PHP_FN_A_Table_Info_excel(string state1, string year1, string month1)
        {
            var off = Session["Officer"].ToString();
            var State = "";
            if (off == "State Level Nodal Officer")
            {
                var ss = Session["gstate"].ToString();
                State = ss;
            }
            else if (off == "Admin" || off == "National Level Nodal Officer")
            {
                State = state1;
            }
            var year = year1;
            var month = month1;

            List<abhy_financialprogress_insertdata_vw> TDetails = new List<abhy_financialprogress_insertdata_vw>();

            if (State == "ALL")
            {
                if (State == "ALL" && year == "ALL" && month != "0" && month != "" && month != null)
                {
                    TDetails = ABE.obj_abhy_financialprogress_insertdata_vw.Where(x => x.fin_month == month).ToList();

                }
                else if (State == "ALL" && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                {
                    TDetails = ABE.obj_abhy_financialprogress_insertdata_vw.Where(x => x.fin_year == year && x.fin_month == month).ToList();

                }
                else if (State == "ALL" && year == "ALL")
                {
                    TDetails = ABE.obj_abhy_financialprogress_insertdata_vw.ToList();

                }
                else if (State == "ALL" && year != "0" && year != "" && year != null)
                {
                    TDetails = ABE.obj_abhy_financialprogress_insertdata_vw.Where(x => x.fin_year == year).ToList();

                }
                else if (State == "ALL")
                {
                    TDetails = ABE.obj_abhy_financialprogress_insertdata_vw.ToList();

                }
            }
            else if (State != "ALL" && year == "ALL")
            {
                if (State != "0" && State != "" && State != null && year == "ALL" && month != "0" && month != "" && month != null)
                {
                    TDetails = ABE.obj_abhy_financialprogress_insertdata_vw.Where(x => x.state_name == State && x.fin_month == month).ToList();

                }
              else  if (State != "0" && State != "" && State != null && year == "ALL")
                {
                    TDetails = ABE.obj_abhy_financialprogress_insertdata_vw.Where(x => x.state_name == State).ToList();

                }
            }
            else {


                 if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                {
                    TDetails = ABE.obj_abhy_financialprogress_insertdata_vw.Where(x => x.state_name == State && x.fin_year == year && x.fin_month == month).ToList();

                }
                else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
                {
                    TDetails = ABE.obj_abhy_financialprogress_insertdata_vw.Where(x => x.state_name == State && x.fin_year == year).ToList();

                }

                else if (State != "0" && State != "" && State != null)
                {
                    TDetails = ABE.obj_abhy_financialprogress_insertdata_vw.Where(x => x.state_name == State).ToList();

                }
            }

            System.Data.DataTable dt = new System.Data.DataTable();
            dt.Columns.Add("State Name", typeof(string));
            dt.Columns.Add("Month", typeof(string));
            dt.Columns.Add("Year", typeof(string));
            dt.Columns.Add("Component  ID", typeof(string));
            dt.Columns.Add("Sub-Component ID", typeof(string));
            dt.Columns.Add("Activity ID", typeof(string));
            dt.Columns.Add("Item Code", typeof(string));
            dt.Columns.Add("Work / Activities", typeof(string));
            dt.Columns.Add("Financial(In Crore)(Planned as per AWP)", typeof(string));
            dt.Columns.Add("Method of Selection/ Procurement(PP)", typeof(string));
            dt.Columns.Add("Category of Procurement(As categorised in PP)", typeof(string));
            dt.Columns.Add("Component Budget Head", typeof(string));
            dt.Columns.Add("Expenditure Code", typeof(string));
            dt.Columns.Add("Expenditure Made(in Crore)", typeof(string));
            dt.Columns.Add("Cumulative Expenditure(in crore)", typeof(string));


            if (TDetails.Count != 0) {

                double Sum_1 = 0;
                int decimalPlaces = 6;
                for (int i = 0; i < TDetails.Count; i++)
                {
                    DataRow dataRow = dt.NewRow();
                    double expenditure_made = 0;
                    if (TDetails[i].expenditure_made != null && TDetails[i].expenditure_made != "")
                    {

                        var SS = Convert.ToDecimal(TDetails[i].expenditure_made);
                        expenditure_made = Convert.ToDouble(SS);
                        double valueToAdd = Math.Round(Convert.ToDouble(SS), decimalPlaces);
                        Sum_1 += valueToAdd;
                    }


                    dataRow["State Name"] = TDetails[i].state_name;
                    dataRow["Month"] = TDetails[i].fin_month;
                    dataRow["Year"] = TDetails[i].fin_year;
                    dataRow["Component  ID"] = TDetails[i].component_id;
                    dataRow["Sub-Component ID"] = TDetails[i].sub_component_id;
                    dataRow["Activity ID"] = TDetails[i].activity_id;
                    dataRow["Item Code"] = TDetails[i].item_code;
                    dataRow["Work / Activities"] = TDetails[i].activity_name;
                    dataRow["Financial(In Crore)(Planned as per AWP)"] = TDetails[i].financial_awp;
                    dataRow["Method of Selection/ Procurement(PP)"] = TDetails[i].producrment_selection;
                    dataRow["Category of Procurement(As categorised in PP)"] = TDetails[i].category_of_procurement;
                    dataRow["Component Budget Head"] = TDetails[i].component_budget_head;
                    dataRow["Expenditure Code"] = TDetails[i].expenditure_code;
                    dataRow["Expenditure Made(in Crore)"] = expenditure_made;
                    dataRow["Cumulative Expenditure(in crore)"] = Sum_1;

                    dt.Rows.Add(dataRow);
                }
            }
            else
            {
                DataRow dataRow = dt.NewRow();
                


                dataRow["State Name"] = "";
                dataRow["Month"] = "";
                dataRow["Year"] = "";
                dataRow["Component  ID"] = "";
                dataRow["Sub-Component ID"] = "";
                dataRow["Activity ID"] = "";
                dataRow["Item Code"] = "";
                dataRow["Work / Activities"] = "";
                dataRow["Financial(In Crore)(Planned as per AWP)"] = "";
                dataRow["Method of Selection/ Procurement(PP)"] = "No Data";
                dataRow["Category of Procurement(As categorised in PP)"] = "";
                dataRow["Component Budget Head"] = "";
                dataRow["Expenditure Code"] = "";
                dataRow["Expenditure Made(in Crore)"] = "";
                dataRow["Cumulative Expenditure(in crore)"] = "";

                dt.Rows.Add(dataRow);
            }


            if (dt != null && dt.Rows.Count > 0)
            {
                System.Web.HttpContext.Current.Response.Clear();
                System.Web.HttpContext.Current.Response.ClearContent();
                System.Web.HttpContext.Current.Response.ClearHeaders();
                System.Web.HttpContext.Current.Response.Buffer = true;
                System.Web.HttpContext.Current.Response.ContentType = "application/ms-excel";
                System.Web.HttpContext.Current.Response.Write(@"<!DOCTYPE HTML PUBLIC ""-//W3C//DTD HTML 4.0 Transitional//EN"">");
                System.Web.HttpContext.Current.Response.AddHeader("Content-Disposition", "attachment;filename=FINANCIAL PROGRESS MONITORING Component A.xls");
                System.Web.HttpContext.Current.Response.Charset = "utf-8";
                System.Web.HttpContext.Current.Response.ContentEncoding = System.Text.Encoding.GetEncoding("windows-1250");
                //sets font
                System.Web.HttpContext.Current.Response.Write("<font style='font-size:13.0pt; font-family:Calibri;'>");
                System.Web.HttpContext.Current.Response.Write("<BR><BR><BR>");
                //sets the table border, cell spacing, border color, font of the text, background, foreground, font height
                System.Web.HttpContext.Current.Response.Write("<Table border='0' bgColor='#ffffff' " +
                  "borderColor='#000000' border='1' cellSpacing='0' cellPadding='0' " +
                  "style='font-size:10.0pt; font-family:Calibri; background:white;'> <TR>");
                //am getting my grid's column headers
                int columnscount = dt.Columns.Count;

                for (int j = 0; j < columnscount; j++)
                {      //write in new column
                    System.Web.HttpContext.Current.Response.Write("<Td>");
                    //Get column headers  and make it as bold in excel columns
                    System.Web.HttpContext.Current.Response.Write("<B>");
                    System.Web.HttpContext.Current.Response.Write(dt.Columns[j].ToString());
                    System.Web.HttpContext.Current.Response.Write("</B>");
                    System.Web.HttpContext.Current.Response.Write("</Td>");
                }
                System.Web.HttpContext.Current.Response.Write("</TR>");
                foreach (DataRow row in dt.Rows)
                {//write in new row
                    System.Web.HttpContext.Current.Response.Write("<TR>");
                    for (int i = 0; i < dt.Columns.Count; i++)
                    {
                        System.Web.HttpContext.Current.Response.Write("<Td>");
                        System.Web.HttpContext.Current.Response.Write(row[i].ToString());
                        System.Web.HttpContext.Current.Response.Write("</Td>");
                    }

                    System.Web.HttpContext.Current.Response.Write("</TR>");
                }
                System.Web.HttpContext.Current.Response.Write("</Table>");
                System.Web.HttpContext.Current.Response.Write("</font>");
                System.Web.HttpContext.Current.Response.Flush();
                System.Web.HttpContext.Current.Response.End();
            }
            return RedirectToAction("Index");
        }


        [HttpGet]
        public ActionResult php_and_fn_Activity_Info(string StateName)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                   
                    List<abhy_financialprogress_type_download> ddetails = new List<abhy_financialprogress_type_download>();
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = StateName;

                    if (State != "" && State != null && State != "0")
                    {
                        if (State == "ALL")
                        {
                            ddetails = ABE.obj_abhy_financialprogress_type_download.ToList();//total list
                        }
                        else
                        {
                            ddetails = ABE.obj_abhy_financialprogress_type_download.Where(x => x.state_name == StateName).ToList();//total list
                        }
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


        [HttpGet]
        public ActionResult PHP_DropDown_Info(string StateName)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_financialprogress_dropdown> ddetails = new List<abhy_financialprogress_dropdown>();
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = StateName;
                    //var Dist = Session["gdist"].ToString();

                    //var Block = Session["gblock"].ToString();
                    //var Gram = Session["ggram"].ToString();

                    //if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null && Gram != "" && Gram != null)
                    //{
                    //    ddetails = ABE.obj_abhy_financialprogress_dropdown.Where(x => x.state_name == State/* && x.district_name == Dist && x.block_name == Block && x.gpname == Gram*/).ToList();//total list

                    //}
                    //else if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null)
                    //{
                    //    ddetails = ABE.obj_abhy_financialprogress_dropdown.Where(x => x.state_name == State /*&& x.district_name == Dist && x.block_name == Block*/).ToList();//total list

                    //}
                    //else if (State != "" && State != null && Dist != "" && Dist != null)
                    //{
                    //    ddetails = ABE.obj_abhy_financialprogress_dropdown.Where(x => x.state_name == State/* && x.district_name == Dist*/).ToList();//total list

                    //}
                    //else 
                    if (State != "" && State != null && State != "0")
                    {
                        if (StateName == "ALL")
                        {
                            ddetails = ABE.obj_abhy_financialprogress_dropdown.OrderBy(x => x.item_code).ToList();//total list
                        }
                        else
                        {
                            ddetails = ABE.obj_abhy_financialprogress_dropdown.Where(x => x.state_name == StateName).OrderBy(x => x.item_code).ToList();//total list
                        }

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

        [HttpGet]
        public ActionResult WorkActivity_A_Form_Dropdown_Info(string WorkActivity)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    
                    
                    List<abhy_financialprogress_dropdown> ddetails = ABE.obj_abhy_financialprogress_dropdown.Where(x => x.activity_name == WorkActivity).ToList();//total list

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
        public ActionResult Save_PHP_FN_A_Form_Info(string Data)
        {
            try
            {
                if (Session["UserId"] != null)
                {
                   
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_financialprogress_insertdata>(Data);


                    List<abhy_financialprogress_dropdown> ddetails11 = ABE.obj_abhy_financialprogress_dropdown.Where(x => x.activity_name == result.activity_name && x.state_name == result.state_name).ToList();//total list



                    var StateName = result.state_name;

                    double val = 0;

                    if (StateName != "ALL")
                    {
                        List<abhy_financialprogress_insertdata> ddetails = ABE.obj_abhy_financialprogress_insertdata.Where(x => x.state_name == StateName).ToList();//total list

                        var Detail = ddetails.LastOrDefault();
                        // val = Convert.ToInt32(Convert.ToDecimal(Detail.expenditure_made));
                    }
                    else
                    {
                        List<abhy_financialprogress_insertdata> ddetails = ABE.obj_abhy_financialprogress_insertdata.ToList();//total list
                        var Detail = ddetails.LastOrDefault();
                        val = Convert.ToDouble(Convert.ToDecimal(Detail.expenditure_made));
                    }

                    abhy_financialprogress_insertdata obj = new abhy_financialprogress_insertdata();

                    double cumulative_expenditure = 0;
                    if (result.expenditure_made != null && result.expenditure_made != "")
                    {
                        cumulative_expenditure = Convert.ToDouble(Convert.ToDecimal(result.expenditure_made)) + val;
                    }

                    // string UID = randomCodeGeneration2();
                    obj.userid = Convert.ToInt32(Session["UserId"]);
                    obj.fin_agency_name = result.fin_agency_name;
                    obj.fin_officer_name = result.fin_officer_name;
                    obj.component_id = ddetails11[0].component_id;
                    if (result.state_name != "0" && result.state_name != "" && result.state_name != null)
                    {
                        obj.state_name = result.state_name;
                    }
                    else
                    {
                        return Json("Please Select StateName");
                    }
                    var validate = CheckNumIsValid(result.expenditure_made);
                    if (validate == false)
                    {
                        return Json("Please enter numeric value in expenditure made (in Crore)");
                    }

                    obj.cumulative_sum = result.cumulative_sum;
                    obj.fin_month = result.fin_month;
                    obj.fin_year = result.fin_year;
                    //obj.district_name = Session["gdist"].ToString();
                    //obj.block_name = Session["gblock"].ToString();
                    //obj.gpname = Session["ggram"].ToString();
                    obj.activity_date = DateTime.Today.ToString();
                    obj.sub_component_id = ddetails11[0].sub_component_id;
                    obj.activity_id = ddetails11[0].activity_id;
                    obj.category_of_procurement = result.category_of_procurement;
                    obj.item_code = ddetails11[0].item_code;
                    if (result.activity_name != "0" && result.activity_name != "" && result.activity_name != null)
                    {
                        obj.activity_name = result.activity_name;

                    }
                    else
                    {
                        return Json("Please Select Work Activity");
                    }
                    obj.component_budget_head = ddetails11[0].component_budget_head;
                    obj.expenditure_code = ddetails11[0].expenditure_code;
                    //  obj.physical_awp = result.physical_awp;
                    obj.financial_awp = result.financial_awp;
                    obj.producrment_selection = result.producrment_selection;
                    obj.expenditure_made = result.expenditure_made;
                    obj.cumulative_expenditure = cumulative_expenditure.ToString();
                    ABE.obj_abhy_financialprogress_insertdata.Add(obj);
                    ABE.SaveChanges();
                    return Json("Successfully Saved");


                }
                else
                {
                    return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception ex)
            {
                return Json(ex.Message + " " + ex.StackTrace, JsonRequestBehavior.AllowGet);
            }

        }
        //[HttpPost]
        //public ActionResult Save_PHP_FN_A_Form_Info(string Data)
        //{
        //    if (Session["UserId"] != null)
        //    {
        //        JavaScriptSerializer js = new JavaScriptSerializer();
        //        var result = js.Deserialize<abhy_financialprogress_insertdata>(Data);

        //        abhy_financialprogress_insertdata obj = new abhy_financialprogress_insertdata();
        //        // string UID = randomCodeGeneration2();
        //        obj.userid = Convert.ToInt32(Session["UserId"]);
        //        obj.fin_agency_name = result.fin_agency_name;
        //        obj.fin_officer_name = result.fin_officer_name;
        //        obj.component_id = result.component_id;
        //        obj.state_name = result.state_name;
        //        obj.cumulative_sum = result.cumulative_sum;
        //        obj.fin_month = result.fin_month;
        //        obj.fin_year = result.fin_year;
        //        //obj.district_name = Session["gdist"].ToString();
        //        //obj.block_name = Session["gblock"].ToString();
        //        //obj.gpname = Session["ggram"].ToString();
        //        obj.activity_date = DateTime.Today.ToString();
        //        obj.sub_component_id = result.sub_component_id;
        //        obj.activity_id = result.activity_id;
        //        obj.category_of_procurement = result.category_of_procurement;
        //        obj.item_code = result.item_code;
        //        obj.activity_name = result.activity_name;
        //        obj.component_budget_head = result.component_budget_head;
        //        obj.expenditure_code = result.expenditure_code;
        //        //  obj.physical_awp = result.physical_awp;
        //        obj.financial_awp = result.financial_awp;
        //        obj.producrment_selection = result.producrment_selection;
        //        obj.expenditure_made = result.expenditure_made;
        //        obj.cumulative_expenditure = result.cumulative_expenditure;
        //        ABE.obj_abhy_financialprogress_insertdata.Add(obj);
        //        ABE.SaveChanges();
        //        return Json("Successfully Saved");


        //    }
        //    else
        //    {
        //        return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
        //    }
        //}
        //B Form

        [HttpGet]
        public ActionResult php_and_fn_Info_B_Form(string StateName)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    
                    List<abhy_financialprogress_b_insertdata_vw> ddetails = new List<abhy_financialprogress_b_insertdata_vw>();
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = StateName;

                    if (State != "" && State != null && State != "0")
                    {
                        if (State == "ALL")
                        {
                            ddetails = ABE.obj_abhy_financialprogress_b_insertdata_vw.OrderBy(x=>x.fin_b_year).ToList();//total list
                        }
                        else
                        {
                            ddetails = ABE.obj_abhy_financialprogress_b_insertdata_vw.Where(x => x.state_name == StateName).OrderBy(x => x.fin_b_year).ToList();//total list
                        }
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
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpGet]
        public ActionResult php_and_fn_Activity_Info_B_Form(string StateName)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    
                    List<abhy_financialprogress_b_dropdown> ddetails = new List<abhy_financialprogress_b_dropdown>();
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = StateName;
                    //var Dist = Session["gdist"].ToString();

                    //var Block = Session["gblock"].ToString();
                    //var Gram = Session["ggram"].ToString();

                    //if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null && Gram != "" && Gram != null)
                    //{
                    //    ddetails = ABE.obj_abhy_financialprogress_dropdown.Where(x => x.state_name == State/* && x.district_name == Dist && x.block_name == Block && x.gpname == Gram*/).ToList();//total list

                    //}
                    //else if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null)
                    //{
                    //    ddetails = ABE.obj_abhy_financialprogress_dropdown.Where(x => x.state_name == State /*&& x.district_name == Dist && x.block_name == Block*/).ToList();//total list

                    //}
                    //else if (State != "" && State != null && Dist != "" && Dist != null)
                    //{
                    //    ddetails = ABE.obj_abhy_financialprogress_dropdown.Where(x => x.state_name == State/* && x.district_name == Dist*/).ToList();//total list

                    //}
                    //else 
                    if (State != "" && State != null && State != "0")
                    {
                        if (StateName == "ALL")
                        {
                            ddetails = ABE.obj_abhy_financialprogress_b_dropdown.ToList();//total list

                        }
                        else
                        {
                            ddetails = ABE.obj_abhy_financialprogress_b_dropdown.Where(x => x.state_name == StateName).ToList();//total list

                        }

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

        [HttpGet]
        public ActionResult WorkActivity_B_Form_Dropdown_Info(string WorkActivity)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    
                    List<abhy_financialprogress_b_dropdown> ddetails = ABE.obj_abhy_financialprogress_b_dropdown.Where(x => x.activity_name == WorkActivity).ToList();//total list

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
        public ActionResult Save_PHP_FN_B_Form_Info(string Data)
        {
            if (Session["UserId"] != null)
            {
                
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<abhy_financialprogress_b_insertdata>(Data);


                var ddetails11 = ABE.obj_abhy_financialprogress_b_dropdown.Where(x => x.activity_name == result.activity_name).ToList();//total list

                abhy_financialprogress_b_insertdata obj = new abhy_financialprogress_b_insertdata();

                var State = result.state_name;

                double val = 0;

                if (State == "ALL")
                {
                    var ddetails = ABE.obj_abhy_financialprogress_b_insertdata.ToList();//total list

                    if (ddetails.Count != 0)
                    {
                        var xx = ddetails.LastOrDefault();
                        val = Convert.ToDouble(xx.expenditure_made) + Convert.ToDouble(result.expenditure_made);

                    }

                }
                else
                {
                    var ddetails = ABE.obj_abhy_financialprogress_b_insertdata.Where(x => x.state_name == State).ToList();//total list
                    if (ddetails.Count != 0)
                    {
                        var xx = ddetails.LastOrDefault();
                        val = Convert.ToDouble(xx.expenditure_made) + Convert.ToDouble(result.expenditure_made);

                    }
                }
                // string UID = randomCodeGeneration2();
                obj.userid = Convert.ToInt32(Session["UserId"]);
                if (ddetails11.Count > 0)
                {
                    obj.component_id = ddetails11[0].component_id;
                }
                else
                {
                    obj.component_id = "A";

                }
                obj.activity_date = DateTime.Today.ToString();

                if (result.activity_name != "0" && result.activity_name != "" && result.activity_name != null)
                {

                    obj.activity_name = result.activity_name;
                }
                else
                {
                    return Json("Please Select Work Activity");
                }
                if (result.state_name != "0" && result.state_name != "" && result.state_name != null)
                {
                    obj.state_name = result.state_name;
                }
                else
                {
                    return Json("Please Select State Name");
                }

                var validate = CheckNumIsValid(result.expenditure_made);
                if (validate == false)
                {
                    return Json("Please enter numeric value in expenditure made(In Crore)");
                }
                if (ddetails11.Count > 0)
                {
                    obj.component_budget_head = ddetails11[0].component_budget_head;
                    obj.expenditure_code = ddetails11[0].expenditure_code;
                }
                else
                {
                    obj.component_budget_head = "Grant in Aid General/Non Consultancy Services";
                    obj.expenditure_code = "26.02.01.11.01";
                }
                obj.expenditure_made = result.expenditure_made;
                obj.cumulative_expenditure = val.ToString();
                obj.fin_b_agency_name = result.fin_b_agency_name;
                obj.fin_b_officer_name = result.fin_b_officer_name;
                obj.fin_b_month = result.fin_b_month;
                obj.fin_b_year = result.fin_b_year;
                //obj.dli_amt = result.dli_amt;
                //obj.dli_selection = result.dli_selection;
                obj.total_amt_recieved = result.total_amt_recieved;
                ABE.obj_abhy_financialprogress_b_insertdata.Add(obj);
                ABE.SaveChanges();
                return Json("Successfully Saved");


            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }

        //[HttpPost]
        //public ActionResult Save_PHP_FN_B_Form_Info(string Data)
        //{
        //    if (Session["UserId"] != null)
        //    {
        //        JavaScriptSerializer js = new JavaScriptSerializer();
        //        var result = js.Deserialize<abhy_financialprogress_b_insertdata>(Data);

        //        abhy_financialprogress_b_insertdata obj = new abhy_financialprogress_b_insertdata();
        //        // string UID = randomCodeGeneration2();
        //        obj.userid = Convert.ToInt32(Session["UserId"]);
        //        obj.component_id = result.component_id;
        //        if (result.state_name != "0" && result.state_name != "" && result.state_name != null)
        //        {
        //            obj.state_name = result.state_name;
        //        }
        //        else
        //        {
        //            return Json("Please Select State Name");
        //        }
        //        List<abhy_financialprogress_dropdown> ddetails11 = ABE.obj_abhy_financialprogress_dropdown.Where(x => x.activity_name == result.activity_name).ToList();//total list
        //        obj.activity_date = DateTime.Today.ToString();
        //        if (result.activity_name != "0" && result.activity_name != "" && result.activity_name != null)
        //        {
        //            obj.activity_name = result.activity_name;
        //        }
        //        else
        //        {
        //            return Json("Please Select Work Activity");
        //        }
        //        obj.component_budget_head = result.component_budget_head;
        //        obj.expenditure_code = result.expenditure_code;
        //        obj.expenditure_made = result.expenditure_made;
        //        obj.cumulative_expenditure = result.cumulative_expenditure;
        //        obj.fin_b_agency_name = result.fin_b_agency_name;
        //        obj.fin_b_officer_name = result.fin_b_officer_name;
        //        obj.fin_b_month = result.fin_b_month;
        //        obj.fin_b_year = result.fin_b_year;
        //        obj.dli_amt = result.dli_amt;
        //        obj.dli_selection = result.dli_selection;
        //        obj.total_amt_recieved = result.total_amt_recieved;
        //        ABE.obj_abhy_financialprogress_b_insertdata.Add(obj);
        //        ABE.SaveChanges();
        //        return Json("Successfully Saved");


        //    }
        //    else
        //    {
        //        return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
        //    }
        //}




        [HttpGet]
        public ActionResult Financial_Progress_Monitoring_Component_A_Report_Year(string Year, string StateName)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    
                    List<abhy_financialprogress_insertdata_vw> ddetails = new List<abhy_financialprogress_insertdata_vw>();
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = StateName;

                    if (State != "" && State != null && State != "0")
                    {
                        if (State == "ALL")
                        {
                            if (Year == "ALL")
                            {
                                ddetails = ABE.obj_abhy_financialprogress_insertdata_vw.ToList();
                            }
                            else
                            {
                                ddetails = ABE.obj_abhy_financialprogress_insertdata_vw.Where(x => x.fin_year == Year).ToList();//total list
                            }

                        }
                        else if (Year == "ALL")
                        {
                            if (State == "ALL")
                            {
                                ddetails = ABE.obj_abhy_financialprogress_insertdata_vw.ToList();
                            }
                            else
                            {
                                ddetails = ABE.obj_abhy_financialprogress_insertdata_vw.Where(x => x.state_name == StateName).ToList();//total list of state
                            }
                        }
                        else
                        {
                            ddetails = ABE.obj_abhy_financialprogress_insertdata_vw.Where(x => x.fin_year == Year && x.state_name == StateName).ToList();//total list

                        }

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
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);

            }
        }

        [HttpGet]
        public ActionResult Financial_Progress_Monitoring_Component_B_Report_Year(string Year, string StateName)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    
                    List<abhy_financialprogress_b_insertdata_vw> ddetails = new List<abhy_financialprogress_b_insertdata_vw>();
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = StateName;

                    if (State != "" && State != null && State != "0")
                    {
                        if (State == "ALL")
                        {
                            if (Year == "ALL")
                            {
                                ddetails = ABE.obj_abhy_financialprogress_b_insertdata_vw.ToList();//total list
                            }
                            else
                            {
                                ddetails = ABE.obj_abhy_financialprogress_b_insertdata_vw.Where(x => x.fin_b_year == Year).ToList();//total list
                            }

                        }
                        else if (Year == "ALL")
                        {
                            if (State == "ALL")
                            {
                                ddetails = ABE.obj_abhy_financialprogress_b_insertdata_vw.ToList();//total list
                            }
                            else
                            {
                                ddetails = ABE.obj_abhy_financialprogress_b_insertdata_vw.Where(x => x.state_name == State).ToList();//total list
                            }
                        }
                        else
                        {

                            ddetails = ABE.obj_abhy_financialprogress_b_insertdata_vw.Where(x => x.fin_b_year == Year && x.state_name == StateName).ToList();//total list

                        }

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
        [HttpGet]
        public ActionResult Financial_Progress_Monitoring_Component_A_Report_Month(string Month, string Statename, string Year)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    
                    List<abhy_financialprogress_insertdata_vw> ddetails = new List<abhy_financialprogress_insertdata_vw>();
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Statename;

                    if (State != "" && State != null && State != "0")
                    {
                        if (State == "ALL")
                        {
                            ddetails = ABE.obj_abhy_financialprogress_insertdata_vw.Where(x => x.fin_month == Month).ToList();//total list

                        }
                        else
                        {
                            ddetails = ABE.obj_abhy_financialprogress_insertdata_vw.Where(x => x.fin_month == Month && x.state_name == Statename && x.fin_year == Year).ToList();//total list

                        }

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


        [HttpGet]
        public ActionResult Financial_Progress_Monitoring_Component_B_Report_Month(string Month, string Statename, string Year)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    
                    List<abhy_financialprogress_b_insertdata_vw> ddetails = new List<abhy_financialprogress_b_insertdata_vw>();
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Statename;

                    if (State != "" && State != null && State != "0")
                    {
                        if (State == "ALL")
                        {
                            ddetails = ABE.obj_abhy_financialprogress_b_insertdata_vw.Where(x => x.fin_b_month == Month).ToList();//total list

                        }
                        else
                        {
                            ddetails = ABE.obj_abhy_financialprogress_b_insertdata_vw.Where(x => x.fin_b_month == Month && x.state_name == Statename && x.fin_b_year == Year).ToList();//total list

                        }

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
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);

            }
        }

        //physical monitoring good dropdown
        [HttpGet]
        public ActionResult Brief_Description_of_Good_Dropdown()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    
                    List<abhy_physicalmonitoring_dropdown> ddetails = ABE.obj_abhy_physicalmonitoring_dropdown.ToList();//total list

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



        [HttpGet]
        public ActionResult NameSelector_Dropdown(string SupportServiceName)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    
                    List<abhy_physicalmonitoring_dropdown> ddetails = new List<abhy_physicalmonitoring_dropdown>();

                    var Data11 = "";
                    if (SupportServiceName == "Work")
                    {
                        Data11 = "Works";
                    }
                    else if (SupportServiceName == "Support")
                    {
                        Data11 = "support_service";
                    }
                    else if (SupportServiceName == "Goods")
                    {
                        Data11 = "Goods";
                    }
                    else if (SupportServiceName == "Training")
                    {
                        Data11 = "Training";
                    }

                    //abhishek
                    else if (SupportServiceName == "Procurements Of Equipments")
                    {
                        Data11 = "Procurements Of Equipments";
                    }
                    else if (SupportServiceName == "IEC/Awareness")
                    {
                        Data11 = "IEC/Awareness";
                    }
                    else if (SupportServiceName == "Other Key Activities")
                    {
                        Data11 = "Other Key Activities";
                    }

                    //Abhishek2

                    else if (SupportServiceName == "Social Outreach")
                    {
                        Data11 = "Social Outreach";
                    }

                    ddetails = ABE.obj_abhy_physicalmonitoring_dropdown.Where(x => x.support_type == Data11).OrderBy(x => x.item_code).ToList();//total list


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


        [HttpGet]
        public ActionResult DropDownShowing_Values(string SupportTypeName)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    
                    List<abhy_physicalmonitoring_dropdown> ddetails = new List<abhy_physicalmonitoring_dropdown>();



                    ddetails = ABE.obj_abhy_physicalmonitoring_dropdown.Where(x => x.support_name == SupportTypeName).ToList();//total list


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

        //abhishek sharma

        [HttpGet]
        public ActionResult DropDownShowing_Values1(string SupportTypeName)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    
                    List<abhy_physicalmonitoring_dropdown_new> ddetails = new List<abhy_physicalmonitoring_dropdown_new>();



                    ddetails = ABE.obj_abhy_physicalmonitoring_dropdown_new.Where(x => x.support_name == SupportTypeName).ToList();//total list


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

        //abhi29

        [HttpGet]
        public ActionResult DropDownShowing_Values2(string SupportTypeName)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    
                    List<abhy_physicalmonitoring_dropdown_new> ddetails = new List<abhy_physicalmonitoring_dropdown_new>();
                    ddetails = ABE.obj_abhy_physicalmonitoring_dropdown_new.Where(x => x.sub_support_type == SupportTypeName).ToList();   //total list
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

        // abhi0704

        [HttpGet]
        public ActionResult DropDownShowing_Values3(string SupportTypeName)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                   
                    List<abhy_physicalmonitoring_dropdown_new2> ddetails = new List<abhy_physicalmonitoring_dropdown_new2>();



                    ddetails = ABE.obj_abhy_physicalmonitoring_dropdown_new2.Where(x => x.sub_support_type == SupportTypeName).ToList();//total list


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

        // abhi0704

        [HttpGet]
        public ActionResult DropDownShowing_Values4(string SupportTypeName)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    
                    List<abhy_physicalmonitoring_dropdown_new2> ddetails = new List<abhy_physicalmonitoring_dropdown_new2>();
                    ddetails = ABE.obj_abhy_physicalmonitoring_dropdown_new2.Where(x => x.sub_data == SupportTypeName).ToList();   //total list
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

        // abhi0704

        [HttpGet]
        public ActionResult DropDownShowing_Values5(string SupportTypeName)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    
                    List<abhy_physicalmonitoring_dropdown_new3> ddetails = new List<abhy_physicalmonitoring_dropdown_new3>();



                    ddetails = ABE.obj_abhy_physicalmonitoring_dropdown_new3.Where(x => x.sub_data == SupportTypeName).ToList();//total list


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

        // abhi0704

        [HttpGet]
        public ActionResult DropDownShowing_Values6(string SupportTypeName)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    
                    List<abhy_physicalmonitoring_dropdown_new3> ddetails = new List<abhy_physicalmonitoring_dropdown_new3>();
                    ddetails = ABE.obj_abhy_physicalmonitoring_dropdown_new3.Where(x => x.sub_data_year == SupportTypeName).ToList();   //total list
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

        // abhi1204

        [HttpGet]    //abhi1606
        public JsonResult DropDownShowing_Year(string Datayear, string Datastate, string AwpItemCode)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    
                    //var ddetails = ABE.obj_abhy_mis_awp_form.Where(x => x.awp_fin_year == Datayear && x.state_name == Datastate && x.awp_item_code == AwpItemCode).Select(n => n.awp_physical_year_20_21).FirstOrDefault();

                    var ddetails = ABE.obj_abhy_mis_awp_form.Where(x => x.awp_fin_year == Datayear && x.state_name == Datastate && x.awp_item_code == AwpItemCode).Select(n => n.awp_physical_year_20_21).FirstOrDefault();


                    //var data = (from a in ABE.obj_abhy_physicalmonitoring_dropdown
                    //            join b in ABE.obj_abhy_mis_awp_form on a.item_code equals b.awp_item_code
                    //            where a.support_name == SupportTypeName
                    //            select new
                    //            {
                    //                a.support_description,
                    //                a.item_code,
                    //                b.awp_total

                    //            }).ToList();
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

        // Update All Cumulative
        private void update_cumulative(string data_year, string data_state, string awp_item_code, string sub_support_type, string material_type)
        {
            int i = 1;
            List<abhy_physicalmonitoring_insertdata_view> details = new List<abhy_physicalmonitoring_insertdata_view>();
            //abhy_physicalmonitoring_insertdata_view obj = new abhy_physicalmonitoring_insertdata_view();
            //Object details = new Object();
            if (data_state != "" && data_year != "" && awp_item_code != "")
            {
                if (sub_support_type != null && sub_support_type != "" && sub_support_type != "null" && sub_support_type != "NULL"
                    && material_type != "" && material_type != null && material_type != "null" && material_type != "NULL")
                {
                    details = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == data_state && x.support_year == data_year && x.support_item_code == awp_item_code && x.sub_support_type == sub_support_type && x.material_type == material_type).OrderBy(x => x.month_number).ToList();
                }

                else if (sub_support_type == null || sub_support_type == "" || sub_support_type == "null" || sub_support_type == "NULL")
                {
                    details = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == data_state && x.support_year == data_year && x.support_item_code == awp_item_code).OrderBy(x => x.month_number).ToList();
                }
                else if (awp_item_code != null)
                {
                    details = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == data_state && x.support_year == data_year && x.support_item_code == awp_item_code && x.sub_support_type == sub_support_type).OrderBy(x => x.month_number).ToList();
                }

                decimal total = 0;
                if (awp_item_code != "A4.1.03.04")
                {
                    foreach (var item in details)
                    {
                        var dts = ABE.obj_abhy_physicalmonitoring_insertdata.Where(x => x.id == item.id).FirstOrDefault();
                        if (item.support_item_procured != "" && item.support_item_procured != null)
                        {
                            total += Convert.ToDecimal(item.support_item_procured);
                            dts.support_cumulative_total = Convert.ToString(total);
                            ABE.Entry(dts).State = EntityState.Modified;
                            ABE.SaveChanges();
                        }
                    }
                }
                else
                {
                    foreach (var item in details)
                    {
                        var dts = ABE.obj_abhy_physicalmonitoring_insertdata.Where(x => x.id == item.id).FirstOrDefault();
                        if (item.support_item_procured != "" && item.support_item_procured != null)
                        {
                            total += Convert.ToDecimal(item.support_item_procured);
                            decimal total_avg = total / i;
                            total_avg = Math.Round(total_avg, 2);
                            dts.support_cumulative_total = Convert.ToString(total_avg);
                            ABE.Entry(dts).State = EntityState.Modified;
                            ABE.SaveChanges();
                            i++;
                        }
                    }
                }
            }
        }

        //Check Value is Decimal
        //public bool CheckDecimal(string value)
        //{

        //    try
        //    {
        //        Decimal.Parse(value);
        //        return true;
        //    }
        //    catch
        //    {
        //        return false;
        //    }
        //}
        // abhi0704
        //physical monitoring save
        public Boolean CheckNumIsValid(string Data)
        {
            var pattern = @"^-?[0-9]+(?:\.[0-9]+)?$";
            var regex = new Regex(pattern);
            var validate = regex.IsMatch(Data);
            return validate;
        }

        [HttpPost]
        public ActionResult Save_Physcical_Monitoring_Info(string Data)
        {
            if (Session["UserId"] != null)
            {
                
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<abhy_physicalmonitoring_insertdata>(Data);
                var data_year = result.support_year;
                var data_state = result.state_name;
                var awp_item_code = result.support_item_code;
                var sub_support_type = result.sub_support_type;
                var material_type = result.material_type;
                //var month = result.support_month;
                //int month_num = DateTime.ParseExact(month, "MMMM", CultureInfo.CurrentCulture).Month;
                //string month_name = "";
                abhy_physicalmonitoring_insertdata obj = new abhy_physicalmonitoring_insertdata();
                obj.agency_name = result.agency_name;
                obj.curr_date = DateTime.Today.ToString();
                if (result.state_name != "0" && result.state_name != "" && result.state_name != null)
                {
                    obj.state_name = result.state_name;
                }
                else
                {
                    return Json("Please Select StateName");
                }
                
                var validate = CheckNumIsValid(result.support_item_procured);
                if(validate == false)
                {
                    return Json("Please enter numeric value in monthly achievement");
                }
                List<abhy_physicalmonitoring_insertdata> dtcheck = new List<abhy_physicalmonitoring_insertdata>();
                if (result.material_type != "" && result.material_type != "")
                {
                    dtcheck = ABE.obj_abhy_physicalmonitoring_insertdata.Where(x => x.state_name.ToLower() == result.state_name.ToLower() && x.support_year.ToLower() == result.support_year.ToLower() && x.support_month.ToLower() == result.support_month.ToLower() && x.support_name.ToLower() == result.support_name.ToLower() && x.sub_support_type.ToLower() == result.sub_support_type.ToLower() && x.material_type == result.material_type.ToLower()).ToList();
                }
                else if (result.sub_support_type != null && result.sub_support_type != "")
                {
                    dtcheck = ABE.obj_abhy_physicalmonitoring_insertdata.Where(x => x.state_name.ToLower() == result.state_name.ToLower() && x.support_year.ToLower() == result.support_year.ToLower() && x.support_month.ToLower() == result.support_month.ToLower() && x.support_name.ToLower() == result.support_name.ToLower() && x.sub_support_type.ToLower() == result.sub_support_type.ToLower()).ToList();
                }
                else
                {
                    dtcheck = ABE.obj_abhy_physicalmonitoring_insertdata.Where(x => x.state_name.ToLower() == result.state_name.ToLower() && x.support_year.ToLower() == result.support_year.ToLower() && x.support_month.ToLower() == result.support_month.ToLower() && x.support_name.ToLower() == result.support_name.ToLower()).ToList();
                }

                if (dtcheck.Count > 0)
                {
                    return Json("Data Already Exist.");
                }
                obj.material_type = material_type;
                obj.support_cumulative_total = result.support_cumulative_total;

                obj.support_item_procured = result.support_item_procured;
                obj.support_month = result.support_month;

                if (result.support_name != "0" && result.support_name != "" && result.support_name != null)
                {
                    obj.support_name = result.support_name;
                }
                else
                {
                    return Json("Please Select Name of Support Name");
                }
                obj.support_remark = result.support_remark;
                obj.support_targeted_number = result.support_targeted_number;

                //obj.support_total = result.support_total;
                var SupportTypeName = result.support_type;
                if (result.support_type != "0" && result.support_type != "" && result.support_type != null)
                {
                    obj.support_type = result.support_type;
                    SupportTypeName = result.support_type;
                }
                else
                {
                    return Json("Please Select Name of Support Service");
                }
                // abhi0704


                var ddetails = ABE.obj_abhy_physicalmonitoring_dropdown_new3.Where(x => x.sub_data == result.sub_data).ToList();//total list
                //abhishek
                if (ddetails.Count > 0)
                {
                    obj.support_description = ddetails[0].support_description;

                    obj.support_item_code = ddetails[0].item_code;
                }
                obj.support_estimated_cost = result.support_estimated_cost;
                obj.support_year = result.support_year;
                obj.userid = Convert.ToInt32(Session["UserId"]);
                obj.sub_support_type = result.sub_support_type;
                obj.sub_data = result.sub_data;    //abhi0704
                obj.sub_data_year = result.sub_data_year;    //abhi0704
                obj.support_item_code = result.support_item_code;    //abhi1605
                obj.support_description = result.support_description;   //abhi1605
                obj.support_targeted_number = result.support_targeted_number;    //abhi1605
                obj.latitude = result.latitude;      //abhi1605
                obj.longitude = result.longitude;      //abhi1605
                obj.support_total = result.support_total;     //abhi1605


                ABE.obj_abhy_physicalmonitoring_insertdata.Add(obj);
                int res = ABE.SaveChanges();

                //for(int i = month_num + 1; i >= 12; i++)
                //{
                //    month_name = CultureInfo.CurrentCulture.DateTimeFormat.GetMonthName(month_num);
                //    var support_tot = ABE.obj_abhy_physicalmonitoring_insertdata.Where(x => x.support_year == data_year && x.state_name == data_state && x.support_item_code == awp_item_code && x.support_month == month_name).Select(n => n.support_total).FirstOrDefault();
                //    var cumulative = ABE.obj_abhy_physicalmonitoring_insertdata.Where(x => x.support_year == data_year && x.state_name == data_state && x.support_item_code == awp_item_code && x.support_month == month_name).Select(n => n.support_cumulative_total).FirstOrDefault();

                //    if(cumulative != "")
                //    {

                //    }

                //}

                if (res > 0 && awp_item_code != "A4.1.01")
                {
                    update_cumulative(data_year, data_state, awp_item_code, sub_support_type, material_type);
                }


                return Json("Successfully Saved");


            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }

        public int getLastyear(string Datayear)
        {

            string[] years = Datayear.Split('-');
            string lastyear = years[0];
            int YearPreFix = (Convert.ToInt32(lastyear));
            int YearSufix = (Convert.ToInt32(years[1]) - 1);
            //return $"{YearPreFix}-{YearSufix}";
            return YearPreFix;

        }
        public JsonResult FetchCummulative(string Datayear, string Datastate, string AwpItemCode, string sub_support_type, string material_type)
        {
            if (Session["UserId"] != null)
            {

                int lastyear = getLastyear(Datayear);
                long SumSupportItemProcured = 0;
                try
                {
                    decimal sum_cumulative = 0;
                    if (Datastate != "" && Datayear != "" && AwpItemCode != "")
                    {
                        if (material_type != null && material_type != "" && material_type != "0")
                        {
                            var details1 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == Datastate && x.support_year == Datayear && x.support_item_code == AwpItemCode && x.material_type == material_type).OrderByDescending(x => x.month_number).ToList();

                            var filteredData = ABE.obj_abhy_physicalmonitoring_insertdata_view
                         .Where(x => x.state_name == Datastate && x.fyyear < lastyear && x.support_item_code == AwpItemCode && x.material_type == material_type)
                         .Select(x => new
                         {
                             x.support_item_procured,
                             x.month_number
                         })
                         .ToList();
                            var lastyearcumulative = filteredData
                                .GroupBy(x => x.month_number)
                                .Select(g => new
                                {
                                    MonthNumber = g.Key,
                                    SumSupportItemProcured = g.Sum(x => Convert.ToInt64(x.support_item_procured ?? "0")) // Handle null and convert to long
                                })
                                .OrderByDescending(x => x.MonthNumber)
                                .ToList();


                            if (lastyearcumulative.Count > 0)
                            {
                                SumSupportItemProcured = lastyearcumulative.Sum(x => x.SumSupportItemProcured);

                            }
                            if (details1.Count != 0)
                            {
                                sum_cumulative = (decimal)SumSupportItemProcured;
                                foreach (var item in details1)
                                {
                                    if (item.support_item_procured != null && item.support_item_procured != "")
                                    {
                                        sum_cumulative += Convert.ToDecimal(item.support_item_procured);
                                    }
                                }
                                //sum_cumulative = details1.Sum(x => Convert.ToDecimal(x.support_item_procured));
                            }
                            var details = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == Datastate && x.support_year == Datayear && x.support_item_code == AwpItemCode && x.material_type == material_type).OrderByDescending(x => x.month_number).Select(x => x.support_cumulative_total).FirstOrDefault();
                            return Json(details + "," + details1.Count + "," + sum_cumulative, JsonRequestBehavior.AllowGet);
                        }
                        if (sub_support_type == null || sub_support_type == "" || sub_support_type == "0")
                        {
                            var details1 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == Datastate && x.support_year == Datayear && x.support_item_code == AwpItemCode).OrderByDescending(x => x.month_number).ToList();

                            var filteredData = ABE.obj_abhy_physicalmonitoring_insertdata_view
                          .Where(x => x.state_name == Datastate && x.fyyear<lastyear && x.support_item_code == AwpItemCode)
                          .Select(x => new
                          {
                              x.support_item_procured,
                              x.month_number
                          })
                          .ToList();
                            var lastyearcumulative = filteredData
                                .GroupBy(x => x.month_number)
                                .Select(g => new
                                {
                                    MonthNumber = g.Key,
                                    SumSupportItemProcured = g.Sum(x => Convert.ToInt64(x.support_item_procured ?? "0")) // Handle null and convert to long
                                })
                                .OrderByDescending(x => x.MonthNumber)
                                .ToList();


                            if (lastyearcumulative.Count > 0)
                            {
                                SumSupportItemProcured = lastyearcumulative.Sum(x => x.SumSupportItemProcured);

                            }



                            if (details1.Count != 0)
                            {
                                sum_cumulative = (decimal)SumSupportItemProcured;
                                foreach (var item in details1)
                                {
                                    if (item.support_item_procured != null && item.support_item_procured != "")
                                    {
                                        sum_cumulative += Convert.ToDecimal(item.support_item_procured);
                                    }
                                }
                                //sum_cumulative = details1.Sum(x => Convert.ToDecimal(x.support_item_procured));
                            }
                            var details = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == Datastate && x.support_year == Datayear && x.support_item_code == AwpItemCode).OrderByDescending(x => x.month_number).Select(x => x.support_cumulative_total).FirstOrDefault();
                            return Json(details + "," + details1.Count + "," + sum_cumulative, JsonRequestBehavior.AllowGet);
                        }
                        else if (AwpItemCode != null)
                        {
                            var details1 = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == Datastate && x.support_year == Datayear && x.support_item_code == AwpItemCode && x.sub_support_type == sub_support_type).OrderByDescending(x => x.month_number).ToList();
                            var filteredData = ABE.obj_abhy_physicalmonitoring_insertdata_view
                         .Where(x => x.state_name == Datastate && x.fyyear < lastyear && x.support_item_code == AwpItemCode && x.sub_support_type == sub_support_type)
                         .Select(x => new
                         {
                             x.support_item_procured,
                             x.month_number
                         })
                         .ToList();
                            var lastyearcumulative = filteredData
                                .GroupBy(x => x.month_number)
                                .Select(g => new
                                {
                                    MonthNumber = g.Key,
                                    SumSupportItemProcured = g.Sum(x => Convert.ToInt64(x.support_item_procured ?? "0")) // Handle null and convert to long
                                })
                                .OrderByDescending(x => x.MonthNumber)
                                .ToList();


                            if (lastyearcumulative.Count > 0)
                            {
                                SumSupportItemProcured = lastyearcumulative.Sum(x => x.SumSupportItemProcured);

                            }

                            if (details1.Count != 0)
                            {
                                sum_cumulative = (decimal)SumSupportItemProcured;
                                foreach (var item in details1)
                                {
                                    if (item.support_item_procured != null && item.support_item_procured != "")
                                    {
                                        sum_cumulative += Convert.ToDecimal(item.support_item_procured);
                                    }
                                }
                                //sum_cumulative = details1.Sum(x => Convert.ToDecimal(x.support_item_procured));
                            }
                            var details = ABE.obj_abhy_physicalmonitoring_insertdata_view.Where(x => x.state_name == Datastate && x.support_year == Datayear && x.support_item_code == AwpItemCode && x.sub_support_type == sub_support_type).OrderByDescending(x => x.month_number).Select(x => x.support_cumulative_total).FirstOrDefault();

                            return Json(details + "," + details1.Count + "," + sum_cumulative, JsonRequestBehavior.AllowGet);
                        }
                    }
                    return Json("0", JsonRequestBehavior.AllowGet);
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

        // Update physical monitoring

        //[HttpGet]    //manish
        //public JsonResult FetchCummulative(string Datayear, string Datastate, string AwpItemCode, string month)
        //{
        //    if (Session["UserId"] != null)
        //    {

        //        try
        //        {
        //            if (AwpItemCode == "A4.1.03.04")
        //            {
        //                double total_value = 0;
        //                double count = 0;
        //                int month_num = DateTime.ParseExact(month, "MMMM", CultureInfo.CurrentCulture).Month;
        //                string Month_name = "";
        //                if (month_num == 4)
        //                {
        //                    Month_name = "";
        //                }
        //                else if (month_num == 1)
        //                {
        //                    Month_name = "December";
        //                    month_num = 13;
        //                    string[] years = Datayear.Split('-');
        //                    years[0] = (Convert.ToInt32(years[0]) - 1).ToString();
        //                    years[1] = (Convert.ToInt32(years[1]) - 1).ToString();
        //                    Datayear = years[0] + "-" + years[1];
        //                    for (int i = 0; i < month_num; i--)
        //                    {
        //                        month_num = month_num - 1;
        //                        Month_name = CultureInfo.CurrentCulture.DateTimeFormat.GetMonthName(month_num);
        //                        var ddetails1 = ABE.obj_abhy_physicalmonitoring_insertdata.Where(x => x.support_year == Datayear && x.state_name == Datastate && x.support_item_code == AwpItemCode && x.support_month == Month_name).Select(n => n.support_cumulative_total).ToList();
        //                        if (ddetails1.Count > 0)
        //                        {
        //                            total_value += Convert.ToDouble(ddetails1[0]);
        //                            count++;
        //                        }
        //                        if (month_num == 3)
        //                        {
        //                            Month_name = "April";
        //                            break;
        //                        }
        //                    }
        //                }
        //                else
        //                {
        //                    for (int i = 0; i < month_num; i--)
        //                    {
        //                        month_num = month_num - 1;
        //                        if (month_num == 0)
        //                        {
        //                            month_num = 12;
        //                        }
        //                        Month_name = CultureInfo.CurrentCulture.DateTimeFormat.GetMonthName(month_num);
        //                        var ddetails1 = ABE.obj_abhy_physicalmonitoring_insertdata.Where(x => x.support_year == Datayear && x.state_name == Datastate && x.support_item_code == AwpItemCode && x.support_month == Month_name).Select(n => n.support_cumulative_total).ToList();
        //                        if (ddetails1.Count > 0)
        //                        {

        //                            total_value += Convert.ToDouble(ddetails1[0]);
        //                            count++;
        //                        }
        //                        if (month_num == 3)
        //                        {
        //                            Month_name = "April";
        //                            break;
        //                        }
        //                    }

        //                }
        //                return Json(total_value +","+ count, JsonRequestBehavior.AllowGet);
        //                //var ddetails11 = ABE.obj_abhy_physicalmonitoring_insertdata.Where(x => x.support_year == Datayear && x.state_name == Datastate && x.support_item_code == AwpItemCode && x.support_month == Month_name).Select(n => n.support_cumulative_total).ToList();
        //                //if (ddetails11.Count > 0)
        //                //{
        //                //    var ddetails = ABE.obj_abhy_physicalmonitoring_insertdata.Where(x => x.support_year == Datayear && x.state_name == Datastate && x.support_item_code == AwpItemCode && x.support_month == Month_name).Select(n => n.support_cumulative_total).FirstOrDefault();
        //                //    Convert.ToDouble(ddetails[0]);
        //                //    count++;
        //                //    return Json(ddetails, JsonRequestBehavior.AllowGet);
        //                //}
        //                //else
        //                //{
        //                //    return Json("0", JsonRequestBehavior.AllowGet);
        //                //}
        //                //return Json(ddetails, JsonRequestBehavior.AllowGet);
        //            }
        //            else {

        //                int month_num = DateTime.ParseExact(month, "MMMM", CultureInfo.CurrentCulture).Month;
        //                string Month_name = "";
        //                if (month_num == 4)
        //                {
        //                    Month_name = "";
        //                }
        //                else if (month_num == 1)
        //                {
        //                    Month_name = "December";
        //                    month_num = 13;
        //                    string[] years = Datayear.Split('-');
        //                    years[0] = (Convert.ToInt32(years[0]) - 1).ToString();
        //                    years[1] = (Convert.ToInt32(years[1]) - 1).ToString();
        //                    Datayear = years[0] + "-" + years[1];
        //                    for (int i = 0; i < month_num; i--)
        //                    {
        //                        month_num = month_num - 1;
        //                        Month_name = CultureInfo.CurrentCulture.DateTimeFormat.GetMonthName(month_num);
        //                        var ddetails1 = ABE.obj_abhy_physicalmonitoring_insertdata.Where(x => x.support_year == Datayear && x.state_name == Datastate && x.support_item_code == AwpItemCode && x.support_month == Month_name).Select(n => n.support_cumulative_total).ToList();
        //                        if (ddetails1.Count > 0)
        //                        {
        //                            break;
        //                        }
        //                        if (month_num == 3)
        //                        {
        //                            Month_name = "April";
        //                            break;
        //                        }
        //                    }
        //                }
        //                else
        //                {
        //                    for (int i = 0; i < month_num; i--)
        //                    {
        //                        month_num = month_num - 1;
        //                        if (month_num == 0)
        //                        {
        //                            month_num = 12;
        //                        }
        //                        Month_name = CultureInfo.CurrentCulture.DateTimeFormat.GetMonthName(month_num);
        //                        var ddetails1 = ABE.obj_abhy_physicalmonitoring_insertdata.Where(x => x.support_year == Datayear && x.state_name == Datastate && x.support_item_code == AwpItemCode && x.support_month == Month_name).Select(n => n.support_cumulative_total).ToList();
        //                        if (ddetails1.Count > 0)
        //                        {
        //                            break;
        //                        }
        //                        if (month_num == 3)
        //                        {
        //                            Month_name = "April";
        //                            break;
        //                        }
        //                    }

        //                }

        //                var ddetails11 = ABE.obj_abhy_physicalmonitoring_insertdata.Where(x => x.support_year == Datayear && x.state_name == Datastate && x.support_item_code == AwpItemCode && x.support_month == Month_name).Select(n => n.support_cumulative_total).ToList();
        //                if (ddetails11.Count > 0)
        //                {
        //                    var ddetails = ABE.obj_abhy_physicalmonitoring_insertdata.Where(x => x.support_year == Datayear && x.state_name == Datastate && x.support_item_code == AwpItemCode && x.support_month == Month_name).Select(n => n.support_cumulative_total).FirstOrDefault();
        //                    return Json(ddetails, JsonRequestBehavior.AllowGet);
        //                }
        //                else
        //                {
        //                    return Json("0", JsonRequestBehavior.AllowGet);
        //                }
        //                //return Json(ddetails, JsonRequestBehavior.AllowGet);
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

        [HttpPost]
        public ActionResult Update_Physcical_Monitoring_Info(string Data)
        {
            if (Session["UserId"] != null)
            {
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<abhy_physicalmonitoring_insertdata>(Data);
                var data_year = result.support_year;
                var data_state = result.state_name;
                var awp_item_code = result.support_item_code;
                var sub_support_type = result.sub_support_type;
                var material_type = result.material_type;
                var Details = ABE.obj_abhy_physicalmonitoring_insertdata.Where(x => x.id == result.id).SingleOrDefault();

                abhy_physicalmonitoring_insertdata obj = new abhy_physicalmonitoring_insertdata();
                Details.state_name = result.state_name;
                Details.support_cumulative_total = result.support_cumulative_total;
                Details.support_description = result.support_description;
                Details.support_estimated_cost = result.support_estimated_cost;
                Details.support_item_code = result.support_item_code;
                Details.support_item_procured = result.support_item_procured;

                Details.support_name = result.support_name;
                Details.support_remark = result.support_remark;
                Details.support_targeted_number = result.support_targeted_number;
                Details.support_total = result.support_total;
                Details.support_month = result.support_month;
                Details.support_year = result.support_year;

                ABE.Entry(Details).State = EntityState.Modified;
                //  ABE.obj_abhy_physicalmonitoring_insertdata.Add(obj);
                int res = ABE.SaveChanges();

                //if (res > 0 && awp_item_code != "A4.1.01")
                //{
                //    update_cumulative(data_year, data_state, awp_item_code, sub_support_type, material_type);
                //}


                return Json("Updated Successfully");


            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult Delete_Physcical_Monitoring_Info(string Data)
        {
            if (Session["UserId"] != null)
            {
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<abhy_physicalmonitoring_insertdata>(Data);
                var Details = ABE.obj_abhy_physicalmonitoring_insertdata.Where(x => x.id == result.id).SingleOrDefault();

                abhy_physicalmonitoring_insertdata obj = new abhy_physicalmonitoring_insertdata();
                var data_year = Details.support_year;
                var data_state = Details.state_name;
                var awp_item_code = Details.support_item_code;
                var sub_support_type = Details.sub_support_type;
                var material_type = Details.material_type;
                Details.support_cumulative_total = result.support_cumulative_total;
                Details.support_description = result.support_description;
                Details.support_estimated_cost = result.support_estimated_cost;
                Details.support_item_code = result.support_item_code;
                Details.support_item_procured = result.support_item_procured;

                Details.support_name = result.support_name;
                Details.support_remark = result.support_remark;
                Details.support_targeted_number = result.support_targeted_number;
                Details.support_total = result.support_total;


                ABE.Entry(Details).State = EntityState.Deleted;
                //  ABE.obj_abhy_physicalmonitoring_insertdata.Add(obj);
                int res = ABE.SaveChanges();
                if (res > 0 && awp_item_code != "A4.1.01")
                {
                    update_cumulative(data_year, data_state, awp_item_code, sub_support_type, material_type);
                }
                return Json("Deleted Successfully");


            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }


        //report physical monitoring
        [HttpGet]
        public ActionResult physical_monitoring_report_Info(string StateName,string Month,string Year)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_physicalmonitoring_insertdata_view> ddetails = new List<abhy_physicalmonitoring_insertdata_view>();
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = StateName;

                    if (State != "" && State != null && State != "0")
                    {
                        if (State == "ALL")
                        {
                            //ddetails = ABE.obj_abhy_physicalmonitoring_insertdata.OrderBy(x => x.state_name == StateName).ToList();//total list
                            ddetails = ABE.obj_abhy_physicalmonitoring_insertdata_view.OrderBy(n => n.state_name).ThenBy(n => n.support_item_code).ThenBy(n => n.fyyear).ThenBy(n => n.month_number).ToList();//total list                            

                        }
                        else if (Year == null || Month == null ||Year != "All")
                        {
                            //ddetails = ABE.obj_abhy_physicalmonitoring_insertdata.OrderBy(x => x.state_name == StateName).ToList();//total list
                            ddetails = ABE.obj_abhy_physicalmonitoring_insertdata_view.OrderBy(n => n.state_name).ThenBy(n => n.support_item_code).ThenBy(n => n.fyyear).ThenBy(n => n.month_number).Where(x => x.state_name == StateName).ToList();//total list                            

                        }
                        else if (Year != null )
                        {
                            //ddetails = ABE.obj_abhy_physicalmonitoring_insertdata.OrderBy(x => x.state_name == StateName).ToList();//total list
                            ddetails = ABE.obj_abhy_physicalmonitoring_insertdata_view.OrderBy(n => n.state_name).ThenBy(n => n.support_item_code).ThenBy(n => n.fyyear).ThenBy(n => n.month_number).Where(x => x.state_name == StateName && x.support_year == Year).ToList();//total list                            

                        }
                        else
                        {
                            ddetails = ABE.obj_abhy_physicalmonitoring_insertdata_view.OrderBy(n => n.state_name).ThenBy(n => n.support_item_code).ThenBy(n => n.fyyear).ThenBy(n => n.month_number).Where(x => x.state_name == StateName && x.support_year == Year && x.support_month == Month).ToList();//total list                                                                                                                                                                                                                            //ddetails = ABE.obj_abhy_physicalmonitoring_insertdata_view.OrderBy(x => x.state_name == StateName).ThenBy(n => n.support_item_code).ThenBy(n => n.support_month).ThenBy(n => n.fyyear).Where(x => x.state_name == StateName).ToList();//total list

                        }

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
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);

            }
        }


        //procurement milestone dropdown
        [HttpGet]
        public ActionResult WorkActivity_Proc_Form_Dropdown_Info(string WorkActivity)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_procurement_milestone_dropdown> ddetails = ABE.obj_abhy_procurement_milestone_dropdown.Where(x => x.activity_name == WorkActivity).ToList();//total list

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

        //procurement save  

        [HttpPost]
        public ActionResult Save_Proc_Form_Info(string Data)
        {
            if (Session["UserId"] != null)
            {
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<abhy_procurement_milestone_insertdata>(Data);

                abhy_procurement_milestone_insertdata obj = new abhy_procurement_milestone_insertdata();
                List<abhy_procurement_milestone_dropdown> ddetails = ABE.obj_abhy_procurement_milestone_dropdown.Where(x => x.activity_name == result.activity_name).ToList();//total list
                // string UID = randomCodeGeneration2();
                obj.userid = Convert.ToInt32(Session["UserId"]);
                obj.component_id = ddetails[0].component_id;
                obj.sub_component_id = ddetails[0].sub_component_id;
                obj.activity_id = ddetails[0].activity_id;
                obj.item_code = ddetails[0].item_code;
                if (result.activity_name != "0" && result.activity_name != "" && result.activity_name != null)
                {
                    obj.activity_name = result.activity_name;
                }
                else
                {
                    return Json("Please Select Work Activity");
                }
                obj.nomination_ref_no = result.nomination_ref_no;
                obj.nomination_rec_date = result.nomination_rec_date;
                obj.accepted_nomination_amt = result.accepted_nomination_amt;
                obj.producrment_selection = result.producrment_selection;
                obj.category_of_procurement = result.category_of_procurement;
                obj.estimated_cost = result.estimated_cost;
                obj.rfp_date = result.rfp_date;
                obj.rfp_date_other = result.rfp_date_other;
                obj.tender_no = result.tender_no;
                obj.bid_date = result.bid_date;
                obj.bid_evalution_date = result.bid_evalution_date;
                obj.award_date = result.award_date;
                //  obj.completion_date = result.completion_date;
                //  obj.physical_awp = result.physical_awp;
                obj.agency_name = result.agency_name;
                if (result.state_name != "0" && result.state_name != "" && result.state_name != null)
                {
                    obj.state_name = result.state_name;
                }
                else
                {
                    return Json("Please Select StateName");
                }


                //new columns
                obj.description_service = result.description_service;
                obj.email_office = result.email_office;
                obj.tender_id = result.tender_id;
                obj.noof_envelopes = result.noof_envelopes;
                obj.bid_open_date = result.bid_open_date;
                obj.website_url = result.website_url;
                obj.filename = result.filename;
                obj.filepath = result.filepath;
                obj.deadline_date = result.deadline_date;
                obj.valid_bids = result.valid_bids;
                obj.evaluation_report_date = result.evaluation_report_date;
                obj.final_evaluation_report_date = result.final_evaluation_report_date;
                obj.contract_award_date = result.contract_award_date;
                obj.tender_amt = result.tender_amt;
                obj.name_of_consultant = result.name_of_consultant;
                obj.aggreement_sign_date = result.aggreement_sign_date;
                obj.stipulated_date = result.stipulated_date;
                obj.extension_number = result.extension_number;
                obj.latest_ext_date = result.latest_ext_date;
                obj.contract_price = result.contract_price;
                obj.expenditure_contract = result.expenditure_contract;
                obj.terminated_date = result.terminated_date;
                obj.proc_remarks = result.proc_remarks;
                obj.workactivity_other = result.workactivity_other;
                if (result.district_agency == null)
                {
                    obj.district_agency = "";
                }
                else
                {
                    obj.district_agency = result.district_agency;
                }

                obj.bids_received = result.bids_received;
                ABE.obj_abhy_procurement_milestone_insertdata.Add(obj);
                ABE.SaveChanges();
                return Json("Successfully Saved");


            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }


        //Akash
        [HttpPost]
        public ActionResult Save_incentive_fund(string Data)
        {
            if (Session["UserId"] != null)
            {
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<incentive_fund_utilization>(Data);

                incentive_fund_utilization obj = new incentive_fund_utilization();

                obj.state_name = result.state_name;
                obj.work_sel = result.work_sel;
                obj.Component_Id = result.Component_Id;
                obj.Component_Budget_Head_EAP = result.Component_Budget_Head_EAP;
                obj.Expenditure_Code = result.Expenditure_Code;
                obj.proc_sel = result.proc_sel;
                obj.Category_of_Procurement = result.Category_of_Procurement;
                obj.ofd_sel = result.ofd_sel;
                obj.Name_of_Consultant = result.Name_of_Consultant;
                obj.Contract_Price = result.Contract_Price;
                obj.Date_of_singning = result.Date_of_singning;
                obj.Date_of_Completion = result.Date_of_Completion;
                obj.contact_ref_id = result.contact_ref_id;
                if (result.Total_Payment == "")
                {
                    obj.Total_Payment = "0";
                }
                else
                {
                    obj.Total_Payment = result.Total_Payment;
                }
                obj.Complaints = result.Complaints;
                obj.Remarks = result.Remarks;
                obj.entry_time = DateTime.Now.ToString();


                ABE.obj_incentive_fund_utilization.Add(obj);
                ABE.SaveChanges();
                return Json("Successfully Saved");


            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult Incentive_data(string state_name, string Service)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    List<incentive_fund_utilization> ddetails = new List<incentive_fund_utilization>();
                    var State = state_name.ToString();

                    if (State != "0" && State != "" && State != null && State != "All" && Service != "0" && Service != "" && Service != null)
                    {
                        ddetails = ABE.obj_incentive_fund_utilization.Where(x => x.state_name == State && x.Category_of_Procurement == Service).OrderByDescending(x => x.id).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && State != "All")
                    {
                        ddetails = ABE.obj_incentive_fund_utilization.Where(x => x.state_name == State).OrderByDescending(x => x.id).ToList();

                    }

                    else if (State == "All" && Service != "0" && Service != "" && Service != null)
                    {
                        ddetails = ABE.obj_incentive_fund_utilization.Where(x => x.Category_of_Procurement == Service).OrderByDescending(x => x.id).ToList();

                    }
                    else if (State == "All")
                    {
                        ddetails = ABE.obj_incentive_fund_utilization.OrderByDescending(x => x.id).ToList();

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
                    var result = js.Deserialize<incentive_fund_utilization>(Data);

                    if (result.id != 0)
                    {
                        var TKID = Convert.ToInt32(result.id);
                        var Data1 = ABE.obj_incentive_fund_utilization.Where(x => x.id == TKID).SingleOrDefault();
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
        public ActionResult Update_Proc_Form_Info(string Data)
        {
            try
            {
                if (Session["UserId"] != null)
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_procurement_milestone_insertdata>(Data);

                    abhy_procurement_milestone_insertdata obj = new abhy_procurement_milestone_insertdata();
                    // string UID = randomCodeGeneration2();
                    var Id = result.id;
                    var Details = ABE.obj_abhy_procurement_milestone_insertdata.Where(x => x.id == Id).SingleOrDefault();

                    Details.userid = Convert.ToInt32(Session["UserId"]);
                    Details.component_id = result.component_id;
                    Details.sub_component_id = result.sub_component_id;
                    Details.activity_id = result.activity_id;
                    Details.item_code = result.item_code;
                    Details.activity_name = result.activity_name;
                    Details.producrment_selection = result.producrment_selection;
                    Details.category_of_procurement = result.category_of_procurement;
                    Details.estimated_cost = result.estimated_cost;
                    Details.rfp_date = result.rfp_date;
                    Details.rfp_date_other = result.rfp_date_other;
                    Details.tender_no = result.tender_no;
                    Details.bid_date = result.bid_date;
                    Details.bid_evalution_date = result.bid_evalution_date;
                    Details.award_date = result.award_date;
                    // Details.completion_date = result.completion_date;
                    //  Details.physical_awp = result.physical_awp;
                    Details.agency_name = result.agency_name;
                    Details.state_name = result.state_name;

                    //new columns
                    Details.description_service = result.description_service;
                    Details.email_office = result.email_office;
                    Details.tender_id = result.tender_id;
                    Details.noof_envelopes = result.noof_envelopes;
                    Details.bid_open_date = result.bid_open_date;
                    Details.website_url = result.website_url;
                    //Details.filename = result.filename;
                    //Details.filepath = result.filepath;
                    Details.deadline_date = result.deadline_date;
                    Details.valid_bids = result.valid_bids;
                    Details.evaluation_report_date = result.evaluation_report_date;
                    Details.final_evaluation_report_date = result.final_evaluation_report_date;
                    Details.contract_award_date = result.contract_award_date;
                    Details.tender_amt = result.tender_amt;
                    Details.name_of_consultant = result.name_of_consultant;
                    Details.aggreement_sign_date = result.aggreement_sign_date;
                    Details.stipulated_date = result.stipulated_date;
                    Details.extension_number = result.extension_number;
                    Details.latest_ext_date = result.latest_ext_date;
                    Details.contract_price = result.contract_price;
                    Details.expenditure_contract = result.expenditure_contract;
                    Details.terminated_date = result.terminated_date;
                    Details.proc_remarks = result.proc_remarks;
                    Details.workactivity_other = result.workactivity_other;
                    Details.nomination_ref_no = result.nomination_ref_no;
                    Details.nomination_rec_date = result.nomination_rec_date;
                    Details.accepted_nomination_amt = result.accepted_nomination_amt;
                    if (result.district_agency == null)
                    {
                        Details.district_agency = "";
                    }
                    else
                    {
                        Details.district_agency = result.district_agency;
                    }
                    Details.bids_received = result.bids_received;
                    ABE.Entry(Details).State = EntityState.Modified;
                    ABE.SaveChanges();
                    return Json("Updated Successfully");


                }
                else
                {
                    return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception ex)
            {
                return Json("Error", JsonRequestBehavior.AllowGet);
            }
        }

        //procurement type download
        [HttpGet]
        public ActionResult Proc_Activity_Info()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_procurement_milestone_type_download> ddetails = new List<abhy_procurement_milestone_type_download>();
                    ddetails = ABE.obj_abhy_procurement_milestone_type_download.ToList();//total list
                    //var userid = Convert.ToInt32(Session["UserId"]);
                    //var State = "";
                    //if (Session["gstate"] != null)
                    //{
                    //    State = Session["gstate"].ToString();
                    //}

                    //if (State != "" && State != null)
                    //{
                    //    ddetails = ABE.obj_abhy_procurement_milestone_type_download.ToList();//total list

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
        //[HttpGet]
        //public ActionResult Proc_Activity_Info_state(string state)
        //{
        //    if (Session["UserId"] != null)
        //    {
        //        var userid = Session["Officer"].ToString();
        //        try
        //        {
        //            List<abhy_procurement_milestone_type_download> ddetails = new List<abhy_procurement_milestone_type_download>();
        //            if (userid == "Admin")
        //            {
        //                ddetails = ABE.obj_abhy_procurement_milestone_type_download.ToList();//total list
        //            }

        //            return Json(ddetails, JsonRequestBehavior.AllowGet);
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

        [HttpGet]
        public ActionResult Proc_DropDown_Info()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_procurement_milestone_dropdown> ddetails = new List<abhy_procurement_milestone_dropdown>();
                    var userid = Convert.ToInt32(Session["UserId"]);

                    ddetails = ABE.obj_abhy_procurement_milestone_dropdown.ToList();//total list


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

        //procruement milestone Edit and Delete Functionality
        [HttpPost]
        public ActionResult Update_Procurement_Milestone_Info(string Data)
        {
            if (Session["UserId"] != null)
            {
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<abhy_procurement_milestone_insertdata>(Data);
                var Details = ABE.obj_abhy_procurement_milestone_insertdata.Where(x => x.id == result.id).SingleOrDefault();

                abhy_procurement_milestone_insertdata obj = new abhy_procurement_milestone_insertdata();
                Details.district_agency = result.district_agency;
                Details.state_name = result.state_name;
                Details.agency_name = result.agency_name;
                Details.activity_name = result.activity_name;
                Details.component_id = result.component_id;
                Details.sub_component_id = result.sub_component_id;
                Details.activity_id = result.activity_id;
                Details.item_code = result.item_code;
                Details.producrment_selection = result.producrment_selection;
                Details.category_of_procurement = result.category_of_procurement;
                Details.description_service = result.description_service;
                Details.rfp_date = result.rfp_date;
                Details.email_office = result.email_office;
                Details.tender_no = result.tender_no;
                Details.estimated_cost = result.estimated_cost;
                Details.bid_date = result.bid_date;
                Details.tender_id = result.tender_id;
                Details.bid_evalution_date = result.bid_evalution_date;
                Details.award_date = result.award_date;
                Details.completion_date = result.completion_date;
                Details.noof_envelopes = result.noof_envelopes;
                Details.deadline_date = result.deadline_date;
                Details.bid_open_date = result.bid_open_date;
                Details.website_url = result.website_url;
               // Details.filename = result.filename;
                Details.valid_bids = result.valid_bids;
                Details.contract_award_date = result.contract_award_date;
                Details.tender_amt = result.tender_amt;
                Details.name_of_consultant = result.name_of_consultant;
                Details.aggreement_sign_date = result.aggreement_sign_date;
                Details.stipulated_date = result.stipulated_date;
                Details.extension_number = result.extension_number;
                Details.latest_ext_date = result.latest_ext_date;
                Details.contract_price = result.contract_price;
                Details.expenditure_contract = result.expenditure_contract;
                Details.terminated_date = result.terminated_date;
                Details.proc_remarks = result.proc_remarks;
                Details.evaluation_report_date = result.evaluation_report_date;
                Details.final_evaluation_report_date = result.final_evaluation_report_date;

                Details.bids_received = result.bids_received;
                ABE.Entry(Details).State = EntityState.Modified;
                //  ABE.obj_abhy_physicalmonitoring_insertdata.Add(obj);
                ABE.SaveChanges();
                return Json("Updated Successfully");


            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult Procument_Url_Info(string Data)
        {
            if (Session["UserId"] != null)
            {
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<abhy_procurement_milestone_insertdata>(Data);
                var Details = ABE.obj_abhy_procurement_milestone_insertdata.Where(x => x.id == result.id).SingleOrDefault();
                TempData["PID"] = result.id;
            }
            return RedirectToAction("Procurement_milestone", "mis_new");
        }
        [HttpPost]
        public ActionResult Delete_Procurement_Milestone_Info(string Data)
        {
            if (Session["UserId"] != null)
            {
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<abhy_procurement_milestone_insertdata>(Data);
                var Details = ABE.obj_abhy_procurement_milestone_insertdata.Where(x => x.id == result.id).SingleOrDefault();

                abhy_procurement_milestone_insertdata obj = new abhy_procurement_milestone_insertdata();

                Details.agency_name = result.agency_name;
                Details.activity_name = result.activity_name;
                Details.component_id = result.component_id;
                Details.sub_component_id = result.sub_component_id;
                Details.activity_id = result.activity_id;
                Details.item_code = result.item_code;
                Details.producrment_selection = result.producrment_selection;
                Details.category_of_procurement = result.category_of_procurement;
                Details.description_service = result.description_service;
                Details.rfp_date = result.rfp_date;
                Details.email_office = result.email_office;
                Details.tender_no = result.tender_no;
                Details.estimated_cost = result.estimated_cost;
                Details.bid_date = result.bid_date;
                Details.tender_id = result.tender_id;
                Details.bid_evalution_date = result.bid_evalution_date;
                Details.award_date = result.award_date;
                Details.completion_date = result.completion_date;
                Details.noof_envelopes = result.noof_envelopes;
                Details.deadline_date = result.deadline_date;
                Details.bid_open_date = result.bid_open_date;
                Details.website_url = result.website_url;
                Details.filename = result.filename;
                Details.valid_bids = result.valid_bids;
                Details.contract_award_date = result.contract_award_date;
                Details.tender_amt = result.tender_amt;
                Details.name_of_consultant = result.name_of_consultant;
                Details.aggreement_sign_date = result.aggreement_sign_date;
                Details.stipulated_date = result.stipulated_date;
                Details.extension_number = result.extension_number;
                Details.latest_ext_date = result.latest_ext_date;
                Details.contract_price = result.contract_price;
                Details.expenditure_contract = result.expenditure_contract;
                Details.terminated_date = result.terminated_date;
                Details.proc_remarks = result.proc_remarks;


                ABE.Entry(Details).State = EntityState.Deleted;
                //  ABE.obj_abhy_physicalmonitoring_insertdata.Add(obj);
                ABE.SaveChanges();
                return Json("Deleted Successfully");


            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }

        //procurement milestone getting data
        [HttpGet]
        public ActionResult Proc_report_getdetails_Info_homepage(string StateName , string category)
        {
           
                try
                {
                    List<abhy_procurement_milestone_insertdata> ddetails = new List<abhy_procurement_milestone_insertdata>();
                    

                    if (StateName == "0")
                    {
                    if (category=="0") {
                        ddetails = ABE.obj_abhy_procurement_milestone_insertdata.OrderBy(x => x.state_name).ToList();//total list
                    }
                    else
                    {
                        ddetails = ABE.obj_abhy_procurement_milestone_insertdata.Where(x => x.category_of_procurement == category).OrderBy(x => x.state_name).ToList();//total list
                    }
                    }
                    else
                    {
                    if (category == "0")
                    {
                        ddetails = ABE.obj_abhy_procurement_milestone_insertdata.Where(x => x.state_name == StateName).OrderBy(x => x.state_name).ToList();//total list
                    }
                    else
                    {
                        ddetails = ABE.obj_abhy_procurement_milestone_insertdata.Where(x => x.state_name == StateName && x.category_of_procurement == category).OrderBy(x => x.state_name).ToList();//total list
                    }
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

        [HttpGet]
        public ActionResult Incentive_data_home(string StateName, string category)
        {

            try
            {
                List<incentive_fund_utilization> ddetails = new List<incentive_fund_utilization>();


                if (StateName == "0")
                {
                    if (category == "0")
                    {
                        ddetails = ABE.obj_incentive_fund_utilization.OrderBy(x => x.state_name).ToList();//total list
                    }
                    else
                    {
                        ddetails = ABE.obj_incentive_fund_utilization.Where(x => x.Category_of_Procurement == category).OrderBy(x => x.state_name).ToList();//total list
                    }
                }
                else
                {
                    if (category == "0")
                    {
                        ddetails = ABE.obj_incentive_fund_utilization.Where(x => x.state_name == StateName).OrderBy(x => x.state_name).ToList();//total list
                    }
                    else
                    {
                        ddetails = ABE.obj_incentive_fund_utilization.Where(x => x.state_name == StateName && x.Category_of_Procurement == category).OrderBy(x => x.state_name).ToList();//total list
                    }



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


        [HttpGet]
        public ActionResult Proc_report_getdetails_Info(string StateName)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_procurement_milestone_insertdata> ddetails = new List<abhy_procurement_milestone_insertdata>();
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = "";
                    if (Session["gstate"] != null)
                    {
                        State = Session["gstate"].ToString();
                    }

                    if (StateName == "ALL")
                    {
                        ddetails = ABE.obj_abhy_procurement_milestone_insertdata.OrderBy(x => x.state_name == StateName).OrderByDescending(x=>x.id).ToList();//total list

                    }
                    else
                    {
                        ddetails = ABE.obj_abhy_procurement_milestone_insertdata.Where(x => x.state_name == StateName).OrderBy(x => x.state_name == StateName).OrderByDescending(x => x.id).ToList();//total list

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

        [HttpGet]
        public ActionResult Proc_View_getdetails_Info(string id)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_procurement_milestone_insertdata> ddetails = new List<abhy_procurement_milestone_insertdata>();
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var Id = Convert.ToInt32(id);

                    ddetails = ABE.obj_abhy_procurement_milestone_insertdata.Where(x => x.id == Id).ToList();//total list




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
        public ActionResult Update_AWP_B__Form_Info(string Data)
        {
            if (Session["UserId"] != null)
            {
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<abhy_mis_awp_b_form>(Data);

                abhy_mis_awp_b_form obj = new abhy_mis_awp_b_form();
                var Details = ABE.obj_abhy_mis_awp_b_form.Where(x => x.id == result.id).SingleOrDefault();

                Details.state_name = result.state_name;

                Details.awp_uid = result.awp_uid;

                Details.awpcomponent = result.awpcomponent;

                Details.awp_estimated_cost_for_five_years = result.awp_estimated_cost_for_five_years;

                Details.awp_workactivity = result.awp_workactivity;
                Details.awp_item_code = result.awp_item_code;
                Details.awp_total = result.awp_total;
                Details.awp_physical_year_20_21 = result.awp_physical_year_20_21;
                Details.awp_financial_year_20_21 = result.awp_financial_year_20_21;

                Details.awp_activity_id = result.awp_activity_id;

                ABE.Entry(Details).State = EntityState.Modified;
                ABE.SaveChanges();
                return Json("Updated Successfully");


            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }


        [HttpPost]
        public ActionResult Delete_AWP_B_Form_Info(string Data)
        {
            if (Session["UserId"] != null)
            {
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<abhy_mis_awp_b_form>(Data);

                abhy_mis_awp_b_form obj = new abhy_mis_awp_b_form();
                var Details = ABE.obj_abhy_mis_awp_b_form.Where(x => x.id == result.id).SingleOrDefault();


                ABE.Entry(Details).State = EntityState.Deleted;
                ABE.SaveChanges();
                return Json("Deleted Successfully");


            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult Update_AWP_Form_Info(string Data)
        {
            if (Session["UserId"] != null)
            {
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<abhy_mis_awp_form>(Data);

                var Details = ABE.obj_abhy_mis_awp_form.Where(x => x.id == result.id).SingleOrDefault();


                abhy_mis_awp_form obj = new abhy_mis_awp_form();
                Details.awp_uid = result.awp_uid;

                Details.awpcomponent = result.awpcomponent;
                Details.state_name = result.state_name;
                Details.awp_estimated_cost_for_five_years = result.awp_estimated_cost_for_five_years;

                Details.awp_workactivity = result.awp_workactivity;
                Details.awp_item_code = result.awp_item_code;
                Details.awp_total = result.awp_total;
                Details.awp_physical_year_20_21 = result.awp_physical_year_20_21;
                Details.awp_financial_year_20_21 = result.awp_financial_year_20_21;
                Details.awp_category = result.awp_category;
                Details.awp_activity_id = result.awp_activity_id;

                ABE.Entry(Details).State = EntityState.Modified;
                ABE.SaveChanges();
                return Json("Updated Successfully");


            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult Delete_AWP_Form_Info(string Data)
        {
            if (Session["UserId"] != null)
            {
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<abhy_mis_awp_form>(Data);

                var Details = ABE.obj_abhy_mis_awp_form.Where(x => x.id == result.id).SingleOrDefault();




                ABE.Entry(Details).State = EntityState.Deleted;
                ABE.SaveChanges();
                return Json("Deleted Successfully");


            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }


        public ActionResult Fund_release_Monitoring()
        {
            return View();
        }
        public ActionResult Fund_release_Monitoring_report()
        {
            return View();
        }

        [HttpGet]
        public ActionResult Grant_In_Aid() //chetan
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_fund_release_monitoring_dd> ddetails = ABE.obj_abhy_fund_release_monitoring_dd.ToList();//total list

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
        public ActionResult Save_Fund_Release_Form_Info(string Data)
        {
            if (Session["UserId"] != null)
            {
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<abhy_phymon_fund_release>(Data);

                abhy_phymon_fund_release obj = new abhy_phymon_fund_release();
                // string UID = randomCodeGeneration2();
                obj.userid = Convert.ToInt32(Session["UserId"]);
                obj.fund_date = DateTime.Today.ToString();

                double fund_grant_aid_a_total1 = 0;

                if (result.fund_grant_aid_general_a != null && result.fund_grant_aid_general_a != "")
                {
                    fund_grant_aid_a_total1 += double.Parse(result.fund_grant_aid_general_a);
                }
                if (result.fund_grant_aid_capital_a != null && result.fund_grant_aid_capital_a != "")
                {
                    fund_grant_aid_a_total1 += double.Parse(result.fund_grant_aid_capital_a);
                }

                double fund_grant_aid_capital_b_total1 = 0;

                if (result.fund_general_aid_b_value != null && result.fund_general_aid_b_value != "")
                {
                    fund_grant_aid_capital_b_total1 += double.Parse(result.fund_general_aid_b_value);
                }
                if (result.fund_capital_aid_b_value != null && result.fund_capital_aid_b_value != "")
                {
                    fund_grant_aid_capital_b_total1 += double.Parse(result.fund_capital_aid_b_value);
                }
                if (result.state_name != "0" && result.state_name != "" && result.state_name != null)
                {

                    obj.state_name = result.state_name;
                }
                else
                {
                    return Json("Please Select StateName");
                }

                if (result.id > 0)
                {
                    var data1 = ABE.obj_abhy_phymon_fund_release.Where(x => x.id == result.id).ToList();
                    if (data1.Count > 0)
                    {
                        //var data11 = data1.SingleOrDefault();
                        foreach (var item in data1)
                        {
                            ABE.Entry(item).State = EntityState.Deleted;
                            ABE.SaveChanges();
                        }
                    }
                }

                obj.agency_name = result.agency_name;
                obj.fund_total_allocated = result.fund_total_allocated;
                obj.fund_year = result.fund_year;
                obj.fund_tranche_no = result.fund_tranche_no;
                obj.fund_file_no = result.fund_file_no;
                obj.fund_sanction_date = result.fund_sanction_date;
                obj.fund_certificate_submited = result.fund_certificate_submited;
                obj.fund_certificate_submited_date = result.fund_certificate_submited_date;
                obj.fund_grant_aid_general_a = result.fund_grant_aid_general_a;
                obj.fund_grant_aid_capital_a = result.fund_grant_aid_capital_a;
                obj.fund_grant_aid_a_total = result.fund_grant_aid_a_total;
                obj.fund_grant_aid_general_b = result.fund_grant_aid_general_b;
                obj.fund_general_aid_b_value = result.fund_general_aid_b_value;
                obj.fund_grant_aid_capital_b = result.fund_grant_aid_capital_b;
                obj.fund_capital_aid_b_value = result.fund_capital_aid_b_value;
                obj.fund_grant_aid_capital_b_total = result.fund_grant_aid_capital_b_total;
                obj.fund_cumalative_amt = result.fund_cumalative_amt;
                obj.fund_total_sum_a_b = result.fund_total_sum_a_b;
                obj.fund_timeline = result.fund_timeline;
                obj.grant_in_aid_dli_general_a = result.grant_in_aid_dli_general_a;
                obj.grant_in_aid_general_a = result.grant_in_aid_general_a;
                ABE.obj_abhy_phymon_fund_release.Add(obj);
                ABE.SaveChanges();
                return Json("Successfully Saved");
            }


            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpGet]
        public ActionResult Edit_get_fund(string id)
        {

            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_phymon_fund_release> ddetails = new List<abhy_phymon_fund_release>();
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var Id = Convert.ToInt32(id);

                    ddetails = ABE.obj_abhy_phymon_fund_release.Where(x => x.id == Id).ToList();

                    return Json(ddetails, JsonRequestBehavior.AllowGet);
                }
                catch (Exception Ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("LogOut", JsonRequestBehavior.AllowGet);
            }

        }

        [HttpGet]
        public ActionResult Get_Fund_Form_Info(string StateName, string Year)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_phymon_fund_release> ddetails = new List<abhy_phymon_fund_release>();
                    if (StateName == "ALL")
                    {
                        if (Year == "0" || Year == "ALL")
                        {
                            ddetails = ABE.obj_abhy_phymon_fund_release.OrderBy(x => x.state_name).ToList();//total list

                        }

                        else
                        {
                            ddetails = ABE.obj_abhy_phymon_fund_release.Where(x => x.fund_year == Year).OrderBy(x => x.state_name).ToList();
                        }


                        return Json(ddetails, JsonRequestBehavior.AllowGet);
                    }
                    else
                    {
                        if (Year == "0" || Year == "ALL")
                        {
                            ddetails = ABE.obj_abhy_phymon_fund_release.OrderBy(x => x.state_name).Where(x => x.state_name == StateName).ToList();//total list

                        }
                        else
                        {
                            ddetails = ABE.obj_abhy_phymon_fund_release.OrderBy(x => x.state_name).Where(x => x.state_name == StateName && x.fund_year == Year).ToList();//total list
                        }


                        return Json(ddetails, JsonRequestBehavior.AllowGet);
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

        public ActionResult Upload_proc_milestone_image()
        {
            if (Session["UserId"] != null)
            {

                var Obj = new abhy_procurement_milestone_insertdata();

                string State_name = Request["State"];

                //string Dist = Request["Dist"];
                //string Block = Request["Block"];
                //string Gram = Request["Gram"];
                var Details = ABE.obj_abhy_procurement_milestone_insertdata.Where(x => x.state_name == State_name).ToList();


                var Full_Path = "";
                var Full_File_Names = "";

                if (Details[0].filename != null)
                {
                    Full_File_Names = Details[0].filename;
                }
                if (Details[0].filepath != null)
                {
                    Full_Path = Details[0].filepath;
                }

                HttpFileCollectionBase files = Request.Files;
                var obj = new abhy_procurement_milestone_insertdata();
                string Paths = "";
                string File_Names = "";
                if (files.Count == 0)
                {
                    return Json("Please Upload Files", JsonRequestBehavior.AllowGet);
                }
                else
                {
                    var Data1 = Details.LastOrDefault();

                    for (int i = 0; i < files.Count; i++)
                    {

                        HttpPostedFileBase file = files[i];
                        Malicious_File_Upload_Restriction obj_Validate = new Malicious_File_Upload_Restriction();
                        string allowed_file_format = "jpg,png,jpeg,pdf";
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
                            string name = Path.GetFileNameWithoutExtension(fname);
                            string ext = Path.GetExtension(fname);
                            fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";

                            string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                            string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");
                            path = path + fname;
                            string[] count = file.FileName.Split('.');
                            if (count.Length != 2)
                            {
                                return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                            }
                            file.SaveAs(path);
                            // Get the complete folder path and store the file inside it.      
                            //fname = "@D:\bsi_images\BSi_images\"", fname);
                            // var MainPath = path.Replace("F:\\DEmo\\", "http://54.221.131.231:8014/dli_images/");
                            var MainPath = "/Ataljalimages/" + fname;
                            Paths += MainPath + ',';
                            //file.SaveAs(fname);
                            File_Names += fname + ',';
                        }
                        else
                        {
                           
                            string name = Path.GetFileNameWithoutExtension(file.FileName);
                            string ext = Path.GetExtension(file.FileName);
                            fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";

                            string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                            string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");
                            path = path + fname;
                            string[] count = file.FileName.Split('.');
                            if (count.Length != 2)
                            {
                                return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                            }
                            file.SaveAs(path);
                            // Get the complete folder path and store the file inside it.      
                            //fname = "@D:\bsi_images\BSi_images\"", fname);
                            // var MainPath = path.Replace("F:\\DEmo\\", "http://54.221.131.231:8014/dli_images/");
                            var MainPath = "/Ataljalimages/" + fname;
                            Paths += MainPath + ',';
                            //file.SaveAs(fname);
                            File_Names += fname + ',';
                        }
                        // Get the complete folder path and store the file inside it.      
                        //string path = @"D:\dli_images\";

                    }

                    obj.state_name = State_name;
                    Data1.filename = Full_File_Names + File_Names;
                    Data1.filepath = Full_Path + Paths;
                    ABE.Entry(Data1).State = EntityState.Modified;
                    ABE.SaveChanges();
                    return Json("Saved successfully", JsonRequestBehavior.AllowGet);

                }
            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }

        public ActionResult Upload_proc_milestone_image_update()
        {
            if (Session["UserId"] != null)
            {

                var Obj = new abhy_procurement_milestone_insertdata();

                string id = Request["id"];
                int idd = Convert.ToInt32(id);

                //string Dist = Request["Dist"];
                //string Block = Request["Block"];
                //string Gram = Request["Gram"];
                var Details = ABE.obj_abhy_procurement_milestone_insertdata.Where(x => x.id == idd).ToList();


                var Full_Path = "";
                var Full_File_Names = "";

                if (Details[0].filename != null)
                {
                    Full_File_Names = Details[0].filename;
                }
                if (Details[0].filepath != null)
                {
                    Full_Path = Details[0].filepath;
                }

                HttpFileCollectionBase files = Request.Files;
                var obj = new abhy_procurement_milestone_insertdata();
                string Paths = "";
                string File_Names = "";
                if (files.Count == 0)
                {
                    return Json("Please Upload Files", JsonRequestBehavior.AllowGet);
                }
                else
                {
                    var Data1 = Details.FirstOrDefault();

                    for (int i = 0; i < files.Count; i++)
                    {

                        HttpPostedFileBase file = files[i];
                        Malicious_File_Upload_Restriction obj_Validate = new Malicious_File_Upload_Restriction();
                        string allowed_file_format = "jpg,png,jpeg,pdf";
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
                            string name = Path.GetFileNameWithoutExtension(fname);
                            string ext = Path.GetExtension(fname);
                            fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";

                            string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                            string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");
                            path = path + fname;
                            string[] count = file.FileName.Split('.');
                            if (count.Length != 2)
                            {
                                return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                            }
                            file.SaveAs(path);
                            // Get the complete folder path and store the file inside it.      
                            //fname = "@D:\bsi_images\BSi_images\"", fname);
                            // var MainPath = path.Replace("F:\\DEmo\\", "http://54.221.131.231:8014/dli_images/");
                            var MainPath = "/Ataljalimages/" + fname;
                            Paths += MainPath + ',';
                            //file.SaveAs(fname);
                            File_Names += fname + ',';
                        }
                        else
                        {
                            
                            string name = Path.GetFileNameWithoutExtension(file.FileName);
                            string ext = Path.GetExtension(file.FileName);
                            fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";

                            string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                            string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");
                            path = path + fname;
                            string[] count = file.FileName.Split('.');
                            if (count.Length != 2)
                            {
                                return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                            }
                            file.SaveAs(path);
                            // Get the complete folder path and store the file inside it.      
                            //fname = "@D:\bsi_images\BSi_images\"", fname);
                            // var MainPath = path.Replace("F:\\DEmo\\", "http://54.221.131.231:8014/dli_images/");
                            var MainPath = "/Ataljalimages/" + fname;
                            Paths += MainPath + ',';
                            //file.SaveAs(fname);
                            File_Names += fname + ',';
                        }
                        // Get the complete folder path and store the file inside it.      
                        //string path = @"D:\dli_images\";


                    }

                    obj.state_name = Data1.state_name;
                    Data1.filename = Full_File_Names + File_Names;
                    Data1.filepath = Full_Path + Paths;
                    ABE.Entry(Data1).State = EntityState.Modified;
                    ABE.SaveChanges();
                    return Json("Saved successfully", JsonRequestBehavior.AllowGet);



                }
            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }


        [HttpPost]
        public ActionResult deletecomp_release(string comp_A_pip_string)
        {
            
            JavaScriptSerializer js = new JavaScriptSerializer();
            var result = js.Deserialize<abhy_phymon_fund_release>(comp_A_pip_string);

            if (result.id != 0)
            {
                var ARID = Convert.ToInt32(result.id);
                var Data1 = ABE.obj_abhy_phymon_fund_release.Where(x => x.id == ARID).FirstOrDefault();
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
        public ActionResult Delete_PMF(string id, string path)
        {
            var Id = Convert.ToInt32(id);
            var Details = ABE.obj_abhy_procurement_milestone_insertdata.Where(x => x.id == Id).SingleOrDefault();
            string[] Files = Details.filename.Split(',');
            string[] File_Paths = Details.filepath.Split(',');
            var FullPath = "";
            var FullNames = "";
            if (Files.Length != 0)
            {
                var path1 = Convert.ToInt32(path);
                for (var i = 0; i < Files.Length; i++)
                {
                    if (Files[i] != "")
                    {
                        if (i == path1)
                        {

                        }
                        else
                        {
                            FullNames += Files[i] + ",";
                            FullPath += File_Paths[i] + ",";
                        }
                    }
                }

            }
            Details.filepath = FullPath;
            Details.filename = FullNames;
            ABE.Entry(Details).State = EntityState.Modified;
            ABE.SaveChanges();
            return Json("Deleted Successfully");
        }

        [HttpGet]
        public ActionResult Agency_reports()
        {
            Agency_Reports_Model_Class data = new Agency_Reports_Model_Class();
            data.obj_abhy_mis_pip_form = ABE.obj_abhy_mis_pip_form.ToList();
            data.obj_abhy_mis_pip_b_form = ABE.obj_abhy_mis_pip_b_form.ToList();
            data.obj_abhy_mis_awp_form = ABE.obj_abhy_mis_awp_form.ToList();
            data.obj_abhy_mis_awp_b_form = ABE.obj_abhy_mis_awp_b_form.ToList();
            data.obj_abhy_financialprogress_insertdata = ABE.obj_abhy_financialprogress_insertdata.ToList();
            data.obj_abhy_financialprogress_b_insertdata = ABE.obj_abhy_financialprogress_b_insertdata.ToList();
            data.obj_abhy_physicalmonitoring_insertdata = ABE.obj_abhy_physicalmonitoring_insertdata.ToList();
            data.obj_abhy_procurement_milestone_insertdata = ABE.obj_abhy_procurement_milestone_insertdata.ToList();
            data.obj_abhy_phymon_fund_release = ABE.obj_abhy_phymon_fund_release.ToList();

            ViewBag.FullData = data;
            return View();
        }

        [HttpGet]
        public ActionResult Agency_reports_1()
        {
            return View();
        }

        [HttpGet]
        public ActionResult Agency_reports_2()
        {
            return View();
        }

        [HttpGet]
        public ActionResult Pip_Agency_Details(string pip_agency_state_name)
        {

            try
            {
                List<abhy_mis_pip_form> ddetails = ABE.obj_abhy_mis_pip_form.Where(x => x.state_name == pip_agency_state_name).ToList();//total list

                return Json(ddetails, JsonRequestBehavior.AllowGet);
            }
            catch (Exception Ex)
            {
                return Json("Error", JsonRequestBehavior.AllowGet);
            }

        }

        //Akash
        [HttpPost]
        public ActionResult Update_data_pip_B(int id, string StateName, string UID, string Component, string Activity_Id, string Item_Code, string Activity_Name, string Total_Target, string Estimated, string Physical_year1, string Financial_year1, string Physical_year2, string Financial_year2, string Physical_year3, string Financial_year3, string Physical_year4, string Financial_year4, string Physical_year5, string Financial_year5, string Remarks)
        {


            var data = ABE.obj_abhy_mis_pip_b_form.Where(x => x.id == id).FirstOrDefault();

            if (data != null)
            {


                data.id = id;
                data.state_name = StateName;
                data.pip_uid = UID;
                data.pipcomponent = Component;
                data.pip_activity_id = Activity_Id;
                data.pip_item_code = Item_Code;
                data.pip_workactivity = Activity_Name;
                data.pip_total = Total_Target;
                data.pip_estimated_cost_for_five_years = Estimated;
                data.pip_physical_year1_20_21 = Physical_year1;
                data.pip_financial_year1_20_21 = Financial_year1;
                data.pip_physical_year2_21_22 = Physical_year2;
                data.pip_financial_year2_21_22 = Financial_year2;
                data.pip_physical_year3_22_23 = Physical_year3;
                data.pip_financial_year3_22_23 = Financial_year3;
                data.pip_physical_year4_23_24 = Physical_year4;
                data.pip_financial_year4_23_24 = Financial_year4;
                data.pip_physical_year5_24_25 = Physical_year5;
                data.pip_financial_year5_24_25 = Financial_year5;
                data.pip_remarks = Remarks;




                ABE.Entry(data).State = EntityState.Modified;
                ABE.SaveChanges();
                return Json("Successfully Updated");
            }



            else
            {
                return Json("Not Updated");
            }


        }

        [HttpPost]
        public ActionResult update_A(int pip_id, string pip_StateName, string pip_UID, string pip_Component, string pip_Activity_Id, string pip_Item_Code, string pip_Activity_Name, string pip_Total_Target, string pip_Estimated, string pip_Physical_year1, string pip_Financial_year1, string pip_Physical_year2, string pip_Financial_year2, string pip_Physical_year3, string pip_Financial_year3, string pip_Physical_year4, string pip_Financial_year4, string pip_Physical_year5, string pip_Financial_year5, string pip_Remarks)
        {


            var data = ABE.obj_abhy_mis_pip_form.Where(x => x.id == pip_id).FirstOrDefault();

            if (data != null)
            {


                data.id = pip_id;
                data.state_name = pip_StateName;
                data.pip_uid = pip_UID;
                data.pipcomponent = pip_Component;
                data.pip_activity_id = pip_Activity_Id;
                data.pip_item_code = pip_Item_Code;
                data.pip_workactivity = pip_Activity_Name;
                data.pip_total = pip_Total_Target;
                data.pip_estimated_cost_for_five_years = pip_Estimated;
                data.pip_physical_year1_20_21 = pip_Physical_year1;
                data.pip_financial_year1_20_21 = pip_Financial_year1;
                data.pip_physical_year2_21_22 = pip_Physical_year2;
                data.pip_financial_year2_21_22 = pip_Financial_year2;
                data.pip_physical_year3_22_23 = pip_Physical_year3;
                data.pip_financial_year3_22_23 = pip_Financial_year3;
                data.pip_physical_year4_23_24 = pip_Physical_year4;
                data.pip_financial_year4_23_24 = pip_Financial_year4;
                data.pip_physical_year5_24_25 = pip_Physical_year5;
                data.pip_financial_year5_24_25 = pip_Financial_year5;
                data.pip_remarks = pip_Remarks;




                ABE.Entry(data).State = EntityState.Modified;
                ABE.SaveChanges();
                return Json("Successfully Updated");
            }



            else
            {
                return Json("Not Updated");
            }


        }



        [HttpPost]
        [ValidateInput(false)]
        public ActionResult Export(string StateName, string YearName, string TbleName)
        {

            if (Session["UserId"] != null)
            {
                try
                {
                    if (TbleName == "tbla")
                    {
                        List<abhy_mis_pip_form> ddetails = new List<abhy_mis_pip_form>();
                        var userid = Convert.ToInt32(Session["UserId"]);

                        if (Session["gstate"] != null)
                        {
                            StateName = Session["gstate"].ToString();
                        }
                        if (StateName != "" && StateName != null && StateName != "0")
                        {
                            if (StateName == "ALL")
                            {
                                ddetails = ABE.obj_abhy_mis_pip_form.ToList();//total list

                                var data = ABE.obj_abhy_mis_pip_form.
                                      Where(x => x.state_name != "undefined").
                                      Select(s => new
                                      {
                                          s.state_name,
                                          s.pip_uid,
                                          s.pipcomponent,
                                          s.pip_activity_id,
                                          s.pip_item_code,
                                          s.pip_workactivity,
                                          s.pip_total,
                                          s.pip_estimated_cost_for_five_years,
                                          s.pip_physical_year1_20_21,
                                          s.pip_financial_year1_20_21,
                                          s.pip_physical_year2_21_22,
                                          s.pip_financial_year2_21_22,
                                          s.pip_physical_year3_22_23,
                                          s.pip_financial_year3_22_23,
                                          s.pip_physical_year4_23_24,
                                          s.pip_financial_year4_23_24,
                                          s.pip_physical_year5_24_25,
                                          s.pip_financial_year5_24_25
                                      }).ToList();
                                byte[] filecontent = ExcelExportHelper.ExportExcel(data, "PROJECT IMPLEMENTATION PLAN (PIP)Component A Report", true, "tblA");
                                return File(filecontent, ExcelExportHelper.ExcelContentType, "PIP_A.xlsx");
                            }
                            else
                            {
                                ddetails = ABE.obj_abhy_mis_pip_form.Where(x => x.state_name == StateName).ToList();//total list
                                var data = ABE.obj_abhy_mis_pip_form
                                    .Where(x => x.state_name == StateName)
                                    .Select(s => new
                                    {
                                        s.state_name,
                                        s.pip_uid,
                                        s.pipcomponent,
                                        s.pip_activity_id,
                                        s.pip_item_code,
                                        s.pip_workactivity,
                                        s.pip_total,
                                        s.pip_estimated_cost_for_five_years,
                                        s.pip_physical_year1_20_21,
                                        s.pip_financial_year1_20_21,
                                        s.pip_physical_year2_21_22,
                                        s.pip_financial_year2_21_22,
                                        s.pip_physical_year3_22_23,
                                        s.pip_financial_year3_22_23,
                                        s.pip_physical_year4_23_24,
                                        s.pip_financial_year4_23_24,
                                        s.pip_physical_year5_24_25,
                                        s.pip_financial_year5_24_25
                                    }).ToList();

                                byte[] filecontent = ExcelExportHelper.ExportExcel(data, "PROJECT IMPLEMENTATION PLAN (PIP)Component A Report", true, "tbla");
                                return File(filecontent, ExcelExportHelper.ExcelContentType, "PIP_A.xlsx");
                            }
                        }

                    }
                    else if (TbleName == "tblb")
                    {
                        List<abhy_mis_pip_b_form> ddetails = new List<abhy_mis_pip_b_form>();
                        var userid = Convert.ToInt32(Session["UserId"]);

                        if (Session["gstate"] != null)
                        {
                            StateName = Session["gstate"].ToString();
                        }
                        if (StateName != "" && StateName != null && StateName != "0")
                        {
                            if (StateName == "ALL")
                            {
                                ddetails = ABE.obj_abhy_mis_pip_b_form.ToList();//total list
                                var data = ABE.obj_abhy_mis_pip_b_form.
                                      Where(x => x.state_name != "undefined").
                                      Select(s => new
                                      {
                                          s.state_name,
                                          s.pip_uid,
                                          s.pipcomponent,
                                          s.pip_activity_id,
                                          s.pip_item_code,
                                          s.pip_workactivity,
                                          s.pip_total,
                                          s.pip_estimated_cost_for_five_years,
                                          s.pip_physical_year1_20_21,
                                          s.pip_financial_year1_20_21,
                                          s.pip_physical_year2_21_22,
                                          s.pip_financial_year2_21_22,
                                          s.pip_physical_year3_22_23,
                                          s.pip_financial_year3_22_23,
                                          s.pip_physical_year4_23_24,
                                          s.pip_financial_year4_23_24,
                                          s.pip_physical_year5_24_25,
                                          s.pip_financial_year5_24_25
                                      }).ToList();
                                byte[] filecontent = ExcelExportHelper.ExportExcel(data, "PROJECT IMPLEMENTATION PLAN (PIP)Component A Report", true, "tblb");
                                return File(filecontent, ExcelExportHelper.ExcelContentType, "PIP_B.xlsx");
                            }
                            else
                            {
                                ddetails = ABE.obj_abhy_mis_pip_b_form.Where(x => x.state_name == StateName).ToList();//total list
                                var data = ABE.obj_abhy_mis_pip_b_form
                                    .Where(x => x.state_name == StateName)
                                    .Select(s => new
                                    {
                                        s.state_name,
                                        s.pip_uid,
                                        s.pipcomponent,
                                        s.pip_activity_id,
                                        s.pip_item_code,
                                        s.pip_workactivity,
                                        s.pip_total,
                                        s.pip_estimated_cost_for_five_years,
                                        s.pip_physical_year1_20_21,
                                        s.pip_financial_year1_20_21,
                                        s.pip_physical_year2_21_22,
                                        s.pip_financial_year2_21_22,
                                        s.pip_physical_year3_22_23,
                                        s.pip_financial_year3_22_23,
                                        s.pip_physical_year4_23_24,
                                        s.pip_financial_year4_23_24,
                                        s.pip_physical_year5_24_25,
                                        s.pip_financial_year5_24_25
                                    }).ToList();

                                byte[] filecontent = ExcelExportHelper.ExportExcel(data, "PROJECT IMPLEMENTATION PLAN (PIP)Component B Report", true, "tblb");
                                return File(filecontent, ExcelExportHelper.ExcelContentType, "PIP_B.xlsx");
                            }
                        }
                    }
                    else
                    {
                        List<abhy_financialprogress_insertdata> ddetails = new List<abhy_financialprogress_insertdata>();
                        var userid = Convert.ToInt32(Session["UserId"]);
                        var State = StateName;
                        if (Session["gstate"] != null)
                        {
                            StateName = Session["gstate"].ToString();
                        }
                        if (StateName != "" && StateName != null && StateName != "0")
                        {
                            if (StateName == "ALL")
                            {
                                ddetails = ABE.obj_abhy_financialprogress_insertdata.ToList();

                                var data = ABE.obj_abhy_financialprogress_insertdata.
                                    Where(x => x.state_name != "undefined").
                                     Select(s => new
                                     {
                                         s.state_name,
                                         s.fin_year,
                                         s.fin_month,
                                         s.component_id,
                                         s.sub_component_id,
                                         s.activity_id,
                                         s.item_code,
                                         s.activity_name,
                                         s.financial_awp,
                                         s.producrment_selection,
                                         s.category_of_procurement,
                                         s.component_budget_head,
                                         s.expenditure_code,
                                         s.expenditure_made,
                                         s.cumulative_expenditure
                                     }).ToList();
                                byte[] filecontent = ExcelExportHelper.ExportExcel(data, "Financial Progress Monitoring Component A Report", true);
                                return File(filecontent, ExcelExportHelper.ExcelContentType, "Financial_Progress_Monitoring.xlsx");
                            }
                            else if (StateName != "" && StateName != null && StateName != "0" && YearName != "" && YearName != null && YearName != "0")
                            {
                                ddetails = ABE.obj_abhy_financialprogress_insertdata.Where(x => x.state_name == StateName && x.fin_year == YearName).ToList();//total list
                                var data = ABE.obj_abhy_financialprogress_insertdata
                                    .Where(x => x.state_name == StateName && x.fin_year == YearName)
                                    .Select(s => new
                                    {
                                        s.state_name,
                                        s.fin_year,
                                        s.fin_month,
                                        s.component_id,
                                        s.sub_component_id,
                                        s.activity_id,
                                        s.item_code,
                                        s.activity_name,
                                        s.financial_awp,
                                        s.producrment_selection,
                                        s.category_of_procurement,
                                        s.component_budget_head,
                                        s.expenditure_code,
                                        s.expenditure_made,
                                        s.cumulative_expenditure
                                    }).ToList();

                                byte[] filecontent = ExcelExportHelper.ExportExcel(data, "Financial Progress Monitoring Component A Report", true);
                                return File(filecontent, ExcelExportHelper.ExcelContentType, "Financial_Progress_Monitoring.xlsx");
                            }
                            else
                            {
                                ddetails = ABE.obj_abhy_financialprogress_insertdata.Where(x => x.state_name == StateName).ToList();//total list
                                var data = ABE.obj_abhy_financialprogress_insertdata
                                    .Where(x => x.state_name == StateName)
                                    .Select(s => new
                                    {
                                        s.state_name,
                                        s.fin_year,
                                        s.fin_month,
                                        s.component_id,
                                        s.sub_component_id,
                                        s.activity_id,
                                        s.item_code,
                                        s.activity_name,
                                        s.financial_awp,
                                        s.producrment_selection,
                                        s.category_of_procurement,
                                        s.component_budget_head,
                                        s.expenditure_code,
                                        s.expenditure_made,
                                        s.cumulative_expenditure
                                    }).ToList();

                                byte[] filecontent = ExcelExportHelper.ExportExcel(data, "Financial Progress Monitoring Component A Report", true);
                                return File(filecontent, ExcelExportHelper.ExcelContentType, "Financial_Progress_Monitoring.xlsx");
                            }
                        }

                    }
                }
                catch (Exception Ex)
                {

                }
            }
            else
            {


            }
            return RedirectToAction("php_and_fn_report", "mis_new");
        }

        [HttpPost]
        public ActionResult Update(string id, string Name_of_Consultant, string Contract_Price, string Date_of_singning, string Date_of_Completion, string Total_Payment, string Complaints, string Remarks)
        {

            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_incentive_fund_utilization.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {
                        Data.Name_of_Consultant = Name_of_Consultant;
                        Data.Contract_Price = Contract_Price;
                        Data.Date_of_singning = Date_of_singning;
                        Data.Date_of_Completion = Date_of_Completion;
                        Data.Total_Payment = Total_Payment;
                        Data.Complaints = Complaints;
                        Data.Remarks = Remarks;


                        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = ABE.SaveChanges();
                        if (A > 0)
                        {
                            return Json("Successfully Update");
                        }



                    }

                }
                catch (Exception ex)
                {
                    return Json("");

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }

    }
}