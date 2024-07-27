using AbhyProject.Models;
using DocumentFormat.OpenXml.Drawing;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.IO;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;
using System.Globalization;
using OfficeOpenXml.FormulaParsing.Excel.Functions.Logical;
using AbhyProject.Classes;
using System.Configuration;

namespace AbhyProject.Controllers
{
    public class WaterSecurityPlanController : Controller
    {
        AbhyEntity ABE = new AbhyEntity();
        AtaljalEntity AJE = new AtaljalEntity();
        // GET: Wsp_new
        public ActionResult Index()
        {
            if (Session["UserId"] != null)
            {
                return View();
            }
            else
            {
                return RedirectToAction("WSP_GWM_HOME", "WSPNew");
            }
        }
        public ActionResult Wsp_Home()
        {
            //ViewBag.GPLIst = ABE.objUsers.ToList();
            return View();
        }

        public ActionResult Wsp_Gram()
        {
            return View();
        }

        public ActionResult Wsp_Gram_Report()
        {
            return View();
        }
        public ActionResult Wsp_Water_Availability()
        {
            return View();
        }
        public ActionResult Water_Aval_Report()
        {
            return View();
        }
        public ActionResult Water_Utilization()
        {
            return View();
        }
        public ActionResult Water_Draft_Report()
        {
            return View();
        }
        public ActionResult Wsp_Balance()
        {
            return View();
        }

        public ActionResult Balance_Report()
        {
            return View();
        }

        public ActionResult Water_Budget()
        {
            return View();
        }
        public ActionResult Water_Budget_report()
        {
            return View();
        }

        public ActionResult Wspremarks()
        {
            return View();
        }
        public ActionResult Total_WSP_Report()
        {
            return View();
        }


        [HttpPost]
        public ActionResult get_approved_reject_status()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var Email = Session["Email"].ToString();
                    var OfficerName = Session["UserName"].ToString();
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();
                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    var Year = Session["year"].ToString();
                    //var Month = Session["month"].ToString();
                    //abhy_wsp_approved_status details = new abhy_wsp_approved_status();
                    abhy_wsp_approved_status data = new abhy_wsp_approved_status();
                    if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null && Gram != "" && Gram != null && Year != "" && Year != null)/* && Month != "" && Month != null*/
                    {
                        data = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.year == Year).FirstOrDefault();
                    }
                    if (data != null)
                    {

                        return Json(data, JsonRequestBehavior.AllowGet);
                    }
                    else
                    {
                        return Json("null", JsonRequestBehavior.AllowGet);
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

        public ActionResult WaterLevelWSP()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();
                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    var Year = Session["year"].ToString();
                    //var PageNumber = result.PageNumber;
                    WaterLevel WL = new WaterLevel();
                    List<WaterLevel> WList = new List<WaterLevel>();
                    List<vw_gwl_all> Final_data = new List<vw_gwl_all>();
                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        Final_data = AJE.obj_vw_gwl_all.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram).OrderBy(c => c.wellid).ToList();
                    }

                    if (Final_data.Count > 0)
                    {
                        var GroupByData = Final_data.GroupBy(x => x.wellid).ToList();
                        int j = 0;
                        foreach (var items in GroupByData.AsEnumerable())
                        {
                            ++j;
                            var item = items.First();
                            var DataByWellId = Final_data.Where(x => x.wellid == item.wellid).ToList();
                            for (int i = 0; i < DataByWellId.Count; i++)
                            {
                                if (i == 0)
                                {
                                    var obj = new WaterLevel()
                                    {
                                        sno = j,
                                        sitename = DataByWellId[i].sitename,
                                        locationdetails = DataByWellId[i].locationdetails,
                                        latitude = DataByWellId[i].latitude,
                                        longitude = DataByWellId[i].longitude,
                                        datetime = DataByWellId[i].datetime,
                                        wellid = DataByWellId[i].wellid,
                                        typeofwell = DataByWellId[i].typeofwell,
                                        other_well_type = DataByWellId[i].other_well_type,
                                        source_Ownership = DataByWellId[i].source_Ownership,
                                        source_Ownership_type = DataByWellId[i].source_Ownership_type,
                                        Diameter_of_Well = DataByWellId[i].Diameter_of_Well,
                                        welldepth = DataByWellId[i].welldepth,
                                        Height_of_Measuring_Point = DataByWellId[i].Height_of_Measuring_Point,
                                        gwl_reading = DataByWellId[i].gwl_reading,
                                        gwl_date = DataByWellId[i].gwl_date

                                    };
                                    WList.Add(obj);
                                }
                                else
                                {
                                    var obj = new WaterLevel()
                                    {
                                        sno = 0,
                                        sitename = DataByWellId[i].sitename,
                                        locationdetails = DataByWellId[i].locationdetails,
                                        latitude = DataByWellId[i].latitude,
                                        longitude = DataByWellId[i].longitude,
                                        datetime = DataByWellId[i].datetime,
                                        wellid = DataByWellId[i].wellid,
                                        typeofwell = DataByWellId[i].typeofwell,
                                        other_well_type = DataByWellId[i].other_well_type,
                                        source_Ownership = DataByWellId[i].source_Ownership,
                                        source_Ownership_type = DataByWellId[i].source_Ownership_type,
                                        Diameter_of_Well = DataByWellId[i].Diameter_of_Well,
                                        welldepth = DataByWellId[i].welldepth,
                                        Height_of_Measuring_Point = DataByWellId[i].Height_of_Measuring_Point,
                                        gwl_reading = DataByWellId[i].gwl_reading,
                                        gwl_date = DataByWellId[i].gwl_date
                                    };
                                    WList.Add(obj);
                                }
                            }
                        }
                    }



                    return Json(WList, JsonRequestBehavior.AllowGet);
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


        public ActionResult SavedWaterLevelWSP()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();
                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    var Year = Session["year"].ToString();
                    //var PageNumber = result.PageNumber;
                    WaterLevel WL = new WaterLevel();
                    List<abhy_wsp_gwl> WList = new List<abhy_wsp_gwl>();
                    List<vw_gwl_all> Final_data = new List<vw_gwl_all>();
                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        Final_data = AJE.obj_vw_gwl_all.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram).OrderBy(c => c.wellid).ToList();
                    }

                    if (Final_data.Count > 0)
                    {
                        var mis_wl_data = ABE.obj_abhy_wsp_gwl.Where(x => x.grampanchayat == Gram && x.wsp_fyyear == Year).ToList();
                        if (mis_wl_data.Count != 0)
                        {
                            ABE.obj_abhy_wsp_gwl.RemoveRange(mis_wl_data);
                            ABE.SaveChanges();
                        }
                        var GroupByData = Final_data.GroupBy(x => x.wellid).ToList();
                        int j = 0;
                        foreach (var items in GroupByData.AsEnumerable())
                        {
                            ++j;
                            var item = items.First();
                            var DataByWellId = Final_data.Where(x => x.wellid == item.wellid).ToList();
                            for (int i = 0; i < DataByWellId.Count; i++)
                            {
                                if (i == 0)
                                {
                                    var obj = new abhy_wsp_gwl()
                                    {
                                        sno = j.ToString(),
                                        state = DataByWellId[i].state,
                                        district = DataByWellId[i].district,
                                        block = DataByWellId[i].block,
                                        grampanchayat = DataByWellId[i].grampanchayat,
                                        sitename = DataByWellId[i].sitename,
                                        locationdetails = DataByWellId[i].locationdetails,
                                        latitude = DataByWellId[i].latitude,
                                        longitude = DataByWellId[i].longitude,
                                        datetime = DataByWellId[i].datetime,
                                        wellid = DataByWellId[i].wellid,
                                        typeofwell = DataByWellId[i].typeofwell,
                                        other_well_type = DataByWellId[i].other_well_type,
                                        source_Ownership = DataByWellId[i].source_Ownership,
                                        source_Ownership_type = DataByWellId[i].source_Ownership_type,
                                        Diameter_of_Well = DataByWellId[i].Diameter_of_Well,
                                        welldepth = DataByWellId[i].welldepth,
                                        Height_of_Measuring_Point = DataByWellId[i].Height_of_Measuring_Point,
                                        gwl_reading = DataByWellId[i].gwl_reading,
                                        gwl_date = DataByWellId[i].gwl_date,
                                        well = DataByWellId[i].well,
                                        fyyear = DataByWellId[i].fyyear,
                                        fymonth = DataByWellId[i].fymonth,
                                        status = DataByWellId[i].status,
                                        wsp_fyyear = Year,
                                        ma_id = DataByWellId[i].id,
                                        wsp_save_date = DateTime.Now
                                    };
                                    WList.Add(obj);
                                    //ABE.obj_abhy_wsp_gwl.Add(obj);
                                    //ABE.SaveChanges();
                                }
                                else
                                {
                                    var obj = new abhy_wsp_gwl()
                                    {
                                        sno = "",
                                        state = DataByWellId[i].state,
                                        district = DataByWellId[i].district,
                                        block = DataByWellId[i].block,
                                        grampanchayat = DataByWellId[i].grampanchayat,
                                        sitename = DataByWellId[i].sitename,
                                        locationdetails = DataByWellId[i].locationdetails,
                                        latitude = DataByWellId[i].latitude,
                                        longitude = DataByWellId[i].longitude,
                                        datetime = DataByWellId[i].datetime,
                                        wellid = DataByWellId[i].wellid,
                                        typeofwell = DataByWellId[i].typeofwell,
                                        other_well_type = DataByWellId[i].other_well_type,
                                        source_Ownership = DataByWellId[i].source_Ownership,
                                        source_Ownership_type = DataByWellId[i].source_Ownership_type,
                                        Diameter_of_Well = DataByWellId[i].Diameter_of_Well,
                                        welldepth = DataByWellId[i].welldepth,
                                        Height_of_Measuring_Point = DataByWellId[i].Height_of_Measuring_Point,
                                        gwl_reading = DataByWellId[i].gwl_reading,
                                        gwl_date = DataByWellId[i].gwl_date,
                                        well = DataByWellId[i].well,
                                        fyyear = DataByWellId[i].fyyear,
                                        fymonth = DataByWellId[i].fymonth,
                                        status = DataByWellId[i].status,
                                        wsp_fyyear = Year,
                                        ma_id = DataByWellId[i].id,
                                        wsp_save_date = DateTime.Now
                                    };
                                    WList.Add(obj);
                                    //ABE.obj_abhy_wsp_gwl.Add(obj);
                                    //ABE.SaveChanges();
                                }
                            }
                        }
                        //ABE.Entry(WList).State = EntityState.Deleted; 

                        ABE.obj_abhy_wsp_gwl.AddRange(WList);
                        ABE.SaveChanges();
                    }
                    return Json("Data saved successfully", JsonRequestBehavior.AllowGet);
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


        public ActionResult GetMisWaterLevelWSP()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();
                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    var Year = Session["year"].ToString();
                    //var PageNumber = result.PageNumber;
                    WaterLevel WL = new WaterLevel();
                    List<abhy_wsp_gwl> WList = new List<abhy_wsp_gwl>();
                    List<abhy_wsp_gwl> Final_data = new List<abhy_wsp_gwl>();
                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        Final_data = ABE.obj_abhy_wsp_gwl.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram && x.wsp_fyyear == Year).OrderBy(c => c.wellid).ToList();
                    }

                    if (Final_data.Count > 0)
                    {
                        var GroupByData = Final_data.GroupBy(x => x.wellid).ToList();
                        int j = 0;
                        foreach (var items in GroupByData.AsEnumerable())
                        {
                            ++j;
                            var item = items.First();
                            var DataByWellId = Final_data.Where(x => x.wellid == item.wellid).ToList();
                            for (int i = 0; i < DataByWellId.Count; i++)
                            {
                                if (i == 0)
                                {
                                    var obj = new abhy_wsp_gwl()
                                    {
                                        sno = j.ToString(),
                                        sitename = DataByWellId[i].sitename,
                                        locationdetails = DataByWellId[i].locationdetails,
                                        latitude = DataByWellId[i].latitude,
                                        longitude = DataByWellId[i].longitude,
                                        datetime = DataByWellId[i].datetime,
                                        wellid = DataByWellId[i].wellid,
                                        typeofwell = DataByWellId[i].typeofwell,
                                        other_well_type = DataByWellId[i].other_well_type,
                                        source_Ownership = DataByWellId[i].source_Ownership,
                                        source_Ownership_type = DataByWellId[i].source_Ownership_type,
                                        Diameter_of_Well = DataByWellId[i].Diameter_of_Well,
                                        welldepth = DataByWellId[i].welldepth,
                                        Height_of_Measuring_Point = DataByWellId[i].Height_of_Measuring_Point,
                                        gwl_reading = DataByWellId[i].gwl_reading,
                                        gwl_date = DataByWellId[i].gwl_date

                                    };
                                    WList.Add(obj);
                                }
                                else
                                {
                                    var obj = new abhy_wsp_gwl()
                                    {
                                        sno = "",
                                        sitename = DataByWellId[i].sitename,
                                        locationdetails = DataByWellId[i].locationdetails,
                                        latitude = DataByWellId[i].latitude,
                                        longitude = DataByWellId[i].longitude,
                                        datetime = DataByWellId[i].datetime,
                                        wellid = DataByWellId[i].wellid,
                                        typeofwell = DataByWellId[i].typeofwell,
                                        other_well_type = DataByWellId[i].other_well_type,
                                        source_Ownership = DataByWellId[i].source_Ownership,
                                        source_Ownership_type = DataByWellId[i].source_Ownership_type,
                                        Diameter_of_Well = DataByWellId[i].Diameter_of_Well,
                                        welldepth = DataByWellId[i].welldepth,
                                        Height_of_Measuring_Point = DataByWellId[i].Height_of_Measuring_Point,
                                        gwl_reading = DataByWellId[i].gwl_reading,
                                        gwl_date = DataByWellId[i].gwl_date
                                    };
                                    WList.Add(obj);
                                }
                            }
                        }
                    }
                    return Json(WList, JsonRequestBehavior.AllowGet);
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
        public ActionResult WaterQualityWSP()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();
                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    var Year = Session["year"].ToString();
                    //var PageNumber = result.PageNumber;


                    List<pv_quality> Final_data = new List<pv_quality>();
                    List<WaterQuality> WQList = new List<WaterQuality>();
                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        Final_data = AJE.obj_pv_quality.Where(x => x.State == State && x.District == Dist && x.Block == Block && x.GP == Gram).OrderBy(c => c.Well_ID).ToList();
                    }

                    if (Final_data.Count > 0)
                    {
                        var GroupByData = Final_data.GroupBy(x => x.Well_ID).ToList();
                        int j = 0;
                        foreach (var items in GroupByData.AsEnumerable())
                        {
                            ++j;
                            var item = items.First();
                            var DataByWellId = Final_data.Where(x => x.Well_ID == item.Well_ID).ToList();
                            for (int i = 0; i < DataByWellId.Count; i++)
                            {
                                if (i == 0)
                                {
                                    var obj = new WaterQuality()
                                    {
                                        sno = j,
                                        Village = DataByWellId[i].Village,
                                        Site_Name = DataByWellId[i].Site_Name,
                                        Latitude = DataByWellId[i].Latitude,
                                        Longitude = DataByWellId[i].Longitude,
                                        Years = DataByWellId[i].Years,
                                        Well_Type = DataByWellId[i].Well_Type,
                                        Source = DataByWellId[i].Source,
                                        Well_ID = DataByWellId[i].Well_ID,
                                        Well_Depth = DataByWellId[i].Well_Depth,
                                        Aquifer = DataByWellId[i].Aquifer,
                                        pH = DataByWellId[i].pH,
                                        EC = DataByWellId[i].EC,
                                        TDS = DataByWellId[i].TDS,
                                        TH = DataByWellId[i].TH,
                                        Calcium = DataByWellId[i].Calcium,
                                        Magnesium = DataByWellId[i].Magnesium,
                                        Sodium = DataByWellId[i].Sodium,
                                        Potassium = DataByWellId[i].Potassium,
                                        Carbonate = DataByWellId[i].Carbonate,
                                        Bicarbonate = DataByWellId[i].Bicarbonate,
                                        Sulphate = DataByWellId[i].Sulphate,
                                        Chloride = DataByWellId[i].Chloride,
                                        Fluoride = DataByWellId[i].Fluoride,
                                        Nitrate = DataByWellId[i].Nitrate
                                    };
                                    WQList.Add(obj);
                                }
                                else
                                {
                                    var obj = new WaterQuality()
                                    {
                                        sno = 0,
                                        Village = DataByWellId[i].Village,
                                        Site_Name = DataByWellId[i].Site_Name,
                                        Latitude = DataByWellId[i].Latitude,
                                        Longitude = DataByWellId[i].Longitude,
                                        Years = DataByWellId[i].Years,
                                        Well_Type = DataByWellId[i].Well_Type,
                                        Source = DataByWellId[i].Source,
                                        Well_ID = DataByWellId[i].Well_ID,
                                        Well_Depth = DataByWellId[i].Well_Depth,
                                        Aquifer = DataByWellId[i].Aquifer,
                                        pH = DataByWellId[i].pH,
                                        EC = DataByWellId[i].EC,
                                        TDS = DataByWellId[i].TDS,
                                        TH = DataByWellId[i].TH,
                                        Calcium = DataByWellId[i].Calcium,
                                        Magnesium = DataByWellId[i].Magnesium,
                                        Sodium = DataByWellId[i].Sodium,
                                        Potassium = DataByWellId[i].Potassium,
                                        Carbonate = DataByWellId[i].Carbonate,
                                        Bicarbonate = DataByWellId[i].Bicarbonate,
                                        Sulphate = DataByWellId[i].Sulphate,
                                        Chloride = DataByWellId[i].Chloride,
                                        Fluoride = DataByWellId[i].Fluoride,
                                        Nitrate = DataByWellId[i].Nitrate
                                    };
                                    WQList.Add(obj);
                                }
                            }
                        }
                    }

                    return Json(WQList, JsonRequestBehavior.AllowGet);
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


        public ActionResult SavedWaterQualityWSP()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();
                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    var Year = Session["year"].ToString();
                    List<pv_quality> Final_data = new List<pv_quality>();
                    List<abhy_wsp_gwq> WQList = new List<abhy_wsp_gwq>();
                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        Final_data = AJE.obj_pv_quality.Where(x => x.State == State && x.District == Dist && x.Block == Block && x.GP == Gram).OrderBy(c => c.Well_ID).ToList();
                    }
                    if (Final_data.Count > 0)
                    {
                        var mis_wq_data = ABE.obj_abhy_wsp_gwq.Where(x => x.GP == Gram && x.wsp_fyyear == Year).ToList();
                        if (mis_wq_data.Count != 0)
                        {
                            ABE.obj_abhy_wsp_gwq.RemoveRange(mis_wq_data);
                            ABE.SaveChanges();
                        }
                        var GroupByData = Final_data.GroupBy(x => x.Well_ID).ToList();
                        int j = 0;
                        foreach (var items in GroupByData.AsEnumerable())
                        {
                            ++j;
                            var item = items.First();
                            var DataByWellId = Final_data.Where(x => x.Well_ID == item.Well_ID).ToList();
                            for (int i = 0; i < DataByWellId.Count; i++)
                            {
                                if (i == 0)
                                {
                                    var obj = new abhy_wsp_gwq()
                                    {
                                        sno = j.ToString(),
                                        State = DataByWellId[i].State,
                                        District = DataByWellId[i].District,
                                        Block = DataByWellId[i].Block,
                                        GP = DataByWellId[i].GP,
                                        Village = DataByWellId[i].Village,
                                        Site_Name = DataByWellId[i].Site_Name,
                                        Latitude = DataByWellId[i].Latitude,
                                        Longitude = DataByWellId[i].Longitude,
                                        Years = DataByWellId[i].Years,
                                        Well_Type = DataByWellId[i].Well_Type,
                                        Source = DataByWellId[i].Source,
                                        Well_ID = DataByWellId[i].Well_ID,
                                        Well_Depth = DataByWellId[i].Well_Depth,
                                        Aquifer = DataByWellId[i].Aquifer,
                                        pH = DataByWellId[i].pH,
                                        EC = DataByWellId[i].EC,
                                        TDS = DataByWellId[i].TDS,
                                        TH = DataByWellId[i].TH,
                                        Calcium = DataByWellId[i].Calcium,
                                        Magnesium = DataByWellId[i].Magnesium,
                                        Sodium = DataByWellId[i].Sodium,
                                        Potassium = DataByWellId[i].Potassium,
                                        Carbonate = DataByWellId[i].Carbonate,
                                        Bicarbonate = DataByWellId[i].Bicarbonate,
                                        Sulphate = DataByWellId[i].Sulphate,
                                        Chloride = DataByWellId[i].Chloride,
                                        Fluoride = DataByWellId[i].Fluoride,
                                        Nitrate = DataByWellId[i].Nitrate,
                                        wsp_fyyear = Year,
                                        ma_id = DataByWellId[i].id,
                                        wsp_save_date = DateTime.Now
                                    };
                                    WQList.Add(obj);
                                }
                                else
                                {
                                    var obj = new abhy_wsp_gwq()
                                    {
                                        sno = "",
                                        State = DataByWellId[i].State,
                                        District = DataByWellId[i].District,
                                        Block = DataByWellId[i].Block,
                                        GP = DataByWellId[i].GP,
                                        Village = DataByWellId[i].Village,
                                        Site_Name = DataByWellId[i].Site_Name,
                                        Latitude = DataByWellId[i].Latitude,
                                        Longitude = DataByWellId[i].Longitude,
                                        Years = DataByWellId[i].Years,
                                        Well_Type = DataByWellId[i].Well_Type,
                                        Source = DataByWellId[i].Source,
                                        Well_ID = DataByWellId[i].Well_ID,
                                        Well_Depth = DataByWellId[i].Well_Depth,
                                        Aquifer = DataByWellId[i].Aquifer,
                                        pH = DataByWellId[i].pH,
                                        EC = DataByWellId[i].EC,
                                        TDS = DataByWellId[i].TDS,
                                        TH = DataByWellId[i].TH,
                                        Calcium = DataByWellId[i].Calcium,
                                        Magnesium = DataByWellId[i].Magnesium,
                                        Sodium = DataByWellId[i].Sodium,
                                        Potassium = DataByWellId[i].Potassium,
                                        Carbonate = DataByWellId[i].Carbonate,
                                        Bicarbonate = DataByWellId[i].Bicarbonate,
                                        Sulphate = DataByWellId[i].Sulphate,
                                        Chloride = DataByWellId[i].Chloride,
                                        Fluoride = DataByWellId[i].Fluoride,
                                        Nitrate = DataByWellId[i].Nitrate,
                                        wsp_fyyear = Year,
                                        ma_id = DataByWellId[i].id,
                                        wsp_save_date = DateTime.Now
                                    };
                                    WQList.Add(obj);
                                }
                            }
                        }
                        ABE.obj_abhy_wsp_gwq.AddRange(WQList);
                        ABE.SaveChanges();
                    }
                    return Json("Data saved successfully", JsonRequestBehavior.AllowGet);
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

        public ActionResult GetMISWaterQualityWSP()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();
                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    var Year = Session["year"].ToString();
                    //var PageNumber = result.PageNumber;
                    List<abhy_wsp_gwq> Final_data = new List<abhy_wsp_gwq>();
                    List<abhy_wsp_gwq> WQList = new List<abhy_wsp_gwq>();
                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        Final_data = ABE.obj_abhy_wsp_gwq.Where(x => x.State == State && x.District == Dist && x.Block == Block && x.GP == Gram && x.wsp_fyyear == Year).OrderBy(c => c.Well_ID).ToList();
                    }

                    if (Final_data.Count > 0)
                    {
                        var GroupByData = Final_data.GroupBy(x => x.Well_ID).ToList();
                        int j = 0;
                        foreach (var items in GroupByData.AsEnumerable())
                        {
                            ++j;
                            var item = items.First();
                            var DataByWellId = Final_data.Where(x => x.Well_ID == item.Well_ID).ToList();
                            for (int i = 0; i < DataByWellId.Count; i++)
                            {
                                if (i == 0)
                                {
                                    var obj = new abhy_wsp_gwq()
                                    {
                                        sno = j.ToString(),
                                        Village = DataByWellId[i].Village,
                                        Site_Name = DataByWellId[i].Site_Name,
                                        Latitude = DataByWellId[i].Latitude,
                                        Longitude = DataByWellId[i].Longitude,
                                        Years = DataByWellId[i].Years,
                                        Well_Type = DataByWellId[i].Well_Type,
                                        Source = DataByWellId[i].Source,
                                        Well_ID = DataByWellId[i].Well_ID,
                                        Well_Depth = DataByWellId[i].Well_Depth,
                                        Aquifer = DataByWellId[i].Aquifer,
                                        pH = DataByWellId[i].pH,
                                        EC = DataByWellId[i].EC,
                                        TDS = DataByWellId[i].TDS,
                                        TH = DataByWellId[i].TH,
                                        Calcium = DataByWellId[i].Calcium,
                                        Magnesium = DataByWellId[i].Magnesium,
                                        Sodium = DataByWellId[i].Sodium,
                                        Potassium = DataByWellId[i].Potassium,
                                        Carbonate = DataByWellId[i].Carbonate,
                                        Bicarbonate = DataByWellId[i].Bicarbonate,
                                        Sulphate = DataByWellId[i].Sulphate,
                                        Chloride = DataByWellId[i].Chloride,
                                        Fluoride = DataByWellId[i].Fluoride,
                                        Nitrate = DataByWellId[i].Nitrate
                                    };
                                    WQList.Add(obj);
                                }
                                else
                                {
                                    var obj = new abhy_wsp_gwq()
                                    {
                                        sno = "",
                                        Village = DataByWellId[i].Village,
                                        Site_Name = DataByWellId[i].Site_Name,
                                        Latitude = DataByWellId[i].Latitude,
                                        Longitude = DataByWellId[i].Longitude,
                                        Years = DataByWellId[i].Years,
                                        Well_Type = DataByWellId[i].Well_Type,
                                        Source = DataByWellId[i].Source,
                                        Well_ID = DataByWellId[i].Well_ID,
                                        Well_Depth = DataByWellId[i].Well_Depth,
                                        Aquifer = DataByWellId[i].Aquifer,
                                        pH = DataByWellId[i].pH,
                                        EC = DataByWellId[i].EC,
                                        TDS = DataByWellId[i].TDS,
                                        TH = DataByWellId[i].TH,
                                        Calcium = DataByWellId[i].Calcium,
                                        Magnesium = DataByWellId[i].Magnesium,
                                        Sodium = DataByWellId[i].Sodium,
                                        Potassium = DataByWellId[i].Potassium,
                                        Carbonate = DataByWellId[i].Carbonate,
                                        Bicarbonate = DataByWellId[i].Bicarbonate,
                                        Sulphate = DataByWellId[i].Sulphate,
                                        Chloride = DataByWellId[i].Chloride,
                                        Fluoride = DataByWellId[i].Fluoride,
                                        Nitrate = DataByWellId[i].Nitrate
                                    };
                                    WQList.Add(obj);
                                }
                            }
                        }
                    }

                    return Json(WQList, JsonRequestBehavior.AllowGet);
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
        public ActionResult get_approved_status()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var Email = Session["Email"].ToString();
                    var OfficerName = Session["UserName"].ToString();
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();
                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    var Year = Session["year"].ToString();
                    //var Month = Session["month"].ToString();
                    //abhy_wsp_approved_status details = new abhy_wsp_approved_status();
                    abhy_wsp_approved_status data = new abhy_wsp_approved_status();
                    if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null && Gram != "" && Gram != null && Year != "" && Year != null)
                    {
                        data = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.year == Year).FirstOrDefault();
                    }
                    if (data != null)
                    {
                        var status_id = Convert.ToInt32(data.status_id);
                        ViewBag.status_id = Convert.ToInt32(data.status_id);
                        return Json(status_id, JsonRequestBehavior.AllowGet);
                    }
                    else
                    {
                        return Json("null", JsonRequestBehavior.AllowGet);
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

        public bool CheckValidImage(HttpPostedFileBase File)
        {
            bool isvalid = false;
            string ext = System.IO.Path.GetExtension(File.FileName).Remove(0, 1);
            if (ext.ToUpper() != "JPG" && ext.ToUpper() != "JPEG" && ext.ToUpper() != "PNG")
            {
                return isvalid;
            }
            return isvalid;
        }
        [HttpPost]
        public ActionResult Location_map_Image_Uplaod(HttpPostedFileBase Location_map_Image_Uplaod, string state_name, string district_name, string block_name, string gpname, string year)
        {
            DateTime now = DateTime.Now;
            int month = now.Month;

            // Get the name of the month
            string monthName = CultureInfo.CurrentCulture.DateTimeFormat.GetMonthName(month);
            Session["Images_Upload"] = "";
            var response = "";
            var userid = Convert.ToInt32(Session["UserId"]);
            var State = state_name;
            var Dist = district_name;
            var Block = block_name;
            var Gram = gpname;
            var Month = monthName;
            var Year = year;
            var order_by_month = Get_Month_Number(Month);


            var Details = ABE.obj_abhy_wsp_gram_images.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year).ToList();
            var Obj = new abhy_wsp_gram_images();
            string _imgname = string.Empty;
            Malicious_File_Upload_Restriction obj_Validate = new Malicious_File_Upload_Restriction();
            string allowed_file_format = "jpg,png,jpeg";
            bool flag = obj_Validate.CheckValidFile(Location_map_Image_Uplaod, allowed_file_format);

            if (flag == false)
            {
                response = "Your Upload file has Not valid File, Please Upload proper file";
                return Json(response);
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
                        //}
                        string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                        string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\WspMaps\\" + Gram + "\\");

                        if (!Directory.Exists(path))
                        {
                            Directory.CreateDirectory(path);
                        }
                        path = path + Location_map_Image_Uplaod.FileName;
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
                            var File_path = "/Ataljalimages/WspMaps/" + Gram + "/" + Location_map_Image_Uplaod.FileName;
                            Data.gpimage1 = File_path;
                            Data.gpimage1_filename = Location_map_Image_Uplaod.FileName;
                            Data.month = Month;
                            Data.year = year;
                            Data.month_ordery_by = order_by_month;
                            ABE.Entry(Data).State = EntityState.Modified;
                            ABE.SaveChanges();
                            response = "Location Map Image Upload Successfully";
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
                            string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\WspMaps\\" + Gram + "\\");
                            if (!Directory.Exists(path))
                            {
                                Directory.CreateDirectory(path);
                            }
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
                                var File_path = "/Ataljalimages/WspMaps/" + Gram + "/" + Location_map_Image_Uplaod.FileName;
                                Obj.gpimage1 = File_path;
                                Obj.gpimage1_filename = Location_map_Image_Uplaod.FileName;
                                Obj.month = Month;
                                Obj.year = year;
                                Obj.month_ordery_by = order_by_month;
                                var TodayDate1 = DateTime.Now.ToString();
                                var Datea = TodayDate1.Split('/', ' ', '-');
                                var Today1 = Datea[1] + '/' + Datea[0] + '/' + Datea[2];
                                Obj.datetime = Today1;
                                ABE.obj_abhy_wsp_gram_images.Add(Obj);
                                ABE.SaveChanges();
                                response = "Location Map Image Upload Successfully";
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

        public ActionResult Watershed_map_Image_Uplaod(HttpPostedFileBase Watershed_map_Image_Uplaod, string state_name, string district_name, string block_name, string gpname, string year)
        {
            DateTime now = DateTime.Now;
            int month = now.Month;

            // Get the name of the month
            string monthName = CultureInfo.CurrentCulture.DateTimeFormat.GetMonthName(month);
            var response = "";
            Session["Images_Upload"] = "";
            var userid = Convert.ToInt32(Session["UserId"]);
            var State = state_name;
            var Dist = district_name;
            var Block = block_name;
            var Gram = gpname;

            var Month = monthName;
            var Year = year;
            var order_by_month = Get_Month_Number(Month);

            var Details = ABE.obj_abhy_wsp_gram_images.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == year).ToList();
            var Obj = new abhy_wsp_gram_images();

            string _imgname = string.Empty;
            Malicious_File_Upload_Restriction obj_Validate = new Malicious_File_Upload_Restriction();
            string allowed_file_format = "jpg,png,jpeg";
            bool flag = obj_Validate.CheckValidFile(Watershed_map_Image_Uplaod, allowed_file_format);
            if (flag == false)
            {
                //Session["Images_Upload"] = "Your Upload file has Not valid File, Please Upload proper file";
                //return RedirectToAction("WSPgram", "Wsp_new");
                response = "Your Upload file has Not valid File, Please Upload proper file";
                return Json(response);
            }
            if (Watershed_map_Image_Uplaod != null)
            {
                if (Details.Count == 1)
                {
                    var Data = Details.SingleOrDefault();

                    string fname = Watershed_map_Image_Uplaod.FileName;

                    string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                    string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\WatershedMap\\" + Gram + "\\");
                    if (!Directory.Exists(path))
                    {
                        Directory.CreateDirectory(path);
                    }
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
                        var File_path = "/Ataljalimages/WatershedMap/" + Gram + "/" + fname;
                        Data.gpimage2 = File_path;
                        Data.gpimage2_filename = fname;
                        Data.month = Month;
                        Data.year = year;
                        Data.month_ordery_by = order_by_month;
                        ABE.Entry(Data).State = EntityState.Modified;
                        ABE.SaveChanges();
                        response = "Watershed Map Image Upload Successfully";
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
                        string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\WatershedMap\\" + Gram + "\\");
                        if (!Directory.Exists(path))
                        {
                            Directory.CreateDirectory(path);
                        }
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
                            var File_path = "/Ataljalimages/WatershedMap/" + Gram + "/" + fname;
                            Obj.gpimage2 = File_path;
                            Obj.gpimage2_filename = fname;
                            Obj.month = Month;
                            Obj.year = year;
                            Obj.month_ordery_by = order_by_month;
                            var TodayDate1 = DateTime.Now.ToString();
                            var Datea = TodayDate1.Split('/', ' ', '-');
                            var Today1 = Datea[1] + '/' + Datea[0] + '/' + Datea[2];
                            Obj.datetime = Today1;
                            ABE.obj_abhy_wsp_gram_images.Add(Obj);
                            ABE.SaveChanges();
                            response = "Watershed Map Image Upload Successfully";
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

        public ActionResult Aquifer_map_Image_Uplaod(HttpPostedFileBase Aquifer_map_Image_Uplaod, string state_name, string district_name, string block_name, string gpname, string year)
        {
            DateTime now = DateTime.Now;
            int month = now.Month;

            // Get the name of the month
            string monthName = CultureInfo.CurrentCulture.DateTimeFormat.GetMonthName(month);
            var response = "";
            Session["Images_Upload"] = "";
            var userid = Convert.ToInt32(Session["UserId"]);
            var State = state_name;
            var Dist = district_name;
            var Block = block_name;
            var Gram = gpname;
            var Month = monthName;
            var Year = year;
            var order_by_month = Get_Month_Number(Month);

            var Details = ABE.obj_abhy_wsp_gram_images.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == year).ToList();
            var Obj = new abhy_wsp_gram_images();
            string _imgname = string.Empty;
            Malicious_File_Upload_Restriction obj_Validate = new Malicious_File_Upload_Restriction();
            string allowed_file_format = "jpg,png,jpeg";
            bool flag = obj_Validate.CheckValidFile(Aquifer_map_Image_Uplaod, allowed_file_format);
            if (flag == false)
            {
                response = "Your Upload file has Not valid File, Please Upload proper file";
                return Json(response);
                //return Json("Your Upload file has Not valid File, Please Upload proper file", JsonRequestBehavior.AllowGet);
            }
            if (Details.Count == 1)
            {
                var Data = Details.SingleOrDefault();

                if (Aquifer_map_Image_Uplaod != null)
                {
                    if (Aquifer_map_Image_Uplaod.FileName != null)
                    {

                        string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                        string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\AquiferMap\\" + Gram + "\\");
                        if (!Directory.Exists(path))
                        {
                            Directory.CreateDirectory(path);
                        }
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
                            // File_path = path.Replace("D:\\Ataljal_grievnce\\", "http://54.221.131.231:8014/ataljalimages/");
                            var File_path = "/Ataljalimages/AquiferMap/" + Gram + "/" + Aquifer_map_Image_Uplaod.FileName;
                            Data.gpimage3 = File_path;
                            Data.gpimage3_filename = Aquifer_map_Image_Uplaod.FileName;
                            Data.month = Month;
                            Data.year = year;
                            Data.month_ordery_by = order_by_month;
                            ABE.Entry(Data).State = EntityState.Modified;
                            ABE.SaveChanges();
                            response = "Aquifer Map Image Upload Successfully";


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
                            string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\AquiferMap\\" + Gram + "\\");
                            if (!Directory.Exists(path))
                            {
                                Directory.CreateDirectory(path);
                            }
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

                                var File_path = "/Ataljalimages/AquiferMap/" + Gram + "/" + Aquifer_map_Image_Uplaod.FileName;
                                Obj.gpimage3 = File_path;
                                Obj.gpimage3_filename = Aquifer_map_Image_Uplaod.FileName;
                                var TodayDate1 = DateTime.Now.ToString();
                                var Datea = TodayDate1.Split('/', ' ', '-');
                                var Today1 = Datea[1] + '/' + Datea[0] + '/' + Datea[2];
                                Obj.datetime = Today1;
                                Obj.month = Month;
                                Obj.year = year;
                                Obj.month_ordery_by = order_by_month;
                                ABE.obj_abhy_wsp_gram_images.Add(Obj);
                                ABE.SaveChanges();
                                response = "Aquifer Map Image Upload Successfully";
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
            var Details = ABE.obj_abhy_wsp_gram_images.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();
            var Obj = new abhy_wsp_gram_images();
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

                        string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                        string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\DrainageMap\\");
                        if (!Directory.Exists(path))
                        {
                            Directory.CreateDirectory(path);
                        }
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
                            var File_path = "/Ataljalimages/DrainageMap/" + Drainage_map_Image_Uplaod.FileName;
                            Data.gpimage4 = File_path;
                            Data.gpimage4_filename = Drainage_map_Image_Uplaod.FileName;
                            ABE.Entry(Data).State = EntityState.Modified;
                            ABE.SaveChanges();
                            response = "Drainage Map Image Upload Successfully";
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
                            string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\DrainageMap\\");
                            if (!Directory.Exists(path))
                            {
                                Directory.CreateDirectory(path);
                            }
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
                                var File_path = "/Ataljalimages/DrainageMap/" + Drainage_map_Image_Uplaod.FileName;
                                Obj.gpimage4 = File_path;
                                Obj.gpimage4_filename = Drainage_map_Image_Uplaod.FileName;
                                var TodayDate1 = DateTime.Now.ToString();
                                var Datea = TodayDate1.Split('/', ' ', '-');
                                var Today1 = Datea[1] + '/' + Datea[0] + '/' + Datea[2];
                                Obj.datetime = Today1;
                                ABE.obj_abhy_wsp_gram_images.Add(Obj);
                                ABE.SaveChanges();
                                response = "Drainage Map Image Upload Successfully";
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
        public ActionResult Delete_avail_upload(string data)
        {
            if (Session["userid"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<dynamic>(data);

                    int id = Convert.ToInt32(result["IDD"]);

                    var DEtails = ABE.obj_abhy_wsp_wateravailbility_new.Where(x => x.id == id).ToList();
                    DEtails[0].avail_upload_file = "";
                    DEtails[0].avail_upload_dir = "";

                    ABE.Entry(DEtails[0]).State = EntityState.Modified;
                    ABE.SaveChanges();

                    return Json("Deleted", JsonRequestBehavior.AllowGet);

                }


                catch (Exception ex)
                {
                    return Json("error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("logout", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult get_remarks_status()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var Email = Session["Email"].ToString();
                    var OfficerName = Session["UserName"].ToString();
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();
                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    var Year = Session["year"].ToString();
                    //var Month = Session["month"].ToString();
                    //abhy_wsp_approved_status details = new abhy_wsp_approved_status();
                    abhy_wsp_approved_status data = new abhy_wsp_approved_status();
                    if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null && Gram != "" && Gram != null && Year != "" && Year != null)
                    {
                        data = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.year == Year).FirstOrDefault();
                    }
                    return Json(data, JsonRequestBehavior.AllowGet);
                }
                catch (Exception Ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }

            }
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }

        }
        [HttpPost]
        public ActionResult GetInnovativeArea(string innovative_measures)
        {
            var State = Session["gstate"].ToString();
            var Dist = Session["gdist"].ToString();
            var Block = Session["gblock"].ToString();
            var Gram = Session["ggram"].ToString();
            var Year = Session["year"].ToString();
            Decimal TotalAnyArea = 0;
            string innovative_measure = innovative_measures;
            if (innovative_measures.Contains("-") == true)
            {
                string[] innovative_meas = innovative_measures.Split('-');
                innovative_measure = "Other";
            }

            var MetaId = ABE.obj_abhy_wsp_demand_meta.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.data_year == Year).FirstOrDefault();
            if (MetaId != null)
            {
                var AnyArea = ABE.obj_abhy_wsp_demand_anyother.Where(x => x.meta_id == MetaId.id && x.innovative_measures == innovative_measure).ToList();
                if (AnyArea.Count != 0)
                {
                    TotalAnyArea = AnyArea.Sum(x => Convert.ToDecimal(x.area_irrigation));
                }
            }
            return Json(TotalAnyArea, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult ChackAreaIsEqualToFundAreaSp(string total_area_proposed_sprinkler)
        {
            var State = Session["gstate"].ToString();
            var Dist = Session["gdist"].ToString();
            var Block = Session["gblock"].ToString();
            var Gram = Session["ggram"].ToString();
            var Year = Session["year"].ToString();

            string msg = "";
            Decimal TotalSpArea = 0;
            if (total_area_proposed_sprinkler != "")
            {
                TotalSpArea = Convert.ToDecimal(total_area_proposed_sprinkler);
                List<abhy_wsp_demand_fund_details> SpFundArea = new List<abhy_wsp_demand_fund_details>();

                var MetaId = ABE.obj_abhy_wsp_demand_meta.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.data_year == Year).FirstOrDefault();
                if (MetaId != null)
                {
                    var SpArea = ABE.obj_abhy_wsp_demand_sprinkler.Where(x => x.meta_id == MetaId.id).ToList();
                    if (SpArea.Count != 0)
                    {
                        //Decimal TotalSpArea = SpArea.Sum(x => Convert.ToDecimal(x.area_proposed));
                        SpFundArea = ABE.obj_abhy_wsp_demand_fund_details.Where(x => x.meta_id == MetaId.id && x.fund_for == "Sprinkler").ToList();
                        if (SpFundArea.Count != 0)
                        {
                            Decimal TotalSpFundArea = SpFundArea.Sum(x => Convert.ToDecimal(x.area_proposed));
                            if (TotalSpArea != TotalSpFundArea)
                            {
                                msg = "Area Proposed for Sprinkler (in Fund)(ha) should be equal to Total Area Proposed for Sprinkler (ha)";
                                return Json(msg, JsonRequestBehavior.AllowGet);
                            }
                        }
                        else
                        {
                            msg = "Area Proposed for Sprinkler (in Fund)(ha) should be equal to Total Area Proposed for Sprinkler (ha)";
                            return Json(msg, JsonRequestBehavior.AllowGet);
                        }
                    }
                    if (SpArea.Count == 0 && SpFundArea.Count == 0)
                    {
                        msg = "Success";
                        return Json(msg, JsonRequestBehavior.AllowGet);
                    }
                }
            }
            msg = "Success";
            return Json(msg, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult ChackAreaIsEqualToFundAreaDrip(string total_area_proposed_drip)
        {
            var State = Session["gstate"].ToString();
            var Dist = Session["gdist"].ToString();
            var Block = Session["gblock"].ToString();
            var Gram = Session["ggram"].ToString();
            var Year = Session["year"].ToString();
            string msg = "";
            Decimal TotalDripArea = 0;
            if (total_area_proposed_drip != "")
            {
                TotalDripArea = Convert.ToDecimal(total_area_proposed_drip);


                List<abhy_wsp_demand_fund_details> DripFundArea = new List<abhy_wsp_demand_fund_details>();
                var MetaId = ABE.obj_abhy_wsp_demand_meta.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.data_year == Year).FirstOrDefault();
                if (MetaId != null)
                {

                    var DripArea = ABE.obj_abhy_wsp_demand_drip.Where(x => x.meta_id == MetaId.id).ToList();
                    if (DripArea.Count != 0)
                    {
                        //Decimal TotalDripArea = DripArea.Sum(x => Convert.ToDecimal(x.area_proposed));
                        DripFundArea = ABE.obj_abhy_wsp_demand_fund_details.Where(x => x.meta_id == MetaId.id && x.fund_for == "Drip").ToList();
                        if (DripFundArea.Count != 0)
                        {
                            Decimal TotalDripFundArea = DripFundArea.Sum(x => Convert.ToDecimal(x.area_proposed));
                            if (TotalDripArea != TotalDripFundArea)
                            {
                                msg = "Area Proposed for Drip (in Fund)(ha) should be equal to Total Area Proposed for Drip (ha)";
                                return Json(msg, JsonRequestBehavior.AllowGet);
                            }
                        }
                        else
                        {
                            msg = "Area Proposed for Drip (in Fund)(ha) should be equal to Total Area Proposed for Drip (ha)";
                            return Json(msg, JsonRequestBehavior.AllowGet);
                        }
                    }
                    if (DripArea.Count == 0 && DripFundArea.Count == 0)
                    {
                        msg = "Success";
                        return Json(msg, JsonRequestBehavior.AllowGet);
                    }
                }
            }
            msg = "Success";
            return Json(msg, JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public ActionResult ChackAreaIsEqualToFundAreaPipe(string total_area_proposed_pipe)
        {
            var State = Session["gstate"].ToString();
            var Dist = Session["gdist"].ToString();
            var Block = Session["gblock"].ToString();
            var Gram = Session["ggram"].ToString();
            var Year = Session["year"].ToString();
            Decimal TotalPipeArea = 0;
            string msg = "";
            if (total_area_proposed_pipe != "")
            {
                TotalPipeArea = Convert.ToDecimal(total_area_proposed_pipe);

                List<abhy_wsp_demand_fund_details> PipeFundArea = new List<abhy_wsp_demand_fund_details>();
                var MetaId = ABE.obj_abhy_wsp_demand_meta.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.data_year == Year).FirstOrDefault();
                if (MetaId != null)
                {

                    var PipeArea = ABE.obj_abhy_wsp_demand_pipeline.Where(x => x.meta_id == MetaId.id).ToList();
                    if (PipeArea.Count != 0)
                    {
                        //Decimal TotalPipeArea = PipeArea.Sum(x => Convert.ToDecimal(x.area_proposed));
                        PipeFundArea = ABE.obj_abhy_wsp_demand_fund_details.Where(x => x.meta_id == MetaId.id && x.fund_for == "UG Pipelines").ToList();
                        if (PipeFundArea.Count != 0)
                        {
                            Decimal TotalPipeFundArea = PipeFundArea.Sum(x => Convert.ToDecimal(x.area_proposed));
                            if (TotalPipeArea != TotalPipeFundArea)
                            {
                                msg = "Area Proposed for Pipelines (in Fund)(ha) should be equal to Total Area Proposed for Pipelines (ha)";
                                return Json(msg, JsonRequestBehavior.AllowGet);
                            }
                        }
                        else
                        {
                            msg = "Area Proposed for Pipelines (in Fund)(ha) should be equal to Total Area Proposed for Pipelines (ha)";
                            return Json(msg, JsonRequestBehavior.AllowGet);
                        }
                    }
                    if (PipeArea.Count == 0 && PipeFundArea.Count == 0)
                    {
                        msg = "Success";
                        return Json(msg, JsonRequestBehavior.AllowGet);
                    }
                }
            }
            msg = "Success";
            return Json(msg, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult ChackAreaIsEqualToFundAreaCrop(string total_area_proposed_crop)
        {
            var State = Session["gstate"].ToString();
            var Dist = Session["gdist"].ToString();
            var Block = Session["gblock"].ToString();
            var Gram = Session["ggram"].ToString();
            var Year = Session["year"].ToString();
            Decimal TotalCropArea = 0;
            string msg = "";
            if (total_area_proposed_crop != "")
            {
                TotalCropArea = Convert.ToDecimal(total_area_proposed_crop);

                List<abhy_wsp_demand_fund_details> CropFundArea = new List<abhy_wsp_demand_fund_details>();
                var MetaId = ABE.obj_abhy_wsp_demand_meta.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.data_year == Year).FirstOrDefault();
                if (MetaId != null)
                {
                    var CropArea = ABE.obj_abhy_wsp_demand_change_crop.Where(x => x.meta_id == MetaId.id).ToList();
                    if (CropArea.Count != 0)
                    {
                        //Decimal TotalCropArea = CropArea.Sum(x => Convert.ToDecimal(x.area_ch));
                        CropFundArea = ABE.obj_abhy_wsp_demand_fund_details.Where(x => x.meta_id == MetaId.id && x.fund_for == "Crop Diversification").ToList();
                        if (CropFundArea.Count != 0)
                        {
                            Decimal TotalCropFundArea = CropFundArea.Sum(x => Convert.ToDecimal(x.area_proposed));
                            if (TotalCropArea != TotalCropFundArea)
                            {
                                msg = "Area Proposed for Crop Diversification (in Fund)(ha) should be equal to Total Area Proposed for Crop Diversification (ha)";
                                return Json(msg, JsonRequestBehavior.AllowGet);
                            }
                        }
                        else
                        {
                            msg = "Area Proposed for Crop Diversification (in Fund)(ha) should be equal to Total Area Proposed for Crop Diversification (ha)";
                            return Json(msg, JsonRequestBehavior.AllowGet);
                        }
                    }

                    if (CropArea.Count == 0 && CropFundArea.Count == 0)
                    {
                        msg = "Success";
                        return Json(msg, JsonRequestBehavior.AllowGet);
                    }
                }
            }
            msg = "Success";
            return Json(msg, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult ChackAreaIsEqualToFundAreaAny(string total_crop_area_anyother)
        {
            var State = Session["gstate"].ToString();
            var Dist = Session["gdist"].ToString();
            var Block = Session["gblock"].ToString();
            var Gram = Session["ggram"].ToString();
            var Year = Session["year"].ToString();
            string msg = "";
            //string CheckDemandArea = ChackAreaIsEqualToFundAreaString();
            //if (CheckDemandArea != "Success")
            //{
            //    return Json(CheckDemandArea, JsonRequestBehavior.AllowGet);
            //}
            Decimal TotalAnyArea = 0;
            if (total_crop_area_anyother != "")
            {
                TotalAnyArea = Convert.ToDecimal(total_crop_area_anyother);

                List<abhy_wsp_demand_fund_details> AnyFundArea = new List<abhy_wsp_demand_fund_details>();
                var MetaId = ABE.obj_abhy_wsp_demand_meta.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.data_year == Year).FirstOrDefault();
                if (MetaId != null)
                {
                    var AnyArea = ABE.obj_abhy_wsp_demand_anyother.Where(x => x.meta_id == MetaId.id).ToList();
                    if (AnyArea.Count != 0)
                    {
                        //Decimal TotalAnyArea = AnyArea.Sum(x => Convert.ToDecimal(x.area_irrigation));
                        AnyFundArea = ABE.obj_abhy_wsp_demand_fund_details.Where(x => x.meta_id == MetaId.id && x.fund_for == "Other Measures").ToList();
                        if (AnyFundArea.Count != 0)
                        {
                            Decimal TotalAnyFundArea = AnyFundArea.Sum(x => Convert.ToDecimal(x.area_proposed));
                            if (TotalAnyArea != TotalAnyFundArea)
                            {
                                msg = "Area Proposed for Any Other (in Fund)(ha) should be equal to Total Area Proposed for Any Other (ha)";
                                return Json(msg, JsonRequestBehavior.AllowGet);
                            }
                        }
                        else
                        {
                            msg = "Area Proposed for Any Other (in Fund)(ha) should be equal to Total Area Proposed for Any Other (ha)";
                            return Json(msg, JsonRequestBehavior.AllowGet);
                        }
                    }

                    if (AnyArea.Count == 0 && AnyFundArea.Count == 0)
                    {
                        msg = "Success";
                        return Json(msg, JsonRequestBehavior.AllowGet);
                    }
                }
            }
            msg = "Success";
            return Json(msg, JsonRequestBehavior.AllowGet);
        }
        public string ChackAreaIsEqualToFundAreaString()
        {
            var State = Session["gstate"].ToString();
            var Dist = Session["gdist"].ToString();
            var Block = Session["gblock"].ToString();
            var Gram = Session["ggram"].ToString();
            var Year = Session["year"].ToString();
            string msg = "";
            List<abhy_wsp_demand_fund_details> SpFundArea = new List<abhy_wsp_demand_fund_details>();
            List<abhy_wsp_demand_fund_details> DripFundArea = new List<abhy_wsp_demand_fund_details>();
            List<abhy_wsp_demand_fund_details> PipeFundArea = new List<abhy_wsp_demand_fund_details>();
            List<abhy_wsp_demand_fund_details> CropFundArea = new List<abhy_wsp_demand_fund_details>();
            List<abhy_wsp_demand_fund_details> AnyFundArea = new List<abhy_wsp_demand_fund_details>();

            var MetaId = ABE.obj_abhy_wsp_demand_meta.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.data_year == Year).FirstOrDefault();
            if (MetaId != null)
            {
                var SpArea = ABE.obj_abhy_wsp_demand_sprinkler.Where(x => x.meta_id == MetaId.id).ToList();
                if (SpArea.Count != 0)
                {
                    Decimal TotalSpArea = SpArea.Sum(x => Convert.ToDecimal(x.area_proposed));
                    SpFundArea = ABE.obj_abhy_wsp_demand_fund_details.Where(x => x.meta_id == MetaId.id && x.fund_for == "Sprinkler").ToList();
                    if (SpFundArea.Count != 0)
                    {
                        Decimal TotalSpFundArea = SpFundArea.Sum(x => Convert.ToDecimal(x.area_proposed));
                        if (TotalSpArea != TotalSpFundArea)
                        {
                            msg = "Area Proposed for Sprinkler (in Fund)(ha) should be equal to Total Area Proposed for Sprinkler (ha)";
                            return msg;
                        }
                    }
                    else
                    {
                        msg = "Area Proposed for Sprinkler (in Fund)(ha) should be equal to Total Area Proposed for Sprinkler (ha)";
                        return msg;
                    }
                }

                var DripArea = ABE.obj_abhy_wsp_demand_drip.Where(x => x.meta_id == MetaId.id).ToList();
                if (DripArea.Count != 0)
                {
                    Decimal TotalDripArea = DripArea.Sum(x => Convert.ToDecimal(x.area_proposed));
                    DripFundArea = ABE.obj_abhy_wsp_demand_fund_details.Where(x => x.meta_id == MetaId.id && x.fund_for == "Drip").ToList();
                    if (DripFundArea.Count != 0)
                    {
                        Decimal TotalDripFundArea = DripFundArea.Sum(x => Convert.ToDecimal(x.area_proposed));
                        if (TotalDripArea != TotalDripFundArea)
                        {
                            msg = "Area Proposed for Drip (in Fund)(ha) should be equal to Total Area Proposed for Drip (ha)";
                            return msg;
                        }
                    }
                    else
                    {
                        msg = "Area Proposed for Drip (in Fund)(ha) should be equal to Total Area Proposed for Drip (ha)";
                        return msg;
                    }
                }

                var PipeArea = ABE.obj_abhy_wsp_demand_pipeline.Where(x => x.meta_id == MetaId.id).ToList();
                if (PipeArea.Count != 0)
                {
                    Decimal TotalPipeArea = PipeArea.Sum(x => Convert.ToDecimal(x.area_proposed));
                    PipeFundArea = ABE.obj_abhy_wsp_demand_fund_details.Where(x => x.meta_id == MetaId.id && x.fund_for == "UG Pipelines").ToList();
                    if (PipeFundArea.Count != 0)
                    {
                        Decimal TotalPipeFundArea = PipeFundArea.Sum(x => Convert.ToDecimal(x.area_proposed));
                        if (TotalPipeArea != TotalPipeFundArea)
                        {
                            msg = "Area Proposed for Pipelines (in Fund)(ha) should be equal to Total Area Proposed for Pipelines (ha)";
                            return msg;
                        }
                    }
                    else
                    {
                        msg = "Area Proposed for Pipelines (in Fund)(ha) should be equal to Total Area Proposed for Pipelines (ha)";
                        return msg;
                    }
                }

                var CropArea = ABE.obj_abhy_wsp_demand_change_crop.Where(x => x.meta_id == MetaId.id).ToList();
                if (CropArea.Count != 0)
                {
                    Decimal TotalCropArea = CropArea.Sum(x => Convert.ToDecimal(x.area_ch));
                    CropFundArea = ABE.obj_abhy_wsp_demand_fund_details.Where(x => x.meta_id == MetaId.id && x.fund_for == "Crop Diversification").ToList();
                    if (CropFundArea.Count != 0)
                    {
                        Decimal TotalCropFundArea = CropFundArea.Sum(x => Convert.ToDecimal(x.area_proposed));
                        if (TotalCropArea != TotalCropFundArea)
                        {
                            msg = "Area Proposed for Crop Diversification (in Fund)(ha) should be equal to Total Area Proposed for Crop Diversification (ha)";
                            return msg;
                        }
                    }
                    else
                    {
                        msg = "Area Proposed for Crop Diversification (in Fund)(ha) should be equal to Total Area Proposed for Crop Diversification (ha)";
                        return msg;
                    }
                }


                var AnyArea = ABE.obj_abhy_wsp_demand_anyother.Where(x => x.meta_id == MetaId.id).ToList();
                if (AnyArea.Count != 0)
                {
                    Decimal TotalAnyArea = AnyArea.Sum(x => Convert.ToDecimal(x.area_irrigation));
                    AnyFundArea = ABE.obj_abhy_wsp_demand_fund_details.Where(x => x.meta_id == MetaId.id && x.fund_for == "Other Measures").ToList();
                    if (AnyFundArea.Count != 0)
                    {
                        Decimal TotalAnyFundArea = AnyFundArea.Sum(x => Convert.ToDecimal(x.area_proposed));
                        if (TotalAnyArea != TotalAnyFundArea)
                        {
                            msg = "Area Proposed for Any Other (in Fund)(ha) should be equal to Total Area Proposed for Any Other (ha)";
                            return msg;
                        }
                    }
                    else
                    {
                        msg = "Area Proposed for Any Other (in Fund)(ha) should be equal to Total Area Proposed for Any Other (ha)";
                        return msg;
                    }
                }

            }
            msg = "Success";
            return msg;
        }

        [HttpPost]
        public ActionResult wsp_approved_status()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    DateTime now = DateTime.Now;
                    int MonthNumber = now.Month;

                    // Get the name of the month
                    string monthName = CultureInfo.CurrentCulture.DateTimeFormat.GetMonthName(MonthNumber);
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var Email = Session["Email"].ToString();
                    var OfficerName = Session["Officer"].ToString();
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();
                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    var Year = Session["year"].ToString();
                    var Month = monthName;
                    var CheckMap = ABE.obj_abhy_wsp_gram_images.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year).FirstOrDefault();
                    if (CheckMap != null)
                    {
                        if (CheckMap.gpimage1 != null && CheckMap.gpimage1 != "" && CheckMap.gpimage2 != null && CheckMap.gpimage2 != "" && CheckMap.gpimage2 != null && CheckMap.gpimage2 != "")
                        {

                            //string CheckDemandArea = ChackAreaIsEqualToFundAreaString();
                            //if (CheckDemandArea != "Success")
                            //{
                            //    return Json(CheckDemandArea, JsonRequestBehavior.AllowGet);
                            //}
                            abhy_wsp_approved_status details = new abhy_wsp_approved_status();
                            abhy_wsp_approved_status data = new abhy_wsp_approved_status();
                            if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null && Gram != "" && Gram != null && Year != "" && Year != null)
                            {
                                data = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.year == Year).FirstOrDefault();
                            }
                            if (data != null)
                            {
                                data.state_name = State;
                                data.district_name = Dist;
                                data.block_name = Block;
                                data.gp_name = Gram;
                                data.year = Year;
                                data.month_name = Month;

                                if (OfficerName == "District Level Nodal Officer")
                                {
                                    var details1 = ABE.obj_abhy_wsp_dpmu_declaration.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.data_year == Year).FirstOrDefault();
                                    if (details1 != null)
                                    {
                                        if (details1.dpmu_declaration != null && details1.dpmu_declaration != "")
                                        {
                                            data.status_id = 4;
                                            data.reject_status = "";
                                            data.gp_email = Email;
                                        }
                                        else
                                        {
                                            return Json("Please Upload DPMU Declaration!", JsonRequestBehavior.AllowGet);
                                        }
                                    }
                                    else
                                    {
                                        return Json("Please Upload DPMU Declaration!", JsonRequestBehavior.AllowGet);
                                    }
                                }
                                else if (OfficerName == "State Level Nodal Officer")
                                {
                                    data.status_id = 5;
                                    data.reject_status = "";
                                    data.gp_email = Email;
                                }
                                else if (OfficerName == "Gram Panchyat Nodal Officer")
                                {
                                    data.status_id = 3;
                                    data.reject_status = "";
                                    data.gp_email = Email;
                                }
                                ABE.Entry(data).State = EntityState.Modified;
                                ABE.SaveChanges();
                            }
                            else
                            {
                                details.state_name = State;
                                details.district_name = Dist;
                                details.block_name = Block;
                                details.gp_name = Gram;
                                details.year = Year;
                                details.month_name = Month;
                                details.status_id = 3;
                                Session["status_id"] = 3;
                                details.gp_email = Email;
                                ABE.obj_abhy_wsp_approved_status.Add(details);
                                ABE.SaveChanges();
                            }
                            return Json("Successfully sumbit data for approved", JsonRequestBehavior.AllowGet);
                        }
                        else
                        {
                            return Json("Please Upload Maps!", JsonRequestBehavior.AllowGet);
                        }
                    }
                    else
                    {
                        return Json("Please Upload Maps!", JsonRequestBehavior.AllowGet);
                    }
                }
                catch (Exception Ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult wsp_reject_status(string gp_remarks, string wa_remarks, string wu_remarks, string wb_remarks, string wbu_remarks, string ds_remarks, string ss_remarks, string pgwm_remarks)
        {
            DateTime now = DateTime.Now;
            int MonthNumber = now.Month;

            // Get the name of the month
            string monthName = CultureInfo.CurrentCulture.DateTimeFormat.GetMonthName(MonthNumber);
            var userid = Convert.ToInt32(Session["UserId"]);
            var Email = Session["Email"].ToString();
            var OfficerName = Session["Officer"].ToString();
            var State = Session["gstate"].ToString();
            var Dist = Session["gdist"].ToString();

            var Block = Session["gblock"].ToString();
            var Gram = Session["ggram"].ToString();
            var Year = Session["year"].ToString();
            var Month = monthName;
            abhy_wsp_approved_status data = new abhy_wsp_approved_status();
            if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null && Gram != "" && Gram != null && Year != "" && Year != null)
            {
                data = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.year == Year).FirstOrDefault();
            }
            if (data != null)
            {
                if (OfficerName == "District Level Nodal Officer")
                {
                    data.status_id = 1;
                    data.reject_status = "Rejected By District";
                    data.district_email = Email;
                    data.gp_remarks = gp_remarks;
                    data.wa_remarks = wa_remarks;
                    data.wu_remarks = wu_remarks;
                    data.wb_remarks = wb_remarks;
                    data.wbu_remarks = wbu_remarks;
                    data.ds_remarks = ds_remarks;
                    data.ss_remarks = ss_remarks;
                    data.pgwm_remarks = pgwm_remarks;
                }
                else if (OfficerName == "State Level Nodal Officer")
                {
                    data.status_id = 3;
                    data.reject_status = "Rejected By State";
                    data.state_email = Email;
                    data.gp_remarks = gp_remarks;
                    data.wa_remarks = wa_remarks;
                    data.wu_remarks = wu_remarks;
                    data.wb_remarks = wb_remarks;
                    data.wbu_remarks = wbu_remarks;
                    data.ds_remarks = ds_remarks;
                    data.ss_remarks = ss_remarks;
                    data.pgwm_remarks = pgwm_remarks;
                }
                ABE.Entry(data).State = EntityState.Modified;
                ABE.SaveChanges();
                return Json("Successfully reject data for approved", JsonRequestBehavior.AllowGet);
            }
            return Json("Error", JsonRequestBehavior.AllowGet);

        }
        [HttpGet]
        public ActionResult GetDataFromGPDCI()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_baseline_gp_livestock> livestock = new List<abhy_baseline_gp_livestock>();
                    int livestock_count = 0;
                    //string tol_population = string.Empty;
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    var Year = Session["year"].ToString();
                    //var Month = Session["month"].ToString();

                    if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null && Gram != "" && Gram != null && Year != "" && Year != null)
                    {
                        var tol_population = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year && x.d_sent == true).OrderByDescending(x => x.month_order_by).FirstOrDefault();
                        if (tol_population != null)
                        {
                            livestock = ABE.obj_abhy_baseline_gp_livestock.Where(x => x.id == tol_population.id).ToList();//total list
                        }

                        livestock_count = livestock.Sum(x => Int32.Parse(x.livestock_value));
                        var livestock_year = livestock.Select(x => x.source_year_liv).FirstOrDefault();
                        var total_poplation = tol_population.tol_population;
                        var population_year = tol_population.source_year;
                        return Json(livestock_count + "," + total_poplation + "," + population_year + "," + livestock_year, JsonRequestBehavior.AllowGet);
                    }


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


        [HttpGet]
        public ActionResult GetDataFromWaterutilization()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_uti_waterdraft_domestic_new> wtutilization = new List<abhy_uti_waterdraft_domestic_new>();

                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    var Year = Session["year"].ToString();
                    //var Month = Session["month"].ToString();

                    if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null && Gram != "" && Gram != null && Year != "" && Year != null)
                    {
                        wtutilization = ABE.obj_abhy_uti_waterdraft_domestic_new.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.year == Year).ToList();//total list

                    }

                    return Json(wtutilization, JsonRequestBehavior.AllowGet);
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
        [HttpGet]
        public ActionResult Social_Monitor_Details()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<socialmonitoring> ddetails = new List<socialmonitoring>();


                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "" && Gram != null)
                    {
                        ddetails = AJE.obj_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        ddetails = AJE.obj_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        ddetails = AJE.obj_socialmonitoring.Where(x => x.state == State && x.district == Dist).ToList();//total list

                    }
                    else if (State != "" && State != null)
                    {
                        ddetails = AJE.obj_socialmonitoring.Where(x => x.state == State).ToList();//total list

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


        [HttpGet]
        public ActionResult Social_Monitor_Details_website()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<socialmonitoring> ddetails = new List<socialmonitoring>();


                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();

                    if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null && Gram != "" && Gram != null)
                    {
                        ddetails = AJE.obj_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram && x.status != "Mobile App").ToList();//total list

                    }
                    else if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null)
                    {
                        ddetails = AJE.obj_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block && x.status != "Mobile App").ToList();//total list

                    }
                    else if (State != "" && State != null && Dist != "" && Dist != null)
                    {
                        ddetails = AJE.obj_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.status != "Mobile App").ToList();//total list

                    }
                    else if (State != "" && State != null)
                    {
                        ddetails = AJE.obj_socialmonitoring.Where(x => x.state == State && x.status != "Mobile App").ToList();//total list

                    }

                    if (ddetails.Count == 1)
                    {
                        if (ddetails[0].image != null && ddetails[0].image != "")
                        {
                            string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                            string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");
                            string File_path = path + ddetails[0].photogragh_filename;
                            string base64 = Image_Url_base64(File_path);
                            ddetails[0].image = base64;
                        }


                        var resultdata = Json(ddetails[0], JsonRequestBehavior.AllowGet);
                        resultdata.MaxJsonLength = int.MaxValue;
                        return resultdata;
                    }
                    else
                    {


                        var resultdata = Json(ddetails, JsonRequestBehavior.AllowGet);
                        resultdata.MaxJsonLength = int.MaxValue;
                        return resultdata;
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
        }

        [HttpPost]
        public ActionResult Social_Monitoring_info(/*HttpPostedFileBase sm_meeting_agenda,*/ HttpPostedFileBase sm_mom, HttpPostedFileBase sm_photoshop, string sm_location, string numberofattendees, string sm_male, string sm_female, string sm_latitude, string sm_longitude, string sm_date)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    ///JavaScriptSerializer js = new JavaScriptSerializer();

                    socialmonitoring obj = new socialmonitoring();
                    List<socialmonitoring> ddetails = new List<socialmonitoring>();
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        ddetails = AJE.obj_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        ddetails = AJE.obj_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        ddetails = AJE.obj_socialmonitoring.Where(x => x.state == State && x.district == Dist).ToList();//total list

                    }
                    else if (State != "" && State != null)
                    {
                        ddetails = AJE.obj_socialmonitoring.Where(x => x.state == State).ToList();//total list

                    }
                    //Malicious_File_Upload_Restriction obj_Validate = new Malicious_File_Upload_Restriction();
                    //string allowed_file_format = "jpg,png,jpeg,pdf,dox";
                    //bool flag = obj_Validate.CheckValidFile(sm_mom, allowed_file_format);
                    //if (flag == false)
                    //{
                    //    return Json("Your Upload file has Not valid File, Please Upload proper file", JsonRequestBehavior.AllowGet);
                    //}
                    //Malicious_File_Upload_Restriction obj_Validate1 = new Malicious_File_Upload_Restriction();
                    //string allowed_file_format1 = "jpg,png,jpeg";
                    //bool flag1 = obj_Validate1.CheckValidFile(sm_photoshop, allowed_file_format1);
                    //if (flag1 == false)
                    //{
                    //    return Json("Your Upload file has Not valid File, Please Upload proper file", JsonRequestBehavior.AllowGet);
                    //}
                    if (ddetails.Count == 1)
                    {
                        var abc = ddetails[0];
                        var Dataa = abc;

                        Dataa.state = State;
                        Dataa.block = Block;
                        Dataa.date = sm_date;
                        Dataa.district = Dist;
                        Dataa.female = sm_female;
                        Dataa.grampanchayat = Gram;
                        Dataa.latitude = sm_latitude;
                        Dataa.location = sm_location;
                        Dataa.longitude = sm_longitude;
                        Dataa.male = sm_male;
                        Dataa.numberofattendees = numberofattendees;

                        string File_path = "";
                        //if (sm_meeting_agenda != null)
                        //{
                        //    if (sm_meeting_agenda.FileName != null)
                        //    {
                        //        // String FileExt = Path.GetExtension(sm_meeting_agenda.FileName).ToUpper();

                        //        string path = @"D:\Ataljal_grievnce\";
                        //        path = path + sm_meeting_agenda.FileName;
                        //        sm_meeting_agenda.SaveAs(path);
                        //        File_path = path.Replace("D:\\Ataljal_grievnce\\", "http://54.221.131.231:8014/ataljalimages/");

                        //        Dataa.agenda = File_path;
                        //        File_path = "";
                        //    }
                        //}

                        if (sm_mom != null)
                        {
                            if (sm_mom.FileName != null)
                            {

                                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");

                                if (!Directory.Exists(path))
                                {
                                    Directory.CreateDirectory(path);
                                }
                                path = path + sm_mom.FileName;
                                //string[] count = sm_mom.FileName.Split('.');
                                //if (count.Length != 2)
                                //{
                                //    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                //}
                                sm_mom.SaveAs(path);
                                // File_path = path.Replace("D:\\Ataljal_grievnce\\", "http://54.221.131.231:8014/ataljalimages/");
                                //File_path = path.Replace("D:\\Ataljal_grievnce\\", "~/Ataljalimages/");

                                File_path = "/Ataljalimages/" + sm_mom.FileName;
                                Dataa.minutesofmeeting = File_path;
                                Dataa.mom_filename = sm_mom.FileName;
                                File_path = "";
                            }
                        }

                        if (sm_photoshop != null)
                        {
                            if (sm_photoshop.FileName != null)
                            {

                                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");

                                if (!Directory.Exists(path))
                                {
                                    Directory.CreateDirectory(path);
                                }
                                path = path + sm_photoshop.FileName;
                                //string[] count = sm_photoshop.FileName.Split('.');
                                //if (count.Length != 2)
                                //{
                                //    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                //}
                                sm_photoshop.SaveAs(path);
                                // File_path = path.Replace("D:\\Ataljal_grievnce\\", "http://54.221.131.231:8014/ataljalimages/");
                                //File_path = path.Replace("D:\\Ataljal_grievnce\\", "~/Ataljalimages/");
                                File_path = "/Ataljalimages/" + sm_photoshop.FileName;
                                Dataa.image = File_path;
                                Dataa.photogragh_filename = sm_photoshop.FileName;
                                File_path = "";
                            }
                        }

                        AJE.Entry(Dataa).State = EntityState.Modified;
                        AJE.SaveChanges();
                        return Json("Successfully Saved");
                    }
                    else
                    {
                        if (ddetails.Count == 0)
                        {
                            obj.state = State;
                            obj.block = Block;
                            obj.date = sm_date;
                            obj.district = Dist;
                            obj.female = sm_female;
                            obj.grampanchayat = Gram;
                            obj.latitude = sm_latitude;
                            obj.location = sm_location;
                            obj.longitude = sm_longitude;
                            obj.male = sm_male;
                            obj.numberofattendees = numberofattendees;

                            string File_path = "";
                            //if (sm_meeting_agenda != null)
                            //{
                            //    if (sm_meeting_agenda.FileName != null)
                            //    {
                            //        // String FileExt = Path.GetExtension(sm_meeting_agenda.FileName).ToUpper();

                            //        string path = @"D:\Ataljal_grievnce\";
                            //        path = path + sm_meeting_agenda.FileName;
                            //        sm_meeting_agenda.SaveAs(path);
                            //        File_path = path.Replace("D:\\Ataljal_grievnce\\", "http://54.221.131.231:8014/ataljalimages/");

                            //        obj.agenda = File_path;
                            //        File_path = "";
                            //    }
                            //}

                            if (sm_mom != null)
                            {
                                if (sm_mom.FileName != null)
                                {
                                    string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                    string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");

                                    if (!Directory.Exists(path))
                                    {
                                        Directory.CreateDirectory(path);
                                    }
                                    path = path + sm_mom.FileName;
                                    //string[] count = sm_mom.FileName.Split('.');
                                    //if (count.Length != 2)
                                    //{
                                    //    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                    //}
                                    sm_mom.SaveAs(path);
                                    // File_path = path.Replace("D:\\Ataljal_grievnce\\", "http://54.221.131.231:8014/ataljalimages/");
                                    //File_path = path.Replace("D:\\Ataljal_grievnce\\", "~/Ataljalimages/");

                                    File_path = "/Ataljalimages/" + sm_mom.FileName;
                                    obj.minutesofmeeting = File_path;
                                    obj.mom_filename = sm_mom.FileName;
                                    File_path = "";
                                }
                            }

                            if (sm_photoshop != null)
                            {
                                if (sm_photoshop.FileName != null)
                                {

                                    string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                    string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");

                                    if (!Directory.Exists(path))
                                    {
                                        Directory.CreateDirectory(path);
                                    }
                                    path = path + sm_photoshop.FileName;
                                    //string[] count = sm_mom.FileName.Split('.');
                                    //if (count.Length != 2)
                                    //{
                                    //    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                    //}
                                    sm_photoshop.SaveAs(path);
                                    // File_path = path.Replace("D:\\Ataljal_grievnce\\", "http://54.221.131.231:8014/ataljalimages/");
                                    //File_path = path.Replace("D:\\Ataljal_grievnce\\", "~/Ataljalimages/");
                                    File_path = "/Ataljalimages/" + sm_photoshop.FileName;
                                    obj.image = File_path;
                                    obj.photogragh_filename = sm_photoshop.FileName;
                                    File_path = "";
                                }
                            }

                            AJE.obj_socialmonitoring.Add(obj);
                            AJE.SaveChanges();
                            return Json("Successfully Saved");
                        }
                        else
                        {
                            return Json("Duplicate Data is there");
                        }


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

        //[HttpPost]
        //public ActionResult Social_Monitoring_info(/*HttpPostedFileBase sm_meeting_agenda,*/ HttpPostedFileBase sm_mom, HttpPostedFileBase sm_photoshop, string sm_location, string numberofattendees, string sm_male, string sm_female, string sm_latitude, string sm_longitude, string sm_date)
        //{
        //    if (Session["UserId"] != null)
        //    {
        //        try
        //        {
        //            ///JavaScriptSerializer js = new JavaScriptSerializer();

        //            socialmonitoring obj = new socialmonitoring();
        //            List<socialmonitoring> ddetails = new List<socialmonitoring>();
        //            var State = Session["gstate"].ToString();
        //            var Dist = Session["gdist"].ToString();

        //            var Block = Session["gblock"].ToString();
        //            var Gram = Session["ggram"].ToString();

        //            if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null && Gram != "" && Gram != null)
        //            {
        //                ddetails = AJE.obj_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram && x.status != "Mobile App").ToList();//total list

        //            }
        //            else if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null)
        //            {
        //                ddetails = AJE.obj_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block && x.status != "Mobile App").ToList();//total list

        //            }
        //            else if (State != "" && State != null && Dist != "" && Dist != null)
        //            {
        //                ddetails = AJE.obj_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.status != "Mobile App").ToList();//total list

        //            }
        //            else if (State != "" && State != null)
        //            {
        //                ddetails = AJE.obj_socialmonitoring.Where(x => x.state == State && x.status != "Mobile App").ToList();//total list

        //            }
        //            if (ddetails.Count != 0)
        //            {
        //                var abc = ddetails[0];
        //                var Dataa = abc;
        //                Dataa.officer_name = Session["Officer"].ToString();
        //                Dataa.state = State;
        //                Dataa.block = Block;
        //                Dataa.date = sm_date;
        //                Dataa.district = Dist;
        //                Dataa.female = sm_female;
        //                Dataa.grampanchayat = Gram;
        //                Dataa.latitude = sm_latitude;
        //                Dataa.location = sm_location;
        //                Dataa.longitude = sm_longitude;
        //                Dataa.male = sm_male;
        //                Dataa.numberofattendees = numberofattendees;
        //                Dataa.status = "";

        //                string File_path = "";
        //                //if (sm_meeting_agenda != null)
        //                //{
        //                //    if (sm_meeting_agenda.FileName != null)
        //                //    {
        //                //        // String FileExt = Path.GetExtension(sm_meeting_agenda.FileName).ToUpper();

        //                //        string path = @"D:\Ataljal_grievnce\";
        //                //        path = path + sm_meeting_agenda.FileName;
        //                //        sm_meeting_agenda.SaveAs(path);
        //                //        File_path = path.Replace("D:\\Ataljal_grievnce\\", "http://54.221.131.231:8014/ataljalimages/");

        //                //        Dataa.agenda = File_path;
        //                //        File_path = "";
        //                //    }
        //                //}

        //                if (sm_mom != null)
        //                {
        //                    if (sm_mom.FileName != null)
        //                    {

        //                        string path = @"D:\Ataljal_grievnce\";
        //                        path = path + sm_mom.FileName;
        //                        sm_mom.SaveAs(path);
        //                        // File_path = path.Replace("D:\\Ataljal_grievnce\\", "http://54.221.131.231:8014/ataljalimages/");
        //                        File_path = path.Replace("D:\\Ataljal_grievnce\\", "~/Ataljalimages/");
        //                        Dataa.minutesofmeeting = File_path;
        //                        Dataa.mom_filename = sm_mom.FileName;
        //                        File_path = "";
        //                    }
        //                }

        //                if (sm_photoshop != null)
        //                {
        //                    if (sm_photoshop.FileName != null)
        //                    {

        //                        string path = @"D:\Ataljal_grievnce\";
        //                        path = path + sm_photoshop.FileName;
        //                        sm_photoshop.SaveAs(path);
        //                        //File_path = path.Replace("D:\\Ataljal_grievnce\\", "http://54.221.131.231:8014/ataljalimages/");
        //                        File_path = path.Replace("D:\\Ataljal_grievnce\\", "~/Ataljalimages/");
        //                        Dataa.image = File_path;
        //                        Dataa.photogragh_filename = sm_photoshop.FileName;
        //                        File_path = "";
        //                    }
        //                }

        //                AJE.Entry(Dataa).State = EntityState.Modified;
        //                AJE.SaveChanges();
        //                return Json("Successfully Saved");
        //            }
        //            else
        //            {
        //                obj.officer_name = Session["Officer"].ToString();
        //                obj.state = State;
        //                obj.block = Block;
        //                obj.date = sm_date;
        //                obj.district = Dist;
        //                obj.female = sm_female;
        //                obj.grampanchayat = Gram;
        //                obj.latitude = sm_latitude;
        //                obj.location = sm_location;
        //                obj.longitude = sm_longitude;
        //                obj.male = sm_male;
        //                obj.numberofattendees = numberofattendees;
        //                obj.status = "";

        //                string File_path = "";
        //                //if (sm_meeting_agenda != null)
        //                //{
        //                //    if (sm_meeting_agenda.FileName != null)
        //                //    {
        //                //        // String FileExt = Path.GetExtension(sm_meeting_agenda.FileName).ToUpper();

        //                //        string path = @"D:\Ataljal_grievnce\";
        //                //        path = path + sm_meeting_agenda.FileName;
        //                //        sm_meeting_agenda.SaveAs(path);
        //                //        File_path = path.Replace("D:\\Ataljal_grievnce\\", "http://54.221.131.231:8014/ataljalimages/");

        //                //        obj.agenda = File_path;
        //                //        File_path = "";
        //                //    }
        //                //}

        //                if (sm_mom != null)
        //                {
        //                    if (sm_mom.FileName != null)
        //                    {

        //                        string path = @"D:\Ataljal_grievnce\";
        //                        path = path + sm_mom.FileName;
        //                        sm_mom.SaveAs(path);
        //                        // File_path = path.Replace("D:\\Ataljal_grievnce\\", "http://54.221.131.231:8014/ataljalimages/");
        //                        File_path = path.Replace("D:\\Ataljal_grievnce\\", "~/Ataljalimages/");
        //                        obj.minutesofmeeting = File_path;
        //                        obj.mom_filename = sm_mom.FileName;
        //                        File_path = "";
        //                    }
        //                }

        //                if (sm_photoshop != null)
        //                {
        //                    if (sm_photoshop.FileName != null)
        //                    {

        //                        string path = @"D:\Ataljal_grievnce\";
        //                        path = path + sm_photoshop.FileName;
        //                        sm_photoshop.SaveAs(path);
        //                        // File_path = path.Replace("D:\\Ataljal_grievnce\\", "http://54.221.131.231:8014/ataljalimages/");
        //                        File_path = path.Replace("D:\\Ataljal_grievnce\\", "~/Ataljalimages/");
        //                        obj.image = File_path;
        //                        obj.photogragh_filename = sm_photoshop.FileName;
        //                        File_path = "";
        //                    }
        //                }

        //                AJE.obj_socialmonitoring.Add(obj);
        //                AJE.SaveChanges();
        //                return Json("Successfully Saved");
        //            }


        //        }
        //        catch (Exception Ex)
        //        {
        //            return Json(Ex, JsonRequestBehavior.AllowGet);
        //        }
        //    }
        //    else
        //    {
        //        return Json("Logout", JsonRequestBehavior.AllowGet);
        //    }


        //}



        [HttpPost]
        public ActionResult PGWN_DepetDetails(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<PGWN_Department_Details>(Data);
                    PGWN_Department_Details obj = new PGWN_Department_Details();
                    obj.state_name = result.state_name.Trim();
                    obj.district_name = result.district_name.Trim();
                    obj.block = result.block.Trim();
                    obj.gname = result.gname.Trim();
                    var TodayDate1 = DateTime.Now.ToString();
                    var Datea = TodayDate1.Split('-', ' ');
                    var Today1 = Datea[0] + '/' + Datea[1] + '/' + Datea[2];
                    obj.villname = result.villname;
                    if (result.designation != "" && result.designation != null)
                    {
                        obj.designation = result.designation;
                    }
                    else
                    {
                        return Json("Please Enter Designation");
                    }


                    if (result.department != "0" && result.department != "" && result.department != null)
                    {
                        obj.department = result.department;
                    }
                    else
                    {
                        return Json("Please Select Social Organization");
                    }

                    if (result.countname != "" && result.countname != null)
                    {
                        obj.countname = result.countname;
                    }
                    else
                    {
                        return Json("Please Enter Name");
                    }

                    if (result.gender != "0" && result.gender != "" && result.gender != null)
                    {
                        obj.gender = result.gender;
                    }
                    else
                    {
                        return Json("Please Select Gender");
                    }
                    obj.todaydate = Today1;
                    obj.userid = Session["UserId"].ToString();
                    ABE.objPGWN_Department_Details.Add(obj);
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
        public ActionResult pgwn_Depdetails(string state, string dist, string block, string gram, string vill)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<PGWN_Department_Details> TDetails = new List<PGWN_Department_Details>();
                    if (state != "" && dist != "" && block != "" && gram != "" && vill != "")
                    {
                        TDetails = ABE.objPGWN_Department_Details.Where(x => x.state_name == state && x.district_name == dist && x.block == block && x.gname == gram && x.villname == vill).ToList();
                    }
                    else if (state != "" && dist != "" && block != "" && gram != "")
                    {
                        TDetails = ABE.objPGWN_Department_Details.Where(x => x.state_name == state.Trim() && x.district_name == dist.Trim() && x.block == block.Trim() && x.gname == gram.Trim()).ToList();
                    }
                    else if (state != "" && dist != "" && block != "")
                    {
                        TDetails = ABE.objPGWN_Department_Details.Where(x => x.state_name == state && x.district_name == dist && x.block == block).ToList();
                    }
                    else if (state != "" && dist != "")
                    {
                        TDetails = ABE.objPGWN_Department_Details.Where(x => x.state_name == state && x.district_name == dist).ToList();
                    }
                    else
                    {
                        TDetails = ABE.objPGWN_Department_Details.Where(x => x.state_name == state).ToList();
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
        public ActionResult DeletePGWNDeptDetail(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<PGWN_Department_Details>(Data);

                    if (result.pgwndeptid != 0)
                    {
                        var TKID = Convert.ToInt32(result.pgwndeptid);
                        var Data1 = ABE.objPGWN_Department_Details.Where(x => x.pgwndeptid == TKID).SingleOrDefault();
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


        [HttpGet]
        public ActionResult GrampanchayatDetails()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_wsp_gpdata_new> ddetails = new List<abhy_wsp_gpdata_new>();


                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString().Trim();
                    var Dist = Session["gdist"].ToString().Trim();

                    var Block = Session["gblock"].ToString().Trim();
                    var Gram = Session["ggram"].ToString().Trim();

                    var year = Session["year"].ToString();
                    //var month = Session["month"].ToString();

                    ddetails = ABE.obj_abhy_wsp_gpdata_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gram_panchayat_name == Gram && x.year == "2023-24 Update").ToList();//total list
                    if (ddetails.Count == 0)
                    {
                        ddetails = ABE.obj_abhy_wsp_gpdata_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gram_panchayat_name == Gram && x.year == "2023-24").ToList();//total list
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


        [HttpGet]
        public ActionResult Get_lg_code()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString().Trim();
                    var Dist = Session["gdist"].ToString().Trim();
                    var Block = Session["gblock"].ToString().Trim();
                    var Gram = Session["ggram"].ToString().Trim();
                    var ddetails = ABE.obj_abhy_block_gp_area_info.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gram_panchayat_name == Gram).ToList();//total list


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

        [HttpGet]
        public ActionResult Get_gp_block_area()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString().Trim();
                    var Dist = Session["gdist"].ToString().Trim();
                    var Block = Session["gblock"].ToString().Trim();
                    var Gram = Session["ggram"].ToString().Trim();
                    var ddetails = ABE.obj_abhy_block_gp_area_info.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gram_panchayat_name == Gram).ToList();//total list


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

        [HttpGet]
        public ActionResult GrampanchayatBasin_name()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_gpdata_dropdown> ddetails = new List<abhy_gpdata_dropdown>();


                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString().Trim();
                    var Dist = Session["gdist"].ToString().Trim();
                    var Block = Session["gblock"].ToString().Trim();
                    var Gram = Session["ggram"].ToString().Trim();
                    if (State != "" && State != null)
                    {
                        ddetails = ABE.obj_abhy_gpdata_dropdown.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gram_panchayat_name == Gram).ToList();//total list
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


        [HttpGet]
        public ActionResult GrampanchayatDetails_StateWise()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_gpdata_dropdown> ddetails = new List<abhy_gpdata_dropdown>();


                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    if (State != "" && State != null)
                    {
                        ddetails = ABE.obj_abhy_gpdata_dropdown.Where(x => x.state_name == State).ToList();//total list

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

        [HttpGet]
        public ActionResult WaterShedInfo()
        {
            if (Session["UserId"] != null)
            {
                try
                {



                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString().Trim();
                    var Block = Session["gblock"].ToString().Trim();
                    var Gram = Session["ggram"].ToString().Trim();
                    abhy_gpdata_dropdown ddetails = new abhy_gpdata_dropdown();
                    if (State != "" && State != null)
                    {
                        ddetails = ABE.obj_abhy_gpdata_dropdown.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gram_panchayat_name == Gram).FirstOrDefault();//total list
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
        public ActionResult CheckDataGPInfo()
        {
            bool check = false;
            var State = Session["gstate"].ToString().Trim();
            var Dist = Session["gdist"].ToString().Trim();

            var Block = Session["gblock"].ToString().Trim();
            var Gram = Session["ggram"].ToString().Trim();

            var Year = Session["year"].ToString();
            var data = ABE.obj_abhy_wsp_gpdata_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gram_panchayat_name == Gram && x.year == Year).ToList();//total list
            if (data.Count == 0)
            {
                return Json("You didn't saved the data, Please click on save button in Gram Panchayat (Basic Hydrology Info)", JsonRequestBehavior.AllowGet);
            }
            else
            {
                check = true;
            }
            var Details = ABE.obj_abhy_wsp_gram_images.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).FirstOrDefault();

            if (Details != null)
            {
                if ((Details.gpimage1 == "" || Details.gpimage1 == null) || (Details.gpimage2 == "" || Details.gpimage2 == null) || (Details.gpimage3 == "" || Details.gpimage3 == null))
                {
                    return Json("You didn't upload all maps, Please upload all maps", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("You didn't upload all maps, Please upload all maps", JsonRequestBehavior.AllowGet);
            }

            var WL_Map = ABE.obj_abhy_wsp_gwl.Where(x => x.state == State && x.district == Dist
                    && x.block == Block && x.grampanchayat == Gram && x.wsp_fyyear == Year).FirstOrDefault();
            if (WL_Map == null)
            {
                return Json("You didn't save water level data, Please save", JsonRequestBehavior.AllowGet);

            }
            var WQ_Map = ABE.obj_abhy_wsp_gwq.Where(x => x.State == State && x.District == Dist
                    && x.Block == Block && x.GP == Gram && x.wsp_fyyear == Year).FirstOrDefault();
            if (WQ_Map != null)
            {
                return Json(new { result = true });
            }
            else
            {
                return Json("You didn't save water quality data, Please save", JsonRequestBehavior.AllowGet);
            }
        }



        [HttpPost]
        public ActionResult CheckDataGP()
        {
            var State = Session["gstate"].ToString().Trim();
            var Dist = Session["gdist"].ToString().Trim();

            var Block = Session["gblock"].ToString().Trim();
            var Gram = Session["ggram"].ToString().Trim();

            var Year = Session["year"].ToString().Trim();
            var ddetails = ABE.obj_abhy_wsp_gpdata_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gram_panchayat_name == Gram && x.year == Year).ToList();//total list
            if (ddetails.Count == 0)
            {
                return Json(new { result = false });
            }
            else
            {
                return Json(new { result = true });
            }
        }


        public ActionResult GetWspApprovedDate()
        {
            var State = Session["gstate"].ToString().Trim();
            var Dist = Session["gdist"].ToString().Trim();

            var Block = Session["gblock"].ToString().Trim();
            var Gram = Session["ggram"].ToString().Trim();

            var Year = Session["year"].ToString().Trim();
            var data = ABE.obj_abhy_mis_wsp_approved.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.fy_year == Year).FirstOrDefault();
            return Json(data, JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public ActionResult CheckDataMapUpload()
        {
            var State = Session["gstate"].ToString().Trim();
            var Dist = Session["gdist"].ToString().Trim();

            var Block = Session["gblock"].ToString().Trim();
            var Gram = Session["ggram"].ToString().Trim();

            var Year = Session["year"].ToString().Trim();
            var Details = ABE.obj_abhy_wsp_gram_images.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year).FirstOrDefault();

            if (Details != null)
            {
                if ((Details.gpimage1 == "" || Details.gpimage1 == null) || (Details.gpimage2 == "" || Details.gpimage2 == null) || (Details.gpimage3 == "" || Details.gpimage3 == null))
                {
                    return Json(new { result = false });
                }
                else
                {
                    return Json(new { result = true });
                }
            }
            else
            {
                return Json(new { result = false });
            }
        }


        [HttpPost]
        public ActionResult WaterBalanceAutoSaved()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    double wb_gw_avail, wb_sw_avail, wb_total_avail, wb_gw_utili = 0, wb_sw_utili = 0, wb_total_utili = 0,
                wb_gw_balance, wb_sw_balance, wb_total_balance;
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    var year = Session["year"].ToString();
                    var Data = ABE.obj_abhy_wsp_wateravailbility_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.year == year).Select(x => new { x.tot_grd_wat_avail, x.total_sirface_water }).FirstOrDefault();
                    if (Data != null)
                    {
                        wb_gw_avail = Convert.ToDouble(Data.tot_grd_wat_avail);
                        wb_sw_avail = Convert.ToDouble(Data.total_sirface_water);
                        wb_total_avail = wb_gw_avail + wb_sw_avail;
                    }
                    else
                    {
                        return Json("1", JsonRequestBehavior.AllowGet);
                    }

                    var DomesticData = ABE.obj_abhy_uti_waterdraft_domestic_new.
                      Where(n => n.state == State && n.district == Dist && n.block == Block && n.gp == Gram && n.year == year).
                      Select(x => new { x.water_deman_hum, x.water_deman_liv, x.water_dem_hum, x.water_dem_liv }).FirstOrDefault();
                    if (DomesticData != null)
                    {
                        wb_gw_utili = Convert.ToDouble(DomesticData.water_deman_hum) + Convert.ToDouble(DomesticData.water_deman_liv);
                        wb_sw_utili = Convert.ToDouble(DomesticData.water_dem_hum) + Convert.ToDouble(DomesticData.water_dem_liv);
                        //wb_total_utili += wb_gw_utili + wb_sw_utili;
                    }
                    else
                    {
                        return Json("2", JsonRequestBehavior.AllowGet);
                    }
                    var DataIrrigation = ABE.obj_abhy_waterdraft_irrigation_meta.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.data_year == year).Select(x => new { x.uti_ground_water, x.uti_surface_water }).FirstOrDefault();
                    if (DataIrrigation != null)
                    {
                        wb_gw_utili += Convert.ToDouble(DataIrrigation.uti_ground_water);
                        wb_sw_utili += Convert.ToDouble(DataIrrigation.uti_surface_water);
                        //wb_total_utili += wb_gw_utili + wb_sw_utili;
                    }
                    else
                    {
                        return Json("3", JsonRequestBehavior.AllowGet);
                    }
                    var industry = ABE.obj_abhy_waterdraft_industry.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == year).ToList();
                    if (industry.Count != 0)
                    {
                        wb_gw_utili += industry.Sum(x => Convert.ToDouble(x.indus_grd_water));
                        wb_sw_utili += industry.Sum(x => Convert.ToDouble(x.indus_sur_water));
                        //wb_total_utili += wb_gw_utili + wb_sw_utili;
                    }

                    var Other = ABE.obj_abhy_waterdraft_other.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == year).ToList();
                    if (Other.Count != 0)
                    {
                        wb_gw_utili += Other.Sum(x => Convert.ToDouble(x.oth_grd_water));
                        wb_sw_utili += Other.Sum(x => Convert.ToDouble(x.oth_sur_water));

                    }
                    wb_total_utili = wb_gw_utili + wb_sw_utili;
                    wb_gw_balance = wb_gw_avail - wb_gw_utili;
                    wb_sw_balance = wb_sw_avail - wb_sw_utili;
                    wb_total_balance = wb_gw_balance + wb_sw_balance;
                    var ddetails = ABE.obj_abhy_wsp_waterbalance_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == year).FirstOrDefault();//total list
                    if (ddetails != null)
                    {
                        ddetails.wb_gw_avail = wb_gw_avail.ToString();
                        ddetails.wb_sw_avail = wb_sw_avail.ToString();
                        ddetails.wb_total_avail = wb_total_avail.ToString();
                        ddetails.wb_gw_utili = wb_gw_utili.ToString();
                        ddetails.wb_sw_utili = wb_sw_utili.ToString();
                        ddetails.wb_total_utili = wb_total_utili.ToString();
                        ddetails.wb_gw_balance = wb_gw_balance.ToString();
                        ddetails.wb_sw_balance = wb_sw_balance.ToString();
                        ddetails.wb_total_balance = wb_total_balance.ToString();
                        ddetails.datetime = DateTime.Now.ToString();
                        ABE.Entry(ddetails).State = EntityState.Modified;
                        ABE.SaveChanges();
                    }
                    else
                    {
                        abhy_wsp_waterbalance_new obj = new abhy_wsp_waterbalance_new();
                        obj.state_name = State;
                        obj.district_name = Dist;
                        obj.block_name = Block;
                        obj.gpname = Gram;
                        obj.year = year;
                        obj.wb_gw_avail = wb_gw_avail.ToString();
                        obj.wb_sw_avail = wb_sw_avail.ToString();
                        obj.wb_total_avail = wb_total_avail.ToString();
                        obj.wb_gw_utili = wb_gw_utili.ToString();
                        obj.wb_sw_utili = wb_sw_utili.ToString();
                        obj.wb_total_utili = wb_total_utili.ToString();
                        obj.wb_gw_balance = wb_gw_balance.ToString();
                        obj.wb_sw_balance = wb_sw_balance.ToString();
                        obj.wb_total_balance = wb_total_balance.ToString();
                        obj.datetime = DateTime.Now.ToString();
                        ABE.obj_abhy_wsp_waterbalance_new.Add(obj);
                        ABE.SaveChanges();
                    }
                    return Json("Done", JsonRequestBehavior.AllowGet);
                }
                catch (Exception Ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return RedirectToAction("WSP_GWM_HOME", "WSPNew");
            }
        }


        public ActionResult WaterBalanceData()
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
                    var ddetails = ABE.obj_abhy_wsp_waterbalance_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == year).FirstOrDefault();//total list
                    return Json(ddetails, JsonRequestBehavior.AllowGet);
                }
                catch (Exception Ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return RedirectToAction("WSP_GWM_HOME", "WSPNew");
            }
        }

        [HttpPost]
        public ActionResult CheckDataWaterAvai()
        {
            if (Session["UserId"] != null)
            {
                var State = Session["gstate"].ToString().Trim();
                var Dist = Session["gdist"].ToString().Trim();

                var Block = Session["gblock"].ToString().Trim();
                var Gram = Session["ggram"].ToString().Trim();

                var Year = Session["year"].ToString().Trim();
                var data = ABE.obj_abhy_wsp_wateravailbility_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.year == Year).ToList();

                if (data.Count == 0)
                {
                    return Json("You didn't saved the data, Please click on save button", JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json(new { result = true });
                }
            }
            else
            {
                return RedirectToAction("WSP_GWM_HOME", "WSPNew");
            }
        }
        [HttpPost]
        public ActionResult CheckDataWaterUtilisation()
        {
            if (Session["UserId"] != null)
            {
                var State = Session["gstate"].ToString().Trim();
                var Dist = Session["gdist"].ToString().Trim();
                var Block = Session["gblock"].ToString().Trim();
                var Gram = Session["ggram"].ToString().Trim();
                var Year = Session["year"].ToString().Trim();
                var data = ABE.obj_abhy_waterdraft_irrigation_meta.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.data_year == Year).ToList();
                if (data.Count == 0)
                {
                    return Json("You didn't saved the data, Please click on save button", JsonRequestBehavior.AllowGet);
                }
                else
                {
                    if (data[0].per_ground_water == "" || data[0].per_ground_water == null || data[0].per_surface_water == "" || data[0].per_surface_water == null)
                    {
                        return Json(new { result = false });
                    }
                    return Json(new { result = true });
                }
            }
            else
            {
                return RedirectToAction("WSP_GWM_HOME", "WSPNew");
            }
        }


        [HttpPost]
        public ActionResult SaveGrampanchayatDetails(string Data)
        {
            if (Session["UserId"] != null)
            {
                DateTime now = DateTime.Now;
                int month = now.Month;

                // Get the name of the month
                string monthName = CultureInfo.CurrentCulture.DateTimeFormat.GetMonthName(month);

                List<abhy_wsp_gpdata_new> ddetails = new List<abhy_wsp_gpdata_new>();
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<abhy_wsp_gpdata_new>(Data);
                abhy_wsp_gpdata_new obj = new abhy_wsp_gpdata_new();
                var State = Session["gstate"].ToString().Trim();
                var Dist = Session["gdist"].ToString().Trim();

                var Block = Session["gblock"].ToString().Trim();
                var Gram = Session["ggram"].ToString().Trim();

                var Year = Session["year"].ToString().Trim();
                //var Month = Session["month"].ToString().Trim();

                ddetails = ABE.obj_abhy_wsp_gpdata_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gram_panchayat_name == Gram && x.year == Year).ToList();//total list

                if (ddetails.Count == 1)
                {
                    var ddetails1 = ddetails.SingleOrDefault();
                    ddetails1.state_name = State;
                    ddetails1.district_name = Dist;

                    if (result.basin_name != null && result.basin_name != "0" && result.basin_name.ToString().Trim() != "")
                    {
                        ddetails1.basin_name = result.basin_name;
                    }
                    else
                    {
                        return Json("Please Select Basin Name");
                    }
                    ddetails1.basin_code = result.basin_code;
                    if (result.block_area != null && result.block_area.ToString().Trim() != "")
                    {
                        ddetails1.block_area = result.block_area;
                    }
                    else
                    {
                        return Json("Please Enter Block Area (Ha)");
                    }

                    ddetails1.block_name = Block;

                    if (result.gp_area != null && result.gp_area.ToString().Trim() != "")
                    {
                        ddetails1.gp_area = result.gp_area;
                    }
                    else
                    {
                        return Json("Please Enter Gram Panchayat Area (Ha)");
                    }
                    ddetails1.gram_panchayat_name = Gram;
                    ddetails1.gp_id = result.gp_id;

                    if (result.sub_basin_name != null)
                    {
                        ddetails1.sub_basin_name = result.sub_basin_name;
                    }
                    //else
                    //{
                    //    return Json("Please Select Sub Basin Name");
                    //}
                    ddetails1.sub_basin_code = result.sub_basin_code;
                    ddetails1.watershed_area_block = result.watershed_area_block;

                    if (result.watershed_code != null)
                    {
                        ddetails1.watershed_code = result.watershed_code;
                    }
                    ddetails1.watershed_name = result.watershed_name;
                    ddetails1.year = Year;
                    ddetails1.month = monthName;
                    ddetails1.other_basin_name = result.other_basin_name;
                    ddetails1.other_sub_basin_name = result.other_sub_basin_name;
                    //ddetails1.month_order_by = Get_Month_Number(Month);
                    ddetails1.userid = Convert.ToInt32(Session["UserId"]);
                    var TodayDate1 = DateTime.Now.ToString();
                    ddetails1.datetime = TodayDate1;
                    ABE.Entry(ddetails1).State = EntityState.Modified;
                    ABE.SaveChanges();
                    return Json("Successfully Saved");
                }
                else
                {
                    if (ddetails.Count == 0)
                    {

                        obj.state_name = State;
                        obj.district_name = Dist;

                        if (result.basin_name != null && result.basin_name.ToString().Trim() != "")
                        {
                            obj.basin_name = result.basin_name;
                        }
                        else
                        {
                            return Json("Please Select Basin Name");
                        }
                        obj.basin_code = result.basin_code;

                        if (result.block_area != null && result.block_area.ToString().Trim() != "")
                        {
                            obj.block_area = result.block_area;
                        }
                        else
                        {
                            return Json("Please Enter Block Area (Ha)");
                        }
                        obj.block_name = Block;

                        if (result.gp_area != null && result.gp_area.ToString().Trim() != "")
                        {
                            obj.gp_area = result.gp_area;
                        }
                        else
                        {
                            return Json("Please Enter Gram Panchayat Area (Ha) ");
                        }
                        obj.gram_panchayat_name = Gram;
                        obj.gp_id = result.gp_id;

                        if (result.sub_basin_name != null)
                        {
                            obj.sub_basin_name = result.sub_basin_name;
                        }

                        obj.sub_basin_code = result.sub_basin_code;
                        obj.watershed_area_block = result.watershed_area_block;

                        if (result.watershed_code != null && result.watershed_code.ToString().Trim() != "")
                        {
                            obj.watershed_code = result.watershed_code;
                        }

                        obj.watershed_name = result.watershed_name;
                        obj.year = Year;
                        obj.month = monthName;
                        obj.month_order_by = result.month_order_by;
                        obj.other_basin_name = result.other_basin_name;
                        obj.other_sub_basin_name = result.other_sub_basin_name;
                        var TodayDate1 = DateTime.Now.ToString();
                        obj.datetime = TodayDate1;
                        obj.userid = Convert.ToInt32(Session["UserId"]);
                        ABE.obj_abhy_wsp_gpdata_new.Add(obj);
                        ABE.SaveChanges();
                        return Json("Successfully Saved");
                    }
                    else
                    {
                        return Json("Duplicate Records is there");
                    }
                }
            }
            else
            {
                Session["WSPHOME"] = "Data";
                return RedirectToAction("WSP_GWM_HOME", "WSPNew");
            }
        }

        [HttpGet]
        public ActionResult WaterDraftInfo_Details()
        {
            if (Session["UserId"] != null)
            {

                try
                {
                    List<abhy_waterdraft_new> ddetails = new List<abhy_waterdraft_new>();


                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();

                    if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null && Gram != "" && Gram != null)
                    {
                        ddetails = ABE.obj_abhy_waterdraft_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                    }
                    else if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null)
                    {
                        ddetails = ABE.obj_abhy_waterdraft_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                    }
                    else if (State != "" && State != null && Dist != "" && Dist != null)
                    {
                        ddetails = ABE.obj_abhy_waterdraft_new.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                    }
                    else if (State != "" && State != null)
                    {
                        ddetails = ABE.obj_abhy_waterdraft_new.Where(x => x.state_name == State).ToList();//total list

                    }
                    return Json(ddetails, JsonRequestBehavior.AllowGet);
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
        public ActionResult WaterDraftInfo_InsertData(string Data)
        {
            if (Session["UserId"] != null)
            {
                List<abhy_waterdraft_new> ddetails = new List<abhy_waterdraft_new>();
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<abhy_waterdraft_new>(Data);
                abhy_waterdraft_new obj = new abhy_waterdraft_new();
                var State = Session["gstate"].ToString();
                var Dist = Session["gdist"].ToString();

                var Block = Session["gblock"].ToString();
                var Gram = Session["ggram"].ToString();

                if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null && Gram != "" && Gram != null)
                {
                    ddetails = ABE.obj_abhy_waterdraft_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                }
                else if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null)
                {
                    ddetails = ABE.obj_abhy_waterdraft_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                }
                else if (State != "" && State != null && Dist != "" && Dist != null)
                {
                    ddetails = ABE.obj_abhy_waterdraft_new.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                }
                else if (State != "" && State != null)
                {
                    ddetails = ABE.obj_abhy_waterdraft_new.Where(x => x.state_name == State).ToList();//total list

                }
                if (ddetails.Count == 1)
                {
                    var ddetails1 = ddetails.SingleOrDefault();
                    ddetails1.state_name = State;
                    ddetails1.district_name = Dist;
                    ddetails1.block_name = Block;
                    ddetails1.gpname = Gram;
                    ddetails1.latitude = result.latitude;
                    ddetails1.officer_name = Session["Officer"].ToString();
                    ddetails1.longitude = result.longitude;
                    ddetails1.domestic_people_count = result.domestic_people_count;
                    ddetails1.domestic_people_water_req = result.domestic_people_water_req;
                    ddetails1.domestic_buffalo_count = result.domestic_buffalo_count;
                    ddetails1.domestic_buffalo_water_req = result.domestic_buffalo_water_req;
                    ddetails1.domestic_bullocks_count = result.domestic_bullocks_count;
                    ddetails1.domestic_bullock_water_req = result.domestic_bullock_water_req;
                    ddetails1.domestic_cow_count = result.domestic_cow_count;
                    ddetails1.domestic_cow_water_req = result.domestic_cow_water_req;
                    ddetails1.domestic_sheeps_count = result.domestic_sheeps_count;
                    ddetails1.domestic_sheeps_water_req = result.domestic_sheeps_water_req;
                    ddetails1.domestic_goat_count = result.domestic_goat_count;
                    ddetails1.domestic_goat_water_req = result.domestic_goat_water_req;
                    ddetails1.domestic_donkey_count = result.domestic_donkey_count;
                    ddetails1.domestic_donkey_water_req = result.domestic_donkey_water_req;
                    ddetails1.domestic_camel_count = result.domestic_camel_count;
                    ddetails1.domestic_camel_water_req = result.domestic_camel_water_req;

                    ddetails1.domestic_annual_req_people = result.domestic_annual_req_people;
                    ddetails1.domestic_annual_req_livestock = result.domestic_annual_req_livestock;
                    ddetails1.domestic_demand_surface_water = result.domestic_demand_surface_water;
                    ddetails1.domestic_demand_ground_water = result.domestic_demand_ground_water;

                    ddetails1.domestic_demand_surface_water_livestock = result.domestic_demand_surface_water_livestock;
                    ddetails1.domestic_demand_ground_water_livestock = result.domestic_demand_ground_water_livestock;


                    ddetails1.irri_kharif_paddy_crop_area = result.irri_kharif_paddy_crop_area;
                    ddetails1.irri_kharif_paddy_waterdemand = result.irri_kharif_paddy_waterdemand;
                    ddetails1.irri_kharif_ragi_crop_area = result.irri_kharif_ragi_crop_area;
                    ddetails1.irri_kharif_ragi_waterdemand = result.irri_kharif_ragi_waterdemand;
                    ddetails1.irri_kharif_groundnut_crop_area = result.irri_kharif_groundnut_crop_area;
                    ddetails1.irri_kharif_groundnut_waterdemand = result.irri_kharif_groundnut_waterdemand;
                    ddetails1.irri_kharif_sugarcane_crop_area = result.irri_kharif_sugarcane_crop_area;
                    ddetails1.irri_kharif_sugarcane_waterdemand = result.irri_kharif_sugarcane_waterdemand;
                    ddetails1.irri_kharif_tomoto_crop_area = result.irri_kharif_tomoto_crop_area;
                    ddetails1.irri_kharif_tomoto_waterdemand = result.irri_kharif_tomoto_waterdemand;
                    // ddetails1.irri_kharif_cabbage_crop_area = result.irri_kharif_cabbage_crop_area;
                    // ddetails1.irri_kharif_cabbage_waterdemand = result.irri_kharif_cabbage_waterdemand;
                    // ddetails1.irri_kharif_beans_crop_area = result.irri_kharif_beans_crop_area;
                    // ddetails1.irri_kharif_beans_waterdemand = result.irri_kharif_beans_waterdemand;
                    ddetails1.irri_kharif_floriculture_crop_area = result.irri_kharif_floriculture_crop_area;
                    ddetails1.irri_kharif_floriculture_waterdemand = result.irri_kharif_floriculture_waterdemand;
                    ddetails1.irri_kharif_sericulture_crop_area = result.irri_kharif_sericulture_crop_area;
                    ddetails1.irri_kharif_sericulture_waterdemand = result.irri_kharif_sericulture_waterdemand;
                    // ddetails1.irri_kharif_cucumber_crop_area = result.irri_kharif_cucumber_crop_area;
                    // ddetails1.irri_kharif_cucumber_waterdemand = result.irri_kharif_cucumber_waterdemand;
                    ddetails1.irri_kharif_banana_crop_area = result.irri_kharif_banana_crop_area;
                    ddetails1.irri_kharif_banana_waterdemand = result.irri_kharif_banana_waterdemand;
                    ddetails1.irri_kharif_fodder_crop_area = result.irri_kharif_fodder_crop_area;
                    ddetails1.irri_kharif_fodder_waterdemand = result.irri_kharif_fodder_waterdemand;
                    ddetails1.irri_kharif_maize_crop_area = result.irri_kharif_maize_crop_area;
                    ddetails1.irri_kharif_maize_waterdemand = result.irri_kharif_maize_waterdemand;
                    // ddetails1.irri_kharif_potato_crop_area = result.irri_kharif_potato_crop_area;
                    // ddetails1.irri_kharif_potato_waterdemand = result.irri_kharif_potato_waterdemand;
                    ddetails1.irri_kharif_chillies_crop_area = result.irri_kharif_chillies_crop_area;
                    ddetails1.irri_kharif_chillies_waterdemand = result.irri_kharif_chillies_waterdemand;
                    ddetails1.irri_kharif_cotton_crop_area = result.irri_kharif_cotton_crop_area;
                    ddetails1.irri_kharif_cotton_waterdemand = result.irri_kharif_cotton_waterdemand;
                    ddetails1.irri_kharif_melon_crop_area = result.irri_kharif_melon_crop_area;
                    ddetails1.irri_kharif_melon_waterdemand = result.irri_kharif_melon_waterdemand;
                    ddetails1.irri_kharif_citrus_crop_area = result.irri_kharif_citrus_crop_area;
                    ddetails1.irri_kharif_citrus_waterdemand = result.irri_kharif_citrus_waterdemand;

                    // ddetails1.irri_kharif_peanut_crop_area = result.irri_kharif_peanut_crop_area;
                    // ddetails1.irri_kharif_peanut_waterdemand = result.irri_kharif_peanut_waterdemand;
                    ddetails1.irri_kharif_horticulture_crop_area = result.irri_kharif_horticulture_crop_area;
                    ddetails1.irri_kharif_horticulture_waterdemand = result.irri_kharif_horticulture_waterdemand;
                    ddetails1.irri_kharif_total_waterdemand_kharifcrops = result.irri_kharif_total_waterdemand_kharifcrops;
                    ddetails1.irri_rabi_sericulture_crop_area = result.irri_rabi_sericulture_crop_area;
                    ddetails1.irri_rabi_sericulture_waterdemand = result.irri_rabi_sericulture_waterdemand;
                    ddetails1.irri_rabi_tomoto_crop_area = result.irri_rabi_tomoto_crop_area;
                    ddetails1.irri_rabi_tomoto_waterdemand = result.irri_rabi_tomoto_waterdemand;
                    // ddetails1.irri_rabi_cabbage_crop_area = result.irri_rabi_cabbage_crop_area;
                    // ddetails1.irri_rabi_cabbage_waterdemand = result.irri_rabi_cabbage_waterdemand;
                    // ddetails1.irri_rabi_beans_crop_area = result.irri_rabi_beans_crop_area;
                    // ddetails1.irri_rabi_beans_waterdemand = result.irri_rabi_beans_waterdemand;
                    ddetails1.irri_rabi_floriculture_crop_area = result.irri_rabi_floriculture_crop_area;
                    ddetails1.irri_rabi_floriculture_waterdemand = result.irri_rabi_floriculture_waterdemand;
                    // ddetails1.irri_rabi_potato_crop_area = result.irri_rabi_potato_crop_area;
                    // ddetails1.irri_rabi_potato_waterdemand = result.irri_rabi_potato_waterdemand;
                    // ddetails1.irri_rabi_cucumber_crop_area = result.irri_rabi_cucumber_crop_area;
                    // ddetails1.irri_rabi_cucumber_waterdemand = result.irri_rabi_cucumber_waterdemand;
                    ddetails1.irri_rabi_ragi_crop_area = result.irri_rabi_ragi_crop_area;
                    ddetails1.irri_rabi_ragi_waterdemand = result.irri_rabi_ragi_waterdemand;
                    ddetails1.irri_rabi_sugarcane_crop_area = result.irri_rabi_sugarcane_crop_area;
                    ddetails1.irri_rabi_sugarcane_waterdemand = result.irri_rabi_sugarcane_waterdemand;
                    ddetails1.irri_rabi_maize_crop_area = result.irri_rabi_maize_crop_area;
                    ddetails1.irri_rabi_maize_waterdemand = result.irri_rabi_maize_waterdemand;
                    ddetails1.irri_rabi_fodder_crop_area = result.irri_rabi_fodder_crop_area;
                    ddetails1.irri_rabi_fodder_waterdemand = result.irri_rabi_fodder_waterdemand;
                    ddetails1.irri_rabi_paddy_crop_area = result.irri_rabi_paddy_crop_area;
                    ddetails1.irri_rabi_paddy_waterdemand = result.irri_rabi_paddy_waterdemand;
                    ddetails1.irri_rabi_alfalfa_crop_area = result.irri_rabi_alfalfa_crop_area;
                    ddetails1.irri_rabi_alfalfa_waterdemand = result.irri_rabi_alfalfa_waterdemand;
                    //ddetails1.irri_rabi_onion_crop_area = result.irri_rabi_onion_crop_area;
                    //ddetails1.irri_rabi_onion_waterdemand = result.irri_rabi_onion_waterdemand;
                    ddetails1.irri_rabi_horticulture_crop_area = result.irri_rabi_horticulture_crop_area;
                    ddetails1.irri_rabi_horticulture_waterdemand = result.irri_rabi_horticulture_waterdemand;
                    ddetails1.irri_rabi_sunflower_crop_area = result.irri_rabi_sunflower_crop_area;
                    ddetails1.irri_rabi_sunflower_waterdemand = result.irri_rabi_sunflower_waterdemand;
                    ddetails1.irri_rabi_total_waterdemand_rabicrops = result.irri_rabi_total_waterdemand_rabicrops;
                    ddetails1.irri_summer_sericulture_crop_area = result.irri_summer_sericulture_crop_area;
                    ddetails1.irri_summer_sericulture_waterdemand = result.irri_summer_sericulture_waterdemand;
                    ddetails1.irri_summer_tomoto_crop_area = result.irri_summer_tomoto_crop_area;
                    ddetails1.irri_summer_tomoto_waterdemand = result.irri_summer_tomoto_waterdemand;
                    // ddetails1.irri_summer_cabbage_crop_area = result.irri_summer_cabbage_crop_area;
                    // ddetails1.irri_summer_cabbage_waterdemand = result.irri_summer_cabbage_waterdemand;
                    // ddetails1.irri_summer_beans_crop_area = result.irri_summer_beans_crop_area;
                    // ddetails1.irri_summer_beans_waterdemand = result.irri_summer_beans_waterdemand;
                    ddetails1.irri_summer_floriculture_crop_area = result.irri_summer_floriculture_crop_area;
                    ddetails1.irri_summer_floriculture_waterdemand = result.irri_summer_floriculture_waterdemand;
                    ddetails1.irri_summer_maize_crop_area = result.irri_summer_maize_crop_area;
                    ddetails1.irri_summer_maize_waterdemand = result.irri_summer_maize_waterdemand;
                    ddetails1.irri_summer_fodder_crop_area = result.irri_summer_fodder_crop_area;
                    ddetails1.irri_summer_fodder_waterdemand = result.irri_summer_fodder_waterdemand;
                    ddetails1.irri_summer_sugarcane_crop_area = result.irri_summer_sugarcane_crop_area;
                    ddetails1.irri_summer_sugarcane_waterdemand = result.irri_summer_sugarcane_waterdemand;
                    ddetails1.irri_summer_total_waterdemand_summercrops = result.irri_summer_total_waterdemand_summercrops;
                    //ddetails1.irri_kharif_waterdemand = result.irri_kharif_waterdemand;
                    //ddetails1.irri_rabi_waterdemand = result.irri_rabi_waterdemand;
                    //ddetails1.irri_summer_waterdemand = result.irri_summer_waterdemand;
                    ddetails1.irri_area_surfacewater = result.irri_area_surfacewater;
                    ddetails1.irri_avg_crop_water_req = result.irri_avg_crop_water_req;
                    ddetails1.irri_utili_surface_water = result.irri_utili_surface_water;
                    ddetails1.irri_utili_ground_water = result.irri_utili_ground_water;
                    ddetails1.industry_name = result.industry_name;
                    ddetails1.industry_daily_water_req = result.industry_daily_water_req;
                    ddetails1.industry_days_use = result.industry_days_use;
                    ddetails1.industry_waterdemand = result.industry_waterdemand;
                    ddetails1.industry_demand_surface_water = result.industry_demand_surface_water;
                    ddetails1.industry_demand_ground_water = result.industry_demand_ground_water;
                    ddetails1.other_type_of_use = result.other_type_of_use;
                    ddetails1.other_daily_water_req = result.other_daily_water_req;
                    ddetails1.other_days_use = result.other_days_use;
                    ddetails1.other_annual_req = result.other_annual_req;
                    ddetails1.other_demand_surface_water = result.other_demand_surface_water;
                    ddetails1.other_demand_ground_water = result.other_demand_ground_water;

                    ddetails1.domestic_livestock_count = result.domestic_livestock_count;
                    ddetails1.domestic_livestock_water_req = result.domestic_livestock_water_req;

                    ddetails1.domestic_people_water_requirement = result.domestic_people_water_requirement;
                    ddetails1.domestic_livestock_water_requirement = result.domestic_livestock_water_requirement;
                    ddetails1.domestic_buffalo_water_requirement = result.domestic_buffalo_water_requirement;
                    ddetails1.domestic_bullock_water_requirement = result.domestic_bullock_water_requirement;
                    ddetails1.domestic_cow_water_requirement = result.domestic_cow_water_requirement;
                    ddetails1.domestic_sheeps_water_requirement = result.domestic_sheeps_water_requirement;
                    ddetails1.domestic_goat_water_requirement = result.domestic_goat_water_requirement;
                    ddetails1.domestic_donkey_water_requirement = result.domestic_donkey_water_requirement;
                    ddetails1.domestic_camel_water_requirement = result.domestic_camel_water_requirement;

                    ddetails1.irri_kharif_paddy_water_requirement = result.irri_kharif_paddy_water_requirement;
                    ddetails1.irri_kharif_ragi_water_requirement = result.irri_kharif_ragi_water_requirement;
                    ddetails1.irri_kharif_groundnut_water_requirement = result.irri_kharif_groundnut_water_requirement;
                    ddetails1.irri_kharif_sugarcane_water_requirement = result.irri_kharif_sugarcane_water_requirement;
                    ddetails1.irri_kharif_tomoto_water_requirement = result.irri_kharif_tomoto_water_requirement;
                    // ddetails1.irri_kharif_cabbage_water_requirement = result.irri_kharif_cabbage_water_requirement;
                    // ddetails1.irri_kharif_beans_water_requirement = result.irri_kharif_beans_water_requirement;
                    ddetails1.irri_kharif_floriculture_water_requirement = result.irri_kharif_floriculture_water_requirement;
                    ddetails1.irri_kharif_sericulture_water_requirement = result.irri_kharif_sericulture_water_requirement;
                    // ddetails1.irri_kharif_cucumber_water_requirement = result.irri_kharif_cucumber_water_requirement;
                    ddetails1.irri_kharif_banana_water_requirement = result.irri_kharif_banana_water_requirement;
                    ddetails1.irri_kharif_fodder_water_requirement = result.irri_kharif_fodder_water_requirement;
                    ddetails1.irri_kharif_maize_water_requirement = result.irri_kharif_maize_water_requirement;
                    //ddetails1.irri_kharif_potato_water_requirement = result.irri_kharif_potato_water_requirement;
                    ddetails1.irri_kharif_chillies_water_requirement = result.irri_kharif_chillies_water_requirement;
                    ddetails1.irri_kharif_cotton_water_requirement = result.irri_kharif_cotton_water_requirement;
                    ddetails1.irri_kharif_melon_water_requirement = result.irri_kharif_melon_water_requirement;
                    ddetails1.irri_kharif_citrus_water_requirement = result.irri_kharif_citrus_water_requirement;
                    //ddetails1.irri_kharif_peanut_water_requirement = result.irri_kharif_peanut_water_requirement;
                    ddetails1.irri_kharif_horticulture_water_requirement = result.irri_kharif_horticulture_water_requirement;
                    ddetails1.irri_rabi_sericulture_water_requirement = result.irri_rabi_sericulture_water_requirement;
                    ddetails1.irri_rabi_tomoto_water_requirement = result.irri_rabi_tomoto_water_requirement;
                    // ddetails1.irri_rabi_cabbage_water_requirement = result.irri_rabi_cabbage_water_requirement;
                    // ddetails1.irri_rabi_beans_water_requirement = result.irri_rabi_beans_water_requirement;
                    ddetails1.irri_rabi_floriculture_water_requirement = result.irri_rabi_floriculture_water_requirement;
                    // ddetails1.irri_rabi_potato_water_requirement = result.irri_rabi_potato_water_requirement;
                    // ddetails1.irri_rabi_cucumber_water_requirement = result.irri_rabi_cucumber_water_requirement;
                    ddetails1.irri_rabi_ragi_water_requirement = result.irri_rabi_ragi_water_requirement;
                    ddetails1.irri_rabi_sugarcane_water_requirement = result.irri_rabi_sugarcane_water_requirement;
                    ddetails1.irri_rabi_maize_water_requirement = result.irri_rabi_maize_water_requirement;
                    ddetails1.irri_rabi_fodder_water_requirement = result.irri_rabi_fodder_water_requirement;
                    ddetails1.irri_rabi_paddy_water_requirement = result.irri_rabi_paddy_water_requirement;

                    ddetails1.irri_rabi_alfalfa_water_requirement = result.irri_rabi_alfalfa_water_requirement;
                    // ddetails1.irri_rabi_onion_water_requirement = result.irri_rabi_onion_water_requirement;
                    ddetails1.irri_rabi_horticulture_water_requirement = result.irri_rabi_horticulture_water_requirement;
                    ddetails1.irri_rabi_sunflower_water_requirement = result.irri_rabi_sunflower_water_requirement;
                    ddetails1.irri_summer_sericulture_water_requirement = result.irri_summer_sericulture_water_requirement;

                    ddetails1.irri_summer_tomoto_water_requirement = result.irri_summer_tomoto_water_requirement;
                    // ddetails1.irri_summer_cabbage_water_requirement = result.irri_summer_cabbage_water_requirement;
                    // ddetails1.irri_summer_beans_water_requirement = result.irri_summer_beans_water_requirement;
                    ddetails1.irri_summer_floriculture_water_requirement = result.irri_summer_floriculture_water_requirement;
                    ddetails1.irri_summer_maize_water_requirement = result.irri_summer_maize_water_requirement;
                    ddetails1.irri_summer_fodder_water_requirement = result.irri_summer_fodder_water_requirement;
                    ddetails1.irri_summer_sugarcane_water_requirement = result.irri_summer_sugarcane_water_requirement;

                    ddetails1.domestic_annual_req_total_value = result.domestic_annual_req_total_value;
                    ddetails1.domestic_demand_surface_water_total_value = result.domestic_demand_surface_water_total_value;
                    ddetails1.domestic_demand_ground_water_total_value = result.domestic_demand_ground_water_total_value;

                    ddetails1.irri_annual_water_demand = result.irri_annual_water_demand;

                    ddetails1.irri_summer_horticulture_waterdemand = result.irri_summer_horticulture_waterdemand;
                    ddetails1.irri_summer_horticulture_water_requirement = result.irri_summer_horticulture_water_requirement;
                    ddetails1.irri_summer_horticulture_crop_area = result.irri_summer_horticulture_crop_area;

                    //addcrop 
                    ddetails1.irri_kharif_othercrop_name1 = result.irri_kharif_othercrop_name1;
                    ddetails1.irri_kharif_othercrop_area1 = result.irri_kharif_othercrop_area1;
                    ddetails1.irri_kharif_othercrop_water_req1 = result.irri_kharif_othercrop_water_req1;
                    ddetails1.irri_kharif_othercrop_waterdemand1 = result.irri_kharif_othercrop_waterdemand1;

                    //mohan
                    ddetails1.irri_kharif_othercrop_name2 = result.irri_kharif_othercrop_name2;
                    ddetails1.irri_kharif_othercrop_area2 = result.irri_kharif_othercrop_area2;
                    ddetails1.irri_kharif_othercrop_water_req2 = result.irri_kharif_othercrop_water_req2;
                    ddetails1.irri_kharif_othercrop_waterdemand2 = result.irri_kharif_othercrop_waterdemand2;

                    ddetails1.irri_kharif_othercrop_name3 = result.irri_kharif_othercrop_name3;
                    ddetails1.irri_kharif_othercrop_area3 = result.irri_kharif_othercrop_area3;
                    ddetails1.irri_kharif_othercrop_water_req3 = result.irri_kharif_othercrop_water_req3;
                    ddetails1.irri_kharif_othercrop_waterdemand3 = result.irri_kharif_othercrop_waterdemand3;

                    ddetails1.irri_kharif_othercrop_name4 = result.irri_kharif_othercrop_name4;
                    ddetails1.irri_kharif_othercrop_area4 = result.irri_kharif_othercrop_area4;
                    ddetails1.irri_kharif_othercrop_water_req4 = result.irri_kharif_othercrop_water_req4;
                    ddetails1.irri_kharif_othercrop_waterdemand4 = result.irri_kharif_othercrop_waterdemand4;

                    ddetails1.irri_kharif_othercrop_name5 = result.irri_kharif_othercrop_name5;
                    ddetails1.irri_kharif_othercrop_area5 = result.irri_kharif_othercrop_area5;
                    ddetails1.irri_kharif_othercrop_water_req5 = result.irri_kharif_othercrop_water_req5;
                    ddetails1.irri_kharif_othercrop_waterdemand5 = result.irri_kharif_othercrop_waterdemand5;

                    //rabi
                    ddetails1.irri_rabi_othercrop_name1 = result.irri_rabi_othercrop_name1;
                    ddetails1.irri_rabi_othercrop_area1 = result.irri_rabi_othercrop_area1;
                    ddetails1.irri_rabi_othercrop_water_req1 = result.irri_rabi_othercrop_water_req1;
                    ddetails1.irri_rabi_othercrop_waterdemand1 = result.irri_rabi_othercrop_waterdemand1;

                    ddetails1.irri_rabi_othercrop_name2 = result.irri_rabi_othercrop_name2;
                    ddetails1.irri_rabi_othercrop_area2 = result.irri_rabi_othercrop_area2;
                    ddetails1.irri_rabi_othercrop_water_req2 = result.irri_rabi_othercrop_water_req2;
                    ddetails1.irri_rabi_othercrop_waterdemand2 = result.irri_rabi_othercrop_waterdemand2;

                    ddetails1.irri_rabi_othercrop_name3 = result.irri_rabi_othercrop_name3;
                    ddetails1.irri_rabi_othercrop_area3 = result.irri_rabi_othercrop_area3;
                    ddetails1.irri_rabi_othercrop_water_req3 = result.irri_rabi_othercrop_water_req3;
                    ddetails1.irri_rabi_othercrop_waterdemand3 = result.irri_rabi_othercrop_waterdemand3;

                    ddetails1.irri_rabi_othercrop_name4 = result.irri_rabi_othercrop_name4;
                    ddetails1.irri_rabi_othercrop_area4 = result.irri_rabi_othercrop_area4;
                    ddetails1.irri_rabi_othercrop_water_req4 = result.irri_rabi_othercrop_water_req4;
                    ddetails1.irri_rabi_othercrop_waterdemand4 = result.irri_rabi_othercrop_waterdemand4;

                    ddetails1.irri_rabi_othercrop_name5 = result.irri_rabi_othercrop_name5;
                    ddetails1.irri_rabi_othercrop_area5 = result.irri_rabi_othercrop_area5;
                    ddetails1.irri_rabi_othercrop_water_req5 = result.irri_rabi_othercrop_water_req5;
                    ddetails1.irri_rabi_othercrop_waterdemand5 = result.irri_rabi_othercrop_waterdemand5;

                    //summer
                    ddetails1.irri_summer_othercrop_name1 = result.irri_summer_othercrop_name1;
                    ddetails1.irri_summer_othercrop_area1 = result.irri_summer_othercrop_area1;
                    ddetails1.irri_summer_othercrop_water_req1 = result.irri_summer_othercrop_water_req1;
                    ddetails1.irri_summer_othercrop_waterdemand1 = result.irri_summer_othercrop_waterdemand1;

                    ddetails1.irri_summer_othercrop_name2 = result.irri_summer_othercrop_name2;
                    ddetails1.irri_summer_othercrop_area2 = result.irri_summer_othercrop_area2;
                    ddetails1.irri_summer_othercrop_water_req2 = result.irri_summer_othercrop_water_req2;
                    ddetails1.irri_summer_othercrop_waterdemand2 = result.irri_summer_othercrop_waterdemand2;

                    ddetails1.irri_summer_othercrop_name3 = result.irri_summer_othercrop_name3;
                    ddetails1.irri_summer_othercrop_area3 = result.irri_summer_othercrop_area3;
                    ddetails1.irri_summer_othercrop_water_req3 = result.irri_summer_othercrop_water_req3;
                    ddetails1.irri_summer_othercrop_waterdemand3 = result.irri_summer_othercrop_waterdemand3;

                    ddetails1.irri_summer_othercrop_name4 = result.irri_summer_othercrop_name4;
                    ddetails1.irri_summer_othercrop_area4 = result.irri_summer_othercrop_area4;
                    ddetails1.irri_summer_othercrop_water_req4 = result.irri_summer_othercrop_water_req4;
                    ddetails1.irri_summer_othercrop_waterdemand4 = result.irri_summer_othercrop_waterdemand4;

                    ddetails1.irri_summer_othercrop_name5 = result.irri_summer_othercrop_name5;
                    ddetails1.irri_summer_othercrop_area5 = result.irri_summer_othercrop_area5;
                    ddetails1.irri_summer_othercrop_water_req5 = result.irri_summer_othercrop_water_req5;
                    ddetails1.irri_summer_othercrop_waterdemand5 = result.irri_summer_othercrop_waterdemand5;

                    ddetails1.weighted_crop_value = result.weighted_crop_value;
                    var TodayDate1 = DateTime.Now.ToString();
                    ddetails1.datetime = TodayDate1;

                    ddetails1.userid = Convert.ToInt32(Session["UserId"]);
                    ABE.Entry(ddetails1).State = EntityState.Modified;
                    ABE.SaveChanges();
                    return Json("Successfully Saved");
                }
                else
                {
                    if (ddetails.Count == 0)
                    {

                        obj.officer_name = Session["Officer"].ToString();
                        obj.irri_summer_horticulture_waterdemand = result.irri_summer_horticulture_waterdemand;
                        obj.irri_summer_horticulture_water_requirement = result.irri_summer_horticulture_water_requirement;
                        obj.irri_summer_horticulture_crop_area = result.irri_summer_horticulture_crop_area;
                        obj.irri_annual_water_demand = result.irri_annual_water_demand;
                        obj.state_name = State;
                        obj.district_name = Dist;
                        obj.block_name = Block;
                        obj.gpname = Gram;
                        obj.latitude = result.latitude; ;
                        obj.longitude = result.longitude;
                        obj.domestic_people_count = result.domestic_people_count;
                        obj.domestic_people_water_req = result.domestic_people_water_req;
                        obj.domestic_buffalo_count = result.domestic_buffalo_count;
                        obj.domestic_buffalo_water_req = result.domestic_buffalo_water_req;
                        obj.domestic_bullocks_count = result.domestic_bullocks_count;
                        obj.domestic_bullock_water_req = result.domestic_bullock_water_req;
                        obj.domestic_cow_count = result.domestic_cow_count;
                        obj.domestic_cow_water_req = result.domestic_cow_water_req;
                        obj.domestic_sheeps_count = result.domestic_sheeps_count;
                        obj.domestic_sheeps_water_req = result.domestic_sheeps_water_req;
                        obj.domestic_goat_count = result.domestic_goat_count;
                        obj.domestic_goat_water_req = result.domestic_goat_water_req;
                        obj.domestic_donkey_count = result.domestic_donkey_count;
                        obj.domestic_donkey_water_req = result.domestic_donkey_water_req;
                        obj.domestic_camel_count = result.domestic_camel_count;
                        obj.domestic_camel_water_req = result.domestic_camel_water_req;

                        obj.domestic_annual_req_people = result.domestic_annual_req_people;
                        obj.domestic_annual_req_livestock = result.domestic_annual_req_livestock;
                        obj.domestic_demand_surface_water = result.domestic_demand_surface_water;
                        obj.domestic_demand_ground_water = result.domestic_demand_ground_water;

                        obj.domestic_demand_surface_water_livestock = result.domestic_demand_surface_water_livestock;
                        obj.domestic_demand_ground_water_livestock = result.domestic_demand_ground_water_livestock;


                        obj.irri_kharif_paddy_crop_area = result.irri_kharif_paddy_crop_area;
                        obj.irri_kharif_paddy_waterdemand = result.irri_kharif_paddy_waterdemand;
                        obj.irri_kharif_ragi_crop_area = result.irri_kharif_ragi_crop_area;
                        obj.irri_kharif_ragi_waterdemand = result.irri_kharif_ragi_waterdemand;
                        obj.irri_kharif_groundnut_crop_area = result.irri_kharif_groundnut_crop_area;
                        obj.irri_kharif_groundnut_waterdemand = result.irri_kharif_groundnut_waterdemand;
                        obj.irri_kharif_sugarcane_crop_area = result.irri_kharif_sugarcane_crop_area;
                        obj.irri_kharif_sugarcane_waterdemand = result.irri_kharif_sugarcane_waterdemand;
                        obj.irri_kharif_tomoto_crop_area = result.irri_kharif_tomoto_crop_area;
                        obj.irri_kharif_tomoto_waterdemand = result.irri_kharif_tomoto_waterdemand;
                        // obj.irri_kharif_cabbage_crop_area = result.irri_kharif_cabbage_crop_area;
                        //obj.irri_kharif_cabbage_waterdemand = result.irri_kharif_cabbage_waterdemand;
                        //obj.irri_kharif_beans_crop_area = result.irri_kharif_beans_crop_area;
                        //obj.irri_kharif_beans_waterdemand = result.irri_kharif_beans_waterdemand;
                        obj.irri_kharif_floriculture_crop_area = result.irri_kharif_floriculture_crop_area;
                        obj.irri_kharif_floriculture_waterdemand = result.irri_kharif_floriculture_waterdemand;
                        obj.irri_kharif_sericulture_crop_area = result.irri_kharif_sericulture_crop_area;
                        obj.irri_kharif_sericulture_waterdemand = result.irri_kharif_sericulture_waterdemand;
                        //obj.irri_kharif_cucumber_crop_area = result.irri_kharif_cucumber_crop_area;
                        //obj.irri_kharif_cucumber_waterdemand = result.irri_kharif_cucumber_waterdemand;
                        obj.irri_kharif_banana_crop_area = result.irri_kharif_banana_crop_area;
                        obj.irri_kharif_banana_waterdemand = result.irri_kharif_banana_waterdemand;
                        obj.irri_kharif_fodder_crop_area = result.irri_kharif_fodder_crop_area;
                        obj.irri_kharif_fodder_waterdemand = result.irri_kharif_fodder_waterdemand;
                        obj.irri_kharif_maize_crop_area = result.irri_kharif_maize_crop_area;
                        obj.irri_kharif_maize_waterdemand = result.irri_kharif_maize_waterdemand;
                        // obj.irri_kharif_potato_crop_area = result.irri_kharif_potato_crop_area;
                        // obj.irri_kharif_potato_waterdemand = result.irri_kharif_potato_waterdemand;
                        obj.irri_kharif_chillies_crop_area = result.irri_kharif_chillies_crop_area;
                        obj.irri_kharif_chillies_waterdemand = result.irri_kharif_chillies_waterdemand;
                        obj.irri_kharif_cotton_crop_area = result.irri_kharif_cotton_crop_area;
                        obj.irri_kharif_cotton_waterdemand = result.irri_kharif_cotton_waterdemand;
                        obj.irri_kharif_melon_crop_area = result.irri_kharif_melon_crop_area;
                        obj.irri_kharif_melon_waterdemand = result.irri_kharif_melon_waterdemand;
                        obj.irri_kharif_citrus_crop_area = result.irri_kharif_citrus_crop_area;
                        obj.irri_kharif_citrus_waterdemand = result.irri_kharif_citrus_waterdemand;

                        // obj.irri_kharif_peanut_crop_area = result.irri_kharif_peanut_crop_area;
                        // obj.irri_kharif_peanut_waterdemand = result.irri_kharif_peanut_waterdemand;
                        obj.irri_kharif_horticulture_crop_area = result.irri_kharif_horticulture_crop_area;
                        obj.irri_kharif_horticulture_waterdemand = result.irri_kharif_horticulture_waterdemand;
                        obj.irri_kharif_total_waterdemand_kharifcrops = result.irri_kharif_total_waterdemand_kharifcrops;
                        obj.irri_rabi_sericulture_crop_area = result.irri_rabi_sericulture_crop_area;
                        obj.irri_rabi_sericulture_waterdemand = result.irri_rabi_sericulture_waterdemand;
                        obj.irri_rabi_tomoto_crop_area = result.irri_rabi_tomoto_crop_area;
                        obj.irri_rabi_tomoto_waterdemand = result.irri_rabi_tomoto_waterdemand;
                        // obj.irri_rabi_cabbage_crop_area = result.irri_rabi_cabbage_crop_area;
                        // obj.irri_rabi_cabbage_waterdemand = result.irri_rabi_cabbage_waterdemand;
                        // obj.irri_rabi_beans_crop_area = result.irri_rabi_beans_crop_area;
                        // obj.irri_rabi_beans_waterdemand = result.irri_rabi_beans_waterdemand;
                        obj.irri_rabi_floriculture_crop_area = result.irri_rabi_floriculture_crop_area;
                        obj.irri_rabi_floriculture_waterdemand = result.irri_rabi_floriculture_waterdemand;
                        // obj.irri_rabi_potato_crop_area = result.irri_rabi_potato_crop_area;
                        // obj.irri_rabi_potato_waterdemand = result.irri_rabi_potato_waterdemand;
                        // obj.irri_rabi_cucumber_crop_area = result.irri_rabi_cucumber_crop_area;
                        // obj.irri_rabi_cucumber_waterdemand = result.irri_rabi_cucumber_waterdemand;
                        obj.irri_rabi_ragi_crop_area = result.irri_rabi_ragi_crop_area;
                        obj.irri_rabi_ragi_waterdemand = result.irri_rabi_ragi_waterdemand;
                        obj.irri_rabi_sugarcane_crop_area = result.irri_rabi_sugarcane_crop_area;
                        obj.irri_rabi_sugarcane_waterdemand = result.irri_rabi_sugarcane_waterdemand;
                        obj.irri_rabi_maize_crop_area = result.irri_rabi_maize_crop_area;
                        obj.irri_rabi_maize_waterdemand = result.irri_rabi_maize_waterdemand;
                        obj.irri_rabi_fodder_crop_area = result.irri_rabi_fodder_crop_area;
                        obj.irri_rabi_fodder_waterdemand = result.irri_rabi_fodder_waterdemand;
                        obj.irri_rabi_paddy_crop_area = result.irri_rabi_paddy_crop_area;
                        obj.irri_rabi_paddy_waterdemand = result.irri_rabi_paddy_waterdemand;
                        obj.irri_rabi_alfalfa_crop_area = result.irri_rabi_alfalfa_crop_area;
                        obj.irri_rabi_alfalfa_waterdemand = result.irri_rabi_alfalfa_waterdemand;
                        // obj.irri_rabi_onion_crop_area = result.irri_rabi_onion_crop_area;
                        // obj.irri_rabi_onion_waterdemand = result.irri_rabi_onion_waterdemand;
                        obj.irri_rabi_horticulture_crop_area = result.irri_rabi_horticulture_crop_area;
                        obj.irri_rabi_horticulture_waterdemand = result.irri_rabi_horticulture_waterdemand;
                        obj.irri_rabi_sunflower_crop_area = result.irri_rabi_sunflower_crop_area;
                        obj.irri_rabi_sunflower_waterdemand = result.irri_rabi_sunflower_waterdemand;
                        obj.irri_rabi_total_waterdemand_rabicrops = result.irri_rabi_total_waterdemand_rabicrops;
                        obj.irri_summer_sericulture_crop_area = result.irri_summer_sericulture_crop_area;
                        obj.irri_summer_sericulture_waterdemand = result.irri_summer_sericulture_waterdemand;
                        obj.irri_summer_tomoto_crop_area = result.irri_summer_tomoto_crop_area;
                        obj.irri_summer_tomoto_waterdemand = result.irri_summer_tomoto_waterdemand;
                        // obj.irri_summer_cabbage_crop_area = result.irri_summer_cabbage_crop_area;
                        // obj.irri_summer_cabbage_waterdemand = result.irri_summer_cabbage_waterdemand;
                        // obj.irri_summer_beans_crop_area = result.irri_summer_beans_crop_area;
                        // obj.irri_summer_beans_waterdemand = result.irri_summer_beans_waterdemand;
                        obj.irri_summer_floriculture_crop_area = result.irri_summer_floriculture_crop_area;
                        obj.irri_summer_floriculture_waterdemand = result.irri_summer_floriculture_waterdemand;
                        obj.irri_summer_maize_crop_area = result.irri_summer_maize_crop_area;
                        obj.irri_summer_maize_waterdemand = result.irri_summer_maize_waterdemand;
                        obj.irri_summer_fodder_crop_area = result.irri_summer_fodder_crop_area;
                        obj.irri_summer_fodder_waterdemand = result.irri_summer_fodder_waterdemand;
                        obj.irri_summer_sugarcane_crop_area = result.irri_summer_sugarcane_crop_area;
                        obj.irri_summer_sugarcane_waterdemand = result.irri_summer_sugarcane_waterdemand;
                        obj.irri_summer_total_waterdemand_summercrops = result.irri_summer_total_waterdemand_summercrops;
                        //obj.irri_kharif_waterdemand = result.irri_kharif_waterdemand;
                        //obj.irri_rabi_waterdemand = result.irri_rabi_waterdemand;
                        //obj.irri_summer_waterdemand = result.irri_summer_waterdemand;
                        obj.irri_area_surfacewater = result.irri_area_surfacewater;
                        obj.irri_avg_crop_water_req = result.irri_avg_crop_water_req;
                        obj.irri_utili_surface_water = result.irri_utili_surface_water;
                        obj.irri_utili_ground_water = result.irri_utili_ground_water;
                        obj.industry_name = result.industry_name;
                        obj.industry_daily_water_req = result.industry_daily_water_req;
                        obj.industry_days_use = result.industry_days_use;
                        obj.industry_waterdemand = result.industry_waterdemand;
                        obj.industry_demand_surface_water = result.industry_demand_surface_water;
                        obj.industry_demand_ground_water = result.industry_demand_ground_water;
                        obj.other_type_of_use = result.other_type_of_use;
                        obj.other_daily_water_req = result.other_daily_water_req;
                        obj.other_days_use = result.other_days_use;
                        obj.other_annual_req = result.other_annual_req;
                        obj.other_demand_surface_water = result.other_demand_surface_water;
                        obj.other_demand_ground_water = result.other_demand_ground_water;
                        obj.userid = Convert.ToInt32(Session["UserId"]);

                        obj.domestic_livestock_count = result.domestic_livestock_count;
                        obj.domestic_livestock_water_req = result.domestic_livestock_water_req;

                        obj.domestic_people_water_requirement = result.domestic_people_water_requirement;
                        obj.domestic_livestock_water_requirement = result.domestic_livestock_water_requirement;
                        obj.domestic_buffalo_water_requirement = result.domestic_buffalo_water_requirement;
                        obj.domestic_bullock_water_requirement = result.domestic_bullock_water_requirement;
                        obj.domestic_cow_water_requirement = result.domestic_cow_water_requirement;
                        obj.domestic_sheeps_water_requirement = result.domestic_sheeps_water_requirement;
                        obj.domestic_goat_water_requirement = result.domestic_goat_water_requirement;
                        obj.domestic_donkey_water_requirement = result.domestic_donkey_water_requirement;
                        obj.domestic_camel_water_requirement = result.domestic_camel_water_requirement;

                        obj.irri_kharif_paddy_water_requirement = result.irri_kharif_paddy_water_requirement;
                        obj.irri_kharif_ragi_water_requirement = result.irri_kharif_ragi_water_requirement;
                        obj.irri_kharif_groundnut_water_requirement = result.irri_kharif_groundnut_water_requirement;
                        obj.irri_kharif_sugarcane_water_requirement = result.irri_kharif_sugarcane_water_requirement;
                        obj.irri_kharif_tomoto_water_requirement = result.irri_kharif_tomoto_water_requirement;
                        // obj.irri_kharif_cabbage_water_requirement = result.irri_kharif_cabbage_water_requirement;
                        // obj.irri_kharif_beans_water_requirement = result.irri_kharif_beans_water_requirement;
                        obj.irri_kharif_floriculture_water_requirement = result.irri_kharif_floriculture_water_requirement;
                        obj.irri_kharif_sericulture_water_requirement = result.irri_kharif_sericulture_water_requirement;
                        // obj.irri_kharif_cucumber_water_requirement = result.irri_kharif_cucumber_water_requirement;
                        obj.irri_kharif_banana_water_requirement = result.irri_kharif_banana_water_requirement;
                        obj.irri_kharif_fodder_water_requirement = result.irri_kharif_fodder_water_requirement;
                        obj.irri_kharif_maize_water_requirement = result.irri_kharif_maize_water_requirement;
                        // obj.irri_kharif_potato_water_requirement = result.irri_kharif_potato_water_requirement;
                        obj.irri_kharif_chillies_water_requirement = result.irri_kharif_chillies_water_requirement;
                        obj.irri_kharif_cotton_water_requirement = result.irri_kharif_cotton_water_requirement;
                        obj.irri_kharif_melon_water_requirement = result.irri_kharif_melon_water_requirement;
                        obj.irri_kharif_citrus_water_requirement = result.irri_kharif_citrus_water_requirement;
                        // obj.irri_kharif_peanut_water_requirement = result.irri_kharif_peanut_water_requirement;
                        obj.irri_kharif_horticulture_water_requirement = result.irri_kharif_horticulture_water_requirement;
                        obj.irri_rabi_sericulture_water_requirement = result.irri_rabi_sericulture_water_requirement;
                        obj.irri_rabi_tomoto_water_requirement = result.irri_rabi_tomoto_water_requirement;
                        //  obj.irri_rabi_cabbage_water_requirement = result.irri_rabi_cabbage_water_requirement;
                        //  obj.irri_rabi_beans_water_requirement = result.irri_rabi_beans_water_requirement;
                        obj.irri_rabi_floriculture_water_requirement = result.irri_rabi_floriculture_water_requirement;
                        //  obj.irri_rabi_potato_water_requirement = result.irri_rabi_potato_water_requirement;
                        //  obj.irri_rabi_cucumber_water_requirement = result.irri_rabi_cucumber_water_requirement;
                        obj.irri_rabi_ragi_water_requirement = result.irri_rabi_ragi_water_requirement;
                        obj.irri_rabi_sugarcane_water_requirement = result.irri_rabi_sugarcane_water_requirement;
                        obj.irri_rabi_maize_water_requirement = result.irri_rabi_maize_water_requirement;
                        obj.irri_rabi_fodder_water_requirement = result.irri_rabi_fodder_water_requirement;
                        obj.irri_rabi_paddy_water_requirement = result.irri_rabi_paddy_water_requirement;

                        obj.irri_rabi_alfalfa_water_requirement = result.irri_rabi_alfalfa_water_requirement;
                        //  obj.irri_rabi_onion_water_requirement = result.irri_rabi_onion_water_requirement;
                        obj.irri_rabi_horticulture_water_requirement = result.irri_rabi_horticulture_water_requirement;
                        obj.irri_rabi_sunflower_water_requirement = result.irri_rabi_sunflower_water_requirement;
                        obj.irri_summer_sericulture_water_requirement = result.irri_summer_sericulture_water_requirement;

                        obj.irri_summer_tomoto_water_requirement = result.irri_summer_tomoto_water_requirement;
                        //  obj.irri_summer_cabbage_water_requirement = result.irri_summer_cabbage_water_requirement;
                        //  obj.irri_summer_beans_water_requirement = result.irri_summer_beans_water_requirement;
                        obj.irri_summer_floriculture_water_requirement = result.irri_summer_floriculture_water_requirement;
                        obj.irri_summer_maize_water_requirement = result.irri_summer_maize_water_requirement;
                        obj.irri_summer_fodder_water_requirement = result.irri_summer_fodder_water_requirement;
                        obj.irri_summer_sugarcane_water_requirement = result.irri_summer_sugarcane_water_requirement;

                        obj.domestic_annual_req_total_value = result.domestic_annual_req_total_value;
                        obj.domestic_demand_surface_water_total_value = result.domestic_demand_surface_water_total_value;
                        obj.domestic_demand_ground_water_total_value = result.domestic_demand_ground_water_total_value;

                        //addcrop 
                        obj.irri_kharif_othercrop_name1 = result.irri_kharif_othercrop_name1;
                        obj.irri_kharif_othercrop_area1 = result.irri_kharif_othercrop_area1;
                        obj.irri_kharif_othercrop_water_req1 = result.irri_kharif_othercrop_water_req1;
                        obj.irri_kharif_othercrop_waterdemand1 = result.irri_kharif_othercrop_waterdemand1;

                        //mohan
                        obj.irri_kharif_othercrop_name2 = result.irri_kharif_othercrop_name2;
                        obj.irri_kharif_othercrop_area2 = result.irri_kharif_othercrop_area2;
                        obj.irri_kharif_othercrop_water_req2 = result.irri_kharif_othercrop_water_req2;
                        obj.irri_kharif_othercrop_waterdemand2 = result.irri_kharif_othercrop_waterdemand2;

                        obj.irri_kharif_othercrop_name3 = result.irri_kharif_othercrop_name3;
                        obj.irri_kharif_othercrop_area3 = result.irri_kharif_othercrop_area3;
                        obj.irri_kharif_othercrop_water_req3 = result.irri_kharif_othercrop_water_req3;
                        obj.irri_kharif_othercrop_waterdemand3 = result.irri_kharif_othercrop_waterdemand3;

                        obj.irri_kharif_othercrop_name4 = result.irri_kharif_othercrop_name4;
                        obj.irri_kharif_othercrop_area4 = result.irri_kharif_othercrop_area4;
                        obj.irri_kharif_othercrop_water_req4 = result.irri_kharif_othercrop_water_req4;
                        obj.irri_kharif_othercrop_waterdemand4 = result.irri_kharif_othercrop_waterdemand4;

                        obj.irri_kharif_othercrop_name5 = result.irri_kharif_othercrop_name5;
                        obj.irri_kharif_othercrop_area5 = result.irri_kharif_othercrop_area5;
                        obj.irri_kharif_othercrop_water_req5 = result.irri_kharif_othercrop_water_req5;
                        obj.irri_kharif_othercrop_waterdemand5 = result.irri_kharif_othercrop_waterdemand5;

                        //rabi
                        obj.irri_rabi_othercrop_name1 = result.irri_rabi_othercrop_name1;
                        obj.irri_rabi_othercrop_area1 = result.irri_rabi_othercrop_area1;
                        obj.irri_rabi_othercrop_water_req1 = result.irri_rabi_othercrop_water_req1;
                        obj.irri_rabi_othercrop_waterdemand1 = result.irri_rabi_othercrop_waterdemand1;

                        obj.irri_rabi_othercrop_name2 = result.irri_rabi_othercrop_name2;
                        obj.irri_rabi_othercrop_area2 = result.irri_rabi_othercrop_area2;
                        obj.irri_rabi_othercrop_water_req2 = result.irri_rabi_othercrop_water_req2;
                        obj.irri_rabi_othercrop_waterdemand2 = result.irri_rabi_othercrop_waterdemand2;

                        obj.irri_rabi_othercrop_name3 = result.irri_rabi_othercrop_name3;
                        obj.irri_rabi_othercrop_area3 = result.irri_rabi_othercrop_area3;
                        obj.irri_rabi_othercrop_water_req3 = result.irri_rabi_othercrop_water_req3;
                        obj.irri_rabi_othercrop_waterdemand3 = result.irri_rabi_othercrop_waterdemand3;

                        obj.irri_rabi_othercrop_name4 = result.irri_rabi_othercrop_name4;
                        obj.irri_rabi_othercrop_area4 = result.irri_rabi_othercrop_area4;
                        obj.irri_rabi_othercrop_water_req4 = result.irri_rabi_othercrop_water_req4;
                        obj.irri_rabi_othercrop_waterdemand4 = result.irri_rabi_othercrop_waterdemand4;

                        obj.irri_rabi_othercrop_name5 = result.irri_rabi_othercrop_name5;
                        obj.irri_rabi_othercrop_area5 = result.irri_rabi_othercrop_area5;
                        obj.irri_rabi_othercrop_water_req5 = result.irri_rabi_othercrop_water_req5;
                        obj.irri_rabi_othercrop_waterdemand5 = result.irri_rabi_othercrop_waterdemand5;

                        //summer
                        obj.irri_summer_othercrop_name1 = result.irri_summer_othercrop_name1;
                        obj.irri_summer_othercrop_area1 = result.irri_summer_othercrop_area1;
                        obj.irri_summer_othercrop_water_req1 = result.irri_summer_othercrop_water_req1;
                        obj.irri_summer_othercrop_waterdemand1 = result.irri_summer_othercrop_waterdemand1;

                        obj.irri_summer_othercrop_name2 = result.irri_summer_othercrop_name2;
                        obj.irri_summer_othercrop_area2 = result.irri_summer_othercrop_area2;
                        obj.irri_summer_othercrop_water_req2 = result.irri_summer_othercrop_water_req2;
                        obj.irri_summer_othercrop_waterdemand2 = result.irri_summer_othercrop_waterdemand2;

                        obj.irri_summer_othercrop_name3 = result.irri_summer_othercrop_name3;
                        obj.irri_summer_othercrop_area3 = result.irri_summer_othercrop_area3;
                        obj.irri_summer_othercrop_water_req3 = result.irri_summer_othercrop_water_req3;
                        obj.irri_summer_othercrop_waterdemand3 = result.irri_summer_othercrop_waterdemand3;

                        obj.irri_summer_othercrop_name4 = result.irri_summer_othercrop_name4;
                        obj.irri_summer_othercrop_area4 = result.irri_summer_othercrop_area4;
                        obj.irri_summer_othercrop_water_req4 = result.irri_summer_othercrop_water_req4;
                        obj.irri_summer_othercrop_waterdemand4 = result.irri_summer_othercrop_waterdemand4;

                        obj.irri_summer_othercrop_name5 = result.irri_summer_othercrop_name5;
                        obj.irri_summer_othercrop_area5 = result.irri_summer_othercrop_area5;
                        obj.irri_summer_othercrop_water_req5 = result.irri_summer_othercrop_water_req5;
                        obj.irri_summer_othercrop_waterdemand5 = result.irri_summer_othercrop_waterdemand5;

                        obj.weighted_crop_value = result.weighted_crop_value;

                        var TodayDate1 = DateTime.Now.ToString();
                        obj.datetime = TodayDate1;

                        ABE.obj_abhy_waterdraft_new.Add(obj);
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
        public ActionResult WaterIndustry_InsertData(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_waterdraft_industry_new> ddetails = new List<abhy_waterdraft_industry_new>();
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_waterdraft_industry_new>(Data);
                    abhy_waterdraft_industry_new obj = new abhy_waterdraft_industry_new();
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();
                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    obj.block_name = Block;
                    obj.district_name = Dist;
                    obj.gpname = Gram;
                    double industry_daily_water_req = 0;
                    if (result.industry_daily_water_req != null && result.industry_daily_water_req != "")
                    {
                        industry_daily_water_req = double.Parse(result.industry_daily_water_req);
                    }
                    double industry_days_use = 0;
                    if (result.industry_days_use != null && result.industry_days_use != "")
                    {
                        industry_days_use = double.Parse(result.industry_days_use);
                    }

                    var industry_waterdemand = double.Parse(result.industry_waterdemand);

                    if (result.industry_daily_water_req != "")
                    {
                        obj.industry_daily_water_req = result.industry_daily_water_req;
                    }
                    else
                    {
                        return Json("Please Enter Daily Water Requirement(l/day)");
                    }

                    if (result.industry_days_use != "")
                    {
                        obj.industry_days_use = result.industry_days_use;
                    }
                    else
                    {
                        return Json("Please Enter No. of Days in Use");
                    }
                    if (result.industry_demand_ground_water != "")
                    {
                        obj.industry_demand_ground_water = result.industry_demand_ground_water;
                    }
                    else
                    {
                        return Json("Please Enter Demand Met From Ground Water (Ha.m)");
                    }
                    if (result.industry_demand_surface_water != "")
                    {
                        obj.industry_demand_surface_water = result.industry_demand_surface_water;
                    }
                    else
                    {
                        return Json("Please Enter Demand Met From Surface Water (Ha.m)");
                    }
                    if (result.industry_name != "")
                    {
                        obj.industry_name = result.industry_name;
                    }
                    else
                    {
                        return Json("Please Enter Industry Name");
                    }



                    obj.industry_waterdemand = industry_waterdemand.ToString();
                    obj.latitude = result.latitude;
                    obj.longitude = result.longitude;
                    obj.state_name = State;
                    var TodayDate1 = DateTime.Now.ToString();
                    obj.datetime = TodayDate1;
                    obj.userid = Convert.ToInt32(Session["UserId"]);
                    obj.officer_name = Session["Officer"].ToString();
                    ABE.obj_abhy_waterdraft_industry_new.Add(obj);
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
        public ActionResult WaterIndustry_Info_Details()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_waterdraft_industry_new> ddetails = new List<abhy_waterdraft_industry_new>();

                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();

                    if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null && Gram != "" && Gram != null)
                    {
                        ddetails = ABE.obj_abhy_waterdraft_industry_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                    }
                    else if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null)
                    {
                        ddetails = ABE.obj_abhy_waterdraft_industry_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                    }
                    else if (State != "" && State != null && Dist != "" && Dist != null)
                    {
                        ddetails = ABE.obj_abhy_waterdraft_industry_new.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                    }
                    else if (State != "" && State != null)
                    {
                        ddetails = ABE.obj_abhy_waterdraft_industry_new.Where(x => x.state_name == State).ToList();//total list

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
        public ActionResult Water_Domestic_InsertData(string Data)
        {
            if (Session["UserId"] != null)
            {
                var UserId = Convert.ToInt32(Session["UserId"].ToString());
                List<abhy_waterdraft_domestic_new> ddetails = new List<abhy_waterdraft_domestic_new>();
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<abhy_waterdraft_domestic_new>(Data);
                abhy_waterdraft_domestic_new obj = new abhy_waterdraft_domestic_new();
                var State = Session["gstate"].ToString();
                var Dist = Session["gdist"].ToString();

                var Block = Session["gblock"].ToString();
                var Gram = Session["ggram"].ToString();

                if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null && Gram != "" && Gram != null)
                {
                    ddetails = ABE.obj_abhy_waterdraft_domestic_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                }
                else if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null)
                {
                    ddetails = ABE.obj_abhy_waterdraft_domestic_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                }
                else if (State != "" && State != null && Dist != "" && Dist != null)
                {
                    ddetails = ABE.obj_abhy_waterdraft_domestic_new.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                }
                else if (State != "" && State != null)
                {
                    ddetails = ABE.obj_abhy_waterdraft_domestic_new.Where(x => x.state_name == State).ToList();//total list

                }
                if (ddetails.Count == 1)
                {
                    var ddetails1 = ddetails.SingleOrDefault();
                    ddetails1.userid = UserId;
                    ddetails1.state_name = State;
                    ddetails1.officer_name = Session["Officer"].ToString();
                    ddetails1.district_name = Dist;
                    ddetails1.block_name = Block;
                    ddetails1.gpname = Gram;
                    ddetails1.longitude = result.longitude;
                    ddetails1.latitude = result.latitude;
                    ddetails1.domestic_people_water_requirement = result.domestic_people_water_requirement;
                    ddetails1.domestic_livestock_water_requirement = result.domestic_livestock_water_requirement;
                    ddetails1.domestic_buffalo_water_requirement = result.domestic_buffalo_water_requirement;
                    ddetails1.domestic_bullock_water_requirement = result.domestic_bullock_water_requirement;
                    ddetails1.domestic_cow_water_requirement = result.domestic_cow_water_requirement;
                    ddetails1.domestic_sheeps_water_requirement = result.domestic_sheeps_water_requirement;
                    ddetails1.domestic_goat_water_requirement = result.domestic_goat_water_requirement;
                    ddetails1.domestic_donkey_water_requirement = result.domestic_donkey_water_requirement;
                    ddetails1.domestic_camel_water_requirement = result.domestic_camel_water_requirement;
                    ddetails1.domestic_people_count = result.domestic_people_count;
                    ddetails1.domestic_livestock_count = result.domestic_livestock_count;
                    ddetails1.domestic_buffalo_count = result.domestic_buffalo_count;
                    ddetails1.domestic_bullocks_count = result.domestic_bullocks_count;
                    ddetails1.domestic_cow_count = result.domestic_cow_count;
                    ddetails1.domestic_sheeps_count = result.domestic_sheeps_count;
                    ddetails1.domestic_goat_count = result.domestic_goat_count;
                    ddetails1.domestic_donkey_count = result.domestic_donkey_count;
                    ddetails1.domestic_camel_count = result.domestic_camel_count;
                    ddetails1.domestic_people_water_req = result.domestic_people_water_req;
                    ddetails1.domestic_buffalo_water_req = result.domestic_buffalo_water_req;
                    ddetails1.domestic_bullock_water_req = result.domestic_bullock_water_req;
                    ddetails1.domestic_cow_water_req = result.domestic_cow_water_req;
                    ddetails1.domestic_sheeps_water_req = result.domestic_sheeps_water_req;
                    ddetails1.domestic_goat_water_req = result.domestic_goat_water_req;
                    ddetails1.domestic_donkey_water_req = result.domestic_donkey_water_req;
                    ddetails1.domestic_camel_water_req = result.domestic_camel_water_req;
                    ddetails1.domestic_livestock_water_req = result.domestic_livestock_water_req;
                    ddetails1.domestic_annual_req_people = result.domestic_annual_req_people;
                    ddetails1.domestic_annual_req_livestock = result.domestic_annual_req_livestock;
                    ddetails1.domestic_demand_userentry_groundwater_human = result.domestic_demand_userentry_groundwater_human;
                    ddetails1.domestic_demand_ground_water = result.domestic_demand_ground_water;
                    ddetails1.domestic_demand_userentry_surfacewater_human = result.domestic_demand_userentry_surfacewater_human;
                    ddetails1.domestic_demand_surface_water = result.domestic_demand_surface_water;
                    ddetails1.domestic_demand_userentry_groundwater_livestock = result.domestic_demand_userentry_groundwater_livestock;
                    ddetails1.domestic_demand_ground_water_livestock = result.domestic_demand_ground_water_livestock;
                    ddetails1.domestic_demand_userentry_surfacewater_livestock = result.domestic_demand_userentry_surfacewater_livestock;
                    ddetails1.domestic_demand_surface_water_livestock = result.domestic_demand_surface_water_livestock;
                    ddetails1.domestic_demand_ground_water_total_value = result.domestic_demand_ground_water_total_value;
                    ddetails1.domestic_demand_surface_water_total_value = result.domestic_demand_surface_water_total_value;
                    var TodayDate1 = DateTime.Now.ToString();
                    ddetails1.datetime = TodayDate1;
                    ddetails1.userid = Convert.ToInt32(Session["UserId"]);
                    ABE.Entry(ddetails1).State = EntityState.Modified;
                    ABE.SaveChanges();
                    return Json("Successfully Saved");
                }
                else
                {
                    if (ddetails.Count == 0)
                    {
                        obj.userid = UserId;
                        obj.state_name = State;
                        obj.district_name = Dist;
                        obj.block_name = Block;
                        obj.gpname = Gram;
                        obj.officer_name = Session["Officer"].ToString();
                        obj.longitude = result.longitude;
                        obj.latitude = result.latitude;
                        obj.domestic_people_water_requirement = result.domestic_people_water_requirement;
                        obj.domestic_livestock_water_requirement = result.domestic_livestock_water_requirement;
                        obj.domestic_buffalo_water_requirement = result.domestic_buffalo_water_requirement;
                        obj.domestic_bullock_water_requirement = result.domestic_bullock_water_requirement;
                        obj.domestic_cow_water_requirement = result.domestic_cow_water_requirement;
                        obj.domestic_sheeps_water_requirement = result.domestic_sheeps_water_requirement;
                        obj.domestic_goat_water_requirement = result.domestic_goat_water_requirement;
                        obj.domestic_donkey_water_requirement = result.domestic_donkey_water_requirement;
                        obj.domestic_camel_water_requirement = result.domestic_camel_water_requirement;
                        obj.domestic_people_count = result.domestic_people_count;
                        obj.domestic_livestock_count = result.domestic_livestock_count;
                        obj.domestic_buffalo_count = result.domestic_buffalo_count;
                        obj.domestic_bullocks_count = result.domestic_bullocks_count;
                        obj.domestic_cow_count = result.domestic_cow_count;
                        obj.domestic_sheeps_count = result.domestic_sheeps_count;
                        obj.domestic_goat_count = result.domestic_goat_count;
                        obj.domestic_donkey_count = result.domestic_donkey_count;
                        obj.domestic_camel_count = result.domestic_camel_count;
                        obj.domestic_people_water_req = result.domestic_people_water_req;
                        obj.domestic_buffalo_water_req = result.domestic_buffalo_water_req;
                        obj.domestic_bullock_water_req = result.domestic_bullock_water_req;
                        obj.domestic_cow_water_req = result.domestic_cow_water_req;
                        obj.domestic_sheeps_water_req = result.domestic_sheeps_water_req;
                        obj.domestic_goat_water_req = result.domestic_goat_water_req;
                        obj.domestic_donkey_water_req = result.domestic_donkey_water_req;
                        obj.domestic_camel_water_req = result.domestic_camel_water_req;
                        obj.domestic_livestock_water_req = result.domestic_livestock_water_req;
                        obj.domestic_annual_req_people = result.domestic_annual_req_people;
                        obj.domestic_annual_req_livestock = result.domestic_annual_req_livestock;
                        obj.domestic_demand_userentry_groundwater_human = result.domestic_demand_userentry_groundwater_human;
                        obj.domestic_demand_ground_water = result.domestic_demand_ground_water;
                        obj.domestic_demand_userentry_surfacewater_human = result.domestic_demand_userentry_surfacewater_human;
                        obj.domestic_demand_surface_water = result.domestic_demand_surface_water;
                        obj.domestic_demand_userentry_groundwater_livestock = result.domestic_demand_userentry_groundwater_livestock;
                        obj.domestic_demand_ground_water_livestock = result.domestic_demand_ground_water_livestock;
                        obj.domestic_demand_userentry_surfacewater_livestock = result.domestic_demand_userentry_surfacewater_livestock;
                        obj.domestic_demand_surface_water_livestock = result.domestic_demand_surface_water_livestock;
                        obj.domestic_demand_ground_water_total_value = result.domestic_demand_ground_water_total_value;
                        obj.domestic_demand_surface_water_total_value = result.domestic_demand_surface_water_total_value;
                        var TodayDate1 = DateTime.Now.ToString();
                        obj.datetime = TodayDate1;
                        ABE.obj_abhy_waterdraft_domestic_new.Add(obj);
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

        [HttpGet]
        public ActionResult Water_Domestic_Details()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_uti_waterdraft_domestic_new> ddetails = new List<abhy_uti_waterdraft_domestic_new>();

                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    var year = Session["year"].ToString();

                    if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null && Gram != "" && Gram != null && year != "" && year != null && year != "0")
                    {
                        ddetails = ABE.obj_abhy_uti_waterdraft_domestic_new.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.year == year).ToList();//total list

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

        //[HttpGet]
        //public ActionResult GPDCI_Details()
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
        //            var year = Session["year"].ToString();

        //            if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null && Gram != "" && Gram != null)
        //            {
        //                ddetails = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == year).ToList();//total list

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
        //        // return RedirectToAction("WSP_GWM_HOME", "WSPNew");
        //    }
        //}

        //Akash
        [HttpGet]
        public ActionResult baseline_gpdata()
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

                    if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null && Gram != "" && Gram != null)
                    {
                        ddetails = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                    }
                    else if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null)
                    {
                        ddetails = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                    }
                    else if (State != "" && State != null && Dist != "" && Dist != null)
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
                // return RedirectToAction("WSP_GWM_HOME", "WSPNew");
            }
        }
        //Akash end code


        [HttpPost]
        public ActionResult WaterIndustry_update(string WaterIndustry_update1)
        {

            JavaScriptSerializer js = new JavaScriptSerializer();
            var result = js.Deserialize<abhy_waterdraft_industry_new>(WaterIndustry_update1);


            var ARID = Convert.ToInt32(result.id);
            var Data1 = ABE.obj_abhy_waterdraft_industry_new.Where(x => x.id == ARID).FirstOrDefault();
            if (Data1 != null)
            {
                Data1.industry_daily_water_req = result.industry_daily_water_req;
                Data1.industry_days_use = result.industry_days_use;
                Data1.industry_demand_ground_water = result.industry_demand_ground_water;
                Data1.industry_demand_surface_water = result.industry_demand_surface_water;
                Data1.industry_name = result.industry_name;
                Data1.industry_waterdemand = result.industry_waterdemand;
                Data1.latitude = result.latitude;
                Data1.longitude = result.longitude;
                var TodayDate1 = DateTime.Now.ToString();
                Data1.datetime = TodayDate1;
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
        public ActionResult WaterIndustry_delete(string WaterIndustry_update1)
        {

            JavaScriptSerializer js = new JavaScriptSerializer();
            var result = js.Deserialize<abhy_waterdraft_industry_new>(WaterIndustry_update1);

            if (result.id != 0)
            {
                var ARID = Convert.ToInt32(result.id);
                var Data1 = ABE.obj_abhy_waterdraft_industry_new.Where(x => x.id == ARID).FirstOrDefault();
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
        public ActionResult WaterOther_Usesage_InsertData(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_waterdraft_other_new> ddetails = new List<abhy_waterdraft_other_new>();
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_waterdraft_other_new>(Data);
                    abhy_waterdraft_other_new obj = new abhy_waterdraft_other_new();
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    obj.block_name = Block;
                    obj.district_name = Dist;
                    obj.gpname = Gram;
                    double other_daily_water_req = 0;
                    if (result.other_daily_water_req != null && result.other_daily_water_req != "")
                    {
                        other_daily_water_req = double.Parse(result.other_daily_water_req);
                    }

                    double other_days_use = 0;
                    if (result.other_days_use != null && result.other_days_use != "")
                    {
                        other_days_use = double.Parse(result.other_days_use);
                    }
                    var other_annual_req = other_daily_water_req * other_days_use * 1 / 10000000;
                    obj.other_annual_req = other_annual_req.ToString("F");

                    if (result.other_daily_water_req != "")
                    {
                        obj.other_daily_water_req = result.other_daily_water_req;
                    }
                    else
                    {
                        return Json("Please Enter Daily Water Requirement(l/day)");
                    }

                    if (result.other_days_use != "")
                    {
                        obj.other_days_use = result.other_days_use;
                    }
                    else
                    {
                        return Json(" Please Enter No. of Days in Use");
                    }

                    if (result.other_demand_ground_water != "")
                    {
                        obj.other_demand_ground_water = result.other_demand_ground_water;
                    }
                    else
                    {
                        return Json(" Please Enter Demand Met From Ground Water (Ha.m)");
                    }
                    if (result.other_demand_surface_water != "")
                    {
                        obj.other_demand_surface_water = result.other_demand_surface_water;
                    }
                    else
                    {
                        return Json(" Please Enter Demand Met From Surface Water (Ha.m)");
                    }

                    if (result.other_type_of_use != "")
                    {
                        obj.other_type_of_use = result.other_type_of_use;
                    }
                    else
                    {
                        return Json(" Please Enter Type of Use");
                    }


                    obj.latitude = result.latitude;
                    obj.longitude = result.longitude;
                    obj.state_name = State;
                    var TodayDate1 = DateTime.Now.ToString();
                    obj.datetime = TodayDate1;
                    obj.userid = Convert.ToInt32(Session["UserId"]);
                    obj.officer_name = Session["Officer"].ToString();
                    ABE.obj_abhy_abhy_waterdraft_other_new.Add(obj);
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
        public ActionResult Other_Usage_update(string Other_Usage_update1)
        {

            JavaScriptSerializer js = new JavaScriptSerializer();
            var result = js.Deserialize<abhy_waterdraft_other_new>(Other_Usage_update1);


            var ARID = Convert.ToInt32(result.id);
            var Data1 = ABE.obj_abhy_abhy_waterdraft_other_new.Where(x => x.id == ARID).FirstOrDefault();
            if (Data1 != null)
            {
                Data1.other_annual_req = result.other_annual_req;
                Data1.other_daily_water_req = result.other_daily_water_req;
                Data1.other_days_use = result.other_days_use;
                Data1.other_demand_ground_water = result.other_demand_ground_water;
                Data1.other_demand_surface_water = result.other_demand_surface_water;
                Data1.other_type_of_use = result.other_type_of_use;
                Data1.latitude = result.latitude;
                Data1.longitude = result.longitude;
                var TodayDate1 = DateTime.Now.ToString();
                Data1.datetime = TodayDate1;
                //obj.userid = Convert.ToInt32(Session["UserId"]);

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
        public ActionResult Other_Usage_delete(string Other_Usage_update1)
        {

            JavaScriptSerializer js = new JavaScriptSerializer();
            var result = js.Deserialize<abhy_waterdraft_other_new>(Other_Usage_update1);

            if (result.id != 0)
            {
                var ARID = Convert.ToInt32(result.id);
                var Data1 = ABE.obj_abhy_abhy_waterdraft_other_new.Where(x => x.id == ARID).FirstOrDefault();
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
        [HttpGet]
        public ActionResult WaterOther_Usage_Info_Details()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_waterdraft_other_new> ddetails = new List<abhy_waterdraft_other_new>();

                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();

                    if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null && Gram != "" && Gram != null)
                    {
                        ddetails = ABE.obj_abhy_abhy_waterdraft_other_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                    }
                    else if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null)
                    {
                        ddetails = ABE.obj_abhy_abhy_waterdraft_other_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                    }
                    else if (State != "" && State != null && Dist != "" && Dist != null)
                    {
                        ddetails = ABE.obj_abhy_abhy_waterdraft_other_new.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                    }
                    else if (State != "" && State != null)
                    {
                        ddetails = ABE.obj_abhy_abhy_waterdraft_other_new.Where(x => x.state_name == State).ToList();//total list

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


        [HttpGet]
        public ActionResult WaterAvailabilty_GPAREA_Details()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_wsp_master_data> ddetails = new List<abhy_wsp_master_data>();

                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();

                    if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null && Gram != "" && Gram != null)
                    {
                        ddetails = ABE.obj_abhy_wsp_master_data.Where(x => x.state_name.ToLower() == State.ToLower() && x.district_name.ToLower() == Dist.ToLower() && x.block_name.ToLower() == Block.ToLower() && x.gp_name == Gram).ToList();//total list
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

        [HttpGet]
        public ActionResult AreGetGPDCI()
        {
            if (Session["userid"] != null)
            {

                var State = Session["gstate"].ToString();
                var Dist = Session["gdist"].ToString();
                var Block = Session["gblock"].ToString();
                var Gram = Session["ggram"].ToString();

                var ddetails1 = ABE.obj_abhy_block_gp_area_info.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gram_panchayat_name == Gram).Select(x => x.gp_area).FirstOrDefault();
                if (ddetails1 == null)
                {
                    return Json("", JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json(ddetails1, JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpGet]
        public ActionResult WaterAvailabiltyInfo_Details()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_wsp_wateravailbility_new> ddetails = new List<abhy_wsp_wateravailbility_new>();

                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    string year = Session["year"].ToString();
                    //var month = Session["month"].ToString();

                    ddetails = ABE.obj_abhy_wsp_wateravailbility_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.year == year).ToList();//total list
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

        [HttpGet]
        public ActionResult WaterutilizationInfo_Details()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_waterdraft_irrigation_meta> ddetails = new List<abhy_waterdraft_irrigation_meta>();

                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    string year = Session["year"].ToString();
                    //var month = Session["month"].ToString();

                    ddetails = ABE.obj_abhy_waterdraft_irrigation_meta.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.data_year == year).ToList();//total list
                    if (ddetails.Count == 0)
                    {
                        ddetails = ABE.obj_abhy_waterdraft_irrigation_meta.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.data_year == "2023-24").ToList();//total list
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

        [HttpGet]
        public ActionResult WaterindustryInfo_Details()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_waterdraft_industry> ddetails = new List<abhy_waterdraft_industry>();

                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();

                    if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null && Gram != "" && Gram != null)
                    {
                        ddetails = ABE.obj_abhy_waterdraft_industry.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                    }
                    else if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null)
                    {
                        ddetails = ABE.obj_abhy_waterdraft_industry.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                    }
                    else if (State != "" && State != null && Dist != "" && Dist != null)
                    {
                        ddetails = ABE.obj_abhy_waterdraft_industry.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                    }
                    else if (State != "" && State != null)
                    {
                        ddetails = ABE.obj_abhy_waterdraft_industry.Where(x => x.state_name == State).ToList();//total list

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

        [HttpGet]
        public ActionResult total()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_wsp_waterbalance_new> ddetails = new List<abhy_wsp_waterbalance_new>();

                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    var year = Session["year"].ToString();
                    //var year = Convert.ToInt32(Session["year"].ToString());
                    //var month = Session["month"].ToString();

                    ddetails = ABE.obj_abhy_wsp_waterbalance_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == year).ToList();//total list
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

        [HttpGet]
        public ActionResult WaterotherInfo_Details()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_waterdraft_other> ddetails = new List<abhy_waterdraft_other>();

                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();

                    if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null && Gram != "" && Gram != null)
                    {
                        ddetails = ABE.obj_abhy_waterdraft_other.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                    }
                    else if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null)
                    {
                        ddetails = ABE.obj_abhy_waterdraft_other.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                    }
                    else if (State != "" && State != null && Dist != "" && Dist != null)
                    {
                        ddetails = ABE.obj_abhy_waterdraft_other.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                    }
                    else if (State != "" && State != null)
                    {
                        ddetails = ABE.obj_abhy_waterdraft_other.Where(x => x.state_name == State).ToList();//total list

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

        // abhi0905

        //[HttpGet]
        //public ActionResult WaterAvailabiltyInfo_Details_New()
        //{
        //    if (Session["UserId"] != null)
        //    {
        //        try
        //        {

        //            var state = Session["gstate"].ToString();
        //            var dist = Session["gdist"].ToString();
        //            var block = Session["gblock"].ToString();
        //            var gram = Session["ggram"].ToString();


        //            var ddetails = ABE.obj_abhy_wateravailability_new.Where(x => x.ar_year == "2020" && x.state_name == state && x.district_name == dist && x.block_name == block && x.gpname == gram).ToList();
        //            var ddetails1 = ABE.obj_abhy_wateravailability_new.Where(x => x.er_year == "2020" && x.state_name == state && x.district_name == dist && x.block_name == block && x.gpname == gram).Select(n => n.sw_evapo).FirstOrDefault();
        //            if (ddetails.Count != 0)
        //            {
        //                ddetails[0].sw_evapo = ddetails1;
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


        // abhi0905

        //[HttpGet]
        //public ActionResult DropDownShowing_Year_Values(string AR_Year)
        //{
        //    if (Session["UserId"] != null)
        //    {
        //        try
        //        {

        //            var state = Session["gstate"].ToString();
        //            var dist = Session["gdist"].ToString();
        //            var block = Session["gblock"].ToString();
        //            var gram = Session["ggram"].ToString();


        //           var ddetails = ABE.obj_abhy_wateravailability_new.Where(x => x.ar_year == AR_Year && x.state_name == state && x.district_name == dist && x.block_name == block && x.gpname == gram).FirstOrDefault();


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



        

        [HttpPost] 
        public ActionResult WaterAvailabiltyInfo_InsertData(string Data)
        {
            try
            {
                if (Session["UserId"] != null)
                {
                    DateTime now = DateTime.Now;
                    int month = now.Month;

                    // Get the name of the month
                    string monthName = CultureInfo.CurrentCulture.DateTimeFormat.GetMonthName(month);
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_wsp_wateravailbility_new>(Data);
                    abhy_wsp_wateravailbility_new obj = new abhy_wsp_wateravailbility_new();

                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();
                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    var Year = Session["Year"].ToString();

                    var Month = monthName;

                    var Data_details = ABE.obj_abhy_wsp_wateravailbility_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.year == Year).ToList();
                    var ddetails = ABE.obj_abhy_wsp_master_data.Where(x => x.state_name.ToLower() == State.ToLower() && x.district_name.ToLower() == Dist.ToLower() && x.block_name.ToLower() == Block.ToLower() && x.gp_name == Gram).FirstOrDefault();

                    if (Data_details.Count > 0)
                    {
                        //if (ddetails.dist_annual_rainfall != result.annual_rainfall)
                        //{
                        //    if (ddetails.evt_mm == result.evapo_rate)
                        //    {
                        //        return Json("Please Change Evapotranspiration (mm) value");
                        //    }
                        //}

                        //if (ddetails.evt_mm != result.evapo_rate)
                        //{
                        //    if (ddetails.dist_annual_rainfall == result.annual_rainfall)
                        //    {
                        //        return Json("Please Change Annual Rainfall (mm) value");
                        //    }
                        //}
                        Data_details[0].ar_data_year = "2022";
                        Data_details[0].er_data_year = "2022";
                        if (result.other_source_name == "")
                        {
                            if (ddetails.dist_annual_rainfall != result.annual_rainfall)
                            {
                                return Json("Please Enter Other Source Name");
                            }
                            else
                            {
                                Data_details[0].other_source_name = result.other_source_name;
                            }
                        }
                        else
                        {
                            Data_details[0].other_source_name = result.other_source_name;
                        }



                        Data_details[0].annual_rainfall = result.annual_rainfall;
                        Data_details[0].est_vol_rainfall = result.est_vol_rainfall;
                        Data_details[0].evapo_rate = result.evapo_rate;
                        Data_details[0].est_evapo_loss = result.est_evapo_loss;
                        Data_details[0].est_water_rain = result.est_water_rain;
                        Data_details[0].weigh_run_conf = result.weigh_run_conf;
                        Data_details[0].rain_runoff = result.rain_runoff;
                        Data_details[0].rech_monsoon = result.rech_monsoon;
                        Data_details[0].rech_nonmonsoon = result.rech_nonmonsoon;
                        Data_details[0].tot_grd_rech_rain = result.tot_grd_rech_rain;
                        Data_details[0].ground_monsoon = result.ground_monsoon;
                        Data_details[0].ground_nonmonsoon = result.ground_nonmonsoon;
                        Data_details[0].tot_grd_rech_oth = result.tot_grd_rech_oth;
                        Data_details[0].loss_nature = result.loss_nature;
                        Data_details[0].tot_grd_wat_avail = result.tot_grd_wat_avail;
                        Data_details[0].ground_water_with = result.ground_water_with;
                        Data_details[0].category = result.category;
                        Data_details[0].avail_storages = result.avail_storages.TrimEnd(',');
                        Data_details[0].avail_storages_grd = result.avail_storages_grd.TrimEnd(',');
                        Data_details[0].avail_storages_sur = result.avail_storages_sur.TrimEnd(',');
                        Data_details[0].total_surface_body = result.total_surface_body;
                        Data_details[0].loss_if = result.loss_if;
                        Data_details[0].surface_water_avail = result.surface_water_avail;
                        Data_details[0].trans_water_out = result.trans_water_out;
                        Data_details[0].total_sirface_water = result.total_sirface_water;
                        Data_details[0].total_avail_water = result.total_avail_water;
                        Data_details[0].month = Month;
                        Data_details[0].month_ordery_by = Get_Month_Number(Month);


                        ABE.Entry(Data_details[0]).State = EntityState.Modified;
                        ABE.SaveChanges();
                        return Json("Successfully Updated");
                    }
                    else
                    {
                        obj.ar_data_year = "2022";
                        obj.er_data_year = "2022";
                        if (result.other_source_name == "")
                        {
                            if (ddetails.dist_annual_rainfall != result.annual_rainfall)
                            {
                                return Json("Please Enter Other Source Name");
                            }
                            else
                            {
                                obj.other_source_name = result.other_source_name;
                            }
                        }
                        else
                        {
                            obj.other_source_name = result.other_source_name;
                        }



                        obj.state_name = State;
                        obj.district_name = Dist;
                        obj.block_name = Block;
                        obj.gp_name = Gram;
                        obj.year = Year;
                        obj.annual_rainfall = result.annual_rainfall;
                        obj.est_vol_rainfall = result.est_vol_rainfall;
                        obj.evapo_rate = result.evapo_rate;
                        obj.est_evapo_loss = result.est_evapo_loss;
                        obj.est_water_rain = result.est_water_rain;
                        obj.weigh_run_conf = result.weigh_run_conf;
                        obj.rain_runoff = result.rain_runoff;
                        obj.rech_monsoon = result.rech_monsoon;
                        obj.rech_nonmonsoon = result.rech_nonmonsoon;
                        obj.tot_grd_rech_rain = result.tot_grd_rech_rain;
                        obj.ground_monsoon = result.ground_monsoon;
                        obj.ground_nonmonsoon = result.ground_nonmonsoon;
                        obj.tot_grd_rech_oth = result.tot_grd_rech_oth;
                        obj.loss_nature = result.loss_nature;
                        obj.tot_grd_wat_avail = result.tot_grd_wat_avail;
                        obj.ground_water_with = result.ground_water_with;
                        obj.category = result.category;
                        obj.avail_storages = result.avail_storages.TrimEnd(',');
                        obj.avail_storages_grd = result.avail_storages_grd.TrimEnd(',');
                        obj.avail_storages_sur = result.avail_storages_sur.TrimEnd(',');
                        obj.total_surface_body = result.total_surface_body;
                        obj.loss_if = result.loss_if;
                        obj.surface_water_avail = result.surface_water_avail;
                        obj.trans_water_out = result.trans_water_out;
                        obj.total_sirface_water = result.total_sirface_water;
                        obj.total_avail_water = result.total_avail_water;


                        obj.month = Month;
                        obj.month_ordery_by = Get_Month_Number(Month);
                        ABE.obj_abhy_wsp_wateravailbility_new.Add(obj);
                        ABE.SaveChanges();
                        return Json("Successfully Saved");
                    }






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

        [HttpPost]
        public ActionResult Upload_WSP_AVAIL(HttpPostedFileBase avail_upload_file)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    string state_name = Session["gstate"].ToString();
                    string district_name = Session["gdist"].ToString();
                    string block_name = Session["gblock"].ToString();
                    string gp_name = Session["ggram"].ToString();
                    string entry_by = Session["Email"].ToString();
                    string data_year = Session["year"].ToString();
                    string month = Session["month"].ToString();

                    abhy_wsp_wateravailbility_new data = new abhy_wsp_wateravailbility_new();
                    List<abhy_wsp_wateravailbility_new> details1 = new List<abhy_wsp_wateravailbility_new>();
                    details1 = ABE.obj_abhy_wsp_wateravailbility_new.Where(x => x.state_name == state_name && x.district_name == district_name && x.block_name == block_name && x.gp_name == gp_name && x.year == data_year && x.month == month).ToList();
                    if (details1.Count != 0)
                    {
                        var data1 = details1.AsQueryable().FirstOrDefault();


                        if (avail_upload_file != null)
                        {

                            if (avail_upload_file.FileName != null)
                            {
                                string FileExt = System.IO.Path.GetExtension(avail_upload_file.FileName).ToUpper();
                                if (FileExt != ".PDF")
                                {
                                    return Json("Choose Valid File", JsonRequestBehavior.AllowGet);

                                }
                                string[] count = avail_upload_file.FileName.Split('.');
                                if (count.Length != 2)
                                {
                                    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                }
                                string ext = System.IO.Path.GetExtension(avail_upload_file.FileName);
                                string name = System.IO.Path.GetFileNameWithoutExtension(avail_upload_file.FileName);
                                string filename = name + DateTime.Now.Ticks + ext;

                                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\AtaljalWSP_Avail\\" + state_name + "\\" + district_name + "\\" + block_name + "\\" + gp_name + "\\" + data_year + "\\" + month + "\\");
                                if (!Directory.Exists(path))
                                {
                                    Directory.CreateDirectory(path);
                                }

                                path = path + filename;
                                avail_upload_file.SaveAs(path);
                                //Details.dpmu_declaration = mom.FileName;
                                data1.avail_upload_file = filename;
                                data1.avail_upload_dir = "/Ataljalimages/AtaljalWSP_Avail/" + state_name + "/" + district_name + "/" + block_name + "/" + gp_name + "/" + data_year + "/" + month + "/" + filename;
                                ABE.Entry(data1).State = EntityState.Modified;
                                ABE.SaveChanges();

                            }
                        }
                        return Json("Successfully Uploaded", JsonRequestBehavior.AllowGet);
                    }
                    else
                    {
                        //data.state_name = state_name;
                        //data.district_name = district_name;
                        //data.block_name = block_name;
                        //data.gp_name = gp_name;
                        //data.year = year;
                        //data.month = month;
                        //if (avail_upload_file != null)
                        //{

                        //    if (avail_upload_file.FileName != null)
                        //    {
                        //        string FileExt = System.IO.Path.GetExtension(avail_upload_file.FileName).ToUpper();
                        //        if (FileExt != ".PDF")
                        //        {
                        //            return Json("Choose Valid File", JsonRequestBehavior.AllowGet);

                        //        }
                        //        string[] count = avail_upload_file.FileName.Split('.');
                        //        if (count.Length != 2)
                        //        {
                        //            return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                        //        }
                        //        string ext = System.IO.Path.GetExtension(avail_upload_file.FileName);
                        //        string name = System.IO.Path.GetFileNameWithoutExtension(avail_upload_file.FileName);
                        //        string filename = name + DateTime.Now.Ticks + ext;

                        //        string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                        //        string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\AtaljalWSP_Avail\\" + state_name + "\\" + district_name + "\\" + block_name + "\\" + gp_name + "\\" + data_year + "\\" + month + "\\");
                        //        if (!Directory.Exists(path))
                        //        {
                        //            Directory.CreateDirectory(path);
                        //        }

                        //        path = path + filename;
                        //        avail_upload_file.SaveAs(path);
                        //        //Details.dpmu_declaration = mom.FileName;
                        //        data.avail_upload_file = filename;
                        //        data.avail_upload_dir = "/Ataljalimages/AtaljalWSP_Avail/" + state_name + "/" + district_name + "/" + block_name + "/" + gp_name + "/" + data_year + "/" + month + "/" + filename;
                        //        ABE.obj_abhy_wsp_wateravailbility_new.Add(data);
                        //        ABE.SaveChanges();
                        //    }
                        //}
                        return Json("Before upload document, click on the save button", JsonRequestBehavior.AllowGet);
                    }
                }
                catch (Exception ex)
                {
                    return Json("Data Not Saved");
                }
            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpGet]
        public ActionResult Get_wsp_avail()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    string state_name = Session["gstate"].ToString();
                    string district_name = Session["gdist"].ToString();
                    string block_name = Session["gblock"].ToString();
                    string gp_name = Session["ggram"].ToString();
                    string entry_by = Session["Email"].ToString();
                    string data_year = Session["year"].ToString();
                    string month = Session["month"].ToString();

                    abhy_wsp_wateravailbility_new data = new abhy_wsp_wateravailbility_new();
                    var details1 = ABE.obj_abhy_wsp_wateravailbility_new.Where(x => x.state_name == state_name && x.district_name == district_name && x.block_name == block_name && x.gp_name == gp_name && x.year == data_year && x.month == month).ToList();
                    return Json(details1, JsonRequestBehavior.AllowGet);
                }
                catch (Exception ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpGet]
        public ActionResult WaterAvailabiltyInfo_GetData()
        {
            try
            {
                if (Session["UserId"] != null)
                {
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();
                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    var Year = Session["Year"].ToString();
                    //var Month = Session["month"].ToString();
                    var Data_details = ABE.obj_abhy_wsp_wateravailbility_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.year == Year).ToList();
                    return Json(Data_details, JsonRequestBehavior.AllowGet);
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

        [HttpPost]
        public ActionResult WaterBalanceInfo__InsertData(string Data)
        {
            List<abhy_wateravailability_new> abhy_wateravailability_new_1 = new List<abhy_wateravailability_new>();
            if (Session["UserId"] != null)
            {
                List<abhy_wsp_waterbalance_new> ddetails = new List<abhy_wsp_waterbalance_new>();
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<abhy_wsp_waterbalance_new>(Data);
                abhy_wsp_waterbalance_new obj = new abhy_wsp_waterbalance_new();
                var State = Session["gstate"].ToString();
                var Dist = Session["gdist"].ToString();
                var Block = Session["gblock"].ToString();
                var Gram = Session["ggram"].ToString();

                List<abhy_waterdraft_new> abhy_waterdraft_new_1 = new List<abhy_waterdraft_new>();
                List<abhy_waterdraft_domestic_new> abhy_waterdraft_domestic_new_1 = new List<abhy_waterdraft_domestic_new>();
                List<abhy_waterdraft_industry_new> abhy_waterdraft_industry_new_1 = new List<abhy_waterdraft_industry_new>();
                List<abhy_waterdraft_other_new> abhy_waterdraft_other_new_1 = new List<abhy_waterdraft_other_new>();



                if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                {
                    ddetails = ABE.obj_abhy_wsp_waterbalance_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list
                    abhy_wateravailability_new_1 = ABE.obj_abhy_wateravailability_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();

                    abhy_waterdraft_new_1 = ABE.obj_abhy_waterdraft_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();
                    abhy_waterdraft_domestic_new_1 = ABE.obj_abhy_waterdraft_domestic_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();
                    abhy_waterdraft_industry_new_1 = ABE.obj_abhy_waterdraft_industry_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();
                    abhy_waterdraft_other_new_1 = ABE.obj_abhy_abhy_waterdraft_other_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();

                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                {
                    ddetails = ABE.obj_abhy_wsp_waterbalance_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list
                    abhy_wateravailability_new_1 = ABE.obj_abhy_wateravailability_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();

                    abhy_waterdraft_new_1 = ABE.obj_abhy_waterdraft_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();
                    abhy_waterdraft_domestic_new_1 = ABE.obj_abhy_waterdraft_domestic_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();
                    abhy_waterdraft_industry_new_1 = ABE.obj_abhy_waterdraft_industry_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();
                    abhy_waterdraft_other_new_1 = ABE.obj_abhy_abhy_waterdraft_other_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();

                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                {
                    ddetails = ABE.obj_abhy_wsp_waterbalance_new.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list
                    abhy_wateravailability_new_1 = ABE.obj_abhy_wateravailability_new.Where(x => x.state_name == State && x.district_name == Dist).ToList();

                    abhy_waterdraft_new_1 = ABE.obj_abhy_waterdraft_new.Where(x => x.state_name == State && x.district_name == Dist).ToList();
                    abhy_waterdraft_domestic_new_1 = ABE.obj_abhy_waterdraft_domestic_new.Where(x => x.state_name == State && x.district_name == Dist).ToList();
                    abhy_waterdraft_industry_new_1 = ABE.obj_abhy_waterdraft_industry_new.Where(x => x.state_name == State && x.district_name == Dist).ToList();
                    abhy_waterdraft_other_new_1 = ABE.obj_abhy_abhy_waterdraft_other_new.Where(x => x.state_name == State && x.district_name == Dist).ToList();

                }
                else if (State != "" && State != null)
                {
                    ddetails = ABE.obj_abhy_wsp_waterbalance_new.Where(x => x.state_name == State).ToList();//total list
                    abhy_wateravailability_new_1 = ABE.obj_abhy_wateravailability_new.Where(x => x.state_name == State).ToList();

                    abhy_waterdraft_new_1 = ABE.obj_abhy_waterdraft_new.Where(x => x.state_name == State).ToList();
                    abhy_waterdraft_domestic_new_1 = ABE.obj_abhy_waterdraft_domestic_new.Where(x => x.state_name == State).ToList();
                    abhy_waterdraft_industry_new_1 = ABE.obj_abhy_waterdraft_industry_new.Where(x => x.state_name == State).ToList();
                    abhy_waterdraft_other_new_1 = ABE.obj_abhy_abhy_waterdraft_other_new.Where(x => x.state_name == State).ToList();

                }
                if (ddetails.Count == 1)
                {
                    var ddetails1 = ddetails.SingleOrDefault();
                    ddetails1.state_name = State;
                    ddetails1.district_name = Dist;
                    ddetails1.block_name = Block;
                    ddetails1.gpname = Gram;
                    double wb_sw_avail = 0;
                    if (abhy_wateravailability_new_1[0].sw_available_for_use != null && abhy_wateravailability_new_1[0].sw_available_for_use != "")
                    {
                        wb_sw_avail = double.Parse(abhy_wateravailability_new_1[0].sw_available_for_use);
                    }

                    double wb_gw_avail = 0;

                    if (abhy_wateravailability_new_1[0].total_gw_available != null && abhy_wateravailability_new_1[0].total_gw_available != "")
                    {
                        wb_gw_avail = double.Parse(abhy_wateravailability_new_1[0].total_gw_available);
                    }

                    double wb_total_avail = wb_sw_avail + wb_gw_avail;


                    double irri_utili_surface_water = 0;
                    double irri_utili_ground_water = 0;

                    if (abhy_waterdraft_new_1[0].irri_utili_surface_water != null && abhy_waterdraft_new_1[0].irri_utili_surface_water != "")
                    {
                        irri_utili_surface_water = double.Parse(abhy_waterdraft_new_1[0].irri_utili_surface_water);
                    }
                    if (abhy_waterdraft_new_1[0].irri_utili_ground_water != null && abhy_waterdraft_new_1[0].irri_utili_ground_water != "")
                    {
                        irri_utili_ground_water = double.Parse(abhy_waterdraft_new_1[0].irri_utili_ground_water);
                    }


                    double domestic_demand_ground_water_total_value = 0;

                    double domestic_demand_surface_water_total_value = 0;

                    if (abhy_waterdraft_domestic_new_1[0].domestic_demand_ground_water_total_value != null && abhy_waterdraft_domestic_new_1[0].domestic_demand_ground_water_total_value != "")
                    {
                        domestic_demand_ground_water_total_value = double.Parse(abhy_waterdraft_new_1[0].domestic_demand_ground_water_total_value);
                    }
                    if (abhy_waterdraft_domestic_new_1[0].domestic_demand_surface_water_total_value != null && abhy_waterdraft_domestic_new_1[0].domestic_demand_surface_water_total_value != "")
                    {
                        domestic_demand_surface_water_total_value = double.Parse(abhy_waterdraft_domestic_new_1[0].domestic_demand_surface_water_total_value);
                    }

                    double industry_demand_ground_water = 0;

                    if (abhy_waterdraft_industry_new_1[0].industry_demand_ground_water != null && abhy_waterdraft_industry_new_1[0].industry_demand_ground_water != "")
                    {
                        industry_demand_ground_water = double.Parse(abhy_waterdraft_industry_new_1[0].industry_demand_ground_water);
                    }


                    double other_demand_ground_water = 0;

                    if (abhy_waterdraft_other_new_1[0].other_demand_ground_water != null && abhy_waterdraft_other_new_1[0].other_demand_ground_water != "")
                    {
                        other_demand_ground_water = double.Parse(abhy_waterdraft_other_new_1[0].other_demand_ground_water);
                    }

                    double wb_sw_utili = irri_utili_surface_water + domestic_demand_ground_water_total_value;

                    double wb_gw_utili = irri_utili_ground_water + domestic_demand_surface_water_total_value + industry_demand_ground_water + other_demand_ground_water;


                    double wb_total_utili = wb_sw_utili + wb_gw_utili;

                    double wb_sw_balance = wb_sw_avail - wb_sw_utili;
                    double wb_gw_balance = wb_gw_avail - wb_gw_utili;


                    double wb_total_balance = wb_sw_balance + wb_gw_balance;



                    ddetails1.latitude = result.latitude;
                    ddetails1.longitude = result.longitude;
                    ddetails1.wb_sw_avail = wb_sw_avail.ToString("F");
                    ddetails1.wb_gw_avail = wb_gw_avail.ToString("F");
                    ddetails1.wb_total_avail = wb_total_avail.ToString("F");
                    ddetails1.wb_sw_utili = wb_sw_utili.ToString("F");
                    ddetails1.wb_gw_utili = wb_gw_utili.ToString("F");
                    ddetails1.wb_total_utili = wb_total_utili.ToString("F");
                    ddetails1.wb_sw_balance = wb_sw_balance.ToString("F");
                    ddetails1.wb_gw_balance = wb_gw_balance.ToString("F");
                    ddetails1.wb_total_balance = wb_total_balance.ToString("F");
                    var TodayDate1 = DateTime.Now.ToString();
                    ddetails1.officer_name = Session["Officer"].ToString();

                    ddetails1.datetime = TodayDate1;
                    ddetails1.userid = Convert.ToInt32(Session["UserId"]);
                    ABE.Entry(ddetails1).State = EntityState.Modified;
                    ABE.SaveChanges();
                    return Json("Successfully Saved");
                }
                else
                {
                    if (ddetails.Count == 0)
                    {

                        double wb_sw_avail = 0;
                        if (abhy_wateravailability_new_1[0].sw_available_for_use != null && abhy_wateravailability_new_1[0].sw_available_for_use != "")
                        {
                            wb_sw_avail = double.Parse(abhy_wateravailability_new_1[0].sw_available_for_use);
                        }

                        double wb_gw_avail = 0;

                        if (abhy_wateravailability_new_1[0].total_gw_available != null && abhy_wateravailability_new_1[0].total_gw_available != "")
                        {
                            wb_gw_avail = double.Parse(abhy_wateravailability_new_1[0].total_gw_available);
                        }

                        double wb_total_avail = wb_sw_avail + wb_gw_avail;


                        double irri_utili_surface_water = 0;
                        double irri_utili_ground_water = 0;

                        if (abhy_waterdraft_new_1[0].irri_utili_surface_water != null && abhy_waterdraft_new_1[0].irri_utili_surface_water != "")
                        {
                            irri_utili_surface_water = double.Parse(abhy_waterdraft_new_1[0].irri_utili_surface_water);
                        }
                        if (abhy_waterdraft_new_1[0].irri_utili_ground_water != null && abhy_waterdraft_new_1[0].irri_utili_ground_water != "")
                        {
                            irri_utili_ground_water = double.Parse(abhy_waterdraft_new_1[0].irri_utili_ground_water);
                        }


                        double domestic_demand_ground_water_total_value = 0;

                        double domestic_demand_surface_water_total_value = 0;

                        if (abhy_waterdraft_domestic_new_1[0].domestic_demand_ground_water_total_value != null && abhy_waterdraft_domestic_new_1[0].domestic_demand_ground_water_total_value != "")
                        {
                            domestic_demand_ground_water_total_value = double.Parse(abhy_waterdraft_new_1[0].domestic_demand_ground_water_total_value);
                        }
                        if (abhy_waterdraft_domestic_new_1[0].domestic_demand_surface_water_total_value != null && abhy_waterdraft_domestic_new_1[0].domestic_demand_surface_water_total_value != "")
                        {
                            domestic_demand_surface_water_total_value = double.Parse(abhy_waterdraft_domestic_new_1[0].domestic_demand_surface_water_total_value);
                        }

                        double industry_demand_ground_water = 0;

                        if (abhy_waterdraft_industry_new_1[0].industry_demand_ground_water != null && abhy_waterdraft_industry_new_1[0].industry_demand_ground_water != "")
                        {
                            industry_demand_ground_water = double.Parse(abhy_waterdraft_industry_new_1[0].industry_demand_ground_water);
                        }


                        double other_demand_ground_water = 0;

                        if (abhy_waterdraft_other_new_1[0].other_demand_ground_water != null && abhy_waterdraft_other_new_1[0].other_demand_ground_water != "")
                        {
                            other_demand_ground_water = double.Parse(abhy_waterdraft_other_new_1[0].other_demand_ground_water);
                        }

                        double wb_sw_utili = irri_utili_surface_water + domestic_demand_ground_water_total_value;

                        double wb_gw_utili = irri_utili_ground_water + domestic_demand_surface_water_total_value + industry_demand_ground_water + other_demand_ground_water;


                        double wb_total_utili = wb_sw_utili + wb_gw_utili;

                        double wb_sw_balance = wb_sw_avail - wb_sw_utili;
                        double wb_gw_balance = wb_gw_avail - wb_gw_utili;

                        double wb_total_balance = wb_sw_balance + wb_gw_balance;
                        obj.state_name = State;
                        obj.district_name = Dist;
                        obj.block_name = Block;
                        obj.gpname = Gram;
                        obj.latitude = result.latitude;
                        obj.longitude = result.longitude;
                        obj.wb_sw_avail = wb_sw_avail.ToString("F");
                        obj.wb_gw_avail = wb_gw_avail.ToString("F");
                        obj.wb_total_avail = wb_total_avail.ToString("F");
                        obj.wb_sw_utili = wb_sw_utili.ToString("F");
                        obj.wb_gw_utili = wb_gw_utili.ToString("F");
                        obj.wb_total_utili = wb_total_utili.ToString("F");
                        obj.wb_sw_balance = wb_sw_balance.ToString("F");
                        obj.wb_gw_balance = wb_gw_balance.ToString("F");
                        obj.wb_total_balance = wb_total_balance.ToString("F");
                        var TodayDate1 = DateTime.Now.ToString();

                        obj.datetime = TodayDate1;
                        obj.officer_name = Session["Officer"].ToString();

                        obj.userid = Convert.ToInt32(Session["UserId"]);
                        ABE.obj_abhy_wsp_waterbalance_new.Add(obj);
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
        public ActionResult WaterBalanceInfo__InsertData_new(string Data)
        {

            if (Session["UserId"] != null)
            {
                DateTime now = DateTime.Now;
                int MonthNumber = now.Month;

                // Get the name of the month
                string monthName = CultureInfo.CurrentCulture.DateTimeFormat.GetMonthName(MonthNumber);
                var State = Session["gstate"].ToString();
                var Dist = Session["gdist"].ToString();
                var Block = Session["gblock"].ToString();
                var Gram = Session["ggram"].ToString();
                var year = Session["year"].ToString();
                var month = monthName;
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<abhy_wsp_waterbalance_new>(Data);

                var ddetails = ABE.obj_abhy_wsp_waterbalance_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == year).ToList();//total list
                if (ddetails.Count > 0)
                {

                    ddetails[0].latitude = result.latitude;
                    ddetails[0].longitude = result.longitude;
                    ddetails[0].wb_sw_avail = result.wb_sw_avail;
                    ddetails[0].wb_gw_avail = result.wb_gw_avail;
                    ddetails[0].wb_sw_utili = result.wb_sw_utili;
                    ddetails[0].wb_total_avail = result.wb_total_avail;
                    ddetails[0].wb_gw_utili = result.wb_gw_utili;
                    ddetails[0].wb_total_utili = result.wb_total_utili;
                    ddetails[0].wb_sw_balance = result.wb_sw_balance;
                    ddetails[0].wb_gw_balance = result.wb_gw_balance;
                    ddetails[0].wb_total_balance = result.wb_total_balance;
                    ddetails[0].month = month;
                    ddetails[0].month_ordery_by = Get_Month_Number(month);
                    ddetails[0].datetime = DateTime.Now.ToString("dd-mm-yyyy");

                    ABE.Entry(ddetails[0]).State = EntityState.Modified;
                    ABE.SaveChanges();

                    return Json("Saved sucessfully", JsonRequestBehavior.AllowGet);
                }
                else
                {
                    result.gpname = Gram;
                    result.block_name = Block;
                    result.district_name = Dist;
                    result.state_name = State;

                    result.year = year;
                    result.month = month;
                    result.month_ordery_by = Get_Month_Number(month);
                    result.datetime = DateTime.Now.ToString("dd-mm-yyyy");
                    ABE.obj_abhy_wsp_waterbalance_new.Add(result);
                    int a = ABE.SaveChanges();
                    if (a > 0)
                    {
                        return Json("Saved Successfully", JsonRequestBehavior.AllowGet);
                    }
                    else
                    {
                        return Json("Unsuccessful to Save Data", JsonRequestBehavior.AllowGet);
                    }
                }
            }
            else
            {
                Session["WSPHOME"] = "Data";
                return RedirectToAction("WSP_GWM_HOME", "WSPNew");
            }
        }
        [HttpGet]
        public ActionResult WaterBudgetInfo_Details()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_wsp_waterbudget_new> ddetails = new List<abhy_wsp_waterbudget_new>();

                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    var year = Session["year"].ToString();
                    //var month = Session["month"].ToString();
                    ddetails = ABE.obj_abhy_wsp_waterbudget_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == year).ToList();//total list

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

        [HttpGet]
        public ActionResult WaterBalanceInserted_Details()
        {
            List<abhy_wsp_waterbalance_new> ddetails = new List<abhy_wsp_waterbalance_new>();
            var State = Session["gstate"].ToString();
            var Dist = Session["gdist"].ToString();
            var Block = Session["gblock"].ToString();
            var Gram = Session["ggram"].ToString();

            var year = Session["year"].ToString();
            //var month = Session["month"].ToString();

            ddetails = ABE.obj_abhy_wsp_waterbalance_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == year).ToList();//total list

            return Json(ddetails, JsonRequestBehavior.AllowGet);
        }

        //akash
        [HttpPost]
        public ActionResult WaterBudgetInfo__InsertData(string Data)
        {


            if (Session["userid"] != null)
            {
                DateTime now = DateTime.Now;
                int MonthNumber = now.Month;

                // Get the name of the month
                string monthName = CultureInfo.CurrentCulture.DateTimeFormat.GetMonthName(MonthNumber);
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<abhy_wsp_waterbudget_new>(Data);
                abhy_wsp_waterbudget_new obj = new abhy_wsp_waterbudget_new();

                var State = Session["gstate"].ToString();
                var Dist = Session["gdist"].ToString();
                var Block = Session["gblock"].ToString();
                var Gram = Session["ggram"].ToString();
                var year = Session["year"].ToString();
                var month = monthName;
                var ddetails1 = ABE.obj_abhy_wsp_waterbudget_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == year).FirstOrDefault();
                if (ddetails1 != null)
                {
                    ddetails1.state_name = State;
                    ddetails1.district_name = Dist;
                    ddetails1.block_name = Block;
                    ddetails1.gpname = Gram;
                    ddetails1.latitude = result.latitude;
                    ddetails1.longitude = result.longitude;
                    ddetails1.human_p_pop = result.human_p_pop.ToString();
                    ddetails1.human_a_pop = result.human_a_pop.ToString();
                    ddetails1.human_no_of_year = result.human_no_of_year.ToString();
                    ddetails1.human_pre_pop = result.human_pre_pop.ToString();
                    ddetails1.human_per_capita = result.human_per_capita.ToString();
                    ddetails1.human_pro_water_req = result.human_pro_water_req.ToString();
                    ddetails1.live_p_pop = result.live_p_pop.ToString();
                    ddetails1.live_a_pop = result.live_a_pop.ToString();
                    ddetails1.live_no_of_year = result.live_no_of_year.ToString();
                    ddetails1.live_pro_pop = result.live_pro_pop.ToString();
                    ddetails1.live_pre_capita = result.live_pre_capita.ToString();
                    ddetails1.live_pro_water_req = result.live_pro_water_req.ToString();
                    ddetails1.total_pro_water_req = result.total_pro_water_req.ToString();
                    ddetails1.proposed_share_gw = result.proposed_share_gw.ToString();
                    ddetails1.proposed_share_sw = result.proposed_share_sw.ToString();
                    ddetails1.demand_gw = result.demand_gw.ToString();
                    ddetails1.demand_sw = result.demand_sw.ToString();
                    ddetails1.ground_water = result.ground_water.ToString();
                    ddetails1.surface_water = result.surface_water.ToString();
                    ddetails1.total_wt_available = result.total_wt_available.ToString();
                    ddetails1.month = month;
                    ddetails1.month_ordery_by = Get_Month_Number(month);
                    var TodayDate1 = DateTime.Now.ToString();
                    ddetails1.datetime = TodayDate1;
                    ddetails1.userid = Convert.ToInt32(Session["userid"]);
                    ABE.Entry(ddetails1).State = EntityState.Modified;
                    ABE.SaveChanges();
                    return Json("Successfully Saved");
                }
                else
                {
                    obj.state_name = State;
                    obj.district_name = Dist;
                    obj.block_name = Block;
                    obj.gpname = Gram;
                    obj.latitude = result.latitude;
                    obj.longitude = result.longitude;
                    obj.human_p_pop = result.human_p_pop.ToString();
                    obj.human_a_pop = result.human_a_pop.ToString();
                    obj.human_no_of_year = result.human_no_of_year.ToString();
                    obj.human_pre_pop = result.human_pre_pop.ToString();
                    obj.human_per_capita = result.human_per_capita.ToString();
                    obj.human_pro_water_req = result.human_pro_water_req.ToString();
                    obj.live_p_pop = result.live_p_pop.ToString();
                    obj.live_a_pop = result.live_a_pop.ToString();
                    obj.live_no_of_year = result.live_no_of_year.ToString();
                    obj.live_pro_pop = result.live_pro_pop.ToString();
                    obj.live_pre_capita = result.live_pre_capita.ToString();
                    obj.live_pro_water_req = result.live_pro_water_req.ToString();
                    obj.total_pro_water_req = result.total_pro_water_req.ToString();
                    obj.proposed_share_gw = result.proposed_share_gw.ToString();
                    obj.proposed_share_sw = result.proposed_share_sw.ToString();
                    obj.demand_gw = result.demand_gw.ToString();
                    obj.demand_sw = result.demand_sw.ToString();
                    obj.ground_water = result.ground_water.ToString();
                    obj.surface_water = result.surface_water.ToString();
                    obj.total_wt_available = result.total_wt_available.ToString();
                    obj.month = month;
                    obj.year = year;
                    obj.month_ordery_by = Get_Month_Number(month);

                    var TodayDate1 = DateTime.Now.ToString();
                    obj.datetime = TodayDate1;
                    obj.userid = Convert.ToInt32(Session["userid"]);
                    ABE.obj_abhy_wsp_waterbudget_new.Add(obj);
                    ABE.SaveChanges();
                    return Json("Successfully Saved");
                }
            }
            else
            {
                return Json("session time out", JsonRequestBehavior.AllowGet);
            }
        }
        //Akash code end





        [HttpGet]
        public ActionResult WaterBalanceInfo_Details()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_wsp_waterbalance_new> ddetails = new List<abhy_wsp_waterbalance_new>();

                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    var year = Session["year"].ToString();
                    ddetails = ABE.obj_abhy_wsp_waterbalance_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == year).ToList();//total list
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



        [HttpGet]
        public ActionResult Papulation_Details()
        {
            if (Session["UserId"] != null)
            {
                List<abhy_gpdata_population> ddetails = new List<abhy_gpdata_population>();

                var userid = Convert.ToInt32(Session["UserId"]);
                var State = Session["gstate"].ToString();
                var Dist = Session["gdist"].ToString();

                var Block = Session["gblock"].ToString();
                var Gram = Session["ggram"].ToString();

                if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                {
                    ddetails = ABE.obj_abhy_gpdata_population.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list
                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                {
                    ddetails = ABE.obj_abhy_gpdata_population.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                {
                    ddetails = ABE.obj_abhy_gpdata_population.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                }
                else if (State != "" && State != null)
                {
                    ddetails = ABE.obj_abhy_gpdata_population.Where(x => x.state_name == State).ToList();//total list

                }
                return Json(ddetails, JsonRequestBehavior.AllowGet);
            }
            else
            {
                Session["WSPHOME"] = "Data";
                return RedirectToAction("WSP_GWM_HOME", "WSPNew");
            }
        }

        public string Image_Url_base64(string Path)
        {

            using (System.Drawing.Image image = System.Drawing.Image.FromFile(Path))
            {
                using (MemoryStream m = new MemoryStream())
                {
                    image.Save(m, image.RawFormat);
                    byte[] imageBytes = m.ToArray();

                    // Convert byte[] to Base64 String
                    string base64String = Convert.ToBase64String(imageBytes);
                    return base64String;
                }
            }

        }

        [HttpPost]
        public ActionResult MapImagesdetails(string Data)
        {
            if (Session["UserId"] != null)
            {
                List<abhy_wsp_gram_images> ddetails = new List<abhy_wsp_gram_images>();
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<abhy_wsp_gram_images>(Data);

                var State = result.state_name;
                var Dist = result.district_name;

                var Block = result.block_name;
                var Gram = result.gpname;


                var data = ABE.obj_abhy_wsp_gram_images.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list
                if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null && Gram != "" && Gram != null)
                {
                    ddetails = ABE.obj_abhy_wsp_gram_images.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                }
                else if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null)
                {
                    ddetails = ABE.obj_abhy_wsp_gram_images.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                }
                else if (State != "" && State != null && Dist != "" && Dist != null)
                {
                    ddetails = ABE.obj_abhy_wsp_gram_images.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                }
                else if (State != "" && State != null)
                {
                    ddetails = ABE.obj_abhy_wsp_gram_images.Where(x => x.state_name == State).ToList();//total list


                }

                if (ddetails.Count == 1)
                {
                    if (ddetails[0].gpimage1 != null && ddetails[0].gpimage1 != "")
                    {
                        string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                        string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");
                        string File_path = path + ddetails[0].gpimage1_filename;

                        string base64 = Image_Url_base64(File_path);
                        ddetails[0].gpimage1 = base64;
                    }

                    if (ddetails[0].gpimage2 != null && ddetails[0].gpimage2 != "")
                    {
                        string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                        string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");
                        string File_path = path + ddetails[0].gpimage2_filename;


                        string base64 = Image_Url_base64(File_path);
                        ddetails[0].gpimage2 = base64;
                    }

                    if (ddetails[0].gpimage3 != null && ddetails[0].gpimage3 != "")
                    {
                        string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                        string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");
                        string File_path = path + ddetails[0].gpimage3_filename;



                        string base64 = Image_Url_base64(File_path);
                        ddetails[0].gpimage3 = base64;
                    }

                    if (ddetails[0].gpimage4 != null && ddetails[0].gpimage4 != "")
                    {
                        string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                        string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");
                        string File_path = path + ddetails[0].gpimage4_filename;


                        string base64 = Image_Url_base64(File_path);
                        ddetails[0].gpimage4 = base64;
                    }
                    var resultdata = Json(ddetails[0], JsonRequestBehavior.AllowGet);
                    resultdata.MaxJsonLength = int.MaxValue;
                    return resultdata;
                }
                else
                {


                    var resultdata = Json(ddetails, JsonRequestBehavior.AllowGet);
                    resultdata.MaxJsonLength = int.MaxValue;
                    return resultdata;
                }


                // return Json(ddetails, JsonRequestBehavior.AllowGet);
            }
            else
            {
                Session["WSPHOME"] = "Data";
                return RedirectToAction("WSP_GWM_HOME", "WSPNew");
            }
        }


        [HttpPost]
        public ActionResult DeleteMOM_file_Detail(string Data)
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
                        var Data1 = AJE.obj_socialmonitoring.Where(x => x.id == TKID).SingleOrDefault();
                        if (Data1 != null)
                        {
                            Data1.minutesofmeeting = "";
                            Data1.mom_filename = "";
                            AJE.Entry(Data1).State = EntityState.Modified;
                            AJE.SaveChanges();
                            return Json("Deleted Successfully", JsonRequestBehavior.AllowGet);
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
        public ActionResult DeletePHotograph_file_Detail(string Data)
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
                        var Data1 = AJE.obj_socialmonitoring.Where(x => x.id == TKID).SingleOrDefault();
                        if (Data1 != null)
                        {
                            Data1.image = "";
                            Data1.photogragh_filename = "";

                            AJE.Entry(Data1).State = EntityState.Modified;
                            AJE.SaveChanges();
                            return Json("Deleted Successfully", JsonRequestBehavior.AllowGet);
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
        public int get_month_order(string month_num)
        {
            int month_order = 0;

            if (month_num == "4")
            {
                month_order = 1;
            }
            if (month_num == "5")
            {
                month_order = 2;
            }
            if (month_num == "6")
            {
                month_order = 3;
            }
            if (month_num == "7")
            {
                month_order = 4;
            }
            if (month_num == "8")
            {
                month_order = 5;
            }
            if (month_num == "9")
            {
                month_order = 6;
            }
            if (month_num == "10")
            {
                month_order = 7;
            }
            if (month_num == "11")
            {
                month_order = 8;
            }
            if (month_num == "12")
            {
                month_order = 9;
            }
            if (month_num == "1")
            {
                month_order = 10;
            }
            if (month_num == "2")
            {
                month_order = 11;
            }
            if (month_num == "3")
            {
                month_order = 12;
            }
            return month_order;
        }
        [HttpPost]
        public ActionResult MapImagesdetails1(string Data)
        {
            if (Session["UserId"] != null)
            {
                List<abhy_wsp_gram_images> ddetails = new List<abhy_wsp_gram_images>();
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<abhy_wsp_gram_images>(Data);



                var State = result.state_name;
                var Dist = result.district_name;

                var Block = result.block_name;
                var Gram = result.gpname;
                var year = Session["year"].ToString();
                //var month = Session["month"].ToString();

                ddetails = ABE.obj_abhy_wsp_gram_images.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == "2023-24 Update").ToList();
                if (ddetails.Count == 0)
                {
                    ddetails = ABE.obj_abhy_wsp_gram_images.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == "2023-24").ToList();
                }
                var resultdata = Json(ddetails, JsonRequestBehavior.AllowGet);
                resultdata.MaxJsonLength = int.MaxValue;
                return resultdata;


                // return Json(ddetails, JsonRequestBehavior.AllowGet);
            }
            else
            {
                Session["WSPHOME"] = "Data";
                return RedirectToAction("WSP_GWM_HOME", "WSPNew");
            }
        }
        [HttpPost]
        public ActionResult Delete_data(string data)
        {
            if (Session["userid"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<dynamic>(data);

                    int id = Convert.ToInt32(result["IDD"]);

                    string img_type = result["type"];

                    var DEtails = ABE.obj_abhy_wsp_gram_images.Where(x => x.id == id).ToList();
                    if (img_type == "location")
                    {
                        DEtails[0].gpimage1 = "";
                        DEtails[0].gpimage1_filename = "";
                    }
                    if (img_type == "watershed")
                    {
                        DEtails[0].gpimage2 = "";
                        DEtails[0].gpimage2_filename = "";
                    }
                    if (img_type == "aquifer")
                    {
                        DEtails[0].gpimage3 = "";
                        DEtails[0].gpimage3_filename = "";
                    }

                    ABE.Entry(DEtails[0]).State = EntityState.Modified;
                    ABE.SaveChanges();

                    return Json("Deleted", JsonRequestBehavior.AllowGet);

                }


                catch (Exception ex)
                {
                    return Json("error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return RedirectToAction("WSP_GWM_HOME", "WSPNew");
            }
        }

        [HttpGet]
        public ActionResult Social_Monitor_Details_website1()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<socialmonitoring> ddetails = new List<socialmonitoring>();


                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();
                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();

                    if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null && Gram != "" && Gram != null)
                    {
                        ddetails = AJE.obj_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram && x.status != "Mobile App").ToList();//total list

                    }
                    else if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null)
                    {
                        ddetails = AJE.obj_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block && x.status != "Mobile App").ToList();//total list

                    }
                    else if (State != "" && State != null && Dist != "" && Dist != null)
                    {
                        ddetails = AJE.obj_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.status != "Mobile App").ToList();//total list

                    }
                    else if (State != "" && State != null)
                    {
                        ddetails = AJE.obj_socialmonitoring.Where(x => x.state == State && x.status != "Mobile App").ToList();//total list

                    }




                    var resultdata = Json(ddetails, JsonRequestBehavior.AllowGet);
                    resultdata.MaxJsonLength = int.MaxValue;
                    return resultdata;

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




        [HttpGet]
        public ActionResult Water_Utilization_Count()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_baseline_gp_livestock> ddetails = new List<abhy_baseline_gp_livestock>();

                    //abhy_baseline_gpdata ddetails1 = new abhy_baseline_gpdata();
                    //var ddetails1 = ABE.obj_abhy_baseline_gpdata.ToList();

                    string tol_population = string.Empty;
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    var year = Session["year"].ToString();
                    //var month = Session["month"].ToString();

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        tol_population = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == year && x.d_sent == true).OrderByDescending(x => x.month_order_by).Select(x => x.tol_population).FirstOrDefault();//total list
                        var data = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == year && x.d_sent == true).OrderByDescending(x => x.month_order_by).FirstOrDefault();
                        if (data != null)
                        {
                            ddetails = ABE.obj_abhy_baseline_gp_livestock.Where(x => x.id == data.id).ToList();//total list
                        }


                    }


                    int livestock_count = ddetails.Sum(x => Int32.Parse(x.livestock_value));
                    return Json(tol_population + "," + livestock_count, JsonRequestBehavior.AllowGet);
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

        [HttpGet]
        public ActionResult Get_gp_area()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_wsp_gpdata_new> ddetails = new List<abhy_wsp_gpdata_new>();

                    //abhy_baseline_gpdata ddetails1 = new abhy_baseline_gpdata();
                    //var ddetails1 = ABE.obj_abhy_baseline_gpdata.ToList();


                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        ddetails = ABE.obj_abhy_wsp_gpdata_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gram_panchayat_name == Gram).ToList();//total list                        
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
        public ActionResult SaveFinalReportOnServer(HttpPostedFileBase pdf)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    string response = "";
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var Email = Session["Email"].ToString();
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    var year = Session["year"].ToString();
                    abhy_mis_wsp_approved obj = new abhy_mis_wsp_approved();
                    var ApproveData = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.year == year).FirstOrDefault();
                    var Data = ABE.obj_abhy_mis_wsp_approved.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).FirstOrDefault();
                    if (Data != null)
                    {
                        if (pdf.FileName != null)
                        {
                            string FileName = Gram + "_" + year + "_" + pdf.FileName;
                            string BasePath = ConfigurationManager.AppSettings["path"];// AppDomain.CurrentDomain.BaseDirectory;
                            string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\WspApproved\\" + State + "\\" + Dist + "\\" + Block + "\\" + year + "\\");
                            if (!Directory.Exists(path))
                            {
                                Directory.CreateDirectory(path);
                            }
                            path = path + FileName;

                            string[] count = pdf.FileName.Split('.');
                            if (count.Length != 2)
                            {
                                response = "Your Upload file has Double Extention, Please Upload proper file";
                            }
                            else
                            {
                                pdf.SaveAs(path);
                                string File_path = "/Ataljalimages/WspApproved/" + State + "/" + Dist + "/" + Block + "/" + year + "/" + FileName;
                                //Data.state_name = State;
                                //Data.district_name = Dist;
                                //Data.block_name = Block;
                                //Data.gpname = Gram;
                                Data.wsp_23_finename = FileName;
                                Data.wsp_23_filepath = File_path;
                                //Data.wsp_23_users = Email;
                                //Data.wsp_23_date = DateTime.Today.ToString("dd-MM-yyyy");
                                Data.fy_year = year;
                                ABE.Entry(Data).State = EntityState.Modified;
                                ABE.SaveChanges();
                                ApproveData.status_id = 5;

                                ApproveData.reject_status = string.Empty;
                                ApproveData.gp_email = Email;
                                if (ApproveData.gp_remarks == "")
                                {
                                    ApproveData.gp_remarks = string.Empty;
                                }
                                if (ApproveData.pgwm_remarks == "")
                                {
                                    ApproveData.pgwm_remarks = string.Empty;
                                }
                                if (ApproveData.reject_status == "")
                                {
                                    ApproveData.reject_status = string.Empty;
                                }
                                if (ApproveData.ss_remarks == "")
                                {
                                    ApproveData.ss_remarks = string.Empty;
                                }
                                if (ApproveData.wa_remarks == "")
                                {
                                    ApproveData.wa_remarks = string.Empty;
                                }
                                if (ApproveData.wb_remarks == "")
                                {
                                    ApproveData.wb_remarks = string.Empty;
                                }
                                if (ApproveData.wbu_remarks == "")
                                {
                                    ApproveData.wbu_remarks = string.Empty;
                                }
                                ABE.Entry(ApproveData).State = EntityState.Modified;

                                ABE.SaveChanges();
                                response = "WSP Final Report Upload Successfully";
                            }
                            return Json(response);
                        }
                        return Json("File not found!");
                    }
                    else
                    {
                        if (pdf.FileName != null)
                        {
                            string FileName = Gram + "_" + year + "_" + pdf.FileName;
                            string BasePath = ConfigurationManager.AppSettings["path"];// AppDomain.CurrentDomain.BaseDirectory;
                            string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\WspApproved\\" + State + "\\" + Dist + "\\" + Block + "\\" + year + "\\");
                            if (!Directory.Exists(path))
                            {
                                Directory.CreateDirectory(path);
                            }
                            path = path + FileName;

                            string[] count = pdf.FileName.Split('.');
                            if (count.Length != 2)
                            {
                                response = "Your Upload file has Double Extention, Please Upload proper file";
                            }
                            else
                            {
                                pdf.SaveAs(path);
                                string File_path = "/Ataljalimages/WspApproved/" + State + "/" + Dist + "/" + Block + "/" + year + "/" + FileName;
                                obj.wsp_23_finename = FileName;
                                obj.wsp_23_filepath = File_path;
                                //obj.wsp_23_users = Email;
                                //obj.wsp_23_date = DateTime.Today.ToString("dd-MM-yyyy");
                                obj.fy_year = year;
                                obj.userid = userid;
                                obj.state_name = State;
                                obj.district_name = Dist;
                                obj.block_name = Block;
                                obj.gpname = Gram;
                                ABE.obj_abhy_mis_wsp_approved.Add(obj);
                                int res = ABE.SaveChanges();
                                ApproveData.status_id = 5;
                                ApproveData.reject_status = string.Empty;
                                ApproveData.gp_email = Email;
                                ABE.Entry(ApproveData).State = EntityState.Modified;
                                ABE.SaveChanges();
                                response = "WSP Final Report Upload Successfully";
                            }
                            return Json(response);
                        }
                        return Json("File not found!");
                    }
                }
                catch (Exception ex)
                {
                    return Json("Data Not Saved");
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }



    }
}
