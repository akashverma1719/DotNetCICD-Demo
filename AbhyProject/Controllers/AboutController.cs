using AbhyProject.Classes;
using AbhyProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AbhyProject.Controllers
{
    public class AboutController : Controller
    {
        AbhyEntity ABE = new AbhyEntity();
        // GET: About

        public ActionResult Index()
        {
            return View();
        }
        public ActionResult About()
        {
            return View();
        }
        public ActionResult About_hi()
        {
            return View();
        }
        public ActionResult Project_Components_A_WRMS()
        {
            return View();
        }
        public ActionResult Project_Components_A_WRMS_hi()
        {
            return View();
        }
        public ActionResult Project_Components_B_WRMS()
        {
            return View();
        }

        public ActionResult Project_Components_B_WRMS_hi()
        {
            return View();
        }
        public ActionResult Project_Components_C_WRMS()
        {
            return View();
        }
        public ActionResult Project_Components_D_WRMS()
        {
            return View();
        }
        public ActionResult Safeguard()
        {
            return View();
        }
        public ActionResult Safeguard_hi()
        {
            return View();
        }


        //public ActionResult Agencies()
        //{
        //    ViewBag.rb = ABE.objabhy_agencies.Where(y => y.fkid == 4).ToList();
        //    ViewBag.rbcount = ViewBag.rb.Count;



        //    ViewBag.ca = ABE.objabhy_agencies.Where(y => y.fkid == 3).ToList();
        //    ViewBag.cacount = ViewBag.ca.Count;


        //    ViewBag.ut = ABE.objabhy_agencies.Where(y => y.fkid == 2).ToList();
        //    ViewBag.utcount = ViewBag.ut.Count;


        //    var res = ABE.objabhy_agencies.ToList();
        //    ViewBag.count = res.Count;

        //    var states = ABE.objabhy_agencies.Where(x => x.fkid == 1).ToList();
        //    ViewBag.scount = states.Count;
        //    return View(states);
        //}
     
        public ActionResult Agencies()
        {


            //CA List
            //ViewBag.ca = ABE.objabhy_agencies1.Where(y => y.fkid == 1).ToList();
            //ViewBag.cacount = ViewBag.ca.Count;

            //List<abhy_about_contact_agencies> Data = ABE.objabhy_about_contact_agencies.ToList();

            //total list
            var res = ABE.objabhy_about_contact_agencies.ToList();
            ViewBag.count = res.Count;
            ////states list
           List<abhy_about_contact_agencies> states = ABE.objabhy_about_contact_agencies.ToList();
            ViewBag.scount = states.Count;
            return View(states);

        }

        [HttpGet]
        public ActionResult Agencies_Info()
        {
            List<abhy_about_contact_agencies> states = ABE.objabhy_about_contact_agencies.ToList();
            ViewBag.scount = states.Count;
            return Json(states,JsonRequestBehavior.AllowGet);
        }

        public ActionResult Project_Management_Units()
        {
            //CA List
            ViewBag.ca = ABE.objabhy_agencies1.Where(y => y.fkid == 1).ToList();
            ViewBag.cacount = ViewBag.ca.Count;



            //total list
            var res = ABE.objabhy_agencies1.ToList();
            ViewBag.count = res.Count;
            //states list
            var states = ABE.objabhy_agencies1.Where(x => x.fkid == 2).ToList();
            ViewBag.scount = states.Count;
            return View(states);
        }
        //public ActionResult Project_Management_Units()
        //{
        //    //RB List
        //    ViewBag.rb = ABE.objabhy_agencies.Where(y => y.fkid == 4).ToList();
        //    ViewBag.rbcount = ViewBag.rb.Count;


        //    //CA List
        //    ViewBag.ca = ABE.objabhy_agencies.Where(y => y.fkid == 3).ToList();
        //    ViewBag.cacount = ViewBag.ca.Count;

        //    //UT List
        //    ViewBag.ut = ABE.objabhy_agencies.Where(y => y.fkid == 2).ToList();
        //    ViewBag.utcount = ViewBag.ut.Count;

        //    //total list
        //    var res = ABE.objabhy_agencies.ToList();
        //    ViewBag.count = res.Count;
        //    //states list
        //    var states = ABE.objabhy_agencies.Where(x => x.fkid == 1).ToList();
        //    ViewBag.scount = states.Count;
        //    return View(states);
        //}
    }
}
