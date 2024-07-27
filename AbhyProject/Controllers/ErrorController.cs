using AbhyProject.Classes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AbhyProject.Controllers
{
    [HandleError]
    public class ErrorController : Controller
    {

        // GET: Error
        public ActionResult DefaultError()
        {
            return View();
        }
        // GET: Error 404
        public ActionResult NotFound()
        {
            return View();
        }
        //400
        public ActionResult BadRequest()
        {
            return View();
        }
        //500
        public ActionResult InternalServerError()
        {
            return View();
        }

        //405
        public ActionResult HttpHeaderError()
        {
            return View();
        }
    }
}