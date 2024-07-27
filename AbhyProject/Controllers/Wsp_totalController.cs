using AbhyProject.Classes;
using AbhyProject.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;

namespace AbhyProject.Controllers
{
    public class Wsp_totalController : Controller
    {
        AbhyEntity ABE = new AbhyEntity();
        // GET: Wsp_total
        public ActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public ActionResult wsp_View()
        {
            if (Session["UserId"] != null)
            {
                List<TblAreaUnderLine_By> model = ABE.objTblAreaUnderLine_By.ToList();
                ViewBag.Ddl = new SelectList(model.Select(m => m.AreaunderlinedBy_Name).Distinct());
                List<abhy_supply1> model1 = ABE.objabhy_supply1.Distinct().ToList();
                ViewBag.supply = new SelectList(model1.Select(c => c.activity).Distinct());
                List<abhy_demand1> model2 = ABE.objabhy_demand1.Distinct().ToList();
                ViewBag.demand = new SelectList(model2.Select(c => c.activity).Distinct());
                return View();
            }
            else
            {

                Session["Wsp_viewPage"] = "Wsp_ViewPage";
                return RedirectToAction("MisLogin", "WSP");
            }
        }
        [HttpPost]
        public ActionResult getwspJsondata()
        {
            List<abhy_states> slist = new List<abhy_states>();
            List<abhy_districts> dlist = new List<abhy_districts>();
            List<abhy_blocks> mlist = new List<abhy_blocks>();
            List<abhy_grampanchayat> plist = new List<abhy_grampanchayat>();
            List<abhy_villages> vlist = new List<abhy_villages>();
            abhy_states sobj = new abhy_states();
            abhy_districts dobj = new abhy_districts();
            abhy_blocks mobj = new abhy_blocks();
            abhy_grampanchayat pobj = new abhy_grampanchayat();
            abhy_villages vobj = new abhy_villages();
            var Sdata = ABE.objabhy_states.ToList();
            var Ddata = ABE.objabhy_districts.ToList();
            var Mdata = ABE.objabhy_blocks.ToList();
            var GPdata = ABE.objabhy_grampanchayat.ToList();


            if (Sdata != null)
            {
                slist = new List<abhy_states>();
                var states = Sdata.Where(m => m.sid != 0).Distinct().ToArray();
                foreach (var state in states)
                {
                    sobj = new abhy_states();
                    sobj.sid = state.sid;
                    sobj.statename = state.statename;
                    dlist = new List<abhy_districts>();
                    var districts = Ddata.Where(m => m.sid != 0 && m.did != 0 && m.sid == state.sid).Distinct().ToArray();
                    foreach (var district in districts)
                    {
                        dobj = new abhy_districts();
                        dobj.sid = district.sid;
                        dobj.did = district.did;
                        dobj.district_name = district.district_name;
                        mlist = new List<abhy_blocks>();
                        var Mandals = Mdata.Where(m => m.sid != 0 && m.did != 0 && m.bid != 0 && m.sid == state.sid && m.did == district.did).Distinct().ToArray();
                        foreach (var mandal in Mandals)
                        {
                            mobj = new abhy_blocks();
                            mobj.sid = mandal.sid;
                            mobj.did = mandal.did;
                            mobj.bid = mandal.bid;
                            mobj.block_name = mandal.block_name;
                            plist = new List<abhy_grampanchayat>();
                            var Panchayats = GPdata.Where(m => m.sid != 0 && m.did != 0 && m.bid != 0 && m.gpid != 0 && m.sid == state.sid && m.did == district.did && m.bid == mandal.bid).Distinct().ToArray();
                            foreach (var Panchayat in Panchayats)
                            {
                                pobj = new abhy_grampanchayat();
                                pobj.sid = Panchayat.sid;
                                pobj.did = Panchayat.did;
                                pobj.bid = Panchayat.bid;
                                pobj.gpid = Panchayat.gpid;
                                pobj.gpname = Panchayat.gpname;

                                plist.Add(pobj);
                            }
                            mobj.abhy_grampanchayat = plist;
                            mlist.Add(mobj);
                        }

                        dobj.abhy_blocks = mlist;
                        dlist.Add(dobj);
                    }
                    sobj.abhy_districts = dlist;
                    slist.Add(sobj);
                }
            }
            JavaScriptSerializer js = new JavaScriptSerializer();
            js.MaxJsonLength = 2147483647;
            ViewBag.Data = js.Serialize(slist);

            var data4 = ViewBag.Data;
            return Json(data4, JsonRequestBehavior.AllowGet);
            // return View();
        }

        [HttpPost]
        public ActionResult getareaunderlinedby(string AreaUnderLinedBy)
        {
            try
            {
                //if (Session["UserId"].ToString() != "" && Session["UserId"].ToString() != null)
                //{
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
                //}
                //else
                //{
                //    return View("wsp_View");
                //}

            }
            catch (Exception ex)
            {
                return View("wsp_View");
            }
        }
        [HttpPost]
        public ActionResult getgpsleveldata(string state, string district, string block, string gp, string insertid1)
        {
            try
            {
                ViewBag.data = null;
                if (insertid1 == "0")
                {
                    if (state != "Select State" && district == "Select District" && block == "Select Block" && gp == "Select Gram Panchayat")
                    {
                        var data = ABE.objabhystates_completecensusdata_new.Where(d => d.state_name == state).Distinct().ToList();
                        ViewBag.data = data;
                    }
                    else if (state != "Select State" && district != "Select District" && block == "Select Block" && gp == "Select Gram Panchayat")
                    {
                        var data1 = ABE.objabhystates_completecensusdata_new.Where(d => d.state_name == state && d.district_name == district).Distinct().ToList();
                        ViewBag.data = data1;
                    }
                    else if (state != "Select State" && district != "Select District" && block != "Select Block" && gp == "Select Gram Panchayat")
                    {
                        var data2 = ABE.objabhystates_completecensusdata_new.Where(d => d.state_name == state && d.district_name == district && d.sub_district_name == block).Distinct().ToList();
                        ViewBag.data = data2;
                    }
                    else if (state != "Select State" && district != "Select District" && block != "Select Block" && gp != "Select Gram Panchayat")
                    {
                        var data3 = ABE.objabhystates_completecensusdata_new.Where(d => d.state_name == state && d.district_name == district && d.sub_district_name == block && d.gram_panchayat_name == gp).Distinct().ToList();
                        ViewBag.data = data3;
                    }
                }
                else
                {
                    if (state != "Select State" && district == "Select District" && block == "Select Block" && gp == "Select Gram Panchayat")
                    {
                        var data = ABE.objabhystates_completecensusdata_Insert1.Where(d => d.state_name == state).Distinct().ToList();
                        ViewBag.data = data;
                    }
                    else if (state != "Select State" && district != "Select District" && block == "Select Block" && gp == "Select Gram Panchayat")
                    {
                        var data1 = ABE.objabhystates_completecensusdata_Insert1.Where(d => d.state_name == state && d.district_name == district).Distinct().ToList();
                        ViewBag.data = data1;
                    }
                    else if (state != "Select State" && district != "Select District" && block != "Select Block" && gp == "Select Gram Panchayat")
                    {
                        var data2 = ABE.objabhystates_completecensusdata_Insert1.Where(d => d.state_name == state && d.district_name == district && d.sub_district_name == block).Distinct().ToList();
                        ViewBag.data = data2;
                    }
                    else if (state != "Select State" && district != "Select District" && block != "Select Block" && gp != "Select Gram Panchayat")
                    {
                        var data3 = ABE.objabhystates_completecensusdata_Insert1.Where(d => d.state_name == state && d.district_name == district && d.sub_district_name == block && d.gram_panchayat_name == gp).Distinct().ToList();
                        ViewBag.data = data3;
                    }
                }


                if (ViewBag.data.Count != 0)
                {
                    var vbdata = ViewBag.data;
                    var jsonresult = Json(vbdata, JsonRequestBehavior.AllowGet);
                    jsonresult.MaxJsonLength = int.MaxValue;
                    return jsonresult;
                }
                else
                {
                    return Json("NoData", JsonRequestBehavior.AllowGet);
                }


            }
            catch (Exception ex)
            {

            }
            return View();
        }

        [HttpPost]
        public ActionResult savedata(string GWB)
        {
            abhystates_completecensusdata_Insert1 objCensusdata = new abhystates_completecensusdata_Insert1();
            try
            {
                if (Session["UserId"].ToString() != "" && Session["UserId"].ToString() != null)
                {
                    if (GWB != null && GWB != "")
                    {
                        JavaScriptSerializer js = new JavaScriptSerializer();
                        var result = js.Deserialize<abhystates_completecensusdata_Insert1>(GWB);

                        objCensusdata.Springs_Total_Geographical_Area_in_Hectares = result.Springs_Total_Geographical_Area_in_Hectares;
                        objCensusdata.AvgOfSurfaceWaterRainfall = result.AvgOfSurfaceWaterRainfall;

                        objCensusdata.Spring_Functioning_All_round_the_year = result.Spring_Functioning_All_round_the_year;
                        objCensusdata.Waterfall_Area_in_Hectares = result.Waterfall_Area_in_Hectares;
                        objCensusdata.Springs_Depth = result.Springs_Depth;

                        objCensusdata.No_Of_CheckDams = result.No_Of_CheckDams;
                        objCensusdata.CheckDams_Capacity = result.CheckDams_Capacity;

                        objCensusdata.Canals_River_Canal_Functioning_All_round_the_year = result.Canals_River_Canal_Functioning_All_round_the_year;
                        objCensusdata.Canals_Area_in_Hectares = result.Canals_Area_in_Hectares;
                        objCensusdata.Canals_Depth = result.Canals_Depth;

                        objCensusdata.Reservoir_Name = result.Reservoir_Name;
                        objCensusdata.Current_Live_Storage = result.Current_Live_Storage;

                        objCensusdata.Tank_Pond_Lake_Functioning_All_round_the_year = result.Tank_Pond_Lake_Functioning_All_round_the_year;
                        objCensusdata.Tanks_Lakes_Area_in_Hectares = result.Tanks_Lakes_Area_in_Hectares;
                        objCensusdata.Tanks_Depth = result.Tanks_Depth;

                        objCensusdata.River_Canal_Functioning_All_round_the_year = result.River_Canal_Functioning_All_round_the_year;
                        objCensusdata.River_Canals_Area_in_Hectares = result.River_Canals_Area_in_Hectares;
                        objCensusdata.River_Depth = result.River_Depth;

                        objCensusdata.Gwr_Rainfall_Area = result.Gwr_Rainfall_Area;
                        objCensusdata.Gwr_Rainfall_Rainfall = result.Gwr_Rainfall_Rainfall;

                        objCensusdata.Wells_Tube_Wells_Area_in_Hectares = result.Wells_Tube_Wells_Area_in_Hectares;
                        objCensusdata.Harvesting_Canals_Area_in_Hectares = result.Harvesting_Canals_Area_in_Hectares;
                        objCensusdata.Harvesting_Tanks_Lakes_Area_in_Hectares = result.Harvesting_Tanks_Lakes_Area_in_Hectares;
                        objCensusdata.NetArea_Under_CheckDams_and_NalaBunds = result.NetArea_Under_CheckDams_and_NalaBunds;

                        objCensusdata.Gwr_IT_maximum_SubmergenceArea = result.Gwr_IT_maximum_SubmergenceArea;
                        objCensusdata.Gwr_IT_Reacharge_Rate = result.Gwr_IT_Reacharge_Rate;
                        objCensusdata.Gwr_IT_DaysOfSubmergence = result.Gwr_IT_DaysOfSubmergence;

                        objCensusdata.Gwr_CD_maximumSubmergence_Area = result.Gwr_CD_maximumSubmergence_Area;
                        objCensusdata.Gwr_CD_AverageDepthOf_Water = result.Gwr_CD_AverageDepthOf_Water;
                        objCensusdata.Gwr_CD_NoOfFillings = result.Gwr_CD_NoOfFillings;

                        objCensusdata.Gwr_STC_LengthOfthe_Canals = result.Gwr_STC_LengthOfthe_Canals;
                        objCensusdata.Gwr_STC_Seepage_Factor = result.Gwr_STC_Seepage_Factor;
                        objCensusdata.Gwr_STC_Flowing_Days = result.Gwr_STC_Flowing_Days;
                        objCensusdata.Gwr_STC_Avg_Wetted_Perimeter = result.Gwr_STC_Avg_Wetted_Perimeter;

                        objCensusdata.Gwr_SWI_AreaIrrigated = result.Gwr_SWI_AreaIrrigated;
                        objCensusdata.Gwr_SWI_DesignedDischarge_At_Outlet = result.Gwr_SWI_DesignedDischarge_At_Outlet;
                        objCensusdata.Gwr_SWI_Seepage_Factor = result.Gwr_SWI_Seepage_Factor;
                        objCensusdata.Gwr_SWI_WaterReleased_At_OutLet = result.Gwr_SWI_WaterReleased_At_OutLet;

                        objCensusdata.Gwr_GwI_CommndArea_Irrigation = result.Gwr_GwI_CommndArea_Irrigation;
                        objCensusdata.Gwr_GwI_CommandArea_ReturnFlow = result.Gwr_GwI_CommandArea_ReturnFlow;
                        objCensusdata.Gwr_GwI_NonCommand_Area_Irrigation = result.Gwr_GwI_NonCommand_Area_Irrigation;
                        objCensusdata.Gwr_GwI_NonCommand_Area_ReturnFlow = result.Gwr_GwI_NonCommand_Area_ReturnFlow;

                        objCensusdata.Draft_Irrigation_DailyPumping_Hours = result.Draft_Irrigation_DailyPumping_Hours;
                        objCensusdata.Tube_Wells_Borehole_Functioning_All_round_the_year = result.Tube_Wells_Borehole_Functioning_All_round_the_year;
                        objCensusdata.Draft_Irrigation_Total_NoOf_Pumping_Days = result.Draft_Irrigation_Total_NoOf_Pumping_Days;
                        objCensusdata.Draft_Irrigation_Avg_Pumping_Rate = result.Draft_Irrigation_Avg_Pumping_Rate;

                        objCensusdata.Draft_Drink_Tot_Water_Requirement_For_People = result.Draft_Drink_Tot_Water_Requirement_For_People;
                        objCensusdata.Draft_Drink_Tot_Water_Requirement_For_CowsBufalos = result.Draft_Drink_Tot_Water_Requirement_For_CowsBufalos;
                        objCensusdata.Draft_Drink_Tot_Water_Requirement_For_Bullocks = result.Draft_Drink_Tot_Water_Requirement_For_Bullocks;
                        objCensusdata.Draft_Drink_Tot_Water_Requirement_For_GoatsSheeps = result.Draft_Drink_Tot_Water_Requirement_For_GoatsSheeps;

                        objCensusdata.Draft_Industry_GW_In_Take = result.Draft_Industry_GW_In_Take;
                        objCensusdata.Draft_Industry_Tot_Noof_Production_Days = result.Draft_Industry_Tot_Noof_Production_Days;

                        objCensusdata.Tbl_Condition = "1";
                        objCensusdata.Inserted_Date = DateTime.Now.ToString("MM/dd/yyyy h:mm:ss tt");
                        objCensusdata.state_name = result.state_name;
                        objCensusdata.district_name = result.district_name;
                        objCensusdata.sub_district_name = result.sub_district_name;
                        objCensusdata.gram_panchayat_name = result.gram_panchayat_name;
                        objCensusdata.Village_Name = result.Village_Name;
                        if (Session["UserId"].ToString() != "" && Session["UserId"].ToString() != null)
                        {
                            objCensusdata.userid = Session["UserId"].ToString();
                        }
                        objCensusdata.approvedorreject = "0";
                        objCensusdata.canaltype = result.canaltype;
                        objCensusdata.soiltype = result.soiltype;
                        objCensusdata.springs_Discharge = result.springs_Discharge;
                        objCensusdata.checkdams_Discharge = result.checkdams_Discharge;
                        objCensusdata.canals_Discharge = result.canals_Discharge;
                        objCensusdata.reservoir_Discharge = result.reservoir_Discharge;
                        objCensusdata.lakespondstanks_Discharge = result.lakespondstanks_Discharge;
                        objCensusdata.river_Discharge = result.river_Discharge;
                        objCensusdata.surface_water_paddy = result.surface_water_paddy;
                        objCensusdata.surface_water_nonpaddy = result.surface_water_nonpaddy;
                        objCensusdata.Industry_Prod_days = result.Industry_Prod_days;
                        ABE.objabhystates_completecensusdata_Insert1.Add(objCensusdata);
                        ABE.SaveChanges();
                        return Json("OK");
                    }
                    else
                    {
                        return View("wsp_View");
                    }
                }
                else
                {
                    return View("MisLogin", "WSP");
                }
                //return View();
            }

            catch (Exception ex)
            {
                if (ex.Message == "Object reference not set to an instance of an object.")
                {
                    return RedirectToAction("MisLogin", "WSP");
                }
                if (ex.Message == "Unable to create a null constant value of type 'System.Object'. Only entity types, enumeration types or primitive types are supported in this context.")
                {
                    return RedirectToAction("MisLogin", "WSP");
                }
            }

            return View();
        }

        [HttpPost]
        public ActionResult gdbdatadelete(string state, string districtname, string blckname, string gpname)
        {
            try
            {
                ViewBag.data1 = null;
                if (state != "Select State" && districtname == "Select District" && blckname == "Select Block" && gpname == "Select Gram Panchayat")
                {
                    var data = ABE.objabhystates_completecensusdata_Insert1.Where(d => d.state_name == state).Distinct().ToList();
                    ViewBag.data1 = data;
                }
                else if (state != "Select State" && districtname != "Select District" && blckname == "Select Block" && gpname == "Select Gram Panchayat")
                {
                    var data1 = ABE.objabhystates_completecensusdata_Insert1.Where(d => d.state_name == state && d.district_name == districtname).Distinct().ToList();
                    ViewBag.data1 = data1;
                }
                else if (state != "Select State" && districtname != "Select District" && blckname != "Select Block" && gpname == "Select Gram Panchayat")
                {
                    var data2 = ABE.objabhystates_completecensusdata_Insert1.Where(d => d.state_name == state && d.district_name == districtname && d.sub_district_name == blckname).Distinct().ToList();
                    ViewBag.data1 = data2;
                }
                else if (state != "Select State" && districtname != "Select District" && blckname != "Select Block" && gpname != "Select Gram Panchayat")
                {
                    var data3 = ABE.objabhystates_completecensusdata_Insert1.Where(d => d.state_name == state && d.district_name == districtname && d.sub_district_name == blckname && d.gram_panchayat_name == gpname).Distinct().ToList();
                    ViewBag.data1 = data3;
                }
                var Finalbudgetdata = ViewBag.data1;
                if (Finalbudgetdata.Count != 0)
                {
                    ABE.objabhystates_completecensusdata_Insert1.Remove(Finalbudgetdata[0]);
                    ABE.SaveChanges();
                    return Json("Delete", JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("Nodata", JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception ex)
            {

            }

            return View();
        }
        [HttpPost]
        public ActionResult getsecuritydata(string state, string district, string block, string gp)
        {
            try
            {
                abhysuplydemand supldemand = new abhysuplydemand();
                abhysuplydemand_Insert supldemand2 = new abhysuplydemand_Insert();
                supldemand.objabhysupply1 = ABE.objabhy_supply1.Distinct().ToList();
                supldemand.objabhydemand1 = ABE.objabhy_demand1.Distinct().ToList();
                var indiff = "2";
                supldemand2.objabhysupply2 = ABE.objabhy_supply2.Where(d => d.insertdiff == indiff).Distinct().ToList();
                supldemand2.objabhydemand2 = ABE.objabhy_demand2.Where(d => d.insertdiff == indiff).Distinct().ToList();
                if (supldemand.objabhydemand1.Count != 0 && supldemand.objabhysupply1.Count != 0 && supldemand2.objabhysupply2.Count == 0 && supldemand2.objabhydemand2.Count == 0)
                {
                    if (state != "Select State" && district == "Select District" && block == "Select Block" && gp == "Select Gram Panchayat")
                    {
                        supldemand.objabhysupply1 = ABE.objabhy_supply1.Where(d => d.state_name == state).Distinct().ToList();
                        supldemand.objabhydemand1 = ABE.objabhy_demand1.Where(d => d.state_name == state).Distinct().ToList();
                    }
                    else if (state != "Select State" && district != "Select District" && block == "Select Block" && gp == "Select Gram Panchayat")
                    {
                        supldemand.objabhysupply1 = ABE.objabhy_supply1.Where(d => d.state_name == state && d.district_name == district).Distinct().ToList();
                        supldemand.objabhydemand1 = ABE.objabhy_demand1.Where(d => d.state_name == state && d.district_name == district).Distinct().ToList();
                    }

                    else if (state != "Select State" && district != "Select District" && block != "Select Block" && gp == "Select Gram Panchayat")
                    {
                        supldemand.objabhysupply1 = ABE.objabhy_supply1.Where(d => d.state_name == state && d.district_name == district && d.block == block).Distinct().ToList();
                        supldemand.objabhydemand1 = ABE.objabhy_demand1.Where(d => d.state_name == state && d.district_name == district && d.block == block).Distinct().ToList();
                    }

                    else if (state != "Select State" && district != "Select District" && block != "Select Block" && gp != "Select Gram Panchayat")
                    {
                        supldemand.objabhysupply1 = ABE.objabhy_supply1.Where(d => d.state_name == state && d.district_name == district && d.block == block && d.gname == gp).Distinct().ToList();
                        supldemand.objabhydemand1 = ABE.objabhy_demand1.Where(d => d.state_name == state && d.district_name == district && d.block == block && d.gname == gp).Distinct().ToList();
                    }

                    var jsonresult1 = Json(supldemand, JsonRequestBehavior.AllowGet);
                    jsonresult1.MaxJsonLength = int.MaxValue;
                    return jsonresult1;
                }
                else if (supldemand.objabhydemand1.Count != 0 && supldemand.objabhysupply1.Count != 0 && supldemand2.objabhysupply2.Count != 0 && supldemand2.objabhydemand2.Count != 0)
                {
                    if (state != "Select State" && district == "Select District" && block == "Select Block" && gp == "Select Gram Panchayat")
                    {
                        supldemand2.objabhysupply2 = ABE.objabhy_supply2.Where(d => d.state_name == state).Distinct().ToList();
                        supldemand2.objabhydemand2 = ABE.objabhy_demand2.Where(d => d.state_name == state).Distinct().ToList();
                    }
                    else if (state != "Select State" && district != "Select District" && block == "Select Block" && gp == "Select Gram Panchayat")
                    {
                        supldemand2.objabhysupply2 = ABE.objabhy_supply2.Where(d => d.state_name == state && d.district_name == district).Distinct().ToList();
                        supldemand2.objabhydemand2 = ABE.objabhy_demand2.Where(d => d.state_name == state && d.district_name == district).Distinct().ToList();
                    }

                    else if (state != "Select State" && district != "Select District" && block != "Select Block" && gp == "Select Gram Panchayat")
                    {
                        supldemand2.objabhysupply2 = ABE.objabhy_supply2.Where(d => d.state_name == state && d.district_name == district && d.block == block).Distinct().ToList();
                        supldemand2.objabhydemand2 = ABE.objabhy_demand2.Where(d => d.state_name == state && d.district_name == district && d.block == block).Distinct().ToList();
                    }

                    else if (state != "Select State" && district != "Select District" && block != "Select Block" && gp != "Select Gram Panchayat")
                    {
                        supldemand2.objabhysupply2 = ABE.objabhy_supply2.Where(d => d.state_name == state && d.district_name == district && d.block == block && d.gpname == gp).Distinct().ToList();
                        supldemand2.objabhydemand2 = ABE.objabhy_demand2.Where(d => d.state_name == state && d.district_name == district && d.block == block && d.gpname == gp).Distinct().ToList();
                    }
                    var jsonresult1 = Json(supldemand, JsonRequestBehavior.AllowGet);
                    jsonresult1.MaxJsonLength = int.MaxValue;
                    return jsonresult1;
                }

            }
            catch (Exception ex)
            {

            }
            return View();
        }

        [HttpPost]
        public ActionResult getsecurityonchage(string state, string district, string block, string gp, string ddlsuplyvalue, string ddldemandvalue)
        {
            try
            {
                abhysuplydemand supldemand = new abhysuplydemand();
                abhysuplydemand_Insert supldemand2 = new abhysuplydemand_Insert();
                supldemand.objabhysupply1 = ABE.objabhy_supply1.Distinct().ToList();
                supldemand.objabhydemand1 = ABE.objabhy_demand1.Distinct().ToList();
                var indiff = "2";
                supldemand2.objabhysupply2 = ABE.objabhy_supply2.Where(d => d.insertdiff == indiff).Distinct().ToList();
                supldemand2.objabhydemand2 = ABE.objabhy_demand2.Where(d => d.insertdiff == indiff).Distinct().ToList();
                if (supldemand.objabhydemand1.Count != 0 && supldemand.objabhysupply1.Count != 0 && supldemand2.objabhysupply2.Count == 0 && supldemand2.objabhydemand2.Count == 0)
                {
                    if (state != "Select State" && district == "Select District" && block == "Select Block" && gp == "Select Gram Panchayat" && ddlsuplyvalue != "Select Supply Activity" && ddldemandvalue == "Select Demand Activity")
                    {
                        supldemand.objabhysupply1 = ABE.objabhy_supply1.Where(d => d.state_name == state && d.activity == ddlsuplyvalue).Distinct().ToList();
                        supldemand.objabhydemand1 = ABE.objabhy_demand1.Where(d => d.state_name == state && d.activity == ddldemandvalue).Distinct().ToList();
                    }
                    else if (state != "Select State" && district == "Select District" && block == "Select Block" && gp == "Select Gram Panchayat" && ddldemandvalue != "Select Demand Activity" && ddlsuplyvalue == "Select Supply Activity")
                    {
                        supldemand.objabhysupply1 = ABE.objabhy_supply1.Where(d => d.state_name == state && d.activity == ddlsuplyvalue).Distinct().ToList();
                        supldemand.objabhydemand1 = ABE.objabhy_demand1.Where(d => d.state_name == state && d.activity == ddldemandvalue).Distinct().ToList();
                    }
                    else if (state != "Select State" && district == "Select District" && block == "Select Block" && gp == "Select Gram Panchayat" && ddldemandvalue != "Select Demand Activity" && ddlsuplyvalue != "Select Supply Activity")
                    {
                        supldemand.objabhysupply1 = ABE.objabhy_supply1.Where(d => d.state_name == state && d.activity == ddlsuplyvalue).Distinct().ToList();
                        supldemand.objabhydemand1 = ABE.objabhy_demand1.Where(d => d.state_name == state && d.activity == ddldemandvalue).Distinct().ToList();
                    }

                    else if (state != "Select State" && district != "Select District" && block == "Select Block" && gp == "Select Gram Panchayat" && ddlsuplyvalue != "Select Supply Activity" && ddldemandvalue == "Select Demand Activity")
                    {
                        supldemand.objabhysupply1 = ABE.objabhy_supply1.Where(d => d.state_name == state && d.district_name == district && d.activity == ddlsuplyvalue).Distinct().ToList();
                        supldemand.objabhydemand1 = ABE.objabhy_demand1.Where(d => d.state_name == state && d.district_name == district && d.activity == ddldemandvalue).Distinct().ToList();
                    }
                    else if (state != "Select State" && district != "Select District" && block == "Select Block" && gp == "Select Gram Panchayat" && ddldemandvalue != "Select Demand Activity" && ddlsuplyvalue == "Select Supply Activity")
                    {
                        supldemand.objabhysupply1 = ABE.objabhy_supply1.Where(d => d.state_name == state && d.district_name == district && d.activity == ddlsuplyvalue).Distinct().ToList();
                        supldemand.objabhydemand1 = ABE.objabhy_demand1.Where(d => d.state_name == state && d.district_name == district && d.activity == ddldemandvalue).Distinct().ToList();
                    }
                    else if (state != "Select State" && district != "Select District" && block == "Select Block" && gp == "Select Gram Panchayat" && ddldemandvalue != "Select Demand Activity" && ddlsuplyvalue != "Select Supply Activity")
                    {
                        supldemand.objabhysupply1 = ABE.objabhy_supply1.Where(d => d.state_name == state && d.district_name == district && d.activity == ddlsuplyvalue).Distinct().ToList();
                        supldemand.objabhydemand1 = ABE.objabhy_demand1.Where(d => d.state_name == state && d.district_name == district && d.activity == ddldemandvalue).Distinct().ToList();
                    }


                    else if (state != "Select State" && district != "Select District" && block != "Select Block" && gp == "Select Gram Panchayat" && ddlsuplyvalue != "Select Supply Activity" && ddldemandvalue == "Select Demand Activity")
                    {
                        supldemand.objabhysupply1 = ABE.objabhy_supply1.Where(d => d.state_name == state && d.district_name == district && d.block == block && d.activity == ddlsuplyvalue).Distinct().ToList();
                        supldemand.objabhydemand1 = ABE.objabhy_demand1.Where(d => d.state_name == state && d.district_name == district && d.block == block && d.activity == ddldemandvalue).Distinct().ToList();
                    }
                    else if (state != "Select State" && district != "Select District" && block != "Select Block" && gp == "Select Gram Panchayat" && ddldemandvalue != "Select Demand Activity" && ddlsuplyvalue == "Select Supply Activity")
                    {
                        supldemand.objabhysupply1 = ABE.objabhy_supply1.Where(d => d.state_name == state && d.district_name == district && d.block == block && d.activity == ddlsuplyvalue).Distinct().ToList();
                        supldemand.objabhydemand1 = ABE.objabhy_demand1.Where(d => d.state_name == state && d.district_name == district && d.block == block && d.activity == ddldemandvalue).Distinct().ToList();
                    }
                    else if (state != "Select State" && district != "Select District" && block != "Select Block" && gp == "Select Gram Panchayat" && ddldemandvalue != "Select Demand Activity" && ddlsuplyvalue != "Select Supply Activity")
                    {
                        supldemand.objabhysupply1 = ABE.objabhy_supply1.Where(d => d.state_name == state && d.district_name == district && d.block == block && d.activity == ddlsuplyvalue).Distinct().ToList();
                        supldemand.objabhydemand1 = ABE.objabhy_demand1.Where(d => d.state_name == state && d.district_name == district && d.block == block && d.activity == ddldemandvalue).Distinct().ToList();
                    }



                    else if (state != "Select State" && district != "Select District" && block != "Select Block" && gp != "Select Gram Panchayat" && ddlsuplyvalue != "Select Supply Activity" && ddldemandvalue == "Select Demand Activity")
                    {
                        supldemand.objabhysupply1 = ABE.objabhy_supply1.Where(d => d.state_name == state && d.district_name == district && d.block == block && d.gname == gp && d.activity == ddlsuplyvalue).Distinct().ToList();
                        supldemand.objabhydemand1 = ABE.objabhy_demand1.Where(d => d.state_name == state && d.district_name == district && d.block == block && d.gname == gp && d.activity == ddldemandvalue).Distinct().ToList();
                    }
                    else if (state != "Select State" && district != "Select District" && block != "Select Block" && gp != "Select Gram Panchayat" && ddldemandvalue != "Select Demand Activity" && ddlsuplyvalue == "Select Supply Activity")
                    {
                        supldemand.objabhysupply1 = ABE.objabhy_supply1.Where(d => d.state_name == state && d.district_name == district && d.block == block && d.gname == gp && d.activity == ddlsuplyvalue).Distinct().ToList();
                        supldemand.objabhydemand1 = ABE.objabhy_demand1.Where(d => d.state_name == state && d.district_name == district && d.block == block && d.gname == gp && d.activity == ddldemandvalue).Distinct().ToList();
                    }
                    else if (state != "Select State" && district != "Select District" && block != "Select Block" && gp != "Select Gram Panchayat" && ddldemandvalue != "Select Demand Activity" && ddlsuplyvalue != "Select Supply Activity")
                    {
                        supldemand.objabhysupply1 = ABE.objabhy_supply1.Where(d => d.state_name == state && d.district_name == district && d.block == block && d.gname == gp && d.activity == ddlsuplyvalue).Distinct().ToList();
                        supldemand.objabhydemand1 = ABE.objabhy_demand1.Where(d => d.state_name == state && d.district_name == district && d.block == block && d.gname == gp && d.activity == ddldemandvalue).Distinct().ToList();
                    }
                    if (supldemand.objabhysupply1.Count != 0 && supldemand.objabhydemand1.Count != 0)
                    {
                        var jsonresult1 = Json(supldemand, JsonRequestBehavior.AllowGet);
                        jsonresult1.MaxJsonLength = int.MaxValue;
                        return jsonresult1;
                    }
                    else
                    {
                        var jsonresult1 = Json("NoData", JsonRequestBehavior.AllowGet);
                        jsonresult1.MaxJsonLength = int.MaxValue;
                        return jsonresult1;
                    }
                }
                else if (supldemand.objabhydemand1.Count != 0 && supldemand.objabhysupply1.Count != 0 && supldemand2.objabhysupply2.Count != 0 && supldemand2.objabhydemand2.Count != 0)
                {
                    if (state != "Select State" && district == "Select District" && block == "Select Block" && gp == "Select Gram Panchayat" && ddlsuplyvalue != "Select Supply Activity" && ddldemandvalue == "Select Demand Activity")
                    {
                        supldemand2.objabhysupply2 = ABE.objabhy_supply2.Where(d => d.state_name == state && d.activity == ddlsuplyvalue).Distinct().ToList();
                        supldemand2.objabhydemand2 = ABE.objabhy_demand2.Where(d => d.state_name == state && d.activity == ddldemandvalue).Distinct().ToList();
                    }
                    else if (state != "Select State" && district == "Select District" && block == "Select Block" && gp == "Select Gram Panchayat" && ddldemandvalue != "Select Demand Activity" && ddlsuplyvalue == "Select Supply Activity")
                    {
                        supldemand2.objabhysupply2 = ABE.objabhy_supply2.Where(d => d.state_name == state && d.activity == ddlsuplyvalue).Distinct().ToList();
                        supldemand2.objabhydemand2 = ABE.objabhy_demand2.Where(d => d.state_name == state && d.activity == ddldemandvalue).Distinct().ToList();
                    }
                    else if (state != "Select State" && district == "Select District" && block == "Select Block" && gp == "Select Gram Panchayat" && ddldemandvalue != "Select Demand Activity" && ddlsuplyvalue != "Select Supply Activity")
                    {
                        supldemand2.objabhysupply2 = ABE.objabhy_supply2.Where(d => d.state_name == state && d.activity == ddlsuplyvalue).Distinct().ToList();
                        supldemand2.objabhydemand2 = ABE.objabhy_demand2.Where(d => d.state_name == state && d.activity == ddldemandvalue).Distinct().ToList();
                    }

                    else if (state != "Select State" && district != "Select District" && block == "Select Block" && gp == "Select Gram Panchayat" && ddlsuplyvalue != "Select Supply Activity" && ddldemandvalue == "Select Demand Activity")
                    {
                        supldemand2.objabhysupply2 = ABE.objabhy_supply2.Where(d => d.state_name == state && d.district_name == district && d.activity == ddlsuplyvalue).Distinct().ToList();
                        supldemand2.objabhydemand2 = ABE.objabhy_demand2.Where(d => d.state_name == state && d.district_name == district && d.activity == ddldemandvalue).Distinct().ToList();
                    }
                    else if (state != "Select State" && district != "Select District" && block == "Select Block" && gp == "Select Gram Panchayat" && ddldemandvalue != "Select Demand Activity" && ddlsuplyvalue == "Select Supply Activity")
                    {
                        supldemand2.objabhysupply2 = ABE.objabhy_supply2.Where(d => d.state_name == state && d.district_name == district && d.activity == ddlsuplyvalue).Distinct().ToList();
                        supldemand2.objabhydemand2 = ABE.objabhy_demand2.Where(d => d.state_name == state && d.district_name == district && d.activity == ddldemandvalue).Distinct().ToList();
                    }
                    else if (state != "Select State" && district != "Select District" && block == "Select Block" && gp == "Select Gram Panchayat" && ddldemandvalue != "Select Demand Activity" && ddlsuplyvalue != "Select Supply Activity")
                    {
                        supldemand2.objabhysupply2 = ABE.objabhy_supply2.Where(d => d.state_name == state && d.district_name == district && d.activity == ddlsuplyvalue).Distinct().ToList();
                        supldemand2.objabhydemand2 = ABE.objabhy_demand2.Where(d => d.state_name == state && d.district_name == district && d.activity == ddldemandvalue).Distinct().ToList();
                    }


                    else if (state != "Select State" && district != "Select District" && block != "Select Block" && gp == "Select Gram Panchayat" && ddlsuplyvalue != "Select Supply Activity" && ddldemandvalue == "Select Demand Activity")
                    {
                        supldemand2.objabhysupply2 = ABE.objabhy_supply2.Where(d => d.state_name == state && d.district_name == district && d.block == block && d.activity == ddlsuplyvalue).Distinct().ToList();
                        supldemand2.objabhydemand2 = ABE.objabhy_demand2.Where(d => d.state_name == state && d.district_name == district && d.block == block && d.activity == ddldemandvalue).Distinct().ToList();
                    }
                    else if (state != "Select State" && district != "Select District" && block != "Select Block" && gp == "Select Gram Panchayat" && ddldemandvalue != "Select Demand Activity" && ddlsuplyvalue == "Select Supply Activity")
                    {
                        supldemand2.objabhysupply2 = ABE.objabhy_supply2.Where(d => d.state_name == state && d.district_name == district && d.block == block && d.activity == ddlsuplyvalue).Distinct().ToList();
                        supldemand2.objabhydemand2 = ABE.objabhy_demand2.Where(d => d.state_name == state && d.district_name == district && d.block == block && d.activity == ddldemandvalue).Distinct().ToList();
                    }
                    else if (state != "Select State" && district != "Select District" && block != "Select Block" && gp == "Select Gram Panchayat" && ddldemandvalue != "Select Demand Activity" && ddlsuplyvalue != "Select Supply Activity")
                    {
                        supldemand2.objabhysupply2 = ABE.objabhy_supply2.Where(d => d.state_name == state && d.district_name == district && d.block == block && d.activity == ddlsuplyvalue).Distinct().ToList();
                        supldemand2.objabhydemand2 = ABE.objabhy_demand2.Where(d => d.state_name == state && d.district_name == district && d.block == block && d.activity == ddldemandvalue).Distinct().ToList();
                    }

                    else if (state != "Select State" && district != "Select District" && block != "Select Block" && gp != "Select Gram Panchayat" && ddlsuplyvalue != "Select Supply Activity" && ddldemandvalue != "Select Demand Activity")
                    {
                        supldemand2.objabhysupply2 = ABE.objabhy_supply2.Where(d => d.state_name == state && d.district_name == district && d.block == block && d.gpname == gp && d.activity == ddlsuplyvalue).Distinct().ToList();
                        supldemand2.objabhydemand2 = ABE.objabhy_demand2.Where(d => d.state_name == state && d.district_name == district && d.block == block && d.gpname == gp && d.activity == ddldemandvalue).Distinct().ToList();
                    }
                    else if (state != "Select State" && district != "Select District" && block != "Select Block" && gp != "Select Gram Panchayat" && ddldemandvalue != "Select Demand Activity" && ddlsuplyvalue == "Select Supply Activity")
                    {
                        supldemand2.objabhysupply2 = ABE.objabhy_supply2.Where(d => d.state_name == state && d.district_name == district && d.block == block && d.gpname == gp && d.activity == ddlsuplyvalue).Distinct().ToList();
                        supldemand2.objabhydemand2 = ABE.objabhy_demand2.Where(d => d.state_name == state && d.district_name == district && d.block == block && d.gpname == gp && d.activity == ddldemandvalue).Distinct().ToList();
                    }
                    else if (state != "Select State" && district != "Select District" && block != "Select Block" && gp != "Select Gram Panchayat" && ddldemandvalue != "Select Demand Activity" && ddlsuplyvalue != "Select Supply Activity")
                    {
                        supldemand2.objabhysupply2 = ABE.objabhy_supply2.Where(d => d.state_name == state && d.district_name == district && d.block == block && d.gpname == gp && d.activity == ddlsuplyvalue).Distinct().ToList();
                        supldemand2.objabhydemand2 = ABE.objabhy_demand2.Where(d => d.state_name == state && d.district_name == district && d.block == block && d.gpname == gp && d.activity == ddldemandvalue).Distinct().ToList();
                    }
                    if (supldemand2 != null)
                    {
                        var jsonresult1 = Json(supldemand2, JsonRequestBehavior.AllowGet);
                        jsonresult1.MaxJsonLength = int.MaxValue;
                        return jsonresult1;
                    }
                    else
                    {
                        var jsonresult1 = Json("NoData", JsonRequestBehavior.AllowGet);
                        jsonresult1.MaxJsonLength = int.MaxValue;
                        return jsonresult1;
                    }


                }
            }
            catch (Exception ex)
            {

            }
            return View();
        }
        [HttpPost]
        public ActionResult saveSecuritydata(string Securitysupply, string securitydemand)
        {
            abhy_supply2 objsupplydata = new abhy_supply2();
            abhy_demand2 objdemanddata1 = new abhy_demand2();
            try
            {
                //if (Session["UserId"].ToString() != "" && Session["UserId"].ToString() != null)
                //{
                if (Securitysupply != null && Securitysupply != "" && securitydemand != null && securitydemand != "")
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_supply2>(Securitysupply);
                    objsupplydata.state_name = result.state_name;
                    objsupplydata.district_name = result.district_name;
                    objsupplydata.block = result.block;
                    objsupplydata.gpname = result.gpname;
                    objsupplydata.village_name = result.village_name;
                    objsupplydata.sup_yr_19_phys_value = result.sup_yr_19_phys_value;
                    objsupplydata.sup_yr_19_fin_value = result.sup_yr_19_fin_value;
                    objsupplydata.sup_yr_20_phys_value = result.sup_yr_20_phys_value;
                    objsupplydata.sup_yr_20_fin_value = result.sup_yr_20_fin_value;
                    objsupplydata.sup_yr_21_phys_value = result.sup_yr_21_phys_value;
                    objsupplydata.sup_yr_21_fin_value = result.sup_yr_21_fin_value;
                    objsupplydata.sup_yr_22_phys_value = result.sup_yr_22_phys_value;
                    objsupplydata.sup_yr_22_fin_value = result.sup_yr_22_fin_value;
                    objsupplydata.sup_yr_23_phys_value = result.sup_yr_23_phys_value;
                    objsupplydata.sup_yr_23_fin_value = result.sup_yr_23_fin_value;
                    objsupplydata.insertdiff = result.insertdiff;
                    objsupplydata.activity = result.activity;
                    objsupplydata.category = result.category;
                    objsupplydata.todaydate = DateTime.Now.ToString("MM/dd/yyyy h:mm:ss tt");
                    ABE.objabhy_supply2.Add(objsupplydata);
                    ABE.SaveChanges();

                    var result1 = js.Deserialize<abhy_demand2>(securitydemand);
                    objdemanddata1.state_name = result.state_name;
                    objdemanddata1.district_name = result.district_name;
                    objdemanddata1.block = result.block;
                    objdemanddata1.gpname = result.gpname;
                    objdemanddata1.village_name = result1.village_name;
                    objdemanddata1.dem_yr_19_phys_value = result1.dem_yr_19_phys_value;
                    objdemanddata1.dem_yr_19_fin_value = result1.dem_yr_19_fin_value;
                    objdemanddata1.dem_yr_20_phys_value = result1.dem_yr_20_phys_value;
                    objdemanddata1.dem_yr_20_fin_value = result1.dem_yr_20_fin_value;
                    objdemanddata1.dem_yr_21_phys_value = result1.dem_yr_21_phys_value;
                    objdemanddata1.dem_yr_21_fin_value = result1.dem_yr_21_fin_value;
                    objdemanddata1.dem_yr_22_phys_value = result1.dem_yr_22_phys_value;
                    objdemanddata1.dem_yr_22_fin_value = result1.dem_yr_22_fin_value;
                    objdemanddata1.dem_yr_23_phys_value = result1.dem_yr_23_phys_value;
                    objdemanddata1.dem_yr_23_fin_value = result1.dem_yr_23_fin_value;
                    objdemanddata1.insertdiff = result1.insertdiff;
                    objdemanddata1.activity = result1.activity;
                    objdemanddata1.category = result1.category;
                    objdemanddata1.todaydate = DateTime.Now.ToString("MM/dd/yyyy h:mm:ss tt");
                    ABE.objabhy_demand2.Add(objdemanddata1);
                    ABE.SaveChanges();
                    return Json("OK");
                }
                else
                {
                    return View("wsp_View");
                }
                //}
                //else
                //{
                //    return View("MisLogin", "WSP");
                //}
            }

            catch (Exception ex)
            {
                if (ex.Message == "Object reference not set to an instance of an object.")
                {
                    return RedirectToAction("MisLogin", "WSP");
                }
                if (ex.Message == "Unable to create a null constant value of type 'System.Object'. Only entity types, enumeration types or primitive types are supported in this context.")
                {
                    return RedirectToAction("MisLogin", "WSP");
                }
            }

            return View();
        }
        [HttpPost]
        public ActionResult securitydatadelete(string state, string district, string block, string gp, string ddlsuplyvalue, string ddldemandvalue)
        {
            try
            {
                var supid = 0;
                var demdid = 0;
                abhysuplydemand_Insert supldemand2 = new abhysuplydemand_Insert();
                if (state != "Select State" && district == "Select District" && block == "Select Block" && gp == "Select Gram Panchayat" && ddlsuplyvalue != "Select Supply Activity" && ddldemandvalue == "Select Demand Activity")
                {
                    supldemand2.objabhysupply2 = ABE.objabhy_supply2.Where(d => d.state_name == state && d.activity == ddlsuplyvalue).Distinct().ToList();
                    supldemand2.objabhydemand2 = ABE.objabhy_demand2.Where(d => d.state_name == state && d.activity == ddldemandvalue).Distinct().ToList();
                    if (supldemand2.objabhysupply2.Count != 0)
                    {
                        supid = Convert.ToInt32(supldemand2.objabhysupply2[0].supply_id);
                    }
                    if (supldemand2.objabhydemand2.Count != 0)
                    {
                        demdid = Convert.ToInt32(supldemand2.objabhydemand2[0].demand_id);
                    }
                }
                else if (state != "Select State" && district == "Select District" && block == "Select Block" && gp == "Select Gram Panchayat" && ddldemandvalue != "Select Demand Activity" && ddlsuplyvalue == "Select Supply Activity")
                {
                    supldemand2.objabhysupply2 = ABE.objabhy_supply2.Where(d => d.state_name == state && d.activity == ddlsuplyvalue).Distinct().ToList();
                    supldemand2.objabhydemand2 = ABE.objabhy_demand2.Where(d => d.state_name == state && d.activity == ddldemandvalue).Distinct().ToList();
                    if (supldemand2.objabhysupply2.Count != 0)
                    {
                        supid = Convert.ToInt32(supldemand2.objabhysupply2[0].supply_id);
                    }
                    if (supldemand2.objabhydemand2.Count != 0)
                    {
                        demdid = Convert.ToInt32(supldemand2.objabhydemand2[0].demand_id);
                    }
                }
                else if (state != "Select State" && district == "Select District" && block == "Select Block" && gp == "Select Gram Panchayat" && ddldemandvalue != "Select Demand Activity" && ddlsuplyvalue != "Select Supply Activity")
                {
                    supldemand2.objabhysupply2 = ABE.objabhy_supply2.Where(d => d.state_name == state && d.activity == ddlsuplyvalue).Distinct().ToList();
                    supldemand2.objabhydemand2 = ABE.objabhy_demand2.Where(d => d.state_name == state && d.activity == ddldemandvalue).Distinct().ToList();
                    if (supldemand2.objabhysupply2.Count != 0)
                    {
                        supid = Convert.ToInt32(supldemand2.objabhysupply2[0].supply_id);
                    }
                    if (supldemand2.objabhydemand2.Count != 0)
                    {
                        demdid = Convert.ToInt32(supldemand2.objabhydemand2[0].demand_id);
                    }
                }

                else if (state != "Select State" && district != "Select District" && block == "Select Block" && gp == "Select Gram Panchayat" && ddlsuplyvalue != "Select Supply Activity" && ddldemandvalue == "Select Demand Activity")
                {
                    supldemand2.objabhysupply2 = ABE.objabhy_supply2.Where(d => d.state_name == state && d.district_name == district && d.activity == ddlsuplyvalue).Distinct().ToList();
                    supldemand2.objabhydemand2 = ABE.objabhy_demand2.Where(d => d.state_name == state && d.district_name == district && d.activity == ddldemandvalue).Distinct().ToList();
                    if (supldemand2.objabhysupply2.Count != 0)
                    {
                        supid = Convert.ToInt32(supldemand2.objabhysupply2[0].supply_id);
                    }
                    if (supldemand2.objabhydemand2.Count != 0)
                    {
                        demdid = Convert.ToInt32(supldemand2.objabhydemand2[0].demand_id);
                    }
                }
                else if (state != "Select State" && district != "Select District" && block == "Select Block" && gp == "Select Gram Panchayat" && ddldemandvalue != "Select Demand Activity" && ddlsuplyvalue == "Select Supply Activity")
                {
                    supldemand2.objabhysupply2 = ABE.objabhy_supply2.Where(d => d.state_name == state && d.district_name == district && d.activity == ddlsuplyvalue).Distinct().ToList();
                    supldemand2.objabhydemand2 = ABE.objabhy_demand2.Where(d => d.state_name == state && d.district_name == district && d.activity == ddldemandvalue).Distinct().ToList();
                    if (supldemand2.objabhysupply2.Count != 0)
                    {
                        supid = Convert.ToInt32(supldemand2.objabhysupply2[0].supply_id);
                    }
                    if (supldemand2.objabhydemand2.Count != 0)
                    {
                        demdid = Convert.ToInt32(supldemand2.objabhydemand2[0].demand_id);
                    }
                }
                else if (state != "Select State" && district != "Select District" && block == "Select Block" && gp == "Select Gram Panchayat" && ddldemandvalue != "Select Demand Activity" && ddlsuplyvalue != "Select Supply Activity")
                {
                    supldemand2.objabhysupply2 = ABE.objabhy_supply2.Where(d => d.state_name == state && d.district_name == district && d.activity == ddlsuplyvalue).Distinct().ToList();
                    supldemand2.objabhydemand2 = ABE.objabhy_demand2.Where(d => d.state_name == state && d.district_name == district && d.activity == ddldemandvalue).Distinct().ToList();
                    if (supldemand2.objabhysupply2.Count != 0)
                    {
                        supid = Convert.ToInt32(supldemand2.objabhysupply2[0].supply_id);
                    }
                    if (supldemand2.objabhydemand2.Count != 0)
                    {
                        demdid = Convert.ToInt32(supldemand2.objabhydemand2[0].demand_id);
                    }
                }


                else if (state != "Select State" && district != "Select District" && block != "Select Block" && gp == "Select Gram Panchayat" && ddlsuplyvalue != "Select Supply Activity" && ddldemandvalue == "Select Demand Activity")
                {
                    supldemand2.objabhysupply2 = ABE.objabhy_supply2.Where(d => d.state_name == state && d.district_name == district && d.block == block && d.activity == ddlsuplyvalue).Distinct().ToList();
                    supldemand2.objabhydemand2 = ABE.objabhy_demand2.Where(d => d.state_name == state && d.district_name == district && d.block == block && d.activity == ddldemandvalue).Distinct().ToList();
                    if (supldemand2.objabhysupply2.Count != 0)
                    {
                        supid = Convert.ToInt32(supldemand2.objabhysupply2[0].supply_id);
                    }
                    if (supldemand2.objabhydemand2.Count != 0)
                    {
                        demdid = Convert.ToInt32(supldemand2.objabhydemand2[0].demand_id);
                    }
                }
                else if (state != "Select State" && district != "Select District" && block != "Select Block" && gp == "Select Gram Panchayat" && ddldemandvalue != "Select Demand Activity" && ddlsuplyvalue == "Select Supply Activity")
                {
                    supldemand2.objabhysupply2 = ABE.objabhy_supply2.Where(d => d.state_name == state && d.district_name == district && d.block == block && d.activity == ddlsuplyvalue).Distinct().ToList();
                    supldemand2.objabhydemand2 = ABE.objabhy_demand2.Where(d => d.state_name == state && d.district_name == district && d.block == block && d.activity == ddldemandvalue).Distinct().ToList();
                    if (supldemand2.objabhysupply2.Count != 0)
                    {
                        supid = Convert.ToInt32(supldemand2.objabhysupply2[0].supply_id);
                    }
                    if (supldemand2.objabhydemand2.Count != 0)
                    {
                        demdid = Convert.ToInt32(supldemand2.objabhydemand2[0].demand_id);
                    }
                }
                else if (state != "Select State" && district != "Select District" && block != "Select Block" && gp == "Select Gram Panchayat" && ddldemandvalue != "Select Demand Activity" && ddlsuplyvalue != "Select Supply Activity")
                {
                    supldemand2.objabhysupply2 = ABE.objabhy_supply2.Where(d => d.state_name == state && d.district_name == district && d.block == block && d.activity == ddlsuplyvalue).Distinct().ToList();
                    supldemand2.objabhydemand2 = ABE.objabhy_demand2.Where(d => d.state_name == state && d.district_name == district && d.block == block && d.activity == ddldemandvalue).Distinct().ToList();
                    if (supldemand2.objabhysupply2.Count != 0)
                    {
                        supid = Convert.ToInt32(supldemand2.objabhysupply2[0].supply_id);
                    }
                    if (supldemand2.objabhydemand2.Count != 0)
                    {
                        demdid = Convert.ToInt32(supldemand2.objabhydemand2[0].demand_id);
                    }
                }

                else if (state != "Select State" && district != "Select District" && block != "Select Block" && gp != "Select Gram Panchayat" && ddlsuplyvalue != "Select Supply Activity" && ddldemandvalue != "Select Demand Activity")
                {
                    supldemand2.objabhysupply2 = ABE.objabhy_supply2.Where(d => d.state_name == state && d.district_name == district && d.block == block && d.gpname == gp && d.activity == ddlsuplyvalue).Distinct().ToList();
                    supldemand2.objabhydemand2 = ABE.objabhy_demand2.Where(d => d.state_name == state && d.district_name == district && d.block == block && d.gpname == gp && d.activity == ddldemandvalue).Distinct().ToList();
                    if (supldemand2.objabhysupply2.Count != 0)
                    {
                        supid = Convert.ToInt32(supldemand2.objabhysupply2[0].supply_id);
                    }
                    if (supldemand2.objabhydemand2.Count != 0)
                    {
                        demdid = Convert.ToInt32(supldemand2.objabhydemand2[0].demand_id);
                    }
                }
                else if (state != "Select State" && district != "Select District" && block != "Select Block" && gp != "Select Gram Panchayat" && ddldemandvalue != "Select Demand Activity" && ddlsuplyvalue == "Select Supply Activity")
                {
                    supldemand2.objabhysupply2 = ABE.objabhy_supply2.Where(d => d.state_name == state && d.district_name == district && d.block == block && d.gpname == gp && d.activity == ddlsuplyvalue).Distinct().ToList();
                    supldemand2.objabhydemand2 = ABE.objabhy_demand2.Where(d => d.state_name == state && d.district_name == district && d.block == block && d.gpname == gp && d.activity == ddldemandvalue).Distinct().ToList();
                    if (supldemand2.objabhysupply2.Count != 0)
                    {
                        supid = Convert.ToInt32(supldemand2.objabhysupply2[0].supply_id);
                    }
                    if (supldemand2.objabhydemand2.Count != 0)
                    {
                        demdid = Convert.ToInt32(supldemand2.objabhydemand2[0].demand_id);
                    }
                }
                else if (state != "Select State" && district != "Select District" && block != "Select Block" && gp != "Select Gram Panchayat" && ddldemandvalue != "Select Demand Activity" && ddlsuplyvalue != "Select Supply Activity")
                {
                    supldemand2.objabhysupply2 = ABE.objabhy_supply2.Where(d => d.state_name == state && d.district_name == district && d.block == block && d.gpname == gp && d.activity == ddlsuplyvalue).Distinct().ToList();
                    supldemand2.objabhydemand2 = ABE.objabhy_demand2.Where(d => d.state_name == state && d.district_name == district && d.block == block && d.gpname == gp && d.activity == ddldemandvalue).Distinct().ToList();
                    if (supldemand2.objabhysupply2.Count != 0)
                    {
                        supid = Convert.ToInt32(supldemand2.objabhysupply2[0].supply_id);
                    }
                    if (supldemand2.objabhydemand2.Count != 0)
                    {
                        demdid = Convert.ToInt32(supldemand2.objabhydemand2[0].demand_id);
                    }
                }
                if (supldemand2 != null)
                {
                    if (supldemand2.objabhysupply2.Count != 0)
                    {
                        var suplydata = supldemand2.objabhysupply2;
                        //ABE.objabhy_supply2.Remove(suplydata[0]);
                        ABE.objabhy_supply2.RemoveRange(ABE.objabhy_supply2.Where(c => c.supply_id == supid));
                        ABE.SaveChanges();
                    }
                    if (supldemand2.objabhydemand2.Count != 0)
                    {
                        var demanddata = supldemand2.objabhydemand2;
                        // ABE.objabhy_demand2.Remove(demanddata[0]);
                        ABE.objabhy_demand2.RemoveRange(ABE.objabhy_demand2.Where(c => c.demand_id == demdid));
                        ABE.SaveChanges();
                    }
                    var jsonresult1 = Json("Delete", JsonRequestBehavior.AllowGet);
                    jsonresult1.MaxJsonLength = int.MaxValue;
                    return jsonresult1;
                }
                else
                {
                    var jsonresult1 = Json("NoData", JsonRequestBehavior.AllowGet);
                    jsonresult1.MaxJsonLength = int.MaxValue;
                    return jsonresult1;
                }
            }
            catch (Exception ex)
            {

            }

            return View();
        }

        [HttpPost]
        public ActionResult HouseholdDetails(string state, string dist, string block, string gram)
        {
            var StateName = "";
            var DistName = "";
            var BlockName = "";
            var GramName = "";

            if (state != "undefined")
            {
                if(state != "Select State")
                {
                    StateName = state;
                }
                else
                {
                    StateName = "";
                }
                if (dist != "Select District")
                {
                    DistName = dist;
                }
                else
                {
                    DistName = "";
                }
                if (block != "Select Block")
                {
                    BlockName = block;
                }
                else
                {
                    BlockName = "";
                }

                if (gram != "Select Gram Panchayat")
                {
                    GramName = gram;
                }
                else
                {
                    GramName = "";
                }
                
                Session["StateName"] = StateName;
                Session["DistName"] = DistName;
                Session["BlockName"] = BlockName;
                Session["GramName"] = GramName;
            }
            else
            {
                if (StateName != "Select State")
                {
                    StateName = Session["StateName"].ToString();
                }
                else
                {
                    StateName = "";
                }

                if (DistName != "Select District")
                {
                    DistName = Session["DistName"].ToString();
                }
                else

                {
                    DistName = "";
                }
                if (BlockName != "Select Block")
                {
                    BlockName = Session["BlockName"].ToString();
                }
                else
                {
                    BlockName = "";
                }

                if (GramName != "Select Gram Panchayat")
                {
                    GramName = Session["GramName"].ToString();
                }
                else
                {
                    GramName = "";
                }


            }


            if (StateName != "" && DistName != "Select District" && BlockName != "Select Block" && GramName != "Select Gram Panchayat")
            {
                var Details = ABE.objabhy_households.Where(x => x.state_name == StateName && x.district_name == DistName && x.block == BlockName && x.gname == GramName).ToList();
                return Json(Details, JsonRequestBehavior.AllowGet);
            }
            else if (StateName != null && DistName != "Select District" && BlockName != "Select Block")
            {

                var Details = ABE.objabhy_households.Where(x => x.state_name == StateName && x.district_name == DistName && x.block == BlockName).ToList();
                return Json(Details, JsonRequestBehavior.AllowGet);
            }
            else if (StateName != null && DistName != "Select District")
            {

                var Details = ABE.objabhy_households.Where(x => x.state_name == StateName && x.district_name == DistName).ToList();
                return Json(Details, JsonRequestBehavior.AllowGet);
            }
            else if (StateName != null)
            {

                var Details = ABE.objabhy_households.Where(x => x.state_name == StateName).ToList();
                return Json(Details, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return null;
            }

        }

        [HttpPost]
        public ActionResult SaveHouseHolds(string Data)
        {
            if (Session["UserId"] != null)
            {
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<abhy_households>(Data);
                var Obj = new abhy_households();

                var StateName = "";
                var DistName = "";
                var BlockName = "";
                var GramName = "";

                if (result.state_name != null && result.state_name != "undefined")
                {
                    StateName = result.state_name;
                    DistName = result.district_name;
                    BlockName = result.block;
                    GramName = result.gname;
                    if (StateName != "Select State")
                    {
                        StateName = Session["StateName"].ToString();
                    }
                    else
                    {
                        StateName = "";
                    }

                    if (DistName != "Select District")
                    {
                        DistName = Session["DistName"].ToString();
                    }
                    else

                    {
                        DistName = "";
                    }
                    if (BlockName != "Select Block")
                    {
                        BlockName = Session["BlockName"].ToString();
                    }
                    else
                    {
                        BlockName = "";
                    }

                    if (GramName != "Select Gram Panchayat")
                    {
                        GramName = Session["GramName"].ToString();
                    }
                    else
                    {
                        GramName = "";
                    }

                }
                else
                {
                    StateName = Session["StateName"].ToString();
                    DistName = Session["DistName"].ToString();
                    BlockName = Session["BlockName"].ToString();
                    GramName = Session["GramName"].ToString();

                }

                Obj.category = result.category;
                Obj.minority_f = result.minority_f;
                Obj.minority_m = result.minority_m;
                Obj.obc_f = result.obc_f;
                Obj.obc_m = result.obc_m;
                Obj.others_f = result.others_f;
                Obj.others_m = result.others_m;
                Obj.sc_f = result.sc_f;
                Obj.sc_m = result.sc_m;
                Obj.st_f = result.st_f;
                Obj.st_m = result.st_m;
                Obj.tol_households = result.tol_households;

                if (Session["UserId"] != null)
                {
                    Obj.userid = Convert.ToInt32(Session["UserId"]);
                }

                Obj.state_name = StateName;

                Obj.district_name = DistName;
                Obj.block = BlockName;
                Obj.gname = GramName;
                ABE.objabhy_households.Add(Obj);
                ABE.SaveChanges();
                return Json("Successfully Saved");
            }
            else
            {
                return RedirectToAction("MisLogin", "WSP");
            }
        }



        [HttpPost]
        public ActionResult Getting_Data_Wsp_budget_form(string state, string dist, string block, string gram)
        {
            var StateName = "";
            var DistName = "";
            var BlockName = "";
            var GramName = "";
            if (state != "undefined")
            {
                if (state != "Select State")
                {
                    StateName = state;
                }
                else
                {
                    StateName = "";
                }
                if (dist != "Select District")
                {
                    DistName = dist;
                }
                else
                {
                    DistName = "";
                }
                if (block != "Select Block")
                {
                    BlockName = block;
                }
                else
                {
                    BlockName = "";
                }

                if (gram != "Select Gram Panchayat")
                {
                    GramName = gram;
                }
                else
                {
                    GramName = "";
                }

                Session["StateName"] = StateName;
                Session["DistName"] = DistName;
                Session["BlockName"] = BlockName;
                Session["GramName"] = GramName;
            }
            else
            {
                if (StateName != "Select State")
                {
                    StateName = Session["StateName"].ToString();
                }
                else
                {
                    StateName = "";
                }

                if (DistName != "Select District")
                {
                    DistName = Session["DistName"].ToString();
                }
                else

                {
                    DistName = "";
                }
                if (BlockName != "Select Block")
                {
                    BlockName = Session["BlockName"].ToString();
                }
                else
                {
                    BlockName = "";
                }

                if (GramName != "Select Gram Panchayat")
                {
                    GramName = Session["GramName"].ToString();
                }
                else
                {
                    GramName = "";
                }


            }


            if (StateName != "" && DistName != "" && BlockName != "" && GramName != "")
            {
                var Details = ABE.objabhy_water_budget_form.Where(x => x.state_name == StateName && x.district_name == DistName && x.block == BlockName && x.gname == GramName).ToList();
                return Json(Details, JsonRequestBehavior.AllowGet);
            }
            else if (StateName != "" && DistName != "" && BlockName != "")
            {
                var Details = ABE.objabhy_water_budget_form.Where(x => x.state_name == StateName && x.district_name == DistName && x.block == BlockName).ToList();
                return Json(Details, JsonRequestBehavior.AllowGet);
            }
            else if (StateName != "" && DistName != "")
            {
                var Details = ABE.objabhy_water_budget_form.Where(x => x.state_name == StateName && x.district_name == DistName).ToList();
                return Json(Details, JsonRequestBehavior.AllowGet);
            }
            else if (StateName != "")
            {
                var Details = ABE.objabhy_water_budget_form.Where(x => x.state_name == StateName).ToList();
                return Json(Details, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return RedirectToAction("MisLogin");
            }

        }
        [HttpPost]
        public ActionResult Wsp_budget_form(string Data, string Idd)
        {

            try
            {
                if (Session["UserId"] != null)
                {

                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_water_budget_form>(Data);
                    var Obj = new abhy_water_budget_form();
                    var StateName = "";
                    var DistName = "";
                    var BlockName = "";
                    var GramName = "";
                    if (result.state_name != null && result.state_name != "undefined")
                    {
                        StateName = result.state_name;
                        DistName = result.district_name;
                        BlockName = result.block;
                        GramName = result.gname;
                        if (StateName != "Select State")
                        {
                            StateName = Session["StateName"].ToString();
                        }
                        else
                        {
                            StateName = "";
                        }

                        if (DistName != "Select District")
                        {
                            DistName = Session["DistName"].ToString();
                        }
                        else

                        {
                            DistName = "";
                        }
                        if (BlockName != "Select Block")
                        {
                            BlockName = Session["BlockName"].ToString();
                        }
                        else
                        {
                            BlockName = "";
                        }

                        if (GramName != "Select Gram Panchayat")
                        {
                            GramName = Session["GramName"].ToString();
                        }
                        else
                        {
                            GramName = "";
                        }
                    }
                    else
                    {
                        StateName = Session["StateName"].ToString();
                        DistName = Session["DistName"].ToString();
                        BlockName = Session["BlockName"].ToString();
                        GramName = Session["GramName"].ToString();

                    }


                    var Details1 = ABE.objabhy_water_budget_form.Where(x => x.state_name == StateName && x.district_name == DistName && x.block == BlockName && x.gname == GramName).SingleOrDefault();



                    if (Details1 == null)
                    {
                        Obj.area_non_agri = result.area_non_agri;
                        Obj.barrren_land = result.barrren_land;
                        //Obj.block = result.block;
                        Obj.bullock_drawn = result.bullock_drawn;
                        Obj.centrifugal_pump = result.centrifugal_pump;
                        Obj.social_youth_clubs = result.social_youth_clubs;
                        Obj.cult_waste_land = result.cult_waste_land;
                        Obj.defunt_borewells = result.defunt_borewells;
                        Obj.diesel_pump = result.diesel_pump;
                        // Obj.district_name = result.district_name;
                        Obj.fallow_land = result.fallow_land;
                        Obj.female_population = result.female_population;
                        Obj.forest_area = result.forest_area;
                        //Obj.gname = result.gname;
                        Obj.irri_bore_tube_wells = result.irri_bore_tube_wells;
                        Obj.irri_canals = result.irri_canals;
                        Obj.irri_dugwells = result.irri_dugwells;
                        Obj.irri_dug_borewells = result.irri_dug_borewells;
                        Obj.irri_tanks = result.irri_tanks;
                        Obj.kharif_cotton = result.kharif_cotton;
                        Obj.kharif_maize = result.kharif_maize;
                        Obj.kharif_others = result.kharif_others;
                        Obj.kharif_rabi_others = result.kharif_rabi_others;
                        Obj.kharif_rabi_tomoto = result.kharif_rabi_tomoto;
                        Obj.kharif_rice = result.kharif_rice;
                        Obj.kharif_sugarcane = result.kharif_sugarcane;
                        Obj.kuchha_road = result.kuchha_road;
                        Obj.livestock_bullocks = result.livestock_bullocks;
                        Obj.livestock_cows_buffaloes = result.livestock_cows_buffaloes;
                        Obj.livestock_sheeps_goates = result.livestock_sheeps_goates;
                        Obj.male_population = result.male_population;
                        Obj.monsoon_gw_level = result.monsoon_gw_level;
                        Obj.monsoon_rainfall = result.monsoon_rainfall;
                        Obj.non_monsoon_gw_level = result.non_monsoon_gw_level;
                        Obj.non_monsoon_rainfall = result.non_monsoon_rainfall;
                        Obj.others_govt_private_employees = result.others_govt_private_employees;
                        Obj.power_availbility = result.power_availbility;
                        Obj.power_avg_hours_connectivity = result.power_avg_hours_connectivity;
                        Obj.power_hhs = result.power_hhs;
                        Obj.power_iirigation = result.power_iirigation;
                        Obj.pucca_road = result.pucca_road;
                        Obj.rabi_barley = result.rabi_barley;
                        Obj.rabi_gram = result.rabi_mustard;
                        Obj.rabi_mustard = result.rabi_mustard;
                        Obj.rabi_others = result.rabi_others;
                        Obj.rabi_wheat = result.rabi_wheat;
                        Obj.social_cooperative = result.social_cooperative;
                        Obj.social_others = result.social_others;
                        Obj.social_self_help = result.social_self_help;
                        
                        //Obj.state_name = result.state_name;
                        Obj.tol_agri_labours = result.tol_agri_labours;
                        Obj.tol_farmers = result.tol_farmers;
                        Obj.tol_household_activities = result.tol_household_activities;
                        Obj.tol_population = result.tol_population;
                        Obj.water_agriculture_purpose = result.water_agriculture_purpose;
                        Obj.water_domestic_purpose = result.water_domestic_purpose;
                        Obj.water_drinking_purpose = result.water_drinking_purpose;
                        Obj.water_industrial_purpose = result.water_industrial_purpose;
                        Obj.water_pump = result.water_pump;
                        Obj.working_borewells = result.working_borewells;


                        Obj.state_name = StateName;

                        Obj.district_name = DistName;

                        Obj.block = BlockName;

                        Obj.gname = GramName;

                        ABE.objabhy_water_budget_form.Add(Obj);
                        ABE.SaveChanges();
                        return Json("Successfully Saved");
                    }
                    else
                    {

                        //var Iddd = Convert.ToInt32(Idd);
                        abhy_water_budget_form Details = new abhy_water_budget_form();
                        Details = ABE.objabhy_water_budget_form.Find(long.Parse(Idd));
                        if (Details != null)
                        {

                            //var Details = ABE.objabhy_water_budget_form.Where(a => a.wspid == Iddd).SingleOrDefault();

                            Details.area_non_agri = result.area_non_agri;
                            Details.barrren_land = result.barrren_land;
                            //Details.block = result.block;
                            Details.bullock_drawn = result.bullock_drawn;
                            Details.centrifugal_pump = result.centrifugal_pump;
                            Details.cult_waste_land = result.cult_waste_land;
                            Details.defunt_borewells = result.defunt_borewells;
                            Details.diesel_pump = result.diesel_pump;
                            // Details.district_name = result.district_name;
                            Details.fallow_land = result.fallow_land;
                            Details.female_population = result.female_population;
                            Details.forest_area = result.forest_area;
                            //Details.gname = result.gname;
                            Details.social_youth_clubs = result.social_youth_clubs;
                            Details.irri_bore_tube_wells = result.irri_bore_tube_wells;
                            Details.irri_canals = result.irri_canals;
                            Details.irri_dugwells = result.irri_dugwells;
                            Details.irri_dug_borewells = result.irri_dug_borewells;
                            Details.irri_tanks = result.irri_tanks;
                            Details.kharif_cotton = result.kharif_cotton;
                            Details.kharif_maize = result.kharif_maize;
                            Details.kharif_others = result.kharif_others;
                            Details.kharif_rabi_others = result.kharif_rabi_others;
                            Details.kharif_rabi_tomoto = result.kharif_rabi_tomoto;
                            Details.kharif_rice = result.kharif_rice;
                            Details.kharif_sugarcane = result.kharif_sugarcane;
                            Details.kuchha_road = result.kuchha_road;
                            Details.livestock_bullocks = result.livestock_bullocks;
                            Details.livestock_cows_buffaloes = result.livestock_cows_buffaloes;
                            Details.livestock_sheeps_goates = result.livestock_sheeps_goates;
                            Details.male_population = result.male_population;
                            Details.monsoon_gw_level = result.monsoon_gw_level;
                            Details.monsoon_rainfall = result.monsoon_rainfall;
                            Details.non_monsoon_gw_level = result.non_monsoon_gw_level;
                            Details.non_monsoon_rainfall = result.non_monsoon_rainfall;
                            Details.others_govt_private_employees = result.others_govt_private_employees;
                            Details.power_availbility = result.power_availbility;
                            Details.power_avg_hours_connectivity = result.power_avg_hours_connectivity;
                            Details.power_hhs = result.power_hhs;
                            Details.power_iirigation = result.power_iirigation;
                            Details.pucca_road = result.pucca_road;
                            Details.rabi_barley = result.rabi_barley;
                            Details.rabi_gram = result.rabi_mustard;
                            Details.rabi_mustard = result.rabi_mustard;
                            Details.rabi_others = result.rabi_others;
                            Details.rabi_wheat = result.rabi_wheat;
                            Details.social_cooperative = result.social_cooperative;
                            Details.social_others = result.social_others;
                            Details.social_self_help = result.social_self_help;
                            //Details.state_name = result.state_name;
                            Details.tol_agri_labours = result.tol_agri_labours;
                            Details.tol_farmers = result.tol_farmers;
                            Details.tol_household_activities = result.tol_household_activities;
                            Details.tol_population = result.tol_population;
                            Details.water_agriculture_purpose = result.water_agriculture_purpose;
                            Details.water_domestic_purpose = result.water_domestic_purpose;
                            Details.water_drinking_purpose = result.water_drinking_purpose;
                            Details.water_industrial_purpose = result.water_industrial_purpose;
                            Details.water_pump = result.water_pump;
                            Details.working_borewells = result.working_borewells;


                            Details.state_name = StateName;



                            Details.district_name = DistName;


                            Details.block = BlockName;

                            Details.gname = GramName;
                            ABE.Entry(Details).State = EntityState.Modified;
                            ABE.SaveChanges();
                            return Json("Updated Successfully");
                        }
                        else
                        {
                            return Json("Not Updated");
                        }

                    }
                }
                else
                {
                    return RedirectToAction("MisLogin", "WSP");
                }
            }
            catch (Exception ex)
            {
                return Json(ex);
                
            }

        }


    }
}