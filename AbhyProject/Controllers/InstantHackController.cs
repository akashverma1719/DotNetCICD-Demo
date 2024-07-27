using AbhyProject.Models;
using AbhyProject.Utility;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Mvc;

namespace AbhyProject.Controllers
{
    public class InstantHackController : Controller
    {
        // GET: InstantHack
        AbhyEntity ABE = new AbhyEntity();
        AtaljalEntity AJE = new AtaljalEntity();
        public ActionResult ValidateLat_For_ARS()
        {
            try
            {
                //var Data = AJE.obj_geo_new.OrderByDescending(x => x.id).Take(50000).ToList();
                var Data = AJE.obj_geo_new.ToList();
                //List<abhy_artificial_recharge_st_data> Data = new List<abhy_artificial_recharge_st_data>();
                List<geo_new> dd = new List<geo_new>();
                //var WrongData = ABE.obj_abhy_water_conservation_st_data.ToList();
                if (Data.Count != 0)
                {
                    foreach (var item in Data)
                    {
                        //int no;
                        string Checklat = "";
                        string Latitude = item.latitude;
                        decimal myDec;
                        int j = 0;
                        bool Result = decimal.TryParse(Latitude, out myDec);
                        if (Result != true)
                        {
                            dd.Add(item);
                            for (int i = 0; i < Latitude.Length; i++)
                            {
                                int n;
                                string Num = Latitude[i].ToString();
                                bool isNumeric = int.TryParse(Num, out n);
                                if (isNumeric != true)
                                {
                                    if (Num == ".")
                                    {
                                        if (j != 2)
                                        {
                                            item.latitude.Replace(Num, "");

                                        }
                                        else
                                        {
                                            ++j;
                                            Checklat += ".";
                                        }
                                    }
                                    else
                                    {
                                        if (j == 2)
                                        {
                                            item.latitude.Replace(Num, ".");
                                            j++;
                                            Checklat += ".";
                                        }
                                        else
                                        {
                                            item.latitude.Replace(Num, "");
                                        }
                                    }
                                }
                                else
                                {
                                    ++j;
                                    Checklat += Latitude[i].ToString();
                                }
                            }
                            int no;
                            bool CheckInt = int.TryParse(Checklat, out no);
                            if (CheckInt == true)
                            {
                                string Checklat2 = "";
                                for (int k = 0; k < Checklat.Length; k++)
                                {
                                    if (k == 2)
                                    {
                                        Checklat2 += ".";
                                        Checklat2 += Checklat[k].ToString();
                                    }
                                    else
                                    {
                                        Checklat2 += Checklat[k].ToString();
                                    }
                                }
                                item.old_lat = Checklat2;
                            }
                            else
                            {
                                item.old_lat = Checklat;
                            }


                            ABE.Entry(item).State = EntityState.Modified;
                            int A = ABE.SaveChanges();
                        }
                    }
                }

                return View(dd);
            }
            catch (Exception Ex)
            {
                return View();
            }
        }

        public ActionResult UpdateLat_For_ARS()
        {
            //var dd = ABE.obj_supplyside_dli3_new.OrderByDescending(x => x.id).Take(50000).ToList();
            var Data = AJE.obj_geo_new.ToList();
            //List<abhy_artificial_recharge_st_data> Data = new List<abhy_artificial_recharge_st_data>();
            List<geo_new> dd = new List<geo_new>();
            if (dd.Count != 0)
            {
                foreach (var item in dd)
                {
                    decimal myDec;
                    bool Result = decimal.TryParse(item.latitude, out myDec);
                    if (Result != true)
                    {
                        Data.Add(item);
                    }
                }
                for (int i = 0; i < Data.Count; i++)
                {

                    string swap = "";
                    swap = Data[i].latitude;
                    Data[i].latitude = Data[i].old_lat;
                    Data[i].old_lat = swap;
                    ABE.Entry(Data[i]).State = EntityState.Modified;
                    ABE.SaveChanges();
                }
            }
            return View(Data);
        }

        public ActionResult ValidateLon_For_ARS()
        {
            var Data = AJE.obj_geo_new.ToList();
            //List<abhy_artificial_recharge_st_data> Data = new List<abhy_artificial_recharge_st_data>();
            List<geo_new> dd = new List<geo_new>();
            if (Data.Count != 0)
            {
                foreach (var item in Data)
                {
                    //int no;
                    string Checklat = "";
                    string Longitude = item.longitude;
                    decimal myDec;
                    int j = 0;
                    bool Result = decimal.TryParse(Longitude, out myDec);
                    if (Result != true)
                    {
                        dd.Add(item);
                        for (int i = 0; i < Longitude.Length; i++)
                        {
                            int n;

                            string Num = Longitude[i].ToString();
                            bool isNumeric = int.TryParse(Num, out n);
                            if (isNumeric != true)
                            {
                                if (Num == ".")
                                {
                                    if (j != 2)
                                    {
                                        item.longitude.Replace(Num, "");

                                    }
                                    else
                                    {
                                        ++j;
                                        Checklat += ".";
                                    }
                                }
                                else
                                {
                                    if (j == 2)
                                    {
                                        item.longitude.Replace(Num, ".");
                                        j++;
                                        Checklat += ".";
                                    }
                                    else
                                    {
                                        item.longitude.Replace(Num, "");
                                    }
                                }
                                //Checklat += Latitude[i].ToString();
                            }
                            else
                            {
                                ++j;
                                Checklat += Longitude[i].ToString();
                            }
                        }
                        //item.longitude = Checklat;
                        //
                        //ABE.obj_dli4_efficient_irrigation_system.Add(Data[0]);
                        int no;
                        bool CheckInt = int.TryParse(Checklat, out no);
                        if (CheckInt == true)
                        {
                            string Checklat2 = "";
                            for (int k = 0; k < Checklat.Length; k++)
                            {
                                if (k == 2)
                                {
                                    Checklat2 += ".";
                                    Checklat2 += Checklat[k].ToString();
                                }
                                else
                                {
                                    Checklat2 += Checklat[k].ToString();
                                }
                            }
                            item.old_lon = Checklat2;
                        }
                        else
                        {
                            item.old_lon = Checklat;
                        }


                        ABE.Entry(item).State = EntityState.Modified;
                        int A = ABE.SaveChanges();
                    }
                    //else
                    //{
                    //    item.old_lon = Latitude;
                    //    ABE.Entry(item).State = EntityState.Modified;
                    //    int b = ABE.SaveChanges();
                    //}
                }
            }

            return View(dd);
        }


        public ActionResult ValidateLon_For_ARS1()
        {
            var Data = AJE.obj_geo_new.ToList();
            //List<abhy_artificial_recharge_st_data> Data = new List<abhy_artificial_recharge_st_data>();
            List<geo_new> dd = new List<geo_new>();
            //var WrongData = ABE.obj_abhy_water_conservation_st_data.ToList();
            if (Data.Count != 0)
            {
                foreach (var item in Data)
                {
                    //int no;
                    string Checklat = "";
                    string Longitude = item.longitude;
                    decimal myDec;
                    int j = 0;
                    bool Result = decimal.TryParse(Longitude, out myDec);
                    if (Result != true)
                    {
                        dd.Add(item);
                        for (int i = 0; i < Longitude.Length; i++)
                        {
                            int n;

                            string Num = Longitude[i].ToString();
                            bool isNumeric = int.TryParse(Num, out n);
                            if (isNumeric != true)
                            {
                                if (Num == ".")
                                {
                                    if (j != 2)
                                    {
                                        item.longitude.Replace(Num, "");

                                    }
                                    else
                                    {
                                        ++j;
                                        Checklat += ".";
                                    }
                                }
                                else
                                {
                                    if (j == 2)
                                    {
                                        item.longitude.Replace(Num, ".");
                                        j++;
                                        Checklat += ".";
                                    }
                                    else
                                    {
                                        item.longitude.Replace(Num, "");
                                    }
                                }
                                //Checklat += Latitude[i].ToString();
                            }
                            else
                            {
                                ++j;
                                Checklat += Longitude[i].ToString();
                            }
                        }
                        //item.longitude = Checklat;
                        //
                        //ABE.obj_dli4_efficient_irrigation_system.Add(Data[0]);
                        int no;
                        bool CheckInt = int.TryParse(Checklat, out no);
                        if (CheckInt == true)
                        {
                            string Checklat2 = "";
                            for (int k = 0; k < Checklat.Length; k++)
                            {
                                if (k == 2)
                                {
                                    Checklat2 += ".";
                                    Checklat2 += Checklat[k].ToString();
                                }
                                else
                                {
                                    Checklat2 += Checklat[k].ToString();
                                }
                            }
                            item.old_lon = Checklat2;
                        }
                        else
                        {
                            item.old_lon = Checklat;
                        }


                        ABE.Entry(item).State = EntityState.Modified;
                        int A = ABE.SaveChanges();
                    }
                    //else
                    //{
                    //    item.old_lon = Latitude;
                    //    ABE.Entry(item).State = EntityState.Modified;
                    //    int b = ABE.SaveChanges();
                    //}
                }
            }

            return View(dd);
        }

        public ActionResult UpdateLon_For_ARS()
        {
            var dd = ABE.obj_supplyside_dli3_new.OrderByDescending(x => x.id).Take(50000).ToList();
            List<supplyside_dli3_new> Data = new List<supplyside_dli3_new>();
            //List<abhy_artificial_recharge_st_data> dd = new List<abhy_artificial_recharge_st_data>();
            //var WrongData = ABE.obj_abhy_water_conservation_st_data.ToList();
            if (dd.Count != 0)
            {
                foreach (var item in dd)
                {
                    decimal myDec;
                    bool Result = decimal.TryParse(item.longitude, out myDec);
                    if (Result != true)
                    {
                        Data.Add(item);
                    }
                }
                for (int i = 0; i < Data.Count; i++)
                {

                    string swap = "";
                    swap = Data[i].longitude;
                    //Data[i].longitude = Data[i].old_lon;
                    // Data[i].old_lon = swap;
                    ABE.Entry(Data[i]).State = EntityState.Modified;
                    ABE.SaveChanges();
                }
            }
            return View(Data);
        }


        public ActionResult UpdateLon_For_ARS1()
        {
            var dd = ABE.obj_supplyside_dli3_new.OrderByDescending(x => x.id).Skip(50000).ToList();
            List<supplyside_dli3_new> Data = new List<supplyside_dli3_new>();
            //List<abhy_artificial_recharge_st_data> dd = new List<abhy_artificial_recharge_st_data>();
            //var WrongData = ABE.obj_abhy_water_conservation_st_data.ToList();
            if (dd.Count != 0)
            {
                foreach (var item in dd)
                {
                    decimal myDec;
                    bool Result = decimal.TryParse(item.longitude, out myDec);
                    if (Result != true)
                    {
                        Data.Add(item);
                    }
                }
                for (int i = 0; i < Data.Count; i++)
                {

                    string swap = "";
                    swap = Data[i].longitude;
                    // Data[i].longitude = Data[i].old_lon;
                    //Data[i].old_lon = swap;
                    ABE.Entry(Data[i]).State = EntityState.Modified;
                    ABE.SaveChanges();
                }
            }
            return View(Data);
        }

        public ActionResult ValidateLat_For_WCS()
        {
            var Data = ABE.obj_abhy_water_conservation_st_data.OrderByDescending(x => x.id).ToList();
            //List<abhy_artificial_recharge_st_data> Data = new List<abhy_artificial_recharge_st_data>();
            List<abhy_water_conservation_st_data> dd = new List<abhy_water_conservation_st_data>();
            //var WrongData = ABE.obj_abhy_water_conservation_st_data.ToList();
            if (Data.Count != 0)
            {
                foreach (var item in Data)
                {
                    //int no;
                    string Checklat = "";
                    string Latitude = item.latitude;
                    decimal myDec;
                    int j = 0;
                    bool Result = decimal.TryParse(Latitude, out myDec);
                    if (Result != true)
                    {
                        dd.Add(item);
                        for (int i = 0; i < Latitude.Length; i++)
                        {
                            int n;

                            string Num = Latitude[i].ToString();
                            bool isNumeric = int.TryParse(Num, out n);
                            if (isNumeric != true)
                            {
                                if (Num == ".")
                                {
                                    if (j != 2)
                                    {
                                        item.latitude.Replace(Num, "");

                                    }
                                    else
                                    {
                                        ++j;
                                        Checklat += ".";
                                    }
                                }
                                else
                                {
                                    if (j == 2)
                                    {
                                        item.latitude.Replace(Num, ".");
                                        j++;
                                        Checklat += ".";
                                    }
                                    else
                                    {
                                        item.latitude.Replace(Num, "");
                                    }
                                }
                                //Checklat += Latitude[i].ToString();
                            }
                            else
                            {
                                ++j;
                                Checklat += Latitude[i].ToString();
                            }
                        }
                        //item.latitude = Checklat;
                        //
                        //ABE.obj_dli4_efficient_irrigation_system.Add(Data[0]);
                        int no;
                        bool CheckInt = int.TryParse(Checklat, out no);
                        if (CheckInt == true)
                        {
                            string Checklat2 = "";
                            for (int k = 0; k < Checklat.Length; k++)
                            {
                                if (k == 2)
                                {
                                    Checklat2 += ".";
                                    Checklat2 += Checklat[k].ToString();
                                }
                                else
                                {
                                    Checklat2 += Checklat[k].ToString();
                                }
                            }
                            item.old_lat = Checklat2;
                        }
                        else
                        {
                            item.old_lat = Checklat;
                        }


                        ABE.Entry(item).State = EntityState.Modified;
                        int A = ABE.SaveChanges();
                    }
                    //else
                    //{
                    //    item.old_lat = Latitude;
                    //    ABE.Entry(item).State = EntityState.Modified;
                    //    int b = ABE.SaveChanges();
                    //}
                }
            }

            return View(dd);
        }

        public ActionResult UpdateLat_For_WCS()
        {
            var dd = ABE.obj_abhy_water_conservation_st_data.OrderByDescending(x => x.id).ToList();
            List<abhy_water_conservation_st_data> Data = new List<abhy_water_conservation_st_data>();
            //List<abhy_artificial_recharge_st_data> dd = new List<abhy_artificial_recharge_st_data>();
            //var WrongData = ABE.obj_abhy_water_conservation_st_data.ToList();
            if (dd.Count != 0)
            {
                foreach (var item in dd)
                {
                    decimal myDec;
                    bool Result = decimal.TryParse(item.latitude, out myDec);
                    if (Result != true)
                    {
                        Data.Add(item);
                    }
                }
                for (int i = 0; i < Data.Count; i++)
                {

                    string swap = "";
                    swap = Data[i].latitude;
                    Data[i].latitude = Data[i].old_lat;
                    Data[i].old_lat = swap;
                    ABE.Entry(Data[i]).State = EntityState.Modified;
                    ABE.SaveChanges();
                }
            }
            return View(Data);
        }

        public ActionResult ValidateLon_For_WCS()
        {
            var Data = ABE.obj_abhy_water_conservation_st_data.OrderByDescending(x => x.id).ToList();
            //List<abhy_artificial_recharge_st_data> Data = new List<abhy_artificial_recharge_st_data>();
            List<abhy_water_conservation_st_data> dd = new List<abhy_water_conservation_st_data>();
            //var WrongData = ABE.obj_abhy_water_conservation_st_data.ToList();
            if (Data.Count != 0)
            {
                foreach (var item in Data)
                {
                    //int no;
                    string Checklat = "";
                    string Longitude = item.longitude;
                    decimal myDec;
                    int j = 0;
                    bool Result = decimal.TryParse(Longitude, out myDec);
                    if (Result != true)
                    {
                        dd.Add(item);
                        for (int i = 0; i < Longitude.Length; i++)
                        {
                            int n;

                            string Num = Longitude[i].ToString();
                            bool isNumeric = int.TryParse(Num, out n);
                            if (isNumeric != true)
                            {
                                if (Num == ".")
                                {
                                    if (j != 2)
                                    {
                                        item.longitude.Replace(Num, "");

                                    }
                                    else
                                    {
                                        ++j;
                                        Checklat += ".";
                                    }
                                }
                                else
                                {
                                    if (j == 2)
                                    {
                                        item.longitude.Replace(Num, ".");
                                        j++;
                                        Checklat += ".";
                                    }
                                    else
                                    {
                                        item.longitude.Replace(Num, "");
                                    }
                                }
                                //Checklat += Latitude[i].ToString();
                            }
                            else
                            {
                                ++j;
                                Checklat += Longitude[i].ToString();
                            }
                        }
                        //item.longitude = Checklat;
                        //
                        //ABE.obj_dli4_efficient_irrigation_system.Add(Data[0]);
                        int no;
                        bool CheckInt = int.TryParse(Checklat, out no);
                        if (CheckInt == true)
                        {
                            string Checklat2 = "";
                            for (int k = 0; k < Checklat.Length; k++)
                            {
                                if (k == 2)
                                {
                                    Checklat2 += ".";
                                    Checklat2 += Checklat[k].ToString();
                                }
                                else
                                {
                                    Checklat2 += Checklat[k].ToString();
                                }
                            }
                            item.old_lon = Checklat2;
                        }
                        else
                        {
                            item.old_lon = Checklat;
                        }


                        ABE.Entry(item).State = EntityState.Modified;
                        int A = ABE.SaveChanges();
                    }
                    //else
                    //{
                    //    item.old_lon = Latitude;
                    //    ABE.Entry(item).State = EntityState.Modified;
                    //    int b = ABE.SaveChanges();
                    //}
                }
            }

            return View(dd);
        }

        public ActionResult UpdateLon_For_WCS()
        {
            var dd = ABE.obj_abhy_water_conservation_st_data.OrderByDescending(x => x.id).ToList();
            List<abhy_water_conservation_st_data> Data = new List<abhy_water_conservation_st_data>();
            //List<abhy_artificial_recharge_st_data> dd = new List<abhy_artificial_recharge_st_data>();
            //var WrongData = ABE.obj_abhy_water_conservation_st_data.ToList();
            if (dd.Count != 0)
            {
                foreach (var item in dd)
                {
                    decimal myDec;
                    bool Result = decimal.TryParse(item.longitude, out myDec);
                    if (Result != true)
                    {
                        Data.Add(item);
                    }
                }
                for (int i = 0; i < Data.Count; i++)
                {

                    string swap = "";
                    swap = Data[i].longitude;
                    Data[i].longitude = Data[i].old_lon;
                    Data[i].old_lon = swap;
                    ABE.Entry(Data[i]).State = EntityState.Modified;
                    ABE.SaveChanges();
                }
            }
            return View(Data);
        }



        public ActionResult Wsp_Report(string state, string dist, string block, string gp)
        {
            if (state != "")
            {

                if (state != null)
                {
                    Session["UserId"] = "11";
                    Session["gstate"] = state;
                    Session["gdist"] = dist;
                    Session["gblock"] = block;
                    Session["ggram"] = gp;
                    Session["year"] = "2023-24";
                    Session["Email"] = "testing@gmail.com";
                    Session["UserName"] = "Test";
                }
                else
                {
                    Session["UserId"] = "243";
                    Session["gstate"] = "Karnataka_29";
                    Session["gdist"] = "Chamarajanagara_531";
                    Session["gblock"] = "Gundlupet_5576";
                    Session["ggram"] = "Berambadi_216719";
                    Session["year"] = "2023-24";
                    Session["Email"] = "Testing";
                    Session["UserName"] = "Test";
                }
            }
            return View();
        }

        public ActionResult CheckEmailFormat(string email)
        {

            var users = ABE.objUsers.Where(x => x.Email == email).FirstOrDefault();
            string BasePath = AppDomain.CurrentDomain.BaseDirectory;
            string path = "https://ataljal-mis.mowr.gov.in/Images/atal_jal_logo.png";

            string[] uuu = Request.Url.AbsoluteUri.Split('/');
            string vertificatincode = uuu[0] + "//" + uuu[2] + "/Home/Verify?code=";
            string subject = "Successful Registration for MIS under ATAL BHUJAL YOJANA - Email Verification Required";
            //var imageString = string.Format("data:image/png;base64,{0}", Convert.ToBase64String(CompanyLogo));
            string NodalOfficer_mail = "Gram Panchayat Level Nodal Officer";
            string Verify = uuu[0] + "//" + uuu[2] + "/WspNew/MIS_VerifiedEmail?code=";
            StringBuilder sb = new StringBuilder();

            sb.Append("<p>Dear Sir/Madam,</p>");
            sb.Append("<br>");
            sb.Append("<p>We are pleased to inform you that your registration for the Management Information System (MIS) under the Atal Bhujal Yojana (ATAL BHUJAL YOJANA) for <b> " + NodalOfficer_mail + " </b>has been successfully received. However, before you can access the system and start benefiting from its features, we kindly request you to verify your email address.</p>");
            sb.Append("<p><b>To verify your email address, please follow these steps:</b></p>");
            sb.Append("<p>1. Click on the &quot;Verify&quot; button provided in this email.</p>");
            sb.Append("<p>2. You will be directed to a confirmation page.</p>");
            sb.Append("<p>3. Once on the confirmation page, your email address will be successfully verified.</p>");
            sb.Append("<p>Please note that your registration and credentials will be approved by the State level nodal officer after your email is verified. Once this approval process is complete, you will receive an additional confirmation email.</p>");
            sb.Append($"<a href='{Verify}' class='btn btn-primary' style='background-color:#5cb85c; display:inline-block; font-family: sans-serif; font-size: 15px; line-height: 15px; text-decoration: none; padding: 13px 17px; color: #ffffff; border-radius: 4px;margin-right: 10px;'>Verify</a>");
            sb.Append("<br>");
            sb.Append("<br>");
            sb.Append("<img src='" + path + "' border='0' style='margin-top: 5px; width: 100px; height: 100px; margin-left: 5px; margin-bottom: 5px;'>");

            string results = WebConstents.SendEmailSMTP(email, "", subject, sb.ToString(), "");

            sb.Clear();


            string subject1 = "Successful verify your email";

            sb.Append("<p>Dear Sir/Madam,</p>");
            sb.Append("<br>");
            sb.Append("<p>Thank you for the email verification. Once the credential is authenticated by your <b>State-Level Officer</b>, you will receive a confirmation email with your login credentials.</p>");

            sb.Append("<br>");
            sb.Append("<img src='" + path + "' border='0' style='margin-top: 5px; width: 100px; height: 100px; margin-left: 5px; margin-bottom: 5px;'>");

            string results2 = WebConstents.SendEmailSMTP(email, "", subject1, sb.ToString(), "");

            sb.Clear();


            string Approved = uuu[0] + "//" + uuu[2] + "/Home/MIS_Registration_Aprroved?code=";
            //string GrievancePending = uuu[0] + "//" + uuu[2] + "/Grievance/GrievancePending?code=" + sth;
            string Decline = uuu[0] + "//" + uuu[2] + "/Home/MIS_Registration_Decline?code=";
            string subject2 = "Approval for Registered User (Gram Panchayat Nodal Officer ) for MIS under ATAL BHUJAL YOJANA";




            sb.Append("<body style='background:#dfdfdf;'>");

            sb.Append("<div style='border: 1px solid green; padding:25px;'>");
            sb.Append("<p>Dear Sir/Madam,</p>");
            sb.Append("<div>");
            sb.Append("<p>With the below-mentioned details,<b> " + NodalOfficer_mail + " </b> has successfully registered himself for MIS under Atal Bhujal Yojana. Please verify the details and approve or reject them by clicking on the buttons shown below.</p>");
            sb.Append("<br>");
            sb.Append("<b>User Name:  " + users.UserName + ",</b>");
            sb.Append("</div>");
            sb.Append("<br>");
            sb.Append("<br>");
            sb.Append("<br>");

            sb.Append("<table role='presentation' style='margin-left:50px;border: 1px solid black;border-collapse: collapse; padding:5px 10px'>");
            sb.Append("<tbody>");
            sb.Append("</tr>");
            sb.Append("<th style='border: 1px solid black;border-collapse: collapse;text-align: left; text-transform: capitalize; padding:5px 10px'>");
            sb.Append("<b> <span style='color:#337ab7'> Nodal officer : </span> " + users.NodalOfficer + "</b>");
            sb.Append("</th>");
            sb.Append("<th style='border: 1px solid black;border-collapse: collapse; text-align: left; text-transform: capitalize;  padding:5px 10px'>");
            sb.Append("<b>  <span style='color:#337ab7'>State : </span>" + users.StateName + "</b>");
            sb.Append("</th>");
            sb.Append("</tr>");

            sb.Append("<tr>");
            sb.Append("<th style='border: 1px solid black;border-collapse: collapse; text-align: left; text-transform: capitalize;  padding:5px 10px'>");
            sb.Append("<b> <span style='color:#337ab7'> District :</span> " + users.DistrictName + "</b>");
            sb.Append("</th>");
            sb.Append("<th style='border: 1px solid black;border-collapse: collapse; text-align: left; text-transform: capitalize;  padding:5px 10px'>");
            sb.Append("<b><span style='color:#337ab7'> Block :</span> " + users.BlockName + "</b>");
            sb.Append("</th>");
            sb.Append("</tr >");

            sb.Append("<tr>");

            sb.Append("<th style='border: 1px solid black;border-collapse: collapse; text-align: left; text-transform: capitalize;  padding:5px 10px'>");
            sb.Append("<b> <span style='color:#337ab7'>Gram Panchayat : </span> " + users.GramPanchayatName + "</b>");
            sb.Append("</th>");
            sb.Append("<th style='border: 1px solid black;border-collapse: collapse; text-align: left; text-transform: capitalize;  padding:5px 10px'>");
            sb.Append("<b> <span style='color:#337ab7'>Email :</span> " + users.Email + "</b>");
            sb.Append("</th>");
            sb.Append("</tr>");

            sb.Append("<tr>");

            sb.Append("<th style='border: 1px solid black;border-collapse: collapse; text-align: left; text-transform: capitalize;  padding:5px 10px'>");
            sb.Append("<b> <span style='color:#337ab7'> Department Name : </span> " + users.DepartmentName + "</b>");
            sb.Append("</th>");
            sb.Append("<th style='border: 1px solid black;border-collapse: collapse; text-align: left; text-transform: capitalize;  padding:5px 10px'>");
            sb.Append("<b> <span style='color:#337ab7'> Contact Number : </span> " + users.ContactNumber + "</b>");
            sb.Append("</th>");
            sb.Append("</tr>");

            sb.Append("<br>");
            sb.Append("<br>");
            sb.Append("</tr>");
            sb.Append("</tbody>");


            sb.Append("</table>");
            sb.Append("<br>");
            sb.Append($"<a href='{Approved}' class='btn btn-primary' style='background-color:#5cb85c; display:inline-block; font-family: sans-serif; font-size: 15px; line-height: 15px; text-decoration: none; padding: 13px 17px; color: #ffffff; border-radius: 4px;margin-right: 10px;'>Approve</a>");


            sb.Append($"<a href='{Decline}' class=' btn btn-danger' style='background-color:#f0ad4e; display:inline-block; font-family: sans-serif; font-size: 15px; line-height: 15px; text-decoration: none; padding: 13px 17px; color: #ffffff; border-radius: 4px;'>Decline</a>");
            sb.Append("<img src='" + path + "' border='0' style='margin-top: 5px; width: 100px; height: 100px; margin-left: 5px; margin-bottom: 5px;'>");
            sb.Append("</div>");



            string results1 = WebConstents.SendEmailSMTP(email, "", subject2, sb.ToString(), "");
            sb.Clear();


            string subject3 = "User registered credential approved by State Level Nodal Officer";

            sb.Append("<p>Dear Sir/Madam,</p>");
            sb.Append("<br>");
            sb.Append("<p>Your registered credentials for <b> " + NodalOfficer_mail + " </b> has been verified and approved by the State Level Nodal Officer. Now you can login to MIS with the below-mentioned credentials.</p>");
            sb.Append("<p><b>Credential is:-</b></p>");
            sb.Append("<p><b>Email ID:" + users.Email + "</b></p>");
            sb.Append("<p><b>Password: " + users.Villagename + "</b></p>");
            sb.Append("<br>");
            sb.Append("<img src='" + path + "' border='0' style='margin-top: 5px; width: 100px; height: 100px; margin-left: 5px; margin-bottom: 5px;'>");

            string results3 = WebConstents.SendEmailSMTP(email, "", subject3, sb.ToString(), "");

            sb.Clear();


            string subject4 = "Gram Panchayat Nodal Officer credential rejected for MIS under ATAL BHUJAL YOJANA";

            sb.Append("<p>Dear Sir/Madam,</p>");
            sb.Append("<br>");
            sb.Append("<p>Your registered credentials for " + NodalOfficer_mail + " has been rejected by the State Level Nodal Officer. If you have any queries, please contact your <b> state-level nodal officer </b>.</p>");
            sb.Append("<br>");
            sb.Append("<img src='" + path + "' border='0' style='margin-top: 5px; width: 100px; height: 100px; margin-left: 5px; margin-bottom: 5px;'>");

            string results4 = WebConstents.SendEmailSMTP(email, "", subject4, sb.ToString(), "");

            return RedirectToAction("WSP_GWM_HOME", "WspNew");
        }
    }
}