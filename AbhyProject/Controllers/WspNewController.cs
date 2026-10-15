using AbhyProject.Classes;
using AbhyProject.Models;
using AbhyProject.Utility;
using DocumentFormat.OpenXml.Drawing.Charts;
using DocumentFormat.OpenXml.Office2010.Excel;
using DocumentFormat.OpenXml.VariantTypes;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Security.Cryptography;
using System.Text;
using System.Web.Helpers;
using System.Web.Mail;
using System.Web.Mvc;
using System.Web.Script.Serialization;
using ClosedXML.Excel;
using DocumentFormat.OpenXml.Office2010.Excel;
using DocumentFormat.OpenXml.Office2010.ExcelAc;
using System.IO;
using System.Configuration;




namespace AbhyProject.Controllers
{
    public class WspNewController : Controller
    {

        AbhyEntity ABE = new AbhyEntity();
        AtaljalEntity AJE = new AtaljalEntity();
        string path = "https://ataljal.mowr.gov.in/Images/atal_jal_logo.png";

        // GET: WspNew
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult MIS_Modules()
        {
            return View();
        }
        public ActionResult getstartpage()
        {
            return View();
        }
        public ActionResult loginlogoutpage()
        {
            return View();
        }
        public ActionResult AllUserInfo()
        {
            return View();
        }

        [HttpPost]
        public ActionResult GrounddWater_Availability_Reports_Data(string Total_RainFall, string Total_Lakes, string Total_CheckDams, string Total_Canals, string Total_Rivers, string Total_Reserviours, string Total_Surface_Water_Irrigation, string Total_Ground_water_Irrigation, string Total_Surface_Water_Availability, string Total_Ground_Water_Recharge, string Total_Water_Availability, string Total_Evaportranspiration)
        {
            if (Session["UserId"] != null)
            {
                Session["Total_RainFall"] = Math.Round(Convert.ToDouble(Total_RainFall));
                Session["Total_Lakes"] = Math.Round(Convert.ToDouble(Total_Lakes));
                Session["Total_CheckDams"] = Math.Round(Convert.ToDouble(Total_CheckDams));
                Session["Total_Canals"] = Math.Round(Convert.ToDouble(Total_Canals));
                Session["Total_Rivers"] = Math.Round(Convert.ToDouble(Total_Rivers));
                Session["Total_Reserviours"] = Math.Round(Convert.ToDouble(Total_Reserviours));
                Session["Total_Surface_Water_Irrigation"] = Math.Round(Convert.ToDouble(Total_Surface_Water_Irrigation));
                Session["Total_Ground_water_Irrigation"] = Math.Round(Convert.ToDouble(Total_Ground_water_Irrigation));
                Session["Total_Surface_Water_Availability"] = Math.Round(Convert.ToDouble(Total_Surface_Water_Availability));
                Session["Total_Ground_Water_Recharge"] = Math.Round(Convert.ToDouble(Total_Ground_Water_Recharge));
                Session["Total_Water_Availability"] = Math.Round(Convert.ToDouble(Total_Water_Availability));
                Session["Total_Evaportranspiration"] = Math.Round(Convert.ToDouble(Total_Evaportranspiration));
                return Json("Ok", JsonRequestBehavior.AllowGet);
            }
            else
            {
                Session["WSPHOME"] = "Data";
                return RedirectToAction("WSP_GWM_HOME", "WspNew");
            }
        }
        [HttpPost]
        public ActionResult GrounddWater_Draft_Reports_Data(string Total_Water_Draft, string Total_Irrigation, string Total_Domestic, string Total_Industry, string Total_Environmental_Flow)
        {
            if (Session["UserId"] != null)
            {
                Session["Total_Water_Draft"] = Math.Round(Convert.ToDouble(Total_Water_Draft));
                Session["Total_Irrigation"] = Math.Round(Convert.ToDouble(Total_Irrigation));
                Session["Total_Domestic"] = Math.Round(Convert.ToDouble(Total_Domestic));
                Session["Total_Industry"] = Math.Round(Convert.ToDouble(Total_Industry));
                Session["Total_Environmental_Flow"] = Math.Round(Convert.ToDouble(Total_Environmental_Flow));
                return Json("Ok", JsonRequestBehavior.AllowGet);
            }
            else
            {
                Session["WSPHOME"] = "Data";
                return RedirectToAction("WSP_GWM_HOME", "WspNew");
            }
        }
        [HttpPost]
        public ActionResult Ground_Water_Recharge(string Data)
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
                    JavaScriptSerializer Js1 = new JavaScriptSerializer();
                    var Result = Js1.Deserialize<TblAreaUnderLine_By>(Data);
                    var AreaUnderLinedBy = Result.AreaunderlinedBy_Name;
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


        [HttpGet]
        public ActionResult SprinklerInfo()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();
                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    var UserIdd = Convert.ToInt32(Session["UserId"]);
                    var de = ABE.obj_sprinkler.ToList();
                    var Dataa = ABE.obj_sprinkler.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.gpname == Gram).ToList();
                    if (Dataa.Count != 0)
                    {
                        var Datata = Dataa.LastOrDefault();
                        return Json(Datata, JsonRequestBehavior.AllowGet);
                    }
                    else
                    {
                        return Json("NO", JsonRequestBehavior.AllowGet);
                    }
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
        public ActionResult DripInfo()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();
                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    var UserIdd = Convert.ToInt32(Session["UserId"]);
                    var Dataa = ABE.obj_drip_saveddata.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.gpname == Gram).ToList();
                    if (Dataa.Count != 0)
                    {
                        var Datata = Dataa.LastOrDefault();
                        return Json(Datata, JsonRequestBehavior.AllowGet);
                    }
                    else
                    {
                        return Json("NO", JsonRequestBehavior.AllowGet);
                    }
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
        public ActionResult PipeLineInfo()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();
                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    var UserIdd = Convert.ToInt32(Session["UserId"]);
                    var Dataa = ABE.obj_pipeline.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.gpname == Gram).ToList();
                    if (Dataa.Count != 0)
                    {
                        var Datata = Dataa.LastOrDefault();
                        return Json(Datata, JsonRequestBehavior.AllowGet);
                    }
                    else
                    {
                        return Json("NO", JsonRequestBehavior.AllowGet);
                    }
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
        public ActionResult ReductionInfo()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();
                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    var UserIdd = Convert.ToInt32(Session["UserId"]);
                    var Dataa = ABE.obj_reduction.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.gpname == Gram).ToList();
                    if (Dataa.Count != 0)
                    {
                        var Datata = Dataa.LastOrDefault();
                        return Json(Datata, JsonRequestBehavior.AllowGet);
                    }
                    else
                    {
                        return Json("NO", JsonRequestBehavior.AllowGet);
                    }
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
        public ActionResult Other_MeasureInfo()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();
                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    var UserIdd = Convert.ToInt32(Session["UserId"]);
                    var Dataa = ABE.obj_other.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.gpname == Gram).ToList();
                    if (Dataa.Count != 0)
                    {
                        var Datata = Dataa.LastOrDefault();
                        return Json(Datata, JsonRequestBehavior.AllowGet);
                    }
                    else
                    {
                        return Json("NO", JsonRequestBehavior.AllowGet);
                    }
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
        public ActionResult Crop_Diversification_Info()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();
                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    var UserIdd = Convert.ToInt32(Session["UserId"]);
                    var Dataa = ABE.obj_crop.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.gpname == Gram).ToList();
                    if (Dataa.Count != 0)
                    {
                        var Datata = Dataa.LastOrDefault();
                        return Json(Datata, JsonRequestBehavior.AllowGet);
                    }
                    else
                    {
                        return Json("NO", JsonRequestBehavior.AllowGet);
                    }
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

        public string Validation_NegitiveVal(string Number_value)
        {
            Double checking_value;
            bool checking_value_1 = Double.TryParse(Number_value, out checking_value);
            if (checking_value_1 == true)
            {

                double a2 = Convert.ToDouble(Number_value);

                if (a2 <= 0)
                {
                    return "Negitive value is not allowed";
                }
                else
                {
                    return "True";
                }
            }
            else
            {
                return "Characters are not allowed";
            }

        }

        [HttpPost]
        public ActionResult sprinkler_SavedInfo(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_demandside_sprinkler_saveddata>(Data);
                    var Obj1 = new abhy_demandside_sprinkler_saveddata();
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

                    var userid = Convert.ToInt32(Session["UserId"]);
                    var Details = ABE.obj_sprinkler.Where(x => x.statename == StateName && x.districtname == DistName && x.blockname == BlockName && x.gpname == GramName).ToList();
                    if (Details.Count == 1)
                    {
                        var Data11 = Details.LastOrDefault();
                        Data11.statename = StateName;
                        Data11.blockname = BlockName;
                        Data11.districtname = DistName;
                        Data11.gpname = GramName;

                        var TodayDate1 = DateTime.Now.ToString();
                        var Datea = TodayDate1.Split('/', ' ', '-', '.');
                        var Today1 = Datea[1] + '/' + Datea[0] + '/' + Datea[2];
                        Data11.date_time = Today1;
                        Data11.officer_name = Session["Officer"].ToString();

                        Data11.sprinkler_approx_estimated_cost = result.sprinkler_approx_estimated_cost;
                        Data11.sprinkler_cost_type = result.sprinkler_cost_type;

                        Data11.sprinkler_summer_horticulture_crop_area = result.sprinkler_summer_horticulture_crop_area;
                        Data11.sprinkler_summer_horticulture_irri_area = result.sprinkler_summer_horticulture_irri_area;
                        Data11.sprinkler_summer_horticulture_water_req = result.sprinkler_summer_horticulture_water_req;
                        Data11.sprinkler_summer_horticulture_waterdemand = result.sprinkler_summer_horticulture_waterdemand;
                        Data11.sprinkler_summer_horticulture_netwater_waterdemand = result.sprinkler_summer_horticulture_netwater_waterdemand;
                        Data11.sprinkler_summer_horticulture_reduction_gw_demand = result.sprinkler_summer_horticulture_reduction_gw_demand;


                        //paddy
                        Data11.sprinkler_kharif_paddy_crop_area = result.sprinkler_kharif_paddy_crop_area;
                        Data11.sprinkler_kharif_paddy_fundingsource = result.sprinkler_kharif_paddy_fundingsource;
                        Data11.sprinkler_kharif_paddy_irri_area = result.sprinkler_kharif_paddy_irri_area;
                        Data11.sprinkler_kharif_paddy_waterdemand = result.sprinkler_kharif_paddy_waterdemand;
                        Data11.sprinkler_kharif_paddy_sprinkler_waterdemand = result.sprinkler_kharif_paddy_sprinkler_waterdemand;
                        Data11.sprinkler_kharif_paddy_reduction_gw_demand = result.sprinkler_kharif_paddy_reduction_gw_demand;

                        //Ragi
                        Data11.sprinkler_kharif_ragi_crop_area = result.sprinkler_kharif_ragi_crop_area;
                        // Data11.sprinkler_kharif_ragi_fundingsource = result.sprinkler_kharif_ragi_fundingsource;
                        Data11.sprinkler_kharif_ragi_irri_area = result.sprinkler_kharif_ragi_irri_area;
                        Data11.sprinkler_kharif_ragi_waterdemand = result.sprinkler_kharif_ragi_waterdemand;
                        Data11.sprinkler_kharif_ragi_sprinkler_waterdemand = result.sprinkler_kharif_ragi_sprinkler_waterdemand;
                        Data11.sprinkler_kharif_ragi_reduction_gw_demand = result.sprinkler_kharif_ragi_reduction_gw_demand;

                        //groundnut
                        Data11.sprinkler_kharif_groundnut_crop_area = result.sprinkler_kharif_groundnut_crop_area;
                        // Data11.sprinkler_kharif_groundnut_fundingsource = result.sprinkler_kharif_groundnut_fundingsource;

                        Data11.sprinkler_kharif_groundnut_irri_area = result.sprinkler_kharif_groundnut_irri_area;
                        Data11.sprinkler_kharif_groundnut_waterdemand = result.sprinkler_kharif_groundnut_waterdemand;
                        Data11.sprinkler_kharif_groundnut_sprinkler_waterdemand = result.sprinkler_kharif_groundnut_sprinkler_waterdemand;
                        Data11.sprinkler_kharif_groundnut_reduction_gw_demand = result.sprinkler_kharif_groundnut_reduction_gw_demand;


                        //sugarcane
                        Data11.sprinkler_kharif_sugarcane_crop_area = result.sprinkler_kharif_sugarcane_crop_area;
                        // Data11.sprinkler_kharif_sugarcane_fundingsource = result.sprinkler_kharif_sugarcane_fundingsource;

                        Data11.sprinkler_kharif_sugarcane_irri_area = result.sprinkler_kharif_sugarcane_irri_area;
                        Data11.sprinkler_kharif_sugarcane_waterdemand = result.sprinkler_kharif_sugarcane_waterdemand;
                        Data11.sprinkler_kharif_sugarcane_sprinkler_waterdemand = result.sprinkler_kharif_sugarcane_sprinkler_waterdemand;
                        Data11.sprinkler_kharif_sugarcane_reduction_gw_demand = result.sprinkler_kharif_sugarcane_reduction_gw_demand;

                        //Tomoto


                        Data11.sprinkler_kharif_tomoto_crop_area = result.sprinkler_kharif_tomoto_crop_area;
                        // Data11.sprinkler_kharif_tomoto_fundingsource = result.sprinkler_kharif_tomoto_fundingsource;

                        Data11.sprinkler_kharif_tomoto_irri_area = result.sprinkler_kharif_tomoto_irri_area;
                        Data11.sprinkler_kharif_tomoto_waterdemand = result.sprinkler_kharif_tomoto_waterdemand;
                        Data11.sprinkler_kharif_tomoto_sprinkler_waterdemand = result.sprinkler_kharif_tomoto_sprinkler_waterdemand;
                        Data11.sprinkler_kharif_tomoto_reduction_gw_demand = result.sprinkler_kharif_tomoto_reduction_gw_demand;

                        //Cabbage

                        //Data11.sprinkler_kharif_cabbage_crop_area = result.sprinkler_kharif_cabbage_crop_area;
                        // Data11.sprinkler_kharif_cabbage_fundingsource = result.sprinkler_kharif_cabbage_fundingsource;

                        //Data11.sprinkler_kharif_cabbage_irri_area = result.sprinkler_kharif_cabbage_irri_area;
                        //Data11.sprinkler_kharif_cabbage_waterdemand = result.sprinkler_kharif_cabbage_waterdemand;
                        //Data11.sprinkler_kharif_cabbage_sprinkler_waterdemand = result.sprinkler_kharif_cabbage_sprinkler_waterdemand;
                        //Data11.sprinkler_kharif_cabbage_reduction_gw_demand = result.sprinkler_kharif_cabbage_reduction_gw_demand;

                        //Beans

                        //Data11.sprinkler_kharif_beans_crop_area = result.sprinkler_kharif_beans_crop_area;
                        // Data11.sprinkler_kharif_beans_fundingsource = result.sprinkler_kharif_beans_fundingsource;

                        //Data11.sprinkler_kharif_beans_irri_area = result.sprinkler_kharif_beans_irri_area;
                        //Data11.sprinkler_kharif_beans_waterdemand = result.sprinkler_kharif_beans_waterdemand;
                        //Data11.sprinkler_kharif_beans_sprinkler_waterdemand = result.sprinkler_kharif_beans_sprinkler_waterdemand;
                        //Data11.sprinkler_kharif_beans_reduction_gw_demand = result.sprinkler_kharif_beans_reduction_gw_demand;

                        //floriculture
                        Data11.sprinkler_kharif_floriculture_crop_area = result.sprinkler_kharif_floriculture_crop_area;
                        // Data11.sprinkler_kharif_floriculture_fundingsource = result.sprinkler_kharif_floriculture_fundingsource;

                        Data11.sprinkler_kharif_floriculture_irri_area = result.sprinkler_kharif_floriculture_irri_area;
                        Data11.sprinkler_kharif_floriculture_waterdemand = result.sprinkler_kharif_floriculture_waterdemand;
                        Data11.sprinkler_kharif_floriculture_sprinkler_waterdemand = result.sprinkler_kharif_floriculture_sprinkler_waterdemand;
                        Data11.sprinkler_kharif_floriculture_reduction_gw_demand = result.sprinkler_kharif_floriculture_reduction_gw_demand;

                        //sericulture

                        Data11.sprinkler_kharif_sericulture_crop_area = result.sprinkler_kharif_sericulture_crop_area;
                        // Data11.sprinkler_kharif_sericulture_fundingsource = result.sprinkler_kharif_sericulture_fundingsource;

                        Data11.sprinkler_kharif_sericulture_irri_area = result.sprinkler_kharif_sericulture_irri_area;
                        Data11.sprinkler_kharif_sericulture_waterdemand = result.sprinkler_kharif_sericulture_waterdemand;
                        Data11.sprinkler_kharif_sericulture_sprinkler_waterdemand = result.sprinkler_kharif_sericulture_sprinkler_waterdemand;
                        Data11.sprinkler_kharif_sericulture_reduction_gw_demand = result.sprinkler_kharif_sericulture_reduction_gw_demand;

                        //Cucumber

                        //Data11.sprinkler_kharif_cucumber_crop_area = result.sprinkler_kharif_cucumber_crop_area;
                        //Data11.sprinkler_kharif_cucumber_fundingsource = result.sprinkler_kharif_cucumber_fundingsource;

                        //Data11.sprinkler_kharif_cucumber_irri_area = result.sprinkler_kharif_cucumber_irri_area;
                        //Data11.sprinkler_kharif_cucumber_waterdemand = result.sprinkler_kharif_cucumber_waterdemand;
                        //Data11.sprinkler_kharif_cucumber_sprinkler_waterdemand = result.sprinkler_kharif_cucumber_sprinkler_waterdemand;
                        //Data11.sprinkler_kharif_cucumber_reduction_gw_demand = result.sprinkler_kharif_cucumber_reduction_gw_demand;

                        //banana

                        Data11.sprinkler_kharif_banana_crop_area = result.sprinkler_kharif_banana_crop_area;
                        // Data11.sprinkler_kharif_banana_fundingsource = result.sprinkler_kharif_banana_fundingsource;

                        Data11.sprinkler_kharif_banana_irri_area = result.sprinkler_kharif_banana_irri_area;
                        Data11.sprinkler_kharif_banana_waterdemand = result.sprinkler_kharif_banana_waterdemand;
                        Data11.sprinkler_kharif_banana_sprinkler_waterdemand = result.sprinkler_kharif_banana_sprinkler_waterdemand;
                        Data11.sprinkler_kharif_banana_reduction_gw_demand = result.sprinkler_kharif_banana_reduction_gw_demand;

                        //fodder

                        Data11.sprinkler_kharif_fodder_crop_area = result.sprinkler_kharif_fodder_crop_area;
                        //Data11.sprinkler_kharif_fodder_fundingsource = result.sprinkler_kharif_fodder_fundingsource;

                        Data11.sprinkler_kharif_fodder_irri_area = result.sprinkler_kharif_fodder_irri_area;
                        Data11.sprinkler_kharif_fodder_waterdemand = result.sprinkler_kharif_fodder_waterdemand;
                        Data11.sprinkler_kharif_fodder_sprinkler_waterdemand = result.sprinkler_kharif_fodder_sprinkler_waterdemand;
                        Data11.sprinkler_kharif_fodder_reduction_gw_demand = result.sprinkler_kharif_fodder_reduction_gw_demand;

                        //Maize

                        Data11.sprinkler_kharif_maize_crop_area = result.sprinkler_kharif_maize_crop_area;
                        //Data11.sprinkler_kharif_maize_fundingsource = result.sprinkler_kharif_maize_fundingsource;

                        Data11.sprinkler_kharif_maize_irri_area = result.sprinkler_kharif_maize_irri_area;
                        Data11.sprinkler_kharif_maize_waterdemand = result.sprinkler_kharif_maize_waterdemand;
                        Data11.sprinkler_kharif_maize_sprinkler_waterdemand = result.sprinkler_kharif_maize_sprinkler_waterdemand;
                        Data11.sprinkler_kharif_maize_reduction_gw_demand = result.sprinkler_kharif_maize_reduction_gw_demand;

                        //potato

                        //Data11.sprinkler_kharif_potato_crop_area = result.sprinkler_kharif_potato_crop_area;
                        //Data11.sprinkler_kharif_potato_fundingsource = result.sprinkler_kharif_potato_fundingsource;

                        //Data11.sprinkler_kharif_potato_irri_area = result.sprinkler_kharif_potato_irri_area;
                        //Data11.sprinkler_kharif_potato_waterdemand = result.sprinkler_kharif_potato_waterdemand;
                        //Data11.sprinkler_kharif_potato_sprinkler_waterdemand = result.sprinkler_kharif_potato_sprinkler_waterdemand;
                        //Data11.sprinkler_kharif_potato_reduction_gw_demand = result.sprinkler_kharif_potato_reduction_gw_demand;

                        //chillies

                        Data11.sprinkler_kharif_chillies_crop_area = result.sprinkler_kharif_chillies_crop_area;
                        // Data11.sprinkler_kharif_chillies_fundingsource = result.sprinkler_kharif_chillies_fundingsource;

                        Data11.sprinkler_kharif_chillies_irri_area = result.sprinkler_kharif_chillies_irri_area;
                        Data11.sprinkler_kharif_chillies_waterdemand = result.sprinkler_kharif_chillies_waterdemand;
                        Data11.sprinkler_kharif_chillies_sprinkler_waterdemand = result.sprinkler_kharif_chillies_sprinkler_waterdemand;
                        Data11.sprinkler_kharif_chillies_reduction_gw_demand = result.sprinkler_kharif_chillies_reduction_gw_demand;

                        //cotton

                        Data11.sprinkler_kharif_cotton_crop_area = result.sprinkler_kharif_cotton_crop_area;
                        // Data11.sprinkler_kharif_cotton_fundingsource = result.sprinkler_kharif_cotton_fundingsource;
                        Data11.sprinkler_kharif_cotton_irri_area = result.sprinkler_kharif_cotton_irri_area;
                        Data11.sprinkler_kharif_cotton_waterdemand = result.sprinkler_kharif_cotton_waterdemand;
                        Data11.sprinkler_kharif_cotton_sprinkler_waterdemand = result.sprinkler_kharif_cotton_sprinkler_waterdemand;
                        Data11.sprinkler_kharif_cotton_reduction_gw_demand = result.sprinkler_kharif_cotton_reduction_gw_demand;

                        //melon


                        Data11.sprinkler_kharif_melon_crop_area = result.sprinkler_kharif_melon_crop_area;
                        // Data11.sprinkler_kharif_melon_fundingsource = result.sprinkler_kharif_melon_fundingsource;

                        Data11.sprinkler_kharif_melon_irri_area = result.sprinkler_kharif_melon_irri_area;
                        Data11.sprinkler_kharif_melon_waterdemand = result.sprinkler_kharif_melon_waterdemand;
                        Data11.sprinkler_kharif_melon_sprinkler_waterdemand = result.sprinkler_kharif_melon_sprinkler_waterdemand;
                        Data11.sprinkler_kharif_melon_reduction_gw_demand = result.sprinkler_kharif_melon_reduction_gw_demand;

                        //citrus
                        Data11.sprinkler_kharif_citrus_crop_area = result.sprinkler_kharif_citrus_crop_area;
                        // Data11.sprinkler_kharif_citrus_fundingsource = result.sprinkler_kharif_citrus_fundingsource;

                        Data11.sprinkler_kharif_citrus_irri_area = result.sprinkler_kharif_citrus_irri_area;
                        Data11.sprinkler_kharif_citrus_waterdemand = result.sprinkler_kharif_citrus_waterdemand;
                        Data11.sprinkler_kharif_citrus_sprinkler_waterdemand = result.sprinkler_kharif_citrus_sprinkler_waterdemand;
                        Data11.sprinkler_kharif_citrus_reduction_gw_demand = result.sprinkler_kharif_citrus_reduction_gw_demand;

                        //peanut

                        //Data11.sprinkler_kharif_peanut_crop_area = result.sprinkler_kharif_peanut_crop_area;
                        //Data11.sprinkler_kharif_peanut_fundingsource = result.sprinkler_kharif_peanut_fundingsource;

                        //Data11.sprinkler_kharif_peanut_irri_area = result.sprinkler_kharif_peanut_irri_area;
                        //Data11.sprinkler_kharif_peanut_waterdemand = result.sprinkler_kharif_peanut_waterdemand;
                        //Data11.sprinkler_kharif_peanut_sprinkler_waterdemand = result.sprinkler_kharif_peanut_sprinkler_waterdemand;
                        //Data11.sprinkler_kharif_peanut_reduction_gw_demand = result.sprinkler_kharif_peanut_reduction_gw_demand;


                        //horticulture

                        Data11.sprinkler_kharif_horticulture_crop_area = result.sprinkler_kharif_horticulture_crop_area;
                        // Data11.sprinkler_kharif_horticulture_fundingsource = result.sprinkler_kharif_horticulture_fundingsource;

                        Data11.sprinkler_kharif_horticulture_irri_area = result.sprinkler_kharif_horticulture_irri_area;
                        Data11.sprinkler_kharif_horticulture_waterdemand = result.sprinkler_kharif_horticulture_waterdemand;
                        Data11.sprinkler_kharif_horticulture_sprinkler_waterdemand = result.sprinkler_kharif_horticulture_sprinkler_waterdemand;
                        Data11.sprinkler_kharif_horticulture_reduction_gw_demand = result.sprinkler_kharif_horticulture_reduction_gw_demand;

                        //karif crops total

                        Data11.sprinkler_kharif_total_waterdemand = result.sprinkler_kharif_total_waterdemand;
                        Data11.sprinkler_kharif_total_sprinkler_waterdemand = result.sprinkler_kharif_total_sprinkler_waterdemand;
                        Data11.sprinkler_kharif_total_reduction_waterdemand = result.sprinkler_kharif_total_reduction_waterdemand;

                        //rabi sericulture

                        Data11.sprinkler_rabi_sericulture_crop_area = result.sprinkler_rabi_sericulture_crop_area;
                        // Data11.sprinkler_rabi_sericulture_fundingsource = result.sprinkler_rabi_sericulture_fundingsource;

                        Data11.sprinkler_rabi_sericulture_irri_area = result.sprinkler_rabi_sericulture_irri_area;
                        Data11.sprinkler_rabi_sericulture_waterdemand = result.sprinkler_rabi_sericulture_waterdemand;
                        Data11.sprinkler_rabi_sericulture_sprinkler_waterdemand = result.sprinkler_rabi_sericulture_sprinkler_waterdemand;
                        Data11.sprinkler_rabi_sericulture_reduction_gw_demand = result.sprinkler_rabi_sericulture_reduction_gw_demand;

                        //rabi tomoto

                        Data11.sprinkler_rabi_tomoto_crop_area = result.sprinkler_rabi_tomoto_crop_area;
                        //  Data11.sprinkler_rabi_tomoto_fundingsource = result.sprinkler_rabi_tomoto_fundingsource;

                        Data11.sprinkler_rabi_tomoto_irri_area = result.sprinkler_rabi_tomoto_irri_area;
                        Data11.sprinkler_rabi_tomoto_waterdemand = result.sprinkler_rabi_tomoto_waterdemand;
                        Data11.sprinkler_rabi_tomoto_sprinkler_waterdemand = result.sprinkler_rabi_tomoto_sprinkler_waterdemand;
                        Data11.sprinkler_rabi_tomoto_reduction_gw_demand = result.sprinkler_rabi_tomoto_reduction_gw_demand;

                        //rabi cabbage

                        //Data11.sprinkler_rabi_cabbage_crop_area = result.sprinkler_rabi_cabbage_crop_area;
                        //Data11.sprinkler_rabi_cabbage_fundingsource = result.sprinkler_rabi_cabbage_fundingsource;

                        //Data11.sprinkler_rabi_cabbage_irri_area = result.sprinkler_rabi_cabbage_irri_area;
                        //Data11.sprinkler_rabi_cabbage_waterdemand = result.sprinkler_rabi_cabbage_waterdemand;
                        //Data11.sprinkler_rabi_cabbage_sprinkler_waterdemand = result.sprinkler_rabi_cabbage_sprinkler_waterdemand;
                        //Data11.sprinkler_rabi_cabbage_reduction_gw_demand = result.sprinkler_rabi_cabbage_reduction_gw_demand;

                        //rabi beans

                        //Data11.sprinkler_rabi_beans_crop_area = result.sprinkler_rabi_beans_crop_area;
                        //Data11.sprinkler_rabi_beans_fundingsource = result.sprinkler_rabi_beans_fundingsource;

                        //Data11.sprinkler_rabi_beans_irri_area = result.sprinkler_rabi_beans_irri_area;
                        //Data11.sprinkler_rabi_beans_waterdemand = result.sprinkler_rabi_beans_waterdemand;
                        //Data11.sprinkler_rabi_beans_sprinkler_waterdemand = result.sprinkler_rabi_beans_sprinkler_waterdemand;
                        //Data11.sprinkler_rabi_beans_reduction_gw_demand = result.sprinkler_rabi_beans_reduction_gw_demand;

                        //rabi floriculture

                        Data11.sprinkler_rabi_floriculture_crop_area = result.sprinkler_rabi_floriculture_crop_area;
                        //  Data11.sprinkler_rabi_floriculture_fundingsource = result.sprinkler_rabi_floriculture_fundingsource;

                        Data11.sprinkler_rabi_floriculture_irri_area = result.sprinkler_rabi_floriculture_irri_area;
                        Data11.sprinkler_rabi_floriculture_waterdemand = result.sprinkler_rabi_floriculture_waterdemand;
                        Data11.sprinkler_rabi_floriculture_sprinkler_waterdemand = result.sprinkler_rabi_floriculture_sprinkler_waterdemand;
                        Data11.sprinkler_rabi_floriculture_reduction_gw_demand = result.sprinkler_rabi_floriculture_reduction_gw_demand;

                        //rabi potato

                        //Data11.sprinkler_rabi_potato_crop_area = result.sprinkler_rabi_potato_crop_area;
                        //Data11.sprinkler_rabi_potato_fundingsource = result.sprinkler_rabi_potato_fundingsource;

                        //Data11.sprinkler_rabi_potato_irri_area = result.sprinkler_rabi_potato_irri_area;
                        //Data11.sprinkler_rabi_potato_waterdemand = result.sprinkler_rabi_potato_waterdemand;
                        //Data11.sprinkler_rabi_potato_sprinkler_waterdemand = result.sprinkler_rabi_potato_sprinkler_waterdemand;
                        //Data11.sprinkler_rabi_potato_reduction_gw_demand = result.sprinkler_rabi_potato_reduction_gw_demand;

                        //rabi cucumber

                        //Data11.sprinkler_rabi_cucumber_crop_area = result.sprinkler_rabi_cucumber_crop_area;
                        // Data11.sprinkler_rabi_cucumber_fundingsource = result.sprinkler_rabi_cucumber_fundingsource;

                        //Data11.sprinkler_rabi_cucumber_irri_area = result.sprinkler_rabi_cucumber_irri_area;
                        //Data11.sprinkler_rabi_cucumber_waterdemand = result.sprinkler_rabi_cucumber_waterdemand;
                        //Data11.sprinkler_rabi_cucumber_sprinkler_waterdemand = result.sprinkler_rabi_cucumber_sprinkler_waterdemand;
                        //Data11.sprinkler_rabi_cucumber_reduction_gw_demand = result.sprinkler_rabi_cucumber_reduction_gw_demand;

                        //rabi ragi

                        Data11.sprinkler_rabi_ragi_crop_area = result.sprinkler_rabi_ragi_crop_area;
                        //  Data11.sprinkler_rabi_ragi_fundingsource = result.sprinkler_rabi_ragi_fundingsource;

                        Data11.sprinkler_rabi_ragi_irri_area = result.sprinkler_rabi_ragi_irri_area;
                        Data11.sprinkler_rabi_ragi_waterdemand = result.sprinkler_rabi_ragi_waterdemand;
                        Data11.sprinkler_rabi_ragi_sprinkler_waterdemand = result.sprinkler_rabi_ragi_sprinkler_waterdemand;
                        Data11.sprinkler_rabi_ragi_reduction_gw_demand = result.sprinkler_rabi_ragi_reduction_gw_demand;

                        //rabi sugarcane

                        Data11.sprinkler_rabi_sugarcane_crop_area = result.sprinkler_rabi_sugarcane_crop_area;
                        //  Data11.sprinkler_rabi_sugarcane_fundingsource = result.sprinkler_rabi_sugarcane_fundingsource;

                        Data11.sprinkler_rabi_sugarcane_irri_area = result.sprinkler_rabi_sugarcane_irri_area;
                        Data11.sprinkler_rabi_sugarcane_waterdemand = result.sprinkler_rabi_sugarcane_waterdemand;
                        Data11.sprinkler_rabi_sugarcane_sprinkler_waterdemand = result.sprinkler_rabi_sugarcane_sprinkler_waterdemand;
                        Data11.sprinkler_rabi_sugarcane_reduction_gw_demand = result.sprinkler_rabi_sugarcane_reduction_gw_demand;


                        //Rabi Maize
                        Data11.sprinkler_rabi_maize_crop_area = result.sprinkler_rabi_maize_crop_area;
                        //  Data11.sprinkler_rabi_maize_fundingsource = result.sprinkler_rabi_maize_fundingsource;

                        Data11.sprinkler_rabi_maize_irri_area = result.sprinkler_rabi_maize_irri_area;
                        Data11.sprinkler_rabi_maize_waterdemand = result.sprinkler_rabi_maize_waterdemand;
                        Data11.sprinkler_rabi_maize_sprinkler_waterdemand = result.sprinkler_rabi_maize_sprinkler_waterdemand;
                        Data11.sprinkler_rabi_maize_reduction_gw_demand = result.sprinkler_rabi_maize_reduction_gw_demand;

                        //rabi fodder

                        Data11.sprinkler_rabi_fodder_crop_area = result.sprinkler_rabi_fodder_crop_area;
                        // Data11.sprinkler_rabi_fodder_fundingsource = result.sprinkler_rabi_fodder_fundingsource;

                        Data11.sprinkler_rabi_fodder_irri_area = result.sprinkler_rabi_fodder_irri_area;
                        Data11.sprinkler_rabi_fodder_waterdemand = result.sprinkler_rabi_fodder_waterdemand;
                        Data11.sprinkler_rabi_fodder_sprinkler_waterdemand = result.sprinkler_rabi_fodder_sprinkler_waterdemand;
                        Data11.sprinkler_rabi_fodder_reduction_gw_demand = result.sprinkler_rabi_fodder_reduction_gw_demand;

                        //rabi paddy

                        Data11.sprinkler_rabi_paddy_crop_area = result.sprinkler_rabi_paddy_crop_area;
                        // Data11.sprinkler_rabi_paddy_fundingsource = result.sprinkler_rabi_paddy_fundingsource;

                        Data11.sprinkler_rabi_paddy_irri_area = result.sprinkler_rabi_paddy_irri_area;
                        Data11.sprinkler_rabi_paddy_waterdemand = result.sprinkler_rabi_paddy_waterdemand;
                        Data11.sprinkler_rabi_paddy_sprinkler_waterdemand = result.sprinkler_rabi_paddy_sprinkler_waterdemand;
                        Data11.sprinkler_rabi_paddy_reduction_gw_demand = result.sprinkler_rabi_paddy_reduction_gw_demand;

                        //rabi alfalfa

                        Data11.sprinkler_rabi_alfalfa_crop_area = result.sprinkler_rabi_alfalfa_crop_area;
                        // Data11.sprinkler_rabi_alfalfa_fundingsource = result.sprinkler_rabi_alfalfa_fundingsource;

                        Data11.sprinkler_rabi_alfalfa_irri_area = result.sprinkler_rabi_alfalfa_irri_area;
                        Data11.sprinkler_rabi_alfalfa_waterdemand = result.sprinkler_rabi_alfalfa_waterdemand;
                        Data11.sprinkler_rabi_alfalfa_sprinkler_waterdemand = result.sprinkler_rabi_alfalfa_sprinkler_waterdemand;
                        Data11.sprinkler_rabi_alfalfa_reduction_gw_demand = result.sprinkler_rabi_alfalfa_reduction_gw_demand;

                        // rabi onion

                        //Data11.sprinkler_rabi_onion_crop_area = result.sprinkler_rabi_onion_crop_area;
                        //Data11.sprinkler_rabi_onion_fundingsource = result.sprinkler_rabi_onion_fundingsource;

                        //Data11.sprinkler_rabi_onion_irri_area = result.sprinkler_rabi_onion_irri_area;
                        //Data11.sprinkler_rabi_onion_waterdemand = result.sprinkler_rabi_onion_waterdemand;
                        //Data11.sprinkler_rabi_onion_sprinkler_waterdemand = result.sprinkler_rabi_onion_sprinkler_waterdemand;
                        //Data11.sprinkler_rabi_onion_reduction_gw_demand = result.sprinkler_rabi_onion_reduction_gw_demand;

                        //rabi horticulture

                        Data11.sprinkler_rabi_horticulture_crop_area = result.sprinkler_rabi_horticulture_crop_area;
                        // Data11.sprinkler_rabi_horticulture_fundingsource = result.sprinkler_rabi_horticulture_fundingsource;

                        Data11.sprinkler_rabi_horticulture_irri_area = result.sprinkler_rabi_horticulture_irri_area;
                        Data11.sprinkler_rabi_horticulture_waterdemand = result.sprinkler_rabi_horticulture_waterdemand;
                        Data11.sprinkler_rabi_horticulture_sprinkler_waterdemand = result.sprinkler_rabi_horticulture_sprinkler_waterdemand;
                        Data11.sprinkler_rabi_horticulture_reduction_gw_demand = result.sprinkler_rabi_horticulture_reduction_gw_demand;

                        //rabi sunflower
                        Data11.sprinkler_rabi_sunflower_crop_area = result.sprinkler_rabi_sunflower_crop_area;
                        // Data11.sprinkler_rabi_sunflower_fundingsource = result.sprinkler_rabi_sunflower_fundingsource;

                        Data11.sprinkler_rabi_sunflower_irri_area = result.sprinkler_rabi_sunflower_irri_area;
                        Data11.sprinkler_rabi_sunflower_waterdemand = result.sprinkler_rabi_sunflower_waterdemand;
                        Data11.sprinkler_rabi_sunflower_sprinkler_waterdemand = result.sprinkler_rabi_sunflower_sprinkler_waterdemand;
                        Data11.sprinkler_rabi_sunflower_reduction_gw_demand = result.sprinkler_rabi_sunflower_reduction_gw_demand;

                        //rabi crops total

                        Data11.sprinkler_rabi_total_waterdemand = result.sprinkler_rabi_total_waterdemand;
                        Data11.sprinkler_rabi_total_rabi_waterdemand = result.sprinkler_rabi_total_rabi_waterdemand;
                        Data11.sprinkler_rabi_total_reduction_waterdemand = result.sprinkler_rabi_total_reduction_waterdemand;


                        //summer sericulture

                        Data11.sprinkler_summer_sericulture_crop_area = result.sprinkler_summer_sericulture_crop_area;
                        // Data11.sprinkler_summer_sericulture_fundingsource = result.sprinkler_summer_sericulture_fundingsource;

                        Data11.sprinkler_summer_sericulture_irri_area = result.sprinkler_summer_sericulture_irri_area;
                        Data11.sprinkler_summer_sericulture_waterdemand = result.sprinkler_summer_sericulture_waterdemand;
                        Data11.sprinkler_summer_sericulture_sprinkler_waterdemand = result.sprinkler_summer_sericulture_sprinkler_waterdemand;
                        Data11.sprinkler_summer_sericulture_reduction_gw_demand = result.sprinkler_summer_sericulture_reduction_gw_demand;

                        //summer tomoto

                        Data11.sprinkler_summer_tomoto_crop_area = result.sprinkler_summer_tomoto_crop_area;
                        // Data11.sprinkler_summer_tomoto_fundingsource = result.sprinkler_summer_tomoto_fundingsource;

                        Data11.sprinkler_summer_tomoto_irri_area = result.sprinkler_summer_tomoto_irri_area;
                        Data11.sprinkler_summer_tomoto_waterdemand = result.sprinkler_summer_tomoto_waterdemand;
                        Data11.sprinkler_summer_tomoto_sprinkler_waterdemand = result.sprinkler_summer_tomoto_sprinkler_waterdemand;
                        Data11.sprinkler_summer_tomoto_reduction_gw_demand = result.sprinkler_summer_tomoto_reduction_gw_demand;

                        //sumer cabbage

                        //Data11.sprinkler_summer_cabbage_crop_area = result.sprinkler_summer_cabbage_crop_area;
                        //Data11.sprinkler_summer_cabbage_fundingsource = result.sprinkler_summer_cabbage_fundingsource;

                        //Data11.sprinkler_summer_cabbage_irri_area = result.sprinkler_summer_cabbage_irri_area;
                        //Data11.sprinkler_summer_cabbage_waterdemand = result.sprinkler_summer_cabbage_waterdemand;
                        //Data11.sprinkler_summer_cabbage_sprinkler_waterdemand = result.sprinkler_summer_cabbage_sprinkler_waterdemand;
                        //Data11.sprinkler_summer_cabbage_reduction_gw_demand = result.sprinkler_summer_cabbage_reduction_gw_demand;

                        //summer beans

                        //Data11.sprinkler_summer_beans_crop_area = result.sprinkler_summer_beans_crop_area;
                        //Data11.sprinkler_summer_beans_fundingsource = result.sprinkler_summer_beans_fundingsource;

                        //Data11.sprinkler_summer_beans_irri_area = result.sprinkler_summer_beans_irri_area;
                        //Data11.sprinkler_summer_beans_waterdemand = result.sprinkler_summer_beans_waterdemand;
                        //Data11.sprinkler_summer_beans_sprinkler_waterdemand = result.sprinkler_summer_beans_sprinkler_waterdemand;
                        //Data11.sprinkler_summer_beans_reduction_gw_demand = result.sprinkler_summer_beans_reduction_gw_demand;

                        //summer floriculture

                        Data11.sprinkler_summer_floriculture_crop_area = result.sprinkler_summer_floriculture_crop_area;
                        // Data11.sprinkler_summer_floriculture_fundingsource = result.sprinkler_summer_floriculture_fundingsource;

                        Data11.sprinkler_summer_floriculture_irri_area = result.sprinkler_summer_floriculture_irri_area;
                        Data11.sprinkler_summer_floriculture_waterdemand = result.sprinkler_summer_floriculture_waterdemand;
                        Data11.sprinkler_summer_floriculture_sprinkler_waterdemand = result.sprinkler_summer_floriculture_sprinkler_waterdemand;
                        Data11.sprinkler_summer_floriculture_reduction_gw_demand = result.sprinkler_summer_floriculture_reduction_gw_demand;

                        //summer maize
                        Data11.sprinkler_summer_maize_crop_area = result.sprinkler_summer_maize_crop_area;
                        //Data11.sprinkler_summer_maize_fundingsource = result.sprinkler_summer_maize_fundingsource;

                        Data11.sprinkler_summer_maize_irri_area = result.sprinkler_summer_maize_irri_area;
                        Data11.sprinkler_summer_maize_waterdemand = result.sprinkler_summer_maize_waterdemand;
                        Data11.sprinkler_summer_maize_sprinkler_waterdemand = result.sprinkler_summer_maize_sprinkler_waterdemand;
                        Data11.sprinkler_summer_maize_reduction_gw_demand = result.sprinkler_summer_maize_sprinkler_waterdemand;

                        //summer fodder
                        Data11.sprinkler_summer_fodder_crop_area = result.sprinkler_summer_fodder_crop_area;
                        //Data11.sprinkler_summer_fodder_fundingsource = result.sprinkler_summer_fodder_fundingsource;

                        Data11.sprinkler_summer_fodder_irri_area = result.sprinkler_summer_fodder_irri_area;
                        Data11.sprinkler_summer_fodder_waterdemand = result.sprinkler_summer_fodder_waterdemand;
                        Data11.sprinkler_summer_fodder_sprinkler_waterdemand = result.sprinkler_summer_fodder_sprinkler_waterdemand;
                        Data11.sprinkler_summer_fodder_reduction_gw_demand = result.sprinkler_summer_fodder_reduction_gw_demand;

                        //summer sugarcane

                        Data11.sprinkler_summer_sugarcane_crop_area = result.sprinkler_summer_sugarcane_crop_area;
                        //Data11.sprinkler_summer_sugarcane_fundingsource = result.sprinkler_summer_sugarcane_fundingsource;

                        Data11.sprinkler_summer_sugarcane_irri_area = result.sprinkler_summer_sugarcane_irri_area;
                        Data11.sprinkler_summer_sugarcane_waterdemand = result.sprinkler_summer_sugarcane_waterdemand;
                        Data11.sprinkler_summer_sugarcane_sprinkler_waterdemand = result.sprinkler_summer_sugarcane_sprinkler_waterdemand;
                        Data11.sprinkler_summer_sugarcane_reduction_gw_demand = result.sprinkler_summer_sugarcane_reduction_gw_demand;


                        //summer crops total
                        Data11.sprinkler_summer_total_waterdemand = result.sprinkler_summer_total_waterdemand;
                        Data11.sprinkler_summer_total_summer_waterdemand = result.sprinkler_summer_total_summer_waterdemand;
                        Data11.sprinkler_summer_total_reduction_waterdemand = result.sprinkler_summer_total_reduction_waterdemand;
                        Data11.statename = StateName;
                        Data11.userid = Convert.ToInt32(userid);
                        //annual total
                        Data11.sprinkler_annual_reduction_waterdemand = result.sprinkler_annual_reduction_waterdemand;

                        Data11.latitude = result.latitude;
                        Data11.longitude = result.longitude;

                        //new columns water requirement
                        Data11.sprinkler_kharif_paddy_water_req = result.sprinkler_kharif_paddy_water_req;
                        Data11.sprinkler_kharif_ragi_water_req = result.sprinkler_kharif_ragi_water_req;
                        Data11.sprinkler_kharif_groundnut_water_req = result.sprinkler_kharif_groundnut_water_req;
                        Data11.sprinkler_kharif_sugarcane_water_req = result.sprinkler_kharif_sugarcane_water_req;
                        Data11.sprinkler_kharif_tomoto_water_req = result.sprinkler_kharif_tomoto_water_req;
                        //Data11.sprinkler_kharif_cabbage_water_req = result.sprinkler_kharif_cabbage_water_req;
                        //Data11.sprinkler_kharif_beans_water_req = result.sprinkler_kharif_beans_water_req;
                        Data11.sprinkler_kharif_floriculture_water_req = result.sprinkler_kharif_floriculture_water_req;
                        Data11.sprinkler_kharif_sericulture_water_req = result.sprinkler_kharif_sericulture_water_req;
                        // Data11.sprinkler_kharif_cucumber_water_req = result.sprinkler_kharif_cucumber_water_req;
                        Data11.sprinkler_kharif_banana_water_req = result.sprinkler_kharif_banana_water_req;
                        Data11.sprinkler_kharif_fodder_water_req = result.sprinkler_kharif_fodder_water_req;
                        Data11.sprinkler_kharif_maize_water_req = result.sprinkler_kharif_maize_water_req;
                        //Data11.sprinkler_kharif_potato_water_req = result.sprinkler_kharif_potato_water_req;
                        Data11.sprinkler_kharif_chillies_water_req = result.sprinkler_kharif_chillies_water_req;
                        Data11.sprinkler_kharif_cotton_water_req = result.sprinkler_kharif_cotton_water_req;
                        Data11.sprinkler_kharif_melon_water_req = result.sprinkler_kharif_melon_water_req;
                        Data11.sprinkler_kharif_citrus_water_req = result.sprinkler_kharif_citrus_water_req;
                        // Data11.sprinkler_kharif_peanut_water_req = result.sprinkler_kharif_peanut_water_req;
                        Data11.sprinkler_kharif_horticulture_water_req = result.sprinkler_kharif_horticulture_water_req;
                        Data11.sprinkler_summer_sugarcane_irri_area = result.sprinkler_summer_sugarcane_irri_area;

                        Data11.sprinkler_rabi_sericulture_water_req = result.sprinkler_rabi_sericulture_water_req;
                        Data11.sprinkler_rabi_tomoto_water_req = result.sprinkler_rabi_tomoto_water_req;
                        // Data11.sprinkler_rabi_cabbage_water_req = result.sprinkler_rabi_cabbage_water_req;
                        // Data11.sprinkler_rabi_beans_water_req = result.sprinkler_rabi_beans_water_req;
                        Data11.sprinkler_rabi_floriculture_water_req = result.sprinkler_rabi_floriculture_water_req;
                        // Data11.sprinkler_rabi_potato_water_req = result.sprinkler_rabi_potato_water_req;
                        // Data11.sprinkler_rabi_cucumber_water_req = result.sprinkler_rabi_cucumber_water_req;
                        Data11.sprinkler_rabi_ragi_water_req = result.sprinkler_rabi_ragi_water_req;
                        Data11.sprinkler_rabi_sugarcane_water_req = result.sprinkler_rabi_sugarcane_water_req;
                        Data11.sprinkler_rabi_maize_water_req = result.sprinkler_rabi_maize_water_req;
                        Data11.sprinkler_rabi_fodder_water_req = result.sprinkler_rabi_fodder_water_req;
                        Data11.sprinkler_rabi_paddy_water_req = result.sprinkler_rabi_paddy_water_req;
                        Data11.sprinkler_rabi_alfalfa_water_req = result.sprinkler_rabi_alfalfa_water_req;
                        // Data11.sprinkler_rabi_onion_water_req = result.sprinkler_rabi_onion_water_req;
                        Data11.sprinkler_rabi_horticulture_water_req = result.sprinkler_rabi_horticulture_water_req;
                        Data11.sprinkler_rabi_sunflower_water_req = result.sprinkler_rabi_sunflower_water_req;

                        Data11.sprinkler_summer_sericulture_water_req = result.sprinkler_summer_sericulture_water_req;
                        Data11.sprinkler_summer_tomoto_water_req = result.sprinkler_summer_tomoto_water_req;
                        //Data11.sprinkler_summer_cabbage_water_req = result.sprinkler_summer_cabbage_water_req;
                        //Data11.sprinkler_summer_beans_water_req = result.sprinkler_summer_beans_water_req;
                        Data11.sprinkler_summer_floriculture_water_req = result.sprinkler_summer_floriculture_water_req;
                        Data11.sprinkler_summer_maize_water_req = result.sprinkler_summer_maize_water_req;
                        Data11.sprinkler_summer_fodder_water_req = result.sprinkler_summer_fodder_water_req;
                        Data11.sprinkler_summer_sugarcane_water_req = result.sprinkler_summer_sugarcane_water_req;



                        Data11.sprinkler_other_funding_source = result.sprinkler_other_funding_source;

                        //Horiculture
                        Data11.sprinkler_summer_horticulture_crop_area = result.sprinkler_summer_horticulture_crop_area;
                        Data11.sprinkler_summer_horticulture_irri_area = result.sprinkler_summer_horticulture_irri_area;
                        Data11.sprinkler_summer_horticulture_water_req = result.sprinkler_summer_horticulture_water_req;
                        Data11.sprinkler_summer_horticulture_waterdemand = result.sprinkler_summer_horticulture_waterdemand;
                        Data11.sprinkler_summer_horticulture_netwater_waterdemand = result.sprinkler_summer_horticulture_netwater_waterdemand;
                        Data11.sprinkler_summer_horticulture_reduction_gw_demand = result.sprinkler_summer_horticulture_reduction_gw_demand;

                        // Latest

                        Data11.sprinkler_kharif_othercrop_name1 = result.sprinkler_kharif_othercrop_name1;
                        Data11.sprinkler_kharif_othercrop_area1 = result.sprinkler_kharif_othercrop_area1;
                        Data11.sprinkler_kharif_othercrop_irri_area1 = result.sprinkler_kharif_othercrop_irri_area1;
                        Data11.sprinkler_kharif_othercrop_water_req1 = result.sprinkler_kharif_othercrop_water_req1;
                        Data11.sprinkler_kharif_othercrop_waterdemand1 = result.sprinkler_kharif_othercrop_waterdemand1;
                        Data11.sprinkler_kharif_othercrop_name2 = result.sprinkler_kharif_othercrop_name2;
                        Data11.sprinkler_kharif_othercrop_area2 = result.sprinkler_kharif_othercrop_area2;
                        Data11.sprinkler_kharif_othercrop_irri_area2 = result.sprinkler_kharif_othercrop_irri_area2;
                        Data11.sprinkler_kharif_othercrop_water_req2 = result.sprinkler_kharif_othercrop_water_req2;
                        Data11.sprinkler_kharif_othercrop_waterdemand2 = result.sprinkler_kharif_othercrop_waterdemand2;
                        Data11.sprinkler_kharif_othercrop_name3 = result.sprinkler_kharif_othercrop_name3;
                        Data11.sprinkler_kharif_othercrop_area3 = result.sprinkler_kharif_othercrop_area3;
                        Data11.sprinkler_kharif_othercrop_irri_area3 = result.sprinkler_kharif_othercrop_irri_area3;
                        Data11.sprinkler_kharif_othercrop_water_req3 = result.sprinkler_kharif_othercrop_water_req3;
                        Data11.sprinkler_kharif_othercrop_waterdemand3 = result.sprinkler_kharif_othercrop_waterdemand3;
                        Data11.sprinkler_kharif_othercrop_waterdemand1 = result.sprinkler_kharif_othercrop_waterdemand1;
                        Data11.sprinkler_kharif_othercrop_sprinkler_waterdemand1 = result.sprinkler_kharif_othercrop_sprinkler_waterdemand1;
                        Data11.sprinkler_kharif_othercrop_reduc_gw_demand1 = result.sprinkler_kharif_othercrop_reduc_gw_demand1;

                        Data11.sprinkler_kharif_othercrop_waterdemand2 = result.sprinkler_kharif_othercrop_waterdemand2;
                        Data11.sprinkler_kharif_othercrop_sprinkler_waterdemand2 = result.sprinkler_kharif_othercrop_sprinkler_waterdemand2;
                        Data11.sprinkler_kharif_othercrop_reduc_gw_demand2 = result.sprinkler_kharif_othercrop_reduc_gw_demand2;

                        Data11.sprinkler_kharif_othercrop_waterdemand3 = result.sprinkler_kharif_othercrop_waterdemand3;
                        Data11.sprinkler_kharif_othercrop_sprinkler_waterdemand3 = result.sprinkler_kharif_othercrop_sprinkler_waterdemand3;
                        Data11.sprinkler_kharif_othercrop_reduc_gw_demand3 = result.sprinkler_kharif_othercrop_reduc_gw_demand3;


                        Data11.sprinkler_kharif_othercrop_name4 = result.sprinkler_kharif_othercrop_name4;
                        Data11.sprinkler_kharif_othercrop_area4 = result.sprinkler_kharif_othercrop_area4;
                        Data11.sprinkler_kharif_othercrop_irri_area4 = result.sprinkler_kharif_othercrop_irri_area4;
                        Data11.sprinkler_kharif_othercrop_water_req4 = result.sprinkler_kharif_othercrop_water_req4;
                        Data11.sprinkler_kharif_othercrop_waterdemand4 = result.sprinkler_kharif_othercrop_waterdemand4;

                        Data11.sprinkler_kharif_othercrop_waterdemand4 = result.sprinkler_kharif_othercrop_waterdemand4;
                        Data11.sprinkler_kharif_othercrop_sprinkler_waterdemand4 = result.sprinkler_kharif_othercrop_sprinkler_waterdemand4;
                        Data11.sprinkler_kharif_othercrop_reduc_gw_demand4 = result.sprinkler_kharif_othercrop_reduc_gw_demand4;

                        Data11.sprinkler_kharif_othercrop_name5 = result.sprinkler_kharif_othercrop_name5;
                        Data11.sprinkler_kharif_othercrop_area5 = result.sprinkler_kharif_othercrop_area5;
                        Data11.sprinkler_kharif_othercrop_irri_area5 = result.sprinkler_kharif_othercrop_irri_area5;
                        Data11.sprinkler_kharif_othercrop_water_req5 = result.sprinkler_kharif_othercrop_water_req5;
                        Data11.sprinkler_kharif_othercrop_waterdemand5 = result.sprinkler_kharif_othercrop_waterdemand5;

                        Data11.sprinkler_kharif_othercrop_waterdemand5 = result.sprinkler_kharif_othercrop_waterdemand5;
                        Data11.sprinkler_kharif_othercrop_sprinkler_waterdemand5 = result.sprinkler_kharif_othercrop_sprinkler_waterdemand5;
                        Data11.sprinkler_kharif_othercrop_reduc_gw_demand5 = result.sprinkler_kharif_othercrop_reduc_gw_demand5;

                        //rabi
                        Data11.sprinkler_rabi_othercrop_name1 = result.sprinkler_rabi_othercrop_name1;
                        Data11.sprinkler_rabi_othercrop_area1 = result.sprinkler_rabi_othercrop_area1;
                        Data11.sprinkler_rabi_othercrop_irri_area1 = result.sprinkler_rabi_othercrop_irri_area1;
                        Data11.sprinkler_rabi_othercrop_water_req1 = result.sprinkler_rabi_othercrop_water_req1;
                        Data11.sprinkler_rabi_othercrop_waterdemand1 = result.sprinkler_rabi_othercrop_waterdemand1;

                        Data11.sprinkler_rabi_othercrop_waterdemand1 = result.sprinkler_rabi_othercrop_waterdemand1;
                        Data11.sprinkler_rabi_othercrop_sprinkler_waterdemand1 = result.sprinkler_rabi_othercrop_sprinkler_waterdemand1;
                        Data11.sprinkler_rabi_othercrop_reduc_gw_demand1 = result.sprinkler_rabi_othercrop_reduc_gw_demand1;

                        Data11.sprinkler_rabi_othercrop_name2 = result.sprinkler_rabi_othercrop_name2;
                        Data11.sprinkler_rabi_othercrop_area2 = result.sprinkler_rabi_othercrop_area2;
                        Data11.sprinkler_rabi_othercrop_irri_area2 = result.sprinkler_rabi_othercrop_irri_area2;
                        Data11.sprinkler_rabi_othercrop_water_req2 = result.sprinkler_rabi_othercrop_water_req2;
                        Data11.sprinkler_rabi_othercrop_waterdemand2 = result.sprinkler_rabi_othercrop_waterdemand2;

                        Data11.sprinkler_rabi_othercrop_waterdemand2 = result.sprinkler_rabi_othercrop_waterdemand2;
                        Data11.sprinkler_rabi_othercrop_sprinkler_waterdemand2 = result.sprinkler_rabi_othercrop_sprinkler_waterdemand2;
                        Data11.sprinkler_rabi_othercrop_reduc_gw_demand2 = result.sprinkler_rabi_othercrop_reduc_gw_demand2;

                        Data11.sprinkler_rabi_othercrop_name3 = result.sprinkler_rabi_othercrop_name3;
                        Data11.sprinkler_rabi_othercrop_area3 = result.sprinkler_rabi_othercrop_area3;
                        Data11.sprinkler_rabi_othercrop_irri_area3 = result.sprinkler_rabi_othercrop_irri_area3;
                        Data11.sprinkler_rabi_othercrop_water_req3 = result.sprinkler_rabi_othercrop_water_req3;
                        Data11.sprinkler_rabi_othercrop_waterdemand3 = result.sprinkler_rabi_othercrop_waterdemand3;

                        Data11.sprinkler_rabi_othercrop_waterdemand3 = result.sprinkler_rabi_othercrop_waterdemand3;
                        Data11.sprinkler_rabi_othercrop_sprinkler_waterdemand3 = result.sprinkler_rabi_othercrop_sprinkler_waterdemand3;
                        Data11.sprinkler_rabi_othercrop_reduc_gw_demand3 = result.sprinkler_rabi_othercrop_reduc_gw_demand3;

                        Data11.sprinkler_rabi_othercrop_name4 = result.sprinkler_rabi_othercrop_name4;
                        Data11.sprinkler_rabi_othercrop_area4 = result.sprinkler_rabi_othercrop_area4;
                        Data11.sprinkler_rabi_othercrop_irri_area4 = result.sprinkler_rabi_othercrop_irri_area4;
                        Data11.sprinkler_rabi_othercrop_water_req4 = result.sprinkler_rabi_othercrop_water_req4;
                        Data11.sprinkler_rabi_othercrop_waterdemand4 = result.sprinkler_rabi_othercrop_waterdemand4;

                        Data11.sprinkler_rabi_othercrop_waterdemand4 = result.sprinkler_rabi_othercrop_waterdemand4;
                        Data11.sprinkler_rabi_othercrop_sprinkler_waterdemand4 = result.sprinkler_rabi_othercrop_sprinkler_waterdemand4;
                        Data11.sprinkler_rabi_othercrop_reduc_gw_demand4 = result.sprinkler_rabi_othercrop_reduc_gw_demand4;

                        Data11.sprinkler_rabi_othercrop_name5 = result.sprinkler_rabi_othercrop_name5;
                        Data11.sprinkler_rabi_othercrop_area5 = result.sprinkler_rabi_othercrop_area5;
                        Data11.sprinkler_rabi_othercrop_irri_area5 = result.sprinkler_rabi_othercrop_irri_area5;
                        Data11.sprinkler_rabi_othercrop_water_req5 = result.sprinkler_rabi_othercrop_water_req5;
                        Data11.sprinkler_rabi_othercrop_waterdemand5 = result.sprinkler_rabi_othercrop_waterdemand5;

                        Data11.sprinkler_rabi_othercrop_waterdemand5 = result.sprinkler_rabi_othercrop_waterdemand5;
                        Data11.sprinkler_rabi_othercrop_sprinkler_waterdemand5 = result.sprinkler_rabi_othercrop_sprinkler_waterdemand5;
                        Data11.sprinkler_rabi_othercrop_reduc_gw_demand5 = result.sprinkler_rabi_othercrop_reduc_gw_demand5;

                        //summer
                        Data11.sprinkler_summer_othercrop_name1 = result.sprinkler_summer_othercrop_name1;
                        Data11.sprinkler_summer_othercrop_area1 = result.sprinkler_summer_othercrop_area1;
                        Data11.sprinkler_summer_othercrop_irri_area1 = result.sprinkler_summer_othercrop_irri_area1;
                        Data11.sprinkler_summer_othercrop_water_req1 = result.sprinkler_summer_othercrop_water_req1;
                        Data11.sprinkler_summer_othercrop_waterdemand1 = result.sprinkler_summer_othercrop_waterdemand1;

                        Data11.sprinkler_summer_othercrop_waterdemand1 = result.sprinkler_summer_othercrop_waterdemand1;
                        Data11.sprinkler_summer_othercrop_sprinkler_waterdemand1 = result.sprinkler_summer_othercrop_sprinkler_waterdemand1;
                        Data11.sprinkler_summer_othercrop_reduc_gw_demand1 = result.sprinkler_summer_othercrop_reduc_gw_demand1;

                        Data11.sprinkler_summer_othercrop_name2 = result.sprinkler_summer_othercrop_name2;
                        Data11.sprinkler_summer_othercrop_area2 = result.sprinkler_summer_othercrop_area2;
                        Data11.sprinkler_summer_othercrop_irri_area2 = result.sprinkler_summer_othercrop_irri_area2;
                        Data11.sprinkler_summer_othercrop_water_req2 = result.sprinkler_summer_othercrop_water_req2;
                        Data11.sprinkler_summer_othercrop_waterdemand2 = result.sprinkler_summer_othercrop_waterdemand2;

                        Data11.sprinkler_summer_othercrop_waterdemand2 = result.sprinkler_summer_othercrop_waterdemand2;
                        Data11.sprinkler_summer_othercrop_sprinkler_waterdemand2 = result.sprinkler_summer_othercrop_sprinkler_waterdemand2;
                        Data11.sprinkler_summer_othercrop_reduc_gw_demand2 = result.sprinkler_summer_othercrop_reduc_gw_demand2;

                        Data11.sprinkler_summer_othercrop_name3 = result.sprinkler_summer_othercrop_name3;
                        Data11.sprinkler_summer_othercrop_area3 = result.sprinkler_summer_othercrop_area3;
                        Data11.sprinkler_summer_othercrop_irri_area3 = result.sprinkler_summer_othercrop_irri_area3;
                        Data11.sprinkler_summer_othercrop_water_req3 = result.sprinkler_summer_othercrop_water_req3;
                        Data11.sprinkler_summer_othercrop_waterdemand3 = result.sprinkler_summer_othercrop_waterdemand3;

                        Data11.sprinkler_summer_othercrop_waterdemand3 = result.sprinkler_summer_othercrop_waterdemand3;
                        Data11.sprinkler_summer_othercrop_sprinkler_waterdemand3 = result.sprinkler_summer_othercrop_sprinkler_waterdemand3;
                        Data11.sprinkler_summer_othercrop_reduc_gw_demand3 = result.sprinkler_summer_othercrop_reduc_gw_demand3;

                        Data11.sprinkler_summer_othercrop_name4 = result.sprinkler_summer_othercrop_name4;
                        Data11.sprinkler_summer_othercrop_area4 = result.sprinkler_summer_othercrop_area4;
                        Data11.sprinkler_summer_othercrop_irri_area4 = result.sprinkler_summer_othercrop_irri_area4;
                        Data11.sprinkler_summer_othercrop_water_req4 = result.sprinkler_summer_othercrop_water_req4;
                        Data11.sprinkler_summer_othercrop_waterdemand4 = result.sprinkler_summer_othercrop_waterdemand4;

                        Data11.sprinkler_summer_othercrop_waterdemand4 = result.sprinkler_summer_othercrop_waterdemand4;
                        Data11.sprinkler_summer_othercrop_sprinkler_waterdemand4 = result.sprinkler_summer_othercrop_sprinkler_waterdemand4;
                        Data11.sprinkler_summer_othercrop_reduc_gw_demand4 = result.sprinkler_summer_othercrop_reduc_gw_demand4;

                        Data11.sprinkler_summer_othercrop_name5 = result.sprinkler_summer_othercrop_name5;
                        Data11.sprinkler_summer_othercrop_area5 = result.sprinkler_summer_othercrop_area5;
                        Data11.sprinkler_summer_othercrop_irri_area5 = result.sprinkler_summer_othercrop_irri_area5;
                        Data11.sprinkler_summer_othercrop_water_req5 = result.sprinkler_summer_othercrop_water_req5;
                        Data11.sprinkler_summer_othercrop_waterdemand5 = result.sprinkler_summer_othercrop_waterdemand5;

                        Data11.sprinkler_summer_othercrop_waterdemand5 = result.sprinkler_summer_othercrop_waterdemand5;
                        Data11.sprinkler_summer_othercrop_sprinkler_waterdemand5 = result.sprinkler_summer_othercrop_sprinkler_waterdemand5;
                        Data11.sprinkler_summer_othercrop_reduc_gw_demand5 = result.sprinkler_summer_othercrop_reduc_gw_demand5;

                        ABE.Entry(Data11).State = EntityState.Modified;

                        ABE.SaveChanges();
                        return Json("Saved Successfully", JsonRequestBehavior.AllowGet);
                    }
                    else
                    {
                        if (Details.Count == 0)
                        {
                            Obj1.statename = StateName;
                            Obj1.blockname = BlockName;
                            Obj1.districtname = DistName;
                            Obj1.gpname = GramName;

                            if (result.sprinkler_approx_estimated_cost != null && result.sprinkler_approx_estimated_cost != "")
                            {
                                string valid_negitive = Validation_NegitiveVal(result.sprinkler_approx_estimated_cost);
                                if (valid_negitive == "True")
                                {
                                    Obj1.sprinkler_approx_estimated_cost = result.sprinkler_approx_estimated_cost;
                                }
                                else
                                {
                                    return Json(valid_negitive, JsonRequestBehavior.AllowGet);
                                }

                            }
                            Obj1.sprinkler_cost_type = result.sprinkler_cost_type;
                            Obj1.officer_name = Session["Officer"].ToString();
                            Obj1.sprinkler_summer_horticulture_crop_area = result.sprinkler_summer_horticulture_crop_area;
                            Obj1.sprinkler_summer_horticulture_irri_area = result.sprinkler_summer_horticulture_irri_area;
                            Obj1.sprinkler_summer_horticulture_water_req = result.sprinkler_summer_horticulture_water_req;
                            Obj1.sprinkler_summer_horticulture_waterdemand = result.sprinkler_summer_horticulture_waterdemand;
                            Obj1.sprinkler_summer_horticulture_netwater_waterdemand = result.sprinkler_summer_horticulture_netwater_waterdemand;
                            Obj1.sprinkler_summer_horticulture_reduction_gw_demand = result.sprinkler_summer_horticulture_reduction_gw_demand;



                            //paddy
                            Obj1.sprinkler_kharif_paddy_crop_area = result.sprinkler_kharif_paddy_crop_area;
                            Obj1.sprinkler_kharif_paddy_fundingsource = result.sprinkler_kharif_paddy_fundingsource;
                            Obj1.sprinkler_kharif_paddy_irri_area = result.sprinkler_kharif_paddy_irri_area;
                            Obj1.sprinkler_kharif_paddy_waterdemand = result.sprinkler_kharif_paddy_waterdemand;
                            Obj1.sprinkler_kharif_paddy_sprinkler_waterdemand = result.sprinkler_kharif_paddy_sprinkler_waterdemand;
                            Obj1.sprinkler_kharif_paddy_reduction_gw_demand = result.sprinkler_kharif_paddy_reduction_gw_demand;

                            //Ragi
                            Obj1.sprinkler_kharif_ragi_crop_area = result.sprinkler_kharif_ragi_crop_area;
                            // Obj1.sprinkler_kharif_ragi_fundingsource = result.sprinkler_kharif_ragi_fundingsource;
                            Obj1.sprinkler_kharif_ragi_irri_area = result.sprinkler_kharif_ragi_irri_area;
                            Obj1.sprinkler_kharif_ragi_waterdemand = result.sprinkler_kharif_ragi_waterdemand;
                            Obj1.sprinkler_kharif_ragi_sprinkler_waterdemand = result.sprinkler_kharif_ragi_sprinkler_waterdemand;
                            Obj1.sprinkler_kharif_ragi_reduction_gw_demand = result.sprinkler_kharif_ragi_reduction_gw_demand;

                            //groundnut
                            Obj1.sprinkler_kharif_groundnut_crop_area = result.sprinkler_kharif_groundnut_crop_area;
                            // Obj1.sprinkler_kharif_groundnut_fundingsource = result.sprinkler_kharif_groundnut_fundingsource;

                            Obj1.sprinkler_kharif_groundnut_irri_area = result.sprinkler_kharif_groundnut_irri_area;
                            Obj1.sprinkler_kharif_groundnut_waterdemand = result.sprinkler_kharif_groundnut_waterdemand;
                            Obj1.sprinkler_kharif_groundnut_sprinkler_waterdemand = result.sprinkler_kharif_groundnut_sprinkler_waterdemand;
                            Obj1.sprinkler_kharif_groundnut_reduction_gw_demand = result.sprinkler_kharif_groundnut_reduction_gw_demand;


                            //sugarcane
                            Obj1.sprinkler_kharif_sugarcane_crop_area = result.sprinkler_kharif_sugarcane_crop_area;
                            // Obj1.sprinkler_kharif_sugarcane_fundingsource = result.sprinkler_kharif_sugarcane_fundingsource;

                            Obj1.sprinkler_kharif_sugarcane_irri_area = result.sprinkler_kharif_sugarcane_irri_area;
                            Obj1.sprinkler_kharif_sugarcane_waterdemand = result.sprinkler_kharif_sugarcane_waterdemand;
                            Obj1.sprinkler_kharif_sugarcane_sprinkler_waterdemand = result.sprinkler_kharif_sugarcane_sprinkler_waterdemand;
                            Obj1.sprinkler_kharif_sugarcane_reduction_gw_demand = result.sprinkler_kharif_sugarcane_reduction_gw_demand;

                            //Tomoto


                            Obj1.sprinkler_kharif_tomoto_crop_area = result.sprinkler_kharif_tomoto_crop_area;
                            // Obj1.sprinkler_kharif_tomoto_fundingsource = result.sprinkler_kharif_tomoto_fundingsource;

                            Obj1.sprinkler_kharif_tomoto_irri_area = result.sprinkler_kharif_tomoto_irri_area;
                            Obj1.sprinkler_kharif_tomoto_waterdemand = result.sprinkler_kharif_tomoto_waterdemand;
                            Obj1.sprinkler_kharif_tomoto_sprinkler_waterdemand = result.sprinkler_kharif_tomoto_sprinkler_waterdemand;
                            Obj1.sprinkler_kharif_tomoto_reduction_gw_demand = result.sprinkler_kharif_tomoto_reduction_gw_demand;

                            //Cabbage

                            //Obj1.sprinkler_kharif_cabbage_crop_area = result.sprinkler_kharif_cabbage_crop_area;
                            // Obj1.sprinkler_kharif_cabbage_fundingsource = result.sprinkler_kharif_cabbage_fundingsource;

                            //Obj1.sprinkler_kharif_cabbage_irri_area = result.sprinkler_kharif_cabbage_irri_area;
                            //Obj1.sprinkler_kharif_cabbage_waterdemand = result.sprinkler_kharif_cabbage_waterdemand;
                            //Obj1.sprinkler_kharif_cabbage_sprinkler_waterdemand = result.sprinkler_kharif_cabbage_sprinkler_waterdemand;
                            //Obj1.sprinkler_kharif_cabbage_reduction_gw_demand = result.sprinkler_kharif_cabbage_reduction_gw_demand;

                            //Beans

                            // Obj1.sprinkler_kharif_beans_crop_area = result.sprinkler_kharif_beans_crop_area;
                            // Obj1.sprinkler_kharif_beans_fundingsource = result.sprinkler_kharif_beans_fundingsource;

                            //Obj1.sprinkler_kharif_beans_irri_area = result.sprinkler_kharif_beans_irri_area;
                            //Obj1.sprinkler_kharif_beans_waterdemand = result.sprinkler_kharif_beans_waterdemand;
                            //Obj1.sprinkler_kharif_beans_sprinkler_waterdemand = result.sprinkler_kharif_beans_sprinkler_waterdemand;
                            //Obj1.sprinkler_kharif_beans_reduction_gw_demand = result.sprinkler_kharif_beans_reduction_gw_demand;

                            //floriculture
                            Obj1.sprinkler_kharif_floriculture_crop_area = result.sprinkler_kharif_floriculture_crop_area;
                            // Obj1.sprinkler_kharif_floriculture_fundingsource = result.sprinkler_kharif_floriculture_fundingsource;

                            Obj1.sprinkler_kharif_floriculture_irri_area = result.sprinkler_kharif_floriculture_irri_area;
                            Obj1.sprinkler_kharif_floriculture_waterdemand = result.sprinkler_kharif_floriculture_waterdemand;
                            Obj1.sprinkler_kharif_floriculture_sprinkler_waterdemand = result.sprinkler_kharif_floriculture_sprinkler_waterdemand;
                            Obj1.sprinkler_kharif_floriculture_reduction_gw_demand = result.sprinkler_kharif_floriculture_reduction_gw_demand;

                            //sericulture

                            Obj1.sprinkler_kharif_sericulture_crop_area = result.sprinkler_kharif_sericulture_crop_area;
                            // Obj1.sprinkler_kharif_sericulture_fundingsource = result.sprinkler_kharif_sericulture_fundingsource;

                            Obj1.sprinkler_kharif_sericulture_irri_area = result.sprinkler_kharif_sericulture_irri_area;
                            Obj1.sprinkler_kharif_sericulture_waterdemand = result.sprinkler_kharif_sericulture_waterdemand;
                            Obj1.sprinkler_kharif_sericulture_sprinkler_waterdemand = result.sprinkler_kharif_sericulture_sprinkler_waterdemand;
                            Obj1.sprinkler_kharif_sericulture_reduction_gw_demand = result.sprinkler_kharif_sericulture_reduction_gw_demand;

                            //Cucumber

                            // Obj1.sprinkler_kharif_cucumber_crop_area = result.sprinkler_kharif_cucumber_crop_area;
                            //Obj1.sprinkler_kharif_cucumber_fundingsource = result.sprinkler_kharif_cucumber_fundingsource;

                            //Obj1.sprinkler_kharif_cucumber_irri_area = result.sprinkler_kharif_cucumber_irri_area;
                            //Obj1.sprinkler_kharif_cucumber_waterdemand = result.sprinkler_kharif_cucumber_waterdemand;
                            //Obj1.sprinkler_kharif_cucumber_sprinkler_waterdemand = result.sprinkler_kharif_cucumber_sprinkler_waterdemand;
                            //Obj1.sprinkler_kharif_cucumber_reduction_gw_demand = result.sprinkler_kharif_cucumber_reduction_gw_demand;

                            //banana

                            Obj1.sprinkler_kharif_banana_crop_area = result.sprinkler_kharif_banana_crop_area;
                            // Obj1.sprinkler_kharif_banana_fundingsource = result.sprinkler_kharif_banana_fundingsource;

                            Obj1.sprinkler_kharif_banana_irri_area = result.sprinkler_kharif_banana_irri_area;
                            Obj1.sprinkler_kharif_banana_waterdemand = result.sprinkler_kharif_banana_waterdemand;
                            Obj1.sprinkler_kharif_banana_sprinkler_waterdemand = result.sprinkler_kharif_banana_sprinkler_waterdemand;
                            Obj1.sprinkler_kharif_banana_reduction_gw_demand = result.sprinkler_kharif_banana_reduction_gw_demand;

                            //fodder

                            Obj1.sprinkler_kharif_fodder_crop_area = result.sprinkler_kharif_fodder_crop_area;
                            //Obj1.sprinkler_kharif_fodder_fundingsource = result.sprinkler_kharif_fodder_fundingsource;

                            Obj1.sprinkler_kharif_fodder_irri_area = result.sprinkler_kharif_fodder_irri_area;
                            Obj1.sprinkler_kharif_fodder_waterdemand = result.sprinkler_kharif_fodder_waterdemand;
                            Obj1.sprinkler_kharif_fodder_sprinkler_waterdemand = result.sprinkler_kharif_fodder_sprinkler_waterdemand;
                            Obj1.sprinkler_kharif_fodder_reduction_gw_demand = result.sprinkler_kharif_fodder_reduction_gw_demand;

                            //Maize

                            Obj1.sprinkler_kharif_maize_crop_area = result.sprinkler_kharif_maize_crop_area;
                            //Obj1.sprinkler_kharif_maize_fundingsource = result.sprinkler_kharif_maize_fundingsource;

                            Obj1.sprinkler_kharif_maize_irri_area = result.sprinkler_kharif_maize_irri_area;
                            Obj1.sprinkler_kharif_maize_waterdemand = result.sprinkler_kharif_maize_waterdemand;
                            Obj1.sprinkler_kharif_maize_sprinkler_waterdemand = result.sprinkler_kharif_maize_sprinkler_waterdemand;
                            Obj1.sprinkler_kharif_maize_reduction_gw_demand = result.sprinkler_kharif_maize_reduction_gw_demand;

                            //potato

                            //Obj1.sprinkler_kharif_potato_crop_area = result.sprinkler_kharif_potato_crop_area;
                            // Obj1.sprinkler_kharif_potato_fundingsource = result.sprinkler_kharif_potato_fundingsource;

                            //Obj1.sprinkler_kharif_potato_irri_area = result.sprinkler_kharif_potato_irri_area;
                            //Obj1.sprinkler_kharif_potato_waterdemand = result.sprinkler_kharif_potato_waterdemand;
                            //Obj1.sprinkler_kharif_potato_sprinkler_waterdemand = result.sprinkler_kharif_potato_sprinkler_waterdemand;
                            //Obj1.sprinkler_kharif_potato_reduction_gw_demand = result.sprinkler_kharif_potato_reduction_gw_demand;

                            //chillies

                            Obj1.sprinkler_kharif_chillies_crop_area = result.sprinkler_kharif_chillies_crop_area;
                            // Obj1.sprinkler_kharif_chillies_fundingsource = result.sprinkler_kharif_chillies_fundingsource;

                            Obj1.sprinkler_kharif_chillies_irri_area = result.sprinkler_kharif_chillies_irri_area;
                            Obj1.sprinkler_kharif_chillies_waterdemand = result.sprinkler_kharif_chillies_waterdemand;
                            Obj1.sprinkler_kharif_chillies_sprinkler_waterdemand = result.sprinkler_kharif_chillies_sprinkler_waterdemand;
                            Obj1.sprinkler_kharif_chillies_reduction_gw_demand = result.sprinkler_kharif_chillies_reduction_gw_demand;

                            //cotton

                            Obj1.sprinkler_kharif_cotton_crop_area = result.sprinkler_kharif_cotton_crop_area;
                            // Obj1.sprinkler_kharif_cotton_fundingsource = result.sprinkler_kharif_cotton_fundingsource;
                            Obj1.sprinkler_kharif_cotton_irri_area = result.sprinkler_kharif_cotton_irri_area;
                            Obj1.sprinkler_kharif_cotton_waterdemand = result.sprinkler_kharif_cotton_waterdemand;
                            Obj1.sprinkler_kharif_cotton_sprinkler_waterdemand = result.sprinkler_kharif_cotton_sprinkler_waterdemand;
                            Obj1.sprinkler_kharif_cotton_reduction_gw_demand = result.sprinkler_kharif_cotton_reduction_gw_demand;

                            //melon


                            Obj1.sprinkler_kharif_melon_crop_area = result.sprinkler_kharif_melon_crop_area;
                            // Obj1.sprinkler_kharif_melon_fundingsource = result.sprinkler_kharif_melon_fundingsource;

                            Obj1.sprinkler_kharif_melon_irri_area = result.sprinkler_kharif_melon_irri_area;
                            Obj1.sprinkler_kharif_melon_waterdemand = result.sprinkler_kharif_melon_waterdemand;
                            Obj1.sprinkler_kharif_melon_sprinkler_waterdemand = result.sprinkler_kharif_melon_sprinkler_waterdemand;
                            Obj1.sprinkler_kharif_melon_reduction_gw_demand = result.sprinkler_kharif_melon_reduction_gw_demand;

                            //citrus
                            Obj1.sprinkler_kharif_citrus_crop_area = result.sprinkler_kharif_citrus_crop_area;
                            // Obj1.sprinkler_kharif_citrus_fundingsource = result.sprinkler_kharif_citrus_fundingsource;

                            Obj1.sprinkler_kharif_citrus_irri_area = result.sprinkler_kharif_citrus_irri_area;
                            Obj1.sprinkler_kharif_citrus_waterdemand = result.sprinkler_kharif_citrus_waterdemand;
                            Obj1.sprinkler_kharif_citrus_sprinkler_waterdemand = result.sprinkler_kharif_citrus_sprinkler_waterdemand;
                            Obj1.sprinkler_kharif_citrus_reduction_gw_demand = result.sprinkler_kharif_citrus_reduction_gw_demand;

                            //peanut

                            //Obj1.sprinkler_kharif_peanut_crop_area = result.sprinkler_kharif_peanut_crop_area;
                            //Obj1.sprinkler_kharif_peanut_fundingsource = result.sprinkler_kharif_peanut_fundingsource;

                            //Obj1.sprinkler_kharif_peanut_irri_area = result.sprinkler_kharif_peanut_irri_area;
                            //Obj1.sprinkler_kharif_peanut_waterdemand = result.sprinkler_kharif_peanut_waterdemand;
                            //Obj1.sprinkler_kharif_peanut_sprinkler_waterdemand = result.sprinkler_kharif_peanut_sprinkler_waterdemand;
                            //Obj1.sprinkler_kharif_peanut_reduction_gw_demand = result.sprinkler_kharif_peanut_reduction_gw_demand;


                            //horticulture

                            Obj1.sprinkler_kharif_horticulture_crop_area = result.sprinkler_kharif_horticulture_crop_area;
                            // Obj1.sprinkler_kharif_horticulture_fundingsource = result.sprinkler_kharif_horticulture_fundingsource;

                            Obj1.sprinkler_kharif_horticulture_irri_area = result.sprinkler_kharif_horticulture_irri_area;
                            Obj1.sprinkler_kharif_horticulture_waterdemand = result.sprinkler_kharif_horticulture_waterdemand;
                            Obj1.sprinkler_kharif_horticulture_sprinkler_waterdemand = result.sprinkler_kharif_horticulture_sprinkler_waterdemand;
                            Obj1.sprinkler_kharif_horticulture_reduction_gw_demand = result.sprinkler_kharif_horticulture_reduction_gw_demand;

                            //karif crops total

                            Obj1.sprinkler_kharif_total_waterdemand = result.sprinkler_kharif_total_waterdemand;
                            Obj1.sprinkler_kharif_total_sprinkler_waterdemand = result.sprinkler_kharif_total_sprinkler_waterdemand;
                            Obj1.sprinkler_kharif_total_reduction_waterdemand = result.sprinkler_kharif_total_reduction_waterdemand;

                            //rabi sericulture

                            Obj1.sprinkler_rabi_sericulture_crop_area = result.sprinkler_rabi_sericulture_crop_area;
                            // Obj1.sprinkler_rabi_sericulture_fundingsource = result.sprinkler_rabi_sericulture_fundingsource;

                            Obj1.sprinkler_rabi_sericulture_irri_area = result.sprinkler_rabi_sericulture_irri_area;
                            Obj1.sprinkler_rabi_sericulture_waterdemand = result.sprinkler_rabi_sericulture_waterdemand;
                            Obj1.sprinkler_rabi_sericulture_sprinkler_waterdemand = result.sprinkler_rabi_sericulture_sprinkler_waterdemand;
                            Obj1.sprinkler_rabi_sericulture_reduction_gw_demand = result.sprinkler_rabi_sericulture_reduction_gw_demand;

                            //rabi tomoto

                            Obj1.sprinkler_rabi_tomoto_crop_area = result.sprinkler_rabi_tomoto_crop_area;
                            //  Obj1.sprinkler_rabi_tomoto_fundingsource = result.sprinkler_rabi_tomoto_fundingsource;

                            Obj1.sprinkler_rabi_tomoto_irri_area = result.sprinkler_rabi_tomoto_irri_area;
                            Obj1.sprinkler_rabi_tomoto_waterdemand = result.sprinkler_rabi_tomoto_waterdemand;
                            Obj1.sprinkler_rabi_tomoto_sprinkler_waterdemand = result.sprinkler_rabi_tomoto_sprinkler_waterdemand;
                            Obj1.sprinkler_rabi_tomoto_reduction_gw_demand = result.sprinkler_rabi_tomoto_reduction_gw_demand;

                            //rabi cabbage

                            //Obj1.sprinkler_rabi_cabbage_crop_area = result.sprinkler_rabi_cabbage_crop_area;
                            //  Obj1.sprinkler_rabi_cabbage_fundingsource = result.sprinkler_rabi_cabbage_fundingsource;

                            //Obj1.sprinkler_rabi_cabbage_irri_area = result.sprinkler_rabi_cabbage_irri_area;
                            //Obj1.sprinkler_rabi_cabbage_waterdemand = result.sprinkler_rabi_cabbage_waterdemand;
                            //Obj1.sprinkler_rabi_cabbage_sprinkler_waterdemand = result.sprinkler_rabi_cabbage_sprinkler_waterdemand;
                            //Obj1.sprinkler_rabi_cabbage_reduction_gw_demand = result.sprinkler_rabi_cabbage_reduction_gw_demand;

                            //rabi beans

                            //Obj1.sprinkler_rabi_beans_crop_area = result.sprinkler_rabi_beans_crop_area;
                            //  Obj1.sprinkler_rabi_beans_fundingsource = result.sprinkler_rabi_beans_fundingsource;

                            //Obj1.sprinkler_rabi_beans_irri_area = result.sprinkler_rabi_beans_irri_area;
                            //Obj1.sprinkler_rabi_beans_waterdemand = result.sprinkler_rabi_beans_waterdemand;
                            //Obj1.sprinkler_rabi_beans_sprinkler_waterdemand = result.sprinkler_rabi_beans_sprinkler_waterdemand;
                            //Obj1.sprinkler_rabi_beans_reduction_gw_demand = result.sprinkler_rabi_beans_reduction_gw_demand;

                            //rabi floriculture

                            Obj1.sprinkler_rabi_floriculture_crop_area = result.sprinkler_rabi_floriculture_crop_area;
                            //  Obj1.sprinkler_rabi_floriculture_fundingsource = result.sprinkler_rabi_floriculture_fundingsource;

                            Obj1.sprinkler_rabi_floriculture_irri_area = result.sprinkler_rabi_floriculture_irri_area;
                            Obj1.sprinkler_rabi_floriculture_waterdemand = result.sprinkler_rabi_floriculture_waterdemand;
                            Obj1.sprinkler_rabi_floriculture_sprinkler_waterdemand = result.sprinkler_rabi_floriculture_sprinkler_waterdemand;
                            Obj1.sprinkler_rabi_floriculture_reduction_gw_demand = result.sprinkler_rabi_floriculture_reduction_gw_demand;

                            //rabi potato

                            // Obj1.sprinkler_rabi_potato_crop_area = result.sprinkler_rabi_potato_crop_area;
                            //  Obj1.sprinkler_rabi_potato_fundingsource = result.sprinkler_rabi_potato_fundingsource;

                            //Obj1.sprinkler_rabi_potato_irri_area = result.sprinkler_rabi_potato_irri_area;
                            //Obj1.sprinkler_rabi_potato_waterdemand = result.sprinkler_rabi_potato_waterdemand;
                            //Obj1.sprinkler_rabi_potato_sprinkler_waterdemand = result.sprinkler_rabi_potato_sprinkler_waterdemand;
                            //Obj1.sprinkler_rabi_potato_reduction_gw_demand = result.sprinkler_rabi_potato_reduction_gw_demand;

                            //rabi cucumber

                            // Obj1.sprinkler_rabi_cucumber_crop_area = result.sprinkler_rabi_cucumber_crop_area;
                            //  Obj1.sprinkler_rabi_cucumber_fundingsource = result.sprinkler_rabi_cucumber_fundingsource;

                            //Obj1.sprinkler_rabi_cucumber_irri_area = result.sprinkler_rabi_cucumber_irri_area;
                            //Obj1.sprinkler_rabi_cucumber_waterdemand = result.sprinkler_rabi_cucumber_waterdemand;
                            //Obj1.sprinkler_rabi_cucumber_sprinkler_waterdemand = result.sprinkler_rabi_cucumber_sprinkler_waterdemand;
                            //Obj1.sprinkler_rabi_cucumber_reduction_gw_demand = result.sprinkler_rabi_cucumber_reduction_gw_demand;

                            //rabi ragi

                            Obj1.sprinkler_rabi_ragi_crop_area = result.sprinkler_rabi_ragi_crop_area;
                            //  Obj1.sprinkler_rabi_ragi_fundingsource = result.sprinkler_rabi_ragi_fundingsource;

                            Obj1.sprinkler_rabi_ragi_irri_area = result.sprinkler_rabi_ragi_irri_area;
                            Obj1.sprinkler_rabi_ragi_waterdemand = result.sprinkler_rabi_ragi_waterdemand;
                            Obj1.sprinkler_rabi_ragi_sprinkler_waterdemand = result.sprinkler_rabi_ragi_sprinkler_waterdemand;
                            Obj1.sprinkler_rabi_ragi_reduction_gw_demand = result.sprinkler_rabi_ragi_reduction_gw_demand;

                            //rabi sugarcane

                            Obj1.sprinkler_rabi_sugarcane_crop_area = result.sprinkler_rabi_sugarcane_crop_area;
                            //  Obj1.sprinkler_rabi_sugarcane_fundingsource = result.sprinkler_rabi_sugarcane_fundingsource;

                            Obj1.sprinkler_rabi_sugarcane_irri_area = result.sprinkler_rabi_sugarcane_irri_area;
                            Obj1.sprinkler_rabi_sugarcane_waterdemand = result.sprinkler_rabi_sugarcane_waterdemand;
                            Obj1.sprinkler_rabi_sugarcane_sprinkler_waterdemand = result.sprinkler_rabi_sugarcane_sprinkler_waterdemand;
                            Obj1.sprinkler_rabi_sugarcane_reduction_gw_demand = result.sprinkler_rabi_sugarcane_reduction_gw_demand;


                            //Rabi Maize
                            Obj1.sprinkler_rabi_maize_crop_area = result.sprinkler_rabi_maize_crop_area;
                            //  Obj1.sprinkler_rabi_maize_fundingsource = result.sprinkler_rabi_maize_fundingsource;

                            Obj1.sprinkler_rabi_maize_irri_area = result.sprinkler_rabi_maize_irri_area;
                            Obj1.sprinkler_rabi_maize_waterdemand = result.sprinkler_rabi_maize_waterdemand;
                            Obj1.sprinkler_rabi_maize_sprinkler_waterdemand = result.sprinkler_rabi_maize_sprinkler_waterdemand;
                            Obj1.sprinkler_rabi_maize_reduction_gw_demand = result.sprinkler_rabi_maize_reduction_gw_demand;

                            //rabi fodder

                            Obj1.sprinkler_rabi_fodder_crop_area = result.sprinkler_rabi_fodder_crop_area;
                            // Obj1.sprinkler_rabi_fodder_fundingsource = result.sprinkler_rabi_fodder_fundingsource;

                            Obj1.sprinkler_rabi_fodder_irri_area = result.sprinkler_rabi_fodder_irri_area;
                            Obj1.sprinkler_rabi_fodder_waterdemand = result.sprinkler_rabi_fodder_waterdemand;
                            Obj1.sprinkler_rabi_fodder_sprinkler_waterdemand = result.sprinkler_rabi_fodder_sprinkler_waterdemand;
                            Obj1.sprinkler_rabi_fodder_reduction_gw_demand = result.sprinkler_rabi_fodder_reduction_gw_demand;

                            //rabi paddy

                            Obj1.sprinkler_rabi_paddy_crop_area = result.sprinkler_rabi_paddy_crop_area;
                            // Obj1.sprinkler_rabi_paddy_fundingsource = result.sprinkler_rabi_paddy_fundingsource;

                            Obj1.sprinkler_rabi_paddy_irri_area = result.sprinkler_rabi_paddy_irri_area;
                            Obj1.sprinkler_rabi_paddy_waterdemand = result.sprinkler_rabi_paddy_waterdemand;
                            Obj1.sprinkler_rabi_paddy_sprinkler_waterdemand = result.sprinkler_rabi_paddy_sprinkler_waterdemand;
                            Obj1.sprinkler_rabi_paddy_reduction_gw_demand = result.sprinkler_rabi_paddy_reduction_gw_demand;

                            //rabi alfalfa

                            Obj1.sprinkler_rabi_alfalfa_crop_area = result.sprinkler_rabi_alfalfa_crop_area;
                            // Obj1.sprinkler_rabi_alfalfa_fundingsource = result.sprinkler_rabi_alfalfa_fundingsource;

                            Obj1.sprinkler_rabi_alfalfa_irri_area = result.sprinkler_rabi_alfalfa_irri_area;
                            Obj1.sprinkler_rabi_alfalfa_waterdemand = result.sprinkler_rabi_alfalfa_waterdemand;
                            Obj1.sprinkler_rabi_alfalfa_sprinkler_waterdemand = result.sprinkler_rabi_alfalfa_sprinkler_waterdemand;
                            Obj1.sprinkler_rabi_alfalfa_reduction_gw_demand = result.sprinkler_rabi_alfalfa_reduction_gw_demand;

                            // rabi onion

                            //Obj1.sprinkler_rabi_onion_crop_area = result.sprinkler_rabi_onion_crop_area;
                            //  Obj1.sprinkler_rabi_onion_fundingsource = result.sprinkler_rabi_onion_fundingsource;

                            //Obj1.sprinkler_rabi_onion_irri_area = result.sprinkler_rabi_onion_irri_area;
                            //Obj1.sprinkler_rabi_onion_waterdemand = result.sprinkler_rabi_onion_waterdemand;
                            //Obj1.sprinkler_rabi_onion_sprinkler_waterdemand = result.sprinkler_rabi_onion_sprinkler_waterdemand;
                            //Obj1.sprinkler_rabi_onion_reduction_gw_demand = result.sprinkler_rabi_onion_reduction_gw_demand;

                            //rabi horticulture

                            Obj1.sprinkler_rabi_horticulture_crop_area = result.sprinkler_rabi_horticulture_crop_area;
                            // Obj1.sprinkler_rabi_horticulture_fundingsource = result.sprinkler_rabi_horticulture_fundingsource;

                            Obj1.sprinkler_rabi_horticulture_irri_area = result.sprinkler_rabi_horticulture_irri_area;
                            Obj1.sprinkler_rabi_horticulture_waterdemand = result.sprinkler_rabi_horticulture_waterdemand;
                            Obj1.sprinkler_rabi_horticulture_sprinkler_waterdemand = result.sprinkler_rabi_horticulture_sprinkler_waterdemand;
                            Obj1.sprinkler_rabi_horticulture_reduction_gw_demand = result.sprinkler_rabi_horticulture_reduction_gw_demand;

                            //rabi sunflower
                            Obj1.sprinkler_rabi_sunflower_crop_area = result.sprinkler_rabi_sunflower_crop_area;
                            // Obj1.sprinkler_rabi_sunflower_fundingsource = result.sprinkler_rabi_sunflower_fundingsource;

                            Obj1.sprinkler_rabi_sunflower_irri_area = result.sprinkler_rabi_sunflower_irri_area;
                            Obj1.sprinkler_rabi_sunflower_waterdemand = result.sprinkler_rabi_sunflower_waterdemand;
                            Obj1.sprinkler_rabi_sunflower_sprinkler_waterdemand = result.sprinkler_rabi_sunflower_sprinkler_waterdemand;
                            Obj1.sprinkler_rabi_sunflower_reduction_gw_demand = result.sprinkler_rabi_sunflower_reduction_gw_demand;

                            //rabi crops total

                            Obj1.sprinkler_rabi_total_waterdemand = result.sprinkler_rabi_total_waterdemand;
                            Obj1.sprinkler_rabi_total_rabi_waterdemand = result.sprinkler_rabi_total_rabi_waterdemand;
                            Obj1.sprinkler_rabi_total_reduction_waterdemand = result.sprinkler_rabi_total_reduction_waterdemand;


                            //summer sericulture

                            Obj1.sprinkler_summer_sericulture_crop_area = result.sprinkler_summer_sericulture_crop_area;
                            // Obj1.sprinkler_summer_sericulture_fundingsource = result.sprinkler_summer_sericulture_fundingsource;

                            Obj1.sprinkler_summer_sericulture_irri_area = result.sprinkler_summer_sericulture_irri_area;
                            Obj1.sprinkler_summer_sericulture_waterdemand = result.sprinkler_summer_sericulture_waterdemand;
                            Obj1.sprinkler_summer_sericulture_sprinkler_waterdemand = result.sprinkler_summer_sericulture_sprinkler_waterdemand;
                            Obj1.sprinkler_summer_sericulture_reduction_gw_demand = result.sprinkler_summer_sericulture_reduction_gw_demand;

                            //summer tomoto

                            Obj1.sprinkler_summer_tomoto_crop_area = result.sprinkler_summer_tomoto_crop_area;
                            // Obj1.sprinkler_summer_tomoto_fundingsource = result.sprinkler_summer_tomoto_fundingsource;

                            Obj1.sprinkler_summer_tomoto_irri_area = result.sprinkler_summer_tomoto_irri_area;
                            Obj1.sprinkler_summer_tomoto_waterdemand = result.sprinkler_summer_tomoto_waterdemand;
                            Obj1.sprinkler_summer_tomoto_sprinkler_waterdemand = result.sprinkler_summer_tomoto_sprinkler_waterdemand;
                            Obj1.sprinkler_summer_tomoto_reduction_gw_demand = result.sprinkler_summer_tomoto_reduction_gw_demand;

                            //sumer cabbage

                            // Obj1.sprinkler_summer_cabbage_crop_area = result.sprinkler_summer_cabbage_crop_area;
                            // Obj1.sprinkler_summer_cabbage_fundingsource = result.sprinkler_summer_cabbage_fundingsource;

                            //Obj1.sprinkler_summer_cabbage_irri_area = result.sprinkler_summer_cabbage_irri_area;
                            //Obj1.sprinkler_summer_cabbage_waterdemand = result.sprinkler_summer_cabbage_waterdemand;
                            //Obj1.sprinkler_summer_cabbage_sprinkler_waterdemand = result.sprinkler_summer_cabbage_sprinkler_waterdemand;
                            //Obj1.sprinkler_summer_cabbage_reduction_gw_demand = result.sprinkler_summer_cabbage_reduction_gw_demand;

                            //summer beans

                            //Obj1.sprinkler_summer_beans_crop_area = result.sprinkler_summer_beans_crop_area;
                            // Obj1.sprinkler_summer_beans_fundingsource = result.sprinkler_summer_beans_fundingsource;

                            //Obj1.sprinkler_summer_beans_irri_area = result.sprinkler_summer_beans_irri_area;
                            //Obj1.sprinkler_summer_beans_waterdemand = result.sprinkler_summer_beans_waterdemand;
                            //Obj1.sprinkler_summer_beans_sprinkler_waterdemand = result.sprinkler_summer_beans_sprinkler_waterdemand;
                            //Obj1.sprinkler_summer_beans_reduction_gw_demand = result.sprinkler_summer_beans_reduction_gw_demand;

                            //summer floriculture

                            Obj1.sprinkler_summer_floriculture_crop_area = result.sprinkler_summer_floriculture_crop_area;
                            // Obj1.sprinkler_summer_floriculture_fundingsource = result.sprinkler_summer_floriculture_fundingsource;

                            Obj1.sprinkler_summer_floriculture_irri_area = result.sprinkler_summer_floriculture_irri_area;
                            Obj1.sprinkler_summer_floriculture_waterdemand = result.sprinkler_summer_floriculture_waterdemand;
                            Obj1.sprinkler_summer_floriculture_sprinkler_waterdemand = result.sprinkler_summer_floriculture_sprinkler_waterdemand;
                            Obj1.sprinkler_summer_floriculture_reduction_gw_demand = result.sprinkler_summer_floriculture_reduction_gw_demand;

                            //summer maize
                            Obj1.sprinkler_summer_maize_crop_area = result.sprinkler_summer_maize_crop_area;
                            //Obj1.sprinkler_summer_maize_fundingsource = result.sprinkler_summer_maize_fundingsource;

                            Obj1.sprinkler_summer_maize_irri_area = result.sprinkler_summer_maize_irri_area;
                            Obj1.sprinkler_summer_maize_waterdemand = result.sprinkler_summer_maize_waterdemand;
                            Obj1.sprinkler_summer_maize_sprinkler_waterdemand = result.sprinkler_summer_maize_sprinkler_waterdemand;
                            Obj1.sprinkler_summer_maize_reduction_gw_demand = result.sprinkler_summer_maize_sprinkler_waterdemand;

                            //summer fodder
                            Obj1.sprinkler_summer_fodder_crop_area = result.sprinkler_summer_fodder_crop_area;
                            //Obj1.sprinkler_summer_fodder_fundingsource = result.sprinkler_summer_fodder_fundingsource;

                            Obj1.sprinkler_summer_fodder_irri_area = result.sprinkler_summer_fodder_irri_area;
                            Obj1.sprinkler_summer_fodder_waterdemand = result.sprinkler_summer_fodder_waterdemand;
                            Obj1.sprinkler_summer_fodder_sprinkler_waterdemand = result.sprinkler_summer_fodder_sprinkler_waterdemand;
                            Obj1.sprinkler_summer_fodder_reduction_gw_demand = result.sprinkler_summer_fodder_reduction_gw_demand;

                            //summer sugarcane

                            Obj1.sprinkler_summer_sugarcane_crop_area = result.sprinkler_summer_sugarcane_crop_area;
                            //Obj1.sprinkler_summer_sugarcane_fundingsource = result.sprinkler_summer_sugarcane_fundingsource;

                            Obj1.sprinkler_summer_sugarcane_irri_area = result.sprinkler_summer_sugarcane_irri_area;
                            Obj1.sprinkler_summer_sugarcane_waterdemand = result.sprinkler_summer_sugarcane_waterdemand;
                            Obj1.sprinkler_summer_sugarcane_sprinkler_waterdemand = result.sprinkler_summer_sugarcane_sprinkler_waterdemand;
                            Obj1.sprinkler_summer_sugarcane_reduction_gw_demand = result.sprinkler_summer_sugarcane_reduction_gw_demand;


                            //summer crops total
                            Obj1.sprinkler_summer_total_waterdemand = result.sprinkler_summer_total_waterdemand;
                            Obj1.sprinkler_summer_total_summer_waterdemand = result.sprinkler_summer_total_summer_waterdemand;
                            Obj1.sprinkler_summer_total_reduction_waterdemand = result.sprinkler_summer_total_reduction_waterdemand;
                            Obj1.statename = StateName;
                            Obj1.userid = Convert.ToInt32(userid);
                            //annual total
                            Obj1.sprinkler_annual_reduction_waterdemand = result.sprinkler_annual_reduction_waterdemand;

                            Obj1.latitude = result.latitude;
                            Obj1.longitude = result.longitude;

                            //new columns water requirement
                            Obj1.sprinkler_kharif_paddy_water_req = result.sprinkler_kharif_paddy_water_req;
                            Obj1.sprinkler_kharif_ragi_water_req = result.sprinkler_kharif_ragi_water_req;
                            Obj1.sprinkler_kharif_groundnut_water_req = result.sprinkler_kharif_groundnut_water_req;
                            Obj1.sprinkler_kharif_sugarcane_water_req = result.sprinkler_kharif_sugarcane_water_req;
                            Obj1.sprinkler_kharif_tomoto_water_req = result.sprinkler_kharif_tomoto_water_req;
                            // Obj1.sprinkler_kharif_cabbage_water_req = result.sprinkler_kharif_cabbage_water_req;
                            //Obj1.sprinkler_kharif_beans_water_req = result.sprinkler_kharif_beans_water_req;
                            Obj1.sprinkler_kharif_floriculture_water_req = result.sprinkler_kharif_floriculture_water_req;
                            Obj1.sprinkler_kharif_sericulture_water_req = result.sprinkler_kharif_sericulture_water_req;
                            //Obj1.sprinkler_kharif_cucumber_water_req = result.sprinkler_kharif_cucumber_water_req;
                            Obj1.sprinkler_kharif_banana_water_req = result.sprinkler_kharif_banana_water_req;
                            Obj1.sprinkler_kharif_fodder_water_req = result.sprinkler_kharif_fodder_water_req;
                            Obj1.sprinkler_kharif_maize_water_req = result.sprinkler_kharif_maize_water_req;
                            // Obj1.sprinkler_kharif_potato_water_req = result.sprinkler_kharif_potato_water_req;
                            Obj1.sprinkler_kharif_chillies_water_req = result.sprinkler_kharif_chillies_water_req;
                            Obj1.sprinkler_kharif_cotton_water_req = result.sprinkler_kharif_cotton_water_req;
                            Obj1.sprinkler_kharif_melon_water_req = result.sprinkler_kharif_melon_water_req;
                            Obj1.sprinkler_kharif_citrus_water_req = result.sprinkler_kharif_citrus_water_req;
                            // Obj1.sprinkler_kharif_peanut_water_req = result.sprinkler_kharif_peanut_water_req;
                            Obj1.sprinkler_kharif_horticulture_water_req = result.sprinkler_kharif_horticulture_water_req;
                            Obj1.sprinkler_summer_sugarcane_irri_area = result.sprinkler_summer_sugarcane_irri_area;

                            Obj1.sprinkler_rabi_sericulture_water_req = result.sprinkler_rabi_sericulture_water_req;
                            Obj1.sprinkler_rabi_tomoto_water_req = result.sprinkler_rabi_tomoto_water_req;
                            // Obj1.sprinkler_rabi_cabbage_water_req = result.sprinkler_rabi_cabbage_water_req;
                            // Obj1.sprinkler_rabi_beans_water_req = result.sprinkler_rabi_beans_water_req;
                            Obj1.sprinkler_rabi_floriculture_water_req = result.sprinkler_rabi_floriculture_water_req;
                            // Obj1.sprinkler_rabi_potato_water_req = result.sprinkler_rabi_potato_water_req;
                            // Obj1.sprinkler_rabi_cucumber_water_req = result.sprinkler_rabi_cucumber_water_req;
                            Obj1.sprinkler_rabi_ragi_water_req = result.sprinkler_rabi_ragi_water_req;
                            Obj1.sprinkler_rabi_sugarcane_water_req = result.sprinkler_rabi_sugarcane_water_req;
                            Obj1.sprinkler_rabi_maize_water_req = result.sprinkler_rabi_maize_water_req;
                            Obj1.sprinkler_rabi_fodder_water_req = result.sprinkler_rabi_fodder_water_req;
                            Obj1.sprinkler_rabi_paddy_water_req = result.sprinkler_rabi_paddy_water_req;
                            Obj1.sprinkler_rabi_alfalfa_water_req = result.sprinkler_rabi_alfalfa_water_req;
                            // Obj1.sprinkler_rabi_onion_water_req = result.sprinkler_rabi_onion_water_req;
                            Obj1.sprinkler_rabi_horticulture_water_req = result.sprinkler_rabi_horticulture_water_req;
                            Obj1.sprinkler_rabi_sunflower_water_req = result.sprinkler_rabi_sunflower_water_req;

                            Obj1.sprinkler_summer_sericulture_water_req = result.sprinkler_summer_sericulture_water_req;
                            Obj1.sprinkler_summer_tomoto_water_req = result.sprinkler_summer_tomoto_water_req;
                            // Obj1.sprinkler_summer_cabbage_water_req = result.sprinkler_summer_cabbage_water_req;
                            // Obj1.sprinkler_summer_beans_water_req = result.sprinkler_summer_beans_water_req;
                            Obj1.sprinkler_summer_floriculture_water_req = result.sprinkler_summer_floriculture_water_req;
                            Obj1.sprinkler_summer_maize_water_req = result.sprinkler_summer_maize_water_req;
                            Obj1.sprinkler_summer_fodder_water_req = result.sprinkler_summer_fodder_water_req;
                            Obj1.sprinkler_summer_sugarcane_water_req = result.sprinkler_summer_sugarcane_water_req;
                            Obj1.sprinkler_other_funding_source = result.sprinkler_other_funding_source;
                            //other crops kharif
                            //Obj1.sprinkler_kharif_othercrop_name = result.sprinkler_kharif_othercrop_name;
                            //Obj1.sprinkler_kharif_othercrop_area = result.sprinkler_kharif_othercrop_area;
                            //Obj1.sprinkler_kharif_othercrop_irri_area = result.sprinkler_kharif_othercrop_irri_area;
                            //Obj1.sprinkler_kharif_othercrop_water_req = result.sprinkler_kharif_othercrop_water_req;

                            //Obj1.sprinkler_kharif_othyercrop_waterdemand = result.sprinkler_kharif_othyercrop_waterdemand;
                            //Obj1.sprinkler_kharif_othercrop_sprinkler_waterdemand = result.sprinkler_kharif_othercrop_sprinkler_waterdemand;
                            //Obj1.sprinkler_kharif_othercrop_reduc_gw_demand = result.sprinkler_kharif_othercrop_reduc_gw_demand;

                            ////rabi other crops
                            //Obj1.sprinkler_rabi_othercrop_name = result.sprinkler_rabi_othercrop_name;
                            //Obj1.sprinkler_rabi_othercrop_area = result.sprinkler_rabi_othercrop_area;
                            //Obj1.sprinkler_rabi_othercrop_irri_area = result.sprinkler_rabi_othercrop_irri_area;
                            //Obj1.sprinkler_rabi_othercrop_water_req = result.sprinkler_rabi_othercrop_water_req;

                            //Obj1.sprinkler_rabi_othyercrop_waterdemand = result.sprinkler_rabi_othyercrop_waterdemand;
                            //Obj1.sprinkler_rabi_othercrop_sprinkler_waterdemand = result.sprinkler_rabi_othercrop_sprinkler_waterdemand;
                            //Obj1.sprinkler_rabi_othercrop_reduc_gw_demand = result.sprinkler_rabi_othercrop_reduc_gw_demand;

                            ////summer other crops
                            //Obj1.sprinkler_summer_othercrop_name = result.sprinkler_summer_othercrop_name;
                            //Obj1.sprinkler_summer_othercrop_area = result.sprinkler_summer_othercrop_area;
                            //Obj1.sprinkler_summer_othercrop_irri_area = result.sprinkler_summer_othercrop_irri_area;
                            //Obj1.sprinkler_summer_othercrop_water_req = result.sprinkler_summer_othercrop_water_req;

                            //Obj1.sprinkler_summer_othyercrop_waterdemand = result.sprinkler_summer_othyercrop_waterdemand;
                            //Obj1.sprinkler_summer_othercrop_sprinkler_waterdemand = result.sprinkler_summer_othercrop_sprinkler_waterdemand;
                            //Obj1.sprinkler_summer_othercrop_reduc_gw_demand = result.sprinkler_summer_othercrop_reduc_gw_demand;

                            var TodayDate1 = DateTime.Now.ToString();
                            var Datea = TodayDate1.Split('/', ' ', '-', '.');
                            //var Datea = TodayDate1.Split('/', ' ');
                            var Today1 = Datea[1] + '/' + Datea[0] + '/' + Datea[2];
                            Obj1.date_time = Today1;
                            // Latest

                            Obj1.sprinkler_kharif_othercrop_name1 = result.sprinkler_kharif_othercrop_name1;
                            Obj1.sprinkler_kharif_othercrop_area1 = result.sprinkler_kharif_othercrop_area1;
                            Obj1.sprinkler_kharif_othercrop_irri_area1 = result.sprinkler_kharif_othercrop_irri_area1;
                            Obj1.sprinkler_kharif_othercrop_water_req1 = result.sprinkler_kharif_othercrop_water_req1;
                            Obj1.sprinkler_kharif_othercrop_waterdemand1 = result.sprinkler_kharif_othercrop_waterdemand1;
                            Obj1.sprinkler_kharif_othercrop_name2 = result.sprinkler_kharif_othercrop_name2;
                            Obj1.sprinkler_kharif_othercrop_area2 = result.sprinkler_kharif_othercrop_area2;
                            Obj1.sprinkler_kharif_othercrop_irri_area2 = result.sprinkler_kharif_othercrop_irri_area2;
                            Obj1.sprinkler_kharif_othercrop_water_req2 = result.sprinkler_kharif_othercrop_water_req2;
                            Obj1.sprinkler_kharif_othercrop_waterdemand2 = result.sprinkler_kharif_othercrop_waterdemand2;
                            Obj1.sprinkler_kharif_othercrop_name3 = result.sprinkler_kharif_othercrop_name3;
                            Obj1.sprinkler_kharif_othercrop_area3 = result.sprinkler_kharif_othercrop_area3;
                            Obj1.sprinkler_kharif_othercrop_irri_area3 = result.sprinkler_kharif_othercrop_irri_area3;
                            Obj1.sprinkler_kharif_othercrop_water_req3 = result.sprinkler_kharif_othercrop_water_req3;
                            Obj1.sprinkler_kharif_othercrop_waterdemand3 = result.sprinkler_kharif_othercrop_waterdemand3;
                            Obj1.sprinkler_kharif_othercrop_waterdemand1 = result.sprinkler_kharif_othercrop_waterdemand1;
                            Obj1.sprinkler_kharif_othercrop_sprinkler_waterdemand1 = result.sprinkler_kharif_othercrop_sprinkler_waterdemand1;
                            Obj1.sprinkler_kharif_othercrop_reduc_gw_demand1 = result.sprinkler_kharif_othercrop_reduc_gw_demand1;

                            Obj1.sprinkler_kharif_othercrop_waterdemand2 = result.sprinkler_kharif_othercrop_waterdemand2;
                            Obj1.sprinkler_kharif_othercrop_sprinkler_waterdemand2 = result.sprinkler_kharif_othercrop_sprinkler_waterdemand2;
                            Obj1.sprinkler_kharif_othercrop_reduc_gw_demand2 = result.sprinkler_kharif_othercrop_reduc_gw_demand2;

                            Obj1.sprinkler_kharif_othercrop_waterdemand3 = result.sprinkler_kharif_othercrop_waterdemand3;
                            Obj1.sprinkler_kharif_othercrop_sprinkler_waterdemand3 = result.sprinkler_kharif_othercrop_sprinkler_waterdemand3;
                            Obj1.sprinkler_kharif_othercrop_reduc_gw_demand3 = result.sprinkler_kharif_othercrop_reduc_gw_demand3;


                            Obj1.sprinkler_kharif_othercrop_name4 = result.sprinkler_kharif_othercrop_name4;
                            Obj1.sprinkler_kharif_othercrop_area4 = result.sprinkler_kharif_othercrop_area4;
                            Obj1.sprinkler_kharif_othercrop_irri_area4 = result.sprinkler_kharif_othercrop_irri_area4;
                            Obj1.sprinkler_kharif_othercrop_water_req4 = result.sprinkler_kharif_othercrop_water_req4;
                            Obj1.sprinkler_kharif_othercrop_waterdemand4 = result.sprinkler_kharif_othercrop_waterdemand4;

                            Obj1.sprinkler_kharif_othercrop_waterdemand4 = result.sprinkler_kharif_othercrop_waterdemand4;
                            Obj1.sprinkler_kharif_othercrop_sprinkler_waterdemand4 = result.sprinkler_kharif_othercrop_sprinkler_waterdemand4;
                            Obj1.sprinkler_kharif_othercrop_reduc_gw_demand4 = result.sprinkler_kharif_othercrop_reduc_gw_demand4;

                            Obj1.sprinkler_kharif_othercrop_name5 = result.sprinkler_kharif_othercrop_name5;
                            Obj1.sprinkler_kharif_othercrop_area5 = result.sprinkler_kharif_othercrop_area5;
                            Obj1.sprinkler_kharif_othercrop_irri_area5 = result.sprinkler_kharif_othercrop_irri_area5;
                            Obj1.sprinkler_kharif_othercrop_water_req5 = result.sprinkler_kharif_othercrop_water_req5;
                            Obj1.sprinkler_kharif_othercrop_waterdemand5 = result.sprinkler_kharif_othercrop_waterdemand5;

                            Obj1.sprinkler_kharif_othercrop_waterdemand5 = result.sprinkler_kharif_othercrop_waterdemand5;
                            Obj1.sprinkler_kharif_othercrop_sprinkler_waterdemand5 = result.sprinkler_kharif_othercrop_sprinkler_waterdemand5;
                            Obj1.sprinkler_kharif_othercrop_reduc_gw_demand5 = result.sprinkler_kharif_othercrop_reduc_gw_demand5;

                            //rabi
                            Obj1.sprinkler_rabi_othercrop_name1 = result.sprinkler_rabi_othercrop_name1;
                            Obj1.sprinkler_rabi_othercrop_area1 = result.sprinkler_rabi_othercrop_area1;
                            Obj1.sprinkler_rabi_othercrop_irri_area1 = result.sprinkler_rabi_othercrop_irri_area1;
                            Obj1.sprinkler_rabi_othercrop_water_req1 = result.sprinkler_rabi_othercrop_water_req1;
                            Obj1.sprinkler_rabi_othercrop_waterdemand1 = result.sprinkler_rabi_othercrop_waterdemand1;

                            Obj1.sprinkler_rabi_othercrop_waterdemand1 = result.sprinkler_rabi_othercrop_waterdemand1;
                            Obj1.sprinkler_rabi_othercrop_sprinkler_waterdemand1 = result.sprinkler_rabi_othercrop_sprinkler_waterdemand1;
                            Obj1.sprinkler_rabi_othercrop_reduc_gw_demand1 = result.sprinkler_rabi_othercrop_reduc_gw_demand1;

                            Obj1.sprinkler_rabi_othercrop_name2 = result.sprinkler_rabi_othercrop_name2;
                            Obj1.sprinkler_rabi_othercrop_area2 = result.sprinkler_rabi_othercrop_area2;
                            Obj1.sprinkler_rabi_othercrop_irri_area2 = result.sprinkler_rabi_othercrop_irri_area2;
                            Obj1.sprinkler_rabi_othercrop_water_req2 = result.sprinkler_rabi_othercrop_water_req2;
                            Obj1.sprinkler_rabi_othercrop_waterdemand2 = result.sprinkler_rabi_othercrop_waterdemand2;

                            Obj1.sprinkler_rabi_othercrop_waterdemand2 = result.sprinkler_rabi_othercrop_waterdemand2;
                            Obj1.sprinkler_rabi_othercrop_sprinkler_waterdemand2 = result.sprinkler_rabi_othercrop_sprinkler_waterdemand2;
                            Obj1.sprinkler_rabi_othercrop_reduc_gw_demand2 = result.sprinkler_rabi_othercrop_reduc_gw_demand2;

                            Obj1.sprinkler_rabi_othercrop_name3 = result.sprinkler_rabi_othercrop_name3;
                            Obj1.sprinkler_rabi_othercrop_area3 = result.sprinkler_rabi_othercrop_area3;
                            Obj1.sprinkler_rabi_othercrop_irri_area3 = result.sprinkler_rabi_othercrop_irri_area3;
                            Obj1.sprinkler_rabi_othercrop_water_req3 = result.sprinkler_rabi_othercrop_water_req3;
                            Obj1.sprinkler_rabi_othercrop_waterdemand3 = result.sprinkler_rabi_othercrop_waterdemand3;

                            Obj1.sprinkler_rabi_othercrop_waterdemand3 = result.sprinkler_rabi_othercrop_waterdemand3;
                            Obj1.sprinkler_rabi_othercrop_sprinkler_waterdemand3 = result.sprinkler_rabi_othercrop_sprinkler_waterdemand3;
                            Obj1.sprinkler_rabi_othercrop_reduc_gw_demand3 = result.sprinkler_rabi_othercrop_reduc_gw_demand3;

                            Obj1.sprinkler_rabi_othercrop_name4 = result.sprinkler_rabi_othercrop_name4;
                            Obj1.sprinkler_rabi_othercrop_area4 = result.sprinkler_rabi_othercrop_area4;
                            Obj1.sprinkler_rabi_othercrop_irri_area4 = result.sprinkler_rabi_othercrop_irri_area4;
                            Obj1.sprinkler_rabi_othercrop_water_req4 = result.sprinkler_rabi_othercrop_water_req4;
                            Obj1.sprinkler_rabi_othercrop_waterdemand4 = result.sprinkler_rabi_othercrop_waterdemand4;

                            Obj1.sprinkler_rabi_othercrop_waterdemand4 = result.sprinkler_rabi_othercrop_waterdemand4;
                            Obj1.sprinkler_rabi_othercrop_sprinkler_waterdemand4 = result.sprinkler_rabi_othercrop_sprinkler_waterdemand4;
                            Obj1.sprinkler_rabi_othercrop_reduc_gw_demand4 = result.sprinkler_rabi_othercrop_reduc_gw_demand4;

                            Obj1.sprinkler_rabi_othercrop_name5 = result.sprinkler_rabi_othercrop_name5;
                            Obj1.sprinkler_rabi_othercrop_area5 = result.sprinkler_rabi_othercrop_area5;
                            Obj1.sprinkler_rabi_othercrop_irri_area5 = result.sprinkler_rabi_othercrop_irri_area5;
                            Obj1.sprinkler_rabi_othercrop_water_req5 = result.sprinkler_rabi_othercrop_water_req5;
                            Obj1.sprinkler_rabi_othercrop_waterdemand5 = result.sprinkler_rabi_othercrop_waterdemand5;

                            Obj1.sprinkler_rabi_othercrop_waterdemand5 = result.sprinkler_rabi_othercrop_waterdemand5;
                            Obj1.sprinkler_rabi_othercrop_sprinkler_waterdemand5 = result.sprinkler_rabi_othercrop_sprinkler_waterdemand5;
                            Obj1.sprinkler_rabi_othercrop_reduc_gw_demand5 = result.sprinkler_rabi_othercrop_reduc_gw_demand5;

                            //summer
                            Obj1.sprinkler_summer_othercrop_name1 = result.sprinkler_summer_othercrop_name1;
                            Obj1.sprinkler_summer_othercrop_area1 = result.sprinkler_summer_othercrop_area1;
                            Obj1.sprinkler_summer_othercrop_irri_area1 = result.sprinkler_summer_othercrop_irri_area1;
                            Obj1.sprinkler_summer_othercrop_water_req1 = result.sprinkler_summer_othercrop_water_req1;
                            Obj1.sprinkler_summer_othercrop_waterdemand1 = result.sprinkler_summer_othercrop_waterdemand1;

                            Obj1.sprinkler_summer_othercrop_waterdemand1 = result.sprinkler_summer_othercrop_waterdemand1;
                            Obj1.sprinkler_summer_othercrop_sprinkler_waterdemand1 = result.sprinkler_summer_othercrop_sprinkler_waterdemand1;
                            Obj1.sprinkler_summer_othercrop_reduc_gw_demand1 = result.sprinkler_summer_othercrop_reduc_gw_demand1;

                            Obj1.sprinkler_summer_othercrop_name2 = result.sprinkler_summer_othercrop_name2;
                            Obj1.sprinkler_summer_othercrop_area2 = result.sprinkler_summer_othercrop_area2;
                            Obj1.sprinkler_summer_othercrop_irri_area2 = result.sprinkler_summer_othercrop_irri_area2;
                            Obj1.sprinkler_summer_othercrop_water_req2 = result.sprinkler_summer_othercrop_water_req2;
                            Obj1.sprinkler_summer_othercrop_waterdemand2 = result.sprinkler_summer_othercrop_waterdemand2;

                            Obj1.sprinkler_summer_othercrop_waterdemand2 = result.sprinkler_summer_othercrop_waterdemand2;
                            Obj1.sprinkler_summer_othercrop_sprinkler_waterdemand2 = result.sprinkler_summer_othercrop_sprinkler_waterdemand2;
                            Obj1.sprinkler_summer_othercrop_reduc_gw_demand2 = result.sprinkler_summer_othercrop_reduc_gw_demand2;

                            Obj1.sprinkler_summer_othercrop_name3 = result.sprinkler_summer_othercrop_name3;
                            Obj1.sprinkler_summer_othercrop_area3 = result.sprinkler_summer_othercrop_area3;
                            Obj1.sprinkler_summer_othercrop_irri_area3 = result.sprinkler_summer_othercrop_irri_area3;
                            Obj1.sprinkler_summer_othercrop_water_req3 = result.sprinkler_summer_othercrop_water_req3;
                            Obj1.sprinkler_summer_othercrop_waterdemand3 = result.sprinkler_summer_othercrop_waterdemand3;

                            Obj1.sprinkler_summer_othercrop_waterdemand3 = result.sprinkler_summer_othercrop_waterdemand3;
                            Obj1.sprinkler_summer_othercrop_sprinkler_waterdemand3 = result.sprinkler_summer_othercrop_sprinkler_waterdemand3;
                            Obj1.sprinkler_summer_othercrop_reduc_gw_demand3 = result.sprinkler_summer_othercrop_reduc_gw_demand3;

                            Obj1.sprinkler_summer_othercrop_name4 = result.sprinkler_summer_othercrop_name4;
                            Obj1.sprinkler_summer_othercrop_area4 = result.sprinkler_summer_othercrop_area4;
                            Obj1.sprinkler_summer_othercrop_irri_area4 = result.sprinkler_summer_othercrop_irri_area4;
                            Obj1.sprinkler_summer_othercrop_water_req4 = result.sprinkler_summer_othercrop_water_req4;
                            Obj1.sprinkler_summer_othercrop_waterdemand4 = result.sprinkler_summer_othercrop_waterdemand4;

                            Obj1.sprinkler_summer_othercrop_waterdemand4 = result.sprinkler_summer_othercrop_waterdemand4;
                            Obj1.sprinkler_summer_othercrop_sprinkler_waterdemand4 = result.sprinkler_summer_othercrop_sprinkler_waterdemand4;
                            Obj1.sprinkler_summer_othercrop_reduc_gw_demand4 = result.sprinkler_summer_othercrop_reduc_gw_demand4;

                            Obj1.sprinkler_summer_othercrop_name5 = result.sprinkler_summer_othercrop_name5;
                            Obj1.sprinkler_summer_othercrop_area5 = result.sprinkler_summer_othercrop_area5;
                            Obj1.sprinkler_summer_othercrop_irri_area5 = result.sprinkler_summer_othercrop_irri_area5;
                            Obj1.sprinkler_summer_othercrop_water_req5 = result.sprinkler_summer_othercrop_water_req5;
                            Obj1.sprinkler_summer_othercrop_waterdemand5 = result.sprinkler_summer_othercrop_waterdemand5;

                            Obj1.sprinkler_summer_othercrop_waterdemand5 = result.sprinkler_summer_othercrop_waterdemand5;
                            Obj1.sprinkler_summer_othercrop_sprinkler_waterdemand5 = result.sprinkler_summer_othercrop_sprinkler_waterdemand5;
                            Obj1.sprinkler_summer_othercrop_reduc_gw_demand5 = result.sprinkler_summer_othercrop_reduc_gw_demand5;

                            ABE.obj_sprinkler.Add(Obj1);
                            ABE.SaveChanges();
                            return Json("Saved Successfully", JsonRequestBehavior.AllowGet);
                        }
                        else
                        {
                            return Json("Dupliacate data is there");
                        }

                    }
                }
                catch (Exception ex)
                {
                    return Json(ex);
                }
            }
            else
            {

                return RedirectToAction("WSP_GWM_HOME", "WspNew");
            }
        }

        [HttpPost]
        public ActionResult WaterAvailabilty_SavedInfo(string Data)
        {
            if (Session["UserId"] != null)
            {
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<Abhy_Water_Avalibility>(Data);
                var OBJ11 = new Abhy_Water_Avalibility();
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
                var userid = Session["UserId"];

                OBJ11.blockname = BlockName;
                OBJ11.districtname = DistName;
                OBJ11.gpname = GramName;
                OBJ11.ground_water_canals_avg_perimeter = result.ground_water_canals_avg_perimeter;
                OBJ11.ground_water_canals_flowing_days = result.ground_water_canals_flowing_days;
                OBJ11.ground_water_canals_gw_availability = result.ground_water_canals_gw_availability;
                OBJ11.ground_water_canals_gw_recharge = result.ground_water_canals_gw_recharge;
                OBJ11.ground_water_canals_length_of_canal = result.ground_water_canals_length_of_canal;
                OBJ11.ground_water_canals_netground_avail = result.ground_water_canals_netground_avail;
                OBJ11.ground_water_canals_seepagefactor = result.ground_water_canals_seepagefactor;
                OBJ11.ground_water_canals_soil_type = result.ground_water_canals_soil_type;
                OBJ11.ground_water_canals_type_of_canal = result.ground_water_canals_type_of_canal;
                OBJ11.ground_water_checkdams_avg_depth = result.ground_water_checkdams_avg_depth;
                OBJ11.ground_water_checkdams_gw_available = result.ground_water_checkdams_gw_available;
                OBJ11.ground_water_checkdams_gw_recharge = result.ground_water_checkdams_gw_recharge;
                OBJ11.ground_water_checkdams_netground_aval = result.ground_water_checkdams_netground_aval;
                OBJ11.ground_water_checkdams_noof_filling = result.ground_water_checkdams_noof_filling;
                OBJ11.ground_water_checkdams_submergence = result.ground_water_checkdams_submergence;
                OBJ11.ground_water_irri_area_under_nonpaddy = result.ground_water_irri_area_under_nonpaddy;
                OBJ11.ground_water_irri_area_under_paddy = result.ground_water_irri_area_under_paddy;
                OBJ11.ground_water_irri_draft = result.ground_water_irri_draft;
                OBJ11.ground_water_irri_gw_availability = result.ground_water_irri_gw_availability;
                OBJ11.ground_water_irri_gw_recharge = result.ground_water_irri_gw_recharge;
                OBJ11.ground_water_irri_netground_avail = result.ground_water_irri_netground_avail;
                OBJ11.ground_water_irri_non_command_area = result.ground_water_irri_non_command_area;
                OBJ11.ground_water_lake_daysof_submergence = result.ground_water_lake_daysof_submergence;
                OBJ11.ground_water_lake_gw_availability = result.ground_water_lake_gw_availability;
                OBJ11.ground_water_lake_gw_recharge = result.ground_water_lake_gw_recharge;
                OBJ11.ground_water_lake_netground_avail = result.ground_water_lake_netground_avail;
                OBJ11.ground_water_lake_reachaege_rate = result.ground_water_lake_reachaege_rate;
                OBJ11.ground_water_lake_submergence_area = result.ground_water_lake_submergence_area;
                OBJ11.ground_water_rainfall_avalibility = result.ground_water_rainfall_avalibility;
                OBJ11.ground_water_rainfall_avg_annual = result.ground_water_rainfall_avg_annual;
                OBJ11.ground_water_rainfall_catchment_area = result.ground_water_rainfall_catchment_area;
                OBJ11.ground_water_rainfall_geology = result.ground_water_rainfall_geology;
                OBJ11.ground_water_rainfall_netground_avail = result.ground_water_rainfall_netground_avail;
                OBJ11.ground_water_rainfall_recharge = result.ground_water_rainfall_recharge;
                OBJ11.ground_water_rainfall_recharge_factor = result.ground_water_rainfall_recharge_factor;
                OBJ11.ground_water_reservoirs_capacity = result.ground_water_reservoirs_capacity;
                OBJ11.ground_water_reservoirs_geology = result.ground_water_reservoirs_geology;
                OBJ11.ground_water_reservoirs_gw_avail = result.ground_water_reservoirs_gw_avail;
                OBJ11.ground_water_reservoirs_gw_recharge = result.ground_water_reservoirs_gw_recharge;
                OBJ11.ground_water_reservoirs_ng_avail = result.ground_water_reservoirs_ng_avail;
                OBJ11.ground_water_reservoirs_rechargefact = result.ground_water_reservoirs_rechargefact;
                OBJ11.net_water_availability_canals = result.net_water_availability_canals;
                OBJ11.net_water_availability_checkdams = result.net_water_availability_checkdams;
                OBJ11.net_water_availability_lakes_ponds = result.net_water_availability_lakes_ponds;
                OBJ11.net_water_availability_rainfall = result.net_water_availability_rainfall;
                OBJ11.net_water_availability_reservoirs = result.net_water_availability_reservoirs;
                OBJ11.statename = StateName;
                OBJ11.surface_water_canals_area_of_canal = result.surface_water_canals_area_of_canal;
                OBJ11.surface_water_canals_avg_depth = result.surface_water_canals_avg_depth;
                OBJ11.surface_water_canals_discharge = result.surface_water_canals_discharge;
                OBJ11.surface_water_canals_evapo = result.surface_water_canals_evapo;
                OBJ11.surface_water_canals_noof_canals = result.surface_water_canals_noof_canals;
                OBJ11.surface_water_canals_sw_available = result.surface_water_canals_sw_available;
                OBJ11.surface_water_checkdams_avg_depth = result.surface_water_checkdams_avg_depth;
                OBJ11.surface_water_checkdams_capacity = result.surface_water_checkdams_capacity;
                OBJ11.surface_water_checkdams_evapo = result.surface_water_checkdams_evapo;
                OBJ11.surface_water_checkdams_noof_dams = result.surface_water_checkdams_noof_dams;
                OBJ11.surface_water_checkdams_sw_avail = result.surface_water_checkdams_sw_avail;
                OBJ11.surface_water_irri_area_under_nonpaddy = result.surface_water_irri_area_under_nonpaddy;
                OBJ11.surface_water_irri_area_under_paddy = result.surface_water_irri_area_under_paddy;
                OBJ11.surface_water_irri_days_waterreleased = result.surface_water_irri_days_waterreleased;
                OBJ11.surface_water_irri_discharge_outlet = result.surface_water_irri_discharge_outlet;
                OBJ11.surface_water_irri_gwl_command_area = result.surface_water_irri_gwl_command_area;
                OBJ11.surface_water_irri_gw_availbility = result.surface_water_irri_gw_availbility;
                OBJ11.surface_water_irri_gw_recharge = result.surface_water_irri_gw_recharge;
                OBJ11.surface_water_irri_netground_avail = result.surface_water_irri_netground_avail;
                OBJ11.surface_water_irri_tolwater_released = result.surface_water_irri_tolwater_released;
                OBJ11.surface_water_lake_average_depth = result.surface_water_lake_average_depth;
                OBJ11.surface_water_lake_evapo = result.surface_water_lake_evapo;
                OBJ11.surface_water_lake_noof_lake_pond = result.surface_water_lake_noof_lake_pond;
                OBJ11.surface_water_lake_tol_catchment_area = result.surface_water_lake_tol_catchment_area;
                OBJ11.surface_water_lake_water_availability = result.surface_water_lake_water_availability;
                OBJ11.surface_water_rainfall_avalibility = result.surface_water_rainfall_avalibility;
                OBJ11.surface_water_rainfall_avg_annual = result.surface_water_rainfall_avg_annual;
                OBJ11.surface_water_rainfall_catchment_area = result.surface_water_rainfall_catchment_area;
                OBJ11.surface_water_rainfall_evapo = result.surface_water_rainfall_evapo;
                OBJ11.surface_water_rainfall_runoff = result.surface_water_rainfall_runoff;
                OBJ11.surface_water_reservoirs_capacity = result.surface_water_reservoirs_capacity;
                OBJ11.surface_water_reservoirs_discharge = result.surface_water_reservoirs_discharge;
                OBJ11.surface_water_reservoirs_evapo = result.surface_water_reservoirs_evapo;
                OBJ11.surface_water_reservoirs_sw_avail = result.surface_water_reservoirs_sw_avail;
                OBJ11.surface_water_rivers_area = result.surface_water_rivers_area;
                OBJ11.surface_water_rivers_avg_depth = result.surface_water_rivers_avg_depth;
                OBJ11.surface_water_rivers_discharge = result.surface_water_rivers_discharge;
                OBJ11.surface_water_rivers_evapo = result.surface_water_rivers_evapo;
                OBJ11.surface_water_rivers_noof_rivers = result.surface_water_rivers_noof_rivers;
                OBJ11.surface_water_rivers_sw_avail = result.surface_water_rivers_sw_avail;
                OBJ11.total_water_availability = result.total_water_availability;
                OBJ11.userid = Convert.ToInt32(userid);
                ABE.obj_Abhy_Water_Avalibility.Add(OBJ11);
                ABE.SaveChanges();
                return Json("Saved Successfully", JsonRequestBehavior.AllowGet);
            }
            else
            {

                return RedirectToAction("WSP_GWM_HOME", "WspNew");
            }
        }

        public ActionResult WspDraft()
        {

            return View();

        }
        public ActionResult WspBalance()
        {

            return View();

        }

        [HttpPost]
        public ActionResult Getting_Data_WaterAvailability()
        {

            if (Session["UserId"] != null)
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
                    var Data = ABE.objabhystates_completecensusdata_new.Where(x => x.state_name == StateName && x.district_name == DistName && x.sub_district_name == BlockName && x.gram_panchayat_name == GramName).ToList();
                    var Details11 = Json(Data, JsonRequestBehavior.AllowGet);
                    Details11.MaxJsonLength = int.MaxValue;
                    return Details11;
                }
                else if (StateName != "" && DistName != "" && BlockName != "")
                {
                    var Data = ABE.objabhystates_completecensusdata_new.Where(x => x.state_name == StateName && x.district_name == DistName && x.sub_district_name == BlockName).ToList();
                    var Details11 = Json(Data, JsonRequestBehavior.AllowGet);
                    Details11.MaxJsonLength = int.MaxValue;
                    return Details11;
                }
                else if (StateName != "" && DistName != "")
                {
                    var Data = ABE.objabhystates_completecensusdata_new.Where(x => x.state_name == StateName && x.district_name == DistName).ToList();
                    var Details11 = Json(Data, JsonRequestBehavior.AllowGet);
                    Details11.MaxJsonLength = int.MaxValue;
                    return Details11;
                }
                else if (StateName != "")
                {
                    var Data = ABE.objabhystates_completecensusdata_new.Where(x => x.state_name == StateName).ToList();
                    var Details11 = Json(Data, JsonRequestBehavior.AllowGet);
                    Details11.MaxJsonLength = int.MaxValue;
                    return Details11;
                }
            }
            else
            {
                Session["WSPHOME"] = "Data";
                return RedirectToAction("WSP_GWM_HOME", "WspNew");
            }
            return View();

        }



        [HttpPost]
        public ActionResult Getting_Data_LiveStock()
        {

            if (Session["UserId"] != null)
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
                if (StateName != "" && DistName != "")
                {
                    var Data = ABE.objabhy_livestock.Where(x => x.state_name == StateName && x.district_name == DistName).ToList();
                    var Details11 = Json(Data, JsonRequestBehavior.AllowGet);
                    Details11.MaxJsonLength = int.MaxValue;
                    return Details11;
                }
                else if (StateName != "")
                {
                    var Data = ABE.objabhy_livestock.Where(x => x.state_name == StateName).ToList();
                    var Details11 = Json(Data, JsonRequestBehavior.AllowGet);
                    Details11.MaxJsonLength = int.MaxValue;
                    return Details11;
                }
                return View();
            }
            else
            {
                Session["WSPHOME"] = "Data";
                return RedirectToAction("WSP_GWM_HOME", "WspNew");
            }
        }

        public ActionResult Water_security_plan()
        {
            return View();
        }
        [HttpGet]
        public ActionResult WspWaterAvailability()
        {
            return View();
        }

        public void feedback_mail()
        {
            var date = DateTime.Now;
            var datetimeyick = DateTime.Now.Ticks;
            var Today_Date_1_new = date.AddDays(-1).ToString("yyyy-MM-dd");
            var Today_Date_2_new = date.AddDays(-2).ToString("yyyy-MM-dd");
            var reg_info_1day = ABE.obj_abhy_training_newregs.Where(x => x.to_date == Today_Date_1_new && x.mail_count == 0).ToList();
            //var reg_info_1day = ABE.obj_abhy_training_newregs.ToList();
            if (reg_info_1day.Count != 0)
            {
                for (var i = 0; i < reg_info_1day.Count; i++)
                {
                    var reg_no = reg_info_1day[i].registration_no;
                    string id = ENCandDEC.EncryptAES256(reg_no);
                    var nogen = id;

                    var feed_info = ABE.obj_abhy_feedback_latest.Where(x => x.registration_no == reg_no).ToList();
                    if (feed_info.Count == 0)
                    {
                        int idd = Convert.ToInt32(reg_info_1day[i].id);
                        var aa = ABE.obj_abhy_training_newregs.Where(x => x.id == idd).FirstOrDefault();

                        aa.mail_send = "Yes";
                        aa.mail_count = 1;

                        ABE.Entry(aa).State = EntityState.Modified;
                        ABE.SaveChanges();

                        var email = reg_info_1day[i].p_emailid;
                        var event_name = reg_info_1day[i].p_training_name;
                        var name = reg_info_1day[i].p_name;

                        string Grievanceyes = "https://ataljal-mis.mowr.gov.in/Contact/FeedBack?rr=" + nogen;

                        string Mail_Subject = "Request for Feedback on the Attended Event:" + event_name;
                        StringBuilder sb = new StringBuilder();
                        sb.Append("<br>");
                        sb.Append("<table style='margin-left:50px;'>");
                        sb.Append("<tr  style='width:300px'>");
                        sb.Append("</tr>");
                        sb.Append("<tr style='width:300px'>");
                        sb.Append("<td>");
                        sb.Append("<h3>");
                        sb.Append("Dear " + name);
                        sb.Append("</h3>");
                        sb.Append("</td>");
                        sb.Append("</tr>");
                        sb.Append("<br>");
                        sb.Append("<tr  style='width:300px'>");
                        sb.Append("<td>");
                        sb.Append("<h4>");
                        sb.Append("We hope you enjoyed and found value in the event you recently attended. As part of our commitment to continuous improvement, we would greatly appreciate your feedback to help us enhance future events.");
                        sb.Append("</h4>");
                        sb.Append("</td>");
                        sb.Append("</tr>");
                        sb.Append("<tr  style='width:300px'>");
                        sb.Append("<td>");
                        sb.Append("<h4>");
                        sb.Append("Your insights are invaluable to us, and we kindly request that you take a few minutes to fill out our feedback form. Your honest feedback will assist us in understanding what worked well and where we can make improvements.");
                        sb.Append("</h4>");
                        sb.Append("</td>");
                        sb.Append("</tr>");
                        sb.Append("<tr  style='width:300px'>");
                        sb.Append("<td>");
                        sb.Append("<h4>");
                        sb.Append("Please click on the following link to access the feedback form : " + Grievanceyes);
                        sb.Append("</h4>");
                        sb.Append("</td>");
                        sb.Append("</tr>");
                        sb.Append("<tr  style='width:300px'>");
                        sb.Append("<td>");
                        sb.Append("<h4>");
                        sb.Append("Thank you once again for being a part of our event. We look forward to hearing your feedback and hope to welcome you to our future events.");
                        sb.Append("</h4>");
                        sb.Append("</td>");
                        sb.Append("</tr>");
                        sb.Append("<tr  style='width:300px'>");
                        sb.Append("<td>");
                        sb.Append("Thanking You");
                        sb.Append("</td>");
                        sb.Append("</tr>");
                        sb.Append("<tr  style='width:300px'>");
                        sb.Append("<td>");
                        sb.Append("Atal Bhujal Yojana");
                        sb.Append("</td>");
                        sb.Append("</tr>");
                        sb.Append("</table>");

                        var results = WebConstents.SendEmailSMTP(email, "", Mail_Subject, sb.ToString(), "");

                    }




                }
            }

            var reg_info_2day = ABE.obj_abhy_training_newregs.Where(x => x.to_date == Today_Date_2_new && x.mail_count == 1).ToList();
            if (reg_info_2day.Count != 0)
            {
                for (var i = 0; i < reg_info_2day.Count; i++)
                {
                    var reg_no = reg_info_2day[i].registration_no;
                    string id = ENCandDEC.EncryptAES256(reg_no);
                    var nogen = id;

                    var feed_info = ABE.obj_abhy_feedback_latest.Where(x => x.registration_no == reg_no).ToList();
                    if (feed_info.Count == 0)
                    {
                        int idd = Convert.ToInt32(reg_info_2day[i].id);
                        var aa = ABE.obj_abhy_training_newregs.Where(x => x.id == idd).FirstOrDefault();

                        aa.mail_send = "Yes";
                        aa.mail_count = 2;

                        ABE.Entry(aa).State = EntityState.Modified;
                        ABE.SaveChanges();

                        var email = reg_info_2day[i].p_emailid;
                        var event_name = reg_info_2day[i].p_training_name;
                        var name = reg_info_2day[i].p_name;
                        string Grievanceyes = "https://ataljal-mis.mowr.gov.in/Contact/FeedBack?rr=" + nogen;

                        string Mail_Subject = "Request for Feedback on the Attended Event:" + event_name;
                        StringBuilder sb = new StringBuilder();
                        sb.Append("<table style='margin-left:50px;'>");
                        sb.Append("<tr  style='width:300px'>");
                        sb.Append("</tr>");
                        sb.Append("<tr style='width:300px'>");
                        sb.Append("<td>");
                        sb.Append("<h3>");
                        sb.Append("Dear" + name);
                        sb.Append("</h3>");
                        sb.Append("<br>");
                        sb.Append("</td>");
                        sb.Append("<br>");
                        sb.Append("</tr>");
                        sb.Append("<br>");
                        sb.Append("<br>");
                        sb.Append("<br>");
                        sb.Append("<tr  style='width:300px'>");
                        sb.Append("<td>");
                        sb.Append("<h4>");
                        sb.Append("We hope you enjoyed and found value in the event you recently attended. As part of our commitment to continuous improvement, we would greatly appreciate your feedback to help us enhance future events.");
                        sb.Append("</h4>");
                        sb.Append("</td>");
                        sb.Append("</tr>");
                        sb.Append("<br>");
                        sb.Append("<tr  style='width:300px'>");
                        sb.Append("<td>");
                        sb.Append("<h4>");
                        sb.Append("Your insights are invaluable to us, and we kindly request that you take a few minutes to fill out our feedback form. Your honest feedback will assist us in understanding what worked well and where we can make improvements.");
                        sb.Append("</h4>");
                        sb.Append("</td>");
                        sb.Append("</tr>");
                        sb.Append("<tr  style='width:300px'>");
                        sb.Append("<td>");
                        sb.Append("<h4>");
                        sb.Append("Please click on the following link to access the feedback form:" + Grievanceyes);
                        sb.Append("</h4>");
                        sb.Append("</td>");
                        sb.Append("</tr>");
                        sb.Append("<tr  style='width:300px'>");
                        sb.Append("<td>");
                        sb.Append("<h4>");
                        sb.Append("Thank you once again for being a part of our event. We look forward to hearing your feedback and hope to welcome you to our future events.");
                        sb.Append("</h4>");
                        sb.Append("</td>");
                        sb.Append("</tr>");
                        sb.Append("<br>");
                        sb.Append("<br>");
                        sb.Append("<tr  style='width:300px'>");
                        sb.Append("<td>");
                        sb.Append("</td>");
                        sb.Append("<tr  style='width:300px'>");
                        sb.Append("<td>");
                        sb.Append("<br>");
                        sb.Append("Thanking You");
                        sb.Append("<br>");
                        sb.Append("</td>");
                        sb.Append("</tr>");
                        sb.Append("<tr  style='width:300px'>");
                        sb.Append("<td>");
                        sb.Append("<br>");
                        sb.Append("Atal Bhujal Yojana");
                        sb.Append("<br>");
                        sb.Append("</td>");
                        sb.Append("</tr>");
                        sb.Append("<tr>");
                        sb.Append("</tr>");
                        sb.Append("</table>");

                        var results = WebConstents.SendEmailSMTP(email, "", Mail_Subject, sb.ToString(), "");



                    }




                }
            }
        }
        public void Index_GRM()
        {
            var dateAndTime = DateTime.Now;
            var Today_Date_1 = dateAndTime.Date;
            var GrievanceDetails = ABE.objgrievance_new.Where(x => x.accept != "Approved").ToList();
            if (GrievanceDetails.Count != 0)
            {
                for (var i = 0; i < GrievanceDetails.Count; i++)
                {
                    string Reg_Date = GrievanceDetails[i].registation_date_time;
                    string[] Reg_Date11 = Reg_Date.Split(' ');
                    var RegDate = Reg_Date11[0];
                    var statename = GrievanceDetails[i].grievance_address_to;
                    var Email_users = GrievanceDetails[i].email;
                    if (Email_users == null)
                    {
                        Email_users = "";

                    }

                    var Detilss = ABE.obj_abhy_grievance_officer_mails_info_new.Where(x => x.state_name == statename).ToList();
                    var Data11 = GrievanceDetails[i];
                    var Email = "";
                    var OfficerName = "";
                    var Idd = 0;
                    var G_Date = "";
                    if (Detilss.Count != 0)
                    {
                        if (GrievanceDetails[i].mail_count_date != null)
                        {
                            Idd = 2;
                            Email = Detilss[0].third_officer_mailid;
                            OfficerName = Detilss[0].third_officername;
                            G_Date = GrievanceDetails[i].mail_count1_date;

                        }

                        else
                        {
                            if (GrievanceDetails[i].mail_count_date == null)
                            {
                                Idd = 1;
                                Email = Detilss[0].second_officer_mailid;
                                OfficerName = Detilss[0].second_officername;
                                G_Date = GrievanceDetails[i].reg_date;
                            }
                            else
                            {
                                Idd = 0;
                            }
                        }
                    }
                    if (Idd != 0)
                    {
                        var DatesCount = 0;
                        var Date111 = 0;
                        var Today_Date = DateTime.Now;
                        DateTime EndDate = Convert.ToDateTime(Today_Date);
                        DateTime GDate = Convert.ToDateTime(Reg_Date);
                        TimeSpan difference = EndDate - GDate;
                        var Days = difference.Days;
                        if (Idd == 2)
                        {
                            if (Days == 20)
                            {
                                if (GrievanceDetails[i].mail_count1_date == null || GrievanceDetails[i].mail_count1_date == "")
                                {
                                    Date111 = 1;
                                    Data11.officer_name = OfficerName;
                                    Data11.mail_count1_date = DateTime.Now.ToString();
                                }

                            }

                        }
                        else if (Idd == 1)
                        {
                            if (Days == 10)
                            {
                                if (GrievanceDetails[i].mail_count_date == null || GrievanceDetails[i].mail_count_date == "")
                                {
                                    DatesCount = 1;
                                    Data11.officer_name = OfficerName;
                                    Data11.mail_count_date = DateTime.Now.ToString();
                                }

                            }

                        }

                        ABE.Entry(Data11).State = EntityState.Modified;
                        ABE.SaveChanges();
                        if (Date111 == 1)
                        {

                            string Reg_Date1 = Data11.reg_date;
                            string[] Reg_Date111 = Reg_Date.Split(' ');
                            var RegDate1 = Reg_Date11[0];

                            string Mail_Subject = "Grievance Acknowledgement-" + Data11.IdentificationId;
                            StringBuilder sb = new StringBuilder();
                            sb.Append("<br>");
                            sb.Append("<br>");
                            sb.Append("<table style='margin-left:50px;'>");
                            sb.Append("<tr  style='width:300px'>");
                            sb.Append("</tr>");
                            sb.Append("<tr style='width:300px'>");
                            sb.Append("<td>");
                            sb.Append("<b>Dear Sir/Madam,</b>");
                            sb.Append("<br>");
                            sb.Append("</td>");
                            sb.Append("<br>");
                            sb.Append("</tr>");
                            sb.Append("<br>");
                            sb.Append("<br>");
                            sb.Append("<br>");
                            sb.Append("<tr  style='width:300px'>");
                            sb.Append("<td>");
                            sb.Append("<h4>");
                            sb.Append(" Grievance,ID  – " + Data11.IdentificationId + " submitted on " + RegDate1 + " .not resolved.Kindly resolve within 10 days");
                            sb.Append("</h4>");
                            sb.Append("</td>");
                            sb.Append("</tr>");
                            sb.Append("<br>");
                            sb.Append("<br>");
                            sb.Append("<br>");
                            sb.Append("<tr  style='width:300px'>");
                            sb.Append("<td>");
                            sb.Append("</td>");
                            sb.Append("<tr  style='width:300px'>");
                            sb.Append("<td>");
                            sb.Append("<br>");
                            sb.Append("Thanking You");
                            sb.Append("<br>");
                            sb.Append("</td>");
                            sb.Append("</tr>");
                            sb.Append("<tr>");
                            sb.Append("</tr>");
                            sb.Append("</table>");

                            var results = WebConstents.SendEmailSMTP(Email, "", Mail_Subject, sb.ToString(), "");

                            if (Email_users != "")
                            {
                                string Mail_Subject_users = "Grievance Status";
                                StringBuilder sb_users = new StringBuilder();
                                sb_users.Append("<br>");
                                sb_users.Append("<br>");
                                sb_users.Append("<table style='margin-left:50px;'>");
                                sb_users.Append("<tr  style='width:300px'>");
                                sb_users.Append("</tr>");
                                sb_users.Append("<tr style='width:300px'>");
                                sb_users.Append("<td>");
                                sb_users.Append("<b>Dear Sir/Madam,</b>");
                                sb_users.Append("<br>");
                                sb_users.Append("</td>");
                                sb_users.Append("<br>");
                                sb_users.Append("</tr>");
                                sb_users.Append("<br>");
                                sb_users.Append("<br>");
                                sb_users.Append("<br>");
                                sb_users.Append("<tr  style='width:300px'>");
                                sb_users.Append("<td>");
                                sb_users.Append("<h4>");
                                sb_users.Append(" Your Grievance ID  – " + Data11.IdentificationId + " is escalated to 3rd Level Nodal officer (Final Appellate Authority).");
                                sb_users.Append("</h4>");
                                sb_users.Append("</td>");
                                sb_users.Append("</tr>");
                                sb_users.Append("<br>");
                                sb_users.Append("<br>");
                                sb_users.Append("<br>");
                                sb_users.Append("<tr  style='width:300px'>");
                                sb_users.Append("<td>");
                                sb_users.Append("</td>");
                                sb_users.Append("<tr  style='width:300px'>");
                                sb_users.Append("<td>");
                                sb_users.Append("<br>");
                                sb_users.Append("Thanking You");
                                sb_users.Append("<br>");
                                sb_users.Append("</td>");
                                sb_users.Append("</tr>");
                                sb_users.Append("<tr>");
                                sb_users.Append("</tr>");
                                sb_users.Append("</table>");

                                var results_users = WebConstents.SendEmailSMTP(Email_users, "", Mail_Subject_users, sb_users.ToString(), "");

                            }

                        }
                        else if (DatesCount != 0)
                        {
                            var sth = GrievanceDetails[i].IdentificationId;
                            string[] uuu = Request.Url.AbsoluteUri.Split('/');
                            string Mail_Subject = "Grievance Acknowledgement-" + sth;
                            StringBuilder sb = new StringBuilder();
                            sb.Append("<br>");
                            sb.Append("<br>");
                            sb.Append("<table style='margin-left:50px;'>");
                            sb.Append("<tr  style='width:300px'>");
                            sb.Append("</tr>");
                            sb.Append("<tr style='width:300px'>");
                            sb.Append("<td>");
                            sb.Append("<b>Hi  " + OfficerName + " Sir,</b>");
                            sb.Append("<br>");
                            sb.Append("</td>");
                            sb.Append("<br>");
                            sb.Append("</tr>");
                            sb.Append("<br>");
                            sb.Append("<br>");
                            sb.Append("<br>");
                            sb.Append("<tr  style='width:300px'>");
                            sb.Append("<td>");
                            sb.Append("<h4>");
                            sb.Append("Grievance,ID – " + sth + " submitted on " + RegDate + ". not resolved. Kindly resolve within 10 days");
                            sb.Append("</h4>");
                            sb.Append("</td>");
                            sb.Append("</tr>");
                            sb.Append("<br>");
                            sb.Append("<br>");
                            sb.Append("<br>");
                            sb.Append("<tr  style='width:300px'>");
                            sb.Append("<td>");
                            sb.Append("</td>");
                            sb.Append("<tr  style='width:300px'>");
                            sb.Append("<td>");
                            sb.Append("<br>");
                            sb.Append("Thanking You");
                            sb.Append("<br>");
                            sb.Append("</td>");
                            sb.Append("</tr>");
                            sb.Append("<tr>");
                            sb.Append("</tr>");
                            sb.Append("</table>");
                            string results = WebConstents.SendEmailSMTP(Email, "", Mail_Subject, sb.ToString(), "");

                            if (Email_users != "")
                            {
                                string Mail_Subject_users = "Grievance Status";
                                StringBuilder sb_users = new StringBuilder();
                                sb_users.Append("<br>");
                                sb_users.Append("<br>");
                                sb_users.Append("<table style='margin-left:50px;'>");
                                sb_users.Append("<tr  style='width:300px'>");
                                sb_users.Append("</tr>");
                                sb_users.Append("<tr style='width:300px'>");
                                sb_users.Append("<td>");
                                sb_users.Append("<b>Dear Sir/Madam,</b>");
                                sb_users.Append("<br>");
                                sb_users.Append("</td>");
                                sb_users.Append("<br>");
                                sb_users.Append("</tr>");
                                sb_users.Append("<br>");
                                sb_users.Append("<br>");
                                sb_users.Append("<br>");
                                sb_users.Append("<tr  style='width:300px'>");
                                sb_users.Append("<td>");
                                sb_users.Append("<h4>");
                                sb_users.Append(" Your Grievance ID  – " + Data11.IdentificationId + " is escalated to 2nd Level Nodal officer (Appellate Authority).");
                                sb_users.Append("</h4>");
                                sb_users.Append("</td>");
                                sb_users.Append("</tr>");
                                sb_users.Append("<br>");
                                sb_users.Append("<br>");
                                sb_users.Append("<br>");
                                sb_users.Append("<tr  style='width:300px'>");
                                sb_users.Append("<td>");
                                sb_users.Append("</td>");
                                sb_users.Append("<tr  style='width:300px'>");
                                sb_users.Append("<td>");
                                sb_users.Append("<br>");
                                sb_users.Append("Thanking You");
                                sb_users.Append("<br>");
                                sb_users.Append("</td>");
                                sb_users.Append("</tr>");
                                sb_users.Append("<tr>");
                                sb_users.Append("</tr>");
                                sb_users.Append("</table>");

                                var results_users = WebConstents.SendEmailSMTP(Email_users, "", Mail_Subject_users, sb_users.ToString(), "");

                            }
                        }


                    }
                }

            }

            //gujarat List
            ViewBag.gujarat = ABE.objabhy_groundwater_levels2.Where(y => y.state_name == "gujarat").ToList();
            //ViewBag.gujcount = ViewBag.gujarat.Count;

            //Harayana List
            ViewBag.haryana = ABE.objabhy_groundwater_levels2.Where(y => y.state_name == "haryana").ToList();
            //ViewBag.harcount = ViewBag.haryana.Count;

            //Karnataka List
            ViewBag.karnataka = ABE.objabhy_groundwater_levels2.Where(y => y.state_name == "karnataka").ToList();
            //ViewBag.karcount = ViewBag.karnataka.Count;

            //Madhya Pradesh List
            ViewBag.madhyapradesh = ABE.objabhy_groundwater_levels2.Where(y => y.state_name == "madhyapradesh").ToList();
            //ViewBag.mpcount = ViewBag.madhyapradesh.Count;

            //Maharastra List
            ViewBag.maharashtra = ABE.objabhy_groundwater_levels2.Where(y => y.state_name == "maharashtra").ToList();


            //Rajasthan List
            ViewBag.rasjasthan = ABE.objabhy_groundwater_levels2.Where(y => y.state_name == "rajasthan").ToList();
            //ViewBag.rajcount = ViewBag.rasjasthan.Count;

            //Uttar Pradesh List
            ViewBag.uttarpradesh = ABE.objabhy_groundwater_levels2.Where(y => y.state_name == "uttarpradesh").ToList();
            //ViewBag.upcount = ViewBag.uttarpradesh.Count;

        }
        public ActionResult WSP_GWM_HOME_new()
        {
            
            var dateAndTime = DateTime.Now;
            var Today_Date_1 = dateAndTime.Date;
            var GrievanceDetails = ABE.objNew_Grievance.Where(x => x.accept != "Approved").ToList();
            if (GrievanceDetails.Count != 0)
            {
                for (var i = 0; i < GrievanceDetails.Count; i++)
                {
                    string Reg_Date = GrievanceDetails[i].reg_date;
                    string[] Reg_Date11 = Reg_Date.Split(' ');
                    var RegDate = Reg_Date11[0];
                    var statename = GrievanceDetails[i].grievance_address_to;
                    var Detilss = ABE.obj_abhy_grievance_officer_mails_info.Where(x => x.state_name == statename).ToList();
                    var Data11 = GrievanceDetails[i];
                    var Email = "";
                    var OfficerName = "";
                    var Idd = 0;
                    var G_Date = "";
                    if (Detilss.Count != 0)
                    {
                        if (GrievanceDetails[i].mail_count1_date != null)
                        {
                            Idd = 3;
                            Email = Detilss[0].fourth_officer_mailid;
                            OfficerName = Detilss[0].fourth_officername;
                            G_Date = GrievanceDetails[i].mail_count2_date;
                        }
                        else if (GrievanceDetails[i].mail_count_date != null)
                        {
                            Idd = 2;
                            Email = Detilss[0].third_officer_mailid;
                            OfficerName = Detilss[0].third_officername;
                            G_Date = GrievanceDetails[i].mail_count1_date;
                        }
                        else
                        {
                            Idd = 1;
                            Email = Detilss[0].second_officer_mailid;
                            OfficerName = Detilss[0].second_officername;
                            G_Date = GrievanceDetails[i].reg_date;
                        }
                    }
                    if (Idd != 0)
                    {
                        var DatesCount = 0;
                        var Date111 = 0;
                        var Today_Date = DateTime.Today;
                        DateTime EndDate = Convert.ToDateTime(Today_Date);
                        DateTime GDate = Convert.ToDateTime(Reg_Date);
                        TimeSpan difference = EndDate - GDate;
                        var Days = difference.Days;
                        if (Idd == 2)
                        {
                            if (Days == 16)
                            {
                                if (GrievanceDetails[i].mail_count1_date == null || GrievanceDetails[i].mail_count1_date == "")
                                {
                                    DatesCount = 1;
                                    Data11.mail_count1_date = DateTime.Today.ToString();
                                }
                            }
                            else if (Days == 31)
                            {
                                if (GrievanceDetails[i].mail_count2_date == null || GrievanceDetails[i].mail_count2_date == "")
                                {
                                    Date111 = 1;
                                    Email = GrievanceDetails[0].email;
                                    OfficerName = GrievanceDetails[0].fullname;
                                    Data11.mail_count2_date = DateTime.Today.ToString();
                                }
                            }
                        }
                        else if (Idd == 1)
                        {
                            if (Days == 8)
                            {
                                if (GrievanceDetails[i].mail_count_date == null || GrievanceDetails[i].mail_count_date == "")
                                {
                                    DatesCount = 1;
                                    Data11.mail_count_date = DateTime.Today.ToString();
                                }
                            }
                            else if (Days == 16)
                            {
                                if (GrievanceDetails[i].mail_count1_date == null || GrievanceDetails[i].mail_count1_date == "")
                                {
                                    DatesCount = 1;
                                    Data11.mail_count1_date = DateTime.Today.ToString();
                                }
                            }
                        }
                        else if (Idd == 3)
                        {
                            if (Days == 31)
                            {
                                if (GrievanceDetails[i].mail_count2_date == null || GrievanceDetails[i].mail_count2_date == "")
                                {
                                    Date111 = 1;
                                    Data11.mail_count2_date = DateTime.Today.ToString();
                                }
                            }
                        }
                        ABE.Entry(Data11).State = EntityState.Modified;
                        ABE.SaveChanges();
                        if (Date111 == 1)
                        {
                            string Reg_Date1 = Data11.reg_date;
                            string[] Reg_Date111 = Reg_Date.Split(' ');
                            var RegDate1 = Reg_Date11[0];
                            string Mail_Subject = "Grievance application submitted on date " + RegDate1 + " –Grievance Acknowledgement-" + Data11.IdentificationId;
                            StringBuilder sb = new StringBuilder();
                            sb.Append("<br>");
                            sb.Append("<br>");
                            sb.Append("<table style='margin-left:50px;'>");
                            sb.Append("<tr  style='width:300px'>");
                            sb.Append("</tr>");
                            sb.Append("<tr style='width:300px'>");
                            sb.Append("<td>");
                            sb.Append("<b>Dear Sir/Madam,</b>");
                            sb.Append("<br>");
                            sb.Append("</td>");
                            sb.Append("<br>");
                            sb.Append("</tr>");
                            sb.Append("<br>");
                            sb.Append("<br>");
                            sb.Append("<br>");
                            sb.Append("<tr  style='width:300px'>");
                            sb.Append("<td>");
                            sb.Append("<h4>");
                            sb.Append("Your grievance application with ref ID – " + Data11.IdentificationId + " submitted on " + RegDate1 + " has not been resolved by the concerned officer in 30 days.Kindly reappeal to the Appellate Authority – Chief Secretary of the concern state or National Programme Management Unit(NPMU, Atal Bhujal Yojana – Secretary, DoWR, RD & amp; GR, Ministry of Jal Shakti) through new appeal registration section on http://www.ataljal.mowr.gov.in. Please use your previous grievance ref Id to reappeal.");
                            sb.Append("</h4>");
                            sb.Append("</td>");
                            sb.Append("</tr>");
                            sb.Append("<br>");
                            sb.Append("<br>");
                            sb.Append("<br>");
                            sb.Append("<tr  style='width:300px'>");
                            sb.Append("<td>");
                            sb.Append("</td>");
                            sb.Append("<tr  style='width:300px'>");
                            sb.Append("<td>");
                            sb.Append("<br>");
                            sb.Append("Thanking You");
                            sb.Append("<br>");
                            sb.Append("</td>");
                            sb.Append("</tr>");
                            sb.Append("<tr>");
                            sb.Append("</tr>");
                            sb.Append("</table>");
                            var results = WebConstents.SendEmailSMTP(Email, "", Mail_Subject, sb.ToString(), "");
                        }
                        else if (DatesCount != 0)
                        {
                            var sth = GrievanceDetails[i].IdentificationId;
                            string[] uuu = Request.Url.AbsoluteUri.Split('/');
                            string GrievanceAprroved = uuu[0] + "//" + uuu[2] + "/Grievance/GrievanceAprroved?code=" + sth;
                            // string GrievancePending = uuu[0] + "//" + uuu[2] + "/Grievance/GrievancePending?code=" + sth;
                            string GrievanceDecline = uuu[0] + "//" + uuu[2] + "/Grievance/GrievanceDecline?code=" + sth + ',' + Email;

                            string Mail_Subject = "Grievance Acknowledgement-" + sth;

                            StringBuilder sb = new StringBuilder();
                            sb.Append("<br>");
                            sb.Append("<br>");
                            sb.Append("<table style='margin-left:50px;'>");
                            sb.Append("<tr  style='width:300px'>");
                            sb.Append("</tr>");
                            sb.Append("<tr style='width:300px'>");
                            sb.Append("<td>");
                            sb.Append("<b>Hi  " + OfficerName + " Sir,</b>");
                            sb.Append("<br>");
                            sb.Append("</td>");
                            sb.Append("<br>");
                            sb.Append("</tr>");
                            sb.Append("<br>");
                            sb.Append("<br>");
                            sb.Append("<br>");
                            sb.Append("<tr  style='width:300px'>");
                            sb.Append("<td>");
                            sb.Append("<h4>");
                            sb.Append("Grievance application with ref ID – " + sth + " has been submitted on " + RegDate + ". Kindly redress the application within " + difference.Days + " days.");
                            sb.Append("</h4>");
                            sb.Append("</td>");
                            sb.Append("</tr>");
                            sb.Append("<br>");
                            sb.Append("<br>");
                            sb.Append("<br>");
                            sb.Append("<tr  style='width:300px'>");
                            sb.Append("<td>");
                            sb.Append($"<a href='{GrievanceAprroved}' class='btn btn-primary' style='background-color:#5cb85c; display:inline-block; font-family: sans-serif; font-size: 15px; line-height: 15px; text-decoration: none; padding: 13px 17px; color: #ffffff; border-radius: 4px;margin-right: 10px;'>Approve</a>");
                            sb.Append($"<a href='{GrievanceDecline}' class=' btn btn-danger' style='background-color:#f0ad4e; display:inline-block; font-family: sans-serif; font-size: 15px; line-height: 15px; text-decoration: none; padding: 13px 17px; color: #ffffff; border-radius: 4px;'>Decline</a>");
                            sb.Append("</td>");
                            sb.Append("<tr  style='width:300px'>");
                            sb.Append("<td>");
                            sb.Append("<br>");
                            sb.Append("Thanking You");
                            sb.Append("<br>");
                            sb.Append("</td>");
                            sb.Append("</tr>");
                            sb.Append("<tr>");
                            sb.Append("</tr>");
                            sb.Append("</table>");

                            string results = WebConstents.SendEmailSMTP(Email, "", Mail_Subject, sb.ToString(), "");
                        }
                    }
                }
            }
            feedback_mail();
            Index_GRM();
            //gujarat List
            ViewBag.gujarat = ABE.objabhy_groundwater_levels2.Where(y => y.state_name == "gujarat").ToList();
            //ViewBag.gujcount = ViewBag.gujarat.Count;

            //Harayana List
            ViewBag.haryana = ABE.objabhy_groundwater_levels2.Where(y => y.state_name == "haryana").ToList();
            //ViewBag.harcount = ViewBag.haryana.Count;

            //Karnataka List
            ViewBag.karnataka = ABE.objabhy_groundwater_levels2.Where(y => y.state_name == "karnataka").ToList();
            //ViewBag.karcount = ViewBag.karnataka.Count;

            //Madhya Pradesh List
            ViewBag.madhyapradesh = ABE.objabhy_groundwater_levels2.Where(y => y.state_name == "madhyapradesh").ToList();
            //ViewBag.mpcount = ViewBag.madhyapradesh.Count;

            //Maharastra List
            ViewBag.maharashtra = ABE.objabhy_groundwater_levels2.Where(y => y.state_name == "maharashtra").ToList();


            //Rajasthan List
            ViewBag.rasjasthan = ABE.objabhy_groundwater_levels2.Where(y => y.state_name == "rajasthan").ToList();
            //ViewBag.rajcount = ViewBag.rasjasthan.Count;

            //Uttar Pradesh List
            ViewBag.uttarpradesh = ABE.objabhy_groundwater_levels2.Where(y => y.state_name == "uttarpradesh").ToList();
            //ViewBag.upcount = ViewBag.uttarpradesh.Count;



            string id = DateTime.Now.Ticks.ToString();
            Session["id"] = id;

            return RedirectToAction("WSP_GWM_HOME", "WspNew");
        }

        public ActionResult WSP_GWM_HOME()
        {
            try
            {
                string aa = Session["id"]?.ToString();
                string Logouttext = Session["Logout"]?.ToString();
                //return RedirectToAction("under_maintainance", "Home");
                Session.Abandon();
                string ipAddress1 = Request.ServerVariables["HTTP_X_FORWARDED_FOR"];
                if (string.IsNullOrEmpty(ipAddress1))
                {
                    ipAddress1 = Request.ServerVariables["REMOTE_ADDR"];
                }
                var test_error_data = ABE.obj_abhy_tbl_error.Where(x => x.ipaddress == ipAddress1).ToList();
                if (test_error_data.Count != 0)
                {
                    for (var i = 1; i < test_error_data.Count; i++)
                    {
                        ABE.Entry(test_error_data[i]).State = EntityState.Deleted;
                        ABE.SaveChanges();
                    }
                    var test_error_data1 = ABE.obj_abhy_tbl_error.Where(x => x.ipaddress == ipAddress1).SingleOrDefault();
                    if (test_error_data1.error_count == "1")
                    {
                        test_error_data1.error_count = "2";
                        ABE.Entry(test_error_data1).State = EntityState.Modified;
                        ABE.SaveChanges();
                    }
                    else if (test_error_data1.error_count == "2")
                    {
                        ABE.Entry(test_error_data1).State = EntityState.Deleted;
                        ABE.SaveChanges();
                    }
                }
                //if (aa == null)
                //{

                //login_datetime logindata = new login_datetime();
                //logindata.name = Session["UserName"]?.ToString();
                //logindata.email = Session["Email"]?.ToString();
                //logindata.loginlogout = "Logout";
                //logindata.date = DateTime.Now.ToString("yyyy-MM-dd");
                //logindata.datetime = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
                //ABE.obj_login_datetime.Add(logindata);
                //ABE.SaveChanges();
                //var dd = ABE.obj_login_datetime.Where(x => x.name == null && x.email == null).ToList();
                //foreach (var item in dd)
                //{
                //    int idd = item.id;
                //    var ddd = ABE.obj_login_datetime.Where(x => x.id == idd).FirstOrDefault();
                //    ABE.Entry(ddd).State = EntityState.Deleted;
                //    ABE.SaveChanges();
                //}


                //}
                Session["Email"] = "";
                Session["Officer"] = "";
                Session["UserName"] = "";
                Session["UserId"] = "";
                Session["gstate"] = "";
                Session["gdist"] = "";
                Session["gblock"] = "";
                Session["ggram"] = "";
                ViewBag.Error = "";

                ViewBag.list = ABE.obj_abhy_gpdata_new.ToList();
                string RandomValue = RandomString(6);
                ViewBag.RandomNumber = RandomValue;
                return View();
            }
            catch (Exception ex)
            {

                return View();

            }
        }

        [HttpGet]
        public ActionResult LogInForce()
        {
            string stEmail = "";
            if (Session["Email"] != null)
            {
                stEmail = Session["Email"].ToString();
            }
            else
            {
                return RedirectToAction("WSP_GWM_HOME", "WspNew");
            }
            return View();

        }

        /// <summary>
        /// [HttpPost]
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult LogOutForceP()
        {
            string urls = "";
            string stEmail = "";
            if (Session["Email"] != null)
            {
                stEmail = Session["Email"].ToString();
            }
            try
            {
                if (stEmail != "")
                {
                    // WspNewController wspNew = new WspNewController();
                    var IP = GetIp();
                    //Rajnish
                    var sUser = ABE.objUsers.Where(x => x.Email == stEmail).FirstOrDefault();
                    if (sUser != null)
                    {
                        var data = ABE.obj_user_autologin.Where(x => x.user_id == sUser.UserId).ToList();//.FirstOrDefault();
                        login_datetime logindata = new login_datetime();
                        logindata.name = sUser.UserName;// Session["UserName"].ToString();
                        logindata.email = sUser.Email;// Session["Email"].ToString();
                        logindata.loginlogout = "Logout";
                        logindata.checkloginlogout = "0";
                        logindata.date = DateTime.Now.ToString("yyyy-MM-dd");
                        logindata.datetime = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
                        ABE.obj_login_datetime.Add(logindata);
                        ABE.SaveChanges();
                        if ((data.Count != 0) && (data != null))
                        {
                            //ABE.obj_user_autologin.Remove(data);
                            ABE.obj_user_autologin.RemoveRange(data);
                            ABE.SaveChanges();
                        }
                        AutoLogin.EndSession(Convert.ToInt32(sUser.UserId));
                        Session["Email"] = null;
                        Session["UserName"] = "";
                        Session["UserId"] = "";
                        return RedirectToAction("WSP_GWM_HOME", "WspNew");
                    }
                    return RedirectToAction("WSP_GWM_HOME", "WspNew");
                }
                return RedirectToAction("WSP_GWM_HOME", "WspNew");
            }
            catch (Exception ex)
            {
                Users sUser = ABE.objUsers.Where((Users x) => x.Email == stEmail).FirstOrDefault();
                if (sUser != null)
                {
                    login_datetime logindata = new login_datetime();
                    logindata.name = sUser.UserName;
                    logindata.email = sUser.Email;
                    logindata.loginlogout = "Logout";
                    logindata.checkloginlogout = "0";
                    logindata.date = DateTime.Now.ToString("yyyy-MM-dd");
                    logindata.datetime = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
                    ABE.obj_login_datetime.Add(logindata);
                    ABE.SaveChanges();
                    ABE.SaveChanges();
                }
                urls = string.Format("../../WspNew/WSP_GWM_HOME");
                return Redirect(urls);
                //return RedirectToAction("redi", "Home");
            }
        }

        [HttpGet]
        public ActionResult LogInForceP()
        {
            string urls = "";
            string stEmail = "";
            if (Session["Email"] != null)
            {
                stEmail = Session["Email"].ToString();
            }
            try
            {
                if (stEmail != "")
                {
                    // WspNewController wspNew = new WspNewController();
                    var IP = GetIp();
                    //Rajnish
                    var sUser = ABE.objUsers.Where(x => x.Email == stEmail).FirstOrDefault();
                    if (sUser != null)
                    {
                        var data = ABE.obj_user_autologin.Where(x => x.user_id == sUser.UserId).ToList();//.FirstOrDefault();
                        login_datetime logindata = new login_datetime();
                        logindata.name = sUser.UserName;// Session["UserName"].ToString();
                        logindata.email = sUser.Email;// Session["Email"].ToString();
                        logindata.loginlogout = "Logout";
                        logindata.checkloginlogout = "0";
                        logindata.date = DateTime.Now.ToString("yyyy-MM-dd");
                        logindata.datetime = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
                        ABE.obj_login_datetime.Add(logindata);
                        ABE.SaveChanges();
                        if ((data.Count != 0) && (data != null))
                        {
                            //ABE.obj_user_autologin.Remove(data);
                            ABE.obj_user_autologin.RemoveRange(data);
                            ABE.SaveChanges();
                        }
                        AutoLogin.EndSession(Convert.ToInt32(sUser.UserId));

                        string token = Guid.NewGuid().ToString();
                        int iUserId = Convert.ToInt32(Session["UserId"]);
                        var user = ABE.objUsers.Where(x => x.UserId == iUserId).FirstOrDefault();
                        user.UserId = iUserId;
                        user.UserToken = token;// Session["UserToken"].ToString();
                        ABE.Entry(user).State = EntityState.Modified;
                        ABE.SaveChanges();
                        Session["UserToken"] = token;

                        return RedirectToAction("WSP_GRM_HOMEF", "WspNew");
                    }
                    return RedirectToAction("WSP_GRM_HOMEF", "WspNew");
                }
                return RedirectToAction("WSP_GRM_HOMEF", "WspNew");
            }
            catch (Exception ex)
            {
                Users sUser = ABE.objUsers.Where((Users x) => x.Email == stEmail).FirstOrDefault();
                if (sUser != null)
                {
                    login_datetime logindata = new login_datetime();
                    logindata.name = sUser.UserName;
                    logindata.email = sUser.Email;
                    logindata.loginlogout = "Logout";
                    logindata.checkloginlogout = "0";
                    logindata.date = DateTime.Now.ToString("yyyy-MM-dd");
                    logindata.datetime = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
                    ABE.obj_login_datetime.Add(logindata);
                    ABE.SaveChanges();
                    ABE.SaveChanges();
                }
                urls = string.Format("../../WspNew/WSP_GWM_HOME");
                return Redirect(urls);
                //return RedirectToAction("redi", "Home");
            }
        }

        public static string RandomString(int Length)
        {
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            Random r = new Random();
            return new string(Enumerable.Repeat(chars, Length).Select(s => s[r.Next(s.Length)]).ToArray());
        }

        public static byte[] GetHash(string inputString)
        {
            HashAlgorithm algorithm = SHA256.Create();
            return algorithm.ComputeHash(Encoding.UTF8.GetBytes(inputString));
        }

        public static string GetHashString(string inputString)
        {
            StringBuilder sb = new StringBuilder();
            foreach (byte b in GetHash(inputString))
                sb.Append(b.ToString("X2"));
            return sb.ToString().ToUpper();

        }

        public static string GeneratePassword(int length) //length of salt    
        {
            const string allowedChars = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ0123456789";
            var randNum = new Random();
            var chars = new char[length];
            var allowedCharCount = allowedChars.Length;
            for (var i = 0; i <= length - 1; i++)
            {
                chars[i] = allowedChars[(Convert.ToInt32((allowedCharCount) * randNum.NextDouble()))];
            }
            return new string(chars);
        }
        public static string EncodePassword(string pass, string salt) //encrypt password    
        {
            byte[] bytes = Encoding.Unicode.GetBytes(pass);
            byte[] src = Encoding.Unicode.GetBytes(salt);
            byte[] dst = new byte[src.Length + bytes.Length];
            System.Buffer.BlockCopy(src, 0, dst, 0, src.Length);
            System.Buffer.BlockCopy(bytes, 0, dst, src.Length, bytes.Length);
            HashAlgorithm algorithm = HashAlgorithm.Create("SHA1");
            byte[] inArray = algorithm.ComputeHash(dst);
            //return Convert.ToBase64String(inArray);    
            return EncodePasswordMd5(Convert.ToBase64String(inArray));
        }
        public static string EncodePasswordMd5(string pass) //Encrypt using MD5    
        {
            Byte[] originalBytes;
            Byte[] encodedBytes;
            MD5 md5;
            //Instantiate MD5CryptoServiceProvider, get bytes for original password and compute hash (encoded password)    
            md5 = new MD5CryptoServiceProvider();
            originalBytes = ASCIIEncoding.Default.GetBytes(pass);
            encodedBytes = md5.ComputeHash(originalBytes);
            //Convert encoded bytes back to a 'readable' string    
            return BitConverter.ToString(encodedBytes);
        }
        //signup new method
        [HttpPost]
        public ActionResult Register(Users user)
        {

            var users = ABE.objUsers.Where(x => x.Email == user.Email.Trim()).ToList();

            string ipAddress1 = Request.ServerVariables["HTTP_X_FORWARDED_FOR"];
            if (string.IsNullOrEmpty(ipAddress1))
            {
                ipAddress1 = Request.ServerVariables["REMOTE_ADDR"];
            }
            var test_error_data = ABE.obj_abhy_tbl_error.Where(x => x.ipaddress == ipAddress1).ToList();

            if (test_error_data.Count != 0)
            {
                for (var i = 0; i < test_error_data.Count; i++)
                {
                    var test_error_data1 = test_error_data[i];
                    ABE.Entry(test_error_data1).State = EntityState.Deleted;
                    ABE.SaveChanges();
                }

            }

            string random = RandomString(6);
            var PassWord = user.Password;
            var Confirm_password = user.Verifiedornot;
            string New_ranpwd = random + PassWord.ToLower();
            //Password
            string New_encription_pew = GetHashString(New_ranpwd);

            string Confirm_ranpwd = random + Confirm_password.ToLower();
            //Password
            string Confirm_encription_pew = GetHashString(Confirm_ranpwd);


            if (New_encription_pew != Confirm_encription_pew)
            {
                var Error_data = new abhy_tbl_error();
                Error_data.block_name = user.BlockName;
                Error_data.date_time = DateTime.Now.ToString();
                Error_data.department = user.DepartmentName;
                Error_data.district_name = user.DistrictName;
                Error_data.error_test = "Password and Confirm Password is not Matched";
                Error_data.gpname = user.GramPanchayatName;
                Error_data.ipaddress = ipAddress1;
                Error_data.mobile = user.ContactNumber;
                Error_data.nodal_officer = user.NodalOfficer;
                Error_data.state_name = user.StateName;
                Error_data.user_email = user.Email;
                Error_data.user_name = user.UserName;
                Error_data.user_password = user.Password;
                Error_data.error_count = "1";
                Error_data.user_type = "MisSignup";
                ABE.obj_abhy_tbl_error.Add(Error_data);
                ABE.SaveChanges();

                return RedirectToAction("WSP_GWM_HOME", "WspNew");
            }



            var ABC = ABE.obj_abhy_tbl_error.Where(x => x.ipaddress == ipAddress1).SingleOrDefault();
            if (ABC != null)
            {
                ABE.Entry(ABC).State = EntityState.Deleted;

                ABE.SaveChanges();
            }

            if (users.Count == 1)
            {
                string ipAddress = Request.ServerVariables["HTTP_X_FORWARDED_FOR"];
                if (string.IsNullOrEmpty(ipAddress))
                {
                    ipAddress = Request.ServerVariables["REMOTE_ADDR"];
                }
                var Dataa = ABE.objUsers.Where(x => x.Email == user.Email.Trim() && x.Verifiedornot == "False").ToList();
                //var Dataa = ABE.objUsers.Where(x => x.Email == result.Email.Trim() && x.VerificationCode == "False" && x.isactive == 0).ToList();
                if (Dataa.Count == 1)
                {
                    var Error_data = new abhy_tbl_error();
                    Error_data.block_name = user.BlockName;
                    Error_data.date_time = DateTime.Now.ToString();
                    Error_data.department = user.DepartmentName;
                    Error_data.district_name = user.DistrictName;
                    Error_data.error_test = "Alredy registered, Officer Not Approved Your Account";
                    Error_data.gpname = user.GramPanchayatName;
                    Error_data.ipaddress = ipAddress;
                    Error_data.mobile = user.ContactNumber;
                    Error_data.nodal_officer = user.NodalOfficer;
                    Error_data.state_name = user.StateName;
                    Error_data.user_email = user.Email;
                    Error_data.user_name = user.UserName;
                    Error_data.user_password = user.Password;
                    Error_data.error_count = "1";
                    Error_data.user_type = "MisSignup";
                    ABE.obj_abhy_tbl_error.Add(Error_data);
                    ABE.SaveChanges();

                    return RedirectToAction("WSP_GWM_HOME", "WspNew");
                    //return Json("Alredy registered, Officer Not Approved Your Account", JsonRequestBehavior.AllowGet);
                }
                else
                {
                    if (Dataa.Count == 0)
                    {
                        var Error_data = new abhy_tbl_error();
                        Error_data.block_name = user.BlockName;
                        Error_data.date_time = DateTime.Now.ToString();
                        Error_data.department = user.DepartmentName;
                        Error_data.district_name = user.DistrictName;
                        Error_data.error_test = "Already registered";
                        Error_data.gpname = user.GramPanchayatName;
                        Error_data.ipaddress = ipAddress;
                        Error_data.mobile = user.ContactNumber;
                        Error_data.nodal_officer = user.NodalOfficer;
                        Error_data.state_name = user.StateName;
                        Error_data.user_email = user.Email;
                        Error_data.user_name = user.UserName;
                        Error_data.user_password = user.Password;
                        Error_data.error_count = "1";
                        Error_data.user_type = "MisSignup";
                        ABE.obj_abhy_tbl_error.Add(Error_data);
                        ABE.SaveChanges();
                        return RedirectToAction("WSP_GWM_HOME", "WspNew");
                    }
                    else
                    {
                        var Error_data = new abhy_tbl_error();
                        Error_data.block_name = user.BlockName;
                        Error_data.date_time = DateTime.Now.ToString();
                        Error_data.department = user.DepartmentName;
                        Error_data.district_name = user.DistrictName;
                        Error_data.error_test = "Duplicate Data is there";
                        Error_data.gpname = user.GramPanchayatName;
                        Error_data.ipaddress = ipAddress;
                        Error_data.mobile = user.ContactNumber;
                        Error_data.nodal_officer = user.NodalOfficer;
                        Error_data.state_name = user.StateName;
                        Error_data.user_email = user.Email;
                        Error_data.user_name = user.UserName;
                        Error_data.user_password = user.Password;
                        Error_data.error_count = "1";
                        Error_data.user_type = "MisSignup";
                        ABE.obj_abhy_tbl_error.Add(Error_data);
                        ABE.SaveChanges();
                        return RedirectToAction("WSP_GWM_HOME", "WspNew");
                    }

                    // return Json("Alredy registered", JsonRequestBehavior.AllowGet);
                }

            }

            else
            {
                string ipAddress = Request.ServerVariables["HTTP_X_FORWARDED_FOR"];

                if (users.Count == 0)
                {
                    if (string.IsNullOrEmpty(ipAddress))
                    {
                        ipAddress = Request.ServerVariables["REMOTE_ADDR"];
                    }

                    var Grampanchayat = "";
                    var StateName = "";
                    var DistName = "";
                    var BlockName = "";

                    if (user.StateName != "" && user.StateName != "0" && user.StateName != null)
                    {

                        StateName = user.StateName;
                        Session["gstate"] = StateName;

                    }
                    else
                    {
                        Session["gstate"] = "";
                    }
                    if (user.DistrictName != "" && user.DistrictName != "0" && user.DistrictName != null)
                    {

                        DistName = user.DistrictName;
                        Session["gdist"] = DistName;

                    }
                    else
                    {
                        Session["gdist"] = "";
                    }

                    if (user.BlockName != "" && user.BlockName != "0" && user.BlockName != null)
                    {

                        BlockName = user.BlockName;
                        Session["gblock"] = BlockName;

                    }
                    else
                    {
                        Session["gblock"] = "";
                    }

                    if (user.GramPanchayatName != "" && user.GramPanchayatName != "0" && user.GramPanchayatName != null)
                    {

                        Grampanchayat = user.GramPanchayatName;
                        Session["ggram"] = Grampanchayat;
                    }
                    else
                    {
                        Session["ggram"] = "";
                    }
                    Session["Email"] = user.Email;

                    Users newuser = new Users();
                    if (Grampanchayat != "" && StateName != "" && DistName != "" && BlockName != "")
                    {
                        var users132 = ABE.objUsers.Where(x => x.StateName == StateName && x.DistrictName == DistName && x.BlockName == BlockName && x.GramPanchayatName == Grampanchayat).ToList();
                        if (users132.Count != 0)
                        {
                            var Error_data = new abhy_tbl_error();
                            Error_data.block_name = user.BlockName;
                            Error_data.date_time = DateTime.Now.ToString();
                            Error_data.department = user.DepartmentName;
                            Error_data.district_name = user.DistrictName;
                            Error_data.error_test = "The GramPanchayat is Alreddy Registered";
                            Error_data.gpname = user.GramPanchayatName;
                            Error_data.ipaddress = ipAddress;
                            Error_data.mobile = user.ContactNumber;
                            Error_data.nodal_officer = user.NodalOfficer;
                            Error_data.state_name = user.StateName;
                            Error_data.user_email = user.Email;
                            Error_data.user_name = user.UserName;
                            Error_data.user_password = user.Password;
                            Error_data.error_count = "1";
                            Error_data.user_type = "MisSignup";
                            ABE.obj_abhy_tbl_error.Add(Error_data);
                            ABE.SaveChanges();
                            return RedirectToAction("WSP_GWM_HOME", "WspNew");

                        }
                    }


                    string Code = randomCodeGeneration();
                    string email1 = user.Email.ToLower().Trim();
                    string NodalOfficer_mail = user.NodalOfficer.ToLower().Trim();
                    string ContactNumber_mail = user.ContactNumber.ToLower().Trim();
                    string StateName_mail = user.StateName.ToLower().Trim();
                    string DepartmentName_mail = user.DepartmentName.ToLower().Trim();
                    string DistrictName_mail = user.DistrictName.ToLower().Trim();
                    string BlockName_mail = user.BlockName.ToLower().Trim();
                    string GramPanchayatName_mail = user.GramPanchayatName.ToLower().Trim();


                    string userName = user.UserName.ToLower().Trim();
                A1:
                    Guid vid = Guid.NewGuid();
                    string viid = vid.ToString();
                    List<Users> existingcodes = ABE.objUsers.Where(x => x.VerificationCode == viid).ToList();
                    if (existingcodes.Count != 0)
                    {
                        goto A1;
                    }


                    string[] uuu = Request.Url.AbsoluteUri.Split('/');
                    string vertificatincode = uuu[0] + "//" + uuu[2] + "/Home/Verify?code=" + viid;



                    TempData["VerificationCode"] = vid.ToString();
                    TempData["Verifiedornot"] = "false";

                    string contemail_user = email1;
                    string subject = "Successful Registration for MIS under ATAL BHUJAL YOJANA - Email Verification Required";
                    string Verify = uuu[0] + "//" + uuu[2] + "/WspNew/MIS_VerifiedEmail?code=" + viid;
                    //string Verify1 = Server.MapPath("/WspNew/MIS_VerifiedEmail");
                    //string Verify = $"{Verify1}?code={viid}";
                    //var imageString = string.Format("data:image/png;base64,{0}", Convert.ToBase64String(CompanyLogo));
                    StringBuilder sb = new StringBuilder();

                    sb.Append("<p>Dear Sir/Madam,</p>");
                    sb.Append("<br>");
                    sb.Append("<p>We are pleased to inform you that your registration for the Management Information System (MIS) under the Atal Bhujal Yojana (ATAL BHUJAL YOJANA) for <b> " + NodalOfficer_mail + " </b>has been successfully received. However, before you can access the system and start benefiting from its features, we kindly request you to verify your email address.</p>");
                    sb.Append("<p><b>To verify your email address, please follow these steps:</b></p>");
                    sb.Append("<p>1. Click on the &quot;Verify&quot; button provided in this email.</p>");
                    sb.Append("<p>2. You will be directed to a confirmation page.</p>");
                    sb.Append("<p>3. Once on the confirmation page, your email address will be successfully verified.</p>");
                    sb.Append("<p>Please note that your registration and credentials will be approved by the State level nodal officer after your email is verified. Once this approval process is complete, you will receive an additional confirmation email.</p>");
                    sb.Append($"<a href='{Verify}' class='btn btn-primary' style='background-color:#5cb85c; display:inline-block; font-family: sans-serif; font-size: 15px; line-height: 15px; text-decoration: none; padding: 13px 17px; color: #ffffff; border-radius: 4px;margin-right: 10px;'>Verify</a>");
                    sb.Append("<br>");
                    sb.Append("<br>");
                    sb.Append("<img src='" + path + "' border='0' style='margin-top: 5px; width: 100px; height: 100px; margin-left: 5px; margin-bottom: 5px;'>");

                    string results = WebConstents.SendEmailSMTP(contemail_user, "", subject, sb.ToString(), "");

                    Users NewUser = new Users();
                    NewUser.mail_sent = results;
                    NewUser.VerificationCode = vid.ToString().Trim();
                    NewUser.Verifiedornot = "False".Trim();
                    NewUser.UserName = user.UserName.ToString().Trim();
                    NewUser.ContactNumber = user.ContactNumber.ToString().Trim();
                    //kept tolower to email 
                    NewUser.Email = user.Email.ToLower().ToString();
                    NewUser.DepartmentName = user.DepartmentName.ToString().Trim();
                    //Encription Code


                    NewUser.Villagename = user.VerificationCode;
                    NewUser.Password = user.Password;
                    NewUser.CheckingCode = random;

                    //--End
                    NewUser.NodalOfficer = user.NodalOfficer.ToString().Trim();
                    NewUser.RollId = "3".Trim();
                    // NewUser.isactive = 0;// for concucurrent login

                    if (user.GramPanchayatName != "" && user.GramPanchayatName != null && user.GramPanchayatName != "0")
                    {

                        NewUser.GramPanchayatName = user.GramPanchayatName;
                        Session["ggram"] = Grampanchayat;
                    }
                    else
                    {
                        NewUser.GramPanchayatName = "";
                        Session["ggram"] = "";
                    }
                    if (user.StateName != "" && user.StateName != null && user.StateName != "0")
                    {

                        NewUser.StateName = user.StateName;
                        Session["gstate"] = StateName;

                    }
                    else
                    {

                        NewUser.StateName = "";
                        Session["gstate"] = "";
                    }
                    if (user.DistrictName != "" && user.DistrictName != null && user.DistrictName != "0")
                    {

                        NewUser.DistrictName = user.DistrictName;
                        Session["gdist"] = DistName;

                    }
                    else
                    {
                        NewUser.DistrictName = "";
                        Session["gdist"] = "";
                    }

                    if (user.BlockName != "" && user.BlockName != null && user.BlockName != "0")
                    {

                        NewUser.BlockName = user.BlockName;
                        Session["gblock"] = BlockName;

                    }
                    else
                    {
                        NewUser.BlockName = "";
                        Session["gblock"] = "";
                    }

                    //  NewUser.stateofficer_email = contemail;
                    NewUser.VerificationCode = vid.ToString().Trim();
                    NewUser.Verifiedornot = "False";
                    NewUser.EntryTime = DateTime.Now;
                    ABE.objUsers.Add(NewUser);

                    Abhy_Verifications objver = new Abhy_Verifications();
                    objver.verification_code = vid.ToString().Trim();

                    ABE.objAbhy_Verifications.Add(objver);
                    ABE.SaveChanges();
                    string aa = "";

                    int a = ABE.SaveChanges();
                    if (ABE.SaveChanges() == 0)
                    {
                        //string results1 = WebConstents.SendEmailSMTP(contemail, "", "New registration request", sb.ToString(), "");
                        Session["Error"] = "Activation Link sent to registered email id!";
                    }
                    var Error_data1 = new abhy_tbl_error();
                    Error_data1.block_name = user.BlockName;
                    Error_data1.date_time = DateTime.Now.ToString();
                    Error_data1.department = user.DepartmentName;
                    Error_data1.district_name = user.DistrictName;
                    Error_data1.error_count = "1";
                    Error_data1.error_test = "Please Check Your Registered Mail for Registration";
                    Error_data1.gpname = user.GramPanchayatName;
                    Error_data1.ipaddress = ipAddress;
                    Error_data1.mobile = user.ContactNumber;
                    Error_data1.nodal_officer = user.NodalOfficer;
                    Error_data1.state_name = user.StateName;
                    Error_data1.user_email = user.Email;
                    Error_data1.user_name = user.UserName;
                    Error_data1.user_password = user.Password;
                    Error_data1.user_type = "MisSignup";
                    ABE.obj_abhy_tbl_error.Add(Error_data1);
                    ABE.SaveChanges();
                    //return RedirectToAction("WSP_GWM_HOME", "WspNew");
                    //  return Json("Please Check Your Registered Mail for Registration", JsonRequestBehavior.AllowGet);        



                }
                else
                {
                    var Error_data = new abhy_tbl_error();
                    Error_data.block_name = user.BlockName;
                    Error_data.date_time = DateTime.Now.ToString();
                    Error_data.department = user.DepartmentName;
                    Error_data.district_name = user.DistrictName;
                    Error_data.error_count = "1";
                    Error_data.error_test = "Duplicate data is there";
                    Error_data.gpname = user.GramPanchayatName;
                    Error_data.ipaddress = ipAddress;
                    Error_data.mobile = user.ContactNumber;
                    Error_data.nodal_officer = user.NodalOfficer;
                    Error_data.state_name = user.StateName;
                    Error_data.user_email = user.Email;
                    Error_data.user_name = user.UserName;
                    Error_data.user_password = user.Password;
                    Error_data.user_type = "MisSignup";
                    ABE.obj_abhy_tbl_error.Add(Error_data);
                    ABE.SaveChanges();
                }
            }
            return RedirectToAction("WSP_GWM_HOME", "WspNew");
        }

        public ActionResult MIS_VerifiedEmail(string code)
        {
            string viid = code.Trim();
            var users = ABE.objUsers.Where(x => x.VerificationCode == viid).FirstOrDefault();


            string StateName1 = users.NodalOfficer;
            if (StateName1 == "Admin")
            {
                StateName1 = "NPMU";
            }
            else if (StateName1 == "National Level Nodal Officer")
            {
                StateName1 = "NPMU";
            }
            else if (StateName1 == "State Level Nodal Officer")
            {
                StateName1 = "NPMU";
            }
            else
            {
                StateName1 = users.StateName;
            }

            var Data123 = ABE.obj_abhy_stateofficer_regs.Where(x => x.state_name == StateName1).FirstOrDefault();
            string contemail = Data123.stateofficer_mailid;

            string[] uuu = Request.Url.AbsoluteUri.Split('/');
            string Approved = uuu[0] + "//" + uuu[2] + "/Home/MIS_Registration_Aprroved_MIS?code=" + viid;
            //string GrievancePending = uuu[0] + "//" + uuu[2] + "/Grievance/GrievancePending?code=" + sth;
            string Decline = uuu[0] + "//" + uuu[2] + "/Home/MIS_Registration_Decline_MIS?code=" + viid;

            string subject = "Approval for Registered User (" + users.NodalOfficer + ") for MIS under ATAL BHUJAL YOJANA";
            StringBuilder sb = new StringBuilder();
            sb.Append("<body style='background:#dfdfdf;'>");

            sb.Append("<div style='border: 1px solid green; padding:25px;'>");
            sb.Append("<p>Dear Sir/Madam,</p>");
            sb.Append("<div>");
            sb.Append("<p>With the below-mentioned details,<b> " + users.NodalOfficer + " </b> has successfully registered himself for MIS under Atal Bhujal Yojana. Please verify the details and approve or reject them by clicking on the buttons shown below.</p>");
            sb.Append("<br>");
            sb.Append("<b>User Name:  " + users.UserName + ",</b>");
            sb.Append("</div>");
            sb.Append("<br>");
            sb.Append("<br>");
            sb.Append("<br>");

            sb.Append("<table role='presentation' style='margin-left:50px;border: 1px solid black;border-collapse: collapse; padding:5px 10px'>");
            sb.Append("<tbody>");
            sb.Append("</tr>");
            sb.Append("<th style='border: 1px solid black;border-collapse: collapse;text-align: left; text-transform: capitalize; padding:5px 10px'>");
            sb.Append("<b> <span style='color:#337ab7'> Nodal officer : </span> " + users.NodalOfficer + "</b>");
            sb.Append("</th>");
            sb.Append("<th style='border: 1px solid black;border-collapse: collapse; text-align: left; text-transform: capitalize;  padding:5px 10px'>");
            sb.Append("<b>  <span style='color:#337ab7'>State : </span>" + users.StateName + "</b>");
            sb.Append("</th>");
            sb.Append("</tr>");

            sb.Append("<tr>");
            sb.Append("<th style='border: 1px solid black;border-collapse: collapse; text-align: left; text-transform: capitalize;  padding:5px 10px'>");
            sb.Append("<b> <span style='color:#337ab7'> District :</span> " + users.DistrictName + "</b>");
            sb.Append("</th>");
            sb.Append("<th style='border: 1px solid black;border-collapse: collapse; text-align: left; text-transform: capitalize;  padding:5px 10px'>");
            sb.Append("<b><span style='color:#337ab7'> Block :</span> " + users.BlockName + "</b>");
            sb.Append("</th>");
            sb.Append("</tr >");

            sb.Append("<tr>");

            sb.Append("<th style='border: 1px solid black;border-collapse: collapse; text-align: left; text-transform: capitalize;  padding:5px 10px'>");
            sb.Append("<b> <span style='color:#337ab7'>Gram Panchayat : </span> " + users.GramPanchayatName + "</b>");
            sb.Append("</th>");
            sb.Append("<th style='border: 1px solid black;border-collapse: collapse; text-align: left; text-transform: capitalize;  padding:5px 10px'>");
            sb.Append("<b> <span style='color:#337ab7'>Email :</span> " + users.Email + "</b>");
            sb.Append("</th>");
            sb.Append("</tr>");

            sb.Append("<tr>");

            sb.Append("<th style='border: 1px solid black;border-collapse: collapse; text-align: left; text-transform: capitalize;  padding:5px 10px'>");
            sb.Append("<b> <span style='color:#337ab7'> Department Name : </span> " + users.DepartmentName + "</b>");
            sb.Append("</th>");
            sb.Append("<th style='border: 1px solid black;border-collapse: collapse; text-align: left; text-transform: capitalize;  padding:5px 10px'>");
            sb.Append("<b> <span style='color:#337ab7'> Contact Number : </span> " + users.ContactNumber + "</b>");
            sb.Append("</th>");
            sb.Append("</tr>");

            sb.Append("<br>");
            sb.Append("<br>");
            sb.Append("</tr>");
            sb.Append("</tbody>");


            sb.Append("</table>");
            sb.Append("<br>");
            sb.Append($"<a href='{Approved}' class='btn btn-primary' style='background-color:#5cb85c; display:inline-block; font-family: sans-serif; font-size: 15px; line-height: 15px; text-decoration: none; padding: 13px 17px; color: #ffffff; border-radius: 4px;margin-right: 10px;'>Approve</a>");


            sb.Append($"<a href='{Decline}' class=' btn btn-danger' style='background-color:#f0ad4e; display:inline-block; font-family: sans-serif; font-size: 15px; line-height: 15px; text-decoration: none; padding: 13px 17px; color: #ffffff; border-radius: 4px;'>Decline</a>");
            sb.Append("</div>");
            sb.Append("</body>");

            sb.Append("<img src='" + path + "' border='0' style='margin-top: 5px; width: 100px; height: 100px; margin-left: 5px; margin-bottom: 5px;'>");

            string results1 = WebConstents.SendEmailSMTP(contemail, "", subject, sb.ToString(), "");

            sb.Clear();


            string subject1 = "Email Verified";
            string email = users.Email;

            sb.Append("<p>Dear Sir/Madam,</p>");
            sb.Append("<br>");
            sb.Append("<p>Thank you for the email verification. Once the credential is authenticated by your <b>State-Level Officer</b>, you will receive a confirmation email with your login credentials.</p>");

            sb.Append("<br>");
            sb.Append("<img src='" + path + "' border='0' style='margin-top: 5px; width: 100px; height: 100px; margin-left: 5px; margin-bottom: 5px;'>");

            string results2 = WebConstents.SendEmailSMTP(email, "", subject1, sb.ToString(), "");

            users.email_verify = 1;

            ABE.Entry(users).State = EntityState.Modified;
            ABE.SaveChanges();

            return RedirectToAction("WSP_GWM_HOME", "WspNew");
        }

        [HttpPost]
        public ActionResult ForgetPassword1(Users Data)
        {

            string ipAddress1 = Request.ServerVariables["HTTP_X_FORWARDED_FOR"];
            if (string.IsNullOrEmpty(ipAddress1))
            {
                ipAddress1 = Request.ServerVariables["REMOTE_ADDR"];
            }

            var test_error_data = ABE.obj_abhy_tbl_error.Where(x => x.ipaddress == ipAddress1).ToList();

            if (test_error_data.Count != 0)
            {
                for (var i = 0; i < test_error_data.Count; i++)
                {
                    var test_error_data1 = test_error_data[i];
                    ABE.Entry(test_error_data1).State = EntityState.Deleted;
                    ABE.SaveChanges();
                }

            }


            var Email = Data.Email.ToLower().Trim();

            if (Session["Forget_PWD_Captcha"] != null)
            {
                if (Session["Forget_PWD_Captcha"].ToString() != Data.clientcaptcha)
                {
                    Session["ForgetError"] = "Your Captcha is Not Matched";
                    var Error_data = new abhy_tbl_error();
                    Error_data.date_time = DateTime.Now.ToString();
                    Error_data.error_test = "Captcha is not Matched";
                    Error_data.ipaddress = ipAddress1;
                    Error_data.user_email = Email;
                    Error_data.error_count = "1";
                    Error_data.user_type = "ForgetPassword";
                    ABE.obj_abhy_tbl_error.Add(Error_data);
                    ABE.SaveChanges();
                    return RedirectToAction("WSP_GWM_HOME", "WspNew");
                }
            }
            else
            {
                Session["ForgetError"] = "Your Captcha  is Expired";
                var Error_data = new abhy_tbl_error();
                Error_data.date_time = DateTime.Now.ToString();
                Error_data.error_test = "Your Captcha  is Expired";
                Error_data.ipaddress = ipAddress1;
                Error_data.user_email = Email;
                Error_data.error_count = "1";
                Error_data.user_type = "ForgetPassword";
                ABE.obj_abhy_tbl_error.Add(Error_data);
                ABE.SaveChanges();
                return RedirectToAction("WSP_GWM_HOME", "WspNew");
            }

            List<Users> reg1 = ABE.objUsers.Where(x => x.Email == Email && x.Verifiedornot == "True").ToList();

            if (reg1.Count != 0 && Data.Email == reg1[0].Email.Trim())
            {
                var Data11 = ABE.obj_abhy_forgotpwd.Where(x => x.email == Email && x.application_type == "WEB").ToList();
                if (Data11.Count != 0)
                {
                    for (var i = 0; i < Data11.Count; i++)
                    {

                        ABE.Entry(Data11[i]).State = EntityState.Deleted;

                        ABE.SaveChanges();
                    }
                }


                Guid vid = Guid.NewGuid();
                string viid = vid.ToString();

                var abhy_forgotpwd = new abhy_forgotpwd();
                abhy_forgotpwd.application_type = "WEB";
                abhy_forgotpwd.activedate = DateTime.Now.ToString();
                string time = DateTime.Now.ToString("t");
                abhy_forgotpwd.time_today = time;
                abhy_forgotpwd.username = reg1[0].UserName;
                abhy_forgotpwd.nodalofficer = reg1[0].NodalOfficer;
                abhy_forgotpwd.email = Email;
                abhy_forgotpwd.resetlink = viid;
                ABE.obj_abhy_forgotpwd.Add(abhy_forgotpwd);
                ABE.SaveChanges();

                string[] uuu = Request.Url.AbsoluteUri.Split('/');
                string GrievanceAprroved = uuu[0] + "//" + uuu[2] + "/Contact/Change_password?code=" + viid;

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
                string results1 = WebConstents.SendEmailSMTP(Email, "", Mail_Subject, sb.ToString(), "");

                //Session["ForgetError"] = "Please Check Your Mail";
                Session["ForgetError"] = "Please check your mail inbox to change your password";
                //Session["FCode"] = Code;
                var Error_data = new abhy_tbl_error();
                Error_data.date_time = DateTime.Now.ToString();
                Error_data.error_test = "Please check your mail inbox to change your password";
                Error_data.ipaddress = ipAddress1;
                Error_data.user_email = Email;
                Error_data.error_count = "1";
                Error_data.user_type = "ForgetPassword";
                ABE.obj_abhy_tbl_error.Add(Error_data);
                ABE.SaveChanges();
                return RedirectToAction("WSP_GWM_HOME", "WspNew");
                // return Json("Please Check Your Mail", JsonRequestBehavior.AllowGet);
            }
            else
            {
                Session["ForgetError"] = "You Have Not Registered";
                List<Users> reg11 = ABE.objUsers.Where(x => x.Email == Email).ToList();
                if (reg11.Count == 0)
                {
                    Session["ForgetError"] = "You Have Not Registered";
                    var Error_data = new abhy_tbl_error();
                    Error_data.date_time = DateTime.Now.ToString();
                    Error_data.error_test = "You Have Not Registered";
                    Error_data.ipaddress = ipAddress1;
                    Error_data.user_email = Email;
                    Error_data.error_count = "1";
                    Error_data.user_type = "ForgetPassword";
                    ABE.obj_abhy_tbl_error.Add(Error_data);
                    ABE.SaveChanges();
                    return RedirectToAction("WSP_GWM_HOME", "WspNew");
                }
                else
                {
                    Session["ForgetError"] = "You had Registered but, you have to Activate your Account, Please check your Email";
                    var Error_data = new abhy_tbl_error();
                    Error_data.date_time = DateTime.Now.ToString();
                    Error_data.error_test = "You had Registered but, you have to Activate your Account, Please check your Email";
                    Error_data.ipaddress = ipAddress1;
                    Error_data.user_email = Email;
                    Error_data.error_count = "1";
                    Error_data.user_type = "ForgetPassword";
                    ABE.obj_abhy_tbl_error.Add(Error_data);
                    ABE.SaveChanges();
                    return RedirectToAction("WSP_GWM_HOME", "WspNew");
                }

            }

        }
        [HttpGet]
        public ActionResult Error_Info()
        {
            string ipAddress1 = Request.ServerVariables["HTTP_X_FORWARDED_FOR"];
            if (string.IsNullOrEmpty(ipAddress1))
            {
                ipAddress1 = Request.ServerVariables["REMOTE_ADDR"];
            }
            var Data = ABE.obj_abhy_tbl_error.Where(x => x.ipaddress == ipAddress1).ToList();
            return Json(Data, JsonRequestBehavior.AllowGet);
        }

        public ActionResult WSP_GRM_HOME_Login()
        {

            int UserId = Convert.ToInt32(Session["UserId"]);
            var data = ABE.obj_user_autologin.Where(x => x.user_id == UserId).ToList();
            if (data != null)
            {
                ABE.obj_user_autologin.RemoveRange(data);
                ABE.SaveChanges();
            }
            DateTime now = DateTime.Now;
            List<Users> users = new List<Users>();
            List<login_attempts> ErrorData = new List<login_attempts>();
            //convert email to tolower
            string Email = Convert.ToString(Session["Email"]);

            string ipAddress1 = Request.ServerVariables["HTTP_X_FORWARDED_FOR"];

            if (string.IsNullOrEmpty(ipAddress1))
            {
                ipAddress1 = Request.ServerVariables["REMOTE_ADDR"];
            }
            var test_error_data = ABE.obj_abhy_tbl_error.Where(x => x.ipaddress == ipAddress1).ToList();

            if (test_error_data.Count != 0)
            {
                for (var i = 0; i < test_error_data.Count; i++)
                {
                    var test_error_data1 = test_error_data[i];
                    ABE.Entry(test_error_data1).State = EntityState.Deleted;

                    ABE.SaveChanges();
                }
            }
            try
            {

                users = ABE.objUsers.Where(x => x.Email == Email && x.Verifiedornot == "True").ToList();
                string id = ENCandDEC.EncryptAES256(users[0].UserId.ToString());
                var Verifiedornot = ABE.objUsers.Where(x => x.Email == Email).Select(x => x.Verifiedornot).FirstOrDefault();
                int UserID = Convert.ToInt32(users[0].UserId);
                if (users.Count != 0)
                {
                    Session["Email"] = users[0].Email;
                    Session["Officer"] = users[0].NodalOfficer;
                    Session["UserName"] = users[0].UserName;
                    Session["UserId"] = users[0].UserId;
                    string token = Guid.NewGuid().ToString();
                    Session["UserToken"] = token;

                    AppSession.Set("UserId", users[0].UserId);
                    //Rajnish Changes start**
                    int iUserId = Convert.ToInt32(users[0].UserId);
                    var user = ABE.objUsers.Where(x => x.UserId == iUserId).FirstOrDefault();
                    user.UserId = iUserId;
                    user.UserToken = token;
                    ABE.Entry(user).State = EntityState.Modified;
                    ABE.SaveChanges();
                    //users[0].UserToken = token;
                    // Changes end

                    //AutoLogin.SaveDate(Convert.ToInt32(users[0].UserId), ipAddress1);
                    SaveDate(Convert.ToInt32(users[0].UserId), ipAddress1);

                    if (users[0].access_auth == null)
                    {
                        Session["Access_Auth"] = "";
                    }
                    else
                    {
                        Session["Access_Auth"] = users[0].access_auth;
                    }

                    var UserName = users[0].NodalOfficer;
                    if (UserName == "State Level Nodal Officer")
                    {
                        Session["gstate"] = users[0].StateName;
                    }
                    else if (UserName == "District Level Nodal Officer")
                    {
                        Session["gstate"] = users[0].StateName;
                        Session["gdist"] = users[0].DistrictName;
                    }
                    else if (UserName == "Block Level Nodal Officer")
                    {
                        Session["gstate"] = users[0].StateName;
                        Session["gdist"] = users[0].DistrictName;
                        Session["gblock"] = users[0].BlockName;
                    }
                    else if (UserName == "Gram Panchyat Nodal Officer")
                    {
                        Session["gstate"] = users[0].StateName;
                        Session["gdist"] = users[0].DistrictName;
                        Session["gblock"] = users[0].BlockName;
                        Session["ggram"] = users[0].GramPanchayatName;
                    }





                    var LoginPageSessionName = users[0].NodalOfficer.ToString();
                    //CookieOptions options = new CookieOptions();
                    //HttpCookie cookie = new HttpCookie("Email", Email);

                    if (Session["Access_Auth"].ToString() == "GP-Training")
                    {
                        string url = string.Format("/MasterDropDown/current_event_gp_auth?userid={0}", id);
                        login_datetime logindata = new login_datetime();
                        logindata.name = Session["UserName"].ToString();
                        logindata.email = Email;
                        logindata.loginlogout = "Login";
                        logindata.checkloginlogout = "1";
                        logindata.date = DateTime.Now.ToString("yyyy-MM-dd");
                        logindata.datetime = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
                        ABE.obj_login_datetime.Add(logindata);
                        ABE.SaveChanges();



                        return Redirect(url);
                    }
                    else if (Session["Access_Auth"].ToString() == "dist-Training")
                    {
                        string url = string.Format("/MasterDropDown/current_event_dist_auth?userid={0}", id);
                        login_datetime logindatab = new login_datetime();
                        logindatab.name = Session["UserName"].ToString();
                        logindatab.email = Email;
                        logindatab.loginlogout = "Login";
                        logindatab.checkloginlogout = "1";
                        logindatab.date = DateTime.Now.ToString("yyyy-MM-dd");
                        logindatab.datetime = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
                        ABE.obj_login_datetime.Add(logindatab);
                        ABE.SaveChanges();


                        return Redirect(url);
                    }
                    else if (Session["Access_Auth"].ToString() == "block-Training")
                    {
                        string url = string.Format("/MasterDropDown/current_event_block_auth?userid={0}", id);
                        login_datetime logindatac = new login_datetime();
                        logindatac.name = Session["UserName"].ToString();
                        logindatac.email = Email;
                        logindatac.loginlogout = "Login";
                        logindatac.checkloginlogout = "1";
                        logindatac.date = DateTime.Now.ToString("yyyy-MM-dd");
                        logindatac.datetime = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
                        ABE.obj_login_datetime.Add(logindatac);
                        ABE.SaveChanges();



                        return Redirect(url);
                    }
                    else if (users[0].access_auth == "dli3")
                    {
                        string url = string.Format("/WSPHome/Monitoring_evaluation?userid={0}", id);
                        login_datetime logindatad = new login_datetime();
                        logindatad.name = Session["UserName"].ToString();
                        logindatad.email = Email;
                        logindatad.loginlogout = "Login";
                        logindatad.checkloginlogout = "1";
                        logindatad.date = DateTime.Now.ToString("yyyy-MM-dd");
                        logindatad.datetime = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
                        ABE.obj_login_datetime.Add(logindatad);
                        ABE.SaveChanges();



                        return Redirect(url);
                    }
                    else if (users[0].access_auth == "StateTraining")
                    {
                        string url = string.Format("/MasterDropDown/Training_evaluation?userid={0}", id);
                        login_datetime logindatae = new login_datetime();
                        logindatae.name = Session["UserName"].ToString();
                        logindatae.email = Email;
                        logindatae.loginlogout = "Login";
                        logindatae.checkloginlogout = "1";
                        logindatae.date = DateTime.Now.ToString("yyyy-MM-dd");
                        logindatae.datetime = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
                        ABE.obj_login_datetime.Add(logindatae);
                        ABE.SaveChanges();



                        return Redirect(url);
                    }
                    string urls = string.Format("/WspNew/MIS_Modules?userid={0}", id);
                    login_datetime logindataf = new login_datetime();
                    logindataf.name = Session["UserName"].ToString();
                    logindataf.email = Email;
                    logindataf.loginlogout = "Login";
                    logindataf.date = DateTime.Now.ToString("yyyy-MM-dd");
                    logindataf.datetime = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
                    ABE.obj_login_datetime.Add(logindataf);
                    ABE.SaveChanges();



                    return Redirect(urls);
                }
                else if (Verifiedornot == "False")
                {
                    Session["Error"] = "State Officer not Approved Your Account";
                    abhy_tbl_error error_data = new abhy_tbl_error();
                    error_data.error_test = "State Officer not Approved Your Account";
                    error_data.user_email = Email;
                    error_data.user_password = users[0].Password;
                    error_data.user_type = "login";
                    error_data.ipaddress = ipAddress1;
                    error_data.error_count = "1";
                    ABE.obj_abhy_tbl_error.Add(error_data);
                    ABE.SaveChanges();
                    return RedirectToAction("WSP_GWM_HOME", "WspNew");
                }
                else
                {
                    Session["Error"] = "Your Email Id is not Registered";
                    abhy_tbl_error error_data = new abhy_tbl_error();
                    error_data.error_test = "Your Email Id is not Registered";
                    error_data.user_email = Email;
                    error_data.user_password = users[0].Password;
                    error_data.user_type = "login";
                    error_data.ipaddress = ipAddress1;
                    error_data.error_count = "1";
                    ABE.obj_abhy_tbl_error.Add(error_data);
                    ABE.SaveChanges();
                    return RedirectToAction("WSP_GWM_HOME", "WspNew");
                }
            }
            catch (Exception ex)
            {
                Session["Error"] = "Your Credentials not Matched";
                abhy_tbl_error error_data = new abhy_tbl_error();
                error_data.error_test = "Your Credentials not Matched";
                error_data.user_email = Email;
                error_data.user_password = users[0].Password;
                error_data.user_type = "login";
                error_data.ipaddress = ipAddress1;
                error_data.error_count = "1";
                ABE.obj_abhy_tbl_error.Add(error_data);
                ABE.SaveChanges();
                return RedirectToAction("WSP_GWM_HOME", "WspNew");
                //   return View(ex);
            }
        }

        public ActionResult CheckLoginStatus(int UserId = 0)
        {
            try
            {
                int i = 0;
                //int userId = Convert.ToInt32(Session["UserId"]);
                user_autologin users = new user_autologin();
                var IP = GetIp();
                var data = ABE.obj_user_autologin.Where(x => x.user_id == UserId && x.last_ip == IP).FirstOrDefault();
                if (data == null)
                {
                    return RedirectToAction("WSP_GWM_HOME", "WspNew");
                }
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
            catch (Exception Ex)
            {
                abhy_tbl_error error_data = new abhy_tbl_error();
                error_data.error_test = Ex.Message;
                error_data.user_email = Ex.StackTrace;
                error_data.user_type = "AutoLogin";
                error_data.error_count = "1";
                ABE.obj_abhy_tbl_error.Add(error_data);
                ABE.SaveChanges();
                return RedirectToAction("WSP_GWM_HOME", "WspNew");
            }
        }

        //Backup WSP_GRM_HOME
        //[HttpPost]
        //public ActionResult WSP_GRM_HOME(Users Data)
        //{
        //    string ipAddress1 = "";
        //    var Email = Data.Email.ToLower().Trim();
        //    try
        //    {
        //        //return RedirectToAction("under_maintainance", "Home");
        //        DateTime now = DateTime.Now;
        //        List<Users> users = new List<Users>();
        //        List<login_attempts> ErrorData = new List<login_attempts>();
        //        //convert email to tolower
        //        string iEmail = Email;
        //        string stdate = DateTime.Now.ToString("yyyy-MM-dd");
        //        var userlog = ABE.obj_login_datetime.Where(x => x.email == iEmail
        //        && x.date == stdate
        //        //&& x.loginlogout == "Login"
        //        ).OrderByDescending(x => x.id).FirstOrDefault();
        //        if ((userlog != null) && (userlog.loginlogout == "Login"))
        //            {
        //                Session["Email"] = iEmail.ToString();
        //                Session["Error"] = "Your account is currently logged in on another system.";
        //                ViewBag.Email = iEmail.ToString();
        //                return RedirectToAction("LogInForce", "WspNew");
        //        }
        //        else
        //        {
        //            ipAddress1 = Request.ServerVariables["HTTP_X_FORWARDED_FOR"];

        //            if (string.IsNullOrEmpty(ipAddress1))
        //            {
        //                ipAddress1 = Request.ServerVariables["REMOTE_ADDR"];
        //            }
        //            //string ipAddress1 = GetIPAddress();
        //            var test_error_data = ABE.obj_abhy_tbl_error.Where(x => x.ipaddress == ipAddress1).ToList();

        //            if (test_error_data.Count != 0)
        //            {
        //                for (var i = 0; i < test_error_data.Count; i++)
        //                {
        //                    var test_error_data1 = test_error_data[i];
        //                    ABE.Entry(test_error_data1).State = EntityState.Deleted;
        //                    ABE.SaveChanges();
        //                }
        //            }

        //            string[] SkipCaptcha = Data.Email.Split('@');
        //            if (SkipCaptcha[1] != "kreatetechnologies.com")
        //            {
        //                if (Session["text"].ToString() != Data.clientcaptcha)
        //                {
        //                    Session["Error"] = "Captcha is Not Matched";
        //                    abhy_tbl_error error_data = new abhy_tbl_error();
        //                    error_data.error_test = "Captcha is Not Matched";
        //                    error_data.user_email = Email;
        //                    error_data.user_password = Data.Password;
        //                    error_data.user_type = "login";
        //                    error_data.error_count = "1";
        //                    error_data.ipaddress = ipAddress1;
        //                    ABE.obj_abhy_tbl_error.Add(error_data);
        //                    ABE.SaveChanges();
        //                    return RedirectToAction("WSP_GWM_HOME", "WspNew");
        //                }
        //            }
        //            users = ABE.objUsers.Where(x => x.Email == Data.Email && x.Verifiedornot == "True").ToList();
        //            var Verifiedornot = ABE.objUsers.Where(x => x.Email == Data.Email).Select(x => x.Verifiedornot).FirstOrDefault();
        //            if (users.Count != 0)
        //            {
        //                string id = ENCandDEC.EncryptAES256(users[0].UserId.ToString());

        //                int UserID = Convert.ToInt32(users[0].UserId);
        //                // var Info11 = Get_sessionstatus_active(users[0].Email, 0);// passing to update method to change isactive from 0 to 1...
        //                ErrorData = ABE.obj_login_attempts.Where(x => x.userid == UserID).ToList();
        //                if (ErrorData.Count > 0 && (ErrorData[0].login_count > 2))
        //                {
        //                    var LastAttempts = DateTime.Parse(ErrorData[0].last_login);
        //                    if ((now - LastAttempts).TotalMinutes <= 10)
        //                    {
        //                        Session["Error"] = "Account has been blocked due to maximum unsuccessful attempts; please try again after 10 minutes.";
        //                        return RedirectToAction("WSP_GWM_HOME", "WspNew");
        //                    }
        //                    else
        //                    {
        //                        ErrorData[0].login_count = 0;
        //                        ABE.Entry(ErrorData[0]).State = EntityState.Modified;
        //                        ABE.SaveChanges();
        //                    }
        //                }
        //                string random = Data.CheckingCode;
        //                // string pwd = Data.Password;
        //                //string hashtext = GetHashString(pwd);
        //                string hashtext = users[0].Password;
        //                string ranpwd = random + hashtext.ToLower();
        //                //Password
        //                string encription_pew = GetHashString(ranpwd);
        //                //Password
        //                var xx = encription_pew.ToLower();
        //                if (Data.Password.ToLower() == xx)
        //                {

        //                    #region Check Exist Login
        //                    //var GetDT = ABE.obj_user_autologin.Where(x => x.user_id == UserID).FirstOrDefault();
        //                    //if (GetDT != null)
        //                    //{
        //                    //    var LastLogin = DateTime.Parse(GetDT.last_login);
        //                    //    if ((now - LastLogin).TotalHours <= 1)
        //                    //    {
        //                    //        Session["Email"] = users[0].Email;
        //                    //        Session["UserId"] = users[0].UserId;
        //                    //        Session["Pass"] = Data.Password;
        //                    //        string url = string.Format("/WspNew/ConfirmationLogin?userid={0}", id);
        //                    //        return Redirect(url);
        //                    //    }
        //                    //    else
        //                    //    {
        //                    //        ABE.obj_user_autologin.Remove(GetDT);
        //                    //        ABE.SaveChanges();
        //                    //    }
        //                    //}

        //                    #endregion
        //                    Session["Email"] = users[0].Email;
        //                    Session["UserId"] = users[0].UserId;
        //                    Session["Officer"] = users[0].NodalOfficer;
        //                    Session["UserName"] = users[0].UserName;

        //                    AppSession.Set("UserId", users[0].UserId);
        //                    SaveDate(Convert.ToInt32(users[0].UserId), ipAddress1);

        //                    if (users[0].access_auth == null)
        //                    {
        //                        Session["Access_Auth"] = "";
        //                    }
        //                    else
        //                    {
        //                        Session["Access_Auth"] = users[0].access_auth;
        //                    }

        //                    var UserName = users[0].NodalOfficer;
        //                    if (UserName == "State Level Nodal Officer")
        //                    {
        //                        Session["gstate"] = users[0].StateName;
        //                    }
        //                    else if (UserName == "District Level Nodal Officer")
        //                    {
        //                        Session["gstate"] = users[0].StateName;
        //                        Session["gdist"] = users[0].DistrictName;
        //                    }
        //                    else if (UserName == "Block Level Nodal Officer")
        //                    {
        //                        Session["gstate"] = users[0].StateName;
        //                        Session["gdist"] = users[0].DistrictName;
        //                        Session["gblock"] = users[0].BlockName;
        //                    }
        //                    else if (UserName == "Gram Panchyat Nodal Officer")
        //                    {
        //                        Session["gstate"] = users[0].StateName;
        //                        Session["gdist"] = users[0].DistrictName;
        //                        Session["gblock"] = users[0].BlockName;
        //                        Session["ggram"] = users[0].GramPanchayatName;
        //                    }
        //                    //ErrorData[0].login_count = 0;
        //                    //ABE.Entry(ErrorData[0]).State = EntityState.Modified;
        //                    //ABE.SaveChanges();
        //                    var LoginPageSessionName = Data.NodalOfficer.ToString();
        //                    login_datetime logindata = new login_datetime();
        //                    if (Session["Access_Auth"].ToString() == "GP-Training")
        //                    {
        //                        string url = string.Format("/MasterDropDown/current_event_gp_auth?userid={0}", id);

        //                        logindata.name = Session["UserName"].ToString();
        //                        logindata.email = Email;
        //                        logindata.loginlogout = "Login";
        //                        logindata.date = DateTime.Now.ToString("yyyy-MM-dd");
        //                        logindata.datetime = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
        //                        ABE.obj_login_datetime.Add(logindata);
        //                        ABE.SaveChanges();
        //                        return Redirect(url);
        //                    }
        //                    else if (Session["Access_Auth"].ToString() == "dist-Training")
        //                    {
        //                        string url = string.Format("/MasterDropDown/current_event_dist_auth?userid={0}", id);

        //                        logindata.name = Session["UserName"].ToString();
        //                        logindata.email = Email;
        //                        logindata.loginlogout = "Login";
        //                        logindata.date = DateTime.Now.ToString("yyyy-MM-dd");
        //                        logindata.datetime = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
        //                        ABE.obj_login_datetime.Add(logindata);
        //                        ABE.SaveChanges();
        //                        return Redirect(url);
        //                    }
        //                    else if (Session["Access_Auth"].ToString() == "block-Training")
        //                    {
        //                        string url = string.Format("/MasterDropDown/current_event_block_auth?userid={0}", id);
        //                        logindata.name = Session["UserName"].ToString();
        //                        logindata.email = Email;
        //                        logindata.loginlogout = "Login";
        //                        logindata.date = DateTime.Now.ToString("yyyy-MM-dd");
        //                        logindata.datetime = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
        //                        ABE.obj_login_datetime.Add(logindata);
        //                        ABE.SaveChanges();
        //                        return Redirect(url);
        //                    }
        //                    else if (users[0].access_auth == "dli3")
        //                    {
        //                        string url = string.Format("/WSPHome/Monitoring_evaluation?userid={0}", id);
        //                        logindata.name = Session["UserName"].ToString();
        //                        logindata.email = Email;
        //                        logindata.loginlogout = "Login";
        //                        logindata.date = DateTime.Now.ToString("yyyy-MM-dd");
        //                        logindata.datetime = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
        //                        ABE.obj_login_datetime.Add(logindata);
        //                        ABE.SaveChanges();
        //                        return Redirect(url);
        //                    }
        //                    else if (users[0].access_auth == "StateTraining")
        //                    {
        //                        string url = string.Format("/MasterDropDown/Training_evaluation?userid={0}", id);
        //                        logindata.name = Session["UserName"].ToString();
        //                        logindata.email = Email;
        //                        logindata.loginlogout = "Login";
        //                        logindata.date = DateTime.Now.ToString("yyyy-MM-dd");
        //                        logindata.datetime = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
        //                        ABE.obj_login_datetime.Add(logindata);
        //                        ABE.SaveChanges();
        //                        return Redirect(url);
        //                    }
        //                    string urls = string.Format("/WspNew/MIS_Modules?userid={0}", id);
        //                    logindata.name = Session["UserName"].ToString();
        //                    logindata.email = Email;
        //                    logindata.loginlogout = "Login";
        //                    logindata.date = DateTime.Now.ToString("yyyy-MM-dd");
        //                    logindata.datetime = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
        //                    ABE.obj_login_datetime.Add(logindata);
        //                    ABE.SaveChanges();
        //                    return Redirect(urls);
        //                }
        //                else
        //                {
        //                    // ViewBag.Error = "Your Credentials not Matched";
        //                    Session["Error"] = "Your Credentials not Matched";
        //                    if (ErrorData.Count > 0)
        //                    {
        //                        login_attempts error_data = new login_attempts();
        //                        ErrorData[0].ip_address = ipAddress1;
        //                        ErrorData[0].userid = (int)users[0].UserId;
        //                        ErrorData[0].login_count = ++ErrorData[0].login_count;
        //                        ErrorData[0].last_login = now.ToString();
        //                        ABE.Entry(ErrorData[0]).State = EntityState.Modified;
        //                    }
        //                    else
        //                    {
        //                        login_attempts error_data = new login_attempts();
        //                        error_data.ip_address = ipAddress1;
        //                        error_data.userid = Convert.ToInt32(users[0].UserId);
        //                        error_data.login_count = 1;
        //                        error_data.last_login = now.ToString();
        //                        ABE.obj_login_attempts.Add(error_data);
        //                    }
        //                    ABE.SaveChanges();
        //                    return RedirectToAction("WSP_GWM_HOME", "WspNew");
        //                }
        //            }
        //            else if (Verifiedornot == "False")
        //            {
        //                Session["Error"] = "State Officer not Approved Your Account";
        //                abhy_tbl_error error_data = new abhy_tbl_error();
        //                error_data.error_test = "State Officer not Approved Your Account";
        //                error_data.user_email = Email;
        //                error_data.user_password = Data.Password;
        //                error_data.user_type = "login";
        //                error_data.ipaddress = ipAddress1;
        //                error_data.error_count = "1";
        //                ABE.obj_abhy_tbl_error.Add(error_data);
        //                ABE.SaveChanges();
        //                return RedirectToAction("WSP_GWM_HOME", "WspNew");
        //                //    return Json("Your Credentials not Matched", JsonRequestBehavior.AllowGet);
        //            }
        //            else
        //            {
        //                Session["Error"] = "Your Email Id is not Registered";
        //                abhy_tbl_error error_data = new abhy_tbl_error();
        //                error_data.error_test = "Your Email Id is not Registered";
        //                error_data.user_email = Email;
        //                error_data.user_password = Data.Password;
        //                error_data.user_type = "login";
        //                error_data.ipaddress = ipAddress1;
        //                error_data.error_count = "1";
        //                ABE.obj_abhy_tbl_error.Add(error_data);
        //                ABE.SaveChanges();
        //                return RedirectToAction("WSP_GWM_HOME", "WspNew");
        //            }
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        //string ipAddress1 = Request.ServerVariables["HTTP_X_FORWARDED_FOR"];
        //        //if (string.IsNullOrEmpty(ipAddress1))
        //        //{
        //        //    ipAddress1 = Request.ServerVariables["REMOTE_ADDR"];
        //        //}
        //        Session["Error"] = "Your Credentials not Matched";
        //        abhy_tbl_error error_data = new abhy_tbl_error();
        //        error_data.error_test = "Your Credentials not Matched";
        //        error_data.user_email = Email;
        //        error_data.user_password = Data.Password;
        //        error_data.user_type = "login";
        //        error_data.ipaddress = ipAddress1;
        //        error_data.error_count = "1";
        //        ABE.obj_abhy_tbl_error.Add(error_data);
        //        ABE.SaveChanges();
        //        return RedirectToAction("WSP_GWM_HOME", "WspNew");
        //        //   return View(ex);
        //    }
        //}

        [HttpPost]
        public ActionResult WSP_GRM_HOME(Users Data)
        {
            string ipAddress1 = "";
            var Email = Data.Email.ToLower().Trim();
            try
            {
                DateTime now = DateTime.Now;
                List<Users> users = new List<Users>();
                List<login_attempts> ErrorData = new List<login_attempts>();
                //convert email to tolower
                string iEmail = Email;
                string stdate = DateTime.Now.ToString("yyyy-MM-dd");

                ipAddress1 = Request.ServerVariables["HTTP_X_FORWARDED_FOR"];

                if (string.IsNullOrEmpty(ipAddress1))
                {
                    ipAddress1 = Request.ServerVariables["REMOTE_ADDR"];
                }
                //string ipAddress1 = GetIPAddress();
                var test_error_data = ABE.obj_abhy_tbl_error.Where(x => x.ipaddress == ipAddress1).ToList();

                if (test_error_data.Count != 0)
                {
                    for (var i = 0; i < test_error_data.Count; i++)
                    {
                        var test_error_data1 = test_error_data[i];
                        ABE.Entry(test_error_data1).State = EntityState.Deleted;
                        ABE.SaveChanges();
                    }
                }

                string[] SkipCaptcha = Data.Email.Split('@');
                if (SkipCaptcha[1] != "kreatetechnologies.com")
                {
                    if (Session["text"].ToString() != Data.clientcaptcha)
                    {
                        Session["Error"] = "Captcha is Not Matched";
                        abhy_tbl_error error_data = new abhy_tbl_error();
                        error_data.error_test = "Captcha is Not Matched";
                        error_data.user_email = Email;
                        error_data.user_password = Data.Password;
                        error_data.user_type = "login";
                        error_data.error_count = "1";
                        error_data.ipaddress = ipAddress1;
                        ABE.obj_abhy_tbl_error.Add(error_data);
                        ABE.SaveChanges();
                        return RedirectToAction("WSP_GWM_HOME", "WspNew");
                    }
                }
                users = ABE.objUsers.Where(x => x.Email == Data.Email && x.Verifiedornot == "True").ToList();
                var Verifiedornot = ABE.objUsers.Where(x => x.Email == Data.Email).Select(x => x.Verifiedornot).FirstOrDefault();
                if (users.Count != 0)
                {
                    string id = ENCandDEC.EncryptAES256(users[0].UserId.ToString());
                    Session["id"] = id;
                    int UserID = Convert.ToInt32(users[0].UserId);
                    // var Info11 = Get_sessionstatus_active(users[0].Email, 0);// passing to update method to change isactive from 0 to 1...
                    ErrorData = ABE.obj_login_attempts.Where(x => x.userid == UserID).ToList();
                    if (ErrorData.Count > 0 && (ErrorData[0].login_count > 2))
                    {
                        var LastAttempts = DateTime.Parse(ErrorData[0].last_login);
                        if ((now - LastAttempts).TotalMinutes <= 10)
                        {
                            Session["Error"] = "Account has been blocked due to maximum unsuccessful attempts; please try again after 10 minutes.";
                            return RedirectToAction("WSP_GWM_HOME", "WspNew");
                        }
                        else
                        {
                            ErrorData[0].login_count = 0;
                            ABE.Entry(ErrorData[0]).State = EntityState.Modified;
                            ABE.SaveChanges();
                        }
                    }
                    string random = Data.CheckingCode;
                    // string pwd = Data.Password;
                    //string hashtext = GetHashString(pwd);
                    string hashtext = users[0].Password;
                    string ranpwd = random + hashtext.ToLower();
                    //Password
                    string encription_pew = GetHashString(ranpwd);
                    //Password
                    var xx = encription_pew.ToLower();
                    if (Data.Password.ToLower() == xx)
                    {


                        #region Check Exist Login
                        //var GetDT = ABE.obj_user_autologin.Where(x => x.user_id == UserID).FirstOrDefault();
                        //if (GetDT != null)
                        //{
                        //    var LastLogin = DateTime.Parse(GetDT.last_login);
                        //    if ((now - LastLogin).TotalHours <= 1)
                        //    {
                        //        Session["Email"] = users[0].Email;
                        //        Session["UserId"] = users[0].UserId;
                        //        Session["Pass"] = Data.Password;
                        //        string url = string.Format("/WspNew/ConfirmationLogin?userid={0}", id);
                        //        return Redirect(url);
                        //    }
                        //    else
                        //    {
                        //        ABE.obj_user_autologin.Remove(GetDT);
                        //        ABE.SaveChanges();
                        //    }
                        //}

                        #endregion
                        Session["Email"] = users[0].Email;
                        Session["UserId"] = users[0].UserId;
                        Session["Officer"] = users[0].NodalOfficer;
                        Session["UserName"] = users[0].UserName;
                        Session["UserToken"] = users[0].UserToken;

                        AppSession.Set("UserId", users[0].UserId);
                        SaveDate(Convert.ToInt32(users[0].UserId), ipAddress1);

                        if (users[0].access_auth == null)
                        {
                            Session["Access_Auth"] = "";
                        }
                        else
                        {
                            Session["Access_Auth"] = users[0].access_auth;
                        }

                        var ee = Session["Email"].ToString();


                        var UserName = users[0].NodalOfficer;
                        if (UserName == "State Level Nodal Officer")
                        {
                            Session["gstate"] = users[0].StateName;
                        }
                        else if (UserName == "District Level Nodal Officer")
                        {
                            Session["gstate"] = users[0].StateName;
                            Session["gdist"] = users[0].DistrictName;
                        }
                        else if (UserName == "Block Level Nodal Officer")
                        {
                            Session["gstate"] = users[0].StateName;
                            Session["gdist"] = users[0].DistrictName;
                            Session["gblock"] = users[0].BlockName;
                        }
                        else if (UserName == "Gram Panchyat Nodal Officer")
                        {
                            Session["gstate"] = users[0].StateName;
                            Session["gdist"] = users[0].DistrictName;
                            Session["gblock"] = users[0].BlockName;
                            Session["ggram"] = users[0].GramPanchayatName;
                        }
                        //ErrorData[0].login_count = 0;
                        //ABE.Entry(ErrorData[0]).State = EntityState.Modified;
                        //ABE.SaveChanges();
                        var LoginPageSessionName = Data.NodalOfficer.ToString();
                        Session["NodalOfficer"] = Data.NodalOfficer.ToString();
                        var userlog = ABE.obj_login_datetime.Where(x => x.email == iEmail
                        && x.date == stdate
                        //&& x.loginlogout == "Login"
                        ).OrderByDescending(x => x.id).FirstOrDefault();
                        if ((userlog != null) && (userlog.loginlogout == "Login"))
                        {
                            Session["Email"] = iEmail.ToString();
                            Session["Error"] = "Your account is currently logged in on another system.";
                            ViewBag.Email = iEmail.ToString();
                            return RedirectToAction("LogInForce", "WspNew");
                        }
                        else
                        {
                            login_datetime logindata = new login_datetime();
                            string url = "";
                            if (Session["Access_Auth"].ToString() == "GP-Training")
                            {
                                 url = string.Format("/MasterDropDown/current_event_gp_auth?userid={0}", id);

                                logindata.name = Session["UserName"].ToString();
                                logindata.email = Email;
                                logindata.loginlogout = "Login";
                                logindata.checkloginlogout = "1";
                                logindata.date = DateTime.Now.ToString("yyyy-MM-dd");
                                logindata.datetime = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
                                ABE.obj_login_datetime.Add(logindata);
                                ABE.SaveChanges();
                                return Redirect(url);
                            }
                            else if (Session["Access_Auth"].ToString() == "dist-Training")
                            {
                                 url = string.Format("/MasterDropDown/current_event_dist_auth?userid={0}", id);

                                logindata.name = Session["UserName"].ToString();
                                logindata.email = Email;
                                logindata.loginlogout = "Login";
                                logindata.checkloginlogout = "1";
                                logindata.date = DateTime.Now.ToString("yyyy-MM-dd");
                                logindata.datetime = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
                                ABE.obj_login_datetime.Add(logindata);
                                ABE.SaveChanges();
                                return Redirect(url);
                            }
                            else if (Session["Access_Auth"].ToString() == "block-Training")
                            {
                                url = string.Format("/MasterDropDown/current_event_block_auth?userid={0}", id);
                                logindata.name = Session["UserName"].ToString();
                                logindata.email = Email;
                                logindata.loginlogout = "Login";
                                logindata.checkloginlogout = "1";
                                logindata.date = DateTime.Now.ToString("yyyy-MM-dd");
                                logindata.datetime = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
                                ABE.obj_login_datetime.Add(logindata);
                                ABE.SaveChanges();
                                return Redirect(url);
                            }
                            else if (users[0].access_auth == "dli3")
                            {
                                 url = string.Format("/WSPHome/Monitoring_evaluation?userid={0}", id);
                                logindata.name = Session["UserName"].ToString();
                                logindata.email = Email;
                                logindata.loginlogout = "Login";
                                logindata.checkloginlogout = "1";
                                logindata.date = DateTime.Now.ToString("yyyy-MM-dd");
                                logindata.datetime = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
                                ABE.obj_login_datetime.Add(logindata);
                                ABE.SaveChanges();
                                return Redirect(url);
                            }
                            else if (users[0].access_auth == "StateTraining")
                            {
                                 url = string.Format("/MasterDropDown/Training_evaluation?userid={0}", id);
                                logindata.name = Session["UserName"].ToString();
                                logindata.email = Email;
                                logindata.loginlogout = "Login";
                                logindata.checkloginlogout = "1";
                                logindata.date = DateTime.Now.ToString("yyyy-MM-dd");
                                logindata.datetime = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
                                ABE.obj_login_datetime.Add(logindata);
                                ABE.SaveChanges();
                                return Redirect(url);
                            }
                            string urls = string.Format("/WspNew/MIS_Modules?userid={0}", id);
                            logindata.name = Session["UserName"].ToString();
                            logindata.email = Email;
                            logindata.loginlogout = "Login";
                            logindata.checkloginlogout = "1";
                            logindata.date = DateTime.Now.ToString("yyyy-MM-dd");
                            logindata.datetime = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
                            ABE.obj_login_datetime.Add(logindata);
                            ABE.SaveChanges();
                            return Redirect(urls);
                        }
                    }
                    else
                    {
                        // ViewBag.Error = "Your Credentials not Matched";
                        Session["Error"] = "Your Credentials not Matched";
                        if (ErrorData.Count > 0)
                        {
                            login_attempts error_data = new login_attempts();
                            ErrorData[0].ip_address = ipAddress1;
                            ErrorData[0].userid = (int)users[0].UserId;
                            ErrorData[0].login_count = ++ErrorData[0].login_count;
                            ErrorData[0].last_login = now.ToString();
                            ABE.Entry(ErrorData[0]).State = EntityState.Modified;
                        }
                        else
                        {
                            login_attempts error_data = new login_attempts();
                            error_data.ip_address = ipAddress1;
                            error_data.userid = Convert.ToInt32(users[0].UserId);
                            error_data.login_count = 1;
                            error_data.last_login = now.ToString();
                            ABE.obj_login_attempts.Add(error_data);
                        }
                        ABE.SaveChanges();
                        return RedirectToAction("WSP_GWM_HOME", "WspNew");
                    }
                }
                else if (Verifiedornot == "False")
                {
                    Session["Error"] = "State Officer not Approved Your Account";
                    abhy_tbl_error error_data = new abhy_tbl_error();
                    error_data.error_test = "State Officer not Approved Your Account";
                    error_data.user_email = Email;
                    error_data.user_password = Data.Password;
                    error_data.user_type = "login";
                    error_data.ipaddress = ipAddress1;
                    error_data.error_count = "1";
                    ABE.obj_abhy_tbl_error.Add(error_data);
                    ABE.SaveChanges();
                    return RedirectToAction("WSP_GWM_HOME", "WspNew");
                    //    return Json("Your Credentials not Matched", JsonRequestBehavior.AllowGet);
                }
                else
                {
                    Session["Error"] = "Your Email Id is not Registered";
                    abhy_tbl_error error_data = new abhy_tbl_error();
                    error_data.error_test = "Your Email Id is not Registered";
                    error_data.user_email = Email;
                    error_data.user_password = Data.Password;
                    error_data.user_type = "login";
                    error_data.ipaddress = ipAddress1;
                    error_data.error_count = "1";
                    ABE.obj_abhy_tbl_error.Add(error_data);
                    ABE.SaveChanges();
                    return RedirectToAction("WSP_GWM_HOME", "WspNew");
                }
            }
            catch (Exception ex)
            {
                //string ipAddress1 = Request.ServerVariables["HTTP_X_FORWARDED_FOR"];
                //if (string.IsNullOrEmpty(ipAddress1))
                //{
                //    ipAddress1 = Request.ServerVariables["REMOTE_ADDR"];
                //}
                Session["Error"] = "Your Credentials not Matched";
                abhy_tbl_error error_data = new abhy_tbl_error();
                error_data.error_test = "Your Credentials not Matched";
                error_data.user_email = Email;
                error_data.user_password = Data.Password;
                error_data.user_type = "login";
                error_data.ipaddress = ipAddress1;
                error_data.error_count = "1";
                ABE.obj_abhy_tbl_error.Add(error_data);
                ABE.SaveChanges();
                return RedirectToAction("WSP_GWM_HOME", "WspNew");
                //   return View(ex);
            }
        }

        [HttpGet]
        public ActionResult WSP_GRM_HOMEF()
        {
            string ipAddress1 = "";
            var Email = Session["Email"].ToString().Trim();
            try
            {
                string stdate = DateTime.Now.ToString("yyyy-MM-dd");
                string id = Session["id"].ToString();
                string urls = "";
                urls = string.Format("/WspNew/MIS_Modules?userid={0}", id);
                var userlog = ABE.obj_login_datetime.Where(x => x.email == Email
                                        && x.date == stdate
                                        //&& x.loginlogout == "Login"
                                        ).OrderByDescending(x => x.id).FirstOrDefault();
                if ((userlog == null) && (userlog.loginlogout == "Login"))
                {
                    string url = "";
                    if (Session["Access_Auth"].ToString() == "GP-Training")
                    {
                         url = string.Format("/MasterDropDown/current_event_gp_auth?userid={0}", id);
                        
                    }
                    else if (Session["Access_Auth"].ToString() == "dist-Training")
                    {
                        url = string.Format("/MasterDropDown/current_event_dist_auth?userid={0}", id);
                    }
                    else if (Session["Access_Auth"].ToString() == "block-Training")
                    {
                        url = string.Format("/MasterDropDown/current_event_block_auth?userid={0}", id);
                    }
                    else if (Session["Access_Auth"].ToString() == "dli3")
                    {
                        url = string.Format("/WSPHome/Monitoring_evaluation?userid={0}", id);
                    }
                    else if (Session["Access_Auth"].ToString() == "StateTraining")
                    {
                        url = string.Format("/MasterDropDown/Training_evaluation?userid={0}", id);
                    }
                    else
                    {
                        url = string.Format("/WspNew/MIS_Modules?userid={0}", id);
                    }
                    return Redirect(url);
                }
                else
                {
                    var LoginPageSessionName = Session["NodalOfficer"].ToString();
                    string url = "";
                    login_datetime logindata = new login_datetime();
                    if (Session["Access_Auth"].ToString() == "GP-Training")
                    {
                         url = string.Format("/MasterDropDown/current_event_gp_auth?userid={0}", id);

                        logindata.name = Session["UserName"].ToString();
                        logindata.email = Email;
                        logindata.loginlogout = "Login";
                        logindata.checkloginlogout = "1";
                        logindata.date = DateTime.Now.ToString("yyyy-MM-dd");
                        logindata.datetime = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
                        ABE.obj_login_datetime.Add(logindata);
                        ABE.SaveChanges();
                        return Redirect(url);
                    }
                    else if (Session["Access_Auth"].ToString() == "dist-Training")
                    {
                         url = string.Format("/MasterDropDown/current_event_dist_auth?userid={0}", id);

                        logindata.name = Session["UserName"].ToString();
                        logindata.email = Email;
                        logindata.loginlogout = "Login";
                        logindata.checkloginlogout = "1";
                        logindata.date = DateTime.Now.ToString("yyyy-MM-dd");
                        logindata.datetime = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
                        ABE.obj_login_datetime.Add(logindata);
                        ABE.SaveChanges();
                        return Redirect(url);
                    }
                    else if (Session["Access_Auth"].ToString() == "block-Training")
                    {
                         url = string.Format("/MasterDropDown/current_event_block_auth?userid={0}", id);
                        logindata.name = Session["UserName"].ToString();
                        logindata.email = Email;
                        logindata.loginlogout = "Login";
                        logindata.checkloginlogout = "1";
                        logindata.date = DateTime.Now.ToString("yyyy-MM-dd");
                        logindata.datetime = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
                        ABE.obj_login_datetime.Add(logindata);
                        ABE.SaveChanges();
                        return Redirect(url);
                    }
                    else if (Session["Access_Auth"].ToString() == "dli3")
                    {
                         url = string.Format("/WSPHome/Monitoring_evaluation?userid={0}", id);
                        logindata.name = Session["UserName"].ToString();
                        logindata.email = Email;
                        logindata.loginlogout = "Login";
                        logindata.checkloginlogout = "1";
                        logindata.date = DateTime.Now.ToString("yyyy-MM-dd");
                        logindata.datetime = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
                        ABE.obj_login_datetime.Add(logindata);
                        ABE.SaveChanges();
                        return Redirect(url);
                    }
                    else if (Session["Access_Auth"].ToString() == "StateTraining")
                    {
                         url = string.Format("/MasterDropDown/Training_evaluation?userid={0}", id);
                        logindata.name = Session["UserName"].ToString();
                        logindata.email = Email;
                        logindata.loginlogout = "Login";
                        logindata.checkloginlogout = "1";
                        logindata.date = DateTime.Now.ToString("yyyy-MM-dd");
                        logindata.datetime = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
                        ABE.obj_login_datetime.Add(logindata);
                        ABE.SaveChanges();
                        return Redirect(url);
                    }
                    url = string.Format("/WspNew/MIS_Modules?userid={0}", id);
                    logindata.name = Session["UserName"].ToString();
                    logindata.email = Email;
                    logindata.loginlogout = "Login";
                    logindata.checkloginlogout = "1";
                    logindata.date = DateTime.Now.ToString("yyyy-MM-dd");
                    logindata.datetime = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
                    ABE.obj_login_datetime.Add(logindata);
                    ABE.SaveChanges();
                    return Redirect(url);
                }
                //return Redirect(urls);
            }
            catch (Exception ex)
            {
                //string ipAddress1 = Request.ServerVariables["HTTP_X_FORWARDED_FOR"];
                //if (string.IsNullOrEmpty(ipAddress1))
                //{
                //    ipAddress1 = Request.ServerVariables["REMOTE_ADDR"];
                //}
                Session["Error"] = "Your Credentials not Matched";
                abhy_tbl_error error_data = new abhy_tbl_error();
                error_data.error_test = "Your Credentials not Matched";
                error_data.user_email = Email;
                error_data.user_password = Session["Password"].ToString();
                error_data.user_type = "login";
                error_data.ipaddress = ipAddress1;
                error_data.error_count = "1";
                ABE.obj_abhy_tbl_error.Add(error_data);
                ABE.SaveChanges();
                return RedirectToAction("WSP_GWM_HOME", "WspNew");
                //   return View(ex);
            }
        }

        //public ActionResult WSP_GRM_HOME(Users Data)
        //{
        //    DateTime now = DateTime.Now;
        //    List<Users> users = new List<Users>();
        //    List<login_attempts> ErrorData = new List<login_attempts>();
        //    //convert email to tolower
        //    var Email = Data.Email.ToLower().Trim();
        //    string ipAddress1 = Request.ServerVariables["HTTP_X_FORWARDED_FOR"];


        public static string GetIPAddress()
        {
            string IPAddress = string.Empty;
            string hostName = Dns.GetHostName();
            string IP = Dns.GetHostByName(hostName).AddressList[0].ToString();
            return IP;

            //IPHostEntry Host = default(IPHostEntry);
            //string Hostname = string.Empty;
            //Hostname = Environment.MachineName;
            //Host = Dns.GetHostEntry(Hostname);
            //foreach (IPAddress IP in Host.AddressList)
            //{
            //    if (IP.AddressFamily == AddressFamily.InterNetwork)
            //    {
            //        IPAddress = Convert.ToString(IP);
            //    }
            //}
            //return IPAddress;
        }

        public void SaveDate(int userId = 0, string last_ip = "")
        {
            user_autologin users = new user_autologin();
            var data = ABE.obj_user_autologin.Where(x => x.user_id == userId).FirstOrDefault();
            if (data != null)
            {
                data.last_ip = last_ip;
                data.last_login = DateTime.Now.ToString();
                ABE.Entry(data).State = EntityState.Deleted;
                ABE.SaveChanges();
            }
            else
            {
                users.user_id = userId;
                users.last_ip = last_ip;
                users.last_login = DateTime.Now.ToString();
                users.isactive = 1;
                ABE.obj_user_autologin.Add(users);
                ABE.SaveChanges();
            }
        }

        public ActionResult ConfirmationLogin()
        {
            return View();
        }
        public string GetIp()
        {
            string ip = System.Web.HttpContext.Current.Request.ServerVariables["HTTP_X_FORWARDED_FOR"];
            if (string.IsNullOrEmpty(ip))
            {
                ip = System.Web.HttpContext.Current.Request.ServerVariables["REMOTE_ADDR"];
            }
            return ip;
        }
        //new method for login
        [HttpPost]
        public ActionResult WSP_GRM_HOME_old(Users Data)
        {
            DateTime now = DateTime.Now;
            //string sOutputPath = HttpContext.Current.Server.MapPath("~");
            //convert email to tolower
            var Email = Data.Email.ToLower().Trim();
            string ipAddress1 = Request.ServerVariables["HTTP_X_FORWARDED_FOR"];
            if (string.IsNullOrEmpty(ipAddress1))
            {
                ipAddress1 = Request.ServerVariables["REMOTE_ADDR"];
            }
            var test_error_data = ABE.obj_abhy_tbl_error.Where(x => x.ipaddress == ipAddress1).ToList();
            if (test_error_data.Count != 0)
            {
                for (var i = 0; i < test_error_data.Count; i++)
                {
                    var test_error_data1 = test_error_data[i];
                    ABE.Entry(test_error_data1).State = EntityState.Deleted;

                    ABE.SaveChanges();
                }
            }
            try
            {
                if (Session["text"].ToString() != Data.clientcaptcha)
                {
                    Session["Error"] = "Captcha is Not Matched";
                    abhy_tbl_error error_data = new abhy_tbl_error();
                    error_data.error_test = "Captcha is Not Matched";
                    error_data.user_email = Email;
                    error_data.user_password = Data.Password;
                    error_data.user_type = "login";
                    error_data.error_count = "1";
                    error_data.ipaddress = ipAddress1;
                    ABE.obj_abhy_tbl_error.Add(error_data);
                    ABE.SaveChanges();
                    return RedirectToAction("WSP_GWM_HOME", "WspNew");
                }
                var users = ABE.objUsers.Where(x => x.Email == Data.Email && x.Verifiedornot == "True").ToList();
                // var activestatus = users[0].isactive;//for concurrent login
                var Verifiedornot = ABE.objUsers.Where(x => x.Email == Data.Email).Select(x => x.Verifiedornot).FirstOrDefault();
                // if (activestatus == 0)//comparing concurrent logins...
                //{
                if (users.Count != 0)
                {
                    #region Check Exist Login
                    int UserID = Convert.ToInt32(users[0].UserId);
                    var data = ABE.obj_user_autologin.Where(x => x.user_id == UserID).FirstOrDefault();
                    //if (data != null)
                    //{
                    //    var LastLogin = DateTime.Parse(data.last_login);
                    //    if (data.isactive == 1 && data.last_ip != ipAddress1)
                    //    {
                    //        if ((now - LastLogin).TotalMinutes <= 10)
                    //        {
                    //            Session["Error"] = "You are already login in another browser, please try after some time.";
                    //            return RedirectToAction("WSP_GWM_HOME", "WspNew");
                    //        }
                    //    }
                    //}
                    #endregion
                    // var Info11 = Get_sessionstatus_active(users[0].Email, 0);// passing to update method to change isactive from 0 to 1...
                    string random = Data.CheckingCode;
                    // string pwd = Data.Password;
                    //string hashtext = GetHashString(pwd);
                    string hashtext = users[0].Password;
                    string ranpwd = random + hashtext.ToLower();
                    //Password
                    string encription_pew = GetHashString(ranpwd);
                    //Password
                    var xx = encription_pew.ToLower();
                    if (Data.Password.ToLower() == xx)
                    {
                        Session["Email"] = users[0].Email;
                        Session["Officer"] = users[0].NodalOfficer;
                        Session["UserName"] = users[0].UserName;
                        Session["UserId"] = users[0].UserId;
                        AppSession.Set("UserId", users[0].UserId);
                        //AutoLogin.SaveDate(Convert.ToInt32(users[0].UserId), ipAddress1);
                        SaveDate(Convert.ToInt32(users[0].UserId), ipAddress1);
                        if (users[0].access_auth == null)
                        {
                            Session["Access_Auth"] = "";
                        }
                        else
                        {
                            Session["Access_Auth"] = users[0].access_auth;
                        }
                        var UserName = users[0].NodalOfficer;
                        if (UserName == "State Level Nodal Officer")
                        {
                            Session["gstate"] = users[0].StateName;
                        }
                        else if (UserName == "District Level Nodal Officer")
                        {
                            Session["gstate"] = users[0].StateName;
                            Session["gdist"] = users[0].DistrictName;
                        }
                        else if (UserName == "Block Level Nodal Officer")
                        {
                            Session["gstate"] = users[0].StateName;
                            Session["gdist"] = users[0].DistrictName;
                            Session["gblock"] = users[0].BlockName;
                        }
                        else if (UserName == "Gram Panchyat Nodal Officer")
                        {
                            Session["gstate"] = users[0].StateName;
                            Session["gdist"] = users[0].DistrictName;
                            Session["gblock"] = users[0].BlockName;
                            Session["ggram"] = users[0].GramPanchayatName;
                        }
                        //string url1 = string.Format("~/Home/under_maintainance");
                        //return Redirect(url1);
                        var LoginPageSessionName = Data.NodalOfficer.ToString();
                        login_datetime logindata = new login_datetime();


                        if (Session["Access_Auth"].ToString() == "GP-Training")
                        {
                            string url = string.Format("/MasterDropDown/current_event_gp_auth");
                            logindata.name = Session["UserName"].ToString();
                            logindata.email = Email;
                            logindata.loginlogout = "Login";
                            logindata.checkloginlogout = "1";
                            logindata.date = DateTime.Now.ToString("yyyy-MM-dd");
                            logindata.datetime = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
                            ABE.obj_login_datetime.Add(logindata);
                            ABE.SaveChanges();

                            return Redirect(url);
                        }
                        else if (Session["Access_Auth"].ToString() == "dist-Training")
                        {
                            string url = string.Format("/MasterDropDown/current_event_dist_auth");
                            logindata.name = Session["UserName"].ToString();
                            logindata.email = Email;
                            logindata.loginlogout = "Login";
                            logindata.checkloginlogout = "1";
                            logindata.date = DateTime.Now.ToString("yyyy-MM-dd");
                            logindata.datetime = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
                            ABE.obj_login_datetime.Add(logindata);
                            ABE.SaveChanges();

                            return Redirect(url);
                        }
                        else if (Session["Access_Auth"].ToString() == "block-Training")
                        {
                            string url = string.Format("/MasterDropDown/current_event_block_auth");
                            logindata.name = Session["UserName"].ToString();
                            logindata.email = Email;
                            logindata.loginlogout = "Login";
                            logindata.checkloginlogout = "1";
                            logindata.date = DateTime.Now.ToString("yyyy-MM-dd");
                            logindata.datetime = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
                            ABE.obj_login_datetime.Add(logindata);
                            ABE.SaveChanges();

                            return Redirect(url);
                        }
                        else if (users[0].access_auth == "dli3")
                        {
                            string url = string.Format("/WSPHome/Monitoring_evaluation");
                            logindata.name = Session["UserName"].ToString();
                            logindata.email = Email;
                            logindata.loginlogout = "Login";
                            logindata.checkloginlogout = "1";
                            logindata.date = DateTime.Now.ToString("yyyy-MM-dd");
                            logindata.datetime = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
                            ABE.obj_login_datetime.Add(logindata);
                            ABE.SaveChanges();

                            return Redirect(url);
                        }
                        else if (users[0].access_auth == "StateTraining")
                        {
                            string url = string.Format("/MasterDropDown/Training_evaluation");
                            logindata.name = Session["UserName"].ToString();
                            logindata.email = Email;
                            logindata.loginlogout = "Login";
                            logindata.checkloginlogout = "1";
                            logindata.date = DateTime.Now.ToString("yyyy-MM-dd");
                            logindata.datetime = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
                            ABE.obj_login_datetime.Add(logindata);
                            ABE.SaveChanges();

                            return Redirect(url);
                        }
                        //string urls = string.Format("/WspNew/MIS_Modules");
                        //return Redirect(urls);
                        if (LoginPageSessionName == "Gplevel_data")
                        {
                            if (UserName == "Admin" || UserName == "State Level Nodal Officer" || UserName == "National Level Nodal Officer" || UserName == "District Level Nodal Officer")
                            {
                                //var Str_ = "Gplevel_data";
                                string url = string.Format("/WSPHome/Monitoring_evaluation?userid={0}", users[0].UserId);
                                logindata.name = Session["UserName"].ToString();
                                logindata.email = Email;
                                logindata.loginlogout = "Login";
                                logindata.checkloginlogout = "1";
                                logindata.date = DateTime.Now.ToString("yyyy-MM-dd");
                                logindata.datetime = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
                                ABE.obj_login_datetime.Add(logindata);
                                ABE.SaveChanges();

                                return Redirect(url);
                                //  return RedirectToAction("Monitoring_evaluation", "WSPHome");
                                // return Json("Gplevel_data", JsonRequestBehavior.AllowGet);
                            }
                            else
                            {
                                Session["Error"] = "Please Login NPMU Officer/State Officer/District Officer";
                                abhy_tbl_error error_data = new abhy_tbl_error();
                                error_data.error_test = "Please Login NPMU Officer / State Officer / District Officer";
                                error_data.user_email = Email;
                                error_data.user_password = Data.Password;
                                error_data.user_type = "login";
                                error_data.ipaddress = ipAddress1;
                                error_data.error_count = "1";
                                ABE.obj_abhy_tbl_error.Add(error_data);
                                ABE.SaveChanges();
                                return RedirectToAction("WSP_GWM_HOME", "WspNew");
                                // return Json(new { json_return = Return_Value });
                                // return Json("NOTNPMUState", JsonRequestBehavior.AllowGet);
                            }
                        }
                        else if (LoginPageSessionName == "Gis_portel")
                        {
                            string url = string.Format("https://ataljal-arcgis.mowr.gov.in/gis/");
                            return Redirect(url);
                        }
                        else if (LoginPageSessionName == "Physical_view")
                        {
                            // var UserName = users[0].NodalOfficer;
                            if (Email == "wbataljal@gmail.com")
                            {
                                Session["Error"] = "Please Select Monitoring And Evaluation Module";
                                abhy_tbl_error error_data = new abhy_tbl_error();
                                error_data.error_test = "Please Select Monitoring And Evaluation Module";
                                error_data.user_email = Email;
                                error_data.user_password = Data.Password;
                                error_data.user_type = "login";
                                error_data.ipaddress = ipAddress1;
                                error_data.error_count = "1";
                                ABE.obj_abhy_tbl_error.Add(error_data);
                                ABE.SaveChanges();
                                return RedirectToAction("WSP_GWM_HOME", "WspNew");
                            }
                            if (UserName == "Gram Panchyat Nodal Officer" || Session["Access_Auth"].ToString() == "GP-Training")
                            {
                                //var Str_ = "Gplevel_data";
                                string url = string.Format("/MasterDropDown/current_event_gp_auth?userid={0}", users[0].UserId);
                                logindata.name = Session["UserName"].ToString();
                                logindata.email = Email;
                                logindata.loginlogout = "Login";
                                logindata.checkloginlogout = "1";
                                logindata.date = DateTime.Now.ToString("yyyy-MM-dd");
                                logindata.datetime = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
                                ABE.obj_login_datetime.Add(logindata);
                                ABE.SaveChanges();

                                //string url = string.Format("~/Home/under_maintainance");
                                return Redirect(url);

                                //   return RedirectToAction("WSPHome", "WSPHome");
                                // return Json("Gplevel_data", JsonRequestBehavior.AllowGet);
                            }
                            else if (UserName != null)
                            {
                                string url = string.Format("/MasterDropDown/Training_evaluation?userid={0}", users[0].UserId);
                                logindata.name = Session["UserName"].ToString();
                                logindata.email = Email;
                                logindata.loginlogout = "Login";
                                logindata.checkloginlogout = "1";
                                logindata.date = DateTime.Now.ToString("yyyy-MM-dd");
                                logindata.datetime = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
                                ABE.obj_login_datetime.Add(logindata);
                                ABE.SaveChanges();

                                return Redirect(url);
                            }
                            else
                            {
                                Session["Error"] = "Please Login Through NPMU/State Officer Credentials";
                                abhy_tbl_error error_data = new abhy_tbl_error();
                                error_data.error_test = "Please Login Through NPMU/State Officer Credentials";
                                error_data.user_email = Email;
                                error_data.user_password = Data.Password;
                                error_data.user_type = "login";
                                error_data.error_count = "1";
                                error_data.ipaddress = ipAddress1;
                                ABE.obj_abhy_tbl_error.Add(error_data);
                                ABE.SaveChanges();

                                return RedirectToAction("WSP_GWM_HOME", "WspNew");
                                // return Json(new { json_return = Return_Value });
                                // return Json("NOTNPMUState", JsonRequestBehavior.AllowGet);
                            }
                        }
                        else if (LoginPageSessionName == "WSP_HOME_WSP")
                        {
                            if (Email == "wbataljal@gmail.com")
                            {
                                Session["Error"] = "Please Select Monitoring And Evaluation Module";
                                abhy_tbl_error error_data = new abhy_tbl_error();
                                error_data.error_test = "Please Select Monitoring And Evaluation Module";
                                error_data.user_email = Email;
                                error_data.user_password = Data.Password;
                                error_data.user_type = "login";
                                error_data.ipaddress = ipAddress1;
                                error_data.error_count = "1";
                                ABE.obj_abhy_tbl_error.Add(error_data);
                                ABE.SaveChanges();
                                return RedirectToAction("WSP_GWM_HOME", "WspNew");
                            }
                            else
                            {
                                //var Str_ = "Gplevel_data";
                                string url = string.Format("/WSPHome/Gp_information?userid={0}", users[0].UserId);
                                logindata.name = Session["UserName"].ToString();
                                logindata.email = Email;
                                logindata.loginlogout = "Login";
                                logindata.checkloginlogout = "1";
                                logindata.date = DateTime.Now.ToString("yyyy-MM-dd");
                                logindata.datetime = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
                                ABE.obj_login_datetime.Add(logindata);
                                ABE.SaveChanges();

                                return Redirect(url);
                                //  return RedirectToAction("Gp_information", "WSPHome");
                                // return Json("Gplevel_data", JsonRequestBehavior.AllowGet);
                            }
                        }
                        else
                        {
                            Session["Error"] = "Please Login Current Credentials";
                            abhy_tbl_error error_data = new abhy_tbl_error();
                            error_data.error_test = "Please Login Current Credentials";
                            error_data.user_email = Email;
                            error_data.user_password = Data.Password;
                            error_data.user_type = "login";
                            error_data.ipaddress = ipAddress1;
                            error_data.error_count = "1";
                            ABE.obj_abhy_tbl_error.Add(error_data);
                            ABE.SaveChanges();
                            return RedirectToAction("WSP_GWM_HOME", "WspNew");
                        }
                    }
                    else
                    {
                        // ViewBag.Error = "Your Credentials not Matched";
                        Session["Error"] = "Your Credentials not Matched";
                        abhy_tbl_error error_data = new abhy_tbl_error();
                        error_data.error_test = "Your Credentials not Matched";
                        error_data.user_email = Email;
                        error_data.user_password = Data.Password;
                        error_data.user_type = "login";
                        error_data.ipaddress = ipAddress1;
                        error_data.user_email = users[0].Email;
                        error_data.user_type = "login";
                        error_data.error_count = "1";
                        ABE.obj_abhy_tbl_error.Add(error_data);
                        ABE.SaveChanges();
                        return RedirectToAction("WSP_GWM_HOME", "WspNew");
                    }
                }
                else if (Verifiedornot == "False")
                {
                    Session["Error"] = "State Officer not Approved Your Account";
                    abhy_tbl_error error_data = new abhy_tbl_error();
                    error_data.error_test = "State Officer not Approved Your Account";
                    error_data.user_email = Email;
                    error_data.user_password = Data.Password;
                    error_data.user_type = "login";
                    error_data.ipaddress = ipAddress1;
                    error_data.error_count = "1";
                    ABE.obj_abhy_tbl_error.Add(error_data);
                    ABE.SaveChanges();
                    return RedirectToAction("WSP_GWM_HOME", "WspNew");
                    //    return Json("Your Credentials not Matched", JsonRequestBehavior.AllowGet);
                }
                else
                {
                    Session["Error"] = "Your Email Id is not Registered";
                    abhy_tbl_error error_data = new abhy_tbl_error();
                    error_data.error_test = "Your Email Id is not Registered";
                    error_data.user_email = Email;
                    error_data.user_password = Data.Password;
                    error_data.user_type = "login";
                    error_data.ipaddress = ipAddress1;
                    error_data.error_count = "1";
                    ABE.obj_abhy_tbl_error.Add(error_data);
                    ABE.SaveChanges();
                    return RedirectToAction("WSP_GWM_HOME", "WspNew");
                }
            }
            catch (Exception ex)
            {
                Session["Error"] = "Your Credentials not Matched";
                abhy_tbl_error error_data = new abhy_tbl_error();
                error_data.error_test = ex.Message;
                error_data.user_email = Email;
                error_data.user_password = Data.Password;
                error_data.user_type = "login";
                error_data.ipaddress = ipAddress1;
                error_data.error_count = "1";
                ABE.obj_abhy_tbl_error.Add(error_data);
                ABE.SaveChanges();
                return RedirectToAction("WSP_GWM_HOME", "WspNew");
            }
        }
        [HttpGet]
        public ActionResult GWM_login()
        {


            return View();

        }
        [HttpPost]
        public ActionResult GWM_login(string useremail, string userpassword)
        {

            var UserDetails = ABE.objUsers.SingleOrDefault(x => x.Email == useremail.Trim() && x.Password == userpassword.Trim() && x.Verifiedornot == "True");

            var user_details = ABE.objUsers.SingleOrDefault(x => x.Email == useremail.Trim() && x.Password == userpassword.Trim() && x.Verifiedornot == "False");

            if (user_details != null)
            {
                ViewBag.Error = "Please check your mail and register before login";
                return RedirectToAction("WSP_GWM_HOME", "WspNew");
            }
            else
            {

                if (UserDetails != null)
                {
                    Session["Email"] = UserDetails.Email;
                    Session["Officer"] = UserDetails.NodalOfficer;
                    Session["UserName"] = UserDetails.UserName;
                    Session["gwmUserId"] = UserDetails.UserId;
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

                    //if (Session["MisImageInfo"].ToString() == "SecurityPlan")
                    //{
                    //    return RedirectToAction("WSPHOME", "Wsp_new");
                    //}
                    //else /*if (Session["MisImageInfo"].ToString() == "GWM")*/
                    //{
                    return RedirectToAction("GroundWaterMonitoring", "WSP");

                    // }




                }
                else
                {
                    ViewBag.Error = "Not Matched Login Details";
                    return View("GWM_login");
                }
            }

        }
        [HttpGet]
        public ActionResult ForgetPassword()
        {
            return View();
        }

        [HttpPost]
        public ActionResult ForgetPassword(string Email)
        {

            List<Users> reg1 = ABE.objUsers.Where(x => x.Email.Contains(Email)).ToList();

            if (reg1.Count != 0 && Email == reg1[0].Email.Trim())
            {

                StringBuilder sb = new StringBuilder();
                sb.Append("Hi,");
                sb.AppendLine();
                sb.AppendLine();

                sb.AppendLine("WE RECEIVED YOUR HELP REQUEST!");

                sb.AppendLine();
                sb.Append("User Name: " + reg1[0].UserName.Trim());
                sb.AppendLine();
                sb.Append("Email: " + reg1[0].Email.Trim());
                sb.AppendLine();
                sb.Append("Password: " + reg1[0].Password.Trim());
                sb.AppendLine();
                sb.AppendLine();
                sb.Append("Note: Never Share Your Credentials With Others!");
                sb.AppendLine();


                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("<img src=https://img1.wsimg.com/isteam/ip/c7009415-e7fa-45c8-b5e4-cbb576963468/logo/5a843789-34b8-41ac-8a9c-2fdb06ce0b89.png/:/rs=h:150/qt=q:95 width='300px'>");
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("<br>");
                sb.Append("Thanking You,");
                sb.Append("<br>");
                sb.Append("GCRS Team");
                string results1 = WebConstents.SendEmailSMTP(Email, "", "PasswordRecovery", sb.ToString(), "");

                ViewBag.Error = "Please Check Your Mail";
                //Session["FCode"] = Code;
                return RedirectToAction("GWM_login");
            }
            else
            {
                ViewBag.Error = "You Have Not Registered";
                return RedirectToAction("GWM_login");
            }

        }

        [HttpGet]
        public ActionResult MisSignUp()
        {
            return RedirectToAction("GWM_login");
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

                if (result.StateName != "" && result.StateName != null)
                {


                    var GD = Convert.ToInt32(result.StateName);
                    var gm = ABE.objabhy_states.Where(x => x.sid == GD).ToList();
                    StateName = gm[0].statename;
                    Session["gstate"] = StateName;

                }
                else
                {
                    Session["gstate"] = "";
                }
                if (result.DistrictName != "" && result.DistrictName != null)
                {
                    var GD = Convert.ToInt32(result.DistrictName);
                    var gm = ABE.objabhy_districts.Where(x => x.did == GD).ToList();
                    DistName = gm[0].district_name;
                    Session["gdist"] = DistName;

                }
                else
                {
                    Session["gdist"] = "";
                }

                if (result.BlockName != "" && result.BlockName != null)
                {
                    var GD = Convert.ToInt32(result.BlockName);
                    var gm = ABE.objabhy_blocks.Where(x => x.bid == GD).ToList();
                    BlockName = gm[0].block_name;
                    Session["gblock"] = BlockName;

                }
                else
                {
                    Session["gblock"] = "";
                }

                if (result.GramPanchayatName != "" && result.GramPanchayatName != null)
                {
                    var GD = Convert.ToInt32(result.GramPanchayatName);
                    var gm = ABE.objabhy_grampanchayat.Where(x => x.gpid == GD).ToList();

                    Grampanchayat = gm[0].gpname;
                    Session["ggram"] = Grampanchayat;
                }
                else
                {
                    Session["ggram"] = "";
                }
                Session["Email"] = result.Email;
                Users newuser = new Users();
                if (Grampanchayat != "" && StateName != "" && DistName != "" && BlockName != "")
                {
                    var users132 = ABE.objUsers.Where(x => x.StateName == StateName && x.DistrictName == DistName && x.BlockName == BlockName && x.GramPanchayatName == Grampanchayat).ToList();
                    if (users132.Count != 0)
                    {
                        return Json("The GramPanchayat is Alreddy Registered", JsonRequestBehavior.AllowGet);
                    }
                }

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


                if (ver.Count == 1)
                {
                    List<Users> users = ABE.objUsers.Where(x => x.VerificationCode == vcode).ToList();

                    if (users.Count != 0)
                    {

                        users[0].Verifiedornot = "True";
                        //ABE.Entry(Data1).State = EntityState.Deleted;
                        ABE.SaveChanges();
                    }
                    return RedirectToAction("GWM_login");


                }
                else
                {
                    ViewBag.Error = "Your Verification Code is Expired ";
                    return View("GWM_login");
                }
            }

            catch (Exception ex)
            {
                return RedirectToAction("GWM_login");
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
        public ActionResult wsp_admin()
        {
            return View();
        }

        public ActionResult report_declaration()
        {
            return View();
        }
        [HttpPost]
        public ActionResult report_declaration__InsertData(string gpname, string block_area, string gp_area, string annual_rainfall, string evapo, string surface_water_bodies, string human_population, string livestock_population, string from_surface_water, string from_ground_water, string water_req_various_crops)
        {
            if (Session["UserId"] != null)
            {
                List<abhy_wsp_parameters> ddetails = new List<abhy_wsp_parameters>();
                //JavaScriptSerializer js = new JavaScriptSerializer();
                //var result = js.Deserialize<abhy_wateravailability_new>(Data);
                abhy_wsp_parameters obj = new abhy_wsp_parameters();
                var State = Session["gstate"].ToString();
                var Dist = Session["gdist"].ToString();
                var Block = Session["gblock"].ToString();
                var Gram = Session["ggram"].ToString();
                ddetails = ABE.obj_abhy_wsp_parameters.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                if (ddetails.Count == 1)
                {
                    var ddetails1 = ddetails.SingleOrDefault();
                    ddetails1.state_name = State;
                    ddetails1.district_name = Dist;
                    ddetails1.block_name = Block;
                    ddetails1.gpname = gpname;
                    ddetails1.block_area = block_area;
                    ddetails1.gp_area = gp_area;
                    ddetails1.annual_rainfall = annual_rainfall;
                    ddetails1.evapo = evapo;
                    ddetails1.surface_water_bodies = surface_water_bodies;
                    ddetails1.human_population = human_population;
                    ddetails1.livestock_population = livestock_population;
                    ddetails1.from_surface_water = from_surface_water;
                    ddetails1.from_ground_water = from_ground_water;
                    ddetails1.water_req_various_crops = water_req_various_crops;
                    var TodayDate1 = DateTime.Now.ToString();

                    ddetails1.curr_date = TodayDate1;
                    ddetails1.userid = Convert.ToInt32(Session["UserId"]);
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
                        obj.block_name = Block;
                        obj.gpname = gpname;
                        obj.block_area = block_area;
                        obj.gp_area = gp_area;
                        obj.annual_rainfall = annual_rainfall;
                        obj.evapo = evapo;
                        obj.surface_water_bodies = surface_water_bodies;
                        obj.human_population = human_population;
                        obj.livestock_population = livestock_population;
                        obj.from_surface_water = from_surface_water;
                        obj.from_ground_water = from_ground_water;
                        obj.water_req_various_crops = water_req_various_crops;
                        var TodayDate1 = DateTime.Now.ToString();

                        obj.curr_date = TodayDate1;
                        ABE.obj_abhy_wsp_parameters.Add(obj);
                        ABE.SaveChanges();
                        return Json("Successfully Saved");
                    }
                    else
                    {
                        return Json("Duplicate data is there");
                    }

                }
            }
            else
            {
                Session["WSPHOME"] = "Data";
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }

        public ActionResult all_report_excel(string StateName, string Dist, string Block, string Gram, string nodal, string year, string month, string date)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<vw_loginboth> dd = new List<vw_loginboth>();
                    List<vw_loginboth_full> dd_full = new List<vw_loginboth_full>();
                    if (nodal == "All")
                    {
                        if (year != "0" && year != "" && year != null && month != "0" && month != "" && month != null && date != "0" && date != "" && date != null)
                        {
                            dd_full = ABE.obj_vw_loginboth_full.Where(x => x.year == year && x.month == month && x.day == date).OrderByDescending(x => x.datetime).ThenByDescending(x => x.id).ThenByDescending(x => x.email).ToList();
                            //dd.Add(data);
                        }
                        else if (year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.year == year && x.month == month).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else if (year != "0" && year != "" && year != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.year == year).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else
                        {
                            dd = ABE.obj_vw_loginboth.OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                    }
                    else if (nodal == "National Level Nodal Officer")
                    {
                        if (year != "0" && year != "" && year != null && month != "0" && month != "" && month != null && date != "0" && date != "" && date != null)
                        {
                            dd_full = ABE.obj_vw_loginboth_full.Where(x => x.NodalOfficer == nodal && x.year == year && x.month == month && x.day == date).OrderByDescending(x => x.datetime).ThenByDescending(x => x.id).ThenByDescending(x => x.email).ToList();
                            //dd.Add(data);
                        }
                        else if (year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.NodalOfficer == nodal && x.year == year && x.month == month).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else if (year != "0" && year != "" && year != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.NodalOfficer == nodal && x.year == year).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.NodalOfficer == nodal).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                    }
                    else if (nodal == "State Level Nodal Officer")
                    {
                        if (StateName == "0" && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null && date != "0" && date != "" && date != null)
                        {
                            dd_full = ABE.obj_vw_loginboth_full.Where(x => x.NodalOfficer == nodal && x.year == year && x.month == month && x.day == date).OrderByDescending(x => x.datetime).ThenByDescending(x => x.id).ThenByDescending(x => x.email).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null && date != "0" && date != "" && date != null)
                        {
                            dd_full = ABE.obj_vw_loginboth_full.Where(x => x.StateName == StateName && x.NodalOfficer == nodal && x.year == year && x.month == month && x.day == date).OrderByDescending(x => x.datetime).ThenByDescending(x => x.id).ThenByDescending(x => x.email).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.NodalOfficer == nodal && x.year == year && x.month == month).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && year != "0" && year != "" && year != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.NodalOfficer == nodal && x.year == year).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.NodalOfficer == nodal).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.NodalOfficer == nodal).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                    }
                    else if (nodal == "District Level Nodal Officer")
                    {
                        if (StateName == "0" && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null && date != "0" && date != "" && date != null)
                        {
                            dd_full = ABE.obj_vw_loginboth_full.Where(x => x.NodalOfficer == nodal && x.year == year && x.month == month && x.day == date).OrderByDescending(x => x.datetime).ThenByDescending(x => x.id).ThenByDescending(x => x.email).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null && date != "0" && date != "" && date != null)
                        {
                            dd_full = ABE.obj_vw_loginboth_full.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.NodalOfficer == nodal && x.year == year && x.month == month && x.day == date).OrderByDescending(x => x.datetime).ThenByDescending(x => x.id).ThenByDescending(x => x.email).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.NodalOfficer == nodal && x.year == year && x.month == month).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.NodalOfficer == nodal && x.year == year).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.NodalOfficer == nodal).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null && date != "0" && date != "" && date != null)
                        {
                            dd_full = ABE.obj_vw_loginboth_full.Where(x => x.StateName == StateName && x.NodalOfficer == nodal && x.year == year && x.month == month && x.day == date).OrderByDescending(x => x.id).ThenByDescending(x => x.email).ThenByDescending(x => x.loginlogout).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.NodalOfficer == nodal && x.year == year && x.month == month).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && year != "0" && year != "" && year != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.NodalOfficer == nodal && x.year == year).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.NodalOfficer == nodal).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.NodalOfficer == nodal).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                    }
                    else if (nodal == "Block Level Nodal Officer")
                    {
                        if (StateName == "0" && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null && date != "0" && date != "" && date != null)
                        {
                            dd_full = ABE.obj_vw_loginboth_full.Where(x => x.NodalOfficer == nodal && x.year == year && x.month == month && x.day == date).OrderByDescending(x => x.datetime).ThenByDescending(x => x.id).ThenByDescending(x => x.email).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null && date != "0" && date != "" && date != null)
                        {
                            dd_full = ABE.obj_vw_loginboth_full.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.BlockName == Block && x.NodalOfficer == nodal && x.year == year && x.month == month && x.day == date).OrderByDescending(x => x.datetime).ThenByDescending(x => x.id).ThenByDescending(x => x.email).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.BlockName == Block && x.NodalOfficer == nodal && x.year == year && x.month == month).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.BlockName == Block && x.NodalOfficer == nodal && x.year == year).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.BlockName == Block && x.NodalOfficer == nodal).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null && date != "0" && date != "" && date != null)
                        {
                            dd_full = ABE.obj_vw_loginboth_full.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.NodalOfficer == nodal && x.year == year && x.month == month && x.day == date).OrderByDescending(x => x.datetime).ThenByDescending(x => x.id).ThenByDescending(x => x.email).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.NodalOfficer == nodal && x.year == year && x.month == month).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.NodalOfficer == nodal && x.year == year).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.NodalOfficer == nodal).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null && date != "0" && date != "" && date != null)
                        {
                            dd_full = ABE.obj_vw_loginboth_full.Where(x => x.StateName == StateName && x.NodalOfficer == nodal && x.year == year && x.month == month && x.day == date).OrderByDescending(x => x.datetime).ThenByDescending(x => x.id).ThenByDescending(x => x.email).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.NodalOfficer == nodal && x.year == year && x.month == month).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && year != "0" && year != "" && year != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.NodalOfficer == nodal && x.year == year).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.NodalOfficer == nodal).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.NodalOfficer == nodal).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                    }
                    else if (nodal == "Gram Panchyat Nodal Officer")
                    {
                        if (StateName == "0" && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null && date != "0" && date != "" && date != null)
                        {
                            dd_full = ABE.obj_vw_loginboth_full.Where(x => x.NodalOfficer == nodal && x.year == year && x.month == month && x.day == date).OrderByDescending(x => x.datetime).ThenByDescending(x => x.id).ThenByDescending(x => x.email).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null && date != "0" && date != "" && date != null)
                        {
                            dd_full = ABE.obj_vw_loginboth_full.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.BlockName == Block && x.GramPanchayatName == Gram && x.GramPanchayatName == Gram && x.year == year && x.month == month && x.day == date).OrderByDescending(x => x.datetime).ThenByDescending(x => x.id).ThenByDescending(x => x.email).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.BlockName == Block && x.GramPanchayatName == Gram && x.year == year && x.month == month).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.BlockName == Block && x.GramPanchayatName == Gram && x.year == year).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.BlockName == Block && x.GramPanchayatName == Gram).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null && date != "0" && date != "" && date != null)
                        {
                            dd_full = ABE.obj_vw_loginboth_full.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.BlockName == Block && x.NodalOfficer == nodal && x.year == year && x.month == month && x.day == date).OrderByDescending(x => x.datetime).ThenByDescending(x => x.id).ThenByDescending(x => x.email).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.BlockName == Block && x.NodalOfficer == nodal && x.year == year && x.month == month).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.BlockName == Block && x.NodalOfficer == nodal && x.year == year).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.BlockName == Block && x.NodalOfficer == nodal).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null && date != "0" && date != "" && date != null)
                        {
                            dd_full = ABE.obj_vw_loginboth_full.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.NodalOfficer == nodal && x.year == year && x.month == month && x.day == date).OrderByDescending(x => x.datetime).ThenByDescending(x => x.id).ThenByDescending(x => x.email).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.NodalOfficer == nodal && x.year == year && x.month == month).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.NodalOfficer == nodal && x.year == year).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.NodalOfficer == nodal).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null && date != "0" && date != "" && date != null)
                        {
                            dd_full = ABE.obj_vw_loginboth_full.Where(x => x.StateName == StateName && x.NodalOfficer == nodal && x.year == year && x.month == month && x.day == date).OrderByDescending(x => x.datetime).ThenByDescending(x => x.id).ThenByDescending(x => x.email).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.NodalOfficer == nodal && x.year == year && x.month == month).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && year != "0" && year != "" && year != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.NodalOfficer == nodal && x.year == year).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.NodalOfficer == nodal).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.NodalOfficer == nodal).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                    }

                    if (dd_full.Count != 0)
                    {
                        using (var workbook = new XLWorkbook())
                        {

                            var worksheet = workbook.Worksheets.Add("Login-Logout Information");
                            var currentRow = 1;
                            worksheet.Cell(currentRow, 1).Value = "Nodal Officer";
                            worksheet.Cell(currentRow, 2).Value = "Email";
                            worksheet.Cell(currentRow, 3).Value = "State Name";
                            worksheet.Cell(currentRow, 4).Value = "District Name";
                            worksheet.Cell(currentRow, 5).Value = "Block Name";
                            worksheet.Cell(currentRow, 6).Value = "GramPanchayat Name";
                            worksheet.Cell(currentRow, 7).Value = "User Name";
                            worksheet.Cell(currentRow, 8).Value = "Log In / Log Out";
                            worksheet.Cell(currentRow, 9).Value = "Date";
                            worksheet.Cell(currentRow, 10).Value = "Action Time";

                            if (dd_full.Count != 0)
                            {


                                foreach (var user in dd_full)
                                {
                                    currentRow++;

                                    worksheet.Cell(currentRow, 1).Value = user.NodalOfficer;
                                    worksheet.Cell(currentRow, 2).Value = user.email;
                                    worksheet.Cell(currentRow, 3).Value = user.StateName;
                                    worksheet.Cell(currentRow, 4).Value = user.DistrictName;
                                    worksheet.Cell(currentRow, 5).Value = user.BlockName;
                                    worksheet.Cell(currentRow, 6).Value = user.GramPanchayatName;
                                    worksheet.Cell(currentRow, 7).Value = user.name;
                                    worksheet.Cell(currentRow, 8).Value = user.loginlogout;
                                    worksheet.Cell(currentRow, 9).Value = user.datetime;
                                    worksheet.Cell(currentRow, 10).Value = user.ActionTime;

                                }
                            }
                            else
                            {
                                currentRow++;
                                worksheet.Cell(currentRow, 1).Value = "";
                                worksheet.Cell(currentRow, 2).Value = "";
                                worksheet.Cell(currentRow, 3).Value = "No Data";
                                worksheet.Cell(currentRow, 4).Value = "";
                                worksheet.Cell(currentRow, 5).Value = "";
                                worksheet.Cell(currentRow, 6).Value = "";

                            }
                            using (var stream = new MemoryStream())
                            {
                                workbook.SaveAs(stream);
                                var content = stream.ToArray();

                                return File(
                                    content,
                                    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                                    "Login-Logout Information.csv");
                            }
                        }
                    }
                    else
                    {
                        using (var workbook = new XLWorkbook())
                        {

                            var worksheet = workbook.Worksheets.Add("Login-Logout Information");
                            var currentRow = 1;
                            worksheet.Cell(currentRow, 1).Value = "Nodal Officer";
                            worksheet.Cell(currentRow, 2).Value = "Email";
                            worksheet.Cell(currentRow, 3).Value = "State Name";
                            worksheet.Cell(currentRow, 4).Value = "District Name";
                            worksheet.Cell(currentRow, 5).Value = "Block Name";
                            worksheet.Cell(currentRow, 6).Value = "GramPanchayat Name";
                            worksheet.Cell(currentRow, 7).Value = "User Name";
                            worksheet.Cell(currentRow, 8).Value = "Date";
                            worksheet.Cell(currentRow, 9).Value = "Log In Count";
                            worksheet.Cell(currentRow, 10).Value = "Log Out Count";
                            worksheet.Cell(currentRow, 11).Value = "Duration";
                            worksheet.Cell(currentRow, 12).Value = "Action Time";

                            if (dd.Count != 0)
                            {


                                foreach (var user in dd)
                                {
                                    currentRow++;

                                    worksheet.Cell(currentRow, 1).Value = user.NodalOfficer;
                                    worksheet.Cell(currentRow, 2).Value = user.email;
                                    worksheet.Cell(currentRow, 3).Value = user.StateName;
                                    worksheet.Cell(currentRow, 4).Value = user.DistrictName;
                                    worksheet.Cell(currentRow, 5).Value = user.BlockName;
                                    worksheet.Cell(currentRow, 6).Value = user.GramPanchayatName;
                                    worksheet.Cell(currentRow, 7).Value = user.name;
                                    worksheet.Cell(currentRow, 8).Value = user.date;
                                    worksheet.Cell(currentRow, 9).Value = user.login_count;
                                    worksheet.Cell(currentRow, 10).Value = user.logout_count;
                                    worksheet.Cell(currentRow, 11).Value = user.total_duration;
                                    worksheet.Cell(currentRow, 12).Value = user.ActionTime;

                                }
                            }
                            else
                            {
                                currentRow++;
                                worksheet.Cell(currentRow, 1).Value = "";
                                worksheet.Cell(currentRow, 2).Value = "";
                                worksheet.Cell(currentRow, 3).Value = "No Data";
                                worksheet.Cell(currentRow, 4).Value = "";
                                worksheet.Cell(currentRow, 5).Value = "";
                                worksheet.Cell(currentRow, 6).Value = "";

                            }
                            using (var stream = new MemoryStream())
                            {
                                workbook.SaveAs(stream);
                                var content = stream.ToArray();

                                return File(
                                    content,
                                    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                                    "Login-Logout Information.csv");
                            }
                        }
                    }
                }

                catch (Exception Ex)
                {
                    abhy_tbl_error error_data = new abhy_tbl_error();
                    error_data.error_test = Ex.Message;
                    error_data.user_email = Ex.StackTrace;
                    error_data.user_type = "Mis Login";
                    error_data.error_count = "1";
                    ABE.obj_abhy_tbl_error.Add(error_data);
                    ABE.SaveChanges();
                    return Json("error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult all_report(string StateName, string Dist, string Block, string Gram, string nodal, string year, string month, string date)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<vw_loginboth> dd = new List<vw_loginboth>();
                    List<vw_loginboth_full> dd_full = new List<vw_loginboth_full>();
                    if (nodal == "All")
                    {
                        if (year != "0" && year != "" && year != null && month != "0" && month != "" && month != null && date != "0" && date != "" && date != null)
                        {
                            dd_full = ABE.obj_vw_loginboth_full.Where(x => x.year == year && x.month == month && x.day == date).OrderByDescending(x => x.id).ThenByDescending(x => x.email).ThenByDescending(x => x.loginlogout).ToList();
                            //dd.Add(data);
                        }
                        else if (year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.year == year && x.month == month).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else if (year != "0" && year != "" && year != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.year == year).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else
                        {
                            dd = ABE.obj_vw_loginboth.OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                    }
                    else if (nodal == "National Level Nodal Officer")
                    {
                        if (year != "0" && year != "" && year != null && month != "0" && month != "" && month != null && date != "0" && date != "" && date != null)
                        {
                            dd_full = ABE.obj_vw_loginboth_full.Where(x => x.NodalOfficer == nodal && x.year == year && x.month == month && x.day == date).OrderByDescending(x => x.id).ThenByDescending(x => x.email).ThenByDescending(x => x.loginlogout).ToList();
                            //dd.Add(data);
                        }
                        else if (year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.NodalOfficer == nodal && x.year == year && x.month == month).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else if (year != "0" && year != "" && year != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.NodalOfficer == nodal && x.year == year).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.NodalOfficer == nodal).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                    }
                    else if (nodal == "State Level Nodal Officer")
                    {
                        if (StateName == "0" && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null && date != "0" && date != "" && date != null)
                        {
                            dd_full = ABE.obj_vw_loginboth_full.Where(x => x.NodalOfficer == nodal && x.year == year && x.month == month && x.day == date).OrderByDescending(x => x.id).ThenByDescending(x => x.email).ThenByDescending(x => x.loginlogout).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null && date != "0" && date != "" && date != null)
                        {
                            dd_full = ABE.obj_vw_loginboth_full.Where(x => x.StateName == StateName && x.NodalOfficer == nodal && x.year == year && x.month == month && x.day == date).OrderByDescending(x => x.id).ThenByDescending(x => x.email).ThenByDescending(x => x.loginlogout).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.NodalOfficer == nodal && x.year == year && x.month == month).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && year != "0" && year != "" && year != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.NodalOfficer == nodal && x.year == year).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.NodalOfficer == nodal).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }

                        else
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.NodalOfficer == nodal).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                    }
                    else if (nodal == "District Level Nodal Officer")
                    {
                        if (StateName == "0" && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null && date != "0" && date != "" && date != null)
                        {
                            dd_full = ABE.obj_vw_loginboth_full.Where(x => x.NodalOfficer == nodal && x.year == year && x.month == month && x.day == date).OrderByDescending(x => x.id).ThenByDescending(x => x.email).ThenByDescending(x => x.loginlogout).ToList();
                            //dd.Add(data);
                        }

                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null && date != "0" && date != "" && date != null)
                        {
                            dd_full = ABE.obj_vw_loginboth_full.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.NodalOfficer == nodal && x.year == year && x.month == month && x.day == date).OrderByDescending(x => x.id).ThenByDescending(x => x.email).ThenByDescending(x => x.loginlogout).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.NodalOfficer == nodal && x.year == year && x.month == month).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.NodalOfficer == nodal && x.year == year).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.NodalOfficer == nodal).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null && date != "0" && date != "" && date != null)
                        {
                            dd_full = ABE.obj_vw_loginboth_full.Where(x => x.StateName == StateName && x.NodalOfficer == nodal && x.year == year && x.month == month && x.day == date).OrderByDescending(x => x.id).ThenByDescending(x => x.email).ThenByDescending(x => x.loginlogout).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.NodalOfficer == nodal && x.year == year && x.month == month).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && year != "0" && year != "" && year != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.NodalOfficer == nodal && x.year == year).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.NodalOfficer == nodal).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.NodalOfficer == nodal).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                    }
                    else if (nodal == "Block Level Nodal Officer")
                    {
                        if (StateName == "0" && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null && date != "0" && date != "" && date != null)
                        {
                            dd_full = ABE.obj_vw_loginboth_full.Where(x => x.NodalOfficer == nodal && x.year == year && x.month == month && x.day == date).OrderByDescending(x => x.id).ThenByDescending(x => x.email).ThenByDescending(x => x.loginlogout).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null && date != "0" && date != "" && date != null)
                        {
                            dd_full = ABE.obj_vw_loginboth_full.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.BlockName == Block && x.NodalOfficer == nodal && x.year == year && x.month == month && x.day == date).OrderByDescending(x => x.id).ThenByDescending(x => x.email).ThenByDescending(x => x.loginlogout).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.BlockName == Block && x.NodalOfficer == nodal && x.year == year && x.month == month).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.BlockName == Block && x.NodalOfficer == nodal && x.year == year).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.BlockName == Block && x.NodalOfficer == nodal).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null && date != "0" && date != "" && date != null)
                        {
                            dd_full = ABE.obj_vw_loginboth_full.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.NodalOfficer == nodal && x.year == year && x.month == month && x.day == date).OrderByDescending(x => x.id).ThenByDescending(x => x.email).ThenByDescending(x => x.loginlogout).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.NodalOfficer == nodal && x.year == year && x.month == month).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.NodalOfficer == nodal && x.year == year).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.NodalOfficer == nodal).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null && date != "0" && date != "" && date != null)
                        {
                            dd_full = ABE.obj_vw_loginboth_full.Where(x => x.StateName == StateName && x.NodalOfficer == nodal && x.year == year && x.month == month && x.day == date).OrderByDescending(x => x.id).ThenByDescending(x => x.email).ThenByDescending(x => x.loginlogout).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.NodalOfficer == nodal && x.year == year && x.month == month).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && year != "0" && year != "" && year != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.NodalOfficer == nodal && x.year == year).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.NodalOfficer == nodal).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.NodalOfficer == nodal).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                    }
                    else if (nodal == "Gram Panchyat Nodal Officer")
                    {
                        if (StateName == "0" && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null && date != "0" && date != "" && date != null)
                        {
                            dd_full = ABE.obj_vw_loginboth_full.Where(x => x.NodalOfficer == nodal && x.year == year && x.month == month && x.day == date).OrderByDescending(x => x.id).ThenByDescending(x => x.email).ThenByDescending(x => x.loginlogout).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null && date != "0" && date != "" && date != null)
                        {
                            dd_full = ABE.obj_vw_loginboth_full.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.BlockName == Block && x.GramPanchayatName == Gram && x.GramPanchayatName == Gram && x.year == year && x.month == month && x.day == date).OrderByDescending(x => x.id).ThenByDescending(x => x.email).ThenByDescending(x => x.loginlogout).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.BlockName == Block && x.GramPanchayatName == Gram && x.year == year && x.month == month).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.BlockName == Block && x.GramPanchayatName == Gram && x.year == year).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.BlockName == Block && x.GramPanchayatName == Gram).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null && date != "0" && date != "" && date != null)
                        {
                            dd_full = ABE.obj_vw_loginboth_full.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.BlockName == Block && x.NodalOfficer == nodal && x.year == year && x.month == month && x.day == date).OrderByDescending(x => x.id).ThenByDescending(x => x.email).ThenByDescending(x => x.loginlogout).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.BlockName == Block && x.NodalOfficer == nodal && x.year == year && x.month == month).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.BlockName == Block && x.NodalOfficer == nodal && x.year == year).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.BlockName == Block && x.NodalOfficer == nodal).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null && date != "0" && date != "" && date != null)
                        {
                            dd_full = ABE.obj_vw_loginboth_full.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.NodalOfficer == nodal && x.year == year && x.month == month && x.day == date).OrderByDescending(x => x.id).ThenByDescending(x => x.email).ThenByDescending(x => x.loginlogout).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.NodalOfficer == nodal && x.year == year && x.month == month).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.NodalOfficer == nodal && x.year == year).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.NodalOfficer == nodal).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null && date != "0" && date != "" && date != null)
                        {
                            dd_full = ABE.obj_vw_loginboth_full.Where(x => x.StateName == StateName && x.NodalOfficer == nodal && x.year == year && x.month == month && x.day == date).OrderByDescending(x => x.id).ThenByDescending(x => x.email).ThenByDescending(x => x.loginlogout).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.NodalOfficer == nodal && x.year == year && x.month == month).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && year != "0" && year != "" && year != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.NodalOfficer == nodal && x.year == year).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.NodalOfficer == nodal).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                        else
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.NodalOfficer == nodal).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).ToList();
                            //dd.Add(data);
                        }
                    }

                    if (dd_full.Count != 0)
                    {
                        var exetotal = dd_full.Count;

                        var Totalpages = Math.Ceiling(exetotal / 200.0);
                        var jsonresult = Json(exetotal + "," + Totalpages, JsonRequestBehavior.AllowGet);
                        jsonresult.MaxJsonLength = int.MaxValue;
                        return jsonresult;

                        //var jsonResult = Json(dd_full, JsonRequestBehavior.AllowGet);
                        //jsonResult.MaxJsonLength = int.MaxValue;
                        //return jsonResult;
                    }
                    else
                    {
                        var exetotal = dd.Count;

                        var Totalpages = Math.Ceiling(exetotal / 200.0);
                        var jsonresult = Json(exetotal + "," + Totalpages, JsonRequestBehavior.AllowGet);
                        jsonresult.MaxJsonLength = int.MaxValue;
                        return jsonresult;

                        //var jsonResult = Json(dd, JsonRequestBehavior.AllowGet);
                        //jsonResult.MaxJsonLength = int.MaxValue;
                        //return jsonResult;
                    }
                }

                catch (Exception Ex)
                {
                    abhy_tbl_error error_data = new abhy_tbl_error();
                    error_data.error_test = Ex.Message;
                    error_data.user_email = Ex.StackTrace;
                    error_data.user_type = "Mis Login";
                    error_data.error_count = "1";
                    ABE.obj_abhy_tbl_error.Add(error_data);
                    ABE.SaveChanges();
                    return Json("error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }



        [HttpPost]
        public ActionResult all_report_data(string StateName, string Dist, string Block, string Gram, string nodal, string year, string month, string date, int PageNumber)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    int recordsToSkip = (PageNumber - 1) * 200;
                    List<vw_loginboth> dd = new List<vw_loginboth>();
                    List<vw_loginboth_full> dd_full = new List<vw_loginboth_full>();
                    if (nodal == "All")
                    {
                        if (year != "0" && year != "" && year != null && month != "0" && month != "" && month != null && date != "0" && date != "" && date != null)
                        {
                            dd_full = ABE.obj_vw_loginboth_full.Where(x => x.year == year && x.month == month && x.day == date).OrderByDescending(x => x.datetime).ThenByDescending(x => x.id).ThenByDescending(x => x.email).Skip(recordsToSkip).Take(200).ToList();
                            //dd.Add(data);
                        }
                        else if (year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.year == year && x.month == month).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).Skip(recordsToSkip).Take(200).ToList();
                            //dd.Add(data);
                        }
                        else if (year != "0" && year != "" && year != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.year == year).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).Skip(recordsToSkip).Take(200).ToList();
                            //dd.Add(data);
                        }
                        else
                        {
                            dd = ABE.obj_vw_loginboth.OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).Skip(recordsToSkip).Take(200).ToList();
                            //dd.Add(data);
                        }
                    }
                    else if (nodal == "National Level Nodal Officer")
                    {
                        if (year != "0" && year != "" && year != null && month != "0" && month != "" && month != null && date != "0" && date != "" && date != null)
                        {
                            dd_full = ABE.obj_vw_loginboth_full.Where(x => x.NodalOfficer == nodal && x.year == year && x.month == month && x.day == date).OrderByDescending(x => x.datetime).ThenByDescending(x => x.id).ThenByDescending(x => x.email).Skip(recordsToSkip).Take(200).ToList();
                            //dd.Add(data);
                        }
                        else if (year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.NodalOfficer == nodal && x.year == year && x.month == month).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).Skip(recordsToSkip).Take(200).ToList();
                            //dd.Add(data);
                        }
                        else if (year != "0" && year != "" && year != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.NodalOfficer == nodal && x.year == year).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).Skip(recordsToSkip).Take(200).ToList();
                            //dd.Add(data);
                        }
                        else
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.NodalOfficer == nodal).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).Skip(recordsToSkip).Take(200).ToList();
                            //dd.Add(data);
                        }
                    }
                    else if (nodal == "State Level Nodal Officer")
                    {
                        if (StateName == "0" && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null && date != "0" && date != "" && date != null)
                        {
                            dd_full = ABE.obj_vw_loginboth_full.Where(x => x.NodalOfficer == nodal && x.year == year && x.month == month && x.day == date).OrderByDescending(x => x.datetime).ThenByDescending(x => x.id).ThenByDescending(x => x.email).Skip(recordsToSkip).Take(200).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null && date != "0" && date != "" && date != null)
                        {
                            dd_full = ABE.obj_vw_loginboth_full.Where(x => x.StateName == StateName && x.NodalOfficer == nodal && x.year == year && x.month == month && x.day == date).OrderByDescending(x => x.datetime).ThenByDescending(x => x.id).ThenByDescending(x => x.email).Skip(recordsToSkip).Take(200).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.NodalOfficer == nodal && x.year == year && x.month == month).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).Skip(recordsToSkip).Take(200).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && year != "0" && year != "" && year != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.NodalOfficer == nodal && x.year == year).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).Skip(recordsToSkip).Take(200).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.NodalOfficer == nodal).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).Skip(recordsToSkip).Take(200).ToList();
                            //dd.Add(data);
                        }
                        else
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.NodalOfficer == nodal).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).Skip(recordsToSkip).Take(200).ToList();
                            //dd.Add(data);
                        }
                    }
                    else if (nodal == "District Level Nodal Officer")
                    {
                        if (StateName == "0" && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null && date != "0" && date != "" && date != null)
                        {
                            dd_full = ABE.obj_vw_loginboth_full.Where(x => x.NodalOfficer == nodal && x.year == year && x.month == month && x.day == date).OrderByDescending(x => x.datetime).ThenByDescending(x => x.id).ThenByDescending(x => x.email).Skip(recordsToSkip).Take(200).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null && date != "0" && date != "" && date != null)
                        {
                            dd_full = ABE.obj_vw_loginboth_full.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.NodalOfficer == nodal && x.year == year && x.month == month && x.day == date).OrderByDescending(x => x.datetime).ThenByDescending(x => x.id).ThenByDescending(x => x.email).Skip(recordsToSkip).Take(200).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.NodalOfficer == nodal && x.year == year && x.month == month).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).Skip(recordsToSkip).Take(200).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.NodalOfficer == nodal && x.year == year).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).Skip(recordsToSkip).Take(200).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.NodalOfficer == nodal).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).Skip(recordsToSkip).Take(200).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null && date != "0" && date != "" && date != null)
                        {
                            dd_full = ABE.obj_vw_loginboth_full.Where(x => x.StateName == StateName && x.NodalOfficer == nodal && x.year == year && x.month == month && x.day == date).OrderByDescending(x => x.id).ThenByDescending(x => x.email).ThenByDescending(x => x.loginlogout).Skip(recordsToSkip).Take(200).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.NodalOfficer == nodal && x.year == year && x.month == month).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).Skip(recordsToSkip).Take(200).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && year != "0" && year != "" && year != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.NodalOfficer == nodal && x.year == year).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).Skip(recordsToSkip).Take(200).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.NodalOfficer == nodal).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).Skip(recordsToSkip).Take(200).ToList();
                            //dd.Add(data);
                        }
                        else
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.NodalOfficer == nodal).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).Skip(recordsToSkip).Take(200).ToList();
                            //dd.Add(data);
                        }
                    }
                    else if (nodal == "Block Level Nodal Officer")
                    {
                        if (StateName == "0" && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null && date != "0" && date != "" && date != null)
                        {
                            dd_full = ABE.obj_vw_loginboth_full.Where(x => x.NodalOfficer == nodal && x.year == year && x.month == month && x.day == date).OrderByDescending(x => x.datetime).ThenByDescending(x => x.id).ThenByDescending(x => x.email).Skip(recordsToSkip).Take(200).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null && date != "0" && date != "" && date != null)
                        {
                            dd_full = ABE.obj_vw_loginboth_full.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.BlockName == Block && x.NodalOfficer == nodal && x.year == year && x.month == month && x.day == date).OrderByDescending(x => x.datetime).ThenByDescending(x => x.id).ThenByDescending(x => x.email).Skip(recordsToSkip).Take(200).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.BlockName == Block && x.NodalOfficer == nodal && x.year == year && x.month == month).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).Skip(recordsToSkip).Take(200).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.BlockName == Block && x.NodalOfficer == nodal && x.year == year).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).Skip(recordsToSkip).Take(200).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.BlockName == Block && x.NodalOfficer == nodal).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).Skip(recordsToSkip).Take(200).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null && date != "0" && date != "" && date != null)
                        {
                            dd_full = ABE.obj_vw_loginboth_full.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.NodalOfficer == nodal && x.year == year && x.month == month && x.day == date).OrderByDescending(x => x.datetime).ThenByDescending(x => x.id).ThenByDescending(x => x.email).Skip(recordsToSkip).Take(200).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.NodalOfficer == nodal && x.year == year && x.month == month).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).Skip(recordsToSkip).Take(200).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.NodalOfficer == nodal && x.year == year).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).Skip(recordsToSkip).Take(200).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.NodalOfficer == nodal).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).Skip(recordsToSkip).Take(200).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null && date != "0" && date != "" && date != null)
                        {
                            dd_full = ABE.obj_vw_loginboth_full.Where(x => x.StateName == StateName && x.NodalOfficer == nodal && x.year == year && x.month == month && x.day == date).OrderByDescending(x => x.datetime).ThenByDescending(x => x.id).ThenByDescending(x => x.email).Skip(recordsToSkip).Take(200).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.NodalOfficer == nodal && x.year == year && x.month == month).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).Skip(recordsToSkip).Take(200).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && year != "0" && year != "" && year != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.NodalOfficer == nodal && x.year == year).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).Skip(recordsToSkip).Take(200).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.NodalOfficer == nodal).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).Skip(recordsToSkip).Take(200).ToList();
                            //dd.Add(data);
                        }
                        else
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.NodalOfficer == nodal).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).Skip(recordsToSkip).Take(200).ToList();
                            //dd.Add(data);
                        }
                    }
                    else if (nodal == "Gram Panchyat Nodal Officer")
                    {
                        if (StateName == "0" && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null && date != "0" && date != "" && date != null)
                        {
                            dd_full = ABE.obj_vw_loginboth_full.Where(x => x.NodalOfficer == nodal && x.year == year && x.month == month && x.day == date).OrderByDescending(x => x.datetime).ThenByDescending(x => x.id).ThenByDescending(x => x.email).Skip(recordsToSkip).Take(200).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null && date != "0" && date != "" && date != null)
                        {
                            dd_full = ABE.obj_vw_loginboth_full.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.BlockName == Block && x.GramPanchayatName == Gram && x.GramPanchayatName == Gram && x.year == year && x.month == month && x.day == date).OrderByDescending(x => x.datetime).ThenByDescending(x => x.id).ThenByDescending(x => x.email).Skip(recordsToSkip).Take(200).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.BlockName == Block && x.GramPanchayatName == Gram && x.year == year && x.month == month).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).Skip(recordsToSkip).Take(200).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.BlockName == Block && x.GramPanchayatName == Gram && x.year == year).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).Skip(recordsToSkip).Take(200).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.BlockName == Block && x.GramPanchayatName == Gram).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).Skip(recordsToSkip).Take(200).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null && date != "0" && date != "" && date != null)
                        {
                            dd_full = ABE.obj_vw_loginboth_full.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.BlockName == Block && x.NodalOfficer == nodal && x.year == year && x.month == month && x.day == date).OrderByDescending(x => x.datetime).ThenByDescending(x => x.id).ThenByDescending(x => x.email).Skip(recordsToSkip).Take(200).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.BlockName == Block && x.NodalOfficer == nodal && x.year == year && x.month == month).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).Skip(recordsToSkip).Take(200).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.BlockName == Block && x.NodalOfficer == nodal && x.year == year).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).Skip(recordsToSkip).Take(200).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.BlockName == Block && x.NodalOfficer == nodal).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).Skip(recordsToSkip).Take(200).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null && date != "0" && date != "" && date != null)
                        {
                            dd_full = ABE.obj_vw_loginboth_full.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.NodalOfficer == nodal && x.year == year && x.month == month && x.day == date).OrderByDescending(x => x.datetime).ThenByDescending(x => x.id).ThenByDescending(x => x.email).Skip(recordsToSkip).Take(200).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.NodalOfficer == nodal && x.year == year && x.month == month).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).Skip(recordsToSkip).Take(200).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.NodalOfficer == nodal && x.year == year).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).Skip(recordsToSkip).Take(200).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && Dist != "0" && Dist != "" && Dist != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.DistrictName == Dist && x.NodalOfficer == nodal).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).Skip(recordsToSkip).Take(200).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null && date != "0" && date != "" && date != null)
                        {
                            dd_full = ABE.obj_vw_loginboth_full.Where(x => x.StateName == StateName && x.NodalOfficer == nodal && x.year == year && x.month == month && x.day == date).OrderByDescending(x => x.datetime).ThenByDescending(x => x.id).ThenByDescending(x => x.email).Take(200).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.NodalOfficer == nodal && x.year == year && x.month == month).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).Skip(recordsToSkip).Take(200).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null && year != "0" && year != "" && year != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.NodalOfficer == nodal && x.year == year).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).Skip(recordsToSkip).Take(200).ToList();
                            //dd.Add(data);
                        }
                        else if (StateName != "0" && StateName != "" && StateName != null)
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.StateName == StateName && x.NodalOfficer == nodal).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).Skip(recordsToSkip).Take(200).ToList();
                            //dd.Add(data);
                        }
                        else
                        {
                            dd = ABE.obj_vw_loginboth.Where(x => x.NodalOfficer == nodal).OrderByDescending(x => x.date).ThenByDescending(x => x.email).ThenByDescending(x => x.id).Skip(recordsToSkip).Take(200).ToList();
                            //dd.Add(data);
                        }
                    }

                    if (dd_full.Count != 0)
                    {
                        var jsonResult = Json(dd_full, JsonRequestBehavior.AllowGet);
                        jsonResult.MaxJsonLength = int.MaxValue;
                        return jsonResult;
                    }
                    else
                    {
                        var jsonResult = Json(dd, JsonRequestBehavior.AllowGet);
                        jsonResult.MaxJsonLength = int.MaxValue;
                        return jsonResult;
                    }
                }

                catch (Exception Ex)
                {
                    abhy_tbl_error error_data = new abhy_tbl_error();
                    error_data.error_test = Ex.Message;
                    error_data.user_email = Ex.StackTrace;
                    error_data.user_type = "Mis Login";
                    error_data.error_count = "1";
                    ABE.obj_abhy_tbl_error.Add(error_data);
                    ABE.SaveChanges();
                    return Json("error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }



        [HttpGet]
        public ActionResult report_declaration_details()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_wsp_parameters> ddetails = new List<abhy_wsp_parameters>();

                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();
                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    ddetails = ABE.obj_abhy_wsp_parameters.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list
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

        public ActionResult Get_IP()
        {
            string ipAddress = Request.ServerVariables["HTTP_X_FORWARDED_FOR"];
            if (string.IsNullOrEmpty(ipAddress))
            {
                ipAddress = Request.ServerVariables["REMOTE_ADDR"];
            }
            ViewBag.IPAddress = ipAddress;

            string Action_performed = "UserLogin";
            string Status = "Successfully Saved";
            string ss = Log_Information(Action_performed, Status);
            return View();
        }

        [Route("WspNew/CheckCunCurrentUser")]
        public bool CheckCunCurrentUser()
        {
            bool status = true;
            var intUserID = Convert.ToInt32(HttpContext.Session["UserId"]);
            string stToken = Convert.ToString(HttpContext.Session["UserToken"]);
            //stToken = stToken.Trim('"');
            if (stToken != "")
            {
                var user = ABE.objUsers.Where(x => x.UserId == intUserID && x.UserToken == stToken).FirstOrDefault();
                if (user != null)
                {
                    status = true;
                }
                else
                {
                    status = false;
                }
            }  
            return status;
        }
        


        // public bool CheckCurrentStatus()
        //{

        //             string email = Convert.ToString(HttpContext.Session["Email"]);
        //             // Fetch current page URL and date-time from the session
        //             string currentPage = Convert.ToString(HttpContext.Session["LastAccessedPage"]);
        //             DateTime currentTime = Convert.ToDateTime(HttpContext.Session["DateTime"]);

        //             // Retrieve the `login_datetime` record for the user using email

        //             string currentTimeString = currentTime.ToString("yyyy-MM-dd"); // Format based on your database date format

        //             var userlog = ABE.obj_login_datetime
        //                 .Where(x => x.email == email && x.date == currentTimeString)
        //                 .OrderByDescending(x => x.id)
        //                 .FirstOrDefault();

        //             if (userlog != null)
        //             {
        //                 // Update existing record
        //                 userlog.ActionTime = currentTime;
        //                 userlog.PageUrl = currentPage;

        //                 // Mark entity as modified
        //                 ABE.Entry(userlog).State = EntityState.Modified;
        //             }

        //             ABE.SaveChanges();
        //     return true;

        // }


        [HttpPost]
        [Route("WspNew/UpdatePageLog")]
        public JsonResult UpdatePageLog(DateTime dateTime, string pageName)
        {
            try
            {
                string email = Convert.ToString(HttpContext.Session["Email"]);

                // Use the passed parameters
                string currentPage = pageName;
                DateTime currentTime = dateTime;

                // Format the date for comparison (if needed for string matching in DB)
                string currentDateString = currentTime.ToString("yyyy-MM-dd");

                // Find the existing record
                var userLog = ABE.obj_login_datetime
                    .Where(x => x.email == email && x.date == currentDateString)
                    .OrderByDescending(x => x.id)
                    .FirstOrDefault();

                if (userLog != null)
                {
                    // Update the record
                    userLog.ActionTime = currentTime;
                    userLog.PageUrl = currentPage;
                    ABE.Entry(userLog).State = EntityState.Modified;
                }
                //else
                //{
                //    // Create a new record if not found
                //    var newLog = new login_datetime
                //    {
                //        email = email,
                //        ActionTime = currentTime,
                //        PageUrl = currentPage,
                //        date = currentTime.ToString("yyyy-MM-dd")
                //    };
                //    ABE.obj_login_datetime.Add(newLog);
                //}

                ABE.SaveChanges();

                return Json(new { success = true, message = "Page log updated successfully." });
            }
            catch (Exception ex)
            {
                return Json(new { success = false, message = ex.Message });
            }
        }


        public string Log_Information(string Action_performed, string Status)
        {
            string ipAddress = Request.ServerVariables["HTTP_X_FORWARDED_FOR"];
            if (string.IsNullOrEmpty(ipAddress))
            {
                ipAddress = Request.ServerVariables["REMOTE_ADDR"];
            }

            // var Role = Session["Role"].ToString();
            var Date_11 = DateTime.Now;
            var useraction = Action_performed;

            return "Save Success";
        }
        [HttpPost]
        public JsonResult SaveUserdetails(UsersVM obj)
        {

            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(obj.UserId);
                    if (obj.UserType == "MIS")
                    {
                        var Data = ABE.objUsers.Where(x => x.UserId == ID).SingleOrDefault();
                        if (Data != null)
                        {

                            Data.Villagename = obj.Password;
                            Data.Password = obj.hashText;
                            var status = string.Empty;
                            if (obj.Verifiedornot == "Approve")
                            {
                                status = "True";
                            }
                            else if (obj.Verifiedornot == "Reject")
                            {
                                status = "False";
                            }
                            else
                            {
                                status = "Delete";
                            }

                            Data.Verifiedornot = status;
                            Data.approved_by = obj.NodalOfficer;
                            Data.ContactNumber = obj.ContactNumber;
                            Data.DepartmentName = obj.DepartmentName;
                            Data.access_auth = obj.access_auth;
                            Data.approved_Date = Convert.ToDateTime(obj.approve_DateString);
                            ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                            int A = ABE.SaveChanges();
                            if (A > 0)
                            {

                                return Json(new { success = true, message = "Update successfully!" });
                            }
                            else
                            {
                                return Json("Not Updated");
                            }
                        }
                    }

                    else
                    {
                        var Data = AJE.obj_users.Where(x => x.id == ID).SingleOrDefault();
                        if (Data != null)
                        {

                            Data.password = obj.Password;
                            var status = string.Empty;
                            if (obj.Verifiedornot == "Approve")
                            {
                                status = "True";
                            }
                            else if (obj.Verifiedornot == "Reject")
                            {
                                status = "False";
                            }
                            else
                            {
                                status = "Delete";
                            }

                            Data.verification = status;
                            Data.approved_by = obj.NodalOfficer;
                            Data.contactnumber = obj.ContactNumber;
                            Data.departmentname = obj.DepartmentName;
                            Data.approved_Date = Convert.ToDateTime(obj.approve_DateString);
                            AJE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                            int A = AJE.SaveChanges();
                            if (A > 0)
                            {
                                return Json(new { success = true, message = "Update successfully!" });
                            }
                            else
                            {
                                return Json("Not Updated");
                            }
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

            //return Json(new { success = true, message = "Object received successfully!" });
        }


        [HttpGet]
        public ActionResult ExcelUser(string UserType, string StateName, string District, string Block, string Gram, string NodalOfficer)
        {
            FileContentResult robj;

            /*
            if (UserType == "MIS")
            {

                //MIS User
                userdetails = ABE.objUsers.Select(x => new UsersVM
                {
                    UserId = x.UserId,
                    UserName = x.UserName,
                    Email = x.Email,
                    NodalOfficer = x.NodalOfficer,
                    ContactNumber = x.ContactNumber,
                    DepartmentName = x.DepartmentName,
                    Password = x.Password,
                    StateName = x.StateName,
                    DistrictName = x.DistrictName,
                    BlockName = x.BlockName,
                    GramPanchayatName = x.GramPanchayatName,
                    Villagename = x.Villagename,
                    CheckingCode = x.CheckingCode,
                    stateofficer_email = x.stateofficer_email,
                    VerificationCode = x.VerificationCode,
                    Verifiedornot = x.Verifiedornot,
                    RollId = x.RollId,
                    clientcaptcha = x.clientcaptcha,
                    isactive = x.isactive,
                    access_auth = x.access_auth,
                    email_verify = x.email_verify,
                    approved_by = x.approved_by,
                    mail_sent = x.mail_sent,
                    EntryTime = x.EntryTime
                }).ToList();


            }
            else
            {
                //Mobile App
                userdetailsMobile = AJE.obj_users.Select(user => new usersVMMobile
                {
                    UserId = user.id,
                    UserName = user.username,
                    Email = user.email,
                    Password = user.password,
                    contactnumber = user.contactnumber,
                    DepartmentName = user.departmentname,
                    NodalOfficer = user.nodalofficer,
                    StateName = user.statename,
                    DistrictName = user.districtname,
                    BlockName = user.blockname,
                    GramPanchayatName = user.grampanchayatname,
                    // latitude = user.latitude,
                    //longitude = user.longitude,
                    Verifiedornot = user.verification,
                    // plain_password = user.plain_password,
                    // hash_password = user.hash_password
                }).ToList();
            }
            if (State == "All")
            {

                userdetails = ABE.objUsers.Select(x => new UsersVM
                {
                    UserId = x.UserId,
                    UserName = x.UserName,
                    Email = x.Email,
                    NodalOfficer = x.NodalOfficer,
                    ContactNumber = x.ContactNumber,
                    DepartmentName = x.DepartmentName,
                    Password = x.Password,
                    StateName = x.StateName,
                    DistrictName = x.DistrictName,
                    BlockName = x.BlockName,
                    GramPanchayatName = x.GramPanchayatName,
                    Villagename = x.Villagename,
                    CheckingCode = x.CheckingCode,
                    stateofficer_email = x.stateofficer_email,
                    VerificationCode = x.VerificationCode,
                    Verifiedornot = x.Verifiedornot,
                    RollId = x.RollId,
                    clientcaptcha = x.clientcaptcha,
                    isactive = x.isactive,
                    access_auth = x.access_auth,
                    email_verify = x.email_verify,
                    approved_by = x.approved_by,
                    mail_sent = x.mail_sent,
                    EntryTime = x.EntryTime
                }).ToList();

            }
            else if (State != "0" && State != "" && State != null && District != "0" && District != "" && District != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
            {
                if (UserType == "MIS")
                {
                    userdetails = userdetails.Where(x => x.StateName == State && x.DistrictName == District && x.BlockName == Block && x.GramPanchayatName == Gram).ToList();
                }
                else
                {
                    userdetailsMobile = userdetailsMobile.Where(x => x.StateName == State && x.DistrictName == District && x.BlockName == Block && x.GramPanchayatName == Gram).ToList();

                }
            }
            else if (State != "0" && State != "" && State != null && District != "0" && District != "" && District != null && Block != "0" && Block != "" && Block != null)
            {
                if (UserType == "MIS")
                {
                    userdetails = userdetails.Where(x => x.StateName == State && x.DistrictName == District && x.BlockName == Block).ToList();
                }
                else
                {
                    userdetailsMobile = userdetailsMobile.Where(x => x.StateName == State && x.DistrictName == District && x.BlockName == Block).ToList();
                }
            }
            else if (State != "0" && State != "" && State != null && District != "0" && District != "" && District != null)
            {
                if (UserType == "MIS")
                {

                    userdetails = userdetails.Where(x => x.StateName == State && x.DistrictName == District).ToList();
                }
                else
                {
                    userdetailsMobile = userdetailsMobile.Where(x => x.StateName == State && x.DistrictName == District).ToList();
                }
            }
            else if (State != "0" && State != "" && State != null)
            {
                if (UserType == "MIS")
                {
                    userdetails = userdetails.Where(x => x.StateName == State).ToList();

                }
                else
                {
                    userdetailsMobile = userdetailsMobile.Where(x => x.StateName == State).ToList();
                }
            }

            */
            List<UsersVM> userdetails = new List<UsersVM>();
            List<usersVMMobile> userdetailsMobile = new List<usersVMMobile>();

            if (NodalOfficer == "All")
            {
                if (UserType == "MIS")
                {
                    userdetails = ABE.objUsers.Select(x => new UsersVM
                    {
                        UserId = x.UserId,
                        UserName = x.UserName,
                        Email = x.Email,
                        NodalOfficer = x.NodalOfficer,
                        ContactNumber = x.ContactNumber,
                        DepartmentName = x.DepartmentName,
                        Password = x.Villagename,
                        StateName = x.StateName,
                        DistrictName = x.DistrictName,
                        BlockName = x.BlockName,
                        GramPanchayatName = x.GramPanchayatName,
                        Villagename = x.Villagename,
                        //CheckingCode = x.CheckingCode,
                        //stateofficer_email = x.stateofficer_email,
                        //VerificationCode = x.VerificationCode,
                        Verifiedornot = x.Verifiedornot,
                        //RollId = x.RollId,
                        //clientcaptcha = x.clientcaptcha,
                        //isactive = x.isactive,
                        access_auth = x.access_auth,
                        //email_verify = x.email_verify,
                        approved_by = x.approved_by,
                        //mail_sent = x.mail_sent,
                        EntryTime = x.EntryTime,
                        approved_Date = x.approved_Date
                    }).ToList();
                }
                else
                {

                    userdetailsMobile = AJE.obj_users.Select(user => new usersVMMobile
                    {
                        UserId = user.id,
                        UserName = user.username,
                        Email = user.email,
                        Password = user.plain_password,
                        ContactNumber = user.contactnumber,
                        DepartmentName = user.departmentname,
                        NodalOfficer = user.nodalofficer,
                        StateName = user.statename,
                        DistrictName = user.districtname,
                        BlockName = user.blockname,
                        GramPanchayatName = user.grampanchayatname,
                        // latitude = user.latitude,
                        //longitude = user.longitude,
                        Verifiedornot = user.verification,
                        approved_by = user.approved_by,
                        approved_Date = user.approved_Date,
                        entrytime = user.entrytime,
                        // plain_password = user.plain_password,
                        // hash_password = user.hash_password
                    }).ToList();
                }
            }
            else
            {


                if (NodalOfficer == "National Level Nodal Officer" || NodalOfficer == "NPMU")
                {
                    if (UserType == "MIS")
                    {
                        userdetails = ABE.objUsers.Select(x => new UsersVM
                        {
                            UserId = x.UserId,
                            UserName = x.UserName,
                            Email = x.Email,
                            NodalOfficer = x.NodalOfficer,
                            ContactNumber = x.ContactNumber,
                            DepartmentName = x.DepartmentName,
                            Password = x.Villagename,
                            StateName = x.StateName,
                            DistrictName = x.DistrictName,
                            BlockName = x.BlockName,
                            GramPanchayatName = x.GramPanchayatName,
                            Villagename = x.Villagename,
                            //CheckingCode = x.CheckingCode,
                            //stateofficer_email = x.stateofficer_email,
                            //VerificationCode = x.VerificationCode,
                            Verifiedornot = x.Verifiedornot,
                            //RollId = x.RollId,
                            //clientcaptcha = x.clientcaptcha,
                            //isactive = x.isactive,
                            access_auth = x.access_auth,
                            //email_verify = x.email_verify,
                            approved_by = x.approved_by,
                            //mail_sent = x.mail_sent,
                            EntryTime = x.EntryTime,
                            approved_Date = x.approved_Date

                        }).Where(x => x.NodalOfficer == "National Level Nodal Officer").ToList();
                    }
                    else
                    {
                        userdetailsMobile = AJE.obj_users.Select(user => new usersVMMobile
                        {
                            UserId = user.id,
                            UserName = user.username,
                            Email = user.email,
                            Password = user.plain_password,
                            ContactNumber = user.contactnumber,
                            DepartmentName = user.departmentname,
                            NodalOfficer = user.nodalofficer,
                            StateName = user.statename,
                            DistrictName = user.districtname,
                            BlockName = user.blockname,
                            GramPanchayatName = user.grampanchayatname,
                            // latitude = user.latitude,
                            //longitude = user.longitude,
                            Verifiedornot = user.verification,
                            // plain_password = user.plain_password,
                            // hash_password = user.hash_password
                            approved_by = user.approved_by,
                            approved_Date = user.approved_Date,
                            entrytime = user.entrytime,
                        }).Where(x => x.NodalOfficer == "NPMU").ToList();

                    }
                }
                if (NodalOfficer == "State Level Nodal Officer")
                {
                    if (UserType == "MIS")
                    {
                        userdetails = ABE.objUsers.Select(x => new UsersVM
                        {
                            UserId = x.UserId,
                            UserName = x.UserName,
                            Email = x.Email,
                            NodalOfficer = x.NodalOfficer,
                            ContactNumber = x.ContactNumber,
                            DepartmentName = x.DepartmentName,
                            Password = x.Villagename,
                            StateName = x.StateName,
                            DistrictName = x.DistrictName,
                            BlockName = x.BlockName,
                            GramPanchayatName = x.GramPanchayatName,
                            Villagename = x.Villagename,
                            //CheckingCode = x.CheckingCode,
                            //stateofficer_email = x.stateofficer_email,
                            //VerificationCode = x.VerificationCode,
                            Verifiedornot = x.Verifiedornot,
                            //RollId = x.RollId,
                            //clientcaptcha = x.clientcaptcha,
                            //isactive = x.isactive,
                            access_auth = x.access_auth,
                            //email_verify = x.email_verify,
                            approved_by = x.approved_by,
                            //mail_sent = x.mail_sent,
                            EntryTime = x.EntryTime,
                            approved_Date = x.approved_Date

                        }).Where(x => x.NodalOfficer == "State Level Nodal Officer" && x.StateName == StateName).ToList();
                    }
                    else
                    {
                        userdetailsMobile = AJE.obj_users.Select(user => new usersVMMobile
                        {
                            UserId = user.id,
                            UserName = user.username,
                            Email = user.email,
                            Password = user.plain_password,
                            ContactNumber = user.contactnumber,
                            DepartmentName = user.departmentname,
                            NodalOfficer = user.nodalofficer,
                            StateName = user.statename,
                            DistrictName = user.districtname,
                            BlockName = user.blockname,
                            GramPanchayatName = user.grampanchayatname,
                            // latitude = user.latitude,
                            //longitude = user.longitude,
                            Verifiedornot = user.verification,
                            // plain_password = user.plain_password,
                            // hash_password = user.hash_password
                            approved_by = user.approved_by,
                            approved_Date = user.approved_Date,
                            entrytime = user.entrytime,
                        }).Where(x => x.NodalOfficer == "State Level Nodal Officer" && x.StateName == StateName).ToList();

                    }

                }
                if (NodalOfficer == "District Level Nodal Officer")
                {
                    if (UserType == "MIS")
                    {
                        userdetails = ABE.objUsers.Select(x => new UsersVM
                        {
                            UserId = x.UserId,
                            UserName = x.UserName,
                            Email = x.Email,
                            NodalOfficer = x.NodalOfficer,
                            ContactNumber = x.ContactNumber,
                            DepartmentName = x.DepartmentName,
                            Password = x.Villagename,
                            StateName = x.StateName,
                            DistrictName = x.DistrictName,
                            BlockName = x.BlockName,
                            GramPanchayatName = x.GramPanchayatName,
                            Villagename = x.Villagename,
                            //CheckingCode = x.CheckingCode,
                            //stateofficer_email = x.stateofficer_email,
                            //VerificationCode = x.VerificationCode,
                            Verifiedornot = x.Verifiedornot,
                            //RollId = x.RollId,
                            //clientcaptcha = x.clientcaptcha,
                            //isactive = x.isactive,
                            access_auth = x.access_auth,
                            //email_verify = x.email_verify,
                            approved_by = x.approved_by,
                            //mail_sent = x.mail_sent,
                            EntryTime = x.EntryTime,
                            approved_Date = x.approved_Date

                        }).Where(x => x.NodalOfficer == "District Level Nodal Officer" && x.StateName == StateName && x.DistrictName == District).ToList();
                    }
                    else
                    {
                        userdetailsMobile = AJE.obj_users.Select(user => new usersVMMobile
                        {
                            UserId = user.id,
                            UserName = user.username,
                            Email = user.email,
                            Password = user.plain_password,
                            ContactNumber = user.contactnumber,
                            DepartmentName = user.departmentname,
                            NodalOfficer = user.nodalofficer,
                            StateName = user.statename,
                            DistrictName = user.districtname,
                            BlockName = user.blockname,
                            GramPanchayatName = user.grampanchayatname,
                            // latitude = user.latitude,
                            //longitude = user.longitude,
                            Verifiedornot = user.verification,
                            // plain_password = user.plain_password,
                            // hash_password = user.hash_password
                            approved_by = user.approved_by,
                            approved_Date = user.approved_Date,
                            entrytime = user.entrytime,
                        }).Where(x => x.NodalOfficer == "District Level Nodal Officer" && x.StateName == StateName && x.DistrictName == District).ToList();

                    }

                }
                if (NodalOfficer == "Block Level Nodal Officer")
                {
                    if (UserType == "MIS")
                    {
                        userdetails = ABE.objUsers.Select(x => new UsersVM
                        {
                            UserId = x.UserId,
                            UserName = x.UserName,
                            Email = x.Email,
                            NodalOfficer = x.NodalOfficer,
                            ContactNumber = x.ContactNumber,
                            DepartmentName = x.DepartmentName,
                            Password = x.Villagename,
                            StateName = x.StateName,
                            DistrictName = x.DistrictName,
                            BlockName = x.BlockName,
                            GramPanchayatName = x.GramPanchayatName,
                            Villagename = x.Villagename,
                            //CheckingCode = x.CheckingCode,
                            //stateofficer_email = x.stateofficer_email,
                            //VerificationCode = x.VerificationCode,
                            Verifiedornot = x.Verifiedornot,
                            //RollId = x.RollId,
                            //clientcaptcha = x.clientcaptcha,
                            //isactive = x.isactive,
                            access_auth = x.access_auth,
                            //email_verify = x.email_verify,
                            approved_by = x.approved_by,
                            //mail_sent = x.mail_sent,
                            EntryTime = x.EntryTime,
                            approved_Date = x.approved_Date

                        }).Where(x => x.NodalOfficer == "Block Level Nodal Officer" && x.StateName == StateName && x.DistrictName == District && x.BlockName == Block).ToList();
                    }
                    else
                    {
                        userdetailsMobile = AJE.obj_users.Select(user => new usersVMMobile
                        {
                            UserId = user.id,
                            UserName = user.username,
                            Email = user.email,
                            Password = user.plain_password,
                            ContactNumber = user.contactnumber,
                            DepartmentName = user.departmentname,
                            NodalOfficer = user.nodalofficer,
                            StateName = user.statename,
                            DistrictName = user.districtname,
                            BlockName = user.blockname,
                            GramPanchayatName = user.grampanchayatname,
                            // latitude = user.latitude,
                            //longitude = user.longitude,
                            Verifiedornot = user.verification,
                            // plain_password = user.plain_password,
                            // hash_password = user.hash_password
                            approved_by = user.approved_by,
                            approved_Date = user.approved_Date,
                            entrytime = user.entrytime,
                        }).Where(x => x.NodalOfficer == "Block Level Nodal Officer" && x.StateName == StateName && x.DistrictName == District && x.BlockName == Block).ToList();

                    }

                }

                else if (StateName != "0" && StateName != "" && StateName != null && District != "0" && District != "" && District != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                {
                    if (UserType == "MIS")
                    {

                        userdetails = userdetails.Where(x => x.StateName == StateName && x.DistrictName == District && x.BlockName == Block && x.GramPanchayatName == Gram).ToList();

                        userdetails = ABE.objUsers.Select(x => new UsersVM
                        {
                            UserId = x.UserId,
                            UserName = x.UserName,
                            Email = x.Email,
                            NodalOfficer = x.NodalOfficer,
                            ContactNumber = x.ContactNumber,
                            DepartmentName = x.DepartmentName,
                            Password = x.Villagename,
                            StateName = x.StateName,
                            DistrictName = x.DistrictName,
                            BlockName = x.BlockName,
                            GramPanchayatName = x.GramPanchayatName,
                            Villagename = x.Villagename,
                            //CheckingCode = x.CheckingCode,
                            //stateofficer_email = x.stateofficer_email,
                            //VerificationCode = x.VerificationCode,
                            Verifiedornot = x.Verifiedornot,
                            //RollId = x.RollId,
                            //clientcaptcha = x.clientcaptcha,
                            //isactive = x.isactive,
                            access_auth = x.access_auth,
                            //email_verify = x.email_verify,
                            approved_by = x.approved_by,
                            //mail_sent = x.mail_sent,
                            EntryTime = x.EntryTime,
                            approved_Date = x.approved_Date
                        }).Where(x => x.StateName == StateName && x.DistrictName == District && x.BlockName == Block && x.GramPanchayatName == Gram).ToList();

                    }

                    else
                    {
                        userdetailsMobile = AJE.obj_users.Select(user => new usersVMMobile
                        {
                            UserId = user.id,
                            UserName = user.username,
                            Email = user.email,
                            Password = user.plain_password,
                            ContactNumber = user.contactnumber,
                            DepartmentName = user.departmentname,
                            NodalOfficer = user.nodalofficer,
                            StateName = user.statename,
                            DistrictName = user.districtname,
                            BlockName = user.blockname,
                            GramPanchayatName = user.grampanchayatname,
                            // latitude = user.latitude,
                            //longitude = user.longitude,
                            Verifiedornot = user.verification,
                            // plain_password = user.plain_password,
                            // hash_password = user.hash_password
                            approved_by = user.approved_by,
                            approved_Date = user.approved_Date,
                            entrytime = user.entrytime,
                        }).Where(x => x.StateName == StateName && x.DistrictName == District && x.BlockName == Block && x.GramPanchayatName == Gram).ToList();
                    }
                }

            }

            using (var workbook = new XLWorkbook())
            {
                var worksheet = workbook.Worksheets.Add("MIS User Info");
                var currentRow = 1;
                worksheet.Cell(currentRow, 1).Value = "State";
                worksheet.Cell(currentRow, 2).Value = "District";
                worksheet.Cell(currentRow, 3).Value = "Block";
                worksheet.Cell(currentRow, 4).Value = "Gram Panchayat";
                worksheet.Cell(currentRow, 5).Value = "User Type";
                worksheet.Cell(currentRow, 6).Value = "Nodal Officer";
                worksheet.Cell(currentRow, 7).Value = "User ID";
                worksheet.Cell(currentRow, 8).Value = "User";
                worksheet.Cell(currentRow, 9).Value = "Email";
                worksheet.Cell(currentRow, 10).Value = "Password";
                worksheet.Cell(currentRow, 11).Value = "Status";
                worksheet.Cell(currentRow, 12).Value = "By Whom";
                worksheet.Cell(currentRow, 13).Value = "Registration Date";
                worksheet.Cell(currentRow, 14).Value = "Approve/Reject/Delete Date";
                worksheet.Cell(currentRow, 15).Value = "Mobile Number";
                worksheet.Cell(currentRow, 16).Value = "Department Name";


                if (UserType == "MIS")
                {
                    if (userdetails.Count != 0)
                    {
                        for (int i = 0; i < userdetails.Count; i++)
                        {
                            if (userdetails != null)
                            {
                                currentRow++;
                                worksheet.Cell(currentRow, 1).Value = userdetails[i].StateName;
                                worksheet.Cell(currentRow, 2).Value = userdetails[i].DistrictName;
                                worksheet.Cell(currentRow, 3).Value = userdetails[i].BlockName;
                                worksheet.Cell(currentRow, 4).Value = userdetails[i].GramPanchayatName;
                                worksheet.Cell(currentRow, 5).Value = userdetails[i].UserType;
                                worksheet.Cell(currentRow, 6).Value = userdetails[i].NodalOfficer;
                                worksheet.Cell(currentRow, 7).Value = userdetails[i].UserId;
                                worksheet.Cell(currentRow, 8).Value = userdetails[i].UserName;
                                worksheet.Cell(currentRow, 9).Value = userdetails[i].Email;
                                worksheet.Cell(currentRow, 10).Value = userdetails[i].Villagename;
                                worksheet.Cell(currentRow, 11).Value = userdetails[i].Verifiedornot;
                                worksheet.Cell(currentRow, 12).Value = userdetails[i].approved_by;
                                worksheet.Cell(currentRow, 13).Value = userdetails[i].EntryTime;
                                worksheet.Cell(currentRow, 14).Value = userdetails[i].approved_Date;
                                worksheet.Cell(currentRow, 15).Value = userdetails[i].ContactNumber;
                                worksheet.Cell(currentRow, 16).Value = userdetails[i].DepartmentName;
                            }
                        }
                    }

                }
                else
                {
                    if (userdetailsMobile.Count != 0)
                    {
                        for (int i = 0; i < userdetailsMobile.Count; i++)
                        {
                            if (userdetailsMobile != null)
                            {
                                currentRow++;
                                worksheet.Cell(currentRow, 1).Value = userdetailsMobile[i].StateName;
                                worksheet.Cell(currentRow, 2).Value = userdetailsMobile[i].DistrictName;
                                worksheet.Cell(currentRow, 3).Value = userdetailsMobile[i].BlockName;
                                worksheet.Cell(currentRow, 4).Value = userdetailsMobile[i].GramPanchayatName;
                                worksheet.Cell(currentRow, 5).Value = userdetailsMobile[i].UserType;
                                worksheet.Cell(currentRow, 6).Value = userdetailsMobile[i].NodalOfficer;
                                worksheet.Cell(currentRow, 7).Value = userdetailsMobile[i].UserId;
                                worksheet.Cell(currentRow, 8).Value = userdetailsMobile[i].UserName;
                                worksheet.Cell(currentRow, 9).Value = userdetailsMobile[i].Email;
                                worksheet.Cell(currentRow, 10).Value = userdetailsMobile[i].plain_password;
                                worksheet.Cell(currentRow, 11).Value = userdetailsMobile[i].Verifiedornot;
                                worksheet.Cell(currentRow, 12).Value = userdetailsMobile[i].approved_by;
                                worksheet.Cell(currentRow, 13).Value = userdetailsMobile[i].entrytime;
                                worksheet.Cell(currentRow, 14).Value = userdetailsMobile[i].approved_Date;
                                worksheet.Cell(currentRow, 15).Value = userdetailsMobile[i].ContactNumber;
                                worksheet.Cell(currentRow, 16).Value = userdetailsMobile[i].DepartmentName;
                            }
                        }
                    }
                }
                if (userdetails.Count == 0 && userdetailsMobile.Count == 0)
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
                    worksheet.Cell(currentRow, 16).Value = "";
                }

                using (var stream = new MemoryStream())
                {
                    workbook.SaveAs(stream);
                    var content = stream.ToArray();

                    var exeState = StateName;
                    var exeDist = District;
                    var exeBlock = Block;
                    var exeGram = Gram;
                    var xls = ".xlsx";

                    if (exeDist == "0")
                    {
                        exeDist = "";
                    }
                    else
                    {
                        var tt = "-";
                        exeDist = tt + exeDist;
                    }
                    if (exeBlock == "0")
                    {
                        exeBlock = "";
                    }
                    else
                    {
                        var tt = "-";
                        exeBlock = tt + exeBlock;
                    }
                    if (exeGram == "0")
                    {
                        exeGram = "";
                    }
                    else
                    {
                        var tt = "-";
                        exeGram = tt + exeGram;
                    }



                    var filename = "UserInformation" + '-' + exeState + exeDist + exeBlock + exeGram + xls;


                    //return File(
                    //    content,
                    //    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                    //    "Gram Panchayat (Basic Hydrology Info).xlsx");
                    var bytesdata = File(stream.ToArray(), "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", filename);
                    robj = bytesdata;
                    return new JsonResult
                    {
                        Data = new { Rdata = robj },
                        MaxJsonLength = int.MaxValue,
                        JsonRequestBehavior = JsonRequestBehavior.AllowGet
                    };

                }
            }
            return Json(robj, JsonRequestBehavior.AllowGet);

        }


        [HttpPost]
        public ActionResult GetAlluser_info(string UserType, string StateName, string District, string Block, string Gram, string NodalOfficer)
        {
            if (Session["UserId"] != null)
            {
                try
                {              
                    List<UsersVM> userdetails = new List<UsersVM>();
                    List<usersVMMobile> userdetailsMobile = new List<usersVMMobile>();

                    if (NodalOfficer == "All")
                    {
                        if (UserType == "MIS")
                        {
                            userdetails = ABE.objUsers.Select(x => new UsersVM
                            {
                                UserId = x.UserId,
                                UserName = x.UserName,
                                Email = x.Email,
                                NodalOfficer = x.NodalOfficer,
                                ContactNumber = x.ContactNumber,
                                DepartmentName = x.DepartmentName,
                                Password = x.Villagename,
                                StateName = x.StateName,
                                DistrictName = x.DistrictName,
                                BlockName = x.BlockName,
                                GramPanchayatName = x.GramPanchayatName,
                                Villagename = x.Villagename,
                                Verifiedornot = x.Verifiedornot,
                                access_auth = x.access_auth,
                                approved_by = x.approved_by,
                                EntryTime = x.EntryTime,
                                first_time_approved_by = x.first_time_approved_by,
                                last_changed_password_by = x.last_changed_password_by,
                                approved_Date = x.approved_Date
                            }).OrderByDescending(c => c.UserId).ToList();
                        }
                        else
                        {

                            userdetailsMobile = AJE.obj_users.Select(user => new usersVMMobile
                            {
                                UserId = user.id,
                                UserName = user.username,
                                Email = user.email,
                                Password = user.plain_password,
                                ContactNumber = user.contactnumber,
                                DepartmentName = user.departmentname,
                                NodalOfficer = user.nodalofficer,
                                StateName = user.statename,
                                DistrictName = user.districtname,
                                BlockName = user.blockname,
                                GramPanchayatName = user.grampanchayatname,
                                Verifiedornot = user.verification,
                                approved_by = user.approved_by,
                                approved_Date = user.approved_Date,
                                first_time_approved_by = user.first_time_approved_by,
                                last_changed_password_by = user.last_changed_password_by,
                                entrytime = user.entrytime,

                            }).OrderByDescending(c => c.UserId).ToList();
                        }
                    }
                    else
                    {


                        if (NodalOfficer == "National Level Nodal Officer" || NodalOfficer == "NPMU")
                        {
                            if (UserType == "MIS")
                            {
                                userdetails = ABE.objUsers.Select(x => new UsersVM
                                {
                                    UserId = x.UserId,
                                    UserName = x.UserName,
                                    Email = x.Email,
                                    NodalOfficer = x.NodalOfficer,
                                    ContactNumber = x.ContactNumber,
                                    DepartmentName = x.DepartmentName,
                                    Password = x.Villagename,
                                    StateName = x.StateName,
                                    DistrictName = x.DistrictName,
                                    BlockName = x.BlockName,
                                    GramPanchayatName = x.GramPanchayatName,
                                    Villagename = x.Villagename,
                                    Verifiedornot = x.Verifiedornot,
                                    access_auth = x.access_auth,
                                    approved_by = x.approved_by,
                                    EntryTime = x.EntryTime,
                                    first_time_approved_by = x.first_time_approved_by,
                                    last_changed_password_by = x.last_changed_password_by,
                                    approved_Date = x.approved_Date

                                }).Where(x => x.NodalOfficer == "National Level Nodal Officer").OrderByDescending(c => c.UserId).ToList();
                            }
                            else
                            {
                                userdetailsMobile = AJE.obj_users.Select(user => new usersVMMobile
                                {
                                    UserId = user.id,
                                    UserName = user.username,
                                    Email = user.email,
                                    Password = user.plain_password,
                                    ContactNumber = user.contactnumber,
                                    DepartmentName = user.departmentname,
                                    NodalOfficer = user.nodalofficer,
                                    StateName = user.statename,
                                    DistrictName = user.districtname,
                                    BlockName = user.blockname,
                                    GramPanchayatName = user.grampanchayatname,
                                    Verifiedornot = user.verification,
                                    approved_by = user.approved_by,
                                    approved_Date = user.approved_Date,
                                    first_time_approved_by = user.first_time_approved_by,
                                    last_changed_password_by = user.last_changed_password_by,
                                    entrytime = user.entrytime,
                                }).Where(x => x.NodalOfficer == "NPMU").OrderByDescending(c => c.UserId).ToList();

                            }
                        }
                        if (NodalOfficer == "State Level Nodal Officer")
                        {
                            if (UserType == "MIS")
                            {
                                userdetails = ABE.objUsers.Select(x => new UsersVM
                                {
                                    UserId = x.UserId,
                                    UserName = x.UserName,
                                    Email = x.Email,
                                    NodalOfficer = x.NodalOfficer,
                                    ContactNumber = x.ContactNumber,
                                    DepartmentName = x.DepartmentName,
                                    Password = x.Villagename,
                                    StateName = x.StateName,
                                    DistrictName = x.DistrictName,
                                    BlockName = x.BlockName,
                                    GramPanchayatName = x.GramPanchayatName,
                                    Villagename = x.Villagename,
                                    Verifiedornot = x.Verifiedornot,
                                    access_auth = x.access_auth,
                                    approved_by = x.approved_by,
                                    first_time_approved_by = x.first_time_approved_by,
                                    last_changed_password_by = x.last_changed_password_by,
                                    EntryTime = x.EntryTime,
                                    approved_Date = x.approved_Date

                                }).Where(x => x.NodalOfficer == "State Level Nodal Officer" && x.StateName == StateName).OrderByDescending(c => c.UserId).ToList();
                            }
                            else
                            {
                                userdetailsMobile = AJE.obj_users.Select(user => new usersVMMobile
                                {
                                    UserId = user.id,
                                    UserName = user.username,
                                    Email = user.email,
                                    Password = user.plain_password,
                                    ContactNumber = user.contactnumber,
                                    DepartmentName = user.departmentname,
                                    NodalOfficer = user.nodalofficer,
                                    StateName = user.statename,
                                    DistrictName = user.districtname,
                                    BlockName = user.blockname,
                                    GramPanchayatName = user.grampanchayatname,
                                    Verifiedornot = user.verification,
                                    approved_by = user.approved_by,
                                    approved_Date = user.approved_Date,
                                    first_time_approved_by = user.first_time_approved_by,
                                    last_changed_password_by = user.last_changed_password_by,
                                    entrytime = user.entrytime,
                                }).Where(x => x.NodalOfficer == "State Level Nodal Officer" && x.StateName == StateName).OrderByDescending(c => c.UserId).ToList();

                            }

                        }
                        if (NodalOfficer == "District Level Nodal Officer")
                        {
                            if (UserType == "MIS")
                            {
                                userdetails = ABE.objUsers.Select(x => new UsersVM
                                {
                                    UserId = x.UserId,
                                    UserName = x.UserName,
                                    Email = x.Email,
                                    NodalOfficer = x.NodalOfficer,
                                    ContactNumber = x.ContactNumber,
                                    DepartmentName = x.DepartmentName,
                                    Password = x.Villagename,
                                    StateName = x.StateName,
                                    DistrictName = x.DistrictName,
                                    BlockName = x.BlockName,
                                    GramPanchayatName = x.GramPanchayatName,
                                    Villagename = x.Villagename,
                                    Verifiedornot = x.Verifiedornot,
                                    access_auth = x.access_auth,
                                    approved_by = x.approved_by,
                                    first_time_approved_by = x.first_time_approved_by,
                                    last_changed_password_by = x.last_changed_password_by,
                                    EntryTime = x.EntryTime,
                                    approved_Date = x.approved_Date

                                }).Where(x => x.NodalOfficer == "District Level Nodal Officer" && x.StateName == StateName && x.DistrictName == District).OrderByDescending(c => c.UserId).ToList();
                            }
                            else
                            {
                                userdetailsMobile = AJE.obj_users.Select(user => new usersVMMobile
                                {
                                    UserId = user.id,
                                    UserName = user.username,
                                    Email = user.email,
                                    Password = user.plain_password,
                                    ContactNumber = user.contactnumber,
                                    DepartmentName = user.departmentname,
                                    NodalOfficer = user.nodalofficer,
                                    StateName = user.statename,
                                    DistrictName = user.districtname,
                                    BlockName = user.blockname,
                                    GramPanchayatName = user.grampanchayatname,
                                    Verifiedornot = user.verification,
                                    approved_by = user.approved_by,
                                    approved_Date = user.approved_Date,
                                    first_time_approved_by = user.first_time_approved_by,
                                    last_changed_password_by = user.last_changed_password_by,
                                    entrytime = user.entrytime,
                                }).Where(x => x.NodalOfficer == "District Level Nodal Officer" && x.StateName == StateName && x.DistrictName == District).OrderByDescending(c => c.UserId).ToList();

                            }

                        }

                        if (NodalOfficer == "Block Level Nodal Officer")
                        {
                            if (UserType == "MIS")
                            {
                                userdetails = ABE.objUsers.Select(x => new UsersVM
                                {
                                    UserId = x.UserId,
                                    UserName = x.UserName,
                                    Email = x.Email,
                                    NodalOfficer = x.NodalOfficer,
                                    ContactNumber = x.ContactNumber,
                                    DepartmentName = x.DepartmentName,
                                    Password = x.Villagename,
                                    StateName = x.StateName,
                                    DistrictName = x.DistrictName,
                                    BlockName = x.BlockName,
                                    GramPanchayatName = x.GramPanchayatName,
                                    Villagename = x.Villagename,
                                    Verifiedornot = x.Verifiedornot,
                                    access_auth = x.access_auth,
                                    approved_by = x.approved_by,
                                    first_time_approved_by = x.first_time_approved_by,
                                    last_changed_password_by = x.last_changed_password_by,
                                    EntryTime = x.EntryTime,
                                    approved_Date = x.approved_Date

                                }).Where(x => x.NodalOfficer == "Block Level Nodal Officer" && x.StateName == StateName && x.DistrictName == District && x.BlockName == Block).OrderByDescending(c => c.UserId).ToList();
                            }
                            else
                            {
                                userdetailsMobile = AJE.obj_users.Select(user => new usersVMMobile
                                {
                                    UserId = user.id,
                                    UserName = user.username,
                                    Email = user.email,
                                    Password = user.plain_password,
                                    ContactNumber = user.contactnumber,
                                    DepartmentName = user.departmentname,
                                    NodalOfficer = user.nodalofficer,
                                    StateName = user.statename,
                                    DistrictName = user.districtname,
                                    BlockName = user.blockname,
                                    GramPanchayatName = user.grampanchayatname,
                                    Verifiedornot = user.verification,
                                    approved_by = user.approved_by,
                                    approved_Date = user.approved_Date,
                                    first_time_approved_by = user.first_time_approved_by,
                                    last_changed_password_by = user.last_changed_password_by,
                                    entrytime = user.entrytime,
                                }).Where(x => x.NodalOfficer == "Block Level Nodal Officer" && x.StateName == StateName && x.DistrictName == District && x.BlockName == Block).OrderByDescending(c => c.UserId).ToList();

                            }

                        }

                        else if (StateName != "0" && StateName != "" && StateName != null && District != "0" && District != "" && District != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                        {
                            if (UserType == "MIS")
                            {


                                userdetails = ABE.objUsers.Select(x => new UsersVM
                                {
                                    UserId = x.UserId,
                                    UserName = x.UserName,
                                    Email = x.Email,
                                    NodalOfficer = x.NodalOfficer,
                                    ContactNumber = x.ContactNumber,
                                    DepartmentName = x.DepartmentName,
                                    Password = x.Villagename,
                                    StateName = x.StateName,
                                    DistrictName = x.DistrictName,
                                    BlockName = x.BlockName,
                                    GramPanchayatName = x.GramPanchayatName,
                                    Villagename = x.Villagename,
                                    Verifiedornot = x.Verifiedornot,
                                    access_auth = x.access_auth,
                                    approved_by = x.approved_by,
                                    first_time_approved_by = x.first_time_approved_by,
                                    last_changed_password_by = x.last_changed_password_by,
                                    EntryTime = x.EntryTime,
                                    approved_Date = x.approved_Date
                                }).Where(x => x.StateName == StateName && x.DistrictName == District && x.BlockName == Block && x.GramPanchayatName == Gram).OrderByDescending(c => c.UserId).ToList();

                            }

                            else
                            {
                                userdetailsMobile = AJE.obj_users.Select(user => new usersVMMobile
                                {
                                    UserId = user.id,
                                    UserName = user.username,
                                    Email = user.email,
                                    Password = user.plain_password,
                                    ContactNumber = user.contactnumber,
                                    DepartmentName = user.departmentname,
                                    NodalOfficer = user.nodalofficer,
                                    StateName = user.statename,
                                    DistrictName = user.districtname,
                                    BlockName = user.blockname,
                                    GramPanchayatName = user.grampanchayatname,
                                    Verifiedornot = user.verification,
                                    approved_by = user.approved_by,
                                    approved_Date = user.approved_Date,
                                    first_time_approved_by = user.first_time_approved_by,
                                    last_changed_password_by = user.last_changed_password_by,
                                    entrytime = user.entrytime,
                                }).Where(x => x.StateName == StateName && x.DistrictName == District && x.BlockName == Block && x.GramPanchayatName == Gram).OrderByDescending(c => c.UserId).ToList();
                            }
                        }

                    }
                    if (UserType == "MIS")
                    {
                        userdetails.ForEach(Item =>
                        {
                            Item.EntryTimeString = Item.EntryTime.ToString("yyyy-MM-dd");
                            string formattedDate = Item.approved_Date.HasValue
                                  ? Item.approved_Date.Value.ToString("yyyy-MM-dd")
                                  : null;
                            Item.approve_DateString = formattedDate;

                            Item.approve_DateString = formattedDate;


                        });
                        var jsonResult = Json(userdetails, JsonRequestBehavior.AllowGet);
                        jsonResult.MaxJsonLength = int.MaxValue;

                        return jsonResult;
                    }
                    else
                    {
                        userdetailsMobile.ForEach(Item =>
                        {
                            Item.EntryTimeString = Item.entrytime.ToString("yyyy-MM-dd");
                            string formattedDate = Item.approved_Date.HasValue
                                ? Item.approved_Date.Value.ToString("yyyy-MM-dd")
                                : null;
                            Item.approve_DateString = formattedDate;

                        });
                        var jsonResult = Json(userdetailsMobile, JsonRequestBehavior.AllowGet);
                        jsonResult.MaxJsonLength = int.MaxValue;

                        return jsonResult;

                    }


                }
                catch (Exception Ex)
                {
                    abhy_tbl_error error_data = new abhy_tbl_error();
                    error_data.error_test = Ex.Message;
                    error_data.user_email = Ex.StackTrace;
                    error_data.user_type = "Mis users";
                    error_data.error_count = "1";
                    ABE.obj_abhy_tbl_error.Add(error_data);
                    ABE.SaveChanges();
                    return Json("error", JsonRequestBehavior.AllowGet);
                }

            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }

        }

        [HttpPost]
        public ActionResult SaveUserdetails_new(string id, string password, string mis_mobile, string hash_password)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    if (mis_mobile == "MIS")
                    {
                        var Data = ABE.objUsers.Where(x => x.UserId == ID).SingleOrDefault();
                        if (Data != null)
                        {

                            Data.Villagename = password;
                            Data.Password = hash_password;

                            Data.approved_Date = DateTime.Now;
                            Data.last_changed_password_by = Session["email"].ToString();
                            ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                            int A = ABE.SaveChanges();
                            if (A > 0)
                            {
                                return Json("Update successfully");
                            }
                            else
                            {
                                return Json("Not Updated");
                            }
                        }
                    }

                    else
                    {
                        var Data = AJE.obj_users.Where(x => x.id == ID).SingleOrDefault();
                        if (Data != null)
                        {

                            Data.plain_password = password;
                            Data.hash_password = hash_password;

                            Data.approved_Date = DateTime.Now;
                            Data.last_changed_password_by = Session["email"].ToString();
                            AJE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                            int A = AJE.SaveChanges();
                            if (A > 0)
                            {
                                return Json("Update successfully");
                            }
                            else
                            {
                                return Json("Not Updated");
                            }
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
        public ActionResult Delete_users(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    
                    var result = js.Deserialize<Users>(Data);
                    if (result.UserName == "MIS")
                    {
                        if (result.UserId != 0)
                        {

                            if (Data != null)
                            {
                                var TKID = Convert.ToInt32(result.UserId);

                                var Data2 = ABE.objUsers.Where(x => x.UserId == TKID).SingleOrDefault();
                                Users_delete obj1 = new Users_delete();
                                obj1.UserId = Data2.UserId;
                                obj1.UserToken = Data2.UserToken;
                                obj1.UserName = Data2.UserName;
                                obj1.Email = Data2.Email;
                                obj1.NodalOfficer = Data2.NodalOfficer;
                                obj1.ContactNumber = Data2.ContactNumber;
                                obj1.DepartmentName = Data2.DepartmentName;
                                obj1.Password = Data2.Password;
                                obj1.StateName = Data2.StateName;
                                obj1.DistrictName = Data2.DistrictName;
                                obj1.BlockName = Data2.BlockName;
                                obj1.GramPanchayatName = Data2.GramPanchayatName;
                                obj1.Villagename = Data2.Villagename;
                                obj1.CheckingCode = Data2.CheckingCode;
                                obj1.stateofficer_email = Data2.stateofficer_email;
                                obj1.VerificationCode = Data2.VerificationCode;
                                obj1.Verifiedornot = Data2.Verifiedornot;
                                obj1.RollId = Data2.RollId;
                                obj1.clientcaptcha = Data2.clientcaptcha;
                                obj1.isactive = Data2.isactive;
                                obj1.access_auth = Data2.access_auth;
                                obj1.email_verify = Data2.email_verify;
                                obj1.approved_by = Data2.approved_by;
                                obj1.mail_sent = Data2.mail_sent;
                                obj1.EntryTime = Data2.EntryTime;
                                obj1.first_time_approved_by = Data2.first_time_approved_by;
                                obj1.last_changed_password_by = Data2.last_changed_password_by;
                                obj1.approved_Date = Data2.approved_Date;
                                obj1.email_delete = Session["Email"].ToString();
                                obj1.datetime_delete = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
                                ABE.objUsers_delete.Add(obj1);
                                ABE.SaveChanges();

                                ABE.Entry(Data2).State = EntityState.Deleted;
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
                    else if (result.UserName == "Mobile")
                    {
                        {
                            if (result.UserId != 0)
                            {

                                if (Data != null)
                                {


                                    var TKID = Convert.ToInt32(result.UserId);

                                    var Data2 = AJE.obj_users.Where(x => x.id == TKID).SingleOrDefault();
                                    users_delete obj1 = new users_delete();
                                    obj1.id = Data2.id;
                                    obj1.username = Data2.username;
                                    obj1.email = Data2.email;
                                    obj1.password = Data2.password;
                                    obj1.contactnumber = Data2.contactnumber;
                                    obj1.departmentname = Data2.departmentname;
                                    obj1.nodalofficer = Data2.nodalofficer;
                                    obj1.statename = Data2.statename;
                                    obj1.districtname = Data2.districtname;
                                    obj1.blockname = Data2.blockname;
                                    obj1.grampanchayatname = Data2.grampanchayatname;
                                    obj1.latitude = Data2.latitude;
                                    obj1.longitude = Data2.longitude;
                                    obj1.verification = Data2.verification;
                                    obj1.plain_password = Data2.plain_password;
                                    obj1.hash_password = Data2.hash_password;
                                    obj1.first_time_approved_by = Data2.first_time_approved_by;
                                    obj1.last_changed_password_by = Data2.last_changed_password_by;
                                    obj1.approved_by = Data2.approved_by;
                                    obj1.entrytime = Data2.entrytime;
                                    obj1.approved_Date = Data2.approved_Date;
                                    obj1.email_delete = Session["Email"].ToString();
                                    obj1.datetime_delete = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
                                    AJE.obj_users_delete.Add(obj1);
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


    }
}
