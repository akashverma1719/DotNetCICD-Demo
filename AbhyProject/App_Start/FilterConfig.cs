using System.Web;
using System.Web.Mvc;

namespace AbhyProject
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
            filters.Add(new NoCacheGlobalActionFilter());
            
        }

    }
    public class NoCacheGlobalActionFilter : ActionFilterAttribute
    {
        public override void OnResultExecuted(ResultExecutedContext filterContext)
        {

            HttpCachePolicyBase cache = filterContext.HttpContext.Response.Cache;
            cache.SetCacheability(HttpCacheability.NoCache);
            cache.AppendCacheExtension("no-store, must-revalidate");


            base.OnResultExecuted(filterContext);
        }
    }

    //public class StateCheckAttribute : ActionFilterAttribute
    //{
    //    public override void OnActionExecuting(ActionExecutingContext filterContext)
    //    {
    //        // Get the state from the session
    //        var state = HttpContext.Current.Session["gstate"]?.ToString();

    //        // Check if the state matches the required value
    //        if (state != "Madhya Pradesh_23")
    //        {
    //            // Redirect to a different action if the state doesn't match
    //            filterContext.Result = new RedirectToRouteResult(
    //                new System.Web.Routing.RouteValueDictionary(
    //                    new { controller = "Project", action = "wsp_page" }
    //                )
    //            );
    //        }

    //        base.OnActionExecuting(filterContext);
    //    }
    //}
}
