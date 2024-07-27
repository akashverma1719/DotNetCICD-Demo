using AbhyProject.Classes;
using AbhyProject.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Globalization;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;

namespace AbhyProject.Controllers
{
    public class SupplySideController : Controller
    {
        // GET: SupplySide
        AbhyEntity ABE = new AbhyEntity();
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult SupplySide_AR_Pointer23()
        {
            return View();
        }
        public ActionResult SupplySide_WC_Pointer23()
        {
            return View();
        }
        public ActionResult SupplySide_AR_Pointerup()
        {
            return View();
        }
        public ActionResult SupplySide_WC_Pointerup()
        {
            return View();
        }

        // Table is updated for supplyside24 same in 23-24 and other 
        public ActionResult SupplySide_AR_Pointer(int id)
        {
            //var Details = ABE.obj_abhy_artificial_recharge_st_data_24.Where(x => x.id == id).FirstOrDefault();
            var Details = ABE.obj_abhy_artificial_recharge_st_data.Where(x => x.id == id).FirstOrDefault();
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

        public ActionResult SupplySide_WC_Pointer(int id)
        {
            var Details = ABE.obj_abhy_water_conservation_st_data.Where(x => x.id == id).FirstOrDefault();
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
        //
        public ActionResult SupplySide_AR_Pointer23(int id)
        {
            var Details = ABE.obj_abhy_artificial_recharge_st_data.Where(x => x.id == id).FirstOrDefault();
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

        public ActionResult SupplySide_WC_Pointer23(int id)
        {
            var Details = ABE.obj_abhy_water_conservation_st_data.Where(x => x.id == id).FirstOrDefault();
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

        //

        public ActionResult SupplySide_AR_Pointerup(int id)
        {
            var Details = ABE.obj_abhy_artificial_recharge_st_data_23.Where(x => x.id == id).FirstOrDefault();
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

        public ActionResult SupplySide_WC_Pointerup(int id)
        {
            var Details = ABE.obj_abhy_water_conservation_st_data_23.Where(x => x.id == id).FirstOrDefault();
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



        //
        [HttpPost]
        public ActionResult Save_Data_AR(string State, string District, string Block, string Gp, string village_name, string location_detail, string type_of_ar, string latitude, string longitude, string work_proposed, string storage_capacity
  , string annual_filling_no, string recharge, string annual_gw_recharge, string fund_resource, string estimated_cost, string fund_avail_convergence, string gap_funding_atal
            , string financial_year, string department_name, string scheme_name, string other_scheme)
        {
            try
            {
                DateTime now = DateTime.Now;
                int MonthNumber = now.Month;

                // Get the name of the month
                string monthName = CultureInfo.CurrentCulture.DateTimeFormat.GetMonthName(MonthNumber);
                //ABE.obj_abhy_water_level_monitoring_insert
                var month = monthName;
                var year = Session["year"].ToString();

                var checkData = ABE.obj_abhy_artificial_recharge_st_data.Where(x => x.state == State && x.district == District && x.block == Block && x.gp == Gp
                && x.year == year && x.latitude == latitude && x.longitude == longitude).ToList();
                if (checkData.Count != 0)
                {
                    return Json("Data already entered for that Lat, Long", JsonRequestBehavior.AllowGet);
                }
                var Data = new abhy_artificial_recharge_st_data();
                Data.state = State;
                Data.district = District;
                Data.block = Block;
                Data.gp = Gp;
                Data.village_name = village_name;
                Data.location_detail = location_detail;
                Data.type_of_ar = type_of_ar;
                Data.latitude = latitude;
                Data.longitude = longitude;
                Data.work_proposed = work_proposed;
                Data.storage_capacity = storage_capacity;
                Data.annual_filling_no = annual_filling_no;
                Data.recharge = recharge;
                Data.annual_gw_recharge = annual_gw_recharge;
                Data.financial_year = financial_year;
                Data.department_name = department_name;
                Data.scheme_name = scheme_name;
                Data.other_scheme = other_scheme;
                Data.estimated_cost = estimated_cost;
                Data.fund_avail_convergence = fund_avail_convergence;
                Data.gap_funding_atal = gap_funding_atal;

                Data.year = year;
                Data.month = month;
                Data.month_ordery_by = Get_Month_Number(month);
                //Data.id = 0;            
                ABE.obj_abhy_artificial_recharge_st_data.Add(Data);
                ABE.SaveChanges();

                return Json("Data Inserted", JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            { return Json("Error", JsonRequestBehavior.AllowGet); }
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
        public ActionResult Update_Data_AR(string State, string District, string Block, string Gp, string village_name, string location_detail, string type_of_ar, string latitude, string longitude, string work_proposed, string storage_capacity
, string annual_filling_no, string recharge, string annual_gw_recharge, string fund_resource, string estimated_cost, string fund_avail_convergence, string gap_funding_atal, string IDD_AR,
            string financial_year, string department_name, string scheme_name, string other_scheme)
        {
            try
            {
                int IDD = Convert.ToInt32(IDD_AR);


                var Data = ABE.obj_abhy_artificial_recharge_st_data.Where(x => x.id == IDD).ToList();
                //var checkData = Data.Where(x => x.latitude == latitude && x.longitude == longitude).ToList();
                //if (checkData.Count != 0)
                //{
                //    return Json("Data already entered for that Lat, Long", JsonRequestBehavior.AllowGet);
                //}
                if (Data.Count > 0)
                {
                    Data[0].state = State;
                    Data[0].district = District;
                    Data[0].block = Block;
                    Data[0].gp = Gp;
                    Data[0].village_name = village_name;
                    Data[0].location_detail = location_detail;
                    Data[0].type_of_ar = type_of_ar;
                    Data[0].latitude = latitude;
                    Data[0].longitude = longitude;
                    Data[0].work_proposed = work_proposed;
                    Data[0].storage_capacity = storage_capacity;
                    Data[0].annual_filling_no = annual_filling_no;
                    Data[0].recharge = recharge;
                    Data[0].annual_gw_recharge = annual_gw_recharge;
                    Data[0].estimated_cost = estimated_cost;
                    Data[0].fund_avail_convergence = fund_avail_convergence;
                    Data[0].gap_funding_atal = gap_funding_atal;
                    Data[0].financial_year = financial_year;
                    Data[0].department_name = department_name;
                    Data[0].scheme_name = scheme_name;
                    Data[0].other_scheme = other_scheme;
                    //Data.id = 0;
                    ABE.Entry(Data[0]).State = EntityState.Modified;
                    ABE.SaveChanges();
                }
                return Json("Data Updated", JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            { return Json("Error", JsonRequestBehavior.AllowGet); }
        }

        [HttpPost]
        public ActionResult Save_Data_WR(string State, string District, string Block, string Gp, string village_name, string location_detail, string type_of_wr, string latitude, string longitude, string work_proposed, string storage_capacity
, string annual_filling_no, string effective_storage, string estimated_cost, string fund_avail_convergence, string gap_funding_atal,
            string financial_year, string department_name, string scheme_name, string other_scheme)
        {
            try
            {
                DateTime now = DateTime.Now;
                int MonthNumber = now.Month;

                // Get the name of the month
                string monthName = CultureInfo.CurrentCulture.DateTimeFormat.GetMonthName(MonthNumber);
                //ABE.obj_abhy_water_level_monitoring_insert
                var year = Session["year"].ToString();
                var month = monthName;
                var checkData = ABE.obj_abhy_water_conservation_st_data.Where(x => x.state == State && x.district == District && x.block == Block && x.gp == Gp
                && x.year == year && x.latitude == latitude && x.longitude == longitude).ToList();
                if (checkData.Count != 0)
                {
                    return Json("Data already entered for that Lat, Long", JsonRequestBehavior.AllowGet);
                }
                var Data = new abhy_water_conservation_st_data();
                Data.state = State;
                Data.district = District;
                Data.block = Block;
                Data.gp = Gp;
                Data.village_name = village_name;
                Data.location_detail = location_detail;
                Data.type_of_wr = type_of_wr;
                Data.latitude = latitude;
                Data.longitude = longitude;
                Data.work_proposed = work_proposed;
                Data.storage_capacity = storage_capacity;
                Data.annual_filling_no = annual_filling_no;
                Data.effective_storage = effective_storage;
                Data.estimated_cost = estimated_cost;
                Data.fund_avail_convergence = fund_avail_convergence;
                Data.year = year;
                Data.month = month;
                Data.month_ordery_by = Get_Month_Number(month);
                Data.gap_funding_atal = gap_funding_atal;
                Data.financial_year = financial_year;
                Data.department_name = department_name;
                Data.scheme_name = scheme_name;
                Data.other_scheme = other_scheme;
                //Data.id = 0;            
                ABE.obj_abhy_water_conservation_st_data.Add(Data);
                ABE.SaveChanges();

                return Json("Data Inserted", JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            { return Json("Error", JsonRequestBehavior.AllowGet); }
        }
        [HttpPost]
        public ActionResult Update_Data_WR(string State, string District, string Block, string Gp, string village_name, string location_detail, string type_of_wr, string latitude, string longitude, string work_proposed, string storage_capacity
, string annual_filling_no, string effective_storage, string estimated_cost, string fund_avail_convergence, string gap_funding_atal, string IDD_WR,
            string financial_year, string department_name, string scheme_name, string other_scheme)
        {
            try
            {
                //ABE.obj_abhy_water_level_monitoring_insert
                int IDD = Convert.ToInt32(IDD_WR);
                var Data = ABE.obj_abhy_water_conservation_st_data.Where(x => x.id == IDD).ToList();
                //var checkData = Data.Where(x => x.latitude == latitude && x.longitude == longitude).ToList();
                //if (checkData.Count != 0)
                //{
                //    return Json("Data already entered for that Lat, Long", JsonRequestBehavior.AllowGet);
                //}
                if (Data.Count > 0)
                {
                    Data[0].state = State;
                    Data[0].district = District;
                    Data[0].block = Block;
                    Data[0].gp = Gp;
                    Data[0].village_name = village_name;
                    Data[0].location_detail = location_detail;
                    Data[0].type_of_wr = type_of_wr;
                    Data[0].latitude = latitude;
                    Data[0].longitude = longitude;
                    Data[0].work_proposed = work_proposed;
                    Data[0].storage_capacity = storage_capacity;
                    Data[0].annual_filling_no = annual_filling_no;
                    Data[0].effective_storage = effective_storage;
                    Data[0].estimated_cost = estimated_cost;
                    Data[0].fund_avail_convergence = fund_avail_convergence;
                    Data[0].gap_funding_atal = gap_funding_atal;
                    Data[0].financial_year = financial_year;
                    Data[0].department_name = department_name;
                    Data[0].scheme_name = scheme_name;
                    Data[0].other_scheme = other_scheme;
                    //Data.id = 0;            
                    ABE.Entry(Data[0]).State = EntityState.Modified;
                    ABE.SaveChanges();
                }
                return Json("Data Updated", JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            { return Json("Error", JsonRequestBehavior.AllowGet); }
        }

        [HttpPost]
        public ActionResult Get_Lists_AR()
        {
            var state = Session["gstate"].ToString();
            var dist = Session["gdist"].ToString();
            var block = Session["gblock"].ToString();
            var gram = Session["ggram"].ToString();
            var year = Session["year"].ToString();
            //var month = Session["month"].ToString();

            var Data = ABE.obj_abhy_artificial_recharge_st_data.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram && x.year == year).ToList();
            return Json(Data, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult Get_Lists_AR_by_id(string id)
        {
            int id_check = Convert.ToInt32(id);
            var Data = ABE.obj_abhy_artificial_recharge_st_data.Where(x => x.id == id_check).ToList();
            return Json(Data, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult Delete_AR_by_id(string id)
        {
            int id_check = Convert.ToInt32(id);
            var Data = ABE.obj_abhy_artificial_recharge_st_data.Where(x => x.id == id_check).ToList();
            ABE.Entry(Data[0]).State = EntityState.Deleted;
            ABE.SaveChanges();
            return Json("Data Deleted", JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult Get_Lists_WR()
        {
            var state = Session["gstate"].ToString();
            var dist = Session["gdist"].ToString();
            var block = Session["gblock"].ToString();
            var gram = Session["ggram"].ToString();
            var year = Session["year"].ToString();
            //var month = Session["month"].ToString();
            var Data = ABE.obj_abhy_water_conservation_st_data.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram && x.year == year).ToList();
            return Json(Data, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult Get_Lists_WR_by_id(string id)
        {
            int id_check = Convert.ToInt32(id);
            var Data = ABE.obj_abhy_water_conservation_st_data.Where(x => x.id == id_check).ToList();
            return Json(Data, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult Delete_WR_by_id(string id)
        {
            int id_check = Convert.ToInt32(id);
            var Data = ABE.obj_abhy_water_conservation_st_data.Where(x => x.id == id_check).ToList();
            ABE.Entry(Data[0]).State = EntityState.Deleted;
            ABE.SaveChanges();
            return Json("Data Deleted", JsonRequestBehavior.AllowGet);
        }
        public ActionResult Summary_supply_demand()
        {
            return View();
        }


        //[HttpPost]
        //public string Get_supply_summary()
        //{
        //    var State = Session["gstate"].ToString();
        //    var Dist = Session["gdist"].ToString();

        //    var Block = Session["gblock"].ToString();
        //    var Gram = Session["ggram"].ToString();
        //    var year = Session["year"].ToString();
        //    var month = Session["month"].ToString();

        //    var ArData = ABE.obj_abhy_artificial_recharge_st_data.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.year == year && x.month == month).ToList();
        //    var wrData = ABE.obj_abhy_water_conservation_st_data.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.year == year && x.month == month).ToList();

        //    //           var ArData_grp = ArData.GroupBy(x => x.type_of_ar);

        //    DataTable dt = new DataTable();
        //    dt.Columns.Add("name_of_Structurea");
        //    dt.Columns.Add("number_of_structure");
        //    dt.Columns.Add("total_fund_req");
        //    dt.Columns.Add("funding_Source_name");
        //    dt.Columns.Add("funding_conve");
        //    dt.Columns.Add("gap_fun_atal");
        //    dt.Columns.Add("annual_gw_recharge");
        //    if (ArData.Count > 0)
        //    {
        //        while (ArData.Count > 0)
        //        {
        //            double total_fund_req = 0;
        //            double funding_conve = 0;
        //            double gap_fun_atal = 0;
        //            //string funding_Source_name = "";
        //            int dt_count = dt.Rows.Count;
        //            string st_name = ArData[0].type_of_ar.ToString();
        //            string work_proposed = ArData[0].work_proposed.ToString();
        //            DataRow dr = dt.NewRow();
        //            dt.Rows.InsertAt(dt.NewRow(), dt_count);
        //            var Data1 = ArData.Where(x => x.type_of_ar == st_name && x.work_proposed == work_proposed).ToList();
        //            dt.Rows[dt_count]["name_of_Structurea"] = st_name + "(" + work_proposed + ")";
        //            dt.Rows[dt_count]["number_of_structure"] = Data1.Count;
        //            for (int k = 0; k < Data1.Count; k++)
        //            {
        //                total_fund_req += Convert.ToDouble(Data1[k].estimated_cost);
        //                funding_conve += Convert.ToDouble(Data1[k].fund_avail_convergence);
        //                gap_fun_atal += Convert.ToDouble(Data1[k].gap_funding_atal);
        //                //funding_Source_name += Data1[k].scheme_name + ",";
        //                ArData.RemoveAll(x => x.id == Data1[k].id);
        //            }
        //            //funding_Source_name = funding_Source_name.TrimEnd(',');
        //            //dt.Rows[dt_count]["funding_Source_name"] = funding_Source_name;
        //            dt.Rows[dt_count]["total_fund_req"] = total_fund_req;
        //            dt.Rows[dt_count]["funding_conve"] = funding_conve;
        //            dt.Rows[dt_count]["gap_fun_atal"] = gap_fun_atal;
        //            ArData.ToList();
        //        }

        //    }
        //    //DataTable dt_wr = new DataTable();
        //    //dt_wr.Columns.Add("name_of_Structurea");
        //    //dt_wr.Columns.Add("number_of_structure");
        //    //dt_wr.Columns.Add("total_fund_req");
        //    ////dt_wr.Columns.Add("funding_Source_name");
        //    //dt_wr.Columns.Add("funding_conve");
        //    //dt_wr.Columns.Add("gap_fun_atal");
        //    //if (wrData.Count > 0)
        //    //{
        //    //    while (wrData.Count > 0)
        //    //    {
        //    //        double total_fund_req = 0;
        //    //        double funding_conve = 0;
        //    //        double gap_fun_atal = 0;
        //    //        //string funding_Source_name = "";
        //    //        int dt_count = dt_wr.Rows.Count;
        //    //        string st_name = wrData[0].type_of_wr.ToString();
        //    //        string work_proposed = wrData[0].work_proposed.ToString();
        //    //        DataRow dr = dt_wr.NewRow();
        //    //        dt_wr.Rows.InsertAt(dt_wr.NewRow(), dt_count);
        //    //        var Data1 = wrData.Where(x => x.type_of_wr == st_name && x.work_proposed == work_proposed).ToList();
        //    //        dt_wr.Rows[dt_count]["name_of_Structurea"] = st_name + "(" + work_proposed + ")";
        //    //        dt_wr.Rows[dt_count]["number_of_structure"] = Data1.Count;
        //    //        for (int k = 0; k < Data1.Count; k++)
        //    //        {
        //    //            total_fund_req += Convert.ToDouble(Data1[k].estimated_cost);
        //    //            funding_conve += Convert.ToDouble(Data1[k].fund_avail_convergence);
        //    //            gap_fun_atal += Convert.ToDouble(Data1[k].gap_funding_atal);
        //    //            //funding_Source_name += Data1[k].scheme_name + ",";
        //    //            wrData.RemoveAll(x => x.id == Data1[k].id);
        //    //        }
        //    //        //funding_Source_name = funding_Source_name.TrimEnd(',');
        //    //        //dt_wr.Rows[dt_count]["funding_Source_name"] = funding_Source_name;
        //    //        dt_wr.Rows[dt_count]["total_fund_req"] = total_fund_req;
        //    //        dt_wr.Rows[dt_count]["funding_conve"] = funding_conve;
        //    //        dt_wr.Rows[dt_count]["gap_fun_atal"] = gap_fun_atal;
        //    //        wrData.ToList();
        //    //    }

        //    //}

        //    //dt.Merge(dt_wr);
        //    //dt.AcceptChanges();
        //    string JSONresult = JsonConvert.SerializeObject(dt);
        //    return JSONresult;
        //}


        //[HttpPost]
        //public string Get_supply_summary_wr()
        //{
        //    var State = Session["gstate"].ToString();
        //    var Dist = Session["gdist"].ToString();

        //    var Block = Session["gblock"].ToString();
        //    var Gram = Session["ggram"].ToString();
        //    var year = Session["year"].ToString();
        //    var month = Session["month"].ToString();

        //    //var ArData = ABE.obj_abhy_artificial_recharge_st_data.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.year == year && x.month == month).ToList();
        //    var wrData = ABE.obj_abhy_water_conservation_st_data.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.year == year && x.month == month).ToList();

        //    //           var ArData_grp = ArData.GroupBy(x => x.type_of_ar);


        //    DataTable dt_wr = new DataTable();
        //    dt_wr.Columns.Add("name_of_Structurea");
        //    dt_wr.Columns.Add("number_of_structure");
        //    dt_wr.Columns.Add("total_fund_req");
        //    //dt_wr.Columns.Add("funding_Source_name");
        //    dt_wr.Columns.Add("funding_conve");
        //    dt_wr.Columns.Add("gap_fun_atal");
        //    if (wrData.Count > 0)
        //    {
        //        while (wrData.Count > 0)
        //        {
        //            double total_fund_req = 0;
        //            double funding_conve = 0;
        //            double gap_fun_atal = 0;
        //            //string funding_Source_name = "";
        //            int dt_count = dt_wr.Rows.Count;
        //            string st_name = wrData[0].type_of_wr.ToString();
        //            string work_proposed = wrData[0].work_proposed.ToString();
        //            DataRow dr = dt_wr.NewRow();
        //            dt_wr.Rows.InsertAt(dt_wr.NewRow(), dt_count);
        //            var Data1 = wrData.Where(x => x.type_of_wr == st_name && x.work_proposed == work_proposed).ToList();
        //            dt_wr.Rows[dt_count]["name_of_Structurea"] = st_name + "(" + work_proposed + ")";
        //            dt_wr.Rows[dt_count]["number_of_structure"] = Data1.Count;
        //            for (int k = 0; k < Data1.Count; k++)
        //            {
        //                total_fund_req += Convert.ToDouble(Data1[k].estimated_cost);
        //                funding_conve += Convert.ToDouble(Data1[k].fund_avail_convergence);
        //                gap_fun_atal += Convert.ToDouble(Data1[k].gap_funding_atal);
        //                //funding_Source_name += Data1[k].scheme_name + ",";
        //                wrData.RemoveAll(x => x.id == Data1[k].id);
        //            }
        //            //funding_Source_name = funding_Source_name.TrimEnd(',');
        //            //dt_wr.Rows[dt_count]["funding_Source_name"] = funding_Source_name;
        //            dt_wr.Rows[dt_count]["total_fund_req"] = total_fund_req;
        //            dt_wr.Rows[dt_count]["funding_conve"] = funding_conve;
        //            dt_wr.Rows[dt_count]["gap_fun_atal"] = gap_fun_atal;
        //            wrData.ToList();
        //        }

        //    }

        //    //dt.Merge(dt_wr);
        //    //dt.AcceptChanges();
        //    string JSONresult = JsonConvert.SerializeObject(dt_wr);
        //    return JSONresult;
        //}

        [HttpPost]
        public ActionResult Get_demand_summary_sp()
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
                    DemandSummary Data = new DemandSummary();
                    abhy_wsp_demand_meta obj = new abhy_wsp_demand_meta();
                    var DEtails = ABE.obj_abhy_wsp_demand_meta.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram && x.data_year == year).FirstOrDefault();
                    if (DEtails != null)
                    {
                        var ID = DEtails.id;
                        var ALLDataSP = ABE.obj_abhy_wsp_demand_sprinkler.Where(x => x.meta_id == ID).ToList();
                        if (ALLDataSP.Count != 0)
                        {
                            double NetWaterDemandSP = ALLDataSP.Sum(x => Convert.ToDouble(x.net_water_demand));
                            double TotalWaterDemandSP = ALLDataSP.Sum(x => Convert.ToDouble(x.water_demand));
                            double ReductionWaterDemandSP = ALLDataSP.Sum(x => Convert.ToDouble(x.reduction_gw));
                            double ProposedAreaSP = ALLDataSP.Sum(x => Convert.ToDouble(x.area_proposed));
                            double AreaUnderMeasuresSP = ALLDataSP.Sum(x => Convert.ToDouble(x.area_irrigation));
                            var FundData = ABE.obj_abhy_wsp_demand_fund_details.Where(x => x.meta_id == ID && x.fund_for == "Sprinkler").ToList();
                            if (FundData.Count != 0)
                            {
                                double TotalCost = FundData.Sum(x => Convert.ToDouble(x.approx_est_cost));
                                Data.ApproxCostSP = TotalCost;
                            }
                            else
                            {
                                Data.ApproxCostSP = 0.00;
                            }

                            Data.TotalWaterDemandSP = TotalWaterDemandSP;
                            Data.ReductionWaterDemandSP = ReductionWaterDemandSP;
                            Data.NetWaterDemandSP = NetWaterDemandSP;
                            Data.ProposedAreaSP = ProposedAreaSP;
                            Data.AreaUnderMeasuresSP = AreaUnderMeasuresSP;
                        }
                        else
                        {
                            Data.TotalWaterDemandSP = 0.00;
                            Data.ReductionWaterDemandSP = 0.00;
                            Data.NetWaterDemandSP = 0.00;
                            Data.ProposedAreaSP = 0.00;
                            Data.AreaUnderMeasuresSP = 0.00;
                        }
                        var ALLDataDrip = ABE.obj_abhy_wsp_demand_drip.Where(x => x.meta_id == ID).ToList();
                        if (ALLDataDrip.Count != 0)
                        {
                            double NetWaterDemandDrip = ALLDataDrip.Sum(x => Convert.ToDouble(x.net_water_demand));
                            double TotalWaterDemandDrip = ALLDataDrip.Sum(x => Convert.ToDouble(x.water_demand));
                            double ReductionWaterDemandDrip = ALLDataDrip.Sum(x => Convert.ToDouble(x.reduction_gw));
                            double ProposedAreaDrip = ALLDataDrip.Sum(x => Convert.ToDouble(x.area_proposed));
                            double AreaUnderMeasuresDrip = ALLDataDrip.Sum(x => Convert.ToDouble(x.area_irrigation));
                            var FundData = ABE.obj_abhy_wsp_demand_fund_details.Where(x => x.meta_id == ID && x.fund_for == "Drip").ToList();
                            if (FundData.Count != 0)
                            {
                                double TotalCost = FundData.Sum(x => Convert.ToDouble(x.approx_est_cost));
                                Data.ApproxCostDrip = TotalCost;
                            }
                            else
                            {
                                Data.ApproxCostDrip = 0.00;
                            }
                            Data.NetWaterDemandDrip = NetWaterDemandDrip;
                            Data.TotalWaterDemandDrip = TotalWaterDemandDrip;
                            Data.ReductionWaterDemandDrip = ReductionWaterDemandDrip;
                            Data.ProposedAreaDrip = ProposedAreaDrip;
                            Data.AreaUnderMeasuresDrip = AreaUnderMeasuresDrip;
                        }
                        else
                        {
                            Data.NetWaterDemandDrip = 0.00;
                            Data.TotalWaterDemandDrip = 0.00;
                            Data.ReductionWaterDemandDrip = 0.00;
                            Data.ProposedAreaDrip = 0.00;
                            Data.AreaUnderMeasuresDrip = 0.00;
                        }
                        var ALLDataPipe = ABE.obj_abhy_wsp_demand_pipeline.Where(x => x.meta_id == ID).ToList();
                        if (ALLDataPipe.Count != 0)
                        {
                            double NetWaterDemandPipe = ALLDataPipe.Sum(x => Convert.ToDouble(x.net_water_demand));
                            double TotalWaterDemandPipe = ALLDataPipe.Sum(x => Convert.ToDouble(x.water_demand));
                            double ReductionWaterDemandPipe = ALLDataPipe.Sum(x => Convert.ToDouble(x.reduction_gw));
                            double ProposedAreaPipe = ALLDataPipe.Sum(x => Convert.ToDouble(x.area_proposed));
                            double AreaUnderMeasuresPipe = ALLDataPipe.Sum(x => Convert.ToDouble(x.area_irrigation));
                            var FundData = ABE.obj_abhy_wsp_demand_fund_details.Where(x => x.meta_id == ID && x.fund_for == "UG Pipelines").ToList();
                            if (FundData.Count != 0)
                            {
                                double TotalCost = FundData.Sum(x => Convert.ToDouble(x.approx_est_cost));
                                Data.ApproxCostPipe = TotalCost;
                            }
                            else
                            {
                                Data.ApproxCostPipe = 0.00;
                            }
                            Data.NetWaterDemandPipe = NetWaterDemandPipe;
                            Data.TotalWaterDemandPipe = TotalWaterDemandPipe;
                            Data.ReductionWaterDemandPipe = ReductionWaterDemandPipe;
                            Data.ProposedAreaPipe = ProposedAreaPipe;
                            Data.AreaUnderMeasuresPipe = AreaUnderMeasuresPipe;
                        }
                        else
                        {
                            Data.NetWaterDemandPipe = 0.00;
                            Data.TotalWaterDemandPipe = 0.00;
                            Data.ReductionWaterDemandPipe = 0.00;
                            Data.ProposedAreaPipe = 0.00;
                            Data.AreaUnderMeasuresPipe = 0.00;
                        }
                        var ALLDataCrop = ABE.obj_abhy_wsp_demand_change_crop.Where(x => x.meta_id == ID).ToList();
                        if (ALLDataCrop.Count != 0)
                        {
                            
                            var GetListOriginal = ALLDataCrop.Distinct().GroupBy(x => new { x.season_type}).ToList();
                            
                            double TotalWaterDemandCrop = 0;
                            if (GetListOriginal.Count != 0)
                            {
                                foreach (var item in GetListOriginal.AsEnumerable())
                                {
                                    var OriginalCrop = item.First();
                                    TotalWaterDemandCrop += Convert.ToDouble(OriginalCrop.original_wt_dmd);
                                }
                            }
                            double NetWaterDemandCrop = ALLDataCrop.Sum(x => Convert.ToDouble(x.change_water_demand));
                            double ReductionWaterDemandCrop = TotalWaterDemandCrop - NetWaterDemandCrop;
                            
                            double ProposedAreaCrop = ALLDataCrop.Sum(x => Convert.ToDouble(x.area_ch));
                            //double AreaUnderMeasuresCrop = ALLDataCrop.Sum(x => Convert.ToDouble(x.area_irrigation));
                            var FundData = ABE.obj_abhy_wsp_demand_fund_details.Where(x => x.meta_id == ID && x.fund_for == "Crop Diversification").ToList();
                            if (FundData.Count != 0)
                            {
                                double TotalCost = FundData.Sum(x => Convert.ToDouble(x.approx_est_cost));
                                Data.ApproxCostCrop = TotalCost;
                            }
                            else
                            {
                                Data.ApproxCostCrop = 0.00;
                            }
                            Data.NetWaterDemandCrop = NetWaterDemandCrop;
                            Data.TotalWaterDemandCrop = TotalWaterDemandCrop;
                            Data.ReductionWaterDemandCrop = ReductionWaterDemandCrop;
                            Data.ProposedAreaCrop = ProposedAreaCrop;
                            Data.AreaUnderMeasuresCrop = 0.00;
                        }
                        else
                        {
                            Data.NetWaterDemandCrop = 0.00;
                            Data.TotalWaterDemandCrop = 0.00;
                            Data.ReductionWaterDemandCrop = 0.00;
                            Data.ProposedAreaCrop = 0.00;
                            Data.AreaUnderMeasuresCrop = 0.00;
                        }

                        var ALLDataAny = ABE.obj_abhy_wsp_demand_anyother.Where(x => x.meta_id == ID).ToList();
                        if (ALLDataAny.Count != 0)
                        {
                            double NetWaterDemandAny = ALLDataAny.Sum(x => Convert.ToDouble(x.gross_water));
                            double TotalWaterDemandAny = ALLDataAny.Sum(x => Convert.ToDouble(x.water_demand));
                            double ReductionWaterDemandAny = ALLDataAny.Sum(x => Convert.ToDouble(x.reduction));
                            double ProposedAreaAny = ALLDataAny.Sum(x => Convert.ToDouble(x.area_irrigation));
                            double AreaUnderMeasuresAny = 0;
                            var FundData = ABE.obj_abhy_wsp_demand_fund_details.Where(x => x.meta_id == ID && x.fund_for == "Other Measures").ToList();
                            if (FundData.Count != 0)
                            {
                                double TotalCost = FundData.Sum(x => Convert.ToDouble(x.approx_est_cost));
                                Data.ApproxCostAny = TotalCost;
                            }
                            else
                            {
                                Data.ApproxCostAny = 0.00;
                            }
                            Data.NetWaterDemandAny = NetWaterDemandAny;
                            Data.TotalWaterDemandAny = TotalWaterDemandAny;
                            Data.ReductionWaterDemandAny = ReductionWaterDemandAny;
                            Data.ProposedAreaAny = ProposedAreaAny;
                            Data.AreaUnderMeasuresAny = AreaUnderMeasuresAny;
                        }
                        else
                        {
                            Data.NetWaterDemandAny = 0.00;
                            Data.TotalWaterDemandAny = 0.00;
                            Data.ReductionWaterDemandAny = 0.00;
                            Data.ProposedAreaAny = 0.00;
                            Data.AreaUnderMeasuresAny = 0.00;
                        }
                    }
                    




                    return Json(Data, JsonRequestBehavior.AllowGet);
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
        public ActionResult Get_fund_sp()
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
                    abhy_wsp_demand_meta obj = new abhy_wsp_demand_meta();
                    List<abhy_wsp_demand_fund_details> Data = new List<abhy_wsp_demand_fund_details>();
                    var DEtails = ABE.obj_abhy_wsp_demand_meta.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram && x.data_year == year).FirstOrDefault();
                    if (DEtails != null)
                    {
                        var ID = DEtails.id;
                        Data = ABE.obj_abhy_wsp_demand_fund_details.Where(x => x.meta_id == ID).ToList();
                    }

                    return Json(Data, JsonRequestBehavior.AllowGet);
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
        public ActionResult Get_demand_summary_dp()
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
                    abhy_wsp_demand_meta obj = new abhy_wsp_demand_meta();
                    List<abhy_wsp_demand_drip> Data = new List<abhy_wsp_demand_drip>();
                    var DEtails = ABE.obj_abhy_wsp_demand_meta.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram && x.data_year == year).FirstOrDefault();
                    if (DEtails != null)
                    {
                        var ID = DEtails.id;
                        Data = ABE.obj_abhy_wsp_demand_drip.Where(x => x.meta_id == ID).ToList();
                    }

                    return Json(Data, JsonRequestBehavior.AllowGet);
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
        public ActionResult Get_demand_summary_pipe()
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
                    abhy_wsp_demand_meta obj = new abhy_wsp_demand_meta();
                    List<abhy_wsp_demand_pipeline> Data = new List<abhy_wsp_demand_pipeline>();
                    var DEtails = ABE.obj_abhy_wsp_demand_meta.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram && x.data_year == year).FirstOrDefault();
                    if (DEtails != null)
                    {
                        var ID = DEtails.id;
                        Data = ABE.obj_abhy_wsp_demand_pipeline.Where(x => x.meta_id == ID).ToList();
                    }

                    return Json(Data, JsonRequestBehavior.AllowGet);
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
        public ActionResult Get_demand_change_crop()
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
                    abhy_wsp_demand_meta obj = new abhy_wsp_demand_meta();
                    List<abhy_wsp_demand_change_crop> Data = new List<abhy_wsp_demand_change_crop>();
                    var DEtails = ABE.obj_abhy_wsp_demand_meta.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram && x.data_year == year).FirstOrDefault();
                    if (DEtails != null)
                    {
                        var ID = DEtails.id;
                        Data = ABE.obj_abhy_wsp_demand_change_crop.Where(x => x.meta_id == ID).ToList();
                    }

                    return Json(Data, JsonRequestBehavior.AllowGet);
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
        public string Get_demand_summary_crop()
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
                    abhy_wsp_demand_meta obj = new abhy_wsp_demand_meta();

                    var DEtails = ABE.obj_abhy_waterdraft_irrigation_meta.Where(x => x.state_name == state && x.district_name == dist && x.block_name == block && x.gp_name == gram && x.data_year == year).ToList();

                    if (DEtails.Count > 0)
                    {
                        DataTable dt = new DataTable();
                        dt.Columns.Add("Season_orignal");
                        dt.Columns.Add("crop_category_orignal");
                        dt.Columns.Add("crop_type_orignal");
                        dt.Columns.Add("crop_name_orignal");
                        dt.Columns.Add("area_orignal");
                        dt.Columns.Add("gross_water_orignal");
                        dt.Columns.Add("water_demand_orignal");

                        dt.Columns.Add("Season_change");
                        dt.Columns.Add("crop_category_change");
                        dt.Columns.Add("crop_type_change");
                        dt.Columns.Add("crop_name_change");
                        dt.Columns.Add("area_change");
                        dt.Columns.Add("gross_water_change");
                        dt.Columns.Add("water_demand_change");

                        dt.Columns.Add("reduction_gw");

                        int meta_id_irr = DEtails[0].id;
                        var data1 = ABE.obj_abhy_waterdraft_irrigation_data.Where(x => x.meta_id == meta_id_irr).ToList(); // origanl

                        for (int i = 0; i < data1.Count; i++)
                        {
                            int meta_id_temp = data1[i].id;
                            DataRow dr = dt.NewRow();
                            dt.Rows.InsertAt(dt.NewRow(), i);
                            var data2 = ABE.obj_abhy_wsp_demand_change_crop.Where(x => x.uti_id == meta_id_temp).ToList();//change
                            for (int j = 0; j < data2.Count; j++)
                            {
                                if (data2.Count > 0)
                                {
                                    dt.Rows[i]["Season_orignal"] = data1[i].season_type;
                                    dt.Rows[i]["crop_category_orignal"] = data1[i].crop_category;
                                    dt.Rows[i]["crop_type_orignal"] = data1[i].crop_type;
                                    dt.Rows[i]["crop_name_orignal"] = data1[i].crop_name;
                                    dt.Rows[i]["area_orignal"] = data1[i].area;
                                    dt.Rows[i]["gross_water_orignal"] = data1[i].gross_water;
                                    dt.Rows[i]["water_demand_orignal"] = (Convert.ToDouble(data1[i].area) * Convert.ToDouble(data1[i].gross_water) / 1000).ToString();

                                    dt.Rows[i]["Season_change"] = data2[j].season_type;
                                    dt.Rows[i]["crop_category_change"] = data2[j].crop_category;
                                    dt.Rows[i]["crop_type_change"] = data2[j].crop_type;
                                    dt.Rows[i]["crop_name_change"] = data2[j].crop_name;
                                    dt.Rows[i]["area_change"] = data2[j].area_ch;
                                    dt.Rows[i]["gross_water_change"] = data2[j].water_req;
                                    dt.Rows[i]["water_demand_change"] = (Convert.ToDouble(data2[j].area_ch) * Convert.ToDouble(data2[j].water_req) / 1000).ToString();
                                    dt.Rows[i]["reduction_gw"] = (Convert.ToDouble(dt.Rows[i]["water_demand_orignal"].ToString()) - Convert.ToDouble(dt.Rows[i]["water_demand_change"].ToString())).ToString();
                                }
                                else
                                {
                                    dt.Rows[i]["Season_orignal"] = data1[i].season_type;
                                    dt.Rows[i]["crop_category_orignal"] = data1[i].crop_category;
                                    dt.Rows[i]["crop_type_orignal"] = data1[i].crop_type;
                                    dt.Rows[i]["crop_name_orignal"] = data1[i].crop_name;
                                    dt.Rows[i]["area_orignal"] = data1[i].area;
                                    dt.Rows[i]["gross_water_orignal"] = data1[i].gross_water;
                                    dt.Rows[i]["water_demand_orignal"] = (Convert.ToDouble(data1[0].area) * Convert.ToDouble(data1[0].gross_water) / 1000).ToString();

                                    dt.Rows[i]["Season_change"] = "";
                                    dt.Rows[i]["crop_category_change"] = "";
                                    dt.Rows[i]["crop_type_change"] = "";
                                    dt.Rows[i]["crop_name_change"] = "";
                                    dt.Rows[i]["area_change"] = "";
                                    dt.Rows[i]["gross_water_change"] = "";
                                    dt.Rows[i]["water_demand_change"] = "";
                                    dt.Rows[i]["reduction_gw"] = "";
                                }
                            }
                        }
                        string JSONresult = JsonConvert.SerializeObject(dt);
                        return JSONresult;

                    }
                    else
                    {
                        return "";
                    }

                }
                catch (Exception ex)
                {
                    return "error";
                }
            }
            else
            {
                return "logout";
                //return Json("logout", JsonRequestBehavior.AllowGet);

            }
        }

        [HttpPost]
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


                return Json(Data, JsonRequestBehavior.AllowGet);
            }

            else
            {
                return RedirectToAction("WSP_GWM_HOME", "WspNew");
            }
        }

        [HttpPost]
        public ActionResult Get_demand_summary_anyother()
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
                    abhy_wsp_demand_meta obj = new abhy_wsp_demand_meta();
                    List<abhy_wsp_demand_anyother> Data = new List<abhy_wsp_demand_anyother>();
                    var DEtails = ABE.obj_abhy_wsp_demand_meta.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram && x.data_year == year).FirstOrDefault();
                    if (DEtails != null)
                    {
                        var ID = DEtails.id;
                        Data = ABE.obj_abhy_wsp_demand_anyother.Where(x => x.meta_id == ID).ToList();
                    }



                    return Json(Data, JsonRequestBehavior.AllowGet);
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
        public ActionResult Save_ref_data(string Data)
        {
            if (Session["userid"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_supply_ref_info>(Data);
                    DateTime now = DateTime.Now;
                    int MonthNumber = now.Month;

                    // Get the name of the month
                    string monthName = CultureInfo.CurrentCulture.DateTimeFormat.GetMonthName(MonthNumber);
                    var state = Session["gstate"].ToString();
                    var dist = Session["gdist"].ToString();
                    var block = Session["gblock"].ToString();
                    var gram = Session["ggram"].ToString();
                    var year = Session["year"].ToString();
                    var month = monthName;

                    result.state_name = state;
                    result.district_name = dist;
                    result.block_name = block;
                    result.gp_name = gram;
                    result.year = year;
                    result.month = month;
                    result.month_ordery_by = Get_Month_Number(month);


                    ABE.obj_abhy_supply_ref_info.Add(result);
                    ABE.SaveChanges();

                    return Json("Data Saved", JsonRequestBehavior.AllowGet);
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
        public ActionResult Get_Lists_rf()
        {
            var state = Session["gstate"].ToString();
            var dist = Session["gdist"].ToString();
            var block = Session["gblock"].ToString();
            var gram = Session["ggram"].ToString();
            var year = Session["year"].ToString();
            //var month = Session["month"].ToString();

            var Data = ABE.obj_abhy_supply_ref_info.Where(x => x.state_name == state && x.district_name == dist && x.block_name == block && x.gp_name == gram && x.year == year).ToList();
            return Json(Data, JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public ActionResult Get_Lists_rf_by_id(string id)
        {
            int id_check = Convert.ToInt32(id);
            var Data = ABE.obj_abhy_supply_ref_info.Where(x => x.id == id_check).ToList();
            return Json(Data, JsonRequestBehavior.AllowGet);
        }


        [HttpPost]
        public ActionResult Delete_RF_by_id(string id)
        {
            int id_check = Convert.ToInt32(id);
            var Data = ABE.obj_abhy_supply_ref_info.Where(x => x.id == id_check).ToList();
            ABE.Entry(Data[0]).State = EntityState.Deleted;
            ABE.SaveChanges();
            return Json("Data Deleted", JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult Update_ref_data(string Data)
        {
            if (Session["userid"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_supply_ref_info>(Data);

                    var state = Session["gstate"].ToString();
                    var dist = Session["gdist"].ToString();
                    var block = Session["gblock"].ToString();
                    var gram = Session["ggram"].ToString();
                    int year = Convert.ToInt32(Session["year"].ToString());

                    int id_fetch = result.id;

                    var Data_update = ABE.obj_abhy_supply_ref_info.Where(x => x.id == id_fetch).ToList();

                    Data_update[0].scheme_name = result.scheme_name;
                    Data_update[0].gov_type = result.gov_type;
                    Data_update[0].posibble_fund = result.posibble_fund;
                    Data_update[0].fund_prposed = result.fund_prposed;

                    ABE.Entry(Data_update[0]).State = EntityState.Modified;
                    ABE.SaveChanges();

                    return Json("Data Saved", JsonRequestBehavior.AllowGet);
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
        public ActionResult GetVillageName()
        {
            //List<abhy_baseline_gpdata> ddetails = new List<abhy_baseline_gpdata>();

            var State = Session["gstate"].ToString();
            var Dist = Session["gdist"].ToString();
            var Block = Session["gblock"].ToString();
            var Gram = Session["ggram"].ToString();
            //var Year = Session["year"].ToString();
            //var Month = Session["month"].ToString();
            var ddetails = ABE.obj_abhy_block_gp_area_info.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gram_panchayat_name == Gram).Select(k => k.village_name).FirstOrDefault();

            return Json(ddetails, JsonRequestBehavior.AllowGet);

        }


        [HttpGet]
        public ActionResult SupplySide_Department_Info()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_wsp_supplyside_department_name> ddetails1 = ABE.obj_abhy_wsp_supplyside_department_name.OrderBy(x => x.department_name).ToList();//total list
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
    }
}

//supplyside