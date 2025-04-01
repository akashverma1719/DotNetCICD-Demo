using AbhyProject.Classes;
using AbhyProject.Models;
using AbhyProject.Utility;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Net.Security;
using System.Security.Cryptography.X509Certificates;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;

namespace AbhyProject.Controllers
{
    public class TendersController : Controller
    {
        // GET: Tenders

        AbhyEntity ABE = new AbhyEntity();
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Index(HttpPostedFileBase files, string pdftitle)
        {
            var str_path = "";
            if (files != null)
            {
                if (files.FileName != null)
                {
                    String FileExt = Path.GetExtension(files.FileName).ToUpper();


                    string path = @"D:\Ataljalimages\";
                    path = path + files.FileName;
                    str_path = path + ',' + pdftitle;
                    files.SaveAs(path);

                    var obj = new abhy_tender_images_new();
                    obj.filename = files.FileName;
                    obj.file_inserted_data = DateTime.Today.ToString();
                    obj.titlename = pdftitle;
                    obj.userid = Convert.ToInt32(Session["UserId"]);
                    obj.file_part = path.Replace("D:\\Ataljalimages\\", "~/Ataljalimages/");
                    // obj.file_part = path.Replace("D:\\Tender_Images\\", "http://54.221.131.231:8014/tender_images/");
                    //obj.file_part = path;
                    ABE.obj_abhy_tender_images_new.Add(obj);
                    ABE.SaveChanges();
                }
            }

            return Json("Upload Successfully", JsonRequestBehavior.AllowGet);
        }

        public ActionResult Tender_Details_Form()
        {
            return View();
        }
        [HttpGet]
        public ActionResult TenderImagesInfo()
        {
            var Data = ABE.obj_abhy_tender_images_new.ToList();
            return Json(Data, JsonRequestBehavior.AllowGet);
        }


        [HttpPost]
        public ActionResult Tender_Details_Form(TenderDetails tender, string bid_ref_no, string office_inviting_tender, string office_emailid, string publish_date, string tender_ref_no, string url, string sale_start_datetime, string sale_end_datetime, string last_submission_datetime, string opening_start_datetime, string description, string development_area)
        {
            tender.development_area = development_area;
            tender.bid_ref_no = bid_ref_no;
            tender.description = description;
            tender.last_submission_datetime = last_submission_datetime;
            tender.office_emailid = office_emailid;
            tender.office_inviting_tender = office_inviting_tender;
            tender.opening_start_datetime = opening_start_datetime;
            tender.publish_date = publish_date;
            tender.sale_end_datetime = sale_end_datetime;
            tender.sale_start_datetime = sale_start_datetime;
            tender.tender_ref_no = tender_ref_no;
            tender.url = url;
            tender.accept = "False";

            ABE.objTenderDetails.Add(tender);
            ABE.SaveChanges();

            string contemail = tender.office_emailid;
            string body = "Dear Sir/Madam," + "\r\n" + "\n" + "Bids Reference No:" + tender.bid_ref_no + "," + "\r\nDescription::" + tender.description + "," + "," + "\r\n Office Inviting Tender::" + tender.office_inviting_tender + "," + "\r\nOffice EmailId::" + tender.office_emailid + "," + "\r\nPublish Date::" + tender.publish_date + "," + "," + "\r\n Tender Reference No::" + tender.tender_ref_no + "," + "\r\nURL::" + tender.url + "," + "\r\nSale Start Date::" + tender.sale_start_datetime + "," + "," + "\r\n Sale End Date::" + tender.sale_end_datetime + "," + "\r\nLast Submission Date::" + tender.last_submission_datetime + "," + "\r\nOpening Start Date::" + tender.opening_start_datetime + "," + "," + "\r\n\r\n\r\n Thank You";
            string results = WebConstents.SendEmailSMTP(contemail, "", "Enquire", body.ToString(), "");
            return RedirectToAction("Tender_Announcements");

        }



        public DateTime ParseDate(string date)
        {
            DateTimeFormatInfo dateFormatProvider = new DateTimeFormatInfo();
            dateFormatProvider.ShortDatePattern = "dd/MM/yyyy";
            return DateTime.Parse(date, dateFormatProvider);
        }

        public string Set_Date(string date)
        {
            string[] Date112 = date.Split('/');
            var FinalDate = "";
            if (Date112.Length == 1)
            {
                string[] Date1121 = date.Split('-');
                FinalDate = Date1121[0] + "/" + Date1121[1] + "/" + Date1121[2];
            }
            else
            {
                FinalDate = Date112[0] + "/" + Date112[1] + "/" + Date112[2];
            }
            return FinalDate;
        }
        public ActionResult Tender_Announcements()
        {
            var Data = ABE.obj_abhy_procurement_milestone_insertdata.ToList();
            List<abhy_procurement_milestone_insertdata> ActiveBids = new List<Models.abhy_procurement_milestone_insertdata>();
            List<abhy_procurement_milestone_insertdata> openingToday = new List<Models.abhy_procurement_milestone_insertdata>();
            List<abhy_procurement_milestone_insertdata> closeToday = new List<Models.abhy_procurement_milestone_insertdata>();
            List<abhy_procurement_milestone_insertdata> close7daysdata = new List<Models.abhy_procurement_milestone_insertdata>();

            List<abhy_procurement_milestone_insertdata> Data11 = new List<Models.abhy_procurement_milestone_insertdata>();


            foreach (var item in Data)

            {

                if (item.contract_award_date != null && item.contract_award_date != "")
                {

                    var contract_award_date = Set_Date(item.contract_award_date);


                    DateTime publisheddate1 = ParseDate(contract_award_date);

                    if (publisheddate1 <= DateTime.Today)
                    {

                    }
                    else
                    {
                        if (item.bid_open_date != null && item.bid_open_date != "")
                        {

                            var bid_open_date = Set_Date(item.bid_open_date);

                            DateTime publisheddate11 = ParseDate(bid_open_date);

                            if (publisheddate11 <= DateTime.Today)
                            {

                            }
                            else
                            {
                                if (item.deadline_date != "" && item.deadline_date != null)
                                {
                                    var deadline_date = Set_Date(item.deadline_date);

                                    DateTime publisheddate = ParseDate(deadline_date);

                                    if (publisheddate >= DateTime.Today)
                                    {
                                        ActiveBids.Add(item);
                                    }
                                }
                                // string od = item.opening_start_datetime;
                                if (item.bid_open_date != "" && item.bid_open_date != null)
                                {
                                    var bid_open_date1 = Set_Date(item.bid_open_date);
                                    DateTime openingdate = ParseDate(bid_open_date1);
                                    if (openingdate == DateTime.Today)
                                    {
                                        openingToday.Add(item);
                                    }
                                }

                                if (item.deadline_date != "" && item.deadline_date != null)
                                {
                                    var deadline_date = Set_Date(item.deadline_date);
                                    DateTime Closedate = ParseDate(deadline_date);
                                    if (Closedate == DateTime.Today)
                                    {
                                        closeToday.Add(item);
                                    }
                                    if (Closedate <= DateTime.Today.AddDays(7) && Closedate >= DateTime.Today)
                                    {
                                        close7daysdata.Add(item);
                                    }
                                }
                            }



                        }
                        else
                        {
                            if (item.deadline_date != "" && item.deadline_date != null)
                            {
                                var deadline_date = Set_Date(item.deadline_date);
                                DateTime publisheddate = ParseDate(deadline_date);

                                if (publisheddate >= DateTime.Today)
                                {
                                    ActiveBids.Add(item);
                                }
                            }
                            // string od = item.opening_start_datetime;
                            if (item.bid_open_date != "" && item.bid_open_date != null)
                            {
                                var bid_open_date = Set_Date(item.bid_open_date);
                                DateTime openingdate = ParseDate(bid_open_date);
                                if (openingdate == DateTime.Today)
                                {
                                    openingToday.Add(item);
                                }
                            }

                            if (item.deadline_date != "" && item.deadline_date != null)
                            {
                                var deadline_date = Set_Date(item.deadline_date);
                                DateTime Closedate = ParseDate(deadline_date);
                                if (Closedate == DateTime.Today)
                                {
                                    closeToday.Add(item);
                                }
                                if (Closedate <= DateTime.Today.AddDays(7) && Closedate >= DateTime.Today)
                                {
                                    close7daysdata.Add(item);
                                }
                            }
                        }


                    }

                }
                else
                {


                    if (item.bid_open_date != null && item.bid_open_date != "")
                    {
                        var bid_open_date = Set_Date(item.bid_open_date);
                        DateTime publisheddate11 = ParseDate(bid_open_date);

                        if (publisheddate11 <= DateTime.Today)
                        {

                        }
                        else
                        {
                            if (item.deadline_date != "" && item.deadline_date != null)
                            {
                                var deadline_date = Set_Date(item.deadline_date);
                                DateTime publisheddate = ParseDate(deadline_date);

                                if (publisheddate >= DateTime.Today)
                                {
                                    ActiveBids.Add(item);
                                }
                            }
                            // string od = item.opening_start_datetime;
                            if (item.bid_open_date != "" && item.bid_open_date != null)
                            {
                                var bid_open_date1 = Set_Date(item.bid_open_date);
                                DateTime openingdate = ParseDate(bid_open_date1);
                                if (openingdate == DateTime.Today)
                                {
                                    openingToday.Add(item);
                                }
                            }

                            if (item.deadline_date != "" && item.deadline_date != null)
                            {
                                var deadline_date = Set_Date(item.deadline_date);
                                DateTime Closedate = ParseDate(deadline_date);
                                if (Closedate == DateTime.Today)
                                {
                                    closeToday.Add(item);
                                }
                                if (Closedate <= DateTime.Today.AddDays(7) && Closedate >= DateTime.Today)
                                {
                                    close7daysdata.Add(item);
                                }
                            }
                        }



                    }
                    else
                    {
                        if (item.deadline_date != "" && item.deadline_date != null)
                        {
                            var deadline_date = Set_Date(item.deadline_date);
                            DateTime publisheddate = ParseDate(item.deadline_date);

                            if (publisheddate >= DateTime.Today)
                            {
                                ActiveBids.Add(item);
                            }
                        }
                        // string od = item.opening_start_datetime;
                        if (item.bid_open_date != "" && item.bid_open_date != null)
                        {
                            var bid_open_date = Set_Date(item.bid_open_date);
                            DateTime openingdate = ParseDate(bid_open_date);
                            if (openingdate == DateTime.Today)
                            {
                                openingToday.Add(item);
                            }
                        }

                        if (item.deadline_date != "" && item.deadline_date != null)
                        {
                            var deadline_date = Set_Date(item.deadline_date);
                            DateTime Closedate = ParseDate(deadline_date);
                            if (Closedate == DateTime.Today)
                            {
                                closeToday.Add(item);
                            }
                            if (Closedate <= DateTime.Today.AddDays(7) && Closedate >= DateTime.Today)
                            {
                                close7daysdata.Add(item);
                            }
                        }
                    }
                }
            }
            var Date11 = DateTime.Today.AddDays(7);
            ViewBag.activebidsdata = ActiveBids;
            ViewBag.openingTodayData = openingToday;
            ViewBag.closetodaydata = closeToday;
            ViewBag.close7daysdatas = close7daysdata;


            ViewBag.openingToday = openingToday.Count;
            ViewBag.closeToday = closeToday.Count;
            ViewBag.close7daysdata = close7daysdata.Count;
            ViewBag.ActiveBids = ActiveBids.Count;
            List<abhy_procurement_milestone_insertdata> model = ABE.obj_abhy_procurement_milestone_insertdata.ToList();

            foreach (var item in model)
            {

                if (item.contract_award_date != null && item.contract_award_date != "")
                {
                    var contract_award_date = Set_Date(item.contract_award_date);
                    DateTime publisheddate1 = ParseDate(contract_award_date);

                    if (publisheddate1 <= DateTime.Today)
                    {

                    }
                    else
                    {
                        if (item.bid_open_date != null && item.bid_open_date != "")
                        {
                            var bid_open_date = Set_Date(item.bid_open_date);
                            DateTime publisheddate = ParseDate(bid_open_date);

                            if (publisheddate <= DateTime.Today)
                            {

                            }
                            else
                            {
                                Data11.Add(item);
                            }
                        }
                        else
                        {

                            Data11.Add(item);
                        }



                    }

                }
                else
                {
                    if (item.bid_open_date != null && item.bid_open_date != "")
                    {
                        var bid_open_date = Set_Date(item.bid_open_date);
                        DateTime publisheddate = ParseDate(bid_open_date);

                        if (publisheddate <= DateTime.Today)
                        {

                        }
                        else
                        {

                            Data11.Add(item);
                        }
                    }
                    else
                    {

                        Data11.Add(item);
                    }
                }
            }
            return View(Data11);
        }

        public ActionResult Tender_Award_Form()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Tender_Award_Form(TenderAwards tenderawards, string agency, string package_no, string packagename, string contract_award_date, string contract_amount, string name_of_consultant)
        {
            tenderawards.agency = agency;
            tenderawards.contract_amount = contract_amount;
            tenderawards.contract_award_date = contract_award_date;
            tenderawards.name_of_consultant = name_of_consultant;
            tenderawards.packagename = packagename;
            tenderawards.package_no = package_no;

            tenderawards.accept = "False";
            ABE.objTenderAwards.Add(tenderawards);
            ABE.SaveChanges();


            return RedirectToAction("Tender_Awarded");
        }

        [HttpGet]
        public ActionResult Tender_Awarded()
        {

            //Session["Tender_Awarded"] = "Tender";
            //ViewBag.Data= ABE.objTenderAwards.Where(x => x.accept == "False").ToList();
            ////ViewBag.agency = new SelectList(ABE.objTenderAwards, "taid", "agency");
            Session["Tender_Agency_Name"] = "0";
            List<TenderAwards> model = ABE.objTenderAwards.Where(x => x.accept == "True").ToList();
            ViewBag.DD = new SelectList(model.Select(m => m.agency).Distinct());
            List<abhy_procurement_milestone_insertdata> Info_1 = new List<Models.abhy_procurement_milestone_insertdata>();

            List<abhy_procurement_milestone_insertdata> model1 = ABE.obj_abhy_procurement_milestone_insertdata.ToList();

            foreach (var item in model1)
            {
                if (item.contract_award_date != null && item.contract_award_date != "")
                {

                    var contract_award_date = Set_Date(item.contract_award_date);

                    DateTime publisheddate = ParseDate(contract_award_date);

                    if (publisheddate <= DateTime.Today)
                    {
                        Info_1.Add(item);
                    }
                    //Info_1.Add(item);
                }
            }
            return View(Info_1);


        }


        public ActionResult E_Tender_Form()
        {
            var Data = ABE.obj_abhy_procurement_milestone_insertdata.ToList();

            List<abhy_procurement_milestone_insertdata> close7daysdata = new List<Models.abhy_procurement_milestone_insertdata>();


            foreach (var item in Data)

            {
                if (item.bid_open_date != "" && item.bid_open_date != null)
                {
                    var bid_open_date = Set_Date(item.bid_open_date);

                    DateTime publisheddate = ParseDate(bid_open_date);
                    DateTime ss = DateTime.Today;

                    if (publisheddate <= DateTime.Today)
                    {
                        close7daysdata.Add(item);
                    }
                }


            }

            ViewBag.close7daysdatas = close7daysdata;

            List<abhy_procurement_milestone_insertdata> model = ABE.obj_abhy_procurement_milestone_insertdata.ToList();
            return View(close7daysdata);
        }
        [HttpPost]
        public ActionResult E_Tender_Form(string Data)
        {
            JavaScriptSerializer js = new JavaScriptSerializer();
            var result = js.Deserialize<E_Tender>(Data);
            E_Tender data1 = new E_Tender();
            data1.state = result.state;
            data1.title = result.title;
            data1.url = result.url;
            data1.UserName = result.UserName;
            ABE.objE_Tender.Add(data1);
            ABE.SaveChanges();
            return Json("Saved Successfully");

        }
        public ActionResult E_Tender()
        {
            List<E_Tender> model = ABE.objE_Tender.Where(x => x.accept == "True").ToList();
            return View(model);
        }

        [HttpPost]
        public ActionResult TenderData(string Agency)
        {
            System.Threading.Thread.Sleep(200);
            TempData["Agency"] = Agency;
            List<TenderAwards> Model = ABE.objTenderAwards.Where(x => x.agency == Agency).ToList();
            ViewBag.DD = new SelectList(Model.Select(m => m.agency).Distinct());
            //return Json(Model);
            return RedirectToAction("Tender_Awarded");
        }
        public ActionResult Tender_Announcements_login()
        {
            return View();
        }






        //New Tender Code

        [HttpGet]
        public ActionResult TenderAnnouncements_Info()
        {
            if (Session["gstate"] != null)
            {
                var StateName = Session["gstate"].ToString();
                var Data = ABE.objTenderDetails.Where(x => x.state_name == StateName).ToList();
                var speciesdata1 = Json(Data, JsonRequestBehavior.AllowGet);
                speciesdata1.MaxJsonLength = int.MaxValue;
                return speciesdata1;
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }
        [HttpPost]
        public ActionResult TenderAnnouncementsData(TenderDetails tender, string bid_ref_no, string office_inviting_tender, string office_emailid, string publish_date, string tender_ref_no, string url, string sale_start_datetime, string sale_end_datetime, string last_submission_datetime, string opening_start_datetime, string description, string development_area)
        {
            if (Session["gstate"] != null)
            {
                var StateName = Session["gstate"].ToString();
                tender.state_name = StateName;
                tender.development_area = development_area;
                tender.bid_ref_no = bid_ref_no;
                tender.description = description;
                tender.last_submission_datetime = last_submission_datetime;
                tender.office_emailid = office_emailid;
                tender.office_inviting_tender = office_inviting_tender;
                tender.opening_start_datetime = opening_start_datetime;
                tender.publish_date = publish_date;
                tender.sale_end_datetime = sale_end_datetime;
                tender.sale_start_datetime = sale_start_datetime;
                tender.tender_ref_no = tender_ref_no;
                tender.url = url;
                tender.accept = "False";
                ABE.objTenderDetails.Add(tender);
                ABE.SaveChanges();

                return Json("Saved Successfully", JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }

        //Tender Award Code
        [HttpGet]
        public ActionResult TenderAwards_Info()
        {
            if (Session["gstate"] != null)
            {
                var StateName = Session["gstate"].ToString();
                var Data = ABE.objTenderAwards.Where(x => x.state_name == StateName).ToList();
                var speciesdata1 = Json(Data, JsonRequestBehavior.AllowGet);
                speciesdata1.MaxJsonLength = int.MaxValue;
                return speciesdata1;
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }


        [HttpPost]
        public ActionResult TenderAwardsData(TenderAwards tenderawards, string agency, string package_no, string packagename, string contract_award_date, string contract_amount, string name_of_consultant)
        {
            if (Session["gstate"] != null)
            {
                var StateName = Session["gstate"].ToString();
                tenderawards.state_name = StateName;
                tenderawards.agency = agency;
                tenderawards.contract_amount = contract_amount;
                tenderawards.contract_award_date = contract_award_date;
                tenderawards.name_of_consultant = name_of_consultant;
                tenderawards.packagename = packagename;
                tenderawards.package_no = package_no;

                tenderawards.accept = "False";
                ABE.objTenderAwards.Add(tenderawards);
                ABE.SaveChanges();


                return Json("Saved Successfully", JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }

        //Search Agency Info
        [HttpPost]
        public ActionResult Tender_Awarded(string Agency)
        {
            // var Data = Session["Tender_Awarded"].ToString();
            Session["Tender_Agency_Name"] = Agency;
            List<abhy_procurement_milestone_insertdata> Model = ABE.obj_abhy_procurement_milestone_insertdata.Where(x => x.state_name == Agency).ToList();
            List<abhy_procurement_milestone_insertdata> Info_1 = new List<Models.abhy_procurement_milestone_insertdata>();
            if (Agency != "0")
            {
                foreach (var item in Model)
                {
                    if (item.contract_award_date != null && item.contract_award_date != "")
                    {
                        var contract_award_date = Set_Date(item.contract_award_date);

                        DateTime publisheddate = ParseDate(contract_award_date);

                        if (publisheddate <= DateTime.Today)
                        {
                            Info_1.Add(item);
                        }
                        //Info_1.Add(item);
                    }
                }
                var speciesdata1 = Json(Info_1, JsonRequestBehavior.AllowGet);
                speciesdata1.MaxJsonLength = int.MaxValue;
                return View(Info_1);
            }
            else
            {
                
                return  RedirectToAction("Tender_Awarded");
            }

        }


        //E Tender Info

        [HttpGet]
        public ActionResult E_Tender_Info()
        {
            if (Session["gstate"] != null)
            {
                var StateName = Session["gstate"].ToString();
                var Data = ABE.objE_Tender.Where(x => x.state == StateName).ToList();
                var speciesdata1 = Json(Data, JsonRequestBehavior.AllowGet);
                speciesdata1.MaxJsonLength = int.MaxValue;
                return speciesdata1;
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }
        [HttpPost]
        public ActionResult E_Tenders_Data(string title, string url, string UserName, string state)
        {
            if (Session["gstate"] != null)
            {
                var StateName = Session["gstate"].ToString();

                E_Tender data1 = new E_Tender();
                data1.state = StateName;
                data1.title = title;
                data1.url = url;
                data1.UserName = UserName;
                ABE.objE_Tender.Add(data1);
                ABE.SaveChanges();
                return Json("Saved Successfully", JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }

    }
}