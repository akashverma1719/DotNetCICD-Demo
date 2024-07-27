using AbhyProject.Controllers;
using AbhyProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AbhyProject.Utility
{
    public class CheckLogin
    {
        private static AbhyEntity ABE = new AbhyEntity();

        public static int CheckLoginStatus(int userId = 0)
        {
            try
            {
                int i = 0;
                user_autologin users = new user_autologin();
                WspNewController wspNew = new WspNewController();
                var IP = wspNew.GetIp();
                var data = ABE.obj_user_autologin.Where(x => x.user_id == userId && x.last_ip == IP).FirstOrDefault();
                if (data == null)
                {
                    i = 1;
                    return i;
                }
                else
                {
                    return i;
                }
            }
            catch (Exception Ex)
            {

                abhy_tbl_error error_data = new abhy_tbl_error();
                error_data.error_test = Ex.Message;
                error_data.user_email = Ex.StackTrace;
                error_data.user_type = "AutoLogin";
                error_data.error_count = "1";
                error_data.date_time = DateTime.Now.ToString();
                ABE.obj_abhy_tbl_error.Add(error_data);
                ABE.SaveChanges();
                return 1;
            }

        }
    }
}