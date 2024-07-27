

using AbhyProject.Classes;
using AbhyProject.Models;
using AbhyProject.Utility;
using System;
using System.Collections.Generic;
using System.Data.Entity;
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
    public class AdminController : Controller
    {
        // GET: Admin
        AbhyEntity ABE = new AbhyEntity();

        public bool IsPostBack { get; private set; }

        [HttpGet]
        public ActionResult AdminPannel()
        {
            if (Session["UserId"] != null)
            {
                var Data1 = ABE.objUsers.ToList();

                var International_Conference = ABE.objConference.Where(x => x.Conference_type != "National Conference" && x.accept == "False").ToList();

                JavaScriptSerializer js1 = new JavaScriptSerializer();

                ViewBag.Data1 = js1.Serialize(Data1);
                JavaScriptSerializer js2 = new JavaScriptSerializer();
                js2.MaxJsonLength = 2147483647;
                var International_conference1 = js2.Serialize(International_Conference);



                ViewBag.International_conference1 = js2.Serialize(International_conference1);




                var Gwbtbluser = ABE.objUsers.Distinct().ToList();
                ViewBag.tbluser = js2.Serialize(Gwbtbluser);


                return View();
            }
            else
            {
                Session["AdminPannelPage"] = "Adminpannel Page View";
                return RedirectToAction("MisLogin", "Home");
            }



        }

        [HttpPost]
        public ActionResult DataGWLApproval(string Data)
        {
            JavaScriptSerializer js = new JavaScriptSerializer();
            var result = js.Deserialize<Abhy_WaterUtilization_Approval>(Data);
            TempData["Abc"] = 0;
            Session["GM_UserID"] = result.UserId;
            Session["GM_State"] = result.state;
            Session["GM_Dist"] = result.dist;
            Session["GM_Block"] = result.block;

            return Json("Save", JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult WaterBudgetId(string SDate, string UserEmail, string state, string dist, string block, string gram)
        {
            Session["WBUEMAIL"] = UserEmail;
            Session["WBToDate"] = SDate;
            Session["WBSTATE"] = state;
            Session["WBDIST"] = dist;
            Session["WBBLock"] = block;
            Session["GRAM"] = gram;
            var Obj = ABE.objabhy_waterbudget_report.Where(x => x.email == UserEmail && x.state_name == state && x.district_name == dist && x.block == block && x.gname == gram).ToList();

            if (Obj.Count != 0)
            {
                foreach (var item1 in Obj)
                {

                    DateTime Date1 = Convert.ToDateTime(SDate);
                    DateTime Date2 = Convert.ToDateTime(item1.currdate);
                    if (Date1 == Date2)
                    {
                        Session["SurfaceWaterCount"] = Convert.ToDouble(item1.surfacewatercount);
                        Session["RechargeTotal"] = Convert.ToDouble(item1.rechargetotal);
                        Session["DraftTotal"] = Convert.ToDouble(item1.drafttotal);
                        Session["ReachargeandDraftTotal"] = Convert.ToDouble(item1.reachargeanddrafttotal);
                        Session["finlSWreult"] = Convert.ToDouble(item1.finlswreult);
                        Session["SurfWatSpringsRainfall"] = Convert.ToDouble(item1.surfwatspringsrainfall);
                        Session["SurfWatCheckDams1"] = Convert.ToDouble(item1.surfwatcheckdams1);
                        Session["SurfWatcanals1"] = Convert.ToDouble(item1.surfwatcanals1);
                        Session["SurfWatReservior1"] = Convert.ToDouble(item1.surfwatreservior1);
                        Session["SurfWatLakesPondstanks1"] = Convert.ToDouble(item1.surfwatlakespondstanks1);
                        Session["SurfWatRiver1"] = Convert.ToDouble(item1.surfwatriver1);
                        Session["finlreult"] = Convert.ToDouble(item1.finlreult);
                        Session["Harvestinres"] = Convert.ToDouble(item1.harvestinres);
                        Session["Irrigationres"] = Convert.ToDouble(item1.irrigationres);
                        Session["checkdamres"] = Convert.ToDouble(item1.checkdamres);
                        Session["Seepagecanelres"] = Convert.ToDouble(item1.seepagecanelres);
                        Session["SurfacewaterRecharge"] = Convert.ToDouble(item1.surfacewaterrecharge);
                        Session["DrinkingDraft"] = Convert.ToDouble(item1.drinkingdraft);
                        Session["DraftIndustry"] = Convert.ToDouble(item1.draftindustry);
                        Session["Gwaterres"] = Convert.ToDouble(item1.gwaterres);
                        Session["IrrigationDraft"] = Convert.ToDouble(item1.irrigationdraft);
                    }

                }


            }

            return Json("Save", JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult ApproveWater_Budget()
        {

            string contemail_to = Session["Email"].ToString().Trim();
            StringBuilder sb = new StringBuilder();
            sb.Append("<br>");
            sb.Append("<br>");
            sb.Append("<table style='margin-left:50px;'>");
            sb.Append("<tr  style='width:300px'>");
            sb.Append("</tr>");
            sb.Append("<tr style='width:300px'>");
            sb.Append("<td>");
            sb.Append("<b>Hello  " + Session["UserName"].ToString() + ",</b>");
            sb.Append("<br>");
            sb.Append("<h4>");
            sb.Append("Approved on WaterBudget  Information:");
            sb.Append("</h4>");
            sb.Append("<br>");


            /*width = 50 height = 31 border = 0 alt = Click title = Click ></ a >*/
            sb.Append("<br>");
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
            var results = WebConstents.SendEmailSMTP(contemail_to, "", "Approved WaterBudget Information - Abhy", sb.ToString(), "");
            if (results == "success")
            {

                var todaydate = Session["WBToDate"];
                var Email = Session["WBUEMAIL"].ToString();
                var GWState = Session["WBSTATE"].ToString();
                var GWDist = Session["WBDIST"].ToString();
                var GWBlock = Session["WBBLock"].ToString();
                var GWGram = Session["GRAM"].ToString();

                var Datata = ABE.objabhy_waterbudget_report.Where(x => x.state_name == GWState && x.block == GWBlock && x.district_name == GWDist && x.email == Email && x.gname == GWGram).ToList();
                if (Datata != null)
                {
                    foreach (var item in Datata)
                    {
                        DateTime Date1 = Convert.ToDateTime(item.currdate);
                        DateTime Date2 = Convert.ToDateTime(todaydate);
                        if (Date1 == Date2)
                        {
                            var Idddd = Convert.ToInt32(item.brid);
                            if (!this.IsPostBack)
                            {
                                var Datata11 = ABE.objabhy_waterbudget_report.Where(x => x.brid == Idddd).SingleOrDefault();
                                Datata11.approvedby = Session["UserName"].ToString();
                                ABE.Entry(item).State = EntityState.Modified;
                            }
                        }
                        ABE.SaveChanges();
                    }
                }
                return Json("Please Check Your Registered Mail", JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("Mail send Failed !!!", JsonRequestBehavior.AllowGet);
            }



        }

        [HttpPost]
        public ActionResult RejectWater_Budget()
        {
            string contemail = Session["Email"].ToString().Trim();
            StringBuilder sb = new StringBuilder();
            sb.Append("<br>");
            sb.Append("<br>");
            sb.Append("<table style='margin-left:50px;'>");
            sb.Append("<tr  style='width:300px'>");
            sb.Append("</tr>");
            sb.Append("<tr style='width:300px'>");
            sb.Append("<td>");
            sb.Append("<b>Hello  " + Session["UserName"].ToString() + ",</b>");
            sb.Append("<br>");
            sb.Append("<h4>");
            sb.Append("Rejected on Demand Side Information:");
            sb.Append("</h4>");
            sb.Append("<br>");
            /*width = 50 height = 31 border = 0 alt = Click title = Click ></ a >*/
            sb.Append("<br>");
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
            string result = WebConstents.SendEmailSMTP(contemail, "", "Rejected Demand Side Information - Abhy", sb.ToString(), "");
            if (result == "success")
            {
                var todaydate = Session["WBToDate"];
                var Email = Session["WBUEMAIL"].ToString();
                var GWState = Session["WBSTATE"].ToString();
                var GWDist = Session["WBDIST"].ToString();
                var GWBlock = Session["WBBLock"].ToString();
                var GWGram = Session["GRAM"].ToString();

                var Datata = ABE.objabhy_waterbudget_report.Where(x => x.state_name == GWState && x.block == GWBlock && x.district_name == GWDist && x.email == Email && x.gname == GWGram).ToList();
                if (Datata != null)
                {
                    foreach (var item in Datata)
                    {
                        DateTime Date1 = Convert.ToDateTime(item.currdate);
                        DateTime Date2 = Convert.ToDateTime(todaydate);
                        if (Date1 == Date2)
                        {
                            ABE.Entry(item).State = EntityState.Deleted;

                        }
                        ABE.SaveChanges();
                    }
                }

                return Json("Please Check Your Registered Mail", JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("Mail Send Failed.", JsonRequestBehavior.AllowGet);
            }

        }



        [HttpGet]
        public ActionResult GettingWaterBudgetDetails()
        {
            List<abhy_waterbudget_report> ddetails = ABE.objabhy_waterbudget_report.ToList();//total list
            return Json(ddetails, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public ActionResult APPDemandSide()
        {
            List<abhy_demand1> ddetails = ABE.objabhy_demand1.ToList();//total list
            return Json(ddetails, JsonRequestBehavior.AllowGet);
        }


        [HttpPost]
        public ActionResult DemandId(string SDate, string UserId)
        {
            Session["DUserId"] = UserId;
            Session["DemandToDate"] = SDate;
            return Json("Save", JsonRequestBehavior.AllowGet);
        }



        [HttpPost]
        public ActionResult ApproveDemand()
        {
            string contemail = Session["Email"].ToString().Trim();
            StringBuilder sb = new StringBuilder();
            sb.Append("<br>");
            sb.Append("<br>");
            sb.Append("<table style='margin-left:50px;'>");
            sb.Append("<tr  style='width:300px'>");
            sb.Append("</tr>");
            sb.Append("<tr style='width:300px'>");
            sb.Append("<td>");
            sb.Append("<b>Hello  " + Session["UserName"].ToString() + ",</b>");
            sb.Append("<br>");
            sb.Append("<h4>");
            sb.Append("Approved on Demand Side And SupplySide  Information:");
            sb.Append("</h4>");
            sb.Append("<br>");


            /*width = 50 height = 31 border = 0 alt = Click title = Click ></ a >*/
            sb.Append("<br>");
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
            string result = WebConstents.SendEmailSMTP(contemail, "", "Approved Demand Information - Abhy", sb.ToString(), "");
            if (result == "success")
            {
                var todaydate = Session["DemandToDate"];
                var UserIddd = Convert.ToInt32(Session["DUserId"].ToString());
                var GWState = Session["DState"].ToString();
                var GWDist = Session["DDist"].ToString();
                var GWBlock = Session["Dblock"].ToString();
                var GWGram = Session["Dgram"].ToString();
                var dd = ABE.objabhy_demand1.ToList();
                var Datata = ABE.objabhy_demand1.Where(x => x.state_name == GWState && x.block == GWBlock && x.district_name == GWDist && x.userid == UserIddd && x.gname == GWGram).ToList();
                if (Datata != null)
                {
                    foreach (var item in Datata)
                    {
                        DateTime Date1 = Convert.ToDateTime(item.todaydate);
                        DateTime Date2 = Convert.ToDateTime(todaydate);
                        if (Date1 == Date2)
                        {
                            var Idddd = Convert.ToInt32(item.did);
                            if (!this.IsPostBack)
                            {
                                var Datata11 = ABE.objabhy_demand1.Where(x => x.did == Idddd).SingleOrDefault();
                                Datata11.accept = Session["UserName"].ToString();
                                ABE.Entry(item).State = EntityState.Modified;
                            }
                        }
                        ABE.SaveChanges();
                    }
                }
                return Json("Please Check Your Registered Mail", JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("EMail Send Failed.", JsonRequestBehavior.AllowGet);
            }



        }

        [HttpPost]
        public ActionResult RejectDemand()
        {
            string contemail = Session["Email"].ToString().Trim();

            StringBuilder sb = new StringBuilder();
            sb.Append("<br>");
            sb.Append("<br>");
            sb.Append("<table style='margin-left:50px;'>");
            sb.Append("<tr  style='width:300px'>");
            sb.Append("</tr>");
            sb.Append("<tr style='width:300px'>");
            sb.Append("<td>");
            sb.Append("<b>Hello  " + Session["UserName"].ToString() + ",</b>");
            sb.Append("<br>");
            sb.Append("<h4>");
            sb.Append("Rejected on Demand Side Information:");
            sb.Append("</h4>");
            sb.Append("<br>");
            /*width = 50 height = 31 border = 0 alt = Click title = Click ></ a >*/
            sb.Append("<br>");
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

            string result = WebConstents.SendEmailSMTP(contemail, "", "Rejected Demand Side Information - Abhy", sb.ToString(), "");
            if (result == "success")
            {
                var todaydate = Session["DemandToDate"];
                var UserIddd = Convert.ToInt32(Session["DUserId"].ToString());
                var GWState = Session["DState"].ToString();
                var GWDist = Session["DDist"].ToString();
                var GWBlock = Session["Dblock"].ToString();
                var GWGram = Session["Dgram"].ToString();
                var dd = ABE.objabhy_demand1.ToList();
                var Datata = ABE.objabhy_demand1.Where(x => x.state_name == GWState && x.block == GWBlock && x.district_name == GWDist && x.userid == UserIddd && x.gname == GWGram).ToList();
                if (Datata != null)
                {
                    foreach (var item in Datata)
                    {
                        DateTime Date1 = Convert.ToDateTime(item.todaydate);
                        DateTime Date2 = Convert.ToDateTime(todaydate);
                        if (Date1 == Date2)
                        {
                            var Idddd = Convert.ToInt32(item.did);
                            if (!this.IsPostBack)
                            {
                                var Datata11 = ABE.objabhy_demand1.Where(x => x.did == Idddd).SingleOrDefault();
                                Datata11.accept = Session["UserName"].ToString();
                                ABE.Entry(item).State = EntityState.Deleted;
                            }
                        }
                        ABE.SaveChanges();
                    }

                    var RData = ABE.objabhy_supply1.Where(x => x.state_name == GWState && x.block == GWBlock && x.district_name == GWDist && x.userid == UserIddd && x.gname == GWGram).ToList();
                    if (RData != null)
                    {

                        foreach (var item1 in RData)
                        {
                            DateTime Date1 = Convert.ToDateTime(item1.todaydate);
                            DateTime Date2 = Convert.ToDateTime(todaydate);
                            if (Date1 == Date2)
                            {
                                var Idddd = Convert.ToInt32(item1.supplyid);
                                if (!this.IsPostBack)
                                {
                                    var Datata11 = ABE.objabhy_supply1.Where(x => x.supplyid == Idddd).SingleOrDefault();

                                    ABE.Entry(item1).State = EntityState.Deleted;
                                }
                            }
                            ABE.SaveChanges();
                        }
                    }



                }

                return Json("Please Check Your Registered Mail", JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("Email Send Failed.", JsonRequestBehavior.AllowGet);
            }


        }
        [HttpPost]
        public ActionResult ApproveGWL()
        {
            string contemail = Session["Email"].ToString().Trim();
            StringBuilder sb = new StringBuilder();
            sb.Append("<br>");
            sb.Append("<br>");
            sb.Append("<table style='margin-left:50px;'>");
            sb.Append("<tr  style='width:300px'>");
            sb.Append("</tr>");
            sb.Append("<tr style='width:300px'>");
            sb.Append("<td>");
            sb.Append("<b>Hello  " + Session["UserName"].ToString() + ",</b>");
            sb.Append("<br>");
            sb.Append("<h4>");
            sb.Append("Approved on GroundWater Levels Information:");
            sb.Append("</h4>");
            sb.Append("<br>");


            /*width = 50 height = 31 border = 0 alt = Click title = Click ></ a >*/
            sb.Append("<br>");
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

            string result = WebConstents.SendEmailSMTP(contemail, null, "Approved Ground Water Levels Information - Abhy", sb.ToString(), "");
            if (result == "success")
            {
                var UserIddd = Session["GM_UserID"].ToString(); ;
                var GWState = Session["GM_State"].ToString();
                var GWDist = Session["GM_Dist"].ToString();
                var GWBlock = Session["GM_Block"].ToString();
                var Datata = ABE.objAbhy_WaterUtilization_Approval.Where(x => x.state == GWState && x.block == GWBlock && x.dist == GWDist && x.UserId == UserIddd).ToList();
                foreach (var item in Datata)
                {
                    var Idddd = Convert.ToInt32(item.awuid);
                    if (!this.IsPostBack)
                    {
                        var Datata11 = ABE.objAbhy_WaterUtilization_Approval.Where(x => x.awuid == Idddd).SingleOrDefault();
                        Datata11.ApprovedBy = Session["UserName"].ToString();
                        ABE.Entry(item).State = EntityState.Modified;
                    }
                    ABE.SaveChanges();
                }
                return Json("Please Check Your Registered Mail", JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("Email Send Failed.", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult RejectGWL()
        {
            string contemail = Session["Email"].ToString().Trim();

            StringBuilder sb = new StringBuilder();
            sb.Append("<br>");
            sb.Append("<br>");
            sb.Append("<table style='margin-left:50px;'>");
            sb.Append("<tr  style='width:300px'>");
            sb.Append("</tr>");
            sb.Append("<tr style='width:300px'>");
            sb.Append("<td>");
            sb.Append("<b>Hello  " + Session["UserName"].ToString() + ",</b>");
            sb.Append("<br>");
            sb.Append("<h4>");
            sb.Append("Rejected on GroundWater Levels Information:");
            sb.Append("</h4>");
            sb.Append("<br>");
            /*width = 50 height = 31 border = 0 alt = Click title = Click ></ a >*/
            sb.Append("<br>");
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

            string result1 = WebConstents.SendEmailSMTP(contemail, null, "Rejected Ground Water Levels Information - Abhy", sb.ToString(), "");
            if (result1 == "success")
            {

                var UserIddd = Session["GM_UserID"].ToString(); ;
                var GWState = Session["GM_State"].ToString();
                var GWDist = Session["GM_Dist"].ToString();
                var GWBlock = Session["GM_Block"].ToString();
                var Datata = ABE.objAbhy_WaterUtilization_Approval.Where(x => x.state == GWState && x.block == GWBlock && x.dist == GWDist && x.UserId == UserIddd).ToList();
                foreach (var item in Datata)
                {
                    var Idddd = Convert.ToInt32(item.awuid);
                    if (!this.IsPostBack)
                    {
                        var Datata11 = ABE.objAbhy_WaterUtilization_Approval.Where(x => x.awuid == Idddd).SingleOrDefault();
                        Datata11.ApprovedBy = Session["UserName"].ToString();
                        ABE.Entry(item).State = EntityState.Deleted;
                    }
                    ABE.SaveChanges();
                }

                var RData = ABE.objAbhy_Rainfall_Saved_Data.Where(x => x.state_name == GWState && x.district_name == GWDist && x.UserId == UserIddd).ToList();
                foreach (var item1 in RData)
                {
                    var Idddd = Convert.ToInt32(item1.arsid);
                    if (!this.IsPostBack)
                    {
                        var Datata11 = ABE.objAbhy_Rainfall_Saved_Data.Where(x => x.arsid == Idddd).SingleOrDefault();

                        ABE.Entry(item1).State = EntityState.Deleted;
                    }
                    ABE.SaveChanges();
                }
            }
            return Json("Please Check Your Registered Mail", JsonRequestBehavior.AllowGet);

        }


        [HttpGet]
        public ActionResult GetGwlInfo()
        {
            var Data1 = ABE.objAbhy_WaterUtilization_Approval.Distinct().GroupBy(x => new { x.state, x.dist, x.block, x.UserId }).ToList();
            var Details = Json(Data1, JsonRequestBehavior.AllowGet);
            Details.MaxJsonLength = int.MaxValue;
            return Details;

        }

        [HttpGet]
        public ActionResult UpdateUsersData()
        {
            var Data1 = ABE.objUsers.ToList();
            var Details = Json(Data1, JsonRequestBehavior.AllowGet);
            Details.MaxJsonLength = int.MaxValue;
            return Details;

        }

        [HttpGet]
        public ActionResult TenderETenderDetails()
        {
            var ETenderDetails = ABE.objE_Tender.ToList();
            var Details = Json(ETenderDetails, JsonRequestBehavior.AllowGet);
            Details.MaxJsonLength = int.MaxValue;
            return Details;

        }
        [HttpGet]
        public ActionResult TenderAwardDetails()
        {
            var TenderAwardedDetails = ABE.objTenderAwards.ToList();
            var Details = Json(TenderAwardedDetails, JsonRequestBehavior.AllowGet);
            Details.MaxJsonLength = int.MaxValue;
            return Details;

        }

        [HttpGet]
        public ActionResult AppealRegistrationData()
        {
            var Appel_Details = ABE.objAppeal_Registration.ToList();
            var Details = Json(Appel_Details, JsonRequestBehavior.AllowGet);
            Details.MaxJsonLength = int.MaxValue;
            return Details;

        }

        [HttpGet]
        public ActionResult ConferenceDetails()
        {
            var National_Conference = ABE.objConference.Where(x => x.Conference_type == "National Conference").ToList();

            var Details = Json(National_Conference, JsonRequestBehavior.AllowGet);
            Details.MaxJsonLength = int.MaxValue;
            return Details;

        }
        [HttpGet]
        public ActionResult GrievanceDetails()
        {
            var GrivanceData = ABE.objNew_Grievance.ToList();
            var Details = Json(GrivanceData, JsonRequestBehavior.AllowGet);
            Details.MaxJsonLength = int.MaxValue;
            return Details;

        }
        [HttpGet]
        public ActionResult TendersData()
        {
            var TenderDeatails = ABE.objTenderDetails.ToList();
            var Details = Json(TenderDeatails, JsonRequestBehavior.AllowGet);
            Details.MaxJsonLength = int.MaxValue;
            return Details;

        }

        [HttpGet]
        public ActionResult AdminPannel1(int? userid, int? rollid)
        {

            if (!this.IsPostBack)
            {
                var Data1 = ABE.objUsers.Where(x => x.UserId == userid).SingleOrDefault();
                string roll = Data1.RollId + "," + rollid;
                string sq = roll.Replace(",,", ",");
                Data1.RollId = sq;
                //Data1.RollId = Convert.ToInt32(rollid);
                //ABE.Entry(Data1).State = EntityState.Modified;

                ABE.SaveChanges();
                //ABE.objUsers.Attach(Data1);
                //ABE.Entry(Data1).Property(x => x.RollId).IsModified = true;
                //ABE.Configuration.ValidateOnSaveEnabled = false;
                //ABE.SaveChanges();
                var Data = ABE.objUsers.ToList();
                JavaScriptSerializer js1 = new JavaScriptSerializer();
                ViewBag.Data = js1.Serialize(Data);
                return Json("ok");
            }
            return View();
        }
        [HttpGet]
        public ActionResult AdminPannelRemove(int? userid, int? rollid)
        {

            if (!this.IsPostBack)
            {
                var Data1 = ABE.objUsers.Where(x => x.UserId == userid).SingleOrDefault();
                // string rollid1 = "," + rollid.ToString();
                //string roll = Data1.RollId.Remove("rollid1",1);
                string roll = Data1.RollId;
                string rollidd = rollid.ToString();
                string sq = roll.Replace(",,", ",");

                string[] Data = sq.Split(',');
                string id = "";
                string id1 = "";
                string id2 = "";
                //for (int i = 0; i <= Data.Length; i++)
                //{
                //if (Data[0] != rollidd && Data[0] != "")
                //{
                //    id = Data[0];
                //}

                //if (Data[1] != rollidd && Data[1] != "")
                //{
                //    id1 = Data[1];
                //}
                ////if (i == 2)
                ////{
                //    if (Data[2] != rollidd && Data[2] != "")
                //    {
                //        id2 = Data[2];
                //    }
                //    }
                //}
                for (int k = 0; k < Data.Length; k++)
                {
                    if (k == 0 && Data[k] != rollidd && Data[k] != "")
                    {
                        id = Data[k];
                    }
                    if (k == 1 && Data[k] != rollidd && Data[k] != "")
                    {
                        id1 = Data[k];
                    }
                    if (k == 2 && Data[k] != rollidd && Data[k] != "")
                    {
                        id2 = Data[k];
                    }
                }

                Data1.RollId = "";
                string RollIdsSelected = "";
                if (id != "" && id != null)
                {
                    if (id1 != "" && id1 != null)
                    {
                        if (id2 != "" && id2 != null)
                        {
                            RollIdsSelected = id + ',' + id1 + ',' + id2;
                        }
                        else
                        {
                            RollIdsSelected = id + ',' + id1;
                        }
                    }
                    else
                    {
                        if (id2 != "" && id2 != null)
                        {
                            RollIdsSelected = id + ',' + id2;
                        }
                        else
                        {
                            RollIdsSelected = id;
                        }
                    }

                }
                else
                {
                    if (id1 != "" && id1 != null)
                    {
                        if (id2 != "" && id2 != null)
                        {
                            RollIdsSelected = id1 + ',' + id2;
                        }
                        else
                        {
                            RollIdsSelected = id1;
                        }
                    }
                    else
                    {
                        if (id2 != "" && id2 != null)
                        {
                            RollIdsSelected = id2;
                        }
                    }
                }



                // string RollId = id + ',' + id1 + ',' + id2;
                Data1.RollId = RollIdsSelected;
                ABE.SaveChanges();

                return Json("ok");
            }
            return View();
        }
        [HttpPost]
        public ActionResult UpdateUsers(string Data)
        {
            if (Session["UserId"] != null)
            {
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<Users>(Data);
                var UserIdd = Convert.ToInt32(Session["UserId"]);
                var Data1 = ABE.objUsers.Where(x => x.UserId == UserIdd).SingleOrDefault();
                if (Data1 != null)
                {
                    if (result.StateName != null && result.StateName != "")
                    {
                        var idd = Convert.ToInt32(result.StateName);
                        var StateName = ABE.objabhy_states.Where(x => x.sid == idd).ToList();
                        Data1.StateName = StateName[0].statename.Trim();
                    }
                    else if (result.DistrictName != null && result.DistrictName != "")
                    {
                        var idd = Convert.ToInt32(result.DistrictName);
                        var DistName = ABE.objabhy_districts.Where(x => x.did == idd).ToList();
                        Data1.DistrictName = DistName[0].district_name.Trim();
                    }
                    else if (result.BlockName != null && result.BlockName != "")
                    {
                        var idd = Convert.ToInt32(result.BlockName);
                        var BlockName = ABE.objabhy_blocks.Where(x => x.did == idd).ToList();
                        Data1.BlockName = BlockName[0].block_name.Trim();
                    }
                    Data1.UserName = result.UserName.Trim();
                    Data1.Email = result.Email.Trim();
                    Data1.DepartmentName = result.DepartmentName.Trim();

                    ABE.Entry(Data1).State = EntityState.Modified;
                    ABE.SaveChanges();
                }
                return Json("Successfully Updated", JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("Please Login", JsonRequestBehavior.AllowGet);
            }

        }


        [HttpPost]
        public ActionResult UpdateALLUsers(string Data)
        {
            if (Session["UserId"] != null)
            {
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<Users>(Data);
                var UserIdd = result.UserId;
                var Data1 = ABE.objUsers.Where(x => x.UserId == UserIdd).SingleOrDefault();
                if (Data1 != null)
                {
                    if (result.StateName != null && result.StateName != "")
                    {
                        var idd = Convert.ToInt32(result.StateName);
                        var StateName = ABE.objabhy_states.Where(x => x.sid == idd).ToList();
                        Data1.StateName = StateName[0].statename.Trim();
                    }
                    else if (result.DistrictName != null && result.DistrictName != "")
                    {
                        var idd = Convert.ToInt32(result.DistrictName);
                        var DistName = ABE.objabhy_districts.Where(x => x.did == idd).ToList();
                        Data1.DistrictName = DistName[0].district_name.Trim();
                    }
                    else if (result.BlockName != null && result.BlockName != "")
                    {
                        var idd = Convert.ToInt32(result.BlockName);
                        var BlockName = ABE.objabhy_blocks.Where(x => x.did == idd).ToList();
                        Data1.BlockName = BlockName[0].block_name.Trim();
                    }
                    Data1.UserName = result.UserName.Trim();
                    Data1.Email = result.Email.Trim();
                    Data1.DepartmentName = result.DepartmentName.Trim();

                    ABE.Entry(Data1).State = EntityState.Modified;
                    ABE.SaveChanges();
                }
                return Json("Successfully Updated", JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("Please Login", JsonRequestBehavior.AllowGet);
            }

        }


        [HttpPost]
        public ActionResult DeleteUsers(string Data)
        {
            if (Session["UserId"] != null)
            {
                JavaScriptSerializer JSS = new JavaScriptSerializer();
                var Results = JSS.Deserialize<Users>(Data);
                var userid = Convert.ToInt32(Results.UserId);
                var Data1 = ABE.objUsers.Where(x => x.UserId == userid).SingleOrDefault();
                if (Data1 != null)
                {
                    ABE.Entry(Data1).State = EntityState.Deleted;
                    ABE.SaveChanges();
                    return Json("Deleted Successfully", JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("No Data", JsonRequestBehavior.AllowGet);
                }

            }
            else
            {
                return Json("Please Login", JsonRequestBehavior.AllowGet);
            }

        }

        [HttpPost]
        public ActionResult DeleteEtenderDetails(string Data)
        {
            if (Session["UserId"] != null)
            {
                JavaScriptSerializer js = new JavaScriptSerializer();
                var Results = js.Deserialize<E_Tender>(Data);
                var EID = Convert.ToInt32(Results.aetid);
                var Data1 = ABE.objE_Tender.Where(x => x.aetid == EID).SingleOrDefault();
                if (Data1 != null)
                {

                    ABE.Entry(Data1).State = EntityState.Deleted;
                    ABE.SaveChanges();
                    return Json("Rejected Successfully", JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("No Data", JsonRequestBehavior.AllowGet);
                }

            }
            else
            {
                return Json("Please Login", JsonRequestBehavior.AllowGet);
            }
        }
        [HttpPost]
        public ActionResult ApproveEtenderDetails(string Data)
        {
            if (Session["UserId"] != null)
            {
                JavaScriptSerializer js = new JavaScriptSerializer();
                var Results = js.Deserialize<E_Tender>(Data);
                var EID = Convert.ToInt32(Results.aetid);
                var Data1 = ABE.objE_Tender.Where(x => x.aetid == EID).SingleOrDefault();
                if (Data1 != null)
                {
                    Data1.accept = "True";
                    Data1.Approvedby = Convert.ToInt32(Session["UserId"]); ;
                    ABE.Entry(Data1).State = EntityState.Modified;
                    ABE.SaveChanges();
                    return Json("Approved Successfully", JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("No Data", JsonRequestBehavior.AllowGet);
                }

            }
            else
            {
                return Json("Please Login", JsonRequestBehavior.AllowGet);
            }
        }




        [HttpPost]
        public ActionResult ApprovetenderDetails(string Data)
        {
            if (Session["UserId"] != null)
            {
                JavaScriptSerializer Js = new JavaScriptSerializer();
                var Result = Js.Deserialize<TenderDetails>(Data);
                var UpdateTAid = Convert.ToInt32(Result.tid);
                var Data1 = ABE.objTenderDetails.Where(x => x.tid == UpdateTAid).SingleOrDefault();
                if (Data1 != null)
                {
                    Data1.Approvedby = Convert.ToInt32(Session["UserId"]);
                    Data1.accept = "True";
                    ABE.Entry(Data1).State = EntityState.Modified;
                    ABE.SaveChanges();
                    return Json("Approved Successfully", JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("No Data", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Please Login", JsonRequestBehavior.AllowGet);
            }
        }
        [HttpPost]
        public ActionResult DeletetenderDetails(string Data)
        {

            if (Session["UserId"] != null)
            {
                JavaScriptSerializer Js = new JavaScriptSerializer();
                var Result = Js.Deserialize<TenderDetails>(Data);
                var UpdateTAid = Convert.ToInt32(Result.tid);
                var Data1 = ABE.objTenderDetails.Where(x => x.tid == UpdateTAid).SingleOrDefault();
                if (Data1 != null)
                {
                    ABE.Entry(Data1).State = EntityState.Deleted;
                    ABE.SaveChanges();
                    return Json("Rejected Successfully", JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("No Data", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Please Login", JsonRequestBehavior.AllowGet);
            }
        }



        [HttpPost]
        public ActionResult ApprovetenderAwardDetails(string Data)
        {
            if (Session["UserId"] != null)
            {
                JavaScriptSerializer Js1 = new JavaScriptSerializer();
                var Result = Js1.Deserialize<TenderAwards>(Data);
                var UpdateTWid = Convert.ToInt32(Result.taid);
                var Data1 = ABE.objTenderAwards.Where(x => x.taid == UpdateTWid).SingleOrDefault();
                if (Data1 != null)
                {
                    Data1.Approvedby = Convert.ToInt32(Session["UserId"]);
                    Data1.accept = "True";
                    ABE.Entry(Data1).State = EntityState.Modified;
                    ABE.SaveChanges();
                    return Json("Approved Successfully", JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("No Data", JsonRequestBehavior.AllowGet);
                }


            }
            else
            {
                return Json("Please Login", JsonRequestBehavior.AllowGet);
            }



        }



        [HttpPost]
        public ActionResult DeletetenderAwardDetails(string Data)
        {
            if (Session["UserId"] != null)
            {
                JavaScriptSerializer Js1 = new JavaScriptSerializer();
                var Result = Js1.Deserialize<TenderAwards>(Data);
                var UpdateTWid = Convert.ToInt32(Result.taid);
                var Data1 = ABE.objTenderAwards.Where(x => x.taid == UpdateTWid).SingleOrDefault();
                if (Data1 != null)
                {
                    Data1.Approvedby = Convert.ToInt32(Session["UserId"]);
                    Data1.accept = "True";
                    ABE.Entry(Data1).State = EntityState.Deleted;
                    ABE.SaveChanges();
                    return Json("Rejected Successfully", JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("No Data", JsonRequestBehavior.AllowGet);
                }


            }
            else
            {
                return Json("Please Login", JsonRequestBehavior.AllowGet);
            }



        }


        [HttpPost]
        public ActionResult ApproveGrivanceDetails(string Data)
        {
            if (Session["UserId"] != null)
            {
                JavaScriptSerializer Js1 = new JavaScriptSerializer();
                var Result = Js1.Deserialize<New_Grievance>(Data);
                var UpdateGid = Result.agid;
                var Data1 = ABE.objNew_Grievance.Where(x => x.agid == UpdateGid).SingleOrDefault();
                if (Data1 != null)
                {
                    Data1.ApprovedBy = Convert.ToInt32(Session["UserId"]);
                    Data1.accept = "True";
                    ABE.Entry(Data1).State = EntityState.Modified;
                    ABE.SaveChanges();
                    return Json("Approved Successfuly", JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("No Data", JsonRequestBehavior.AllowGet);
                }

            }
            else
            {
                return Json("Please Login", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult DeleteGrivanceDetails(string Data)
        {
            if (Session["UserId"] != null)
            {
                JavaScriptSerializer Js1 = new JavaScriptSerializer();
                var Result = Js1.Deserialize<New_Grievance>(Data);
                var UpdateGid = Result.agid;
                var Data1 = ABE.objNew_Grievance.Where(x => x.agid == UpdateGid).SingleOrDefault();
                if (Data1 != null)
                {
                    Data1.ApprovedBy = Convert.ToInt32(Session["UserId"]);
                    Data1.accept = "True";
                    ABE.Entry(Data1).State = EntityState.Deleted;
                    ABE.SaveChanges();
                    return Json("Rejected Successfuly", JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("No Data", JsonRequestBehavior.AllowGet);
                }

            }
            else
            {
                return Json("Please Login", JsonRequestBehavior.AllowGet);
            }
        }


        [HttpPost]
        public ActionResult ApproveAppeal_Details(string Data)
        {

            if (Session["UserId"] != null)
            {
                JavaScriptSerializer Js1 = new JavaScriptSerializer();
                var Result = Js1.Deserialize<Appeal_Registration>(Data);
                var UpdateGid = Result.aarid;
                var Data1 = ABE.objAppeal_Registration.Where(x => x.aarid == UpdateGid).SingleOrDefault();
                if (Data1 != null)
                {
                    Data1.ApprovedBy = Convert.ToInt32(Session["UserId"]);
                    Data1.accept = "True";
                    ABE.Entry(Data1).State = EntityState.Modified;
                    ABE.SaveChanges();
                    return Json("Approved Successfuly", JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("No Data", JsonRequestBehavior.AllowGet);
                }

            }
            else
            {
                return Json("Please Login", JsonRequestBehavior.AllowGet);
            }
        }


        [HttpPost]
        public ActionResult DeleteAppeal_Details(string Data)
        {

            if (Session["UserId"] != null)
            {
                JavaScriptSerializer Js1 = new JavaScriptSerializer();
                var Result = Js1.Deserialize<Appeal_Registration>(Data);
                var UpdateGid = Result.aarid;
                var Data1 = ABE.objAppeal_Registration.Where(x => x.aarid == UpdateGid).SingleOrDefault();
                if (Data1 != null)
                {
                    Data1.ApprovedBy = Convert.ToInt32(Session["UserId"]);
                    Data1.accept = "True";
                    ABE.Entry(Data1).State = EntityState.Deleted;
                    ABE.SaveChanges();
                    return Json("Rejected Successfuly", JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("No Data", JsonRequestBehavior.AllowGet);
                }

            }
            else
            {
                return Json("Please Login", JsonRequestBehavior.AllowGet);
            }
        }
        [HttpGet]
        public JsonResult AdminProfile()
        {
            var idd = Convert.ToInt32(Session["UserId"]);
            var Data = ABE.objUsers.Where(x => x.UserId == idd).ToList();
            return Json(Data, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult ApproveNationalConference(string Data)
        {


            if (Session["UserId"] != null)
            {
                JavaScriptSerializer Js1 = new JavaScriptSerializer();
                var Result = Js1.Deserialize<Conference>(Data);
                var UpdateGid = Result.acid;
                var Data1 = ABE.objConference.Where(x => x.acid == UpdateGid).SingleOrDefault();
                if (Data1 != null)
                {
                    Data1.Approvedby = Convert.ToInt32(Session["UserId"]);
                    Data1.accept = "True";
                    ABE.Entry(Data1).State = EntityState.Modified;
                    ABE.SaveChanges();
                    return Json("Approved Successfuly", JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("No Data", JsonRequestBehavior.AllowGet);
                }

            }
            else
            {
                return Json("Please Login", JsonRequestBehavior.AllowGet);
            }
        }


        [HttpPost]
        public ActionResult DeleteNationalConference(string Data)
        {
            if (Session["UserId"] != null)
            {
                JavaScriptSerializer Js1 = new JavaScriptSerializer();
                var Result = Js1.Deserialize<Conference>(Data);
                var UpdateGid = Result.acid;
                var Data1 = ABE.objConference.Where(x => x.acid == UpdateGid).SingleOrDefault();
                if (Data1 != null)
                {
                    Data1.Approvedby = Convert.ToInt32(Session["UserId"]);
                    Data1.accept = "True";
                    ABE.Entry(Data1).State = EntityState.Deleted;
                    ABE.SaveChanges();
                    return Json("Rejected Successfuly", JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("No Data", JsonRequestBehavior.AllowGet);
                }

            }
            else
            {
                return Json("Please Login", JsonRequestBehavior.AllowGet);
            }
        }


        [HttpPost]
        public ActionResult getfillGwbData(string Userid)
        {
            Session["Uid"] = Userid;
            string statename = string.Empty;
            string districtname = string.Empty;
            string blockname = string.Empty;
            string Gpname = string.Empty;
            string vname = string.Empty;
            string admin = string.Empty;
            string aquifer = string.Empty;
            double totgeographicalarea = 0;
            double tothouseholds = 0;
            double totpopulationarea = 0;
            double TubeWellsBoreholeFunctioningAllroundtheyear = 0;
            double SpringFunctioningAllroundtheyear = 0;
            double RiverCanalFunctioningAllroundtheyear = 0;
            double TankPondLakeFunctioningAllroundtheyear = 0;
            double PowerSupplyForDomesticUseSummerAprilSeptperdayinHour = 0;
            double PowerSupplyForDomesticUseWinterOctMarchperdayinHours = 0;
            double PowerSupplyfordomestichavetocalculatetheaveragefromtw = 0;
            double PowerSupplyForAgricultureUseSummerAprilSeptperdayinH = 0;
            double PowerSupplyForAgricultureUseWinterOctMarchperdayinHo = 0;
            double PowerSupplyforagriculturehavetocalculatetheaveragefrom = 0;
            //double PowerSupplyForCommercialUseSummerAprilSeptperdayinHo = 0;
            double PowerSupplyForCommercialUse_WinterOctMarchperdayinHou = 0;
            double PowerSupplyforcommercialhavetocalculatetheaveragefrom = 0;
            double PowerSupplyForAllUsersSummerAprilSeptperdayinHours = 0;
            double PowerSupplyForAllUsersWinterOctMarchperdayinHours = 0;
            double PowerSupplyforallusershavetocalculatetheaveragefromt = 0;
            double AreaunderNonAgriculturalUsesinHectares = 0;
            double NetAreaSowninHectares = 0;
            double CanalsAreainHectares = 0;
            double WellsTubeWellsAreainHectares = 0;
            double TanksLakesAreainHectares = 0;
            double WaterfallAreainHectares = 0;
            //double AgriculturalCommoditiesFirst = 0;
            double ReservoirName = 0;
            double CurrentReservoirLevel = 0;
            double LiveCapacityatFRL = 0;
            double LiveCapacityatFRL_ = 0;
            double CurrentLiveStorage = 0;
            double CurrentLiveStorage_ = 0;
            double _AvgOfSurfaceWaterRainfall = 0;
            double NoOfCheckDams = 0;
            double CheckDamsCapacity = 0;
            double GwrRainfallArea = 0;
            double GwrRainfallRainfall = 0;
            double NetAreaUnderCheckDamsandNalaBunds = 0;
            double GwrITmaximumSubmergenceArea = 0;
            double GwrITReachargeRate = 0;
            double GwrITDaysOfSubmergence = 0;
            double GwrCDmaximumSubmergenceArea = 0;
            double GwrCDAverageDepthOfWater = 0;

            double GwrCDNoOfFillings = 0;
            double GwrSTCLengthOftheCanals = 0;
            double GwrSTCSeepageFactor = 0;
            double GwrSTCFlowingDays = 0;
            double GwrSTCAvgWettedPerimeter = 0;
            double GwrSWIAreaIrrigated = 0;
            double GwrSWIDesignedDischargeAtOutlet = 0;
            double GwrSWISeepageFactor = 0;

            double GwrSWIWaterReleasedAtOutLet = 0;
            double GwrGwICommndAreaIrrigation = 0;
            double GwrGwICommandAreaReturnFlow = 0;
            double GwrGwINonCommandAreaIrrigation = 0;
            double GwrGwINonCommandAreaReturnFlow = 0;
            double DraftIrrigationDailyPumpingHours = 0;
            double DraftIrrigationTotalNoOfPumpingDays = 0;
            double DraftIrrigationAvgPumpingRate = 0;

            double DraftDrinkTotWaterRequirementForPeople = 0;
            double DraftDrinkTotWaterRequirementForCowsBufalos = 0;
            double DraftDrinkTotWaterRequirementForBullocks = 0;

            double DraftDrinkTotWaterRequirementForGoatsSheeps = 0;
            double DraftIndustryGWInTake = 0;
            double DraftIndustryTotNoofProductionDays = 0;
            double SpringsDepth = 0;
            double CanalsDepth = 0;
            double TanksDepth = 0;
            double RiverDepth = 0;
            double SpringsTotalGeographicalAreainHectares = 0;
            double CanalsRiverCanalFunctioningAllroundtheyear = 0;
            double RiverCanalsAreainHectares = 0;
            double HarvestingCanalsAreainHectares = 0;
            double HarvestingTanksLakesAreainHectares = 0;
            List<abhystates_completecensusdata_Insert1> censusdata = new List<abhystates_completecensusdata_Insert1>();
            abhystates_completecensusdata_Insert1 objcensusdata = new abhystates_completecensusdata_Insert1();
            var Gwbdata = ABE.objabhystates_completecensusdata_Insert1.Where(b => b.userid == Userid).Distinct().ToList();

            foreach (var item in Gwbdata)
            {
                totgeographicalarea = totgeographicalarea + Convert.ToDouble(item.Total_Geographical_Area_in_Hectares);
                tothouseholds = tothouseholds + Convert.ToDouble(item.Total_Households);
                totpopulationarea = totpopulationarea + Convert.ToDouble(item.Total_Population_of_Village);
                TubeWellsBoreholeFunctioningAllroundtheyear = TubeWellsBoreholeFunctioningAllroundtheyear + Convert.ToDouble(item.Tube_Wells_Borehole_Functioning_All_round_the_year);
                SpringFunctioningAllroundtheyear = SpringFunctioningAllroundtheyear + Convert.ToDouble(item.Spring_Functioning_All_round_the_year);
                RiverCanalFunctioningAllroundtheyear = RiverCanalFunctioningAllroundtheyear + Convert.ToDouble(item.River_Canal_Functioning_All_round_the_year);

                TankPondLakeFunctioningAllroundtheyear = TankPondLakeFunctioningAllroundtheyear + Convert.ToDouble(item.Tank_Pond_Lake_Functioning_All_round_the_year);
                PowerSupplyForDomesticUseSummerAprilSeptperdayinHour = PowerSupplyForDomesticUseSummerAprilSeptperdayinHour + Convert.ToDouble(item.Power_Supply_For_Domestic_Use_Summer_April_Sept_per_day_in_Hour);
                PowerSupplyForDomesticUseWinterOctMarchperdayinHours = PowerSupplyForDomesticUseWinterOctMarchperdayinHours + Convert.ToDouble(item.Power_Supply_For_Domestic_Use_Winter_Oct_March_per_day_in_Hours);
                PowerSupplyfordomestichavetocalculatetheaveragefromtw = PowerSupplyfordomestichavetocalculatetheaveragefromtw + Convert.ToDouble(item.Power_Supply_for_domestic_have_to_calculate_the_average_from_tw);
                PowerSupplyForAgricultureUseSummerAprilSeptperdayinH = PowerSupplyForAgricultureUseSummerAprilSeptperdayinH + Convert.ToDouble(item.Power_Supply_For_Agriculture_Use_Summer_April_Sept_per_day_in_H);
                PowerSupplyForAgricultureUseWinterOctMarchperdayinHo = PowerSupplyForAgricultureUseWinterOctMarchperdayinHo + Convert.ToDouble(item.Power_Supply_For_Agriculture_Use_Winter_Oct_March_per_day_in_Ho);

                PowerSupplyforagriculturehavetocalculatetheaveragefrom = PowerSupplyforagriculturehavetocalculatetheaveragefrom + Convert.ToDouble(item.Power_Supply_for_agriculture_have_to_calculate_the_average_from);
                PowerSupplyForCommercialUse_WinterOctMarchperdayinHou = PowerSupplyForCommercialUse_WinterOctMarchperdayinHou + Convert.ToDouble(item.Power_Supply_For_Commercial_Use_Winter_Oct_March_per_day_in_Hou);
                PowerSupplyforcommercialhavetocalculatetheaveragefrom = PowerSupplyforcommercialhavetocalculatetheaveragefrom + Convert.ToDouble(item.Power_Supply_for_commercial_have_to_calculate_the_average_from_);
                PowerSupplyForAllUsersSummerAprilSeptperdayinHours = PowerSupplyForAllUsersSummerAprilSeptperdayinHours + Convert.ToDouble(item.Power_Supply_For_All_Users_Summer_April_Sept_per_day_in_Hours);
                PowerSupplyForAllUsersWinterOctMarchperdayinHours = PowerSupplyForAllUsersWinterOctMarchperdayinHours + Convert.ToDouble(item.Power_Supply_For_All_Users_Winter_Oct_March_per_day_in_Hours);
                PowerSupplyforallusershavetocalculatetheaveragefromt = PowerSupplyforallusershavetocalculatetheaveragefromt + Convert.ToDouble(item.Power_Supply_for_all_users_have_to_calculate_the_average_from_t);

                AreaunderNonAgriculturalUsesinHectares = AreaunderNonAgriculturalUsesinHectares + Convert.ToDouble(item.Area_under_Non_Agricultural_Uses_in_Hectares);
                NetAreaSowninHectares = NetAreaSowninHectares + Convert.ToDouble(item.Net_Area_Sown_in_Hectares);
                CanalsAreainHectares = CanalsAreainHectares + Convert.ToDouble(item.Canals_Area_in_Hectares);
                WellsTubeWellsAreainHectares = WellsTubeWellsAreainHectares + Convert.ToDouble(item.Wells_Tube_Wells_Area_in_Hectares);
                TanksLakesAreainHectares = TanksLakesAreainHectares + Convert.ToDouble(item.Tanks_Lakes_Area_in_Hectares);
                WaterfallAreainHectares = WaterfallAreainHectares + Convert.ToDouble(item.Waterfall_Area_in_Hectares);

                SpringsDepth = SpringsDepth + Convert.ToDouble(item.Springs_Depth);
                CanalsDepth = CanalsDepth + Convert.ToDouble(item.Canals_Depth);
                TanksDepth = TanksDepth + Convert.ToDouble(item.Tanks_Depth);
                RiverDepth = RiverDepth + Convert.ToDouble(item.River_Depth);
                SpringsTotalGeographicalAreainHectares = SpringsTotalGeographicalAreainHectares + Convert.ToDouble(item.Springs_Total_Geographical_Area_in_Hectares);
                CanalsRiverCanalFunctioningAllroundtheyear = CanalsRiverCanalFunctioningAllroundtheyear + Convert.ToDouble(item.Canals_River_Canal_Functioning_All_round_the_year);
                RiverCanalsAreainHectares = RiverCanalsAreainHectares + Convert.ToDouble(item.River_Canals_Area_in_Hectares);
                HarvestingCanalsAreainHectares = HarvestingCanalsAreainHectares + Convert.ToDouble(item.Harvesting_Canals_Area_in_Hectares);
                HarvestingTanksLakesAreainHectares = HarvestingTanksLakesAreainHectares + Convert.ToDouble(item.Harvesting_Tanks_Lakes_Area_in_Hectares);

                ReservoirName = ReservoirName + Convert.ToDouble(item.Reservoir_Name);
                CurrentReservoirLevel = CurrentReservoirLevel + Convert.ToDouble(item.Current_Reservoir_Level);
                LiveCapacityatFRL = LiveCapacityatFRL + Convert.ToDouble(item.Live_Capacity_at_FRL);
                LiveCapacityatFRL_ = LiveCapacityatFRL_ + Convert.ToDouble(item.Live_Capacity_at_FRL_);

                CurrentLiveStorage = CurrentLiveStorage + Convert.ToDouble(item.Current_Live_Storage);
                CurrentLiveStorage_ = CurrentLiveStorage_ + Convert.ToDouble(item.Current_Live_Storage_);
                _AvgOfSurfaceWaterRainfall = _AvgOfSurfaceWaterRainfall + Convert.ToDouble(item.AvgOfSurfaceWaterRainfall);

                NoOfCheckDams = NoOfCheckDams + Convert.ToDouble(item.No_Of_CheckDams);
                CheckDamsCapacity = CheckDamsCapacity + Convert.ToDouble(item.CheckDams_Capacity);
                GwrRainfallArea = GwrRainfallArea + Convert.ToDouble(item.Gwr_Rainfall_Area);
                GwrRainfallRainfall = GwrRainfallRainfall + Convert.ToDouble(item.Gwr_Rainfall_Rainfall);
                NetAreaUnderCheckDamsandNalaBunds = NetAreaUnderCheckDamsandNalaBunds + Convert.ToDouble(item.NetArea_Under_CheckDams_and_NalaBunds);
                GwrITmaximumSubmergenceArea = GwrITmaximumSubmergenceArea + Convert.ToDouble(item.Gwr_IT_maximum_SubmergenceArea);
                GwrITReachargeRate = GwrITReachargeRate + Convert.ToDouble(item.Gwr_IT_Reacharge_Rate);
                GwrITDaysOfSubmergence = GwrITDaysOfSubmergence + Convert.ToDouble(item.Gwr_IT_DaysOfSubmergence);
                GwrCDmaximumSubmergenceArea = GwrCDmaximumSubmergenceArea + Convert.ToDouble(item.Gwr_CD_maximumSubmergence_Area);
                GwrCDAverageDepthOfWater = GwrCDAverageDepthOfWater + Convert.ToDouble(item.Gwr_CD_AverageDepthOf_Water);

                GwrCDNoOfFillings = GwrCDNoOfFillings + Convert.ToDouble(item.Gwr_CD_NoOfFillings);
                GwrSTCLengthOftheCanals = GwrSTCLengthOftheCanals + Convert.ToDouble(item.Gwr_STC_LengthOfthe_Canals);
                GwrSTCSeepageFactor = GwrSTCSeepageFactor + Convert.ToDouble(item.Gwr_STC_Seepage_Factor);
                GwrSTCFlowingDays = GwrSTCFlowingDays + Convert.ToDouble(item.Gwr_STC_Flowing_Days);
                GwrSTCAvgWettedPerimeter = GwrSTCAvgWettedPerimeter + Convert.ToDouble(item.Gwr_STC_Avg_Wetted_Perimeter);
                GwrSWIAreaIrrigated = GwrSWIAreaIrrigated + Convert.ToDouble(item.Gwr_SWI_AreaIrrigated);
                GwrSWIDesignedDischargeAtOutlet = GwrSWIDesignedDischargeAtOutlet + Convert.ToDouble(item.Gwr_SWI_DesignedDischarge_At_Outlet);
                GwrSWISeepageFactor = GwrSWISeepageFactor + Convert.ToDouble(item.Gwr_SWI_Seepage_Factor);

                GwrSWIWaterReleasedAtOutLet = GwrSWIWaterReleasedAtOutLet + Convert.ToDouble(item.Gwr_SWI_WaterReleased_At_OutLet);
                GwrGwICommndAreaIrrigation = GwrGwICommndAreaIrrigation + Convert.ToDouble(item.Gwr_GwI_CommndArea_Irrigation);
                GwrGwICommandAreaReturnFlow = GwrGwICommandAreaReturnFlow + Convert.ToDouble(item.Gwr_GwI_CommandArea_ReturnFlow);
                GwrGwINonCommandAreaIrrigation = GwrGwINonCommandAreaIrrigation + Convert.ToDouble(item.Gwr_GwI_NonCommand_Area_Irrigation);
                GwrGwINonCommandAreaReturnFlow = GwrGwINonCommandAreaReturnFlow + Convert.ToDouble(item.Gwr_GwI_NonCommand_Area_ReturnFlow);
                DraftIrrigationDailyPumpingHours = DraftIrrigationDailyPumpingHours + Convert.ToDouble(item.Draft_Irrigation_DailyPumping_Hours);
                DraftIrrigationTotalNoOfPumpingDays = DraftIrrigationTotalNoOfPumpingDays + Convert.ToDouble(item.Draft_Irrigation_Total_NoOf_Pumping_Days);
                DraftIrrigationAvgPumpingRate = DraftIrrigationAvgPumpingRate + Convert.ToDouble(item.Draft_Irrigation_Avg_Pumping_Rate);

                DraftDrinkTotWaterRequirementForPeople = DraftDrinkTotWaterRequirementForPeople + Convert.ToDouble(item.Draft_Drink_Tot_Water_Requirement_For_People);
                DraftDrinkTotWaterRequirementForCowsBufalos = DraftDrinkTotWaterRequirementForCowsBufalos + Convert.ToDouble(item.Draft_Drink_Tot_Water_Requirement_For_CowsBufalos);
                DraftDrinkTotWaterRequirementForBullocks = DraftDrinkTotWaterRequirementForBullocks + Convert.ToDouble(item.Draft_Drink_Tot_Water_Requirement_For_Bullocks);

                DraftDrinkTotWaterRequirementForGoatsSheeps = DraftDrinkTotWaterRequirementForGoatsSheeps + Convert.ToDouble(item.Draft_Drink_Tot_Water_Requirement_For_GoatsSheeps);
                DraftIndustryGWInTake = DraftIndustryGWInTake + Convert.ToDouble(item.Draft_Industry_GW_In_Take);
                DraftIndustryTotNoofProductionDays = DraftIndustryTotNoofProductionDays + Convert.ToDouble(item.Draft_Industry_Tot_Noof_Production_Days);
            }
            objcensusdata.Total_Geographical_Area_in_Hectares = Convert.ToString(Math.Round(totgeographicalarea, 2));
            objcensusdata.Total_Households = Convert.ToString(Math.Round(tothouseholds, 2));
            objcensusdata.Total_Population_of_Village = Convert.ToString(Math.Round(totpopulationarea, 2));
            objcensusdata.Tube_Wells_Borehole_Functioning_All_round_the_year = Convert.ToString(Math.Round(TubeWellsBoreholeFunctioningAllroundtheyear, 2));
            objcensusdata.Spring_Functioning_All_round_the_year = Convert.ToString(Math.Round(SpringFunctioningAllroundtheyear, 2));
            objcensusdata.River_Canal_Functioning_All_round_the_year = Convert.ToString(Math.Round(RiverCanalFunctioningAllroundtheyear, 2));
            objcensusdata.Tank_Pond_Lake_Functioning_All_round_the_year = Convert.ToString(Math.Round(TankPondLakeFunctioningAllroundtheyear, 2));
            objcensusdata.Power_Supply_For_Domestic_Use_Summer_April_Sept_per_day_in_Hour = Convert.ToString(Math.Round(PowerSupplyForDomesticUseSummerAprilSeptperdayinHour, 2));
            objcensusdata.Power_Supply_For_Domestic_Use_Winter_Oct_March_per_day_in_Hours = Convert.ToString(Math.Round(PowerSupplyForDomesticUseWinterOctMarchperdayinHours, 2));
            objcensusdata.Power_Supply_for_domestic_have_to_calculate_the_average_from_tw = Convert.ToString(Math.Round(PowerSupplyfordomestichavetocalculatetheaveragefromtw, 2));
            objcensusdata.Power_Supply_For_Agriculture_Use_Summer_April_Sept_per_day_in_H = Convert.ToString(Math.Round(PowerSupplyForAgricultureUseSummerAprilSeptperdayinH, 2));
            objcensusdata.Power_Supply_For_Agriculture_Use_Winter_Oct_March_per_day_in_Ho = Convert.ToString(Math.Round(PowerSupplyForAgricultureUseWinterOctMarchperdayinHo, 2));

            objcensusdata.Power_Supply_for_agriculture_have_to_calculate_the_average_from = Convert.ToString(Math.Round(PowerSupplyforagriculturehavetocalculatetheaveragefrom, 2));
            objcensusdata.Power_Supply_For_Commercial_Use_Winter_Oct_March_per_day_in_Hou = Convert.ToString(Math.Round(PowerSupplyForCommercialUse_WinterOctMarchperdayinHou, 2));
            objcensusdata.Power_Supply_for_commercial_have_to_calculate_the_average_from_ = Convert.ToString(Math.Round(PowerSupplyforcommercialhavetocalculatetheaveragefrom, 2));
            objcensusdata.Power_Supply_For_All_Users_Summer_April_Sept_per_day_in_Hours = Convert.ToString(Math.Round(PowerSupplyForAllUsersSummerAprilSeptperdayinHours, 2));
            objcensusdata.Power_Supply_For_All_Users_Winter_Oct_March_per_day_in_Hours = Convert.ToString(Math.Round(PowerSupplyForAllUsersWinterOctMarchperdayinHours, 2));
            objcensusdata.Power_Supply_for_all_users_have_to_calculate_the_average_from_t = Convert.ToString(Math.Round(PowerSupplyforallusershavetocalculatetheaveragefromt, 2));

            objcensusdata.Area_under_Non_Agricultural_Uses_in_Hectares = Convert.ToString(Math.Round(AreaunderNonAgriculturalUsesinHectares, 2));
            objcensusdata.Net_Area_Sown_in_Hectares = Convert.ToString(Math.Round(NetAreaSowninHectares, 2));
            objcensusdata.Canals_Area_in_Hectares = Convert.ToString(Math.Round(CanalsAreainHectares, 2));
            objcensusdata.Wells_Tube_Wells_Area_in_Hectares = Convert.ToString(Math.Round(WellsTubeWellsAreainHectares, 2));
            objcensusdata.Tanks_Lakes_Area_in_Hectares = Convert.ToString(Math.Round(TanksLakesAreainHectares, 2));
            objcensusdata.Waterfall_Area_in_Hectares = Convert.ToString(Math.Round(WaterfallAreainHectares, 2));
            objcensusdata.Springs_Depth = Convert.ToString(Math.Round(SpringsDepth, 2));
            objcensusdata.Canals_Depth = Convert.ToString(Math.Round(CanalsDepth, 2));
            objcensusdata.Tanks_Depth = Convert.ToString(Math.Round(TanksDepth, 2));
            objcensusdata.River_Depth = Convert.ToString(Math.Round(RiverDepth, 2));
            objcensusdata.Springs_Total_Geographical_Area_in_Hectares = Convert.ToString(Math.Round(SpringsTotalGeographicalAreainHectares, 2));
            objcensusdata.Canals_River_Canal_Functioning_All_round_the_year = Convert.ToString(Math.Round(CanalsRiverCanalFunctioningAllroundtheyear, 2));
            objcensusdata.River_Canals_Area_in_Hectares = Convert.ToString(Math.Round(RiverCanalsAreainHectares, 2));
            objcensusdata.Harvesting_Canals_Area_in_Hectares = Convert.ToString(Math.Round(HarvestingCanalsAreainHectares, 2));
            objcensusdata.Harvesting_Tanks_Lakes_Area_in_Hectares = Convert.ToString(Math.Round(HarvestingTanksLakesAreainHectares, 2));

            objcensusdata.Reservoir_Name = Convert.ToString(Math.Round(ReservoirName, 2));
            objcensusdata.Current_Reservoir_Level = Convert.ToString(Math.Round(CurrentReservoirLevel, 2));
            objcensusdata.Live_Capacity_at_FRL = Convert.ToString(Math.Round(LiveCapacityatFRL, 2));
            objcensusdata.Live_Capacity_at_FRL_ = Convert.ToString(Math.Round(LiveCapacityatFRL_, 2));
            objcensusdata.Current_Live_Storage = Convert.ToString(Math.Round(CurrentLiveStorage, 2));
            objcensusdata.Current_Live_Storage_ = Convert.ToString(Math.Round(CurrentLiveStorage_, 2));
            objcensusdata.AvgOfSurfaceWaterRainfall = Convert.ToString(Math.Round(_AvgOfSurfaceWaterRainfall, 2));

            objcensusdata.No_Of_CheckDams = Convert.ToString(Math.Round(NoOfCheckDams, 2));
            objcensusdata.CheckDams_Capacity = Convert.ToString(Math.Round(CheckDamsCapacity, 2));
            objcensusdata.Gwr_Rainfall_Area = Convert.ToString(Math.Round(GwrRainfallArea, 2));
            objcensusdata.Gwr_Rainfall_Rainfall = Convert.ToString(Math.Round(GwrRainfallRainfall, 2));
            objcensusdata.NetArea_Under_CheckDams_and_NalaBunds = Convert.ToString(Math.Round(NetAreaUnderCheckDamsandNalaBunds, 2));
            objcensusdata.Gwr_IT_maximum_SubmergenceArea = Convert.ToString(Math.Round(GwrITmaximumSubmergenceArea, 2));
            objcensusdata.Gwr_IT_Reacharge_Rate = Convert.ToString(Math.Round(GwrITReachargeRate, 2));

            objcensusdata.Gwr_IT_DaysOfSubmergence = Convert.ToString(Math.Round(GwrITDaysOfSubmergence, 2));
            objcensusdata.Gwr_CD_maximumSubmergence_Area = Convert.ToString(Math.Round(GwrCDmaximumSubmergenceArea, 2));
            objcensusdata.Gwr_CD_AverageDepthOf_Water = Convert.ToString(Math.Round(GwrCDAverageDepthOfWater, 2));
            objcensusdata.Gwr_CD_NoOfFillings = Convert.ToString(Math.Round(GwrCDNoOfFillings, 2));
            objcensusdata.Gwr_STC_LengthOfthe_Canals = Convert.ToString(Math.Round(GwrSTCLengthOftheCanals, 2));
            objcensusdata.Gwr_STC_Seepage_Factor = Convert.ToString(Math.Round(GwrSTCSeepageFactor, 2));
            objcensusdata.Gwr_STC_Flowing_Days = Convert.ToString(Math.Round(GwrSTCFlowingDays, 2));

            objcensusdata.Gwr_STC_Avg_Wetted_Perimeter = Convert.ToString(Math.Round(GwrSTCAvgWettedPerimeter, 2));
            objcensusdata.Gwr_SWI_AreaIrrigated = Convert.ToString(Math.Round(GwrSWIAreaIrrigated, 2));
            objcensusdata.Gwr_SWI_DesignedDischarge_At_Outlet = Convert.ToString(Math.Round(GwrSWIDesignedDischargeAtOutlet, 2));
            objcensusdata.Gwr_SWI_Seepage_Factor = Convert.ToString(Math.Round(GwrSWISeepageFactor, 2));
            objcensusdata.Gwr_SWI_WaterReleased_At_OutLet = Convert.ToString(Math.Round(GwrSWIWaterReleasedAtOutLet, 2));
            objcensusdata.Gwr_GwI_CommndArea_Irrigation = Convert.ToString(Math.Round(GwrGwICommndAreaIrrigation, 2));
            objcensusdata.Gwr_GwI_CommandArea_ReturnFlow = Convert.ToString(Math.Round(GwrGwICommandAreaReturnFlow, 2));

            objcensusdata.Gwr_GwI_NonCommand_Area_Irrigation = Convert.ToString(Math.Round(GwrGwINonCommandAreaIrrigation, 2));
            objcensusdata.Gwr_GwI_NonCommand_Area_ReturnFlow = Convert.ToString(Math.Round(GwrGwINonCommandAreaReturnFlow, 2));
            objcensusdata.Draft_Irrigation_DailyPumping_Hours = Convert.ToString(Math.Round(DraftIrrigationDailyPumpingHours, 2));
            objcensusdata.Draft_Irrigation_Total_NoOf_Pumping_Days = Convert.ToString(Math.Round(DraftIrrigationTotalNoOfPumpingDays, 2));
            objcensusdata.Draft_Irrigation_Avg_Pumping_Rate = Convert.ToString(Math.Round(DraftIrrigationAvgPumpingRate, 2));
            objcensusdata.Draft_Drink_Tot_Water_Requirement_For_People = Convert.ToString(Math.Round(DraftDrinkTotWaterRequirementForPeople, 2));
            objcensusdata.Draft_Drink_Tot_Water_Requirement_For_CowsBufalos = Convert.ToString(Math.Round(DraftDrinkTotWaterRequirementForCowsBufalos, 2));


            objcensusdata.Draft_Drink_Tot_Water_Requirement_For_Bullocks = Convert.ToString(Math.Round(DraftDrinkTotWaterRequirementForBullocks, 2));
            objcensusdata.Draft_Drink_Tot_Water_Requirement_For_GoatsSheeps = Convert.ToString(Math.Round(DraftDrinkTotWaterRequirementForGoatsSheeps, 2));
            objcensusdata.Draft_Industry_GW_In_Take = Convert.ToString(Math.Round(DraftIndustryGWInTake, 2));
            objcensusdata.Draft_Industry_Tot_Noof_Production_Days = Convert.ToString(Math.Round(DraftIndustryTotNoofProductionDays, 2));

            censusdata.Add(objcensusdata);
            ViewBag.Data = censusdata;
            var adpanledata = ViewBag.Data;
            var resultdata = Json(adpanledata, JsonRequestBehavior.AllowGet);
            resultdata.MaxJsonLength = int.MaxValue;
            return resultdata;
            //return View();
        }
        [HttpPost]
        public ActionResult getapprovedorRejected(string AprorRej)
        {
            if (Session["Uid"].ToString() != null && Session["Uid"].ToString() != "0")
            {
                if (!this.IsPostBack)
                {
                    var Userid = Session["Uid"].ToString();
                    var Data1 = ABE.objabhystates_completecensusdata_Insert1.Where(x => x.userid == Userid).Distinct().ToList();
                    if (Data1.Count != 0)
                    {
                        if (AprorRej == "Reject")
                        {
                            Data1[0].approvedorreject = "1";
                            ABE.SaveChanges();
                            return Json("Rejected", JsonRequestBehavior.AllowGet);
                        }
                        if (AprorRej == "Approved")
                        {
                            Data1[0].approvedorreject = "2";
                            ABE.SaveChanges();
                            return Json("Approved", JsonRequestBehavior.AllowGet);
                        }

                    }

                }
            }
            return View();

        }

        public ActionResult UnderMaintenance()
        {
            return View();
        }
    }
}
