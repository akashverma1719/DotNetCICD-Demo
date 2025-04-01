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
using System.Web.UI;
using OfficeOpenXml.FormulaParsing.Excel.Functions.Logical;
using System.Buffers.Text;
using System.Text;
using System.Security.Cryptography;
using Newtonsoft.Json;
using System.Configuration;
using OfficeOpenXml;
using System.Globalization;
using System.Net;
using OfficeOpenXml.FormulaParsing.Excel.Functions.Math;
using System.Web.Hosting;
using Microsoft.Ajax.Utilities;
using System.Diagnostics;
using System.Threading.Tasks;
using System.Web.Razor.Parser.SyntaxTree;

namespace AbhyProject.Controllers
{
    public class mapviewController : Controller
    {
        MAPEntity AJE = new MAPEntity();
        //AtaljalEntity AJE = new AtaljalEntity();
        AbhyEntity ABE = new AbhyEntity();

        // GET: mapview
        public ActionResult Index()
        {



            return View();
        }
        public ActionResult Public_View()
        {
            return View();
        }
        [HttpPost]
        public ActionResult get_gwl(int partition_id)
        {
            try
            {
                int TKID = partition_id;
                var data = AJE.obj_vw_bs_waterlevel_pv_data
                    .Where(x => x.partition_id == TKID)
                    .OrderBy(x => x.gwl_date)
                    .ToList();

                if (data != null && data.Count > 0)
                {
                    return Json(data, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("No Data", JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception ex)
            {

                return Json(new { error = ex.Message }, JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult get_graph_data(int partition_id)
        {

            try
            {
                JavaScriptSerializer js = new JavaScriptSerializer();

                int TKID = Convert.ToInt32(partition_id);
                var Data1 = AJE.obj_vw_bs_waterlevel_pv_data
                 .Where(x => x.partition_id == TKID)
                 .OrderBy(x => x.gwl_date)
                 .ToList();

                if (Data1 != null)
                {
                    return Json(Data1, JsonRequestBehavior.AllowGet);
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


        [HttpPost]
        public ActionResult get_flow(string id)
        {


            try
            {
                JavaScriptSerializer js = new JavaScriptSerializer();

                int TKID = Convert.ToInt32(id);
                var Data1 = AJE.obj_waterflow_data
                 .Where(x => x.wf_meta_id == TKID)
                 .OrderBy(x => x.wf_date_time)
                 .ToList();

                if (Data1 != null)
                {
                    return Json(Data1, JsonRequestBehavior.AllowGet);
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

        [HttpPost]
        public ActionResult get_rainfall(string id)
        {

            try
            {
                JavaScriptSerializer js = new JavaScriptSerializer();

                int TKID = Convert.ToInt32(id);
                var Data1 = AJE.obj_vw_bs_rainfall_meta_data
                .Where(x => x.rf_meta_id == TKID)
                .OrderBy(x => x.rf_date)
                .ToList();

                if (Data1 != null)
                {
                    return Json(Data1, JsonRequestBehavior.AllowGet);
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

        [HttpPost]
        public ActionResult get_wq(int id, string year)
        {
            try
            {
                JavaScriptSerializer js = new JavaScriptSerializer();

                //int TKID = Convert.ToInt32(id);
                var Data1 = AJE.obj_vw_bs_pv_quality_meta_data.Where(x => x.pv_meta_id == id && x.pv_data_year == year).ToList();

                if (Data1 != null && Data1.Any())
                {
                    return Json(Data1, JsonRequestBehavior.AllowGet);
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



        //wqm

        [HttpPost]
        public ActionResult get_wqm(int water_qi_meta_id, int year)
        {
            try
            {
                JavaScriptSerializer js = new JavaScriptSerializer();

                var Data1 = AJE.obj_vw_bs_water_wq_meta_data.Where(x => x.water_qi_meta_id == water_qi_meta_id && x.fyyear == year).ToList();

                if (Data1 != null && Data1.Any())
                {
                    return Json(Data1, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("No Data", JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception Ex)
            {
                // Log the exception (assuming a logging mechanism is in place)
                // Example: Logger.LogError(Ex, "Error fetching water quality data");
                return Json("Error", JsonRequestBehavior.AllowGet);
            }
        }


        [HttpPost]
        public ActionResult getdatadata(string id)
        {
            try
            {
                int idd = Convert.ToInt32(id);

                var data = AJE.obj_water_wq_data.Where(x => x.water_qi_meta_id == idd).Select(x => new
                {
                    x.data_id,
                    x.ph,
                    x.chloride,
                    x.free_chlorine,
                    x.turbudity,
                    x.total_hardness_mgl,
                    x.alkalinity_mgl,
                    x.nitrate_mgl,
                    x.fluoride_mgl,
                    x.iron_mgl,
                    x.arsenic_mgl,
                    x.ec_us_cm,
                    x.tds,
                    x.bacterial_test,
                    x.entry_time_data

                })
                            .ToList();

                List<dataidtable> ddd = new List<dataidtable>();

                foreach (var item in data)
                {
                    dataidtable dd = new dataidtable();
                    dd.data_id = item.data_id;
                    dd.ph = item.ph;
                    dd.chloride = item.chloride;
                    dd.free_chlorine = item.free_chlorine;
                    dd.turbudity = item.turbudity;
                    dd.total_hardness_mgl = item.total_hardness_mgl;
                    dd.alkalinity_mgl = item.alkalinity_mgl;
                    dd.nitrate_mgl = item.nitrate_mgl;
                    dd.fluoride_mgl = item.fluoride_mgl;
                    dd.iron_mgl = item.iron_mgl;
                    dd.arsenic_mgl = item.arsenic_mgl;
                    dd.ec_us_cm = item.ec_us_cm;
                    dd.tds = item.tds;
                    dd.bacterial_test = item.bacterial_test;
                    dd.entry_time_data = item.entry_time_data;

                    ddd.Add(dd);
                }

                return Json(ddd, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json("Error", JsonRequestBehavior.AllowGet);
            }
        }


        //

        [HttpGet]
        public ActionResult GetDataIds()
        {
            try
            {
                var dataIds = AJE.obj_water_wq_data.Select(x => x.data_id).Distinct().ToList();
                return Json(dataIds, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                // Log or handle the exception appropriately
                return Json("Error", JsonRequestBehavior.AllowGet);
            }
        }


        //
        public ActionResult Waterflow_excel(string state1, string district1, string block01, string gp1, string year1, string month1)
        {
            var State = state1;
            var Dist = district1;
            var Block = block01;
            var Gram = gp1;

            List<vw_bs_waterflow_meta_data> abc = new List<vw_bs_waterflow_meta_data>();

            if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Dist != "Select_Districts")
            {
                abc = AJE.obj_vw_bs_waterflow_meta_data.Where(x => x.State == State && x.District == Dist && x.Block == Block && x.GramPanchayat == Gram).OrderBy(x => x.wf_meta_id).ToList();
            }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
            {
                abc = AJE.obj_vw_bs_waterflow_meta_data.Where(x => x.State == State && x.District == Dist && x.Block == Block).OrderBy(x => x.wf_meta_id).ToList();
            }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
            {
                abc = AJE.obj_vw_bs_waterflow_meta_data.Where(x => x.State == State && x.District == Dist).OrderBy(x => x.wf_meta_id).ToList();
            }
            else if (State != "0" && State != "" && State != null)
            {
                abc = AJE.obj_vw_bs_waterflow_meta_data.Where(x => x.State == State).OrderBy(x => x.wf_meta_id).ToList();
            }

            using (var workbook = new XLWorkbook())
            {
                var worksheet = workbook.Worksheets.Add("Water Flow Meter");
                var currentRow = 1;
                worksheet.Cell(currentRow, 1).Value = "S. No";
                worksheet.Cell(currentRow, 2).Value = "State";
                worksheet.Cell(currentRow, 3).Value = "District";
                worksheet.Cell(currentRow, 4).Value = "Block";
                worksheet.Cell(currentRow, 5).Value = "Grampanchyat";
                worksheet.Cell(currentRow, 6).Value = "Village Name";
                worksheet.Cell(currentRow, 7).Value = "Location Details";
                worksheet.Cell(currentRow, 8).Value = "Latitude";
                worksheet.Cell(currentRow, 9).Value = "Longitude";
                worksheet.Cell(currentRow, 10).Value = "Date of Entry";
                worksheet.Cell(currentRow, 11).Value = "Name of the owner";
                worksheet.Cell(currentRow, 12).Value = "Type of Well";
                worksheet.Cell(currentRow, 13).Value = "Pump type";
                worksheet.Cell(currentRow, 14).Value = "Date of Installation of Waterflow meter";
                worksheet.Cell(currentRow, 15).Value = "Area Irrigated(ha)";
                worksheet.Cell(currentRow, 16).Value = "Date of Water Reading";
                worksheet.Cell(currentRow, 17).Value = "Meter ID";
                worksheet.Cell(currentRow, 18).Value = "Meter Reading";
                worksheet.Cell(currentRow, 19).Value = "Unit Of Meter Reading";

                foreach (var item in abc)
                {
                    currentRow++;
                    worksheet.Cell(currentRow, 1).Value = currentRow - 1; // Incremental serial number
                    worksheet.Cell(currentRow, 2).Value = item.state_name;
                    worksheet.Cell(currentRow, 3).Value = item.district_name;
                    worksheet.Cell(currentRow, 4).Value = item.block_name;
                    worksheet.Cell(currentRow, 5).Value = item.gp_name;
                    worksheet.Cell(currentRow, 6).Value = item.Village;
                    worksheet.Cell(currentRow, 7).Value = item.LocationDetails;
                    worksheet.Cell(currentRow, 8).Value = item.Latitude;
                    worksheet.Cell(currentRow, 9).Value = item.Longitude;
                    worksheet.Cell(currentRow, 10).Value = item.DateofEntry;
                    worksheet.Cell(currentRow, 11).Value = item.OwnerName;
                    worksheet.Cell(currentRow, 12).Value = item.WellType;
                    worksheet.Cell(currentRow, 13).Value = item.PumpType;
                    worksheet.Cell(currentRow, 14).Value = item.WaterFlowMeter_Installation_Date;
                    worksheet.Cell(currentRow, 15).Value = item.AreaIrrigated;
                    worksheet.Cell(currentRow, 16).Value = item.WaterReading_Date;
                    worksheet.Cell(currentRow, 17).Value = item.Meterid;
                    worksheet.Cell(currentRow, 18).Value = item.MeterReading;
                    worksheet.Cell(currentRow, 19).Value = item.UnitReading;
                }

                using (var stream = new MemoryStream())
                {
                    workbook.SaveAs(stream);
                    var content = stream.ToArray();

                    return File(
                        content,
                        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                        "Water Flow Meter.xlsx");
                }
            }
        }
        //
        public ActionResult Raingauge(string state1, string district1, string block01, string gp1, string year1, string month1)
        {
            var State = state1;
            var Dist = district1;
            var Block = block01;
            var Gram = gp1;

            List<vw_bs_rainfall_meta_data> abc = new List<vw_bs_rainfall_meta_data>();

            // Filter data based on the provided parameters
            if (!string.IsNullOrEmpty(State) && State != "0" && !string.IsNullOrEmpty(Dist) && Dist != "0" && !string.IsNullOrEmpty(Block) && Block != "0" && !string.IsNullOrEmpty(Gram) && Gram != "0" && Dist != "Select_Districts")
            {
                abc = AJE.obj_vw_bs_rainfall_meta_data.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.gpname == Gram).OrderBy(x => x.rf_meta_id).ToList();
            }
            else if (!string.IsNullOrEmpty(State) && State != "0" && !string.IsNullOrEmpty(Dist) && Dist != "0" && !string.IsNullOrEmpty(Block) && Block != "0")
            {
                abc = AJE.obj_vw_bs_rainfall_meta_data.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block).OrderBy(x => x.rf_meta_id).ToList();
            }
            else if (!string.IsNullOrEmpty(State) && State != "0" && !string.IsNullOrEmpty(Dist) && Dist != "0")
            {
                abc = AJE.obj_vw_bs_rainfall_meta_data.Where(x => x.statename == State && x.districtname == Dist).OrderBy(x => x.rf_meta_id).ToList();
            }
            else if (!string.IsNullOrEmpty(State) && State != "0")
            {
                abc = AJE.obj_vw_bs_rainfall_meta_data.Where(x => x.statename == State).OrderBy(x => x.rf_meta_id).ToList();
            }

            // Create a new Excel workbook and worksheet
            using (var workbook = new XLWorkbook())
            {
                var worksheet = workbook.Worksheets.Add("Rainfall");
                var currentRow = 1;

                // Set the headers for the columns
                worksheet.Cell(currentRow, 1).Value = "State";
                worksheet.Cell(currentRow, 2).Value = "District";
                worksheet.Cell(currentRow, 3).Value = "Block";
                worksheet.Cell(currentRow, 4).Value = "Grampanchyat";
                worksheet.Cell(currentRow, 5).Value = "Village Name";
                worksheet.Cell(currentRow, 6).Value = "Location Details";
                worksheet.Cell(currentRow, 7).Value = "Latitude";
                worksheet.Cell(currentRow, 8).Value = "Longitude";
                worksheet.Cell(currentRow, 9).Value = "Date(MM/DD/YYYY)";
                worksheet.Cell(currentRow, 10).Value = "Type of Rain Gauge";
                worksheet.Cell(currentRow, 11).Value = "Rainfall(in mm)";
                worksheet.Cell(currentRow, 12).Value = "Rainfall Date(MM/DD/YYYY)";
                worksheet.Cell(currentRow, 13).Value = "ID";

                // Populate the worksheet with data
                foreach (var item in abc)
                {
                    currentRow++;
                    worksheet.Cell(currentRow, 1).Value = item.state_name;
                    worksheet.Cell(currentRow, 2).Value = item.district_name;
                    worksheet.Cell(currentRow, 3).Value = item.block_name;
                    worksheet.Cell(currentRow, 4).Value = item.gp_name;
                    worksheet.Cell(currentRow, 5).Value = item.village;
                    worksheet.Cell(currentRow, 6).Value = item.locationdetail;
                    worksheet.Cell(currentRow, 7).Value = item.latitude;
                    worksheet.Cell(currentRow, 8).Value = item.longitude;

                    // Ensure date is correctly parsed and not default
                    if (item.date_time != default(DateTime))
                    {
                        worksheet.Cell(currentRow, 9).Value = item.date_time.ToString("yyyy-MM-dd");
                    }

                    worksheet.Cell(currentRow, 10).Value = item.raingauge;

                    // Ensure rainfall date is correctly parsed and not default
                    if (item.rf_date != default(DateTime))
                    {
                        worksheet.Cell(currentRow, 12).Value = item.rf_date.ToString("yyyy-MM-dd");
                    }

                    worksheet.Cell(currentRow, 11).Value = item.rf_reading;
                    worksheet.Cell(currentRow, 13).Value = item.id;
                }

                // Save the workbook to a memory stream and return as a downloadable file
                using (var stream = new MemoryStream())
                {
                    workbook.SaveAs(stream);
                    var content = stream.ToArray();

                    return File(
                        content,
                        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                        "Rainfall.xlsx");
                }
            }
        }


        // Water Level


        public ActionResult exesitingwellexcel(string state1, string district1, string block01, string gp1)
        {
            var State = state1;
            var Dist = district1;
            var Block = block01;
            var Gram = gp1;

            List<vw_bs_waterlevel_pv_meta_data> abc = new List<vw_bs_waterlevel_pv_meta_data>();

            if (!string.IsNullOrEmpty(State) && State != "0" && !string.IsNullOrEmpty(Dist) && Dist != "0" && !string.IsNullOrEmpty(Block) && Block != "0" && !string.IsNullOrEmpty(Gram) && Gram != "0" && Dist != "Select_Districts")
            {
                abc = AJE.obj_vw_bs_waterlevel_pv_meta_data.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram).OrderBy(x => x.gwl_meta_id).ToList();
            }
            else if (!string.IsNullOrEmpty(State) && State != "0" && !string.IsNullOrEmpty(Dist) && Dist != "0" && !string.IsNullOrEmpty(Block) && Block != "0")
            {
                abc = AJE.obj_vw_bs_waterlevel_pv_meta_data.Where(x => x.state == State && x.district == Dist && x.block == Block).OrderBy(x => x.gwl_meta_id).ToList();
            }
            else if (!string.IsNullOrEmpty(State) && State != "0" && !string.IsNullOrEmpty(Dist) && Dist != "0")
            {
                abc = AJE.obj_vw_bs_waterlevel_pv_meta_data.Where(x => x.state == State && x.district == Dist).OrderBy(x => x.gwl_meta_id).ToList();
            }
            else if (!string.IsNullOrEmpty(State) && State != "0")
            {
                abc = AJE.obj_vw_bs_waterlevel_pv_meta_data.Where(x => x.state == State).OrderBy(x => x.gwl_meta_id).ToList();
            }

            using (var workbook = new XLWorkbook())
            {
                var worksheet = workbook.Worksheets.Add("Existing Well");
                var currentRow = 1;

                worksheet.Cell(currentRow, 1).Value = "Well ID";
                worksheet.Cell(currentRow, 2).Value = "State";
                worksheet.Cell(currentRow, 3).Value = "District";
                worksheet.Cell(currentRow, 4).Value = "Block";
                worksheet.Cell(currentRow, 5).Value = "Grampanchayat";
                worksheet.Cell(currentRow, 6).Value = "Village Name";
                worksheet.Cell(currentRow, 7).Value = "Location Details";
                worksheet.Cell(currentRow, 8).Value = "Latitude";
                worksheet.Cell(currentRow, 9).Value = "Longitude";
                worksheet.Cell(currentRow, 10).Value = "Date";
                worksheet.Cell(currentRow, 11).Value = "Type of Well";
                worksheet.Cell(currentRow, 12).Value = "Other Well Type";
                worksheet.Cell(currentRow, 13).Value = "OwnerShip Type";
                worksheet.Cell(currentRow, 14).Value = "Government Source";
                worksheet.Cell(currentRow, 15).Value = "Depth of Well(mbmp)";
                worksheet.Cell(currentRow, 16).Value = "Ground Water Level(mbgl)";
                worksheet.Cell(currentRow, 17).Value = "Ground Water Level Date";
                worksheet.Cell(currentRow, 18).Value = "Diameter of Well";
                worksheet.Cell(currentRow, 19).Value = "Height of Measuring Point";
                worksheet.Cell(currentRow, 20).Value = "GWL_Meta_ID";


                currentRow++;
                foreach (var item in abc)
                {

                    worksheet.Cell(currentRow, 1).Value = item.wellid;
                    worksheet.Cell(currentRow, 2).Value = item.state_name;
                    worksheet.Cell(currentRow, 3).Value = item.district_name;
                    worksheet.Cell(currentRow, 4).Value = item.block_name;
                    worksheet.Cell(currentRow, 5).Value = item.gp_name;
                    worksheet.Cell(currentRow, 6).Value = item.sitename;
                    worksheet.Cell(currentRow, 7).Value = item.locationdetails;
                    worksheet.Cell(currentRow, 8).Value = item.latitude;
                    worksheet.Cell(currentRow, 9).Value = item.longitude;
                    worksheet.Cell(currentRow, 10).Value = item.datetime;
                    worksheet.Cell(currentRow, 11).Value = item.typeofwell;
                    worksheet.Cell(currentRow, 12).Value = item.other_well_type;
                    worksheet.Cell(currentRow, 13).Value = item.source_ownership_type;
                    worksheet.Cell(currentRow, 14).Value = item.source_ownership;

                    worksheet.Cell(currentRow, 15).Value = item.welldepth;

                    worksheet.Cell(currentRow, 16).Value = item.gwl_reading;
                    worksheet.Cell(currentRow, 17).Value = item.gwl_date;
                    worksheet.Cell(currentRow, 18).Value = item.diameter_of_well;
                    worksheet.Cell(currentRow, 19).Value = item.height_of_measuring_point;
                    worksheet.Cell(currentRow, 20).Value = item.gwl_meta_id;

                    currentRow++;
                }

                using (var stream = new MemoryStream())
                {
                    workbook.SaveAs(stream);
                    var content = stream.ToArray();

                    return File(
                        content,
                        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                        "Ground Water Monitoring.xlsx");
                }
            }
        }



        public ActionResult wellinventory(string state1, string district1, string block01, string gp1, string year1, string month1)
        {
            var State = state1;
            var Dist = district1;
            var Block = block01;
            var Gram = gp1;

            List<vw_bs_wellinventory> TDetails = new List<vw_bs_wellinventory>();

            if (State != "0" && !string.IsNullOrEmpty(State) &&
                Dist != "0" && !string.IsNullOrEmpty(Dist) &&
                Block != "0" && !string.IsNullOrEmpty(Block) &&
                Gram != "0" && !string.IsNullOrEmpty(Gram))

            {
                TDetails = AJE.obj_vw_bs_wellinventory.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram).OrderBy(x => x.gid).ToList();
            }
            else if (State != "0" && !string.IsNullOrEmpty(State) &&
                     Dist != "0" && !string.IsNullOrEmpty(Dist) &&
                     Block != "0" && !string.IsNullOrEmpty(Block) &&
                      Dist != "Select_Districts"
                     )

            {
                TDetails = AJE.obj_vw_bs_wellinventory.Where(x => x.state == State && x.district == Dist && x.block == Block).OrderBy(x => x.gid).ToList();
            }
            else if (State != "0" && !string.IsNullOrEmpty(State) &&
                     Dist != "0" && !string.IsNullOrEmpty(Dist))
            {
                TDetails = AJE.obj_vw_bs_wellinventory.Where(x => x.state == State && x.district == Dist).OrderBy(x => x.gid).ToList();
            }
            else if (State != "0" && !string.IsNullOrEmpty(State))
            {
                TDetails = AJE.obj_vw_bs_wellinventory.Where(x => x.state == State).OrderBy(x => x.gid).ToList();
            }

            using (var workbook = new XLWorkbook())
            {
                var worksheet = workbook.Worksheets.Add("Well Inventory");
                var currentRow = 1;

                worksheet.Cell(currentRow, 1).Value = "S.No"; // Serial number column
                worksheet.Cell(currentRow, 2).Value = "well id";
                worksheet.Cell(currentRow, 3).Value = "State";
                worksheet.Cell(currentRow, 4).Value = "District";
                worksheet.Cell(currentRow, 5).Value = "Block";
                worksheet.Cell(currentRow, 6).Value = "Grampanchayat Name ";
                worksheet.Cell(currentRow, 7).Value = "Village";
                worksheet.Cell(currentRow, 8).Value = "Location Details";
                worksheet.Cell(currentRow, 9).Value = "Latitude";
                worksheet.Cell(currentRow, 10).Value = "Longitude";
                worksheet.Cell(currentRow, 11).Value = "Date";
                worksheet.Cell(currentRow, 12).Value = "Type of well";
                worksheet.Cell(currentRow, 13).Value = "Other Type of well";
                worksheet.Cell(currentRow, 14).Value = "Owner Name";
                worksheet.Cell(currentRow, 15).Value = "Diameter of Well (m)";
                worksheet.Cell(currentRow, 16).Value = "Depth of Well (mbmp)";
                worksheet.Cell(currentRow, 17).Value = "Depth of Water Level (mbmp)";
                worksheet.Cell(currentRow, 18).Value = "Height of measuring Point (magi)";
                worksheet.Cell(currentRow, 19).Value = "Well Water Portable";
                worksheet.Cell(currentRow, 20).Value = "Use (Drinking / Domastic) / Irrigation / Both";
                worksheet.Cell(currentRow, 21).Value = "Pump Installed";
                worksheet.Cell(currentRow, 22).Value = "Volumetric/Electricity Meter Installed";

                // Incremental serial number
                int serialNumber = 1;

                foreach (var item in TDetails)
                {
                    currentRow++;
                    worksheet.Cell(currentRow, 1).Value = serialNumber++;
                    worksheet.Cell(currentRow, 2).Value = item.wellno;
                    worksheet.Cell(currentRow, 3).Value = item.state_name;
                    worksheet.Cell(currentRow, 4).Value = item.district_name;
                    worksheet.Cell(currentRow, 5).Value = item.block_name;
                    worksheet.Cell(currentRow, 6).Value = item.gp_name;
                    worksheet.Cell(currentRow, 7).Value = item.village;
                    worksheet.Cell(currentRow, 8).Value = item.locationdetails;
                    worksheet.Cell(currentRow, 9).Value = item.latitude;
                    worksheet.Cell(currentRow, 10).Value = item.longitude;
                    worksheet.Cell(currentRow, 11).Value = item.date;

                    worksheet.Cell(currentRow, 12).Value = item.welltype;
                    worksheet.Cell(currentRow, 13).Value = item.well_type_other;
                    worksheet.Cell(currentRow, 14).Value = item.ownername;
                    worksheet.Cell(currentRow, 15).Value = item.welldiameter;
                    worksheet.Cell(currentRow, 16).Value = item.welldepth;
                    worksheet.Cell(currentRow, 17).Value = item.waterleveldepth;
                    worksheet.Cell(currentRow, 18).Value = item.measuringpoint;
                    worksheet.Cell(currentRow, 19).Value = item.wellwaterpotable;
                    worksheet.Cell(currentRow, 20).Value = item.use;
                    worksheet.Cell(currentRow, 21).Value = item.pumpinstalled;
                    worksheet.Cell(currentRow, 22).Value = item.electricmeterselecteditem;
                }

                if (TDetails.Count == 0)
                {
                    currentRow++;
                    worksheet.Cell(currentRow, 1).Value = "";
                }

                using (var stream = new MemoryStream())
                {
                    workbook.SaveAs(stream);
                    var content = stream.ToArray();

                    return File(
                        content,
                        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                        "Well Inventory.xlsx");
                }
            }
        }

        public ActionResult Geotagging_excel(string state1, string district1, string block01, string gp1, string year1, string month1)
        {
            var State = state1;
            var Dist = district1;
            var Block = block01;
            var Gram = gp1;

            // Get the initial details without any filtering
            List<vw_bs_geo_new> ddetails = AJE.obj_vw_bs_geo_new.ToList();

            // Filter the details based on provided parameters
            if (!string.IsNullOrEmpty(State) && State != "0")
            {
                ddetails = ddetails.Where(x => x.statename == State).ToList();
            }

            if (!string.IsNullOrEmpty(Dist) && Dist != "0" && Dist != "Select_Districts")
            {
                ddetails = ddetails.Where(x => x.districtname == Dist).ToList();
            }

            if (!string.IsNullOrEmpty(Block) && Block != "0")
            {
                ddetails = ddetails.Where(x => x.blockname == Block).ToList();
            }

            if (!string.IsNullOrEmpty(Gram) && Gram != "0")
            {
                ddetails = ddetails.Where(x => x.gpname == Gram).ToList();
            }

            using (var workbook = new XLWorkbook())
            {
                var worksheet = workbook.Worksheets.Add("Geo Tagging");
                var currentRow = 1;

                // Add headers for columns
                worksheet.Cell(currentRow, 1).Value = "S.No"; // Serial number column
                worksheet.Cell(currentRow, 2).Value = "State";
                worksheet.Cell(currentRow, 3).Value = "District";
                worksheet.Cell(currentRow, 4).Value = "Block";
                worksheet.Cell(currentRow, 5).Value = "Grampanchyat";
                worksheet.Cell(currentRow, 6).Value = "Village Name";
                worksheet.Cell(currentRow, 7).Value = "Location Details";
                worksheet.Cell(currentRow, 8).Value = "Latitude";
                worksheet.Cell(currentRow, 9).Value = "Longitude";
                worksheet.Cell(currentRow, 10).Value = "Date";
                worksheet.Cell(currentRow, 11).Value = "Type of structure";
                worksheet.Cell(currentRow, 12).Value = "Storage Capacity (Ha m)";
                worksheet.Cell(currentRow, 13).Value = "No of Fillings";

                // Incremental serial number
                int serialNumber = 1;

                // Add data rows
                if (ddetails.Count != 0)
                {
                    foreach (var detail in ddetails)
                    {
                        currentRow++;
                        worksheet.Cell(currentRow, 1).Value = serialNumber++;
                        worksheet.Cell(currentRow, 2).Value = detail.state_name;
                        worksheet.Cell(currentRow, 3).Value = detail.district_name;
                        worksheet.Cell(currentRow, 4).Value = detail.block_name;
                        worksheet.Cell(currentRow, 5).Value = detail.gp_name;
                        worksheet.Cell(currentRow, 6).Value = detail.village;
                        worksheet.Cell(currentRow, 7).Value = detail.locationdetail;
                        worksheet.Cell(currentRow, 8).Value = detail.latitude;
                        worksheet.Cell(currentRow, 9).Value = detail.longitude;
                        worksheet.Cell(currentRow, 10).Value = detail.date;
                        worksheet.Cell(currentRow, 11).Value = detail.typeofstructure;
                        worksheet.Cell(currentRow, 12).Value = detail.storagecapacity;
                        worksheet.Cell(currentRow, 13).Value = detail.nooffillings;
                    }
                }
                else
                {
                    // If no data found, add a row with a message
                    currentRow++;
                    worksheet.Cell(currentRow, 1).Value = "No Data";
                }

                using (var stream = new MemoryStream())
                {
                    workbook.SaveAs(stream);
                    var content = stream.ToArray();

                    return File(
                        content,
                        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                        "Geotagging.xlsx");
                }
            }
        }

        public ActionResult Waterquality_excel(string state1, string district1, string block01, string gp1, string year1, string month1)
        {
            var State = state1;
            var Dist = district1;
            var Block = block01;
            var Gram = gp1;

            List<vw_bs_pv_quality_meta_data> abc = new List<vw_bs_pv_quality_meta_data>();

            if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Dist != "Select_Districts")
            {
                abc = AJE.obj_vw_bs_pv_quality_meta_data.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram).OrderBy(x => x.pv_meta_id).ToList();
            }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
            {
                abc = AJE.obj_vw_bs_pv_quality_meta_data.Where(x => x.state == State && x.district == Dist && x.block == Block).OrderBy(x => x.gp).ToList();
            }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
            {
                abc = AJE.obj_vw_bs_pv_quality_meta_data.Where(x => x.state == State && x.district == Dist).OrderBy(x => x.pv_meta_id).ToList();
            }
            else if (State != "0" && State != "" && State != null)
            {
                abc = AJE.obj_vw_bs_pv_quality_meta_data.Where(x => x.state == State).OrderBy(x => x.pv_meta_id).ToList();
            }

            using (var workbook = new XLWorkbook())
            {
                var worksheet = workbook.Worksheets.Add("Existing Well");
                var currentRow = 1;
                worksheet.Cell(currentRow, 1).Value = "Well Id";
                worksheet.Cell(currentRow, 2).Value = "State";
                worksheet.Cell(currentRow, 3).Value = "District";
                worksheet.Cell(currentRow, 4).Value = "Block";
                worksheet.Cell(currentRow, 5).Value = "Grampanchayat";
                worksheet.Cell(currentRow, 6).Value = "Village";
                worksheet.Cell(currentRow, 7).Value = "Site Name";
                worksheet.Cell(currentRow, 8).Value = "Well Type";
                worksheet.Cell(currentRow, 9).Value = "Source";
                worksheet.Cell(currentRow, 10).Value = "Year";
                worksheet.Cell(currentRow, 11).Value = "Well Depth";
                worksheet.Cell(currentRow, 12).Value = "Aquifer";
                worksheet.Cell(currentRow, 13).Value = "PV Data Year";
                worksheet.Cell(currentRow, 14).Value = "PH";
                worksheet.Cell(currentRow, 15).Value = "EC(µs/cm)";
                worksheet.Cell(currentRow, 16).Value = "TDS";
                worksheet.Cell(currentRow, 17).Value = "TH(mg/L)";
                worksheet.Cell(currentRow, 18).Value = "Calcium(mg/L)";
                worksheet.Cell(currentRow, 19).Value = "Magnesium mg/L";
                worksheet.Cell(currentRow, 20).Value = "Sodium mg/L";
                worksheet.Cell(currentRow, 21).Value = "Potassium mg/L";
                worksheet.Cell(currentRow, 22).Value = "Carbonate mg/L";
                worksheet.Cell(currentRow, 23).Value = "Bicarbonate mg/L";
                worksheet.Cell(currentRow, 24).Value = "Sulphate mg/L";
                worksheet.Cell(currentRow, 25).Value = "Chloride mg/L";
                worksheet.Cell(currentRow, 26).Value = "Fluoride mg/L";
                worksheet.Cell(currentRow, 27).Value = "Nitrate mg/L";
                worksheet.Cell(currentRow, 28).Value = "Data ID";

                foreach (var item in abc)
                {
                    currentRow++; 
                    worksheet.Cell(currentRow, 1).Value = item.pv_data_well_id;
                    worksheet.Cell(currentRow, 2).Value = item.state_name;
                    worksheet.Cell(currentRow, 3).Value = item.district_name;
                    worksheet.Cell(currentRow, 4).Value = item.block_name;
                    worksheet.Cell(currentRow, 5).Value = item.gp_name;
                    worksheet.Cell(currentRow, 6).Value = item.village;
                    worksheet.Cell(currentRow, 7).Value = item.site_name;
                    worksheet.Cell(currentRow, 8).Value = item.well_type;
                    worksheet.Cell(currentRow, 9).Value = item.source;
                    worksheet.Cell(currentRow, 10).Value = item.year;
                    worksheet.Cell(currentRow, 11).Value = item.well_depth;
                    worksheet.Cell(currentRow, 12).Value = item.aquifer;
                    worksheet.Cell(currentRow, 13).Value = item.pv_data_year;
                    worksheet.Cell(currentRow, 14).Value = item.ph;
                    worksheet.Cell(currentRow, 15).Value = item.ec;
                    worksheet.Cell(currentRow, 16).Value = item.tds;
                    worksheet.Cell(currentRow, 17).Value = item.th;
                    worksheet.Cell(currentRow, 18).Value = item.calcium;
                    worksheet.Cell(currentRow, 19).Value = item.magnesium;
                    worksheet.Cell(currentRow, 20).Value = item.sodium;
                    worksheet.Cell(currentRow, 21).Value = item.potassium;
                    worksheet.Cell(currentRow, 22).Value = item.carbonate;
                    worksheet.Cell(currentRow, 23).Value = item.bicarbonate;
                    worksheet.Cell(currentRow, 24).Value = item.sulphate;
                    worksheet.Cell(currentRow, 25).Value = item.chloride;
                    worksheet.Cell(currentRow, 26).Value = item.fluoride;
                    worksheet.Cell(currentRow, 27).Value = item.nitrate;
                    worksheet.Cell(currentRow, 28).Value = item.pv_meta_id;
                }

                using (var stream = new MemoryStream())
                {
                    workbook.SaveAs(stream);
                    var content = stream.ToArray();
                    return File(
                        content,
                        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                        "Ground Water Quality.xlsx");
                }
            }
        }




        //waterqualitymadb
        public ActionResult Waterqualitym_excel(string state1, string district1, string block01, string gp1, string year1, string month1)
        {
            var State = state1;
            var Dist = district1;
            var Block = block01;
            var Gram = gp1;

            List<vw_bs_water_wq_meta_data> abc = new List<vw_bs_water_wq_meta_data>();

            if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Dist != "Select_Districts")
            {
                abc = AJE.obj_vw_bs_water_wq_meta_data.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram).OrderBy(x => x.well_id).ToList();
            }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
            {
                abc = AJE.obj_vw_bs_water_wq_meta_data.Where(x => x.state == State && x.district == Dist && x.block == Block).OrderBy(x => x.well_id).ToList();
            }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
            {
                abc = AJE.obj_vw_bs_water_wq_meta_data.Where(x => x.state == State && x.district == Dist).OrderBy(x => x.well_id).ToList();
            }
            else if (State != "0" && State != "" && State != null)
            {
                abc = AJE.obj_vw_bs_water_wq_meta_data.Where(x => x.state == State).OrderBy(x => x.well_id).ToList();
            }

            using (var workbook = new XLWorkbook())
            {
                var worksheet = workbook.Worksheets.Add("Existing Well");
                var currentRow = 1;
                worksheet.Cell(currentRow, 1).Value = "Well ID";
                worksheet.Cell(currentRow, 2).Value = "State";
                worksheet.Cell(currentRow, 3).Value = "District";
                worksheet.Cell(currentRow, 4).Value = "Block";
                worksheet.Cell(currentRow, 5).Value = "Grampanchayat";
                worksheet.Cell(currentRow, 6).Value = "Location Details";
                worksheet.Cell(currentRow, 7).Value = "Type Of Well";
                worksheet.Cell(currentRow, 8).Value = "Well Depth";
                worksheet.Cell(currentRow, 9).Value = "PH";
                worksheet.Cell(currentRow, 10).Value = "Chloride";
                worksheet.Cell(currentRow, 11).Value = "Free Chlorine";
                worksheet.Cell(currentRow, 12).Value = "Turbudity";
                worksheet.Cell(currentRow, 13).Value = "Total Hardness";
                worksheet.Cell(currentRow, 14).Value = "Alkalinity";
                worksheet.Cell(currentRow, 15).Value = "Nitrate";
                worksheet.Cell(currentRow, 16).Value = "Fluoride";
                worksheet.Cell(currentRow, 17).Value = "Iron";
                worksheet.Cell(currentRow, 18).Value = "Arsenic";
                worksheet.Cell(currentRow, 19).Value = "EC";
                worksheet.Cell(currentRow, 20).Value = "TDS";
                worksheet.Cell(currentRow, 21).Value = "Bacterial";
                worksheet.Cell(currentRow, 22).Value = "Entry Time";
                worksheet.Cell(currentRow, 23).Value = "QI Date";
                worksheet.Cell(currentRow, 24).Value = "Entry Time Date";


                foreach (var item in abc)
                {
                    currentRow++;
                    worksheet.Cell(currentRow, 1).Value = item.well_id;
                    worksheet.Cell(currentRow, 2).Value = item.state_name;
                    worksheet.Cell(currentRow, 3).Value = item.district_name;
                    worksheet.Cell(currentRow, 4).Value = item.block_name;
                    worksheet.Cell(currentRow, 5).Value = item.gp_name;
                    worksheet.Cell(currentRow, 6).Value = item.location_details;
                    worksheet.Cell(currentRow, 7).Value = item.type_of_well;
                    worksheet.Cell(currentRow, 8).Value = item.well_depth_mbgl;
                    worksheet.Cell(currentRow, 9).Value = item.ph;
                    worksheet.Cell(currentRow, 10).Value = item.chloride;
                    worksheet.Cell(currentRow, 11).Value = item.free_chlorine;
                    worksheet.Cell(currentRow, 12).Value = item.turbudity;
                    worksheet.Cell(currentRow, 13).Value = item.total_hardness_mgl;
                    worksheet.Cell(currentRow, 14).Value = item.alkalinity_mgl;
                    worksheet.Cell(currentRow, 15).Value = item.nitrate_mgl;
                    worksheet.Cell(currentRow, 16).Value = item.fluoride_mgl;
                    worksheet.Cell(currentRow, 17).Value = item.iron_mgl;
                    worksheet.Cell(currentRow, 18).Value = item.arsenic_mgl;
                    worksheet.Cell(currentRow, 19).Value = item.ec_us_cm;
                    worksheet.Cell(currentRow, 20).Value = item.tds;
                    worksheet.Cell(currentRow, 21).Value = item.bacterial_test;
                    worksheet.Cell(currentRow, 22).Value = item.entry_time;
                    worksheet.Cell(currentRow, 23).Value = item.qi_date;
                    worksheet.Cell(currentRow, 24).Value = item.entry_time_data;

                }

                using (var stream = new MemoryStream())
                {
                    workbook.SaveAs(stream);
                    var content = stream.ToArray();

                    return File(
                        content,
                        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                        "Ground Water Quality FTK.xlsx");
                }
            }
        }


        //
        [HttpPost]
        public ActionResult UpdateFeedback(string comment_section, int rating)
        {
            try
            {

                feedback_map obj = new feedback_map();
                obj.comment_section = comment_section;
                obj.rating = rating;


                AJE.obj_feedback_map.Add(obj);
                AJE.SaveChanges();

                return Json("Feedback saved successfully");
            }
            catch (Exception ex)
            {
                return Json("Error occurred while updating feedback: " + ex.Message);
            }
        }



        //for geotagging export

        [HttpPost]
        public ActionResult fetchDataForImageID(string id)
        {

            try
            {
                JavaScriptSerializer js = new JavaScriptSerializer();

                int TKID = Convert.ToInt32(id);
                var Data1 = AJE.obj_vw_bs_geo_new.Where(x => x.id == TKID)
                     .Select(x => new {
                         State = x.state_name,
                         District = x.district_name,
                         Block = x.block_name,
                         Gram_Panchayat = x.gp_name,

                         Village_Name = x.village,
                         Type_Of_structure = x.typeofstructure,
                         ID = x.id,
                         Storage_Capacity = x.storagecapacity,
                         No_Of_Fillings = x.nooffillings,
                         Location_Details = x.locationdetail,
                         Geotagged_date = x.datetime,

                         Constructed_Under_ABY = x.wcu_aby,
                         Scheme_Name = x.wcu_aby_remark,

                     }).ToList();
                if (Data1 != null)
                {
                    return Json(Data1, JsonRequestBehavior.AllowGet);
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

        // waterlevel point data export

        [HttpPost]
        public ActionResult fetchDataForwlID(int part_id)
        {
            try
            {
                JavaScriptSerializer js = new JavaScriptSerializer();

                int TKID = Convert.ToInt32(part_id);

                // Check if there's only a single record or an array of records
                var Data1 = AJE.obj_vw_bs_waterlevel_pv_meta_data.Where(x => x.part_id == TKID)
                    .Select(x => new {
                        State = x.state_name,
                        District = x.district_name,
                        Block = x.block_name,
                        Gram_Panchayat = x.gp_name,
                        Site_Name = x.sitename,
                        Well_ID = x.wellid,
                        Type_Of_Well = x.typeofwell,
                        Date_Time = x.datetime,

                        Depth_of_Well = x.welldepth,

                        Location_Details = x.locationdetails,


                    }).ToList();

                if (Data1.Count > 0)
                {

                    if (Data1.Count == 1)
                    {
                        return Json(Data1[0], JsonRequestBehavior.AllowGet);
                    }

                    else
                    {
                        return Json(Data1, JsonRequestBehavior.AllowGet);
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



        //
        [HttpPost]
        public ActionResult fetchDataForwellID(string wellno)
        {
            try
            {
                var Data1 = AJE.obj_vw_wellinventory.Where(x => x.wellno == wellno)
                    .Select(x => new {
                        State = x.state,
                        District = x.district,
                        Block = x.block,
                        Gram_Panchayat = x.gp,

                        Village = x.village,
                        Type_of_Well = x.welltype,
                        Date = x.date,
                        Height_of_Measuring_Point = x.measuringpoint,
                        Diameter_of_well = x.welldiameter,
                        Depth_of_well = x.welldepth,
                        Well_Water_Portable = x.wellwaterpotable,
                        Use = x.use,
                        Pump_Installed = x.pumpinstalled,
                        Electric_Meter_Selected_Item = x.electricmeterselecteditem,
                        Well_Depth = x.waterleveldepth,

                        Location_Details = x.locationdetails,

                    }).ToList();

                if (Data1 != null)
                {
                    return Json(Data1, JsonRequestBehavior.AllowGet);
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

        //waterflow export point

        [HttpPost]
        public ActionResult fetchDataForwfID(string id)
        {
            try
            {
                int TKID = Convert.ToInt32(id);

                var Data1 = AJE.obj_vw_bs_waterflow_meta_data.Where(x => x.id == TKID)
                    .Select(x => new {
                        State = x.state_name,
                        District = x.district_name,
                        Block = x.block_name,
                        Gram_Panchayat = x.gp_name,
                        Village = x.Village,
                        Meter_ID = x.Meterid,
                        Water_Flow_Installation_date = x.WaterFlowMeter_Installation_Date,
                        Well_Type = x.WellType,
                        Pump_type = x.PumpType,
                        Area_Irrigated = x.AreaIrrigated,
                        Crop_Irrigated = x.CropIrrigated,
                        Location_Details = x.LocationDetails,


                        Unit_Reading = x.UnitReading,
                        Date_Time_Meter = x.DateofEntry,
                        Water_Reading_date = x.WaterReading_Date,
                        Meter_Reading = x.MeterReading,

                    }).ToList();

                if (Data1 != null && Data1.Count > 0)
                {
                    return Json(Data1, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("No Data", JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception Ex)
            {
                return Json("Error: " + Ex.Message, JsonRequestBehavior.AllowGet);
            }
        }

        //rainguage export point

        [HttpPost]
        public ActionResult fetchDataForrgID(string id)
        {
            try
            {
                int TKID = Convert.ToInt32(id);

                var Data1 = AJE.obj_vw_bs_rainfall_meta_data.Where(x => x.id == TKID)
                    .Select(x => new {
                        State = x.state_name,
                        District = x.district_name,
                        Block = x.block_name,
                        Gram_Panchayat = x.gp_name,

                        Village = x.village,
                        ID = x.id,
                        Rainguage = x.raingauge,
                        Location_Details = x.locationdetail,

                        Rainfall_date = x.rf_date,
                        Rainfall_Reading = x.rf_reading,


                    }).ToList();

                if (Data1 != null && Data1.Count > 0)
                {
                    return Json(Data1, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("No Data", JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception Ex)
            {
                return Json("Error: " + Ex.Message, JsonRequestBehavior.AllowGet);
            }
        }


        // waterquality point data export


        [HttpPost]
        public ActionResult fetchDataForwqID(string id)
        {
            try
            {
                int TKID = Convert.ToInt32(id);

                var Data1 = AJE.obj_vw_bs_pv_quality_meta_data.Where(x => x.id == TKID)
                    .Select(x => new {
                        State = x.state_name,
                        District = x.district_name,
                        Block = x.block_name,
                        Gram_Panchayat = x.gp_name,
                        Village = x.village,
                        Well_ID = x.pv_data_well_id,
                        Type_of_Well = x.well_type,
                        Depth_of_Well = x.well_depth,
                        Source_Ownership = x.source,
                        Acqufer_Type = x.aquifer,
                        Year = x.year,


                        PH = x.ph,
                        EC = x.ec,
                        TDS = x.tds,
                        TH = x.th,
                        Calcium = x.calcium,
                        Magnesium = x.magnesium,
                        Sodium = x.sodium,
                        Pottasium = x.potassium,
                        Carbonate = x.carbonate,
                        Bicarbonate = x.bicarbonate,
                        Sulphate = x.sulphate,
                        Choloride = x.chloride,
                        Flouride = x.fluoride,
                        Nitrate = x.nitrate,

                    }).ToList();

                if (Data1 != null && Data1.Count > 0)
                {
                    return Json(Data1, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("No Data", JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception Ex)
            {
                return Json("Error: " + Ex.Message, JsonRequestBehavior.AllowGet);
            }
        }


        //

        [HttpPost]
        public ActionResult fetchDataForwqmID(string id)
        {
            try
            {
                int TKID = Convert.ToInt32(id);

                var Data1 = AJE.obj_vw_bs_water_wq_meta_data.Where(x => x.id == TKID)
                    .Select(x => new {
                        State = x.state_name,
                        District = x.district_name,
                        Block = x.block_name,
                        Gram_Panchayat = x.gp_name,
                        Village_Name = x.village,
                        Well_ID = x.well_id,
                        Depth_of_Well = x.well_depth_mbgl,
                        Location_Details = x.location_details,
                        Entry_Time = x.entry_time_data,

                        Chloride = x.chloride,
                        Free_chlorine = x.free_chlorine,
                        Turbudity = x.turbudity,
                        Total_Hardness = x.total_hardness_mgl,
                        Alkanility = x.alkalinity_mgl,
                        Nitrate = x.nitrate_mgl,
                        Flouride = x.fluoride_mgl,
                        Iron = x.iron_mgl,
                        Arsenic = x.arsenic_mgl,
                        EC = x.ec_us_cm,
                        TDS = x.tds,
                        Bacterial_Test = x.bacterial_test,
                        PH = x.ph,





                    }).ToList();

                if (Data1 != null && Data1.Count > 0)
                {
                    return Json(Data1, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("No Data", JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception Ex)
            {
                return Json("Error: " + Ex.Message, JsonRequestBehavior.AllowGet);
            }
        }

        //for getting data of data in column

        [HttpPost]
        public ActionResult get_wqmr(string id)
        {

            try
            {
                JavaScriptSerializer js = new JavaScriptSerializer();

                int TKID = Convert.ToInt32(id);
                var Data1 = AJE.obj_vw_bs_water_wq_meta_data.Where(x => x.id == TKID).OrderByDescending(x => x.qi_date).ToList();
                if (Data1 != null)
                {
                    return Json(Data1, JsonRequestBehavior.AllowGet);
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

        public ActionResult DownloadAll(string state1)
        {
            var State = state1;
            try
            {
                double[] AllVersion = { 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7 };
                using (var workbook = new XLWorkbook())
                {

                    //    using (var package = new ExcelPackage())
                    //{
                    foreach (var version in AllVersion)
                    {


                        if (version == 1.1)
                        {
                            List<vw_bs_waterlevel_pv_meta_data> abc = new List<vw_bs_waterlevel_pv_meta_data>();
                            if (!string.IsNullOrEmpty(State) && State != "0")
                            {
                                var query = AJE.obj_vw_bs_waterlevel_pv_meta_data.Where(x => x.state == State);
                                abc = query.OrderBy(x => x.gwl_meta_id).ToList();
                            }
                            var worksheet = workbook.Worksheets.Add("WlM Stations");
                            //var worksheet = workbook.Worksheets.Add("WlM Stations");

                            string[] headers = {  "Well ID", "State", "District", "Block", "Grampanchayat", "Village Name", "Location Details",
 "Latitude", "Longitude", "Date", "Type of Well", "Other Well Type", "Ownership Type",
 "Government Source",  "Depth of Well(mbmp)",
 "Ground Water Level(mbgl)", "Ground Water Level Date","Diameter Of Well" };
                            for (int i = 0; i < headers.Length; i++)
                            {
                                worksheet.Cell(1, i + 1).Value = headers[i];
                            }

                            int currentRow = 2;
                            foreach (var item in abc)
                            {

                                worksheet.Cell(currentRow, 1).Value = item.wellid;
                                worksheet.Cell(currentRow, 2).Value = item.state_name;
                                worksheet.Cell(currentRow, 3).Value = item.district_name;
                                worksheet.Cell(currentRow, 4).Value = item.block_name;
                                worksheet.Cell(currentRow, 5).Value = item.gp_name;
                                worksheet.Cell(currentRow, 6).Value = item.sitename;
                                worksheet.Cell(currentRow, 7).Value = item.locationdetails;
                                worksheet.Cell(currentRow, 8).Value = item.latitude;
                                worksheet.Cell(currentRow, 9).Value = item.longitude;
                                worksheet.Cell(currentRow, 10).Value = item.datetime;
                                worksheet.Cell(currentRow, 11).Value = item.typeofwell;
                                worksheet.Cell(currentRow, 12).Value = item.other_well_type;
                                worksheet.Cell(currentRow, 13).Value = item.source_ownership_type;
                                worksheet.Cell(currentRow, 14).Value = item.source_ownership;

                                worksheet.Cell(currentRow, 15).Value = item.welldepth;

                                worksheet.Cell(currentRow, 16).Value = item.gwl_reading;
                                worksheet.Cell(currentRow, 17).Value = item.gwl_date;
                                worksheet.Cell(currentRow, 17).Value = item.diameter_of_well;

                                currentRow++;


                            }
                        }

                        else if (version == 1.2)
                        {
                            List<vw_bs_pv_quality_meta_data> abc = new List<vw_bs_pv_quality_meta_data>();
                            if (!string.IsNullOrEmpty(State) && State != "0")
                            {
                                var query = AJE.obj_vw_bs_pv_quality_meta_data.Where(x => x.state == State);
                                abc = query.OrderBy(x => x.pv_meta_id).ToList();
                            }
                            var worksheet = workbook.Worksheets.Add("WQ Monitoring Stations");
                            //var worksheet = workbook.Worksheets.Add("WQ Monitoring Stations");

                            string[] headers = {  "State", "District", "Block", "Grampanchayat", "Village Name", "Site Name",
            "Well Type", "Source", "Year", "Well Depth", "Aquifer", "PV Data Year",
            "PH",  "EC(µs/cm)","TDS", "TH(mg/L)","Calcium(mg/L)","Magnesium mg/L","Sodium mg/L",
                    "Potassium mg/L","Carbonate mg/L","Bicarbonate mg/L","Sulphate mg/L","Chloride mg/L","Fluoride mg/L","Nitrate mg/L","Well ID" };
                            for (int i = 0; i < headers.Length; i++)
                            {
                                worksheet.Cell(1, i + 1).Value = headers[i];
                            }

                            int currentRow = 2;
                            foreach (var item in abc)
                            {

                                worksheet.Cell(currentRow, 1).Value = item.state_name;
                                worksheet.Cell(currentRow, 2).Value = item.district_name;
                                worksheet.Cell(currentRow, 3).Value = item.block_name;
                                worksheet.Cell(currentRow, 4).Value = item.gp_name;
                                worksheet.Cell(currentRow, 5).Value = item.village;
                                worksheet.Cell(currentRow, 6).Value = item.site_name;
                                worksheet.Cell(currentRow, 7).Value = item.well_type;
                                worksheet.Cell(currentRow, 8).Value = item.source;
                                worksheet.Cell(currentRow, 9).Value = item.year;
                                worksheet.Cell(currentRow, 10).Value = item.well_depth;
                                worksheet.Cell(currentRow, 11).Value = item.aquifer;
                                worksheet.Cell(currentRow, 12).Value = item.pv_data_year;
                                worksheet.Cell(currentRow, 13).Value = item.ph;
                                worksheet.Cell(currentRow, 14).Value = item.ec;
                                worksheet.Cell(currentRow, 15).Value = item.tds;
                                worksheet.Cell(currentRow, 16).Value = item.th;
                                worksheet.Cell(currentRow, 17).Value = item.calcium;
                                worksheet.Cell(currentRow, 18).Value = item.magnesium;
                                worksheet.Cell(currentRow, 19).Value = item.sodium;
                                worksheet.Cell(currentRow, 20).Value = item.potassium;
                                worksheet.Cell(currentRow, 21).Value = item.carbonate;
                                worksheet.Cell(currentRow, 22).Value = item.bicarbonate;
                                worksheet.Cell(currentRow, 23).Value = item.sulphate;
                                worksheet.Cell(currentRow, 24).Value = item.chloride;
                                worksheet.Cell(currentRow, 25).Value = item.fluoride;
                                worksheet.Cell(currentRow, 26).Value = item.nitrate;
                                worksheet.Cell(currentRow, 27).Value = item.well_id;

                                currentRow++;


                            }
                        }


                        else if (version == 1.3)
                        {
                            List<vw_bs_geo_new> abc = new List<vw_bs_geo_new>();
                            if (!string.IsNullOrEmpty(State) && State != "0")
                            {
                                var query = AJE.obj_vw_bs_geo_new.Where(x => x.statename == State);
                                abc = query.OrderBy(x => x.id).ToList();
                            }
                            var worksheet = workbook.Worksheets.Add("Artificial Recharge");
                            //var worksheet = workbook.Worksheets.Add("Artificial Recharge");

                            string[] headers = {  "State", "District", "Block", "Grampanchayat", "Village Name", "Location Details",
            "Latitude", "Longitude", "Date", "Type of structure", "Storage Capacity (Ha m)", "No of Fillings",
             };
                            for (int i = 0; i < headers.Length; i++)
                            {
                                worksheet.Cell(1, i + 1).Value = headers[i];
                            }

                            int currentRow = 2;
                            foreach (var item in abc)
                            {
                                worksheet.Cell(currentRow, 1).Value = item.state_name;
                                worksheet.Cell(currentRow, 2).Value = item.district_name;
                                worksheet.Cell(currentRow, 3).Value = item.block_name;
                                worksheet.Cell(currentRow, 4).Value = item.gp_name;
                                worksheet.Cell(currentRow, 5).Value = item.village;
                                worksheet.Cell(currentRow, 6).Value = item.locationdetail;
                                worksheet.Cell(currentRow, 7).Value = item.latitude;
                                worksheet.Cell(currentRow, 8).Value = item.longitude;
                                worksheet.Cell(currentRow, 9).Value = item.date;
                                worksheet.Cell(currentRow, 10).Value = item.typeofstructure;
                                worksheet.Cell(currentRow, 11).Value = item.storagecapacity;
                                worksheet.Cell(currentRow, 12).Value = item.nooffillings;


                                currentRow++;
                            }
                        }


                        else if (version == 1.4)
                        {
                            List<vw_bs_rainfall_meta_data> abc = new List<vw_bs_rainfall_meta_data>();
                            if (!string.IsNullOrEmpty(State) && State != "0")
                            {
                                var query = AJE.obj_vw_bs_rainfall_meta_data.Where(x => x.statename == State);
                                abc = query.OrderBy(x => x.rf_meta_id).ToList();
                            }
                            var worksheet = workbook.Worksheets.Add("nRainguage");
                            // var worksheet = workbook.Worksheets.Add("Rainguage");

                            string[] headers = {  "State", "District", "Block", "Grampanchyat", "Village Name", "Location Details",
            "Latitude", "Longitude", "Date", "Type of Rain Gauge", "Rainfall (in mm)", "Rainfall Date", "Rainfall ID"};
                            for (int i = 0; i < headers.Length; i++)
                            {
                                worksheet.Cell(1, i + 1).Value = headers[i];
                            }

                            int currentRow = 2;
                            foreach (var item in abc)
                            {
                                worksheet.Cell(currentRow, 1).Value = item.state_name;
                                worksheet.Cell(currentRow, 2).Value = item.district_name;
                                worksheet.Cell(currentRow, 3).Value = item.block_name;
                                worksheet.Cell(currentRow, 4).Value = item.gp_name;
                                worksheet.Cell(currentRow, 5).Value = item.village;
                                worksheet.Cell(currentRow, 6).Value = item.locationdetail;
                                worksheet.Cell(currentRow, 7).Value = item.latitude;
                                worksheet.Cell(currentRow, 8).Value = item.longitude;
                                worksheet.Cell(currentRow, 9).Value = item.date_time;
                                worksheet.Cell(currentRow, 10).Value = item.raingauge;
                                worksheet.Cell(currentRow, 11).Value = item.rf_reading;
                                worksheet.Cell(currentRow, 12).Value = item.rf_date;
                                worksheet.Cell(currentRow, 13).Value = item.rf_meta_id;
                                currentRow++;
                            }
                        }

                        else if (version == 1.5)
                        {
                            List<vw_bs_waterflow_meta_data> abc = new List<vw_bs_waterflow_meta_data>();
                            if (!string.IsNullOrEmpty(State) && State != "0")
                            {
                                var query = AJE.obj_vw_bs_waterflow_meta_data.Where(x => x.State == State);
                                abc = query.OrderBy(x => x.wf_meta_id).ToList();
                            }
                            var worksheet = workbook.Worksheets.Add("Waterflow");
                            //var worksheet = workbook.Worksheets.Add("\r\Waterflow");

                            string[] headers = {   "State", "District", "Block", "Grampanchyat", "Village Name", "Location Details",
            "Latitude", "Longitude", "Date of Entry", "Name of the owner", "Type of Well", "Pump type",
            "Date of Installation of Waterflow meter", "Area Irrigated(ha)", "Date of Water Reading",
            "Meter ID", "Meter Reading", "Unit Of Meter Reading"};
                            for (int i = 0; i < headers.Length; i++)
                            {
                                worksheet.Cell(1, i + 1).Value = headers[i];
                            }

                            int currentRow = 2;
                            foreach (var item in abc)
                            {

                                worksheet.Cell(currentRow, 1).Value = item.state_name;
                                worksheet.Cell(currentRow, 2).Value = item.district_name;
                                worksheet.Cell(currentRow, 3).Value = item.block_name;
                                worksheet.Cell(currentRow, 4).Value = item.gp_name;
                                worksheet.Cell(currentRow, 5).Value = item.Village;
                                worksheet.Cell(currentRow, 6).Value = item.LocationDetails;
                                worksheet.Cell(currentRow, 7).Value = item.Latitude;
                                worksheet.Cell(currentRow, 8).Value = item.Longitude;
                                worksheet.Cell(currentRow, 9).Value = item.DateofEntry;
                                worksheet.Cell(currentRow, 10).Value = item.OwnerName;
                                worksheet.Cell(currentRow, 11).Value = item.WellType;
                                worksheet.Cell(currentRow, 12).Value = item.PumpType;
                                worksheet.Cell(currentRow, 13).Value = item.WaterFlowMeter_Installation_Date;
                                worksheet.Cell(currentRow, 14).Value = item.AreaIrrigated;
                                worksheet.Cell(currentRow, 15).Value = item.WaterReading_Date;
                                worksheet.Cell(currentRow, 16).Value = item.Meterid;
                                worksheet.Cell(currentRow, 17).Value = item.MeterReading;
                                worksheet.Cell(currentRow, 18).Value = item.UnitReading;
                                currentRow++;
                            }
                        }

                        else if (version == 1.6)
                        {
                            List<vw_bs_wellinventory> abc = new List<vw_bs_wellinventory>();
                            if (!string.IsNullOrEmpty(State) && State != "0")
                            {
                                var query = AJE.obj_vw_bs_wellinventory.Where(x => x.state == State);
                                abc = query.OrderBy(x => x.gid).ToList();
                            }
                            var worksheet = workbook.Worksheets.Add("Well Registered");
                            //var worksheet = workbook.Worksheets.Add("\r\Well Registered");

                            string[] headers = {     "State", "District", "Block", "Grampanchayat Name", "Village", "Location Details",
            "Latitude", "Longitude", "Date", "Well ID", "Type of Well", "Other Type of Well",
            "Owner Name", "Diameter of Well (m)", "Depth of Well (mbmp)", "Depth of Water Level (mbmp)",
            "Height of Measuring Point (magi)", "Well Water Portable", "Use (Drinking / Domestic / Irrigation / Both)",
            "Pump Installed", "Volumetric/Electricity Meter Installed"};
                            for (int i = 0; i < headers.Length; i++)
                            {
                                worksheet.Cell(1, i + 1).Value = headers[i];
                            }

                            int currentRow = 2;
                            foreach (var item in abc)
                            {

                                worksheet.Cell(currentRow, 1).Value = item.state_name;
                                worksheet.Cell(currentRow, 2).Value = item.district_name;
                                worksheet.Cell(currentRow, 3).Value = item.block_name;
                                worksheet.Cell(currentRow, 4).Value = item.gp_name;
                                worksheet.Cell(currentRow, 5).Value = item.village;
                                worksheet.Cell(currentRow, 6).Value = item.locationdetails;
                                worksheet.Cell(currentRow, 7).Value = item.latitude;
                                worksheet.Cell(currentRow, 8).Value = item.longitude;
                                worksheet.Cell(currentRow, 9).Value = item.date;
                                worksheet.Cell(currentRow, 10).Value = item.wellno;
                                worksheet.Cell(currentRow, 11).Value = item.welltype;
                                worksheet.Cell(currentRow, 12).Value = item.well_type_other;
                                worksheet.Cell(currentRow, 13).Value = item.ownername;
                                worksheet.Cell(currentRow, 14).Value = item.welldiameter;
                                worksheet.Cell(currentRow, 15).Value = item.welldepth;
                                worksheet.Cell(currentRow, 16).Value = item.waterleveldepth;
                                worksheet.Cell(currentRow, 17).Value = item.measuringpoint;
                                worksheet.Cell(currentRow, 18).Value = item.wellwaterpotable;
                                worksheet.Cell(currentRow, 19).Value = item.use;
                                worksheet.Cell(currentRow, 20).Value = item.pumpinstalled;
                                worksheet.Cell(currentRow, 21).Value = item.electricmeterselecteditem;
                                currentRow++;
                            }
                        }

                        else if (version == 1.7)
                        {
                            List<vw_bs_water_wq_meta_data> abc = new List<vw_bs_water_wq_meta_data>();
                            if (!string.IsNullOrEmpty(State) && State != "0")
                            {
                                var query = AJE.obj_vw_bs_water_wq_meta_data.Where(x => x.state == State);
                                abc = query.OrderBy(x => x.water_qi_meta_id).ToList();
                            }
                            var worksheet = workbook.Worksheets.Add("Water Quality Monitoring");
                            //var worksheet = workbook.Worksheets.Add("Water Quality Monitoring");

                            string[] headers = {  "State", "District", "Block", "Grampanchayat", "Location Details", "Type Of Well",
            "Well Depth", "PH", "Chloride", "Free Chlorine", "Turbidity", "Total Hardness",
            "Alkalinity", "Nitrate", "Fluoride", "Iron", "Arsenic", "EC", "TDS",
            "Bacterial", "Entry Time", "ID", "QI Date", "Entry Time Date", "Well ID" };
                            for (int i = 0; i < headers.Length; i++)
                            {
                                worksheet.Cell(1, i + 1).Value = headers[i];
                            }

                            int currentRow = 2;
                            foreach (var item in abc)
                            {
                                worksheet.Cell(currentRow, 1).Value = item.state_name;
                                worksheet.Cell(currentRow, 2).Value = item.district_name;
                                worksheet.Cell(currentRow, 3).Value = item.block_name;
                                worksheet.Cell(currentRow, 4).Value = item.gp_name;
                                worksheet.Cell(currentRow, 5).Value = item.location_details;
                                worksheet.Cell(currentRow, 6).Value = item.type_of_well;
                                worksheet.Cell(currentRow, 7).Value = item.well_depth_mbgl;
                                worksheet.Cell(currentRow, 8).Value = item.ph;
                                worksheet.Cell(currentRow, 9).Value = item.chloride;
                                worksheet.Cell(currentRow, 10).Value = item.free_chlorine;
                                worksheet.Cell(currentRow, 11).Value = item.turbudity;
                                worksheet.Cell(currentRow, 12).Value = item.total_hardness_mgl;
                                worksheet.Cell(currentRow, 13).Value = item.alkalinity_mgl;
                                worksheet.Cell(currentRow, 14).Value = item.nitrate_mgl;
                                worksheet.Cell(currentRow, 15).Value = item.fluoride_mgl;
                                worksheet.Cell(currentRow, 16).Value = item.iron_mgl;
                                worksheet.Cell(currentRow, 17).Value = item.arsenic_mgl;
                                worksheet.Cell(currentRow, 18).Value = item.ec_us_cm;
                                worksheet.Cell(currentRow, 19).Value = item.tds;
                                worksheet.Cell(currentRow, 20).Value = item.bacterial_test;
                                worksheet.Cell(currentRow, 21).Value = item.entry_time;
                                worksheet.Cell(currentRow, 22).Value = item.water_qi_meta_id;
                                worksheet.Cell(currentRow, 23).Value = item.qi_date;
                                worksheet.Cell(currentRow, 24).Value = item.entry_time_data;
                                worksheet.Cell(currentRow, 25).Value = item.well_id;
                                currentRow++;
                            }
                        }
                    }
                    using (var stream = new MemoryStream())
                    {
                        workbook.SaveAs(stream);
                        var content = stream.ToArray();
                        return File(
                            content,
                            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                            "Data_of_All_State.xlsx");
                    }

                    //using (var memoryStream = new MemoryStream())
                    //{
                    //    package.SaveAs(memoryStream);
                    //    memoryStream.Position = 0;

                    //    var bytes = memoryStream.ToArray();
                    //    return File(bytes, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "Data_of_All_State.xlsx");
                    //}
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return new HttpStatusCodeResult(HttpStatusCode.InternalServerError);
            }
        }



        // For All Districts

        public ActionResult DownloadAllDi(string dist1)
        {
            var District = dist1;
            try
            {
                double[] AllVersion = { 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7 };

                using (var workbook = new XLWorkbook())
                {
                    foreach (var version in AllVersion)
                    {


                        if (version == 1.1)
                        {
                            List<vw_bs_waterlevel_pv_meta_data> abc = new List<vw_bs_waterlevel_pv_meta_data>();
                            if (!string.IsNullOrEmpty(District) && District != "0")
                            {
                                var query = AJE.obj_vw_bs_waterlevel_pv_meta_data.Where(x => x.district == District);
                                abc = query.OrderBy(x => x.gwl_meta_id).ToList();
                            }

                            var worksheet = workbook.Worksheets.Add("WlM Stations");

                            string[] headers = {  "Well ID", "State", "District", "Block", "Grampanchayat", "Village Name", "Location Details",
 "Latitude", "Longitude", "Date", "Type of Well", "Other Well Type", "Ownership Type",
 "Government Source",  "Depth of Well(mbmp)",
 "Ground Water Level(mbgl)", "Ground Water Level Date","Diameter Of Well" };
                            for (int i = 0; i < headers.Length; i++)
                            {
                                worksheet.Cell(1, i + 1).Value = headers[i];
                            }

                            int currentRow = 2;
                            foreach (var item in abc)
                            {

                                worksheet.Cell(currentRow, 1).Value = item.wellid;
                                worksheet.Cell(currentRow, 2).Value = item.state_name;
                                worksheet.Cell(currentRow, 3).Value = item.district_name;
                                worksheet.Cell(currentRow, 4).Value = item.block_name;
                                worksheet.Cell(currentRow, 5).Value = item.gp_name;
                                worksheet.Cell(currentRow, 6).Value = item.sitename;
                                worksheet.Cell(currentRow, 7).Value = item.locationdetails;
                                worksheet.Cell(currentRow, 8).Value = item.latitude;
                                worksheet.Cell(currentRow, 9).Value = item.longitude;
                                worksheet.Cell(currentRow, 10).Value = item.datetime;
                                worksheet.Cell(currentRow, 11).Value = item.typeofwell;
                                worksheet.Cell(currentRow, 12).Value = item.other_well_type;
                                worksheet.Cell(currentRow, 13).Value = item.source_ownership_type;
                                worksheet.Cell(currentRow, 14).Value = item.source_ownership;

                                worksheet.Cell(currentRow, 15).Value = item.welldepth;

                                worksheet.Cell(currentRow, 16).Value = item.gwl_reading;
                                worksheet.Cell(currentRow, 17).Value = item.gwl_date;
                                worksheet.Cell(currentRow, 17).Value = item.diameter_of_well;

                                currentRow++;


                            }
                        }

                        else if (version == 1.2)
                        {
                            List<vw_bs_pv_quality_meta_data> abc = new List<vw_bs_pv_quality_meta_data>();
                            if (!string.IsNullOrEmpty(District) && District != "0")
                            {
                                var query = AJE.obj_vw_bs_pv_quality_meta_data.Where(x => x.district == District);
                                abc = query.OrderBy(x => x.pv_meta_id).ToList();
                            }

                            var worksheet = workbook.Worksheets.Add("WQ Monitoring Stations");

                            string[] headers = {  "State", "District", "Block", "Grampanchayat", "Village Name", "Site Name",
            "Well Type", "Source", "Year", "Well Depth", "Aquifer", "PV Data Year",
            "PH",  "EC(µs/cm)","TDS", "TH(mg/L)","Calcium(mg/L)","Magnesium mg/L","Sodium mg/L",
                    "Potassium mg/L","Carbonate mg/L","Bicarbonate mg/L","Sulphate mg/L","Chloride mg/L","Fluoride mg/L","Nitrate mg/L","Well ID" };
                            for (int i = 0; i < headers.Length; i++)
                            {
                                worksheet.Cell(1, i + 1).Value = headers[i];
                            }

                            int currentRow = 2;
                            foreach (var item in abc)
                            {

                                worksheet.Cell(currentRow, 1).Value = item.state_name;
                                worksheet.Cell(currentRow, 2).Value = item.district_name;
                                worksheet.Cell(currentRow, 3).Value = item.block_name;
                                worksheet.Cell(currentRow, 4).Value = item.gp_name;
                                worksheet.Cell(currentRow, 5).Value = item.village;
                                worksheet.Cell(currentRow, 6).Value = item.site_name;
                                worksheet.Cell(currentRow, 7).Value = item.well_type;
                                worksheet.Cell(currentRow, 8).Value = item.source;
                                worksheet.Cell(currentRow, 9).Value = item.year;
                                worksheet.Cell(currentRow, 10).Value = item.well_depth;
                                worksheet.Cell(currentRow, 11).Value = item.aquifer;
                                worksheet.Cell(currentRow, 12).Value = item.pv_data_year;
                                worksheet.Cell(currentRow, 13).Value = item.ph;
                                worksheet.Cell(currentRow, 14).Value = item.ec;
                                worksheet.Cell(currentRow, 15).Value = item.tds;
                                worksheet.Cell(currentRow, 16).Value = item.th;
                                worksheet.Cell(currentRow, 17).Value = item.calcium;
                                worksheet.Cell(currentRow, 18).Value = item.magnesium;
                                worksheet.Cell(currentRow, 19).Value = item.sodium;
                                worksheet.Cell(currentRow, 20).Value = item.potassium;
                                worksheet.Cell(currentRow, 21).Value = item.carbonate;
                                worksheet.Cell(currentRow, 22).Value = item.bicarbonate;
                                worksheet.Cell(currentRow, 23).Value = item.sulphate;
                                worksheet.Cell(currentRow, 24).Value = item.chloride;
                                worksheet.Cell(currentRow, 25).Value = item.fluoride;
                                worksheet.Cell(currentRow, 26).Value = item.nitrate;
                                worksheet.Cell(currentRow, 27).Value = item.well_id;

                                currentRow++;


                            }
                        }


                        else if (version == 1.3)
                        {
                            List<vw_bs_geo_new> abc = new List<vw_bs_geo_new>();
                            if (!string.IsNullOrEmpty(District) && District != "0")
                            {
                                var query = AJE.obj_vw_bs_geo_new.Where(x => x.districtname == District);
                                abc = query.OrderBy(x => x.id).ToList();
                            }

                            var worksheet = workbook.Worksheets.Add("Artificial Recharge");

                            string[] headers = {  "State", "District", "Block", "Grampanchayat", "Village Name", "Location Details",
            "Latitude", "Longitude", "Date", "Type of structure", "Storage Capacity (Ha m)", "No of Fillings",
             };
                            for (int i = 0; i < headers.Length; i++)
                            {
                                worksheet.Cell(1, i + 1).Value = headers[i];
                            }

                            int currentRow = 2;
                            foreach (var item in abc)
                            {
                                worksheet.Cell(currentRow, 1).Value = item.state_name;
                                worksheet.Cell(currentRow, 2).Value = item.district_name;
                                worksheet.Cell(currentRow, 3).Value = item.block_name;
                                worksheet.Cell(currentRow, 4).Value = item.gp_name;
                                worksheet.Cell(currentRow, 5).Value = item.village;
                                worksheet.Cell(currentRow, 6).Value = item.locationdetail;
                                worksheet.Cell(currentRow, 7).Value = item.latitude;
                                worksheet.Cell(currentRow, 8).Value = item.longitude;
                                worksheet.Cell(currentRow, 9).Value = item.date;
                                worksheet.Cell(currentRow, 10).Value = item.typeofstructure;
                                worksheet.Cell(currentRow, 11).Value = item.storagecapacity;
                                worksheet.Cell(currentRow, 12).Value = item.nooffillings;


                                currentRow++;
                            }
                        }


                        else if (version == 1.4)
                        {
                            List<vw_bs_rainfall_meta_data> abc = new List<vw_bs_rainfall_meta_data>();
                            if (!string.IsNullOrEmpty(District) && District != "0")
                            {
                                var query = AJE.obj_vw_bs_rainfall_meta_data.Where(x => x.districtname == District);
                                abc = query.OrderBy(x => x.rf_meta_id).ToList();
                            }

                            var worksheet = workbook.Worksheets.Add("Rainguage");

                            string[] headers = {  "State", "District", "Block", "Grampanchyat", "Village Name", "Location Details",
            "Latitude", "Longitude", "Date", "Type of Rain Gauge", "Rainfall (in mm)", "Rainfall Date", "Rainfall ID"};
                            for (int i = 0; i < headers.Length; i++)
                            {
                                worksheet.Cell(1, i + 1).Value = headers[i];
                            }

                            int currentRow = 2;
                            foreach (var item in abc)
                            {
                                worksheet.Cell(currentRow, 1).Value = item.state_name;
                                worksheet.Cell(currentRow, 2).Value = item.district_name;
                                worksheet.Cell(currentRow, 3).Value = item.block_name;
                                worksheet.Cell(currentRow, 4).Value = item.gp_name;
                                worksheet.Cell(currentRow, 5).Value = item.village;
                                worksheet.Cell(currentRow, 6).Value = item.locationdetail;
                                worksheet.Cell(currentRow, 7).Value = item.latitude;
                                worksheet.Cell(currentRow, 8).Value = item.longitude;
                                worksheet.Cell(currentRow, 9).Value = item.date_time;
                                worksheet.Cell(currentRow, 10).Value = item.raingauge;
                                worksheet.Cell(currentRow, 11).Value = item.rf_reading;
                                worksheet.Cell(currentRow, 12).Value = item.rf_date;
                                worksheet.Cell(currentRow, 13).Value = item.rf_meta_id;
                                currentRow++;
                            }
                        }

                        else if (version == 1.5)
                        {
                            List<vw_bs_waterflow_meta_data> abc = new List<vw_bs_waterflow_meta_data>();
                            if (!string.IsNullOrEmpty(District) && District != "0")
                            {
                                var query = AJE.obj_vw_bs_waterflow_meta_data.Where(x => x.District == District);
                                abc = query.OrderBy(x => x.wf_meta_id).ToList();
                            }

                            var worksheet = workbook.Worksheets.Add("Waterflow");

                            string[] headers = {   "State", "District", "Block", "Grampanchyat", "Village Name", "Location Details",
            "Latitude", "Longitude", "Date of Entry", "Name of the owner", "Type of Well", "Pump type",
            "Date of Installation of Waterflow meter", "Area Irrigated(ha)", "Date of Water Reading",
            "Meter ID", "Meter Reading", "Unit Of Meter Reading"};
                            for (int i = 0; i < headers.Length; i++)
                            {
                                worksheet.Cell(1, i + 1).Value = headers[i];
                            }

                            int currentRow = 2;
                            foreach (var item in abc)
                            {

                                worksheet.Cell(currentRow, 1).Value = item.state_name;
                                worksheet.Cell(currentRow, 2).Value = item.district_name;
                                worksheet.Cell(currentRow, 3).Value = item.block_name;
                                worksheet.Cell(currentRow, 4).Value = item.gp_name;
                                worksheet.Cell(currentRow, 5).Value = item.Village;
                                worksheet.Cell(currentRow, 6).Value = item.LocationDetails;
                                worksheet.Cell(currentRow, 7).Value = item.Latitude;
                                worksheet.Cell(currentRow, 8).Value = item.Longitude;
                                worksheet.Cell(currentRow, 9).Value = item.DateofEntry;
                                worksheet.Cell(currentRow, 10).Value = item.OwnerName;
                                worksheet.Cell(currentRow, 11).Value = item.WellType;
                                worksheet.Cell(currentRow, 12).Value = item.PumpType;
                                worksheet.Cell(currentRow, 13).Value = item.WaterFlowMeter_Installation_Date;
                                worksheet.Cell(currentRow, 14).Value = item.AreaIrrigated;
                                worksheet.Cell(currentRow, 15).Value = item.WaterReading_Date;
                                worksheet.Cell(currentRow, 16).Value = item.Meterid;
                                worksheet.Cell(currentRow, 17).Value = item.MeterReading;
                                worksheet.Cell(currentRow, 18).Value = item.UnitReading;
                                currentRow++;
                            }
                        }

                        else if (version == 1.6)
                        {
                            List<vw_bs_wellinventory> abc = new List<vw_bs_wellinventory>();
                            if (!string.IsNullOrEmpty(District) && District != "0")
                            {
                                var query = AJE.obj_vw_bs_wellinventory.Where(x => x.district == District);
                                abc = query.OrderBy(x => x.gid).ToList();
                            }

                            var worksheet = workbook.Worksheets.Add("Well Registered");

                            string[] headers = {     "State", "District", "Block", "Grampanchayat Name", "Village", "Location Details",
            "Latitude", "Longitude", "Date", "Well ID", "Type of Well", "Other Type of Well",
            "Owner Name", "Diameter of Well (m)", "Depth of Well (mbmp)", "Depth of Water Level (mbmp)",
            "Height of Measuring Point (magi)", "Well Water Portable", "Use (Drinking / Domestic / Irrigation / Both)",
            "Pump Installed", "Volumetric/Electricity Meter Installed"};
                            for (int i = 0; i < headers.Length; i++)
                            {
                                worksheet.Cell(1, i + 1).Value = headers[i];
                            }

                            int currentRow = 2;
                            foreach (var item in abc)
                            {

                                worksheet.Cell(currentRow, 1).Value = item.state_name;
                                worksheet.Cell(currentRow, 2).Value = item.district_name;
                                worksheet.Cell(currentRow, 3).Value = item.block_name;
                                worksheet.Cell(currentRow, 4).Value = item.gp_name;
                                worksheet.Cell(currentRow, 5).Value = item.village;
                                worksheet.Cell(currentRow, 6).Value = item.locationdetails;
                                worksheet.Cell(currentRow, 7).Value = item.latitude;
                                worksheet.Cell(currentRow, 8).Value = item.longitude;
                                worksheet.Cell(currentRow, 9).Value = item.date;
                                worksheet.Cell(currentRow, 10).Value = item.wellno;
                                worksheet.Cell(currentRow, 11).Value = item.welltype;
                                worksheet.Cell(currentRow, 12).Value = item.well_type_other;
                                worksheet.Cell(currentRow, 13).Value = item.ownername;
                                worksheet.Cell(currentRow, 14).Value = item.welldiameter;
                                worksheet.Cell(currentRow, 15).Value = item.welldepth;
                                worksheet.Cell(currentRow, 16).Value = item.waterleveldepth;
                                worksheet.Cell(currentRow, 17).Value = item.measuringpoint;
                                worksheet.Cell(currentRow, 18).Value = item.wellwaterpotable;
                                worksheet.Cell(currentRow, 19).Value = item.use;
                                worksheet.Cell(currentRow, 20).Value = item.pumpinstalled;
                                worksheet.Cell(currentRow, 21).Value = item.electricmeterselecteditem;
                                currentRow++;
                            }
                        }

                        else if (version == 1.7)
                        {
                            List<vw_bs_water_wq_meta_data> abc = new List<vw_bs_water_wq_meta_data>();
                            if (!string.IsNullOrEmpty(District) && District != "0")
                            {
                                var query = AJE.obj_vw_bs_water_wq_meta_data.Where(x => x.district == District);
                                abc = query.OrderBy(x => x.water_qi_meta_id).ToList();
                            }

                            var worksheet = workbook.Worksheets.Add("Water Quality Monitoring");

                            string[] headers = {  "State", "District", "Block", "Grampanchayat", "Location Details", "Type Of Well",
            "Well Depth", "PH", "Chloride", "Free Chlorine", "Turbidity", "Total Hardness",
            "Alkalinity", "Nitrate", "Fluoride", "Iron", "Arsenic", "EC", "TDS",
            "Bacterial", "Entry Time", "ID", "QI Date", "Entry Time Date", "Well ID" };
                            for (int i = 0; i < headers.Length; i++)
                            {
                                worksheet.Cell(1, i + 1).Value = headers[i];
                            }

                            int currentRow = 2;
                            foreach (var item in abc)
                            {
                                worksheet.Cell(currentRow, 1).Value = item.state_name;
                                worksheet.Cell(currentRow, 2).Value = item.district_name;
                                worksheet.Cell(currentRow, 3).Value = item.block_name;
                                worksheet.Cell(currentRow, 4).Value = item.gp_name;
                                worksheet.Cell(currentRow, 5).Value = item.location_details;
                                worksheet.Cell(currentRow, 6).Value = item.type_of_well;
                                worksheet.Cell(currentRow, 7).Value = item.well_depth_mbgl;
                                worksheet.Cell(currentRow, 8).Value = item.ph;
                                worksheet.Cell(currentRow, 9).Value = item.chloride;
                                worksheet.Cell(currentRow, 10).Value = item.free_chlorine;
                                worksheet.Cell(currentRow, 11).Value = item.turbudity;
                                worksheet.Cell(currentRow, 12).Value = item.total_hardness_mgl;
                                worksheet.Cell(currentRow, 13).Value = item.alkalinity_mgl;
                                worksheet.Cell(currentRow, 14).Value = item.nitrate_mgl;
                                worksheet.Cell(currentRow, 15).Value = item.fluoride_mgl;
                                worksheet.Cell(currentRow, 16).Value = item.iron_mgl;
                                worksheet.Cell(currentRow, 17).Value = item.arsenic_mgl;
                                worksheet.Cell(currentRow, 18).Value = item.ec_us_cm;
                                worksheet.Cell(currentRow, 19).Value = item.tds;
                                worksheet.Cell(currentRow, 20).Value = item.bacterial_test;
                                worksheet.Cell(currentRow, 21).Value = item.entry_time;
                                worksheet.Cell(currentRow, 22).Value = item.water_qi_meta_id;
                                worksheet.Cell(currentRow, 23).Value = item.qi_date;
                                worksheet.Cell(currentRow, 24).Value = item.entry_time_data;
                                worksheet.Cell(currentRow, 25).Value = item.well_id;
                                currentRow++;
                            }
                        }
                    }
                    using (var stream = new MemoryStream())
                    {
                        workbook.SaveAs(stream);
                        var content = stream.ToArray();
                        return File(
                            content,
                            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                            "Data_of_All_District.xlsx");
                    }

                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return new HttpStatusCodeResult(HttpStatusCode.InternalServerError);
            }
        }


        // For All Blocks
        public ActionResult DownloadAllbl(string block1)
        {
            var Block = block1;
            try
            {
                double[] AllVersion = { 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7 };

                using (var workbook = new XLWorkbook())
                {
                    foreach (var version in AllVersion)
                    {


                        if (version == 1.1)
                        {
                            List<vw_bs_waterlevel_pv_meta_data> abc = new List<vw_bs_waterlevel_pv_meta_data>();
                            if (!string.IsNullOrEmpty(Block) && Block != "0")
                            {
                                var query = AJE.obj_vw_bs_waterlevel_pv_meta_data.Where(x => x.block == Block);
                                abc = query.OrderBy(x => x.gwl_meta_id).ToList();
                            }

                            var worksheet = workbook.Worksheets.Add("WlM Stations");

                            string[] headers = {  "Well ID", "State", "District", "Block", "Grampanchayat", "Village Name", "Location Details",
 "Latitude", "Longitude", "Date", "Type of Well", "Other Well Type", "Ownership Type",
 "Government Source",  "Depth of Well(mbmp)",
 "Ground Water Level(mbgl)", "Ground Water Level Date","Diameter Of Well" };
                            for (int i = 0; i < headers.Length; i++)
                            {
                                worksheet.Cell(1, i + 1).Value = headers[i];
                            }

                            int currentRow = 2;
                            foreach (var item in abc)
                            {

                                worksheet.Cell(currentRow, 1).Value = item.wellid;
                                worksheet.Cell(currentRow, 2).Value = item.state_name;
                                worksheet.Cell(currentRow, 3).Value = item.district_name;
                                worksheet.Cell(currentRow, 4).Value = item.block_name;
                                worksheet.Cell(currentRow, 5).Value = item.gp_name;
                                worksheet.Cell(currentRow, 6).Value = item.sitename;
                                worksheet.Cell(currentRow, 7).Value = item.locationdetails;
                                worksheet.Cell(currentRow, 8).Value = item.latitude;
                                worksheet.Cell(currentRow, 9).Value = item.longitude;
                                worksheet.Cell(currentRow, 10).Value = item.datetime;
                                worksheet.Cell(currentRow, 11).Value = item.typeofwell;
                                worksheet.Cell(currentRow, 12).Value = item.other_well_type;
                                worksheet.Cell(currentRow, 13).Value = item.source_ownership_type;
                                worksheet.Cell(currentRow, 14).Value = item.source_ownership;

                                worksheet.Cell(currentRow, 15).Value = item.welldepth;

                                worksheet.Cell(currentRow, 16).Value = item.gwl_reading;
                                worksheet.Cell(currentRow, 17).Value = item.gwl_date;
                                worksheet.Cell(currentRow, 17).Value = item.diameter_of_well;

                                currentRow++;


                            }
                        }

                        else if (version == 1.2)
                        {
                            List<vw_bs_pv_quality_meta_data> abc = new List<vw_bs_pv_quality_meta_data>();
                            if (!string.IsNullOrEmpty(Block) && Block != "0")
                            {
                                var query = AJE.obj_vw_bs_pv_quality_meta_data.Where(x => x.block == Block);
                                abc = query.OrderBy(x => x.pv_meta_id).ToList();
                            }

                            var worksheet = workbook.Worksheets.Add("WQ Monitoring Stations");

                            string[] headers = {  "State", "District", "Block", "Grampanchayat", "Village Name", "Site Name",
            "Well Type", "Source", "Year", "Well Depth", "Aquifer", "PV Data Year",
            "PH",  "EC(µs/cm)","TDS", "TH(mg/L)","Calcium(mg/L)","Magnesium mg/L","Sodium mg/L",
                    "Potassium mg/L","Carbonate mg/L","Bicarbonate mg/L","Sulphate mg/L","Chloride mg/L","Fluoride mg/L","Nitrate mg/L","Well ID" };
                            for (int i = 0; i < headers.Length; i++)
                            {
                                worksheet.Cell(1, i + 1).Value = headers[i];
                            }

                            int currentRow = 2;
                            foreach (var item in abc)
                            {

                                worksheet.Cell(currentRow, 1).Value = item.state_name;
                                worksheet.Cell(currentRow, 2).Value = item.district_name;
                                worksheet.Cell(currentRow, 3).Value = item.block_name;
                                worksheet.Cell(currentRow, 4).Value = item.gp_name;
                                worksheet.Cell(currentRow, 5).Value = item.village;
                                worksheet.Cell(currentRow, 6).Value = item.site_name;
                                worksheet.Cell(currentRow, 7).Value = item.well_type;
                                worksheet.Cell(currentRow, 8).Value = item.source;
                                worksheet.Cell(currentRow, 9).Value = item.year;
                                worksheet.Cell(currentRow, 10).Value = item.well_depth;
                                worksheet.Cell(currentRow, 11).Value = item.aquifer;
                                worksheet.Cell(currentRow, 12).Value = item.pv_data_year;
                                worksheet.Cell(currentRow, 13).Value = item.ph;
                                worksheet.Cell(currentRow, 14).Value = item.ec;
                                worksheet.Cell(currentRow, 15).Value = item.tds;
                                worksheet.Cell(currentRow, 16).Value = item.th;
                                worksheet.Cell(currentRow, 17).Value = item.calcium;
                                worksheet.Cell(currentRow, 18).Value = item.magnesium;
                                worksheet.Cell(currentRow, 19).Value = item.sodium;
                                worksheet.Cell(currentRow, 20).Value = item.potassium;
                                worksheet.Cell(currentRow, 21).Value = item.carbonate;
                                worksheet.Cell(currentRow, 22).Value = item.bicarbonate;
                                worksheet.Cell(currentRow, 23).Value = item.sulphate;
                                worksheet.Cell(currentRow, 24).Value = item.chloride;
                                worksheet.Cell(currentRow, 25).Value = item.fluoride;
                                worksheet.Cell(currentRow, 26).Value = item.nitrate;
                                worksheet.Cell(currentRow, 27).Value = item.well_id;

                                currentRow++;


                            }
                        }


                        else if (version == 1.3)
                        {
                            List<vw_bs_geo_new> abc = new List<vw_bs_geo_new>();
                            if (!string.IsNullOrEmpty(Block) && Block != "0")
                            {
                                var query = AJE.obj_vw_bs_geo_new.Where(x => x.blockname == Block);
                                abc = query.OrderBy(x => x.id).ToList();
                            }

                            var worksheet = workbook.Worksheets.Add("Artificial Recharge");

                            string[] headers = {  "State", "District", "Block", "Grampanchayat", "Village Name", "Location Details",
            "Latitude", "Longitude", "Date", "Type of structure", "Storage Capacity (Ha m)", "No of Fillings",
             };
                            for (int i = 0; i < headers.Length; i++)
                            {
                                worksheet.Cell(1, i + 1).Value = headers[i];
                            }

                            int currentRow = 2;
                            foreach (var item in abc)
                            {
                                worksheet.Cell(currentRow, 1).Value = item.state_name;
                                worksheet.Cell(currentRow, 2).Value = item.district_name;
                                worksheet.Cell(currentRow, 3).Value = item.block_name;
                                worksheet.Cell(currentRow, 4).Value = item.gp_name;
                                worksheet.Cell(currentRow, 5).Value = item.village;
                                worksheet.Cell(currentRow, 6).Value = item.locationdetail;
                                worksheet.Cell(currentRow, 7).Value = item.latitude;
                                worksheet.Cell(currentRow, 8).Value = item.longitude;
                                worksheet.Cell(currentRow, 9).Value = item.date;
                                worksheet.Cell(currentRow, 10).Value = item.typeofstructure;
                                worksheet.Cell(currentRow, 11).Value = item.storagecapacity;
                                worksheet.Cell(currentRow, 12).Value = item.nooffillings;


                                currentRow++;
                            }
                        }


                        else if (version == 1.4)
                        {
                            List<vw_bs_rainfall_meta_data> abc = new List<vw_bs_rainfall_meta_data>();
                            if (!string.IsNullOrEmpty(Block) && Block != "0")
                            {
                                var query = AJE.obj_vw_bs_rainfall_meta_data.Where(x => x.blockname == Block);
                                abc = query.OrderBy(x => x.rf_meta_id).ToList();
                            }

                            var worksheet = workbook.Worksheets.Add("Rainguage");

                            string[] headers = {  "State", "District", "Block", "Grampanchyat", "Village Name", "Location Details",
            "Latitude", "Longitude", "Date", "Type of Rain Gauge", "Rainfall (in mm)", "Rainfall Date", "Rainfall ID"};
                            for (int i = 0; i < headers.Length; i++)
                            {
                                worksheet.Cell(1, i + 1).Value = headers[i];
                            }

                            int currentRow = 2;
                            foreach (var item in abc)
                            {
                                worksheet.Cell(currentRow, 1).Value = item.state_name;
                                worksheet.Cell(currentRow, 2).Value = item.district_name;
                                worksheet.Cell(currentRow, 3).Value = item.block_name;
                                worksheet.Cell(currentRow, 4).Value = item.gp_name;
                                worksheet.Cell(currentRow, 5).Value = item.village;
                                worksheet.Cell(currentRow, 6).Value = item.locationdetail;
                                worksheet.Cell(currentRow, 7).Value = item.latitude;
                                worksheet.Cell(currentRow, 8).Value = item.longitude;
                                worksheet.Cell(currentRow, 9).Value = item.date_time;
                                worksheet.Cell(currentRow, 10).Value = item.raingauge;
                                worksheet.Cell(currentRow, 11).Value = item.rf_reading;
                                worksheet.Cell(currentRow, 12).Value = item.rf_date;
                                worksheet.Cell(currentRow, 13).Value = item.rf_meta_id;
                                currentRow++;
                            }
                        }

                        else if (version == 1.5)
                        {
                            List<vw_bs_waterflow_meta_data> abc = new List<vw_bs_waterflow_meta_data>();
                            if (!string.IsNullOrEmpty(Block) && Block != "0")
                            {
                                var query = AJE.obj_vw_bs_waterflow_meta_data.Where(x => x.Block == Block);
                                abc = query.OrderBy(x => x.wf_meta_id).ToList();
                            }

                            var worksheet = workbook.Worksheets.Add("Waterflow");

                            string[] headers = {   "State", "District", "Block", "Grampanchyat", "Village Name", "Location Details",
            "Latitude", "Longitude", "Date of Entry", "Name of the owner", "Type of Well", "Pump type",
            "Date of Installation of Waterflow meter", "Area Irrigated(ha)", "Date of Water Reading",
            "Meter ID", "Meter Reading", "Unit Of Meter Reading"};
                            for (int i = 0; i < headers.Length; i++)
                            {
                                worksheet.Cell(1, i + 1).Value = headers[i];
                            }

                            int currentRow = 2;
                            foreach (var item in abc)
                            {

                                worksheet.Cell(currentRow, 1).Value = item.state_name;
                                worksheet.Cell(currentRow, 2).Value = item.district_name;
                                worksheet.Cell(currentRow, 3).Value = item.block_name;
                                worksheet.Cell(currentRow, 4).Value = item.gp_name;
                                worksheet.Cell(currentRow, 5).Value = item.Village;
                                worksheet.Cell(currentRow, 6).Value = item.LocationDetails;
                                worksheet.Cell(currentRow, 7).Value = item.Latitude;
                                worksheet.Cell(currentRow, 8).Value = item.Longitude;
                                worksheet.Cell(currentRow, 9).Value = item.DateofEntry;
                                worksheet.Cell(currentRow, 10).Value = item.OwnerName;
                                worksheet.Cell(currentRow, 11).Value = item.WellType;
                                worksheet.Cell(currentRow, 12).Value = item.PumpType;
                                worksheet.Cell(currentRow, 13).Value = item.WaterFlowMeter_Installation_Date;
                                worksheet.Cell(currentRow, 14).Value = item.AreaIrrigated;
                                worksheet.Cell(currentRow, 15).Value = item.WaterReading_Date;
                                worksheet.Cell(currentRow, 16).Value = item.Meterid;
                                worksheet.Cell(currentRow, 17).Value = item.MeterReading;
                                worksheet.Cell(currentRow, 18).Value = item.UnitReading;
                                currentRow++;
                            }
                        }

                        else if (version == 1.6)
                        {
                            List<vw_bs_wellinventory> abc = new List<vw_bs_wellinventory>();
                            if (!string.IsNullOrEmpty(Block) && Block != "0")
                            {
                                var query = AJE.obj_vw_bs_wellinventory.Where(x => x.block == Block);
                                abc = query.OrderBy(x => x.gid).ToList();
                            }

                            var worksheet = workbook.Worksheets.Add("Well Registered");

                            string[] headers = {     "State", "District", "Block", "Grampanchayat Name", "Village", "Location Details",
            "Latitude", "Longitude", "Date", "Well ID", "Type of Well", "Other Type of Well",
            "Owner Name", "Diameter of Well (m)", "Depth of Well (mbmp)", "Depth of Water Level (mbmp)",
            "Height of Measuring Point (magi)", "Well Water Portable", "Use (Drinking / Domestic / Irrigation / Both)",
            "Pump Installed", "Volumetric/Electricity Meter Installed"};
                            for (int i = 0; i < headers.Length; i++)
                            {
                                worksheet.Cell(1, i + 1).Value = headers[i];
                            }

                            int currentRow = 2;
                            foreach (var item in abc)
                            {

                                worksheet.Cell(currentRow, 1).Value = item.state_name;
                                worksheet.Cell(currentRow, 2).Value = item.district_name;
                                worksheet.Cell(currentRow, 3).Value = item.block_name;
                                worksheet.Cell(currentRow, 4).Value = item.gp_name;
                                worksheet.Cell(currentRow, 5).Value = item.village;
                                worksheet.Cell(currentRow, 6).Value = item.locationdetails;
                                worksheet.Cell(currentRow, 7).Value = item.latitude;
                                worksheet.Cell(currentRow, 8).Value = item.longitude;
                                worksheet.Cell(currentRow, 9).Value = item.date;
                                worksheet.Cell(currentRow, 10).Value = item.wellno;
                                worksheet.Cell(currentRow, 11).Value = item.welltype;
                                worksheet.Cell(currentRow, 12).Value = item.well_type_other;
                                worksheet.Cell(currentRow, 13).Value = item.ownername;
                                worksheet.Cell(currentRow, 14).Value = item.welldiameter;
                                worksheet.Cell(currentRow, 15).Value = item.welldepth;
                                worksheet.Cell(currentRow, 16).Value = item.waterleveldepth;
                                worksheet.Cell(currentRow, 17).Value = item.measuringpoint;
                                worksheet.Cell(currentRow, 18).Value = item.wellwaterpotable;
                                worksheet.Cell(currentRow, 19).Value = item.use;
                                worksheet.Cell(currentRow, 20).Value = item.pumpinstalled;
                                worksheet.Cell(currentRow, 21).Value = item.electricmeterselecteditem;
                                currentRow++;
                            }
                        }

                        else if (version == 1.7)
                        {
                            List<vw_bs_water_wq_meta_data> abc = new List<vw_bs_water_wq_meta_data>();
                            if (!string.IsNullOrEmpty(Block) && Block != "0")
                            {
                                var query = AJE.obj_vw_bs_water_wq_meta_data.Where(x => x.block == Block);
                                abc = query.OrderBy(x => x.water_qi_meta_id).ToList();
                            }

                            var worksheet = workbook.Worksheets.Add("Water Quality Monitoring");

                            string[] headers = {  "State", "District", "Block", "Grampanchayat", "Location Details", "Type Of Well",
            "Well Depth", "PH", "Chloride", "Free Chlorine", "Turbidity", "Total Hardness",
            "Alkalinity", "Nitrate", "Fluoride", "Iron", "Arsenic", "EC", "TDS",
            "Bacterial", "Entry Time", "ID", "QI Date", "Entry Time Date", "Well ID" };
                            for (int i = 0; i < headers.Length; i++)
                            {
                                worksheet.Cell(1, i + 1).Value = headers[i];
                            }

                            int currentRow = 2;
                            foreach (var item in abc)
                            {
                                worksheet.Cell(currentRow, 1).Value = item.state_name;
                                worksheet.Cell(currentRow, 2).Value = item.district_name;
                                worksheet.Cell(currentRow, 3).Value = item.block_name;
                                worksheet.Cell(currentRow, 4).Value = item.gp_name;
                                worksheet.Cell(currentRow, 5).Value = item.location_details;
                                worksheet.Cell(currentRow, 6).Value = item.type_of_well;
                                worksheet.Cell(currentRow, 7).Value = item.well_depth_mbgl;
                                worksheet.Cell(currentRow, 8).Value = item.ph;
                                worksheet.Cell(currentRow, 9).Value = item.chloride;
                                worksheet.Cell(currentRow, 10).Value = item.free_chlorine;
                                worksheet.Cell(currentRow, 11).Value = item.turbudity;
                                worksheet.Cell(currentRow, 12).Value = item.total_hardness_mgl;
                                worksheet.Cell(currentRow, 13).Value = item.alkalinity_mgl;
                                worksheet.Cell(currentRow, 14).Value = item.nitrate_mgl;
                                worksheet.Cell(currentRow, 15).Value = item.fluoride_mgl;
                                worksheet.Cell(currentRow, 16).Value = item.iron_mgl;
                                worksheet.Cell(currentRow, 17).Value = item.arsenic_mgl;
                                worksheet.Cell(currentRow, 18).Value = item.ec_us_cm;
                                worksheet.Cell(currentRow, 19).Value = item.tds;
                                worksheet.Cell(currentRow, 20).Value = item.bacterial_test;
                                worksheet.Cell(currentRow, 21).Value = item.entry_time;
                                worksheet.Cell(currentRow, 22).Value = item.water_qi_meta_id;
                                worksheet.Cell(currentRow, 23).Value = item.qi_date;
                                worksheet.Cell(currentRow, 24).Value = item.entry_time_data;
                                worksheet.Cell(currentRow, 25).Value = item.well_id;
                                currentRow++;
                            }
                        }
                    }
                    using (var stream = new MemoryStream())
                    {
                        workbook.SaveAs(stream);
                        var content = stream.ToArray();
                        return File(
                            content,
                            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                            "Data_of_All_Block.xlsx");
                    }

                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return new HttpStatusCodeResult(HttpStatusCode.InternalServerError);
            }
        }



        //DownloadAllGP

        public ActionResult DownloadAllGP(string GP1)
        {
            var GP = GP1;
            try
            {
                double[] AllVersion = { 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7 };

                using (var workbook = new XLWorkbook())
                {
                    foreach (var version in AllVersion)
                    {


                        if (version == 1.1)
                        {
                            List<vw_bs_waterlevel_pv_meta_data> abc = new List<vw_bs_waterlevel_pv_meta_data>();
                            if (!string.IsNullOrEmpty(GP) && GP != "0")
                            {
                                var query = AJE.obj_vw_bs_waterlevel_pv_meta_data.Where(x => x.grampanchayat == GP);
                                abc = query.OrderBy(x => x.gwl_meta_id).ToList();
                            }

                            var worksheet = workbook.Worksheets.Add("WlM Stations");

                            string[] headers = {  "Well ID", "State", "District", "Block", "Grampanchayat", "Village Name", "Location Details",
 "Latitude", "Longitude", "Date", "Type of Well", "Other Well Type", "Ownership Type",
 "Government Source",  "Depth of Well(mbmp)",
 "Ground Water Level(mbgl)", "Ground Water Level Date","Diameter Of Well" };
                            for (int i = 0; i < headers.Length; i++)
                            {
                                worksheet.Cell(1, i + 1).Value = headers[i];
                            }

                            int currentRow = 2;
                            foreach (var item in abc)
                            {

                                worksheet.Cell(currentRow, 1).Value = item.wellid;
                                worksheet.Cell(currentRow, 2).Value = item.state_name;
                                worksheet.Cell(currentRow, 3).Value = item.district_name;
                                worksheet.Cell(currentRow, 4).Value = item.block_name;
                                worksheet.Cell(currentRow, 5).Value = item.gp_name;
                                worksheet.Cell(currentRow, 6).Value = item.sitename;
                                worksheet.Cell(currentRow, 7).Value = item.locationdetails;
                                worksheet.Cell(currentRow, 8).Value = item.latitude;
                                worksheet.Cell(currentRow, 9).Value = item.longitude;
                                worksheet.Cell(currentRow, 10).Value = item.datetime;
                                worksheet.Cell(currentRow, 11).Value = item.typeofwell;
                                worksheet.Cell(currentRow, 12).Value = item.other_well_type;
                                worksheet.Cell(currentRow, 13).Value = item.source_ownership_type;
                                worksheet.Cell(currentRow, 14).Value = item.source_ownership;

                                worksheet.Cell(currentRow, 15).Value = item.welldepth;

                                worksheet.Cell(currentRow, 16).Value = item.gwl_reading;
                                worksheet.Cell(currentRow, 17).Value = item.gwl_date;
                                worksheet.Cell(currentRow, 17).Value = item.diameter_of_well;

                                currentRow++;


                            }
                        }

                        else if (version == 1.2)
                        {
                            List<vw_bs_pv_quality_meta_data> abc = new List<vw_bs_pv_quality_meta_data>();
                            if (!string.IsNullOrEmpty(GP) && GP != "0")
                            {
                                var query = AJE.obj_vw_bs_pv_quality_meta_data.Where(x => x.gp == GP);
                                abc = query.OrderBy(x => x.pv_meta_id).ToList();
                            }

                            var worksheet = workbook.Worksheets.Add("WQ Monitoring Stations");

                            string[] headers = {  "State", "District", "Block", "Grampanchayat", "Village Name", "Site Name",
            "Well Type", "Source", "Year", "Well Depth", "Aquifer", "PV Data Year",
            "PH",  "EC(µs/cm)","TDS", "TH(mg/L)","Calcium(mg/L)","Magnesium mg/L","Sodium mg/L",
                    "Potassium mg/L","Carbonate mg/L","Bicarbonate mg/L","Sulphate mg/L","Chloride mg/L","Fluoride mg/L","Nitrate mg/L","Well ID" };
                            for (int i = 0; i < headers.Length; i++)
                            {
                                worksheet.Cell(1, i + 1).Value = headers[i];
                            }

                            int currentRow = 2;
                            foreach (var item in abc)
                            {

                                worksheet.Cell(currentRow, 1).Value = item.state_name;
                                worksheet.Cell(currentRow, 2).Value = item.district_name;
                                worksheet.Cell(currentRow, 3).Value = item.block_name;
                                worksheet.Cell(currentRow, 4).Value = item.gp_name;
                                worksheet.Cell(currentRow, 5).Value = item.village;
                                worksheet.Cell(currentRow, 6).Value = item.site_name;
                                worksheet.Cell(currentRow, 7).Value = item.well_type;
                                worksheet.Cell(currentRow, 8).Value = item.source;
                                worksheet.Cell(currentRow, 9).Value = item.year;
                                worksheet.Cell(currentRow, 10).Value = item.well_depth;
                                worksheet.Cell(currentRow, 11).Value = item.aquifer;
                                worksheet.Cell(currentRow, 12).Value = item.pv_data_year;
                                worksheet.Cell(currentRow, 13).Value = item.ph;
                                worksheet.Cell(currentRow, 14).Value = item.ec;
                                worksheet.Cell(currentRow, 15).Value = item.tds;
                                worksheet.Cell(currentRow, 16).Value = item.th;
                                worksheet.Cell(currentRow, 17).Value = item.calcium;
                                worksheet.Cell(currentRow, 18).Value = item.magnesium;
                                worksheet.Cell(currentRow, 19).Value = item.sodium;
                                worksheet.Cell(currentRow, 20).Value = item.potassium;
                                worksheet.Cell(currentRow, 21).Value = item.carbonate;
                                worksheet.Cell(currentRow, 22).Value = item.bicarbonate;
                                worksheet.Cell(currentRow, 23).Value = item.sulphate;
                                worksheet.Cell(currentRow, 24).Value = item.chloride;
                                worksheet.Cell(currentRow, 25).Value = item.fluoride;
                                worksheet.Cell(currentRow, 26).Value = item.nitrate;
                                worksheet.Cell(currentRow, 27).Value = item.well_id;

                                currentRow++;


                            }
                        }


                        else if (version == 1.3)
                        {
                            List<vw_bs_geo_new> abc = new List<vw_bs_geo_new>();
                            if (!string.IsNullOrEmpty(GP) && GP != "0")
                            {
                                var query = AJE.obj_vw_bs_geo_new.Where(x => x.gpname == GP);
                                abc = query.OrderBy(x => x.id).ToList();
                            }

                            var worksheet = workbook.Worksheets.Add("Artificial Recharge");

                            string[] headers = {  "State", "District", "Block", "Grampanchayat", "Village Name", "Location Details",
            "Latitude", "Longitude", "Date", "Type of structure", "Storage Capacity (Ha m)", "No of Fillings",
             };
                            for (int i = 0; i < headers.Length; i++)
                            {
                                worksheet.Cell(1, i + 1).Value = headers[i];
                            }

                            int currentRow = 2;
                            foreach (var item in abc)
                            {
                                worksheet.Cell(currentRow, 1).Value = item.state_name;
                                worksheet.Cell(currentRow, 2).Value = item.district_name;
                                worksheet.Cell(currentRow, 3).Value = item.block_name;
                                worksheet.Cell(currentRow, 4).Value = item.gp_name;
                                worksheet.Cell(currentRow, 5).Value = item.village;
                                worksheet.Cell(currentRow, 6).Value = item.locationdetail;
                                worksheet.Cell(currentRow, 7).Value = item.latitude;
                                worksheet.Cell(currentRow, 8).Value = item.longitude;
                                worksheet.Cell(currentRow, 9).Value = item.date;
                                worksheet.Cell(currentRow, 10).Value = item.typeofstructure;
                                worksheet.Cell(currentRow, 11).Value = item.storagecapacity;
                                worksheet.Cell(currentRow, 12).Value = item.nooffillings;


                                currentRow++;
                            }
                        }


                        else if (version == 1.4)
                        {
                            List<vw_bs_rainfall_meta_data> abc = new List<vw_bs_rainfall_meta_data>();
                            if (!string.IsNullOrEmpty(GP) && GP != "0")
                            {
                                var query = AJE.obj_vw_bs_rainfall_meta_data.Where(x => x.gpname == GP);
                                abc = query.OrderBy(x => x.rf_meta_id).ToList();
                            }

                            var worksheet = workbook.Worksheets.Add("Rainguage");

                            string[] headers = {  "State", "District", "Block", "Grampanchyat", "Village Name", "Location Details",
            "Latitude", "Longitude", "Date", "Type of Rain Gauge", "Rainfall (in mm)", "Rainfall Date", "Rainfall ID"};
                            for (int i = 0; i < headers.Length; i++)
                            {
                                worksheet.Cell(1, i + 1).Value = headers[i];
                            }

                            int currentRow = 2;
                            foreach (var item in abc)
                            {
                                worksheet.Cell(currentRow, 1).Value = item.state_name;
                                worksheet.Cell(currentRow, 2).Value = item.district_name;
                                worksheet.Cell(currentRow, 3).Value = item.block_name;
                                worksheet.Cell(currentRow, 4).Value = item.gp_name;
                                worksheet.Cell(currentRow, 5).Value = item.village;
                                worksheet.Cell(currentRow, 6).Value = item.locationdetail;
                                worksheet.Cell(currentRow, 7).Value = item.latitude;
                                worksheet.Cell(currentRow, 8).Value = item.longitude;
                                worksheet.Cell(currentRow, 9).Value = item.date_time;
                                worksheet.Cell(currentRow, 10).Value = item.raingauge;
                                worksheet.Cell(currentRow, 11).Value = item.rf_reading;
                                worksheet.Cell(currentRow, 12).Value = item.rf_date;
                                worksheet.Cell(currentRow, 13).Value = item.rf_meta_id;
                                currentRow++;
                            }
                        }

                        else if (version == 1.5)
                        {
                            List<vw_bs_waterflow_meta_data> abc = new List<vw_bs_waterflow_meta_data>();
                            if (!string.IsNullOrEmpty(GP) && GP != "0")
                            {
                                var query = AJE.obj_vw_bs_waterflow_meta_data.Where(x => x.GramPanchayat == GP);
                                abc = query.OrderBy(x => x.wf_meta_id).ToList();
                            }

                            var worksheet = workbook.Worksheets.Add("Waterflow");

                            string[] headers = {   "State", "District", "Block", "Grampanchyat", "Village Name", "Location Details",
            "Latitude", "Longitude", "Date of Entry", "Name of the owner", "Type of Well", "Pump type",
            "Date of Installation of Waterflow meter", "Area Irrigated(ha)", "Date of Water Reading",
            "Meter ID", "Meter Reading", "Unit Of Meter Reading"};
                            for (int i = 0; i < headers.Length; i++)
                            {
                                worksheet.Cell(1, i + 1).Value = headers[i];
                            }

                            int currentRow = 2;
                            foreach (var item in abc)
                            {

                                worksheet.Cell(currentRow, 1).Value = item.state_name;
                                worksheet.Cell(currentRow, 2).Value = item.district_name;
                                worksheet.Cell(currentRow, 3).Value = item.block_name;
                                worksheet.Cell(currentRow, 4).Value = item.gp_name;
                                worksheet.Cell(currentRow, 5).Value = item.Village;
                                worksheet.Cell(currentRow, 6).Value = item.LocationDetails;
                                worksheet.Cell(currentRow, 7).Value = item.Latitude;
                                worksheet.Cell(currentRow, 8).Value = item.Longitude;
                                worksheet.Cell(currentRow, 9).Value = item.DateofEntry;
                                worksheet.Cell(currentRow, 10).Value = item.OwnerName;
                                worksheet.Cell(currentRow, 11).Value = item.WellType;
                                worksheet.Cell(currentRow, 12).Value = item.PumpType;
                                worksheet.Cell(currentRow, 13).Value = item.WaterFlowMeter_Installation_Date;
                                worksheet.Cell(currentRow, 14).Value = item.AreaIrrigated;
                                worksheet.Cell(currentRow, 15).Value = item.WaterReading_Date;
                                worksheet.Cell(currentRow, 16).Value = item.Meterid;
                                worksheet.Cell(currentRow, 17).Value = item.MeterReading;
                                worksheet.Cell(currentRow, 18).Value = item.UnitReading;
                                currentRow++;
                            }
                        }

                        else if (version == 1.6)
                        {
                            List<vw_bs_wellinventory> abc = new List<vw_bs_wellinventory>();
                            if (!string.IsNullOrEmpty(GP) && GP != "0")
                            {
                                var query = AJE.obj_vw_bs_wellinventory.Where(x => x.gp == GP);
                                abc = query.OrderBy(x => x.gid).ToList();
                            }

                            var worksheet = workbook.Worksheets.Add("Well Registered");

                            string[] headers = {     "State", "District", "Block", "Grampanchayat Name", "Village", "Location Details",
            "Latitude", "Longitude", "Date", "Well ID", "Type of Well", "Other Type of Well",
            "Owner Name", "Diameter of Well (m)", "Depth of Well (mbmp)", "Depth of Water Level (mbmp)",
            "Height of Measuring Point (magi)", "Well Water Portable", "Use (Drinking / Domestic / Irrigation / Both)",
            "Pump Installed", "Volumetric/Electricity Meter Installed"};
                            for (int i = 0; i < headers.Length; i++)
                            {
                                worksheet.Cell(1, i + 1).Value = headers[i];
                            }

                            int currentRow = 2;
                            foreach (var item in abc)
                            {

                                worksheet.Cell(currentRow, 1).Value = item.state_name;
                                worksheet.Cell(currentRow, 2).Value = item.district_name;
                                worksheet.Cell(currentRow, 3).Value = item.block_name;
                                worksheet.Cell(currentRow, 4).Value = item.gp_name;
                                worksheet.Cell(currentRow, 5).Value = item.village;
                                worksheet.Cell(currentRow, 6).Value = item.locationdetails;
                                worksheet.Cell(currentRow, 7).Value = item.latitude;
                                worksheet.Cell(currentRow, 8).Value = item.longitude;
                                worksheet.Cell(currentRow, 9).Value = item.date;
                                worksheet.Cell(currentRow, 10).Value = item.wellno;
                                worksheet.Cell(currentRow, 11).Value = item.welltype;
                                worksheet.Cell(currentRow, 12).Value = item.well_type_other;
                                worksheet.Cell(currentRow, 13).Value = item.ownername;
                                worksheet.Cell(currentRow, 14).Value = item.welldiameter;
                                worksheet.Cell(currentRow, 15).Value = item.welldepth;
                                worksheet.Cell(currentRow, 16).Value = item.waterleveldepth;
                                worksheet.Cell(currentRow, 17).Value = item.measuringpoint;
                                worksheet.Cell(currentRow, 18).Value = item.wellwaterpotable;
                                worksheet.Cell(currentRow, 19).Value = item.use;
                                worksheet.Cell(currentRow, 20).Value = item.pumpinstalled;
                                worksheet.Cell(currentRow, 21).Value = item.electricmeterselecteditem;
                                currentRow++;
                            }
                        }

                        else if (version == 1.7)
                        {
                            List<vw_bs_water_wq_meta_data> abc = new List<vw_bs_water_wq_meta_data>();
                            if (!string.IsNullOrEmpty(GP) && GP != "0")
                            {
                                var query = AJE.obj_vw_bs_water_wq_meta_data.Where(x => x.gp == GP);
                                abc = query.OrderBy(x => x.water_qi_meta_id).ToList();
                            }

                            var worksheet = workbook.Worksheets.Add("Water Quality Monitoring");

                            string[] headers = {  "State", "District", "Block", "Grampanchayat", "Location Details", "Type Of Well",
            "Well Depth", "PH", "Chloride", "Free Chlorine", "Turbidity", "Total Hardness",
            "Alkalinity", "Nitrate", "Fluoride", "Iron", "Arsenic", "EC", "TDS",
            "Bacterial", "Entry Time", "ID", "QI Date", "Entry Time Date", "Well ID" };
                            for (int i = 0; i < headers.Length; i++)
                            {
                                worksheet.Cell(1, i + 1).Value = headers[i];
                            }

                            int currentRow = 2;
                            foreach (var item in abc)
                            {
                                worksheet.Cell(currentRow, 1).Value = item.state_name;
                                worksheet.Cell(currentRow, 2).Value = item.district_name;
                                worksheet.Cell(currentRow, 3).Value = item.block_name;
                                worksheet.Cell(currentRow, 4).Value = item.gp_name;
                                worksheet.Cell(currentRow, 5).Value = item.location_details;
                                worksheet.Cell(currentRow, 6).Value = item.type_of_well;
                                worksheet.Cell(currentRow, 7).Value = item.well_depth_mbgl;
                                worksheet.Cell(currentRow, 8).Value = item.ph;
                                worksheet.Cell(currentRow, 9).Value = item.chloride;
                                worksheet.Cell(currentRow, 10).Value = item.free_chlorine;
                                worksheet.Cell(currentRow, 11).Value = item.turbudity;
                                worksheet.Cell(currentRow, 12).Value = item.total_hardness_mgl;
                                worksheet.Cell(currentRow, 13).Value = item.alkalinity_mgl;
                                worksheet.Cell(currentRow, 14).Value = item.nitrate_mgl;
                                worksheet.Cell(currentRow, 15).Value = item.fluoride_mgl;
                                worksheet.Cell(currentRow, 16).Value = item.iron_mgl;
                                worksheet.Cell(currentRow, 17).Value = item.arsenic_mgl;
                                worksheet.Cell(currentRow, 18).Value = item.ec_us_cm;
                                worksheet.Cell(currentRow, 19).Value = item.tds;
                                worksheet.Cell(currentRow, 20).Value = item.bacterial_test;
                                worksheet.Cell(currentRow, 21).Value = item.entry_time;
                                worksheet.Cell(currentRow, 22).Value = item.water_qi_meta_id;
                                worksheet.Cell(currentRow, 23).Value = item.qi_date;
                                worksheet.Cell(currentRow, 24).Value = item.entry_time_data;
                                worksheet.Cell(currentRow, 25).Value = item.well_id;
                                currentRow++;
                            }
                        }
                    }
                    using (var stream = new MemoryStream())
                    {
                        workbook.SaveAs(stream);
                        var content = stream.ToArray();
                        return File(
                            content,
                            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                            "Data_of_All_GP.xlsx");
                    }

                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return new HttpStatusCodeResult(HttpStatusCode.InternalServerError);
            }
        }



        //

        public ActionResult WSP_Excel_combined(string State, string Dist, string Block, string Gram)
        {
            FileContentResult robj;
            try
            {

                List<abhy_mis_wsp_approved> ddetails = new List<abhy_mis_wsp_approved>();
                //if (Session["UserId"] != null)
                //{
                List<abhy_mis_wsp_approved> Data = new List<abhy_mis_wsp_approved>();
                if (State != null && State != "0" && Dist != null && Dist != "0" && Block != null && Block != "0" && Gram != null && Gram != "0")
                {
                    Data = ABE.obj_abhy_mis_wsp_approved.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();
                }
                else if (State != null && State != "0" && Dist != null && Dist != "0" && Block != null && Block != "0")
                {
                    Data = ABE.obj_abhy_mis_wsp_approved.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();
                }
                else if (State != null && State != "0" && Dist != null && Dist != "0")
                {
                    Data = ABE.obj_abhy_mis_wsp_approved.Where(x => x.state_name == State && x.district_name == Dist).ToList();
                }
                else if (State != null && State != "0")
                {
                    Data = ABE.obj_abhy_mis_wsp_approved.Where(x => x.state_name == State).ToList();
                }
                else
                {
                    Data = ABE.obj_abhy_mis_wsp_approved.Where(x => x.state_name != "Delhi_7").ToList();
                }

                using (var workbook = new XLWorkbook())
                {
                    var worksheet = workbook.Worksheets.Add("GP (Basic Hydrology Info)");
                    var currentRow = 1;
                    worksheet.Cell(currentRow, 1).Value = "State";
                    worksheet.Cell(currentRow, 2).Value = "District";
                    worksheet.Cell(currentRow, 3).Value = "Block";
                    worksheet.Cell(currentRow, 4).Value = "Gram Panchayat";
                    worksheet.Cell(currentRow, 5).Value = "Attachment";

                    if (Data.Count != 0)
                    {
                        for (int i = 0; i < Data.Count; i++)
                        {

                            //string url = $"/GetFilepath?state={Data[i].state_name}&dist={Data[i].district_name}&block={Data[i].block_name}&gram={Data[i].gpname}";
                            string url = $"/GetFilepath?id={Data[i].id}";

                            string hostName = $"{Request.Url.Host}/mapview/{url}";

                            string hostHeader = Request.Headers["host"];
                            currentRow++;
                            worksheet.Cell(currentRow, 1).Value = Data[i].state_name;
                            worksheet.Cell(currentRow, 2).Value = Data[i].district_name;
                            worksheet.Cell(currentRow, 3).Value = Data[i].block_name;
                            worksheet.Cell(currentRow, 4).Value = Data[i].gpname;

                            var cell = worksheet.Cell(currentRow, 5);
                            cell.Value = "Download";
                            var urls = new Uri(string.Format("{0}://{1}/mapview/{2}",
                               Request.Url.Scheme,
                               hostHeader,
                               url));

                            cell.Hyperlink = new XLHyperlink(urls);


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
                        worksheet.Cell(currentRow, 8).Value = "No Data";
                        worksheet.Cell(currentRow, 9).Value = "";
                        worksheet.Cell(currentRow, 10).Value = "";
                        worksheet.Cell(currentRow, 11).Value = "";
                        worksheet.Cell(currentRow, 12).Value = "";
                        worksheet.Cell(currentRow, 13).Value = "";
                        worksheet.Cell(currentRow, 14).Value = "";
                        worksheet.Cell(currentRow, 15).Value = "";
                    }
                    using (var stream = new MemoryStream())
                    {
                        workbook.SaveAs(stream);
                        var content = stream.ToArray();
                        var bytesdata = File(stream.ToArray(), "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "Gram Panchayat (Basic Hydrology Info).xlsx");
                        robj = bytesdata;
                    }
                }




                return new JsonResult
                {
                    Data = new { robj },
                    MaxJsonLength = int.MaxValue,
                    JsonRequestBehavior = JsonRequestBehavior.AllowGet
                };
                //}
                //else
                //{
                //    return Json("Logout", JsonRequestBehavior.AllowGet);
                //}
            }
            catch (Exception Ex)
            {
                return Json(Ex, JsonRequestBehavior.AllowGet);
            }
        }

        public ActionResult GetFilepath(int id)
        {

            string fileName = string.Empty;
            var Wsp_Pdf = string.Empty;
            string fullPath = string.Empty;
            string fullPath_UpdateAtaljalimages = string.Empty;
            string baseDirectory = string.Empty;
            string baseDirectory2 = string.Empty;

            //var Data = ABE.obj_abhy_mis_wsp_approved.Where(x => x.state_name == state.Trim() && x.district_name == dist.Trim() && x.block_name == block.Trim() && x.gpname == gram.Trim()).FirstOrDefault();
            var Data = ABE.obj_abhy_mis_wsp_approved.Where(x => x.id == id).FirstOrDefault();
            if (Data.wsp_23_update_path != null)
            {
                baseDirectory = $"~/Ataljalimages/WspApproved/{Data.state_name}/{Data.district_name}/{Data.block_name}/2023-24 Update/";
                baseDirectory2 = $"~/UpdateAtaljalimages/WspApproved/{Data.state_name}/{Data.district_name}/{Data.block_name}/2023-24 Update/";
                fileName = Data.wsp_23_update_file;
                Wsp_Pdf = Data.wsp_23_update_path;
                string sanitizedFileName = Path.GetFileName(fileName);
                fullPath = HostingEnvironment.MapPath(baseDirectory) + sanitizedFileName;
                fullPath_UpdateAtaljalimages = HostingEnvironment.MapPath(baseDirectory) + sanitizedFileName;

                if (System.IO.File.Exists(fullPath))
                {
                    // Read the file content
                    byte[] pdfBytes = System.IO.File.ReadAllBytes(fullPath);
                    return File(pdfBytes, System.Net.Mime.MediaTypeNames.Application.Octet, sanitizedFileName);

                }
                else if (System.IO.File.Exists(fullPath_UpdateAtaljalimages))
                {

                    // Read the file content
                    byte[] pdfBytes = System.IO.File.ReadAllBytes(fullPath_UpdateAtaljalimages);
                    return File(pdfBytes, System.Net.Mime.MediaTypeNames.Application.Octet, sanitizedFileName);
                }
            }
            else
            {
                baseDirectory = $"~/Ataljalimages/WspApproved/{Data.state_name}/{Data.district_name}/{Data.block_name}/2023-24/";
                baseDirectory2 = $"~/UpdateAtaljalimages/WspApproved/{Data.state_name}/{Data.district_name}/{Data.block_name}/2023-24/";
                fileName = Data.wsp_23_finename;
                Wsp_Pdf = Data.wsp_23_filepath;
                string sanitizedFileName = Path.GetFileName(fileName);
                fullPath = HostingEnvironment.MapPath(baseDirectory) + sanitizedFileName;
                fullPath_UpdateAtaljalimages = HostingEnvironment.MapPath(baseDirectory) + sanitizedFileName;

                if (System.IO.File.Exists(fullPath))
                {
                    byte[] pdfBytes = System.IO.File.ReadAllBytes(fullPath_UpdateAtaljalimages);
                    return File(pdfBytes, System.Net.Mime.MediaTypeNames.Application.Octet, sanitizedFileName);


                }
                else if (System.IO.File.Exists(fullPath_UpdateAtaljalimages))
                {


                    byte[] pdfBytes = System.IO.File.ReadAllBytes(fullPath_UpdateAtaljalimages);
                    return File(pdfBytes, System.Net.Mime.MediaTypeNames.Application.Octet, sanitizedFileName);
                }
            }

            return View();
        }

        // for zooming to map selected

        // statewaterlevel

        public JsonResult Query_WLState(string state)
        {
            var model = new List<gwl_meta>();
            var coordinates = new List<object>();

            try
            {
                // Fetch all records that match the specified state
                var Details = AJE.obj_gwl_meta.Where(x => x.state == state).ToList();

                // Check if any records were found
                if (Details.Any())
                {
                    foreach (var detail in Details)
                    {
                        coordinates.Add(new { Latitude = detail.latitude ?? "0", Longitude = detail.longitude ?? "0" });
                    }

                    return Json(new { success = true, coordinates = coordinates }, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json(new { success = false, message = "No data available for the selected state." }, JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception ex)
            {
                // Log the exception if needed
                return Json(new { success = false, message = "An error occurred." }, JsonRequestBehavior.AllowGet);
            }
        }


        // distwaterlevel

        public JsonResult Query_WLDist(string district)
        {
            var model = new List<gwl_meta>();
            var coordinates = new List<object>();

            try
            {
                // Fetch all records that match the specified state
                var Details = AJE.obj_gwl_meta.Where(x => x.district == district).ToList();

                // Check if any records were found
                if (Details.Any())
                {
                    foreach (var detail in Details)
                    {
                        coordinates.Add(new { Latitude = detail.latitude ?? "0", Longitude = detail.longitude ?? "0" });
                    }

                    return Json(new { success = true, coordinates = coordinates }, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json(new { success = false, message = "No data available for the selected state." }, JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception ex)
            {
                // Log the exception if needed
                return Json(new { success = false, message = "An error occurred." }, JsonRequestBehavior.AllowGet);
            }
        }




        // blockwaterlevel

        public JsonResult Query_WLBlock(string block)
        {
            var model = new List<gwl_meta>();
            var coordinates = new List<object>();

            try
            {
                // Fetch all records that match the specified state
                var Details = AJE.obj_gwl_meta.Where(x => x.block == block).ToList();

                // Check if any records were found
                if (Details.Any())
                {
                    foreach (var detail in Details)
                    {
                        coordinates.Add(new { Latitude = detail.latitude ?? "0", Longitude = detail.longitude ?? "0" });
                    }

                    return Json(new { success = true, coordinates = coordinates }, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json(new { success = false, message = "No data available for the selected state." }, JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception ex)
            {
                // Log the exception if needed
                return Json(new { success = false, message = "An error occurred." }, JsonRequestBehavior.AllowGet);
            }
        }


        // Gpwaterlevel

        public JsonResult Query_WLGP(string grampanchayat)
        {
            var model = new List<gwl_meta>();
            var coordinates = new List<object>();

            try
            {
                // Fetch all records that match the specified state
                var Details = AJE.obj_gwl_meta.Where(x => x.grampanchayat == grampanchayat).ToList();

                // Check if any records were found
                if (Details.Any())
                {
                    foreach (var detail in Details)
                    {
                        coordinates.Add(new { Latitude = detail.latitude ?? "0", Longitude = detail.longitude ?? "0" });
                    }

                    return Json(new { success = true, coordinates = coordinates }, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json(new { success = false, message = "No data available for the selected state." }, JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception ex)
            {
                // Log the exception if needed
                return Json(new { success = false, message = "An error occurred." }, JsonRequestBehavior.AllowGet);
            }
        }
        //

        public JsonResult Query_WLSource(string state, string district, string block, string grampanchayat, string source_ownership_type)
        {
            var coordinates = new List<object>();

            try
            {
                // Fetch all records from the database that match the selected parameters
                var allDetails = AJE.obj_vw_bs_waterlevel_pv_meta_data
     .Where(x => (string.IsNullOrEmpty(state) || x.state == state) &&
                  (string.IsNullOrEmpty(district) || x.district == district) &&
                  (string.IsNullOrEmpty(block) || x.block == block) &&
                  (string.IsNullOrEmpty(grampanchayat) || x.grampanchayat == grampanchayat) &&
                  (string.IsNullOrEmpty(source_ownership_type) || x.source_ownership_type == source_ownership_type))
     .ToList();

                // Log the count of records found
                System.Diagnostics.Debug.WriteLine($"Records found: {allDetails.Count}");

                // Add all coordinates for the fetched records
                foreach (var detail in allDetails)
                {
                    // Handle potential null values for latitude and longitude
                    var latitude = detail.latitude ?? "0"; // Default to "0" if null
                    var longitude = detail.longitude ?? "0"; // Default to "0" if null
                                                             //var sourcev = "MW";
                                                             //if (sourcev == detail.source_Ownership)
                                                             //{
                                                             // Log the coordinates for debugging
                    System.Diagnostics.Debug.WriteLine($"Latitude: {latitude}, Longitude: {longitude}");

                    // Add the coordinates to the list
                    coordinates.Add(new { Latitude = latitude, Longitude = longitude });
                    //}
                }

                // Check if any coordinates were found
                if (coordinates.Any())
                {
                    return Json(new { success = true, coordinates = coordinates }, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json(new { success = false, message = "No data available." }, JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception ex)
            {
                // Log the exception if needed for debugging
                System.Diagnostics.Debug.WriteLine($"Exception: {ex.Message}");
                return Json(new { success = false, message = "An error occurred." }, JsonRequestBehavior.AllowGet);
            }
        }








        // for zooming to map selected

        // statewaterquality

        public JsonResult Query_WQState(string state)
        {
            var model = new List<pv_quality_meta>();
            var coordinates = new List<object>();

            try
            {
                // Fetch all records that match the specified state
                var Details = AJE.obj_pv_quality_meta.Where(x => x.state == state).ToList();

                // Check if any records were found
                if (Details.Any())
                {
                    foreach (var detail in Details)
                    {
                        coordinates.Add(new { Latitude = detail.latitude ?? "0", Longitude = detail.longitude ?? "0" });
                    }

                    return Json(new { success = true, coordinates = coordinates }, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json(new { success = false, message = "No data available for the selected state." }, JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception ex)
            {
                // Log the exception if needed
                return Json(new { success = false, message = "An error occurred." }, JsonRequestBehavior.AllowGet);
            }
        }


        // distwaterlevel

        public JsonResult Query_WQDist(string district)
        {
            var model = new List<pv_quality_meta>();
            var coordinates = new List<object>();

            try
            {
                // Fetch all records that match the specified state
                var Details = AJE.obj_pv_quality_meta.Where(x => x.district == district).ToList();

                // Check if any records were found
                if (Details.Any())
                {
                    foreach (var detail in Details)
                    {
                        coordinates.Add(new { Latitude = detail.latitude ?? "0", Longitude = detail.longitude ?? "0" });
                    }

                    return Json(new { success = true, coordinates = coordinates }, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json(new { success = false, message = "No data available for the selected state." }, JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception ex)
            {
                // Log the exception if needed
                return Json(new { success = false, message = "An error occurred." }, JsonRequestBehavior.AllowGet);
            }
        }




        // blockwaterlevel

        public JsonResult Query_WQBlock(string block)
        {
            var model = new List<pv_quality_meta>();
            var coordinates = new List<object>();

            try
            {
                // Fetch all records that match the specified state
                var Details = AJE.obj_pv_quality_meta.Where(x => x.block == block).ToList();

                // Check if any records were found
                if (Details.Any())
                {
                    foreach (var detail in Details)
                    {
                        coordinates.Add(new { Latitude = detail.latitude ?? "0", Longitude = detail.longitude ?? "0" });
                    }

                    return Json(new { success = true, coordinates = coordinates }, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json(new { success = false, message = "No data available for the selected state." }, JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception ex)
            {
                // Log the exception if needed
                return Json(new { success = false, message = "An error occurred." }, JsonRequestBehavior.AllowGet);
            }
        }


        // Gpwaterlevel

        public JsonResult Query_WQGP(string gp)
        {
            var model = new List<pv_quality_meta>();
            var coordinates = new List<object>();

            try
            {
                // Fetch all records that match the specified state
                var Details = AJE.obj_pv_quality_meta.Where(x => x.gp == gp).ToList();

                // Check if any records were found
                if (Details.Any())
                {
                    foreach (var detail in Details)
                    {
                        coordinates.Add(new { Latitude = detail.latitude ?? "0", Longitude = detail.longitude ?? "0" });
                    }

                    return Json(new { success = true, coordinates = coordinates }, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json(new { success = false, message = "No data available for the selected state." }, JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception ex)
            {
                // Log the exception if needed
                return Json(new { success = false, message = "An error occurred." }, JsonRequestBehavior.AllowGet);
            }
        }
        //d

        public JsonResult Query_WQSource(string state, string district, string block, string gp, string source)
        {
            var coordinates = new List<object>();

            try
            {
                // Fetch all records from the database that match the selected parameters
                var allDetails = AJE.obj_pv_quality_meta
     .Where(x => (string.IsNullOrEmpty(state) || x.state == state) &&
                  (string.IsNullOrEmpty(district) || x.district == district) &&
                  (string.IsNullOrEmpty(block) || x.block == block) &&
                  (string.IsNullOrEmpty(gp) || x.gp == gp) &&
                  (string.IsNullOrEmpty(source) || x.source == source))
     .ToList();

                // Log the count of records found
                System.Diagnostics.Debug.WriteLine($"Records found: {allDetails.Count}");

                // Add all coordinates for the fetched records
                foreach (var detail in allDetails)
                {
                    // Handle potential null values for latitude and longitude
                    var latitude = detail.latitude ?? "0";
                    var longitude = detail.longitude ?? "0";



                    System.Diagnostics.Debug.WriteLine($"Latitude: {latitude}, Longitude: {longitude}");

                    // Add the coordinates to the list
                    coordinates.Add(new { Latitude = latitude, Longitude = longitude });
                    //}
                }

                // Check if any coordinates were found
                if (coordinates.Any())
                {
                    return Json(new { success = true, coordinates = coordinates }, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json(new { success = false, message = "No data available." }, JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception ex)
            {
                // Log the exception if needed for debuggingggg
                System.Diagnostics.Debug.WriteLine($"Exception: {ex.Message}");
                return Json(new { success = false, message = "An error occurred." }, JsonRequestBehavior.AllowGet);
            }
        }

        // for downloading source dropdown values of water quality Query
        public ActionResult Waterquality_excelS(string state, string district, string block, string gp, string source)
        {

            var abc = AJE.obj_vw_bs_pv_quality_meta_data
                        .Where(x => (string.IsNullOrEmpty(state) || x.state == state) &&
                                    (string.IsNullOrEmpty(district) || x.district == district) &&
                        (string.IsNullOrEmpty(block) || x.block == block) &&
                                    (string.IsNullOrEmpty(gp) || x.gp == gp) &&
                                    (string.IsNullOrEmpty(source) || x.source == source))
                        .ToList();


            using (var workbook = new XLWorkbook())
            {
                var worksheet = workbook.Worksheets.Add("Existing Well");
                var currentRow = 1;
                worksheet.Cell(currentRow, 1).Value = "State";
                worksheet.Cell(currentRow, 2).Value = "District";
                worksheet.Cell(currentRow, 3).Value = "Block";
                worksheet.Cell(currentRow, 4).Value = "Grampanchayat";
                worksheet.Cell(currentRow, 5).Value = "Village";
                worksheet.Cell(currentRow, 6).Value = "Site Name";
                worksheet.Cell(currentRow, 7).Value = "Well Type";
                worksheet.Cell(currentRow, 8).Value = "Source";
                worksheet.Cell(currentRow, 9).Value = "Year";
                worksheet.Cell(currentRow, 10).Value = "Well Depth";
                worksheet.Cell(currentRow, 11).Value = "Aquifer";
                worksheet.Cell(currentRow, 12).Value = "PV Data Year";
                worksheet.Cell(currentRow, 13).Value = "PH";
                worksheet.Cell(currentRow, 14).Value = "EC(µs/cm)";
                worksheet.Cell(currentRow, 15).Value = "TDS";
                worksheet.Cell(currentRow, 16).Value = "TH(mg/L)";
                worksheet.Cell(currentRow, 17).Value = "Calcium(mg/L)";
                worksheet.Cell(currentRow, 18).Value = "Magnesium mg/L";
                worksheet.Cell(currentRow, 19).Value = "Sodium mg/L";
                worksheet.Cell(currentRow, 20).Value = "Potassium mg/L";
                worksheet.Cell(currentRow, 21).Value = "Carbonate mg/L";
                worksheet.Cell(currentRow, 22).Value = "Bicarbonate mg/L";
                worksheet.Cell(currentRow, 23).Value = "Sulphate mg/L";
                worksheet.Cell(currentRow, 24).Value = "Chloride mg/L";
                worksheet.Cell(currentRow, 25).Value = "Fluoride mg/L";
                worksheet.Cell(currentRow, 26).Value = "Nitrate mg/L";
                worksheet.Cell(currentRow, 27).Value = "Well ID";

                foreach (var item in abc)
                {
                    currentRow++;

                    worksheet.Cell(currentRow, 1).Value = item.state_name;
                    worksheet.Cell(currentRow, 2).Value = item.district_name;
                    worksheet.Cell(currentRow, 3).Value = item.block_name;
                    worksheet.Cell(currentRow, 4).Value = item.gp_name;
                    worksheet.Cell(currentRow, 5).Value = item.village;
                    worksheet.Cell(currentRow, 6).Value = item.site_name;
                    worksheet.Cell(currentRow, 7).Value = item.well_type;
                    worksheet.Cell(currentRow, 8).Value = item.source;
                    worksheet.Cell(currentRow, 9).Value = item.year;
                    worksheet.Cell(currentRow, 10).Value = item.well_depth;
                    worksheet.Cell(currentRow, 11).Value = item.aquifer;
                    worksheet.Cell(currentRow, 12).Value = item.pv_data_year;
                    worksheet.Cell(currentRow, 13).Value = item.ph;
                    worksheet.Cell(currentRow, 14).Value = item.ec;
                    worksheet.Cell(currentRow, 15).Value = item.tds;
                    worksheet.Cell(currentRow, 16).Value = item.th;
                    worksheet.Cell(currentRow, 17).Value = item.calcium;
                    worksheet.Cell(currentRow, 18).Value = item.magnesium;
                    worksheet.Cell(currentRow, 19).Value = item.sodium;
                    worksheet.Cell(currentRow, 20).Value = item.potassium;
                    worksheet.Cell(currentRow, 21).Value = item.carbonate;
                    worksheet.Cell(currentRow, 22).Value = item.bicarbonate;
                    worksheet.Cell(currentRow, 23).Value = item.sulphate;
                    worksheet.Cell(currentRow, 24).Value = item.chloride;
                    worksheet.Cell(currentRow, 25).Value = item.fluoride;
                    worksheet.Cell(currentRow, 26).Value = item.nitrate;
                    worksheet.Cell(currentRow, 27).Value = item.pv_data_well_id;
                }

                using (var stream = new MemoryStream())
                {
                    workbook.SaveAs(stream);
                    var content = stream.ToArray();
                    return File(
                        content,
                        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                        "Ground Water Quality.xlsx");
                }
            }
        }



        // for downloading source dropdown values of water leve; Query
        public ActionResult Waterlevel_excelS(string state, string district, string block, string grampanchayat, string source_ownership)
        {

            var data = AJE.obj_vw_bs_waterlevel_pv_meta_data
                        .Where(x => (string.IsNullOrEmpty(state) || x.state == state) &&
                                    (string.IsNullOrEmpty(district) || x.district == district) &&
                                    (string.IsNullOrEmpty(block) || x.block == block) &&
                                    (string.IsNullOrEmpty(grampanchayat) || x.grampanchayat == grampanchayat) &&
                                    (string.IsNullOrEmpty(source_ownership) || x.source_ownership == source_ownership))
                        .ToList();


            using (var workbook = new XLWorkbook())
            {
                var worksheet = workbook.Worksheets.Add("Water Level Data");
                var currentRow = 1;

                worksheet.Cell(currentRow, 1).Value = "Well ID";
                worksheet.Cell(currentRow, 2).Value = "State";
                worksheet.Cell(currentRow, 3).Value = "District";
                worksheet.Cell(currentRow, 4).Value = "Block";
                worksheet.Cell(currentRow, 5).Value = "Grampanchayat";
                worksheet.Cell(currentRow, 6).Value = "Village Name";
                worksheet.Cell(currentRow, 7).Value = "Location Details";
                worksheet.Cell(currentRow, 8).Value = "Latitude";
                worksheet.Cell(currentRow, 9).Value = "Longitude";
                worksheet.Cell(currentRow, 10).Value = "Date";
                worksheet.Cell(currentRow, 11).Value = "Type of Well";
                worksheet.Cell(currentRow, 12).Value = "Other Well Type";
                worksheet.Cell(currentRow, 13).Value = "OwnerShip Type";
                worksheet.Cell(currentRow, 14).Value = "Government Source";
                worksheet.Cell(currentRow, 15).Value = "Depth of Well(mbmp)";
                worksheet.Cell(currentRow, 16).Value = "Ground Water Level(mbgl)";
                worksheet.Cell(currentRow, 17).Value = "Ground Water Level Date";
                worksheet.Cell(currentRow, 18).Value = "Diameter of Well";
                worksheet.Cell(currentRow, 19).Value = "Height of Measuring Point";

                foreach (var item in data)
                {
                    currentRow++;

                    worksheet.Cell(currentRow, 1).Value = item.wellid;
                    worksheet.Cell(currentRow, 2).Value = item.state_name;
                    worksheet.Cell(currentRow, 3).Value = item.district_name;
                    worksheet.Cell(currentRow, 4).Value = item.block_name;
                    worksheet.Cell(currentRow, 5).Value = item.gp_name;
                    worksheet.Cell(currentRow, 6).Value = item.sitename;
                    worksheet.Cell(currentRow, 7).Value = item.locationdetails;
                    worksheet.Cell(currentRow, 8).Value = item.latitude;
                    worksheet.Cell(currentRow, 9).Value = item.longitude;
                    worksheet.Cell(currentRow, 10).Value = item.datetime;
                    worksheet.Cell(currentRow, 11).Value = item.typeofwell;
                    worksheet.Cell(currentRow, 12).Value = item.other_well_type;
                    worksheet.Cell(currentRow, 13).Value = item.source_ownership_type;
                    worksheet.Cell(currentRow, 14).Value = item.source_ownership;

                    worksheet.Cell(currentRow, 15).Value = item.welldepth;

                    worksheet.Cell(currentRow, 16).Value = item.gwl_reading;
                    worksheet.Cell(currentRow, 17).Value = item.gwl_date;
                    worksheet.Cell(currentRow, 18).Value = item.diameter_of_well;
                    worksheet.Cell(currentRow, 19).Value = item.height_of_measuring_point;
                }

                using (var stream = new MemoryStream())
                {
                    workbook.SaveAs(stream);
                    var content = stream.ToArray();
                    return File(
                        content,
                        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                        "Ground Water Level.xlsx");
                }
            }
        }


        // for well depthnfilter water level
        public ActionResult GetWellCountByDepthRange(int minDepth, int maxDepth, string selectedState, string selectedDistrict, string selectedBlock, string selectedGP)
        {
            using (MAPEntity context = new MAPEntity())
            {
                try
                {
                    // Fetch well data that matches the selected filters (state, district, block, gp) and is within the specified depth range
                    var wellData = context.obj_vw_bs_waterlevel_pv_meta_data
                        .Where(w => w.welldepth >= minDepth
                                    && w.welldepth <= maxDepth
                                    && w.state == selectedState
                                    && (string.IsNullOrEmpty(selectedDistrict) || w.district == selectedDistrict)
                                    && (string.IsNullOrEmpty(selectedBlock) || w.block == selectedBlock)
                                    && (string.IsNullOrEmpty(selectedGP) || w.grampanchayat == selectedGP));

                    // Total count of records matching the criteria
                    var totalWellCount = wellData.Count();

                    // Count of unique gwl_meta_id values
                    var uniqueWellCount = wellData
                        .Select(w => w.gwl_meta_id)  // Select the unique gwl_meta_id
                        .Distinct()                  // Ensure the IDs are unique
                        .Count();                    // Get the count of distinct gwl_meta_id

                    // Return both counts in the JSON response
                    return Json(new { totalWellCount, uniqueWellCount }, JsonRequestBehavior.AllowGet);
                }
                catch (Exception ex)
                {
                    // Log the exception (consider using a logging framework)
                    return Json(new { error = "An error occurred while fetching well count.", details = ex.Message }, JsonRequestBehavior.AllowGet);
                }
            }
        }


        // for welldepth export water level
        public ActionResult DownloadSelectedWellData(int? minDepth, int? maxDepth, string state, string district, string block, string grampanchayat)
        {
            // Fetch data based on the filters provided
            var data = AJE.obj_vw_bs_waterlevel_pv_meta_data
                        .Where(x => (string.IsNullOrEmpty(state) || x.state == state) &&
                                    (string.IsNullOrEmpty(district) || x.district == district) &&
                                    (string.IsNullOrEmpty(block) || x.block == block) &&
                                    (string.IsNullOrEmpty(grampanchayat) || x.grampanchayat == grampanchayat) &&
                                    (!minDepth.HasValue || x.welldepth >= minDepth.Value) &&
                                    (!maxDepth.HasValue || x.welldepth <= maxDepth.Value))
                        .ToList();

            using (var workbook = new XLWorkbook())
            {
                var worksheet = workbook.Worksheets.Add("Selected Well Data");
                var currentRow = 1;

                // Define the headers
                worksheet.Cell(currentRow, 1).Value = "Well ID";
                worksheet.Cell(currentRow, 2).Value = "State";
                worksheet.Cell(currentRow, 3).Value = "District";
                worksheet.Cell(currentRow, 4).Value = "Block";
                worksheet.Cell(currentRow, 5).Value = "Grampanchayat";
                worksheet.Cell(currentRow, 6).Value = "Village Name";
                worksheet.Cell(currentRow, 7).Value = "Location Details";
                worksheet.Cell(currentRow, 8).Value = "Latitude";
                worksheet.Cell(currentRow, 9).Value = "Longitude";
                worksheet.Cell(currentRow, 10).Value = "Date";
                worksheet.Cell(currentRow, 11).Value = "Type of Well";
                worksheet.Cell(currentRow, 12).Value = "Other Well Type";
                worksheet.Cell(currentRow, 13).Value = "OwnerShip Type";
                worksheet.Cell(currentRow, 14).Value = "Government Source";
                worksheet.Cell(currentRow, 15).Value = "Depth of Well(mbmp)";
                worksheet.Cell(currentRow, 16).Value = "Ground Water Level(mbgl)";
                worksheet.Cell(currentRow, 17).Value = "Ground Water Level Date";
                worksheet.Cell(currentRow, 18).Value = "Diameter of Well";
                worksheet.Cell(currentRow, 19).Value = "Height of Measuring Point";
                // Populate the worksheet with data
                foreach (var item in data)
                {
                    currentRow++;


                    worksheet.Cell(currentRow, 1).Value = item.wellid;
                    worksheet.Cell(currentRow, 2).Value = item.state_name;
                    worksheet.Cell(currentRow, 3).Value = item.district_name;
                    worksheet.Cell(currentRow, 4).Value = item.block_name;
                    worksheet.Cell(currentRow, 5).Value = item.gp_name;
                    worksheet.Cell(currentRow, 6).Value = item.sitename;
                    worksheet.Cell(currentRow, 7).Value = item.locationdetails;
                    worksheet.Cell(currentRow, 8).Value = item.latitude;
                    worksheet.Cell(currentRow, 9).Value = item.longitude;
                    worksheet.Cell(currentRow, 10).Value = item.datetime;
                    worksheet.Cell(currentRow, 11).Value = item.typeofwell;
                    worksheet.Cell(currentRow, 12).Value = item.other_well_type;
                    worksheet.Cell(currentRow, 13).Value = item.source_ownership_type;
                    worksheet.Cell(currentRow, 14).Value = item.source_ownership;

                    worksheet.Cell(currentRow, 15).Value = item.welldepth;

                    worksheet.Cell(currentRow, 16).Value = item.gwl_reading;
                    worksheet.Cell(currentRow, 17).Value = item.gwl_date;
                    worksheet.Cell(currentRow, 18).Value = item.diameter_of_well;
                    worksheet.Cell(currentRow, 19).Value = item.height_of_measuring_point;
                }

                using (var stream = new MemoryStream())
                {
                    workbook.SaveAs(stream);
                    var content = stream.ToArray();
                    return File(
                        content,
                        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                        "Selected_Well_Data.xlsx");
                }
            }
        }

        // for well depthnfilter water quality

        public ActionResult GetWellCountByDepthRangeWQ(int minDepth, int maxDepth, string selectedState, string selectedDistrict, string selectedBlock, string selectedGP)
        {
            using (MAPEntity context = new MAPEntity())
            {
                try
                {

                    var wellData = context.obj_vw_bs_pv_quality_meta_data
                        .Where(w => w.well_depth >= minDepth
                                    && w.well_depth <= maxDepth
                                    && w.state == selectedState
                                    && (string.IsNullOrEmpty(selectedDistrict) || w.district == selectedDistrict)
                                    && (string.IsNullOrEmpty(selectedBlock) || w.block == selectedBlock)
                                    && (string.IsNullOrEmpty(selectedGP) || w.gp == selectedGP));


                    var totalWellCountWQ = wellData.Count();


                    var uniqueWellCountWQ = wellData
                        .Select(w => w.pv_meta_id)
                        .Distinct()
                        .Count();

                    return Json(new { totalWellCountWQ, uniqueWellCountWQ }, JsonRequestBehavior.AllowGet);
                }
                catch (Exception ex)
                {
                    // Log the exception (consider using a logging framework)
                    return Json(new { error = "An error occurred while fetching well count.", details = ex.Message }, JsonRequestBehavior.AllowGet);
                }
            }
        }

        public ActionResult DownloadSelectedWellDataWQ(int? minDepth, int? maxDepth, string state, string district, string block, string grampanchayat)
        {

            var data = AJE.obj_vw_bs_pv_quality_meta_data
                        .Where(x => (string.IsNullOrEmpty(state) || x.state == state) &&
                                    (string.IsNullOrEmpty(district) || x.district == district) &&
                                    (string.IsNullOrEmpty(block) || x.block == block) &&
                                    (string.IsNullOrEmpty(grampanchayat) || x.gp == grampanchayat) &&
                                    (!minDepth.HasValue || x.well_depth >= minDepth.Value) &&
                                    (!maxDepth.HasValue || x.well_depth <= maxDepth.Value))
                        .ToList();

            using (var workbook = new XLWorkbook())
            {
                var worksheet = workbook.Worksheets.Add("Selected Well Data");
                var currentRow = 1;
                worksheet.Cell(currentRow, 1).Value = "State";
                worksheet.Cell(currentRow, 2).Value = "District";
                worksheet.Cell(currentRow, 3).Value = "Block";
                worksheet.Cell(currentRow, 4).Value = "Grampanchayat";
                worksheet.Cell(currentRow, 5).Value = "Village";
                worksheet.Cell(currentRow, 6).Value = "Site Name";
                worksheet.Cell(currentRow, 7).Value = "Well Type";
                worksheet.Cell(currentRow, 8).Value = "Source";
                worksheet.Cell(currentRow, 9).Value = "Year";
                worksheet.Cell(currentRow, 10).Value = "Well Depth";
                worksheet.Cell(currentRow, 11).Value = "Aquifer";
                worksheet.Cell(currentRow, 12).Value = "PV Data Year";
                worksheet.Cell(currentRow, 13).Value = "PH";
                worksheet.Cell(currentRow, 14).Value = "EC(µs/cm)";
                worksheet.Cell(currentRow, 15).Value = "TDS";
                worksheet.Cell(currentRow, 16).Value = "TH(mg/L)";
                worksheet.Cell(currentRow, 17).Value = "Calcium(mg/L)";
                worksheet.Cell(currentRow, 18).Value = "Magnesium mg/L";
                worksheet.Cell(currentRow, 19).Value = "Sodium mg/L";
                worksheet.Cell(currentRow, 20).Value = "Potassium mg/L";
                worksheet.Cell(currentRow, 21).Value = "Carbonate mg/L";
                worksheet.Cell(currentRow, 22).Value = "Bicarbonate mg/L";
                worksheet.Cell(currentRow, 23).Value = "Sulphate mg/L";
                worksheet.Cell(currentRow, 24).Value = "Chloride mg/L";
                worksheet.Cell(currentRow, 25).Value = "Fluoride mg/L";
                worksheet.Cell(currentRow, 26).Value = "Nitrate mg/L";
                worksheet.Cell(currentRow, 27).Value = "Well ID";
                foreach (var item in data)
                {
                    currentRow++;

                    worksheet.Cell(currentRow, 1).Value = item.state_name;
                    worksheet.Cell(currentRow, 2).Value = item.district_name;
                    worksheet.Cell(currentRow, 3).Value = item.block_name;
                    worksheet.Cell(currentRow, 4).Value = item.gp_name;
                    worksheet.Cell(currentRow, 5).Value = item.village;
                    worksheet.Cell(currentRow, 6).Value = item.site_name;
                    worksheet.Cell(currentRow, 7).Value = item.well_type;
                    worksheet.Cell(currentRow, 8).Value = item.source;
                    worksheet.Cell(currentRow, 9).Value = item.year;
                    worksheet.Cell(currentRow, 10).Value = item.well_depth;
                    worksheet.Cell(currentRow, 11).Value = item.aquifer;
                    worksheet.Cell(currentRow, 12).Value = item.pv_data_year;
                    worksheet.Cell(currentRow, 13).Value = item.ph;
                    worksheet.Cell(currentRow, 14).Value = item.ec;
                    worksheet.Cell(currentRow, 15).Value = item.tds;
                    worksheet.Cell(currentRow, 16).Value = item.th;
                    worksheet.Cell(currentRow, 17).Value = item.calcium;
                    worksheet.Cell(currentRow, 18).Value = item.magnesium;
                    worksheet.Cell(currentRow, 19).Value = item.sodium;
                    worksheet.Cell(currentRow, 20).Value = item.potassium;
                    worksheet.Cell(currentRow, 21).Value = item.carbonate;
                    worksheet.Cell(currentRow, 22).Value = item.bicarbonate;
                    worksheet.Cell(currentRow, 23).Value = item.sulphate;
                    worksheet.Cell(currentRow, 24).Value = item.chloride;
                    worksheet.Cell(currentRow, 25).Value = item.fluoride;
                    worksheet.Cell(currentRow, 26).Value = item.nitrate;
                    worksheet.Cell(currentRow, 27).Value = item.pv_data_well_id;
                }

                using (var stream = new MemoryStream())
                {
                    workbook.SaveAs(stream);
                    var content = stream.ToArray();
                    return File(
                        content,
                        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                        "Selected_Well_Data.xlsx");
                }
            }
        }


        //

        // for water quality ph and other permissible limits
        public ActionResult GetWaterQualityAnalysis(string selectedState, string selectedDistrict, string selectedBlock, string selectedGP, string fyyear_str)
        {
            using (MAPEntity context = new MAPEntity())
            {
                try
                {
                    double nitrateLimit = 45;
                    double fluorideLimit = 1.5;
                    double ecLimit = 3000;

                    var wellData = context.obj_vw_bs_pv_quality_meta_data
                        .Where(w => w.state == selectedState
                                    && (string.IsNullOrEmpty(selectedDistrict) || w.district == selectedDistrict)
                                    && (string.IsNullOrEmpty(selectedBlock) || w.block == selectedBlock)
                                    && (string.IsNullOrEmpty(selectedGP) || w.gp == selectedGP)
                                    && (string.IsNullOrEmpty(fyyear_str) || w.pv_data_year_str == fyyear_str)); // Filter by year if provided

                    var samplesAbovePermissible = wellData
                        .Count(w => w.nitrate > nitrateLimit || w.fluoride > fluorideLimit);

                    var nitrateAboveLimit = wellData
                        .Count(w => w.nitrate > nitrateLimit);

                    var fluorideAboveLimit = wellData
                        .Count(w => w.fluoride > fluorideLimit);

                    var ecAboveLimit = wellData
                        .Count(w => w.ec > ecLimit);

                    return Json(new
                    {
                        samplesAbovePermissible,
                        nitrateAboveLimit,
                        fluorideAboveLimit,
                        ecAboveLimit
                    }, JsonRequestBehavior.AllowGet);
                }
                catch (Exception ex)
                {
                    return Json(new { error = "An error occurred while fetching water quality data.", details = ex.Message }, JsonRequestBehavior.AllowGet);
                }
            }
        }



        // For Waterlevel Query 


        [HttpGet]
        public JsonResult FetchYears()
        {
            try
            {
                var years = AJE.obj_vw_bs_waterlevel_pv_meta_data
                    .Select(w => w.fyyear_str)
                    .Distinct()
                    .OrderBy(y => y)
                    .ToList();

                years.Insert(0, "All"); // Add "All" option at the top

                return Json(years, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {

                Console.WriteLine("Error fetching years: " + ex.Message);
                return Json(new { error = "An error occurred while fetching years." }, JsonRequestBehavior.AllowGet);
            }
        }


        // Method to fetch states, districts, blocks, gram panchayats, and source ownership types
        [HttpGet]
        public JsonResult FetchLocationOptionsWL(string state = null, string district = null, string block = null, string gp = null, string year = null)
        {
            try
            {
                var states = AJE.obj_vw_bs_waterlevel_pv_meta_data
                    .Select(w => w.state)
                    .Distinct()
                     .OrderBy(w => w)
                    .ToList();

                var districts = string.IsNullOrEmpty(state) ? new List<string>() : AJE.obj_vw_bs_waterlevel_pv_meta_data
                    .Where(w => w.state == state)
                    .Select(w => w.district)
                    .Distinct()
                     .OrderBy(w => w)
                    .ToList();

                var blocks = string.IsNullOrEmpty(district) ? new List<string>() : AJE.obj_vw_bs_waterlevel_pv_meta_data
                    .Where(w => w.district == district && w.block != null)
                    .Select(w => w.block)
                    .Distinct()
                     .OrderBy(w => w)
                    .ToList();


                var grampanchayats = string.IsNullOrEmpty(block) ? new List<string>() : AJE.obj_vw_bs_waterlevel_pv_meta_data
                    .Where(w => w.block == block && w.grampanchayat != null)
                    .Select(w => w.grampanchayat)
                    .Distinct()
                     .OrderBy(w => w)
                    .ToList();

                var sourceOwnershipTypes = AJE.obj_vw_bs_waterlevel_pv_meta_data
         .Where(w => (string.IsNullOrEmpty(state) || w.state == state) &&
                     (string.IsNullOrEmpty(district) || w.district == district) &&
                     (string.IsNullOrEmpty(block) || w.block == block) &&
                      (string.IsNullOrEmpty(gp) || w.grampanchayat == gp) &&
                     (string.IsNullOrEmpty(year) || w.fyyear_str == year))
         .Select(w => w.source_ownership_type)
         .Distinct()
          .OrderBy(w => w)
         .ToList();


                return Json(new
                {
                    States = states,
                    Districts = districts,
                    Blocks = blocks,
                    GramPanchayats = grampanchayats, // Return GP options based on the block
                    SourceOwnershipTypes = sourceOwnershipTypes
                }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error fetching location options: " + ex.Message);
                return Json(new { error = "An error occurred while fetching location options." }, JsonRequestBehavior.AllowGet);
            }
        }


        [HttpGet]
        public JsonResult FetchWellCountsWL(
      string state = "All",
      string district = "All",
      string block = "All",
      string grampanchayat = "All",
      string sourceOwnershipType = "All",
      string fyyear_str = "All") 
        {
            try
            {
                var query = AJE.obj_vw_bs_count_waterlevel_pv_meta_data.AsQueryable();
                if (!string.IsNullOrEmpty(state) && state != "All")
                    query = query.Where(w => w.state == state);
                if (!string.IsNullOrEmpty(district) && district != "All")
                    query = query.Where(w => w.district == district);
                if (!string.IsNullOrEmpty(block) && block != "All")
                    query = query.Where(w => w.block == block);
                if (!string.IsNullOrEmpty(grampanchayat) && grampanchayat != "All")
                    query = query.Where(w => w.grampanchayat == grampanchayat);
                if (!string.IsNullOrEmpty(sourceOwnershipType) && sourceOwnershipType != "All")
                    query = query.Where(w => w.source_ownership_type == sourceOwnershipType);
                query = query.Where(w => w.typeofwell != null);
                var wellCounts = query
                    .GroupBy(w => w.typeofwell)
                    .Select(g => new
                    {
                        TypeOfWell = g.Key,

                        // Use Count_All column directly
                        Count_All = g.Sum(w => w.dist_total ?? 0),

                        // Calculate CountYear based on fyyear_str using if-else conditions
                        CountYear = fyyear_str == "2015" ? g.Sum(w => w.Count_2015 ?? 0) :
                                    fyyear_str == "2016" ? g.Sum(w => w.Count_2016 ?? 0) :
                                    fyyear_str == "2017" ? g.Sum(w => w.Count_2017 ?? 0) :
                                    fyyear_str == "2018" ? g.Sum(w => w.Count_2018 ?? 0) :
                                    fyyear_str == "2019" ? g.Sum(w => w.Count_2019 ?? 0) :
                                    fyyear_str == "2020" ? g.Sum(w => w.Count_2020 ?? 0) :
                                    fyyear_str == "2021" ? g.Sum(w => w.Count_2021 ?? 0) :
                                    fyyear_str == "2022" ? g.Sum(w => w.Count_2022 ?? 0) :
                                    fyyear_str == "2023" ? g.Sum(w => w.Count_2023 ?? 0) :
                                    fyyear_str == "2024" ? g.Sum(w => w.Count_2024 ?? 0) : 
                                    fyyear_str == "2025" ? g.Sum(w => w.Count_2025 ?? 0) : 0
                    })
                    .ToList();

                // Log output to verify counts if needed
                Console.WriteLine("Fetched wellCounts:");
                wellCounts.ForEach(wc => Console.WriteLine($"TypeOfWell: {wc.TypeOfWell}, Count_All: {wc.Count_All}, CountYear: {wc.CountYear}"));

                return Json(wellCounts, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error fetching well counts: " + ex.Message);
                Console.WriteLine("Stack Trace: " + ex.StackTrace);

                return Json(new { error = "An error occurred while fetching well counts.", details = ex.Message }, JsonRequestBehavior.AllowGet);
            }
        }



        // For water quality query

        [HttpGet]
        public JsonResult FetchYearsWQ()
        {
            try
            {
                var years = AJE.obj_vw_bs_pv_quality_meta_data
                    .Select(w => w.pv_data_year_str)
                    .Distinct()
                    .OrderBy(y => y)
                    .ToList();

                years.Insert(0, "All");

                return Json(years, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                // Log the error
                Console.WriteLine("Error fetching years: " + ex.Message);
                return Json(new { error = "An error occurred while fetching years." }, JsonRequestBehavior.AllowGet);
            }
        }


        // Method to fetch states, districts, blocks, gram panchayats, and source ownership types
        [HttpGet]
        public JsonResult FetchLocationOptionsWQ(string state = null, string district = null, string block = null, string gp = null, string year = null)
        {
            try
            {
                var states = AJE.obj_vw_bs_pv_quality_meta_data
                    .Select(w => w.state)
                    .Distinct()
                     .OrderBy(w => w)
                    .ToList();

                var districts = string.IsNullOrEmpty(state) ? new List<string>() : AJE.obj_vw_bs_pv_quality_meta_data
                    .Where(w => w.state == state)
                    .Select(w => w.district)
                    .Distinct()
                     .OrderBy(w => w)
                    .ToList();

                var blocks = string.IsNullOrEmpty(district) ? new List<string>() : AJE.obj_vw_bs_pv_quality_meta_data
                    .Where(w => w.district == district && w.block != null)
                    .Select(w => w.block)
                    .Distinct()
                     .OrderBy(w => w)
                    .ToList();


                var grampanchayats = string.IsNullOrEmpty(block) ? new List<string>() : AJE.obj_vw_bs_pv_quality_meta_data
                    .Where(w => w.block == block && w.gp != null)
                    .Select(w => w.gp)
                    .Distinct()
                     .OrderBy(w => w)
                    .ToList();

                var sourceOwnershipTypes = AJE.obj_vw_bs_pv_quality_meta_data
         .Where(w => (string.IsNullOrEmpty(state) || w.state == state) &&
                     (string.IsNullOrEmpty(district) || w.district == district) &&
                     (string.IsNullOrEmpty(block) || w.block == block) &&
                      (string.IsNullOrEmpty(gp) || w.gp == gp) &&
                     (string.IsNullOrEmpty(year) || w.year == year))
                       .Select(w => w.source)
                       .Distinct()
                       .OrderBy(w => w)
                       .ToList();


                return Json(new
                {
                    States = states,
                    Districts = districts,
                    Blocks = blocks,
                    GramPanchayats = grampanchayats, // Return GP options based on the block
                    SourceOwnershipTypes = sourceOwnershipTypes
                }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error fetching location options: " + ex.Message);

                abhy_tbl_error error_data = new abhy_tbl_error();
                error_data.error_test = ex.Message;
                error_data.user_email = ex.StackTrace;
                error_data.user_type = "Map view";
                error_data.error_count = "1";
                ABE.obj_abhy_tbl_error.Add(error_data);
                ABE.SaveChanges();
                return Json(new { error = "An error occurred while fetching location options." }, JsonRequestBehavior.AllowGet);
            }
        }


        // Method to fetch well counts based on selected values
        [HttpGet]
        public JsonResult FetchWellCountsWQ(string state, string district, string block, string grampanchayat, string fyyear_str, string sourceOwnershipType)
        {
            try
            {
                var query = AJE.obj_vw_bs_pv_quality_meta_data.AsQueryable();

                if (!string.IsNullOrEmpty(state))
                    query = query.Where(w => w.state == state);
                if (!string.IsNullOrEmpty(district))
                    query = query.Where(w => w.district == district);
                if (!string.IsNullOrEmpty(block))
                    query = query.Where(w => w.block == block);
                if (!string.IsNullOrEmpty(grampanchayat))
                    query = query.Where(w => w.gp == grampanchayat);
                if (!string.IsNullOrEmpty(fyyear_str) && fyyear_str != "All")
                    query = query.Where(w => w.pv_data_year_str == fyyear_str);
                if (!string.IsNullOrEmpty(sourceOwnershipType))
                    query = query.Where(w => w.source == sourceOwnershipType); // New filter
                var wellCounts = query
    .GroupBy(w => w.well_type) // Adjust the property name as per your model
    .Select(g => new
    {
        TypeOfWell = g.Key,
        Count = g.Count(),
        DistinctPvMetaIdCount = g.Select(w => w.pv_meta_id).Distinct().Count()
    })
    .ToList();


                return Json(wellCounts, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {

                Console.WriteLine("Error fetching well counts: " + ex.Message);
                return Json(new { error = "An error occurred while fetching well counts." }, JsonRequestBehavior.AllowGet);
            }

        }


    }
}

