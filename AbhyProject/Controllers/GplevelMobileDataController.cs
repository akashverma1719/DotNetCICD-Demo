using AbhyProject.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;
using AbhyProject.Excel;
using System.IO;
using ClosedXML.Excel;
using System.Data;
using System.ComponentModel;
using System.Text.RegularExpressions;
using System.Text;
using System.Security.Cryptography;
using Newtonsoft.Json;
using System.Configuration;
using AbhyProject.Classes;
using System.Globalization;
using AbhyProject.Utility;
using System.Drawing;

namespace AbhyProject.Controllers
{
    public class GplevelMobileDataController : Controller
    {
        string sUploadDirectory = ConfigurationManager.AppSettings.Get("mobileuploaddir").ToString();
        AbhyEntity ABE = new AbhyEntity();
        AtaljalEntity AJE = new AtaljalEntity();
        string totalwell = "";

        // GET: GplevelMobileData
        public ActionResult dwlr_report()
        {
            return View();
        }
        public ActionResult MobileData()
        {

            ViewBag.GPLIst = ABE.obj_abhy_gpdata_new.ToList();
            return View();
        }

        public ActionResult new_report()
        {
            return View();
        }

        public ActionResult new_report_new()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Sign_Up_DropdownInfo()
        {          
            try
            {
                var slist = AJE.obj_master_list_gp.Where(x=>x.mobile_list== "Mobile").ToList();                
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
        public ActionResult well_report()
        {
            try
            {
                string[] states = { "Gujarat_24", "Haryana_6", "Karnataka_29", "Madhya Pradesh_23", "Maharashtra_27", "Rajasthan_8", "Uttar Pradesh_9" };
                int[] gps_count = { 1873, 1647, 1199, 670, 1133, 1132, 549 };

                List<summery_report_mobile_app> all_data = new List<summery_report_mobile_app>();

                for (int i = 0; i < states.Length; i++)
                {
                    summery_report_mobile_app data = new summery_report_mobile_app();

                    string state = states[i];
                    data.statename = state;
                    data.totalgp = gps_count[i];
                    var welltotal_count = AJE.obj_vw_count_wellinventory.Where(x => x.state == state).FirstOrDefault();
                    if (welltotal_count != null)
                    {
                        data.welltotal = welltotal_count.total_count;
                        data.welltotalgp = welltotal_count.distinct_gp_count;
                        data.wellnogp = welltotal_count.diff;
                    }
                    else
                    {
                        data.welltotal = 0;
                        data.welltotalgp = 0;
                        data.wellnogp = 0;
                    }
                    


                    var gwltotal = AJE.obj_vw_count_gwl_meta_count.Where(x => x.state == state).FirstOrDefault();
                    if (gwltotal != null)
                    {
                        data.gwltotal = gwltotal.total_count;
                        data.gwltotalgp = gwltotal.distinct_gp_count;
                        data.gwlnogp = gwltotal.diff;
                    }
                    else
                    {
                        data.gwltotal = 0;
                        data.gwltotalgp = 0;
                        data.gwlnogp = 0;
                    }
                    

                    var gwqtotal = AJE.obj_vw_count_water_wq_meta_count.Where(x => x.state == state).FirstOrDefault();
                    if (gwqtotal != null)
                    {
                        data.gwqtotal = gwqtotal.total_count;
                        data.gwqtotalgp = gwqtotal.distinct_gp_count;
                        data.gwqnogp = gwqtotal.diff;
                    }
                    else
                    {
                        data.gwqtotal = 0;
                        data.gwqtotalgp = 0;
                        data.gwqnogp = 0;
                    }
                    

                    var geototal_count = AJE.obj_vw_count_geo_new.Where(x => x.state == state).FirstOrDefault();
                    if (geototal_count != null)
                    {
                        data.geototal = geototal_count.total_count;
                        data.geototalgp = geototal_count.distinct_gp_count;
                        data.geonogp = geototal_count.diff;
                    }
                    else
                    {
                        data.geototal = 0;
                        data.geototalgp = 0;
                        data.geonogp = 0;
                    }
                    

                    var rainfalltotal_count = AJE.obj_vw_count_rainfall_meta_count.Where(x => x.state == state).FirstOrDefault();
                    if (rainfalltotal_count != null)
                    {
                        data.rainfalltotal = rainfalltotal_count.total_count;
                        data.rainfalltotalgp = rainfalltotal_count.distinct_gp_count;
                        data.rainfallnogp = rainfalltotal_count.diff;
                    }
                    else
                    {
                        data.rainfalltotal = 0;
                        data.rainfalltotalgp = 0;
                        data.rainfallnogp = 0;
                    }
                    var waterflowtotal = AJE.obj_vw_count_waterflow_meta_count.Where(x => x.state == state).FirstOrDefault();
                    if (waterflowtotal!=null) {
                        data.waterflowtotal = waterflowtotal.total_count;
                        data.waterflowtotalgp = waterflowtotal.distinct_gp_count;
                        data.waterflownogp = waterflowtotal.diff;
                    }
                    else
                    {
                        data.waterflowtotal = 0;
                        data.waterflowtotalgp = 0;
                        data.waterflownogp = 0;
                    }
                    var socialtotal = AJE.obj_vw_count_socialmonitoring_count.Where(x => x.state == state).FirstOrDefault();
                    if (socialtotal != null)
                    {
                        data.socialtotal = socialtotal.total_count;
                        data.socialtotalgp = socialtotal.distinct_gp_count;
                        data.socialnogp = socialtotal.diff;
                    }
                    else
                    {
                        data.socialtotal = 0;
                        data.socialtotalgp = 0;
                        data.socialnogp = 0;
                    }
                    


                    all_data.Add(data);
                }


                var jsonResult = Json(all_data, JsonRequestBehavior.AllowGet);
                jsonResult.MaxJsonLength = int.MaxValue;
                return jsonResult;

            }
            catch (Exception Ex)
            {
                abhy_tbl_error error_data = new abhy_tbl_error();
                error_data.error_test = Ex.Message;
                error_data.user_email = Ex.StackTrace;
                error_data.user_type = "madbcount";
                error_data.error_count = "1";
                error_data.date_time = DateTime.Now.ToString();
                ABE.obj_abhy_tbl_error.Add(error_data);
                ABE.SaveChanges();
                return Json("Error", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult state_npmu_data_report(string state, string dist, string block, string gram, string year, string month)
        {
            
                try
                {
                    
                        List<vw_gwl_sd_block_month_year_summary_template> ddetails_month = new List<vw_gwl_sd_block_month_year_summary_template>();
                        List<vw_gwl_sd_block_year_summary_template> ddetails_year = new List<vw_gwl_sd_block_year_summary_template>();
                        List<vw_gwl_sd_block_summary_template> ddetails = new List<vw_gwl_sd_block_summary_template>();

                    List<vw_gwl_s_district_month_year_summary_template> dist_ddetails_month = new List<vw_gwl_s_district_month_year_summary_template>();
                    List<vw_gwl_s_district_year_summary_template> dist_ddetails_year = new List<vw_gwl_s_district_year_summary_template>();
                    List<vw_gwl_s_district_summary_template> dist_ddetails = new List<vw_gwl_s_district_summary_template>();

                    List<vw_gwl_state_month_year_summary_template> state_ddetails_month = new List<vw_gwl_state_month_year_summary_template>();
                    List<vw_gwl_state_year_summary_template> state_ddetails_year = new List<vw_gwl_state_year_summary_template>();
                    List<vw_gwl_state_summary_template> state_ddetails = new List<vw_gwl_state_summary_template>();

                    var State = state;
                        var Dist = dist;
                        var Block = block;
                        var Gram = gram;
                    int yy = Convert.ToInt32(year);
                    int mm = Convert.ToInt32(month);
                if (State == "All" || Dist == "All" || Block == "All")
                {
                    if (Block == "All") {
                        if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block == "All" && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            ddetails_month = AJE.obj_vw_gwl_sd_block_month_year_summary_template.Where(x => x.state == State && x.district == dist && x.year == yy && x.month == mm).OrderBy(x => x.block).ToList();//total list
                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block == "All" && year != "0" && year != "" && year != null)
                        {
                            ddetails_year = AJE.obj_vw_gwl_sd_block_year_summary_template.Where(x => x.state == State && x.district == dist && x.year == yy).OrderBy(x => x.block).ToList();//total list
                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                        {
                            ddetails = AJE.obj_vw_gwl_sd_block_summary_template.Where(x => x.state == State && x.district == dist && Block == "All").OrderBy(x => x.block).ToList();//total list
                        }
                    }
                    else if (Dist == "All")
                    {
                     if (State != "0" && State != "" && State != null && Dist == "All" && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            dist_ddetails_month = AJE.obj_vw_gwl_s_district_month_year_summary_template.Where(x => x.state == State && x.year == yy && x.month == mm).OrderBy(x => x.district).ToList();//total list
                        }
                        else if (State != "0" && State != "" && State != null && Dist == "All" && year != "0" && year != "" && year != null)
                        {
                            dist_ddetails_year = AJE.obj_vw_gwl_s_district_year_summary_template.Where(x => x.state == State && x.year == yy).OrderBy(x => x.district).ToList();//total list
                        }
                        else if (State != "0" && State != "" && State != null && Dist == "All")
                        {
                            dist_ddetails = AJE.obj_vw_gwl_s_district_summary_template.Where(x => x.state == State).OrderBy(x => x.district).ToList();//total list
                        }
                    }
                    else 
                    {
                        if ( year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            state_ddetails_month = AJE.obj_vw_gwl_state_month_year_summary_template.Where(x => x.state!= "Delhi_7" && x.year == yy && x.month == mm).OrderBy(x => x.state).ToList();//total list
                        }
                        else if ( year != "0" && year != "" && year != null)
                        {
                            state_ddetails_year = AJE.obj_vw_gwl_state_year_summary_template.Where(x => x.state != "Delhi_7" && x.year == yy).OrderBy(x => x.state).ToList();//total list
                        }
                        else 
                        {
                            state_ddetails = AJE.obj_vw_gwl_state_summary_template.Where(x=> x.state != "Delhi_7").OrderBy(x => x.state).ToList();//total list
                        }
                    }
                }
                else
                {
                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        ddetails_month = AJE.obj_vw_gwl_sd_block_month_year_summary_template.Where(x => x.state == State && x.district == dist && x.block == block && x.year == yy && x.month == mm).OrderByDescending(x => x.row_id).ToList();//total list
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
                    {
                        ddetails_year = AJE.obj_vw_gwl_sd_block_year_summary_template.Where(x => x.state == State && x.district == dist && x.block == block && x.year == yy).OrderByDescending(x => x.row_id).ToList();//total list
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        ddetails = AJE.obj_vw_gwl_sd_block_summary_template.Where(x => x.state == State && x.district == dist && x.block == block).OrderByDescending(x => x.row_id).ToList();//total list
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        dist_ddetails_month = AJE.obj_vw_gwl_s_district_month_year_summary_template.Where(x => x.state == State && x.district == dist && x.year == yy && x.month == mm).OrderByDescending(x => x.row_id).ToList();//total list
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
                    {
                        dist_ddetails_year = AJE.obj_vw_gwl_s_district_year_summary_template.Where(x => x.state == State && x.district == dist && x.year == yy).OrderByDescending(x => x.row_id).ToList();//total list
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        dist_ddetails = AJE.obj_vw_gwl_s_district_summary_template.Where(x => x.state == State && x.district == dist).OrderByDescending(x => x.row_id).ToList();//total list
                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        state_ddetails_month = AJE.obj_vw_gwl_state_month_year_summary_template.Where(x => x.state == State && x.year == yy && x.month == mm).OrderByDescending(x => x.row_id).ToList();//total list
                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
                    {
                        state_ddetails_year = AJE.obj_vw_gwl_state_year_summary_template.Where(x => x.state == State && x.year == yy).OrderByDescending(x => x.row_id).ToList();//total list
                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        state_ddetails = AJE.obj_vw_gwl_state_summary_template.Where(x => x.state == State).OrderByDescending(x => x.row_id).ToList();//total list
                    }
                }

                    if (ddetails_month.Count!=0)
                    {
                        var jsonresult = Json(ddetails_month, JsonRequestBehavior.AllowGet);
                        jsonresult.MaxJsonLength = int.MaxValue;
                        return jsonresult;
                    }
                    else if (ddetails_year.Count != 0)
                    {
                        var jsonresult = Json(ddetails_year, JsonRequestBehavior.AllowGet);
                        jsonresult.MaxJsonLength = int.MaxValue;
                        return jsonresult;
                    }
                    else if (ddetails.Count != 0)
                    {
                        var jsonresult = Json(ddetails, JsonRequestBehavior.AllowGet);
                        jsonresult.MaxJsonLength = int.MaxValue;
                        return jsonresult;
                    }
                    else if (dist_ddetails_month.Count != 0)
                    {
                        var jsonresult = Json(dist_ddetails_month, JsonRequestBehavior.AllowGet);
                        jsonresult.MaxJsonLength = int.MaxValue;
                        return jsonresult;
                    }
                    else if (dist_ddetails_year.Count != 0)
                    {
                        var jsonresult = Json(dist_ddetails_year, JsonRequestBehavior.AllowGet);
                        jsonresult.MaxJsonLength = int.MaxValue;
                        return jsonresult;
                    }
                    else if (dist_ddetails.Count != 0)
                    {
                        var jsonresult = Json(dist_ddetails, JsonRequestBehavior.AllowGet);
                        jsonresult.MaxJsonLength = int.MaxValue;
                        return jsonresult;
                    }
                    else if (state_ddetails_month.Count != 0)
                    {
                        var jsonresult = Json(state_ddetails_month, JsonRequestBehavior.AllowGet);
                        jsonresult.MaxJsonLength = int.MaxValue;
                        return jsonresult;
                    }
                    else if (state_ddetails_year.Count != 0)
                    {
                        var jsonresult = Json(state_ddetails_year, JsonRequestBehavior.AllowGet);
                        jsonresult.MaxJsonLength = int.MaxValue;
                        return jsonresult;
                    }
                    else if (state_ddetails.Count != 0)
                    {
                        var jsonresult = Json(state_ddetails, JsonRequestBehavior.AllowGet);
                        jsonresult.MaxJsonLength = int.MaxValue;
                        return jsonresult;
                    }
                    else
                    {
                        return Json("No Data", JsonRequestBehavior.AllowGet);
                    }
                    
                    

                }
                catch (Exception Ex)
                {
                    return Json(Ex.Message, JsonRequestBehavior.AllowGet);
                }
        }

        [HttpPost]
        public ActionResult state_npmu_data_report_rainfall(string state, string dist, string block, string gram, string year, string month)
        {

            try
            {

                List<vw_rainfall_sd_block_month_year_summary_template> ddetails_month = new List<vw_rainfall_sd_block_month_year_summary_template>();
                List<vw_rainfall_sd_block_year_summary_template> ddetails_year = new List<vw_rainfall_sd_block_year_summary_template>();
                List<vw_rainfall_sd_block_summary_template> ddetails = new List<vw_rainfall_sd_block_summary_template>();

                List<vw_rainfall_s_district_month_year_summary_template> dist_ddetails_month = new List<vw_rainfall_s_district_month_year_summary_template>();
                List<vw_rainfall_s_district_year_summary_template> dist_ddetails_year = new List<vw_rainfall_s_district_year_summary_template>();
                List<vw_rainfall_s_district_summary_template> dist_ddetails = new List<vw_rainfall_s_district_summary_template>();

                List<vw_rainfall_state_month_year_summary_template> state_ddetails_month = new List<vw_rainfall_state_month_year_summary_template>();
                List<vw_rainfall_state_year_summary_template> state_ddetails_year = new List<vw_rainfall_state_year_summary_template>();
                List<vw_rainfall_state_summary_template> state_ddetails = new List<vw_rainfall_state_summary_template>();

                var State = state;
                var Dist = dist;
                var Block = block;
                var Gram = gram;
                int yy = Convert.ToInt32(year);
                int mm = Convert.ToInt32(month);
                if (State == "All" || Dist == "All" || Block == "All")
                {
                    if (Block == "All")
                    {
                        if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block == "All" && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            ddetails_month = AJE.obj_vw_rainfall_sd_block_month_year_summary_template.Where(x => x.state == State && x.district == dist && x.year == yy && x.month == mm).OrderBy(x => x.block).ToList();//total list
                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block == "All" && year != "0" && year != "" && year != null)
                        {
                            ddetails_year = AJE.obj_vw_rainfall_sd_block_year_summary_template.Where(x => x.state == State && x.district == dist && x.year == yy).OrderBy(x => x.block).ToList();//total list
                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                        {
                            ddetails = AJE.obj_vw_rainfall_sd_block_summary_template.Where(x => x.state == State && x.district == dist && Block == "All").OrderBy(x => x.block).ToList();//total list
                        }
                    }
                    else if(Dist == "All")
                    {
                        if (State != "0" && State != "" && State != null && Dist == "All" && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            dist_ddetails_month = AJE.obj_vw_rainfall_s_district_month_year_summary_template.Where(x => x.state == State && x.year == yy && x.month == mm).OrderBy(x => x.district).ToList();//total list
                        }
                        else if (State != "0" && State != "" && State != null && Dist == "All" && year != "0" && year != "" && year != null)
                        {
                            dist_ddetails_year = AJE.obj_vw_rainfall_s_district_year_summary_template.Where(x => x.state == State && x.year == yy).OrderBy(x => x.district).ToList();//total list
                        }
                        else if (State != "0" && State != "" && State != null && Dist == "All")
                        {
                            dist_ddetails = AJE.obj_vw_rainfall_s_district_summary_template.Where(x => x.state == State).OrderBy(x => x.district).ToList();//total list
                        }
                    }
                     else
                    {
                        if (year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            state_ddetails_month = AJE.obj_vw_rainfall_state_month_year_summary_template.Where(x => x.state != "Delhi_7" && x.year == yy && x.month == mm).OrderBy(x => x.state).ToList();//total list
                        }
                        else if (year != "0" && year != "" && year != null)
                        {
                            state_ddetails_year = AJE.obj_vw_rainfall_state_year_summary_template.Where(x => x.state != "Delhi_7" && x.year == yy).OrderBy(x => x.state).ToList();//total list
                        }
                        else
                        {
                            state_ddetails = AJE.obj_vw_rainfall_state_summary_template.Where(x=> x.state != "Delhi_7" ).OrderBy(x => x.state).ToList();//total list
                        }
                    }
                }
                else
                {
                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        ddetails_month = AJE.obj_vw_rainfall_sd_block_month_year_summary_template.Where(x => x.state == State && x.district == dist && x.block == block && x.year == yy && x.month == mm).OrderByDescending(x => x.row_id).ToList();//total list
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
                    {
                        ddetails_year = AJE.obj_vw_rainfall_sd_block_year_summary_template.Where(x => x.state == State && x.district == dist && x.block == block && x.year == yy).OrderByDescending(x => x.row_id).ToList();//total list
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        ddetails = AJE.obj_vw_rainfall_sd_block_summary_template.Where(x => x.state == State && x.district == dist && x.block == block).OrderByDescending(x => x.row_id).ToList();//total list
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        dist_ddetails_month = AJE.obj_vw_rainfall_s_district_month_year_summary_template.Where(x => x.state == State && x.district == dist && x.year == yy && x.month == mm).OrderByDescending(x => x.row_id).ToList();//total list
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
                    {
                        dist_ddetails_year = AJE.obj_vw_rainfall_s_district_year_summary_template.Where(x => x.state == State && x.district == dist && x.year == yy).OrderByDescending(x => x.row_id).ToList();//total list
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        dist_ddetails = AJE.obj_vw_rainfall_s_district_summary_template.Where(x => x.state == State && x.district == dist).OrderByDescending(x => x.row_id).ToList();//total list
                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        state_ddetails_month = AJE.obj_vw_rainfall_state_month_year_summary_template.Where(x => x.state == State && x.year == yy && x.month == mm).OrderByDescending(x => x.row_id).ToList();//total list
                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
                    {
                        state_ddetails_year = AJE.obj_vw_rainfall_state_year_summary_template.Where(x => x.state == State && x.year == yy).OrderByDescending(x => x.row_id).ToList();//total list
                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        state_ddetails = AJE.obj_vw_rainfall_state_summary_template.Where(x => x.state == State).OrderByDescending(x => x.row_id).ToList();//total list
                    }
                }

                if (ddetails_month.Count != 0)
                {
                    var jsonresult = Json(ddetails_month, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
                }
                else if (ddetails_year.Count != 0)
                {
                    var jsonresult = Json(ddetails_year, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
                }
                else if (ddetails.Count != 0)
                {
                    var jsonresult = Json(ddetails, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
                }
                else if (dist_ddetails_month.Count != 0)
                {
                    var jsonresult = Json(dist_ddetails_month, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
                }
                else if (dist_ddetails_year.Count != 0)
                {
                    var jsonresult = Json(dist_ddetails_year, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
                }
                else if (dist_ddetails.Count != 0)
                {
                    var jsonresult = Json(dist_ddetails, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
                }
                else if (state_ddetails_month.Count != 0)
                {
                    var jsonresult = Json(state_ddetails_month, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
                }
                else if (state_ddetails_year.Count != 0)
                {
                    var jsonresult = Json(state_ddetails_year, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
                }
                else if (state_ddetails.Count != 0)
                {
                    var jsonresult = Json(state_ddetails, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
                }
                else
                {
                    return Json("No Data", JsonRequestBehavior.AllowGet);
                }



            }
            catch (Exception Ex)
            {
                return Json(Ex.Message, JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult state_npmu_data_report_water_wq(string state, string dist, string block, string gram, string year, string month)
        {

            try
            {

                List<vw_water_wq_sd_block_month_year_summary_template> ddetails_month = new List<vw_water_wq_sd_block_month_year_summary_template>();
                List<vw_water_wq_sd_block_year_summary_template> ddetails_year = new List<vw_water_wq_sd_block_year_summary_template>();
                List<vw_water_wq_sd_block_summary_template> ddetails = new List<vw_water_wq_sd_block_summary_template>();

                List<vw_water_wq_s_district_month_year_summary_template> dist_ddetails_month = new List<vw_water_wq_s_district_month_year_summary_template>();
                List<vw_water_wq_s_district_year_summary_template> dist_ddetails_year = new List<vw_water_wq_s_district_year_summary_template>();
                List<vw_water_wq_s_district_summary_template> dist_ddetails = new List<vw_water_wq_s_district_summary_template>();

                List<vw_water_wq_state_month_year_summary_template> state_ddetails_month = new List<vw_water_wq_state_month_year_summary_template>();
                List<vw_water_wq_state_year_summary_template> state_ddetails_year = new List<vw_water_wq_state_year_summary_template>();
                List<vw_water_wq_state_summary_template> state_ddetails = new List<vw_water_wq_state_summary_template>();

                var State = state;
                var Dist = dist;
                var Block = block;
                var Gram = gram;
                int yy = Convert.ToInt32(year);
                int mm = Convert.ToInt32(month);
                if (State == "All" || Dist == "All" || Block == "All")
                {
                    if (Block == "All")
                    {
                        if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block == "All" && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            ddetails_month = AJE.obj_vw_water_wq_sd_block_month_year_summary_template.Where(x => x.state == State && x.district == dist && x.year == yy && x.month == mm).OrderBy(x => x.block).ToList();//total list
                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block == "All" && year != "0" && year != "" && year != null)
                        {
                            ddetails_year = AJE.obj_vw_water_wq_sd_block_year_summary_template.Where(x => x.state == State && x.district == dist && x.year == yy).OrderBy(x => x.block).ToList();//total list
                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                        {
                            ddetails = AJE.obj_vw_water_wq_sd_block_summary_template.Where(x => x.state == State && x.district == dist && Block == "All").OrderBy(x => x.block).ToList();//total list
                        }
                    }
                    else if (Dist == "All")
                    {
                        if (State != "0" && State != "" && State != null && Dist == "All" && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            dist_ddetails_month = AJE.obj_vw_water_wq_s_district_month_year_summary_template.Where(x => x.state == State && x.year == yy && x.month == mm).OrderBy(x => x.district).ToList();//total list
                        }
                        else if (State != "0" && State != "" && State != null && Dist == "All" && year != "0" && year != "" && year != null)
                        {
                            dist_ddetails_year = AJE.obj_vw_water_wq_s_district_year_summary_template.Where(x => x.state == State && x.year == yy).OrderBy(x => x.district).ToList();//total list
                        }
                        else if (State != "0" && State != "" && State != null && Dist == "All")
                        {
                            dist_ddetails = AJE.obj_vw_water_wq_s_district_summary_template.Where(x => x.state == State).OrderBy(x => x.district).ToList();//total list
                        }
                    }
                     else
                    {
                        if (year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            state_ddetails_month = AJE.obj_vw_water_wq_state_month_year_summary_template.Where(x => x.state != "Delhi_7" && x.year == yy && x.month == mm).OrderBy(x => x.state).ToList();//total list
                        }
                        else if (year != "0" && year != "" && year != null)
                        {
                            state_ddetails_year = AJE.obj_vw_water_wq_state_year_summary_template.Where(x => x.state != "Delhi_7" && x.year == yy).OrderBy(x => x.state).ToList();//total list
                        }
                        else
                        {
                            state_ddetails = AJE.obj_vw_water_wq_state_summary_template.Where(x=> x.state != "Delhi_7").OrderBy(x => x.state).ToList();//total list
                        }
                    }
                }
                else
                {
                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        ddetails_month = AJE.obj_vw_water_wq_sd_block_month_year_summary_template.Where(x => x.state == State && x.district == dist && x.block == block && x.year == yy && x.month == mm).OrderByDescending(x => x.row_id).ToList();//total list
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
                    {
                        ddetails_year = AJE.obj_vw_water_wq_sd_block_year_summary_template.Where(x => x.state == State && x.district == dist && x.block == block && x.year == yy).OrderByDescending(x => x.row_id).ToList();//total list
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        ddetails = AJE.obj_vw_water_wq_sd_block_summary_template.Where(x => x.state == State && x.district == dist && x.block == block).OrderByDescending(x => x.row_id).ToList();//total list
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        dist_ddetails_month = AJE.obj_vw_water_wq_s_district_month_year_summary_template.Where(x => x.state == State && x.district == dist && x.year == yy && x.month == mm).OrderByDescending(x => x.row_id).ToList();//total list
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
                    {
                        dist_ddetails_year = AJE.obj_vw_water_wq_s_district_year_summary_template.Where(x => x.state == State && x.district == dist && x.year == yy).OrderByDescending(x => x.row_id).ToList();//total list
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        dist_ddetails = AJE.obj_vw_water_wq_s_district_summary_template.Where(x => x.state == State && x.district == dist).OrderByDescending(x => x.row_id).ToList();//total list
                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        state_ddetails_month = AJE.obj_vw_water_wq_state_month_year_summary_template.Where(x => x.state == State && x.year == yy && x.month == mm).OrderByDescending(x => x.row_id).ToList();//total list
                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
                    {
                        state_ddetails_year = AJE.obj_vw_water_wq_state_year_summary_template.Where(x => x.state == State && x.year == yy).OrderByDescending(x => x.row_id).ToList();//total list
                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        state_ddetails = AJE.obj_vw_water_wq_state_summary_template.Where(x => x.state == State).OrderByDescending(x => x.row_id).ToList();//total list
                    }
                }

                if (ddetails_month.Count != 0)
                {
                    var jsonresult = Json(ddetails_month, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
                }
                else if (ddetails_year.Count != 0)
                {
                    var jsonresult = Json(ddetails_year, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
                }
                else if (ddetails.Count != 0)
                {
                    var jsonresult = Json(ddetails, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
                }
                else if (dist_ddetails_month.Count != 0)
                {
                    var jsonresult = Json(dist_ddetails_month, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
                }
                else if (dist_ddetails_year.Count != 0)
                {
                    var jsonresult = Json(dist_ddetails_year, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
                }
                else if (dist_ddetails.Count != 0)
                {
                    var jsonresult = Json(dist_ddetails, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
                }
                else if (state_ddetails_month.Count != 0)
                {
                    var jsonresult = Json(state_ddetails_month, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
                }
                else if (state_ddetails_year.Count != 0)
                {
                    var jsonresult = Json(state_ddetails_year, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
                }
                else if (state_ddetails.Count != 0)
                {
                    var jsonresult = Json(state_ddetails, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
                }
                else
                {
                    return Json("No Data", JsonRequestBehavior.AllowGet);
                }



            }
            catch (Exception Ex)
            {
                return Json(Ex.Message, JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult state_npmu_data_report_waterflow(string state, string dist, string block, string gram, string year, string month)
        {

            try
            {

                List<vw_waterflow_sd_block_month_year_summary_template> ddetails_month = new List<vw_waterflow_sd_block_month_year_summary_template>();
                List<vw_waterflow_sd_block_year_summary_template> ddetails_year = new List<vw_waterflow_sd_block_year_summary_template>();
                List<vw_waterflow_sd_block_summary_template> ddetails = new List<vw_waterflow_sd_block_summary_template>();

                List<vw_waterflow_s_district_month_year_summary_template> dist_ddetails_month = new List<vw_waterflow_s_district_month_year_summary_template>();
                List<vw_waterflow_s_district_year_summary_template> dist_ddetails_year = new List<vw_waterflow_s_district_year_summary_template>();
                List<vw_waterflow_s_district_summary_template> dist_ddetails = new List<vw_waterflow_s_district_summary_template>();

                List<vw_waterflow_state_month_year_summary_template> state_ddetails_month = new List<vw_waterflow_state_month_year_summary_template>();
                List<vw_waterflow_state_year_summary_template> state_ddetails_year = new List<vw_waterflow_state_year_summary_template>();
                List<vw_waterflow_state_summary_template> state_ddetails = new List<vw_waterflow_state_summary_template>();

                var State = state;
                var Dist = dist;
                var Block = block;
                var Gram = gram;
                int yy = Convert.ToInt32(year);
                int mm = Convert.ToInt32(month);
                if (State == "All" || Dist == "All" || Block == "All")
                {
                    if (Block == "All")
                    {
                        if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block == "All" && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            ddetails_month = AJE.obj_vw_waterflow_sd_block_month_year_summary_template.Where(x => x.state == State && x.district == dist && x.year == yy && x.month == mm).OrderBy(x => x.block).ToList();//total list
                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block == "All" && year != "0" && year != "" && year != null)
                        {
                            ddetails_year = AJE.obj_vw_waterflow_sd_block_year_summary_template.Where(x => x.state == State && x.district == dist && x.year == yy).OrderBy(x => x.block).ToList();//total list
                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                        {
                            ddetails = AJE.obj_vw_waterflow_sd_block_summary_template.Where(x => x.state == State && x.district == dist && Block == "All").OrderBy(x => x.block).ToList();//total list
                        }
                    }
                    else if (Dist == "All")
                    {
                        if (State != "0" && State != "" && State != null && Dist == "All" && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            dist_ddetails_month = AJE.obj_vw_waterflow_s_district_month_year_summary_template.Where(x => x.state == State && x.year == yy && x.month == mm).OrderBy(x => x.district).ToList();//total list
                        }
                        else if (State != "0" && State != "" && State != null && Dist == "All" && year != "0" && year != "" && year != null)
                        {
                            dist_ddetails_year = AJE.obj_vw_waterflow_s_district_year_summary_template.Where(x => x.state == State && x.year == yy).OrderBy(x => x.district).ToList();//total list
                        }
                        else if (State != "0" && State != "" && State != null && Dist == "All")
                        {
                            dist_ddetails = AJE.obj_vw_waterflow_s_district_summary_template.Where(x => x.state == State).OrderBy(x => x.district).ToList();//total list
                        }
                    }
                    else
                    {
                        if (year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            state_ddetails_month = AJE.obj_vw_waterflow_state_month_year_summary_template.Where(x => x.state != "Delhi_7" && x.year == yy && x.month == mm).OrderBy(x => x.state).ToList();//total list
                        }
                        else if (year != "0" && year != "" && year != null)
                        {
                            state_ddetails_year = AJE.obj_vw_waterflow_state_year_summary_template.Where(x => x.state != "Delhi_7" && x.year == yy).OrderBy(x => x.state).ToList();//total list
                        }
                        else
                        {
                            state_ddetails = AJE.obj_vw_waterflow_state_summary_template.Where(x=> x.state != "Delhi_7").OrderBy(x => x.state).ToList();//total list
                        }
                    }
                }
                else
                {
                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        ddetails_month = AJE.obj_vw_waterflow_sd_block_month_year_summary_template.Where(x => x.state == State && x.district == dist && x.block == block && x.year == yy && x.month == mm).OrderByDescending(x => x.row_id).ToList();//total list
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
                    {
                        ddetails_year = AJE.obj_vw_waterflow_sd_block_year_summary_template.Where(x => x.state == State && x.district == dist && x.block == block && x.year == yy).OrderByDescending(x => x.row_id).ToList();//total list
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        ddetails = AJE.obj_vw_waterflow_sd_block_summary_template.Where(x => x.state == State && x.district == dist && x.block == block).OrderByDescending(x => x.row_id).ToList();//total list
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        dist_ddetails_month = AJE.obj_vw_waterflow_s_district_month_year_summary_template.Where(x => x.state == State && x.district == dist && x.year == yy && x.month == mm).OrderByDescending(x => x.row_id).ToList();//total list
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
                    {
                        dist_ddetails_year = AJE.obj_vw_waterflow_s_district_year_summary_template.Where(x => x.state == State && x.district == dist && x.year == yy).OrderByDescending(x => x.row_id).ToList();//total list
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        dist_ddetails = AJE.obj_vw_waterflow_s_district_summary_template.Where(x => x.state == State && x.district == dist).OrderByDescending(x => x.row_id).ToList();//total list
                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        state_ddetails_month = AJE.obj_vw_waterflow_state_month_year_summary_template.Where(x => x.state == State && x.year == yy && x.month == mm).OrderByDescending(x => x.row_id).ToList();//total list
                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
                    {
                        state_ddetails_year = AJE.obj_vw_waterflow_state_year_summary_template.Where(x => x.state == State && x.year == yy).OrderByDescending(x => x.row_id).ToList();//total list
                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        state_ddetails = AJE.obj_vw_waterflow_state_summary_template.Where(x => x.state == State).OrderByDescending(x => x.row_id).ToList();//total list
                    }
                }

                if (ddetails_month.Count != 0)
                {
                    var jsonresult = Json(ddetails_month, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
                }
                else if (ddetails_year.Count != 0)
                {
                    var jsonresult = Json(ddetails_year, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
                }
                else if (ddetails.Count != 0)
                {
                    var jsonresult = Json(ddetails, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
                }
                else if (dist_ddetails_month.Count != 0)
                {
                    var jsonresult = Json(dist_ddetails_month, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
                }
                else if (dist_ddetails_year.Count != 0)
                {
                    var jsonresult = Json(dist_ddetails_year, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
                }
                else if (dist_ddetails.Count != 0)
                {
                    var jsonresult = Json(dist_ddetails, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
                }
                else if (state_ddetails_month.Count != 0)
                {
                    var jsonresult = Json(state_ddetails_month, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
                }
                else if (state_ddetails_year.Count != 0)
                {
                    var jsonresult = Json(state_ddetails_year, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
                }
                else if (state_ddetails.Count != 0)
                {
                    var jsonresult = Json(state_ddetails, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
                }
                else
                {
                    return Json("No Data", JsonRequestBehavior.AllowGet);
                }



            }
            catch (Exception Ex)
            {
                return Json(Ex.Message, JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult state_npmu_data_report_wellinvenorty(string state, string dist, string block, string gram, string year, string month)
        {

            try
            {

                List<vw_wellinventory_sd_block_month_year_summary_template> ddetails_month = new List<vw_wellinventory_sd_block_month_year_summary_template>();
                List<vw_wellinventory_sd_block_year_summary_template> ddetails_year = new List<vw_wellinventory_sd_block_year_summary_template>();
                List<vw_wellinventory_sd_block_summary_template> ddetails = new List<vw_wellinventory_sd_block_summary_template>();

                List<vw_wellinventory_s_district_month_year_summary_template> dist_ddetails_month = new List<vw_wellinventory_s_district_month_year_summary_template>();
                List<vw_wellinventory_s_district_year_summary_template> dist_ddetails_year = new List<vw_wellinventory_s_district_year_summary_template>();
                List<vw_wellinventory_s_district_summary_template> dist_ddetails = new List<vw_wellinventory_s_district_summary_template>();

                List<vw_wellinventory_state_month_year_summary_template> state_ddetails_month = new List<vw_wellinventory_state_month_year_summary_template>();
                List<vw_wellinventory_state_year_summary_template> state_ddetails_year = new List<vw_wellinventory_state_year_summary_template>();
                List<vw_wellinventory_state_summary_template> state_ddetails = new List<vw_wellinventory_state_summary_template>();

                var State = state;
                var Dist = dist;
                var Block = block;
                var Gram = gram;
                int yy = Convert.ToInt32(year);
                int mm = Convert.ToInt32(month);
                if (State == "All" || Dist == "All" || Block == "All")
                {
                    if (Block == "All")
                    {
                        if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block == "All" && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            ddetails_month = AJE.obj_vw_wellinventory_sd_block_month_year_summary_template.Where(x => x.state == State && x.district == dist && x.year == yy && x.month == mm).OrderBy(x => x.block).ToList();//total list
                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block == "All" && year != "0" && year != "" && year != null)
                        {
                            ddetails_year = AJE.obj_vw_wellinventory_sd_block_year_summary_template.Where(x => x.state == State && x.district == dist && x.year == yy).OrderBy(x => x.block).ToList();//total list
                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                        {
                            ddetails = AJE.obj_vw_wellinventory_sd_block_summary_template.Where(x => x.state == State && x.district == dist && Block == "All").OrderBy(x => x.block).ToList();//total list
                        }
                    }
                    else if (Dist == "All")
                    {
                        if (State != "0" && State != "" && State != null && Dist == "All" && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            dist_ddetails_month = AJE.obj_vw_wellinventory_s_district_month_year_summary_template.Where(x => x.state == State && x.year == yy && x.month == mm).OrderBy(x => x.district).ToList();//total list
                        }
                        else if (State != "0" && State != "" && State != null && Dist == "All" && year != "0" && year != "" && year != null)
                        {
                            dist_ddetails_year = AJE.obj_vw_wellinventory_s_district_year_summary_template.Where(x => x.state == State && x.year == yy).OrderBy(x => x.district).ToList();//total list
                        }
                        else if (State != "0" && State != "" && State != null && Dist == "All")
                        {
                            dist_ddetails = AJE.obj_vw_wellinventory_s_district_summary_template.Where(x => x.state == State).OrderBy(x => x.district).ToList();//total list
                        }
                    }
                     else
                    {
                        if (year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            state_ddetails_month = AJE.obj_vw_wellinventory_state_month_year_summary_template.Where(x => x.state != "Delhi_7" && x.year == yy && x.month == mm).OrderBy(x => x.state).ToList();//total list
                        }
                        else if (year != "0" && year != "" && year != null)
                        {
                            state_ddetails_year = AJE.obj_vw_wellinventory_state_year_summary_template.Where(x => x.state != "Delhi_7" && x.year == yy).OrderBy(x => x.state).ToList();//total list
                        }
                        else
                        {
                            state_ddetails = AJE.obj_vw_wellinventory_state_summary_template.Where(x=> x.state != "Delhi_7").OrderBy(x => x.state).ToList();//total list
                        }
                    }
                }
                else
                {
                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        ddetails_month = AJE.obj_vw_wellinventory_sd_block_month_year_summary_template.Where(x => x.state == State && x.district == dist && x.block == block && x.year == yy && x.month == mm).OrderByDescending(x => x.row_id).ToList();//total list
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
                    {
                        ddetails_year = AJE.obj_vw_wellinventory_sd_block_year_summary_template.Where(x => x.state == State && x.district == dist && x.block == block && x.year == yy).OrderByDescending(x => x.row_id).ToList();//total list
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        ddetails = AJE.obj_vw_wellinventory_sd_block_summary_template.Where(x => x.state == State && x.district == dist && x.block == block).OrderByDescending(x => x.row_id).ToList();//total list
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        dist_ddetails_month = AJE.obj_vw_wellinventory_s_district_month_year_summary_template.Where(x => x.state == State && x.district == dist && x.year == yy && x.month == mm).OrderByDescending(x => x.row_id).ToList();//total list
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
                    {
                        dist_ddetails_year = AJE.obj_vw_wellinventory_s_district_year_summary_template.Where(x => x.state == State && x.district == dist && x.year == yy).OrderByDescending(x => x.row_id).ToList();//total list
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        dist_ddetails = AJE.obj_vw_wellinventory_s_district_summary_template.Where(x => x.state == State && x.district == dist).OrderByDescending(x => x.row_id).ToList();//total list
                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        state_ddetails_month = AJE.obj_vw_wellinventory_state_month_year_summary_template.Where(x => x.state == State && x.year == yy && x.month == mm).OrderByDescending(x => x.row_id).ToList();//total list
                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
                    {
                        state_ddetails_year = AJE.obj_vw_wellinventory_state_year_summary_template.Where(x => x.state == State && x.year == yy).OrderByDescending(x => x.row_id).ToList();//total list
                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        state_ddetails = AJE.obj_vw_wellinventory_state_summary_template.Where(x => x.state == State).OrderByDescending(x => x.row_id).ToList();//total list
                    }
                }

                if (ddetails_month.Count != 0)
                {
                    var jsonresult = Json(ddetails_month, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
                }
                else if (ddetails_year.Count != 0)
                {
                    var jsonresult = Json(ddetails_year, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
                }
                else if (ddetails.Count != 0)
                {
                    var jsonresult = Json(ddetails, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
                }
                else if (dist_ddetails_month.Count != 0)
                {
                    var jsonresult = Json(dist_ddetails_month, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
                }
                else if (dist_ddetails_year.Count != 0)
                {
                    var jsonresult = Json(dist_ddetails_year, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
                }
                else if (dist_ddetails.Count != 0)
                {
                    var jsonresult = Json(dist_ddetails, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
                }
                else if (state_ddetails_month.Count != 0)
                {
                    var jsonresult = Json(state_ddetails_month, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
                }
                else if (state_ddetails_year.Count != 0)
                {
                    var jsonresult = Json(state_ddetails_year, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
                }
                else if (state_ddetails.Count != 0)
                {
                    var jsonresult = Json(state_ddetails, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
                }
                else
                {
                    return Json("No Data", JsonRequestBehavior.AllowGet);
                }



            }
            catch (Exception Ex)
            {
                return Json(Ex.Message, JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult state_npmu_data_report_social_event(string state, string dist, string block, string gram, string year, string month)
        {

            try
            {

                List<vw_socialmonitoring_sd_block_month_year_summary> ddetails_month = new List<vw_socialmonitoring_sd_block_month_year_summary>();
                List<vw_socialmonitoring_sd_block_year_summary> ddetails_year = new List<vw_socialmonitoring_sd_block_year_summary>();
                List<vw_socialmonitoring_sd_block_summary> ddetails = new List<vw_socialmonitoring_sd_block_summary>();

                List<vw_socialmonitoring_s_district_month_year_summary> dist_ddetails_month = new List<vw_socialmonitoring_s_district_month_year_summary>();
                List<vw_socialmonitoring_s_district_year_summary> dist_ddetails_year = new List<vw_socialmonitoring_s_district_year_summary>();
                List<vw_socialmonitoring_s_district_summary> dist_ddetails = new List<vw_socialmonitoring_s_district_summary>();

                List<vw_socialmonitoring_state_month_year_summary> state_ddetails_month = new List<vw_socialmonitoring_state_month_year_summary>();
                List<vw_socialmonitoring_state_year_summary> state_ddetails_year = new List<vw_socialmonitoring_state_year_summary>();
                List<vw_socialmonitoring_state_summary> state_ddetails = new List<vw_socialmonitoring_state_summary>();

                var State = state;
                var Dist = dist;
                var Block = block;
                var Gram = gram;
                int yy = Convert.ToInt32(year);
                int mm = Convert.ToInt32(month);
                if (State == "All" || Dist == "All" || Block == "All")
                {
                    if (Block == "All")
                    {
                        if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block == "All" && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            ddetails_month = AJE.obj_vw_socialmonitoring_sd_block_month_year_summary.Where(x => x.state == State && x.district == dist && x.year == yy && x.month == mm).OrderBy(x => x.block).ToList();//total list
                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block == "All" && year != "0" && year != "" && year != null)
                        {
                            ddetails_year = AJE.obj_vw_socialmonitoring_sd_block_year_summary.Where(x => x.state == State && x.district == dist && x.year == yy).OrderBy(x => x.block).ToList();//total list
                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                        {
                            ddetails = AJE.obj_vw_socialmonitoring_sd_block_summary.Where(x => x.state == State && x.district == dist && Block == "All").OrderBy(x => x.block).ToList();//total list
                        }
                    }
                    else if (Dist == "All")
                    {
                        if (State != "0" && State != "" && State != null && Dist == "All" && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            dist_ddetails_month = AJE.obj_vw_socialmonitoring_s_district_month_year_summary.Where(x => x.state == State && x.year == yy && x.month == mm).OrderBy(x => x.district).ToList();//total list
                        }
                        else if (State != "0" && State != "" && State != null && Dist == "All" && year != "0" && year != "" && year != null)
                        {
                            dist_ddetails_year = AJE.obj_vw_socialmonitoring_s_district_year_summary.Where(x => x.state == State && x.year == yy).OrderBy(x => x.district).ToList();//total list
                        }
                        else if (State != "0" && State != "" && State != null && Dist == "All")
                        {
                            dist_ddetails = AJE.obj_vw_socialmonitoring_s_district_summary.Where(x => x.state == State).OrderBy(x => x.district).ToList();//total list
                        }
                    }
                     else
                    {
                        if (year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            state_ddetails_month = AJE.obj_vw_socialmonitoring_state_month_year_summary.Where(x => x.state != "Delhi_7" && x.year == yy && x.month == mm).OrderBy(x => x.state).ToList();//total list
                        }
                        else if (year != "0" && year != "" && year != null)
                        {
                            state_ddetails_year = AJE.obj_vw_socialmonitoring_state_year_summary.Where(x => x.state != "Delhi_7" && x.year == yy).OrderBy(x => x.state).ToList();//total list
                        }
                        else
                        {
                            state_ddetails = AJE.obj_vw_socialmonitoring_state_summary.Where(x=> x.state != "Delhi_7").OrderBy(x => x.state).ToList();//total list
                        }
                    }
                }
                else
                {
                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        ddetails_month = AJE.obj_vw_socialmonitoring_sd_block_month_year_summary.Where(x => x.state == State && x.district == dist && x.block == block && x.year == yy && x.month == mm).OrderByDescending(x => x.row_id).ToList();//total list
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
                    {
                        ddetails_year = AJE.obj_vw_socialmonitoring_sd_block_year_summary.Where(x => x.state == State && x.district == dist && x.block == block && x.year == yy).OrderByDescending(x => x.row_id).ToList();//total list
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        ddetails = AJE.obj_vw_socialmonitoring_sd_block_summary.Where(x => x.state == State && x.district == dist && x.block == block).OrderByDescending(x => x.row_id).ToList();//total list
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        dist_ddetails_month = AJE.obj_vw_socialmonitoring_s_district_month_year_summary.Where(x => x.state == State && x.district == dist && x.year == yy && x.month == mm).OrderByDescending(x => x.row_id).ToList();//total list
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
                    {
                        dist_ddetails_year = AJE.obj_vw_socialmonitoring_s_district_year_summary.Where(x => x.state == State && x.district == dist && x.year == yy).OrderByDescending(x => x.row_id).ToList();//total list
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        dist_ddetails = AJE.obj_vw_socialmonitoring_s_district_summary.Where(x => x.state == State && x.district == dist).OrderByDescending(x => x.row_id).ToList();//total list
                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        state_ddetails_month = AJE.obj_vw_socialmonitoring_state_month_year_summary.Where(x => x.state == State && x.year == yy && x.month == mm).OrderByDescending(x => x.row_id).ToList();//total list
                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
                    {
                        state_ddetails_year = AJE.obj_vw_socialmonitoring_state_year_summary.Where(x => x.state == State && x.year == yy).OrderByDescending(x => x.row_id).ToList();//total list
                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        state_ddetails = AJE.obj_vw_socialmonitoring_state_summary.Where(x => x.state == State).OrderByDescending(x => x.row_id).ToList();//total list
                    }
                }

                if (ddetails_month.Count != 0)
                {
                    var jsonresult = Json(ddetails_month, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
                }
                else if (ddetails_year.Count != 0)
                {
                    var jsonresult = Json(ddetails_year, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
                }
                else if (ddetails.Count != 0)
                {
                    var jsonresult = Json(ddetails, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
                }
                else if (dist_ddetails_month.Count != 0)
                {
                    var jsonresult = Json(dist_ddetails_month, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
                }
                else if (dist_ddetails_year.Count != 0)
                {
                    var jsonresult = Json(dist_ddetails_year, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
                }
                else if (dist_ddetails.Count != 0)
                {
                    var jsonresult = Json(dist_ddetails, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
                }
                else if (state_ddetails_month.Count != 0)
                {
                    var jsonresult = Json(state_ddetails_month, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
                }
                else if (state_ddetails_year.Count != 0)
                {
                    var jsonresult = Json(state_ddetails_year, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
                }
                else if (state_ddetails.Count != 0)
                {
                    var jsonresult = Json(state_ddetails, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
                }
                else
                {
                    return Json("No Data", JsonRequestBehavior.AllowGet);
                }



            }
            catch (Exception Ex)
            {
                return Json(Ex.Message, JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult state_npmu_data_report_geo(string state, string dist, string block, string gram, string year, string month)
        {

            try
            {

                List<vw_geo_sd_block_month_year_summary> ddetails_month = new List<vw_geo_sd_block_month_year_summary>();
                List<vw_geo_sd_block_year_summary> ddetails_year = new List<vw_geo_sd_block_year_summary>();
                List<vw_geo_sd_block_summary> ddetails = new List<vw_geo_sd_block_summary>();

                List<vw_geo_s_district_month_year_summary> dist_ddetails_month = new List<vw_geo_s_district_month_year_summary>();
                List<vw_geo_s_district_year_summary> dist_ddetails_year = new List<vw_geo_s_district_year_summary>();
                List<vw_geo_s_district_summary> dist_ddetails = new List<vw_geo_s_district_summary>();

                List<vw_geo_state_month_year_summary> state_ddetails_month = new List<vw_geo_state_month_year_summary>();
                List<vw_geo_state_year_summary> state_ddetails_year = new List<vw_geo_state_year_summary>();
                List<vw_geo_state_summary> state_ddetails = new List<vw_geo_state_summary>();

                var State = state;
                var Dist = dist;
                var Block = block;
                var Gram = gram;
                int yy = Convert.ToInt32(year);
                int mm = Convert.ToInt32(month);
                if (State == "All" || Dist == "All" || Block == "All")
                {
                    if (Block == "All")
                    {
                        if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block == "All" && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            ddetails_month = AJE.obj_vw_geo_sd_block_month_year_summary.Where(x => x.state == State && x.district == dist && x.year == yy && x.month == mm).OrderBy(x => x.block).ToList();//total list
                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block == "All" && year != "0" && year != "" && year != null)
                        {
                            ddetails_year = AJE.obj_vw_geo_sd_block_year_summary.Where(x => x.state == State && x.district == dist && x.year == yy).OrderBy(x => x.block).ToList();//total list
                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                        {
                            ddetails = AJE.obj_vw_geo_sd_block_summary.Where(x => x.state == State && x.district == dist && Block == "All").OrderBy(x => x.block).ToList();//total list
                        }
                    }
                    else if (Dist == "All")
                    {
                        if (State != "0" && State != "" && State != null && Dist == "All" && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            dist_ddetails_month = AJE.obj_vw_geo_s_district_month_year_summary.Where(x => x.state == State && x.year == yy && x.month == mm).OrderBy(x => x.district).ToList();//total list
                        }
                        else if (State != "0" && State != "" && State != null && Dist == "All" && year != "0" && year != "" && year != null)
                        {
                            dist_ddetails_year = AJE.obj_vw_geo_s_district_year_summary.Where(x => x.state == State && x.year == yy).OrderBy(x => x.district).ToList();//total list
                        }
                        else if (State != "0" && State != "" && State != null && Dist == "All")
                        {
                            dist_ddetails = AJE.obj_vw_geo_s_district_summary.Where(x => x.state == State).OrderBy(x => x.district).ToList();//total list
                        }
                    }
                     else
                    {
                        if (year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            state_ddetails_month = AJE.obj_vw_geo_state_month_year_summary.Where(x => x.state != "Delhi_7" && x.year == yy && x.month == mm).OrderBy(x => x.state).ToList();//total list
                        }
                        else if (year != "0" && year != "" && year != null)
                        {
                            state_ddetails_year = AJE.obj_vw_geo_state_year_summary.Where(x => x.state != "Delhi_7" && x.year == yy).OrderBy(x => x.state).ToList();//total list
                        }
                        else
                        {
                            state_ddetails = AJE.obj_vw_geo_state_summary.Where(x=>x.state != "Delhi_7").OrderBy(x => x.state).ToList();//total list
                        }
                    }
                }
                else
                {
                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        ddetails_month = AJE.obj_vw_geo_sd_block_month_year_summary.Where(x => x.state == State && x.district == dist && x.block == block && x.year == yy && x.month == mm).OrderByDescending(x => x.row_id).ToList();//total list
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
                    {
                        ddetails_year = AJE.obj_vw_geo_sd_block_year_summary.Where(x => x.state == State && x.district == dist && x.block == block && x.year == yy).OrderByDescending(x => x.row_id).ToList();//total list
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        ddetails = AJE.obj_vw_geo_sd_block_summary.Where(x => x.state == State && x.district == dist && x.block == block).OrderByDescending(x => x.row_id).ToList();//total list
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        dist_ddetails_month = AJE.obj_vw_geo_s_district_month_year_summary.Where(x => x.state == State && x.district == dist && x.year == yy && x.month == mm).OrderByDescending(x => x.row_id).ToList();//total list
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
                    {
                        dist_ddetails_year = AJE.obj_vw_geo_s_district_year_summary.Where(x => x.state == State && x.district == dist && x.year == yy).OrderByDescending(x => x.row_id).ToList();//total list
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        dist_ddetails = AJE.obj_vw_geo_s_district_summary.Where(x => x.state == State && x.district == dist).OrderByDescending(x => x.row_id).ToList();//total list
                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        state_ddetails_month = AJE.obj_vw_geo_state_month_year_summary.Where(x => x.state == State && x.year == yy && x.month == mm).OrderByDescending(x => x.row_id).ToList();//total list
                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
                    {
                        state_ddetails_year = AJE.obj_vw_geo_state_year_summary.Where(x => x.state == State && x.year == yy).OrderByDescending(x => x.row_id).ToList();//total list
                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        state_ddetails = AJE.obj_vw_geo_state_summary.Where(x => x.state == State).OrderByDescending(x => x.row_id).ToList();//total list
                    }
                }

                if (ddetails_month.Count != 0)
                {
                    var jsonresult = Json(ddetails_month, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
                }
                else if (ddetails_year.Count != 0)
                {
                    var jsonresult = Json(ddetails_year, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
                }
                else if (ddetails.Count != 0)
                {
                    var jsonresult = Json(ddetails, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
                }
                else if (dist_ddetails_month.Count != 0)
                {
                    var jsonresult = Json(dist_ddetails_month, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
                }
                else if (dist_ddetails_year.Count != 0)
                {
                    var jsonresult = Json(dist_ddetails_year, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
                }
                else if (dist_ddetails.Count != 0)
                {
                    var jsonresult = Json(dist_ddetails, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
                }
                else if (state_ddetails_month.Count != 0)
                {
                    var jsonresult = Json(state_ddetails_month, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
                }
                else if (state_ddetails_year.Count != 0)
                {
                    var jsonresult = Json(state_ddetails_year, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
                }
                else if (state_ddetails.Count != 0)
                {
                    var jsonresult = Json(state_ddetails, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
                }
                else
                {
                    return Json("No Data", JsonRequestBehavior.AllowGet);
                }



            }
            catch (Exception Ex)
            {
                return Json(Ex.Message, JsonRequestBehavior.AllowGet);
            }
        }


        public ActionResult Well_Inventory()
        {

            return View();
        }
        public ActionResult Exceldata()
        {

            return View();
        }
        public ActionResult approve_data()
        {

            return View();
        }
        public ActionResult Master_page()
        {
            Session["sUploadDirectory"] = sUploadDirectory;
            ViewBag.Total = totalwell;
            return View();
        }

        public ActionResult Excel_export_all()
        {

            return View();
        }
        [HttpPost]
        public ActionResult StateLevel_Dropdown(string StateName, string Dist, string Block, string Gram, string Year, string Month)
        {
            string year = "";
            if (Year == "0")
            {
                year = "";
            }
            else
            {
                year = Year;
            }

            Session["gstate"] = StateName.TrimEnd('\n').TrimEnd(' ');
            Session["gdist"] = Dist.TrimEnd('\n').TrimEnd(' ');
            Session["gblock"] = Block.TrimEnd('\n').TrimEnd(' ');
            Session["ggram"] = Gram.TrimEnd('\n').TrimEnd(' ');
            Session["year"] = year;
            Session["month"] = Month;
            return Json("Yes", JsonRequestBehavior.AllowGet);
        }

        public ActionResult Mapview_MADB(string id)
        {
            var ID = Convert.ToInt32(id);
            var Details = AJE.obj_gwl_meta.Where(x => x.id == ID).FirstOrDefault();
            if (Details != null)
            {
                var latitude = Details.latitude;
                var longitude = Details.longitude;
                ViewBag.latitude = latitude;
                ViewBag.longitude = longitude;
                return View();
            }
            else
            {
                ViewBag.latitude = "0";
                ViewBag.longitude = "0";
                return View();
            }
        }


        [HttpGet]
        public ActionResult Well_Inventory_Get()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<wellinventory> ddetails = new List<wellinventory>();

                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();

                    if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null && Gram != "" && Gram != null)
                    {
                        ddetails = AJE.obj_wellinventory.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram).ToList();//total list

                    }
                    else if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null)
                    {
                        ddetails = AJE.obj_wellinventory.Where(x => x.state == State && x.district == Dist && x.block == Block).ToList();//total list

                    }
                    else if (State != "" && State != null && Dist != "" && Dist != null)
                    {
                        ddetails = AJE.obj_wellinventory.Where(x => x.state == State && x.district == Dist).ToList();//total list

                    }
                    else if (State != "" && State != null)
                    {
                        ddetails = AJE.obj_wellinventory.Where(x => x.state == State).ToList();//total list

                    }
                    return Json(ddetails, JsonRequestBehavior.AllowGet);
                }
                catch (Exception Ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }

            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
                // return RedirectToAction("WSP_GWM_HOME", "WSPNew");
            }
        }

        [HttpPost]

        public ActionResult Fetch_Well_Inventory(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<Pagenum>(Data);
                    List<vw_wellinventory> ddetails = new List<vw_wellinventory>();
                    var State = result.statename;
                    var Dist = result.districtname;
                    var Block = result.blockname;
                    var Gram = result.gpname;
                    var year = result.year;
                    var month = result.month;
                    var PageNumber = result.PageNumber;

                    int recordsToSkip = (PageNumber - 1) * 100;

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        ddetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.fyyear == year && x.fymonth == month).OrderByDescending(x => x.gid).Skip(recordsToSkip).Take(100).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.fyyear == year).OrderByDescending(x => x.gid).Skip(recordsToSkip).Take(100).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        ddetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram).OrderByDescending(x => x.gid).Skip(recordsToSkip).Take(100).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        ddetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year && x.fymonth == month).OrderByDescending(x => x.gid).Skip(recordsToSkip).Take(100).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year).OrderByDescending(x => x.gid).Skip(recordsToSkip).Take(100).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        ddetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist && x.block == Block).OrderByDescending(x => x.gid).Skip(recordsToSkip).Take(100).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        ddetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist && x.fyyear == year && x.fymonth == month).OrderByDescending(x => x.gid).Skip(recordsToSkip).Take(100).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist && x.fyyear == year).OrderByDescending(x => x.gid).Skip(recordsToSkip).Take(100).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        ddetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist).OrderByDescending(x => x.gid).Skip(recordsToSkip).Take(100).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        ddetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.fyyear == year && x.fymonth == month).OrderByDescending(x => x.gid).Skip(recordsToSkip).Take(100).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.fyyear == year).OrderByDescending(x => x.gid).Skip(recordsToSkip).Take(100).ToList();

                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        ddetails = AJE.obj_vw_wellinventory.Where(x => x.state == State).OrderByDescending(x => x.gid).Skip(recordsToSkip).Take(100).ToList();

                    }


                    //var totalwellss = Math.Ceiling(ddetails.Count() / 100.0);
                    //Session["PageNumber"] = PageNumber;
                    //ddetails = ddetails.Skip((PageNumber - 1) * 100).Take(100).OrderByDescending(x => x.gid).ToList();
                    //return Json(ddetails, JsonRequestBehavior.AllowGet);


                    var jsonresult = Json(ddetails, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
                }
                catch (Exception Ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("", JsonRequestBehavior.AllowGet);

            }

        }

        [HttpPost]
        public ActionResult totalFetch_Well_Inventory(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<Pagenum>(Data);

                    var State = result.statename == "0" ? null : result.statename;
                    var Dist = result.districtname == "0" ? null : result.districtname;
                    var Block = result.blockname == "0" ? null : result.blockname;
                    var Gram = result.gpname == "0" ? null : result.gpname;
                    var year = result.year == "0" ? null : result.year;
                    var month = result.month == "0" ? null : result.month;
                    var PageNumber = result.PageNumber;

                    int gp_count = 0;
                    List<vw_wellinventory> ddetails = new List<vw_wellinventory>();

                    if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(Dist) && !string.IsNullOrEmpty(Block) && !string.IsNullOrEmpty(Gram) && !string.IsNullOrEmpty(year) && !string.IsNullOrEmpty(month))
                    {
                        ddetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.fyyear == year && x.fymonth == month).OrderByDescending(c=>c.gid).ToList();
                    }
                    else if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(Dist) && !string.IsNullOrEmpty(Block) && !string.IsNullOrEmpty(Gram) && !string.IsNullOrEmpty(year))
                    {
                        ddetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.fyyear == year).OrderByDescending(c => c.gid).ToList();
                    }
                    else if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(Dist) && !string.IsNullOrEmpty(Block) && !string.IsNullOrEmpty(Gram))
                    {
                        ddetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram).OrderByDescending(c => c.gid).ToList();
                    }
                    else if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(Dist) && !string.IsNullOrEmpty(Block) && !string.IsNullOrEmpty(year) && !string.IsNullOrEmpty(month))
                    {
                        ddetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year && x.fymonth == month).OrderByDescending(c => c.gid).ToList();
                    }
                    else if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(Dist) && !string.IsNullOrEmpty(Block) && !string.IsNullOrEmpty(year))
                    {
                        ddetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year ).OrderByDescending(c => c.gid).ToList();
                    }
                    else if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(Dist) && !string.IsNullOrEmpty(Block))
                    {
                        ddetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist && x.block == Block ).OrderByDescending(c => c.gid).ToList();
                    }
                    else if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(Dist) && !string.IsNullOrEmpty(year) && !string.IsNullOrEmpty(month))
                    {
                        ddetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist && x.fyyear == year && x.fymonth == month).OrderByDescending(c => c.gid).ToList();
                    }
                    else if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(Dist) && !string.IsNullOrEmpty(year))
                    {
                        ddetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist  && x.fyyear == year ).OrderByDescending(c => c.gid).ToList();
                    }
                    else if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(Dist))
                    {
                        ddetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist).OrderByDescending(c => c.gid).ToList();
                    }
                    else if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(year) && !string.IsNullOrEmpty(month))
                    {
                        ddetails = AJE.obj_vw_wellinventory.Where(x => x.state == State&& x.fyyear == year && x.fymonth == month).OrderByDescending(c => c.gid).ToList();
                    }
                    else if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(year))
                    {
                        ddetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.fyyear == year ).OrderByDescending(c => c.gid).ToList();
                    }
                    else if (!string.IsNullOrEmpty(State))
                    {
                        ddetails = AJE.obj_vw_wellinventory.Where(x => x.state == State ).OrderByDescending(c => c.gid).ToList();
                    }

                    if (ddetails.Count != 0)
                    {
                        gp_count = ddetails.Select(x => x.gp).Distinct().Count();
                        var Totalpages = Math.Ceiling(ddetails.Count / 100.0);
                        var jsonresult = Json(ddetails.Count + "," + Totalpages + "," + gp_count, JsonRequestBehavior.AllowGet);
                        jsonresult.MaxJsonLength = int.MaxValue;
                        return jsonresult;
                        //return Json(new { exetotal = Final_data.Count, Totalpages, gp = gp_count }, JsonRequestBehavior.AllowGet);
                    }
                    
                    else
                    {

                        var jsonresult = Json(0 + "," + 0 + "," + 0, JsonRequestBehavior.AllowGet);
                        jsonresult.MaxJsonLength = int.MaxValue;
                        return jsonresult;
                    }
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
        [HttpPost]

        public ActionResult totalFetch_Well_Inventory_old(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<Pagenum>(Data);
                    List<vw_wellinventory> ddetails_a = new List<vw_wellinventory>();
                    List<vw_wellinventory> ddetails_gp = new List<vw_wellinventory>();
                    var State = result.statename;
                    var Dist = result.districtname;
                    var Block = result.blockname;
                    var Gram = result.gpname;
                    var year = result.year;
                    var month = result.month;
                    var PageNumber = result.PageNumber;

                    int ddetails_g = 0;
                    int ddetails = 0;

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        ddetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.fyyear == year && x.fymonth == month).ToList().Count();
                        ddetails_g = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.fyyear == year && x.fymonth == month).GroupBy(c => c.gp).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.fyyear == year).ToList().Count();
                        ddetails_g = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.fyyear == year).GroupBy(c => c.gp).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        ddetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram).ToList().Count();
                        ddetails_g = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram).GroupBy(c => c.gp).ToList().Count();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        ddetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year && x.fymonth == month).ToList().Count();
                        ddetails_g = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year && x.fymonth == month).GroupBy(c => c.gp).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year).ToList().Count();
                        ddetails_g = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year).GroupBy(c => c.gp).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        ddetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist && x.block == Block).ToList().Count();
                        ddetails_g = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist && x.block == Block).GroupBy(c => c.gp).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        ddetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist && x.fyyear == year && x.fymonth == month).ToList().Count();
                        ddetails_g = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist && x.fyyear == year && x.fymonth == month).GroupBy(c => c.gp).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist && x.fyyear == year).ToList().Count();
                        ddetails_g = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist && x.fyyear == year).GroupBy(c => c.gp).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        ddetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist).ToList().Count();
                        ddetails_g = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist).GroupBy(c => c.gp).ToList().Count();

                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        ddetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.fyyear == year && x.fymonth == month).ToList().Count();
                        ddetails_g = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.fyyear == year && x.fymonth == month).GroupBy(c => c.gp).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.fyyear == year).ToList().Count();
                        ddetails_g = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.fyyear == year).GroupBy(c => c.gp).ToList().Count();

                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        ddetails = AJE.obj_vw_wellinventory.Where(x => x.state == State).ToList().Count();
                        ddetails_g = AJE.obj_vw_wellinventory.Where(x => x.state == State).GroupBy(c => c.gp).ToList().Count();

                    }

                    var well_count = ddetails;
                    var gp_count = ddetails_g;
                    var totalwellss = Math.Ceiling(ddetails / 100.0);


                    var jsonresult = Json(well_count + "," + totalwellss + "," + gp_count, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
                }
                catch (Exception Ex)
                {

                    abhy_tbl_error error_data = new abhy_tbl_error();
                    error_data.error_test = Ex.Message;
                    error_data.user_email = Ex.StackTrace;
                    error_data.user_type = "wellinventory";
                    error_data.error_count = "1";
                    error_data.date_time = DateTime.Now.ToString();
                    ABE.obj_abhy_tbl_error.Add(error_data);
                    ABE.SaveChanges();
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("", JsonRequestBehavior.AllowGet);

            }

        }

        [HttpPost]
        public ActionResult UpdateData_WI(int? id3, HttpPostedFileBase editImage, string editVolumetric, string editPump, string editUse, string editDepthLevel, string editWwp, string editHeight, string editDepth, string editDiameter, string editOwnerName, string editWellType, string editWellID, string editDate, string editLongitude, string editLatitude, string editLocation, string editVillage)
        {
            try
            {

                var state = Session["gstate"].ToString();
                var dist = Session["gdist"].ToString();

                var block = Session["gblock"].ToString();
                var gram = Session["ggram"].ToString();

                //string state = Session["Mstate"].ToString();
                //string dist = Session["Mdist"].ToString();
                //string block = Session["Mblock"].ToString();
                //string gram = Session["Mgram"].ToString();


                var Dataa = AJE.obj_wellinventory.Where(x => x.gid == id3).FirstOrDefault();

                if (Dataa != null)
                {


                    Dataa.state = state;
                    Dataa.district = dist;
                    Dataa.block = block;
                    Dataa.gp = gram;
                    Dataa.gid = id3;
                    Dataa.village = editVillage;
                    Dataa.locationdetails = editLocation;
                    Dataa.latitude = editLatitude;
                    Dataa.date = editDate;
                    Dataa.longitude = editLongitude;
                    Dataa.wellno = editWellID;
                    Dataa.welltype = editWellType;
                    Dataa.ownername = editOwnerName;
                    Dataa.welldiameter = editDiameter;
                    Dataa.welldepth = editDepth;
                    Dataa.measuringpoint = editHeight;
                    Dataa.wellwaterpotable = editWwp;
                    Dataa.waterleveldepth = editDepthLevel;
                    Dataa.use = editUse;
                    Dataa.pumpinstalled = editPump;
                    Dataa.electricmeterselecteditem = editVolumetric;


                    if (editImage != null)
                    {
                        if (editImage.FileName != null)
                        {

                            string filename = Path.GetFileNameWithoutExtension(editImage.FileName);
                            string ext = Path.GetExtension(editImage.FileName);
                            filename = filename + ext;
                            Dataa.image = "/imageakash/" + filename;
                            filename = Path.Combine(Server.MapPath("/imageakash/"), filename);
                            editImage.SaveAs(filename);
                        }
                    }
                    AJE.Entry(Dataa).State = EntityState.Modified;
                    int A = AJE.SaveChanges();
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
                return Json("unsuccessful update");

            }
            return Json("Invalid");
        }

        // abhi2504

        [HttpPost]
        public ActionResult DeleteData_WI(int? ID = 0)
        {
            var data = AJE.obj_wellinventory.Find(ID);
            AJE.obj_wellinventory.Remove(data);
            int A = AJE.SaveChanges();
            if (A > 0)
            {
                return Json("Deleted Successfully");
            }
            else
            {
                return Json("Not Deleted");
            }

        }

        public ActionResult Water_Level()
        {

            return View();
        }

        // abhi2504
        public ActionResult Water_Quality()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Fetch_Water_Quality(string Data, string year1, string month1)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<Pagenum>(Data);

                    var State = result.statename;
                    var Dist = result.districtname;
                    var Block = result.blockname;
                    var Gram = result.gpname;
                    var year = year1.ToString();
                    var month = month1.ToString();
                    var PageNumber = result.PageNumber;
                    var StateOfficer = Session["Officer"].ToString();

                    List<vw_water> ddetails = new List<vw_water>();
                    List<vw_water_meta_data> ddetails_meta_data = new List<vw_water_meta_data>();
                    List<vw_water_meta_data> gp_count = new List<vw_water_meta_data>();
                    List<dynamic> ddetails_new = new List<dynamic>();

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        gp_count = AJE.obj_vw_water_meta_data.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.fyyear == year && x.fymonth == month).OrderByDescending(c => c.id).ToList();
                        var uniqueGpNames = gp_count.GroupBy(c => c.well_id).Select(g => g.Key).ToList();
                        foreach (var gpName in uniqueGpNames)
                        {
                            var matchedData = AJE.obj_vw_water_meta_data.FirstOrDefault(x => x.well_id == gpName);

                            if (matchedData != null)
                            {
                                ddetails_meta_data.Add(matchedData);
                            }
                        }

                    }

                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
                    {
                        gp_count = AJE.obj_vw_water_meta_data.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.fyyear == year).OrderByDescending(c => c.id).ToList();
                        var uniqueGpNames = gp_count.GroupBy(c => c.well_id).Select(g => g.Key).ToList();
                        foreach (var gpName in uniqueGpNames)
                        {
                            var matchedData = AJE.obj_vw_water_meta_data.FirstOrDefault(x => x.well_id == gpName);

                            if (matchedData != null)
                            {
                                ddetails_meta_data.Add(matchedData);
                            }
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        ddetails = AJE.obj_vw_water.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram).OrderByDescending(c => c.id).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        gp_count = AJE.obj_vw_water_meta_data.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year && x.fymonth == month).OrderByDescending(c => c.id).ToList();
                        var uniqueGpNames = gp_count.GroupBy(c => c.well_id).Select(g => g.Key).ToList();
                        foreach (var gpName in uniqueGpNames)
                        {
                            var matchedData = AJE.obj_vw_water_meta_data.FirstOrDefault(x => x.well_id == gpName);

                            if (matchedData != null)
                            {
                                ddetails_meta_data.Add(matchedData);
                            }
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
                    {
                        gp_count = AJE.obj_vw_water_meta_data.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year).OrderByDescending(c => c.id).ToList();
                        var uniqueGpNames = gp_count.GroupBy(c => c.well_id).Select(g => g.Key).ToList();
                        foreach (var gpName in uniqueGpNames)
                        {
                            var matchedData = AJE.obj_vw_water_meta_data.FirstOrDefault(x => x.well_id == gpName);

                            if (matchedData != null)
                            {
                                ddetails_meta_data.Add(matchedData);
                            }
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        ddetails = AJE.obj_vw_water.Where(x => x.state == State && x.district == Dist && x.block == Block).OrderByDescending(c => c.id).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        gp_count = AJE.obj_vw_water_meta_data.Where(x => x.state == State && x.district == Dist && x.fyyear == year && x.fymonth == month).OrderByDescending(c => c.id).ToList();
                        var uniqueGpNames = gp_count.GroupBy(c => c.well_id).Select(g => g.Key).ToList();
                        foreach (var gpName in uniqueGpNames)
                        {
                            var matchedData = AJE.obj_vw_water_meta_data.FirstOrDefault(x => x.well_id == gpName);

                            if (matchedData != null)
                            {
                                ddetails_meta_data.Add(matchedData);
                            }
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
                    {
                        gp_count = AJE.obj_vw_water_meta_data.Where(x => x.state == State && x.district == Dist && x.fyyear == year).OrderByDescending(c => c.id).ToList();
                        var uniqueGpNames = gp_count.GroupBy(c => c.well_id).Select(g => g.Key).ToList();
                        foreach (var gpName in uniqueGpNames)
                        {
                            var matchedData = AJE.obj_vw_water_meta_data.FirstOrDefault(x => x.well_id == gpName);

                            if (matchedData != null)
                            {
                                ddetails_meta_data.Add(matchedData);
                            }
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        ddetails = AJE.obj_vw_water.Where(x => x.state == State && x.district == Dist).OrderByDescending(c => c.id).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        gp_count = AJE.obj_vw_water_meta_data.Where(x => x.state == State && x.fyyear == year && x.fymonth == month).OrderByDescending(c => c.id).ToList();
                        var uniqueGpNames = gp_count.GroupBy(c => c.well_id).Select(g => g.Key).ToList();
                        foreach (var gpName in uniqueGpNames)
                        {
                            var matchedData = AJE.obj_vw_water_meta_data.FirstOrDefault(x => x.well_id == gpName);

                            if (matchedData != null)
                            {
                                ddetails_meta_data.Add(matchedData);
                            }
                        }
                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
                    {
                        gp_count = AJE.obj_vw_water_meta_data.Where(x => x.state == State && x.fyyear == year).OrderByDescending(c => c.id).ToList();
                        var uniqueGpNames = gp_count.GroupBy(c => c.well_id).Select(g => g.Key).ToList();
                        foreach (var gpName in uniqueGpNames)
                        {
                            var matchedData = AJE.obj_vw_water_meta_data.FirstOrDefault(x => x.well_id == gpName);

                            if (matchedData != null)
                            {
                                ddetails_meta_data.Add(matchedData);
                            }
                        }
                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        ddetails = AJE.obj_vw_water.Where(x => x.state == State).OrderByDescending(c => c.id).ToList();

                    }
                    if (ddetails.Count != 0)
                    {
                        ViewBag.Totalpages = Math.Ceiling(ddetails.Count() / 100.0);
                        Session["PageNumber"] = PageNumber;
                        ddetails = ddetails.Skip((PageNumber - 1) * 100).Take(100).OrderByDescending(x => x.id).ToList();

                        for (int i = 0; i < ddetails.Count; i++)
                        {
                            vw_water_new obj1 = new vw_water_new();
                            int Check_id = ddetails[i].id;
                            var details5 = AJE.obj_water_wq_data.Where(x => x.water_qi_meta_id == Check_id).OrderByDescending(x => x.status_data).ToList();
                            var status_data = "";

                            if (details5.Count != 0)
                            {
                                if (StateOfficer == "District Level Nodal Officer")
                                {
                                    for (int j = 0; j < details5.Count; j++)
                                    {
                                        status_data = details5[j].status_data;
                                        if (status_data == null || status_data == "")
                                        {
                                            status_data = "";
                                            break;
                                        }
                                    }
                                }
                                else if (StateOfficer == "State Level Nodal Officer")
                                {
                                    for (int j = 0; j < details5.Count; j++)
                                    {
                                        status_data = details5[j].status_data;
                                        if (status_data == null || status_data == "")
                                        {
                                            status_data = "";
                                           // break;
                                        }
                                        else if (status_data == "State")
                                        {
                                            status_data = "State";
                                            break;
                                        }
                                        else
                                        {
                                            status_data = "Approve";
                                            break;
                                        }
                                    }
                                }
                                else
                                {
                                    for (int j = 0; j < details5.Count; j++)
                                    {
                                        status_data = details5[j].status_data;
                                        if (status_data == null || status_data == "")
                                        {
                                            status_data = "";
                                            break;
                                        }
                                    }
                                }
                            }
                            else
                            {
                                status_data = "No data";
                            }

                            var other_source = ddetails[i].others;
                            if (other_source == null)
                            {
                                other_source = "";

                            }
                            else
                            {
                                other_source = ddetails[i].others;
                            }

                            var mbgl_well_depth = ddetails[i].well_depth_mbgl;
                            if (mbgl_well_depth == null)
                            {
                                mbgl_well_depth = "";

                            }
                            else
                            {
                                mbgl_well_depth = ddetails[i].well_depth_mbgl;
                            }

                            obj1.id = ddetails[i].id;
                            obj1.state = ddetails[i].state;
                            obj1.district = ddetails[i].district;
                            obj1.block = ddetails[i].block;
                            obj1.gp = ddetails[i].gp;
                            obj1.village = ddetails[i].village;
                            obj1.location_details = ddetails[i].location_details;
                            obj1.latitude = ddetails[i].latitude;
                            obj1.longitude = ddetails[i].longitude;
                            obj1.type_of_well = ddetails[i].type_of_well;
                            //obj1.others = ddetails[i].others;
                            obj1.others = other_source;
                            obj1.entry_time = ddetails[i].entry_time;
                            //obj1.well_depth_mbgl = ddetails[i].well_depth_mbgl;
                            obj1.well_depth_mbgl = mbgl_well_depth;
                            obj1.well_id = ddetails[i].well_id;
                            obj1.status = ddetails[i].status;
                            obj1.reject_remark = ddetails[i].reject_remark;
                            obj1.fyyear = ddetails[i].fyyear;
                            obj1.fymonth = ddetails[i].fymonth;
                            obj1.status_data = status_data;
                            ddetails_new.Add(obj1);

                        }
                        var jsonresult = Json(ddetails_new, JsonRequestBehavior.AllowGet);
                        jsonresult.MaxJsonLength = int.MaxValue;
                        return jsonresult;


                    }
                    if (ddetails_meta_data.Count != 0)
                    {
                        ViewBag.Totalpages = Math.Ceiling(ddetails_meta_data.Count() / 100.0);
                        Session["PageNumber"] = PageNumber;
                        ddetails_meta_data = ddetails_meta_data.Skip((PageNumber - 1) * 100).Take(100).OrderByDescending(x => x.id).ToList();

                        for (int i = 0; i < ddetails_meta_data.Count; i++)
                        {
                            vw_water_new obj1 = new vw_water_new();
                            int Check_id = ddetails_meta_data[i].id;
                            var details5 = AJE.obj_water_wq_data.Where(x => x.water_qi_meta_id == Check_id).OrderByDescending(x => x.status_data).ToList();
                            var status_data = "";

                            if (details5.Count != 0)
                            {
                                if (StateOfficer == "District Level Nodal Officer")
                                {
                                    for (int j = 0; j < details5.Count; j++)
                                    {
                                        status_data = details5[j].status_data;
                                        if (status_data == null || status_data == "")
                                        {
                                            status_data = "";
                                            break;
                                        }
                                    }
                                }
                                else if (StateOfficer == "State Level Nodal Officer")
                                {
                                    for (int j = 0; j < details5.Count; j++)
                                    {
                                        status_data = details5[j].status_data;
                                        if (status_data == null || status_data == "")
                                        {
                                            status_data = "";
                                            //break;
                                        }
                                        else if (status_data == "State")
                                        {
                                            status_data = "State";
                                            break;
                                        }
                                        else
                                        {
                                            status_data = "Approve";
                                            break;
                                        }
                                    }
                                }
                                else
                                {
                                    for (int j = 0; j < details5.Count; j++)
                                    {
                                        status_data = details5[j].status_data;
                                        if (status_data == null || status_data == "")
                                        {
                                            status_data = "";
                                            break;
                                        }
                                    }
                                }
                            }
                            else
                            {
                                status_data = "No data";
                            }

                            var other_source = ddetails_meta_data[i].others;
                            if (other_source == null)
                            {
                                other_source = "";

                            }
                            else
                            {
                                other_source = ddetails_meta_data[i].others;
                            }

                            var mbgl_well_depth = ddetails_meta_data[i].well_depth_mbgl;
                            if (mbgl_well_depth == null)
                            {
                                mbgl_well_depth = "";

                            }
                            else
                            {
                                mbgl_well_depth = ddetails_meta_data[i].well_depth_mbgl;
                            }

                            obj1.id = ddetails_meta_data[i].id;
                            obj1.state = ddetails_meta_data[i].state;
                            obj1.district = ddetails_meta_data[i].district;
                            obj1.block = ddetails_meta_data[i].block;
                            obj1.gp = ddetails_meta_data[i].gp;
                            obj1.village = ddetails_meta_data[i].village;
                            obj1.location_details = ddetails_meta_data[i].location_details;
                            obj1.latitude = ddetails_meta_data[i].latitude;
                            obj1.longitude = ddetails_meta_data[i].longitude;
                            obj1.type_of_well = ddetails_meta_data[i].type_of_well;
                            //obj1.others = ddetails_meta_data[i].others;
                            obj1.others = other_source;
                            obj1.entry_time = ddetails_meta_data[i].entry_time;
                            //obj1.well_depth_mbgl = ddetails_meta_data[i].well_depth_mbgl;
                            obj1.well_depth_mbgl = mbgl_well_depth;
                            obj1.well_id = ddetails_meta_data[i].well_id;
                            obj1.status = ddetails_meta_data[i].status;
                            obj1.reject_remark = ddetails_meta_data[i].reject_remark;
                            obj1.fyyear = ddetails_meta_data[i].fyyear;
                            obj1.fymonth = ddetails_meta_data[i].fymonth;
                            obj1.status_data = status_data;
                            ddetails_new.Add(obj1);

                        }
                        var jsonresult = Json(ddetails_new, JsonRequestBehavior.AllowGet);
                        jsonresult.MaxJsonLength = int.MaxValue;
                        return jsonresult;


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
        public ActionResult totalFetch_Water_Quality(string Data, string year1, string month1)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<Pagenum>(Data);


                    var State = result.statename;
                    var Dist = result.districtname;
                    var Block = result.blockname;
                    var Gram = result.gpname;
                    var year = year1.ToString();
                    var month = month1.ToString();
                    var PageNumber = result.PageNumber;

                    int gp_count = 0;

                    List<vw_water> Final_data = new List<vw_water>();
                    List<vw_water_meta_data> Final_meta_data = new List<vw_water_meta_data>();
                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        Final_meta_data = AJE.obj_vw_water_meta_data.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.fyyear == year && x.fymonth == month).OrderByDescending(c => c.id).ToList();
                        gp_count = Final_meta_data.GroupBy(c => c.gp).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
                    {
                        Final_meta_data = AJE.obj_vw_water_meta_data.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.fyyear == year).OrderByDescending(c => c.id).ToList();
                        gp_count = Final_meta_data.GroupBy(c => c.gp).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        Final_data = AJE.obj_vw_water.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram).OrderByDescending(c => c.id).ToList();
                        gp_count = Final_data.GroupBy(c => c.gp).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        Final_meta_data = AJE.obj_vw_water_meta_data.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year && x.fymonth == month).OrderByDescending(c => c.id).ToList();
                        gp_count = Final_meta_data.GroupBy(c => c.gp).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
                    {
                        Final_meta_data = AJE.obj_vw_water_meta_data.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year).OrderByDescending(c => c.id).ToList();
                        gp_count = Final_meta_data.GroupBy(c => c.gp).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        Final_data = AJE.obj_vw_water.Where(x => x.state == State && x.district == Dist && x.block == Block).OrderByDescending(c => c.id).ToList();
                        gp_count = Final_data.GroupBy(c => c.gp).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        Final_meta_data = AJE.obj_vw_water_meta_data.Where(x => x.state == State && x.district == Dist && x.fyyear == year && x.fymonth == month).OrderByDescending(c => c.id).ToList();
                        gp_count = Final_meta_data.GroupBy(c => c.gp).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
                    {
                        Final_meta_data = AJE.obj_vw_water_meta_data.Where(x => x.state == State && x.district == Dist && x.fyyear == year).OrderByDescending(c => c.id).ToList();
                        gp_count = Final_meta_data.GroupBy(c => c.gp).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        Final_data = AJE.obj_vw_water.Where(x => x.state == State && x.district == Dist).OrderByDescending(c => c.id).ToList();
                        gp_count = Final_data.GroupBy(c => c.gp).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        Final_meta_data = AJE.obj_vw_water_meta_data.Where(x => x.state == State && x.fyyear == year && x.fymonth == month).OrderByDescending(c => c.id).ToList();
                        gp_count = Final_meta_data.GroupBy(c => c.gp).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
                    {
                        Final_meta_data = AJE.obj_vw_water_meta_data.Where(x => x.state == State && x.fyyear == year).OrderByDescending(c => c.id).ToList();
                        gp_count = Final_meta_data.GroupBy(c => c.gp).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        Final_data = AJE.obj_vw_water.Where(x => x.state == State).OrderByDescending(c => c.id).ToList();
                        gp_count = Final_data.GroupBy(c => c.gp).ToList().Count();
                    }

                    if (Final_meta_data.Count != 0)
                    {
                        var uniqueGpNames = Final_meta_data.GroupBy(c => c.well_id).Select(g => g.Key).ToList();
                        var updatedMetaData = new List<vw_water_meta_data>();
                        foreach (var gpName in uniqueGpNames)
                        {
                            var matchedData = AJE.obj_vw_water_meta_data.FirstOrDefault(x => x.well_id == gpName);

                            if (matchedData != null)
                            {
                                updatedMetaData.Add(matchedData);
                            }
                        }
                        var exetotal = updatedMetaData.Count;
                        var Totalpages = Math.Ceiling(updatedMetaData.Count() / 100.0);
                        var jsonresult = Json(exetotal + "," + Totalpages + "," + gp_count, JsonRequestBehavior.AllowGet);
                        jsonresult.MaxJsonLength = int.MaxValue;
                        return jsonresult;
                    }
                    else
                    {
                        var exetotal = Final_data.Count;
                        var Totalpages = Math.Ceiling(Final_data.Count() / 100.0);
                        var jsonresult = Json(exetotal + "," + Totalpages + "," + gp_count, JsonRequestBehavior.AllowGet);
                        jsonresult.MaxJsonLength = int.MaxValue;
                        return jsonresult;
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
        public ActionResult DeleteData1(int? ID = 0)
        {
            var data = ABE.obj_abhy_gwqm_ftk.Find(ID);
            ABE.obj_abhy_gwqm_ftk.Remove(data);
            int A = ABE.SaveChanges();
            if (A > 0)
            {
                return Json("Deleted Successfully");
            }
            else
            {
                return Json("Not Deleted");
            }

        }

        [HttpPost]
        public ActionResult UpdateData1(abhy_gwqm_ftk obj)
        {
            try
            {



                obj.state = Session["gstate"].ToString();
                obj.district = Session["gdist"].ToString();
                obj.block = Session["gblock"].ToString();
                obj.gp = Session["ggram"].ToString();

                ABE.Entry(obj).State = EntityState.Modified;
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
            catch (Exception e)
            {
                return Json(e.InnerException.Message);

            }
        }

        public ActionResult Geotagging()
        {
            return View();
        }
        public ActionResult Geotagging_report()
        {
            return View();
        }
        public ActionResult Rain_report()
        {
            return View();
        }
        public ActionResult Waterflow_PFD()
        {
            return View();
        }
        public ActionResult Social_report()
        {
            return View();
        }
        public ActionResult waterquality_report()
        {
            return View();
        }
        public ActionResult wellinventory_report()
        {
            return View();
        }
        public ActionResult newobservation_report()
        {
            return View();
        }
        public ActionResult Existing_report()
        {
            return View();
        }

        public ActionResult Geotagging_report_getting()
        {

            if (Session["UserId"] != null)
            {
                try
                {

                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = "";
                    var Dist = "";
                    var Block = "";
                    var Gram = "";
                    var year = "";
                    var month = "";
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
                    if (Session["year"] != null)
                    {
                        year = Session["year"].ToString();
                    }
                    if (Session["month"] != null)
                    {
                        month = Session["month"].ToString();
                    }

                    List<vw_geotagging> ddetails = new List<vw_geotagging>();

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        ddetails = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.gpname == Gram && x.fyyear == year && x.fymonth == month).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.gpname == Gram && x.fyyear == year).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        ddetails = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.gpname == Gram).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        ddetails = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.fyyear == year && x.fymonth == month).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.fyyear == year).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        ddetails = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        ddetails = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.districtname == Dist && x.fyyear == year && x.fymonth == month).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.districtname == Dist && x.fyyear == year).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        ddetails = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.districtname == Dist).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        ddetails = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.fyyear == year && x.fymonth == month).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.fyyear == year).ToList();

                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        ddetails = AJE.obj_vw_geotagging.Where(x => x.statename == State).ToList();

                    }
                    var jsonresult = Json(ddetails, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;

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

        public ActionResult Rain_report_getting()
        {
            if (Session["UserId"] != null)
            {
                try
                {

                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = "";
                    var Dist = "";
                    var Block = "";
                    var Gram = "";
                    var year = "";
                    var month = "";
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
                    if (Session["year"] != null)
                    {
                        year = Session["year"].ToString();
                    }
                    if (Session["month"] != null)
                    {
                        month = Session["month"].ToString();
                    }

                    List<vw_rainfall_meta> Final_data = new List<vw_rainfall_meta>();

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        Final_data = AJE.obj_vw_rainfall_meta.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.gpname == Gram && x.fyyear == year && x.fymonth == month).OrderByDescending(c => c.id).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
                    {
                        Final_data = AJE.obj_vw_rainfall_meta.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.gpname == Gram && x.fyyear == year).OrderByDescending(c => c.id).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        Final_data = AJE.obj_vw_rainfall_meta.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.gpname == Gram).OrderByDescending(c => c.id).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        Final_data = AJE.obj_vw_rainfall_meta.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.fyyear == year && x.fymonth == month).OrderByDescending(c => c.id).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
                    {
                        Final_data = AJE.obj_vw_rainfall_meta.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.fyyear == year).OrderByDescending(c => c.id).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        Final_data = AJE.obj_vw_rainfall_meta.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block).OrderByDescending(c => c.id).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        Final_data = AJE.obj_vw_rainfall_meta.Where(x => x.statename == State && x.districtname == Dist && x.fyyear == year && x.fymonth == month).OrderByDescending(c => c.id).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
                    {
                        Final_data = AJE.obj_vw_rainfall_meta.Where(x => x.statename == State && x.districtname == Dist && x.fyyear == year).OrderByDescending(c => c.id).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        Final_data = AJE.obj_vw_rainfall_meta.Where(x => x.statename == State && x.districtname == Dist).OrderByDescending(c => c.id).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        Final_data = AJE.obj_vw_rainfall_meta.Where(x => x.statename == State && x.fyyear == year && x.fymonth == month).OrderByDescending(c => c.id).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
                    {
                        Final_data = AJE.obj_vw_rainfall_meta.Where(x => x.statename == State && x.fyyear == year).OrderByDescending(c => c.id).ToList();
                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        Final_data = AJE.obj_vw_rainfall_meta.Where(x => x.statename == State).OrderByDescending(c => c.id).ToList();
                    }
                    if (Final_data.Count != 0)
                    {
                        var jsonresult = Json(Final_data, JsonRequestBehavior.AllowGet);
                        jsonresult.MaxJsonLength = int.MaxValue;
                        return jsonresult;
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

        public ActionResult social_report_getting()
        {

            if (Session["UserId"] != null)
            {
                try
                {

                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = "";
                    var Dist = "";
                    var Block = "";
                    var Gram = "";
                    var year = "";
                    var month = "";
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
                    if (Session["year"] != null)
                    {
                        year = Session["year"].ToString();
                    }
                    if (Session["month"] != null)
                    {
                        month = Session["month"].ToString();
                    }

                    List<vw_socialmonitoring> ddetails = new List<vw_socialmonitoring>();

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        ddetails = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram && x.fyyear == year && x.fymonth == month).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram && x.fyyear == year).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        ddetails = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        ddetails = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year && x.fymonth == month).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        ddetails = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        ddetails = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.fyyear == year && x.fymonth == month).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.fyyear == year).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        ddetails = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Dist).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        ddetails = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.fyyear == year && x.fymonth == month).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.fyyear == year).ToList();

                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        ddetails = AJE.obj_vw_socialmonitoring.Where(x => x.state == State).ToList();

                    }
                    if (ddetails.Count != 0)
                    {
                        var jsonresult = Json(ddetails, JsonRequestBehavior.AllowGet);
                        jsonresult.MaxJsonLength = int.MaxValue;
                        return jsonresult;
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

        public ActionResult water_quality_getting()
        {

            if (Session["UserId"] != null)
            {
                try
                {

                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = "";
                    var Dist = "";
                    var Block = "";
                    var Gram = "";
                    var year = "";
                    var month = "";
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
                    if (Session["year"] != null)
                    {
                        year = Session["year"].ToString();
                    }
                    if (Session["month"] != null)
                    {
                        month = Session["month"].ToString();
                    }

                    List<vw_water> Final_data = new List<vw_water>();
                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        Final_data = AJE.obj_vw_water.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.fyyear == year && x.fymonth == month).OrderByDescending(c => c.id).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
                    {
                        Final_data = AJE.obj_vw_water.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.fyyear == year).OrderByDescending(c => c.id).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        Final_data = AJE.obj_vw_water.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram).OrderByDescending(c => c.id).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        Final_data = AJE.obj_vw_water.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year && x.fymonth == month).OrderByDescending(c => c.id).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
                    {
                        Final_data = AJE.obj_vw_water.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year).OrderByDescending(c => c.id).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        Final_data = AJE.obj_vw_water.Where(x => x.state == State && x.district == Dist && x.block == Block).OrderByDescending(c => c.id).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        Final_data = AJE.obj_vw_water.Where(x => x.state == State && x.district == Dist && x.fyyear == year && x.fymonth == month).OrderByDescending(c => c.id).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
                    {
                        Final_data = AJE.obj_vw_water.Where(x => x.state == State && x.district == Dist && x.fyyear == year).OrderByDescending(c => c.id).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        Final_data = AJE.obj_vw_water.Where(x => x.state == State && x.district == Dist).OrderByDescending(c => c.id).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        Final_data = AJE.obj_vw_water.Where(x => x.state == State && x.fyyear == year && x.fymonth == month).OrderByDescending(c => c.id).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
                    {
                        Final_data = AJE.obj_vw_water.Where(x => x.state == State && x.fyyear == year).OrderByDescending(c => c.id).ToList();
                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        Final_data = AJE.obj_vw_water.Where(x => x.state == State).OrderByDescending(c => c.id).ToList();
                    }

                    if (Final_data.Count != 0)
                    {
                        var jsonresult = Json(Final_data, JsonRequestBehavior.AllowGet);
                        jsonresult.MaxJsonLength = int.MaxValue;
                        return jsonresult;
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

        public ActionResult wellinventory_getting()
        {

            if (Session["UserId"] != null)
            {
                try
                {


                    var State = "";
                    var Dist = "";
                    var Block = "";
                    var Gram = "";
                    var year = "";
                    var month = "";
                    if (Session["gstate"] != null)
                    {
                        State = Session["gstate"].ToString();
                    }
                    else
                    {
                        State = "0";
                    }
                    if (Session["gdist"] != null)
                    {
                        Dist = Session["gdist"].ToString();
                    }
                    else
                    {
                        Dist = "0";
                    }
                    if (Session["gblock"] != null)
                    {
                        Block = Session["gblock"].ToString();
                    }
                    else
                    {
                        Block = "0";
                    }
                    if (Session["ggram"] != null)
                    {
                        Gram = Session["ggram"].ToString();

                    }
                    else
                    {
                        Gram = "0";
                    }
                    if (Session["year"] != null)
                    {
                        year = Session["year"].ToString();
                    }
                    else
                    {
                        year = "0";
                    }
                    if (Session["month"] != null)
                    {
                        month = Session["month"].ToString();
                    }
                    else
                    {
                        month = "0";
                    }



                    List<vw_wellinventory> ddetails = new List<vw_wellinventory>();


                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        ddetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.fyyear == year && x.fymonth == month).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.fyyear == year).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        ddetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        ddetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year && x.fymonth == month).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        ddetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist && x.block == Block).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        ddetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist && x.fyyear == year && x.fymonth == month).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist && x.fyyear == year).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        ddetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        ddetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.fyyear == year && x.fymonth == month).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.fyyear == year).ToList();

                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        ddetails = AJE.obj_vw_wellinventory.Where(x => x.state == State).ToList();

                    }
                    if (ddetails.Count != 0)
                    {
                        var jsonresult = Json(ddetails, JsonRequestBehavior.AllowGet);
                        jsonresult.MaxJsonLength = int.MaxValue;
                        return jsonresult;

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

        public ActionResult newobservation_getting()
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

                    var ddetails = (from gp in AJE.obj_groundwaterlevel
                                    join r in AJE.obj_groundwatermeta on gp.id equals r.groundid
                                    where gp.state == State && gp.district == Dist && gp.block == Block && gp.grampanchayat == Gram && gp.isarchive == 1 && r.year >= 2022
                                    select new
                                    {
                                        gp,
                                        r

                                    }).ToList();

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        ddetails = (from gp in AJE.obj_groundwaterlevel
                                    join r in AJE.obj_groundwatermeta on gp.id equals r.groundid
                                    where gp.state == State && gp.district == Dist && gp.block == Block && gp.grampanchayat == Gram && gp.isarchive == 1 && r.year >= 2022
                                    select new
                                    {
                                        gp,
                                        r

                                    }).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        ddetails = (from gp in AJE.obj_groundwaterlevel
                                    join r in AJE.obj_groundwatermeta on gp.id equals r.groundid
                                    where gp.state == State && gp.district == Dist && gp.block == Block && gp.isarchive == 1 && r.year >= 2022
                                    select new
                                    {
                                        gp,
                                        r

                                    }).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        ddetails = (from gp in AJE.obj_groundwaterlevel
                                    join r in AJE.obj_groundwatermeta on gp.id equals r.groundid
                                    where gp.state == State && gp.district == Dist && gp.isarchive == 1 && r.year >= 2022
                                    select new
                                    {
                                        gp,
                                        r

                                    }).ToList();
                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        ddetails = (from gp in AJE.obj_groundwaterlevel
                                    join r in AJE.obj_groundwatermeta on gp.id equals r.groundid
                                    where gp.state == State && gp.isarchive == 1 && r.year >= 2022
                                    select new
                                    {
                                        gp,
                                        r

                                    }).ToList();
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

        public ActionResult exesting_getting()
        {

            if (Session["UserId"] != null)
            {
                try
                {

                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = "";
                    var Dist = "";
                    var Block = "";
                    var Gram = "";
                    var year = "";
                    var month = "";
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
                    if (Session["year"] != null)
                    {
                        year = Session["year"].ToString();
                    }
                    if (Session["month"] != null)
                    {
                        month = Session["month"].ToString();
                    }


                    List<vw_gwl> Final_data = new List<vw_gwl>();

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        Final_data = AJE.obj_vw_gwl.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram && x.fyyear == year && x.fymonth == month).OrderByDescending(c => c.id).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
                    {
                        Final_data = AJE.obj_vw_gwl.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram && x.fyyear == year).OrderByDescending(c => c.id).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        Final_data = AJE.obj_vw_gwl.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram).OrderByDescending(c => c.id).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        Final_data = AJE.obj_vw_gwl.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year && x.fymonth == month).OrderByDescending(c => c.id).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
                    {
                        Final_data = AJE.obj_vw_gwl.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year).OrderByDescending(c => c.id).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        Final_data = AJE.obj_vw_gwl.Where(x => x.state == State && x.district == Dist && x.block == Block).OrderByDescending(c => c.id).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        Final_data = AJE.obj_vw_gwl.Where(x => x.state == State && x.district == Dist && x.fyyear == year && x.fymonth == month).OrderByDescending(c => c.id).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
                    {
                        Final_data = AJE.obj_vw_gwl.Where(x => x.state == State && x.district == Dist && x.fyyear == year).OrderByDescending(c => c.id).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        Final_data = AJE.obj_vw_gwl.Where(x => x.state == State && x.district == Dist).OrderByDescending(c => c.id).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        Final_data = AJE.obj_vw_gwl.Where(x => x.state == State && x.fyyear == year && x.fymonth == month).OrderByDescending(c => c.id).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
                    {
                        Final_data = AJE.obj_vw_gwl.Where(x => x.state == State && x.fyyear == year).OrderByDescending(c => c.id).ToList();
                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        Final_data = AJE.obj_vw_gwl.Where(x => x.state == State).OrderByDescending(c => c.id).ToList();
                    }
                    if (Final_data.Count != 0)
                    {
                        var jsonresult = Json(Final_data, JsonRequestBehavior.AllowGet);
                        jsonresult.MaxJsonLength = int.MaxValue;
                        return jsonresult;
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

        public ActionResult Social_Monitoring(int PageNumber = 1)
        {
            var ddetails = AJE.obj_socialmonitoring.ToList();
            ViewBag.Totalpages = Math.Ceiling(ddetails.Count() / 100.0);

            return View();
        }

        public ActionResult Rain_Gauge_Monitoring(int PageNumber = 1)
        {

            var ddetails = AJE.obj_vw_rainfall.ToList();
            ViewBag.Totalpages = Math.Ceiling(ddetails.Count() / 100.0);
            //ViewBag.PageNumber = PageNumber;
            //Session["PageNumber"] = PageNumber;
            //ddetails = ddetails.Skip((PageNumber - 1) * 50).Take(50).ToList();

            return View();
        }

        [HttpPost]
        public ActionResult Fetchrain(string Data, string year1, string month1)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<Pagenum>(Data);

                    var State = result.statename;
                    var Dist = result.districtname;
                    var Block = result.blockname;
                    var Gram = result.gpname;
                    var year = year1.ToString();
                    var month = month1.ToString();
                    var PageNumber = result.PageNumber;
                    var StateOfficer = Session["Officer"].ToString();

                    List<vw_rainfall_meta> Final_data = new List<vw_rainfall_meta>();
                    List<vw_rainfall_meta_data> Final_meta_data = new List<vw_rainfall_meta_data>();
                    List<vw_rainfall_meta_data> gp_count = new List<vw_rainfall_meta_data>();
                    List<dynamic> Final_data_new = new List<dynamic>();
                    
                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        // Final_meta_data = AJE.obj_vw_rainfall_meta_data.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.gpname == Gram && x.fyyear == year && x.fymonth == month).OrderByDescending(c => c.id).ToList();
                        gp_count = AJE.obj_vw_rainfall_meta_data.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.gpname == Gram && x.fyyear == year && x.fymonth == month).OrderByDescending(c => c.id).ToList();
                        var uniqueGpNames = gp_count.GroupBy(c => c.rf_uid).Select(g => g.Key).ToList();
                        foreach (var gpName in uniqueGpNames)
                        {
                            var matchedData = AJE.obj_vw_rainfall_meta_data.FirstOrDefault(x => x.rf_uid == gpName);

                            if (matchedData != null)
                            {
                                Final_meta_data.Add(matchedData);
                            }
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
                    {
                        gp_count = AJE.obj_vw_rainfall_meta_data.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.gpname == Gram && x.fyyear == year).OrderByDescending(c => c.id).ToList();
                        var uniqueGpNames = gp_count.GroupBy(c => c.rf_uid).Select(g => g.Key).ToList();
                        foreach (var gpName in uniqueGpNames)
                        {
                            var matchedData = AJE.obj_vw_rainfall_meta_data.FirstOrDefault(x => x.rf_uid == gpName);

                            if (matchedData != null)
                            {
                                Final_meta_data.Add(matchedData);
                            }
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        Final_data = AJE.obj_vw_rainfall_meta.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.gpname == Gram).OrderByDescending(c => c.id).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        gp_count = AJE.obj_vw_rainfall_meta_data.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.fyyear == year && x.fymonth == month).OrderByDescending(c => c.id).ToList();
                        var uniqueGpNames = gp_count.GroupBy(c => c.rf_uid).Select(g => g.Key).ToList();
                        foreach (var gpName in uniqueGpNames)
                        {
                            var matchedData = AJE.obj_vw_rainfall_meta_data.FirstOrDefault(x => x.rf_uid == gpName);

                            if (matchedData != null)
                            {
                                Final_meta_data.Add(matchedData);
                            }
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
                    {
                        gp_count = AJE.obj_vw_rainfall_meta_data.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.fyyear == year).OrderByDescending(c => c.id).ToList();
                        var uniqueGpNames = gp_count.GroupBy(c => c.rf_uid).Select(g => g.Key).ToList();
                        foreach (var gpName in uniqueGpNames)
                        {
                            var matchedData = AJE.obj_vw_rainfall_meta_data.FirstOrDefault(x => x.rf_uid == gpName);

                            if (matchedData != null)
                            {
                                Final_meta_data.Add(matchedData);
                            }
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        Final_data = AJE.obj_vw_rainfall_meta.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block).OrderByDescending(c => c.id).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        gp_count = AJE.obj_vw_rainfall_meta_data.Where(x => x.statename == State && x.districtname == Dist && x.fyyear == year && x.fymonth == month).OrderByDescending(c => c.id).ToList();
                        var uniqueGpNames = gp_count.GroupBy(c => c.rf_uid).Select(g => g.Key).ToList();
                        foreach (var gpName in uniqueGpNames)
                        {
                            var matchedData = AJE.obj_vw_rainfall_meta_data.FirstOrDefault(x => x.rf_uid == gpName);

                            if (matchedData != null)
                            {
                                Final_meta_data.Add(matchedData);
                            }
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
                    {
                        gp_count = AJE.obj_vw_rainfall_meta_data.Where(x => x.statename == State && x.districtname == Dist && x.fyyear == year).OrderByDescending(c => c.id).ToList();
                        var uniqueGpNames = gp_count.GroupBy(c => c.rf_uid).Select(g => g.Key).ToList();
                        foreach (var gpName in uniqueGpNames)
                        {
                            var matchedData = AJE.obj_vw_rainfall_meta_data.FirstOrDefault(x => x.rf_uid == gpName);

                            if (matchedData != null)
                            {
                                Final_meta_data.Add(matchedData);
                            }
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        Final_data = AJE.obj_vw_rainfall_meta.Where(x => x.statename == State && x.districtname == Dist).OrderByDescending(c => c.id).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        gp_count = AJE.obj_vw_rainfall_meta_data.Where(x => x.statename == State && x.fyyear == year && x.fymonth == month).OrderByDescending(c => c.id).ToList();
                        var uniqueGpNames = gp_count.GroupBy(c => c.rf_uid).Select(g => g.Key).ToList();
                        foreach (var gpName in uniqueGpNames)
                        {
                            var matchedData = AJE.obj_vw_rainfall_meta_data.FirstOrDefault(x => x.rf_uid == gpName);

                            if (matchedData != null)
                            {
                                Final_meta_data.Add(matchedData);
                            }
                        }
                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
                    {
                        gp_count = AJE.obj_vw_rainfall_meta_data.Where(x => x.statename == State && x.fyyear == year).OrderByDescending(c => c.id).ToList();
                        var uniqueGpNames = gp_count.GroupBy(c => c.rf_uid).Select(g => g.Key).ToList();
                        foreach (var gpName in uniqueGpNames)
                        {
                            var matchedData = AJE.obj_vw_rainfall_meta_data.FirstOrDefault(x => x.rf_uid == gpName);

                            if (matchedData != null)
                            {
                                Final_meta_data.Add(matchedData);
                            }
                        }
                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        Final_data = AJE.obj_vw_rainfall_meta.Where(x => x.statename == State).OrderByDescending(c => c.id).ToList();

                    }
                    if (Final_data.Count != 0)
                    {
                        ViewBag.Totalpages = Math.Ceiling(Final_data.Count() / 100.0);
                        Session["PageNumber"] = PageNumber;
                        Final_data = Final_data.Skip((PageNumber - 1) * 100).Take(100).ToList();
                        for (int i = 0; i < Final_data.Count; i++)
                        {
                            vw_rainfall_meta_new obj1 = new vw_rainfall_meta_new();
                            int Check_id = Final_data[i].id;
                            var details5 = AJE.obj_rainfall_data.Where(x => x.rf_meta_id == Check_id).OrderByDescending(x => x.status_data).ToList();
                            var status_data = "";
                            if (details5.Count != 0)
                            {
                                if (StateOfficer == "District Level Nodal Officer")
                                {
                                    for (int j = 0; j < details5.Count; j++)
                                    {
                                        status_data = details5[j].status_data;
                                        if (status_data == null || status_data == "")
                                        {
                                            status_data = "";
                                            break;
                                        }
                                    }
                                }
                                else if (StateOfficer == "State Level Nodal Officer")
                                {
                                    for (int j = 0; j < details5.Count; j++)
                                    {
                                        status_data = details5[j].status_data;
                                        if (status_data == null || status_data == "")
                                        {
                                            status_data = "";
                                            //break;
                                        }
                                        else if (status_data == "State")
                                        {
                                            status_data = "State";
                                            break;
                                        }
                                        else
                                        {
                                            status_data = "Approve";
                                            break;
                                        }
                                    }
                                }
                                else
                                {
                                    for (int j = 0; j < details5.Count; j++)
                                    {
                                        status_data = details5[j].status_data;
                                        if (status_data == null || status_data == "")
                                        {
                                            status_data = "";
                                            break;
                                        }
                                    }
                                }
                            }
                            else
                            {
                                status_data = "No Data";
                            }

                            obj1.id = Final_data[i].id;
                            obj1.statename = Final_data[i].statename;
                            obj1.districtname = Final_data[i].districtname;
                            obj1.blockname = Final_data[i].blockname;
                            obj1.gpname = Final_data[i].gpname;
                            obj1.village = Final_data[i].village;
                            obj1.latitude = Final_data[i].latitude;
                            obj1.longitude = Final_data[i].longitude;
                            obj1.raingauge = Final_data[i].raingauge;
                            obj1.image2 = Final_data[i].image2;
                            obj1.email = Final_data[i].email;
                            obj1.locationdetail = Final_data[i].locationdetail;
                            obj1.status = Final_data[i].status;
                            obj1.reject_remark = Final_data[i].reject_remark;
                            obj1.status_data = status_data;
                            obj1.date_time = Final_data[i].date_time;
                            obj1.fyyear = Final_data[i].fyyear;
                            obj1.fymonth = Final_data[i].fymonth;

                            Final_data_new.Add(obj1);

                        }

                        var jsonresult = Json(Final_data_new, JsonRequestBehavior.AllowGet);
                        jsonresult.MaxJsonLength = int.MaxValue;
                        return jsonresult;
                    }
                    if (Final_meta_data.Count != 0)
                    {
                        ViewBag.Totalpages = Math.Ceiling(Final_meta_data.Count() / 100.0);
                        Session["PageNumber"] = PageNumber;
                        Final_meta_data = Final_meta_data.Skip((PageNumber - 1) * 100).Take(100).ToList();
                        for (int i = 0; i < Final_meta_data.Count; i++)
                        {
                            vw_rainfall_meta_new obj1 = new vw_rainfall_meta_new();
                            int Check_id = Final_meta_data[i].id;
                            var details5 = AJE.obj_rainfall_data.Where(x => x.rf_meta_id == Check_id).OrderByDescending(x => x.status_data).ToList();
                            var status_data = "";
                            if (details5.Count != 0)
                            {
                                if (StateOfficer == "District Level Nodal Officer")
                                {
                                    for (int j = 0; j < details5.Count; j++)
                                    {
                                        status_data = details5[j].status_data;
                                        if (status_data == null || status_data == "")
                                        {
                                            status_data = "";
                                            break;
                                        }
                                    }
                                }
                                else if (StateOfficer == "State Level Nodal Officer")
                                {
                                    for (int j = 0; j < details5.Count; j++)
                                    {
                                        status_data = details5[j].status_data;
                                        if (status_data == null || status_data == "")
                                        {
                                            status_data = "";
                                            //break;
                                        }
                                        else if (status_data == "State")
                                        {
                                            status_data = "State";
                                            break;
                                        }
                                        else
                                        {
                                            status_data = "Approve";
                                            break;
                                        }
                                    }
                                }
                                else
                                {
                                    for (int j = 0; j < details5.Count; j++)
                                    {
                                        status_data = details5[j].status_data;
                                        if (status_data == null || status_data == "")
                                        {
                                            status_data = "";
                                            break;
                                        }
                                    }
                                }
                            }
                            else
                            {
                                status_data = "No Data";
                            }

                            obj1.id = Final_meta_data[i].id;
                            obj1.statename = Final_meta_data[i].statename;
                            obj1.districtname = Final_meta_data[i].districtname;
                            obj1.blockname = Final_meta_data[i].blockname;
                            obj1.gpname = Final_meta_data[i].gpname;
                            obj1.village = Final_meta_data[i].village;
                            obj1.latitude = Final_meta_data[i].latitude;
                            obj1.longitude = Final_meta_data[i].longitude;
                            obj1.raingauge = Final_meta_data[i].raingauge;
                            obj1.image2 = Final_meta_data[i].image2;
                            obj1.email = Final_meta_data[i].email;
                            obj1.locationdetail = Final_meta_data[i].locationdetail;
                            obj1.status = Final_meta_data[i].status;
                            obj1.reject_remark = Final_meta_data[i].reject_remark;
                            obj1.status_data = status_data;
                            obj1.date_time = Final_meta_data[i].date_time;
                            obj1.fyyear = Final_meta_data[i].fyyear;
                            obj1.fymonth = Final_meta_data[i].fymonth;

                            Final_data_new.Add(obj1);

                        }

                        var jsonresult = Json(Final_data_new, JsonRequestBehavior.AllowGet);
                        jsonresult.MaxJsonLength = int.MaxValue;
                        return jsonresult;
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
        public ActionResult totalFetchrain(string Data, string year1, string month1)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<Pagenum>(Data);


                    var State = result.statename;
                    var Dist = result.districtname;
                    var Block = result.blockname;
                    var Gram = result.gpname;
                    var year = year1.ToString();
                    var month = month1.ToString();
                    var PageNumber = result.PageNumber;

                    int gp_count = 0;

                    List<vw_rainfall_meta> Final_data = new List<vw_rainfall_meta>();
                    List<vw_rainfall_meta_data> Final_meta_data = new List<vw_rainfall_meta_data>();

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        Final_meta_data = AJE.obj_vw_rainfall_meta_data.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.gpname == Gram && x.fyyear == year && x.fymonth == month).OrderByDescending(c => c.id).ToList();
                        gp_count = Final_meta_data.GroupBy(c => c.gpname).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
                    {
                        Final_meta_data = AJE.obj_vw_rainfall_meta_data.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.gpname == Gram && x.fyyear == year).OrderByDescending(c => c.id).ToList();
                        gp_count = Final_meta_data.GroupBy(c => c.gpname).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        Final_data = AJE.obj_vw_rainfall_meta.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.gpname == Gram).OrderByDescending(c => c.id).ToList();
                        gp_count = Final_data.GroupBy(c => c.gpname).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        Final_meta_data = AJE.obj_vw_rainfall_meta_data.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.fyyear == year && x.fymonth == month).OrderByDescending(c => c.id).ToList();
                        gp_count = Final_meta_data.GroupBy(c => c.gpname).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
                    {
                        Final_meta_data = AJE.obj_vw_rainfall_meta_data.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.fyyear == year).OrderByDescending(c => c.id).ToList();
                        gp_count = Final_meta_data.GroupBy(c => c.gpname).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        Final_data = AJE.obj_vw_rainfall_meta.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block).OrderByDescending(c => c.id).ToList();
                        gp_count = Final_data.GroupBy(c => c.gpname).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        Final_meta_data = AJE.obj_vw_rainfall_meta_data.Where(x => x.statename == State && x.districtname == Dist && x.fyyear == year && x.fymonth == month).OrderByDescending(c => c.id).ToList();
                        gp_count = Final_meta_data.GroupBy(c => c.gpname).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
                    {
                        Final_meta_data = AJE.obj_vw_rainfall_meta_data.Where(x => x.statename == State && x.districtname == Dist && x.fyyear == year).OrderByDescending(c => c.id).ToList();
                        gp_count = Final_meta_data.GroupBy(c => c.gpname).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        Final_data = AJE.obj_vw_rainfall_meta.Where(x => x.statename == State && x.districtname == Dist).OrderByDescending(c => c.id).ToList();
                        gp_count = Final_data.GroupBy(c => c.gpname).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        Final_meta_data = AJE.obj_vw_rainfall_meta_data.Where(x => x.statename == State && x.fyyear == year && x.fymonth == month).OrderByDescending(c => c.id).ToList();
                        gp_count = Final_meta_data.GroupBy(c => c.gpname).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
                    {
                        Final_meta_data = AJE.obj_vw_rainfall_meta_data.Where(x => x.statename == State && x.fyyear == year).OrderByDescending(c => c.id).ToList();
                        gp_count = Final_meta_data.GroupBy(c => c.gpname).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        Final_data = AJE.obj_vw_rainfall_meta.Where(x => x.statename == State).OrderByDescending(c => c.id).ToList();
                        gp_count = Final_data.GroupBy(c => c.gpname).ToList().Count();
                    }

                    if (Final_meta_data.Count != 0)
                    {
                        var uniqueGpNames = Final_meta_data.GroupBy(c => c.rf_uid).Select(g => g.Key).ToList();
                        var updatedMetaData = new List<vw_rainfall_meta_data>();
                        foreach (var gpName in uniqueGpNames)
                        {
                           
                            var matchedData = AJE.obj_vw_rainfall_meta_data.FirstOrDefault(x => x.rf_uid == gpName);
                            if (matchedData != null)
                            {
                                updatedMetaData.Add(matchedData);
                            }
                        }

                        var exetotal = updatedMetaData.Count();
                        var Totalpages = Math.Ceiling(updatedMetaData.Count() / 100.0);
                        var jsonresult = Json(exetotal + "," + Totalpages + "," + gp_count, JsonRequestBehavior.AllowGet);
                        jsonresult.MaxJsonLength = int.MaxValue;
                        return jsonresult;
                    }
                    else
                    {

                        var exetotal = Final_data.Count();
                        var Totalpages = Math.Ceiling(Final_data.Count() / 100.0);
                        var jsonresult = Json(exetotal + "," + Totalpages + "," + gp_count, JsonRequestBehavior.AllowGet);
                        jsonresult.MaxJsonLength = int.MaxValue;
                        return jsonresult;
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
        public ActionResult deleterain(string Id)
        {
            if (Id != null)
            {
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<rainfall>(Id);
                if (result != null)
                {
                    AJE.Entry(result).State = EntityState.Deleted;
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
        [HttpPost]
        public ActionResult Updaterain(rainfall var, HttpPostedFileBase txtimage, HttpPostedFileBase txtimage1, int? id, string village, string locationdetail, string latitude, string longitude, DateTime date, string raingauge, string rainfall1)
        {

            var statename = Session["gstate"].ToString();
            var districtname = Session["gdist"].ToString();
            var blockname = Session["gblock"].ToString();
            var gpname = Session["ggram"].ToString();

            //var statename = Session["Mstate"].ToString();
            //var districtname = Session["Mdist"].ToString();
            //var blockname = Session["Mblock"].ToString();
            //var gpname = Session["Mgram"].ToString();

            var data = AJE.obj_rainfall.Where(x => x.id == id).FirstOrDefault();

            if (data != null)
            {


                data.id = id;
                data.village = village;
                data.locationdetail = locationdetail;
                data.latitude = latitude;
                data.longitude = longitude;
                data.date = date;
                data.raingauge = raingauge;
                data.rainfall1 = rainfall1;

                if (txtimage != null)
                {
                    if (txtimage.FileName != null)
                    {

                        string filename = Path.GetFileNameWithoutExtension(txtimage.FileName);
                        string ext = Path.GetExtension(txtimage.FileName);
                        filename = filename + ext;
                        data.image1 = "/imageakash/" + filename;
                        filename = Path.Combine(Server.MapPath("/imageakash/"), filename);
                        txtimage.SaveAs(filename);
                    }
                }
                if (txtimage1 != null)
                {
                    if (txtimage1.FileName != null)
                    {

                        string filename = Path.GetFileNameWithoutExtension(txtimage1.FileName);
                        string ext = Path.GetExtension(txtimage1.FileName);
                        filename = filename + ext;
                        data.image2 = "/imageakash/" + filename; /*"~/Ataljalimages/"*/
                        filename = Path.Combine(Server.MapPath("/imageakash/"), filename);
                        txtimage1.SaveAs(filename);
                    }
                }
                AJE.Entry(data).State = EntityState.Modified;
                AJE.SaveChanges();
                return Json("Successfully Saved");
            }



            else
            {
                return Json("Not Updated");
            }


        }
        //Akash

        [HttpPost]
        public ActionResult FetchGeotaggingData(string Data, string year1, string month1)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<Pagenum>(Data);
                    List<vw_geotagging> ddetails = new List<vw_geotagging>();

                    var State = result.statename;
                    var Dist = result.districtname;
                    var Block = result.blockname;
                    var Gram = result.gpname;
                    var year = year1.ToString();
                    var month = month1.ToString();
                    var PageNumber = result.PageNumber;

                    int recordsToSkip = (PageNumber - 1) * 100;
                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        ddetails = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.gpname == Gram && x.fyyear == year && x.fymonth == month).OrderByDescending(x=>x.id).Skip(recordsToSkip).Take(100).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.gpname == Gram && x.fyyear == year).OrderByDescending(x => x.id).Skip(recordsToSkip).Take(100).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        ddetails = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.gpname == Gram).OrderByDescending(x => x.id).Skip(recordsToSkip).Take(100).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        ddetails = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.fyyear == year && x.fymonth == month).OrderByDescending(x => x.id).Skip(recordsToSkip).Take(100).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.fyyear == year).OrderByDescending(x => x.id).Skip(recordsToSkip).Take(100).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        ddetails = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block).OrderByDescending(x => x.id).Skip(recordsToSkip).Take(100).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        ddetails = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.districtname == Dist && x.fyyear == year && x.fymonth == month).OrderByDescending(x => x.id).Skip(recordsToSkip).Take(100).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.districtname == Dist && x.fyyear == year).OrderByDescending(x => x.id).Skip(recordsToSkip).Take(100).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        ddetails = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.districtname == Dist).OrderByDescending(x => x.id).Skip(recordsToSkip).Take(100).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        ddetails = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.fyyear == year && x.fymonth == month).OrderByDescending(x => x.id).Skip(recordsToSkip).Take(100).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.fyyear == year).OrderByDescending(x => x.id).Skip(recordsToSkip).Take(100).ToList();

                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        ddetails = AJE.obj_vw_geotagging.Where(x => x.statename == State).OrderByDescending(x => x.id).Skip(recordsToSkip).Take(100).ToList();

                    }
                    var jsonresult = Json(ddetails, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;

                    //ViewBag.Totalpages = Math.Ceiling(ddetails.Count() / 100.0);
                    //Session["PageNumber"] = PageNumber;
                    //ddetails = ddetails.Skip((PageNumber - 1) * 100).Take(100).OrderByDescending(x => x.id).ToList();
                    //return Json(ddetails, JsonRequestBehavior.AllowGet);
                }
                catch (Exception Ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("", JsonRequestBehavior.AllowGet);

            }

        }
        [HttpPost]
        public ActionResult totalFetchGeotaggingData(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<Pagenum>(Data);

                    var State = result.statename == "0" ? null : result.statename;
                    var Dist = result.districtname == "0" ? null : result.districtname;
                    var Block = result.blockname == "0" ? null : result.blockname;
                    var Gram = result.gpname == "0" ? null : result.gpname;
                    var year = result.year == "0" ? null : result.year;
                    var month = result.month == "0" ? null : result.month;
                    var PageNumber = result.PageNumber;

                    int gp_count = 0;
                    List<vw_geotagging> ddetails = new List<vw_geotagging>();

                    if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(Dist) && !string.IsNullOrEmpty(Block) && !string.IsNullOrEmpty(Gram) && !string.IsNullOrEmpty(year) && !string.IsNullOrEmpty(month))
                    {
                        ddetails = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.gpname == Gram && x.fyyear == year && x.fymonth == month).OrderByDescending(c => c.id).ToList();
                    }
                    else if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(Dist) && !string.IsNullOrEmpty(Block) && !string.IsNullOrEmpty(Gram) && !string.IsNullOrEmpty(year))
                    {
                        ddetails = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.gpname == Gram && x.fyyear == year ).OrderByDescending(c => c.id).ToList();
                    }
                    else if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(Dist) && !string.IsNullOrEmpty(Block) && !string.IsNullOrEmpty(Gram))
                    {
                        ddetails = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.gpname == Gram).OrderByDescending(c => c.id).ToList();
                    }
                    else if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(Dist) && !string.IsNullOrEmpty(Block) && !string.IsNullOrEmpty(year) && !string.IsNullOrEmpty(month))
                    {
                        ddetails = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.fyyear == year && x.fymonth == month).OrderByDescending(c => c.id).ToList();
                    }
                    else if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(Dist) && !string.IsNullOrEmpty(Block) && !string.IsNullOrEmpty(year))
                    {
                        ddetails = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.fyyear == year).OrderByDescending(c => c.id).ToList();
                    }
                    else if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(Dist) && !string.IsNullOrEmpty(Block))
                    {
                        ddetails = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block ).OrderByDescending(c => c.id).ToList();
                    }
                    else if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(Dist) && !string.IsNullOrEmpty(year) && !string.IsNullOrEmpty(month))
                    {
                        ddetails = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.districtname == Dist && x.fyyear == year && x.fymonth == month).OrderByDescending(c => c.id).ToList();
                    }
                    else if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(Dist) && !string.IsNullOrEmpty(year))
                    {
                        ddetails = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.districtname == Dist && x.fyyear == year).OrderByDescending(c => c.id).ToList();
                    }
                    else if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(Dist))
                    {
                        ddetails = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.districtname == Dist).OrderByDescending(c => c.id).ToList();
                    }
                    else if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(year) && !string.IsNullOrEmpty(month))
                    {
                        ddetails = AJE.obj_vw_geotagging.Where(x => x.statename == State  && x.fyyear == year && x.fymonth == month).OrderByDescending(c => c.id).ToList();
                    }
                    else if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(year))
                    {
                        ddetails = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.fyyear == year).OrderByDescending(c => c.id).ToList();
                    }
                    else if (!string.IsNullOrEmpty(State))
                    {
                        ddetails = AJE.obj_vw_geotagging.Where(x => x.statename == State).OrderByDescending(c => c.id).ToList();
                    }

                    if (ddetails.Count != 0)
                    {
                        gp_count = ddetails.Select(x => x.gpname).Distinct().Count();
                        var Totalpages = Math.Ceiling(ddetails.Count / 100.0);
                        var jsonresult = Json(ddetails.Count + "," + Totalpages + "," + gp_count, JsonRequestBehavior.AllowGet);
                        jsonresult.MaxJsonLength = int.MaxValue;
                        return jsonresult;
                        
                    }
                    
                    else
                    {

                        var jsonresult = Json(0 + "," + 0 + "," + 0, JsonRequestBehavior.AllowGet);
                        jsonresult.MaxJsonLength = int.MaxValue;
                        return jsonresult;
                    }
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

        [HttpPost]
        public ActionResult totalFetchGeotaggingData_old(string Data, string year1, string month1)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<Pagenum>(Data);
                    List<vw_geotagging> ddetails = new List<vw_geotagging>();

                    var State = result.statename;
                    var Dist = result.districtname;
                    var Block = result.blockname;
                    var Gram = result.gpname;
                    var year = year1.ToString();
                    var month = month1.ToString();
                    var PageNumber = result.PageNumber;
                    int gp_count = 0;


                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        ddetails = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.gpname == Gram && x.fyyear == year && x.fymonth == month).ToList();
                        gp_count = ddetails.GroupBy(c => c.gpname).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.gpname == Gram && x.fyyear == year).ToList();
                        gp_count = ddetails.GroupBy(c => c.gpname).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        ddetails = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.gpname == Gram).ToList();
                        gp_count = ddetails.GroupBy(c => c.gpname).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        ddetails = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.fyyear == year && x.fymonth == month).ToList();
                        gp_count = ddetails.GroupBy(c => c.gpname).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.fyyear == year).ToList();
                        gp_count = ddetails.GroupBy(c => c.gpname).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        ddetails = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block).ToList();
                        gp_count = ddetails.GroupBy(c => c.gpname).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        ddetails = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.districtname == Dist && x.fyyear == year && x.fymonth == month).ToList();
                        gp_count = ddetails.GroupBy(c => c.gpname).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.districtname == Dist && x.fyyear == year).ToList();
                        gp_count = ddetails.GroupBy(c => c.gpname).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        ddetails = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.districtname == Dist).ToList();
                        gp_count = ddetails.GroupBy(c => c.gpname).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        ddetails = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.fyyear == year && x.fymonth == month).ToList();
                        gp_count = ddetails.GroupBy(c => c.gpname).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.fyyear == year).ToList();
                        gp_count = ddetails.GroupBy(c => c.gpname).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        ddetails = AJE.obj_vw_geotagging.Where(x => x.statename == State).ToList();
                        gp_count = ddetails.GroupBy(c => c.gpname).ToList().Count();
                    }

                    var totalgeo = ddetails.Count;
                    var Totalpagesgeo = Math.Ceiling(ddetails.Count() / 100.0);

                    return Json(totalgeo + "," + Totalpagesgeo + "," + gp_count, JsonRequestBehavior.AllowGet);
                }
                catch (Exception Ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("", JsonRequestBehavior.AllowGet);

            }

        }

        [HttpPost]
        public ActionResult deletedata(string Id)
        {
            if (Id != null)
            {
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<geotagging>(Id);
                if (result != null)
                {
                    AJE.Entry(result).State = EntityState.Deleted;
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
        [HttpPost]
        public ActionResult Update(HttpPostedFileBase txtimage, HttpPostedFileBase txtimage1, int? id, string village, string locationdetail, string latitude, string longitude, DateTime date, string typeofstructure, string storagecapacity, string nooffillings)
        {

            var statename = Session["gstate"].ToString();
            var districtname = Session["gdist"].ToString();
            var blockname = Session["gblock"].ToString();
            var gpname = Session["ggram"].ToString();


            //var statename = Session["Mstate"].ToString();
            //var districtname = Session["Mdist"].ToString();
            //var blockname = Session["Mblock"].ToString();
            //var gpname = Session["Mgram"].ToString();

            var data = AJE.obj_geotagging.Where(x => x.id == id).FirstOrDefault();

            if (data != null)
            {


                data.id = id;
                data.village = village;
                data.locationdetail = locationdetail;
                data.latitude = latitude;
                data.longitude = longitude;
                data.date = date;
                data.typeofstructure = typeofstructure;
                data.storagecapacity = storagecapacity;
                data.nooffillings = nooffillings;

                if (txtimage != null)
                {
                    if (txtimage.FileName != null)
                    {

                        string filename = Path.GetFileNameWithoutExtension(txtimage.FileName);
                        string ext = Path.GetExtension(txtimage.FileName);
                        filename = filename + ext;
                        data.image1 = "/imageakash/" + filename;
                        filename = Path.Combine(Server.MapPath("/imageakash/"), filename);
                        txtimage.SaveAs(filename);
                    }
                }
                if (txtimage1 != null)
                {
                    if (txtimage1.FileName != null)
                    {
                        string filename = Path.GetFileNameWithoutExtension(txtimage1.FileName);
                        string ext = Path.GetExtension(txtimage1.FileName);
                        filename = filename + ext;
                        data.image2 = "/imageakash/" + filename;
                        filename = Path.Combine(Server.MapPath("/imageakash/"), filename);
                        txtimage1.SaveAs(filename);

                    }
                }
                AJE.Entry(data).State = EntityState.Modified;
                AJE.SaveChanges();
                return Json("Successfully Saved");
            }



            else
            {
                return Json("Not Updated");
            }


        }

        [HttpPost]
        public ActionResult Bind_State()
        {
            var ddetails = ABE.obj_mstr_states.OrderBy(x => x.order_by).Select(s => new { s.state_name, s.state_id }).ToList();
            return Json(ddetails, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult Bind_District(string id)
        {
            int ids = Convert.ToInt32(id);
            var ddetailDistrict = ABE.obj_mstr_districts.Where(x => x.state_id == ids).Select(x => new { x.district_id, x.district_name }).ToList();
            return Json(ddetailDistrict, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult Bind_Block(string id)
        {
            int ids = Convert.ToInt32(id);
            var ddetailBlock = ABE.obj_mstr_blocks.Where(x => x.district_id == ids).Select(x => new { x.block_id, x.block_name }).ToList();
            return Json(ddetailBlock, JsonRequestBehavior.AllowGet);

        }

        [HttpPost]
        public ActionResult Bind_Grampanchayat(string id)
        {
            int ids = Convert.ToInt32(id);
            var ddetailGram = ABE.obj_mstr_grampanchayat.Where(x => x.block_id == ids).Select(x => new { x.grampanchayat_id, x.grampanchayat_name }).ToList();
            return Json(ddetailGram, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult Update_Social_Monitoring(string datas)
        {

            JavaScriptSerializer js = new JavaScriptSerializer();
            var result = js.Deserialize<socialmonitoring>(datas);

            var ARID = Convert.ToInt32(result.id);
            var Data1 = AJE.obj_socialmonitoring.Where(x => x.id == ARID).FirstOrDefault();
            if (Data1 != null)
            {

                Data1.village = result.village;
                Data1.location = result.location;
                Data1.latitude = result.latitude;
                Data1.longitude = result.longitude;
                Data1.date = result.date;
                Data1.numberofattendees = result.numberofattendees;
                Data1.male = result.male;
                Data1.female = result.female;
                Data1.others = result.others;
                Data1.mom_filename = result.mom_filename;
                Data1.image = result.image;

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
        public ActionResult approve_data(string Data, string year1, string month1)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<Pagenum>(Data);
                    List<users> ddetails = new List<users>();
                    //var ddetails = AJE.obj_users.ToList();
                    var State = result.statename;
                    var Dist = result.districtname;
                    var Block = result.blockname;
                    var Gram = result.gpname;





                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        ddetails = AJE.obj_users.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.grampanchayatname == Gram).ToList();

                    }
                    else
                    {
                        ddetails = AJE.obj_users.ToList();
                        string password = "Test@123";
                        string sText = "8776f108e247ab1e2b323042c049c266407c81fbad41bde1e8dfc1bb66fd267e";

                        byte[] data = Convert.FromBase64String(sText);
                        MD5CryptoServiceProvider md5_new = new MD5CryptoServiceProvider();
                        TripleDESCryptoServiceProvider tripleDES = new TripleDESCryptoServiceProvider();
                        tripleDES.Key = md5_new.ComputeHash(UTF8Encoding.UTF8.GetBytes(password));
                        tripleDES.Mode = CipherMode.ECB;
                        ICryptoTransform transform = tripleDES.CreateDecryptor();
                        byte[] result_new = transform.TransformFinalBlock(data, 0, data.Length);
                        string pass = UTF8Encoding.UTF8.GetString(result_new);





                        //string hashedPlainText = ComputeHash(password);

                        using (SHA256 sha256 = SHA256.Create())
                        {
                            byte[] inputBytes = Encoding.UTF8.GetBytes(sText);
                            byte[] hashBytes = sha256.ComputeHash(inputBytes);
                            StringBuilder stringBuilder_new = new StringBuilder();

                            for (int i = 0; i < hashBytes.Length; i++)
                            {
                                stringBuilder_new.Append(hashBytes[i].ToString("x2"));
                            }

                            string text = stringBuilder_new.ToString();
                        }


                        using (SHA256 sha256 = SHA256.Create())
                        {
                            byte[] inputBytes = Encoding.UTF8.GetBytes(sText);
                            byte[] hashBytes = sha256.ComputeHash(inputBytes);
                            string plainpass = BitConverter.ToString(hashBytes).Replace("-", String.Empty);
                        }

                        StringBuilder stringBuilder = new StringBuilder();
                        MD5CryptoServiceProvider md5 = new MD5CryptoServiceProvider();
                        byte[] bytes = md5.ComputeHash(new UTF8Encoding().GetBytes(sText));
                        for (int i = 0; i < bytes.Length; i++)
                        {
                            stringBuilder.Append(bytes[i].ToString("x2"));
                        }
                        string abc = stringBuilder.ToString();
                        //return stringBuilder.ToString();


                    }

                    var jsonresult = Json(ddetails, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;


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

        private string ComputeHash(string password)
        {
            throw new NotImplementedException();
        }

        [HttpPost]
        public ActionResult data_approve_final(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<users>(Data);

                    if (result.id != 0)
                    {
                        var TKID = Convert.ToInt32(result.id);
                        var Data1 = AJE.obj_users.Where(x => x.id == TKID).SingleOrDefault();
                        if (Data1 != null)
                        {

                            Data1.verification = "Y";
                            AJE.Entry(Data1).State = EntityState.Modified;
                            AJE.SaveChanges();
                            return Json("Approve Data");
                        }
                        else
                        {
                            return Json("Not Approve Data", JsonRequestBehavior.AllowGet);
                        }


                    }
                    else
                    {
                        return Json("Not Data Found", JsonRequestBehavior.AllowGet);
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
        public ActionResult Fetch_Social_Monitoring(string Data, string year1, string month1)   //data to table
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<Pagenum>(Data);
                    List<vw_socialmonitoring> ddetails = new List<vw_socialmonitoring>();
                    // var ddetails = AJE.obj_vw_socialmonitoring.ToList();
                    var State = result.statename;
                    var Dist = result.districtname;
                    var Block = result.blockname;
                    var Gram = result.gpname;
                    var year = year1.ToString();
                    var month = month1.ToString();
                    var PageNumber = result.PageNumber;

                    int recordsToSkip = (PageNumber - 1) * 100;

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        ddetails = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram && x.fyyear == year && x.fymonth == month).OrderByDescending(x=>x.id).Skip(recordsToSkip).Take(100).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram && x.fyyear == year).OrderByDescending(x => x.id).Skip(recordsToSkip).Take(100).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        ddetails = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram).OrderByDescending(x => x.id).Skip(recordsToSkip).Take(100).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        ddetails = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year && x.fymonth == month).OrderByDescending(x => x.id).Skip(recordsToSkip).Take(100).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year).OrderByDescending(x => x.id).Skip(recordsToSkip).Take(100).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        ddetails = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block).OrderByDescending(x => x.id).Skip(recordsToSkip).Take(100).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        ddetails = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.fyyear == year && x.fymonth == month).OrderByDescending(x => x.id).Skip(recordsToSkip).Take(100).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.fyyear == year).OrderByDescending(x => x.id).Skip(recordsToSkip).Take(100).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        ddetails = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Dist).OrderByDescending(x => x.id).Skip(recordsToSkip).Take(100).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        ddetails = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.fyyear == year && x.fymonth == month).OrderByDescending(x => x.id).Skip(recordsToSkip).Take(100).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.fyyear == year).OrderByDescending(x => x.id).Skip(recordsToSkip).Take(100).ToList();

                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        ddetails = AJE.obj_vw_socialmonitoring.Where(x => x.state == State).OrderByDescending(x => x.id).Skip(recordsToSkip).Take(100).ToList();

                    }
                    if (ddetails.Count != 0)
                    {

                        var jsonresult = Json(ddetails, JsonRequestBehavior.AllowGet);
                        jsonresult.MaxJsonLength = int.MaxValue;
                        return jsonresult;
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
        public ActionResult totalFetch_Social_Monitoring(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<Pagenum>(Data);

                    var State = result.statename == "0" ? null : result.statename;
                    var Dist = result.districtname == "0" ? null : result.districtname;
                    var Block = result.blockname == "0" ? null : result.blockname;
                    var Gram = result.gpname == "0" ? null : result.gpname;
                    var year = result.year == "0" ? null : result.year;
                    var month = result.month == "0" ? null : result.month;
                    var PageNumber = result.PageNumber;

                    int gp_count = 0;
                    List<vw_socialmonitoring> ddetails = new List<vw_socialmonitoring>();

                    if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(Dist) && !string.IsNullOrEmpty(Block) && !string.IsNullOrEmpty(Gram) && !string.IsNullOrEmpty(year) && !string.IsNullOrEmpty(month))
                    {
                        ddetails = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram && x.fyyear == year && x.fymonth == month).OrderByDescending(c => c.id).ToList();
                    }
                    else if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(Dist) && !string.IsNullOrEmpty(Block) && !string.IsNullOrEmpty(Gram) && !string.IsNullOrEmpty(year))
                    {
                        ddetails = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram && x.fyyear == year).OrderByDescending(c => c.id).ToList();
                    }
                    else if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(Dist) && !string.IsNullOrEmpty(Block) && !string.IsNullOrEmpty(Gram))
                    {
                        ddetails = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram).OrderByDescending(c => c.id).ToList();
                    }
                    else if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(Dist) && !string.IsNullOrEmpty(Block) && !string.IsNullOrEmpty(year) && !string.IsNullOrEmpty(month))
                    {
                        ddetails = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year && x.fymonth == month).OrderByDescending(c => c.id).ToList();
                    }
                    else if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(Dist) && !string.IsNullOrEmpty(Block) && !string.IsNullOrEmpty(year))
                    {
                        ddetails = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year ).OrderByDescending(c => c.id).ToList();
                    }
                    else if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(Dist) && !string.IsNullOrEmpty(Block))
                    {
                        ddetails = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block ).OrderByDescending(c => c.id).ToList();
                    }
                    else if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(Dist) && !string.IsNullOrEmpty(year) && !string.IsNullOrEmpty(month))
                    {
                        ddetails = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.fyyear == year && x.fymonth == month).OrderByDescending(c => c.id).ToList();
                    }
                    else if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(Dist) && !string.IsNullOrEmpty(year))
                    {
                        ddetails = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.fyyear == year).OrderByDescending(c => c.id).ToList();
                    }
                    else if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(Dist))
                    {
                        ddetails = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Dist ).OrderByDescending(c => c.id).ToList();
                    }
                    else if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(year) && !string.IsNullOrEmpty(month))
                    {
                        ddetails = AJE.obj_vw_socialmonitoring.Where(x => x.state == State  && x.fyyear == year && x.fymonth == month).OrderByDescending(c => c.id).ToList();
                    }
                    else if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(year))
                    {
                        ddetails = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.fyyear == year ).OrderByDescending(c => c.id).ToList();
                    }
                    else if (!string.IsNullOrEmpty(State))
                    {
                        ddetails = AJE.obj_vw_socialmonitoring.Where(x => x.state == State ).OrderByDescending(c => c.id).ToList();
                    }

                    if (ddetails.Count != 0)
                    {
                        gp_count = ddetails.Select(x => x.grampanchayat).Distinct().Count();
                        var Totalpages = Math.Ceiling(ddetails.Count / 100.0);
                        var jsonresult = Json(ddetails.Count + "," + Totalpages + "," + gp_count, JsonRequestBehavior.AllowGet);
                        jsonresult.MaxJsonLength = int.MaxValue;
                        return jsonresult;
                        //return Json(new { exetotal = Final_data.Count, Totalpages, gp = gp_count }, JsonRequestBehavior.AllowGet);
                    }
                   
                    else
                    {

                        var jsonresult = Json(0 + "," + 0 + "," + 0, JsonRequestBehavior.AllowGet);
                        jsonresult.MaxJsonLength = int.MaxValue;
                        return jsonresult;
                    }
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

        [HttpPost]
        public ActionResult totalFetch_Social_Monitoring_old(string Data, string year1, string month1)   //data to table
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<Pagenum>(Data);
                    List<vw_socialmonitoring> ddetails = new List<vw_socialmonitoring>();
                    //var ddetails = AJE.obj_vw_socialmonitoring.ToList();
                    var State = result.statename;
                    var Dist = result.districtname;
                    var Block = result.blockname;
                    var Gram = result.gpname;
                    var year = year1.ToString();
                    var month = month1.ToString();
                    var PageNumber = result.PageNumber;

                    int gp_count = 0;

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        ddetails = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram && x.fyyear == year && x.fymonth == month).ToList();
                        gp_count = ddetails.GroupBy(c => c.grampanchayat).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram && x.fyyear == year).ToList();
                        gp_count = ddetails.GroupBy(c => c.grampanchayat).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        ddetails = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram).ToList();
                        gp_count = ddetails.GroupBy(c => c.grampanchayat).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        ddetails = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year && x.fymonth == month).ToList();
                        gp_count = ddetails.GroupBy(c => c.grampanchayat).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year).ToList();
                        gp_count = ddetails.GroupBy(c => c.grampanchayat).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        ddetails = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block).ToList();
                        gp_count = ddetails.GroupBy(c => c.grampanchayat).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        ddetails = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.fyyear == year && x.fymonth == month).ToList();
                        gp_count = ddetails.GroupBy(c => c.grampanchayat).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.fyyear == year).ToList();
                        gp_count = ddetails.GroupBy(c => c.grampanchayat).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        ddetails = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Dist).ToList();
                        gp_count = ddetails.GroupBy(c => c.grampanchayat).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        ddetails = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.fyyear == year && x.fymonth == month).ToList();
                        gp_count = ddetails.GroupBy(c => c.grampanchayat).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.fyyear == year).ToList();
                        gp_count = ddetails.GroupBy(c => c.grampanchayat).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        ddetails = AJE.obj_vw_socialmonitoring.Where(x => x.state == State).ToList();
                        gp_count = ddetails.GroupBy(c => c.grampanchayat).ToList().Count();
                    }


                    var social_count = ddetails.Count;
                    var Totalpagessocial = Math.Ceiling(ddetails.Count() / 100.0);

                    return Json(social_count + "," + Totalpagessocial + "," + gp_count, JsonRequestBehavior.AllowGet);
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
        public JsonResult DeleteDatas(int Datas) //social monitoring delete 
        {
            string status = "done";
            try
            {

                var data = AJE.obj_socialmonitoring.Find(Datas);
                AJE.obj_socialmonitoring.Remove(data);
                AJE.SaveChanges();

            }
            catch (Exception ex)
            {
                status = ex.Message;

            }
            return Json(status, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult UpdateData(HttpPostedFileBase text13, int? id, string text2, string text3, string text4, string text5, string text6, string text7, string text8, string text9, string text10, string text11, string text12)
        {


            var data = AJE.obj_socialmonitoring.Where(x => x.id == id).FirstOrDefault();

            if (data != null)
            {

                data.id = id;
                data.village = text2;
                data.location = text3;
                data.latitude = text4;
                data.longitude = text5;
                data.date = text6;
                data.event1 = text7;
                data.male = text8;
                data.female = text9;
                data.others = text10;
                data.numberofattendees = text11;
                data.mom_filename = text12;

                if (text13 != null)
                {
                    if (text13.FileName != null)
                    {

                        string filename = Path.GetFileNameWithoutExtension(text13.FileName);
                        string ext = Path.GetExtension(text13.FileName);
                        filename = filename + ext;
                        data.image = "/imageakash/" + filename;
                        filename = Path.Combine(Server.MapPath("/imageakash/"), filename);
                        text13.SaveAs(filename);
                    }
                }

                AJE.Entry(data).State = EntityState.Modified;
                AJE.SaveChanges();
                return Json("Successfully Saved");
            }
            else
            {
                return Json("Not Updated");
            }


        }

        [HttpPost]
        public ActionResult Session_Value(string StateName, string Dist, String Block, string Gram)
        {




            Session["gstate"] = StateName.TrimEnd('\n').TrimEnd(' ');
            Session["gdist"] = Dist.TrimEnd('\n').TrimEnd(' ');
            Session["gblock"] = Block.TrimEnd('\n').TrimEnd(' ');
            Session["ggram"] = Gram.TrimEnd('\n').TrimEnd(' ');
            return Json("Yes", JsonRequestBehavior.AllowGet);
        }

        public ActionResult wellinventory(string state1, string district1, string block01, string gp1, string year1, string month1)
        {
            var State = state1;
            var Dist = district1;
            var Block = block01;
            var Gram = gp1;
            var year = year1;
            var month = month1;

            List<vw_wellinventory> TDetails = new List<vw_wellinventory>();

            if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
            {
                TDetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.fyyear == year && x.fymonth == month).ToList();

            }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
            {
                TDetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.fyyear == year).ToList();

            }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
            {
                TDetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram).ToList();

            }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
            {
                TDetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year && x.fymonth == month).ToList();

            }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
            {
                TDetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year).ToList();

            }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
            {
                TDetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist && x.block == Block).ToList();

            }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
            {
                TDetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist && x.fyyear == year && x.fymonth == month).ToList();

            }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
            {
                TDetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist && x.fyyear == year).ToList();

            }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
            {
                TDetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist).ToList();

            }
            else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
            {
                TDetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.fyyear == year && x.fymonth == month).ToList();

            }
            else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
            {
                TDetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.fyyear == year).ToList();

            }
            else if (State != "0" && State != "" && State != null)
            {
                TDetails = AJE.obj_vw_wellinventory.Where(x => x.state == State).ToList();

            }



            DataTable dt = new DataTable();

            dt.Columns.Add("State", typeof(string));
            dt.Columns.Add("District", typeof(string));
            dt.Columns.Add("Block", typeof(string));
            dt.Columns.Add("Grampanchayat Name ", typeof(string));
            dt.Columns.Add("Village", typeof(string));
            dt.Columns.Add("Location Details", typeof(string));
            dt.Columns.Add("Latitude", typeof(string));
            dt.Columns.Add("Longitude", typeof(string));
            dt.Columns.Add("Date", typeof(string));
            dt.Columns.Add("well id", typeof(string));
            dt.Columns.Add("Type of well", typeof(string));
            dt.Columns.Add("Other Type of well", typeof(string));
            dt.Columns.Add("Owner Name", typeof(string));
            dt.Columns.Add("Diameter of Well (m)", typeof(string));
            dt.Columns.Add("Depth of Well (mbmp)", typeof(string));
            dt.Columns.Add("Depth of Water Level (mbmp)", typeof(string));
            dt.Columns.Add("Height of measuring Point (magl)", typeof(string));
            dt.Columns.Add("Well Water Portable", typeof(string));
            dt.Columns.Add("Use (Drinking / Domastic) / Irrigation / Both", typeof(string));
            dt.Columns.Add("Pump Installed", typeof(string));
            dt.Columns.Add("Volumetric/Electricity Meter Installed", typeof(string));
            dt.Columns.Add("Image Upload", typeof(string));
            dt.Columns.Add("Status", typeof(string));


            if (TDetails.Count != 0)
            {
                foreach (var item in TDetails)
                {
                    DataRow dataRow = dt.NewRow();
                    var approve = item.approve;
                    string dateInputpp2 = item.date;
                    string parsedDatepp2 = "";
                    if (dateInputpp2 != null && dateInputpp2 != "")
                    {
                        DateTime dd = Convert.ToDateTime(dateInputpp2);
                        parsedDatepp2 = dd.ToString("dd MMMM yyyy", CultureInfo.InvariantCulture);
                    }


                    if (approve == null || approve == "")
                    {
                        approve = "At DPMU";
                    }
                    else if (approve == "State")
                    {
                        approve = "Submitted To SPMU";
                    }
                    else if (approve == "Approve")
                    {
                        approve = "Approved";
                    }
                    dataRow["State"] = item.state;
                    dataRow["District"] = item.district;
                    dataRow["Block"] = item.block;
                    dataRow["Grampanchayat Name "] = item.gp;
                    dataRow["Village"] = item.village;
                    dataRow["Location Details"] = item.locationdetails;
                    dataRow["Latitude"] = item.latitude;
                    dataRow["Longitude"] = item.longitude;
                    dataRow["Date"] = parsedDatepp2;
                    dataRow["well id"] = item.wellno;
                    dataRow["Type of well"] = item.welltype;
                    dataRow["Other Type of well"] = item.well_type_other;
                    dataRow["Owner Name"] = item.ownername;
                    dataRow["Diameter of Well (m)"] = item.welldiameter;
                    dataRow["Depth of Well (mbmp)"] = item.welldepth;
                    dataRow["Depth of Water Level (mbmp)"] = item.waterleveldepth;
                    dataRow["Height of measuring Point (magl)"] = item.measuringpoint;
                    dataRow["Well Water Portable"] = item.wellwaterpotable;
                    dataRow["Use (Drinking / Domastic) / Irrigation / Both"] = item.use;
                    dataRow["Pump Installed"] = item.pumpinstalled;
                    dataRow["Volumetric/Electricity Meter Installed"] = item.electricmeterselecteditem;
                    dataRow["Image Upload"] = item.image;
                    dataRow["Status"] = approve;
                    dt.Rows.Add(dataRow);
                }


            }
            else
            {
                DataRow dataRow = dt.NewRow();
                dataRow["State"] = "";
                dataRow["District"] = "";
                dataRow["Block"] = "";
                dataRow["Grampanchayat Name "] = "";
                dataRow["Village"] = "";
                dataRow["Location Details"] = "";
                dataRow["Latitude"] = "";
                dataRow["Longitude"] = "";
                dataRow["Date"] = "";
                dataRow["well id"] = "";
                dataRow["Type of well"] = "";
                dataRow["Other Type of well"] = "NO Data";
                dataRow["Owner Name"] = "";
                dataRow["Diameter of Well (m)"] = "";
                dataRow["Depth of Well (mbmp)"] = "";
                dataRow["Depth of Water Level (mbmp)"] = "";
                dataRow["Height of measuring Point (magl)"] = "";
                dataRow["Well Water Portable"] = "";
                dataRow["Use (Drinking / Domastic) / Irrigation / Both"] = "";
                dataRow["Pump Installed"] = "";
                dataRow["Volumetric/Electricity Meter Installed"] = "";
                dataRow["Image Upload"] = "";
                dataRow["Status"] = "";
                dt.Rows.Add(dataRow);
            }

            if (dt != null && dt.Rows.Count > 0)
            {
                System.Web.HttpContext.Current.Response.Clear();
                System.Web.HttpContext.Current.Response.ClearContent();
                System.Web.HttpContext.Current.Response.ClearHeaders();
                System.Web.HttpContext.Current.Response.Buffer = true;
                System.Web.HttpContext.Current.Response.ContentType = "text/csv";
                System.Web.HttpContext.Current.Response.AddHeader("Content-Disposition", "attachment;filename=Well Inventory.csv");
                System.Web.HttpContext.Current.Response.ContentEncoding = System.Text.Encoding.GetEncoding("windows-1250");

                // Write the CSV header
                for (int j = 0; j < dt.Columns.Count; j++)
                {
                    System.Web.HttpContext.Current.Response.Write("\"" + dt.Columns[j].ToString() + "\"");
                    if (j < dt.Columns.Count - 1)
                        System.Web.HttpContext.Current.Response.Write(",");
                }
                System.Web.HttpContext.Current.Response.Write(Environment.NewLine);

                // Write the CSV data
                foreach (DataRow row in dt.Rows)
                {
                    for (int i = 0; i < dt.Columns.Count; i++)
                    {
                        string fieldValue = row[i].ToString();

                        // Enclose the field in double quotes and escape existing double quotes
                        System.Web.HttpContext.Current.Response.Write("\"" + fieldValue.Replace("\"", "\"\"") + "\"");

                        if (i < dt.Columns.Count - 1)
                            System.Web.HttpContext.Current.Response.Write(",");
                    }

                    System.Web.HttpContext.Current.Response.Write(Environment.NewLine);
                }
                System.Web.HttpContext.Current.Response.Flush();
                System.Web.HttpContext.Current.Response.End();
            }

            return RedirectToAction("Index");
        }

        public ActionResult Raingauge(string state1, string district1, string block01, string gp1, string year1, string month1)
        {
            try { 
            var State = state1;
            var Dist = district1;
            var Block = block01;
            var Gram = gp1;
            var year = year1;
            var month = month1;

            List<vw_rainfall> abc = new List<vw_rainfall>();
            List<vw_rainfall_meta> data = new List<vw_rainfall_meta>();

            if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
            {
                //abc = AJE.obj_vw_rainfall.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.gpname == Gram && x.fyyear == year && x.fymonth == month).GroupBy(x => x.rf_meta_id).Select(group => group.First()).ToList();
                    var details4 = AJE.obj_vw_rainfall.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.gpname == Gram && x.fyyear == year && x.fymonth == month).ToList();
                    var aa = details4.GroupBy(c => c.rf_meta_id).ToList();

                    foreach (var item in aa)
                    {
                        int Check_id = item.Key;
                        var details5 = AJE.obj_vw_rainfall.Where(x => x.rf_meta_id == Check_id).FirstOrDefault();
                        abc.Add(details5);
                    }
                }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
            {
                //abc = AJE.obj_vw_rainfall.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.gpname == Gram && x.fyyear == year).GroupBy(x => x.rf_meta_id).Select(group => group.First()).ToList();
                    var details4 = AJE.obj_vw_rainfall.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.gpname == Gram && x.fyyear == year ).ToList();
                    var aa = details4.GroupBy(c => c.rf_meta_id).ToList();

                    foreach (var item in aa)
                    {
                        int Check_id = item.Key;
                        var details5 = AJE.obj_vw_rainfall.Where(x => x.rf_meta_id == Check_id).FirstOrDefault();
                        abc.Add(details5);
                    }
                }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
            {
                var details4 = AJE.obj_vw_rainfall_meta.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.gpname == Gram).ToList();
                foreach (var item in details4)
                {
                    int Check_id = item.id;
                    var details5 = AJE.obj_vw_rainfall.Where(x => x.rf_meta_id == Check_id).ToList();
                    if (details5.Count != 0)
                    {
                        foreach (var item_new in details5)
                        {
                            abc.Add(item_new);
                            break;
                        }
                    }
                    else
                    {
                        data.Add(item);
                    }
                }
            }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
            {
                //abc = AJE.obj_vw_rainfall.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.fyyear == year && x.fymonth == month).GroupBy(x => x.rf_meta_id).Select(group => group.First()).ToList();
                    var details4 = AJE.obj_vw_rainfall.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block  && x.fyyear == year && x.fymonth == month).ToList();
                    var aa = details4.GroupBy(c => c.rf_meta_id).ToList();

                    foreach (var item in aa)
                    {
                        int Check_id = item.Key;
                        var details5 = AJE.obj_vw_rainfall.Where(x => x.rf_meta_id == Check_id).FirstOrDefault();
                        abc.Add(details5);
                    }
                }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
            {
                //abc = AJE.obj_vw_rainfall.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.fyyear == year).GroupBy(x => x.rf_meta_id).Select(group => group.First()).ToList();
                    var details4 = AJE.obj_vw_rainfall.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.fyyear == year ).ToList();
                    var aa = details4.GroupBy(c => c.rf_meta_id).ToList();

                    foreach (var item in aa)
                    {
                        int Check_id = item.Key;
                        var details5 = AJE.obj_vw_rainfall.Where(x => x.rf_meta_id == Check_id).FirstOrDefault();
                        abc.Add(details5);
                    }
                }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
            {
                var details4 = AJE.obj_vw_rainfall_meta.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block).ToList();
                foreach (var item in details4)
                {
                    int Check_id = item.id;
                    var details5 = AJE.obj_vw_rainfall.Where(x => x.rf_meta_id == Check_id).ToList();
                    if (details5.Count != 0)
                    {
                        foreach (var item_new in details5)
                        {
                            abc.Add(item_new);
                            break;
                        }
                    }
                    else
                    {
                        data.Add(item);
                    }
                }
            }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
            {
                    // abc = AJE.obj_vw_rainfall.Where(x => x.statename == State && x.districtname == Dist && x.fyyear == year && x.fymonth == month).GroupBy(x => x.rf_meta_id).Select(group => group.First()).ToList();
                    var details4 = AJE.obj_vw_rainfall.Where(x => x.statename == State && x.districtname == Dist && x.fyyear == year && x.fymonth == month).ToList();
                    var aa = details4.GroupBy(c => c.rf_meta_id).ToList();

                    foreach (var item in aa)
                    {
                        int Check_id = item.Key;
                        var details5 = AJE.obj_vw_rainfall.Where(x => x.rf_meta_id == Check_id).FirstOrDefault();
                        abc.Add(details5);
                    }
                }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
            {
                    // abc = AJE.obj_vw_rainfall.Where(x => x.statename == State && x.districtname == Dist && x.fyyear == year).GroupBy(x => x.rf_meta_id).Select(group => group.First()).ToList();
                    var details4 = AJE.obj_vw_rainfall.Where(x => x.statename == State && x.districtname == Dist && x.fyyear == year).ToList();
                    var aa = details4.GroupBy(c => c.rf_meta_id).ToList();

                    foreach (var item in aa)
                    {
                        int Check_id = item.Key;
                        var details5 = AJE.obj_vw_rainfall.Where(x => x.rf_meta_id == Check_id).FirstOrDefault();
                        abc.Add(details5);
                    }
                }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
            {
                var details4 = AJE.obj_vw_rainfall_meta.Where(x => x.statename == State && x.districtname == Dist).ToList();
                foreach (var item in details4)
                {
                    int Check_id = item.id;
                    var details5 = AJE.obj_vw_rainfall.Where(x => x.rf_meta_id == Check_id).ToList();
                    if (details5.Count != 0)
                    {
                        foreach (var item_new in details5)
                        {
                            abc.Add(item_new);
                            break;
                        }
                    }
                    else
                    {
                        data.Add(item);
                    }
                }
            }
            else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
            {
                    //    abc = AJE.obj_vw_rainfall.Where(x => x.statename == State && x.fyyear == year && x.fymonth == month).GroupBy(x => x.rf_meta_id).Select(group => group.First()).ToList();
                    var details4 = AJE.obj_vw_rainfall.Where(x => x.statename == State && x.fyyear == year && x.fymonth == month).ToList();
                    var aa = details4.GroupBy(c => c.rf_meta_id).ToList();

                    foreach (var item in aa)
                    {
                        int Check_id = item.Key;
                        var details5 = AJE.obj_vw_rainfall.Where(x => x.rf_meta_id == Check_id).FirstOrDefault();
                        abc.Add(details5);
                    }
                }
            else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
            {
                //abc = AJE.obj_vw_rainfall.Where(x => x.statename == State && x.fyyear == year).GroupBy(x => x.rf_meta_id).Select(group => group.First()).ToList();
                    var details4 = AJE.obj_vw_rainfall.Where(x => x.statename == State && x.fyyear == year ).ToList();
                    var aa = details4.GroupBy(c => c.rf_meta_id).ToList();

                    foreach (var item in aa)
                    {
                        int Check_id = item.Key;
                        var details5 = AJE.obj_vw_rainfall.Where(x => x.rf_meta_id == Check_id).FirstOrDefault();
                        abc.Add(details5);
                    }
                }
            else if (State != "0" && State != "" && State != null)
            {
                var details4 = AJE.obj_vw_rainfall_meta.Where(x => x.statename == State).ToList();
                foreach (var item in details4)
                {
                    int Check_id = item.id;
                    var details5 = AJE.obj_vw_rainfall.Where(x => x.rf_meta_id == Check_id).ToList();
                    if (details5.Count != 0)
                    {
                        foreach (var item_new in details5)
                        {
                            abc.Add(item_new);
                            break;
                        }
                    }
                    else
                    {
                        data.Add(item);
                    }
                }
            }

            DataTable dt = new DataTable();

            dt.Columns.Add("Sl.No", typeof(string));
            dt.Columns.Add("State", typeof(string));
            dt.Columns.Add("District", typeof(string));
            dt.Columns.Add("Block", typeof(string));
            dt.Columns.Add("Grampanchyat", typeof(string));
            dt.Columns.Add("Village Name", typeof(string));
            dt.Columns.Add("Location Details", typeof(string));
            dt.Columns.Add("Latitude", typeof(string));
            dt.Columns.Add("Longitude", typeof(string));
            dt.Columns.Add("Date", typeof(string));
            dt.Columns.Add("Type of Rain Gauge", typeof(string));
            dt.Columns.Add("Rainfall(in mm)", typeof(string));
            dt.Columns.Add("Rainfall Date", typeof(string));
            dt.Columns.Add("Image Upload", typeof(string));
            dt.Columns.Add("Status", typeof(string));
            dt.Columns.Add("Status_dymanic", typeof(string));

            var a = abc.Count;
            var b = data.Count;

            int sr_no = 0;
            if (a != 0)
            {
                foreach (var itema in abc)
                {
                    sr_no++;
                    int wellid = itema.rf_meta_id;
                        List<vw_rainfall> final_dataa = new List<vw_rainfall>();
                        if (year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            final_dataa = AJE.obj_vw_rainfall.Where(x => x.rf_meta_id == wellid && x.fyyear == year && x.fymonth == month).ToList();
                        }
                        else if (year != "0" && year != "" && year != null)
                        {
                            final_dataa = AJE.obj_vw_rainfall.Where(x => x.rf_meta_id == wellid && x.fyyear == year).ToList();
                        }
                        else
                        {
                            final_dataa = AJE.obj_vw_rainfall.Where(x => x.rf_meta_id == wellid).ToList();
                        }
                        //var final_dataa = AJE.obj_vw_rainfall.Where(x => x.rf_meta_id == wellid).ToList();
                    int index = 0;
                    foreach (var item in final_dataa)
                    {
                        index++;
                        var sl_no = "";
                        if (index == 1)
                        {
                            sl_no = Convert.ToString(sr_no);
                        }
                        else
                        {
                            sl_no = "";
                        }

                        DataRow dataRow = dt.NewRow();
                        DateTime dateInputpp2 = item.date_time;
                        string parsedDatepp2 = "";
                        if (dateInputpp2 != null)
                        {
                            parsedDatepp2 = dateInputpp2.ToString("dd MMMM yyyy", CultureInfo.InvariantCulture);
                        }
                        DateTime dateInputpp = item.rf_date;
                        string parsedDatepp = "";
                        if (dateInputpp != null)
                        {
                            parsedDatepp = dateInputpp.ToString("dd MMMM yyyy", CultureInfo.InvariantCulture);
                        }
                        var approve = item.status;
                        if (approve == null || approve == "")
                        {
                            approve = "At DPMU";
                        }
                        else if (approve == "State")
                        {
                            approve = "Submitted To SPMU";
                        }
                        else if (approve == "Approve")
                        {
                            approve = "Approved";
                        }
                        else if (approve == "Reject")
                        {
                            approve = "Rejected by SPMU";
                        }
                        var approve_data = item.status_data;
                        if (approve_data == null || approve == "")
                        {
                            approve_data = "At DPMU";
                        }
                        else if (approve_data == "State")
                        {
                            approve_data = "Submitted To SPMU";
                        }
                        else if (approve_data == "Approve")
                        {
                            approve_data = "Approved";
                        }
                        dataRow["Sl.No"] = sl_no;
                        dataRow["State"] = item.statename;
                        dataRow["District"] = item.districtname;
                        dataRow["Block"] = item.blockname;
                        dataRow["Grampanchyat"] = item.gpname;
                        dataRow["Village Name"] = item.village;
                        dataRow["Location Details"] = item.locationdetail;
                        dataRow["Latitude"] = item.latitude;
                        dataRow["Longitude"] = item.longitude;
                        dataRow["Date"] = parsedDatepp2;
                        dataRow["Type of Rain Gauge"] = item.raingauge;
                        dataRow["Rainfall(in mm)"] = item.rf_reading;
                        dataRow["Rainfall Date"] = parsedDatepp;
                        dataRow["Image Upload"] = item.image2;
                        dataRow["Status"] = approve;
                        dataRow["Status_dymanic"] = approve_data;


                        dt.Rows.Add(dataRow);
                    }

                }
            }
            if (b != 0)
            {
                foreach (var itema in data)
                {
                    sr_no++;
                    int wellid = itema.id;
                        List<vw_rainfall_meta> final_dataa = new List<vw_rainfall_meta>();
                        if (year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            final_dataa = AJE.obj_vw_rainfall_meta.Where(x => x.id == wellid && x.fyyear == year && x.fymonth == month).ToList();
                        }
                        else if (year != "0" && year != "" && year != null )
                        {
                            final_dataa = AJE.obj_vw_rainfall_meta.Where(x => x.id == wellid && x.fyyear == year).ToList();
                        }
                        else
                        {
                            final_dataa = AJE.obj_vw_rainfall_meta.Where(x => x.id == wellid).ToList();
                        }
                        //var final_dataa = AJE.obj_vw_rainfall_meta.Where(x => x.id == wellid).ToList();
                    int index = 0;
                    foreach (var item_new in final_dataa)
                    {
                        index++;
                        var sl_no = "";
                        if (index == 1)
                        {
                            sl_no = Convert.ToString(sr_no);
                        }
                        else
                        {
                            sl_no = "";
                        }

                        DataRow dataRow = dt.NewRow();
                        string dateInputpp2 = item_new.date_time;
                        string parsedDatepp2 = "";
                        if (dateInputpp2 != null)
                        {
                            DateTime dd = Convert.ToDateTime(dateInputpp2);
                            parsedDatepp2 = dd.ToString("dd MMMM yyyy", CultureInfo.InvariantCulture);
                        }

                        var approve = item_new.status;

                        if (approve == null || approve == "")
                        {
                            approve = "At DPMU";
                        }
                        else if (approve == "State")
                        {
                            approve = "Submitted To SPMU";
                        }
                        else if (approve == "Approve")
                        {
                            approve = "Approved";
                        }
                        else if (approve == "Reject")
                        {
                            approve = "Rejected by SPMU";
                        }
                        dataRow["Sl.No"] = sl_no;
                        dataRow["State"] = item_new.statename;
                        dataRow["District"] = item_new.districtname;
                        dataRow["Block"] = item_new.blockname;
                        dataRow["Grampanchyat"] = item_new.gpname;
                        dataRow["Village Name"] = item_new.village;
                        dataRow["Location Details"] = item_new.locationdetail;
                        dataRow["Latitude"] = item_new.latitude;
                        dataRow["Longitude"] = item_new.longitude;
                        dataRow["Date"] = parsedDatepp2;
                        dataRow["Type of Rain Gauge"] = item_new.raingauge;
                        dataRow["Rainfall(in mm)"] = "";
                        dataRow["Rainfall Date"] = "";
                        dataRow["Image Upload"] = item_new.image2;
                        dataRow["Status"] = approve;
                        dataRow["Status_dymanic"] = "";


                        dt.Rows.Add(dataRow);
                    }
                }
            }
            if (a == 0 && b == 0)
            {
                DataRow dataRow = dt.NewRow();
                dataRow["Sl.No"] = "";
                dataRow["State"] = "";
                dataRow["District"] = "";
                dataRow["Block"] = "";
                dataRow["Grampanchyat"] = "";
                dataRow["Village Name"] = "";
                dataRow["Location Details"] = "";
                dataRow["Latitude"] = "";
                dataRow["Longitude"] = "No Data";
                dataRow["Date"] = "";
                dataRow["Type of Rain Gauge"] = "";
                dataRow["Rainfall(in mm)"] = "";
                dataRow["Rainfall Date"] = "";
                dataRow["Image Upload"] = "";
                dataRow["Status"] = "";
                dataRow["Status_dymanic"] = "";
                dt.Rows.Add(dataRow);
            }
            if (dt != null && dt.Rows.Count > 0)
            {
                System.Web.HttpContext.Current.Response.Clear();
                System.Web.HttpContext.Current.Response.ClearContent();
                System.Web.HttpContext.Current.Response.ClearHeaders();
                System.Web.HttpContext.Current.Response.Buffer = true;
                System.Web.HttpContext.Current.Response.ContentType = "text/csv";
                System.Web.HttpContext.Current.Response.AddHeader("Content-Disposition", "attachment;filename=Rainfall.csv");
                System.Web.HttpContext.Current.Response.ContentEncoding = System.Text.Encoding.GetEncoding("windows-1250");

                // Write the CSV header
                for (int j = 0; j < dt.Columns.Count; j++)
                {
                    System.Web.HttpContext.Current.Response.Write("\"" + dt.Columns[j].ToString() + "\"");
                    if (j < dt.Columns.Count - 1)
                        System.Web.HttpContext.Current.Response.Write(",");
                }
                System.Web.HttpContext.Current.Response.Write(Environment.NewLine);

                // Write the CSV data
                foreach (DataRow row in dt.Rows)
                {
                    for (int i = 0; i < dt.Columns.Count; i++)
                    {
                        string fieldValue = row[i].ToString();

                        // Enclose the field in double quotes and escape existing double quotes
                        System.Web.HttpContext.Current.Response.Write("\"" + fieldValue.Replace("\"", "\"\"") + "\"");

                        if (i < dt.Columns.Count - 1)
                            System.Web.HttpContext.Current.Response.Write(",");
                    }

                    System.Web.HttpContext.Current.Response.Write(Environment.NewLine);
                }
                System.Web.HttpContext.Current.Response.Flush();
                System.Web.HttpContext.Current.Response.End();
            }

            return RedirectToAction("Index");

            }
            catch (Exception Ex)
            {
                return Json("Error", JsonRequestBehavior.AllowGet);
            }
        }

        public ActionResult socialevent(string state1, string district1, string block01, string gp1, string year1, string month1)
        {
            var State = state1;
            var Dist = district1;
            var Block = block01;
            var Gram = gp1;
            var year = year1;
            var month = month1;



            List<vw_socialmonitoring> ddetails = AJE.obj_vw_socialmonitoring.ToList();

            if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
            {
                ddetails = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram && x.fyyear == year && x.fymonth == month).ToList();

            }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
            {
                ddetails = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram && x.fyyear == year).ToList();

            }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
            {
                ddetails = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram).ToList();

            }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
            {
                ddetails = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year && x.fymonth == month).ToList();

            }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
            {
                ddetails = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year).ToList();

            }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
            {
                ddetails = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block).ToList();

            }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
            {
                ddetails = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.fyyear == year && x.fymonth == month).ToList();

            }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
            {
                ddetails = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.fyyear == year).ToList();

            }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
            {
                ddetails = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Dist).ToList();

            }
            else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
            {
                ddetails = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.fyyear == year && x.fymonth == month).ToList();

            }
            else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
            {
                ddetails = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.fyyear == year).ToList();

            }
            else if (State != "0" && State != "" && State != null)
            {
                ddetails = AJE.obj_vw_socialmonitoring.Where(x => x.state == State).ToList();

            }

            DataTable dt = new DataTable();

            dt.Columns.Add("State", typeof(string));
            dt.Columns.Add("District", typeof(string));
            dt.Columns.Add("Block", typeof(string));
            dt.Columns.Add("Grampanchyat", typeof(string));
            dt.Columns.Add("Village Name", typeof(string));
            dt.Columns.Add("Location Details", typeof(string));
            dt.Columns.Add("Latitude", typeof(string));
            dt.Columns.Add("Longitude", typeof(string));
            dt.Columns.Add("Date", typeof(string));
            dt.Columns.Add("Name of Event", typeof(string));
            dt.Columns.Add("Other Event", typeof(string));
            dt.Columns.Add("Male", typeof(string));
            dt.Columns.Add("Female", typeof(string));
            dt.Columns.Add("Transgender", typeof(string));
            dt.Columns.Add("No. of Attendees", typeof(string));
            dt.Columns.Add("MOM(Minutes of Meeting)/Attendance Sheet", typeof(string));
            dt.Columns.Add("Photograph", typeof(string));
            dt.Columns.Add("Status", typeof(string));

            if (ddetails.Count != 0)
            {
                for (int i = 0; i < ddetails.Count; i++)
                {
                    DataRow dataRow = dt.NewRow();
                    string dateInputpp2 = ddetails[i].date;
                    string parsedDatepp2 = "";
                    if (dateInputpp2 != null && dateInputpp2 != "")
                    {
                        DateTime date = Convert.ToDateTime(dateInputpp2);
                        parsedDatepp2 = date.ToString("dd MMMM yyyy", CultureInfo.InvariantCulture);

                    }
                    var approve = ddetails[i].approve;
                    if (approve == null || approve == "")
                    {
                        approve = "At DPMU";
                    }
                    else if (approve == "State")
                    {
                        approve = "Submitted To SPMU";
                    }
                    else if (approve == "Approve")
                    {
                        approve = "Approved";
                    }

                    dataRow["State"] = ddetails[i].state;
                    dataRow["District"] = ddetails[i].district;
                    dataRow["Block"] = ddetails[i].block;
                    dataRow["Grampanchyat"] = ddetails[i].grampanchayat;
                    dataRow["Village Name"] = ddetails[i].village;
                    dataRow["Location Details"] = ddetails[i].location;
                    dataRow["Latitude"] = ddetails[i].latitude;
                    dataRow["Longitude"] = ddetails[i].longitude;
                    dataRow["Date"] = parsedDatepp2;
                    dataRow["Name of Event"] = ddetails[i].event1;
                    dataRow["Other Event"] = ddetails[i].otherevent;
                    dataRow["Male"] = ddetails[i].male;
                    dataRow["Female"] = ddetails[i].female;
                    dataRow["Transgender"] = ddetails[i].others;
                    dataRow["No. of Attendees"] = ddetails[i].numberofattendees;
                    dataRow["MOM(Minutes of Meeting)/Attendance Sheet"] = ddetails[i].minutesofmeeting;
                    dataRow["Photograph"] = ddetails[i].image;
                    dataRow["Status"] = approve;

                    dt.Rows.Add(dataRow);
                }
            }
            else
            {
                DataRow dataRow = dt.NewRow();
                dataRow["State"] = "";
                dataRow["District"] = "";
                dataRow["Block"] = "";
                dataRow["Grampanchyat"] = "";
                dataRow["Village Name"] = "";
                dataRow["Location Details"] = "";
                dataRow["Latitude"] = "";
                dataRow["Longitude"] = "";
                dataRow["Date"] = "No Data";
                dataRow["Name of Event"] = "";
                dataRow["Other Event"] = "";
                dataRow["Male"] = "";
                dataRow["Female"] = "";
                dataRow["Transgender"] = "";
                dataRow["No. of Attendees"] = "";
                dataRow["MOM(Minutes of Meeting)/Attendance Sheet"] = "";
                dataRow["Photograph"] = "";
                dataRow["Status"] = "";

                dt.Rows.Add(dataRow);
            }
            if (dt != null && dt.Rows.Count > 0)
            {
                System.Web.HttpContext.Current.Response.Clear();
                System.Web.HttpContext.Current.Response.ClearContent();
                System.Web.HttpContext.Current.Response.ClearHeaders();
                System.Web.HttpContext.Current.Response.Buffer = true;
                System.Web.HttpContext.Current.Response.ContentType = "text/csv";
                System.Web.HttpContext.Current.Response.AddHeader("Content-Disposition", "attachment;filename=Social Event.csv");
                System.Web.HttpContext.Current.Response.ContentEncoding = System.Text.Encoding.GetEncoding("windows-1250");

                // Write the CSV header
                for (int j = 0; j < dt.Columns.Count; j++)
                {
                    System.Web.HttpContext.Current.Response.Write("\"" + dt.Columns[j].ToString() + "\"");
                    if (j < dt.Columns.Count - 1)
                        System.Web.HttpContext.Current.Response.Write(",");
                }
                System.Web.HttpContext.Current.Response.Write(Environment.NewLine);

                // Write the CSV data
                foreach (DataRow row in dt.Rows)
                {
                    for (int i = 0; i < dt.Columns.Count; i++)
                    {
                        string fieldValue = row[i].ToString();

                        // Enclose the field in double quotes and escape existing double quotes
                        System.Web.HttpContext.Current.Response.Write("\"" + fieldValue.Replace("\"", "\"\"") + "\"");

                        if (i < dt.Columns.Count - 1)
                            System.Web.HttpContext.Current.Response.Write(",");
                    }

                    System.Web.HttpContext.Current.Response.Write(Environment.NewLine);
                }
                System.Web.HttpContext.Current.Response.Flush();
                System.Web.HttpContext.Current.Response.End();
            }

            return RedirectToAction("Index");

        }

        public ActionResult waterquality(string state1, string district1, string block01, string gp1, string year1, string month1)
        {
            try
            {
                var State = state1;
                var Dist = district1;
                var Block = block01;
                var Gram = gp1;
                var year = year1;
                var month = month1;

                List<vw_water_all> abc = new List<vw_water_all>();
                List<vw_water> data = new List<vw_water>();
                if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                {
                    //abc = AJE.obj_vw_water_all.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.fyyear == year && x.fymonth == month).GroupBy(x => x.well_id).Select(group => group.First()).ToList();
                    var details4 = AJE.obj_vw_water_all.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.fyyear == year && x.fymonth == month).ToList();
                    var aa = details4.GroupBy(c => c.well_id).ToList();

                    foreach (var item in aa)
                    {
                        var Check_id = item.Key;
                        var details5 = AJE.obj_vw_water_all.Where(x => x.well_id == Check_id).FirstOrDefault();
                        abc.Add(details5);
                    }
                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
                {
                    //abc = AJE.obj_vw_water_all.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.fyyear == year).GroupBy(x => x.well_id).Select(group => group.First()).ToList();
                    var details4 = AJE.obj_vw_water_all.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.fyyear == year ).ToList();
                    var aa = details4.GroupBy(c => c.well_id).ToList();

                    foreach (var item in aa)
                    {
                        var Check_id = item.Key;
                        var details5 = AJE.obj_vw_water_all.Where(x => x.well_id == Check_id).FirstOrDefault();
                        abc.Add(details5);
                    }
                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                {
                    var details4 = AJE.obj_vw_water.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram).ToList();
                    foreach (var item in details4)
                    {
                        var Check_id = item.well_id;
                        var details5 = AJE.obj_vw_water_all.Where(x => x.well_id == Check_id).ToList();
                        if (details5.Count != 0)
                        {
                            foreach (var item_new in details5)
                            {
                                abc.Add(item_new);
                                break;
                            }
                        }
                        else
                        {
                            data.Add(item);
                        }
                    }
                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                {
                    //abc = AJE.obj_vw_water_all.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year && x.fymonth == month).GroupBy(x => x.well_id).Select(group => group.First()).ToList();
                    var details4 = AJE.obj_vw_water_all.Where(x => x.state == State && x.district == Dist && x.block == Block&& x.fyyear == year && x.fymonth == month).ToList();
                    var aa = details4.GroupBy(c => c.well_id).ToList();

                    foreach (var item in aa)
                    {
                        var Check_id = item.Key;
                        var details5 = AJE.obj_vw_water_all.Where(x => x.well_id == Check_id).FirstOrDefault();
                        abc.Add(details5);
                    }
                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
                {
                    //abc = AJE.obj_vw_water_all.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year).GroupBy(x => x.well_id).Select(group => group.First()).ToList();
                    var details4 = AJE.obj_vw_water_all.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year ).ToList();
                    var aa = details4.GroupBy(c => c.well_id).ToList();

                    foreach (var item in aa)
                    {
                        var Check_id = item.Key;
                        var details5 = AJE.obj_vw_water_all.Where(x => x.well_id == Check_id).FirstOrDefault();
                        abc.Add(details5);
                    }
                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                {
                    var details4 = AJE.obj_vw_water.Where(x => x.state == State && x.district == Dist && x.block == Block).ToList();
                    foreach (var item in details4)
                    {
                        var Check_id = item.well_id;
                        var details5 = AJE.obj_vw_water_all.Where(x => x.well_id == Check_id).ToList();
                        if (details5.Count != 0)
                        {
                            foreach (var item_new in details5)
                            {
                                abc.Add(item_new);
                                break;
                            }
                        }
                        else
                        {
                            data.Add(item);
                        }
                    }
                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                {
                    // abc = AJE.obj_vw_water_all.Where(x => x.state == State && x.district == Dist && x.fyyear == year && x.fymonth == month).GroupBy(x => x.well_id).Select(group => group.First()).ToList();
                    var details4 = AJE.obj_vw_water_all.Where(x => x.state == State && x.district == Dist && x.fyyear == year && x.fymonth == month).ToList();
                    var aa = details4.GroupBy(c => c.well_id).ToList();

                    foreach (var item in aa)
                    {
                        var Check_id = item.Key;
                        var details5 = AJE.obj_vw_water_all.Where(x => x.well_id == Check_id).FirstOrDefault();
                        abc.Add(details5);
                    }
                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
                {
                    //abc = AJE.obj_vw_water_all.Where(x => x.state == State && x.district == Dist && x.fyyear == year).GroupBy(x => x.well_id).Select(group => group.First()).ToList();
                    var details4 = AJE.obj_vw_water_all.Where(x => x.state == State && x.district == Dist && x.fyyear == year).ToList();
                    var aa = details4.GroupBy(c => c.well_id).ToList();

                    foreach (var item in aa)
                    {
                        var Check_id = item.Key;
                        var details5 = AJE.obj_vw_water_all.Where(x => x.well_id == Check_id).FirstOrDefault();
                        abc.Add(details5);
                    }
                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                {
                    var details4 = AJE.obj_vw_water.Where(x => x.state == State && x.district == Dist).ToList();
                    foreach (var item in details4)
                    {
                        var Check_id = item.well_id;
                        var details5 = AJE.obj_vw_water_all.Where(x => x.well_id == Check_id).ToList();
                        if (details5.Count != 0)
                        {
                            foreach (var item_new in details5)
                            {
                                abc.Add(item_new);
                                break;
                            }
                        }
                        else
                        {
                            data.Add(item);
                        }
                    }
                }
                else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                {
                    // abc = AJE.obj_vw_water_all.Where(x => x.state == State && x.fyyear == year && x.fymonth == month).GroupBy(x => x.well_id).Select(group => group.First()).ToList();
                    var details4 = AJE.obj_vw_water_all.Where(x => x.state == State && x.fyyear == year && x.fymonth == month).ToList();
                    var aa = details4.GroupBy(c => c.well_id).ToList();

                    foreach (var item in aa)
                    {
                        var Check_id = item.Key;
                        var details5 = AJE.obj_vw_water_all.Where(x => x.well_id == Check_id).FirstOrDefault();
                        abc.Add(details5);
                    }
                }
                else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
                {
                    //abc = AJE.obj_vw_water_all.Where(x => x.state == State && x.fyyear == year).GroupBy(x => x.well_id).Select(group => group.First()).ToList();
                    var details4 = AJE.obj_vw_water_all.Where(x => x.state == State && x.fyyear == year).ToList();
                    var aa = details4.GroupBy(c => c.well_id).ToList();

                    foreach (var item in aa)
                    {
                        var Check_id = item.Key;
                        var details5 = AJE.obj_vw_water_all.Where(x => x.well_id == Check_id).FirstOrDefault();
                        abc.Add(details5);
                    }
                }
                else if (State != "0" && State != "" && State != null)
                {
                    var details4 = AJE.obj_vw_water.Where(x => x.state == State).ToList();
                    foreach (var item in details4)
                    {
                        var Check_id = item.well_id;
                        var details5 = AJE.obj_vw_water_all.Where(x => x.well_id == Check_id).ToList();
                        if (details5.Count != 0)
                        {
                            foreach (var item_new in details5)
                            {
                                abc.Add(item_new);
                                break;
                            }
                        }
                        else
                        {
                            data.Add(item);
                        }
                    }
                }



                DataTable dt = new DataTable();
                dt.Columns.Add("Sl.No", typeof(string));
                dt.Columns.Add("state", typeof(string));
                dt.Columns.Add("district", typeof(string));
                dt.Columns.Add("block", typeof(string));
                dt.Columns.Add("grampanchayat", typeof(string));
                dt.Columns.Add("Village Name", typeof(string));
                dt.Columns.Add("Location Details", typeof(string));
                dt.Columns.Add("Latitude", typeof(string));
                dt.Columns.Add("Longitude", typeof(string));
                dt.Columns.Add("Meta Date", typeof(string));
                dt.Columns.Add("Type of well", typeof(string));
                dt.Columns.Add("Other Type of well", typeof(string));
                dt.Columns.Add("Well ID", typeof(string));
                dt.Columns.Add("Well Depth (m bgl)", typeof(string));
                dt.Columns.Add("Data Date", typeof(string));
                dt.Columns.Add("pH", typeof(string));
                dt.Columns.Add("Total Hardness(mg/l)", typeof(string));
                dt.Columns.Add("Alkalinity(mg/l)", typeof(string));
                dt.Columns.Add("Nitrate(mg/l)", typeof(string));
                dt.Columns.Add("Fluoride(mg/l)", typeof(string));
                dt.Columns.Add("Iron(mg/l)", typeof(string));
                dt.Columns.Add("EC(µS/cm)", typeof(string));
                dt.Columns.Add("Chloride(mg/l)", typeof(string));
                dt.Columns.Add("Free Chlorine(mg/l)", typeof(string));
                dt.Columns.Add("Turbudity(mg/l)", typeof(string));
                dt.Columns.Add("TDS(mg/l)", typeof(string));
                dt.Columns.Add("Bacterial Test", typeof(string));
                dt.Columns.Add("Status", typeof(string));
                dt.Columns.Add("Status_dymanic", typeof(string));

                var a = abc.Count;
                var b = data.Count;
                //var distinctNames = abc.GroupBy(x => x.well_id).Select(group => group.First()).ToList();

                int sr_no = 0;
                if (a != 0)
                {
                    foreach (var itema in abc)
                    {
                        sr_no++;
                        var wellid = itema.well_id;
                        List<vw_water_all> final_dataa = new List<vw_water_all>();
                        if (year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            final_dataa = AJE.obj_vw_water_all.Where(x => x.well_id == wellid && x.fyyear == year && x.fymonth == month).ToList();
                        }
                        else if (year != "0" && year != "" && year != null)
                        {
                            final_dataa = AJE.obj_vw_water_all.Where(x => x.well_id == wellid && x.fyyear == year).ToList();
                        }
                        else
                        {
                            final_dataa = AJE.obj_vw_water_all.Where(x => x.well_id == wellid).ToList();
                        }
                       // var final_dataa = AJE.obj_vw_water_all.Where(x => x.well_id == wellid).ToList();
                        int index = 0;
                        foreach (var item in final_dataa)
                        {
                            index++;
                            var sl_no = "";
                            if (index == 1)
                            {
                                sl_no = Convert.ToString(sr_no);
                            }
                            else
                            {
                                sl_no = "";
                            }

                            DataRow dataRow = dt.NewRow();
                            DateTime dateInputpp2 = item.entry_time;
                            string parsedDatepp2 = "";
                            if (dateInputpp2 != null)
                            {
                                //DateTime Reg_Date11 = dateInputpp2.Split(':');
                                parsedDatepp2 = dateInputpp2.ToString("dd MMMM yyyy", CultureInfo.InvariantCulture);


                            }
                            string dateInputpp = item.qi_date;
                            var parsedDatepp = "";
                            if (dateInputpp != null && dateInputpp != "")
                            {
                                string[] Reg_Date11 = dateInputpp.Split('-');
                                var dd = Reg_Date11[0];
                                var mm = Reg_Date11[1];
                                var yyyy = Reg_Date11[2];
                                if (dd == "2021" || dd == "2022" || dd == "2023" || dd == "2024")
                                {
                                    DateTime date = Convert.ToDateTime(dateInputpp);
                                    parsedDatepp = date.ToString("dd MMMM yyyy", CultureInfo.InvariantCulture);

                                }
                                else
                                {
                                    var ddd = yyyy + '-' + mm + '-' + dd;
                                    DateTime date = Convert.ToDateTime(ddd);
                                    parsedDatepp = date.ToString("dd MMMM yyyy", CultureInfo.InvariantCulture);
                                }

                            }
                            var approve = item.status;
                            if (approve == null || approve == "")
                            {
                                approve = "At DPMU";
                            }
                            else if (approve == "State")
                            {
                                approve = "Submitted To SPMU";
                            }
                            else if (approve == "Approve")
                            {
                                approve = "Approved";
                            }
                            var approve_data = item.status_data;
                            if (approve_data == null || approve == "")
                            {
                                approve_data = "At DPMU";
                            }
                            else if (approve_data == "State")
                            {
                                approve_data = "Submitted To SPMU";
                            }
                            else if (approve_data == "Approve")
                            {
                                approve_data = "Approved";
                            }
                            else if (approve == "Reject")
                            {
                                approve = "Rejected By SPMU";
                            }

                            dataRow["Sl.No"] = sl_no;
                            dataRow["state"] = item.state;
                            dataRow["district"] = item.district;
                            dataRow["block"] = item.block;
                            dataRow["grampanchayat"] = item.gp;
                            dataRow["Village Name"] = item.village;
                            dataRow["Location Details"] = item.location_details;
                            dataRow["Latitude"] = item.latitude;
                            dataRow["Longitude"] = item.longitude;
                            dataRow["Meta Date"] = parsedDatepp2;
                            dataRow["Type of well"] = item.type_of_well;
                            dataRow["Other Type of well"] = item.others;
                            dataRow["Well ID"] = item.well_id;
                            dataRow["Well Depth (m bgl)"] = item.well_depth_mbgl;
                            dataRow["Data Date"] = parsedDatepp;
                            dataRow["pH"] = item.ph;
                            dataRow["Total Hardness(mg/l)"] = item.total_hardness_mgl;
                            dataRow["Alkalinity(mg/l)"] = item.alkalinity_mgl;
                            dataRow["Nitrate(mg/l)"] = item.nitrate_mgl;
                            dataRow["Fluoride(mg/l)"] = item.fluoride_mgl;
                            dataRow["Iron(mg/l)"] = item.iron_mgl;
                            dataRow["EC(µS/cm)"] = item.ec_us_cm;
                            dataRow["Chloride(mg/l)"] = item.chloride;
                            dataRow["Free Chlorine(mg/l)"] = item.free_chlorine;
                            dataRow["Turbudity(mg/l)"] = item.turbudity;
                            dataRow["TDS(mg/l)"] = item.tds;
                            dataRow["Bacterial Test"] = item.bacterial_test;
                            dataRow["Status"] = approve;
                            dataRow["Status_dymanic"] = approve_data;
                            dt.Rows.Add(dataRow);
                        }

                    }


                }
                if (b != 0)
                {
                    foreach (var itema in data)
                    {
                        sr_no++;
                        var wellid = itema.well_id;
                        //var final_dataa = AJE.obj_vw_water.Where(x => x.well_id == wellid).ToList();
                        List<vw_water> final_dataa = new List<vw_water>();
                        if (year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            final_dataa = AJE.obj_vw_water.Where(x => x.well_id == wellid && x.fyyear == year && x.fymonth == month).ToList();
                        }
                        else if (year != "0" && year != "" && year != null)
                        {
                            final_dataa = AJE.obj_vw_water.Where(x => x.well_id == wellid && x.fyyear == year).ToList();
                        }
                        else
                        {
                            final_dataa = AJE.obj_vw_water.Where(x => x.well_id == wellid).ToList();
                        }

                        int index = 0;
                        foreach (var item_new in final_dataa)
                        {
                            index++;
                            var sl_no = "";
                            if (index == 1)
                            {
                                sl_no = Convert.ToString(sr_no);
                            }
                            else
                            {
                                sl_no = "";
                            }

                            DateTime dateInputpp2 = item_new.entry_time;
                            string parsedDatepp2 = "";
                            if (dateInputpp2 != null)
                            {

                                parsedDatepp2 = dateInputpp2.ToString("dd MMMM yyyy", CultureInfo.InvariantCulture);
                            }
                            var approve = item_new.status;
                            if (approve == null || approve == "")
                            {
                                approve = "At DPMU";
                            }
                            else if (approve == "State")
                            {
                                approve = "Submitted To SPMU";
                            }
                            else if (approve == "Approve")
                            {
                                approve = "Approved";
                            }
                            else if (approve == "Reject")
                            {
                                approve = "Rejected By SPMU";
                            }
                            DataRow dataRow = dt.NewRow();
                            dataRow["Sl.No"] = sr_no;
                            dataRow["state"] = item_new.state;
                            dataRow["district"] = item_new.district;
                            dataRow["block"] = item_new.block;
                            dataRow["grampanchayat"] = item_new.gp;
                            dataRow["Village Name"] = item_new.village;
                            dataRow["Location Details"] = item_new.location_details;
                            dataRow["Latitude"] = item_new.latitude;
                            dataRow["Longitude"] = item_new.longitude;
                            dataRow["Meta Date"] = parsedDatepp2;
                            dataRow["Type of well"] = item_new.type_of_well;
                            dataRow["Other Type of well"] = item_new.others;
                            dataRow["Well ID"] = item_new.well_id;
                            dataRow["Well Depth (m bgl)"] = item_new.well_depth_mbgl;
                            dataRow["Data Date"] = "";
                            dataRow["pH"] = "";
                            dataRow["Total Hardness(mg/l)"] = "";
                            dataRow["Alkalinity(mg/l)"] = "";
                            dataRow["Nitrate(mg/l)"] = "";
                            dataRow["Fluoride(mg/l)"] = "";
                            dataRow["Iron(mg/l)"] = "";
                            dataRow["EC(µS/cm)"] = "";
                            dataRow["Chloride(mg/l)"] = "";
                            dataRow["Free Chlorine(mg/l)"] = "";
                            dataRow["Turbudity(mg/l)"] = "";
                            dataRow["TDS(mg/l)"] = "";
                            dataRow["Bacterial Test"] = "";
                            dataRow["Status"] = approve;
                            dataRow["Status_dymanic"] = "";
                            dt.Rows.Add(dataRow);
                        }
                    }

                }
                if (a == 0 && b == 0)
                {
                    DataRow dataRow = dt.NewRow();
                    dataRow["Sl.No"] = "";
                    dataRow["state"] = "";
                    dataRow["district"] = "";
                    dataRow["block"] = "";
                    dataRow["grampanchayat"] = "";
                    dataRow["Village Name"] = "";
                    dataRow["Location Details"] = "";
                    dataRow["Latitude"] = "";
                    dataRow["Longitude"] = "";
                    dataRow["Meta Date"] = "";
                    dataRow["Type of well"] = "";
                    dataRow["Other Type of well"] = "";
                    dataRow["Well ID"] = "";
                    dataRow["Well Depth (m bgl)"] = "No Data";
                    dataRow["Data Date"] = "";
                    dataRow["pH"] = "";
                    dataRow["Total Hardness(mg/l)"] = "";
                    dataRow["Alkalinity(mg/l)"] = "";
                    dataRow["Nitrate(mg/l)"] = "";
                    dataRow["Fluoride(mg/l)"] = "";
                    dataRow["Iron(mg/l)"] = "";
                    dataRow["EC(µS/cm)"] = "";
                    dataRow["Chloride(mg/l)"] = "";
                    dataRow["Free Chlorine(mg/l)"] = "";
                    dataRow["Turbudity(mg/l)"] = "";
                    dataRow["TDS(mg/l)"] = "";
                    dataRow["Bacterial Test"] = "";
                    dataRow["Status"] = "";
                    dataRow["Status_dymanic"] = "";
                    dt.Rows.Add(dataRow);
                }
                if (dt != null && dt.Rows.Count > 0)
                {
                    System.Web.HttpContext.Current.Response.Clear();
                    System.Web.HttpContext.Current.Response.ClearContent();
                    System.Web.HttpContext.Current.Response.ClearHeaders();
                    System.Web.HttpContext.Current.Response.Buffer = true;
                    System.Web.HttpContext.Current.Response.ContentType = "text/csv";
                    System.Web.HttpContext.Current.Response.AddHeader("Content-Disposition", "attachment;filename=Water Quality.csv");
                    System.Web.HttpContext.Current.Response.ContentEncoding = System.Text.Encoding.GetEncoding("windows-1250");

                    // Write the CSV header
                    for (int j = 0; j < dt.Columns.Count; j++)
                    {
                        System.Web.HttpContext.Current.Response.Write("\"" + dt.Columns[j].ToString() + "\"");
                        if (j < dt.Columns.Count - 1)
                            System.Web.HttpContext.Current.Response.Write(",");
                    }
                    System.Web.HttpContext.Current.Response.Write(Environment.NewLine);

                    // Write the CSV data
                    foreach (DataRow row in dt.Rows)
                    {
                        for (int i = 0; i < dt.Columns.Count; i++)
                        {
                            string fieldValue = row[i].ToString();

                            // Enclose the field in double quotes and escape existing double quotes
                            System.Web.HttpContext.Current.Response.Write("\"" + fieldValue.Replace("\"", "\"\"") + "\"");

                            if (i < dt.Columns.Count - 1)
                                System.Web.HttpContext.Current.Response.Write(",");
                        }

                        System.Web.HttpContext.Current.Response.Write(Environment.NewLine);
                    }
                    System.Web.HttpContext.Current.Response.Flush();
                    System.Web.HttpContext.Current.Response.End();
                }
                return RedirectToAction("Index");
            }
            catch (Exception Ex)
            {
                return Json("Error", JsonRequestBehavior.AllowGet);
            }
        }

        public ActionResult Geotagging_excel(string state1, string district1, string block01, string gp1, string year1, string month1)
        {
            var State = state1;
            var Dist = district1;
            var Block = block01;
            var Gram = gp1;
            var year = year1;
            var month = month1;



            List<vw_geotagging> ddetails = new List<vw_geotagging>();


            if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
            {
                ddetails = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.gpname == Gram && x.fyyear == year && x.fymonth == month).ToList();

            }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
            {
                ddetails = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.gpname == Gram && x.fyyear == year).ToList();

            }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
            {
                ddetails = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.gpname == Gram).ToList();

            }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
            {
                ddetails = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.fyyear == year && x.fymonth == month).ToList();

            }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
            {
                ddetails = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.fyyear == year).ToList();

            }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
            {
                ddetails = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block).ToList();

            }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
            {
                ddetails = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.districtname == Dist && x.fyyear == year && x.fymonth == month).ToList();

            }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
            {
                ddetails = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.districtname == Dist && x.fyyear == year).ToList();

            }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
            {
                ddetails = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.districtname == Dist).ToList();

            }
            else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
            {
                ddetails = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.fyyear == year && x.fymonth == month).ToList();

            }
            else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
            {
                ddetails = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.fyyear == year).ToList();

            }
            else if (State != "0" && State != "" && State != null)
            {
                ddetails = AJE.obj_vw_geotagging.Where(x => x.statename == State).ToList();

            }

            DataTable dt = new DataTable();
            dt.Columns.Add("State", typeof(string));
            dt.Columns.Add("District", typeof(string));
            dt.Columns.Add("Block", typeof(string));
            dt.Columns.Add("Grampanchyat", typeof(string));
            dt.Columns.Add("Village Name", typeof(string));
            dt.Columns.Add("Location Details", typeof(string));
            dt.Columns.Add("Latitude", typeof(string));
            dt.Columns.Add("Longitude", typeof(string));
            dt.Columns.Add("Date", typeof(string));
            dt.Columns.Add("Type of structure", typeof(string));
            dt.Columns.Add("Other Type of structure", typeof(string));
            dt.Columns.Add("Storage Capacity (Ha m)", typeof(string));
            dt.Columns.Add("No of Fillings", typeof(string));
            dt.Columns.Add("Weather Construct Yes/No", typeof(string));
            dt.Columns.Add("Weather Construct Remark", typeof(string));
            dt.Columns.Add("Image Upload", typeof(string));
            dt.Columns.Add("Status", typeof(string));

            if (ddetails.Count != 0)
            {
                foreach (var item in ddetails)
                {
                    DataRow dataRow = dt.NewRow();
                    string dateInputpp = item.date;
                    DateTime Datespp = new DateTime();
                    string parsedDatepp = "";
                    if (dateInputpp != null && dateInputpp != "")
                    {
                        Datespp = DateTime.Parse(dateInputpp);
                        parsedDatepp = Datespp.ToString("dd MMMM yyyy", CultureInfo.InvariantCulture);

                    }

                    var approve = item.approve;
                    if (approve == null || approve == "")
                    {
                        approve = "At DPMU";
                    }
                    else if (approve == "State")
                    {
                        approve = "Submitted To SPMU";
                    }
                    else if (approve == "Approve")
                    {
                        approve = "Approved";
                    }

                    var other = item.others;
                    if (other == null || other == "")
                    {
                        other = "";
                    }

                    dataRow["State"] = item.statename;
                    dataRow["District"] = item.districtname;
                    dataRow["Block"] = item.blockname;
                    dataRow["Grampanchyat"] = item.gpname;
                    dataRow["Village Name"] = item.village;
                    dataRow["Location Details"] = item.locationdetail;
                    dataRow["Latitude"] = item.latitude;
                    dataRow["Longitude"] = item.longitude;
                    dataRow["Date"] = parsedDatepp;
                    dataRow["Type of structure"] = item.typeofstructure;
                    dataRow["Other Type of structure"] = other;
                    dataRow["Storage Capacity (Ha m)"] = item.storagecapacity;
                    dataRow["No of Fillings"] = item.nooffillings;
                    dataRow["Weather Construct Yes/No"] = item.wcu_aby;
                    dataRow["Weather Construct Remark"] = item.wcu_aby_remark;
                    dataRow["Image Upload"] = item.image1;
                    dataRow["Status"] = approve;
                    dt.Rows.Add(dataRow);
                }




            }
            else
            {
                DataRow dataRow = dt.NewRow();
                dataRow["State"] = "";
                dataRow["District"] = "";
                dataRow["Block"] = "";
                dataRow["Grampanchyat"] = "";
                dataRow["Village Name"] = "";
                dataRow["Location Details"] = "";
                dataRow["Latitude"] = "";
                dataRow["Longitude"] = "No Data";
                dataRow["Date"] = "";
                dataRow["Type of structure"] = "";
                dataRow["Other Type of structure"] = "";
                dataRow["Storage Capacity (Ha m)"] = "";
                dataRow["No of Fillings"] = "";
                dataRow["Weather Construct Yes/No"] = "";
                dataRow["Weather Construct Remark"] = "";
                dataRow["Image Upload"] = "";
                dataRow["Status"] = "";
                dt.Rows.Add(dataRow);
            }
            if (dt != null && dt.Rows.Count > 0)
            {
                System.Web.HttpContext.Current.Response.Clear();
                System.Web.HttpContext.Current.Response.ClearContent();
                System.Web.HttpContext.Current.Response.ClearHeaders();
                System.Web.HttpContext.Current.Response.Buffer = true;
                System.Web.HttpContext.Current.Response.ContentType = "text/csv";
                System.Web.HttpContext.Current.Response.AddHeader("Content-Disposition", "attachment;filename=Geotagging.csv");
                System.Web.HttpContext.Current.Response.ContentEncoding = System.Text.Encoding.GetEncoding("windows-1250");

                // Write the CSV header
                for (int j = 0; j < dt.Columns.Count; j++)
                {
                    System.Web.HttpContext.Current.Response.Write("\"" + dt.Columns[j].ToString() + "\"");
                    if (j < dt.Columns.Count - 1)
                        System.Web.HttpContext.Current.Response.Write(",");
                }
                System.Web.HttpContext.Current.Response.Write(Environment.NewLine);

                // Write the CSV data
                foreach (DataRow row in dt.Rows)
                {
                    for (int i = 0; i < dt.Columns.Count; i++)
                    {
                        string fieldValue = row[i].ToString();

                        // Enclose the field in double quotes and escape existing double quotes
                        System.Web.HttpContext.Current.Response.Write("\"" + fieldValue.Replace("\"", "\"\"") + "\"");

                        if (i < dt.Columns.Count - 1)
                            System.Web.HttpContext.Current.Response.Write(",");
                    }

                    System.Web.HttpContext.Current.Response.Write(Environment.NewLine);
                }
                System.Web.HttpContext.Current.Response.Flush();
                System.Web.HttpContext.Current.Response.End();
            }
            return RedirectToAction("Index");
        }

        public ActionResult exesitingwellexcel(string state1, string district1, string block01, string gp1, string year1, string month1)
        {
            try
            {
                var State = state1;
                var Dist = district1;
                var Block = block01;
                var Gram = gp1;
                var year = year1;
                var month = month1;

                List<vw_gwl_all> abc = new List<vw_gwl_all>();
                List<vw_gwl> data = new List<vw_gwl>();
                if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                {
                    //abc = AJE.obj_vw_gwl_all.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram && x.fyyear == year && x.fymonth == month).GroupBy(x => x.wellid).Select(group => group.First()).ToList();
                    var details4 = AJE.obj_vw_gwl_all.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram && x.fyyear == year && x.fymonth == month).ToList();
                    var aa = details4.GroupBy(c => c.wellid).ToList();

                    foreach (var item in aa)
                    {         
                        var Check_id = item.Key;
                        var details5 = AJE.obj_vw_gwl_all.Where(x => x.wellid == Check_id).FirstOrDefault();
                        abc.Add(details5);
                    }
                  
                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
                {
                   // abc = AJE.obj_vw_gwl_all.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram && x.fyyear == year).GroupBy(x => x.wellid).Select(group => group.First()).ToList();
                    var details4 = AJE.obj_vw_gwl_all.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram && x.fyyear == year).ToList();
                    var aa = details4.GroupBy(c => c.wellid).ToList();

                    foreach (var item in aa)
                    {
                        var Check_id = item.Key;
                        var details5 = AJE.obj_vw_gwl_all.Where(x => x.wellid == Check_id).FirstOrDefault();
                        abc.Add(details5);
                    }
                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                {
                    var details4 = AJE.obj_vw_gwl.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram).ToList();
                    foreach (var item in details4)
                    {
                        var Check_id = item.wellid;
                        var details5 = AJE.obj_vw_gwl_all.Where(x => x.wellid == Check_id).ToList();
                        if (details5.Count != 0)
                        {
                            foreach (var item_new in details5)
                            {
                                abc.Add(item_new);
                                break;
                            }
                        }
                        else
                        {
                            data.Add(item);
                        }
                    }
                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                {
                    //abc = AJE.obj_vw_gwl_all.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year && x.fymonth == month).GroupBy(x => x.wellid).Select(group => group.First()).ToList();
                    var details4 = AJE.obj_vw_gwl_all.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year && x.fymonth == month).ToList();
                    var aa = details4.GroupBy(c => c.wellid).ToList();

                    foreach (var item in aa)
                    {
                        var Check_id = item.Key;
                        var details5 = AJE.obj_vw_gwl_all.Where(x => x.wellid == Check_id).FirstOrDefault();
                        abc.Add(details5);
                    }
                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
                {
                    //abc = AJE.obj_vw_gwl_all.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year).GroupBy(x => x.wellid).Select(group => group.First()).ToList();
                    var details4 = AJE.obj_vw_gwl_all.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year).ToList();
                    var aa = details4.GroupBy(c => c.wellid).ToList();

                    foreach (var item in aa)
                    {
                        var Check_id = item.Key;
                        var details5 = AJE.obj_vw_gwl_all.Where(x => x.wellid == Check_id).FirstOrDefault();
                        abc.Add(details5);
                    }
                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                {
                    var details4 = AJE.obj_vw_gwl.Where(x => x.state == State && x.district == Dist && x.block == Block).ToList();
                    foreach (var item in details4)
                    {
                        var Check_id = item.wellid;
                        var details5 = AJE.obj_vw_gwl_all.Where(x => x.wellid == Check_id).ToList();
                        if (details5.Count != 0)
                        {
                            foreach (var item_new in details5)
                            {
                                abc.Add(item_new);
                                break;
                            }
                        }
                        else
                        {
                            data.Add(item);
                        }
                    }
                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                {
                    //abc = AJE.obj_vw_gwl_all.Where(x => x.state == State && x.district == Dist && x.fyyear == year && x.fymonth == month).GroupBy(x => x.wellid).Select(group => group.First()).ToList();
                    var details4 = AJE.obj_vw_gwl_all.Where(x => x.state == State && x.district == Dist && x.fyyear == year && x.fymonth == month).ToList();
                    var aa = details4.GroupBy(c => c.wellid).ToList();

                    foreach (var item in aa)
                    {
                        var Check_id = item.Key;
                        var details5 = AJE.obj_vw_gwl_all.Where(x => x.wellid == Check_id).FirstOrDefault();
                        abc.Add(details5);
                    }
                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
                {
                    //abc = AJE.obj_vw_gwl_all.Where(x => x.state == State && x.district == Dist && x.fyyear == year).GroupBy(x => x.wellid).Select(group => group.First()).ToList();
                    var details4 = AJE.obj_vw_gwl_all.Where(x => x.state == State && x.district == Dist && x.fyyear == year ).ToList();
                    var aa = details4.GroupBy(c => c.wellid).ToList();

                    foreach (var item in aa)
                    {
                        var Check_id = item.Key;
                        var details5 = AJE.obj_vw_gwl_all.Where(x => x.wellid == Check_id).FirstOrDefault();
                        abc.Add(details5);
                    }
                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                {
                    var details4 = AJE.obj_vw_gwl.Where(x => x.state == State && x.district == Dist).ToList();
                    foreach (var item in details4)
                    {
                        var Check_id = item.wellid;
                        var details5 = AJE.obj_vw_gwl_all.Where(x => x.wellid == Check_id).ToList();
                        if (details5.Count != 0)
                        {
                            foreach (var item_new in details5)
                            {
                                abc.Add(item_new);
                                break;
                            }
                        }
                        else
                        {
                            data.Add(item);
                        }
                    }
                }
                else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                {
                    //abc = AJE.obj_vw_gwl_all.Where(x => x.state == State && x.fyyear == year && x.fymonth == month).GroupBy(x => x.wellid).Select(group => group.First()).ToList();
                    var details4 = AJE.obj_vw_gwl_all.Where(x => x.state == State && x.fyyear == year && x.fymonth == month).ToList();
                    var aa = details4.GroupBy(c => c.wellid).ToList();

                    foreach (var item in aa)
                    {
                        var Check_id = item.Key;
                        var details5 = AJE.obj_vw_gwl_all.Where(x => x.wellid == Check_id).FirstOrDefault();
                        abc.Add(details5);
                    }
                }
                else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
                {
                    //abc = AJE.obj_vw_gwl_all.Where(x => x.state == State && x.fyyear == year).GroupBy(x => x.wellid).Select(group => group.First()).ToList();
                    var details4 = AJE.obj_vw_gwl_all.Where(x => x.state == State && x.fyyear == year).ToList();
                    var aa = details4.GroupBy(c => c.wellid).ToList();

                    foreach (var item in aa)
                    {
                        var Check_id = item.Key;
                        var details5 = AJE.obj_vw_gwl_all.Where(x => x.wellid == Check_id).FirstOrDefault();
                        abc.Add(details5);
                    }
                }
                else if (State != "0" && State != "" && State != null)
                {
                    var details4 = AJE.obj_vw_gwl.Where(x => x.state == State).ToList();
                    foreach (var item in details4)
                    {
                        var Check_id = item.wellid;
                        var details5 = AJE.obj_vw_gwl_all.Where(x => x.wellid == Check_id).ToList();
                        if (details5.Count != 0)
                        {
                            foreach (var item_new in details5)
                            {
                                abc.Add(item_new);
                                break;
                            }
                        }
                        else
                        {
                            data.Add(item);
                        }
                    }
                }

                DataTable dt = new DataTable();
                var a = abc.Count;
                var b = data.Count;
                dt.Columns.Add("Sl.No", typeof(string));
                dt.Columns.Add("state", typeof(string));
                dt.Columns.Add("district", typeof(string));
                dt.Columns.Add("block", typeof(string));
                dt.Columns.Add("grampanchayat", typeof(string));
                dt.Columns.Add("Site Name", typeof(string));
                dt.Columns.Add("Location Details", typeof(string));
                dt.Columns.Add("Latitude", typeof(string));
                dt.Columns.Add("Longitude", typeof(string));
                dt.Columns.Add("Date", typeof(string));
                dt.Columns.Add("Well ID", typeof(string));
                dt.Columns.Add("Type of Well", typeof(string));
                dt.Columns.Add("Other Well Type", typeof(string));
                dt.Columns.Add("OwnerShip Type", typeof(string));
                dt.Columns.Add("Government Source", typeof(string));
                dt.Columns.Add("Diameter of well(m)", typeof(string));
                dt.Columns.Add("Depth of Well(mbmp)", typeof(string));
                dt.Columns.Add("Height of Measuring Point(magl)", typeof(string));
                dt.Columns.Add("Ground Water Level(mbgl)", typeof(string));
                dt.Columns.Add("Ground Water Level Date", typeof(string));
                dt.Columns.Add("Image Upload", typeof(string));
                dt.Columns.Add("Status", typeof(string));
                dt.Columns.Add("Status_dynamic", typeof(string));


                int sr_no = 0;
                if (a != 0)
                {
                    foreach (var itema in abc)
                    {
                        sr_no++;
                        var wellid = itema.wellid;
                        List<vw_gwl_all> final_dataa = new List<vw_gwl_all>();
                        if (year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            final_dataa = AJE.obj_vw_gwl_all.Where(x => x.wellid == wellid && x.fyyear == year && x.fymonth == month).ToList();
                        }
                        else if (year != "0" && year != "" && year != null)
                        {
                            final_dataa = AJE.obj_vw_gwl_all.Where(x => x.wellid == wellid && x.fyyear == year).ToList();
                        }
                        else
                        {
                            final_dataa = AJE.obj_vw_gwl_all.Where(x => x.wellid == wellid).ToList();
                        }

                        int index = 0;
                        foreach (var item in final_dataa)
                        {
                            index++;
                            var sl_no = "";
                            if (index == 1)
                            {
                                sl_no = Convert.ToString(sr_no);
                            }
                            else
                            {
                                sl_no = "";
                            }


                            DataRow dataRow = dt.NewRow();
                            string dateInputpp = item.datetime;
                            string parsedDatepp = "";
                            if (dateInputpp != null && dateInputpp != "")
                            {
                                DateTime date = Convert.ToDateTime(dateInputpp);
                                parsedDatepp = date.ToString("dd MMMM yyyy", CultureInfo.InvariantCulture);

                            }
                            string dateInput = item.gwl_date;
                            string parsedDate = "";
                            if (dateInput != null && dateInput != "")
                            {
                                DateTime date = Convert.ToDateTime(dateInput);
                                parsedDate = date.ToString("dd MMMM yyyy", CultureInfo.InvariantCulture);

                            }
                            var approve = item.status;
                            if (approve == null || approve == "")
                            {
                                approve = "At DPMU";
                            }
                            else if (approve == "State")
                            {
                                approve = "Submitted To SPMU";
                            }
                            else if (approve == "Approve")
                            {
                                approve = "Approved";
                            }
                            else if (approve == "State")
                            {
                                approve = "Rejected by SPMU";
                            }
                            var approve_data = item.status_data;
                            if (approve_data == null || approve == "")
                            {
                                approve_data = "At DPMU";
                            }
                            else if (approve_data == "State")
                            {
                                approve_data = "Submitted To SPMU";
                            }
                            else if (approve_data == "Approve")
                            {
                                approve_data = "Approved";
                            }
                            else if (approve_data == "Reject")
                            {
                                approve_data = "Rejected by SPMU";
                            }
                            var gwl_reading = item.gwl_reading;
                            if (gwl_reading == null || gwl_reading == "")
                            {
                                gwl_reading = "";
                            }
                            dataRow["Sl.No"] = sl_no;
                            dataRow["state"] = item.state;
                            dataRow["district"] = item.district;
                            dataRow["block"] = item.block;
                            dataRow["grampanchayat"] = item.grampanchayat;
                            dataRow["Site Name"] = item.sitename;
                            dataRow["Location Details"] = item.locationdetails;
                            dataRow["Latitude"] = item.latitude;
                            dataRow["Longitude"] = item.longitude;
                            dataRow["Date"] = parsedDatepp;
                            dataRow["Well ID"] = item.wellid;
                            dataRow["Type of Well"] = item.typeofwell;
                            dataRow["Other Well Type"] = item.other_well_type;
                            dataRow["OwnerShip Type"] = item.source_Ownership;
                            dataRow["Government Source"] = item.source_Ownership_type;
                            dataRow["Diameter of well(m)"] = item.Diameter_of_Well;
                            dataRow["Depth of Well(mbmp)"] = item.welldepth;
                            dataRow["Height of Measuring Point(magl)"] = item.Height_of_Measuring_Point;
                            dataRow["Ground Water Level(mbgl)"] = gwl_reading;
                            dataRow["Ground Water Level Date"] = parsedDate;
                            dataRow["Image Upload"] = item.image;
                            dataRow["Status"] = approve;
                            dataRow["Status_dynamic"] = approve_data;


                            dt.Rows.Add(dataRow);
                        }
                    }
                }
                if (b != 0)
                {
                    foreach (var itema in data)
                    {
                        sr_no++;
                        var wellid = itema.wellid;
                        List<vw_gwl> final_dataa = new List<vw_gwl>();
                        if (year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            final_dataa = AJE.obj_vw_gwl.Where(x => x.wellid == wellid && x.fyyear == year && x.fymonth == month).ToList();
                        }
                        else if (year != "0" && year != "" && year != null )
                        {
                            final_dataa = AJE.obj_vw_gwl.Where(x => x.wellid == wellid && x.fyyear == year).ToList();
                        }
                        else
                        {
                            final_dataa = AJE.obj_vw_gwl.Where(x => x.wellid == wellid).ToList();
                        }

                        int index = 0;
                        foreach (var item_new in final_dataa)
                        {
                            index++;
                            var sl_no = "";
                            if (index == 1)
                            {
                                sl_no = Convert.ToString(sr_no);
                            }
                            else
                            {
                                sl_no = "";
                            }
                            DataRow dataRow = dt.NewRow();
                            var approve = item_new.status;
                            string dateInputpp = item_new.datetime;
                            string parsedDatepp = "";
                            if (dateInputpp != null && dateInputpp != "")
                            {
                                DateTime date = Convert.ToDateTime(dateInputpp);
                                parsedDatepp = date.ToString("dd MMMM yyyy", CultureInfo.InvariantCulture);
                            }

                            if (approve == null || approve == "")
                            {
                                approve = "At DPMU";
                            }
                            else if (approve == "State")
                            {
                                approve = "Submitted To SPMU";
                            }
                            else if (approve == "Approve")
                            {
                                approve = "Approved";
                            }
                            else if (approve == "Reject")
                            {
                                approve = "Rejected by SPMU";
                            }
                            dataRow["Sl.No"] = sl_no;
                            dataRow["state"] = item_new.state;
                            dataRow["district"] = item_new.district;
                            dataRow["block"] = item_new.block;
                            dataRow["grampanchayat"] = item_new.grampanchayat;
                            dataRow["Site Name"] = item_new.sitename;
                            dataRow["Location Details"] = item_new.locationdetails;
                            dataRow["Latitude"] = item_new.latitude;
                            dataRow["Longitude"] = item_new.longitude;
                            dataRow["Date"] = parsedDatepp;
                            dataRow["Well ID"] = item_new.wellid;
                            dataRow["Type of Well"] = item_new.typeofwell;
                            dataRow["Other Well Type"] = item_new.other_well_type;
                            dataRow["OwnerShip Type"] = item_new.source_Ownership;
                            dataRow["Government Source"] = item_new.source_Ownership_type;
                            dataRow["Diameter of well(m)"] = item_new.Diameter_of_Well;
                            dataRow["Depth of Well(mbmp)"] = item_new.welldepth;
                            dataRow["Height of Measuring Point(magl)"] = item_new.Height_of_Measuring_Point;
                            dataRow["Ground Water Level(mbgl)"] = "";
                            dataRow["Ground Water Level Date"] = "";
                            dataRow["Image Upload"] = item_new.image;
                            dataRow["Status"] = approve;
                            dataRow["Status_dynamic"] = "";


                            dt.Rows.Add(dataRow);
                        }

                    }
                }
                if (a == 0 && b == 0)
                {
                    DataRow dataRow = dt.NewRow();
                    dataRow["Sl.No"] = "";
                    dataRow["state"] = "";
                    dataRow["district"] = "";
                    dataRow["block"] = "";
                    dataRow["grampanchayat"] = "";
                    dataRow["Site Name"] = "";
                    dataRow["Location Details"] = "";
                    dataRow["Latitude"] = "";
                    dataRow["Longitude"] = "";
                    dataRow["Date"] = "";
                    dataRow["Well ID"] = "No Data";
                    dataRow["Type of Well"] = "";
                    dataRow["Other Well Type"] = "";
                    dataRow["OwnerShip Type"] = "";
                    dataRow["Government Source"] = "";
                    dataRow["Diameter of well(m)"] = "";
                    dataRow["Depth of Well(mbmp)"] = "";
                    dataRow["Height of Measuring Point(magl)"] = "";
                    dataRow["Ground Water Level(mbgl)"] = "";
                    dataRow["Ground Water Level Date"] = "";
                    dataRow["Image Upload"] = "";
                    dataRow["Status"] = "";
                    dataRow["Status_dynamic"] = "";
                    dt.Rows.Add(dataRow);
                }
                if (dt != null && dt.Rows.Count > 0)
                {
                    System.Web.HttpContext.Current.Response.Clear();
                    System.Web.HttpContext.Current.Response.ClearContent();
                    System.Web.HttpContext.Current.Response.ClearHeaders();
                    System.Web.HttpContext.Current.Response.Buffer = true;
                    System.Web.HttpContext.Current.Response.ContentType = "text/csv";
                    System.Web.HttpContext.Current.Response.AddHeader("Content-Disposition", "attachment;filename=Ground Water Level Monitoring.csv");
                    System.Web.HttpContext.Current.Response.ContentEncoding = System.Text.Encoding.GetEncoding("windows-1250");

                    // Write the CSV header
                    for (int j = 0; j < dt.Columns.Count; j++)
                    {
                        System.Web.HttpContext.Current.Response.Write("\"" + dt.Columns[j].ToString() + "\"");
                        if (j < dt.Columns.Count - 1)
                            System.Web.HttpContext.Current.Response.Write(",");
                    }
                    System.Web.HttpContext.Current.Response.Write(Environment.NewLine);

                    // Write the CSV data
                    foreach (DataRow row in dt.Rows)
                    {
                        for (int i = 0; i < dt.Columns.Count; i++)
                        {
                            string fieldValue = row[i].ToString();

                            // Enclose the field in double quotes and escape existing double quotes
                            System.Web.HttpContext.Current.Response.Write("\"" + fieldValue.Replace("\"", "\"\"") + "\"");

                            if (i < dt.Columns.Count - 1)
                                System.Web.HttpContext.Current.Response.Write(",");
                        }

                        System.Web.HttpContext.Current.Response.Write(Environment.NewLine);
                    }

                    System.Web.HttpContext.Current.Response.Flush();
                    System.Web.HttpContext.Current.Response.End();
                }

                return RedirectToAction("Index");
            }
            catch (Exception Ex)
            {
                return Json("Error", JsonRequestBehavior.AllowGet);
            }
        }


        public ActionResult Waterflow_excel(string state1, string district1, string block01, string gp1, string year1, string month1)
        {
            try { 
            var State = state1;
            var Dist = district1;
            var Block = block01;
            var Gram = gp1;
            var year = year1;
            var month = month1;

            List<vw_waterflow_all> abc = new List<vw_waterflow_all>();
            List<vw_waterflow_meta> data = new List<vw_waterflow_meta>();

            if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
            {
                //abc = AJE.obj_vw_waterflow_all.Where(x => x.State == State && x.District == Dist && x.Block == Block && x.GramPanchayat == Gram && x.fyyear == year && x.fymonth == month).GroupBy(x => x.wf_meta_id).Select(group => group.First()).ToList();
                    var details4 = AJE.obj_vw_waterflow_all.Where(x => x.State == State && x.District == Dist && x.Block == Block && x.GramPanchayat == Gram && x.fyyear == year && x.fymonth == month).ToList();
                    var aa = details4.GroupBy(c => c.wf_meta_id).ToList();

                    foreach (var item in aa)
                    {
                        int Check_id = item.Key;
                        var details5 = AJE.obj_vw_waterflow_all.Where(x => x.wf_meta_id == Check_id).FirstOrDefault();
                        abc.Add(details5);
                    }
                }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
            {
                    // abc = AJE.obj_vw_waterflow_all.Where(x => x.State == State && x.District == Dist && x.Block == Block && x.GramPanchayat == Gram && x.fyyear == year).GroupBy(x => x.wf_meta_id).Select(group => group.First()).ToList();
                    var details4 = AJE.obj_vw_waterflow_all.Where(x => x.State == State && x.District == Dist && x.Block == Block && x.GramPanchayat == Gram && x.fyyear == year).ToList();
                    var aa = details4.GroupBy(c => c.wf_meta_id).ToList();

                    foreach (var item in aa)
                    {
                        int Check_id = item.Key;
                        var details5 = AJE.obj_vw_waterflow_all.Where(x => x.wf_meta_id == Check_id).FirstOrDefault();
                        abc.Add(details5);
                    }
                }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
            {
                var details4 = AJE.obj_vw_waterflow_meta.Where(x => x.State == State && x.District == Dist && x.Block == Block && x.GramPanchayat == Gram).ToList();
                for (int i = 0; i < details4.Count; i++)
                {
                    int Check_id = details4[i].id;
                    var details5 = AJE.obj_vw_waterflow_all.Where(x => x.wf_meta_id == Check_id).ToList();
                    if (details5.Count != 0)
                    {
                        for (int j = 0; j < details5.Count; j++)
                        {
                            abc.Add(details5[j]);
                            break;
                        }
                    }
                    else
                    {
                        data.Add(details4[i]);
                    }


                }
            }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
            {
                    // abc = AJE.obj_vw_waterflow_all.Where(x => x.State == State && x.District == Dist && x.Block == Block && x.fyyear == year && x.fymonth == month).GroupBy(x => x.wf_meta_id).Select(group => group.First()).ToList();
                    var details4 = AJE.obj_vw_waterflow_all.Where(x => x.State == State && x.District == Dist && x.Block == Block  && x.fyyear == year && x.fymonth == month).ToList();
                    var aa = details4.GroupBy(c => c.wf_meta_id).ToList();

                    foreach (var item in aa)
                    {
                        int Check_id = item.Key;
                        var details5 = AJE.obj_vw_waterflow_all.Where(x => x.wf_meta_id == Check_id).FirstOrDefault();
                        abc.Add(details5);
                    }
                }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
            {
                    //abc = AJE.obj_vw_waterflow_all.Where(x => x.State == State && x.District == Dist && x.Block == Block && x.fyyear == year).GroupBy(x => x.wf_meta_id).Select(group => group.First()).ToList();
                    var details4 = AJE.obj_vw_waterflow_all.Where(x => x.State == State && x.District == Dist && x.Block == Block  && x.fyyear == year ).ToList();
                    var aa = details4.GroupBy(c => c.wf_meta_id).ToList();

                    foreach (var item in aa)
                    {
                        int Check_id = item.Key;
                        var details5 = AJE.obj_vw_waterflow_all.Where(x => x.wf_meta_id == Check_id).FirstOrDefault();
                        abc.Add(details5);
                    }
                }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
            {
                var details4 = AJE.obj_vw_waterflow_meta.Where(x => x.State == State && x.District == Dist && x.Block == Block).ToList();
                for (int i = 0; i < details4.Count; i++)
                {
                    int Check_id = details4[i].id;
                    var details5 = AJE.obj_vw_waterflow_all.Where(x => x.wf_meta_id == Check_id).ToList();
                    if (details5.Count != 0)
                    {
                        for (int j = 0; j < details5.Count; j++)
                        {
                            abc.Add(details5[j]);
                            break;
                        }
                    }
                    else
                    {
                        data.Add(details4[i]);
                    }
                }
            }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
            {
                    //abc = AJE.obj_vw_waterflow_all.Where(x => x.State == State && x.District == Dist && x.fyyear == year && x.fymonth == month).GroupBy(x => x.wf_meta_id).Select(group => group.First()).ToList();
                    var details4 = AJE.obj_vw_waterflow_all.Where(x => x.State == State && x.District == Dist && x.fyyear == year && x.fymonth == month).ToList();
                    var aa = details4.GroupBy(c => c.wf_meta_id).ToList();

                    foreach (var item in aa)
                    {
                        int Check_id = item.Key;
                        var details5 = AJE.obj_vw_waterflow_all.Where(x => x.wf_meta_id == Check_id).FirstOrDefault();
                        abc.Add(details5);
                    }
                }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
            {
                    //abc = AJE.obj_vw_waterflow_all.Where(x => x.State == State && x.District == Dist && x.fyyear == year).GroupBy(x => x.wf_meta_id).Select(group => group.First()).ToList();
                    var details4 = AJE.obj_vw_waterflow_all.Where(x => x.State == State && x.District == Dist && x.fyyear == year ).ToList();
                    var aa = details4.GroupBy(c => c.wf_meta_id).ToList();

                    foreach (var item in aa)
                    {
                        int Check_id = item.Key;
                        var details5 = AJE.obj_vw_waterflow_all.Where(x => x.wf_meta_id == Check_id).FirstOrDefault();
                        abc.Add(details5);
                    }
                }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
            {
                var details4 = AJE.obj_vw_waterflow_meta.Where(x => x.State == State && x.District == Dist).ToList();
                for (int i = 0; i < details4.Count; i++)
                {
                    int Check_id = details4[i].id;
                    var details5 = AJE.obj_vw_waterflow_all.Where(x => x.wf_meta_id == Check_id).ToList();
                    if (details5.Count != 0)
                    {
                        for (int j = 0; j < details5.Count; j++)
                        {
                            abc.Add(details5[j]);
                            break;
                        }
                    }
                    else
                    {
                        data.Add(details4[i]);
                    }
                }
            }
            else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
            {
                //abc = AJE.obj_vw_waterflow_all.Where(x => x.State == State && x.fyyear == year && x.fymonth == month).GroupBy(x => x.wf_meta_id).Select(group => group.First()).ToList();
                    var details4 = AJE.obj_vw_waterflow_all.Where(x => x.State == State && x.fyyear == year && x.fymonth == month).ToList();
                    var aa = details4.GroupBy(c => c.wf_meta_id).ToList();

                    foreach (var item in aa)
                    {
                        int Check_id = item.Key;
                        var details5 = AJE.obj_vw_waterflow_all.Where(x => x.wf_meta_id == Check_id).FirstOrDefault();
                        abc.Add(details5);
                    }
                }
            else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
            {
               // abc = AJE.obj_vw_waterflow_all.Where(x => x.State == State && x.fyyear == year).GroupBy(x => x.wf_meta_id).Select(group => group.First()).ToList();
                    var details4 = AJE.obj_vw_waterflow_all.Where(x => x.State == State && x.fyyear == year ).ToList();
                    var aa = details4.GroupBy(c => c.wf_meta_id).ToList();

                    foreach (var item in aa)
                    {
                        int Check_id = item.Key;
                        var details5 = AJE.obj_vw_waterflow_all.Where(x => x.wf_meta_id == Check_id).FirstOrDefault();
                        abc.Add(details5);
                    }
                }
            else if (State != "0" && State != "" && State != null)
            {
                var details4 = AJE.obj_vw_waterflow_meta.Where(x => x.State == State).ToList();
                for (int i = 0; i < details4.Count; i++)
                {
                    int Check_id = details4[i].id;
                    var details5 = AJE.obj_vw_waterflow_all.Where(x => x.wf_meta_id == Check_id).ToList();
                    if (details5.Count != 0)
                    {
                        for (int j = 0; j < details5.Count; j++)
                        {
                            abc.Add(details5[j]);
                            break;
                        }
                    }
                    else
                    {
                        data.Add(details4[i]);
                    }


                }
            }

            DataTable dt = new DataTable();
            dt.Columns.Add("Sl.No", typeof(string));
            dt.Columns.Add("State", typeof(string));
            dt.Columns.Add("District", typeof(string));
            dt.Columns.Add("Block", typeof(string));
            dt.Columns.Add("Grampanchyat", typeof(string));
            dt.Columns.Add("Village Name", typeof(string));
            dt.Columns.Add("Location Details", typeof(string));
            dt.Columns.Add("Latitude", typeof(string));
            dt.Columns.Add("Longitude", typeof(string));
            dt.Columns.Add("Date of Entry", typeof(string));
            dt.Columns.Add("Name of the owner", typeof(string));
            dt.Columns.Add("Type of Well", typeof(string));
            dt.Columns.Add("Pump type", typeof(string));
            dt.Columns.Add("Date of Installation of Waterflow meter", typeof(string));
            dt.Columns.Add("Area Irrigated(ha)", typeof(string));
            dt.Columns.Add("Depth of Well(mbmp)", typeof(string));
                dt.Columns.Add("Date of Water Reading", typeof(string));
            dt.Columns.Add("Meter ID", typeof(string));
            dt.Columns.Add("Meter Reading", typeof(string));
            dt.Columns.Add("Unit Of Meter Reading", typeof(string));
            dt.Columns.Add("Status", typeof(string));
            dt.Columns.Add("Status_dynamic", typeof(string));

            var a = abc.Count;
            var b = data.Count;
            int sr_no = 0;
            if (a != 0)
            {
                foreach (var itema in abc)
                {
                    sr_no++;
                    int wellid = itema.wf_meta_id;
                    //var final_dataa = AJE.obj_vw_waterflow_all.Where(x => x.wf_meta_id == wellid).ToList();
                        List<vw_waterflow_all> final_dataa = new List<vw_waterflow_all>();
                        if (year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            final_dataa = AJE.obj_vw_waterflow_all.Where(x => x.wf_meta_id == wellid && x.fyyear == year && x.fymonth == month).ToList();
                        }
                        else if (year != "0" && year != "" && year != null)
                        {
                            final_dataa = AJE.obj_vw_waterflow_all.Where(x => x.wf_meta_id == wellid && x.fyyear == year).ToList();
                        }
                        else
                        {
                            final_dataa = AJE.obj_vw_waterflow_all.Where(x => x.wf_meta_id == wellid).ToList();
                        }

                        int index = 0;
                    foreach (var item in final_dataa)
                    {
                        index++;
                        var sl_no = "";
                        if (index == 1)
                        {
                            sl_no = Convert.ToString(sr_no);
                        }
                        else
                        {
                            sl_no = "";
                        }



                        string dateInputpp = item.DateofEntry;
                        string parsedDatepp = "";
                        if (dateInputpp != null && dateInputpp != "")
                        {
                            DateTime date = Convert.ToDateTime(dateInputpp);
                            parsedDatepp = date.ToString("dd MMMM yyyy", CultureInfo.InvariantCulture);

                        }
                        string dateInputpp1 = item.WaterFlowMeter_Installation_Date;
                        string parsedDatepp1 = "";
                        if (dateInputpp1 != null && dateInputpp1 != "")
                        {
                            string[] Reg_Date11 = dateInputpp1.Split('-');
                            var dd = Reg_Date11[0];
                            var mm = Reg_Date11[1];
                            var yyyy = Reg_Date11[2];
                            if (dd == "2020" || dd == "2021" || dd == "2022" || dd == "2023" || dd == "2024" || dd == "2025")
                            {
                                DateTime ddddd = Convert.ToDateTime(dateInputpp1);
                                parsedDatepp1 = ddddd.ToString("dd MMMM yyyy", CultureInfo.InvariantCulture);

                            }
                            else
                            {
                                var ddd = yyyy + '-' + mm + '-' + dd;
                                DateTime dddddd = Convert.ToDateTime(ddd);
                                parsedDatepp1 = dddddd.ToString("dd MMMM yyyy", CultureInfo.InvariantCulture);
                            }


                        }
                        string dateInputpp2 = item.WaterReading_Date;
                        string parsedDatepp2 = "";
                        if (dateInputpp2 != null && dateInputpp2 != "")
                        {
                            string[] Reg_Date11 = dateInputpp2.Split('-');
                            var dd = Reg_Date11[0];
                            var mm = Reg_Date11[1];
                            var yyyy = Reg_Date11[2];
                            if (dd == "2020" || dd == "2021" || dd == "2022" || dd == "2023" || dd == "2024" || dd == "2025")
                            {
                                DateTime date = Convert.ToDateTime(dateInputpp2);
                                parsedDatepp2 = date.ToString("dd MMMM yyyy", CultureInfo.InvariantCulture);

                            }
                            else
                            {
                                var ddd = yyyy + '-' + mm + '-' + dd;
                                DateTime date = Convert.ToDateTime(ddd);
                                parsedDatepp2 = date.ToString("dd MMMM yyyy", CultureInfo.InvariantCulture);
                            }
                        }

                        var approve = item.status;
                        if (approve == null || approve == "")
                        {
                            approve = "At DPMU";
                        }
                        else if (approve == "State")
                        {
                            approve = "Submitted To SPMU";
                        }
                        else if (approve == "Approve")
                        {
                            approve = "Approved";
                        }
                        else if (approve == "Reject")
                        {
                            approve = "Reject by SPMU";
                        }
                        var approve_data = item.status_data;
                        if (approve_data == null || approve == "")
                        {
                            approve_data = "At DPMU";
                        }
                        else if (approve_data == "State")
                        {
                            approve_data = "Submitted To SPMU";
                        }
                        else if (approve_data == "Approve")
                        {
                            approve_data = "Approved";
                        }
                        DataRow dataRow = dt.NewRow();
                        dataRow["Sl.No"] = sl_no;
                        dataRow["State"] = item.State;
                        dataRow["District"] = item.District;
                        dataRow["Block"] = item.Block;
                        dataRow["Grampanchyat"] = item.GramPanchayat;
                        dataRow["Village Name"] = item.Village;
                        dataRow["Location Details"] = item.LocationDetails;
                        dataRow["Latitude"] = item.Latitude;
                        dataRow["Longitude"] = item.Longitude;
                        dataRow["Date of Entry"] = parsedDatepp;
                        dataRow["Name of the owner"] = item.OwnerName;
                        dataRow["Type of Well"] = item.WellType;
                        dataRow["Pump type"] = item.PumpType;
                        dataRow["Date of Installation of Waterflow meter"] = parsedDatepp1;
                        dataRow["Area Irrigated(ha)"] = item.AreaIrrigated;
                            dataRow["Depth of Well(mbmp)"] = item.depthofwell;
                            dataRow["Date of Water Reading"] = parsedDatepp2;
                        dataRow["Meter ID"] = item.Meterid;
                        dataRow["Meter Reading"] = item.MeterReading;
                        dataRow["Unit Of Meter Reading"] = item.UnitReading;
                        dataRow["Status"] = approve;
                        dataRow["Status_dynamic"] = approve_data;
                        dt.Rows.Add(dataRow);

                    }
                }
            }
            if (b != 0)
            {
                foreach (var itema in data)
                {
                    sr_no++;
                    int wellid = itema.id;
                    //var final_dataa = AJE.obj_vw_waterflow_meta.Where(x => x.id == wellid).ToList();
                        List<vw_waterflow_meta> final_dataa = new List<vw_waterflow_meta>();
                        if (year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            final_dataa = AJE.obj_vw_waterflow_meta.Where(x => x.id == wellid && x.fyyear == year && x.fymonth == month).ToList();
                        }
                        else if (year != "0" && year != "" && year != null)
                        {
                            final_dataa = AJE.obj_vw_waterflow_meta.Where(x => x.id == wellid && x.fyyear == year).ToList();
                        }
                        else
                        {
                            final_dataa = AJE.obj_vw_waterflow_meta.Where(x => x.id == wellid).ToList();
                        }

                        int index = 0;
                    foreach (var item_new in final_dataa)
                    {
                        index++;
                        var sl_no = "";
                        if (index == 1)
                        {
                            sl_no = Convert.ToString(sr_no);
                        }
                        else
                        {
                            sl_no = "";
                        }

                        string dateInputpp = item_new.DateofEntry;
                        string parsedDatepp = "";
                        if (dateInputpp != null && dateInputpp != "")
                        {
                            DateTime date = Convert.ToDateTime(dateInputpp);
                            parsedDatepp = date.ToString("dd MMMM yyyy", CultureInfo.InvariantCulture);

                        }
                        string dateInputpp1 = item_new.WaterFlowMeter_Installation_Date;
                        string parsedDatepp1 = "";
                        if (dateInputpp1 != null && dateInputpp1 != "")
                        {
                            string[] Reg_Date11 = dateInputpp1.Split('-');
                            var dd = Reg_Date11[0];
                            var mm = Reg_Date11[1];
                            var yyyy = Reg_Date11[2];
                            if (dd == "2020" || dd == "2021" || dd == "2022" || dd == "2023" || dd == "2024" || dd == "2025")
                            {
                                DateTime ddddd = Convert.ToDateTime(dateInputpp1);
                                parsedDatepp1 = ddddd.ToString("dd MMMM yyyy", CultureInfo.InvariantCulture);

                            }
                            else
                            {
                                var ddd = yyyy + '-' + mm + '-' + dd;
                                DateTime dddddd = Convert.ToDateTime(ddd);
                                parsedDatepp1 = dddddd.ToString("dd MMMM yyyy", CultureInfo.InvariantCulture);
                            }
                            
                        }

                        var approve = item_new.status;
                        if (approve == null || approve == "")
                        {
                            approve = "At DPMU";
                        }
                        else if (approve == "State")
                        {
                            approve = "Submitted To SPMU";
                        }
                        else if (approve == "Approve")
                        {
                            approve = "Approved";
                        }
                        else if (approve == "Reject")
                        {
                            approve = "Reject by SPMU";
                        }
                        DataRow dataRow = dt.NewRow();
                        dataRow["Sl.No"] = sl_no;
                        dataRow["State"] = item_new.State;
                        dataRow["District"] = item_new.District;
                        dataRow["Block"] = item_new.Block;
                        dataRow["Grampanchyat"] = item_new.GramPanchayat;
                        dataRow["Village Name"] = item_new.Village;
                        dataRow["Location Details"] = item_new.LocationDetails;
                        dataRow["Latitude"] = item_new.Latitude;
                        dataRow["Longitude"] = item_new.Longitude;
                        dataRow["Date of Entry"] = parsedDatepp;
                        dataRow["Name of the owner"] = item_new.OwnerName;
                        dataRow["Type of Well"] = item_new.WellType;
                        dataRow["Pump type"] = item_new.PumpType;
                        dataRow["Date of Installation of Waterflow meter"] = parsedDatepp1;
                        dataRow["Area Irrigated(ha)"] = item_new.AreaIrrigated;
                            dataRow["Depth of Well(mbmp)"] = item_new.depthofwell;
                            dataRow["Date of Water Reading"] = "";
                        dataRow["Meter ID"] = item_new.Meterid;
                        dataRow["Meter Reading"] = "";
                        dataRow["Unit Of Meter Reading"] = item_new.UnitReading;
                        dataRow["Status"] = approve;
                        dataRow["Status_dynamic"] = "";
                        dt.Rows.Add(dataRow);


                    }
                }
            }
            else
            {
                DataRow dataRow = dt.NewRow();

                dataRow["Sl.No"] = "";
                dataRow["State"] = "";
                dataRow["District"] = "";
                dataRow["Block"] = "";
                dataRow["Grampanchyat"] = "";
                dataRow["Village Name"] = "";
                dataRow["Location Details"] = "";
                dataRow["Latitude"] = "";
                dataRow["Longitude"] = "";
                dataRow["Date of Entry"] = "";
                dataRow["Name of the owner"] = "";
                dataRow["Type of Well"] = "";
                dataRow["Pump type"] = "";
                dataRow["Date of Installation of Waterflow meter"] = "";
                dataRow["Area Irrigated(ha)"] = "";
                dataRow["Depth of Well(mbmp)"] = "";
                dataRow["Date of Water Reading"] = "";
                dataRow["Meter ID"] = "";
                dataRow["Meter Reading"] = "";
                dataRow["Unit Of Meter Reading"] = "";
                dataRow["Status"] = "";
                dataRow["Status_dynamic"] = "";
                dt.Rows.Add(dataRow);
            }
            if (dt != null && dt.Rows.Count > 0)
            {
                System.Web.HttpContext.Current.Response.Clear();
                System.Web.HttpContext.Current.Response.ClearContent();
                System.Web.HttpContext.Current.Response.ClearHeaders();
                System.Web.HttpContext.Current.Response.Buffer = true;
                System.Web.HttpContext.Current.Response.ContentType = "text/csv";
                System.Web.HttpContext.Current.Response.AddHeader("Content-Disposition", "attachment;filename=WaterFlowMeter.csv");
                System.Web.HttpContext.Current.Response.ContentEncoding = System.Text.Encoding.GetEncoding("windows-1250");

                // Write the CSV header
                for (int j = 0; j < dt.Columns.Count; j++)
                {
                    System.Web.HttpContext.Current.Response.Write("\"" + dt.Columns[j].ToString() + "\"");
                    if (j < dt.Columns.Count - 1)
                        System.Web.HttpContext.Current.Response.Write(",");
                }
                System.Web.HttpContext.Current.Response.Write(Environment.NewLine);

                // Write the CSV data
                foreach (DataRow row in dt.Rows)
                {
                    for (int i = 0; i < dt.Columns.Count; i++)
                    {
                        string fieldValue = row[i].ToString();

                        // Enclose the field in double quotes and escape existing double quotes
                        System.Web.HttpContext.Current.Response.Write("\"" + fieldValue.Replace("\"", "\"\"") + "\"");

                        if (i < dt.Columns.Count - 1)
                            System.Web.HttpContext.Current.Response.Write(",");
                    }

                    System.Web.HttpContext.Current.Response.Write(Environment.NewLine);
                }

                System.Web.HttpContext.Current.Response.Flush();
                System.Web.HttpContext.Current.Response.End();
            }

            return RedirectToAction("Index");
        }
            catch (Exception Ex)
            {
                return Json("Error", JsonRequestBehavior.AllowGet);
    }
}
        public ActionResult Waterflow_excel_yearwise(string state1, string district1, string block01, string gp1, string year1, string month1)
        {
            try
            {
                var State = state1;
                var Dist = district1;
                var Block = block01;
                var Gram = gp1;
                var year = year1;
                var month = month1;

                List<vw_waterflow_all> abc = new List<vw_waterflow_all>();
                List<vw_waterflow_meta> data = new List<vw_waterflow_meta>();

                if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                {
                    //abc = AJE.obj_vw_waterflow_all.Where(x => x.State == State && x.District == Dist && x.Block == Block && x.GramPanchayat == Gram && x.fyyear == year && x.fymonth == month).GroupBy(x => x.wf_meta_id).Select(group => group.First()).ToList();
                    var details4 = AJE.obj_vw_waterflow_all.Where(x => x.State == State && x.District == Dist && x.Block == Block && x.GramPanchayat == Gram && x.fyyear == year && x.fymonth == month).ToList();
                    var aa = details4.GroupBy(c => c.wf_meta_id).ToList();

                    foreach (var item in aa)
                    {
                        int Check_id = item.Key;
                        var details5 = AJE.obj_vw_waterflow_all.Where(x => x.wf_meta_id == Check_id).FirstOrDefault();
                        abc.Add(details5);
                    }
                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
                {
                    // abc = AJE.obj_vw_waterflow_all.Where(x => x.State == State && x.District == Dist && x.Block == Block && x.GramPanchayat == Gram && x.fyyear == year).GroupBy(x => x.wf_meta_id).Select(group => group.First()).ToList();
                    var details4 = AJE.obj_vw_waterflow_all.Where(x => x.State == State && x.District == Dist && x.Block == Block && x.GramPanchayat == Gram && x.fyyear == year).ToList();
                    var aa = details4.GroupBy(c => c.wf_meta_id).ToList();

                    foreach (var item in aa)
                    {
                        int Check_id = item.Key;
                        var details5 = AJE.obj_vw_waterflow_all.Where(x => x.wf_meta_id == Check_id).FirstOrDefault();
                        abc.Add(details5);
                    }
                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                {
                    var details4 = AJE.obj_vw_waterflow_meta.Where(x => x.State == State && x.District == Dist && x.Block == Block && x.GramPanchayat == Gram).ToList();
                    for (int i = 0; i < details4.Count; i++)
                    {
                        int Check_id = details4[i].id;
                        var details5 = AJE.obj_vw_waterflow_all.Where(x => x.wf_meta_id == Check_id).ToList();
                        if (details5.Count != 0)
                        {
                            for (int j = 0; j < details5.Count; j++)
                            {
                                abc.Add(details5[j]);
                                break;
                            }
                        }
                        else
                        {
                            data.Add(details4[i]);
                        }


                    }
                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                {
                    // abc = AJE.obj_vw_waterflow_all.Where(x => x.State == State && x.District == Dist && x.Block == Block && x.fyyear == year && x.fymonth == month).GroupBy(x => x.wf_meta_id).Select(group => group.First()).ToList();
                    var details4 = AJE.obj_vw_waterflow_all.Where(x => x.State == State && x.District == Dist && x.Block == Block && x.fyyear == year && x.fymonth == month).ToList();
                    var aa = details4.GroupBy(c => c.wf_meta_id).ToList();

                    foreach (var item in aa)
                    {
                        int Check_id = item.Key;
                        var details5 = AJE.obj_vw_waterflow_all.Where(x => x.wf_meta_id == Check_id).FirstOrDefault();
                        abc.Add(details5);
                    }
                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
                {
                    //abc = AJE.obj_vw_waterflow_all.Where(x => x.State == State && x.District == Dist && x.Block == Block && x.fyyear == year).GroupBy(x => x.wf_meta_id).Select(group => group.First()).ToList();
                    var details4 = AJE.obj_vw_waterflow_all.Where(x => x.State == State && x.District == Dist && x.Block == Block && x.fyyear == year).ToList();
                    var aa = details4.GroupBy(c => c.wf_meta_id).ToList();

                    foreach (var item in aa)
                    {
                        int Check_id = item.Key;
                        var details5 = AJE.obj_vw_waterflow_all.Where(x => x.wf_meta_id == Check_id).FirstOrDefault();
                        abc.Add(details5);
                    }
                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                {
                    var details4 = AJE.obj_vw_waterflow_meta.Where(x => x.State == State && x.District == Dist && x.Block == Block).ToList();
                    for (int i = 0; i < details4.Count; i++)
                    {
                        int Check_id = details4[i].id;
                        var details5 = AJE.obj_vw_waterflow_all.Where(x => x.wf_meta_id == Check_id).ToList();
                        if (details5.Count != 0)
                        {
                            for (int j = 0; j < details5.Count; j++)
                            {
                                abc.Add(details5[j]);
                                break;
                            }
                        }
                        else
                        {
                            data.Add(details4[i]);
                        }
                    }
                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                {
                    //abc = AJE.obj_vw_waterflow_all.Where(x => x.State == State && x.District == Dist && x.fyyear == year && x.fymonth == month).GroupBy(x => x.wf_meta_id).Select(group => group.First()).ToList();
                    var details4 = AJE.obj_vw_waterflow_all.Where(x => x.State == State && x.District == Dist && x.fyyear == year && x.fymonth == month).ToList();
                    var aa = details4.GroupBy(c => c.wf_meta_id).ToList();

                    foreach (var item in aa)
                    {
                        int Check_id = item.Key;
                        var details5 = AJE.obj_vw_waterflow_all.Where(x => x.wf_meta_id == Check_id).FirstOrDefault();
                        abc.Add(details5);
                    }
                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
                {
                    //abc = AJE.obj_vw_waterflow_all.Where(x => x.State == State && x.District == Dist && x.fyyear == year).GroupBy(x => x.wf_meta_id).Select(group => group.First()).ToList();
                    var details4 = AJE.obj_vw_waterflow_all.Where(x => x.State == State && x.District == Dist && x.fyyear == year).ToList();
                    var aa = details4.GroupBy(c => c.wf_meta_id).ToList();

                    foreach (var item in aa)
                    {
                        int Check_id = item.Key;
                        var details5 = AJE.obj_vw_waterflow_all.Where(x => x.wf_meta_id == Check_id).FirstOrDefault();
                        abc.Add(details5);
                    }
                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                {
                    var details4 = AJE.obj_vw_waterflow_meta.Where(x => x.State == State && x.District == Dist).ToList();
                    for (int i = 0; i < details4.Count; i++)
                    {
                        int Check_id = details4[i].id;
                        var details5 = AJE.obj_vw_waterflow_all.Where(x => x.wf_meta_id == Check_id).ToList();
                        if (details5.Count != 0)
                        {
                            for (int j = 0; j < details5.Count; j++)
                            {
                                abc.Add(details5[j]);
                                break;
                            }
                        }
                        else
                        {
                            data.Add(details4[i]);
                        }
                    }
                }
                else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                {
                    //abc = AJE.obj_vw_waterflow_all.Where(x => x.State == State && x.fyyear == year && x.fymonth == month).GroupBy(x => x.wf_meta_id).Select(group => group.First()).ToList();
                    var details4 = AJE.obj_vw_waterflow_all.Where(x => x.State == State && x.fyyear == year && x.fymonth == month).ToList();
                    var aa = details4.GroupBy(c => c.wf_meta_id).ToList();

                    foreach (var item in aa)
                    {
                        int Check_id = item.Key;
                        var details5 = AJE.obj_vw_waterflow_all.Where(x => x.wf_meta_id == Check_id).FirstOrDefault();
                        abc.Add(details5);
                    }
                }
                else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
                {
                    // abc = AJE.obj_vw_waterflow_all.Where(x => x.State == State && x.fyyear == year).GroupBy(x => x.wf_meta_id).Select(group => group.First()).ToList();
                    var details4 = AJE.obj_vw_waterflow_all.Where(x => x.State == State && x.fyyear == year).ToList();
                    var aa = details4.GroupBy(c => c.wf_meta_id).ToList();

                    foreach (var item in aa)
                    {
                        int Check_id = item.Key;
                        var details5 = AJE.obj_vw_waterflow_all.Where(x => x.wf_meta_id == Check_id).FirstOrDefault();
                        abc.Add(details5);
                    }
                }
                else if (State != "0" && State != "" && State != null)
                {
                    var details4 = AJE.obj_vw_waterflow_meta.Where(x => x.State == State).ToList();
                    for (int i = 0; i < details4.Count; i++)
                    {
                        int Check_id = details4[i].id;
                        var details5 = AJE.obj_vw_waterflow_all.Where(x => x.wf_meta_id == Check_id).ToList();
                        if (details5.Count != 0)
                        {
                            for (int j = 0; j < details5.Count; j++)
                            {
                                abc.Add(details5[j]);
                                break;
                            }
                        }
                        else
                        {
                            data.Add(details4[i]);
                        }


                    }
                }

                DataTable dt = new DataTable();
                dt.Columns.Add("Sl.No", typeof(string));
                dt.Columns.Add("State", typeof(string));
                dt.Columns.Add("District", typeof(string));
                dt.Columns.Add("Block", typeof(string));
                dt.Columns.Add("Grampanchyat", typeof(string));
                dt.Columns.Add("Village Name", typeof(string));
                dt.Columns.Add("Location Details", typeof(string));
                dt.Columns.Add("Latitude", typeof(string));
                dt.Columns.Add("Longitude", typeof(string));
                dt.Columns.Add("Date of Entry", typeof(string));
                dt.Columns.Add("Name of the owner", typeof(string));
                dt.Columns.Add("Type of Well", typeof(string));
                dt.Columns.Add("Depth of Well", typeof(string));
                dt.Columns.Add("Pump type", typeof(string));
                dt.Columns.Add("Date of Installation of Waterflow meter", typeof(string));
                dt.Columns.Add("Area Irrigated(ha)", typeof(string));
                dt.Columns.Add("Meter ID", typeof(string));
                dt.Columns.Add("Status", typeof(string));

                //dynamic genrate year wise
                int startYear = 2020;
                int currentYear = DateTime.Now.Year;
                int currentMonth = DateTime.Now.Month;

                for (int years = startYear; years <= currentYear; years++)
                {
                    int endMonth = (years == currentYear) ? currentMonth : 12;
                    for (int months = 1; months <= endMonth; months++)
                    {
                        string monthName = new DateTime(years, months, 1).ToString("MMM-yyyy");
                        dt.Columns.Add(monthName, typeof(string));
                    }
                }

                var a = abc.Count;
                var b = data.Count;
                int sr_no = 0;


                if (a != 0)
                {
                    // Step 1: Create a dictionary to store aggregated data
                    Dictionary<string, DataRow> aggregatedData = new Dictionary<string, DataRow>();

                    foreach (var itema in abc)
                    {
                        sr_no++;
                        int wellid = itema.wf_meta_id;
                        List<vw_waterflow_all> final_dataa = new List<vw_waterflow_all>();
                        if (year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            final_dataa = AJE.obj_vw_waterflow_all.Where(x => x.wf_meta_id == wellid && x.fyyear == year && x.fymonth == month).ToList();
                        }
                        else if (year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            final_dataa = AJE.obj_vw_waterflow_all.Where(x => x.wf_meta_id == wellid && x.fyyear == year).ToList();
                        }
                        else
                        {
                            final_dataa = AJE.obj_vw_waterflow_all.Where(x => x.wf_meta_id == wellid).ToList();
                        }

                        int index = 0;

                        foreach (var item in final_dataa)
                        {
                            index++;
                            var sl_no = "";
                            if (index == 1)
                            {
                                sl_no = Convert.ToString(sr_no);
                            }
                            else
                            {
                                sl_no = "";
                            }

                            string dateInputpp = item.DateofEntry;
                            string parsedDatepp = "";
                            if (dateInputpp != null && dateInputpp != "")
                            {
                                DateTime date = Convert.ToDateTime(dateInputpp);
                                parsedDatepp = date.ToString("dd MMMM yyyy", CultureInfo.InvariantCulture);
                            }

                            string dateInputpp1 = item.WaterFlowMeter_Installation_Date;
                            string parsedDatepp1 = "";
                            if (dateInputpp1 != null && dateInputpp1 != "")
                            {
                                string[] Reg_Date11 = dateInputpp1.Split('-');
                                var dd = Reg_Date11[0];
                                var mm = Reg_Date11[1];
                                var yyyy = Reg_Date11[2];
                                if (dd == "2020" || dd == "2021" || dd == "2022" || dd == "2023" || dd == "2024" || dd == "2025")
                                {
                                    DateTime ddddd = Convert.ToDateTime(dateInputpp1);
                                    parsedDatepp1 = ddddd.ToString("dd MMMM yyyy", CultureInfo.InvariantCulture);
                                }
                                else
                                {
                                    var ddd = yyyy + '-' + mm + '-' + dd;
                                    DateTime dddddd = Convert.ToDateTime(ddd);
                                    parsedDatepp1 = dddddd.ToString("dd MMMM yyyy", CultureInfo.InvariantCulture);
                                }
                            }

                            string dateInputpp2 = item.WaterReading_Date;
                            string parsedDatepp2 = "";
                            if (dateInputpp2 != null && dateInputpp2 != "")
                            {
                                string[] Reg_Date11 = dateInputpp2.Split('-');
                                var dd = Reg_Date11[0];
                                var mm = Reg_Date11[1];
                                var yyyy = Reg_Date11[2];
                                if (dd == "2020" || dd == "2021" || dd == "2022" || dd == "2023" || dd == "2024" || dd == "2025")
                                {
                                    DateTime date = Convert.ToDateTime(dateInputpp2);
                                    parsedDatepp2 = date.ToString("dd MMMM yyyy", CultureInfo.InvariantCulture);
                                }
                                else
                                {
                                    var ddd = yyyy + '-' + mm + '-' + dd;
                                    DateTime date = Convert.ToDateTime(ddd);
                                    parsedDatepp2 = date.ToString("dd MMMM yyyy", CultureInfo.InvariantCulture);
                                }
                            }

                            var approve = item.status;
                            if (approve == null || approve == "")
                            {
                                approve = "At DPMU";
                            }
                            else if (approve == "State")
                            {
                                approve = "Submitted To SPMU";
                            }
                            else if (approve == "Approve")
                            {
                                approve = "Approved";
                            }
                            else if (approve == "Reject")
                            {
                                approve = "Reject by SPMU";
                            }
                            var approve_data = item.status_data;
                            if (approve_data == null || approve == "")
                            {
                                approve_data = "At DPMU";
                            }
                            else if (approve_data == "State")
                            {
                                approve_data = "Submitted To SPMU";
                            }
                            else if (approve_data == "Approve")
                            {
                                approve_data = "Approved";
                            }

                            if (!aggregatedData.ContainsKey(item.Meterid))
                            {
                                DataRow dataRow = dt.NewRow();
                                dataRow["Sl.No"] = sl_no;
                                dataRow["State"] = item.State;
                                dataRow["District"] = item.District;
                                dataRow["Block"] = item.Block;
                                dataRow["Grampanchyat"] = item.GramPanchayat;
                                dataRow["Village Name"] = item.Village;
                                dataRow["Location Details"] = item.LocationDetails;
                                dataRow["Latitude"] = item.Latitude;
                                dataRow["Longitude"] = item.Longitude;
                                dataRow["Date of Entry"] = parsedDatepp;
                                dataRow["Name of the owner"] = item.OwnerName;
                                dataRow["Type of Well"] = item.WellType;
                                dataRow["Depth of Well"] = item.depthofwell;
                                dataRow["Pump type"] = item.PumpType;
                                dataRow["Date of Installation of Waterflow meter"] = parsedDatepp1;
                                dataRow["Area Irrigated(ha)"] = item.AreaIrrigated;
                                dataRow["Meter ID"] = item.Meterid;
                                dataRow["Status"] = approve;

                                // Initialize dynamic columns to "0"
                                for (int years = startYear; years <= currentYear; years++)
                                {
                                    int endMonth = (years == currentYear) ? currentMonth : 12;
                                    for (int months = 1; months <= endMonth; months++)
                                    {
                                        string monthName = new DateTime(years, months, 1).ToString("MMM-yyyy");
                                        dataRow[monthName] = "";
                                    }
                                }

                                aggregatedData[item.Meterid] = dataRow;
                            }

                            DataRow existingRow = aggregatedData[item.Meterid];
                            DateTime meterReadingDate = DateTime.Parse(parsedDatepp2);
                            string monthColumn = meterReadingDate.ToString("MMM-yyyy");
                            existingRow[monthColumn] = item.MeterReading;
                        }
                    }

                    // Step 2: Populate the DataTable from the dictionary
                    foreach (var dataRow in aggregatedData.Values)
                    {
                        dt.Rows.Add(dataRow);
                    }
                }



                if (b != 0)
                {
                    foreach (var itema in data)
                    {
                        sr_no++;
                        int wellid = itema.id;
                        //var final_dataa = AJE.obj_vw_waterflow_meta.Where(x => x.id == wellid).ToList();
                        List<vw_waterflow_meta> final_dataa = new List<vw_waterflow_meta>();
                        if (year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            final_dataa = AJE.obj_vw_waterflow_meta.Where(x => x.id == wellid && x.fyyear == year && x.fymonth == month).ToList();
                        }
                        else if (year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            final_dataa = AJE.obj_vw_waterflow_meta.Where(x => x.id == wellid && x.fyyear == year).ToList();
                        }
                        else
                        {
                            final_dataa = AJE.obj_vw_waterflow_meta.Where(x => x.id == wellid).ToList();
                        }

                        int index = 0;
                        foreach (var item_new in final_dataa)
                        {
                            index++;
                            var sl_no = "";
                            if (index == 1)
                            {
                                sl_no = Convert.ToString(sr_no);
                            }
                            else
                            {
                                sl_no = "";
                            }

                            string dateInputpp = item_new.DateofEntry;
                            string parsedDatepp = "";
                            if (dateInputpp != null && dateInputpp != "")
                            {
                                DateTime date = Convert.ToDateTime(dateInputpp);
                                parsedDatepp = date.ToString("dd MMMM yyyy", CultureInfo.InvariantCulture);

                            }
                            string dateInputpp1 = item_new.WaterFlowMeter_Installation_Date;
                            string parsedDatepp1 = "";
                            if (dateInputpp1 != null && dateInputpp1 != "")
                            {
                                string[] Reg_Date11 = dateInputpp1.Split('-');
                                var dd = Reg_Date11[0];
                                var mm = Reg_Date11[1];
                                var yyyy = Reg_Date11[2];
                                if (dd == "2020" || dd == "2021" || dd == "2022" || dd == "2023" || dd == "2024" || dd == "2025")
                                {
                                    DateTime ddddd = Convert.ToDateTime(dateInputpp1);
                                    parsedDatepp1 = ddddd.ToString("dd MMMM yyyy", CultureInfo.InvariantCulture);

                                }
                                else
                                {
                                    var ddd = yyyy + '-' + mm + '-' + dd;
                                    DateTime dddddd = Convert.ToDateTime(ddd);
                                    parsedDatepp1 = dddddd.ToString("dd MMMM yyyy", CultureInfo.InvariantCulture);
                                }
                            }

                            var approve = item_new.status;
                            if (approve == null || approve == "")
                            {
                                approve = "At DPMU";
                            }
                            else if (approve == "State")
                            {
                                approve = "Submitted To SPMU";
                            }
                            else if (approve == "Approve")
                            {
                                approve = "Approved";
                            }
                            else if (approve == "Reject")
                            {
                                approve = "Reject by SPMU";
                            }
                            DataRow dataRow = dt.NewRow();
                            dataRow["Sl.No"] = sl_no;
                            dataRow["State"] = item_new.State;
                            dataRow["District"] = item_new.District;
                            dataRow["Block"] = item_new.Block;
                            dataRow["Grampanchyat"] = item_new.GramPanchayat;
                            dataRow["Village Name"] = item_new.Village;
                            dataRow["Location Details"] = item_new.LocationDetails;
                            dataRow["Latitude"] = item_new.Latitude;
                            dataRow["Longitude"] = item_new.Longitude;
                            dataRow["Date of Entry"] = parsedDatepp;
                            dataRow["Name of the owner"] = item_new.OwnerName;
                            dataRow["Type of Well"] = item_new.WellType;
                            dataRow["Depth of Well"] = item_new.depthofwell;
                            dataRow["Pump type"] = item_new.PumpType;
                            dataRow["Date of Installation of Waterflow meter"] = parsedDatepp1;
                            dataRow["Area Irrigated(ha)"] = item_new.AreaIrrigated;
                            dataRow["Meter ID"] = item_new.Meterid;
                            dataRow["Status"] = approve;
                            dt.Rows.Add(dataRow);


                        }
                    }
                }
                else
                {
                    DataRow dataRow = dt.NewRow();

                    dataRow["Sl.No"] = "";
                    dataRow["State"] = "";
                    dataRow["District"] = "";
                    dataRow["Block"] = "";
                    dataRow["Grampanchyat"] = "";
                    dataRow["Village Name"] = "";
                    dataRow["Location Details"] = "";
                    dataRow["Latitude"] = "";
                    dataRow["Longitude"] = "";
                    dataRow["Date of Entry"] = "";
                    dataRow["Name of the owner"] = "";
                    dataRow["Type of Well"] = "";
                    dataRow["Depth of Well"] = "";
                    dataRow["Pump type"] = "";
                    dataRow["Date of Installation of Waterflow meter"] = "";
                    dataRow["Area Irrigated(ha)"] = "";
                    dataRow["Meter ID"] = "";
                    dataRow["Status"] = "";
                    dt.Rows.Add(dataRow);
                }
                if (dt != null && dt.Rows.Count > 0)
                {
                    System.Web.HttpContext.Current.Response.Clear();
                    System.Web.HttpContext.Current.Response.ClearContent();
                    System.Web.HttpContext.Current.Response.ClearHeaders();
                    System.Web.HttpContext.Current.Response.Buffer = true;
                    System.Web.HttpContext.Current.Response.ContentType = "text/csv";
                    System.Web.HttpContext.Current.Response.AddHeader("Content-Disposition", "attachment;filename=Export(CSV)withMonthlyMonitoring.csv");
                    System.Web.HttpContext.Current.Response.ContentEncoding = System.Text.Encoding.GetEncoding("windows-1250");

                    // Write the CSV header
                    for (int j = 0; j < dt.Columns.Count; j++)
                    {
                        System.Web.HttpContext.Current.Response.Write("\"" + dt.Columns[j].ToString() + "\"");
                        if (j < dt.Columns.Count - 1)
                            System.Web.HttpContext.Current.Response.Write(",");
                    }
                    System.Web.HttpContext.Current.Response.Write(Environment.NewLine);

                    // Write the CSV data
                    foreach (DataRow row in dt.Rows)
                    {
                        for (int i = 0; i < dt.Columns.Count; i++)
                        {
                            string fieldValue = row[i].ToString();

                            // Enclose the field in double quotes and escape existing double quotes
                            System.Web.HttpContext.Current.Response.Write("\"" + fieldValue.Replace("\"", "\"\"") + "\"");

                            if (i < dt.Columns.Count - 1)
                                System.Web.HttpContext.Current.Response.Write(",");
                        }

                        System.Web.HttpContext.Current.Response.Write(Environment.NewLine);
                    }

                    System.Web.HttpContext.Current.Response.Flush();
                    System.Web.HttpContext.Current.Response.End();
                }

                return RedirectToAction("Index");
            }
            catch (Exception Ex)
            {
                return Json("Error", JsonRequestBehavior.AllowGet);
            }
        }

        public ActionResult newobservationwellexcel()
        {
            var State = Session["gstate"].ToString();
            var Dist = Session["gdist"].ToString();
            var Block = Session["gblock"].ToString();
            var Gram = Session["ggram"].ToString();

            var TDetails = (from gp in AJE.obj_groundwaterlevel
                            join r in AJE.obj_groundwatermeta on gp.id equals r.groundid
                            where gp.state == State && gp.district == Dist && gp.block == Block && gp.grampanchayat == Gram && gp.isarchive == 1 && r.year >= 2022
                            select new
                            {
                                gp,
                                r

                            }).ToList();

            //List<abhy_gwqm_ftk> TDetails = ABE.obj_abhy_gwqm_ftk.ToList();

            if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
            {
                TDetails = (from gp in AJE.obj_groundwaterlevel
                            join r in AJE.obj_groundwatermeta on gp.id equals r.groundid
                            where gp.state == State && gp.district == Dist && gp.block == Block && gp.grampanchayat == Gram && gp.isarchive == 1 && r.year >= 2022
                            select new
                            {
                                gp,
                                r

                            }).ToList();
            }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
            {
                TDetails = (from gp in AJE.obj_groundwaterlevel
                            join r in AJE.obj_groundwatermeta on gp.id equals r.groundid
                            where gp.state == State && gp.district == Dist && gp.block == Block && gp.isarchive == 1 && r.year >= 2022
                            select new
                            {
                                gp,
                                r

                            }).ToList();
            }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
            {
                TDetails = (from gp in AJE.obj_groundwaterlevel
                            join r in AJE.obj_groundwatermeta on gp.id equals r.groundid
                            where gp.state == State && gp.district == Dist && gp.isarchive == 1 && r.year >= 2022
                            select new
                            {
                                gp,
                                r

                            }).ToList();
            }
            else if (State != "0" && State != "" && State != null)
            {
                TDetails = (from gp in AJE.obj_groundwaterlevel
                            join r in AJE.obj_groundwatermeta on gp.id equals r.groundid
                            where gp.state == State && gp.isarchive == 1 && r.year >= 2022
                            select new
                            {
                                gp,
                                r

                            }).ToList();
            }

            using (var workbook = new XLWorkbook())
            {
                var worksheet = workbook.Worksheets.Add("New Observation Well");
                var currentRow = 1;
                worksheet.Cell(currentRow, 1).Value = "state";
                worksheet.Cell(currentRow, 2).Value = "district";
                worksheet.Cell(currentRow, 3).Value = "block";
                worksheet.Cell(currentRow, 4).Value = "grampanchayat";
                worksheet.Cell(currentRow, 5).Value = "sitename";
                worksheet.Cell(currentRow, 6).Value = "typeofwell";
                worksheet.Cell(currentRow, 7).Value = "source";
                worksheet.Cell(currentRow, 8).Value = "latitude";
                worksheet.Cell(currentRow, 9).Value = "longitude";
                worksheet.Cell(currentRow, 10).Value = "wellid";
                worksheet.Cell(currentRow, 11).Value = "welldepth";
                worksheet.Cell(currentRow, 12).Value = "aquifer";
                worksheet.Cell(currentRow, 13).Value = "pre2015";
                worksheet.Cell(currentRow, 14).Value = "post2015";
                worksheet.Cell(currentRow, 15).Value = "pre2016";
                worksheet.Cell(currentRow, 16).Value = "post2016";
                worksheet.Cell(currentRow, 17).Value = "pre2017";
                worksheet.Cell(currentRow, 18).Value = "post2017";
                worksheet.Cell(currentRow, 19).Value = "pre2018";
                worksheet.Cell(currentRow, 20).Value = "post2018";
                worksheet.Cell(currentRow, 21).Value = "pre2019";
                worksheet.Cell(currentRow, 22).Value = "post2019";
                worksheet.Cell(currentRow, 23).Value = "uid";
                worksheet.Cell(currentRow, 24).Value = "dec_2020";
                worksheet.Cell(currentRow, 25).Value = "jan_2021";
                worksheet.Cell(currentRow, 26).Value = "feb_2021";
                worksheet.Cell(currentRow, 27).Value = "mar_2021";
                worksheet.Cell(currentRow, 28).Value = "apr_2021";
                worksheet.Cell(currentRow, 29).Value = "may_2021";
                worksheet.Cell(currentRow, 30).Value = "jun_2021";
                worksheet.Cell(currentRow, 31).Value = "jul_2021";
                worksheet.Cell(currentRow, 32).Value = "aug_2021";
                worksheet.Cell(currentRow, 33).Value = "sep_2021";
                worksheet.Cell(currentRow, 34).Value = "oct_2021";
                worksheet.Cell(currentRow, 35).Value = "nov_2021";
                worksheet.Cell(currentRow, 36).Value = "dec_2021";
                worksheet.Cell(currentRow, 37).Value = "jan_2022";
                worksheet.Cell(currentRow, 38).Value = "feb_2022";
                worksheet.Cell(currentRow, 39).Value = "mar_2022";
                worksheet.Cell(currentRow, 40).Value = "apr_2022";
                worksheet.Cell(currentRow, 41).Value = "may_2022";
                worksheet.Cell(currentRow, 42).Value = "jun_2022";
                worksheet.Cell(currentRow, 43).Value = "jul_2022";
                worksheet.Cell(currentRow, 44).Value = "aug_2022";
                worksheet.Cell(currentRow, 45).Value = "sep_2022";
                worksheet.Cell(currentRow, 46).Value = "oct_2022";
                worksheet.Cell(currentRow, 47).Value = "nov_2022";
                worksheet.Cell(currentRow, 48).Value = "dec_2022";
                worksheet.Cell(currentRow, 49).Value = "jan_2023";
                worksheet.Cell(currentRow, 50).Value = "feb_2023";
                worksheet.Cell(currentRow, 50).Value = "mar_2023";
                worksheet.Cell(currentRow, 51).Value = "apr_2023";
                worksheet.Cell(currentRow, 52).Value = "may_2023";
                worksheet.Cell(currentRow, 53).Value = "jun_2023";
                worksheet.Cell(currentRow, 54).Value = "jul_2023";
                worksheet.Cell(currentRow, 55).Value = "aug_2023";
                worksheet.Cell(currentRow, 56).Value = "sep_2023";
                worksheet.Cell(currentRow, 57).Value = "oct_2023";
                worksheet.Cell(currentRow, 58).Value = "nov_2023";
                worksheet.Cell(currentRow, 59).Value = "dec_2023";
                worksheet.Cell(currentRow, 60).Value = "jan_2024";
                worksheet.Cell(currentRow, 61).Value = "feb_2024";
                worksheet.Cell(currentRow, 62).Value = "mar_2024";
                worksheet.Cell(currentRow, 63).Value = "apr_2024";
                worksheet.Cell(currentRow, 64).Value = "may_2024";
                worksheet.Cell(currentRow, 65).Value = "jun_2024";
                worksheet.Cell(currentRow, 66).Value = "jul_2024";
                worksheet.Cell(currentRow, 67).Value = "aug_2024";
                worksheet.Cell(currentRow, 68).Value = "sep_2024";
                worksheet.Cell(currentRow, 69).Value = "oct_2024";
                worksheet.Cell(currentRow, 70).Value = "nov_2024";
                worksheet.Cell(currentRow, 71).Value = "dec_2024";
                worksheet.Cell(currentRow, 72).Value = "jan_2025";
                worksheet.Cell(currentRow, 73).Value = "feb_2025";
                worksheet.Cell(currentRow, 74).Value = "mar_2025";
                worksheet.Cell(currentRow, 75).Value = "apr_2025";
                worksheet.Cell(currentRow, 76).Value = "may_2025";
                worksheet.Cell(currentRow, 77).Value = "jun_2025";
                worksheet.Cell(currentRow, 78).Value = "jul_2025";
                worksheet.Cell(currentRow, 79).Value = "aug_2025";
                worksheet.Cell(currentRow, 80).Value = "sep_2025";
                worksheet.Cell(currentRow, 81).Value = "oct_2025";
                worksheet.Cell(currentRow, 82).Value = "nov_2025";
                worksheet.Cell(currentRow, 83).Value = "dec_2025";
                worksheet.Cell(currentRow, 84).Value = "well";
                worksheet.Cell(currentRow, 85).Value = "datetime";
                worksheet.Cell(currentRow, 86).Value = "email";
                worksheet.Cell(currentRow, 87).Value = "image";
                worksheet.Cell(currentRow, 88).Value = "id";
                worksheet.Cell(currentRow, 89).Value = "meta_id";
                worksheet.Cell(currentRow, 90).Value = "Type";
                worksheet.Cell(currentRow, 91).Value = "Month";
                worksheet.Cell(currentRow, 92).Value = "Year";
                worksheet.Cell(currentRow, 93).Value = "value";
                worksheet.Cell(currentRow, 94).Value = "groundid";
                worksheet.Cell(currentRow, 95).Value = "pre_monsoon";
                worksheet.Cell(currentRow, 96).Value = "post_monsoon";


                if (TDetails.Count != 0)
                {


                    foreach (var user in TDetails)
                    {
                        currentRow++;
                        worksheet.Cell(currentRow, 1).Value = user.gp.state;
                        worksheet.Cell(currentRow, 2).Value = user.gp.district;
                        worksheet.Cell(currentRow, 3).Value = user.gp.block;
                        worksheet.Cell(currentRow, 4).Value = user.gp.grampanchayat;
                        worksheet.Cell(currentRow, 5).Value = user.gp.sitename;
                        worksheet.Cell(currentRow, 6).Value = user.gp.typeofwell;
                        worksheet.Cell(currentRow, 7).Value = user.gp.source;
                        worksheet.Cell(currentRow, 8).Value = user.gp.latitude;
                        worksheet.Cell(currentRow, 9).Value = user.gp.longitude;
                        worksheet.Cell(currentRow, 10).Value = user.gp.wellid;
                        worksheet.Cell(currentRow, 11).Value = user.gp.welldepth;
                        worksheet.Cell(currentRow, 12).Value = user.gp.aquifer;
                        worksheet.Cell(currentRow, 13).Value = user.gp.pre2015;
                        worksheet.Cell(currentRow, 14).Value = user.gp.post2015;
                        worksheet.Cell(currentRow, 15).Value = user.gp.pre2016;
                        worksheet.Cell(currentRow, 16).Value = user.gp.post2016;
                        worksheet.Cell(currentRow, 17).Value = user.gp.pre2017;
                        worksheet.Cell(currentRow, 18).Value = user.gp.post2017;
                        worksheet.Cell(currentRow, 19).Value = user.gp.pre2018;
                        worksheet.Cell(currentRow, 20).Value = user.gp.post2018;
                        worksheet.Cell(currentRow, 21).Value = user.gp.pre2019;
                        worksheet.Cell(currentRow, 22).Value = user.gp.post2019;
                        worksheet.Cell(currentRow, 23).Value = user.gp.uid;
                        worksheet.Cell(currentRow, 24).Value = user.gp.dec_2020;
                        worksheet.Cell(currentRow, 25).Value = user.gp.jan_2021;
                        worksheet.Cell(currentRow, 26).Value = user.gp.feb_2021;
                        worksheet.Cell(currentRow, 27).Value = user.gp.mar_2021;
                        worksheet.Cell(currentRow, 28).Value = user.gp.apr_2021;
                        worksheet.Cell(currentRow, 29).Value = user.gp.may_2021;
                        worksheet.Cell(currentRow, 30).Value = user.gp.jun_2021;
                        worksheet.Cell(currentRow, 31).Value = user.gp.jul_2021;
                        worksheet.Cell(currentRow, 32).Value = user.gp.aug_2021;
                        worksheet.Cell(currentRow, 33).Value = user.gp.sep_2021;
                        worksheet.Cell(currentRow, 34).Value = user.gp.oct_2021;
                        worksheet.Cell(currentRow, 35).Value = user.gp.nov_2021;
                        worksheet.Cell(currentRow, 36).Value = user.gp.dec_2021;
                        worksheet.Cell(currentRow, 37).Value = user.gp.jan_2022;
                        worksheet.Cell(currentRow, 38).Value = user.gp.feb_2022;
                        worksheet.Cell(currentRow, 39).Value = user.gp.mar_2022;
                        worksheet.Cell(currentRow, 40).Value = user.gp.apr_2022;
                        worksheet.Cell(currentRow, 41).Value = user.gp.may_2022;
                        worksheet.Cell(currentRow, 42).Value = user.gp.jun_2022;
                        worksheet.Cell(currentRow, 43).Value = user.gp.jul_2022;
                        worksheet.Cell(currentRow, 44).Value = user.gp.aug_2022;
                        worksheet.Cell(currentRow, 45).Value = user.gp.sep_2022;
                        worksheet.Cell(currentRow, 46).Value = user.gp.oct_2022;
                        worksheet.Cell(currentRow, 47).Value = user.gp.nov_2022;
                        worksheet.Cell(currentRow, 48).Value = user.gp.dec_2022;
                        worksheet.Cell(currentRow, 49).Value = user.gp.jan_2023;
                        worksheet.Cell(currentRow, 50).Value = user.gp.feb_2023;
                        worksheet.Cell(currentRow, 50).Value = user.gp.mar_2023;
                        worksheet.Cell(currentRow, 51).Value = user.gp.apr_2023;
                        worksheet.Cell(currentRow, 52).Value = user.gp.may_2023;
                        worksheet.Cell(currentRow, 53).Value = user.gp.jun_2023;
                        worksheet.Cell(currentRow, 54).Value = user.gp.jul_2023;
                        worksheet.Cell(currentRow, 55).Value = user.gp.aug_2023;
                        worksheet.Cell(currentRow, 56).Value = user.gp.sep_2023;
                        worksheet.Cell(currentRow, 57).Value = user.gp.oct_2023;
                        worksheet.Cell(currentRow, 58).Value = user.gp.nov_2023;
                        worksheet.Cell(currentRow, 59).Value = user.gp.dec_2023;
                        worksheet.Cell(currentRow, 60).Value = user.gp.jan_2024;
                        worksheet.Cell(currentRow, 61).Value = user.gp.feb_2024;
                        worksheet.Cell(currentRow, 62).Value = user.gp.mar_2024;
                        worksheet.Cell(currentRow, 63).Value = user.gp.apr_2024;
                        worksheet.Cell(currentRow, 64).Value = user.gp.may_2024;
                        worksheet.Cell(currentRow, 65).Value = user.gp.jun_2024;
                        worksheet.Cell(currentRow, 66).Value = user.gp.jul_2024;
                        worksheet.Cell(currentRow, 67).Value = user.gp.aug_2024;
                        worksheet.Cell(currentRow, 68).Value = user.gp.sep_2024;
                        worksheet.Cell(currentRow, 69).Value = user.gp.oct_2024;
                        worksheet.Cell(currentRow, 70).Value = user.gp.nov_2024;
                        worksheet.Cell(currentRow, 71).Value = user.gp.dec_2024;
                        worksheet.Cell(currentRow, 72).Value = user.gp.jan_2025;
                        worksheet.Cell(currentRow, 73).Value = user.gp.feb_2025;
                        worksheet.Cell(currentRow, 74).Value = user.gp.mar_2025;
                        worksheet.Cell(currentRow, 75).Value = user.gp.apr_2025;
                        worksheet.Cell(currentRow, 76).Value = user.gp.may_2025;
                        worksheet.Cell(currentRow, 77).Value = user.gp.jun_2025;
                        worksheet.Cell(currentRow, 78).Value = user.gp.jul_2025;
                        worksheet.Cell(currentRow, 79).Value = user.gp.aug_2025;
                        worksheet.Cell(currentRow, 80).Value = user.gp.sep_2025;
                        worksheet.Cell(currentRow, 81).Value = user.gp.oct_2025;
                        worksheet.Cell(currentRow, 82).Value = user.gp.nov_2025;
                        worksheet.Cell(currentRow, 83).Value = user.gp.dec_2025;
                        worksheet.Cell(currentRow, 84).Value = user.gp.well;
                        worksheet.Cell(currentRow, 85).Value = user.gp.datetime;
                        worksheet.Cell(currentRow, 86).Value = user.gp.email;
                        worksheet.Cell(currentRow, 87).Value = user.gp.image;
                        worksheet.Cell(currentRow, 88).Value = user.gp.id;
                        worksheet.Cell(currentRow, 89).Value = user.r.meta_id;
                        worksheet.Cell(currentRow, 90).Value = user.r.type;
                        worksheet.Cell(currentRow, 91).Value = user.r.month;
                        worksheet.Cell(currentRow, 92).Value = user.r.year;
                        worksheet.Cell(currentRow, 93).Value = user.r.value;
                        worksheet.Cell(currentRow, 94).Value = user.r.groundid;
                        worksheet.Cell(currentRow, 95).Value = user.r.pre_monsoon;
                        worksheet.Cell(currentRow, 96).Value = user.r.post_monsoon;





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
                    worksheet.Cell(currentRow, 25).Value = "";
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
                    worksheet.Cell(currentRow, 48).Value = "No Data";
                    worksheet.Cell(currentRow, 49).Value = "";
                    worksheet.Cell(currentRow, 50).Value = "";
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
                    worksheet.Cell(currentRow, 89).Value = "";
                    worksheet.Cell(currentRow, 90).Value = "";
                    worksheet.Cell(currentRow, 91).Value = "";
                    worksheet.Cell(currentRow, 92).Value = "";
                    worksheet.Cell(currentRow, 93).Value = "";
                    worksheet.Cell(currentRow, 94).Value = "";
                    worksheet.Cell(currentRow, 95).Value = "";
                    worksheet.Cell(currentRow, 96).Value = "";


                }
                using (var stream = new MemoryStream())
                {
                    workbook.SaveAs(stream);
                    var content = stream.ToArray();

                    return File(
                        content,
                        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                        "New observation well well.xls");
                }
            }
        }

        public string Create_Excel_mobile(string state1, string district1, string block01, string gp1, string year1, string month1)
        {


            //var State = Session["gstate"].ToString();
            //var Dist = Session["gdist"].ToString();
            //var Block = Session["gblock"].ToString();
            //var Gram = Session["ggram"].ToString();
            //var year = Session["year"].ToString();
            //var month = Session["month"].ToString();


            string path = "";
            string msg = "";

            string MapedPathoutputout = "";
            try
            {


                List<vw_wellinventory> ddetails = new List<vw_wellinventory>();
                DataSet FinalData = new DataSet();
                List<vw_gwl> Final_data = new List<vw_gwl>();
                List<vw_water> Final_data1 = new List<vw_water>();
                List<vw_geotagging> geodata = new List<vw_geotagging>();
                List<vw_rainfall> Final_data2 = new List<vw_rainfall>();
                List<vw_socialmonitoring> social_data = new List<vw_socialmonitoring>();
                List<vw_waterflow_all> waterflow = new List<vw_waterflow_all>();

                List<Allmobiledata> baseline_data = new List<Allmobiledata>();

                var State = state1;
                var Dist = district1;
                var Block = block01;
                var Gram = gp1;
                var year = year1;
                var month = month1;

                if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                {
                    ddetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.fyyear == year && x.fymonth == month).ToList();
                    Final_data = AJE.obj_vw_gwl.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram && x.fyyear == year && x.fymonth == month).ToList();
                    Final_data1 = AJE.obj_vw_water.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.fyyear == year && x.fymonth == month).ToList();
                    geodata = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.gpname == Gram && x.fyyear == year && x.fymonth == month).ToList();
                    Final_data2 = AJE.obj_vw_rainfall.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.gpname == Gram && x.fyyear == year && x.fymonth == month).ToList();
                    social_data = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram && x.fyyear == year && x.fymonth == month).ToList();
                    waterflow = AJE.obj_vw_waterflow_all.Where(x => x.State == State && x.District == Dist && x.Block == Block && x.GramPanchayat == Gram && x.fyyear == year && x.fymonth == month).ToList();

                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
                {
                    ddetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.fyyear == year).ToList();
                    Final_data = AJE.obj_vw_gwl.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram && x.fyyear == year).ToList();
                    Final_data1 = AJE.obj_vw_water.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.fyyear == year).ToList();
                    geodata = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.gpname == Gram && x.fyyear == year).ToList();
                    Final_data2 = AJE.obj_vw_rainfall.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.gpname == Gram && x.fyyear == year).ToList();
                    social_data = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram && x.fyyear == year).ToList();
                    waterflow = AJE.obj_vw_waterflow_all.Where(x => x.State == State && x.District == Dist && x.Block == Block && x.GramPanchayat == Gram && x.fyyear == year).ToList();
                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                {
                    ddetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram).ToList();
                    Final_data = AJE.obj_vw_gwl.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram).ToList();
                    Final_data1 = AJE.obj_vw_water.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram).ToList();
                    geodata = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.gpname == Gram).ToList();
                    Final_data2 = AJE.obj_vw_rainfall.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.gpname == Gram).ToList();
                    social_data = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram).ToList();
                    waterflow = AJE.obj_vw_waterflow_all.Where(x => x.State == State && x.District == Dist && x.Block == Block && x.GramPanchayat == Gram).ToList();
                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                {
                    ddetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year && x.fymonth == month).ToList();
                    Final_data = AJE.obj_vw_gwl.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year && x.fymonth == month).ToList();
                    Final_data1 = AJE.obj_vw_water.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year && x.fymonth == month).ToList();
                    geodata = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.fyyear == year && x.fymonth == month).ToList();
                    Final_data2 = AJE.obj_vw_rainfall.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.fyyear == year && x.fymonth == month).ToList();
                    social_data = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year && x.fymonth == month).ToList();
                    waterflow = AJE.obj_vw_waterflow_all.Where(x => x.State == State && x.District == Dist && x.Block == Block && x.fyyear == year && x.fymonth == month).ToList();

                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
                {
                    ddetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year).ToList();
                    Final_data = AJE.obj_vw_gwl.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year).ToList();
                    Final_data1 = AJE.obj_vw_water.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year).ToList();
                    geodata = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.fyyear == year).ToList();
                    Final_data2 = AJE.obj_vw_rainfall.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.fyyear == year).ToList();
                    social_data = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year).ToList();
                    waterflow = AJE.obj_vw_waterflow_all.Where(x => x.State == State && x.District == Dist && x.Block == Block && x.fyyear == year).ToList();

                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                {
                    ddetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist && x.block == Block).ToList();
                    Final_data = AJE.obj_vw_gwl.Where(x => x.state == State && x.district == Dist && x.block == Block).ToList();
                    Final_data1 = AJE.obj_vw_water.Where(x => x.state == State && x.district == Dist && x.block == Block).ToList();
                    geodata = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block).ToList();
                    Final_data2 = AJE.obj_vw_rainfall.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block).ToList();
                    social_data = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block).ToList();
                    waterflow = AJE.obj_vw_waterflow_all.Where(x => x.State == State && x.District == Dist && x.Block == Block).ToList();

                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                {
                    ddetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist && x.fyyear == year && x.fymonth == month).ToList();
                    Final_data = AJE.obj_vw_gwl.Where(x => x.state == State && x.district == Dist && x.fyyear == year && x.fymonth == month).ToList();
                    Final_data1 = AJE.obj_vw_water.Where(x => x.state == State && x.district == Dist && x.fyyear == year && x.fymonth == month).ToList();
                    geodata = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.districtname == Dist && x.fyyear == year && x.fymonth == month).ToList();
                    Final_data2 = AJE.obj_vw_rainfall.Where(x => x.statename == State && x.districtname == Dist && x.fyyear == year && x.fymonth == month).ToList();
                    social_data = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.fyyear == year && x.fymonth == month).ToList();
                    waterflow = AJE.obj_vw_waterflow_all.Where(x => x.State == State && x.District == Dist && x.fyyear == year && x.fymonth == month).ToList();

                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
                {
                    ddetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist && x.fyyear == year).ToList();
                    Final_data = AJE.obj_vw_gwl.Where(x => x.state == State && x.district == Dist && x.fyyear == year).ToList();
                    Final_data1 = AJE.obj_vw_water.Where(x => x.state == State && x.district == Dist && x.fyyear == year).ToList();
                    geodata = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.districtname == Dist && x.fyyear == year).ToList();
                    Final_data2 = AJE.obj_vw_rainfall.Where(x => x.statename == State && x.districtname == Dist && x.fyyear == year).ToList();
                    social_data = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.fyyear == year).ToList();
                    waterflow = AJE.obj_vw_waterflow_all.Where(x => x.State == State && x.District == Dist && x.fyyear == year).ToList();

                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                {
                    ddetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist).ToList();
                    Final_data = AJE.obj_vw_gwl.Where(x => x.state == State && x.district == Dist).ToList();
                    Final_data1 = AJE.obj_vw_water.Where(x => x.state == State && x.district == Dist).ToList();
                    geodata = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.districtname == Dist).ToList();
                    Final_data2 = AJE.obj_vw_rainfall.Where(x => x.statename == State && x.districtname == Dist).ToList();
                    social_data = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Dist).ToList();
                    waterflow = AJE.obj_vw_waterflow_all.Where(x => x.State == State && x.District == Dist).ToList();

                }
                else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                {
                    ddetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.fyyear == year && x.fymonth == month).ToList();
                    Final_data = AJE.obj_vw_gwl.Where(x => x.state == State && x.fyyear == year && x.fymonth == month).ToList();
                    Final_data1 = AJE.obj_vw_water.Where(x => x.state == State && x.fyyear == year && x.fymonth == month).ToList();
                    geodata = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.fyyear == year && x.fymonth == month).ToList();
                    Final_data2 = AJE.obj_vw_rainfall.Where(x => x.statename == State && x.fyyear == year && x.fymonth == month).ToList();
                    social_data = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.fyyear == year && x.fymonth == month).ToList();
                    waterflow = AJE.obj_vw_waterflow_all.Where(x => x.State == State && x.fyyear == year && x.fymonth == month).ToList();

                }
                else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
                {
                    ddetails = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.fyyear == year).ToList();
                    Final_data = AJE.obj_vw_gwl.Where(x => x.state == State && x.fyyear == year).ToList();
                    Final_data1 = AJE.obj_vw_water.Where(x => x.state == State && x.fyyear == year).ToList();
                    geodata = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.fyyear == year).ToList();
                    Final_data2 = AJE.obj_vw_rainfall.Where(x => x.statename == State && x.fyyear == year).ToList();
                    social_data = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.fyyear == year).ToList();
                    waterflow = AJE.obj_vw_waterflow_all.Where(x => x.State == State && x.fyyear == year).ToList();

                }
                else if (State != "0" && State != "" && State != null)
                {
                    ddetails = AJE.obj_vw_wellinventory.Where(x => x.state == State).ToList();
                    Final_data = AJE.obj_vw_gwl.Where(x => x.state == State).ToList();
                    Final_data1 = AJE.obj_vw_water.Where(x => x.state == State).ToList();
                    geodata = AJE.obj_vw_geotagging.Where(x => x.statename == State).ToList();
                    Final_data2 = AJE.obj_vw_rainfall.Where(x => x.statename == State).ToList();
                    social_data = AJE.obj_vw_socialmonitoring.Where(x => x.state == State).ToList();
                    waterflow = AJE.obj_vw_waterflow_all.Where(x => x.State == State).ToList();
                }



                if (ddetails.Count > 0)
                {
                    DataTable dt = ListToDataTable(ddetails, "Well Inventory");
                    FinalData.Tables.Add(dt);
                }
                if (Final_data.Count > 0)
                {
                    DataTable dt = ListToDataTable(Final_data, "Ground water level");
                    FinalData.Tables.Add(dt);
                }
                if (Final_data1.Count > 0)
                {
                    DataTable dt = ListToDataTable(Final_data1, "Ground water Quality");
                    FinalData.Tables.Add(dt);
                }
                if (geodata.Count > 0)
                {
                    DataTable dt = ListToDataTable(geodata, "Geotagging");
                    FinalData.Tables.Add(dt);
                }
                if (Final_data2.Count > 0)
                {
                    DataTable dt = ListToDataTable(Final_data2, "Rainfall");
                    FinalData.Tables.Add(dt);
                }
                if (social_data.Count > 0)
                {
                    DataTable dt = ListToDataTable(social_data, "Social Event");
                    FinalData.Tables.Add(dt);
                }
                if (waterflow.Count > 0)
                {
                    DataTable dt = ListToDataTable(waterflow, "Water Flow Meter");
                    FinalData.Tables.Add(dt);
                }

                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                path = Path.Combine(BasePath, "Template_temp\\");
                MapedPathoutputout = Path.Combine(path, "All_Mobile_Data.xlsx");

                try
                {
                    if (!Directory.Exists(path))
                    {
                        Directory.CreateDirectory(path);
                    }
                    else
                    {
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
                MapedPathoutputout = path + "\\All_Mobile_Data.xls";
                string rootPath = HttpContext.Server.MapPath(@"/Template/Data.xls");
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
                string filename = "All_Mobile_Data.xls";
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
        public ActionResult Export(string TabelName)
        {
            if (Session["UserId"] != null)
            {
                var stat = Session["gstate"].ToString();
                var dist = Session["gdist"].ToString();
                var block = Session["gblock"].ToString();
                var gram = Session["ggram"].ToString();

                if (TabelName == "Social Monitoring")
                {
                    var data = AJE.obj_socialmonitoring.Where(n => n.state == stat && n.district == dist && n.block == block && n.grampanchayat == gram).Select(n => new
                    {
                        n.state,
                        n.district,
                        n.block,
                        n.grampanchayat,
                        n.village,
                        n.location,
                        n.latitude,
                        n.longitude,
                        n.date,
                        n.event1,
                        n.male,
                        n.female,
                        n.others,
                        n.numberofattendees,
                        n.minutesofmeeting,
                        n.image
                    }).ToList();

                    byte[] filecontent = ExcelExportHelper.ExportExcel(data, TabelName, true, "nothing");
                    return File(filecontent, ExcelExportHelper.ExcelContentType, "Social_Monitoring.xls");
                }
                else if (TabelName == "Geotagging")
                {
                    var data = AJE.obj_geotagging.Where(n => n.statename == stat && n.districtname == dist && n.blockname == block && n.gpname == gram).Select(n => new
                    {
                        n.statename,
                        n.districtname,
                        n.blockname,
                        n.gpname,
                        n.village,
                        n.locationdetail,
                        n.longitude,
                        n.latitude,
                        n.date1,
                        n.typeofstructure,
                        n.storagecapacity,
                        n.nooffillings,
                    }).ToList();

                    byte[] filecontent = ExcelExportHelper.ExportExcel(data, TabelName, true, "nothing");
                    return File(filecontent, ExcelExportHelper.ExcelContentType, "Geotagging.xls");
                }


                else if (TabelName == "Existing")
                {
                    var data = (from gp in AJE.obj_groundwaterlevel
                                join r in AJE.obj_groundwatermeta on gp.id equals r.groundid
                                where gp.state == stat && gp.district == dist && gp.block == block && gp.grampanchayat == gram && r.year <= 2021
                                select new
                                {
                                    gp.state,
                                    gp.district,
                                    gp.block,
                                    gp.grampanchayat,
                                    gp.sitename,
                                    gp.locationdetails,
                                    gp.latitude,
                                    gp.longitude,
                                    gp.date,
                                    gp.wellid,
                                    gp.typeofwell,
                                    gp.other_well_type,
                                    gp.groundwater_level,
                                    gp.source,
                                    gp.source_type,
                                    r.pre_monsoon,
                                    r.post_monsoon,
                                    gp.image


                                }).ToList();

                    byte[] filecontent = ExcelExportHelper.ExportExcel(data, TabelName, true, "nothing");
                    return File(filecontent, ExcelExportHelper.ExcelContentType, "Existing.xls");
                }




                else if (TabelName == "Rain_Gauge_Monitoring")
                {
                    var data = AJE.obj_rainfall.Where(n => n.statename == stat && n.districtname == dist && n.blockname == block && n.gpname == gram).Select(n => new
                    {
                        n.statename,
                        n.districtname,
                        n.blockname,
                        n.gpname,
                        n.village,
                        n.locationdetail,
                        n.longitude,
                        n.latitude,
                        n.date1,
                        n.raingauge,
                        n.rainfall1,
                        n.cumulative,
                        n.image1,
                        n.image2,
                    }).ToList();

                    byte[] filecontent = ExcelExportHelper.ExportExcel(data, TabelName, true, "nothing");
                    return File(filecontent, ExcelExportHelper.ExcelContentType, "Rain_Gauge_Monitoring.xls");
                }
                else if (TabelName == "Water_Quality")
                {
                    var data = ABE.obj_abhy_gwqm_ftk.Where(n => n.state == stat && n.district == dist && n.block == block && n.gp == gram).Select(n => new
                    {
                        n.state,
                        n.district,
                        n.block,
                        n.gp,
                        n.village,
                        n.location_details,
                        n.latitude,
                        n.longitude,
                        n.date,
                        n.type_of_well,
                        n.well_id,
                        n.well_depth_mbgl,
                        n.ph,
                        n.total_hardness_mgl,
                        n.alkalinity_mgl,
                        n.nitrate_mgl,
                        n.fluoride_mgl,
                        n.iron_mgl,
                        n.arsenic_mgl,
                        n.ec_us_cm,
                        n.bacterial_test,
                        n.others
                    }).ToList();

                    byte[] filecontent = ExcelExportHelper.ExportExcel(data, TabelName, true, "nothing");
                    return File(filecontent, ExcelExportHelper.ExcelContentType, "Water_Quality.xls");
                }
                else if (TabelName == "Well_Inventory")
                {
                    var data = AJE.obj_wellinventory.Where(n => n.state == stat && n.district == dist && n.block == block && n.gp == gram).Select(n => new
                    {
                        n.state,
                        n.district,
                        n.block,
                        n.gp,
                        n.village,
                        n.locationdetails,           //abhi2406
                        n.latitude,
                        n.longitude,
                        n.date,
                        n.wellno,
                        n.welltype,
                        n.ownername,
                        n.welldiameter,
                        n.welldepth,
                        n.measuringpoint,
                        n.wellwaterpotable,
                        n.use,
                        n.pumpinstalled,
                        n.electricmeterselecteditem,

                    }).ToList();
                    if (data.Count == 0)
                    {
                        TempData["Message"] = "No Data Found";

                    }
                    else
                    {
                        byte[] filecontent = ExcelExportHelper.ExportExcel(data, TabelName, true, "nothing");
                        return File(filecontent, ExcelExportHelper.ExcelContentType, "Well_Inventory.xls");
                    }

                    //abhi2406
                }
            }
            else
            {
                return Json("Session Expired");
            }
            return RedirectToAction("social", "mis_new");
        }
        
        [HttpPost]
        public ActionResult Existingwell(string Data, string year1, string month1)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<Pagenum>(Data);

                    var State = result.statename;
                    var Dist = result.districtname;
                    var Block = result.blockname;
                    var Gram = result.gpname;
                    var year = year1.ToString();
                    var month = month1.ToString();
                    var PageNumber = result.PageNumber;
                    var StateOfficer = Session["Officer"].ToString();


                    List<dynamic> Final_data_new = new List<dynamic>();
                    List<vw_gwl> Final_data = new List<vw_gwl>();
                    List<vw_gwl_meta_data> Final_meta_data = new List<vw_gwl_meta_data>();
                    List<vw_gwl_meta_data> gp_count = new List<vw_gwl_meta_data>();
                    // Calculate the number of records to skip based on page number
                    int recordsToSkip = (PageNumber - 1) * 100;

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        gp_count = AJE.obj_vw_gwl_meta_data.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram && x.fyyear == year && x.fymonth == month)
                                                                   .OrderByDescending(c => c.id)
                                                                   .Skip(recordsToSkip)
                                                                   .Take(100)
                                                                   .ToList();
                        var uniqueGpNames = gp_count.GroupBy(c => c.wellid).Select(g => g.Key).ToList();
                        foreach (var gpName in uniqueGpNames)
                        {
                            var matchedData = AJE.obj_vw_gwl_meta_data.FirstOrDefault(x => x.wellid == gpName);

                            if (matchedData != null)
                            {
                                Final_meta_data.Add(matchedData);
                            }
                        }
                       
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
                    {
                        gp_count = AJE.obj_vw_gwl_meta_data.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram && x.fyyear == year)
                                                                    .OrderByDescending(c => c.id)
                                                                    .Skip(recordsToSkip)
                                                                    .Take(100)
                                                                    .ToList();
                        var uniqueGpNames = gp_count.GroupBy(c => c.wellid).Select(g => g.Key).ToList();
                        foreach (var gpName in uniqueGpNames)
                        {
                            var matchedData = AJE.obj_vw_gwl_meta_data.FirstOrDefault(x => x.wellid == gpName);

                            if (matchedData != null)
                            {
                                Final_meta_data.Add(matchedData);
                            }
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        Final_data = AJE.obj_vw_gwl.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram).OrderByDescending(c => c.id).Skip(recordsToSkip).Take(100).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        gp_count = AJE.obj_vw_gwl_meta_data.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year && x.fymonth == month)
                                                                    .OrderByDescending(c => c.id)
                                                                    .Skip(recordsToSkip)
                                                                    .Take(100)
                                                                    .ToList();
                        var uniqueGpNames = gp_count.GroupBy(c => c.wellid).Select(g => g.Key).ToList();
                        foreach (var gpName in uniqueGpNames)
                        {
                            var matchedData = AJE.obj_vw_gwl_meta_data.FirstOrDefault(x => x.wellid == gpName);

                            if (matchedData != null)
                            {
                                Final_meta_data.Add(matchedData);
                            }
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
                    {
                        gp_count = AJE.obj_vw_gwl_meta_data.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year )
                                                                   .OrderByDescending(c => c.id)
                                                                   .Skip(recordsToSkip)
                                                                   .Take(100)
                                                                   .ToList();
                        var uniqueGpNames = gp_count.GroupBy(c => c.wellid).Select(g => g.Key).ToList();
                        foreach (var gpName in uniqueGpNames)
                        {
                            var matchedData = AJE.obj_vw_gwl_meta_data.FirstOrDefault(x => x.wellid == gpName);

                            if (matchedData != null)
                            {
                                Final_meta_data.Add(matchedData);
                            }
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        Final_data = AJE.obj_vw_gwl.Where(x => x.state == State && x.district == Dist && x.block == Block).OrderByDescending(c => c.id).Skip(recordsToSkip).Take(100).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        gp_count = AJE.obj_vw_gwl_meta_data.Where(x => x.state == State && x.district == Dist && x.fyyear == year && x.fymonth == month)
                                                                   .OrderByDescending(c => c.id)
                                                                   .Skip(recordsToSkip)
                                                                   .Take(100)
                                                                   .ToList();
                        var uniqueGpNames = gp_count.GroupBy(c => c.wellid).Select(g => g.Key).ToList();
                        foreach (var gpName in uniqueGpNames)
                        {
                            var matchedData = AJE.obj_vw_gwl_meta_data.FirstOrDefault(x => x.wellid == gpName);

                            if (matchedData != null)
                            {
                                Final_meta_data.Add(matchedData);
                            }
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
                    {
                        gp_count = AJE.obj_vw_gwl_meta_data.Where(x => x.state == State && x.district == Dist && x.fyyear == year )
                                                                    .OrderByDescending(c => c.id)
                                                                    .Skip(recordsToSkip)
                                                                    .Take(100)
                                                                    .ToList();
                        var uniqueGpNames = gp_count.GroupBy(c => c.wellid).Select(g => g.Key).ToList();
                        foreach (var gpName in uniqueGpNames)
                        {
                            var matchedData = AJE.obj_vw_gwl_meta_data.FirstOrDefault(x => x.wellid == gpName);

                            if (matchedData != null)
                            {
                                Final_meta_data.Add(matchedData);
                            }
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        Final_data = AJE.obj_vw_gwl.Where(x => x.state == State && x.district == Dist).OrderByDescending(c => c.id).Skip(recordsToSkip).Take(100).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        gp_count = AJE.obj_vw_gwl_meta_data.Where(x => x.state == State && x.fyyear == year && x.fymonth == month)
                                                                  .OrderByDescending(c => c.id)
                                                                  .Skip(recordsToSkip)
                                                                  .Take(100)
                                                                  .ToList();
                        var uniqueGpNames = gp_count.GroupBy(c => c.wellid).Select(g => g.Key).ToList();
                        foreach (var gpName in uniqueGpNames)
                        {
                            var matchedData = AJE.obj_vw_gwl_meta_data.FirstOrDefault(x => x.wellid == gpName);

                            if (matchedData != null)
                            {
                                Final_meta_data.Add(matchedData);
                            }
                        }
                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
                    {
                        gp_count = AJE.obj_vw_gwl_meta_data.Where(x => x.state == State && x.fyyear == year )
                                                                 .OrderByDescending(c => c.id)
                                                                 .Skip(recordsToSkip)
                                                                 .Take(100)
                                                                 .ToList();
                        var uniqueGpNames = gp_count.GroupBy(c => c.wellid).Select(g => g.Key).ToList();
                        foreach (var gpName in uniqueGpNames)
                        {
                            var matchedData = AJE.obj_vw_gwl_meta_data.FirstOrDefault(x => x.wellid == gpName);

                            if (matchedData != null)
                            {
                                Final_meta_data.Add(matchedData);
                            }
                        }
                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        Final_data = AJE.obj_vw_gwl.Where(x => x.state == State).OrderByDescending(c => c.id).Skip(recordsToSkip).Take(100).ToList();

                    }


                    if (Final_data.Count != 0)
                    {

                        foreach (var data in Final_data)
                        {
                            vw_gwl_new obj1 = new vw_gwl_new();
                            int Check_id = data.id;
                            var details5 = AJE.obj_gwl_data.Where(x => x.gwl_meta_id == Check_id).OrderByDescending(x => x.status_data).ToList();
                            var status_data = "";
                            if (details5.Count != 0)
                            {
                                if (StateOfficer == "District Level Nodal Officer")
                                {
                                    foreach (var data_new in details5)
                                    {
                                        status_data = data_new.status_data;
                                        if (status_data == null || status_data == "")
                                        {
                                            status_data = "";
                                            break;
                                        }
                                    }

                                }
                                else if (StateOfficer == "State Level Nodal Officer")
                                {
                                    foreach (var data_new in details5)
                                    {
                                        status_data = data_new.status_data;
                                        if (status_data == null || status_data == "")
                                        {
                                            status_data = "";
                                           // break;

                                        }
                                        else if (status_data == "State")
                                        {
                                            status_data = "State";
                                            break;
                                        }
                                        else
                                        {
                                            status_data = "Approve";
                                            break;
                                        }
                                    }

                                }
                                else
                                {
                                    foreach (var data_new in details5)
                                    {
                                        status_data = data_new.status_data;
                                        if (status_data == null || status_data == "")
                                        {
                                            status_data = "";
                                            break;
                                        }
                                    }

                                }
                            }
                            else
                            {
                                status_data = "No data";
                            }



                            obj1.id = data.id;
                            obj1.state = data.state;
                            obj1.district = data.district;
                            obj1.block = data.block;
                            obj1.grampanchayat = data.grampanchayat;
                            obj1.sitename = data.sitename;
                            obj1.typeofwell = data.typeofwell;
                            obj1.source_Ownership = data.source_Ownership;
                            obj1.latitude = data.latitude;
                            obj1.longitude = data.longitude;
                            obj1.wellid = data.wellid;
                            obj1.welldepth = data.welldepth;
                            obj1.well = data.well;
                            obj1.datetime = data.datetime;
                            obj1.email = data.email;
                            obj1.image = data.image;
                            obj1.locationdetails = data.locationdetails;
                            obj1.other_well_type = data.other_well_type;
                            obj1.Diameter_of_Well = data.Diameter_of_Well;
                            obj1.Height_of_Measuring_Point = data.Height_of_Measuring_Point;
                            obj1.source_Ownership_type = data.source_Ownership_type;
                            obj1.source_Ownership_type_other = data.source_Ownership_type_other;
                            obj1.fyyear = data.fyyear;
                            obj1.fymonth = data.fymonth;
                            obj1.status = data.status;
                            obj1.reject_remark = data.reject_remark;
                            obj1.status_data = status_data;

                            Final_data_new.Add(obj1);
                        }




                        var jsonresult = Json(Final_data_new, JsonRequestBehavior.AllowGet);
                        jsonresult.MaxJsonLength = int.MaxValue;
                        return jsonresult;
                    }
                    if (Final_meta_data.Count != 0)
                    {
                        foreach (var item in Final_meta_data)
                        {
                            vw_gwl_new obj1 = new vw_gwl_new();
                            int Check_id = item.id;
                            var details5 = AJE.obj_gwl_data.Where(x => x.gwl_meta_id == Check_id).OrderByDescending(x => x.status_data).ToList();
                            var status_data = "";
                            if (details5.Count != 0)
                            {
                                if (StateOfficer == "District Level Nodal Officer")
                                {
                                    foreach (var data_new in details5)
                                    {
                                        status_data = data_new.status_data;
                                        if (status_data == null || status_data == "")
                                        {
                                            status_data = "";
                                            break;
                                        }
                                    }

                                }
                                else if (StateOfficer == "State Level Nodal Officer")
                                {
                                    foreach (var data_new in details5)
                                    {
                                        status_data = data_new.status_data;
                                        if (status_data == null || status_data == "")
                                        {
                                            status_data = "";
                                            //break;
                                        }
                                        else if (status_data == "State")
                                        {
                                            status_data = "State";
                                            break;
                                        }
                                        else
                                        {
                                            status_data = "Approve";
                                            break;
                                        }
                                    }

                                }
                                else
                                {
                                    foreach (var data_new in details5)
                                    {
                                        status_data = data_new.status_data;
                                        if (status_data == null || status_data == "")
                                        {
                                            status_data = "";
                                            break;
                                        }

                                    }
                                }
                            }
                            else
                            {
                                status_data = "No data";
                            }



                            obj1.id = item.id;
                            obj1.state = item.state;
                            obj1.district = item.district;
                            obj1.block = item.block;
                            obj1.grampanchayat = item.grampanchayat;
                            obj1.sitename = item.sitename;
                            obj1.typeofwell = item.typeofwell;
                            obj1.source_Ownership = item.source_Ownership;
                            obj1.latitude = item.latitude;
                            obj1.longitude = item.longitude;
                            obj1.wellid = item.wellid;
                            obj1.welldepth = item.welldepth;
                            obj1.well = item.well;
                            obj1.datetime = item.datetime;
                            obj1.email = item.email;
                            obj1.image = item.image;
                            obj1.locationdetails = item.locationdetails;
                            obj1.other_well_type = item.other_well_type;
                            obj1.Diameter_of_Well = item.Diameter_of_Well;
                            obj1.Height_of_Measuring_Point = item.Height_of_Measuring_Point;
                            obj1.source_Ownership_type = item.source_Ownership_type;
                            obj1.source_Ownership_type_other = item.source_Ownership_type_other;
                            obj1.fyyear = item.fyyear;
                            obj1.fymonth = item.fymonth;
                            obj1.status = item.status;
                            obj1.reject_remark = item.reject_remark;
                            obj1.status_data = status_data;

                            Final_data_new.Add(obj1);
                        }




                        var jsonresult = Json(Final_data_new, JsonRequestBehavior.AllowGet);
                        jsonresult.MaxJsonLength = int.MaxValue;
                        return jsonresult;
                    }
                    else
                    {
                        return Json("No Data", JsonRequestBehavior.AllowGet);
                    }

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
      
        [HttpPost]
        public ActionResult totalExistingwell_old(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<Pagenum>(Data);


                    var State = result.statename;
                    var Dist = result.districtname;
                    var Block = result.blockname;
                    var Gram = result.gpname;
                    var year = result.year;
                    var month = result.month;
                    var PageNumber = result.PageNumber;
                    int gp_count = 0;
                    List<vw_gwl> Final_data = new List<vw_gwl>();
                    List<vw_gwl_meta_data> Final_data_data = new List<vw_gwl_meta_data>();

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        Final_data_data = AJE.obj_vw_gwl_meta_data.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram && x.fyyear == year && x.fymonth == month).OrderByDescending(c => c.id).ToList();
                        gp_count = Final_data_data.GroupBy(c => c.grampanchayat).ToList().Count();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
                    {
                        Final_data_data = AJE.obj_vw_gwl_meta_data.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram && x.fyyear == year).OrderByDescending(c => c.id).ToList();
                        gp_count = Final_data_data.GroupBy(c => c.grampanchayat).ToList().Count();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        Final_data = AJE.obj_vw_gwl.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram).OrderByDescending(c => c.id).ToList();
                        gp_count = Final_data.GroupBy(c => c.grampanchayat).ToList().Count();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        Final_data_data = AJE.obj_vw_gwl_meta_data.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year && x.fymonth == month).OrderByDescending(c => c.id).ToList();
                        gp_count = Final_data_data.GroupBy(c => c.grampanchayat).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
                    {
                        Final_data_data = AJE.obj_vw_gwl_meta_data.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year).OrderByDescending(c => c.id).ToList();
                        gp_count = Final_data_data.GroupBy(c => c.grampanchayat).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        Final_data = AJE.obj_vw_gwl.Where(x => x.state == State && x.district == Dist && x.block == Block).OrderByDescending(c => c.id).ToList();
                        gp_count = Final_data.GroupBy(c => c.grampanchayat).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        Final_data_data = AJE.obj_vw_gwl_meta_data.Where(x => x.state == State && x.district == Dist && x.fyyear == year && x.fymonth == month).OrderByDescending(c => c.id).ToList();
                        gp_count = Final_data_data.GroupBy(c => c.grampanchayat).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
                    {
                        Final_data_data = AJE.obj_vw_gwl_meta_data.Where(x => x.state == State && x.district == Dist && x.fyyear == year).OrderByDescending(c => c.id).ToList();
                        gp_count = Final_data_data.GroupBy(c => c.grampanchayat).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        Final_data = AJE.obj_vw_gwl.Where(x => x.state == State && x.district == Dist).OrderByDescending(c => c.id).ToList();

                        gp_count = Final_data.Select(x => x.grampanchayat).Distinct().Count();

                        //gp_count = Final_data.GroupBy(c => c.grampanchayat).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        Final_data_data = AJE.obj_vw_gwl_meta_data.Where(x => x.state == State && x.fyyear == year && x.fymonth == month).OrderByDescending(c => c.id).ToList();
                        gp_count = Final_data_data.GroupBy(c => c.grampanchayat).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
                    {
                        Final_data_data = AJE.obj_vw_gwl_meta_data.Where(x => x.state == State && x.fyyear == year).OrderByDescending(c => c.id).ToList();
                        gp_count = Final_data_data.GroupBy(c => c.grampanchayat).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        Final_data = AJE.obj_vw_gwl.Where(x => x.state == State).OrderByDescending(c => c.id).ToList();
                        gp_count = Final_data.GroupBy(c => c.grampanchayat).ToList().Count();
                    }
                    if (Final_data.Count != 0)
                    {

                        var exetotal = Final_data.Count;
                        var gp = gp_count;
                        var Totalpages = Math.Ceiling(Final_data.Count() / 100.0);
                        var jsonresult = Json(exetotal + "," + Totalpages + "," + gp, JsonRequestBehavior.AllowGet);
                        jsonresult.MaxJsonLength = int.MaxValue;
                        return jsonresult;
                    }
                    else
                    {
                        var updatedMetaData = new List<vw_gwl_meta_data>();
                        var uniqueGpNames = Final_data_data.GroupBy(c => c.wellid).Select(g => g.Key).ToList();
                        foreach (var gpName in uniqueGpNames)
                        {
                            var matchedData = AJE.obj_vw_gwl_meta_data.FirstOrDefault(x => x.wellid == gpName);

                            if (matchedData != null)
                            {
                                updatedMetaData.Add(matchedData);
                            }
                        }
                        var exetotal = updatedMetaData.Count;
                        var gp = gp_count;
                        var Totalpages = Math.Ceiling(updatedMetaData.Count() / 100.0);
                        var jsonresult = Json(exetotal + "," + Totalpages + "," + gp, JsonRequestBehavior.AllowGet);
                        jsonresult.MaxJsonLength = int.MaxValue;
                        return jsonresult;
                    }

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

        [HttpPost]
        public ActionResult totalExistingwell(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<Pagenum>(Data);

                    var State = result.statename == "0" ? null : result.statename;
                    var Dist = result.districtname == "0" ? null : result.districtname;
                    var Block = result.blockname == "0" ? null : result.blockname;
                    var Gram = result.gpname == "0" ? null : result.gpname;
                    var year = result.year == "0" ? null : result.year;
                    var month = result.month == "0" ? null : result.month;
                    var PageNumber = result.PageNumber;

                    int gp_count = 0;
                    List<vw_gwl> Final_data = new List<vw_gwl>();
                    List<vw_gwl_meta_data> Final_data_data = new List<vw_gwl_meta_data>();

                    if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(Dist) && !string.IsNullOrEmpty(Block) && !string.IsNullOrEmpty(Gram) && !string.IsNullOrEmpty(year) && !string.IsNullOrEmpty(month))
                    {
                        Final_data_data = AJE.obj_vw_gwl_meta_data.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram && x.fyyear == year && x.fymonth == month).OrderByDescending(c => c.id).ToList();
                    }
                    else if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(Dist) && !string.IsNullOrEmpty(Block) && !string.IsNullOrEmpty(Gram) && !string.IsNullOrEmpty(year))
                    {
                        Final_data_data = AJE.obj_vw_gwl_meta_data.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram && x.fyyear == year).OrderByDescending(c => c.id).ToList();
                    }
                    else if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(Dist) && !string.IsNullOrEmpty(Block) && !string.IsNullOrEmpty(Gram))
                    {
                        Final_data = AJE.obj_vw_gwl.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram).OrderByDescending(c => c.id).ToList();
                    }
                    else if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(Dist) && !string.IsNullOrEmpty(Block) && !string.IsNullOrEmpty(year) && !string.IsNullOrEmpty(month))
                    {
                        Final_data_data = AJE.obj_vw_gwl_meta_data.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year && x.fymonth == month).OrderByDescending(c => c.id).ToList();
                    }
                    else if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(Dist) && !string.IsNullOrEmpty(Block) && !string.IsNullOrEmpty(year))
                    {
                        Final_data_data = AJE.obj_vw_gwl_meta_data.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year).OrderByDescending(c => c.id).ToList();
                    }
                    else if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(Dist) && !string.IsNullOrEmpty(Block))
                    {
                        Final_data = AJE.obj_vw_gwl.Where(x => x.state == State && x.district == Dist && x.block == Block).OrderByDescending(c => c.id).ToList();
                    }
                    else if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(Dist) && !string.IsNullOrEmpty(year) && !string.IsNullOrEmpty(month))
                    {
                        Final_data_data = AJE.obj_vw_gwl_meta_data.Where(x => x.state == State && x.district == Dist && x.fyyear == year && x.fymonth == month).OrderByDescending(c => c.id).ToList();
                    }
                    else if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(Dist) && !string.IsNullOrEmpty(year))
                    {
                        Final_data_data = AJE.obj_vw_gwl_meta_data.Where(x => x.state == State && x.district == Dist && x.fyyear == year).OrderByDescending(c => c.id).ToList();
                    }
                    else if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(Dist))
                    {
                        Final_data = AJE.obj_vw_gwl.Where(x => x.state == State && x.district == Dist).OrderByDescending(c => c.id).ToList();
                    }
                    else if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(year) && !string.IsNullOrEmpty(month))
                    {
                        Final_data_data = AJE.obj_vw_gwl_meta_data.Where(x => x.state == State && x.fyyear == year && x.fymonth == month).OrderByDescending(c => c.id).ToList();
                    }
                    else if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(year))
                    {
                        Final_data_data = AJE.obj_vw_gwl_meta_data.Where(x => x.state == State && x.fyyear == year).OrderByDescending(c => c.id).ToList();
                    }
                    else if (!string.IsNullOrEmpty(State))
                    {
                        Final_data = AJE.obj_vw_gwl.Where(x => x.state == State).OrderByDescending(c => c.id).ToList();
                    }

                    if (Final_data.Count != 0)
                    {
                        gp_count = Final_data.Select(x => x.grampanchayat).Distinct().Count();
                        var uniqueGpNames = Final_data.GroupBy(c => c.wellid).Select(g => g.Key).ToList();
                        var updatedMetaData = new List<vw_gwl>();
                        foreach (var gpName in uniqueGpNames)
                        {
                            var matchedData = AJE.obj_vw_gwl.FirstOrDefault(x => x.wellid == gpName);

                            if (matchedData != null)
                            {
                                updatedMetaData.Add(matchedData);
                            }
                        }
                        var exetotal = updatedMetaData.Count;

                        var Totalpages = Math.Ceiling(Final_data.Count / 100.0);
                        var jsonresult = Json(exetotal + "," + Totalpages + "," + gp_count, JsonRequestBehavior.AllowGet);
                        jsonresult.MaxJsonLength = int.MaxValue;
                        return jsonresult;
                        //return Json(new { exetotal = Final_data.Count, Totalpages, gp = gp_count }, JsonRequestBehavior.AllowGet);
                    }
                    else if (Final_data_data.Count != 0)
                    {
                        gp_count = Final_data_data.GroupBy(c => c.grampanchayat).ToList().Count();
                        var uniqueGpNames = Final_data_data.GroupBy(c => c.wellid).Select(g => g.Key).ToList();
                        var updatedMetaData = new List<vw_gwl_meta_data>();
                        foreach (var gpName in uniqueGpNames)
                        {
                            var matchedData = AJE.obj_vw_gwl_meta_data.FirstOrDefault(x => x.wellid == gpName);

                            if (matchedData != null)
                            {
                                updatedMetaData.Add(matchedData);
                            }
                        }
                        var exetotal = updatedMetaData.Count;
                        var Totalpages = Math.Ceiling(Final_data_data.Count / 100.0);
                        var jsonresult = Json(exetotal + "," + Totalpages + "," + gp_count, JsonRequestBehavior.AllowGet);
                        jsonresult.MaxJsonLength = int.MaxValue;
                        return jsonresult;
                    }
                    else 
                    {
                        
                        var jsonresult = Json(0+ "," + 0 + "," + 0, JsonRequestBehavior.AllowGet);
                        jsonresult.MaxJsonLength = int.MaxValue;
                        return jsonresult;
                    }
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

        [HttpPost]
        public ActionResult total_gp_Existingwell(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<Pagenum>(Data);


                    var State = result.statename;
                    var Dist = result.districtname;
                    var Block = result.blockname;
                    var Gram = result.gpname;
                    var year = result.year;
                    var month = result.month;
                    var PageNumber = result.PageNumber;

                    List<vw_gwl> Final_data = new List<vw_gwl>();

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        var data1 = AJE.obj_vw_gwl.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram && x.fyyear == year && x.fymonth == month).ToList();
                        var data = data1.GroupBy(c => c.grampanchayat).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_gwl.Where(n => n.grampanchayat == daada).OrderByDescending(x => x.datetime).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
                    {
                        var data1 = AJE.obj_vw_gwl.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram && x.fyyear == year).ToList();
                        var data = data1.GroupBy(c => c.grampanchayat).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_gwl.Where(n => n.grampanchayat == daada).OrderByDescending(x => x.datetime).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        var data1 = AJE.obj_vw_gwl.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram).ToList();
                        var data = data1.GroupBy(c => c.grampanchayat).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_gwl.Where(n => n.grampanchayat == daada).OrderByDescending(x => x.datetime).FirstOrDefault();
                            Final_data.Add(exist2);
                        }

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        var data1 = AJE.obj_vw_gwl.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year && x.fymonth == month).ToList();
                        var data = data1.GroupBy(c => c.grampanchayat).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_gwl.Where(n => n.grampanchayat == daada).OrderByDescending(x => x.datetime).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
                    {
                        var data1 = AJE.obj_vw_gwl.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year).ToList();
                        var data = data1.GroupBy(c => c.grampanchayat).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_gwl.Where(n => n.grampanchayat == daada).OrderByDescending(x => x.datetime).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        var data1 = AJE.obj_vw_gwl.Where(x => x.state == State && x.district == Dist && x.block == Block).ToList();
                        var data = data1.GroupBy(c => c.grampanchayat).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_gwl.Where(n => n.grampanchayat == daada).OrderByDescending(x => x.datetime).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        var data1 = AJE.obj_vw_gwl.Where(x => x.state == State && x.district == Dist && x.fyyear == year && x.fymonth == month).ToList();
                        var data = data1.GroupBy(c => c.grampanchayat).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_gwl.Where(n => n.grampanchayat == daada).OrderByDescending(x => x.datetime).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
                    {
                        var data1 = AJE.obj_vw_gwl.Where(x => x.state == State && x.district == Dist && x.fyyear == year).ToList();
                        var data = data1.GroupBy(c => c.grampanchayat).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_gwl.Where(n => n.grampanchayat == daada).OrderByDescending(x => x.datetime).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        var data1 = AJE.obj_vw_gwl.Where(x => x.state == State && x.district == Dist).ToList();
                        var data = data1.GroupBy(c => c.grampanchayat).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_gwl.Where(n => n.grampanchayat == daada).OrderByDescending(x => x.datetime).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        var data1 = AJE.obj_vw_gwl.Where(x => x.state == State && x.fyyear == year && x.fymonth == month).ToList();
                        var data = data1.GroupBy(c => c.grampanchayat).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_gwl.Where(n => n.grampanchayat == daada).OrderByDescending(x => x.datetime).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
                    {
                        var data1 = AJE.obj_vw_gwl.Where(x => x.state == State && x.fyyear == year).ToList();
                        var data = data1.GroupBy(c => c.grampanchayat).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_gwl.Where(n => n.grampanchayat == daada).OrderByDescending(x => x.datetime).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        var data1 = AJE.obj_vw_gwl.Where(x => x.state == State).ToList();
                        var data = data1.GroupBy(c => c.grampanchayat).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_gwl.Where(n => n.grampanchayat == daada).OrderByDescending(x => x.datetime).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }

                    var exetotal = Final_data.Count;
                    var jsonresult = Json(exetotal, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
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
        public ActionResult deletewell(string Id)
        {
            if (Id != null)
            {
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<groundwaterlevel>(Id);
                if (result != null)
                {
                    AJE.Entry(result).State = EntityState.Deleted;
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

        [HttpPost]
        public ActionResult Updatewell(HttpPostedFileBase txtimage, int? id, string village, string locationdetail, string latitude, string longitude, DateTime Date, string widd, string toww, string premm, string post)
        {
            var statename = Session["gstate"].ToString();
            var districtname = Session["gdist"].ToString();
            var blockname = Session["gblock"].ToString();
            var gpname = Session["ggram"].ToString();


            //var statename = Session["Mstate"].ToString();
            //var districtname = Session["Mdist"].ToString();
            //var blockname = Session["Mblock"].ToString();
            //var gpname = Session["Mgram"].ToString();


            var data = AJE.obj_groundwaterlevel.Where(x => x.id == id).FirstOrDefault();

            if (data != null)
            {


                data.id = id;
                data.grampanchayat = village;
                data.sitename = locationdetail;
                data.latitude = latitude;
                data.longitude = longitude;
                data.datetime = Date;
                data.wellid = widd;
                data.typeofwell = toww;
                data.pre2019 = premm;
                data.post2019 = post;

                if (txtimage != null)
                {
                    if (txtimage.FileName != null)
                    {

                        string filename = Path.GetFileNameWithoutExtension(txtimage.FileName);
                        string ext = Path.GetExtension(txtimage.FileName);
                        filename = filename + ext;
                        data.image = "/imageakash/" + filename;
                        filename = Path.Combine(Server.MapPath("/imageakash/"), filename);
                        txtimage.SaveAs(filename);
                    }
                }

                AJE.Entry(data).State = EntityState.Modified;
                AJE.SaveChanges();
                return Json("Successfully Saved");
            }



            else
            {
                return Json("Not Updated");
            }


        }

        [HttpPost]
        public ActionResult newwell(string Data)
        {

            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<Pagenum>(Data);


                    var State = result.statename;
                    var Dist = result.districtname;
                    var Block = result.blockname;
                    var Gram = result.gpname;
                    var PageNumber = result.PageNumber;
                    var ddetails = (from gp in AJE.obj_groundwaterlevel
                                    join r in AJE.obj_groundwatermeta on gp.id equals r.groundid
                                    where gp.state == State && gp.district == Dist && gp.block == Block && gp.grampanchayat == Gram && gp.isarchive == 1 && r.year >= 2022
                                    select new
                                    {
                                        gp,
                                        r

                                    }).ToList();


                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        ddetails = (from gp in AJE.obj_groundwaterlevel
                                    join r in AJE.obj_groundwatermeta on gp.id equals r.groundid
                                    where gp.state == State && gp.district == Dist && gp.block == Block && gp.grampanchayat == Gram && gp.isarchive == 1 && r.year >= 2022
                                    select new
                                    {
                                        gp,
                                        r

                                    }).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        ddetails = (from gp in AJE.obj_groundwaterlevel
                                    join r in AJE.obj_groundwatermeta on gp.id equals r.groundid
                                    where gp.state == State && gp.district == Dist && gp.block == Block && gp.isarchive == 1 && r.year >= 2022
                                    select new
                                    {
                                        gp,
                                        r

                                    }).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        ddetails = (from gp in AJE.obj_groundwaterlevel
                                    join r in AJE.obj_groundwatermeta on gp.id equals r.groundid
                                    where gp.state == State && gp.district == Dist && gp.isarchive == 1 && r.year >= 2022
                                    select new
                                    {
                                        gp,
                                        r

                                    }).ToList();
                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        ddetails = (from gp in AJE.obj_groundwaterlevel
                                    join r in AJE.obj_groundwatermeta on gp.id equals r.groundid
                                    where gp.state == State && gp.isarchive == 1 && r.year >= 2022
                                    select new
                                    {
                                        gp,
                                        r

                                    }).ToList();
                    }
                    ViewBag.Totalpages = Math.Ceiling(ddetails.Count() / 100.0);
                    Session["PageNumber"] = PageNumber;
                    ddetails = ddetails.Skip((PageNumber - 1) * 100).Take(100).ToList();
                    var jsonresult = Json(ddetails, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
                }
                catch (Exception Ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("", JsonRequestBehavior.AllowGet);

            }

        }

        [HttpPost]
        public ActionResult totalnewwell(string Data)
        {

            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<Pagenum>(Data);


                    var State = result.statename;
                    var Dist = result.districtname;
                    var Block = result.blockname;
                    var Gram = result.gpname;
                    var PageNumber = result.PageNumber;
                    var ddetails = (from gp in AJE.obj_groundwaterlevel
                                    join r in AJE.obj_groundwatermeta on gp.id equals r.groundid
                                    where gp.state == State && gp.district == Dist && gp.block == Block && gp.grampanchayat == Gram && gp.isarchive == 1 && r.year >= 2022
                                    select new
                                    {
                                        gp,
                                        r

                                    }).ToList();


                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        ddetails = (from gp in AJE.obj_groundwaterlevel
                                    join r in AJE.obj_groundwatermeta on gp.id equals r.groundid
                                    where gp.state == State && gp.district == Dist && gp.block == Block && gp.grampanchayat == Gram && gp.isarchive == 1 && r.year >= 2022
                                    select new
                                    {
                                        gp,
                                        r

                                    }).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        ddetails = (from gp in AJE.obj_groundwaterlevel
                                    join r in AJE.obj_groundwatermeta on gp.id equals r.groundid
                                    where gp.state == State && gp.district == Dist && gp.block == Block && gp.isarchive == 1 && r.year >= 2022
                                    select new
                                    {
                                        gp,
                                        r

                                    }).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        ddetails = (from gp in AJE.obj_groundwaterlevel
                                    join r in AJE.obj_groundwatermeta on gp.id equals r.groundid
                                    where gp.state == State && gp.district == Dist && gp.isarchive == 1 && r.year >= 2022
                                    select new
                                    {
                                        gp,
                                        r

                                    }).ToList();
                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        ddetails = (from gp in AJE.obj_groundwaterlevel
                                    join r in AJE.obj_groundwatermeta on gp.id equals r.groundid
                                    where gp.state == State && gp.isarchive == 1 && r.year >= 2022
                                    select new
                                    {
                                        gp,
                                        r

                                    }).ToList();
                    }
                    var totalnew = ddetails.Count;
                    var Totalpagesnew = Math.Ceiling(ddetails.Count() / 100.0);
                    var jsonresult = Json(totalnew + "," + Totalpagesnew, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
                }
                catch (Exception Ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("", JsonRequestBehavior.AllowGet);

            }

        }

        [HttpPost]
        public ActionResult Updatenewwell_save(HttpPostedFileBase txtimage2, int? id, string village, string locationdetails, string latitude, string longitude, DateTime Date, string widd, string toww, string premm, string post)
        {
            var statename = Session["gstate"].ToString();
            var districtname = Session["gdist"].ToString();
            var blockname = Session["gblock"].ToString();
            var gpname = Session["ggram"].ToString();

            //var statename = Session["Mstate"].ToString();
            //var districtname = Session["Mdist"].ToString();
            //var blockname = Session["Mblock"].ToString();
            //var gpname = Session["Mgram"].ToString();


            var data = AJE.obj_groundwaterlevel.Where(x => x.id == id).FirstOrDefault();
            var data_a = AJE.obj_groundwatermeta.Where(x => x.groundid == id).FirstOrDefault();
            if (data != null)
            {


                data.id = id;
                data.grampanchayat = village;
                data.sitename = locationdetails;
                data.latitude = latitude;
                data.longitude = longitude;
                data.datetime = Date;
                data.wellid = widd;
                data.typeofwell = toww;
                if (txtimage2 != null)
                {
                    if (txtimage2.FileName != null)
                    {

                        string filename = Path.GetFileNameWithoutExtension(txtimage2.FileName);
                        string ext = Path.GetExtension(txtimage2.FileName);
                        filename = filename + ext;
                        data.image = "/imageakash/" + filename;
                        filename = Path.Combine(Server.MapPath("/imageakash/"), filename);
                        txtimage2.SaveAs(filename);
                    }
                }
                AJE.Entry(data).State = EntityState.Modified;
                AJE.SaveChanges();


            }
            if (data_a != null)
            {
                data_a.groundid = (int)id;
                data_a.pre_monsoon = premm;
                data_a.post_monsoon = post;
                data_a.WellType = "Update Existing Well";


                AJE.Entry(data_a).State = EntityState.Modified;
                AJE.SaveChanges();
                return Json("Successfully Saved");

            }

            else
            {
                return Json("Not Updated");
            }

        }

        [HttpPost]
        public ActionResult deletenewwell(string Id)
        {
            if (Id != null)
            {
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<groundwaterlevel>(Id);
                if (result != null)
                {
                    AJE.Entry(result).State = EntityState.Deleted;
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

        [HttpPost]
        public ActionResult Export1(string TableName)
        {
            if (Session["UserId"] != null)
            {
                var state = Session["gstate"].ToString();
                var district = Session["gdist"].ToString();
                var block = Session["gblock"].ToString();
                var gpName = Session["ggram"].ToString();




                if (TableName == "Existing_well")
                {
                    var data = (from gp in AJE.obj_groundwaterlevel
                                join r in AJE.obj_groundwatermeta on gp.id equals r.groundid
                                where gp.state == state && gp.district == district && gp.block == block && gp.grampanchayat == gpName && r.year <= 2021
                                select new
                                {
                                    gp.state,
                                    gp.district,
                                    gp.block,
                                    gp.grampanchayat,
                                    gp.sitename,
                                    gp.latitude,
                                    gp.longitude,
                                    gp.date,
                                    gp.wellid,
                                    gp.typeofwell,
                                    r.pre_monsoon,
                                    r.post_monsoon,
                                    gp.groundwater_level,
                                    gp.image


                                }).ToList();

                    byte[] filecontent = ExcelExportHelper.ExportExcel(data, TableName, true, "nothing");
                    return File(filecontent, ExcelExportHelper.ExcelContentType, "Existing_well.xls");
                }
                else if (TableName == "New_observation")
                {
                    var data = (from gp in AJE.obj_groundwaterlevel
                                join r in AJE.obj_groundwatermeta on gp.id equals r.groundid
                                where gp.state == state && gp.district == district && gp.block == block && gp.grampanchayat == gpName && r.year >= 2022 && gp.isarchive == 1
                                select new
                                {
                                    gp.state,
                                    gp.district,
                                    gp.block,
                                    gp.grampanchayat,
                                    gp.sitename,
                                    gp.locationdetails,
                                    gp.latitude,
                                    gp.longitude,
                                    gp.date,
                                    gp.wellid,
                                    gp.typeofwell,
                                    gp.other_well_type,
                                    gp.groundwater_level,
                                    gp.source,
                                    gp.source_type,
                                    r.pre_monsoon,
                                    r.post_monsoon,
                                    gp.image


                                }).ToList();

                    byte[] filecontent = ExcelExportHelper.ExportExcel(data, TableName, true, "nothing");
                    return File(filecontent, ExcelExportHelper.ExcelContentType, "New_observation.xls");

                }


            }

            return RedirectToAction("social", "mis_new");

        }


        //Updated Existing observation Well   akash
        [HttpPost]
        public ActionResult updatewell_data()
        {
            var state = Session["gstate"].ToString();
            var district = Session["gdist"].ToString();
            var block = Session["gblock"].ToString();
            var gpName = Session["ggram"].ToString();
            var StateOfficer = Session["Officer"].ToString();




            //string state = Session["Mstate"].ToString();
            //string district = Session["Mdist"].ToString();
            //string block = Session["Mblock"].ToString();
            //string gpName = Session["Mgram"].ToString();
            try
            {



                var ddetails1 = (from gp in AJE.obj_groundwaterlevel
                                 join r in AJE.obj_groundwatermeta on gp.id equals r.groundid
                                 where gp.state == state && gp.district == district && gp.block == block && gp.grampanchayat == gpName && r.WellType == "Update Existing Well"
                                 select new
                                 {
                                     gp,
                                     r

                                 }).ToList();
                return Json(ddetails1, JsonRequestBehavior.AllowGet);


            }
            catch (Exception Ex)
            {
                return Json("Error", JsonRequestBehavior.AllowGet);
            }

        }

        [HttpPost]
        public ActionResult Update_observation_well(HttpPostedFileBase updateimage, int? id, string village, string locationdetail, string latitude, string longitude, DateTime Date, string widd, string toww, string premm, string post)
        {

            var statename = Session["gstate"].ToString();
            var districtname = Session["gdist"].ToString();
            var blockname = Session["gblock"].ToString();
            var gpname = Session["ggram"].ToString();


            //var statename = Session["Mstate"].ToString();
            //var districtname = Session["Mdist"].ToString();
            //var blockname = Session["Mblock"].ToString();
            //var gpname = Session["Mgram"].ToString();


            var data = AJE.obj_groundwaterlevel.Where(x => x.id == id).FirstOrDefault();
            var data_a = AJE.obj_groundwatermeta.Where(x => x.groundid == id).FirstOrDefault();
            if (data != null)
            {


                data.id = id;
                data.grampanchayat = village;
                data.sitename = locationdetail;
                data.latitude = latitude;
                data.longitude = longitude;
                data.date = Date;
                data.wellid = widd;
                data.typeofwell = toww;
                if (updateimage != null)
                {
                    if (updateimage.FileName != null)
                    {

                        string filename = Path.GetFileNameWithoutExtension(updateimage.FileName);
                        string ext = Path.GetExtension(updateimage.FileName);
                        filename = filename + ext;
                        data.image = "/imageakash/" + filename;
                        filename = Path.Combine(Server.MapPath("/imageakash/"), filename);
                        updateimage.SaveAs(filename);
                    }
                }
                AJE.Entry(data).State = EntityState.Modified;
                AJE.SaveChanges();


            }
            if (data_a != null)
            {
                data_a.groundid = (int)id;
                data_a.pre_monsoon = premm;
                data_a.post_monsoon = post;
                data_a.WellType = "Update Existing Well";


                AJE.Entry(data_a).State = EntityState.Modified;
                AJE.SaveChanges();
                return Json("Successfully Saved");

            }

            else
            {
                return Json("Not Updated");
            }

        }

        [HttpPost]
        public ActionResult delete_update_observation(string Id)
        {
            if (Id != null)
            {
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<groundwaterlevel>(Id);
                if (result != null)
                {
                    AJE.Entry(result).State = EntityState.Deleted;
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

        [HttpPost]
        public ActionResult totalwaterflow(string Data, string year1, string month1)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<Pagenum>(Data);

                    var State = result.statename;
                    var Dist = result.districtname;
                    var Block = result.blockname;
                    var Gram = result.gpname;
                    var year = year1.ToString();
                    var month = month1.ToString();
                    var PageNumber = result.PageNumber;

                    int gp_count = 0;

                    List<vw_waterflow_meta> ddetails = new List<vw_waterflow_meta>();
                    List<vw_waterflow_meta_data> ddetails_metadata = new List<vw_waterflow_meta_data>();

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        ddetails_metadata = AJE.obj_vw_waterflow_meta_data.Where(x => x.State == State && x.District == Dist && x.Block == Block && x.GramPanchayat == Gram && x.fyyear == year && x.fymonth == month).ToList();
                        gp_count = ddetails_metadata.GroupBy(c => c.GramPanchayat).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
                    {
                        ddetails_metadata = AJE.obj_vw_waterflow_meta_data.Where(x => x.State == State && x.District == Dist && x.Block == Block && x.GramPanchayat == Gram && x.fyyear == year).ToList();
                        gp_count = ddetails_metadata.GroupBy(c => c.GramPanchayat).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        ddetails = AJE.obj_vw_waterflow_meta.Where(x => x.State == State && x.District == Dist && x.Block == Block && x.GramPanchayat == Gram).ToList();
                        gp_count = ddetails.GroupBy(c => c.GramPanchayat).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        ddetails_metadata = AJE.obj_vw_waterflow_meta_data.Where(x => x.State == State && x.District == Dist && x.Block == Block && x.fyyear == year && x.fymonth == month).ToList();
                        gp_count = ddetails_metadata.GroupBy(c => c.GramPanchayat).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
                    {
                        ddetails_metadata = AJE.obj_vw_waterflow_meta_data.Where(x => x.State == State && x.District == Dist && x.Block == Block && x.fyyear == year).ToList();
                        gp_count = ddetails_metadata.GroupBy(c => c.GramPanchayat).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        ddetails = AJE.obj_vw_waterflow_meta.Where(x => x.State == State && x.District == Dist && x.Block == Block).ToList();
                        gp_count = ddetails.GroupBy(c => c.GramPanchayat).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        ddetails_metadata = AJE.obj_vw_waterflow_meta_data.Where(x => x.State == State && x.District == Dist && x.fyyear == year && x.fymonth == month).ToList();
                        gp_count = ddetails_metadata.GroupBy(c => c.GramPanchayat).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
                    {
                        ddetails_metadata = AJE.obj_vw_waterflow_meta_data.Where(x => x.State == State && x.District == Dist && x.fyyear == year).ToList();
                        gp_count = ddetails_metadata.GroupBy(c => c.GramPanchayat).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        ddetails = AJE.obj_vw_waterflow_meta.Where(x => x.State == State && x.District == Dist).ToList();
                        gp_count = ddetails.GroupBy(c => c.GramPanchayat).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        ddetails_metadata = AJE.obj_vw_waterflow_meta_data.Where(x => x.State == State && x.fyyear == year && x.fymonth == month).ToList();
                        gp_count = ddetails_metadata.GroupBy(c => c.GramPanchayat).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
                    {
                        ddetails_metadata = AJE.obj_vw_waterflow_meta_data.Where(x => x.State == State && x.fyyear == year).ToList();
                        gp_count = ddetails_metadata.GroupBy(c => c.GramPanchayat).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        ddetails = AJE.obj_vw_waterflow_meta.Where(x => x.State == State).ToList();
                        gp_count = ddetails.GroupBy(c => c.GramPanchayat).ToList().Count();
                    }
                    if (ddetails.Count != 0)
                    {
                        var totalgeo = ddetails.Count;
                        var Totalpagesgeo = Math.Ceiling(ddetails.Count() / 100.0);
                        return Json(totalgeo + "," + Totalpagesgeo + "," + gp_count, JsonRequestBehavior.AllowGet);
                    }
                    else
                    {
                        var updatedMetaData = new List<vw_waterflow_meta_data>();
                        var uniqueGpNames = ddetails_metadata.GroupBy(c => c.Meterid).Select(g => g.Key).ToList();
                        foreach (var gpName in uniqueGpNames)
                        {
                            var matchedData = AJE.obj_vw_waterflow_meta_data.FirstOrDefault(x => x.Meterid == gpName);

                            if (matchedData != null)
                            {
                                updatedMetaData.Add(matchedData);
                            }
                        }

                        var totalgeo = updatedMetaData.Count;
                        var Totalpagesgeo = Math.Ceiling(updatedMetaData.Count() / 100.0);
                        return Json(totalgeo + "," + Totalpagesgeo + "," + gp_count, JsonRequestBehavior.AllowGet);
                    }



                }
                catch (Exception Ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("", JsonRequestBehavior.AllowGet);

            }

        }

        [HttpPost]
        public ActionResult waterflow(string Data, string year1, string month1)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<Pagenum>(Data);

                    var State = result.statename;
                    var Dist = result.districtname;
                    var Block = result.blockname;
                    var Gram = result.gpname;
                    var year = year1.ToString();
                    var month = month1.ToString();
                    var PageNumber = result.PageNumber;
                    var StateOfficer = Session["Officer"].ToString();

                    List<dynamic> ddetails_new = new List<dynamic>();
                    List<vw_waterflow_meta> ddetails = new List<vw_waterflow_meta>();
                    List<vw_waterflow_meta_data> ddetails_metadata = new List<vw_waterflow_meta_data>();
                    List<vw_waterflow_meta_data> gp_count = new List<vw_waterflow_meta_data>();

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        gp_count = AJE.obj_vw_waterflow_meta_data.Where(x => x.State == State && x.District == Dist && x.Block == Block && x.GramPanchayat == Gram && x.fyyear == year && x.fymonth == month).OrderByDescending(x=>x.id).ToList();
                        var uniqueGpNames = gp_count.GroupBy(c => c.Meterid).Select(g => g.Key).ToList();
                        foreach (var gpName in uniqueGpNames)
                        {
                            var matchedData = AJE.obj_vw_waterflow_meta_data.FirstOrDefault(x => x.Meterid == gpName);

                            if (matchedData != null)
                            {
                                ddetails_metadata.Add(matchedData);
                            }
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
                    {
                        gp_count = AJE.obj_vw_waterflow_meta_data.Where(x => x.State == State && x.District == Dist && x.Block == Block && x.GramPanchayat == Gram && x.fyyear == year).OrderByDescending(x => x.id).ToList();
                        var uniqueGpNames = gp_count.GroupBy(c => c.Meterid).Select(g => g.Key).ToList();
                        foreach (var gpName in uniqueGpNames)
                        {
                            var matchedData = AJE.obj_vw_waterflow_meta_data.FirstOrDefault(x => x.Meterid == gpName);

                            if (matchedData != null)
                            {
                                ddetails_metadata.Add(matchedData);
                            }
                        }

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        ddetails = AJE.obj_vw_waterflow_meta.Where(x => x.State == State && x.District == Dist && x.Block == Block && x.GramPanchayat == Gram).OrderByDescending(x => x.id).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        gp_count = AJE.obj_vw_waterflow_meta_data.Where(x => x.State == State && x.District == Dist && x.Block == Block && x.fyyear == year && x.fymonth == month).OrderByDescending(x => x.id).ToList();
                        var uniqueGpNames = gp_count.GroupBy(c => c.Meterid).Select(g => g.Key).ToList();
                        foreach (var gpName in uniqueGpNames)
                        {
                            var matchedData = AJE.obj_vw_waterflow_meta_data.FirstOrDefault(x => x.Meterid == gpName);

                            if (matchedData != null)
                            {
                                ddetails_metadata.Add(matchedData);
                            }
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
                    {
                        gp_count = AJE.obj_vw_waterflow_meta_data.Where(x => x.State == State && x.District == Dist && x.Block == Block && x.fyyear == year).OrderByDescending(x => x.id).ToList();
                        var uniqueGpNames = gp_count.GroupBy(c => c.Meterid).Select(g => g.Key).ToList();
                        foreach (var gpName in uniqueGpNames)
                        {
                            var matchedData = AJE.obj_vw_waterflow_meta_data.FirstOrDefault(x => x.Meterid == gpName);

                            if (matchedData != null)
                            {
                                ddetails_metadata.Add(matchedData);
                            }
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        ddetails = AJE.obj_vw_waterflow_meta.Where(x => x.State == State && x.District == Dist && x.Block == Block).OrderByDescending(x => x.id).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        gp_count = AJE.obj_vw_waterflow_meta_data.Where(x => x.State == State && x.District == Dist && x.fyyear == year && x.fymonth == month).OrderByDescending(x => x.id).ToList();
                        var uniqueGpNames = gp_count.GroupBy(c => c.Meterid).Select(g => g.Key).ToList();
                        foreach (var gpName in uniqueGpNames)
                        {
                            var matchedData = AJE.obj_vw_waterflow_meta_data.FirstOrDefault(x => x.Meterid == gpName);

                            if (matchedData != null)
                            {
                                ddetails_metadata.Add(matchedData);
                            }
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
                    {
                        gp_count = AJE.obj_vw_waterflow_meta_data.Where(x => x.State == State && x.District == Dist && x.fyyear == year).OrderByDescending(x => x.id).ToList();
                        var uniqueGpNames = gp_count.GroupBy(c => c.Meterid).Select(g => g.Key).ToList();
                        foreach (var gpName in uniqueGpNames)
                        {
                            var matchedData = AJE.obj_vw_waterflow_meta_data.FirstOrDefault(x => x.Meterid == gpName);

                            if (matchedData != null)
                            {
                                ddetails_metadata.Add(matchedData);
                            }
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        ddetails = AJE.obj_vw_waterflow_meta.Where(x => x.State == State && x.District == Dist).OrderByDescending(x => x.id).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        gp_count = AJE.obj_vw_waterflow_meta_data.Where(x => x.State == State && x.fyyear == year && x.fymonth == month).OrderByDescending(x => x.id).ToList();
                        var uniqueGpNames = gp_count.GroupBy(c => c.Meterid).Select(g => g.Key).ToList();
                        foreach (var gpName in uniqueGpNames)
                        {
                            var matchedData = AJE.obj_vw_waterflow_meta_data.FirstOrDefault(x => x.Meterid == gpName);

                            if (matchedData != null)
                            {
                                ddetails_metadata.Add(matchedData);
                            }
                        }
                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
                    {
                        gp_count = AJE.obj_vw_waterflow_meta_data.Where(x => x.State == State && x.fyyear == year).OrderByDescending(x => x.id).ToList();
                        var uniqueGpNames = gp_count.GroupBy(c => c.Meterid).Select(g => g.Key).ToList();
                        foreach (var gpName in uniqueGpNames)
                        {
                            var matchedData = AJE.obj_vw_waterflow_meta_data.FirstOrDefault(x => x.Meterid == gpName);

                            if (matchedData != null)
                            {
                                ddetails_metadata.Add(matchedData);
                            }
                        }
                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        ddetails = AJE.obj_vw_waterflow_meta.Where(x => x.State == State).OrderByDescending(x => x.id).ToList();

                    }
                    if (ddetails.Count != 0)
                    {
                        ViewBag.Totalpages = Math.Ceiling(ddetails.Count() / 100.0);
                        Session["PageNumber"] = PageNumber;
                        ddetails = ddetails.Skip((PageNumber - 1) * 100).Take(100).OrderByDescending(x => x.id).ToList();

                        for (int i = 0; i < ddetails.Count; i++)
                        {
                            vw_waterflow_meta_new obj1 = new vw_waterflow_meta_new();
                            int Check_id = ddetails[i].id;
                            var details5 = AJE.obj_waterflow_data.Where(x => x.wf_meta_id == Check_id).OrderByDescending(x => x.status_data).ToList();
                            var status_data = "";
                            if (details5.Count != 0)
                            {
                                if (StateOfficer == "District Level Nodal Officer")
                                {
                                    for (int j = 0; j < details5.Count; j++)
                                    {
                                        status_data = details5[j].status_data;
                                        if (status_data == null || status_data == "")
                                        {
                                            status_data = "";
                                            break;
                                        }
                                    }
                                }
                                else if (StateOfficer == "State Level Nodal Officer")
                                {
                                    for (int j = 0; j < details5.Count; j++)
                                    {
                                        status_data = details5[j].status_data;
                                        if (status_data == null || status_data == "")
                                        {
                                            status_data = "";
                                           // break;
                                        }
                                        else if (status_data == "State")
                                        {
                                            status_data = "State";
                                            break;
                                        }
                                        else
                                        {
                                            status_data = "Approve";
                                            break;
                                        }
                                    }
                                }
                                else
                                {
                                    for (int j = 0; j < details5.Count; j++)
                                    {
                                        status_data = details5[j].status_data;
                                        if (status_data == null || status_data == "")
                                        {
                                            status_data = "";
                                            break;
                                        }
                                    }
                                }
                            }
                            else
                            {
                                status_data = "No Data";
                            }

                            var UnitReading = ddetails[i].UnitReading;
                            if (UnitReading == null)
                            {
                                UnitReading = "";

                            }
                            else
                            {
                                UnitReading = ddetails[i].UnitReading;
                            }

                            obj1.id = ddetails[i].id;
                            obj1.State = ddetails[i].State;
                            obj1.District = ddetails[i].District;
                            obj1.Block = ddetails[i].Block;
                            obj1.GramPanchayat = ddetails[i].GramPanchayat;
                            obj1.Village = ddetails[i].Village;
                            obj1.LocationDetails = ddetails[i].LocationDetails;
                            obj1.Latitude = ddetails[i].Latitude;
                            obj1.Longitude = ddetails[i].Longitude;
                            obj1.DateofEntry = ddetails[i].DateofEntry;
                            obj1.OwnerName = ddetails[i].OwnerName;
                            obj1.WellType = ddetails[i].WellType;
                            obj1.PumpType = ddetails[i].PumpType;
                            obj1.WaterFlowMeter_Installation_Date = ddetails[i].WaterFlowMeter_Installation_Date;
                            obj1.AreaIrrigated = ddetails[i].AreaIrrigated;
                            obj1.depthofwell = ddetails[i].depthofwell;
                            obj1.CropIrrigated = ddetails[i].CropIrrigated;
                            //obj1.UnitReading = ddetails[i].UnitReading;
                            obj1.UnitReading = UnitReading;
                            obj1.Meterid = ddetails[i].Meterid;
                            obj1.fyyear = ddetails[i].fyyear;
                            obj1.fymonth = ddetails[i].fymonth;
                            obj1.status = ddetails[i].status;
                            obj1.reject_remark = ddetails[i].reject_remark;
                            obj1.datetime = ddetails[i].datetime;
                            obj1.status_data = status_data;

                            ddetails_new.Add(obj1);

                        }
                        var jsonresult = Json(ddetails_new, JsonRequestBehavior.AllowGet);
                        jsonresult.MaxJsonLength = int.MaxValue;
                        return jsonresult;

                    }
                    if (ddetails_metadata.Count != 0)
                    {
                        ViewBag.Totalpages = Math.Ceiling(ddetails_metadata.Count() / 100.0);
                        Session["PageNumber"] = PageNumber;
                        ddetails_metadata = ddetails_metadata.Skip((PageNumber - 1) * 100).Take(100).OrderByDescending(x => x.id).ToList();

                        for (int i = 0; i < ddetails_metadata.Count; i++)
                        {
                            vw_waterflow_meta_new obj1 = new vw_waterflow_meta_new();
                            int Check_id = ddetails_metadata[i].id;
                            var details5 = AJE.obj_waterflow_data.Where(x => x.wf_meta_id == Check_id).OrderByDescending(x => x.status_data).ToList();
                            var status_data = "";
                            if (details5.Count != 0)
                            {
                                if (StateOfficer == "District Level Nodal Officer")
                                {
                                    for (int j = 0; j < details5.Count; j++)
                                    {
                                        status_data = details5[j].status_data;
                                        if (status_data == null || status_data == "")
                                        {
                                            status_data = "";
                                            break;
                                        }
                                    }
                                }
                                else if (StateOfficer == "State Level Nodal Officer")
                                {
                                    for (int j = 0; j < details5.Count; j++)
                                    {
                                        status_data = details5[j].status_data;
                                        if (status_data == null || status_data == "")
                                        {
                                            status_data = "";
                                            //break;
                                        }
                                        else if (status_data == "State")
                                        {
                                            status_data = "State";
                                            break;
                                        }
                                        else
                                        {
                                            status_data = "Approve";
                                            break;
                                        }
                                    }
                                }
                                else
                                {
                                    for (int j = 0; j < details5.Count; j++)
                                    {
                                        status_data = details5[j].status_data;
                                        if (status_data == null || status_data == "")
                                        {
                                            status_data = "";
                                            break;
                                        }
                                    }
                                }
                            }
                            else
                            {
                                status_data = "No Data";
                            }

                            var UnitReading = ddetails_metadata[i].UnitReading;
                            if (UnitReading == null)
                            {
                                UnitReading = "";

                            }
                            else
                            {
                                UnitReading = ddetails_metadata[i].UnitReading;
                            }

                            obj1.id = ddetails_metadata[i].id;
                            obj1.State = ddetails_metadata[i].State;
                            obj1.District = ddetails_metadata[i].District;
                            obj1.Block = ddetails_metadata[i].Block;
                            obj1.GramPanchayat = ddetails_metadata[i].GramPanchayat;
                            obj1.Village = ddetails_metadata[i].Village;
                            obj1.LocationDetails = ddetails_metadata[i].LocationDetails;
                            obj1.Latitude = ddetails_metadata[i].Latitude;
                            obj1.Longitude = ddetails_metadata[i].Longitude;
                            obj1.DateofEntry = ddetails_metadata[i].DateofEntry;
                            obj1.OwnerName = ddetails_metadata[i].OwnerName;
                            obj1.WellType = ddetails_metadata[i].WellType;
                            obj1.PumpType = ddetails_metadata[i].PumpType;
                            obj1.WaterFlowMeter_Installation_Date = ddetails_metadata[i].WaterFlowMeter_Installation_Date;
                            obj1.AreaIrrigated = ddetails_metadata[i].AreaIrrigated;
                            obj1.depthofwell = ddetails_metadata[i].depthofwell;
                            obj1.CropIrrigated = ddetails_metadata[i].CropIrrigated;
                            //obj1.UnitReading = ddetails[i].UnitReading;
                            obj1.UnitReading = UnitReading;
                            obj1.Meterid = ddetails_metadata[i].Meterid;
                            obj1.fyyear = ddetails_metadata[i].fyyear;
                            obj1.fymonth = ddetails_metadata[i].fymonth;
                            obj1.status = ddetails_metadata[i].status;
                            obj1.reject_remark = ddetails_metadata[i].reject_remark;
                            obj1.datetime = ddetails_metadata[i].datetime;
                            obj1.status_data = status_data;

                            ddetails_new.Add(obj1);

                        }
                        var jsonresult = Json(ddetails_new, JsonRequestBehavior.AllowGet);
                        jsonresult.MaxJsonLength = int.MaxValue;
                        return jsonresult;

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
        public ActionResult water_flow_pdf()
        {

            if (Session["UserId"] != null)
            {
                try
                {

                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = "";
                    var Dist = "";
                    var Block = "";
                    var Gram = "";
                    var year = "";
                    var month = "";
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
                    if (Session["year"] != null)
                    {
                        year = Session["year"].ToString();
                    }
                    if (Session["month"] != null)
                    {
                        month = Session["month"].ToString();
                    }


                    List<vw_waterflow_meta> ddetails = new List<vw_waterflow_meta>();

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        ddetails = AJE.obj_vw_waterflow_meta.Where(x => x.State == State && x.District == Dist && x.Block == Block && x.GramPanchayat == Gram && x.fyyear == year && x.fymonth == month).OrderByDescending(x=>x.id).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = AJE.obj_vw_waterflow_meta.Where(x => x.State == State && x.District == Dist && x.Block == Block && x.GramPanchayat == Gram && x.fyyear == year).OrderByDescending(x => x.id).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        ddetails = AJE.obj_vw_waterflow_meta.Where(x => x.State == State && x.District == Dist && x.Block == Block && x.GramPanchayat == Gram).OrderByDescending(x => x.id).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        ddetails = AJE.obj_vw_waterflow_meta.Where(x => x.State == State && x.District == Dist && x.Block == Block && x.fyyear == year && x.fymonth == month).OrderByDescending(x => x.id).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = AJE.obj_vw_waterflow_meta.Where(x => x.State == State && x.District == Dist && x.Block == Block && x.fyyear == year).OrderByDescending(x => x.id).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        ddetails = AJE.obj_vw_waterflow_meta.Where(x => x.State == State && x.District == Dist && x.Block == Block).OrderByDescending(x => x.id).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        ddetails = AJE.obj_vw_waterflow_meta.Where(x => x.State == State && x.District == Dist && x.fyyear == year && x.fymonth == month).OrderByDescending(x => x.id).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = AJE.obj_vw_waterflow_meta.Where(x => x.State == State && x.District == Dist && x.fyyear == year).OrderByDescending(x => x.id).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        ddetails = AJE.obj_vw_waterflow_meta.Where(x => x.State == State && x.District == Dist).OrderByDescending(x => x.id).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        ddetails = AJE.obj_vw_waterflow_meta.Where(x => x.State == State && x.fyyear == year && x.fymonth == month).OrderByDescending(x => x.id).ToList();

                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = AJE.obj_vw_waterflow_meta.Where(x => x.State == State && x.fyyear == year).OrderByDescending(x => x.id).ToList();

                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        ddetails = AJE.obj_vw_waterflow_meta.Where(x => x.State == State).OrderByDescending(x => x.id).ToList();

                    }
                    if (ddetails.Count != 0)
                    {

                        var jsonresult = Json(ddetails, JsonRequestBehavior.AllowGet);
                        jsonresult.MaxJsonLength = int.MaxValue;
                        return jsonresult;
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

        class RootObject
        {
            public string[] id { get; set; }
        }
        //Deleted code start
        [HttpPost]
        public ActionResult Delete_social(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    if (Data != null)
                    {
                        var jsonObject = JsonConvert.DeserializeObject<RootObject>(Data);
                        foreach (var id in jsonObject.id)
                        {
                            var TKID = Convert.ToInt32(id);
                            var Data1 = AJE.obj_socialmonitoring.Where(x => x.id == TKID).SingleOrDefault();
                            AJE.Entry(Data1).State = EntityState.Deleted;
                            AJE.SaveChanges();
                        }
                        return Json("Deleted Successfully");
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
        public ActionResult Delete_well(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    if (Data != null)
                    {
                        var jsonObject = JsonConvert.DeserializeObject<RootObject>(Data);
                        foreach (var id in jsonObject.id)
                        {
                            var TKID = Convert.ToInt32(id);
                            var Data1 = AJE.obj_wellinventory.Where(x => x.gid == TKID).SingleOrDefault();
                            AJE.Entry(Data1).State = EntityState.Deleted;
                            AJE.SaveChanges();
                        }
                        return Json("Deleted Successfully");
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
        public ActionResult Delete_geo(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    if (Data != null)
                    {
                        var jsonObject = JsonConvert.DeserializeObject<RootObject>(Data);
                        foreach (var id in jsonObject.id)
                        {
                            var TKID = Convert.ToInt32(id);
                            var Data1 = AJE.obj_geo_new.Where(x => x.id == TKID).SingleOrDefault();
                            AJE.Entry(Data1).State = EntityState.Deleted;
                            AJE.SaveChanges();
                        }
                        return Json("Deleted Successfully");
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
        public ActionResult Delete_waterflow(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    if (Data != null)
                    {
                        var jsonObject = JsonConvert.DeserializeObject<RootObject>(Data);
                        foreach (var id in jsonObject.id)
                        {
                            var TKID = Convert.ToInt32(id);
                            var Data1 = AJE.obj_WaterFlow.Where(x => x.id == TKID).SingleOrDefault();
                            AJE.Entry(Data1).State = EntityState.Deleted;
                            AJE.SaveChanges();
                        }
                        return Json("Deleted Successfully");
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
        public ActionResult approve_waterflow(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    if (Data != null)
                    {
                        var jsonObject = JsonConvert.DeserializeObject<RootObject>(Data);
                        foreach (var id in jsonObject.id)
                        {
                            var TKID = Convert.ToInt32(id);
                            var Data1 = AJE.obj_WaterFlow.Where(x => x.id == TKID).SingleOrDefault();
                            Data1.approve = "Approve";
                            AJE.Entry(Data1).State = System.Data.Entity.EntityState.Modified;
                            AJE.SaveChanges();
                        }
                        return Json("Approved Successfully");
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
        public ActionResult Delete_gwl(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<gwl_meta>(Data);

                    if (result.id != 0)
                    {

                        if (Data != null)
                        {


                            var TKID = Convert.ToInt32(result.id);
                            var Data1 = AJE.obj_gwl_data.Where(x => x.gwl_meta_id == TKID).ToList();
                            for (int i = 0; i < Data1.Count; i++)
                            {
                                var delete = Data1[i].id;
                                var dd = Convert.ToInt32(delete);
                                var Delete_data = AJE.obj_gwl_data.Where(x => x.id == dd).SingleOrDefault();

                                gwl_data_delete obj = new gwl_data_delete();
                                obj.tableid = Delete_data.id;
                                obj.gwl_meta_id = Delete_data.gwl_meta_id;
                                obj.gwl_reading = Delete_data.gwl_reading;
                                obj.gwl_date = Delete_data.gwl_date;
                                obj.gwl_email = Delete_data.gwl_email;
                                obj.status_data = Delete_data.status_data;
                                obj.reject_remark = Delete_data.reject_remark;
                                obj.date_time = Delete_data.date_time;
                                obj.deleted_email = Session["Email"].ToString();
                                obj.deleted_time = DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss");
                                AJE.obj_gwl_data_delete.Add(obj);
                                AJE.SaveChanges();

                                AJE.Entry(Delete_data).State = EntityState.Deleted;
                                AJE.SaveChanges();
                            }

                            var Data2 = AJE.obj_gwl_meta.Where(x => x.id == TKID).SingleOrDefault();
                            gwl_meta_delete obj1 = new gwl_meta_delete();
                            obj1.table_id = Data2.id;
                            obj1.sr_no = Data2.sr_no;
                            obj1.state = Data2.state;
                            obj1.district = Data2.district;
                            obj1.block = Data2.block;
                            obj1.grampanchayat = Data2.grampanchayat;
                            obj1.sitename = Data2.sitename;
                            obj1.typeofwell = Data2.typeofwell;
                            obj1.source_Ownership = Data2.source_Ownership;
                            obj1.latitude = Data2.latitude;
                            obj1.longitude = Data2.longitude;
                            obj1.wellid = Data2.wellid;
                            obj1.welldepth = Data2.welldepth;
                            obj1.well = Data2.well;
                            obj1.datetime = Data2.datetime;
                            obj1.email = Data2.email;
                            obj1.image = Data2.image;
                            obj1.isarchive = Data2.isarchive;
                            obj1.locationdetails = Data2.locationdetails;
                            obj1.other_well_type = Data2.other_well_type;
                            obj1.Diameter_of_Well = Data2.Diameter_of_Well;
                            obj1.Height_of_Measuring_Point = Data2.Height_of_Measuring_Point;
                            obj1.source_Ownership_type = Data2.source_Ownership_type;
                            obj1.source_Ownership_type_other = Data2.source_Ownership_type_other;
                            obj1.status = Data2.status;
                            obj1.reject_remark = Data2.reject_remark;
                            obj1.deleted_email = Session["Email"].ToString();
                            obj1.deleted_time = DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss");
                            AJE.obj_gwl_meta_delete.Add(obj1);
                            AJE.SaveChanges();

                            AJE.Entry(Data2).State = EntityState.Deleted;
                            AJE.SaveChanges();
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
        public ActionResult submit_spmu_gwl(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<gwl_meta>(Data);

                    if (result.id != 0)
                    {
                        if (Data != null)
                        {
                            var TKID = Convert.ToInt32(result.id);
                            var Data1 = AJE.obj_gwl_meta.Where(x => x.id == TKID).SingleOrDefault();
                            Data1.status = "State";
                            Data1.reject_remark = "";
                            AJE.Entry(Data1).State = System.Data.Entity.EntityState.Modified;
                            AJE.SaveChanges();
                            return Json("Successfully Submitted");
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
        public ActionResult approve_gwl(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<gwl_meta>(Data);

                    if (result.id != 0)
                    {
                        if (Data != null)
                        {
                            var TKID = Convert.ToInt32(result.id);
                            var Data1 = AJE.obj_gwl_meta.Where(x => x.id == TKID).SingleOrDefault();
                            Data1.status = "Approve";
                            Data1.reject_remark = "";
                            AJE.Entry(Data1).State = System.Data.Entity.EntityState.Modified;
                            AJE.SaveChanges();
                            return Json("Approved Successfully");
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
        public ActionResult reject_spmu_gwl(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<gwl_meta>(Data);

                    if (result.id != 0)
                    {
                        if (Data != null)
                        {
                            var TKID = Convert.ToInt32(result.id);
                            var Data1 = AJE.obj_gwl_meta.Where(x => x.id == TKID).SingleOrDefault();
                            Data1.status = "Reject";
                            Data1.reject_remark = result.reject_remark;
                            AJE.Entry(Data1).State = System.Data.Entity.EntityState.Modified;
                            AJE.SaveChanges();
                            return Json("Rejected Successfully");
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
        public ActionResult Update_gwl(string id, string sitename, string locationdetails, string latitude, string longitude, string Diameter_of_Well, string welldepth, string Height_of_Measuring_Point, string typeofwell, string other_well_type, string source_Ownership, string source_Ownership_type, string source_Ownership_type_other)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = AJE.obj_gwl_meta.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        Data.id = ID;
                        string asaad = sitename;
                        string specialChar = @"@\|!#$%&()=?»«@£§€{}.-;'<>,";
                        //foreach (var item in asaad)
                        //{
                        //    if (specialChar.Contains(item))
                        //    {
                        //        return Json("Villiage Name Not Correct");

                        //    }
                        //}
                        string location = locationdetails;
                        string specialCharlocation = @"@\|!#$%&?»«@£§€{}.;<>";
                        foreach (var item in location)
                        {
                            if (specialCharlocation.Contains(item))
                            {
                                return Json("Location Details is Not Correct");

                            }
                        }
                        Data.sitename = sitename;
                        Data.locationdetails = locationdetails;
                        Data.latitude = latitude;
                        Data.longitude = longitude;

                        Data.typeofwell = typeofwell;
                       
                        if (typeofwell == "Others")
                        {
                            Data.other_well_type = other_well_type;
                        }
                        else
                        {
                            Data.other_well_type = "";
                        }
                        Data.source_Ownership = source_Ownership;
                        if (source_Ownership == "Private")
                        {
                            Data.source_Ownership_type = "";
                            Data.source_Ownership_type_other = "";
                        }
                        else
                        {
                            Data.source_Ownership_type = source_Ownership_type;
                            if (source_Ownership_type == "Others")
                            {
                                Data.source_Ownership_type_other = source_Ownership_type_other;
                            }
                            else
                            {
                                Data.source_Ownership_type_other = "";
                            }
                        }


                        var dofwell = Diameter_of_Well;
                        var asas = "0.51";
                        var dsd = "15.1";
                        decimal aa = Convert.ToDecimal(dofwell);
                        decimal bb = Convert.ToDecimal(asas);
                        decimal cc = Convert.ToDecimal(dsd);
                        var welldiameters = Convert.ToDouble(Diameter_of_Well);
                        if (typeofwell == "Tube Well" || typeofwell == "Bore Well" || typeofwell == "Piezometer")
                        {
                            if (welldiameters < 0.51)
                            {

                                Data.Diameter_of_Well = Diameter_of_Well;
                            }
                            else
                            {
                                return Json("Diameter of Well must be less than 0.5");

                            }


                        }
                        else if (typeofwell == "Dug Well" || typeofwell == "Dug-Cum-Bore Well" || typeofwell == "Others")
                        {
                            if (welldiameters < 15.1)
                            {
                                Data.Diameter_of_Well = Diameter_of_Well;
                            }
                            else
                            {
                                return Json("Diameter of Well must be less than 15.0 ");

                            }
                        }

                        string sc = welldepth;
                        if (sc != null && sc != "")
                        {
                            if (!sc.Contains('.'))
                            {
                                // If decimal is not present, append ".0"
                                sc += ".00";
                                welldepth += ".00";
                            }
                            string checksc = @"^\d{1,3}(\.\d{1,2})?$";
                            bool scValid = Regex.IsMatch(sc, checksc);
                            if (scValid)
                            {
                                Data.welldepth = welldepth;
                            }
                            else
                            {
                                return Json("Well Depth is Not Correct");
                            }
                        }
                        else
                        {
                            Data.welldepth = welldepth;
                        }
                        var hight = "6";
                        decimal asfg = Convert.ToDecimal(Height_of_Measuring_Point);
                        decimal hightge = Convert.ToDecimal(hight);
                        if (asfg < hightge)
                        {
                            Data.Height_of_Measuring_Point = Height_of_Measuring_Point;
                        }
                        else
                        {
                            return Json("Height of Measuring Point must be less than 5");
                        }
                        AJE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = AJE.SaveChanges();
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
                    abhy_tbl_error error_data = new abhy_tbl_error();
                    error_data.error_test = ex.Message;
                    error_data.user_email = ex.StackTrace;
                    error_data.user_type = "gwl";
                    error_data.error_count = "1";
                    error_data.date_time = DateTime.Now.ToString();
                    ABE.obj_abhy_tbl_error.Add(error_data);
                    ABE.SaveChanges();
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
        public ActionResult Existingwell_data(string id)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();

                    var idd = Convert.ToInt32(id);

                    var Final_data = AJE.obj_gwl_data.Where(x => x.gwl_meta_id == idd).OrderByDescending(x => x.id).ToList();


                    if (Final_data.Count != 0)
                    {
                        var jsonresult = Json(Final_data, JsonRequestBehavior.AllowGet);
                        jsonresult.MaxJsonLength = int.MaxValue;
                        return jsonresult;
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
        public ActionResult Update_gwl_data(string id, string gwl_reading)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = AJE.obj_gwl_data.Where(x => x.id == ID).SingleOrDefault();
                    int meta_id = Data.gwl_meta_id;
                    var Data_meta = AJE.obj_gwl_meta.Where(x => x.id == meta_id).SingleOrDefault();
                    if (Data != null)
                    {
                        decimal welldepth = Convert.ToDecimal(Data_meta.welldepth);
                        var dry = gwl_reading;

                        Data.gwl_reading = gwl_reading;

                        if (dry == "Dry" || dry == "0")
                        {
                            if (dry == "0")
                            {
                                Data.gwl_reading = "Dry";
                            }
                            else
                            {
                                Data.gwl_reading = gwl_reading;
                            }

                        }
                        else
                        {
                            string sc = gwl_reading;
                            if (!sc.Contains('.'))
                            {
                                // If decimal is not present, append ".0"
                                sc += ".00";
                                gwl_reading += ".00";
                            }
                            decimal readiii = Convert.ToDecimal(dry);
                            string checksc = @"^\d{1,3}(\.\d{1,2})?$";
                            bool scValid = Regex.IsMatch(sc, checksc);
                            if (scValid)
                            {
                                if (readiii < welldepth)
                                {
                                    Data.gwl_reading = gwl_reading;
                                }
                                else
                                {
                                    return Json("Ground Water Level Reading is less than well Depth");

                                }
                            }
                            else
                            {
                                return Json("Ground Water Level Reading is not correct");

                            }
                        }

                        AJE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = AJE.SaveChanges();
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
        public ActionResult Delete_gwl_data(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<gwl_data>(Data);

                    if (result.id != 0)
                    {
                        if (Data != null)
                        {
                            var TKID = Convert.ToInt32(result.id);
                            var Data2 = AJE.obj_gwl_data.Where(x => x.id == TKID).SingleOrDefault();

                            gwl_data_delete obj = new gwl_data_delete();
                            obj.tableid = Data2.id;
                            obj.gwl_meta_id = Data2.gwl_meta_id;
                            obj.gwl_reading = Data2.gwl_reading;
                            obj.gwl_date = Data2.gwl_date;
                            obj.gwl_email = Data2.gwl_email;
                            obj.status_data = Data2.status_data;
                            obj.reject_remark = Data2.reject_remark;
                            obj.date_time = Data2.date_time;
                            obj.deleted_email = Session["Email"].ToString();
                            obj.deleted_time = DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss");
                            AJE.obj_gwl_data_delete.Add(obj);
                            AJE.SaveChanges();

                            AJE.Entry(Data2).State = EntityState.Deleted;
                            AJE.SaveChanges();
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
        public ActionResult submit_spmu_gwl_data(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<gwl_data>(Data);

                    if (result.id != 0)
                    {
                        if (Data != null)
                        {
                            var TKID = Convert.ToInt32(result.id);
                            var Data1 = AJE.obj_gwl_data.Where(x => x.id == TKID).SingleOrDefault();
                            Data1.status_data = "State";
                            Data1.reject_remark = "";
                            AJE.Entry(Data1).State = System.Data.Entity.EntityState.Modified;
                            AJE.SaveChanges();
                            return Json("Successfully Submitted");
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
        public ActionResult approve_gwl_data(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<gwl_data>(Data);

                    if (result.id != 0)
                    {
                        if (Data != null)
                        {
                            var TKID = Convert.ToInt32(result.id);
                            var Data1 = AJE.obj_gwl_data.Where(x => x.id == TKID).SingleOrDefault();
                            Data1.status_data = "Approve";
                            Data1.reject_remark = "";
                            AJE.Entry(Data1).State = System.Data.Entity.EntityState.Modified;
                            AJE.SaveChanges();
                            return Json("Approved Successfully");
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
        public ActionResult reject_gwl_data(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<gwl_data>(Data);

                    if (result.id != 0)
                    {
                        if (Data != null)
                        {
                            var TKID = Convert.ToInt32(result.id);
                            var Data1 = AJE.obj_gwl_data.Where(x => x.id == TKID).SingleOrDefault();
                            Data1.status_data = "Reject";
                            Data1.reject_remark = result.reject_remark;
                            AJE.Entry(Data1).State = System.Data.Entity.EntityState.Modified;
                            AJE.SaveChanges();
                            return Json("Rejected Successfully");
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



        public ActionResult Mapview_MADB_quality(string id)
        {
            var ID = Convert.ToInt32(id);
            var Details = AJE.obj_water_wq_meta.Where(x => x.id == ID).FirstOrDefault();
            if (Details != null)
            {
                var latitude = Details.latitude;
                var longitude = Details.longitude;
                ViewBag.latitude = latitude;
                ViewBag.longitude = longitude;
                return View();
            }
            else
            {
                ViewBag.latitude = "0";
                ViewBag.longitude = "0";
                return View();
            }
        }

        [HttpPost]
        public ActionResult total_gp_quality(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<Pagenum>(Data);


                    var State = result.statename;
                    var Dist = result.districtname;
                    var Block = result.blockname;
                    var Gram = result.gpname;
                    var year = result.year;
                    var month = result.month;
                    var PageNumber = result.PageNumber;

                    List<vw_water> Final_data = new List<vw_water>();

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        var data1 = AJE.obj_vw_water.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.fyyear == year && x.fymonth == month).ToList();
                        var data = data1.GroupBy(c => c.gp).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_water.Where(n => n.gp == daada).OrderByDescending(x => x.entry_time).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
                    {
                        var data1 = AJE.obj_vw_water.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.fyyear == year).ToList();
                        var data = data1.GroupBy(c => c.gp).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_water.Where(n => n.gp == daada).OrderByDescending(x => x.entry_time).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        var data1 = AJE.obj_vw_water.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram).ToList();
                        var data = data1.GroupBy(c => c.gp).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_water.Where(n => n.gp == daada).OrderByDescending(x => x.entry_time).FirstOrDefault();
                            Final_data.Add(exist2);
                        }

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        var data1 = AJE.obj_vw_water.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year && x.fymonth == month).ToList();
                        var data = data1.GroupBy(c => c.gp).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_water.Where(n => n.gp == daada).OrderByDescending(x => x.entry_time).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
                    {
                        var data1 = AJE.obj_vw_water.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year).ToList();
                        var data = data1.GroupBy(c => c.gp).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_water.Where(n => n.gp == daada).OrderByDescending(x => x.entry_time).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        var data1 = AJE.obj_vw_water.Where(x => x.state == State && x.district == Dist && x.block == Block).ToList();
                        var data = data1.GroupBy(c => c.gp).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_water.Where(n => n.gp == daada).OrderByDescending(x => x.entry_time).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        var data1 = AJE.obj_vw_water.Where(x => x.state == State && x.district == Dist && x.fyyear == year && x.fymonth == month).ToList();
                        var data = data1.GroupBy(c => c.gp).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_water.Where(n => n.gp == daada).OrderByDescending(x => x.entry_time).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
                    {
                        var data1 = AJE.obj_vw_water.Where(x => x.state == State && x.district == Dist && x.fyyear == year).ToList();
                        var data = data1.GroupBy(c => c.gp).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_water.Where(n => n.gp == daada).OrderByDescending(x => x.entry_time).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        var data1 = AJE.obj_vw_water.Where(x => x.state == State && x.district == Dist).ToList();
                        var data = data1.GroupBy(c => c.gp).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_water.Where(n => n.gp == daada).OrderByDescending(x => x.entry_time).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        var data1 = AJE.obj_vw_water.Where(x => x.state == State && x.fyyear == year && x.fymonth == month).ToList();
                        var data = data1.GroupBy(c => c.gp).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_water.Where(n => n.gp == daada).OrderByDescending(x => x.entry_time).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
                    {
                        var data1 = AJE.obj_vw_water.Where(x => x.state == State && x.fyyear == year).ToList();
                        var data = data1.GroupBy(c => c.gp).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_water.Where(n => n.gp == daada).OrderByDescending(x => x.entry_time).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        var data1 = AJE.obj_vw_water.Where(x => x.state == State).ToList();
                        var data = data1.GroupBy(c => c.gp).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_water.Where(n => n.gp == daada).OrderByDescending(x => x.entry_time).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }

                    var exetotal = Final_data.Count;
                    var jsonresult = Json(exetotal, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
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
        public ActionResult Delete_quality(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<water_wq_meta>(Data);

                    if (result.id != 0)
                    {
                        if (Data != null)
                        {
                            var TKID = Convert.ToInt32(result.id);
                            var Data1 = AJE.obj_water_wq_data.Where(x => x.water_qi_meta_id == TKID).ToList();
                            for (int i = 0; i < Data1.Count; i++)
                            {
                                var delete = Data1[i].data_id;
                                var dd = Convert.ToInt32(delete);
                                var Delete_data = AJE.obj_water_wq_data.Where(x => x.data_id == dd).SingleOrDefault();
                                water_wq_data_delete obj = new water_wq_data_delete();
                                obj.ph = Delete_data.ph;
                                obj.chloride = Delete_data.chloride;
                                obj.free_chlorine = Delete_data.free_chlorine;
                                obj.turbudity = Delete_data.turbudity;
                                obj.total_hardness_mgl = Delete_data.total_hardness_mgl;
                                obj.alkalinity_mgl = Delete_data.alkalinity_mgl;
                                obj.nitrate_mgl = Delete_data.nitrate_mgl;
                                obj.fluoride_mgl = Delete_data.fluoride_mgl;
                                obj.iron_mgl = Delete_data.iron_mgl;
                                obj.arsenic_mgl = Delete_data.arsenic_mgl;
                                obj.ec_us_cm = Delete_data.ec_us_cm;
                                obj.tds = Delete_data.tds;
                                obj.bacterial_test = Delete_data.bacterial_test;
                                obj.email = Delete_data.email;
                                obj.status_data = Delete_data.status_data;
                                obj.reject_remark = Delete_data.reject_remark;
                                obj.deleted_email = Session["Email"].ToString();
                                obj.deleted_time = DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss");
                                obj.tableid = Delete_data.data_id;
                                obj.entry_time_data = Delete_data.entry_time_data;
                                AJE.obj_water_wq_data_delete.Add(obj);
                                AJE.SaveChanges();
                                AJE.Entry(Delete_data).State = EntityState.Deleted;
                                AJE.SaveChanges();
                            }

                            var Data2 = AJE.obj_water_wq_meta.Where(x => x.id == TKID).SingleOrDefault();
                            water_wq_meta_delete obj1 = new water_wq_meta_delete();
                            obj1.sr_no = Data2.sr_no;
                            obj1.state = Data2.state;
                            obj1.district = Data2.district;
                            obj1.block = Data2.block;
                            obj1.gp = Data2.gp;
                            obj1.village = Data2.village;
                            obj1.location_details = Data2.location_details;
                            obj1.latitude = Data2.latitude;
                            obj1.longitude = Data2.longitude;
                            obj1.type_of_well = Data2.type_of_well;
                            obj1.others = Data2.others;
                            obj1.entry_time = Data2.entry_time;
                            obj1.well_depth_mbgl = Data2.well_depth_mbgl;
                            obj1.well_id = Data2.well_id;
                            obj1.status = Data2.status;
                            obj1.reject_remark = Data2.reject_remark;
                            obj1.isachive = Data2.isachive;
                            obj1.deleted_email = Session["Email"].ToString();
                            obj1.deleted_time = DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss");
                            obj1.tableid = Data2.id;
                            AJE.obj_water_wq_meta_delete.Add(obj1);
                            AJE.SaveChanges();

                            AJE.Entry(Data2).State = EntityState.Deleted;
                            AJE.SaveChanges();
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
        public ActionResult submit_spmu_quality(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<water_wq_meta>(Data);

                    if (result.id != 0)
                    {
                        if (Data != null)
                        {
                            var TKID = Convert.ToInt32(result.id);
                            var Data1 = AJE.obj_water_wq_meta.Where(x => x.id == TKID).SingleOrDefault();
                            Data1.status = "State";
                            Data1.reject_remark = "";
                            AJE.Entry(Data1).State = System.Data.Entity.EntityState.Modified;
                            AJE.SaveChanges();
                            return Json("Successfully Submitted");
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
        public ActionResult approve_quality(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<water_wq_meta>(Data);

                    if (result.id != 0)
                    {
                        if (Data != null)
                        {
                            var TKID = Convert.ToInt32(result.id);
                            var Data1 = AJE.obj_water_wq_meta.Where(x => x.id == TKID).SingleOrDefault();
                            Data1.status = "Approve";
                            Data1.reject_remark = "";
                            AJE.Entry(Data1).State = System.Data.Entity.EntityState.Modified;
                            AJE.SaveChanges();
                            return Json("Approved Successfully");
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
        public ActionResult reject_quality(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<water_wq_meta>(Data);

                    if (result.id != 0)
                    {
                        if (Data != null)
                        {
                            var TKID = Convert.ToInt32(result.id);
                            var Data1 = AJE.obj_water_wq_meta.Where(x => x.id == TKID).SingleOrDefault();
                            Data1.status = "Reject";
                            Data1.reject_remark = result.reject_remark;
                            AJE.Entry(Data1).State = System.Data.Entity.EntityState.Modified;
                            AJE.SaveChanges();
                            return Json("Rejected Successfully");
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
        public ActionResult Update_quality(string id, string latitude, string longitude, string well_depth_mbgl, string village, string location_details, string typeofwell, string other_well_type)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = AJE.obj_water_wq_meta.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        string asaad = village;
                        string specialChar = @"@\|!#$%&()=?»«@£§€{}.;'<>,";
                        //foreach (var item in asaad)
                        //{
                        //    if (specialChar.Contains(item))
                        //    {
                        //        return Json("Villiage Name is Not Correct");
                        //    }
                        //}
                        string location = location_details;
                        string specialCharlocation = @"@\|!#$%&?»«@£§€{}.;<>";
                        foreach (var item in location)
                        {
                            if (specialCharlocation.Contains(item))
                            {
                                return Json("Location Details is Not Correct");
                            }
                        }
                        Data.village = village;
                        Data.location_details = location_details;
                        Data.latitude = latitude;
                        Data.longitude = longitude;
                        Data.type_of_well = typeofwell;
                        if (typeofwell == "Others")
                        {
                            string other_well_typeb = other_well_type;
                            string other_well_typea = @"@\|!#$%&?»«@£§€{}.;<>";
                            foreach (var item in other_well_typeb)
                            {
                                if (other_well_typea.Contains(item))
                                {
                                    return Json("Other Source is Not Correct");
                                }
                            }
                            Data.others = other_well_type;
                        }
                        else
                        {
                            Data.others = "";
                        }
                        string sc = well_depth_mbgl;
                        if (!sc.Contains('.'))
                        {
                            // If decimal is not present, append ".0"
                            sc += ".00";
                            well_depth_mbgl += ".00";
                        }
                        string checksc = @"^\d{1,3}(\.\d{1,2})?$";
                        bool scValid = Regex.IsMatch(sc, checksc);
                        if (scValid)
                        {
                            Data.well_depth_mbgl = well_depth_mbgl;
                        }
                        else
                        {
                            return Json("Well Depth is Not Correct");

                        }
                        AJE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = AJE.SaveChanges();
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

        public ActionResult Mapview_MADB_social(string id)
        {
            var ID = Convert.ToInt32(id);
            var Details = AJE.obj_socialmonitoring.Where(x => x.id == ID).FirstOrDefault();
            if (Details != null)
            {
                var latitude = Details.latitude;
                var longitude = Details.longitude;
                ViewBag.latitude = latitude;
                ViewBag.longitude = longitude;
                return View();
            }
            else
            {
                ViewBag.latitude = "0";
                ViewBag.longitude = "0";
                return View();
            }
        }
        [HttpPost]
        public ActionResult total_gp_social(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<Pagenum>(Data);


                    var State = result.statename;
                    var Dist = result.districtname;
                    var Block = result.blockname;
                    var Gram = result.gpname;
                    var year = result.year;
                    var month = result.month;

                    List<vw_socialmonitoring> Final_data = new List<vw_socialmonitoring>();

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        var data1 = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram && x.fyyear == year && x.fymonth == month).ToList();
                        var data = data1.GroupBy(c => c.grampanchayat).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_socialmonitoring.Where(n => n.grampanchayat == daada).OrderByDescending(x => x.date).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
                    {
                        var data1 = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram && x.fyyear == year).ToList();
                        var data = data1.GroupBy(c => c.grampanchayat).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_socialmonitoring.Where(n => n.grampanchayat == daada).OrderByDescending(x => x.date).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        var data1 = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram).ToList();
                        var data = data1.GroupBy(c => c.grampanchayat).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_socialmonitoring.Where(n => n.grampanchayat == daada).OrderByDescending(x => x.date).FirstOrDefault();
                            Final_data.Add(exist2);
                        }

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        var data1 = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year && x.fymonth == month).ToList();
                        var data = data1.GroupBy(c => c.grampanchayat).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_socialmonitoring.Where(n => n.grampanchayat == daada).OrderByDescending(x => x.date).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
                    {
                        var data1 = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year).ToList();
                        var data = data1.GroupBy(c => c.grampanchayat).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_socialmonitoring.Where(n => n.grampanchayat == daada).OrderByDescending(x => x.date).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        var data1 = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block).ToList();
                        var data = data1.GroupBy(c => c.grampanchayat).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_socialmonitoring.Where(n => n.grampanchayat == daada).OrderByDescending(x => x.date).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        var data1 = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.fyyear == year && x.fymonth == month).ToList();
                        var data = data1.GroupBy(c => c.grampanchayat).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_socialmonitoring.Where(n => n.grampanchayat == daada).OrderByDescending(x => x.date).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
                    {
                        var data1 = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.fyyear == year).ToList();
                        var data = data1.GroupBy(c => c.grampanchayat).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_socialmonitoring.Where(n => n.grampanchayat == daada).OrderByDescending(x => x.date).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        var data1 = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Dist).ToList();
                        var data = data1.GroupBy(c => c.grampanchayat).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_socialmonitoring.Where(n => n.grampanchayat == daada).OrderByDescending(x => x.date).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        var data1 = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.fyyear == year && x.fymonth == month).ToList();
                        var data = data1.GroupBy(c => c.grampanchayat).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_socialmonitoring.Where(n => n.grampanchayat == daada).OrderByDescending(x => x.date).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
                    {
                        var data1 = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.fyyear == year).ToList();
                        var data = data1.GroupBy(c => c.grampanchayat).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_socialmonitoring.Where(n => n.grampanchayat == daada).OrderByDescending(x => x.date).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        var data1 = AJE.obj_vw_socialmonitoring.Where(x => x.state == State).ToList();
                        var data = data1.GroupBy(c => c.grampanchayat).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_socialmonitoring.Where(n => n.grampanchayat == daada).OrderByDescending(x => x.date).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }

                    var exetotal = Final_data.Count;
                    var jsonresult = Json(exetotal, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
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
        public ActionResult Delete_socialdata(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<socialmonitoring>(Data);

                    if (result.id != 0)
                    {

                        var TKID = Convert.ToInt32(result.id);
                        var Data2 = AJE.obj_socialmonitoring.Where(x => x.id == TKID).SingleOrDefault();
                        socialmonitoring_delete obj = new socialmonitoring_delete();
                        obj.state = Data2.state;
                        obj.district = Data2.district;
                        obj.block = Data2.block;
                        obj.grampanchayat = Data2.grampanchayat;
                        obj.location = Data2.location;
                        obj.date = Data2.date;
                        obj.numberofattendees = Data2.numberofattendees;
                        obj.male = Data2.male;
                        obj.female = Data2.female;
                        obj.minutesofmeeting = Data2.minutesofmeeting;
                        obj.image = Data2.image;
                        obj.latitude = Data2.latitude;
                        obj.longitude = Data2.longitude;
                        obj.event1 = Data2.event1;
                        obj.others = Data2.others;
                        obj.email = Data2.email;
                        obj.mom_filename = Data2.mom_filename;
                        obj.photogragh_filename = Data2.photogragh_filename;
                        obj.status = Data2.status;
                        obj.datetime = Data2.datetime;
                        obj.otherevent = Data2.otherevent;
                        obj.officer_name = Data2.officer_name;
                        obj.village = Data2.village;
                        obj.approve = Data2.approve;
                        obj.reject_remark = Data2.reject_remark;
                        obj.deleted_email = Session["Email"].ToString();
                        obj.deleted_time = DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss");
                        obj.tableid = Data2.id;
                        AJE.obj_socialmonitoring_delete.Add(obj);
                        AJE.SaveChanges();

                        AJE.Entry(Data2).State = EntityState.Deleted;
                        AJE.SaveChanges();
                        return Json("Deleted Successfully");

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
        public ActionResult submit_spmu_social(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<socialmonitoring>(Data);

                    if (result.id != 0)
                    {
                        if (Data != null)
                        {
                            var TKID = Convert.ToInt32(result.id);
                            var Data1 = AJE.obj_socialmonitoring.Where(x => x.id == TKID).SingleOrDefault();
                            Data1.approve = "State";
                            Data1.reject_remark = "";
                            AJE.Entry(Data1).State = System.Data.Entity.EntityState.Modified;
                            AJE.SaveChanges();
                            return Json("Successfully Submitted");
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
        public ActionResult approve_social(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<socialmonitoring>(Data);

                    if (result.id != 0)
                    {
                        if (Data != null)
                        {
                            var TKID = Convert.ToInt32(result.id);
                            var Data1 = AJE.obj_socialmonitoring.Where(x => x.id == TKID).SingleOrDefault();
                            Data1.approve = "Approve";
                            Data1.reject_remark = "";
                            AJE.Entry(Data1).State = System.Data.Entity.EntityState.Modified;
                            AJE.SaveChanges();
                            return Json("Approved Successfully");
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
        public ActionResult reject_social(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<socialmonitoring>(Data);

                    if (result.id != 0)
                    {
                        if (Data != null)
                        {
                            var TKID = Convert.ToInt32(result.id);
                            var Data1 = AJE.obj_socialmonitoring.Where(x => x.id == TKID).SingleOrDefault();
                            Data1.approve = "Reject";
                            Data1.reject_remark = result.reject_remark;
                            AJE.Entry(Data1).State = System.Data.Entity.EntityState.Modified;
                            AJE.SaveChanges();
                            return Json("Rejected Successfully");
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
        public ActionResult Update_social(string id, string latitude, string longitude, string village, string location, string type_of_well, string others, string male, string female, string tothers, string numberofattendees, HttpPostedFileBase mom_filePath, string mom_file, HttpPostedFileBase photogragh_filePath, string photogragh_file)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = AJE.obj_socialmonitoring.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        Data.id = ID;
                        Data.latitude = latitude;
                        Data.longitude = longitude;
                        //string asaad = village;
                        string asaad = others;
                        string specialChar = @"@\|!#$%&()=?»«@£§€{}.;'<>,";
                        foreach (var item in asaad)
                        {
                            if (specialChar.Contains(item))
                            {
                                return Json("Other Name of Event is Not Correct");
                            }
                        }
                        string locationd = location;
                        string specialCharlocation = @"@\|!#$%&?»«@£§€{}.;<>";
                        foreach (var item in locationd)
                        {
                            if (specialCharlocation.Contains(item))
                            {
                                return Json("Location Details Not Correct");
                            }
                        }
                        Data.village = village;
                        Data.location = location;
                        Data.event1 = type_of_well;
                        if (type_of_well == "Others")
                        {
                            Data.otherevent = others;
                        }
                        else
                        {
                            Data.otherevent = "";
                        }
                       
                        Data.male = male;
                        Data.female = female;
                        Data.others = tothers;
                        Data.numberofattendees = numberofattendees;

                        string File_path = "";

                        if (mom_filePath != null)
                        {
                            if (mom_filePath.FileName != null)
                            {
                                var old_mom = Data.minutesofmeeting;
                                var tbl_file = AJE.obj_mobile_files.Where(x => x.Filename == old_mom).SingleOrDefault();

                                //string BasePath = @"D:\\ataljal-mobileapi.mowr.gov.in\\";
                                string path = @"F:\mobileapi\attachments\socialevent\";

                                if (!Directory.Exists(path))
                                {
                                    Directory.CreateDirectory(path);
                                }
                                string sNewFileName_new = DateTime.Now.ToString("ddMMyyyy_HHmmssff");
                                String FileExt = Path.GetExtension(mom_filePath.FileName).ToLower();
                                var filess = "ataljal_gt_" + sNewFileName_new + DateTime.Now.ToString("dd-MM-yyyy HHmmssff") + DateTime.Now.Ticks + FileExt;
                                path = path + filess;
                                mom_filePath.SaveAs(path);
                                File_path = mom_filePath.FileName;                                
                                Data.minutesofmeeting = filess;
                             

                                //Data.mom_filename = File_path;
                                //Data.mom_filename = mom_filePath.FileName;
                                File_path = "";
                                if (tbl_file!=null) {
                                    tbl_file.Filename = filess;
                                    tbl_file.FileType = FileExt;
                                    tbl_file.Email= Session["Email"].ToString();
                                    tbl_file.EntryDate = DateTime.Now;
                                    AJE.Entry(tbl_file).State = System.Data.Entity.EntityState.Modified;
                                    AJE.SaveChanges();
                                }
                            }
                        }

                        if (photogragh_filePath != null)
                        {
                            if (photogragh_filePath.FileName != null)
                            {
                                var old_mom = Data.image;
                                var tbl_file = AJE.obj_mobile_files.Where(x => x.Filename == old_mom).SingleOrDefault();

                                //string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                               // string BasePath = @"D:\\ataljal-mobileapi.mowr.gov.in\\";

                                string path = @"F:\mobileapi\attachments\socialevent\";

                                if (!Directory.Exists(path))
                                {
                                    Directory.CreateDirectory(path);
                                }
                                string sNewFileName_new = DateTime.Now.ToString("ddMMyyyy_HHmmssff");
                                String FileExt = Path.GetExtension(photogragh_filePath.FileName).ToLower();
                                var filess = "ataljal_gt_" + sNewFileName_new + DateTime.Now.ToString("dd-MM-yyyy HHmmssff") + DateTime.Now.Ticks + FileExt;
                                path = path + filess;
                                photogragh_filePath.SaveAs(path);
                                File_path = photogragh_filePath.FileName;
                                Data.image = filess;

                                File_path = "";
                                if (tbl_file != null)
                                {
                                    tbl_file.Filename = filess;
                                    tbl_file.FileType = FileExt;
                                    tbl_file.Email = Session["Email"].ToString();
                                    tbl_file.EntryDate = DateTime.Now;
                                    AJE.Entry(tbl_file).State = System.Data.Entity.EntityState.Modified;
                                    AJE.SaveChanges();
                                }
                            }
                        }


                        AJE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = AJE.SaveChanges();
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


        public ActionResult Mapview_MADB_geo(string id)
        {
            var ID = Convert.ToInt32(id);
            var Details = AJE.obj_vw_geotagging.Where(x => x.id == ID).FirstOrDefault();
            if (Details != null)
            {
                var latitude = Details.latitude;
                var longitude = Details.longitude;
                ViewBag.latitude = latitude;
                ViewBag.longitude = longitude;
                return View();
            }
            else
            {
                ViewBag.latitude = "0";
                ViewBag.longitude = "0";
                return View();
            }
        }
        [HttpPost]
        public ActionResult total_gp_geo(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<Pagenum>(Data);


                    var State = result.statename;
                    var Dist = result.districtname;
                    var Block = result.blockname;
                    var Gram = result.gpname;
                    var year = result.year;
                    var month = result.month;

                    List<vw_geotagging> Final_data = new List<vw_geotagging>();

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        var data1 = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.gpname == Gram && x.fyyear == year && x.fymonth == month).ToList();
                        var data = data1.GroupBy(c => c.gpname).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_geotagging.Where(n => n.gpname == daada).OrderByDescending(x => x.date).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
                    {
                        var data1 = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.gpname == Gram && x.fyyear == year).ToList();
                        var data = data1.GroupBy(c => c.gpname).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_geotagging.Where(n => n.gpname == daada).OrderByDescending(x => x.date).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        var data1 = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.gpname == Gram).ToList();
                        var data = data1.GroupBy(c => c.gpname).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_geotagging.Where(n => n.gpname == daada).OrderByDescending(x => x.date).FirstOrDefault();
                            Final_data.Add(exist2);
                        }

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        var data1 = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.fyyear == year && x.fymonth == month).ToList();
                        var data = data1.GroupBy(c => c.gpname).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_geotagging.Where(n => n.gpname == daada).OrderByDescending(x => x.date).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
                    {
                        var data1 = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.fyyear == year).ToList();
                        var data = data1.GroupBy(c => c.gpname).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_geotagging.Where(n => n.gpname == daada).OrderByDescending(x => x.date).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        var data1 = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block).ToList();
                        var data = data1.GroupBy(c => c.gpname).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_geotagging.Where(n => n.gpname == daada).OrderByDescending(x => x.date).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        var data1 = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.districtname == Dist && x.fyyear == year && x.fymonth == month).ToList();
                        var data = data1.GroupBy(c => c.gpname).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_geotagging.Where(n => n.gpname == daada).OrderByDescending(x => x.date).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
                    {
                        var data1 = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.districtname == Dist && x.fyyear == year).ToList();
                        var data = data1.GroupBy(c => c.gpname).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_geotagging.Where(n => n.gpname == daada).OrderByDescending(x => x.date).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        var data1 = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.districtname == Dist).ToList();
                        var data = data1.GroupBy(c => c.gpname).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_geotagging.Where(n => n.gpname == daada).OrderByDescending(x => x.date).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        var data1 = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.fyyear == year && x.fymonth == month).ToList();
                        var data = data1.GroupBy(c => c.gpname).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_geotagging.Where(n => n.gpname == daada).OrderByDescending(x => x.date).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
                    {
                        var data1 = AJE.obj_vw_geotagging.Where(x => x.statename == State && x.fyyear == year).ToList();
                        var data = data1.GroupBy(c => c.gpname).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_geotagging.Where(n => n.gpname == daada).OrderByDescending(x => x.date).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        var data1 = AJE.obj_vw_geotagging.Where(x => x.statename == State).ToList();
                        var data = data1.GroupBy(c => c.gpname).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_geotagging.Where(n => n.gpname == daada).OrderByDescending(x => x.date).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }

                    var exetotal = Final_data.Count;
                    var jsonresult = Json(exetotal, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
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
        public ActionResult Delete_geodata(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<vw_geotagging>(Data);
                    
                    if (result.id != 0)
                    {

                        var TKID = Convert.ToInt32(result.id);
                        var Data2 = AJE.obj_vw_geotagging.Where(x => x.id == TKID).SingleOrDefault();
                        geo_new_delete obj = new geo_new_delete();
                        obj.statename = Data2.statename;
                        obj.districtname = Data2.districtname;
                        obj.blockname = Data2.blockname;
                        obj.gpname = Data2.gpname;
                        obj.latitude = Data2.latitude;
                        obj.longitude = Data2.longitude;
                        obj.typeofstructure = Data2.typeofstructure;
                        obj.storagecapacity = Data2.storagecapacity;
                        obj.nooffillings = Data2.nooffillings;
                        obj.image1 = Data2.image1;
                        obj.image2 = Data2.image2;
                        obj.deviceid = Data2.deviceid;
                        obj.others = Data2.others;
                        obj.date = Convert.ToDateTime(Data2.date);
                        obj.email = Data2.email;
                        obj.village = Data2.village;
                        obj.sitename = Data2.sitename;
                        obj.date1 = Data2.date1;
                        obj.datetime = Data2.datetime;
                        obj.locationdetail = Data2.locationdetail;
                        obj.wcu_aby = Data2.wcu_aby;
                        obj.wcu_aby_remark = Data2.wcu_aby_remark;
                        obj.approve = Data2.approve;
                        obj.reject_remark = Data2.reject_remark;
                        obj.date_time = Data2.date_time;
                        obj.deleted_email = Session["Email"].ToString();
                        obj.deleted_time = DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss");
                        obj.tableid = Data2.id;
                        AJE.obj_geo_new_delete.Add(obj);
                        AJE.SaveChanges();

                        AJE.Entry(Data2).State = EntityState.Deleted;
                        AJE.SaveChanges();
                        return Json("Deleted Successfully");

                    }
                    else
                    {
                        return Json("No Data", JsonRequestBehavior.AllowGet);
                    }
                }
                catch (Exception ex)
                {
                    abhy_tbl_error error_data = new abhy_tbl_error();
                    error_data.error_test = ex.Message;
                    error_data.user_email = ex.StackTrace;
                    error_data.user_type = "Geotagging delete";
                    error_data.error_count = "1";
                    ABE.obj_abhy_tbl_error.Add(error_data);
                    ABE.SaveChanges();
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }

        }

        [HttpPost]
        public ActionResult submit_spmu_geo(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<vw_geotagging>(Data);

                    if (result.id != 0)
                    {
                        if (Data != null)
                        {
                            var TKID = Convert.ToInt32(result.id);
                            var Data1 = AJE.obj_geo_new.Where(x => x.id == TKID).SingleOrDefault();
                            Data1.approve = "State";
                            Data1.reject_remark = "";
                            AJE.Entry(Data1).State = System.Data.Entity.EntityState.Modified;
                            AJE.SaveChanges();
                            return Json("Successfully Submitted");
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
                catch (Exception ex)
                {
                    abhy_tbl_error error_data = new abhy_tbl_error();
                    error_data.error_test = ex.Message;
                    error_data.user_email = ex.StackTrace;
                    error_data.user_type = "Geotagging spmu";
                    error_data.error_count = "1";
                    ABE.obj_abhy_tbl_error.Add(error_data);
                    ABE.SaveChanges();
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }

        }

        [HttpPost]
        public ActionResult approve_geo(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<vw_geotagging>(Data);

                    if (result.id != 0)
                    {
                        if (Data != null)
                        {
                            var TKID = Convert.ToInt32(result.id);
                            var Data1 = AJE.obj_geo_new.Where(x => x.id == TKID).SingleOrDefault();
                            Data1.approve = "Approve";
                            Data1.reject_remark = "";
                            AJE.Entry(Data1).State = System.Data.Entity.EntityState.Modified;
                            AJE.SaveChanges();
                            return Json("Approved Successfully");
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
                    abhy_tbl_error error_data = new abhy_tbl_error();
                    error_data.error_test = Ex.Message;
                    error_data.user_email = Ex.StackTrace;
                    error_data.user_type = "Geotagging approve";
                    error_data.error_count = "1";
                    ABE.obj_abhy_tbl_error.Add(error_data);
                    ABE.SaveChanges();
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }

        }

        [HttpPost]
        public ActionResult reject_geo(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<vw_geotagging>(Data);

                    if (result.id != 0)
                    {
                        if (Data != null)
                        {
                            var TKID = Convert.ToInt32(result.id);
                            var Data1 = AJE.obj_geo_new.Where(x => x.id == TKID).SingleOrDefault();
                            Data1.approve = "Reject";
                            Data1.reject_remark = result.reject_remark;
                            AJE.Entry(Data1).State = System.Data.Entity.EntityState.Modified;
                            AJE.SaveChanges();
                            return Json("Rejected Successfully");
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
                    abhy_tbl_error error_data = new abhy_tbl_error();
                    error_data.error_test = Ex.Message;
                    error_data.user_email = Ex.StackTrace;
                    error_data.user_type = "Geotagging approve";
                    error_data.error_count = "1";
                    ABE.obj_abhy_tbl_error.Add(error_data);
                    ABE.SaveChanges();
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }

        }



        public ActionResult Mapview_MADB_rainfall(string id)
        {
            var ID = Convert.ToInt32(id);
            var Details = AJE.obj_rainfall_meta.Where(x => x.id == ID).FirstOrDefault();
            if (Details != null)
            {
                var latitude = Details.latitude;
                var longitude = Details.longitude;
                ViewBag.latitude = latitude;
                ViewBag.longitude = longitude;
                return View();
            }
            else
            {
                ViewBag.latitude = "0";
                ViewBag.longitude = "0";
                return View();
            }
        }
        [HttpPost]
        public ActionResult total_gp_rainfall(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<Pagenum>(Data);


                    var State = result.statename;
                    var Dist = result.districtname;
                    var Block = result.blockname;
                    var Gram = result.gpname;
                    var year = result.year;
                    var month = result.month;

                    List<vw_rainfall_meta> Final_data = new List<vw_rainfall_meta>();

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        var data1 = AJE.obj_vw_rainfall_meta.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.gpname == Gram && x.fyyear == year && x.fymonth == month).ToList();
                        var data = data1.GroupBy(c => c.gpname).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_rainfall_meta.Where(n => n.gpname == daada).OrderByDescending(x => x.date_time).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
                    {
                        var data1 = AJE.obj_vw_rainfall_meta.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.gpname == Gram && x.fyyear == year).ToList();
                        var data = data1.GroupBy(c => c.gpname).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_rainfall_meta.Where(n => n.gpname == daada).OrderByDescending(x => x.date_time).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        var data1 = AJE.obj_vw_rainfall_meta.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.gpname == Gram).ToList();
                        var data = data1.GroupBy(c => c.gpname).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_rainfall_meta.Where(n => n.gpname == daada).OrderByDescending(x => x.date_time).FirstOrDefault();
                            Final_data.Add(exist2);
                        }

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        var data1 = AJE.obj_vw_rainfall_meta.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.fyyear == year && x.fymonth == month).ToList();
                        var data = data1.GroupBy(c => c.gpname).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_rainfall_meta.Where(n => n.gpname == daada).OrderByDescending(x => x.date_time).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
                    {
                        var data1 = AJE.obj_vw_rainfall_meta.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.fyyear == year).ToList();
                        var data = data1.GroupBy(c => c.gpname).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_rainfall_meta.Where(n => n.gpname == daada).OrderByDescending(x => x.date_time).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        var data1 = AJE.obj_vw_rainfall_meta.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block).ToList();
                        var data = data1.GroupBy(c => c.gpname).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_rainfall_meta.Where(n => n.gpname == daada).OrderByDescending(x => x.date_time).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        var data1 = AJE.obj_vw_rainfall_meta.Where(x => x.statename == State && x.districtname == Dist && x.fyyear == year && x.fymonth == month).ToList();
                        var data = data1.GroupBy(c => c.gpname).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_rainfall_meta.Where(n => n.gpname == daada).OrderByDescending(x => x.date_time).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
                    {
                        var data1 = AJE.obj_vw_rainfall_meta.Where(x => x.statename == State && x.districtname == Dist && x.fyyear == year).ToList();
                        var data = data1.GroupBy(c => c.gpname).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_rainfall_meta.Where(n => n.gpname == daada).OrderByDescending(x => x.date_time).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        var data1 = AJE.obj_vw_rainfall_meta.Where(x => x.statename == State && x.districtname == Dist).ToList();
                        var data = data1.GroupBy(c => c.gpname).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_rainfall_meta.Where(n => n.gpname == daada).OrderByDescending(x => x.date_time).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        var data1 = AJE.obj_vw_rainfall_meta.Where(x => x.statename == State && x.fyyear == year && x.fymonth == month).ToList();
                        var data = data1.GroupBy(c => c.gpname).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_rainfall_meta.Where(n => n.gpname == daada).OrderByDescending(x => x.date_time).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
                    {
                        var data1 = AJE.obj_vw_rainfall_meta.Where(x => x.statename == State && x.fyyear == year).ToList();
                        var data = data1.GroupBy(c => c.gpname).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_rainfall_meta.Where(n => n.gpname == daada).OrderByDescending(x => x.date_time).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        var data1 = AJE.obj_vw_rainfall_meta.Where(x => x.statename == State).ToList();
                        var data = data1.GroupBy(c => c.gpname).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_rainfall_meta.Where(n => n.gpname == daada).OrderByDescending(x => x.date_time).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }

                    var exetotal = Final_data.Count;
                    var jsonresult = Json(exetotal, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
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
        public ActionResult Delete_rainfall(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<rainfall_meta>(Data);

                    if (result.id != 0)
                    {
                        if (Data != null)
                        {
                            var TKID = Convert.ToInt32(result.id);
                            var Data1 = AJE.obj_rainfall_data.Where(x => x.rf_meta_id == TKID).ToList();
                            for (int i = 0; i < Data1.Count; i++)
                            {
                                var delete = Data1[i].id;
                                var dd = Convert.ToInt32(delete);
                                var Delete_data = AJE.obj_rainfall_data.Where(x => x.id == dd).SingleOrDefault();
                                rainfall_data_delete obj = new rainfall_data_delete();
                                obj.rf_meta_id = Delete_data.rf_meta_id;
                                obj.rf_date = Delete_data.rf_date;
                                obj.rf_reading = Delete_data.rf_reading;
                                obj.rf_date_time = Delete_data.rf_date_time;
                                obj.rf_email = Delete_data.rf_email;
                                obj.status_data = Delete_data.status_data;
                                obj.reject_remark = Delete_data.reject_remark;
                                obj.deleted_email = Session["Email"].ToString();
                                obj.deleted_time = DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss");
                                obj.tableid = Delete_data.id;
                                AJE.obj_rainfall_data_delete.Add(obj);
                                AJE.SaveChanges();

                                AJE.Entry(Delete_data).State = EntityState.Deleted;
                                AJE.SaveChanges();
                            }

                            var Data2 = AJE.obj_rainfall_meta.Where(x => x.id == TKID).SingleOrDefault();
                            rainfall_meta_delete obj1 = new rainfall_meta_delete();
                            obj1.statename = Data2.statename;
                            obj1.districtname = Data2.districtname;
                            obj1.blockname = Data2.blockname;
                            obj1.gpname = Data2.gpname;
                            obj1.village = Data2.village;
                            obj1.latitude = Data2.latitude;
                            obj1.longitude = Data2.longitude;
                            obj1.raingauge = Data2.raingauge;
                            obj1.image2 = Data2.image2;
                            obj1.email = Data2.email;
                            obj1.locationdetail = Data2.locationdetail;
                            obj1.status = Data2.status;
                            obj1.reject_remark = Data2.reject_remark;
                            obj1.date_time = Data2.date_time;
                            obj1.deleted_email = Session["Email"].ToString();
                            obj1.deleted_time = DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss");
                            obj1.tableid = Data2.id;
                            AJE.obj_rainfall_meta_delete.Add(obj1);
                            AJE.SaveChanges();

                            AJE.Entry(Data2).State = EntityState.Deleted;
                            AJE.SaveChanges();
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
        public ActionResult submit_spmu_rainfall(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<rainfall_meta>(Data);

                    if (result.id != 0)
                    {
                        if (Data != null)
                        {
                            var TKID = Convert.ToInt32(result.id);
                            var Data1 = AJE.obj_rainfall_meta.Where(x => x.id == TKID).SingleOrDefault();
                            Data1.status = "State";
                            Data1.reject_remark = "";
                            AJE.Entry(Data1).State = System.Data.Entity.EntityState.Modified;
                            AJE.SaveChanges();
                            return Json("Successfully Submitted");
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
        public ActionResult approve_rainfall(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<rainfall_meta>(Data);

                    if (result.id != 0)
                    {
                        if (Data != null)
                        {
                            var TKID = Convert.ToInt32(result.id);
                            var Data1 = AJE.obj_rainfall_meta.Where(x => x.id == TKID).SingleOrDefault();
                            Data1.status = "Approve";
                            Data1.reject_remark = "";
                            AJE.Entry(Data1).State = System.Data.Entity.EntityState.Modified;
                            AJE.SaveChanges();
                            return Json("Approved Successfully");
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
        public ActionResult reject_rainfall(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<rainfall_meta>(Data);

                    if (result.id != 0)
                    {
                        if (Data != null)
                        {
                            var TKID = Convert.ToInt32(result.id);
                            var Data1 = AJE.obj_rainfall_meta.Where(x => x.id == TKID).SingleOrDefault();
                            Data1.status = "Reject";
                            Data1.reject_remark = result.reject_remark;
                            AJE.Entry(Data1).State = System.Data.Entity.EntityState.Modified;
                            AJE.SaveChanges();
                            return Json("Rejected Successfully");
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
        public ActionResult Update_rainfall(string id, string latitude, string longitude, string locationdetail, string village)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = AJE.obj_rainfall_meta.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        Data.id = ID;
                        string asaad = village;
                        string specialChar = @"@\|!#$%&()=?»«@£§€{}.;'<>,";
                        //foreach (var item in asaad)
                        //{
                        //    if (specialChar.Contains(item))
                        //    {
                        //        return Json("Villiage Name Not Correct");
                        //    }
                        //}
                        string location = locationdetail;
                        string specialCharlocation = @"@\|!#$%&?»«@£§€{}.;<>";
                        foreach (var item in location)
                        {
                            if (specialCharlocation.Contains(item))
                            {
                                return Json("Location Details Not Correct");
                            }
                        }
                        Data.village = village;
                        Data.locationdetail = locationdetail;
                        Data.longitude = longitude;
                        Data.latitude = latitude;

                        AJE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = AJE.SaveChanges();
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

        public ActionResult Mapview_MADB_well(string id)
        {
            var ID = Convert.ToInt32(id);
            var Details = AJE.obj_vw_wellinventory.Where(x => x.gid == ID).FirstOrDefault();
            if (Details != null)
            {
                var latitude = Details.latitude;
                var longitude = Details.longitude;
                ViewBag.latitude = latitude;
                ViewBag.longitude = longitude;
                return View();
            }
            else
            {
                ViewBag.latitude = "0";
                ViewBag.longitude = "0";
                return View();
            }
        }
        [HttpPost]
        public ActionResult total_gp_well(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<Pagenum>(Data);


                    var State = result.statename;
                    var Dist = result.districtname;
                    var Block = result.blockname;
                    var Gram = result.gpname;
                    var year = result.year;
                    var month = result.month;

                    List<vw_wellinventory> Final_data = new List<vw_wellinventory>();

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        var data1 = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.fyyear == year && x.fymonth == month).GroupBy(c => c.gp).ToList().Count();


                        //var data = data1.GroupBy(c => c.gp).ToList().Count();

                        //for (int i = 0; i < data.Count; i++)
                        //{
                        //    var daada = data[i].Key;
                        //    var exist2 = AJE.obj_vw_wellinventory.Where(n => n.gp == daada).OrderByDescending(x => x.datetime).FirstOrDefault();
                        //    Final_data.Add(exist2);
                        //}
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
                    {
                        var data1 = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.fyyear == year).ToList();
                        var data = data1.GroupBy(c => c.gp).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_wellinventory.Where(n => n.gp == daada).OrderByDescending(x => x.datetime).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        var data1 = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram).ToList();
                        var data = data1.GroupBy(c => c.gp).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_wellinventory.Where(n => n.gp == daada).OrderByDescending(x => x.datetime).FirstOrDefault();
                            Final_data.Add(exist2);
                        }

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        var data1 = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year && x.fymonth == month).ToList();
                        var data = data1.GroupBy(c => c.gp).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_wellinventory.Where(n => n.gp == daada).OrderByDescending(x => x.datetime).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
                    {
                        var data1 = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year).ToList();
                        var data = data1.GroupBy(c => c.gp).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_wellinventory.Where(n => n.gp == daada).OrderByDescending(x => x.datetime).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        var data1 = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist && x.block == Block).ToList();
                        var data = data1.GroupBy(c => c.gp).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_wellinventory.Where(n => n.gp == daada).OrderByDescending(x => x.datetime).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        var data1 = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist && x.fyyear == year && x.fymonth == month).ToList();
                        var data = data1.GroupBy(c => c.gp).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_wellinventory.Where(n => n.gp == daada).OrderByDescending(x => x.datetime).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
                    {
                        var data1 = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist && x.fyyear == year).ToList();
                        var data = data1.GroupBy(c => c.gp).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_wellinventory.Where(n => n.gp == daada).OrderByDescending(x => x.datetime).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        var data1 = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.district == Dist).ToList();
                        var data = data1.GroupBy(c => c.gp).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_wellinventory.Where(n => n.gp == daada).OrderByDescending(x => x.datetime).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        var data1 = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.fyyear == year && x.fymonth == month).ToList();
                        var data = data1.GroupBy(c => c.gp).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_wellinventory.Where(n => n.gp == daada).OrderByDescending(x => x.datetime).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
                    {
                        var data1 = AJE.obj_vw_wellinventory.Where(x => x.state == State && x.fyyear == year).ToList();
                        var data = data1.GroupBy(c => c.gp).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_wellinventory.Where(n => n.gp == daada).OrderByDescending(x => x.datetime).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        var datgjasd = AJE.obj_vw_wellinventory.Where(x => x.state == State).GroupBy(c => c.gp).ToList().Count();
                        var data1 = AJE.obj_vw_wellinventory.Where(x => x.state == State).ToList();
                        var data = data1.GroupBy(c => c.gp).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_wellinventory.Where(n => n.gp == daada).OrderByDescending(x => x.datetime).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }

                    var exetotal = Final_data.Count;
                    var jsonresult = Json(exetotal, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
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
        public ActionResult Delete_welldata(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<wellinventory>(Data);

                    if (result.gid != 0)
                    {

                        var TKID = Convert.ToInt32(result.gid);
                        var Data2 = AJE.obj_wellinventory.Where(x => x.gid == TKID).SingleOrDefault();

                        wellinventory_delete obj = new wellinventory_delete();
                        obj.wellno = Data2.wellno;
                        obj.date = Data2.date;
                        obj.state = Data2.state;
                        obj.district = Data2.district;
                        obj.block = Data2.block;
                        obj.gp = Data2.gp;
                        obj.village = Data2.village;
                        obj.sitename = Data2.sitename;
                        obj.locationdetails = Data2.locationdetails;
                        obj.ownername = Data2.ownername;
                        obj.latitude = Data2.latitude;
                        obj.longitude = Data2.longitude;
                        obj.welldiameter = Data2.welldiameter;
                        obj.welldepth = Data2.welldepth;
                        obj.measuringpoint = Data2.measuringpoint;
                        obj.welltype = Data2.welltype;
                        obj.wellwaterpotable = Data2.wellwaterpotable;
                        obj.waterleveldepth = Data2.waterleveldepth;
                        obj.well_type_other = Data2.well_type_other;
                        obj.use = Data2.use;
                        obj.pumpinstalled = Data2.pumpinstalled;
                        obj.electricmeterselecteditem = Data2.electricmeterselecteditem;
                        obj.datetime = Data2.datetime;
                        obj.email = Data2.email;
                        obj.image = Data2.image;
                        obj.approve = Data2.approve;
                        obj.reject_remark = Data2.reject_remark;
                        obj.deleted_email = Session["Email"].ToString();
                        obj.deleted_time = DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss");
                        obj.tableid = Data2.gid;
                        AJE.obj_wellinventory_delete.Add(obj);
                        AJE.SaveChanges();

                        AJE.Entry(Data2).State = EntityState.Deleted;
                        AJE.SaveChanges();
                        return Json("Deleted Successfully");

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
        public ActionResult submit_spmu_well(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<wellinventory>(Data);

                    if (result.gid != 0)
                    {
                        if (Data != null)
                        {
                            var TKID = Convert.ToInt32(result.gid);
                            var Data1 = AJE.obj_wellinventory.Where(x => x.gid == TKID).SingleOrDefault();
                            Data1.approve = "State";
                            Data1.reject_remark = "";
                            AJE.Entry(Data1).State = System.Data.Entity.EntityState.Modified;
                            AJE.SaveChanges();
                            return Json("Successfully Submitted");
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
        public ActionResult approve_well(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<wellinventory>(Data);

                    if (result.gid != 0)
                    {
                        if (Data != null)
                        {
                            var TKID = Convert.ToInt32(result.gid);
                            var Data1 = AJE.obj_wellinventory.Where(x => x.gid == TKID).SingleOrDefault();
                            Data1.approve = "Approve";
                            Data1.reject_remark = "";
                            AJE.Entry(Data1).State = System.Data.Entity.EntityState.Modified;
                            AJE.SaveChanges();
                            return Json("Approved Successfully");
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
        public ActionResult reject_well(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<wellinventory>(Data);

                    if (result.gid != 0)
                    {
                        if (Data != null)
                        {
                            var TKID = Convert.ToInt32(result.gid);
                            var Data1 = AJE.obj_wellinventory.Where(x => x.gid == TKID).SingleOrDefault();
                            Data1.approve = "Reject";
                            Data1.reject_remark = result.reject_remark;
                            AJE.Entry(Data1).State = System.Data.Entity.EntityState.Modified;
                            AJE.SaveChanges();
                            return Json("Rejected Successfully");
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
        public ActionResult Update_well(string gid, string latitude, string longitude, string village, string locationdetails, string welldiameter, string welldepth, string waterleveldepth, string measuringpoint, string welltype, string otherwelltype, string use_drinking)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(gid);
                    var Data = AJE.obj_wellinventory.Where(x => x.gid == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        Data.gid = ID;
                        Data.welltype = welltype;


                        string asaad = village;
                        string specialChar = @"@\|!#$%&()=?»«@£§€{}.;'<>,";
                        //foreach (var item in asaad)
                        //{
                        //    if (specialChar.Contains(item))
                        //    {
                        //        return Json("Villiage Name Not Correct");
                        //    }
                        //}
                        string location = locationdetails;
                        string specialCharlocation = @"@\|!#$%&?»«@£§€{}.;<>";
                        foreach (var item in location)
                        {
                            if (specialCharlocation.Contains(item))
                            {
                                return Json("Location Details Not Correct");
                            }
                        }
                        Data.village = village;
                        Data.locationdetails = locationdetails;
                        Data.latitude = latitude;
                        Data.longitude = longitude;
                        Data.use = use_drinking;
                        if (welldiameter == null || welldiameter == "")
                        {
                            return Json("Please Enter Diameter of Well (m)");
                        }
                        else
                        {
                            var welldiameters = Convert.ToDouble(welldiameter);
                            if (welltype == "Tube Well" || welltype == "Bore Well")
                            {
                                if (welldiameters > 0.51)
                                {
                                    return Json("Well diameter must be less than 0.5 for Tube Well and Bore Well.");
                                }
                                else
                                {
                                    Data.welldiameter = welldiameter;
                                }
                            }
                            else if (welltype == "Dug Well" || welltype == "Dug-Cum-Bore well" || welltype == "Others")
                            {
                                if (welldiameters > 15.1)
                                {
                                    return Json("Well diameter must be less than 15.0 for Dug Well, Dug-Cum-Bore Well, and Other Well.");
                                }
                                else
                                {
                                    Data.welldiameter = welldiameter;
                                }
                            }
                        }
                        if (welltype == "Others")
                        {
                            string otherwelltypea = otherwelltype;

                            foreach (var item in otherwelltypea)
                            {
                                if (specialCharlocation.Contains(item))
                                {
                                    return Json("Other Type of well is Not Correct");
                                }
                            }
                            Data.well_type_other = otherwelltype;
                        }
                        else
                        {
                            Data.well_type_other = "";
                        }

                        string sc = welldepth;
                        string checksc = @"^\d{1,3}(\.\d{1,2})?$";
                        bool scValid = Regex.IsMatch(sc, checksc);
                        if (scValid)
                        {
                            Data.welldepth = welldepth;
                        }
                        else
                        {
                            return Json("welldepth should be  1 to 3 digits before the decimal point and 2 digits after the decimal point");

                        }
                        if (measuringpoint == null || measuringpoint == "")
                        {
                            return Json("Please Enter Diameter of Well (m)");
                        }
                        else
                        {
                            var measuringpoint_aa = Convert.ToDouble(measuringpoint);
                            var water_level_check = waterleveldepth;
                            if (water_level_check != "Dry")
                            {
                                var waterleveldepth_aa = Convert.ToDouble(waterleveldepth);
                                var welldepth_aa = Convert.ToDouble(welldepth);
                                double well_aa = Convert.ToDouble(welldepth) + 0.1;
                                double waterlevel_aa = waterleveldepth_aa;

                                if (waterlevel_aa >= well_aa)
                                {
                                    return Json("Please input water level below the well depth.");
                                }
                                else
                                {
                                    Data.waterleveldepth = waterleveldepth;
                                }
                            }
                            else
                            {
                                Data.waterleveldepth = waterleveldepth;
                            }
                            if (measuringpoint_aa > 5)
                            {
                                return Json("Height of measuring point should not be greater than 5 meters.");
                            }
                            else
                            {
                                if (water_level_check != "Dry")
                                {
                                    var waterleveldepth_aa = Convert.ToDouble(waterleveldepth);
                                    if (measuringpoint_aa > waterleveldepth_aa)
                                    {
                                        return Json("Height of measuring should be less than Depth of water level.");
                                    }
                                    else
                                    {
                                        Data.measuringpoint = measuringpoint;
                                    }
                                }
                                else
                                {
                                    Data.measuringpoint = measuringpoint;
                                }
                            }
                        }
                        AJE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = AJE.SaveChanges();
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



        public ActionResult Mapview_MADB_waterflow(string id)
        {
            var ID = Convert.ToInt32(id);
            var Details = AJE.obj_vw_waterflow_meta.Where(x => x.id == ID).FirstOrDefault();
            if (Details != null)
            {
                var latitude = Details.Latitude;
                var longitude = Details.Longitude;
                ViewBag.latitude = latitude;
                ViewBag.longitude = longitude;
                return View();
            }
            else
            {
                ViewBag.latitude = "0";
                ViewBag.longitude = "0";
                return View();
            }
        }
        [HttpPost]
        public ActionResult total_gp_waterflow(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<Pagenum>(Data);


                    var State = result.statename;
                    var Dist = result.districtname;
                    var Block = result.blockname;
                    var Gram = result.gpname;
                    var year = result.year;
                    var month = result.month;

                    List<vw_waterflow_meta> Final_data = new List<vw_waterflow_meta>();

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        var data1 = AJE.obj_vw_waterflow_meta.Where(x => x.State == State && x.District == Dist && x.Block == Block && x.GramPanchayat == Gram && x.fyyear == year && x.fymonth == month).ToList();
                        var data = data1.GroupBy(c => c.GramPanchayat).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_waterflow_meta.Where(n => n.GramPanchayat == daada).OrderByDescending(x => x.datetime).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
                    {
                        var data1 = AJE.obj_vw_waterflow_meta.Where(x => x.State == State && x.District == Dist && x.Block == Block && x.GramPanchayat == Gram && x.fyyear == year).ToList();
                        var data = data1.GroupBy(c => c.GramPanchayat).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_waterflow_meta.Where(n => n.GramPanchayat == daada).OrderByDescending(x => x.datetime).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        var data1 = AJE.obj_vw_waterflow_meta.Where(x => x.State == State && x.District == Dist && x.Block == Block && x.GramPanchayat == Gram).ToList();
                        var data = data1.GroupBy(c => c.GramPanchayat).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_waterflow_meta.Where(n => n.GramPanchayat == daada).OrderByDescending(x => x.datetime).FirstOrDefault();
                            Final_data.Add(exist2);
                        }

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        var data1 = AJE.obj_vw_waterflow_meta.Where(x => x.State == State && x.District == Dist && x.Block == Block && x.fyyear == year && x.fymonth == month).ToList();
                        var data = data1.GroupBy(c => c.GramPanchayat).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_waterflow_meta.Where(n => n.GramPanchayat == daada).OrderByDescending(x => x.datetime).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
                    {
                        var data1 = AJE.obj_vw_waterflow_meta.Where(x => x.State == State && x.District == Dist && x.Block == Block && x.fyyear == year).ToList();
                        var data = data1.GroupBy(c => c.GramPanchayat).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_waterflow_meta.Where(n => n.GramPanchayat == daada).OrderByDescending(x => x.datetime).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        var data1 = AJE.obj_vw_waterflow_meta.Where(x => x.State == State && x.District == Dist && x.Block == Block).ToList();
                        var data = data1.GroupBy(c => c.GramPanchayat).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_waterflow_meta.Where(n => n.GramPanchayat == daada).OrderByDescending(x => x.datetime).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        var data1 = AJE.obj_vw_waterflow_meta.Where(x => x.State == State && x.District == Dist && x.fyyear == year && x.fymonth == month).ToList();
                        var data = data1.GroupBy(c => c.GramPanchayat).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_waterflow_meta.Where(n => n.GramPanchayat == daada).OrderByDescending(x => x.datetime).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
                    {
                        var data1 = AJE.obj_vw_waterflow_meta.Where(x => x.State == State && x.District == Dist && x.fyyear == year).ToList();
                        var data = data1.GroupBy(c => c.GramPanchayat).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_waterflow_meta.Where(n => n.GramPanchayat == daada).OrderByDescending(x => x.datetime).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        var data1 = AJE.obj_vw_waterflow_meta.Where(x => x.State == State && x.District == Dist).ToList();
                        var data = data1.GroupBy(c => c.GramPanchayat).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_waterflow_meta.Where(n => n.GramPanchayat == daada).OrderByDescending(x => x.datetime).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        var data1 = AJE.obj_vw_waterflow_meta.Where(x => x.State == State && x.fyyear == year && x.fymonth == month).ToList();
                        var data = data1.GroupBy(c => c.GramPanchayat).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_waterflow_meta.Where(n => n.GramPanchayat == daada).OrderByDescending(x => x.datetime).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
                    {
                        var data1 = AJE.obj_vw_waterflow_meta.Where(x => x.State == State && x.fyyear == year).ToList();
                        var data = data1.GroupBy(c => c.GramPanchayat).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_waterflow_meta.Where(n => n.GramPanchayat == daada).OrderByDescending(x => x.datetime).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        var data1 = AJE.obj_vw_waterflow_meta.Where(x => x.State == State).ToList();
                        var data = data1.GroupBy(c => c.GramPanchayat).ToList();

                        for (int i = 0; i < data.Count; i++)
                        {
                            var daada = data[i].Key;
                            var exist2 = AJE.obj_vw_waterflow_meta.Where(n => n.GramPanchayat == daada).OrderByDescending(x => x.datetime).FirstOrDefault();
                            Final_data.Add(exist2);
                        }
                    }

                    var exetotal = Final_data.Count;
                    var jsonresult = Json(exetotal, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
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
        public ActionResult Delete_waterflowdata(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<waterflow_meta>(Data);

                    if (result.id != 0)
                    {
                        if (Data != null)
                        {
                            var TKID = Convert.ToInt32(result.id);
                            var Data1 = AJE.obj_waterflow_data.Where(x => x.wf_meta_id == TKID).ToList();
                            for (int i = 0; i < Data1.Count; i++)
                            {
                                var delete = Data1[i].id;
                                var dd = Convert.ToInt32(delete);
                                var Delete_data = AJE.obj_waterflow_data.Where(x => x.id == dd).SingleOrDefault();
                                waterflow_data_delete obj = new waterflow_data_delete();
                                obj.wf_meta_id = Delete_data.wf_meta_id;
                                obj.WaterReading_Date = Delete_data.WaterReading_Date;
                                obj.MeterReading = Delete_data.MeterReading;
                                obj.wf_date_time = Delete_data.wf_date_time;
                                obj.wf_email = Delete_data.wf_email;
                                obj.status_data = Delete_data.status_data;
                                obj.reject_remark = Delete_data.reject_remark;
                                obj.deleted_email = Session["Email"].ToString();
                                obj.deleted_time = DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss");
                                obj.tableid = Delete_data.id;
                                AJE.obj_waterflow_data_delete.Add(obj);
                                AJE.SaveChanges();

                                AJE.Entry(Delete_data).State = EntityState.Deleted;
                                AJE.SaveChanges();
                            }

                            var Data2 = AJE.obj_waterflow_meta.Where(x => x.id == TKID).SingleOrDefault();
                            waterflow_meta_delete obj1 = new waterflow_meta_delete();
                            obj1.State = Data2.State;
                            obj1.District = Data2.District;
                            obj1.Block = Data2.Block;
                            obj1.GramPanchayat = Data2.GramPanchayat;
                            obj1.Village = Data2.Village;
                            obj1.LocationDetails = Data2.LocationDetails;
                            obj1.Latitude = Data2.Latitude;
                            obj1.Longitude = Data2.Longitude;
                            obj1.DateofEntry = Data2.DateofEntry;
                            obj1.OwnerName = Data2.OwnerName;
                            obj1.WellType = Data2.WellType;
                            obj1.PumpType = Data2.PumpType;
                            obj1.WaterFlowMeter_Installation_Date = Data2.WaterFlowMeter_Installation_Date;
                            obj1.AreaIrrigated = Data2.AreaIrrigated;
                            obj1.depthofwell = Data2.depthofwell;
                            obj1.CropIrrigated = Data2.CropIrrigated;
                            obj1.UnitReading = Data2.UnitReading;
                            obj1.Meterid = Data2.Meterid;
                            obj1.status = Data2.status;
                            obj1.reject_remark = Data2.reject_remark;
                            obj1.datetime = Data2.datetime;
                            obj1.deleted_email = Session["Email"].ToString();
                            obj1.deleted_time = DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss");
                            obj1.tableid = Data2.id;
                            AJE.obj_waterflow_meta_delete.Add(obj1);
                            AJE.SaveChanges();


                            AJE.Entry(Data2).State = EntityState.Deleted;
                            AJE.SaveChanges();
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
        public ActionResult check_meterid(string Meterid)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var Data1 = AJE.obj_waterflow_meta.Where(x => x.Meterid == Meterid).Count();
                    if (Data1 == 0)
                    {
                        return Json("Verified", JsonRequestBehavior.AllowGet);
                    }
                    else
                    {
                        return Json("Entered Meter Id Already Exists", JsonRequestBehavior.AllowGet);
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
        public ActionResult submit_spmu_waterflow(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<waterflow_meta>(Data);

                    if (result.id != 0)
                    {
                        if (Data != null)
                        {
                            var TKID = Convert.ToInt32(result.id);
                            var Data1 = AJE.obj_waterflow_meta.Where(x => x.id == TKID).SingleOrDefault();
                            Data1.status = "State";
                            Data1.reject_remark = "";
                            AJE.Entry(Data1).State = System.Data.Entity.EntityState.Modified;
                            AJE.SaveChanges();
                            return Json("Successfully Submitted");
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
        public ActionResult approve_waterflow_data(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<waterflow_meta>(Data);

                    if (result.id != 0)
                    {
                        if (Data != null)
                        {
                            var TKID = Convert.ToInt32(result.id);
                            var Data1 = AJE.obj_waterflow_meta.Where(x => x.id == TKID).SingleOrDefault();
                            Data1.status = "Approve";
                            Data1.reject_remark = "";
                            AJE.Entry(Data1).State = System.Data.Entity.EntityState.Modified;
                            AJE.SaveChanges();
                            return Json("Approved Successfully");
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
        public ActionResult reject_waterflow_data(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<waterflow_meta>(Data);

                    if (result.id != 0)
                    {
                        if (Data != null)
                        {
                            var TKID = Convert.ToInt32(result.id);
                            var Data1 = AJE.obj_waterflow_meta.Where(x => x.id == TKID).SingleOrDefault();
                            Data1.status = "Reject";
                            Data1.reject_remark = result.reject_remark;
                            AJE.Entry(Data1).State = System.Data.Entity.EntityState.Modified;
                            AJE.SaveChanges();
                            return Json("Rejected Successfully");
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
        public ActionResult Update_waterflow(string id,string PumpType,string WellType, string DateofEntry, string Meterid, string latitude, string longitude, string village, string locationdetail, string AreaIrrigated, string depthofwell ,string OwnerName, string WaterFlowMeter_Installation_Date)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = AJE.obj_waterflow_meta.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {
                        Data.Latitude = latitude;
                        Data.Longitude = longitude;
                        string asaad = village;
                        if (WellType == null)
                        {
                            return Json("Select well type");
                        } 
                        if (PumpType == null)
                        {
                            return Json("Select Pump Type");
                        }
                        string specialChar = @"@\|!#$%&()=?»«@£§€{}.;'<>,";
                        string location = locationdetail;
                        string specialCharlocation = @"@\|!#$%&?»«@£§€{}.;<>";
                        foreach (var item in location)
                        {
                            if (specialCharlocation.Contains(item))
                            {
                                return Json("Location Details Not Correct");
                            }
                        }
                        Data.Village = village;
                        Data.LocationDetails = locationdetail;
                        string DateofEntrycheck = DateofEntry;
                        string datechek = @"^\d{4}-\d{2}-\d{2}$";
                        bool DateofEntryisValid = Regex.IsMatch(DateofEntrycheck, datechek);
                        if (DateofEntryisValid)
                        {
                            Data.DateofEntry = DateofEntry;
                        }
                        else
                        {
                            return Json("Date of Entry is Not Correct Formate");
                        }
                        string OwnerNamecheck = OwnerName;
                        Regex r = new Regex("^[a-zA-Z ]*$");
                        if (r.IsMatch(OwnerNamecheck))
                        {
                            Data.OwnerName = OwnerName;
                        }
                        else
                        {
                            return Json("OwnerName is Not Correct");
                        }

                        string WaterFlowMeter_Installation_Date_check = WaterFlowMeter_Installation_Date;
                        bool WaterFlowMeter_Installation_Date_valid = Regex.IsMatch(WaterFlowMeter_Installation_Date_check, datechek);
                        if (WaterFlowMeter_Installation_Date_valid)
                        {
                            Data.WaterFlowMeter_Installation_Date = WaterFlowMeter_Installation_Date;
                        }
                        else
                        {
                            return Json("Date of Installation of Waterflow meter is Not Correct Formate");
                        }
                        string areaa = AreaIrrigated;
                        string areacheck = @"^\d{1,3}(\.\d{1,2})?$";
                        bool areaValid = Regex.IsMatch(areaa, areacheck);
                        if (areaValid)
                        {
                            Data.AreaIrrigated = AreaIrrigated;
                        }
                        else
                        {
                            return Json("Area Irrigated is Not Correct");
                        }
                        string deptha = depthofwell;
                        bool depthValid = Regex.IsMatch(deptha, areacheck);
                        if (depthValid)
                        {
                            if (!deptha.Contains("."))
                            {
                                deptha += ".00";
                            }
                            else
                            {
                                int decimalPlaces = deptha.Length - deptha.IndexOf('.') - 1;
                                if (decimalPlaces == 1)
                                {
                                    deptha += "0";
                                }
                                else if (decimalPlaces == 0)
                                {
                                    deptha += "00";
                                }
                            }
                            Data.depthofwell = deptha;
                        }
                        else
                        {
                            return Json("Depth of Well is Not Correct");
                        }
                        string specialCharmeter = @"\|!%?»«£§€{};<>";
                        var checkmeterid = Meterid;
                        foreach (var item in checkmeterid)
                        {
                            if (specialCharmeter.Contains(item))

                            {
                                if (item != '@')
                                {
                                    return Json("Meter ID is Not Correct");
                                }
                            }
                        }

                        Data.Meterid = Meterid;
                        Data.WellType = WellType;
                        Data.PumpType = PumpType;
                        AJE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = AJE.SaveChanges();
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
        public ActionResult rainfall_data(string id)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();

                    var idd = Convert.ToInt32(id);

                    var Final_data = AJE.obj_rainfall_data.Where(x => x.rf_meta_id == idd).OrderByDescending(x => x.rf_date).ToList();


                    if (Final_data.Count != 0)
                    {
                        var jsonresult = Json(Final_data, JsonRequestBehavior.AllowGet);
                        jsonresult.MaxJsonLength = int.MaxValue;
                        return jsonresult;
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
        public ActionResult Update_rainfall_data(string id, string rf_reading)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = AJE.obj_rainfall_data.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {
                        Data.id = ID;
                        var checkmeterid = rf_reading;
                        if (checkmeterid == "0")
                        {
                            Data.rf_reading = rf_reading;
                        }
                        else
                        {
                            if (!checkmeterid.Contains('.'))
                            {
                                // If decimal is not present, append ".0"
                                checkmeterid += ".0";
                                rf_reading += ".0";
                            }
                            string areacheck = @"^\d+\.\d+$";
                            bool areaValid = Regex.IsMatch(checkmeterid, areacheck);
                            if (areaValid)
                            {
                                Data.rf_reading = rf_reading;
                            }
                            else
                            {
                                return Json("Reading is Not Correct");
                            }
                        }

                        AJE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = AJE.SaveChanges();
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
        public ActionResult Delete_rainfall_data(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<rainfall_data>(Data);

                    if (result.id != 0)
                    {
                        if (Data != null)
                        {
                            var TKID = Convert.ToInt32(result.id);
                            var Data2 = AJE.obj_rainfall_data.Where(x => x.id == TKID).SingleOrDefault();
                            rainfall_data_delete obj = new rainfall_data_delete();
                            obj.rf_meta_id = Data2.rf_meta_id;
                            obj.rf_date = Data2.rf_date;
                            obj.rf_reading = Data2.rf_reading;
                            obj.rf_date_time = Data2.rf_date_time;
                            obj.rf_email = Data2.rf_email;
                            obj.status_data = Data2.status_data;
                            obj.reject_remark = Data2.reject_remark;
                            obj.deleted_email = Session["Email"].ToString();
                            obj.deleted_time = DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss");
                            obj.tableid = Data2.id;
                            AJE.obj_rainfall_data_delete.Add(obj);
                            AJE.SaveChanges();

                            AJE.Entry(Data2).State = EntityState.Deleted;
                            AJE.SaveChanges();
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
        public ActionResult submit_spmu_rainfall_data(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<rainfall_data>(Data);

                    if (result.id != 0)
                    {
                        if (Data != null)
                        {
                            var TKID = Convert.ToInt32(result.id);
                            var Data1 = AJE.obj_rainfall_data.Where(x => x.id == TKID).SingleOrDefault();
                            Data1.status_data = "State";
                            Data1.reject_remark = "";
                            AJE.Entry(Data1).State = System.Data.Entity.EntityState.Modified;
                            AJE.SaveChanges();
                            return Json("Successfully Submitted");
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
        public ActionResult approve_rainfall_data(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<rainfall_data>(Data);

                    if (result.id != 0)
                    {
                        if (Data != null)
                        {
                            var TKID = Convert.ToInt32(result.id);
                            var Data1 = AJE.obj_rainfall_data.Where(x => x.id == TKID).SingleOrDefault();
                            Data1.status_data = "Approve";
                            Data1.reject_remark = "";
                            AJE.Entry(Data1).State = System.Data.Entity.EntityState.Modified;
                            AJE.SaveChanges();
                            return Json("Approved Successfully");
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
        public ActionResult reject_rainfall_data(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<rainfall_data>(Data);

                    if (result.id != 0)
                    {
                        if (Data != null)
                        {
                            var TKID = Convert.ToInt32(result.id);
                            var Data1 = AJE.obj_rainfall_data.Where(x => x.id == TKID).SingleOrDefault();
                            Data1.status_data = "Reject";
                            Data1.reject_remark = result.reject_remark;
                            AJE.Entry(Data1).State = System.Data.Entity.EntityState.Modified;
                            AJE.SaveChanges();
                            return Json("Rejected Successfully");
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
        public ActionResult waterflow_data(string id)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();

                    var idd = Convert.ToInt32(id);

                    var Final_data = AJE.obj_waterflow_data.Where(x => x.wf_meta_id == idd).OrderByDescending(c => c.id).ToList();


                    if (Final_data.Count != 0)
                    {
                        var jsonresult = Json(Final_data, JsonRequestBehavior.AllowGet);
                        jsonresult.MaxJsonLength = int.MaxValue;
                        return jsonresult;
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
        public ActionResult Update_waterflow_data(string id, string MeterReading)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = AJE.obj_waterflow_data.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {
                        int ii = Data.wf_meta_id;
                        DateTime datet = Convert.ToDateTime(Data.WaterReading_Date);
                        var aa = AJE.obj_waterflow_data.Where(x => x.wf_meta_id == ii).OrderByDescending(x => x.id).ToList();


                        List<waterflow_data> dd = new List<waterflow_data>();
                        List<waterflow_data> updd = new List<waterflow_data>();
                        foreach (var item in aa)
                        {
                            DateTime lopdatet = Convert.ToDateTime(item.WaterReading_Date);
                            if (datet > lopdatet)
                            {
                                dd.Add(item);
                            }
                            else if (datet < lopdatet)
                            {
                                updd.Add(item);
                            }

                        }

                        double preading = 0;
                        if (dd.Count != 0)
                        {
                            List<waterflow_data> ff = new List<waterflow_data>();

                            for (int i = 0; i < dd.Count;)
                            {
                                preading = Convert.ToDouble(dd[0].MeterReading);
                                ff.Add(dd[0]);
                                break;
                            }
                            double aareading = Convert.ToDouble(MeterReading);
                            if (aareading < preading)
                            {
                                return Json("Current Reading can not be less than Previous Reading");
                            }
                        }
                        double uppreading = 0;
                        if (updd.Count != 0)
                        {
                            var accending_data = updd.OrderBy(x => x.id).ToList();
                            List<waterflow_data> ff = new List<waterflow_data>();

                            for (int i = 0; i < accending_data.Count;)
                            {
                                uppreading = Convert.ToDouble(accending_data[0].MeterReading);
                                ff.Add(accending_data[0]);
                                break;
                            }
                            double aareading = Convert.ToDouble(MeterReading);
                            if (aareading > uppreading)
                            {
                                return Json("Invalid Reading, Please Check Again ");
                            }
                        }



                        Data.id = ID;
                        Data.MeterReading = MeterReading;

                        AJE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = AJE.SaveChanges();
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
        public ActionResult Delete_waterflow_data(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<waterflow_data>(Data);

                    if (result.id != 0)
                    {
                        if (Data != null)
                        {
                            var TKID = Convert.ToInt32(result.id);
                            var Data2 = AJE.obj_waterflow_data.Where(x => x.id == TKID).SingleOrDefault();
                            waterflow_data_delete obj = new waterflow_data_delete();
                            obj.wf_meta_id = Data2.wf_meta_id;
                            obj.WaterReading_Date = Data2.WaterReading_Date;
                            obj.MeterReading = Data2.MeterReading;
                            obj.wf_date_time = Data2.wf_date_time;
                            obj.wf_email = Data2.wf_email;
                            obj.status_data = Data2.status_data;
                            obj.reject_remark = Data2.reject_remark;
                            obj.deleted_email = Session["Email"].ToString();
                            obj.deleted_time = DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss");
                            obj.tableid = Data2.id;
                            AJE.obj_waterflow_data_delete.Add(obj);
                            AJE.SaveChanges();

                            AJE.Entry(Data2).State = EntityState.Deleted;
                            AJE.SaveChanges();
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
        public ActionResult submit_spmu_waterflow_data(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<waterflow_data>(Data);

                    if (result.id != 0)
                    {
                        if (Data != null)
                        {
                            var TKID = Convert.ToInt32(result.id);
                            var Data1 = AJE.obj_waterflow_data.Where(x => x.id == TKID).SingleOrDefault();
                            Data1.status_data = "State";
                            Data1.reject_remark = "";
                            AJE.Entry(Data1).State = System.Data.Entity.EntityState.Modified;
                            AJE.SaveChanges();
                            return Json("Successfully Submitted");
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
        public ActionResult approve_waterflow_data_data(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<waterflow_data>(Data);

                    if (result.id != 0)
                    {
                        if (Data != null)
                        {
                            var TKID = Convert.ToInt32(result.id);
                            var Data1 = AJE.obj_waterflow_data.Where(x => x.id == TKID).SingleOrDefault();
                            Data1.status_data = "Approve";
                            Data1.reject_remark = "";
                            AJE.Entry(Data1).State = System.Data.Entity.EntityState.Modified;
                            AJE.SaveChanges();
                            return Json("Approved Successfully");
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
        public ActionResult reject_waterflow_data_data(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<waterflow_data>(Data);

                    if (result.id != 0)
                    {
                        if (Data != null)
                        {
                            var TKID = Convert.ToInt32(result.id);
                            var Data1 = AJE.obj_waterflow_data.Where(x => x.id == TKID).SingleOrDefault();
                            Data1.status_data = "Reject";
                            Data1.reject_remark = result.reject_remark;
                            AJE.Entry(Data1).State = System.Data.Entity.EntityState.Modified;
                            AJE.SaveChanges();
                            return Json("Rejected Successfully");
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
        public ActionResult quality_data(string id)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();

                    var idd = Convert.ToInt32(id);

                    var Final_data = AJE.obj_water_wq_data.Where(x => x.water_qi_meta_id == idd).OrderByDescending(x => x.data_id).ToList();


                    if (Final_data.Count != 0)
                    {
                        var jsonresult = Json(Final_data, JsonRequestBehavior.AllowGet);
                        jsonresult.MaxJsonLength = int.MaxValue;
                        return jsonresult;
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
        public ActionResult Update_quality_data(string data_id, string ph, string total_hardness_mgl, string alkalinity_mgl, string nitrate_mgl, string fluoride_mgl, string iron_mgl, string chloride, string ec_us_cm, string free_chlorine, string turbudity, string tds, string bacterial_test)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(data_id);
                    var Data = AJE.obj_water_wq_data.Where(x => x.data_id == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        string specialCharlocation = @"@\|-!#$%&?»«@£§€{};<>";
                        foreach (var item in ph)
                        {
                            if (specialCharlocation.Contains(item))
                            {

                                return Json("PH value should be between 4 to 11");
                            }
                        }


                        foreach (var itemc in nitrate_mgl)
                        {
                            if (specialCharlocation.Contains(itemc))
                            {

                                return Json("Nitrate value should be between 0 to 999");
                            }
                        }
                        foreach (var itemd in fluoride_mgl)
                        {
                            if (specialCharlocation.Contains(itemd))
                            {

                                return Json("Fluoride value should be between 0 to 9");
                            }
                        }

                        double pph = Convert.ToDouble(ph);
                        if (3.9 < pph && pph < 11.1)
                        {

                            string sc = ph;
                            if (!sc.Contains('.'))
                            {
                                // If decimal is not present, append ".0"
                                sc += ".0";
                            }

                            string checksc = @"^\d{1,2}(\.\d{1})?$";
                            bool scValid = Regex.IsMatch(sc, checksc);
                            if (scValid)
                            {
                                Data.ph = sc;
                            }
                            else
                            {
                                return Json("PH value should be between 4 to 11");

                            }

                        }
                        else
                        {


                            return Json("PH value should be between 4 to 11");

                        }
                        var alkalinity_mglval = alkalinity_mgl;
                        if (alkalinity_mglval != null && alkalinity_mglval != "")
                        {
                            foreach (var itemb in alkalinity_mgl)
                            {
                                if (specialCharlocation.Contains(itemb))
                                {

                                    return Json("Alkalinity value should be between 0 to 9999");
                                }
                            }
                            double amgl = Convert.ToDouble(alkalinity_mgl);
                            if (0 <= amgl && amgl < 9999.1)
                            {

                                string sca = alkalinity_mgl;
                                if (!sca.Contains('.'))
                                {
                                    // If decimal is not present, append ".0"
                                    sca += ".0";
                                }
                                string checksc = @"^\d{1,4}(\.\d{1})?$";
                                bool scValid = Regex.IsMatch(sca, checksc);
                                if (scValid)
                                {
                                    Data.alkalinity_mgl = sca;
                                }
                                else
                                {
                                    return Json("Alkalinity value should be between 0 to 9999");
                                }
                            }
                            else
                            {
                                return Json("Alkalinity value should be between 0 to 9999");

                            }
                        }
                        else
                        {
                            Data.alkalinity_mgl = alkalinity_mgl;
                        }
                        var total_hardness_mglval = total_hardness_mgl;
                        if (total_hardness_mglval != null && total_hardness_mglval != "")
                        {
                            foreach (var itema in total_hardness_mgl)
                            {
                                if (specialCharlocation.Contains(itema))
                                {

                                    return Json("Hardness value should be between 0 to 9999");
                                }
                            }
                            double th = Convert.ToDouble(total_hardness_mgl);
                            if (0 <= th && th < 9999.1)
                            {

                                string scb = total_hardness_mgl;
                                if (!scb.Contains('.'))
                                {
                                    // If decimal is not present, append ".0"
                                    scb += ".0";
                                }
                                string checksc = @"^\d{1,4}(\.\d{1})?$";
                                bool scValid = Regex.IsMatch(scb, checksc);
                                if (scValid)
                                {
                                    Data.total_hardness_mgl = scb;
                                }
                                else
                                {


                                    return Json("Hardness value should be between 0 to 9999");

                                }
                            }
                            else
                            {


                                return Json("Hardness value should be between 0 to 9999");

                            }
                        }
                        else
                        {
                            Data.total_hardness_mgl = total_hardness_mgl;
                        }

                        double nigl = Convert.ToDouble(nitrate_mgl);
                        if (0 <= nigl && nigl < 999.1)
                        {

                            string scc = nitrate_mgl;
                            if (!scc.Contains('.'))
                            {
                                // If decimal is not present, append ".0"
                                scc += ".0";
                            }
                            string checksc = @"^\d{1,3}(\.\d{1})?$";
                            bool scValid = Regex.IsMatch(scc, checksc);
                            if (scValid)
                            {
                                Data.nitrate_mgl = scc;
                            }
                            else
                            {


                                return Json("Nitrate value should be between 0 to 999");

                            }
                        }
                        else
                        {


                            return Json("Nitrate value should be between 0 to 999");

                        }

                        double flgl = Convert.ToDouble(fluoride_mgl);
                        if (0 <= flgl && flgl < 9.1)
                        {

                            string scd = fluoride_mgl;
                            if (!scd.Contains('.'))
                            {
                                // If decimal is not present, append ".0"
                                scd += ".0";
                            }
                            string checksc = @"^\d{1}(\.\d{1})?$";
                            bool scValid = Regex.IsMatch(scd, checksc);
                            if (scValid)
                            {
                                Data.fluoride_mgl = scd;
                            }
                            else
                            {


                                return Json("Fluoride value should be between 0 to 9");

                            }
                        }
                        else
                        {


                            return Json("Fluoride value should be between 0 to 9");

                        }
                        var ironval = iron_mgl;
                        if (ironval != null && ironval != "")
                        {
                            foreach (var iteme in iron_mgl)
                            {
                                if (specialCharlocation.Contains(iteme))
                                {

                                    return Json("Iron value should be between 0 to 9");
                                }
                            }
                            double irongl = Convert.ToDouble(iron_mgl);
                            if (0 <= irongl && irongl < 9.1)
                            {

                                string sce = iron_mgl;
                                if (!sce.Contains('.'))
                                {
                                    // If decimal is not present, append ".0"
                                    sce += ".0";
                                }
                                string checksc = @"^\d{1}(\.\d{1})?$";
                                bool scValid = Regex.IsMatch(sce, checksc);
                                if (scValid)
                                {
                                    Data.iron_mgl = sce;
                                }
                                else
                                {


                                    return Json("Iron value should be between 0 to 9");

                                }
                            }
                            else
                            {


                                return Json("Iron value should be between 0 to 9");

                            }
                        }
                        else
                        {
                            Data.iron_mgl = iron_mgl;
                        }
                        var ec_us_cmval = ec_us_cm;
                        if (ec_us_cmval != null && ec_us_cmval != "")
                        {
                            foreach (var itemg in ec_us_cm)
                            {
                                if (specialCharlocation.Contains(itemg))
                                {

                                    return Json("EC value should be between 99 to 99999");
                                }
                            }
                            double ec_us_cmgl = Convert.ToDouble(ec_us_cm);
                            if (88.9 < ec_us_cmgl && ec_us_cmgl < 99999.1)
                            {

                                string scf = ec_us_cm;
                                if (!scf.Contains('.'))
                                {
                                    // If decimal is not present, append ".0"
                                    scf += ".0";
                                }
                                string checksc = @"^\d{1,5}(\.\d{1})?$";
                                bool scValid = Regex.IsMatch(scf, checksc);
                                if (scValid)
                                {
                                    Data.ec_us_cm = scf;
                                }
                                else
                                {


                                    return Json("EC value should be between 99 to 99999");

                                }
                            }
                            else
                            {


                                return Json("EC value should be between 99 to 99999");

                            }
                        }
                        else
                        {
                            Data.ec_us_cm = ec_us_cm;
                        }
                        var chlorideval = chloride;
                        if (chlorideval != null && chlorideval != "")
                        {
                            foreach (var itemf in chloride)
                            {
                                if (specialCharlocation.Contains(itemf))
                                {

                                    return Json("Chloride value should be between 0 to 99999");
                                }
                            }
                            double chloridegl = Convert.ToDouble(chloride);
                            if (0 <= chloridegl && chloridegl < 99999.1)
                            {

                                string scg = chloride;
                                if (!scg.Contains('.'))
                                {
                                    // If decimal is not present, append ".0"
                                    scg += ".0";
                                }
                                string checksc = @"^\d{1,5}(\.\d{1})?$";
                                bool scValid = Regex.IsMatch(scg, checksc);
                                if (scValid)
                                {
                                    Data.chloride = scg;
                                }
                                else
                                {


                                    return Json("Chloride value should be between 0 to 99999");

                                }
                            }
                            else
                            {


                                return Json("Chloride value should be between 0 to 99999");

                            }
                        }
                        else
                        {
                            Data.chloride = chloride;
                        }
                        var free_chlorineval = free_chlorine;
                        if (free_chlorineval != null && free_chlorineval != "")
                        {
                            foreach (var itemh in free_chlorine)
                            {
                                if (specialCharlocation.Contains(itemh))
                                {

                                    return Json("Chlorine value should be between 0 to 10");
                                }
                            }
                            double free_chlorinegl = Convert.ToDouble(free_chlorine);
                            if (0 <= free_chlorinegl && free_chlorinegl < 10.1)
                            {

                                string sch = free_chlorine;
                                if (!sch.Contains('.'))
                                {
                                    // If decimal is not present, append ".0"
                                    sch += ".0";
                                }
                                string checksc = @"^\d{1,2}(\.\d{1})?$";
                                bool scValid = Regex.IsMatch(sch, checksc);
                                if (scValid)
                                {
                                    Data.free_chlorine = sch;
                                }
                                else
                                {


                                    return Json("Chlorine value should be between 0 to 10");

                                }
                            }
                            else
                            {


                                return Json("Chlorine value should be between 0 to 10");

                            }
                        }
                        else
                        {
                            Data.free_chlorine = free_chlorine;
                        }
                        var turbudityval = turbudity;
                        if (turbudityval != null && turbudityval != "")
                        {
                            foreach (var itemi in turbudity)
                            {
                                if (specialCharlocation.Contains(itemi))
                                {

                                    return Json("Turbudity value should be between 0 to 99");
                                }
                            }
                            double turbuditygl = Convert.ToDouble(turbudity);
                            //if (turbuditygl < 0 || turbuditygl > 99)
                            if (0 <= turbuditygl && turbuditygl < 99.1)
                            {

                                string sci = turbudity;
                                if (!sci.Contains('.'))
                                {
                                    // If decimal is not present, append ".0"
                                    sci += ".0";
                                }
                                string checksc = @"^\d{1,2}(\.\d{1})?$";
                                bool scValid = Regex.IsMatch(sci, checksc);
                                if (scValid)
                                {
                                    Data.turbudity = sci;
                                }
                                else
                                {


                                    return Json("Turbudity value should be between 0 to 99");

                                }
                            }
                            else
                            {


                                return Json("Turbudity value should be between 0 to 99");

                            }
                        }
                        else
                        {
                            Data.turbudity = turbudity;
                        }
                        var tdsval = tds;
                        if (tdsval != null && tdsval != "")
                        {
                            foreach (var itemj in tds)
                            {
                                if (specialCharlocation.Contains(itemj))
                                {

                                    return Json("TDS value should be between 0 to 99999");
                                }
                            }
                            double tdsvalgl = Convert.ToDouble(tds);
                            if (0 <= tdsvalgl && tdsvalgl < 99999.1)
                            {

                                string scj = tds;
                                if (!scj.Contains('.'))
                                {
                                    // If decimal is not present, append ".0"
                                    scj += ".0";
                                }
                                string checksc = @"^\d{1,5}(\.\d{1})?$";
                                bool scValid = Regex.IsMatch(scj, checksc);
                                if (scValid)
                                {
                                    Data.tds = scj;
                                }
                                else
                                {


                                    return Json("TDS value should be between 0 to 99999");

                                }
                            }
                            else
                            {


                                return Json("TDS value should be between 0 to 99999");

                            }
                        }
                        else
                        {
                            Data.tds = tds;
                        }

                        var bacterial_testval = bacterial_test;
                        if (bacterial_testval != null && bacterial_testval != "")
                        {
                            string OwnerNamecheck = bacterial_test;
                            Regex r = new Regex("^[a-zA-Z ]*$");
                            if (r.IsMatch(OwnerNamecheck))
                            {
                                Data.bacterial_test = bacterial_test;
                            }
                            else
                            {
                                return Json("Bacterial Test is Not Correct");
                            }
                        }
                        else
                        {
                            Data.bacterial_test = bacterial_test;
                        }



                        AJE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = AJE.SaveChanges();
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
        public ActionResult Delete_quality_data(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<water_wq_data>(Data);

                    if (result.data_id != 0)
                    {
                        if (Data != null)
                        {
                            var TKID = Convert.ToInt32(result.data_id);
                            var Data2 = AJE.obj_water_wq_data.Where(x => x.data_id == TKID).SingleOrDefault();

                            water_wq_data_delete obj = new water_wq_data_delete();
                            obj.ph = Data2.ph;
                            obj.chloride = Data2.chloride;
                            obj.free_chlorine = Data2.free_chlorine;
                            obj.turbudity = Data2.turbudity;
                            obj.total_hardness_mgl = Data2.total_hardness_mgl;
                            obj.alkalinity_mgl = Data2.alkalinity_mgl;
                            obj.nitrate_mgl = Data2.nitrate_mgl;
                            obj.fluoride_mgl = Data2.fluoride_mgl;
                            obj.iron_mgl = Data2.iron_mgl;
                            obj.arsenic_mgl = Data2.arsenic_mgl;
                            obj.ec_us_cm = Data2.ec_us_cm;
                            obj.tds = Data2.tds;
                            obj.bacterial_test = Data2.bacterial_test;
                            obj.email = Data2.email;
                            obj.status_data = Data2.status_data;
                            obj.reject_remark = Data2.reject_remark;
                            obj.deleted_email = Session["Email"].ToString();
                            obj.deleted_time = DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss");
                            obj.tableid = Data2.data_id;
                            obj.entry_time_data = Data2.entry_time_data;
                            AJE.obj_water_wq_data_delete.Add(obj);
                            AJE.SaveChanges();

                            AJE.Entry(Data2).State = EntityState.Deleted;
                            AJE.SaveChanges();
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
        public ActionResult submit_spmu_quality_data(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<water_wq_data>(Data);

                    if (result.data_id != 0)
                    {
                        if (Data != null)
                        {
                            var TKID = Convert.ToInt32(result.data_id);
                            var Data1 = AJE.obj_water_wq_data.Where(x => x.data_id == TKID).SingleOrDefault();
                            Data1.status_data = "State";
                            Data1.reject_remark = "";
                            AJE.Entry(Data1).State = System.Data.Entity.EntityState.Modified;
                            AJE.SaveChanges();
                            return Json("Successfully Submitted");
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
        public ActionResult approve_quality_data(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<water_wq_data>(Data);

                    if (result.data_id != 0)
                    {
                        if (Data != null)
                        {
                            var TKID = Convert.ToInt32(result.data_id);
                            var Data1 = AJE.obj_water_wq_data.Where(x => x.data_id == TKID).SingleOrDefault();
                            Data1.status_data = "Approve";
                            Data1.reject_remark = "";
                            AJE.Entry(Data1).State = System.Data.Entity.EntityState.Modified;
                            AJE.SaveChanges();
                            return Json("Approved Successfully");
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
        public ActionResult reject_quality_data(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<water_wq_data>(Data);

                    if (result.data_id != 0)
                    {
                        if (Data != null)
                        {
                            var TKID = Convert.ToInt32(result.data_id);
                            var Data1 = AJE.obj_water_wq_data.Where(x => x.data_id == TKID).SingleOrDefault();
                            Data1.status_data = "Reject";
                            Data1.reject_remark = result.reject_remark;
                            AJE.Entry(Data1).State = System.Data.Entity.EntityState.Modified;
                            AJE.SaveChanges();
                            return Json("Rejected Successfully");
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
        public ActionResult village_name(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<vw_block_gp_villagename>(Data);

                    if (result.gram_panchayat_name != null)
                    {

                        var Data1 = AJE.obj_vw_block_gp_villagename.Where(x => x.gram_panchayat_name == result.gram_panchayat_name).ToList();
                        return Json(Data1, JsonRequestBehavior.AllowGet);
                    }
                    else
                    {
                        return Json("Not Data Found", JsonRequestBehavior.AllowGet);
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
        public ActionResult Update_geo(string id, string latitude, string longitude, string village, string locationdetail, string storagecapacity, string nooffillings, string typeofwell, string well_type_other)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = AJE.obj_geo_new.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        string asaad = village;
                        string specialChar = @"@\|!#$%&()=?»«@£§€{}.;'<>,";
                        //foreach (var item in asaad)
                        //{
                        //    if (specialChar.Contains(item))
                        //    {
                        //        return Json("Villiage Name Not Correct");
                        //    }
                        //}
                        string location = locationdetail;
                        string specialCharlocation = @"@\|!#$%&?»«@£§€{}.;<>";
                        foreach (var item in location)
                        {
                            if (specialCharlocation.Contains(item))
                            {
                                return Json("Location Details Not Correct");
                            }
                        }
                        Data.latitude = latitude;
                        Data.longitude = longitude;
                        Data.village = village;
                        Data.locationdetail = locationdetail;
                        Data.typeofstructure = typeofwell;

                        if (typeofwell == "Others")
                        {
                            foreach (var item in well_type_other)
                            {
                                if (specialCharlocation.Contains(item))
                                {
                                    return Json("Other Type of structure is Not Correct");
                                }
                            }
                            Data.others = well_type_other;
                        }
                        else
                        {
                            Data.others = "";
                        }

                        string sc = storagecapacity;
                        string checksc = @"^\d{1,3}(\.\d{1,7})?$";
                        bool scValid = Regex.IsMatch(sc, checksc);
                        if (scValid)
                        {
                            Data.storagecapacity = storagecapacity;
                        }
                        else
                        {
                            return Json("Storage Capacity is Not Correct");
                        }

                        var nooffii = nooffillings;
                        if (nooffii == "0" || nooffii == "1" || nooffii == "2" || nooffii == "3")
                        {
                            Data.nooffillings = nooffillings;
                        }
                        else
                        {
                            return Json("No. of fillings should be between 0 to 3");
                        }

                        AJE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = AJE.SaveChanges();
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
                    abhy_tbl_error error_data = new abhy_tbl_error();
                    error_data.error_test = ex.Message;
                    error_data.user_email = ex.StackTrace;
                    error_data.user_type = "Geotagging update";
                    error_data.error_count = "1";
                    ABE.obj_abhy_tbl_error.Add(error_data);
                    ABE.SaveChanges();
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
        public ActionResult totalFetch_dwlr(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<Pagenum>(Data);


                    var State = result.statename == "0" ? null : result.statename;
                    var Dist = result.districtname == "0" ? null : result.districtname;
                    var Block = result.blockname == "0" ? null : result.blockname;
                    var Gram = result.gpname == "0" ? null : result.gpname;
                    var year = result.year == "0" ? null : result.year;
                    var month = result.month == "0" ? null : result.month;
                    var PageNumber = result.PageNumber;

                    int gp_count = 0;
                    List<vw_dwlr_meta_data> Final_meta_data = new List<vw_dwlr_meta_data>();

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        Final_meta_data = AJE.obj_vw_dwlr_meta_data.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.fyyear == year && x.fymonth == month).OrderByDescending(c => c.id).ToList();
                        gp_count = Final_meta_data.GroupBy(c => c.gp).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
                    {
                        Final_meta_data = AJE.obj_vw_dwlr_meta_data.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.fyyear == year).OrderByDescending(c => c.id).ToList();
                        gp_count = Final_meta_data.GroupBy(c => c.gp).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        Final_meta_data = AJE.obj_vw_dwlr_meta_data.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram).OrderByDescending(c => c.id).ToList();
                        gp_count = Final_meta_data.GroupBy(c => c.gp).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        Final_meta_data = AJE.obj_vw_dwlr_meta_data.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year && x.fymonth == month).OrderByDescending(c => c.id).ToList();
                        gp_count = Final_meta_data.GroupBy(c => c.gp).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
                    {
                        Final_meta_data = AJE.obj_vw_dwlr_meta_data.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year).OrderByDescending(c => c.id).ToList();
                        gp_count = Final_meta_data.GroupBy(c => c.gp).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        Final_meta_data = AJE.obj_vw_dwlr_meta_data.Where(x => x.state == State && x.district == Dist && x.block == Block).OrderByDescending(c => c.id).ToList();
                        gp_count = Final_meta_data.GroupBy(c => c.gp).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        Final_meta_data = AJE.obj_vw_dwlr_meta_data.Where(x => x.state == State && x.district == Dist && x.fyyear == year && x.fymonth == month).OrderByDescending(c => c.id).ToList();
                        gp_count = Final_meta_data.GroupBy(c => c.gp).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
                    {
                        Final_meta_data = AJE.obj_vw_dwlr_meta_data.Where(x => x.state == State && x.district == Dist && x.fyyear == year).OrderByDescending(c => c.id).ToList();
                        gp_count = Final_meta_data.GroupBy(c => c.gp).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        Final_meta_data = AJE.obj_vw_dwlr_meta_data.Where(x => x.state == State && x.district == Dist).OrderByDescending(c => c.id).ToList();
                        gp_count = Final_meta_data.GroupBy(c => c.gp).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        Final_meta_data = AJE.obj_vw_dwlr_meta_data.Where(x => x.state == State && x.fyyear == year && x.fymonth == month).OrderByDescending(c => c.id).ToList();
                        gp_count = Final_meta_data.GroupBy(c => c.gp).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
                    {
                        Final_meta_data = AJE.obj_vw_dwlr_meta_data.Where(x => x.state == State && x.fyyear == year).OrderByDescending(c => c.id).ToList();
                        gp_count = Final_meta_data.GroupBy(c => c.gp).ToList().Count();
                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        Final_meta_data = AJE.obj_vw_dwlr_meta_data.Where(x => x.state == State).OrderByDescending(c => c.id).ToList();
                        gp_count = Final_meta_data.GroupBy(c => c.gp).ToList().Count();
                    }

                    if (Final_meta_data.Count != 0)
                    {
                        var uniqueGpNames = Final_meta_data.GroupBy(c => c.Well_ID).Select(g => g.Key).ToList();
                        var updatedMetaData = new List<vw_dwlr_meta_data>();
                        foreach (var gpName in uniqueGpNames)
                        {

                            var matchedData = AJE.obj_vw_dwlr_meta_data.FirstOrDefault(x => x.Well_ID == gpName);
                            if (matchedData != null)
                            {
                                updatedMetaData.Add(matchedData);
                            }
                        }

                        var exetotal = updatedMetaData.Count();
                        var Totalpages = Math.Ceiling(updatedMetaData.Count() / 100.0);
                        var jsonresult = Json(exetotal + "," + Totalpages + "," + gp_count, JsonRequestBehavior.AllowGet);
                        jsonresult.MaxJsonLength = int.MaxValue;
                        return jsonresult;
                    }
                    else
                    {
                        var jsonresult = Json(0 + "," + 0 + "," + 0, JsonRequestBehavior.AllowGet);
                        jsonresult.MaxJsonLength = int.MaxValue;
                        return jsonresult;
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
        public ActionResult data_dwlr(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {

                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<Pagenum>(Data);

                    var State = result.statename == "0" ? null : result.statename;
                    var Dist = result.districtname == "0" ? null : result.districtname;
                    var Block = result.blockname == "0" ? null : result.blockname;
                    var Gram = result.gpname == "0" ? null : result.gpname;
                    var year = result.year == "0" ? null : result.year;
                    var month = result.month == "0" ? null : result.month;
                    var PageNumber = result.PageNumber;
                    var StateOfficer = Session["Officer"].ToString();

                    List<vw_dwlr_meta_data> ddetails = new List<vw_dwlr_meta_data>();
                    List<vw_dwlr_meta_data> ddetails_meta_data = new List<vw_dwlr_meta_data>();
                    List<vw_dwlr_meta_data> gp_count = new List<vw_dwlr_meta_data>();
                    List<dynamic> ddetails_new = new List<dynamic>();

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        gp_count = AJE.obj_vw_dwlr_meta_data.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.fyyear == year && x.fymonth == month).OrderByDescending(c => c.id).ToList();
                        var uniqueGpNames = gp_count.GroupBy(c => c.Well_ID).Select(g => g.Key).ToList();
                        foreach (var gpName in uniqueGpNames)
                        {
                            var matchedData = AJE.obj_vw_dwlr_meta_data.FirstOrDefault(x => x.Well_ID == gpName);

                            if (matchedData != null)
                            {
                                ddetails_meta_data.Add(matchedData);
                            }
                        }

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
                    {
                        gp_count = AJE.obj_vw_dwlr_meta_data.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.fyyear == year).OrderByDescending(c => c.id).ToList();
                        var uniqueGpNames = gp_count.GroupBy(c => c.Well_ID).Select(g => g.Key).ToList();
                        foreach (var gpName in uniqueGpNames)
                        {
                            var matchedData = AJE.obj_vw_dwlr_meta_data.FirstOrDefault(x => x.Well_ID == gpName);

                            if (matchedData != null)
                            {
                                ddetails_meta_data.Add(matchedData);
                            }
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        gp_count = AJE.obj_vw_dwlr_meta_data.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram).OrderByDescending(c => c.id).ToList();
                        var uniqueGpNames = gp_count.GroupBy(c => c.Well_ID).Select(g => g.Key).ToList();
                        foreach (var gpName in uniqueGpNames)
                        {
                            var matchedData = AJE.obj_vw_dwlr_meta_data.FirstOrDefault(x => x.Well_ID == gpName);

                            if (matchedData != null)
                            {
                                ddetails_meta_data.Add(matchedData);
                            }
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        gp_count = AJE.obj_vw_dwlr_meta_data.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year && x.fymonth == month).OrderByDescending(c => c.id).ToList();
                        var uniqueGpNames = gp_count.GroupBy(c => c.Well_ID).Select(g => g.Key).ToList();
                        foreach (var gpName in uniqueGpNames)
                        {
                            var matchedData = AJE.obj_vw_dwlr_meta_data.FirstOrDefault(x => x.Well_ID == gpName);

                            if (matchedData != null)
                            {
                                ddetails_meta_data.Add(matchedData);
                            }
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
                    {
                        gp_count = AJE.obj_vw_dwlr_meta_data.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year).OrderByDescending(c => c.id).ToList();
                        var uniqueGpNames = gp_count.GroupBy(c => c.Well_ID).Select(g => g.Key).ToList();
                        foreach (var gpName in uniqueGpNames)
                        {
                            var matchedData = AJE.obj_vw_dwlr_meta_data.FirstOrDefault(x => x.Well_ID == gpName);

                            if (matchedData != null)
                            {
                                ddetails_meta_data.Add(matchedData);
                            }
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        gp_count = AJE.obj_vw_dwlr_meta_data.Where(x => x.state == State && x.district == Dist && x.block == Block).OrderByDescending(c => c.id).ToList();
                        var uniqueGpNames = gp_count.GroupBy(c => c.Well_ID).Select(g => g.Key).ToList();
                        foreach (var gpName in uniqueGpNames)
                        {
                            var matchedData = AJE.obj_vw_dwlr_meta_data.FirstOrDefault(x => x.Well_ID == gpName);

                            if (matchedData != null)
                            {
                                ddetails_meta_data.Add(matchedData);
                            }
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        gp_count = AJE.obj_vw_dwlr_meta_data.Where(x => x.state == State && x.district == Dist && x.fyyear == year && x.fymonth == month).OrderByDescending(c => c.id).ToList();
                        var uniqueGpNames = gp_count.GroupBy(c => c.Well_ID).Select(g => g.Key).ToList();
                        foreach (var gpName in uniqueGpNames)
                        {
                            var matchedData = AJE.obj_vw_dwlr_meta_data.FirstOrDefault(x => x.Well_ID == gpName);

                            if (matchedData != null)
                            {
                                ddetails_meta_data.Add(matchedData);
                            }
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
                    {
                        gp_count = AJE.obj_vw_dwlr_meta_data.Where(x => x.state == State && x.district == Dist && x.fyyear == year).OrderByDescending(c => c.id).ToList();
                        var uniqueGpNames = gp_count.GroupBy(c => c.Well_ID).Select(g => g.Key).ToList();
                        foreach (var gpName in uniqueGpNames)
                        {
                            var matchedData = AJE.obj_vw_dwlr_meta_data.FirstOrDefault(x => x.Well_ID == gpName);

                            if (matchedData != null)
                            {
                                ddetails_meta_data.Add(matchedData);
                            }
                        }
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        gp_count = AJE.obj_vw_dwlr_meta_data.Where(x => x.state == State && x.district == Dist).OrderByDescending(c => c.id).ToList();
                        var uniqueGpNames = gp_count.GroupBy(c => c.Well_ID).Select(g => g.Key).ToList();
                        foreach (var gpName in uniqueGpNames)
                        {
                            var matchedData = AJE.obj_vw_dwlr_meta_data.FirstOrDefault(x => x.Well_ID == gpName);

                            if (matchedData != null)
                            {
                                ddetails_meta_data.Add(matchedData);
                            }
                        }
                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                    {
                        gp_count = AJE.obj_vw_dwlr_meta_data.Where(x => x.state == State && x.fyyear == year && x.fymonth == month).OrderByDescending(c => c.id).ToList();
                        var uniqueGpNames = gp_count.GroupBy(c => c.Well_ID).Select(g => g.Key).ToList();
                        foreach (var gpName in uniqueGpNames)
                        {
                            var matchedData = AJE.obj_vw_dwlr_meta_data.FirstOrDefault(x => x.Well_ID == gpName);

                            if (matchedData != null)
                            {
                                ddetails_meta_data.Add(matchedData);
                            }
                        }
                    }
                    else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
                    {
                        gp_count = AJE.obj_vw_dwlr_meta_data.Where(x => x.state == State && x.fyyear == year).OrderByDescending(c => c.id).ToList();
                        var uniqueGpNames = gp_count.GroupBy(c => c.Well_ID).Select(g => g.Key).ToList();
                        foreach (var gpName in uniqueGpNames)
                        {
                            var matchedData = AJE.obj_vw_dwlr_meta_data.FirstOrDefault(x => x.Well_ID == gpName);

                            if (matchedData != null)
                            {
                                ddetails_meta_data.Add(matchedData);
                            }
                        }
                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        gp_count = AJE.obj_vw_dwlr_meta_data.Where(x => x.state == State).OrderByDescending(c => c.id).ToList();
                        var uniqueGpNames = gp_count.GroupBy(c => c.Well_ID).Select(g => g.Key).ToList();
                        foreach (var gpName in uniqueGpNames)
                        {
                            var matchedData = AJE.obj_vw_dwlr_meta_data.FirstOrDefault(x => x.Well_ID == gpName);

                            if (matchedData != null)
                            {
                                ddetails_meta_data.Add(matchedData);
                            }
                        }
                    }
                    if (ddetails_meta_data.Count != 0)
                    {
                        ViewBag.Totalpages = Math.Ceiling(ddetails_meta_data.Count() / 100.0);
                        Session["PageNumber"] = PageNumber;
                        ddetails_meta_data = ddetails_meta_data.Skip((PageNumber - 1) * 100).Take(100).OrderByDescending(x => x.id).ToList();

                        var jsonresult = Json(ddetails_meta_data, JsonRequestBehavior.AllowGet);
                        jsonresult.MaxJsonLength = int.MaxValue;
                        return jsonresult;


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
        public ActionResult dwlr_data(string id)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    int idd = Convert.ToInt32(id);
                    var getwellid = AJE.obj_vw_dwlr_meta_data.Where(x => x.data_id == idd).FirstOrDefault();
                    List<vw_dwlr_meta_data> oob = new List<vw_dwlr_meta_data>();
                    if (getwellid != null)
                    {
                        var well = getwellid.Well_ID;
                        var Final_data = AJE.obj_vw_dwlr_meta_data.Where(x => x.Well_ID == well).OrderByDescending(x => x.datetime).ToList();
                        var uniqueGpNames = Final_data.GroupBy(c => c.date).Select(g => g.Key).ToList();
                        foreach (var gpName in uniqueGpNames)
                        {
                            var matchedData = AJE.obj_vw_dwlr_meta_data.OrderByDescending(x => x.datetime).FirstOrDefault(x => x.date == gpName && x.Well_ID == well);

                            if (matchedData != null)
                            {
                                oob.Add(matchedData);
                            }
                        }
                        var jsonresult = Json(oob, JsonRequestBehavior.AllowGet);
                        jsonresult.MaxJsonLength = int.MaxValue;
                        return jsonresult;
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

        public ActionResult dwlr_getting()
        {

            if (Session["UserId"] != null)
            {
                try
                {

                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = "";
                    var Dist = "";
                    var Block = "";
                    var Gram = "";
                    var year = "";
                    var month = "";
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
                    if (Session["year"] != null)
                    {
                        year = Session["year"].ToString();
                    }
                    if (Session["month"] != null)
                    {
                        month = Session["month"].ToString();
                    }

                    List<vw_dwlr_meta_data> Final_data_data = new List<vw_dwlr_meta_data>();
                    List<vw_dwlr_meta_data> oob = new List<vw_dwlr_meta_data>();
                    if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(Dist) && !string.IsNullOrEmpty(Block) && !string.IsNullOrEmpty(Gram) && !string.IsNullOrEmpty(year) && !string.IsNullOrEmpty(month))
                    {
                        Final_data_data = AJE.obj_vw_dwlr_meta_data.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.fyyear == year && x.fymonth == month).OrderByDescending(c => c.Well_ID).ToList();
                    }
                    else if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(Dist) && !string.IsNullOrEmpty(Block) && !string.IsNullOrEmpty(Gram) && !string.IsNullOrEmpty(year))
                    {
                        Final_data_data = AJE.obj_vw_dwlr_meta_data.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.fyyear == year).OrderByDescending(c => c.Well_ID).ToList();
                    }
                    else if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(Dist) && !string.IsNullOrEmpty(Block) && !string.IsNullOrEmpty(Gram))
                    {
                        Final_data_data = AJE.obj_vw_dwlr_meta_data.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram).OrderByDescending(c => c.Well_ID).ToList();
                    }
                    else if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(Dist) && !string.IsNullOrEmpty(Block) && !string.IsNullOrEmpty(year) && !string.IsNullOrEmpty(month))
                    {
                        Final_data_data = AJE.obj_vw_dwlr_meta_data.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year && x.fymonth == month).OrderByDescending(c => c.Well_ID).ToList();
                    }
                    else if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(Dist) && !string.IsNullOrEmpty(Block) && !string.IsNullOrEmpty(year))
                    {
                        Final_data_data = AJE.obj_vw_dwlr_meta_data.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year).OrderByDescending(c => c.Well_ID).ToList();
                    }
                    else if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(Dist) && !string.IsNullOrEmpty(Block))
                    {
                        Final_data_data = AJE.obj_vw_dwlr_meta_data.Where(x => x.state == State && x.district == Dist && x.block == Block).OrderByDescending(c => c.Well_ID).ToList();
                    }
                    else if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(Dist) && !string.IsNullOrEmpty(year) && !string.IsNullOrEmpty(month))
                    {
                        Final_data_data = AJE.obj_vw_dwlr_meta_data.Where(x => x.state == State && x.district == Dist && x.fyyear == year && x.fymonth == month).OrderByDescending(c => c.Well_ID).ToList();
                    }
                    else if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(Dist) && !string.IsNullOrEmpty(year))
                    {
                        Final_data_data = AJE.obj_vw_dwlr_meta_data.Where(x => x.state == State && x.district == Dist && x.fyyear == year).OrderByDescending(c => c.Well_ID).ToList();
                    }
                    else if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(Dist))
                    {
                        Final_data_data = AJE.obj_vw_dwlr_meta_data.Where(x => x.state == State && x.district == Dist).OrderByDescending(c => c.Well_ID).ToList();
                    }
                    else if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(year) && !string.IsNullOrEmpty(month))
                    {
                        Final_data_data = AJE.obj_vw_dwlr_meta_data.Where(x => x.state == State && x.fyyear == year && x.fymonth == month).OrderByDescending(c => c.Well_ID).ToList();
                    }
                    else if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(year))
                    {
                        Final_data_data = AJE.obj_vw_dwlr_meta_data.Where(x => x.state == State && x.fyyear == year).OrderByDescending(c => c.Well_ID).ToList();
                    }
                    else if (!string.IsNullOrEmpty(State))
                    {
                        Final_data_data = AJE.obj_vw_dwlr_meta_data.Where(x => x.state == State).OrderByDescending(c => c.Well_ID).ToList();
                    }
                    var uniqueGpNames = Final_data_data.GroupBy(c => new { c.Well_ID, c.date }).Select(g => g.Key).ToList();

                    foreach (var gpName in uniqueGpNames)
                    {
                        var matchedData = AJE.obj_vw_dwlr_meta_data.Where(x => x.Well_ID == gpName.Well_ID && x.date == gpName.date).OrderByDescending(x => x.datetime).FirstOrDefault();
                        if (matchedData != null)
                        {
                            oob.Add(matchedData);
                        }
                    }

                    if (oob.Count != 0)
                    {
                        var jsonresult = Json(oob, JsonRequestBehavior.AllowGet);
                        jsonresult.MaxJsonLength = int.MaxValue;
                        return jsonresult;
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
        public ActionResult dwlrexcel(string state1, string district1, string block01, string gp1, string year1, string month1)
        {
            try
            {
                var State = state1 == "0" ? null : state1;
                var Dist = district1 == "0" ? null : district1;
                var Block = block01 == "0" ? null : block01;
                var Gram = gp1 == "0" ? null : gp1;
                var year = year1 == "0" ? null : year1;
                var month = month1 == "0" ? null : month1;
                //var State = state1;
                //var Dist = district1;
                //var Block = block01;
                //var Gram = gp1;
                //var year = year1;
                //var month = month1;

                List<vw_dwlr_meta_data> Final_data_data = new List<vw_dwlr_meta_data>();

                if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(Dist) && !string.IsNullOrEmpty(Block) && !string.IsNullOrEmpty(Gram) && !string.IsNullOrEmpty(year) && !string.IsNullOrEmpty(month))
                {
                    Final_data_data = AJE.obj_vw_dwlr_meta_data.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.fyyear == year && x.fymonth == month).OrderByDescending(c => c.Well_ID).ThenByDescending(c=>c.datetime).ToList();
                }
                else if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(Dist) && !string.IsNullOrEmpty(Block) && !string.IsNullOrEmpty(Gram) && !string.IsNullOrEmpty(year))
                {
                    Final_data_data = AJE.obj_vw_dwlr_meta_data.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.fyyear == year).OrderByDescending(c => c.Well_ID).ThenByDescending(c => c.datetime).ToList();
                }
                else if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(Dist) && !string.IsNullOrEmpty(Block) && !string.IsNullOrEmpty(Gram))
                {
                    Final_data_data = AJE.obj_vw_dwlr_meta_data.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram).OrderByDescending(c => c.Well_ID).ThenByDescending(c => c.datetime).ToList();
                }
                else if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(Dist) && !string.IsNullOrEmpty(Block) && !string.IsNullOrEmpty(year) && !string.IsNullOrEmpty(month))
                {
                    Final_data_data = AJE.obj_vw_dwlr_meta_data.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year && x.fymonth == month).OrderByDescending(c => c.Well_ID).ThenByDescending(c => c.datetime).ToList();
                }
                else if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(Dist) && !string.IsNullOrEmpty(Block) && !string.IsNullOrEmpty(year))
                {
                    Final_data_data = AJE.obj_vw_dwlr_meta_data.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fyyear == year).OrderByDescending(c => c.Well_ID).ThenByDescending(c => c.datetime).ToList();
                }
                else if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(Dist) && !string.IsNullOrEmpty(Block))
                {
                    Final_data_data = AJE.obj_vw_dwlr_meta_data.Where(x => x.state == State && x.district == Dist && x.block == Block).OrderByDescending(c => c.Well_ID).ThenByDescending(c => c.datetime).ToList();
                }
                else if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(Dist) && !string.IsNullOrEmpty(year) && !string.IsNullOrEmpty(month))
                {
                    Final_data_data = AJE.obj_vw_dwlr_meta_data.Where(x => x.state == State && x.district == Dist && x.fyyear == year && x.fymonth == month).OrderByDescending(c => c.Well_ID).ThenByDescending(c => c.datetime).ToList();
                }
                else if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(Dist) && !string.IsNullOrEmpty(year))
                {
                    Final_data_data = AJE.obj_vw_dwlr_meta_data.Where(x => x.state == State && x.district == Dist && x.fyyear == year).OrderByDescending(c => c.Well_ID).ThenByDescending(c => c.datetime).ToList();
                }
                else if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(Dist))
                {
                    Final_data_data = AJE.obj_vw_dwlr_meta_data.Where(x => x.state == State && x.district == Dist).OrderByDescending(c => c.Well_ID).ThenByDescending(c => c.datetime).ToList();
                }
                else if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(year) && !string.IsNullOrEmpty(month))
                {
                    Final_data_data = AJE.obj_vw_dwlr_meta_data.Where(x => x.state == State && x.fyyear == year && x.fymonth == month).OrderByDescending(c => c.Well_ID).ThenByDescending(c => c.datetime).ToList();
                }
                else if (!string.IsNullOrEmpty(State) && !string.IsNullOrEmpty(year))
                {
                    Final_data_data = AJE.obj_vw_dwlr_meta_data.Where(x => x.state == State && x.fyyear == year).OrderByDescending(c => c.Well_ID).ThenByDescending(c => c.datetime).ToList();
                }
                else if (!string.IsNullOrEmpty(State))
                {
                    Final_data_data = AJE.obj_vw_dwlr_meta_data.Where(x => x.state == State).OrderByDescending(c => c.Well_ID).ThenByDescending(c => c.datetime).ToList();
                }


                DataTable dt = new DataTable();
                dt.Columns.Add("State Name", typeof(string));
                dt.Columns.Add("District Name", typeof(string));
                dt.Columns.Add("Block Name", typeof(string));
                dt.Columns.Add("GramPanchayat Name", typeof(string));
                dt.Columns.Add("Latitude", typeof(string));
                dt.Columns.Add("Longitude", typeof(string));
                dt.Columns.Add("Well Id", typeof(string));
                dt.Columns.Add("Type of well", typeof(string));
                dt.Columns.Add("DateTime", typeof(string));
                dt.Columns.Add("Data type code", typeof(string));
                dt.Columns.Add("Data value(mbgl)", typeof(string));

                var a = Final_data_data.Count;

                int sr_no = 0;
                if (a != 0)
                {
                    foreach (var itema in Final_data_data)
                    {
                        DataRow dataRow = dt.NewRow();
                        dataRow["State Name"] = itema.state;
                        dataRow["District Name"] = itema.district;
                        dataRow["Block Name"] = itema.block;
                        dataRow["GramPanchayat Name"] = itema.gp;
                        dataRow["Latitude"] = itema.latitude;
                        dataRow["Longitude"] = itema.longitude;
                        dataRow["Well Id"] = itema.Well_ID;
                        dataRow["Type of well"] = itema.type;
                        dataRow["DateTime"] = itema.datetime;
                        dataRow["Data type code"] = itema.datatypecode;
                        dataRow["Data value(mbgl)"] = itema.datavalue;

                        dt.Rows.Add(dataRow);

                    }


                }

                if (a == 0)
                {
                    DataRow dataRow = dt.NewRow();
                    dataRow["State Name"] = "";
                    dataRow["District Name"] = "";
                    dataRow["Block Name"] = "";
                    dataRow["GramPanchayat Name"] = "";
                    dataRow["Latitude"] = "";
                    dataRow["Longitude"] = "";
                    dataRow["Well Id"] = "";
                    dataRow["Type of well"] = "";
                    dataRow["DateTime"] = "";
                    dataRow["Data type code"] = "";
                    dataRow["Data value(mbgl)"] = "";
                    dt.Rows.Add(dataRow);
                }
                if (dt != null && dt.Rows.Count > 0)
                {
                    System.Web.HttpContext.Current.Response.Clear();
                    System.Web.HttpContext.Current.Response.ClearContent();
                    System.Web.HttpContext.Current.Response.ClearHeaders();
                    System.Web.HttpContext.Current.Response.Buffer = true;
                    System.Web.HttpContext.Current.Response.ContentType = "text/csv";
                    System.Web.HttpContext.Current.Response.AddHeader("Content-Disposition", "attachment;filename=Dwlr.csv");
                    System.Web.HttpContext.Current.Response.ContentEncoding = System.Text.Encoding.GetEncoding("windows-1250");

                    // Write the CSV header
                    for (int j = 0; j < dt.Columns.Count; j++)
                    {
                        System.Web.HttpContext.Current.Response.Write("\"" + dt.Columns[j].ToString() + "\"");
                        if (j < dt.Columns.Count - 1)
                            System.Web.HttpContext.Current.Response.Write(",");
                    }
                    System.Web.HttpContext.Current.Response.Write(Environment.NewLine);

                    // Write the CSV data
                    foreach (DataRow row in dt.Rows)
                    {
                        for (int i = 0; i < dt.Columns.Count; i++)
                        {
                            string fieldValue = row[i].ToString();

                            // Enclose the field in double quotes and escape existing double quotes
                            System.Web.HttpContext.Current.Response.Write("\"" + fieldValue.Replace("\"", "\"\"") + "\"");

                            if (i < dt.Columns.Count - 1)
                                System.Web.HttpContext.Current.Response.Write(",");
                        }

                        System.Web.HttpContext.Current.Response.Write(Environment.NewLine);
                    }
                    System.Web.HttpContext.Current.Response.Flush();
                    System.Web.HttpContext.Current.Response.End();
                }
                return RedirectToAction("Index");
            }
            catch (Exception Ex)
            {
                return Json("Error", JsonRequestBehavior.AllowGet);
            }
        }




        #region View Image
        public void ViewFile(string FileName)
        {
            string path = "";
            string filename = Path.GetFileName(FileName);

            if (FileName != null && FileName != "")
            {


                path = @"G:\ataljal-mobileapi.mowr.gov.in\attachments\";
                DirectoryInfo directory = new DirectoryInfo(path);
                FileInfo[] files = directory.GetFiles();
                bool fileFound = false;
                foreach (FileInfo file in files)
                {
                    if (String.Compare(file.Name, filename) == 0)
                    {
                        fileFound = true;
                        break;
                    }
                }
                if (!fileFound)
                {
                    path = @"G:\mobileapi\attachments\";
                    DirectoryInfo directory1 = new DirectoryInfo(path);
                    FileInfo[] files1 = directory1.GetFiles();
                    foreach (FileInfo file in files1)
                    {
                        if (String.Compare(file.Name, filename) == 0)
                        {
                            fileFound = true;
                            break;

                        }
                    }
                }
                if (!fileFound)
                {
                    path = @"F:\mobileapi\attachments\geotagging\";
                    DirectoryInfo directory1 = new DirectoryInfo(path);
                    FileInfo[] files1 = directory1.GetFiles();
                    foreach (FileInfo file in files1)
                    {
                        if (String.Compare(file.Name, filename) == 0)
                        {
                            fileFound = true;
                            break;

                        }
                    }
                }
                if (!fileFound)
                {
                    path = @"F:\mobileapi\attachments\groundwatermonitoring\";
                    DirectoryInfo directory1 = new DirectoryInfo(path);
                    FileInfo[] files1 = directory1.GetFiles();
                    foreach (FileInfo file in files1)
                    {
                        if (String.Compare(file.Name, filename) == 0)
                        {
                            fileFound = true;
                            break;

                        }
                    }
                }
                if (!fileFound)
                {
                    path = @"F:\mobileapi\attachments\socialevent\";
                    DirectoryInfo directory1 = new DirectoryInfo(path);
                    FileInfo[] files1 = directory1.GetFiles();
                    foreach (FileInfo file in files1)
                    {
                        if (String.Compare(file.Name, filename) == 0)
                        {
                            fileFound = true;
                            break;

                        }
                    }
                }
                if (!fileFound)
                {
                    path = @"F:\mobileapi\attachments\rainguage\";
                    DirectoryInfo directory1 = new DirectoryInfo(path);
                    FileInfo[] files1 = directory1.GetFiles();
                    foreach (FileInfo file in files1)
                    {
                        if (String.Compare(file.Name, filename) == 0)
                        {
                            fileFound = true;
                            break;

                        }
                    }
                }
                if (!fileFound)
                {
                    path = @"F:\mobileapi\attachments\wellinventory\";
                    DirectoryInfo directory1 = new DirectoryInfo(path);
                    FileInfo[] files1 = directory1.GetFiles();
                    foreach (FileInfo file in files1)
                    {
                        if (String.Compare(file.Name, filename) == 0)
                        {
                            fileFound = true;
                            break;

                        }
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
        #endregion
    }
}