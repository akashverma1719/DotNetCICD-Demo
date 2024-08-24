using AbhyProject.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.IO;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;
using System.Globalization;
using Newtonsoft.Json;
using System.Data;
using System.Net;
using System.IO.Compression;
using System.Configuration;
using OpenXmlPowerTools;
using DocumentFormat.OpenXml.Drawing.Charts;
using DocumentFormat.OpenXml.Drawing;
using System.Text.RegularExpressions;


namespace AbhyProject.Controllers
{
    public class WSP_2024_25_updateController : Controller
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
            
            //ViewBag.GPLIst = ABE.objUsers.Take(10).ToList();
            return View();
        }

        public ActionResult Wsp_Gram()
        {
            return View();
        }
        public ActionResult Wsp_Grama()
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
        public ActionResult DemandSide()
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
        public ActionResult Sign_Up_DropdownInfo()
        {
            try
            {
                //Rajnish
                //UAT
                var slist = ABE.obj_abhy_block_gp_area_info.ToList();
                //Live
                //var slist = ABE.obj_master_list_gp_wsp.ToList();
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
                    var Year = "2024-25 Update";
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
                    bool flag = false;
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();
                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    var Year = "2024-25 Update";
                    WaterLevel WL = new WaterLevel();
                    List<WaterLevel> WList = new List<WaterLevel>();
                    List<vw_gwl_all> Final_data = new List<vw_gwl_all>();
                    var Data = ABE.obj_abhy_wsp_gwl_24_update.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram && x.wsp_fyyear == Year).ToList();

                    if (Data.Count > 0)
                    {
                        flag = true;
                    }
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
                            var DataByWellId = Final_data.Where(x => x.wellid == item.wellid).OrderByDescending(x => x.gwl_date).ToList();
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
                                        gwl_date = DataByWellId[i].gwl_date,
                                        flag = flag
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
                                        gwl_date = DataByWellId[i].gwl_date,
                                        flag = flag
                                    };
                                    WList.Add(obj);
                                }
                            }
                        }
                    }
                    var jsonresults30 = Json(WList, JsonRequestBehavior.AllowGet);
                    jsonresults30.MaxJsonLength = int.MaxValue;
                    return jsonresults30;
                   // return Json(WList, JsonRequestBehavior.AllowGet);
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
        private string getuniqueId(string File)
        {
            string extension = System.IO.Path.GetExtension(File);
            string fileNameWithoutExtension = System.IO.Path.GetFileNameWithoutExtension(File);
            string output = Regex.Replace(fileNameWithoutExtension, @"[^a-zA-Z0-9]", string.Empty); // Replaces special characters with an underscore
            string uniqueId = DateTime.Now.ToString("ddMMyyyyHHmmss") + DateTime.Now.Ticks.ToString().Substring(DateTime.Now.Ticks.ToString().Length - 4);
            string newFileName = $"{output}_{uniqueId}{extension}";
            return newFileName;
        }
        [HttpPost]
        public ActionResult Upload_mapview_image_WaterLevel_test(HttpPostedFileBase data)
        {
            var State = Session["gstate"].ToString();
            var Dist = Session["gdist"].ToString();
            var Block = Session["gblock"].ToString();
            var Gram = Session["ggram"].ToString();
            var Year = "2024-25 Update";


            abhy_wsp_mapview_image_path obj = new abhy_wsp_mapview_image_path();
            var Details = ABE.obj_abhy_wsp_mapview_image_path.Where(x => x.state == State && x.district == Dist
            && x.block == Block && x.gp == Gram && x.financial_year == Year && x.module_name == "wl").FirstOrDefault();
            if (Details != null)
            {
                        string BasePath = AppDomain.CurrentDomain.BaseDirectory;// ConfigurationManager.AppSettings["path"];
                        string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\WaterLevel_Maps\\" + Gram + "\\");

                        if (!Directory.Exists(path))
                        {
                            Directory.CreateDirectory(path);
                        }
                        path = path + data.FileName;
                        data.SaveAs(path);
                        var File_path = "/Ataljalimages/WaterLevel_Maps/" + Gram + "/" + data.FileName;
                        Details.image_path = File_path;
                        Details.image_name = data.FileName;
                        Details.module_name = "wl";
                        Details.financial_year = Year;
                        ABE.Entry(Details).State = EntityState.Modified;
                        ABE.SaveChanges();
                        return Json("Map saved successfully");
            }
            else
            {
                obj.state = State;
                obj.district = Dist;
                obj.block = Block;
                obj.gp = Gram;
                obj.financial_year = Year;
                        string BasePath = AppDomain.CurrentDomain.BaseDirectory; // ConfigurationManager.AppSettings["path"];
                        string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\WaterLevel_Maps\\" + Gram + "\\");
                        if (!Directory.Exists(path))
                        {
                            Directory.CreateDirectory(path);
                        }
                        path = path + data.FileName;
                        string[] count = data.FileName.Split('.');
                        data.SaveAs(path);
                        // File_path = path.Replace("D:\\Ataljal_grievnce\\", "http://54.221.131.231:8014/ataljalimages/");
                        var File_path = "/Ataljalimages/WaterLevel_Maps/" + Gram + "/" + data.FileName;
                        obj.image_path = File_path;
                        obj.image_name = data.FileName;
                        obj.financial_year = Year;
                        ABE.obj_abhy_wsp_mapview_image_path.Add(obj);
                        ABE.SaveChanges();
                        return Json("Map saved successfully");
            }
        }

        [HttpPost]
        public ActionResult Upload_mapview_image_WaterLevel(string url)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();
                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    var Year = "2024-25 Update";

                    string imageUrl = url;
                    string BasePath = AppDomain.CurrentDomain.BaseDirectory;// ConfigurationManager.AppSettings["path"];
                    string saveLocation = System.IO.Path.Combine(BasePath, "Ataljalimages\\wl\\" + Gram + "\\" + Year + "\\");
                    string filename = System.IO.Path.GetFileName(imageUrl);
                    if (!Directory.Exists(saveLocation))
                    {
                        Directory.CreateDirectory(saveLocation);
                    }
                    byte[] imageBytes;
                    HttpWebRequest imageRequest = (HttpWebRequest)WebRequest.Create(imageUrl);
                    WebResponse imageResponse = imageRequest.GetResponse();
                    Stream responseStream = imageResponse.GetResponseStream();
                    using (BinaryReader br = new BinaryReader(responseStream))
                    {
                        imageBytes = br.ReadBytes(500000);
                        br.Close();
                    }
                    responseStream.Close();
                    imageResponse.Close();
                    FileStream fs = new FileStream(saveLocation + "\\" + filename, FileMode.Create);
                    BinaryWriter bw = new BinaryWriter(fs);
                    try
                    {
                        bw.Write(imageBytes);
                    }
                    finally
                    {
                        fs.Close();
                        bw.Close();
                    }
                    abhy_wsp_mapview_image_path obj = new abhy_wsp_mapview_image_path();
                    var data = ABE.obj_abhy_wsp_mapview_image_path.Where(x => x.state == State && x.district == Dist
                    && x.block == Block && x.gp == Gram && x.financial_year == Year && x.module_name == "wl").FirstOrDefault();
                    if (data == null)
                    {
                        obj.state = State;
                        obj.district = Dist;
                        obj.block = Block;
                        obj.gp = Gram;
                        obj.financial_year = Year;
                        obj.image_name = filename;
                        obj.module_name = "wl";
                        obj.image_path = "/Ataljalimages/wl/" + Gram + "/" + Year + "/" + filename;
                        ABE.obj_abhy_wsp_mapview_image_path.Add(obj);
                        ABE.SaveChanges();
                    }
                    else
                    {
                        data.image_name = filename;
                        data.image_path = "/Ataljalimages/wl/" + Gram + "/" + Year + "/" + filename;
                        ABE.Entry(data).State = EntityState.Modified;
                        ABE.SaveChanges();
                    }

                    return Json("Upload");
                }
                catch (Exception Ex)
                {
                    abhy_tbl_error error_data = new abhy_tbl_error();
                    error_data.error_test = Ex.Message;
                    error_data.user_email = Ex.StackTrace;
                    error_data.user_type = "WspMap";
                    error_data.error_count = "1";
                    error_data.date_time = DateTime.Now.ToString();
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
        public ActionResult Upload_mapview_image_WaterQuality(string url)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();
                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    var Year = "2024-25 Update";

                    string imageUrl = url;
                    string BasePath = AppDomain.CurrentDomain.BaseDirectory; //ConfigurationManager.AppSettings["path"];
                    string saveLocation = System.IO.Path.Combine(BasePath, "Ataljalimages\\wq\\" + Gram + "\\" + Year + "\\");
                    string filename = System.IO.Path.GetFileName(imageUrl);
                    string ext = System.IO.Path.GetExtension(filename);
                    if (!Directory.Exists(saveLocation))
                    {
                        Directory.CreateDirectory(saveLocation);
                    }
                    byte[] imageBytes;
                    HttpWebRequest imageRequest = (HttpWebRequest)WebRequest.Create(imageUrl);
                    WebResponse imageResponse = imageRequest.GetResponse();
                    Stream responseStream = imageResponse.GetResponseStream();
                    using (BinaryReader br = new BinaryReader(responseStream))
                    {
                        imageBytes = br.ReadBytes(500000);
                        br.Close();
                    }
                    responseStream.Close();
                    imageResponse.Close();
                    FileStream fs = new FileStream(saveLocation + "\\" + filename, FileMode.Create);
                    BinaryWriter bw = new BinaryWriter(fs);
                    try
                    {
                        bw.Write(imageBytes);
                    }
                    finally
                    {
                        fs.Close();
                        bw.Close();
                    }
                    abhy_wsp_mapview_image_path obj = new abhy_wsp_mapview_image_path();
                    var data = ABE.obj_abhy_wsp_mapview_image_path.Where(x => x.state == State && x.district == Dist
                    && x.block == Block && x.gp == Gram && x.financial_year == Year && x.module_name == "wq").FirstOrDefault();
                    if (data == null)
                    {
                        obj.state = State;
                        obj.district = Dist;
                        obj.block = Block;
                        obj.gp = Gram;
                        obj.financial_year = Year;
                        obj.module_name = "wq";
                        obj.image_name = filename;
                        obj.image_path = "/Ataljalimages/wq/" + Gram + "/" + Year + "/" + filename;
                        ABE.obj_abhy_wsp_mapview_image_path.Add(obj);
                        ABE.SaveChanges();
                    }
                    else
                    {
                        data.image_name = filename;
                        data.image_path = "/Ataljalimages/wq/" + Gram + "/" + Year + "/" + filename;
                        ABE.Entry(data).State = EntityState.Modified;
                        ABE.SaveChanges();
                    }

                    return Json("Upload");
                }
                catch (Exception Ex)
                {
                    abhy_tbl_error error_data = new abhy_tbl_error();
                    error_data.error_test = Ex.Message;
                    error_data.user_email = Ex.StackTrace;
                    error_data.user_type = "WspMap";
                    error_data.error_count = "1";
                    error_data.date_time = DateTime.Now.ToString();
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

        public ActionResult Get_Image_WaterLevel()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();
                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    var Year = "2024-25 Update";
                    var data = ABE.obj_abhy_wsp_mapview_image_path.Where(x => x.state == State && x.district == Dist
                    && x.block == Block && x.gp == Gram && x.financial_year == Year && x.module_name == "wl").FirstOrDefault();

                    return Json(data, JsonRequestBehavior.AllowGet);

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

        public ActionResult Get_Image_WaterQuality()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();
                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    var Year = "2024-25 Update";
                    var data = ABE.obj_abhy_wsp_mapview_image_path.Where(x => x.state == State && x.district == Dist
                    && x.block == Block && x.gp == Gram && x.financial_year == Year && x.module_name == "wq").FirstOrDefault();

                    return Json(data, JsonRequestBehavior.AllowGet);

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
                    var Year = "2024-25 Update";
                    //var PageNumber = result.PageNumber;
                    WaterLevel WL = new WaterLevel();
                    List<abhy_wsp_gwl_24_update> WList = new List<abhy_wsp_gwl_24_update>();
                    List<vw_gwl_all> Final_data = new List<vw_gwl_all>();
                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        Final_data = AJE.obj_vw_gwl_all.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram).OrderBy(c => c.wellid).ToList();
                    }

                    if (Final_data.Count > 0)
                    {
                        var mis_wl_data = ABE.obj_abhy_wsp_gwl_24_update.Where(x => x.grampanchayat == Gram && x.wsp_fyyear == Year).ToList();
                        if (mis_wl_data.Count != 0)
                        {
                            ABE.obj_abhy_wsp_gwl_24_update.RemoveRange(mis_wl_data);
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
                                    var obj = new abhy_wsp_gwl_24_update()
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
                                }
                                else
                                {
                                    var obj = new abhy_wsp_gwl_24_update()
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
                                    //ABE.obj_abhy_wsp_gwl_24.Add(obj);
                                    //ABE.SaveChanges();
                                }
                            }
                        }
                        //ABE.Entry(WList).State = EntityState.Deleted; 

                        var json = new JavaScriptSerializer().Serialize(WList);

                        ABE.obj_abhy_wsp_gwl_24_update.AddRange(WList);
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
                    var Year = "2024-25 Update";
                    //var PageNumber = result.PageNumber;
                    WaterLevel WL = new WaterLevel();
                    List<abhy_wsp_gwl_24_update> WList = new List<abhy_wsp_gwl_24_update>();
                    List<abhy_wsp_gwl_24_update> Final_data = new List<abhy_wsp_gwl_24_update>();
                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        Final_data = ABE.obj_abhy_wsp_gwl_24_update.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram && x.wsp_fyyear == Year).OrderBy(c => c.wellid).ToList();
                    }

                    if (Final_data.Count > 0)
                    {
                        var GroupByData = Final_data.GroupBy(x => x.wellid).ToList();
                        int j = 0;
                        foreach (var items in GroupByData.AsEnumerable())
                        {
                            ++j;
                            var item = items.First();
                            var DataByWellId = Final_data.Where(x => x.wellid == item.wellid).OrderByDescending(x => x.gwl_date).ToList();
                            for (int i = 0; i < DataByWellId.Count; i++)
                            {
                                if (i == 0)
                                {
                                    var obj = new abhy_wsp_gwl_24_update()
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
                                    var obj = new abhy_wsp_gwl_24_update()
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
                    bool flag = false;
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();
                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    var Year = "2024-25 Update";
                    //var PageNumber = result.PageNumber;
                    var Data = ABE.obj_abhy_wsp_gwq_24_update.Where(x => x.State == State && x.District == Dist && x.Block == Block && x.GP == Gram && x.wsp_fyyear == Year).OrderBy(c => c.Well_ID).ToList();
                    if (Data.Count > 0)
                    {
                        flag = true;
                    }
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
                                        Nitrate = DataByWellId[i].Nitrate,
                                        flag = flag
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
                                        Nitrate = DataByWellId[i].Nitrate,
                                        flag = flag
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
                    var Year = "2024-25 Update";
                    List<pv_quality> Final_data = new List<pv_quality>();
                    List<abhy_wsp_gwq_24_update> WQList = new List<abhy_wsp_gwq_24_update>();
                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        Final_data = AJE.obj_pv_quality.Where(x => x.State == State && x.District == Dist && x.Block == Block && x.GP == Gram).OrderBy(c => c.Well_ID).ToList();
                    }
                    if (Final_data.Count > 0)
                    {
                        var mis_wq_data = ABE.obj_abhy_wsp_gwq_24_update.Where(x => x.GP == Gram && x.wsp_fyyear == Year).ToList();
                        if (mis_wq_data.Count != 0)
                        {
                            ABE.obj_abhy_wsp_gwq_24_update.RemoveRange(mis_wq_data);
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
                                    var obj = new abhy_wsp_gwq_24_update()
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
                                    var obj = new abhy_wsp_gwq_24_update()
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
                        ABE.obj_abhy_wsp_gwq_24_update.AddRange(WQList);
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
                    var Year = "2024-25 Update";
                    //var PageNumber = result.PageNumber;
                    List<abhy_wsp_gwq_24_update> Final_data = new List<abhy_wsp_gwq_24_update>();
                    List<abhy_wsp_gwq_24_update> WQList = new List<abhy_wsp_gwq_24_update>();
                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        Final_data = ABE.obj_abhy_wsp_gwq_24_update.Where(x => x.State == State && x.District == Dist && x.Block == Block && x.GP == Gram && x.wsp_fyyear == Year).OrderBy(c => c.Well_ID).ToList();
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
                                    var obj = new abhy_wsp_gwq_24_update()
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
                                    var obj = new abhy_wsp_gwq_24_update()
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
                    var Year = "2024-25 Update";
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


            var Details = ABE.obj_abhy_wsp_gram_images_24_update.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year).ToList();
            if (Details.Count < 1)
            {
                Details = ABE.obj_abhy_wsp_gram_images_24_update.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == "2024-25").ToList();
            }
            var Obj = new abhy_wsp_gram_images_24_update();
            string _imgname = string.Empty;
            Malicious_File_Upload_Restriction obj_Validate = new Malicious_File_Upload_Restriction();
            string allowed_file_format = "jpg,png,jpeg";
            bool flag = obj_Validate.CheckValidFile(Location_map_Image_Uplaod, allowed_file_format);

            if (flag == false)
            {
                response = "Your Upload file has Not valid File, Please Upload valid file";
                return Json(response);
            }
            if (Details.Count == 1)
            {
                var Data = Details.SingleOrDefault();

                if (Location_map_Image_Uplaod != null)
                {
                    if (Location_map_Image_Uplaod.FileName != null)
                    {
                        string BasePath = AppDomain.CurrentDomain.BaseDirectory; //ConfigurationManager.AppSettings["path"];
                        string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\WspMaps\\" + Gram + "\\");
                        string fileName = getuniqueId(Location_map_Image_Uplaod.FileName);
                        if (!Directory.Exists(path))
                        {
                            Directory.CreateDirectory(path);
                        }
                        path = path + fileName;
                        string[] count = Location_map_Image_Uplaod.FileName.Split('.');
                        if (count.Length != 2)
                        {
                            response = "Your Upload file has Double Extention, Please Upload valid file";
                        }
                        else
                        {
                            Location_map_Image_Uplaod.SaveAs(path);
                            var File_path = "/Ataljalimages/WspMaps/" + Gram + "/" + fileName;
                            Data.gpimage1 = File_path;
                            Data.gpimage1_filename = fileName;
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
                            string BasePath = AppDomain.CurrentDomain.BaseDirectory; //ConfigurationManager.AppSettings["path"];
                            string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\WspMaps\\" + Gram + "\\");
                            string fileName = getuniqueId(Location_map_Image_Uplaod.FileName);

                            if (!Directory.Exists(path))
                            {
                                Directory.CreateDirectory(path);
                            }
                            path = path + fileName;
                            string[] count = Location_map_Image_Uplaod.FileName.Split('.');
                            if (count.Length != 2)
                            {
                                response = "Your Upload file has Double Extention, Please Upload valid file";
                            }
                            else
                            {
                                Location_map_Image_Uplaod.SaveAs(path);
                                var File_path = "/Ataljalimages/WspMaps/" + Gram + "/" + fileName;
                                Obj.gpimage1 = File_path;
                                Obj.gpimage1_filename = fileName;
                                Obj.month = Month;
                                Obj.year = year;
                                Obj.month_ordery_by = order_by_month;
                                var TodayDate1 = DateTime.Now.ToString();
                                var Datea = TodayDate1.Split('/', ' ', '-');
                                var Today1 = Datea[1] + '/' + Datea[0] + '/' + Datea[2];
                                Obj.datetime = Today1;
                                ABE.obj_abhy_wsp_gram_images_24_update.Add(Obj);
                                ABE.SaveChanges();
                                response = "Location Map Image Upload Successfully";
                            }
                        }
                    }

                }
                else
                {
                    response = "Duplicate Data is there";
                }
            }
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

            var Details = ABE.obj_abhy_wsp_gram_images_24_update.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == year).ToList();
            if (Details.Count < 1)
            {
                Details = ABE.obj_abhy_wsp_gram_images_24_update.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == "2024-25").ToList();
            }
            var Obj = new abhy_wsp_gram_images_24_update();

            string _imgname = string.Empty;
            Malicious_File_Upload_Restriction obj_Validate = new Malicious_File_Upload_Restriction();
            string allowed_file_format = "jpg,png,jpeg";
            bool flag = obj_Validate.CheckValidFile(Watershed_map_Image_Uplaod, allowed_file_format);
            if (flag == false)
            {
                //Session["Images_Upload"] = "Your Upload file has Not valid File, Please Upload valid file";
                //return RedirectToAction("WSPgram", "Wsp_new");
                response = "Your Upload file has Not valid File, Please Upload valid file";
                return Json(response);
            }
            if (Watershed_map_Image_Uplaod != null)
            {
                if (Details.Count == 1)
                {
                    var Data = Details.SingleOrDefault();

                    string fname = getuniqueId(Watershed_map_Image_Uplaod.FileName);

                    string BasePath = AppDomain.CurrentDomain.BaseDirectory; //ConfigurationManager.AppSettings["path"];
                    string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\WatershedMap\\" + Gram + "\\");
                    if (!Directory.Exists(path))
                    {
                        Directory.CreateDirectory(path);
                    }
                    path = path + fname;
                    string[] count = Watershed_map_Image_Uplaod.FileName.Split('.');
                    if (count.Length != 2)
                    {
                        //Session["Images_Upload"] = "Your Upload file has Double Extention, Please Upload valid file";
                        response = "Your Upload file has Double Extention, Please Upload valid file";
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

                        string fname;

                        fname = getuniqueId(Watershed_map_Image_Uplaod.FileName);

                        string BasePath = AppDomain.CurrentDomain.BaseDirectory;// ConfigurationManager.AppSettings["path"];
                        string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\WatershedMap\\" + Gram + "\\");
                        if (!Directory.Exists(path))
                        {
                            Directory.CreateDirectory(path);
                        }
                        path = path + fname;
                        string[] count = Watershed_map_Image_Uplaod.FileName.Split('.');
                        if (count.Length != 2)
                        {
                            response = "Your Upload file has Double Extention, Please Upload valid file";
                        }
                        else
                        {
                            Watershed_map_Image_Uplaod.SaveAs(path);
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
                            ABE.obj_abhy_wsp_gram_images_24_update.Add(Obj);
                            ABE.SaveChanges();
                            response = "Watershed Map Image Upload Successfully";
                        }
                    }
                    else
                    {
                        response = "Duplicate Data is there";
                    }
                }

            }
            else
            {
                response = "Please Upload Watershed Map Image";
            }
            return Json(response);


        }

        [HttpPost]

        public ActionResult Aquifer_map_Image_Uplaod(HttpPostedFileBase Aquifer_map_Image_Uplaod, string state_name, string district_name, string block_name, string gpname, string year)
        {
            DateTime now = DateTime.Now;
            int month = now.Month;

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

            var Details = ABE.obj_abhy_wsp_gram_images_24_update.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == year).ToList();
            if (Details.Count < 1)
            {
                Details = ABE.obj_abhy_wsp_gram_images_24_update.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == "2024-25").ToList();
            }
            var Obj = new abhy_wsp_gram_images_24_update();
            string _imgname = string.Empty;
            Malicious_File_Upload_Restriction obj_Validate = new Malicious_File_Upload_Restriction();
            string allowed_file_format = "jpg,png,jpeg";
            bool flag = obj_Validate.CheckValidFile(Aquifer_map_Image_Uplaod, allowed_file_format);
            if (flag == false)
            {
                response = "Your Upload file has Not valid File, Please Upload valid file";
                return Json(response);
            }
            if (Details.Count == 1)
            {
                var Data = Details.SingleOrDefault();

                if (Aquifer_map_Image_Uplaod != null)
                {
                    if (Aquifer_map_Image_Uplaod.FileName != null)
                    {

                        string BasePath = AppDomain.CurrentDomain.BaseDirectory; //ConfigurationManager.AppSettings["path"];
                        string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\AquiferMap\\" + Gram + "\\");
                        string fileName = getuniqueId(Aquifer_map_Image_Uplaod.FileName);
                        if (!Directory.Exists(path))
                        {
                            Directory.CreateDirectory(path);
                        }
                        path = path + fileName;
                        string[] count = Aquifer_map_Image_Uplaod.FileName.Split('.');
                        if (count.Length != 2)
                        {
                            response = "Your Upload file has Double Extention, Please Upload valid file";
                        }
                        else
                        {

                            Aquifer_map_Image_Uplaod.SaveAs(path);
                            var File_path = "/Ataljalimages/AquiferMap/" + Gram + "/" + fileName;
                            Data.gpimage3 = File_path;
                            Data.gpimage3_filename = fileName;
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

                            string BasePath = AppDomain.CurrentDomain.BaseDirectory;// ConfigurationManager.AppSettings["path"];
                            string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\AquiferMap\\" + Gram + "\\");
                            string fileName = getuniqueId(Aquifer_map_Image_Uplaod.FileName);
                            if (!Directory.Exists(path))
                            {
                                Directory.CreateDirectory(path);
                            }
                            path = path + fileName;
                            string[] count = Aquifer_map_Image_Uplaod.FileName.Split('.');
                            if (count.Length != 2)
                            {
                                response = "Your Upload file has Double Extention, Please Upload valid file";
                            }
                            else
                            {
                                Aquifer_map_Image_Uplaod.SaveAs(path);

                                var File_path = "/Ataljalimages/AquiferMap/" + Gram + "/" + fileName;
                                Obj.gpimage3 = File_path;
                                Obj.gpimage3_filename = fileName;
                                var TodayDate1 = DateTime.Now.ToString();
                                var Datea = TodayDate1.Split('/', ' ', '-');
                                var Today1 = Datea[1] + '/' + Datea[0] + '/' + Datea[2];
                                Obj.datetime = Today1;
                                Obj.month = Month;
                                Obj.year = year;
                                Obj.month_ordery_by = order_by_month;
                                ABE.obj_abhy_wsp_gram_images_24_update.Add(Obj);
                                ABE.SaveChanges();
                                response = "Aquifer Map Image Upload Successfully";
                            }

                        }
                    }

                }
                else
                {
                    response = "Duplicate Data is there";

                }
            }
            return Json(response);
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

            var Details = ABE.obj_abhy_wsp_gram_images_24_update.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();
            if (Details.Count < 1)
            {
                Details = ABE.obj_abhy_wsp_gram_images_24_update.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == "2024-25").ToList();
            }
            var Obj = new abhy_wsp_gram_images_24_update();
            string _imgname = string.Empty;
            Malicious_File_Upload_Restriction obj_Validate = new Malicious_File_Upload_Restriction();
            string allowed_file_format = "jpg,png,jpeg";
            bool flag = obj_Validate.CheckValidFile(Drainage_map_Image_Uplaod, allowed_file_format);
            if (flag == false)
            {
                response = "Your Upload file has Not valid File, Please Upload valid file";
                //return RedirectToAction("WSPgram", "Wsp_new");
                //return Json("Your Upload file has Not valid File, Please Upload valid file", JsonRequestBehavior.AllowGet);
            }
            if (Details.Count == 1)
            {
                var Data = Details.SingleOrDefault();
                if (Drainage_map_Image_Uplaod != null)
                {
                    if (Drainage_map_Image_Uplaod.FileName != null)
                    {

                        string BasePath = AppDomain.CurrentDomain.BaseDirectory; //ConfigurationManager.AppSettings["path"];
                        string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\DrainageMap\\");
                        if (!Directory.Exists(path))
                        {
                            Directory.CreateDirectory(path);
                        }
                        path = path + Drainage_map_Image_Uplaod.FileName;
                        string[] count = Drainage_map_Image_Uplaod.FileName.Split('.');
                        if (count.Length != 2)
                        {
                            //Session["Images_Upload"] = "Your Upload file has Double Extention, Please Upload valid file";
                            response = "Your Upload file has Double Extention, Please Upload valid file";
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

                            string BasePath = AppDomain.CurrentDomain.BaseDirectory;// ConfigurationManager.AppSettings["path"];
                            string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\DrainageMap\\");
                            if (!Directory.Exists(path))
                            {
                                Directory.CreateDirectory(path);
                            }
                            path = path + Drainage_map_Image_Uplaod.FileName;
                            string[] count = Drainage_map_Image_Uplaod.FileName.Split('.');
                            if (count.Length != 2)
                            {
                                //Session["Images_Upload"] = "Your Upload file has Double Extention, Please Upload valid file";
                                response = "Your Upload file has Double Extention, Please Upload valid file";
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
                                ABE.obj_abhy_wsp_gram_images_24_update.Add(Obj);
                                ABE.SaveChanges();
                                response = "Drainage Map Image Upload Successfully";
                            }
                        }
                    }
                }
                else
                {
                    response = "Duplicate is there";
                }
            }
            return Json(response);
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

                    var DEtails = ABE.obj_abhy_wsp_wateravailbility_new_24_update.Where(x => x.id == id).ToList();
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
                    var Year = "2024-25 Update";
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
            var Year = "2024-25 Update";
            Decimal TotalAnyArea = 0;
            string innovative_measure = innovative_measures;
            if (innovative_measures.Contains("-") == true)
            {
                string[] innovative_meas = innovative_measures.Split('-');
                innovative_measure = "Other";
            }

            var MetaId = ABE.obj_abhy_wsp_demand_meta_24_update.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram).FirstOrDefault();
            if (MetaId != null)
            {
                var AnyArea = ABE.obj_abhy_wsp_demand_anyother_24_update.Where(x => x.meta_id == MetaId.id && x.innovative_measures == innovative_measure).ToList();
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
            var Year = "2024-25 Update";

            string msg = "";
            Decimal TotalSpArea = 0;
            if (!string.IsNullOrEmpty(total_area_proposed_sprinkler))
            {
                TotalSpArea = Convert.ToDecimal(total_area_proposed_sprinkler);
                List<abhy_wsp_demand_fund_details_24_update> SpFundArea = new List<abhy_wsp_demand_fund_details_24_update>();

                var MetaId = ABE.obj_abhy_wsp_demand_meta_24_update.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.data_year == Year).FirstOrDefault();
                if (MetaId != null)
                {
                    var SpArea = ABE.obj_abhy_wsp_demand_sprinkler_24_update.Where(x => x.meta_id == MetaId.id).ToList();
                    if (SpArea.Count != 0)
                    {
                        //Decimal TotalSpArea = SpArea.Sum(x => Convert.ToDecimal(x.area_proposed));
                        SpFundArea = ABE.obj_abhy_wsp_demand_fund_details_24_update.Where(x => x.meta_id == MetaId.id && x.fund_for == "Sprinkler").ToList();
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
            var Year = "2024-25 Update";
            string msg = "";
            Decimal TotalDripArea = 0;
            if (total_area_proposed_drip != "")
            {
                TotalDripArea = Convert.ToDecimal(total_area_proposed_drip);


                List<abhy_wsp_demand_fund_details_24_update> DripFundArea = new List<abhy_wsp_demand_fund_details_24_update>();
                var MetaId = ABE.obj_abhy_wsp_demand_meta_24_update.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.data_year == Year).FirstOrDefault();
                if (MetaId != null)
                {

                    var DripArea = ABE.obj_abhy_wsp_demand_drip_24_update.Where(x => x.meta_id == MetaId.id).ToList();
                    if (DripArea.Count != 0)
                    {
                        //Decimal TotalDripArea = DripArea.Sum(x => Convert.ToDecimal(x.area_proposed));
                        DripFundArea = ABE.obj_abhy_wsp_demand_fund_details_24_update.Where(x => x.meta_id == MetaId.id && x.fund_for == "Drip").ToList();
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
            var Year = "2024-25 Update";
            Decimal TotalPipeArea = 0;
            string msg = "";
            if (total_area_proposed_pipe != "")
            {
                TotalPipeArea = Convert.ToDecimal(total_area_proposed_pipe);

                List<abhy_wsp_demand_fund_details_24_update> PipeFundArea = new List<abhy_wsp_demand_fund_details_24_update>();
                var MetaId = ABE.obj_abhy_wsp_demand_meta_24_update.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.data_year == Year).FirstOrDefault();
                if (MetaId != null)
                {

                    var PipeArea = ABE.obj_abhy_wsp_demand_pipeline_24_update.Where(x => x.meta_id == MetaId.id).ToList();
                    if (PipeArea.Count != 0)
                    {
                        //Decimal TotalPipeArea = PipeArea.Sum(x => Convert.ToDecimal(x.area_proposed));
                        PipeFundArea = ABE.obj_abhy_wsp_demand_fund_details_24_update.Where(x => x.meta_id == MetaId.id && x.fund_for == "UG Pipelines").ToList();
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
            var Year = "2024-25 Update";
            Decimal TotalCropArea = 0;
            string msg = "";
            if (total_area_proposed_crop != "")
            {
                TotalCropArea = Convert.ToDecimal(total_area_proposed_crop);
                List<abhy_wsp_demand_fund_details_24_update> CropFundArea = new List<abhy_wsp_demand_fund_details_24_update>();
                var MetaId = ABE.obj_abhy_wsp_demand_meta_24_update.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.data_year == Year).FirstOrDefault();
                if (MetaId != null)
                {
                    var CropArea = ABE.obj_abhy_wsp_demand_change_crop_24_update.Where(x => x.meta_id == MetaId.id).ToList();
                    if (CropArea.Count != 0)
                    {
                        //Decimal TotalCropArea = CropArea.Sum(x => Convert.ToDecimal(x.area_ch));
                        CropFundArea = ABE.obj_abhy_wsp_demand_fund_details_24_update.Where(x => x.meta_id == MetaId.id && x.fund_for == "Crop Diversification").ToList();
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
            var Year = "2024-25 Update";
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

                List<abhy_wsp_demand_fund_details_24_update> AnyFundArea = new List<abhy_wsp_demand_fund_details_24_update>();
                var MetaId = ABE.obj_abhy_wsp_demand_meta_24_update.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram).FirstOrDefault();
                if (MetaId != null)
                {
                    var AnyArea = ABE.obj_abhy_wsp_demand_anyother_24_update.Where(x => x.meta_id == MetaId.id).ToList();
                    if (AnyArea.Count != 0)
                    {
                        AnyFundArea = ABE.obj_abhy_wsp_demand_fund_details_24_update.Where(x => x.meta_id == MetaId.id && x.fund_for == "Other Measures").ToList();
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
            var Year = "2024-25 Update";
            string msg = "";
            List<abhy_wsp_demand_fund_details_24_update> SpFundArea = new List<abhy_wsp_demand_fund_details_24_update>();
            List<abhy_wsp_demand_fund_details_24_update> DripFundArea = new List<abhy_wsp_demand_fund_details_24_update>();
            List<abhy_wsp_demand_fund_details_24_update> PipeFundArea = new List<abhy_wsp_demand_fund_details_24_update>();
            List<abhy_wsp_demand_fund_details_24_update> CropFundArea = new List<abhy_wsp_demand_fund_details_24_update>();
            List<abhy_wsp_demand_fund_details_24_update> AnyFundArea = new List<abhy_wsp_demand_fund_details_24_update>();

            var MetaId = ABE.obj_abhy_wsp_demand_meta_24_update.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.data_year == Year).FirstOrDefault();
            if (MetaId != null)
            {
                var SpArea = ABE.obj_abhy_wsp_demand_sprinkler_24_update.Where(x => x.meta_id == MetaId.id).ToList();
                if (SpArea.Count != 0)
                {
                    Decimal TotalSpArea = SpArea.Sum(x => Convert.ToDecimal(x.area_proposed));
                    SpFundArea = ABE.obj_abhy_wsp_demand_fund_details_24_update.Where(x => x.meta_id == MetaId.id && x.fund_for == "Sprinkler").ToList();
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

                var DripArea = ABE.obj_abhy_wsp_demand_drip_24_update.Where(x => x.meta_id == MetaId.id).ToList();
                if (DripArea.Count != 0)
                {
                    Decimal TotalDripArea = DripArea.Sum(x => Convert.ToDecimal(x.area_proposed));
                    DripFundArea = ABE.obj_abhy_wsp_demand_fund_details_24_update.Where(x => x.meta_id == MetaId.id && x.fund_for == "Drip").ToList();
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

                var PipeArea = ABE.obj_abhy_wsp_demand_pipeline_24_update.Where(x => x.meta_id == MetaId.id).ToList();
                if (PipeArea.Count != 0)
                {
                    Decimal TotalPipeArea = PipeArea.Sum(x => Convert.ToDecimal(x.area_proposed));
                    PipeFundArea = ABE.obj_abhy_wsp_demand_fund_details_24_update.Where(x => x.meta_id == MetaId.id && x.fund_for == "UG Pipelines").ToList();
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

                var CropArea = ABE.obj_abhy_wsp_demand_change_crop_24_update.Where(x => x.meta_id == MetaId.id).ToList();
                if (CropArea.Count != 0)
                {
                    Decimal TotalCropArea = CropArea.Sum(x => Convert.ToDecimal(x.area_ch));
                    CropFundArea = ABE.obj_abhy_wsp_demand_fund_details_24_update.Where(x => x.meta_id == MetaId.id && x.fund_for == "Crop Diversification").ToList();
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


                var AnyArea = ABE.obj_abhy_wsp_demand_anyother_24_update.Where(x => x.meta_id == MetaId.id).ToList();
                if (AnyArea.Count != 0)
                {
                    Decimal TotalAnyArea = AnyArea.Sum(x => Convert.ToDecimal(x.area_irrigation));
                    AnyFundArea = ABE.obj_abhy_wsp_demand_fund_details_24_update.Where(x => x.meta_id == MetaId.id && x.fund_for == "Other Measures").ToList();
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


        private void Log(string message)
        {
            string logFilePath = Server.MapPath("~/log24_25.txt");
            using (StreamWriter writer = new StreamWriter(logFilePath, true))
            {
                writer.WriteLine($"{DateTime.Now}: {message}");
            }
        }



        public ActionResult DownloadZipFile(int Id)
        {
            // Retrieve file paths from the database using Entity Framework
            try
            {
                string State = "";
                string Dist = "";
                string Block = "";
                string Gram = "";
                string Year = "";
                List<string> obj = new List<string>();
                var Data = ABE.obj_abhy_mis_wsp_approved_24_update.Where(x => x.id == Id).FirstOrDefault();
                var Wsp_Pdf = ABE.obj_abhy_mis_wsp_approved_24_update.Where(x => x.id == Id).Select(x => x.wsp_path).FirstOrDefault();
                if (Data != null)
                {
                    State = Data.state;
                    Dist = Data.dist;
                    Block = Data.block;
                    Gram = Data.gp;
                    Year = Data.fy_year;

                    if (Wsp_Pdf != null)
                    {
                        Log($"FileName Wsp_Pdf Year 24-25: {Wsp_Pdf}");

                        obj.Add(Wsp_Pdf);
                    }
                    var DPMU_Pdf = ABE.obj_abhy_wsp_dpmu_declaration_24_update.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.data_year == Year).Select(x => x.dpmu_declaration).FirstOrDefault();
                    if (DPMU_Pdf != null)
                    {
                        Log($"FileName DPMU_Pdf Year 24-25: {DPMU_Pdf}");
                        obj.Add(DPMU_Pdf);
                    }
                    var MOM_Pdf = ABE.obj_abhy_wsp_pgwm_committee_meeting_24_update.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.data_year == Year).Select(x => x.mom_doc).FirstOrDefault();
                    if (MOM_Pdf != null)
                    {
                        Log($"FileName DPMU_Pdf Year 24-25: {MOM_Pdf}");
                        obj.Add(MOM_Pdf);
                    }
                    var meeting_res = ABE.obj_abhy_wsp_pgwm_committee_meeting_24_update.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.data_year == Year).Select(x => x.meeting_resolution).FirstOrDefault();
                    if (meeting_res != null)
                    {
                        Log($"FileName meeting_res Year 24-25: {meeting_res}");
                        obj.Add(meeting_res);
                    }
                    var attendance_sheet = ABE.obj_abhy_wsp_pgwm_committee_meeting_24_update.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.data_year == Year).Select(x => x.attendance_sheet).FirstOrDefault();
                    if (attendance_sheet != null)
                    {
                        Log($"FileName attendance_sheet Year 24-25: {attendance_sheet}");
                        obj.Add(attendance_sheet);
                    }
                }
                // Create a memory stream to store the zip file
                using (MemoryStream memoryStream = new MemoryStream())
                {
                    // Create a zip archive
                    using (ZipArchive archive = new ZipArchive(memoryStream, ZipArchiveMode.Create, true))
                    {
                        // Add each PDF file to the zip archive
                        foreach (string pdfFilePath in obj)
                        {
                            //string fileName = Path.GetFileName(pdfFilePath);
                            //// Add files to the zip archive (replace "FilePath1" and "FilePath2" with actual file paths)
                            //string key = AppDomain.CurrentDomain.BaseDirectory;// ConfigurationManager.AppSettings["path"];
                            //string _fname = pdfFilePath.Substring(1);
                            //string _filepath = $"{key}{pdfFilePath.Substring(1)}";

                            string fileName = System.IO.Path.GetFileName(pdfFilePath);
                            //// Add files to the zip archive (replace "FilePath1" and "FilePath2" with actual file paths)
                            //string key = AppDomain.CurrentDomain.BaseDirectory; //ConfigurationManager.AppSettings["path"];
                            //string _fname = pdfFilePath.Substring(1);
                            string _filepath = string.Empty;// $"{key}{pdfFilePath.Substring(1)}";
                            _filepath = Server.MapPath(pdfFilePath);

                            if (System.IO.File.Exists(_filepath))
                            {
                                Log($"Filepath In H Drive-Ataljalimages 24-25: {_filepath}");
                                AddFileToZip(archive, _filepath, fileName);
                            }
                            else
                            {
                                string UpdateFilepath = string.Empty;
                                if (!string.IsNullOrEmpty(pdfFilePath))
                                {
                                    UpdateFilepath = pdfFilePath.Replace("Ataljalimages", "UpdateAtaljalimages");
                                }
                                _filepath = Server.MapPath(UpdateFilepath);
                                Log($"Filepath In H Drive-UpdateAtaljalimages 24-25: {_filepath}");
                                AddFileToZip(archive, _filepath, fileName);
                            }

                        }
                    }

                    // Set the position to the beginning of the stream
                    memoryStream.Position = 0;

                    // Set the response headers
                    Response.Clear();
                    Response.AddHeader("Content-Disposition", "attachment; filename=" + Gram + "_" + Year + "_WaterSecurityPlan.zip");
                    Response.ContentType = "application/zip";

                    // Copy the zip file to the response stream
                    memoryStream.CopyTo(Response.OutputStream);
                    Response.Flush();
                    Response.End();
                }

            }
            catch (Exception ex)
            {
                Log($"ex Message 24-25: {ex.Message.ToString()}"); ;
            }
            return View();
        }


        private void AddFileToZip(ZipArchive archive, string filePath, string entryName)
        {
            try
            {
                // Create a new entry in the zip archive
                ZipArchiveEntry entry = archive.CreateEntry(entryName);

                // Open the file to be added to the archive
                using (FileStream fileStream = new FileStream(filePath, FileMode.Open))
                {
                    // Copy the file content to the zip entry
                    using (Stream entryStream = entry.Open())
                    {
                        fileStream.CopyTo(entryStream);
                    }
                }

            }
            catch (Exception)
            {

                throw;
            }
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
                    var Year = "2024-25 Update";
                    var Month = monthName;
                    var CheckMap = ABE.obj_abhy_wsp_gram_images_24_update.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year).FirstOrDefault();
                    if (CheckMap != null)
                    {
                        if (CheckMap.gpimage1 != null && CheckMap.gpimage1 != "" && CheckMap.gpimage2 != null && CheckMap.gpimage2 != "" && CheckMap.gpimage2 != null && CheckMap.gpimage2 != "")
                        {
                            //RajnISH
                            string CheckDemandArea = ChackAreaIsEqualToFundAreaString();
                            if (CheckDemandArea != "Success")
                            {
                                return Json(CheckDemandArea, JsonRequestBehavior.AllowGet);
                            }
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
                                    var details1 = ABE.obj_abhy_wsp_dpmu_declaration_24_update.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.data_year == Year).FirstOrDefault();
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
            var Year = "2024-25 Update";
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
                    var Year = "2024-25 Update";
                    //var Month = Session["month"].ToString();

                    if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null && Gram != "" && Gram != null && Year != "" && Year != null)
                    {
                        var tol_population = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year && x.d_sent == true).OrderByDescending(x => x.month_order_by).FirstOrDefault();
                        if (tol_population == null)
                        {
                            tol_population = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == "2024-25" && x.d_sent == true).OrderByDescending(x => x.month_order_by).FirstOrDefault();

                        }
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
                    List<abhy_uti_waterdraft_domestic_new_24_update> wtutilization = new List<abhy_uti_waterdraft_domestic_new_24_update>();

                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    var Year = "2024-25 Update";
                    //var Month = Session["month"].ToString();

                    if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null && Gram != "" && Gram != null && Year != "" && Year != null)
                    {
                        wtutilization = ABE.obj_abhy_uti_waterdraft_domestic_new_24_update.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.year == Year).ToList();//total list

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
                            string BasePath = AppDomain.CurrentDomain.BaseDirectory; //ConfigurationManager.AppSettings["path"];
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
                    //    return Json("Your Upload file has Not valid File, Please Upload valid file", JsonRequestBehavior.AllowGet);
                    //}
                    //Malicious_File_Upload_Restriction obj_Validate1 = new Malicious_File_Upload_Restriction();
                    //string allowed_file_format1 = "jpg,png,jpeg";
                    //bool flag1 = obj_Validate1.CheckValidFile(sm_photoshop, allowed_file_format1);
                    //if (flag1 == false)
                    //{
                    //    return Json("Your Upload file has Not valid File, Please Upload valid file", JsonRequestBehavior.AllowGet);
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

                                string BasePath = AppDomain.CurrentDomain.BaseDirectory;// ConfigurationManager.AppSettings["path"];
                                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");

                                if (!Directory.Exists(path))
                                {
                                    Directory.CreateDirectory(path);
                                }
                                path = path + sm_mom.FileName;
                                //string[] count = sm_mom.FileName.Split('.');
                                //if (count.Length != 2)
                                //{
                                //    return Json("Your Upload file has Double Extention, Please Upload valid file", JsonRequestBehavior.AllowGet);
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

                                string BasePath = AppDomain.CurrentDomain.BaseDirectory;// ConfigurationManager.AppSettings["path"];
                                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");

                                if (!Directory.Exists(path))
                                {
                                    Directory.CreateDirectory(path);
                                }
                                path = path + sm_photoshop.FileName;
                                //string[] count = sm_photoshop.FileName.Split('.');
                                //if (count.Length != 2)
                                //{
                                //    return Json("Your Upload file has Double Extention, Please Upload valid file", JsonRequestBehavior.AllowGet);
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
                                    string BasePath = AppDomain.CurrentDomain.BaseDirectory; //ConfigurationManager.AppSettings["path"];
                                    string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");

                                    if (!Directory.Exists(path))
                                    {
                                        Directory.CreateDirectory(path);
                                    }
                                    path = path + sm_mom.FileName;
                                    //string[] count = sm_mom.FileName.Split('.');
                                    //if (count.Length != 2)
                                    //{
                                    //    return Json("Your Upload file has Double Extention, Please Upload valid file", JsonRequestBehavior.AllowGet);
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

                                    string BasePath = AppDomain.CurrentDomain.BaseDirectory; //ConfigurationManager.AppSettings["path"];
                                    string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");

                                    if (!Directory.Exists(path))
                                    {
                                        Directory.CreateDirectory(path);
                                    }
                                    path = path + sm_photoshop.FileName;
                                    //string[] count = sm_mom.FileName.Split('.');
                                    //if (count.Length != 2)
                                    //{
                                    //    return Json("Your Upload file has Double Extention, Please Upload valid file", JsonRequestBehavior.AllowGet);
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
                    List<abhy_wsp_gpdata_new_24_update> ddetails = new List<abhy_wsp_gpdata_new_24_update>();


                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString().Trim();
                    var Dist = Session["gdist"].ToString().Trim();

                    var Block = Session["gblock"].ToString().Trim();
                    var Gram = Session["ggram"].ToString().Trim();

                    var year = "2024-25 Update";
                    //var month = Session["month"].ToString();

                    ddetails = ABE.obj_abhy_wsp_gpdata_new_24_update.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gram_panchayat_name == Gram && x.year == year).ToList();//total list
                    if (ddetails.Count == 0)
                    {
                        ddetails = ABE.obj_abhy_wsp_gpdata_new_24_update.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gram_panchayat_name == Gram && x.year == "2024-25").ToList();//total list
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

        [HttpPost]
        public ActionResult baselinedata_geting_status(string Data)
        {

            List<abhy_baseline_gpdata> ddetails = new List<abhy_baseline_gpdata>();
            //List<abhy_baseline_gpdata_remarks> remarks_details = ABE.obj_abhy_baseline_gpdata_remarks.ToList();
            //List<abhy_baseline_gp_remarks> remarks_details = new List<abhy_baseline_gp_remarks>();
            List<abhy_baseline_gpdata> gpdata_details = ABE.obj_abhy_baseline_gpdata.ToList();
            // List<gpprofile> ddetails = new List<gpprofile>();
            JavaScriptSerializer js = new JavaScriptSerializer();
            var result = js.Deserialize<abhy_baseline_gpdata>(Data);
            var State = result.state_name;
            var Dist = result.district_name;
            var Block = result.block_name;
            var Gram = result.gpname;
            var Year = result.year;
            //var Month = Session["month"].ToString();

            if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null)/*  && Month != "0" && Month != "" && Month != null*/
            {
                ddetails = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year && x.d_sent == true).ToList();//total list
            }
            return Json(ddetails, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult baselinedata_Check_Approved_or_Not(string Data)
        {
            string ddetails = "false";
            JavaScriptSerializer js = new JavaScriptSerializer();
            var result = js.Deserialize<abhy_baseline_gpdata>(Data);
            var State = result.state_name;
            var Dist = result.district_name;
            var Block = result.block_name;
            var Gram = result.gpname;
            var Year = "2024-25";
            //var Month = result.month;

            if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != null)
            {
                ddetails = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year).OrderByDescending(x => x.month_order_by).Select(x => x.approved).FirstOrDefault();//total list

            }
            return Json(ddetails, JsonRequestBehavior.AllowGet);
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

            var Year = "2024-25 Update".Trim();
            var data = ABE.obj_abhy_wsp_gpdata_new_24_update.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gram_panchayat_name == Gram && x.year == Year).ToList();//total list
            if (data.Count == 0)
            {
                return Json("You didn't saved the data, Please click on save button in Gram Panchayat (Basic Hydrology Info)", JsonRequestBehavior.AllowGet);
            }
            else
            {
                check = true;
            }
            var Details = ABE.obj_abhy_wsp_gram_images_24_update.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year== Year).FirstOrDefault();

            if (Details != null)
            {

                if ((Details.gpimage1 == "" || Details.gpimage1 == null) || (Details.gpimage2 == "" || Details.gpimage2 == null) || (Details.gpimage3 == "" || Details.gpimage3 == null))
                {
                    return Json($"You didn't upload all maps for {Year}, Please reupload all maps", JsonRequestBehavior.AllowGet);
                }

            }
            else
            {
                return Json($"You didn't upload all maps for {Year}, Please reupload all maps", JsonRequestBehavior.AllowGet);
            }
            
            var WL_Map = ABE.obj_abhy_wsp_gwl_24_update.Where(x => x.state == State && x.district == Dist
                    && x.block == Block && x.grampanchayat == Gram && x.wsp_fyyear == Year).FirstOrDefault();
            if(WL_Map == null)
            {
                var Final_data = AJE.obj_vw_gwl_all.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram).ToList();
                if (Final_data.Count != 0)
                {
                    return Json("You didn't save water level data, Please save", JsonRequestBehavior.AllowGet);
                }
            }
           
            var WQ_Map = ABE.obj_abhy_wsp_gwq_24_update.Where(x => x.State == State && x.District == Dist
                    && x.Block == Block && x.GP == Gram && x.wsp_fyyear == Year).FirstOrDefault();
            if (WQ_Map != null)
            {
                return Json(new { result = true });
            }
            else
            {
                var Final_data = AJE.obj_pv_quality.Where(x => x.State == State && x.District == Dist && x.Block == Block && x.GP == Gram).OrderBy(c => c.Well_ID).ToList();
                if (Final_data.Count != 0)
                {
                    return Json("You didn't save water quality data, Please save", JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json(new { result = true });
                }
            }
        }



        [HttpPost]
        public JsonResult mapvalidate()
        {
           
            var State = Session["gstate"].ToString().Trim();
            var Dist = Session["gdist"].ToString().Trim();

            var Block = Session["gblock"].ToString().Trim();
            var Gram = Session["ggram"].ToString().Trim();

            var Year = "2024-25 Update".Trim();
            var Details = ABE.obj_abhy_wsp_gram_images_24_update.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).FirstOrDefault();
            if (Details != null)
            {
                if ((Details.gpimage1 == "" || Details.gpimage1 == null) || (Details.gpimage2 == "" || Details.gpimage2 == null) || (Details.gpimage3 == "" || Details.gpimage3 == null))
                {
                    return Json("You didn't upload all maps, Please upload all maps", JsonRequestBehavior.AllowGet);
                }
                else {
                    return Json(new { result = true });
                }
            }
            else
            {
                return Json("You didn't upload all maps, Please upload all maps", JsonRequestBehavior.AllowGet);
            }

            
        }



        [HttpPost]
        public ActionResult CheckDataGP()
        {
            var State = Session["gstate"].ToString().Trim();
            var Dist = Session["gdist"].ToString().Trim();

            var Block = Session["gblock"].ToString().Trim();
            var Gram = Session["ggram"].ToString().Trim();

            var Year = "2024-25 Update".Trim();
            var ddetails = ABE.obj_abhy_wsp_gpdata_new_24_update.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gram_panchayat_name == Gram && x.year == Year).ToList();//total list
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

            var Year = "2024-25 Update".Trim();
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

            var Year = "2024-25 Update".Trim();
            var Details = ABE.obj_abhy_wsp_gram_images_24_update.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year).FirstOrDefault();

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
        public ActionResult CheckDataWaterAvai()
        {
            if (Session["UserId"] != null)
            {
                var State = Session["gstate"].ToString().Trim();
                var Dist = Session["gdist"].ToString().Trim();

                var Block = Session["gblock"].ToString().Trim();
                var Gram = Session["ggram"].ToString().Trim();

                var Year = "2024-25 Update".Trim();
                var data = ABE.obj_abhy_wsp_wateravailbility_new_24_update.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.year == Year).ToList();

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
                bool result = false;
                var State = Session["gstate"].ToString().Trim();
                var Dist = Session["gdist"].ToString().Trim();
                var Block = Session["gblock"].ToString().Trim();
                var Gram = Session["ggram"].ToString().Trim();
                var Year = "2024-25 Update".Trim();
                var data = ABE.obj_abhy_waterdraft_irrigation_meta_24_update.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.data_year == Year).ToList();
                if (data.Count == 0)
                {
                    return Json("You didn't saved the data, Please click on save all button", JsonRequestBehavior.AllowGet);
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
        public ActionResult CheckDataWaterutilization()     //Akash
        {
            if (Session["UserId"] != null)
            {
                var State = Session["gstate"].ToString().Trim();
                var Dist = Session["gdist"].ToString().Trim();
                var Block = Session["gblock"].ToString().Trim();
                var Gram = Session["ggram"].ToString().Trim();
                var Year = "2024-25 Update";
                var data = ABE.obj_abhy_waterdraft_irrigation_meta_24_update.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.data_year == Year).FirstOrDefault();

                if (data == null)
                {
                    return Json("You didn't saved the data, Please click on save all button", JsonRequestBehavior.AllowGet);
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
        public ActionResult SaveGrampanchayatDetails(string Data)
        {
            if (Session["UserId"] != null)
            {
                DateTime now = DateTime.Now;
                int month = now.Month;

                // Get the name of the month
                string monthName = CultureInfo.CurrentCulture.DateTimeFormat.GetMonthName(month);

                List<abhy_wsp_gpdata_new_24_update> ddetails = new List<abhy_wsp_gpdata_new_24_update>();
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<abhy_wsp_gpdata_new_24_update>(Data);
                abhy_wsp_gpdata_new_24_update obj = new abhy_wsp_gpdata_new_24_update();
                var State = Session["gstate"].ToString().Trim();
                var Dist = Session["gdist"].ToString().Trim();

                var Block = Session["gblock"].ToString().Trim();
                var Gram = Session["ggram"].ToString().Trim();

                var Year = "2024-25 Update".Trim();
                //var Month = Session["month"].ToString().Trim();
                abhy_wsp_approved_status dd = new abhy_wsp_approved_status();
                var DataCheck = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.year == Year).ToList();
                if(DataCheck.Count == 0)
                {
                    dd.state_name = State;
                    dd.district_name = Dist;
                    dd.block_name = Block;
                    dd.gp_name = Gram;
                    dd.year = Year;
                    dd.status_id = 1;
                    ABE.obj_abhy_wsp_approved_status.Add(dd);
                    ABE.SaveChanges();
                }
                ddetails = ABE.obj_abhy_wsp_gpdata_new_24_update.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gram_panchayat_name == Gram && x.year == Year).ToList();//total list
                if (ddetails.Count < 1)
                {
                    ddetails = ABE.obj_abhy_wsp_gpdata_new_24_update.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gram_panchayat_name == Gram && x.year == "2024-25").ToList();//total list
                }
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
                        ABE.obj_abhy_wsp_gpdata_new_24_update.Add(obj);
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

        public ActionResult Water_Utilization_Info()
        {
            var userid = Convert.ToInt32(Session["UserId"]);
            var State = Session["gstate"].ToString();
            var Dist = Session["gdist"].ToString();

            var Block = Session["gblock"].ToString();
            var Gram = Session["ggram"].ToString();
            var year = "2024-25 Update";
            double TotalWaterDemand = 0;
            double wb_gw_utili = 0;
            double wb_sw_utili = 0;
            var DomesticData = ABE.obj_abhy_uti_waterdraft_domestic_new_24_update.
                      Where(n => n.state == State && n.district == Dist && n.block == Block && n.gp == Gram && n.year == year).
                      Select(x => new { x.water_deman_hum, x.water_deman_liv, x.water_dem_hum, x.water_dem_liv }).FirstOrDefault();
            if (DomesticData != null)
            {
                wb_gw_utili = Convert.ToDouble(DomesticData.water_deman_hum) + Convert.ToDouble(DomesticData.water_deman_liv);
                wb_sw_utili = Convert.ToDouble(DomesticData.water_dem_hum) + Convert.ToDouble(DomesticData.water_dem_liv);
                //wb_total_utili += wb_gw_utili + wb_sw_utili;
            }

            var DataIrrigation = ABE.obj_abhy_waterdraft_irrigation_meta_24_update.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.data_year == year).Select(x => new { x.uti_ground_water, x.uti_surface_water }).FirstOrDefault();
            if (DataIrrigation != null)
            {
                if (DataIrrigation.uti_ground_water != "" || DataIrrigation.uti_surface_water != "")
                {
                    wb_gw_utili += Convert.ToDouble(DataIrrigation.uti_ground_water);
                    wb_sw_utili += Convert.ToDouble(DataIrrigation.uti_surface_water);
                }
            }

            var industry = ABE.obj_abhy_waterdraft_industry_24_update.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == year).ToList();
            if (industry.Count != 0)
            {
                wb_gw_utili += industry.Sum(x => x.indus_grd_water);
                wb_sw_utili += industry.Sum(x => x.indus_sur_water);
                //wb_total_utili += wb_gw_utili + wb_sw_utili;
            }

            var Other = ABE.obj_abhy_waterdraft_other_24_update.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == year).ToList();
            if (Other.Count != 0)
            {
                wb_gw_utili += Other.Sum(x => x.oth_grd_water);
                wb_sw_utili += Other.Sum(x => x.oth_sur_water);

            }
            TotalWaterDemand = wb_gw_utili + wb_sw_utili;
            return Json(TotalWaterDemand, JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public ActionResult Water_Domestic_Details()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_uti_waterdraft_domestic_new_24_update> ddetails = new List<abhy_uti_waterdraft_domestic_new_24_update>();

                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    var year = "2024-25 Update";

                    if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null && Gram != "" && Gram != null && year != "" && year != null && year != "0")
                    {
                        ddetails = ABE.obj_abhy_uti_waterdraft_domestic_new_24_update.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.year == year).ToList();//total list

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
        //            var year = "2024-25";

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







        [HttpGet]
        public ActionResult WaterAvailabilty_GPAREA_Details()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_wsp_master_data_24_update> ddetails = new List<abhy_wsp_master_data_24_update>();

                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();

                    if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null && Gram != "" && Gram != null)
                    {
                        ddetails = ABE.obj_abhy_wsp_master_data_24_update.Where(x => x.state_name.ToLower() == State.ToLower() && x.district_name.ToLower() == Dist.ToLower() && x.block_name.ToLower() == Block.ToLower() && x.gp_name == Gram).ToList();//total list
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
                    List<abhy_wsp_wateravailbility_new_24_update> ddetails = new List<abhy_wsp_wateravailbility_new_24_update>();

                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    string year = "2024-25 Update";
                    //var month = Session["month"].ToString();

                    ddetails = ABE.obj_abhy_wsp_wateravailbility_new_24_update.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.year == year).ToList();//total list
                    return Json(ddetails, JsonRequestBehavior.AllowGet);
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

        [HttpGet]
        public ActionResult WaterutilizationInfo_Details()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_waterdraft_irrigation_meta_24_update> ddetails = new List<abhy_waterdraft_irrigation_meta_24_update>();

                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    string year = "2024-25 Update";
                    //var month = Session["month"].ToString();

                    ddetails = ABE.obj_abhy_waterdraft_irrigation_meta_24_update.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.data_year == year).ToList();//total list
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
                    List<abhy_waterdraft_industry_24_update> ddetails = new List<abhy_waterdraft_industry_24_update>();

                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();

                    if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null && Gram != "" && Gram != null)
                    {
                        ddetails = ABE.obj_abhy_waterdraft_industry_24_update.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                    }
                    else if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null)
                    {
                        ddetails = ABE.obj_abhy_waterdraft_industry_24_update.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                    }
                    else if (State != "" && State != null && Dist != "" && Dist != null)
                    {
                        ddetails = ABE.obj_abhy_waterdraft_industry_24_update.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                    }
                    else if (State != "" && State != null)
                    {
                        ddetails = ABE.obj_abhy_waterdraft_industry_24_update.Where(x => x.state_name == State).ToList();//total list

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
                    var year = "2024-25 Update";
                    var Data = ABE.obj_abhy_wsp_wateravailbility_new_24_update.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.year == year).Select(x => new { x.tot_grd_wat_avail, x.total_sirface_water }).FirstOrDefault();
                    if (Data != null)
                    {
                        wb_gw_avail = Data.tot_grd_wat_avail;
                        wb_sw_avail = Data.total_sirface_water;
                        wb_total_avail = wb_gw_avail + wb_sw_avail;
                    }
                    else
                    {
                        return Json("1", JsonRequestBehavior.AllowGet);
                    }

                    var DomesticData = ABE.obj_abhy_uti_waterdraft_domestic_new_24_update.
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
                    var DataIrrigation = ABE.obj_abhy_waterdraft_irrigation_meta_24_update.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.data_year == year).Select(x => new { x.uti_ground_water, x.uti_surface_water }).FirstOrDefault();
                    if (DataIrrigation == null)
                    {
                        DataIrrigation = ABE.obj_abhy_waterdraft_irrigation_meta_24_update.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.data_year == "2024-25").Select(x => new { x.uti_ground_water, x.uti_surface_water }).FirstOrDefault();
                    }
                    if (DataIrrigation != null)
                    {
                        if(DataIrrigation.uti_ground_water != "" && DataIrrigation.uti_ground_water != null && DataIrrigation.uti_surface_water != "" && DataIrrigation.uti_surface_water != null)
                        {
                            wb_gw_utili += Convert.ToDouble(DataIrrigation.uti_ground_water);
                            wb_sw_utili += Convert.ToDouble(DataIrrigation.uti_surface_water);
                        }
                        else
                        {
                            return Json("3", JsonRequestBehavior.AllowGet);
                        }

                        
                        //wb_total_utili += wb_gw_utili + wb_sw_utili;
                    }
                    else
                    {
                        return Json("3", JsonRequestBehavior.AllowGet);
                    }
                    var industry = ABE.obj_abhy_waterdraft_industry_24_update.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();
                    if (industry.Count != 0)
                    {
                        wb_gw_utili += industry.Sum(x => x.indus_grd_water);
                        wb_sw_utili += industry.Sum(x => x.indus_sur_water);
                        //wb_total_utili += wb_gw_utili + wb_sw_utili;
                    }

                    var Other = ABE.obj_abhy_waterdraft_other_24_update.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();
                    if (Other.Count != 0)
                    {
                        wb_gw_utili += Other.Sum(x => x.oth_grd_water);
                        wb_sw_utili += Other.Sum(x => x.oth_sur_water);

                    }
                    wb_total_utili = wb_gw_utili + wb_sw_utili;
                    wb_gw_balance = wb_gw_avail - wb_gw_utili;
                    wb_sw_balance = wb_sw_avail - wb_sw_utili;
                    wb_total_balance = wb_gw_balance + wb_sw_balance;
                    var ddetails = ABE.obj_abhy_wsp_waterbalance_new_24_update.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == year).FirstOrDefault();//total list
                    if (ddetails != null)
                    {
                        ddetails.wb_gw_avail = wb_gw_avail;
                        ddetails.wb_sw_avail = wb_sw_avail;
                        ddetails.wb_total_avail = wb_total_avail;
                        ddetails.wb_gw_utili = wb_gw_utili;
                        ddetails.wb_sw_utili = wb_sw_utili;
                        ddetails.wb_total_utili = wb_total_utili;
                        ddetails.wb_gw_balance = wb_gw_balance;
                        ddetails.wb_sw_balance = wb_sw_balance;
                        ddetails.wb_total_balance = wb_total_balance;
                        ddetails.datetime = DateTime.Now.ToString();
                        ABE.Entry(ddetails).State = EntityState.Modified;
                        ABE.SaveChanges();
                    }
                    else
                    {
                        abhy_wsp_waterbalance_new_24_update obj = new abhy_wsp_waterbalance_new_24_update();
                        obj.state_name = State;
                        obj.district_name = Dist;
                        obj.block_name = Block;
                        obj.gpname = Gram;
                        obj.year = year;
                        obj.wb_gw_avail = wb_gw_avail;
                        obj.wb_sw_avail = wb_sw_avail;
                        obj.wb_total_avail = wb_total_avail;
                        obj.wb_gw_utili = wb_gw_utili;
                        obj.wb_sw_utili = wb_sw_utili;
                        obj.wb_total_utili = wb_total_utili;
                        obj.wb_gw_balance = wb_gw_balance;
                        obj.wb_sw_balance = wb_sw_balance;
                        obj.wb_total_balance = wb_total_balance;
                        obj.datetime = DateTime.Now.ToString();
                        ABE.obj_abhy_wsp_waterbalance_new_24_update.Add(obj);
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

        [HttpPost]
        public ActionResult Check_WaterBalance_Data()
        {
            bool check = false;
            var State = Session["gstate"].ToString().Trim();
            var Dist = Session["gdist"].ToString().Trim();

            var Block = Session["gblock"].ToString().Trim();
            var Gram = Session["ggram"].ToString().Trim();

            var Year = "2024-25 Update".Trim();
            var data = ABE.obj_abhy_wsp_waterbalance_new_24_update.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year).ToList();//total list
            if (data.Count == 0)
            {
                return Json("Gram Panchayat Nodal Officer didn't saved the data", JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json(new { result = true });

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
                    var year = "2024-25 Update";
                    var ddetails = ABE.obj_abhy_wsp_waterbalance_new_24_update.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == year).FirstOrDefault();//total list
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

        [HttpGet]
        public ActionResult total()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_wsp_waterbalance_new_24_update> ddetails = new List<abhy_wsp_waterbalance_new_24_update>();

                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    var year = "2024-25 Update";
                    //var year = Convert.ToInt32("2024-25");
                    //var month = Session["month"].ToString();

                    ddetails = ABE.obj_abhy_wsp_waterbalance_new_24_update.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == year).ToList();//total list
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
                    List<abhy_waterdraft_other_24_update> ddetails = new List<abhy_waterdraft_other_24_update>();

                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();

                    if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null && Gram != "" && Gram != null)
                    {
                        ddetails = ABE.obj_abhy_waterdraft_other_24_update.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                    }
                    else if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null)
                    {
                        ddetails = ABE.obj_abhy_waterdraft_other_24_update.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                    }
                    else if (State != "" && State != null && Dist != "" && Dist != null)
                    {
                        ddetails = ABE.obj_abhy_waterdraft_other_24_update.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                    }
                    else if (State != "" && State != null)
                    {
                        ddetails = ABE.obj_abhy_waterdraft_other_24_update.Where(x => x.state_name == State).ToList();//total list

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
                    var avail_storages = result.avail_storages.Split(',');
                    foreach (var item in avail_storages)
                    {
                        if (item == "0")
                        {
                            return Json("Please select type of structure");
                        }
                    }

                    abhy_wsp_wateravailbility_new_24_update obj = new abhy_wsp_wateravailbility_new_24_update();
                    double annual_rainfall = Convert.ToDouble(result.annual_rainfall);
                    double evapo_rate = Convert.ToDouble(result.evapo_rate);
                    double est_vol_rainfall;
                    double est_evapo_loss;
                    double est_water_rain = Convert.ToDouble(result.est_water_rain);
                    double weigh_run_conf = Convert.ToDouble(result.weigh_run_conf);
                    double rain_runoff;
                    double rech_monsoon = Convert.ToDouble(result.rech_monsoon);
                    double rech_nonmonsoon = Convert.ToDouble(result.rech_nonmonsoon);
                    double tot_grd_rech_rain;
                    double ground_monsoon = Convert.ToDouble(result.ground_monsoon);
                    double ground_nonmonsoon = Convert.ToDouble(result.ground_nonmonsoon);
                    double tot_grd_rech_oth;
                    double loss_nature = Convert.ToDouble(result.loss_nature);
                    double tot_grd_wat_avail;
                    double ground_water_with = Convert.ToDouble(result.ground_water_with);
                    double total_surface_body = Convert.ToDouble(result.total_surface_body);
                    if (result.loss_if == "")
                    {
                        result.loss_if = "0";
                    }
                    double loss_if = Convert.ToDouble(result.loss_if);
                    double surface_water_avail = Convert.ToDouble(result.surface_water_avail);
                    if (result.trans_water_out == "")
                    {
                        result.trans_water_out = "0";
                    }
                    double trans_water_out = Convert.ToDouble(result.trans_water_out);
                    double total_sirface_water = Convert.ToDouble(result.total_sirface_water);
                    double total_avail_water = Convert.ToDouble(result.total_avail_water);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();
                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    var Year = "2024-25 Update";
                    var Month = monthName;
                    var AreaData = ABE.obj_abhy_block_gp_area_info.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gram_panchayat_name == Gram).FirstOrDefault();//total list
                    var Data_details = ABE.obj_abhy_wsp_wateravailbility_new_24_update.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.year == Year).ToList();
                    var ddetails = ABE.obj_abhy_wsp_master_data_24.Where(x => x.state_name.ToLower() == State.ToLower() && x.district_name.ToLower() == Dist.ToLower() && x.block_name.ToLower() == Block.ToLower() && x.gp_name == Gram).FirstOrDefault();
                    if (Convert.ToDouble(result.annual_rainfall) == 0 || result.annual_rainfall == "")
                    {
                        return Json("Please Enter Annual Rainfall (mm)");
                    }
                    else if (Convert.ToDouble(result.evapo_rate) == 0 || result.evapo_rate == "")
                    {
                        return Json("Please Enter Evapotranspiration (mm)");
                    }
                    else if (result.weigh_run_conf == "0")
                    {
                        return Json("Please Select Weighted Average Runoff Coefficient value");
                    }
                    else if (Convert.ToDouble(result.rech_monsoon) == 0 || result.rech_monsoon == "")
                    {
                        return Json("Please Enter Ground Water Recharge From Rainfall Monsoon(ha m)");
                    }
                    else if (result.rech_nonmonsoon == "")
                    {
                        return Json("Please Enter Ground Water Recharge From Rainfall Non-Monsoon (ha m)");
                    }
                    else if (Convert.ToDouble(result.ground_monsoon) == 0 || result.ground_monsoon == "")
                    {
                        return Json("Please Enter Ground Water Recharge from other sources Monsoon (ha m)");
                    }
                    else if (result.ground_nonmonsoon == "")
                    {
                        return Json("Please Enter Ground Water Recharge from other sources Monsoon (ha m)");
                    }
                    else if (Convert.ToDouble(result.loss_nature) == 0 || result.loss_nature == "")
                    {
                        return Json("Please Enter Losses Due to Natural Discharge (ha m)");
                    }
                    else if (Convert.ToDouble(result.ground_water_with) == 0 || result.ground_water_with == "")
                    {
                        return Json("Please Enter Ground Water Withdrawal (ha m)");
                    }
                    est_vol_rainfall = Convert.ToDouble(AreaData.gp_area) * annual_rainfall * 0.001;
                    est_evapo_loss = Convert.ToDouble(AreaData.gp_area) * evapo_rate * 0.001;
                    est_water_rain = Math.Round(est_vol_rainfall, 4) - Math.Round(est_evapo_loss, 4);
                    rain_runoff = Math.Round(est_water_rain, 4) * weigh_run_conf;
                    tot_grd_rech_rain = Math.Round(rech_monsoon, 4) + Math.Round(rech_nonmonsoon, 4);
                    tot_grd_rech_oth = Math.Round(ground_monsoon, 4) + Math.Round(ground_nonmonsoon, 4);
                    tot_grd_wat_avail = Math.Round(tot_grd_rech_rain, 4) + Math.Round(tot_grd_rech_oth, 4) - Math.Round(loss_nature, 4);
                    if (Data_details.Count > 0)
                    {
                        Data_details[0].ar_data_year = "2023";
                        Data_details[0].er_data_year = "2023";
                        if (result.other_source_name == "")
                        {
                            if (Convert.ToDouble(ddetails.dist_annual_rainfall) != Convert.ToDouble(result.annual_rainfall))
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
                        Data_details[0].annual_rainfall = Math.Round(annual_rainfall, 4);
                        Data_details[0].est_vol_rainfall = Math.Round(est_vol_rainfall, 4);
                        Data_details[0].evapo_rate = Math.Round(evapo_rate, 4);
                        Data_details[0].est_evapo_loss = Math.Round(est_evapo_loss, 4);
                        Data_details[0].est_water_rain = Math.Round(est_water_rain, 4);
                        Data_details[0].weigh_run_conf = weigh_run_conf;
                        Data_details[0].rain_runoff = Math.Round(rain_runoff, 4);
                        Data_details[0].rech_monsoon = Math.Round(rech_monsoon, 4);
                        Data_details[0].rech_nonmonsoon = Math.Round(rech_nonmonsoon, 4);
                        Data_details[0].tot_grd_rech_rain = Math.Round(tot_grd_rech_rain, 4);
                        Data_details[0].ground_monsoon = Math.Round(ground_monsoon, 4);
                        Data_details[0].ground_nonmonsoon = Math.Round(ground_nonmonsoon, 4);
                        Data_details[0].tot_grd_rech_oth = Math.Round(tot_grd_rech_oth, 4);
                        Data_details[0].loss_nature = Math.Round(loss_nature, 4);
                        Data_details[0].tot_grd_wat_avail = Math.Round(tot_grd_wat_avail, 4);
                        Data_details[0].ground_water_with = ground_water_with;
                        Data_details[0].category = result.category;
                        Data_details[0].avail_storages = result.avail_storages.TrimEnd(',');
                        Data_details[0].avail_storages_grd = result.avail_storages_grd.TrimEnd(',');
                        Data_details[0].avail_storages_sur = result.avail_storages_sur.TrimEnd(',');
                        Data_details[0].total_surface_body = Math.Round(total_surface_body, 4);
                        Data_details[0].loss_if = Math.Round(loss_if, 4);
                        Data_details[0].surface_water_avail = Math.Round(surface_water_avail, 4);
                        Data_details[0].trans_water_out = Math.Round(trans_water_out, 4);
                        Data_details[0].total_sirface_water = Math.Round(total_sirface_water, 4);
                        Data_details[0].total_avail_water = Math.Round(total_avail_water, 4);
                        Data_details[0].month = Month;
                        Data_details[0].month_ordery_by = Get_Month_Number(Month);
                        ABE.Entry(Data_details[0]).State = EntityState.Modified;
                        ABE.SaveChanges();
                        return Json("Successfully Updated");
                    }
                    else
                    {
                        obj.ar_data_year = "2023";
                        obj.er_data_year = "2023";
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
                        obj.annual_rainfall = Math.Round(annual_rainfall, 4);
                        obj.est_vol_rainfall = Math.Round(est_vol_rainfall, 4);
                        obj.evapo_rate = Math.Round(evapo_rate, 4);
                        obj.est_evapo_loss = Math.Round(est_evapo_loss, 4);
                        obj.est_water_rain = Math.Round(est_water_rain, 4);
                        obj.weigh_run_conf = Math.Round(weigh_run_conf, 4);
                        obj.rain_runoff = Math.Round(rain_runoff, 4);
                        obj.rech_monsoon = Math.Round(rech_monsoon, 4);
                        obj.rech_nonmonsoon = Math.Round(rech_nonmonsoon, 4);
                        obj.tot_grd_rech_rain = Math.Round(tot_grd_rech_rain, 4);
                        obj.ground_monsoon = Math.Round(ground_monsoon, 4);
                        obj.ground_nonmonsoon = Math.Round(ground_nonmonsoon, 4);
                        obj.tot_grd_rech_oth = Math.Round(tot_grd_rech_oth, 4);
                        obj.loss_nature = Math.Round(loss_nature, 4);
                        obj.tot_grd_wat_avail = Math.Round(tot_grd_wat_avail, 4);
                        obj.ground_water_with = Math.Round(ground_water_with, 4);
                        obj.category = result.category;
                        obj.avail_storages = result.avail_storages.TrimEnd(',');
                        obj.avail_storages_grd = result.avail_storages_grd.TrimEnd(',');
                        obj.avail_storages_sur = result.avail_storages_sur.TrimEnd(',');
                        obj.total_surface_body = Math.Round(total_surface_body, 4);
                        obj.loss_if = Math.Round(loss_if, 4);
                        obj.surface_water_avail = Math.Round(surface_water_avail, 4);
                        obj.trans_water_out = Math.Round(trans_water_out, 4);
                        obj.total_sirface_water = Math.Round(total_sirface_water, 4);
                        obj.total_avail_water = Math.Round(total_avail_water, 4);
                        obj.month = Month;
                        obj.month_ordery_by = Get_Month_Number(Month);
                        ABE.obj_abhy_wsp_wateravailbility_new_24_update.Add(obj);
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
                    string data_year = "2024-25 Update";
                    string month = Session["month"].ToString();

                    abhy_wsp_wateravailbility_new_24_update data = new abhy_wsp_wateravailbility_new_24_update();
                    List<abhy_wsp_wateravailbility_new_24_update> details1 = new List<abhy_wsp_wateravailbility_new_24_update>();
                    details1 = ABE.obj_abhy_wsp_wateravailbility_new_24_update.Where(x => x.state_name == state_name && x.district_name == district_name && x.block_name == block_name && x.gp_name == gp_name && x.year == data_year && x.month == month).ToList();
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
                                    return Json("Your Upload file has Double Extention, Please Upload valid file", JsonRequestBehavior.AllowGet);
                                }
                                string ext = System.IO.Path.GetExtension(avail_upload_file.FileName);
                                string name = System.IO.Path.GetFileNameWithoutExtension(avail_upload_file.FileName);
                                string filename = name + DateTime.Now.Ticks + ext;

                                string BasePath = AppDomain.CurrentDomain.BaseDirectory;// ConfigurationManager.AppSettings["path"];
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
                    string data_year = "2024-25 Update";
                    string month = Session["month"].ToString();

                    abhy_wsp_wateravailbility_new data = new abhy_wsp_wateravailbility_new();
                    var details1 = ABE.obj_abhy_wsp_wateravailbility_new_24_update.Where(x => x.state_name == state_name && x.district_name == district_name && x.block_name == block_name && x.gp_name == gp_name && x.year == data_year && x.month == month).ToList();
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
                    var Year = "2024-25 Update";
                    //var Month = Session["month"].ToString();

                    var Data_details = ABE.obj_abhy_wsp_wateravailbility_new_24_update.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.year == Year).ToList();

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
                var year = "2024-25 Update";
                var month = monthName;
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<abhy_wsp_waterbalance_new_24_update>(Data);

                var ddetails = ABE.obj_abhy_wsp_waterbalance_new_24_update.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == year).ToList();//total list
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
                    ABE.obj_abhy_wsp_waterbalance_new_24_update.Add(result);
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
                    List<abhy_wsp_waterbudget_new_24_update> ddetails = new List<abhy_wsp_waterbudget_new_24_update>();

                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    var year = "2024-25 Update";
                    //var month = Session["month"].ToString();
                    ddetails = ABE.obj_abhy_wsp_waterbudget_new_24_update.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == year).ToList();//total list
                    if (ddetails.Count < 1) {
                        ddetails = ABE.obj_abhy_wsp_waterbudget_new_24_update.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == "2024-25").ToList();
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
        public ActionResult WaterBalanceInserted_Details()
        {
            List<abhy_wsp_waterbalance_new_24_update> ddetails = new List<abhy_wsp_waterbalance_new_24_update>();
            var State = Session["gstate"].ToString();
            var Dist = Session["gdist"].ToString();
            var Block = Session["gblock"].ToString();
            var Gram = Session["ggram"].ToString();

            var year = "2024-25 Update";
            //var month = Session["month"].ToString();

            ddetails = ABE.obj_abhy_wsp_waterbalance_new_24_update.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == year).ToList();//total list

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
                var result = js.Deserialize<abhy_wsp_waterbudget_new_24_update>(Data);
                abhy_wsp_waterbudget_new_24_update obj = new abhy_wsp_waterbudget_new_24_update();

                var State = Session["gstate"].ToString();
                var Dist = Session["gdist"].ToString();
                var Block = Session["gblock"].ToString();
                var Gram = Session["ggram"].ToString();
                var year = "2024-25 Update";
                var month = monthName;

                var ddetails1 = ABE.obj_abhy_wsp_waterbudget_new_24_update.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == year).FirstOrDefault();


                if (ddetails1 != null)
                {

                    ddetails1.state_name = State;
                    ddetails1.district_name = Dist;
                    ddetails1.block_name = Block;
                    ddetails1.gpname = Gram;

                    ddetails1.latitude = result.latitude;
                    ddetails1.longitude = result.longitude;
                    ddetails1.human_p_pop = result.human_p_pop;
                    ddetails1.human_a_pop = result.human_a_pop;
                    ddetails1.human_no_of_year = result.human_no_of_year;
                    ddetails1.human_pre_pop = result.human_pre_pop;
                    ddetails1.human_per_capita = result.human_per_capita;
                    ddetails1.human_pro_water_req = result.human_pro_water_req;
                    ddetails1.live_p_pop = result.live_p_pop;
                    ddetails1.live_a_pop = result.live_a_pop;
                    ddetails1.live_no_of_year = result.live_no_of_year;
                    ddetails1.live_pro_pop = result.live_pro_pop;
                    ddetails1.live_pre_capita = result.live_pre_capita;
                    ddetails1.live_pro_water_req = result.live_pro_water_req;
                    ddetails1.total_pro_water_req = result.total_pro_water_req;
                    ddetails1.proposed_share_gw = result.proposed_share_gw;
                    ddetails1.proposed_share_sw = result.proposed_share_sw;
                    ddetails1.demand_gw = result.demand_gw;
                    ddetails1.demand_sw = result.demand_sw;
                    ddetails1.ground_water = result.ground_water;
                    ddetails1.surface_water = result.surface_water;
                    ddetails1.total_wt_available = result.total_wt_available;
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
                    obj.human_p_pop = result.human_p_pop;
                    obj.human_a_pop = result.human_a_pop;
                    obj.human_no_of_year = result.human_no_of_year;
                    obj.human_pre_pop = result.human_pre_pop;
                    obj.human_per_capita = result.human_per_capita;
                    obj.human_pro_water_req = result.human_pro_water_req;
                    obj.live_p_pop = result.live_p_pop;
                    obj.live_a_pop = result.live_a_pop;
                    obj.live_no_of_year = result.live_no_of_year;
                    obj.live_pro_pop = result.live_pro_pop;
                    obj.live_pre_capita = result.live_pre_capita;
                    obj.live_pro_water_req = result.live_pro_water_req;
                    obj.total_pro_water_req = result.total_pro_water_req;
                    obj.proposed_share_gw = result.proposed_share_gw;
                    obj.proposed_share_sw = result.proposed_share_sw;
                    obj.demand_gw = result.demand_gw;
                    obj.demand_sw = result.demand_sw;
                    obj.ground_water = result.ground_water;
                    obj.surface_water = result.surface_water;
                    obj.total_wt_available = result.total_wt_available;
                    obj.month = month;
                    obj.year = year;
                    obj.month_ordery_by = Get_Month_Number(month);

                    var TodayDate1 = DateTime.Now.ToString();
                    obj.datetime = TodayDate1;
                    obj.userid = Convert.ToInt32(Session["userid"]);
                    ABE.obj_abhy_wsp_waterbudget_new_24_update.Add(obj);
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
                    List<abhy_wsp_waterbalance_new_24_update> ddetails = new List<abhy_wsp_waterbalance_new_24_update>();

                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    var year = "2024-25 Update";
                    ddetails = ABE.obj_abhy_wsp_waterbalance_new_24_update.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == year).ToList();//total list
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
                List<abhy_wsp_gram_images_24_update> ddetails = new List<abhy_wsp_gram_images_24_update>();
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<abhy_wsp_gram_images_24_update>(Data);

                var State = result.state_name;
                var Dist = result.district_name;

                var Block = result.block_name;
                var Gram = result.gpname;


                var data = ABE.obj_abhy_wsp_gram_images_24_update.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list
                if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null && Gram != "" && Gram != null)
                {
                    ddetails = ABE.obj_abhy_wsp_gram_images_24_update.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                }
                else if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null)
                {
                    ddetails = ABE.obj_abhy_wsp_gram_images_24_update.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                }
                else if (State != "" && State != null && Dist != "" && Dist != null)
                {
                    ddetails = ABE.obj_abhy_wsp_gram_images_24_update.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                }
                else if (State != "" && State != null)
                {
                    ddetails = ABE.obj_abhy_wsp_gram_images_24_update.Where(x => x.state_name == State).ToList();//total list


                }

                if (ddetails.Count == 1)
                {
                    if (ddetails[0].gpimage1 != null && ddetails[0].gpimage1 != "")
                    {
                        string BasePath = AppDomain.CurrentDomain.BaseDirectory; //ConfigurationManager.AppSettings["path"];
                        string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");
                        string File_path = path + ddetails[0].gpimage1_filename;

                        string base64 = Image_Url_base64(File_path);
                        ddetails[0].gpimage1 = base64;
                    }

                    if (ddetails[0].gpimage2 != null && ddetails[0].gpimage2 != "")
                    {
                        string BasePath = AppDomain.CurrentDomain.BaseDirectory; //ConfigurationManager.AppSettings["path"];
                        string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");
                        string File_path = path + ddetails[0].gpimage2_filename;


                        string base64 = Image_Url_base64(File_path);
                        ddetails[0].gpimage2 = base64;
                    }

                    if (ddetails[0].gpimage3 != null && ddetails[0].gpimage3 != "")
                    {
                        string BasePath = AppDomain.CurrentDomain.BaseDirectory; //ConfigurationManager.AppSettings["path"];
                        string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");
                        string File_path = path + ddetails[0].gpimage3_filename;



                        string base64 = Image_Url_base64(File_path);
                        ddetails[0].gpimage3 = base64;
                    }

                    if (ddetails[0].gpimage4 != null && ddetails[0].gpimage4 != "")
                    {
                        string BasePath = AppDomain.CurrentDomain.BaseDirectory;// ConfigurationManager.AppSettings["path"];
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
                List<abhy_wsp_gram_images_24_update> ddetails = new List<abhy_wsp_gram_images_24_update>();
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<abhy_wsp_gram_images_24_update>(Data);
                var State = result.state_name;
                var Dist = result.district_name;
                var Block = result.block_name;
                var Gram = result.gpname;
                var year = "2024-25 Update";
                //var month = Session["month"].ToString();

                ddetails = ABE.obj_abhy_wsp_gram_images_24_update.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == year).ToList();
                if (ddetails.Count == 0)
                {
                    ddetails = ABE.obj_abhy_wsp_gram_images_24_update.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == "2024-25").ToList();
                    if (ddetails.Count == 0)
                    {
                        ddetails = ABE.obj_abhy_wsp_gram_images_24_update.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == "2023-24").ToList();

                    }
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

                    var DEtails = ABE.obj_abhy_wsp_gram_images_24_update.Where(x => x.id == id).ToList();
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
                    //var year = "2024-25";
                    var year = "2024-25";
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
                    List<abhy_wsp_gpdata_new_24_update> ddetails = new List<abhy_wsp_gpdata_new_24_update>();

                    //abhy_baseline_gpdata ddetails1 = new abhy_baseline_gpdata();
                    //var ddetails1 = ABE.obj_abhy_baseline_gpdata.ToList();


                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        ddetails = ABE.obj_abhy_wsp_gpdata_new_24_update.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gram_panchayat_name == Gram).ToList();//total list                        
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
                    var year = "2024-25 Update";
                    abhy_mis_wsp_approved_24_update obj = new abhy_mis_wsp_approved_24_update();
                    var ApproveData = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.year == year).FirstOrDefault();
                    var Data = ABE.obj_abhy_mis_wsp_approved_24_update.Where(x => x.state == State && x.dist == Dist && x.block == Block && x.gp == Gram).FirstOrDefault();
                    if (Data != null)
                    {
                        if (pdf.FileName != null)
                        {
                            string FileName = Gram + "_" + year + "_" + getuniqueId(pdf.FileName);
                            string BasePath = AppDomain.CurrentDomain.BaseDirectory; //ConfigurationManager.AppSettings["path"];
                            string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\WspApproved\\" + State + "\\" + Dist + "\\" + Block + "\\" + year + "\\");
                            if (!Directory.Exists(path))
                            {
                                Directory.CreateDirectory(path);
                            }
                            path = path + FileName;

                            string[] count = pdf.FileName.Split('.');
                            if (count.Length != 2)
                            {
                                response = "Your Upload file has Double Extention, Please Upload valid file";
                            }
                            else
                            {
                                pdf.SaveAs(path);
                                string File_path = "/Ataljalimages/WspApproved/" + State + "/" + Dist + "/" + Block + "/" + year + "/" + FileName;
                                //Data.state_name = State;
                                //Data.district_name = Dist;
                                //Data.block_name = Block;
                                //Data.gpname = Gram;
                                Data.wsp_file = FileName;
                                Data.wsp_path = File_path;
                                Data.user_id = Email;
                                Data.wsp_date = DateTime.Today.ToString("dd-MM-yyyy");
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
                            string FileName = Gram + "_" + year + "_" + getuniqueId(pdf.FileName);
                            string BasePath = AppDomain.CurrentDomain.BaseDirectory; //ConfigurationManager.AppSettings["path"];
                            string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\WspApproved\\" + State + "\\" + Dist + "\\" + Block + "\\" + year + "\\");
                            if (!Directory.Exists(path))
                            {
                                Directory.CreateDirectory(path);
                            }
                            path = path + FileName;

                            string[] count = pdf.FileName.Split('.');
                            if (count.Length != 2)
                            {
                                response = "Your Upload file has Double Extention, Please Upload valid file";
                            }
                            else
                            {
                                pdf.SaveAs(path);
                                string File_path = "/Ataljalimages/WspApproved/" + State + "/" + Dist + "/" + Block + "/" + year + "/" + FileName;
                                obj.wsp_file = FileName;
                                obj.wsp_path = File_path;
                                obj.user_id = Email;
                                obj.wsp_date = DateTime.Today.ToString("dd-MM-yyyy");
                                obj.fy_year = year;
                                obj.state = State;
                                obj.dist = Dist;
                                obj.block = Block;
                                obj.gp = Gram;
                                ABE.obj_abhy_mis_wsp_approved_24_update.Add(obj);
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
        //Water UtiLisation ************
        [HttpGet]
        public ActionResult Fetch_domestic_data()
        {
            if (Session["UserId"] != null)
            {
                var state = Session["gstate"].ToString();
                var dis = Session["gdist"].ToString();
                var block = Session["gblock"].ToString();
                var gp = Session["ggram"].ToString();
                var year = "2024-25 Update";

                var data = ABE.obj_abhy_uti_waterdraft_domestic_new_24_update.
                  Where(n => n.state == state && n.district == dis && n.block == block && n.gp == gp && n.year == year).
                  ToList();
                if (data.Count < 1)
                {
                    data = ABE.obj_abhy_uti_waterdraft_domestic_new_24_update.
                  Where(n => n.state == state && n.district == dis && n.block == block && n.gp == gp && n.year == "2024-25").
                  ToList();
                }
                return Json(data, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return RedirectToAction("WSP_GWM_HOME", "WspNew");
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
                    var year = "2024-25 Update";
                    //var month = Session["month"].ToString();

                    double total_surface = 0;
                    double total_ground = 0;


                    var industry = ABE.obj_abhy_waterdraft_industry_24_update.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();
                    if (industry.Count > 0)
                    {
                        for (int i = 0; i < industry.Count; i++)
                        {
                            total_ground += Convert.ToDouble(industry[i].indus_grd_water);
                            total_surface += Convert.ToDouble(industry[i].indus_sur_water);
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
                    var year = "2024-25 Update";
                    //var month = Session["month"].ToString();
                    double total_surface = 0;
                    double total_ground = 0;


                    var other_details = ABE.obj_abhy_waterdraft_other_24_update.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();
                    if (other_details.Count > 0)
                    {
                        for (int i = 0; i < other_details.Count; i++)
                        {
                            total_ground += Convert.ToDouble(other_details[i].oth_grd_water);
                            total_surface += Convert.ToDouble(other_details[i].oth_sur_water);
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
                    var result = js.Deserialize<abhy_uti_waterdraft_domestic_new_24_update>(data);

                    string[] daily_wat_req_per_liv = result.daily_wat_req_per_liv.Split(',');
                    foreach (var item in daily_wat_req_per_liv)
                    {
                        if (item == "" || item == "0")
                        {
                            return Json("Don't leave it blank or fill it with 0 under the livestock daily water requirement. Please enter a value greater than 0.", JsonRequestBehavior.AllowGet);
                        }
                    }
                    var state = Session["gstate"].ToString();
                    var dist = Session["gdist"].ToString();
                    var block = Session["gblock"].ToString();
                    var gram = Session["ggram"].ToString();
                    var year = "2024-25 Update";
                    var Month = monthName;

                    var data1 = ABE.obj_abhy_uti_waterdraft_domestic_new_24_update.
              Where(n => n.state == state && n.district == dist && n.block == block && n.gp == gram && n.year == year).ToList();
                    if (data1.Count < 1)
                    {
                        data1 = ABE.obj_abhy_uti_waterdraft_domestic_new_24_update.
              Where(n => n.state == state && n.district == dist && n.block == block && n.gp == gram && n.year == "2024-25").ToList();

                    }
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
                    ABE.obj_abhy_uti_waterdraft_domestic_new_24_update.Add(result);
                    //var ddetails1 = ABE.obj_abhy_wsp_waterbudget_new_24.Where(x => x.state_name == state && x.district_name == dist && x.block_name == block && x.gpname == gram && x.year == year).FirstOrDefault();
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
                var year = "2024-25 Update";
                //var month = Session["month"].ToString();

                var id = ABE.obj_abhy_uti_waterdraft_domestic_new_24_update.
                  Where(n => n.state == state && n.district == dis && n.block == block && n.gp == gp).
                  Select(n => n.id).FirstOrDefault();
                var Livestock_values = ABE.obj_abhy_baseline_gp_livestock.Where(n => n.id == id).Select(n => new { n.livestock_name, n.livestock_value }).ToList();
                return Json(Livestock_values, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return RedirectToAction("WSP_GWM_HOME", "WspNew");
            }
        }
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
                    string year = "2024-25 Update";
                    string month = monthName;
                    if (result["area"] == "" || result["area"] == "0")
                    {
                        return Json("Please fill value", JsonRequestBehavior.AllowGet);
                    }
                    else if (result["gross_water"] == "" || result["gross_water"] == "0")
                    {
                        return Json("Please fill value", JsonRequestBehavior.AllowGet);
                    }
                    double area = Math.Round(Convert.ToDouble(result["area"]), 4);
                    double gross_water = Math.Round(Convert.ToDouble(result["gross_water"]), 4);
                    double water_Demand = area * gross_water / 1000;

                    abhy_waterdraft_irrigation_meta_24_update obj = new abhy_waterdraft_irrigation_meta_24_update();

                    var DEtails = ABE.obj_abhy_waterdraft_irrigation_meta_24_update.Where(x => x.state_name == state && x.district_name == dist && x.block_name == block && x.gp_name == gram && x.data_year == year).ToList();
                    if (DEtails.Count < 1)
                    {
                        DEtails = ABE.obj_abhy_waterdraft_irrigation_meta_24_update.Where(x => x.state_name == state && x.district_name == dist && x.block_name == block && x.gp_name == gram && x.data_year == "2024-25").ToList();
                    }

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

                        ABE.obj_abhy_waterdraft_irrigation_meta_24_update.Add(obj);
                        ABE.SaveChanges();
                        abhy_waterdraft_irrigation_data_24_update obj1 = new abhy_waterdraft_irrigation_data_24_update();

                        obj1.season_type = result["season_type"];
                        obj1.crop_category = result["crop_category"];
                        obj1.crop_type = result["crop_type"];
                        obj1.crop_name = result["crop_name"];
                        obj1.area = area;
                        obj1.gross_water = gross_water;
                        obj1.water_demand = water_Demand;
                        obj1.meta_id = obj.id;
                        ABE.obj_abhy_waterdraft_irrigation_data_24_update.Add(obj1);
                        ABE.SaveChanges();
                    }
                    else
                    {

                        abhy_waterdraft_irrigation_data_24_update obj1 = new abhy_waterdraft_irrigation_data_24_update();
                        obj1.season_type = result["season_type"];
                        obj1.crop_category = result["crop_category"];
                        obj1.crop_type = result["crop_type"];
                        obj1.crop_name = result["crop_name"];
                        obj1.area = area;
                        obj1.gross_water = gross_water;
                        obj1.water_demand = water_Demand;
                        obj1.meta_id = DEtails[0].id;
                        ABE.obj_abhy_waterdraft_irrigation_data_24_update.Add(obj1);
                        ABE.SaveChanges();

                        int id = DEtails[0].id;
                        decimal GroundWater = 0, SurfaceWater = 0;
                        decimal Data = ((decimal)ABE.obj_abhy_waterdraft_irrigation_data_24_update.Where(x => x.meta_id == id).Sum(x => x.water_demand));
                        if (result["per_ground_water"] != "")
                        {
                            GroundWater = Data * Convert.ToDecimal(result["per_ground_water"]) / 100;
                            SurfaceWater = Data * Convert.ToDecimal(result["per_surface_water"]) / 100;
                        }
                        DEtails[0].state_name = state;
                        DEtails[0].district_name = dist;
                        DEtails[0].block_name = block;
                        DEtails[0].gp_name = gram;
                        DEtails[0].month = month;
                        DEtails[0].entry_by = "aa";
                        DEtails[0].data_year = year;
                        DEtails[0].total_water_dem = Data.ToString();
                        DEtails[0].per_ground_water = result["per_ground_water"];
                        DEtails[0].per_surface_water = result["per_surface_water"];
                        DEtails[0].uti_ground_water = Convert.ToString(GroundWater);
                        DEtails[0].uti_surface_water = SurfaceWater.ToString();
                        DEtails[0].month_ordery_by = Get_Month_Number(month);

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
        public ActionResult Fetch_Not_Updated_Irrigation_Data_For_Sprinkler()
        {
            if (Session["UserId"] != null)
            {
                var state = Session["gstate"].ToString();
                var dis = Session["gdist"].ToString();
                var block = Session["gblock"].ToString();
                var gp = Session["ggram"].ToString();
                string year = "2024-25 Update";
                //var month = Session["month"].ToString();


                var Data = (from t1 in ABE.obj_abhy_waterdraft_irrigation_meta_24_update
                            join t2 in ABE.obj_abhy_waterdraft_irrigation_data_24_update on t1.id equals t2.meta_id
                            where t1.state_name == state && t1.district_name == dis && t1.block_name == block &&
                            t1.gp_name == gp && t1.data_year == year && t2.isupdated_sp == 0
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
                                t2.water_demand,
                                t2.meta_id,
                                t2.id
                            }).ToList();
                if (Data.Count < 1)
                {
                    Data = (from t1 in ABE.obj_abhy_waterdraft_irrigation_meta_24_update
                            join t2 in ABE.obj_abhy_waterdraft_irrigation_data_24_update on t1.id equals t2.meta_id
                            where t1.state_name == state && t1.district_name == dis && t1.block_name == block &&
                            t1.gp_name == gp && t1.data_year == "2024-25" && t2.isupdated_sp == 0
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
                                t2.water_demand,
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


        [HttpGet]
        public ActionResult Fetch_Not_Updated_Irrigation_Data_For_Drip()
        {
            if (Session["UserId"] != null)
            {
                var state = Session["gstate"].ToString();
                var dis = Session["gdist"].ToString();
                var block = Session["gblock"].ToString();
                var gp = Session["ggram"].ToString();
                string year = "2024-25 Update";
                //var month = Session["month"].ToString();


                var Data = (from t1 in ABE.obj_abhy_waterdraft_irrigation_meta_24_update
                            join t2 in ABE.obj_abhy_waterdraft_irrigation_data_24_update on t1.id equals t2.meta_id
                            where t1.state_name == state && t1.district_name == dis && t1.block_name == block &&
                            t1.gp_name == gp && t1.data_year == year && t2.isupdated_dp == 0
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
                                t2.water_demand,
                                t2.meta_id,
                                t2.id
                            }).ToList();
                if (Data.Count < 1)
                {
                    Data = (from t1 in ABE.obj_abhy_waterdraft_irrigation_meta_24_update
                            join t2 in ABE.obj_abhy_waterdraft_irrigation_data_24_update on t1.id equals t2.meta_id
                            where t1.state_name == state && t1.district_name == dis && t1.block_name == block &&
                            t1.gp_name == gp && t1.data_year == "2024-25" && t2.isupdated_dp == 0
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
                                t2.water_demand,
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

        [HttpGet]
        public ActionResult Fetch_Not_Updated_Irrigation_Data_For_PipeLines()
        {
            if (Session["UserId"] != null)
            {
                var state = Session["gstate"].ToString();
                var dis = Session["gdist"].ToString();
                var block = Session["gblock"].ToString();
                var gp = Session["ggram"].ToString();
                string year = "2024-25 Update";
                var Data = (from t1 in ABE.obj_abhy_waterdraft_irrigation_meta_24_update
                            join t2 in ABE.obj_abhy_waterdraft_irrigation_data_24_update on t1.id equals t2.meta_id
                            where t1.state_name == state && t1.district_name == dis && t1.block_name == block &&
                            t1.gp_name == gp && t1.data_year == year && t2.isupdated_pl == 0
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
                                t2.water_demand,
                                t2.meta_id,
                                t2.id
                            }).ToList();
                if (Data.Count < 1)
                {
                    Data = (from t1 in ABE.obj_abhy_waterdraft_irrigation_meta_24_update
                            join t2 in ABE.obj_abhy_waterdraft_irrigation_data_24_update on t1.id equals t2.meta_id
                            where t1.state_name == state && t1.district_name == dis && t1.block_name == block &&
                            t1.gp_name == gp && t1.data_year == "2024-25" && t2.isupdated_pl == 0
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
                                t2.water_demand,
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
        public ActionResult Fetch_Irrigation_kharif_id(string data)
        {
            if (Session["UserId"] != null)
            {

                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<dynamic>(data);

                int id = Convert.ToInt32(result["id"]);
                var Data1 = ABE.obj_abhy_waterdraft_irrigation_data_24_update.Where(x => x.id == id).ToList();


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
                string year = "2024-25 Update";
                //var month = Session["month"].ToString();


                var Data = (from t1 in ABE.obj_abhy_waterdraft_irrigation_meta_24_update
                            join t2 in ABE.obj_abhy_waterdraft_irrigation_data_24_update on t1.id equals t2.meta_id
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
                                t2.water_demand,
                                t2.meta_id,
                                t2.id
                            }).ToList();
                if (Data.Count < 1)
                {
                    Data = (from t1 in ABE.obj_abhy_waterdraft_irrigation_meta_24_update
                            join t2 in ABE.obj_abhy_waterdraft_irrigation_data_24_update on t1.id equals t2.meta_id
                            where t1.state_name == state && t1.district_name == dis && t1.block_name == block &&
                            t1.gp_name == gp && t1.data_year == "2024-25"
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
                                t2.water_demand,
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
        public ActionResult Delete_data_irrigation(string data)
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
                    string year = "2024-25 Update";
                    int id = Convert.ToInt32(result["IDD"]);
                    abhy_waterdraft_irrigation_data_24_update obj = new abhy_waterdraft_irrigation_data_24_update();
                    var DEtails = ABE.obj_abhy_waterdraft_irrigation_data_24_update.Where(x => x.id == id).ToList();
                    string season = DEtails[0].season_type;
                    string crop_name = DEtails[0].crop_name;
                    
                    
                    //Delete all Data From Demand Side
                    var Details = ABE.obj_abhy_wsp_demand_meta_24_update.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram && x.data_year == year).ToList().FirstOrDefault();
                    if (Details != null)
                    {
                        var FundData = ABE.obj_abhy_wsp_demand_fund_details_24_update.Where(x => x.meta_id == Details.id).ToList();
                        if (FundData.Count != 0)
                        {
                            ABE.obj_abhy_wsp_demand_fund_details_24_update.RemoveRange(FundData);
                        }
                        var SpData = ABE.obj_abhy_wsp_demand_sprinkler_24_update.Where(x => x.meta_id == Details.id && x.season_type == season && x.crop_name == crop_name).ToList();
                        if (SpData.Count != 0)
                        {
                            ABE.Entry(SpData[0]).State = EntityState.Deleted;
                        }
                        var DripData = ABE.obj_abhy_wsp_demand_drip_24_update.Where(x => x.meta_id == Details.id && x.season_type == season && x.crop_name == crop_name).ToList();
                        if (DripData.Count != 0)
                        {
                            ABE.Entry(DripData[0]).State = EntityState.Deleted;
                        }
                        var PipeData = ABE.obj_abhy_wsp_demand_pipeline_24_update.Where(x => x.meta_id == Details.id && x.season_type == season && x.crop_name == crop_name).ToList();
                        if (PipeData.Count != 0)
                        {
                            ABE.Entry(PipeData[0]).State = EntityState.Deleted;
                        }
                        var CropData = ABE.obj_abhy_wsp_demand_change_crop_24_update.Where(x => x.meta_id == Details.id && x.season_type == season && x.crop_name == crop_name).ToList();
                        if (CropData.Count != 0)
                        {
                            ABE.Entry(CropData[0]).State = EntityState.Deleted;
                        }
                    }

                    ABE.Entry(DEtails[0]).State = EntityState.Deleted;
                    var DEtailss = ABE.obj_abhy_waterdraft_irrigation_meta_24_update.Where(x => x.state_name == state && x.district_name == dist && x.block_name == block && x.gp_name == gram && x.data_year == year).ToList();
                    if (DEtailss.Count != 0)
                    {
                        DEtailss[0].per_ground_water = "";
                        DEtailss[0].per_surface_water = "";
                        DEtailss[0].uti_ground_water = "";
                        DEtailss[0].uti_surface_water = "";
                        ABE.Entry(DEtailss[0]).State = EntityState.Modified;
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
        public ActionResult Get_Data_From_Irrigation_ById(string data)
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
                    string year = "2024-25 Update";
                    abhy_waterdraft_irrigation_data_24_update obj = new abhy_waterdraft_irrigation_data_24_update();
                    int id = Convert.ToInt32(data);
                    var DEtails = ABE.obj_abhy_waterdraft_irrigation_data_24_update.Where(x => x.id == id).FirstOrDefault();
                    int meta_id = DEtails.meta_id;
                    var Data = (from t1 in ABE.obj_abhy_waterdraft_irrigation_meta_24_update
                                join t2 in ABE.obj_abhy_waterdraft_irrigation_data_24_update on t1.id equals t2.meta_id
                                where t2.id == id
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
                                    t2.water_demand,
                                    t2.meta_id,
                                    t2.id
                                }).FirstOrDefault();
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
                    string year = "2024-25 Update";


                    abhy_waterdraft_irrigation_meta_24_update obj = new abhy_waterdraft_irrigation_meta_24_update();

                    var DEtails = ABE.obj_abhy_waterdraft_irrigation_meta_24_update.Where(x => x.state_name == state && x.district_name == dist && x.block_name == block && x.gp_name == gram && x.data_year == year).ToList();
                    if (DEtails.Count < 1)
                    {
                        DEtails = ABE.obj_abhy_waterdraft_irrigation_meta_24_update.Where(x => x.state_name == state && x.district_name == dist && x.block_name == block && x.gp_name == gram && x.data_year == "2024-25").ToList();
                    }
                    if (DEtails.Count > 0)
                    {
                        double per_ground_water = Math.Round(Convert.ToDouble(result["per_ground_water"]), 4);
                        double per_surface_water = Math.Round(Convert.ToDouble(result["per_surface_water"]), 4);
                        DEtails[0].data_year = year;
                        DEtails[0].total_water_dem = result["total_water_dem"];
                        DEtails[0].per_ground_water = per_ground_water.ToString();
                        DEtails[0].per_surface_water = per_surface_water.ToString();
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
                    abhy_waterdraft_irrigation_meta_24_update obj = new abhy_waterdraft_irrigation_meta_24_update();
                    var DEtails = ABE.obj_abhy_waterdraft_irrigation_meta_24_update.Where(x => x.id == IDD).ToList();
                    DEtails[0].total_water_dem = result["total_water_dem"];
                    DEtails[0].per_ground_water = result["per_ground_water"];
                    DEtails[0].per_surface_water = result["per_surface_water"];
                    DEtails[0].uti_ground_water = result["uti_ground_water"];
                    DEtails[0].uti_surface_water = result["uti_surface_water"];
                    ABE.Entry(DEtails[0]).State = EntityState.Modified;
                    ABE.SaveChanges();

                    abhy_waterdraft_irrigation_data_24_update obj1 = new abhy_waterdraft_irrigation_data_24_update();
                    string season_type = result["season_type"];
                    var detail_data = ABE.obj_abhy_waterdraft_irrigation_data_24_update.Where(x => x.meta_id == IDD && x.season_type == season_type).ToList();
                    detail_data[0].crop_category = result["crop_category"];
                    detail_data[0].crop_type = result["crop_type"];
                    detail_data[0].crop_name = result["crop_name"];
                    detail_data[0].area = result["area"];
                    detail_data[0].gross_water = result["gross_water"];
                    detail_data[0].meta_id = DEtails[0].id;
                    //    ABE.obj_abhy_waterdraft_irrigation_data_24.Add(obj1);
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
                    var result = js.Deserialize<abhy_waterdraft_industry_24_update>(data);

                    var state = Session["gstate"].ToString();
                    var dist = Session["gdist"].ToString();
                    var block = Session["gblock"].ToString();
                    var gram = Session["ggram"].ToString();
                    var year = "2024-25 Update";
                    var month = monthName;


                    result.gpname = gram;
                    result.block_name = block;
                    result.district_name = dist;
                    result.state_name = state;
                    result.month = month;
                    result.year = year;
                    result.month_ordery_by = Get_Month_Number(month);

                    ABE.obj_abhy_waterdraft_industry_24_update.Add(result);
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

                    abhy_waterdraft_industry_24_update obj = new abhy_waterdraft_industry_24_update();

                    var DEtails = ABE.obj_abhy_waterdraft_industry_24_update.Where(x => x.id == IDD).ToList();

                    DEtails[0].industry_name = result["industry_name"];
                    DEtails[0].industry_daily_water_req = result["industry_daily_water_req"];
                    DEtails[0].industry_days_use = result["industry_days_use"];
                    DEtails[0].annual_ind_demand = result["annual_ind_demand"];
                    DEtails[0].industry_demand_ground_water = result["industry_demand_ground_water"];
                    DEtails[0].industry_demand_surface_water = result["industry_demand_surface_water"];
                    DEtails[0].indus_grd_water = Convert.ToDouble(result["indus_grd_water"]);
                    DEtails[0].indus_sur_water = Convert.ToDouble(result["indus_sur_water"]);

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
                var year = "2024-25 Update";
                /*var month = Session["month"].ToString();*/
                var data = ABE.obj_abhy_waterdraft_industry_24_update.
                    Where(n => n.state_name == state && n.district_name == dis && n.block_name == block && n.gpname == gp).ToList();

                return Json(data, JsonRequestBehavior.AllowGet);
            }

            else
            {
                return RedirectToAction("WSP_GWM_HOME", "WspNew");
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

                    var DEtails = ABE.obj_abhy_waterdraft_industry_24_update.Where(x => x.id == id).ToList();

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

                var data_all = ABE.obj_abhy_waterdraft_industry_24_update.
                    Where(n => n.id == id).ToList();

                return Json(data_all, JsonRequestBehavior.AllowGet);
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
                    var result = js.Deserialize<abhy_waterdraft_other_24_update>(data);

                    var state = Session["gstate"].ToString();
                    var dist = Session["gdist"].ToString();
                    var block = Session["gblock"].ToString();
                    var gram = Session["ggram"].ToString();
                    var year = "2024-25 Update";
                    var month = monthName;

                    result.gpname = gram;
                    result.block_name = block;
                    result.district_name = dist;
                    result.state_name = state;
                    result.year = year;
                    result.month = month;
                    result.month_ordery_by = Get_Month_Number(month);

                    ABE.obj_abhy_waterdraft_other_24_update.Add(result);
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
        public ActionResult Other_update_(string data)
        {
            if (Session["userid"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<dynamic>(data);


                    int IDD = Convert.ToInt32(result["IDD"]);

                    //abhy_waterdraft_industry_24 obj = new abhy_waterdraft_industry_24();

                    var DEtails = ABE.obj_abhy_waterdraft_other_24_update.Where(x => x.id == IDD).ToList();

                    DEtails[0].use = result["use"];
                    DEtails[0].daily_req = result["daily_req"];
                    DEtails[0].annual_req = result["annual_req"];
                    DEtails[0].no_of_days_use = result["no_of_days_use"];
                    DEtails[0].demand_met_surface_water = result["demand_met_surface_water"];
                    DEtails[0].demand_met_ground_water = result["demand_met_ground_water"];
                    DEtails[0].oth_grd_water = Convert.ToDouble(result["oth_grd_water"]);
                    DEtails[0].oth_sur_water = Convert.ToDouble(result["oth_sur_water"]);


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

                    var year = "2024-25 Update";
                    //var month = Session["month"].ToString();

                    var data = ABE.obj_abhy_waterdraft_other_24_update.
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

                    var DEtails = ABE.obj_abhy_waterdraft_other_24_update.Where(x => x.id == id).ToList();

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

                var data_all = ABE.obj_abhy_waterdraft_other_24_update.
                    Where(n => n.id == id).ToList();

                return Json(data_all, JsonRequestBehavior.AllowGet);
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
                    var Year = "2024-25 Update";
                    //var Month = Session["month"].ToString();
                    List<abhy_baseline_gp_livestock> details = new List<abhy_baseline_gp_livestock>();

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null)
                    {
                        var id = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == "2024-25" && x.d_sent == true).OrderByDescending(x => x.month_order_by).Select(x => x.id).FirstOrDefault();//total list
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

        //Demand Side Code 20240-25
        [HttpPost]
        public ActionResult Check_AreaProposed_IsLessThan_ConventionalArea(string data)
        {
            if (Session["userid"] != null)
            {
                try
                {
                    var result = JsonConvert.DeserializeObject<dynamic>(data);
                    if (result["type"] != "PipeLines")
                    {
                        var state = Session["gstate"].ToString();
                        var dist = Session["gdist"].ToString();
                        var block = Session["gblock"].ToString();
                        var gram = Session["ggram"].ToString();
                        string year = "2024-25 Update";
                        string season = result["season"];
                        string crop_name = result["crop_name"];
                        decimal area_proposed = result["area_proposed"];
                        decimal area_irrigation = result["area_irrigation"];
                        abhy_wsp_demand_meta_24_update obj = new abhy_wsp_demand_meta_24_update();
                        if (result["type"] == "Sprinkler")
                        {
                            var Data = (from t1 in ABE.obj_abhy_wsp_demand_meta_24_update
                                        join t2 in ABE.obj_abhy_wsp_demand_drip_24_update on t1.id equals t2.meta_id
                                        where t1.state == state && t1.district == dist && t1.block == block &&
                                        t1.gp == gram
                                        && t2.season_type == season.ToLower()
                                        && t2.crop_name == crop_name
                                        select new
                                        {
                                            t2.season_type,
                                            t2.crop_category,
                                            t2.crop_type,
                                            t2.crop_name,
                                            t2.area_proposed,
                                            t2.gross_water,
                                            t2.meta_id,
                                            t2.id
                                        }).ToList();
                            decimal TotalArea = 0;
                            if (Data.Count != 0)
                            {
                                TotalArea = Data.Sum(x => Convert.ToDecimal(x.area_proposed));
                                decimal Total_Area_Proposed = TotalArea + area_proposed;
                                if (Total_Area_Proposed > area_irrigation)
                                {
                                    return Json(new { result = false });
                                }
                                else
                                {
                                    return Json(new { result = true });
                                }
                            }
                        }
                        else if (result["type"] == "Drip")
                        {
                            var Data = (from t1 in ABE.obj_abhy_wsp_demand_meta_24_update
                                        join t2 in ABE.obj_abhy_wsp_demand_sprinkler_24_update on t1.id equals t2.meta_id
                                        where t1.state == state && t1.district == dist && t1.block == block &&
                                        t1.gp == gram
                                        && t2.season_type == season.ToLower()
                                        && t2.crop_name == crop_name
                                        select new
                                        {
                                            t2.season_type,
                                            t2.crop_category,
                                            t2.crop_type,
                                            t2.crop_name,
                                            t2.area_proposed,
                                            t2.gross_water,
                                            t2.meta_id,
                                            t2.id
                                        }).ToList();
                            decimal TotalArea = 0;
                            if (Data.Count != 0)
                            {
                                TotalArea = Data.Sum(x => Convert.ToDecimal(x.area_proposed));
                                decimal Total_Area_Proposed = TotalArea + area_proposed;
                                if (Total_Area_Proposed > area_irrigation)
                                {
                                    return Json(new { result = false });
                                }
                                else
                                {
                                    return Json(new { result = true });
                                }
                            }
                        }
                    }
                    else
                    {
                        return Json(new { result = true });
                    }
                    return Json(new { result = true });
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
        public ActionResult Saved_Data_For_DemandSide(string data)
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
                    string year = "2024-25 Update";
                    var month = monthName;
                    int IrriId = Convert.ToInt32(result["IrriId"]);
                    string season_type = result["season_type"];
                    var DEtails = ABE.obj_abhy_wsp_demand_meta_24_update.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram && x.data_year == year).ToList();
                    if (DEtails.Count == 0)
                    {
                        DEtails = ABE.obj_abhy_wsp_demand_meta_24_update.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram && x.data_year == "2024-25").ToList();
                    }
                    if (result["type"] == "Sprinkler")
                    {
                        abhy_wsp_demand_meta_24_update obj = new abhy_wsp_demand_meta_24_update();
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
                            ABE.obj_abhy_wsp_demand_meta_24_update.Add(obj);
                            ABE.SaveChanges();
                            abhy_wsp_demand_sprinkler_24_update obj1 = new abhy_wsp_demand_sprinkler_24_update();
                            obj1.season_type = season_type;
                            obj1.crop_category = result["crop_category"];
                            obj1.crop_type = result["crop_type"];
                            obj1.crop_name = result["crop_name"];
                            obj1.area_irrigation = result["area_irrigation"].ToString();
                            obj1.gross_water = result["gross_water"].ToString();
                            obj1.water_demand = result["water_demand"].ToString();
                            obj1.area_proposed = result["area_proposed"].ToString();
                            obj1.reduction = "30";
                            obj1.net_water_demand = result["net_water_demand"].ToString();
                            obj1.reduction_gw = result["reduction_gw"].ToString();
                            obj1.reduction_in_demand = result["reduction_in_demand"].ToString();
                            obj1.meta_id = obj.id;
                            ABE.obj_abhy_wsp_demand_sprinkler_24_update.Add(obj1);
                            var Data = ABE.obj_abhy_waterdraft_irrigation_data_24_update.Where(x => x.id == IrriId).FirstOrDefault();
                            Data.isupdated_sp = 1;
                            ABE.Entry(Data).State = EntityState.Modified;
                            ABE.SaveChanges();
                        }
                        else
                        {
                            abhy_wsp_demand_sprinkler_24_update obj1 = new abhy_wsp_demand_sprinkler_24_update();
                            obj1.season_type = season_type.ToLower();
                            obj1.crop_category = result["crop_category"];
                            obj1.crop_type = result["crop_type"];
                            obj1.crop_name = result["crop_name"];
                            obj1.area_irrigation = result["area_irrigation"].ToString();
                            obj1.gross_water = result["gross_water"].ToString();
                            obj1.water_demand = result["water_demand"].ToString();
                            obj1.area_proposed = result["area_proposed"].ToString();
                            obj1.reduction = "30";
                            obj1.net_water_demand = result["net_water_demand"].ToString();
                            obj1.reduction_gw = result["reduction_gw"].ToString();
                            obj1.reduction_in_demand = result["reduction_in_demand"].ToString();
                            obj1.meta_id = DEtails[0].id;
                            ABE.obj_abhy_wsp_demand_sprinkler_24_update.Add(obj1);
                            var Data = ABE.obj_abhy_waterdraft_irrigation_data_24_update.Where(x => x.id == IrriId).FirstOrDefault();
                            Data.isupdated_sp = 1;
                            ABE.Entry(Data).State = EntityState.Modified;
                            DEtails[0].data_year = year;
                            ABE.Entry(DEtails[0]).State = EntityState.Modified;
                            ABE.SaveChanges();
                        }
                    }
                    else if (result["type"] == "Drip")
                    {
                        abhy_wsp_demand_meta_24_update obj = new abhy_wsp_demand_meta_24_update();
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
                            ABE.obj_abhy_wsp_demand_meta_24_update.Add(obj);
                            ABE.SaveChanges();
                            abhy_wsp_demand_drip_24_update obj1 = new abhy_wsp_demand_drip_24_update();
                            obj1.season_type = season_type.ToLower();
                            obj1.crop_category = result["crop_category"];
                            obj1.crop_type = result["crop_type"];
                            obj1.crop_name = result["crop_name"];
                            obj1.area_irrigation = result["area_irrigation"].ToString();
                            obj1.gross_water = result["gross_water"].ToString();
                            obj1.water_demand = result["water_demand"].ToString();
                            obj1.area_proposed = result["area_proposed"].ToString();
                            obj1.net_water_demand = result["net_water_demand"].ToString();
                            obj1.reduction_gw = result["reduction_gw"].ToString();
                            obj1.reduction_in_demand = result["reduction_in_demand"].ToString();
                            obj1.meta_id = obj.id;
                            ABE.obj_abhy_wsp_demand_drip_24_update.Add(obj1);
                            var Data = ABE.obj_abhy_waterdraft_irrigation_data_24_update.Where(x => x.id == IrriId).FirstOrDefault();
                            Data.isupdated_dp = 1;
                            ABE.Entry(Data).State = EntityState.Modified;
                            ABE.SaveChanges();
                        }
                        else
                        {
                            abhy_wsp_demand_drip_24_update obj1 = new abhy_wsp_demand_drip_24_update();
                            obj1.season_type = season_type.ToLower();
                            obj1.crop_category = result["crop_category"];
                            obj1.crop_type = result["crop_type"];
                            obj1.crop_name = result["crop_name"];
                            obj1.area_irrigation = result["area_irrigation"].ToString();
                            obj1.gross_water = result["gross_water"].ToString();
                            obj1.water_demand = result["water_demand"].ToString();
                            obj1.area_proposed = result["area_proposed"].ToString();
                            obj1.net_water_demand = result["net_water_demand"].ToString();
                            obj1.reduction_gw = result["reduction_gw"].ToString();
                            obj1.reduction_in_demand = result["reduction_in_demand"].ToString();
                            obj1.meta_id = DEtails[0].id;
                            ABE.obj_abhy_wsp_demand_drip_24_update.Add(obj1);
                            var Data = ABE.obj_abhy_waterdraft_irrigation_data_24_update.Where(x => x.id == IrriId).FirstOrDefault();
                            Data.isupdated_dp = 1;
                            ABE.Entry(Data).State = EntityState.Modified;
                            DEtails[0].data_year = year;
                            ABE.Entry(DEtails[0]).State = EntityState.Modified;
                            ABE.SaveChanges();
                        }
                    }
                    else if (result["type"] == "Pipelines")
                    {
                        abhy_wsp_demand_meta_24_update obj = new abhy_wsp_demand_meta_24_update();
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
                            ABE.obj_abhy_wsp_demand_meta_24_update.Add(obj);
                            ABE.SaveChanges();
                            abhy_wsp_demand_pipeline_24_update obj1 = new abhy_wsp_demand_pipeline_24_update();
                            obj1.season_type = season_type.ToLower();
                            obj1.crop_category = result["crop_category"];
                            obj1.crop_type = result["crop_type"];
                            obj1.crop_name = result["crop_name"];
                            obj1.area_irrigation = result["area_irrigation"].ToString();
                            obj1.gross_water = result["gross_water"].ToString();
                            obj1.water_demand = result["water_demand"].ToString();
                            obj1.area_proposed = result["area_proposed"].ToString();
                            obj1.reduction = "20";
                            obj1.net_water_demand = result["net_water_demand"].ToString();
                            obj1.reduction_gw = result["reduction_gw"].ToString();
                            obj1.reduction_in_demand = result["reduction_in_demand"].ToString();
                            obj1.meta_id = obj.id;
                            ABE.obj_abhy_wsp_demand_pipeline_24_update.Add(obj1);
                            var Data = ABE.obj_abhy_waterdraft_irrigation_data_24_update.Where(x => x.id == IrriId).FirstOrDefault();
                            Data.isupdated_pl = 1;
                            ABE.Entry(Data).State = EntityState.Modified;
                            ABE.SaveChanges();
                        }
                        else
                        {
                            abhy_wsp_demand_pipeline_24_update obj1 = new abhy_wsp_demand_pipeline_24_update();
                            obj1.season_type = season_type.ToLower();
                            obj1.crop_category = result["crop_category"];
                            obj1.crop_type = result["crop_type"];
                            obj1.crop_name = result["crop_name"];
                            obj1.area_irrigation = result["area_irrigation"].ToString();
                            obj1.gross_water = result["gross_water"].ToString();
                            obj1.water_demand = result["water_demand"].ToString();
                            obj1.area_proposed = result["area_proposed"].ToString();
                            obj1.reduction = "20";
                            obj1.net_water_demand = result["net_water_demand"].ToString();
                            obj1.reduction_gw = result["reduction_gw"].ToString();
                            obj1.reduction_in_demand = result["reduction_in_demand"].ToString();
                            obj1.meta_id = DEtails[0].id;
                            ABE.obj_abhy_wsp_demand_pipeline_24_update.Add(obj1);
                            var Data = ABE.obj_abhy_waterdraft_irrigation_data_24_update.Where(x => x.id == IrriId).FirstOrDefault();
                            Data.isupdated_pl = 1;
                            ABE.Entry(Data).State = EntityState.Modified;
                            DEtails[0].data_year = year;
                            ABE.Entry(DEtails[0]).State = EntityState.Modified;
                            ABE.SaveChanges();
                        }
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
                    string year = "2024-25 Update";
                    var month = monthName;
                    var Data = (from t1 in ABE.obj_abhy_waterdraft_irrigation_meta_24_update
                                join t2 in ABE.obj_abhy_waterdraft_irrigation_data_24_update on t1.id equals t2.meta_id
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

                    abhy_wsp_demand_meta_24_update obj = new abhy_wsp_demand_meta_24_update();
                    var DEtails = ABE.obj_abhy_wsp_demand_meta_24_update.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram && x.data_year == year).ToList();
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
                        ABE.obj_abhy_wsp_demand_meta_24_update.Add(obj);
                        ABE.SaveChanges();
                        abhy_wsp_demand_drip_24_update obj1 = new abhy_wsp_demand_drip_24_update();
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
                        ABE.obj_abhy_wsp_demand_drip_24_update.Add(obj1);
                        ABE.SaveChanges();
                    }
                    else
                    {
                        abhy_wsp_demand_drip_24_update obj1 = new abhy_wsp_demand_drip_24_update();
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
                        ABE.obj_abhy_wsp_demand_drip_24_update.Add(obj1);
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
                    string year = "2024-25 Update";
                    var month = monthName;

                    var Data = (from t1 in ABE.obj_abhy_waterdraft_irrigation_meta_24_update
                                join t2 in ABE.obj_abhy_waterdraft_irrigation_data_24_update on t1.id equals t2.meta_id
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
                    abhy_wsp_demand_meta_24_update obj = new abhy_wsp_demand_meta_24_update();
                    var DEtails = ABE.obj_abhy_wsp_demand_meta_24_update.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram && x.data_year == year).ToList();
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
                        ABE.obj_abhy_wsp_demand_meta_24_update.Add(obj);
                        ABE.SaveChanges();
                        abhy_wsp_demand_pipeline_24_update obj1 = new abhy_wsp_demand_pipeline_24_update();
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
                        ABE.obj_abhy_wsp_demand_pipeline_24_update.Add(obj1);
                        ABE.SaveChanges();
                    }
                    else
                    {
                        abhy_wsp_demand_pipeline_24_update obj1 = new abhy_wsp_demand_pipeline_24_update();
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
                        ABE.obj_abhy_wsp_demand_pipeline_24_update.Add(obj1);
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
                    string year = "2024-25 Update";
                    var month = monthName;
                    abhy_wsp_demand_meta_24_update obj = new abhy_wsp_demand_meta_24_update();

                    var DEtails = ABE.obj_abhy_wsp_demand_meta_24_update.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram).ToList();

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
                        ABE.obj_abhy_wsp_demand_meta_24_update.Add(obj);
                        ABE.SaveChanges();
                        abhy_wsp_demand_anyother_24_update obj1 = new abhy_wsp_demand_anyother_24_update();

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
                        ABE.obj_abhy_wsp_demand_anyother_24_update.Add(obj1);
                        ABE.SaveChanges();
                    }
                    else
                    {
                        DEtails[0].data_year = year;
                        ABE.Entry(DEtails[0]).State = EntityState.Modified;
                        abhy_wsp_demand_anyother_24_update obj1 = new abhy_wsp_demand_anyother_24_update();
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
                        ABE.obj_abhy_wsp_demand_anyother_24_update.Add(obj1);
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
                    string year = "2024-25 Update";
                    var month = monthName;
                    abhy_wsp_demand_meta_24_update obj = new abhy_wsp_demand_meta_24_update();
                    var DEtails = ABE.obj_abhy_wsp_demand_meta_24_update.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram && x.data_year== year).SingleOrDefault();
                    if (DEtails==null) 
                    {
                         DEtails = ABE.obj_abhy_wsp_demand_meta_24_update.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram && x.data_year == "2024-25").SingleOrDefault();
                        if (DEtails==null)
                        {
                            DEtails = ABE.obj_abhy_wsp_demand_meta_24_update.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram && x.data_year == "2023-24").SingleOrDefault();
                        }

                    }

                    abhy_wsp_demand_fund_details_24_update obj1 = new abhy_wsp_demand_fund_details_24_update();
                    if (DEtails != null)
                    {
                        var FundList = ABE.obj_abhy_wsp_demand_fund_details_24_update.Where(x => x.meta_id == DEtails.id && x.fund_for == fund_for).ToList();
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
                        if (fund_for == "Other Measures")
                        {
                            obj1.innovative_measures = result["innovative_measures"];
                            obj1.area_selected_innovative = result["area_selected_innovative"];
                            int id_get = DEtails.id;
                            var DataFinal = ABE.obj_abhy_wsp_demand_fund_details_24_update.Where(x => x.meta_id == id_get && x.fund_for == fund_for && x.innovative_measures == obj1.innovative_measures).ToList();
                            Decimal TotalAnyFundArea = Convert.ToDecimal(result["area_proposed"]) + DataFinal.Sum(x => Convert.ToDecimal(x.area_proposed));
                            if (TotalAnyFundArea > Convert.ToDecimal(obj1.area_selected_innovative))
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
                        ABE.obj_abhy_wsp_demand_fund_details_24_update.Add(obj1);
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
                    string year = "2024-25 Update";


                    var Details = ABE.obj_abhy_wsp_demand_meta_24_update.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram && x.data_year == year).ToList().FirstOrDefault();
                    if (Details == null)
                    {
                        Details = ABE.obj_abhy_wsp_demand_meta_24_update.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram && x.data_year == "2024-25").ToList().FirstOrDefault();
                       if(Details == null)
                        {
                            Details = ABE.obj_abhy_wsp_demand_meta_24_update.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram && x.data_year == "2023-24").ToList().FirstOrDefault();

                        }
                    }

                    var data = ABE.obj_abhy_wsp_demand_sprinkler_24_update.Where(x => x.meta_id == Details.id).ToList();

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
                    string year = "2024-25 Update";
                    //var month = Session["month"].ToString();
                    var Details = ABE.obj_abhy_wsp_demand_meta_24_update.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram && x.data_year == year).ToList();
                    if(Details.Count == 0)
                    {
                        Details = ABE.obj_abhy_wsp_demand_meta_24_update.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram && x.data_year == "2024-25").ToList();
                        if (Details.Count == 0)
                        {
                            Details = ABE.obj_abhy_wsp_demand_meta_24_update.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram && x.data_year == "2023-24").ToList();

                        }
                    }
                    if (Details.Count > 0)
                    {
                        int id_get = Details[0].id;
                        var DataFinal = ABE.obj_abhy_wsp_demand_fund_details_24_update.Where(x => x.meta_id == id_get && x.fund_for == fund_for && x.financial_year == "2024-25").ToList();
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
                    string year = "2024-25 Update";
                    //var month = Session["month"].ToString();
                    var Details = ABE.obj_abhy_wsp_demand_meta_24_update.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram && x.data_year == year).ToList().FirstOrDefault();
                    if (Details == null)
                    {
                        Details = ABE.obj_abhy_wsp_demand_meta_24_update.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram && x.data_year == "2024-25").ToList().FirstOrDefault();
                        if (Details == null)
                        {
                            Details = ABE.obj_abhy_wsp_demand_meta_24_update.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram && x.data_year == "2023-24").ToList().FirstOrDefault();

                        }
                    }

                    var data = ABE.obj_abhy_wsp_demand_drip_24_update.Where(x => x.meta_id == Details.id).ToList();

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
                    string year = "2024-25 Update";
                    //var month = Session["month"].ToString();
                    var Details = ABE.obj_abhy_wsp_demand_meta_24_update.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram && x.data_year == year).ToList().FirstOrDefault();
                    if (Details == null)
                    {
                        Details = ABE.obj_abhy_wsp_demand_meta_24_update.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram && x.data_year == "2024-25").ToList().FirstOrDefault();
                        if (Details == null)
                        {
                            Details = ABE.obj_abhy_wsp_demand_meta_24_update.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram && x.data_year == "2023-24").ToList().FirstOrDefault();

                        }
                    }

                    var data = ABE.obj_abhy_wsp_demand_pipeline_24_update.Where(x => x.meta_id == Details.id).ToList();

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
                    string year = "2024-25 Update";
                    //var month = Session["month"].ToString();
                    var Details = ABE.obj_abhy_wsp_demand_meta_24_update.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram && x.data_year == year).ToList().FirstOrDefault();
                    if (Details == null)
                    {
                        Details = ABE.obj_abhy_wsp_demand_meta_24_update.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram && x.data_year == "2024-25").ToList().FirstOrDefault();
                        if (Details == null)
                        {
                            Details = ABE.obj_abhy_wsp_demand_meta_24_update.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram && x.data_year == "2023-24").ToList().FirstOrDefault();

                        }
                    }

                    var data = ABE.obj_abhy_wsp_demand_anyother_24_update.Where(x => x.meta_id == Details.id).ToList();

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
                    string year = "2024-25 Update";
                    abhy_wsp_demand_meta_24_update obj = new abhy_wsp_demand_meta_24_update();

                    var DEtails = ABE.obj_abhy_wsp_demand_meta_24_update.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram && x.data_year == year).ToList();
                    if (DEtails == null)
                    {
                        DEtails = ABE.obj_abhy_wsp_demand_meta_24_update.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram && x.data_year == "2024-25").ToList();
                    }
                    if (DEtails.Count == 0)
                    {
                        obj.state = state;
                        obj.district = dist;
                        obj.block = block;
                        obj.gp = gram;
                        obj.entry_by = "aa";
                        obj.data_year = year;
                        ABE.obj_abhy_wsp_demand_meta_24_update.Add(obj);
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
                        DEtails[0].data_year = year;
                        ABE.obj_abhy_wsp_innovative_measures.Add(obj1);
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
                    string year = "2024-25 Update";
                    //var month = Session["month"].ToString();
                    var Details = ABE.obj_abhy_wsp_demand_meta_24_update.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram && x.data_year == year).ToList().FirstOrDefault();
                    if (Details != null)
                    {
                        Details = ABE.obj_abhy_wsp_demand_meta_24_update.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram && x.data_year == "2024-25").ToList().FirstOrDefault();
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
                    string year = "2024-25 Update";
                    var month = monthName;
                    abhy_wsp_demand_meta_24_update obj = new abhy_wsp_demand_meta_24_update();
                    var DEtails = ABE.obj_abhy_wsp_demand_meta_24_update.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram).ToList();
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
                        ABE.obj_abhy_wsp_demand_meta_24_update.Add(obj);
                        ABE.SaveChanges();
                        abhy_wsp_demand_change_crop_24_update obj1 = new abhy_wsp_demand_change_crop_24_update();
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
                        ABE.obj_abhy_wsp_demand_change_crop_24_update.Add(obj1);
                        ABE.SaveChanges();
                    }
                    else
                    {
                        abhy_wsp_demand_change_crop_24_update obj1 = new abhy_wsp_demand_change_crop_24_update();
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
                        DEtails[0].data_year = year;
                        ABE.obj_abhy_wsp_demand_change_crop_24_update.Add(obj1);
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
                    string year = "2024-25 Update";
                    //var month = Session["month"].ToString();
                    string season_type = result["season_type"];
                    string original_crop_name = result["original_crop_name"];
                    var Details = ABE.obj_abhy_wsp_demand_meta_24_update.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram).ToList().FirstOrDefault();


                    var getData = ABE.obj_abhy_wsp_demand_change_crop_24_update.Where(x => x.meta_id == Details.id && x.season_type == season_type && x.original_crop_name == original_crop_name).ToList();
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
                    string year = "2024-25 Update";
                    //var month = Session["month"].ToString();
                    var Details = ABE.obj_abhy_wsp_demand_meta_24_update.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram && x.data_year == year).ToList().FirstOrDefault();
                    if (Details == null)
                    {
                        Details = ABE.obj_abhy_wsp_demand_meta_24_update.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram && x.data_year == "2024-25").ToList().FirstOrDefault();
                        if (Details == null)
                        {
                            Details = ABE.obj_abhy_wsp_demand_meta_24_update.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram && x.data_year == "2023-24").ToList().FirstOrDefault();

                        }


                    }

                    var data = ABE.obj_abhy_wsp_demand_change_crop_24_update.Where(x => x.meta_id == Details.id).ToList();

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
                    var state = Session["gstate"].ToString();
                    var dist = Session["gdist"].ToString();
                    var block = Session["gblock"].ToString();
                    var gram = Session["ggram"].ToString();
                    string year = "2024-25 Update";
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<dynamic>(data);

                    int id = Convert.ToInt32(result["IDD"]);

                    var DEtails = ABE.obj_abhy_wsp_demand_sprinkler_24_update.Where(x => x.id == id).ToList();
                    ABE.Entry(DEtails[0]).State = EntityState.Deleted;
                    int meta_id = Convert.ToInt32(DEtails[0].meta_id);
                    var fund_for = "Sprinkler";
                    var FundData = ABE.obj_abhy_wsp_demand_fund_details_24_update.Where(x => x.meta_id == meta_id && x.fund_for == fund_for).ToList();
                    if (FundData.Count != 0)
                    {
                        //ABE.Entry(FundData).State = EntityState.Deleted;
                        ABE.obj_abhy_wsp_demand_fund_details_24_update.RemoveRange(FundData);
                        //ABE.SaveChanges();
                    }
                    string season_type = DEtails[0].season_type;
                    string crop_name = DEtails[0].crop_name;
                    var Data = (from t1 in ABE.obj_abhy_waterdraft_irrigation_meta_24_update
                                join t2 in ABE.obj_abhy_waterdraft_irrigation_data_24_update on t1.id equals t2.meta_id
                                where t1.state_name == state && t1.district_name == dist && t1.block_name == block &&
                                t1.gp_name == gram
                                && t2.season_type == season_type
                                && t2.crop_name == crop_name
                                select new
                                {
                                    t2.season_type,
                                    t2.crop_category,
                                    t2.crop_type,
                                    t2.crop_name,
                                    t2.gross_water,
                                    t2.meta_id,
                                    t2.id,
                                    t2.isupdated_sp
                                }).FirstOrDefault();
                    if(Data != null)
                    {
                        var GetData = ABE.obj_abhy_waterdraft_irrigation_data_24_update.Where(x => x.id == Data.id).FirstOrDefault();
                        GetData.isupdated_sp = 0;
                        ABE.Entry(GetData).State = EntityState.Modified;
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

                    var state = Session["gstate"].ToString();
                    var dist = Session["gdist"].ToString();
                    var block = Session["gblock"].ToString();
                    var gram = Session["ggram"].ToString();
                    string year = "2024-25 Update";
                    var DEtails = ABE.obj_abhy_wsp_demand_drip_24_update.Where(x => x.id == id).ToList();
                    int meta_id = Convert.ToInt32(DEtails[0].meta_id);
                    var FundData = ABE.obj_abhy_wsp_demand_fund_details_24_update.Where(x => x.meta_id == meta_id && x.fund_for == "Drip").ToList();
                    if (FundData.Count != 0)
                    {
                        //ABE.Entry(FundData).State = EntityState.Deleted;
                        ABE.obj_abhy_wsp_demand_fund_details_24_update.RemoveRange(FundData);
                        //ABE.SaveChanges();
                    }
                    ABE.Entry(DEtails[0]).State = EntityState.Deleted;
                    string season_type = DEtails[0].season_type;
                    string crop_name = DEtails[0].crop_name;
                    var Data = (from t1 in ABE.obj_abhy_waterdraft_irrigation_meta_24_update
                                join t2 in ABE.obj_abhy_waterdraft_irrigation_data_24_update on t1.id equals t2.meta_id
                                where t1.state_name == state && t1.district_name == dist && t1.block_name == block &&
                                t1.gp_name == gram
                                && t2.season_type == season_type
                                && t2.crop_name == crop_name
                                select new
                                {
                                    t2.season_type,
                                    t2.crop_category,
                                    t2.crop_type,
                                    t2.crop_name,
                                    t2.gross_water,
                                    t2.meta_id,
                                    t2.id,
                                    t2.isupdated_sp
                                }).FirstOrDefault();
                    if(Data != null)
                    {
                        var GetData = ABE.obj_abhy_waterdraft_irrigation_data_24_update.Where(x => x.id == Data.id).FirstOrDefault();
                        GetData.isupdated_dp = 0;
                        ABE.Entry(GetData).State = EntityState.Modified;
                        
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
        public ActionResult Delete_data_pipe(string data)
        {
            if (Session["userid"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<dynamic>(data);

                    int id = Convert.ToInt32(result["IDD"]);
                    var state = Session["gstate"].ToString();
                    var dist = Session["gdist"].ToString();
                    var block = Session["gblock"].ToString();
                    var gram = Session["ggram"].ToString();
                    string year = "2024-25 Update";

                    var DEtails = ABE.obj_abhy_wsp_demand_pipeline_24_update.Where(x => x.id == id).ToList();
                    int meta_id = Convert.ToInt32(DEtails[0].meta_id);
                    var FundData = ABE.obj_abhy_wsp_demand_fund_details_24_update.Where(x => x.meta_id == meta_id && x.fund_for == "UG Pipelines").ToList();
                    if (FundData.Count != 0)
                    {
                        //ABE.Entry(FundData).State = EntityState.Deleted;
                        ABE.obj_abhy_wsp_demand_fund_details_24_update.RemoveRange(FundData);
                        //ABE.SaveChanges();
                    }
                    ABE.Entry(DEtails[0]).State = EntityState.Deleted;
                    string season_type = DEtails[0].season_type;
                    string crop_name = DEtails[0].crop_name;
                    var Data = (from t1 in ABE.obj_abhy_waterdraft_irrigation_meta_24_update
                                join t2 in ABE.obj_abhy_waterdraft_irrigation_data_24_update on t1.id equals t2.meta_id
                                where t1.state_name == state && t1.district_name == dist && t1.block_name == block &&
                                t1.gp_name == gram
                                && t2.season_type == season_type
                                && t2.crop_name == crop_name
                                select new
                                {
                                    t2.season_type,
                                    t2.crop_category,
                                    t2.crop_type,
                                    t2.crop_name,
                                    t2.gross_water,
                                    t2.meta_id,
                                    t2.id,
                                    t2.isupdated_sp
                                }).FirstOrDefault();
                    var GetData = ABE.obj_abhy_waterdraft_irrigation_data_24_update.Where(x => x.id == Data.id).FirstOrDefault();
                    GetData.isupdated_pl = 0;
                    ABE.Entry(GetData).State = EntityState.Modified;
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
                    var DEtails = ABE.obj_abhy_wsp_demand_change_crop_24_update.Where(x => x.id == id).ToList();
                    int meta_id = Convert.ToInt32(DEtails[0].meta_id);
                    var FundData = ABE.obj_abhy_wsp_demand_fund_details_24_update.Where(x => x.meta_id == meta_id && x.fund_for == "Crop Diversification").ToList();
                    if (FundData.Count != 0)
                    {
                        //ABE.Entry(FundData).State = EntityState.Deleted;
                        ABE.obj_abhy_wsp_demand_fund_details_24_update.RemoveRange(FundData);
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


                    var DEtails = ABE.obj_abhy_wsp_demand_anyother_24_update.Where(x => x.id == id).ToList();
                    int meta_id = Convert.ToInt32(DEtails[0].meta_id);
                    var FundData = ABE.obj_abhy_wsp_demand_fund_details_24_update.Where(x => x.meta_id == meta_id && x.fund_for == "Other Measures").ToList();
                    if (FundData.Count != 0)
                    {
                        //ABE.Entry(FundData).State = EntityState.Deleted;
                        ABE.obj_abhy_wsp_demand_fund_details_24_update.RemoveRange(FundData);
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
                    var DEtails = ABE.obj_abhy_wsp_demand_fund_details_24_update.Where(x => x.id == id).ToList();

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
                    string year = "2024-25 Update";


                    var Details = ABE.obj_abhy_wsp_demand_meta_24_update.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram).ToList().FirstOrDefault();


                    var data = ABE.obj_abhy_wsp_demand_anyother_24_update.Where(x => x.meta_id == Details.id).ToList();

                    List<abhy_wsp_demand_anyother_24_update> DropDownData = new List<abhy_wsp_demand_anyother_24_update>();
                    foreach (var item in data)
                    {
                        abhy_wsp_demand_anyother_24_update GetList = new abhy_wsp_demand_anyother_24_update();
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



        #region Supply Side 
        public ActionResult SupplySide()
        {
            return View();
        }

        public ActionResult SupplySide_AR_Pointer(int id)
        {
            var Details = ABE.obj_abhy_artificial_recharge_st_data_24_update.Where(x => x.id == id).FirstOrDefault();
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
            var Details = ABE.obj_abhy_water_conservation_st_data_24_update.Where(x => x.id == id).FirstOrDefault();
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
                var year = "2024-25 Update";

                var checkData = ABE.obj_abhy_artificial_recharge_st_data_24_update.Where(x => x.state == State && x.district == District && x.block == Block && x.gp == Gp
                && x.year == year && x.latitude == latitude && x.longitude == longitude).ToList();
                if (checkData.Count != 0)
                {
                    return Json("Data already entered for that Lat, Long", JsonRequestBehavior.AllowGet);
                }
                var Data = new abhy_artificial_recharge_st_data_24_update();
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
                //Data.annual_gw_recharge = annual_gw_recharge;
                decimal total = Convert.ToDecimal(storage_capacity) * Convert.ToDecimal(annual_filling_no) * Convert.ToDecimal(recharge) * Convert.ToDecimal(0.01);
                Data.annual_gw_recharge = Convert.ToString(total);

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
                ABE.obj_abhy_artificial_recharge_st_data_24_update.Add(Data);
                ABE.SaveChanges();

                return Json("Data saved successfully", JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            { return Json("Error", JsonRequestBehavior.AllowGet); }
        }

        [HttpPost]
        public ActionResult Update_Data_AR(string State, string District, string Block, string Gp, string village_name, string location_detail, string type_of_ar, string latitude, string longitude, string work_proposed, string storage_capacity
    , string annual_filling_no, string recharge, string annual_gw_recharge, string fund_resource, string estimated_cost, string fund_avail_convergence, string gap_funding_atal, string IDD_AR,
            string financial_year, string department_name, string scheme_name, string other_scheme)
        {
            try
            {
                int IDD = Convert.ToInt32(IDD_AR);

                var year = "2024-25 Update";
                var Data = ABE.obj_abhy_artificial_recharge_st_data_24_update.Where(x => x.id == IDD).ToList();
                if (Data.Count > 0)
                {
                    Data[0].state = State;
                    Data[0].district = District;
                    Data[0].block = Block;
                    Data[0].gp = Gp;
                    Data[0].year = year;
                    Data[0].village_name = village_name;
                    Data[0].location_detail = location_detail;
                    Data[0].type_of_ar = type_of_ar;
                    Data[0].latitude = latitude;
                    Data[0].longitude = longitude;
                    Data[0].work_proposed = work_proposed;
                    Data[0].storage_capacity = storage_capacity;
                    Data[0].annual_filling_no = annual_filling_no;
                    Data[0].recharge = recharge;
                    //Data[0].annual_gw_recharge = annual_gw_recharge;
                    decimal total = Convert.ToDecimal(storage_capacity) * Convert.ToDecimal(annual_filling_no) * Convert.ToDecimal(recharge) * Convert.ToDecimal(0.01);
                    Data[0].annual_gw_recharge = Convert.ToString(total);

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
                return Json("Data updated successfully", JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            { return Json("Error", JsonRequestBehavior.AllowGet); }
        }

        [HttpPost]
        public ActionResult Save_Data_WR(string State, string District, string Block, string Gp, string village_name, string location_detail,
            string type_of_wr, string latitude, string longitude, string work_proposed, string storage_capacity,
            string annual_filling_no, string effective_storage, string estimated_cost, string fund_avail_convergence, string gap_funding_atal,
            string financial_year, string department_name, string scheme_name, string other_scheme)
        {
            try
            {
                DateTime now = DateTime.Now;
                int MonthNumber = now.Month;

                // Get the name of the month
                string monthName = CultureInfo.CurrentCulture.DateTimeFormat.GetMonthName(MonthNumber);
                //ABE.obj_abhy_water_level_monitoring_insert
                var year = "2024-25 Update";
                var month = monthName;
                var checkData = ABE.obj_abhy_water_conservation_st_data_24_update.Where(x => x.state == State && x.district == District && x.block == Block && x.gp == Gp
                && x.year == year && x.latitude == latitude && x.longitude == longitude).ToList();
                if (checkData.Count != 0)
                {
                    return Json("Data already entered for that Lat, Long", JsonRequestBehavior.AllowGet);
                }
                var Data = new abhy_water_conservation_st_data_24_update();
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
                //Data.effective_storage = effective_storage;
                decimal total = Convert.ToDecimal(storage_capacity) * Convert.ToDecimal(0.6);
                Data.effective_storage = Convert.ToString(total);

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
                ABE.obj_abhy_water_conservation_st_data_24_update.Add(Data);
                ABE.SaveChanges();

                return Json("Data saved successfully", JsonRequestBehavior.AllowGet);
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
                var year = "2024-25 Update";
                //ABE.obj_abhy_water_level_monitoring_insert
                int IDD = Convert.ToInt32(IDD_WR);
                var Data = ABE.obj_abhy_water_conservation_st_data_24_update.Where(x => x.id == IDD).ToList();
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
                    Data[0].year = year;
                    Data[0].village_name = village_name;
                    Data[0].location_detail = location_detail;
                    Data[0].type_of_wr = type_of_wr;
                    Data[0].latitude = latitude;
                    Data[0].longitude = longitude;
                    Data[0].work_proposed = work_proposed;
                    Data[0].storage_capacity = storage_capacity;
                    Data[0].annual_filling_no = annual_filling_no;
                    //Data[0].effective_storage = effective_storage;
                    decimal total = Convert.ToDecimal(storage_capacity) * Convert.ToDecimal(0.6);
                    Data[0].effective_storage = Convert.ToString(total);

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
                return Json("Data updated successfully", JsonRequestBehavior.AllowGet);
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
            var year = "2024-25 Update";
            //var month = Session["month"].ToString();

            var Data = ABE.obj_abhy_artificial_recharge_st_data_24_update.Where(x => x.state == state && x.district == dist && x.block == block).ToList();
            Data.ForEach(a => {
                if (!string.IsNullOrEmpty(a.gp))
                {
                    a.gp = WebUtility.HtmlDecode(a.gp);
                }
            });
            var DataFilter = Data.Where(x => x.gp == gram).ToList();
            return Json(DataFilter, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult Get_Lists_AR_by_id(string id)
        {
            int id_check = Convert.ToInt32(id);
            var Data = ABE.obj_abhy_artificial_recharge_st_data_24_update.Where(x => x.id == id_check).ToList();
            return Json(Data, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult Delete_AR_by_id(string id)
        {
            int id_check = Convert.ToInt32(id);
            var Data = ABE.obj_abhy_artificial_recharge_st_data_24_update.Where(x => x.id == id_check).ToList();
            ABE.Entry(Data[0]).State = EntityState.Deleted;
            ABE.SaveChanges();
            return Json("Data deleted successfully", JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult Get_Lists_WR()


        {
            var state = Session["gstate"].ToString();
            var dist = Session["gdist"].ToString();
            var block = Session["gblock"].ToString();
            var gram = Session["ggram"].ToString();
            var year = "2024-25 Update";
            var Data = ABE.obj_abhy_water_conservation_st_data_24_update.Where(x => x.state == state && x.district == dist && x.block == block).ToList();
            Data.ForEach(a => {
                if (!string.IsNullOrEmpty(a.gp)) {
                    a.gp = WebUtility.HtmlDecode(a.gp);
                    }
            });
            var DataFilter = Data.Where(x =>x.gp==gram).ToList();
            return Json(DataFilter, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult Get_Lists_WR_by_id(string id)
        {
            int id_check = Convert.ToInt32(id);
            var Data = ABE.obj_abhy_water_conservation_st_data_24_update.Where(x => x.id == id_check).ToList();
            return Json(Data, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult Delete_WR_by_id(string id)
        {
            int id_check = Convert.ToInt32(id);
            var Data = ABE.obj_abhy_water_conservation_st_data_24_update.Where(x => x.id == id_check).ToList();
            ABE.Entry(Data[0]).State = EntityState.Deleted;
            ABE.SaveChanges();
            return Json("Data deleted successfully", JsonRequestBehavior.AllowGet);
        }
        public ActionResult Summary_supply_demand()
        {
            return View();
        }

        [HttpGet]
        public ActionResult Fetch_Total_area_Conventional_From_Irrigation()
        {
            if (Session["UserId"] != null)
            {
                var state = Session["gstate"].ToString();
                var dis = Session["gdist"].ToString();
                var block = Session["gblock"].ToString();
                var gp = Session["ggram"].ToString();
                string year = "2024-25 Update";
                //var month = Session["month"].ToString();


                double Data = (from t1 in ABE.obj_abhy_waterdraft_irrigation_meta_24_update
                               join t2 in ABE.obj_abhy_waterdraft_irrigation_data_24_update on t1.id equals t2.meta_id
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
                                   t2.water_demand,
                                   t2.meta_id,
                                   t2.id
                               }).ToList().Sum(x => x.area);
                if (Data == 0)
                {
                    Data = (from t1 in ABE.obj_abhy_waterdraft_irrigation_meta_24_update
                            join t2 in ABE.obj_abhy_waterdraft_irrigation_data_24_update on t1.id equals t2.meta_id
                            where t1.state_name == state && t1.district_name == dis && t1.block_name == block &&
                            t1.gp_name == gp && t1.data_year == "2024-25"
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
                                t2.water_demand,
                                t2.meta_id,
                                t2.id
                            }).ToList().Sum(x => x.area);
                }
                return Json(Data, JsonRequestBehavior.AllowGet);
            }

            else
            {
                return RedirectToAction("WSP_GWM_HOME", "WspNew");
            }
        }

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
                    string year = "2024-25 Update";
                    //var month = Session["month"].ToString();
                    DemandSummary Data = new DemandSummary();
                    abhy_wsp_demand_meta_24_update obj = new abhy_wsp_demand_meta_24_update();
                    var DEtails = ABE.obj_abhy_wsp_demand_meta_24_update.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram).FirstOrDefault();
                    if (DEtails!= null)
                    {

                        var ID = DEtails.id;
                        var ALLDataSP = ABE.obj_abhy_wsp_demand_sprinkler_24_update.Where(x => x.meta_id == ID).ToList();
                        if (ALLDataSP.Count != 0)
                        {
                            double NetWaterDemandSP = ALLDataSP.Sum(x => Convert.ToDouble(x.net_water_demand));
                            double TotalWaterDemandSP = ALLDataSP.Sum(x => Convert.ToDouble(x.water_demand));
                            double ReductionWaterDemandSP = ALLDataSP.Sum(x => Convert.ToDouble(x.reduction_gw));
                            double ProposedAreaSP = ALLDataSP.Sum(x => Convert.ToDouble(x.area_proposed));
                            double AreaUnderMeasuresSP = ALLDataSP.Sum(x => Convert.ToDouble(x.area_irrigation));
                            var FundData = ABE.obj_abhy_wsp_demand_fund_details_24_update.Where(x => x.meta_id == ID && x.fund_for == "Sprinkler").ToList();
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
                        var ALLDataDrip = ABE.obj_abhy_wsp_demand_drip_24_update.Where(x => x.meta_id == ID).ToList();
                        if (ALLDataDrip.Count != 0)
                        {

                            double NetWaterDemandDrip = ALLDataDrip.Sum(x => {
                                double value;
                                if (double.TryParse(x.net_water_demand, out value))
                                {
                                    return value;
                                }
                                else
                                {
                                    // Handle invalid input (e.g., log error, use default value)
                                    // For simplicity, returning 0 here if parsing fails
                                    return 0;
                                }

                            });
                           // double NetWaterDemandDrip = ALLDataDrip.Sum(x => Convert.ToDouble(x.net_water_demand));

                            double TotalWaterDemandDrip = ALLDataDrip.Sum(x => {
                                double value;
                                if (double.TryParse(x.water_demand, out value))
                                {
                                    return value;
                                }
                                else
                                {
                                    // Handle invalid input (e.g., log error, use default value)
                                    // For simplicity, returning 0 here if parsing fails
                                    return 0;
                                }

                            });
                            double ReductionWaterDemandDrip = ALLDataDrip.Sum(x =>
                            {
                                double value;
                                if (double.TryParse(x.reduction_gw, out value))
                                {
                                    return value;
                                }
                                else
                                {
                                    // Handle invalid input (e.g., log error, use default value)
                                    // For simplicity, returning 0 here if parsing fails
                                    return 0;
                                }

                            });

                            double ProposedAreaDrip = ALLDataDrip.Sum(x =>
                            {
                                double value;
                                if (double.TryParse(x.area_proposed, out value))
                                {
                                    return value;
                                }
                                else
                                {
                                    // Handle invalid input (e.g., log error, use default value)
                                    // For simplicity, returning 0 here if parsing fails
                                    return 0;
                                }

                            });

                            double AreaUnderMeasuresDrip = ALLDataDrip.Sum(x =>
                            {
                                double value;
                                if (double.TryParse(x.area_irrigation, out value))
                                {
                                    return value;
                                }
                                else
                                {
                                    // Handle invalid input (e.g., log error, use default value)
                                    // For simplicity, returning 0 here if parsing fails
                                    return 0;
                                }

                            });
                            var FundData = ABE.obj_abhy_wsp_demand_fund_details_24_update.Where(x => x.meta_id == ID && x.fund_for == "Drip").ToList();
                            if (FundData.Count != 0)
                            {
                                double TotalCost = FundData.Sum(x =>
                                {
                                    double value;
                                    if (double.TryParse(x.approx_est_cost, out value))
                                    {
                                        return value;
                                    }
                                    else
                                    {
                                        // Handle invalid input (e.g., log error, use default value)
                                        // For simplicity, returning 0 here if parsing fails
                                        return 0;
                                    }

                                });
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
                        var ALLDataPipe = ABE.obj_abhy_wsp_demand_pipeline_24_update.Where(x => x.meta_id == ID).ToList();
                        if (ALLDataPipe.Count != 0)
                        {
                            double NetWaterDemandPipe = ALLDataPipe.Sum(x =>
                            {
                                double value;
                                if (double.TryParse(x.net_water_demand, out value))
                                {
                                    return value;
                                }
                                else
                                {
                                    // Handle invalid input (e.g., log error, use default value)
                                    // For simplicity, returning 0 here if parsing fails
                                    return 0;
                                }

                            });
                            double TotalWaterDemandPipe = ALLDataPipe.Sum(x =>
                            {
                                double value;
                                if (double.TryParse(x.water_demand, out value))
                                {
                                    return value;
                                }
                                else
                                {
                                    // Handle invalid input (e.g., log error, use default value)
                                    // For simplicity, returning 0 here if parsing fails
                                    return 0;
                                }

                            });
                            double ReductionWaterDemandPipe = ALLDataPipe.Sum(x => {
                                double value;
                                if (double.TryParse(x.reduction_gw, out value))
                                {
                                    return value;
                                }
                                else
                                {
                                    // Handle invalid input (e.g., log error, use default value)
                                    // For simplicity, returning 0 here if parsing fails
                                    return 0;
                                }

                            });
                            double ProposedAreaPipe = ALLDataPipe.Sum(x =>
                            {
                                double value;
                                if (double.TryParse(x.area_proposed, out value))
                                {
                                    return value;
                                }
                                else
                                {
                                    // Handle invalid input (e.g., log error, use default value)
                                    // For simplicity, returning 0 here if parsing fails
                                    return 0;
                                }

                            });
                            double AreaUnderMeasuresPipe = ALLDataPipe.Sum(x =>
                            {
                                double value;
                                if (double.TryParse(x.area_irrigation, out value))
                                {
                                    return value;
                                }
                                else
                                {
                                    // Handle invalid input (e.g., log error, use default value)
                                    // For simplicity, returning 0 here if parsing fails
                                    return 0;
                                }

                            });
                            var FundData = ABE.obj_abhy_wsp_demand_fund_details_24_update.Where(x => x.meta_id == ID && x.fund_for == "UG Pipelines").ToList();
                            if (FundData.Count != 0)
                            {
                                double TotalCost = FundData.Sum(x =>
                                {
                                    double value;
                                    if (double.TryParse(x.approx_est_cost, out value))
                                    {
                                        return value;
                                    }
                                    else
                                    {
                                        // Handle invalid input (e.g., log error, use default value)
                                        // For simplicity, returning 0 here if parsing fails
                                        return 0;
                                    }

                                });
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
                        var ALLDataCrop = ABE.obj_abhy_wsp_demand_change_crop_24_update.Where(x => x.meta_id == ID).ToList();
                        if (ALLDataCrop.Count != 0)
                        {
                            var GetListOriginal = ALLDataCrop.Distinct().GroupBy(x => new { x.season_type }).ToList();
                            double TotalWaterDemandCrop = 0;
                            if (GetListOriginal.Count != 0)
                            {
                                foreach (var item in GetListOriginal.AsEnumerable())
                                {
                                    var OriginalCrop = item.First();
                                    TotalWaterDemandCrop += Convert.ToDouble(OriginalCrop.original_wt_dmd);
                                }
                            }
                            double NetWaterDemandCrop = ALLDataCrop.Sum(x =>
                            {
                                double value;
                                if (double.TryParse(x.change_water_demand, out value))
                                {
                                    return value;
                                }
                                else
                                {
                                    // Handle invalid input (e.g., log error, use default value)
                                    // For simplicity, returning 0 here if parsing fails
                                    return 0;
                                }

                            });
                            double ReductionWaterDemandCrop = TotalWaterDemandCrop - NetWaterDemandCrop;

                            double ProposedAreaCrop = ALLDataCrop.Sum(x =>
                            {
                                double value;
                                if (double.TryParse(x.area_ch, out value))
                                {
                                    return value;
                                }
                                else
                                {
                                    // Handle invalid input (e.g., log error, use default value)
                                    // For simplicity, returning 0 here if parsing fails
                                    return 0;
                                }

                            });
                            //double AreaUnderMeasuresCrop = ALLDataCrop.Sum(x => Convert.ToDouble(x.area_irrigation));
                            var FundData = ABE.obj_abhy_wsp_demand_fund_details_24_update.Where(x => x.meta_id == ID && x.fund_for == "Crop Diversification").ToList();
                            if (FundData.Count != 0)
                            {
                                double TotalCost = FundData.Sum(x =>
                                {
                                    double value;
                                    if (double.TryParse(x.approx_est_cost, out value))
                                    {
                                        return value;
                                    }
                                    else
                                    {
                                        // Handle invalid input (e.g., log error, use default value)
                                        // For simplicity, returning 0 here if parsing fails
                                        return 0;
                                    }

                                });
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

                        var ALLDataAny = ABE.obj_abhy_wsp_demand_anyother_24_update.Where(x => x.meta_id == ID).ToList();
                        if (ALLDataAny.Count != 0)
                        {
                            double NetWaterDemandAny = ALLDataAny.Sum(x =>
                            {
                                double value;
                                if (double.TryParse(x.gross_water, out value))
                                {
                                    return value;
                                }
                                else
                                {
                                    // Handle invalid input (e.g., log error, use default value)
                                    // For simplicity, returning 0 here if parsing fails
                                    return 0;
                                }

                            });
                            double TotalWaterDemandAny = ALLDataAny.Sum(x =>
                            {
                                double value;
                                if (double.TryParse(x.water_demand, out value))
                                {
                                    return value;
                                }
                                else
                                {
                                    // Handle invalid input (e.g., log error, use default value)
                                    // For simplicity, returning 0 here if parsing fails
                                    return 0;
                                }

                            });
                            double ReductionWaterDemandAny = ALLDataAny.Sum(x =>
                            {
                                double value;
                                if (double.TryParse(x.reduction, out value))
                                {
                                    return value;
                                }
                                else
                                {
                                    // Handle invalid input (e.g., log error, use default value)
                                    // For simplicity, returning 0 here if parsing fails
                                    return 0;
                                }

                            });
                            double ProposedAreaAny = ALLDataAny.Sum(x =>
                            {
                                double value;
                                if (double.TryParse(x.area_irrigation, out value))
                                {
                                    return value;
                                }
                                else
                                {
                                    // Handle invalid input (e.g., log error, use default value)
                                    // For simplicity, returning 0 here if parsing fails
                                    return 0;
                                }

                            });
                            double AreaUnderMeasuresAny = 0;
                            var FundData = ABE.obj_abhy_wsp_demand_fund_details_24_update.Where(x => x.meta_id == ID && x.fund_for == "Other Measures").ToList();
                            if (FundData.Count != 0)
                            {
                                double TotalCost = FundData.Sum(x =>
                                {
                                    double value;
                                    if (double.TryParse(x.approx_est_cost, out value))
                                    {
                                        return value;
                                    }
                                    else
                                    {
                                        // Handle invalid input (e.g., log error, use default value)
                                        // For simplicity, returning 0 here if parsing fails
                                        return 0;
                                    }

                                });
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
                    //return Json("error", JsonRequestBehavior.AllowGet);
                    return new JsonResult
                    {
                        Data = new { ErrorMessage =$"{ex.Message}\n\nStackTrace: {ex.StackTrace}" },
                        ContentEncoding = System.Text.Encoding.UTF8,
                        JsonRequestBehavior = JsonRequestBehavior.DenyGet
                    };
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
                    string year = "2024-25 Update";
                    //var month = Session["month"].ToString();
                    abhy_wsp_demand_meta_24_update obj = new abhy_wsp_demand_meta_24_update();
                    List<abhy_wsp_demand_fund_details_24_update> Data = new List<abhy_wsp_demand_fund_details_24_update>();
                    var DEtails = ABE.obj_abhy_wsp_demand_meta_24_update.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram && x.data_year == year).FirstOrDefault();
                    if (DEtails != null)
                    {
                        var ID = DEtails.id;
                        Data = ABE.obj_abhy_wsp_demand_fund_details_24_update.Where(x => x.meta_id == ID).ToList();
                    }
                    else
                    {
                        var DEtails1 = ABE.obj_abhy_wsp_demand_meta_24_update.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram && x.data_year == "2024-25").FirstOrDefault();
                        if (DEtails1 == null)
                        {
                           DEtails1 = ABE.obj_abhy_wsp_demand_meta_24_update.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram && x.data_year == "2023-24").FirstOrDefault();

                        }
                        var ID = DEtails1.id;
                        Data = ABE.obj_abhy_wsp_demand_fund_details_24_update.Where(x => x.meta_id == ID).ToList();

                        return Json(Data, JsonRequestBehavior.AllowGet);
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
                    string year = "2024-25 Update";
                    //var month = Session["month"].ToString();
                    abhy_wsp_demand_meta_24_update obj = new abhy_wsp_demand_meta_24_update();
                    List<abhy_wsp_demand_drip_24_update> Data = new List<abhy_wsp_demand_drip_24_update>();
                    var DEtails = ABE.obj_abhy_wsp_demand_meta_24_update.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram && x.data_year == year).FirstOrDefault();
                    if (DEtails != null)
                    {
                        var ID = DEtails.id;
                        Data = ABE.obj_abhy_wsp_demand_drip_24_update.Where(x => x.meta_id == ID).ToList();
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
                    string year = "2024-25 Update";
                    //var month = Session["month"].ToString();
                    abhy_wsp_demand_meta_24_update obj = new abhy_wsp_demand_meta_24_update();
                    List<abhy_wsp_demand_pipeline_24_update> Data = new List<abhy_wsp_demand_pipeline_24_update>();
                    var DEtails = ABE.obj_abhy_wsp_demand_meta_24_update.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram && x.data_year == year).FirstOrDefault();
                    if (DEtails != null)
                    {
                        var ID = DEtails.id;
                        Data = ABE.obj_abhy_wsp_demand_pipeline_24_update.Where(x => x.meta_id == ID).ToList();
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
                    string year = "2024-25 Update";
                    //var month = Session["month"].ToString();
                    abhy_wsp_demand_meta_24_update obj = new abhy_wsp_demand_meta_24_update();
                    List<abhy_wsp_demand_change_crop_24_update> Data = new List<abhy_wsp_demand_change_crop_24_update>();
                    var DEtails = ABE.obj_abhy_wsp_demand_meta_24_update.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram && x.data_year == year).FirstOrDefault();
                    if(DEtails == null)
                    {
                        DEtails = ABE.obj_abhy_wsp_demand_meta_24_update.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram && x.data_year == "2024-25").FirstOrDefault();
                       
                    }
                    if (DEtails != null)
                    {
                        var ID = DEtails.id;
                        Data = ABE.obj_abhy_wsp_demand_change_crop_24_update.Where(x => x.meta_id == ID).ToList();
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
                    string year = "2024-25 Update";
                    //var month = Session["month"].ToString();
                    abhy_wsp_demand_meta_24_update obj = new abhy_wsp_demand_meta_24_update();

                    var DEtails = ABE.obj_abhy_waterdraft_irrigation_meta_24_update.Where(x => x.state_name == state && x.district_name == dist && x.block_name == block && x.gp_name == gram && x.data_year == year).ToList();

                    if (DEtails.Count > 0)
                    {
                        System.Data.DataTable dt = new System.Data.DataTable();
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
                        var data1 = ABE.obj_abhy_waterdraft_irrigation_data_24_update.Where(x => x.meta_id == meta_id_irr).ToList(); // origanl

                        for (int i = 0; i < data1.Count; i++)
                        {
                            int meta_id_temp = data1[i].id;
                            DataRow dr = dt.NewRow();
                            dt.Rows.InsertAt(dt.NewRow(), i);
                            var data2 = ABE.obj_abhy_wsp_demand_change_crop_24_update.Where(x => x.uti_id == meta_id_temp).ToList();//change
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
        public ActionResult Fetch_Irrigation_kharif1()
        {
            if (Session["UserId"] != null)
            {
                var state = Session["gstate"].ToString();
                var dis = Session["gdist"].ToString();
                var block = Session["gblock"].ToString();
                var gp = Session["ggram"].ToString();
                string year = "2024-25 Update";
                //var month = Session["month"].ToString();


                var Data = (from t1 in ABE.obj_abhy_waterdraft_irrigation_meta_24_update
                            join t2 in ABE.obj_abhy_waterdraft_irrigation_data_24_update on t1.id equals t2.meta_id
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
                    string year = "2024-25 Update";
                    //var month = Session["month"].ToString();
                    abhy_wsp_demand_meta_24_update obj = new abhy_wsp_demand_meta_24_update();
                    List<abhy_wsp_demand_anyother_24_update> Data = new List<abhy_wsp_demand_anyother_24_update>();
                    var DEtails = ABE.obj_abhy_wsp_demand_meta_24_update.Where(x => x.state == state && x.district == dist && x.block == block && x.gp == gram && x.data_year == year).FirstOrDefault();
                    if (DEtails != null)
                    {
                        var ID = DEtails.id;
                        Data = ABE.obj_abhy_wsp_demand_anyother_24_update.Where(x => x.meta_id == ID).ToList();
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
                    var year = "2024-25 Update";
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
            var year = "2024-25 Update";
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
                    //int year = Convert.ToInt32("2024-25");

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
            //var Year = "2024-25";
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
        #endregion


        #region PGWM
        public ActionResult PGWM()
        {
            return View();
        }
        public ActionResult pgwm_summary()
        {
            return View();
        }



        [HttpPost]
        public ActionResult Save_abhy_wsp_pgwm_committee_member(string data)
        {
            try
            {
                DateTime now = DateTime.Now;
                int MonthNumber = now.Month;

                // Get the name of the month
                string monthName = CultureInfo.CurrentCulture.DateTimeFormat.GetMonthName(MonthNumber);
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<abhy_wsp_pgwm_committee_member>(data);
                var Data = new abhy_wsp_pgwm_committee_member_24_update();
                var month = monthName;
                Data.state_name = Session["gstate"].ToString();
                Data.district_name = Session["gdist"].ToString();
                Data.block_name = Session["gblock"].ToString(); ;
                Data.gp_name = Session["ggram"].ToString();
                Data.data_year = "2024-25 Update";
                Data.entry_by = Session["Email"].ToString();
                Data.member_name = result.member_name;
                Data.designation = result.designation;
                Data.gender = result.gender;
                Data.contact_no = result.contact_no;
                Data.month = month;
                Data.month_order_by = Get_Month_Number(month);
                Data.entry_by = Session["Email"].ToString();

                //ABE.Entry(Data).State = EntityState.Modified;
                ABE.obj_abhy_wsp_pgwm_committee_member_24_update.Add(Data);
                ABE.SaveChanges();

                return Json("Successfully Saved", JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            { return Json("Error", JsonRequestBehavior.AllowGet); }
        }


        [HttpGet]
        public ActionResult Getting_abhy_wsp_pgwm_committee_member()
       {
            if (Session["UserId"] != null)
            {
                try
                {
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();
                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    var Year = "2024-25 Update";
                    //var month = Session["month"].ToString();
                    List<abhy_wsp_pgwm_committee_member_24_update> ddetails = new List<abhy_wsp_pgwm_committee_member_24_update>();

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != null)
                    {
                        ddetails = ABE.obj_abhy_wsp_pgwm_committee_member_24_update.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram).ToList();//total list
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
        public ActionResult Delete_abhy_wsp_pgwm_committee_member(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_wsp_pgwm_committee>(Data);

                    if (result.id != 0)
                    {
                        var TKID = Convert.ToInt32(result.id);
                        var Data1 = ABE.obj_abhy_wsp_pgwm_committee_member_24_update.Where(x => x.id == TKID).SingleOrDefault();
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
        public class TestModel
        {
            public int abhy_wsp_pgwm_committee_id { get; set; }
            public HttpPostedFileBase mom_doc { get; set; }
            public HttpPostedFileBase meeting_image { get; set; }
            public HttpPostedFileBase meeting_resolution { get; set; }
            public HttpPostedFileBase attendance_sheet { get; set; }
            public string meeting_date { get; set; }
            public string meeting_gp_name { get; set; }
            public string month { get; set; }
            public string meeting_village { get; set; }
            public string meeting_location { get; set; }
            public int male_attendees { get; set; }
            public int female_attendees { get; set; }
            public int transgender_attendees { get; set; }
            public int total_attendees { get; set; }
        }

        [HttpPost]
        public ActionResult Save_abhy_wsp_pgwm_committee_meeting(TestModel model)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    DateTime now = DateTime.Now;
                    int MonthNumber = now.Month;
                    // Get the name of the month
                    string monthName = CultureInfo.CurrentCulture.DateTimeFormat.GetMonthName(MonthNumber);
                    var months = monthName;
                    var state_name = Session["gstate"].ToString();
                    var district_name = Session["gdist"].ToString();
                    var block_name = Session["gblock"].ToString();
                    var gp_name = Session["ggram"].ToString();
                    var data_year = "2024-25 Update";

                    var data_count = ABE.obj_abhy_wsp_pgwm_committee_meeting_24_update.Where(x => x.state_name == state_name && x.district_name == district_name && x.block_name == block_name && x.gp_name == gp_name && x.data_year == data_year).ToList();
                    if (data_count.Count != 0)
                    {
                        return Json("Already, data exists. For re-entry data, First delete or use edit!", JsonRequestBehavior.AllowGet);
                    }
                    List<abhy_wsp_pgwm_committee_meeting_24_update> ddetails = new List<abhy_wsp_pgwm_committee_meeting_24_update>();
                    var Details = new abhy_wsp_pgwm_committee_meeting_24_update();

                    model.month = monthName;
                    Details.state_name = Session["gstate"].ToString();
                    Details.district_name = Session["gdist"].ToString();
                    Details.block_name = Session["gblock"].ToString();
                    Details.gp_name = Session["ggram"].ToString();
                    Details.entry_by = Session["Email"].ToString();
                    Details.data_year = "2024-25 Update";
                    Details.meeting_date = model.meeting_date;
                    Details.meeting_gp_name = model.meeting_gp_name;
                    Details.meeting_village = model.meeting_village;
                    Details.meeting_location = model.meeting_location;
                    Details.male_attendees = model.male_attendees;
                    Details.female_attendees = model.female_attendees;
                    Details.transgender_attendees = model.transgender_attendees;
                    Details.month = model.month;
                    Details.month_order_by = Get_Month_Number(model.month);
                    Details.entry_by = Session["Email"].ToString();

                    var Total = 0;
                    Total = model.male_attendees + model.female_attendees + model.transgender_attendees;
                    Details.total_attendees = Total;
                    if (model.mom_doc != null)
                    {
                        if (model.mom_doc.FileName != null)
                        {
                            string FileExt = System.IO.Path.GetExtension(model.mom_doc.FileName).ToUpper();
                            if (FileExt != ".PDF")
                            {
                                return Json("Choose Valid MOM(pdf)", JsonRequestBehavior.AllowGet);
                            }
                            string[] count = model.mom_doc.FileName.Split('.');
                            if (count.Length != 2)
                            {
                                return Json("Your Upload file has Double Extention, Please Upload valid file", JsonRequestBehavior.AllowGet);
                            }
                            string ext = System.IO.Path.GetExtension(model.mom_doc.FileName);
                            string name = getuniqueId(model.mom_doc.FileName);//System.IO.Path.GetFileNameWithoutExtension(model.mom_doc.FileName);
                            string mom_filename = name;// + DateTime.Now.Ticks + ext;

                            string BasePath = AppDomain.CurrentDomain.BaseDirectory; //ConfigurationManager.AppSettings["path"];
                            string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\PGWM\\" + Details.gp_name + "\\" + Details.data_year + "\\MOM\\" + "\\");
                            if (!Directory.Exists(path))
                            {
                                Directory.CreateDirectory(path);
                            }
                            path = path + mom_filename;
                            model.mom_doc.SaveAs(path);
                            //Details.mom_doc = mom.FileName;
                            Details.mom_doc = "/Ataljalimages/PGWM/" + Details.gp_name + "/" + Details.data_year + "/MOM/" + mom_filename;
                        }
                    }
                    if (model.meeting_image != null)
                    {
                        if (model.meeting_image.FileName != null)
                        {
                            string FileExt = System.IO.Path.GetExtension(model.meeting_image.FileName).ToUpper();
                            if (FileExt != ".JPEG" && FileExt != ".PNG" && FileExt != ".JPG")
                            {
                                return Json("Choose Valid Photograph", JsonRequestBehavior.AllowGet);
                            }
                            string[] count = model.meeting_image.FileName.Split('.');
                            if (count.Length != 2)
                            {
                                return Json("Your Upload file has Double Extention, Please Upload valid file", JsonRequestBehavior.AllowGet);
                            }
                            string ext = System.IO.Path.GetExtension(model.meeting_image.FileName);
                            string name = getuniqueId(model.meeting_image.FileName);// System.IO.Path.GetFileNameWithoutExtension(model.meeting_image.FileName);
                            string meeting_filename = name;// + DateTime.Now.Ticks + ext;
                            string BasePath = AppDomain.CurrentDomain.BaseDirectory; //ConfigurationManager.AppSettings["path"];
                            string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\PGWM\\" + Details.gp_name + "\\" + Details.data_year + "\\Meeting Image\\" + "\\");
                            if (!Directory.Exists(path))
                            {
                                Directory.CreateDirectory(path);
                            }
                            path = path + meeting_filename;
                            model.meeting_image.SaveAs(path);
                            //Details.meeting_image = photograph.FileName;
                            Details.meeting_image = "/Ataljalimages/PGWM/" + Details.gp_name + "/" + Details.data_year + "/Meeting Image/" + meeting_filename;
                        }
                    }
                    if (model.meeting_resolution != null)
                    {
                        if (model.meeting_resolution.FileName != null)
                        {
                            string FileExt = System.IO.Path.GetExtension(model.meeting_resolution.FileName).ToUpper();
                            if (FileExt != ".PDF")
                            {
                                return Json("Choose Valid Resolution(pdf)", JsonRequestBehavior.AllowGet);
                            }
                            string[] count = model.meeting_resolution.FileName.Split('.');
                            if (count.Length != 2)
                            {
                                return Json("Your Upload file has Double Extention, Please Upload valid file", JsonRequestBehavior.AllowGet);
                            }
                            string ext = System.IO.Path.GetExtension(model.meeting_resolution.FileName);
                            string name = getuniqueId(model.meeting_resolution.FileName); //System.IO.Path.GetFileNameWithoutExtension(model.meeting_resolution.FileName);
                            string meeting_resolution_filename = name;// + DateTime.Now.Ticks + ext;

                            string BasePath = AppDomain.CurrentDomain.BaseDirectory; //ConfigurationManager.AppSettings["path"];
                            string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\PGWM\\" + Details.gp_name + "\\" + Details.data_year + "\\Meeting Resolution\\" + "\\");
                            if (!Directory.Exists(path))
                            {
                                Directory.CreateDirectory(path);
                            }
                            path = path + meeting_resolution_filename;
                            model.meeting_resolution.SaveAs(path);
                            Details.meeting_resolution = "/Ataljalimages/PGWM/" + Details.gp_name + "/" + Details.data_year + "/Meeting Resolution/" + meeting_resolution_filename;
                        }
                    }
                    if (model.attendance_sheet != null)
                    {
                        if (model.attendance_sheet.FileName != null)
                        {
                            string FileExt = System.IO.Path.GetExtension(model.attendance_sheet.FileName).ToUpper();
                            if (FileExt != ".PDF")
                            {
                                return Json("Choose Valid Resolution(pdf)", JsonRequestBehavior.AllowGet);
                            }
                            string[] count = model.attendance_sheet.FileName.Split('.');
                            if (count.Length != 2)
                            {
                                return Json("Your Upload file has Double Extention, Please Upload valid file", JsonRequestBehavior.AllowGet);
                            }
                            string ext = System.IO.Path.GetExtension(model.attendance_sheet.FileName);
                            string name = getuniqueId(model.attendance_sheet.FileName);// System.IO.Path.GetFileNameWithoutExtension(model.attendance_sheet.FileName);
                            string attendance_sheet_filename = name;// + DateTime.Now.Ticks + ext;

                            string BasePath = AppDomain.CurrentDomain.BaseDirectory; //ConfigurationManager.AppSettings["path"];
                            string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\PGWM\\" + Details.gp_name + "\\" + Details.data_year + "\\Attendance Sheet\\" + "\\");
                            if (!Directory.Exists(path))
                            {
                                Directory.CreateDirectory(path);
                            }
                            path = path + attendance_sheet_filename;
                            model.attendance_sheet.SaveAs(path);
                            Details.attendance_sheet = "/Ataljalimages/PGWM/" + Details.gp_name + "/" + Details.data_year + "/Attendance Sheet/" + attendance_sheet_filename;
                        }
                    }
                    ABE.obj_abhy_wsp_pgwm_committee_meeting_24_update.Add(Details);
                    ABE.SaveChanges();
                    return Json("Successfully Saved", JsonRequestBehavior.AllowGet);
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

            //return Json("Logout", JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public ActionResult Getting_abhy_wsp_pgwm_committee_meeting()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();
                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    var Year = "2024-25 Update";
                    //var month = Session["month"].ToString();

                    List<abhy_wsp_pgwm_committee_meeting_24_update> ddetails = new List<abhy_wsp_pgwm_committee_meeting_24_update>();

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null)
                    {
                        ddetails = ABE.obj_abhy_wsp_pgwm_committee_meeting_24_update.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.data_year== Year).ToList();//total list
                        if (ddetails.Count == 0)
                        {
                            ddetails = ABE.obj_abhy_wsp_pgwm_committee_meeting_24_update.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.data_year == "2024-25").ToList();//total list

                        }

                        ddetails.ForEach(a =>
                        {

                            if (!string.IsNullOrEmpty(a.mom_doc))
                            {
                                string momfilepath = Server.MapPath(a.mom_doc);

                                if (System.IO.File.Exists(momfilepath))
                                {
                                    a.mom_doc = a.mom_doc;
                                }
                                else
                                {

                                    string UpdateFilepathmom = string.Empty;
                                    if (!string.IsNullOrEmpty(a.mom_doc))
                                    {
                                        a.mom_doc = a.mom_doc.Replace("Ataljalimages", "UpdateAtaljalimages");
                                    }

                                }
                            }

                            if (!string.IsNullOrEmpty(a.attendance_sheet))
                            {
                                string attendance_sheetfilepath = Server.MapPath(a.attendance_sheet);

                                if (System.IO.File.Exists(attendance_sheetfilepath))
                                {
                                    a.attendance_sheet = a.attendance_sheet;
                                }
                                else
                                {

                                    string UpdateFilepathmom = string.Empty;
                                    if (!string.IsNullOrEmpty(a.attendance_sheet))
                                    {
                                        a.attendance_sheet = a.attendance_sheet.Replace("Ataljalimages", "UpdateAtaljalimages");
                                    }

                                }

                            }
                            if (!string.IsNullOrEmpty(a.meeting_resolution))
                            {
                                string meeting_resolutionfilepath = Server.MapPath(a.meeting_resolution);

                                if (System.IO.File.Exists(meeting_resolutionfilepath))
                                {
                                    a.meeting_resolution = a.meeting_resolution;
                                }
                                else
                                {

                                    string UpdateFilepathmom = string.Empty;
                                    if (!string.IsNullOrEmpty(a.meeting_resolution))
                                    {
                                        a.meeting_resolution = a.meeting_resolution.Replace("Ataljalimages", "UpdateAtaljalimages");
                                    }

                                }

                            }






                        });
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
        public ActionResult Delete_pgwm_meeting(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_wsp_pgwm_committee_meeting>(Data);

                    if (result.id != 0)
                    {
                        var GPID = Convert.ToInt32(result.id);
                        var Data1 = ABE.obj_abhy_wsp_pgwm_committee_meeting_24_update.Where(x => x.id == GPID).SingleOrDefault();
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
        public ActionResult Update_pgwm_meeting_Info(TestModel model)
        {
            if (Session["UserId"] != null)
            {
                try
                {

                    var GPID = Convert.ToInt32(model.abhy_wsp_pgwm_committee_id);
                    var Data1 = ABE.obj_abhy_wsp_pgwm_committee_meeting_24_update.Where(x => x.id == GPID).SingleOrDefault();
                    if (Data1 != null)
                    {
                        //Data1.id = GPID;
                        Data1.meeting_date = model.meeting_date;
                        //Data1.meeting_gp_name = meeting_gp_name;
                        Data1.meeting_village = model.meeting_village;
                        Data1.meeting_location = model.meeting_location;
                        Data1.male_attendees = model.male_attendees;
                        Data1.female_attendees = model.female_attendees;
                        Data1.transgender_attendees = model.transgender_attendees;
                        Data1.total_attendees = model.total_attendees;

                        if (model.mom_doc != null)
                        {

                            if (model.mom_doc.FileName != null)
                            {
                                string FileExt = System.IO.Path.GetExtension(model.mom_doc.FileName).ToUpper();
                                if (FileExt != ".PDF")
                                {
                                    return Json("Choose Valid MOM(pdf)", JsonRequestBehavior.AllowGet);

                                }
                                string[] count = model.mom_doc.FileName.Split('.');
                                if (count.Length != 2)
                                {
                                    return Json("Your Upload file has Double Extention, Please Upload valid file", JsonRequestBehavior.AllowGet);
                                }
                                string ext = System.IO.Path.GetExtension(model.mom_doc.FileName);
                                string name = System.IO.Path.GetFileNameWithoutExtension(model.mom_doc.FileName);
                                string mom_filename = name + DateTime.Now.Ticks + ext;

                                string BasePath = AppDomain.CurrentDomain.BaseDirectory; //ConfigurationManager.AppSettings["path"];
                                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\PGWM\\" + Data1.gp_name + "\\" + Data1.data_year + "\\MOM\\" + "\\");
                                if (!Directory.Exists(path))
                                {
                                    Directory.CreateDirectory(path);
                                }
                                path = path + mom_filename;
                                model.mom_doc.SaveAs(path);
                                //Details.mom_doc = mom.FileName;
                                Data1.mom_doc = "/Ataljalimages/PGWM/" + Data1.gp_name + "/" + Data1.data_year + "/MOM/" + mom_filename;
                            }
                        }

                        if (model.meeting_image != null)
                        {
                            if (model.meeting_image.FileName != null)
                            {
                                string FileExt = System.IO.Path.GetExtension(model.meeting_image.FileName).ToUpper();
                                if (FileExt != ".JPEG" && FileExt != ".PNG" && FileExt != ".JPG")
                                {
                                    return Json("Choose Valid Photograph", JsonRequestBehavior.AllowGet);

                                }
                                string[] count = model.meeting_image.FileName.Split('.');
                                if (count.Length != 2)
                                {
                                    return Json("Your Upload file has Double Extention, Please Upload valid file", JsonRequestBehavior.AllowGet);
                                }
                                string ext = System.IO.Path.GetExtension(model.meeting_image.FileName);
                                string name = System.IO.Path.GetFileNameWithoutExtension(model.meeting_image.FileName);
                                string meeting_filename = name + DateTime.Now.Ticks + ext;

                                string BasePath = AppDomain.CurrentDomain.BaseDirectory; //ConfigurationManager.AppSettings["path"];
                                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\PGWM\\" + Data1.gp_name + "\\" + Data1.data_year + "\\Meeting Image\\" + "\\");
                                if (!Directory.Exists(path))
                                {
                                    Directory.CreateDirectory(path);
                                }


                                path = path + meeting_filename;
                                model.meeting_image.SaveAs(path);
                                //Details.meeting_image = photograph.FileName;
                                Data1.meeting_image = "/Ataljalimages/PGWM/" + Data1.gp_name + "/" + Data1.data_year + "/Meeting Image/" + meeting_filename;

                            }

                        }

                        if (model.meeting_resolution != null)
                        {

                            if (model.meeting_resolution.FileName != null)
                            {
                                string FileExt = System.IO.Path.GetExtension(model.meeting_resolution.FileName).ToUpper();
                                if (FileExt != ".PDF")
                                {
                                    return Json("Choose Valid Resolution(pdf)", JsonRequestBehavior.AllowGet);

                                }
                                string[] count = model.meeting_resolution.FileName.Split('.');
                                if (count.Length != 2)
                                {
                                    return Json("Your Upload file has Double Extention, Please Upload valid file", JsonRequestBehavior.AllowGet);
                                }
                                string ext = System.IO.Path.GetExtension(model.meeting_resolution.FileName);
                                string name = System.IO.Path.GetFileNameWithoutExtension(model.meeting_resolution.FileName);
                                string meeting_resolution_filename = name + DateTime.Now.Ticks + ext;

                                string BasePath = AppDomain.CurrentDomain.BaseDirectory;// ConfigurationManager.AppSettings["path"];
                                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\PGWM\\" + Data1.gp_name + "\\" + Data1.data_year + "\\Meeting Resolution\\" + "\\");
                                if (!Directory.Exists(path))
                                {
                                    Directory.CreateDirectory(path);
                                }

                                path = path + meeting_resolution_filename;
                                model.meeting_resolution.SaveAs(path);
                                Data1.meeting_resolution = "/Ataljalimages/PGWM/" + Data1.gp_name + "/" + Data1.data_year + "/Meeting Resolution/" + meeting_resolution_filename;

                            }

                        }
                        if (model.attendance_sheet != null)
                        {

                            if (model.attendance_sheet.FileName != null)
                            {
                                string FileExt = System.IO.Path.GetExtension(model.attendance_sheet.FileName).ToUpper();
                                if (FileExt != ".PDF")
                                {
                                    return Json("Choose Valid Resolution(pdf)", JsonRequestBehavior.AllowGet);

                                }
                                string[] count = model.attendance_sheet.FileName.Split('.');
                                if (count.Length != 2)
                                {
                                    return Json("Your Upload file has Double Extention, Please Upload valid file", JsonRequestBehavior.AllowGet);
                                }
                                string ext = System.IO.Path.GetExtension(model.attendance_sheet.FileName);
                                string name = System.IO.Path.GetFileNameWithoutExtension(model.attendance_sheet.FileName);
                                string attendance_sheet_filename = name + DateTime.Now.Ticks + ext;

                                string BasePath = AppDomain.CurrentDomain.BaseDirectory; //ConfigurationManager.AppSettings["path"];
                                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\PGWM\\" + Data1.gp_name + "\\" + Data1.data_year + "\\Attendance Sheet\\" + "\\");
                                if (!Directory.Exists(path))
                                {
                                    Directory.CreateDirectory(path);
                                }

                                path = path + attendance_sheet_filename;
                                model.attendance_sheet.SaveAs(path);
                                Data1.attendance_sheet = "/Ataljalimages/PGWM/" + Data1.gp_name + "/" + Data1.data_year + "/Attendance Sheet/" + attendance_sheet_filename;

                            }

                        }

                        ABE.Entry(Data1).State = EntityState.Modified;
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
        #endregion

        #region DPMU Declaration
        public ActionResult declaration()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Upload_dpmu_declaration(HttpPostedFileBase dpmu_declaration)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    DateTime now = DateTime.Now;
                    int MonthNumber = now.Month;

                    // Get the name of the month
                    string monthName = CultureInfo.CurrentCulture.DateTimeFormat.GetMonthName(MonthNumber);
                    string state_name = Session["gstate"].ToString();
                    string district_name = Session["gdist"].ToString();
                    string block_name = Session["gblock"].ToString();
                    string gp_name = Session["ggram"].ToString();
                    string entry_by = Session["Email"].ToString();
                    string data_year = "2024-25 Update";
                    string month = monthName;

                    abhy_wsp_dpmu_declaration_24_update data = new abhy_wsp_dpmu_declaration_24_update();
                    List<abhy_wsp_dpmu_declaration_24_update> details1 = new List<abhy_wsp_dpmu_declaration_24_update>();
                    details1 = ABE.obj_abhy_wsp_dpmu_declaration_24_update.Where(x => x.state_name == state_name && x.district_name == district_name && x.block_name == block_name && x.gp_name == gp_name && x.data_year == data_year).ToList();
                    if (details1.Count != 0)
                    {
                        var data1 = details1.AsQueryable().FirstOrDefault();
                        data1.entry_by = entry_by;

                        if (dpmu_declaration != null)
                        {

                            if (dpmu_declaration.FileName != null)
                            {
                                string FileExt = System.IO.Path.GetExtension(dpmu_declaration.FileName).ToUpper();
                                if (FileExt != ".PDF")
                                {
                                    return Json("Choose Valid File", JsonRequestBehavior.AllowGet);

                                }
                                string[] count = dpmu_declaration.FileName.Split('.');
                                if (count.Length != 2)
                                {
                                    return Json("Your Upload file has Double Extention, Please Upload valid file", JsonRequestBehavior.AllowGet);
                                }
                                string ext = System.IO.Path.GetExtension(dpmu_declaration.FileName);
                                string name = getuniqueId(dpmu_declaration.FileName);// System.IO.Path.GetFileNameWithoutExtension(dpmu_declaration.FileName);
                                string filename = name; // + DateTime.Now.Ticks + ext;

                                string BasePath = AppDomain.CurrentDomain.BaseDirectory;// ConfigurationManager.AppSettings["path"];
                                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\AtaljalDPMUDeclaration\\" + state_name + "\\" + district_name + "\\" + block_name + "\\" + gp_name + "\\" + data_year + "\\");
                                if (!Directory.Exists(path))
                                {
                                    Directory.CreateDirectory(path);
                                }

                                path = path + filename;
                                dpmu_declaration.SaveAs(path);
                                //Details.dpmu_declaration = mom.FileName;
                                data1.dpmu_declaration = "/Ataljalimages/AtaljalDPMUDeclaration/" + state_name + "/" + district_name + "/" + block_name + "/" + gp_name + "/" + data_year + "/" + filename;
                                ABE.Entry(data1).State = EntityState.Modified;
                                ABE.SaveChanges();

                            }
                        }
                        return Json("Successfully Updated", JsonRequestBehavior.AllowGet);
                    }
                    else
                    {
                        data.state_name = state_name;
                        data.district_name = district_name;
                        data.block_name = block_name;
                        data.gp_name = gp_name;
                        data.data_year = data_year;
                        data.entry_by = entry_by;
                        data.month = month;
                        int month_num = Get_Month_Number(month);
                        data.month_order_by = month_num;

                        if (dpmu_declaration != null)
                        {

                            if (dpmu_declaration.FileName != null)
                            {
                                string FileExt = System.IO.Path.GetExtension(dpmu_declaration.FileName).ToUpper();
                                if (FileExt != ".PDF")
                                {
                                    return Json("Choose Valid File", JsonRequestBehavior.AllowGet);

                                }
                                string[] count = dpmu_declaration.FileName.Split('.');
                                if (count.Length != 2)
                                {
                                    return Json("Your Upload file has Double Extention, Please Upload valid file", JsonRequestBehavior.AllowGet);
                                }
                                string ext = System.IO.Path.GetExtension(dpmu_declaration.FileName);
                                string name = getuniqueId(dpmu_declaration.FileName);// System.IO.Path.GetFileNameWithoutExtension(dpmu_declaration.FileName);
                                string filename = name;// + DateTime.Now.Ticks + ext;

                                string BasePath = AppDomain.CurrentDomain.BaseDirectory;// ConfigurationManager.AppSettings["path"];
                                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\AtaljalDPMUDeclaration\\" + state_name + "\\" + district_name + "\\" + block_name + "\\" + gp_name + "\\" + data_year + "\\");
                                if (!Directory.Exists(path))
                                {
                                    Directory.CreateDirectory(path);
                                }

                                path = path + filename;
                                dpmu_declaration.SaveAs(path);
                                //Details.dpmu_declaration = mom.FileName;
                                data.dpmu_declaration = "/Ataljalimages/AtaljalDPMUDeclaration/" + state_name + "/" + district_name + "/" + block_name + "/" + gp_name + "/" + data_year + "/" + filename;
                                ABE.obj_abhy_wsp_dpmu_declaration_24_update.Add(data);
                                ABE.SaveChanges();
                            }
                        }
                        return Json("Successfully Saved", JsonRequestBehavior.AllowGet);
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
        public ActionResult Get_dpmu_declaration()
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
                    string data_year = "2024-25 Update";
                    //string month = Session["month"].ToString();

                    abhy_wsp_dpmu_declaration_24_update data = new abhy_wsp_dpmu_declaration_24_update();
                    var details1 = ABE.obj_abhy_wsp_dpmu_declaration_24_update.Where(x => x.state_name == state_name && x.district_name == district_name && x.block_name == block_name && x.gp_name == gp_name && x.data_year == data_year).ToList();

                    var dataObject = details1.SingleOrDefault();
                    if (dataObject != null)
                    {
                        string fileName = System.IO.Path.GetFileName(dataObject.dpmu_declaration);
                        string filepath = (dataObject.dpmu_declaration);
                        string key = AppDomain.CurrentDomain.BaseDirectory; //ConfigurationManager.AppSettings["path"];
                        string _fname = fileName.Substring(1);
                        string _filepath = $"{key}{filepath.Substring(1)}";
                        details1.ForEach(a =>
                        {
                            if (!string.IsNullOrEmpty(a.dpmu_declaration))
                            {
                                string dpmu_declarationfilepath = Server.MapPath(a.dpmu_declaration);

                                if (System.IO.File.Exists(dpmu_declarationfilepath))
                                {
                                    a.dpmu_declaration = a.dpmu_declaration;
                                }
                                else
                                {

                                    string UpdateFilepathmom = string.Empty;
                                    if (!string.IsNullOrEmpty(a.dpmu_declaration))
                                    {
                                        a.dpmu_declaration = a.dpmu_declaration.Replace("Ataljalimages", "UpdateAtaljalimages");
                                    }

                                }
                            }

                        });


                    }

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

        [HttpPost]
        public ActionResult Delete_dpmu_declaration(string data)
        {
            if (Session["userid"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<dynamic>(data);

                    int id = Convert.ToInt32(result["IDD"]);

                    var DEtails = ABE.obj_abhy_wsp_dpmu_declaration_24_update.Where(x => x.id == id).ToList();
                    DEtails[0].dpmu_declaration = "";

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
        #endregion


        //#region View Image
        //public void ViewFile(string FileName)
        //{
        //    string filename = Path.GetFileName(FileName);
        //    string key = ConfigurationManager.AppSettings["path"];
        //    string _fname = FileName.Substring(1);
        //    string _filepath = $"{key}{FileName.Substring(1)}";
        //    string contentType = string.Empty;
        //    if (FileName.Contains(".pdf"))
        //    {
        //        contentType = "application/pdf";
        //    }
        //    else if (FileName.Contains(".docx"))
        //    {
        //        contentType = "application/docx";

        //    }
        //    else if (FileName.Contains(".jpeg"))
        //    {
        //        contentType = "image/jpeg";
        //    }
        //    else if (FileName.Contains(".jpg"))
        //    {
        //        contentType = "image/jpeg";
        //    }
        //    else if (FileName.Contains(".png"))
        //    {
        //        contentType = "image/png";
        //    }

        //    if (System.IO.File.Exists(_filepath))
        //    {

        //        Response.ContentType = contentType;
        //        Response.AppendHeader("Content-Disposition", "attachment; filename=" + Path.GetFileName(filename));
        //        Response.WriteFile(_filepath);
        //        Response.Flush();
        //        Response.End();
        //    }
        //    else
        //    {
        //        Response.ContentType = contentType;
        //        Response.AppendHeader("Content-Disposition", "attachment; filename=" + Path.GetFileName(filename));
        //        Response.WriteFile(Server.MapPath(FileName));
        //        Response.Flush();
        //        Response.End();
        //    }


        //}
        //#endregion

        public ContentResult ViewFile(string FileName)
        {
            try
            {
                //var data = ABE.obj_abhy_wsp_pgwm_committee_meeting_23.Where(x => x.state == State).OrderByDescending(c => c.id).ToList();
                string _filepath = string.Empty;
                string filename =System.IO.Path.GetFileName(FileName);
                string key = ConfigurationManager.AppSettings["path"];
                string _fname = FileName.Substring(1);
                string contentType = string.Empty;
                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                _filepath = Server.MapPath(FileName);
                if (FileName.Contains(".pdf"))
                {
                    contentType = "application/pdf";
                }
                else if (FileName.Contains(".docx"))
                {
                    contentType = "application/docx";
                }
                else if (FileName.Contains(".jpeg"))
                {
                    contentType = "image/jpeg";
                }
                else if (FileName.Contains(".jpg"))
                {
                    contentType = "image/jpeg";
                }
                else if (FileName.Contains(".png"))
                {
                    contentType = "image/png";
                }



                if (System.IO.File.Exists(_filepath))
                {
                    Response.ContentType = contentType;
                    Response.AppendHeader("Content-Disposition", "attachment; filename=" + System.IO.Path.GetFileName(filename));
                    Response.WriteFile(_filepath);

                    //System.IO.Path.Combine(BasePath, "Ataljalimages\\WaterLevel_Maps\\" + Gram + "\\");
                    Response.Flush();
                    Response.End();
                }
                else
                {

                    string UpdateFilepath = string.Empty;
                    if (!string.IsNullOrEmpty(FileName))
                    {
                        UpdateFilepath = FileName.Replace("Ataljalimages", "UpdateAtaljalimages");
                    }
                    _filepath = Server.MapPath(UpdateFilepath);
                    Response.ContentType = contentType;
                    Response.AppendHeader("Content-Disposition", "attachment; filename=" + System.IO.Path.GetFileName(filename));
                    Response.WriteFile(_filepath);
                    Response.Flush();
                    Response.End();
                }
                return Content(_filepath);
            }
            catch (Exception Ex)
            {
                abhy_tbl_error error_data = new abhy_tbl_error();
                error_data.error_test = Ex.Message;
                error_data.user_email = Ex.StackTrace;
                error_data.user_type = "ViewFile";
                error_data.error_count = "1";
                ABE.obj_abhy_tbl_error.Add(error_data);
                ABE.SaveChanges();
                return Content("");
            }
        }

        [HttpPost]
        public ActionResult PDFViewFile(string FileName)
        {
            try
            {
                byte[] byteArray;
                string contentType = "application/pdf";
                string temp_inBase64 = string.Empty;
                string filename = System.IO.Path.GetFileName(FileName);
                string key = ConfigurationManager.AppSettings["path"];
                string _fname = FileName.Substring(1);
                string _filepath = $"{key}{FileName.Substring(1)}";//.Substring(1)
                string _filepathAt = $"{key}{FileName.Substring(1)}";//.Substring(1)
                if (System.IO.File.Exists(_filepath))
                {
                    byteArray = System.IO.File.ReadAllBytes(_filepath);
                    temp_inBase64 = Convert.ToBase64String(byteArray);

                }
                else
                {
                    byteArray = System.IO.File.ReadAllBytes(Server.MapPath(FileName));
                    temp_inBase64 = Convert.ToBase64String(byteArray);

                }
                return Content(temp_inBase64);
            }
            catch (Exception Ex)
            {
                abhy_tbl_error error_data = new abhy_tbl_error();
                error_data.error_test = Ex.Message;
                error_data.user_email = Ex.StackTrace;
                error_data.user_type = "PDFViewFile";
                error_data.error_count = "1";
                ABE.obj_abhy_tbl_error.Add(error_data);
                ABE.SaveChanges();
                return Content("");
            }
        }

    }
}
