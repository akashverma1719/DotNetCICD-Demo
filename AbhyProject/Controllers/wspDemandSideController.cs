using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;
using System.Data.Entity;
using AbhyProject.Models;
using System.Globalization;
using AbhyProject.Classes;

namespace AbhyProject.Controllers
{
    public class wspDemandSideController : Controller
    {
        AbhyEntity ABE = new AbhyEntity();
        // GET: wspDemandSide
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult DemandSide()
        {
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
        public ActionResult saveSprinkler(string data)
        {
            if (Session["userid"] != null)
            {
                try
                {
                    DateTime now = DateTime.Now;
                    int MonthNumber = now.Month;
                    // Get the name of the month
                    string monthName = CultureInfo.CurrentCulture.DateTimeFormat.GetMonthName(MonthNumber);
                    var result = JsonConvert.DeserializeObject<dynamic>(data);
                    if(result["water_demand"] == "" || result["water_demand"] =="NaN")
                    {
                        return Json("Please check total water demand value");
                    }
                    else if (result["net_water_demand"] == "" || result["net_water_demand"] == "NaN")
                    {
                        return Json("Please check total net water demand value");
                    }
                    else if (result["reduction_gw"] == "" || result["reduction_gw"] == "NaN")
                    {
                        return Json("Please check total reduction in water demand value");
                    }
                    var state = Session["gstate"].ToString();
                    var dist = Session["gdist"].ToString();
                    var block = Session["gblock"].ToString();
                    var gram = Session["ggram"].ToString();
                    string year = Session["year"].ToString();
                    var month = monthName;
                    abhy_wsp_demand_meta obj = new abhy_wsp_demand_meta();
                    var Data = (from t1 in ABE.obj_abhy_waterdraft_irrigation_meta
                                join t2 in ABE.obj_abhy_waterdraft_irrigation_data on t1.id equals t2.meta_id
                                where t1.state_name == state && t1.district_name == dist && t1.block_name == block &&
                                t1.gp_name == gram && t1.data_year == year
                                select new
                                {
                                    t1.total_water_dem,
                                    t1.per_ground_water,
                                    t1.per_surface_water,
                                    t1.uti_ground_water,
                                    t1.uti_surface_water,
                                    t2.season_type,
                                    t2.crop_category,
                                    t2.crop_type,
                                    t2.crop_name,
                                    t2.area,
                                    t2.gross_water,
                                    t2.meta_id,
                                    t2.id
                                }).ToList();
                    var CheckIrrigationData = Data.Where(x => x.crop_name == result["crop_name"].ToString() && x.season_type == result["season_type"].ToString()).FirstOrDefault();
                    if(CheckIrrigationData != null)
                    {
                        if(Convert.ToDecimal(result["area_irrigation"]) != Convert.ToDecimal(CheckIrrigationData.area))
                        {
                            return Json("Please enter the Area under Conventional Irrigation (ha) mentioned (" + CheckIrrigationData.area + ")", JsonRequestBehavior.AllowGet);
                        }
                        else if (Convert.ToDecimal(result["gross_water"]) != Convert.ToDecimal(CheckIrrigationData.gross_water))
                        {
                            return Json("Please enter the Net Water Requirement (mm) mentioned (" + CheckIrrigationData.gross_water + ")", JsonRequestBehavior.AllowGet);
                        }
                    }
                    else
                    {
                        string CropName = "";
                        var DataCheck = Data.Where(x => x.season_type == result["season_type"].ToString()).ToList();
                        int i = 0;
                        foreach (var item in DataCheck)
                        {
                            i++;
                            if(DataCheck.Count == i) {
                                CropName += item.crop_name;
                            }
                            else
                            {
                                CropName += item.crop_name + ", ";
                            }
                        }
                        return Json("Please select the same crop name added under the Water Utilisation-Irrigation module (" + (CropName) + ")", JsonRequestBehavior.AllowGet);
                    }
                    var DEtails = ABE.obj_abhy_wsp_demand_meta.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram && x.data_year == year).ToList();

                    if (DEtails.Count == 0)
                    {
                        obj.state = state;
                        obj.district = dist;
                        obj.block = block;
                        obj.gp = gram;
                        obj.entry_by = Session["Email"].ToString();

                        obj.month = month;
                        obj.month_ordery_by = Get_Month_Number(month);

                        obj.data_year = year;
                        ABE.obj_abhy_wsp_demand_meta.Add(obj);
                        ABE.SaveChanges();
                        abhy_wsp_demand_sprinkler obj1 = new abhy_wsp_demand_sprinkler();

                        obj1.season_type = result["season_type"];
                        obj1.crop_category = result["crop_category"];
                        obj1.crop_type = result["crop_type"];
                        obj1.crop_name = result["crop_name"];
                        obj1.area_irrigation = result["area_irrigation"];
                        obj1.gross_water = result["gross_water"];
                        obj1.water_demand = result["water_demand"];
                        obj1.area_proposed = result["area_proposed"];
                        obj1.reduction = result["reduction"];
                        obj1.net_water_demand = result["net_water_demand"];
                        obj1.reduction_gw = result["reduction_gw"];
                        obj1.reduction_in_demand = result["reduction_in_demand"];
                        obj1.meta_id = obj.id;
                        ABE.obj_abhy_wsp_demand_sprinkler.Add(obj1);
                        ABE.SaveChanges();
                    }
                    else
                    {
                        abhy_wsp_demand_sprinkler obj1 = new abhy_wsp_demand_sprinkler();
                        obj1.season_type = result["season_type"];
                        obj1.crop_category = result["crop_category"];
                        obj1.crop_type = result["crop_type"];
                        obj1.crop_name = result["crop_name"];
                        obj1.area_irrigation = result["area_irrigation"];
                        obj1.gross_water = result["gross_water"];
                        obj1.water_demand = result["water_demand"];
                        obj1.area_proposed = result["area_proposed"];
                        obj1.reduction = result["reduction"];
                        obj1.net_water_demand = result["net_water_demand"];
                        obj1.reduction_gw = result["reduction_gw"];
                        obj1.reduction_in_demand = result["reduction_in_demand"];
                        obj1.meta_id = DEtails[0].id;


                        ABE.obj_abhy_wsp_demand_sprinkler.Add(obj1);
                        ABE.SaveChanges();
                    }
                    return Json("Successfully Saved", JsonRequestBehavior.AllowGet);
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
        public ActionResult saveDrip(string data)
        {
            if (Session["userid"] != null)
            {
                try
                {
                    DateTime now = DateTime.Now;
                    int MonthNumber = now.Month;
                    // Get the name of the month
                    string monthName = CultureInfo.CurrentCulture.DateTimeFormat.GetMonthName(MonthNumber);
                    var result = JsonConvert.DeserializeObject<dynamic>(data);
                    if (result["water_demand"] == "" || result["water_demand"] == "NaN")
                    {
                        return Json("Please check total water demand value");
                    }
                    else if (result["net_water_demand"] == "" || result["net_water_demand"] == "NaN")
                    {
                        return Json("Please check total net water demand value");
                    }
                    else if (result["reduction_gw"] == "" || result["reduction_gw"] == "NaN")
                    {
                        return Json("Please check total reduction in water demand value");
                    }
                    var state = Session["gstate"].ToString();
                    var dist = Session["gdist"].ToString();
                    var block = Session["gblock"].ToString();
                    var gram = Session["ggram"].ToString();
                    string year = Session["year"].ToString();
                    var month = monthName;
                    var Data = (from t1 in ABE.obj_abhy_waterdraft_irrigation_meta
                                join t2 in ABE.obj_abhy_waterdraft_irrigation_data on t1.id equals t2.meta_id
                                where t1.state_name == state && t1.district_name == dist && t1.block_name == block &&
                                t1.gp_name == gram && t1.data_year == year
                                select new
                                {
                                    t1.total_water_dem,
                                    t1.per_ground_water,
                                    t1.per_surface_water,
                                    t1.uti_ground_water,
                                    t1.uti_surface_water,
                                    t2.season_type,
                                    t2.crop_category,
                                    t2.crop_type,
                                    t2.crop_name,
                                    t2.area,
                                    t2.gross_water,
                                    t2.meta_id,
                                    t2.id
                                }).ToList();
                    var CheckIrrigationData = Data.Where(x => x.crop_name == result["crop_name"].ToString() && x.season_type == result["season_type"].ToString()).FirstOrDefault();
                    if (CheckIrrigationData != null)
                    {
                        if (Convert.ToDecimal(result["area_irrigation"]) != Convert.ToDecimal(CheckIrrigationData.area))
                        {
                            return Json("Please enter the Area under Conventional Irrigation (ha) mentioned (" + CheckIrrigationData.area + ")", JsonRequestBehavior.AllowGet);
                        }
                        else if (Convert.ToDecimal(result["gross_water"]) != Convert.ToDecimal(CheckIrrigationData.gross_water))
                        {
                            return Json("Please enter the Net Water Requirement (mm) mentioned (" + CheckIrrigationData.gross_water + ")", JsonRequestBehavior.AllowGet);
                        }
                    }
                    else
                    {
                        string CropName = "";
                        var DataCheck = Data.Where(x => x.season_type == result["season_type"].ToString()).ToList();
                        int i = 0;
                        foreach (var item in DataCheck)
                        {
                            i++;
                            if (DataCheck.Count == i)
                            {
                                CropName += item.crop_name;
                            }
                            else
                            {
                                CropName += item.crop_name + ", ";
                            }
                        }
                        return Json("Please select the same crop name added under the Water Utilisation-Irrigation module (" + (CropName) + ")", JsonRequestBehavior.AllowGet);
                    }

                    abhy_wsp_demand_meta obj = new abhy_wsp_demand_meta();

                    var DEtails = ABE.obj_abhy_wsp_demand_meta.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram && x.data_year == year).ToList();

                    if (DEtails.Count == 0)
                    {
                        obj.state = state;
                        obj.district = dist;
                        obj.block = block;
                        obj.gp = gram;
                        obj.entry_by = "aa";
                        obj.month = month;
                        obj.month_ordery_by = Get_Month_Number(month);
                        obj.data_year = year;
                        ABE.obj_abhy_wsp_demand_meta.Add(obj);
                        ABE.SaveChanges();
                        abhy_wsp_demand_drip obj1 = new abhy_wsp_demand_drip();

                        obj1.season_type = result["season_type"];
                        obj1.crop_category = result["crop_category"];
                        obj1.crop_type = result["crop_type"];
                        obj1.crop_name = result["crop_name"];
                        obj1.area_irrigation = result["area_irrigation"];
                        obj1.gross_water = result["gross_water"];
                        obj1.water_demand = result["water_demand"];
                        obj1.area_proposed = result["area_proposed"];
                        obj1.net_water_demand = result["net_water_demand"];
                        obj1.reduction_gw = result["reduction_gw"];
                        obj1.reduction_in_demand = result["reduction_in_demand"];
                        obj1.meta_id = obj.id;
                        ABE.obj_abhy_wsp_demand_drip.Add(obj1);
                        ABE.SaveChanges();
                    }
                    else
                    {
                        abhy_wsp_demand_drip obj1 = new abhy_wsp_demand_drip();
                        obj1.season_type = result["season_type"];
                        obj1.crop_category = result["crop_category"];
                        obj1.crop_type = result["crop_type"];
                        obj1.crop_name = result["crop_name"];
                        obj1.area_irrigation = result["area_irrigation"];
                        obj1.gross_water = result["gross_water"];
                        obj1.water_demand = result["water_demand"];
                        obj1.area_proposed = result["area_proposed"];
                        obj1.net_water_demand = result["net_water_demand"];
                        obj1.reduction_gw = result["reduction_gw"];
                        obj1.reduction_in_demand = result["reduction_in_demand"];
                        obj1.meta_id = DEtails[0].id;
                        ABE.obj_abhy_wsp_demand_drip.Add(obj1);
                        ABE.SaveChanges();
                    }

                    return Json("Successfully Saved", JsonRequestBehavior.AllowGet);
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
        public ActionResult savePipeline(string data)
        {
            if (Session["userid"] != null)
            {
                try
                {
                    DateTime now = DateTime.Now;
                    int MonthNumber = now.Month;
                    // Get the name of the month
                    string monthName = CultureInfo.CurrentCulture.DateTimeFormat.GetMonthName(MonthNumber);
                    var result = JsonConvert.DeserializeObject<dynamic>(data);

                    var state = Session["gstate"].ToString();
                    var dist = Session["gdist"].ToString();
                    var block = Session["gblock"].ToString();
                    var gram = Session["ggram"].ToString();
                    string year = Session["year"].ToString();
                    var month = monthName;

                    var Data = (from t1 in ABE.obj_abhy_waterdraft_irrigation_meta
                                join t2 in ABE.obj_abhy_waterdraft_irrigation_data on t1.id equals t2.meta_id
                                where t1.state_name == state && t1.district_name == dist && t1.block_name == block &&
                                t1.gp_name == gram && t1.data_year == year
                                select new
                                {
                                    t1.total_water_dem,
                                    t1.per_ground_water,
                                    t1.per_surface_water,
                                    t1.uti_ground_water,
                                    t1.uti_surface_water,
                                    t2.season_type,
                                    t2.crop_category,
                                    t2.crop_type,
                                    t2.crop_name,
                                    t2.area,
                                    t2.gross_water,
                                    t2.meta_id,
                                    t2.id
                                }).ToList();
                    var CheckIrrigationData = Data.Where(x => x.crop_name == result["crop_name"].ToString() && x.season_type == result["season_type"].ToString()).FirstOrDefault();
                    if (CheckIrrigationData != null)
                    {
                        if (Convert.ToDecimal(result["area_irrigation"]) != Convert.ToDecimal(CheckIrrigationData.area))
                        {
                            return Json("Please enter the Area under Conventional Irrigation (ha) mentioned (" + CheckIrrigationData.area + ")", JsonRequestBehavior.AllowGet);
                        }
                        else if (Convert.ToDecimal(result["gross_water"]) != Convert.ToDecimal(CheckIrrigationData.gross_water))
                        {
                            return Json("Please enter the Net Water Requirement (mm) mentioned (" + CheckIrrigationData.gross_water + ")", JsonRequestBehavior.AllowGet);
                        }
                    }
                    else
                    {
                        string CropName = "";
                        var DataCheck = Data.Where(x => x.season_type == result["season_type"].ToString()).ToList();
                        int i = 0;
                        foreach (var item in DataCheck)
                        {
                            i++;
                            if (DataCheck.Count == i)
                            {
                                CropName += item.crop_name;
                            }
                            else
                            {
                                CropName += item.crop_name + ", ";
                            }
                        }
                        return Json("Please select the same crop name added under the Water Utilisation-Irrigation module (" + (CropName) + ")", JsonRequestBehavior.AllowGet);
                    }
                    abhy_wsp_demand_meta obj = new abhy_wsp_demand_meta();

                    var DEtails = ABE.obj_abhy_wsp_demand_meta.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram && x.data_year == year).ToList();

                    if (DEtails.Count == 0)
                    {
                        obj.state = state;
                        obj.district = dist;
                        obj.block = block;
                        obj.gp = gram;
                        obj.entry_by = "aa";
                        obj.month = month;
                        obj.month_ordery_by = Get_Month_Number(month);
                        obj.data_year = year;
                        ABE.obj_abhy_wsp_demand_meta.Add(obj);
                        ABE.SaveChanges();
                        abhy_wsp_demand_pipeline obj1 = new abhy_wsp_demand_pipeline();

                        obj1.season_type = result["season_type"];
                        obj1.crop_category = result["crop_category"];
                        obj1.crop_type = result["crop_type"];
                        obj1.crop_name = result["crop_name"];
                        obj1.area_irrigation = result["area_irrigation"];
                        obj1.gross_water = result["gross_water"];
                        obj1.water_demand = result["water_demand"];
                        obj1.area_proposed = result["area_proposed"];
                        obj1.reduction = result["net_water_demand"];
                        obj1.net_water_demand = result["net_water_demand"];
                        obj1.reduction_gw = result["reduction_gw"];
                        obj1.reduction_in_demand = result["reduction_in_demand"];
                        obj1.meta_id = obj.id;
                        ABE.obj_abhy_wsp_demand_pipeline.Add(obj1);
                        ABE.SaveChanges();
                    }
                    else
                    {
                        abhy_wsp_demand_pipeline obj1 = new abhy_wsp_demand_pipeline();
                        obj1.season_type = result["season_type"];
                        obj1.crop_category = result["crop_category"];
                        obj1.crop_type = result["crop_type"];
                        obj1.crop_name = result["crop_name"];
                        obj1.area_irrigation = result["area_irrigation"];
                        obj1.gross_water = result["gross_water"];
                        obj1.water_demand = result["water_demand"];
                        obj1.area_proposed = result["area_proposed"];
                        obj1.reduction = result["net_water_demand"];
                        obj1.net_water_demand = result["net_water_demand"];
                        obj1.reduction_gw = result["reduction_gw"];
                        obj1.reduction_in_demand = result["reduction_in_demand"];
                        obj1.meta_id = DEtails[0].id;
                        ABE.obj_abhy_wsp_demand_pipeline.Add(obj1);
                        ABE.SaveChanges();
                    }

                    return Json("Successfully Saved", JsonRequestBehavior.AllowGet);
                }


                catch (Exception ex)
                {
                    Console.WriteLine(ex.InnerException.Message);
                    return Json("error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("logout", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult saveAnyother(string data)
        {
            if (Session["userid"] != null)
            {
                try
                {
                    DateTime now = DateTime.Now;
                    int MonthNumber = now.Month;
                    // Get the name of the month
                    string monthName = CultureInfo.CurrentCulture.DateTimeFormat.GetMonthName(MonthNumber);
                    var result = JsonConvert.DeserializeObject<dynamic>(data);

                    var state = Session["gstate"].ToString();
                    var dist = Session["gdist"].ToString();
                    var block = Session["gblock"].ToString();
                    var gram = Session["ggram"].ToString();
                    string year = Session["year"].ToString();
                    var month = monthName;
                    abhy_wsp_demand_meta obj = new abhy_wsp_demand_meta();

                    var DEtails = ABE.obj_abhy_wsp_demand_meta.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram && x.data_year == year).ToList();

                    if (DEtails.Count == 0)
                    {
                        obj.state = state;
                        obj.district = dist;
                        obj.block = block;
                        obj.gp = gram;
                        obj.entry_by = "aa";
                        obj.month = month;
                        obj.month_ordery_by = Get_Month_Number(month);
                        obj.data_year = year;
                        ABE.obj_abhy_wsp_demand_meta.Add(obj);
                        ABE.SaveChanges();
                        abhy_wsp_demand_anyother obj1 = new abhy_wsp_demand_anyother();

                        obj1.season_type = result["season_type"];
                        obj1.crop_category = result["crop_category"];
                        obj1.crop_type = result["crop_type"];
                        obj1.crop_name = result["crop_name"];
                        obj1.area_irrigation = result["area_irrigation"];
                        obj1.proposed_area = result["proposed_area"];
                        obj1.gross_water = result["gross_water"];
                        obj1.water_demand = result["water_demand"];
                        obj1.reduction = result["reduction"];
                        obj1.innovative_measures = result["innovative_measures"];
                        obj1.other_innovative = result["other_innovative"];
                        obj1.water_save = result["water_save"];
                        obj1.meta_id = obj.id;
                        ABE.obj_abhy_wsp_demand_anyother.Add(obj1);
                        ABE.SaveChanges();
                    }
                    else
                    {

                        abhy_wsp_demand_anyother obj1 = new abhy_wsp_demand_anyother();
                        obj1.season_type = result["season_type"];
                        obj1.crop_category = result["crop_category"];
                        obj1.crop_type = result["crop_type"];
                        obj1.crop_name = result["crop_name"];
                        obj1.area_irrigation = result["area_irrigation"];
                        obj1.proposed_area = result["proposed_area"];
                        obj1.gross_water = result["gross_water"];
                        obj1.water_demand = result["water_demand"];
                        obj1.reduction = result["reduction"];
                        obj1.innovative_measures = result["innovative_measures"];
                        obj1.other_innovative = result["other_innovative"];
                        obj1.water_save = result["water_save"];
                        obj1.meta_id = DEtails[0].id;
                        ABE.obj_abhy_wsp_demand_anyother.Add(obj1);
                        ABE.SaveChanges();
                    }

                    return Json("Saved", JsonRequestBehavior.AllowGet);
                }


                catch (Exception ex)
                {
                    Console.WriteLine(ex.InnerException.Message);
                    return Json("error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("logout", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult saveFundingData(string data)
        {
            if (Session["userid"] != null)
            {
                try
                {
                    DateTime now = DateTime.Now;
                    int MonthNumber = now.Month;
                    // Get the name of the month
                    string monthName = CultureInfo.CurrentCulture.DateTimeFormat.GetMonthName(MonthNumber);
                    var result = JsonConvert.DeserializeObject<dynamic>(data);
                    string fund_for = result["fund_for"];
                    var state = Session["gstate"].ToString();
                    var dist = Session["gdist"].ToString();
                    var block = Session["gblock"].ToString();
                    var gram = Session["ggram"].ToString();
                    string year = Session["year"].ToString();
                    var month = monthName;
                    abhy_wsp_demand_meta obj = new abhy_wsp_demand_meta();

                    var DEtails = ABE.obj_abhy_wsp_demand_meta.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram && x.data_year == year).FirstOrDefault();

                    abhy_wsp_demand_fund_details obj1 = new abhy_wsp_demand_fund_details();
                    if (DEtails != null)
                    {
                        var FundList = ABE.obj_abhy_wsp_demand_fund_details.Where(x => x.meta_id == DEtails.id && x.fund_for == fund_for).ToList();
                        if (FundList.Count != 0)
                        {
                            foreach (var fundData in FundList)
                            {
                                fundData.total_crop_area = result["total_crop_area"];
                                fundData.total_area_proposed = result["total_area_proposed"];
                                ABE.Entry(fundData).State = EntityState.Modified;
                                ABE.SaveChanges();
                            }
                        }
                        if(fund_for == "Other Measures")
                        {
                            obj1.innovative_measures = result["innovative_measures"];
                            obj1.area_selected_innovative = result["area_selected_innovative"];
                            int id_get = DEtails.id;
                            var DataFinal = ABE.obj_abhy_wsp_demand_fund_details.Where(x => x.meta_id == id_get && x.fund_for == fund_for && x.innovative_measures == obj1.innovative_measures).ToList();
                            Decimal TotalAnyFundArea = Convert.ToDecimal(result["area_proposed"]) + DataFinal.Sum(x => Convert.ToDecimal(x.area_proposed));
                            if(TotalAnyFundArea > Convert.ToDecimal(obj1.area_selected_innovative))
                            {
                                return Json("Area Proposed for other measures (ha) should not be greater than the total area proposed for Selected Innovative measures (ha).", JsonRequestBehavior.AllowGet);
                            }
                        }
                        obj1.state = state;
                        obj1.district = dist;
                        obj1.block = block;
                        obj1.gp = gram;
                        //obj1.year = year.ToString();
                        obj1.other_scheme = result["other_scheme"];
                        obj1.total_crop_area = result["total_crop_area"];
                        obj1.total_area_proposed = result["total_area_proposed"];
                        obj1.fund_for = result["fund_for"];
                        obj1.area_proposed = result["area_proposed"];
                        obj1.financial_year = result["financial_year"];
                        obj1.department_name = result["department_name"];
                        obj1.scheme_name = result["scheme_name"];
                        obj1.approx_est_cost = result["approx_est_cost"];
                        
                        obj1.meta_id = DEtails.id;
                        ABE.obj_abhy_wsp_demand_fund_details.Add(obj1);
                        ABE.SaveChanges();

                        return Json("Saved", JsonRequestBehavior.AllowGet);
                    }
                    else
                    {
                        return Json("Please Save Season Data First", JsonRequestBehavior.AllowGet);
                    }
                }


                catch (Exception ex)
                {
                    Console.WriteLine(ex.InnerException.Message);
                    return Json("error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("logout", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpGet]
        public ActionResult Get_sprinkler_data()
        {
            if (Session["userid"] != null)
            {
                try
                {
                    var state = Session["gstate"].ToString();
                    var dist = Session["gdist"].ToString();
                    
                    var block = Session["gblock"].ToString();
                    var gram = Session["ggram"].ToString();
                    string year = Session["year"].ToString();
                    

                    var Details = ABE.obj_abhy_wsp_demand_meta.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram && x.data_year == year).ToList().FirstOrDefault();


                    var data = ABE.obj_abhy_wsp_demand_sprinkler.Where(x => x.meta_id == Details.id).ToList();

                    return Json(data, JsonRequestBehavior.AllowGet);
                }
                catch (Exception ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("LogOut", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult Get_fund_data(string data)
        {
            if (Session["userid"] != null)
            {
                try
                {
                    var result = JsonConvert.DeserializeObject<dynamic>(data);

                    string fund_for = result["fund_for"];

                    var state = Session["gstate"].ToString();
                    var dist = Session["gdist"].ToString();
                    var block = Session["gblock"].ToString();
                    var gram = Session["ggram"].ToString();
                    string year = Session["year"].ToString();
                    //var month = Session["month"].ToString();

                    var Details = ABE.obj_abhy_wsp_demand_meta.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram && x.data_year == year).ToList();
                    if (Details.Count > 0)
                    {
                        int id_get = Details[0].id;
                        var DataFinal = ABE.obj_abhy_wsp_demand_fund_details.Where(x => x.meta_id == id_get && x.fund_for == fund_for).ToList();
                        return Json(DataFinal, JsonRequestBehavior.AllowGet);
                    }
                    else { return Json("", JsonRequestBehavior.AllowGet); }

                }
                catch (Exception ex)
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
        public ActionResult Get_drip_data()
        {
            if (Session["userid"] != null)
            {
                try
                {
                    var state = Session["gstate"].ToString();
                    var dist = Session["gdist"].ToString();
                    var block = Session["gblock"].ToString();
                    var gram = Session["ggram"].ToString();
                    string year = Session["year"].ToString();
                    //var month = Session["month"].ToString();
                    var Details = ABE.obj_abhy_wsp_demand_meta.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram && x.data_year == year).ToList().FirstOrDefault();


                    var data = ABE.obj_abhy_wsp_demand_drip.Where(x => x.meta_id == Details.id).ToList();

                    return Json(data, JsonRequestBehavior.AllowGet);
                }
                catch (Exception ex)
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
        public ActionResult Get_pipeline_data()
        {
            if (Session["userid"] != null)
            {
                try
                {
                    var state = Session["gstate"].ToString();
                    var dist = Session["gdist"].ToString();
                    var block = Session["gblock"].ToString();
                    var gram = Session["ggram"].ToString();
                    string year = Session["year"].ToString();
                    //var month = Session["month"].ToString();
                    var Details = ABE.obj_abhy_wsp_demand_meta.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram && x.data_year == year).ToList().FirstOrDefault();


                    var data = ABE.obj_abhy_wsp_demand_pipeline.Where(x => x.meta_id == Details.id).ToList();

                    return Json(data, JsonRequestBehavior.AllowGet);
                }
                catch (Exception ex)
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
        public ActionResult Get_anyother_data()
        {
            if (Session["userid"] != null)
            {
                try
                {
                    var state = Session["gstate"].ToString();
                    var dist = Session["gdist"].ToString();
                    var block = Session["gblock"].ToString();
                    var gram = Session["ggram"].ToString();
                    string year = Session["year"].ToString();
                    //var month = Session["month"].ToString();
                    var Details = ABE.obj_abhy_wsp_demand_meta.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram && x.data_year == year).ToList().FirstOrDefault();


                    var data = ABE.obj_abhy_wsp_demand_anyother.Where(x => x.meta_id == Details.id).ToList();

                    return Json(data, JsonRequestBehavior.AllowGet);
                }
                catch (Exception ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("LogOut", JsonRequestBehavior.AllowGet);
            }
        }


        [HttpPost]
        public ActionResult saveInnovation(string data)
        {
            if (Session["userid"] != null)
            {
                try
                {
                    var result = JsonConvert.DeserializeObject<dynamic>(data);

                    var state = Session["gstate"].ToString();
                    var dist = Session["gdist"].ToString();
                    var block = Session["gblock"].ToString();
                    var gram = Session["ggram"].ToString();
                    string year = Session["year"].ToString();
                    //var month = Session["month"].ToString();
                    abhy_wsp_demand_meta obj = new abhy_wsp_demand_meta();

                    var DEtails = ABE.obj_abhy_wsp_demand_meta.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram && x.data_year == year).ToList();

                    if (DEtails.Count == 0)
                    {
                        obj.state = state;
                        obj.district = dist;
                        obj.block = block;
                        obj.gp = gram;
                        obj.entry_by = "aa";
                        //obj.month = month;
                        //obj.month_ordery_by = Get_Month_Number(month);
                        obj.data_year = year;
                        ABE.obj_abhy_wsp_demand_meta.Add(obj);
                        ABE.SaveChanges();
                        abhy_wsp_innovative_measures obj1 = new abhy_wsp_innovative_measures();

                        obj1.ddlcrop_int_pr = result["ddlcrop_int_pr"];
                        obj1.ddlcrop_int_pr_sec = result["ddlcrop_int_pr_sec"];
                        obj1.ddlcrop_int_pr_th = result["ddlcrop_int_pr_th"];
                        obj1.possible_funding_sprinkler_im = result["possible_funding_sprinkler_im"];
                        obj1.aprx_est_cost_sprinkler_im = result["aprx_est_cost_sprinkler_im"];
                        obj1.aprx_fund_avail_sprinkler_im = result["aprx_fund_avail_sprinkler_im"];
                        obj1.gap_fund_sprinkler_im = result["gap_fund_sprinkler_im"];
                        obj1.meta_id = obj.id;
                        ABE.obj_abhy_wsp_innovative_measures.Add(obj1);
                        ABE.SaveChanges();
                    }
                    else
                    {
                        abhy_wsp_innovative_measures obj1 = new abhy_wsp_innovative_measures();
                        obj1.ddlcrop_int_pr = result["ddlcrop_int_pr"];
                        obj1.ddlcrop_int_pr_sec = result["ddlcrop_int_pr_sec"];
                        obj1.ddlcrop_int_pr_th = result["ddlcrop_int_pr_th"];
                        obj1.possible_funding_sprinkler_im = result["possible_funding_sprinkler_im"];
                        obj1.aprx_est_cost_sprinkler_im = result["aprx_est_cost_sprinkler_im"];
                        obj1.aprx_fund_avail_sprinkler_im = result["aprx_fund_avail_sprinkler_im"];
                        obj1.gap_fund_sprinkler_im = result["gap_fund_sprinkler_im"];
                        obj1.meta_id = DEtails[0].id;
                        ABE.obj_abhy_wsp_innovative_measures.Add(obj1);
                        ABE.SaveChanges();
                    }

                    return Json("Saved", JsonRequestBehavior.AllowGet);
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

        [HttpGet]
        public ActionResult Get_innovation_data()
        {
            if (Session["userid"] != null)
            {
                try
                {
                    var state = Session["gstate"].ToString();
                    var dist = Session["gdist"].ToString();
                    var block = Session["gblock"].ToString();
                    var gram = Session["ggram"].ToString();
                    string year = Session["year"].ToString();
                    //var month = Session["month"].ToString();
                    var Details = ABE.obj_abhy_wsp_demand_meta.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram && x.data_year == year).ToList().FirstOrDefault();

                    if (Details != null)
                    {
                        var data = ABE.obj_abhy_wsp_innovative_measures.Where(x => x.meta_id == Details.id).ToList();
                        return Json(data, JsonRequestBehavior.AllowGet);
                    }
                    else
                    {
                        return Json("", JsonRequestBehavior.AllowGet);
                    }

                }
                catch (Exception ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("LogOut", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult saveCropChanged(string data)
        {
            if (Session["userid"] != null)
            {
                try
                {
                    DateTime now = DateTime.Now;
                    int MonthNumber = now.Month;

                    // Get the name of the month
                    string monthName = CultureInfo.CurrentCulture.DateTimeFormat.GetMonthName(MonthNumber);
                    var result = JsonConvert.DeserializeObject<dynamic>(data);

                    var state = Session["gstate"].ToString();
                    var dist = Session["gdist"].ToString();
                    var block = Session["gblock"].ToString();
                    var gram = Session["ggram"].ToString();
                    string year = Session["year"].ToString();
                    var month = monthName;
                    abhy_wsp_demand_meta obj = new abhy_wsp_demand_meta();

                    var DEtails = ABE.obj_abhy_wsp_demand_meta.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram && x.data_year == year).ToList();

                    if (DEtails.Count == 0)
                    {
                        obj.state = state;
                        obj.district = dist;
                        obj.block = block;
                        obj.gp = gram;
                        obj.month = month;
                        obj.month_ordery_by = Get_Month_Number(month);
                        obj.entry_by = "aa";
                        obj.data_year = year;
                        ABE.obj_abhy_wsp_demand_meta.Add(obj);
                        ABE.SaveChanges();
                        abhy_wsp_demand_change_crop obj1 = new abhy_wsp_demand_change_crop();
                        obj1.original_crop_name = result["original_crop_name"];
                        obj1.original_area = result["original_area"];
                        obj1.season_type = result["season_type"];
                        obj1.crop_category = result["crop_category"];
                        obj1.crop_type = result["crop_type"];
                        obj1.crop_name = result["crop_name"];
                        obj1.area_ch = result["area"];
                        obj1.water_req = result["water_req"];
                        obj1.change_water_demand = result["change_water_demand"];
                        obj1.original_wt_dmd = result["original_wt_dmd"];
                        obj1.reduction_gw = result["reduction_gw"];
                        obj1.uti_id = result["uti_id"];
                        obj1.meta_id = obj.id;
                        ABE.obj_abhy_wsp_demand_change_crop.Add(obj1);
                        ABE.SaveChanges();
                    }
                    else
                    {
                        abhy_wsp_demand_change_crop obj1 = new abhy_wsp_demand_change_crop();
                        obj1.original_crop_name = result["original_crop_name"];
                        obj1.original_area = result["original_area"];
                        obj1.season_type = result["season_type"];
                        obj1.crop_category = result["crop_category"];
                        obj1.crop_type = result["crop_type"];
                        obj1.crop_name = result["crop_name"];
                        obj1.area_ch = result["area"];
                        obj1.water_req = result["water_req"];
                        obj1.change_water_demand = result["change_water_demand"];
                        obj1.original_wt_dmd = result["original_wt_dmd"];
                        obj1.reduction_gw = result["reduction_gw"];
                        obj1.uti_id = result["uti_id"];
                        obj1.meta_id = DEtails[0].id;
                        ABE.obj_abhy_wsp_demand_change_crop.Add(obj1);
                        ABE.SaveChanges();
                    }

                    return Json("Saved", JsonRequestBehavior.AllowGet);
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
        public ActionResult ChackChangedCropArea(string data)
        {
            if (Session["userid"] != null)
            {
                try
                {
                    var result = JsonConvert.DeserializeObject<dynamic>(data);
                    var state = Session["gstate"].ToString();
                    var dist = Session["gdist"].ToString();
                    var block = Session["gblock"].ToString();
                    var gram = Session["ggram"].ToString();
                    string year = Session["year"].ToString();
                    //var month = Session["month"].ToString();
                    string season_type = result["season_type"];
                    string original_crop_name = result["original_crop_name"];
                    var Details = ABE.obj_abhy_wsp_demand_meta.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram && x.data_year == year).ToList().FirstOrDefault();


                    var getData = ABE.obj_abhy_wsp_demand_change_crop.Where(x => x.meta_id == Details.id && x.season_type == season_type && x.original_crop_name == original_crop_name).ToList();
                    double Total_area = getData.Sum(x => Convert.ToDouble(x.area_ch));
                    double SumOfArea = Total_area + Convert.ToDouble(result["area_ch"]);

                    return Json(SumOfArea, JsonRequestBehavior.AllowGet);
                }
                catch (Exception ex)
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
        public ActionResult Get_ch_Crop_data()
        {
            if (Session["userid"] != null)
            {
                try
                {
                    var state = Session["gstate"].ToString();
                    var dist = Session["gdist"].ToString();
                    var block = Session["gblock"].ToString();
                    var gram = Session["ggram"].ToString();
                    string year = Session["year"].ToString();
                    //var month = Session["month"].ToString();
                    var Details = ABE.obj_abhy_wsp_demand_meta.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram && x.data_year == year).ToList().FirstOrDefault();


                    var data = ABE.obj_abhy_wsp_demand_change_crop.Where(x => x.meta_id == Details.id).ToList();

                    return Json(data, JsonRequestBehavior.AllowGet);
                }
                catch (Exception ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("LogOut", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult Delete_data_sprinkler(string data)
        {
            if (Session["userid"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<dynamic>(data);

                    int id = Convert.ToInt32(result["IDD"]);

                    var DEtails = ABE.obj_abhy_wsp_demand_sprinkler.Where(x => x.id == id).ToList();
                    ABE.Entry(DEtails[0]).State = EntityState.Deleted;
                    int meta_id = Convert.ToInt32(DEtails[0].meta_id);
                    var fund_for = "Sprinkler";
                    var FundData = ABE.obj_abhy_wsp_demand_fund_details.Where(x => x.meta_id == meta_id && x.fund_for == fund_for).ToList();
                    if (FundData.Count != 0)
                    {
                        //ABE.Entry(FundData).State = EntityState.Deleted;
                        ABE.obj_abhy_wsp_demand_fund_details.RemoveRange(FundData);
                        //ABE.SaveChanges();
                    }
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
        public ActionResult Delete_data_drip(string data)
        {
            if (Session["userid"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<dynamic>(data);

                    int id = Convert.ToInt32(result["IDD"]);


                    var DEtails = ABE.obj_abhy_wsp_demand_drip.Where(x => x.id == id).ToList();
                    int meta_id = Convert.ToInt32(DEtails[0].meta_id);
                    var FundData = ABE.obj_abhy_wsp_demand_fund_details.Where(x => x.meta_id == meta_id && x.fund_for == "Drip").ToList();
                    if (FundData.Count != 0)
                    {
                        //ABE.Entry(FundData).State = EntityState.Deleted;
                        ABE.obj_abhy_wsp_demand_fund_details.RemoveRange(FundData);
                        //ABE.SaveChanges();
                    }
                    ABE.Entry(DEtails[0]).State = EntityState.Deleted;
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
        public ActionResult Delete_data_pipe(string data)
        {
            if (Session["userid"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<dynamic>(data);

                    int id = Convert.ToInt32(result["IDD"]);


                    var DEtails = ABE.obj_abhy_wsp_demand_pipeline.Where(x => x.id == id).ToList();
                    int meta_id = Convert.ToInt32(DEtails[0].meta_id);
                    var FundData = ABE.obj_abhy_wsp_demand_fund_details.Where(x => x.meta_id == meta_id && x.fund_for == "UG Pipelines").ToList();
                    if (FundData.Count != 0)
                    {
                        //ABE.Entry(FundData).State = EntityState.Deleted;
                        ABE.obj_abhy_wsp_demand_fund_details.RemoveRange(FundData);
                        //ABE.SaveChanges();
                    }
                    ABE.Entry(DEtails[0]).State = EntityState.Deleted;
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
        public ActionResult Delete_data_crop(string data)
        {
            if (Session["userid"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<dynamic>(data);
                    int id = Convert.ToInt32(result["IDD"]);
                    var DEtails = ABE.obj_abhy_wsp_demand_change_crop.Where(x => x.id == id).ToList();
                    int meta_id = Convert.ToInt32(DEtails[0].meta_id);
                    var FundData = ABE.obj_abhy_wsp_demand_fund_details.Where(x => x.meta_id == meta_id && x.fund_for == "Crop Diversification").ToList();
                    if (FundData.Count != 0)
                    {
                        //ABE.Entry(FundData).State = EntityState.Deleted;
                        ABE.obj_abhy_wsp_demand_fund_details.RemoveRange(FundData);
                        //ABE.SaveChanges();
                    }
                    ABE.Entry(DEtails[0]).State = EntityState.Deleted;
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
        public ActionResult Delete_data_any(string data)
        {
            if (Session["userid"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<dynamic>(data);

                    int id = Convert.ToInt32(result["IDD"]);


                    var DEtails = ABE.obj_abhy_wsp_demand_anyother.Where(x => x.id == id).ToList();
                    int meta_id = Convert.ToInt32(DEtails[0].meta_id);
                    var FundData = ABE.obj_abhy_wsp_demand_fund_details.Where(x => x.meta_id == meta_id && x.fund_for == "Other Measures").ToList();
                    if (FundData.Count != 0)
                    {
                        //ABE.Entry(FundData).State = EntityState.Deleted;
                        ABE.obj_abhy_wsp_demand_fund_details.RemoveRange(FundData);
                        //ABE.SaveChanges();
                    }
                    ABE.Entry(DEtails[0]).State = EntityState.Deleted;
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
        public ActionResult Delete_data_IN(string data)
        {
            if (Session["userid"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<dynamic>(data);

                    int id = Convert.ToInt32(result["IDD"]);


                    var DEtails = ABE.obj_abhy_wsp_innovative_measures.Where(x => x.id == id).ToList();

                    ABE.Entry(DEtails[0]).State = EntityState.Deleted;
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
        public ActionResult Delete_data_Fundig(string data)
        {
            if (Session["userid"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<dynamic>(data);

                    int id = Convert.ToInt32(result["IDD"]);


                    var DEtails = ABE.obj_abhy_wsp_demand_fund_details.Where(x => x.id == id).ToList();

                    ABE.Entry(DEtails[0]).State = EntityState.Deleted;
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

        [HttpGet]
        public ActionResult Demadside_Department_Info()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_wsp_demandside_department_name> ddetails1 = ABE.obj_abhy_wsp_demandside_department_name.OrderBy(x => x.department_name).ToList();//total list
                    return Json(ddetails1, JsonRequestBehavior.AllowGet);
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

        [HttpGet]
        public ActionResult Scheme_Info()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_wsp_scheme_name> ddetails1 = ABE.obj_abhy_wsp_scheme_name.OrderBy(x => x.scheme_name).ToList();//total list
                    return Json(ddetails1, JsonRequestBehavior.AllowGet);
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

        [HttpGet]
        public ActionResult FetchDropDownInnovative()
        {
            if (Session["userid"] != null)
            {
                try
                {
                    var state = Session["gstate"].ToString();
                    var dist = Session["gdist"].ToString();
                    var block = Session["gblock"].ToString();
                    var gram = Session["ggram"].ToString();
                    string year = Session["year"].ToString();


                    var Details = ABE.obj_abhy_wsp_demand_meta.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram && x.data_year == year).ToList().FirstOrDefault();


                    var data = ABE.obj_abhy_wsp_demand_anyother.Where(x => x.meta_id == Details.id).ToList();
                    
                    List<abhy_wsp_demand_anyother> DropDownData = new List<abhy_wsp_demand_anyother>();
                    foreach (var item in data)
                    {
                        abhy_wsp_demand_anyother GetList = new abhy_wsp_demand_anyother();
                        if (item.innovative_measures == "Other")
                        {
                            GetList.innovative_measures = "Other -" + item.other_innovative;
                            DropDownData.Add(GetList);
                        }
                        else
                        {
                            GetList.innovative_measures = item.innovative_measures;
                            DropDownData.Add(GetList);
                        }
                    }
                    
                    return Json(DropDownData, JsonRequestBehavior.AllowGet);
                }
                catch (Exception ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("LogOut", JsonRequestBehavior.AllowGet);
            }
        }
    }
}