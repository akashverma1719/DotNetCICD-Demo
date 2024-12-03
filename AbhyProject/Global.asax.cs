using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace AbhyProject
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            //vesion disable
            MvcHandler.DisableMvcResponseHeader = true;
            GlobalConfiguration.Configure(WebApiConfig.Register);
            AreaRegistration.RegisterAllAreas();
            // GlobalFilters.Filters.Add(new HandleErrorAttribute());

            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);

            PreSendRequestHeaders += Application_PreSendRequestHeaders;

        }
        protected void Application_PreSendRequestHeaders(object sender, EventArgs e)
        {
            //MvcHandler.DisableMvcResponseHeader = true;
            Response.Headers.Remove("foo");
            Response.Headers.Add("bar", "quiux");

            //HttpContext.Current.Response.Headers.Remove("Server");
            //HttpContext.Current.Response.Headers.Remove("X-AspNetWebPages-Version");
            //HttpContext.Current.Response.Headers.Remove("X-AspNet-Version");
            //HttpContext.Current.Response.Headers.Remove("X-Powered-By");
            //HttpContext.Current.Response.Headers.Remove("X-AspNetMvc-Version");
        }
        
        protected void Application_PostAcquireRequestState(object sender, EventArgs e)
        {
            // Ensure the session is available and the user is logged in
            if (HttpContext.Current.Session["UserName"] != null &&
        HttpContext.Current.Session["DateTime"] == null || HttpContext.Current.Session["UserName"] != null &&
        HttpContext.Current.Session["DateTime"] != null)
            {
                HttpContext.Current.Session["DateTime"] = DateTime.Now; // Set the current DateTime
                string currentPage = HttpContext.Current.Request.Url.AbsolutePath;

                // Store the last accessed page in session
                HttpContext.Current.Session["LastAccessedPage"] = currentPage;
            }
        }


    }
}
