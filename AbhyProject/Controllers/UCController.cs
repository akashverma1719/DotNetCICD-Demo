using AbhyProject.Classes;
using AbhyProject.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AbhyProject.Controllers
{
    public class UCController : Controller
    {
        AbhyEntity ABE = new AbhyEntity();

        // GET: UC
        public ActionResult Index(string Step = "")
        {
            int count = 0;
            if (Step == "")
            {
                Session["StartingPoint"] = count;
                var list = ABE.objUsers.ToList().OrderBy(x => x.UserId).Take(10);
                ViewBag.UCList = list;
                Session["Count"] = 1;
                foreach (var item in list)
                {
                    Session["Step"] = item.UserId;
                }
            }
            else if (Step == "Previous")
            {
                count = Convert.ToInt32(Session["StartingPoint"]);
                count--;
                Session["StartingPoint"] = count;
                int userid = Convert.ToInt32(Session["Step"]);
                var list = ABE.objUsers.Where(x => x.UserId < userid).ToList().OrderByDescending(x => x.UserId).Take(10);
                ViewBag.UCList = list.OrderBy(x => x.UserId).ToList();
                //Session["Count"] = 10;
                foreach (var item in list)
                {
                    Session["Step"] = item.UserId;
                }
            }
            else if (Step == "Next")
            {
                count = Convert.ToInt32(Session["StartingPoint"]);
                count++;
                Session["StartingPoint"] = count;
                int userid = Convert.ToInt32(Session["Step"]);
                var list = ABE.objUsers.Where(x => x.UserId > userid).ToList().OrderBy(x => x.UserId).Take(10);
                ViewBag.UCList = list;
                //Session["Count"] = 10;
                foreach (var item in list)
                {
                    Session["Step"] = item.UserId;
                }
            }
            return View();
        }

        public ActionResult Approve(int UserId)
        {
            var details = ABE.objUsers.Where(x => x.UserId == UserId).FirstOrDefault();
            if (details != null)
            {
                details.Verifiedornot = "True";

                ABE.Entry(details).State = EntityState.Modified;
                int res = ABE.SaveChanges();
                if (res > 0)
                {
                    TempData["Message"] = "Approved successfully.";
                }
                else
                {
                    TempData["Message"] = "Some error occurred";
                }
            }
            return RedirectToAction("Index");
        }

        [HttpPost]
        public ActionResult Index(string Input,string ColumnName)
        {
            var details = ABE.objUsers.Where(x=> x.Email.Contains(Input)).ToList();
            ViewBag.UCList = details;
            return View();

        }

    }
}