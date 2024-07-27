//dli controller 

using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;
using AbhyProject.Classes;
using AbhyProject.Models;
using ClosedXML.Excel;

namespace AbhyProject.Controllers
{
    public class DLIController : Controller
    {
        AbhyEntity ABE = new AbhyEntity();
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Report()
        {
            return View();
        }

        [HttpGet]
        public ActionResult Get_States()
        {

            try
            {
                List<mstr_states> ddetails = ABE.obj_mstr_states.OrderBy(x => x.order_by).ToList();//total list

                return Json(ddetails, JsonRequestBehavior.AllowGet);
            }
            catch (Exception Ex)
            {
                return Json("Error", JsonRequestBehavior.AllowGet);
            }

        }

        [HttpGet]
        public ActionResult Get_Data(string state, string year, string type)
        {
            try
            {

                if (state != "0" && year == "0" && type == "0")
                {
                    if (state == "ALL")
                    {
                        List<abhy_DLI> ddetails = ABE.obj_abhy_DLI.OrderByDescending(o => o.Id).ToList();
                        return Json(ddetails, JsonRequestBehavior.AllowGet);
                    }
                    else
                    {
                        List<abhy_DLI> ddetails = ABE.obj_abhy_DLI.Where(x => x.State == state).OrderByDescending(o => o.Id).ToList();
                        return Json(ddetails, JsonRequestBehavior.AllowGet);
                    }

                }
                else if (state == "0" && year != "0" && type == "0")
                {
                    if (year == "ALL")
                    {
                        List<abhy_DLI> ddetails = ABE.obj_abhy_DLI.OrderByDescending(o => o.Id).ToList();
                        return Json(ddetails, JsonRequestBehavior.AllowGet);
                    }
                    else
                    {
                        List<abhy_DLI> ddetails = ABE.obj_abhy_DLI.Where(x => x.Year == year).OrderByDescending(o => o.Id).ToList();
                        return Json(ddetails, JsonRequestBehavior.AllowGet);
                    }
                }
                else if (state == "0" && year == "0" && type != "0")
                {
                    List<abhy_DLI> ddetails = ABE.obj_abhy_DLI.Where(x => x.Type == type).OrderByDescending(o => o.Id).ToList();
                    return Json(ddetails, JsonRequestBehavior.AllowGet);
                }
                else if (state != "0" && year != "0" && type == "0")
                {
                    if (state == "ALL" && year != "ALL")
                    {
                        List<abhy_DLI> ddetails = ABE.obj_abhy_DLI.Where(x => x.Year == year).OrderByDescending(o => o.Id).ToList();
                        return Json(ddetails, JsonRequestBehavior.AllowGet);
                    }
                    else if (state != "ALL" && year == "ALL")
                    {
                        List<abhy_DLI> ddetails = ABE.obj_abhy_DLI.Where(x => x.State == state).OrderByDescending(o => o.Id).ToList();
                        return Json(ddetails, JsonRequestBehavior.AllowGet);
                    }
                    else if (state == "ALL" && year == "ALL")
                    {
                        List<abhy_DLI> ddetails = ABE.obj_abhy_DLI.ToList();
                        return Json(ddetails, JsonRequestBehavior.AllowGet);
                    }
                    else
                    {
                        List<abhy_DLI> ddetails = ABE.obj_abhy_DLI.Where(x => x.State == state && x.Year == year).OrderByDescending(o => o.Id).ToList();
                        return Json(ddetails, JsonRequestBehavior.AllowGet);
                    }
                }
                else if (state != "0" && year != "0" && type != "0")
                {
                    if (state == "ALL" && year != "ALL")
                    {
                        List<abhy_DLI> ddetails = ABE.obj_abhy_DLI.Where(x => x.Year == year && x.Type == type).OrderByDescending(o => o.Id).ToList();
                        return Json(ddetails, JsonRequestBehavior.AllowGet);
                    }
                    else if (state != "ALL" && year == "ALL")
                    {
                        List<abhy_DLI> ddetails = ABE.obj_abhy_DLI.Where(x => x.State == state && x.Type == type).OrderByDescending(o => o.Id).ToList();
                        return Json(ddetails, JsonRequestBehavior.AllowGet);
                    }
                    else if (state == "ALL" && year == "ALL")
                    {
                        List<abhy_DLI> ddetails = ABE.obj_abhy_DLI.Where(x => x.Type == type).OrderByDescending(o => o.Id).ToList();
                        return Json(ddetails, JsonRequestBehavior.AllowGet);
                    }
                    else
                    {
                        List<abhy_DLI> ddetails = ABE.obj_abhy_DLI.Where(x => x.State == state && x.Year == year && x.Type == type).OrderByDescending(o => o.Id).ToList();
                        return Json(ddetails, JsonRequestBehavior.AllowGet);
                    }
                }
                else if (state != "0" && year == "0" && type != "0")
                {
                    if (state == "ALL")
                    {
                        List<abhy_DLI> ddetails = ABE.obj_abhy_DLI.Where(x => x.Type == type).OrderByDescending(o => o.Id).ToList();
                        return Json(ddetails, JsonRequestBehavior.AllowGet);
                    }
                    else
                    {
                        List<abhy_DLI> ddetails = ABE.obj_abhy_DLI.Where(x => x.State == state && x.Type == type).OrderByDescending(o => o.Id).ToList();
                        return Json(ddetails, JsonRequestBehavior.AllowGet);
                    }
                }
                else if (state == "0" && year != "0" && type != "0")
                {
                    if (year == "ALL")
                    {
                        List<abhy_DLI> ddetails = ABE.obj_abhy_DLI.Where(x => x.Type == type).OrderByDescending(o => o.Id).ToList();
                        return Json(ddetails, JsonRequestBehavior.AllowGet);
                    }
                    else
                    {
                        List<abhy_DLI> ddetails = ABE.obj_abhy_DLI.Where(x => x.Year == year && x.Type == type).OrderByDescending(o => o.Id).ToList();
                        return Json(ddetails, JsonRequestBehavior.AllowGet);
                    }
                }
                else
                {
                    List<abhy_DLI> ddetails = ABE.obj_abhy_DLI.ToList();
                    return Json(ddetails, JsonRequestBehavior.AllowGet);
                }


                //return Json(ddetails, JsonRequestBehavior.AllowGet);
            }
            catch (Exception Ex)
            {
                return Json("Error", JsonRequestBehavior.AllowGet);
            }

        }

        [HttpGet]
        public ActionResult GetAllData()
        {

            try
            {
                List<abhy_DLI> ddetails = ABE.obj_abhy_DLI.ToList();

                return Json(ddetails, JsonRequestBehavior.AllowGet);
            }
            catch (Exception Ex)
            {
                return Json("Error", JsonRequestBehavior.AllowGet);
            }

        }

        [HttpPost]
        public ActionResult Save_Data(string Data)//prateek
        {
            int isInsert = 0;
            if (Session["UserId"] != null)
            {
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<abhy_DLI>(Data);
                abhy_DLI ab = new abhy_DLI();
                //ABE.obj_abhy_DLI.Add(result);

                var data = ABE.obj_abhy_DLI.Where(x => x.State == result.State && x.Year == result.Year && x.Type == result.Type).ToList();
                if (data.Count > 0)
                {
                    abhy_DLI obj = ABE.obj_abhy_DLI.First(x => x.State == result.State && x.Year == result.Year);
                    obj.Achievement = result.Achievement;
                    obj.Target = result.Target;
                    obj.WaterLevel_Achievement = result.WaterLevel_Achievement;
                    obj.WaterQuality_Achievement = result.WaterQuality_Achievement;
                    obj.HGR_Achievement = result.HGR_Achievement;
                    isInsert = ABE.SaveChanges();
                    //ABE.Entry(result).State = EntityState.Modified;
                }
                else
                {
                    ABE.obj_abhy_DLI.Add(result);
                    isInsert = ABE.SaveChanges();
                }


                if (isInsert > 0)
                {
                    return Json("Data Saved Successfully", JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("Data Not Saved", JsonRequestBehavior.AllowGet);
                }

            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }


        [HttpPost]
        public ActionResult Update(string Id, string State, string Year, string Type, string TAR, string WLA, string WQA, string HGRA, string ACH)
        {
            if (Session["UserId"] != null)
            {
                try
                {

                    var SocID = Convert.ToInt32(Id);
                    var Data1 = ABE.obj_abhy_DLI.Where(x => x.Id == SocID).SingleOrDefault();
                    if (Data1 != null)
                    {
                        Data1.Id = SocID;
                        Data1.State = State;
                        Data1.Year = Year;
                        Data1.Type = Type;
                        Data1.Target = TAR;
                        Data1.WaterLevel_Achievement = WLA;
                        Data1.WaterQuality_Achievement = WQA;
                        Data1.HGR_Achievement = HGRA;
                        Data1.Achievement = ACH;

                        ABE.Entry(Data1).State = System.Data.Entity.EntityState.Modified;
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


        //Akash
        [HttpPost]
        public ActionResult delete_DLI(string Data)
        {

            JavaScriptSerializer js = new JavaScriptSerializer();
            var result = js.Deserialize<abhy_DLI>(Data);

            if (result.Id != 0)
            {
                var ARID = Convert.ToInt32(result.Id);
                var Data1 = ABE.obj_abhy_DLI.Where(x => x.Id == ARID).FirstOrDefault();
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




    }
}
