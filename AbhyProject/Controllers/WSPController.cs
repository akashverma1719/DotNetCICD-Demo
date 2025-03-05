

using AbhyProject.Classes;
using AbhyProject.Models;
using AbhyProject.Utility;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Globalization;
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
    public class WSPController : Controller
    {
        // GET: WSP
        AbhyEntity ABE = new AbhyEntity();
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult wspvideo()
        {
            return View();
        }
        [HttpGet]
        public JsonResult WaterQuantity()
        {
            if (Session["gwmUserId"] != null)
            {
                string State = Session["gstate"].ToString();

                string Dist = Session["gdist"].ToString();
                string Block = Session["gblock"].ToString();
                if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null)
                {
                    var Data = ABE.objAbhy_gwl_quantity.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).Take(1).ToList();
                    return Json(Data, JsonRequestBehavior.AllowGet);
                }
                else if (State != "" && State != null && Dist != "" && Dist != null)
                {
                    var Data = ABE.objAbhy_gwl_quantity.Where(x => x.state_name == State && x.district_name == Dist).Take(1).ToList();
                    return Json(Data, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    var Data = ABE.objAbhy_gwl_quantity.Where(x => x.state_name == State).Take(1).ToList();
                    return Json(Data, JsonRequestBehavior.AllowGet);
                }

            }
            else
            {
                return Json("NoData", JsonRequestBehavior.AllowGet);
            }

        }
        [HttpGet]
        public ActionResult Report()
        {

            DateTime U_Date = DateTime.Now.Date;
            //var year = U_Date.Year;
            //var month = U_Date.Month;
            //var day = U_Date.Day;
            //string CurrentDate = day + "/" + month + "/" + year;
            // DateTime PresentDate = Convert.ToDateTime(CurrentDate);
            if (Session["gstate"] != null && Session["gstate"].ToString() != "null" && Session["gstate"].ToString() != "")
            {
                string State = Session["gstate"].ToString();
                string UserId = Session["UserId"].ToString();
                string Dist = Session["gdist"].ToString();
                string Block = Session["gblock"].ToString();
                List<Abhy_groundwater_levels2> GroundWaterLevelsData = null;
                List<Abhy_WaterUtilization_Approval> UtlizationData = null;
                List<Abhy_Total_Rainfall> TotalRainfall = null;
                List<Abhy_Rainfall_Saved_Data> RainfallData = null;
                List<Abhy_Rainfall_Saved_Data> Rainfall_Data = null;
                List<Abhy_WaterUtilization_Approval> Utilization_data = new List<Abhy_WaterUtilization_Approval>();
                if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null)
                {
                    GroundWaterLevelsData = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == State && x.district_name == Dist && x.block == Block).Take(1).ToList();

                    UtlizationData = ABE.objAbhy_WaterUtilization_Approval.Where(x => x.state == State && x.dist == Dist && x.block == Block && x.UserId == UserId).ToList();

                    TotalRainfall = ABE.objAbhy_Total_Rainfall.Where(x => x.state_name == State && x.district_name == Dist).ToList();

                    RainfallData = ABE.objAbhy_Rainfall_Saved_Data.Where(x => x.state_name == State && x.district_name == Dist).ToList();
                    Rainfall_Data = ABE.objAbhy_Rainfall_Saved_Data.Where(x => x.state_name == State && x.district_name == Dist).ToList();

                }
                else if (State != "" && State != null && Dist != "" && Dist != null)
                {
                    GroundWaterLevelsData = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == State && x.district_name == Dist).Take(1).ToList();

                    UtlizationData = ABE.objAbhy_WaterUtilization_Approval.Where(x => x.state == State && x.dist == Dist && x.UserId == UserId).ToList();

                    TotalRainfall = ABE.objAbhy_Total_Rainfall.Where(x => x.state_name == State && x.district_name == Dist).ToList();

                    RainfallData = ABE.objAbhy_Rainfall_Saved_Data.Where(x => x.state_name == State && x.district_name == Dist).ToList();
                    Rainfall_Data = ABE.objAbhy_Rainfall_Saved_Data.Where(x => x.state_name == State && x.district_name == Dist).ToList();
                }
                else
                {
                    GroundWaterLevelsData = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == State).Take(1).ToList();

                    UtlizationData = ABE.objAbhy_WaterUtilization_Approval.Where(x => x.state == State && x.UserId == UserId).ToList();

                    TotalRainfall = ABE.objAbhy_Total_Rainfall.Where(x => x.state_name == State).ToList();

                    RainfallData = ABE.objAbhy_Rainfall_Saved_Data.Where(x => x.state_name == State).ToList();
                    Rainfall_Data = ABE.objAbhy_Rainfall_Saved_Data.Where(x => x.state_name == State).ToList();
                }
                if (UtlizationData.Count != 0)
                {
                    foreach (var item in UtlizationData)
                    {
                        //DateTime Date1 = Convert.ToDateTime(item.date).Date;
                        //DateTime Date123 = ParseDate(PresentDate);
                        DateTime Date1 = ParseDate(item.date.ToString());
                        if (Date1 == U_Date)
                        {
                            Utilization_data.Add(item);
                            //ViewBag.WaterdeviationData = item;
                        }

                    }
                }
                if (RainfallData.Count != 0)
                {
                    foreach (var item1 in RainfallData)
                    {
                        // DateTime Date1 = Convert.ToDateTime(item1.date).Date;
                        DateTime Date1 = ParseDate(item1.date.ToString());
                        if (Date1 == U_Date)
                        {
                            Rainfall_Data.Add(item1);
                            //ViewBag.WaterdeviationData = item;
                        }

                    }

                    //ViewBag.WaterdeviationData
                }
                if (Session["gstate"] != null && Session["gstate"].ToString() != "null" && Session["gstate"].ToString() != "")
                {

                    if (GroundWaterLevelsData.Count != 0 && Utilization_data.Count == 0)
                    {
                        Session["GWMError"] = "Please Save The Ground Water Level Deviation Data";
                        return Json("Please Save The Ground Water Level Deviation Data", JsonRequestBehavior.AllowGet);

                    }
                    else if (TotalRainfall.Count != 0 && Rainfall_Data.Count == 0)
                    {
                        Session["GWMError"] = "Please Save The Rainfall Deviation Data";
                        return Json("Please Save The Rainfall Deviation Data", JsonRequestBehavior.AllowGet);

                    }
                    else
                    {
                        return Json("Success", JsonRequestBehavior.AllowGet);
                    }


                }
                else
                {
                    Session["GWMError"] = "Please Select State and District,Block";
                    return Json("Please Select State and District,Block", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                Session["GWMError"] = "Please Select State and District,Block";
                return Json("Please Select State and District,Block", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult WaterUtilizationData(string Waterutilization)
        {
            if (Waterutilization != "{}")
            {
                try
                {
                    JavaScriptSerializer js4 = new JavaScriptSerializer();
                    Abhy_WaterUtilization_Approval obj1 = new Abhy_WaterUtilization_Approval();
                    //var result = js4.Deserialize<Abhy_WaterUtilization_Approval>(waterutilization);
                    var result = js4.Deserialize<List<Abhy_WaterUtilization_Approval>>(Waterutilization);
                    for (int i = 0; i < result.Count; i++)
                    {
                        if (result[i].utilization != null && result[i].utilization != "")
                        {
                            obj1.site_type = result[i].site_type;
                            obj1.site_name = result[i].site_name;
                            obj1.avg = result[i].avg;
                            obj1.depth = result[i].depth;
                            if (Session["gstate"] != null)
                            {
                                obj1.block = Session["gblock"].ToString();
                                obj1.state = Session["gstate"].ToString();
                                obj1.dist = Session["gdist"].ToString();
                            }

                            obj1.utilization = result[i].utilization;
                            obj1.manualdata = result[i].manualdata;
                            obj1.jan_14 = result[i].jan_14;
                            obj1.jan_15 = result[i].jan_15;
                            obj1.jan_16 = result[i].jan_16;
                            obj1.jan_17 = result[i].jan_17;
                            obj1.jan_18 = result[i].jan_18;
                            obj1.jan_19 = result[i].jan_19;
                            obj1.aug_14 = result[i].aug_14;
                            obj1.aug_15 = result[i].aug_15;
                            obj1.aug_16 = result[i].aug_16;
                            obj1.aug_17 = result[i].aug_17;
                            obj1.aug_18 = result[i].aug_18;
                            obj1.aug_19 = result[i].aug_19;
                            obj1.nov_14 = result[i].nov_14;
                            obj1.nov_15 = result[i].nov_15;
                            obj1.nov_16 = result[i].nov_16;
                            obj1.nov_17 = result[i].nov_17;
                            obj1.nov_18 = result[i].nov_18;
                            obj1.nov_19 = result[i].nov_19;
                            obj1.may_14 = result[i].may_14;
                            obj1.may_15 = result[i].may_15;
                            obj1.may_16 = result[i].may_16;
                            obj1.may_17 = result[i].may_17;
                            obj1.may_18 = result[i].may_18;
                            obj1.may_19 = result[i].may_19;
                            obj1.UserId = Session["gwmUserId"].ToString();
                            obj1.ApprovedBy = "0";
                            obj1.Reject = "0";

                            obj1.accept = "False";
                            DateTime U_Date = DateTime.Now.Date;
                            var year = U_Date.Year;
                            var month = U_Date.Month;
                            var day = U_Date.Day;
                            string CurrentDate = day + "/" + month + "/" + year;
                            obj1.date = CurrentDate;


                        }
                        ABE.objAbhy_WaterUtilization_Approval.Add(obj1);
                        ABE.SaveChanges();
                    }

                    return Json("ok");



                }
                catch (Exception ex)
                {
                    ViewBag.Error = ex;
                    return RedirectToAction("ReWsp_gm");
                }
            }
            else
            {
                return View();
            }
        }

        [HttpPost]
        public ActionResult RainfallDeviationData(string data)
        {

            if (data != "{}")
            {
                try
                {
                    JavaScriptSerializer js4 = new JavaScriptSerializer();
                    Abhy_Rainfall_Saved_Data obj1 = new Abhy_Rainfall_Saved_Data();
                    //var result = js4.Deserialize<Abhy_WaterUtilization_Approval>(waterutilization);
                    var result = js4.Deserialize<List<Abhy_Rainfall_Saved_Data>>(data);

                    for (int i = 0; i < result.Count; i++)
                    {

                        if (result[i].deviation != null && result[i].deviation != "")
                        {
                            if (Session["gstate"] != null)
                            {
                                obj1.state_name = Session["gstate"].ToString();
                                obj1.UserId = Session["UserId"].ToString();
                                obj1.district_name = Session["gdist"].ToString();
                                obj1.block = Session["gblock"].ToString();
                            }
                            obj1.manualdata = result[i].manualdata;
                            obj1.status = result[i].status;
                            obj1.jan_14 = result[i].jan_14;
                            obj1.feb_14 = result[i].feb_14;
                            obj1.mar_14 = result[i].mar_14;
                            obj1.apr_14 = result[i].apr_14;
                            obj1.may_14 = result[i].may_14;
                            obj1.jun_14 = result[i].jun_14;
                            obj1.jul_14 = result[i].jul_14;
                            obj1.aug_14 = result[i].aug_14;
                            obj1.sep_14 = result[i].sep_14;
                            obj1.oct_14 = result[i].oct_14;
                            obj1.nov_14 = result[i].nov_14;
                            obj1.dec_14 = result[i].dec_14;
                            obj1.status = result[i].status;
                            obj1.jan_15 = result[i].jan_15;
                            obj1.feb_15 = result[i].feb_15;
                            obj1.mar_15 = result[i].mar_15;
                            obj1.apr_15 = result[i].apr_15;
                            obj1.may_15 = result[i].may_15;
                            obj1.jun_15 = result[i].jun_15;
                            obj1.jul_15 = result[i].jul_15;
                            obj1.aug_15 = result[i].aug_15;
                            obj1.sep_15 = result[i].sep_15;
                            obj1.oct_15 = result[i].oct_15;
                            obj1.nov_15 = result[i].nov_15;
                            obj1.dec_15 = result[i].dec_15;

                            obj1.jan_16 = result[i].jan_16;
                            obj1.feb_16 = result[i].feb_16;
                            obj1.mar_16 = result[i].mar_16;
                            obj1.apr_16 = result[i].apr_16;
                            obj1.may_16 = result[i].may_16;
                            obj1.jun_16 = result[i].jun_16;
                            obj1.jul_16 = result[i].jul_16;
                            obj1.aug_16 = result[i].aug_16;
                            obj1.sep_16 = result[i].sep_16;
                            obj1.oct_16 = result[i].oct_16;
                            obj1.nov_16 = result[i].nov_16;
                            obj1.dec_16 = result[i].dec_16;


                            obj1.jan_17 = result[i].jan_17;
                            obj1.feb_17 = result[i].feb_17;
                            obj1.mar_17 = result[i].mar_17;
                            obj1.apr_17 = result[i].apr_17;
                            obj1.may_17 = result[i].may_17;
                            obj1.jun_17 = result[i].jun_17;
                            obj1.jul_17 = result[i].jul_17;
                            obj1.aug_17 = result[i].aug_17;
                            obj1.sep_17 = result[i].sep_17;
                            obj1.oct_17 = result[i].oct_17;
                            obj1.nov_17 = result[i].nov_17;
                            obj1.dec_17 = result[i].dec_17;

                            obj1.jan_18 = result[i].jan_18;
                            obj1.feb_18 = result[i].feb_18;
                            obj1.mar_18 = result[i].mar_18;
                            obj1.apr_18 = result[i].apr_18;
                            obj1.may_18 = result[i].may_18;
                            obj1.jun_18 = result[i].jun_18;
                            obj1.jul_18 = result[i].jul_18;
                            obj1.aug_18 = result[i].aug_18;
                            obj1.sep_18 = result[i].sep_18;
                            obj1.oct_18 = result[i].oct_18;
                            obj1.nov_18 = result[i].nov_18;
                            obj1.dec_18 = result[i].dec_18;
                            obj1.station = result[i].station;

                            obj1.actual_rainfall = result[i].actual_rainfall;
                            obj1.normal_rainfall = result[i].normal_rainfall;
                            obj1.deviation = result[i].deviation;
                            DateTime U_Date = DateTime.Now.Date;
                            var year = U_Date.Year;
                            var month = U_Date.Month;
                            var day = U_Date.Day;
                            string CurrentDate = day + "/" + month + "/" + year;
                            obj1.date = CurrentDate;
                        }
                        ABE.objAbhy_Rainfall_Saved_Data.Add(obj1);
                        ABE.SaveChanges();
                    }

                    return Json("ok");



                }
                catch (Exception ex)
                {
                    ViewBag.Error = ex;
                    return RedirectToAction("ReWsp_gm");
                }
            }
            else
            {
                return View();
            }
        }
        [HttpPost]
        public ActionResult ChartData()
        {

            try
            {
                var state = "";
                var dist = "";
                var block = "";

                if (Session["gstate"] != null && Session["gstate"].ToString() != "" && Session["gdist"] != null && Session["gdist"].ToString() != "" && Session["gblock"] != null && Session["gblock"].ToString() != "")
                {
                    state = Session["gstate"].ToString();
                    dist = Session["gdist"].ToString();
                    block = Session["gblock"].ToString();
                    ViewBag.ReportBenedata = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == state && x.district_name == dist && x.block == block).ToList();

                    var beneficiarydownload = ViewBag.ReportBenedata;
                    var jsonresults24 = Json(beneficiarydownload, JsonRequestBehavior.AllowGet);
                    jsonresults24.MaxJsonLength = int.MaxValue;
                    return jsonresults24;
                }
                else if (Session["gstate"] != null && Session["gstate"].ToString() != "" && Session["gdist"] != null && Session["gdist"].ToString() != "")
                {

                    state = Session["gstate"].ToString();
                    dist = Session["gdist"].ToString();

                    ViewBag.ReportBenedata = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == state && x.district_name == dist).ToList();

                    var beneficiarydownload = ViewBag.ReportBenedata;
                    var jsonresults24 = Json(beneficiarydownload, JsonRequestBehavior.AllowGet);
                    jsonresults24.MaxJsonLength = int.MaxValue;
                    return jsonresults24;
                }
                else
                {
                    state = Session["gstate"].ToString();


                    ViewBag.ReportBenedata = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == state).ToList();

                    var beneficiarydownload = ViewBag.ReportBenedata;
                    var jsonresults24 = Json(beneficiarydownload, JsonRequestBehavior.AllowGet);
                    jsonresults24.MaxJsonLength = int.MaxValue;
                    return jsonresults24;
                }

            }
            catch (Exception ex)
            {
                var dataa = ex;
                return Json("No Data");
            }


        }

        [HttpPost]
        public ActionResult RainFallChartData()
        {

            try
            {
                var state = "";
                var dist = "";

                if (Session["gstate"] != null && Session["gstate"].ToString() != "" && Session["gdist"].ToString() != "" && Session["gdist"] != null)
                {
                    state = Session["gstate"].ToString();
                    dist = Session["gdist"].ToString();

                    ViewBag.ReportBenedata = ABE.objAbhy_Total_Rainfall.Where(x => x.state_name == state && x.district_name == dist).ToList();

                    var beneficiarydownload = ViewBag.ReportBenedata;
                    var jsonresults24 = Json(beneficiarydownload, JsonRequestBehavior.AllowGet);
                    jsonresults24.MaxJsonLength = int.MaxValue;
                    return jsonresults24;
                }
                else
                {
                    state = Session["gstate"].ToString();

                    ViewBag.ReportBenedata = ABE.objAbhy_Total_Rainfall.Where(x => x.state_name == state).ToList();

                    var beneficiarydownload = ViewBag.ReportBenedata;
                    var jsonresults24 = Json(beneficiarydownload, JsonRequestBehavior.AllowGet);
                    jsonresults24.MaxJsonLength = int.MaxValue;
                    return jsonresults24;
                }

            }
            catch (Exception ex)
            {
                var dataa = ex;
                return Json("No Data");
            }


        }

        [HttpPost]
        public ActionResult GroundWaterLevelsInfo()
        {

            string StateName = Session["gstate"].ToString();
            string DistName = Session["gdist"].ToString();
            string BlockName = Session["gblock"].ToString();
            var Data = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName && x.district_name == DistName && x.block == BlockName).ToList();

            var beneficiarydownload = Data;
            var jsonresults24 = Json(beneficiarydownload, JsonRequestBehavior.AllowGet);
            jsonresults24.MaxJsonLength = int.MaxValue;
            return jsonresults24;

        }

        public ActionResult GroundWaterMonitoring()
        {
            ViewBag.RainFallFinalData = ABE.objAbhy_Total_Rainfall.ToList();
            ViewBag.Sitesdata = ABE.objabhy_groundwater_levels2.ToList();
            ViewBag.ModelDatanull1 = "1";
            if (Session["UserId"] == null)
            {

                Session["GroundWater"] = "Data";
                Session["MisImageInfo"] = "GWM";
                return RedirectToAction("WSP_GWM_HOME", "WspNew");
            }
            else
            {
                if (Session["Admin"] != null && Session["Admin"].ToString() != "")
                {
                    ViewBag.Alert = "Please Select State,District,Block,Gram Panchayat and Village";
                }
                if (Session["ggram"] != null && Session["ggram"].ToString() != "null" && Session["ggram"].ToString() != "")
                {
                    Session["Location"] = Session["ggram"].ToString();

                }
                else if (Session["gblock"] != null && Session["gblock"].ToString() != "null" && Session["gblock"].ToString() != "")
                {
                    Session["Location"] = Session["gblock"].ToString();
                }
                else
                {
                    Session["Location"] = Session["gstate"].ToString();
                }
                if (Session["gstate"] != null && Session["gstate"].ToString() != "null" && Session["gdist"] != null && Session["gdist"].ToString() != "null" && Session["gblock"] != null && Session["gblock"].ToString() != "null")
                {
                    Session["ac"] = "1";

                    string StateName = Session["gstate"].ToString();
                    string DistName = Session["gdist"].ToString();
                    string BlockName = Session["gblock"].ToString();

                    if (StateName != "" && StateName != null && DistName != "" && DistName != null && BlockName != "" && BlockName != null)
                    {

                        ViewBag.WaterLevel = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName && x.district_name == DistName && x.block == BlockName).ToList();

                        ViewBag.RainfallDataFull = ABE.objAbhy_Total_Rainfall.Where(x => x.state_name == StateName && x.district_name == DistName && x.block == BlockName).ToList();

                        var Data = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName).ToList();
                        var GroundWaterLevelsData = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName && x.district_name == DistName && x.block == BlockName).Take(1).ToList();
                        ViewBag.GroundWaterLevelsData = GroundWaterLevelsData;
                        var abhy_groundwater_quality = ABE.objAbhy_groundwater_quality.Where(x => x.state_name == StateName && x.disrict_name == DistName && x.block == BlockName).ToList();
                        if (abhy_groundwater_quality.Count != 0)
                        {
                            Session["Salinity"] = abhy_groundwater_quality[0].ec;
                            Session["Chloride"] = abhy_groundwater_quality[0].chloride;
                            Session["Fluoride"] = abhy_groundwater_quality[0].fluoride;
                            Session["Sulphate"] = abhy_groundwater_quality[0].sulphate;
                            Session["Nitrate"] = abhy_groundwater_quality[0].nitrate;
                            Session["Iron"] = abhy_groundwater_quality[0].fe;

                        }
                        if (GroundWaterLevelsData.Count != 0)
                        {
                            ViewBag.jan_14 = 0;
                            ViewBag.jan_15 = 0;
                            ViewBag.jan_16 = 0;
                            ViewBag.jan_17 = 0;
                            ViewBag.jan_18 = 0;
                            ViewBag.jan_19 = 0;
                            ViewBag.may_14 = 0;
                            ViewBag.may_15 = 0;
                            ViewBag.may_16 = 0;
                            ViewBag.may_17 = 0;
                            ViewBag.may_18 = 0;
                            ViewBag.aug_14 = 0;
                            ViewBag.aug_15 = 0;
                            ViewBag.aug_16 = 0;
                            ViewBag.aug_17 = 0;
                            ViewBag.aug_18 = 0;
                            ViewBag.nov_14 = 0;
                            ViewBag.nov_15 = 0;
                            ViewBag.nov_16 = 0;
                            ViewBag.nov_17 = 0;
                            ViewBag.nov_18 = 0;
                            if (GroundWaterLevelsData[0].jan_14 != null && GroundWaterLevelsData[0].jan_14 != "NULL")
                            {
                                ViewBag.jan_14 = float.Parse(GroundWaterLevelsData[0].jan_14);
                            }
                            if (GroundWaterLevelsData[0].jan_15 != null && GroundWaterLevelsData[0].jan_15 != "NULL")
                            {
                                ViewBag.jan_15 = float.Parse(GroundWaterLevelsData[0].jan_15);
                            }
                            if (GroundWaterLevelsData[0].jan_16 != null && GroundWaterLevelsData[0].jan_16 != "NULL")
                            {
                                ViewBag.jan_16 = float.Parse(GroundWaterLevelsData[0].jan_16);
                            }
                            if (GroundWaterLevelsData[0].jan_17 != null && GroundWaterLevelsData[0].jan_17 != "NULL")
                            {
                                ViewBag.jan_17 = float.Parse(GroundWaterLevelsData[0].jan_17);
                            }
                            if (GroundWaterLevelsData[0].jan_18 != null && GroundWaterLevelsData[0].jan_18 != "NULL")
                            {
                                ViewBag.jan_18 = float.Parse(GroundWaterLevelsData[0].jan_18);
                            }
                            if (GroundWaterLevelsData[0].jan_19 != null && GroundWaterLevelsData[0].jan_19 != "NULL")
                            {
                                ViewBag.jan_19 = float.Parse(GroundWaterLevelsData[0].jan_19);
                            }

                            if (GroundWaterLevelsData[0].may_14 != null && GroundWaterLevelsData[0].may_14 != "NULL")
                            {
                                ViewBag.may_14 = float.Parse(GroundWaterLevelsData[0].may_14);
                            }
                            if (GroundWaterLevelsData[0].may_15 != null && GroundWaterLevelsData[0].may_15 != "NULL")
                            {
                                ViewBag.may_15 = float.Parse(GroundWaterLevelsData[0].may_15);
                            }
                            if (GroundWaterLevelsData[0].may_16 != null && GroundWaterLevelsData[0].may_16 != "NULL")
                            {
                                ViewBag.may_16 = float.Parse(GroundWaterLevelsData[0].may_16);
                            }
                            if (GroundWaterLevelsData[0].may_17 != null && GroundWaterLevelsData[0].may_17 != "NULL")
                            {
                                ViewBag.may_17 = float.Parse(GroundWaterLevelsData[0].may_17);
                            }
                            if (GroundWaterLevelsData[0].may_18 != null && GroundWaterLevelsData[0].may_18 != "NULL")
                            {
                                ViewBag.may_18 = float.Parse(GroundWaterLevelsData[0].may_18);
                            }
                            if (GroundWaterLevelsData[0].aug_14 != null && GroundWaterLevelsData[0].aug_14 != "NULL")
                            {
                                ViewBag.aug_14 = float.Parse(GroundWaterLevelsData[0].aug_14);
                            }
                            if (GroundWaterLevelsData[0].aug_15 != null && GroundWaterLevelsData[0].aug_15 != "NULL")
                            {
                                ViewBag.aug_15 = float.Parse(GroundWaterLevelsData[0].aug_15);
                            }
                            if (GroundWaterLevelsData[0].aug_16 != null && GroundWaterLevelsData[0].aug_16 != "NULL")
                            {
                                ViewBag.aug_16 = float.Parse(GroundWaterLevelsData[0].aug_16);
                            }
                            if (GroundWaterLevelsData[0].aug_17 != null && GroundWaterLevelsData[0].aug_17 != "NULL")
                            {
                                ViewBag.aug_17 = float.Parse(GroundWaterLevelsData[0].aug_17);
                            }
                            if (GroundWaterLevelsData[0].aug_18 != null && GroundWaterLevelsData[0].aug_18 != "NULL")
                            {
                                ViewBag.aug_18 = float.Parse(GroundWaterLevelsData[0].aug_18);
                            }
                            if (GroundWaterLevelsData[0].nov_14 != null && GroundWaterLevelsData[0].nov_14 != "NULL")
                            {
                                ViewBag.nov_14 = float.Parse(GroundWaterLevelsData[0].nov_14);
                            }
                            if (GroundWaterLevelsData[0].nov_15 != null && GroundWaterLevelsData[0].nov_15 != "NULL")
                            {
                                ViewBag.nov_15 = float.Parse(GroundWaterLevelsData[0].nov_15);
                            }
                            if (GroundWaterLevelsData[0].nov_16 != null && GroundWaterLevelsData[0].nov_16 != "NULL")
                            {
                                ViewBag.nov_16 = float.Parse(GroundWaterLevelsData[0].nov_16);
                            }
                            if (GroundWaterLevelsData[0].nov_17 != null && GroundWaterLevelsData[0].nov_17 != "NULL")
                            {
                                ViewBag.nov_17 = float.Parse(GroundWaterLevelsData[0].nov_17);
                            }
                            if (GroundWaterLevelsData[0].nov_18 != null && GroundWaterLevelsData[0].nov_18 != "NULL")
                            {
                                ViewBag.nov_18 = float.Parse(GroundWaterLevelsData[0].nov_18);
                            }

                        }
                        else
                        {

                            ViewBag.Alert = null;

                            ViewBag.ModelDatanull = "NoData";
                        }

                        if (ViewBag.WaterRainFall == null)
                        {
                            ViewBag.ModelDatanull1 = "NoData";
                        }
                        ViewBag.GroundWaterLevelsData = GroundWaterLevelsData;
                        List<Abhy_groundwater_levels2> model11 = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName && x.district_name == DistName && x.block == BlockName).ToList();
                        if (model11.Count != 0)
                        {
                            return View(model11);
                        }
                    }
                    else if (StateName != "" && StateName != null && DistName != "" && DistName != null)
                    {
                        ViewBag.WaterLevel = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName && x.district_name == DistName).ToList();

                        ViewBag.RainfallDataFull = ABE.objAbhy_Total_Rainfall.Where(x => x.state_name == StateName && x.district_name == DistName).ToList();

                        var Data = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName).ToList();
                        var GroundWaterLevelsData = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName && x.district_name == DistName).Take(1).ToList();
                        ViewBag.GroundWaterLevelsData = GroundWaterLevelsData;
                        var abhy_groundwater_quality = ABE.objAbhy_groundwater_quality.Where(x => x.state_name == StateName && x.disrict_name == DistName).ToList();
                        if (abhy_groundwater_quality.Count != 0)
                        {
                            Session["Salinity"] = abhy_groundwater_quality[0].ec;
                            Session["Chloride"] = abhy_groundwater_quality[0].chloride;
                            Session["Fluoride"] = abhy_groundwater_quality[0].fluoride;
                            Session["Sulphate"] = abhy_groundwater_quality[0].sulphate;
                            Session["Nitrate"] = abhy_groundwater_quality[0].nitrate;
                            Session["Iron"] = abhy_groundwater_quality[0].fe;

                        }
                        if (GroundWaterLevelsData.Count != 0)
                        {
                            ViewBag.jan_14 = 0;
                            ViewBag.jan_15 = 0;
                            ViewBag.jan_16 = 0;
                            ViewBag.jan_17 = 0;
                            ViewBag.jan_18 = 0;
                            ViewBag.jan_19 = 0;
                            ViewBag.may_14 = 0;
                            ViewBag.may_15 = 0;
                            ViewBag.may_16 = 0;
                            ViewBag.may_17 = 0;
                            ViewBag.may_18 = 0;
                            ViewBag.aug_14 = 0;
                            ViewBag.aug_15 = 0;
                            ViewBag.aug_16 = 0;
                            ViewBag.aug_17 = 0;
                            ViewBag.aug_18 = 0;
                            ViewBag.nov_14 = 0;
                            ViewBag.nov_15 = 0;
                            ViewBag.nov_16 = 0;
                            ViewBag.nov_17 = 0;
                            ViewBag.nov_18 = 0;
                            if (GroundWaterLevelsData[0].jan_14 != null && GroundWaterLevelsData[0].jan_14 != "NULL")
                            {
                                ViewBag.jan_14 = float.Parse(GroundWaterLevelsData[0].jan_14);
                            }
                            if (GroundWaterLevelsData[0].jan_15 != null && GroundWaterLevelsData[0].jan_15 != "NULL")
                            {
                                ViewBag.jan_15 = float.Parse(GroundWaterLevelsData[0].jan_15);
                            }
                            if (GroundWaterLevelsData[0].jan_16 != null && GroundWaterLevelsData[0].jan_16 != "NULL")
                            {
                                ViewBag.jan_16 = float.Parse(GroundWaterLevelsData[0].jan_16);
                            }
                            if (GroundWaterLevelsData[0].jan_17 != null && GroundWaterLevelsData[0].jan_17 != "NULL")
                            {
                                ViewBag.jan_17 = float.Parse(GroundWaterLevelsData[0].jan_17);
                            }
                            if (GroundWaterLevelsData[0].jan_18 != null && GroundWaterLevelsData[0].jan_18 != "NULL")
                            {
                                ViewBag.jan_18 = float.Parse(GroundWaterLevelsData[0].jan_18);
                            }
                            if (GroundWaterLevelsData[0].jan_19 != null && GroundWaterLevelsData[0].jan_19 != "NULL")
                            {
                                ViewBag.jan_19 = float.Parse(GroundWaterLevelsData[0].jan_19);
                            }

                            if (GroundWaterLevelsData[0].may_14 != null && GroundWaterLevelsData[0].may_14 != "NULL")
                            {
                                ViewBag.may_14 = float.Parse(GroundWaterLevelsData[0].may_14);
                            }
                            if (GroundWaterLevelsData[0].may_15 != null && GroundWaterLevelsData[0].may_15 != "NULL")
                            {
                                ViewBag.may_15 = float.Parse(GroundWaterLevelsData[0].may_15);
                            }
                            if (GroundWaterLevelsData[0].may_16 != null && GroundWaterLevelsData[0].may_16 != "NULL")
                            {
                                ViewBag.may_16 = float.Parse(GroundWaterLevelsData[0].may_16);
                            }
                            if (GroundWaterLevelsData[0].may_17 != null && GroundWaterLevelsData[0].may_17 != "NULL")
                            {
                                ViewBag.may_17 = float.Parse(GroundWaterLevelsData[0].may_17);
                            }
                            if (GroundWaterLevelsData[0].may_18 != null && GroundWaterLevelsData[0].may_18 != "NULL")
                            {
                                ViewBag.may_18 = float.Parse(GroundWaterLevelsData[0].may_18);
                            }
                            if (GroundWaterLevelsData[0].aug_14 != null && GroundWaterLevelsData[0].aug_14 != "NULL")
                            {
                                ViewBag.aug_14 = float.Parse(GroundWaterLevelsData[0].aug_14);
                            }
                            if (GroundWaterLevelsData[0].aug_15 != null && GroundWaterLevelsData[0].aug_15 != "NULL")
                            {
                                ViewBag.aug_15 = float.Parse(GroundWaterLevelsData[0].aug_15);
                            }
                            if (GroundWaterLevelsData[0].aug_16 != null && GroundWaterLevelsData[0].aug_16 != "NULL")
                            {
                                ViewBag.aug_16 = float.Parse(GroundWaterLevelsData[0].aug_16);
                            }
                            if (GroundWaterLevelsData[0].aug_17 != null && GroundWaterLevelsData[0].aug_17 != "NULL")
                            {
                                ViewBag.aug_17 = float.Parse(GroundWaterLevelsData[0].aug_17);
                            }
                            if (GroundWaterLevelsData[0].aug_18 != null && GroundWaterLevelsData[0].aug_18 != "NULL")
                            {
                                ViewBag.aug_18 = float.Parse(GroundWaterLevelsData[0].aug_18);
                            }
                            if (GroundWaterLevelsData[0].nov_14 != null && GroundWaterLevelsData[0].nov_14 != "NULL")
                            {
                                ViewBag.nov_14 = float.Parse(GroundWaterLevelsData[0].nov_14);
                            }
                            if (GroundWaterLevelsData[0].nov_15 != null && GroundWaterLevelsData[0].nov_15 != "NULL")
                            {
                                ViewBag.nov_15 = float.Parse(GroundWaterLevelsData[0].nov_15);
                            }
                            if (GroundWaterLevelsData[0].nov_16 != null && GroundWaterLevelsData[0].nov_16 != "NULL")
                            {
                                ViewBag.nov_16 = float.Parse(GroundWaterLevelsData[0].nov_16);
                            }
                            if (GroundWaterLevelsData[0].nov_17 != null && GroundWaterLevelsData[0].nov_17 != "NULL")
                            {
                                ViewBag.nov_17 = float.Parse(GroundWaterLevelsData[0].nov_17);
                            }
                            if (GroundWaterLevelsData[0].nov_18 != null && GroundWaterLevelsData[0].nov_18 != "NULL")
                            {
                                ViewBag.nov_18 = float.Parse(GroundWaterLevelsData[0].nov_18);
                            }

                        }
                        else
                        {

                            ViewBag.Alert = null;

                            ViewBag.ModelDatanull = "NoData";
                        }

                        if (ViewBag.WaterRainFall == null)
                        {
                            ViewBag.ModelDatanull1 = "NoData";
                        }
                        ViewBag.GroundWaterLevelsData = GroundWaterLevelsData;
                        List<Abhy_groundwater_levels2> model11 = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName && x.district_name == DistName).ToList();
                        if (model11.Count != 0)
                        {
                            return View(model11);
                        }
                    }
                    else
                    {
                        ViewBag.WaterLevel = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName).ToList();

                        ViewBag.RainfallDataFull = ABE.objAbhy_Total_Rainfall.Where(x => x.state_name == StateName).ToList();
                        var Data = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName).ToList();
                        var GroundWaterLevelsData = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName).Take(1).ToList();
                        ViewBag.GroundWaterLevelsData = GroundWaterLevelsData;
                        var abhy_groundwater_quality = ABE.objAbhy_groundwater_quality.Where(x => x.state_name == StateName).ToList();
                        if (abhy_groundwater_quality.Count != 0)
                        {
                            Session["Salinity"] = abhy_groundwater_quality[0].ec;
                            Session["Chloride"] = abhy_groundwater_quality[0].chloride;
                            Session["Fluoride"] = abhy_groundwater_quality[0].fluoride;
                            Session["Sulphate"] = abhy_groundwater_quality[0].sulphate;
                            Session["Nitrate"] = abhy_groundwater_quality[0].nitrate;
                            Session["Iron"] = abhy_groundwater_quality[0].fe;

                        }
                        if (GroundWaterLevelsData.Count != 0)
                        {
                            ViewBag.jan_14 = 0;
                            ViewBag.jan_15 = 0;
                            ViewBag.jan_16 = 0;
                            ViewBag.jan_17 = 0;
                            ViewBag.jan_18 = 0;
                            ViewBag.jan_19 = 0;
                            ViewBag.may_14 = 0;
                            ViewBag.may_15 = 0;
                            ViewBag.may_16 = 0;
                            ViewBag.may_17 = 0;
                            ViewBag.may_18 = 0;
                            ViewBag.aug_14 = 0;
                            ViewBag.aug_15 = 0;
                            ViewBag.aug_16 = 0;
                            ViewBag.aug_17 = 0;
                            ViewBag.aug_18 = 0;
                            ViewBag.nov_14 = 0;
                            ViewBag.nov_15 = 0;
                            ViewBag.nov_16 = 0;
                            ViewBag.nov_17 = 0;
                            ViewBag.nov_18 = 0;
                            if (GroundWaterLevelsData[0].jan_14 != null && GroundWaterLevelsData[0].jan_14 != "NULL")
                            {
                                ViewBag.jan_14 = float.Parse(GroundWaterLevelsData[0].jan_14);
                            }
                            if (GroundWaterLevelsData[0].jan_15 != null && GroundWaterLevelsData[0].jan_15 != "NULL")
                            {
                                ViewBag.jan_15 = float.Parse(GroundWaterLevelsData[0].jan_15);
                            }
                            if (GroundWaterLevelsData[0].jan_16 != null && GroundWaterLevelsData[0].jan_16 != "NULL")
                            {
                                ViewBag.jan_16 = float.Parse(GroundWaterLevelsData[0].jan_16);
                            }
                            if (GroundWaterLevelsData[0].jan_17 != null && GroundWaterLevelsData[0].jan_17 != "NULL")
                            {
                                ViewBag.jan_17 = float.Parse(GroundWaterLevelsData[0].jan_17);
                            }
                            if (GroundWaterLevelsData[0].jan_18 != null && GroundWaterLevelsData[0].jan_18 != "NULL")
                            {
                                ViewBag.jan_18 = float.Parse(GroundWaterLevelsData[0].jan_18);
                            }
                            if (GroundWaterLevelsData[0].jan_19 != null && GroundWaterLevelsData[0].jan_19 != "NULL")
                            {
                                ViewBag.jan_19 = float.Parse(GroundWaterLevelsData[0].jan_19);
                            }

                            if (GroundWaterLevelsData[0].may_14 != null && GroundWaterLevelsData[0].may_14 != "NULL")
                            {
                                ViewBag.may_14 = float.Parse(GroundWaterLevelsData[0].may_14);
                            }
                            if (GroundWaterLevelsData[0].may_15 != null && GroundWaterLevelsData[0].may_15 != "NULL")
                            {
                                ViewBag.may_15 = float.Parse(GroundWaterLevelsData[0].may_15);
                            }
                            if (GroundWaterLevelsData[0].may_16 != null && GroundWaterLevelsData[0].may_16 != "NULL")
                            {
                                ViewBag.may_16 = float.Parse(GroundWaterLevelsData[0].may_16);
                            }
                            if (GroundWaterLevelsData[0].may_17 != null && GroundWaterLevelsData[0].may_17 != "NULL")
                            {
                                ViewBag.may_17 = float.Parse(GroundWaterLevelsData[0].may_17);
                            }
                            if (GroundWaterLevelsData[0].may_18 != null && GroundWaterLevelsData[0].may_18 != "NULL")
                            {
                                ViewBag.may_18 = float.Parse(GroundWaterLevelsData[0].may_18);
                            }
                            if (GroundWaterLevelsData[0].aug_14 != null && GroundWaterLevelsData[0].aug_14 != "NULL")
                            {
                                ViewBag.aug_14 = float.Parse(GroundWaterLevelsData[0].aug_14);
                            }
                            if (GroundWaterLevelsData[0].aug_15 != null && GroundWaterLevelsData[0].aug_15 != "NULL")
                            {
                                ViewBag.aug_15 = float.Parse(GroundWaterLevelsData[0].aug_15);
                            }
                            if (GroundWaterLevelsData[0].aug_16 != null && GroundWaterLevelsData[0].aug_16 != "NULL")
                            {
                                ViewBag.aug_16 = float.Parse(GroundWaterLevelsData[0].aug_16);
                            }
                            if (GroundWaterLevelsData[0].aug_17 != null && GroundWaterLevelsData[0].aug_17 != "NULL")
                            {
                                ViewBag.aug_17 = float.Parse(GroundWaterLevelsData[0].aug_17);
                            }
                            if (GroundWaterLevelsData[0].aug_18 != null && GroundWaterLevelsData[0].aug_18 != "NULL")
                            {
                                ViewBag.aug_18 = float.Parse(GroundWaterLevelsData[0].aug_18);
                            }
                            if (GroundWaterLevelsData[0].nov_14 != null && GroundWaterLevelsData[0].nov_14 != "NULL")
                            {
                                ViewBag.nov_14 = float.Parse(GroundWaterLevelsData[0].nov_14);
                            }
                            if (GroundWaterLevelsData[0].nov_15 != null && GroundWaterLevelsData[0].nov_15 != "NULL")
                            {
                                ViewBag.nov_15 = float.Parse(GroundWaterLevelsData[0].nov_15);
                            }
                            if (GroundWaterLevelsData[0].nov_16 != null && GroundWaterLevelsData[0].nov_16 != "NULL")
                            {
                                ViewBag.nov_16 = float.Parse(GroundWaterLevelsData[0].nov_16);
                            }
                            if (GroundWaterLevelsData[0].nov_17 != null && GroundWaterLevelsData[0].nov_17 != "NULL")
                            {
                                ViewBag.nov_17 = float.Parse(GroundWaterLevelsData[0].nov_17);
                            }
                            if (GroundWaterLevelsData[0].nov_18 != null && GroundWaterLevelsData[0].nov_18 != "NULL")
                            {
                                ViewBag.nov_18 = float.Parse(GroundWaterLevelsData[0].nov_18);
                            }

                        }
                        else
                        {

                            ViewBag.Alert = null;

                            ViewBag.ModelDatanull = "NoData";
                        }

                        if (ViewBag.WaterRainFall == null)
                        {
                            ViewBag.ModelDatanull1 = "NoData";
                        }
                        ViewBag.GroundWaterLevelsData = GroundWaterLevelsData;
                        List<Abhy_groundwater_levels2> model11 = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName).ToList();
                        if (model11.Count != 0)
                        {
                            return View(model11);
                        }
                    }




                }


                return View();
            }

        }
        [HttpPost]
        public ActionResult GroundWaterMonitoring(string state, string dist, string block)
        {
            ViewBag.ModelDatanull1 = "1";
            Session["ac"] = "1";
            ViewBag.RainFallFinalData = ABE.objAbhy_Total_Rainfall.ToList();
            ViewBag.Sitesdata = ABE.objabhy_groundwater_levels2.ToList();
            ViewBag.Sitesdata = ABE.objabhy_groundwater_levels2.ToList();

            if (Session["gstate"] != null && Session["gstate"].ToString() != "")
            {
                string StateName = "";
                string DistName = "";
                string BlockName = "";

                if (state != "")
                {
                    var stateid = Convert.ToInt32(state);

                    var States = ABE.objabhy_states.Where(x => x.sid == stateid).ToList();
                    StateName = States[0].statename;
                    Session["gstate"] = StateName;

                }
                else
                {
                    Session["gstate"] = "";
                }
                if (dist != "")
                {
                    var distid = Convert.ToInt32(dist);

                    var Dists = ABE.objabhy_districts.Where(x => x.did == distid).ToList();
                    DistName = Dists[0].district_name;
                    Session["gdist"] = DistName;

                }
                else
                {
                    Session["gdist"] = "";
                }

                if (block != "")
                {
                    var blockid = Convert.ToInt32(block);

                    var Blocks = ABE.objabhy_blocks.Where(x => x.bid == blockid).ToList();
                    BlockName = Blocks[0].block_name;
                    Session["gblock"] = BlockName;
                    Session["Location"] = Session["gblock"].ToString();


                }
                else
                {
                    Session["gblock"] = "";
                }


                ViewBag.abhy_groundwater_quality = null;

                if (state != null && state != "" && dist != null && dist != "" && block != null && block != "")
                {
                    List<Abhy_groundwater_levels2> model1 = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName && x.district_name == DistName && x.block == BlockName).ToList();
                    var abhy_groundwater_quality = ABE.objAbhy_groundwater_quality.Where(x => x.state_name == StateName && x.disrict_name == DistName && x.block == BlockName && x.year == "2015").Take(1).ToList();
                    ViewBag.abhy_groundwater_quality = abhy_groundwater_quality;
                    if (ViewBag.abhy_groundwater_quality.Count != 0)
                    {
                        Session["ph"] = ViewBag.abhy_groundwater_quality[0].ph;
                        Session["ec"] = ViewBag.abhy_groundwater_quality[0].ec;
                        Session["th"] = ViewBag.abhy_groundwater_quality[0].th;
                        Session["tot_alkalinity"] = ViewBag.abhy_groundwater_quality[0].tot_alkalinity;
                        Session["ca"] = ViewBag.abhy_groundwater_quality[0].ca;
                        Session["mg"] = ViewBag.abhy_groundwater_quality[0].mg;
                        Session["na"] = ViewBag.abhy_groundwater_quality[0].na;
                        Session["k"] = ViewBag.abhy_groundwater_quality[0].k;
                        Session["carbonate"] = ViewBag.abhy_groundwater_quality[0].carbonate;
                        Session["bicarbonate"] = ViewBag.abhy_groundwater_quality[0].bicarbonate;

                        Session["Chloride"] = ViewBag.abhy_groundwater_quality[0].chloride;
                        Session["Sulphate"] = ViewBag.abhy_groundwater_quality[0].sulphate;
                        Session["Fluoride"] = ViewBag.abhy_groundwater_quality[0].fluoride;

                        Session["Nitrate"] = ViewBag.abhy_groundwater_quality[0].nitrate;
                        Session["Iron"] = ViewBag.abhy_groundwater_quality[0].fe;
                        Session["sar"] = ViewBag.abhy_groundwater_quality[0].sar;
                        Session["rsc"] = ViewBag.abhy_groundwater_quality[0].rsc;
                    }
                    ViewBag.RainfallDataFull = ABE.objAbhy_Total_Rainfall.Where(x => x.state_name == StateName && x.district_name == DistName && x.block == BlockName).ToList();
                    var GroundWaterLevelsData = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName && x.district_name == DistName && x.block == BlockName/* && x.site_name == SiteName*/).Take(1).ToList();
                    ViewBag.GroundWaterLevelsData = GroundWaterLevelsData;
                    var Data = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName).ToList();
                    List<Abhy_groundwater_levels2> ViewData1 = ABE.objabhy_groundwater_levels2.ToList();
                    ViewBag.WaterLevel = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName && x.district_name == DistName && x.block == BlockName).ToList();
                    if (GroundWaterLevelsData.Count != 0)
                    {
                        ViewBag.jan_14 = 0;
                        ViewBag.jan_15 = 0;
                        ViewBag.jan_16 = 0;
                        ViewBag.jan_17 = 0;
                        ViewBag.jan_18 = 0;
                        ViewBag.jan_19 = 0;
                        ViewBag.may_14 = 0;
                        ViewBag.may_15 = 0;
                        ViewBag.may_16 = 0;
                        ViewBag.may_17 = 0;
                        ViewBag.may_18 = 0;
                        ViewBag.aug_14 = 0;
                        ViewBag.aug_15 = 0;
                        ViewBag.aug_16 = 0;
                        ViewBag.aug_17 = 0;
                        ViewBag.aug_18 = 0;
                        ViewBag.nov_14 = 0;
                        ViewBag.nov_15 = 0;
                        ViewBag.nov_16 = 0;
                        ViewBag.nov_17 = 0;
                        ViewBag.nov_18 = 0;
                        if (GroundWaterLevelsData[0].jan_14 != null && GroundWaterLevelsData[0].jan_14 != "NULL")
                        {
                            ViewBag.jan_14 = float.Parse(GroundWaterLevelsData[0].jan_14);
                        }
                        if (GroundWaterLevelsData[0].jan_15 != null && GroundWaterLevelsData[0].jan_15 != "NULL")
                        {
                            ViewBag.jan_15 = float.Parse(GroundWaterLevelsData[0].jan_15);
                        }
                        if (GroundWaterLevelsData[0].jan_16 != null && GroundWaterLevelsData[0].jan_16 != "NULL")
                        {
                            ViewBag.jan_16 = float.Parse(GroundWaterLevelsData[0].jan_16);
                        }
                        if (GroundWaterLevelsData[0].jan_17 != null && GroundWaterLevelsData[0].jan_17 != "NULL")
                        {
                            ViewBag.jan_17 = float.Parse(GroundWaterLevelsData[0].jan_17);
                        }
                        if (GroundWaterLevelsData[0].jan_18 != null && GroundWaterLevelsData[0].jan_18 != "NULL")
                        {
                            ViewBag.jan_18 = float.Parse(GroundWaterLevelsData[0].jan_18);
                        }
                        if (GroundWaterLevelsData[0].jan_19 != null && GroundWaterLevelsData[0].jan_19 != "NULL")
                        {
                            ViewBag.jan_19 = float.Parse(GroundWaterLevelsData[0].jan_19);
                        }

                        if (GroundWaterLevelsData[0].may_14 != null && GroundWaterLevelsData[0].may_14 != "NULL")
                        {
                            ViewBag.may_14 = float.Parse(GroundWaterLevelsData[0].may_14);
                        }
                        if (GroundWaterLevelsData[0].may_15 != null && GroundWaterLevelsData[0].may_15 != "NULL")
                        {
                            ViewBag.may_15 = float.Parse(GroundWaterLevelsData[0].may_15);
                        }
                        if (GroundWaterLevelsData[0].may_16 != null && GroundWaterLevelsData[0].may_16 != "NULL")
                        {
                            ViewBag.may_16 = float.Parse(GroundWaterLevelsData[0].may_16);
                        }
                        if (GroundWaterLevelsData[0].may_17 != null && GroundWaterLevelsData[0].may_17 != "NULL")
                        {
                            ViewBag.may_17 = float.Parse(GroundWaterLevelsData[0].may_17);
                        }
                        if (GroundWaterLevelsData[0].may_18 != null && GroundWaterLevelsData[0].may_18 != "NULL")
                        {
                            ViewBag.may_18 = float.Parse(GroundWaterLevelsData[0].may_18);
                        }



                        if (GroundWaterLevelsData[0].nov_14 != null && GroundWaterLevelsData[0].nov_14 != "NULL")
                        {
                            ViewBag.nov_14 = float.Parse(GroundWaterLevelsData[0].nov_14);
                        }
                        if (GroundWaterLevelsData[0].nov_15 != null && GroundWaterLevelsData[0].nov_15 != "NULL")
                        {
                            ViewBag.nov_15 = float.Parse(GroundWaterLevelsData[0].nov_15);
                        }
                        if (GroundWaterLevelsData[0].nov_16 != null && GroundWaterLevelsData[0].nov_16 != "NULL")
                        {
                            ViewBag.nov_16 = float.Parse(GroundWaterLevelsData[0].nov_16);
                        }
                        if (GroundWaterLevelsData[0].nov_17 != null && GroundWaterLevelsData[0].nov_17 != "NULL")
                        {
                            ViewBag.nov_17 = float.Parse(GroundWaterLevelsData[0].nov_17);
                        }
                        if (GroundWaterLevelsData[0].nov_18 != null && GroundWaterLevelsData[0].nov_18 != "NULL")
                        {
                            ViewBag.nov_18 = float.Parse(GroundWaterLevelsData[0].nov_18);
                        }

                    }
                    else
                    {
                        ViewBag.ModelDatanull = "NoData";
                    }
                    if (ViewBag.WaterRainFall == null)
                    {
                        ViewBag.ModelDatanull1 = "NoData";
                    }
                    var ViewData = ViewData1.Count();

                    List<Abhy_groundwater_levels2> model11 = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName && x.district_name == DistName && x.block == BlockName/* && x.site_name == SiteName*/).Take(1).ToList();
                    List<Abhy_groundwater_levels2> model3 = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName && x.district_name == DistName && x.block == BlockName).ToList();
                    return View(model3);
                }
                else if (state != null && state != "" && dist != null && dist != "")
                {
                    List<Abhy_groundwater_levels2> model1 = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName && x.district_name == DistName).ToList();
                    var abhy_groundwater_quality = ABE.objAbhy_groundwater_quality.Where(x => x.state_name == StateName && x.disrict_name == DistName && x.year == "2015").Take(1).ToList();
                    ViewBag.abhy_groundwater_quality = abhy_groundwater_quality;
                    if (ViewBag.abhy_groundwater_quality.Count != 0)
                    {
                        Session["ph"] = ViewBag.abhy_groundwater_quality[0].ph;
                        Session["ec"] = ViewBag.abhy_groundwater_quality[0].ec;
                        Session["th"] = ViewBag.abhy_groundwater_quality[0].th;
                        Session["tot_alkalinity"] = ViewBag.abhy_groundwater_quality[0].tot_alkalinity;
                        Session["ca"] = ViewBag.abhy_groundwater_quality[0].ca;
                        Session["mg"] = ViewBag.abhy_groundwater_quality[0].mg;
                        Session["na"] = ViewBag.abhy_groundwater_quality[0].na;
                        Session["k"] = ViewBag.abhy_groundwater_quality[0].k;
                        Session["carbonate"] = ViewBag.abhy_groundwater_quality[0].carbonate;
                        Session["bicarbonate"] = ViewBag.abhy_groundwater_quality[0].bicarbonate;

                        Session["Chloride"] = ViewBag.abhy_groundwater_quality[0].chloride;
                        Session["Sulphate"] = ViewBag.abhy_groundwater_quality[0].sulphate;
                        Session["Fluoride"] = ViewBag.abhy_groundwater_quality[0].fluoride;

                        Session["Nitrate"] = ViewBag.abhy_groundwater_quality[0].nitrate;
                        Session["Iron"] = ViewBag.abhy_groundwater_quality[0].fe;
                        Session["sar"] = ViewBag.abhy_groundwater_quality[0].sar;
                        Session["rsc"] = ViewBag.abhy_groundwater_quality[0].rsc;
                    }
                    ViewBag.RainfallDataFull = ABE.objAbhy_Total_Rainfall.Where(x => x.state_name == StateName && x.district_name == DistName/* && x.station == StationName*/).ToList();
                    // List<GroundwaterLevels> ViewData1 = ABE.objGroundwaterLevels.ToList();
                    var GroundWaterLevelsData = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName && x.district_name == DistName/* && x.site_name == SiteName*/).Take(1).ToList();
                    ViewBag.GroundWaterLevelsData = GroundWaterLevelsData;
                    var Data = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName).ToList();

                    List<Abhy_groundwater_levels2> ViewData1 = ABE.objabhy_groundwater_levels2.ToList();
                    ViewBag.WaterLevel = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName && x.district_name == DistName /* && x.site_name == SiteName*/).ToList();
                    if (GroundWaterLevelsData.Count != 0)
                    {
                        ViewBag.jan_14 = 0;
                        ViewBag.jan_15 = 0;
                        ViewBag.jan_16 = 0;
                        ViewBag.jan_17 = 0;
                        ViewBag.jan_18 = 0;
                        ViewBag.jan_19 = 0;
                        ViewBag.may_14 = 0;
                        ViewBag.may_15 = 0;
                        ViewBag.may_16 = 0;
                        ViewBag.may_17 = 0;
                        ViewBag.may_18 = 0;
                        ViewBag.aug_14 = 0;
                        ViewBag.aug_15 = 0;
                        ViewBag.aug_16 = 0;
                        ViewBag.aug_17 = 0;
                        ViewBag.aug_18 = 0;
                        ViewBag.nov_14 = 0;
                        ViewBag.nov_15 = 0;
                        ViewBag.nov_16 = 0;
                        ViewBag.nov_17 = 0;
                        ViewBag.nov_18 = 0;
                        if (GroundWaterLevelsData[0].jan_14 != null && GroundWaterLevelsData[0].jan_14 != "NULL")
                        {
                            ViewBag.jan_14 = float.Parse(GroundWaterLevelsData[0].jan_14);
                        }
                        if (GroundWaterLevelsData[0].jan_15 != null && GroundWaterLevelsData[0].jan_15 != "NULL")
                        {
                            ViewBag.jan_15 = float.Parse(GroundWaterLevelsData[0].jan_15);
                        }
                        if (GroundWaterLevelsData[0].jan_16 != null && GroundWaterLevelsData[0].jan_16 != "NULL")
                        {
                            ViewBag.jan_16 = float.Parse(GroundWaterLevelsData[0].jan_16);
                        }
                        if (GroundWaterLevelsData[0].jan_17 != null && GroundWaterLevelsData[0].jan_17 != "NULL")
                        {
                            ViewBag.jan_17 = float.Parse(GroundWaterLevelsData[0].jan_17);
                        }
                        if (GroundWaterLevelsData[0].jan_18 != null && GroundWaterLevelsData[0].jan_18 != "NULL")
                        {
                            ViewBag.jan_18 = float.Parse(GroundWaterLevelsData[0].jan_18);
                        }
                        if (GroundWaterLevelsData[0].jan_19 != null && GroundWaterLevelsData[0].jan_19 != "NULL")
                        {
                            ViewBag.jan_19 = float.Parse(GroundWaterLevelsData[0].jan_19);
                        }

                        if (GroundWaterLevelsData[0].may_14 != null && GroundWaterLevelsData[0].may_14 != "NULL")
                        {
                            ViewBag.may_14 = float.Parse(GroundWaterLevelsData[0].may_14);
                        }
                        if (GroundWaterLevelsData[0].may_15 != null && GroundWaterLevelsData[0].may_15 != "NULL")
                        {
                            ViewBag.may_15 = float.Parse(GroundWaterLevelsData[0].may_15);
                        }
                        if (GroundWaterLevelsData[0].may_16 != null && GroundWaterLevelsData[0].may_16 != "NULL")
                        {
                            ViewBag.may_16 = float.Parse(GroundWaterLevelsData[0].may_16);
                        }
                        if (GroundWaterLevelsData[0].may_17 != null && GroundWaterLevelsData[0].may_17 != "NULL")
                        {
                            ViewBag.may_17 = float.Parse(GroundWaterLevelsData[0].may_17);
                        }
                        if (GroundWaterLevelsData[0].may_18 != null && GroundWaterLevelsData[0].may_18 != "NULL")
                        {
                            ViewBag.may_18 = float.Parse(GroundWaterLevelsData[0].may_18);
                        }
                        if (GroundWaterLevelsData[0].aug_14 != null && GroundWaterLevelsData[0].aug_14 != "NULL")
                        {
                            ViewBag.aug_14 = float.Parse(GroundWaterLevelsData[0].aug_14);
                        }
                        if (GroundWaterLevelsData[0].aug_15 != null && GroundWaterLevelsData[0].aug_15 != "NULL")
                        {
                            ViewBag.aug_15 = float.Parse(GroundWaterLevelsData[0].aug_15);
                        }
                        if (GroundWaterLevelsData[0].aug_16 != null && GroundWaterLevelsData[0].aug_16 != "NULL")
                        {
                            ViewBag.aug_16 = float.Parse(GroundWaterLevelsData[0].aug_16);
                        }
                        if (GroundWaterLevelsData[0].aug_17 != null && GroundWaterLevelsData[0].aug_17 != "NULL")
                        {
                            ViewBag.aug_17 = float.Parse(GroundWaterLevelsData[0].aug_17);
                        }
                        if (GroundWaterLevelsData[0].aug_18 != null && GroundWaterLevelsData[0].aug_18 != "NULL")
                        {
                            ViewBag.aug_18 = float.Parse(GroundWaterLevelsData[0].aug_18);
                        }
                        if (GroundWaterLevelsData[0].nov_14 != null && GroundWaterLevelsData[0].nov_14 != "NULL")
                        {
                            ViewBag.nov_14 = float.Parse(GroundWaterLevelsData[0].nov_14);
                        }
                        if (GroundWaterLevelsData[0].nov_15 != null && GroundWaterLevelsData[0].nov_15 != "NULL")
                        {
                            ViewBag.nov_15 = float.Parse(GroundWaterLevelsData[0].nov_15);
                        }
                        if (GroundWaterLevelsData[0].nov_16 != null && GroundWaterLevelsData[0].nov_16 != "NULL")
                        {
                            ViewBag.nov_16 = float.Parse(GroundWaterLevelsData[0].nov_16);
                        }
                        if (GroundWaterLevelsData[0].nov_17 != null && GroundWaterLevelsData[0].nov_17 != "NULL")
                        {
                            ViewBag.nov_17 = float.Parse(GroundWaterLevelsData[0].nov_17);
                        }
                        if (GroundWaterLevelsData[0].nov_18 != null && GroundWaterLevelsData[0].nov_18 != "NULL")
                        {
                            ViewBag.nov_18 = float.Parse(GroundWaterLevelsData[0].nov_18);
                        }
                    }
                    else
                    {
                        ViewBag.ModelDatanull = "NoData";
                    }
                    if (ViewBag.WaterRainFall == null)
                    {
                        ViewBag.ModelDatanull1 = "NoData";
                    }
                    var ViewData = ViewData1.Count();
                    List<Abhy_groundwater_levels2> model11 = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName && x.district_name == DistName /* && x.site_name == SiteName*/).Take(1).ToList();
                    List<Abhy_groundwater_levels2> model2 = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName && x.district_name == DistName).ToList();
                    return View(model2);

                }

                else
                {
                    List<Abhy_groundwater_levels2> model1 = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName).ToList();
                    var abhy_groundwater_quality = ABE.objAbhy_groundwater_quality.Where(x => x.state_name == StateName && x.year == "2015").Take(1).ToList();
                    ViewBag.abhy_groundwater_quality = abhy_groundwater_quality;
                    if (ViewBag.abhy_groundwater_quality.Count != 0)
                    {
                        Session["ph"] = ViewBag.abhy_groundwater_quality[0].ph;
                        Session["ec"] = ViewBag.abhy_groundwater_quality[0].ec;
                        Session["th"] = ViewBag.abhy_groundwater_quality[0].th;
                        Session["tot_alkalinity"] = ViewBag.abhy_groundwater_quality[0].tot_alkalinity;
                        Session["ca"] = ViewBag.abhy_groundwater_quality[0].ca;
                        Session["mg"] = ViewBag.abhy_groundwater_quality[0].mg;
                        Session["na"] = ViewBag.abhy_groundwater_quality[0].na;
                        Session["k"] = ViewBag.abhy_groundwater_quality[0].k;
                        Session["carbonate"] = ViewBag.abhy_groundwater_quality[0].carbonate;
                        Session["bicarbonate"] = ViewBag.abhy_groundwater_quality[0].bicarbonate;

                        Session["Chloride"] = ViewBag.abhy_groundwater_quality[0].chloride;
                        Session["Sulphate"] = ViewBag.abhy_groundwater_quality[0].sulphate;
                        Session["Fluoride"] = ViewBag.abhy_groundwater_quality[0].fluoride;

                        Session["Nitrate"] = ViewBag.abhy_groundwater_quality[0].nitrate;
                        Session["Iron"] = ViewBag.abhy_groundwater_quality[0].fe;
                        Session["sar"] = ViewBag.abhy_groundwater_quality[0].sar;
                        Session["rsc"] = ViewBag.abhy_groundwater_quality[0].rsc;
                    }
                    ViewBag.RainfallDataFull = ABE.objAbhy_Total_Rainfall.Where(x => x.state_name == StateName/* && x.station == StationName*/).ToList();
                    // List<GroundwaterLevels> ViewData1 = ABE.objGroundwaterLevels.ToList();
                    var GroundWaterLevelsData = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName /* && x.site_name == SiteName*/).Take(1).ToList();
                    ViewBag.GroundWaterLevelsData = GroundWaterLevelsData;
                    var Data = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName).ToList();
                    List<Abhy_groundwater_levels2> ViewData1 = ABE.objabhy_groundwater_levels2.ToList();
                    ViewBag.WaterLevel = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName /* && x.site_name == SiteName*/).ToList();
                    if (GroundWaterLevelsData.Count != 0)
                    {
                        ViewBag.jan_14 = 0;
                        ViewBag.jan_15 = 0;
                        ViewBag.jan_16 = 0;
                        ViewBag.jan_17 = 0;
                        ViewBag.jan_18 = 0;
                        ViewBag.jan_19 = 0;
                        ViewBag.may_14 = 0;
                        ViewBag.may_15 = 0;
                        ViewBag.may_16 = 0;
                        ViewBag.may_17 = 0;
                        ViewBag.may_18 = 0;
                        ViewBag.aug_14 = 0;
                        ViewBag.aug_15 = 0;
                        ViewBag.aug_16 = 0;
                        ViewBag.aug_17 = 0;
                        ViewBag.aug_18 = 0;
                        ViewBag.nov_14 = 0;
                        ViewBag.nov_15 = 0;
                        ViewBag.nov_16 = 0;
                        ViewBag.nov_17 = 0;
                        ViewBag.nov_18 = 0;
                        if (GroundWaterLevelsData[0].jan_14 != null && GroundWaterLevelsData[0].jan_14 != "NULL")
                        {
                            ViewBag.jan_14 = float.Parse(GroundWaterLevelsData[0].jan_14);
                        }
                        if (GroundWaterLevelsData[0].jan_15 != null && GroundWaterLevelsData[0].jan_15 != "NULL")
                        {
                            ViewBag.jan_15 = float.Parse(GroundWaterLevelsData[0].jan_15);
                        }
                        if (GroundWaterLevelsData[0].jan_16 != null && GroundWaterLevelsData[0].jan_16 != "NULL")
                        {
                            ViewBag.jan_16 = float.Parse(GroundWaterLevelsData[0].jan_16);
                        }
                        if (GroundWaterLevelsData[0].jan_17 != null && GroundWaterLevelsData[0].jan_17 != "NULL")
                        {
                            ViewBag.jan_17 = float.Parse(GroundWaterLevelsData[0].jan_17);
                        }
                        if (GroundWaterLevelsData[0].jan_18 != null && GroundWaterLevelsData[0].jan_18 != "NULL")
                        {
                            ViewBag.jan_18 = float.Parse(GroundWaterLevelsData[0].jan_18);
                        }
                        if (GroundWaterLevelsData[0].jan_19 != null && GroundWaterLevelsData[0].jan_19 != "NULL")
                        {
                            ViewBag.jan_19 = float.Parse(GroundWaterLevelsData[0].jan_19);
                        }

                        if (GroundWaterLevelsData[0].may_14 != null && GroundWaterLevelsData[0].may_14 != "NULL")
                        {
                            ViewBag.may_14 = float.Parse(GroundWaterLevelsData[0].may_14);
                        }
                        if (GroundWaterLevelsData[0].may_15 != null && GroundWaterLevelsData[0].may_15 != "NULL")
                        {
                            ViewBag.may_15 = float.Parse(GroundWaterLevelsData[0].may_15);
                        }
                        if (GroundWaterLevelsData[0].may_16 != null && GroundWaterLevelsData[0].may_16 != "NULL")
                        {
                            ViewBag.may_16 = float.Parse(GroundWaterLevelsData[0].may_16);
                        }
                        if (GroundWaterLevelsData[0].may_17 != null && GroundWaterLevelsData[0].may_17 != "NULL")
                        {
                            ViewBag.may_17 = float.Parse(GroundWaterLevelsData[0].may_17);
                        }
                        if (GroundWaterLevelsData[0].may_18 != null && GroundWaterLevelsData[0].may_18 != "NULL")
                        {
                            ViewBag.may_18 = float.Parse(GroundWaterLevelsData[0].may_18);
                        }
                        if (GroundWaterLevelsData[0].aug_14 != null && GroundWaterLevelsData[0].aug_14 != "NULL")
                        {
                            ViewBag.aug_14 = float.Parse(GroundWaterLevelsData[0].aug_14);
                        }
                        if (GroundWaterLevelsData[0].aug_15 != null && GroundWaterLevelsData[0].aug_15 != "NULL")
                        {
                            ViewBag.aug_15 = float.Parse(GroundWaterLevelsData[0].aug_15);
                        }
                        if (GroundWaterLevelsData[0].aug_16 != null && GroundWaterLevelsData[0].aug_16 != "NULL")
                        {
                            ViewBag.aug_16 = float.Parse(GroundWaterLevelsData[0].aug_16);
                        }
                        if (GroundWaterLevelsData[0].aug_17 != null && GroundWaterLevelsData[0].aug_17 != "NULL")
                        {
                            ViewBag.aug_17 = float.Parse(GroundWaterLevelsData[0].aug_17);
                        }
                        if (GroundWaterLevelsData[0].aug_18 != null && GroundWaterLevelsData[0].aug_18 != "NULL")
                        {
                            ViewBag.aug_18 = float.Parse(GroundWaterLevelsData[0].aug_18);
                        }
                        if (GroundWaterLevelsData[0].nov_14 != null && GroundWaterLevelsData[0].nov_14 != "NULL")
                        {
                            ViewBag.nov_14 = float.Parse(GroundWaterLevelsData[0].nov_14);
                        }
                        if (GroundWaterLevelsData[0].nov_15 != null && GroundWaterLevelsData[0].nov_15 != "NULL")
                        {
                            ViewBag.nov_15 = float.Parse(GroundWaterLevelsData[0].nov_15);
                        }
                        if (GroundWaterLevelsData[0].nov_16 != null && GroundWaterLevelsData[0].nov_16 != "NULL")
                        {
                            ViewBag.nov_16 = float.Parse(GroundWaterLevelsData[0].nov_16);
                        }
                        if (GroundWaterLevelsData[0].nov_17 != null && GroundWaterLevelsData[0].nov_17 != "NULL")
                        {
                            ViewBag.nov_17 = float.Parse(GroundWaterLevelsData[0].nov_17);
                        }
                        if (GroundWaterLevelsData[0].nov_18 != null && GroundWaterLevelsData[0].nov_18 != "NULL")
                        {
                            ViewBag.nov_18 = float.Parse(GroundWaterLevelsData[0].nov_18);
                        }
                    }
                    else
                    {
                        ViewBag.ModelDatanull = "NoData";
                    }
                    if (ViewBag.WaterRainFall == null)
                    {
                        ViewBag.ModelDatanull1 = "NoData";
                    }
                    var ViewData = ViewData1.Count();
                    List<Abhy_groundwater_levels2> model11 = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName  /* && x.site_name == SiteName*/).Take(1).ToList();




                    return View(model1);

                }

            }
            else
            {
                return RedirectToAction("GWM_login", "WspNew");
            }

        }


        [HttpGet]
        public ActionResult MisLogin()
        {
            if (Session["UserId"] == null)
            {

                return View();
            }
            else
            {
                ViewBag.Error = "Alredy Logined";
                return RedirectToAction("MisLogin", "WSP");
            }
        }
        [HttpPost]
        public ActionResult MisLogin(string useremail, string userpassword)
        {

            var UserDetails = ABE.objUsers.SingleOrDefault(x => x.Email == useremail.Trim() && x.Password == userpassword.Trim() && x.Verifiedornot == "True");

            var user_details = ABE.objUsers.SingleOrDefault(x => x.Email == useremail.Trim() && x.Password == userpassword.Trim() && x.Verifiedornot == "False");

            if (user_details != null)
            {
                ViewBag.Error = "Please check your mail and register before login";
                return View("MisLogin");
            }
            else
            {

                if (UserDetails != null)
                {
                    Session["Email"] = UserDetails.Email;
                    Session["Officer"] = UserDetails.NodalOfficer;
                    Session["UserName"] = UserDetails.UserName;
                    Session["UserId"] = UserDetails.UserId;
                    Session["gstate"] = UserDetails.StateName;
                    Session["gdist"] = UserDetails.DistrictName;

                    Session["gblock"] = UserDetails.BlockName;
                    Session["ggram"] = UserDetails.GramPanchayatName;
                    Session["gvill"] = UserDetails.Villagename;
                    if (Session["Officer"].ToString() == "Admin" || Session["Officer"].ToString() == "National Level Nodal Officer")
                    {
                        Session["Adminid"] = "0";
                    }


                    string[] Rolls = UserDetails.RollId.Split(',');

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

                    //if(Session["MisImageInfo"].ToString() == "SecurityPlan")
                    //{
                    return RedirectToAction("WSPHOME", "Wsp_new");
                    // }
                    //else /*if (Session["MisImageInfo"].ToString() == "GWM")*/
                    //{
                    //    return RedirectToAction("GroundWaterMonitoring", "WSP");

                    //}




                }
                else
                {
                    ViewBag.Error = "Not Matched Login Details";
                    return View("MisLogin");
                }
            }

        }
        [HttpGet]
        public ActionResult ForgetPassword()
        {
            return View();
        }


        [HttpPost]
        public ActionResult ForgetPassword(string Data)
        {
            JavaScriptSerializer js = new JavaScriptSerializer();
            var result = js.Deserialize<Users>(Data);

            var Email = result.Email.ToLower().Trim();

            List<Users> reg1 = ABE.objUsers.Where(x => x.Email == Email && x.Verifiedornot == "True").ToList();

            if (reg1.Count != 0 && result.Email == reg1[0].Email.Trim())
            {
                var Epass_ = reg1[0].Password;
                string decryptpwd = "";
                //UTF8Encoding encodepwd = new UTF8Encoding();
                //Decoder Decode = encodepwd.GetDecoder();
                //byte[] todecode_byte = Convert.FromBase64String(Epass_);
                //int charCount = Decode.GetCharCount(todecode_byte, 0, todecode_byte.Length);
                //char[] decoded_char = new char[charCount];
                //Decode.GetChars(todecode_byte, 0, todecode_byte.Length, decoded_char, 0);
                //decryptpwd = new String(decoded_char);




                string[] uuu = Request.Url.AbsoluteUri.Split('/');
                string GrievanceAprroved = uuu[0] + "//" + uuu[2] + "/Contact/Change_password";

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
                sb.Append("User Name: " + reg1[0].UserName.Trim());
                sb.Append("<br>");
                sb.Append("Email: " + reg1[0].Email.Trim());
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
                string results = WebConstents.SendEmailSMTP(result.Email, "", Mail_Subject, sb.ToString(), "");

                ViewBag.Error = "Please Check Your Mail";
                //Session["FCode"] = Code;
                return Json("Please Check Your Mail", JsonRequestBehavior.AllowGet);
            }
            else
            {
                ViewBag.Error = "You Have Not Registered";
                List<Users> reg11 = ABE.objUsers.Where(x => x.Email == result.Email).ToList();
                if (reg11.Count == 0)
                {
                    return Json("You Have Not Registered", JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("You had Registered but, you have to Activate your Account, Please check your Email", JsonRequestBehavior.AllowGet);
                }

            }

        }

        [HttpGet]
        public ActionResult MisSignUp()
        {
            return RedirectToAction("MisLogin");
        }
        [HttpPost]
        public ActionResult MisSignUp(string Data)
        {

            JavaScriptSerializer js = new JavaScriptSerializer();
            var result = js.Deserialize<Users>(Data);
            var users = ABE.objUsers.Where(x => x.Email == result.Email.Trim()).ToList();

            if (users.Count != 0)
            {

                return Json("Alredy registered", JsonRequestBehavior.AllowGet);
            }

            else
            {

                var Grampanchayat = "";
                var StateName = "";
                var DistName = "";
                var BlockName = "";
                if (result.GramPanchayatName != "" && result.GramPanchayatName != null)
                {

                    Grampanchayat = result.GramPanchayatName;
                    Session["ggram"] = Grampanchayat;
                }
                else
                {
                    Session["ggram"] = "";
                }
                if (result.StateName != "" && result.StateName != null)
                {

                    StateName = result.StateName;
                    Session["gstate"] = StateName;

                }
                else
                {
                    Session["gstate"] = "";
                }
                if (result.DistrictName != "" && result.DistrictName != null)
                {

                    DistName = result.DistrictName;
                    Session["gdist"] = DistName;

                }
                else
                {
                    Session["gdist"] = "";
                }

                if (result.BlockName != "" && result.BlockName != null)
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


                string Code = randomCodeGeneration();
                string email1 = result.Email.ToLower().Trim();


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
                string vertificatincode = uuu[0] + "//" + uuu[2] + "/WSP/Verify?code=" + viid;



                TempData["VerificationCode"] = vid.ToString();
                TempData["Verifiedornot"] = "false";




                string contemail = email1;


                StringBuilder sb = new StringBuilder();
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("<table style='margin-left:50px;'>");
                sb.Append("<tr  style='width:300px'>");
                sb.Append("</tr>");
                sb.Append("<tr style='width:300px'>");
                sb.Append("<td>");
                sb.Append("<b>Hello  " + userName + ",</b>");
                sb.Append("<br>");

                sb.Append("<h4>");
                sb.Append("Thanks for getting started with Abhy! We need a little more information to complete your registration, including confirmation of your email address. Click on Register button to confirm your email address:");
                sb.Append("</h4>");

                sb.Append("<br>");

                sb.Append("<button style='background-color: #337ab7;display: inline-block;padding: 6px 12px;margin-bottom: 0;font-size: 14px;font-weight: 400;line-height: 1.42857143;text-align: center;white-space: nowrap;vertical-align: middle;touch-action: manipulation;cursor: pointer;user-select: none;background-image: none;border: 1px solid transparent;border-radius: 8px;'>");
                sb.Append($"<a href='{vertificatincode}' style='text-decoration: none;color:white;'>Register</a>");
                sb.Append("</button>");
                /*width = 50 height = 31 border = 0 alt = Click title = Click ></ a >*/
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("Note: Never Share Your Credentials With Others!");
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("<img src=https://img1.wsimg.com/isteam/ip/c7009415-e7fa-45c8-b5e4-cbb576963468/logo/5a843789-34b8-41ac-8a9c-2fdb06ce0b89.png/:/rs=h:150/qt=q:95 width='300px'>");
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("Thanking You,");
                sb.Append("<br>");
                sb.Append("GCRS Team");
                sb.Append("</td>");
                sb.Append("</tr>");
                sb.Append("<tr>");
                sb.Append("</tr>");
                sb.Append("</table>");

                string results = WebConstents.SendEmailSMTP(contemail, "", "Please Verify Your Account to Continue - Abhy", sb.ToString(), "");
                if (results == "success")
                {
                    ViewBag.Error = "Activation Link sent to registered email id!";

                    Users NewUser = new Users();

                    NewUser.VerificationCode = vid.ToString().Trim();
                    NewUser.Verifiedornot = "False".Trim();
                    NewUser.UserName = result.UserName.ToString().Trim();
                    NewUser.ContactNumber = result.ContactNumber.ToString().Trim();
                    NewUser.Email = result.Email.ToString();
                    NewUser.DepartmentName = result.DepartmentName.ToString().Trim();
                    NewUser.Password = result.Password.ToString().Trim();
                    NewUser.NodalOfficer = result.NodalOfficer.ToString().Trim();
                    NewUser.RollId = "3".Trim();



                    if (Session["gstate"] == null)
                    {
                        NewUser.StateName = "null".Trim();
                    }
                    else
                    {
                        NewUser.StateName = Session["gstate"].ToString().Trim();
                    }

                    if (Session["gdist"] == null)
                    {
                        NewUser.DistrictName = "null".Trim();
                    }
                    else
                    {
                        NewUser.DistrictName = Session["gdist"].ToString().Trim();
                    }

                    if (Session["gblock"] == null)
                    {
                        NewUser.BlockName = "null".Trim();
                    }
                    else
                    {
                        NewUser.BlockName = Session["gblock"].ToString().Trim();
                    }

                    if (Session["ggram"] == null)
                    {
                        NewUser.GramPanchayatName = "null".Trim();
                    }
                    else
                    {

                        NewUser.GramPanchayatName = Session["ggram"].ToString().Trim();
                    }
                    if (Session["gvill"] == null)
                    {
                        NewUser.Villagename = "null".Trim();
                    }
                    else
                    {

                        NewUser.Villagename = Session["gvill"].ToString().Trim();
                    }
                    ABE.objUsers.Add(NewUser);

                    Abhy_Verifications objver = new Abhy_Verifications();
                    objver.verification_code = vid.ToString().Trim();

                    ABE.objAbhy_Verifications.Add(objver);

                    ABE.SaveChanges();
                }

                return Json("Please Check Your Gmail", JsonRequestBehavior.AllowGet);



            }



        }

        public ActionResult Verify(string code)
        {
            try
            {
                string vcode = code.Trim();
                List<Abhy_Verifications> ver = ABE.objAbhy_Verifications.Where(x => x.verification_code == vcode).ToList();


                if (ver.Count != 0)
                {
                    List<Users> users = ABE.objUsers.Where(x => x.VerificationCode == vcode).ToList();

                    if (users.Count != 0)
                    {

                        users[0].Verifiedornot = "True";
                        //ABE.Entry(Data1).State = EntityState.Deleted;
                        ABE.SaveChanges();
                    }
                    return RedirectToAction("MisLogin");


                }
                else
                {
                    ViewBag.Error = "Your Verification Code is Expired ";
                    return View("MisLogin");
                }
            }

            catch (Exception ex)
            {
                return RedirectToAction("MisLogin");
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
        public ActionResult Ground_Water_level()
        {
            return View();
        }
        public ActionResult gwl()
        {
            return View();
        }
        [HttpGet]
        public ActionResult Ground_water_Monitoring()
        {

            List<GroundWater> model = ABE.objGroundWater.ToList();
            return View(model);
        }
        [HttpPost]
        public ActionResult Ground_water_Monitoring(string long1, string lat, string gwlm, string rainfall, string State, string Dist, string Block, string Long, string Lat)
        {
            if (State == null || State == "")
            {

                if (Long != null && Long != "")
                {
                    return View();
                }
                else
                {
                    List<GroundWater> model = ABE.objGroundWater.ToList();
                    GroundWater model1 = new GroundWater();
                    model1.latitude = lat;
                    model1.longitude = long1;
                    model1.y2019_pre = gwlm;
                    model1.rainfall = rainfall;
                    model1.dateandtime = DateTime.Now.ToString();
                    model1.ground_waterlevel_id = model.Count + 1;
                    model1.block = "-";
                    model1.block_name = "-";
                    model1.chloride = "-";
                    model1.district = "-";
                    model1.electrical = "-";
                    model1.fluoride = "-";
                    model1.iron = "-";
                    model1.nitrate = "-";
                    model1.ph = "-";
                    model1.sitename = "-";
                    model1.site_id = "-";
                    model1.site_type = "-";
                    model1.state = "-";
                    model1.sulphate = "-";
                    model1.tds = "-";
                    model1.username = "-";
                    model1.vil_name = "-";
                    model1.wqa_bicarb = "-";
                    model1.wqa_ca = "-";
                    model1.wqa_carbon = "-";
                    model1.wqa_k = "-";
                    model1.wqa_mg = "-";
                    model1.wqa_na = "-";
                    model1.wqa_nitr_1 = "-";
                    model1.wqa_th = "-";
                    model1.wqa_total = "-";
                    model1.wtr_level = "-";
                    model1.y2007_post = "-";
                    model1.y2007_pre = "-";
                    model1.y2008_post = "-";
                    model1.y2008_pre = "-";
                    model1.y2009_post = "-";
                    model1.y2009_pre = "-";
                    model1.y2010_post = "-";
                    model1.y2010_pre = "-";
                    model1.y2010_post = "-";
                    model1.y2010_pre = "-";
                    model1.y2011_post = "-";
                    model1.y2011_pre = "-";
                    model1.y2012_post = "-";
                    model1.y2012_pre = "-";

                    model1.y2013_post = "-";
                    model1.y2013_pre = "-";
                    model1.y2014_post = "-";
                    model1.y2014_pre = "-";
                    model1.y2015_post = "-";
                    model1.y2015_pre = "-";

                    ABE.objGroundWater.Add(model1);
                    ABE.SaveChanges();

                    return RedirectToAction("Ground_water_Monitoring");

                }



            }
            else
            {
                List<GroundWater> model = ABE.objGroundWater.ToList();
                ViewBag.Waterlevel = ABE.objabhy_ground_water.Where(x => x.state == State && x.district == Dist && x.block == Block).ToList();
                ViewBag.WaterRainFall = ABE.objabhy_groundwater_rainfall.Where(x => x.state == State && x.district == Dist && x.block == Block).ToList();

                List<GroundWater> model1 = ABE.objGroundWater.Where(m => m.state == State && m.district == Dist && m.block == Block).ToList();
                ViewBag.state = new SelectList(model.Select(m => m.state).Distinct());
                ViewBag.dist = new SelectList(model.Select(m => m.district).Distinct());
                ViewBag.block = new SelectList(model.Select(m => m.block).Distinct());

                ViewBag.Village = new SelectList(model.Select(m => m.vil_name).Distinct());
                ViewBag.TableData = ABE.objVillageParameters.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block).ToList();
                return View(model1);
            }
        }



        [HttpGet]
        public ActionResult Water_Security_plans()
        {
            if (TempData["DemandId"] != null)
            {
                Session["Did"] = Convert.ToInt32(TempData["DemandId"]);
                var idd = Convert.ToInt32(TempData["DemandId"]);
                //string date = DateTime.Now.ToString();
                var res = ABE.objabhy_demand.Where(x => x.userid == idd).ToList();
                return View(res);
            }
            else if (TempData["SupplyId"] != null)
            {
                var iss = Convert.ToInt32(TempData["SupplyId"]);
                ViewBag.supply = ABE.objabhy_demand.Where(y => y.userid == iss).ToList();

                var iddd = Convert.ToInt32(Session["Did"]);
                var res = ABE.objabhy_demand.Where(x => x.userid == iddd).ToList();
                return View(res);


            }

            //var demandres = ABE.objabhy_demand.ToList();
            return View();
        }
        [HttpPost]
        public ActionResult Water_Security_plans(string datetimepicker1, string datetimepicker2, string number, string unitcost, string area, string funding, string implementing, string Total_Budget, string activity)
        {
            abhy_demand demand = new abhy_demand();
            demand.startdate = datetimepicker1;
            demand.enddate = datetimepicker2;
            demand.number = number;
            demand.unitcost = unitcost;
            demand.area = area;
            demand.funding = funding;
            demand.implementing = implementing;
            demand.totalbudget = Total_Budget;
            demand.activity = activity;
            demand.todaydate = DateTime.Now;
            demand.userid = Convert.ToInt32(Session["UserId"]);
            ABE.objabhy_demand.Add(demand);

            ABE.SaveChanges();
            TempData["DemandId"] = demand.userid;
            return RedirectToAction("Water_Security_plans");
        }
        [HttpPost]
        public ActionResult Supply_Side(string datetimepicker3, string datetimepicker4, string number1, string unitcost1, string area1, string funding1, string implementing1, string Total_Budget1, string activity1)
        {
            abhy_demand supply = new abhy_demand();
            supply.startdate = datetimepicker3;
            supply.enddate = datetimepicker4;
            supply.number = number1;
            supply.unitcost = unitcost1;
            supply.area = area1;
            supply.funding = funding1;
            supply.implementing = implementing1;
            supply.totalbudget = Total_Budget1;
            supply.activity = activity1;
            supply.todaydate = DateTime.Now;
            supply.userid = Convert.ToInt32(Session["UserId"]);
            supply.emailid = Session["Email"].ToString();
            ABE.objabhy_demand.Add(supply);

            ABE.SaveChanges();
            TempData["SupplyId"] = supply.userid;
            return RedirectToAction("Water_Security_plans");
        }
        public ActionResult WSP_MainPape()
        {
            return View();
        }

        public ActionResult WSP_StartPage()
        {
            return View();
        }



        //[HttpPost]
        //public ActionResult MisSignUp(string state, string dist, string gram, string block, string useremail, string username, string usernumber, string userdepartment, string usercreatepassword, string userconfirmpassword, string village, string signupdata)
        //{


        //    var users = ABE.objUsers.Where(x => x.Email == useremail.Trim()).ToList();

        //    if (users.Count != 0)
        //    {
        //        TempData["alreadyreg"] = "Alredy registered";


        //        ViewBag.Error = "Alredy registered";
        //        return View("MisLogin");
        //    }

        //    else
        //    {
        //        if (usercreatepassword == userconfirmpassword)
        //        {
        //            var Grampanchayat = "";
        //            var StateName = "";
        //            var DistName = "";
        //            var BlockName = "";

        //            if (gram != "")
        //            {
        //                var gramid = Convert.ToInt32(gram);
        //                var Gram = ABE.objabhy_grampanchayat.Where(x => x.gpid == gramid).ToList();
        //                Grampanchayat = Gram[0].gpname;
        //                Session["ggram"] = Grampanchayat;

        //            }
        //            else
        //            {
        //                Session["ggram"] = "";
        //            }
        //            if (state != "")
        //            {
        //                var stateid = Convert.ToInt32(state);

        //                var States = ABE.objabhy_states.Where(x => x.sid == stateid).ToList();
        //                StateName = States[0].statename;
        //                Session["gstate"] = StateName;

        //            }
        //            else
        //            {
        //                Session["gstate"] = "";
        //            }
        //            if (dist != "")
        //            {
        //                var distid = Convert.ToInt32(dist);

        //                var Dists = ABE.objabhy_districts.Where(x => x.did == distid).ToList();
        //                DistName = Dists[0].district_name;
        //                Session["gdist"] = DistName;

        //            }
        //            else
        //            {
        //                Session["gdist"] = "";
        //            }

        //            if (block != "")
        //            {
        //                var blockid = Convert.ToInt32(block);

        //                var Blocks = ABE.objabhy_blocks.Where(x => x.bid == blockid).ToList();
        //                BlockName = Blocks[0].block_name;
        //                Session["gblock"] = BlockName;


        //            }
        //            else
        //            {
        //                Session["gblock"] = "";
        //            }

        //            if (village != "")
        //            {
        //                var villid = Convert.ToInt32(village);
        //                var Village = ABE.objabhy_villages.Where(x => x.vid == villid).ToList();
        //                var VillageName = Village[0].viname;
        //                Session["gvill"] = VillageName;
        //            }
        //            else
        //            {
        //                Session["gvill"] = "";
        //            }


        //            Session["Email"] = useremail;
        //            Users newuser = new Users();


        //            string Code = randomCodeGeneration();
        //            string email1 = useremail.ToLower().Trim();


        //            string userName = username.ToLower().Trim();
        //        A1:
        //            Guid vid = Guid.NewGuid();
        //            string viid = vid.ToString();
        //            List<Users> existingcodes = ABE.objUsers.Where(x => x.VerificationCode == viid).ToList();
        //            if (existingcodes.Count != 0)
        //            {
        //                goto A1;
        //            }


        //            string[] uuu = Request.Url.AbsoluteUri.Split('/');
        //            string vertificatincode = uuu[0] + "//" + uuu[2] + "/WSP/Verify?code=" + viid;



        //            TempData["VerificationCode"] = vid.ToString();
        //            TempData["Verifiedornot"] = "false";




        //            string contemail = email1;
        //            using (MailMessage mm = new MailMessage("gcrs.net2019@gmail.com", contemail))
        //            {

        //                StringBuilder sb = new StringBuilder();
        //                sb.Append("<br>");
        //                sb.Append("<br>");
        //                sb.Append("<table style='margin-left:50px;'>");
        //                sb.Append("<tr  style='width:300px'>");
        //                sb.Append("</tr>");
        //                sb.Append("<tr style='width:300px'>");
        //                sb.Append("<td>");
        //                sb.Append("<b>Hello  " + userName + ",</b>");
        //                sb.Append("<br>");

        //                sb.Append("<h4>");
        //                sb.Append("Thanks for getting started with Abhy! We need a little more information to complete your registration, including confirmation of your email address. Click on Register button to confirm your email address:");
        //                sb.Append("</h4>");

        //                sb.Append("<br>");

        //                sb.Append("<button style='background-color: #337ab7;display: inline-block;padding: 6px 12px;margin-bottom: 0;font-size: 14px;font-weight: 400;line-height: 1.42857143;text-align: center;white-space: nowrap;vertical-align: middle;touch-action: manipulation;cursor: pointer;user-select: none;background-image: none;border: 1px solid transparent;border-radius: 8px;'>");
        //                sb.Append($"<a href='{vertificatincode}' style='text-decoration: none;color:white;'>Register</a>");
        //                sb.Append("</button>");
        //                /*width = 50 height = 31 border = 0 alt = Click title = Click ></ a >*/
        //                sb.Append("<br>");
        //                sb.Append("<br>");
        //                sb.Append("Note: Never Share Your Credentials With Others!");
        //                sb.Append("<br>");
        //                sb.Append("<br>");
        //                sb.Append("<br>");
        //                sb.Append("<img src=https://img1.wsimg.com/isteam/ip/c7009415-e7fa-45c8-b5e4-cbb576963468/logo/5a843789-34b8-41ac-8a9c-2fdb06ce0b89.png/:/rs=h:150/qt=q:95 width='300px'>");
        //                sb.Append("<br>");
        //                sb.Append("<br>");
        //                sb.Append("<br>");
        //                sb.Append("Thanking You,");
        //                sb.Append("<br>");
        //                sb.Append("GCRS Team");
        //                sb.Append("</td>");
        //                sb.Append("</tr>");
        //                sb.Append("<tr>");
        //                sb.Append("</tr>");
        //                sb.Append("</table>");
        //                mm.IsBodyHtml = true;
        //                mm.Body = sb.ToString();
        //                mm.Subject = "Please Verify Your Account to Continue - Abhy";
        //                mm.IsBodyHtml = true;
        //                using (SmtpClient smtp = new SmtpClient())
        //                {
        //                    smtp.Host = "email-smtp.us-east-1.amazonaws.com";
        //                    smtp.EnableSsl = true;
        //                    ServicePointManager.ServerCertificateValidationCallback = delegate (object s, X509Certificate certificate, X509Chain chain, SslPolicyErrors sslPolicyErrors) { return true; };

        //                    NetworkCredential NetworkCred = new NetworkCredential("gcrs.net2019@gmail.com", "gcrspsm2019");
        //                    smtp.UseDefaultCredentials = false;
        //                    smtp.Credentials = new NetworkCredential("AKIA2ATOP3U7LD2CG2VQ", "BHgDPfnXySVgb2nM8OFYUXsC5Ctj51sjgtUojeAykgsR");
        //                    //smtp.Credentials = NetworkCred;
        //                    smtp.Port = 587;
        //                    smtp.Send(mm);

        //                    //smtp.Host = "smtp.zoho.com";
        //                    //smtp.EnableSsl = true;
        //                    //ServicePointManager.ServerCertificateValidationCallback = delegate (object s, X509Certificate certificate, X509Chain chain, SslPolicyErrors sslPolicyErrors) { return true; };
        //                    //NetworkCredential NetworkCred = new NetworkCredential("gcrs.net2019@gmail.com", "gcrspsm2019");
        //                    //smtp.UseDefaultCredentials = false;
        //                    //smtp.Credentials = NetworkCred;
        //                    //smtp.Port = 25;
        //                    //smtp.Send(mm);

        //                    ViewBag.Error = "Activation Link sent to registered email id!";

        //                    Users NewUser = new Users();

        //                    NewUser.VerificationCode = vid.ToString().Trim();
        //                    NewUser.Verifiedornot = "False".Trim();
        //                    NewUser.UserName = username.ToString().Trim();
        //                    NewUser.ContactNumber = usernumber.ToString().Trim();
        //                    NewUser.Email = useremail.ToString();
        //                    NewUser.DepartmentName = userdepartment.ToString().Trim();
        //                    NewUser.Password = usercreatepassword.ToString().Trim();
        //                    NewUser.NodalOfficer = signupdata.ToString().Trim();
        //                    NewUser.RollId = "3".Trim();


        //                    if (Session["gstate"] == null)
        //                    {
        //                        NewUser.StateName = "null".Trim();
        //                    }
        //                    else
        //                    {
        //                        NewUser.StateName = Session["gstate"].ToString().Trim();
        //                    }

        //                    if (Session["gdist"] == null)
        //                    {
        //                        NewUser.DistrictName = "null".Trim();
        //                    }
        //                    else
        //                    {
        //                        NewUser.DistrictName = Session["gdist"].ToString().Trim();
        //                    }

        //                    if (Session["gblock"] == null)
        //                    {
        //                        NewUser.BlockName = "null".Trim();
        //                    }
        //                    else
        //                    {
        //                        NewUser.BlockName = Session["gblock"].ToString().Trim();
        //                    }

        //                    if (Session["ggram"] == null)
        //                    {
        //                        NewUser.GramPanchayatName = "null".Trim();
        //                    }
        //                    else
        //                    {

        //                        NewUser.GramPanchayatName = Session["ggram"].ToString().Trim();
        //                    }
        //                    if (Session["gvill"] == null)
        //                    {
        //                        NewUser.Villagename = "null".Trim();
        //                    }
        //                    else
        //                    {

        //                        NewUser.Villagename = Session["gvill"].ToString().Trim();
        //                    }

        //                    ABE.objUsers.Add(NewUser);




        //                    Abhy_Verifications objver = new Abhy_Verifications();
        //                    objver.verification_code = vid.ToString().Trim();

        //                    ABE.objAbhy_Verifications.Add(objver);


        //                    ABE.SaveChanges();


        //                    return View("MisLogin");

        //                }
        //            }


        //        }
        //        else
        //        {
        //            //ViewBag.Error = "Doesn't Matched Confirm Password And Old Password";
        //            return View("MisLogin");
        //        }
        //    }


        //    //return View("MisLogin");
        //}

        public ActionResult Login_After()
        {
            //List<abhy_villages> model = ABE.objabhy_villages.ToList();
            //return View(model);
            if (Session["Officer"] != null)
            {
                if (Session["Officer"].ToString() == "Admin" || Session["Officer"].ToString() == "National Level Nodal Officer")
                {
                    if (Session["UserId"] != null)
                    {
                        List<abhy_villages> model = ABE.objabhy_villages.ToList();
                        return View(model);

                    }
                    else
                    {
                        return RedirectToAction("MisLogin", "WSP");
                    }
                }
            }
            return View();
        }

        [HttpPost]
        public ActionResult Login_After(string state, string dist, string block, string gram, string village, string Adminid)
        {
            try
            {
                if (Session["Officer"] != null)
                {
                    if (Session["UserId"] != null)
                    {
                        if (state != "" || dist != "" || block != "" || gram != "" || village != "")
                        {
                            Session["gstate"] = state;
                            Session["gdist"] = dist;
                            Session["gblock"] = block;
                            Session["ggram"] = gram;
                            Session["gvill"] = village;

                            ViewData["Sname"] = state;
                            ViewData["Dname"] = dist;
                            ViewData["Mname"] = block;
                            ViewData["Gpname"] = gram;
                            ViewData["Vname"] = village;
                            Session["Adminid"] = Adminid;


                            return Json("ok");
                        }
                        else
                        {
                            return RedirectToAction("MisLogin", "WSP");
                        }
                    }
                }
                return View();
            }
            catch (Exception ex)
            {
                //ViewBag.Error = ex;
                if (ex.Message == "Object reference not set to an instance of an object.")
                {
                    return RedirectToAction("MisLogin", "Home");
                }
                if (ex.Message == "Unable to create a null constant value of type 'System.Object'. Only entity types, enumeration types or primitive types are supported in this context.")
                {
                    return RedirectToAction("MisLogin", "Home");
                }
                //if (ex.Message == "'object' does not contain a definition for 'Count'")
                //{
                //    ViewBag.data = null;

                //}
                return View();
            }
        }
        [HttpGet]
        public ActionResult WspFirst_page()
        {
            if (Session["UserId"] != null)
            {
                Session["gstate"].ToString();
                Session["gdist"].ToString();
                Session["gblock"].ToString();
                Session["ggram"].ToString();
                if (Session["gvill"] != null && Session["gvill"].ToString() != "")
                {
                    Session["gvill"].ToString();
                }

                if (Session["Adminid"] == null)
                {
                    Session["Adminid"] = "0";
                }
                else if (Session["Adminid"].ToString() == "1")
                {
                    Session["Adminid"] = "1";
                }
                else if (Session["Adminid"].ToString() == "0")
                {
                    Session["Adminid"] = "0";
                }

            }
            else
            {
                return RedirectToAction("MisLogin", "Home");
                //return RedirectToAction("MisLogin", "WSP");
            }
            return View();

        }
        [HttpGet]
        public ActionResult Ground_Water_Recharge()
        {
            string statename = string.Empty;
            string districtname = string.Empty;
            string blockname = string.Empty;
            string Gpname = string.Empty;
            string vname = string.Empty;
            string admin = string.Empty;

            double totgeographicalarea = 0;
            double tothouseholds = 0;
            double totpopulationarea = 0;
            double TubeWellsBoreholeFunctioningAllroundtheyear = 0;
            double SpringFunctioningAllroundtheyear = 0;
            double RiverCanalFunctioningAllroundtheyear = 0;
            double TankPondLakeFunctioningAllroundtheyear = 0;
            double PowerSupplyForDomesticUseSummerAprilSeptperdayinHour = 0;
            double PowerSupplyForDomesticUseWinterOctMarchperdayinHours = 0;
            double PowerSupplyfordomestichavetocalculatetheaveragefromtw = 0;
            double PowerSupplyForAgricultureUseSummerAprilSeptperdayinH = 0;
            double PowerSupplyForAgricultureUseWinterOctMarchperdayinHo = 0;
            double PowerSupplyforagriculturehavetocalculatetheaveragefrom = 0;
            //double PowerSupplyForCommercialUseSummerAprilSeptperdayinHo = 0;
            double PowerSupplyForCommercialUse_WinterOctMarchperdayinHou = 0;
            double PowerSupplyforcommercialhavetocalculatetheaveragefrom = 0;
            double PowerSupplyForAllUsersSummerAprilSeptperdayinHours = 0;
            double PowerSupplyForAllUsersWinterOctMarchperdayinHours = 0;
            double PowerSupplyforallusershavetocalculatetheaveragefromt = 0;
            double AreaunderNonAgriculturalUsesinHectares = 0;
            double NetAreaSowninHectares = 0;
            double CanalsAreainHectares = 0;
            double WellsTubeWellsAreainHectares = 0;
            double TanksLakesAreainHectares = 0;
            double WaterfallAreainHectares = 0;
            //double AgriculturalCommoditiesFirst = 0;
            double ReservoirName = 0;
            double CurrentReservoirLevel = 0;
            double LiveCapacityatFRL = 0;
            double LiveCapacityatFRL_ = 0;
            double CurrentLiveStorage = 0;
            double CurrentLiveStorage_ = 0;
            double _AvgOfSurfaceWaterRainfall = 0;
            double NoOfCheckDams = 0;
            double CheckDamsCapacity = 0;
            double GwrRainfallArea = 0;
            double GwrRainfallRainfall = 0;
            double NetAreaUnderCheckDamsandNalaBunds = 0;
            double GwrITmaximumSubmergenceArea = 0;
            double GwrITReachargeRate = 0;
            double GwrITDaysOfSubmergence = 0;
            double GwrCDmaximumSubmergenceArea = 0;
            double GwrCDAverageDepthOfWater = 0;

            double GwrCDNoOfFillings = 0;
            double GwrSTCLengthOftheCanals = 0;
            double GwrSTCSeepageFactor = 0;
            double GwrSTCFlowingDays = 0;
            double GwrSTCAvgWettedPerimeter = 0;
            double GwrSWIAreaIrrigated = 0;
            double GwrSWIDesignedDischargeAtOutlet = 0;
            double GwrSWISeepageFactor = 0;

            double GwrSWIWaterReleasedAtOutLet = 0;
            double GwrGwICommndAreaIrrigation = 0;
            double GwrGwICommandAreaReturnFlow = 0;
            double GwrGwINonCommandAreaIrrigation = 0;
            double GwrGwINonCommandAreaReturnFlow = 0;
            double DraftIrrigationDailyPumpingHours = 0;
            double DraftIrrigationTotalNoOfPumpingDays = 0;
            double DraftIrrigationAvgPumpingRate = 0;

            double DraftDrinkTotWaterRequirementForPeople = 0;
            double DraftDrinkTotWaterRequirementForCowsBufalos = 0;
            double DraftDrinkTotWaterRequirementForBullocks = 0;

            double DraftDrinkTotWaterRequirementForGoatsSheeps = 0;
            double DraftIndustryGWInTake = 0;
            double DraftIndustryTotNoofProductionDays = 0;
            double SpringsDepth = 0;
            double CanalsDepth = 0;
            double TanksDepth = 0;
            double RiverDepth = 0;
            double checkdamsDepth = 0;
            double SpringsTotalGeographicalAreainHectares = 0;
            double CanalsRiverCanalFunctioningAllroundtheyear = 0;
            double RiverCanalsAreainHectares = 0;
            double HarvestingCanalsAreainHectares = 0;
            double HarvestingTanksLakesAreainHectares = 0;

            double springsdischarge = 0;
            double checkdamsdischarge = 0;
            double canalsdischarge = 0;
            double reservoirsdischarge = 0;
            double lakespondstanksdischarge = 0;
            double riverdischarge = 0;

            double surface_water_paddy = 0;
            double surface_water_nonpaddy = 0;
            double Industry_Prod_days = 0;

            string aquifer = string.Empty;
            int count = 0;

            try
            {
                if (Session["gstate"].ToString() != "" && Session["gstate"].ToString() != null || Session["gdist"].ToString() != "" && Session["gdist"].ToString() != null || Session["gblock"].ToString() != "" && Session["gblock"].ToString() != null || Session["ggram"].ToString() != "" && Session["ggram"].ToString() != null || Session["Officer"].ToString() != "" || Session["Officer"].ToString() != null)
                {
                    var FirstTbl = ABE.objabhystates_completecensusdata_new.ToList();
                    var SecondTbl = ABE.objabhystates_completecensusdata_Insert1.ToList();
                    statename = Session["gstate"].ToString();
                    districtname = Session["gdist"].ToString();
                    blockname = Session["gblock"].ToString();
                    Gpname = Session["ggram"].ToString();
                    admin = Session["Officer"].ToString();
                    if (Session["gvill"] != null && Session["gvill"].ToString() != "")
                    {
                        vname = Session["gvill"].ToString();
                    }

                    List<abhystates_completecensusdata_new> censusdata = new List<abhystates_completecensusdata_new>();
                    abhystates_completecensusdata_new objcensusdata = new abhystates_completecensusdata_new();
                    List<TblAreaUnderLine_By> model = ABE.objTblAreaUnderLine_By.ToList();
                    ViewBag.Ddl = new SelectList(model.Select(m => m.AreaunderlinedBy_Name).Distinct());

                    if (Session["Adminid"].ToString() == "0")
                    {

                        if (admin == "State Level Nodal Officer")
                        {
                            var _livestock = 0;
                            var _cattle_Cows = 0;
                            var _buffaloes = 0;
                            var _sheepsandgoats = 0;
                            var livestockdata = ABE.objabhy_livestock.Where(d => d.state_name == statename).ToList();
                            for (var f = 0; f < livestockdata.Count; f++)
                            {
                                _livestock = _livestock + Convert.ToInt32(livestockdata[f].livestock);
                                _cattle_Cows = _cattle_Cows + Convert.ToInt32(livestockdata[f].cows);
                                _buffaloes = _buffaloes + Convert.ToInt32(livestockdata[f].buffaloes);
                                _sheepsandgoats = _sheepsandgoats + Convert.ToInt32(livestockdata[f].sheeps_and_goats);
                            }
                            ViewBag.distlivestock = "State Level Information:123 Date:2012 Source:Department Of Animal Husbandry and Dariying";
                            ViewBag.livestock = _livestock;
                            ViewBag.cowscattle = _cattle_Cows;
                            ViewBag.buffaloes = _buffaloes;
                            ViewBag.seepsgoats = _sheepsandgoats;
                            var GWL = ABE.objabhy_groundwater_levels2.Where(f => f.state_name == statename).Distinct().ToList();
                            var res = "";
                            if (GWL.Count != 0)
                            {
                                for (int i = 0; i <= GWL.Count; i++)
                                {
                                    if (GWL[i].jan_19 != null && GWL[i].jan_19 != "NULL")
                                    {
                                        res = GWL[i].jan_19;
                                        ViewBag.jan19 = res;
                                        break;
                                    }

                                }
                            }
                            if (SecondTbl.Count != 0)
                            {
                                var itm = SecondTbl;
                                for (var i = 0; i < itm.Count; i++)
                                {
                                    if (itm[i].state_name == statename)
                                    {
                                        if (statename != "" && districtname == "null" && blockname == "null" && Gpname == "null" && vname == "")
                                        {
                                            var query2 = from t1 in FirstTbl
                                                         from t2 in SecondTbl.Where(x => t1.state_name == x.state_name).Distinct()
                                                         select new
                                                         {
                                                             t2.state_name,
                                                             t2.district_name,
                                                             t2.sub_district_name,
                                                             t2.gram_panchayat_name,
                                                             t2.Village_Name,
                                                             t2.Total_Geographical_Area_in_Hectares,
                                                             t2.Total_Households,
                                                             t2.Total_Population_of_Village,
                                                             t2.Tube_Wells_Borehole_Functioning_All_round_the_year,
                                                             t2.Spring_Functioning_All_round_the_year,
                                                             t2.River_Canal_Functioning_All_round_the_year,
                                                             t2.Tank_Pond_Lake_Functioning_All_round_the_year,
                                                             t2.Power_Supply_For_Domestic_Use_Summer_April_Sept_per_day_in_Hour,
                                                             t2.Power_Supply_For_Domestic_Use_Winter_Oct_March_per_day_in_Hours,
                                                             t2.Power_Supply_for_domestic_have_to_calculate_the_average_from_tw,
                                                             t2.Power_Supply_For_Agriculture_Use_Summer_April_Sept_per_day_in_H,
                                                             t2.Power_Supply_For_Agriculture_Use_Winter_Oct_March_per_day_in_Ho,
                                                             t2.Power_Supply_for_agriculture_have_to_calculate_the_average_from,
                                                             t2.Power_Supply_For_Commercial_Use_Winter_Oct_March_per_day_in_Hou,
                                                             t2.Power_Supply_for_commercial_have_to_calculate_the_average_from_,
                                                             t2.Power_Supply_For_All_Users_Summer_April_Sept_per_day_in_Hours,
                                                             t2.Power_Supply_For_All_Users_Winter_Oct_March_per_day_in_Hours,
                                                             t2.Power_Supply_for_all_users_have_to_calculate_the_average_from_t,
                                                             t2.Agricultural_Commodities_First,
                                                             t2.Manufacturers_Commodities_First,
                                                             t2.Agricultural_Commodities_Second,
                                                             t2.Manufacturers_Commodities_Second,
                                                             t2.Agricultural_Commodities_Third,
                                                             t2.Area_under_Non_Agricultural_Uses_in_Hectares,
                                                             t2.Net_Area_Sown_in_Hectares,
                                                             t2.Canals_Area_in_Hectares,
                                                             t2.Wells_Tube_Wells_Area_in_Hectares,
                                                             t2.Tanks_Lakes_Area_in_Hectares,
                                                             t2.Waterfall_Area_in_Hectares,
                                                             t2.Manufacturers_Commodities_Third,
                                                             t2.Springs_Depth,
                                                             t2.Reservoir_Name,
                                                             t2.Current_Reservoir_Level,
                                                             t2.Live_Capacity_at_FRL,
                                                             t2.Live_Capacity_at_FRL_,
                                                             t2.Current_Live_Storage,
                                                             t2.Current_Live_Storage_,
                                                             t2.AvgOfSurfaceWaterRainfall,
                                                             t2.No_Of_CheckDams,
                                                             t2.CheckDams_Capacity,
                                                             t2.Gwr_Rainfall_Area,
                                                             t2.Gwr_Rainfall_Rainfall,
                                                             t2.NetArea_Under_CheckDams_and_NalaBunds,
                                                             t2.Gwr_IT_maximum_SubmergenceArea,
                                                             t2.Gwr_IT_Reacharge_Rate,
                                                             t2.Gwr_IT_DaysOfSubmergence,
                                                             t2.Gwr_CD_maximumSubmergence_Area,
                                                             t2.Gwr_CD_AverageDepthOf_Water,
                                                             t2.Gwr_CD_NoOfFillings,
                                                             t2.Gwr_STC_LengthOfthe_Canals,
                                                             t2.Gwr_STC_Seepage_Factor,
                                                             t2.Gwr_STC_Flowing_Days,
                                                             t2.Gwr_STC_Avg_Wetted_Perimeter,
                                                             t2.Gwr_SWI_AreaIrrigated,
                                                             t2.Gwr_SWI_DesignedDischarge_At_Outlet,
                                                             t2.Gwr_SWI_Seepage_Factor,
                                                             t2.Gwr_SWI_WaterReleased_At_OutLet,
                                                             t2.Gwr_GwI_CommndArea_Irrigation,
                                                             t2.Gwr_GwI_CommandArea_ReturnFlow,
                                                             t2.Gwr_GwI_NonCommand_Area_Irrigation,
                                                             t2.Gwr_GwI_NonCommand_Area_ReturnFlow,
                                                             t2.Draft_Irrigation_DailyPumping_Hours,
                                                             t2.Draft_Irrigation_Total_NoOf_Pumping_Days,
                                                             t2.Draft_Irrigation_Avg_Pumping_Rate,
                                                             t2.Draft_Drink_Tot_Water_Requirement_For_People,
                                                             t2.Draft_Drink_Tot_Water_Requirement_For_CowsBufalos,
                                                             t2.Draft_Drink_Tot_Water_Requirement_For_Bullocks,
                                                             t2.Draft_Drink_Tot_Water_Requirement_For_GoatsSheeps,
                                                             t2.Draft_Industry_GW_In_Take,
                                                             t2.Draft_Industry_Tot_Noof_Production_Days,
                                                             t2.Tbl_Condition,
                                                             t2.Canals_Depth,
                                                             t2.Tanks_Depth,
                                                             t2.River_Depth,
                                                             t2.Springs_Total_Geographical_Area_in_Hectares,
                                                             t2.Canals_River_Canal_Functioning_All_round_the_year,
                                                             t2.River_Canals_Area_in_Hectares,
                                                             t2.Harvesting_Canals_Area_in_Hectares,
                                                             t2.Harvesting_Tanks_Lakes_Area_in_Hectares,
                                                             t2.springs_Discharge,
                                                             t2.checkdams_Discharge,
                                                             t2.canals_Discharge,
                                                             t2.reservoir_Discharge,
                                                             t2.lakespondstanks_Discharge,
                                                             t2.river_Discharge,
                                                             t2.surface_water_paddy,
                                                             t2.surface_water_nonpaddy,
                                                             t2.Industry_Prod_days,
                                                             t2.checkdams_depth
                                                         };

                                            ViewBag.censusdata1 = query2.Where(d => d.state_name == itm[i].state_name).Distinct().ToList();
                                            Session["ACF"] = "NDA";
                                            Session["ACS"] = "NDA";
                                            Session["MCF"] = "NDA";
                                            Session["MCS"] = "NDA";
                                        }
                                        ViewBag.censusdata1 = ABE.objabhystates_completecensusdata_new.Where(f => f.state_name == statename).Distinct().ToList();
                                        Session["ACF"] = "NDA";
                                        Session["ACS"] = "NDA";
                                        Session["MCF"] = "NDA";
                                        Session["MCS"] = "NDA";
                                    }
                                    else
                                    {
                                        ViewBag.censusdata1 = ABE.objabhystates_completecensusdata_new.Where(f => f.state_name == statename).Distinct().ToList();
                                        Session["ACF"] = "NDA";
                                        Session["ACS"] = "NDA";
                                        Session["MCF"] = "NDA";
                                        Session["MCS"] = "NDA";
                                    }
                                }
                            }
                            else
                            {
                                ViewBag.censusdata1 = ABE.objabhystates_completecensusdata_new.Where(f => f.state_name == statename).Distinct().ToList();
                                Session["ACF"] = "NDA";
                                Session["ACS"] = "NDA";
                                Session["MCF"] = "NDA";
                                Session["MCS"] = "NDA";
                            }
                        }

                        else if (admin == "District Level Nodal Officer")
                        {
                            var _livestock = 0;
                            var _cattle_Cows = 0;
                            var _buffaloes = 0;
                            var _sheepsandgoats = 0;
                            var livestockdata = ABE.objabhy_livestock.Where(d => d.state_name == statename && d.district_name == districtname).Distinct().ToList();
                            for (var f = 0; f < livestockdata.Count; f++)
                            {
                                _livestock = _livestock + Convert.ToInt32(livestockdata[f].livestock);
                                _cattle_Cows = _cattle_Cows + Convert.ToInt32(livestockdata[f].cows);
                                _buffaloes = _buffaloes + Convert.ToInt32(livestockdata[f].buffaloes);
                                _sheepsandgoats = _sheepsandgoats + Convert.ToInt32(livestockdata[f].sheeps_and_goats);
                            }
                            ViewBag.distlivestock = "District Level Information:123 Date:2012 Source:Department Of Animal Husbandry and Dariying";
                            ViewBag.livestock = _livestock;
                            ViewBag.cowscattle = _cattle_Cows;
                            ViewBag.buffaloes = _buffaloes;
                            ViewBag.seepsgoats = _sheepsandgoats;
                            var GWL = ABE.objabhy_groundwater_levels2.Where(f => f.state_name == statename && f.district_name == districtname).Distinct().ToList();
                            var res = "";
                            if (GWL.Count != 0)
                            {
                                for (int i = 0; i <= GWL.Count; i++)
                                {
                                    if (GWL[i].jan_19 != null && GWL[i].jan_19 != "NULL")
                                    {
                                        res = GWL[i].jan_19;
                                        ViewBag.jan19 = res;
                                        break;
                                    }

                                }
                            }

                            if (SecondTbl.Count != 0)
                            {
                                var itm = SecondTbl;
                                for (var i = 0; i < itm.Count; i++)
                                {
                                    if (itm[i].state_name == statename && itm[i].district_name == districtname)
                                    {
                                        if (statename != "" && districtname != "" && blockname == "null" && Gpname == "null" && vname == "")
                                        {
                                            var query3 = from t1 in FirstTbl
                                                         from t2 in SecondTbl.Where(x => t1.state_name == x.state_name && t1.district_name == x.district_name).Distinct()
                                                         select new
                                                         {
                                                             t2.state_name,
                                                             t2.district_name,
                                                             t2.sub_district_name,
                                                             t2.gram_panchayat_name,
                                                             t2.Village_Name,
                                                             t2.Total_Geographical_Area_in_Hectares,
                                                             t2.Total_Households,
                                                             t2.Total_Population_of_Village,
                                                             t2.Tube_Wells_Borehole_Functioning_All_round_the_year,
                                                             t2.Spring_Functioning_All_round_the_year,
                                                             t2.River_Canal_Functioning_All_round_the_year,
                                                             t2.Tank_Pond_Lake_Functioning_All_round_the_year,
                                                             t2.Power_Supply_For_Domestic_Use_Summer_April_Sept_per_day_in_Hour,
                                                             t2.Power_Supply_For_Domestic_Use_Winter_Oct_March_per_day_in_Hours,
                                                             t2.Power_Supply_for_domestic_have_to_calculate_the_average_from_tw,
                                                             t2.Power_Supply_For_Agriculture_Use_Summer_April_Sept_per_day_in_H,
                                                             t2.Power_Supply_For_Agriculture_Use_Winter_Oct_March_per_day_in_Ho,
                                                             t2.Power_Supply_for_agriculture_have_to_calculate_the_average_from,
                                                             t2.Power_Supply_For_Commercial_Use_Winter_Oct_March_per_day_in_Hou,
                                                             t2.Power_Supply_for_commercial_have_to_calculate_the_average_from_,
                                                             t2.Power_Supply_For_All_Users_Summer_April_Sept_per_day_in_Hours,
                                                             t2.Power_Supply_For_All_Users_Winter_Oct_March_per_day_in_Hours,
                                                             t2.Power_Supply_for_all_users_have_to_calculate_the_average_from_t,
                                                             t2.Agricultural_Commodities_First,
                                                             t2.Manufacturers_Commodities_First,
                                                             t2.Agricultural_Commodities_Second,
                                                             t2.Manufacturers_Commodities_Second,
                                                             t2.Agricultural_Commodities_Third,
                                                             t2.Area_under_Non_Agricultural_Uses_in_Hectares,
                                                             t2.Net_Area_Sown_in_Hectares,
                                                             t2.Canals_Area_in_Hectares,
                                                             t2.Wells_Tube_Wells_Area_in_Hectares,
                                                             t2.Tanks_Lakes_Area_in_Hectares,
                                                             t2.Waterfall_Area_in_Hectares,
                                                             t2.Manufacturers_Commodities_Third,
                                                             t2.Springs_Depth,
                                                             t2.Reservoir_Name,
                                                             t2.Current_Reservoir_Level,
                                                             t2.Live_Capacity_at_FRL,
                                                             t2.Live_Capacity_at_FRL_,
                                                             t2.Current_Live_Storage,
                                                             t2.Current_Live_Storage_,
                                                             t2.AvgOfSurfaceWaterRainfall,
                                                             t2.No_Of_CheckDams,
                                                             t2.CheckDams_Capacity,
                                                             t2.Gwr_Rainfall_Area,
                                                             t2.Gwr_Rainfall_Rainfall,
                                                             t2.NetArea_Under_CheckDams_and_NalaBunds,
                                                             t2.Gwr_IT_maximum_SubmergenceArea,
                                                             t2.Gwr_IT_Reacharge_Rate,
                                                             t2.Gwr_IT_DaysOfSubmergence,
                                                             t2.Gwr_CD_maximumSubmergence_Area,
                                                             t2.Gwr_CD_AverageDepthOf_Water,
                                                             t2.Gwr_CD_NoOfFillings,
                                                             t2.Gwr_STC_LengthOfthe_Canals,
                                                             t2.Gwr_STC_Seepage_Factor,
                                                             t2.Gwr_STC_Flowing_Days,
                                                             t2.Gwr_STC_Avg_Wetted_Perimeter,
                                                             t2.Gwr_SWI_AreaIrrigated,
                                                             t2.Gwr_SWI_DesignedDischarge_At_Outlet,
                                                             t2.Gwr_SWI_Seepage_Factor,
                                                             t2.Gwr_SWI_WaterReleased_At_OutLet,
                                                             t2.Gwr_GwI_CommndArea_Irrigation,
                                                             t2.Gwr_GwI_CommandArea_ReturnFlow,
                                                             t2.Gwr_GwI_NonCommand_Area_Irrigation,
                                                             t2.Gwr_GwI_NonCommand_Area_ReturnFlow,
                                                             t2.Draft_Irrigation_DailyPumping_Hours,
                                                             t2.Draft_Irrigation_Total_NoOf_Pumping_Days,
                                                             t2.Draft_Irrigation_Avg_Pumping_Rate,
                                                             t2.Draft_Drink_Tot_Water_Requirement_For_People,
                                                             t2.Draft_Drink_Tot_Water_Requirement_For_CowsBufalos,
                                                             t2.Draft_Drink_Tot_Water_Requirement_For_Bullocks,
                                                             t2.Draft_Drink_Tot_Water_Requirement_For_GoatsSheeps,
                                                             t2.Draft_Industry_GW_In_Take,
                                                             t2.Draft_Industry_Tot_Noof_Production_Days,
                                                             t2.Tbl_Condition,
                                                             t2.Canals_Depth,
                                                             t2.Tanks_Depth,
                                                             t2.River_Depth,
                                                             t2.Springs_Total_Geographical_Area_in_Hectares,
                                                             t2.Canals_River_Canal_Functioning_All_round_the_year,
                                                             t2.River_Canals_Area_in_Hectares,
                                                             t2.Harvesting_Canals_Area_in_Hectares,
                                                             t2.Harvesting_Tanks_Lakes_Area_in_Hectares,
                                                             t2.springs_Discharge,
                                                             t2.checkdams_Discharge,
                                                             t2.canals_Discharge,
                                                             t2.reservoir_Discharge,
                                                             t2.lakespondstanks_Discharge,
                                                             t2.river_Discharge,
                                                             t2.surface_water_paddy,
                                                             t2.surface_water_nonpaddy,
                                                             t2.Industry_Prod_days,
                                                             t2.checkdams_depth
                                                         };
                                            ViewBag.censusdata1 = query3.Where(d => d.state_name == itm[i].state_name && d.district_name == itm[i].district_name).Distinct().ToList();
                                            Session["ACF"] = "NDA";
                                            Session["ACS"] = "NDA";
                                            Session["MCF"] = "NDA";
                                            Session["MCS"] = "NDA";
                                        }
                                        ViewBag.censusdata1 = ABE.objabhystates_completecensusdata_new.Where(f => f.state_name == statename && f.district_name == districtname).Distinct().ToList();
                                        Session["ACF"] = "NDA";
                                        Session["ACS"] = "NDA";
                                        Session["MCF"] = "NDA";
                                        Session["MCS"] = "NDA";
                                    }
                                    else
                                    {
                                        ViewBag.censusdata1 = ABE.objabhystates_completecensusdata_new.Where(f => f.state_name == statename && f.district_name == districtname).Distinct().ToList();
                                        Session["ACF"] = "NDA";
                                        Session["ACS"] = "NDA";
                                        Session["MCF"] = "NDA";
                                        Session["MCS"] = "NDA";
                                    }
                                }
                            }
                            else
                            {
                                ViewBag.censusdata1 = ABE.objabhystates_completecensusdata_new.Where(f => f.state_name == statename && f.district_name == districtname).Distinct().ToList();
                                Session["ACF"] = "NDA";
                                Session["ACS"] = "NDA";
                                Session["MCF"] = "NDA";
                                Session["MCS"] = "NDA";
                            }
                        }
                        else if (admin == "Block Level Nodal Officer")
                        {
                            var _livestock = 0;
                            var _cattle_Cows = 0;
                            var _buffaloes = 0;
                            var _sheepsandgoats = 0;
                            var livestockdata = ABE.objabhy_livestock.Where(d => d.state_name == statename && d.district_name == districtname).Distinct().ToList();
                            for (var f = 0; f < livestockdata.Count; f++)
                            {
                                _livestock = _livestock + Convert.ToInt32(livestockdata[f].livestock);
                                _cattle_Cows = _cattle_Cows + Convert.ToInt32(livestockdata[f].cows);
                                _buffaloes = _buffaloes + Convert.ToInt32(livestockdata[f].buffaloes);
                                _sheepsandgoats = _sheepsandgoats + Convert.ToInt32(livestockdata[f].sheeps_and_goats);
                            }
                            ViewBag.distlivestock = "District Level Information:123 Date:2012 Source:Department Of Animal Husbandry and Dariying";
                            ViewBag.livestock = _livestock;
                            ViewBag.cowscattle = _cattle_Cows;
                            ViewBag.buffaloes = _buffaloes;
                            ViewBag.seepsgoats = _sheepsandgoats;
                            var GWL = ABE.objabhy_groundwater_levels2.Where(f => f.state_name == statename && f.district_name == districtname && f.block == blockname).Distinct().ToList();
                            var res = "";
                            if (GWL.Count != 0)
                            {
                                for (int i = 0; i <= GWL.Count; i++)
                                {
                                    if (GWL[i].jan_19 != null && GWL[i].jan_19 != "NULL")
                                    {
                                        res = GWL[i].jan_19;
                                        ViewBag.jan19 = res;
                                        break;
                                    }

                                }
                            }
                            if (SecondTbl.Count != 0)
                            {
                                var itm = SecondTbl;
                                for (var i = 0; i < itm.Count; i++)
                                {
                                    if (itm[i].state_name == statename && itm[i].district_name == districtname && itm[i].sub_district_name == blockname)
                                    {
                                        if (statename != "" && districtname != "" && blockname != "" && Gpname == "" && vname == "")
                                        {
                                            var query4 = from t1 in FirstTbl
                                                         from t2 in SecondTbl.Where(x => t1.state_name == x.state_name && t1.district_name == x.district_name && t1.sub_district_name == x.sub_district_name).Distinct()
                                                         select new
                                                         {
                                                             t2.state_name,
                                                             t2.district_name,
                                                             t2.sub_district_name,
                                                             t2.gram_panchayat_name,
                                                             t2.Village_Name,
                                                             t2.Total_Geographical_Area_in_Hectares,
                                                             t2.Total_Households,
                                                             t2.Total_Population_of_Village,
                                                             t2.Tube_Wells_Borehole_Functioning_All_round_the_year,
                                                             t2.Spring_Functioning_All_round_the_year,
                                                             t2.River_Canal_Functioning_All_round_the_year,
                                                             t2.Tank_Pond_Lake_Functioning_All_round_the_year,
                                                             t2.Power_Supply_For_Domestic_Use_Summer_April_Sept_per_day_in_Hour,
                                                             t2.Power_Supply_For_Domestic_Use_Winter_Oct_March_per_day_in_Hours,
                                                             t2.Power_Supply_for_domestic_have_to_calculate_the_average_from_tw,
                                                             t2.Power_Supply_For_Agriculture_Use_Summer_April_Sept_per_day_in_H,
                                                             t2.Power_Supply_For_Agriculture_Use_Winter_Oct_March_per_day_in_Ho,
                                                             t2.Power_Supply_for_agriculture_have_to_calculate_the_average_from,
                                                             t2.Power_Supply_For_Commercial_Use_Winter_Oct_March_per_day_in_Hou,
                                                             t2.Power_Supply_for_commercial_have_to_calculate_the_average_from_,
                                                             t2.Power_Supply_For_All_Users_Summer_April_Sept_per_day_in_Hours,
                                                             t2.Power_Supply_For_All_Users_Winter_Oct_March_per_day_in_Hours,
                                                             t2.Power_Supply_for_all_users_have_to_calculate_the_average_from_t,
                                                             t2.Agricultural_Commodities_First,
                                                             t2.Manufacturers_Commodities_First,
                                                             t2.Agricultural_Commodities_Second,
                                                             t2.Manufacturers_Commodities_Second,
                                                             t2.Agricultural_Commodities_Third,
                                                             t2.Area_under_Non_Agricultural_Uses_in_Hectares,
                                                             t2.Net_Area_Sown_in_Hectares,
                                                             t2.Canals_Area_in_Hectares,
                                                             t2.Wells_Tube_Wells_Area_in_Hectares,
                                                             t2.Tanks_Lakes_Area_in_Hectares,
                                                             t2.Waterfall_Area_in_Hectares,
                                                             t2.Manufacturers_Commodities_Third,
                                                             t2.Springs_Depth,
                                                             t2.Reservoir_Name,
                                                             t2.Current_Reservoir_Level,
                                                             t2.Live_Capacity_at_FRL,
                                                             t2.Live_Capacity_at_FRL_,
                                                             t2.Current_Live_Storage,
                                                             t2.Current_Live_Storage_,
                                                             t2.AvgOfSurfaceWaterRainfall,
                                                             t2.No_Of_CheckDams,
                                                             t2.CheckDams_Capacity,
                                                             t2.Gwr_Rainfall_Area,
                                                             t2.Gwr_Rainfall_Rainfall,
                                                             t2.NetArea_Under_CheckDams_and_NalaBunds,
                                                             t2.Gwr_IT_maximum_SubmergenceArea,
                                                             t2.Gwr_IT_Reacharge_Rate,
                                                             t2.Gwr_IT_DaysOfSubmergence,
                                                             t2.Gwr_CD_maximumSubmergence_Area,
                                                             t2.Gwr_CD_AverageDepthOf_Water,
                                                             t2.Gwr_CD_NoOfFillings,
                                                             t2.Gwr_STC_LengthOfthe_Canals,
                                                             t2.Gwr_STC_Seepage_Factor,
                                                             t2.Gwr_STC_Flowing_Days,
                                                             t2.Gwr_STC_Avg_Wetted_Perimeter,
                                                             t2.Gwr_SWI_AreaIrrigated,
                                                             t2.Gwr_SWI_DesignedDischarge_At_Outlet,
                                                             t2.Gwr_SWI_Seepage_Factor,
                                                             t2.Gwr_SWI_WaterReleased_At_OutLet,
                                                             t2.Gwr_GwI_CommndArea_Irrigation,
                                                             t2.Gwr_GwI_CommandArea_ReturnFlow,
                                                             t2.Gwr_GwI_NonCommand_Area_Irrigation,
                                                             t2.Gwr_GwI_NonCommand_Area_ReturnFlow,
                                                             t2.Draft_Irrigation_DailyPumping_Hours,
                                                             t2.Draft_Irrigation_Total_NoOf_Pumping_Days,
                                                             t2.Draft_Irrigation_Avg_Pumping_Rate,
                                                             t2.Draft_Drink_Tot_Water_Requirement_For_People,
                                                             t2.Draft_Drink_Tot_Water_Requirement_For_CowsBufalos,
                                                             t2.Draft_Drink_Tot_Water_Requirement_For_Bullocks,
                                                             t2.Draft_Drink_Tot_Water_Requirement_For_GoatsSheeps,
                                                             t2.Draft_Industry_GW_In_Take,
                                                             t2.Draft_Industry_Tot_Noof_Production_Days,
                                                             t2.Tbl_Condition,
                                                             t2.Canals_Depth,
                                                             t2.Tanks_Depth,
                                                             t2.River_Depth,
                                                             t2.Springs_Total_Geographical_Area_in_Hectares,
                                                             t2.Canals_River_Canal_Functioning_All_round_the_year,
                                                             t2.River_Canals_Area_in_Hectares,
                                                             t2.Harvesting_Canals_Area_in_Hectares,
                                                             t2.Harvesting_Tanks_Lakes_Area_in_Hectares,
                                                             t2.springs_Discharge,
                                                             t2.checkdams_Discharge,
                                                             t2.canals_Discharge,
                                                             t2.reservoir_Discharge,
                                                             t2.lakespondstanks_Discharge,
                                                             t2.river_Discharge,
                                                             t2.surface_water_paddy,
                                                             t2.surface_water_nonpaddy,
                                                             t2.Industry_Prod_days,
                                                             t2.checkdams_depth
                                                         };
                                            ViewBag.censusdata1 = query4.Where(d => d.state_name == itm[i].state_name && d.district_name == itm[i].district_name && d.sub_district_name == itm[i].sub_district_name).Distinct().ToList();
                                            Session["ACF"] = "NDA";
                                            Session["ACS"] = "NDA";
                                            Session["MCF"] = "NDA";
                                            Session["MCS"] = "NDA";
                                        }
                                        else
                                        {
                                            ViewBag.censusdata1 = ABE.objabhystates_completecensusdata_new.Where(f => f.state_name == statename && f.district_name == districtname && f.sub_district_name == blockname).Distinct().ToList();
                                            Session["ACF"] = "NDA";
                                            Session["ACS"] = "NDA";
                                            Session["MCF"] = "NDA";
                                            Session["MCS"] = "NDA";
                                        }
                                    }

                                }
                            }
                            else
                            {
                                ViewBag.censusdata1 = ABE.objabhystates_completecensusdata_new.Where(f => f.state_name == statename && f.district_name == districtname && f.sub_district_name == blockname).Distinct().ToList();
                                Session["ACF"] = "NDA";
                                Session["ACS"] = "NDA";
                                Session["MCF"] = "NDA";
                                Session["MCS"] = "NDA";
                            }
                        }
                        else if (admin == "Gram Panchyat Nodal Officer")
                        {
                            var _livestock = 0;
                            var _cattle_Cows = 0;
                            var _buffaloes = 0;
                            var _sheepsandgoats = 0;
                            var livestockdata = ABE.objabhy_livestock.Where(d => d.state_name == statename && d.district_name == districtname).ToList();
                            for (var f = 0; f < livestockdata.Count; f++)
                            {
                                _livestock = _livestock + Convert.ToInt32(livestockdata[f].livestock);
                                _cattle_Cows = _cattle_Cows + Convert.ToInt32(livestockdata[f].cows);
                                _buffaloes = _buffaloes + Convert.ToInt32(livestockdata[f].buffaloes);
                                _sheepsandgoats = _sheepsandgoats + Convert.ToInt32(livestockdata[f].sheeps_and_goats);
                            }
                            ViewBag.distlivestock = "District Level Information:123 Date:2012 Source:Department Of Animal Husbandry and Dariying";
                            ViewBag.livestock = _livestock;
                            ViewBag.cowscattle = _cattle_Cows;
                            ViewBag.buffaloes = _buffaloes;
                            ViewBag.seepsgoats = _sheepsandgoats;
                            var GWL = ABE.objabhy_groundwater_levels2.Where(f => f.state_name == statename && f.district_name == districtname && f.block == blockname).Distinct().ToList();
                            var res = "";
                            if (GWL.Count != 0)
                            {
                                for (int i = 0; i <= GWL.Count; i++)
                                {
                                    if (GWL[i].jan_19 != null && GWL[i].jan_19 != "NULL")
                                    {
                                        res = GWL[i].jan_19;
                                        ViewBag.jan19 = res;
                                        break;
                                    }

                                }
                            }
                            if (SecondTbl.Count != 0)
                            {
                                var itm = SecondTbl;
                                for (var i = 0; i < itm.Count; i++)
                                {
                                    if (itm[i].state_name == statename && itm[i].district_name == districtname && itm[i].sub_district_name == blockname && itm[i].gram_panchayat_name == Gpname)
                                    {
                                        if (statename != "" && districtname != "" && blockname != "" && Gpname != "" && vname == "")
                                        {
                                            var query5 = from t1 in FirstTbl
                                                         from t2 in SecondTbl.Where(x => t1.state_name == x.state_name && t1.district_name == x.district_name && t1.sub_district_name == x.sub_district_name && t1.gram_panchayat_name == x.gram_panchayat_name).Distinct()
                                                         select new
                                                         {
                                                             t2.state_name,
                                                             t2.district_name,
                                                             t2.sub_district_name,
                                                             t2.gram_panchayat_name,
                                                             t2.Village_Name,
                                                             t2.Total_Geographical_Area_in_Hectares,
                                                             t2.Total_Households,
                                                             t2.Total_Population_of_Village,
                                                             t2.Tube_Wells_Borehole_Functioning_All_round_the_year,
                                                             t2.Spring_Functioning_All_round_the_year,
                                                             t2.River_Canal_Functioning_All_round_the_year,
                                                             t2.Tank_Pond_Lake_Functioning_All_round_the_year,
                                                             t2.Power_Supply_For_Domestic_Use_Summer_April_Sept_per_day_in_Hour,
                                                             t2.Power_Supply_For_Domestic_Use_Winter_Oct_March_per_day_in_Hours,
                                                             t2.Power_Supply_for_domestic_have_to_calculate_the_average_from_tw,
                                                             t2.Power_Supply_For_Agriculture_Use_Summer_April_Sept_per_day_in_H,
                                                             t2.Power_Supply_For_Agriculture_Use_Winter_Oct_March_per_day_in_Ho,
                                                             t2.Power_Supply_for_agriculture_have_to_calculate_the_average_from,
                                                             t2.Power_Supply_For_Commercial_Use_Winter_Oct_March_per_day_in_Hou,
                                                             t2.Power_Supply_for_commercial_have_to_calculate_the_average_from_,
                                                             t2.Power_Supply_For_All_Users_Summer_April_Sept_per_day_in_Hours,
                                                             t2.Power_Supply_For_All_Users_Winter_Oct_March_per_day_in_Hours,
                                                             t2.Power_Supply_for_all_users_have_to_calculate_the_average_from_t,
                                                             t2.Agricultural_Commodities_First,
                                                             t2.Manufacturers_Commodities_First,
                                                             t2.Agricultural_Commodities_Second,
                                                             t2.Manufacturers_Commodities_Second,
                                                             t2.Agricultural_Commodities_Third,
                                                             t2.Area_under_Non_Agricultural_Uses_in_Hectares,
                                                             t2.Net_Area_Sown_in_Hectares,
                                                             t2.Canals_Area_in_Hectares,
                                                             t2.Wells_Tube_Wells_Area_in_Hectares,
                                                             t2.Tanks_Lakes_Area_in_Hectares,
                                                             t2.Waterfall_Area_in_Hectares,
                                                             t2.Manufacturers_Commodities_Third,
                                                             t2.Springs_Depth,
                                                             t2.Reservoir_Name,
                                                             t2.Current_Reservoir_Level,
                                                             t2.Live_Capacity_at_FRL,
                                                             t2.Live_Capacity_at_FRL_,
                                                             t2.Current_Live_Storage,
                                                             t2.Current_Live_Storage_,
                                                             t2.AvgOfSurfaceWaterRainfall,
                                                             t2.No_Of_CheckDams,
                                                             t2.CheckDams_Capacity,
                                                             t2.Gwr_Rainfall_Area,
                                                             t2.Gwr_Rainfall_Rainfall,
                                                             t2.NetArea_Under_CheckDams_and_NalaBunds,
                                                             t2.Gwr_IT_maximum_SubmergenceArea,
                                                             t2.Gwr_IT_Reacharge_Rate,
                                                             t2.Gwr_IT_DaysOfSubmergence,
                                                             t2.Gwr_CD_maximumSubmergence_Area,
                                                             t2.Gwr_CD_AverageDepthOf_Water,
                                                             t2.Gwr_CD_NoOfFillings,
                                                             t2.Gwr_STC_LengthOfthe_Canals,
                                                             t2.Gwr_STC_Seepage_Factor,
                                                             t2.Gwr_STC_Flowing_Days,
                                                             t2.Gwr_STC_Avg_Wetted_Perimeter,
                                                             t2.Gwr_SWI_AreaIrrigated,
                                                             t2.Gwr_SWI_DesignedDischarge_At_Outlet,
                                                             t2.Gwr_SWI_Seepage_Factor,
                                                             t2.Gwr_SWI_WaterReleased_At_OutLet,
                                                             t2.Gwr_GwI_CommndArea_Irrigation,
                                                             t2.Gwr_GwI_CommandArea_ReturnFlow,
                                                             t2.Gwr_GwI_NonCommand_Area_Irrigation,
                                                             t2.Gwr_GwI_NonCommand_Area_ReturnFlow,
                                                             t2.Draft_Irrigation_DailyPumping_Hours,
                                                             t2.Draft_Irrigation_Total_NoOf_Pumping_Days,
                                                             t2.Draft_Irrigation_Avg_Pumping_Rate,
                                                             t2.Draft_Drink_Tot_Water_Requirement_For_People,
                                                             t2.Draft_Drink_Tot_Water_Requirement_For_CowsBufalos,
                                                             t2.Draft_Drink_Tot_Water_Requirement_For_Bullocks,
                                                             t2.Draft_Drink_Tot_Water_Requirement_For_GoatsSheeps,
                                                             t2.Draft_Industry_GW_In_Take,
                                                             t2.Draft_Industry_Tot_Noof_Production_Days,
                                                             t2.Tbl_Condition,
                                                             t2.Canals_Depth,
                                                             t2.Tanks_Depth,
                                                             t2.River_Depth,
                                                             t2.Springs_Total_Geographical_Area_in_Hectares,
                                                             t2.Canals_River_Canal_Functioning_All_round_the_year,
                                                             t2.River_Canals_Area_in_Hectares,
                                                             t2.Harvesting_Canals_Area_in_Hectares,
                                                             t2.Harvesting_Tanks_Lakes_Area_in_Hectares,
                                                             t2.springs_Discharge,
                                                             t2.checkdams_Discharge,
                                                             t2.canals_Discharge,
                                                             t2.reservoir_Discharge,
                                                             t2.lakespondstanks_Discharge,
                                                             t2.river_Discharge,
                                                             t2.surface_water_paddy,
                                                             t2.surface_water_nonpaddy,
                                                             t2.Industry_Prod_days,
                                                             t2.checkdams_depth
                                                         };
                                            ViewBag.censusdata1 = query5.Where(d => d.state_name == itm[i].state_name && d.district_name == itm[i].district_name && d.sub_district_name == itm[i].sub_district_name && d.gram_panchayat_name == itm[i].gram_panchayat_name).Distinct().ToList();
                                            Session["ACF"] = "NDA";
                                            Session["ACS"] = "NDA";
                                            Session["MCF"] = "NDA";
                                            Session["MCS"] = "NDA";
                                        }
                                        else
                                        {
                                            ViewBag.censusdata1 = ABE.objabhystates_completecensusdata_new.Where(f => f.state_name == statename && f.district_name == districtname && f.sub_district_name == blockname && f.gram_panchayat_name == Gpname).Distinct().ToList();
                                            Session["ACF"] = "NDA";
                                            Session["ACS"] = "NDA";
                                            Session["MCF"] = "NDA";
                                            Session["MCS"] = "NDA";
                                        }
                                    }
                                }
                            }
                            else
                            {
                                ViewBag.censusdata1 = ABE.objabhystates_completecensusdata_new.Where(f => f.state_name == statename && f.district_name == districtname && f.sub_district_name == blockname && f.gram_panchayat_name == Gpname).Distinct().ToList();
                                Session["ACF"] = "NDA";
                                Session["ACS"] = "NDA";
                                Session["MCF"] = "NDA";
                                Session["MCS"] = "NDA";
                            }
                        }
                        else if (admin == "Village Level Nodal Officer")
                        {
                            var _livestock = 0;
                            var _cattle_Cows = 0;
                            var _buffaloes = 0;
                            var _sheepsandgoats = 0;
                            var livestockdata = ABE.objabhy_livestock.Where(d => d.state_name == statename && d.district_name == districtname).Distinct().ToList();
                            for (var f = 0; f < livestockdata.Count; f++)
                            {
                                _livestock = _livestock + Convert.ToInt32(livestockdata[f].livestock);
                                _cattle_Cows = _cattle_Cows + Convert.ToInt32(livestockdata[f].cows);
                                _buffaloes = _buffaloes + Convert.ToInt32(livestockdata[f].buffaloes);
                                _sheepsandgoats = _sheepsandgoats + Convert.ToInt32(livestockdata[f].sheeps_and_goats);
                            }
                            ViewBag.distlivestock = "District Level Information:123 Date:2012 Source:Department Of Animal Husbandry and Dariying";
                            ViewBag.livestock = _livestock;
                            ViewBag.cowscattle = _cattle_Cows;
                            ViewBag.buffaloes = _buffaloes;
                            ViewBag.seepsgoats = _sheepsandgoats;
                            var GWL = ABE.objabhy_groundwater_levels2.Where(f => f.state_name == statename && f.district_name == districtname && f.block == blockname).Distinct().ToList();
                            var res = "";
                            if (GWL.Count != 0)
                            {
                                for (int i = 0; i <= GWL.Count; i++)
                                {
                                    if (GWL[i].jan_19 != null && GWL[i].jan_19 != "NULL")
                                    {
                                        res = GWL[i].jan_19;
                                        ViewBag.jan19 = res;
                                        break;
                                    }

                                }
                            }
                            if (SecondTbl.Count != 0)
                            {
                                var itm = SecondTbl;
                                for (var i = 0; i < itm.Count; i++)
                                {
                                    if (itm[i].state_name == statename && itm[i].district_name == districtname && itm[i].sub_district_name == blockname && itm[i].gram_panchayat_name == Gpname && itm[i].Village_Name == vname)
                                    {
                                        if (statename != "" && districtname != "" && blockname != "" && Gpname != "" && vname != "")
                                        {
                                            var query1 = from t1 in FirstTbl

                                                         join t2 in SecondTbl

                                                         on new { t1.state_name, t1.district_name, t1.sub_district_name, t1.gram_panchayat_name, t1.Village_Name } equals new { t2.state_name, t2.district_name, t2.sub_district_name, t2.gram_panchayat_name, t2.Village_Name }

                                                         select new
                                                         {
                                                             t2.state_name,
                                                             t2.district_name,
                                                             t2.sub_district_name,
                                                             t2.gram_panchayat_name,
                                                             t2.Village_Name,
                                                             t2.Total_Geographical_Area_in_Hectares,
                                                             t2.Total_Households,
                                                             t2.Total_Population_of_Village,
                                                             t2.Tube_Wells_Borehole_Functioning_All_round_the_year,
                                                             t2.Spring_Functioning_All_round_the_year,
                                                             t2.River_Canal_Functioning_All_round_the_year,
                                                             t2.Tank_Pond_Lake_Functioning_All_round_the_year,
                                                             t2.Power_Supply_For_Domestic_Use_Summer_April_Sept_per_day_in_Hour,
                                                             t2.Power_Supply_For_Domestic_Use_Winter_Oct_March_per_day_in_Hours,
                                                             t2.Power_Supply_for_domestic_have_to_calculate_the_average_from_tw,
                                                             t2.Power_Supply_For_Agriculture_Use_Summer_April_Sept_per_day_in_H,
                                                             t2.Power_Supply_For_Agriculture_Use_Winter_Oct_March_per_day_in_Ho,
                                                             t2.Power_Supply_for_agriculture_have_to_calculate_the_average_from,
                                                             t2.Power_Supply_For_Commercial_Use_Winter_Oct_March_per_day_in_Hou,
                                                             t2.Power_Supply_for_commercial_have_to_calculate_the_average_from_,
                                                             t2.Power_Supply_For_All_Users_Summer_April_Sept_per_day_in_Hours,
                                                             t2.Power_Supply_For_All_Users_Winter_Oct_March_per_day_in_Hours,
                                                             t2.Power_Supply_for_all_users_have_to_calculate_the_average_from_t,
                                                             t2.Agricultural_Commodities_First,
                                                             t2.Manufacturers_Commodities_First,
                                                             t2.Agricultural_Commodities_Second,
                                                             t2.Manufacturers_Commodities_Second,
                                                             t2.Agricultural_Commodities_Third,
                                                             t2.Area_under_Non_Agricultural_Uses_in_Hectares,
                                                             t2.Net_Area_Sown_in_Hectares,
                                                             t2.Canals_Area_in_Hectares,
                                                             t2.Wells_Tube_Wells_Area_in_Hectares,
                                                             t2.Tanks_Lakes_Area_in_Hectares,
                                                             t2.Waterfall_Area_in_Hectares,
                                                             t2.Manufacturers_Commodities_Third,
                                                             t2.Springs_Depth,
                                                             t2.Reservoir_Name,
                                                             t2.Current_Reservoir_Level,
                                                             t2.Live_Capacity_at_FRL,
                                                             t2.Live_Capacity_at_FRL_,
                                                             t2.Current_Live_Storage,
                                                             t2.Current_Live_Storage_,
                                                             t2.AvgOfSurfaceWaterRainfall,
                                                             t2.No_Of_CheckDams,
                                                             t2.CheckDams_Capacity,
                                                             t2.Gwr_Rainfall_Area,
                                                             t2.Gwr_Rainfall_Rainfall,
                                                             t2.NetArea_Under_CheckDams_and_NalaBunds,
                                                             t2.Gwr_IT_maximum_SubmergenceArea,
                                                             t2.Gwr_IT_Reacharge_Rate,
                                                             t2.Gwr_IT_DaysOfSubmergence,
                                                             t2.Gwr_CD_maximumSubmergence_Area,
                                                             t2.Gwr_CD_AverageDepthOf_Water,
                                                             t2.Gwr_CD_NoOfFillings,
                                                             t2.Gwr_STC_LengthOfthe_Canals,
                                                             t2.Gwr_STC_Seepage_Factor,
                                                             t2.Gwr_STC_Flowing_Days,
                                                             t2.Gwr_STC_Avg_Wetted_Perimeter,
                                                             t2.Gwr_SWI_AreaIrrigated,
                                                             t2.Gwr_SWI_DesignedDischarge_At_Outlet,
                                                             t2.Gwr_SWI_Seepage_Factor,
                                                             t2.Gwr_SWI_WaterReleased_At_OutLet,
                                                             t2.Gwr_GwI_CommndArea_Irrigation,
                                                             t2.Gwr_GwI_CommandArea_ReturnFlow,
                                                             t2.Gwr_GwI_NonCommand_Area_Irrigation,
                                                             t2.Gwr_GwI_NonCommand_Area_ReturnFlow,
                                                             t2.Draft_Irrigation_DailyPumping_Hours,
                                                             t2.Draft_Irrigation_Total_NoOf_Pumping_Days,
                                                             t2.Draft_Irrigation_Avg_Pumping_Rate,
                                                             t2.Draft_Drink_Tot_Water_Requirement_For_People,
                                                             t2.Draft_Drink_Tot_Water_Requirement_For_CowsBufalos,
                                                             t2.Draft_Drink_Tot_Water_Requirement_For_Bullocks,
                                                             t2.Draft_Drink_Tot_Water_Requirement_For_GoatsSheeps,
                                                             t2.Draft_Industry_GW_In_Take,
                                                             t2.Draft_Industry_Tot_Noof_Production_Days,
                                                             t2.Tbl_Condition,
                                                             t2.Canals_Depth,
                                                             t2.Tanks_Depth,
                                                             t2.River_Depth,
                                                             t2.Springs_Total_Geographical_Area_in_Hectares,
                                                             t2.Canals_River_Canal_Functioning_All_round_the_year,
                                                             t2.River_Canals_Area_in_Hectares,
                                                             t2.Harvesting_Canals_Area_in_Hectares,
                                                             t2.Harvesting_Tanks_Lakes_Area_in_Hectares,
                                                             t2.springs_Discharge,
                                                             t2.checkdams_Discharge,
                                                             t2.canals_Discharge,
                                                             t2.reservoir_Discharge,
                                                             t2.lakespondstanks_Discharge,
                                                             t2.river_Discharge,
                                                             t2.surface_water_paddy,
                                                             t2.surface_water_nonpaddy,
                                                             t2.Industry_Prod_days,
                                                             t2.checkdams_depth
                                                         };
                                            var data9 = query1.Where(d => d.state_name == itm[i].state_name && d.district_name == itm[i].district_name && d.sub_district_name == itm[i].sub_district_name && d.gram_panchayat_name == itm[i].gram_panchayat_name).Distinct().ToList();

                                            if (data9[0].Agricultural_Commodities_First != null && data9[0].Agricultural_Commodities_First != "0")
                                            {
                                                Session["ACF"] = data9[0].Agricultural_Commodities_First;
                                            }
                                            else
                                            {
                                                Session["ACF"] = "NDA";
                                            }
                                            if (data9[0].Agricultural_Commodities_Second != null && data9[0].Agricultural_Commodities_Second != "0")
                                            {
                                                Session["ACS"] = data9[0].Agricultural_Commodities_Second;
                                            }
                                            else
                                            {
                                                Session["ACS"] = "NDA";
                                            }
                                            if (data9[0].Manufacturers_Commodities_First != null && data9[0].Manufacturers_Commodities_First != "0")
                                            {
                                                Session["MCF"] = data9[0].Manufacturers_Commodities_First;
                                            }
                                            else
                                            {
                                                Session["MCF"] = "NDA";
                                            }
                                            if (data9[0].Manufacturers_Commodities_Second != null && data9[0].Manufacturers_Commodities_Second != "0")
                                            {
                                                Session["MCS"] = data9[0].Manufacturers_Commodities_Second;
                                            }
                                            else
                                            {
                                                Session["MCS"] = "NDA";
                                            }
                                            ViewBag.censusdata1 = data9;
                                        }
                                    }
                                    else
                                    {
                                        var data = ABE.objabhystates_completecensusdata_new.Where(f => f.state_name == statename && f.district_name == districtname && f.sub_district_name == blockname && f.gram_panchayat_name == Gpname).Distinct().ToList();


                                        if (data[0].Agricultural_Commodities_First != null && data[0].Agricultural_Commodities_First != "0")
                                        {
                                            Session["ACF"] = data[0].Agricultural_Commodities_First;
                                        }
                                        else
                                        {
                                            Session["ACF"] = "NDA";
                                        }
                                        if (data[0].Agricultural_Commodities_Second != null && data[0].Agricultural_Commodities_Second != "0")
                                        {
                                            Session["ACS"] = data[0].Agricultural_Commodities_Second;
                                        }
                                        else
                                        {
                                            Session["ACS"] = "NDA";
                                        }
                                        if (data[0].Manufacturers_Commodities_First != null && data[0].Manufacturers_Commodities_First != "0")
                                        {
                                            Session["MCF"] = data[0].Manufacturers_Commodities_First;
                                        }
                                        else
                                        {
                                            Session["MCF"] = "NDA";
                                        }
                                        if (data[0].Manufacturers_Commodities_Second != null && data[0].Manufacturers_Commodities_Second != "0")
                                        {
                                            Session["MCS"] = data[0].Manufacturers_Commodities_Second;
                                        }
                                        else
                                        {
                                            Session["MCS"] = "NDA";
                                        }
                                        ViewBag.censusdata1 = data;
                                    }
                                }


                            }
                            else
                            {
                                var data = ABE.objabhystates_completecensusdata_new.Where(f => f.state_name == statename && f.district_name == districtname && f.sub_district_name == blockname && f.gram_panchayat_name == Gpname).Distinct().ToList();


                                if (data[0].Agricultural_Commodities_First != null && data[0].Agricultural_Commodities_First != "0")
                                {
                                    Session["ACF"] = data[0].Agricultural_Commodities_First;
                                }
                                else
                                {
                                    Session["ACF"] = "NDA";
                                }
                                if (data[0].Agricultural_Commodities_Second != null && data[0].Agricultural_Commodities_Second != "0")
                                {
                                    Session["ACS"] = data[0].Agricultural_Commodities_Second;
                                }
                                else
                                {
                                    Session["ACS"] = "NDA";
                                }
                                if (data[0].Manufacturers_Commodities_First != null && data[0].Manufacturers_Commodities_First != "0")
                                {
                                    Session["MCF"] = data[0].Manufacturers_Commodities_First;
                                }
                                else
                                {
                                    Session["MCF"] = "NDA";
                                }
                                if (data[0].Manufacturers_Commodities_Second != null && data[0].Manufacturers_Commodities_Second != "0")
                                {
                                    Session["MCS"] = data[0].Manufacturers_Commodities_Second;
                                }
                                else
                                {
                                    Session["MCS"] = "NDA";
                                }
                                ViewBag.censusdata1 = data;
                            }
                        }
                        else if (admin == "Admin")
                        {
                            return RedirectToAction("Login_After", "WSP");
                        }
                        else if (admin == "National Level Nodal Officer")
                        {
                            return RedirectToAction("Login_After", "WSP");
                        }
                    }
                    else
                    {
                        if (statename != "" && districtname == "" && blockname == "" && Gpname == "" && vname == "")
                        {
                            var _livestock = 0;
                            var _cattle_Cows = 0;
                            var _buffaloes = 0;
                            var _sheepsandgoats = 0;
                            var livestockdata = ABE.objabhy_livestock.Where(d => d.state_name == statename).Distinct().ToList();
                            for (var f = 0; f < livestockdata.Count; f++)
                            {
                                _livestock = _livestock + Convert.ToInt32(livestockdata[f].livestock);
                                _cattle_Cows = _cattle_Cows + Convert.ToInt32(livestockdata[f].cows);
                                _buffaloes = _buffaloes + Convert.ToInt32(livestockdata[f].buffaloes);
                                _sheepsandgoats = _sheepsandgoats + Convert.ToInt32(livestockdata[f].sheeps_and_goats);
                            }
                            ViewBag.distlivestock = "State Level Information:123 Date:2012 Source:Department Of Animal Husbandry and Dariying";
                            ViewBag.livestock = _livestock;
                            ViewBag.cowscattle = _cattle_Cows;
                            ViewBag.buffaloes = _buffaloes;
                            ViewBag.seepsgoats = _sheepsandgoats;
                            var GWL = ABE.objabhy_groundwater_levels2.Where(f => f.state_name == statename).Distinct().ToList();
                            var res = "";
                            if (GWL.Count != 0)
                            {
                                for (int i = 0; i <= GWL.Count; i++)
                                {
                                    if (GWL[i].jan_19 != null && GWL[i].jan_19 != "NULL")
                                    {
                                        res = GWL[i].jan_19;
                                        ViewBag.jan19 = res;
                                        break;
                                    }

                                }
                            }
                            if (SecondTbl.Count != 0)
                            {
                                var itm = SecondTbl;
                                for (var i = 0; i < itm.Count; i++)
                                {
                                    if (itm[i].state_name == statename)
                                    {
                                        var query6 = from t1 in FirstTbl
                                                     from t2 in SecondTbl.Where(x => t1.state_name.Trim() == x.state_name.Trim()).Distinct()
                                                     select new
                                                     {
                                                         t2.state_name,
                                                         t2.district_name,
                                                         t2.sub_district_name,
                                                         t2.gram_panchayat_name,
                                                         t2.Village_Name,
                                                         t2.Total_Geographical_Area_in_Hectares,
                                                         t2.Total_Households,
                                                         t2.Total_Population_of_Village,
                                                         t2.Tube_Wells_Borehole_Functioning_All_round_the_year,
                                                         t2.Spring_Functioning_All_round_the_year,
                                                         t2.River_Canal_Functioning_All_round_the_year,
                                                         t2.Tank_Pond_Lake_Functioning_All_round_the_year,
                                                         t2.Power_Supply_For_Domestic_Use_Summer_April_Sept_per_day_in_Hour,
                                                         t2.Power_Supply_For_Domestic_Use_Winter_Oct_March_per_day_in_Hours,
                                                         t2.Power_Supply_for_domestic_have_to_calculate_the_average_from_tw,
                                                         t2.Power_Supply_For_Agriculture_Use_Summer_April_Sept_per_day_in_H,
                                                         t2.Power_Supply_For_Agriculture_Use_Winter_Oct_March_per_day_in_Ho,
                                                         t2.Power_Supply_for_agriculture_have_to_calculate_the_average_from,
                                                         t2.Power_Supply_For_Commercial_Use_Winter_Oct_March_per_day_in_Hou,
                                                         t2.Power_Supply_for_commercial_have_to_calculate_the_average_from_,
                                                         t2.Power_Supply_For_All_Users_Summer_April_Sept_per_day_in_Hours,
                                                         t2.Power_Supply_For_All_Users_Winter_Oct_March_per_day_in_Hours,
                                                         t2.Power_Supply_for_all_users_have_to_calculate_the_average_from_t,
                                                         t2.Agricultural_Commodities_First,
                                                         t2.Manufacturers_Commodities_First,
                                                         t2.Agricultural_Commodities_Second,
                                                         t2.Manufacturers_Commodities_Second,
                                                         t2.Agricultural_Commodities_Third,
                                                         t2.Area_under_Non_Agricultural_Uses_in_Hectares,
                                                         t2.Net_Area_Sown_in_Hectares,
                                                         t2.Canals_Area_in_Hectares,
                                                         t2.Wells_Tube_Wells_Area_in_Hectares,
                                                         t2.Tanks_Lakes_Area_in_Hectares,
                                                         t2.Waterfall_Area_in_Hectares,
                                                         t2.Manufacturers_Commodities_Third,
                                                         t2.Springs_Depth,
                                                         t2.Reservoir_Name,
                                                         t2.Current_Reservoir_Level,
                                                         t2.Live_Capacity_at_FRL,
                                                         t2.Live_Capacity_at_FRL_,
                                                         t2.Current_Live_Storage,
                                                         t2.Current_Live_Storage_,
                                                         t2.AvgOfSurfaceWaterRainfall,
                                                         t2.No_Of_CheckDams,
                                                         t2.CheckDams_Capacity,
                                                         t2.Gwr_Rainfall_Area,
                                                         t2.Gwr_Rainfall_Rainfall,
                                                         t2.NetArea_Under_CheckDams_and_NalaBunds,
                                                         t2.Gwr_IT_maximum_SubmergenceArea,
                                                         t2.Gwr_IT_Reacharge_Rate,
                                                         t2.Gwr_IT_DaysOfSubmergence,
                                                         t2.Gwr_CD_maximumSubmergence_Area,
                                                         t2.Gwr_CD_AverageDepthOf_Water,
                                                         t2.Gwr_CD_NoOfFillings,
                                                         t2.Gwr_STC_LengthOfthe_Canals,
                                                         t2.Gwr_STC_Seepage_Factor,
                                                         t2.Gwr_STC_Flowing_Days,
                                                         t2.Gwr_STC_Avg_Wetted_Perimeter,
                                                         t2.Gwr_SWI_AreaIrrigated,
                                                         t2.Gwr_SWI_DesignedDischarge_At_Outlet,
                                                         t2.Gwr_SWI_Seepage_Factor,
                                                         t2.Gwr_SWI_WaterReleased_At_OutLet,
                                                         t2.Gwr_GwI_CommndArea_Irrigation,
                                                         t2.Gwr_GwI_CommandArea_ReturnFlow,
                                                         t2.Gwr_GwI_NonCommand_Area_Irrigation,
                                                         t2.Gwr_GwI_NonCommand_Area_ReturnFlow,
                                                         t2.Draft_Irrigation_DailyPumping_Hours,
                                                         t2.Draft_Irrigation_Total_NoOf_Pumping_Days,
                                                         t2.Draft_Irrigation_Avg_Pumping_Rate,
                                                         t2.Draft_Drink_Tot_Water_Requirement_For_People,
                                                         t2.Draft_Drink_Tot_Water_Requirement_For_CowsBufalos,
                                                         t2.Draft_Drink_Tot_Water_Requirement_For_Bullocks,
                                                         t2.Draft_Drink_Tot_Water_Requirement_For_GoatsSheeps,
                                                         t2.Draft_Industry_GW_In_Take,
                                                         t2.Draft_Industry_Tot_Noof_Production_Days,
                                                         t2.Tbl_Condition,
                                                         t2.Canals_Depth,
                                                         t2.Tanks_Depth,
                                                         t2.River_Depth,
                                                         t2.Springs_Total_Geographical_Area_in_Hectares,
                                                         t2.Canals_River_Canal_Functioning_All_round_the_year,
                                                         t2.River_Canals_Area_in_Hectares,
                                                         t2.Harvesting_Canals_Area_in_Hectares,
                                                         t2.Harvesting_Tanks_Lakes_Area_in_Hectares,
                                                         t2.springs_Discharge,
                                                         t2.checkdams_Discharge,
                                                         t2.canals_Discharge,
                                                         t2.reservoir_Discharge,
                                                         t2.lakespondstanks_Discharge,
                                                         t2.river_Discharge,
                                                         t2.surface_water_paddy,
                                                         t2.surface_water_nonpaddy,
                                                         t2.Industry_Prod_days,
                                                         t2.checkdams_depth
                                                     };
                                        ViewBag.censusdata1 = query6.Where(d => d.state_name == itm[i].state_name).Distinct().ToList();
                                        Session["ACF"] = "NDA";
                                        Session["ACS"] = "NDA";
                                        Session["MCF"] = "NDA";
                                        Session["MCS"] = "NDA";
                                    }
                                    else
                                    {
                                        if (statename != "" && districtname == "" && blockname == "" && Gpname == "" && vname == "")
                                        {
                                            ViewBag.censusdata1 = ABE.objabhystates_completecensusdata_new.Where(f => f.state_name == statename).Distinct().ToList();
                                            Session["ACF"] = "NDA";
                                            Session["ACS"] = "NDA";
                                            Session["MCF"] = "NDA";
                                            Session["MCS"] = "NDA";
                                        }
                                    }
                                }
                            }
                            else
                            {
                                if (statename != "" && districtname == "" && blockname == "" && Gpname == "" && vname == "")
                                {
                                    ViewBag.censusdata1 = ABE.objabhystates_completecensusdata_new.Where(f => f.state_name == statename).Distinct().ToList();
                                    Session["ACF"] = "NDA";
                                    Session["ACS"] = "NDA";
                                    Session["MCF"] = "NDA";
                                    Session["MCS"] = "NDA";
                                }
                            }
                        }


                        if (statename != "" && districtname != "" && blockname == "" && Gpname == "" && vname == "")
                        {
                            var _livestock = 0;
                            var _cattle_Cows = 0;
                            var _buffaloes = 0;
                            var _sheepsandgoats = 0;
                            var livestockdata = ABE.objabhy_livestock.Where(d => d.state_name == statename && d.district_name == districtname).Distinct().ToList();
                            for (var f = 0; f < livestockdata.Count; f++)
                            {
                                _livestock = _livestock + Convert.ToInt32(livestockdata[f].livestock);
                                _cattle_Cows = _cattle_Cows + Convert.ToInt32(livestockdata[f].cows);
                                _buffaloes = _buffaloes + Convert.ToInt32(livestockdata[f].buffaloes);
                                _sheepsandgoats = _sheepsandgoats + Convert.ToInt32(livestockdata[f].sheeps_and_goats);
                            }
                            ViewBag.distlivestock = "District Level Information:123 Date:2012 Source:Department Of Animal Husbandry and Dariying";
                            ViewBag.livestock = _livestock;
                            ViewBag.cowscattle = _cattle_Cows;
                            ViewBag.buffaloes = _buffaloes;
                            ViewBag.seepsgoats = _sheepsandgoats;
                            var GWL = ABE.objabhy_groundwater_levels2.Where(f => f.state_name == statename && f.district_name == districtname).Distinct().ToList();
                            var res = "";
                            if (GWL.Count != 0)
                            {
                                for (int i = 0; i <= GWL.Count; i++)
                                {
                                    if (GWL[i].jan_19 != null && GWL[i].jan_19 != "NULL")
                                    {
                                        res = GWL[i].jan_19;
                                        ViewBag.jan19 = res;
                                        break;
                                    }

                                }
                            }
                            if (SecondTbl.Count != 0)
                            {
                                var itm = SecondTbl;
                                for (var i = 0; i < itm.Count; i++)
                                {
                                    if (itm[i].state_name == statename && itm[i].district_name == districtname)
                                    {
                                        var query7 = from t1 in FirstTbl
                                                     from t2 in SecondTbl.Where(x => t1.state_name == x.state_name && t1.district_name == x.district_name).Distinct()
                                                     select new
                                                     {
                                                         t2.state_name,
                                                         t2.district_name,
                                                         t2.sub_district_name,
                                                         t2.gram_panchayat_name,
                                                         t2.Village_Name,
                                                         t2.Total_Geographical_Area_in_Hectares,
                                                         t2.Total_Households,
                                                         t2.Total_Population_of_Village,
                                                         t2.Tube_Wells_Borehole_Functioning_All_round_the_year,
                                                         t2.Spring_Functioning_All_round_the_year,
                                                         t2.River_Canal_Functioning_All_round_the_year,
                                                         t2.Tank_Pond_Lake_Functioning_All_round_the_year,
                                                         t2.Power_Supply_For_Domestic_Use_Summer_April_Sept_per_day_in_Hour,
                                                         t2.Power_Supply_For_Domestic_Use_Winter_Oct_March_per_day_in_Hours,
                                                         t2.Power_Supply_for_domestic_have_to_calculate_the_average_from_tw,
                                                         t2.Power_Supply_For_Agriculture_Use_Summer_April_Sept_per_day_in_H,
                                                         t2.Power_Supply_For_Agriculture_Use_Winter_Oct_March_per_day_in_Ho,
                                                         t2.Power_Supply_for_agriculture_have_to_calculate_the_average_from,
                                                         t2.Power_Supply_For_Commercial_Use_Winter_Oct_March_per_day_in_Hou,
                                                         t2.Power_Supply_for_commercial_have_to_calculate_the_average_from_,
                                                         t2.Power_Supply_For_All_Users_Summer_April_Sept_per_day_in_Hours,
                                                         t2.Power_Supply_For_All_Users_Winter_Oct_March_per_day_in_Hours,
                                                         t2.Power_Supply_for_all_users_have_to_calculate_the_average_from_t,
                                                         t2.Agricultural_Commodities_First,
                                                         t2.Manufacturers_Commodities_First,
                                                         t2.Agricultural_Commodities_Second,
                                                         t2.Manufacturers_Commodities_Second,
                                                         t2.Agricultural_Commodities_Third,
                                                         t2.Area_under_Non_Agricultural_Uses_in_Hectares,
                                                         t2.Net_Area_Sown_in_Hectares,
                                                         t2.Canals_Area_in_Hectares,
                                                         t2.Wells_Tube_Wells_Area_in_Hectares,
                                                         t2.Tanks_Lakes_Area_in_Hectares,
                                                         t2.Waterfall_Area_in_Hectares,
                                                         t2.Manufacturers_Commodities_Third,
                                                         t2.Springs_Depth,
                                                         t2.Reservoir_Name,
                                                         t2.Current_Reservoir_Level,
                                                         t2.Live_Capacity_at_FRL,
                                                         t2.Live_Capacity_at_FRL_,
                                                         t2.Current_Live_Storage,
                                                         t2.Current_Live_Storage_,
                                                         t2.AvgOfSurfaceWaterRainfall,
                                                         t2.No_Of_CheckDams,
                                                         t2.CheckDams_Capacity,
                                                         t2.Gwr_Rainfall_Area,
                                                         t2.Gwr_Rainfall_Rainfall,
                                                         t2.NetArea_Under_CheckDams_and_NalaBunds,
                                                         t2.Gwr_IT_maximum_SubmergenceArea,
                                                         t2.Gwr_IT_Reacharge_Rate,
                                                         t2.Gwr_IT_DaysOfSubmergence,
                                                         t2.Gwr_CD_maximumSubmergence_Area,
                                                         t2.Gwr_CD_AverageDepthOf_Water,
                                                         t2.Gwr_CD_NoOfFillings,
                                                         t2.Gwr_STC_LengthOfthe_Canals,
                                                         t2.Gwr_STC_Seepage_Factor,
                                                         t2.Gwr_STC_Flowing_Days,
                                                         t2.Gwr_STC_Avg_Wetted_Perimeter,
                                                         t2.Gwr_SWI_AreaIrrigated,
                                                         t2.Gwr_SWI_DesignedDischarge_At_Outlet,
                                                         t2.Gwr_SWI_Seepage_Factor,
                                                         t2.Gwr_SWI_WaterReleased_At_OutLet,
                                                         t2.Gwr_GwI_CommndArea_Irrigation,
                                                         t2.Gwr_GwI_CommandArea_ReturnFlow,
                                                         t2.Gwr_GwI_NonCommand_Area_Irrigation,
                                                         t2.Gwr_GwI_NonCommand_Area_ReturnFlow,
                                                         t2.Draft_Irrigation_DailyPumping_Hours,
                                                         t2.Draft_Irrigation_Total_NoOf_Pumping_Days,
                                                         t2.Draft_Irrigation_Avg_Pumping_Rate,
                                                         t2.Draft_Drink_Tot_Water_Requirement_For_People,
                                                         t2.Draft_Drink_Tot_Water_Requirement_For_CowsBufalos,
                                                         t2.Draft_Drink_Tot_Water_Requirement_For_Bullocks,
                                                         t2.Draft_Drink_Tot_Water_Requirement_For_GoatsSheeps,
                                                         t2.Draft_Industry_GW_In_Take,
                                                         t2.Draft_Industry_Tot_Noof_Production_Days,
                                                         t2.Tbl_Condition,
                                                         t2.Canals_Depth,
                                                         t2.Tanks_Depth,
                                                         t2.River_Depth,
                                                         t2.Springs_Total_Geographical_Area_in_Hectares,
                                                         t2.Canals_River_Canal_Functioning_All_round_the_year,
                                                         t2.River_Canals_Area_in_Hectares,
                                                         t2.Harvesting_Canals_Area_in_Hectares,
                                                         t2.Harvesting_Tanks_Lakes_Area_in_Hectares,
                                                         t2.springs_Discharge,
                                                         t2.checkdams_Discharge,
                                                         t2.canals_Discharge,
                                                         t2.reservoir_Discharge,
                                                         t2.lakespondstanks_Discharge,
                                                         t2.river_Discharge,
                                                         t2.surface_water_paddy,
                                                         t2.surface_water_nonpaddy,
                                                         t2.Industry_Prod_days,
                                                         t2.checkdams_depth
                                                     };
                                        ViewBag.censusdata1 = query7.Where(d => d.state_name == itm[i].state_name && d.district_name == itm[i].district_name).Distinct().ToList();
                                        Session["ACF"] = "NDA";
                                        Session["ACS"] = "NDA";
                                        Session["MCF"] = "NDA";
                                        Session["MCS"] = "NDA";
                                    }
                                    else
                                    {
                                        if (statename != "" && districtname != "" && blockname == "" && Gpname == "" && vname == "")
                                        {
                                            ViewBag.censusdata1 = ABE.objabhystates_completecensusdata_new.Where(f => f.state_name == statename && f.district_name == districtname).Distinct().ToList();
                                            Session["ACF"] = "NDA";
                                            Session["ACS"] = "NDA";
                                            Session["MCF"] = "NDA";
                                            Session["MCS"] = "NDA";

                                        }
                                    }
                                }
                            }
                            else
                            {
                                if (statename != "" && districtname != "" && blockname == "" && Gpname == "" && vname == "")
                                {
                                    ViewBag.censusdata1 = ABE.objabhystates_completecensusdata_new.Where(f => f.state_name == statename && f.district_name == districtname).Distinct().ToList();
                                    Session["ACF"] = "NDA";
                                    Session["ACS"] = "NDA";
                                    Session["MCF"] = "NDA";
                                    Session["MCS"] = "NDA";
                                }
                            }
                        }


                        if (statename != "" && districtname != "" && blockname != "" && Gpname == "" && vname == "")
                        {
                            var _livestock = 0;
                            var _cattle_Cows = 0;
                            var _buffaloes = 0;
                            var _sheepsandgoats = 0;
                            var livestockdata = ABE.objabhy_livestock.Where(d => d.state_name == statename && d.district_name == districtname).Distinct().ToList();
                            for (var f = 0; f < livestockdata.Count; f++)
                            {
                                _livestock = _livestock + Convert.ToInt32(livestockdata[f].livestock);
                                _cattle_Cows = _cattle_Cows + Convert.ToInt32(livestockdata[f].cows);
                                _buffaloes = _buffaloes + Convert.ToInt32(livestockdata[f].buffaloes);
                                _sheepsandgoats = _sheepsandgoats + Convert.ToInt32(livestockdata[f].sheeps_and_goats);
                            }
                            ViewBag.distlivestock = "District Level Information:123 Date:2012 Source:Department Of Animal Husbandry and Dariying";
                            ViewBag.livestock = _livestock;
                            ViewBag.cowscattle = _cattle_Cows;
                            ViewBag.buffaloes = _buffaloes;
                            ViewBag.seepsgoats = _sheepsandgoats;
                            var GWL = ABE.objabhy_groundwater_levels2.Where(f => f.state_name == statename && f.district_name == districtname && f.block == blockname).Distinct().ToList();
                            var res = "";
                            if (GWL.Count != 0)
                            {
                                for (int i = 0; i <= GWL.Count; i++)
                                {
                                    if (GWL[i].jan_19 != null && GWL[i].jan_19 != "NULL")
                                    {
                                        res = GWL[i].jan_19;
                                        ViewBag.jan19 = res;
                                        break;
                                    }

                                }
                            }
                            if (SecondTbl.Count != 0)
                            {
                                var itm = SecondTbl;
                                for (var i = 0; i < itm.Count; i++)
                                {
                                    if (itm[i].state_name == statename && itm[i].district_name == districtname && itm[i].sub_district_name == blockname)
                                    {
                                        if (statename != "" && districtname != "" && blockname != "" && Gpname == "" && vname == "")
                                        {
                                            var query = from t1 in FirstTbl
                                                        from t2 in SecondTbl.Where(x => t1.state_name == x.state_name && t1.district_name == x.district_name && t1.sub_district_name == x.sub_district_name).Distinct()
                                                        select new
                                                        {
                                                            t2.state_name,
                                                            t2.district_name,
                                                            t2.sub_district_name,
                                                            t2.gram_panchayat_name,
                                                            t2.Village_Name,
                                                            t2.Total_Geographical_Area_in_Hectares,
                                                            t2.Total_Households,
                                                            t2.Total_Population_of_Village,
                                                            t2.Tube_Wells_Borehole_Functioning_All_round_the_year,
                                                            t2.Spring_Functioning_All_round_the_year,
                                                            t2.River_Canal_Functioning_All_round_the_year,
                                                            t2.Tank_Pond_Lake_Functioning_All_round_the_year,
                                                            t2.Power_Supply_For_Domestic_Use_Summer_April_Sept_per_day_in_Hour,
                                                            t2.Power_Supply_For_Domestic_Use_Winter_Oct_March_per_day_in_Hours,
                                                            t2.Power_Supply_for_domestic_have_to_calculate_the_average_from_tw,
                                                            t2.Power_Supply_For_Agriculture_Use_Summer_April_Sept_per_day_in_H,
                                                            t2.Power_Supply_For_Agriculture_Use_Winter_Oct_March_per_day_in_Ho,
                                                            t2.Power_Supply_for_agriculture_have_to_calculate_the_average_from,
                                                            t2.Power_Supply_For_Commercial_Use_Winter_Oct_March_per_day_in_Hou,
                                                            t2.Power_Supply_for_commercial_have_to_calculate_the_average_from_,
                                                            t2.Power_Supply_For_All_Users_Summer_April_Sept_per_day_in_Hours,
                                                            t2.Power_Supply_For_All_Users_Winter_Oct_March_per_day_in_Hours,
                                                            t2.Power_Supply_for_all_users_have_to_calculate_the_average_from_t,
                                                            t2.Agricultural_Commodities_First,
                                                            t2.Manufacturers_Commodities_First,
                                                            t2.Agricultural_Commodities_Second,
                                                            t2.Manufacturers_Commodities_Second,
                                                            t2.Agricultural_Commodities_Third,
                                                            t2.Area_under_Non_Agricultural_Uses_in_Hectares,
                                                            t2.Net_Area_Sown_in_Hectares,
                                                            t2.Canals_Area_in_Hectares,
                                                            t2.Wells_Tube_Wells_Area_in_Hectares,
                                                            t2.Tanks_Lakes_Area_in_Hectares,
                                                            t2.Waterfall_Area_in_Hectares,
                                                            t2.Manufacturers_Commodities_Third,
                                                            t2.Springs_Depth,
                                                            t2.Reservoir_Name,
                                                            t2.Current_Reservoir_Level,
                                                            t2.Live_Capacity_at_FRL,
                                                            t2.Live_Capacity_at_FRL_,
                                                            t2.Current_Live_Storage,
                                                            t2.Current_Live_Storage_,
                                                            t2.AvgOfSurfaceWaterRainfall,
                                                            t2.No_Of_CheckDams,
                                                            t2.CheckDams_Capacity,
                                                            t2.Gwr_Rainfall_Area,
                                                            t2.Gwr_Rainfall_Rainfall,
                                                            t2.NetArea_Under_CheckDams_and_NalaBunds,
                                                            t2.Gwr_IT_maximum_SubmergenceArea,
                                                            t2.Gwr_IT_Reacharge_Rate,
                                                            t2.Gwr_IT_DaysOfSubmergence,
                                                            t2.Gwr_CD_maximumSubmergence_Area,
                                                            t2.Gwr_CD_AverageDepthOf_Water,
                                                            t2.Gwr_CD_NoOfFillings,
                                                            t2.Gwr_STC_LengthOfthe_Canals,
                                                            t2.Gwr_STC_Seepage_Factor,
                                                            t2.Gwr_STC_Flowing_Days,
                                                            t2.Gwr_STC_Avg_Wetted_Perimeter,
                                                            t2.Gwr_SWI_AreaIrrigated,
                                                            t2.Gwr_SWI_DesignedDischarge_At_Outlet,
                                                            t2.Gwr_SWI_Seepage_Factor,
                                                            t2.Gwr_SWI_WaterReleased_At_OutLet,
                                                            t2.Gwr_GwI_CommndArea_Irrigation,
                                                            t2.Gwr_GwI_CommandArea_ReturnFlow,
                                                            t2.Gwr_GwI_NonCommand_Area_Irrigation,
                                                            t2.Gwr_GwI_NonCommand_Area_ReturnFlow,
                                                            t2.Draft_Irrigation_DailyPumping_Hours,
                                                            t2.Draft_Irrigation_Total_NoOf_Pumping_Days,
                                                            t2.Draft_Irrigation_Avg_Pumping_Rate,
                                                            t2.Draft_Drink_Tot_Water_Requirement_For_People,
                                                            t2.Draft_Drink_Tot_Water_Requirement_For_CowsBufalos,
                                                            t2.Draft_Drink_Tot_Water_Requirement_For_Bullocks,
                                                            t2.Draft_Drink_Tot_Water_Requirement_For_GoatsSheeps,
                                                            t2.Draft_Industry_GW_In_Take,
                                                            t2.Draft_Industry_Tot_Noof_Production_Days,
                                                            t2.Tbl_Condition,
                                                            t2.Canals_Depth,
                                                            t2.Tanks_Depth,
                                                            t2.River_Depth,
                                                            t2.Springs_Total_Geographical_Area_in_Hectares,
                                                            t2.Canals_River_Canal_Functioning_All_round_the_year,
                                                            t2.River_Canals_Area_in_Hectares,
                                                            t2.Harvesting_Canals_Area_in_Hectares,
                                                            t2.Harvesting_Tanks_Lakes_Area_in_Hectares,
                                                            t2.springs_Discharge,
                                                            t2.checkdams_Discharge,
                                                            t2.canals_Discharge,
                                                            t2.reservoir_Discharge,
                                                            t2.lakespondstanks_Discharge,
                                                            t2.river_Discharge,
                                                            t2.surface_water_paddy,
                                                            t2.surface_water_nonpaddy,
                                                            t2.Industry_Prod_days,
                                                            t2.checkdams_depth
                                                        };
                                            ViewBag.censusdata1 = query.Where(d => d.state_name == itm[i].state_name && d.district_name == itm[i].district_name && d.sub_district_name == itm[i].sub_district_name).Distinct().ToList();

                                            Session["ACF"] = "NDA";
                                            Session["ACS"] = "NDA";
                                            Session["MCF"] = "NDA";
                                            Session["MCS"] = "NDA";
                                        }
                                    }
                                    else
                                    {
                                        if (statename != "" && districtname != "" && blockname != "" && Gpname == "" && vname == "")
                                        {
                                            ViewBag.censusdata1 = ABE.objabhystates_completecensusdata_new.Where(f => f.state_name == statename && f.district_name == districtname && f.sub_district_name == blockname).Distinct().ToList();
                                            Session["ACF"] = "NDA";
                                            Session["ACS"] = "NDA";
                                            Session["MCF"] = "NDA";
                                            Session["MCS"] = "NDA";
                                        }
                                    }
                                }
                            }
                            else
                            {
                                if (statename != "" && districtname != "" && blockname != "" && Gpname == "" && vname == "")
                                {
                                    ViewBag.censusdata1 = ABE.objabhystates_completecensusdata_new.Where(f => f.state_name == statename && f.district_name == districtname && f.sub_district_name == blockname).Distinct().ToList();
                                    Session["ACF"] = "NDA";
                                    Session["ACS"] = "NDA";
                                    Session["MCF"] = "NDA";
                                    Session["MCS"] = "NDA";
                                }
                            }
                        }


                        if (statename != "" && districtname != "" && blockname != "" && Gpname != "" && vname == "")
                        {
                            var _livestock = 0;
                            var _cattle_Cows = 0;
                            var _buffaloes = 0;
                            var _sheepsandgoats = 0;
                            var livestockdata = ABE.objabhy_livestock.Where(d => d.state_name == statename && d.district_name == districtname).Distinct().ToList();
                            for (var f = 0; f < livestockdata.Count; f++)
                            {
                                _livestock = _livestock + Convert.ToInt32(livestockdata[f].livestock);
                                _cattle_Cows = _cattle_Cows + Convert.ToInt32(livestockdata[f].cows);
                                _buffaloes = _buffaloes + Convert.ToInt32(livestockdata[f].buffaloes);
                                _sheepsandgoats = _sheepsandgoats + Convert.ToInt32(livestockdata[f].sheeps_and_goats);
                            }
                            ViewBag.distlivestock = "District Level Information:123 Date:2012 Source:Department Of Animal Husbandry and Dariying";
                            ViewBag.livestock = _livestock;
                            ViewBag.cowscattle = _cattle_Cows;
                            ViewBag.buffaloes = _buffaloes;
                            ViewBag.seepsgoats = _sheepsandgoats;
                            var GWL = ABE.objabhy_groundwater_levels2.Where(f => f.state_name == statename && f.district_name == districtname && f.block == blockname).Distinct().ToList();
                            var res = "";
                            if (GWL.Count != 0)
                            {
                                for (int i = 0; i <= GWL.Count; i++)
                                {
                                    if (GWL[i].jan_19 != null && GWL[i].jan_19 != "NULL")
                                    {
                                        res = GWL[i].jan_19;
                                        ViewBag.jan19 = res;
                                        break;
                                    }

                                }
                            }
                            if (SecondTbl.Count != 0)
                            {
                                var itm = SecondTbl;
                                for (var i = 0; i < itm.Count; i++)
                                {
                                    if (itm[i].state_name == statename && itm[i].district_name == districtname && itm[i].sub_district_name == blockname && itm[i].gram_panchayat_name == Gpname)
                                    {
                                        var query8 = from t1 in FirstTbl
                                                     from t2 in SecondTbl.Where(x => t1.state_name == x.state_name && t1.district_name == x.district_name && t1.sub_district_name == x.sub_district_name && t1.gram_panchayat_name == x.gram_panchayat_name).Distinct()
                                                     select new
                                                     {
                                                         t2.state_name,
                                                         t2.district_name,
                                                         t2.sub_district_name,
                                                         t2.gram_panchayat_name,
                                                         t2.Village_Name,
                                                         t2.Total_Geographical_Area_in_Hectares,
                                                         t2.Total_Households,
                                                         t2.Total_Population_of_Village,
                                                         t2.Tube_Wells_Borehole_Functioning_All_round_the_year,
                                                         t2.Spring_Functioning_All_round_the_year,
                                                         t2.River_Canal_Functioning_All_round_the_year,
                                                         t2.Tank_Pond_Lake_Functioning_All_round_the_year,
                                                         t2.Power_Supply_For_Domestic_Use_Summer_April_Sept_per_day_in_Hour,
                                                         t2.Power_Supply_For_Domestic_Use_Winter_Oct_March_per_day_in_Hours,
                                                         t2.Power_Supply_for_domestic_have_to_calculate_the_average_from_tw,
                                                         t2.Power_Supply_For_Agriculture_Use_Summer_April_Sept_per_day_in_H,
                                                         t2.Power_Supply_For_Agriculture_Use_Winter_Oct_March_per_day_in_Ho,
                                                         t2.Power_Supply_for_agriculture_have_to_calculate_the_average_from,
                                                         t2.Power_Supply_For_Commercial_Use_Winter_Oct_March_per_day_in_Hou,
                                                         t2.Power_Supply_for_commercial_have_to_calculate_the_average_from_,
                                                         t2.Power_Supply_For_All_Users_Summer_April_Sept_per_day_in_Hours,
                                                         t2.Power_Supply_For_All_Users_Winter_Oct_March_per_day_in_Hours,
                                                         t2.Power_Supply_for_all_users_have_to_calculate_the_average_from_t,
                                                         t2.Agricultural_Commodities_First,
                                                         t2.Manufacturers_Commodities_First,
                                                         t2.Agricultural_Commodities_Second,
                                                         t2.Manufacturers_Commodities_Second,
                                                         t2.Agricultural_Commodities_Third,
                                                         t2.Area_under_Non_Agricultural_Uses_in_Hectares,
                                                         t2.Net_Area_Sown_in_Hectares,
                                                         t2.Canals_Area_in_Hectares,
                                                         t2.Wells_Tube_Wells_Area_in_Hectares,
                                                         t2.Tanks_Lakes_Area_in_Hectares,
                                                         t2.Waterfall_Area_in_Hectares,
                                                         t2.Manufacturers_Commodities_Third,
                                                         t2.Springs_Depth,
                                                         t2.Reservoir_Name,
                                                         t2.Current_Reservoir_Level,
                                                         t2.Live_Capacity_at_FRL,
                                                         t2.Live_Capacity_at_FRL_,
                                                         t2.Current_Live_Storage,
                                                         t2.Current_Live_Storage_,
                                                         t2.AvgOfSurfaceWaterRainfall,
                                                         t2.No_Of_CheckDams,
                                                         t2.CheckDams_Capacity,
                                                         t2.Gwr_Rainfall_Area,
                                                         t2.Gwr_Rainfall_Rainfall,
                                                         t2.NetArea_Under_CheckDams_and_NalaBunds,
                                                         t2.Gwr_IT_maximum_SubmergenceArea,
                                                         t2.Gwr_IT_Reacharge_Rate,
                                                         t2.Gwr_IT_DaysOfSubmergence,
                                                         t2.Gwr_CD_maximumSubmergence_Area,
                                                         t2.Gwr_CD_AverageDepthOf_Water,
                                                         t2.Gwr_CD_NoOfFillings,
                                                         t2.Gwr_STC_LengthOfthe_Canals,
                                                         t2.Gwr_STC_Seepage_Factor,
                                                         t2.Gwr_STC_Flowing_Days,
                                                         t2.Gwr_STC_Avg_Wetted_Perimeter,
                                                         t2.Gwr_SWI_AreaIrrigated,
                                                         t2.Gwr_SWI_DesignedDischarge_At_Outlet,
                                                         t2.Gwr_SWI_Seepage_Factor,
                                                         t2.Gwr_SWI_WaterReleased_At_OutLet,
                                                         t2.Gwr_GwI_CommndArea_Irrigation,
                                                         t2.Gwr_GwI_CommandArea_ReturnFlow,
                                                         t2.Gwr_GwI_NonCommand_Area_Irrigation,
                                                         t2.Gwr_GwI_NonCommand_Area_ReturnFlow,
                                                         t2.Draft_Irrigation_DailyPumping_Hours,
                                                         t2.Draft_Irrigation_Total_NoOf_Pumping_Days,
                                                         t2.Draft_Irrigation_Avg_Pumping_Rate,
                                                         t2.Draft_Drink_Tot_Water_Requirement_For_People,
                                                         t2.Draft_Drink_Tot_Water_Requirement_For_CowsBufalos,
                                                         t2.Draft_Drink_Tot_Water_Requirement_For_Bullocks,
                                                         t2.Draft_Drink_Tot_Water_Requirement_For_GoatsSheeps,
                                                         t2.Draft_Industry_GW_In_Take,
                                                         t2.Draft_Industry_Tot_Noof_Production_Days,
                                                         t2.Tbl_Condition,
                                                         t2.Canals_Depth,
                                                         t2.Tanks_Depth,
                                                         t2.River_Depth,
                                                         t2.Springs_Total_Geographical_Area_in_Hectares,
                                                         t2.Canals_River_Canal_Functioning_All_round_the_year,
                                                         t2.River_Canals_Area_in_Hectares,
                                                         t2.Harvesting_Canals_Area_in_Hectares,
                                                         t2.Harvesting_Tanks_Lakes_Area_in_Hectares,
                                                         t2.springs_Discharge,
                                                         t2.checkdams_Discharge,
                                                         t2.canals_Discharge,
                                                         t2.reservoir_Discharge,
                                                         t2.lakespondstanks_Discharge,
                                                         t2.river_Discharge,
                                                         t2.surface_water_paddy,
                                                         t2.surface_water_nonpaddy,
                                                         t2.Industry_Prod_days,
                                                         t2.checkdams_depth
                                                     };
                                        ViewBag.censusdata1 = query8.Where(d => d.state_name == itm[i].state_name && d.district_name == itm[i].district_name && d.sub_district_name == itm[i].sub_district_name).Distinct().ToList();
                                        Session["ACF"] = "NDA";
                                        Session["ACS"] = "NDA";
                                        Session["MCF"] = "NDA";
                                        Session["MCS"] = "NDA";
                                    }
                                    else
                                    {
                                        if (statename != "" && districtname != "" && blockname != "" && Gpname != "" && vname == "")
                                        {
                                            ViewBag.censusdata1 = ABE.objabhystates_completecensusdata_new.Where(f => f.state_name == statename && f.district_name == districtname && f.sub_district_name == blockname && f.gram_panchayat_name == Gpname).Distinct().ToList();
                                            Session["ACF"] = "NDA";
                                            Session["ACS"] = "NDA";
                                            Session["MCF"] = "NDA";
                                            Session["MCS"] = "NDA";
                                        }
                                    }
                                }

                            }
                            else
                            {
                                if (statename != "" && districtname != "" && blockname != "" && Gpname != "" && vname == "")
                                {
                                    ViewBag.censusdata1 = ABE.objabhystates_completecensusdata_new.Where(f => f.state_name == statename && f.district_name == districtname && f.sub_district_name == blockname && f.gram_panchayat_name == Gpname).Distinct().ToList();
                                    Session["ACF"] = "NDA";
                                    Session["ACS"] = "NDA";
                                    Session["MCF"] = "NDA";
                                    Session["MCS"] = "NDA";
                                }
                            }
                        }

                        if (statename != "" && districtname != "" && blockname != "" && Gpname != "" && vname != "")
                        {
                            var _livestock = 0;
                            var _cattle_Cows = 0;
                            var _buffaloes = 0;
                            var _sheepsandgoats = 0;
                            var livestockdata = ABE.objabhy_livestock.Where(d => d.state_name == statename && d.district_name == districtname).Distinct().ToList();
                            for (var f = 0; f < livestockdata.Count; f++)
                            {
                                _livestock = _livestock + Convert.ToInt32(livestockdata[f].livestock);
                                _cattle_Cows = _cattle_Cows + Convert.ToInt32(livestockdata[f].cows);
                                _buffaloes = _buffaloes + Convert.ToInt32(livestockdata[f].buffaloes);
                                _sheepsandgoats = _sheepsandgoats + Convert.ToInt32(livestockdata[f].sheeps_and_goats);
                            }
                            ViewBag.distlivestock = "District Level Information:123 Date:2012 Source:Department Of Animal Husbandry and Dariying";
                            ViewBag.livestock = _livestock;
                            ViewBag.cowscattle = _cattle_Cows;
                            ViewBag.buffaloes = _buffaloes;
                            ViewBag.seepsgoats = _sheepsandgoats;
                            var GWL = ABE.objabhy_groundwater_levels2.Where(f => f.state_name == statename && f.district_name == districtname && f.block == blockname).Distinct().ToList();
                            var res = "";
                            if (GWL.Count != 0)
                            {
                                for (int i = 0; i <= GWL.Count; i++)
                                {
                                    if (GWL[i].jan_19 != null && GWL[i].jan_19 != "NULL")
                                    {
                                        res = GWL[i].jan_19;
                                        ViewBag.jan19 = res;
                                        break;
                                    }

                                }
                            }
                            if (SecondTbl.Count != 0)
                            {
                                var itm = SecondTbl;
                                for (var i = 0; i < itm.Count; i++)
                                {
                                    if (itm[i].state_name == statename && itm[i].district_name == districtname && itm[i].sub_district_name == blockname && itm[i].gram_panchayat_name == Gpname && itm[i].Village_Name == vname)
                                    {

                                        var query9 = from t1 in FirstTbl
                                                     from t2 in SecondTbl.Where(x => t1.state_name.Trim() == x.state_name.Trim() && t1.district_name.Trim() == x.district_name.Trim() && t1.sub_district_name.Trim() == x.sub_district_name.Trim() && t1.gram_panchayat_name.Trim() == x.gram_panchayat_name.Trim() && t1.Village_Name.Trim() == x.Village_Name.Trim()).Distinct()
                                                     select new
                                                     {
                                                         t2.state_name,
                                                         t2.district_name,
                                                         t2.sub_district_name,
                                                         t2.gram_panchayat_name,
                                                         t2.Village_Name,
                                                         t2.Total_Geographical_Area_in_Hectares,
                                                         t2.Total_Households,
                                                         t2.Total_Population_of_Village,
                                                         t2.Tube_Wells_Borehole_Functioning_All_round_the_year,
                                                         t2.Spring_Functioning_All_round_the_year,
                                                         t2.River_Canal_Functioning_All_round_the_year,
                                                         t2.Tank_Pond_Lake_Functioning_All_round_the_year,
                                                         t2.Power_Supply_For_Domestic_Use_Summer_April_Sept_per_day_in_Hour,
                                                         t2.Power_Supply_For_Domestic_Use_Winter_Oct_March_per_day_in_Hours,
                                                         t2.Power_Supply_for_domestic_have_to_calculate_the_average_from_tw,
                                                         t2.Power_Supply_For_Agriculture_Use_Summer_April_Sept_per_day_in_H,
                                                         t2.Power_Supply_For_Agriculture_Use_Winter_Oct_March_per_day_in_Ho,
                                                         t2.Power_Supply_for_agriculture_have_to_calculate_the_average_from,
                                                         t2.Power_Supply_For_Commercial_Use_Winter_Oct_March_per_day_in_Hou,
                                                         t2.Power_Supply_for_commercial_have_to_calculate_the_average_from_,
                                                         t2.Power_Supply_For_All_Users_Summer_April_Sept_per_day_in_Hours,
                                                         t2.Power_Supply_For_All_Users_Winter_Oct_March_per_day_in_Hours,
                                                         t2.Power_Supply_for_all_users_have_to_calculate_the_average_from_t,
                                                         t2.Agricultural_Commodities_First,
                                                         t2.Manufacturers_Commodities_First,
                                                         t2.Agricultural_Commodities_Second,
                                                         t2.Manufacturers_Commodities_Second,
                                                         t2.Agricultural_Commodities_Third,
                                                         t2.Area_under_Non_Agricultural_Uses_in_Hectares,
                                                         t2.Net_Area_Sown_in_Hectares,
                                                         t2.Canals_Area_in_Hectares,
                                                         t2.Wells_Tube_Wells_Area_in_Hectares,
                                                         t2.Tanks_Lakes_Area_in_Hectares,
                                                         t2.Waterfall_Area_in_Hectares,
                                                         t2.Manufacturers_Commodities_Third,
                                                         t2.Springs_Depth,
                                                         t2.Reservoir_Name,
                                                         t2.Current_Reservoir_Level,
                                                         t2.Live_Capacity_at_FRL,
                                                         t2.Live_Capacity_at_FRL_,
                                                         t2.Current_Live_Storage,
                                                         t2.Current_Live_Storage_,
                                                         t2.AvgOfSurfaceWaterRainfall,
                                                         t2.No_Of_CheckDams,
                                                         t2.CheckDams_Capacity,
                                                         t2.Gwr_Rainfall_Area,
                                                         t2.Gwr_Rainfall_Rainfall,
                                                         t2.NetArea_Under_CheckDams_and_NalaBunds,
                                                         t2.Gwr_IT_maximum_SubmergenceArea,
                                                         t2.Gwr_IT_Reacharge_Rate,
                                                         t2.Gwr_IT_DaysOfSubmergence,
                                                         t2.Gwr_CD_maximumSubmergence_Area,
                                                         t2.Gwr_CD_AverageDepthOf_Water,
                                                         t2.Gwr_CD_NoOfFillings,
                                                         t2.Gwr_STC_LengthOfthe_Canals,
                                                         t2.Gwr_STC_Seepage_Factor,
                                                         t2.Gwr_STC_Flowing_Days,
                                                         t2.Gwr_STC_Avg_Wetted_Perimeter,
                                                         t2.Gwr_SWI_AreaIrrigated,
                                                         t2.Gwr_SWI_DesignedDischarge_At_Outlet,
                                                         t2.Gwr_SWI_Seepage_Factor,
                                                         t2.Gwr_SWI_WaterReleased_At_OutLet,
                                                         t2.Gwr_GwI_CommndArea_Irrigation,
                                                         t2.Gwr_GwI_CommandArea_ReturnFlow,
                                                         t2.Gwr_GwI_NonCommand_Area_Irrigation,
                                                         t2.Gwr_GwI_NonCommand_Area_ReturnFlow,
                                                         t2.Draft_Irrigation_DailyPumping_Hours,
                                                         t2.Draft_Irrigation_Total_NoOf_Pumping_Days,
                                                         t2.Draft_Irrigation_Avg_Pumping_Rate,
                                                         t2.Draft_Drink_Tot_Water_Requirement_For_People,
                                                         t2.Draft_Drink_Tot_Water_Requirement_For_CowsBufalos,
                                                         t2.Draft_Drink_Tot_Water_Requirement_For_Bullocks,
                                                         t2.Draft_Drink_Tot_Water_Requirement_For_GoatsSheeps,
                                                         t2.Draft_Industry_GW_In_Take,
                                                         t2.Draft_Industry_Tot_Noof_Production_Days,
                                                         t2.Tbl_Condition,
                                                         t2.Canals_Depth,
                                                         t2.Tanks_Depth,
                                                         t2.River_Depth,
                                                         t2.Springs_Total_Geographical_Area_in_Hectares,
                                                         t2.Canals_River_Canal_Functioning_All_round_the_year,
                                                         t2.River_Canals_Area_in_Hectares,
                                                         t2.Harvesting_Canals_Area_in_Hectares,
                                                         t2.Harvesting_Tanks_Lakes_Area_in_Hectares,
                                                         t2.springs_Discharge,
                                                         t2.checkdams_Discharge,
                                                         t2.canals_Discharge,
                                                         t2.reservoir_Discharge,
                                                         t2.lakespondstanks_Discharge,
                                                         t2.river_Discharge,
                                                         t2.surface_water_paddy,
                                                         t2.surface_water_nonpaddy,
                                                         t2.Industry_Prod_days,
                                                         t2.checkdams_depth
                                                     };
                                        var data = query9.Where(f => f.state_name == statename && f.district_name == districtname && f.sub_district_name == blockname && f.gram_panchayat_name == Gpname && f.Village_Name == vname).Distinct().ToList();


                                        if (data[0].Agricultural_Commodities_First != null && data[0].Agricultural_Commodities_First != "0")
                                        {
                                            Session["ACF"] = data[0].Agricultural_Commodities_First;
                                        }
                                        else
                                        {
                                            Session["ACF"] = "NDA";
                                        }
                                        if (data[0].Agricultural_Commodities_Second != null && data[0].Agricultural_Commodities_Second != "0")
                                        {
                                            Session["ACS"] = data[0].Agricultural_Commodities_Second;
                                        }
                                        else
                                        {
                                            Session["ACS"] = "NDA";
                                        }
                                        if (data[0].Manufacturers_Commodities_First != null && data[0].Manufacturers_Commodities_First != "0")
                                        {
                                            Session["MCF"] = data[0].Manufacturers_Commodities_First;
                                        }
                                        else
                                        {
                                            Session["MCF"] = "NDA";
                                        }
                                        if (data[0].Manufacturers_Commodities_Second != null && data[0].Manufacturers_Commodities_Second != "0")
                                        {
                                            Session["MCS"] = data[0].Manufacturers_Commodities_Second;
                                        }
                                        else
                                        {
                                            Session["MCS"] = "NDA";
                                        }
                                        ViewBag.censusdata1 = data;
                                    }
                                    else
                                    {
                                        if (statename != "" && districtname != "" && blockname != "" && Gpname != "" && vname != "")
                                        {
                                            var data1 = ABE.objabhystates_completecensusdata_new.Where(f => f.state_name == statename && f.district_name == districtname && f.sub_district_name == blockname && f.gram_panchayat_name == Gpname && f.Village_Name == vname).Distinct().ToList();


                                            if (data1[0].Agricultural_Commodities_First != null && data1[0].Agricultural_Commodities_First != "0")
                                            {
                                                Session["ACF"] = data1[0].Agricultural_Commodities_First;
                                            }
                                            else
                                            {
                                                Session["ACF"] = "NDA";
                                            }
                                            if (data1[0].Agricultural_Commodities_Second != null && data1[0].Agricultural_Commodities_Second != "0")
                                            {
                                                Session["ACS"] = data1[0].Agricultural_Commodities_Second;
                                            }
                                            else
                                            {
                                                Session["ACS"] = "NDA";
                                            }
                                            if (data1[0].Manufacturers_Commodities_First != null && data1[0].Manufacturers_Commodities_First != "0")
                                            {
                                                Session["MCF"] = data1[0].Manufacturers_Commodities_First;
                                            }
                                            else
                                            {
                                                Session["MCF"] = "NDA";
                                            }
                                            if (data1[0].Manufacturers_Commodities_Second != null && data1[0].Manufacturers_Commodities_Second != "0")
                                            {
                                                Session["MCS"] = data1[0].Manufacturers_Commodities_Second;
                                            }
                                            else
                                            {
                                                Session["MCS"] = "NDA";
                                            }
                                            ViewBag.censusdata1 = data1;
                                        }
                                    }
                                }


                            }
                            else
                            {
                                if (statename != "" && districtname != "" && blockname != "" && Gpname != "" && vname != "")
                                {
                                    var data = ABE.objabhystates_completecensusdata_new.Where(f => f.state_name == statename && f.district_name == districtname && f.sub_district_name == blockname && f.gram_panchayat_name == Gpname && f.Village_Name == vname).Distinct().ToList();


                                    if (data[0].Agricultural_Commodities_First != null && data[0].Agricultural_Commodities_First != "0")
                                    {
                                        Session["ACF"] = data[0].Agricultural_Commodities_First;
                                    }
                                    else
                                    {
                                        Session["ACF"] = "NDA";
                                    }
                                    if (data[0].Agricultural_Commodities_Second != null && data[0].Agricultural_Commodities_Second != "0")
                                    {
                                        Session["ACS"] = data[0].Agricultural_Commodities_Second;
                                    }
                                    else
                                    {
                                        Session["ACS"] = "NDA";
                                    }
                                    if (data[0].Manufacturers_Commodities_First != null && data[0].Manufacturers_Commodities_First != "0")
                                    {
                                        Session["MCF"] = data[0].Manufacturers_Commodities_First;
                                    }
                                    else
                                    {
                                        Session["MCF"] = "NDA";
                                    }
                                    if (data[0].Manufacturers_Commodities_Second != null && data[0].Manufacturers_Commodities_Second != "0")
                                    {
                                        Session["MCS"] = data[0].Manufacturers_Commodities_Second;
                                    }
                                    else
                                    {
                                        Session["MCS"] = "NDA";
                                    }
                                    ViewBag.censusdata1 = data;
                                }
                            }
                        }

                    }

                    var finalitem = ViewBag.censusdata1;
                    if (finalitem == null)
                    {
                        ViewBag.Data = null;
                    }
                    else
                    {
                        objcensusdata = new abhystates_completecensusdata_new();
                        foreach (var item in finalitem)
                        {
                            count++;
                            totgeographicalarea = totgeographicalarea + Convert.ToDouble(item.Total_Geographical_Area_in_Hectares);
                            tothouseholds = tothouseholds + Convert.ToDouble(item.Total_Households);
                            totpopulationarea = totpopulationarea + Convert.ToDouble(item.Total_Population_of_Village);
                            TubeWellsBoreholeFunctioningAllroundtheyear = TubeWellsBoreholeFunctioningAllroundtheyear + Convert.ToDouble(item.Tube_Wells_Borehole_Functioning_All_round_the_year);
                            SpringFunctioningAllroundtheyear = SpringFunctioningAllroundtheyear + Convert.ToDouble(item.Spring_Functioning_All_round_the_year);
                            RiverCanalFunctioningAllroundtheyear = RiverCanalFunctioningAllroundtheyear + Convert.ToDouble(item.River_Canal_Functioning_All_round_the_year);

                            TankPondLakeFunctioningAllroundtheyear = TankPondLakeFunctioningAllroundtheyear + Convert.ToDouble(item.Tank_Pond_Lake_Functioning_All_round_the_year);
                            PowerSupplyForDomesticUseSummerAprilSeptperdayinHour = PowerSupplyForDomesticUseSummerAprilSeptperdayinHour + Convert.ToDouble(item.Power_Supply_For_Domestic_Use_Summer_April_Sept_per_day_in_Hour);
                            PowerSupplyForDomesticUseWinterOctMarchperdayinHours = PowerSupplyForDomesticUseWinterOctMarchperdayinHours + Convert.ToDouble(item.Power_Supply_For_Domestic_Use_Winter_Oct_March_per_day_in_Hours);
                            PowerSupplyfordomestichavetocalculatetheaveragefromtw = PowerSupplyfordomestichavetocalculatetheaveragefromtw + Convert.ToDouble(item.Power_Supply_for_domestic_have_to_calculate_the_average_from_tw);
                            PowerSupplyForAgricultureUseSummerAprilSeptperdayinH = PowerSupplyForAgricultureUseSummerAprilSeptperdayinH + Convert.ToDouble(item.Power_Supply_For_Agriculture_Use_Summer_April_Sept_per_day_in_H);
                            PowerSupplyForAgricultureUseWinterOctMarchperdayinHo = PowerSupplyForAgricultureUseWinterOctMarchperdayinHo + Convert.ToDouble(item.Power_Supply_For_Agriculture_Use_Winter_Oct_March_per_day_in_Ho);

                            PowerSupplyforagriculturehavetocalculatetheaveragefrom = PowerSupplyforagriculturehavetocalculatetheaveragefrom + Convert.ToDouble(item.Power_Supply_for_agriculture_have_to_calculate_the_average_from);
                            PowerSupplyForCommercialUse_WinterOctMarchperdayinHou = PowerSupplyForCommercialUse_WinterOctMarchperdayinHou + Convert.ToDouble(item.Power_Supply_For_Commercial_Use_Winter_Oct_March_per_day_in_Hou);
                            PowerSupplyforcommercialhavetocalculatetheaveragefrom = PowerSupplyforcommercialhavetocalculatetheaveragefrom + Convert.ToDouble(item.Power_Supply_for_commercial_have_to_calculate_the_average_from_);
                            PowerSupplyForAllUsersSummerAprilSeptperdayinHours = PowerSupplyForAllUsersSummerAprilSeptperdayinHours + Convert.ToDouble(item.Power_Supply_For_All_Users_Summer_April_Sept_per_day_in_Hours);
                            PowerSupplyForAllUsersWinterOctMarchperdayinHours = PowerSupplyForAllUsersWinterOctMarchperdayinHours + Convert.ToDouble(item.Power_Supply_For_All_Users_Winter_Oct_March_per_day_in_Hours);
                            PowerSupplyforallusershavetocalculatetheaveragefromt = PowerSupplyforallusershavetocalculatetheaveragefromt + Convert.ToDouble(item.Power_Supply_for_all_users_have_to_calculate_the_average_from_t);

                            AreaunderNonAgriculturalUsesinHectares = AreaunderNonAgriculturalUsesinHectares + Convert.ToDouble(item.Area_under_Non_Agricultural_Uses_in_Hectares);
                            NetAreaSowninHectares = NetAreaSowninHectares + Convert.ToDouble(item.Net_Area_Sown_in_Hectares);
                            CanalsAreainHectares = CanalsAreainHectares + Convert.ToDouble(item.Canals_Area_in_Hectares);
                            WellsTubeWellsAreainHectares = WellsTubeWellsAreainHectares + Convert.ToDouble(item.Wells_Tube_Wells_Area_in_Hectares);
                            TanksLakesAreainHectares = TanksLakesAreainHectares + Convert.ToDouble(item.Tanks_Lakes_Area_in_Hectares);
                            WaterfallAreainHectares = WaterfallAreainHectares + Convert.ToDouble(item.Waterfall_Area_in_Hectares);

                            SpringsDepth = SpringsDepth + Convert.ToDouble(item.Springs_Depth);
                            CanalsDepth = CanalsDepth + Convert.ToDouble(item.Canals_Depth);
                            TanksDepth = TanksDepth + Convert.ToDouble(item.Tanks_Depth);
                            RiverDepth = RiverDepth + Convert.ToDouble(item.River_Depth);
                            SpringsTotalGeographicalAreainHectares = SpringsTotalGeographicalAreainHectares + Convert.ToDouble(item.Springs_Total_Geographical_Area_in_Hectares);
                            CanalsRiverCanalFunctioningAllroundtheyear = CanalsRiverCanalFunctioningAllroundtheyear + Convert.ToDouble(item.Canals_River_Canal_Functioning_All_round_the_year);
                            RiverCanalsAreainHectares = RiverCanalsAreainHectares + Convert.ToDouble(item.River_Canals_Area_in_Hectares);
                            HarvestingCanalsAreainHectares = HarvestingCanalsAreainHectares + Convert.ToDouble(item.Harvesting_Canals_Area_in_Hectares);
                            HarvestingTanksLakesAreainHectares = HarvestingTanksLakesAreainHectares + Convert.ToDouble(item.Harvesting_Tanks_Lakes_Area_in_Hectares);

                            ReservoirName = ReservoirName + Convert.ToDouble(item.Reservoir_Name);
                            CurrentReservoirLevel = CurrentReservoirLevel + Convert.ToDouble(item.Current_Reservoir_Level);
                            LiveCapacityatFRL = LiveCapacityatFRL + Convert.ToDouble(item.Live_Capacity_at_FRL);
                            LiveCapacityatFRL_ = LiveCapacityatFRL_ + Convert.ToDouble(item.Live_Capacity_at_FRL_);

                            CurrentLiveStorage = CurrentLiveStorage + Convert.ToDouble(item.Current_Live_Storage);
                            CurrentLiveStorage_ = CurrentLiveStorage_ + Convert.ToDouble(item.Current_Live_Storage_);
                            _AvgOfSurfaceWaterRainfall = _AvgOfSurfaceWaterRainfall + Convert.ToDouble(item.AvgOfSurfaceWaterRainfall);

                            NoOfCheckDams = NoOfCheckDams + Convert.ToDouble(item.No_Of_CheckDams);
                            CheckDamsCapacity = CheckDamsCapacity + Convert.ToDouble(item.CheckDams_Capacity);
                            checkdamsDepth = checkdamsDepth + Convert.ToDouble(item.checkdams_depth);
                            GwrRainfallArea = GwrRainfallArea + Convert.ToDouble(item.Gwr_Rainfall_Area);
                            GwrRainfallRainfall = GwrRainfallRainfall + Convert.ToDouble(item.Gwr_Rainfall_Rainfall);
                            NetAreaUnderCheckDamsandNalaBunds = NetAreaUnderCheckDamsandNalaBunds + Convert.ToDouble(item.NetArea_Under_CheckDams_and_NalaBunds);
                            GwrITmaximumSubmergenceArea = GwrITmaximumSubmergenceArea + Convert.ToDouble(item.Gwr_IT_maximum_SubmergenceArea);
                            GwrITReachargeRate = GwrITReachargeRate + Convert.ToDouble(item.Gwr_IT_Reacharge_Rate);
                            GwrITDaysOfSubmergence = GwrITDaysOfSubmergence + Convert.ToDouble(item.Gwr_IT_DaysOfSubmergence);
                            GwrCDmaximumSubmergenceArea = GwrCDmaximumSubmergenceArea + Convert.ToDouble(item.Gwr_CD_maximumSubmergence_Area);
                            GwrCDAverageDepthOfWater = GwrCDAverageDepthOfWater + Convert.ToDouble(item.Gwr_CD_AverageDepthOf_Water);

                            GwrCDNoOfFillings = GwrCDNoOfFillings + Convert.ToDouble(item.Gwr_CD_NoOfFillings);
                            GwrSTCLengthOftheCanals = GwrSTCLengthOftheCanals + Convert.ToDouble(item.Gwr_STC_LengthOfthe_Canals);
                            GwrSTCSeepageFactor = GwrSTCSeepageFactor + Convert.ToDouble(item.Gwr_STC_Seepage_Factor);
                            GwrSTCFlowingDays = GwrSTCFlowingDays + Convert.ToDouble(item.Gwr_STC_Flowing_Days);
                            GwrSTCAvgWettedPerimeter = GwrSTCAvgWettedPerimeter + Convert.ToDouble(item.Gwr_STC_Avg_Wetted_Perimeter);
                            GwrSWIAreaIrrigated = GwrSWIAreaIrrigated + Convert.ToDouble(item.Gwr_SWI_AreaIrrigated);
                            GwrSWIDesignedDischargeAtOutlet = GwrSWIDesignedDischargeAtOutlet + Convert.ToDouble(item.Gwr_SWI_DesignedDischarge_At_Outlet);
                            GwrSWISeepageFactor = GwrSWISeepageFactor + Convert.ToDouble(item.Gwr_SWI_Seepage_Factor);

                            GwrSWIWaterReleasedAtOutLet = GwrSWIWaterReleasedAtOutLet + Convert.ToDouble(item.Gwr_SWI_WaterReleased_At_OutLet);
                            GwrGwICommndAreaIrrigation = GwrGwICommndAreaIrrigation + Convert.ToDouble(item.Gwr_GwI_CommndArea_Irrigation);
                            GwrGwICommandAreaReturnFlow = GwrGwICommandAreaReturnFlow + Convert.ToDouble(item.Gwr_GwI_CommandArea_ReturnFlow);
                            GwrGwINonCommandAreaIrrigation = GwrGwINonCommandAreaIrrigation + Convert.ToDouble(item.Gwr_GwI_NonCommand_Area_Irrigation);
                            GwrGwINonCommandAreaReturnFlow = GwrGwINonCommandAreaReturnFlow + Convert.ToDouble(item.Gwr_GwI_NonCommand_Area_ReturnFlow);
                            DraftIrrigationDailyPumpingHours = DraftIrrigationDailyPumpingHours + Convert.ToDouble(item.Draft_Irrigation_DailyPumping_Hours);
                            DraftIrrigationTotalNoOfPumpingDays = DraftIrrigationTotalNoOfPumpingDays + Convert.ToDouble(item.Draft_Irrigation_Total_NoOf_Pumping_Days);
                            DraftIrrigationAvgPumpingRate = DraftIrrigationAvgPumpingRate + Convert.ToDouble(item.Draft_Irrigation_Avg_Pumping_Rate);

                            DraftDrinkTotWaterRequirementForPeople = DraftDrinkTotWaterRequirementForPeople + Convert.ToDouble(item.Draft_Drink_Tot_Water_Requirement_For_People);
                            DraftDrinkTotWaterRequirementForCowsBufalos = DraftDrinkTotWaterRequirementForCowsBufalos + Convert.ToDouble(item.Draft_Drink_Tot_Water_Requirement_For_CowsBufalos);
                            DraftDrinkTotWaterRequirementForBullocks = DraftDrinkTotWaterRequirementForBullocks + Convert.ToDouble(item.Draft_Drink_Tot_Water_Requirement_For_Bullocks);

                            DraftDrinkTotWaterRequirementForGoatsSheeps = DraftDrinkTotWaterRequirementForGoatsSheeps + Convert.ToDouble(item.Draft_Drink_Tot_Water_Requirement_For_GoatsSheeps);
                            DraftIndustryGWInTake = DraftIndustryGWInTake + Convert.ToDouble(item.Draft_Industry_GW_In_Take);
                            DraftIndustryTotNoofProductionDays = DraftIndustryTotNoofProductionDays + Convert.ToDouble(item.Draft_Industry_Tot_Noof_Production_Days);
                            springsdischarge = springsdischarge + Convert.ToDouble(item.springs_Discharge);
                            checkdamsdischarge = checkdamsdischarge + Convert.ToDouble(item.checkdams_Discharge);
                            canalsdischarge = canalsdischarge + Convert.ToDouble(item.canals_Discharge);
                            reservoirsdischarge = reservoirsdischarge + Convert.ToDouble(item.reservoir_Discharge);
                            lakespondstanksdischarge = lakespondstanksdischarge + Convert.ToDouble(item.lakespondstanks_Discharge);
                            riverdischarge = riverdischarge + Convert.ToDouble(item.river_Discharge);
                            surface_water_paddy = surface_water_paddy + Convert.ToDouble(item.surface_water_paddy);
                            surface_water_nonpaddy = surface_water_nonpaddy + Convert.ToDouble(item.surface_water_nonpaddy);
                            Industry_Prod_days = Industry_Prod_days + Convert.ToDouble(item.Industry_Prod_days);
                            //aquifer = item.aquifer;
                        }
                        objcensusdata.Total_Geographical_Area_in_Hectares = Convert.ToString(Math.Round(totgeographicalarea, 2));
                        objcensusdata.Total_Households = Convert.ToString(Math.Round(tothouseholds, 2));
                        objcensusdata.Total_Population_of_Village = Convert.ToString(Math.Round(totpopulationarea, 2));
                        objcensusdata.Tube_Wells_Borehole_Functioning_All_round_the_year = Convert.ToString(Math.Round(TubeWellsBoreholeFunctioningAllroundtheyear, 2));
                        objcensusdata.Spring_Functioning_All_round_the_year = Convert.ToString(Math.Round(SpringFunctioningAllroundtheyear, 2));
                        objcensusdata.River_Canal_Functioning_All_round_the_year = Convert.ToString(Math.Round(RiverCanalFunctioningAllroundtheyear, 2));
                        objcensusdata.Tank_Pond_Lake_Functioning_All_round_the_year = Convert.ToString(Math.Round(TankPondLakeFunctioningAllroundtheyear, 2));
                        objcensusdata.Power_Supply_For_Domestic_Use_Summer_April_Sept_per_day_in_Hour = Convert.ToString(Math.Round(PowerSupplyForDomesticUseSummerAprilSeptperdayinHour, 2));
                        objcensusdata.Power_Supply_For_Domestic_Use_Winter_Oct_March_per_day_in_Hours = Convert.ToString(Math.Round(PowerSupplyForDomesticUseWinterOctMarchperdayinHours, 2));
                        objcensusdata.Power_Supply_for_domestic_have_to_calculate_the_average_from_tw = Convert.ToString(Math.Round(PowerSupplyfordomestichavetocalculatetheaveragefromtw, 2));
                        objcensusdata.Power_Supply_For_Agriculture_Use_Summer_April_Sept_per_day_in_H = Convert.ToString(Math.Round(PowerSupplyForAgricultureUseSummerAprilSeptperdayinH, 2));
                        objcensusdata.Power_Supply_For_Agriculture_Use_Winter_Oct_March_per_day_in_Ho = Convert.ToString(Math.Round(PowerSupplyForAgricultureUseWinterOctMarchperdayinHo, 2));

                        objcensusdata.Power_Supply_for_agriculture_have_to_calculate_the_average_from = Convert.ToString(Math.Round(PowerSupplyforagriculturehavetocalculatetheaveragefrom, 2));
                        objcensusdata.Power_Supply_For_Commercial_Use_Winter_Oct_March_per_day_in_Hou = Convert.ToString(Math.Round(PowerSupplyForCommercialUse_WinterOctMarchperdayinHou, 2));
                        objcensusdata.Power_Supply_for_commercial_have_to_calculate_the_average_from_ = Convert.ToString(Math.Round(PowerSupplyforcommercialhavetocalculatetheaveragefrom, 2));
                        objcensusdata.Power_Supply_For_All_Users_Summer_April_Sept_per_day_in_Hours = Convert.ToString(Math.Round(PowerSupplyForAllUsersSummerAprilSeptperdayinHours, 2));
                        objcensusdata.Power_Supply_For_All_Users_Winter_Oct_March_per_day_in_Hours = Convert.ToString(Math.Round(PowerSupplyForAllUsersWinterOctMarchperdayinHours, 2));
                        objcensusdata.Power_Supply_for_all_users_have_to_calculate_the_average_from_t = Convert.ToString(Math.Round(PowerSupplyforallusershavetocalculatetheaveragefromt, 2));

                        objcensusdata.Area_under_Non_Agricultural_Uses_in_Hectares = Convert.ToString(Math.Round(AreaunderNonAgriculturalUsesinHectares, 2));
                        objcensusdata.Net_Area_Sown_in_Hectares = Convert.ToString(Math.Round(NetAreaSowninHectares, 2));
                        objcensusdata.Canals_Area_in_Hectares = Convert.ToString(Math.Round(CanalsAreainHectares, 2));
                        objcensusdata.Wells_Tube_Wells_Area_in_Hectares = Convert.ToString(Math.Round(WellsTubeWellsAreainHectares, 2));
                        objcensusdata.Tanks_Lakes_Area_in_Hectares = Convert.ToString(Math.Round(TanksLakesAreainHectares, 2));
                        objcensusdata.Waterfall_Area_in_Hectares = Convert.ToString(Math.Round(WaterfallAreainHectares, 2));
                        objcensusdata.Springs_Depth = Convert.ToString(Math.Round(SpringsDepth, 2));
                        objcensusdata.Canals_Depth = Convert.ToString(Math.Round(CanalsDepth, 2));
                        objcensusdata.Tanks_Depth = Convert.ToString(Math.Round(TanksDepth, 2));
                        objcensusdata.River_Depth = Convert.ToString(Math.Round(RiverDepth, 2));
                        objcensusdata.checkdams_depth = Convert.ToString(Math.Round(checkdamsDepth, 2));
                        objcensusdata.Springs_Total_Geographical_Area_in_Hectares = Convert.ToString(Math.Round(SpringsTotalGeographicalAreainHectares, 2));
                        objcensusdata.Canals_River_Canal_Functioning_All_round_the_year = Convert.ToString(Math.Round(CanalsRiverCanalFunctioningAllroundtheyear, 2));
                        objcensusdata.River_Canals_Area_in_Hectares = Convert.ToString(Math.Round(RiverCanalsAreainHectares, 2));
                        objcensusdata.Harvesting_Canals_Area_in_Hectares = Convert.ToString(Math.Round(HarvestingCanalsAreainHectares, 2));
                        objcensusdata.Harvesting_Tanks_Lakes_Area_in_Hectares = Convert.ToString(Math.Round(HarvestingTanksLakesAreainHectares, 2));

                        objcensusdata.Reservoir_Name = Convert.ToString(Math.Round(ReservoirName, 2));
                        objcensusdata.Current_Reservoir_Level = Convert.ToDouble(Math.Round(CurrentReservoirLevel, 2));
                        objcensusdata.Live_Capacity_at_FRL = Convert.ToDouble(Math.Round(LiveCapacityatFRL, 2));
                        objcensusdata.Live_Capacity_at_FRL_ = Convert.ToDouble(Math.Round(LiveCapacityatFRL_, 2));
                        objcensusdata.Current_Live_Storage = Convert.ToDouble(Math.Round(CurrentLiveStorage, 2));
                        objcensusdata.Current_Live_Storage_ = Convert.ToDouble(Math.Round(CurrentLiveStorage_, 2));
                        objcensusdata.AvgOfSurfaceWaterRainfall = Convert.ToDouble(Math.Round(_AvgOfSurfaceWaterRainfall, 2));

                        objcensusdata.No_Of_CheckDams = Convert.ToDouble(Math.Round(NoOfCheckDams, 2));
                        objcensusdata.CheckDams_Capacity = Convert.ToDouble(Math.Round(CheckDamsCapacity, 2));
                        objcensusdata.Gwr_Rainfall_Area = Convert.ToDouble(Math.Round(GwrRainfallArea, 2));
                        objcensusdata.Gwr_Rainfall_Rainfall = Convert.ToDouble(Math.Round(GwrRainfallRainfall, 2));
                        objcensusdata.NetArea_Under_CheckDams_and_NalaBunds = Convert.ToDouble(Math.Round(NetAreaUnderCheckDamsandNalaBunds, 2));
                        objcensusdata.Gwr_IT_maximum_SubmergenceArea = Convert.ToDouble(Math.Round(GwrITmaximumSubmergenceArea, 2));
                        objcensusdata.Gwr_IT_Reacharge_Rate = Convert.ToDouble(Math.Round(GwrITReachargeRate, 2));

                        objcensusdata.Gwr_IT_DaysOfSubmergence = Convert.ToDouble(Math.Round(GwrITDaysOfSubmergence, 2));
                        objcensusdata.Gwr_CD_maximumSubmergence_Area = Convert.ToDouble(Math.Round(GwrCDmaximumSubmergenceArea, 2));
                        objcensusdata.Gwr_CD_AverageDepthOf_Water = Convert.ToDouble(Math.Round(GwrCDAverageDepthOfWater, 2));
                        objcensusdata.Gwr_CD_NoOfFillings = Convert.ToDouble(Math.Round(GwrCDNoOfFillings, 2));
                        objcensusdata.Gwr_STC_LengthOfthe_Canals = Convert.ToDouble(Math.Round(GwrSTCLengthOftheCanals, 2));
                        objcensusdata.Gwr_STC_Seepage_Factor = Convert.ToDouble(Math.Round(GwrSTCSeepageFactor, 2));
                        objcensusdata.Gwr_STC_Flowing_Days = Convert.ToDouble(Math.Round(GwrSTCFlowingDays, 2));

                        objcensusdata.Gwr_STC_Avg_Wetted_Perimeter = Convert.ToDouble(Math.Round(GwrSTCAvgWettedPerimeter, 2));
                        objcensusdata.Gwr_SWI_AreaIrrigated = Convert.ToDouble(Math.Round(GwrSWIAreaIrrigated, 2));
                        objcensusdata.Gwr_SWI_DesignedDischarge_At_Outlet = Convert.ToDouble(Math.Round(GwrSWIDesignedDischargeAtOutlet, 2));
                        objcensusdata.Gwr_SWI_Seepage_Factor = Convert.ToDouble(Math.Round(GwrSWISeepageFactor, 2));
                        objcensusdata.Gwr_SWI_WaterReleased_At_OutLet = Convert.ToDouble(Math.Round(GwrSWIWaterReleasedAtOutLet, 2));
                        objcensusdata.Gwr_GwI_CommndArea_Irrigation = Convert.ToDouble(Math.Round(GwrGwICommndAreaIrrigation, 2));
                        objcensusdata.Gwr_GwI_CommandArea_ReturnFlow = Convert.ToDouble(Math.Round(GwrGwICommandAreaReturnFlow, 2));

                        objcensusdata.Gwr_GwI_NonCommand_Area_Irrigation = Convert.ToDouble(Math.Round(GwrGwINonCommandAreaIrrigation, 2));
                        objcensusdata.Gwr_GwI_NonCommand_Area_ReturnFlow = Convert.ToDouble(Math.Round(GwrGwINonCommandAreaReturnFlow, 2));
                        objcensusdata.Draft_Irrigation_DailyPumping_Hours = Convert.ToDouble(Math.Round(DraftIrrigationDailyPumpingHours, 2));
                        objcensusdata.Draft_Irrigation_Total_NoOf_Pumping_Days = Convert.ToDouble(Math.Round(DraftIrrigationTotalNoOfPumpingDays, 2));
                        objcensusdata.Draft_Irrigation_Avg_Pumping_Rate = Convert.ToDouble(Math.Round(DraftIrrigationAvgPumpingRate, 2));
                        objcensusdata.Draft_Drink_Tot_Water_Requirement_For_People = Convert.ToDouble(Math.Round(DraftDrinkTotWaterRequirementForPeople, 2));
                        objcensusdata.Draft_Drink_Tot_Water_Requirement_For_CowsBufalos = Convert.ToDouble(Math.Round(DraftDrinkTotWaterRequirementForCowsBufalos, 2));


                        objcensusdata.Draft_Drink_Tot_Water_Requirement_For_Bullocks = Convert.ToDouble(Math.Round(DraftDrinkTotWaterRequirementForBullocks, 2));
                        objcensusdata.Draft_Drink_Tot_Water_Requirement_For_GoatsSheeps = Convert.ToDouble(Math.Round(DraftDrinkTotWaterRequirementForGoatsSheeps, 2));
                        objcensusdata.Draft_Industry_GW_In_Take = Convert.ToDouble(Math.Round(DraftIndustryGWInTake, 2));
                        objcensusdata.Draft_Industry_Tot_Noof_Production_Days = Convert.ToDouble(Math.Round(DraftIndustryTotNoofProductionDays, 2));
                        //objcensusdata.aquifer = aquifer;
                        objcensusdata.springs_Discharge = Convert.ToDouble(Math.Round(springsdischarge, 2));
                        objcensusdata.checkdams_Discharge = Convert.ToDouble(Math.Round(checkdamsdischarge, 2));
                        objcensusdata.canals_Discharge = Convert.ToDouble(Math.Round(canalsdischarge, 2));
                        objcensusdata.reservoir_Discharge = Convert.ToDouble(Math.Round(reservoirsdischarge, 2));
                        objcensusdata.lakespondstanks_Discharge = Convert.ToDouble(Math.Round(lakespondstanksdischarge, 2));
                        objcensusdata.river_Discharge = Convert.ToDouble(Math.Round(riverdischarge, 2));

                        objcensusdata.surface_water_paddy = Convert.ToDouble(Math.Round(surface_water_paddy, 2));
                        objcensusdata.surface_water_nonpaddy = Convert.ToDouble(Math.Round(surface_water_nonpaddy, 2));
                        objcensusdata.Industry_Prod_days = Convert.ToDouble(Math.Round(Industry_Prod_days, 2));
                        censusdata.Add(objcensusdata);
                        ViewBag.Data = censusdata;
                    }
                    return View("Ground_Water_Recharge");
                }
                else
                {
                    return RedirectToAction("MisLogin", "WSP");
                }
            }
            catch (Exception ex)
            {
                //ViewBag.Error = ex;
                if (ex.Message == "Object reference not set to an instance of an object.")
                {
                    return RedirectToAction("MisLogin", "Home");
                }
                if (ex.Message == "Unable to create a null constant value of type 'System.Object'. Only entity types, enumeration types or primitive types are supported in this context.")
                {
                    return RedirectToAction("MisLogin", "Home");
                }
                if (ex.Message == "The underlying provider failed on Open.")
                {
                    return RedirectToAction("MisLogin", "Home");

                }
                //if (ex.Message == "'object' does not contain a definition for 'Count'")
                //{
                //    ViewBag.data = null;

                //}
                return View();
            }
        }
        [HttpPost]
        public ActionResult Ground_Water_Recharge(string AreaUnderLinedBy)
        {
            string statename = string.Empty;
            string districtname = string.Empty;
            string blockname = string.Empty;
            string Gpname = string.Empty;
            string vname = string.Empty;
            string Userid = string.Empty;

            try
            {
                if (Session["UserId"].ToString() != "" && Session["UserId"].ToString() != null)
                {
                    statename = Session["gstate"].ToString();
                    districtname = Session["gdist"].ToString();
                    blockname = Session["gblock"].ToString();
                    Gpname = Session["ggram"].ToString();
                    //vname = Session["Vname"].ToString();


                    if (AreaUnderLinedBy != null && AreaUnderLinedBy != "")
                    {
                        ViewBag.AreaUnlData = ABE.objTblAreaUnderLine_By.Where(m => m.AreaunderlinedBy_Name == AreaUnderLinedBy).Distinct().ToList();
                        if (ViewBag.AreaUnlData.Count != 0)
                        {
                            var itm = ViewBag.AreaUnlData;
                            return Json(itm, JsonRequestBehavior.AllowGet);
                        }
                        else
                        {
                            return Json("ok");
                        }
                    }
                    else
                    {
                        return Json("ok");
                    }
                }
                else
                {
                    return View("Ground_Water_Recharge");
                }

            }
            catch (Exception ex)
            {
                return View("Ground_Water_Recharge");
            }
            // return View("Ground_Water_Recharge");
        }

        [HttpPost]
        public ActionResult Ground_Water_Recharge1(string GWR)
        {
            //changing
            string statename = string.Empty;
            string districtname = string.Empty;
            string blockname = string.Empty;
            string Gpname = string.Empty;
            string vname = string.Empty;
            string admin = string.Empty;
            abhystates_completecensusdata_Insert1 objCensusdata = new abhystates_completecensusdata_Insert1();

            try
            {
                if (Session["UserId"].ToString() != "" && Session["UserId"].ToString() != null)
                {
                    statename = Session["gstate"].ToString();
                    districtname = Session["gdist"].ToString();
                    blockname = Session["gblock"].ToString();
                    Gpname = Session["ggram"].ToString();
                    vname = Session["gvill"].ToString();
                    admin = Session["Officer"].ToString();
                    if (GWR != null && GWR != "")
                    {
                        JavaScriptSerializer js = new JavaScriptSerializer();
                        var result = js.Deserialize<abhystates_completecensusdata_Insert1>(GWR);

                        objCensusdata.Springs_Total_Geographical_Area_in_Hectares = result.Springs_Total_Geographical_Area_in_Hectares;
                        objCensusdata.AvgOfSurfaceWaterRainfall = result.AvgOfSurfaceWaterRainfall;

                        objCensusdata.Spring_Functioning_All_round_the_year = result.Spring_Functioning_All_round_the_year;
                        objCensusdata.Waterfall_Area_in_Hectares = result.Waterfall_Area_in_Hectares;
                        objCensusdata.Springs_Depth = result.Springs_Depth;
                        objCensusdata.springs_Discharge = result.springs_Discharge;

                        objCensusdata.No_Of_CheckDams = result.No_Of_CheckDams;
                        objCensusdata.CheckDams_Capacity = result.CheckDams_Capacity;
                        objCensusdata.checkdams_depth = result.checkdams_depth;
                        objCensusdata.checkdams_Discharge = result.checkdams_Discharge;

                        objCensusdata.Canals_River_Canal_Functioning_All_round_the_year = result.Canals_River_Canal_Functioning_All_round_the_year;
                        objCensusdata.Canals_Area_in_Hectares = result.Canals_Area_in_Hectares;
                        objCensusdata.Canals_Depth = result.Canals_Depth;
                        objCensusdata.canals_Discharge = result.canals_Discharge;

                        objCensusdata.Reservoir_Name = result.Reservoir_Name;
                        objCensusdata.Current_Live_Storage = result.Current_Live_Storage;
                        objCensusdata.reservoir_Discharge = result.reservoir_Discharge;

                        objCensusdata.Tank_Pond_Lake_Functioning_All_round_the_year = result.Tank_Pond_Lake_Functioning_All_round_the_year;
                        objCensusdata.Tanks_Lakes_Area_in_Hectares = result.Tanks_Lakes_Area_in_Hectares;
                        objCensusdata.Tanks_Depth = result.Tanks_Depth;
                        objCensusdata.lakespondstanks_Discharge = result.lakespondstanks_Discharge;

                        objCensusdata.River_Canal_Functioning_All_round_the_year = result.River_Canal_Functioning_All_round_the_year;
                        objCensusdata.River_Canals_Area_in_Hectares = result.River_Canals_Area_in_Hectares;
                        objCensusdata.River_Depth = result.River_Depth;
                        objCensusdata.river_Discharge = result.river_Discharge;

                        objCensusdata.Gwr_Rainfall_Area = result.Gwr_Rainfall_Area;
                        objCensusdata.Gwr_Rainfall_Rainfall = result.Gwr_Rainfall_Rainfall;

                        objCensusdata.Wells_Tube_Wells_Area_in_Hectares = result.Wells_Tube_Wells_Area_in_Hectares;
                        objCensusdata.Harvesting_Canals_Area_in_Hectares = result.Harvesting_Canals_Area_in_Hectares;
                        objCensusdata.Harvesting_Tanks_Lakes_Area_in_Hectares = result.Harvesting_Tanks_Lakes_Area_in_Hectares;
                        objCensusdata.NetArea_Under_CheckDams_and_NalaBunds = result.NetArea_Under_CheckDams_and_NalaBunds;

                        objCensusdata.Gwr_IT_maximum_SubmergenceArea = result.Gwr_IT_maximum_SubmergenceArea;
                        objCensusdata.Gwr_IT_Reacharge_Rate = result.Gwr_IT_Reacharge_Rate;
                        objCensusdata.Gwr_IT_DaysOfSubmergence = result.Gwr_IT_DaysOfSubmergence;

                        objCensusdata.Gwr_CD_maximumSubmergence_Area = result.Gwr_CD_maximumSubmergence_Area;
                        objCensusdata.Gwr_CD_AverageDepthOf_Water = result.Gwr_CD_AverageDepthOf_Water;
                        objCensusdata.Gwr_CD_NoOfFillings = result.Gwr_CD_NoOfFillings;

                        objCensusdata.Gwr_STC_LengthOfthe_Canals = result.Gwr_STC_LengthOfthe_Canals;
                        objCensusdata.Gwr_STC_Seepage_Factor = result.Gwr_STC_Seepage_Factor;
                        objCensusdata.Gwr_STC_Flowing_Days = result.Gwr_STC_Flowing_Days;
                        objCensusdata.Gwr_STC_Avg_Wetted_Perimeter = result.Gwr_STC_Avg_Wetted_Perimeter;

                        objCensusdata.Gwr_SWI_AreaIrrigated = result.Gwr_SWI_AreaIrrigated;
                        objCensusdata.Gwr_SWI_DesignedDischarge_At_Outlet = result.Gwr_SWI_DesignedDischarge_At_Outlet;
                        objCensusdata.Gwr_SWI_Seepage_Factor = result.Gwr_SWI_Seepage_Factor;
                        objCensusdata.Gwr_SWI_WaterReleased_At_OutLet = result.Gwr_SWI_WaterReleased_At_OutLet;

                        objCensusdata.Gwr_GwI_CommndArea_Irrigation = result.Gwr_GwI_CommndArea_Irrigation;
                        objCensusdata.Gwr_GwI_CommandArea_ReturnFlow = result.Gwr_GwI_CommandArea_ReturnFlow;
                        objCensusdata.Gwr_GwI_NonCommand_Area_Irrigation = result.Gwr_GwI_NonCommand_Area_Irrigation;
                        objCensusdata.Gwr_GwI_NonCommand_Area_ReturnFlow = result.Gwr_GwI_NonCommand_Area_ReturnFlow;

                        objCensusdata.Draft_Irrigation_DailyPumping_Hours = result.Draft_Irrigation_DailyPumping_Hours;
                        objCensusdata.Tube_Wells_Borehole_Functioning_All_round_the_year = result.Tube_Wells_Borehole_Functioning_All_round_the_year;
                        objCensusdata.Draft_Irrigation_Total_NoOf_Pumping_Days = result.Draft_Irrigation_Total_NoOf_Pumping_Days;
                        objCensusdata.Draft_Irrigation_Avg_Pumping_Rate = result.Draft_Irrigation_Avg_Pumping_Rate;

                        objCensusdata.Draft_Drink_Tot_Water_Requirement_For_People = result.Draft_Drink_Tot_Water_Requirement_For_People;
                        objCensusdata.Draft_Drink_Tot_Water_Requirement_For_CowsBufalos = result.Draft_Drink_Tot_Water_Requirement_For_CowsBufalos;
                        objCensusdata.Draft_Drink_Tot_Water_Requirement_For_Bullocks = result.Draft_Drink_Tot_Water_Requirement_For_Bullocks;
                        objCensusdata.Draft_Drink_Tot_Water_Requirement_For_GoatsSheeps = result.Draft_Drink_Tot_Water_Requirement_For_GoatsSheeps;

                        objCensusdata.Draft_Industry_GW_In_Take = result.Draft_Industry_GW_In_Take;
                        objCensusdata.Draft_Industry_Tot_Noof_Production_Days = result.Draft_Industry_Tot_Noof_Production_Days;


                        objCensusdata.Tbl_Condition = "1";
                        objCensusdata.Inserted_Date = DateTime.Now.ToString("MM/dd/yyyy h:mm:ss tt");
                        if (statename == "" || statename == "null")
                        {
                            objCensusdata.state_name = "0";
                        }
                        else
                        {
                            objCensusdata.state_name = statename;
                        }
                        if (districtname == "" || districtname == "null")
                        {
                            objCensusdata.district_name = "0";
                        }
                        else
                        {
                            objCensusdata.district_name = districtname;
                        }
                        if (blockname == "" || blockname == "null")
                        {
                            objCensusdata.sub_district_name = "0";
                        }
                        else
                        {
                            objCensusdata.sub_district_name = blockname;
                        }
                        if (Gpname == "" || Gpname == "null")
                        {
                            objCensusdata.gram_panchayat_name = "0";
                        }
                        else
                        {
                            objCensusdata.gram_panchayat_name = Gpname;
                        }
                        if (vname == "" || vname == "null")
                        {
                            objCensusdata.Village_Name = "0";
                        }
                        else
                        {
                            objCensusdata.Village_Name = vname;
                        }
                        if (Session["ACF"].ToString() != null && Session["ACF"].ToString() != "0")
                        {
                            objCensusdata.Agricultural_Commodities_First = Session["ACF"].ToString();
                        }
                        else
                        {
                            objCensusdata.Agricultural_Commodities_First = "0";
                        }
                        if (Session["ACS"].ToString() != null && Session["ACS"].ToString() != "0")
                        {
                            objCensusdata.Agricultural_Commodities_Second = Session["ACS"].ToString();
                        }
                        else
                        {
                            objCensusdata.Agricultural_Commodities_Second = "0";
                        }
                        if (Session["MCF"].ToString() != null && Session["MCF"].ToString() != "0")
                        {
                            objCensusdata.Manufacturers_Commodities_First = Session["MCF"].ToString();
                        }
                        else
                        {
                            objCensusdata.Manufacturers_Commodities_First = "0";
                        }
                        if (Session["MCS"].ToString() != null && Session["MCS"].ToString() != "0")
                        {
                            objCensusdata.Manufacturers_Commodities_Second = Session["MCS"].ToString();
                        }
                        else
                        {
                            objCensusdata.Manufacturers_Commodities_Second = "0";
                        }



                        if (objCensusdata.Agricultural_Commodities_Third == null)
                        {
                            objCensusdata.Agricultural_Commodities_Third = "0";
                        }
                        if (objCensusdata.Area_under_Non_Agricultural_Uses_in_Hectares == null)
                        {
                            objCensusdata.Area_under_Non_Agricultural_Uses_in_Hectares = "0";
                        }
                        if (objCensusdata.Current_Live_Storage == null)
                        {
                            objCensusdata.Current_Live_Storage = "0";
                        }
                        if (objCensusdata.Current_Live_Storage_ == null)
                        {
                            objCensusdata.Current_Live_Storage_ = "0";
                        }
                        if (objCensusdata.Current_Reservoir_Level == null)
                        {
                            objCensusdata.Current_Reservoir_Level = "0";
                        }
                        //if (objCensusdata.Inserted_Date == null)
                        //{
                        //    objCensusdata.Inserted_Date = "";
                        //}
                        if (objCensusdata.Live_Capacity_at_FRL == null)
                        {
                            objCensusdata.Live_Capacity_at_FRL = "0";
                        }
                        if (objCensusdata.Live_Capacity_at_FRL_ == null)
                        {
                            objCensusdata.Live_Capacity_at_FRL_ = "0";
                        }

                        if (objCensusdata.Manufacturers_Commodities_Third == null)
                        {
                            objCensusdata.Manufacturers_Commodities_Third = "0";
                        }
                        if (objCensusdata.Power_Supply_for_agriculture_have_to_calculate_the_average_from == null)
                        {
                            objCensusdata.Power_Supply_for_agriculture_have_to_calculate_the_average_from = "0";
                        }
                        if (objCensusdata.Power_Supply_For_Agriculture_Use_Summer_April_Sept_per_day_in_H == null)
                        {
                            objCensusdata.Power_Supply_For_Agriculture_Use_Summer_April_Sept_per_day_in_H = "0";
                        }
                        if (objCensusdata.Power_Supply_For_Agriculture_Use_Winter_Oct_March_per_day_in_Ho == null)
                        {
                            objCensusdata.Power_Supply_For_Agriculture_Use_Winter_Oct_March_per_day_in_Ho = "0";
                        }
                        if (objCensusdata.Power_Supply_for_all_users_have_to_calculate_the_average_from_t == null)
                        {
                            objCensusdata.Power_Supply_for_all_users_have_to_calculate_the_average_from_t = "0";
                        }
                        if (objCensusdata.Power_Supply_For_All_Users_Summer_April_Sept_per_day_in_Hours == null)
                        {
                            objCensusdata.Power_Supply_For_All_Users_Summer_April_Sept_per_day_in_Hours = "0";
                        }
                        if (objCensusdata.Power_Supply_For_All_Users_Winter_Oct_March_per_day_in_Hours == null)
                        {
                            objCensusdata.Power_Supply_For_All_Users_Winter_Oct_March_per_day_in_Hours = "0";
                        }
                        if (objCensusdata.Power_Supply_for_commercial_have_to_calculate_the_average_from_ == null)
                        {
                            objCensusdata.Power_Supply_for_commercial_have_to_calculate_the_average_from_ = "0";
                        }
                        if (objCensusdata.Power_Supply_For_Commercial_Use_Winter_Oct_March_per_day_in_Hou == null)
                        {
                            objCensusdata.Power_Supply_For_Commercial_Use_Winter_Oct_March_per_day_in_Hou = "0";
                        }
                        if (objCensusdata.Power_Supply_for_domestic_have_to_calculate_the_average_from_tw == null)
                        {
                            objCensusdata.Power_Supply_for_domestic_have_to_calculate_the_average_from_tw = "0";
                        }
                        if (objCensusdata.Power_Supply_For_Domestic_Use_Summer_April_Sept_per_day_in_Hour == null)
                        {
                            objCensusdata.Power_Supply_For_Domestic_Use_Summer_April_Sept_per_day_in_Hour = "0";
                        }
                        if (objCensusdata.Power_Supply_For_Domestic_Use_Winter_Oct_March_per_day_in_Hours == null)
                        {
                            objCensusdata.Power_Supply_For_Domestic_Use_Winter_Oct_March_per_day_in_Hours = "0";
                        }
                        if (objCensusdata.Net_Area_Sown_in_Hectares == null)
                        {
                            objCensusdata.Net_Area_Sown_in_Hectares = "0";
                        }
                        if (objCensusdata.Total_Households == null)
                        {
                            objCensusdata.Total_Households = "0";
                        }
                        if (objCensusdata.Total_Population_of_Village == null)
                        {
                            objCensusdata.Total_Population_of_Village = "0";
                        }
                        if (objCensusdata.Waterfall_Area_in_Hectares == null)
                        {
                            objCensusdata.Waterfall_Area_in_Hectares = "0";
                        }
                        if (Session["UserId"].ToString() != "" && Session["UserId"].ToString() != null)
                        {
                            objCensusdata.userid = Session["UserId"].ToString();
                        }

                        objCensusdata.approvedorreject = "0";
                        objCensusdata.canaltype = result.canaltype;
                        objCensusdata.soiltype = result.soiltype;
                        objCensusdata.springs_Discharge = result.springs_Discharge;
                        objCensusdata.checkdams_Discharge = result.checkdams_Discharge;
                        objCensusdata.canals_Discharge = result.canals_Discharge;
                        objCensusdata.reservoir_Discharge = result.reservoir_Discharge;
                        objCensusdata.lakespondstanks_Discharge = result.lakespondstanks_Discharge;
                        objCensusdata.river_Discharge = result.river_Discharge;
                        objCensusdata.surface_water_paddy = result.surface_water_paddy;
                        objCensusdata.surface_water_nonpaddy = result.surface_water_nonpaddy;
                        objCensusdata.Industry_Prod_days = result.Industry_Prod_days;

                        ABE.objabhystates_completecensusdata_Insert1.Add(objCensusdata);

                        ABE.SaveChanges();
                        return Json("OK");
                    }
                    else
                    {
                        return View("Ground_Water_Recharge");
                    }

                }
                return View();
            }

            catch (Exception ex)
            {
                if (ex.Message == "Object reference not set to an instance of an object.")
                {
                    return RedirectToAction("MisLogin", "WSP");
                }
                if (ex.Message == "Unable to create a null constant value of type 'System.Object'. Only entity types, enumeration types or primitive types are supported in this context.")
                {
                    return RedirectToAction("MisLogin", "WSP");
                }
                //return RedirectToAction("Ground_Water_Recharge", "WSP");
            }

            return View();
        }


        [HttpPost]
        public ActionResult Ground_Water_Recharge2()
        {
            //temperature code
            try
            {
                if (Session["gstate"] != null)
                {
                    var statename = "";
                    var districtname = "";
                    var blockname = "";
                    var Gpname = "";
                    var vname = "";
                    if (Session["gstate"].ToString() != null && Session["gstate"].ToString() != "")
                    {
                        statename = Session["gstate"].ToString();
                    }

                    if (Session["gdist"].ToString() != null && Session["gdist"].ToString() != "")
                    {
                        districtname = Session["gdist"].ToString();
                    }
                    if (Session["gblock"].ToString() != null && Session["gblock"].ToString() != "")
                    {
                        blockname = Session["gblock"].ToString();
                    }
                    if (Session["ggram"].ToString() != null && Session["ggram"].ToString() != "")
                    {
                        Gpname = Session["ggram"].ToString();
                    }
                    if (Session["gvill"].ToString() != null && Session["gvill"].ToString() != "")
                    {
                        vname = Session["gvill"].ToString();
                    }
                    if (Session["UserId"].ToString() != "" && Session["UserId"].ToString() != null)
                    {
                        if (statename != "" && districtname == "" && blockname == "" && Gpname == "" && vname == "")
                        {
                            var model = ABE.objabhycensus_coordinates.Where(x => x.state_name == statename).Take(1).ToList();
                            ViewBag.data = model;
                            ViewBag.geo = model[0].aquifer;
                        }
                        if (statename != "" && districtname != "" && blockname == "" && Gpname == "" && vname == "")
                        {
                            var model = ABE.objabhycensus_coordinates.Where(x => x.state_name == statename).Take(1).ToList();
                            ViewBag.data = model;


                        }
                        if (statename != "" && districtname != "" && blockname != "" && Gpname == "" && vname == "")
                        {
                            var model = ABE.objabhycensus_coordinates.Where(x => x.state_name == statename).Take(1).ToList();
                            ViewBag.data = model;


                        }
                        if (statename != "" && districtname != "" && blockname != "" && Gpname != "" && vname == "")
                        {
                            var model = ABE.objabhycensus_coordinates.Where(x => x.state_name == statename).Take(1).ToList();
                            ViewBag.data = model;


                        }
                        if (statename != "" && districtname != "" && blockname != "" && Gpname != "" && vname != "")
                        {
                            var model = ABE.objabhycensus_coordinates.Where(x => x.state_name == statename).Take(1).ToList();
                            ViewBag.data = model;

                        }


                        var data = ViewBag.data;

                        if (data.Count != 0)
                        {
                            decimal lat = 0;
                            decimal lng = 0;

                            if (statename != "" && districtname == "" && blockname == "" && Gpname == "" && vname == "")
                            {


                                lat = Convert.ToDecimal(data[0].state_lati);
                                lng = Convert.ToDecimal(data[0].state_long);
                            }
                            if (statename != "" && districtname != "" && blockname == "" && Gpname == "" && vname == "")
                            {

                                lat = Convert.ToDecimal(data[0].district_lati);
                                lng = Convert.ToDecimal(data[0].district_long);
                            }
                            if (statename != "" && districtname != "" && blockname != "" && Gpname == "" && vname == "")
                            {

                                lat = Convert.ToDecimal(data[0].sub_district_lati);
                                lng = Convert.ToDecimal(data[0].sub_district_long);
                            }
                            if (statename != "" && districtname != "" && blockname != "" && Gpname != "" && vname == "")
                            {

                                lat = Convert.ToDecimal(data[0].sub_district_lati);
                                lng = Convert.ToDecimal(data[0].sub_district_lati);
                            }
                            if (statename != "" && districtname != "" && blockname != "" && Gpname != "" && vname != "")
                            {

                                lat = Convert.ToDecimal(data[0].sub_district_lati);
                                lng = Convert.ToDecimal(data[0].sub_district_lati);
                            }


                            //var Weatherdata = new WebClient().DownloadString("https://weather.cit.api.here.com/weather/1.0/report.json?product=observation&latitude=" + lat + "&longitude=" + lng + "&oneobservation=true&app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg");
                            var Weatherdata = new WebClient().DownloadString("https://weather.cit.api.here.com/weather/1.0/report.json?product=observation&latitude=" + lat + "&longitude=" + lng + "&oneobservation=true&app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg");
                            return Json(Weatherdata, JsonRequestBehavior.AllowGet);
                        }
                        else
                        {
                            return RedirectToAction("MisLogin", "WSP");
                        }
                    }
                    else
                    {
                        return RedirectToAction("MisLogin", "WSP");
                    }

                }
                else
                {
                    return RedirectToAction("MisLogin", "WSP");

                }

            }
            catch (Exception ex)
            {
                if (ex.Message == "Object reference not set to an instance of an object.")
                {
                    return RedirectToAction("MisLogin", "WSP");
                }
                if (ex.Message == "Unable to create a null constant value of type 'System.Object'. Only entity types, enumeration types or primitive types are supported in this context.")
                {
                    return RedirectToAction("MisLogin", "WSP");
                }
            }
            return View();
        }
        [HttpPost]
        public ActionResult gwbreport(string budgettotdata)
        {
            try
            {
                var StateName1 = "";
                var DistName1 = "";
                var BlockName1 = "";
                var GramName1 = "";
                if (Session["gstate"] != null)
                {
                    StateName1 = Session["gstate"].ToString();
                }
                if (Session["gdist"] != null)
                {
                    DistName1 = Session["gdist"].ToString();
                }
                if (Session["gblock"] != null)
                {
                    BlockName1 = Session["gblock"].ToString();
                }
                if (Session["ggram"] != null)
                {
                    GramName1 = Session["ggram"].ToString();
                }
                abhy_wb_report wbdata = new abhy_wb_report();
                JavaScriptSerializer js = new JavaScriptSerializer();
                if (budgettotdata != null)
                {
                    var data = js.Deserialize<abhy_wb_report>(budgettotdata);
                    wbdata.swrainfalltotal = data.swrainfalltotal;
                    wbdata.swspringstotal = data.swspringstotal;
                    wbdata.swcheckdamstotal = data.swcheckdamstotal;
                    wbdata.swcanaltotal = data.swcanaltotal;
                    wbdata.swreservoirtotal = data.swreservoirtotal;
                    wbdata.swltptotal = data.swltptotal;
                    wbdata.swriverstotal = data.swriverstotal;
                    wbdata.gwrainfalltotal = data.gwrainfalltotal;
                    wbdata.gwharvestingtotal = data.swrainfalltotal;
                    wbdata.gwirrigationtlptotal = data.swspringstotal;
                    wbdata.gwnalabundstotal = data.swcheckdamstotal;
                    wbdata.gwseepagetotal = data.swcanaltotal;
                    wbdata.gwsurwtrirrigationtotal = data.swreservoirtotal;
                    wbdata.gwgwwtrirrigationtotal = data.swltptotal;
                    wbdata.draftirrigationtotal = data.swriverstotal;
                    wbdata.draftdomestictotal = data.gwrainfalltotal;
                    wbdata.draftindustrytotal = data.draftindustrytotal;
                    wbdata.swtotal = data.swtotal;
                    wbdata.gwtotal = data.gwtotal;
                    wbdata.drafttotal = data.drafttotal;
                    wbdata.balance = data.balance;
                    wbdata.indate = data.indate;
                    if (Session["gstate"] != null)
                    {
                        wbdata.state_name = Session["gstate"].ToString();
                    }
                    if (Session["gdist"] != null)
                    {
                        wbdata.district_name = Session["gdist"].ToString();
                    }
                    if (Session["gblock"] != null)
                    {
                        wbdata.block = Session["gblock"].ToString();
                    }
                    if (Session["ggram"] != null)
                    {
                        wbdata.gname = Session["ggram"].ToString();
                    }

                    if (Session["Email"] != null)
                    {
                        wbdata.user = Session["Email"].ToString();
                    }
                    else
                    {
                        wbdata.user = "";
                    }
                    ABE.objabhy_wb_report.Add(wbdata);
                    ABE.SaveChanges();
                    return Json("Saved", JsonRequestBehavior.AllowGet);
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

        public ActionResult ReWsp_gm()
        {
            ViewBag.RainFallFinalData = ABE.objAbhy_Total_Rainfall.ToList();
            ViewBag.Sitesdata = ABE.objabhy_groundwater_levels2.ToList();
            ViewBag.ModelDatanull1 = "1";
            if (Session["UserId"] == null)
            {

                Session["GroundWater"] = "Data";
                return RedirectToAction("MisLogin");
            }
            else
            {
                if (Session["Admin"] != null && Session["Admin"].ToString() != "")
                {
                    ViewBag.Alert = "Please Select State,District,Block,Gram Panchayat and Village";
                }
                if (Session["ggram"] != null && Session["ggram"].ToString() != "null" && Session["ggram"].ToString() != "")
                {
                    Session["Location"] = Session["ggram"].ToString();

                }
                else if (Session["gblock"] != null && Session["gblock"].ToString() != "null" && Session["gblock"].ToString() != "")
                {
                    Session["Location"] = Session["gblock"].ToString();
                }
                else
                {
                    Session["Location"] = Session["gstate"].ToString();
                }
                if (Session["gstate"] != null && Session["gstate"].ToString() != "null" && Session["gdist"] != null && Session["gdist"].ToString() != "null" && Session["gblock"] != null && Session["gblock"].ToString() != "null")
                {
                    Session["ac"] = "1";

                    string StateName = Session["gstate"].ToString();
                    string DistName = Session["gdist"].ToString();
                    string BlockName = Session["gblock"].ToString();

                    if (StateName != "" && StateName != null && DistName != "" && DistName != null && BlockName != "" && BlockName != null)
                    {

                        ViewBag.WaterLevel = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName && x.district_name == DistName && x.block == BlockName).ToList();

                        ViewBag.RainfallDataFull = ABE.objAbhy_Total_Rainfall.Where(x => x.state_name == StateName && x.district_name == DistName && x.block == BlockName).ToList();

                        var Data = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName).ToList();
                        var GroundWaterLevelsData = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName && x.district_name == DistName && x.block == BlockName).Take(1).ToList();
                        ViewBag.GroundWaterLevelsData = GroundWaterLevelsData;
                        var abhy_groundwater_quality = ABE.objAbhy_groundwater_quality.Where(x => x.state_name == StateName && x.disrict_name == DistName && x.block == BlockName).ToList();
                        if (abhy_groundwater_quality.Count != 0)
                        {
                            Session["Salinity"] = abhy_groundwater_quality[0].ec;
                            Session["Chloride"] = abhy_groundwater_quality[0].chloride;
                            Session["Fluoride"] = abhy_groundwater_quality[0].fluoride;
                            Session["Sulphate"] = abhy_groundwater_quality[0].sulphate;
                            Session["Nitrate"] = abhy_groundwater_quality[0].nitrate;
                            Session["Iron"] = abhy_groundwater_quality[0].fe;

                        }
                        if (GroundWaterLevelsData.Count != 0)
                        {
                            ViewBag.jan_14 = 0;
                            ViewBag.jan_15 = 0;
                            ViewBag.jan_16 = 0;
                            ViewBag.jan_17 = 0;
                            ViewBag.jan_18 = 0;
                            ViewBag.jan_19 = 0;
                            ViewBag.may_14 = 0;
                            ViewBag.may_15 = 0;
                            ViewBag.may_16 = 0;
                            ViewBag.may_17 = 0;
                            ViewBag.may_18 = 0;
                            ViewBag.aug_14 = 0;
                            ViewBag.aug_15 = 0;
                            ViewBag.aug_16 = 0;
                            ViewBag.aug_17 = 0;
                            ViewBag.aug_18 = 0;
                            ViewBag.nov_14 = 0;
                            ViewBag.nov_15 = 0;
                            ViewBag.nov_16 = 0;
                            ViewBag.nov_17 = 0;
                            ViewBag.nov_18 = 0;
                            if (GroundWaterLevelsData[0].jan_14 != null && GroundWaterLevelsData[0].jan_14 != "NULL")
                            {
                                ViewBag.jan_14 = float.Parse(GroundWaterLevelsData[0].jan_14);
                            }
                            if (GroundWaterLevelsData[0].jan_15 != null && GroundWaterLevelsData[0].jan_15 != "NULL")
                            {
                                ViewBag.jan_15 = float.Parse(GroundWaterLevelsData[0].jan_15);
                            }
                            if (GroundWaterLevelsData[0].jan_16 != null && GroundWaterLevelsData[0].jan_16 != "NULL")
                            {
                                ViewBag.jan_16 = float.Parse(GroundWaterLevelsData[0].jan_16);
                            }
                            if (GroundWaterLevelsData[0].jan_17 != null && GroundWaterLevelsData[0].jan_17 != "NULL")
                            {
                                ViewBag.jan_17 = float.Parse(GroundWaterLevelsData[0].jan_17);
                            }
                            if (GroundWaterLevelsData[0].jan_18 != null && GroundWaterLevelsData[0].jan_18 != "NULL")
                            {
                                ViewBag.jan_18 = float.Parse(GroundWaterLevelsData[0].jan_18);
                            }
                            if (GroundWaterLevelsData[0].jan_19 != null && GroundWaterLevelsData[0].jan_19 != "NULL")
                            {
                                ViewBag.jan_19 = float.Parse(GroundWaterLevelsData[0].jan_19);
                            }

                            if (GroundWaterLevelsData[0].may_14 != null && GroundWaterLevelsData[0].may_14 != "NULL")
                            {
                                ViewBag.may_14 = float.Parse(GroundWaterLevelsData[0].may_14);
                            }
                            if (GroundWaterLevelsData[0].may_15 != null && GroundWaterLevelsData[0].may_15 != "NULL")
                            {
                                ViewBag.may_15 = float.Parse(GroundWaterLevelsData[0].may_15);
                            }
                            if (GroundWaterLevelsData[0].may_16 != null && GroundWaterLevelsData[0].may_16 != "NULL")
                            {
                                ViewBag.may_16 = float.Parse(GroundWaterLevelsData[0].may_16);
                            }
                            if (GroundWaterLevelsData[0].may_17 != null && GroundWaterLevelsData[0].may_17 != "NULL")
                            {
                                ViewBag.may_17 = float.Parse(GroundWaterLevelsData[0].may_17);
                            }
                            if (GroundWaterLevelsData[0].may_18 != null && GroundWaterLevelsData[0].may_18 != "NULL")
                            {
                                ViewBag.may_18 = float.Parse(GroundWaterLevelsData[0].may_18);
                            }
                            if (GroundWaterLevelsData[0].aug_14 != null && GroundWaterLevelsData[0].aug_14 != "NULL")
                            {
                                ViewBag.aug_14 = float.Parse(GroundWaterLevelsData[0].aug_14);
                            }
                            if (GroundWaterLevelsData[0].aug_15 != null && GroundWaterLevelsData[0].aug_15 != "NULL")
                            {
                                ViewBag.aug_15 = float.Parse(GroundWaterLevelsData[0].aug_15);
                            }
                            if (GroundWaterLevelsData[0].aug_16 != null && GroundWaterLevelsData[0].aug_16 != "NULL")
                            {
                                ViewBag.aug_16 = float.Parse(GroundWaterLevelsData[0].aug_16);
                            }
                            if (GroundWaterLevelsData[0].aug_17 != null && GroundWaterLevelsData[0].aug_17 != "NULL")
                            {
                                ViewBag.aug_17 = float.Parse(GroundWaterLevelsData[0].aug_17);
                            }
                            if (GroundWaterLevelsData[0].aug_18 != null && GroundWaterLevelsData[0].aug_18 != "NULL")
                            {
                                ViewBag.aug_18 = float.Parse(GroundWaterLevelsData[0].aug_18);
                            }
                            if (GroundWaterLevelsData[0].nov_14 != null && GroundWaterLevelsData[0].nov_14 != "NULL")
                            {
                                ViewBag.nov_14 = float.Parse(GroundWaterLevelsData[0].nov_14);
                            }
                            if (GroundWaterLevelsData[0].nov_15 != null && GroundWaterLevelsData[0].nov_15 != "NULL")
                            {
                                ViewBag.nov_15 = float.Parse(GroundWaterLevelsData[0].nov_15);
                            }
                            if (GroundWaterLevelsData[0].nov_16 != null && GroundWaterLevelsData[0].nov_16 != "NULL")
                            {
                                ViewBag.nov_16 = float.Parse(GroundWaterLevelsData[0].nov_16);
                            }
                            if (GroundWaterLevelsData[0].nov_17 != null && GroundWaterLevelsData[0].nov_17 != "NULL")
                            {
                                ViewBag.nov_17 = float.Parse(GroundWaterLevelsData[0].nov_17);
                            }
                            if (GroundWaterLevelsData[0].nov_18 != null && GroundWaterLevelsData[0].nov_18 != "NULL")
                            {
                                ViewBag.nov_18 = float.Parse(GroundWaterLevelsData[0].nov_18);
                            }

                        }
                        else
                        {

                            ViewBag.Alert = null;

                            ViewBag.ModelDatanull = "NoData";
                        }

                        if (ViewBag.WaterRainFall == null)
                        {
                            ViewBag.ModelDatanull1 = "NoData";
                        }
                        ViewBag.GroundWaterLevelsData = GroundWaterLevelsData;
                        List<Abhy_groundwater_levels2> model11 = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName && x.district_name == DistName && x.block == BlockName).ToList();
                        if (model11.Count != 0)
                        {
                            return View(model11);
                        }
                    }
                    else if (StateName != "" && StateName != null && DistName != "" && DistName != null)
                    {
                        ViewBag.WaterLevel = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName && x.district_name == DistName).ToList();

                        ViewBag.RainfallDataFull = ABE.objAbhy_Total_Rainfall.Where(x => x.state_name == StateName && x.district_name == DistName).ToList();

                        var Data = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName).ToList();
                        var GroundWaterLevelsData = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName && x.district_name == DistName).Take(1).ToList();
                        ViewBag.GroundWaterLevelsData = GroundWaterLevelsData;
                        var abhy_groundwater_quality = ABE.objAbhy_groundwater_quality.Where(x => x.state_name == StateName && x.disrict_name == DistName).ToList();
                        if (abhy_groundwater_quality.Count != 0)
                        {
                            Session["Salinity"] = abhy_groundwater_quality[0].ec;
                            Session["Chloride"] = abhy_groundwater_quality[0].chloride;
                            Session["Fluoride"] = abhy_groundwater_quality[0].fluoride;
                            Session["Sulphate"] = abhy_groundwater_quality[0].sulphate;
                            Session["Nitrate"] = abhy_groundwater_quality[0].nitrate;
                            Session["Iron"] = abhy_groundwater_quality[0].fe;

                        }
                        if (GroundWaterLevelsData.Count != 0)
                        {
                            ViewBag.jan_14 = 0;
                            ViewBag.jan_15 = 0;
                            ViewBag.jan_16 = 0;
                            ViewBag.jan_17 = 0;
                            ViewBag.jan_18 = 0;
                            ViewBag.jan_19 = 0;
                            ViewBag.may_14 = 0;
                            ViewBag.may_15 = 0;
                            ViewBag.may_16 = 0;
                            ViewBag.may_17 = 0;
                            ViewBag.may_18 = 0;
                            ViewBag.aug_14 = 0;
                            ViewBag.aug_15 = 0;
                            ViewBag.aug_16 = 0;
                            ViewBag.aug_17 = 0;
                            ViewBag.aug_18 = 0;
                            ViewBag.nov_14 = 0;
                            ViewBag.nov_15 = 0;
                            ViewBag.nov_16 = 0;
                            ViewBag.nov_17 = 0;
                            ViewBag.nov_18 = 0;
                            if (GroundWaterLevelsData[0].jan_14 != null && GroundWaterLevelsData[0].jan_14 != "NULL")
                            {
                                ViewBag.jan_14 = float.Parse(GroundWaterLevelsData[0].jan_14);
                            }
                            if (GroundWaterLevelsData[0].jan_15 != null && GroundWaterLevelsData[0].jan_15 != "NULL")
                            {
                                ViewBag.jan_15 = float.Parse(GroundWaterLevelsData[0].jan_15);
                            }
                            if (GroundWaterLevelsData[0].jan_16 != null && GroundWaterLevelsData[0].jan_16 != "NULL")
                            {
                                ViewBag.jan_16 = float.Parse(GroundWaterLevelsData[0].jan_16);
                            }
                            if (GroundWaterLevelsData[0].jan_17 != null && GroundWaterLevelsData[0].jan_17 != "NULL")
                            {
                                ViewBag.jan_17 = float.Parse(GroundWaterLevelsData[0].jan_17);
                            }
                            if (GroundWaterLevelsData[0].jan_18 != null && GroundWaterLevelsData[0].jan_18 != "NULL")
                            {
                                ViewBag.jan_18 = float.Parse(GroundWaterLevelsData[0].jan_18);
                            }
                            if (GroundWaterLevelsData[0].jan_19 != null && GroundWaterLevelsData[0].jan_19 != "NULL")
                            {
                                ViewBag.jan_19 = float.Parse(GroundWaterLevelsData[0].jan_19);
                            }

                            if (GroundWaterLevelsData[0].may_14 != null && GroundWaterLevelsData[0].may_14 != "NULL")
                            {
                                ViewBag.may_14 = float.Parse(GroundWaterLevelsData[0].may_14);
                            }
                            if (GroundWaterLevelsData[0].may_15 != null && GroundWaterLevelsData[0].may_15 != "NULL")
                            {
                                ViewBag.may_15 = float.Parse(GroundWaterLevelsData[0].may_15);
                            }
                            if (GroundWaterLevelsData[0].may_16 != null && GroundWaterLevelsData[0].may_16 != "NULL")
                            {
                                ViewBag.may_16 = float.Parse(GroundWaterLevelsData[0].may_16);
                            }
                            if (GroundWaterLevelsData[0].may_17 != null && GroundWaterLevelsData[0].may_17 != "NULL")
                            {
                                ViewBag.may_17 = float.Parse(GroundWaterLevelsData[0].may_17);
                            }
                            if (GroundWaterLevelsData[0].may_18 != null && GroundWaterLevelsData[0].may_18 != "NULL")
                            {
                                ViewBag.may_18 = float.Parse(GroundWaterLevelsData[0].may_18);
                            }
                            if (GroundWaterLevelsData[0].aug_14 != null && GroundWaterLevelsData[0].aug_14 != "NULL")
                            {
                                ViewBag.aug_14 = float.Parse(GroundWaterLevelsData[0].aug_14);
                            }
                            if (GroundWaterLevelsData[0].aug_15 != null && GroundWaterLevelsData[0].aug_15 != "NULL")
                            {
                                ViewBag.aug_15 = float.Parse(GroundWaterLevelsData[0].aug_15);
                            }
                            if (GroundWaterLevelsData[0].aug_16 != null && GroundWaterLevelsData[0].aug_16 != "NULL")
                            {
                                ViewBag.aug_16 = float.Parse(GroundWaterLevelsData[0].aug_16);
                            }
                            if (GroundWaterLevelsData[0].aug_17 != null && GroundWaterLevelsData[0].aug_17 != "NULL")
                            {
                                ViewBag.aug_17 = float.Parse(GroundWaterLevelsData[0].aug_17);
                            }
                            if (GroundWaterLevelsData[0].aug_18 != null && GroundWaterLevelsData[0].aug_18 != "NULL")
                            {
                                ViewBag.aug_18 = float.Parse(GroundWaterLevelsData[0].aug_18);
                            }
                            if (GroundWaterLevelsData[0].nov_14 != null && GroundWaterLevelsData[0].nov_14 != "NULL")
                            {
                                ViewBag.nov_14 = float.Parse(GroundWaterLevelsData[0].nov_14);
                            }
                            if (GroundWaterLevelsData[0].nov_15 != null && GroundWaterLevelsData[0].nov_15 != "NULL")
                            {
                                ViewBag.nov_15 = float.Parse(GroundWaterLevelsData[0].nov_15);
                            }
                            if (GroundWaterLevelsData[0].nov_16 != null && GroundWaterLevelsData[0].nov_16 != "NULL")
                            {
                                ViewBag.nov_16 = float.Parse(GroundWaterLevelsData[0].nov_16);
                            }
                            if (GroundWaterLevelsData[0].nov_17 != null && GroundWaterLevelsData[0].nov_17 != "NULL")
                            {
                                ViewBag.nov_17 = float.Parse(GroundWaterLevelsData[0].nov_17);
                            }
                            if (GroundWaterLevelsData[0].nov_18 != null && GroundWaterLevelsData[0].nov_18 != "NULL")
                            {
                                ViewBag.nov_18 = float.Parse(GroundWaterLevelsData[0].nov_18);
                            }

                        }
                        else
                        {

                            ViewBag.Alert = null;

                            ViewBag.ModelDatanull = "NoData";
                        }

                        if (ViewBag.WaterRainFall == null)
                        {
                            ViewBag.ModelDatanull1 = "NoData";
                        }
                        ViewBag.GroundWaterLevelsData = GroundWaterLevelsData;
                        List<Abhy_groundwater_levels2> model11 = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName && x.district_name == DistName).ToList();
                        if (model11.Count != 0)
                        {
                            return View(model11);
                        }
                    }
                    else
                    {
                        ViewBag.WaterLevel = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName).ToList();

                        ViewBag.RainfallDataFull = ABE.objAbhy_Total_Rainfall.Where(x => x.state_name == StateName).ToList();
                        var Data = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName).ToList();
                        var GroundWaterLevelsData = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName).Take(1).ToList();
                        ViewBag.GroundWaterLevelsData = GroundWaterLevelsData;
                        var abhy_groundwater_quality = ABE.objAbhy_groundwater_quality.Where(x => x.state_name == StateName).ToList();
                        if (abhy_groundwater_quality.Count != 0)
                        {
                            Session["Salinity"] = abhy_groundwater_quality[0].ec;
                            Session["Chloride"] = abhy_groundwater_quality[0].chloride;
                            Session["Fluoride"] = abhy_groundwater_quality[0].fluoride;
                            Session["Sulphate"] = abhy_groundwater_quality[0].sulphate;
                            Session["Nitrate"] = abhy_groundwater_quality[0].nitrate;
                            Session["Iron"] = abhy_groundwater_quality[0].fe;

                        }
                        if (GroundWaterLevelsData.Count != 0)
                        {
                            ViewBag.jan_14 = 0;
                            ViewBag.jan_15 = 0;
                            ViewBag.jan_16 = 0;
                            ViewBag.jan_17 = 0;
                            ViewBag.jan_18 = 0;
                            ViewBag.jan_19 = 0;
                            ViewBag.may_14 = 0;
                            ViewBag.may_15 = 0;
                            ViewBag.may_16 = 0;
                            ViewBag.may_17 = 0;
                            ViewBag.may_18 = 0;
                            ViewBag.aug_14 = 0;
                            ViewBag.aug_15 = 0;
                            ViewBag.aug_16 = 0;
                            ViewBag.aug_17 = 0;
                            ViewBag.aug_18 = 0;
                            ViewBag.nov_14 = 0;
                            ViewBag.nov_15 = 0;
                            ViewBag.nov_16 = 0;
                            ViewBag.nov_17 = 0;
                            ViewBag.nov_18 = 0;
                            if (GroundWaterLevelsData[0].jan_14 != null && GroundWaterLevelsData[0].jan_14 != "NULL")
                            {
                                ViewBag.jan_14 = float.Parse(GroundWaterLevelsData[0].jan_14);
                            }
                            if (GroundWaterLevelsData[0].jan_15 != null && GroundWaterLevelsData[0].jan_15 != "NULL")
                            {
                                ViewBag.jan_15 = float.Parse(GroundWaterLevelsData[0].jan_15);
                            }
                            if (GroundWaterLevelsData[0].jan_16 != null && GroundWaterLevelsData[0].jan_16 != "NULL")
                            {
                                ViewBag.jan_16 = float.Parse(GroundWaterLevelsData[0].jan_16);
                            }
                            if (GroundWaterLevelsData[0].jan_17 != null && GroundWaterLevelsData[0].jan_17 != "NULL")
                            {
                                ViewBag.jan_17 = float.Parse(GroundWaterLevelsData[0].jan_17);
                            }
                            if (GroundWaterLevelsData[0].jan_18 != null && GroundWaterLevelsData[0].jan_18 != "NULL")
                            {
                                ViewBag.jan_18 = float.Parse(GroundWaterLevelsData[0].jan_18);
                            }
                            if (GroundWaterLevelsData[0].jan_19 != null && GroundWaterLevelsData[0].jan_19 != "NULL")
                            {
                                ViewBag.jan_19 = float.Parse(GroundWaterLevelsData[0].jan_19);
                            }

                            if (GroundWaterLevelsData[0].may_14 != null && GroundWaterLevelsData[0].may_14 != "NULL")
                            {
                                ViewBag.may_14 = float.Parse(GroundWaterLevelsData[0].may_14);
                            }
                            if (GroundWaterLevelsData[0].may_15 != null && GroundWaterLevelsData[0].may_15 != "NULL")
                            {
                                ViewBag.may_15 = float.Parse(GroundWaterLevelsData[0].may_15);
                            }
                            if (GroundWaterLevelsData[0].may_16 != null && GroundWaterLevelsData[0].may_16 != "NULL")
                            {
                                ViewBag.may_16 = float.Parse(GroundWaterLevelsData[0].may_16);
                            }
                            if (GroundWaterLevelsData[0].may_17 != null && GroundWaterLevelsData[0].may_17 != "NULL")
                            {
                                ViewBag.may_17 = float.Parse(GroundWaterLevelsData[0].may_17);
                            }
                            if (GroundWaterLevelsData[0].may_18 != null && GroundWaterLevelsData[0].may_18 != "NULL")
                            {
                                ViewBag.may_18 = float.Parse(GroundWaterLevelsData[0].may_18);
                            }
                            if (GroundWaterLevelsData[0].aug_14 != null && GroundWaterLevelsData[0].aug_14 != "NULL")
                            {
                                ViewBag.aug_14 = float.Parse(GroundWaterLevelsData[0].aug_14);
                            }
                            if (GroundWaterLevelsData[0].aug_15 != null && GroundWaterLevelsData[0].aug_15 != "NULL")
                            {
                                ViewBag.aug_15 = float.Parse(GroundWaterLevelsData[0].aug_15);
                            }
                            if (GroundWaterLevelsData[0].aug_16 != null && GroundWaterLevelsData[0].aug_16 != "NULL")
                            {
                                ViewBag.aug_16 = float.Parse(GroundWaterLevelsData[0].aug_16);
                            }
                            if (GroundWaterLevelsData[0].aug_17 != null && GroundWaterLevelsData[0].aug_17 != "NULL")
                            {
                                ViewBag.aug_17 = float.Parse(GroundWaterLevelsData[0].aug_17);
                            }
                            if (GroundWaterLevelsData[0].aug_18 != null && GroundWaterLevelsData[0].aug_18 != "NULL")
                            {
                                ViewBag.aug_18 = float.Parse(GroundWaterLevelsData[0].aug_18);
                            }
                            if (GroundWaterLevelsData[0].nov_14 != null && GroundWaterLevelsData[0].nov_14 != "NULL")
                            {
                                ViewBag.nov_14 = float.Parse(GroundWaterLevelsData[0].nov_14);
                            }
                            if (GroundWaterLevelsData[0].nov_15 != null && GroundWaterLevelsData[0].nov_15 != "NULL")
                            {
                                ViewBag.nov_15 = float.Parse(GroundWaterLevelsData[0].nov_15);
                            }
                            if (GroundWaterLevelsData[0].nov_16 != null && GroundWaterLevelsData[0].nov_16 != "NULL")
                            {
                                ViewBag.nov_16 = float.Parse(GroundWaterLevelsData[0].nov_16);
                            }
                            if (GroundWaterLevelsData[0].nov_17 != null && GroundWaterLevelsData[0].nov_17 != "NULL")
                            {
                                ViewBag.nov_17 = float.Parse(GroundWaterLevelsData[0].nov_17);
                            }
                            if (GroundWaterLevelsData[0].nov_18 != null && GroundWaterLevelsData[0].nov_18 != "NULL")
                            {
                                ViewBag.nov_18 = float.Parse(GroundWaterLevelsData[0].nov_18);
                            }

                        }
                        else
                        {

                            ViewBag.Alert = null;

                            ViewBag.ModelDatanull = "NoData";
                        }

                        if (ViewBag.WaterRainFall == null)
                        {
                            ViewBag.ModelDatanull1 = "NoData";
                        }
                        ViewBag.GroundWaterLevelsData = GroundWaterLevelsData;
                        List<Abhy_groundwater_levels2> model11 = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName).ToList();
                        if (model11.Count != 0)
                        {
                            return View(model11);
                        }
                    }




                }


                return View();
            }

        }
        [HttpPost]
        public ActionResult ReWsp_gm(string state, string dist, string block)
        {
            ViewBag.ModelDatanull1 = "1";
            Session["ac"] = "1";
            ViewBag.RainFallFinalData = ABE.objAbhy_Total_Rainfall.ToList();
            ViewBag.Sitesdata = ABE.objabhy_groundwater_levels2.ToList();
            ViewBag.Sitesdata = ABE.objabhy_groundwater_levels2.ToList();

            if (Session["gstate"] != null && Session["gstate"].ToString() != "")
            {
                string StateName = "";
                string DistName = "";
                string BlockName = "";

                if (state != "")
                {
                    var stateid = Convert.ToInt32(state);

                    var States = ABE.objabhy_states.Where(x => x.sid == stateid).ToList();
                    StateName = States[0].statename;
                    Session["gstate"] = StateName;

                }
                else
                {
                    Session["gstate"] = "";
                }
                if (dist != "")
                {
                    var distid = Convert.ToInt32(dist);

                    var Dists = ABE.objabhy_districts.Where(x => x.did == distid).ToList();
                    DistName = Dists[0].district_name;
                    Session["gdist"] = DistName;

                }
                else
                {
                    Session["gdist"] = "";
                }

                if (block != "")
                {
                    var blockid = Convert.ToInt32(block);

                    var Blocks = ABE.objabhy_blocks.Where(x => x.bid == blockid).ToList();
                    BlockName = Blocks[0].block_name;
                    Session["gblock"] = BlockName;
                    Session["Location"] = Session["gblock"].ToString();


                }
                else
                {
                    Session["gblock"] = "";
                }


                ViewBag.abhy_groundwater_quality = null;

                if (state != null && state != "" && dist != null && dist != "" && block != null && block != "")
                {
                    List<Abhy_groundwater_levels2> model1 = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName && x.district_name == DistName && x.block == BlockName).ToList();
                    var abhy_groundwater_quality = ABE.objAbhy_groundwater_quality.Where(x => x.state_name == StateName && x.disrict_name == DistName && x.block == BlockName && x.year == "2015").Take(1).ToList();
                    ViewBag.abhy_groundwater_quality = abhy_groundwater_quality;
                    if (ViewBag.abhy_groundwater_quality.Count != 0)
                    {
                        Session["ph"] = ViewBag.abhy_groundwater_quality[0].ph;
                        Session["ec"] = ViewBag.abhy_groundwater_quality[0].ec;
                        Session["th"] = ViewBag.abhy_groundwater_quality[0].th;
                        Session["tot_alkalinity"] = ViewBag.abhy_groundwater_quality[0].tot_alkalinity;
                        Session["ca"] = ViewBag.abhy_groundwater_quality[0].ca;
                        Session["mg"] = ViewBag.abhy_groundwater_quality[0].mg;
                        Session["na"] = ViewBag.abhy_groundwater_quality[0].na;
                        Session["k"] = ViewBag.abhy_groundwater_quality[0].k;
                        Session["carbonate"] = ViewBag.abhy_groundwater_quality[0].carbonate;
                        Session["bicarbonate"] = ViewBag.abhy_groundwater_quality[0].bicarbonate;

                        Session["Chloride"] = ViewBag.abhy_groundwater_quality[0].chloride;
                        Session["Sulphate"] = ViewBag.abhy_groundwater_quality[0].sulphate;
                        Session["Fluoride"] = ViewBag.abhy_groundwater_quality[0].fluoride;

                        Session["Nitrate"] = ViewBag.abhy_groundwater_quality[0].nitrate;
                        Session["Iron"] = ViewBag.abhy_groundwater_quality[0].fe;
                        Session["sar"] = ViewBag.abhy_groundwater_quality[0].sar;
                        Session["rsc"] = ViewBag.abhy_groundwater_quality[0].rsc;
                    }
                    ViewBag.RainfallDataFull = ABE.objAbhy_Total_Rainfall.Where(x => x.state_name == StateName && x.district_name == DistName && x.block == BlockName).ToList();
                    var GroundWaterLevelsData = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName && x.district_name == DistName && x.block == BlockName/* && x.site_name == SiteName*/).Take(1).ToList();
                    ViewBag.GroundWaterLevelsData = GroundWaterLevelsData;
                    var Data = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName).ToList();
                    List<Abhy_groundwater_levels2> ViewData1 = ABE.objabhy_groundwater_levels2.ToList();
                    ViewBag.WaterLevel = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName && x.district_name == DistName && x.block == BlockName).ToList();
                    if (GroundWaterLevelsData.Count != 0)
                    {
                        ViewBag.jan_14 = 0;
                        ViewBag.jan_15 = 0;
                        ViewBag.jan_16 = 0;
                        ViewBag.jan_17 = 0;
                        ViewBag.jan_18 = 0;
                        ViewBag.jan_19 = 0;
                        ViewBag.may_14 = 0;
                        ViewBag.may_15 = 0;
                        ViewBag.may_16 = 0;
                        ViewBag.may_17 = 0;
                        ViewBag.may_18 = 0;
                        ViewBag.aug_14 = 0;
                        ViewBag.aug_15 = 0;
                        ViewBag.aug_16 = 0;
                        ViewBag.aug_17 = 0;
                        ViewBag.aug_18 = 0;
                        ViewBag.nov_14 = 0;
                        ViewBag.nov_15 = 0;
                        ViewBag.nov_16 = 0;
                        ViewBag.nov_17 = 0;
                        ViewBag.nov_18 = 0;
                        if (GroundWaterLevelsData[0].jan_14 != null && GroundWaterLevelsData[0].jan_14 != "NULL")
                        {
                            ViewBag.jan_14 = float.Parse(GroundWaterLevelsData[0].jan_14);
                        }
                        if (GroundWaterLevelsData[0].jan_15 != null && GroundWaterLevelsData[0].jan_15 != "NULL")
                        {
                            ViewBag.jan_15 = float.Parse(GroundWaterLevelsData[0].jan_15);
                        }
                        if (GroundWaterLevelsData[0].jan_16 != null && GroundWaterLevelsData[0].jan_16 != "NULL")
                        {
                            ViewBag.jan_16 = float.Parse(GroundWaterLevelsData[0].jan_16);
                        }
                        if (GroundWaterLevelsData[0].jan_17 != null && GroundWaterLevelsData[0].jan_17 != "NULL")
                        {
                            ViewBag.jan_17 = float.Parse(GroundWaterLevelsData[0].jan_17);
                        }
                        if (GroundWaterLevelsData[0].jan_18 != null && GroundWaterLevelsData[0].jan_18 != "NULL")
                        {
                            ViewBag.jan_18 = float.Parse(GroundWaterLevelsData[0].jan_18);
                        }
                        if (GroundWaterLevelsData[0].jan_19 != null && GroundWaterLevelsData[0].jan_19 != "NULL")
                        {
                            ViewBag.jan_19 = float.Parse(GroundWaterLevelsData[0].jan_19);
                        }

                        if (GroundWaterLevelsData[0].may_14 != null && GroundWaterLevelsData[0].may_14 != "NULL")
                        {
                            ViewBag.may_14 = float.Parse(GroundWaterLevelsData[0].may_14);
                        }
                        if (GroundWaterLevelsData[0].may_15 != null && GroundWaterLevelsData[0].may_15 != "NULL")
                        {
                            ViewBag.may_15 = float.Parse(GroundWaterLevelsData[0].may_15);
                        }
                        if (GroundWaterLevelsData[0].may_16 != null && GroundWaterLevelsData[0].may_16 != "NULL")
                        {
                            ViewBag.may_16 = float.Parse(GroundWaterLevelsData[0].may_16);
                        }
                        if (GroundWaterLevelsData[0].may_17 != null && GroundWaterLevelsData[0].may_17 != "NULL")
                        {
                            ViewBag.may_17 = float.Parse(GroundWaterLevelsData[0].may_17);
                        }
                        if (GroundWaterLevelsData[0].may_18 != null && GroundWaterLevelsData[0].may_18 != "NULL")
                        {
                            ViewBag.may_18 = float.Parse(GroundWaterLevelsData[0].may_18);
                        }



                        if (GroundWaterLevelsData[0].nov_14 != null && GroundWaterLevelsData[0].nov_14 != "NULL")
                        {
                            ViewBag.nov_14 = float.Parse(GroundWaterLevelsData[0].nov_14);
                        }
                        if (GroundWaterLevelsData[0].nov_15 != null && GroundWaterLevelsData[0].nov_15 != "NULL")
                        {
                            ViewBag.nov_15 = float.Parse(GroundWaterLevelsData[0].nov_15);
                        }
                        if (GroundWaterLevelsData[0].nov_16 != null && GroundWaterLevelsData[0].nov_16 != "NULL")
                        {
                            ViewBag.nov_16 = float.Parse(GroundWaterLevelsData[0].nov_16);
                        }
                        if (GroundWaterLevelsData[0].nov_17 != null && GroundWaterLevelsData[0].nov_17 != "NULL")
                        {
                            ViewBag.nov_17 = float.Parse(GroundWaterLevelsData[0].nov_17);
                        }
                        if (GroundWaterLevelsData[0].nov_18 != null && GroundWaterLevelsData[0].nov_18 != "NULL")
                        {
                            ViewBag.nov_18 = float.Parse(GroundWaterLevelsData[0].nov_18);
                        }

                    }
                    else
                    {
                        ViewBag.ModelDatanull = "NoData";
                    }
                    if (ViewBag.WaterRainFall == null)
                    {
                        ViewBag.ModelDatanull1 = "NoData";
                    }
                    var ViewData = ViewData1.Count();

                    List<Abhy_groundwater_levels2> model11 = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName && x.district_name == DistName && x.block == BlockName/* && x.site_name == SiteName*/).Take(1).ToList();
                    List<Abhy_groundwater_levels2> model3 = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName && x.district_name == DistName && x.block == BlockName).ToList();
                    return View(model3);
                }
                else if (state != null && state != "" && dist != null && dist != "")
                {
                    List<Abhy_groundwater_levels2> model1 = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName && x.district_name == DistName).ToList();
                    var abhy_groundwater_quality = ABE.objAbhy_groundwater_quality.Where(x => x.state_name == StateName && x.disrict_name == DistName && x.year == "2015").Take(1).ToList();
                    ViewBag.abhy_groundwater_quality = abhy_groundwater_quality;
                    if (ViewBag.abhy_groundwater_quality.Count != 0)
                    {
                        Session["ph"] = ViewBag.abhy_groundwater_quality[0].ph;
                        Session["ec"] = ViewBag.abhy_groundwater_quality[0].ec;
                        Session["th"] = ViewBag.abhy_groundwater_quality[0].th;
                        Session["tot_alkalinity"] = ViewBag.abhy_groundwater_quality[0].tot_alkalinity;
                        Session["ca"] = ViewBag.abhy_groundwater_quality[0].ca;
                        Session["mg"] = ViewBag.abhy_groundwater_quality[0].mg;
                        Session["na"] = ViewBag.abhy_groundwater_quality[0].na;
                        Session["k"] = ViewBag.abhy_groundwater_quality[0].k;
                        Session["carbonate"] = ViewBag.abhy_groundwater_quality[0].carbonate;
                        Session["bicarbonate"] = ViewBag.abhy_groundwater_quality[0].bicarbonate;

                        Session["Chloride"] = ViewBag.abhy_groundwater_quality[0].chloride;
                        Session["Sulphate"] = ViewBag.abhy_groundwater_quality[0].sulphate;
                        Session["Fluoride"] = ViewBag.abhy_groundwater_quality[0].fluoride;

                        Session["Nitrate"] = ViewBag.abhy_groundwater_quality[0].nitrate;
                        Session["Iron"] = ViewBag.abhy_groundwater_quality[0].fe;
                        Session["sar"] = ViewBag.abhy_groundwater_quality[0].sar;
                        Session["rsc"] = ViewBag.abhy_groundwater_quality[0].rsc;
                    }
                    ViewBag.RainfallDataFull = ABE.objAbhy_Total_Rainfall.Where(x => x.state_name == StateName && x.district_name == DistName/* && x.station == StationName*/).ToList();
                    // List<GroundwaterLevels> ViewData1 = ABE.objGroundwaterLevels.ToList();
                    var GroundWaterLevelsData = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName && x.district_name == DistName/* && x.site_name == SiteName*/).Take(1).ToList();
                    ViewBag.GroundWaterLevelsData = GroundWaterLevelsData;
                    var Data = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName).ToList();

                    List<Abhy_groundwater_levels2> ViewData1 = ABE.objabhy_groundwater_levels2.ToList();
                    ViewBag.WaterLevel = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName && x.district_name == DistName /* && x.site_name == SiteName*/).ToList();
                    if (GroundWaterLevelsData.Count != 0)
                    {
                        ViewBag.jan_14 = 0;
                        ViewBag.jan_15 = 0;
                        ViewBag.jan_16 = 0;
                        ViewBag.jan_17 = 0;
                        ViewBag.jan_18 = 0;
                        ViewBag.jan_19 = 0;
                        ViewBag.may_14 = 0;
                        ViewBag.may_15 = 0;
                        ViewBag.may_16 = 0;
                        ViewBag.may_17 = 0;
                        ViewBag.may_18 = 0;
                        ViewBag.aug_14 = 0;
                        ViewBag.aug_15 = 0;
                        ViewBag.aug_16 = 0;
                        ViewBag.aug_17 = 0;
                        ViewBag.aug_18 = 0;
                        ViewBag.nov_14 = 0;
                        ViewBag.nov_15 = 0;
                        ViewBag.nov_16 = 0;
                        ViewBag.nov_17 = 0;
                        ViewBag.nov_18 = 0;
                        if (GroundWaterLevelsData[0].jan_14 != null && GroundWaterLevelsData[0].jan_14 != "NULL")
                        {
                            ViewBag.jan_14 = float.Parse(GroundWaterLevelsData[0].jan_14);
                        }
                        if (GroundWaterLevelsData[0].jan_15 != null && GroundWaterLevelsData[0].jan_15 != "NULL")
                        {
                            ViewBag.jan_15 = float.Parse(GroundWaterLevelsData[0].jan_15);
                        }
                        if (GroundWaterLevelsData[0].jan_16 != null && GroundWaterLevelsData[0].jan_16 != "NULL")
                        {
                            ViewBag.jan_16 = float.Parse(GroundWaterLevelsData[0].jan_16);
                        }
                        if (GroundWaterLevelsData[0].jan_17 != null && GroundWaterLevelsData[0].jan_17 != "NULL")
                        {
                            ViewBag.jan_17 = float.Parse(GroundWaterLevelsData[0].jan_17);
                        }
                        if (GroundWaterLevelsData[0].jan_18 != null && GroundWaterLevelsData[0].jan_18 != "NULL")
                        {
                            ViewBag.jan_18 = float.Parse(GroundWaterLevelsData[0].jan_18);
                        }
                        if (GroundWaterLevelsData[0].jan_19 != null && GroundWaterLevelsData[0].jan_19 != "NULL")
                        {
                            ViewBag.jan_19 = float.Parse(GroundWaterLevelsData[0].jan_19);
                        }

                        if (GroundWaterLevelsData[0].may_14 != null && GroundWaterLevelsData[0].may_14 != "NULL")
                        {
                            ViewBag.may_14 = float.Parse(GroundWaterLevelsData[0].may_14);
                        }
                        if (GroundWaterLevelsData[0].may_15 != null && GroundWaterLevelsData[0].may_15 != "NULL")
                        {
                            ViewBag.may_15 = float.Parse(GroundWaterLevelsData[0].may_15);
                        }
                        if (GroundWaterLevelsData[0].may_16 != null && GroundWaterLevelsData[0].may_16 != "NULL")
                        {
                            ViewBag.may_16 = float.Parse(GroundWaterLevelsData[0].may_16);
                        }
                        if (GroundWaterLevelsData[0].may_17 != null && GroundWaterLevelsData[0].may_17 != "NULL")
                        {
                            ViewBag.may_17 = float.Parse(GroundWaterLevelsData[0].may_17);
                        }
                        if (GroundWaterLevelsData[0].may_18 != null && GroundWaterLevelsData[0].may_18 != "NULL")
                        {
                            ViewBag.may_18 = float.Parse(GroundWaterLevelsData[0].may_18);
                        }
                        if (GroundWaterLevelsData[0].aug_14 != null && GroundWaterLevelsData[0].aug_14 != "NULL")
                        {
                            ViewBag.aug_14 = float.Parse(GroundWaterLevelsData[0].aug_14);
                        }
                        if (GroundWaterLevelsData[0].aug_15 != null && GroundWaterLevelsData[0].aug_15 != "NULL")
                        {
                            ViewBag.aug_15 = float.Parse(GroundWaterLevelsData[0].aug_15);
                        }
                        if (GroundWaterLevelsData[0].aug_16 != null && GroundWaterLevelsData[0].aug_16 != "NULL")
                        {
                            ViewBag.aug_16 = float.Parse(GroundWaterLevelsData[0].aug_16);
                        }
                        if (GroundWaterLevelsData[0].aug_17 != null && GroundWaterLevelsData[0].aug_17 != "NULL")
                        {
                            ViewBag.aug_17 = float.Parse(GroundWaterLevelsData[0].aug_17);
                        }
                        if (GroundWaterLevelsData[0].aug_18 != null && GroundWaterLevelsData[0].aug_18 != "NULL")
                        {
                            ViewBag.aug_18 = float.Parse(GroundWaterLevelsData[0].aug_18);
                        }
                        if (GroundWaterLevelsData[0].nov_14 != null && GroundWaterLevelsData[0].nov_14 != "NULL")
                        {
                            ViewBag.nov_14 = float.Parse(GroundWaterLevelsData[0].nov_14);
                        }
                        if (GroundWaterLevelsData[0].nov_15 != null && GroundWaterLevelsData[0].nov_15 != "NULL")
                        {
                            ViewBag.nov_15 = float.Parse(GroundWaterLevelsData[0].nov_15);
                        }
                        if (GroundWaterLevelsData[0].nov_16 != null && GroundWaterLevelsData[0].nov_16 != "NULL")
                        {
                            ViewBag.nov_16 = float.Parse(GroundWaterLevelsData[0].nov_16);
                        }
                        if (GroundWaterLevelsData[0].nov_17 != null && GroundWaterLevelsData[0].nov_17 != "NULL")
                        {
                            ViewBag.nov_17 = float.Parse(GroundWaterLevelsData[0].nov_17);
                        }
                        if (GroundWaterLevelsData[0].nov_18 != null && GroundWaterLevelsData[0].nov_18 != "NULL")
                        {
                            ViewBag.nov_18 = float.Parse(GroundWaterLevelsData[0].nov_18);
                        }
                    }
                    else
                    {
                        ViewBag.ModelDatanull = "NoData";
                    }
                    if (ViewBag.WaterRainFall == null)
                    {
                        ViewBag.ModelDatanull1 = "NoData";
                    }
                    var ViewData = ViewData1.Count();
                    List<Abhy_groundwater_levels2> model11 = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName && x.district_name == DistName /* && x.site_name == SiteName*/).Take(1).ToList();
                    List<Abhy_groundwater_levels2> model2 = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName && x.district_name == DistName).ToList();
                    return View(model2);

                }

                else
                {
                    List<Abhy_groundwater_levels2> model1 = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName).ToList();
                    var abhy_groundwater_quality = ABE.objAbhy_groundwater_quality.Where(x => x.state_name == StateName && x.year == "2015").Take(1).ToList();
                    ViewBag.abhy_groundwater_quality = abhy_groundwater_quality;
                    if (ViewBag.abhy_groundwater_quality.Count != 0)
                    {
                        Session["ph"] = ViewBag.abhy_groundwater_quality[0].ph;
                        Session["ec"] = ViewBag.abhy_groundwater_quality[0].ec;
                        Session["th"] = ViewBag.abhy_groundwater_quality[0].th;
                        Session["tot_alkalinity"] = ViewBag.abhy_groundwater_quality[0].tot_alkalinity;
                        Session["ca"] = ViewBag.abhy_groundwater_quality[0].ca;
                        Session["mg"] = ViewBag.abhy_groundwater_quality[0].mg;
                        Session["na"] = ViewBag.abhy_groundwater_quality[0].na;
                        Session["k"] = ViewBag.abhy_groundwater_quality[0].k;
                        Session["carbonate"] = ViewBag.abhy_groundwater_quality[0].carbonate;
                        Session["bicarbonate"] = ViewBag.abhy_groundwater_quality[0].bicarbonate;

                        Session["Chloride"] = ViewBag.abhy_groundwater_quality[0].chloride;
                        Session["Sulphate"] = ViewBag.abhy_groundwater_quality[0].sulphate;
                        Session["Fluoride"] = ViewBag.abhy_groundwater_quality[0].fluoride;

                        Session["Nitrate"] = ViewBag.abhy_groundwater_quality[0].nitrate;
                        Session["Iron"] = ViewBag.abhy_groundwater_quality[0].fe;
                        Session["sar"] = ViewBag.abhy_groundwater_quality[0].sar;
                        Session["rsc"] = ViewBag.abhy_groundwater_quality[0].rsc;
                    }
                    ViewBag.RainfallDataFull = ABE.objAbhy_Total_Rainfall.Where(x => x.state_name == StateName/* && x.station == StationName*/).ToList();
                    // List<GroundwaterLevels> ViewData1 = ABE.objGroundwaterLevels.ToList();
                    var GroundWaterLevelsData = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName /* && x.site_name == SiteName*/).Take(1).ToList();
                    ViewBag.GroundWaterLevelsData = GroundWaterLevelsData;
                    var Data = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName).ToList();
                    List<Abhy_groundwater_levels2> ViewData1 = ABE.objabhy_groundwater_levels2.ToList();
                    ViewBag.WaterLevel = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName /* && x.site_name == SiteName*/).ToList();
                    if (GroundWaterLevelsData.Count != 0)
                    {
                        ViewBag.jan_14 = 0;
                        ViewBag.jan_15 = 0;
                        ViewBag.jan_16 = 0;
                        ViewBag.jan_17 = 0;
                        ViewBag.jan_18 = 0;
                        ViewBag.jan_19 = 0;
                        ViewBag.may_14 = 0;
                        ViewBag.may_15 = 0;
                        ViewBag.may_16 = 0;
                        ViewBag.may_17 = 0;
                        ViewBag.may_18 = 0;
                        ViewBag.aug_14 = 0;
                        ViewBag.aug_15 = 0;
                        ViewBag.aug_16 = 0;
                        ViewBag.aug_17 = 0;
                        ViewBag.aug_18 = 0;
                        ViewBag.nov_14 = 0;
                        ViewBag.nov_15 = 0;
                        ViewBag.nov_16 = 0;
                        ViewBag.nov_17 = 0;
                        ViewBag.nov_18 = 0;
                        if (GroundWaterLevelsData[0].jan_14 != null && GroundWaterLevelsData[0].jan_14 != "NULL")
                        {
                            ViewBag.jan_14 = float.Parse(GroundWaterLevelsData[0].jan_14);
                        }
                        if (GroundWaterLevelsData[0].jan_15 != null && GroundWaterLevelsData[0].jan_15 != "NULL")
                        {
                            ViewBag.jan_15 = float.Parse(GroundWaterLevelsData[0].jan_15);
                        }
                        if (GroundWaterLevelsData[0].jan_16 != null && GroundWaterLevelsData[0].jan_16 != "NULL")
                        {
                            ViewBag.jan_16 = float.Parse(GroundWaterLevelsData[0].jan_16);
                        }
                        if (GroundWaterLevelsData[0].jan_17 != null && GroundWaterLevelsData[0].jan_17 != "NULL")
                        {
                            ViewBag.jan_17 = float.Parse(GroundWaterLevelsData[0].jan_17);
                        }
                        if (GroundWaterLevelsData[0].jan_18 != null && GroundWaterLevelsData[0].jan_18 != "NULL")
                        {
                            ViewBag.jan_18 = float.Parse(GroundWaterLevelsData[0].jan_18);
                        }
                        if (GroundWaterLevelsData[0].jan_19 != null && GroundWaterLevelsData[0].jan_19 != "NULL")
                        {
                            ViewBag.jan_19 = float.Parse(GroundWaterLevelsData[0].jan_19);
                        }

                        if (GroundWaterLevelsData[0].may_14 != null && GroundWaterLevelsData[0].may_14 != "NULL")
                        {
                            ViewBag.may_14 = float.Parse(GroundWaterLevelsData[0].may_14);
                        }
                        if (GroundWaterLevelsData[0].may_15 != null && GroundWaterLevelsData[0].may_15 != "NULL")
                        {
                            ViewBag.may_15 = float.Parse(GroundWaterLevelsData[0].may_15);
                        }
                        if (GroundWaterLevelsData[0].may_16 != null && GroundWaterLevelsData[0].may_16 != "NULL")
                        {
                            ViewBag.may_16 = float.Parse(GroundWaterLevelsData[0].may_16);
                        }
                        if (GroundWaterLevelsData[0].may_17 != null && GroundWaterLevelsData[0].may_17 != "NULL")
                        {
                            ViewBag.may_17 = float.Parse(GroundWaterLevelsData[0].may_17);
                        }
                        if (GroundWaterLevelsData[0].may_18 != null && GroundWaterLevelsData[0].may_18 != "NULL")
                        {
                            ViewBag.may_18 = float.Parse(GroundWaterLevelsData[0].may_18);
                        }
                        if (GroundWaterLevelsData[0].aug_14 != null && GroundWaterLevelsData[0].aug_14 != "NULL")
                        {
                            ViewBag.aug_14 = float.Parse(GroundWaterLevelsData[0].aug_14);
                        }
                        if (GroundWaterLevelsData[0].aug_15 != null && GroundWaterLevelsData[0].aug_15 != "NULL")
                        {
                            ViewBag.aug_15 = float.Parse(GroundWaterLevelsData[0].aug_15);
                        }
                        if (GroundWaterLevelsData[0].aug_16 != null && GroundWaterLevelsData[0].aug_16 != "NULL")
                        {
                            ViewBag.aug_16 = float.Parse(GroundWaterLevelsData[0].aug_16);
                        }
                        if (GroundWaterLevelsData[0].aug_17 != null && GroundWaterLevelsData[0].aug_17 != "NULL")
                        {
                            ViewBag.aug_17 = float.Parse(GroundWaterLevelsData[0].aug_17);
                        }
                        if (GroundWaterLevelsData[0].aug_18 != null && GroundWaterLevelsData[0].aug_18 != "NULL")
                        {
                            ViewBag.aug_18 = float.Parse(GroundWaterLevelsData[0].aug_18);
                        }
                        if (GroundWaterLevelsData[0].nov_14 != null && GroundWaterLevelsData[0].nov_14 != "NULL")
                        {
                            ViewBag.nov_14 = float.Parse(GroundWaterLevelsData[0].nov_14);
                        }
                        if (GroundWaterLevelsData[0].nov_15 != null && GroundWaterLevelsData[0].nov_15 != "NULL")
                        {
                            ViewBag.nov_15 = float.Parse(GroundWaterLevelsData[0].nov_15);
                        }
                        if (GroundWaterLevelsData[0].nov_16 != null && GroundWaterLevelsData[0].nov_16 != "NULL")
                        {
                            ViewBag.nov_16 = float.Parse(GroundWaterLevelsData[0].nov_16);
                        }
                        if (GroundWaterLevelsData[0].nov_17 != null && GroundWaterLevelsData[0].nov_17 != "NULL")
                        {
                            ViewBag.nov_17 = float.Parse(GroundWaterLevelsData[0].nov_17);
                        }
                        if (GroundWaterLevelsData[0].nov_18 != null && GroundWaterLevelsData[0].nov_18 != "NULL")
                        {
                            ViewBag.nov_18 = float.Parse(GroundWaterLevelsData[0].nov_18);
                        }
                    }
                    else
                    {
                        ViewBag.ModelDatanull = "NoData";
                    }
                    if (ViewBag.WaterRainFall == null)
                    {
                        ViewBag.ModelDatanull1 = "NoData";
                    }
                    var ViewData = ViewData1.Count();
                    List<Abhy_groundwater_levels2> model11 = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName  /* && x.site_name == SiteName*/).Take(1).ToList();




                    return View(model1);

                }

            }
            else
            {
                return RedirectToAction("MisLogin", "WSP");
            }

        }

        public ActionResult Resecurity_plan()
        {
            return View();
        }


        [HttpPost]
        public ActionResult WSPContact(string name, string email, string message)
        {
            string contemail = "gcrs.net2019@gmail.com";

            string body = "Dear Sir/Madam," + "\r\n" + "\n" + "Name:" + name + "," + "\r\nEmail::" + email + "," + "," + "\r\nDescription::" + message;
            string results = WebConstents.SendEmailSMTP(contemail, "", "Enquire", body.ToString(), "");
            return View("WspFirst_page");
        }
        public DateTime ParseDate(string date)
        {
            DateTimeFormatInfo dateFormatProvider = new DateTimeFormatInfo();
            dateFormatProvider.ShortDatePattern = "dd/MM/yyyy";
            return DateTime.Parse(date, dateFormatProvider);
        }

        [HttpPost]
        public ActionResult DeleteWaterSecurityPlan(string Data, string IDD)
        {
            try
            {
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<abhy_demand1>(Data);
                if (result.category == "DemandSide")
                {
                    var DID = Convert.ToInt32(IDD);
                    var DemandSideData = ABE.objabhy_demand1.Where(x => x.did == DID).SingleOrDefault();
                    ABE.Entry(DemandSideData).State = EntityState.Deleted;
                    ABE.SaveChanges();
                    return Json("Successfully Deleted");
                }

                else
                {
                    var DID = Convert.ToInt32(IDD);
                    var SupplaySideData = ABE.objabhy_supply1.Where(x => x.supplyid == DID).SingleOrDefault();
                    ABE.Entry(SupplaySideData).State = EntityState.Deleted;
                    ABE.SaveChanges();
                    return Json("Successfully Deleted");
                }


            }
            catch (Exception ex)
            {
                // retrun View();
            }
            return View();
        }


        [HttpPost]
        public ActionResult UpdateWaterSecurityPlan(string Data, string IDD)
        {
            try
            {
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<abhy_demand1>(Data);

                if (result.category == "DemandSide")
                {
                    var DID = Convert.ToInt32(IDD);
                    var DemandSideData = ABE.objabhy_demand1.Where(x => x.did == DID).SingleOrDefault();
                    DemandSideData.startdate = result.startdate.ToString();
                    DemandSideData.enddate = result.enddate.ToString();
                    DemandSideData.todaydate = DateTime.Today;
                    DemandSideData.emailid = Session["Email"].ToString();
                    DemandSideData.activity = result.activity;
                    DemandSideData.area = result.area;
                    DemandSideData.category = result.category;
                    DemandSideData.fcmkey = result.fcmkey;
                    DemandSideData.number = result.number;
                    DemandSideData.unitcost = result.unitcost;
                    DemandSideData.funding = result.funding;
                    DemandSideData.implementing = result.implementing;
                    DemandSideData.totalbudget = result.totalbudget;
                    DemandSideData.state_name = Session["gstate"].ToString();
                    DemandSideData.district_name = Session["gdist"].ToString();
                    DemandSideData.block = Session["gblock"].ToString();
                    DemandSideData.gname = Session["ggram"].ToString();
                    DemandSideData.villname = Session["gvill"].ToString();
                    DemandSideData.username = Session["UserName"].ToString();
                    DemandSideData.userid = Convert.ToInt32(Session["UserId"]);

                    ABE.Entry(DemandSideData).State = EntityState.Modified;
                    ABE.SaveChanges();
                    return Json("Successfully Updated");
                }

                else
                {
                    var DID = Convert.ToInt32(IDD);
                    var SupplaySideData = ABE.objabhy_supply1.Where(x => x.supplyid == DID).SingleOrDefault();

                    SupplaySideData.startdate = result.startdate.ToString();
                    SupplaySideData.enddate = result.enddate.ToString();
                    SupplaySideData.todaydate = DateTime.Today;
                    SupplaySideData.emailid = Session["Email"].ToString();
                    SupplaySideData.activity = result.activity;
                    SupplaySideData.area = result.area;
                    SupplaySideData.category = result.category;
                    SupplaySideData.fcmkey = result.fcmkey;
                    SupplaySideData.number = result.number;
                    SupplaySideData.unitcost = result.unitcost;
                    SupplaySideData.funding = result.funding;
                    SupplaySideData.implementing = result.implementing;
                    SupplaySideData.totalbudget = result.totalbudget;
                    SupplaySideData.state_name = Session["gstate"].ToString();
                    SupplaySideData.district_name = Session["gdist"].ToString();
                    SupplaySideData.block = Session["gblock"].ToString();
                    SupplaySideData.gname = Session["ggram"].ToString();
                    SupplaySideData.villname = Session["gvill"].ToString();
                    SupplaySideData.username = Session["UserName"].ToString();
                    SupplaySideData.userid = Convert.ToInt32(Session["UserId"]);

                    ABE.Entry(SupplaySideData).State = EntityState.Modified;
                    ABE.SaveChanges();
                    return Json("Successfully Updated");
                }


            }
            catch (Exception ex)
            {
                // retrun View();
            }
            return View();
        }


        [HttpPost]
        public ActionResult DemandSideSavedData(string Data)
        {
            try
            {
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<abhy_demand1>(Data);
                abhy_demand1 obj = new abhy_demand1();

                var UserId = Convert.ToInt32(Session["UserId"]);
                var State = Session["gstate"].ToString();
                var Dist = Session["gdist"].ToString();

                var Block = Session["gblock"].ToString();
                var Gram = Session["ggram"].ToString();
                DateTime Tdate = DateTime.Today;
                var Data11 = ABE.objabhy_demand1.Where(x => x.activity == result.activity && x.userid == UserId && x.state_name == State && x.district_name == Dist && x.block == Block && x.gname == Gram && x.todaydate == Tdate).SingleOrDefault();

                if (Data11 != null)
                {

                    Data11.startdate = result.startdate.ToString();
                    Data11.enddate = result.enddate.ToString();
                    Data11.todaydate = DateTime.Today;
                    Data11.emailid = Session["Email"].ToString();
                    Data11.activity = result.activity;
                    Data11.area = result.area;
                    Data11.category = result.category;
                    Data11.fcmkey = result.fcmkey;
                    Data11.number = result.number;
                    Data11.unitcost = result.unitcost;
                    Data11.funding = result.funding;
                    Data11.implementing = result.implementing;
                    Data11.totalbudget = result.totalbudget;
                    Data11.state_name = Session["gstate"].ToString();
                    Data11.district_name = Session["gdist"].ToString();
                    Data11.block = Session["gblock"].ToString();
                    Data11.gname = Session["ggram"].ToString();
                    Data11.villname = Session["gvill"].ToString();
                    Data11.username = Session["UserName"].ToString();
                    Data11.userid = Convert.ToInt32(Session["UserId"]);

                    ABE.Entry(Data11).State = EntityState.Modified;
                    ABE.SaveChanges();
                    return Json("Successfully Saved");
                }

                else

                {
                    obj.startdate = result.startdate;
                    obj.enddate = result.enddate;
                    obj.todaydate = DateTime.Today;
                    obj.emailid = Session["Email"].ToString();
                    obj.activity = result.activity;
                    obj.area = result.area;
                    obj.category = result.category;
                    obj.fcmkey = result.fcmkey;
                    obj.number = result.number;
                    obj.unitcost = result.unitcost;
                    obj.funding = result.funding;
                    obj.implementing = result.implementing;
                    obj.totalbudget = result.totalbudget;
                    obj.state_name = Session["gstate"].ToString();
                    obj.district_name = Session["gdist"].ToString();
                    obj.block = Session["gblock"].ToString();
                    obj.gname = Session["ggram"].ToString();
                    obj.villname = Session["gvill"].ToString();
                    obj.username = Session["UserName"].ToString();
                    obj.userid = Convert.ToInt32(Session["UserId"]);

                    ABE.objabhy_demand1.Add(obj);
                    ABE.SaveChanges();
                    return Json("Successfully Saved");
                }


            }
            catch (Exception ex)
            {
                // retrun View();
            }
            return View();
        }
        [HttpPost]
        public ActionResult SupplaysideSaveData(string Data)
        {

            JavaScriptSerializer js = new JavaScriptSerializer();
            var result = js.Deserialize<abhy_supply1>(Data);


            var UserId = Convert.ToInt32(Session["UserId"]);
            var State = Session["gstate"].ToString();
            var Dist = Session["gdist"].ToString();

            var Block = Session["gblock"].ToString();
            var Gram = Session["ggram"].ToString();
            DateTime Tdate = DateTime.Today;

            var Dataa = ABE.objabhy_supply1.Where(x => x.activity == result.activity && x.userid == UserId && x.state_name == State && x.district_name == Dist && x.block == Block && x.gname == Gram && x.todaydate == Tdate).SingleOrDefault();
            if (Dataa != null)
            {

                Dataa.startdate = result.startdate;
                Dataa.enddate = result.enddate;
                Dataa.todaydate = DateTime.Today;
                Dataa.activity = result.activity;
                Dataa.area = result.area;
                Dataa.category = result.category;
                Session["Supplaycategory"] = result.category;
                Dataa.fcmkey = result.fcmkey;
                Dataa.emailid = Session["Email"].ToString();
                Dataa.number = result.number;
                Dataa.unitcost = result.unitcost;
                Dataa.funding = result.funding;
                Dataa.implementing = result.implementing;
                Dataa.totalbudget = result.totalbudget;
                Dataa.state_name = Session["gstate"].ToString();
                Dataa.district_name = Session["gdist"].ToString();
                Dataa.block = Session["gblock"].ToString();
                Dataa.gname = Session["ggram"].ToString();
                Dataa.villname = Session["gvill"].ToString();
                Dataa.username = Session["UserName"].ToString();
                Dataa.userid = Convert.ToInt32(Session["UserId"]);

                ABE.Entry(Dataa).State = EntityState.Modified;
                ABE.SaveChanges();
                return Json("Successfully Saved");
            }
            else
            {
                abhy_supply1 obj = new abhy_supply1();

                obj.startdate = result.startdate;
                obj.enddate = result.enddate;
                obj.todaydate = DateTime.Today;
                obj.activity = result.activity;
                obj.area = result.area;
                obj.category = result.category;
                Session["Supplaycategory"] = result.category;
                obj.fcmkey = result.fcmkey;
                obj.emailid = Session["Email"].ToString();
                obj.number = result.number;
                obj.unitcost = result.unitcost;
                obj.funding = result.funding;
                obj.implementing = result.implementing;
                obj.totalbudget = result.totalbudget;
                obj.state_name = Session["gstate"].ToString();
                obj.district_name = Session["gdist"].ToString();
                obj.block = Session["gblock"].ToString();
                obj.gname = Session["ggram"].ToString();
                obj.villname = Session["gvill"].ToString();
                obj.username = Session["UserName"].ToString();
                obj.userid = Convert.ToInt32(Session["UserId"]);

                ABE.objabhy_supply1.Add(obj);
                ABE.SaveChanges();
                return Json("Successfully Saved");
            }



        }

        [HttpGet]
        public ActionResult demandsidedetails()
        {
            var userid = Convert.ToInt32(Session["UserId"]);
            var State = Session["gstate"].ToString();
            var Dist = Session["gdist"].ToString();

            var Block = Session["gblock"].ToString();
            var Gram = Session["ggram"].ToString();
            List<abhy_demand1> ddetails = new List<abhy_demand1>();
            if (State != "" && Dist != "" && Block != "" && Gram != "")
            {
                ddetails = ABE.objabhy_demand1.Where(x => x.userid == userid && x.state_name == State && x.district_name == Dist && x.block == Block && x.gname == Gram).ToList();//total list

            }
            else if (State != "" && Dist != "" && Block != "")
            {
                ddetails = ABE.objabhy_demand1.Where(x => x.userid == userid && x.state_name == State && x.district_name == Dist && x.block == Block).ToList();//total list

            }
            else if (State != "" && Dist != "")
            {
                ddetails = ABE.objabhy_demand1.Where(x => x.userid == userid && x.state_name == State && x.district_name == Dist).ToList();//total list

            }
            else if (State != "")
            {
                ddetails = ABE.objabhy_demand1.Where(x => x.userid == userid && x.state_name == State).ToList();//total list

            }
            List<abhy_demand1> nddetails = new List<abhy_demand1>();//new list for saving
            DateTime udate = DateTime.Now.Date;
            if (ddetails.Count != 0)
            {
                foreach (var item in ddetails)
                {
                    DateTime date1 = Convert.ToDateTime(item.todaydate).Date;
                    if (udate == date1)
                    {
                        nddetails.Add(item);
                    }
                }
            }
            return Json(nddetails, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public ActionResult supplysidedetails()
        {
            var userid = Convert.ToInt32(Session["UserId"]);
            var State = Session["gstate"].ToString();
            var Dist = Session["gdist"].ToString();

            var Block = Session["gblock"].ToString();
            var Gram = Session["ggram"].ToString();
            List<abhy_supply1> nddetails = new List<abhy_supply1>();
            List<abhy_supply1> ddetails = new List<abhy_supply1>();
            if (State != "" && Dist != "" && Block != "" && Gram != "")
            {
                ddetails = ABE.objabhy_supply1.Where(x => x.userid == userid && x.state_name == State && x.district_name == Dist && x.block == Block && x.gname == Gram).ToList();//total list

            }
            else if (State != "" && Dist != "" && Block != "")
            {
                ddetails = ABE.objabhy_supply1.Where(x => x.userid == userid && x.state_name == State && x.district_name == Dist && x.block == Block).ToList();//total list

            }
            else if (State != "" && Dist != "")
            {
                ddetails = ABE.objabhy_supply1.Where(x => x.userid == userid && x.state_name == State && x.district_name == Dist).ToList();//total list

            }
            else if (State != "")
            {
                ddetails = ABE.objabhy_supply1.Where(x => x.userid == userid && x.state_name == State).ToList();//total list

            }


            DateTime udate = DateTime.Now.Date;
            if (ddetails.Count != 0)
            {
                foreach (var item in ddetails)
                {
                    DateTime date1 = Convert.ToDateTime(item.todaydate).Date;
                    if (udate == date1)
                    {
                        nddetails.Add(item);
                    }
                }
            }
            return Json(nddetails, JsonRequestBehavior.AllowGet);
        }


        [HttpGet]
        public ActionResult Wsp_form()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Wsp_form(string Data, string Idd)
        {

            var StateName = "";
            var DistName = "";
            var BlockName = "";
            var GramName = "";
            var UserIddd = "";
            JavaScriptSerializer js = new JavaScriptSerializer();
            var result = js.Deserialize<abhy_water_budget_form>(Data);

            if (result.state_name != null && result.state_name != "undefined")
            {

                StateName = result.state_name;
                DistName = result.district_name;
                BlockName = result.block;
                GramName = result.gname;
                if (StateName != "")
                {
                    StateName = Session["gstate"].ToString();
                }
                else
                {
                    StateName = "";
                }

                if (DistName != "")
                {
                    DistName = Session["gdist"].ToString();
                }
                else

                {
                    DistName = "";
                }
                if (BlockName != "")
                {
                    BlockName = Session["BlockName"].ToString();
                }
                else
                {
                    BlockName = "";
                }

                if (GramName != "Select Gram Panchayat")
                {
                    GramName = Session["GramName"].ToString();
                }
                else
                {
                    GramName = "";
                }
            }
            else
            {
                StateName = Session["gstate"].ToString();
                DistName = Session["gdist"].ToString();
                BlockName = Session["gblock"].ToString();
                GramName = Session["ggram"].ToString();

            }

            if (Session["UserId"] != null)
            {
                UserIddd = Session["UserId"].ToString();
            }

            var Obj = new abhy_water_budget_form_InsertedData();


            var Details1 = ABE.obj_abhy_water_budget_form_InsertedData.Where(x => x.state_name == StateName && x.district_name == DistName && x.block == BlockName && x.gname == GramName && x.userid == UserIddd).SingleOrDefault();



            if (Details1 == null)
            {
                Obj.userid = UserIddd;
                Obj.area_non_agri = result.area_non_agri;
                Obj.barrren_land = result.barrren_land;
                //Obj.block = result.block;
                Obj.bullock_drawn = result.bullock_drawn;
                Obj.centrifugal_pump = result.centrifugal_pump;
                Obj.social_youth_clubs = result.social_youth_clubs;
                Obj.cult_waste_land = result.cult_waste_land;
                Obj.defunt_borewells = result.defunt_borewells;
                Obj.diesel_pump = result.diesel_pump;
                // Obj.district_name = result.district_name;
                Obj.fallow_land = result.fallow_land;
                Obj.female_population = result.female_population;
                Obj.forest_area = result.forest_area;
                //Obj.gname = result.gname;
                Obj.irri_bore_tube_wells = result.irri_bore_tube_wells;
                Obj.irri_canals = result.irri_canals;
                Obj.irri_dugwells = result.irri_dugwells;
                Obj.irri_dug_borewells = result.irri_dug_borewells;
                Obj.irri_tanks = result.irri_tanks;
                Obj.kharif_cotton = result.kharif_cotton;
                Obj.kharif_maize = result.kharif_maize;
                Obj.kharif_others = result.kharif_others;
                Obj.kharif_rabi_others = result.kharif_rabi_others;
                Obj.kharif_rabi_tomoto = result.kharif_rabi_tomoto;
                Obj.kharif_rice = result.kharif_rice;
                Obj.kharif_sugarcane = result.kharif_sugarcane;
                Obj.kuchha_road = result.kuchha_road;
                Obj.livestock_bullocks = result.livestock_bullocks;
                Obj.livestock_cows_buffaloes = result.livestock_cows_buffaloes;
                Obj.livestock_sheeps_goates = result.livestock_sheeps_goates;
                Obj.male_population = result.male_population;
                Obj.monsoon_gw_level = result.monsoon_gw_level;
                Obj.monsoon_rainfall = result.monsoon_rainfall;
                Obj.non_monsoon_gw_level = result.non_monsoon_gw_level;
                Obj.non_monsoon_rainfall = result.non_monsoon_rainfall;
                Obj.others_govt_private_employees = result.others_govt_private_employees;
                Obj.power_availbility = result.power_availbility;
                Obj.power_avg_hours_connectivity = result.power_avg_hours_connectivity;
                Obj.power_hhs = result.power_hhs;
                Obj.power_iirigation = result.power_iirigation;
                Obj.pucca_road = result.pucca_road;
                Obj.rabi_barley = result.rabi_barley;
                Obj.rabi_gram = result.rabi_mustard;
                Obj.rabi_mustard = result.rabi_mustard;
                Obj.rabi_others = result.rabi_others;
                Obj.rabi_wheat = result.rabi_wheat;
                Obj.social_cooperative = result.social_cooperative;
                Obj.social_others = result.social_others;
                Obj.social_self_help = result.social_self_help;
                //Obj.state_name = result.state_name;
                Obj.tol_agri_labours = result.tol_agri_labours;
                Obj.tol_farmers = result.tol_farmers;
                Obj.tol_household_activities = result.tol_household_activities;
                Obj.tol_population = result.tol_population;
                Obj.water_agriculture_purpose = result.water_agriculture_purpose;
                Obj.water_domestic_purpose = result.water_domestic_purpose;
                Obj.water_drinking_purpose = result.water_drinking_purpose;
                Obj.water_industrial_purpose = result.water_industrial_purpose;
                Obj.water_pump = result.water_pump;
                Obj.working_borewells = result.working_borewells;

                Obj.state_name = StateName;

                Obj.district_name = DistName;

                Obj.block = BlockName;

                Obj.gname = GramName;

                ABE.obj_abhy_water_budget_form_InsertedData.Add(Obj);
                ABE.SaveChanges();
                return Json("Successfully Saved");
            }
            else
            {

                //var Iddd = Convert.ToInt32(Idd);

                //var Details = ABE.objabhy_water_budget_form.Where(a => a.wspid == Iddd).SingleOrDefault();

                Details1.area_non_agri = result.area_non_agri;
                Details1.barrren_land = result.barrren_land;
                //Details1.block = result.block;
                Details1.bullock_drawn = result.bullock_drawn;
                Details1.centrifugal_pump = result.centrifugal_pump;
                Details1.cult_waste_land = result.cult_waste_land;
                Details1.defunt_borewells = result.defunt_borewells;
                Details1.diesel_pump = result.diesel_pump;
                // Details1.district_name = result.district_name;
                Details1.fallow_land = result.fallow_land;
                Details1.female_population = result.female_population;
                Details1.forest_area = result.forest_area;
                //Details1.gname = result.gname;
                Details1.social_youth_clubs = result.social_youth_clubs;
                Details1.irri_bore_tube_wells = result.irri_bore_tube_wells;
                Details1.irri_canals = result.irri_canals;
                Details1.irri_dugwells = result.irri_dugwells;
                Details1.irri_dug_borewells = result.irri_dug_borewells;
                Details1.irri_tanks = result.irri_tanks;
                Details1.kharif_cotton = result.kharif_cotton;
                Details1.kharif_maize = result.kharif_maize;
                Details1.kharif_others = result.kharif_others;
                Details1.kharif_rabi_others = result.kharif_rabi_others;
                Details1.kharif_rabi_tomoto = result.kharif_rabi_tomoto;
                Details1.kharif_rice = result.kharif_rice;
                Details1.kharif_sugarcane = result.kharif_sugarcane;
                Details1.kuchha_road = result.kuchha_road;
                Details1.livestock_bullocks = result.livestock_bullocks;
                Details1.livestock_cows_buffaloes = result.livestock_cows_buffaloes;
                Details1.livestock_sheeps_goates = result.livestock_sheeps_goates;
                Details1.male_population = result.male_population;
                Details1.monsoon_gw_level = result.monsoon_gw_level;
                Details1.monsoon_rainfall = result.monsoon_rainfall;
                Details1.non_monsoon_gw_level = result.non_monsoon_gw_level;
                Details1.non_monsoon_rainfall = result.non_monsoon_rainfall;
                Details1.others_govt_private_employees = result.others_govt_private_employees;
                Details1.power_availbility = result.power_availbility;
                Details1.power_avg_hours_connectivity = result.power_avg_hours_connectivity;
                Details1.power_hhs = result.power_hhs;
                Details1.power_iirigation = result.power_iirigation;
                Details1.pucca_road = result.pucca_road;
                Details1.rabi_barley = result.rabi_barley;
                Details1.rabi_gram = result.rabi_mustard;
                Details1.rabi_mustard = result.rabi_mustard;
                Details1.rabi_others = result.rabi_others;
                Details1.rabi_wheat = result.rabi_wheat;
                Details1.social_cooperative = result.social_cooperative;
                Details1.social_others = result.social_others;
                Details1.social_self_help = result.social_self_help;
                //Details1.state_name = result.state_name;
                Details1.tol_agri_labours = result.tol_agri_labours;
                Details1.tol_farmers = result.tol_farmers;
                Details1.tol_household_activities = result.tol_household_activities;
                Details1.tol_population = result.tol_population;
                Details1.water_agriculture_purpose = result.water_agriculture_purpose;
                Details1.water_domestic_purpose = result.water_domestic_purpose;
                Details1.water_drinking_purpose = result.water_drinking_purpose;
                Details1.water_industrial_purpose = result.water_industrial_purpose;
                Details1.water_pump = result.water_pump;
                Details1.working_borewells = result.working_borewells;


                Details1.state_name = StateName;



                Details1.district_name = DistName;


                Details1.block = BlockName;

                Details1.gname = GramName;
                ABE.Entry(Details1).State = EntityState.Modified;
                ABE.SaveChanges();
                return Json("Updated Successfully");


            }
        }


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
            if (Session["gdist"] != null)
            {
                Obj.district_name = Session["gdist"].ToString();
            }
            if (Session["gblock"] != null)
            {
                Obj.block = Session["gblock"].ToString();
            }
            if (Session["ggram"] != null)
            {
                Obj.gname = Session["ggram"].ToString();
            }
            if (Session["UserId"] != null)
            {
                Obj.userid = Convert.ToInt32(Session["UserId"]);
            }
            //if (Session["gvill"] != null)
            //{
            //Obj.villname = Session["gvill"].ToString();
            //}

            ABE.objabhy_households.Add(Obj);
            ABE.SaveChanges();
            return Json("Successfully Saved");
        }

        [HttpPost]
        public ActionResult UpdateHouseholds(string Data)
        {
            JavaScriptSerializer js = new JavaScriptSerializer();
            var result = js.Deserialize<abhy_households>(Data);

            var iddd = Convert.ToInt32(result.hlid);
            // var Obj = ABE.objabhy_households.Where(x => x.hlid == iddd).SingleOrDefault();
            abhy_households Obj = new abhy_households();
            Obj = ABE.objabhy_households.Find(iddd);


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
                return Json("Updated Successfully ");
            }
            else
            {
                return Json("No Data");
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
                return Json("Deleted Succesfully");
            }
            else
            {
                return Json("No Data");
            }


        }

        [HttpGet]
        public ActionResult HouseholdDetails()
        {
            if (Session["gstate"] != null)
            {
                if (Session["gstate"] != null && Session["gstate"].ToString() != "" && Session["gdist"] != null && Session["gdist"].ToString() != "" && Session["gblock"] != null && Session["gblock"].ToString() != "" && Session["ggram"] != null && Session["ggram"].ToString() != "")
                {
                    var Statename = Session["gstate"].ToString();
                    var DistName = Session["gdist"].ToString();
                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    var Details = ABE.objabhy_households.Where(x => x.state_name == Statename && x.district_name == DistName && x.block == Block && x.gname == Gram).ToList();
                    var Details1 = Json(Details, JsonRequestBehavior.AllowGet);
                    Details1.MaxJsonLength = int.MaxValue;
                    return Details1;
                }
                else if (Session["gstate"] != null && Session["gstate"].ToString() != "" && Session["gdist"] != null && Session["gdist"].ToString() != "" && Session["gblock"] != null && Session["gblock"].ToString() != "")
                {
                    var Statename = Session["gstate"].ToString();
                    var DistName = Session["gdist"].ToString();
                    var Block = Session["gblock"].ToString();

                    var Details = ABE.objabhy_households.Where(x => x.state_name == Statename && x.district_name == DistName && x.block == Block).ToList();
                    var Details1 = Json(Details, JsonRequestBehavior.AllowGet);
                    Details1.MaxJsonLength = int.MaxValue;
                    return Details1;
                }
                else if (Session["gstate"] != null && Session["gstate"].ToString() != "" && Session["gdist"] != null && Session["gdist"].ToString() != "")
                {
                    var Statename = Session["gstate"].ToString();
                    var DistName = Session["gdist"].ToString();


                    var Details = ABE.objabhy_households.Where(x => x.state_name == Statename && x.district_name == DistName).ToList();
                    var Details1 = Json(Details, JsonRequestBehavior.AllowGet);
                    Details1.MaxJsonLength = int.MaxValue;
                    return Details1;
                }
                else if (Session["gstate"] != null && Session["gstate"].ToString() != "")
                {
                    var Statename = Session["gstate"].ToString();

                    var Details = ABE.objabhy_households.Where(x => x.state_name == Statename).ToList();
                    var Details1 = Json(Details, JsonRequestBehavior.AllowGet);
                    Details1.MaxJsonLength = int.MaxValue;
                    return Details1;
                }
                else
                {
                    return RedirectToAction("MisLogin");
                }
            }
            else
            {
                return RedirectToAction("MisLogin");
            }

        }




        [HttpPost]
        public ActionResult Getting_Data_Wsp_budget_form()
        {
            var StateName = "";
            var DistName = "";
            var BlockName = "";
            var GramName = "";
            if (Session["gstate"] != null)
            {
                StateName = Session["gstate"].ToString();
            }
            if (Session["gdist"] != null)
            {
                DistName = Session["gdist"].ToString();
            }
            if (Session["gblock"] != null)
            {
                BlockName = Session["gblock"].ToString();
            }
            if (Session["ggram"] != null)
            {
                GramName = Session["ggram"].ToString();
            }
            var userid = Session["UserId"].ToString();
            if (StateName != "" && DistName != "" && BlockName != "" && GramName != "")
            {
                var DDDetails = ABE.obj_abhy_water_budget_form_InsertedData.Where(x => x.state_name == StateName && x.district_name == DistName && x.block == BlockName && x.gname == GramName && x.userid == userid).ToList();
                if (DDDetails.Count != 0)
                {
                    var Details11 = Json(DDDetails, JsonRequestBehavior.AllowGet);
                    Details11.MaxJsonLength = int.MaxValue;
                    return Details11;
                }
                else
                {
                    var Details1 = ABE.objabhy_water_budget_form.Where(x => x.state_name == StateName && x.district_name == DistName && x.block == BlockName && x.gname == GramName).ToList();
                    var Details11 = Json(Details1, JsonRequestBehavior.AllowGet);
                    Details11.MaxJsonLength = int.MaxValue;
                    return Details11;
                }

            }
            else if (StateName != "" && DistName != "" && BlockName != "")
            {
                var DDDetails = ABE.obj_abhy_water_budget_form_InsertedData.Where(x => x.state_name == StateName && x.district_name == DistName && x.block == BlockName && x.userid == userid).ToList();
                if (DDDetails.Count != 0)
                {
                    var Details11 = Json(DDDetails, JsonRequestBehavior.AllowGet);
                    Details11.MaxJsonLength = int.MaxValue;
                    return Details11;
                }
                else
                {
                    var Details1 = ABE.objabhy_water_budget_form.Where(x => x.state_name == StateName && x.district_name == DistName && x.block == BlockName).ToList();
                    var Details11 = Json(Details1, JsonRequestBehavior.AllowGet);
                    Details11.MaxJsonLength = int.MaxValue;
                    return Details11;
                }
            }
            else if (StateName != "" && DistName != "")
            {
                var DDDetails = ABE.obj_abhy_water_budget_form_InsertedData.Where(x => x.state_name == StateName && x.district_name == DistName && x.userid == userid).ToList();
                if (DDDetails.Count != 0)
                {
                    var Details11 = Json(DDDetails, JsonRequestBehavior.AllowGet);
                    Details11.MaxJsonLength = int.MaxValue;
                    return Details11;
                }
                else
                {
                    var Details1 = ABE.objabhy_water_budget_form.Where(x => x.state_name == StateName && x.district_name == DistName).ToList();
                    var Details11 = Json(Details1, JsonRequestBehavior.AllowGet);
                    Details11.MaxJsonLength = int.MaxValue;
                    return Details11;
                }
            }
            else if (StateName != "")
            {
                var DDDetails = ABE.obj_abhy_water_budget_form_InsertedData.Where(x => x.state_name == StateName && x.userid == userid).ToList();
                if (DDDetails.Count != 0)
                {
                    var Details11 = Json(DDDetails, JsonRequestBehavior.AllowGet);
                    Details11.MaxJsonLength = int.MaxValue;
                    return Details11;
                }
                else
                {
                    var Details1 = ABE.objabhy_water_budget_form.Where(x => x.state_name == StateName).ToList();
                    var Details11 = Json(Details1, JsonRequestBehavior.AllowGet);
                    Details11.MaxJsonLength = int.MaxValue;
                    return Details11;
                }

            }
            else
            {
                return RedirectToAction("MisLogin");
            }

        }




        [HttpPost]
        public ActionResult kariorrabi(string ddlrabival, string ddlkarifval)
        {
            try
            {
                var StateName = "";
                var DistName = "";
                var BlockName = "";
                var GramName = "";
                if (Session["gstate"] != null)
                {
                    StateName = Session["gstate"].ToString();
                }
                if (Session["gdist"] != null)
                {
                    DistName = Session["gdist"].ToString();
                }
                if (Session["gblock"] != null)
                {
                    BlockName = Session["gblock"].ToString();
                }
                if (Session["ggram"] != null)
                {
                    GramName = Session["ggram"].ToString();
                }
                if (ddlrabival != "" && ddlkarifval != "")
                {
                    if (StateName != "" && DistName == "" && BlockName == "" && GramName == "")
                    {
                        ViewBag.cropsdata = ABE.objabhy_seasoncorps.Where(x => x.state_name == StateName && x.karif == ddlkarifval && x.rabi == ddlrabival).FirstOrDefault();

                    }
                    else if (StateName != "" && DistName != "" && BlockName == "" && GramName == "")
                    {
                        ViewBag.cropsdata = ABE.objabhy_seasoncorps.Where(x => x.state_name == StateName && x.district_name == DistName && x.karif == ddlkarifval && x.rabi == ddlrabival).FirstOrDefault();

                    }
                    else if (StateName != "" && DistName != "" && BlockName != "" && GramName == "")
                    {
                        ViewBag.cropsdata = ABE.objabhy_seasoncorps.Where(x => x.state_name == StateName && x.district_name == DistName && x.block == BlockName && x.karif == ddlkarifval && x.rabi == ddlrabival).FirstOrDefault();

                    }
                    else if (StateName != "" && DistName != "" && BlockName != "" && GramName != "")
                    {
                        ViewBag.cropsdata = ABE.objabhy_seasoncorps.Where(x => x.state_name == StateName && x.district_name == DistName && x.block == BlockName && x.gname == GramName && x.karif == ddlkarifval && x.rabi == ddlrabival).ToList();

                    }
                }
                else if (ddlrabival == "" && ddlkarifval != "")
                {
                    if (StateName != "" && DistName == "" && BlockName == "" && GramName == "")
                    {
                        ViewBag.cropsdata = ABE.objabhy_seasoncorps.Where(x => x.state_name == StateName && x.karif == ddlkarifval).FirstOrDefault();

                    }
                    else if (StateName != "" && DistName != "" && BlockName == "" && GramName == "")
                    {
                        ViewBag.cropsdata = ABE.objabhy_seasoncorps.Where(x => x.state_name == StateName && x.district_name == DistName && x.karif == ddlkarifval).FirstOrDefault();

                    }
                    else if (StateName != "" && DistName != "" && BlockName != "" && GramName == "")
                    {
                        ViewBag.cropsdata = ABE.objabhy_seasoncorps.Where(x => x.state_name == StateName && x.district_name == DistName && x.block == BlockName && x.karif == ddlkarifval).FirstOrDefault();

                    }
                    else if (StateName != "" && DistName != "" && BlockName != "" && GramName != "")
                    {
                        ViewBag.cropsdata = ABE.objabhy_seasoncorps.Where(x => x.state_name == StateName && x.district_name == DistName && x.block == BlockName && x.gname == GramName && x.karif == ddlkarifval).ToList();

                    }
                }
                else if (ddlrabival != "" && ddlkarifval == "")
                {
                    if (StateName != "" && DistName == "" && BlockName == "" && GramName == "")
                    {
                        ViewBag.cropsdata = ABE.objabhy_seasoncorps.Where(x => x.state_name == StateName && x.rabi == ddlrabival).FirstOrDefault();

                    }
                    else if (StateName != "" && DistName != "" && BlockName == "" && GramName == "")
                    {
                        ViewBag.cropsdata = ABE.objabhy_seasoncorps.Where(x => x.state_name == StateName && x.district_name == DistName && x.rabi == ddlrabival).FirstOrDefault();

                    }
                    else if (StateName != "" && DistName != "" && BlockName != "" && GramName == "")
                    {
                        ViewBag.cropsdata = ABE.objabhy_seasoncorps.Where(x => x.state_name == StateName && x.district_name == DistName && x.block == BlockName && x.rabi == ddlrabival).FirstOrDefault();

                    }
                    else if (StateName != "" && DistName != "" && BlockName != "" && GramName != "")
                    {
                        ViewBag.cropsdata = ABE.objabhy_seasoncorps.Where(x => x.state_name == StateName && x.district_name == DistName && x.block == BlockName && x.gname == GramName && x.rabi == ddlrabival).ToList();

                    }
                }
                else
                {
                    return RedirectToAction("MisLogin");
                }
                var cropDetails = ViewBag.cropsdata;
                var cropsdata = Json(cropDetails, JsonRequestBehavior.AllowGet);
                cropsdata.MaxJsonLength = int.MaxValue;
                return cropsdata;
            }
            catch (Exception ex)
            {

            }
            return View();
        }
    }
}

