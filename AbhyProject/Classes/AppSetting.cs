
using AbhyProject.Controllers;
using System;
using System.Web.Mvc;
using System.Web.Routing;

namespace AbhyProject.Classes
{
    public class AppSetting : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            int userId = Convert.ToInt32(AppSession.Get("UserId"));
            int res = AutoLogin.CheckLogin(userId);
            if (res == 1)
            {
                filterContext.Result = new RedirectToRouteResult(
                new RouteValueDictionary
                {
                    { "controller", "WspNew" },
                    { "action", "WSP_GWM_HOME" }
                });
            }
        }

        public override void OnActionExecuted(ActionExecutedContext filterContext)
        {
            //filterContext.Result = new RedirectToRouteResult(
            //new RouteValueDictionary
            //{
            //    { "controller", "WspNew" },
            //    { "action", "WSP_GWM_HOME" }
            //});
        }
    }
}