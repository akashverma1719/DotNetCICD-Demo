using AbhyProject.Classes;
using AbhyProject.Models;
using ClosedXML.Excel;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;
using System.Web.UI.WebControls;

namespace AbhyProject.Controllers
{
    public class Demand_newController : Controller
    {
        // GET: Demand_new
        AbhyEntity ABE = new AbhyEntity();
        AtaljalEntity AJE = new AtaljalEntity();

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Demand_New()
        {
            return View();
        }
        public ActionResult Main_page()
        {
            return View();
        }
        public ActionResult Supply_New()
        {
            return View();
        }
        public ActionResult demand_report()
        {
            return View();
        }
        public ActionResult sample_source_page()
        {
            return View();
        }
        public ActionResult supply_report()
        {
            return View();
        }

        [HttpPost]
        public ActionResult State_SessionInfo_1(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_new_DLI3>(Data);
                    if (Session["Officer"] != null && Session["Officer"].ToString() == "Admin")
                    {
                        var Statename = "Admin";
                        var Str = Statename;
                        return Json(Str, JsonRequestBehavior.AllowGet);

                    }
                    else if (Session["Officer"] != null && Session["Officer"].ToString() == "National Level Nodal Officer")
                    {
                        var Statename = "Admin";
                        var Str = Statename;
                        return Json(Str, JsonRequestBehavior.AllowGet);

                    }
                    else if (Session["Officer"] != null && Session["Officer"].ToString() == "State Level Nodal Officer")
                    {
                        var Officer = "State Level Nodal Officer";
                        var Statename = Session["gstate"].ToString();
                        var Str = Officer + ',' + Statename;
                        return Json(Str, JsonRequestBehavior.AllowGet);

                    }
                    else if (Session["Officer"] != null && Session["Officer"].ToString() == "District Level Nodal Officer")
                    {
                        var Officer = "District Level Nodal Officer";
                        var Statename = Session["gstate"].ToString();
                        var Dist = Session["gdist"].ToString();
                        var Str = Officer + ',' + Statename + ',' + Dist;
                        return Json(Str, JsonRequestBehavior.AllowGet);

                    }
                    else if (Session["Officer"] != null && Session["Officer"].ToString() == "Block Level Nodal Officer")
                    {
                        var Officer = "Block Level Nodal Officer";
                        var Statename = Session["gstate"].ToString();
                        var Dist = Session["gdist"].ToString();
                        var Block = Session["gblock"].ToString();
                        var Str = Officer + ',' + Statename + ',' + Dist + ',' + Block;
                        return Json(Str, JsonRequestBehavior.AllowGet);

                    }
                    else if (Session["Officer"] != null && Session["Officer"].ToString() == "Gram Panchyat Nodal Officer")
                    {
                        var Officer = "Gram Panchyat Nodal Officer";
                        var Statename = Session["gstate"].ToString();
                        var Dist = Session["gdist"].ToString();
                        var Block = Session["gblock"].ToString();
                        var Gram = Session["ggram"].ToString(); //var year = Session["Year"].ToString();
                        var Str = Officer + ',' + Statename + ',' + Dist + ',' + Block + ',' + Gram /*+ ',' + year*/;
                        return Json(Str, JsonRequestBehavior.AllowGet);

                    }

                    else
                    {
                        return Json("Admin", JsonRequestBehavior.AllowGet);

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
        public ActionResult ddlsession(string ddldem, string demand_v, string yea)
        {

            Session["ddldem"] = ddldem;
            Session["demand_v"] = demand_v;
            Session["yea"] = yea;
            return Json("Yes", JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult supplyddlsession(string ddldem, string demand_v, string yea, string supply_sid)
        {

            Session["ddldem"] = ddldem;
            Session["yea"] = yea;
            Session["supply_sid"] = supply_sid;
            return Json("Yes", JsonRequestBehavior.AllowGet);
        }



        [HttpPost]
        public ActionResult Data_get(string Data, string ddldeman, string demand_va)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    //var result = js.Deserialize<abhy_wsp_funding_source>(Data);
                    var result = js.Deserialize<Pagenum>(Data);

                    List<abhy_new_DLI3> get_data = new List<abhy_new_DLI3>();
                    List<abhy_new_DLI3_new> get_data_new = new List<abhy_new_DLI3_new>();



                    var State = result.statename;
                    var Dist = result.districtname;
                    var Block = result.blockname;
                    var Gram = result.gpname;
                    var Year = result.year;
                    var month = result.month;
                    var demand_val = demand_va;
                    var ddldemand = ddldeman;
                    var PageNumber = result.PageNumber;

                    abhy_new_DLI3_new allData = new abhy_new_DLI3_new();
                    var DL3Data = ABE.obj_abhy_new_DLI3.ToList();

                    List<abhy_new_DLI3_new> finaldata = new List<abhy_new_DLI3_new>();
                    List<dynamic> abc = new List<dynamic>();

                    if (State == "All" && demand_va == "0")
                    {
                        var details4 = ABE.obj_abhy_wsp_funding_source.OrderByDescending(x => x.id).ToList();
                        for (int i = 0; i < details4.Count; i++)
                        {
                            abc.Add(details4[i]);
                            int Check_id = details4[i].id;
                            var details5 = ABE.obj_abhy_new_DLI3.Where(x => x.old_id == Check_id).ToList();
                            for (int j = 0; j < details5.Count; j++)
                            {
                                abc.Add(details5[j]);
                                int Check_id2 = details5[j].id;
                                var details6 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == Check_id2).ToList();
                                for (int k = 0; k < details6.Count; k++)
                                {
                                    abc.Add(details6[k]);
                                }
                            }

                        }

                    }
                    else if (State == "All" && demand_va != "All")
                    {
                        var details4 = ABE.obj_abhy_wsp_funding_source.Where(x => x.type == demand_va).OrderByDescending(x => x.id).ToList();
                        for (int i = 0; i < details4.Count; i++)
                        {
                            abc.Add(details4[i]);
                            int Check_id = details4[i].id;
                            var details5 = ABE.obj_abhy_new_DLI3.Where(x => x.old_id == Check_id).ToList();
                            for (int j = 0; j < details5.Count; j++)
                            {
                                abc.Add(details5[j]);
                                int Check_id2 = details5[j].id;
                                var details6 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == Check_id2).ToList();
                                for (int k = 0; k < details6.Count; k++)
                                {
                                    abc.Add(details6[k]);
                                }
                            }

                        }
                    }
                    else if (State == "All" && demand_va == "All")
                    {
                        if (Year != "0")
                        {
                            var details4 = ABE.obj_abhy_wsp_funding_source.Where(x => x.claim_year == Year).OrderByDescending(x => x.id).ToList();
                            for (int i = 0; i < details4.Count; i++)
                            {
                                abc.Add(details4[i]);
                                int Check_id = details4[i].id;
                                var details5 = ABE.obj_abhy_new_DLI3.Where(x => x.old_id == Check_id).ToList();
                                for (int j = 0; j < details5.Count; j++)
                                {
                                    abc.Add(details5[j]);
                                    int Check_id2 = details5[j].id;
                                    var details6 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == Check_id2).ToList();
                                    for (int k = 0; k < details6.Count; k++)
                                    {
                                        abc.Add(details6[k]);
                                    }
                                }

                            }



                        }
                        else
                        {
                            var details4 = ABE.obj_abhy_wsp_funding_source.OrderByDescending(x => x.id).ToList();
                            for (int i = 0; i < details4.Count; i++)
                            {
                                abc.Add(details4[i]);
                                int Check_id = details4[i].id;
                                var details5 = ABE.obj_abhy_new_DLI3.Where(x => x.old_id == Check_id).ToList();
                                for (int j = 0; j < details5.Count; j++)
                                {
                                    abc.Add(details5[j]);
                                    int Check_id2 = details5[j].id;
                                    var details6 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == Check_id2).ToList();
                                    for (int k = 0; k < details6.Count; k++)
                                    {
                                        abc.Add(details6[k]);
                                    }
                                }

                            }
                        }

                    }
                    else
                    {
                        if (ddldemand != "All")
                        {
                            if (demand_val != "All" && demand_val != "0")
                            {
                                if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null && demand_val != "0" && demand_val != "" && demand_val != null)
                                {
                                    var details4 = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.claim_year == Year && x.month == month && x.type == demand_val).OrderByDescending(x => x.id).ToList();//total list

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_new_DLI3.Where(x => x.old_id == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);
                                            int Check_id2 = details5[j].id;
                                            var details6 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == Check_id2).ToList();
                                            for (int k = 0; k < details6.Count; k++)
                                            {
                                                abc.Add(details6[k]);
                                            }
                                        }
                                    }


                                }
                                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null && demand_val != "0" && demand_val != "" && demand_val != null)
                                {

                                    var details4 = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.claim_year == Year && x.type == demand_val).OrderByDescending(x => x.id).ToList();//total list

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_new_DLI3.Where(x => x.old_id == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);
                                            int Check_id2 = details5[j].id;
                                            var details6 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == Check_id2).ToList();
                                            for (int k = 0; k < details6.Count; k++)
                                            {
                                                abc.Add(details6[k]);
                                            }
                                        }
                                    }

                                }
                                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && demand_val != "0" && demand_val != "" && demand_val != null)
                                {

                                    var details4 = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.type == demand_val).OrderByDescending(x => x.id).ToList();//total list

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_new_DLI3.Where(x => x.old_id == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);

                                            int Check_id2 = details5[j].id;
                                            var details6 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == Check_id2).ToList();
                                            for (int k = 0; k < details6.Count; k++)
                                            {
                                                abc.Add(details6[k]);
                                            }
                                        }

                                    }

                                }
                                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Year != "0" && Year != "" && Year != null && demand_val != "0" && demand_val != "" && demand_val != null)
                                {

                                    var details4 = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.claim_year == Year && x.type == demand_val).OrderByDescending(x => x.id).ToList();//total list

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_new_DLI3.Where(x => x.old_id == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);
                                            int Check_id2 = details5[j].id;
                                            var details6 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == Check_id2).ToList();
                                            for (int k = 0; k < details6.Count; k++)
                                            {
                                                abc.Add(details6[k]);
                                            }
                                        }
                                    }

                                }
                                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && demand_val != "0" && demand_val != "" && demand_val != null)
                                {
                                    var details4 = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.type == demand_val).OrderByDescending(x => x.id).ToList();//total list

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_new_DLI3.Where(x => x.old_id == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);

                                            int Check_id2 = details5[j].id;
                                            var details6 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == Check_id2).ToList();
                                            for (int k = 0; k < details6.Count; k++)
                                            {
                                                abc.Add(details6[k]);
                                            }
                                        }

                                    }


                                }
                                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null && demand_val != "0" && demand_val != "" && demand_val != null)
                                {

                                    var details4 = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.claim_year == Year && x.type == demand_val).OrderByDescending(x => x.id).ToList();//total list

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_new_DLI3.Where(x => x.old_id == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);
                                            int Check_id2 = details5[j].id;
                                            var details6 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == Check_id2).ToList();
                                            for (int k = 0; k < details6.Count; k++)
                                            {
                                                abc.Add(details6[k]);
                                            }
                                        }
                                    }

                                }
                                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && demand_val != "0" && demand_val != "" && demand_val != null)
                                {

                                    var details4 = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.type == demand_val).OrderByDescending(x => x.id).ToList();//total list

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_new_DLI3.Where(x => x.old_id == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);
                                            int Check_id2 = details5[j].id;
                                            var details6 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == Check_id2).ToList();
                                            for (int k = 0; k < details6.Count; k++)
                                            {
                                                abc.Add(details6[k]);
                                            }
                                        }

                                    }


                                }
                                else if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null && demand_val != "0" && demand_val != "" && demand_val != null)
                                {

                                    var details4 = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.claim_year == Year && x.type == demand_val).OrderByDescending(x => x.id).ToList();//total list

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_new_DLI3.Where(x => x.old_id == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);
                                            int Check_id2 = details5[j].id;
                                            var details6 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == Check_id2).ToList();
                                            for (int k = 0; k < details6.Count; k++)
                                            {
                                                abc.Add(details6[k]);
                                            }
                                        }
                                    }

                                }
                                else if (State != "0" && State != "" && State != null && demand_val != "0" && demand_val != "" && demand_val != null)
                                {
                                    var details4 = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.type == demand_val).OrderByDescending(x => x.id).ToList();//total list

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_new_DLI3.Where(x => x.old_id == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);
                                            int Check_id2 = details5[j].id;
                                            var details6 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == Check_id2).ToList();
                                            for (int k = 0; k < details6.Count; k++)
                                            {
                                                abc.Add(details6[k]);
                                            }
                                        }

                                    }


                                }
                            }
                            else
                            {
                                if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
                                {
                                    var details4 = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.claim_year == Year && x.month == month).OrderByDescending(x => x.id).ToList();//total list

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_new_DLI3.Where(x => x.old_id == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);
                                            int Check_id2 = details5[j].id;
                                            var details6 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == Check_id2).ToList();
                                            for (int k = 0; k < details6.Count; k++)
                                            {
                                                abc.Add(details6[k]);
                                            }
                                        }
                                    }


                                }
                                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null)
                                {

                                    var details4 = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.claim_year == Year).OrderByDescending(x => x.id).ToList();//total list

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_new_DLI3.Where(x => x.old_id == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);
                                            int Check_id2 = details5[j].id;
                                            var details6 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == Check_id2).ToList();
                                            for (int k = 0; k < details6.Count; k++)
                                            {
                                                abc.Add(details6[k]);
                                            }
                                        }
                                    }

                                }
                                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                                {

                                    var details4 = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram).OrderByDescending(x => x.id).ToList();//total list

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_new_DLI3.Where(x => x.old_id == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);
                                            int Check_id2 = details5[j].id;
                                            var details6 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == Check_id2).ToList();
                                            for (int k = 0; k < details6.Count; k++)
                                            {
                                                abc.Add(details6[k]);
                                            }
                                        }

                                    }

                                }
                                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Year != "0" && Year != "" && Year != null)
                                {

                                    var details4 = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.claim_year == Year).OrderByDescending(x => x.id).ToList();//total list

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_new_DLI3.Where(x => x.old_id == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);
                                            int Check_id2 = details5[j].id;
                                            var details6 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == Check_id2).ToList();
                                            for (int k = 0; k < details6.Count; k++)
                                            {
                                                abc.Add(details6[k]);
                                            }
                                        }
                                    }

                                }
                                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                                {
                                    var details4 = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).OrderByDescending(x => x.id).ToList();//total list

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_new_DLI3.Where(x => x.old_id == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);
                                            int Check_id2 = details5[j].id;
                                            var details6 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == Check_id2).ToList();
                                            for (int k = 0; k < details6.Count; k++)
                                            {
                                                abc.Add(details6[k]);
                                            }
                                        }

                                    }


                                }
                                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null)
                                {

                                    var details4 = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.claim_year == Year).OrderByDescending(x => x.id).ToList();//total list

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_new_DLI3.Where(x => x.old_id == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);
                                            int Check_id2 = details5[j].id;
                                            var details6 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == Check_id2).ToList();
                                            for (int k = 0; k < details6.Count; k++)
                                            {
                                                abc.Add(details6[k]);
                                            }
                                        }
                                    }

                                }
                                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                                {

                                    var details4 = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist).OrderByDescending(x => x.id).ToList();//total list

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_new_DLI3.Where(x => x.old_id == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);
                                            int Check_id2 = details5[j].id;
                                            var details6 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == Check_id2).ToList();
                                            for (int k = 0; k < details6.Count; k++)
                                            {
                                                abc.Add(details6[k]);
                                            }
                                        }

                                    }


                                }
                                else if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null)
                                {

                                    var details4 = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.claim_year == Year).OrderByDescending(x => x.id).ToList();//total list

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_new_DLI3.Where(x => x.old_id == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);
                                            int Check_id2 = details5[j].id;
                                            var details6 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == Check_id2).ToList();
                                            for (int k = 0; k < details6.Count; k++)
                                            {
                                                abc.Add(details6[k]);
                                            }
                                        }
                                    }

                                }
                                else if (State != "0" && State != "" && State != null)
                                {
                                    var details4 = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State).OrderByDescending(x => x.id).ToList();//total list

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_new_DLI3.Where(x => x.old_id == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);
                                            int Check_id2 = details5[j].id;
                                            var details6 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == Check_id2).ToList();
                                            for (int k = 0; k < details6.Count; k++)
                                            {
                                                abc.Add(details6[k]);
                                            }
                                        }

                                    }


                                }

                            }
                        }
                        else
                        {
                            if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
                            {
                                var details4 = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.claim_year == Year && x.month == month).OrderByDescending(x => x.id).ToList();//total list

                                for (int i = 0; i < details4.Count; i++)
                                {
                                    abc.Add(details4[i]);
                                    int Check_id = details4[i].id;
                                    var details5 = ABE.obj_abhy_new_DLI3.Where(x => x.old_id == Check_id).ToList();
                                    for (int j = 0; j < details5.Count; j++)
                                    {
                                        abc.Add(details5[j]);
                                        int Check_id2 = details5[j].id;
                                        var details6 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == Check_id2).ToList();
                                        for (int k = 0; k < details6.Count; k++)
                                        {
                                            abc.Add(details6[k]);
                                        }
                                    }
                                }


                            }
                            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null)
                            {

                                var details4 = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.claim_year == Year).OrderByDescending(x => x.id).ToList();//total list

                                for (int i = 0; i < details4.Count; i++)
                                {
                                    abc.Add(details4[i]);
                                    int Check_id = details4[i].id;
                                    var details5 = ABE.obj_abhy_new_DLI3.Where(x => x.old_id == Check_id).ToList();
                                    for (int j = 0; j < details5.Count; j++)
                                    {
                                        abc.Add(details5[j]);
                                        int Check_id2 = details5[j].id;
                                        var details6 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == Check_id2).ToList();
                                        for (int k = 0; k < details6.Count; k++)
                                        {
                                            abc.Add(details6[k]);
                                        }
                                    }
                                }

                            }
                            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                            {

                                var details4 = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram).OrderByDescending(x => x.id).ToList();//total list

                                for (int i = 0; i < details4.Count; i++)
                                {
                                    abc.Add(details4[i]);
                                    int Check_id = details4[i].id;
                                    var details5 = ABE.obj_abhy_new_DLI3.Where(x => x.old_id == Check_id).ToList();
                                    for (int j = 0; j < details5.Count; j++)
                                    {
                                        abc.Add(details5[j]);
                                        int Check_id2 = details5[j].id;
                                        var details6 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == Check_id2).ToList();
                                        for (int k = 0; k < details6.Count; k++)
                                        {
                                            abc.Add(details6[k]);
                                        }
                                    }

                                }

                            }
                            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Year != "0" && Year != "" && Year != null)
                            {

                                var details4 = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.claim_year == Year).OrderByDescending(x => x.id).ToList();//total list

                                for (int i = 0; i < details4.Count; i++)
                                {
                                    abc.Add(details4[i]);
                                    int Check_id = details4[i].id;
                                    var details5 = ABE.obj_abhy_new_DLI3.Where(x => x.old_id == Check_id).ToList();
                                    for (int j = 0; j < details5.Count; j++)
                                    {
                                        abc.Add(details5[j]);
                                        int Check_id2 = details5[j].id;
                                        var details6 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == Check_id2).ToList();
                                        for (int k = 0; k < details6.Count; k++)
                                        {
                                            abc.Add(details6[k]);
                                        }
                                    }
                                }

                            }
                            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                            {
                                var details4 = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).OrderByDescending(x => x.id).ToList();//total list

                                for (int i = 0; i < details4.Count; i++)
                                {
                                    abc.Add(details4[i]);
                                    int Check_id = details4[i].id;
                                    var details5 = ABE.obj_abhy_new_DLI3.Where(x => x.old_id == Check_id).ToList();
                                    for (int j = 0; j < details5.Count; j++)
                                    {
                                        abc.Add(details5[j]);
                                        int Check_id2 = details5[j].id;
                                        var details6 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == Check_id2).ToList();
                                        for (int k = 0; k < details6.Count; k++)
                                        {
                                            abc.Add(details6[k]);
                                        }
                                    }

                                }


                            }
                            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null)
                            {

                                var details4 = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.claim_year == Year).OrderByDescending(x => x.id).ToList();//total list

                                for (int i = 0; i < details4.Count; i++)
                                {
                                    abc.Add(details4[i]);
                                    int Check_id = details4[i].id;
                                    var details5 = ABE.obj_abhy_new_DLI3.Where(x => x.old_id == Check_id).ToList();
                                    for (int j = 0; j < details5.Count; j++)
                                    {
                                        abc.Add(details5[j]);
                                        int Check_id2 = details5[j].id;
                                        var details6 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == Check_id2).ToList();
                                        for (int k = 0; k < details6.Count; k++)
                                        {
                                            abc.Add(details6[k]);
                                        }
                                    }
                                }

                            }
                            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                            {

                                var details4 = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist).OrderByDescending(x => x.id).ToList();//total list

                                for (int i = 0; i < details4.Count; i++)
                                {
                                    abc.Add(details4[i]);
                                    int Check_id = details4[i].id;
                                    var details5 = ABE.obj_abhy_new_DLI3.Where(x => x.old_id == Check_id).ToList();
                                    for (int j = 0; j < details5.Count; j++)
                                    {
                                        abc.Add(details5[j]);
                                        int Check_id2 = details5[j].id;
                                        var details6 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == Check_id2).ToList();
                                        for (int k = 0; k < details6.Count; k++)
                                        {
                                            abc.Add(details6[k]);
                                        }
                                    }

                                }


                            }
                            else if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null)
                            {

                                var details4 = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.claim_year == Year).OrderByDescending(x => x.id).ToList();//total list

                                for (int i = 0; i < details4.Count; i++)
                                {
                                    abc.Add(details4[i]);
                                    int Check_id = details4[i].id;
                                    var details5 = ABE.obj_abhy_new_DLI3.Where(x => x.old_id == Check_id).ToList();
                                    for (int j = 0; j < details5.Count; j++)
                                    {
                                        abc.Add(details5[j]);
                                        int Check_id2 = details5[j].id;
                                        var details6 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == Check_id2).ToList();
                                        for (int k = 0; k < details6.Count; k++)
                                        {
                                            abc.Add(details6[k]);
                                        }
                                    }
                                }

                            }
                            else if (State != "0" && State != "" && State != null)
                            {
                                var details4 = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State).OrderByDescending(x => x.id).ToList();//total list

                                for (int i = 0; i < details4.Count; i++)
                                {
                                    abc.Add(details4[i]);
                                    int Check_id = details4[i].id;
                                    var details5 = ABE.obj_abhy_new_DLI3.Where(x => x.old_id == Check_id).ToList();
                                    for (int j = 0; j < details5.Count; j++)
                                    {
                                        abc.Add(details5[j]);
                                        int Check_id2 = details5[j].id;
                                        var details6 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == Check_id2).ToList();
                                        for (int k = 0; k < details6.Count; k++)
                                        {
                                            abc.Add(details6[k]);
                                        }
                                    }

                                }


                            }

                        }
                    }


                    //ViewBag.Totalpages = Math.Ceiling(abc / 100.0);
                    //Session["PageNumber"] = PageNumber;
                    //abc = abc.Skip((PageNumber - 1) * 100).Take(100).ToList();					
                    var jsonresult = Json(abc, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;

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
        public ActionResult Demand_report_data()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    //var result = js.Deserialize<abhy_wsp_funding_source>(Data);
                    List<abhy_new_DLI3> get_data = new List<abhy_new_DLI3>();
                    List<abhy_new_DLI3_new> get_data_new = new List<abhy_new_DLI3_new>();

                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();
                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    var Year = Session["yea"].ToString();
                    var demand_va = Session["demand_v"].ToString();
                    var demand_val = Session["demand_v"].ToString();
                    var ddldemand = Session["ddldem"].ToString();
                    var month = "0";

                    List<dynamic> abc = new List<dynamic>();

                    if (State == "All" && demand_va == "0")
                    {
                        var details4 = ABE.obj_abhy_wsp_funding_source.OrderByDescending(x => x.id).ToList();
                        for (int i = 0; i < details4.Count; i++)
                        {
                            abc.Add(details4[i]);
                            int Check_id = details4[i].id;
                            var details5 = ABE.obj_abhy_new_DLI3.Where(x => x.old_id == Check_id).ToList();
                            for (int j = 0; j < details5.Count; j++)
                            {
                                abc.Add(details5[j]);
                                int Check_id2 = details5[j].id;
                                var details6 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == Check_id2).ToList();
                                for (int k = 0; k < details6.Count; k++)
                                {
                                    abc.Add(details6[k]);
                                }
                            }

                        }

                    }
                    else if (State == "All" && demand_va != "All")
                    {
                        var details4 = ABE.obj_abhy_wsp_funding_source.Where(x => x.type == demand_va).OrderByDescending(x => x.id).ToList();
                        for (int i = 0; i < details4.Count; i++)
                        {
                            abc.Add(details4[i]);
                            int Check_id = details4[i].id;
                            var details5 = ABE.obj_abhy_new_DLI3.Where(x => x.old_id == Check_id).ToList();
                            for (int j = 0; j < details5.Count; j++)
                            {
                                abc.Add(details5[j]);
                                int Check_id2 = details5[j].id;
                                var details6 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == Check_id2).ToList();
                                for (int k = 0; k < details6.Count; k++)
                                {
                                    abc.Add(details6[k]);
                                }
                            }

                        }
                    }
                    else if (State == "All" && demand_va == "All")
                    {
                        if (Year != "0")
                        {
                            var details4 = ABE.obj_abhy_wsp_funding_source.Where(x => x.claim_year == Year).OrderByDescending(x => x.id).ToList();
                            for (int i = 0; i < details4.Count; i++)
                            {
                                abc.Add(details4[i]);
                                int Check_id = details4[i].id;
                                var details5 = ABE.obj_abhy_new_DLI3.Where(x => x.old_id == Check_id).ToList();
                                for (int j = 0; j < details5.Count; j++)
                                {
                                    abc.Add(details5[j]);
                                    int Check_id2 = details5[j].id;
                                    var details6 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == Check_id2).ToList();
                                    for (int k = 0; k < details6.Count; k++)
                                    {
                                        abc.Add(details6[k]);
                                    }
                                }

                            }



                        }
                        else
                        {
                            var details4 = ABE.obj_abhy_wsp_funding_source.OrderByDescending(x => x.id).ToList();
                            for (int i = 0; i < details4.Count; i++)
                            {
                                abc.Add(details4[i]);
                                int Check_id = details4[i].id;
                                var details5 = ABE.obj_abhy_new_DLI3.Where(x => x.old_id == Check_id).ToList();
                                for (int j = 0; j < details5.Count; j++)
                                {
                                    abc.Add(details5[j]);
                                    int Check_id2 = details5[j].id;
                                    var details6 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == Check_id2).ToList();
                                    for (int k = 0; k < details6.Count; k++)
                                    {
                                        abc.Add(details6[k]);
                                    }
                                }

                            }
                        }

                    }
                    else
                    {
                        if (ddldemand != "All")
                        {
                            if (demand_val != "All" && demand_val != "0")
                            {
                                if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null && demand_val != "0" && demand_val != "" && demand_val != null)
                                {
                                    var details4 = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.claim_year == Year && x.month == month && x.type == demand_val).OrderByDescending(x => x.id).ToList();//total list

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_new_DLI3.Where(x => x.old_id == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);
                                            int Check_id2 = details5[j].id;
                                            var details6 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == Check_id2).ToList();
                                            for (int k = 0; k < details6.Count; k++)
                                            {
                                                abc.Add(details6[k]);
                                            }
                                        }
                                    }


                                }
                                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null && demand_val != "0" && demand_val != "" && demand_val != null)
                                {

                                    var details4 = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.claim_year == Year && x.type == demand_val).OrderByDescending(x => x.id).ToList();//total list

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_new_DLI3.Where(x => x.old_id == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);
                                            int Check_id2 = details5[j].id;
                                            var details6 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == Check_id2).ToList();
                                            for (int k = 0; k < details6.Count; k++)
                                            {
                                                abc.Add(details6[k]);
                                            }
                                        }
                                    }

                                }
                                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && demand_val != "0" && demand_val != "" && demand_val != null)
                                {

                                    var details4 = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.type == demand_val).OrderByDescending(x => x.id).ToList();//total list

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_new_DLI3.Where(x => x.old_id == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);

                                            int Check_id2 = details5[j].id;
                                            var details6 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == Check_id2).ToList();
                                            for (int k = 0; k < details6.Count; k++)
                                            {
                                                abc.Add(details6[k]);
                                            }
                                        }

                                    }

                                }
                                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Year != "0" && Year != "" && Year != null && demand_val != "0" && demand_val != "" && demand_val != null)
                                {

                                    var details4 = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.claim_year == Year && x.type == demand_val).OrderByDescending(x => x.id).ToList();//total list

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_new_DLI3.Where(x => x.old_id == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);
                                            int Check_id2 = details5[j].id;
                                            var details6 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == Check_id2).ToList();
                                            for (int k = 0; k < details6.Count; k++)
                                            {
                                                abc.Add(details6[k]);
                                            }
                                        }
                                    }

                                }
                                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && demand_val != "0" && demand_val != "" && demand_val != null)
                                {
                                    var details4 = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.type == demand_val).OrderByDescending(x => x.id).ToList();//total list

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_new_DLI3.Where(x => x.old_id == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);

                                            int Check_id2 = details5[j].id;
                                            var details6 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == Check_id2).ToList();
                                            for (int k = 0; k < details6.Count; k++)
                                            {
                                                abc.Add(details6[k]);
                                            }
                                        }

                                    }


                                }
                                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null && demand_val != "0" && demand_val != "" && demand_val != null)
                                {

                                    var details4 = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.claim_year == Year && x.type == demand_val).OrderByDescending(x => x.id).ToList();//total list

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_new_DLI3.Where(x => x.old_id == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);
                                            int Check_id2 = details5[j].id;
                                            var details6 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == Check_id2).ToList();
                                            for (int k = 0; k < details6.Count; k++)
                                            {
                                                abc.Add(details6[k]);
                                            }
                                        }
                                    }

                                }
                                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && demand_val != "0" && demand_val != "" && demand_val != null)
                                {

                                    var details4 = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.type == demand_val).OrderByDescending(x => x.id).ToList();//total list

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_new_DLI3.Where(x => x.old_id == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);
                                            int Check_id2 = details5[j].id;
                                            var details6 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == Check_id2).ToList();
                                            for (int k = 0; k < details6.Count; k++)
                                            {
                                                abc.Add(details6[k]);
                                            }
                                        }

                                    }


                                }
                                else if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null && demand_val != "0" && demand_val != "" && demand_val != null)
                                {

                                    var details4 = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.claim_year == Year && x.type == demand_val).OrderByDescending(x => x.id).ToList();//total list

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_new_DLI3.Where(x => x.old_id == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);
                                            int Check_id2 = details5[j].id;
                                            var details6 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == Check_id2).ToList();
                                            for (int k = 0; k < details6.Count; k++)
                                            {
                                                abc.Add(details6[k]);
                                            }
                                        }
                                    }

                                }
                                else if (State != "0" && State != "" && State != null && demand_val != "0" && demand_val != "" && demand_val != null)
                                {
                                    var details4 = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.type == demand_val).OrderByDescending(x => x.id).ToList();//total list

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_new_DLI3.Where(x => x.old_id == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);
                                            int Check_id2 = details5[j].id;
                                            var details6 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == Check_id2).ToList();
                                            for (int k = 0; k < details6.Count; k++)
                                            {
                                                abc.Add(details6[k]);
                                            }
                                        }

                                    }


                                }
                            }
                            else
                            {
                                if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
                                {
                                    var details4 = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.claim_year == Year && x.month == month).OrderByDescending(x => x.id).ToList();//total list

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_new_DLI3.Where(x => x.old_id == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);
                                            int Check_id2 = details5[j].id;
                                            var details6 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == Check_id2).ToList();
                                            for (int k = 0; k < details6.Count; k++)
                                            {
                                                abc.Add(details6[k]);
                                            }
                                        }
                                    }


                                }
                                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null)
                                {

                                    var details4 = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.claim_year == Year).OrderByDescending(x => x.id).ToList();//total list

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_new_DLI3.Where(x => x.old_id == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);
                                            int Check_id2 = details5[j].id;
                                            var details6 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == Check_id2).ToList();
                                            for (int k = 0; k < details6.Count; k++)
                                            {
                                                abc.Add(details6[k]);
                                            }
                                        }
                                    }

                                }
                                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                                {

                                    var details4 = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram).OrderByDescending(x => x.id).ToList();//total list

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_new_DLI3.Where(x => x.old_id == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);
                                            int Check_id2 = details5[j].id;
                                            var details6 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == Check_id2).ToList();
                                            for (int k = 0; k < details6.Count; k++)
                                            {
                                                abc.Add(details6[k]);
                                            }
                                        }

                                    }

                                }
                                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Year != "0" && Year != "" && Year != null)
                                {

                                    var details4 = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.claim_year == Year).OrderByDescending(x => x.id).ToList();//total list

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_new_DLI3.Where(x => x.old_id == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);
                                            int Check_id2 = details5[j].id;
                                            var details6 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == Check_id2).ToList();
                                            for (int k = 0; k < details6.Count; k++)
                                            {
                                                abc.Add(details6[k]);
                                            }
                                        }
                                    }

                                }
                                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                                {
                                    var details4 = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).OrderByDescending(x => x.id).ToList();//total list

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_new_DLI3.Where(x => x.old_id == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);
                                            int Check_id2 = details5[j].id;
                                            var details6 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == Check_id2).ToList();
                                            for (int k = 0; k < details6.Count; k++)
                                            {
                                                abc.Add(details6[k]);
                                            }
                                        }

                                    }


                                }
                                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null)
                                {

                                    var details4 = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.claim_year == Year).OrderByDescending(x => x.id).ToList();//total list

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_new_DLI3.Where(x => x.old_id == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);
                                            int Check_id2 = details5[j].id;
                                            var details6 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == Check_id2).ToList();
                                            for (int k = 0; k < details6.Count; k++)
                                            {
                                                abc.Add(details6[k]);
                                            }
                                        }
                                    }

                                }
                                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                                {

                                    var details4 = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist).OrderByDescending(x => x.id).ToList();//total list

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_new_DLI3.Where(x => x.old_id == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);
                                            int Check_id2 = details5[j].id;
                                            var details6 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == Check_id2).ToList();
                                            for (int k = 0; k < details6.Count; k++)
                                            {
                                                abc.Add(details6[k]);
                                            }
                                        }

                                    }


                                }
                                else if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null)
                                {

                                    var details4 = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.claim_year == Year).OrderByDescending(x => x.id).ToList();//total list

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_new_DLI3.Where(x => x.old_id == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);
                                            int Check_id2 = details5[j].id;
                                            var details6 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == Check_id2).ToList();
                                            for (int k = 0; k < details6.Count; k++)
                                            {
                                                abc.Add(details6[k]);
                                            }
                                        }
                                    }

                                }
                                else if (State != "0" && State != "" && State != null)
                                {
                                    var details4 = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State).OrderByDescending(x => x.id).ToList();//total list

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_new_DLI3.Where(x => x.old_id == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);
                                            int Check_id2 = details5[j].id;
                                            var details6 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == Check_id2).ToList();
                                            for (int k = 0; k < details6.Count; k++)
                                            {
                                                abc.Add(details6[k]);
                                            }
                                        }

                                    }


                                }

                            }
                        }
                        else
                        {
                            if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
                            {
                                var details4 = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.claim_year == Year && x.month == month).OrderByDescending(x => x.id).ToList();//total list

                                for (int i = 0; i < details4.Count; i++)
                                {
                                    abc.Add(details4[i]);
                                    int Check_id = details4[i].id;
                                    var details5 = ABE.obj_abhy_new_DLI3.Where(x => x.old_id == Check_id).ToList();
                                    for (int j = 0; j < details5.Count; j++)
                                    {
                                        abc.Add(details5[j]);
                                        int Check_id2 = details5[j].id;
                                        var details6 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == Check_id2).ToList();
                                        for (int k = 0; k < details6.Count; k++)
                                        {
                                            abc.Add(details6[k]);
                                        }
                                    }
                                }


                            }
                            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null)
                            {

                                var details4 = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.claim_year == Year).OrderByDescending(x => x.id).ToList();//total list

                                for (int i = 0; i < details4.Count; i++)
                                {
                                    abc.Add(details4[i]);
                                    int Check_id = details4[i].id;
                                    var details5 = ABE.obj_abhy_new_DLI3.Where(x => x.old_id == Check_id).ToList();
                                    for (int j = 0; j < details5.Count; j++)
                                    {
                                        abc.Add(details5[j]);
                                        int Check_id2 = details5[j].id;
                                        var details6 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == Check_id2).ToList();
                                        for (int k = 0; k < details6.Count; k++)
                                        {
                                            abc.Add(details6[k]);
                                        }
                                    }
                                }

                            }
                            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                            {

                                var details4 = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram).OrderByDescending(x => x.id).ToList();//total list

                                for (int i = 0; i < details4.Count; i++)
                                {
                                    abc.Add(details4[i]);
                                    int Check_id = details4[i].id;
                                    var details5 = ABE.obj_abhy_new_DLI3.Where(x => x.old_id == Check_id).ToList();
                                    for (int j = 0; j < details5.Count; j++)
                                    {
                                        abc.Add(details5[j]);
                                        int Check_id2 = details5[j].id;
                                        var details6 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == Check_id2).ToList();
                                        for (int k = 0; k < details6.Count; k++)
                                        {
                                            abc.Add(details6[k]);
                                        }
                                    }

                                }

                            }
                            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Year != "0" && Year != "" && Year != null)
                            {

                                var details4 = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.claim_year == Year).OrderByDescending(x => x.id).ToList();//total list

                                for (int i = 0; i < details4.Count; i++)
                                {
                                    abc.Add(details4[i]);
                                    int Check_id = details4[i].id;
                                    var details5 = ABE.obj_abhy_new_DLI3.Where(x => x.old_id == Check_id).ToList();
                                    for (int j = 0; j < details5.Count; j++)
                                    {
                                        abc.Add(details5[j]);
                                        int Check_id2 = details5[j].id;
                                        var details6 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == Check_id2).ToList();
                                        for (int k = 0; k < details6.Count; k++)
                                        {
                                            abc.Add(details6[k]);
                                        }
                                    }
                                }

                            }
                            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                            {
                                var details4 = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).OrderByDescending(x => x.id).ToList();//total list

                                for (int i = 0; i < details4.Count; i++)
                                {
                                    abc.Add(details4[i]);
                                    int Check_id = details4[i].id;
                                    var details5 = ABE.obj_abhy_new_DLI3.Where(x => x.old_id == Check_id).ToList();
                                    for (int j = 0; j < details5.Count; j++)
                                    {
                                        abc.Add(details5[j]);
                                        int Check_id2 = details5[j].id;
                                        var details6 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == Check_id2).ToList();
                                        for (int k = 0; k < details6.Count; k++)
                                        {
                                            abc.Add(details6[k]);
                                        }
                                    }

                                }


                            }
                            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null)
                            {

                                var details4 = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.claim_year == Year).OrderByDescending(x => x.id).ToList();//total list

                                for (int i = 0; i < details4.Count; i++)
                                {
                                    abc.Add(details4[i]);
                                    int Check_id = details4[i].id;
                                    var details5 = ABE.obj_abhy_new_DLI3.Where(x => x.old_id == Check_id).ToList();
                                    for (int j = 0; j < details5.Count; j++)
                                    {
                                        abc.Add(details5[j]);
                                        int Check_id2 = details5[j].id;
                                        var details6 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == Check_id2).ToList();
                                        for (int k = 0; k < details6.Count; k++)
                                        {
                                            abc.Add(details6[k]);
                                        }
                                    }
                                }

                            }
                            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                            {

                                var details4 = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist).OrderByDescending(x => x.id).ToList();//total list

                                for (int i = 0; i < details4.Count; i++)
                                {
                                    abc.Add(details4[i]);
                                    int Check_id = details4[i].id;
                                    var details5 = ABE.obj_abhy_new_DLI3.Where(x => x.old_id == Check_id).ToList();
                                    for (int j = 0; j < details5.Count; j++)
                                    {
                                        abc.Add(details5[j]);
                                        int Check_id2 = details5[j].id;
                                        var details6 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == Check_id2).ToList();
                                        for (int k = 0; k < details6.Count; k++)
                                        {
                                            abc.Add(details6[k]);
                                        }
                                    }

                                }


                            }
                            else if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null)
                            {

                                var details4 = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.claim_year == Year).OrderByDescending(x => x.id).ToList();//total list

                                for (int i = 0; i < details4.Count; i++)
                                {
                                    abc.Add(details4[i]);
                                    int Check_id = details4[i].id;
                                    var details5 = ABE.obj_abhy_new_DLI3.Where(x => x.old_id == Check_id).ToList();
                                    for (int j = 0; j < details5.Count; j++)
                                    {
                                        abc.Add(details5[j]);
                                        int Check_id2 = details5[j].id;
                                        var details6 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == Check_id2).ToList();
                                        for (int k = 0; k < details6.Count; k++)
                                        {
                                            abc.Add(details6[k]);
                                        }
                                    }
                                }

                            }
                            else if (State != "0" && State != "" && State != null)
                            {
                                var details4 = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State).OrderByDescending(x => x.id).ToList();//total list

                                for (int i = 0; i < details4.Count; i++)
                                {
                                    abc.Add(details4[i]);
                                    int Check_id = details4[i].id;
                                    var details5 = ABE.obj_abhy_new_DLI3.Where(x => x.old_id == Check_id).ToList();
                                    for (int j = 0; j < details5.Count; j++)
                                    {
                                        abc.Add(details5[j]);
                                        int Check_id2 = details5[j].id;
                                        var details6 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == Check_id2).ToList();
                                        for (int k = 0; k < details6.Count; k++)
                                        {
                                            abc.Add(details6[k]);
                                        }
                                    }

                                }


                            }

                        }
                    }

                    var jsonResult = Json(abc, JsonRequestBehavior.AllowGet);
                    jsonResult.MaxJsonLength = int.MaxValue;
                    return jsonResult;
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
        public ActionResult Save_data(string state, string dist, string description, HttpPostedFileBase image)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    int k = 0;
                    var Data = new abhy_DLI3_upload_document();
                    if (Data != null)
                    {


                        Data.state = state;
                        Data.district = dist;
                        Data.description = description;
                        Data.entry_date = DateTime.Now;
                        Data.user_id = Session["Officer"].ToString();
                        Malicious_File_Upload_Restriction obj_Validate = new Malicious_File_Upload_Restriction();
                        if (image != null)
                        {
                            ++k;
                            string ext = Path.GetExtension(image.FileName).ToUpper();
                            string name = Path.GetFileNameWithoutExtension(image.FileName);
                            string FileName = name + DateTime.Now.Ticks + k + ext;
                            //bool flag = obj_Validate.CheckValidFile(image, allowed_file_format);

                            if (image.FileName != null)
                            {
                                String FileExt = Path.GetExtension(image.FileName).ToUpper();
                                if (FileExt != ".PDF" && FileExt != ".XLSX" && FileExt != ".XLS")
                                {
                                    return Json("Choose Valid image", JsonRequestBehavior.AllowGet);

                                }
                                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");
                                path = path + FileName;
                                string[] count = image.FileName.Split('.');
                                string[] count_special = image.FileName.Split('#', '$');
                                if (count.Length != 2)
                                {
                                    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                }
                                if (count_special.Length >= 2)
                                {
                                    return Json("Please use the proper file name without special characters (# , $) .", JsonRequestBehavior.AllowGet);
                                }
                                image.SaveAs(path);
                                Data.image_name = FileName;
                                Data.image_path = "/Ataljalimages/" + FileName;

                            }
                        }

                        ABE.obj_abhy_DLI3_upload_document.Add(Data);
                        ABE.SaveChanges();
                        return Json("Successfully Saved", JsonRequestBehavior.AllowGet);

                    }

                }
                catch (Exception ex)
                {
                    return Json("");

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult Delete_data_upload(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_DLI3_upload_document>(Data);

                    if (result.id != 0)
                    {
                        var TKID = Convert.ToInt32(result.id);
                        var Data1 = ABE.obj_abhy_DLI3_upload_document.Where(x => x.id == TKID).SingleOrDefault();
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
        public ActionResult Update_upload(string id, string state, string dist, string description, HttpPostedFileBase image)
        {

            if (Session["UserId"] != null)
            {
                try
                {
                    int k = 0;
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_abhy_DLI3_upload_document.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {
                        Data.state = state;
                        Data.district = dist;
                        Data.description = description;

                        Malicious_File_Upload_Restriction obj_Validate = new Malicious_File_Upload_Restriction();
                        if (image != null)
                        {
                            ++k;
                            string ext = Path.GetExtension(image.FileName);
                            string name = Path.GetFileNameWithoutExtension(image.FileName);
                            string FileName = name + DateTime.Now.Ticks + k + ext;
                            //bool flag = obj_Validate.CheckValidFile(image, allowed_file_format);

                            if (image.FileName != null)
                            {
                                String FileExt = Path.GetExtension(image.FileName).ToUpper();
                                if (FileExt != ".PDF" && FileExt != ".XLSX" && FileExt != ".XLS")
                                {
                                    return Json("Choose Valid image", JsonRequestBehavior.AllowGet);

                                }
                                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");
                                path = path + FileName;
                                string[] count = image.FileName.Split('.');
                                string[] count_special = image.FileName.Split('#', '$');
                                if (count.Length != 2)
                                {
                                    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                }
                                if (count_special.Length >= 2)
                                {
                                    return Json("Please use the proper file name without special characters (# , $) .", JsonRequestBehavior.AllowGet);
                                }
                                image.SaveAs(path);
                                Data.image_name = FileName;
                                Data.image_path = "/Ataljalimages/" + FileName;

                            }
                        }


                        Data.entry_date = DateTime.Now;
                        Data.user_id = Session["Officer"].ToString();


                        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = ABE.SaveChanges();
                        if (A > 0)
                        {
                            return Json("Successfully Update");
                        }


                    }

                }
                catch (Exception ex)
                {
                    return Json("");

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult Data_upload_doc(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<Pagenum>(Data);

                    var State = result.statename;
                    var Dist = result.districtname;

                    List<abhy_DLI3_upload_document> details = new List<abhy_DLI3_upload_document>();

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        details = ABE.obj_abhy_DLI3_upload_document.Where(x => x.state == State && x.district == Dist).OrderByDescending(x => x.id).ToList();//total list                      
                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        details = ABE.obj_abhy_DLI3_upload_document.Where(x => x.state == State).OrderByDescending(x => x.id).ToList();//total list                      
                    }

                    if (details.Count != 0)
                    {
                        var jsonresult = Json(details, JsonRequestBehavior.AllowGet);
                        jsonresult.MaxJsonLength = int.MaxValue;
                        return jsonresult;
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
        public ActionResult approve_data_upload(string id)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_abhy_DLI3_upload_document.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        Data.id = ID;
                        Data.approval = "Dist";
                        Data.reject = "";


                        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = ABE.SaveChanges();
                        if (A > 0)
                        {
                            return Json("Submit To SPMU");
                        }
                        else
                        {
                            return Json("Not Approved");
                        }
                    }

                }
                catch (Exception ex)
                {
                    return Json("Not Approved");

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult approve_data_state_upload(string id)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_abhy_DLI3_upload_document.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        Data.id = ID;
                        Data.approval = "State";
                        Data.reject = "";


                        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = ABE.SaveChanges();
                        if (A > 0)
                        {
                            return Json("Approved Successfully");
                        }
                        else
                        {
                            return Json("Not Approved");
                        }
                    }

                }
                catch (Exception ex)
                {
                    return Json("Not Approved");

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult reject_data_upload(string id, string reject)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_abhy_DLI3_upload_document.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        Data.id = ID;
                        Data.approval = "Reject";
                        Data.reject = reject;


                        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = ABE.SaveChanges();
                        if (A > 0)
                        {
                            return Json("Rejected Successfully");
                        }
                        else
                        {
                            return Json("Not Rejected");
                        }
                    }

                }
                catch (Exception ex)
                {
                    return Json("Not Approved");

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }


        [HttpPost]
        public ActionResult Save_data_new(string old_id, string typeother, string type, string year, string departmentother, string schemeother, string latitude, string longitude, string state_name, string district_name, string block_name, string gp_name, string department_name, string scheme_name, string proposed_area, string approximate_cost, string work_start, string work_completion, string department_name_new, string scheme_name_new, string area_converged, string expenditure_incurred, string ataljal_incentive, string remark)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(old_id);
                    //var Data = ABE.obj_abhy_new_DLI3.Where(x => x.id == ID).SingleOrDefault();
                    var Data = new abhy_new_DLI3();
                    if (Data != null)
                    {

                        Data.old_id = ID;
                        Data.state_name = state_name;
                        Data.district_name = district_name;
                        Data.block_name = block_name;
                        Data.gp_name = gp_name;
                        Data.year = year;
                        Data.type = type;
                        Data.typeother = typeother;
                        Data.latitude = latitude;
                        Data.longitude = longitude;
                        Data.department_name = department_name;
                        Data.scheme_name = scheme_name;
                        Data.proposed_area = proposed_area;
                        Data.approximate_cost = approximate_cost;
                        //Data.approximate_fund = approximate_fund;
                        //Data.gap_funding = gap_funding;
                        Data.work_start_date = work_start;
                        Data.work_completion_date = work_completion;
                        Data.department_name_new = department_name_new;
                        Data.scheme_name_new = scheme_name_new;
                        Data.area_converged_new = area_converged;
                        Data.expenditure_incurred = expenditure_incurred;
                        Data.ataljal_incentive_share = ataljal_incentive;
                        Data.remark = remark;
                        Data.new_row = "1";

                        if (departmentother != null)
                        {
                            Data.departmentother = departmentother;
                        }
                        else
                        {
                            Data.departmentother = "";
                        }
                        if (schemeother != null)
                        {
                            Data.schemeother = schemeother;
                        }
                        else
                        {
                            Data.schemeother = "";
                        }
                        Data.entry_date = DateTime.Now;
                        Data.user_id = Session["Officer"].ToString();


                        ABE.obj_abhy_new_DLI3.Add(Data);
                        ABE.SaveChanges();
                        return Json("Successfully Saved", JsonRequestBehavior.AllowGet);

                    }

                }
                catch (Exception ex)
                {
                    return Json("");

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult Save_data_multiple_row(string id, string typeother, string type, string year, string departmentother, string schemeother, string latitude, string longitude, string state_name, string district_name, string block_name, string gp_name, string department_name, string scheme_name, string proposed_area, string approximate_cost, string work_start, string work_completion, string department_name_new, string scheme_name_new, string area_converged, string expenditure_incurred, string ataljal_incentive, string remark)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = new abhy_new_DLI3();
                    if (Data != null)
                    {

                        Data.multiple_new_row = ID;
                        Data.state_name = state_name;
                        Data.district_name = district_name;
                        Data.block_name = block_name;
                        Data.gp_name = gp_name;
                        Data.year = year;
                        Data.type = type;
                        Data.typeother = typeother;
                        Data.latitude = latitude;
                        Data.longitude = longitude;
                        Data.department_name = department_name;
                        Data.scheme_name = scheme_name;
                        Data.proposed_area = proposed_area;
                        Data.approximate_cost = approximate_cost;
                        Data.work_start_date = work_start;
                        Data.work_completion_date = work_completion;
                        Data.department_name_new = department_name_new;
                        Data.scheme_name_new = scheme_name_new;
                        Data.area_converged_new = area_converged;
                        Data.expenditure_incurred = expenditure_incurred;
                        Data.ataljal_incentive_share = ataljal_incentive;
                        Data.remark = remark;
                        Data.new_row = "2";

                        if (departmentother != null)
                        {
                            Data.departmentother = departmentother;
                        }
                        else
                        {
                            Data.departmentother = "";
                        }
                        if (schemeother != null)
                        {
                            Data.schemeother = schemeother;
                        }
                        else
                        {
                            Data.schemeother = "";
                        }
                        Data.entry_date = DateTime.Now;
                        Data.user_id = Session["Officer"].ToString();

                        //if (imagenew != null)
                        //{

                        //    if (imagenew.FileName != null)
                        //    {
                        //        String FileExt = Path.GetExtension(imagenew.FileName).ToUpper();
                        //        if (FileExt != ".JPG" && FileExt != ".PNG" && FileExt != ".PDF" && FileExt != ".XLS")
                        //        {
                        //            return Json("Choose Valid image", JsonRequestBehavior.AllowGet);

                        //        }
                        //        string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                        //        string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");
                        //        path = path + imagenew.FileName;
                        //        string[] count = imagenew.FileName.Split('.');
                        //        if (count.Length != 2)
                        //        {
                        //            return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                        //        }
                        //        imagenew.SaveAs(path);
                        //        Data.image_name = imagenew.FileName;
                        //        Data.image_path = "/Ataljalimages/" + imagenew.FileName;

                        //    }
                        //}

                        ABE.obj_abhy_new_DLI3.Add(Data);
                        ABE.SaveChanges();
                        return Json("Successfully Saved", JsonRequestBehavior.AllowGet);

                    }

                }
                catch (Exception ex)
                {
                    return Json("");

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult approve_data(string id)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_abhy_new_DLI3.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        Data.id = ID;
                        Data.approval = "District";
                        Data.reject = "";


                        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = ABE.SaveChanges();
                        if (A > 0)
                        {
                            return Json("Submit To SPMU");
                        }
                        else
                        {
                            return Json("Not Approved");
                        }
                    }

                }
                catch (Exception ex)
                {
                    return Json("Not Approved");

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult approve_data_state(string id)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_abhy_new_DLI3.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        Data.id = ID;
                        Data.approval = "State";
                        Data.reject = "";


                        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = ABE.SaveChanges();
                        if (A > 0)
                        {
                            return Json("Approved Successfully");
                        }
                        else
                        {
                            return Json("Not Approved");
                        }
                    }

                }
                catch (Exception ex)
                {
                    return Json("Not Approved");

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult reject_data(string id, string reject)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_abhy_new_DLI3.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        Data.id = ID;
                        Data.approval = "Reject";
                        Data.reject = reject;


                        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = ABE.SaveChanges();
                        if (A > 0)
                        {
                            return Json("Rejected Successfully");
                        }
                        else
                        {
                            return Json("Not Rejected");
                        }
                    }

                }
                catch (Exception ex)
                {
                    return Json("Not Approved");

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }


        [HttpPost]
        public ActionResult Update_data(string id)
        {

            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_abhy_wsp_funding_source.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        Data.id = ID;
                        Data.new_table_entry = "1";
                        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = ABE.SaveChanges();
                        if (A > 0)
                        {
                            return Json("");
                        }
                        else
                        {
                            return Json("");
                        }
                    }

                }
                catch (Exception ex)
                {
                    return Json("");

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }


        [HttpPost]
        public ActionResult Update(string id, string typeother, string type, string year, string departmentother, string schemeother, string latitude, string longitude, string state_name, string district_name, string block_name, string gp_name, string department_name, string scheme_name, string proposed_area, string approximate_cost, string work_start, string work_completion, string department_name_new, string scheme_name_new, string area_converged, string expenditure_incurred, string ataljal_incentive, string remark)
        {

            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_abhy_new_DLI3.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {
                        Data.state_name = state_name;
                        Data.district_name = district_name;
                        Data.block_name = block_name;
                        Data.gp_name = gp_name;
                        Data.year = year;
                        Data.type = type;
                        Data.typeother = typeother;
                        Data.latitude = latitude;
                        Data.longitude = longitude;
                        Data.department_name = department_name;
                        Data.scheme_name = scheme_name;
                        Data.proposed_area = proposed_area;
                        Data.approximate_cost = approximate_cost;
                        Data.work_start_date = work_start;
                        Data.work_completion_date = work_completion;
                        Data.department_name_new = department_name_new;
                        Data.scheme_name_new = scheme_name_new;
                        Data.area_converged_new = area_converged;
                        Data.expenditure_incurred = expenditure_incurred;
                        Data.ataljal_incentive_share = ataljal_incentive;
                        Data.remark = remark;
                        if (departmentother != null)
                        {
                            Data.departmentother = departmentother;
                        }
                        else
                        {
                            Data.departmentother = "";
                        }
                        if (schemeother != null)
                        {
                            Data.schemeother = schemeother;
                        }
                        else
                        {
                            Data.schemeother = "";
                        }
                        Data.entry_date = DateTime.Now;
                        Data.user_id = Session["Officer"].ToString();


                        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = ABE.SaveChanges();
                        if (A > 0)
                        {
                            return Json("Successfully Update");
                        }

                        //ABE.obj_abhy_new_DLI3.Add(Data);
                        //ABE.SaveChanges();
                        //return Json("Successfully Update", JsonRequestBehavior.AllowGet);

                    }

                }
                catch (Exception ex)
                {
                    return Json("");

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult Delete_data(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_new_DLI3>(Data);

                    if (result.id != 0)
                    {
                        var TKID = Convert.ToInt32(result.id);
                        var Data1 = ABE.obj_abhy_new_DLI3.Where(x => x.id == TKID).SingleOrDefault();
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
        public ActionResult Update_data_new(string id)
        {

            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_abhy_wsp_funding_source.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        Data.id = ID;
                        Data.new_table_entry = "0";
                        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = ABE.SaveChanges();
                        if (A > 0)
                        {
                            return Json("");
                        }
                        else
                        {
                            return Json("");
                        }
                    }

                }
                catch (Exception ex)
                {
                    return Json("");

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult Data_get_supply(string Data, string ddldeman, string supply_va)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<Pagenum>(Data);

                    var State = result.statename;
                    var Dist = result.districtname;
                    var Block = result.blockname;
                    var Gram = result.gpname;
                    var Year = result.year;
                    var month = result.month;
                    var supply_val = supply_va;
                    var ddldemand = ddldeman;
                    var PageNumber = result.PageNumber;

                    List<dynamic> abc = new List<dynamic>();

                    if (State == "All" && supply_val == "0")
                    {
                        var details4 = ABE.obj_supply_AR_Structures.OrderByDescending(x => x.id).ToList();
                        var details6 = ABE.obj_supply_water_conservation.OrderByDescending(x => x.id).ToList();
                        var details8 = ABE.obj_supply_any_other_intervention.OrderByDescending(x => x.id).ToList();

                        for (int i = 0; i < details4.Count; i++)
                        {
                            abc.Add(details4[i]);
                            int Check_id = details4[i].id;
                            var details5 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id1 == Check_id).ToList();
                            for (int j = 0; j < details5.Count; j++)
                            {
                                abc.Add(details5[j]);
                            }

                        }
                        for (int i = 0; i < details6.Count; i++)
                        {
                            abc.Add(details6[i]);
                            int Check_id = details6[i].id;
                            var details7 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id2 == Check_id).ToList();
                            for (int j = 0; j < details7.Count; j++)
                            {
                                abc.Add(details7[j]);
                            }

                        }
                        for (int i = 0; i < details8.Count; i++)
                        {
                            abc.Add(details8[i]);
                            int Check_id = details8[i].id;
                            var details9 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id3 == Check_id).ToList();
                            for (int j = 0; j < details9.Count; j++)
                            {
                                abc.Add(details9[j]);
                            }

                        }


                    }
                    else if (State == "All" && supply_val != "All")
                    {
                        if (supply_val == "Artificial Recharge Structures")
                        {
                            var details4 = ABE.obj_supply_AR_Structures.OrderByDescending(x => x.id).ToList();
                            for (int i = 0; i < details4.Count; i++)
                            {
                                abc.Add(details4[i]);
                                int Check_id = details4[i].id;
                                var details5 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id1 == Check_id).ToList();
                                for (int j = 0; j < details5.Count; j++)
                                {
                                    abc.Add(details5[j]);
                                }

                            }

                        }
                        else if (supply_val == "Water Conservation Structures")
                        {
                            var details6 = ABE.obj_supply_water_conservation.OrderByDescending(x => x.id).ToList();

                            for (int i = 0; i < details6.Count; i++)
                            {
                                abc.Add(details6[i]);
                                int Check_id = details6[i].id;
                                var details7 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id2 == Check_id).ToList();
                                for (int j = 0; j < details7.Count; j++)
                                {
                                    abc.Add(details7[j]);
                                }

                            }

                        }
                        else if (supply_val == "Any Other Intervention")
                        {
                            var details8 = ABE.obj_supply_any_other_intervention.OrderByDescending(x => x.id).ToList();
                            for (int i = 0; i < details8.Count; i++)
                            {
                                abc.Add(details8[i]);
                                int Check_id = details8[i].id;
                                var details9 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id3 == Check_id).ToList();
                                for (int j = 0; j < details9.Count; j++)
                                {
                                    abc.Add(details9[j]);
                                }

                            }
                        }
                    }
                    else if (State == "All" && supply_val == "All")
                    {
                        if (Year != "0")
                        {
                            var details4 = ABE.obj_supply_AR_Structures.Where(x => x.sp_year == Year).OrderByDescending(x => x.id).ToList();
                            var details6 = ABE.obj_supply_water_conservation.Where(x => x.wc_year == Year).OrderByDescending(x => x.id).ToList();
                            var details8 = ABE.obj_supply_any_other_intervention.Where(x => x.any_year == Year).OrderByDescending(x => x.id).ToList();

                            for (int i = 0; i < details4.Count; i++)
                            {
                                abc.Add(details4[i]);
                                int Check_id = details4[i].id;
                                var details5 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id1 == Check_id).ToList();
                                for (int j = 0; j < details5.Count; j++)
                                {
                                    abc.Add(details5[j]);
                                }

                            }
                            for (int i = 0; i < details6.Count; i++)
                            {
                                abc.Add(details6[i]);
                                int Check_id = details6[i].id;
                                var details7 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id2 == Check_id).ToList();
                                for (int j = 0; j < details7.Count; j++)
                                {
                                    abc.Add(details7[j]);
                                }

                            }
                            for (int i = 0; i < details8.Count; i++)
                            {
                                abc.Add(details8[i]);
                                int Check_id = details8[i].id;
                                var details9 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id3 == Check_id).ToList();
                                for (int j = 0; j < details9.Count; j++)
                                {
                                    abc.Add(details9[j]);
                                }

                            }
                        }
                        else
                        {
                            var details4 = ABE.obj_supply_AR_Structures.OrderByDescending(x => x.id).ToList();
                            var details6 = ABE.obj_supply_water_conservation.OrderByDescending(x => x.id).ToList();
                            var details8 = ABE.obj_supply_any_other_intervention.OrderByDescending(x => x.id).ToList();

                            for (int i = 0; i < details4.Count; i++)
                            {
                                abc.Add(details4[i]);
                                int Check_id = details4[i].id;
                                var details5 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id1 == Check_id).ToList();
                                for (int j = 0; j < details5.Count; j++)
                                {
                                    abc.Add(details5[j]);
                                }

                            }
                            for (int i = 0; i < details6.Count; i++)
                            {
                                abc.Add(details6[i]);
                                int Check_id = details6[i].id;
                                var details7 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id1 == Check_id).ToList();
                                for (int j = 0; j < details7.Count; j++)
                                {
                                    abc.Add(details7[j]);
                                }

                            }
                            for (int i = 0; i < details8.Count; i++)
                            {
                                abc.Add(details8[i]);
                                int Check_id = details8[i].id;
                                var details9 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id1 == Check_id).ToList();
                                for (int j = 0; j < details9.Count; j++)
                                {
                                    abc.Add(details9[j]);
                                }

                            }

                        }
                    }
                    else
                    {
                        if (ddldemand != "All")
                        {
                            if (supply_val != "All" && supply_val != "0")
                            {
                                if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && supply_val != "0" && supply_val != "" && supply_val != null && Year != "0" && Year != "" && Year != null)
                                {
                                    var details4 = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.sp_year == Year && supply_val == "Artificial Recharge Structures").OrderByDescending(x => x.id).ToList();
                                    var details6 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.wc_year == Year && supply_val == "Water Conservation Structures").OrderByDescending(x => x.id).ToList();
                                    var details8 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.any_year == Year && supply_val == "Any Other Intervention").OrderByDescending(x => x.id).ToList();

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id1 == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);
                                        }

                                    }
                                    for (int i = 0; i < details6.Count; i++)
                                    {
                                        abc.Add(details6[i]);
                                        int Check_id = details6[i].id;
                                        var details7 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id2 == Check_id).ToList();
                                        for (int j = 0; j < details7.Count; j++)
                                        {
                                            abc.Add(details7[j]);
                                        }

                                    }
                                    for (int i = 0; i < details8.Count; i++)
                                    {
                                        abc.Add(details8[i]);
                                        int Check_id = details8[i].id;
                                        var details9 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id3 == Check_id).ToList();
                                        for (int j = 0; j < details9.Count; j++)
                                        {
                                            abc.Add(details9[j]);
                                        }

                                    }




                                }
                                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && supply_val != "0" && supply_val != "" && supply_val != null)
                                {
                                    var details4 = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && supply_val == "Artificial Recharge Structures").OrderByDescending(x => x.id).ToList();
                                    var details6 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && supply_val == "Water Conservation Structures").OrderByDescending(x => x.id).ToList();
                                    var details8 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && supply_val == "Any Other Intervention").OrderByDescending(x => x.id).ToList();

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id1 == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);
                                        }

                                    }
                                    for (int i = 0; i < details6.Count; i++)
                                    {
                                        abc.Add(details6[i]);
                                        int Check_id = details6[i].id;
                                        var details7 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id2 == Check_id).ToList();
                                        for (int j = 0; j < details7.Count; j++)
                                        {
                                            abc.Add(details7[j]);
                                        }

                                    }
                                    for (int i = 0; i < details8.Count; i++)
                                    {
                                        abc.Add(details8[i]);
                                        int Check_id = details8[i].id;
                                        var details9 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id3 == Check_id).ToList();
                                        for (int j = 0; j < details9.Count; j++)
                                        {
                                            abc.Add(details9[j]);
                                        }

                                    }

                                }
                                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && supply_val != "0" && supply_val != "" && supply_val != null && Year != "0" && Year != "" && Year != null)
                                {
                                    var details4 = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.sp_year == Year && supply_val == "Artificial Recharge Structures").OrderByDescending(x => x.id).ToList();
                                    var details6 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.wc_year == Year && supply_val == "Water Conservation Structures").OrderByDescending(x => x.id).ToList();
                                    var details8 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.any_year == Year && supply_val == "Any Other Intervention").OrderByDescending(x => x.id).ToList();

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id1 == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);
                                        }

                                    }
                                    for (int i = 0; i < details6.Count; i++)
                                    {
                                        abc.Add(details6[i]);
                                        int Check_id = details6[i].id;
                                        var details7 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id2 == Check_id).ToList();
                                        for (int j = 0; j < details7.Count; j++)
                                        {
                                            abc.Add(details7[j]);
                                        }

                                    }
                                    for (int i = 0; i < details8.Count; i++)
                                    {
                                        abc.Add(details8[i]);
                                        int Check_id = details8[i].id;
                                        var details9 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id3 == Check_id).ToList();
                                        for (int j = 0; j < details9.Count; j++)
                                        {
                                            abc.Add(details9[j]);
                                        }

                                    }




                                }
                                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && supply_val != "0" && supply_val != "" && supply_val != null)
                                {
                                    var details4 = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && supply_val == "Artificial Recharge Structures").OrderByDescending(x => x.id).ToList();
                                    var details6 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && supply_val == "Water Conservation Structures").OrderByDescending(x => x.id).ToList();
                                    var details8 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && supply_val == "Any Other Intervention").OrderByDescending(x => x.id).ToList();

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id1 == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);
                                        }

                                    }
                                    for (int i = 0; i < details6.Count; i++)
                                    {
                                        abc.Add(details6[i]);
                                        int Check_id = details6[i].id;
                                        var details7 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id2 == Check_id).ToList();
                                        for (int j = 0; j < details7.Count; j++)
                                        {
                                            abc.Add(details7[j]);
                                        }

                                    }
                                    for (int i = 0; i < details8.Count; i++)
                                    {
                                        abc.Add(details8[i]);
                                        int Check_id = details8[i].id;
                                        var details9 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id3 == Check_id).ToList();
                                        for (int j = 0; j < details9.Count; j++)
                                        {
                                            abc.Add(details9[j]);
                                        }

                                    }

                                }
                                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && supply_val != "0" && supply_val != "" && supply_val != null && Year != "0" && Year != "" && Year != null)
                                {
                                    var details4 = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.sp_year == Year && supply_val == "Artificial Recharge Structures").OrderByDescending(x => x.id).ToList();
                                    var details6 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.wc_year == Year && supply_val == "Water Conservation Structures").OrderByDescending(x => x.id).ToList();
                                    var details8 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.any_year == Year && supply_val == "Any Other Intervention").OrderByDescending(x => x.id).ToList();

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id1 == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);
                                        }

                                    }
                                    for (int i = 0; i < details6.Count; i++)
                                    {
                                        abc.Add(details6[i]);
                                        int Check_id = details6[i].id;
                                        var details7 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id2 == Check_id).ToList();
                                        for (int j = 0; j < details7.Count; j++)
                                        {
                                            abc.Add(details7[j]);
                                        }

                                    }
                                    for (int i = 0; i < details8.Count; i++)
                                    {
                                        abc.Add(details8[i]);
                                        int Check_id = details8[i].id;
                                        var details9 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id3 == Check_id).ToList();
                                        for (int j = 0; j < details9.Count; j++)
                                        {
                                            abc.Add(details9[j]);
                                        }

                                    }




                                }
                                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && supply_val != "0" && supply_val != "" && supply_val != null)
                                {
                                    var details4 = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && supply_val == "Artificial Recharge Structures").OrderByDescending(x => x.id).ToList();
                                    var details6 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && supply_val == "Water Conservation Structures").OrderByDescending(x => x.id).ToList();
                                    var details8 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && supply_val == "Any Other Intervention").OrderByDescending(x => x.id).ToList();

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id1 == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);
                                        }

                                    }
                                    for (int i = 0; i < details6.Count; i++)
                                    {
                                        abc.Add(details6[i]);
                                        int Check_id = details6[i].id;
                                        var details7 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id2 == Check_id).ToList();
                                        for (int j = 0; j < details7.Count; j++)
                                        {
                                            abc.Add(details7[j]);
                                        }

                                    }
                                    for (int i = 0; i < details8.Count; i++)
                                    {
                                        abc.Add(details8[i]);
                                        int Check_id = details8[i].id;
                                        var details9 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id3 == Check_id).ToList();
                                        for (int j = 0; j < details9.Count; j++)
                                        {
                                            abc.Add(details9[j]);
                                        }

                                    }

                                }
                                else if (State != "0" && State != "" && State != null && supply_val != "0" && supply_val != "" && supply_val != null && Year != "0" && Year != "" && Year != null)
                                {
                                    var details4 = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.sp_year == Year && supply_val == "Artificial Recharge Structures").OrderByDescending(x => x.id).ToList();
                                    var details6 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.wc_year == Year && supply_val == "Water Conservation Structures").OrderByDescending(x => x.id).ToList();
                                    var details8 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.any_year == Year && supply_val == "Any Other Intervention").OrderByDescending(x => x.id).ToList();

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id1 == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);
                                        }

                                    }
                                    for (int i = 0; i < details6.Count; i++)
                                    {
                                        abc.Add(details6[i]);
                                        int Check_id = details6[i].id;
                                        var details7 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id2 == Check_id).ToList();
                                        for (int j = 0; j < details7.Count; j++)
                                        {
                                            abc.Add(details7[j]);
                                        }

                                    }
                                    for (int i = 0; i < details8.Count; i++)
                                    {
                                        abc.Add(details8[i]);
                                        int Check_id = details8[i].id;
                                        var details9 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id3 == Check_id).ToList();
                                        for (int j = 0; j < details9.Count; j++)
                                        {
                                            abc.Add(details9[j]);
                                        }

                                    }




                                }
                                else if (State != "0" && State != "" && State != null && supply_val != "0" && supply_val != "" && supply_val != null)
                                {
                                    var details4 = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && supply_val == "Artificial Recharge Structures").OrderByDescending(x => x.id).ToList();
                                    var details6 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && supply_val == "Water Conservation Structures").OrderByDescending(x => x.id).ToList();
                                    var details8 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && supply_val == "Any Other Intervention").OrderByDescending(x => x.id).ToList();

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id1 == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);
                                        }

                                    }
                                    for (int i = 0; i < details6.Count; i++)
                                    {
                                        abc.Add(details6[i]);
                                        int Check_id = details6[i].id;
                                        var details7 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id2 == Check_id).ToList();
                                        for (int j = 0; j < details7.Count; j++)
                                        {
                                            abc.Add(details7[j]);
                                        }

                                    }
                                    for (int i = 0; i < details8.Count; i++)
                                    {
                                        abc.Add(details8[i]);
                                        int Check_id = details8[i].id;
                                        var details9 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id3 == Check_id).ToList();
                                        for (int j = 0; j < details9.Count; j++)
                                        {
                                            abc.Add(details9[j]);
                                        }

                                    }


                                }

                            }
                            else
                            {
                                if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null)
                                {
                                    var details4 = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.sp_year == Year).OrderByDescending(x => x.id).ToList();
                                    var details6 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.wc_year == Year).OrderByDescending(x => x.id).ToList();
                                    var details8 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.any_year == Year).OrderByDescending(x => x.id).ToList();

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id1 == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);
                                        }

                                    }
                                    for (int i = 0; i < details6.Count; i++)
                                    {
                                        abc.Add(details6[i]);
                                        int Check_id = details6[i].id;
                                        var details7 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id2 == Check_id).ToList();
                                        for (int j = 0; j < details7.Count; j++)
                                        {
                                            abc.Add(details7[j]);
                                        }

                                    }
                                    for (int i = 0; i < details8.Count; i++)
                                    {
                                        abc.Add(details8[i]);
                                        int Check_id = details8[i].id;
                                        var details9 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id3 == Check_id).ToList();
                                        for (int j = 0; j < details9.Count; j++)
                                        {
                                            abc.Add(details9[j]);
                                        }

                                    }




                                }
                                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                                {
                                    var details4 = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).OrderByDescending(x => x.id).ToList();
                                    var details6 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).OrderByDescending(x => x.id).ToList();
                                    var details8 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).OrderByDescending(x => x.id).ToList();

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id1 == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);
                                        }

                                    }
                                    for (int i = 0; i < details6.Count; i++)
                                    {
                                        abc.Add(details6[i]);
                                        int Check_id = details6[i].id;
                                        var details7 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id2 == Check_id).ToList();
                                        for (int j = 0; j < details7.Count; j++)
                                        {
                                            abc.Add(details7[j]);
                                        }

                                    }
                                    for (int i = 0; i < details8.Count; i++)
                                    {
                                        abc.Add(details8[i]);
                                        int Check_id = details8[i].id;
                                        var details9 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id3 == Check_id).ToList();
                                        for (int j = 0; j < details9.Count; j++)
                                        {
                                            abc.Add(details9[j]);
                                        }

                                    }

                                }
                                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Year != "0" && Year != "" && Year != null)
                                {
                                    var details4 = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.sp_year == Year).OrderByDescending(x => x.id).ToList();
                                    var details6 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.wc_year == Year).OrderByDescending(x => x.id).ToList();
                                    var details8 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.any_year == Year).OrderByDescending(x => x.id).ToList();

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id1 == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);
                                        }

                                    }
                                    for (int i = 0; i < details6.Count; i++)
                                    {
                                        abc.Add(details6[i]);
                                        int Check_id = details6[i].id;
                                        var details7 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id2 == Check_id).ToList();
                                        for (int j = 0; j < details7.Count; j++)
                                        {
                                            abc.Add(details7[j]);
                                        }

                                    }
                                    for (int i = 0; i < details8.Count; i++)
                                    {
                                        abc.Add(details8[i]);
                                        int Check_id = details8[i].id;
                                        var details9 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id3 == Check_id).ToList();
                                        for (int j = 0; j < details9.Count; j++)
                                        {
                                            abc.Add(details9[j]);
                                        }

                                    }




                                }
                                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                                {
                                    var details4 = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).OrderByDescending(x => x.id).ToList();
                                    var details6 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).OrderByDescending(x => x.id).ToList();
                                    var details8 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).OrderByDescending(x => x.id).ToList();

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id1 == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);
                                        }

                                    }
                                    for (int i = 0; i < details6.Count; i++)
                                    {
                                        abc.Add(details6[i]);
                                        int Check_id = details6[i].id;
                                        var details7 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id2 == Check_id).ToList();
                                        for (int j = 0; j < details7.Count; j++)
                                        {
                                            abc.Add(details7[j]);
                                        }

                                    }
                                    for (int i = 0; i < details8.Count; i++)
                                    {
                                        abc.Add(details8[i]);
                                        int Check_id = details8[i].id;
                                        var details9 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id3 == Check_id).ToList();
                                        for (int j = 0; j < details9.Count; j++)
                                        {
                                            abc.Add(details9[j]);
                                        }

                                    }

                                }
                                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null)
                                {
                                    var details4 = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.sp_year == Year).OrderByDescending(x => x.id).ToList();
                                    var details6 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.wc_year == Year).OrderByDescending(x => x.id).ToList();
                                    var details8 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.any_year == Year).OrderByDescending(x => x.id).ToList();

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id1 == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);
                                        }

                                    }
                                    for (int i = 0; i < details6.Count; i++)
                                    {
                                        abc.Add(details6[i]);
                                        int Check_id = details6[i].id;
                                        var details7 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id2 == Check_id).ToList();
                                        for (int j = 0; j < details7.Count; j++)
                                        {
                                            abc.Add(details7[j]);
                                        }

                                    }
                                    for (int i = 0; i < details8.Count; i++)
                                    {
                                        abc.Add(details8[i]);
                                        int Check_id = details8[i].id;
                                        var details9 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id3 == Check_id).ToList();
                                        for (int j = 0; j < details9.Count; j++)
                                        {
                                            abc.Add(details9[j]);
                                        }

                                    }




                                }
                                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                                {
                                    var details4 = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist).OrderByDescending(x => x.id).ToList();
                                    var details6 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist).OrderByDescending(x => x.id).ToList();
                                    var details8 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist).OrderByDescending(x => x.id).ToList();

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id1 == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);
                                        }

                                    }
                                    for (int i = 0; i < details6.Count; i++)
                                    {
                                        abc.Add(details6[i]);
                                        int Check_id = details6[i].id;
                                        var details7 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id2 == Check_id).ToList();
                                        for (int j = 0; j < details7.Count; j++)
                                        {
                                            abc.Add(details7[j]);
                                        }

                                    }
                                    for (int i = 0; i < details8.Count; i++)
                                    {
                                        abc.Add(details8[i]);
                                        int Check_id = details8[i].id;
                                        var details9 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id3 == Check_id).ToList();
                                        for (int j = 0; j < details9.Count; j++)
                                        {
                                            abc.Add(details9[j]);
                                        }

                                    }

                                }
                                else if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null)
                                {
                                    var details4 = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.sp_year == Year).OrderByDescending(x => x.id).ToList();
                                    var details6 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.wc_year == Year).OrderByDescending(x => x.id).ToList();
                                    var details8 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.any_year == Year).OrderByDescending(x => x.id).ToList();

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id1 == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);
                                        }

                                    }
                                    for (int i = 0; i < details6.Count; i++)
                                    {
                                        abc.Add(details6[i]);
                                        int Check_id = details6[i].id;
                                        var details7 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id2 == Check_id).ToList();
                                        for (int j = 0; j < details7.Count; j++)
                                        {
                                            abc.Add(details7[j]);
                                        }

                                    }
                                    for (int i = 0; i < details8.Count; i++)
                                    {
                                        abc.Add(details8[i]);
                                        int Check_id = details8[i].id;
                                        var details9 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id3 == Check_id).ToList();
                                        for (int j = 0; j < details9.Count; j++)
                                        {
                                            abc.Add(details9[j]);
                                        }

                                    }




                                }
                                else if (State != "0" && State != "" && State != null)
                                {
                                    var details4 = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State).OrderByDescending(x => x.id).ToList();
                                    var details6 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State).OrderByDescending(x => x.id).ToList();
                                    var details8 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State).OrderByDescending(x => x.id).ToList();

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id1 == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);
                                        }

                                    }
                                    for (int i = 0; i < details6.Count; i++)
                                    {
                                        abc.Add(details6[i]);
                                        int Check_id = details6[i].id;
                                        var details7 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id2 == Check_id).ToList();
                                        for (int j = 0; j < details7.Count; j++)
                                        {
                                            abc.Add(details7[j]);
                                        }

                                    }
                                    for (int i = 0; i < details8.Count; i++)
                                    {
                                        abc.Add(details8[i]);
                                        int Check_id = details8[i].id;
                                        var details9 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id3 == Check_id).ToList();
                                        for (int j = 0; j < details9.Count; j++)
                                        {
                                            abc.Add(details9[j]);
                                        }

                                    }


                                }

                            }
                        }
                        else
                        {
                            if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null)
                            {
                                var details4 = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.sp_year == Year).OrderByDescending(x => x.id).ToList();
                                var details6 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.wc_year == Year).OrderByDescending(x => x.id).ToList();
                                var details8 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.any_year == Year).OrderByDescending(x => x.id).ToList();

                                for (int i = 0; i < details4.Count; i++)
                                {
                                    abc.Add(details4[i]);
                                    int Check_id = details4[i].id;
                                    var details5 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id1 == Check_id).ToList();
                                    for (int j = 0; j < details5.Count; j++)
                                    {
                                        abc.Add(details5[j]);
                                    }

                                }
                                for (int i = 0; i < details6.Count; i++)
                                {
                                    abc.Add(details6[i]);
                                    int Check_id = details6[i].id;
                                    var details7 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id2 == Check_id).ToList();
                                    for (int j = 0; j < details7.Count; j++)
                                    {
                                        abc.Add(details7[j]);
                                    }

                                }
                                for (int i = 0; i < details8.Count; i++)
                                {
                                    abc.Add(details8[i]);
                                    int Check_id = details8[i].id;
                                    var details9 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id3 == Check_id).ToList();
                                    for (int j = 0; j < details9.Count; j++)
                                    {
                                        abc.Add(details9[j]);
                                    }

                                }




                            }
                            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                            {
                                var details4 = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).OrderByDescending(x => x.id).ToList();
                                var details6 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).OrderByDescending(x => x.id).ToList();
                                var details8 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).OrderByDescending(x => x.id).ToList();

                                for (int i = 0; i < details4.Count; i++)
                                {
                                    abc.Add(details4[i]);
                                    int Check_id = details4[i].id;
                                    var details5 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id1 == Check_id).ToList();
                                    for (int j = 0; j < details5.Count; j++)
                                    {
                                        abc.Add(details5[j]);
                                    }

                                }
                                for (int i = 0; i < details6.Count; i++)
                                {
                                    abc.Add(details6[i]);
                                    int Check_id = details6[i].id;
                                    var details7 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id2 == Check_id).ToList();
                                    for (int j = 0; j < details7.Count; j++)
                                    {
                                        abc.Add(details7[j]);
                                    }

                                }
                                for (int i = 0; i < details8.Count; i++)
                                {
                                    abc.Add(details8[i]);
                                    int Check_id = details8[i].id;
                                    var details9 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id3 == Check_id).ToList();
                                    for (int j = 0; j < details9.Count; j++)
                                    {
                                        abc.Add(details9[j]);
                                    }

                                }

                            }
                            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Year != "0" && Year != "" && Year != null)
                            {
                                var details4 = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.sp_year == Year).OrderByDescending(x => x.id).ToList();
                                var details6 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.wc_year == Year).OrderByDescending(x => x.id).ToList();
                                var details8 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.any_year == Year).OrderByDescending(x => x.id).ToList();

                                for (int i = 0; i < details4.Count; i++)
                                {
                                    abc.Add(details4[i]);
                                    int Check_id = details4[i].id;
                                    var details5 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id1 == Check_id).ToList();
                                    for (int j = 0; j < details5.Count; j++)
                                    {
                                        abc.Add(details5[j]);
                                    }

                                }
                                for (int i = 0; i < details6.Count; i++)
                                {
                                    abc.Add(details6[i]);
                                    int Check_id = details6[i].id;
                                    var details7 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id2 == Check_id).ToList();
                                    for (int j = 0; j < details7.Count; j++)
                                    {
                                        abc.Add(details7[j]);
                                    }

                                }
                                for (int i = 0; i < details8.Count; i++)
                                {
                                    abc.Add(details8[i]);
                                    int Check_id = details8[i].id;
                                    var details9 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id3 == Check_id).ToList();
                                    for (int j = 0; j < details9.Count; j++)
                                    {
                                        abc.Add(details9[j]);
                                    }

                                }




                            }
                            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                            {
                                var details4 = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).OrderByDescending(x => x.id).ToList();
                                var details6 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).OrderByDescending(x => x.id).ToList();
                                var details8 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).OrderByDescending(x => x.id).ToList();

                                for (int i = 0; i < details4.Count; i++)
                                {
                                    abc.Add(details4[i]);
                                    int Check_id = details4[i].id;
                                    var details5 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id1 == Check_id).ToList();
                                    for (int j = 0; j < details5.Count; j++)
                                    {
                                        abc.Add(details5[j]);
                                    }

                                }
                                for (int i = 0; i < details6.Count; i++)
                                {
                                    abc.Add(details6[i]);
                                    int Check_id = details6[i].id;
                                    var details7 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id2 == Check_id).ToList();
                                    for (int j = 0; j < details7.Count; j++)
                                    {
                                        abc.Add(details7[j]);
                                    }

                                }
                                for (int i = 0; i < details8.Count; i++)
                                {
                                    abc.Add(details8[i]);
                                    int Check_id = details8[i].id;
                                    var details9 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id3 == Check_id).ToList();
                                    for (int j = 0; j < details9.Count; j++)
                                    {
                                        abc.Add(details9[j]);
                                    }

                                }

                            }
                            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null)
                            {
                                var details4 = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.sp_year == Year).OrderByDescending(x => x.id).ToList();
                                var details6 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.wc_year == Year).OrderByDescending(x => x.id).ToList();
                                var details8 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.any_year == Year).OrderByDescending(x => x.id).ToList();

                                for (int i = 0; i < details4.Count; i++)
                                {
                                    abc.Add(details4[i]);
                                    int Check_id = details4[i].id;
                                    var details5 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id1 == Check_id).ToList();
                                    for (int j = 0; j < details5.Count; j++)
                                    {
                                        abc.Add(details5[j]);
                                    }

                                }
                                for (int i = 0; i < details6.Count; i++)
                                {
                                    abc.Add(details6[i]);
                                    int Check_id = details6[i].id;
                                    var details7 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id2 == Check_id).ToList();
                                    for (int j = 0; j < details7.Count; j++)
                                    {
                                        abc.Add(details7[j]);
                                    }

                                }
                                for (int i = 0; i < details8.Count; i++)
                                {
                                    abc.Add(details8[i]);
                                    int Check_id = details8[i].id;
                                    var details9 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id3 == Check_id).ToList();
                                    for (int j = 0; j < details9.Count; j++)
                                    {
                                        abc.Add(details9[j]);
                                    }

                                }




                            }
                            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                            {
                                var details4 = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist).OrderByDescending(x => x.id).ToList();
                                var details6 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist).OrderByDescending(x => x.id).ToList();
                                var details8 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist).OrderByDescending(x => x.id).ToList();

                                for (int i = 0; i < details4.Count; i++)
                                {
                                    abc.Add(details4[i]);
                                    int Check_id = details4[i].id;
                                    var details5 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id1 == Check_id).ToList();
                                    for (int j = 0; j < details5.Count; j++)
                                    {
                                        abc.Add(details5[j]);
                                    }

                                }
                                for (int i = 0; i < details6.Count; i++)
                                {
                                    abc.Add(details6[i]);
                                    int Check_id = details6[i].id;
                                    var details7 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id2 == Check_id).ToList();
                                    for (int j = 0; j < details7.Count; j++)
                                    {
                                        abc.Add(details7[j]);
                                    }

                                }
                                for (int i = 0; i < details8.Count; i++)
                                {
                                    abc.Add(details8[i]);
                                    int Check_id = details8[i].id;
                                    var details9 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id3 == Check_id).ToList();
                                    for (int j = 0; j < details9.Count; j++)
                                    {
                                        abc.Add(details9[j]);
                                    }

                                }

                            }
                            else if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null)
                            {
                                var details4 = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.sp_year == Year).OrderByDescending(x => x.id).ToList();
                                var details6 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.wc_year == Year).OrderByDescending(x => x.id).ToList();
                                var details8 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.any_year == Year).OrderByDescending(x => x.id).ToList();

                                for (int i = 0; i < details4.Count; i++)
                                {
                                    abc.Add(details4[i]);
                                    int Check_id = details4[i].id;
                                    var details5 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id1 == Check_id).ToList();
                                    for (int j = 0; j < details5.Count; j++)
                                    {
                                        abc.Add(details5[j]);
                                    }

                                }
                                for (int i = 0; i < details6.Count; i++)
                                {
                                    abc.Add(details6[i]);
                                    int Check_id = details6[i].id;
                                    var details7 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id2 == Check_id).ToList();
                                    for (int j = 0; j < details7.Count; j++)
                                    {
                                        abc.Add(details7[j]);
                                    }

                                }
                                for (int i = 0; i < details8.Count; i++)
                                {
                                    abc.Add(details8[i]);
                                    int Check_id = details8[i].id;
                                    var details9 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id3 == Check_id).ToList();
                                    for (int j = 0; j < details9.Count; j++)
                                    {
                                        abc.Add(details9[j]);
                                    }

                                }




                            }
                            else if (State != "0" && State != "" && State != null)
                            {
                                var details4 = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State).OrderByDescending(x => x.id).ToList();
                                var details6 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State).OrderByDescending(x => x.id).ToList();
                                var details8 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State).OrderByDescending(x => x.id).ToList();

                                for (int i = 0; i < details4.Count; i++)
                                {
                                    abc.Add(details4[i]);
                                    int Check_id = details4[i].id;
                                    var details5 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id1 == Check_id).ToList();
                                    for (int j = 0; j < details5.Count; j++)
                                    {
                                        abc.Add(details5[j]);
                                    }

                                }
                                for (int i = 0; i < details6.Count; i++)
                                {
                                    abc.Add(details6[i]);
                                    int Check_id = details6[i].id;
                                    var details7 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id2 == Check_id).ToList();
                                    for (int j = 0; j < details7.Count; j++)
                                    {
                                        abc.Add(details7[j]);
                                    }

                                }
                                for (int i = 0; i < details8.Count; i++)
                                {
                                    abc.Add(details8[i]);
                                    int Check_id = details8[i].id;
                                    var details9 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id3 == Check_id).ToList();
                                    for (int j = 0; j < details9.Count; j++)
                                    {
                                        abc.Add(details9[j]);
                                    }

                                }


                            }
                        }

                    }
                    //abc = abc.Skip((PageNumber - 1) * 100).Take(100).ToList();	
                    var jsonresult = Json(abc, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;

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

        public ActionResult Supply_excel(string State, string Dist, string Block, string Gram, string Year, string supply_val, string ddldemand)
        {
            var month = "0";

            var DL3Data = ABE.obj_vw_abhy_supplyside_DLI3.ToList();

            List<vw_abhy_supplyside_DLI3> get_data = new List<vw_abhy_supplyside_DLI3>();
            List<vw_abhy_new_Supply_side_new> get_data_new = new List<vw_abhy_new_Supply_side_new>();
            vw_abhy_new_Supply_side_new allData = new vw_abhy_new_Supply_side_new();
            List<vw_abhy_new_Supply_side_new> finaldata = new List<vw_abhy_new_Supply_side_new>();

            if (State == "All" && supply_val == "0")
            {
                var ddetails = ABE.obj_vw_supply_AR_Structures.Where(x => x.new_table_entry_a != "1").OrderByDescending(x => x.id).ToList();
                allData.Su = ddetails;

                var ddetails1 = ABE.obj_vw_supply_water_conservation.Where(x => x.new_table_entry_b != "1").OrderByDescending(x => x.id).ToList();
                allData.Su1 = ddetails1;

                var ddetails2 = ABE.obj_vw_supply_any_other_intervention.Where(x => x.new_table_entry_c != "1").OrderByDescending(x => x.id).ToList();
                allData.Su2 = ddetails2;

                var updateddata = ABE.obj_vw_supply_AR_Structures.Where(x => x.new_table_entry_a == "1").ToList();
                var updateddata1 = ABE.obj_vw_supply_water_conservation.Where(x => x.new_table_entry_b == "1").ToList();
                var updateddata2 = ABE.obj_vw_supply_any_other_intervention.Where(x => x.new_table_entry_c == "1").ToList();


                for (int i = 0; i < updateddata.Count; i++)
                {
                    var data = DL3Data.Where(x => x.old_id1 == updateddata[i].id).FirstOrDefault();
                    if (data != null)
                    {
                        get_data.Add(data);
                    }

                }
                for (int i = 0; i < updateddata1.Count; i++)
                {
                    var data = DL3Data.Where(x => x.old_id2 == updateddata1[i].id).FirstOrDefault();
                    if (data != null)
                    {
                        get_data.Add(data);
                    }

                }
                for (int i = 0; i < updateddata2.Count; i++)
                {
                    var data = DL3Data.Where(x => x.old_id3 == updateddata2[i].id).FirstOrDefault();
                    if (data != null)
                    {
                        get_data.Add(data);
                    }

                }


                allData.Su3 = get_data;
                finaldata.Add(allData);
            }
            else if (State == "All" && supply_val != "All")
            {
                if (supply_val == "Artifician Recharge Structures")
                {
                    var ddetails = ABE.obj_vw_supply_AR_Structures.Where(x => x.new_table_entry_a != "1").OrderByDescending(x => x.id).ToList();
                    allData.Su = ddetails;

                    var updateddata = ABE.obj_vw_supply_AR_Structures.Where(x => x.new_table_entry_a == "1").ToList();
                    for (int i = 0; i < updateddata.Count; i++)
                    {
                        var data = DL3Data.Where(x => x.old_id1 == updateddata[i].id).FirstOrDefault();
                        if (data != null)
                        {
                            get_data.Add(data);
                        }

                    }
                    allData.Su3 = get_data;
                    finaldata.Add(allData);

                }
                else if (supply_val == "Water Conservation Structures")
                {
                    var ddetails1 = ABE.obj_vw_supply_water_conservation.Where(x => x.new_table_entry_b != "1").OrderByDescending(x => x.id).ToList();
                    allData.Su1 = ddetails1;

                    var updateddata1 = ABE.obj_vw_supply_water_conservation.Where(x => x.new_table_entry_b == "1").ToList();

                    for (int i = 0; i < updateddata1.Count; i++)
                    {
                        var data = DL3Data.Where(x => x.old_id2 == updateddata1[i].id).FirstOrDefault();
                        if (data != null)
                        {
                            get_data.Add(data);
                        }

                    }
                    allData.Su3 = get_data;
                    finaldata.Add(allData);
                }
                else if (supply_val == "Any Other Intervention")
                {

                    var ddetails2 = ABE.obj_vw_supply_any_other_intervention.Where(x => x.new_table_entry_c != "1").OrderByDescending(x => x.id).ToList();
                    allData.Su2 = ddetails2;

                    var updateddata2 = ABE.obj_vw_supply_any_other_intervention.Where(x => x.new_table_entry_c == "1").ToList();

                    for (int i = 0; i < updateddata2.Count; i++)
                    {
                        var data = DL3Data.Where(x => x.old_id3 == updateddata2[i].id).FirstOrDefault();
                        if (data != null)
                        {
                            get_data.Add(data);
                        }

                    }

                    allData.Su3 = get_data;
                    finaldata.Add(allData);

                }
            }
            else if (State == "All" && supply_val == "All")
            {
                if (Year != "0")
                {
                    var ddetails = ABE.obj_vw_supply_AR_Structures.Where(x => x.new_table_entry_a != "1" && x.sp_year == Year).OrderByDescending(x => x.id).ToList();
                    allData.Su = ddetails;

                    var ddetails1 = ABE.obj_vw_supply_water_conservation.Where(x => x.new_table_entry_b != "1" && x.wc_year == Year).OrderByDescending(x => x.id).ToList();
                    allData.Su1 = ddetails1;

                    var ddetails2 = ABE.obj_vw_supply_any_other_intervention.Where(x => x.new_table_entry_c != "1" && x.any_year == Year).OrderByDescending(x => x.id).ToList();
                    allData.Su2 = ddetails2;

                    var updateddata = ABE.obj_vw_supply_AR_Structures.Where(x => x.new_table_entry_a == "1" && x.sp_year == Year).ToList();
                    var updateddata1 = ABE.obj_vw_supply_water_conservation.Where(x => x.new_table_entry_b == "1" && x.wc_year == Year).ToList();
                    var updateddata2 = ABE.obj_vw_supply_any_other_intervention.Where(x => x.new_table_entry_c == "1" && x.any_year == Year).ToList();


                    for (int i = 0; i < updateddata.Count; i++)
                    {
                        var data = DL3Data.Where(x => x.old_id1 == updateddata[i].id).FirstOrDefault();
                        if (data != null)
                        {
                            get_data.Add(data);
                        }

                    }
                    for (int i = 0; i < updateddata1.Count; i++)
                    {
                        var data = DL3Data.Where(x => x.old_id2 == updateddata1[i].id).FirstOrDefault();
                        if (data != null)
                        {
                            get_data.Add(data);
                        }

                    }
                    for (int i = 0; i < updateddata2.Count; i++)
                    {
                        var data = DL3Data.Where(x => x.old_id3 == updateddata2[i].id).FirstOrDefault();
                        if (data != null)
                        {
                            get_data.Add(data);
                        }

                    }


                    allData.Su3 = get_data;
                    finaldata.Add(allData);
                }
                else
                {
                    var ddetails = ABE.obj_vw_supply_AR_Structures.Where(x => x.new_table_entry_a != "1").OrderByDescending(x => x.id).ToList();
                    allData.Su = ddetails;

                    var ddetails1 = ABE.obj_vw_supply_water_conservation.Where(x => x.new_table_entry_b != "1").OrderByDescending(x => x.id).ToList();
                    allData.Su1 = ddetails1;

                    var ddetails2 = ABE.obj_vw_supply_any_other_intervention.Where(x => x.new_table_entry_c != "1").OrderByDescending(x => x.id).ToList();
                    allData.Su2 = ddetails2;

                    var updateddata = ABE.obj_vw_supply_AR_Structures.Where(x => x.new_table_entry_a == "1").ToList();
                    var updateddata1 = ABE.obj_vw_supply_water_conservation.Where(x => x.new_table_entry_b == "1").ToList();
                    var updateddata2 = ABE.obj_vw_supply_any_other_intervention.Where(x => x.new_table_entry_c == "1").ToList();


                    for (int i = 0; i < updateddata.Count; i++)
                    {
                        var data = DL3Data.Where(x => x.old_id1 == updateddata[i].id).FirstOrDefault();
                        if (data != null)
                        {
                            get_data.Add(data);
                        }

                    }
                    for (int i = 0; i < updateddata1.Count; i++)
                    {
                        var data = DL3Data.Where(x => x.old_id2 == updateddata1[i].id).FirstOrDefault();
                        if (data != null)
                        {
                            get_data.Add(data);
                        }

                    }
                    for (int i = 0; i < updateddata2.Count; i++)
                    {
                        var data = DL3Data.Where(x => x.old_id3 == updateddata2[i].id).FirstOrDefault();
                        if (data != null)
                        {
                            get_data.Add(data);
                        }

                    }


                    allData.Su3 = get_data;
                    finaldata.Add(allData);
                }
            }
            else
            {
                if (ddldemand != "All")
                {
                    if (supply_val != "All" && supply_val != "0")
                    {

                        if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && supply_val != "0" && supply_val != "" && supply_val != null && Year != "0" && Year != "" && Year != null)
                        {
                            var ddetails = ABE.obj_vw_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.sp_year == Year && x.new_table_entry_a != "1" && supply_val == "Artifician Recharge Structures").OrderByDescending(x => x.id).ToList();
                            allData.Su = ddetails;

                            var ddetails1 = ABE.obj_vw_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.wc_year == Year && x.new_table_entry_b != "1" && supply_val == "Water Conservation Structures").OrderByDescending(x => x.id).ToList();
                            allData.Su1 = ddetails1;

                            var ddetails2 = ABE.obj_vw_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.any_year == Year && x.new_table_entry_c != "1" && supply_val == "Any Other Intervention").OrderByDescending(x => x.id).ToList();
                            allData.Su2 = ddetails2;

                            var updateddata = ABE.obj_vw_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.sp_year == Year && x.new_table_entry_a == "1" && supply_val == "Artifician Recharge Structures").ToList();
                            var updateddata1 = ABE.obj_vw_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.wc_year == Year && x.new_table_entry_b == "1" && supply_val == "Water Conservation Structures").ToList();
                            var updateddata2 = ABE.obj_vw_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.any_year == Year && x.new_table_entry_c == "1" && supply_val == "Any Other Intervention").ToList();


                            for (int i = 0; i < updateddata.Count; i++)
                            {
                                var data = DL3Data.Where(x => x.old_id1 == updateddata[i].id).FirstOrDefault();
                                if (data != null)
                                {
                                    get_data.Add(data);
                                }

                            }
                            for (int i = 0; i < updateddata1.Count; i++)
                            {
                                var data = DL3Data.Where(x => x.old_id2 == updateddata1[i].id).FirstOrDefault();
                                if (data != null)
                                {
                                    get_data.Add(data);
                                }

                            }
                            for (int i = 0; i < updateddata2.Count; i++)
                            {
                                var data = DL3Data.Where(x => x.old_id3 == updateddata2[i].id).FirstOrDefault();
                                if (data != null)
                                {
                                    get_data.Add(data);
                                }

                            }


                            allData.Su3 = get_data;
                            finaldata.Add(allData);

                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && supply_val != "0" && supply_val != "" && supply_val != null)
                        {
                            var ddetails = ABE.obj_vw_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.new_table_entry_a != "1" && supply_val == "Artifician Recharge Structures").OrderByDescending(x => x.id).ToList();
                            allData.Su = ddetails;

                            var ddetails1 = ABE.obj_vw_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.new_table_entry_b != "1" && supply_val == "Water Conservation Structures").OrderByDescending(x => x.id).ToList();
                            allData.Su1 = ddetails1;

                            var ddetails2 = ABE.obj_vw_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.new_table_entry_c != "1" && supply_val == "Any Other Intervention").OrderByDescending(x => x.id).ToList();
                            allData.Su2 = ddetails2;

                            var updateddata = ABE.obj_vw_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.new_table_entry_a == "1" && supply_val == "Artifician Recharge Structures").ToList();
                            var updateddata1 = ABE.obj_vw_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.new_table_entry_b == "1" && supply_val == "Water Conservation Structures").ToList();
                            var updateddata2 = ABE.obj_vw_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.new_table_entry_c == "1" && supply_val == "Any Other Intervention").ToList();


                            for (int i = 0; i < updateddata.Count; i++)
                            {
                                var data = DL3Data.Where(x => x.old_id1 == updateddata[i].id).FirstOrDefault();
                                if (data != null)
                                {
                                    get_data.Add(data);
                                }

                            }
                            for (int i = 0; i < updateddata1.Count; i++)
                            {
                                var data = DL3Data.Where(x => x.old_id2 == updateddata1[i].id).FirstOrDefault();
                                if (data != null)
                                {
                                    get_data.Add(data);
                                }

                            }
                            for (int i = 0; i < updateddata2.Count; i++)
                            {
                                var data = DL3Data.Where(x => x.old_id3 == updateddata2[i].id).FirstOrDefault();
                                if (data != null)
                                {
                                    get_data.Add(data);
                                }

                            }


                            allData.Su3 = get_data;
                            finaldata.Add(allData);

                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && supply_val != "0" && supply_val != "" && supply_val != null && Year != "0" && Year != "" && Year != null)
                        {
                            var ddetails = ABE.obj_vw_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.sp_year == Year && x.new_table_entry_a != "1" && supply_val == "Artifician Recharge Structures").OrderByDescending(x => x.id).ToList();
                            allData.Su = ddetails;

                            var ddetails1 = ABE.obj_vw_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.wc_year == Year && x.new_table_entry_b != "1" && supply_val == "Water Conservation Structures").OrderByDescending(x => x.id).ToList();
                            allData.Su1 = ddetails1;

                            var ddetails2 = ABE.obj_vw_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.any_year == Year && x.new_table_entry_c != "1" && supply_val == "Any Other Intervention").OrderByDescending(x => x.id).ToList();
                            allData.Su2 = ddetails2;

                            var updateddata = ABE.obj_vw_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.sp_year == Year && x.new_table_entry_a == "1" && supply_val == "Artifician Recharge Structures").ToList();
                            var updateddata1 = ABE.obj_vw_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.wc_year == Year && x.new_table_entry_b == "1" && supply_val == "Water Conservation Structures").ToList();
                            var updateddata2 = ABE.obj_vw_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.any_year == Year && x.new_table_entry_c == "1" && supply_val == "Any Other Intervention").ToList();


                            for (int i = 0; i < updateddata.Count; i++)
                            {
                                var data = DL3Data.Where(x => x.old_id1 == updateddata[i].id).FirstOrDefault();
                                if (data != null)
                                {
                                    get_data.Add(data);
                                }

                            }
                            for (int i = 0; i < updateddata1.Count; i++)
                            {
                                var data = DL3Data.Where(x => x.old_id2 == updateddata1[i].id).FirstOrDefault();
                                if (data != null)
                                {
                                    get_data.Add(data);
                                }

                            }
                            for (int i = 0; i < updateddata2.Count; i++)
                            {
                                var data = DL3Data.Where(x => x.old_id3 == updateddata2[i].id).FirstOrDefault();
                                if (data != null)
                                {
                                    get_data.Add(data);
                                }

                            }


                            allData.Su3 = get_data;
                            finaldata.Add(allData);

                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && supply_val != "0" && supply_val != "" && supply_val != null)
                        {
                            var ddetails = ABE.obj_vw_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.new_table_entry_a != "1" && supply_val == "Artifician Recharge Structures").OrderByDescending(x => x.id).ToList();
                            allData.Su = ddetails;

                            var ddetails1 = ABE.obj_vw_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.new_table_entry_b != "1" && supply_val == "Water Conservation Structures").OrderByDescending(x => x.id).ToList();
                            allData.Su1 = ddetails1;

                            var ddetails2 = ABE.obj_vw_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.new_table_entry_c != "1" && supply_val == "Any Other Intervention").OrderByDescending(x => x.id).ToList();
                            allData.Su2 = ddetails2;

                            var updateddata = ABE.obj_vw_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.new_table_entry_a == "1" && supply_val == "Artifician Recharge Structures").ToList();
                            var updateddata1 = ABE.obj_vw_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.new_table_entry_b == "1" && supply_val == "Water Conservation Structures").ToList();
                            var updateddata2 = ABE.obj_vw_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.new_table_entry_c == "1" && supply_val == "Any Other Intervention").ToList();


                            for (int i = 0; i < updateddata.Count; i++)
                            {
                                var data = DL3Data.Where(x => x.old_id1 == updateddata[i].id).FirstOrDefault();
                                if (data != null)
                                {
                                    get_data.Add(data);
                                }

                            }
                            for (int i = 0; i < updateddata1.Count; i++)
                            {
                                var data = DL3Data.Where(x => x.old_id2 == updateddata1[i].id).FirstOrDefault();
                                if (data != null)
                                {
                                    get_data.Add(data);
                                }

                            }
                            for (int i = 0; i < updateddata2.Count; i++)
                            {
                                var data = DL3Data.Where(x => x.old_id3 == updateddata2[i].id).FirstOrDefault();
                                if (data != null)
                                {
                                    get_data.Add(data);
                                }

                            }


                            allData.Su3 = get_data;
                            finaldata.Add(allData);

                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && supply_val != "0" && supply_val != "" && supply_val != null && Year != "0" && Year != "" && Year != null)
                        {
                            var ddetails = ABE.obj_vw_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.sp_year == Year && x.new_table_entry_a != "1" && supply_val == "Artifician Recharge Structures").OrderByDescending(x => x.id).ToList();
                            allData.Su = ddetails;

                            var ddetails1 = ABE.obj_vw_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.wc_year == Year && x.new_table_entry_b != "1" && supply_val == "Water Conservation Structures").OrderByDescending(x => x.id).ToList();
                            allData.Su1 = ddetails1;

                            var ddetails2 = ABE.obj_vw_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.any_year == Year && x.new_table_entry_c != "1" && supply_val == "Any Other Intervention").OrderByDescending(x => x.id).ToList();
                            allData.Su2 = ddetails2;

                            var updateddata = ABE.obj_vw_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.sp_year == Year && x.new_table_entry_a == "1" && supply_val == "Artifician Recharge Structures").ToList();
                            var updateddata1 = ABE.obj_vw_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.wc_year == Year && x.new_table_entry_b == "1" && supply_val == "Water Conservation Structures").ToList();
                            var updateddata2 = ABE.obj_vw_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.any_year == Year && x.new_table_entry_c == "1" && supply_val == "Any Other Intervention").ToList();


                            for (int i = 0; i < updateddata.Count; i++)
                            {
                                var data = DL3Data.Where(x => x.old_id1 == updateddata[i].id).FirstOrDefault();
                                if (data != null)
                                {
                                    get_data.Add(data);
                                }

                            }
                            for (int i = 0; i < updateddata1.Count; i++)
                            {
                                var data = DL3Data.Where(x => x.old_id2 == updateddata1[i].id).FirstOrDefault();
                                if (data != null)
                                {
                                    get_data.Add(data);
                                }

                            }
                            for (int i = 0; i < updateddata2.Count; i++)
                            {
                                var data = DL3Data.Where(x => x.old_id3 == updateddata2[i].id).FirstOrDefault();
                                if (data != null)
                                {
                                    get_data.Add(data);
                                }

                            }


                            allData.Su3 = get_data;
                            finaldata.Add(allData);

                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && supply_val != "0" && supply_val != "" && supply_val != null)
                        {
                            var ddetails = ABE.obj_vw_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.new_table_entry_a != "1" && supply_val == "Artifician Recharge Structures").OrderByDescending(x => x.id).ToList();
                            allData.Su = ddetails;

                            var ddetails1 = ABE.obj_vw_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.new_table_entry_b != "1" && supply_val == "Water Conservation Structures").OrderByDescending(x => x.id).ToList();
                            allData.Su1 = ddetails1;

                            var ddetails2 = ABE.obj_vw_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.new_table_entry_c != "1" && supply_val == "Any Other Intervention").OrderByDescending(x => x.id).ToList();
                            allData.Su2 = ddetails2;

                            var updateddata = ABE.obj_vw_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.new_table_entry_a == "1" && supply_val == "Artifician Recharge Structures").ToList();
                            var updateddata1 = ABE.obj_vw_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.new_table_entry_b == "1" && supply_val == "Water Conservation Structures").ToList();
                            var updateddata2 = ABE.obj_vw_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.new_table_entry_c == "1" && supply_val == "Any Other Intervention").ToList();


                            for (int i = 0; i < updateddata.Count; i++)
                            {
                                var data = DL3Data.Where(x => x.old_id1 == updateddata[i].id).FirstOrDefault();
                                if (data != null)
                                {
                                    get_data.Add(data);
                                }

                            }
                            for (int i = 0; i < updateddata1.Count; i++)
                            {
                                var data = DL3Data.Where(x => x.old_id2 == updateddata1[i].id).FirstOrDefault();
                                if (data != null)
                                {
                                    get_data.Add(data);
                                }

                            }
                            for (int i = 0; i < updateddata2.Count; i++)
                            {
                                var data = DL3Data.Where(x => x.old_id3 == updateddata2[i].id).FirstOrDefault();
                                if (data != null)
                                {
                                    get_data.Add(data);
                                }

                            }


                            allData.Su3 = get_data;
                            finaldata.Add(allData);

                        }
                        else if (State != "0" && State != "" && State != null && supply_val != "0" && supply_val != "" && supply_val != null && Year != "0" && Year != "" && Year != null)
                        {
                            var ddetails = ABE.obj_vw_supply_AR_Structures.Where(x => x.state_name == State && x.sp_year == Year && x.new_table_entry_a != "1" && supply_val == "Artifician Recharge Structures").OrderByDescending(x => x.id).ToList();
                            allData.Su = ddetails;

                            var ddetails1 = ABE.obj_vw_supply_water_conservation.Where(x => x.state_name == State && x.wc_year == Year && x.new_table_entry_b != "1" && supply_val == "Water Conservation Structures").OrderByDescending(x => x.id).ToList();
                            allData.Su1 = ddetails1;

                            var ddetails2 = ABE.obj_vw_supply_any_other_intervention.Where(x => x.state_name == State && x.any_year == Year && x.new_table_entry_c != "1" && supply_val == "Any Other Intervention").OrderByDescending(x => x.id).ToList();
                            allData.Su2 = ddetails2;

                            var updateddata = ABE.obj_vw_supply_AR_Structures.Where(x => x.state_name == State && x.sp_year == Year && x.new_table_entry_a == "1" && supply_val == "Artifician Recharge Structures").ToList();
                            var updateddata1 = ABE.obj_vw_supply_water_conservation.Where(x => x.state_name == State && x.wc_year == Year && x.new_table_entry_b == "1" && supply_val == "Water Conservation Structures").ToList();
                            var updateddata2 = ABE.obj_vw_supply_any_other_intervention.Where(x => x.state_name == State && x.any_year == Year && x.new_table_entry_c == "1" && supply_val == "Any Other Intervention").ToList();


                            for (int i = 0; i < updateddata.Count; i++)
                            {
                                var data = DL3Data.Where(x => x.old_id1 == updateddata[i].id).FirstOrDefault();
                                if (data != null)
                                {
                                    get_data.Add(data);
                                }

                            }
                            for (int i = 0; i < updateddata1.Count; i++)
                            {
                                var data = DL3Data.Where(x => x.old_id2 == updateddata1[i].id).FirstOrDefault();
                                if (data != null)
                                {
                                    get_data.Add(data);
                                }

                            }
                            for (int i = 0; i < updateddata2.Count; i++)
                            {
                                var data = DL3Data.Where(x => x.old_id3 == updateddata2[i].id).FirstOrDefault();
                                if (data != null)
                                {
                                    get_data.Add(data);
                                }

                            }


                            allData.Su3 = get_data;
                            finaldata.Add(allData);

                        }
                        else if (State != "0" && State != "" && State != null && supply_val != "0" && supply_val != "" && supply_val != null)
                        {
                            var ddetails = ABE.obj_vw_supply_AR_Structures.Where(x => x.state_name == State && x.new_table_entry_a != "1" && supply_val == "Artifician Recharge Structures").OrderByDescending(x => x.id).ToList();
                            allData.Su = ddetails;

                            var ddetails1 = ABE.obj_vw_supply_water_conservation.Where(x => x.state_name == State && x.new_table_entry_b != "1" && supply_val == "Water Conservation Structures").OrderByDescending(x => x.id).ToList();
                            allData.Su1 = ddetails1;

                            var ddetails2 = ABE.obj_vw_supply_any_other_intervention.Where(x => x.state_name == State && x.new_table_entry_c != "1" && supply_val == "Any Other Intervention").OrderByDescending(x => x.id).ToList();
                            allData.Su2 = ddetails2;

                            var updateddata = ABE.obj_vw_supply_AR_Structures.Where(x => x.state_name == State && x.new_table_entry_a == "1" && supply_val == "Artifician Recharge Structures").ToList();
                            var updateddata1 = ABE.obj_vw_supply_water_conservation.Where(x => x.state_name == State && x.new_table_entry_b == "1" && supply_val == "Water Conservation Structures").ToList();
                            var updateddata2 = ABE.obj_vw_supply_any_other_intervention.Where(x => x.state_name == State && x.new_table_entry_c == "1" && supply_val == "Any Other Intervention").ToList();


                            for (int i = 0; i < updateddata.Count; i++)
                            {
                                var data = DL3Data.Where(x => x.old_id1 == updateddata[i].id).FirstOrDefault();
                                if (data != null)
                                {
                                    get_data.Add(data);
                                }

                            }
                            for (int i = 0; i < updateddata1.Count; i++)
                            {
                                var data = DL3Data.Where(x => x.old_id2 == updateddata1[i].id).FirstOrDefault();
                                if (data != null)
                                {
                                    get_data.Add(data);
                                }

                            }
                            for (int i = 0; i < updateddata2.Count; i++)
                            {
                                var data = DL3Data.Where(x => x.old_id3 == updateddata2[i].id).FirstOrDefault();
                                if (data != null)
                                {
                                    get_data.Add(data);
                                }

                            }


                            allData.Su3 = get_data;
                            finaldata.Add(allData);

                        }

                    }
                    else
                    {
                        if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null)
                        {
                            var ddetails = ABE.obj_vw_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.sp_year == Year && x.new_table_entry_a != "1").OrderByDescending(x => x.id).ToList();
                            allData.Su = ddetails;

                            var ddetails1 = ABE.obj_vw_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.wc_year == Year && x.new_table_entry_b != "1").OrderByDescending(x => x.id).ToList();
                            allData.Su1 = ddetails1;

                            var ddetails2 = ABE.obj_vw_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.any_year == Year && x.new_table_entry_c != "1").OrderByDescending(x => x.id).ToList();
                            allData.Su2 = ddetails2;

                            var updateddata = ABE.obj_vw_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.sp_year == Year && x.new_table_entry_a == "1").ToList();
                            var updateddata1 = ABE.obj_vw_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.wc_year == Year && x.new_table_entry_b == "1").ToList();
                            var updateddata2 = ABE.obj_vw_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.any_year == Year && x.new_table_entry_c == "1").ToList();


                            for (int i = 0; i < updateddata.Count; i++)
                            {
                                var data = DL3Data.Where(x => x.old_id1 == updateddata[i].id).FirstOrDefault();
                                if (data != null)
                                {
                                    get_data.Add(data);
                                }

                            }
                            for (int i = 0; i < updateddata1.Count; i++)
                            {
                                var data = DL3Data.Where(x => x.old_id2 == updateddata1[i].id).FirstOrDefault();
                                if (data != null)
                                {
                                    get_data.Add(data);
                                }

                            }
                            for (int i = 0; i < updateddata2.Count; i++)
                            {
                                var data = DL3Data.Where(x => x.old_id3 == updateddata2[i].id).FirstOrDefault();
                                if (data != null)
                                {
                                    get_data.Add(data);
                                }

                            }


                            allData.Su3 = get_data;
                            finaldata.Add(allData);

                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                        {
                            var ddetails = ABE.obj_vw_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.new_table_entry_a != "1").OrderByDescending(x => x.id).ToList();
                            allData.Su = ddetails;

                            var ddetails1 = ABE.obj_vw_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.new_table_entry_b != "1").OrderByDescending(x => x.id).ToList();
                            allData.Su1 = ddetails1;

                            var ddetails2 = ABE.obj_vw_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.new_table_entry_c != "1").OrderByDescending(x => x.id).ToList();
                            allData.Su2 = ddetails2;

                            var updateddata = ABE.obj_vw_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.new_table_entry_a == "1").ToList();
                            var updateddata1 = ABE.obj_vw_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.new_table_entry_b == "1").ToList();
                            var updateddata2 = ABE.obj_vw_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.new_table_entry_c == "1").ToList();


                            for (int i = 0; i < updateddata.Count; i++)
                            {
                                var data = DL3Data.Where(x => x.old_id1 == updateddata[i].id).FirstOrDefault();
                                if (data != null)
                                {
                                    get_data.Add(data);
                                }

                            }
                            for (int i = 0; i < updateddata1.Count; i++)
                            {
                                var data = DL3Data.Where(x => x.old_id2 == updateddata1[i].id).FirstOrDefault();
                                if (data != null)
                                {
                                    get_data.Add(data);
                                }

                            }
                            for (int i = 0; i < updateddata2.Count; i++)
                            {
                                var data = DL3Data.Where(x => x.old_id3 == updateddata2[i].id).FirstOrDefault();
                                if (data != null)
                                {
                                    get_data.Add(data);
                                }

                            }


                            allData.Su3 = get_data;
                            finaldata.Add(allData);

                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Year != "0" && Year != "" && Year != null)
                        {
                            var ddetails = ABE.obj_vw_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.sp_year == Year && x.new_table_entry_a != "1").OrderByDescending(x => x.id).ToList();
                            allData.Su = ddetails;

                            var ddetails1 = ABE.obj_vw_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.wc_year == Year && x.new_table_entry_b != "1").OrderByDescending(x => x.id).ToList();
                            allData.Su1 = ddetails1;

                            var ddetails2 = ABE.obj_vw_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.any_year == Year && x.new_table_entry_c != "1").OrderByDescending(x => x.id).ToList();
                            allData.Su2 = ddetails2;

                            var updateddata = ABE.obj_vw_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.sp_year == Year && x.new_table_entry_a == "1").ToList();
                            var updateddata1 = ABE.obj_vw_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.wc_year == Year && x.new_table_entry_b == "1").ToList();
                            var updateddata2 = ABE.obj_vw_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.any_year == Year && x.new_table_entry_c == "1").ToList();


                            for (int i = 0; i < updateddata.Count; i++)
                            {
                                var data = DL3Data.Where(x => x.old_id1 == updateddata[i].id).FirstOrDefault();
                                if (data != null)
                                {
                                    get_data.Add(data);
                                }

                            }
                            for (int i = 0; i < updateddata1.Count; i++)
                            {
                                var data = DL3Data.Where(x => x.old_id2 == updateddata1[i].id).FirstOrDefault();
                                if (data != null)
                                {
                                    get_data.Add(data);
                                }

                            }
                            for (int i = 0; i < updateddata2.Count; i++)
                            {
                                var data = DL3Data.Where(x => x.old_id3 == updateddata2[i].id).FirstOrDefault();
                                if (data != null)
                                {
                                    get_data.Add(data);
                                }

                            }


                            allData.Su3 = get_data;
                            finaldata.Add(allData);

                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                        {
                            var ddetails = ABE.obj_vw_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.new_table_entry_a != "1").OrderByDescending(x => x.id).ToList();
                            allData.Su = ddetails;

                            var ddetails1 = ABE.obj_vw_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.new_table_entry_b != "1").OrderByDescending(x => x.id).ToList();
                            allData.Su1 = ddetails1;

                            var ddetails2 = ABE.obj_vw_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.new_table_entry_c != "1").OrderByDescending(x => x.id).ToList();
                            allData.Su2 = ddetails2;

                            var updateddata = ABE.obj_vw_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.new_table_entry_a == "1").ToList();
                            var updateddata1 = ABE.obj_vw_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.new_table_entry_b == "1").ToList();
                            var updateddata2 = ABE.obj_vw_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.new_table_entry_c == "1").ToList();


                            for (int i = 0; i < updateddata.Count; i++)
                            {
                                var data = DL3Data.Where(x => x.old_id1 == updateddata[i].id).FirstOrDefault();
                                if (data != null)
                                {
                                    get_data.Add(data);
                                }

                            }
                            for (int i = 0; i < updateddata1.Count; i++)
                            {
                                var data = DL3Data.Where(x => x.old_id2 == updateddata1[i].id).FirstOrDefault();
                                if (data != null)
                                {
                                    get_data.Add(data);
                                }

                            }
                            for (int i = 0; i < updateddata2.Count; i++)
                            {
                                var data = DL3Data.Where(x => x.old_id3 == updateddata2[i].id).FirstOrDefault();
                                if (data != null)
                                {
                                    get_data.Add(data);
                                }

                            }


                            allData.Su3 = get_data;
                            finaldata.Add(allData);

                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null)
                        {
                            var ddetails = ABE.obj_vw_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.sp_year == Year && x.new_table_entry_a != "1").OrderByDescending(x => x.id).ToList();
                            allData.Su = ddetails;

                            var ddetails1 = ABE.obj_vw_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.wc_year == Year && x.new_table_entry_b != "1").OrderByDescending(x => x.id).ToList();
                            allData.Su1 = ddetails1;

                            var ddetails2 = ABE.obj_vw_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.any_year == Year && x.new_table_entry_c != "1").OrderByDescending(x => x.id).ToList();
                            allData.Su2 = ddetails2;

                            var updateddata = ABE.obj_vw_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.sp_year == Year && x.new_table_entry_a == "1").ToList();
                            var updateddata1 = ABE.obj_vw_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.wc_year == Year && x.new_table_entry_b == "1").ToList();
                            var updateddata2 = ABE.obj_vw_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.any_year == Year && x.new_table_entry_c == "1").ToList();


                            for (int i = 0; i < updateddata.Count; i++)
                            {
                                var data = DL3Data.Where(x => x.old_id1 == updateddata[i].id).FirstOrDefault();
                                if (data != null)
                                {
                                    get_data.Add(data);
                                }

                            }
                            for (int i = 0; i < updateddata1.Count; i++)
                            {
                                var data = DL3Data.Where(x => x.old_id2 == updateddata1[i].id).FirstOrDefault();
                                if (data != null)
                                {
                                    get_data.Add(data);
                                }

                            }
                            for (int i = 0; i < updateddata2.Count; i++)
                            {
                                var data = DL3Data.Where(x => x.old_id3 == updateddata2[i].id).FirstOrDefault();
                                if (data != null)
                                {
                                    get_data.Add(data);
                                }

                            }


                            allData.Su3 = get_data;
                            finaldata.Add(allData);

                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                        {
                            var ddetails = ABE.obj_vw_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.new_table_entry_a != "1").OrderByDescending(x => x.id).ToList();
                            allData.Su = ddetails;

                            var ddetails1 = ABE.obj_vw_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.new_table_entry_b != "1").OrderByDescending(x => x.id).ToList();
                            allData.Su1 = ddetails1;

                            var ddetails2 = ABE.obj_vw_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.new_table_entry_c != "1").OrderByDescending(x => x.id).ToList();
                            allData.Su2 = ddetails2;

                            var updateddata = ABE.obj_vw_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.new_table_entry_a == "1").ToList();
                            var updateddata1 = ABE.obj_vw_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.new_table_entry_b == "1").ToList();
                            var updateddata2 = ABE.obj_vw_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.new_table_entry_c == "1").ToList();


                            for (int i = 0; i < updateddata.Count; i++)
                            {
                                var data = DL3Data.Where(x => x.old_id1 == updateddata[i].id).FirstOrDefault();
                                if (data != null)
                                {
                                    get_data.Add(data);
                                }

                            }
                            for (int i = 0; i < updateddata1.Count; i++)
                            {
                                var data = DL3Data.Where(x => x.old_id2 == updateddata1[i].id).FirstOrDefault();
                                if (data != null)
                                {
                                    get_data.Add(data);
                                }

                            }
                            for (int i = 0; i < updateddata2.Count; i++)
                            {
                                var data = DL3Data.Where(x => x.old_id3 == updateddata2[i].id).FirstOrDefault();
                                if (data != null)
                                {
                                    get_data.Add(data);
                                }

                            }


                            allData.Su3 = get_data;
                            finaldata.Add(allData);

                        }
                        else if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null)
                        {
                            var ddetails = ABE.obj_vw_supply_AR_Structures.Where(x => x.state_name == State && x.sp_year == Year && x.new_table_entry_a != "1").OrderByDescending(x => x.id).ToList();
                            allData.Su = ddetails;

                            var ddetails1 = ABE.obj_vw_supply_water_conservation.Where(x => x.state_name == State && x.wc_year == Year && x.new_table_entry_b != "1").OrderByDescending(x => x.id).ToList();
                            allData.Su1 = ddetails1;

                            var ddetails2 = ABE.obj_vw_supply_any_other_intervention.Where(x => x.state_name == State && x.any_year == Year && x.new_table_entry_c != "1").OrderByDescending(x => x.id).ToList();
                            allData.Su2 = ddetails2;

                            var updateddata = ABE.obj_vw_supply_AR_Structures.Where(x => x.state_name == State && x.sp_year == Year && x.new_table_entry_a == "1").ToList();
                            var updateddata1 = ABE.obj_vw_supply_water_conservation.Where(x => x.state_name == State && x.wc_year == Year && x.new_table_entry_b == "1").ToList();
                            var updateddata2 = ABE.obj_vw_supply_any_other_intervention.Where(x => x.state_name == State && x.any_year == Year && x.new_table_entry_c == "1").ToList();


                            for (int i = 0; i < updateddata.Count; i++)
                            {
                                var data = DL3Data.Where(x => x.old_id1 == updateddata[i].id).FirstOrDefault();
                                if (data != null)
                                {
                                    get_data.Add(data);
                                }

                            }
                            for (int i = 0; i < updateddata1.Count; i++)
                            {
                                var data = DL3Data.Where(x => x.old_id2 == updateddata1[i].id).FirstOrDefault();
                                if (data != null)
                                {
                                    get_data.Add(data);
                                }

                            }
                            for (int i = 0; i < updateddata2.Count; i++)
                            {
                                var data = DL3Data.Where(x => x.old_id3 == updateddata2[i].id).FirstOrDefault();
                                if (data != null)
                                {
                                    get_data.Add(data);
                                }

                            }


                            allData.Su3 = get_data;
                            finaldata.Add(allData);

                        }
                        else if (State != "0" && State != "" && State != null)
                        {
                            var ddetails = ABE.obj_vw_supply_AR_Structures.Where(x => x.state_name == State && x.new_table_entry_a != "1").OrderByDescending(x => x.id).ToList();
                            allData.Su = ddetails;

                            var ddetails1 = ABE.obj_vw_supply_water_conservation.Where(x => x.state_name == State && x.new_table_entry_b != "1").OrderByDescending(x => x.id).ToList();
                            allData.Su1 = ddetails1;

                            var ddetails2 = ABE.obj_vw_supply_any_other_intervention.Where(x => x.state_name == State && x.new_table_entry_c != "1").OrderByDescending(x => x.id).ToList();
                            allData.Su2 = ddetails2;

                            var updateddata = ABE.obj_vw_supply_AR_Structures.Where(x => x.state_name == State && x.new_table_entry_a == "1").ToList();
                            var updateddata1 = ABE.obj_vw_supply_water_conservation.Where(x => x.state_name == State && x.new_table_entry_b == "1").ToList();
                            var updateddata2 = ABE.obj_vw_supply_any_other_intervention.Where(x => x.state_name == State && x.new_table_entry_c == "1").ToList();


                            for (int i = 0; i < updateddata.Count; i++)
                            {
                                var data = DL3Data.Where(x => x.old_id1 == updateddata[i].id).FirstOrDefault();
                                if (data != null)
                                {
                                    get_data.Add(data);
                                }

                            }
                            for (int i = 0; i < updateddata1.Count; i++)
                            {
                                var data = DL3Data.Where(x => x.old_id2 == updateddata1[i].id).FirstOrDefault();
                                if (data != null)
                                {
                                    get_data.Add(data);
                                }

                            }
                            for (int i = 0; i < updateddata2.Count; i++)
                            {
                                var data = DL3Data.Where(x => x.old_id3 == updateddata2[i].id).FirstOrDefault();
                                if (data != null)
                                {
                                    get_data.Add(data);
                                }

                            }


                            allData.Su3 = get_data;
                            finaldata.Add(allData);

                        }
                    }
                }
                else
                {
                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null)
                    {
                        var ddetails = ABE.obj_vw_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.sp_year == Year && x.new_table_entry_a != "1").OrderByDescending(x => x.id).ToList();
                        allData.Su = ddetails;

                        var ddetails1 = ABE.obj_vw_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.wc_year == Year && x.new_table_entry_b != "1").OrderByDescending(x => x.id).ToList();
                        allData.Su1 = ddetails1;

                        var ddetails2 = ABE.obj_vw_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.any_year == Year && x.new_table_entry_c != "1").OrderByDescending(x => x.id).ToList();
                        allData.Su2 = ddetails2;

                        var updateddata = ABE.obj_vw_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.sp_year == Year && x.new_table_entry_a == "1").ToList();
                        var updateddata1 = ABE.obj_vw_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.wc_year == Year && x.new_table_entry_b == "1").ToList();
                        var updateddata2 = ABE.obj_vw_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.any_year == Year && x.new_table_entry_c == "1").ToList();


                        for (int i = 0; i < updateddata.Count; i++)
                        {
                            var data = DL3Data.Where(x => x.old_id1 == updateddata[i].id).FirstOrDefault();
                            if (data != null)
                            {
                                get_data.Add(data);
                            }

                        }
                        for (int i = 0; i < updateddata1.Count; i++)
                        {
                            var data = DL3Data.Where(x => x.old_id2 == updateddata1[i].id).FirstOrDefault();
                            if (data != null)
                            {
                                get_data.Add(data);
                            }

                        }
                        for (int i = 0; i < updateddata2.Count; i++)
                        {
                            var data = DL3Data.Where(x => x.old_id3 == updateddata2[i].id).FirstOrDefault();
                            if (data != null)
                            {
                                get_data.Add(data);
                            }

                        }


                        allData.Su3 = get_data;
                        finaldata.Add(allData);

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        var ddetails = ABE.obj_vw_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.new_table_entry_a != "1").OrderByDescending(x => x.id).ToList();
                        allData.Su = ddetails;

                        var ddetails1 = ABE.obj_vw_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.new_table_entry_b != "1").OrderByDescending(x => x.id).ToList();
                        allData.Su1 = ddetails1;

                        var ddetails2 = ABE.obj_vw_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.new_table_entry_c != "1").OrderByDescending(x => x.id).ToList();
                        allData.Su2 = ddetails2;

                        var updateddata = ABE.obj_vw_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.new_table_entry_a == "1").ToList();
                        var updateddata1 = ABE.obj_vw_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.new_table_entry_b == "1").ToList();
                        var updateddata2 = ABE.obj_vw_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.new_table_entry_c == "1").ToList();


                        for (int i = 0; i < updateddata.Count; i++)
                        {
                            var data = DL3Data.Where(x => x.old_id1 == updateddata[i].id).FirstOrDefault();
                            if (data != null)
                            {
                                get_data.Add(data);
                            }

                        }
                        for (int i = 0; i < updateddata1.Count; i++)
                        {
                            var data = DL3Data.Where(x => x.old_id2 == updateddata1[i].id).FirstOrDefault();
                            if (data != null)
                            {
                                get_data.Add(data);
                            }

                        }
                        for (int i = 0; i < updateddata2.Count; i++)
                        {
                            var data = DL3Data.Where(x => x.old_id3 == updateddata2[i].id).FirstOrDefault();
                            if (data != null)
                            {
                                get_data.Add(data);
                            }

                        }


                        allData.Su3 = get_data;
                        finaldata.Add(allData);

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Year != "0" && Year != "" && Year != null)
                    {
                        var ddetails = ABE.obj_vw_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.sp_year == Year && x.new_table_entry_a != "1").OrderByDescending(x => x.id).ToList();
                        allData.Su = ddetails;

                        var ddetails1 = ABE.obj_vw_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.wc_year == Year && x.new_table_entry_b != "1").OrderByDescending(x => x.id).ToList();
                        allData.Su1 = ddetails1;

                        var ddetails2 = ABE.obj_vw_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.any_year == Year && x.new_table_entry_c != "1").OrderByDescending(x => x.id).ToList();
                        allData.Su2 = ddetails2;

                        var updateddata = ABE.obj_vw_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.sp_year == Year && x.new_table_entry_a == "1").ToList();
                        var updateddata1 = ABE.obj_vw_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.wc_year == Year && x.new_table_entry_b == "1").ToList();
                        var updateddata2 = ABE.obj_vw_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.any_year == Year && x.new_table_entry_c == "1").ToList();


                        for (int i = 0; i < updateddata.Count; i++)
                        {
                            var data = DL3Data.Where(x => x.old_id1 == updateddata[i].id).FirstOrDefault();
                            if (data != null)
                            {
                                get_data.Add(data);
                            }

                        }
                        for (int i = 0; i < updateddata1.Count; i++)
                        {
                            var data = DL3Data.Where(x => x.old_id2 == updateddata1[i].id).FirstOrDefault();
                            if (data != null)
                            {
                                get_data.Add(data);
                            }

                        }
                        for (int i = 0; i < updateddata2.Count; i++)
                        {
                            var data = DL3Data.Where(x => x.old_id3 == updateddata2[i].id).FirstOrDefault();
                            if (data != null)
                            {
                                get_data.Add(data);
                            }

                        }


                        allData.Su3 = get_data;
                        finaldata.Add(allData);

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        var ddetails = ABE.obj_vw_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.new_table_entry_a != "1").OrderByDescending(x => x.id).ToList();
                        allData.Su = ddetails;

                        var ddetails1 = ABE.obj_vw_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.new_table_entry_b != "1").OrderByDescending(x => x.id).ToList();
                        allData.Su1 = ddetails1;

                        var ddetails2 = ABE.obj_vw_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.new_table_entry_c != "1").OrderByDescending(x => x.id).ToList();
                        allData.Su2 = ddetails2;

                        var updateddata = ABE.obj_vw_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.new_table_entry_a == "1").ToList();
                        var updateddata1 = ABE.obj_vw_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.new_table_entry_b == "1").ToList();
                        var updateddata2 = ABE.obj_vw_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.new_table_entry_c == "1").ToList();


                        for (int i = 0; i < updateddata.Count; i++)
                        {
                            var data = DL3Data.Where(x => x.old_id1 == updateddata[i].id).FirstOrDefault();
                            if (data != null)
                            {
                                get_data.Add(data);
                            }

                        }
                        for (int i = 0; i < updateddata1.Count; i++)
                        {
                            var data = DL3Data.Where(x => x.old_id2 == updateddata1[i].id).FirstOrDefault();
                            if (data != null)
                            {
                                get_data.Add(data);
                            }

                        }
                        for (int i = 0; i < updateddata2.Count; i++)
                        {
                            var data = DL3Data.Where(x => x.old_id3 == updateddata2[i].id).FirstOrDefault();
                            if (data != null)
                            {
                                get_data.Add(data);
                            }

                        }


                        allData.Su3 = get_data;
                        finaldata.Add(allData);

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null)
                    {
                        var ddetails = ABE.obj_vw_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.sp_year == Year && x.new_table_entry_a != "1").OrderByDescending(x => x.id).ToList();
                        allData.Su = ddetails;

                        var ddetails1 = ABE.obj_vw_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.wc_year == Year && x.new_table_entry_b != "1").OrderByDescending(x => x.id).ToList();
                        allData.Su1 = ddetails1;

                        var ddetails2 = ABE.obj_vw_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.any_year == Year && x.new_table_entry_c != "1").OrderByDescending(x => x.id).ToList();
                        allData.Su2 = ddetails2;

                        var updateddata = ABE.obj_vw_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.sp_year == Year && x.new_table_entry_a == "1").ToList();
                        var updateddata1 = ABE.obj_vw_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.wc_year == Year && x.new_table_entry_b == "1").ToList();
                        var updateddata2 = ABE.obj_vw_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.any_year == Year && x.new_table_entry_c == "1").ToList();


                        for (int i = 0; i < updateddata.Count; i++)
                        {
                            var data = DL3Data.Where(x => x.old_id1 == updateddata[i].id).FirstOrDefault();
                            if (data != null)
                            {
                                get_data.Add(data);
                            }

                        }
                        for (int i = 0; i < updateddata1.Count; i++)
                        {
                            var data = DL3Data.Where(x => x.old_id2 == updateddata1[i].id).FirstOrDefault();
                            if (data != null)
                            {
                                get_data.Add(data);
                            }

                        }
                        for (int i = 0; i < updateddata2.Count; i++)
                        {
                            var data = DL3Data.Where(x => x.old_id3 == updateddata2[i].id).FirstOrDefault();
                            if (data != null)
                            {
                                get_data.Add(data);
                            }

                        }


                        allData.Su3 = get_data;
                        finaldata.Add(allData);

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        var ddetails = ABE.obj_vw_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.new_table_entry_a != "1").OrderByDescending(x => x.id).ToList();
                        allData.Su = ddetails;

                        var ddetails1 = ABE.obj_vw_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.new_table_entry_b != "1").OrderByDescending(x => x.id).ToList();
                        allData.Su1 = ddetails1;

                        var ddetails2 = ABE.obj_vw_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.new_table_entry_c != "1").OrderByDescending(x => x.id).ToList();
                        allData.Su2 = ddetails2;

                        var updateddata = ABE.obj_vw_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.new_table_entry_a == "1").ToList();
                        var updateddata1 = ABE.obj_vw_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.new_table_entry_b == "1").ToList();
                        var updateddata2 = ABE.obj_vw_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.new_table_entry_c == "1").ToList();


                        for (int i = 0; i < updateddata.Count; i++)
                        {
                            var data = DL3Data.Where(x => x.old_id1 == updateddata[i].id).FirstOrDefault();
                            if (data != null)
                            {
                                get_data.Add(data);
                            }

                        }
                        for (int i = 0; i < updateddata1.Count; i++)
                        {
                            var data = DL3Data.Where(x => x.old_id2 == updateddata1[i].id).FirstOrDefault();
                            if (data != null)
                            {
                                get_data.Add(data);
                            }

                        }
                        for (int i = 0; i < updateddata2.Count; i++)
                        {
                            var data = DL3Data.Where(x => x.old_id3 == updateddata2[i].id).FirstOrDefault();
                            if (data != null)
                            {
                                get_data.Add(data);
                            }

                        }


                        allData.Su3 = get_data;
                        finaldata.Add(allData);

                    }
                    else if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null)
                    {
                        var ddetails = ABE.obj_vw_supply_AR_Structures.Where(x => x.state_name == State && x.sp_year == Year && x.new_table_entry_a != "1").OrderByDescending(x => x.id).ToList();
                        allData.Su = ddetails;

                        var ddetails1 = ABE.obj_vw_supply_water_conservation.Where(x => x.state_name == State && x.wc_year == Year && x.new_table_entry_b != "1").OrderByDescending(x => x.id).ToList();
                        allData.Su1 = ddetails1;

                        var ddetails2 = ABE.obj_vw_supply_any_other_intervention.Where(x => x.state_name == State && x.any_year == Year && x.new_table_entry_c != "1").OrderByDescending(x => x.id).ToList();
                        allData.Su2 = ddetails2;

                        var updateddata = ABE.obj_vw_supply_AR_Structures.Where(x => x.state_name == State && x.sp_year == Year && x.new_table_entry_a == "1").ToList();
                        var updateddata1 = ABE.obj_vw_supply_water_conservation.Where(x => x.state_name == State && x.wc_year == Year && x.new_table_entry_b == "1").ToList();
                        var updateddata2 = ABE.obj_vw_supply_any_other_intervention.Where(x => x.state_name == State && x.any_year == Year && x.new_table_entry_c == "1").ToList();


                        for (int i = 0; i < updateddata.Count; i++)
                        {
                            var data = DL3Data.Where(x => x.old_id1 == updateddata[i].id).FirstOrDefault();
                            if (data != null)
                            {
                                get_data.Add(data);
                            }

                        }
                        for (int i = 0; i < updateddata1.Count; i++)
                        {
                            var data = DL3Data.Where(x => x.old_id2 == updateddata1[i].id).FirstOrDefault();
                            if (data != null)
                            {
                                get_data.Add(data);
                            }

                        }
                        for (int i = 0; i < updateddata2.Count; i++)
                        {
                            var data = DL3Data.Where(x => x.old_id3 == updateddata2[i].id).FirstOrDefault();
                            if (data != null)
                            {
                                get_data.Add(data);
                            }

                        }


                        allData.Su3 = get_data;
                        finaldata.Add(allData);

                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        var ddetails = ABE.obj_vw_supply_AR_Structures.Where(x => x.state_name == State && x.new_table_entry_a != "1").OrderByDescending(x => x.id).ToList();
                        allData.Su = ddetails;

                        var ddetails1 = ABE.obj_vw_supply_water_conservation.Where(x => x.state_name == State && x.new_table_entry_b != "1").OrderByDescending(x => x.id).ToList();
                        allData.Su1 = ddetails1;

                        var ddetails2 = ABE.obj_vw_supply_any_other_intervention.Where(x => x.state_name == State && x.new_table_entry_c != "1").OrderByDescending(x => x.id).ToList();
                        allData.Su2 = ddetails2;

                        var updateddata = ABE.obj_vw_supply_AR_Structures.Where(x => x.state_name == State && x.new_table_entry_a == "1").ToList();
                        var updateddata1 = ABE.obj_vw_supply_water_conservation.Where(x => x.state_name == State && x.new_table_entry_b == "1").ToList();
                        var updateddata2 = ABE.obj_vw_supply_any_other_intervention.Where(x => x.state_name == State && x.new_table_entry_c == "1").ToList();


                        for (int i = 0; i < updateddata.Count; i++)
                        {
                            var data = DL3Data.Where(x => x.old_id1 == updateddata[i].id).FirstOrDefault();
                            if (data != null)
                            {
                                get_data.Add(data);
                            }

                        }
                        for (int i = 0; i < updateddata1.Count; i++)
                        {
                            var data = DL3Data.Where(x => x.old_id2 == updateddata1[i].id).FirstOrDefault();
                            if (data != null)
                            {
                                get_data.Add(data);
                            }

                        }
                        for (int i = 0; i < updateddata2.Count; i++)
                        {
                            var data = DL3Data.Where(x => x.old_id3 == updateddata2[i].id).FirstOrDefault();
                            if (data != null)
                            {
                                get_data.Add(data);
                            }

                        }


                        allData.Su3 = get_data;
                        finaldata.Add(allData);

                    }
                }

            }

            using (var workbook = new XLWorkbook())
            {

                var worksheet = workbook.Worksheets.Add("Supply Side");
                var currentRow = 1;
                worksheet.Cell(currentRow, 1).Value = "State";
                worksheet.Cell(currentRow, 2).Value = "District";
                worksheet.Cell(currentRow, 3).Value = "Block";
                worksheet.Cell(currentRow, 4).Value = "Grampanchyat";
                worksheet.Cell(currentRow, 5).Value = "GP Center Point Latitude";
                worksheet.Cell(currentRow, 6).Value = "GP Center Point Longitude";
                worksheet.Cell(currentRow, 7).Value = "Village Name";
                worksheet.Cell(currentRow, 8).Value = "Financial Year";
                worksheet.Cell(currentRow, 9).Value = "Supply Side";
                worksheet.Cell(currentRow, 10).Value = "Department Name";
                worksheet.Cell(currentRow, 11).Value = "Scheme Name / Possible Funding Source";
                worksheet.Cell(currentRow, 12).Value = "Name of Structure (Proposed)";
                worksheet.Cell(currentRow, 13).Value = "Latitude of proposed structure";
                worksheet.Cell(currentRow, 14).Value = "Longitude of proposed structure";
                worksheet.Cell(currentRow, 15).Value = "Total Approximate Estimated Cost(in lakh)";
                worksheet.Cell(currentRow, 16).Value = "Work Start Date";
                worksheet.Cell(currentRow, 17).Value = "Work Completion Date";
                worksheet.Cell(currentRow, 18).Value = "Type of Work";
                worksheet.Cell(currentRow, 19).Value = "Latitude of structure (Decimal Degree)";
                worksheet.Cell(currentRow, 20).Value = "Longitude of structure  (Decimal Degree)";
                worksheet.Cell(currentRow, 21).Value = "Department Name";
                worksheet.Cell(currentRow, 22).Value = "Scheme Name";
                worksheet.Cell(currentRow, 23).Value = "Scheme Name Other";
                worksheet.Cell(currentRow, 24).Value = "Expenditure incurred other than Atal Jal (lakhs)";
                worksheet.Cell(currentRow, 25).Value = "Remark, if any";
                worksheet.Cell(currentRow, 26).Value = "Reject Remark";
                worksheet.Cell(currentRow, 27).Value = "Status";

                var a = finaldata[0].Su.Count;
                var b = finaldata[0].Su1.Count;
                var c = finaldata[0].Su2.Count;
                var d = finaldata[0].Su3.Count;

                if (a != 0)
                {
                    for (int i = 0; i < a; i++)
                    {
                        currentRow++;

                        worksheet.Cell(currentRow, 1).Value = finaldata[0].Su[i].state_name;
                        worksheet.Cell(currentRow, 2).Value = finaldata[0].Su[i].district_name;
                        worksheet.Cell(currentRow, 3).Value = finaldata[0].Su[i].block_name;
                        worksheet.Cell(currentRow, 4).Value = finaldata[0].Su[i].gpname;
                        worksheet.Cell(currentRow, 5).Value = finaldata[0].Su[i].gp_center_point_latitude;
                        worksheet.Cell(currentRow, 6).Value = finaldata[0].Su[i].gp_center_point_longitude;
                        worksheet.Cell(currentRow, 7).Value = finaldata[0].Su[i].village_name;
                        worksheet.Cell(currentRow, 8).Value = finaldata[0].Su[i].sp_year;
                        worksheet.Cell(currentRow, 9).Value = "Artificial Recharge Structures";
                        worksheet.Cell(currentRow, 10).Value = finaldata[0].Su[i].ar_department_name;
                        worksheet.Cell(currentRow, 11).Value = finaldata[0].Su[i].possible_funding_source;
                        worksheet.Cell(currentRow, 12).Value = finaldata[0].Su[i].type_ar_structure;
                        worksheet.Cell(currentRow, 13).Value = finaldata[0].Su[i].latitude;
                        worksheet.Cell(currentRow, 14).Value = finaldata[0].Su[i].longitude;
                        worksheet.Cell(currentRow, 15).Value = finaldata[0].Su[i].ar_approx_estimated_cost;


                    }
                }
                if (b != 0)
                {
                    for (int i = 0; i < b; i++)
                    {
                        currentRow++;

                        worksheet.Cell(currentRow, 1).Value = finaldata[0].Su1[i].state_name;
                        worksheet.Cell(currentRow, 2).Value = finaldata[0].Su1[i].district_name;
                        worksheet.Cell(currentRow, 3).Value = finaldata[0].Su1[i].block_name;
                        worksheet.Cell(currentRow, 4).Value = finaldata[0].Su1[i].gpname;
                        worksheet.Cell(currentRow, 5).Value = finaldata[0].Su1[i].gp_center_point_latitude;
                        worksheet.Cell(currentRow, 6).Value = finaldata[0].Su1[i].gp_center_point_longitude;
                        worksheet.Cell(currentRow, 7).Value = finaldata[0].Su1[i].village_name;
                        worksheet.Cell(currentRow, 8).Value = finaldata[0].Su1[i].wc_year;
                        worksheet.Cell(currentRow, 9).Value = "Water Conservation Structures";
                        worksheet.Cell(currentRow, 10).Value = finaldata[0].Su1[i].wc_department_name;
                        worksheet.Cell(currentRow, 11).Value = finaldata[0].Su1[i].possiable_funding_source;
                        worksheet.Cell(currentRow, 12).Value = finaldata[0].Su1[i].type_wc_structure;
                        worksheet.Cell(currentRow, 13).Value = finaldata[0].Su1[i].latitude;
                        worksheet.Cell(currentRow, 14).Value = finaldata[0].Su1[i].longitude;
                        worksheet.Cell(currentRow, 15).Value = finaldata[0].Su1[i].wc_approx_estimated_cost;

                    }
                }
                if (c != 0)
                {
                    for (int i = 0; i < c; i++)
                    {
                        currentRow++;

                        worksheet.Cell(currentRow, 1).Value = finaldata[0].Su2[i].state_name;
                        worksheet.Cell(currentRow, 2).Value = finaldata[0].Su2[i].district_name;
                        worksheet.Cell(currentRow, 3).Value = finaldata[0].Su2[i].block_name;
                        worksheet.Cell(currentRow, 4).Value = finaldata[0].Su2[i].gpname;
                        worksheet.Cell(currentRow, 5).Value = finaldata[0].Su2[i].gp_center_point_latitude;
                        worksheet.Cell(currentRow, 6).Value = finaldata[0].Su2[i].gp_center_point_longitude;
                        worksheet.Cell(currentRow, 7).Value = finaldata[0].Su2[i].village_name;
                        worksheet.Cell(currentRow, 8).Value = finaldata[0].Su2[i].any_year;
                        worksheet.Cell(currentRow, 9).Value = "Any Other Intervention";
                        worksheet.Cell(currentRow, 10).Value = finaldata[0].Su2[i].other_department_name;
                        worksheet.Cell(currentRow, 11).Value = finaldata[0].Su2[i].possible_funding_source;
                        worksheet.Cell(currentRow, 12).Value = finaldata[0].Su2[i].other_structure;
                        worksheet.Cell(currentRow, 13).Value = finaldata[0].Su2[i].latitude;
                        worksheet.Cell(currentRow, 14).Value = finaldata[0].Su2[i].longitude;
                        worksheet.Cell(currentRow, 15).Value = finaldata[0].Su2[i].anyother_approx_estimated_cost;

                    }
                }
                if (d != 0)
                {
                    for (int i = 0; i < d; i++)
                    {
                        var approval = finaldata[0].Su3[i].approval;
                        if (approval == "State")
                        {
                            approval = "Approved";

                        }
                        else if (approval == "District")
                        {
                            approval = "Submitted To SPMU";

                        }
                        else if (approval == null)
                        {
                            approval = "At DPMU";

                        }
                        else if (approval == "Reject")
                        {
                            approval = "Rejected";

                        }



                        currentRow++;

                        worksheet.Cell(currentRow, 1).Value = finaldata[0].Su3[i].state_name;
                        worksheet.Cell(currentRow, 2).Value = finaldata[0].Su3[i].district_name;
                        worksheet.Cell(currentRow, 3).Value = finaldata[0].Su3[i].block_name;
                        worksheet.Cell(currentRow, 4).Value = finaldata[0].Su3[i].gp_name;
                        worksheet.Cell(currentRow, 5).Value = finaldata[0].Su3[i].gp_center_point_latitude;
                        worksheet.Cell(currentRow, 6).Value = finaldata[0].Su3[i].gp_center_point_longitude;
                        worksheet.Cell(currentRow, 7).Value = finaldata[0].Su3[i].village;
                        worksheet.Cell(currentRow, 8).Value = finaldata[0].Su3[i].year;
                        worksheet.Cell(currentRow, 9).Value = finaldata[0].Su3[i].supply_side;
                        worksheet.Cell(currentRow, 10).Value = finaldata[0].Su3[i].department_name;
                        worksheet.Cell(currentRow, 11).Value = finaldata[0].Su3[i].scheme_name;
                        worksheet.Cell(currentRow, 12).Value = finaldata[0].Su3[i].name_of_structure;
                        worksheet.Cell(currentRow, 13).Value = finaldata[0].Su3[i].latitude_of_proposed;
                        worksheet.Cell(currentRow, 14).Value = finaldata[0].Su3[i].longitude_of_proposed;
                        worksheet.Cell(currentRow, 15).Value = finaldata[0].Su3[i].total_approximate;
                        worksheet.Cell(currentRow, 16).Value = finaldata[0].Su3[i].work_start_date;
                        worksheet.Cell(currentRow, 17).Value = finaldata[0].Su3[i].work_completion_date;
                        worksheet.Cell(currentRow, 18).Value = finaldata[0].Su3[i].ddlnew;
                        worksheet.Cell(currentRow, 19).Value = finaldata[0].Su3[i].latitude_of_structure;
                        worksheet.Cell(currentRow, 20).Value = finaldata[0].Su3[i].longitude_of_structure;
                        worksheet.Cell(currentRow, 21).Value = finaldata[0].Su3[i].department_name_new;
                        worksheet.Cell(currentRow, 22).Value = finaldata[0].Su3[i].scheme_name_new;
                        worksheet.Cell(currentRow, 23).Value = finaldata[0].Su3[i].schemename_other;
                        worksheet.Cell(currentRow, 24).Value = finaldata[0].Su3[i].expenditure_incurred;
                        worksheet.Cell(currentRow, 25).Value = finaldata[0].Su3[i].remark;
                        worksheet.Cell(currentRow, 26).Value = finaldata[0].Su3[i].reject;
                        worksheet.Cell(currentRow, 27).Value = approval;


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
                    worksheet.Cell(currentRow, 7).Value = "No Data";
                    worksheet.Cell(currentRow, 8).Value = "";
                    worksheet.Cell(currentRow, 9).Value = "";
                    worksheet.Cell(currentRow, 10).Value = "";
                    worksheet.Cell(currentRow, 11).Value = "";
                    worksheet.Cell(currentRow, 12).Value = "";
                    worksheet.Cell(currentRow, 13).Value = "";

                }
                using (var stream = new MemoryStream())
                {
                    workbook.SaveAs(stream);
                    var content = stream.ToArray();

                    return File(
                        content,
                        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                        "Supply Side.xlsx");
                }
            }



        }



        public ActionResult Demand_excel(string State, string Dist, string Block, string Gram, string Year, string demand_val, string ddldemand)
        {
            var month = "0";
            var demand_va = demand_val;



            //var ddetails = ABE.obj_abhy_wsp_funding_source.ToList();
            var DL3Data = ABE.obj_abhy_new_DLI3.ToList();
            List<abhy_new_DLI3> get_data = new List<abhy_new_DLI3>();
            List<abhy_wsp_funding_source> ddetails = new List<abhy_wsp_funding_source>();

            abhy_new_DLI3_new allData = new abhy_new_DLI3_new();
            List<abhy_new_DLI3_new> finaldata = new List<abhy_new_DLI3_new>();

            if (State == "All" && demand_va == "0")
            {
                ddetails = ABE.obj_abhy_wsp_funding_source.Where(x => x.new_table_entry != "1").OrderBy(x => x.gp_name).ToList();
                allData.FS = ddetails;

                var updateddata = ABE.obj_abhy_wsp_funding_source.Where(x => x.new_table_entry == "1").OrderBy(x => x.gp_name).ToList();
                for (int i = 0; i < updateddata.Count; i++)
                {
                    var ddetails1 = DL3Data.Where(x => x.old_id == updateddata[i].id).FirstOrDefault();
                    if (ddetails1 != null)
                    {
                        get_data.Add(ddetails1);
                    }
                    int checkid = ddetails1.id;
                    var ddetails3 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == checkid).ToList();
                    for (int j = 0; j < ddetails3.Count; j++)
                    {
                        get_data.Add(ddetails3[j]);
                    }

                }
                allData.DLI3 = get_data;
                finaldata.Add(allData);

            }
            else if (State == "All" && demand_va != "All")
            {
                ddetails = ABE.obj_abhy_wsp_funding_source.Where(x => x.type == demand_va && x.new_table_entry != "1").OrderBy(x => x.gp_name).ToList();
                allData.FS = ddetails;

                var updateddata = ABE.obj_abhy_wsp_funding_source.Where(x => x.new_table_entry == "1" && x.type == demand_va).OrderBy(x => x.gp_name).ToList();
                for (int i = 0; i < updateddata.Count; i++)
                {
                    var ddetails1 = DL3Data.Where(x => x.old_id == updateddata[i].id && x.type == demand_va).FirstOrDefault();
                    if (ddetails1 != null)
                    {
                        get_data.Add(ddetails1);
                    }
                    int checkid = ddetails1.id;
                    var ddetails3 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == checkid).ToList();
                    for (int j = 0; j < ddetails3.Count; j++)
                    {
                        get_data.Add(ddetails3[j]);
                    }

                }

                allData.DLI3 = get_data;
                finaldata.Add(allData);


            }
            else if (State == "All" && demand_va == "All")
            {
                if (Year != "0")
                {
                    ddetails = ABE.obj_abhy_wsp_funding_source.Where(x => x.new_table_entry != "1" && x.claim_year == Year).OrderBy(x => x.gp_name).ToList();
                    allData.FS = ddetails;

                    var updateddata = ABE.obj_abhy_wsp_funding_source.Where(x => x.new_table_entry == "1" && x.claim_year == Year).OrderBy(x => x.gp_name).ToList();
                    for (int i = 0; i < updateddata.Count; i++)
                    {
                        var ddetails1 = DL3Data.Where(x => x.old_id == updateddata[i].id).FirstOrDefault();
                        if (ddetails1 != null)
                        {
                            get_data.Add(ddetails1);
                        }
                        int checkid = ddetails1.id;
                        var ddetails3 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == checkid).ToList();
                        for (int j = 0; j < ddetails3.Count; j++)
                        {
                            get_data.Add(ddetails3[j]);
                        }

                    }
                    allData.DLI3 = get_data;
                    finaldata.Add(allData);
                }
                else
                {
                    ddetails = ABE.obj_abhy_wsp_funding_source.Where(x => x.new_table_entry != "1").OrderBy(x => x.gp_name).ToList();
                    allData.FS = ddetails;

                    var updateddata = ABE.obj_abhy_wsp_funding_source.Where(x => x.new_table_entry == "1").OrderBy(x => x.gp_name).ToList();
                    for (int i = 0; i < updateddata.Count; i++)
                    {
                        var ddetails1 = DL3Data.Where(x => x.old_id == updateddata[i].id).FirstOrDefault();
                        if (ddetails1 != null)
                        {
                            get_data.Add(ddetails1);
                        }
                        int checkid = ddetails1.id;
                        var ddetails3 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == checkid).ToList();
                        for (int j = 0; j < ddetails3.Count; j++)
                        {
                            get_data.Add(ddetails3[j]);
                        }

                    }

                    allData.DLI3 = get_data;
                    finaldata.Add(allData);
                }

            }
            else
            {
                if (ddldemand != "All")
                {
                    if (demand_val != "All" && demand_val != "0")
                    {

                        if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null && demand_val != "0" && demand_val != "" && demand_val != null)
                        {
                            ddetails = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.claim_year == Year && x.month == month && x.type == demand_val && x.new_table_entry != "1").OrderBy(x => x.gp_name).ToList();//total list
                            allData.FS = ddetails;


                            var updateddata = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.claim_year == Year && x.month == month && x.type == demand_val).OrderBy(x => x.gp_name).ToList();//total list
                            for (int i = 0; i < updateddata.Count; i++)
                            {
                                var ddetails1 = DL3Data.Where(x => x.old_id == updateddata[i].id && x.type == demand_va && x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.year == Year && x.month == month).FirstOrDefault();
                                if (ddetails1 != null)
                                {
                                    get_data.Add(ddetails1);
                                }
                                int checkid = ddetails1.id;
                                var ddetails3 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == checkid).ToList();
                                for (int j = 0; j < ddetails3.Count; j++)
                                {
                                    get_data.Add(ddetails3[j]);
                                }


                            }

                            allData.DLI3 = get_data;
                            finaldata.Add(allData);


                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null && demand_val != "0" && demand_val != "" && demand_val != null)
                        {

                            ddetails = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.claim_year == Year && x.type == demand_val && x.new_table_entry != "1").OrderBy(x => x.gp_name).ToList();//total list
                            allData.FS = ddetails;

                            var updateddata = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.claim_year == Year && x.type == demand_val && x.new_table_entry == "1").OrderBy(x => x.gp_name).ToList();//total list
                            for (int i = 0; i < updateddata.Count; i++)
                            {
                                var ddetails1 = DL3Data.Where(x => x.old_id == updateddata[i].id && x.type == demand_va && x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.year == Year).FirstOrDefault();
                                if (ddetails1 != null)
                                {
                                    get_data.Add(ddetails1);
                                }
                                int checkid = ddetails1.id;
                                var ddetails3 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == checkid).ToList();
                                for (int j = 0; j < ddetails3.Count; j++)
                                {
                                    get_data.Add(ddetails3[j]);
                                }

                            }

                            allData.DLI3 = get_data;
                            finaldata.Add(allData);


                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && demand_val != "0" && demand_val != "" && demand_val != null)
                        {

                            ddetails = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.type == demand_val && x.new_table_entry != "1").OrderBy(x => x.gp_name).ToList();//total list
                            allData.FS = ddetails;

                            var updateddata = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.type == demand_val && x.new_table_entry == "1").OrderBy(x => x.gp_name).ToList();//total list
                            for (int i = 0; i < updateddata.Count; i++)
                            {
                                var ddetails1 = DL3Data.Where(x => x.old_id == updateddata[i].id && x.type == demand_va && x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram).FirstOrDefault();
                                if (ddetails1 != null)
                                {
                                    get_data.Add(ddetails1);
                                }
                                int checkid = ddetails1.id;
                                var ddetails3 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == checkid).ToList();
                                for (int j = 0; j < ddetails3.Count; j++)
                                {
                                    get_data.Add(ddetails3[j]);
                                }

                            }

                            allData.DLI3 = get_data;
                            finaldata.Add(allData);



                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && demand_val != "0" && demand_val != "" && demand_val != null)
                        {
                            ddetails = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.type == demand_val && x.new_table_entry != "1").OrderBy(x => x.gp_name).ToList();//total list
                            allData.FS = ddetails;

                            var updateddata = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.type == demand_val && x.new_table_entry == "1").OrderBy(x => x.gp_name).ToList();//total list
                            for (int i = 0; i < updateddata.Count; i++)
                            {
                                var ddetails1 = DL3Data.Where(x => x.old_id == updateddata[i].id && x.type == demand_va && x.state_name == State && x.district_name == Dist && x.block_name == Block).FirstOrDefault();
                                if (ddetails1 != null)
                                {
                                    get_data.Add(ddetails1);
                                }
                                int checkid = ddetails1.id;
                                var ddetails3 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == checkid).ToList();
                                for (int j = 0; j < ddetails3.Count; j++)
                                {
                                    get_data.Add(ddetails3[j]);
                                }

                            }

                            allData.DLI3 = get_data;
                            finaldata.Add(allData);

                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && demand_val != "0" && demand_val != "" && demand_val != null)
                        {

                            ddetails = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.type == demand_val && x.new_table_entry != "1").OrderBy(x => x.gp_name).ToList();//total list
                            allData.FS = ddetails;

                            var updateddata = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.type == demand_val && x.new_table_entry == "1").OrderBy(x => x.gp_name).ToList();//total list
                            for (int i = 0; i < updateddata.Count; i++)
                            {
                                var ddetails1 = DL3Data.Where(x => x.old_id == updateddata[i].id && x.type == demand_va && x.state_name == State && x.district_name == Dist).FirstOrDefault();
                                if (ddetails1 != null)
                                {
                                    get_data.Add(ddetails1);
                                }
                                int checkid = ddetails1.id;
                                var ddetails3 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == checkid).ToList();
                                for (int j = 0; j < ddetails3.Count; j++)
                                {
                                    get_data.Add(ddetails3[j]);
                                }

                            }

                            allData.DLI3 = get_data;
                            finaldata.Add(allData);


                        }
                        else if (State != "0" && State != "" && State != null && demand_val != "0" && demand_val != "" && demand_val != null)
                        {
                            ddetails = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.type == demand_val && x.new_table_entry != "1").OrderBy(x => x.gp_name).ToList();//total list
                            allData.FS = ddetails;

                            var updateddata = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.type == demand_val && x.new_table_entry == "1").OrderBy(x => x.gp_name).ToList();//total list
                            for (int i = 0; i < updateddata.Count; i++)
                            {
                                var ddetails1 = DL3Data.Where(x => x.old_id == updateddata[i].id && x.type == demand_va && x.state_name == State).FirstOrDefault();
                                if (ddetails1 != null)
                                {
                                    get_data.Add(ddetails1);
                                }
                                int checkid = ddetails1.id;
                                var ddetails3 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == checkid).ToList();
                                for (int j = 0; j < ddetails3.Count; j++)
                                {
                                    get_data.Add(ddetails3[j]);
                                }

                            }

                            allData.DLI3 = get_data;
                            finaldata.Add(allData);


                        }
                    }
                    else
                    {
                        if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
                        {
                            ddetails = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.claim_year == Year && x.month == month && x.new_table_entry != "1").OrderBy(x => x.gp_name).ToList();//total list
                            allData.FS = ddetails;


                            var updateddata = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.claim_year == Year && x.month == month && x.new_table_entry == "1").OrderBy(x => x.gp_name).ToList();//total list
                            for (int i = 0; i < updateddata.Count; i++)
                            {
                                var ddetails1 = DL3Data.Where(x => x.old_id == updateddata[i].id && x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.year == Year && x.month == month).FirstOrDefault();
                                if (ddetails1 != null)
                                {
                                    get_data.Add(ddetails1);
                                }
                                int checkid = ddetails1.id;
                                var ddetails3 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == checkid).ToList();
                                for (int j = 0; j < ddetails3.Count; j++)
                                {
                                    get_data.Add(ddetails3[j]);
                                }

                            }
                            allData.DLI3 = get_data;
                            finaldata.Add(allData);


                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null)
                        {

                            ddetails = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.claim_year == Year && x.new_table_entry != "1").OrderBy(x => x.gp_name).ToList();//total list
                            allData.FS = ddetails;

                            var updateddata = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.claim_year == Year && x.new_table_entry == "1").OrderBy(x => x.gp_name).ToList();//total list
                            for (int i = 0; i < updateddata.Count; i++)
                            {
                                var ddetails1 = DL3Data.Where(x => x.old_id == updateddata[i].id && x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.year == Year).FirstOrDefault();
                                if (ddetails1 != null)
                                {
                                    get_data.Add(ddetails1);
                                }
                                int checkid = ddetails1.id;
                                var ddetails3 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == checkid).ToList();
                                for (int j = 0; j < ddetails3.Count; j++)
                                {
                                    get_data.Add(ddetails3[j]);
                                }
                            }
                            allData.DLI3 = get_data;
                            finaldata.Add(allData);
                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                        {

                            ddetails = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.new_table_entry != "1").OrderBy(x => x.gp_name).ToList();//total list
                            allData.FS = ddetails;

                            var updateddata = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.new_table_entry == "1").OrderBy(x => x.gp_name).ToList();//total list
                            for (int i = 0; i < updateddata.Count; i++)
                            {
                                var ddetails1 = DL3Data.Where(x => x.old_id == updateddata[i].id && x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram).FirstOrDefault();
                                if (ddetails1 != null)
                                {
                                    get_data.Add(ddetails1);
                                }
                                int checkid = ddetails1.id;
                                var ddetails3 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == checkid).ToList();
                                for (int j = 0; j < ddetails3.Count; j++)
                                {
                                    get_data.Add(ddetails3[j]);
                                }

                            }
                            allData.DLI3 = get_data;
                            finaldata.Add(allData);


                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                        {
                            ddetails = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.new_table_entry != "1").OrderBy(x => x.gp_name).ToList();//total list
                            allData.FS = ddetails;

                            var updateddata = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.new_table_entry == "1").OrderBy(x => x.gp_name).ToList();//total list
                            for (int i = 0; i < updateddata.Count; i++)
                            {
                                var ddetails1 = DL3Data.Where(x => x.old_id == updateddata[i].id && x.state_name == State && x.district_name == Dist && x.block_name == Block).FirstOrDefault();
                                if (ddetails1 != null)
                                {
                                    get_data.Add(ddetails1);
                                }
                                int checkid = ddetails1.id;
                                var ddetails3 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == checkid).ToList();
                                for (int j = 0; j < ddetails3.Count; j++)
                                {
                                    get_data.Add(ddetails3[j]);
                                }


                            }
                            allData.DLI3 = get_data;
                            finaldata.Add(allData);

                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                        {

                            ddetails = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.new_table_entry != "1").OrderBy(x => x.gp_name).ToList();//total list
                            allData.FS = ddetails;

                            var updateddata = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.new_table_entry == "1").OrderBy(x => x.gp_name).ToList();//total list
                            for (int i = 0; i < updateddata.Count; i++)
                            {
                                var ddetails1 = DL3Data.Where(x => x.old_id == updateddata[i].id && x.state_name == State && x.district_name == Dist).FirstOrDefault();
                                if (ddetails1 != null)
                                {
                                    get_data.Add(ddetails1);
                                }
                                int checkid = ddetails1.id;
                                var ddetails3 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == checkid).ToList();
                                for (int j = 0; j < ddetails3.Count; j++)
                                {
                                    get_data.Add(ddetails3[j]);
                                }

                            }
                            allData.DLI3 = get_data;
                            finaldata.Add(allData);


                        }
                        else if (State != "0" && State != "" && State != null)
                        {
                            ddetails = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.new_table_entry != "1").OrderBy(x => x.gp_name).ToList();//total list
                            allData.FS = ddetails;

                            var updateddata = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.new_table_entry == "1").OrderBy(x => x.gp_name).ToList();//total list
                            for (int i = 0; i < updateddata.Count; i++)
                            {
                                var ddetails1 = DL3Data.Where(x => x.old_id == updateddata[i].id && x.state_name == State).FirstOrDefault();
                                if (ddetails1 != null)
                                {
                                    get_data.Add(ddetails1);
                                }
                                int checkid = ddetails1.id;
                                var ddetails3 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == checkid).ToList();
                                for (int j = 0; j < ddetails3.Count; j++)
                                {
                                    get_data.Add(ddetails3[j]);
                                }

                            }
                            allData.DLI3 = get_data;
                            finaldata.Add(allData);


                        }
                    }
                }
                else
                {
                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
                    {
                        ddetails = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.claim_year == Year && x.month == month && x.new_table_entry != "1").OrderBy(x => x.gp_name).ToList();//total list
                        allData.FS = ddetails;


                        var updateddata = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.claim_year == Year && x.month == month && x.new_table_entry == "1").OrderBy(x => x.gp_name).ToList();//total list
                        for (int i = 0; i < updateddata.Count; i++)
                        {
                            var ddetails1 = DL3Data.Where(x => x.old_id == updateddata[i].id && x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.year == Year && x.month == month).FirstOrDefault();
                            if (ddetails1 != null)
                            {
                                get_data.Add(ddetails1);
                            }
                            int checkid = ddetails1.id;
                            var ddetails3 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == checkid).ToList();
                            for (int j = 0; j < ddetails3.Count; j++)
                            {
                                get_data.Add(ddetails3[j]);
                            }

                        }
                        allData.DLI3 = get_data;
                        finaldata.Add(allData);


                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null)
                    {

                        ddetails = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.claim_year == Year && x.new_table_entry != "1").OrderBy(x => x.gp_name).ToList();//total list
                        allData.FS = ddetails;

                        var updateddata = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.claim_year == Year && x.new_table_entry == "1").OrderBy(x => x.gp_name).ToList();//total list
                        for (int i = 0; i < updateddata.Count; i++)
                        {
                            var ddetails1 = DL3Data.Where(x => x.old_id == updateddata[i].id && x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.year == Year).FirstOrDefault();
                            if (ddetails1 != null)
                            {
                                get_data.Add(ddetails1);
                            }
                            int checkid = ddetails1.id;
                            var ddetails3 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == checkid).ToList();
                            for (int j = 0; j < ddetails3.Count; j++)
                            {
                                get_data.Add(ddetails3[j]);
                            }

                        }
                        allData.DLI3 = get_data;
                        finaldata.Add(allData);


                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {

                        ddetails = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.new_table_entry != "1").OrderBy(x => x.gp_name).ToList();//total list
                        allData.FS = ddetails;

                        var updateddata = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.new_table_entry == "1").OrderBy(x => x.gp_name).ToList();//total list
                        for (int i = 0; i < updateddata.Count; i++)
                        {
                            var ddetails1 = DL3Data.Where(x => x.old_id == updateddata[i].id && x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram).FirstOrDefault();
                            if (ddetails1 != null)
                            {
                                get_data.Add(ddetails1);
                            }
                            int checkid = ddetails1.id;
                            var ddetails3 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == checkid).ToList();
                            for (int j = 0; j < ddetails3.Count; j++)
                            {
                                get_data.Add(ddetails3[j]);
                            }

                        }
                        allData.DLI3 = get_data;
                        finaldata.Add(allData);


                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        ddetails = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.new_table_entry != "1").OrderBy(x => x.gp_name).ToList();//total list
                        allData.FS = ddetails;

                        var updateddata = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.new_table_entry == "1").OrderBy(x => x.gp_name).ToList();//total list
                        for (int i = 0; i < updateddata.Count; i++)
                        {
                            var ddetails1 = DL3Data.Where(x => x.old_id == updateddata[i].id && x.state_name == State && x.district_name == Dist && x.block_name == Block).FirstOrDefault();
                            if (ddetails1 != null)
                            {
                                get_data.Add(ddetails1);
                            }
                            int checkid = ddetails1.id;
                            var ddetails3 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == checkid).ToList();
                            for (int j = 0; j < ddetails3.Count; j++)
                            {
                                get_data.Add(ddetails3[j]);
                            }


                        }
                        allData.DLI3 = get_data;
                        finaldata.Add(allData);

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {

                        ddetails = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.new_table_entry != "1").OrderBy(x => x.gp_name).ToList();//total list
                        allData.FS = ddetails;

                        var updateddata = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.new_table_entry == "1").OrderBy(x => x.gp_name).ToList();//total list
                        for (int i = 0; i < updateddata.Count; i++)
                        {
                            var ddetails1 = DL3Data.Where(x => x.old_id == updateddata[i].id && x.state_name == State && x.district_name == Dist).FirstOrDefault();
                            if (ddetails1 != null)
                            {
                                get_data.Add(ddetails1);
                            }
                            int checkid = ddetails1.id;
                            var ddetails3 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == checkid).ToList();
                            for (int j = 0; j < ddetails3.Count; j++)
                            {
                                get_data.Add(ddetails3[j]);
                            }

                        }
                        allData.DLI3 = get_data;
                        finaldata.Add(allData);


                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        ddetails = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.new_table_entry != "1").OrderBy(x => x.gp_name).ToList();//total list
                        allData.FS = ddetails;

                        var updateddata = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.new_table_entry == "1").OrderBy(x => x.gp_name).ToList();//total list
                        for (int i = 0; i < updateddata.Count; i++)
                        {
                            var ddetails1 = DL3Data.Where(x => x.old_id == updateddata[i].id && x.state_name == State).FirstOrDefault();
                            if (ddetails1 != null)
                            {
                                get_data.Add(ddetails1);
                            }
                            int checkid = ddetails1.id;
                            var ddetails3 = ABE.obj_abhy_new_DLI3.Where(x => x.multiple_new_row == checkid).ToList();
                            for (int j = 0; j < ddetails3.Count; j++)
                            {
                                get_data.Add(ddetails3[j]);
                            }

                        }
                        allData.DLI3 = get_data;
                        finaldata.Add(allData);


                    }

                }
            }





            using (var workbook = new XLWorkbook())
            {

                var worksheet = workbook.Worksheets.Add("Demand Side");
                var currentRow = 1;
                worksheet.Cell(currentRow, 1).Value = "State Name";
                worksheet.Cell(currentRow, 2).Value = "District Name";
                worksheet.Cell(currentRow, 3).Value = "Block Name";
                worksheet.Cell(currentRow, 4).Value = "Grampanchyat Name";
                worksheet.Cell(currentRow, 5).Value = "GP Center Point (Latitude)";
                worksheet.Cell(currentRow, 6).Value = "GP Center Point (Longitude";
                worksheet.Cell(currentRow, 7).Value = "Financial Year";
                worksheet.Cell(currentRow, 8).Value = "Demand Side Interventions";
                worksheet.Cell(currentRow, 9).Value = "Demand Side Interventions Other";
                worksheet.Cell(currentRow, 10).Value = "Department Name";
                worksheet.Cell(currentRow, 11).Value = "Scheme Name / Possible Funding Source";
                worksheet.Cell(currentRow, 12).Value = "Area Proposed (in ha)";
                worksheet.Cell(currentRow, 13).Value = "Approximate Estimated Cost (in lakh)";
                worksheet.Cell(currentRow, 14).Value = "Year Of Subsidy Disbursement";
                worksheet.Cell(currentRow, 15).Value = "Department Name";
                worksheet.Cell(currentRow, 16).Value = "Scheme Name";
                worksheet.Cell(currentRow, 17).Value = "Scheme Name Other";
                worksheet.Cell(currentRow, 18).Value = "Area Covered (in ha)";
                worksheet.Cell(currentRow, 19).Value = "Expenditure incurred other than Atal Jal (in lakh)";
                worksheet.Cell(currentRow, 20).Value = "Remark, if any";
                worksheet.Cell(currentRow, 21).Value = "Reject Remark";
                worksheet.Cell(currentRow, 22).Value = "Status";

                var a = finaldata[0].FS.Count;
                var b = finaldata[0].DLI3.Count;

                if (a != 0)
                {
                    for (int i = 0; i < a; i++)
                    {
                        currentRow++;

                        worksheet.Cell(currentRow, 1).Value = finaldata[0].FS[i].state_name;
                        worksheet.Cell(currentRow, 2).Value = finaldata[0].FS[i].district_name;
                        worksheet.Cell(currentRow, 3).Value = finaldata[0].FS[i].block_name;
                        worksheet.Cell(currentRow, 4).Value = finaldata[0].FS[i].gp_name;
                        worksheet.Cell(currentRow, 5).Value = finaldata[0].FS[i].latitude_gp_centre_point;
                        worksheet.Cell(currentRow, 6).Value = finaldata[0].FS[i].longitude_gp_centre_point;
                        worksheet.Cell(currentRow, 7).Value = finaldata[0].FS[i].claim_year;
                        worksheet.Cell(currentRow, 8).Value = finaldata[0].FS[i].type;
                        worksheet.Cell(currentRow, 9).Value = finaldata[0].FS[i].other_measures;
                        worksheet.Cell(currentRow, 10).Value = finaldata[0].FS[i].department_name;
                        worksheet.Cell(currentRow, 11).Value = finaldata[0].FS[i].scheme_name;
                        worksheet.Cell(currentRow, 12).Value = finaldata[0].FS[i].proposed_area;
                        worksheet.Cell(currentRow, 13).Value = finaldata[0].FS[i].approximate_cost;

                    }
                }
                if (b != 0)
                {
                    for (int i = 0; i < b; i++)
                    {
                        var approval = finaldata[0].DLI3[i].approval;
                        if (approval == "State")
                        {
                            approval = "Approved";

                        }
                        else if (approval == "District")
                        {
                            approval = "Submitted To SPMU";

                        }
                        else if (approval == null)
                        {
                            approval = "At DPMU";

                        }
                        else if (approval == "Reject")
                        {
                            approval = "Rejected";

                        }
                        currentRow++;

                        worksheet.Cell(currentRow, 1).Value = finaldata[0].DLI3[i].state_name;
                        worksheet.Cell(currentRow, 2).Value = finaldata[0].DLI3[i].district_name;
                        worksheet.Cell(currentRow, 3).Value = finaldata[0].DLI3[i].block_name;
                        worksheet.Cell(currentRow, 4).Value = finaldata[0].DLI3[i].gp_name;
                        worksheet.Cell(currentRow, 5).Value = finaldata[0].DLI3[i].latitude;
                        worksheet.Cell(currentRow, 6).Value = finaldata[0].DLI3[i].longitude;
                        worksheet.Cell(currentRow, 7).Value = finaldata[0].DLI3[i].year;
                        worksheet.Cell(currentRow, 8).Value = finaldata[0].DLI3[i].type;
                        worksheet.Cell(currentRow, 9).Value = finaldata[0].DLI3[i].typeother;
                        worksheet.Cell(currentRow, 10).Value = finaldata[0].DLI3[i].department_name;
                        worksheet.Cell(currentRow, 11).Value = finaldata[0].DLI3[i].scheme_name;
                        worksheet.Cell(currentRow, 12).Value = finaldata[0].DLI3[i].proposed_area;
                        worksheet.Cell(currentRow, 13).Value = finaldata[0].DLI3[i].approximate_cost;
                        worksheet.Cell(currentRow, 14).Value = finaldata[0].DLI3[i].work_start_date;
                        worksheet.Cell(currentRow, 15).Value = finaldata[0].DLI3[i].department_name_new;
                        worksheet.Cell(currentRow, 16).Value = finaldata[0].DLI3[i].scheme_name_new;
                        worksheet.Cell(currentRow, 17).Value = finaldata[0].DLI3[i].schemeother;
                        worksheet.Cell(currentRow, 18).Value = finaldata[0].DLI3[i].area_converged_new;
                        worksheet.Cell(currentRow, 19).Value = finaldata[0].DLI3[i].expenditure_incurred;
                        worksheet.Cell(currentRow, 20).Value = finaldata[0].DLI3[i].remark;
                        worksheet.Cell(currentRow, 21).Value = finaldata[0].DLI3[i].reject;
                        worksheet.Cell(currentRow, 22).Value = approval;

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
                    worksheet.Cell(currentRow, 7).Value = "No Data";
                    worksheet.Cell(currentRow, 8).Value = "";
                    worksheet.Cell(currentRow, 9).Value = "";
                    worksheet.Cell(currentRow, 10).Value = "";
                    worksheet.Cell(currentRow, 11).Value = "";
                    worksheet.Cell(currentRow, 12).Value = "";
                    worksheet.Cell(currentRow, 13).Value = "";

                }
                using (var stream = new MemoryStream())
                {
                    workbook.SaveAs(stream);
                    var content = stream.ToArray();

                    return File(
                        content,
                        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                        "Demand Side.xlsx");
                }
            }

        }


        [HttpPost]
        public ActionResult totalpagesupply(string Data, string ddldeman, string supply_va)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<Pagenum>(Data);

                    var State = result.statename;
                    var Dist = result.districtname;
                    var Block = result.blockname;
                    var Gram = result.gpname;
                    var Year = result.year;
                    var month = result.month;
                    var PageNumber = result.PageNumber;
                    var supply_val = supply_va;
                    var ddldemand = ddldeman;

                    var userid = Convert.ToInt32(Session["UserId"]);
                    var ddetails = ABE.obj_supply_AR_Structures.ToList();
                    var ddetails1 = ABE.obj_supply_water_conservation.ToList();
                    var ddetails2 = ABE.obj_supply_any_other_intervention.ToList();
                    var DL3Data = ABE.obj_abhy_supplyside_DLI3.ToList();

                    List<abhy_supplyside_DLI3> get_data = new List<abhy_supplyside_DLI3>();
                    List<abhy_new_Supply_side_new> get_data_new = new List<abhy_new_Supply_side_new>();
                    abhy_new_Supply_side_new allData = new abhy_new_Supply_side_new();
                    List<abhy_new_Supply_side_new> finaldata = new List<abhy_new_Supply_side_new>();

                    if (State == "All" && supply_val == "0")
                    {
                        ddetails = ABE.obj_supply_AR_Structures.Where(x => x.new_table_entry_a != "1").OrderByDescending(x => x.id).ToList();
                        allData.Su = ddetails;

                        ddetails1 = ABE.obj_supply_water_conservation.Where(x => x.new_table_entry_b != "1").OrderByDescending(x => x.id).ToList();
                        allData.Su1 = ddetails1;

                        ddetails2 = ABE.obj_supply_any_other_intervention.Where(x => x.new_table_entry_c != "1").OrderByDescending(x => x.id).ToList();
                        allData.Su2 = ddetails2;

                        var updateddata = ABE.obj_supply_AR_Structures.Where(x => x.new_table_entry_a == "1").ToList();
                        var updateddata1 = ABE.obj_supply_water_conservation.Where(x => x.new_table_entry_b == "1").ToList();
                        var updateddata2 = ABE.obj_supply_any_other_intervention.Where(x => x.new_table_entry_c == "1").ToList();


                        for (int i = 0; i < updateddata.Count; i++)
                        {
                            var data = DL3Data.Where(x => x.old_id1 == updateddata[i].id).FirstOrDefault();
                            if (data != null)
                            {
                                get_data.Add(data);
                            }

                        }
                        for (int i = 0; i < updateddata1.Count; i++)
                        {
                            var data = DL3Data.Where(x => x.old_id2 == updateddata1[i].id).FirstOrDefault();
                            if (data != null)
                            {
                                get_data.Add(data);
                            }

                        }
                        for (int i = 0; i < updateddata2.Count; i++)
                        {
                            var data = DL3Data.Where(x => x.old_id3 == updateddata2[i].id).FirstOrDefault();
                            if (data != null)
                            {
                                get_data.Add(data);
                            }

                        }


                        allData.Su3 = get_data;
                        finaldata.Add(allData);
                    }
                    else if (State == "All" && supply_val != "All")
                    {
                        if (supply_val == "Artifician Recharge Structures")
                        {
                            ddetails = ABE.obj_supply_AR_Structures.Where(x => x.new_table_entry_a != "1").OrderByDescending(x => x.id).ToList();
                            allData.Su = ddetails;

                            var updateddata = ABE.obj_supply_AR_Structures.Where(x => x.new_table_entry_a == "1").ToList();
                            for (int i = 0; i < updateddata.Count; i++)
                            {
                                var data = DL3Data.Where(x => x.old_id1 == updateddata[i].id).FirstOrDefault();
                                if (data != null)
                                {
                                    get_data.Add(data);
                                }

                            }
                            allData.Su3 = get_data;
                            finaldata.Add(allData);

                        }
                        else if (supply_val == "Water Conservation Structures")
                        {
                            ddetails1 = ABE.obj_supply_water_conservation.Where(x => x.new_table_entry_b != "1").OrderByDescending(x => x.id).ToList();
                            allData.Su1 = ddetails1;

                            var updateddata1 = ABE.obj_supply_water_conservation.Where(x => x.new_table_entry_b == "1").ToList();

                            for (int i = 0; i < updateddata1.Count; i++)
                            {
                                var data = DL3Data.Where(x => x.old_id2 == updateddata1[i].id).FirstOrDefault();
                                if (data != null)
                                {
                                    get_data.Add(data);
                                }

                            }
                            allData.Su3 = get_data;
                            finaldata.Add(allData);
                        }
                        else if (supply_val == "Any Other Intervention")
                        {

                            ddetails2 = ABE.obj_supply_any_other_intervention.Where(x => x.new_table_entry_c != "1").OrderByDescending(x => x.id).ToList();
                            allData.Su2 = ddetails2;

                            var updateddata2 = ABE.obj_supply_any_other_intervention.Where(x => x.new_table_entry_c == "1").ToList();

                            for (int i = 0; i < updateddata2.Count; i++)
                            {
                                var data = DL3Data.Where(x => x.old_id3 == updateddata2[i].id).FirstOrDefault();
                                if (data != null)
                                {
                                    get_data.Add(data);
                                }

                            }

                            allData.Su3 = get_data;
                            finaldata.Add(allData);

                        }
                    }
                    else if (State == "All" && supply_val == "All")
                    {
                        if (Year != "0")
                        {
                            ddetails = ABE.obj_supply_AR_Structures.Where(x => x.new_table_entry_a != "1" && x.sp_year == Year).OrderByDescending(x => x.id).ToList();
                            allData.Su = ddetails;

                            ddetails1 = ABE.obj_supply_water_conservation.Where(x => x.new_table_entry_b != "1" && x.wc_year == Year).OrderByDescending(x => x.id).ToList();
                            allData.Su1 = ddetails1;

                            ddetails2 = ABE.obj_supply_any_other_intervention.Where(x => x.new_table_entry_c != "1" && x.any_year == Year).OrderByDescending(x => x.id).ToList();
                            allData.Su2 = ddetails2;

                            var updateddata = ABE.obj_supply_AR_Structures.Where(x => x.new_table_entry_a == "1" && x.sp_year == Year).ToList();
                            var updateddata1 = ABE.obj_supply_water_conservation.Where(x => x.new_table_entry_b == "1" && x.wc_year == Year).ToList();
                            var updateddata2 = ABE.obj_supply_any_other_intervention.Where(x => x.new_table_entry_c == "1" && x.any_year == Year).ToList();


                            for (int i = 0; i < updateddata.Count; i++)
                            {
                                var data = DL3Data.Where(x => x.old_id1 == updateddata[i].id).FirstOrDefault();
                                if (data != null)
                                {
                                    get_data.Add(data);
                                }

                            }
                            for (int i = 0; i < updateddata1.Count; i++)
                            {
                                var data = DL3Data.Where(x => x.old_id2 == updateddata1[i].id).FirstOrDefault();
                                if (data != null)
                                {
                                    get_data.Add(data);
                                }

                            }
                            for (int i = 0; i < updateddata2.Count; i++)
                            {
                                var data = DL3Data.Where(x => x.old_id3 == updateddata2[i].id).FirstOrDefault();
                                if (data != null)
                                {
                                    get_data.Add(data);
                                }

                            }


                            allData.Su3 = get_data;
                            finaldata.Add(allData);
                        }
                        else
                        {
                            ddetails = ABE.obj_supply_AR_Structures.Where(x => x.new_table_entry_a != "1").OrderByDescending(x => x.id).ToList();
                            allData.Su = ddetails;

                            ddetails1 = ABE.obj_supply_water_conservation.Where(x => x.new_table_entry_b != "1").OrderByDescending(x => x.id).ToList();
                            allData.Su1 = ddetails1;

                            ddetails2 = ABE.obj_supply_any_other_intervention.Where(x => x.new_table_entry_c != "1").OrderByDescending(x => x.id).ToList();
                            allData.Su2 = ddetails2;

                            var updateddata = ABE.obj_supply_AR_Structures.Where(x => x.new_table_entry_a == "1").ToList();
                            var updateddata1 = ABE.obj_supply_water_conservation.Where(x => x.new_table_entry_b == "1").ToList();
                            var updateddata2 = ABE.obj_supply_any_other_intervention.Where(x => x.new_table_entry_c == "1").ToList();


                            for (int i = 0; i < updateddata.Count; i++)
                            {
                                var data = DL3Data.Where(x => x.old_id1 == updateddata[i].id).FirstOrDefault();
                                if (data != null)
                                {
                                    get_data.Add(data);
                                }

                            }
                            for (int i = 0; i < updateddata1.Count; i++)
                            {
                                var data = DL3Data.Where(x => x.old_id2 == updateddata1[i].id).FirstOrDefault();
                                if (data != null)
                                {
                                    get_data.Add(data);
                                }

                            }
                            for (int i = 0; i < updateddata2.Count; i++)
                            {
                                var data = DL3Data.Where(x => x.old_id3 == updateddata2[i].id).FirstOrDefault();
                                if (data != null)
                                {
                                    get_data.Add(data);
                                }

                            }


                            allData.Su3 = get_data;
                            finaldata.Add(allData);
                        }
                    }
                    else
                    {
                        if (ddldemand != "All")
                        {
                            if (supply_val != "All")
                            {

                                if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && supply_val != "0" && supply_val != "" && supply_val != null && Year != "0" && Year != "" && Year != null)
                                {
                                    ddetails = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.sp_year == Year && x.new_table_entry_a != "1" && supply_val == "Artifician Recharge Structures").OrderByDescending(x => x.id).ToList();
                                    allData.Su = ddetails;

                                    ddetails1 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.wc_year == Year && x.new_table_entry_b != "1" && supply_val == "Water Conservation Structures").OrderByDescending(x => x.id).ToList();
                                    allData.Su1 = ddetails1;

                                    ddetails2 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.any_year == Year && x.new_table_entry_c != "1" && supply_val == "Any Other Intervention").OrderByDescending(x => x.id).ToList();
                                    allData.Su2 = ddetails2;

                                    var updateddata = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.sp_year == Year && x.new_table_entry_a == "1" && supply_val == "Artifician Recharge Structures").ToList();
                                    var updateddata1 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.wc_year == Year && x.new_table_entry_b == "1" && supply_val == "Water Conservation Structures").ToList();
                                    var updateddata2 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.any_year == Year && x.new_table_entry_c == "1" && supply_val == "Any Other Intervention").ToList();


                                    for (int i = 0; i < updateddata.Count; i++)
                                    {
                                        var data = DL3Data.Where(x => x.old_id1 == updateddata[i].id).FirstOrDefault();
                                        if (data != null)
                                        {
                                            get_data.Add(data);
                                        }

                                    }
                                    for (int i = 0; i < updateddata1.Count; i++)
                                    {
                                        var data = DL3Data.Where(x => x.old_id2 == updateddata1[i].id).FirstOrDefault();
                                        if (data != null)
                                        {
                                            get_data.Add(data);
                                        }

                                    }
                                    for (int i = 0; i < updateddata2.Count; i++)
                                    {
                                        var data = DL3Data.Where(x => x.old_id3 == updateddata2[i].id).FirstOrDefault();
                                        if (data != null)
                                        {
                                            get_data.Add(data);
                                        }

                                    }


                                    allData.Su3 = get_data;
                                    finaldata.Add(allData);

                                }
                                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && supply_val != "0" && supply_val != "" && supply_val != null)
                                {
                                    ddetails = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.new_table_entry_a != "1" && supply_val == "Artifician Recharge Structures").OrderByDescending(x => x.id).ToList();
                                    allData.Su = ddetails;

                                    ddetails1 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.new_table_entry_b != "1" && supply_val == "Water Conservation Structures").OrderByDescending(x => x.id).ToList();
                                    allData.Su1 = ddetails1;

                                    ddetails2 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.new_table_entry_c != "1" && supply_val == "Any Other Intervention").OrderByDescending(x => x.id).ToList();
                                    allData.Su2 = ddetails2;

                                    var updateddata = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.new_table_entry_a == "1" && supply_val == "Artifician Recharge Structures").ToList();
                                    var updateddata1 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.new_table_entry_b == "1" && supply_val == "Water Conservation Structures").ToList();
                                    var updateddata2 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.new_table_entry_c == "1" && supply_val == "Any Other Intervention").ToList();


                                    for (int i = 0; i < updateddata.Count; i++)
                                    {
                                        var data = DL3Data.Where(x => x.old_id1 == updateddata[i].id).FirstOrDefault();
                                        if (data != null)
                                        {
                                            get_data.Add(data);
                                        }

                                    }
                                    for (int i = 0; i < updateddata1.Count; i++)
                                    {
                                        var data = DL3Data.Where(x => x.old_id2 == updateddata1[i].id).FirstOrDefault();
                                        if (data != null)
                                        {
                                            get_data.Add(data);
                                        }

                                    }
                                    for (int i = 0; i < updateddata2.Count; i++)
                                    {
                                        var data = DL3Data.Where(x => x.old_id3 == updateddata2[i].id).FirstOrDefault();
                                        if (data != null)
                                        {
                                            get_data.Add(data);
                                        }

                                    }


                                    allData.Su3 = get_data;
                                    finaldata.Add(allData);

                                }
                                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && supply_val != "0" && supply_val != "" && supply_val != null && Year != "0" && Year != "" && Year != null)
                                {
                                    ddetails = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.sp_year == Year && x.new_table_entry_a != "1" && supply_val == "Artifician Recharge Structures").OrderByDescending(x => x.id).ToList();
                                    allData.Su = ddetails;

                                    ddetails1 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.wc_year == Year && x.new_table_entry_b != "1" && supply_val == "Water Conservation Structures").OrderByDescending(x => x.id).ToList();
                                    allData.Su1 = ddetails1;

                                    ddetails2 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.any_year == Year && x.new_table_entry_c != "1" && supply_val == "Any Other Intervention").OrderByDescending(x => x.id).ToList();
                                    allData.Su2 = ddetails2;

                                    var updateddata = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.sp_year == Year && x.new_table_entry_a == "1" && supply_val == "Artifician Recharge Structures").ToList();
                                    var updateddata1 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.wc_year == Year && x.new_table_entry_b == "1" && supply_val == "Water Conservation Structures").ToList();
                                    var updateddata2 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.any_year == Year && x.new_table_entry_c == "1" && supply_val == "Any Other Intervention").ToList();


                                    for (int i = 0; i < updateddata.Count; i++)
                                    {
                                        var data = DL3Data.Where(x => x.old_id1 == updateddata[i].id).FirstOrDefault();
                                        if (data != null)
                                        {
                                            get_data.Add(data);
                                        }

                                    }
                                    for (int i = 0; i < updateddata1.Count; i++)
                                    {
                                        var data = DL3Data.Where(x => x.old_id2 == updateddata1[i].id).FirstOrDefault();
                                        if (data != null)
                                        {
                                            get_data.Add(data);
                                        }

                                    }
                                    for (int i = 0; i < updateddata2.Count; i++)
                                    {
                                        var data = DL3Data.Where(x => x.old_id3 == updateddata2[i].id).FirstOrDefault();
                                        if (data != null)
                                        {
                                            get_data.Add(data);
                                        }

                                    }


                                    allData.Su3 = get_data;
                                    finaldata.Add(allData);

                                }
                                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && supply_val != "0" && supply_val != "" && supply_val != null)
                                {
                                    ddetails = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.new_table_entry_a != "1" && supply_val == "Artifician Recharge Structures").OrderByDescending(x => x.id).ToList();
                                    allData.Su = ddetails;

                                    ddetails1 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.new_table_entry_b != "1" && supply_val == "Water Conservation Structures").OrderByDescending(x => x.id).ToList();
                                    allData.Su1 = ddetails1;

                                    ddetails2 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.new_table_entry_c != "1" && supply_val == "Any Other Intervention").OrderByDescending(x => x.id).ToList();
                                    allData.Su2 = ddetails2;

                                    var updateddata = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.new_table_entry_a == "1" && supply_val == "Artifician Recharge Structures").ToList();
                                    var updateddata1 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.new_table_entry_b == "1" && supply_val == "Water Conservation Structures").ToList();
                                    var updateddata2 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.new_table_entry_c == "1" && supply_val == "Any Other Intervention").ToList();


                                    for (int i = 0; i < updateddata.Count; i++)
                                    {
                                        var data = DL3Data.Where(x => x.old_id1 == updateddata[i].id).FirstOrDefault();
                                        if (data != null)
                                        {
                                            get_data.Add(data);
                                        }

                                    }
                                    for (int i = 0; i < updateddata1.Count; i++)
                                    {
                                        var data = DL3Data.Where(x => x.old_id2 == updateddata1[i].id).FirstOrDefault();
                                        if (data != null)
                                        {
                                            get_data.Add(data);
                                        }

                                    }
                                    for (int i = 0; i < updateddata2.Count; i++)
                                    {
                                        var data = DL3Data.Where(x => x.old_id3 == updateddata2[i].id).FirstOrDefault();
                                        if (data != null)
                                        {
                                            get_data.Add(data);
                                        }

                                    }


                                    allData.Su3 = get_data;
                                    finaldata.Add(allData);

                                }
                                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && supply_val != "0" && supply_val != "" && supply_val != null && Year != "0" && Year != "" && Year != null)
                                {
                                    ddetails = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.sp_year == Year && x.new_table_entry_a != "1" && supply_val == "Artifician Recharge Structures").OrderByDescending(x => x.id).ToList();
                                    allData.Su = ddetails;

                                    ddetails1 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.wc_year == Year && x.new_table_entry_b != "1" && supply_val == "Water Conservation Structures").OrderByDescending(x => x.id).ToList();
                                    allData.Su1 = ddetails1;

                                    ddetails2 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.any_year == Year && x.new_table_entry_c != "1" && supply_val == "Any Other Intervention").OrderByDescending(x => x.id).ToList();
                                    allData.Su2 = ddetails2;

                                    var updateddata = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.sp_year == Year && x.new_table_entry_a == "1" && supply_val == "Artifician Recharge Structures").ToList();
                                    var updateddata1 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.wc_year == Year && x.new_table_entry_b == "1" && supply_val == "Water Conservation Structures").ToList();
                                    var updateddata2 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.any_year == Year && x.new_table_entry_c == "1" && supply_val == "Any Other Intervention").ToList();


                                    for (int i = 0; i < updateddata.Count; i++)
                                    {
                                        var data = DL3Data.Where(x => x.old_id1 == updateddata[i].id).FirstOrDefault();
                                        if (data != null)
                                        {
                                            get_data.Add(data);
                                        }

                                    }
                                    for (int i = 0; i < updateddata1.Count; i++)
                                    {
                                        var data = DL3Data.Where(x => x.old_id2 == updateddata1[i].id).FirstOrDefault();
                                        if (data != null)
                                        {
                                            get_data.Add(data);
                                        }

                                    }
                                    for (int i = 0; i < updateddata2.Count; i++)
                                    {
                                        var data = DL3Data.Where(x => x.old_id3 == updateddata2[i].id).FirstOrDefault();
                                        if (data != null)
                                        {
                                            get_data.Add(data);
                                        }

                                    }


                                    allData.Su3 = get_data;
                                    finaldata.Add(allData);

                                }
                                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && supply_val != "0" && supply_val != "" && supply_val != null)
                                {
                                    ddetails = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.new_table_entry_a != "1" && supply_val == "Artifician Recharge Structures").OrderByDescending(x => x.id).ToList();
                                    allData.Su = ddetails;

                                    ddetails1 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.new_table_entry_b != "1" && supply_val == "Water Conservation Structures").OrderByDescending(x => x.id).ToList();
                                    allData.Su1 = ddetails1;

                                    ddetails2 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.new_table_entry_c != "1" && supply_val == "Any Other Intervention").OrderByDescending(x => x.id).ToList();
                                    allData.Su2 = ddetails2;

                                    var updateddata = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.new_table_entry_a == "1" && supply_val == "Artifician Recharge Structures").ToList();
                                    var updateddata1 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.new_table_entry_b == "1" && supply_val == "Water Conservation Structures").ToList();
                                    var updateddata2 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.new_table_entry_c == "1" && supply_val == "Any Other Intervention").ToList();


                                    for (int i = 0; i < updateddata.Count; i++)
                                    {
                                        var data = DL3Data.Where(x => x.old_id1 == updateddata[i].id).FirstOrDefault();
                                        if (data != null)
                                        {
                                            get_data.Add(data);
                                        }

                                    }
                                    for (int i = 0; i < updateddata1.Count; i++)
                                    {
                                        var data = DL3Data.Where(x => x.old_id2 == updateddata1[i].id).FirstOrDefault();
                                        if (data != null)
                                        {
                                            get_data.Add(data);
                                        }

                                    }
                                    for (int i = 0; i < updateddata2.Count; i++)
                                    {
                                        var data = DL3Data.Where(x => x.old_id3 == updateddata2[i].id).FirstOrDefault();
                                        if (data != null)
                                        {
                                            get_data.Add(data);
                                        }

                                    }


                                    allData.Su3 = get_data;
                                    finaldata.Add(allData);

                                }
                                else if (State != "0" && State != "" && State != null && supply_val != "0" && supply_val != "" && supply_val != null && Year != "0" && Year != "" && Year != null)
                                {
                                    ddetails = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.sp_year == Year && x.new_table_entry_a != "1" && supply_val == "Artifician Recharge Structures").OrderByDescending(x => x.id).ToList();
                                    allData.Su = ddetails;

                                    ddetails1 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.wc_year == Year && x.new_table_entry_b != "1" && supply_val == "Water Conservation Structures").OrderByDescending(x => x.id).ToList();
                                    allData.Su1 = ddetails1;

                                    ddetails2 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.any_year == Year && x.new_table_entry_c != "1" && supply_val == "Any Other Intervention").OrderByDescending(x => x.id).ToList();
                                    allData.Su2 = ddetails2;

                                    var updateddata = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.sp_year == Year && x.new_table_entry_a == "1" && supply_val == "Artifician Recharge Structures").ToList();
                                    var updateddata1 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.wc_year == Year && x.new_table_entry_b == "1" && supply_val == "Water Conservation Structures").ToList();
                                    var updateddata2 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.any_year == Year && x.new_table_entry_c == "1" && supply_val == "Any Other Intervention").ToList();


                                    for (int i = 0; i < updateddata.Count; i++)
                                    {
                                        var data = DL3Data.Where(x => x.old_id1 == updateddata[i].id).FirstOrDefault();
                                        if (data != null)
                                        {
                                            get_data.Add(data);
                                        }

                                    }
                                    for (int i = 0; i < updateddata1.Count; i++)
                                    {
                                        var data = DL3Data.Where(x => x.old_id2 == updateddata1[i].id).FirstOrDefault();
                                        if (data != null)
                                        {
                                            get_data.Add(data);
                                        }

                                    }
                                    for (int i = 0; i < updateddata2.Count; i++)
                                    {
                                        var data = DL3Data.Where(x => x.old_id3 == updateddata2[i].id).FirstOrDefault();
                                        if (data != null)
                                        {
                                            get_data.Add(data);
                                        }

                                    }


                                    allData.Su3 = get_data;
                                    finaldata.Add(allData);

                                }
                                else if (State != "0" && State != "" && State != null && supply_val != "0" && supply_val != "" && supply_val != null)
                                {
                                    ddetails = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.new_table_entry_a != "1" && supply_val == "Artifician Recharge Structures").OrderByDescending(x => x.id).ToList();
                                    allData.Su = ddetails;

                                    ddetails1 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.new_table_entry_b != "1" && supply_val == "Water Conservation Structures").OrderByDescending(x => x.id).ToList();
                                    allData.Su1 = ddetails1;

                                    ddetails2 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.new_table_entry_c != "1" && supply_val == "Any Other Intervention").OrderByDescending(x => x.id).ToList();
                                    allData.Su2 = ddetails2;

                                    var updateddata = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.new_table_entry_a == "1" && supply_val == "Artifician Recharge Structures").ToList();
                                    var updateddata1 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.new_table_entry_b == "1" && supply_val == "Water Conservation Structures").ToList();
                                    var updateddata2 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.new_table_entry_c == "1" && supply_val == "Any Other Intervention").ToList();


                                    for (int i = 0; i < updateddata.Count; i++)
                                    {
                                        var data = DL3Data.Where(x => x.old_id1 == updateddata[i].id).FirstOrDefault();
                                        if (data != null)
                                        {
                                            get_data.Add(data);
                                        }

                                    }
                                    for (int i = 0; i < updateddata1.Count; i++)
                                    {
                                        var data = DL3Data.Where(x => x.old_id2 == updateddata1[i].id).FirstOrDefault();
                                        if (data != null)
                                        {
                                            get_data.Add(data);
                                        }

                                    }
                                    for (int i = 0; i < updateddata2.Count; i++)
                                    {
                                        var data = DL3Data.Where(x => x.old_id3 == updateddata2[i].id).FirstOrDefault();
                                        if (data != null)
                                        {
                                            get_data.Add(data);
                                        }

                                    }


                                    allData.Su3 = get_data;
                                    finaldata.Add(allData);

                                }

                            }
                            else
                            {
                                if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null)
                                {
                                    ddetails = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.sp_year == Year && x.new_table_entry_a != "1").OrderByDescending(x => x.id).ToList();
                                    allData.Su = ddetails;

                                    ddetails1 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.wc_year == Year && x.new_table_entry_b != "1").OrderByDescending(x => x.id).ToList();
                                    allData.Su1 = ddetails1;

                                    ddetails2 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.any_year == Year && x.new_table_entry_c != "1").OrderByDescending(x => x.id).ToList();
                                    allData.Su2 = ddetails2;

                                    var updateddata = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.sp_year == Year && x.new_table_entry_a == "1").ToList();
                                    var updateddata1 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.wc_year == Year && x.new_table_entry_b == "1").ToList();
                                    var updateddata2 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.any_year == Year && x.new_table_entry_c == "1").ToList();


                                    for (int i = 0; i < updateddata.Count; i++)
                                    {
                                        var data = DL3Data.Where(x => x.old_id1 == updateddata[i].id).FirstOrDefault();
                                        if (data != null)
                                        {
                                            get_data.Add(data);
                                        }

                                    }
                                    for (int i = 0; i < updateddata1.Count; i++)
                                    {
                                        var data = DL3Data.Where(x => x.old_id2 == updateddata1[i].id).FirstOrDefault();
                                        if (data != null)
                                        {
                                            get_data.Add(data);
                                        }

                                    }
                                    for (int i = 0; i < updateddata2.Count; i++)
                                    {
                                        var data = DL3Data.Where(x => x.old_id3 == updateddata2[i].id).FirstOrDefault();
                                        if (data != null)
                                        {
                                            get_data.Add(data);
                                        }

                                    }


                                    allData.Su3 = get_data;
                                    finaldata.Add(allData);

                                }
                                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                                {
                                    ddetails = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.new_table_entry_a != "1").OrderByDescending(x => x.id).ToList();
                                    allData.Su = ddetails;

                                    ddetails1 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.new_table_entry_b != "1").OrderByDescending(x => x.id).ToList();
                                    allData.Su1 = ddetails1;

                                    ddetails2 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.new_table_entry_c != "1").OrderByDescending(x => x.id).ToList();
                                    allData.Su2 = ddetails2;

                                    var updateddata = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.new_table_entry_a == "1").ToList();
                                    var updateddata1 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.new_table_entry_b == "1").ToList();
                                    var updateddata2 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.new_table_entry_c == "1").ToList();


                                    for (int i = 0; i < updateddata.Count; i++)
                                    {
                                        var data = DL3Data.Where(x => x.old_id1 == updateddata[i].id).FirstOrDefault();
                                        if (data != null)
                                        {
                                            get_data.Add(data);
                                        }

                                    }
                                    for (int i = 0; i < updateddata1.Count; i++)
                                    {
                                        var data = DL3Data.Where(x => x.old_id2 == updateddata1[i].id).FirstOrDefault();
                                        if (data != null)
                                        {
                                            get_data.Add(data);
                                        }

                                    }
                                    for (int i = 0; i < updateddata2.Count; i++)
                                    {
                                        var data = DL3Data.Where(x => x.old_id3 == updateddata2[i].id).FirstOrDefault();
                                        if (data != null)
                                        {
                                            get_data.Add(data);
                                        }

                                    }


                                    allData.Su3 = get_data;
                                    finaldata.Add(allData);

                                }
                                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Year != "0" && Year != "" && Year != null)
                                {
                                    ddetails = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.sp_year == Year && x.new_table_entry_a != "1").OrderByDescending(x => x.id).ToList();
                                    allData.Su = ddetails;

                                    ddetails1 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.wc_year == Year && x.new_table_entry_b != "1").OrderByDescending(x => x.id).ToList();
                                    allData.Su1 = ddetails1;

                                    ddetails2 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.any_year == Year && x.new_table_entry_c != "1").OrderByDescending(x => x.id).ToList();
                                    allData.Su2 = ddetails2;

                                    var updateddata = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.sp_year == Year && x.new_table_entry_a == "1").ToList();
                                    var updateddata1 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.wc_year == Year && x.new_table_entry_b == "1").ToList();
                                    var updateddata2 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.any_year == Year && x.new_table_entry_c == "1").ToList();


                                    for (int i = 0; i < updateddata.Count; i++)
                                    {
                                        var data = DL3Data.Where(x => x.old_id1 == updateddata[i].id).FirstOrDefault();
                                        if (data != null)
                                        {
                                            get_data.Add(data);
                                        }

                                    }
                                    for (int i = 0; i < updateddata1.Count; i++)
                                    {
                                        var data = DL3Data.Where(x => x.old_id2 == updateddata1[i].id).FirstOrDefault();
                                        if (data != null)
                                        {
                                            get_data.Add(data);
                                        }

                                    }
                                    for (int i = 0; i < updateddata2.Count; i++)
                                    {
                                        var data = DL3Data.Where(x => x.old_id3 == updateddata2[i].id).FirstOrDefault();
                                        if (data != null)
                                        {
                                            get_data.Add(data);
                                        }

                                    }


                                    allData.Su3 = get_data;
                                    finaldata.Add(allData);

                                }
                                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                                {
                                    ddetails = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.new_table_entry_a != "1").OrderByDescending(x => x.id).ToList();
                                    allData.Su = ddetails;

                                    ddetails1 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.new_table_entry_b != "1").OrderByDescending(x => x.id).ToList();
                                    allData.Su1 = ddetails1;

                                    ddetails2 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.new_table_entry_c != "1").OrderByDescending(x => x.id).ToList();
                                    allData.Su2 = ddetails2;

                                    var updateddata = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.new_table_entry_a == "1").ToList();
                                    var updateddata1 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.new_table_entry_b == "1").ToList();
                                    var updateddata2 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.new_table_entry_c == "1").ToList();


                                    for (int i = 0; i < updateddata.Count; i++)
                                    {
                                        var data = DL3Data.Where(x => x.old_id1 == updateddata[i].id).FirstOrDefault();
                                        if (data != null)
                                        {
                                            get_data.Add(data);
                                        }

                                    }
                                    for (int i = 0; i < updateddata1.Count; i++)
                                    {
                                        var data = DL3Data.Where(x => x.old_id2 == updateddata1[i].id).FirstOrDefault();
                                        if (data != null)
                                        {
                                            get_data.Add(data);
                                        }

                                    }
                                    for (int i = 0; i < updateddata2.Count; i++)
                                    {
                                        var data = DL3Data.Where(x => x.old_id3 == updateddata2[i].id).FirstOrDefault();
                                        if (data != null)
                                        {
                                            get_data.Add(data);
                                        }

                                    }


                                    allData.Su3 = get_data;
                                    finaldata.Add(allData);

                                }
                                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null)
                                {
                                    ddetails = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.sp_year == Year && x.new_table_entry_a != "1").OrderByDescending(x => x.id).ToList();
                                    allData.Su = ddetails;

                                    ddetails1 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.wc_year == Year && x.new_table_entry_b != "1").OrderByDescending(x => x.id).ToList();
                                    allData.Su1 = ddetails1;

                                    ddetails2 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.any_year == Year && x.new_table_entry_c != "1").OrderByDescending(x => x.id).ToList();
                                    allData.Su2 = ddetails2;

                                    var updateddata = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.sp_year == Year && x.new_table_entry_a == "1").ToList();
                                    var updateddata1 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.wc_year == Year && x.new_table_entry_b == "1").ToList();
                                    var updateddata2 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.any_year == Year && x.new_table_entry_c == "1").ToList();


                                    for (int i = 0; i < updateddata.Count; i++)
                                    {
                                        var data = DL3Data.Where(x => x.old_id1 == updateddata[i].id).FirstOrDefault();
                                        if (data != null)
                                        {
                                            get_data.Add(data);
                                        }

                                    }
                                    for (int i = 0; i < updateddata1.Count; i++)
                                    {
                                        var data = DL3Data.Where(x => x.old_id2 == updateddata1[i].id).FirstOrDefault();
                                        if (data != null)
                                        {
                                            get_data.Add(data);
                                        }

                                    }
                                    for (int i = 0; i < updateddata2.Count; i++)
                                    {
                                        var data = DL3Data.Where(x => x.old_id3 == updateddata2[i].id).FirstOrDefault();
                                        if (data != null)
                                        {
                                            get_data.Add(data);
                                        }

                                    }


                                    allData.Su3 = get_data;
                                    finaldata.Add(allData);

                                }
                                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                                {
                                    ddetails = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.new_table_entry_a != "1").OrderByDescending(x => x.id).ToList();
                                    allData.Su = ddetails;

                                    ddetails1 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.new_table_entry_b != "1").OrderByDescending(x => x.id).ToList();
                                    allData.Su1 = ddetails1;

                                    ddetails2 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.new_table_entry_c != "1").OrderByDescending(x => x.id).ToList();
                                    allData.Su2 = ddetails2;

                                    var updateddata = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.new_table_entry_a == "1").ToList();
                                    var updateddata1 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.new_table_entry_b == "1").ToList();
                                    var updateddata2 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.new_table_entry_c == "1").ToList();


                                    for (int i = 0; i < updateddata.Count; i++)
                                    {
                                        var data = DL3Data.Where(x => x.old_id1 == updateddata[i].id).FirstOrDefault();
                                        if (data != null)
                                        {
                                            get_data.Add(data);
                                        }

                                    }
                                    for (int i = 0; i < updateddata1.Count; i++)
                                    {
                                        var data = DL3Data.Where(x => x.old_id2 == updateddata1[i].id).FirstOrDefault();
                                        if (data != null)
                                        {
                                            get_data.Add(data);
                                        }

                                    }
                                    for (int i = 0; i < updateddata2.Count; i++)
                                    {
                                        var data = DL3Data.Where(x => x.old_id3 == updateddata2[i].id).FirstOrDefault();
                                        if (data != null)
                                        {
                                            get_data.Add(data);
                                        }

                                    }


                                    allData.Su3 = get_data;
                                    finaldata.Add(allData);

                                }
                                else if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null)
                                {
                                    ddetails = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.sp_year == Year && x.new_table_entry_a != "1").OrderByDescending(x => x.id).ToList();
                                    allData.Su = ddetails;

                                    ddetails1 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.wc_year == Year && x.new_table_entry_b != "1").OrderByDescending(x => x.id).ToList();
                                    allData.Su1 = ddetails1;

                                    ddetails2 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.any_year == Year && x.new_table_entry_c != "1").OrderByDescending(x => x.id).ToList();
                                    allData.Su2 = ddetails2;

                                    var updateddata = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.sp_year == Year && x.new_table_entry_a == "1").ToList();
                                    var updateddata1 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.wc_year == Year && x.new_table_entry_b == "1").ToList();
                                    var updateddata2 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.any_year == Year && x.new_table_entry_c == "1").ToList();


                                    for (int i = 0; i < updateddata.Count; i++)
                                    {
                                        var data = DL3Data.Where(x => x.old_id1 == updateddata[i].id).FirstOrDefault();
                                        if (data != null)
                                        {
                                            get_data.Add(data);
                                        }

                                    }
                                    for (int i = 0; i < updateddata1.Count; i++)
                                    {
                                        var data = DL3Data.Where(x => x.old_id2 == updateddata1[i].id).FirstOrDefault();
                                        if (data != null)
                                        {
                                            get_data.Add(data);
                                        }

                                    }
                                    for (int i = 0; i < updateddata2.Count; i++)
                                    {
                                        var data = DL3Data.Where(x => x.old_id3 == updateddata2[i].id).FirstOrDefault();
                                        if (data != null)
                                        {
                                            get_data.Add(data);
                                        }

                                    }


                                    allData.Su3 = get_data;
                                    finaldata.Add(allData);

                                }
                                else if (State != "0" && State != "" && State != null)
                                {
                                    ddetails = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.new_table_entry_a != "1").OrderByDescending(x => x.id).ToList();
                                    allData.Su = ddetails;

                                    ddetails1 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.new_table_entry_b != "1").OrderByDescending(x => x.id).ToList();
                                    allData.Su1 = ddetails1;

                                    ddetails2 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.new_table_entry_c != "1").OrderByDescending(x => x.id).ToList();
                                    allData.Su2 = ddetails2;

                                    var updateddata = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.new_table_entry_a == "1").ToList();
                                    var updateddata1 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.new_table_entry_b == "1").ToList();
                                    var updateddata2 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.new_table_entry_c == "1").ToList();


                                    for (int i = 0; i < updateddata.Count; i++)
                                    {
                                        var data = DL3Data.Where(x => x.old_id1 == updateddata[i].id).FirstOrDefault();
                                        if (data != null)
                                        {
                                            get_data.Add(data);
                                        }

                                    }
                                    for (int i = 0; i < updateddata1.Count; i++)
                                    {
                                        var data = DL3Data.Where(x => x.old_id2 == updateddata1[i].id).FirstOrDefault();
                                        if (data != null)
                                        {
                                            get_data.Add(data);
                                        }

                                    }
                                    for (int i = 0; i < updateddata2.Count; i++)
                                    {
                                        var data = DL3Data.Where(x => x.old_id3 == updateddata2[i].id).FirstOrDefault();
                                        if (data != null)
                                        {
                                            get_data.Add(data);
                                        }

                                    }


                                    allData.Su3 = get_data;
                                    finaldata.Add(allData);

                                }
                            }
                        }
                        else
                        {
                            if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null)
                            {
                                ddetails = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.sp_year == Year && x.new_table_entry_a != "1").OrderByDescending(x => x.id).ToList();
                                allData.Su = ddetails;

                                ddetails1 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.wc_year == Year && x.new_table_entry_b != "1").OrderByDescending(x => x.id).ToList();
                                allData.Su1 = ddetails1;

                                ddetails2 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.any_year == Year && x.new_table_entry_c != "1").OrderByDescending(x => x.id).ToList();
                                allData.Su2 = ddetails2;

                                var updateddata = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.sp_year == Year && x.new_table_entry_a == "1").ToList();
                                var updateddata1 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.wc_year == Year && x.new_table_entry_b == "1").ToList();
                                var updateddata2 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.any_year == Year && x.new_table_entry_c == "1").ToList();


                                for (int i = 0; i < updateddata.Count; i++)
                                {
                                    var data = DL3Data.Where(x => x.old_id1 == updateddata[i].id).FirstOrDefault();
                                    if (data != null)
                                    {
                                        get_data.Add(data);
                                    }

                                }
                                for (int i = 0; i < updateddata1.Count; i++)
                                {
                                    var data = DL3Data.Where(x => x.old_id2 == updateddata1[i].id).FirstOrDefault();
                                    if (data != null)
                                    {
                                        get_data.Add(data);
                                    }

                                }
                                for (int i = 0; i < updateddata2.Count; i++)
                                {
                                    var data = DL3Data.Where(x => x.old_id3 == updateddata2[i].id).FirstOrDefault();
                                    if (data != null)
                                    {
                                        get_data.Add(data);
                                    }

                                }


                                allData.Su3 = get_data;
                                finaldata.Add(allData);

                            }
                            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                            {
                                ddetails = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.new_table_entry_a != "1").OrderByDescending(x => x.id).ToList();
                                allData.Su = ddetails;

                                ddetails1 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.new_table_entry_b != "1").OrderByDescending(x => x.id).ToList();
                                allData.Su1 = ddetails1;

                                ddetails2 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.new_table_entry_c != "1").OrderByDescending(x => x.id).ToList();
                                allData.Su2 = ddetails2;

                                var updateddata = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.new_table_entry_a == "1").ToList();
                                var updateddata1 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.new_table_entry_b == "1").ToList();
                                var updateddata2 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.new_table_entry_c == "1").ToList();


                                for (int i = 0; i < updateddata.Count; i++)
                                {
                                    var data = DL3Data.Where(x => x.old_id1 == updateddata[i].id).FirstOrDefault();
                                    if (data != null)
                                    {
                                        get_data.Add(data);
                                    }

                                }
                                for (int i = 0; i < updateddata1.Count; i++)
                                {
                                    var data = DL3Data.Where(x => x.old_id2 == updateddata1[i].id).FirstOrDefault();
                                    if (data != null)
                                    {
                                        get_data.Add(data);
                                    }

                                }
                                for (int i = 0; i < updateddata2.Count; i++)
                                {
                                    var data = DL3Data.Where(x => x.old_id3 == updateddata2[i].id).FirstOrDefault();
                                    if (data != null)
                                    {
                                        get_data.Add(data);
                                    }

                                }


                                allData.Su3 = get_data;
                                finaldata.Add(allData);

                            }
                            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Year != "0" && Year != "" && Year != null)
                            {
                                ddetails = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.sp_year == Year && x.new_table_entry_a != "1").OrderByDescending(x => x.id).ToList();
                                allData.Su = ddetails;

                                ddetails1 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.wc_year == Year && x.new_table_entry_b != "1").OrderByDescending(x => x.id).ToList();
                                allData.Su1 = ddetails1;

                                ddetails2 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.any_year == Year && x.new_table_entry_c != "1").OrderByDescending(x => x.id).ToList();
                                allData.Su2 = ddetails2;

                                var updateddata = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.sp_year == Year && x.new_table_entry_a == "1").ToList();
                                var updateddata1 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.wc_year == Year && x.new_table_entry_b == "1").ToList();
                                var updateddata2 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.any_year == Year && x.new_table_entry_c == "1").ToList();


                                for (int i = 0; i < updateddata.Count; i++)
                                {
                                    var data = DL3Data.Where(x => x.old_id1 == updateddata[i].id).FirstOrDefault();
                                    if (data != null)
                                    {
                                        get_data.Add(data);
                                    }

                                }
                                for (int i = 0; i < updateddata1.Count; i++)
                                {
                                    var data = DL3Data.Where(x => x.old_id2 == updateddata1[i].id).FirstOrDefault();
                                    if (data != null)
                                    {
                                        get_data.Add(data);
                                    }

                                }
                                for (int i = 0; i < updateddata2.Count; i++)
                                {
                                    var data = DL3Data.Where(x => x.old_id3 == updateddata2[i].id).FirstOrDefault();
                                    if (data != null)
                                    {
                                        get_data.Add(data);
                                    }

                                }


                                allData.Su3 = get_data;
                                finaldata.Add(allData);

                            }
                            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                            {
                                ddetails = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.new_table_entry_a != "1").OrderByDescending(x => x.id).ToList();
                                allData.Su = ddetails;

                                ddetails1 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.new_table_entry_b != "1").OrderByDescending(x => x.id).ToList();
                                allData.Su1 = ddetails1;

                                ddetails2 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.new_table_entry_c != "1").OrderByDescending(x => x.id).ToList();
                                allData.Su2 = ddetails2;

                                var updateddata = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.new_table_entry_a == "1").ToList();
                                var updateddata1 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.new_table_entry_b == "1").ToList();
                                var updateddata2 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.new_table_entry_c == "1").ToList();


                                for (int i = 0; i < updateddata.Count; i++)
                                {
                                    var data = DL3Data.Where(x => x.old_id1 == updateddata[i].id).FirstOrDefault();
                                    if (data != null)
                                    {
                                        get_data.Add(data);
                                    }

                                }
                                for (int i = 0; i < updateddata1.Count; i++)
                                {
                                    var data = DL3Data.Where(x => x.old_id2 == updateddata1[i].id).FirstOrDefault();
                                    if (data != null)
                                    {
                                        get_data.Add(data);
                                    }

                                }
                                for (int i = 0; i < updateddata2.Count; i++)
                                {
                                    var data = DL3Data.Where(x => x.old_id3 == updateddata2[i].id).FirstOrDefault();
                                    if (data != null)
                                    {
                                        get_data.Add(data);
                                    }

                                }


                                allData.Su3 = get_data;
                                finaldata.Add(allData);

                            }
                            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null)
                            {
                                ddetails = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.sp_year == Year && x.new_table_entry_a != "1").OrderByDescending(x => x.id).ToList();
                                allData.Su = ddetails;

                                ddetails1 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.wc_year == Year && x.new_table_entry_b != "1").OrderByDescending(x => x.id).ToList();
                                allData.Su1 = ddetails1;

                                ddetails2 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.any_year == Year && x.new_table_entry_c != "1").OrderByDescending(x => x.id).ToList();
                                allData.Su2 = ddetails2;

                                var updateddata = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.sp_year == Year && x.new_table_entry_a == "1").ToList();
                                var updateddata1 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.wc_year == Year && x.new_table_entry_b == "1").ToList();
                                var updateddata2 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.any_year == Year && x.new_table_entry_c == "1").ToList();


                                for (int i = 0; i < updateddata.Count; i++)
                                {
                                    var data = DL3Data.Where(x => x.old_id1 == updateddata[i].id).FirstOrDefault();
                                    if (data != null)
                                    {
                                        get_data.Add(data);
                                    }

                                }
                                for (int i = 0; i < updateddata1.Count; i++)
                                {
                                    var data = DL3Data.Where(x => x.old_id2 == updateddata1[i].id).FirstOrDefault();
                                    if (data != null)
                                    {
                                        get_data.Add(data);
                                    }

                                }
                                for (int i = 0; i < updateddata2.Count; i++)
                                {
                                    var data = DL3Data.Where(x => x.old_id3 == updateddata2[i].id).FirstOrDefault();
                                    if (data != null)
                                    {
                                        get_data.Add(data);
                                    }

                                }


                                allData.Su3 = get_data;
                                finaldata.Add(allData);

                            }
                            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                            {
                                ddetails = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.new_table_entry_a != "1").OrderByDescending(x => x.id).ToList();
                                allData.Su = ddetails;

                                ddetails1 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.new_table_entry_b != "1").OrderByDescending(x => x.id).ToList();
                                allData.Su1 = ddetails1;

                                ddetails2 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.new_table_entry_c != "1").OrderByDescending(x => x.id).ToList();
                                allData.Su2 = ddetails2;

                                var updateddata = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.new_table_entry_a == "1").ToList();
                                var updateddata1 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.new_table_entry_b == "1").ToList();
                                var updateddata2 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.new_table_entry_c == "1").ToList();


                                for (int i = 0; i < updateddata.Count; i++)
                                {
                                    var data = DL3Data.Where(x => x.old_id1 == updateddata[i].id).FirstOrDefault();
                                    if (data != null)
                                    {
                                        get_data.Add(data);
                                    }

                                }
                                for (int i = 0; i < updateddata1.Count; i++)
                                {
                                    var data = DL3Data.Where(x => x.old_id2 == updateddata1[i].id).FirstOrDefault();
                                    if (data != null)
                                    {
                                        get_data.Add(data);
                                    }

                                }
                                for (int i = 0; i < updateddata2.Count; i++)
                                {
                                    var data = DL3Data.Where(x => x.old_id3 == updateddata2[i].id).FirstOrDefault();
                                    if (data != null)
                                    {
                                        get_data.Add(data);
                                    }

                                }


                                allData.Su3 = get_data;
                                finaldata.Add(allData);

                            }
                            else if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null)
                            {
                                ddetails = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.sp_year == Year && x.new_table_entry_a != "1").OrderByDescending(x => x.id).ToList();
                                allData.Su = ddetails;

                                ddetails1 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.wc_year == Year && x.new_table_entry_b != "1").OrderByDescending(x => x.id).ToList();
                                allData.Su1 = ddetails1;

                                ddetails2 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.any_year == Year && x.new_table_entry_c != "1").OrderByDescending(x => x.id).ToList();
                                allData.Su2 = ddetails2;

                                var updateddata = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.sp_year == Year && x.new_table_entry_a == "1").ToList();
                                var updateddata1 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.wc_year == Year && x.new_table_entry_b == "1").ToList();
                                var updateddata2 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.any_year == Year && x.new_table_entry_c == "1").ToList();


                                for (int i = 0; i < updateddata.Count; i++)
                                {
                                    var data = DL3Data.Where(x => x.old_id1 == updateddata[i].id).FirstOrDefault();
                                    if (data != null)
                                    {
                                        get_data.Add(data);
                                    }

                                }
                                for (int i = 0; i < updateddata1.Count; i++)
                                {
                                    var data = DL3Data.Where(x => x.old_id2 == updateddata1[i].id).FirstOrDefault();
                                    if (data != null)
                                    {
                                        get_data.Add(data);
                                    }

                                }
                                for (int i = 0; i < updateddata2.Count; i++)
                                {
                                    var data = DL3Data.Where(x => x.old_id3 == updateddata2[i].id).FirstOrDefault();
                                    if (data != null)
                                    {
                                        get_data.Add(data);
                                    }

                                }


                                allData.Su3 = get_data;
                                finaldata.Add(allData);

                            }
                            else if (State != "0" && State != "" && State != null)
                            {
                                ddetails = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.new_table_entry_a != "1").OrderByDescending(x => x.id).ToList();
                                allData.Su = ddetails;

                                ddetails1 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.new_table_entry_b != "1").OrderByDescending(x => x.id).ToList();
                                allData.Su1 = ddetails1;

                                ddetails2 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.new_table_entry_c != "1").OrderByDescending(x => x.id).ToList();
                                allData.Su2 = ddetails2;

                                var updateddata = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.new_table_entry_a == "1").ToList();
                                var updateddata1 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.new_table_entry_b == "1").ToList();
                                var updateddata2 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.new_table_entry_c == "1").ToList();


                                for (int i = 0; i < updateddata.Count; i++)
                                {
                                    var data = DL3Data.Where(x => x.old_id1 == updateddata[i].id).FirstOrDefault();
                                    if (data != null)
                                    {
                                        get_data.Add(data);
                                    }

                                }
                                for (int i = 0; i < updateddata1.Count; i++)
                                {
                                    var data = DL3Data.Where(x => x.old_id2 == updateddata1[i].id).FirstOrDefault();
                                    if (data != null)
                                    {
                                        get_data.Add(data);
                                    }

                                }
                                for (int i = 0; i < updateddata2.Count; i++)
                                {
                                    var data = DL3Data.Where(x => x.old_id3 == updateddata2[i].id).FirstOrDefault();
                                    if (data != null)
                                    {
                                        get_data.Add(data);
                                    }

                                }


                                allData.Su3 = get_data;
                                finaldata.Add(allData);

                            }
                        }

                    }



                    var a = finaldata[0].Su.Count;
                    var b = finaldata[0].Su1.Count;
                    var c = finaldata[0].Su2.Count;
                    var d = finaldata[0].Su3.Count;
                    var exetotal = a + b + c + d;
                    var Totalpages = Math.Ceiling(exetotal / 100.0);
                    var jsonresult = Json(exetotal + "," + Totalpages, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
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
        public ActionResult SupplaySide_Funding()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<supply_funding_source> ddetails1 = ABE.obj_supply_funding_source.ToList();//total list
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


        [HttpPost]
        public ActionResult SupplaySideapprove_data(string id)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_abhy_supplyside_DLI3.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        Data.id = ID;
                        Data.approval = "District";
                        Data.reject = "";


                        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = ABE.SaveChanges();
                        if (A > 0)
                        {
                            return Json("Submit To SPMU");
                        }
                        else
                        {
                            return Json("Not Approved");
                        }
                    }

                }
                catch (Exception ex)
                {
                    return Json("Not Approved");

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult SupplaySideapprove_data_state(string id)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_abhy_supplyside_DLI3.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        Data.id = ID;
                        Data.approval = "State";
                        Data.reject = "";


                        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = ABE.SaveChanges();
                        if (A > 0)
                        {
                            return Json("Approved Successfully");
                        }
                        else
                        {
                            return Json("Not Approved");
                        }
                    }

                }
                catch (Exception ex)
                {
                    return Json("Not Approved");

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult SupplaySidereject_data(string id, string reject)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_abhy_supplyside_DLI3.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        Data.id = ID;
                        Data.approval = "Reject";
                        Data.reject = reject;


                        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = ABE.SaveChanges();
                        if (A > 0)
                        {
                            return Json("Rejected Successfully");
                        }
                        else
                        {
                            return Json("Not Rejected");
                        }
                    }

                }
                catch (Exception ex)
                {
                    return Json("Not Approved");

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }


        [HttpGet]
        public ActionResult Type_Info()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<AR_WC_Structures> ddetails1 = ABE.obj_AR_WC_Structures.ToList();//total list
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

        [HttpPost]
        public ActionResult Save_data_supply1(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_supplyside_DLI3>(Data);

                    var Details = new abhy_supplyside_DLI3();

                    Details.old_id1 = result.old_id1;
                    Details.state_name = result.state_name;
                    Details.district_name = result.district_name;
                    Details.block_name = result.block_name;
                    Details.gp_name = result.gp_name;
                    Details.village = result.village;
                    Details.year = result.year;
                    Details.supply_side = result.supply_side;
                    Details.department_name = result.department_name;
                    Details.scheme_name = result.scheme_name;
                    Details.name_of_structure = result.name_of_structure;
                    Details.latitude_of_proposed = result.latitude_of_proposed;
                    Details.longitude_of_proposed = result.longitude_of_proposed;
                    Details.total_approximate = result.total_approximate;
                    Details.work_start_date = result.work_start_date;
                    Details.work_completion_date = result.work_completion_date;
                    Details.ddlnew = result.ddlnew;
                    Details.latitude_of_structure = result.latitude_of_structure;
                    Details.longitude_of_structure = result.longitude_of_structure;
                    Details.department_name_new = result.department_name_new;
                    Details.scheme_name_new = result.scheme_name_new;
                    Details.schemename_other = result.schemename_other;
                    Details.expenditure_incurred = result.expenditure_incurred;
                    Details.remark = result.remark;
                    Details.new_row = "1";
                    Details.entry_date = DateTime.Today.ToString("dd-MM-yyyy");
                    Details.user_id = Session["Officer"].ToString();



                    ABE.obj_abhy_supplyside_DLI3.Add(Details);
                    ABE.SaveChanges();
                    return Json("Successfully Saved", JsonRequestBehavior.AllowGet);


                }
                catch (Exception Ex)
                {
                    return Json(404, "Error in cloud - GetPLUInfo" + Ex.Message);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }

        }

        [HttpPost]
        public ActionResult Update_data1(string id)
        {

            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_supply_AR_Structures.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        Data.id = ID;
                        Data.new_table_entry_a = "1";
                        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = ABE.SaveChanges();
                        if (A > 0)
                        {
                            return Json("");
                        }
                        else
                        {
                            return Json("");
                        }
                    }

                }
                catch (Exception ex)
                {
                    return Json("");

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult Save_data_supply2(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_supplyside_DLI3>(Data);

                    var Details = new abhy_supplyside_DLI3();

                    Details.old_id2 = result.old_id2;
                    Details.state_name = result.state_name;
                    Details.district_name = result.district_name;
                    Details.block_name = result.block_name;
                    Details.gp_name = result.gp_name;
                    Details.village = result.village;
                    Details.year = result.year;
                    Details.supply_side = result.supply_side;
                    Details.department_name = result.department_name;
                    Details.scheme_name = result.scheme_name;
                    Details.name_of_structure = result.name_of_structure;
                    Details.latitude_of_proposed = result.latitude_of_proposed;
                    Details.longitude_of_proposed = result.longitude_of_proposed;
                    Details.total_approximate = result.total_approximate;
                    Details.work_start_date = result.work_start_date;
                    Details.work_completion_date = result.work_completion_date;
                    Details.ddlnew = result.ddlnew;
                    Details.latitude_of_structure = result.latitude_of_structure;
                    Details.longitude_of_structure = result.longitude_of_structure;
                    Details.department_name_new = result.department_name_new;
                    Details.scheme_name_new = result.scheme_name_new;
                    Details.schemename_other = result.schemename_other;
                    Details.expenditure_incurred = result.expenditure_incurred;
                    Details.remark = result.remark;
                    Details.new_row = "1";
                    Details.entry_date = DateTime.Today.ToString("dd-MM-yyyy");
                    Details.user_id = Session["Officer"].ToString();



                    ABE.obj_abhy_supplyside_DLI3.Add(Details);
                    ABE.SaveChanges();
                    return Json("Successfully Saved", JsonRequestBehavior.AllowGet);


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
        public ActionResult Update_data2(string id)
        {

            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_supply_water_conservation.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        Data.id = ID;
                        Data.new_table_entry_b = "1";
                        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = ABE.SaveChanges();
                        if (A > 0)
                        {
                            return Json("");
                        }
                        else
                        {
                            return Json("");
                        }
                    }

                }
                catch (Exception ex)
                {
                    return Json("");

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult Save_data_supply3(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_supplyside_DLI3>(Data);

                    var Details = new abhy_supplyside_DLI3();

                    Details.old_id3 = result.old_id3;
                    Details.state_name = result.state_name;
                    Details.district_name = result.district_name;
                    Details.block_name = result.block_name;
                    Details.gp_name = result.gp_name;
                    Details.village = result.village;
                    Details.year = result.year;
                    Details.supply_side = result.supply_side;
                    Details.department_name = result.department_name;
                    Details.scheme_name = result.scheme_name;
                    Details.name_of_structure = result.name_of_structure;
                    Details.latitude_of_proposed = result.latitude_of_proposed;
                    Details.longitude_of_proposed = result.longitude_of_proposed;
                    Details.total_approximate = result.total_approximate;
                    Details.work_start_date = result.work_start_date;
                    Details.work_completion_date = result.work_completion_date;
                    Details.ddlnew = result.ddlnew;
                    Details.latitude_of_structure = result.latitude_of_structure;
                    Details.longitude_of_structure = result.longitude_of_structure;
                    Details.department_name_new = result.department_name_new;
                    Details.scheme_name_new = result.scheme_name_new;
                    Details.schemename_other = result.schemename_other;
                    Details.expenditure_incurred = result.expenditure_incurred;
                    Details.remark = result.remark;
                    Details.new_row = "1";
                    Details.entry_date = DateTime.Today.ToString("dd-MM-yyyy");
                    Details.user_id = Session["Officer"].ToString();



                    ABE.obj_abhy_supplyside_DLI3.Add(Details);
                    ABE.SaveChanges();
                    return Json("Successfully Saved", JsonRequestBehavior.AllowGet);


                }
                catch (Exception Ex)
                {
                    return Json(404, "Error in cloud - GetPLUInfo" + Ex.Message);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }

        }

        [HttpPost]
        public ActionResult Update_data3(string id)
        {

            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_supply_any_other_intervention.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        Data.id = ID;
                        Data.new_table_entry_c = "1";
                        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = ABE.SaveChanges();
                        if (A > 0)
                        {
                            return Json("");
                        }
                        else
                        {
                            return Json("");
                        }
                    }

                }
                catch (Exception ex)
                {
                    return Json("");

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult update_supply_side(string id, string state_name, string district_name, string block_name, string gp_name, string village,
            string year, string type, string department_name, string scheme_name, string name_structure, string latitude, string longitude,
            string cost, string start_date, string end_date, string ddlnew, string latitude_new, string longitude_new,
            string department_name_new, string scheme_name_new, string schemename_other, string expenditure, string remark)
        {

            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_abhy_supplyside_DLI3.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        Data.state_name = state_name;
                        Data.district_name = district_name;
                        Data.block_name = block_name;
                        Data.gp_name = gp_name;
                        Data.year = year;
                        Data.supply_side = type;
                        Data.latitude_of_proposed = latitude;
                        Data.longitude_of_proposed = longitude;
                        Data.department_name = department_name;
                        Data.scheme_name = scheme_name;
                        Data.name_of_structure = name_structure;
                        Data.total_approximate = cost;
                        Data.work_start_date = start_date;
                        Data.work_completion_date = end_date;
                        Data.ddlnew = ddlnew;
                        Data.latitude_of_structure = latitude_new;
                        Data.longitude_of_structure = longitude_new;
                        Data.department_name_new = department_name_new;
                        Data.scheme_name_new = scheme_name_new;
                        Data.schemename_other = schemename_other;
                        Data.expenditure_incurred = expenditure;
                        Data.remark = remark;
                        Data.entry_date = DateTime.Today.ToString("dd-MM-yyyy");
                        Data.user_id = Session["Officer"].ToString();


                        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = ABE.SaveChanges();
                        if (A > 0)
                        {
                            return Json("Successfully Update");
                        }


                    }

                }
                catch (Exception ex)
                {
                    return Json("");

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }



        [HttpPost]
        public ActionResult Delete_data_supply(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_new_DLI3>(Data);

                    if (result.id != 0)
                    {
                        var TKID = Convert.ToInt32(result.id);
                        var Data1 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.id == TKID).SingleOrDefault();
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
        public ActionResult Update_data_new1(string id)
        {

            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_supply_AR_Structures.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        Data.id = ID;
                        Data.new_table_entry_a = "0";
                        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = ABE.SaveChanges();
                        if (A > 0)
                        {
                            return Json("");
                        }
                        else
                        {
                            return Json("");
                        }
                    }

                }
                catch (Exception ex)
                {
                    return Json("");

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult Update_data_new2(string id)
        {

            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_supply_water_conservation.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        Data.id = ID;
                        Data.new_table_entry_b = "0";
                        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = ABE.SaveChanges();
                        if (A > 0)
                        {
                            return Json("");
                        }
                        else
                        {
                            return Json("");
                        }
                    }

                }
                catch (Exception ex)
                {
                    return Json("");

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult Update_data_new3(string id)
        {

            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_supply_any_other_intervention.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        Data.id = ID;
                        Data.new_table_entry_c = "0";
                        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = ABE.SaveChanges();
                        if (A > 0)
                        {
                            return Json("");
                        }
                        else
                        {
                            return Json("");
                        }
                    }

                }
                catch (Exception ex)
                {
                    return Json("");

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpGet]
        public ActionResult Data_get_supply_report()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();

                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();
                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    var Year = Session["yea"].ToString();
                    var supply_val = Session["supply_sid"].ToString();
                    var ddldemand = Session["ddldem"].ToString();

                    List<dynamic> abc = new List<dynamic>();

                    if (State == "All" && supply_val == "0")
                    {
                        var details4 = ABE.obj_supply_AR_Structures.OrderByDescending(x => x.id).ToList();
                        var details6 = ABE.obj_supply_water_conservation.OrderByDescending(x => x.id).ToList();
                        var details8 = ABE.obj_supply_any_other_intervention.OrderByDescending(x => x.id).ToList();

                        for (int i = 0; i < details4.Count; i++)
                        {
                            abc.Add(details4[i]);
                            int Check_id = details4[i].id;
                            var details5 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id1 == Check_id).ToList();
                            for (int j = 0; j < details5.Count; j++)
                            {
                                abc.Add(details5[j]);
                            }

                        }
                        for (int i = 0; i < details6.Count; i++)
                        {
                            abc.Add(details6[i]);
                            int Check_id = details6[i].id;
                            var details7 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id2 == Check_id).ToList();
                            for (int j = 0; j < details7.Count; j++)
                            {
                                abc.Add(details7[j]);
                            }

                        }
                        for (int i = 0; i < details8.Count; i++)
                        {
                            abc.Add(details8[i]);
                            int Check_id = details8[i].id;
                            var details9 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id3 == Check_id).ToList();
                            for (int j = 0; j < details9.Count; j++)
                            {
                                abc.Add(details9[j]);
                            }

                        }


                    }
                    else if (State == "All" && supply_val != "All")
                    {
                        if (supply_val == "Artificial Recharge Structures")
                        {
                            var details4 = ABE.obj_supply_AR_Structures.OrderByDescending(x => x.id).ToList();
                            for (int i = 0; i < details4.Count; i++)
                            {
                                abc.Add(details4[i]);
                                int Check_id = details4[i].id;
                                var details5 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id1 == Check_id).ToList();
                                for (int j = 0; j < details5.Count; j++)
                                {
                                    abc.Add(details5[j]);
                                }

                            }

                        }
                        else if (supply_val == "Water Conservation Structures")
                        {
                            var details6 = ABE.obj_supply_water_conservation.OrderByDescending(x => x.id).ToList();

                            for (int i = 0; i < details6.Count; i++)
                            {
                                abc.Add(details6[i]);
                                int Check_id = details6[i].id;
                                var details7 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id2 == Check_id).ToList();
                                for (int j = 0; j < details7.Count; j++)
                                {
                                    abc.Add(details7[j]);
                                }

                            }

                        }
                        else if (supply_val == "Any Other Intervention")
                        {
                            var details8 = ABE.obj_supply_any_other_intervention.OrderByDescending(x => x.id).ToList();
                            for (int i = 0; i < details8.Count; i++)
                            {
                                abc.Add(details8[i]);
                                int Check_id = details8[i].id;
                                var details9 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id3 == Check_id).ToList();
                                for (int j = 0; j < details9.Count; j++)
                                {
                                    abc.Add(details9[j]);
                                }

                            }
                        }
                    }
                    else if (State == "All" && supply_val == "All")
                    {
                        if (Year != "0")
                        {
                            var details4 = ABE.obj_supply_AR_Structures.Where(x => x.sp_year == Year).OrderByDescending(x => x.id).ToList();
                            var details6 = ABE.obj_supply_water_conservation.Where(x => x.wc_year == Year).OrderByDescending(x => x.id).ToList();
                            var details8 = ABE.obj_supply_any_other_intervention.Where(x => x.any_year == Year).OrderByDescending(x => x.id).ToList();

                            for (int i = 0; i < details4.Count; i++)
                            {
                                abc.Add(details4[i]);
                                int Check_id = details4[i].id;
                                var details5 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id1 == Check_id).ToList();
                                for (int j = 0; j < details5.Count; j++)
                                {
                                    abc.Add(details5[j]);
                                }

                            }
                            for (int i = 0; i < details6.Count; i++)
                            {
                                abc.Add(details6[i]);
                                int Check_id = details6[i].id;
                                var details7 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id2 == Check_id).ToList();
                                for (int j = 0; j < details7.Count; j++)
                                {
                                    abc.Add(details7[j]);
                                }

                            }
                            for (int i = 0; i < details8.Count; i++)
                            {
                                abc.Add(details8[i]);
                                int Check_id = details8[i].id;
                                var details9 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id3 == Check_id).ToList();
                                for (int j = 0; j < details9.Count; j++)
                                {
                                    abc.Add(details9[j]);
                                }

                            }
                        }
                        else
                        {
                            var details4 = ABE.obj_supply_AR_Structures.OrderByDescending(x => x.id).ToList();
                            var details6 = ABE.obj_supply_water_conservation.OrderByDescending(x => x.id).ToList();
                            var details8 = ABE.obj_supply_any_other_intervention.OrderByDescending(x => x.id).ToList();

                            for (int i = 0; i < details4.Count; i++)
                            {
                                abc.Add(details4[i]);
                                int Check_id = details4[i].id;
                                var details5 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id1 == Check_id).ToList();
                                for (int j = 0; j < details5.Count; j++)
                                {
                                    abc.Add(details5[j]);
                                }

                            }
                            for (int i = 0; i < details6.Count; i++)
                            {
                                abc.Add(details6[i]);
                                int Check_id = details6[i].id;
                                var details7 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id1 == Check_id).ToList();
                                for (int j = 0; j < details7.Count; j++)
                                {
                                    abc.Add(details7[j]);
                                }

                            }
                            for (int i = 0; i < details8.Count; i++)
                            {
                                abc.Add(details8[i]);
                                int Check_id = details8[i].id;
                                var details9 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id1 == Check_id).ToList();
                                for (int j = 0; j < details9.Count; j++)
                                {
                                    abc.Add(details9[j]);
                                }

                            }

                        }
                    }
                    else
                    {
                        if (ddldemand != "All")
                        {
                            if (supply_val != "All" && supply_val != "0")
                            {
                                if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && supply_val != "0" && supply_val != "" && supply_val != null && Year != "0" && Year != "" && Year != null)
                                {
                                    var details4 = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.sp_year == Year && supply_val == "Artificial Recharge Structures").OrderByDescending(x => x.id).ToList();
                                    var details6 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.wc_year == Year && supply_val == "Water Conservation Structures").OrderByDescending(x => x.id).ToList();
                                    var details8 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.any_year == Year && supply_val == "Any Other Intervention").OrderByDescending(x => x.id).ToList();

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id1 == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);
                                        }

                                    }
                                    for (int i = 0; i < details6.Count; i++)
                                    {
                                        abc.Add(details6[i]);
                                        int Check_id = details6[i].id;
                                        var details7 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id2 == Check_id).ToList();
                                        for (int j = 0; j < details7.Count; j++)
                                        {
                                            abc.Add(details7[j]);
                                        }

                                    }
                                    for (int i = 0; i < details8.Count; i++)
                                    {
                                        abc.Add(details8[i]);
                                        int Check_id = details8[i].id;
                                        var details9 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id3 == Check_id).ToList();
                                        for (int j = 0; j < details9.Count; j++)
                                        {
                                            abc.Add(details9[j]);
                                        }

                                    }




                                }
                                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && supply_val != "0" && supply_val != "" && supply_val != null)
                                {
                                    var details4 = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && supply_val == "Artificial Recharge Structures").OrderByDescending(x => x.id).ToList();
                                    var details6 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && supply_val == "Water Conservation Structures").OrderByDescending(x => x.id).ToList();
                                    var details8 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && supply_val == "Any Other Intervention").OrderByDescending(x => x.id).ToList();

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id1 == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);
                                        }

                                    }
                                    for (int i = 0; i < details6.Count; i++)
                                    {
                                        abc.Add(details6[i]);
                                        int Check_id = details6[i].id;
                                        var details7 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id2 == Check_id).ToList();
                                        for (int j = 0; j < details7.Count; j++)
                                        {
                                            abc.Add(details7[j]);
                                        }

                                    }
                                    for (int i = 0; i < details8.Count; i++)
                                    {
                                        abc.Add(details8[i]);
                                        int Check_id = details8[i].id;
                                        var details9 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id3 == Check_id).ToList();
                                        for (int j = 0; j < details9.Count; j++)
                                        {
                                            abc.Add(details9[j]);
                                        }

                                    }

                                }
                                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && supply_val != "0" && supply_val != "" && supply_val != null && Year != "0" && Year != "" && Year != null)
                                {
                                    var details4 = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.sp_year == Year && supply_val == "Artificial Recharge Structures").OrderByDescending(x => x.id).ToList();
                                    var details6 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.wc_year == Year && supply_val == "Water Conservation Structures").OrderByDescending(x => x.id).ToList();
                                    var details8 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.any_year == Year && supply_val == "Any Other Intervention").OrderByDescending(x => x.id).ToList();

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id1 == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);
                                        }

                                    }
                                    for (int i = 0; i < details6.Count; i++)
                                    {
                                        abc.Add(details6[i]);
                                        int Check_id = details6[i].id;
                                        var details7 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id2 == Check_id).ToList();
                                        for (int j = 0; j < details7.Count; j++)
                                        {
                                            abc.Add(details7[j]);
                                        }

                                    }
                                    for (int i = 0; i < details8.Count; i++)
                                    {
                                        abc.Add(details8[i]);
                                        int Check_id = details8[i].id;
                                        var details9 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id3 == Check_id).ToList();
                                        for (int j = 0; j < details9.Count; j++)
                                        {
                                            abc.Add(details9[j]);
                                        }

                                    }




                                }
                                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && supply_val != "0" && supply_val != "" && supply_val != null)
                                {
                                    var details4 = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && supply_val == "Artificial Recharge Structures").OrderByDescending(x => x.id).ToList();
                                    var details6 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && supply_val == "Water Conservation Structures").OrderByDescending(x => x.id).ToList();
                                    var details8 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && supply_val == "Any Other Intervention").OrderByDescending(x => x.id).ToList();

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id1 == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);
                                        }

                                    }
                                    for (int i = 0; i < details6.Count; i++)
                                    {
                                        abc.Add(details6[i]);
                                        int Check_id = details6[i].id;
                                        var details7 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id2 == Check_id).ToList();
                                        for (int j = 0; j < details7.Count; j++)
                                        {
                                            abc.Add(details7[j]);
                                        }

                                    }
                                    for (int i = 0; i < details8.Count; i++)
                                    {
                                        abc.Add(details8[i]);
                                        int Check_id = details8[i].id;
                                        var details9 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id3 == Check_id).ToList();
                                        for (int j = 0; j < details9.Count; j++)
                                        {
                                            abc.Add(details9[j]);
                                        }

                                    }

                                }
                                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && supply_val != "0" && supply_val != "" && supply_val != null && Year != "0" && Year != "" && Year != null)
                                {
                                    var details4 = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.sp_year == Year && supply_val == "Artificial Recharge Structures").OrderByDescending(x => x.id).ToList();
                                    var details6 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.wc_year == Year && supply_val == "Water Conservation Structures").OrderByDescending(x => x.id).ToList();
                                    var details8 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.any_year == Year && supply_val == "Any Other Intervention").OrderByDescending(x => x.id).ToList();

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id1 == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);
                                        }

                                    }
                                    for (int i = 0; i < details6.Count; i++)
                                    {
                                        abc.Add(details6[i]);
                                        int Check_id = details6[i].id;
                                        var details7 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id2 == Check_id).ToList();
                                        for (int j = 0; j < details7.Count; j++)
                                        {
                                            abc.Add(details7[j]);
                                        }

                                    }
                                    for (int i = 0; i < details8.Count; i++)
                                    {
                                        abc.Add(details8[i]);
                                        int Check_id = details8[i].id;
                                        var details9 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id3 == Check_id).ToList();
                                        for (int j = 0; j < details9.Count; j++)
                                        {
                                            abc.Add(details9[j]);
                                        }

                                    }




                                }
                                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && supply_val != "0" && supply_val != "" && supply_val != null)
                                {
                                    var details4 = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && supply_val == "Artificial Recharge Structures").OrderByDescending(x => x.id).ToList();
                                    var details6 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && supply_val == "Water Conservation Structures").OrderByDescending(x => x.id).ToList();
                                    var details8 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && supply_val == "Any Other Intervention").OrderByDescending(x => x.id).ToList();

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id1 == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);
                                        }

                                    }
                                    for (int i = 0; i < details6.Count; i++)
                                    {
                                        abc.Add(details6[i]);
                                        int Check_id = details6[i].id;
                                        var details7 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id2 == Check_id).ToList();
                                        for (int j = 0; j < details7.Count; j++)
                                        {
                                            abc.Add(details7[j]);
                                        }

                                    }
                                    for (int i = 0; i < details8.Count; i++)
                                    {
                                        abc.Add(details8[i]);
                                        int Check_id = details8[i].id;
                                        var details9 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id3 == Check_id).ToList();
                                        for (int j = 0; j < details9.Count; j++)
                                        {
                                            abc.Add(details9[j]);
                                        }

                                    }

                                }
                                else if (State != "0" && State != "" && State != null && supply_val != "0" && supply_val != "" && supply_val != null && Year != "0" && Year != "" && Year != null)
                                {
                                    var details4 = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.sp_year == Year && supply_val == "Artificial Recharge Structures").OrderByDescending(x => x.id).ToList();
                                    var details6 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.wc_year == Year && supply_val == "Water Conservation Structures").OrderByDescending(x => x.id).ToList();
                                    var details8 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.any_year == Year && supply_val == "Any Other Intervention").OrderByDescending(x => x.id).ToList();

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id1 == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);
                                        }

                                    }
                                    for (int i = 0; i < details6.Count; i++)
                                    {
                                        abc.Add(details6[i]);
                                        int Check_id = details6[i].id;
                                        var details7 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id2 == Check_id).ToList();
                                        for (int j = 0; j < details7.Count; j++)
                                        {
                                            abc.Add(details7[j]);
                                        }

                                    }
                                    for (int i = 0; i < details8.Count; i++)
                                    {
                                        abc.Add(details8[i]);
                                        int Check_id = details8[i].id;
                                        var details9 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id3 == Check_id).ToList();
                                        for (int j = 0; j < details9.Count; j++)
                                        {
                                            abc.Add(details9[j]);
                                        }

                                    }




                                }
                                else if (State != "0" && State != "" && State != null && supply_val != "0" && supply_val != "" && supply_val != null)
                                {
                                    var details4 = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && supply_val == "Artificial Recharge Structures").OrderByDescending(x => x.id).ToList();
                                    var details6 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && supply_val == "Water Conservation Structures").OrderByDescending(x => x.id).ToList();
                                    var details8 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && supply_val == "Any Other Intervention").OrderByDescending(x => x.id).ToList();

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id1 == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);
                                        }

                                    }
                                    for (int i = 0; i < details6.Count; i++)
                                    {
                                        abc.Add(details6[i]);
                                        int Check_id = details6[i].id;
                                        var details7 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id2 == Check_id).ToList();
                                        for (int j = 0; j < details7.Count; j++)
                                        {
                                            abc.Add(details7[j]);
                                        }

                                    }
                                    for (int i = 0; i < details8.Count; i++)
                                    {
                                        abc.Add(details8[i]);
                                        int Check_id = details8[i].id;
                                        var details9 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id3 == Check_id).ToList();
                                        for (int j = 0; j < details9.Count; j++)
                                        {
                                            abc.Add(details9[j]);
                                        }

                                    }


                                }

                            }
                            else
                            {
                                if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null)
                                {
                                    var details4 = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.sp_year == Year).OrderByDescending(x => x.id).ToList();
                                    var details6 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.wc_year == Year).OrderByDescending(x => x.id).ToList();
                                    var details8 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.any_year == Year).OrderByDescending(x => x.id).ToList();

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id1 == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);
                                        }

                                    }
                                    for (int i = 0; i < details6.Count; i++)
                                    {
                                        abc.Add(details6[i]);
                                        int Check_id = details6[i].id;
                                        var details7 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id2 == Check_id).ToList();
                                        for (int j = 0; j < details7.Count; j++)
                                        {
                                            abc.Add(details7[j]);
                                        }

                                    }
                                    for (int i = 0; i < details8.Count; i++)
                                    {
                                        abc.Add(details8[i]);
                                        int Check_id = details8[i].id;
                                        var details9 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id3 == Check_id).ToList();
                                        for (int j = 0; j < details9.Count; j++)
                                        {
                                            abc.Add(details9[j]);
                                        }

                                    }




                                }
                                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                                {
                                    var details4 = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).OrderByDescending(x => x.id).ToList();
                                    var details6 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).OrderByDescending(x => x.id).ToList();
                                    var details8 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).OrderByDescending(x => x.id).ToList();

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id1 == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);
                                        }

                                    }
                                    for (int i = 0; i < details6.Count; i++)
                                    {
                                        abc.Add(details6[i]);
                                        int Check_id = details6[i].id;
                                        var details7 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id2 == Check_id).ToList();
                                        for (int j = 0; j < details7.Count; j++)
                                        {
                                            abc.Add(details7[j]);
                                        }

                                    }
                                    for (int i = 0; i < details8.Count; i++)
                                    {
                                        abc.Add(details8[i]);
                                        int Check_id = details8[i].id;
                                        var details9 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id3 == Check_id).ToList();
                                        for (int j = 0; j < details9.Count; j++)
                                        {
                                            abc.Add(details9[j]);
                                        }

                                    }

                                }
                                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Year != "0" && Year != "" && Year != null)
                                {
                                    var details4 = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.sp_year == Year).OrderByDescending(x => x.id).ToList();
                                    var details6 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.wc_year == Year).OrderByDescending(x => x.id).ToList();
                                    var details8 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.any_year == Year).OrderByDescending(x => x.id).ToList();

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id1 == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);
                                        }

                                    }
                                    for (int i = 0; i < details6.Count; i++)
                                    {
                                        abc.Add(details6[i]);
                                        int Check_id = details6[i].id;
                                        var details7 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id2 == Check_id).ToList();
                                        for (int j = 0; j < details7.Count; j++)
                                        {
                                            abc.Add(details7[j]);
                                        }

                                    }
                                    for (int i = 0; i < details8.Count; i++)
                                    {
                                        abc.Add(details8[i]);
                                        int Check_id = details8[i].id;
                                        var details9 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id3 == Check_id).ToList();
                                        for (int j = 0; j < details9.Count; j++)
                                        {
                                            abc.Add(details9[j]);
                                        }

                                    }




                                }
                                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                                {
                                    var details4 = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).OrderByDescending(x => x.id).ToList();
                                    var details6 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).OrderByDescending(x => x.id).ToList();
                                    var details8 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).OrderByDescending(x => x.id).ToList();

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id1 == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);
                                        }

                                    }
                                    for (int i = 0; i < details6.Count; i++)
                                    {
                                        abc.Add(details6[i]);
                                        int Check_id = details6[i].id;
                                        var details7 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id2 == Check_id).ToList();
                                        for (int j = 0; j < details7.Count; j++)
                                        {
                                            abc.Add(details7[j]);
                                        }

                                    }
                                    for (int i = 0; i < details8.Count; i++)
                                    {
                                        abc.Add(details8[i]);
                                        int Check_id = details8[i].id;
                                        var details9 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id3 == Check_id).ToList();
                                        for (int j = 0; j < details9.Count; j++)
                                        {
                                            abc.Add(details9[j]);
                                        }

                                    }

                                }
                                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null)
                                {
                                    var details4 = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.sp_year == Year).OrderByDescending(x => x.id).ToList();
                                    var details6 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.wc_year == Year).OrderByDescending(x => x.id).ToList();
                                    var details8 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.any_year == Year).OrderByDescending(x => x.id).ToList();

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id1 == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);
                                        }

                                    }
                                    for (int i = 0; i < details6.Count; i++)
                                    {
                                        abc.Add(details6[i]);
                                        int Check_id = details6[i].id;
                                        var details7 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id2 == Check_id).ToList();
                                        for (int j = 0; j < details7.Count; j++)
                                        {
                                            abc.Add(details7[j]);
                                        }

                                    }
                                    for (int i = 0; i < details8.Count; i++)
                                    {
                                        abc.Add(details8[i]);
                                        int Check_id = details8[i].id;
                                        var details9 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id3 == Check_id).ToList();
                                        for (int j = 0; j < details9.Count; j++)
                                        {
                                            abc.Add(details9[j]);
                                        }

                                    }




                                }
                                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                                {
                                    var details4 = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist).OrderByDescending(x => x.id).ToList();
                                    var details6 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist).OrderByDescending(x => x.id).ToList();
                                    var details8 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist).OrderByDescending(x => x.id).ToList();

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id1 == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);
                                        }

                                    }
                                    for (int i = 0; i < details6.Count; i++)
                                    {
                                        abc.Add(details6[i]);
                                        int Check_id = details6[i].id;
                                        var details7 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id2 == Check_id).ToList();
                                        for (int j = 0; j < details7.Count; j++)
                                        {
                                            abc.Add(details7[j]);
                                        }

                                    }
                                    for (int i = 0; i < details8.Count; i++)
                                    {
                                        abc.Add(details8[i]);
                                        int Check_id = details8[i].id;
                                        var details9 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id3 == Check_id).ToList();
                                        for (int j = 0; j < details9.Count; j++)
                                        {
                                            abc.Add(details9[j]);
                                        }

                                    }

                                }
                                else if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null)
                                {
                                    var details4 = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.sp_year == Year).OrderByDescending(x => x.id).ToList();
                                    var details6 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.wc_year == Year).OrderByDescending(x => x.id).ToList();
                                    var details8 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.any_year == Year).OrderByDescending(x => x.id).ToList();

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id1 == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);
                                        }

                                    }
                                    for (int i = 0; i < details6.Count; i++)
                                    {
                                        abc.Add(details6[i]);
                                        int Check_id = details6[i].id;
                                        var details7 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id2 == Check_id).ToList();
                                        for (int j = 0; j < details7.Count; j++)
                                        {
                                            abc.Add(details7[j]);
                                        }

                                    }
                                    for (int i = 0; i < details8.Count; i++)
                                    {
                                        abc.Add(details8[i]);
                                        int Check_id = details8[i].id;
                                        var details9 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id3 == Check_id).ToList();
                                        for (int j = 0; j < details9.Count; j++)
                                        {
                                            abc.Add(details9[j]);
                                        }

                                    }




                                }
                                else if (State != "0" && State != "" && State != null)
                                {
                                    var details4 = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State).OrderByDescending(x => x.id).ToList();
                                    var details6 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State).OrderByDescending(x => x.id).ToList();
                                    var details8 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State).OrderByDescending(x => x.id).ToList();

                                    for (int i = 0; i < details4.Count; i++)
                                    {
                                        abc.Add(details4[i]);
                                        int Check_id = details4[i].id;
                                        var details5 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id1 == Check_id).ToList();
                                        for (int j = 0; j < details5.Count; j++)
                                        {
                                            abc.Add(details5[j]);
                                        }

                                    }
                                    for (int i = 0; i < details6.Count; i++)
                                    {
                                        abc.Add(details6[i]);
                                        int Check_id = details6[i].id;
                                        var details7 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id2 == Check_id).ToList();
                                        for (int j = 0; j < details7.Count; j++)
                                        {
                                            abc.Add(details7[j]);
                                        }

                                    }
                                    for (int i = 0; i < details8.Count; i++)
                                    {
                                        abc.Add(details8[i]);
                                        int Check_id = details8[i].id;
                                        var details9 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id3 == Check_id).ToList();
                                        for (int j = 0; j < details9.Count; j++)
                                        {
                                            abc.Add(details9[j]);
                                        }

                                    }


                                }

                            }
                        }
                        else
                        {
                            if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null)
                            {
                                var details4 = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.sp_year == Year).OrderByDescending(x => x.id).ToList();
                                var details6 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.wc_year == Year).OrderByDescending(x => x.id).ToList();
                                var details8 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.any_year == Year).OrderByDescending(x => x.id).ToList();

                                for (int i = 0; i < details4.Count; i++)
                                {
                                    abc.Add(details4[i]);
                                    int Check_id = details4[i].id;
                                    var details5 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id1 == Check_id).ToList();
                                    for (int j = 0; j < details5.Count; j++)
                                    {
                                        abc.Add(details5[j]);
                                    }

                                }
                                for (int i = 0; i < details6.Count; i++)
                                {
                                    abc.Add(details6[i]);
                                    int Check_id = details6[i].id;
                                    var details7 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id2 == Check_id).ToList();
                                    for (int j = 0; j < details7.Count; j++)
                                    {
                                        abc.Add(details7[j]);
                                    }

                                }
                                for (int i = 0; i < details8.Count; i++)
                                {
                                    abc.Add(details8[i]);
                                    int Check_id = details8[i].id;
                                    var details9 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id3 == Check_id).ToList();
                                    for (int j = 0; j < details9.Count; j++)
                                    {
                                        abc.Add(details9[j]);
                                    }

                                }




                            }
                            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                            {
                                var details4 = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).OrderByDescending(x => x.id).ToList();
                                var details6 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).OrderByDescending(x => x.id).ToList();
                                var details8 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).OrderByDescending(x => x.id).ToList();

                                for (int i = 0; i < details4.Count; i++)
                                {
                                    abc.Add(details4[i]);
                                    int Check_id = details4[i].id;
                                    var details5 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id1 == Check_id).ToList();
                                    for (int j = 0; j < details5.Count; j++)
                                    {
                                        abc.Add(details5[j]);
                                    }

                                }
                                for (int i = 0; i < details6.Count; i++)
                                {
                                    abc.Add(details6[i]);
                                    int Check_id = details6[i].id;
                                    var details7 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id2 == Check_id).ToList();
                                    for (int j = 0; j < details7.Count; j++)
                                    {
                                        abc.Add(details7[j]);
                                    }

                                }
                                for (int i = 0; i < details8.Count; i++)
                                {
                                    abc.Add(details8[i]);
                                    int Check_id = details8[i].id;
                                    var details9 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id3 == Check_id).ToList();
                                    for (int j = 0; j < details9.Count; j++)
                                    {
                                        abc.Add(details9[j]);
                                    }

                                }

                            }
                            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Year != "0" && Year != "" && Year != null)
                            {
                                var details4 = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.sp_year == Year).OrderByDescending(x => x.id).ToList();
                                var details6 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.wc_year == Year).OrderByDescending(x => x.id).ToList();
                                var details8 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.any_year == Year).OrderByDescending(x => x.id).ToList();

                                for (int i = 0; i < details4.Count; i++)
                                {
                                    abc.Add(details4[i]);
                                    int Check_id = details4[i].id;
                                    var details5 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id1 == Check_id).ToList();
                                    for (int j = 0; j < details5.Count; j++)
                                    {
                                        abc.Add(details5[j]);
                                    }

                                }
                                for (int i = 0; i < details6.Count; i++)
                                {
                                    abc.Add(details6[i]);
                                    int Check_id = details6[i].id;
                                    var details7 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id2 == Check_id).ToList();
                                    for (int j = 0; j < details7.Count; j++)
                                    {
                                        abc.Add(details7[j]);
                                    }

                                }
                                for (int i = 0; i < details8.Count; i++)
                                {
                                    abc.Add(details8[i]);
                                    int Check_id = details8[i].id;
                                    var details9 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id3 == Check_id).ToList();
                                    for (int j = 0; j < details9.Count; j++)
                                    {
                                        abc.Add(details9[j]);
                                    }

                                }




                            }
                            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                            {
                                var details4 = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).OrderByDescending(x => x.id).ToList();
                                var details6 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).OrderByDescending(x => x.id).ToList();
                                var details8 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).OrderByDescending(x => x.id).ToList();

                                for (int i = 0; i < details4.Count; i++)
                                {
                                    abc.Add(details4[i]);
                                    int Check_id = details4[i].id;
                                    var details5 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id1 == Check_id).ToList();
                                    for (int j = 0; j < details5.Count; j++)
                                    {
                                        abc.Add(details5[j]);
                                    }

                                }
                                for (int i = 0; i < details6.Count; i++)
                                {
                                    abc.Add(details6[i]);
                                    int Check_id = details6[i].id;
                                    var details7 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id2 == Check_id).ToList();
                                    for (int j = 0; j < details7.Count; j++)
                                    {
                                        abc.Add(details7[j]);
                                    }

                                }
                                for (int i = 0; i < details8.Count; i++)
                                {
                                    abc.Add(details8[i]);
                                    int Check_id = details8[i].id;
                                    var details9 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id3 == Check_id).ToList();
                                    for (int j = 0; j < details9.Count; j++)
                                    {
                                        abc.Add(details9[j]);
                                    }

                                }

                            }
                            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null)
                            {
                                var details4 = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.sp_year == Year).OrderByDescending(x => x.id).ToList();
                                var details6 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.wc_year == Year).OrderByDescending(x => x.id).ToList();
                                var details8 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.any_year == Year).OrderByDescending(x => x.id).ToList();

                                for (int i = 0; i < details4.Count; i++)
                                {
                                    abc.Add(details4[i]);
                                    int Check_id = details4[i].id;
                                    var details5 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id1 == Check_id).ToList();
                                    for (int j = 0; j < details5.Count; j++)
                                    {
                                        abc.Add(details5[j]);
                                    }

                                }
                                for (int i = 0; i < details6.Count; i++)
                                {
                                    abc.Add(details6[i]);
                                    int Check_id = details6[i].id;
                                    var details7 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id2 == Check_id).ToList();
                                    for (int j = 0; j < details7.Count; j++)
                                    {
                                        abc.Add(details7[j]);
                                    }

                                }
                                for (int i = 0; i < details8.Count; i++)
                                {
                                    abc.Add(details8[i]);
                                    int Check_id = details8[i].id;
                                    var details9 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id3 == Check_id).ToList();
                                    for (int j = 0; j < details9.Count; j++)
                                    {
                                        abc.Add(details9[j]);
                                    }

                                }




                            }
                            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                            {
                                var details4 = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist).OrderByDescending(x => x.id).ToList();
                                var details6 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist).OrderByDescending(x => x.id).ToList();
                                var details8 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist).OrderByDescending(x => x.id).ToList();

                                for (int i = 0; i < details4.Count; i++)
                                {
                                    abc.Add(details4[i]);
                                    int Check_id = details4[i].id;
                                    var details5 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id1 == Check_id).ToList();
                                    for (int j = 0; j < details5.Count; j++)
                                    {
                                        abc.Add(details5[j]);
                                    }

                                }
                                for (int i = 0; i < details6.Count; i++)
                                {
                                    abc.Add(details6[i]);
                                    int Check_id = details6[i].id;
                                    var details7 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id2 == Check_id).ToList();
                                    for (int j = 0; j < details7.Count; j++)
                                    {
                                        abc.Add(details7[j]);
                                    }

                                }
                                for (int i = 0; i < details8.Count; i++)
                                {
                                    abc.Add(details8[i]);
                                    int Check_id = details8[i].id;
                                    var details9 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id3 == Check_id).ToList();
                                    for (int j = 0; j < details9.Count; j++)
                                    {
                                        abc.Add(details9[j]);
                                    }

                                }

                            }
                            else if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null)
                            {
                                var details4 = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.sp_year == Year).OrderByDescending(x => x.id).ToList();
                                var details6 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.wc_year == Year).OrderByDescending(x => x.id).ToList();
                                var details8 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.any_year == Year).OrderByDescending(x => x.id).ToList();

                                for (int i = 0; i < details4.Count; i++)
                                {
                                    abc.Add(details4[i]);
                                    int Check_id = details4[i].id;
                                    var details5 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id1 == Check_id).ToList();
                                    for (int j = 0; j < details5.Count; j++)
                                    {
                                        abc.Add(details5[j]);
                                    }

                                }
                                for (int i = 0; i < details6.Count; i++)
                                {
                                    abc.Add(details6[i]);
                                    int Check_id = details6[i].id;
                                    var details7 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id2 == Check_id).ToList();
                                    for (int j = 0; j < details7.Count; j++)
                                    {
                                        abc.Add(details7[j]);
                                    }

                                }
                                for (int i = 0; i < details8.Count; i++)
                                {
                                    abc.Add(details8[i]);
                                    int Check_id = details8[i].id;
                                    var details9 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id3 == Check_id).ToList();
                                    for (int j = 0; j < details9.Count; j++)
                                    {
                                        abc.Add(details9[j]);
                                    }

                                }




                            }
                            else if (State != "0" && State != "" && State != null)
                            {
                                var details4 = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State).OrderByDescending(x => x.id).ToList();
                                var details6 = ABE.obj_supply_water_conservation.Where(x => x.state_name == State).OrderByDescending(x => x.id).ToList();
                                var details8 = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State).OrderByDescending(x => x.id).ToList();

                                for (int i = 0; i < details4.Count; i++)
                                {
                                    abc.Add(details4[i]);
                                    int Check_id = details4[i].id;
                                    var details5 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id1 == Check_id).ToList();
                                    for (int j = 0; j < details5.Count; j++)
                                    {
                                        abc.Add(details5[j]);
                                    }

                                }
                                for (int i = 0; i < details6.Count; i++)
                                {
                                    abc.Add(details6[i]);
                                    int Check_id = details6[i].id;
                                    var details7 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id2 == Check_id).ToList();
                                    for (int j = 0; j < details7.Count; j++)
                                    {
                                        abc.Add(details7[j]);
                                    }

                                }
                                for (int i = 0; i < details8.Count; i++)
                                {
                                    abc.Add(details8[i]);
                                    int Check_id = details8[i].id;
                                    var details9 = ABE.obj_abhy_supplyside_DLI3.Where(x => x.old_id3 == Check_id).ToList();
                                    for (int j = 0; j < details9.Count; j++)
                                    {
                                        abc.Add(details9[j]);
                                    }

                                }


                            }
                        }

                    }

                    var jsonResult = Json(abc, JsonRequestBehavior.AllowGet);
                    jsonResult.MaxJsonLength = int.MaxValue;
                    return jsonResult;
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