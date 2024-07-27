using AbhyProject.Classes;
using AbhyProject.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Globalization;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;

namespace AbhyProject.Controllers
{
    public class WaterUtilizationController : Controller
    {
        // GET: WaterUtilization
        AbhyEntity ABE = new AbhyEntity();
        public ActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public ActionResult Fetch_domestic_data()
        {
            if (Session["UserId"] != null)
            {
                var state = Session["gstate"].ToString();
                var dis = Session["gdist"].ToString();
                var block = Session["gblock"].ToString();
                var gp = Session["ggram"].ToString();
                var year = Session["year"].ToString();

                var data = ABE.obj_abhy_uti_waterdraft_domestic_new.
                  Where(n => n.state == state && n.district == dis && n.block == block && n.gp == gp && n.year == year).
                  ToList();
                if(data.Count == 0)
                {
                    data = ABE.obj_abhy_uti_waterdraft_domestic_new.
                  Where(n => n.state == state && n.district == dis && n.block == block && n.gp == gp && n.year == "2023-24").
                  ToList();
                }

                return Json(data, JsonRequestBehavior.AllowGet);
            }

            else
            {
                return RedirectToAction("WSP_GWM_HOME", "WspNew");
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
        public ActionResult Domestic_InsertData(string data)
        {
            if (Session["userid"] != null)
            {
                try
                {
                    DateTime now = DateTime.Now;
                    int month = now.Month;

                    // Get the name of the month
                    string monthName = CultureInfo.CurrentCulture.DateTimeFormat.GetMonthName(month);
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_uti_waterdraft_domestic_new>(data);

                    var state = Session["gstate"].ToString();
                    var dist = Session["gdist"].ToString();
                    var block = Session["gblock"].ToString();
                    var gram = Session["ggram"].ToString();
                    var year = Session["year"].ToString();
                    var Month = monthName;

                    var data1 = ABE.obj_abhy_uti_waterdraft_domestic_new.
              Where(n => n.state == state && n.district == dist && n.block == block && n.gp == gram && n.year == year).ToList();

                    if (data1.Count > 0)
                    {
                        //var data11 = data1.SingleOrDefault();
                        foreach (var item in data1)
                        {
                            ABE.Entry(item).State = EntityState.Deleted;
                            ABE.SaveChanges();
                        }
                    }
                    result.gp = gram;
                    result.block = block;
                    result.district = dist;
                    result.state = state;
                    result.year = year;
                    result.month = Month;
                    result.month_ordery_by = Get_Month_Number(Month);
                    ABE.obj_abhy_uti_waterdraft_domestic_new.Add(result);
                    //var ddetails1 = ABE.obj_abhy_wsp_waterbudget_new.Where(x => x.state_name == state && x.district_name == dist && x.block_name == block && x.gpname == gram && x.year == year).FirstOrDefault();
                    //if(ddetails1 != null)
                    //{
                    //    ABE.Entry(ddetails1).State = EntityState.Deleted;
                    //}
                    int a = ABE.SaveChanges();
                    return Json("Saved Successfully", JsonRequestBehavior.AllowGet);
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
        public ActionResult Fetch_LiveStock()
        {
            if (Session["UserId"] != null)
            {
                var state = Session["gstate"].ToString();
                var dis = Session["gdist"].ToString();
                var block = Session["gblock"].ToString();
                var gp = Session["ggram"].ToString();
                var year = Session["year"].ToString();
                //var month = Session["month"].ToString();

                var id = ABE.obj_abhy_waterdraft_domestic_new.
                  Where(n => n.state_name == state && n.district_name == dis && n.block_name == block && n.gpname == gp).
                  Select(n => n.id).FirstOrDefault();
                var Livestock_values = ABE.obj_abhy_baseline_gp_livestock.Where(n => n.id == id).Select(n => new { n.livestock_name, n.livestock_value }).ToList();
                return Json(Livestock_values, JsonRequestBehavior.AllowGet);
            }

            else
            {
                return RedirectToAction("WSP_GWM_HOME", "WspNew");
            }
        }
        //[HttpGet]
        //public ActionResult Fetch_GPDCI()
        //{
        //    if (Session["UserId"] != null)
        //    {
        //        var state = Session["gstate"].ToString();
        //        var dis = Session["gdist"].ToString();
        //        var block = Session["gblock"].ToString();
        //        var gp = Session["ggram"].ToString();
        //        var year = Session["year"].ToString();
        //        var data = ABE.obj_abhy_waterdraft_domestic_new.
        //            Where(n => n.state_name == state && n.district_name == dis && n.block_name == block && n.gpname == gp).
        //            Select(n => new { total_human = n.domestic_people_count, total_livestock = n.domestic_livestock_count }).FirstOrDefault();

        //        return Json(data, JsonRequestBehavior.AllowGet);
        //    }

        //    else
        //    {
        //        return RedirectToAction("WSP_GWM_HOME", "WspNew");
        //    }
        //}

        [HttpPost]
        public ActionResult Irrigation_insert(string data)
        {
            if (Session["userid"] != null)
            {
                try
                {
                    DateTime now = DateTime.Now;
                    int MonthNumber = now.Month;

                    // Get the name of the month
                    string monthName = CultureInfo.CurrentCulture.DateTimeFormat.GetMonthName(MonthNumber);
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<dynamic>(data);

                    var state = Session["gstate"].ToString();
                    var dist = Session["gdist"].ToString();
                    var block = Session["gblock"].ToString();
                    var gram = Session["ggram"].ToString();
                    string year = Session["year"].ToString();
                    string month = monthName;

                    abhy_waterdraft_irrigation_meta obj = new abhy_waterdraft_irrigation_meta();

                    var DEtails = ABE.obj_abhy_waterdraft_irrigation_meta.Where(x => x.state_name == state && x.district_name == dist && x.block_name == block && x.gp_name == gram && x.data_year == year).ToList();

                    if (DEtails.Count == 0)
                    {
                        obj.state_name = state;
                        obj.district_name = dist;
                        obj.block_name = block;
                        obj.gp_name = gram;
                        obj.month = month;
                        obj.entry_by = "aa";
                        obj.data_year = year;
                        obj.total_water_dem = result["total_water_dem"];
                        obj.per_ground_water = result["per_ground_water"];
                        obj.per_surface_water = result["per_surface_water"];
                        obj.uti_ground_water = result["uti_ground_water"];
                        obj.uti_surface_water = result["uti_surface_water"];
                        obj.month_ordery_by = Get_Month_Number(month);

                        ABE.obj_abhy_waterdraft_irrigation_meta.Add(obj);
                        ABE.SaveChanges();
                        abhy_waterdraft_irrigation_data obj1 = new abhy_waterdraft_irrigation_data();

                        obj1.season_type = result["season_type"];
                        obj1.crop_category = result["crop_category"];
                        obj1.crop_type = result["crop_type"];
                        obj1.crop_name = result["crop_name"];
                        obj1.area = result["area"];
                        obj1.gross_water = result["gross_water"];
                        obj1.meta_id = obj.id;
                        ABE.obj_abhy_waterdraft_irrigation_data.Add(obj1);
                        ABE.SaveChanges();
                    }
                    else
                    {
                        DEtails[0].state_name = state;
                        DEtails[0].district_name = dist;
                        DEtails[0].block_name = block;
                        DEtails[0].gp_name = gram;
                        DEtails[0].month = month;
                        DEtails[0].entry_by = "aa";
                        DEtails[0].data_year = year;
                        DEtails[0].total_water_dem = result["total_water_dem"];
                        DEtails[0].per_ground_water = result["per_ground_water"];
                        DEtails[0].per_surface_water = result["per_surface_water"];
                        DEtails[0].uti_ground_water = result["uti_ground_water"];
                        DEtails[0].uti_surface_water = result["uti_surface_water"];
                        DEtails[0].month_ordery_by = Get_Month_Number(month);
                        //ABE.obj_abhy_waterdraft_irrigation_meta.Add(obj);
                        //ABE.SaveChanges();

                        ABE.Entry(DEtails[0]).State = EntityState.Modified;
                        ABE.SaveChanges();

                        abhy_waterdraft_irrigation_data obj1 = new abhy_waterdraft_irrigation_data();
                        obj1.season_type = result["season_type"];
                        obj1.crop_category = result["crop_category"];
                        obj1.crop_type = result["crop_type"];
                        obj1.crop_name = result["crop_name"];
                        obj1.area = result["area"];
                        obj1.gross_water = result["gross_water"];
                        obj1.meta_id = DEtails[0].id;
                        ABE.obj_abhy_waterdraft_irrigation_data.Add(obj1);
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
        public ActionResult Irrigation_insert_all(string data)
        {
            if (Session["userid"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<dynamic>(data);

                    var state = Session["gstate"].ToString();
                    var dist = Session["gdist"].ToString();
                    var block = Session["gblock"].ToString();
                    var gram = Session["ggram"].ToString();
                    string year = Session["year"].ToString();
                    

                    abhy_waterdraft_irrigation_meta obj = new abhy_waterdraft_irrigation_meta();

                    var DEtails = ABE.obj_abhy_waterdraft_irrigation_meta.Where(x => x.state_name == state && x.district_name == dist && x.block_name == block && x.gp_name == gram && x.data_year == year).ToList();

                    if (DEtails.Count > 0)
                    {
                        DEtails[0].total_water_dem = result["total_water_dem"];
                        DEtails[0].per_ground_water = result["per_ground_water"];
                        DEtails[0].per_surface_water = result["per_surface_water"];
                        DEtails[0].uti_ground_water = result["uti_ground_water"];
                        DEtails[0].uti_surface_water = result["uti_surface_water"];

                        ABE.Entry(DEtails[0]).State = EntityState.Modified;
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
        public ActionResult Irrigation_update(string data)
        {
            if (Session["userid"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<dynamic>(data);


                    int IDD = Convert.ToInt32(result["id"]);

                    abhy_waterdraft_irrigation_meta obj = new abhy_waterdraft_irrigation_meta();

                    var DEtails = ABE.obj_abhy_waterdraft_irrigation_meta.Where(x => x.id == IDD).ToList();


                    DEtails[0].total_water_dem = result["total_water_dem"];
                    DEtails[0].per_ground_water = result["per_ground_water"];
                    DEtails[0].per_surface_water = result["per_surface_water"];
                    DEtails[0].uti_ground_water = result["uti_ground_water"];
                    DEtails[0].uti_surface_water = result["uti_surface_water"];

                    ABE.Entry(DEtails[0]).State = EntityState.Modified;
                    ABE.SaveChanges();

                    abhy_waterdraft_irrigation_data obj1 = new abhy_waterdraft_irrigation_data();
                    string season_type = result["season_type"];
                    var detail_data = ABE.obj_abhy_waterdraft_irrigation_data.Where(x => x.meta_id == IDD && x.season_type == season_type).ToList();
                    detail_data[0].crop_category = result["crop_category"];
                    detail_data[0].crop_type = result["crop_type"];
                    detail_data[0].crop_name = result["crop_name"];
                    detail_data[0].area = result["area"];
                    detail_data[0].gross_water = result["gross_water"];
                    detail_data[0].meta_id = DEtails[0].id;
                    //    ABE.obj_abhy_waterdraft_irrigation_data.Add(obj1);
                    ABE.Entry(detail_data[0]).State = EntityState.Modified;
                    ABE.SaveChanges();

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
        public ActionResult Fetch_Irrigation_kharif_id(string data)
        {
            if (Session["UserId"] != null)
            {
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<dynamic>(data);
                int id = Convert.ToInt32(result["id"]);
                var Data1 = ABE.obj_abhy_waterdraft_irrigation_data.Where(x => x.id == id).ToList();
                return Json(Data1, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return RedirectToAction("WSP_GWM_HOME", "WspNew");
            }
        }

        [HttpGet]
        public ActionResult Fetch_Irrigation_kharif()
        {
            if (Session["UserId"] != null)
            {
                var state = Session["gstate"].ToString();
                var dis = Session["gdist"].ToString();
                var block = Session["gblock"].ToString();
                var gp = Session["ggram"].ToString();
                string year = Session["year"].ToString();
                //var month = Session["month"].ToString();
                var Data = (from t1 in ABE.obj_abhy_waterdraft_irrigation_meta
                            join t2 in ABE.obj_abhy_waterdraft_irrigation_data on t1.id equals t2.meta_id
                            where t1.state_name == state && t1.district_name == dis && t1.block_name == block &&
                            t1.gp_name == gp && t1.data_year == year
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
                if(Data.Count == 0)
                {
                    Data = (from t1 in ABE.obj_abhy_waterdraft_irrigation_meta
                            join t2 in ABE.obj_abhy_waterdraft_irrigation_data on t1.id equals t2.meta_id
                            where t1.state_name == state && t1.district_name == dis && t1.block_name == block &&
                            t1.gp_name == gp && t1.data_year == "2023-24"
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
                }
                return Json(Data, JsonRequestBehavior.AllowGet);
            }

            else
            {
                return RedirectToAction("WSP_GWM_HOME", "WspNew");
            }
        }

        [HttpPost]
        public ActionResult Industry_Save_(string data)
        {
            if (Session["userid"] != null)
            {
                try
                {
                    DateTime now = DateTime.Now;
                    int MonthNumber = now.Month;

                    // Get the name of the month
                    string monthName = CultureInfo.CurrentCulture.DateTimeFormat.GetMonthName(MonthNumber);
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_waterdraft_industry>(data);

                    var state = Session["gstate"].ToString();
                    var dist = Session["gdist"].ToString();
                    var block = Session["gblock"].ToString();
                    var gram = Session["ggram"].ToString();
                    var year = Session["year"].ToString();
                    var month = monthName;


                    result.gpname = gram;
                    result.block_name = block;
                    result.district_name = dist;
                    result.state_name = state;
                    result.month = month;
                    result.year = year;
                    result.month_ordery_by = Get_Month_Number(month);

                    ABE.obj_abhy_waterdraft_industry.Add(result);
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
        public ActionResult Industry_update_(string data)
        {
            if (Session["userid"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<dynamic>(data);


                    int IDD = Convert.ToInt32(result["id"]);

                    abhy_waterdraft_industry obj = new abhy_waterdraft_industry();

                    var DEtails = ABE.obj_abhy_waterdraft_industry.Where(x => x.id == IDD).ToList();

                    DEtails[0].industry_name = result["industry_name"];
                    DEtails[0].industry_daily_water_req = result["industry_daily_water_req"];
                    DEtails[0].industry_days_use = result["industry_days_use"];
                    DEtails[0].annual_ind_demand = result["annual_ind_demand"];
                    DEtails[0].industry_demand_ground_water = result["industry_demand_ground_water"];
                    DEtails[0].industry_demand_surface_water = result["industry_demand_surface_water"];
                    DEtails[0].indus_grd_water = result["indus_grd_water"];
                    DEtails[0].indus_sur_water = result["indus_sur_water"];

                    ABE.Entry(DEtails[0]).State = EntityState.Modified;
                    ABE.SaveChanges();
                    return Json("Updated sucessfully", JsonRequestBehavior.AllowGet);
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
        public ActionResult Fetch_Industry()
        {
            if (Session["UserId"] != null)
            {
                var state = Session["gstate"].ToString();
                var dis = Session["gdist"].ToString();
                var block = Session["gblock"].ToString();
                var gp = Session["ggram"].ToString();
                var year = Session["year"].ToString();
                /*var month = Session["month"].ToString();*/
                var data = ABE.obj_abhy_waterdraft_industry.
                    Where(n => n.state_name == state && n.district_name == dis && n.block_name == block && n.gpname == gp).ToList();
                return Json(data, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return RedirectToAction("WSP_GWM_HOME", "WspNew");
            }
        }

        [HttpPost]
        public ActionResult other_Save_(string data)
        {
            if (Session["userid"] != null)
            {
                try
                {
                    DateTime now = DateTime.Now;
                    int MonthNumber = now.Month;

                    // Get the name of the month
                    string monthName = CultureInfo.CurrentCulture.DateTimeFormat.GetMonthName(MonthNumber);
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_waterdraft_other>(data);

                    var state = Session["gstate"].ToString();
                    var dist = Session["gdist"].ToString();
                    var block = Session["gblock"].ToString();
                    var gram = Session["ggram"].ToString();
                    var year = Session["year"].ToString();
                    var month = monthName;

                    result.gpname = gram;
                    result.block_name = block;
                    result.district_name = dist;
                    result.state_name = state;
                    result.year = year;
                    result.month = month;
                    result.month_ordery_by = Get_Month_Number(month);

                    ABE.obj_abhy_waterdraft_other.Add(result);
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
        public ActionResult Fetch_Other()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var state = Session["gstate"].ToString();
                    var dis = Session["gdist"].ToString();
                    var block = Session["gblock"].ToString();
                    var gp = Session["ggram"].ToString();

                    var year = Session["year"].ToString();
                    //var month = Session["month"].ToString();

                    var data = ABE.obj_abhy_waterdraft_other.
                        Where(n => n.state_name == state && n.district_name == dis && n.block_name == block && n.gpname == gp).ToList();

                    return Json(data, JsonRequestBehavior.AllowGet);
                }
                catch (Exception ex)
                { return Json("Error", JsonRequestBehavior.AllowGet); }
            }

            else
            {
                return RedirectToAction("WSP_GWM_HOME", "WspNew");
            }
        }

        [HttpGet]
        public ActionResult Fetch_dropdown_data(string food_for, string food_type)
        {
            if (Session["UserId"] != null)
            {
                var data = ABE.obj_abhy_kharif_veg_dropdown.Where(x => x.food_for == food_for).ToList();

                return Json(data, JsonRequestBehavior.AllowGet);
            }

            else
            {
                return RedirectToAction("WSP_GWM_HOME", "WspNew");
            }
        }

        [HttpGet]
        public ActionResult Get_Livestock_info()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();
                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    var Year = "2023-24";
                    //var Year = Session["year"].ToString();
                    //var Month = Session["month"].ToString();
                    List<abhy_baseline_gp_livestock> details = new List<abhy_baseline_gp_livestock>();

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null)
                    {
                        var id = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year && x.d_sent == true).OrderByDescending(x=> x.month_order_by).Select(x => x.id).FirstOrDefault();//total list
                        details = ABE.obj_abhy_baseline_gp_livestock.Where(x => x.id == id).OrderByDescending(x => x.p_id).ToList();
                    }
                    return Json(details, JsonRequestBehavior.AllowGet);
                }
                catch (Exception Ex)
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
        public ActionResult Delete_data(string data)
        {
            if (Session["userid"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<dynamic>(data);
                    var state = Session["gstate"].ToString();
                    var dist = Session["gdist"].ToString();
                    var block = Session["gblock"].ToString();
                    var gram = Session["ggram"].ToString();
                    string year = Session["year"].ToString();
                    int id = Convert.ToInt32(result["IDD"]);


                    abhy_waterdraft_irrigation_data obj = new abhy_waterdraft_irrigation_data();

                    

                    var DEtails = ABE.obj_abhy_waterdraft_irrigation_data.Where(x => x.id == id).ToList();
                    string season = DEtails[0].season_type;
                    ABE.Entry(DEtails[0]).State = EntityState.Deleted;

                    var DEtailss = ABE.obj_abhy_waterdraft_irrigation_meta.Where(x => x.state_name == state && x.district_name == dist && x.block_name == block && x.gp_name == gram && x.data_year == year).ToList();
                    if(DEtailss.Count != 0) {
                        
                        DEtailss[0].per_ground_water = "";
                        DEtailss[0].per_surface_water = "";
                        DEtailss[0].uti_ground_water = "";
                        DEtailss[0].uti_surface_water = "";

                        ABE.Entry(DEtailss[0]).State = EntityState.Modified;
                    }

                    //var month = Session["month"].ToString();
                    var Details = ABE.obj_abhy_wsp_demand_meta.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram && x.data_year == year).ToList().FirstOrDefault();
                    if(Details != null)
                    {

                        var FundData = ABE.obj_abhy_wsp_demand_fund_details.Where(x => x.meta_id == Details.id).ToList();
                        if (FundData.Count != 0)
                        {
                            //ABE.Entry(FundData).State = EntityState.Deleted;
                            ABE.obj_abhy_wsp_demand_fund_details.RemoveRange(FundData);
                            //ABE.SaveChanges();

                        }
                        var SpData = ABE.obj_abhy_wsp_demand_sprinkler.Where(x => x.meta_id == Details.id && x.season_type == season).ToList();
                        if(SpData.Count != 0)
                        {
                            ABE.Entry(SpData[0]).State = EntityState.Deleted;

                        }
                        var DripData = ABE.obj_abhy_wsp_demand_drip.Where(x => x.meta_id == Details.id && x.season_type == season).ToList();
                        if (DripData.Count != 0)
                        {
                            ABE.Entry(DripData[0]).State = EntityState.Deleted;

                        }
                        var PipeData = ABE.obj_abhy_wsp_demand_pipeline.Where(x => x.meta_id == Details.id && x.season_type == season).ToList();
                        if (PipeData.Count != 0)
                        {
                            ABE.Entry(PipeData[0]).State = EntityState.Deleted;

                        }
                        var CropData = ABE.obj_abhy_wsp_demand_change_crop.Where(x => x.meta_id == Details.id && x.season_type == season).ToList();
                        if (CropData.Count != 0)
                        {
                            ABE.Entry(CropData[0]).State = EntityState.Deleted;

                        }
                        //var AnyData = ABE.obj_abhy_wsp_demand_anyother.Where(x => x.meta_id == Details.id && x.season_type == season).ToList();
                        //if (AnyData.Count != 0)
                        //{
                        //    ABE.Entry(AnyData[0]).State = EntityState.Deleted;

                        //}
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
        public ActionResult delete_ind(string data)
        {
            if (Session["userid"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<dynamic>(data);

                    int id = Convert.ToInt32(result["IDD"]);

                    var DEtails = ABE.obj_abhy_waterdraft_industry.Where(x => x.id == id).ToList();

                    ABE.Entry(DEtails[0]).State = EntityState.Deleted;
                    ABE.SaveChanges();

                    return Json("Deleted successfully", JsonRequestBehavior.AllowGet);
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
        public ActionResult Fetch_Industry_id(string data)
        {
            if (Session["UserId"] != null)
            {
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<dynamic>(data);

                int id = Convert.ToInt32(result["IDD"]);

                var data_all = ABE.obj_abhy_waterdraft_industry.
                    Where(n => n.id == id).ToList();

                return Json(data_all, JsonRequestBehavior.AllowGet);
            }

            else
            {
                return RedirectToAction("WSP_GWM_HOME", "WspNew");
            }
        }

        [HttpPost]
        public ActionResult delete_oth(string data)
        {
            if (Session["userid"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<dynamic>(data);

                    int id = Convert.ToInt32(result["IDD"]);

                    var DEtails = ABE.obj_abhy_waterdraft_other.Where(x => x.id == id).ToList();

                    ABE.Entry(DEtails[0]).State = EntityState.Deleted;
                    ABE.SaveChanges();

                    return Json("Deleted successfully", JsonRequestBehavior.AllowGet);
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
        public ActionResult Fetch_other_id(string data)
        {
            if (Session["UserId"] != null)
            {
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<dynamic>(data);

                int id = Convert.ToInt32(result["IDD"]);

                var data_all = ABE.obj_abhy_waterdraft_other.
                    Where(n => n.id == id).ToList();

                return Json(data_all, JsonRequestBehavior.AllowGet);
            }

            else
            {
                return RedirectToAction("WSP_GWM_HOME", "WspNew");
            }
        }


        [HttpPost]
        public ActionResult Other_update_(string data)
        {
            if (Session["userid"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<dynamic>(data);


                    int IDD = Convert.ToInt32(result["IDD"]);

                    //abhy_waterdraft_industry obj = new abhy_waterdraft_industry();

                    var DEtails = ABE.obj_abhy_waterdraft_other.Where(x => x.id == IDD).ToList();

                    DEtails[0].use = result["use"];
                    DEtails[0].daily_req = result["daily_req"];
                    DEtails[0].annual_req = result["annual_req"];
                    DEtails[0].no_of_days_use = result["no_of_days_use"];
                    DEtails[0].demand_met_surface_water = result["demand_met_surface_water"];
                    DEtails[0].demand_met_ground_water = result["demand_met_ground_water"];
                    DEtails[0].oth_grd_water = result["oth_grd_water"];
                    DEtails[0].oth_sur_water = result["oth_sur_water"];


                    ABE.Entry(DEtails[0]).State = EntityState.Modified;
                    ABE.SaveChanges();

                    return Json("Updated sucessfully", JsonRequestBehavior.AllowGet);

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
        public ActionResult WaterutilizationInfo_Details()
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
                    //var Month = Session["month"].ToString();

                    double total_surface = 0;
                    double total_ground = 0;
                    
                    var drink_dom = ABE.obj_abhy_uti_waterdraft_domestic_new.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.year == year).ToList();
                    if (drink_dom.Count > 0)
                    {
                        if (drink_dom[0].water_dem_hum != "")
                        {
                            total_surface += Convert.ToDouble(drink_dom[0].water_dem_hum);
                        }
                        if (drink_dom[0].water_dem_liv != "")
                        {
                            total_surface += Convert.ToDouble(drink_dom[0].water_dem_liv);
                        }
                        if (drink_dom[0].water_deman_hum != "")
                        {
                            total_ground += Convert.ToDouble(drink_dom[0].water_deman_hum);
                        }
                        if (drink_dom[0].water_deman_liv != "")
                        {
                            total_ground += Convert.ToDouble(drink_dom[0].water_deman_liv);
                        }
                    }

                    var irrigation = ABE.obj_abhy_waterdraft_irrigation_meta.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.data_year == year).ToList();
                    if (irrigation.Count > 0)
                    {
                        if (irrigation[0].uti_ground_water != "")
                        {
                            total_ground += Convert.ToDouble(irrigation[0].uti_ground_water);
                        }
                        if (irrigation[0].uti_surface_water != "")
                        {
                            total_surface += Convert.ToDouble(irrigation[0].uti_surface_water);
                        }
                    }

                    var industry = ABE.obj_abhy_waterdraft_industry.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == year).ToList();
                    if (industry.Count > 0)
                    {
                        for (int i = 0; i < industry.Count; i++)
                        {
                            if (industry[i].indus_grd_water != "")
                            {
                                total_ground += Convert.ToDouble(industry[i].indus_grd_water);
                            }
                            if (industry[i].indus_sur_water != "")
                            {
                                total_surface += Convert.ToDouble(industry[i].indus_sur_water);
                            }
                        }
                    }

                    var other_details = ABE.obj_abhy_waterdraft_other.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == year).ToList();
                    if (other_details.Count > 0)
                    {
                        for (int i = 0; i < other_details.Count; i++)
                        {
                            if (other_details[i].oth_grd_water != "")
                            {
                                total_ground += Convert.ToDouble(other_details[i].oth_grd_water);
                            }
                            if (other_details[i].oth_sur_water != "")
                            {
                                total_surface += Convert.ToDouble(other_details[i].oth_sur_water);
                            }
                        }
                    }

                    total_surface = Math.Round(total_surface, 2);
                    total_ground = Math.Round(total_ground, 2);

                    return Json(total_surface + "," + total_ground, JsonRequestBehavior.AllowGet);
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
        public ActionResult Get_industry_ground_surface()
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
                    //var month = Session["month"].ToString();

                    double total_surface = 0;
                    double total_ground = 0;


                    var industry = ABE.obj_abhy_waterdraft_industry.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == year).ToList();
                    if (industry.Count > 0)
                    {
                        for (int i = 0; i < industry.Count; i++)
                        {
                            if (industry[i].indus_grd_water != "")
                            {
                                total_ground += Convert.ToDouble(industry[i].indus_grd_water);
                            }
                            if (industry[i].indus_sur_water != "")
                            {
                                total_surface += Convert.ToDouble(industry[i].indus_sur_water);
                            }
                        }
                    }

                    total_surface = Math.Round(total_surface, 2);
                    total_ground = Math.Round(total_ground, 2);

                    return Json(total_surface + "," + total_ground, JsonRequestBehavior.AllowGet);
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
        public ActionResult Get_other_ground_surface()
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
                    //var month = Session["month"].ToString();
                    double total_surface = 0;
                    double total_ground = 0;


                    var other_details = ABE.obj_abhy_waterdraft_other.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == year).ToList();
                    if (other_details.Count > 0)
                    {
                        for (int i = 0; i < other_details.Count; i++)
                        {
                            if (other_details[i].oth_grd_water != "")
                            {
                                total_ground += Convert.ToDouble(other_details[i].oth_grd_water);
                            }
                            if (other_details[i].oth_sur_water != "")
                            {
                                total_surface += Convert.ToDouble(other_details[i].oth_sur_water);
                            }
                        }
                    }

                    total_surface = Math.Round(total_surface, 4);
                    total_ground = Math.Round(total_ground, 4);

                    return Json(total_surface + "," + total_ground, JsonRequestBehavior.AllowGet);
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
    }
}