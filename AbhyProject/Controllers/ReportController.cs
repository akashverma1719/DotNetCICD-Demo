using AbhyProject.Classes;
using AbhyProject.Models;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Net.Security;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;

namespace AbhyProject.Controllers
{
    public class ReportController : Controller
    {
        // GET: Report
        AbhyEntity ABE = new AbhyEntity();
        public ActionResult Index()
        {
            return View();
        }
        public DateTime ParseDate(string date)
        {
            DateTimeFormatInfo dateFormatProvider = new DateTimeFormatInfo();
            dateFormatProvider.ShortDatePattern = "dd/MM/yyyy";
            return DateTime.Parse(date, dateFormatProvider);
        }
        public ActionResult DashboardReport()
        { //mohan code
            if (Session["statename"].ToString() != "")
            {
                var statename = Session["statename"].ToString();
                var dist = Session["dist"].ToString();
                var block = Session["block"].ToString();
                List<GroundwaterLevels> WaterTableData1 = ABE.objGroundwaterLevels.Where(x => x.State == statename || x.District == dist || x.Block == block).ToList();
                if (WaterTableData1.Count != 0)
                {
                    ViewBag.Lat = Convert.ToDouble(WaterTableData1[0].lat);

                    ViewBag.Lng = Convert.ToDouble(WaterTableData1[0].longitude);

                }
            }

            var Gur = ABE.objAbhy_dashboard_count.Where(x => x.States == "Gujarat").ToList();
            ViewBag.Geographical_area = Gur[0].Geographical_area;
            ViewBag.Villages = Gur[0].Villages;
            ViewBag.Population = Gur[0].Population;
            var Har = ABE.objAbhy_dashboard_count.Where(x => x.States == "Haryana").ToList();
            ViewBag.Geographical_area1 = Har[0].Geographical_area;
            ViewBag.Villages1 = Har[0].Villages;
            ViewBag.Population1 = Har[0].Population;
            var Kar = ABE.objAbhy_dashboard_count.Where(x => x.States == "Karnataka").ToList();
            ViewBag.Geographical_area2 = Kar[0].Geographical_area;
            ViewBag.Villages2 = Kar[0].Villages;
            ViewBag.Population2 = Kar[0].Population;
            var Madh = ABE.objAbhy_dashboard_count.Where(x => x.States == "Madhya Pradesh").ToList();
            ViewBag.Geographical_area3 = Madh[0].Geographical_area;
            ViewBag.Villages3 = Madh[0].Villages;
            ViewBag.Population3 = Madh[0].Population;
            var Mah = ABE.objAbhy_dashboard_count.Where(x => x.States == "Maharashtra").ToList();
            ViewBag.Geographical_area4 = Mah[0].Geographical_area;
            ViewBag.Villages4 = Mah[0].Villages;
            ViewBag.Population4 = Mah[0].Population;
            var Raj = ABE.objAbhy_dashboard_count.Where(x => x.States == "Rajasthan").ToList();
            ViewBag.Geographical_area5 = Raj[0].Geographical_area;
            ViewBag.Villages5 = Raj[0].Villages;
            ViewBag.Population5 = Raj[0].Population;
            var UP = ABE.objAbhy_dashboard_count.Where(x => x.States == "Uttar Pradesh").ToList();
            ViewBag.Geographical_area6 = Raj[0].Geographical_area;
            ViewBag.Villages6 = Raj[0].Villages;
            ViewBag.Population6 = Raj[0].Population;

            //mohan code end
            //mohan code start
            var Gur1 = ABE.objabhy_annual_data.Where(x => x.Annunalid == 1).ToList();
            ViewBag.avg_rainfall = Gur1[0].avg_rainfall;
            ViewBag.sw_bodies = Gur1[0].sw_bodies;
            ViewBag.GWO_wells = Gur1[0].GWO_wells;
            ViewBag.ARGW_Resourses = Gur1[0].ARGW_Resourses;
            ViewBag.AGW_Drafts = Gur1[0].AGW_Drafts;

            var Har1 = ABE.objabhy_annual_data.Where(x => x.state_name == "Haryana").ToList();
            ViewBag.avg_rainfall1 = Har1[0].avg_rainfall;
            ViewBag.sw_bodies1 = Har1[0].sw_bodies;
            ViewBag.GWO_wells1 = Har1[0].GWO_wells;
            ViewBag.ARGW_Resourses1 = Har1[0].ARGW_Resourses;
            ViewBag.AGW_Drafts1 = Har1[0].AGW_Drafts;

            var Kar1 = ABE.objabhy_annual_data.Where(x => x.state_name == "Karnataka").ToList();
            ViewBag.avg_rainfall2 = Kar1[0].avg_rainfall;
            ViewBag.sw_bodies2 = Kar1[0].sw_bodies;
            ViewBag.GWO_wells2 = Kar1[0].GWO_wells;
            ViewBag.ARGW_Resourses2 = Kar1[0].ARGW_Resourses;
            ViewBag.AGW_Drafts2 = Kar1[0].AGW_Drafts;

            var Madh1 = ABE.objabhy_annual_data.Where(x => x.state_name == "Madhya Pradesh").ToList();
            ViewBag.avg_rainfall3 = Madh1[0].avg_rainfall;
            ViewBag.sw_bodies3 = Madh1[0].sw_bodies;
            ViewBag.GWO_wells3 = Madh1[0].GWO_wells;
            ViewBag.ARGW_Resourses3 = Madh1[0].ARGW_Resourses;
            ViewBag.AGW_Drafts3 = Madh1[0].AGW_Drafts;

            var Mah1 = ABE.objabhy_annual_data.Where(x => x.state_name == "Maharashtra").ToList();
            ViewBag.avg_rainfall4 = Mah1[0].avg_rainfall;
            ViewBag.sw_bodies4 = Mah1[0].sw_bodies;
            ViewBag.GWO_wells4 = Mah1[0].GWO_wells;
            ViewBag.ARGW_Resourses4 = Mah1[0].ARGW_Resourses;
            ViewBag.AGW_Drafts4 = Mah1[0].AGW_Drafts;

            var Raj1 = ABE.objabhy_annual_data.Where(x => x.state_name == "Rajasthan").ToList();
            ViewBag.avg_rainfall5 = Raj1[0].avg_rainfall;
            ViewBag.sw_bodies5 = Raj1[0].sw_bodies;
            ViewBag.GWO_wells5 = Raj1[0].GWO_wells;
            ViewBag.ARGW_Resourses5 = Raj1[0].ARGW_Resourses;
            ViewBag.AGW_Drafts5 = Raj1[0].AGW_Drafts;

            var UP1 = ABE.objabhy_annual_data.Where(x => x.state_name == "Uttar Pradesh").ToList();
            ViewBag.avg_rainfall6 = UP1[0].avg_rainfall;
            ViewBag.sw_bodies6 = UP1[0].sw_bodies;
            ViewBag.GWO_wells6 = UP1[0].GWO_wells;
            ViewBag.ARGW_Resourses6 = UP1[0].ARGW_Resourses;
            ViewBag.AGW_Drafts6 = UP1[0].AGW_Drafts;


            //mohan code end
            return View();
        }
        [HttpGet]
        public ActionResult DashboardJsondata()
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
            var Vdata = ABE.objabhy_villages.ToList();

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

                                //vlist = new List<abhy_villages>();
                                //var Villages = Vdata.Where(m => m.sid != 0 && m.did != 0 && m.bid != 0 && m.gpid != 0 && m.vid != 0 && m.sid == state.sid && m.did == district.did && m.bid == mandal.bid && m.gpid == Panchayat.gpid).Distinct().ToArray();
                                //foreach (var village in Villages)
                                //{
                                //    vobj = new abhy_villages();
                                //    vobj.sid = village.sid;
                                //    vobj.did = village.did;
                                //    vobj.bid = village.bid;
                                //    vobj.gpid = village.gpid;
                                //    vobj.vid = village.vid;
                                //    vobj.viname = village.viname;
                                //    vlist.Add(vobj);
                                //}
                                //pobj.abhy_villages = vlist;
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

        [HttpGet]
        public ActionResult ReportGWB()
        {
            return View();
        }
        [HttpPost]
        public ActionResult ReportGWB1(string SurfaceWaterCount, string RechargeTotal, string DraftTotal, string ReachargeandDraftTotal, string finlSWreult, string SurfWatSpringsRainfall, string SurfWatCheckDams1, string SurfWatcanals1, string SurfWatReservior1, string SurfWatLakesPondstanks1, string SurfWatRiver1, string finlreult, string Harvestinres, string Irrigationres, string checkdamres, string Seepagecanelres, string SurfacewaterRecharge, string Gwaterres, string IrrigationDraft, string DrinkingDraft, string DraftIndustry)
        {
            var obj = new abhy_waterbudget_report();
            obj.block = Session["gblock"].ToString();
            obj.userid = Convert.ToInt32(Session["UserId"]);
            obj.state_name = Session["gstate"].ToString();
            obj.district_name = Session["gdist"].ToString();
            obj.block = Session["gblock"].ToString();
            obj.gname = Session["ggram"].ToString();
            obj.email = Session["Email"].ToString();
            if (SurfaceWaterCount != "" && SurfaceWaterCount != null && SurfaceWaterCount != "null")
            {
                Session["SurfaceWaterCount"] = Math.Round(Convert.ToDouble(SurfaceWaterCount), 2);

            }
            else
            {
                Session["SurfaceWaterCount"] = 0;
            }

            if (RechargeTotal != "" && RechargeTotal != null && RechargeTotal != "null")
            {
                Session["RechargeTotal"] = Math.Round(Convert.ToDouble(RechargeTotal), 2);
            }
            else
            {
                Session["RechargeTotal"] = 0;
            }

            if (DraftTotal != "" && DraftTotal != null && DraftTotal != "null")
            {
                Session["DraftTotal"] = Math.Round(Convert.ToDouble(DraftTotal), 2);
            }
            else
            {
                Session["DraftTotal"] = 0;
            }

            if (ReachargeandDraftTotal != "" && ReachargeandDraftTotal != null && ReachargeandDraftTotal != "null")
            {
                Session["ReachargeandDraftTotal"] = Math.Round(Convert.ToDouble(ReachargeandDraftTotal), 2);
            }
            else
            {
                Session["ReachargeandDraftTotal"] = 0;
            }

            if (finlSWreult != "" && finlSWreult != null && finlSWreult != "null")
            {
                Session["finlSWreult"] = Math.Round(Convert.ToDouble(finlSWreult), 2);
            }
            else
            {
                Session["finlSWreult"] = 0;
            }

            if (SurfWatSpringsRainfall != "" && SurfWatSpringsRainfall != null && SurfWatSpringsRainfall != "null")
            {
                Session["SurfWatSpringsRainfall"] = Math.Round(Convert.ToDouble(SurfWatSpringsRainfall), 2);
            }
            else
            {
                Session["SurfWatSpringsRainfall"] = 0;
            }
            if (SurfWatCheckDams1 != "" && SurfWatCheckDams1 != null && SurfWatCheckDams1 != "null")
            {
                Session["SurfWatCheckDams1"] = Math.Round(Convert.ToDouble(SurfWatCheckDams1), 2);
            }
            else
            {
                Session["SurfWatCheckDams1"] = 0;
            }

            if (SurfWatcanals1 != "" && SurfWatcanals1 != null && SurfWatcanals1 != "null")
            {
                Session["SurfWatcanals1"] = Math.Round(Convert.ToDouble(SurfWatcanals1), 2);
            }
            else
            {
                Session["SurfWatcanals1"] = 0;
            }
            if (SurfWatReservior1 != "" && SurfWatReservior1 != null && SurfWatReservior1 != "null")
            {
                Session["SurfWatReservior1"] = Math.Round(Convert.ToDouble(SurfWatReservior1), 2);
            }
            else
            {
                Session["SurfWatReservior1"] = 0;
            }

            if (SurfWatLakesPondstanks1 != "" && SurfWatLakesPondstanks1 != null && SurfWatLakesPondstanks1 != "null")
            {
                Session["SurfWatLakesPondstanks1"] = Math.Round(Convert.ToDouble(SurfWatLakesPondstanks1), 2);
            }
            else
            {
                Session["SurfWatLakesPondstanks1"] = 0;
            }
            if (SurfWatRiver1 != "" && SurfWatRiver1 != null && SurfWatRiver1 != "null")
            {
                Session["SurfWatRiver1"] = Math.Round(Convert.ToDouble(SurfWatRiver1), 2);
            }
            else
            {
                Session["SurfWatRiver1"] = 0;
            }


            if (finlreult != "" && finlreult != null && finlreult != "null")
            {
                Session["finlreult"] = Math.Round(Convert.ToDouble(finlreult), 2);
            }
            else
            {
                Session["finlreult"] = 0;
            }
            if (Harvestinres != "" && Harvestinres != null && Harvestinres != "null")
            {
                Session["Harvestinres"] = Math.Round(Convert.ToDouble(Harvestinres), 2);
            }
            else
            {
                Session["Harvestinres"] = 0;
            }

            if (Irrigationres != "" && Irrigationres != null && Irrigationres != "null")
            {
                Session["Irrigationres"] = Math.Round(Convert.ToDouble(Irrigationres), 2);
            }
            else
            {
                Session["Irrigationres"] = 0;
            }


            if (checkdamres != "" && checkdamres != null && checkdamres != "null")
            {
                Session["checkdamres"] = Math.Round(Convert.ToDouble(checkdamres), 2);
            }
            else
            {
                Session["checkdamres"] = 0;
            }


            if (Seepagecanelres != "" && Seepagecanelres != null && Seepagecanelres != "null")
            {
                Session["Seepagecanelres"] = Math.Round(Convert.ToDouble(Seepagecanelres), 2);
            }
            else
            {
                Session["Seepagecanelres"] = 0;
            }
            if (SurfacewaterRecharge != "" && SurfacewaterRecharge != null && SurfacewaterRecharge != "null")
            {
                Session["SurfacewaterRecharge"] = Math.Round(Convert.ToDouble(SurfacewaterRecharge), 2);
            }
            else
            {
                Session["SurfacewaterRecharge"] = 0;
            }



            if (Gwaterres != "" && Gwaterres != null && Gwaterres != "null")
            {
                Session["Gwaterres"] = Math.Round(Convert.ToDouble(Gwaterres), 2);
            }
            else
            {
                Session["Gwaterres"] = 0;
            }
            if (IrrigationDraft != "" && IrrigationDraft != null && IrrigationDraft != "null")
            {
                Session["IrrigationDraft"] = Math.Round(Convert.ToDouble(IrrigationDraft), 2);
            }
            else
            {
                Session["IrrigationDraft"] = 0;
            }
            if (DrinkingDraft != "" && DrinkingDraft != null && DrinkingDraft != "null")
            {
                Session["DrinkingDraft"] = Math.Round(Convert.ToDouble(DrinkingDraft), 2);
            }
            else
            {
                Session["DrinkingDraft"] = 0;
            }
            if (DraftIndustry != "" && DraftIndustry != null && DraftIndustry != "null")
            {
                Session["DraftIndustry"] = Math.Round(Convert.ToDouble(DraftIndustry), 2);
            }
            else
            {
                Session["DraftIndustry"] = 0;
            }
            DateTime Date1 = DateTime.Today;
            obj.currdate = Date1;
            obj.drinkingdraft = Session["DrinkingDraft"].ToString();
            obj.draftindustry = Session["DraftIndustry"].ToString();
            obj.gwaterres = Session["Gwaterres"].ToString();
            obj.irrigationdraft = Session["IrrigationDraft"].ToString();
            obj.surfacewatercount = Session["SurfaceWaterCount"].ToString();
            obj.rechargetotal = Session["RechargeTotal"].ToString();
            obj.drafttotal = Session["DraftTotal"].ToString();
            obj.reachargeanddrafttotal = Session["ReachargeandDraftTotal"].ToString();
            obj.finlswreult = Session["finlSWreult"].ToString();
            obj.surfwatspringsrainfall = Session["SurfWatSpringsRainfall"].ToString();
            obj.surfwatcheckdams1 = Session["SurfWatCheckDams1"].ToString();
            obj.surfwatcanals1 = Session["SurfWatcanals1"].ToString();
            obj.surfwatreservior1 = Session["SurfWatReservior1"].ToString();
            obj.surfwatlakespondstanks1 = Session["SurfWatLakesPondstanks1"].ToString();
            obj.surfwatriver1 = Session["SurfWatRiver1"].ToString();
            obj.finlreult = Session["finlreult"].ToString();
            obj.harvestinres = Session["Harvestinres"].ToString();
            obj.irrigationres = Session["Irrigationres"].ToString();
            obj.checkdamres = Session["checkdamres"].ToString();
            obj.seepagecanelres = Session["Seepagecanelres"].ToString();
            obj.surfacewaterrecharge = Session["SurfacewaterRecharge"].ToString();
            ABE.objabhy_waterbudget_report.Add(obj);
            ABE.SaveChanges();
            return Json("Ok");
        }

      
        public ActionResult ReportGWm()
        {
            if (Session["gwmUserId"] != null)
            {
                string StateName = Session["GM_State"].ToString();

                string DistName = Session["GM_Dist"].ToString();

                string BlockName = Session["GM_Block"].ToString();
                string UserIdGM = Session["GM_UserID"].ToString();

                DateTime U_Date = DateTime.Now.Date;



                List<Abhy_groundwater_levels2> GroundWaterLevelsData = null;
                List<Abhy_groundwater_quality> abhy_groundwater_quality = null;

                List<Abhy_Rainfall_Saved_Data> RainfallData = null;
                List<Abhy_Rainfall_Saved_Data> Rainfall_Data = null;

                List<Abhy_WaterUtilization_Approval> UtlizationData = null;
                List<Abhy_WaterUtilization_Approval> Utilization_data = null;
                List<Abhy_gwl_quantity> Data = null;

                if (StateName != null && StateName != "" && DistName != null && DistName != "" && BlockName != null && BlockName != "")
                {
                    ViewBag.RaindeviationData1 = ABE.objAbhy_Rainfall_Saved_Data.Where(x => x.state_name == StateName && x.district_name == DistName && x.UserId == UserIdGM).ToList();
                    GroundWaterLevelsData = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName && x.district_name == DistName && x.block == BlockName).Take(1).ToList();
                    ViewBag.WaterdeviationData1 = ABE.objAbhy_WaterUtilization_Approval.Where(x => x.state == StateName && x.dist == DistName && x.block == BlockName && x.UserId == UserIdGM).ToList();
                    abhy_groundwater_quality = ABE.objAbhy_groundwater_quality.Where(x => x.state_name == StateName && x.disrict_name == DistName && x.block == BlockName).ToList();
                    RainfallData = ABE.objAbhy_Rainfall_Saved_Data.Where(x => x.state_name == StateName && x.district_name == DistName && x.UserId == UserIdGM && x.block == BlockName).ToList();
                    Rainfall_Data = new List<Abhy_Rainfall_Saved_Data>();


                    UtlizationData = ABE.objAbhy_WaterUtilization_Approval.Where(x => x.state == StateName && x.dist == DistName && x.block == BlockName && x.UserId == UserIdGM).ToList();
                    Utilization_data = new List<Abhy_WaterUtilization_Approval>();
                    Data = ABE.objAbhy_gwl_quantity.Where(x => x.state_name == StateName && x.district_name == DistName && x.block_name == BlockName).Take(1).ToList();

                }
                else if (StateName != null && StateName != "" && DistName != null && DistName != "")
                {
                    ViewBag.RaindeviationData1 = ABE.objAbhy_Rainfall_Saved_Data.Where(x => x.state_name == StateName && x.district_name == DistName && x.UserId == UserIdGM).ToList();
                    ViewBag.WaterdeviationData1 = ABE.objAbhy_WaterUtilization_Approval.Where(x => x.state == StateName && x.dist == DistName && x.UserId == UserIdGM).ToList(); GroundWaterLevelsData = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName && x.district_name == DistName).Take(1).ToList();
                    abhy_groundwater_quality = ABE.objAbhy_groundwater_quality.Where(x => x.state_name == StateName && x.disrict_name == DistName).ToList();
                    RainfallData = ABE.objAbhy_Rainfall_Saved_Data.Where(x => x.state_name == StateName && x.district_name == DistName && x.UserId == UserIdGM /*&& x.station == StationName*/).ToList();
                    Rainfall_Data = new List<Abhy_Rainfall_Saved_Data>();


                    UtlizationData = ABE.objAbhy_WaterUtilization_Approval.Where(x => x.state == StateName && x.dist == DistName && x.UserId == UserIdGM).ToList();
                    Utilization_data = new List<Abhy_WaterUtilization_Approval>();
                    Data = ABE.objAbhy_gwl_quantity.Where(x => x.state_name == StateName && x.district_name == DistName).Take(1).ToList();

                }
                else
                {
                    ViewBag.RaindeviationData1 = ABE.objAbhy_Rainfall_Saved_Data.Where(x => x.state_name == StateName && x.UserId == UserIdGM).ToList();
                    ViewBag.WaterdeviationData1 = ABE.objAbhy_WaterUtilization_Approval.Where(x => x.state == StateName && x.UserId == UserIdGM).ToList();
                    GroundWaterLevelsData = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName).Take(1).ToList();
                    abhy_groundwater_quality = ABE.objAbhy_groundwater_quality.Where(x => x.state_name == StateName).ToList();
                    RainfallData = ABE.objAbhy_Rainfall_Saved_Data.Where(x => x.state_name == StateName && x.UserId == UserIdGM /*&& x.station == StationName*/).ToList();
                    Rainfall_Data = new List<Abhy_Rainfall_Saved_Data>();


                    UtlizationData = ABE.objAbhy_WaterUtilization_Approval.Where(x => x.state == StateName && x.UserId == UserIdGM).ToList();
                    Utilization_data = new List<Abhy_WaterUtilization_Approval>();
                    Data = ABE.objAbhy_gwl_quantity.Where(x => x.state_name == StateName).Take(1).ToList();

                }
                if (abhy_groundwater_quality.Count != 0)
                {
                    Session["Salinity"] = abhy_groundwater_quality[0].ec;
                    Session["Chloride"] = abhy_groundwater_quality[0].chloride;
                    Session["Fluoride"] = abhy_groundwater_quality[0].fluoride;
                    Session["Sulphate"] = abhy_groundwater_quality[0].sulphate;
                    Session["Nitrate"] = abhy_groundwater_quality[0].nitrate;
                    Session["Iron"] = abhy_groundwater_quality[0].fe;

                }
                if (GroundWaterLevelsData.Count != 0)
                {
                    ViewBag.jan_14 = 0;
                    ViewBag.jan_15 = 0;
                    ViewBag.jan_16 = 0;
                    ViewBag.jan_17 = 0;
                    ViewBag.jan_18 = 0;
                    ViewBag.jan_19 = 0;
                    ViewBag.may_14 = 0;
                    ViewBag.may_15 = 0;
                    ViewBag.may_16 = 0;
                    ViewBag.may_17 = 0;
                    ViewBag.may_18 = 0;
                    ViewBag.aug_14 = 0;
                    ViewBag.aug_15 = 0;
                    ViewBag.aug_16 = 0;
                    ViewBag.aug_17 = 0;
                    ViewBag.aug_18 = 0;
                    ViewBag.nov_14 = 0;
                    ViewBag.nov_15 = 0;
                    ViewBag.nov_16 = 0;
                    ViewBag.nov_17 = 0;
                    ViewBag.nov_18 = 0;
                    if (GroundWaterLevelsData[0].jan_14 != null && GroundWaterLevelsData[0].jan_14 != "NULL")
                    {
                        ViewBag.jan_14 = float.Parse(GroundWaterLevelsData[0].jan_14);
                    }
                    if (GroundWaterLevelsData[0].jan_15 != null && GroundWaterLevelsData[0].jan_15 != "NULL")
                    {
                        ViewBag.jan_15 = float.Parse(GroundWaterLevelsData[0].jan_15);
                    }
                    if (GroundWaterLevelsData[0].jan_16 != null && GroundWaterLevelsData[0].jan_16 != "NULL")
                    {
                        ViewBag.jan_16 = float.Parse(GroundWaterLevelsData[0].jan_16);
                    }
                    if (GroundWaterLevelsData[0].jan_17 != null && GroundWaterLevelsData[0].jan_17 != "NULL")
                    {
                        ViewBag.jan_17 = float.Parse(GroundWaterLevelsData[0].jan_17);
                    }
                    if (GroundWaterLevelsData[0].jan_18 != null && GroundWaterLevelsData[0].jan_18 != "NULL")
                    {
                        ViewBag.jan_18 = float.Parse(GroundWaterLevelsData[0].jan_18);
                    }
                    if (GroundWaterLevelsData[0].jan_19 != null && GroundWaterLevelsData[0].jan_19 != "NULL")
                    {
                        ViewBag.jan_19 = float.Parse(GroundWaterLevelsData[0].jan_19);
                    }

                    if (GroundWaterLevelsData[0].may_14 != null && GroundWaterLevelsData[0].may_14 != "NULL")
                    {
                        ViewBag.may_14 = float.Parse(GroundWaterLevelsData[0].may_14);
                    }
                    if (GroundWaterLevelsData[0].may_15 != null && GroundWaterLevelsData[0].may_15 != "NULL")
                    {
                        ViewBag.may_15 = float.Parse(GroundWaterLevelsData[0].may_15);
                    }
                    if (GroundWaterLevelsData[0].may_16 != null && GroundWaterLevelsData[0].may_16 != "NULL")
                    {
                        ViewBag.may_16 = float.Parse(GroundWaterLevelsData[0].may_16);
                    }
                    if (GroundWaterLevelsData[0].may_17 != null && GroundWaterLevelsData[0].may_17 != "NULL")
                    {
                        ViewBag.may_17 = float.Parse(GroundWaterLevelsData[0].may_17);
                    }
                    if (GroundWaterLevelsData[0].may_18 != null && GroundWaterLevelsData[0].may_18 != "NULL")
                    {
                        ViewBag.may_18 = float.Parse(GroundWaterLevelsData[0].may_18);
                    }



                    if (GroundWaterLevelsData[0].aug_14 != null && GroundWaterLevelsData[0].aug_14 != "NULL")
                    {
                        ViewBag.aug_14 = float.Parse(GroundWaterLevelsData[0].aug_14);
                    }
                    if (GroundWaterLevelsData[0].aug_15 != null && GroundWaterLevelsData[0].aug_15 != "NULL")
                    {
                        ViewBag.aug_15 = float.Parse(GroundWaterLevelsData[0].aug_15);
                    }
                    if (GroundWaterLevelsData[0].aug_16 != null && GroundWaterLevelsData[0].aug_16 != "NULL")
                    {
                        ViewBag.aug_16 = float.Parse(GroundWaterLevelsData[0].aug_16);
                    }
                    if (GroundWaterLevelsData[0].aug_17 != null && GroundWaterLevelsData[0].aug_17 != "NULL")
                    {
                        ViewBag.aug_17 = float.Parse(GroundWaterLevelsData[0].aug_17);
                    }
                    if (GroundWaterLevelsData[0].aug_18 != null && GroundWaterLevelsData[0].aug_18 != "NULL")
                    {
                        ViewBag.aug_18 = float.Parse(GroundWaterLevelsData[0].aug_18);
                    }



                    if (GroundWaterLevelsData[0].nov_14 != null && GroundWaterLevelsData[0].nov_14 != "NULL")
                    {
                        ViewBag.nov_14 = float.Parse(GroundWaterLevelsData[0].nov_14);
                    }
                    if (GroundWaterLevelsData[0].nov_15 != null && GroundWaterLevelsData[0].nov_15 != "NULL")
                    {
                        ViewBag.nov_15 = float.Parse(GroundWaterLevelsData[0].nov_15);
                    }
                    if (GroundWaterLevelsData[0].nov_16 != null && GroundWaterLevelsData[0].nov_16 != "NULL")
                    {
                        ViewBag.nov_16 = float.Parse(GroundWaterLevelsData[0].nov_16);
                    }
                    if (GroundWaterLevelsData[0].nov_17 != null && GroundWaterLevelsData[0].nov_17 != "NULL")
                    {
                        ViewBag.nov_17 = float.Parse(GroundWaterLevelsData[0].nov_17);
                    }
                    if (GroundWaterLevelsData[0].nov_18 != null && GroundWaterLevelsData[0].nov_18 != "NULL")
                    {
                        ViewBag.nov_18 = float.Parse(GroundWaterLevelsData[0].nov_18);
                    }

                }



                //string StationName = Session["gstation"].ToString();


                ViewBag.RaindeviationData = RainfallData;

                ViewBag.WaterdeviationData = UtlizationData;


                if (Data.Count != 0)
                {
                    ViewBag.Area = Data[0].area_sq_km;
                    ViewBag.Stage = Data[0].stage__gwdev_percentage;
                    ViewBag.Available = Data[0].avail_ha_m;
                    var Withdrawal = Data[0].gw_dft_ha_m;
                    var Value = Convert.ToDouble(Withdrawal) / 1000000;
                    ViewBag.Withdrawal = Value;
                }
                return View();
            }
            else if (Session["gstate"] != null && Session["gstate"].ToString() != "null" && Session["gstate"].ToString() != ""  && Session["gstate"].ToString() != "0")
            {
                string StateName = Session["gstate"].ToString();

                string DistName = Session["gdist"].ToString();

                string BlockName = Session["gblock"].ToString();

                DateTime U_Date = DateTime.Now.Date;

                string UserId = Session["UserId"].ToString();

                List<Abhy_groundwater_levels2> GroundWaterLevelsData = null;
                List<Abhy_groundwater_quality> abhy_groundwater_quality = null;

                List<Abhy_Rainfall_Saved_Data> RainfallData = null;
                List<Abhy_Rainfall_Saved_Data> Rainfall_Data = null;

                List<Abhy_WaterUtilization_Approval> UtlizationData = null;
                List<Abhy_WaterUtilization_Approval> Utilization_data = null;
                List<Abhy_gwl_quantity> Data = null;

                if (StateName != null && StateName != "" && DistName != null && DistName != "" && BlockName != null && BlockName != "")
                {
                    ViewBag.RaindeviationData1 = ABE.objAbhy_Total_Rainfall.Where(x => x.state_name == StateName && x.district_name == DistName).ToList();
                    GroundWaterLevelsData = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName && x.district_name == DistName && x.block == BlockName).Take(1).ToList();
                    ViewBag.WaterdeviationData1 = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName && x.district_name == DistName && x.block == BlockName).ToList();
                    abhy_groundwater_quality = ABE.objAbhy_groundwater_quality.Where(x => x.state_name == StateName && x.disrict_name == DistName && x.block == BlockName).ToList();
                    RainfallData = ABE.objAbhy_Rainfall_Saved_Data.Where(x => x.state_name == StateName && x.district_name == DistName && x.UserId == UserId /*&& x.station == StationName*/).ToList();
                    Rainfall_Data = new List<Abhy_Rainfall_Saved_Data>();


                    UtlizationData = ABE.objAbhy_WaterUtilization_Approval.Where(x => x.state == StateName && x.dist == DistName && x.block == BlockName && x.UserId == UserId).ToList();
                    Utilization_data = new List<Abhy_WaterUtilization_Approval>();
                    Data = ABE.objAbhy_gwl_quantity.Where(x => x.state_name == StateName && x.district_name == DistName && x.block_name == BlockName).Take(1).ToList();

                }
                else if (StateName != null && StateName != "" && DistName != null && DistName != "")
                {
                    ViewBag.RaindeviationData1 = ABE.objAbhy_Total_Rainfall.Where(x => x.state_name == StateName && x.district_name == DistName).ToList();
                    ViewBag.WaterdeviationData1 = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName && x.district_name == DistName).ToList();
                    GroundWaterLevelsData = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName && x.district_name == DistName).Take(1).ToList();
                    abhy_groundwater_quality = ABE.objAbhy_groundwater_quality.Where(x => x.state_name == StateName && x.disrict_name == DistName).ToList();
                    RainfallData = ABE.objAbhy_Rainfall_Saved_Data.Where(x => x.state_name == StateName && x.district_name == DistName && x.UserId == UserId /*&& x.station == StationName*/).ToList();
                    Rainfall_Data = new List<Abhy_Rainfall_Saved_Data>();


                    UtlizationData = ABE.objAbhy_WaterUtilization_Approval.Where(x => x.state == StateName && x.dist == DistName && x.UserId == UserId).ToList();
                    Utilization_data = new List<Abhy_WaterUtilization_Approval>();
                    Data = ABE.objAbhy_gwl_quantity.Where(x => x.state_name == StateName && x.district_name == DistName).Take(1).ToList();

                }
                else
                {
                    ViewBag.RaindeviationData1 = ABE.objAbhy_Total_Rainfall.Where(x => x.state_name == StateName).ToList();
                    ViewBag.WaterdeviationData1 = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName).ToList();
                    GroundWaterLevelsData = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == StateName).Take(1).ToList();
                    abhy_groundwater_quality = ABE.objAbhy_groundwater_quality.Where(x => x.state_name == StateName).ToList();
                    RainfallData = ABE.objAbhy_Rainfall_Saved_Data.Where(x => x.state_name == StateName && x.UserId == UserId /*&& x.station == StationName*/).ToList();
                    Rainfall_Data = new List<Abhy_Rainfall_Saved_Data>();


                    UtlizationData = ABE.objAbhy_WaterUtilization_Approval.Where(x => x.state == StateName && x.UserId == UserId).ToList();
                    Utilization_data = new List<Abhy_WaterUtilization_Approval>();
                    Data = ABE.objAbhy_gwl_quantity.Where(x => x.state_name == StateName).Take(1).ToList();

                }
                if (abhy_groundwater_quality.Count != 0)
                {
                    Session["Salinity"] = abhy_groundwater_quality[0].ec;
                    Session["Chloride"] = abhy_groundwater_quality[0].chloride;
                    Session["Fluoride"] = abhy_groundwater_quality[0].fluoride;
                    Session["Sulphate"] = abhy_groundwater_quality[0].sulphate;
                    Session["Nitrate"] = abhy_groundwater_quality[0].nitrate;
                    Session["Iron"] = abhy_groundwater_quality[0].fe;

                }
                if (GroundWaterLevelsData.Count != 0)
                {
                    ViewBag.jan_14 = 0;
                    ViewBag.jan_15 = 0;
                    ViewBag.jan_16 = 0;
                    ViewBag.jan_17 = 0;
                    ViewBag.jan_18 = 0;
                    ViewBag.jan_19 = 0;
                    ViewBag.may_14 = 0;
                    ViewBag.may_15 = 0;
                    ViewBag.may_16 = 0;
                    ViewBag.may_17 = 0;
                    ViewBag.may_18 = 0;
                    ViewBag.aug_14 = 0;
                    ViewBag.aug_15 = 0;
                    ViewBag.aug_16 = 0;
                    ViewBag.aug_17 = 0;
                    ViewBag.aug_18 = 0;
                    ViewBag.nov_14 = 0;
                    ViewBag.nov_15 = 0;
                    ViewBag.nov_16 = 0;
                    ViewBag.nov_17 = 0;
                    ViewBag.nov_18 = 0;
                    if (GroundWaterLevelsData[0].jan_14 != null && GroundWaterLevelsData[0].jan_14 != "NULL")
                    {
                        ViewBag.jan_14 = float.Parse(GroundWaterLevelsData[0].jan_14);
                    }
                    if (GroundWaterLevelsData[0].jan_15 != null && GroundWaterLevelsData[0].jan_15 != "NULL")
                    {
                        ViewBag.jan_15 = float.Parse(GroundWaterLevelsData[0].jan_15);
                    }
                    if (GroundWaterLevelsData[0].jan_16 != null && GroundWaterLevelsData[0].jan_16 != "NULL")
                    {
                        ViewBag.jan_16 = float.Parse(GroundWaterLevelsData[0].jan_16);
                    }
                    if (GroundWaterLevelsData[0].jan_17 != null && GroundWaterLevelsData[0].jan_17 != "NULL")
                    {
                        ViewBag.jan_17 = float.Parse(GroundWaterLevelsData[0].jan_17);
                    }
                    if (GroundWaterLevelsData[0].jan_18 != null && GroundWaterLevelsData[0].jan_18 != "NULL")
                    {
                        ViewBag.jan_18 = float.Parse(GroundWaterLevelsData[0].jan_18);
                    }
                    if (GroundWaterLevelsData[0].jan_19 != null && GroundWaterLevelsData[0].jan_19 != "NULL")
                    {
                        ViewBag.jan_19 = float.Parse(GroundWaterLevelsData[0].jan_19);
                    }

                    if (GroundWaterLevelsData[0].may_14 != null && GroundWaterLevelsData[0].may_14 != "NULL")
                    {
                        ViewBag.may_14 = float.Parse(GroundWaterLevelsData[0].may_14);
                    }
                    if (GroundWaterLevelsData[0].may_15 != null && GroundWaterLevelsData[0].may_15 != "NULL")
                    {
                        ViewBag.may_15 = float.Parse(GroundWaterLevelsData[0].may_15);
                    }
                    if (GroundWaterLevelsData[0].may_16 != null && GroundWaterLevelsData[0].may_16 != "NULL")
                    {
                        ViewBag.may_16 = float.Parse(GroundWaterLevelsData[0].may_16);
                    }
                    if (GroundWaterLevelsData[0].may_17 != null && GroundWaterLevelsData[0].may_17 != "NULL")
                    {
                        ViewBag.may_17 = float.Parse(GroundWaterLevelsData[0].may_17);
                    }
                    if (GroundWaterLevelsData[0].may_18 != null && GroundWaterLevelsData[0].may_18 != "NULL")
                    {
                        ViewBag.may_18 = float.Parse(GroundWaterLevelsData[0].may_18);
                    }



                    if (GroundWaterLevelsData[0].aug_14 != null && GroundWaterLevelsData[0].aug_14 != "NULL")
                    {
                        ViewBag.aug_14 = float.Parse(GroundWaterLevelsData[0].aug_14);
                    }
                    if (GroundWaterLevelsData[0].aug_15 != null && GroundWaterLevelsData[0].aug_15 != "NULL")
                    {
                        ViewBag.aug_15 = float.Parse(GroundWaterLevelsData[0].aug_15);
                    }
                    if (GroundWaterLevelsData[0].aug_16 != null && GroundWaterLevelsData[0].aug_16 != "NULL")
                    {
                        ViewBag.aug_16 = float.Parse(GroundWaterLevelsData[0].aug_16);
                    }
                    if (GroundWaterLevelsData[0].aug_17 != null && GroundWaterLevelsData[0].aug_17 != "NULL")
                    {
                        ViewBag.aug_17 = float.Parse(GroundWaterLevelsData[0].aug_17);
                    }
                    if (GroundWaterLevelsData[0].aug_18 != null && GroundWaterLevelsData[0].aug_18 != "NULL")
                    {
                        ViewBag.aug_18 = float.Parse(GroundWaterLevelsData[0].aug_18);
                    }



                    if (GroundWaterLevelsData[0].nov_14 != null && GroundWaterLevelsData[0].nov_14 != "NULL")
                    {
                        ViewBag.nov_14 = float.Parse(GroundWaterLevelsData[0].nov_14);
                    }
                    if (GroundWaterLevelsData[0].nov_15 != null && GroundWaterLevelsData[0].nov_15 != "NULL")
                    {
                        ViewBag.nov_15 = float.Parse(GroundWaterLevelsData[0].nov_15);
                    }
                    if (GroundWaterLevelsData[0].nov_16 != null && GroundWaterLevelsData[0].nov_16 != "NULL")
                    {
                        ViewBag.nov_16 = float.Parse(GroundWaterLevelsData[0].nov_16);
                    }
                    if (GroundWaterLevelsData[0].nov_17 != null && GroundWaterLevelsData[0].nov_17 != "NULL")
                    {
                        ViewBag.nov_17 = float.Parse(GroundWaterLevelsData[0].nov_17);
                    }
                    if (GroundWaterLevelsData[0].nov_18 != null && GroundWaterLevelsData[0].nov_18 != "NULL")
                    {
                        ViewBag.nov_18 = float.Parse(GroundWaterLevelsData[0].nov_18);
                    }

                }
                


                //string StationName = Session["gstation"].ToString();

                if (UtlizationData.Count != 0)
                {
                    foreach (var item in UtlizationData)
                    {

                        //  DateTime Date1 = DateTime.ParseExact(item.date, "MM/dd/yyyy HH:mm", CultureInfo.InvariantCulture);
                        DateTime Date1 = ParseDate(item.date.ToString());
                        // DateTime publisheddate = ParseDate(item.publish_date);


                        if (Date1 == U_Date)
                        {
                            Utilization_data.Add(item);
                            //ViewBag.WaterdeviationData = item;
                        }

                    }

                    //ViewBag.WaterdeviationData
                }
                if (RainfallData.Count != 0)
                {
                    foreach (var item1 in RainfallData)
                    {
                        // DateTime Date1 = Convert.ToDateTime(item1.date).Date;
                        DateTime Date1 = ParseDate(item1.date.ToString());

                        if (Date1 == U_Date)
                        {
                            Rainfall_Data.Add(item1);
                            //ViewBag.WaterdeviationData = item;
                        }

                    }

                    //ViewBag.WaterdeviationData
                }
                ViewBag.RaindeviationData = Rainfall_Data.Distinct();

                ViewBag.WaterdeviationData = Utilization_data.Distinct();


                if (Data.Count != 0)
                {
                    ViewBag.Area = Data[0].area_sq_km;
                    ViewBag.Stage = Data[0].stage__gwdev_percentage;
                    ViewBag.Available = Data[0].avail_ha_m;
                    var Withdrawal = Data[0].gw_dft_ha_m;
                    var Value = Convert.ToDouble(Withdrawal) / 1000000;
                    ViewBag.Withdrawal = Value;
                }
                return View();
            }
            else
            {
                return RedirectToAction("MisLogin", "WSP");
            }


        }

        [HttpGet]
        public ActionResult Report()
        {

            DateTime U_Date = DateTime.Now.Date;
            //var year = U_Date.Year;
            //var month = U_Date.Month;
            //var day = U_Date.Day;
            //string CurrentDate = day + "/" + month + "/" + year;
            // DateTime PresentDate = Convert.ToDateTime(CurrentDate);
            if (Session["gstate"] != null && Session["gstate"].ToString() != "null" && Session["gstate"].ToString() != "" && Session["gstate"].ToString() != "0")
            {
                string State = Session["gstate"].ToString();
                string UserId = Session["UserId"].ToString();
                string Dist = Session["gdist"].ToString();
                string Block = Session["gblock"].ToString();
                List<Abhy_groundwater_levels2> GroundWaterLevelsData = null;
                List<Abhy_WaterUtilization_Approval> UtlizationData = null;
                List<Abhy_Total_Rainfall> TotalRainfall = null;
                List<Abhy_Rainfall_Saved_Data> RainfallData = null;
                List<Abhy_Rainfall_Saved_Data> Rainfall_Data = null;
                List<Abhy_WaterUtilization_Approval> Utilization_data = new List<Abhy_WaterUtilization_Approval>();
                if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null)
                {
                    GroundWaterLevelsData = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == State && x.district_name == Dist && x.block == Block).Take(1).ToList();

                    UtlizationData = ABE.objAbhy_WaterUtilization_Approval.Where(x => x.state == State && x.dist == Dist && x.block == Block && x.UserId == UserId).ToList();

                    TotalRainfall = ABE.objAbhy_Total_Rainfall.Where(x => x.state_name == State && x.district_name == Dist).ToList();

                    RainfallData = ABE.objAbhy_Rainfall_Saved_Data.Where(x => x.state_name == State && x.district_name == Dist).ToList();
                    Rainfall_Data = ABE.objAbhy_Rainfall_Saved_Data.Where(x => x.state_name == State && x.district_name == Dist).ToList();

                }
                else if (State != "" && State != null && Dist != "" && Dist != null)
                {
                    GroundWaterLevelsData = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == State && x.district_name == Dist).Take(1).ToList();

                    UtlizationData = ABE.objAbhy_WaterUtilization_Approval.Where(x => x.state == State && x.dist == Dist && x.UserId == UserId).ToList();

                    TotalRainfall = ABE.objAbhy_Total_Rainfall.Where(x => x.state_name == State && x.district_name == Dist).ToList();

                    RainfallData = ABE.objAbhy_Rainfall_Saved_Data.Where(x => x.state_name == State && x.district_name == Dist).ToList();
                    Rainfall_Data = ABE.objAbhy_Rainfall_Saved_Data.Where(x => x.state_name == State && x.district_name == Dist).ToList();
                }
                else
                {
                    GroundWaterLevelsData = ABE.objabhy_groundwater_levels2.Where(x => x.state_name == State).Take(1).ToList();

                    UtlizationData = ABE.objAbhy_WaterUtilization_Approval.Where(x => x.state == State && x.UserId == UserId).ToList();

                    TotalRainfall = ABE.objAbhy_Total_Rainfall.Where(x => x.state_name == State).ToList();

                    RainfallData = ABE.objAbhy_Rainfall_Saved_Data.Where(x => x.state_name == State).ToList();
                    Rainfall_Data = ABE.objAbhy_Rainfall_Saved_Data.Where(x => x.state_name == State).ToList();
                }
                if (UtlizationData.Count != 0)
                {
                    foreach (var item in UtlizationData)
                    {
                        //DateTime Date1 = Convert.ToDateTime(item.date).Date;
                        //DateTime Date123 = ParseDate(PresentDate);
                        DateTime Date1 = ParseDate(item.date.ToString());
                        if (Date1 == U_Date)
                        {
                            Utilization_data.Add(item);
                            //ViewBag.WaterdeviationData = item;
                        }

                    }
                }
                if (RainfallData.Count != 0)
                {
                    foreach (var item1 in RainfallData)
                    {
                        // DateTime Date1 = Convert.ToDateTime(item1.date).Date;
                        DateTime Date1 = ParseDate(item1.date.ToString());
                        if (Date1 == U_Date)
                        {
                            Rainfall_Data.Add(item1);
                            //ViewBag.WaterdeviationData = item;
                        }

                    }

                    //ViewBag.WaterdeviationData
                }
                if (Session["gstate"] != null && Session["gstate"].ToString() != "null" && Session["gstate"].ToString() != "" && Session["gstate"].ToString() != "0")
                {

                    if (GroundWaterLevelsData.Count != 0 && Utilization_data.Count == 0)
                    {
                        Session["GWMError"] = "Please Save The Ground Water Level Deviation Data";
                        return Json("Please Save The Ground Water Level Deviation Data", JsonRequestBehavior.AllowGet);

                    }
                    else if (TotalRainfall.Count != 0 && Rainfall_Data.Count == 0)
                    {
                        Session["GWMError"] = "Please Save The Rainfall Deviation Data";
                        return Json("Please Save The Rainfall Deviation Data", JsonRequestBehavior.AllowGet);

                    }
                    else
                    {
                        return Json("Success", JsonRequestBehavior.AllowGet);
                    }


                }
                else
                {
                    Session["GWMError"] = "Please Select State and District,Block";
                    return Json("Please Select State and District,Block", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                Session["GWMError"] = "Please Select State and District,Block";
                return Json("Please Select State and District,Block", JsonRequestBehavior.AllowGet);
            }
        }

        public ActionResult ReportWSP()
        {
            List<abhy_demand1> ddetails = new List<abhy_demand1>();

            if (Session["DUserId"] != null && Session["DemandToDate"] != null)
            {
                var userid = Convert.ToInt32(Session["DUserId"]);
                DateTime Date11 = Convert.ToDateTime(Session["DemandToDate"]);
                var State = Session["gstate"].ToString();
                var Dist = Session["gdist"].ToString();

                var Block = Session["gblock"].ToString();
                var Gram = Session["ggram"].ToString();


                if (State != "" && Dist != "" && Block != "" && Gram != "")
                {
                    ddetails = ABE.objabhy_demand1.Where(x => x.userid == userid && x.state_name == State && x.district_name == Dist && x.block == Block && x.gname == Gram).ToList();//total list

                }
                else if (State != "" && Dist != "" && Block != "")
                {
                    ddetails = ABE.objabhy_demand1.Where(x => x.userid == userid && x.state_name == State && x.district_name == Dist && x.block == Block).ToList();//total list

                }
                else if (State != "" && Dist != "")
                {
                    ddetails = ABE.objabhy_demand1.Where(x => x.userid == userid && x.state_name == State && x.district_name == Dist).ToList();//total list

                }
                else if (State != "")
                {
                    ddetails = ABE.objabhy_demand1.Where(x => x.userid == userid && x.state_name == State).ToList();//total list

                }
                List<abhy_demand1> nddetails = new List<abhy_demand1>();//new list for saving
                DateTime udate = DateTime.Now.Date;
                if (ddetails.Count != 0)
                {
                    foreach (var item in ddetails)
                    {
                        DateTime date1 = Convert.ToDateTime(item.todaydate).Date;
                        if (udate == date1)
                        {
                            nddetails.Add(item);
                        }
                    }
                }
                ViewBag.demandlist = nddetails;

                List<abhy_supply1> suppllylist = new List<abhy_supply1>();
                if (State != "" && Dist != "" && Block != "" && Gram != "")
                {
                    suppllylist = ABE.objabhy_supply1.Where(x => x.userid == userid && x.state_name == State && x.district_name == Dist && x.block == Block && x.gname == Gram).ToList();//total list

                }
                else if (State != "" && Dist != "" && Block != "")
                {
                    suppllylist = ABE.objabhy_supply1.Where(x => x.userid == userid && x.state_name == State && x.district_name == Dist && x.block == Block).ToList();//total list

                }
                else if (State != "" && Dist != "")
                {
                    suppllylist = ABE.objabhy_supply1.Where(x => x.userid == userid && x.state_name == State && x.district_name == Dist).ToList();//total list

                }
                else if (State != "")
                {
                    suppllylist = ABE.objabhy_supply1.Where(x => x.userid == userid && x.state_name == State).ToList();//total list

                }
                List<abhy_supply1> suppllylist1 = new List<abhy_supply1>();
                if (suppllylist.Count != 0)
                {
                    foreach (var item in suppllylist)
                    {
                        DateTime date1 = Convert.ToDateTime(item.todaydate).Date;
                        if (udate == date1)
                        {
                            suppllylist1.Add(item);
                        }
                    }
                }
                ViewBag.suppllylist = suppllylist1;


                return View();
            }
            else
            {
                var userid = Convert.ToInt32(Session["UserId"]);
                DateTime Date11 = DateTime.Now.Date;
                var State = Session["gstate"].ToString();
                var Dist = Session["gdist"].ToString();

                var Block = Session["gblock"].ToString();
                var Gram = Session["ggram"].ToString();


                if (State != "" && Dist != "" && Block != "" && Gram != "")
                {
                    ddetails = ABE.objabhy_demand1.Where(x => x.userid == userid && x.state_name == State && x.district_name == Dist && x.block == Block && x.gname == Gram).ToList();//total list

                }
                else if (State != "" && Dist != "" && Block != "")
                {
                    ddetails = ABE.objabhy_demand1.Where(x => x.userid == userid && x.state_name == State && x.district_name == Dist && x.block == Block).ToList();//total list

                }
                else if (State != "" && Dist != "")
                {
                    ddetails = ABE.objabhy_demand1.Where(x => x.userid == userid && x.state_name == State && x.district_name == Dist).ToList();//total list

                }
                else if (State != "")
                {
                    ddetails = ABE.objabhy_demand1.Where(x => x.userid == userid && x.state_name == State).ToList();//total list

                }
                List<abhy_demand1> nddetails = new List<abhy_demand1>();//new list for saving
                DateTime udate = DateTime.Now.Date;
                if (ddetails.Count != 0)
                {
                    foreach (var item in ddetails)
                    {
                        DateTime date1 = Convert.ToDateTime(item.todaydate).Date;
                        if (udate == date1)
                        {
                            nddetails.Add(item);
                        }
                    }
                }
                ViewBag.demandlist = nddetails;

                List<abhy_supply1> suppllylist = new List<abhy_supply1>();
                if (State != "" && Dist != "" && Block != "" && Gram != "")
                {
                    suppllylist = ABE.objabhy_supply1.Where(x => x.userid == userid && x.state_name == State && x.district_name == Dist && x.block == Block && x.gname == Gram).ToList();//total list

                }
                else if (State != "" && Dist != "" && Block != "")
                {
                    suppllylist = ABE.objabhy_supply1.Where(x => x.userid == userid && x.state_name == State && x.district_name == Dist && x.block == Block).ToList();//total list

                }
                else if (State != "" && Dist != "")
                {
                    suppllylist = ABE.objabhy_supply1.Where(x => x.userid == userid && x.state_name == State && x.district_name == Dist).ToList();//total list

                }
                else if (State != "")
                {
                    suppllylist = ABE.objabhy_supply1.Where(x => x.userid == userid && x.state_name == State).ToList();//total list

                }
                List<abhy_supply1> suppllylist1 = new List<abhy_supply1>();
                if (suppllylist.Count != 0)
                {
                    foreach (var item in suppllylist)
                    {
                        DateTime date1 = Convert.ToDateTime(item.todaydate).Date;
                        if (udate == date1)
                        {
                            suppllylist1.Add(item);
                        }
                    }
                }
                ViewBag.suppllylist = suppllylist1;

                return View();
            }

        }


        [HttpGet]
        public ActionResult DemandData()
        {
            var State = Session["gstate"].ToString();
            var Dist = Session["gdist"].ToString();

            var Block = Session["gblock"].ToString();
            var Gram = Session["ggram"].ToString();
            if (Session["DUserId"] != null && Session["DemandToDate"] != null)
            {
                var UserId = Convert.ToInt32(Session["DUserId"]);
                DateTime Date11 = DateTime.Now.Date;
                if (State != "" && Dist != "" && Block != "" && Gram != "")
                {
                    var demandlist = ABE.objabhy_demand1.Where(x => x.userid == UserId && x.state_name == State && x.district_name == Dist && x.block == Block && x.gname == Gram && x.todaydate == Date11).ToList();
                    return Json(demandlist, JsonRequestBehavior.AllowGet);
                }
                else if (State != "" && Dist != "" && Block != "")
                {
                    var demandlist = ABE.objabhy_demand1.Where(x => x.userid == UserId && x.state_name == State && x.district_name == Dist && x.block == Block && x.todaydate == Date11).ToList();
                    return Json(demandlist, JsonRequestBehavior.AllowGet);
                }
                else if (State != "" && Dist != "")
                {
                    var demandlist = ABE.objabhy_demand1.Where(x => x.userid == UserId && x.state_name == State && x.district_name == Dist && x.todaydate == Date11).ToList();
                    return Json(demandlist, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    var demandlist = ABE.objabhy_demand1.Where(x => x.userid == UserId && x.state_name == State && x.todaydate == Date11).ToList();
                    return Json(demandlist, JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                var UserId = Convert.ToInt32(Session["UserId"]);
                DateTime Date11 = DateTime.Now.Date;
                if (State != "" && Dist != "" && Block != "" && Gram != "")
                {
                    var demandlist = ABE.objabhy_demand1.Where(x => x.userid == UserId && x.state_name == State && x.district_name == Dist && x.block == Block && x.gname == Gram && x.todaydate == Date11).ToList();
                    return Json(demandlist, JsonRequestBehavior.AllowGet);
                }
                else if (State != "" && Dist != "" && Block != "")
                {
                    var demandlist = ABE.objabhy_demand1.Where(x => x.userid == UserId && x.state_name == State && x.district_name == Dist && x.block == Block && x.todaydate == Date11).ToList();
                    return Json(demandlist, JsonRequestBehavior.AllowGet);
                }
                else if (State != "" && Dist != "")
                {
                    var demandlist = ABE.objabhy_demand1.Where(x => x.userid == UserId && x.state_name == State && x.district_name == Dist && x.todaydate == Date11).ToList();
                    return Json(demandlist, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    var demandlist = ABE.objabhy_demand1.Where(x => x.userid == UserId && x.state_name == State && x.todaydate == Date11).ToList();
                    return Json(demandlist, JsonRequestBehavior.AllowGet);
                }
            }


        }
        //SupplyData
        [HttpGet]
        public ActionResult SupplyData()
        {
            var State = Session["gstate"].ToString();
            var Dist = Session["gdist"].ToString();

            var Block = Session["gblock"].ToString();
            var Gram = Session["ggram"].ToString();

            if (Session["DUserId"] != null && Session["DemandToDate"] != null)
            {
                var UserId = Convert.ToInt32(Session["DUserId"]);
                DateTime Date11 = DateTime.Now.Date;
                if (State != "" && Dist != "" && Block != "" && Gram != "")
                {
                    var demandlist = ABE.objabhy_supply1.Where(x => x.userid == UserId && x.state_name == State && x.district_name == Dist && x.block == Block && x.gname == Gram && x.todaydate == Date11).ToList();
                    return Json(demandlist, JsonRequestBehavior.AllowGet);
                }
                else if (State != "" && Dist != "" && Block != "")
                {
                    var demandlist = ABE.objabhy_supply1.Where(x => x.userid == UserId && x.state_name == State && x.district_name == Dist && x.block == Block && x.todaydate == Date11).ToList();
                    return Json(demandlist, JsonRequestBehavior.AllowGet);
                }
                else if (State != "" && Dist != "")
                {
                    var demandlist = ABE.objabhy_supply1.Where(x => x.userid == UserId && x.state_name == State && x.district_name == Dist && x.todaydate == Date11).ToList();
                    return Json(demandlist, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    var demandlist = ABE.objabhy_supply1.Where(x => x.userid == UserId && x.state_name == State && x.todaydate == Date11).ToList();
                    return Json(demandlist, JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                var UserId = Convert.ToInt32(Session["UserId"]);
                DateTime Date11 = DateTime.Now.Date;
                if (State != "" && Dist != "" && Block != "" && Gram != "")
                {
                    var demandlist = ABE.objabhy_supply1.Where(x => x.userid == UserId && x.state_name == State && x.district_name == Dist && x.block == Block && x.gname == Gram && x.todaydate == Date11).ToList();
                    return Json(demandlist, JsonRequestBehavior.AllowGet);
                }
                else if (State != "" && Dist != "" && Block != "")
                {
                    var demandlist = ABE.objabhy_supply1.Where(x => x.userid == UserId && x.state_name == State && x.district_name == Dist && x.block == Block && x.todaydate == Date11).ToList();
                    return Json(demandlist, JsonRequestBehavior.AllowGet);
                }
                else if (State != "" && Dist != "")
                {
                    var demandlist = ABE.objabhy_supply1.Where(x => x.userid == UserId && x.state_name == State && x.district_name == Dist && x.todaydate == Date11).ToList();
                    return Json(demandlist, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    var demandlist = ABE.objabhy_supply1.Where(x => x.userid == UserId && x.state_name == State && x.todaydate == Date11).ToList();
                    return Json(demandlist, JsonRequestBehavior.AllowGet);
                }
            }
        }

        public ActionResult NEWPage()
        {
            return View();
        }
        //[HttpGet]
        //public ActionResult DemandData()
        //{
        //    var UserId = Convert.ToInt32(Session["UserId"]);
        //    DateTime Date11 = DateTime.Now.Date;
        //    var demandlist = ABE.objabhy_demand1.Where(x => x.userid == UserId && x.todaydate == Date11).ToList();
        //    return Json(demandlist, JsonRequestBehavior.AllowGet);
        //}
        ////SupplyData
        //[HttpGet]
        //public ActionResult SupplyData()
        //{
        //    var UserId = Convert.ToInt32(Session["UserId"]);
        //    DateTime Date11 = DateTime.Now.Date;
        //    var demandlist = ABE.objabhy_supply1.Where(x => x.userid == UserId && x.todaydate == Date11).ToList();
        //    return Json(demandlist, JsonRequestBehavior.AllowGet);
        //}

    }
}
