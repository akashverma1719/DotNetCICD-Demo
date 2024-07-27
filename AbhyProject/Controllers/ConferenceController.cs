using AbhyProject.Classes;
using AbhyProject.Models;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AbhyProject.Controllers
{
   
    public class ConferenceController : Controller
    {
        AbhyEntity ABE = new AbhyEntity();

        // GET: Conference

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
        public ActionResult Index()
        {
            var today = DateTime.Now.Date;
            var tomorrow = today.AddDays(1);
            List<Conference> TommorrowData = new List<Conference>();
            List<Conference> TodayData = new List<Conference>();
            List<Conference> obj = ABE.objConference.Where(x => x.accept == "True" && x.Conference_type == "National Conference").ToList();
            if (obj.Count != 0)
            {
                foreach (var item in obj)
                {

                    var contract_award_date = Set_Date(item.start_date);

                    DateTime dt = ParseDate(contract_award_date);
                    if (tomorrow == dt)
                    {
                        TommorrowData.Add(item);
                    }
                    else if (today == dt)
                    {
                        TodayData.Add(item);
                    }
                }
            }
            ViewBag.TodayData = TodayData;
            ViewBag.TommorrowData = TommorrowData;
            return View(obj);
        }
        public ActionResult Conference_Form()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Conference_Form(Conference conference, string conference_name, string start_date, string location, string type, HttpPostedFileBase file, string time)
        {
            if (file != null)
            {
                if (file.ContentLength > 0)
                {
                    conference.Image = new byte[file.ContentLength];

                    file.InputStream.Read(conference.Image, 0, file.ContentLength);


                }
            }
            conference.Time = time;
            conference.conference_name = conference_name;
            conference.start_date = start_date;
            conference.location = location;
            conference.Approvedby = 0;
            conference.CreatedBy = Convert.ToInt32(Session["UserId"]);
            conference.Conference_type = type;
            conference.accept = "False";
            ABE.objConference.Add(conference);
            ABE.SaveChanges();
            if (type == "National Conference")
            {
                return RedirectToAction("Index", "Conference");
            }
            else
            {
                return RedirectToAction("First_National_Conference", "Conference");
            }


        }

        public ActionResult FirstConference_Form()
        {
            return View();
        }
        public ActionResult First_National_Conference()
        {

            var today = DateTime.Now.Date;
            var tomorrow = today.AddDays(1);
            List<Conference> TommorrowData = new List<Conference>();
            List<Conference> TodayData = new List<Conference>();
            List<Conference> obj = ABE.objConference.Where(x => x.accept == "True" && x.Conference_type != "National Conference").ToList();
            if (obj.Count != 0)
            {
                foreach (var item in obj)
                {
                    var contract_award_date = Set_Date(item.start_date);

                    DateTime dt = ParseDate(contract_award_date);
                    if (tomorrow == dt)
                    {
                        TommorrowData.Add(item);
                    }
                    else if (today == dt)
                    {
                        TodayData.Add(item);
                    }
                }
            }
            ViewBag.TodayData = TodayData;
            ViewBag.TommorrowData = TommorrowData;


            return View(obj);
        }
        public ActionResult Conference_view()
        {
            return View();

        }
        public ActionResult Training_modules()
        {
            return View();
        }


    }
}
