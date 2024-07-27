using AbhyProject.Classes;
using AbhyProject.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Net.Security;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Timers;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;

namespace AbhyProject.Controllers
{
    public class GroundWaterMonitoringController : Controller
    {
        AbhyEntity ABE = new AbhyEntity();
        // GET: GroundWaterMonitoring
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Gwm_Home()
        {
            return View();
        }
        [HttpPost]
        public ActionResult GroundWaterLevelsInfo()
        {

            string StateName = Session["gstate"].ToString();
            string DistName = Session["gdist"].ToString();
            string BlockName = Session["gblock"].ToString();
            //var Gram = Session["ggram"].ToString();
            var Data = ABE.obj_Abhy_groundwater_levels2_new.Where(x => x.state_name == StateName && x.district_name == DistName && x.block == BlockName ).ToList();

            var beneficiarydownload = Data;
            var jsonresults24 = Json(beneficiarydownload, JsonRequestBehavior.AllowGet);
            jsonresults24.MaxJsonLength = int.MaxValue;
            return jsonresults24;

        }
        [HttpPost]
        public ActionResult Gwm_datacollections(string Data)
        {
            JavaScriptSerializer js = new JavaScriptSerializer();
            var result = js.Deserialize<abhy_groundwater_datacollection>(Data);
            var obj = new abhy_groundwater_datacollection();
            obj.site_name = result.site_name;
            obj.statename = result.statename;
            obj.districtname = result.districtname;
            obj.blockname = result.blockname;
            obj.gpname = result.gpname;
            obj.welltype = result.welltype;
            obj.dept_of_well = result.dept_of_well;
            obj.gw_level = result.gw_level;
            obj.gw_date = result.gw_date;
            obj.latitude = result.latitude;
            obj.longitude = result.longitude;

            ABE.obj_abhy_groundwater_datacollection.Add(obj);
            ABE.SaveChanges();
            return Json("Saved Successfully", JsonRequestBehavior.AllowGet);
            //return View();
        }
        [HttpGet]
        public ActionResult Gwm_datacollections_report()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_groundwater_datacollection> ddetails = new List<abhy_groundwater_datacollection>();
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();
                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null && Gram != "" && Gram != null)
                    {
                        ddetails = ABE.obj_abhy_groundwater_datacollection.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.gpname == Gram).ToList();//total list

                    }
                    else if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null)
                    {
                        ddetails = ABE.obj_abhy_groundwater_datacollection.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block).ToList();//total list

                    }
                    else if (State != "" && State != null && Dist != "" && Dist != null)
                    {
                        ddetails = ABE.obj_abhy_groundwater_datacollection.Where(x => x.statename == State && x.districtname == Dist).ToList();//total list
                    }
                    else if (State != "" && State != null)
                    {
                        ddetails = ABE.obj_abhy_groundwater_datacollection.Where(x => x.statename == State).ToList();//total list
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
          
            // return View();
        }
        public ActionResult Gwm_Ground_Water_Monitoring()
        {
            return View();
        }
        [HttpGet]
        public ActionResult Gwm_Ground_Water_Monitoring_chart()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<Abhy_groundwater_levels2_new> ddetails = new List<Abhy_groundwater_levels2_new>();
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();
                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null && Gram != "" && Gram != null)
                    {
                        ddetails = ABE.obj_Abhy_groundwater_levels2_new.Where(x => x.state_name == State && x.district_name == Dist && x.block == Block && x.gpname == Gram).ToList();//total list

                    }
                    else if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null)
                    {
                        ddetails = ABE.obj_Abhy_groundwater_levels2_new.Where(x => x.state_name == State && x.district_name == Dist && x.block == Block).ToList();//total list

                    }
                    else if (State != "" && State != null && Dist != "" && Dist != null)
                    {
                        ddetails = ABE.obj_Abhy_groundwater_levels2_new.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list
                    }
                    else if (State != "" && State != null)
                    {
                        ddetails = ABE.obj_Abhy_groundwater_levels2_new.Where(x => x.state_name == State).ToList();//total list
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
            // return View();
        }
        public ActionResult Gwm_Groundwater_Quality()
        {
            return View();
        }
        [HttpGet]
        public ActionResult Gwm_Groundwater_Quality_geting()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<Abhy_groundwater_quality_new> ddetails = new List<Abhy_groundwater_quality_new>();
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();
                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null && Gram != "" && Gram != null)
                    {
                        ddetails = ABE.obj_Abhy_groundwater_quality_new.Where(x => x.state_name == State && x.disrict_name == Dist && x.block == Block && x.gname == Gram).ToList();//total list
                    }
                    else if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null)
                    {
                        ddetails = ABE.obj_Abhy_groundwater_quality_new.Where(x => x.state_name == State && x.disrict_name == Dist && x.block == Block).ToList();//total list

                    }
                    else if (State != "" && State != null && Dist != "" && Dist != null)
                    {
                        ddetails = ABE.obj_Abhy_groundwater_quality_new.Where(x => x.state_name == State && x.disrict_name == Dist).ToList();//total list
                    }
                    else if (State != "" && State != null)
                    {
                        ddetails = ABE.obj_Abhy_groundwater_quality_new.Where(x => x.state_name == State).ToList();//total list
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
        public ActionResult Gwm_Groundwater_Quantity()
        {
            return View();
        }
        [HttpGet]
        public ActionResult Gwm_Groundwater_Quantity_geting()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<Abhy_gwl_quantity_new> ddetails = new List<Abhy_gwl_quantity_new>();
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();
                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null && Gram != "" && Gram != null)
                    {
                        ddetails = ABE.obj_Abhy_gwl_quantity_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gname == Gram).ToList();//total list
                    }
                    if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null)
                    {
                        ddetails = ABE.obj_Abhy_gwl_quantity_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).Take(1).ToList();//total list

                    }
                    else if (State != "" && State != null && Dist != "" && Dist != null)
                    {
                        ddetails = ABE.obj_Abhy_gwl_quantity_new.Where(x => x.state_name == State && x.district_name == Dist).Take(1).ToList();//total list
                    }
                    else if (State != "" && State != null)
                    {
                        ddetails = ABE.obj_Abhy_gwl_quantity_new.Where(x => x.state_name == State).Take(1).ToList();//total list
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
        public ActionResult Gwm_Ground_Water_Monitoring_rainfall()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_totalrainfall_yearly_new> ddetails = new List<abhy_totalrainfall_yearly_new>();
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();
                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null && Gram != "" && Gram != null)
                    {
                        ddetails = ABE.obj_abhy_totalrainfall_yearly_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                    }
                   else if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null)
                    {
                        ddetails = ABE.obj_abhy_totalrainfall_yearly_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                    }
                    else if (State != "" && State != null && Dist != "" && Dist != null)
                    {
                        ddetails = ABE.obj_abhy_totalrainfall_yearly_new.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list
                    }
                    else if (State != "" && State != null)
                    {
                        ddetails = ABE.obj_abhy_totalrainfall_yearly_new.Where(x => x.state_name == State).ToList();//total list
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
            // return View();
        }


        [HttpGet]
        public ActionResult Gwm_Ground_Water_Monitoring_Monthly_rainfall()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_totalrainfall_monthly_new> ddetails = new List<abhy_totalrainfall_monthly_new>();
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();
                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null && Gram != "" && Gram != null)
                    {
                        ddetails = ABE.obj_abhy_totalrainfall_monthly_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                    }
                    else if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null)
                    {
                        ddetails = ABE.obj_abhy_totalrainfall_monthly_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                    }
                    else if (State != "" && State != null && Dist != "" && Dist != null)
                    {
                        ddetails = ABE.obj_abhy_totalrainfall_monthly_new.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list
                    }
                    else if (State != "" && State != null)
                    {
                        ddetails = ABE.obj_abhy_totalrainfall_monthly_new.Where(x => x.state_name == State).ToList();//total list
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
            // return View();
        }



        public ActionResult Ground_Water_Monitoring_Report()
        {
            return View();
        }
        public ActionResult Ground_Water_Quality_Report()
        {
            return View();
        }
        public ActionResult Ground_Water_Quantity_Report()
        {
            return View();
        }
        public ActionResult Ground_Water_Total_Report()
        {
            return View();
        }
    }
}