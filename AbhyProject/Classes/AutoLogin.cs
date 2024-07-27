using AbhyProject.Controllers;
using AbhyProject.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace AbhyProject.Classes
{
    public class AutoLogin
    {
        private static AbhyEntity ABE = new AbhyEntity();
        //private static user_autologin users = new user_autologin();


        public static int CheckLogin(int userId = 0)
        {
            try
            {
                int i = 0;
                user_autologin users = new user_autologin();
                WspNewController wspNew = new WspNewController();
                var IP = wspNew.GetIp();
                //var data = ABE.obj_user_autologin.Where(x => x.user_id == userId && x.last_ip == IP).FirstOrDefault();
                var data = ABE.obj_user_autologin.Where(x => x.user_id == userId && x.last_ip == IP).OrderByDescending(x => x.id).FirstOrDefault();
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
            catch(Exception Ex) {

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
        public static void SaveDate(int userId = 0, string last_ip = "")
        {
            user_autologin users = new user_autologin();
            var data = ABE.obj_user_autologin.Where(x => x.user_id == userId).FirstOrDefault();
            if (data != null)
            {
                data.last_ip = last_ip;
                data.last_login = DateTime.Now.ToString();
                ABE.Entry(data).State = EntityState.Deleted;
                ABE.SaveChanges();
            }
            else
            {
                users.user_id = userId;
                users.last_ip = last_ip;
                users.last_login = DateTime.Now.ToString();
                users.isactive = 1;
                ABE.obj_user_autologin.Add(users);
                ABE.SaveChanges();
            }
        }

        public static void UpdateDate(int userId = 0)
        {
            user_autologin users = new user_autologin();
            if (userId > 0)
            {
                var data = ABE.obj_user_autologin.Where(x => x.user_id == userId).FirstOrDefault();
                if (data != null)
                {
                    users.last_login = DateTime.Now.ToString();

                    ABE.Entry(users).State = EntityState.Modified;
                    ABE.SaveChanges();
                }
            }
        }

        public static void EndSession(int userId)
        {
            user_autologin users = new user_autologin();
            if (userId > 0)
            {
                var data = ABE.obj_user_autologin.Where(x => x.user_id == userId).FirstOrDefault();
                if (data != null)
                {
                    users.isactive = 0;

                    ABE.Entry(users).State = EntityState.Modified;
                    ABE.SaveChanges();
                }
            }
        }
    }
}