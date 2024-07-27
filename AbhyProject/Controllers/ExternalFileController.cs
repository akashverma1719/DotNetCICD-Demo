using AbhyProject.Classes;
using AbhyProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AbhyProject.Controllers
{
    public class ExternalFileController : Controller
    {
        AbhyEntity ABE = new AbhyEntity();
        AtaljalEntity AJE = new AtaljalEntity();
        // GET: ExternalFile
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult External_file_upload()
        {
            ViewBag.StateList = ABE.objabhy_states.ToList();
            return View();
           
        }

        [HttpPost]
        public ActionResult FetchDistrict(string stateId)
        {
            List<abhy_districts> districListObj = new List<abhy_districts>();
            int Id = Convert.ToInt32(stateId);
            if(stateId != null)
            {
                districListObj = ABE.objabhy_districts.Where(x => x.sid == Id).ToList();
            }
            return Json(districListObj, JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public ActionResult FetchBlocks(string distId)
        {
            List<abhy_blocks> blockListObj = new List<abhy_blocks>();
            int Id = Convert.ToInt32(distId);
            if (Id != 0)
            {
                blockListObj = ABE.objabhy_blocks.Where(x => x.did == Id).ToList();
            }
            return Json(blockListObj, JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public ActionResult FetchGrampanchayat(string blockId)
        {
            List<abhy_grampanchayat> gramListObj = new List<abhy_grampanchayat>();
            int Id = Convert.ToInt32(blockId);
            if (Id != 0)
            {
                gramListObj = ABE.objabhy_grampanchayat.Where(x => x.bid == Id).ToList();
            }
            return Json(gramListObj, JsonRequestBehavior.AllowGet);
        }
    }
}