using AbhyProject.Classes;
using AbhyProject.Models;
using AbhyProject.Utility;
using ClosedXML.Excel;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;

namespace AbhyProject.Controllers
{
    public class DLI3New2025Controller : Controller
    {
        AbhyEntity ABE = new AbhyEntity();
        AtaljalEntity AJE = new AtaljalEntity();

        //demand start
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
                        //var Str = Statename;
                        var email = Session["Email"].ToString();
                        var Str = Statename + ',' + email;
                        return Json(Str, JsonRequestBehavior.AllowGet);

                    }
                    else if (Session["Officer"] != null && Session["Officer"].ToString() == "National Level Nodal Officer")
                    {
                        var Statename = "Admin";
                        //var Str = Statename;
                        var email = Session["Email"].ToString();
                        var Str = Statename + ',' + email;
                        return Json(Str, JsonRequestBehavior.AllowGet);


                    }
                    else if (Session["Officer"] != null && Session["Officer"].ToString() == "State Level Nodal Officer")
                    {
                        var Officer = "State Level Nodal Officer";
                        var Statename = Session["gstate"].ToString();
                        var email = Session["Email"].ToString();
                        var Str = Officer + ',' + Statename;
                        return Json(Str, JsonRequestBehavior.AllowGet);

                    }
                    else if (Session["Officer"] != null && Session["Officer"].ToString() == "District Level Nodal Officer")
                    {
                        var Officer = "District Level Nodal Officer";
                        var Statename = Session["gstate"].ToString();
                        var Dist = Session["gdist"].ToString();
                        var email = Session["Email"].ToString();
                        var Str = Officer + ',' + Statename + ',' + Dist;
                        return Json(Str, JsonRequestBehavior.AllowGet);

                    }
                    else if (Session["Officer"] != null && Session["Officer"].ToString() == "Block Level Nodal Officer")
                    {
                        var Officer = "Block Level Nodal Officer";
                        var Statename = Session["gstate"].ToString();
                        var Dist = Session["gdist"].ToString();
                        var Block = Session["gblock"].ToString();
                        var email = Session["Email"].ToString();
                        var Str = Officer + ',' + Statename + ',' + Dist + ',' + Block;
                        return Json(Str, JsonRequestBehavior.AllowGet);

                    }
                    else if (Session["Officer"] != null && Session["Officer"].ToString() == "Gram Panchyat Nodal Officer")
                    {
                        var Officer = "Gram Panchyat Nodal Officer";
                        var Statename = Session["gstate"].ToString();
                        var Dist = Session["gdist"].ToString();
                        var Block = Session["gblock"].ToString();
                        var Gram = Session["ggram"].ToString();
                        var email = Session["Email"].ToString();//var year = Session["Year"].ToString();
                        var Str = Officer + ',' + Statename + ',' + Dist + ',' + Block + ',' + Gram;
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

        public ActionResult Index()
        {
            return View();
        }
        public ActionResult combineview()
        {
            return View();
        }
        public ActionResult total_report_phase1()
        {
            return View();
        }
        public ActionResult total_report_phase2()
        {
            return View();
        }
        public ActionResult dli3_maine_page()
        {

            return View();
        }
        public ActionResult viewdemandsidesupplyside_new()
        {
            return View();
        }
        public ActionResult demandside_new()
        {

            return View();
        }
        public ActionResult suppyside_new()
        {
            return View();
        }
        public ActionResult sample_source_page_new()
        {
            return View();
        }
        public ActionResult admittedclime()
        {
            return View();
        }

        public ActionResult demand_state_report()
        {
            return View();
        }
        public ActionResult demand_district_report()
        {
            return View();
        }
        public ActionResult demand_block_report()
        {
            return View();
        }
        public ActionResult demand_districtblock_report()
        {
            return View();
        }
        public ActionResult demand_districtblock_reportp2()
        {
            return View();
        }
        public ActionResult supply_state_report()
        {
            return View();
        }
        public ActionResult supply_district_report()
        {
            return View();
        }
        public ActionResult supply_block_report()
        {
            return View();
        }
        public ActionResult supply_district_block_report()
        {
            return View();
        }

        public ActionResult p2demand_state_report()
        {
            return View();
        }
        public ActionResult p2demand_district_report()
        {
            return View();
        }
        public ActionResult p2demand_block_report()
        {
            return View();
        }
        public ActionResult p2supply_state_report()
        {
            return View();
        }
        public ActionResult p2supply_district_report()
        {
            return View();
        }
        public ActionResult p2supply_block_report()
        {
            return View();
        }
        public ActionResult supply_district_block_reportp2()
        {
            return View();
        }


        [HttpPost]
        public ActionResult StateLevel_Dropdown(string StateName, string Dist, string Block, string Gram, string year)
        {
            Session["gstate"] = StateName.TrimEnd('\n').TrimEnd(' ');
            Session["gdist"] = Dist.TrimEnd('\n').TrimEnd(' ');
            Session["gblock"] = Block.TrimEnd('\n').TrimEnd(' ');
            Session["ggram"] = Gram.TrimEnd('\n').TrimEnd(' ');
            Session["year"] = year;
            return Json("Yes", JsonRequestBehavior.AllowGet);
        }
        //phase1 start

        [HttpPost]
        public ActionResult Data_get(string Data, string demand_va)
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
                    var demand_val = demand_va;

                    List<dynamic> abc = new List<dynamic>();
                    List<demandside_dli3_new_2025> data = new List<demandside_dli3_new_2025>();
                    if (demand_va != "0" && demand_va != "All")
                    {
                        if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null && demand_va != "0" && demand_va != "" && demand_va != null)
                        {
                            var aa = ABE.obj_demandside_dli3_new_2025.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.financial_year == Year && x.fund_for == demand_va).OrderBy(c => c.id).ToList();
                            data = aa.OrderBy(z => z.gp).ToList();
                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && demand_va != "0" && demand_va != "" && demand_va != null)
                        {
                            var aa = ABE.obj_demandside_dli3_new_2025.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.fund_for == demand_va).OrderBy(c => c.id).ToList();
                            data = aa.OrderBy(z => z.gp).ToList();
                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Year != "0" && Year != "" && Year != null && demand_va != "0" && demand_va != "" && demand_va != null)
                        {
                            var aa = ABE.obj_demandside_dli3_new_2025.Where(x => x.state == State && x.district == Dist && x.block == Block && x.financial_year == Year && x.fund_for == demand_va).OrderBy(c => c.id).ToList();
                            data = aa.OrderBy(z => z.gp).ToList();
                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && demand_va != "0" && demand_va != "" && demand_va != null)
                        {
                            var aa = ABE.obj_demandside_dli3_new_2025.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fund_for == demand_va).OrderBy(c => c.id).ToList();
                            data = aa.OrderBy(z => z.gp).ToList();
                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null && demand_va != "0" && demand_va != "" && demand_va != null)
                        {
                            var aa = ABE.obj_demandside_dli3_new_2025.Where(x => x.state == State && x.district == Dist && x.financial_year == Year && x.fund_for == demand_va).OrderBy(c => c.id).ToList();
                            data = aa.OrderBy(z => z.gp).ToList();
                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && demand_va != "0" && demand_va != "" && demand_va != null)
                        {
                            var aa = ABE.obj_demandside_dli3_new_2025.Where(x => x.state == State && x.district == Dist && x.fund_for == demand_va).OrderBy(c => c.id).ToList();
                            data = aa.OrderBy(z => z.gp).ToList();
                        }
                        else if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null && demand_va != "0" && demand_va != "" && demand_va != null)
                        {
                            var aa = ABE.obj_demandside_dli3_new_2025.Where(x => x.state == State && x.financial_year == Year && x.fund_for == demand_va).OrderBy(c => c.id).ToList();
                            data = aa.OrderBy(z => z.gp).ToList();
                        }
                        else if (State != "0" && State != "" && State != null && demand_va != "0" && demand_va != "" && demand_va != null)
                        {
                            var aa = ABE.obj_demandside_dli3_new_2025.Where(x => x.state == State && x.fund_for == demand_va).OrderBy(c => c.id).ToList();
                            data = aa.OrderBy(z => z.gp).ToList();
                        }
                    }
                    else if (demand_va == "All")
                    {
                        if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null)
                        {
                            var aa = ABE.obj_demandside_dli3_new_2025.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.financial_year == Year).OrderBy(c => c.id).ToList();
                            data = aa.OrderBy(z => z.gp).ToList();
                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                        {
                            var aa = ABE.obj_demandside_dli3_new_2025.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram).OrderBy(c => c.id).ToList();
                            data = aa.OrderBy(z => z.gp).ToList();
                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Year != "0" && Year != "" && Year != null)
                        {
                            var aa = ABE.obj_demandside_dli3_new_2025.Where(x => x.state == State && x.district == Dist && x.block == Block && x.financial_year == Year).OrderBy(c => c.id).ToList();
                            data = aa.OrderBy(z => z.gp).ToList();
                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                        {
                            var aa = ABE.obj_demandside_dli3_new_2025.Where(x => x.state == State && x.district == Dist && x.block == Block).OrderBy(c => c.id).ToList();
                            data = aa.OrderBy(z => z.gp).ToList();
                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null)
                        {
                            var aa = ABE.obj_demandside_dli3_new_2025.Where(x => x.state == State && x.district == Dist && x.financial_year == Year).OrderBy(c => c.id).ToList();
                            data = aa.OrderBy(z => z.gp).ToList();
                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                        {
                            var aa = ABE.obj_demandside_dli3_new_2025.Where(x => x.state == State && x.district == Dist).OrderBy(c => c.id).ToList();
                            data = aa.OrderBy(z => z.gp).ToList();
                        }
                        else if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null)
                        {
                            var aa = ABE.obj_demandside_dli3_new_2025.Where(x => x.state == State && x.financial_year == Year).OrderBy(c => c.id).ToList();
                            data = aa.OrderBy(z => z.gp).ToList();
                        }
                        else if (State != "0" && State != "" && State != null)
                        {
                            var aa = ABE.obj_demandside_dli3_new_2025.Where(x => x.state == State).OrderBy(c => c.id).ToList();
                            data = aa.OrderBy(z => z.gp).ToList();
                        }
                    }
                    else
                    {
                        if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null)
                        {
                            var aa = ABE.obj_demandside_dli3_new_2025.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.financial_year == Year).OrderBy(c => c.id).ToList();
                            data = aa.OrderBy(z => z.gp).ToList();
                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                        {
                            var aa = ABE.obj_demandside_dli3_new_2025.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram).OrderBy(c => c.id).ToList();
                            data = aa.OrderBy(z => z.gp).ToList();
                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Year != "0" && Year != "" && Year != null)
                        {
                            var aa = ABE.obj_demandside_dli3_new_2025.Where(x => x.state == State && x.district == Dist && x.block == Block && x.financial_year == Year).OrderBy(c => c.id).ToList();
                            data = aa.OrderBy(z => z.gp).ToList();
                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                        {
                            var aa = ABE.obj_demandside_dli3_new_2025.Where(x => x.state == State && x.district == Dist && x.block == Block).OrderBy(c => c.id).ToList();
                            data = aa.OrderBy(z => z.gp).ToList();
                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null)
                        {
                            var aa = ABE.obj_demandside_dli3_new_2025.Where(x => x.state == State && x.district == Dist && x.financial_year == Year).OrderBy(c => c.id).ToList();
                            data = aa.OrderBy(z => z.gp).ToList();
                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                        {
                            var aa = ABE.obj_demandside_dli3_new_2025.Where(x => x.state == State && x.district == Dist).OrderBy(c => c.id).ToList();
                            data = aa.OrderBy(z => z.gp).ToList();
                        }
                        else if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null)
                        {
                            var aa = ABE.obj_demandside_dli3_new_2025.Where(x => x.state == State && x.financial_year == Year).OrderBy(c => c.id).ToList();
                            data = aa.OrderBy(z => z.gp).ToList();
                        }
                        else if (State != "0" && State != "" && State != null)
                        {
                            var aa = ABE.obj_demandside_dli3_new_2025.Where(x => x.state == State).OrderBy(c => c.id).ToList();
                            data = aa.OrderBy(z => z.gp).ToList();
                        }
                    }

                    if (data != null)
                    {
                        var jsonresult = Json(data, JsonRequestBehavior.AllowGet);
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
                    return Json("Logout", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);

            }
        }

        [HttpPost]
        public ActionResult filldata_demand(int id)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    List<dynamic> all_data = new List<dynamic>();
                    if (id != 0)
                    {
                        int idd = Convert.ToInt32(id);
                        var data = ABE.obj_demandside_dli3_new_2025.Where(x => x.id == idd).OrderBy(c => c.gp).ToList();
                        for (int i = 0; i < data.Count; i++)
                        {
                            all_data.Add(data[i]);
                            int Check_id = data[i].id;
                            int Check_idp1 = Convert.ToInt32(data[i].phase1_id);
                            var details5 = ABE.obj_demandside_dli3_addnew_2025.Where(x => x.id == Check_idp1).OrderByDescending(c => c.phaseid1).ToList();
                            for (int j = 0; j < details5.Count; j++)
                            {
                                all_data.Add(details5[j]);
                            }
                        }
                    }
                    if (all_data != null)
                    {
                        var jsonresult = Json(all_data, JsonRequestBehavior.AllowGet);
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
                    return Json("Logout", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);

            }
        }

        [HttpPost]
        public ActionResult filldata_demand_wsp(int id)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    List<demandside_dli3_new_2025> data = new List<demandside_dli3_new_2025>();
                    if (id != 0)
                    {
                        int idd = Convert.ToInt32(id);
                        data = ABE.obj_demandside_dli3_new_2025.Where(x => x.id == idd).ToList();

                    }
                    if (data != null)
                    {
                        var jsonresult = Json(data, JsonRequestBehavior.AllowGet);
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
                    return Json("Logout", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);

            }
        }

        [HttpGet]
        public ActionResult Schema_name()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_wsp_scheme_name> ddetails1 = ABE.obj_abhy_wsp_scheme_name.ToList();
                    return Json(ddetails1, JsonRequestBehavior.AllowGet);
                }
                catch (Exception ex)
                {
                    return Json("Logout", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult insert_demand(string id, string year_subsidey_phase1, string total_beneficery, string departmentname_phase1, string schemename_phase1, string otherschemename_phase1, string area_covered_phase1, string expenditure_phase1, string remark_phase1)
        {

            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_demandside_dli3_new_2025.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {
                        Data.year_subsidey_phase1 = year_subsidey_phase1;
                        Data.departmentname_phase1 = departmentname_phase1;
                        Data.schemename_phase1 = schemename_phase1;
                        if (otherschemename_phase1 == null || otherschemename_phase1 == "")
                        {
                            Data.otherschemename_phase1 = "";
                        }
                        else
                        {
                            Data.otherschemename_phase1 = otherschemename_phase1;
                        }
                        Data.schemename_phase1 = schemename_phase1;
                        Data.total_beneficery_phase1 = total_beneficery;
                        Data.area_covered_phase1 = area_covered_phase1;
                        Data.expenditure_phase1 = expenditure_phase1;
                        Data.remark_phase1 = remark_phase1;
                        Data.phase1_id = id;
                        Data.entry_phase1 = "phase1";
                        Data.entry_time_phase1 = DateTime.Now.ToString("dd-MM-yyyy hh:mm:ss:ms");

                        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = ABE.SaveChanges();
                        if (A > 0)
                        {
                            return Json("Successfully Saved");
                        }
                    }

                }
                catch (Exception ex)
                {
                    return Json("Logout", JsonRequestBehavior.AllowGet);

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult delete_phase1(int id)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_demandside_dli3_new_2025.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {
                        Data.year_subsidey_phase1 = null;
                        Data.departmentname_phase1 = null;
                        Data.schemename_phase1 = null;
                        Data.area_covered_phase1 = null;
                        Data.expenditure_phase1 = null;
                        Data.remark_phase1 = null;
                        Data.phase1_id = "Delete";
                        Data.entry_phase1 = null;
                        Data.entry_time_phase1 = null;
                        Data.total_beneficery_phase1 = null;
                        Data.otherschemename_phase1 = null;
                        Data.approve_phase1 = null;
                        Data.rejectremark_phase1 = null;

                        var Data_1 = ABE.obj_demandside_dli3_addnew_2025.Where(x => x.id == ID).ToList();
                        for (int i = 0; i < Data_1.Count; i++)
                        {
                            int idd = Data_1[i].phaseid1;
                            var Data_a = ABE.obj_demandside_dli3_addnew_2025.Where(x => x.phaseid1 == idd).SingleOrDefault();
                            ABE.Entry(Data_a).State = EntityState.Deleted;
                            ABE.SaveChanges();
                        }
                        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = ABE.SaveChanges();

                        if (A > 0)
                        {
                            return Json("Successfully Delete");
                        }
                    }

                }
                catch (Exception ex)
                {
                    return Json("Logout", JsonRequestBehavior.AllowGet);

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);

            }
        }

        [HttpPost]
        public ActionResult update_data_phase1(string id, string departmentname_phase, string schemename_phase, string otherschemename_phase, string total_beneficery_phase, string area_covered_phase1, string expenditure_phase1, string remark_phase1)
        {

            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_demandside_dli3_new_2025.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        Data.area_covered_phase1 = area_covered_phase1;
                        Data.expenditure_phase1 = expenditure_phase1;
                        Data.remark_phase1 = remark_phase1;
                        Data.departmentname_phase1 = departmentname_phase;
                        Data.schemename_phase1 = schemename_phase;
                        Data.otherschemename_phase1 = otherschemename_phase;
                        Data.total_beneficery_phase1 = total_beneficery_phase;

                        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = ABE.SaveChanges();
                        if (A > 0)
                        {
                            return Json("Successfully Updated");
                        }
                    }

                }
                catch (Exception ex)
                {
                    return Json("Logout", JsonRequestBehavior.AllowGet);

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult save_newrow(string id, string otherschemename_phase1, string total_beneficery, string year_subsidey_phase1, string departmentname_phase1, string schemename_phase1, string area_covered_phase1, string expenditure_phase1, string remark_phase1)
        {

            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = new demandside_dli3_addnew_2025();
                    if (Data != null)
                    {
                        Data.id = ID;
                        Data.year_subsidey_phase1 = year_subsidey_phase1;
                        Data.departmentname_phase1 = departmentname_phase1;
                        Data.schemename_phase1 = schemename_phase1;
                        Data.otherschemename_phase1 = otherschemename_phase1;
                        Data.area_covered_phase1 = area_covered_phase1;
                        Data.expenditure_phase1 = expenditure_phase1;
                        Data.remark_phase1 = remark_phase1;
                        Data.total_beneficery_phase1 = total_beneficery;
                        Data.entry_phase1 = "phase1_new";
                        Data.entry_time_phase1 = DateTime.Now.ToString("dd-MM-yyyy hh:mm:ss:ms");
                        ABE.obj_demandside_dli3_addnew_2025.Add(Data);
                        ABE.SaveChanges();
                        return Json("Successfully Saved", JsonRequestBehavior.AllowGet);
                    }

                }
                catch (Exception ex)
                {
                    return Json("Logout", JsonRequestBehavior.AllowGet);

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult update_data_phase1_addnew(string phaseid1, string departmentname_phase1, string schemename_phase1, string otherschemename_phase1, string total_beneficery, string area_covered_phase1, string expenditure_phase1, string remark_phase1)
        {

            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(phaseid1);
                    var Data = ABE.obj_demandside_dli3_addnew_2025.Where(x => x.phaseid1 == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        Data.area_covered_phase1 = area_covered_phase1;
                        Data.expenditure_phase1 = expenditure_phase1;
                        Data.remark_phase1 = remark_phase1;
                        Data.departmentname_phase1 = departmentname_phase1;
                        Data.schemename_phase1 = schemename_phase1;
                        Data.otherschemename_phase1 = otherschemename_phase1;
                        Data.total_beneficery_phase1 = total_beneficery;
                        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = ABE.SaveChanges();
                        if (A > 0)
                        {
                            return Json("Successfully Updated");
                        }
                    }

                }
                catch (Exception ex)
                {
                    return Json("Logout", JsonRequestBehavior.AllowGet);

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult delete_phase1_addnew(int phaseid1)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(phaseid1);
                    var Data = ABE.obj_demandside_dli3_addnew_2025.Where(x => x.phaseid1 == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        ABE.Entry(Data).State = EntityState.Deleted;
                        ABE.SaveChanges();
                        return Json("Successfully Delete");
                    }
                    else
                    {
                        return Json("Logout", JsonRequestBehavior.AllowGet);
                    }
                }


                catch (Exception ex)
                {
                    return Json("Logout", JsonRequestBehavior.AllowGet);

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);

            }
        }

        [HttpPost]
        public ActionResult submittospmu(int id)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_demandside_dli3_new_2025.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        Data.approve_phase1 = "Submit to SPMU";
                        Data.rejectremark_phase1 = "";
                        var Data_1 = ABE.obj_demandside_dli3_addnew_2025.Where(x => x.id == ID).ToList();
                        for (int i = 0; i < Data_1.Count; i++)
                        {
                            int idd = Data_1[i].phaseid1;
                            var Data_a = ABE.obj_demandside_dli3_addnew_2025.Where(x => x.phaseid1 == idd).SingleOrDefault();
                            Data_a.approve_phase1 = "Submit to SPMU";
                            ABE.Entry(Data_a).State = System.Data.Entity.EntityState.Modified;
                            ABE.SaveChanges();
                        }
                        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = ABE.SaveChanges();

                        if (A > 0)
                        {
                            return Json("Successfully Submitted");
                        }
                    }
                }
                catch (Exception ex)
                {
                    return Json("Logout", JsonRequestBehavior.AllowGet);

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);

            }
        }
        [HttpPost]
        public ActionResult phase1approve(int id)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_demandside_dli3_new_2025.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        Data.approve_phase1 = "Approved";
                        Data.rejectremark_phase1 = "";
                        var Data_1 = ABE.obj_demandside_dli3_addnew_2025.Where(x => x.id == ID).ToList();
                        for (int i = 0; i < Data_1.Count; i++)
                        {
                            int idd = Data_1[i].phaseid1;
                            var Data_a = ABE.obj_demandside_dli3_addnew_2025.Where(x => x.phaseid1 == idd).SingleOrDefault();
                            Data_a.approve_phase1 = "Approved";
                            ABE.Entry(Data_a).State = System.Data.Entity.EntityState.Modified;
                            ABE.SaveChanges();
                        }
                        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = ABE.SaveChanges();

                        if (A > 0)
                        {
                            return Json("Successfully Approved");
                        }
                    }
                }
                catch (Exception ex)
                {
                    return Json("Logout", JsonRequestBehavior.AllowGet);

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);

            }
        }

        [HttpPost]
        public ActionResult phase1reject(int id, string reject)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_demandside_dli3_new_2025.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        Data.approve_phase1 = "Rejected";
                        Data.rejectremark_phase1 = reject;
                        var Data_1 = ABE.obj_demandside_dli3_addnew_2025.Where(x => x.id == ID).ToList();
                        for (int i = 0; i < Data_1.Count; i++)
                        {
                            int idd = Data_1[i].phaseid1;
                            var Data_a = ABE.obj_demandside_dli3_addnew_2025.Where(x => x.phaseid1 == idd).SingleOrDefault();
                            Data_a.approve_phase1 = "Rejected";
                            ABE.Entry(Data_a).State = System.Data.Entity.EntityState.Modified;
                            ABE.SaveChanges();
                        }
                        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = ABE.SaveChanges();

                        if (A > 0)
                        {
                            return Json("Successfully Rejected");
                        }
                    }
                }
                catch (Exception ex)
                {
                    return Json("Logout", JsonRequestBehavior.AllowGet);

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);

            }
        }

        [HttpPost]
        public ActionResult demand_statereport_allreport()
        {
            try
            {
                var StateOfficer = Session["Officer"].ToString();
                var allData = new List<vw_dli3_phase1_total_summary_24_25>();
                if (StateOfficer == "State Level Nodal Officer")
                {
                    var ss = Session["gstate"].ToString();

                    string[] states = { ss };
                    foreach (var itemstate in states)
                    {

                        string currentState = itemstate; // Assign to variable

                        var data = new vw_dli3_phase1_total_summary_24_25();
                        List<vw_dli3_phase1_total_summary_24_25> ddetails = ABE.obj_vw_dli3_phase1_total_summary_24_25.Where(x => x.state == currentState).ToList();

                        Int32 ataljal_gp = 0;
                        Int32 demand_gp_wsp_submitted = 0;
                        Int32 supply_gp_wsp_submitted = 0;
                        int demand_gp_dli3_claim_entry = 0;
                        int supply_gp_dli3_claim_entry = 0;
                        double demand_convergence_claim = 0;
                        double supply_convergence_claim = 0;
                        int structures_claimed = 0;
                        double total_cost = 0;
                        double dpmu_cost = 0;
                        double spmu_cost = 0;
                        double reject_cost = 0;
                        double approved_cost = 0;

                        foreach (var item in ddetails)
                        {
                            ataljal_gp += item.ataljal_gp;
                            demand_gp_wsp_submitted += item.demand_gp_wsp_submitted;
                            supply_gp_wsp_submitted += item.supply_gp_wsp_submitted;
                            demand_gp_dli3_claim_entry += item.demand_gp_dli3_claim_entry;
                            supply_gp_dli3_claim_entry += item.supply_gp_dli3_claim_entry;
                            demand_convergence_claim += Math.Round(item.demand_convergence_claim, 2);
                            supply_convergence_claim += Math.Round(item.supply_convergence_claim, 2);
                            structures_claimed += item.structures_claimed;
                            total_cost += Math.Round(item.total_cost, 2);
                            dpmu_cost += Math.Round(item.dpmu_cost, 2);
                            spmu_cost += Math.Round(item.spmu_cost, 2);
                            reject_cost += Math.Round(item.reject_cost, 2);
                            approved_cost += Math.Round(item.approved_cost, 2);

                        }
                        data.state = currentState;
                        data.ataljal_gp = ataljal_gp;
                        data.supply_gp_wsp_submitted = supply_gp_wsp_submitted;
                        data.demand_gp_wsp_submitted = supply_gp_wsp_submitted;
                        data.supply_gp_dli3_claim_entry = supply_gp_dli3_claim_entry;
                        data.demand_gp_dli3_claim_entry = demand_gp_dli3_claim_entry;
                        data.demand_convergence_claim = demand_convergence_claim;
                        data.supply_convergence_claim = supply_convergence_claim;
                        data.structures_claimed = structures_claimed;
                        data.total_cost = total_cost;
                        data.dpmu_cost = dpmu_cost;
                        data.spmu_cost = spmu_cost;
                        data.approved_cost = approved_cost;
                        data.reject_cost = reject_cost;

                        allData.Add(data);
                    }

                }
                else
                {
                    string[] states = { "Gujarat_24", "Haryana_6", "Karnataka_29", "Madhya Pradesh_23", "Maharashtra_27", "Rajasthan_8", "Uttar Pradesh_9" };


                    foreach (var itemstate in states)
                    {

                        string currentState = itemstate; // Assign to variable

                        var data = new vw_dli3_phase1_total_summary_24_25();
                        List<vw_dli3_phase1_total_summary_24_25> ddetails = ABE.obj_vw_dli3_phase1_total_summary_24_25.Where(x => x.state == currentState).ToList();

                        Int32 ataljal_gp = 0;
                        Int32 demand_gp_wsp_submitted = 0;
                        Int32 supply_gp_wsp_submitted = 0;
                        int demand_gp_dli3_claim_entry = 0;
                        int supply_gp_dli3_claim_entry = 0;
                        double demand_convergence_claim = 0;
                        double supply_convergence_claim = 0;
                        int structures_claimed = 0;
                        double total_cost = 0;
                        double dpmu_cost = 0;
                        double spmu_cost = 0;
                        double reject_cost = 0;
                        double approved_cost = 0;

                        foreach (var item in ddetails)
                        {
                            ataljal_gp += item.ataljal_gp;
                            demand_gp_wsp_submitted += item.demand_gp_wsp_submitted;
                            supply_gp_wsp_submitted += item.supply_gp_wsp_submitted;
                            demand_gp_dli3_claim_entry += item.demand_gp_dli3_claim_entry;
                            supply_gp_dli3_claim_entry += item.supply_gp_dli3_claim_entry;
                            demand_convergence_claim += Math.Round(item.demand_convergence_claim, 2);
                            supply_convergence_claim += Math.Round(item.supply_convergence_claim, 2);
                            structures_claimed += item.structures_claimed;
                            total_cost += Math.Round(item.total_cost, 2);
                            dpmu_cost += Math.Round(item.dpmu_cost, 2);
                            spmu_cost += Math.Round(item.spmu_cost, 2);
                            reject_cost += Math.Round(item.reject_cost, 2);
                            approved_cost += Math.Round(item.approved_cost, 2);

                        }
                        data.state = currentState;
                        data.ataljal_gp = ataljal_gp;
                        data.supply_gp_wsp_submitted = supply_gp_wsp_submitted;
                        data.demand_gp_wsp_submitted = supply_gp_wsp_submitted;
                        data.supply_gp_dli3_claim_entry = supply_gp_dli3_claim_entry;
                        data.demand_gp_dli3_claim_entry = demand_gp_dli3_claim_entry;
                        data.demand_convergence_claim = demand_convergence_claim;
                        data.supply_convergence_claim = supply_convergence_claim;
                        data.structures_claimed = structures_claimed;
                        data.total_cost = total_cost;
                        data.dpmu_cost = dpmu_cost;
                        data.spmu_cost = spmu_cost;
                        data.approved_cost = approved_cost;
                        data.reject_cost = reject_cost;

                        allData.Add(data);
                    }
                }

                var jsonResult = Json(allData, JsonRequestBehavior.AllowGet);
                jsonResult.MaxJsonLength = int.MaxValue;
                return jsonResult;
            }
            catch (Exception ex)
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult p2demand_statereport_allreport()
        {
            try
            {
                var StateOfficer = Session["Officer"].ToString();
                var allData = new List<vw_dli3_combine_sd_lop_phase2_report_24>();
                if (StateOfficer == "State Level Nodal Officer")
                {
                    var ss = Session["gstate"].ToString();

                    string[] states = { ss };
                    foreach (var itemstate in states)
                    {

                        string currentState = itemstate; // Assign to variable

                        var data = new vw_dli3_combine_sd_lop_phase2_report_24();
                        List<vw_dli3_combine_sd_lop_phase2_report_24> ddetails = ABE.obj_vw_dli3_combine_sd_lop_phase2_report_24.Where(x => x.state == currentState).ToList();

                        int ataljal_gp = 0;
                        int gp_wsp_submitted = 0;
                        int gp_claimed = 0;
                        double demand_total_conv_claim = 0;
                        int supply_total_struct_claim = 0;
                        double supply_total_conv_claim = 0;
                        double total_conv_claim = 0;
                        double dpmu_conv_claim = 0;
                        double spmu_submit_conv_claim = 0;
                        double approved_conv_claim = 0;
                        double rejected_conv_claim = 0;

                        foreach (var item in ddetails)
                        {
                            ataljal_gp += item.ataljal_gp;
                            gp_wsp_submitted += item.gp_wsp_submitted;
                            gp_claimed += item.gp_claimed;
                            demand_total_conv_claim += Math.Round(item.demand_total_conv_claim, 2);
                            supply_total_struct_claim += item.supply_total_struct_claim;
                            supply_total_conv_claim += item.supply_total_conv_claim;
                            total_conv_claim += item.total_conv_claim;
                            dpmu_conv_claim += item.dpmu_conv_claim;
                            spmu_submit_conv_claim += item.spmu_submit_conv_claim;
                            approved_conv_claim += item.approved_conv_claim;
                            rejected_conv_claim += item.rejected_conv_claim;
                        }
                        data.state = currentState;
                        data.ataljal_gp = ataljal_gp;
                        data.gp_wsp_submitted = gp_wsp_submitted;
                        data.gp_claimed = gp_claimed;
                        data.demand_total_conv_claim = demand_total_conv_claim;
                        data.supply_total_struct_claim = supply_total_struct_claim;
                        data.supply_total_conv_claim = supply_total_conv_claim;
                        data.total_conv_claim = total_conv_claim;
                        data.dpmu_conv_claim = dpmu_conv_claim;
                        data.spmu_submit_conv_claim = spmu_submit_conv_claim;
                        data.approved_conv_claim = approved_conv_claim;
                        data.rejected_conv_claim = rejected_conv_claim;

                        allData.Add(data);
                    }

                }
                else
                {
                    string[] states = { "Gujarat_24", "Haryana_6", "Karnataka_29", "Madhya Pradesh_23", "Maharashtra_27", "Rajasthan_8", "Uttar Pradesh_9" };


                    foreach (var itemstate in states)
                    {

                        string currentState = itemstate; // Assign to variable

                        var data = new vw_dli3_combine_sd_lop_phase2_report_24();
                        List<vw_dli3_combine_sd_lop_phase2_report_24> ddetails = ABE.obj_vw_dli3_combine_sd_lop_phase2_report_24.Where(x => x.state == currentState).ToList();

                        int ataljal_gp = 0;
                        int gp_wsp_submitted = 0;
                        int gp_claimed = 0;
                        double demand_total_conv_claim = 0;
                        int supply_total_struct_claim = 0;
                        double supply_total_conv_claim = 0;
                        double total_conv_claim = 0;
                        double dpmu_conv_claim = 0;
                        double spmu_submit_conv_claim = 0;
                        double approved_conv_claim = 0;
                        double rejected_conv_claim = 0;

                        foreach (var item in ddetails)
                        {
                            ataljal_gp += item.ataljal_gp;
                            gp_wsp_submitted += item.gp_wsp_submitted;
                            gp_claimed += item.gp_claimed;
                            demand_total_conv_claim += Math.Round(item.demand_total_conv_claim, 2);
                            supply_total_struct_claim += item.supply_total_struct_claim;
                            supply_total_conv_claim += item.supply_total_conv_claim;
                            total_conv_claim += item.total_conv_claim;
                            dpmu_conv_claim += item.dpmu_conv_claim;
                            spmu_submit_conv_claim += item.spmu_submit_conv_claim;
                            approved_conv_claim += item.approved_conv_claim;
                            rejected_conv_claim += item.rejected_conv_claim;
                        }
                        data.state = currentState;
                        data.ataljal_gp = ataljal_gp;
                        data.gp_wsp_submitted = gp_wsp_submitted;
                        data.gp_claimed = gp_claimed;
                        data.demand_total_conv_claim = demand_total_conv_claim;
                        data.supply_total_struct_claim = supply_total_struct_claim;
                        data.supply_total_conv_claim = supply_total_conv_claim;
                        data.total_conv_claim = total_conv_claim;
                        data.dpmu_conv_claim = dpmu_conv_claim;
                        data.spmu_submit_conv_claim = spmu_submit_conv_claim;
                        data.approved_conv_claim = approved_conv_claim;
                        data.rejected_conv_claim = rejected_conv_claim;

                        allData.Add(data);
                    }
                }

                var jsonResult = Json(allData, JsonRequestBehavior.AllowGet);
                jsonResult.MaxJsonLength = int.MaxValue;
                return jsonResult;
            }
            catch (Exception ex)
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult demand_statereport_old()
        {
            var Year = "";
            var Month = "";
            if (Session["year"] != null)
            {
                Year = Session["year"].ToString();
            }
            else
            {
                Year = "0";
            }
            if (Session["month"] != null)
            {
                Month = Session["month"].ToString();
            }
            else
            {

                Month = "0";
            }

            try
            {
                string[] states = { "Gujarat_24", "Haryana_6", "Karnataka_29", "Madhya Pradesh_23", "Maharashtra_27", "Rajasthan_8", "Uttar Pradesh_9" };
                int[] gps_count = { 1873, 1647, 1199, 670, 1133, 1132, 549 };
                List<total_demand> all_data = new List<total_demand>();
                List<demandside_dli3_new_2025> ddetails = new List<demandside_dli3_new_2025>();
                List<abhy_wsp_approved_status> approve = new List<abhy_wsp_approved_status>();



                for (int i = 0; i < states.Length; i++)
                {
                    total_demand data = new total_demand();

                    string state = states[i];
                    data.statename = state;
                    data.totalgp = gps_count[i];
                    if (Year != "0" && Year != "" && Year != null)
                    {
                        ddetails = ABE.obj_demandside_dli3_new_2025.Where(x => x.financial_year == Year && x.state == state).OrderByDescending(x => x.id).ToList();
                        approve = ABE.obj_abhy_wsp_approved_status.Where(x => x.year == Year && x.status_id == 5 && x.state_name == state).OrderByDescending(x => x.id).ToList();

                    }
                    else
                    {
                        ddetails = ABE.obj_demandside_dli3_new_2025.Where(x => x.state == state).OrderByDescending(x => x.id).ToList();
                        approve = ABE.obj_abhy_wsp_approved_status.Where(x => x.status_id == 5 && x.state_name == state).OrderByDescending(x => x.id).ToList();

                    }
                    var dddd = ddetails.ToList();

                    List<demandside_dli3_new_2025> costtotal = new List<demandside_dli3_new_2025>();
                    for (int k = 0; k < dddd.Count; k++)
                    {
                        var exp = dddd[k].expenditure_phase1;
                        if (exp == null || exp == "")
                        {

                        }
                        else
                        {
                            costtotal.Add(dddd[k]);
                        }


                    }
                    var gpcount_gpdci = approve.Where(x => x.state_name == state).ToList();
                    data.totalgp_count = gpcount_gpdci.GroupBy(x => x.gp_name).Count();
                    double add_ex = 0;
                    double add_area = 0;
                    int add_bene = 0;
                    for (int j = 0; j < costtotal.Count; j++)
                    {
                        int idd = costtotal[j].id;
                        var expenditure_phase1 = ABE.obj_demandside_dli3_addnew_2025.Where(x => x.id == idd).ToList();
                        var expenditure_phase = expenditure_phase1.Sum(x =>
                        {
                            if (double.TryParse(x.expenditure_phase1, out double areaValue))
                            {
                                return areaValue;
                            }
                            else
                            {
                                return 0.0; // Default value if conversion fails
                            }
                        });
                        var area_covered_phase = expenditure_phase1.Sum(x =>
                        {
                            if (double.TryParse(x.area_covered_phase1, out double areaValue))
                            {
                                return areaValue;
                            }
                            else
                            {
                                return 0.0; // Default value if conversion fails
                            }
                        });
                        var total_beneficery_phase = expenditure_phase1.Sum(x =>
                        {
                            if (double.TryParse(x.total_beneficery_phase1, out double areaValue))
                            {
                                return areaValue;
                            }
                            else
                            {
                                return 0.0; // Default value if conversion fails
                            }
                        });
                        add_ex += Convert.ToDouble(expenditure_phase);
                        add_area += Convert.ToDouble(area_covered_phase);
                        add_bene += Convert.ToInt32(total_beneficery_phase);

                    }
                    var costtotalaa = costtotal.Sum(x =>
                    {
                        if (double.TryParse(x.expenditure_phase1, out double areaValue))
                        {
                            return areaValue;
                        }
                        else
                        {
                            return 0.0; // Default value if conversion fails
                        }
                    });
                    double expenditure_ph = Convert.ToDouble(costtotalaa);
                    data.cost = expenditure_ph + add_ex;
                    var area_underaa = costtotal.Sum(x =>
                    {
                        if (double.TryParse(x.area_covered_phase1, out double areaValue))
                        {
                            return areaValue;
                        }
                        else
                        {
                            return 0.0; // Default value if conversion fails
                        }
                    });
                    double area = Convert.ToDouble(area_underaa);
                    data.area_under = area + add_area;
                    var total_beneficiaryaa = costtotal.Sum(x =>
                    {
                        if (double.TryParse(x.total_beneficery_phase1, out double areaValue))
                        {
                            return areaValue;
                        }
                        else
                        {
                            return 0.0; // Default value if conversion fails
                        }
                    });
                    int total = Convert.ToInt32(total_beneficiaryaa);
                    data.total_beneficiary = total + add_bene;
                    var totalgp_list = ddetails.Where(x => x.state == state && x.entry_phase1 == "phase1").ToList();
                    var msca = totalgp_list.GroupBy(x => x.gp).Count();
                    data.msc = Convert.ToInt32(msca);
                    var totalgp_list_count = totalgp_list.Count();
                    data.fst = Convert.ToInt32(totalgp_list_count);
                    var totalatdpmu_list = ddetails.Where(x => x.state == state && x.entry_phase1 == "phase1" && x.approve_phase1 == null).ToList();
                    var fsca = totalatdpmu_list.GroupBy(x => x.gp).Count();
                    data.fsc = Convert.ToInt32(fsca);
                    var totalspmu_list = ddetails.Where(x => x.state == state && x.approve_phase1 == "Submit to SPMU").ToList();
                    var msta = totalspmu_list.GroupBy(x => x.gp).Count();
                    data.mst = Convert.ToInt32(msta);
                    var totalapprove_list = ddetails.Where(x => x.state == state && x.approve_phase1 == "Approved").ToList();
                    var mobca = totalapprove_list.GroupBy(x => x.gp).Count();
                    data.mobc = Convert.ToInt32(mobca);
                    var totalreject_list = ddetails.Where(x => x.state == state && x.approve_phase1 == "Rejected").ToList();
                    var mothera = totalreject_list.GroupBy(x => x.gp).Count();
                    data.mother = Convert.ToInt32(mothera);
                    all_data.Add(data);
                }


                var jsonResult = Json(all_data, JsonRequestBehavior.AllowGet);
                jsonResult.MaxJsonLength = int.MaxValue;
                return jsonResult;

            }
            catch (Exception Ex)
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }




        }

        [HttpPost]
        public ActionResult demand_statereport()
        {
            var year = Session["year"]?.ToString() ?? "0";
            var month = Session["month"]?.ToString() ?? "0";

            try
            {
                string[] states = { "Gujarat_24", "Haryana_6", "Karnataka_29", "Madhya Pradesh_23", "Maharashtra_27", "Rajasthan_8", "Uttar Pradesh_9" };
                int[] gpsCount = { 1873, 1647, 1199, 670, 1133, 1132, 549 };
                var allData = new List<total_demand>();

                for (int i = 0; i < states.Length; i++)
                {
                    string currentState = states[i]; // Assign to variable
                    int currentGpsCount = gpsCount[i]; // Assign to variable

                    var data = new total_demand
                    {

                    };

                    List<vw_dli3_demand_phase1_report_24_25> ddetails;

                    if (year != "0")
                    {
                        ddetails = ABE.obj_vw_dli3_demand_phase1_report_24_25.Where(x => x.year == year && x.state == currentState).ToList();
                    }
                    else
                    {
                        ddetails = ABE.obj_vw_dli3_demand_phase1_report_24_25.Where(x => x.state == currentState).ToList();
                    }

                    Int32 atalgp = 0;
                    Int32 wspsubmit = 0;
                    Int32 dli3claimed = 0;
                    double totalcost = 0;
                    double dpmucost = 0;
                    double spmucost = 0;
                    double rejectcost = 0;
                    double approvecost = 0;
                    double totalarea = 0;
                    double beneficery = 0;
                    int totalgp = 0;
                    int totaldpmu = 0;
                    int totalspmu = 0;
                    int totalreject = 0;
                    int totalapprove = 0;

                    foreach (var item in ddetails)
                    {
                        atalgp += item.ataljal_gp;
                        wspsubmit += item.gp_wsp_submitted;
                        dli3claimed += item.gp_dli3_claim_entry;
                        totalcost += item.total_cost;
                        dpmucost += item.dpmu_cost;
                        spmucost += item.spmu_cost;
                        rejectcost += item.reject_cost;
                        approvecost += item.approved_cost;
                        totalarea += item.total_area;
                        beneficery += item.total_beneficiary;
                        totalgp += item.totalentry_gp;
                        totaldpmu += item.dpmu_gp;
                        totalspmu += item.spmu_gp;
                        totalreject += item.reject_gp;
                        totalapprove += item.approved_gp;

                    }
                    data.statename = currentState;
                    data.totalgp = atalgp;
                    data.totalgp_count = wspsubmit;
                    data.msc = dli3claimed;

                    data.cost = totalcost;
                    data.area_under = totalarea;
                    data.total_beneficiary_new = beneficery;

                    data.dpmucost = dpmucost;
                    data.spmucost = spmucost;
                    data.rejectcost = rejectcost;
                    data.approvecost = approvecost;


                    data.fst = totalgp;
                    data.fsc = totaldpmu;
                    data.mst = totalspmu;
                    data.mobc = totalapprove;
                    data.mother = totalreject;



                    allData.Add(data);
                }

                var jsonResult = Json(allData, JsonRequestBehavior.AllowGet);
                jsonResult.MaxJsonLength = int.MaxValue;
                return jsonResult;
            }
            catch (Exception ex)
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }

        private double TryParseDouble(string value)
        {
            return double.TryParse(value, out double result) ? result : 0.0;
        }

        private int TryParseInt(string value)
        {
            return int.TryParse(value, out int result) ? result : 0;
        }



        [HttpPost]
        public ActionResult demand_report_district()
        {
            var Year = "";
            var State = "";
            if (Session["gstate"] != null)
            {
                State = Session["gstate"].ToString();
            }
            else
            {
                State = "0";
            }
            if (Session["year"] != null)
            {
                Year = Session["year"].ToString();
            }
            else
            {
                Year = "0";
            }


            try
            {
                var dist = ABE.obj_master_list_gp_wsp.Where(x => x.state_name == State).Distinct().GroupBy(x => x.district_name).ToList();

                List<total_demand> all_data = new List<total_demand>();
                List<vw_dli3_demand_phase1_report_24_25> ddetails = new List<vw_dli3_demand_phase1_report_24_25>();

                if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null)
                {
                    ddetails = ABE.obj_vw_dli3_demand_phase1_report_24_25.Where(x => x.state == State && x.year == Year).OrderByDescending(x => x.id).ToList();
                }
                else if (State != "0" && State != "" && State != null)
                {
                    ddetails = ABE.obj_vw_dli3_demand_phase1_report_24_25.Where(x => x.state == State).OrderByDescending(x => x.id).ToList();
                }
                foreach (var itemdist in dist)
                {
                    total_demand data = new total_demand();
                    string district = itemdist.Key;
                    var dddd = ddetails.Where(x => x.district == district).ToList();

                    Int32 atalgp = 0;
                    Int32 wspsubmit = 0;
                    Int32 dli3claimed = 0;
                    double totalcost = 0;
                    double dpmucost = 0;
                    double spmucost = 0;
                    double rejectcost = 0;
                    double approvecost = 0;
                    double totalarea = 0;
                    double beneficery = 0;
                    int totalgp = 0;
                    int totaldpmu = 0;
                    int totalspmu = 0;
                    int totalreject = 0;
                    int totalapprove = 0;

                    foreach (var item in dddd)
                    {
                        atalgp += item.ataljal_gp;
                        wspsubmit += item.gp_wsp_submitted;
                        dli3claimed += item.gp_dli3_claim_entry;
                        totalcost += item.total_cost;
                        dpmucost += item.dpmu_cost;
                        spmucost += item.spmu_cost;
                        rejectcost += item.reject_cost;
                        approvecost += item.approved_cost;
                        totalarea += item.total_area;
                        beneficery += item.total_beneficiary;
                        totalgp += item.totalentry_gp;
                        totaldpmu += item.dpmu_gp;
                        totalspmu += item.spmu_gp;
                        totalreject += item.reject_gp;
                        totalapprove += item.approved_gp;

                    }
                    data.statename = district;
                    data.totalgp = atalgp;
                    data.totalgp_count = wspsubmit;
                    data.msc = dli3claimed;

                    data.cost = totalcost;
                    data.area_under = totalarea;
                    data.total_beneficiary_new = beneficery;

                    data.dpmucost = dpmucost;
                    data.spmucost = spmucost;
                    data.rejectcost = rejectcost;
                    data.approvecost = approvecost;


                    data.fst = totalgp;
                    data.fsc = totaldpmu;
                    data.mst = totalspmu;
                    data.mobc = totalapprove;
                    data.mother = totalreject;

                    all_data.Add(data);
                }

                var jsonResult = Json(all_data, JsonRequestBehavior.AllowGet);
                jsonResult.MaxJsonLength = int.MaxValue;
                return jsonResult;

            }
            catch (Exception Ex)
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }

        }

        [HttpPost]
        public ActionResult demand_report_block()
        {

            var Year = "";
            var State = "";

            if (Session["gstate"] != null)
            {
                State = Session["gstate"].ToString();
            }
            else
            {
                State = "0";
            }

            if (Session["year"] != null)
            {
                Year = Session["year"].ToString();
            }
            else
            {
                Year = "0";
            }
            try
            {

                var dist = ABE.obj_master_list_gp_wsp.Where(x => x.state_name == State).Distinct().GroupBy(x => x.district_name).ToList();

                List<total_demand> all_data = new List<total_demand>();
                List<vw_dli3_demand_phase1_report_24_25> ddetails = new List<vw_dli3_demand_phase1_report_24_25>();

                if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null)
                {
                    ddetails = ABE.obj_vw_dli3_demand_phase1_report_24_25.Where(x => x.state == State && x.year == Year).OrderByDescending(x => x.id).ToList();
                }
                else if (State != "0" && State != "" && State != null)
                {
                    ddetails = ABE.obj_vw_dli3_demand_phase1_report_24_25.Where(x => x.state == State).OrderByDescending(x => x.id).ToList();
                }
                foreach (var itemdist in dist)
                {

                    string district = itemdist.Key;

                    var block = ABE.obj_master_list_gp_wsp.Where(x => x.district_name == district).Distinct().GroupBy(x => x.block_name).ToList();

                    foreach (var itemblock in block)
                    {
                        total_demand data = new total_demand();
                        string blockname = itemblock.Key;
                        var dddd = ddetails.Where(x => x.block == blockname).ToList();


                        Int32 atalgp = 0;
                        Int32 wspsubmit = 0;
                        Int32 dli3claimed = 0;
                        double totalcost = 0;
                        double dpmucost = 0;
                        double spmucost = 0;
                        double rejectcost = 0;
                        double approvecost = 0;
                        double totalarea = 0;
                        double beneficery = 0;
                        int totalgp = 0;
                        int totaldpmu = 0;
                        int totalspmu = 0;
                        int totalreject = 0;
                        int totalapprove = 0;

                        foreach (var item in dddd)
                        {
                            atalgp += item.ataljal_gp;
                            wspsubmit += item.gp_wsp_submitted;
                            dli3claimed += item.gp_dli3_claim_entry;
                            totalcost += item.total_cost;
                            dpmucost += item.dpmu_cost;
                            spmucost += item.spmu_cost;
                            rejectcost += item.reject_cost;
                            approvecost += item.approved_cost;
                            totalarea += item.total_area;
                            beneficery += item.total_beneficiary;
                            totalgp += item.totalentry_gp;
                            totaldpmu += item.dpmu_gp;
                            totalspmu += item.spmu_gp;
                            totalreject += item.reject_gp;
                            totalapprove += item.approved_gp;

                        }
                        data.dist_name = district;
                        data.statename = blockname;
                        data.totalgp = atalgp;
                        data.totalgp_count = wspsubmit;
                        data.msc = dli3claimed;

                        data.cost = totalcost;
                        data.area_under = totalarea;
                        data.total_beneficiary_new = beneficery;

                        data.dpmucost = dpmucost;
                        data.spmucost = spmucost;
                        data.rejectcost = rejectcost;
                        data.approvecost = approvecost;


                        data.fst = totalgp;
                        data.fsc = totaldpmu;
                        data.mst = totalspmu;
                        data.mobc = totalapprove;
                        data.mother = totalreject;

                        all_data.Add(data);
                    }

                }
                var jsonResult = Json(all_data, JsonRequestBehavior.AllowGet);
                jsonResult.MaxJsonLength = int.MaxValue;
                return jsonResult;

            }
            catch (Exception Ex)
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult demand_report_districtblock()
        {

            var Year = "";
            var State = "";
            var Dist = "";
            if (Session["gstate"] != null)
            {
                State = Session["gstate"].ToString();
            }
            else
            {
                State = "0";
            }
            if (Session["gdist"] != null)
            {
                Dist = Session["gdist"].ToString();
            }
            else
            {
                Dist = "0";
            }
            if (Session["year"] != null)
            {
                Year = Session["year"].ToString();
            }
            else
            {
                Year = "0";
            }
            try
            {
                var dist = ABE.obj_master_list_gp_wsp.Where(x => x.state_name == State && x.district_name == Dist).Distinct().GroupBy(x => x.block_name).ToList();

                List<total_demand> all_data = new List<total_demand>();
                List<vw_dli3_demand_phase1_report_24_25> ddetails = new List<vw_dli3_demand_phase1_report_24_25>();

                if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null)
                {
                    ddetails = ABE.obj_vw_dli3_demand_phase1_report_24_25.Where(x => x.state == State && x.district == Dist && x.year == Year).OrderByDescending(x => x.id).ToList();
                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                {
                    ddetails = ABE.obj_vw_dli3_demand_phase1_report_24_25.Where(x => x.state == State && x.district == Dist).OrderByDescending(x => x.id).ToList();
                }
                foreach (var itemdist in dist)
                {

                    string district = itemdist.Key;
                    var block = ABE.obj_master_list_gp_wsp.Where(x => x.block_name == district).Distinct().GroupBy(x => x.block_name).ToList();

                    foreach (var itemblock in block)
                    {
                        total_demand data = new total_demand();
                        string blockname = itemblock.Key;
                        var dddd = ddetails.Where(x => x.block == blockname).ToList();

                        Int32 atalgp = 0;
                        Int32 wspsubmit = 0;
                        Int32 dli3claimed = 0;
                        double totalcost = 0;
                        double dpmucost = 0;
                        double spmucost = 0;
                        double rejectcost = 0;
                        double approvecost = 0;
                        double totalarea = 0;
                        double beneficery = 0;
                        int totalgp = 0;
                        int totaldpmu = 0;
                        int totalspmu = 0;
                        int totalreject = 0;
                        int totalapprove = 0;

                        foreach (var item in dddd)
                        {
                            atalgp += item.ataljal_gp;
                            wspsubmit += item.gp_wsp_submitted;
                            dli3claimed += item.gp_dli3_claim_entry;
                            totalcost += item.total_cost;
                            dpmucost += item.dpmu_cost;
                            spmucost += item.spmu_cost;
                            rejectcost += item.reject_cost;
                            approvecost += item.approved_cost;
                            totalarea += item.total_area;
                            beneficery += item.total_beneficiary;
                            totalgp += item.totalentry_gp;
                            totaldpmu += item.dpmu_gp;
                            totalspmu += item.spmu_gp;
                            totalreject += item.reject_gp;
                            totalapprove += item.approved_gp;

                        }
                        data.statename = blockname;
                        data.totalgp = atalgp;
                        data.totalgp_count = wspsubmit;
                        data.msc = dli3claimed;

                        data.cost = totalcost;
                        data.area_under = totalarea;
                        data.total_beneficiary_new = beneficery;

                        data.dpmucost = dpmucost;
                        data.spmucost = spmucost;
                        data.rejectcost = rejectcost;
                        data.approvecost = approvecost;


                        data.fst = totalgp;
                        data.fsc = totaldpmu;
                        data.mst = totalspmu;
                        data.mobc = totalapprove;
                        data.mother = totalreject;

                        all_data.Add(data);
                    }

                }
                var jsonResult = Json(all_data, JsonRequestBehavior.AllowGet);
                jsonResult.MaxJsonLength = int.MaxValue;
                return jsonResult;

            }
            catch (Exception Ex)
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult demand_report_districtblockold()
        {

            var Year = "";
            var State = "";
            var Dist = "";

            if (Session["gstate"] != null)
            {
                State = Session["gstate"].ToString();
            }
            else
            {
                State = "0";
            }
            if (Session["gdist"] != null)
            {
                Dist = Session["gdist"].ToString();
            }
            else
            {
                Dist = "0";
            }

            if (Session["year"] != null)
            {
                Year = Session["year"].ToString();
            }
            else
            {
                Year = "0";
            }


            try
            {

                var dist = ABE.obj_abhy_block_gp_area_info.Where(x => x.state_name == State && x.district_name == Dist).Distinct().GroupBy(x => x.block_name).ToList();


                List<total_demand> all_data = new List<total_demand>();
                List<demandside_dli3_new_2025> ddetails = new List<demandside_dli3_new_2025>();
                List<abhy_wsp_approved_status> approve = new List<abhy_wsp_approved_status>();

                if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null)
                {
                    ddetails = ABE.obj_demandside_dli3_new_2025.Where(x => x.state == State && x.district == Dist && x.financial_year == Year).OrderByDescending(x => x.id).ToList();
                    approve = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == State && x.district_name == Dist && x.year == Year && x.status_id == 5).OrderByDescending(x => x.id).ToList();

                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                {
                    ddetails = ABE.obj_demandside_dli3_new_2025.Where(x => x.state == State && x.district == Dist).OrderByDescending(x => x.id).ToList();
                    approve = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == State && x.district_name == Dist && x.status_id == 5).OrderByDescending(x => x.id).ToList();

                }

                for (int i = 0; i < dist.Count; i++)
                {
                    total_demand data = new total_demand();
                    string district = dist[i].Key;
                    data.statename = district;
                    var gp = ABE.obj_abhy_block_gp_area_info.Where(x => x.block_name == district).Distinct().GroupBy(x => x.gram_panchayat_name).ToList();
                    data.totalgp = gp.Count;
                    var district_name = ABE.obj_abhy_block_gp_area_info.Where(x => x.block_name == district).FirstOrDefault();
                    var disttt = district_name.district_name;
                    data.dist_name = disttt;
                    var gpcount_gpdci = approve.Where(x => x.block_name == district).ToList();
                    data.totalgp_count = gpcount_gpdci.GroupBy(x => x.gp_name).Count();
                    //var costtotal = ddetails.Where(x => x.block == district && x.expenditure_phase1 != null && x.expenditure_phase1 != "" && x.area_covered_phase1 != null && x.area_covered_phase1 != "" && x.total_beneficery_phase1 != null && x.total_beneficery_phase1 != "").ToList();
                    var dddd = ddetails.Where(x => x.block == district).ToList();

                    List<demandside_dli3_new_2025> costtotal = new List<demandside_dli3_new_2025>();
                    for (int k = 0; k < dddd.Count; k++)
                    {
                        var exp = dddd[k].expenditure_phase1;
                        if (exp == null || exp == "")
                        {

                        }
                        else
                        {
                            costtotal.Add(dddd[k]);
                        }


                    }
                    //data.totalgp_count = costtotal.GroupBy(x => x.gp).Count();
                    double add_ex = 0;
                    double add_area = 0;
                    int add_bene = 0;
                    for (int j = 0; j < costtotal.Count; j++)
                    {
                        int idd = costtotal[j].id;
                        var expenditure_phase1 = ABE.obj_demandside_dli3_addnew_2025.Where(x => x.id == idd).ToList();
                        var expenditure_phase = expenditure_phase1.Sum(x => Convert.ToDouble(x.expenditure_phase1));
                        add_ex += Convert.ToDouble(expenditure_phase);
                        var area_covered_phase = expenditure_phase1.Sum(x => Convert.ToDouble(x.area_covered_phase1));
                        add_area += Convert.ToDouble(area_covered_phase);
                        var total_beneficery_phase = expenditure_phase1.Sum(x => Convert.ToDecimal(x.total_beneficery_phase1));
                        add_bene += Convert.ToInt32(total_beneficery_phase);
                    }
                    var costtotalaa = costtotal.Sum(x => Convert.ToDouble(x.expenditure_phase1));
                    double expenditure_ph = Convert.ToDouble(costtotalaa);
                    data.cost = expenditure_ph + add_ex;
                    var area_underaa = costtotal.Sum(x => Convert.ToDouble(x.area_covered_phase1));
                    double area = Convert.ToDouble(area_underaa);
                    data.area_under = area + add_area;
                    var total_beneficiaryaa = costtotal.Sum(x => Convert.ToDecimal(x.total_beneficery_phase1));
                    int total = Convert.ToInt32(total_beneficiaryaa);
                    data.total_beneficiary = total + add_bene;
                    var totalgp_list = ddetails.Where(x => x.block == district && x.entry_phase1 == "phase1").ToList();
                    var msca = totalgp_list.GroupBy(x => x.gp).Count();
                    data.msc = Convert.ToInt32(msca);
                    var totalgp_list_count = totalgp_list.Count();
                    data.fst = Convert.ToInt32(totalgp_list_count);
                    var totalatdpmu_list = ddetails.Where(x => x.block == district && x.entry_phase1 == "phase1" && x.approve_phase1 == null).ToList();
                    var fsca = totalatdpmu_list.GroupBy(x => x.gp).Count();
                    data.fsc = Convert.ToInt32(fsca);
                    var totalspmu_list = ddetails.Where(x => x.block == district && x.approve_phase1 == "Submit to SPMU").ToList();
                    var msta = totalspmu_list.GroupBy(x => x.gp).Count();
                    data.mst = Convert.ToInt32(msta);
                    var totalapprove_list = ddetails.Where(x => x.block == district && x.approve_phase1 == "Approved").ToList();
                    var mobca = totalapprove_list.GroupBy(x => x.gp).Count();
                    data.mobc = Convert.ToInt32(mobca);
                    var totalreject_list = ddetails.Where(x => x.block == district && x.approve_phase1 == "Rejected").ToList();
                    var mothera = totalreject_list.GroupBy(x => x.gp).Count();
                    data.mother = Convert.ToInt32(mothera);


                    all_data.Add(data);
                }


                var jsonResult = Json(all_data, JsonRequestBehavior.AllowGet);
                jsonResult.MaxJsonLength = int.MaxValue;
                return jsonResult;

            }
            catch (Exception Ex)
            {
                return Json(Ex, JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult demand_report_districtblockp2()
        {

            var Year = "";
            var State = "";
            var Dist = "";

            if (Session["gstate"] != null)
            {
                State = Session["gstate"].ToString();
            }
            else
            {
                State = "0";
            }
            if (Session["gdist"] != null)
            {
                Dist = Session["gdist"].ToString();
            }
            else
            {
                Dist = "0";
            }

            if (Session["year"] != null)
            {
                Year = Session["year"].ToString();
            }
            else
            {
                Year = "0";
            }
            try
            {
                var dist = ABE.obj_master_list_gp_wsp.Where(x => x.state_name == State && x.district_name == Dist).Distinct().GroupBy(x => x.block_name).ToList();

                List<vw_dli3_lop_phase2_demand_report_24> all_data = new List<vw_dli3_lop_phase2_demand_report_24>();
                List<vw_dli3_lop_phase2_demand_report_24> ddetails = new List<vw_dli3_lop_phase2_demand_report_24>();

                if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null)
                {
                    ddetails = ABE.obj_vw_dli3_lop_phase2_demand_report_24.Where(x => x.state == State && x.district == Dist && x.year == Year).OrderByDescending(x => x.id).ToList();
                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                {
                    ddetails = ABE.obj_vw_dli3_lop_phase2_demand_report_24.Where(x => x.state == State && x.district == Dist).OrderByDescending(x => x.id).ToList();
                }
                foreach (var itemdist in dist)
                {

                    string district = itemdist.Key;
                    var block = ABE.obj_master_list_gp_wsp.Where(x => x.block_name == district).Distinct().GroupBy(x => x.block_name).ToList();

                    foreach (var itemblock in block)
                    {
                        vw_dli3_lop_phase2_demand_report_24 data = new vw_dli3_lop_phase2_demand_report_24();
                        string blockname = itemblock.Key;
                        var dddd = ddetails.Where(x => x.block == blockname).ToList();

                        int ataljal_gp = 0;
                        int gp_wsp_submitted = 0;
                        double lop_conv_claim = 0;
                        double lop_total_beneficiary = 0;
                        double phase2_conv_claim = 0;
                        double phase2_total_beneficiary = 0;
                        int gp_claim_lop_phase2 = 0;
                        double total_conv_claim = 0;
                        double dpmu_conv_claim = 0;
                        double spmu_submit_claim = 0;
                        double approved_claim = 0;
                        double rejected_claim = 0;

                        foreach (var item in dddd)
                        {
                            ataljal_gp += item.ataljal_gp;
                            gp_wsp_submitted += item.gp_wsp_submitted;
                            lop_conv_claim += item.lop_conv_claim;
                            lop_total_beneficiary += item.lop_total_beneficiary;
                            phase2_conv_claim += item.phase2_conv_claim;
                            phase2_total_beneficiary += item.phase2_total_beneficiary;
                            gp_claim_lop_phase2 += item.gp_claim_lop_phase2;
                            total_conv_claim += item.total_conv_claim;
                            dpmu_conv_claim += item.dpmu_conv_claim;
                            spmu_submit_claim += item.spmu_submit_claim;
                            approved_claim += item.approved_claim;
                            rejected_claim += item.rejected_claim;

                        }
                        data.block = blockname;
                        data.ataljal_gp = ataljal_gp;
                        data.gp_wsp_submitted = gp_wsp_submitted;
                        data.lop_conv_claim = lop_conv_claim;
                        data.lop_total_beneficiary = lop_total_beneficiary;
                        data.phase2_conv_claim = phase2_conv_claim;
                        data.phase2_total_beneficiary = phase2_total_beneficiary;
                        data.gp_claim_lop_phase2 = gp_claim_lop_phase2;
                        data.total_conv_claim = total_conv_claim;
                        data.dpmu_conv_claim = dpmu_conv_claim;
                        data.spmu_submit_claim = spmu_submit_claim;
                        data.approved_claim = approved_claim;
                        data.rejected_claim = rejected_claim;

                        all_data.Add(data);
                    }

                }
                var jsonResult = Json(all_data, JsonRequestBehavior.AllowGet);
                jsonResult.MaxJsonLength = int.MaxValue;
                return jsonResult;

            }
            catch (Exception Ex)
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }

            try
            {

                var dist = ABE.obj_abhy_block_gp_area_info.Where(x => x.state_name == State && x.district_name == Dist).Distinct().GroupBy(x => x.block_name).ToList();


                List<total_demand> all_data = new List<total_demand>();
                List<demandside_dli3_new_2025> ddetails = new List<demandside_dli3_new_2025>();
                List<abhy_wsp_approved_status> approve = new List<abhy_wsp_approved_status>();

                if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null)
                {
                    ddetails = ABE.obj_demandside_dli3_new_2025.Where(x => x.state == State && x.district == Dist && x.financial_year == Year).OrderByDescending(x => x.id).ToList();
                    approve = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == State && x.district_name == Dist && x.year == Year && x.status_id == 5).OrderByDescending(x => x.id).ToList();

                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                {
                    ddetails = ABE.obj_demandside_dli3_new_2025.Where(x => x.state == State && x.district == Dist).OrderByDescending(x => x.id).ToList();
                    approve = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == State && x.district_name == Dist && x.status_id == 5).OrderByDescending(x => x.id).ToList();

                }

                for (int i = 0; i < dist.Count; i++)
                {
                    total_demand data = new total_demand();
                    string district = dist[i].Key;
                    data.statename = district;
                    var gp = ABE.obj_abhy_block_gp_area_info.Where(x => x.block_name == district).Distinct().GroupBy(x => x.gram_panchayat_name).ToList();
                    data.totalgp = gp.Count;
                    var district_name = ABE.obj_abhy_block_gp_area_info.Where(x => x.block_name == district).FirstOrDefault();
                    var disttt = district_name.district_name;
                    data.dist_name = disttt;
                    var gpcount_gpdci = approve.Where(x => x.block_name == district).ToList();
                    data.totalgp_count = gpcount_gpdci.GroupBy(x => x.gp_name).Count();
                    //var costtotal = ddetails.Where(x => x.block == district && x.expenditure_phase2 != null && x.expenditure_phase2 != "" && x.area_covered_phase2 != null && x.area_covered_phase2 != "" && x.total_beneficery_phase2 != null && x.total_beneficery_phase2 != "").ToList();
                    var dddd = ddetails.Where(x => x.block == district).ToList();

                    List<demandside_dli3_new_2025> costtotal = new List<demandside_dli3_new_2025>();
                    List<demandside_dli3_new_2025> lop1costtotal = new List<demandside_dli3_new_2025>();
                    foreach (var item in dddd)
                    {
                        var exp = item.expenditure_phase2;
                        var lop1exp = item.lop1expenditure_phase2;
                        if (exp == null || exp == "")
                        {

                        }
                        else
                        {
                            costtotal.Add(item);
                        }
                        if (lop1exp == null || lop1exp == "")
                        {

                        }
                        else
                        {
                            lop1costtotal.Add(item);
                        }
                    }

                    //data.totalgp_count = costtotal.GroupBy(x => x.gp).Count();
                    double add_ex = 0;
                    double add_area = 0;
                    int add_bene = 0;
                    double lop1add_ex = 0;
                    double lop1add_area = 0;
                    int lop1add_bene = 0;


                    foreach (var item in costtotal)
                    {
                        int idd = item.id;
                        var expenditure_phase2 = ABE.obj_demandside_dli3_phase2addnew.Where(x => x.id == idd).ToList();
                        var expenditure_phase = expenditure_phase2.Sum(x => Convert.ToDouble(item.expenditure_phase2));
                        add_ex += Convert.ToDouble(expenditure_phase);
                        var area_covered_phase = expenditure_phase2.Sum(x => Convert.ToDouble(item.area_covered_phase2));
                        add_area += Convert.ToDouble(area_covered_phase);
                        var total_beneficery_phase = expenditure_phase2.Sum(x => Convert.ToDecimal(item.total_beneficery_phase2));
                        add_bene += Convert.ToInt32(total_beneficery_phase);
                    }

                    //lop1 code start

                    foreach (var item in lop1costtotal)
                    {
                        int idd = item.id;
                        var expenditure_phase2 = ABE.obj_lop1demandside_dli3_phase2addnew_2025.Where(x => x.id == idd).ToList();
                        var expenditure_phase = expenditure_phase2.Sum(x => Convert.ToDouble(item.lop1expenditure_phase2));
                        lop1add_ex += Convert.ToDouble(expenditure_phase);
                        var area_covered_phase = expenditure_phase2.Sum(x => Convert.ToDouble(item.lop1area_covered_phase2));
                        lop1add_area += Convert.ToDouble(area_covered_phase);
                        var total_beneficery_phase = expenditure_phase2.Sum(x => Convert.ToDecimal(item.lop1total_beneficery_phase2));
                        lop1add_bene += Convert.ToInt32(total_beneficery_phase);
                    }
                    var total_listphase2 = ddetails.Where(x => x.block == district && x.entry_phase2 == "phase2").ToList();
                    var lop1totalgp_list = total_listphase2.Where(x => x.lop1expenditure_phase2 != "" && x.lop1expenditure_phase2 != null).ToList();

                    var lop1msca = lop1totalgp_list.GroupBy(x => x.gp).Count();
                    data.lop1_msc = Convert.ToInt32(lop1msca);

                    var lop1expenditure_phase2_data = lop1costtotal.Where(x => x.lop1expenditure_phase2 != "" || x.lop1expenditure_phase2 != null).ToList();

                    var lop1costtotalaa = lop1expenditure_phase2_data.Sum(x => Convert.ToDouble(x.lop1expenditure_phase2));
                    double lop1expenditure_ph = Convert.ToDouble(lop1costtotalaa);
                    data.lop1cost = lop1expenditure_ph + lop1add_ex;

                    var lop1area_covered_phase2_data = lop1costtotal.Where(x => x.lop1area_covered_phase2 != "" || x.lop1area_covered_phase2 != null).ToList();
                    var lop1area_underaa = lop1area_covered_phase2_data.Sum(x => Convert.ToDouble(x.lop1area_covered_phase2));
                    double lop1area = Convert.ToDouble(lop1area_underaa);
                    data.lop1area_under = lop1area + lop1add_area;

                    var lop1total_beneficery_phase2_data = lop1costtotal.Where(x => x.lop1total_beneficery_phase2 != "" || x.lop1total_beneficery_phase2 != null).ToList();
                    var lop1total_beneficiaryaa = lop1total_beneficery_phase2_data.Sum(x => Convert.ToDecimal(x.lop1total_beneficery_phase2));
                    int lop1total = Convert.ToInt32(lop1total_beneficiaryaa);
                    data.lop1total_beneficiary = lop1total + lop1add_bene;
                    //lop1 code end

                    var expenditure_phase2_data = costtotal.Where(x => x.expenditure_phase2 != "" || x.expenditure_phase2 != null).ToList();
                    // var costtotalaa = expenditure_phase2_data.Sum(x => Convert.ToDouble(x.expenditure_phase2));
                    var costtotalaa = costtotal.Sum(x =>
                    {
                        if (double.TryParse(x.expenditure_phase2, out double exp))
                        {
                            return exp;
                        }
                        else
                        {
                            return 0.0; // Default value if conversion fails
                        }
                    });
                    double expenditure_ph = Convert.ToDouble(costtotalaa);
                    data.cost = expenditure_ph + add_ex;
                    //var totalarea = costtotal.Sum(x => Convert.ToSingle(x.area_covered_phase2));
                    var area_covered_phase2_data = costtotal.Where(x => x.area_covered_phase2 != "" || x.area_covered_phase2 != null).ToList();
                    var area_underaa = costtotal.Sum(x =>
                    {
                        if (double.TryParse(x.area_covered_phase2, out double areaValue))
                        {
                            return areaValue;
                        }
                        else
                        {
                            return 0.0; // Default value if conversion fails
                        }
                    });
                    //var area_underaa = area_covered_phase2_data.Sum(x => Convert.ToDouble(x.area_covered_phase2));
                    double area = Convert.ToDouble(area_underaa);
                    data.area_under = area + add_area;
                    var total_beneficery_phase2_data = costtotal.Where(x => x.total_beneficery_phase2 != "" || x.total_beneficery_phase2 != null).ToList();
                    var total_beneficiaryaa = total_beneficery_phase2_data.Sum(x =>
                    {
                        if (double.TryParse(x.total_beneficery_phase2, out double tt))
                        {
                            return tt;
                        }
                        else
                        {
                            return 0; // Default value if conversion fails
                        }
                    });
                    //var total_beneficiaryaa = costtotal.Sum(x => Convert.ToDecimal(x.total_beneficery_phase2));
                    int total = Convert.ToInt32(total_beneficiaryaa);
                    data.total_beneficiary = total + add_bene;

                    var totalgp_list = total_listphase2.Where(x => x.expenditure_phase2 != "" && x.expenditure_phase2 != null).ToList();
                    var msca = totalgp_list.GroupBy(x => x.gp).Count();
                    data.msc = Convert.ToInt32(msca);

                    var totalgp_list_count = ddetails.Where(x => x.block == district && x.entry_phase2 == "phase2").ToList();
                    var dd = totalgp_list_count.Count();
                    data.fst = Convert.ToInt32(dd);


                    var a = totalgp_list_count.Where(x => x.approve_phase2 == null).Count();
                    var b = totalgp_list_count.Where(x => x.approve_phase2 == "").Count();


                    int totalatdpmu_list = a + b;

                    data.fsc = totalatdpmu_list;

                    var totalspmu_list = ddetails.Where(x => x.block == district && x.approve_phase2 == "Submit to SPMU").ToList();
                    //var msta = totalspmu_list.GroupBy(x => x.gp).Count();
                    var msta = totalspmu_list.Count();
                    data.mst = Convert.ToInt32(msta);
                    var totalapprove_list = ddetails.Where(x => x.block == district && x.approve_phase2 == "Approved").ToList();
                    //var mobca = totalapprove_list.GroupBy(x => x.gp).Count();
                    var mobca = totalapprove_list.Count();
                    data.mobc = Convert.ToInt32(mobca);
                    var totalreject_list = ddetails.Where(x => x.block == district && x.approve_phase2 == "Rejected").ToList();
                    // var mothera = totalreject_list.GroupBy(x => x.gp).Count();
                    var mothera = totalreject_list.Count();
                    data.mother = Convert.ToInt32(mothera);


                    all_data.Add(data);
                }


                var jsonResult = Json(all_data, JsonRequestBehavior.AllowGet);
                jsonResult.MaxJsonLength = int.MaxValue;
                return jsonResult;

            }
            catch (Exception Ex)
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }




        }



        //phase1 end

        //phase2 start


        [HttpPost]
        public ActionResult insert_demand_phase2(string id, string year_subsidey_phase2, string total_beneficery2, string departmentname_phase2, string schemename_phase2, string otherschemename_phase2, string area_covered_phase2, string expenditure_phase2, string remark_phase2, string lop1year_subsidey_phase2, string lop1total_beneficery2, string lop1departmentname_phase2, string lop1schemename_phase2, string lop1otherschemename_phase2, string lop1area_covered_phase2, string lop1expenditure_phase2, string lop1remark_phase2)
        {

            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_demandside_dli3_new_2025.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {
                        Data.year_subsidey_phase2 = year_subsidey_phase2;
                        Data.departmentname_phase2 = departmentname_phase2;
                        Data.schemename_phase2 = schemename_phase2;
                        if (otherschemename_phase2 == null || otherschemename_phase2 == "")
                        {
                            Data.otherschemename_phase2 = "";
                        }
                        else
                        {
                            Data.otherschemename_phase2 = otherschemename_phase2;
                        }
                        Data.total_beneficery_phase2 = total_beneficery2;
                        Data.area_covered_phase2 = area_covered_phase2;
                        Data.expenditure_phase2 = expenditure_phase2;
                        Data.remark_phase2 = remark_phase2;

                        Data.lop1year_subsidey_phase2 = lop1year_subsidey_phase2;
                        Data.lop1departmentname_phase2 = lop1departmentname_phase2;
                        Data.lop1schemename_phase2 = lop1schemename_phase2;
                        if (lop1otherschemename_phase2 == null || lop1otherschemename_phase2 == "")
                        {
                            Data.lop1otherschemename_phase2 = "";
                        }
                        else
                        {
                            Data.lop1otherschemename_phase2 = lop1otherschemename_phase2;
                        }
                        Data.lop1total_beneficery_phase2 = lop1total_beneficery2;
                        Data.lop1area_covered_phase2 = lop1area_covered_phase2;
                        Data.lop1expenditure_phase2 = lop1expenditure_phase2;
                        Data.lop1remark_phase2 = lop1remark_phase2;

                        Data.entry_phase2 = "phase2";
                        Data.phase2_id = id;
                        Data.entry_time_phase2 = DateTime.Now.ToString("dd-MM-yyyy hh:mm:ss:ms");

                        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = ABE.SaveChanges();
                        if (A > 0)
                        {
                            return Json("Successfully Saved");
                        }
                    }

                }
                catch (Exception ex)
                {
                    return Json("Logout", JsonRequestBehavior.AllowGet);

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult filldata_demand_phase2(int id)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    List<dynamic> all_data = new List<dynamic>();
                    if (id != 0)
                    {
                        int idd = Convert.ToInt32(id);
                        var data = ABE.obj_demandside_dli3_new_2025.Where(x => x.id == idd).OrderBy(c => c.gp).ToList();
                        foreach (var item in data)
                        {
                            all_data.Add(item);
                            int Check_id = item.id;
                            var details5 = ABE.obj_demandside_dli3_phase2addnew.Where(x => x.id == Check_id).OrderByDescending(c => c.phaseid2).ToList();
                            foreach (var itemdata in details5)
                            {
                                all_data.Add(itemdata);
                            }
                        }

                        //for (int i = 0; i < data.Count; i++)
                        //{
                        //    all_data.Add(data[i]);
                        //    int Check_id = data[i].id;
                        //    var details5 = ABE.obj_demandside_dli3_phase2addnew.Where(x => x.id == Check_id).OrderByDescending(c => c.phaseid2).ToList();
                        //    for (int j = 0; j < details5.Count; j++)
                        //    {
                        //        all_data.Add(details5[j]);
                        //    }
                        //}
                    }
                    if (all_data != null)
                    {
                        var jsonresult = Json(all_data, JsonRequestBehavior.AllowGet);
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
                    return Json("Logout", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);

            }
        }

        [HttpPost]
        public ActionResult lop1filldata_demand_phase2(int id)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    List<dynamic> all_data = new List<dynamic>();
                    if (id != 0)
                    {
                        int idd = Convert.ToInt32(id);
                        var data = ABE.obj_demandside_dli3_new_2025.Where(x => x.id == idd).OrderBy(c => c.gp).ToList();
                        foreach (var item in data)
                        {
                            all_data.Add(item);
                            int Check_id = item.id;
                            var details5 = ABE.obj_lop1demandside_dli3_phase2addnew_2025.Where(x => x.id == Check_id).OrderByDescending(c => c.phaseid2).ToList();
                            foreach (var itemdata in details5)
                            {
                                all_data.Add(itemdata);
                            }
                        }
                    }
                    if (all_data != null)
                    {
                        var jsonresult = Json(all_data, JsonRequestBehavior.AllowGet);
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
                    return Json("Logout", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);

            }
        }


        [HttpPost]
        public ActionResult update_data_phase2(string id, string year_subsidey_phase2, string departmentname_phase2, string schemename_phase2, string otherschemename_phase2, string total_beneficery_phase2, string area_covered_phase2, string expenditure_phase2, string remark_phase2)
        {

            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_demandside_dli3_new_2025.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        Data.year_subsidey_phase2 = year_subsidey_phase2;
                        Data.area_covered_phase2 = area_covered_phase2;
                        Data.expenditure_phase2 = expenditure_phase2;
                        Data.remark_phase2 = remark_phase2;
                        Data.departmentname_phase2 = departmentname_phase2;
                        Data.schemename_phase2 = schemename_phase2;
                        Data.otherschemename_phase2 = otherschemename_phase2;
                        Data.total_beneficery_phase2 = total_beneficery_phase2;

                        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = ABE.SaveChanges();
                        if (A > 0)
                        {
                            return Json("Successfully Updated");
                        }
                    }

                }
                catch (Exception ex)
                {
                    return Json("Logout", JsonRequestBehavior.AllowGet);

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult lop1update_data_phase2(string id, string year_subsidey_phase2, string departmentname_phase2, string schemename_phase2, string otherschemename_phase2, string total_beneficery_phase2, string area_covered_phase2, string expenditure_phase2, string remark_phase2)
        {

            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_demandside_dli3_new_2025.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        Data.lop1year_subsidey_phase2 = year_subsidey_phase2;
                        Data.lop1area_covered_phase2 = area_covered_phase2;
                        Data.lop1expenditure_phase2 = expenditure_phase2;
                        Data.lop1remark_phase2 = remark_phase2;
                        Data.lop1departmentname_phase2 = departmentname_phase2;
                        Data.lop1schemename_phase2 = schemename_phase2;
                        Data.lop1otherschemename_phase2 = otherschemename_phase2;
                        Data.lop1total_beneficery_phase2 = total_beneficery_phase2;

                        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = ABE.SaveChanges();
                        if (A > 0)
                        {
                            return Json("Successfully Updated");
                        }
                    }

                }
                catch (Exception ex)
                {
                    return Json("Logout", JsonRequestBehavior.AllowGet);

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }


        [HttpPost]
        public ActionResult lop1save_newrow_phase2(string id, string lop1otherschemename_phase2, string lop1total_beneficery2, string lop1year_subsidey_phase2, string lop1departmentname_phase2, string lop1schemename_phase2, string lop1area_covered_phase2, string lop1expenditure_phase2, string lop1remark_phase2)
        {

            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = new lop1demandside_dli3_phase2addnew_2025();
                    if (Data != null)
                    {
                        Data.id = ID;
                        Data.lop1year_subsidey_phase2 = lop1year_subsidey_phase2;
                        Data.lop1departmentname_phase2 = lop1departmentname_phase2;
                        Data.lop1schemename_phase2 = lop1schemename_phase2;
                        Data.lop1otherschemename_phase2 = lop1otherschemename_phase2;
                        Data.lop1area_covered_phase2 = lop1area_covered_phase2;
                        Data.lop1expenditure_phase2 = lop1expenditure_phase2;
                        Data.lop1remark_phase2 = lop1remark_phase2;
                        Data.lop1total_beneficery_phase2 = lop1total_beneficery2;
                        Data.entry_phase2 = "phase2_new";
                        Data.lop1entry_time_phase2 = DateTime.Now.ToString("dd-MM-yyyy hh:mm:ss:ms");
                        ABE.obj_lop1demandside_dli3_phase2addnew_2025.Add(Data);
                        ABE.SaveChanges();
                        return Json("Successfully Saved", JsonRequestBehavior.AllowGet);
                    }

                }
                catch (Exception ex)
                {
                    return Json("Logout", JsonRequestBehavior.AllowGet);

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult save_newrow_phase2(string id, string otherschemename_phase2, string total_beneficery2, string year_subsidey_phase2, string departmentname_phase2, string schemename_phase2, string area_covered_phase2, string expenditure_phase2, string remark_phase2)
        {

            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = new demandside_dli3_phase2addnew();
                    if (Data != null)
                    {
                        Data.id = ID;
                        Data.year_subsidey_phase2 = year_subsidey_phase2;
                        Data.departmentname_phase2 = departmentname_phase2;
                        Data.schemename_phase2 = schemename_phase2;
                        Data.otherschemename_phase2 = otherschemename_phase2;
                        Data.area_covered_phase2 = area_covered_phase2;
                        Data.expenditure_phase2 = expenditure_phase2;
                        Data.remark_phase2 = remark_phase2;
                        Data.total_beneficery_phase2 = total_beneficery2;
                        Data.entry_phase2 = "phase2_new";
                        Data.entry_time_phase2 = DateTime.Now.ToString("dd-MM-yyyy hh:mm:ss:ms");
                        ABE.obj_demandside_dli3_phase2addnew.Add(Data);
                        ABE.SaveChanges();
                        return Json("Successfully Saved", JsonRequestBehavior.AllowGet);
                    }

                }
                catch (Exception ex)
                {
                    return Json("Logout", JsonRequestBehavior.AllowGet);

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }
        [HttpPost]
        public ActionResult update_data_phase2_addnew(string phaseid2, string departmentname_phase2, string schemename_phase2, string otherschemename_phase2, string total_beneficery2, string area_covered_phase2, string expenditure_phase2, string remark_phase2)
        {

            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(phaseid2);
                    var Data = ABE.obj_demandside_dli3_phase2addnew.Where(x => x.phaseid2 == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        Data.area_covered_phase2 = area_covered_phase2;
                        Data.expenditure_phase2 = expenditure_phase2;
                        Data.remark_phase2 = remark_phase2;
                        Data.departmentname_phase2 = departmentname_phase2;
                        Data.schemename_phase2 = schemename_phase2;
                        Data.otherschemename_phase2 = otherschemename_phase2;
                        Data.total_beneficery_phase2 = total_beneficery2;
                        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = ABE.SaveChanges();
                        if (A > 0)
                        {
                            return Json("Successfully Updated");
                        }
                    }

                }
                catch (Exception ex)
                {
                    return Json("Logout", JsonRequestBehavior.AllowGet);

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult lop1update_data_phase2_addnew(string phaseid2, string departmentname_phase2, string schemename_phase2, string otherschemename_phase2, string total_beneficery2, string area_covered_phase2, string expenditure_phase2, string remark_phase2)
        {

            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(phaseid2);
                    var Data = ABE.obj_lop1demandside_dli3_phase2addnew_2025.Where(x => x.phaseid2 == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        Data.lop1area_covered_phase2 = area_covered_phase2;
                        Data.lop1expenditure_phase2 = expenditure_phase2;
                        Data.lop1remark_phase2 = remark_phase2;
                        Data.lop1departmentname_phase2 = departmentname_phase2;
                        Data.lop1schemename_phase2 = schemename_phase2;
                        Data.lop1otherschemename_phase2 = otherschemename_phase2;
                        Data.lop1total_beneficery_phase2 = total_beneficery2;
                        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = ABE.SaveChanges();
                        if (A > 0)
                        {
                            return Json("Successfully Updated");
                        }
                    }

                }
                catch (Exception ex)
                {
                    return Json("Logout", JsonRequestBehavior.AllowGet);

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult delete_phase2_addnew(int phaseid2)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(phaseid2);
                    var Data = ABE.obj_demandside_dli3_phase2addnew.Where(x => x.phaseid2 == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        ABE.Entry(Data).State = EntityState.Deleted;
                        ABE.SaveChanges();
                        return Json("Successfully Delete");
                    }
                    else
                    {
                        return Json("Logout", JsonRequestBehavior.AllowGet);
                    }
                }


                catch (Exception ex)
                {
                    return Json("Logout", JsonRequestBehavior.AllowGet);

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);

            }
        }

        [HttpPost]
        public ActionResult lop1delete_phase2_addnew(int phaseid2)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(phaseid2);
                    var Data = ABE.obj_lop1demandside_dli3_phase2addnew_2025.Where(x => x.phaseid2 == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        ABE.Entry(Data).State = EntityState.Deleted;
                        ABE.SaveChanges();
                        return Json("Successfully Delete");
                    }
                    else
                    {
                        return Json("Error", JsonRequestBehavior.AllowGet);
                    }
                }


                catch (Exception ex)
                {
                    return Json("Logout", JsonRequestBehavior.AllowGet);

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);

            }
        }


        [HttpPost]
        public ActionResult delete_phase2(int id)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_demandside_dli3_new_2025.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {
                        var checkphasse2 = "No";
                        var aa = Data.lop1year_subsidey_phase2;
                        Data.year_subsidey_phase2 = null;
                        Data.departmentname_phase2 = null;
                        Data.schemename_phase2 = null;
                        Data.area_covered_phase2 = null;
                        Data.expenditure_phase2 = null;
                        Data.remark_phase2 = null;
                        Data.total_beneficery_phase2 = null;
                        Data.otherschemename_phase2 = null;

                        if (aa == null || aa == "")
                        {
                            checkphasse2 = "Yes";
                            Data.phase2_id = "Delete";
                            Data.entry_phase2 = null;
                            Data.entry_time_phase2 = null;
                            Data.approve_phase2 = null;
                            Data.rejectremark_phase2 = null;
                        }
                        var Data_1 = ABE.obj_demandside_dli3_phase2addnew.Where(x => x.id == ID).ToList();
                        foreach (var item in Data_1)
                        {
                            int idd = item.phaseid2;
                            var Data_a = ABE.obj_demandside_dli3_phase2addnew.Where(x => x.phaseid2 == idd).SingleOrDefault();
                            ABE.Entry(Data_a).State = EntityState.Deleted;
                            ABE.SaveChanges();
                        }
                        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = ABE.SaveChanges();

                        if (A > 0)
                        {
                            return Json("Successfully Delete" + ',' + checkphasse2);
                        }
                    }

                }
                catch (Exception ex)
                {
                    return Json("" + ',' + "");

                }
                return Json("Invalid" + ',' + "");
            }
            else
            {
                return Json("Logout" + ',' + "", JsonRequestBehavior.AllowGet);

            }
        }

        [HttpPost]
        public ActionResult lop1delete_phase2(int id)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_demandside_dli3_new_2025.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {
                        var checkphasse2 = "No";
                        var aa = Data.year_subsidey_phase2;
                        Data.lop1year_subsidey_phase2 = null;
                        Data.lop1departmentname_phase2 = null;
                        Data.lop1schemename_phase2 = null;
                        Data.lop1area_covered_phase2 = null;
                        Data.lop1expenditure_phase2 = null;
                        Data.lop1remark_phase2 = null;
                        Data.lop1total_beneficery_phase2 = null;
                        Data.lop1otherschemename_phase2 = null;
                        if (aa == null || aa == "")
                        {
                            checkphasse2 = "Yes";
                            Data.phase2_id = "Delete";
                            Data.entry_phase2 = null;
                            Data.entry_time_phase2 = null;
                            Data.approve_phase2 = null;
                            Data.rejectremark_phase2 = null;
                        }
                        var Data_1 = ABE.obj_lop1demandside_dli3_phase2addnew_2025.Where(x => x.id == ID).ToList();
                        foreach (var item in Data_1)
                        {
                            int idd = item.phaseid2;
                            var Data_a = ABE.obj_lop1demandside_dli3_phase2addnew_2025.Where(x => x.phaseid2 == idd).SingleOrDefault();
                            ABE.Entry(Data_a).State = EntityState.Deleted;
                            ABE.SaveChanges();
                        }
                        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = ABE.SaveChanges();

                        if (A > 0)
                        {
                            return Json("Successfully Delete" + ',' + checkphasse2);
                        }
                    }

                }
                catch (Exception ex)
                {
                    return Json("" + ',' + "");

                }
                return Json("Invalid" + ',' + "");
            }
            else
            {
                return Json("Logout" + ',' + "", JsonRequestBehavior.AllowGet);

            }
        }


        [HttpPost]
        public ActionResult phase2submittospmu(int id)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_demandside_dli3_new_2025.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        Data.approve_phase2 = "Submit to SPMU";
                        Data.rejectremark_phase2 = "";
                        var Data_1 = ABE.obj_demandside_dli3_phase2addnew.Where(x => x.id == ID).ToList();
                        foreach (var item in Data_1)
                        {
                            int idd = item.phaseid2;
                            var Data_a = ABE.obj_demandside_dli3_phase2addnew.Where(x => x.phaseid2 == idd).SingleOrDefault();
                            Data_a.approve_phase2 = "Submit to SPMU";
                            ABE.Entry(Data_a).State = System.Data.Entity.EntityState.Modified;
                            ABE.SaveChanges();
                        }
                        var lop1Data_1 = ABE.obj_lop1demandside_dli3_phase2addnew_2025.Where(x => x.id == ID).ToList();
                        foreach (var item in lop1Data_1)
                        {
                            int idd = item.phaseid2;
                            var Data_a = ABE.obj_lop1demandside_dli3_phase2addnew_2025.Where(x => x.phaseid2 == idd).SingleOrDefault();
                            Data_a.approve_phase2 = "Submit to SPMU";
                            ABE.Entry(Data_a).State = System.Data.Entity.EntityState.Modified;
                            ABE.SaveChanges();
                        }


                        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = ABE.SaveChanges();

                        if (A > 0)
                        {
                            return Json("Successfully Submitted");
                        }
                    }
                }
                catch (Exception ex)
                {
                    return Json("Logout", JsonRequestBehavior.AllowGet);

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);

            }
        }
        [HttpPost]
        public ActionResult phase2approve(int id)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_demandside_dli3_new_2025.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        Data.approve_phase2 = "Approved";
                        Data.rejectremark_phase2 = "";
                        var Data_1 = ABE.obj_demandside_dli3_phase2addnew.Where(x => x.id == ID).ToList();
                        foreach (var item in Data_1)
                        {
                            int idd = item.phaseid2;
                            var Data_a = ABE.obj_demandside_dli3_phase2addnew.Where(x => x.phaseid2 == idd).SingleOrDefault();
                            Data_a.approve_phase2 = "Approved";
                            ABE.Entry(Data_a).State = System.Data.Entity.EntityState.Modified;
                            ABE.SaveChanges();
                        }
                        var lop1Data_1 = ABE.obj_lop1demandside_dli3_phase2addnew_2025.Where(x => x.id == ID).ToList();
                        foreach (var item in lop1Data_1)
                        {
                            int idd = item.phaseid2;
                            var Data_a = ABE.obj_lop1demandside_dli3_phase2addnew_2025.Where(x => x.phaseid2 == idd).SingleOrDefault();
                            Data_a.approve_phase2 = "Approved";
                            ABE.Entry(Data_a).State = System.Data.Entity.EntityState.Modified;
                            ABE.SaveChanges();
                        }
                        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = ABE.SaveChanges();

                        if (A > 0)
                        {
                            return Json("Successfully Approved");
                        }
                    }
                }
                catch (Exception ex)
                {
                    return Json("Logout", JsonRequestBehavior.AllowGet);

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);

            }
        }

        [HttpPost]
        public ActionResult phase2reject(int id, string reject)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_demandside_dli3_new_2025.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        Data.approve_phase2 = "Rejected";
                        Data.rejectremark_phase2 = reject;
                        var Data_1 = ABE.obj_demandside_dli3_phase2addnew.Where(x => x.id == ID).ToList();
                        foreach (var item in Data_1)
                        {
                            int idd = item.phaseid2;
                            var Data_a = ABE.obj_demandside_dli3_phase2addnew.Where(x => x.phaseid2 == idd).SingleOrDefault();
                            Data_a.approve_phase2 = "Rejected";
                            ABE.Entry(Data_a).State = System.Data.Entity.EntityState.Modified;
                            ABE.SaveChanges();
                        }
                        var lop1Data_1 = ABE.obj_lop1demandside_dli3_phase2addnew_2025.Where(x => x.id == ID).ToList();
                        foreach (var item in lop1Data_1)
                        {
                            int idd = item.phaseid2;
                            var Data_a = ABE.obj_lop1demandside_dli3_phase2addnew_2025.Where(x => x.phaseid2 == idd).SingleOrDefault();
                            Data_a.approve_phase2 = "Rejected";
                            ABE.Entry(Data_a).State = System.Data.Entity.EntityState.Modified;
                            ABE.SaveChanges();
                        }

                        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = ABE.SaveChanges();

                        if (A > 0)
                        {
                            return Json("Successfully Rejected");
                        }
                    }
                }
                catch (Exception ex)
                {
                    return Json("Logout", JsonRequestBehavior.AllowGet);

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);

            }
        }
        //excelcode start
        public ActionResult demandside_excel_phase1(string state1, string district1, string block01, string gp1, string year1, string demand_va)
        {
            try
            {
                var State = state1;
                var Dist = district1;
                var Block = block01;
                var Gram = gp1;
                var Year = year1;


                List<demandside_dli3_new_2025> data = new List<demandside_dli3_new_2025>();
                List<demandside_dli3_new_excel> data_excel = new List<demandside_dli3_new_excel>();
                if (demand_va != "0" && demand_va != "All")
                {
                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null && demand_va != "0" && demand_va != "" && demand_va != null)
                    {
                        data = ABE.obj_demandside_dli3_new_2025.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.financial_year == Year && x.fund_for == demand_va).OrderBy(c => c.gp).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && demand_va != "0" && demand_va != "" && demand_va != null)
                    {
                        data = ABE.obj_demandside_dli3_new_2025.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.fund_for == demand_va).OrderBy(c => c.gp).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Year != "0" && Year != "" && Year != null && demand_va != "0" && demand_va != "" && demand_va != null)
                    {
                        data = ABE.obj_demandside_dli3_new_2025.Where(x => x.state == State && x.district == Dist && x.block == Block && x.financial_year == Year && x.fund_for == demand_va).OrderBy(c => c.gp).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && demand_va != "0" && demand_va != "" && demand_va != null)
                    {
                        data = ABE.obj_demandside_dli3_new_2025.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fund_for == demand_va).OrderBy(c => c.gp).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null && demand_va != "0" && demand_va != "" && demand_va != null)
                    {
                        data = ABE.obj_demandside_dli3_new_2025.Where(x => x.state == State && x.district == Dist && x.financial_year == Year && x.fund_for == demand_va).OrderBy(c => c.gp).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && demand_va != "0" && demand_va != "" && demand_va != null)
                    {
                        data = ABE.obj_demandside_dli3_new_2025.Where(x => x.state == State && x.district == Dist && x.fund_for == demand_va).OrderBy(c => c.gp).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null && demand_va != "0" && demand_va != "" && demand_va != null)
                    {
                        data = ABE.obj_demandside_dli3_new_2025.Where(x => x.state == State && x.financial_year == Year && x.fund_for == demand_va).OrderBy(c => c.gp).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && demand_va != "0" && demand_va != "" && demand_va != null)
                    {
                        data = ABE.obj_demandside_dli3_new_2025.Where(x => x.state == State && x.fund_for == demand_va).OrderBy(c => c.gp).ToList();
                    }
                }
                else if (demand_va == "All")
                {
                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null)
                    {
                        data = ABE.obj_demandside_dli3_new_2025.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.financial_year == Year).OrderBy(c => c.gp).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        data = ABE.obj_demandside_dli3_new_2025.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram).OrderBy(c => c.gp).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Year != "0" && Year != "" && Year != null)
                    {
                        data = ABE.obj_demandside_dli3_new_2025.Where(x => x.state == State && x.district == Dist && x.block == Block && x.financial_year == Year).OrderBy(c => c.gp).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        data = ABE.obj_demandside_dli3_new_2025.Where(x => x.state == State && x.district == Dist && x.block == Block).OrderBy(c => c.gp).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null)
                    {
                        data = ABE.obj_demandside_dli3_new_2025.Where(x => x.state == State && x.district == Dist && x.financial_year == Year).OrderBy(c => c.gp).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        data = ABE.obj_demandside_dli3_new_2025.Where(x => x.state == State && x.district == Dist).OrderBy(c => c.gp).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null)
                    {
                        data = ABE.obj_demandside_dli3_new_2025.Where(x => x.state == State && x.financial_year == Year).OrderBy(c => c.gp).ToList();
                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        data = ABE.obj_demandside_dli3_new_2025.Where(x => x.state == State).OrderBy(c => c.gp).ToList();
                    }
                }
                else
                {
                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null)
                    {
                        data = ABE.obj_demandside_dli3_new_2025.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.financial_year == Year).OrderBy(c => c.gp).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        data = ABE.obj_demandside_dli3_new_2025.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram).OrderBy(c => c.gp).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Year != "0" && Year != "" && Year != null)
                    {
                        data = ABE.obj_demandside_dli3_new_2025.Where(x => x.state == State && x.district == Dist && x.block == Block && x.financial_year == Year).OrderBy(c => c.gp).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        data = ABE.obj_demandside_dli3_new_2025.Where(x => x.state == State && x.district == Dist && x.block == Block).OrderBy(c => c.gp).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null)
                    {
                        data = ABE.obj_demandside_dli3_new_2025.Where(x => x.state == State && x.district == Dist && x.financial_year == Year).OrderBy(c => c.gp).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        data = ABE.obj_demandside_dli3_new_2025.Where(x => x.state == State && x.district == Dist).OrderBy(c => c.gp).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null)
                    {
                        data = ABE.obj_demandside_dli3_new_2025.Where(x => x.state == State && x.financial_year == Year).OrderBy(c => c.gp).ToList();
                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        data = ABE.obj_demandside_dli3_new_2025.Where(x => x.state == State).OrderBy(c => c.gp).ToList();
                    }
                }

                using (var workbook = new XLWorkbook())
                {

                    var worksheet = workbook.Worksheets.Add("Demand Side Phase1");
                    var currentRow = 1;

                    worksheet.Cell(currentRow, 1).Value = "Data From WSP";
                    worksheet.Range(currentRow, 2, currentRow, 7).Merge();
                    worksheet.Cell(currentRow, 2).Value = "GP Information";
                    worksheet.Cell(currentRow + 1, 2).Value = "State";
                    worksheet.Cell(currentRow + 1, 3).Value = "District";
                    worksheet.Cell(currentRow + 1, 4).Value = "Block";
                    worksheet.Cell(currentRow + 1, 5).Value = "Grampanchayat";
                    worksheet.Cell(currentRow + 1, 6).Value = "GP Center Point (Latitude)";
                    worksheet.Cell(currentRow + 1, 7).Value = "GP Center Point (Longitude)";


                    worksheet.Range(currentRow, 8, currentRow, 16).Merge();
                    worksheet.Cell(currentRow, 8).Value = "Demand Side Proposed Under WSP";
                    worksheet.Cell(currentRow + 1, 8).Value = "Financial Year";
                    worksheet.Cell(currentRow + 1, 9).Value = "Demand Side Interventions";

                    worksheet.Cell(currentRow + 1, 10).Value = "Department Name";
                    worksheet.Cell(currentRow + 1, 11).Value = "Scheme Name / Possible Funding Source";
                    worksheet.Cell(currentRow + 1, 12).Value = "Total Area Under Conventional Irrigation (ha)";
                    worksheet.Cell(currentRow + 1, 13).Value = "Area Proposed Under Intervention (ha)";
                    worksheet.Cell(currentRow + 1, 14).Value = "Approximate Estimated Cost (in lakh)";
                    worksheet.Cell(currentRow + 1, 15).Value = "Total water demand (ha)";
                    worksheet.Cell(currentRow + 1, 16).Value = "Reduction in water demand (ha m)";

                    worksheet.Range(currentRow, 17, currentRow, 27).Merge();
                    worksheet.Cell(currentRow, 17).Value = "Convergence Expenditure Claim Other than Atal Bhujal Yojana Share (Phase 1 [April 2024-September 2024])";

                    worksheet.Cell(currentRow + 1, 17).Value = "Year Of Subsidy Disbursement(Phase 1)";
                    worksheet.Cell(currentRow + 1, 18).Value = "Department Name(Phase 1)";
                    worksheet.Cell(currentRow + 1, 19).Value = "Scheme Name(Phase 1)";
                    worksheet.Cell(currentRow + 1, 20).Value = "Other Scheme Name(Phase 1)";
                    worksheet.Cell(currentRow + 1, 21).Value = "Area Covered (in ha)(Phase 1)";
                    worksheet.Cell(currentRow + 1, 22).Value = "Total Number of Beneficiary(Phase 1)";
                    worksheet.Cell(currentRow + 1, 23).Value = "Expenditure incurred other than Atal Jal (in lakh)(Phase 1)";
                    worksheet.Cell(currentRow + 1, 24).Value = "Remark, if any(Phase 1)";
                    worksheet.Cell(currentRow + 1, 25).Value = "Status(Phase 1)";
                    worksheet.Cell(currentRow + 1, 26).Value = "Reject Remark(Phase 1)";
                    worksheet.Cell(currentRow + 1, 27).Value = "Phase(Phase 1)";



                    for (int col = 1; col <= 27; col++)
                    {
                        worksheet.Cell(currentRow, col).Style.Font.Bold = true;
                        worksheet.Cell(currentRow, col).Style.Alignment.Horizontal = XLAlignmentHorizontalValues.Center;
                    }
                    for (int col = 2; col <= 27; col++)
                    {
                        worksheet.Cell(currentRow + 1, col).Style.Font.Bold = true;
                        worksheet.Cell(currentRow, col).Style.Alignment.Horizontal = XLAlignmentHorizontalValues.Center;
                    }

                    currentRow = 2;

                    if (data.Count != 0)
                    {
                        for (int i = 0; i < data.Count; i++)
                        {
                            var scheme_name = data[i].scheme_name;
                            if (scheme_name == "Other")
                            {
                                var other = data[i].other_scheme;
                                var abc = scheme_name + " - " + other;
                                scheme_name = abc;
                            }
                            var fund_for = data[i].fund_for;
                            if (fund_for == "Other Measures")
                            {
                                var other = data[i].innovative_measures;
                                var abc = fund_for + " - " + other;
                                fund_for = abc;
                            }
                            demandside_dli3_new_excel obj = new demandside_dli3_new_excel();
                            var id = data[i].phase1_id;
                            obj.from_table = data[i].from_table;
                            obj.state = data[i].state;
                            obj.district = data[i].district;
                            obj.block = data[i].block;
                            obj.gp = data[i].gp;
                            obj.latitude = data[i].latitude;
                            obj.longitude = data[i].longitude;
                            obj.financial_year = data[i].financial_year;
                            obj.fund_for = fund_for;
                            obj.department_name = data[i].department_name;
                            obj.scheme_name = scheme_name;
                            obj.total_crop_area = data[i].total_crop_area;
                            obj.area_proposed = data[i].area_proposed;
                            obj.approx_est_cost = data[i].approx_est_cost;
                            obj.total_water_demand = data[i].total_water_demand;
                            obj.total_reduction_gw = data[i].total_reduction_gw;
                            obj.year_subsidey_phase1 = data[i].year_subsidey_phase1;
                            obj.departmentname_phase1 = data[i].departmentname_phase1;
                            obj.schemename_phase1 = data[i].schemename_phase1;
                            obj.otherschemename_phase1 = data[i].otherschemename_phase1;
                            obj.area_covered_phase1 = data[i].area_covered_phase1;
                            obj.total_beneficery_phase1 = data[i].total_beneficery_phase1;
                            obj.expenditure_phase1 = data[i].expenditure_phase1;
                            obj.remark_phase1 = data[i].remark_phase1;
                            obj.approve = data[i].approve_phase1;
                            obj.rejectremark_phase1 = data[i].rejectremark_phase1;
                            obj.Phase1 = data[i].entry_phase1;

                            data_excel.Add(obj);

                            int iddd = Convert.ToInt32(id);
                            var excel_data = ABE.obj_demandside_dli3_addnew_2025.Where(x => x.id == iddd).ToList();
                            for (int j = 0; j < excel_data.Count; j++)
                            {
                                string idd = Convert.ToString(excel_data[j].id);
                                var approve_phase = excel_data[j].approve_phase1;
                                if (approve_phase == null || approve_phase == "")
                                {
                                    approve_phase = "At DPMU";
                                }
                                var scheme_name_phase1 = "";
                                var fund_for_phase1 = "";
                                var excel_data_phase1 = ABE.obj_demandside_dli3_new_2025.Where(x => x.phase1_id == idd).FirstOrDefault();
                                if (excel_data_phase1 != null)
                                {
                                    scheme_name_phase1 = excel_data_phase1.scheme_name;
                                    if (scheme_name_phase1 == "Other")
                                    {
                                        var other = excel_data_phase1.other_scheme;
                                        var abc = scheme_name_phase1 + " - " + other;
                                        scheme_name_phase1 = abc;
                                    }
                                    fund_for_phase1 = excel_data_phase1.fund_for;
                                    if (fund_for_phase1 == "Other Measures")
                                    {
                                        var other = excel_data_phase1.innovative_measures;
                                        var abc = fund_for_phase1 + " - " + other;
                                        fund_for_phase1 = abc;
                                    }
                                }
                                demandside_dli3_new_excel obj2 = new demandside_dli3_new_excel();

                                obj2.from_table = excel_data_phase1.from_table;
                                obj2.state = excel_data_phase1.state;
                                obj2.district = excel_data_phase1.district;
                                obj2.block = excel_data_phase1.block;
                                obj2.gp = excel_data_phase1.gp;
                                obj2.latitude = excel_data_phase1.latitude;
                                obj2.longitude = excel_data_phase1.longitude;
                                obj2.financial_year = excel_data_phase1.financial_year;
                                obj2.fund_for = fund_for_phase1;
                                obj2.department_name = excel_data_phase1.department_name;
                                obj2.scheme_name = scheme_name_phase1;
                                obj2.total_crop_area = excel_data_phase1.total_crop_area;
                                obj2.area_proposed = excel_data_phase1.area_proposed;
                                obj2.approx_est_cost = excel_data_phase1.approx_est_cost;
                                obj2.total_water_demand = excel_data_phase1.total_water_demand;
                                obj2.total_reduction_gw = excel_data_phase1.total_reduction_gw;
                                obj2.year_subsidey_phase1 = excel_data[j].year_subsidey_phase1;
                                obj2.departmentname_phase1 = excel_data[j].departmentname_phase1;
                                obj2.schemename_phase1 = excel_data[j].schemename_phase1;
                                obj2.otherschemename_phase1 = excel_data[j].otherschemename_phase1;
                                obj2.area_covered_phase1 = excel_data[j].area_covered_phase1;
                                obj2.total_beneficery_phase1 = excel_data[j].total_beneficery_phase1;
                                obj2.expenditure_phase1 = excel_data[j].expenditure_phase1;
                                obj2.remark_phase1 = excel_data[j].remark_phase1;
                                obj2.approve = approve_phase;
                                obj2.rejectremark_phase1 = excel_data_phase1.rejectremark_phase1;
                                obj2.Phase1 = "phase1";

                                data_excel.Add(obj2);
                            }
                        }
                        if (data_excel.Count != 0)
                        {
                            for (int i = 0; i < data_excel.Count; i++)
                            {
                                currentRow++;
                                var other_scheme = data_excel[i].otherschemename_phase1;
                                if (other_scheme == null)
                                {
                                    other_scheme = "";
                                }
                                var entry_phase = data_excel[i].Phase1;
                                if (entry_phase == null)
                                {
                                    entry_phase = "";
                                }
                                var approve_phase = data_excel[i].approve;
                                if (approve_phase == null || approve_phase == "")
                                {
                                    approve_phase = "At DPMU";
                                }
                                var scheme_name = data_excel[i].scheme_name;
                                if (scheme_name == "Other")
                                {
                                    var other = data_excel[i].other_scheme;
                                    var abc = scheme_name + " - " + other;
                                    scheme_name = abc;
                                }
                                var fund_for = data_excel[i].fund_for;
                                if (fund_for == "Other Measures")
                                {
                                    var other = data_excel[i].innovative_measures;
                                    var abc = fund_for + " - " + other;
                                    fund_for = abc;
                                }
                                if (entry_phase == "phase1")
                                {

                                    worksheet.Cell(currentRow, 1).Value = data_excel[i].from_table;
                                    worksheet.Cell(currentRow, 2).Value = data_excel[i].state;
                                    worksheet.Cell(currentRow, 3).Value = data_excel[i].district;
                                    worksheet.Cell(currentRow, 4).Value = data_excel[i].block;
                                    worksheet.Cell(currentRow, 5).Value = data_excel[i].gp;
                                    worksheet.Cell(currentRow, 6).Value = data_excel[i].latitude;
                                    worksheet.Cell(currentRow, 7).Value = data_excel[i].longitude;
                                    worksheet.Cell(currentRow, 8).Value = data_excel[i].financial_year;
                                    worksheet.Cell(currentRow, 9).Value = fund_for;
                                    worksheet.Cell(currentRow, 10).Value = data_excel[i].department_name;
                                    worksheet.Cell(currentRow, 11).Value = scheme_name;
                                    worksheet.Cell(currentRow, 12).Value = data_excel[i].total_crop_area;
                                    worksheet.Cell(currentRow, 13).Value = data_excel[i].area_proposed;
                                    worksheet.Cell(currentRow, 14).Value = data_excel[i].approx_est_cost;
                                    worksheet.Cell(currentRow, 15).Value = data_excel[i].total_water_demand;
                                    worksheet.Cell(currentRow, 16).Value = data_excel[i].total_reduction_gw;
                                    worksheet.Cell(currentRow, 17).Value = data_excel[i].year_subsidey_phase1;
                                    worksheet.Cell(currentRow, 18).Value = data_excel[i].departmentname_phase1;
                                    worksheet.Cell(currentRow, 19).Value = data_excel[i].schemename_phase1;
                                    worksheet.Cell(currentRow, 20).Value = other_scheme;
                                    worksheet.Cell(currentRow, 21).Value = data_excel[i].area_covered_phase1;
                                    worksheet.Cell(currentRow, 22).Value = data_excel[i].total_beneficery_phase1;
                                    worksheet.Cell(currentRow, 23).Value = data_excel[i].expenditure_phase1;
                                    worksheet.Cell(currentRow, 24).Value = data_excel[i].remark_phase1;
                                    worksheet.Cell(currentRow, 25).Value = approve_phase;
                                    worksheet.Cell(currentRow, 26).Value = data_excel[i].rejectremark_phase1;
                                    worksheet.Cell(currentRow, 27).Value = "Phase1";

                                }
                                else
                                {
                                    worksheet.Cell(currentRow, 1).Value = data_excel[i].from_table;
                                    worksheet.Cell(currentRow, 2).Value = data_excel[i].state;
                                    worksheet.Cell(currentRow, 3).Value = data_excel[i].district;
                                    worksheet.Cell(currentRow, 4).Value = data_excel[i].block;
                                    worksheet.Cell(currentRow, 5).Value = data_excel[i].gp;
                                    worksheet.Cell(currentRow, 6).Value = data_excel[i].latitude;
                                    worksheet.Cell(currentRow, 7).Value = data_excel[i].longitude;
                                    worksheet.Cell(currentRow, 8).Value = data_excel[i].financial_year;
                                    worksheet.Cell(currentRow, 9).Value = fund_for;
                                    worksheet.Cell(currentRow, 10).Value = data_excel[i].department_name;
                                    worksheet.Cell(currentRow, 11).Value = scheme_name;
                                    worksheet.Cell(currentRow, 12).Value = data_excel[i].total_crop_area;
                                    worksheet.Cell(currentRow, 13).Value = data_excel[i].area_proposed;
                                    worksheet.Cell(currentRow, 14).Value = data_excel[i].approx_est_cost;
                                    worksheet.Cell(currentRow, 15).Value = data_excel[i].total_water_demand;
                                    worksheet.Cell(currentRow, 16).Value = data_excel[i].total_reduction_gw;
                                    worksheet.Cell(currentRow, 17).Value = data_excel[i].year_subsidey_phase1;
                                    worksheet.Cell(currentRow, 18).Value = data_excel[i].departmentname_phase1;
                                    worksheet.Cell(currentRow, 19).Value = data_excel[i].schemename_phase1;
                                    worksheet.Cell(currentRow, 20).Value = other_scheme;
                                    worksheet.Cell(currentRow, 21).Value = data_excel[i].area_covered_phase1;
                                    worksheet.Cell(currentRow, 22).Value = data_excel[i].total_beneficery_phase1;
                                    worksheet.Cell(currentRow, 23).Value = data_excel[i].expenditure_phase1;
                                    worksheet.Cell(currentRow, 24).Value = data_excel[i].remark_phase1;
                                    worksheet.Cell(currentRow, 25).Value = "";
                                    worksheet.Cell(currentRow, 26).Value = "";
                                    worksheet.Cell(currentRow, 27).Value = "";

                                }
                            }
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

                    }

                    using (var stream = new MemoryStream())
                    {
                        workbook.SaveAs(stream);
                        var content = stream.ToArray();

                        var exeState = state1;
                        var exeDist = district1;
                        var exeBlock = block01;
                        var exeGram = gp1;
                        var xls = "csv";

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



                        var aa = "DLI-3_Excel_Demand Side_Phase1" + '-' + exeState + exeDist + exeBlock + exeGram + '.' + xls;
                        return File(
                            content,
                            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                            aa);
                    }
                }
            }
            catch (Exception Ex)
            {
                return Json(Ex.Message, JsonRequestBehavior.AllowGet);
            }
        }

        public ActionResult demandside_excel_phase2(string state1, string district1, string block01, string gp1, string year1, string demand_va)
        {
            try
            {
                var State = state1;
                var Dist = district1;
                var Block = block01;
                var Gram = gp1;
                var Year = year1;

                List<vw_dli3_phase2_lop_24> data_excel = new List<vw_dli3_phase2_lop_24>();

                if (demand_va != "0" && demand_va != "All")
                {
                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null && demand_va != "0" && demand_va != "" && demand_va != null)
                    {
                        data_excel = ABE.obj_vw_dli3_phase2_lop_24.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.financial_year == Year && x.fund_for == demand_va).OrderBy(c => c.fund_details_id).ToList();
                        //data_excel = aa.OrderBy(z => z.entry_time_phase2).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && demand_va != "0" && demand_va != "" && demand_va != null)
                    {
                        data_excel = ABE.obj_vw_dli3_phase2_lop_24.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.fund_for == demand_va).OrderBy(c => c.fund_details_id).ToList();
                        //data_excel = aa.OrderBy(z => z.entry_time_phase2).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Year != "0" && Year != "" && Year != null && demand_va != "0" && demand_va != "" && demand_va != null)
                    {
                        data_excel = ABE.obj_vw_dli3_phase2_lop_24.Where(x => x.state == State && x.district == Dist && x.block == Block && x.financial_year == Year && x.fund_for == demand_va).OrderBy(c => c.fund_details_id).ToList();
                        //data_excel = aa.OrderBy(z => z.entry_time_phase2).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && demand_va != "0" && demand_va != "" && demand_va != null)
                    {
                        data_excel = ABE.obj_vw_dli3_phase2_lop_24.Where(x => x.state == State && x.district == Dist && x.block == Block && x.fund_for == demand_va).OrderBy(c => c.fund_details_id).ToList();
                        //data_excel = aa.OrderBy(z => z.entry_time_phase2).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null && demand_va != "0" && demand_va != "" && demand_va != null)
                    {
                        data_excel = ABE.obj_vw_dli3_phase2_lop_24.Where(x => x.state == State && x.district == Dist && x.financial_year == Year && x.fund_for == demand_va).OrderBy(c => c.fund_details_id).ToList();
                        //data_excel = aa.OrderBy(z => z.entry_time_phase2).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && demand_va != "0" && demand_va != "" && demand_va != null)
                    {
                        data_excel = ABE.obj_vw_dli3_phase2_lop_24.Where(x => x.state == State && x.district == Dist && x.fund_for == demand_va).OrderBy(c => c.fund_details_id).ToList();
                        //data_excel = aa.OrderBy(z => z.entry_time_phase2).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null && demand_va != "0" && demand_va != "" && demand_va != null)
                    {
                        data_excel = ABE.obj_vw_dli3_phase2_lop_24.Where(x => x.state == State && x.financial_year == Year && x.fund_for == demand_va).OrderBy(c => c.fund_details_id).ToList();
                        //data_excel = aa.OrderBy(z => z.entry_time_phase2).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && demand_va != "0" && demand_va != "" && demand_va != null)
                    {
                        data_excel = ABE.obj_vw_dli3_phase2_lop_24.Where(x => x.state == State && x.fund_for == demand_va).OrderBy(c => c.fund_details_id).ToList();
                        //data_excel = aa.OrderBy(z => z.entry_time_phase2).ToList();
                    }
                }
                else if (demand_va == "All")
                {
                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null)
                    {
                        data_excel = ABE.obj_vw_dli3_phase2_lop_24.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.financial_year == Year).OrderBy(c => c.fund_details_id).ToList();
                        //data_excel = aa.OrderBy(z => z.entry_time_phase2).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        data_excel = ABE.obj_vw_dli3_phase2_lop_24.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram).OrderBy(c => c.fund_details_id).ToList();
                        // data_excel = aa.OrderBy(z => z.entry_time_phase2).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Year != "0" && Year != "" && Year != null)
                    {
                        data_excel = ABE.obj_vw_dli3_phase2_lop_24.Where(x => x.state == State && x.district == Dist && x.block == Block && x.financial_year == Year).OrderBy(c => c.fund_details_id).ToList();
                        //data_excel = aa.OrderBy(z => z.entry_time_phase2).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        data_excel = ABE.obj_vw_dli3_phase2_lop_24.Where(x => x.state == State && x.district == Dist && x.block == Block).OrderBy(c => c.fund_details_id).ToList();
                        //data_excel = aa.OrderBy(z => z.entry_time_phase2).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null)
                    {
                        data_excel = ABE.obj_vw_dli3_phase2_lop_24.Where(x => x.state == State && x.district == Dist && x.financial_year == Year).OrderBy(c => c.fund_details_id).ToList();
                        //data_excel = aa.OrderBy(z => z.entry_time_phase2).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        data_excel = ABE.obj_vw_dli3_phase2_lop_24.Where(x => x.state == State && x.district == Dist).OrderBy(c => c.fund_details_id).ToList();
                        //data_excel = aa.OrderBy(z => z.entry_time_phase2).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null)
                    {
                        data_excel = ABE.obj_vw_dli3_phase2_lop_24.Where(x => x.state == State && x.financial_year == Year).OrderBy(c => c.fund_details_id).ToList();
                        //data_excel = aa.OrderBy(z => z.entry_time_phase2).ToList();
                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        data_excel = ABE.obj_vw_dli3_phase2_lop_24.Where(x => x.state == State).OrderBy(c => c.fund_details_id).OrderBy(z => z.entry_phase2).ToList();
                        //data_excel = aa.OrderBy(z => z.entry_time_phase2).ToList();
                    }
                }
                else
                {
                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null)
                    {
                        data_excel = ABE.obj_vw_dli3_phase2_lop_24.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.financial_year == Year).OrderBy(c => c.fund_details_id).ToList();
                        //data_excel = aa.OrderBy(z => z.entry_time_phase2).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        data_excel = ABE.obj_vw_dli3_phase2_lop_24.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram).OrderBy(c => c.fund_details_id).ToList();
                        //data_excel = aa.OrderBy(z => z.entry_time_phase2).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Year != "0" && Year != "" && Year != null)
                    {
                        data_excel = ABE.obj_vw_dli3_phase2_lop_24.Where(x => x.state == State && x.district == Dist && x.block == Block && x.financial_year == Year).OrderBy(c => c.fund_details_id).ToList();
                        //data_excel = aa.OrderBy(z => z.entry_time_phase2).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        data_excel = ABE.obj_vw_dli3_phase2_lop_24.Where(x => x.state == State && x.district == Dist && x.block == Block).OrderBy(c => c.fund_details_id).ToList();
                        // data_excel = aa.OrderBy(z => z.entry_time_phase2).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null)
                    {
                        var aa = ABE.obj_vw_dli3_phase2_lop_24.Where(x => x.state == State && x.district == Dist && x.financial_year == Year).OrderBy(c => c.fund_details_id).ToList();
                        data_excel = aa.OrderBy(z => z.entry_time_phase2).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        data_excel = ABE.obj_vw_dli3_phase2_lop_24.Where(x => x.state == State && x.district == Dist).OrderBy(c => c.fund_details_id).ToList();
                        // data_excel = aa.OrderBy(z => z.entry_time_phase2).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null)
                    {
                        data_excel = ABE.obj_vw_dli3_phase2_lop_24.Where(x => x.state == State && x.financial_year == Year).OrderBy(c => c.fund_details_id).ToList();
                        //data_excel = aa.OrderBy(z => z.entry_time_phase2).ToList();
                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        data_excel = ABE.obj_vw_dli3_phase2_lop_24.Where(x => x.state == State).OrderBy(c => c.fund_details_id).ToList();
                        // data_excel = aa.OrderBy(z => z.entry_time_phase2).ToList();
                    }
                }

                using (var workbook = new XLWorkbook())
                {

                    var worksheet = workbook.Worksheets.Add("Demand Side LOP1 and Phase2");
                    var currentRow = 1;
                    worksheet.Cell(currentRow, 1).Value = "Data From WSP";
                    worksheet.Range(currentRow, 2, currentRow, 7).Merge();
                    worksheet.Cell(currentRow, 2).Value = "GP Information";
                    worksheet.Cell(currentRow + 1, 2).Value = "State";
                    worksheet.Cell(currentRow + 1, 3).Value = "District";
                    worksheet.Cell(currentRow + 1, 4).Value = "Block";
                    worksheet.Cell(currentRow + 1, 5).Value = "Grampanchayat";
                    worksheet.Cell(currentRow + 1, 6).Value = "GP Center Point (Latitude)";
                    worksheet.Cell(currentRow + 1, 7).Value = "GP Center Point (Longitude)";


                    worksheet.Range(currentRow, 8, currentRow, 16).Merge();
                    worksheet.Cell(currentRow, 8).Value = "Demand Side Proposed Under WSP";
                    worksheet.Cell(currentRow + 1, 8).Value = "Financial Year";
                    worksheet.Cell(currentRow + 1, 9).Value = "Demand Side Interventions";

                    worksheet.Cell(currentRow + 1, 10).Value = "Department Name";
                    worksheet.Cell(currentRow + 1, 11).Value = "Scheme Name / Possible Funding Source";
                    worksheet.Cell(currentRow + 1, 12).Value = "Total Area Under Conventional Irrigation (ha)";
                    worksheet.Cell(currentRow + 1, 13).Value = "Area Proposed Under Intervention (ha)";
                    worksheet.Cell(currentRow + 1, 14).Value = "Approximate Estimated Cost (in lakh)";
                    worksheet.Cell(currentRow + 1, 15).Value = "Total water demand (ha)";
                    worksheet.Cell(currentRow + 1, 16).Value = "Reduction in water demand (ha m)";

                    worksheet.Range(currentRow, 17, currentRow, 27).Merge();
                    worksheet.Cell(currentRow, 17).Value = "Convergence Expenditure Claim Other than Atal Bhujal Yojana Share (Phase 1 [April 2024-September 2024])";

                    worksheet.Cell(currentRow + 1, 17).Value = "Year Of Subsidy Disbursement(Phase 1)";
                    worksheet.Cell(currentRow + 1, 18).Value = "Department Name(Phase 1)";
                    worksheet.Cell(currentRow + 1, 19).Value = "Scheme Name(Phase 1)";
                    worksheet.Cell(currentRow + 1, 20).Value = "Other Scheme Name(Phase 1)";
                    worksheet.Cell(currentRow + 1, 21).Value = "Area Covered (in ha)(Phase 1)";
                    worksheet.Cell(currentRow + 1, 22).Value = "Total Number of Beneficiary(Phase 1)";
                    worksheet.Cell(currentRow + 1, 23).Value = "Expenditure incurred other than Atal Jal (in lakh)(Phase 1)";
                    worksheet.Cell(currentRow + 1, 24).Value = "Remark, if any(Phase 1)";
                    worksheet.Cell(currentRow + 1, 25).Value = "Status(Phase 1)";
                    worksheet.Cell(currentRow + 1, 26).Value = "Reject Remark(Phase 1)";
                    worksheet.Cell(currentRow + 1, 27).Value = "Phase(Phase 1)";

                    worksheet.Range(currentRow, 28, currentRow, 35).Merge();
                    worksheet.Cell(currentRow, 28).Value = "Convergence Expenditure Claim Other than Atal Bhujal Yojana Share (Left Over Phase 1[April 2024-September 2024])";

                    worksheet.Cell(currentRow + 1, 28).Value = "Year Of Subsidy Disbursement(Left Over Phase 1)";
                    worksheet.Cell(currentRow + 1, 29).Value = "Department Name(Left Over Phase 1)";
                    worksheet.Cell(currentRow + 1, 30).Value = "Scheme Name(Left Over Phase 1)";
                    worksheet.Cell(currentRow + 1, 31).Value = "Other Scheme Name(Left Over Phase 1)";
                    worksheet.Cell(currentRow + 1, 32).Value = "Area Covered (in ha)(Left Over Phase 1)";
                    worksheet.Cell(currentRow + 1, 33).Value = "Total Number of Beneficiary(Left Over Phase 1)";
                    worksheet.Cell(currentRow + 1, 34).Value = "Expenditure incurred other than Atal Jal (in lakh)(Left Over Phase 1)";
                    worksheet.Cell(currentRow + 1, 35).Value = "Remark, if any(Left Over Phase 1)";

                    worksheet.Range(currentRow, 36, currentRow, 47).Merge();
                    worksheet.Cell(currentRow, 36).Value = "Convergence Expenditure Claim Other than Atal Bhujal Yojana Share (Phase 2 [October 2024 - March 2025])";

                    worksheet.Cell(currentRow + 1, 36).Value = "Year Of Subsidy Disbursement(Phase 2)";
                    worksheet.Cell(currentRow + 1, 37).Value = "Department Name(Phase 2)";
                    worksheet.Cell(currentRow + 1, 38).Value = "Scheme Name(Phase 2)";
                    worksheet.Cell(currentRow + 1, 39).Value = "Other Scheme Name(Phase 2)";
                    worksheet.Cell(currentRow + 1, 40).Value = "Area Covered (in ha)(Phase 2)";
                    worksheet.Cell(currentRow + 1, 41).Value = "Total Number of Beneficiary(Phase 2)";
                    worksheet.Cell(currentRow + 1, 42).Value = "Expenditure incurred other than Atal Jal (in lakh)(Phase 2)";
                    worksheet.Cell(currentRow + 1, 43).Value = "Remark, if any(Phase 2)";
                    worksheet.Cell(currentRow + 1, 44).Value = "Status(Left Over Phase 1 + Phase 2)";
                    worksheet.Cell(currentRow + 1, 45).Value = "Reject Remark(Left Over Phase 1 +Phase 2)";
                    worksheet.Cell(currentRow + 1, 46).Value = "Phase";
                    worksheet.Cell(currentRow + 1, 47).Value = "Add New";

                    for (int col = 1; col <= 47; col++)
                    {
                        worksheet.Cell(currentRow, col).Style.Font.Bold = true;
                        worksheet.Cell(currentRow, col).Style.Alignment.Horizontal = XLAlignmentHorizontalValues.Center;
                    }
                    for (int col = 2; col <= 47; col++)
                    {
                        worksheet.Cell(currentRow + 1, col).Style.Font.Bold = true;
                        worksheet.Cell(currentRow, col).Style.Alignment.Horizontal = XLAlignmentHorizontalValues.Center;
                    }

                    currentRow = 2;


                    if (data_excel.Count != 0)
                    {
                        for (int i = 0; i < data_excel.Count; i++)
                        {
                            var scheme_name = data_excel[i].scheme_name;
                            if (scheme_name == "Other")
                            {
                                var other = data_excel[i].other_scheme;
                                var abc = scheme_name + " - " + other;
                                scheme_name = abc;
                            }
                            var fund_for = data_excel[i].fund_for;
                            if (fund_for == "Other Measures")
                            {
                                var other = data_excel[i].innovative_measures;
                                var abc = fund_for + " - " + other;
                                fund_for = abc;
                            }
                            var other_scheme = data_excel[i].otherschemename_phase1;
                            if (other_scheme == null)
                            {
                                other_scheme = "";
                            }
                            var other_scheme2 = data_excel[i].otherschemename_phase2;
                            if (other_scheme2 == null)
                            {
                                other_scheme2 = "";
                            }
                            var lop1other_scheme2 = data_excel[i].lop1otherschemename_phase2;
                            if (lop1other_scheme2 == null)
                            {
                                lop1other_scheme2 = "";
                            }
                            var Phase1 = data_excel[i].total_beneficery_phase1;
                            if (Phase1 == null || Phase1 == "")
                            {
                                Phase1 = "";
                            }
                            else
                            {
                                Phase1 = "Phase1";
                            }
                            var Phase2 = data_excel[i].total_beneficery_phase2;
                            var lopPhase2 = data_excel[i].lop1total_beneficery_phase2;
                            if (lopPhase2 == null || lopPhase2 == "")
                            {
                                if (Phase2 == null || Phase2 == "")
                                {
                                    Phase2 = "";
                                }
                                else
                                {
                                    Phase2 = "Phase 2";
                                }
                            }
                            else if (Phase2 == null || Phase2 == "")
                            {
                                if (lopPhase2 == null || lopPhase2 == "")
                                {
                                    Phase2 = "";
                                }
                                else
                                {
                                    Phase2 = "Phase2";
                                }


                            }
                            else
                            {
                                Phase2 = "Phase2";
                            }

                            var phase1_2 = "";
                            var LOP1startdate = data_excel[i].lop1year_subsidey_phase2;
                            var P2startdate = data_excel[i].year_subsidey_phase2;
                            if (LOP1startdate == null || LOP1startdate == "")
                            {
                                if (P2startdate == null || P2startdate == "")
                                {
                                    phase1_2 = "";
                                }
                                else
                                {
                                    phase1_2 = "Phase 2";
                                }


                            }
                            else if (P2startdate == null || P2startdate == "")
                            {
                                if (LOP1startdate == null || LOP1startdate == "")
                                {
                                    phase1_2 = "";
                                }
                                else
                                {
                                    phase1_2 = "Left Over Phase 1";
                                }


                            }
                            else
                            {
                                phase1_2 = "Left Over Phase 1 and Phase 2";
                            }

                            var addphase1_2 = "";
                            var addLOP1startdate = data_excel[i].lop1year_subsidey_phase2;
                            var addP2startdate = data_excel[i].year_subsidey_phase2;
                            var addentry_phase2 = data_excel[i].entry_phase2;
                            if (addentry_phase2 == "phase2_new")
                            {
                                if (addLOP1startdate == null || addLOP1startdate == "")
                                {
                                    if (addP2startdate == null || addP2startdate == "")
                                    {
                                        addphase1_2 = "";
                                    }
                                    else
                                    {
                                        addphase1_2 = "Add New Phase 2";
                                    }


                                }
                                else if (addP2startdate == null || addP2startdate == "")
                                {
                                    if (addLOP1startdate == null || addLOP1startdate == "")
                                    {
                                        addphase1_2 = "";
                                    }
                                    else
                                    {
                                        addphase1_2 = "Add New Left Over Phase 1";
                                    }


                                }
                                else
                                {
                                    addphase1_2 = "Add New Left Over Phase 1 and Phase 2";
                                }
                            }




                            var lop1departmentname_phase2 = data_excel[i].lop1departmentname_phase2;
                            if (lop1departmentname_phase2 == "0")
                            {
                                lop1departmentname_phase2 = "";
                            }
                            var lop1schemename_phase2 = data_excel[i].lop1schemename_phase2;
                            if (lop1schemename_phase2 == "0")
                            {
                                lop1schemename_phase2 = "";
                            }
                            var departmentname_phase2 = data_excel[i].departmentname_phase2;
                            if (departmentname_phase2 == "0")
                            {
                                departmentname_phase2 = "";
                            }
                            var schemename_phase2 = data_excel[i].schemename_phase2;
                            if (schemename_phase2 == "0")
                            {
                                schemename_phase2 = "";
                            }

                            var approve_phase = data_excel[i].approve_phase1;
                            if (Phase1 == null || Phase1 == "")
                            {
                                approve_phase = "";

                            }
                            else
                            {
                                if (approve_phase == null || approve_phase == "")
                                {

                                    approve_phase = "At DPMU";
                                }
                            }

                            var approve_phase2 = data_excel[i].approve_phase2;
                            if (Phase2 == null || Phase2 == "")
                            {
                                approve_phase2 = "";

                            }
                            else
                            {
                                if (approve_phase2 == null || approve_phase2 == "")

                                {
                                    approve_phase2 = "At DPMU";
                                }

                            }



                            currentRow++;
                            worksheet.Cell(currentRow, 1).Value = data_excel[i].from_table;
                            worksheet.Cell(currentRow, 2).Value = data_excel[i].state;
                            worksheet.Cell(currentRow, 3).Value = data_excel[i].district;
                            worksheet.Cell(currentRow, 4).Value = data_excel[i].block;
                            worksheet.Cell(currentRow, 5).Value = data_excel[i].gp;
                            worksheet.Cell(currentRow, 6).Value = data_excel[i].latitude;
                            worksheet.Cell(currentRow, 7).Value = data_excel[i].longitude;
                            worksheet.Cell(currentRow, 8).Value = data_excel[i].financial_year;
                            worksheet.Cell(currentRow, 9).Value = fund_for;
                            worksheet.Cell(currentRow, 10).Value = data_excel[i].department_name;
                            worksheet.Cell(currentRow, 11).Value = scheme_name;
                            worksheet.Cell(currentRow, 12).Value = data_excel[i].total_crop_area;
                            worksheet.Cell(currentRow, 13).Value = data_excel[i].area_proposed;
                            worksheet.Cell(currentRow, 14).Value = data_excel[i].approx_est_cost;
                            worksheet.Cell(currentRow, 15).Value = data_excel[i].total_water_demand;
                            worksheet.Cell(currentRow, 16).Value = data_excel[i].total_reduction_gw;

                            worksheet.Cell(currentRow, 17).Value = data_excel[i].year_subsidey_phase1;
                            worksheet.Cell(currentRow, 18).Value = data_excel[i].departmentname_phase1;
                            worksheet.Cell(currentRow, 19).Value = data_excel[i].schemename_phase1;
                            worksheet.Cell(currentRow, 20).Value = other_scheme;
                            worksheet.Cell(currentRow, 21).Value = data_excel[i].area_covered_phase1;
                            worksheet.Cell(currentRow, 22).Value = data_excel[i].total_beneficery_phase1;
                            worksheet.Cell(currentRow, 23).Value = data_excel[i].expenditure_phase1;
                            worksheet.Cell(currentRow, 24).Value = data_excel[i].remark_phase1;
                            worksheet.Cell(currentRow, 25).Value = approve_phase;

                            worksheet.Cell(currentRow, 26).Value = data_excel[i].rejectremark_phase1;
                            worksheet.Cell(currentRow, 27).Value = Phase1;

                            worksheet.Cell(currentRow, 28).Value = data_excel[i].lop1year_subsidey_phase2;
                            worksheet.Cell(currentRow, 29).Value = lop1departmentname_phase2;
                            worksheet.Cell(currentRow, 30).Value = lop1schemename_phase2;
                            worksheet.Cell(currentRow, 31).Value = lop1other_scheme2;
                            worksheet.Cell(currentRow, 32).Value = data_excel[i].lop1area_covered_phase2;
                            worksheet.Cell(currentRow, 33).Value = data_excel[i].lop1total_beneficery_phase2;
                            worksheet.Cell(currentRow, 34).Value = data_excel[i].lop1expenditure_phase2;
                            worksheet.Cell(currentRow, 35).Value = data_excel[i].lop1remark_phase2;

                            worksheet.Cell(currentRow, 36).Value = data_excel[i].year_subsidey_phase2;
                            worksheet.Cell(currentRow, 37).Value = departmentname_phase2;
                            worksheet.Cell(currentRow, 38).Value = schemename_phase2;
                            worksheet.Cell(currentRow, 39).Value = other_scheme2;
                            worksheet.Cell(currentRow, 40).Value = data_excel[i].area_covered_phase2;
                            worksheet.Cell(currentRow, 41).Value = data_excel[i].total_beneficery_phase2;
                            worksheet.Cell(currentRow, 42).Value = data_excel[i].expenditure_phase2;
                            worksheet.Cell(currentRow, 43).Value = data_excel[i].remark_phase2;
                            worksheet.Cell(currentRow, 44).Value = approve_phase2;
                            worksheet.Cell(currentRow, 45).Value = data_excel[i].rejectremark_phase2;
                            worksheet.Cell(currentRow, 46).Value = phase1_2;
                            worksheet.Cell(currentRow, 47).Value = addphase1_2;

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
                    }



                    using (var stream = new MemoryStream())
                    {
                        workbook.SaveAs(stream);
                        var content = stream.ToArray();
                        var exeState = state1;
                        var exeDist = district1;
                        var exeBlock = block01;
                        var exeGram = gp1;
                        var xls = "csv";

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



                        var aa = "DLI-3_Excel_Demand Side_Phase2" + '-' + exeState + exeDist + exeBlock + exeGram + '.' + xls;
                        return File(
                            content,
                            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                            aa);
                    }
                }
            }
            catch (Exception Ex)
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult p2demand_statereport()
        {
            var Year = "";
            var Month = "";
            if (Session["year"] != null)
            {
                Year = Session["year"].ToString();
            }
            else
            {
                Year = "0";
            }
            if (Session["month"] != null)
            {
                Month = Session["month"].ToString();
            }
            else
            {

                Month = "0";
            }

            try
            {
                string[] states = { "Gujarat_24", "Haryana_6", "Karnataka_29", "Madhya Pradesh_23", "Maharashtra_27", "Rajasthan_8", "Uttar Pradesh_9" };
                int[] gpsCount = { 1873, 1647, 1199, 670, 1133, 1132, 549 };
                List<vw_dli3_lop_phase2_demand_report_24> allData = new List<vw_dli3_lop_phase2_demand_report_24>();

                for (int i = 0; i < states.Length; i++)
                {
                    string currentState = states[i]; // Assign to variable
                    int currentGpsCount = gpsCount[i]; // Assign to variable

                    var data = new vw_dli3_lop_phase2_demand_report_24
                    {

                    };

                    List<vw_dli3_lop_phase2_demand_report_24> ddetails;

                    if (Year != "0")
                    {
                        ddetails = ABE.obj_vw_dli3_lop_phase2_demand_report_24.Where(x => x.year == Year && x.state == currentState).ToList();
                    }
                    else
                    {
                        ddetails = ABE.obj_vw_dli3_lop_phase2_demand_report_24.Where(x => x.state == currentState).ToList();
                    }

                    int ataljal_gp = 0;
                    int gp_wsp_submitted = 0;
                    double lop_conv_claim = 0;
                    double lop_total_beneficiary = 0;
                    double phase2_conv_claim = 0;
                    double phase2_total_beneficiary = 0;
                    int gp_claim_lop_phase2 = 0;
                    double total_conv_claim = 0;
                    double dpmu_conv_claim = 0;
                    double spmu_submit_claim = 0;
                    double approved_claim = 0;
                    double rejected_claim = 0;

                    foreach (var item in ddetails)
                    {
                        ataljal_gp += item.ataljal_gp;
                        gp_wsp_submitted += item.gp_wsp_submitted;
                        lop_conv_claim += item.lop_conv_claim;
                        lop_total_beneficiary += item.lop_total_beneficiary;
                        phase2_conv_claim += item.phase2_conv_claim;
                        phase2_total_beneficiary += item.phase2_total_beneficiary;
                        gp_claim_lop_phase2 += item.gp_claim_lop_phase2;
                        total_conv_claim += item.total_conv_claim;
                        dpmu_conv_claim += item.dpmu_conv_claim;
                        spmu_submit_claim += item.spmu_submit_claim;
                        approved_claim += item.approved_claim;
                        rejected_claim += item.rejected_claim;

                    }
                    data.state = currentState;
                    data.ataljal_gp = ataljal_gp;
                    data.gp_wsp_submitted = gp_wsp_submitted;
                    data.lop_conv_claim = lop_conv_claim;
                    data.lop_total_beneficiary = lop_total_beneficiary;
                    data.phase2_conv_claim = phase2_conv_claim;
                    data.phase2_total_beneficiary = phase2_total_beneficiary;
                    data.gp_claim_lop_phase2 = gp_claim_lop_phase2;
                    data.total_conv_claim = total_conv_claim;
                    data.dpmu_conv_claim = dpmu_conv_claim;
                    data.spmu_submit_claim = spmu_submit_claim;
                    data.approved_claim = approved_claim;
                    data.rejected_claim = rejected_claim;

                    allData.Add(data);
                }

                var jsonResult = Json(allData, JsonRequestBehavior.AllowGet);
                jsonResult.MaxJsonLength = int.MaxValue;
                return jsonResult;
            }
            catch (Exception ex)
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }

        }

        [HttpPost]
        public ActionResult p2demand_report_district()
        {
            var Year = "";
            var State = "";
            if (Session["gstate"] != null)
            {
                State = Session["gstate"].ToString();
            }
            else
            {
                State = "0";
            }
            if (Session["year"] != null)
            {
                Year = Session["year"].ToString();
            }
            else
            {
                Year = "0";
            }
            try
            {
                var dist = ABE.obj_master_list_gp_wsp.Where(x => x.state_name == State).Distinct().GroupBy(x => x.district_name).ToList();

                List<vw_dli3_lop_phase2_demand_report_24> all_data = new List<vw_dli3_lop_phase2_demand_report_24>();
                List<vw_dli3_lop_phase2_demand_report_24> ddetails = new List<vw_dli3_lop_phase2_demand_report_24>();

                if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null)
                {
                    ddetails = ABE.obj_vw_dli3_lop_phase2_demand_report_24.Where(x => x.state == State && x.year == Year).OrderByDescending(x => x.id).ToList();
                }
                else if (State != "0" && State != "" && State != null)
                {
                    ddetails = ABE.obj_vw_dli3_lop_phase2_demand_report_24.Where(x => x.state == State).OrderByDescending(x => x.id).ToList();
                }
                foreach (var itemdist in dist)
                {
                    vw_dli3_lop_phase2_demand_report_24 data = new vw_dli3_lop_phase2_demand_report_24();
                    string district = itemdist.Key;
                    var dddd = ddetails.Where(x => x.district == district).ToList();

                    int ataljal_gp = 0;
                    int gp_wsp_submitted = 0;
                    double lop_conv_claim = 0;
                    double lop_total_beneficiary = 0;
                    double phase2_conv_claim = 0;
                    double phase2_total_beneficiary = 0;
                    int gp_claim_lop_phase2 = 0;
                    double total_conv_claim = 0;
                    double dpmu_conv_claim = 0;
                    double spmu_submit_claim = 0;
                    double approved_claim = 0;
                    double rejected_claim = 0;

                    foreach (var item in dddd)
                    {
                        ataljal_gp += item.ataljal_gp;
                        gp_wsp_submitted += item.gp_wsp_submitted;
                        lop_conv_claim += item.lop_conv_claim;
                        lop_total_beneficiary += item.lop_total_beneficiary;
                        phase2_conv_claim += item.phase2_conv_claim;
                        phase2_total_beneficiary += item.phase2_total_beneficiary;
                        gp_claim_lop_phase2 += item.gp_claim_lop_phase2;
                        total_conv_claim += item.total_conv_claim;
                        dpmu_conv_claim += item.dpmu_conv_claim;
                        spmu_submit_claim += item.spmu_submit_claim;
                        approved_claim += item.approved_claim;
                        rejected_claim += item.rejected_claim;

                    }
                    data.district = district;
                    data.ataljal_gp = ataljal_gp;
                    data.gp_wsp_submitted = gp_wsp_submitted;
                    data.lop_conv_claim = lop_conv_claim;
                    data.lop_total_beneficiary = lop_total_beneficiary;
                    data.phase2_conv_claim = phase2_conv_claim;
                    data.phase2_total_beneficiary = phase2_total_beneficiary;
                    data.gp_claim_lop_phase2 = gp_claim_lop_phase2;
                    data.total_conv_claim = total_conv_claim;
                    data.dpmu_conv_claim = dpmu_conv_claim;
                    data.spmu_submit_claim = spmu_submit_claim;
                    data.approved_claim = approved_claim;
                    data.rejected_claim = rejected_claim;

                    all_data.Add(data);
                }

                var jsonResult = Json(all_data, JsonRequestBehavior.AllowGet);
                jsonResult.MaxJsonLength = int.MaxValue;
                return jsonResult;

            }
            catch (Exception Ex)
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult p2demand_report_block()
        {
            var Year = "";
            var State = "";

            if (Session["gstate"] != null)
            {
                State = Session["gstate"].ToString();
            }
            else
            {
                State = "0";
            }

            if (Session["year"] != null)
            {
                Year = Session["year"].ToString();
            }
            else
            {
                Year = "0";
            }
            try
            {

                var dist = ABE.obj_master_list_gp_wsp.Where(x => x.state_name == State).Distinct().GroupBy(x => x.district_name).ToList();

                List<vw_dli3_lop_phase2_demand_report_24> all_data = new List<vw_dli3_lop_phase2_demand_report_24>();
                List<vw_dli3_lop_phase2_demand_report_24> ddetails = new List<vw_dli3_lop_phase2_demand_report_24>();

                if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null)
                {
                    ddetails = ABE.obj_vw_dli3_lop_phase2_demand_report_24.Where(x => x.state == State && x.year == Year).OrderByDescending(x => x.id).ToList();
                }
                else if (State != "0" && State != "" && State != null)
                {
                    ddetails = ABE.obj_vw_dli3_lop_phase2_demand_report_24.Where(x => x.state == State).OrderByDescending(x => x.id).ToList();
                }
                foreach (var itemdist in dist)
                {
                    string district = itemdist.Key;
                    var block = ABE.obj_master_list_gp_wsp.Where(x => x.district_name == district).Distinct().GroupBy(x => x.block_name).ToList();
                    foreach (var itemblock in block)
                    {
                        vw_dli3_lop_phase2_demand_report_24 data = new vw_dli3_lop_phase2_demand_report_24();
                        string blockname = itemblock.Key;
                        var dddd = ddetails.Where(x => x.block == blockname).ToList();

                        int ataljal_gp = 0;
                        int gp_wsp_submitted = 0;
                        double lop_conv_claim = 0;
                        double lop_total_beneficiary = 0;
                        double phase2_conv_claim = 0;
                        double phase2_total_beneficiary = 0;
                        int gp_claim_lop_phase2 = 0;
                        double total_conv_claim = 0;
                        double dpmu_conv_claim = 0;
                        double spmu_submit_claim = 0;
                        double approved_claim = 0;
                        double rejected_claim = 0;

                        foreach (var item in dddd)
                        {
                            ataljal_gp += item.ataljal_gp;
                            gp_wsp_submitted += item.gp_wsp_submitted;
                            lop_conv_claim += item.lop_conv_claim;
                            lop_total_beneficiary += item.lop_total_beneficiary;
                            phase2_conv_claim += item.phase2_conv_claim;
                            phase2_total_beneficiary += item.phase2_total_beneficiary;
                            gp_claim_lop_phase2 += item.gp_claim_lop_phase2;
                            total_conv_claim += item.total_conv_claim;
                            dpmu_conv_claim += item.dpmu_conv_claim;
                            spmu_submit_claim += item.spmu_submit_claim;
                            approved_claim += item.approved_claim;
                            rejected_claim += item.rejected_claim;

                        }
                        data.block = blockname;
                        data.district = district;
                        data.ataljal_gp = ataljal_gp;
                        data.gp_wsp_submitted = gp_wsp_submitted;
                        data.lop_conv_claim = lop_conv_claim;
                        data.lop_total_beneficiary = lop_total_beneficiary;
                        data.phase2_conv_claim = phase2_conv_claim;
                        data.phase2_total_beneficiary = phase2_total_beneficiary;
                        data.gp_claim_lop_phase2 = gp_claim_lop_phase2;
                        data.total_conv_claim = total_conv_claim;
                        data.dpmu_conv_claim = dpmu_conv_claim;
                        data.spmu_submit_claim = spmu_submit_claim;
                        data.approved_claim = approved_claim;
                        data.rejected_claim = rejected_claim;

                        all_data.Add(data);
                    }

                }
                var jsonResult = Json(all_data, JsonRequestBehavior.AllowGet);
                jsonResult.MaxJsonLength = int.MaxValue;
                return jsonResult;

            }
            catch (Exception Ex)
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }

        //excelcode end 

        //phase12 end

        //demand end

        //sample source start

        [HttpPost]
        public ActionResult Save_data(string state, string dist, string phase, string description, HttpPostedFileBase image)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    int k = 0;
                    var Data = new DLI3_upload_document_new_2025();
                    if (Data != null)
                    {


                        Data.state = state;
                        Data.district = dist;
                        Data.description = description;
                        Data.phase = phase;
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
                                    return Json("Please select valid file", JsonRequestBehavior.AllowGet);

                                }
                                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\DLI3\\2024_25\\" + dist + "\\");
                                if (!Directory.Exists(path))
                                {
                                    Directory.CreateDirectory(path);
                                }
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
                                Data.image_path = "/Ataljalimages/DLI3/2024_25/" + dist + "/" + FileName;

                            }
                        }

                        ABE.obj_abhy_DLI3_upload_document_new_2025.Add(Data);
                        ABE.SaveChanges();
                        return Json("Successfully Saved", JsonRequestBehavior.AllowGet);

                    }

                }
                catch (Exception ex)
                {
                    return Json("Logout", JsonRequestBehavior.AllowGet);

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult admittedclaimSave_data(string state, string fyear, string description, HttpPostedFileBase image)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    int k = 0;
                    var Data = new DLI3_admittedclaim();
                    if (Data != null)
                    {


                        Data.state = state;
                        Data.fyear = fyear;
                        Data.description = description;
                        Data.entry_date = DateTime.Now;
                        Data.user_id = Session["Officer"].ToString();
                        Data.email = Session["email"].ToString();
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
                                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\DLI3_admitted_claim\\2024_25\\" + state + "\\");
                                if (!Directory.Exists(path))
                                {
                                    Directory.CreateDirectory(path);
                                }
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
                                Data.image_path = "/Ataljalimages/DLI3_admitted_claim/2024_25" + state + "/" + FileName;

                            }
                        }

                        ABE.obj_DLI3_admittedclaim.Add(Data);
                        ABE.SaveChanges();
                        return Json("Successfully Saved", JsonRequestBehavior.AllowGet);

                    }

                }
                catch (Exception ex)
                {
                    return Json("Logout", JsonRequestBehavior.AllowGet);

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }
        [HttpPost]
        public ActionResult admitclaim_Data_upload_doc(string Data, string fyear)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<Pagenum>(Data);

                    var State = result.statename;


                    List<DLI3_admittedclaim> details = new List<DLI3_admittedclaim>();
                    if (State == "All" && fyear != "0" && fyear != "" && fyear != null)
                    {
                        details = ABE.obj_DLI3_admittedclaim.Where(x => x.fyear == fyear).OrderBy(x => x.state).ToList();//total list                      
                    }
                    else if (State == "All" && fyear == "0")
                    {
                        details = ABE.obj_DLI3_admittedclaim.OrderBy(x => x.state).ToList();//total list                      
                    }
                    else if (State != "0" && State != "" && State != null && fyear != "0" && fyear != "" && fyear != null)
                    {
                        details = ABE.obj_DLI3_admittedclaim.Where(x => x.state == State && x.fyear == fyear).OrderBy(x => x.state).ToList();//total list                      
                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        details = ABE.obj_DLI3_admittedclaim.Where(x => x.state == State).OrderBy(x => x.state).ToList();//total list                      
                    }
                    else
                    {
                        details = ABE.obj_DLI3_admittedclaim.OrderBy(x => x.state).ToList();//total list  
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
                    return Json("Logout", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);

            }
        }

        [HttpPost]
        public ActionResult Data_upload_doc(string Data, string phase)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<Pagenum>(Data);

                    var State = result.statename;
                    var Dist = result.districtname;

                    List<DLI3_upload_document_new_2025> details = new List<DLI3_upload_document_new_2025>();

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        details = ABE.obj_abhy_DLI3_upload_document_new_2025.Where(x => x.state == State && x.district == Dist && x.phase == phase).OrderByDescending(x => x.id).ToList();//total list                      
                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        details = ABE.obj_abhy_DLI3_upload_document_new_2025.Where(x => x.state == State && x.phase == phase).OrderByDescending(x => x.id).ToList();//total list                      
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
                    return Json("Logout", JsonRequestBehavior.AllowGet);
                }
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
                    var result = js.Deserialize<DLI3_upload_document_new_2025>(Data);

                    if (result.id != 0)
                    {
                        var TKID = Convert.ToInt32(result.id);
                        var Data1 = ABE.obj_abhy_DLI3_upload_document_new_2025.Where(x => x.id == TKID).SingleOrDefault();
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
                    return Json("Logout", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }

        }

        [HttpPost]
        public ActionResult admitedDelete_data_upload(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<DLI3_admittedclaim>(Data);

                    if (result.id != 0)
                    {
                        var TKID = Convert.ToInt32(result.id);
                        var Data1 = ABE.obj_DLI3_admittedclaim.Where(x => x.id == TKID).SingleOrDefault();
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
                    return Json("Logout", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }

        }
        [HttpPost]
        public ActionResult admittedUpdate_upload(string id, string state, string fyear, string description, HttpPostedFileBase image)
        {

            if (Session["UserId"] != null)
            {
                try
                {
                    int k = 0;
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_DLI3_admittedclaim.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {
                        Data.state = state;
                        Data.fyear = fyear;
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
                                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\DLI3_admitted_claim\\2024_25\\" + state + "\\");
                                if (!Directory.Exists(path))
                                {
                                    Directory.CreateDirectory(path);
                                }
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
                                Data.image_path = "/Ataljalimages/DLI3_admitted_claim/2024_25/" + state + "/" + FileName;

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
                    return Json("Logout", JsonRequestBehavior.AllowGet);

                }
                return Json("Invalid");
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
                    var Data = ABE.obj_abhy_DLI3_upload_document_new_2025.Where(x => x.id == ID).SingleOrDefault();
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
                                    return Json("Please select valid file", JsonRequestBehavior.AllowGet);

                                }
                                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\DLI3\\2024_25\\" + dist + "\\");
                                if (!Directory.Exists(path))
                                {
                                    Directory.CreateDirectory(path);
                                }
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
                                Data.image_path = "/Ataljalimages/DLI3/2024_25/" + dist + "/" + FileName;

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
                    return Json("Logout", JsonRequestBehavior.AllowGet);

                }
                return Json("Invalid");
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
                    var Data = ABE.obj_abhy_DLI3_upload_document_new_2025.Where(x => x.id == ID).SingleOrDefault();
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
                    var Data = ABE.obj_abhy_DLI3_upload_document_new_2025.Where(x => x.id == ID).SingleOrDefault();
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
                    var Data = ABE.obj_abhy_DLI3_upload_document_new_2025.Where(x => x.id == ID).SingleOrDefault();
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

        //sample source end

        //supply side start

        //phase1 start

        [HttpPost]
        public ActionResult Data_get_supply(string Data, string supply_val)
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
                    var supply_vall = supply_val;

                    List<dynamic> abc = new List<dynamic>();
                    List<supplyside_dli3_new2025> data = new List<supplyside_dli3_new2025>();
                    if (supply_val != "0" && supply_val != "All")
                    {
                        if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null && supply_val != "0" && supply_val != "" && supply_val != null)
                        {
                            var aa = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.financial_year == Year && x.type_of_supply_side_structure == supply_val).OrderBy(c => c.id).ToList();
                            data = aa.OrderBy(z => z.gp).ToList();
                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && supply_val != "0" && supply_val != "" && supply_val != null)
                        {
                            var aa = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.type_of_supply_side_structure == supply_val).OrderBy(c => c.id).ToList();
                            data = aa.OrderBy(z => z.gp).ToList();
                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Year != "0" && Year != "" && Year != null && supply_val != "0" && supply_val != "" && supply_val != null)
                        {
                            var aa = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.district == Dist && x.block == Block && x.financial_year == Year && x.type_of_supply_side_structure == supply_val).OrderBy(c => c.id).ToList();
                            data = aa.OrderBy(z => z.gp).ToList();
                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && supply_val != "0" && supply_val != "" && supply_val != null)
                        {
                            var aa = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.district == Dist && x.block == Block && x.type_of_supply_side_structure == supply_val).OrderBy(c => c.id).ToList();
                            data = aa.OrderBy(z => z.gp).ToList();
                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null && supply_val != "0" && supply_val != "" && supply_val != null)
                        {
                            var aa = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.district == Dist && x.financial_year == Year && x.type_of_supply_side_structure == supply_val).OrderBy(c => c.id).ToList();
                            data = aa.OrderBy(z => z.gp).ToList();
                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && supply_val != "0" && supply_val != "" && supply_val != null)
                        {
                            var aa = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.district == Dist && x.type_of_supply_side_structure == supply_val).OrderBy(c => c.id).ToList();
                            data = aa.OrderBy(z => z.gp).ToList();
                        }
                        else if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null && supply_val != "0" && supply_val != "" && supply_val != null)
                        {
                            var aa = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.financial_year == Year && x.type_of_supply_side_structure == supply_val).OrderBy(c => c.id).ToList();
                            data = aa.OrderBy(z => z.gp).ToList();
                        }
                        else if (State != "0" && State != "" && State != null && supply_val != "0" && supply_val != "" && supply_val != null)
                        {
                            var aa = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.type_of_supply_side_structure == supply_val).OrderBy(c => c.id).ToList();
                            data = aa.OrderBy(z => z.gp).ToList();
                        }
                    }
                    else if (supply_val == "All")
                    {
                        if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null)
                        {
                            var aa = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.financial_year == Year).OrderBy(c => c.id).ToList();
                            data = aa.OrderBy(z => z.gp).ToList();
                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                        {
                            var aa = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram).OrderBy(c => c.id).ToList();
                            data = aa.OrderBy(z => z.gp).ToList();
                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Year != "0" && Year != "" && Year != null)
                        {
                            var aa = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.district == Dist && x.block == Block && x.financial_year == Year).OrderBy(c => c.id).ToList();
                            data = aa.OrderBy(z => z.gp).ToList();
                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                        {
                            var aa = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.district == Dist && x.block == Block).OrderBy(c => c.id).ToList();
                            data = aa.OrderBy(z => z.gp).ToList();
                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null)
                        {
                            var aa = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.district == Dist && x.financial_year == Year).OrderBy(c => c.id).ToList();
                            data = aa.OrderBy(z => z.gp).ToList();
                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                        {
                            var aa = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.district == Dist).OrderBy(c => c.id).ToList();
                            data = aa.OrderBy(z => z.gp).ToList();
                        }
                        else if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null)
                        {
                            var aa = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.financial_year == Year).OrderBy(c => c.id).ToList();
                            data = aa.OrderBy(z => z.gp).ToList();
                        }
                        else if (State != "0" && State != "" && State != null)
                        {
                            var aa = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State).OrderBy(c => c.id).ToList();
                            data = aa.OrderBy(z => z.gp).ToList();
                        }
                    }
                    else
                    {
                        if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null)
                        {
                            var aa = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.financial_year == Year).OrderBy(c => c.id).ToList();
                            data = aa.OrderBy(z => z.gp).ToList();
                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                        {
                            var aa = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram).OrderBy(c => c.id).ToList();
                            data = aa.OrderBy(z => z.gp).ToList();
                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Year != "0" && Year != "" && Year != null)
                        {
                            var aa = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.district == Dist && x.block == Block && x.financial_year == Year).OrderBy(c => c.id).ToList();
                            data = aa.OrderBy(z => z.gp).ToList();
                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                        {
                            var aa = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.district == Dist && x.block == Block).OrderBy(c => c.id).ToList();
                            data = aa.OrderBy(z => z.gp).ToList();
                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null)
                        {
                            var aa = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.district == Dist && x.financial_year == Year).OrderBy(c => c.id).ToList();
                            data = aa.OrderBy(z => z.gp).ToList();
                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                        {
                            var aa = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.district == Dist).OrderBy(c => c.id).ToList();
                            data = aa.OrderBy(z => z.gp).ToList();
                        }
                        else if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null)
                        {
                            var aa = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.financial_year == Year).OrderBy(c => c.id).ToList();
                            data = aa.OrderBy(z => z.gp).ToList();
                        }
                        else if (State != "0" && State != "" && State != null)
                        {
                            var aa = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State).OrderBy(c => c.id).ToList();
                            data = aa.OrderBy(z => z.gp).ToList();
                        }
                    }

                    if (data != null)
                    {
                        var jsonresult = Json(data, JsonRequestBehavior.AllowGet);
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
                    return Json("Logout", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);

            }
        }

        [HttpPost]
        public ActionResult filldata_supplyside(int id)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    List<supplyside_dli3_new2025> all_data = new List<supplyside_dli3_new2025>();
                    if (id != 0)
                    {
                        int idd = Convert.ToInt32(id);
                        all_data = ABE.obj_supplyside_dli3_new2025.Where(x => x.id == idd).OrderBy(c => c.gp).ToList();


                        var jsonresult = Json(all_data, JsonRequestBehavior.AllowGet);
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
                    return Json("Logout", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);

            }
        }

        [HttpPost]
        public ActionResult insert_supplyside_phase1(string id, string year_subsidey_phase1, string work_start_date_phase1, string work_end_date_phase1, string type_of_work_phase1, string status_of_work_phase1, string latitude_phase1, string longitude_phase1, string department_name_phase1, string schema_name_phase1, string other_schema_name_phase1, string expenditure_phase1, string remark_phase1)
        {

            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_supplyside_dli3_new2025.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {
                        Data.year_subsidey_phase1 = year_subsidey_phase1;
                        Data.work_start_date_phase1 = work_start_date_phase1;
                        Data.work_end_date_phase1 = work_end_date_phase1;
                        Data.type_of_work_phase1 = type_of_work_phase1;
                        Data.status_of_work_phase1 = status_of_work_phase1;
                        Data.latitude_phase1 = latitude_phase1;
                        Data.longitude_phase1 = longitude_phase1;
                        Data.department_name_phase1 = department_name_phase1;
                        Data.schema_name_phase1 = schema_name_phase1;
                        Data.expenditure_phase1 = expenditure_phase1;
                        Data.remark_phase1 = remark_phase1;
                        if (other_schema_name_phase1 == null || other_schema_name_phase1 == "")
                        {
                            Data.other_schema_name_phase1 = "";
                        }
                        else
                        {
                            Data.other_schema_name_phase1 = other_schema_name_phase1;
                        }

                        Data.entry_phase1 = "phase1";
                        Data.entry_time_phase1 = DateTime.Now.ToString("dd-MM-yyyy hh:mm:ss:ms");

                        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = ABE.SaveChanges();
                        if (A > 0)
                        {
                            return Json("Successfully Saved");
                        }
                    }

                }
                catch (Exception ex)
                {
                    return Json("Logout", JsonRequestBehavior.AllowGet);

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult filldata_supplyside_wsp(int id)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    List<supplyside_dli3_new2025> data = new List<supplyside_dli3_new2025>();
                    if (id != 0)
                    {
                        int idd = Convert.ToInt32(id);
                        data = ABE.obj_supplyside_dli3_new2025.Where(x => x.id == idd).ToList();

                    }
                    if (data != null)
                    {
                        var jsonresult = Json(data, JsonRequestBehavior.AllowGet);
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
                    return Json("Logout", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);

            }
        }

        [HttpPost]
        public ActionResult filldata_supplyside_phase1(int id)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    List<supplyside_dli3_new2025> all_data = new List<supplyside_dli3_new2025>();
                    if (id != 0)
                    {
                        int idd = Convert.ToInt32(id);
                        all_data = ABE.obj_supplyside_dli3_new2025.Where(x => x.id == idd && x.entry_phase1 == "phase1").OrderBy(c => c.gp).ToList();

                        var jsonresult = Json(all_data, JsonRequestBehavior.AllowGet);
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
                    return Json("Logout", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);

            }
        }

        [HttpPost]
        public ActionResult delete_phase1_supplyside(int id)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_supplyside_dli3_new2025.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {
                        Data.year_subsidey_phase1 = "";
                        Data.work_start_date_phase1 = "";
                        Data.work_end_date_phase1 = "";
                        Data.type_of_work_phase1 = "";
                        Data.status_of_work_phase1 = "";
                        Data.latitude_phase1 = "";
                        Data.longitude_phase1 = "";
                        Data.department_name_phase1 = "";
                        Data.schema_name_phase1 = "";
                        Data.expenditure_phase1 = "";
                        Data.remark_phase1 = "";
                        Data.other_schema_name_phase1 = "";
                        Data.entry_phase1 = "";
                        Data.entry_time_phase1 = "";
                        Data.approve_phase1 = "";
                        Data.reject_phase1 = "";

                        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = ABE.SaveChanges();

                        if (A > 0)
                        {
                            return Json("Successfully Delete");
                        }
                    }

                }
                catch (Exception ex)
                {
                    return Json("Logout", JsonRequestBehavior.AllowGet);

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);

            }
        }

        [HttpPost]
        public ActionResult update_supplyside_phase1(string id, string work_start_date_phase1, string work_end_date_phase1, string type_of_work_phase1, string status_of_work_phase1, string latitude_phase1, string longitude_phase1, string department_name_phase1, string schema_name_phase1, string other_schema_name_phase1, string expenditure_phase1, string remark_phase1)
        {

            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_supplyside_dli3_new2025.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        Data.work_start_date_phase1 = work_start_date_phase1;
                        Data.work_end_date_phase1 = work_end_date_phase1;
                        Data.type_of_work_phase1 = type_of_work_phase1;
                        Data.status_of_work_phase1 = status_of_work_phase1;
                        Data.latitude_phase1 = latitude_phase1;
                        Data.longitude_phase1 = longitude_phase1;
                        Data.department_name_phase1 = department_name_phase1;
                        Data.schema_name_phase1 = schema_name_phase1;
                        Data.expenditure_phase1 = expenditure_phase1;
                        Data.remark_phase1 = remark_phase1;
                        if (other_schema_name_phase1 == null || other_schema_name_phase1 == "")
                        {
                            Data.other_schema_name_phase1 = "";
                        }
                        else
                        {
                            Data.other_schema_name_phase1 = other_schema_name_phase1;
                        }

                        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = ABE.SaveChanges();
                        if (A > 0)
                        {
                            return Json("Successfully Updated");
                        }
                    }

                }
                catch (Exception ex)
                {
                    return Json("Logout", JsonRequestBehavior.AllowGet);

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult suppysidephase1submittospmu(int id)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_supplyside_dli3_new2025.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        Data.approve_phase1 = "Submit to SPMU";
                        Data.reject_phase1 = "";

                        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = ABE.SaveChanges();

                        if (A > 0)
                        {
                            return Json("Successfully Submitted");
                        }
                    }
                }
                catch (Exception ex)
                {
                    return Json("Logout", JsonRequestBehavior.AllowGet);

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);

            }
        }
        [HttpPost]
        public ActionResult supplysidephase1approve(int id)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_supplyside_dli3_new2025.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        Data.approve_phase1 = "Approved";
                        Data.reject_phase1 = "";

                        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = ABE.SaveChanges();

                        if (A > 0)
                        {
                            return Json("Successfully Approved");
                        }
                    }
                }
                catch (Exception ex)
                {
                    return Json("Logout", JsonRequestBehavior.AllowGet);

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);

            }
        }

        [HttpPost]
        public ActionResult supplysidephase1reject(int id, string reject)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_supplyside_dli3_new2025.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        Data.approve_phase1 = "Rejected";
                        Data.reject_phase1 = reject;
                        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = ABE.SaveChanges();

                        if (A > 0)
                        {
                            return Json("Successfully Rejected");
                        }
                    }
                }
                catch (Exception ex)
                {
                    return Json("Logout", JsonRequestBehavior.AllowGet);

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);

            }
        }

        public ActionResult Mapview_supplysidePhase1(string id)
        {
            var ID = Convert.ToInt32(id);
            var Details = ABE.obj_supplyside_dli3_new2025.Where(x => x.id == ID).FirstOrDefault();
            if (Details != null)
            {
                var latitude = Details.latitude_phase1;
                var longitude = Details.longitude_phase1;
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
        public ActionResult supply_statereport()
        {
            var Year = "";
            var Month = "";
            if (Session["year"] != null)
            {
                Year = Session["year"].ToString();
            }
            else
            {
                Year = "0";
            }
            if (Session["month"] != null)
            {
                Month = Session["month"].ToString();
            }
            else
            {

                Month = "0";
            }

            try
            {
                string[] states = { "Gujarat_24", "Haryana_6", "Karnataka_29", "Madhya Pradesh_23", "Maharashtra_27", "Rajasthan_8", "Uttar Pradesh_9" };
                List<vw_dli3_supply_phase1_report_24_25> all_data = new List<vw_dli3_supply_phase1_report_24_25>();
                List<vw_dli3_supply_phase1_report_24_25> ddetails = new List<vw_dli3_supply_phase1_report_24_25>();

                foreach (var itemstate in states)
                {
                    string State = itemstate;

                    if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null)
                    {
                        ddetails = ABE.obj_vw_dli3_supply_phase1_report_24_25.Where(x => x.state == State && x.year == Year).OrderByDescending(x => x.id).ToList();
                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        ddetails = ABE.obj_vw_dli3_supply_phase1_report_24_25.Where(x => x.state == State).OrderByDescending(x => x.id).ToList();
                    }


                    vw_dli3_supply_phase1_report_24_25 data = new vw_dli3_supply_phase1_report_24_25();
                    int ataljal_gp = 0;
                    int gp_wsp_submitted = 0;
                    int gp_dli3_claim_entry = 0;
                    int structures_claimed = 0;
                    double total_cost = 0;
                    double dpmu_cost = 0;
                    double spmu_cost = 0;
                    double reject_cost = 0;
                    double approved_cost = 0;
                    int totalentry_gp = 0;
                    int dpmu_gp = 0;
                    int spmu_gp = 0;
                    int reject_gp = 0;
                    int approved_gp = 0;


                    foreach (var item in ddetails)
                    {
                        ataljal_gp += item.ataljal_gp;
                        gp_wsp_submitted += item.gp_wsp_submitted;
                        gp_dli3_claim_entry += item.gp_dli3_claim_entry;
                        structures_claimed += item.structures_claimed;
                        total_cost += item.total_cost;
                        dpmu_cost += item.dpmu_cost;
                        spmu_cost += item.spmu_cost;
                        reject_cost += item.reject_cost;
                        approved_cost += item.approved_cost;
                        totalentry_gp += item.totalentry_gp;
                        dpmu_gp += item.dpmu_gp;
                        spmu_gp += item.spmu_gp;
                        reject_gp += item.reject_gp;
                        approved_gp += item.approved_gp;

                    }
                    data.state = State;
                    data.ataljal_gp = ataljal_gp;
                    data.gp_wsp_submitted = gp_wsp_submitted;
                    data.gp_dli3_claim_entry = gp_dli3_claim_entry;
                    data.structures_claimed = structures_claimed;
                    data.total_cost = total_cost;
                    data.dpmu_cost = dpmu_cost;
                    data.spmu_cost = spmu_cost;
                    data.reject_cost = reject_cost;
                    data.approved_cost = approved_cost;
                    data.totalentry_gp = totalentry_gp;
                    data.dpmu_gp = dpmu_gp;
                    data.spmu_gp = spmu_gp;
                    data.reject_gp = reject_gp;
                    data.approved_gp = approved_gp;


                    all_data.Add(data);

                }

                var jsonResult = Json(all_data, JsonRequestBehavior.AllowGet);
                jsonResult.MaxJsonLength = int.MaxValue;
                return jsonResult;

            }
            catch (Exception Ex)
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult supply_report_district()
        {
            var Year = "";
            var State = "";
            if (Session["gstate"] != null)
            {
                State = Session["gstate"].ToString();
            }
            else
            {
                State = "0";
            }
            if (Session["year"] != null)
            {
                Year = Session["year"].ToString();
            }
            else
            {
                Year = "0";
            }
            try
            {
                var dist = ABE.obj_master_list_gp_wsp.Where(x => x.state_name == State).Distinct().GroupBy(x => x.district_name).ToList();
                List<vw_dli3_supply_phase1_report_24_25> all_data = new List<vw_dli3_supply_phase1_report_24_25>();
                List<vw_dli3_supply_phase1_report_24_25> ddetails = new List<vw_dli3_supply_phase1_report_24_25>();

                if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null)
                {
                    ddetails = ABE.obj_vw_dli3_supply_phase1_report_24_25.Where(x => x.state == State && x.year == Year).OrderByDescending(x => x.id).ToList();
                }
                else if (State != "0" && State != "" && State != null)
                {
                    ddetails = ABE.obj_vw_dli3_supply_phase1_report_24_25.Where(x => x.state == State).OrderByDescending(x => x.id).ToList();
                }

                foreach (var itemdist in dist)
                {
                    string district = itemdist.Key;
                    var dddd = ddetails.Where(x => x.district == district).ToList();
                    vw_dli3_supply_phase1_report_24_25 data = new vw_dli3_supply_phase1_report_24_25();
                    int ataljal_gp = 0;
                    int gp_wsp_submitted = 0;
                    int gp_dli3_claim_entry = 0;
                    int structures_claimed = 0;
                    double total_cost = 0;
                    double dpmu_cost = 0;
                    double spmu_cost = 0;
                    double reject_cost = 0;
                    double approved_cost = 0;
                    int totalentry_gp = 0;
                    int dpmu_gp = 0;
                    int spmu_gp = 0;
                    int reject_gp = 0;
                    int approved_gp = 0;


                    foreach (var item in dddd)
                    {
                        ataljal_gp += item.ataljal_gp;
                        gp_wsp_submitted += item.gp_wsp_submitted;
                        gp_dli3_claim_entry += item.gp_dli3_claim_entry;
                        structures_claimed += item.structures_claimed;
                        total_cost += item.total_cost;
                        dpmu_cost += item.dpmu_cost;
                        spmu_cost += item.spmu_cost;
                        reject_cost += item.reject_cost;
                        approved_cost += item.approved_cost;
                        totalentry_gp += item.totalentry_gp;
                        dpmu_gp += item.dpmu_gp;
                        spmu_gp += item.spmu_gp;
                        reject_gp += item.reject_gp;
                        approved_gp += item.approved_gp;

                    }
                    data.state = district;
                    data.ataljal_gp = ataljal_gp;
                    data.gp_wsp_submitted = gp_wsp_submitted;
                    data.gp_dli3_claim_entry = gp_dli3_claim_entry;
                    data.structures_claimed = structures_claimed;
                    data.total_cost = total_cost;
                    data.dpmu_cost = dpmu_cost;
                    data.spmu_cost = spmu_cost;
                    data.reject_cost = reject_cost;
                    data.approved_cost = approved_cost;
                    data.totalentry_gp = totalentry_gp;
                    data.dpmu_gp = dpmu_gp;
                    data.spmu_gp = spmu_gp;
                    data.reject_gp = reject_gp;
                    data.approved_gp = approved_gp;


                    all_data.Add(data);

                }


                var jsonResult = Json(all_data, JsonRequestBehavior.AllowGet);
                jsonResult.MaxJsonLength = int.MaxValue;
                return jsonResult;

            }
            catch (Exception Ex)
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult supply_report_block()
        {
            var Year = "";
            var State = "";

            if (Session["gstate"] != null)
            {
                State = Session["gstate"].ToString();
            }
            else
            {
                State = "0";
            }

            if (Session["year"] != null)
            {
                Year = Session["year"].ToString();
            }
            else
            {
                Year = "0";
            }
            try
            {
                var dist = ABE.obj_abhy_block_gp_area_info.Where(x => x.state_name == State).Distinct().GroupBy(x => x.district_name).ToList();
                List<vw_dli3_supply_phase1_report_24_25> all_data = new List<vw_dli3_supply_phase1_report_24_25>();
                List<vw_dli3_supply_phase1_report_24_25> ddetails = new List<vw_dli3_supply_phase1_report_24_25>();

                if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null)
                {
                    ddetails = ABE.obj_vw_dli3_supply_phase1_report_24_25.Where(x => x.state == State && x.year == Year).OrderByDescending(x => x.id).ToList();
                }
                else if (State != "0" && State != "" && State != null)
                {
                    ddetails = ABE.obj_vw_dli3_supply_phase1_report_24_25.Where(x => x.state == State).OrderByDescending(x => x.id).ToList();
                }

                foreach (var itemdist in dist)
                {
                    string district_name = itemdist.Key;
                    var block = ABE.obj_master_list_gp_wsp.Where(x => x.district_name == district_name).Distinct().GroupBy(x => x.block_name).ToList();
                    foreach (var itemblock in block)
                    {
                        string district = itemblock.Key;
                        var dddd = ddetails.Where(x => x.block == district).ToList();
                        vw_dli3_supply_phase1_report_24_25 data = new vw_dli3_supply_phase1_report_24_25();
                        int ataljal_gp = 0;
                        int gp_wsp_submitted = 0;
                        int gp_dli3_claim_entry = 0;
                        int structures_claimed = 0;
                        double total_cost = 0;
                        double dpmu_cost = 0;
                        double spmu_cost = 0;
                        double reject_cost = 0;
                        double approved_cost = 0;
                        int totalentry_gp = 0;
                        int dpmu_gp = 0;
                        int spmu_gp = 0;
                        int reject_gp = 0;
                        int approved_gp = 0;


                        foreach (var item in dddd)
                        {
                            ataljal_gp += item.ataljal_gp;
                            gp_wsp_submitted += item.gp_wsp_submitted;
                            gp_dli3_claim_entry += item.gp_dli3_claim_entry;
                            structures_claimed += item.structures_claimed;
                            total_cost += item.total_cost;
                            dpmu_cost += item.dpmu_cost;
                            spmu_cost += item.spmu_cost;
                            reject_cost += item.reject_cost;
                            approved_cost += item.approved_cost;
                            totalentry_gp += item.totalentry_gp;
                            dpmu_gp += item.dpmu_gp;
                            spmu_gp += item.spmu_gp;
                            reject_gp += item.reject_gp;
                            approved_gp += item.approved_gp;

                        }
                        data.state = district;
                        data.district = district_name;
                        data.ataljal_gp = ataljal_gp;
                        data.gp_wsp_submitted = gp_wsp_submitted;
                        data.gp_dli3_claim_entry = gp_dli3_claim_entry;
                        data.structures_claimed = structures_claimed;
                        data.total_cost = total_cost;
                        data.dpmu_cost = dpmu_cost;
                        data.spmu_cost = spmu_cost;
                        data.reject_cost = reject_cost;
                        data.approved_cost = approved_cost;
                        data.totalentry_gp = totalentry_gp;
                        data.dpmu_gp = dpmu_gp;
                        data.spmu_gp = spmu_gp;
                        data.reject_gp = reject_gp;
                        data.approved_gp = approved_gp;


                        all_data.Add(data);

                    }

                }
                var jsonResult = Json(all_data, JsonRequestBehavior.AllowGet);
                jsonResult.MaxJsonLength = int.MaxValue;
                return jsonResult;

            }
            catch (Exception Ex)
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }

        }

        [HttpPost]
        public ActionResult supply_report_districtblock()
        {
            var Year = "";
            var State = "";
            var Dist = "";

            if (Session["gstate"] != null)
            {
                State = Session["gstate"].ToString();
            }
            else
            {
                State = "0";
            }
            if (Session["gdist"] != null)
            {
                Dist = Session["gdist"].ToString();
            }
            else
            {
                Dist = "0";
            }

            if (Session["year"] != null)
            {
                Year = Session["year"].ToString();
            }
            else
            {
                Year = "0";
            }


            try
            {
                var dist = ABE.obj_master_list_gp_wsp.Where(x => x.state_name == State && x.district_name == Dist).Distinct().GroupBy(x => x.block_name).ToList();


                List<vw_dli3_supply_phase1_report_24_25> all_data = new List<vw_dli3_supply_phase1_report_24_25>();
                List<vw_dli3_supply_phase1_report_24_25> ddetails = new List<vw_dli3_supply_phase1_report_24_25>();
                if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null)
                {
                    ddetails = ABE.obj_vw_dli3_supply_phase1_report_24_25.Where(x => x.state == State && x.district == Dist && x.year == Year).OrderByDescending(x => x.id).ToList();
                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                {
                    ddetails = ABE.obj_vw_dli3_supply_phase1_report_24_25.Where(x => x.state == State && x.district == Dist).OrderByDescending(x => x.id).ToList();
                }

                foreach (var itemdist in dist)
                {
                    string district = itemdist.Key;
                    var dddd = ddetails.Where(x => x.block == district).ToList();
                    vw_dli3_supply_phase1_report_24_25 data = new vw_dli3_supply_phase1_report_24_25();
                    int ataljal_gp = 0;
                    int gp_wsp_submitted = 0;
                    int gp_dli3_claim_entry = 0;
                    int structures_claimed = 0;
                    double total_cost = 0;
                    double dpmu_cost = 0;
                    double spmu_cost = 0;
                    double reject_cost = 0;
                    double approved_cost = 0;
                    int totalentry_gp = 0;
                    int dpmu_gp = 0;
                    int spmu_gp = 0;
                    int reject_gp = 0;
                    int approved_gp = 0;


                    foreach (var item in dddd)
                    {
                        ataljal_gp += item.ataljal_gp;
                        gp_wsp_submitted += item.gp_wsp_submitted;
                        gp_dli3_claim_entry += item.gp_dli3_claim_entry;
                        structures_claimed += item.structures_claimed;
                        total_cost += item.total_cost;
                        dpmu_cost += item.dpmu_cost;
                        spmu_cost += item.spmu_cost;
                        reject_cost += item.reject_cost;
                        approved_cost += item.approved_cost;
                        totalentry_gp += item.totalentry_gp;
                        dpmu_gp += item.dpmu_gp;
                        spmu_gp += item.spmu_gp;
                        reject_gp += item.reject_gp;
                        approved_gp += item.approved_gp;

                    }
                    data.state = district;
                    data.ataljal_gp = ataljal_gp;
                    data.gp_wsp_submitted = gp_wsp_submitted;
                    data.gp_dli3_claim_entry = gp_dli3_claim_entry;
                    data.structures_claimed = structures_claimed;
                    data.total_cost = total_cost;
                    data.dpmu_cost = dpmu_cost;
                    data.spmu_cost = spmu_cost;
                    data.reject_cost = reject_cost;
                    data.approved_cost = approved_cost;
                    data.totalentry_gp = totalentry_gp;
                    data.dpmu_gp = dpmu_gp;
                    data.spmu_gp = spmu_gp;
                    data.reject_gp = reject_gp;
                    data.approved_gp = approved_gp;


                    all_data.Add(data);


                }
                var jsonResult = Json(all_data, JsonRequestBehavior.AllowGet);
                jsonResult.MaxJsonLength = int.MaxValue;
                return jsonResult;

            }
            catch (Exception Ex)
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }

        //phase1 end
        //phase2 start

        [HttpPost]
        public ActionResult insert_supplyside_phase2(string id, string year_subsidey_phase2, string work_start_date_phase2, string work_end_date_phase2, string type_of_work_phase2, string status_of_work_phase2, string latitude_phase2, string longitude_phase2, string department_name_phase2, string schema_name_phase2, string other_schema_name_phase2, string expenditure_phase2, string remark_phase2, string lop1_work_start_date_phase2, string lop1_work_end_date_phase2, string lop1_type_of_work_phase2, string lop1_status_of_work_phase2, string lop1_latitude_phase2, string lop1_longitude_phase2, string lop1_department_name_phase2, string lop1_schema_name_phase2, string lop1_other_schema_name_phase2, string lop1_expenditure_phase2, string lop1_remark_phase2)
        {

            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_supplyside_dli3_new2025.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        string d1 = "2022-03-31";
                        string d2 = "2024-09-30";
                        string d3 = "2025-03-31";

                        DateTime date1 = Convert.ToDateTime(d1);
                        DateTime date2 = Convert.ToDateTime(d2);
                        DateTime date3 = Convert.ToDateTime(d3);

                        var datelop1_work_start_date_phase2 = lop1_work_start_date_phase2;
                        if (datelop1_work_start_date_phase2 == null)
                        {
                            datelop1_work_start_date_phase2 = "";
                        }
                        var datework_start_date_phase2 = work_start_date_phase2;
                        if (datework_start_date_phase2 == null)
                        {
                            datework_start_date_phase2 = "";
                        }

                        if (datelop1_work_start_date_phase2 != "")
                        {
                            DateTime textdate1 = Convert.ToDateTime(lop1_work_start_date_phase2);
                            DateTime textdate2 = Convert.ToDateTime(lop1_work_end_date_phase2);


                            if (textdate1 > date2)
                            {
                                return Json("Please Enter Correct Work Start Date (Left Over Phase 1)");
                            }
                            else if (textdate1 < date1)
                            {
                                return Json("Please Enter Correct Work Start Date (Left Over Phase 1)");
                            }
                        }

                        if (datework_start_date_phase2 != "")
                        {
                            DateTime textdate3 = Convert.ToDateTime(work_start_date_phase2);

                            if (textdate3 > date3)
                            {
                                return Json("Please Enter Correct Work Start Date (Phase 2)");
                            }
                        }


                        Data.year_subsidey_phase2 = year_subsidey_phase2;
                        Data.work_start_date_phase2 = work_start_date_phase2;
                        Data.work_end_date_phase2 = work_end_date_phase2;
                        Data.type_of_work_phase2 = type_of_work_phase2;
                        Data.status_of_work_phase2 = status_of_work_phase2;
                        Data.latitude_phase2 = latitude_phase2;
                        Data.longitude_phase2 = longitude_phase2;
                        Data.department_name_phase2 = department_name_phase2;
                        Data.schema_name_phase2 = schema_name_phase2;
                        Data.expenditure_phase2 = expenditure_phase2;
                        Data.remark_phase2 = remark_phase2;
                        if (other_schema_name_phase2 == null || other_schema_name_phase2 == "")
                        {
                            Data.other_schema_name_phase2 = "";
                        }
                        else
                        {
                            Data.other_schema_name_phase2 = other_schema_name_phase2;
                        }

                        Data.lop1_work_start_date_phase2 = lop1_work_start_date_phase2;
                        Data.lop1_work_end_date_phase2 = lop1_work_end_date_phase2;
                        Data.lop1_type_of_work_phase2 = lop1_type_of_work_phase2;
                        Data.lop1_status_of_work_phase2 = lop1_status_of_work_phase2;
                        Data.lop1_latitude_phase2 = lop1_latitude_phase2;
                        Data.lop1_longitude_phase2 = lop1_longitude_phase2;
                        Data.lop1_department_name_phase2 = lop1_department_name_phase2;
                        Data.lop1_schema_name_phase2 = lop1_schema_name_phase2;
                        Data.lop1_expenditure_phase2 = lop1_expenditure_phase2;
                        Data.lop1_remark_phase2 = lop1_remark_phase2;

                        if (lop1_other_schema_name_phase2 == null || lop1_other_schema_name_phase2 == "")
                        {
                            Data.lop1_other_schema_name_phase2 = "";
                        }
                        else
                        {
                            Data.lop1_other_schema_name_phase2 = lop1_other_schema_name_phase2;
                        }


                        Data.entry_phase2 = "phase2";
                        Data.entry_time_phase2 = DateTime.Now.ToString("dd-MM-yyyy hh:mm:ss:ms");

                        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = ABE.SaveChanges();
                        if (A > 0)
                        {
                            return Json("Successfully Saved");
                        }
                    }

                }
                catch (Exception ex)
                {
                    return Json("Logout", JsonRequestBehavior.AllowGet);

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult delete_phase2_supplyside(int id)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_supplyside_dli3_new2025.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {
                        Data.year_subsidey_phase2 = "";
                        Data.work_start_date_phase2 = "";
                        Data.work_end_date_phase2 = "";
                        Data.type_of_work_phase2 = "0";
                        Data.status_of_work_phase2 = "0";
                        Data.latitude_phase2 = "";
                        Data.longitude_phase2 = "";
                        Data.department_name_phase2 = "0";
                        Data.schema_name_phase2 = "0";
                        Data.expenditure_phase2 = "";
                        Data.remark_phase2 = "";
                        Data.other_schema_name_phase2 = "";
                        var check_data = "No";
                        if (Data.lop1_work_end_date_phase2 == "" && Data.lop1_work_start_date_phase2 == "")
                        {
                            check_data = "Yes";
                            Data.entry_phase2 = "";
                            Data.entry_time_phase2 = "";
                            Data.approve_phase2 = "";
                            Data.reject_phase2 = "";
                        }

                        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = ABE.SaveChanges();


                        if (A > 0)
                        {
                            return Json("Successfully Delete" + ',' + check_data);
                        }
                    }

                }
                catch (Exception ex)
                {
                    return Json("" + ',' + "");

                }
                return Json("Invalid" + ',' + "");
            }
            else
            {
                return Json("Logout" + ',' + "");

            }
        }

        [HttpPost]
        public ActionResult lop1delete_phase2_supplyside(int id)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_supplyside_dli3_new2025.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {
                        Data.lop1_year_subsidey_phase2 = "";
                        Data.lop1_work_start_date_phase2 = "";
                        Data.lop1_work_end_date_phase2 = "";
                        Data.lop1_type_of_work_phase2 = "0";
                        Data.lop1_status_of_work_phase2 = "0";
                        Data.lop1_latitude_phase2 = "";
                        Data.lop1_longitude_phase2 = "";
                        Data.lop1_department_name_phase2 = "0";
                        Data.lop1_schema_name_phase2 = "0";
                        Data.lop1_expenditure_phase2 = "";
                        Data.lop1_remark_phase2 = "";
                        Data.lop1_other_schema_name_phase2 = "";
                        var check_data = "No";
                        if (Data.work_end_date_phase2 == "" && Data.work_start_date_phase2 == "")
                        {
                            check_data = "Yes";
                            Data.entry_phase2 = "";
                            Data.entry_time_phase2 = "";
                            Data.approve_phase2 = "";
                            Data.reject_phase2 = "";
                        }


                        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = ABE.SaveChanges();

                        if (A > 0)
                        {
                            return Json("Successfully Delete" + ',' + check_data);
                        }
                    }

                }
                catch (Exception ex)
                {
                    return Json("" + ',' + "");

                }
                return Json("Invalid" + ',' + "");
            }
            else
            {
                return Json("Logout" + ',' + "");

            }
        }

        [HttpPost]
        public ActionResult lop1_update_supplyside_phase2(string id, string work_start_date_phase2, string work_end_date_phase2, string type_of_work_phase2, string status_of_work_phase2, string latitude_phase2, string longitude_phase2, string department_name_phase2, string schema_name_phase2, string other_schema_name_phase2, string expenditure_phase2, string remark_phase2)
        {

            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_supplyside_dli3_new2025.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {
                        string d1 = "2022-03-31";
                        string d2 = "2024-09-30";

                        string statusofwork = Data.status_of_work_phase2;
                        string lop1statusofwork = status_of_work_phase2;
                        if (statusofwork == "Ongoing")
                        {
                            if (lop1statusofwork == "Completed")
                            {
                                return Json("Please First delete Phase 2 Data. After you can select status of work is completed ");
                            }

                        }
                        if (statusofwork == "Completed")
                        {
                            if (lop1statusofwork == "Completed")
                            {
                                return Json("Please First delete Phase 2 Data. After you can select status of work is completed ");
                            }

                        }

                        DateTime date1 = Convert.ToDateTime(d1);
                        DateTime date2 = Convert.ToDateTime(d2);

                        DateTime textdate1 = Convert.ToDateTime(work_start_date_phase2);
                        DateTime textdate2 = Convert.ToDateTime(work_end_date_phase2);

                        string textdate3 = Data.work_end_date_phase2;

                        if (textdate3 == null || textdate3 == "")
                        {


                        }
                        else
                        {
                            DateTime phase2date = Convert.ToDateTime(Data.work_end_date_phase2);
                            if (textdate2 != phase2date)
                            {
                                return Json("Please enter work end date (left over phase 1) and work end date (phase 2) is not equal or same ");
                            }
                        }

                        Data.lop1_work_start_date_phase2 = work_start_date_phase2;
                        Data.lop1_work_end_date_phase2 = work_end_date_phase2;
                        Data.lop1_type_of_work_phase2 = type_of_work_phase2;
                        Data.lop1_status_of_work_phase2 = status_of_work_phase2;
                        Data.lop1_latitude_phase2 = latitude_phase2;
                        Data.lop1_longitude_phase2 = longitude_phase2;
                        Data.lop1_department_name_phase2 = department_name_phase2;
                        Data.lop1_schema_name_phase2 = schema_name_phase2;
                        Data.lop1_expenditure_phase2 = expenditure_phase2;
                        Data.lop1_remark_phase2 = remark_phase2;
                        if (other_schema_name_phase2 == null || other_schema_name_phase2 == "")
                        {
                            Data.lop1_other_schema_name_phase2 = "";
                        }
                        else
                        {
                            Data.lop1_other_schema_name_phase2 = other_schema_name_phase2;
                        }

                        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = ABE.SaveChanges();
                        if (A > 0)
                        {
                            return Json("Successfully Updated");
                        }
                    }

                }
                catch (Exception ex)
                {
                    return Json("Logout", JsonRequestBehavior.AllowGet);

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }


        [HttpPost]
        public ActionResult update_supplyside_phase2(string id, string work_start_date_phase2, string work_end_date_phase2, string type_of_work_phase2, string status_of_work_phase2, string latitude_phase2, string longitude_phase2, string department_name_phase2, string schema_name_phase2, string other_schema_name_phase2, string expenditure_phase2, string remark_phase2)
        {

            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_supplyside_dli3_new2025.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        string statusofwork = Data.lop1_status_of_work_phase2;
                        string lop1statusofwork = status_of_work_phase2;
                        //if (statusofwork == "Ongoing")
                        //{
                        //    if (lop1statusofwork == "Completed")
                        //    {
                        //        return Json("Please First delete Left over Phase 1 Data. After you can select status of work is completed ");
                        //    }

                        //}
                        DateTime textdate1 = Convert.ToDateTime(work_start_date_phase2);
                        DateTime textdate2 = Convert.ToDateTime(work_end_date_phase2);

                        string textdate3 = Data.lop1_work_end_date_phase2;



                        if (textdate3 == null || textdate3 == "")
                        {


                        }
                        else
                        {
                            DateTime phase2date = Convert.ToDateTime(Data.lop1_work_end_date_phase2);
                            if (textdate2 != phase2date)
                            {
                                return Json("Please enter work end date (left over phase 1) and work end date (phase 2) is not equal or same ");
                            }
                        }
                        Data.work_start_date_phase2 = work_start_date_phase2;
                        Data.work_end_date_phase2 = work_end_date_phase2;
                        Data.type_of_work_phase2 = type_of_work_phase2;
                        Data.status_of_work_phase2 = status_of_work_phase2;
                        Data.latitude_phase2 = latitude_phase2;
                        Data.longitude_phase2 = longitude_phase2;
                        Data.department_name_phase2 = department_name_phase2;
                        Data.schema_name_phase2 = schema_name_phase2;
                        Data.expenditure_phase2 = expenditure_phase2;
                        Data.remark_phase2 = remark_phase2;
                        if (other_schema_name_phase2 == null || other_schema_name_phase2 == "")
                        {
                            Data.other_schema_name_phase2 = "";
                        }
                        else
                        {
                            Data.other_schema_name_phase2 = other_schema_name_phase2;
                        }

                        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = ABE.SaveChanges();
                        if (A > 0)
                        {
                            return Json("Successfully Updated");
                        }
                    }

                }
                catch (Exception ex)
                {
                    return Json("Logout", JsonRequestBehavior.AllowGet);

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }


        [HttpPost]
        public ActionResult suppysidephase2submittospmu(int id)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_supplyside_dli3_new2025.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        Data.approve_phase2 = "Submit to SPMU";
                        Data.reject_phase2 = "";

                        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = ABE.SaveChanges();

                        if (A > 0)
                        {
                            return Json("Successfully Submitted");
                        }
                    }
                }
                catch (Exception ex)
                {
                    return Json("Logout", JsonRequestBehavior.AllowGet);

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);

            }
        }
        [HttpPost]
        public ActionResult supplysidephase2approve(int id)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_supplyside_dli3_new2025.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        Data.approve_phase2 = "Approved";
                        Data.reject_phase2 = "";

                        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = ABE.SaveChanges();

                        if (A > 0)
                        {
                            return Json("Successfully Approved");
                        }
                    }
                }
                catch (Exception ex)
                {
                    return Json("Logout", JsonRequestBehavior.AllowGet);

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);

            }
        }

        [HttpPost]
        public ActionResult supplysidephase2reject(int id, string reject)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_supplyside_dli3_new2025.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        Data.approve_phase2 = "Rejected";
                        Data.reject_phase2 = reject;
                        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = ABE.SaveChanges();

                        if (A > 0)
                        {
                            return Json("Successfully Rejected");
                        }
                    }
                }
                catch (Exception ex)
                {
                    return Json("Logout", JsonRequestBehavior.AllowGet);

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);

            }
        }
        //hello
        public ActionResult supplyside_excel_phase1(string state1, string district1, string block01, string gp1, string year1, string supply_val)
        {
            try
            {
                var State = state1;
                var Dist = district1;
                var Block = block01;
                var Gram = gp1;
                var Year = year1;


                List<supplyside_dli3_new2025> data = new List<supplyside_dli3_new2025>();
                if (supply_val != "0" && supply_val != "All")
                {
                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null && supply_val != "0" && supply_val != "" && supply_val != null)
                    {
                        data = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.financial_year == Year && x.type_of_supply_side_structure == supply_val).OrderBy(c => c.gp).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && supply_val != "0" && supply_val != "" && supply_val != null)
                    {
                        data = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.type_of_supply_side_structure == supply_val).OrderBy(c => c.gp).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Year != "0" && Year != "" && Year != null && supply_val != "0" && supply_val != "" && supply_val != null)
                    {
                        data = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.district == Dist && x.block == Block && x.financial_year == Year && x.type_of_supply_side_structure == supply_val).OrderBy(c => c.gp).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && supply_val != "0" && supply_val != "" && supply_val != null)
                    {
                        data = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.district == Dist && x.block == Block && x.type_of_supply_side_structure == supply_val).OrderBy(c => c.gp).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null && supply_val != "0" && supply_val != "" && supply_val != null)
                    {
                        data = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.district == Dist && x.financial_year == Year && x.type_of_supply_side_structure == supply_val).OrderBy(c => c.gp).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && supply_val != "0" && supply_val != "" && supply_val != null)
                    {
                        data = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.district == Dist && x.type_of_supply_side_structure == supply_val).OrderBy(c => c.gp).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null && supply_val != "0" && supply_val != "" && supply_val != null)
                    {
                        data = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.financial_year == Year && x.type_of_supply_side_structure == supply_val).OrderBy(c => c.gp).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && supply_val != "0" && supply_val != "" && supply_val != null)
                    {
                        data = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.type_of_supply_side_structure == supply_val).OrderBy(c => c.gp).ToList();
                    }
                }
                else if (supply_val == "All")
                {
                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null)
                    {
                        data = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.financial_year == Year).OrderBy(c => c.gp).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        data = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram).OrderBy(c => c.gp).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Year != "0" && Year != "" && Year != null)
                    {
                        data = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.district == Dist && x.block == Block && x.financial_year == Year).OrderBy(c => c.gp).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        data = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.district == Dist && x.block == Block).OrderBy(c => c.gp).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null)
                    {
                        data = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.district == Dist && x.financial_year == Year).OrderBy(c => c.gp).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        data = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.district == Dist).OrderBy(c => c.gp).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null)
                    {
                        data = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.financial_year == Year).OrderBy(c => c.gp).ToList();
                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        data = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State).OrderBy(c => c.gp).ToList();
                    }
                }
                else
                {
                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null)
                    {
                        data = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.financial_year == Year).OrderBy(c => c.gp).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        data = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram).OrderBy(c => c.gp).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Year != "0" && Year != "" && Year != null)
                    {
                        data = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.district == Dist && x.block == Block && x.financial_year == Year).OrderBy(c => c.gp).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        data = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.district == Dist && x.block == Block).OrderBy(c => c.gp).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null)
                    {
                        data = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.district == Dist && x.financial_year == Year).OrderBy(c => c.gp).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        data = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.district == Dist).OrderBy(c => c.gp).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null)
                    {
                        data = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.financial_year == Year).OrderBy(c => c.gp).ToList();
                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        data = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State).OrderBy(c => c.gp).ToList();
                    }
                }
                using (var workbook = new XLWorkbook())
                {
                    var worksheet = workbook.Worksheets.Add("Supply Side Phase 1");
                    var currentRow = 1;
                    worksheet.Cell(currentRow, 1).Value = "Data From WSP";
                    worksheet.Range(currentRow, 2, currentRow, 8).Merge();
                    worksheet.Cell(currentRow, 2).Value = "GP Information";
                    worksheet.Cell(currentRow + 1, 2).Value = "State";
                    worksheet.Cell(currentRow + 1, 3).Value = "District";
                    worksheet.Cell(currentRow + 1, 4).Value = "Block";
                    worksheet.Cell(currentRow + 1, 5).Value = "Grampanchayat";
                    worksheet.Cell(currentRow + 1, 6).Value = "GP Center Point (Latitude)";
                    worksheet.Cell(currentRow + 1, 7).Value = "GP Center Point (Longitude)";
                    worksheet.Cell(currentRow + 1, 8).Value = "Village Name";


                    worksheet.Range(currentRow, 9, currentRow, 18).Merge();
                    worksheet.Cell(currentRow, 9).Value = "Supply Side Proposed Under WSP";
                    worksheet.Cell(currentRow + 1, 9).Value = "Financial Year";
                    worksheet.Cell(currentRow + 1, 10).Value = "Type of Supply Side Structure";
                    worksheet.Cell(currentRow + 1, 11).Value = "Annual GW Recharge/Effective Strorage Available for Use (ha)";
                    worksheet.Cell(currentRow + 1, 12).Value = "Department Name";
                    worksheet.Cell(currentRow + 1, 13).Value = "Scheme Name / Possible Funding Source";
                    worksheet.Cell(currentRow + 1, 14).Value = "Other Scheme Name / Possible Funding Source";
                    worksheet.Cell(currentRow + 1, 15).Value = "Name of Structure (Proposed)";
                    worksheet.Cell(currentRow + 1, 16).Value = "Latitude of proposed structure";
                    worksheet.Cell(currentRow + 1, 17).Value = "Longitude of proposed structure";
                    worksheet.Cell(currentRow + 1, 18).Value = "Total Approximate Estimated Cost(in lakh)";

                    worksheet.Range(currentRow, 19, currentRow, 32).Merge();
                    worksheet.Cell(currentRow, 19).Value = "Convergence Expenditure Claim Other than Atal Bhujal Yojana Share (Phase 1)";

                    worksheet.Cell(currentRow + 1, 19).Value = "Work Start Date(Phase 1)";
                    worksheet.Cell(currentRow + 1, 20).Value = "Work Completion Date(Phase 1)";
                    worksheet.Cell(currentRow + 1, 21).Value = "Type of Work(Phase 1)";
                    worksheet.Cell(currentRow + 1, 22).Value = "Status of Work(Phase 1)";
                    worksheet.Cell(currentRow + 1, 23).Value = "Latitude of structure  (Decimal Degree)(Phase 1)";
                    worksheet.Cell(currentRow + 1, 24).Value = "Longitude of structure (Decimal Degree)(Phase 1)";
                    worksheet.Cell(currentRow + 1, 25).Value = "Department Name(Phase 1)";
                    worksheet.Cell(currentRow + 1, 26).Value = "Scheme Name(Phase 1)";
                    worksheet.Cell(currentRow + 1, 27).Value = "Other Scheme Name(Phase 1)";
                    worksheet.Cell(currentRow + 1, 28).Value = "Expenditure incurred other than Atal Jal (lakhs)(Phase 1)";
                    worksheet.Cell(currentRow + 1, 29).Value = "Remark, if any(Phase 1)";
                    worksheet.Cell(currentRow + 1, 30).Value = "Status(Phase 1)";
                    worksheet.Cell(currentRow + 1, 31).Value = "Reject Remark(Phase 1)";
                    worksheet.Cell(currentRow + 1, 32).Value = "Phase(Phase 1)";



                    for (int col = 1; col <= 32; col++)
                    {
                        worksheet.Cell(currentRow, col).Style.Font.Bold = true;
                        worksheet.Cell(currentRow, col).Style.Alignment.Horizontal = XLAlignmentHorizontalValues.Center;
                    }
                    for (int col = 2; col <= 33; col++)
                    {
                        worksheet.Cell(currentRow + 1, col).Style.Font.Bold = true;
                        worksheet.Cell(currentRow, col).Style.Alignment.Horizontal = XLAlignmentHorizontalValues.Center;
                    }

                    currentRow = 2;

                    if (data.Count != 0)
                    {
                        for (int i = 0; i < data.Count; i++)
                        {

                            string dateInput = data[i].work_start_date_phase1;
                            DateTime Dates = new DateTime();
                            string parsedDate = "";
                            if (dateInput != null && dateInput != "")
                            {
                                Dates = DateTime.Parse(dateInput);
                                parsedDate = Dates.ToString("dd MMMM yyyy", CultureInfo.InvariantCulture);
                            }
                            string dateInput2 = data[i].work_end_date_phase1;
                            DateTime Dates2 = new DateTime();
                            string parsedDate2 = "";
                            if (dateInput2 != null && dateInput2 != "")
                            {
                                Dates2 = DateTime.Parse(dateInput2);
                                parsedDate2 = Dates2.ToString("dd MMMM yyyy", CultureInfo.InvariantCulture);

                            }

                            var other_scheme_old = data[i].other_scheme;
                            if (other_scheme_old == null)
                            {
                                other_scheme_old = "";
                            }
                            var other_scheme = data[i].other_schema_name_phase1;
                            if (other_scheme == null)
                            {
                                other_scheme = "";
                            }
                            var entry_phase = data[i].entry_phase1;
                            if (entry_phase == null)
                            {
                                entry_phase = "";
                            }
                            var approve_phase = data[i].approve_phase1;
                            if (approve_phase == null || approve_phase == "")
                            {
                                approve_phase = "At DPMU";
                            }

                            if (entry_phase == "phase1")
                            {
                                currentRow++;

                                worksheet.Cell(currentRow, 1).Value = data[i].from_table;
                                worksheet.Cell(currentRow, 2).Value = data[i].state;
                                worksheet.Cell(currentRow, 3).Value = data[i].district;
                                worksheet.Cell(currentRow, 4).Value = data[i].block;
                                worksheet.Cell(currentRow, 5).Value = data[i].gp;
                                worksheet.Cell(currentRow, 6).Value = data[i].gp_center_point_latitude;
                                worksheet.Cell(currentRow, 7).Value = data[i].gp_center_point_longitude;
                                worksheet.Cell(currentRow, 8).Value = data[i].village_name;
                                worksheet.Cell(currentRow, 9).Value = data[i].financial_year;
                                worksheet.Cell(currentRow, 10).Value = data[i].type_of_supply_side_structure;
                                worksheet.Cell(currentRow, 11).Value = data[i].gw_recharge_or_effective_storage;
                                worksheet.Cell(currentRow, 12).Value = data[i].department_name;
                                worksheet.Cell(currentRow, 13).Value = data[i].scheme_name_possible_funding_source;
                                worksheet.Cell(currentRow, 14).Value = other_scheme_old;
                                worksheet.Cell(currentRow, 15).Value = data[i].name_of_structure;
                                worksheet.Cell(currentRow, 16).Value = data[i].latitude;
                                worksheet.Cell(currentRow, 17).Value = data[i].longitude;
                                worksheet.Cell(currentRow, 18).Value = data[i].total_approximate_estimated_cost;
                                worksheet.Cell(currentRow, 19).Value = parsedDate;
                                worksheet.Cell(currentRow, 20).Value = parsedDate2;
                                worksheet.Cell(currentRow, 21).Value = data[i].type_of_work_phase1;
                                worksheet.Cell(currentRow, 22).Value = data[i].status_of_work_phase1;
                                worksheet.Cell(currentRow, 23).Value = data[i].latitude_phase1;
                                worksheet.Cell(currentRow, 24).Value = data[i].longitude_phase1;
                                worksheet.Cell(currentRow, 25).Value = data[i].department_name_phase1;
                                worksheet.Cell(currentRow, 26).Value = data[i].schema_name_phase1;
                                worksheet.Cell(currentRow, 27).Value = data[i].other_schema_name_phase1;
                                worksheet.Cell(currentRow, 28).Value = data[i].expenditure_phase1;
                                worksheet.Cell(currentRow, 29).Value = data[i].remark_phase1;
                                worksheet.Cell(currentRow, 30).Value = approve_phase;
                                worksheet.Cell(currentRow, 31).Value = data[i].reject_phase1;
                                worksheet.Cell(currentRow, 32).Value = "Phase1";
                            }
                            else
                            {
                                currentRow++;

                                worksheet.Cell(currentRow, 1).Value = data[i].from_table;
                                worksheet.Cell(currentRow, 2).Value = data[i].state;
                                worksheet.Cell(currentRow, 3).Value = data[i].district;
                                worksheet.Cell(currentRow, 4).Value = data[i].block;
                                worksheet.Cell(currentRow, 5).Value = data[i].gp;
                                worksheet.Cell(currentRow, 6).Value = data[i].gp_center_point_latitude;
                                worksheet.Cell(currentRow, 7).Value = data[i].gp_center_point_longitude;
                                worksheet.Cell(currentRow, 8).Value = data[i].village_name;
                                worksheet.Cell(currentRow, 9).Value = data[i].financial_year;
                                worksheet.Cell(currentRow, 10).Value = data[i].type_of_supply_side_structure;
                                worksheet.Cell(currentRow, 11).Value = data[i].gw_recharge_or_effective_storage;
                                worksheet.Cell(currentRow, 12).Value = data[i].department_name;
                                worksheet.Cell(currentRow, 13).Value = data[i].scheme_name_possible_funding_source;
                                worksheet.Cell(currentRow, 14).Value = other_scheme_old;
                                worksheet.Cell(currentRow, 15).Value = data[i].name_of_structure;
                                worksheet.Cell(currentRow, 16).Value = data[i].latitude;
                                worksheet.Cell(currentRow, 17).Value = data[i].longitude;
                                worksheet.Cell(currentRow, 18).Value = data[i].total_approximate_estimated_cost;
                                worksheet.Cell(currentRow, 19).Value = parsedDate;
                                worksheet.Cell(currentRow, 20).Value = parsedDate2;
                                worksheet.Cell(currentRow, 21).Value = data[i].type_of_work_phase1;
                                worksheet.Cell(currentRow, 22).Value = data[i].status_of_work_phase1;
                                worksheet.Cell(currentRow, 23).Value = data[i].latitude_phase1;
                                worksheet.Cell(currentRow, 24).Value = data[i].longitude_phase1;
                                worksheet.Cell(currentRow, 25).Value = data[i].department_name_phase1;
                                worksheet.Cell(currentRow, 26).Value = data[i].schema_name_phase1;
                                worksheet.Cell(currentRow, 27).Value = data[i].other_schema_name_phase1;
                                worksheet.Cell(currentRow, 28).Value = data[i].expenditure_phase1;
                                worksheet.Cell(currentRow, 29).Value = data[i].remark_phase1;
                                worksheet.Cell(currentRow, 30).Value = "";
                                worksheet.Cell(currentRow, 31).Value = "";
                                worksheet.Cell(currentRow, 32).Value = "";

                            }

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


                    }
                    using (var stream = new MemoryStream())
                    {
                        workbook.SaveAs(stream);
                        var content = stream.ToArray();
                        var exeState = state1;
                        var exeDist = district1;
                        var exeBlock = block01;
                        var exeGram = gp1;
                        var xls = "csv";

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



                        var aa = "DLI-3_Excel_Supply Side_Phase1" + '-' + exeState + exeDist + exeBlock + exeGram + '.' + xls;


                        return File(
                            content,
                            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                            aa);
                    }
                }


            }
            catch (Exception ex)
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);

            }
        }


        public ActionResult supplyside_excel_phase2(string state1, string district1, string block01, string gp1, string year1, string supply_val)
        {
            try
            {
                var State = state1;
                var Dist = district1;
                var Block = block01;
                var Gram = gp1;
                var Year = year1;


                List<supplyside_dli3_new2025> data = new List<supplyside_dli3_new2025>();
                if (supply_val != "0" && supply_val != "All")
                {
                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null && supply_val != "0" && supply_val != "" && supply_val != null)
                    {
                        data = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.financial_year == Year && x.type_of_supply_side_structure == supply_val).OrderBy(c => c.gp).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && supply_val != "0" && supply_val != "" && supply_val != null)
                    {
                        data = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.type_of_supply_side_structure == supply_val).OrderBy(c => c.gp).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Year != "0" && Year != "" && Year != null && supply_val != "0" && supply_val != "" && supply_val != null)
                    {
                        data = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.district == Dist && x.block == Block && x.financial_year == Year && x.type_of_supply_side_structure == supply_val).OrderBy(c => c.gp).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && supply_val != "0" && supply_val != "" && supply_val != null)
                    {
                        data = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.district == Dist && x.block == Block && x.type_of_supply_side_structure == supply_val).OrderBy(c => c.gp).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null && supply_val != "0" && supply_val != "" && supply_val != null)
                    {
                        data = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.district == Dist && x.financial_year == Year && x.type_of_supply_side_structure == supply_val).OrderBy(c => c.gp).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && supply_val != "0" && supply_val != "" && supply_val != null)
                    {
                        data = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.district == Dist && x.type_of_supply_side_structure == supply_val).OrderBy(c => c.gp).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null && supply_val != "0" && supply_val != "" && supply_val != null)
                    {
                        data = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.financial_year == Year && x.type_of_supply_side_structure == supply_val).OrderBy(c => c.gp).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && supply_val != "0" && supply_val != "" && supply_val != null)
                    {
                        data = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.type_of_supply_side_structure == supply_val).OrderBy(c => c.gp).ToList();
                    }
                }
                else if (supply_val == "All")
                {
                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null)
                    {
                        data = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.financial_year == Year).OrderBy(c => c.gp).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        data = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram).OrderBy(c => c.gp).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Year != "0" && Year != "" && Year != null)
                    {
                        data = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.district == Dist && x.block == Block && x.financial_year == Year).OrderBy(c => c.gp).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        data = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.district == Dist && x.block == Block).OrderBy(c => c.gp).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null)
                    {
                        data = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.district == Dist && x.financial_year == Year).OrderBy(c => c.gp).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        data = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.district == Dist).OrderBy(c => c.gp).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null)
                    {
                        data = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.financial_year == Year).OrderBy(c => c.gp).ToList();
                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        data = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State).OrderBy(c => c.gp).ToList();
                    }
                }
                else
                {
                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null)
                    {
                        data = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.financial_year == Year).OrderBy(c => c.gp).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        data = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram).OrderBy(c => c.gp).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Year != "0" && Year != "" && Year != null)
                    {
                        data = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.district == Dist && x.block == Block && x.financial_year == Year).OrderBy(c => c.gp).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        data = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.district == Dist && x.block == Block).OrderBy(c => c.gp).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null)
                    {
                        data = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.district == Dist && x.financial_year == Year).OrderBy(c => c.gp).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        data = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.district == Dist).OrderBy(c => c.gp).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null)
                    {
                        data = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State && x.financial_year == Year).OrderBy(c => c.gp).ToList();
                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        data = ABE.obj_supplyside_dli3_new2025.Where(x => x.state == State).OrderBy(c => c.gp).ToList();
                    }
                }

                using (var workbook = new XLWorkbook())
                {
                    var worksheet = workbook.Worksheets.Add("Supply Side LOP1 and Phase 2");
                    var currentRow = 1;
                    worksheet.Cell(currentRow, 1).Value = "Data From WSP";
                    worksheet.Range(currentRow, 2, currentRow, 8).Merge();
                    worksheet.Cell(currentRow, 2).Value = "GP Information";
                    worksheet.Cell(currentRow + 1, 2).Value = "State";
                    worksheet.Cell(currentRow + 1, 3).Value = "District";
                    worksheet.Cell(currentRow + 1, 4).Value = "Block";
                    worksheet.Cell(currentRow + 1, 5).Value = "Grampanchayat";
                    worksheet.Cell(currentRow + 1, 6).Value = "GP Center Point (Latitude)";
                    worksheet.Cell(currentRow + 1, 7).Value = "GP Center Point (Longitude)";
                    worksheet.Cell(currentRow + 1, 8).Value = "Village Name";


                    worksheet.Range(currentRow, 9, currentRow, 18).Merge();
                    worksheet.Cell(currentRow, 9).Value = "Supply Side Proposed Under WSP";
                    worksheet.Cell(currentRow + 1, 9).Value = "Financial Year";

                    worksheet.Cell(currentRow + 1, 10).Value = "Type of Supply Side Structure";
                    worksheet.Cell(currentRow + 1, 11).Value = "Annual GW Recharge/Effective Strorage Available for Use (ha)";
                    worksheet.Cell(currentRow + 1, 12).Value = "Department Name";
                    worksheet.Cell(currentRow + 1, 13).Value = "Scheme Name / Possible Funding Source";
                    worksheet.Cell(currentRow + 1, 14).Value = "Other Scheme Name / Possible Funding Source";
                    worksheet.Cell(currentRow + 1, 15).Value = "Name of Structure (Proposed)";
                    worksheet.Cell(currentRow + 1, 16).Value = "Latitude of proposed structure";
                    worksheet.Cell(currentRow + 1, 17).Value = "Longitude of proposed structure";
                    worksheet.Cell(currentRow + 1, 18).Value = "Total Approximate Estimated Cost(in lakh)";

                    worksheet.Range(currentRow, 19, currentRow, 32).Merge();
                    worksheet.Cell(currentRow, 19).Value = "Convergence Expenditure Claim Other than Atal Bhujal Yojana Share (Phase 1)";

                    worksheet.Cell(currentRow + 1, 19).Value = "Work Start Date(Phase 1)";
                    worksheet.Cell(currentRow + 1, 20).Value = "Work Completion Date(Phase 1)";
                    worksheet.Cell(currentRow + 1, 21).Value = "Type of Work(Phase 1)";
                    worksheet.Cell(currentRow + 1, 22).Value = "Status of Work(Phase 1)";
                    worksheet.Cell(currentRow + 1, 23).Value = "Latitude of structure  (Decimal Degree)(Phase 1)";
                    worksheet.Cell(currentRow + 1, 24).Value = "Longitude of structure (Decimal Degree)(Phase 1)";
                    worksheet.Cell(currentRow + 1, 25).Value = "Department Name(Phase 1)";
                    worksheet.Cell(currentRow + 1, 26).Value = "Scheme Name(Phase 1)";
                    worksheet.Cell(currentRow + 1, 27).Value = "Other Scheme Name(Phase 1)";
                    worksheet.Cell(currentRow + 1, 28).Value = "Expenditure incurred other than Atal Jal (lakhs)(Phase 1)";
                    worksheet.Cell(currentRow + 1, 29).Value = "Remark, if any(Phase 1)";
                    worksheet.Cell(currentRow + 1, 30).Value = "Status(Phase 1)";
                    worksheet.Cell(currentRow + 1, 31).Value = "Reject Remark(Phase 1)";
                    worksheet.Cell(currentRow + 1, 32).Value = "Phase(Phase 1)";

                    worksheet.Range(currentRow, 33, currentRow, 43).Merge();
                    worksheet.Cell(currentRow, 33).Value = "Convergence Expenditure Claim Other than Atal Bhujal Yojana Share (Left OverPhase 1)";

                    worksheet.Cell(currentRow + 1, 33).Value = "Work Start Date(Left over Phase 1)";
                    worksheet.Cell(currentRow + 1, 34).Value = "Work Completion Date(Left over Phase 1)";
                    worksheet.Cell(currentRow + 1, 35).Value = "Type of Work(Left over Phase 1)";
                    worksheet.Cell(currentRow + 1, 36).Value = "Status of Work(Left over Phase 1)";
                    worksheet.Cell(currentRow + 1, 37).Value = "Latitude of structure  (Decimal Degree)(Left over Phase 1)";
                    worksheet.Cell(currentRow + 1, 38).Value = "Longitude of structure (Decimal Degree)(Left over Phase 1)";
                    worksheet.Cell(currentRow + 1, 39).Value = "Department Name(Left over Phase 1)";
                    worksheet.Cell(currentRow + 1, 40).Value = "Scheme Name(Left over Phase 1)";
                    worksheet.Cell(currentRow + 1, 41).Value = "Other Scheme Name(Left over Phase 1)";
                    worksheet.Cell(currentRow + 1, 42).Value = "Expenditure incurred other than Atal Jal (lakhs)(Left over Phase 1)";
                    worksheet.Cell(currentRow + 1, 43).Value = "Remark, if any(Left over Phase 1)";

                    worksheet.Range(currentRow, 44, currentRow, 57).Merge();
                    worksheet.Cell(currentRow, 44).Value = "Convergence Expenditure Claim Other than Atal Bhujal Yojana Share (Phase 2)";

                    worksheet.Cell(currentRow + 1, 44).Value = "Work Start Date(Phase 2)";
                    worksheet.Cell(currentRow + 1, 45).Value = "Work Completion Date(Phase 2)";
                    worksheet.Cell(currentRow + 1, 46).Value = "Type of Work(Phase 2)";
                    worksheet.Cell(currentRow + 1, 47).Value = "Status of Work(Phase 2)";
                    worksheet.Cell(currentRow + 1, 48).Value = "Latitude of structure  (Decimal Degree)(Phase 2)";
                    worksheet.Cell(currentRow + 1, 49).Value = "Longitude of structure (Decimal Degree)(Phase 2)";
                    worksheet.Cell(currentRow + 1, 50).Value = "Department Name(Phase 2)";
                    worksheet.Cell(currentRow + 1, 51).Value = "Scheme Name(Phase 2)";
                    worksheet.Cell(currentRow + 1, 52).Value = "Other Scheme Name(Phase 2)";
                    worksheet.Cell(currentRow + 1, 53).Value = "Expenditure incurred other than Atal Jal (lakhs)(Phase 2)";
                    worksheet.Cell(currentRow + 1, 54).Value = "Remark, if any(Phase 2)";
                    worksheet.Cell(currentRow + 1, 55).Value = "Status(Left Over Phase 1 + Phase 2)";
                    worksheet.Cell(currentRow + 1, 56).Value = "Reject Remark(Left Over Phase 1 +Phase 2)";
                    worksheet.Cell(currentRow + 1, 57).Value = "Phase";


                    for (int col = 1; col <= 57; col++)
                    {
                        worksheet.Cell(currentRow, col).Style.Font.Bold = true;
                        worksheet.Cell(currentRow, col).Style.Alignment.Horizontal = XLAlignmentHorizontalValues.Center;
                    }
                    for (int col = 2; col <= 57; col++)
                    {
                        worksheet.Cell(currentRow + 1, col).Style.Font.Bold = true;
                        worksheet.Cell(currentRow, col).Style.Alignment.Horizontal = XLAlignmentHorizontalValues.Center;
                    }

                    currentRow = 2;





                    if (data.Count != 0)
                    {
                        for (int i = 0; i < data.Count; i++)
                        {

                            string dateInput = data[i].work_start_date_phase1;
                            DateTime Dates = new DateTime();
                            string parsedDate = "";
                            if (dateInput != null && dateInput != "")
                            {
                                Dates = DateTime.Parse(dateInput);
                                parsedDate = Dates.ToString("dd MMMM yyyy", CultureInfo.InvariantCulture);

                            }
                            string dateInput2 = data[i].work_end_date_phase1;
                            DateTime Dates2 = new DateTime();
                            string parsedDate2 = "";
                            if (dateInput2 != null && dateInput2 != "")
                            {
                                Dates2 = DateTime.Parse(dateInput2);
                                parsedDate2 = Dates2.ToString("dd MMMM yyyy", CultureInfo.InvariantCulture);
                            }

                            string dateInputpp = data[i].work_start_date_phase2;
                            DateTime Datespp = new DateTime();
                            string parsedDatepp = "";
                            if (dateInputpp != null && dateInputpp != "")
                            {
                                Datespp = DateTime.Parse(dateInputpp);
                                parsedDatepp = Datespp.ToString("dd MMMM yyyy", CultureInfo.InvariantCulture);
                            }
                            string dateInputpp2 = data[i].work_end_date_phase2;
                            DateTime Datespp2 = new DateTime();
                            string parsedDatepp2 = "";
                            if (dateInputpp2 != null && dateInputpp2 != "")
                            {
                                Datespp2 = DateTime.Parse(dateInputpp2);
                                parsedDatepp2 = Datespp2.ToString("dd MMMM yyyy", CultureInfo.InvariantCulture);
                            }

                            string lop1_dateInputpp = data[i].lop1_work_start_date_phase2;
                            DateTime lop1_Datespp = new DateTime();
                            string lop1_parsedDatepp = "";
                            if (lop1_dateInputpp != null && lop1_dateInputpp != "")
                            {
                                lop1_Datespp = DateTime.Parse(lop1_dateInputpp);
                                lop1_parsedDatepp = lop1_Datespp.ToString("dd MMMM yyyy", CultureInfo.InvariantCulture);
                            }
                            string lop1_dateInputpp2 = data[i].lop1_work_end_date_phase2;
                            DateTime lop1_Datespp2 = new DateTime();
                            string lop1_parsedDatepp2 = "";
                            if (lop1_dateInputpp2 != null && lop1_dateInputpp2 != "")
                            {
                                lop1_Datespp2 = DateTime.Parse(lop1_dateInputpp2);
                                lop1_parsedDatepp2 = lop1_Datespp2.ToString("dd MMMM yyyy", CultureInfo.InvariantCulture);
                            }
                            var other_scheme_old = data[i].other_scheme;
                            if (other_scheme_old == null)
                            {
                                other_scheme_old = "";
                            }
                            var other_scheme = data[i].other_schema_name_phase2;
                            if (other_scheme == null)
                            {
                                other_scheme = "";
                            }
                            var lop1_other_scheme = data[i].lop1_other_schema_name_phase2;
                            if (lop1_other_scheme == null)
                            {
                                lop1_other_scheme = "";
                            }
                            var entry_phase = data[i].entry_phase2;
                            if (entry_phase == null)
                            {
                                entry_phase = "";
                            }
                            var approve_phase1 = data[i].approve_phase1;
                            if (approve_phase1 == null || approve_phase1 == "")
                            {
                                var exp = data[i].expenditure_phase1;
                                if (exp == null || exp == "")
                                {
                                    approve_phase1 = "";
                                }
                                else
                                {
                                    approve_phase1 = "At DPMU";
                                }
                            }
                            var approve_phase = data[i].approve_phase2;
                            if (approve_phase == null || approve_phase == "")
                            {
                                approve_phase = "At DPMU";
                            }
                            var phase1_2 = "";
                            var LOP1startdate = data[i].lop1_work_start_date_phase2;
                            var P2startdate = data[i].work_start_date_phase2;
                            if (LOP1startdate == null || LOP1startdate == "")
                            {
                                if (P2startdate == null || P2startdate == "")
                                {
                                    phase1_2 = "";
                                }
                                else
                                {
                                    phase1_2 = "Phase 2";
                                }


                            }
                            else if (P2startdate == null || P2startdate == "")
                            {
                                if (LOP1startdate == null || LOP1startdate == "")
                                {
                                    phase1_2 = "";
                                }
                                else
                                {
                                    phase1_2 = "Left Over Phase 1";
                                }


                            }
                            else
                            {
                                phase1_2 = "Left Over Phase 1 and Phase 2";
                            }

                            var lop1_type_of_work_phase2 = data[i].lop1_type_of_work_phase2;
                            if (lop1_type_of_work_phase2 == "0")
                            {
                                lop1_type_of_work_phase2 = "";
                            }
                            var lop1_status_of_work_phase2 = data[i].lop1_status_of_work_phase2;
                            if (lop1_status_of_work_phase2 == "0")
                            {
                                lop1_status_of_work_phase2 = "";
                            }
                            var lop1_latitude_phase2 = data[i].lop1_latitude_phase2;
                            if (lop1_latitude_phase2 == null)
                            {
                                lop1_latitude_phase2 = "";
                            }
                            var lop1_longitude_phase2 = data[i].lop1_longitude_phase2;
                            if (lop1_longitude_phase2 == null)
                            {
                                lop1_longitude_phase2 = "";
                            }
                            var lop1_department_name_phase2 = data[i].lop1_department_name_phase2;
                            if (lop1_department_name_phase2 == "0")
                            {
                                lop1_department_name_phase2 = "";
                            }
                            var lop1_schema_name_phase2 = data[i].lop1_schema_name_phase2;
                            if (lop1_schema_name_phase2 == "0")
                            {
                                lop1_schema_name_phase2 = "";
                            }
                            var lop1_expenditure_phase2 = data[i].lop1_expenditure_phase2;
                            if (lop1_expenditure_phase2 == null)
                            {
                                lop1_expenditure_phase2 = "";
                            }
                            var lop1_remark_phase2 = data[i].lop1_remark_phase2;
                            if (lop1_remark_phase2 == null)
                            {
                                lop1_remark_phase2 = "";
                            }


                            var type_of_work_phase2 = data[i].type_of_work_phase2;
                            if (type_of_work_phase2 == "0")
                            {

                                type_of_work_phase2 = "";
                            }
                            var status_of_work_phase2 = data[i].status_of_work_phase2;
                            if (status_of_work_phase2 == "0")
                            {

                                status_of_work_phase2 = "";
                            }

                            var latitude_phase2 = data[i].latitude_phase2;
                            if (latitude_phase2 == null)
                            {

                                latitude_phase2 = "";
                            }
                            var longitude_phase2 = data[i].longitude_phase2;
                            if (longitude_phase2 == null)
                            {

                                longitude_phase2 = "";
                            }
                            var department_name_phase2 = data[i].department_name_phase2;
                            if (department_name_phase2 == "0")
                            {

                                department_name_phase2 = "";
                            }
                            var schema_name_phase2 = data[i].schema_name_phase2;
                            if (schema_name_phase2 == "0")
                            {

                                schema_name_phase2 = "";
                            }
                            var expenditure_phase2 = data[i].expenditure_phase2;
                            if (expenditure_phase2 == null)
                            {

                                expenditure_phase2 = "";
                            }
                            var remark_phase2 = data[i].remark_phase2;
                            if (remark_phase2 == null)
                            {

                                remark_phase2 = "";
                            }

                            if (entry_phase == "phase2")
                            {
                                currentRow++;

                                worksheet.Cell(currentRow, 1).Value = data[i].from_table;
                                worksheet.Cell(currentRow, 2).Value = data[i].state;
                                worksheet.Cell(currentRow, 3).Value = data[i].district;
                                worksheet.Cell(currentRow, 4).Value = data[i].block;
                                worksheet.Cell(currentRow, 5).Value = data[i].gp;
                                worksheet.Cell(currentRow, 6).Value = data[i].gp_center_point_latitude;
                                worksheet.Cell(currentRow, 7).Value = data[i].gp_center_point_longitude;
                                worksheet.Cell(currentRow, 8).Value = data[i].village_name;
                                worksheet.Cell(currentRow, 9).Value = data[i].financial_year;
                                worksheet.Cell(currentRow, 10).Value = data[i].type_of_supply_side_structure;
                                worksheet.Cell(currentRow, 11).Value = data[i].gw_recharge_or_effective_storage;
                                worksheet.Cell(currentRow, 12).Value = data[i].department_name;
                                worksheet.Cell(currentRow, 13).Value = data[i].scheme_name_possible_funding_source;
                                worksheet.Cell(currentRow, 14).Value = other_scheme_old;
                                worksheet.Cell(currentRow, 15).Value = data[i].name_of_structure;
                                worksheet.Cell(currentRow, 16).Value = data[i].latitude;
                                worksheet.Cell(currentRow, 17).Value = data[i].longitude;
                                worksheet.Cell(currentRow, 18).Value = data[i].total_approximate_estimated_cost;
                                worksheet.Cell(currentRow, 19).Value = parsedDate;
                                worksheet.Cell(currentRow, 20).Value = parsedDate2;
                                worksheet.Cell(currentRow, 21).Value = data[i].type_of_work_phase1;
                                worksheet.Cell(currentRow, 22).Value = data[i].status_of_work_phase1;
                                worksheet.Cell(currentRow, 23).Value = data[i].latitude_phase1;
                                worksheet.Cell(currentRow, 24).Value = data[i].longitude_phase1;
                                worksheet.Cell(currentRow, 25).Value = data[i].department_name_phase1;
                                worksheet.Cell(currentRow, 26).Value = data[i].schema_name_phase1;
                                worksheet.Cell(currentRow, 27).Value = data[i].other_schema_name_phase1;
                                worksheet.Cell(currentRow, 28).Value = data[i].expenditure_phase1;
                                worksheet.Cell(currentRow, 29).Value = data[i].remark_phase1;
                                worksheet.Cell(currentRow, 30).Value = approve_phase1;
                                worksheet.Cell(currentRow, 31).Value = data[i].reject_phase1;
                                worksheet.Cell(currentRow, 32).Value = data[i].entry_phase1;

                                worksheet.Cell(currentRow, 33).Value = lop1_parsedDatepp;
                                worksheet.Cell(currentRow, 34).Value = lop1_parsedDatepp2;
                                worksheet.Cell(currentRow, 35).Value = lop1_type_of_work_phase2;
                                worksheet.Cell(currentRow, 36).Value = lop1_status_of_work_phase2;
                                worksheet.Cell(currentRow, 37).Value = lop1_latitude_phase2;
                                worksheet.Cell(currentRow, 38).Value = lop1_longitude_phase2;
                                worksheet.Cell(currentRow, 39).Value = lop1_department_name_phase2;
                                worksheet.Cell(currentRow, 40).Value = lop1_schema_name_phase2;
                                worksheet.Cell(currentRow, 41).Value = lop1_other_scheme;
                                worksheet.Cell(currentRow, 42).Value = lop1_expenditure_phase2;
                                worksheet.Cell(currentRow, 43).Value = lop1_remark_phase2;

                                worksheet.Cell(currentRow, 44).Value = parsedDatepp;
                                worksheet.Cell(currentRow, 45).Value = parsedDatepp2;
                                worksheet.Cell(currentRow, 46).Value = type_of_work_phase2;
                                worksheet.Cell(currentRow, 47).Value = status_of_work_phase2;
                                worksheet.Cell(currentRow, 48).Value = latitude_phase2;
                                worksheet.Cell(currentRow, 49).Value = longitude_phase2;
                                worksheet.Cell(currentRow, 50).Value = department_name_phase2;
                                worksheet.Cell(currentRow, 51).Value = schema_name_phase2;
                                worksheet.Cell(currentRow, 52).Value = other_scheme;
                                worksheet.Cell(currentRow, 53).Value = expenditure_phase2;
                                worksheet.Cell(currentRow, 54).Value = remark_phase2;
                                worksheet.Cell(currentRow, 55).Value = approve_phase;
                                worksheet.Cell(currentRow, 56).Value = data[i].reject_phase2;
                                worksheet.Cell(currentRow, 57).Value = phase1_2;

                            }
                            else
                            {
                                currentRow++;

                                worksheet.Cell(currentRow, 1).Value = data[i].from_table;
                                worksheet.Cell(currentRow, 2).Value = data[i].state;
                                worksheet.Cell(currentRow, 3).Value = data[i].district;
                                worksheet.Cell(currentRow, 4).Value = data[i].block;
                                worksheet.Cell(currentRow, 5).Value = data[i].gp;
                                worksheet.Cell(currentRow, 6).Value = data[i].gp_center_point_latitude;
                                worksheet.Cell(currentRow, 7).Value = data[i].gp_center_point_longitude;
                                worksheet.Cell(currentRow, 8).Value = data[i].village_name;
                                worksheet.Cell(currentRow, 9).Value = data[i].financial_year;
                                worksheet.Cell(currentRow, 10).Value = data[i].type_of_supply_side_structure;
                                worksheet.Cell(currentRow, 11).Value = data[i].gw_recharge_or_effective_storage;
                                worksheet.Cell(currentRow, 12).Value = data[i].department_name;
                                worksheet.Cell(currentRow, 13).Value = data[i].scheme_name_possible_funding_source;
                                worksheet.Cell(currentRow, 14).Value = other_scheme_old;
                                worksheet.Cell(currentRow, 15).Value = data[i].name_of_structure;
                                worksheet.Cell(currentRow, 16).Value = data[i].latitude;
                                worksheet.Cell(currentRow, 17).Value = data[i].longitude;
                                worksheet.Cell(currentRow, 18).Value = data[i].total_approximate_estimated_cost;
                                worksheet.Cell(currentRow, 19).Value = parsedDate;
                                worksheet.Cell(currentRow, 20).Value = parsedDate2;
                                worksheet.Cell(currentRow, 21).Value = data[i].type_of_work_phase1;
                                worksheet.Cell(currentRow, 22).Value = data[i].status_of_work_phase1;
                                worksheet.Cell(currentRow, 23).Value = data[i].latitude_phase1;
                                worksheet.Cell(currentRow, 24).Value = data[i].longitude_phase1;
                                worksheet.Cell(currentRow, 25).Value = data[i].department_name_phase1;
                                worksheet.Cell(currentRow, 26).Value = data[i].schema_name_phase1;
                                worksheet.Cell(currentRow, 27).Value = data[i].other_schema_name_phase1;
                                worksheet.Cell(currentRow, 28).Value = data[i].expenditure_phase1;
                                worksheet.Cell(currentRow, 29).Value = data[i].remark_phase1;
                                worksheet.Cell(currentRow, 30).Value = approve_phase1;
                                worksheet.Cell(currentRow, 31).Value = data[i].reject_phase1;
                                worksheet.Cell(currentRow, 32).Value = data[i].entry_phase1;

                                worksheet.Cell(currentRow, 33).Value = lop1_parsedDatepp;
                                worksheet.Cell(currentRow, 34).Value = lop1_parsedDatepp2;
                                worksheet.Cell(currentRow, 35).Value = lop1_type_of_work_phase2;
                                worksheet.Cell(currentRow, 36).Value = lop1_status_of_work_phase2;
                                worksheet.Cell(currentRow, 37).Value = lop1_latitude_phase2;
                                worksheet.Cell(currentRow, 38).Value = lop1_longitude_phase2;
                                worksheet.Cell(currentRow, 39).Value = lop1_department_name_phase2;
                                worksheet.Cell(currentRow, 40).Value = lop1_schema_name_phase2;
                                worksheet.Cell(currentRow, 41).Value = lop1_other_scheme;
                                worksheet.Cell(currentRow, 42).Value = lop1_expenditure_phase2;
                                worksheet.Cell(currentRow, 43).Value = lop1_remark_phase2;

                                worksheet.Cell(currentRow, 44).Value = parsedDatepp;
                                worksheet.Cell(currentRow, 45).Value = parsedDatepp2;
                                worksheet.Cell(currentRow, 46).Value = type_of_work_phase2;
                                worksheet.Cell(currentRow, 47).Value = status_of_work_phase2;
                                worksheet.Cell(currentRow, 48).Value = latitude_phase2;
                                worksheet.Cell(currentRow, 49).Value = longitude_phase2;
                                worksheet.Cell(currentRow, 50).Value = department_name_phase2;
                                worksheet.Cell(currentRow, 51).Value = schema_name_phase2;
                                worksheet.Cell(currentRow, 52).Value = other_scheme;
                                worksheet.Cell(currentRow, 53).Value = expenditure_phase2;
                                worksheet.Cell(currentRow, 54).Value = remark_phase2;
                                worksheet.Cell(currentRow, 55).Value = "";
                                worksheet.Cell(currentRow, 56).Value = "";
                                worksheet.Cell(currentRow, 57).Value = "";




                            }

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


                    }
                    using (var stream = new MemoryStream())
                    {
                        workbook.SaveAs(stream);
                        var content = stream.ToArray();
                        var exeState = state1;
                        var exeDist = district1;
                        var exeBlock = block01;
                        var exeGram = gp1;
                        var xls = "csv";

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



                        var aa = "DLI-3_Excel_Supply Side_Phase2" + '-' + exeState + exeDist + exeBlock + exeGram + '.' + xls;


                        return File(
                            content,
                            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                            aa);
                    }

                }

            }
            catch (Exception ex)
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);

            }
        }

        public ActionResult Mapview_supplysidePhase2(string id)
        {
            var ID = Convert.ToInt32(id);
            var Details = ABE.obj_supplyside_dli3_new2025.Where(x => x.id == ID).FirstOrDefault();
            if (Details != null)
            {
                var latitude = "0";
                var longitude = "0";
                if (Details.latitude_phase2 == null || Details.latitude_phase2 == "")
                {
                    latitude = Details.lop1_latitude_phase2;
                    longitude = Details.lop1_longitude_phase2;

                }
                else if (Details.lop1_latitude_phase2 == null || Details.lop1_latitude_phase2 == "")
                {
                    latitude = Details.latitude_phase2;
                    longitude = Details.longitude_phase2;

                }
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
        public ActionResult p2supply_statereport()
        {
            var Year = "";
            var Month = "";
            if (Session["year"] != null)
            {
                Year = Session["year"].ToString();
            }
            else
            {
                Year = "0";
            }
            if (Session["month"] != null)
            {
                Month = Session["month"].ToString();
            }
            else
            {

                Month = "0";
            }
            try
            {
                string[] states = { "Gujarat_24", "Haryana_6", "Karnataka_29", "Madhya Pradesh_23", "Maharashtra_27", "Rajasthan_8", "Uttar Pradesh_9" };
                List<vw_dli3_lop_phase2_supply_report_24> all_data = new List<vw_dli3_lop_phase2_supply_report_24>();
                List<vw_dli3_lop_phase2_supply_report_24> ddetails = new List<vw_dli3_lop_phase2_supply_report_24>();

                foreach (var itemstate in states)
                {
                    string State = itemstate;

                    if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null)
                    {
                        ddetails = ABE.obj_vw_dli3_lop_phase2_supply_report_24.Where(x => x.state == State && x.year == Year).OrderByDescending(x => x.id).ToList();
                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        ddetails = ABE.obj_vw_dli3_lop_phase2_supply_report_24.Where(x => x.state == State).OrderByDescending(x => x.id).ToList();
                    }


                    vw_dli3_lop_phase2_supply_report_24 data = new vw_dli3_lop_phase2_supply_report_24();
                    int ataljal_gp = 0;
                    int gp_wsp_submitted = 0;
                    int lop_struct_claimed = 0;
                    double lop_conv_claim = 0;
                    int phase2_struct_claimed = 0;
                    double phase2_conv_claim = 0;
                    int gp_claim_lop_phase2 = 0;
                    int total_struct_claim = 0;
                    double total_conv_claim = 0;
                    double dpmu_conv_claim = 0;
                    double spmu_submit_claim = 0;
                    double approved_claim = 0;
                    double rejected_claim = 0;

                    foreach (var item in ddetails)
                    {
                        ataljal_gp += item.ataljal_gp;
                        gp_wsp_submitted += item.gp_wsp_submitted;
                        lop_struct_claimed += item.lop_struct_claimed;
                        lop_conv_claim += item.lop_conv_claim;
                        phase2_struct_claimed += item.phase2_struct_claimed;
                        phase2_conv_claim += item.phase2_conv_claim;
                        gp_claim_lop_phase2 += item.gp_claim_lop_phase2;
                        total_struct_claim += item.total_struct_claim;
                        total_conv_claim += item.total_conv_claim;
                        dpmu_conv_claim += item.dpmu_conv_claim;
                        spmu_submit_claim += item.spmu_submit_claim;
                        approved_claim += item.approved_claim;
                        rejected_claim += item.rejected_claim;

                    }
                    data.state = State;
                    data.ataljal_gp = ataljal_gp;
                    data.gp_wsp_submitted = gp_wsp_submitted;
                    data.lop_struct_claimed = lop_struct_claimed;
                    data.lop_conv_claim = lop_conv_claim;
                    data.phase2_struct_claimed = phase2_struct_claimed;
                    data.phase2_conv_claim = phase2_conv_claim;
                    data.gp_claim_lop_phase2 = gp_claim_lop_phase2;
                    data.total_struct_claim = total_struct_claim;
                    data.total_conv_claim = total_conv_claim;
                    data.dpmu_conv_claim = dpmu_conv_claim;
                    data.spmu_submit_claim = spmu_submit_claim;
                    data.approved_claim = approved_claim;
                    data.rejected_claim = rejected_claim;
                    all_data.Add(data);

                }

                var jsonResult = Json(all_data, JsonRequestBehavior.AllowGet);
                jsonResult.MaxJsonLength = int.MaxValue;
                return jsonResult;

            }
            catch (Exception Ex)
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult p2supply_report_district()
        {
            var Year = "";
            var State = "";
            if (Session["gstate"] != null)
            {
                State = Session["gstate"].ToString();
            }
            else
            {
                State = "0";
            }
            if (Session["year"] != null)
            {
                Year = Session["year"].ToString();
            }
            else
            {
                Year = "0";
            }
            try
            {
                var dist = ABE.obj_master_list_gp_wsp.Where(x => x.state_name == State).Distinct().GroupBy(x => x.district_name).ToList();
                List<vw_dli3_lop_phase2_supply_report_24> all_data = new List<vw_dli3_lop_phase2_supply_report_24>();
                List<vw_dli3_lop_phase2_supply_report_24> ddetails = new List<vw_dli3_lop_phase2_supply_report_24>();

                if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null)
                {
                    ddetails = ABE.obj_vw_dli3_lop_phase2_supply_report_24.Where(x => x.state == State && x.year == Year).OrderByDescending(x => x.id).ToList();
                }
                else if (State != "0" && State != "" && State != null)
                {
                    ddetails = ABE.obj_vw_dli3_lop_phase2_supply_report_24.Where(x => x.state == State).OrderByDescending(x => x.id).ToList();
                }

                foreach (var itemdist in dist)
                {
                    string district = itemdist.Key;
                    var dddd = ddetails.Where(x => x.district == district).ToList();
                    vw_dli3_lop_phase2_supply_report_24 data = new vw_dli3_lop_phase2_supply_report_24();
                    int ataljal_gp = 0;
                    int gp_wsp_submitted = 0;
                    int lop_struct_claimed = 0;
                    double lop_conv_claim = 0;
                    int phase2_struct_claimed = 0;
                    double phase2_conv_claim = 0;
                    int gp_claim_lop_phase2 = 0;
                    int total_struct_claim = 0;
                    double total_conv_claim = 0;
                    double dpmu_conv_claim = 0;
                    double spmu_submit_claim = 0;
                    double approved_claim = 0;
                    double rejected_claim = 0;

                    foreach (var item in dddd)
                    {
                        ataljal_gp += item.ataljal_gp;
                        gp_wsp_submitted += item.gp_wsp_submitted;
                        lop_struct_claimed += item.lop_struct_claimed;
                        lop_conv_claim += item.lop_conv_claim;
                        phase2_struct_claimed += item.phase2_struct_claimed;
                        phase2_conv_claim += item.phase2_conv_claim;
                        gp_claim_lop_phase2 += item.gp_claim_lop_phase2;
                        total_struct_claim += item.total_struct_claim;
                        total_conv_claim += item.total_conv_claim;
                        dpmu_conv_claim += item.dpmu_conv_claim;
                        spmu_submit_claim += item.spmu_submit_claim;
                        approved_claim += item.approved_claim;
                        rejected_claim += item.rejected_claim;

                    }
                    data.state = district;
                    data.ataljal_gp = ataljal_gp;
                    data.gp_wsp_submitted = gp_wsp_submitted;
                    data.lop_struct_claimed = lop_struct_claimed;
                    data.lop_conv_claim = lop_conv_claim;
                    data.phase2_struct_claimed = phase2_struct_claimed;
                    data.phase2_conv_claim = phase2_conv_claim;
                    data.gp_claim_lop_phase2 = gp_claim_lop_phase2;
                    data.total_struct_claim = total_struct_claim;
                    data.total_conv_claim = total_conv_claim;
                    data.dpmu_conv_claim = dpmu_conv_claim;
                    data.spmu_submit_claim = spmu_submit_claim;
                    data.approved_claim = approved_claim;
                    data.rejected_claim = rejected_claim;
                    all_data.Add(data);

                }
                var jsonResult = Json(all_data, JsonRequestBehavior.AllowGet);
                jsonResult.MaxJsonLength = int.MaxValue;
                return jsonResult;

            }
            catch (Exception Ex)
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult p2supply_report_block()
        {
            var Year = "";
            var State = "";

            if (Session["gstate"] != null)
            {
                State = Session["gstate"].ToString();
            }
            else
            {
                State = "0";
            }

            if (Session["year"] != null)
            {
                Year = Session["year"].ToString();
            }
            else
            {
                Year = "0";
            }
            try
            {
                var dist = ABE.obj_abhy_block_gp_area_info.Where(x => x.state_name == State).Distinct().GroupBy(x => x.district_name).ToList();
                List<vw_dli3_lop_phase2_supply_report_24> all_data = new List<vw_dli3_lop_phase2_supply_report_24>();
                List<vw_dli3_lop_phase2_supply_report_24> ddetails = new List<vw_dli3_lop_phase2_supply_report_24>();

                if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null)
                {
                    ddetails = ABE.obj_vw_dli3_lop_phase2_supply_report_24.Where(x => x.state == State && x.year == Year).OrderByDescending(x => x.id).ToList();
                }
                else if (State != "0" && State != "" && State != null)
                {
                    ddetails = ABE.obj_vw_dli3_lop_phase2_supply_report_24.Where(x => x.state == State).OrderByDescending(x => x.id).ToList();
                }

                foreach (var itemdist in dist)
                {
                    string district_name = itemdist.Key;
                    var block = ABE.obj_master_list_gp_wsp.Where(x => x.district_name == district_name).Distinct().GroupBy(x => x.block_name).ToList();
                    foreach (var itemblock in block)
                    {
                        string district = itemblock.Key;
                        var dddd = ddetails.Where(x => x.block == district).ToList();
                        vw_dli3_lop_phase2_supply_report_24 data = new vw_dli3_lop_phase2_supply_report_24();
                        int ataljal_gp = 0;
                        int gp_wsp_submitted = 0;
                        int lop_struct_claimed = 0;
                        double lop_conv_claim = 0;
                        int phase2_struct_claimed = 0;
                        double phase2_conv_claim = 0;
                        int gp_claim_lop_phase2 = 0;
                        int total_struct_claim = 0;
                        double total_conv_claim = 0;
                        double dpmu_conv_claim = 0;
                        double spmu_submit_claim = 0;
                        double approved_claim = 0;
                        double rejected_claim = 0;

                        foreach (var item in dddd)
                        {
                            ataljal_gp += item.ataljal_gp;
                            gp_wsp_submitted += item.gp_wsp_submitted;
                            lop_struct_claimed += item.lop_struct_claimed;
                            lop_conv_claim += item.lop_conv_claim;
                            phase2_struct_claimed += item.phase2_struct_claimed;
                            phase2_conv_claim += item.phase2_conv_claim;
                            gp_claim_lop_phase2 += item.gp_claim_lop_phase2;
                            total_struct_claim += item.total_struct_claim;
                            total_conv_claim += item.total_conv_claim;
                            dpmu_conv_claim += item.dpmu_conv_claim;
                            spmu_submit_claim += item.spmu_submit_claim;
                            approved_claim += item.approved_claim;
                            rejected_claim += item.rejected_claim;

                        }
                        data.block = district;
                        data.district = district_name;
                        data.ataljal_gp = ataljal_gp;
                        data.gp_wsp_submitted = gp_wsp_submitted;
                        data.lop_struct_claimed = lop_struct_claimed;
                        data.lop_conv_claim = lop_conv_claim;
                        data.phase2_struct_claimed = phase2_struct_claimed;
                        data.phase2_conv_claim = phase2_conv_claim;
                        data.gp_claim_lop_phase2 = gp_claim_lop_phase2;
                        data.total_struct_claim = total_struct_claim;
                        data.total_conv_claim = total_conv_claim;
                        data.dpmu_conv_claim = dpmu_conv_claim;
                        data.spmu_submit_claim = spmu_submit_claim;
                        data.approved_claim = approved_claim;
                        data.rejected_claim = rejected_claim;
                        all_data.Add(data);
                    }

                }
                var jsonResult = Json(all_data, JsonRequestBehavior.AllowGet);
                jsonResult.MaxJsonLength = int.MaxValue;
                return jsonResult;

            }
            catch (Exception Ex)
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }


        [HttpPost]
        public ActionResult supply_report_districtblockp2()
        {
            var Year = "";
            var State = "";
            var Dist = "";

            if (Session["gstate"] != null)
            {
                State = Session["gstate"].ToString();
            }
            else
            {
                State = "0";
            }
            if (Session["gdist"] != null)
            {
                Dist = Session["gdist"].ToString();
            }
            else
            {
                Dist = "0";
            }

            if (Session["year"] != null)
            {
                Year = Session["year"].ToString();
            }
            else
            {
                Year = "0";
            }
            try
            {
                var dist = ABE.obj_master_list_gp_wsp.Where(x => x.state_name == State && x.district_name == Dist).Distinct().GroupBy(x => x.block_name).ToList();


                List<vw_dli3_lop_phase2_supply_report_24> all_data = new List<vw_dli3_lop_phase2_supply_report_24>();
                List<vw_dli3_lop_phase2_supply_report_24> ddetails = new List<vw_dli3_lop_phase2_supply_report_24>();
                if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null)
                {
                    ddetails = ABE.obj_vw_dli3_lop_phase2_supply_report_24.Where(x => x.state == State && x.district == Dist && x.year == Year).OrderByDescending(x => x.id).ToList();
                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                {
                    ddetails = ABE.obj_vw_dli3_lop_phase2_supply_report_24.Where(x => x.state == State && x.district == Dist).OrderByDescending(x => x.id).ToList();
                }

                foreach (var itemdist in dist)
                {
                    string district = itemdist.Key;
                    var dddd = ddetails.Where(x => x.block == district).ToList();
                    vw_dli3_lop_phase2_supply_report_24 data = new vw_dli3_lop_phase2_supply_report_24();
                    int ataljal_gp = 0;
                    int gp_wsp_submitted = 0;
                    int lop_struct_claimed = 0;
                    double lop_conv_claim = 0;
                    int phase2_struct_claimed = 0;
                    double phase2_conv_claim = 0;
                    int gp_claim_lop_phase2 = 0;
                    int total_struct_claim = 0;
                    double total_conv_claim = 0;
                    double dpmu_conv_claim = 0;
                    double spmu_submit_claim = 0;
                    double approved_claim = 0;
                    double rejected_claim = 0;

                    foreach (var item in dddd)
                    {
                        ataljal_gp += item.ataljal_gp;
                        gp_wsp_submitted += item.gp_wsp_submitted;
                        lop_struct_claimed += item.lop_struct_claimed;
                        lop_conv_claim += item.lop_conv_claim;
                        phase2_struct_claimed += item.phase2_struct_claimed;
                        phase2_conv_claim += item.phase2_conv_claim;
                        gp_claim_lop_phase2 += item.gp_claim_lop_phase2;
                        total_struct_claim += item.total_struct_claim;
                        total_conv_claim += item.total_conv_claim;
                        dpmu_conv_claim += item.dpmu_conv_claim;
                        spmu_submit_claim += item.spmu_submit_claim;
                        approved_claim += item.approved_claim;
                        rejected_claim += item.rejected_claim;

                    }
                    data.block = district;
                    data.ataljal_gp = ataljal_gp;
                    data.gp_wsp_submitted = gp_wsp_submitted;
                    data.lop_struct_claimed = lop_struct_claimed;
                    data.lop_conv_claim = lop_conv_claim;
                    data.phase2_struct_claimed = phase2_struct_claimed;
                    data.phase2_conv_claim = phase2_conv_claim;
                    data.gp_claim_lop_phase2 = gp_claim_lop_phase2;
                    data.total_struct_claim = total_struct_claim;
                    data.total_conv_claim = total_conv_claim;
                    data.dpmu_conv_claim = dpmu_conv_claim;
                    data.spmu_submit_claim = spmu_submit_claim;
                    data.approved_claim = approved_claim;
                    data.rejected_claim = rejected_claim;
                    all_data.Add(data);

                }
                var jsonResult = Json(all_data, JsonRequestBehavior.AllowGet);
                jsonResult.MaxJsonLength = int.MaxValue;
                return jsonResult;

            }
            catch (Exception Ex)
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }


        public ActionResult Get_new_SupplySideDataForDLI3()
        {
            try
            {
                var data = ABE.obj_supplyside_dli3_new2025_dth.Where(x => x.year_subsidey_phase1 != null && x.year_subsidey_phase1 != "").ToList();

                supplyside_dli3_new2025_dth obj = new supplyside_dli3_new2025_dth();
                List<supplyside_dli3_new_k2025> ObjList = new List<supplyside_dli3_new_k2025>();
                foreach (var item in data)
                {
                    string state = item.state;
                    string district = item.district;
                    string block = item.block;
                    string gp = item.gp;
                    var gp_center_point_latitude = item.gp_center_point_latitude;
                    var gp_center_point_longitude = item.gp_center_point_longitude;
                    var village_name = item.village_name;
                    var financial_year = item.financial_year;
                    var type_of_supply_side_structure = item.type_of_supply_side_structure;
                    var gw_recharge_or_effective_storage = item.gw_recharge_or_effective_storage;
                    var department_name = item.department_name;
                    var scheme_name_possible_funding_source = item.scheme_name_possible_funding_source;
                    var other_scheme = item.other_scheme;
                    var name_of_structure = item.name_of_structure;
                    var latitude = item.latitude;
                    var longitude = item.longitude;
                    var total_approximate_estimated_cost = item.total_approximate_estimated_cost;



                    ObjList = ABE.obj_supplyside_dli3_new_k2025.Where(x => x.state == state
                        && x.district == district && x.block == block && x.gp == gp && x.gp_center_point_latitude == gp_center_point_latitude && x.gp_center_point_longitude == gp_center_point_longitude
                    && x.village_name == village_name && x.financial_year == financial_year && x.type_of_supply_side_structure == type_of_supply_side_structure
                    && x.gw_recharge_or_effective_storage == gw_recharge_or_effective_storage && x.department_name == department_name && x.scheme_name_possible_funding_source == scheme_name_possible_funding_source
                    && x.other_scheme == other_scheme && x.name_of_structure == name_of_structure && x.latitude == latitude && x.longitude == longitude).ToList();


                    if (ObjList.Count == 0)
                    {
                        item.ischeck = "1";
                        item.total_rows = "0";
                        ABE.Entry(item).State = EntityState.Modified;
                        ABE.SaveChanges();
                    }
                    else if (ObjList.Count > 1)
                    {
                        item.ischeck = "1";
                        item.total_rows = ObjList.Count.ToString();
                        ABE.Entry(item).State = EntityState.Modified;
                        ABE.SaveChanges();
                    }
                    else
                    {

                        ObjList[0].state = item.state;
                        ObjList[0].district = item.district;
                        ObjList[0].block = item.block;
                        ObjList[0].gp = item.gp;
                        ObjList[0].gp_center_point_latitude = item.gp_center_point_latitude;
                        ObjList[0].gp_center_point_longitude = item.gp_center_point_longitude;
                        ObjList[0].village_name = item.village_name;
                        ObjList[0].financial_year = item.financial_year;
                        ObjList[0].type_of_supply_side_structure = item.type_of_supply_side_structure;
                        ObjList[0].gw_recharge_or_effective_storage = item.gw_recharge_or_effective_storage;
                        ObjList[0].department_name = item.department_name;
                        ObjList[0].scheme_name_possible_funding_source = item.scheme_name_possible_funding_source;
                        ObjList[0].other_scheme = item.other_scheme;
                        ObjList[0].name_of_structure = item.name_of_structure;
                        ObjList[0].latitude = item.latitude;
                        ObjList[0].longitude = item.longitude;
                        ObjList[0].total_approximate_estimated_cost = item.total_approximate_estimated_cost;
                        ObjList[0].year_subsidey_phase1 = item.year_subsidey_phase1;
                        ObjList[0].work_start_date_phase1 = item.work_start_date_phase1;
                        ObjList[0].work_end_date_phase1 = item.work_end_date_phase1;
                        ObjList[0].type_of_work_phase1 = item.type_of_supply_side_structure;
                        ObjList[0].status_of_work_phase1 = item.status_of_work_phase1;
                        ObjList[0].latitude_phase1 = item.latitude_phase1;
                        ObjList[0].longitude_phase1 = item.longitude_phase1;
                        ObjList[0].department_name_phase1 = item.department_name_phase1;
                        ObjList[0].schema_name_phase1 = item.schema_name_phase1;
                        ObjList[0].other_schema_name_phase1 = item.other_schema_name_phase1;
                        ObjList[0].expenditure_phase1 = item.expenditure_phase1;
                        ObjList[0].remark_phase1 = item.remark_phase1;
                        ObjList[0].approve_phase1 = item.approve_phase1;
                        ObjList[0].reject_phase1 = item.remark_phase1;
                        ObjList[0].entry_phase1 = item.entry_phase1;
                        ObjList[0].entry_time_phase1 = item.entry_time_phase1;

                        ABE.Entry(ObjList).State = EntityState.Modified;
                        ABE.SaveChanges();

                        item.ischeck = "1";
                        item.total_rows = ObjList.Count.ToString();
                        item.newtablepk = ObjList[0].id.ToString();
                        ABE.Entry(item).State = EntityState.Modified;
                        ABE.SaveChanges();
                    }
                }
                return Json("d");
            }
            catch (Exception Ex)
            {
                abhy_tbl_error error_data = new abhy_tbl_error();
                error_data.error_test = Ex.Message;
                error_data.error_count = "1";
                ABE.obj_abhy_tbl_error.Add(error_data);
                ABE.SaveChanges();
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }

        }
    }
}