
using AbhyProject.Classes;
using AbhyProject.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
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
    public class DashboardController : Controller
    {
        // GET: Dashboard
        AbhyEntity ABE = new AbhyEntity();
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Dashboard()
        {
            //mohan code
            var Gur = ABE.obj_abhy_waterdraft_new.ToList();
            double Gur_Population = 0;
            double Haryana_Population = 0;
            double Karnataka_population = 0;
            double Madhyapradesh_Population = 0;
            double Maharashtra_Population = 0;
            double Rajasthan_Population = 0;
            double Uttar_Pradesh_Population = 0;

            // domestic_people_count
            if (Gur.Count != 0)
            {

                for (var i = 0; i < Gur.Count; i++)
                {
                    if (Gur[i].state_name == "GUJARAT")
                    {
                        if (Gur[i].domestic_people_count != "" && Gur[i].domestic_people_count != null)
                        {
                            Gur_Population += Convert.ToDouble(Gur[i].domestic_people_count.ToString());
                        }
                    }
                    else if (Gur[i].state_name == "HARYANA")
                    {
                        if (Gur[i].domestic_people_count != "" && Gur[i].domestic_people_count != null)
                        {
                            Haryana_Population += Convert.ToDouble(Gur[i].domestic_people_count);
                        }
                    }
                    else if (Gur[i].state_name == "KARNATAKA")
                    {
                        if (Gur[i].domestic_people_count != "" && Gur[i].domestic_people_count != null)
                        {
                            Karnataka_population += Convert.ToDouble(Gur[i].domestic_people_count);
                        }
                    }
                    else if (Gur[i].state_name == "MADHYA PRADESH")
                    {
                        if (Gur[i].domestic_people_count != "" && Gur[i].domestic_people_count != null)
                        {
                            Madhyapradesh_Population += Convert.ToDouble(Gur[i].domestic_people_count);
                        }
                    }
                    else if (Gur[i].state_name == "MAHARASHTRA")
                    {
                        if (Gur[i].domestic_people_count != "" && Gur[i].domestic_people_count != null)
                        {
                            Maharashtra_Population += Convert.ToDouble(Gur[i].domestic_people_count);
                        }
                    }
                    else if (Gur[i].state_name == "RAJASTHAN")
                    {
                        if (Gur[i].domestic_people_count != "" && Gur[i].domestic_people_count != null)
                        {
                            Rajasthan_Population += Convert.ToDouble(Gur[i].domestic_people_count);
                        }
                    }
                    else if (Gur[i].state_name == "UTTAR PRADESH")
                    {
                        if (Gur[i].domestic_people_count != "" && Gur[i].domestic_people_count != null)
                        {
                            Uttar_Pradesh_Population += Convert.ToDouble(Gur[i].domestic_people_count);
                        }
                    }
                }
            }
            var Details = ABE.obj_abhy_gpdata_new.ToList();

            double GUR_Area = 0;
            double Haryana_Area = 0;
            double Karnataka_Area = 0;
            double Madhya_Pradesh_Area = 0;
            double Maharashtra_Area = 0;
            double Rajasthan_Area = 0;
            double Uttar_Pradesh_Area = 0;


            double GUR_GP_id = 0;
            double Haryana_GP_id = 0;
            double Karnataka_GP_id = 0;
            double Madhya_Pradesh_GP_id = 0;
            double Maharashtra_GP_id = 0;
            double Rajasthan_GP_id = 0;
            double Uttar_Pradesh_GP_id = 0;
            if (Details.Count != 0)
            {
                for (var i = 0; i < Details.Count; i++)
                {
                    if (Details[i].state_name == "GUJARAT")
                    {
                        if (Details[i].gp_area != null && Details[i].gp_area != "")
                        {
                            GUR_Area += Convert.ToDouble(Details[i].gp_area);
                        }

                        GUR_GP_id += 1;

                    }
                    else if (Details[i].state_name == "HARYANA")
                    {
                        if (Details[i].gp_area != null && Details[i].gp_area != "")
                        {
                            Haryana_Area += Convert.ToDouble(Details[i].gp_area);
                        }

                        Haryana_GP_id += 1;

                    }
                    else if (Details[i].state_name == "KARNATAKA")
                    {
                        if (Details[i].gp_area != null && Details[i].gp_area != "")
                        {
                            Karnataka_Area += Convert.ToDouble(Details[i].gp_area);
                        }

                        Karnataka_GP_id += 1;

                    }
                    else if (Details[i].state_name == "MADHYA PRADESH")
                    {
                        if (Details[i].gp_area != null && Details[i].gp_area != "")
                        {
                            Madhya_Pradesh_Area += Convert.ToDouble(Details[i].gp_area);
                        }

                        Madhya_Pradesh_GP_id += 1;

                    }
                    else if (Details[i].state_name == "MAHARASHTRA")
                    {
                        if (Details[i].gp_area != null && Details[i].gp_area != "")
                        {
                            Maharashtra_Area += Convert.ToDouble(Details[i].gp_area);
                        }

                        Maharashtra_GP_id += 1;

                    }
                    else if (Details[i].state_name == "RAJASTHAN")
                    {
                        if (Details[i].gp_area != null && Details[i].gp_area != "")
                        {
                            Rajasthan_Area += Convert.ToDouble(Details[i].gp_area);
                        }


                        Rajasthan_GP_id += 1;

                    }
                    else if (Details[i].state_name == "UTTAR PRADESH")
                    {
                        if (Details[i].gp_area != null && Details[i].gp_area != "")
                        {
                            Uttar_Pradesh_Area += Convert.ToDouble(Details[i].gp_area);
                        }

                        Uttar_Pradesh_GP_id += 1;

                    }
                }
            }


            ViewBag.Population = Gur_Population;
            ViewBag.Geographical_area = Math.Round(GUR_Area, 2);
            ViewBag.Villages = Math.Round(GUR_GP_id, 2);
            ViewBag.Geographical_area1 = Math.Round(Haryana_Area, 2);
            ViewBag.Villages1 = Math.Round(Haryana_GP_id, 2);
            ViewBag.Population1 = Haryana_Population;

            ViewBag.Geographical_area2 = Math.Round(Karnataka_Area, 2);
            ViewBag.Villages2 = Math.Round(Karnataka_GP_id, 2);
            ViewBag.Population2 = Karnataka_population;

            ViewBag.Geographical_area3 = Math.Round(Madhya_Pradesh_Area, 2);
            ViewBag.Villages3 = Madhyapradesh_Population;
            ViewBag.Population3 = Math.Round(Madhya_Pradesh_GP_id, 2);

            ViewBag.Geographical_area4 = Math.Round(Maharashtra_Area, 2);
            ViewBag.Villages4 = Math.Round(Maharashtra_GP_id, 2);
            ViewBag.Population4 = Maharashtra_Population;

            ViewBag.Geographical_area5 = Math.Round(Rajasthan_Area, 2);
            ViewBag.Villages5 = Math.Round(Rajasthan_GP_id, 2);
            ViewBag.Population5 = Rajasthan_Population;


            ViewBag.Geographical_area6 = Math.Round(Uttar_Pradesh_Area, 2);
            ViewBag.Villages6 = Math.Round(Uttar_Pradesh_GP_id, 2);
            ViewBag.Population6 = Uttar_Pradesh_Population;

            List<abhy_villages> model = ABE.objabhy_villages.ToList();
            return View(model);
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



        public ActionResult DashboardTotal()
        {
            //mohan code
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

            //prasad code
            string statename = Session["statename"].ToString();
            string dist = Session["dist"].ToString();
            string block = Session["block"].ToString();
            string vill = "";
            string gram =
                ToString();
            if (Session["vill"].ToString() != "")
            {
                vill = Session["vill"].ToString();
            }
            //Instutional Index Code
            List<InstitutionalIndex> Index = ABE.objInstitutionalIndex.ToList();
            ViewBag.state1 = Index[0].State;
            ViewBag.state2 = Index[1].State;
            ViewBag.state3 = Index[2].State;
            ViewBag.state4 = Index[3].State;
            ViewBag.state5 = Index[4].State;
            ViewBag.state6 = Index[5].State;
            ViewBag.state7 = Index[6].State;
            ViewBag.state1data = Index[0].Index;
            ViewBag.state2data = Index[1].Index;
            ViewBag.state3data = Index[2].Index;
            ViewBag.state4data = Index[3].Index;
            ViewBag.state5data = Index[4].Index;
            ViewBag.state6data = Index[5].Index;
            ViewBag.state7data = Index[6].Index;
            //Ending

            List<GroundwaterLevels> WaterTableData1 = ABE.objGroundwaterLevels.Where(x => x.State == statename || x.District == dist || x.Block == block).ToList();
            //3 graphs Data
            List<GP_waterYear_JuneTOMay> junetomaydata = ABE.objGP_waterYear_JuneTOMay.ToList();
            ViewBag.ToatalAvialble = junetomaydata[85].TotalGW_Rech;
            ViewBag.Consuming = junetomaydata[85].GW_Draft_PumpedWaterWell;
            ViewBag.Balance = junetomaydata[85].Balance_Kharif;

            ViewBag.RabiTotalAvailable = junetomaydata[85].TotalGW_Avail_RabiCrops;
            ViewBag.RabiTotalConsuming = 0;
            ViewBag.RabiBalance = junetomaydata[85].Balance_Rabi;
            ViewBag.ReachargeRainfall = junetomaydata[85].GroundRech_Rainfall_JunetoOct;
            ViewBag.Harvesting = junetomaydata[85].GWRech_Harvesting_JuneToOct;
            ViewBag.Agir_Consuming = junetomaydata[85].GW_Draft_Irrigation;
            ViewBag.Industry = junetomaydata[85].GW_Draft_DraningAndInd;
            ViewBag.Drinking = junetomaydata[85].GW_Draft_PumpedWaterWell;
            ViewBag.A_Balance = junetomaydata[85].Balance_Rabi;

            List<RainFallData> rainfallData = ABE.objRainFallData.Where(x => x.State == statename && x.District == dist && x.Block == block).ToList();
            if (rainfallData.Count != 0)
            {
                ViewBag.r2007 = rainfallData[0].mon_2007;
                ViewBag.r2008 = rainfallData[0].mon_2008;
                ViewBag.r2009 = rainfallData[0].mon_2009;
                ViewBag.r2010 = rainfallData[0].mon_2010;
                ViewBag.r2011 = rainfallData[0].mon_2011;
                ViewBag.r2012 = rainfallData[0].mon_2012;
                ViewBag.r2013 = rainfallData[0].mon_2013;
                ViewBag.r2014 = rainfallData[0].mon_2014;
                ViewBag.r2015 = rainfallData[0].mon_2015;
                ViewBag.r2016 = rainfallData[0].mon_2016;
                ViewBag.r2017 = rainfallData[0].mon_2017;
                ViewBag.r2018 = rainfallData[0].mon_2018;
                ViewBag.r2019 = rainfallData[0].mon_2019;
                ViewBag.r2020 = rainfallData[0].mon_2020;
                ViewBag.r2021 = rainfallData[0].mon_2021;
                ViewBag.r2022 = rainfallData[0].mon_2022;
                ViewBag.r2023 = rainfallData[0].mon_2023;

            }
            List<GroundwaterLevels> WaterTableData = ABE.objGroundwaterLevels.Where(x => x.State == statename && x.District == dist && x.Block == block).ToList();
            ViewBag.WaterTableData = WaterTableData;
            // GwL Data
            if (WaterTableData.Count != 0)
            {
                ViewBag.g2007 = WaterTableData[0].bl2007;
                ViewBag.g2008 = WaterTableData[0].bl2008;
                ViewBag.g2009 = WaterTableData[0].bl2009;
                ViewBag.g2010 = WaterTableData[0].bl2010;
                ViewBag.g2011 = WaterTableData[0].bl2011;
                ViewBag.g2012 = WaterTableData[0].bl2012;
                ViewBag.g2013 = WaterTableData[0].bl2013;
                ViewBag.g2014 = WaterTableData[0].bl2014;
                ViewBag.g2015 = WaterTableData[0].bl2015;
                ViewBag.g2016 = WaterTableData[0].bl2016;
                ViewBag.g2017 = WaterTableData[0].bl2017;
                ViewBag.g2018 = WaterTableData[0].bl2018;
                ViewBag.g2019 = WaterTableData[0].bl2019;
                ViewBag.g2020 = WaterTableData[0].bl2020;
                ViewBag.g2021 = WaterTableData[0].bl2021;

            }

            if (WaterTableData1.Count != 0)
            {
                ViewBag.Lat = Convert.ToDouble(WaterTableData1[0].lat);

                ViewBag.Lng = Convert.ToDouble(WaterTableData1[0].longitude);

            }
            List<abhystates_completecensusdata_new> DistrictlevelData = new List<abhystates_completecensusdata_new>();
            if (Session["vill"].ToString() != "")
            {
                DistrictlevelData = ABE.objabhystates_completecensusdata_new.Where(x => x.state_name == statename && x.district_name == dist && x.sub_district_name == block && x.gram_panchayat_name == gram).Take(1).ToList();

            }
            else
            {
                DistrictlevelData = ABE.objabhystates_completecensusdata_new.Where(x => x.state_name == statename && x.district_name == dist && x.sub_district_name == block && x.gram_panchayat_name == gram).Take(1).ToList();

            }

            if (DistrictlevelData.Count != 0)
            {
                ViewBag.DLdist = DistrictlevelData[0].district_name;
                ViewBag.DLta = DistrictlevelData[0].Total_Geographical_Area_in_Hectares;
                ViewBag.DLtp = DistrictlevelData[0].Total_Population_of_Village;
                ViewBag.DLna = DistrictlevelData[0].Net_Area_Sown_in_Hectares;
                ViewBag.DLca = DistrictlevelData[0].Canals_Area_in_Hectares;
                ViewBag.DLwells = DistrictlevelData[0].Wells_Tube_Wells_Area_in_Hectares;
                ViewBag.DLtanks = DistrictlevelData[0].Tanks_Lakes_Area_in_Hectares;
            }
            return View();
        }
        [HttpPost]
        public ActionResult DashboardTotal(string statename, string dist, string block, string gram, string vill)
        {
            Session["statename"] = statename;
            if (dist != "")
            {
                var Did = Convert.ToInt32(dist);
                var Dists = ABE.objabhy_districts.Where(x => x.did == Did).SingleOrDefault();
                Session["dist"] = Dists.district_name;
            }
            else
            {
                Session["dist"] = "";
            }
            if (block != "")
            {
                var BID = Convert.ToInt32(block);
                var Blocks = ABE.objabhy_blocks.Where(x => x.bid == BID).SingleOrDefault();

                Session["block"] = Blocks.block_name;
            }
            else
            {
                Session["block"] = "";
            }
            if (gram != "")
            {
                var GID = Convert.ToInt32(gram);
                var Grams = ABE.objabhy_grampanchayat.Where(x => x.gpid == GID).SingleOrDefault();
                Session["gram"] = Grams.gpname;
            }
            else
            {
                Session["gram"] = "";
            }
            if (vill != "")
            {
                var VID = Convert.ToInt32(vill);
                var Vills = ABE.objabhy_villages.Where(x => x.vid == VID).SingleOrDefault();
                Session["vill"] = Vills.viname;
            }
            else
            {
                Session["vill"] = "";
            }




            return Json("ok");
        }

        public ActionResult DashboardCount()
        {
            ViewBag.dashboardcount = ABE.objAbhy_dashboard_count.ToList();

            return View();
        }

        [HttpPost]

        public ActionResult dashboardDistrictJsondata()
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

        [HttpGet]
        public ActionResult district_Dashboard()
        {
            List<abhy_villages> model = ABE.objabhy_villages.ToList();
            return View(model);

        }
        [HttpPost]
        public ActionResult gostatedata(string statename, string stateid)
        {
            try
            {
                if (statename != "" && statename != null && stateid != "" && stateid != null)
                {
                    var sid = Convert.ToInt32(stateid);
                    FilterDataModel data = new FilterDataModel();
                    data.Abhy_groundwater_levels = ABE.objabhy_groundwater_levels2.Where(s => s.state_name == statename).Distinct().ToList();
                    data.Abhy_WaterUtilization_Approvals = ABE.objAbhy_WaterUtilization_Approval.Where(s => s.state == statename).Distinct().ToList();
                    data.abhy_grampanchayas = ABE.objabhy_grampanchayat.Where(s => s.sid == sid).Distinct().ToList();
                    data.abhystates_completecensusdata_Inserts = ABE.objabhystates_completecensusdata_Insert1.Where(d => d.state_name == statename).Distinct().ToList();
                    data.abhy_supplys = ABE.objabhy_supply1.Where(s => s.state_name == statename).Distinct().ToList();
                    data.abhy_demands = ABE.objabhy_demand1.Where(s => s.state_name == statename).Distinct().ToList();

                    var data1 = Json(data, JsonRequestBehavior.AllowGet);
                    data1.MaxJsonLength = int.MaxValue;
                    return data1;
                }

            }
            catch (Exception ex)
            {

            }
            return View();
        }
        [HttpPost]
        public ActionResult gofillterdata(string district, string block, string gp, string statename, string stateid, string distid, string blockid, string gpid)
        {
            try
            {
                if (district != "" && block != "" && gp != "" && statename != "" && stateid != "" && distid != "" && blockid != "" && gpid != "")
                {

                    //if(stateid != "")
                    //{
                    var sid = Convert.ToInt32(stateid);
                    //}
                    //if (distid != "")
                    //{
                    var did = Convert.ToInt32(distid);
                    //}
                    //if (blockid != "")
                    //{
                    var bid = Convert.ToInt32(blockid);
                    //}
                    //if (gpid != "")
                    //{
                    var gid = Convert.ToInt32(gpid);
                    //}

                    FilterDataModel data = new FilterDataModel();
                    data.abhy_grampanchayas = ABE.objabhy_grampanchayat.Where(s => s.sid == sid && s.did == did && s.bid == bid && s.gpid == gid).Distinct().ToList();
                    data.Abhy_groundwater_levels = ABE.objabhy_groundwater_levels2.Where(s => s.state_name == statename && s.district_name == district && s.block == block).Distinct().ToList();
                    data.Abhy_WaterUtilization_Approvals = ABE.objAbhy_WaterUtilization_Approval.Where(s => s.state == statename && s.dist == district && s.block == block).Distinct().ToList();
                    data.abhystates_completecensusdata_Inserts = ABE.objabhystates_completecensusdata_Insert1.Where(d => d.state_name == statename && d.district_name == district && d.sub_district_name == block && d.gram_panchayat_name == gp).Distinct().ToList();
                    data.abhy_supplys = ABE.objabhy_supply1.Where(s => s.state_name == statename && s.district_name == district && s.block == block && s.gname == gp).Distinct().ToList();
                    data.abhy_demands = ABE.objabhy_demand1.Where(s => s.state_name == statename && s.district_name == district && s.block == block && s.gname == gp).Distinct().ToList();

                    var data1 = Json(data, JsonRequestBehavior.AllowGet);
                    data1.MaxJsonLength = int.MaxValue;
                    return data1;
                }
                else if (district != "" && block != "" && statename != "" && stateid != "" && distid != "" && blockid != "")
                {
                    var sid = Convert.ToInt32(stateid);
                    var did = Convert.ToInt32(distid);
                    var bid = Convert.ToInt32(blockid);
                    FilterDataModel data = new FilterDataModel();
                    data.Abhy_groundwater_levels = ABE.objabhy_groundwater_levels2.Where(s => s.state_name == statename && s.district_name == district && s.block == block).Distinct().ToList();
                    data.Abhy_WaterUtilization_Approvals = ABE.objAbhy_WaterUtilization_Approval.Where(s => s.state == statename && s.dist == district && s.block == block).Distinct().ToList();
                    data.abhy_grampanchayas = ABE.objabhy_grampanchayat.Where(s => s.sid == sid && s.did == did && s.bid == bid).Distinct().ToList();
                    data.abhystates_completecensusdata_Inserts = ABE.objabhystates_completecensusdata_Insert1.Where(d => d.state_name == statename && d.district_name == district && d.sub_district_name == block).Distinct().ToList();
                    data.abhy_supplys = ABE.objabhy_supply1.Where(s => s.state_name == statename && s.district_name == district && s.block == block).Distinct().ToList();
                    data.abhy_demands = ABE.objabhy_demand1.Where(s => s.state_name == statename && s.district_name == district && s.block == block).Distinct().ToList();

                    var data1 = Json(data, JsonRequestBehavior.AllowGet);
                    data1.MaxJsonLength = int.MaxValue;
                    return data1;
                }
                else if (district != "" && statename != "" && stateid != "" && distid != "")
                {
                    var sid = Convert.ToInt32(stateid);
                    var did = Convert.ToInt32(distid);

                    FilterDataModel data = new FilterDataModel();
                    data.Abhy_groundwater_levels = ABE.objabhy_groundwater_levels2.Where(s => s.state_name == statename && s.district_name == district).Distinct().ToList();
                    data.Abhy_WaterUtilization_Approvals = ABE.objAbhy_WaterUtilization_Approval.Where(s => s.state == statename && s.dist == district).Distinct().ToList();
                    data.abhy_grampanchayas = ABE.objabhy_grampanchayat.Where(s => s.sid == sid && s.did == did).Distinct().ToList();
                    data.abhystates_completecensusdata_Inserts = ABE.objabhystates_completecensusdata_Insert1.Where(d => d.state_name == statename && d.district_name == district).Distinct().ToList();
                    data.abhy_supplys = ABE.objabhy_supply1.Where(s => s.state_name == statename && s.district_name == district).Distinct().ToList();
                    data.abhy_demands = ABE.objabhy_demand1.Where(s => s.state_name == statename && s.district_name == district).Distinct().ToList();

                    var data1 = Json(data, JsonRequestBehavior.AllowGet);
                    data1.MaxJsonLength = int.MaxValue;
                    return data1;
                }
                else if (statename != "" && stateid != "")
                {
                    var sid = Convert.ToInt32(stateid);

                    FilterDataModel data = new FilterDataModel();
                    data.Abhy_groundwater_levels = ABE.objabhy_groundwater_levels2.Where(s => s.state_name == statename).Distinct().ToList();
                    data.Abhy_WaterUtilization_Approvals = ABE.objAbhy_WaterUtilization_Approval.Where(s => s.state == statename).Distinct().ToList();
                    data.abhy_grampanchayas = ABE.objabhy_grampanchayat.Where(s => s.sid == sid).Distinct().ToList();
                    data.abhystates_completecensusdata_Inserts = ABE.objabhystates_completecensusdata_Insert1.Where(d => d.state_name == statename).Distinct().ToList();
                    data.abhy_supplys = ABE.objabhy_supply1.Where(s => s.state_name == statename).Distinct().ToList();
                    data.abhy_demands = ABE.objabhy_demand1.Where(s => s.state_name == statename).Distinct().ToList();

                    var data1 = Json(data, JsonRequestBehavior.AllowGet);
                    data1.MaxJsonLength = int.MaxValue;
                    return data1;
                }

            }
            catch (Exception ex)
            {

            }
            return View();

        }

        [HttpPost]
        public ActionResult goNationaldata()
        {
            try
            {
                FilterDataModel data = new FilterDataModel();
                data.Abhy_groundwater_levels = ABE.objabhy_groundwater_levels2.Distinct().ToList();
                data.Abhy_WaterUtilization_Approvals = ABE.objAbhy_WaterUtilization_Approval.Distinct().ToList();
                data.abhy_grampanchayas = ABE.objabhy_grampanchayat.Distinct().ToList();
                data.abhystates_completecensusdata_Inserts = ABE.objabhystates_completecensusdata_Insert1.Distinct().ToList();
                data.abhy_supplys = ABE.objabhy_supply1.Distinct().ToList();
                data.abhy_demands = ABE.objabhy_demand1.Distinct().ToList();

                var data1 = Json(data, JsonRequestBehavior.AllowGet);
                data1.MaxJsonLength = int.MaxValue;
                return data1;
            }
            catch (Exception ex)
            {

            }
            return View();
        }


        // DashBoard Code


        [HttpGet]
        public ActionResult PIP_Agency_Info()
        {

            List<abhy_mis_pip_awp_feedback> ddetails = ABE.obj_abhy_mis_pip_awp_feedback.ToList();//total list

            return Json(ddetails, JsonRequestBehavior.AllowGet);

        }

        [HttpGet]
        public ActionResult PIP_Info(string StateName)
        {

            List<abhy_mis_pip_form> ddetails = new List<abhy_mis_pip_form>();
            if (StateName == "ALL")
            {
                ddetails = ABE.obj_abhy_mis_pip_form.ToList();
            }
            else
            {
                ddetails = ABE.obj_abhy_mis_pip_form.Where(x => x.state_name == StateName).ToList();
            }


            return Json(ddetails, JsonRequestBehavior.AllowGet);

        }
        [HttpGet]
        public ActionResult PIP_B_Info(string StateName)
        {

            List<abhy_mis_pip_b_form> ddetails = new List<abhy_mis_pip_b_form>();

            if (StateName == "ALL")
            {
                ddetails = ABE.obj_abhy_mis_pip_b_form.ToList();//total list

            }
            else
            {
                ddetails = ABE.obj_abhy_mis_pip_b_form.Where(x => x.state_name == StateName).ToList();//total list
            }


            return Json(ddetails, JsonRequestBehavior.AllowGet);

        }



        [HttpGet]
        public ActionResult AWP_Info(string FIN_Year, string StateName)
        {

            List<abhy_mis_awp_form> ddetails = new List<abhy_mis_awp_form>();
            var userid = Convert.ToInt32(Session["UserId"]);

            if (StateName != "" && FIN_Year != "" && FIN_Year != null && FIN_Year != "0")
            {
                if (StateName == "ALL")
                {
                    ddetails = ABE.obj_abhy_mis_awp_form.Where(x => x.awp_fin_year == FIN_Year).ToList();//total list
                }
                else
                {
                    ddetails = ABE.obj_abhy_mis_awp_form.Where(x => x.awp_fin_year == FIN_Year && x.state_name == StateName).ToList();//total list
                }

            }
            else if (StateName != "" && FIN_Year == "" || FIN_Year == null || FIN_Year != "0")
            {
                if (StateName == "ALL")
                {
                    ddetails = ABE.obj_abhy_mis_awp_form.ToList();//total list
                }
                else
                {
                    ddetails = ABE.obj_abhy_mis_awp_form.Where(x => x.state_name == StateName).ToList();//total list
                }
            }
            else if (FIN_Year != "" && FIN_Year != null)
            {
                ddetails = ABE.obj_abhy_mis_awp_form.Where(x => x.awp_fin_year == FIN_Year).ToList();//total list

            }
            return Json(ddetails, JsonRequestBehavior.AllowGet);

        }

        [HttpGet]
        public ActionResult AWP_B_Info(string FIN_Year, string StateName)
        {


            List<abhy_mis_awp_b_form> ddetails = new List<abhy_mis_awp_b_form>();
            if (StateName != "" && FIN_Year != "" && FIN_Year != null)
            {
                if (StateName == "ALL")
                {
                    ddetails = ABE.obj_abhy_mis_awp_b_form.Where(x => x.awp_fin_year == FIN_Year).ToList();//total list
                }
                else
                {
                    ddetails = ABE.obj_abhy_mis_awp_b_form.Where(x => x.awp_fin_year == FIN_Year && x.state_name == StateName).ToList();//total list
                }

            }
            else if (StateName != "" && FIN_Year == "" || FIN_Year == null)
            {
                if (StateName == "ALL")
                {
                    ddetails = ABE.obj_abhy_mis_awp_b_form.ToList();//total list
                }
                else
                {
                    ddetails = ABE.obj_abhy_mis_awp_b_form.Where(x => x.state_name == StateName).ToList();//total list
                }


            }
            else if (FIN_Year != "" && FIN_Year != null)
            {
                ddetails = ABE.obj_abhy_mis_awp_b_form.Where(x => x.awp_fin_year == FIN_Year).ToList();//total list

            }
            return Json(ddetails, JsonRequestBehavior.AllowGet);

        }


        [HttpGet]
        public ActionResult AWP_Info_All(string StateName)
        {
            try
            {

                List<abhy_mis_awp_form> ddetails = new List<abhy_mis_awp_form>();
                var userid = Convert.ToInt32(Session["UserId"]);
                var State = StateName;
                //var Dist = Session["gdist"].ToString();

                //var Block = Session["gblock"].ToString();
                //var Gram = Session["ggram"].ToString();

                //if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null && Gram != "" && Gram != null)
                //{
                //    ddetails = ABE.obj_abhy_mis_awp_form.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                //}
                //else if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null)
                //{
                //    ddetails = ABE.obj_abhy_mis_awp_form.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                //}
                //else if (State != "" && State != null && Dist != "" && Dist != null)
                //{
                //    ddetails = ABE.obj_abhy_mis_awp_form.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                //}
                //else 
                if (State != "" && State != null && State != "0")
                {
                    if (State == "ALL")
                    {
                        ddetails = ABE.obj_abhy_mis_awp_form.ToList();//total list

                    }
                    else
                    {
                        ddetails = ABE.obj_abhy_mis_awp_form.Where(x => x.state_name == State).ToList();//total list

                    }

                }
                return Json(ddetails, JsonRequestBehavior.AllowGet);
            }
            catch (Exception Ex)
            {
                return Json("Error", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpGet]
        public ActionResult AWP_B_Info_All(string StateName)
        {
            try
            {

                List<abhy_mis_awp_b_form> ddetails = new List<abhy_mis_awp_b_form>();
                var userid = Convert.ToInt32(Session["UserId"]);
                var State = StateName;
                //var Dist = Session["gdist"].ToString();

                //var Block = Session["gblock"].ToString();
                //var Gram = Session["ggram"].ToString();

                //if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null && Gram != "" && Gram != null)
                //{
                //    ddetails = ABE.obj_abhy_mis_awp_b_form.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                //}
                //else if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null)
                //{
                //    ddetails = ABE.obj_abhy_mis_awp_b_form.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                //}
                //else if (State != "" && State != null && Dist != "" && Dist != null)
                //{
                //    ddetails = ABE.obj_abhy_mis_awp_b_form.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                //}
                //else
                if (State != "" && State != null)
                {
                    if (State == "ALL")
                    {
                        ddetails = ABE.obj_abhy_mis_awp_b_form.ToList();//total list

                    }
                    else
                    {
                        ddetails = ABE.obj_abhy_mis_awp_b_form.Where(x => x.state_name == State).ToList();//total list

                    }

                }
                return Json(ddetails, JsonRequestBehavior.AllowGet);
            }
            catch (Exception Ex)
            {
                return Json("Error", JsonRequestBehavior.AllowGet);
            }
        }



        [HttpGet]
        public ActionResult php_and_fn_Info_A_Form(string StateName)
        {

            List<abhy_financialprogress_insertdata> ddetails = new List<abhy_financialprogress_insertdata>();
            if (StateName != "")
            {
                if (StateName == "ALL")
                {
                    ddetails = ABE.obj_abhy_financialprogress_insertdata.ToList();//total list
                }
                else
                {
                    ddetails = ABE.obj_abhy_financialprogress_insertdata.Where(x => x.state_name == StateName).ToList();//total list
                }

            }
            else
            {
                ddetails = ABE.obj_abhy_financialprogress_insertdata.ToList();//total list
            }


            var jsonResult = Json(ddetails, JsonRequestBehavior.AllowGet);
            jsonResult.MaxJsonLength = int.MaxValue;
            return jsonResult;

        }

        [HttpGet]
        public ActionResult php_and_fn_Info_B_Form(string StateName)
        {

            List<abhy_financialprogress_b_insertdata> ddetails = new List<abhy_financialprogress_b_insertdata>();
            if (StateName != "")
            {
                if (StateName == "ALL")
                {
                    ddetails = ABE.obj_abhy_financialprogress_b_insertdata.ToList();//total list
                }
                else
                {
                    ddetails = ABE.obj_abhy_financialprogress_b_insertdata.Where(x => x.state_name == StateName).ToList();//total list
                }


            }
            else
            {
                ddetails = ABE.obj_abhy_financialprogress_b_insertdata.ToList();//total list

            }

            var jsonResult = Json(ddetails, JsonRequestBehavior.AllowGet);
            jsonResult.MaxJsonLength = int.MaxValue;
            return jsonResult;
        }

        [HttpGet]
        public ActionResult Get_Fund_Form_Info(string FIN_Year, string StateName)
        {

            List<abhy_phymon_fund_release> ddetails = new List<abhy_phymon_fund_release>();
            if (StateName != "" && FIN_Year == "" || FIN_Year == null)
            {
                if (StateName == "ALL")
                {
                    ddetails = ABE.obj_abhy_phymon_fund_release.ToList();//total list
                }
                else
                {
                    ddetails = ABE.obj_abhy_phymon_fund_release.Where(x => x.state_name == StateName).ToList();//total list
                }


            }
            else if (StateName != "" && FIN_Year != "")
            {

                if (StateName == "ALL")
                {
                    ddetails = ABE.obj_abhy_phymon_fund_release.Where(x => x.fund_year == FIN_Year).ToList();///total list
                }
                else
                {
                    ddetails = ABE.obj_abhy_phymon_fund_release.Where(x => x.fund_year == FIN_Year && x.state_name == StateName).ToList();//total list

                }
            }
            else
            {
                ddetails = ABE.obj_abhy_phymon_fund_release.Where(x => x.fund_year == FIN_Year).ToList();//total list

            }

            return Json(ddetails, JsonRequestBehavior.AllowGet);

        }

        [HttpGet]
        public ActionResult Get_Fund_Form_Info_All(string StateName)
        {
            List<abhy_phymon_fund_release> ddetails = new List<abhy_phymon_fund_release>();
            if (StateName == "ALL")
            {
                ddetails = ABE.obj_abhy_phymon_fund_release.ToList();//total list
            }
            else
            {
                ddetails = ABE.obj_abhy_phymon_fund_release.Where(x => x.state_name == StateName).ToList();//total list
            }
            return Json(ddetails, JsonRequestBehavior.AllowGet);

        }

        [HttpGet]
        public string Get_Fund_category()
        {
            var ddetails = ABE.obj_abhy_financialprogress_insertdata.Select(m => new { m.category_of_procurement, m.activity_id })
                .GroupBy(a => new { a.category_of_procurement, a.activity_id }).ToList();

            DataTable dt = new DataTable();
            dt.Columns.Add("category_of_procurement");
            dt.Columns.Add("activity_id");
            dt.Columns.Add("order_by", typeof(int));

            int count = 0;
            for (int i = 0; i < ddetails.Count; i++)
            {
                if (ddetails[i].Key.activity_id.ToString() != "A1.1" && ddetails[i].Key.activity_id.ToString() != "A1.2" && ddetails[i].Key.activity_id.ToString() != "A1.3")
                {
                    DataRow dr = dt.NewRow();
                    dt.Rows.InsertAt(dr, count);
                    if (ddetails[i].Key.activity_id != "26.02")
                    {
                        dt.Rows[count]["category_of_procurement"] = ddetails[i].Key.activity_id.ToString().Substring(0, 2) + " " + ddetails[i].Key.category_of_procurement;
                    }
                    else
                    {
                        dt.Rows[count]["category_of_procurement"] = ddetails[i].Key.activity_id.ToString().Substring(0, 2);
                    }
                    dt.Rows[count]["activity_id"] = ddetails[i].Key.activity_id;

                    if (ddetails[i].Key.activity_id == "A2.1")
                    {
                        dt.Rows[count]["order_by"] = 1;
                    }
                    else if (ddetails[i].Key.activity_id == "A3.1")
                    {
                        dt.Rows[count]["order_by"] = 2;
                    }
                    else if (ddetails[i].Key.activity_id == "A4.1")
                    {
                        dt.Rows[count]["order_by"] = 3;
                    }
                    else if (ddetails[i].Key.activity_id == "A5.1")
                    {
                        dt.Rows[count]["order_by"] = 4;
                    }
                    else if (ddetails[i].Key.activity_id == "A6.1")
                    {
                        dt.Rows[count]["order_by"] = 5;
                    }
                    else if (ddetails[i].Key.activity_id == "26.02")
                    {
                        dt.Rows[count]["order_by"] = 6;
                    }
                    count++;
                }
            }
            dt.DefaultView.Sort = "order_by ASC";
            dt = dt.DefaultView.ToTable();
            string p = JsonConvert.SerializeObject(dt);
            return p;

        }

        [HttpGet]
        public ActionResult physical_monitoring_report_Info(string StateName)
        {
            List<abhy_physicalmonitoring_insertdata> ddetails = new List<abhy_physicalmonitoring_insertdata>();
            var State = StateName;

            if (State != "" && State != null)
            {
                if (State == "ALL")
                {
                    ddetails = ABE.obj_abhy_physicalmonitoring_insertdata.ToList();//total list


                }
                else
                {
                    ddetails = ABE.obj_abhy_physicalmonitoring_insertdata.Where(x => x.state_name == StateName).ToList();//total list

                }

            }
            return Json(ddetails, JsonRequestBehavior.AllowGet);

        }

        [HttpGet]
        public ActionResult baselinedata_geting(string StateName)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_baseline_gpdata> ddetails = new List<abhy_baseline_gpdata>();
                    //var userid = Convert.ToInt32(Session["UserId"]);
                    //List<gpprofile> ddetails = new List<gpprofile>();

                    ddetails = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == StateName).ToList();//total list
                                                                                                           // ddetails = AJE.obj_gpprofiles.Where(x => x.state_name == State).ToList();//total list

                    ddetails = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == StateName).ToList();//total list
                    var Details = Json(ddetails, JsonRequestBehavior.AllowGet);
                    Details.MaxJsonLength = int.MaxValue;
                    return Details;
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
        public ActionResult baselinedata_geting1(string StateName)
        {

            List<abhy_baseline_gpdata> ddetails = new List<abhy_baseline_gpdata>();
            //var userid = Convert.ToInt32(Session["UserId"]);
            //List<gpprofile> ddetails = new List<gpprofile>();

            ddetails = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == StateName).ToList();//total list
            var Details = Json(ddetails, JsonRequestBehavior.AllowGet);
            Details.MaxJsonLength = int.MaxValue;
            return Details;          // ddetails = AJE.obj_gpprofiles.Where(x => x.state_name == State).ToList();//total list




            // return View();
        }
        [HttpPost]
        public ActionResult DLI_Data()
        {
            var data = ABE.obj_abhy_DLI.ToList();
            return Json(data, JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public ActionResult physicalmonitoring_Data()
        {
            var data = ABE.obj_abhy_physicalmonitoring_insertdata.ToList();

            var jsonResult = Json(data, JsonRequestBehavior.AllowGet);
            jsonResult.MaxJsonLength = int.MaxValue;
            return jsonResult;
            //return Json(data, JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public ActionResult State_SessionInfo()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    if (Session["Officer"] != null && Session["Officer"].ToString() == "Admin")
                    {
                        return Json("Admin", JsonRequestBehavior.AllowGet);
                    }
                    if (Session["Officer"] != null && Session["Officer"].ToString() == "State Level Nodal Officer")
                    {
                        if (Session["gstate"] != null && Session["gstate"].ToString() != "0" && Session["gstate"].ToString() != "")
                        {
                            var Statename = Session["gstate"].ToString();
                            return Json(Statename, JsonRequestBehavior.AllowGet);
                        }
                        else
                        {
                            return Json("Admin", JsonRequestBehavior.AllowGet);

                        }
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

        [HttpGet]
        public ActionResult State_SessionInfo_dashboard()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    return Json("Admin", JsonRequestBehavior.AllowGet);
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


