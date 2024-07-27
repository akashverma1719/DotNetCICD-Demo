using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AbhyProject.Classes
{
    [Serializable]
    public class AppSession
    {
        public static void Set(string key, object value)
        {
            HttpContext.Current.Session[key] = value;
        }

        public static object Get(string key)
        {
            return HttpContext.Current.Session[key];
        }
    }
}