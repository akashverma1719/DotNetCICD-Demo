using AbhyProject.Classes;
using AbhyProject.Models;
using AbhyProject.Utility;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http.Results;
using System.Web.Mvc;

namespace AbhyProject.Controllers
{
    public class TrackerController : Controller
    {
        AbhyEntity ABE = new AbhyEntity();
        // GET: Gp_Tracker
        public ActionResult Index()
        {
            //int userId = Convert.ToInt32(Session["UserId"]);
            //int Active = CheckLogin.CheckLoginStatus(userId);
            //if (Active == 1)
            //{
            //    return RedirectToAction("WSP_GWM_HOME", "WspNew");
            //}
            return View();
        }
        public ActionResult WspTracker()
        {
            //int userId = Convert.ToInt32(Session["UserId"]);
            //int Active = CheckLogin.CheckLoginStatus(userId);
            //if (Active == 1)
            //{
            //    return RedirectToAction("WSP_GWM_HOME", "WspNew");
            //}
            return View();
        }
        public ActionResult SocialTracker()
        {

            return View();
        }
        public ActionResult AllTracker()
        {

            return View();
        }

        [HttpPost]
        public ActionResult GetGPDCIData(string state, string district, string block, string gram, string year)
        {
            if (Session["UserId"] != null)
            {
                try
                {

                    string[] States = { "Gujarat_24", "Haryana_6", "Karnataka_29", "Madhya Pradesh_23", "Maharashtra_27", "Rajasthan_8", "Uttar Pradesh_9" };

                    string StateName = "";
                    int DistrinctCount = 0;
                    int BlockCount = 0;
                    int GpCount = 0;
                    if (state == "Gujarat_24")
                    {
                        StateName = "Gujarat_24";
                        DistrinctCount = 6;
                        BlockCount = 36;
                        GpCount = 1873;
                    }
                    else if (state == "Haryana_6")
                    {
                        StateName = "Haryana_6";
                        DistrinctCount = 14;
                        BlockCount = 36;
                        GpCount = 1656;
                    }
                    else if (state == "Karnataka_29")
                    {
                        StateName = "Karnataka_29";
                        DistrinctCount = 14;
                        BlockCount = 41;
                        GpCount = 1199;
                    }
                    else if (state == "Madhya Pradesh_23")
                    {
                        StateName = "Madhya Pradesh_23";
                        DistrinctCount = 6;
                        BlockCount = 9;
                        GpCount = 670;
                    }
                    else if (state == "Maharashtra_27")
                    {
                        StateName = "Maharashtra_27";
                        DistrinctCount = 13;
                        BlockCount = 43;
                        GpCount = 1133;
                    }
                    else if (state == "Rajasthan_8")
                    {
                        StateName = "Rajasthan_8";
                        DistrinctCount = 17;
                        BlockCount = 38;
                        GpCount = 1132;
                    }
                    else if (state == "Uttar Pradesh_9")
                    {
                        StateName = "Uttar Pradesh_9";
                        DistrinctCount = 10;
                        BlockCount = 26;
                        GpCount = 550;
                    }
                    List<GpTracker> AllData = new List<GpTracker>();
                    GpTracker obj = new GpTracker();


                    List<abhy_baseline_gpdata> ddetails = new List<abhy_baseline_gpdata>();
                    List<vw_gpdcidata_tracker_count_statewise> ddetails_state = new List<vw_gpdcidata_tracker_count_statewise>();
                    List<vw_gpdcidata_tracker_count_districtwise> ddetails_district = new List<vw_gpdcidata_tracker_count_districtwise>();
                    List<vw_gpdcidata_tracker_count_blockwise> ddetails_block = new List<vw_gpdcidata_tracker_count_blockwise>();
                    List<vw_gpdcidata_tracker_count_gpwise> ddetails_gp = new List<vw_gpdcidata_tracker_count_gpwise>();

                    if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null && year != "0" && year != "" && year != null)
                    {
                        //var BaseLineData = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.gpname == gram && x.year == year).GroupBy(o => o.gpname).ToList();
                        //if (BaseLineData.Count != 0)
                        //{
                        //    foreach (var items in BaseLineData.AsEnumerable())
                        //    {
                        //        var item = items.First();
                        //        var data = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == state && x.year == year && x.gpname == item.gpname).OrderByDescending(x => x.month_order_by).Take(1);

                        //        ddetails.AddRange(data);
                        //    }

                        var stateData = ABE.obj_vw_gpdcidata_tracker_count_gpwise.FirstOrDefault(x => x.state_name == state && x.district_name == district && x.gpname == gram && x.year == year);
                        if (stateData != null)
                        {

                            GpTracker obj2 = new GpTracker
                            {
                                StateName = StateName,
                                DistrinctCount = DistrinctCount,
                                BlockCount = BlockCount,
                                GpCount = GpCount,
                                SavedGP = stateData.SavedGP,
                                SubmitGP = stateData.SubmitGP,
                                RejectGP = stateData.RejectGP,
                                ApprovedGP = stateData.ApprovedGP,
                                PendingByDpmu = stateData.PendingByDpmu,
                                PendingGPBySpmu = stateData.PendingGPBySpmu,
                                ApprovedBySPMU = stateData.ApprovedBySPMU,
                                RejectBySPMU = stateData.RejectBySPMU
                            };

                            AllData.Add(obj2);
                        }
                    }
                    else if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null && block != "0" && block != "" && block != null && year != "0" && year != "" && year != null)
                    {
                        //var BaseLineData = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.year == year).GroupBy(o => o.gpname).ToList();

                        //if (BaseLineData.Count != 0)
                        //{
                        //    foreach (var items in BaseLineData.AsEnumerable())
                        //    {
                        //        var item = items.First();
                        //        var data = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == state && x.year == year && x.gpname == item.gpname).OrderByDescending(x => x.month_order_by).Take(1);

                        //        ddetails.AddRange(data);
                        //    }
                        var stateData = ABE.obj_vw_gpdcidata_tracker_count_blockwise.FirstOrDefault(x => x.state_name == state && x.district_name == district && x.block_name == block && x.year == year);
                        if (stateData != null)
                        {

                            GpTracker obj2 = new GpTracker
                            {
                                StateName = StateName,
                                DistrinctCount = DistrinctCount,
                                BlockCount = BlockCount,
                                GpCount = GpCount,
                                SavedGP = stateData.SavedGP,
                                SubmitGP = stateData.SubmitGP,
                                RejectGP = stateData.RejectGP,
                                ApprovedGP = stateData.ApprovedGP,
                                PendingByDpmu = stateData.PendingByDpmu,
                                PendingGPBySpmu = stateData.PendingGPBySpmu,
                                ApprovedBySPMU = stateData.ApprovedBySPMU,
                                RejectBySPMU = stateData.RejectBySPMU
                            };

                            AllData.Add(obj2);
                        }


                       
                    }
                    else if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null && year != "" && year != null)
                    {
                        //var BaseLineData = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == state && x.district_name == district && x.year == year).GroupBy(o => o.gpname).ToList();
                        //if (BaseLineData.Count != 0)
                        //{
                        //    foreach (var items in BaseLineData.AsEnumerable())
                        //    {
                        //        var item = items.First();
                        //        var data = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == state && x.year == year && x.gpname == item.gpname).OrderByDescending(x => x.month_order_by).Take(1);

                        //        ddetails.AddRange(data);
                        //    }
                        var stateData = ABE.obj_vw_gpdcidata_tracker_count_districtwise.FirstOrDefault(x => x.state_name == state && x.district_name == district && x.year == year);
                        if (stateData != null)
                        {

                            GpTracker obj2 = new GpTracker
                            {
                                StateName = StateName,
                                DistrinctCount = DistrinctCount,
                                BlockCount = BlockCount,
                                GpCount = GpCount,
                                SavedGP = stateData.SavedGP,
                                SubmitGP = stateData.SubmitGP,
                                RejectGP = stateData.RejectGP,
                                ApprovedGP = stateData.ApprovedGP,
                                PendingByDpmu = stateData.PendingByDpmu,
                                PendingGPBySpmu = stateData.PendingGPBySpmu,
                                ApprovedBySPMU = stateData.ApprovedBySPMU,
                                RejectBySPMU = stateData.RejectBySPMU
                            };

                            AllData.Add(obj2);
                        }
                    }
                    else if (state != "0" && state != "" && state != null && year != "" && year != null)
                    {
                        //var BaseLineData = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == state && x.year == year).GroupBy(o => o.gpname).ToList();
                        //if (BaseLineData.Count != 0)
                        //{
                        //    foreach (var items in BaseLineData.AsEnumerable())
                        //    {
                        //        var item = items.First();
                        //        var data = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == state && x.year == year && x.gpname == item.gpname).OrderByDescending(x => x.month_order_by).Take(1);
                        //        ddetails.AddRange(data);
                        //    }

                        var stateData = ABE.obj_vw_gpdcidata_tracker_count_statewise.FirstOrDefault(x => x.state_name == state && x.year == year);
                        if (stateData != null)
                        {

                            GpTracker obj2 = new GpTracker
                            {
                                StateName = StateName,
                                DistrinctCount = DistrinctCount,
                                BlockCount = BlockCount,
                                GpCount = GpCount,
                                SavedGP = stateData.SavedGP,
                                SubmitGP = stateData.SubmitGP,
                                RejectGP = stateData.RejectGP,
                                ApprovedGP = stateData.ApprovedGP,
                                PendingByDpmu = stateData.PendingByDpmu,
                                PendingGPBySpmu = stateData.PendingGPBySpmu,
                                ApprovedBySPMU = stateData.ApprovedBySPMU,
                                RejectBySPMU = stateData.RejectBySPMU
                            };

                            AllData.Add(obj2);
                        }
                    }
                    else
                    {

                        //var BaseLineData = ABE.obj_abhy_baseline_gpdata.Where(x => x.year == year).GroupBy(o => o.gpname).ToList();
                        //if (BaseLineData.Count != 0)
                        //{
                        //    foreach (var items in BaseLineData.AsEnumerable())
                        //    {
                        //        var Data = items.First();
                        //        var data = ABE.obj_abhy_baseline_gpdata.Where(x => x.year == year && x.gpname == Data.gpname).OrderByDescending(x => x.month_order_by).Take(1);

                        //        ddetails.AddRange(data);
                        //    }
                        //}

                        foreach (var item in States)
                        {
                            if (item == "Gujarat_24")
                            {
                                StateName = "Gujarat_24";
                                DistrinctCount = 6;
                                BlockCount = 36;
                                GpCount = 1873;
                            }
                            else if (item == "Haryana_6")
                            {
                                StateName = "Haryana_6";
                                DistrinctCount = 14;
                                BlockCount = 36;
                                GpCount = 1656;
                            }
                            else if (item == "Karnataka_29")
                            {
                                StateName = "Karnataka_29";
                                DistrinctCount = 14;
                                BlockCount = 41;
                                GpCount = 1199;
                            }
                            else if (item == "Madhya Pradesh_23")
                            {
                                StateName = "Madhya Pradesh_23";
                                DistrinctCount = 6;
                                BlockCount = 9;
                                GpCount = 670;
                            }
                            else if (item == "Maharashtra_27")
                            {
                                StateName = "Maharashtra_27";
                                DistrinctCount = 13;
                                BlockCount = 43;
                                GpCount = 1133;
                            }
                            else if (item == "Rajasthan_8")
                            {
                                StateName = "Rajasthan_8";
                                DistrinctCount = 17;
                                BlockCount = 38;
                                GpCount = 1132;
                            }
                            else if (item == "Uttar Pradesh_9")
                            {
                                StateName = "Uttar Pradesh_9";
                                DistrinctCount = 10;
                                BlockCount = 26;
                                GpCount = 550;
                            }

                            var stateData = ABE.obj_vw_gpdcidata_tracker_count_statewise.FirstOrDefault(x => x.state_name == item && x.year == year);
                            if (stateData != null)
                            {

                                GpTracker obj2 = new GpTracker
                                {
                                    StateName = StateName,
                                    DistrinctCount = DistrinctCount,
                                    BlockCount = BlockCount,
                                    GpCount = GpCount,
                                    SavedGP = stateData.SavedGP,
                                    SubmitGP = stateData.SubmitGP,
                                    RejectGP = stateData.RejectGP,
                                    ApprovedGP = stateData.ApprovedGP,
                                    PendingByDpmu = stateData.PendingByDpmu,
                                    PendingGPBySpmu = stateData.PendingGPBySpmu,
                                    ApprovedBySPMU = stateData.ApprovedBySPMU,
                                    RejectBySPMU = stateData.RejectBySPMU
                                };


                                //int SavedGP = ABE.obj_vw_gpdcidata_tracker_count_statewise.Where(x => x.state_name == item && x.year == year).Select(x => x.SavedGP).FirstOrDefault();
                                //int SubmitGP = ABE.obj_vw_gpdcidata_tracker_count_statewise.Where(x => x.state_name == item && x.year == year).Select(x => x.SubmitGP).FirstOrDefault();
                                //int RejectGP = ABE.obj_vw_gpdcidata_tracker_count_statewise.Where(x => x.state_name == item && x.year == year).Select(x => x.RejectGP).FirstOrDefault();
                                //int ApprovedGP = ABE.obj_vw_gpdcidata_tracker_count_statewise.Where(x => x.state_name == item && x.year == year).Select(x => x.ApprovedGP).FirstOrDefault();
                                //int PendingByDpmu = ABE.obj_vw_gpdcidata_tracker_count_statewise.Where(x => x.state_name == item && x.year == year).Select(x => x.PendingByDPMU).FirstOrDefault();
                                //int PendingGPBySpmu = ABE.obj_vw_gpdcidata_tracker_count_statewise.Where(x => x.state_name == item && x.year == year).Select(x => x.PendingGPBySPMU).FirstOrDefault();
                                //int ApprovedBySPMU = ABE.obj_vw_gpdcidata_tracker_count_statewise.Where(x => x.state_name == item && x.year == year).Select(x => x.ApprovedBySPMU).FirstOrDefault();
                                //int RejectBySPMU = ABE.obj_vw_gpdcidata_tracker_count_statewise.Where(x => x.state_name == item && x.year == year).Select(x => x.RejectBySPMU).FirstOrDefault();
                                //GpTracker obj2 = new GpTracker();

                                //obj2.StateName = StateName;
                                //obj2.DistrinctCount = DistrinctCount;
                                //obj2.BlockCount = BlockCount;
                                //obj2.GpCount = GpCount;
                                //obj2.SavedGP = SavedGP;
                                //obj2.SubmitGP = SubmitGP;
                                //obj2.RejectGP = RejectGP;
                                //obj2.ApprovedGP = ApprovedGP;
                                //obj2.PendingByDpmu = PendingByDpmu;
                                //obj2.PendingGPBySpmu = PendingGPBySpmu;
                                //obj2.ApprovedBySPMU = ApprovedBySPMU;
                                //obj2.RejectBySPMU = RejectBySPMU;

                                AllData.Add(obj2);
                            }
                        }

                    }
                    return Json(AllData, JsonRequestBehavior.AllowGet);
                }
                catch (Exception Ex)
                {
                    abhy_tbl_error error_data = new abhy_tbl_error();
                    error_data.error_test = Ex.Message;
                    error_data.user_email = Ex.StackTrace;
                    error_data.user_type = "GPDCI Tracker";
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
        public ActionResult GetGPDCIDataByGP(string StateName, string Status, string Year)
        {
            if (Session["UserId"] != null)
            {
                try
                {

                    List<abhy_baseline_gpdata> ddetails = new List<abhy_baseline_gpdata>();
                    var BaseLineData = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == StateName && x.year == Year).GroupBy(o => o.gpname).ToList();//total list
                    if (BaseLineData.Count != 0)
                    {
                        foreach (var items in BaseLineData.AsEnumerable())
                        {
                            var item = items.First();
                            var data = ABE.obj_abhy_baseline_gpdata.Where(x => x.state_name == StateName && x.year == Year && x.gpname == item.gpname).OrderByDescending(x => x.month_order_by).Take(1);
                            ddetails.AddRange(data);
                        }
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
        public ActionResult GetWspDataByGP(string StateName, string Status, string Year)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    int StatusId = Convert.ToInt32(Status);
                    if (Year == "2023-24")
                    {
                        if (StateName != "0" && Status == "0" && Year == "0")
                        {
                            var Data = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == StateName).ToList();
                            return Json(Data, JsonRequestBehavior.AllowGet);
                        }
                        else if (StateName != "0" && Year != "0" && Status == "0")
                        {
                            var Data = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == StateName && x.year == Year).ToList();
                            return Json(Data, JsonRequestBehavior.AllowGet);
                        }
                        else if (StateName != "0" && Year != "0" && Status != "0")
                        {
                            var Data = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == StateName && x.year == Year && x.status_id == StatusId).ToList();
                            return Json(Data, JsonRequestBehavior.AllowGet);
                        }

                    }
                    else if (Year == "2023-24 Update")
                    {
                        if (StateName != "0" && Status == "0" && Year == "0")
                        {
                            var Data = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == StateName).ToList();
                            return Json(Data, JsonRequestBehavior.AllowGet);
                        }
                        else if (StateName != "0" && Year != "0" && Status == "0")
                        {
                            var Data = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == StateName && x.year == Year).ToList();
                            return Json(Data, JsonRequestBehavior.AllowGet);
                        }
                        else if (StateName != "0" && Year != "0" && Status != "0")
                        {
                            //if (Status == "1")
                            //{
                            //    var GPData = ABE.obj_abhy_wsp_gpdata_new_23.Where(x => x.state_name == StateName && x.year == Year).ToList();
                            //    return Json(GPData, JsonRequestBehavior.AllowGet);
                            //}
                            var Data = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == StateName && x.year == Year && x.status_id == StatusId).ToList();
                            return Json(Data, JsonRequestBehavior.AllowGet);
                        }
                    }
                    else
                    {
                        if (StateName != "0" && Status == "0" && Year == "0")
                        {
                            var Data = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == StateName).ToList();
                            return Json(Data, JsonRequestBehavior.AllowGet);
                        }
                        else if (StateName != "0" && Year != "0" && Status == "0")
                        {
                            var Data = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == StateName && x.year == Year).ToList();
                            return Json(Data, JsonRequestBehavior.AllowGet);
                        }
                        else if (StateName != "0" && Year != "0" && Status != "0")
                        {
                            //if (Status == "1")
                            //{
                            //    var GPData = ABE.obj_abhy_wsp_gpdata_new_24.Where(x => x.state_name == StateName && x.year == Year).ToList();
                            //    return Json(GPData, JsonRequestBehavior.AllowGet);
                            //}
                            var Data = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == StateName && x.year == Year && x.status_id == StatusId).ToList();
                            return Json(Data, JsonRequestBehavior.AllowGet);
                        }
                    }
                    return Json("No Data", JsonRequestBehavior.AllowGet);
                }
                catch (Exception ex)
                {
                    return Json(ex, JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }
        //[HttpPost]
        //public ActionResult GetWspDataByGP(string StateName, string Status, string Year)
        //{
        //    if (Session["UserId"] != null)
        //    {
        //        try
        //        {
        //            int StatusId = Convert.ToInt32(Status);
        //            if (Year == "2023-24")
        //            {
        //                if (StateName != "0" && Status == "0" && Year == "0")
        //                {
        //                    var Data = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == StateName).ToList();
        //                    return Json(Data, JsonRequestBehavior.AllowGet);
        //                }
        //                else if (StateName != "0" && Year != "0" && Status == "0")
        //                {
        //                    var Data = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == StateName && x.year == Year).ToList();
        //                    return Json(Data, JsonRequestBehavior.AllowGet);
        //                }
        //                else if (StateName != "0" && Year != "0" && Status != "0")
        //                {
        //                    var Data = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == StateName && x.year == Year && x.status_id == StatusId).ToList();
        //                    return Json(Data, JsonRequestBehavior.AllowGet);
        //                }

        //            }
        //            else if (Year == "2023-24 Update")
        //            {
        //                if (StateName != "0" && Status == "0" && Year == "0")
        //                {
        //                    var Data = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == StateName).ToList();
        //                    return Json(Data, JsonRequestBehavior.AllowGet);
        //                }
        //                else if (StateName != "0" && Year != "0" && Status == "0")
        //                {
        //                    var Data = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == StateName && x.year == Year).ToList();
        //                    return Json(Data, JsonRequestBehavior.AllowGet);
        //                } 
        //                else if (StateName != "0" && Year != "0" && Status != "0")
        //                {
        //                    if (Status == "1")
        //                    {
        //                        var GPData = ABE.obj_abhy_wsp_gpdata_new_23.Where(x => x.state_name == StateName && x.year == Year).ToList();
        //                        return Json(GPData, JsonRequestBehavior.AllowGet);
        //                    }
        //                    var Data = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == StateName && x.year == Year && x.status_id == StatusId).ToList();
        //                    return Json(Data, JsonRequestBehavior.AllowGet);
        //                }
        //            }
        //            else 
        //            {
        //                if (StateName != "0" && Status == "0" && Year == "0")
        //                {
        //                    var Data = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == StateName).ToList();
        //                    return Json(Data, JsonRequestBehavior.AllowGet);
        //                }
        //                else if (StateName != "0" && Year != "0" && Status == "0")
        //                {
        //                    var Data = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == StateName && x.year == Year).ToList();
        //                    return Json(Data, JsonRequestBehavior.AllowGet);
        //                }
        //                else if (StateName != "0" && Year != "0" && Status != "0")
        //                {
        //                    if (Status == "1")
        //                    {
        //                        var GPData = ABE.obj_abhy_wsp_gpdata_new_24.Where(x => x.state_name == StateName && x.year == Year).ToList();
        //                        return Json(GPData, JsonRequestBehavior.AllowGet);
        //                    }
        //                    var Data = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == StateName && x.year == Year && x.status_id == StatusId).ToList();
        //                    return Json(Data, JsonRequestBehavior.AllowGet);
        //                }
        //            }
        //            return Json("No Data", JsonRequestBehavior.AllowGet);
        //        }
        //        catch (Exception ex)
        //        {
        //            return Json(ex, JsonRequestBehavior.AllowGet);
        //        }
        //    }
        //    else
        //    {
        //        return Json("Logout", JsonRequestBehavior.AllowGet);
        //    }
        //}


        [HttpPost]
        public ActionResult GetWSPData(string state, string district, string block, string gram, string year)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    string[] States = { "Gujarat_24", "Haryana_6", "Karnataka_29", "Madhya Pradesh_23", "Maharashtra_27", "Rajasthan_8", "Uttar Pradesh_9" };
                    string StateName = "";
                    int DistrinctCount = 0;
                    int BlockCount = 0;
                    int GpCount = 0;
                    if (state == "Gujarat_24")
                    {
                        StateName = "Gujarat_24";
                        DistrinctCount = 6;
                        BlockCount = 36;
                        GpCount = 1873;
                    }
                    else if (state == "Haryana_6")
                    {
                        StateName = "Haryana_6";
                        DistrinctCount = 14;
                        BlockCount = 36;
                        GpCount = 1656;
                    }
                    else if (state == "Karnataka_29")
                    {
                        StateName = "Karnataka_29";
                        DistrinctCount = 14;
                        BlockCount = 41;
                        GpCount = 1199;
                    }
                    else if (state == "Madhya Pradesh_23")
                    {
                        StateName = "Madhya Pradesh_23";
                        DistrinctCount = 6;
                        BlockCount = 9;
                        GpCount = 670;
                    }
                    else if (state == "Maharashtra_27")
                    {
                        StateName = "Maharashtra_27";
                        DistrinctCount = 13;
                        BlockCount = 43;
                        GpCount = 1133;
                    }
                    else if (state == "Rajasthan_8")
                    {
                        StateName = "Rajasthan_8";
                        DistrinctCount = 17;
                        BlockCount = 38;
                        GpCount = 1132;
                    }
                    else if (state == "Uttar Pradesh_9")
                    {
                        StateName = "Uttar Pradesh_9";
                        DistrinctCount = 10;
                        BlockCount = 26;
                        GpCount = 550;
                    }
                    List<GpTracker> AllData = new List<GpTracker>();
                    GpTracker obj = new GpTracker();
                    if (year == "2023-24")
                    {
                        if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null && year != "0" && year != "" && year != null)
                        {
                            int SavedGP = ABE.obj_abhy_wsp_gpdata_new.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.gram_panchayat_name == gram && x.year == year).ToList().Count();//total list
                            int SubmitGP = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.gp_name == gram && x.year == year && x.status_id == 3).ToList().Count();
                            int RejectGP = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.gp_name == gram && x.year == year && x.reject_status == "Rejected By District" && x.status_id == 1).ToList().Count();
                            int ApprovedGP = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.gp_name == gram && x.year == year && x.status_id == 4).ToList().Count();
                            int ApprovedBySPMU = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.gp_name == gram && x.year == year && x.status_id == 5).ToList().Count();
                            int RejectBySPMU = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.gp_name == gram && x.year == year && x.reject_status == "Rejected By State" && x.status_id == 3).ToList().Count();
                            obj.StateName = StateName;
                            obj.DistrinctCount = DistrinctCount;
                            obj.BlockCount = BlockCount;
                            obj.GpCount = GpCount;
                            obj.SavedGP = SavedGP;
                            obj.SubmitGP = SubmitGP;
                            obj.RejectGP = RejectGP;
                            obj.ApprovedGP = ApprovedGP;
                            obj.ApprovedBySPMU = ApprovedBySPMU;
                            obj.RejectBySPMU = RejectBySPMU;
                            AllData.Add(obj);
                        }
                        else if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null && block != "0" && block != "" && block != null && year != "0" && year != "" && year != null)
                        {
                            int SavedGP = ABE.obj_abhy_wsp_gpdata_new.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.year == year).ToList().Count();//total list
                            int SubmitGP = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.year == year && x.status_id == 3).ToList().Count();
                            int RejectGP = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.year == year && x.reject_status == "Rejected By District" && x.status_id == 1).ToList().Count();
                            int ApprovedGP = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.year == year && x.status_id == 4).ToList().Count();
                            int ApprovedBySPMU = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.year == year && x.status_id == 5).ToList().Count();
                            int RejectBySPMU = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.year == year && x.reject_status == "Rejected By State" && x.status_id == 3).ToList().Count();
                            obj.StateName = StateName;
                            obj.DistrinctCount = DistrinctCount;
                            obj.BlockCount = BlockCount;
                            obj.GpCount = GpCount;
                            obj.SavedGP = SavedGP;
                            obj.SubmitGP = SubmitGP;
                            obj.RejectGP = RejectGP;
                            obj.ApprovedGP = ApprovedGP;
                            obj.ApprovedBySPMU = ApprovedBySPMU;
                            obj.RejectBySPMU = RejectBySPMU;
                            AllData.Add(obj);
                        }
                        else if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null && year != "" && year != null)
                        {
                            int SavedGP = ABE.obj_abhy_wsp_gpdata_new.Where(x => x.state_name == state && x.district_name == district && x.year == year).ToList().Count();//total list
                            int SubmitGP = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == state && x.district_name == district && x.year == year && x.status_id == 3).ToList().Count();
                            int RejectGP = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == state && x.district_name == district && x.year == year && x.reject_status == "Rejected By District" && x.status_id == 1).ToList().Count();
                            int ApprovedGP = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == state && x.district_name == district && x.year == year && x.status_id == 4).ToList().Count();
                            int ApprovedBySPMU = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == state && x.district_name == district && x.year == year && x.status_id == 5).ToList().Count();
                            int RejectBySPMU = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == state && x.district_name == district && x.year == year && x.reject_status == "Rejected By State" && x.status_id == 3).ToList().Count();
                            obj.StateName = StateName;
                            obj.DistrinctCount = DistrinctCount;
                            obj.BlockCount = BlockCount;
                            obj.GpCount = GpCount;
                            obj.SavedGP = SavedGP;
                            obj.SubmitGP = SubmitGP;
                            obj.RejectGP = RejectGP;
                            obj.ApprovedGP = ApprovedGP;
                            obj.ApprovedBySPMU = ApprovedBySPMU;
                            obj.RejectBySPMU = RejectBySPMU;
                            AllData.Add(obj);
                        }
                        else if (state != "0" && state != "" && state != null && year != "" && year != null)
                        {
                            int SavedGP = ABE.obj_abhy_wsp_gpdata_new.Where(x => x.state_name == state && x.year == year).ToList().Count();//total list
                            int SubmitGP = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == state && x.year == year && x.status_id == 3).ToList().Count();
                            int RejectGP = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == state && x.year == year && x.reject_status == "Rejected By District" && x.status_id == 1).ToList().Count();
                            int ApprovedGP = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == state && x.year == year && x.status_id == 4).ToList().Count();
                            int ApprovedBySPMU = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == state && x.year == year && x.status_id == 5).ToList().Count();
                            int RejectBySPMU = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == state && x.year == year && x.reject_status == "Rejected By State" && x.status_id == 3).ToList().Count();
                            obj.StateName = StateName;
                            obj.DistrinctCount = DistrinctCount;
                            obj.BlockCount = BlockCount;
                            obj.GpCount = GpCount;
                            obj.SavedGP = SavedGP;
                            obj.SubmitGP = SubmitGP;
                            obj.RejectGP = RejectGP;
                            obj.ApprovedGP = ApprovedGP;
                            obj.ApprovedBySPMU = ApprovedBySPMU;
                            obj.RejectBySPMU = RejectBySPMU;
                            AllData.Add(obj);
                        }
                        else
                        {
                            foreach (var item in States)
                            {
                                if (item == "Gujarat_24")
                                {
                                    StateName = "Gujarat_24";
                                    DistrinctCount = 6;
                                    BlockCount = 36;
                                    GpCount = 1873;
                                }
                                else if (item == "Haryana_6")
                                {
                                    StateName = "Haryana_6";
                                    DistrinctCount = 14;
                                    BlockCount = 36;
                                    GpCount = 1656;
                                }
                                else if (item == "Karnataka_29")
                                {
                                    StateName = "Karnataka_29";
                                    DistrinctCount = 14;
                                    BlockCount = 41;
                                    GpCount = 1199;
                                }
                                else if (item == "Madhya Pradesh_23")
                                {
                                    StateName = "Madhya Pradesh_23";
                                    DistrinctCount = 6;
                                    BlockCount = 9;
                                    GpCount = 670;
                                }
                                else if (item == "Maharashtra_27")
                                {
                                    StateName = "Maharashtra_27";
                                    DistrinctCount = 13;
                                    BlockCount = 43;
                                    GpCount = 1133;
                                }
                                else if (item == "Rajasthan_8")
                                {
                                    StateName = "Rajasthan_8";
                                    DistrinctCount = 17;
                                    BlockCount = 38;
                                    GpCount = 1132;
                                }
                                else if (item == "Uttar Pradesh_9")
                                {
                                    StateName = "Uttar Pradesh_9";
                                    DistrinctCount = 10;
                                    BlockCount = 26;
                                    GpCount = 550;
                                }
                                GpTracker obj2 = new GpTracker();
                                int SavedGP = ABE.obj_abhy_wsp_gpdata_new.Where(x => x.state_name == item && x.year == year).ToList().Count();//total list
                                int SubmitGP = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == item && x.year == year && x.status_id == 3).ToList().Count();
                                int RejectGP = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == item && x.year == year && x.reject_status == "Rejected By District" && x.status_id == 1).ToList().Count();
                                int ApprovedGP = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == item && x.year == year && x.status_id == 4).ToList().Count();
                                int ApprovedBySPMU = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == item && x.year == year && x.status_id == 5).ToList().Count();
                                int RejectBySPMU = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == item && x.year == year && x.reject_status == "Rejected By State" && x.status_id == 3).ToList().Count();
                                obj2.StateName = StateName;
                                obj2.DistrinctCount = DistrinctCount;
                                obj2.BlockCount = BlockCount;
                                obj2.GpCount = GpCount;
                                obj2.SavedGP = SavedGP;
                                obj2.SubmitGP = SubmitGP;
                                obj2.RejectGP = RejectGP;
                                obj2.ApprovedGP = ApprovedGP;
                                obj2.ApprovedBySPMU = ApprovedBySPMU;
                                obj2.RejectBySPMU = RejectBySPMU;
                                AllData.Add(obj2);
                            }
                        }
                    }else if (year == "2023-24 Update")
                    {
                        if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null && year != "0" && year != "" && year != null)
                        {
                            int SavedGP = ABE.obj_abhy_wsp_gpdata_new_23.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.gram_panchayat_name == gram && x.year == year).ToList().Count();//total list
                            int SubmitGP = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.gp_name == gram && x.year == year && x.status_id == 3).ToList().Count();
                            int RejectGP = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.gp_name == gram && x.year == year && x.reject_status == "Rejected By District" && x.status_id == 1).ToList().Count();
                            int ApprovedGP = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.gp_name == gram && x.year == year && x.status_id == 4).ToList().Count();
                            int ApprovedBySPMU = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.gp_name == gram && x.year == year && x.status_id == 5).ToList().Count();
                            int RejectBySPMU = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.gp_name == gram && x.year == year && x.reject_status == "Rejected By State" && x.status_id == 3).ToList().Count();
                            obj.StateName = StateName;
                            obj.DistrinctCount = DistrinctCount;
                            obj.BlockCount = BlockCount;
                            obj.GpCount = GpCount;
                            obj.SavedGP = SavedGP;
                            obj.SubmitGP = SubmitGP;
                            obj.RejectGP = RejectGP;
                            obj.ApprovedGP = ApprovedGP;
                            obj.ApprovedBySPMU = ApprovedBySPMU;
                            obj.RejectBySPMU = RejectBySPMU;
                            AllData.Add(obj);
                        }
                        else if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null && block != "0" && block != "" && block != null && year != "0" && year != "" && year != null)
                        {
                            int SavedGP = ABE.obj_abhy_wsp_gpdata_new_23.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.year == year).ToList().Count();//total list
                            int SubmitGP = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.year == year && x.status_id == 3).ToList().Count();
                            int RejectGP = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.year == year && x.reject_status == "Rejected By District" && x.status_id == 1).ToList().Count();
                            int ApprovedGP = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.year == year && x.status_id == 4).ToList().Count();
                            int ApprovedBySPMU = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.year == year && x.status_id == 5).ToList().Count();
                            int RejectBySPMU = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.year == year && x.reject_status == "Rejected By State" && x.status_id == 3).ToList().Count();
                            obj.StateName = StateName;
                            obj.DistrinctCount = DistrinctCount;
                            obj.BlockCount = BlockCount;
                            obj.GpCount = GpCount;
                            obj.SavedGP = SavedGP;
                            obj.SubmitGP = SubmitGP;
                            obj.RejectGP = RejectGP;
                            obj.ApprovedGP = ApprovedGP;
                            obj.ApprovedBySPMU = ApprovedBySPMU;
                            obj.RejectBySPMU = RejectBySPMU;
                            AllData.Add(obj);
                        }
                        else if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null && year != "" && year != null)
                        {
                            int SavedGP = ABE.obj_abhy_wsp_gpdata_new_23.Where(x => x.state_name == state && x.district_name == district && x.year == year).ToList().Count();//total list
                            int SubmitGP = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == state && x.district_name == district && x.year == year && x.status_id == 3).ToList().Count();
                            int RejectGP = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == state && x.district_name == district && x.year == year && x.reject_status == "Rejected By District" && x.status_id == 1).ToList().Count();
                            int ApprovedGP = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == state && x.district_name == district && x.year == year && x.status_id == 4).ToList().Count();
                            int ApprovedBySPMU = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == state && x.district_name == district && x.year == year && x.status_id == 5).ToList().Count();
                            int RejectBySPMU = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == state && x.district_name == district && x.year == year && x.reject_status == "Rejected By State" && x.status_id == 3).ToList().Count();
                            obj.StateName = StateName;
                            obj.DistrinctCount = DistrinctCount;
                            obj.BlockCount = BlockCount;
                            obj.GpCount = GpCount;
                            obj.SavedGP = SavedGP;
                            obj.SubmitGP = SubmitGP;
                            obj.RejectGP = RejectGP;
                            obj.ApprovedGP = ApprovedGP;
                            obj.ApprovedBySPMU = ApprovedBySPMU;
                            obj.RejectBySPMU = RejectBySPMU;
                            AllData.Add(obj);
                        }
                        else if (state != "0" && state != "" && state != null && year != "" && year != null)
                        {
                            int SavedGP = ABE.obj_abhy_wsp_gpdata_new_23.Where(x => x.state_name == state && x.year == year).ToList().Count();//total list
                            int SubmitGP = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == state && x.year == year && x.status_id == 3).ToList().Count();
                            int RejectGP = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == state && x.year == year && x.reject_status == "Rejected By District" && x.status_id == 1).ToList().Count();
                            int ApprovedGP = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == state && x.year == year && x.status_id == 4).ToList().Count();
                            int ApprovedBySPMU = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == state && x.year == year && x.status_id == 5).ToList().Count();
                            int RejectBySPMU = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == state && x.year == year && x.reject_status == "Rejected By State" && x.status_id == 3).ToList().Count();
                            obj.StateName = StateName;
                            obj.DistrinctCount = DistrinctCount;
                            obj.BlockCount = BlockCount;
                            obj.GpCount = GpCount;
                            obj.SavedGP = SavedGP;
                            obj.SubmitGP = SubmitGP;
                            obj.RejectGP = RejectGP;
                            obj.ApprovedGP = ApprovedGP;
                            obj.ApprovedBySPMU = ApprovedBySPMU;
                            obj.RejectBySPMU = RejectBySPMU;
                            AllData.Add(obj);
                        }
                        else
                        {
                            foreach (var item in States)
                            {
                                if (item == "Gujarat_24")
                                {
                                    StateName = "Gujarat_24";
                                    DistrinctCount = 6;
                                    BlockCount = 36;
                                    GpCount = 1873;
                                }
                                else if (item == "Haryana_6")
                                {
                                    StateName = "Haryana_6";
                                    DistrinctCount = 14;
                                    BlockCount = 36;
                                    GpCount = 1656;
                                }
                                else if (item == "Karnataka_29")
                                {
                                    StateName = "Karnataka_29";
                                    DistrinctCount = 14;
                                    BlockCount = 41;
                                    GpCount = 1199;
                                }
                                else if (item == "Madhya Pradesh_23")
                                {
                                    StateName = "Madhya Pradesh_23";
                                    DistrinctCount = 6;
                                    BlockCount = 9;
                                    GpCount = 670;
                                }
                                else if (item == "Maharashtra_27")
                                {
                                    StateName = "Maharashtra_27";
                                    DistrinctCount = 13;
                                    BlockCount = 43;
                                    GpCount = 1133;
                                }
                                else if (item == "Rajasthan_8")
                                {
                                    StateName = "Rajasthan_8";
                                    DistrinctCount = 17;
                                    BlockCount = 38;
                                    GpCount = 1132;
                                }
                                else if (item == "Uttar Pradesh_9")
                                {
                                    StateName = "Uttar Pradesh_9";
                                    DistrinctCount = 10;
                                    BlockCount = 26;
                                    GpCount = 550;
                                }
                                GpTracker obj2 = new GpTracker();
                                int SavedGP = ABE.obj_abhy_wsp_gpdata_new_23.Where(x => x.state_name == item && x.year == year).ToList().Count();//total list
                                int SubmitGP = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == item && x.year == year && x.status_id == 3).ToList().Count();
                                int RejectGP = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == item && x.year == year && x.reject_status == "Rejected By District" && x.status_id == 1).ToList().Count();
                                int ApprovedGP = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == item && x.year == year && x.status_id == 4).ToList().Count();
                                int ApprovedBySPMU = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == item && x.year == year && x.status_id == 5).ToList().Count();
                                int RejectBySPMU = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == item && x.year == year && x.reject_status == "Rejected By State" && x.status_id == 3).ToList().Count();
                                obj2.StateName = StateName;
                                obj2.DistrinctCount = DistrinctCount;
                                obj2.BlockCount = BlockCount;
                                obj2.GpCount = GpCount;
                                obj2.SavedGP = SavedGP;
                                obj2.SubmitGP = SubmitGP;
                                obj2.RejectGP = RejectGP;
                                obj2.ApprovedGP = ApprovedGP;
                                obj2.ApprovedBySPMU = ApprovedBySPMU;
                                obj2.RejectBySPMU = RejectBySPMU;
                                AllData.Add(obj2);
                            }
                        }
                    }
                    else
                    {
                        if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null && year != "0" && year != "" && year != null)
                        {
                            int SavedGP = ABE.obj_abhy_wsp_gpdata_new_24.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.gram_panchayat_name == gram && x.year == year).ToList().Count();//total list
                            int SubmitGP = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.gp_name == gram && x.year == year && x.status_id == 3).ToList().Count();
                            int RejectGP = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.gp_name == gram && x.year == year && x.reject_status == "Rejected By District" && x.status_id == 1).ToList().Count();
                            int ApprovedGP = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.gp_name == gram && x.year == year && x.status_id == 4).ToList().Count();
                            int ApprovedBySPMU = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.gp_name == gram && x.year == year && x.status_id == 5).ToList().Count();
                            int RejectBySPMU = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.gp_name == gram && x.year == year && x.reject_status == "Rejected By State" && x.status_id == 3).ToList().Count();
                            obj.StateName = StateName;
                            obj.DistrinctCount = DistrinctCount;
                            obj.BlockCount = BlockCount;
                            obj.GpCount = GpCount;
                            obj.SavedGP = SavedGP;
                            obj.SubmitGP = SubmitGP;
                            obj.RejectGP = RejectGP;
                            obj.ApprovedGP = ApprovedGP;
                            obj.ApprovedBySPMU = ApprovedBySPMU;
                            obj.RejectBySPMU = RejectBySPMU;
                            AllData.Add(obj);
                        }
                        else if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null && block != "0" && block != "" && block != null && year != "0" && year != "" && year != null)
                        {
                            int SavedGP = ABE.obj_abhy_wsp_gpdata_new_24.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.year == year).ToList().Count();//total list
                            int SubmitGP = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.year == year && x.status_id == 3).ToList().Count();
                            int RejectGP = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.year == year && x.reject_status == "Rejected By District" && x.status_id == 1).ToList().Count();
                            int ApprovedGP = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.year == year && x.status_id == 4).ToList().Count();
                            int ApprovedBySPMU = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.year == year && x.status_id == 5).ToList().Count();
                            int RejectBySPMU = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.year == year && x.reject_status == "Rejected By State" && x.status_id == 3).ToList().Count();
                            obj.StateName = StateName;
                            obj.DistrinctCount = DistrinctCount;
                            obj.BlockCount = BlockCount;
                            obj.GpCount = GpCount;
                            obj.SavedGP = SavedGP;
                            obj.SubmitGP = SubmitGP;
                            obj.RejectGP = RejectGP;
                            obj.ApprovedGP = ApprovedGP;
                            obj.ApprovedBySPMU = ApprovedBySPMU;
                            obj.RejectBySPMU = RejectBySPMU;
                            AllData.Add(obj);
                        }
                        else if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null && year != "" && year != null)
                        {
                            int SavedGP = ABE.obj_abhy_wsp_gpdata_new_24.Where(x => x.state_name == state && x.district_name == district && x.year == year).ToList().Count();//total list
                            int SubmitGP = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == state && x.district_name == district && x.year == year && x.status_id == 3).ToList().Count();
                            int RejectGP = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == state && x.district_name == district && x.year == year && x.reject_status == "Rejected By District" && x.status_id == 1).ToList().Count();
                            int ApprovedGP = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == state && x.district_name == district && x.year == year && x.status_id == 4).ToList().Count();
                            int ApprovedBySPMU = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == state && x.district_name == district && x.year == year && x.status_id == 5).ToList().Count();
                            int RejectBySPMU = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == state && x.district_name == district && x.year == year && x.reject_status == "Rejected By State" && x.status_id == 3).ToList().Count();
                            obj.StateName = StateName;
                            obj.DistrinctCount = DistrinctCount;
                            obj.BlockCount = BlockCount;
                            obj.GpCount = GpCount;
                            obj.SavedGP = SavedGP;
                            obj.SubmitGP = SubmitGP;
                            obj.RejectGP = RejectGP;
                            obj.ApprovedGP = ApprovedGP;
                            obj.ApprovedBySPMU = ApprovedBySPMU;
                            obj.RejectBySPMU = RejectBySPMU;
                            AllData.Add(obj);
                        }
                        else if (state != "0" && state != "" && state != null && year != "" && year != null)
                        {
                            int SavedGP = ABE.obj_abhy_wsp_gpdata_new_24.Where(x => x.state_name == state && x.year == year).ToList().Count();//total list
                            int SubmitGP = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == state && x.year == year && x.status_id == 3).ToList().Count();
                            int RejectGP = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == state && x.year == year && x.reject_status == "Rejected By District" && x.status_id == 1).ToList().Count();
                            int ApprovedGP = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == state && x.year == year && x.status_id == 4).ToList().Count();
                            int ApprovedBySPMU = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == state && x.year == year && x.status_id == 5).ToList().Count();
                            int RejectBySPMU = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == state && x.year == year && x.reject_status == "Rejected By State" && x.status_id == 3).ToList().Count();
                            obj.StateName = StateName;
                            obj.DistrinctCount = DistrinctCount;
                            obj.BlockCount = BlockCount;
                            obj.GpCount = GpCount;
                            obj.SavedGP = SavedGP;
                            obj.SubmitGP = SubmitGP;
                            obj.RejectGP = RejectGP;
                            obj.ApprovedGP = ApprovedGP;
                            obj.ApprovedBySPMU = ApprovedBySPMU;
                            obj.RejectBySPMU = RejectBySPMU;
                            AllData.Add(obj);
                        }
                        else
                        {
                            foreach (var item in States)
                            {
                                if (item == "Gujarat_24")
                                {
                                    StateName = "Gujarat_24";
                                    DistrinctCount = 6;
                                    BlockCount = 36;
                                    GpCount = 1873;
                                }
                                else if (item == "Haryana_6")
                                {
                                    StateName = "Haryana_6";
                                    DistrinctCount = 14;
                                    BlockCount = 36;
                                    GpCount = 1656;
                                }
                                else if (item == "Karnataka_29")
                                {
                                    StateName = "Karnataka_29";
                                    DistrinctCount = 14;
                                    BlockCount = 41;
                                    GpCount = 1199;
                                }
                                else if (item == "Madhya Pradesh_23")
                                {
                                    StateName = "Madhya Pradesh_23";
                                    DistrinctCount = 6;
                                    BlockCount = 9;
                                    GpCount = 670;
                                }
                                else if (item == "Maharashtra_27")
                                {
                                    StateName = "Maharashtra_27";
                                    DistrinctCount = 13;
                                    BlockCount = 43;
                                    GpCount = 1133;
                                }
                                else if (item == "Rajasthan_8")
                                {
                                    StateName = "Rajasthan_8";
                                    DistrinctCount = 17;
                                    BlockCount = 38;
                                    GpCount = 1132;
                                }
                                else if (item == "Uttar Pradesh_9")
                                {
                                    StateName = "Uttar Pradesh_9";
                                    DistrinctCount = 10;
                                    BlockCount = 26;
                                    GpCount = 550;
                                }
                                GpTracker obj2 = new GpTracker();
                                int SavedGP = ABE.obj_abhy_wsp_gpdata_new_24.Where(x => x.state_name == item && x.year == year).ToList().Count();//total list
                                int SubmitGP = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == item && x.year == year && x.status_id == 3).ToList().Count();
                                int RejectGP = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == item && x.year == year && x.reject_status == "Rejected By District" && x.status_id == 1).ToList().Count();
                                int ApprovedGP = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == item && x.year == year && x.status_id == 4).ToList().Count();
                                int ApprovedBySPMU = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == item && x.year == year && x.status_id == 5).ToList().Count();
                                int RejectBySPMU = ABE.obj_abhy_wsp_approved_status.Where(x => x.state_name == item && x.year == year && x.reject_status == "Rejected By State" && x.status_id == 3).ToList().Count();
                                obj2.StateName = StateName;
                                obj2.DistrinctCount = DistrinctCount;
                                obj2.BlockCount = BlockCount;
                                obj2.GpCount = GpCount;
                                obj2.SavedGP = SavedGP;
                                obj2.SubmitGP = SubmitGP;
                                obj2.RejectGP = RejectGP;
                                obj2.ApprovedGP = ApprovedGP;
                                obj2.ApprovedBySPMU = ApprovedBySPMU;
                                obj2.RejectBySPMU = RejectBySPMU;
                                AllData.Add(obj2);
                            }
                        }
                    }
                    return Json(AllData, JsonRequestBehavior.AllowGet);
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
        public ActionResult GetDataByStateSocial(string StateName, string Status, string Year)
        {
            if (Session["UserId"] != null)
            {

                //var Data = ABE.obj_social_socialmgt_remarks.Where(x => x.state_name == StateName && x.year == Year && x.approve == Status).ToList();


                //return Json(Data, JsonRequestBehavior.AllowGet);


                try
                {

                    List<social_socialmgt_other_local_institues> ddetails = new List<social_socialmgt_other_local_institues>();
                    var socialData = ABE.obj_social_socialmgt_other_local_institues.Where(x => x.state_name == StateName && x.year == Year).GroupBy(o => o.gpname).ToList();//total list
                    if (socialData.Count != 0)
                    {
                        foreach (var items in socialData.AsEnumerable())
                        {
                            var item = items.First();
                            var data = ABE.obj_social_socialmgt_other_local_institues.Where(x => x.state_name == StateName && x.year == Year && x.gpname == item.gpname).OrderByDescending(x => x.month_order_by).Take(1);
                            ddetails.AddRange(data);
                        }
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
            //if (Session["UserId"] != null)
            //{
            //    try
            //    {
            //        //int StatusId = Convert.ToInt32(Status);
            //        if (Year == "2023-24")
            //        {
            //            if (StateName != "0" && Status == "0" && Year == "0")
            //            {
            //                var Data = ABE.obj_social_socialmgt_remarks.Where(x => x.state_name == StateName).ToList();
            //                return Json(Data, JsonRequestBehavior.AllowGet);
            //            }
            //            else if (StateName != "0" && Year != "0" && Status == "0")
            //            {
            //                var Data = ABE.obj_social_socialmgt_remarks.Where(x => x.state_name == StateName && x.year == Year).ToList();
            //                return Json(Data, JsonRequestBehavior.AllowGet);
            //            }
            //            else if (StateName != "0" && Year != "0" && Status != "0")
            //            {
            //                if (Status == "GP")
            //                {                                
            //                 var approvedGpnames = ABE.obj_social_socialmgt_remarks
            //                 .Where(sr => (sr.state_name == StateName && sr.approve == "Approve" || sr.approve == "District") &&
            //                 sr.year == Year).Select(sr => sr.gpname).Distinct();

            //                    var result = ABE.obj_social_socialmgt_other_local_institues
            //                        .Where(ss => ss.state_name == StateName && ss.year == Year &&
            //                                     !approvedGpnames.Contains(ss.gpname))
            //                        .Select(ss => new
            //                        {
            //                            gpname = ss.gpname,
            //                            state_name = ss.state_name,
            //                            district_name = ss.district_name,
            //                            block_name = ss.block_name,
            //                            year = ss.year,
            //                            approve = "At-GP"
            //                        })
            //                        .Distinct().ToList();

            //                    return Json(result, JsonRequestBehavior.AllowGet);
            //                }

            //                else {
            //                    var Data = ABE.obj_social_socialmgt_remarks.Where(x => x.state_name == StateName && x.year == Year && x.approve == Status).ToList();
            //                     return Json(Data, JsonRequestBehavior.AllowGet);

            //                }

            //            }
            //        }
            //        else if (Year == "2023-24 Update")
            //        {
            //            if (StateName != "0" && Status == "0" && Year == "0")
            //            {
            //                var Data = ABE.obj_social_socialmgt_remarks.Where(x => x.state_name == StateName).ToList();
            //                return Json(Data, JsonRequestBehavior.AllowGet);
            //            }
            //            else if (StateName != "0" && Year != "0" && Status == "0")
            //            {
            //                var Data = ABE.obj_social_socialmgt_remarks.Where(x => x.state_name == StateName && x.year == Year).ToList();
            //                return Json(Data, JsonRequestBehavior.AllowGet);
            //            }
            //            else if (StateName != "0" && Year != "0" && Status != "0")
            //            {
            //                if (Status == "GP")
            //                {
            //                    var approvedGpnames = ABE.obj_social_socialmgt_remarks
            //                    .Where(sr => (sr.state_name == StateName && sr.approve == "Approve" || sr.approve == "District") &&
            //                    sr.year == Year).Select(sr => sr.gpname).Distinct();

            //                    var result = ABE.obj_social_socialmgt_other_local_institues
            //                        .Where(ss => ss.state_name == StateName && ss.year == Year &&
            //                                     !approvedGpnames.Contains(ss.gpname))
            //                        .Select(ss => new
            //                        {
            //                            gpname = ss.gpname,
            //                            state_name = ss.state_name,
            //                            district_name = ss.district_name,
            //                            block_name = ss.block_name,
            //                            year = ss.year,
            //                            approve = "At-GP"
            //                        })
            //                        .Distinct().ToList();

            //                    return Json(result, JsonRequestBehavior.AllowGet);
            //                }

            //                else
            //                {
            //                    var Data = ABE.obj_social_socialmgt_remarks.Where(x => x.state_name == StateName && x.year == Year && x.approve == Status).ToList();
            //                    return Json(Data, JsonRequestBehavior.AllowGet);

            //                }
            //            }
            //        }
            //        else
            //        {
            //            if (StateName != "0" && Status == "0" && Year == "0")
            //            {
            //                var Data = ABE.obj_social_socialmgt_remarks.Where(x => x.state_name == StateName).ToList();
            //                return Json(Data, JsonRequestBehavior.AllowGet);
            //            }
            //            else if (StateName != "0" && Year != "0" && Status == "0")
            //            {
            //                var Data = ABE.obj_social_socialmgt_remarks.Where(x => x.state_name == StateName && x.year == Year).ToList();
            //                return Json(Data, JsonRequestBehavior.AllowGet);
            //            }
            //            else if (StateName != "0" && Year != "0" && Status != "0")
            //            {
            //                //if (Status == "1")
            //                //{
            //                //    var GPData = ABE.obj_abhy_wsp_gpdata_new_24.Where(x => x.state_name == StateName && x.year == Year).ToList();
            //                //    return Json(GPData, JsonRequestBehavior.AllowGet);
            //                //}
            //                var Data = ABE.obj_social_socialmgt_remarks.Where(x => x.state_name == StateName && x.year == Year && x.approve == Status).ToList();
            //                return Json(Data, JsonRequestBehavior.AllowGet);
            //            }
            //        }
            //        return Json("No Data", JsonRequestBehavior.AllowGet);
            //    }
            //    catch (Exception ex)
            //    {
            //        return Json(ex, JsonRequestBehavior.AllowGet);
            //    }
            //}
            //else
            //{
            //    return Json("Logout", JsonRequestBehavior.AllowGet);
            //}

        }

        [HttpPost]
        public ActionResult GetSocialData(string state, string district, string block, string gram, string year)        
        {
            if (Session["UserId"] != null)
            {
                try
                {

                    string[] States = { "Gujarat_24", "Haryana_6", "Karnataka_29", "Madhya Pradesh_23", "Maharashtra_27", "Rajasthan_8", "Uttar Pradesh_9" };

                    string StateName = "";
                    int DistrinctCount = 0;
                    int BlockCount = 0;
                    int GpCount = 0;
                    if (state == "Gujarat_24")
                    {
                        StateName = "Gujarat_24";
                        DistrinctCount = 6;
                        BlockCount = 36;
                        GpCount = 1873;
                    }
                    else if (state == "Haryana_6")
                    {
                        StateName = "Haryana_6";
                        DistrinctCount = 14;
                        BlockCount = 36;
                        GpCount = 1656;
                    }
                    else if (state == "Karnataka_29")
                    {
                        StateName = "Karnataka_29";
                        DistrinctCount = 14;
                        BlockCount = 41;
                        GpCount = 1199;
                    }
                    else if (state == "Madhya Pradesh_23")
                    {
                        StateName = "Madhya Pradesh_23";
                        DistrinctCount = 6;
                        BlockCount = 9;
                        GpCount = 670;
                    }
                    else if (state == "Maharashtra_27")
                    {
                        StateName = "Maharashtra_27";
                        DistrinctCount = 13;
                        BlockCount = 43;
                        GpCount = 1133;
                    }
                    else if (state == "Rajasthan_8")
                    {
                        StateName = "Rajasthan_8";
                        DistrinctCount = 17;
                        BlockCount = 38;
                        GpCount = 1132;
                    }
                    else if (state == "Uttar Pradesh_9")
                    {
                        StateName = "Uttar Pradesh_9";
                        DistrinctCount = 10;
                        BlockCount = 26;
                        GpCount = 550;
                    }
                    List<GpTracker> AllData = new List<GpTracker>();
                    GpTracker obj = new GpTracker();
                    if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null && year != "0" && year != "" && year != null)
                    {
                        int SavedGP = ABE.obj_social_socialmgt_other_local_institues.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.gpname == gram && x.year == year).GroupBy(x => x.gpname).ToList().Count();//total list
                        int SubmitGP = ABE.obj_social_socialmgt_remarks.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.gpname == gram && x.year == year && x.approve == "District").ToList().Count();
                        int RejectGP = ABE.obj_social_socialmgt_remarks.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.gpname == gram && x.year == year && x.approve == "Reject").ToList().Count();
                        int ApprovedGP = ABE.obj_social_socialmgt_remarks.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.gpname == gram && x.year == year && x.approve == "Approve").ToList().Count();
                        int TotalGPCOUNT = ABE.obj_abhy_block_gp_area_info.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.gram_panchayat_name == gram).ToList().Count();

                        //int ApprovedBySPMU = ABE.obj_social_socialmgt_remarks.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.gp_name == gram && x.year == year && x.status_id == 5).ToList().Count();
                        //int RejectBySPMU = ABE.obj_social_socialmgt_remarks.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.gp_name == gram && x.year == year && x.reject_status == "Rejected By State" && x.status_id == 3).ToList().Count();
                        obj.StateName = StateName;
                        obj.DistrinctCount = DistrinctCount;
                        obj.BlockCount = BlockCount;
                        obj.GpCount = GpCount;
                        obj.SavedGP = SavedGP;
                        obj.SubmitGP = SubmitGP;
                        obj.RejectGP = RejectGP;
                        obj.ApprovedGP = ApprovedGP;
                        obj.TotalGPCOUNT = TotalGPCOUNT;
                        //obj.ApprovedBySPMU = ApprovedBySPMU;
                        //obj.RejectBySPMU = RejectBySPMU;
                        AllData.Add(obj);
                    }
                    else if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null && block != "0" && block != "" && block != null && year != "0" && year != "" && year != null)
                    {
                        int SavedGP = ABE.obj_social_socialmgt_other_local_institues.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.year == year).GroupBy(x => x.gpname).ToList().Count();//total list
                        int SubmitGP = ABE.obj_social_socialmgt_remarks.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.year == year && x.approve == "District").ToList().Count();
                        int RejectGP = ABE.obj_social_socialmgt_remarks.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.year == year && x.approve == "Reject").ToList().Count();
                        int ApprovedGP = ABE.obj_social_socialmgt_remarks.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.year == year && x.approve == "Approve").ToList().Count();
                        int TotalGPCOUNT = ABE.obj_abhy_block_gp_area_info.Where(x => x.state_name == state && x.district_name == district && x.block_name == block).GroupBy(x => x.gram_panchayat_name).Count();

                        //int ApprovedBySPMU = ABE.obj_social_socialmgt_remarks.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.year == year && x.status_id == 5).ToList().Count();
                        //int RejectBySPMU = ABE.obj_social_socialmgt_remarks.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.year == year && x.reject_status == "Rejected By State" && x.status_id == 3).ToList().Count();
                        obj.StateName = StateName;
                        obj.DistrinctCount = DistrinctCount;
                        obj.BlockCount = BlockCount;
                        obj.GpCount = GpCount;
                        obj.SavedGP = SavedGP;
                        obj.SubmitGP = SubmitGP;
                        obj.RejectGP = RejectGP;
                        obj.ApprovedGP = ApprovedGP;
                        obj.TotalGPCOUNT = TotalGPCOUNT;
                        //obj.ApprovedBySPMU = ApprovedBySPMU;
                        //obj.RejectBySPMU = RejectBySPMU;
                        AllData.Add(obj);
                    }
                    else if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null && year != "" && year != null)
                    {
                        int SavedGP = ABE.obj_social_socialmgt_other_local_institues.Where(x => x.state_name == state && x.district_name == district && x.year == year).GroupBy(x => x.gpname).ToList().Count();//total list
                        int SubmitGP = ABE.obj_social_socialmgt_remarks.Where(x => x.state_name == state && x.district_name == district && x.year == year && x.approve == "District").ToList().Count();
                        int RejectGP = ABE.obj_social_socialmgt_remarks.Where(x => x.state_name == state && x.district_name == district && x.year == year && x.approve == "Reject").ToList().Count();
                        int ApprovedGP = ABE.obj_social_socialmgt_remarks.Where(x => x.state_name == state && x.district_name == district && x.year == year && x.approve == "Approve").ToList().Count();
                        int TotalGPCOUNT = ABE.obj_abhy_block_gp_area_info.Where(x=> x.state_name == state && x.district_name == district).GroupBy(x => x.gram_panchayat_name).Count();
                        //int ApprovedBySPMU = ABE.obj_social_socialmgt_remarks.Where(x => x.state_name == state && x.district_name == district && x.year == year && x.status_id == 5).ToList().Count();
                        //int RejectBySPMU = ABE.obj_social_socialmgt_remarks.Where(x => x.state_name == state && x.district_name == district && x.year == year && x.reject_status == "Rejected By State" && x.status_id == 3).ToList().Count();
                        obj.StateName = StateName;
                        obj.DistrinctCount = DistrinctCount;
                        obj.BlockCount = BlockCount;
                        obj.GpCount = GpCount;
                        obj.SavedGP = SavedGP;
                        obj.SubmitGP = SubmitGP;
                        obj.RejectGP = RejectGP;
                        obj.ApprovedGP = ApprovedGP;
                        obj.TotalGPCOUNT = TotalGPCOUNT;
                        //obj.ApprovedBySPMU = ApprovedBySPMU;
                        //obj.RejectBySPMU = RejectBySPMU;
                        AllData.Add(obj);
                    }
                    else if (state != "0" && state != "" && state != null && year != "" && year != null)
                    {
                        int SavedGP = ABE.obj_social_socialmgt_other_local_institues.Where(x => x.state_name == state && x.year == year).GroupBy(x => x.gpname).ToList().Count();//total list
                        int SubmitGP = ABE.obj_social_socialmgt_remarks.Where(x => x.state_name == state && x.year == year && x.approve == "District").ToList().Count();
                        int RejectGP = ABE.obj_social_socialmgt_remarks.Where(x => x.state_name == state && x.year == year && x.approve == "Reject").ToList().Count();
                        int ApprovedGP = ABE.obj_social_socialmgt_remarks.Where(x => x.state_name == state && x.year == year && x.approve == "Approve").ToList().Count();
                        int TotalGPCOUNT = ABE.obj_abhy_block_gp_area_info.Where(x => x.state_name == state).GroupBy(x => x.gram_panchayat_name).Count();

                        //int ApprovedBySPMU = ABE.obj_social_socialmgt_remarks.Where(x => x.state_name == state && x.year == year && x.status_id == 5).ToList().Count();
                        //int RejectBySPMU = ABE.obj_social_socialmgt_remarks.Where(x => x.state_name == state && x.year == year && x.reject_status == "Rejected By State" && x.status_id == 3).ToList().Count();
                        obj.StateName = StateName;
                        obj.DistrinctCount = DistrinctCount;
                        obj.BlockCount = BlockCount;
                        obj.GpCount = GpCount;
                        obj.SavedGP = SavedGP;
                        obj.SubmitGP = SubmitGP;
                        obj.RejectGP = RejectGP;
                        obj.ApprovedGP = ApprovedGP;
                        obj.TotalGPCOUNT = TotalGPCOUNT;
                        //obj.ApprovedBySPMU = ApprovedBySPMU;
                        //obj.RejectBySPMU = RejectBySPMU;
                        AllData.Add(obj);
                    }
                    else
                    {
                        foreach (var item in States)
                        {
                            if (item == "Gujarat_24")
                            {
                                StateName = "Gujarat_24";
                                DistrinctCount = 6;
                                BlockCount = 36;
                                GpCount = 1873;
                            }
                            else if (item == "Haryana_6")
                            {
                                StateName = "Haryana_6";
                                DistrinctCount = 14;
                                BlockCount = 36;
                                GpCount = 1656;
                            }
                            else if (item == "Karnataka_29")
                            {
                                StateName = "Karnataka_29";
                                DistrinctCount = 14;
                                BlockCount = 41;
                                GpCount = 1199;
                            }
                            else if (item == "Madhya Pradesh_23")
                            {
                                StateName = "Madhya Pradesh_23";
                                DistrinctCount = 6;
                                BlockCount = 9;
                                GpCount = 670;
                            }
                            else if (item == "Maharashtra_27")
                            {
                                StateName = "Maharashtra_27";
                                DistrinctCount = 13;
                                BlockCount = 43;
                                GpCount = 1133;
                            }
                            else if (item == "Rajasthan_8")
                            {
                                StateName = "Rajasthan_8";
                                DistrinctCount = 17;
                                BlockCount = 38;
                                GpCount = 1132;
                            }
                            else if (item == "Uttar Pradesh_9")
                            {
                                StateName = "Uttar Pradesh_9";
                                DistrinctCount = 10;
                                BlockCount = 26;
                                GpCount = 550;
                            }
                            GpTracker obj2 = new GpTracker();
                            int SavedGP = ABE.obj_social_socialmgt_other_local_institues.Where(x => x.state_name == item && x.year == year).GroupBy(x => x.gpname).ToList().Count();//total list
                            int SubmitGP = ABE.obj_social_socialmgt_remarks.Where(x => x.state_name == item && x.year == year && x.approve == "District").ToList().Count();
                            int RejectGP = ABE.obj_social_socialmgt_remarks.Where(x => x.state_name == item && x.year == year && x.approve == "Reject").ToList().Count();
                            int ApprovedGP = ABE.obj_social_socialmgt_remarks.Where(x => x.state_name == item && x.year == year && x.approve == "Approve").ToList().Count();
                            int TotalGPCOUNT = ABE.obj_abhy_block_gp_area_info.Where(x => x.state_name == item).ToList().Count();

                            //int ApprovedBySPMU = ABE.obj_social_socialmgt_remarks.Where(x => x.state_name == item && x.year == year && x.status_id == 5).ToList().Count();
                            //int RejectBySPMU = ABE.obj_social_socialmgt_remarks.Where(x => x.state_name == item && x.year == year && x.reject_status == "Rejected By State" && x.status_id == 3).ToList().Count();
                            obj2.StateName = StateName;
                            obj2.DistrinctCount = DistrinctCount;
                            obj2.BlockCount = BlockCount;
                            obj2.GpCount = GpCount;
                            obj2.SavedGP = SavedGP;
                            obj2.SubmitGP = SubmitGP;
                            obj2.RejectGP = RejectGP;
                            obj2.ApprovedGP = ApprovedGP;
                            obj2.TotalGPCOUNT = TotalGPCOUNT;
                            //obj2.ApprovedBySPMU = ApprovedBySPMU;
                            //obj2.RejectBySPMU = RejectBySPMU;
                            AllData.Add(obj2);
                        }
                    }
                    return Json(AllData, JsonRequestBehavior.AllowGet);
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