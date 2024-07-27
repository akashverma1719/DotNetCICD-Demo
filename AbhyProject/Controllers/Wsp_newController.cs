using AbhyProject.Models;
using DocumentFormat.OpenXml.Drawing;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.IO;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;
using System.Text.RegularExpressions;
using AbhyProject.Classes;

namespace AbhyProject.Controllers
{
    public class Wsp_newController : Controller
    {
        AbhyEntity ABE = new AbhyEntity();
        AtaljalEntity AJE = new AtaljalEntity();
        // GET: Wsp_new
        public ActionResult Index()
        {
            if (Session["UserId"] != null)
            {

                return View();
            }
            else
            {
                return RedirectToAction("WSP_GWM_HOME", "WSPNew");
            }
        }
        public ActionResult WSPHOME()
        {
            //ViewBag.GPLIst = ABE.objUsers.ToList();
            return View();
        }
        public ActionResult WSPgram()
        {

            return View();

        }
        public ActionResult TotalReportwsp()
        {

            return View();


        }
        public ActionResult WSpGramreport()
        {

            return View();

        }

        [HttpGet]
        public ActionResult Get_gp_block_area()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString().Trim();
                    var Dist = Session["gdist"].ToString().Trim();
                    var Block = Session["gblock"].ToString().Trim();
                    var Gram = Session["ggram"].ToString().Trim();
                    var ddetails = ABE.obj_abhy_block_gp_area_info.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gram_panchayat_name == Gram).ToList();//total list


                    return Json(ddetails, JsonRequestBehavior.AllowGet);
                }
                catch (Exception Ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
                // return RedirectToAction("WSP_GWM_HOME", "WSPNew");
            }
        }

        [HttpGet]
        public ActionResult Social_Monitor_Details()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_wsp_socialmonitoring> ddetails = new List<abhy_wsp_socialmonitoring>();


                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "" && Gram != null)
                    {
                        ddetails = ABE.obj_abhy_wsp_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        ddetails = ABE.obj_abhy_wsp_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        ddetails = ABE.obj_abhy_wsp_socialmonitoring.Where(x => x.state == State && x.district == Dist).ToList();//total list

                    }
                    else if (State != "" && State != null)
                    {
                        ddetails = ABE.obj_abhy_wsp_socialmonitoring.Where(x => x.state == State).ToList();//total list

                    }
                    return Json(ddetails, JsonRequestBehavior.AllowGet);
                }
                catch (Exception Ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
                // return RedirectToAction("WSP_GWM_HOME", "WSPNew");
            }
        }


        [HttpGet]
        public ActionResult Social_Monitor_Details_website()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_wsp_socialmonitoring> ddetails = new List<abhy_wsp_socialmonitoring>();


                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();

                    if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null && Gram != "" && Gram != null)
                    {
                        ddetails = ABE.obj_abhy_wsp_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram).ToList();//total list

                    }
                    else if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null)
                    {
                        ddetails = ABE.obj_abhy_wsp_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block).ToList();//total list

                    }
                    else if (State != "" && State != null && Dist != "" && Dist != null)
                    {
                        ddetails = ABE.obj_abhy_wsp_socialmonitoring.Where(x => x.state == State && x.district == Dist).ToList();//total list

                    }
                    else if (State != "" && State != null)
                    {
                        ddetails = ABE.obj_abhy_wsp_socialmonitoring.Where(x => x.state == State).ToList();//total list

                    }

                    if (ddetails.Count == 1)
                    {
                        if (ddetails[0].image != null && ddetails[0].image != "")
                        {
                            string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                            string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");
                            string File_path = path + ddetails[0].photogragh_filename;
                            ddetails[0].image = "/Ataljalimages/" + ddetails[0].photogragh_filename;
                            //string base64 = Image_Url_base64(File_path);
                            //ddetails[0].image = base64;
                        }


                        var resultdata = Json(ddetails[0], JsonRequestBehavior.AllowGet);
                        resultdata.MaxJsonLength = int.MaxValue;
                        return resultdata;
                    }
                    else
                    {


                        var resultdata = Json(ddetails, JsonRequestBehavior.AllowGet);
                        resultdata.MaxJsonLength = int.MaxValue;
                        return resultdata;
                    }
                }
                catch (Exception Ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
                // return RedirectToAction("WSP_GWM_HOME", "WSPNew");
            }
        }

        [HttpPost]
        public ActionResult Social_Monitoring_info(/*HttpPostedFileBase sm_meeting_agenda,*/ HttpPostedFileBase sm_mom, HttpPostedFileBase sm_photoshop, string sm_location, string numberofattendees, string sm_male, string sm_female, string sm_latitude, string sm_longitude, string sm_date)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    ///JavaScriptSerializer js = new JavaScriptSerializer();

                    abhy_wsp_socialmonitoring obj = new abhy_wsp_socialmonitoring();
                    List<abhy_wsp_socialmonitoring> ddetails = new List<abhy_wsp_socialmonitoring>();
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        ddetails = ABE.obj_abhy_wsp_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        ddetails = ABE.obj_abhy_wsp_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null )
                    {
                        ddetails = ABE.obj_abhy_wsp_socialmonitoring.Where(x => x.state == State && x.district == Dist).ToList();//total list

                    }
                    else if (State != "" && State != null )
                    {
                        ddetails = ABE.obj_abhy_wsp_socialmonitoring.Where(x => x.state == State).ToList();//total list

                    }
                    //Malicious_File_Upload_Restriction obj_Validate = new Malicious_File_Upload_Restriction();
                    //string allowed_file_format = "jpg,png,jpeg,pdf,dox";
                    //bool flag = obj_Validate.CheckValidFile(sm_mom, allowed_file_format);
                    //if (flag == false)
                    //{
                    //    return Json("Your Upload file has Not valid File, Please Upload proper file", JsonRequestBehavior.AllowGet);
                    //}
                    //Malicious_File_Upload_Restriction obj_Validate1 = new Malicious_File_Upload_Restriction();
                    //string allowed_file_format1 = "jpg,png,jpeg";
                    //bool flag1 = obj_Validate1.CheckValidFile(sm_photoshop, allowed_file_format1);
                    //if (flag1 == false)
                    //{
                    //    return Json("Your Upload file has Not valid File, Please Upload proper file", JsonRequestBehavior.AllowGet);
                    //}
                    if (ddetails.Count == 1)
                    {
                        var abc = ddetails[0];
                        var Dataa = abc;

                        Dataa.state = State;
                        Dataa.block = Block;
                        Dataa.date = sm_date;
                        Dataa.district = Dist;
                        Dataa.female = sm_female;
                        Dataa.grampanchayat = Gram;
                        Dataa.latitude = sm_latitude;
                        Dataa.location = sm_location;
                        Dataa.longitude = sm_longitude;
                        Dataa.male = sm_male;
                        Dataa.numberofattendees = numberofattendees;

                        string File_path = "";
                        //if (sm_meeting_agenda != null)
                        //{
                        //    if (sm_meeting_agenda.FileName != null)
                        //    {
                        //        // String FileExt = Path.GetExtension(sm_meeting_agenda.FileName).ToUpper();

                        //        string path = @"D:\Ataljal_grievnce\";
                        //        path = path + sm_meeting_agenda.FileName;
                        //        sm_meeting_agenda.SaveAs(path);
                        //        File_path = path.Replace("D:\\Ataljal_grievnce\\", "http://54.221.131.231:8014/ataljalimages/");

                        //        Dataa.agenda = File_path;
                        //        File_path = "";
                        //    }
                        //}
                        string Add_dt = DateTime.Now.ToString();
                        if (Add_dt.Contains('-') || Add_dt.Contains('/') || Add_dt.Contains(' ') || Add_dt.Contains(':'))
                        {
                            //Add_dt = Regex.Replace(Add_dt, @"(\[|""|\-])", "");
                            Add_dt = Add_dt.Replace(@"\", string.Empty);
                            Add_dt = Add_dt.Replace(@"/", string.Empty);
                            Add_dt = Add_dt.Replace(@"-", string.Empty);
                            Add_dt = Add_dt.Replace(@" ", string.Empty);
                            Add_dt = Add_dt.Replace(@":", string.Empty);
                        }
                        if (sm_mom != null)
                        {
                            if (sm_mom.FileName != null)
                            {

                                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");

                                if (!Directory.Exists(path))
                                {
                                    Directory.CreateDirectory(path);
                                }
                                string[] Ext = sm_mom.FileName.Split('.');

                                path = path + Ext[0] + "_" + Add_dt + "." + Ext[1];
                                //string[] count = sm_mom.FileName.Split('.');
                                //if (count.Length != 2)
                                //{
                                //    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                //}
                                sm_mom.SaveAs(path);
                                // File_path = path.Replace("D:\\Ataljal_grievnce\\", "http://54.221.131.231:8014/ataljalimages/");
                                //File_path = path.Replace("D:\\Ataljal_grievnce\\", "~/Ataljalimages/");

                                File_path = "/Ataljalimages/" + Ext[0] + "_" + Add_dt + "." + Ext[1];
                                Dataa.minutesofmeeting = File_path;
                                Dataa.mom_filename = (Ext[0] + "_" + Add_dt + "." + Ext[1]).ToString();
                                File_path = "";
                            }
                        }

                        if (sm_photoshop != null)
                        {
                            if (sm_photoshop.FileName != null)
                            {

                                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");

                                if (!Directory.Exists(path))
                                {
                                    Directory.CreateDirectory(path);
                                }

                                string[] Ext = sm_photoshop.FileName.Split('.');
                                path = path + Ext[0] + "_" + Add_dt + "." + Ext[1];

                                //path = path + sm_photoshop.FileName;
                                //string[] count = sm_photoshop.FileName.Split('.');
                                //if (count.Length != 2)
                                //{
                                //    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                //}
                                sm_photoshop.SaveAs(path);
                                // File_path = path.Replace("D:\\Ataljal_grievnce\\", "http://54.221.131.231:8014/ataljalimages/");
                                //File_path = path.Replace("D:\\Ataljal_grievnce\\", "~/Ataljalimages/");
                                File_path = "/Ataljalimages/" + Ext[0] + "_" + Add_dt + "." + Ext[1];
                                Dataa.image = File_path;
                                Dataa.photogragh_filename = (Ext[0] + "_" + Add_dt + "." + Ext[1]);
                                File_path = "";
                            }
                        }

                        ABE.Entry(Dataa).State = EntityState.Modified;
                        ABE.SaveChanges();
                        return Json("Successfully Saved");
                    }
                    else
                    {
                        if (ddetails.Count == 0)
                        {
                            obj.state = State;
                            obj.block = Block;
                            obj.date = sm_date;
                            obj.district = Dist;
                            obj.female = sm_female;
                            obj.grampanchayat = Gram;
                            obj.latitude = sm_latitude;
                            obj.location = sm_location;
                            obj.longitude = sm_longitude;
                            obj.male = sm_male;
                            obj.numberofattendees = numberofattendees;

                            string File_path = "";
                            //if (sm_meeting_agenda != null)
                            //{
                            //    if (sm_meeting_agenda.FileName != null)
                            //    {
                            //        // String FileExt = Path.GetExtension(sm_meeting_agenda.FileName).ToUpper();

                            //        string path = @"D:\Ataljal_grievnce\";
                            //        path = path + sm_meeting_agenda.FileName;
                            //        sm_meeting_agenda.SaveAs(path);
                            //        File_path = path.Replace("D:\\Ataljal_grievnce\\", "http://54.221.131.231:8014/ataljalimages/");

                            //        obj.agenda = File_path;
                            //        File_path = "";
                            //    }
                            //}

                            if (sm_mom != null)
                            {
                                if (sm_mom.FileName != null)
                                {
                                    string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                    string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");

                                    if (!Directory.Exists(path))
                                    {
                                        Directory.CreateDirectory(path);
                                    }
                                    path = path + sm_mom.FileName;
                                    //string[] count = sm_mom.FileName.Split('.');
                                    //if (count.Length != 2)
                                    //{
                                    //    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                    //}
                                    sm_mom.SaveAs(path);
                                    // File_path = path.Replace("D:\\Ataljal_grievnce\\", "http://54.221.131.231:8014/ataljalimages/");
                                    //File_path = path.Replace("D:\\Ataljal_grievnce\\", "~/Ataljalimages/");

                                    File_path = "/Ataljalimages/" + sm_mom.FileName;
                                    obj.minutesofmeeting = File_path;
                                    obj.mom_filename = sm_mom.FileName;
                                    File_path = "";
                                }
                            }

                            if (sm_photoshop != null)
                            {
                                if (sm_photoshop.FileName != null)
                                {

                                    string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                    string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");

                                    if (!Directory.Exists(path))
                                    {
                                        Directory.CreateDirectory(path);
                                    }
                                    path = path + sm_photoshop.FileName;
                                    //string[] count = sm_mom.FileName.Split('.');
                                    //if (count.Length != 2)
                                    //{
                                    //    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                    //}
                                    sm_photoshop.SaveAs(path);
                                    // File_path = path.Replace("D:\\Ataljal_grievnce\\", "http://54.221.131.231:8014/ataljalimages/");
                                    //File_path = path.Replace("D:\\Ataljal_grievnce\\", "~/Ataljalimages/");
                                    File_path = "/Ataljalimages/" + sm_photoshop.FileName;
                                    obj.image = File_path;
                                    obj.photogragh_filename = sm_photoshop.FileName;
                                    File_path = "";
                                }
                            }

                            ABE.obj_abhy_wsp_socialmonitoring.Add(obj);
                            ABE.SaveChanges();
                            return Json("Successfully Saved");
                        }
                        else
                        {
                            return Json("Duplicate Data is there");
                        }


                    }


                }
                catch (Exception Ex)
                {
                    return Json(Ex.GetBaseException().ToString(), JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }


        }

        //[HttpPost]
        //public ActionResult Social_Monitoring_info(/*HttpPostedFileBase sm_meeting_agenda,*/ HttpPostedFileBase sm_mom, HttpPostedFileBase sm_photoshop, string sm_location, string numberofattendees, string sm_male, string sm_female, string sm_latitude, string sm_longitude, string sm_date)
        //{
        //    if (Session["UserId"] != null)
        //    {
        //        try
        //        {
        //            ///JavaScriptSerializer js = new JavaScriptSerializer();

        //            socialmonitoring obj = new socialmonitoring();
        //            List<socialmonitoring> ddetails = new List<socialmonitoring>();
        //            var State = Session["gstate"].ToString();
        //            var Dist = Session["gdist"].ToString();

        //            var Block = Session["gblock"].ToString();
        //            var Gram = Session["ggram"].ToString();

        //            if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null && Gram != "" && Gram != null)
        //            {
        //                ddetails = AJE.obj_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram && x.status != "Mobile App").ToList();//total list

        //            }
        //            else if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null)
        //            {
        //                ddetails = AJE.obj_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block && x.status != "Mobile App").ToList();//total list

        //            }
        //            else if (State != "" && State != null && Dist != "" && Dist != null)
        //            {
        //                ddetails = AJE.obj_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.status != "Mobile App").ToList();//total list

        //            }
        //            else if (State != "" && State != null)
        //            {
        //                ddetails = AJE.obj_socialmonitoring.Where(x => x.state == State && x.status != "Mobile App").ToList();//total list

        //            }
        //            if (ddetails.Count != 0)
        //            {
        //                var abc = ddetails[0];
        //                var Dataa = abc;
        //                Dataa.officer_name = Session["Officer"].ToString();
        //                Dataa.state = State;
        //                Dataa.block = Block;
        //                Dataa.date = sm_date;
        //                Dataa.district = Dist;
        //                Dataa.female = sm_female;
        //                Dataa.grampanchayat = Gram;
        //                Dataa.latitude = sm_latitude;
        //                Dataa.location = sm_location;
        //                Dataa.longitude = sm_longitude;
        //                Dataa.male = sm_male;
        //                Dataa.numberofattendees = numberofattendees;
        //                Dataa.status = "";

        //                string File_path = "";
        //                //if (sm_meeting_agenda != null)
        //                //{
        //                //    if (sm_meeting_agenda.FileName != null)
        //                //    {
        //                //        // String FileExt = Path.GetExtension(sm_meeting_agenda.FileName).ToUpper();

        //                //        string path = @"D:\Ataljal_grievnce\";
        //                //        path = path + sm_meeting_agenda.FileName;
        //                //        sm_meeting_agenda.SaveAs(path);
        //                //        File_path = path.Replace("D:\\Ataljal_grievnce\\", "http://54.221.131.231:8014/ataljalimages/");

        //                //        Dataa.agenda = File_path;
        //                //        File_path = "";
        //                //    }
        //                //}

        //                if (sm_mom != null)
        //                {
        //                    if (sm_mom.FileName != null)
        //                    {

        //                        string path = @"D:\Ataljal_grievnce\";
        //                        path = path + sm_mom.FileName;
        //                        sm_mom.SaveAs(path);
        //                        // File_path = path.Replace("D:\\Ataljal_grievnce\\", "http://54.221.131.231:8014/ataljalimages/");
        //                        File_path = path.Replace("D:\\Ataljal_grievnce\\", "~/Ataljalimages/");
        //                        Dataa.minutesofmeeting = File_path;
        //                        Dataa.mom_filename = sm_mom.FileName;
        //                        File_path = "";
        //                    }
        //                }

        //                if (sm_photoshop != null)
        //                {
        //                    if (sm_photoshop.FileName != null)
        //                    {

        //                        string path = @"D:\Ataljal_grievnce\";
        //                        path = path + sm_photoshop.FileName;
        //                        sm_photoshop.SaveAs(path);
        //                        //File_path = path.Replace("D:\\Ataljal_grievnce\\", "http://54.221.131.231:8014/ataljalimages/");
        //                        File_path = path.Replace("D:\\Ataljal_grievnce\\", "~/Ataljalimages/");
        //                        Dataa.image = File_path;
        //                        Dataa.photogragh_filename = sm_photoshop.FileName;
        //                        File_path = "";
        //                    }
        //                }

        //                AJE.Entry(Dataa).State = EntityState.Modified;
        //                AJE.SaveChanges();
        //                return Json("Successfully Saved");
        //            }
        //            else
        //            {
        //                obj.officer_name = Session["Officer"].ToString();
        //                obj.state = State;
        //                obj.block = Block;
        //                obj.date = sm_date;
        //                obj.district = Dist;
        //                obj.female = sm_female;
        //                obj.grampanchayat = Gram;
        //                obj.latitude = sm_latitude;
        //                obj.location = sm_location;
        //                obj.longitude = sm_longitude;
        //                obj.male = sm_male;
        //                obj.numberofattendees = numberofattendees;
        //                obj.status = "";

        //                string File_path = "";
        //                //if (sm_meeting_agenda != null)
        //                //{
        //                //    if (sm_meeting_agenda.FileName != null)
        //                //    {
        //                //        // String FileExt = Path.GetExtension(sm_meeting_agenda.FileName).ToUpper();

        //                //        string path = @"D:\Ataljal_grievnce\";
        //                //        path = path + sm_meeting_agenda.FileName;
        //                //        sm_meeting_agenda.SaveAs(path);
        //                //        File_path = path.Replace("D:\\Ataljal_grievnce\\", "http://54.221.131.231:8014/ataljalimages/");

        //                //        obj.agenda = File_path;
        //                //        File_path = "";
        //                //    }
        //                //}

        //                if (sm_mom != null)
        //                {
        //                    if (sm_mom.FileName != null)
        //                    {

        //                        string path = @"D:\Ataljal_grievnce\";
        //                        path = path + sm_mom.FileName;
        //                        sm_mom.SaveAs(path);
        //                        // File_path = path.Replace("D:\\Ataljal_grievnce\\", "http://54.221.131.231:8014/ataljalimages/");
        //                        File_path = path.Replace("D:\\Ataljal_grievnce\\", "~/Ataljalimages/");
        //                        obj.minutesofmeeting = File_path;
        //                        obj.mom_filename = sm_mom.FileName;
        //                        File_path = "";
        //                    }
        //                }

        //                if (sm_photoshop != null)
        //                {
        //                    if (sm_photoshop.FileName != null)
        //                    {

        //                        string path = @"D:\Ataljal_grievnce\";
        //                        path = path + sm_photoshop.FileName;
        //                        sm_photoshop.SaveAs(path);
        //                        // File_path = path.Replace("D:\\Ataljal_grievnce\\", "http://54.221.131.231:8014/ataljalimages/");
        //                        File_path = path.Replace("D:\\Ataljal_grievnce\\", "~/Ataljalimages/");
        //                        obj.image = File_path;
        //                        obj.photogragh_filename = sm_photoshop.FileName;
        //                        File_path = "";
        //                    }
        //                }

        //                AJE.obj_socialmonitoring.Add(obj);
        //                AJE.SaveChanges();
        //                return Json("Successfully Saved");
        //            }


        //        }
        //        catch (Exception Ex)
        //        {
        //            return Json(Ex, JsonRequestBehavior.AllowGet);
        //        }
        //    }
        //    else
        //    {
        //        return Json("Logout", JsonRequestBehavior.AllowGet);
        //    }


        //}



        [HttpPost]
        public ActionResult PGWN_DepetDetails(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {


                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<PGWN_Department_Details>(Data);
                    PGWN_Department_Details obj = new PGWN_Department_Details();
                    obj.state_name = result.state_name.Trim();
                    obj.district_name = result.district_name.Trim();

                    obj.block = result.block.Trim();
                    obj.gname = result.gname.Trim();
                    var TodayDate1 = DateTime.Now.ToString();
                    var Datea = TodayDate1.Split('-', ' ');
                    var Today1 = Datea[0] + '/' + Datea[1] + '/' + Datea[2];
                    obj.villname = result.villname;
                    if (result.designation != "" && result.designation != null)
                    {
                        obj.designation = result.designation;
                    }
                    else
                    {
                        return Json("Please Enter Designation");
                    }


                    if (result.department != "0" && result.department != "" && result.department != null)
                    {
                        obj.department = result.department;
                    }
                    else
                    {
                        return Json("Please Select Social Organization");
                    }

                    if (result.countname != "" && result.countname != null)
                    {
                        obj.countname = result.countname;
                    }
                    else
                    {
                        return Json("Please Enter Name");
                    }

                    if (result.gender != "0" && result.gender != "" && result.gender != null)
                    {
                        obj.gender = result.gender;
                    }
                    else
                    {
                        return Json("Please Select Gender");
                    }
                    obj.todaydate = Today1;
                    obj.userid = Session["UserId"].ToString();
                    ABE.objPGWN_Department_Details.Add(obj);
                    ABE.SaveChanges();
                    return Json("Successfully Saved");

                }
                catch (Exception Ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }


        }


        [HttpGet]
        public ActionResult pgwn_Depdetails(string state, string dist, string block, string gram, string vill)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<PGWN_Department_Details> TDetails = new List<PGWN_Department_Details>();
                    if (state != "" && dist != "" && block != "" && gram != "" && vill != "")
                    {
                        TDetails = ABE.objPGWN_Department_Details.Where(x => x.state_name == state && x.district_name == dist && x.block == block && x.gname == gram && x.villname == vill).ToList();
                    }
                    else if (state != "" && dist != "" && block != "" && gram != "")
                    {
                        TDetails = ABE.objPGWN_Department_Details.Where(x => x.state_name == state.Trim() && x.district_name == dist.Trim() && x.block == block.Trim() && x.gname == gram.Trim()).ToList();
                    }
                    else if (state != "" && dist != "" && block != "")
                    {
                        TDetails = ABE.objPGWN_Department_Details.Where(x => x.state_name == state && x.district_name == dist && x.block == block).ToList();
                    }
                    else if (state != "" && dist != "")
                    {
                        TDetails = ABE.objPGWN_Department_Details.Where(x => x.state_name == state && x.district_name == dist).ToList();
                    }
                    else
                    {
                        TDetails = ABE.objPGWN_Department_Details.Where(x => x.state_name == state).ToList();
                    }


                    return Json(TDetails, JsonRequestBehavior.AllowGet);
                }
                catch (Exception Ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }
        [HttpPost]
        public ActionResult DeletePGWNDeptDetail(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<PGWN_Department_Details>(Data);

                    if (result.pgwndeptid != 0)
                    {
                        var TKID = Convert.ToInt32(result.pgwndeptid);
                        var Data1 = ABE.objPGWN_Department_Details.Where(x => x.pgwndeptid == TKID).SingleOrDefault();
                        if (Data1 != null)
                        {

                            ABE.Entry(Data1).State = EntityState.Deleted;
                            ABE.SaveChanges();
                            return Json("Deleted Successfully");
                        }
                        else
                        {
                            return Json("Error", JsonRequestBehavior.AllowGet);
                        }


                    }
                    else
                    {
                        return Json("No Data", JsonRequestBehavior.AllowGet);
                    }
                }
                catch (Exception Ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }

        }
        public ActionResult Balancereport()
        {

            return View();

        }
        public ActionResult waterAval_report()
        {

            return View();

        }
        public ActionResult WaterDraft_report()
        {

            return View();

        }

        [HttpGet]
        public ActionResult GrampanchayatDetails()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_gpdata_new> ddetails = new List<abhy_gpdata_new>();


                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString().Trim();
                    var Dist = Session["gdist"].ToString().Trim();

                    var Block = Session["gblock"].ToString().Trim();
                    var Gram = Session["ggram"].ToString().Trim();

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        ddetails = ABE.obj_abhy_gpdata_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gram_panchayat_name == Gram).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        ddetails = ABE.obj_abhy_gpdata_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        ddetails = ABE.obj_abhy_gpdata_new.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                    }
                    else if (State != "" && State != null)
                    {
                        ddetails = ABE.obj_abhy_gpdata_new.Where(x => x.state_name == State).ToList();//total list

                    }
                    return Json(ddetails, JsonRequestBehavior.AllowGet);
                }
                catch (Exception Ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
                // return RedirectToAction("WSP_GWM_HOME", "WSPNew");
            }
        }

        [HttpGet]
        public ActionResult GrampanchayatDetails_StateWise()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_gpdata_new> ddetails = new List<abhy_gpdata_new>();


                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    if (State != "" && State != null)
                    {
                        ddetails = ABE.obj_abhy_gpdata_new.Where(x => x.state_name == State).ToList();//total list

                    }
                    return Json(ddetails, JsonRequestBehavior.AllowGet);
                }
                catch (Exception Ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
                // return RedirectToAction("WSP_GWM_HOME", "WSPNew");
            }
        }



        [HttpPost]
        public ActionResult SaveGrampanchayatDetails(string Data)
        {
            if (Session["UserId"] != null)
            {
                List<abhy_gpdata_new> ddetails = new List<abhy_gpdata_new>();
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<abhy_gpdata_new>(Data);
                abhy_gpdata_new obj = new abhy_gpdata_new();
                var State = Session["gstate"].ToString().Trim();
                var Dist = Session["gdist"].ToString().Trim();

                var Block = Session["gblock"].ToString().Trim();
                var Gram = Session["ggram"].ToString().Trim();

                if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                {
                    ddetails = ABE.obj_abhy_gpdata_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gram_panchayat_name == Gram).ToList();//total list

                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                {
                    ddetails = ABE.obj_abhy_gpdata_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                {
                    ddetails = ABE.obj_abhy_gpdata_new.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                }
                else if (State != "" && State != null)
                {
                    ddetails = ABE.obj_abhy_gpdata_new.Where(x => x.state_name == State).ToList();//total list

                }
                if (ddetails.Count == 1)
                {
                    var ddetails1 = ddetails.SingleOrDefault();
                    ddetails1.state_name = State;
                    ddetails1.district_name = Dist;

                    if (result.basin_name != null && result.basin_name != "0" && result.basin_name.ToString().Trim() != "")
                    {
                        ddetails1.basin_name = result.basin_name;
                    }
                    else
                    {
                        return Json("Please Select Basin Name");
                    }
                    ddetails1.basin_code = result.basin_code;
                    if (result.block_area != null && result.block_area.ToString().Trim() != "")
                    {
                        ddetails1.block_area = result.block_area;
                    }
                    else
                    {
                        return Json("Please Enter Block Area (Ha)");
                    }

                    ddetails1.block_name = Block;

                    if (result.gp_area != null && result.gp_area.ToString().Trim() != "")
                    {
                        ddetails1.gp_area = result.gp_area;
                    }
                    else
                    {
                        return Json("Please Enter Gram Panchayat Area (Ha)");
                    }
                    ddetails1.gram_panchayat_name = Gram;
                    ddetails1.gp_id = result.gp_id;

                    if (result.sub_basin_name != null && result.sub_basin_name != "0" && result.sub_basin_name.ToString().Trim() != "")
                    {
                        ddetails1.sub_basin_name = result.sub_basin_name;
                    }
                    else
                    {
                        return Json("Please Select Sub Basin Name");
                    }
                    ddetails1.sub_basin_code = result.sub_basin_code;
                    ddetails1.watershed_area_block = result.watershed_area_block;

                    if (result.watershed_code != null && result.watershed_code.ToString().Trim() != "")
                    {
                        ddetails1.watershed_code = result.watershed_code;
                    }
                    else
                    {
                        return Json("Please Enter Watershed Code");
                    }
                    ddetails1.watershed_name = result.watershed_name;
                    ddetails1.userid = Convert.ToInt32(Session["UserId"]);
                    var TodayDate1 = DateTime.Now.ToString();
                    ddetails1.datetime = TodayDate1;
                    ABE.Entry(ddetails1).State = EntityState.Modified;
                    ABE.SaveChanges();
                    return Json("Successfully Saved");
                }
                else
                {
                    if (ddetails.Count == 0)
                    {

                        obj.state_name = State;
                        obj.district_name = Dist;

                        if (result.basin_name != null && result.basin_name.ToString().Trim() != "" && result.basin_name != "0")
                        {
                            obj.basin_name = result.basin_name;
                        }
                        else
                        {
                            return Json("Please Select Basin Name");
                        }
                        obj.basin_code = result.basin_code;

                        if (result.block_area != null && result.block_area.ToString().Trim() != "")
                        {
                            obj.block_area = result.block_area;
                        }
                        else
                        {
                            return Json("Please Enter Block Area (Ha)");
                        }
                        obj.block_name = Block;

                        if (result.gp_area != null && result.gp_area.ToString().Trim() != "")
                        {
                            obj.gp_area = result.gp_area;
                        }
                        else
                        {
                            return Json("Please Enter Gram Panchayat Area (Ha) ");
                        }
                        obj.gram_panchayat_name = Gram;
                        obj.gp_id = result.gp_id;

                        if (result.sub_basin_name != null && result.sub_basin_name != "0" && result.sub_basin_name.ToString().Trim() != "")
                        {
                            obj.sub_basin_name = result.sub_basin_name;
                        }
                        else
                        {
                            return Json("Please Select Sub Basin Name ");
                        }
                        obj.sub_basin_code = result.sub_basin_code;
                        obj.watershed_area_block = result.watershed_area_block;

                        if (result.watershed_code != null && result.watershed_code.ToString().Trim() != "")
                        {
                            obj.watershed_code = result.watershed_code;
                        }
                        else
                        {
                            return Json("Please Enter Watershed Code");
                        }
                        obj.watershed_name = result.watershed_name;
                        var TodayDate1 = DateTime.Now.ToString();
                        obj.datetime = TodayDate1;
                        obj.userid = Convert.ToInt32(Session["UserId"]);
                        ABE.obj_abhy_gpdata_new.Add(obj);
                        ABE.SaveChanges();
                        return Json("Successfully Saved");
                    }
                    else
                    {
                        return Json("Duplicate Records is there");
                    }
                }
            }
            else
            {
                Session["WSPHOME"] = "Data";
                return RedirectToAction("WSP_GWM_HOME", "WSPNew");
            }
        }


        [HttpGet]
        public ActionResult WaterDraftInfo_Details()
        {
            if (Session["UserId"] != null)
            {

                try
                {
                    List<abhy_waterdraft_new> ddetails = new List<abhy_waterdraft_new>();


                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();

                    if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null && Gram != "" && Gram != null)
                    {
                        ddetails = ABE.obj_abhy_waterdraft_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                    }
                    else if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null)
                    {
                        ddetails = ABE.obj_abhy_waterdraft_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                    }
                    else if (State != "" && State != null && Dist != "" && Dist != null)
                    {
                        ddetails = ABE.obj_abhy_waterdraft_new.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                    }
                    else if (State != "" && State != null)
                    {
                        ddetails = ABE.obj_abhy_waterdraft_new.Where(x => x.state_name == State).ToList();//total list

                    }
                    return Json(ddetails, JsonRequestBehavior.AllowGet);
                }
                catch (Exception ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }


        [HttpPost]
        public ActionResult WaterDraftInfo_InsertData(string Data)
        {
            if (Session["UserId"] != null)
            {
                List<abhy_waterdraft_new> ddetails = new List<abhy_waterdraft_new>();
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<abhy_waterdraft_new>(Data);
                abhy_waterdraft_new obj = new abhy_waterdraft_new();
                var State = Session["gstate"].ToString();
                var Dist = Session["gdist"].ToString();

                var Block = Session["gblock"].ToString();
                var Gram = Session["ggram"].ToString();

                if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null && Gram != "" && Gram != null)
                {
                    ddetails = ABE.obj_abhy_waterdraft_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                }
                else if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null)
                {
                    ddetails = ABE.obj_abhy_waterdraft_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                }
                else if (State != "" && State != null && Dist != "" && Dist != null)
                {
                    ddetails = ABE.obj_abhy_waterdraft_new.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                }
                else if (State != "" && State != null)
                {
                    ddetails = ABE.obj_abhy_waterdraft_new.Where(x => x.state_name == State).ToList();//total list

                }
                if (ddetails.Count == 1)
                {
                    var ddetails1 = ddetails.SingleOrDefault();
                    ddetails1.state_name = State;
                    ddetails1.district_name = Dist;
                    ddetails1.block_name = Block;
                    ddetails1.gpname = Gram;
                    ddetails1.latitude = result.latitude;
                    ddetails1.officer_name = Session["Officer"].ToString();
                    ddetails1.longitude = result.longitude;
                    ddetails1.domestic_people_count = result.domestic_people_count;
                    ddetails1.domestic_people_water_req = result.domestic_people_water_req;
                    ddetails1.domestic_buffalo_count = result.domestic_buffalo_count;
                    ddetails1.domestic_buffalo_water_req = result.domestic_buffalo_water_req;
                    ddetails1.domestic_bullocks_count = result.domestic_bullocks_count;
                    ddetails1.domestic_bullock_water_req = result.domestic_bullock_water_req;
                    ddetails1.domestic_cow_count = result.domestic_cow_count;
                    ddetails1.domestic_cow_water_req = result.domestic_cow_water_req;
                    ddetails1.domestic_sheeps_count = result.domestic_sheeps_count;
                    ddetails1.domestic_sheeps_water_req = result.domestic_sheeps_water_req;
                    ddetails1.domestic_goat_count = result.domestic_goat_count;
                    ddetails1.domestic_goat_water_req = result.domestic_goat_water_req;
                    ddetails1.domestic_donkey_count = result.domestic_donkey_count;
                    ddetails1.domestic_donkey_water_req = result.domestic_donkey_water_req;
                    ddetails1.domestic_camel_count = result.domestic_camel_count;
                    ddetails1.domestic_camel_water_req = result.domestic_camel_water_req;

                    ddetails1.domestic_annual_req_people = result.domestic_annual_req_people;
                    ddetails1.domestic_annual_req_livestock = result.domestic_annual_req_livestock;
                    ddetails1.domestic_demand_surface_water = result.domestic_demand_surface_water;
                    ddetails1.domestic_demand_ground_water = result.domestic_demand_ground_water;

                    ddetails1.domestic_demand_surface_water_livestock = result.domestic_demand_surface_water_livestock;
                    ddetails1.domestic_demand_ground_water_livestock = result.domestic_demand_ground_water_livestock;


                    ddetails1.irri_kharif_paddy_crop_area = result.irri_kharif_paddy_crop_area;
                    ddetails1.irri_kharif_paddy_waterdemand = result.irri_kharif_paddy_waterdemand;
                    ddetails1.irri_kharif_ragi_crop_area = result.irri_kharif_ragi_crop_area;
                    ddetails1.irri_kharif_ragi_waterdemand = result.irri_kharif_ragi_waterdemand;
                    ddetails1.irri_kharif_groundnut_crop_area = result.irri_kharif_groundnut_crop_area;
                    ddetails1.irri_kharif_groundnut_waterdemand = result.irri_kharif_groundnut_waterdemand;
                    ddetails1.irri_kharif_sugarcane_crop_area = result.irri_kharif_sugarcane_crop_area;
                    ddetails1.irri_kharif_sugarcane_waterdemand = result.irri_kharif_sugarcane_waterdemand;
                    ddetails1.irri_kharif_tomoto_crop_area = result.irri_kharif_tomoto_crop_area;
                    ddetails1.irri_kharif_tomoto_waterdemand = result.irri_kharif_tomoto_waterdemand;
                    // ddetails1.irri_kharif_cabbage_crop_area = result.irri_kharif_cabbage_crop_area;
                    // ddetails1.irri_kharif_cabbage_waterdemand = result.irri_kharif_cabbage_waterdemand;
                    // ddetails1.irri_kharif_beans_crop_area = result.irri_kharif_beans_crop_area;
                    // ddetails1.irri_kharif_beans_waterdemand = result.irri_kharif_beans_waterdemand;
                    ddetails1.irri_kharif_floriculture_crop_area = result.irri_kharif_floriculture_crop_area;
                    ddetails1.irri_kharif_floriculture_waterdemand = result.irri_kharif_floriculture_waterdemand;
                    ddetails1.irri_kharif_sericulture_crop_area = result.irri_kharif_sericulture_crop_area;
                    ddetails1.irri_kharif_sericulture_waterdemand = result.irri_kharif_sericulture_waterdemand;
                    // ddetails1.irri_kharif_cucumber_crop_area = result.irri_kharif_cucumber_crop_area;
                    // ddetails1.irri_kharif_cucumber_waterdemand = result.irri_kharif_cucumber_waterdemand;
                    ddetails1.irri_kharif_banana_crop_area = result.irri_kharif_banana_crop_area;
                    ddetails1.irri_kharif_banana_waterdemand = result.irri_kharif_banana_waterdemand;
                    ddetails1.irri_kharif_fodder_crop_area = result.irri_kharif_fodder_crop_area;
                    ddetails1.irri_kharif_fodder_waterdemand = result.irri_kharif_fodder_waterdemand;
                    ddetails1.irri_kharif_maize_crop_area = result.irri_kharif_maize_crop_area;
                    ddetails1.irri_kharif_maize_waterdemand = result.irri_kharif_maize_waterdemand;
                    // ddetails1.irri_kharif_potato_crop_area = result.irri_kharif_potato_crop_area;
                    // ddetails1.irri_kharif_potato_waterdemand = result.irri_kharif_potato_waterdemand;
                    ddetails1.irri_kharif_chillies_crop_area = result.irri_kharif_chillies_crop_area;
                    ddetails1.irri_kharif_chillies_waterdemand = result.irri_kharif_chillies_waterdemand;
                    ddetails1.irri_kharif_cotton_crop_area = result.irri_kharif_cotton_crop_area;
                    ddetails1.irri_kharif_cotton_waterdemand = result.irri_kharif_cotton_waterdemand;
                    ddetails1.irri_kharif_melon_crop_area = result.irri_kharif_melon_crop_area;
                    ddetails1.irri_kharif_melon_waterdemand = result.irri_kharif_melon_waterdemand;
                    ddetails1.irri_kharif_citrus_crop_area = result.irri_kharif_citrus_crop_area;
                    ddetails1.irri_kharif_citrus_waterdemand = result.irri_kharif_citrus_waterdemand;

                    // ddetails1.irri_kharif_peanut_crop_area = result.irri_kharif_peanut_crop_area;
                    // ddetails1.irri_kharif_peanut_waterdemand = result.irri_kharif_peanut_waterdemand;
                    ddetails1.irri_kharif_horticulture_crop_area = result.irri_kharif_horticulture_crop_area;
                    ddetails1.irri_kharif_horticulture_waterdemand = result.irri_kharif_horticulture_waterdemand;
                    ddetails1.irri_kharif_total_waterdemand_kharifcrops = result.irri_kharif_total_waterdemand_kharifcrops;
                    ddetails1.irri_rabi_sericulture_crop_area = result.irri_rabi_sericulture_crop_area;
                    ddetails1.irri_rabi_sericulture_waterdemand = result.irri_rabi_sericulture_waterdemand;
                    ddetails1.irri_rabi_tomoto_crop_area = result.irri_rabi_tomoto_crop_area;
                    ddetails1.irri_rabi_tomoto_waterdemand = result.irri_rabi_tomoto_waterdemand;
                    // ddetails1.irri_rabi_cabbage_crop_area = result.irri_rabi_cabbage_crop_area;
                    // ddetails1.irri_rabi_cabbage_waterdemand = result.irri_rabi_cabbage_waterdemand;
                    // ddetails1.irri_rabi_beans_crop_area = result.irri_rabi_beans_crop_area;
                    // ddetails1.irri_rabi_beans_waterdemand = result.irri_rabi_beans_waterdemand;
                    ddetails1.irri_rabi_floriculture_crop_area = result.irri_rabi_floriculture_crop_area;
                    ddetails1.irri_rabi_floriculture_waterdemand = result.irri_rabi_floriculture_waterdemand;
                    // ddetails1.irri_rabi_potato_crop_area = result.irri_rabi_potato_crop_area;
                    // ddetails1.irri_rabi_potato_waterdemand = result.irri_rabi_potato_waterdemand;
                    // ddetails1.irri_rabi_cucumber_crop_area = result.irri_rabi_cucumber_crop_area;
                    // ddetails1.irri_rabi_cucumber_waterdemand = result.irri_rabi_cucumber_waterdemand;
                    ddetails1.irri_rabi_ragi_crop_area = result.irri_rabi_ragi_crop_area;
                    ddetails1.irri_rabi_ragi_waterdemand = result.irri_rabi_ragi_waterdemand;
                    ddetails1.irri_rabi_sugarcane_crop_area = result.irri_rabi_sugarcane_crop_area;
                    ddetails1.irri_rabi_sugarcane_waterdemand = result.irri_rabi_sugarcane_waterdemand;
                    ddetails1.irri_rabi_maize_crop_area = result.irri_rabi_maize_crop_area;
                    ddetails1.irri_rabi_maize_waterdemand = result.irri_rabi_maize_waterdemand;
                    ddetails1.irri_rabi_fodder_crop_area = result.irri_rabi_fodder_crop_area;
                    ddetails1.irri_rabi_fodder_waterdemand = result.irri_rabi_fodder_waterdemand;
                    ddetails1.irri_rabi_paddy_crop_area = result.irri_rabi_paddy_crop_area;
                    ddetails1.irri_rabi_paddy_waterdemand = result.irri_rabi_paddy_waterdemand;
                    ddetails1.irri_rabi_alfalfa_crop_area = result.irri_rabi_alfalfa_crop_area;
                    ddetails1.irri_rabi_alfalfa_waterdemand = result.irri_rabi_alfalfa_waterdemand;
                    //ddetails1.irri_rabi_onion_crop_area = result.irri_rabi_onion_crop_area;
                    //ddetails1.irri_rabi_onion_waterdemand = result.irri_rabi_onion_waterdemand;
                    ddetails1.irri_rabi_horticulture_crop_area = result.irri_rabi_horticulture_crop_area;
                    ddetails1.irri_rabi_horticulture_waterdemand = result.irri_rabi_horticulture_waterdemand;
                    ddetails1.irri_rabi_sunflower_crop_area = result.irri_rabi_sunflower_crop_area;
                    ddetails1.irri_rabi_sunflower_waterdemand = result.irri_rabi_sunflower_waterdemand;
                    ddetails1.irri_rabi_total_waterdemand_rabicrops = result.irri_rabi_total_waterdemand_rabicrops;
                    ddetails1.irri_summer_sericulture_crop_area = result.irri_summer_sericulture_crop_area;
                    ddetails1.irri_summer_sericulture_waterdemand = result.irri_summer_sericulture_waterdemand;
                    ddetails1.irri_summer_tomoto_crop_area = result.irri_summer_tomoto_crop_area;
                    ddetails1.irri_summer_tomoto_waterdemand = result.irri_summer_tomoto_waterdemand;
                    // ddetails1.irri_summer_cabbage_crop_area = result.irri_summer_cabbage_crop_area;
                    // ddetails1.irri_summer_cabbage_waterdemand = result.irri_summer_cabbage_waterdemand;
                    // ddetails1.irri_summer_beans_crop_area = result.irri_summer_beans_crop_area;
                    // ddetails1.irri_summer_beans_waterdemand = result.irri_summer_beans_waterdemand;
                    ddetails1.irri_summer_floriculture_crop_area = result.irri_summer_floriculture_crop_area;
                    ddetails1.irri_summer_floriculture_waterdemand = result.irri_summer_floriculture_waterdemand;
                    ddetails1.irri_summer_maize_crop_area = result.irri_summer_maize_crop_area;
                    ddetails1.irri_summer_maize_waterdemand = result.irri_summer_maize_waterdemand;
                    ddetails1.irri_summer_fodder_crop_area = result.irri_summer_fodder_crop_area;
                    ddetails1.irri_summer_fodder_waterdemand = result.irri_summer_fodder_waterdemand;
                    ddetails1.irri_summer_sugarcane_crop_area = result.irri_summer_sugarcane_crop_area;
                    ddetails1.irri_summer_sugarcane_waterdemand = result.irri_summer_sugarcane_waterdemand;
                    ddetails1.irri_summer_total_waterdemand_summercrops = result.irri_summer_total_waterdemand_summercrops;
                    //ddetails1.irri_kharif_waterdemand = result.irri_kharif_waterdemand;
                    //ddetails1.irri_rabi_waterdemand = result.irri_rabi_waterdemand;
                    //ddetails1.irri_summer_waterdemand = result.irri_summer_waterdemand;
                    ddetails1.irri_area_surfacewater = result.irri_area_surfacewater;
                    ddetails1.irri_avg_crop_water_req = result.irri_avg_crop_water_req;
                    ddetails1.irri_utili_surface_water = result.irri_utili_surface_water;
                    ddetails1.irri_utili_ground_water = result.irri_utili_ground_water;
                    ddetails1.industry_name = result.industry_name;
                    ddetails1.industry_daily_water_req = result.industry_daily_water_req;
                    ddetails1.industry_days_use = result.industry_days_use;
                    ddetails1.industry_waterdemand = result.industry_waterdemand;
                    ddetails1.industry_demand_surface_water = result.industry_demand_surface_water;
                    ddetails1.industry_demand_ground_water = result.industry_demand_ground_water;
                    ddetails1.other_type_of_use = result.other_type_of_use;
                    ddetails1.other_daily_water_req = result.other_daily_water_req;
                    ddetails1.other_days_use = result.other_days_use;
                    ddetails1.other_annual_req = result.other_annual_req;
                    ddetails1.other_demand_surface_water = result.other_demand_surface_water;
                    ddetails1.other_demand_ground_water = result.other_demand_ground_water;

                    ddetails1.domestic_livestock_count = result.domestic_livestock_count;
                    ddetails1.domestic_livestock_water_req = result.domestic_livestock_water_req;

                    ddetails1.domestic_people_water_requirement = result.domestic_people_water_requirement;
                    ddetails1.domestic_livestock_water_requirement = result.domestic_livestock_water_requirement;
                    ddetails1.domestic_buffalo_water_requirement = result.domestic_buffalo_water_requirement;
                    ddetails1.domestic_bullock_water_requirement = result.domestic_bullock_water_requirement;
                    ddetails1.domestic_cow_water_requirement = result.domestic_cow_water_requirement;
                    ddetails1.domestic_sheeps_water_requirement = result.domestic_sheeps_water_requirement;
                    ddetails1.domestic_goat_water_requirement = result.domestic_goat_water_requirement;
                    ddetails1.domestic_donkey_water_requirement = result.domestic_donkey_water_requirement;
                    ddetails1.domestic_camel_water_requirement = result.domestic_camel_water_requirement;

                    ddetails1.irri_kharif_paddy_water_requirement = result.irri_kharif_paddy_water_requirement;
                    ddetails1.irri_kharif_ragi_water_requirement = result.irri_kharif_ragi_water_requirement;
                    ddetails1.irri_kharif_groundnut_water_requirement = result.irri_kharif_groundnut_water_requirement;
                    ddetails1.irri_kharif_sugarcane_water_requirement = result.irri_kharif_sugarcane_water_requirement;
                    ddetails1.irri_kharif_tomoto_water_requirement = result.irri_kharif_tomoto_water_requirement;
                    // ddetails1.irri_kharif_cabbage_water_requirement = result.irri_kharif_cabbage_water_requirement;
                    // ddetails1.irri_kharif_beans_water_requirement = result.irri_kharif_beans_water_requirement;
                    ddetails1.irri_kharif_floriculture_water_requirement = result.irri_kharif_floriculture_water_requirement;
                    ddetails1.irri_kharif_sericulture_water_requirement = result.irri_kharif_sericulture_water_requirement;
                    // ddetails1.irri_kharif_cucumber_water_requirement = result.irri_kharif_cucumber_water_requirement;
                    ddetails1.irri_kharif_banana_water_requirement = result.irri_kharif_banana_water_requirement;
                    ddetails1.irri_kharif_fodder_water_requirement = result.irri_kharif_fodder_water_requirement;
                    ddetails1.irri_kharif_maize_water_requirement = result.irri_kharif_maize_water_requirement;
                    //ddetails1.irri_kharif_potato_water_requirement = result.irri_kharif_potato_water_requirement;
                    ddetails1.irri_kharif_chillies_water_requirement = result.irri_kharif_chillies_water_requirement;
                    ddetails1.irri_kharif_cotton_water_requirement = result.irri_kharif_cotton_water_requirement;
                    ddetails1.irri_kharif_melon_water_requirement = result.irri_kharif_melon_water_requirement;
                    ddetails1.irri_kharif_citrus_water_requirement = result.irri_kharif_citrus_water_requirement;
                    //ddetails1.irri_kharif_peanut_water_requirement = result.irri_kharif_peanut_water_requirement;
                    ddetails1.irri_kharif_horticulture_water_requirement = result.irri_kharif_horticulture_water_requirement;
                    ddetails1.irri_rabi_sericulture_water_requirement = result.irri_rabi_sericulture_water_requirement;
                    ddetails1.irri_rabi_tomoto_water_requirement = result.irri_rabi_tomoto_water_requirement;
                    // ddetails1.irri_rabi_cabbage_water_requirement = result.irri_rabi_cabbage_water_requirement;
                    // ddetails1.irri_rabi_beans_water_requirement = result.irri_rabi_beans_water_requirement;
                    ddetails1.irri_rabi_floriculture_water_requirement = result.irri_rabi_floriculture_water_requirement;
                    // ddetails1.irri_rabi_potato_water_requirement = result.irri_rabi_potato_water_requirement;
                    // ddetails1.irri_rabi_cucumber_water_requirement = result.irri_rabi_cucumber_water_requirement;
                    ddetails1.irri_rabi_ragi_water_requirement = result.irri_rabi_ragi_water_requirement;
                    ddetails1.irri_rabi_sugarcane_water_requirement = result.irri_rabi_sugarcane_water_requirement;
                    ddetails1.irri_rabi_maize_water_requirement = result.irri_rabi_maize_water_requirement;
                    ddetails1.irri_rabi_fodder_water_requirement = result.irri_rabi_fodder_water_requirement;
                    ddetails1.irri_rabi_paddy_water_requirement = result.irri_rabi_paddy_water_requirement;

                    ddetails1.irri_rabi_alfalfa_water_requirement = result.irri_rabi_alfalfa_water_requirement;
                    // ddetails1.irri_rabi_onion_water_requirement = result.irri_rabi_onion_water_requirement;
                    ddetails1.irri_rabi_horticulture_water_requirement = result.irri_rabi_horticulture_water_requirement;
                    ddetails1.irri_rabi_sunflower_water_requirement = result.irri_rabi_sunflower_water_requirement;
                    ddetails1.irri_summer_sericulture_water_requirement = result.irri_summer_sericulture_water_requirement;

                    ddetails1.irri_summer_tomoto_water_requirement = result.irri_summer_tomoto_water_requirement;
                    // ddetails1.irri_summer_cabbage_water_requirement = result.irri_summer_cabbage_water_requirement;
                    // ddetails1.irri_summer_beans_water_requirement = result.irri_summer_beans_water_requirement;
                    ddetails1.irri_summer_floriculture_water_requirement = result.irri_summer_floriculture_water_requirement;
                    ddetails1.irri_summer_maize_water_requirement = result.irri_summer_maize_water_requirement;
                    ddetails1.irri_summer_fodder_water_requirement = result.irri_summer_fodder_water_requirement;
                    ddetails1.irri_summer_sugarcane_water_requirement = result.irri_summer_sugarcane_water_requirement;

                    ddetails1.domestic_annual_req_total_value = result.domestic_annual_req_total_value;
                    ddetails1.domestic_demand_surface_water_total_value = result.domestic_demand_surface_water_total_value;
                    ddetails1.domestic_demand_ground_water_total_value = result.domestic_demand_ground_water_total_value;

                    ddetails1.irri_annual_water_demand = result.irri_annual_water_demand;

                    ddetails1.irri_summer_horticulture_waterdemand = result.irri_summer_horticulture_waterdemand;
                    ddetails1.irri_summer_horticulture_water_requirement = result.irri_summer_horticulture_water_requirement;
                    ddetails1.irri_summer_horticulture_crop_area = result.irri_summer_horticulture_crop_area;

                    //addcrop 
                    ddetails1.irri_kharif_othercrop_name1 = result.irri_kharif_othercrop_name1;
                    ddetails1.irri_kharif_othercrop_area1 = result.irri_kharif_othercrop_area1;
                    ddetails1.irri_kharif_othercrop_water_req1 = result.irri_kharif_othercrop_water_req1;
                    ddetails1.irri_kharif_othercrop_waterdemand1 = result.irri_kharif_othercrop_waterdemand1;

                    //mohan
                    ddetails1.irri_kharif_othercrop_name2 = result.irri_kharif_othercrop_name2;
                    ddetails1.irri_kharif_othercrop_area2 = result.irri_kharif_othercrop_area2;
                    ddetails1.irri_kharif_othercrop_water_req2 = result.irri_kharif_othercrop_water_req2;
                    ddetails1.irri_kharif_othercrop_waterdemand2 = result.irri_kharif_othercrop_waterdemand2;

                    ddetails1.irri_kharif_othercrop_name3 = result.irri_kharif_othercrop_name3;
                    ddetails1.irri_kharif_othercrop_area3 = result.irri_kharif_othercrop_area3;
                    ddetails1.irri_kharif_othercrop_water_req3 = result.irri_kharif_othercrop_water_req3;
                    ddetails1.irri_kharif_othercrop_waterdemand3 = result.irri_kharif_othercrop_waterdemand3;

                    ddetails1.irri_kharif_othercrop_name4 = result.irri_kharif_othercrop_name4;
                    ddetails1.irri_kharif_othercrop_area4 = result.irri_kharif_othercrop_area4;
                    ddetails1.irri_kharif_othercrop_water_req4 = result.irri_kharif_othercrop_water_req4;
                    ddetails1.irri_kharif_othercrop_waterdemand4 = result.irri_kharif_othercrop_waterdemand4;

                    ddetails1.irri_kharif_othercrop_name5 = result.irri_kharif_othercrop_name5;
                    ddetails1.irri_kharif_othercrop_area5 = result.irri_kharif_othercrop_area5;
                    ddetails1.irri_kharif_othercrop_water_req5 = result.irri_kharif_othercrop_water_req5;
                    ddetails1.irri_kharif_othercrop_waterdemand5 = result.irri_kharif_othercrop_waterdemand5;

                    //rabi
                    ddetails1.irri_rabi_othercrop_name1 = result.irri_rabi_othercrop_name1;
                    ddetails1.irri_rabi_othercrop_area1 = result.irri_rabi_othercrop_area1;
                    ddetails1.irri_rabi_othercrop_water_req1 = result.irri_rabi_othercrop_water_req1;
                    ddetails1.irri_rabi_othercrop_waterdemand1 = result.irri_rabi_othercrop_waterdemand1;

                    ddetails1.irri_rabi_othercrop_name2 = result.irri_rabi_othercrop_name2;
                    ddetails1.irri_rabi_othercrop_area2 = result.irri_rabi_othercrop_area2;
                    ddetails1.irri_rabi_othercrop_water_req2 = result.irri_rabi_othercrop_water_req2;
                    ddetails1.irri_rabi_othercrop_waterdemand2 = result.irri_rabi_othercrop_waterdemand2;

                    ddetails1.irri_rabi_othercrop_name3 = result.irri_rabi_othercrop_name3;
                    ddetails1.irri_rabi_othercrop_area3 = result.irri_rabi_othercrop_area3;
                    ddetails1.irri_rabi_othercrop_water_req3 = result.irri_rabi_othercrop_water_req3;
                    ddetails1.irri_rabi_othercrop_waterdemand3 = result.irri_rabi_othercrop_waterdemand3;

                    ddetails1.irri_rabi_othercrop_name4 = result.irri_rabi_othercrop_name4;
                    ddetails1.irri_rabi_othercrop_area4 = result.irri_rabi_othercrop_area4;
                    ddetails1.irri_rabi_othercrop_water_req4 = result.irri_rabi_othercrop_water_req4;
                    ddetails1.irri_rabi_othercrop_waterdemand4 = result.irri_rabi_othercrop_waterdemand4;

                    ddetails1.irri_rabi_othercrop_name5 = result.irri_rabi_othercrop_name5;
                    ddetails1.irri_rabi_othercrop_area5 = result.irri_rabi_othercrop_area5;
                    ddetails1.irri_rabi_othercrop_water_req5 = result.irri_rabi_othercrop_water_req5;
                    ddetails1.irri_rabi_othercrop_waterdemand5 = result.irri_rabi_othercrop_waterdemand5;

                    //summer
                    ddetails1.irri_summer_othercrop_name1 = result.irri_summer_othercrop_name1;
                    ddetails1.irri_summer_othercrop_area1 = result.irri_summer_othercrop_area1;
                    ddetails1.irri_summer_othercrop_water_req1 = result.irri_summer_othercrop_water_req1;
                    ddetails1.irri_summer_othercrop_waterdemand1 = result.irri_summer_othercrop_waterdemand1;

                    ddetails1.irri_summer_othercrop_name2 = result.irri_summer_othercrop_name2;
                    ddetails1.irri_summer_othercrop_area2 = result.irri_summer_othercrop_area2;
                    ddetails1.irri_summer_othercrop_water_req2 = result.irri_summer_othercrop_water_req2;
                    ddetails1.irri_summer_othercrop_waterdemand2 = result.irri_summer_othercrop_waterdemand2;

                    ddetails1.irri_summer_othercrop_name3 = result.irri_summer_othercrop_name3;
                    ddetails1.irri_summer_othercrop_area3 = result.irri_summer_othercrop_area3;
                    ddetails1.irri_summer_othercrop_water_req3 = result.irri_summer_othercrop_water_req3;
                    ddetails1.irri_summer_othercrop_waterdemand3 = result.irri_summer_othercrop_waterdemand3;

                    ddetails1.irri_summer_othercrop_name4 = result.irri_summer_othercrop_name4;
                    ddetails1.irri_summer_othercrop_area4 = result.irri_summer_othercrop_area4;
                    ddetails1.irri_summer_othercrop_water_req4 = result.irri_summer_othercrop_water_req4;
                    ddetails1.irri_summer_othercrop_waterdemand4 = result.irri_summer_othercrop_waterdemand4;

                    ddetails1.irri_summer_othercrop_name5 = result.irri_summer_othercrop_name5;
                    ddetails1.irri_summer_othercrop_area5 = result.irri_summer_othercrop_area5;
                    ddetails1.irri_summer_othercrop_water_req5 = result.irri_summer_othercrop_water_req5;
                    ddetails1.irri_summer_othercrop_waterdemand5 = result.irri_summer_othercrop_waterdemand5;

                    ddetails1.weighted_crop_value = result.weighted_crop_value;
                    var TodayDate1 = DateTime.Now.ToString();
                    ddetails1.datetime = TodayDate1;

                    ddetails1.userid = Convert.ToInt32(Session["UserId"]);
                    ABE.Entry(ddetails1).State = EntityState.Modified;
                    ABE.SaveChanges();
                    return Json("Successfully Saved");
                }
                else
                {
                    if (ddetails.Count == 0)
                    {

                        obj.officer_name = Session["Officer"].ToString();
                        obj.irri_summer_horticulture_waterdemand = result.irri_summer_horticulture_waterdemand;
                        obj.irri_summer_horticulture_water_requirement = result.irri_summer_horticulture_water_requirement;
                        obj.irri_summer_horticulture_crop_area = result.irri_summer_horticulture_crop_area;
                        obj.irri_annual_water_demand = result.irri_annual_water_demand;
                        obj.state_name = State;
                        obj.district_name = Dist;
                        obj.block_name = Block;
                        obj.gpname = Gram;
                        obj.latitude = result.latitude; ;
                        obj.longitude = result.longitude;
                        obj.domestic_people_count = result.domestic_people_count;
                        obj.domestic_people_water_req = result.domestic_people_water_req;
                        obj.domestic_buffalo_count = result.domestic_buffalo_count;
                        obj.domestic_buffalo_water_req = result.domestic_buffalo_water_req;
                        obj.domestic_bullocks_count = result.domestic_bullocks_count;
                        obj.domestic_bullock_water_req = result.domestic_bullock_water_req;
                        obj.domestic_cow_count = result.domestic_cow_count;
                        obj.domestic_cow_water_req = result.domestic_cow_water_req;
                        obj.domestic_sheeps_count = result.domestic_sheeps_count;
                        obj.domestic_sheeps_water_req = result.domestic_sheeps_water_req;
                        obj.domestic_goat_count = result.domestic_goat_count;
                        obj.domestic_goat_water_req = result.domestic_goat_water_req;
                        obj.domestic_donkey_count = result.domestic_donkey_count;
                        obj.domestic_donkey_water_req = result.domestic_donkey_water_req;
                        obj.domestic_camel_count = result.domestic_camel_count;
                        obj.domestic_camel_water_req = result.domestic_camel_water_req;

                        obj.domestic_annual_req_people = result.domestic_annual_req_people;
                        obj.domestic_annual_req_livestock = result.domestic_annual_req_livestock;
                        obj.domestic_demand_surface_water = result.domestic_demand_surface_water;
                        obj.domestic_demand_ground_water = result.domestic_demand_ground_water;

                        obj.domestic_demand_surface_water_livestock = result.domestic_demand_surface_water_livestock;
                        obj.domestic_demand_ground_water_livestock = result.domestic_demand_ground_water_livestock;


                        obj.irri_kharif_paddy_crop_area = result.irri_kharif_paddy_crop_area;
                        obj.irri_kharif_paddy_waterdemand = result.irri_kharif_paddy_waterdemand;
                        obj.irri_kharif_ragi_crop_area = result.irri_kharif_ragi_crop_area;
                        obj.irri_kharif_ragi_waterdemand = result.irri_kharif_ragi_waterdemand;
                        obj.irri_kharif_groundnut_crop_area = result.irri_kharif_groundnut_crop_area;
                        obj.irri_kharif_groundnut_waterdemand = result.irri_kharif_groundnut_waterdemand;
                        obj.irri_kharif_sugarcane_crop_area = result.irri_kharif_sugarcane_crop_area;
                        obj.irri_kharif_sugarcane_waterdemand = result.irri_kharif_sugarcane_waterdemand;
                        obj.irri_kharif_tomoto_crop_area = result.irri_kharif_tomoto_crop_area;
                        obj.irri_kharif_tomoto_waterdemand = result.irri_kharif_tomoto_waterdemand;
                        // obj.irri_kharif_cabbage_crop_area = result.irri_kharif_cabbage_crop_area;
                        //obj.irri_kharif_cabbage_waterdemand = result.irri_kharif_cabbage_waterdemand;
                        //obj.irri_kharif_beans_crop_area = result.irri_kharif_beans_crop_area;
                        //obj.irri_kharif_beans_waterdemand = result.irri_kharif_beans_waterdemand;
                        obj.irri_kharif_floriculture_crop_area = result.irri_kharif_floriculture_crop_area;
                        obj.irri_kharif_floriculture_waterdemand = result.irri_kharif_floriculture_waterdemand;
                        obj.irri_kharif_sericulture_crop_area = result.irri_kharif_sericulture_crop_area;
                        obj.irri_kharif_sericulture_waterdemand = result.irri_kharif_sericulture_waterdemand;
                        //obj.irri_kharif_cucumber_crop_area = result.irri_kharif_cucumber_crop_area;
                        //obj.irri_kharif_cucumber_waterdemand = result.irri_kharif_cucumber_waterdemand;
                        obj.irri_kharif_banana_crop_area = result.irri_kharif_banana_crop_area;
                        obj.irri_kharif_banana_waterdemand = result.irri_kharif_banana_waterdemand;
                        obj.irri_kharif_fodder_crop_area = result.irri_kharif_fodder_crop_area;
                        obj.irri_kharif_fodder_waterdemand = result.irri_kharif_fodder_waterdemand;
                        obj.irri_kharif_maize_crop_area = result.irri_kharif_maize_crop_area;
                        obj.irri_kharif_maize_waterdemand = result.irri_kharif_maize_waterdemand;
                        // obj.irri_kharif_potato_crop_area = result.irri_kharif_potato_crop_area;
                        // obj.irri_kharif_potato_waterdemand = result.irri_kharif_potato_waterdemand;
                        obj.irri_kharif_chillies_crop_area = result.irri_kharif_chillies_crop_area;
                        obj.irri_kharif_chillies_waterdemand = result.irri_kharif_chillies_waterdemand;
                        obj.irri_kharif_cotton_crop_area = result.irri_kharif_cotton_crop_area;
                        obj.irri_kharif_cotton_waterdemand = result.irri_kharif_cotton_waterdemand;
                        obj.irri_kharif_melon_crop_area = result.irri_kharif_melon_crop_area;
                        obj.irri_kharif_melon_waterdemand = result.irri_kharif_melon_waterdemand;
                        obj.irri_kharif_citrus_crop_area = result.irri_kharif_citrus_crop_area;
                        obj.irri_kharif_citrus_waterdemand = result.irri_kharif_citrus_waterdemand;

                        // obj.irri_kharif_peanut_crop_area = result.irri_kharif_peanut_crop_area;
                        // obj.irri_kharif_peanut_waterdemand = result.irri_kharif_peanut_waterdemand;
                        obj.irri_kharif_horticulture_crop_area = result.irri_kharif_horticulture_crop_area;
                        obj.irri_kharif_horticulture_waterdemand = result.irri_kharif_horticulture_waterdemand;
                        obj.irri_kharif_total_waterdemand_kharifcrops = result.irri_kharif_total_waterdemand_kharifcrops;
                        obj.irri_rabi_sericulture_crop_area = result.irri_rabi_sericulture_crop_area;
                        obj.irri_rabi_sericulture_waterdemand = result.irri_rabi_sericulture_waterdemand;
                        obj.irri_rabi_tomoto_crop_area = result.irri_rabi_tomoto_crop_area;
                        obj.irri_rabi_tomoto_waterdemand = result.irri_rabi_tomoto_waterdemand;
                        // obj.irri_rabi_cabbage_crop_area = result.irri_rabi_cabbage_crop_area;
                        // obj.irri_rabi_cabbage_waterdemand = result.irri_rabi_cabbage_waterdemand;
                        // obj.irri_rabi_beans_crop_area = result.irri_rabi_beans_crop_area;
                        // obj.irri_rabi_beans_waterdemand = result.irri_rabi_beans_waterdemand;
                        obj.irri_rabi_floriculture_crop_area = result.irri_rabi_floriculture_crop_area;
                        obj.irri_rabi_floriculture_waterdemand = result.irri_rabi_floriculture_waterdemand;
                        // obj.irri_rabi_potato_crop_area = result.irri_rabi_potato_crop_area;
                        // obj.irri_rabi_potato_waterdemand = result.irri_rabi_potato_waterdemand;
                        // obj.irri_rabi_cucumber_crop_area = result.irri_rabi_cucumber_crop_area;
                        // obj.irri_rabi_cucumber_waterdemand = result.irri_rabi_cucumber_waterdemand;
                        obj.irri_rabi_ragi_crop_area = result.irri_rabi_ragi_crop_area;
                        obj.irri_rabi_ragi_waterdemand = result.irri_rabi_ragi_waterdemand;
                        obj.irri_rabi_sugarcane_crop_area = result.irri_rabi_sugarcane_crop_area;
                        obj.irri_rabi_sugarcane_waterdemand = result.irri_rabi_sugarcane_waterdemand;
                        obj.irri_rabi_maize_crop_area = result.irri_rabi_maize_crop_area;
                        obj.irri_rabi_maize_waterdemand = result.irri_rabi_maize_waterdemand;
                        obj.irri_rabi_fodder_crop_area = result.irri_rabi_fodder_crop_area;
                        obj.irri_rabi_fodder_waterdemand = result.irri_rabi_fodder_waterdemand;
                        obj.irri_rabi_paddy_crop_area = result.irri_rabi_paddy_crop_area;
                        obj.irri_rabi_paddy_waterdemand = result.irri_rabi_paddy_waterdemand;
                        obj.irri_rabi_alfalfa_crop_area = result.irri_rabi_alfalfa_crop_area;
                        obj.irri_rabi_alfalfa_waterdemand = result.irri_rabi_alfalfa_waterdemand;
                        // obj.irri_rabi_onion_crop_area = result.irri_rabi_onion_crop_area;
                        // obj.irri_rabi_onion_waterdemand = result.irri_rabi_onion_waterdemand;
                        obj.irri_rabi_horticulture_crop_area = result.irri_rabi_horticulture_crop_area;
                        obj.irri_rabi_horticulture_waterdemand = result.irri_rabi_horticulture_waterdemand;
                        obj.irri_rabi_sunflower_crop_area = result.irri_rabi_sunflower_crop_area;
                        obj.irri_rabi_sunflower_waterdemand = result.irri_rabi_sunflower_waterdemand;
                        obj.irri_rabi_total_waterdemand_rabicrops = result.irri_rabi_total_waterdemand_rabicrops;
                        obj.irri_summer_sericulture_crop_area = result.irri_summer_sericulture_crop_area;
                        obj.irri_summer_sericulture_waterdemand = result.irri_summer_sericulture_waterdemand;
                        obj.irri_summer_tomoto_crop_area = result.irri_summer_tomoto_crop_area;
                        obj.irri_summer_tomoto_waterdemand = result.irri_summer_tomoto_waterdemand;
                        // obj.irri_summer_cabbage_crop_area = result.irri_summer_cabbage_crop_area;
                        // obj.irri_summer_cabbage_waterdemand = result.irri_summer_cabbage_waterdemand;
                        // obj.irri_summer_beans_crop_area = result.irri_summer_beans_crop_area;
                        // obj.irri_summer_beans_waterdemand = result.irri_summer_beans_waterdemand;
                        obj.irri_summer_floriculture_crop_area = result.irri_summer_floriculture_crop_area;
                        obj.irri_summer_floriculture_waterdemand = result.irri_summer_floriculture_waterdemand;
                        obj.irri_summer_maize_crop_area = result.irri_summer_maize_crop_area;
                        obj.irri_summer_maize_waterdemand = result.irri_summer_maize_waterdemand;
                        obj.irri_summer_fodder_crop_area = result.irri_summer_fodder_crop_area;
                        obj.irri_summer_fodder_waterdemand = result.irri_summer_fodder_waterdemand;
                        obj.irri_summer_sugarcane_crop_area = result.irri_summer_sugarcane_crop_area;
                        obj.irri_summer_sugarcane_waterdemand = result.irri_summer_sugarcane_waterdemand;
                        obj.irri_summer_total_waterdemand_summercrops = result.irri_summer_total_waterdemand_summercrops;
                        //obj.irri_kharif_waterdemand = result.irri_kharif_waterdemand;
                        //obj.irri_rabi_waterdemand = result.irri_rabi_waterdemand;
                        //obj.irri_summer_waterdemand = result.irri_summer_waterdemand;
                        obj.irri_area_surfacewater = result.irri_area_surfacewater;
                        obj.irri_avg_crop_water_req = result.irri_avg_crop_water_req;
                        obj.irri_utili_surface_water = result.irri_utili_surface_water;
                        obj.irri_utili_ground_water = result.irri_utili_ground_water;
                        obj.industry_name = result.industry_name;
                        obj.industry_daily_water_req = result.industry_daily_water_req;
                        obj.industry_days_use = result.industry_days_use;
                        obj.industry_waterdemand = result.industry_waterdemand;
                        obj.industry_demand_surface_water = result.industry_demand_surface_water;
                        obj.industry_demand_ground_water = result.industry_demand_ground_water;
                        obj.other_type_of_use = result.other_type_of_use;
                        obj.other_daily_water_req = result.other_daily_water_req;
                        obj.other_days_use = result.other_days_use;
                        obj.other_annual_req = result.other_annual_req;
                        obj.other_demand_surface_water = result.other_demand_surface_water;
                        obj.other_demand_ground_water = result.other_demand_ground_water;
                        obj.userid = Convert.ToInt32(Session["UserId"]);

                        obj.domestic_livestock_count = result.domestic_livestock_count;
                        obj.domestic_livestock_water_req = result.domestic_livestock_water_req;

                        obj.domestic_people_water_requirement = result.domestic_people_water_requirement;
                        obj.domestic_livestock_water_requirement = result.domestic_livestock_water_requirement;
                        obj.domestic_buffalo_water_requirement = result.domestic_buffalo_water_requirement;
                        obj.domestic_bullock_water_requirement = result.domestic_bullock_water_requirement;
                        obj.domestic_cow_water_requirement = result.domestic_cow_water_requirement;
                        obj.domestic_sheeps_water_requirement = result.domestic_sheeps_water_requirement;
                        obj.domestic_goat_water_requirement = result.domestic_goat_water_requirement;
                        obj.domestic_donkey_water_requirement = result.domestic_donkey_water_requirement;
                        obj.domestic_camel_water_requirement = result.domestic_camel_water_requirement;

                        obj.irri_kharif_paddy_water_requirement = result.irri_kharif_paddy_water_requirement;
                        obj.irri_kharif_ragi_water_requirement = result.irri_kharif_ragi_water_requirement;
                        obj.irri_kharif_groundnut_water_requirement = result.irri_kharif_groundnut_water_requirement;
                        obj.irri_kharif_sugarcane_water_requirement = result.irri_kharif_sugarcane_water_requirement;
                        obj.irri_kharif_tomoto_water_requirement = result.irri_kharif_tomoto_water_requirement;
                        // obj.irri_kharif_cabbage_water_requirement = result.irri_kharif_cabbage_water_requirement;
                        // obj.irri_kharif_beans_water_requirement = result.irri_kharif_beans_water_requirement;
                        obj.irri_kharif_floriculture_water_requirement = result.irri_kharif_floriculture_water_requirement;
                        obj.irri_kharif_sericulture_water_requirement = result.irri_kharif_sericulture_water_requirement;
                        // obj.irri_kharif_cucumber_water_requirement = result.irri_kharif_cucumber_water_requirement;
                        obj.irri_kharif_banana_water_requirement = result.irri_kharif_banana_water_requirement;
                        obj.irri_kharif_fodder_water_requirement = result.irri_kharif_fodder_water_requirement;
                        obj.irri_kharif_maize_water_requirement = result.irri_kharif_maize_water_requirement;
                        // obj.irri_kharif_potato_water_requirement = result.irri_kharif_potato_water_requirement;
                        obj.irri_kharif_chillies_water_requirement = result.irri_kharif_chillies_water_requirement;
                        obj.irri_kharif_cotton_water_requirement = result.irri_kharif_cotton_water_requirement;
                        obj.irri_kharif_melon_water_requirement = result.irri_kharif_melon_water_requirement;
                        obj.irri_kharif_citrus_water_requirement = result.irri_kharif_citrus_water_requirement;
                        // obj.irri_kharif_peanut_water_requirement = result.irri_kharif_peanut_water_requirement;
                        obj.irri_kharif_horticulture_water_requirement = result.irri_kharif_horticulture_water_requirement;
                        obj.irri_rabi_sericulture_water_requirement = result.irri_rabi_sericulture_water_requirement;
                        obj.irri_rabi_tomoto_water_requirement = result.irri_rabi_tomoto_water_requirement;
                        //  obj.irri_rabi_cabbage_water_requirement = result.irri_rabi_cabbage_water_requirement;
                        //  obj.irri_rabi_beans_water_requirement = result.irri_rabi_beans_water_requirement;
                        obj.irri_rabi_floriculture_water_requirement = result.irri_rabi_floriculture_water_requirement;
                        //  obj.irri_rabi_potato_water_requirement = result.irri_rabi_potato_water_requirement;
                        //  obj.irri_rabi_cucumber_water_requirement = result.irri_rabi_cucumber_water_requirement;
                        obj.irri_rabi_ragi_water_requirement = result.irri_rabi_ragi_water_requirement;
                        obj.irri_rabi_sugarcane_water_requirement = result.irri_rabi_sugarcane_water_requirement;
                        obj.irri_rabi_maize_water_requirement = result.irri_rabi_maize_water_requirement;
                        obj.irri_rabi_fodder_water_requirement = result.irri_rabi_fodder_water_requirement;
                        obj.irri_rabi_paddy_water_requirement = result.irri_rabi_paddy_water_requirement;

                        obj.irri_rabi_alfalfa_water_requirement = result.irri_rabi_alfalfa_water_requirement;
                        //  obj.irri_rabi_onion_water_requirement = result.irri_rabi_onion_water_requirement;
                        obj.irri_rabi_horticulture_water_requirement = result.irri_rabi_horticulture_water_requirement;
                        obj.irri_rabi_sunflower_water_requirement = result.irri_rabi_sunflower_water_requirement;
                        obj.irri_summer_sericulture_water_requirement = result.irri_summer_sericulture_water_requirement;

                        obj.irri_summer_tomoto_water_requirement = result.irri_summer_tomoto_water_requirement;
                        //  obj.irri_summer_cabbage_water_requirement = result.irri_summer_cabbage_water_requirement;
                        //  obj.irri_summer_beans_water_requirement = result.irri_summer_beans_water_requirement;
                        obj.irri_summer_floriculture_water_requirement = result.irri_summer_floriculture_water_requirement;
                        obj.irri_summer_maize_water_requirement = result.irri_summer_maize_water_requirement;
                        obj.irri_summer_fodder_water_requirement = result.irri_summer_fodder_water_requirement;
                        obj.irri_summer_sugarcane_water_requirement = result.irri_summer_sugarcane_water_requirement;

                        obj.domestic_annual_req_total_value = result.domestic_annual_req_total_value;
                        obj.domestic_demand_surface_water_total_value = result.domestic_demand_surface_water_total_value;
                        obj.domestic_demand_ground_water_total_value = result.domestic_demand_ground_water_total_value;

                        //addcrop 
                        obj.irri_kharif_othercrop_name1 = result.irri_kharif_othercrop_name1;
                        obj.irri_kharif_othercrop_area1 = result.irri_kharif_othercrop_area1;
                        obj.irri_kharif_othercrop_water_req1 = result.irri_kharif_othercrop_water_req1;
                        obj.irri_kharif_othercrop_waterdemand1 = result.irri_kharif_othercrop_waterdemand1;

                        //mohan
                        obj.irri_kharif_othercrop_name2 = result.irri_kharif_othercrop_name2;
                        obj.irri_kharif_othercrop_area2 = result.irri_kharif_othercrop_area2;
                        obj.irri_kharif_othercrop_water_req2 = result.irri_kharif_othercrop_water_req2;
                        obj.irri_kharif_othercrop_waterdemand2 = result.irri_kharif_othercrop_waterdemand2;

                        obj.irri_kharif_othercrop_name3 = result.irri_kharif_othercrop_name3;
                        obj.irri_kharif_othercrop_area3 = result.irri_kharif_othercrop_area3;
                        obj.irri_kharif_othercrop_water_req3 = result.irri_kharif_othercrop_water_req3;
                        obj.irri_kharif_othercrop_waterdemand3 = result.irri_kharif_othercrop_waterdemand3;

                        obj.irri_kharif_othercrop_name4 = result.irri_kharif_othercrop_name4;
                        obj.irri_kharif_othercrop_area4 = result.irri_kharif_othercrop_area4;
                        obj.irri_kharif_othercrop_water_req4 = result.irri_kharif_othercrop_water_req4;
                        obj.irri_kharif_othercrop_waterdemand4 = result.irri_kharif_othercrop_waterdemand4;

                        obj.irri_kharif_othercrop_name5 = result.irri_kharif_othercrop_name5;
                        obj.irri_kharif_othercrop_area5 = result.irri_kharif_othercrop_area5;
                        obj.irri_kharif_othercrop_water_req5 = result.irri_kharif_othercrop_water_req5;
                        obj.irri_kharif_othercrop_waterdemand5 = result.irri_kharif_othercrop_waterdemand5;

                        //rabi
                        obj.irri_rabi_othercrop_name1 = result.irri_rabi_othercrop_name1;
                        obj.irri_rabi_othercrop_area1 = result.irri_rabi_othercrop_area1;
                        obj.irri_rabi_othercrop_water_req1 = result.irri_rabi_othercrop_water_req1;
                        obj.irri_rabi_othercrop_waterdemand1 = result.irri_rabi_othercrop_waterdemand1;

                        obj.irri_rabi_othercrop_name2 = result.irri_rabi_othercrop_name2;
                        obj.irri_rabi_othercrop_area2 = result.irri_rabi_othercrop_area2;
                        obj.irri_rabi_othercrop_water_req2 = result.irri_rabi_othercrop_water_req2;
                        obj.irri_rabi_othercrop_waterdemand2 = result.irri_rabi_othercrop_waterdemand2;

                        obj.irri_rabi_othercrop_name3 = result.irri_rabi_othercrop_name3;
                        obj.irri_rabi_othercrop_area3 = result.irri_rabi_othercrop_area3;
                        obj.irri_rabi_othercrop_water_req3 = result.irri_rabi_othercrop_water_req3;
                        obj.irri_rabi_othercrop_waterdemand3 = result.irri_rabi_othercrop_waterdemand3;

                        obj.irri_rabi_othercrop_name4 = result.irri_rabi_othercrop_name4;
                        obj.irri_rabi_othercrop_area4 = result.irri_rabi_othercrop_area4;
                        obj.irri_rabi_othercrop_water_req4 = result.irri_rabi_othercrop_water_req4;
                        obj.irri_rabi_othercrop_waterdemand4 = result.irri_rabi_othercrop_waterdemand4;

                        obj.irri_rabi_othercrop_name5 = result.irri_rabi_othercrop_name5;
                        obj.irri_rabi_othercrop_area5 = result.irri_rabi_othercrop_area5;
                        obj.irri_rabi_othercrop_water_req5 = result.irri_rabi_othercrop_water_req5;
                        obj.irri_rabi_othercrop_waterdemand5 = result.irri_rabi_othercrop_waterdemand5;

                        //summer
                        obj.irri_summer_othercrop_name1 = result.irri_summer_othercrop_name1;
                        obj.irri_summer_othercrop_area1 = result.irri_summer_othercrop_area1;
                        obj.irri_summer_othercrop_water_req1 = result.irri_summer_othercrop_water_req1;
                        obj.irri_summer_othercrop_waterdemand1 = result.irri_summer_othercrop_waterdemand1;

                        obj.irri_summer_othercrop_name2 = result.irri_summer_othercrop_name2;
                        obj.irri_summer_othercrop_area2 = result.irri_summer_othercrop_area2;
                        obj.irri_summer_othercrop_water_req2 = result.irri_summer_othercrop_water_req2;
                        obj.irri_summer_othercrop_waterdemand2 = result.irri_summer_othercrop_waterdemand2;

                        obj.irri_summer_othercrop_name3 = result.irri_summer_othercrop_name3;
                        obj.irri_summer_othercrop_area3 = result.irri_summer_othercrop_area3;
                        obj.irri_summer_othercrop_water_req3 = result.irri_summer_othercrop_water_req3;
                        obj.irri_summer_othercrop_waterdemand3 = result.irri_summer_othercrop_waterdemand3;

                        obj.irri_summer_othercrop_name4 = result.irri_summer_othercrop_name4;
                        obj.irri_summer_othercrop_area4 = result.irri_summer_othercrop_area4;
                        obj.irri_summer_othercrop_water_req4 = result.irri_summer_othercrop_water_req4;
                        obj.irri_summer_othercrop_waterdemand4 = result.irri_summer_othercrop_waterdemand4;

                        obj.irri_summer_othercrop_name5 = result.irri_summer_othercrop_name5;
                        obj.irri_summer_othercrop_area5 = result.irri_summer_othercrop_area5;
                        obj.irri_summer_othercrop_water_req5 = result.irri_summer_othercrop_water_req5;
                        obj.irri_summer_othercrop_waterdemand5 = result.irri_summer_othercrop_waterdemand5;

                        obj.weighted_crop_value = result.weighted_crop_value;

                        var TodayDate1 = DateTime.Now.ToString();
                        obj.datetime = TodayDate1;

                        ABE.obj_abhy_waterdraft_new.Add(obj);
                        ABE.SaveChanges();
                        return Json("Successfully Saved");
                    }
                    else
                    {
                        return Json("Duplicate Data is there");
                    }

                }
            }
            else
            {
                Session["WSPHOME"] = "Data";
                return RedirectToAction("WSP_GWM_HOME", "WSPNew");
            }
        }


        [HttpPost]
        public ActionResult WaterIndustry_InsertData(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_waterdraft_industry_new> ddetails = new List<abhy_waterdraft_industry_new>();
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_waterdraft_industry_new>(Data);
                    abhy_waterdraft_industry_new obj = new abhy_waterdraft_industry_new();
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();
                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    obj.block_name = Block;
                    obj.district_name = Dist;
                    obj.gpname = Gram;
                    double industry_daily_water_req = 0;
                    if (result.industry_daily_water_req != null && result.industry_daily_water_req != "")
                    {
                        industry_daily_water_req = double.Parse(result.industry_daily_water_req);
                    }
                    double industry_days_use = 0;
                    if (result.industry_days_use != null && result.industry_days_use != "")
                    {
                        industry_days_use = double.Parse(result.industry_days_use);
                    }

                    var industry_waterdemand = double.Parse(result.industry_waterdemand);

                    if (result.industry_daily_water_req != "")
                    {
                        obj.industry_daily_water_req = result.industry_daily_water_req;
                    }
                    else
                    {
                        return Json("Please Enter Daily Water Requirement(l/day)");
                    }

                    if (result.industry_days_use != "")
                    {
                        obj.industry_days_use = result.industry_days_use;
                    }
                    else
                    {
                        return Json("Please Enter No. of Days in Use");
                    }
                    if (result.industry_demand_ground_water != "")
                    {
                        obj.industry_demand_ground_water = result.industry_demand_ground_water;
                    }
                    else
                    {
                        return Json("Please Enter Demand Met From Ground Water (Ha.m)");
                    }
                    if (result.industry_demand_surface_water != "")
                    {
                        obj.industry_demand_surface_water = result.industry_demand_surface_water;
                    }
                    else
                    {
                        return Json("Please Enter Demand Met From Surface Water (Ha.m)");
                    }
                    if (result.industry_name != "")
                    {
                        obj.industry_name = result.industry_name;
                    }
                    else
                    {
                        return Json("Please Enter Industry Name");
                    }



                    obj.industry_waterdemand = industry_waterdemand.ToString();
                    obj.latitude = result.latitude;
                    obj.longitude = result.longitude;
                    obj.state_name = State;
                    var TodayDate1 = DateTime.Now.ToString();
                    obj.datetime = TodayDate1;
                    obj.userid = Convert.ToInt32(Session["UserId"]);
                    obj.officer_name = Session["Officer"].ToString();
                    ABE.obj_abhy_waterdraft_industry_new.Add(obj);
                    ABE.SaveChanges();
                    return Json("Successfully Saved");

                }


                catch (Exception Ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpGet]
        public ActionResult WaterIndustry_Info_Details()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_waterdraft_industry_new> ddetails = new List<abhy_waterdraft_industry_new>();

                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();

                    if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null && Gram != "" && Gram != null)
                    {
                        ddetails = ABE.obj_abhy_waterdraft_industry_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                    }
                    else if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null)
                    {
                        ddetails = ABE.obj_abhy_waterdraft_industry_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                    }
                    else if (State != "" && State != null && Dist != "" && Dist != null)
                    {
                        ddetails = ABE.obj_abhy_waterdraft_industry_new.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                    }
                    else if (State != "" && State != null)
                    {
                        ddetails = ABE.obj_abhy_waterdraft_industry_new.Where(x => x.state_name == State).ToList();//total list

                    }
                    return Json(ddetails, JsonRequestBehavior.AllowGet);
                }
                catch (Exception Ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
                // return RedirectToAction("WSP_GWM_HOME", "WSPNew");
            }
        }

        [HttpPost]
        public ActionResult Water_Domestic_InsertData(string Data)
        {
            if (Session["UserId"] != null)
            {
                var UserId = Convert.ToInt32(Session["UserId"].ToString());
                List<abhy_waterdraft_domestic_new> ddetails = new List<abhy_waterdraft_domestic_new>();
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<abhy_waterdraft_domestic_new>(Data);
                abhy_waterdraft_domestic_new obj = new abhy_waterdraft_domestic_new();
                var State = Session["gstate"].ToString();
                var Dist = Session["gdist"].ToString();

                var Block = Session["gblock"].ToString();
                var Gram = Session["ggram"].ToString();

                if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null && Gram != "" && Gram != null)
                {
                    ddetails = ABE.obj_abhy_waterdraft_domestic_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                }
                else if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null)
                {
                    ddetails = ABE.obj_abhy_waterdraft_domestic_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                }
                else if (State != "" && State != null && Dist != "" && Dist != null)
                {
                    ddetails = ABE.obj_abhy_waterdraft_domestic_new.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                }
                else if (State != "" && State != null)
                {
                    ddetails = ABE.obj_abhy_waterdraft_domestic_new.Where(x => x.state_name == State).ToList();//total list

                }
                if (ddetails.Count == 1)
                {
                    var ddetails1 = ddetails.SingleOrDefault();
                    ddetails1.userid = UserId;
                    ddetails1.state_name = State;
                    ddetails1.officer_name = Session["Officer"].ToString();
                    ddetails1.district_name = Dist;
                    ddetails1.block_name = Block;
                    ddetails1.gpname = Gram;
                    ddetails1.longitude = result.longitude;
                    ddetails1.latitude = result.latitude;
                    ddetails1.domestic_people_water_requirement = result.domestic_people_water_requirement;
                    ddetails1.domestic_livestock_water_requirement = result.domestic_livestock_water_requirement;
                    ddetails1.domestic_buffalo_water_requirement = result.domestic_buffalo_water_requirement;
                    ddetails1.domestic_bullock_water_requirement = result.domestic_bullock_water_requirement;
                    ddetails1.domestic_cow_water_requirement = result.domestic_cow_water_requirement;
                    ddetails1.domestic_sheeps_water_requirement = result.domestic_sheeps_water_requirement;
                    ddetails1.domestic_goat_water_requirement = result.domestic_goat_water_requirement;
                    ddetails1.domestic_donkey_water_requirement = result.domestic_donkey_water_requirement;
                    ddetails1.domestic_camel_water_requirement = result.domestic_camel_water_requirement;
                    ddetails1.domestic_people_count = result.domestic_people_count;
                    ddetails1.domestic_livestock_count = result.domestic_livestock_count;
                    ddetails1.domestic_buffalo_count = result.domestic_buffalo_count;
                    ddetails1.domestic_bullocks_count = result.domestic_bullocks_count;
                    ddetails1.domestic_cow_count = result.domestic_cow_count;
                    ddetails1.domestic_sheeps_count = result.domestic_sheeps_count;
                    ddetails1.domestic_goat_count = result.domestic_goat_count;
                    ddetails1.domestic_donkey_count = result.domestic_donkey_count;
                    ddetails1.domestic_camel_count = result.domestic_camel_count;
                    ddetails1.domestic_people_water_req = result.domestic_people_water_req;
                    ddetails1.domestic_buffalo_water_req = result.domestic_buffalo_water_req;
                    ddetails1.domestic_bullock_water_req = result.domestic_bullock_water_req;
                    ddetails1.domestic_cow_water_req = result.domestic_cow_water_req;
                    ddetails1.domestic_sheeps_water_req = result.domestic_sheeps_water_req;
                    ddetails1.domestic_goat_water_req = result.domestic_goat_water_req;
                    ddetails1.domestic_donkey_water_req = result.domestic_donkey_water_req;
                    ddetails1.domestic_camel_water_req = result.domestic_camel_water_req;
                    ddetails1.domestic_livestock_water_req = result.domestic_livestock_water_req;
                    ddetails1.domestic_annual_req_people = result.domestic_annual_req_people;
                    ddetails1.domestic_annual_req_livestock = result.domestic_annual_req_livestock;
                    ddetails1.domestic_demand_userentry_groundwater_human = result.domestic_demand_userentry_groundwater_human;
                    ddetails1.domestic_demand_ground_water = result.domestic_demand_ground_water;
                    ddetails1.domestic_demand_userentry_surfacewater_human = result.domestic_demand_userentry_surfacewater_human;
                    ddetails1.domestic_demand_surface_water = result.domestic_demand_surface_water;
                    ddetails1.domestic_demand_userentry_groundwater_livestock = result.domestic_demand_userentry_groundwater_livestock;
                    ddetails1.domestic_demand_ground_water_livestock = result.domestic_demand_ground_water_livestock;
                    ddetails1.domestic_demand_userentry_surfacewater_livestock = result.domestic_demand_userentry_surfacewater_livestock;
                    ddetails1.domestic_demand_surface_water_livestock = result.domestic_demand_surface_water_livestock;
                    ddetails1.domestic_demand_ground_water_total_value = result.domestic_demand_ground_water_total_value;
                    ddetails1.domestic_demand_surface_water_total_value = result.domestic_demand_surface_water_total_value;
                    var TodayDate1 = DateTime.Now.ToString();
                    ddetails1.datetime = TodayDate1;
                    ddetails1.userid = Convert.ToInt32(Session["UserId"]);
                    ABE.Entry(ddetails1).State = EntityState.Modified;
                    ABE.SaveChanges();
                    return Json("Successfully Saved");
                }
                else
                {
                    if (ddetails.Count == 0)
                    {
                        obj.userid = UserId;
                        obj.state_name = State;
                        obj.district_name = Dist;
                        obj.block_name = Block;
                        obj.gpname = Gram;
                        obj.officer_name = Session["Officer"].ToString();
                        obj.longitude = result.longitude;
                        obj.latitude = result.latitude;
                        obj.domestic_people_water_requirement = result.domestic_people_water_requirement;
                        obj.domestic_livestock_water_requirement = result.domestic_livestock_water_requirement;
                        obj.domestic_buffalo_water_requirement = result.domestic_buffalo_water_requirement;
                        obj.domestic_bullock_water_requirement = result.domestic_bullock_water_requirement;
                        obj.domestic_cow_water_requirement = result.domestic_cow_water_requirement;
                        obj.domestic_sheeps_water_requirement = result.domestic_sheeps_water_requirement;
                        obj.domestic_goat_water_requirement = result.domestic_goat_water_requirement;
                        obj.domestic_donkey_water_requirement = result.domestic_donkey_water_requirement;
                        obj.domestic_camel_water_requirement = result.domestic_camel_water_requirement;
                        obj.domestic_people_count = result.domestic_people_count;
                        obj.domestic_livestock_count = result.domestic_livestock_count;
                        obj.domestic_buffalo_count = result.domestic_buffalo_count;
                        obj.domestic_bullocks_count = result.domestic_bullocks_count;
                        obj.domestic_cow_count = result.domestic_cow_count;
                        obj.domestic_sheeps_count = result.domestic_sheeps_count;
                        obj.domestic_goat_count = result.domestic_goat_count;
                        obj.domestic_donkey_count = result.domestic_donkey_count;
                        obj.domestic_camel_count = result.domestic_camel_count;
                        obj.domestic_people_water_req = result.domestic_people_water_req;
                        obj.domestic_buffalo_water_req = result.domestic_buffalo_water_req;
                        obj.domestic_bullock_water_req = result.domestic_bullock_water_req;
                        obj.domestic_cow_water_req = result.domestic_cow_water_req;
                        obj.domestic_sheeps_water_req = result.domestic_sheeps_water_req;
                        obj.domestic_goat_water_req = result.domestic_goat_water_req;
                        obj.domestic_donkey_water_req = result.domestic_donkey_water_req;
                        obj.domestic_camel_water_req = result.domestic_camel_water_req;
                        obj.domestic_livestock_water_req = result.domestic_livestock_water_req;
                        obj.domestic_annual_req_people = result.domestic_annual_req_people;
                        obj.domestic_annual_req_livestock = result.domestic_annual_req_livestock;
                        obj.domestic_demand_userentry_groundwater_human = result.domestic_demand_userentry_groundwater_human;
                        obj.domestic_demand_ground_water = result.domestic_demand_ground_water;
                        obj.domestic_demand_userentry_surfacewater_human = result.domestic_demand_userentry_surfacewater_human;
                        obj.domestic_demand_surface_water = result.domestic_demand_surface_water;
                        obj.domestic_demand_userentry_groundwater_livestock = result.domestic_demand_userentry_groundwater_livestock;
                        obj.domestic_demand_ground_water_livestock = result.domestic_demand_ground_water_livestock;
                        obj.domestic_demand_userentry_surfacewater_livestock = result.domestic_demand_userentry_surfacewater_livestock;
                        obj.domestic_demand_surface_water_livestock = result.domestic_demand_surface_water_livestock;
                        obj.domestic_demand_ground_water_total_value = result.domestic_demand_ground_water_total_value;
                        obj.domestic_demand_surface_water_total_value = result.domestic_demand_surface_water_total_value;
                        var TodayDate1 = DateTime.Now.ToString();
                        obj.datetime = TodayDate1;
                        ABE.obj_abhy_waterdraft_domestic_new.Add(obj);
                        ABE.SaveChanges();
                        return Json("Successfully Saved");
                    }
                    else
                    {
                        return Json("Duplicate Data is there");
                    }


                }
            }
            else
            {
                Session["WSPHOME"] = "Data";
                return RedirectToAction("WSP_GWM_HOME", "WSPNew");
            }
        }

        [HttpGet]
        public ActionResult Water_Domestic_Details()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_waterdraft_domestic_new> ddetails = new List<abhy_waterdraft_domestic_new>();

                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();

                    if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null && Gram != "" && Gram != null)
                    {
                        ddetails = ABE.obj_abhy_waterdraft_domestic_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                    }
                    else if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null)
                    {
                        ddetails = ABE.obj_abhy_waterdraft_domestic_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                    }
                    else if (State != "" && State != null && Dist != "" && Dist != null)
                    {
                        ddetails = ABE.obj_abhy_waterdraft_domestic_new.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                    }
                    else if (State != "" && State != null)
                    {
                        ddetails = ABE.obj_abhy_waterdraft_domestic_new.Where(x => x.state_name == State).ToList();//total list

                    }
                    return Json(ddetails, JsonRequestBehavior.AllowGet);
                }
                catch (Exception Ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
                // return RedirectToAction("WSP_GWM_HOME", "WSPNew");
            }
        }

        [HttpPost]
        public ActionResult WaterIndustry_update(string WaterIndustry_update1)
        {

            JavaScriptSerializer js = new JavaScriptSerializer();
            var result = js.Deserialize<abhy_waterdraft_industry_new>(WaterIndustry_update1);


            var ARID = Convert.ToInt32(result.id);
            var Data1 = ABE.obj_abhy_waterdraft_industry_new.Where(x => x.id == ARID).FirstOrDefault();
            if (Data1 != null)
            {
                Data1.industry_daily_water_req = result.industry_daily_water_req;
                Data1.industry_days_use = result.industry_days_use;
                Data1.industry_demand_ground_water = result.industry_demand_ground_water;
                Data1.industry_demand_surface_water = result.industry_demand_surface_water;
                Data1.industry_name = result.industry_name;
                Data1.industry_waterdemand = result.industry_waterdemand;
                Data1.latitude = result.latitude;
                Data1.longitude = result.longitude;
                var TodayDate1 = DateTime.Now.ToString();
                Data1.datetime = TodayDate1;
                // Data1.userid = Convert.ToInt32(Session["UserId"]);
                ABE.Entry(Data1).State = EntityState.Modified;
                ABE.SaveChanges();
                return Json("Updated Successfully");
            }
            else
            {
                return Json("Not Updated");
            }

        }


        [HttpPost]
        public ActionResult WaterIndustry_delete(string WaterIndustry_update1)
        {

            JavaScriptSerializer js = new JavaScriptSerializer();
            var result = js.Deserialize<abhy_waterdraft_industry_new>(WaterIndustry_update1);

            if (result.id != 0)
            {
                var ARID = Convert.ToInt32(result.id);
                var Data1 = ABE.obj_abhy_waterdraft_industry_new.Where(x => x.id == ARID).FirstOrDefault();
                if (Data1 != null)
                {

                    ABE.Entry(Data1).State = EntityState.Deleted;
                    ABE.SaveChanges();
                    return Json("Deleted Successfully");
                }
                else
                {
                    return Json("Not Deleted");
                }

            }
            else
            {
                return View();
            }

        }

        [HttpPost]
        public ActionResult WaterOther_Usesage_InsertData(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_waterdraft_other_new> ddetails = new List<abhy_waterdraft_other_new>();
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_waterdraft_other_new>(Data);
                    abhy_waterdraft_other_new obj = new abhy_waterdraft_other_new();
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    obj.block_name = Block;
                    obj.district_name = Dist;
                    obj.gpname = Gram;
                    double other_daily_water_req = 0;
                    if (result.other_daily_water_req != null && result.other_daily_water_req != "")
                    {
                        other_daily_water_req = double.Parse(result.other_daily_water_req);
                    }

                    double other_days_use = 0;
                    if (result.other_days_use != null && result.other_days_use != "")
                    {
                        other_days_use = double.Parse(result.other_days_use);
                    }
                    var other_annual_req = other_daily_water_req * other_days_use * 1 / 10000000;
                    obj.other_annual_req = other_annual_req.ToString("F");

                    if (result.other_daily_water_req != "")
                    {
                        obj.other_daily_water_req = result.other_daily_water_req;
                    }
                    else
                    {
                        return Json("Please Enter Daily Water Requirement(l/day)");
                    }

                    if (result.other_days_use != "")
                    {
                        obj.other_days_use = result.other_days_use;
                    }
                    else
                    {
                        return Json(" Please Enter No. of Days in Use");
                    }

                    if (result.other_demand_ground_water != "")
                    {
                        obj.other_demand_ground_water = result.other_demand_ground_water;
                    }
                    else
                    {
                        return Json(" Please Enter Demand Met From Ground Water (Ha.m)");
                    }
                    if (result.other_demand_surface_water != "")
                    {
                        obj.other_demand_surface_water = result.other_demand_surface_water;
                    }
                    else
                    {
                        return Json(" Please Enter Demand Met From Surface Water (Ha.m)");
                    }

                    if (result.other_type_of_use != "")
                    {
                        obj.other_type_of_use = result.other_type_of_use;
                    }
                    else
                    {
                        return Json(" Please Enter Type of Use");
                    }


                    obj.latitude = result.latitude;
                    obj.longitude = result.longitude;
                    obj.state_name = State;
                    var TodayDate1 = DateTime.Now.ToString();
                    obj.datetime = TodayDate1;
                    obj.userid = Convert.ToInt32(Session["UserId"]);
                    obj.officer_name = Session["Officer"].ToString();
                    ABE.obj_abhy_abhy_waterdraft_other_new.Add(obj);
                    ABE.SaveChanges();
                    return Json("Successfully Saved");

                }


                catch (Exception Ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult Other_Usage_update(string Other_Usage_update1)
        {

            JavaScriptSerializer js = new JavaScriptSerializer();
            var result = js.Deserialize<abhy_waterdraft_other_new>(Other_Usage_update1);


            var ARID = Convert.ToInt32(result.id);
            var Data1 = ABE.obj_abhy_abhy_waterdraft_other_new.Where(x => x.id == ARID).FirstOrDefault();
            if (Data1 != null)
            {
                Data1.other_annual_req = result.other_annual_req;
                Data1.other_daily_water_req = result.other_daily_water_req;
                Data1.other_days_use = result.other_days_use;
                Data1.other_demand_ground_water = result.other_demand_ground_water;
                Data1.other_demand_surface_water = result.other_demand_surface_water;
                Data1.other_type_of_use = result.other_type_of_use;
                Data1.latitude = result.latitude;
                Data1.longitude = result.longitude;
                var TodayDate1 = DateTime.Now.ToString();
                Data1.datetime = TodayDate1;
                //obj.userid = Convert.ToInt32(Session["UserId"]);

                // Data1.userid = Convert.ToInt32(Session["UserId"]);
                ABE.Entry(Data1).State = EntityState.Modified;
                ABE.SaveChanges();
                return Json("Updated Successfully");
            }
            else
            {
                return Json("Not Updated");
            }

        }


        [HttpPost]
        public ActionResult Other_Usage_delete(string Other_Usage_update1)
        {

            JavaScriptSerializer js = new JavaScriptSerializer();
            var result = js.Deserialize<abhy_waterdraft_other_new>(Other_Usage_update1);

            if (result.id != 0)
            {
                var ARID = Convert.ToInt32(result.id);
                var Data1 = ABE.obj_abhy_abhy_waterdraft_other_new.Where(x => x.id == ARID).FirstOrDefault();
                if (Data1 != null)
                {

                    ABE.Entry(Data1).State = EntityState.Deleted;
                    ABE.SaveChanges();
                    return Json("Deleted Successfully");
                }
                else
                {
                    return Json("Not Deleted");
                }

            }
            else
            {
                return View();
            }

        }
        [HttpGet]
        public ActionResult WaterOther_Usage_Info_Details()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_waterdraft_other_new> ddetails = new List<abhy_waterdraft_other_new>();

                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();

                    if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null && Gram != "" && Gram != null)
                    {
                        ddetails = ABE.obj_abhy_abhy_waterdraft_other_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                    }
                    else if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null)
                    {
                        ddetails = ABE.obj_abhy_abhy_waterdraft_other_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                    }
                    else if (State != "" && State != null && Dist != "" && Dist != null)
                    {
                        ddetails = ABE.obj_abhy_abhy_waterdraft_other_new.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                    }
                    else if (State != "" && State != null)
                    {
                        ddetails = ABE.obj_abhy_abhy_waterdraft_other_new.Where(x => x.state_name == State).ToList();//total list

                    }
                    return Json(ddetails, JsonRequestBehavior.AllowGet);
                }
                catch (Exception Ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
                // return RedirectToAction("WSP_GWM_HOME", "WSPNew");
            }
        }


        [HttpGet]
        public ActionResult WaterAvailabilty_GPAREA_Details()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_gpdata_new> ddetails = new List<abhy_gpdata_new>();

                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();

                    if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null && Gram != "" && Gram != null)
                    {
                        ddetails = ABE.obj_abhy_gpdata_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gram_panchayat_name == Gram).ToList();//total list

                    }
                    else if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null)
                    {
                        ddetails = ABE.obj_abhy_gpdata_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                    }
                    else if (State != "" && State != null && Dist != "" && Dist != null)
                    {
                        ddetails = ABE.obj_abhy_gpdata_new.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                    }
                    else if (State != "" && State != null)
                    {
                        ddetails = ABE.obj_abhy_gpdata_new.Where(x => x.state_name == State).ToList();//total list

                    }
                    return Json(ddetails, JsonRequestBehavior.AllowGet);
                }
                catch (Exception Ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
                // return RedirectToAction("WSP_GWM_HOME", "WSPNew");
            }
        }



        [HttpGet]
        public ActionResult WaterAvailabiltyInfo_Details()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_wateravailability_new> ddetails = new List<abhy_wateravailability_new>();

                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();

                    if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null && Gram != "" && Gram != null)
                    {
                        ddetails = ABE.obj_abhy_wateravailability_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                    }
                    else if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null)
                    {
                        ddetails = ABE.obj_abhy_wateravailability_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                    }
                    else if (State != "" && State != null && Dist != "" && Dist != null)
                    {
                        ddetails = ABE.obj_abhy_wateravailability_new.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                    }
                    else if (State != "" && State != null)
                    {
                        ddetails = ABE.obj_abhy_wateravailability_new.Where(x => x.state_name == State).ToList();//total list

                    }
                    return Json(ddetails, JsonRequestBehavior.AllowGet);
                }
                catch (Exception Ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }

            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
                // return RedirectToAction("WSP_GWM_HOME", "WSPNew");
            }
        }

        [HttpPost]
        public ActionResult WaterAvailabiltyInfo__InsertData(string gw_rainfall_monsoon, string latitude, string longitude, string gw_rainfall_nonmonsoon, string gw_rainfal_tol_recharge, string gw_other_monsoon, string gw_other_nonmonsoon, string gw_other_tol_recharge, string total_gw_available, string sw_annual_rainfall, string sw_tol_water_avail, string sw_evapo, string sw_evapo_loses, string total_sw_availble, string noof_sw_storage_structures, string total_storage_capacity, string sw_available_for_use, string volume_of_runoff, string natural_losses, string loss_percentage, string total_water_avaliable_utiilization, string utilizable_rainfall_runoff, string weighted_avg_runoff)
        {
            if (Session["UserId"] != null)
            {
                List<abhy_gpdata_new> ddetails11 = new List<abhy_gpdata_new>();
                List<abhy_wateravailability_new> ddetails = new List<abhy_wateravailability_new>();
                //JavaScriptSerializer js = new JavaScriptSerializer();
                //var result = js.Deserialize<abhy_wateravailability_new>(Data);
                abhy_wateravailability_new obj = new abhy_wateravailability_new();
                var State = Session["gstate"].ToString();
                var Dist = Session["gdist"].ToString();
                var Block = Session["gblock"].ToString();
                var Gram = Session["ggram"].ToString();
                if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                {
                    ddetails11 = ABE.obj_abhy_gpdata_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gram_panchayat_name == Gram).ToList();//total list
                    ddetails = ABE.obj_abhy_wateravailability_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list
                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                {
                    ddetails11 = ABE.obj_abhy_gpdata_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list
                    ddetails = ABE.obj_abhy_wateravailability_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list
                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                {
                    ddetails11 = ABE.obj_abhy_gpdata_new.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list
                    ddetails = ABE.obj_abhy_wateravailability_new.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                }
                else if (State != "" && State != null)
                {
                    ddetails11 = ABE.obj_abhy_gpdata_new.Where(x => x.state_name == State).ToList();//total list
                    ddetails = ABE.obj_abhy_wateravailability_new.Where(x => x.state_name == State).ToList();//total list

                }
                if (ddetails.Count != 0)
                {
                    double sw_tol_water_avail1 = 0;
                    double sw_evapo_loses1 = 0;

                    double gw_rainfal_tol_recharge1 = 0;
                    double gw_other_tol_recharge1 = 0;

                    float GpAREA = float.Parse(ddetails11[0].gp_area);
                    // sw_annual_rainfall

                    if (sw_annual_rainfall != "" && sw_annual_rainfall != null)
                    {
                        sw_tol_water_avail1 = (GpAREA * float.Parse(sw_annual_rainfall) * 0.001);
                    }
                    else
                    {
                        sw_tol_water_avail1 = (GpAREA * 0 * 0.001);
                    }

                    if (sw_evapo != null && sw_evapo != "")
                    {
                        sw_evapo_loses1 = (GpAREA * float.Parse(sw_evapo) * 0.001);
                    }
                    else
                    {
                        sw_evapo_loses1 = (GpAREA * 0 * 0.001);
                    }


                    if (gw_rainfall_monsoon != null && gw_rainfall_monsoon != "")
                    {
                        gw_rainfal_tol_recharge1 += float.Parse(gw_rainfall_monsoon);
                    }

                    if (gw_rainfall_nonmonsoon != null && gw_rainfall_nonmonsoon != "")
                    {
                        gw_rainfal_tol_recharge1 += float.Parse(gw_rainfall_nonmonsoon);
                    }


                    if (gw_other_monsoon != null && gw_other_monsoon != "")
                    {
                        gw_other_tol_recharge1 += float.Parse(gw_other_monsoon);
                    }

                    if (gw_other_nonmonsoon != null && gw_other_nonmonsoon != "")
                    {
                        gw_other_tol_recharge1 += float.Parse(gw_other_nonmonsoon);
                    }

                    double sw_available_for_use1 = 0;

                    double total_storage_capacity1 = 0;
                    double loss_percentage1 = 0;
                    if (total_storage_capacity != null && total_storage_capacity != "")
                    {
                        total_storage_capacity1 = float.Parse(total_storage_capacity);
                    }

                    if (loss_percentage != null && loss_percentage != "")
                    {
                        loss_percentage1 = float.Parse(loss_percentage);
                    }

                    sw_available_for_use1 = (total_storage_capacity1 - (total_storage_capacity1 * loss_percentage1 / 100));

                    var ddetails1 = ddetails.SingleOrDefault();
                    ddetails1.state_name = State;
                    ddetails1.district_name = Dist;
                    ddetails1.block_name = Block;
                    ddetails1.gpname = Gram;
                    ddetails1.latitude = latitude;
                    ddetails1.longitude = longitude;
                    ddetails1.gw_other_monsoon = gw_other_monsoon;
                    ddetails1.gw_other_nonmonsoon = gw_other_nonmonsoon;
                    ddetails1.gw_other_tol_recharge = gw_other_tol_recharge1.ToString("F");
                    ddetails1.gw_rainfall_monsoon = gw_rainfall_monsoon;
                    ddetails1.gw_rainfall_nonmonsoon = gw_rainfall_nonmonsoon;
                    ddetails1.gw_rainfal_tol_recharge = gw_rainfal_tol_recharge1.ToString("F");
                    ddetails1.sw_annual_rainfall = sw_annual_rainfall;
                    ddetails1.sw_evapo = sw_evapo;
                    ddetails1.sw_evapo_loses = sw_evapo_loses1.ToString("F");
                    ddetails1.sw_tol_water_avail = sw_tol_water_avail1.ToString("F");
                    ddetails1.total_gw_available = total_gw_available;

                    ddetails1.total_sw_availble = total_sw_availble;
                    ddetails1.officer_name = Session["Officer"].ToString();

                    //ddetails1.sw_premonsoon_rainfall = sw_premonsoon_rainfall;
                    //ddetails1.sw_postmonsoon_rainfall = sw_postmonsoon_rainfall;

                    //new columns added
                    ddetails1.noof_sw_storage_structures = noof_sw_storage_structures;
                    ddetails1.total_storage_capacity = total_storage_capacity;
                    ddetails1.sw_available_for_use = sw_available_for_use1.ToString("F");
                    ddetails1.volume_of_runoff = volume_of_runoff;

                    ddetails1.natural_losses = natural_losses;
                    ddetails1.loss_percentage = loss_percentage;
                    ddetails1.total_water_avaliable_utiilization = total_water_avaliable_utiilization;
                    ddetails1.utilizable_rainfall_runoff = utilizable_rainfall_runoff;
                    if (weighted_avg_runoff != "" && weighted_avg_runoff != null)
                    {
                        ddetails1.weighted_avg_runoff = weighted_avg_runoff;
                    }
                    else
                    {
                        return Json("Please Enter Weighted Average Runoff Coefficient");
                    }
                    var TodayDate1 = DateTime.Now.ToString();
                    //var Datea = TodayDate1.Split('/', ' ', '-');
                    //var Today1 = Datea[1] + '/' + Datea[0] + '/' + Datea[2];
                    ddetails1.datetime = TodayDate1;

                    ddetails1.userid = Convert.ToInt32(Session["UserId"]);
                    ABE.Entry(ddetails1).State = EntityState.Modified;
                    ABE.SaveChanges();
                    return Json("Successfully Saved");
                }
                else
                {
                    double sw_tol_water_avail1 = 0;
                    double sw_evapo_loses1 = 0;

                    double gw_rainfal_tol_recharge1 = 0;
                    double gw_other_tol_recharge1 = 0;
                    string temp = ddetails11[0].gp_area;
                    float GpAREA = float.Parse(ddetails11[0].gp_area);
                    // sw_annual_rainfall

                    if (sw_annual_rainfall != "" && sw_annual_rainfall != null)
                    {
                        sw_tol_water_avail1 = (GpAREA * float.Parse(sw_annual_rainfall) * 0.001);
                    }
                    else
                    {
                        sw_tol_water_avail1 = (GpAREA * 0 * 0.001);
                    }

                    if (sw_evapo != null && sw_evapo != "")
                    {
                        sw_evapo_loses1 = (GpAREA * float.Parse(sw_evapo) * 0.001);
                    }
                    else
                    {
                        sw_evapo_loses1 = (GpAREA * 0 * 0.001);
                    }


                    if (gw_rainfall_monsoon != null && gw_rainfall_monsoon != "")
                    {
                        gw_rainfal_tol_recharge1 += float.Parse(gw_rainfall_monsoon);
                    }

                    if (gw_rainfall_nonmonsoon != null && gw_rainfall_nonmonsoon != "")
                    {
                        gw_rainfal_tol_recharge1 += float.Parse(gw_rainfall_nonmonsoon);
                    }


                    if (gw_other_monsoon != null && gw_other_monsoon != "")
                    {
                        gw_other_tol_recharge1 += float.Parse(gw_other_monsoon);
                    }

                    if (gw_other_nonmonsoon != null && gw_other_nonmonsoon != "")
                    {
                        gw_other_tol_recharge1 += float.Parse(gw_other_nonmonsoon);
                    }

                    double sw_available_for_use1 = 0;

                    double total_storage_capacity1 = 0;
                    double loss_percentage1 = 0;
                    if (total_storage_capacity != null && total_storage_capacity != "")
                    {
                        total_storage_capacity1 = float.Parse(total_storage_capacity);
                    }

                    if (loss_percentage != null && loss_percentage != "")
                    {
                        loss_percentage1 = float.Parse(loss_percentage);
                    }

                    sw_available_for_use1 = (total_storage_capacity1 - (total_storage_capacity1 * loss_percentage1 / 100));

                    obj.state_name = State;
                    obj.district_name = Dist;
                    obj.block_name = Block;
                    obj.gpname = Gram;
                    obj.latitude = latitude;
                    obj.longitude = longitude;
                    obj.gw_other_monsoon = gw_other_monsoon;
                    obj.gw_other_nonmonsoon = gw_other_nonmonsoon;
                    obj.gw_other_tol_recharge = gw_other_tol_recharge1.ToString("F");
                    obj.gw_rainfall_monsoon = gw_rainfall_monsoon;
                    obj.gw_rainfall_nonmonsoon = gw_rainfall_nonmonsoon;
                    obj.gw_rainfal_tol_recharge = gw_rainfal_tol_recharge1.ToString("F");
                    obj.sw_annual_rainfall = sw_annual_rainfall;
                    obj.sw_evapo = sw_evapo;
                    obj.sw_evapo_loses = sw_evapo_loses1.ToString("F");
                    obj.sw_tol_water_avail = sw_tol_water_avail1.ToString("F");
                    obj.total_gw_available = total_gw_available;

                    obj.total_sw_availble = total_sw_availble;
                    obj.userid = Convert.ToInt32(Session["UserId"]);

                    //new columns added
                    obj.noof_sw_storage_structures = noof_sw_storage_structures;
                    obj.total_storage_capacity = total_storage_capacity;
                    obj.sw_available_for_use = sw_available_for_use1.ToString("F");
                    obj.volume_of_runoff = volume_of_runoff;



                    obj.natural_losses = natural_losses;
                    obj.loss_percentage = loss_percentage;
                    obj.total_water_avaliable_utiilization = total_water_avaliable_utiilization;

                    obj.utilizable_rainfall_runoff = utilizable_rainfall_runoff;
                    if (weighted_avg_runoff != "" && weighted_avg_runoff != null)
                    {
                        obj.weighted_avg_runoff = weighted_avg_runoff;
                    }
                    else
                    {
                        return Json("Please Enter Weighted Average Runoff Coefficient");
                    }
                    //obj.sw_premonsoon_rainfall = result.sw_premonsoon_rainfall;
                    //obj.sw_postmonsoon_rainfall = result.sw_postmonsoon_rainfall;
                    var TodayDate1 = DateTime.Now.ToString();

                    obj.datetime = TodayDate1;

                    obj.officer_name = Session["Officer"].ToString();

                    ABE.obj_abhy_wateravailability_new.Add(obj);
                    ABE.SaveChanges();
                    return Json("Successfully Saved");
                }
            }
            else
            {
                Session["WSPHOME"] = "Data";
                return RedirectToAction("WSP_GWM_HOME", "WSPNew");
            }
        }

        [HttpPost]
        public ActionResult WaterBalanceInfo__InsertData(string Data)
        {
            List<abhy_wateravailability_new> abhy_wateravailability_new_1 = new List<abhy_wateravailability_new>();
            if (Session["UserId"] != null)
            {
                List<abhy_waterbalance_new> ddetails = new List<abhy_waterbalance_new>();
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<abhy_waterbalance_new>(Data);
                abhy_waterbalance_new obj = new abhy_waterbalance_new();
                var State = Session["gstate"].ToString();
                var Dist = Session["gdist"].ToString();
                var Block = Session["gblock"].ToString();
                var Gram = Session["ggram"].ToString();

                List<abhy_waterdraft_new> abhy_waterdraft_new_1 = new List<abhy_waterdraft_new>();
                List<abhy_waterdraft_domestic_new> abhy_waterdraft_domestic_new_1 = new List<abhy_waterdraft_domestic_new>();
                List<abhy_waterdraft_industry_new> abhy_waterdraft_industry_new_1 = new List<abhy_waterdraft_industry_new>();
                List<abhy_waterdraft_other_new> abhy_waterdraft_other_new_1 = new List<abhy_waterdraft_other_new>();



                if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                {
                    ddetails = ABE.obj_abhy_waterbalance_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list
                    abhy_wateravailability_new_1 = ABE.obj_abhy_wateravailability_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();

                    abhy_waterdraft_new_1 = ABE.obj_abhy_waterdraft_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();
                    abhy_waterdraft_domestic_new_1 = ABE.obj_abhy_waterdraft_domestic_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();
                    abhy_waterdraft_industry_new_1 = ABE.obj_abhy_waterdraft_industry_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();
                    abhy_waterdraft_other_new_1 = ABE.obj_abhy_abhy_waterdraft_other_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();

                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                {
                    ddetails = ABE.obj_abhy_waterbalance_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list
                    abhy_wateravailability_new_1 = ABE.obj_abhy_wateravailability_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();

                    abhy_waterdraft_new_1 = ABE.obj_abhy_waterdraft_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();
                    abhy_waterdraft_domestic_new_1 = ABE.obj_abhy_waterdraft_domestic_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();
                    abhy_waterdraft_industry_new_1 = ABE.obj_abhy_waterdraft_industry_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();
                    abhy_waterdraft_other_new_1 = ABE.obj_abhy_abhy_waterdraft_other_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();

                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                {
                    ddetails = ABE.obj_abhy_waterbalance_new.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list
                    abhy_wateravailability_new_1 = ABE.obj_abhy_wateravailability_new.Where(x => x.state_name == State && x.district_name == Dist).ToList();

                    abhy_waterdraft_new_1 = ABE.obj_abhy_waterdraft_new.Where(x => x.state_name == State && x.district_name == Dist).ToList();
                    abhy_waterdraft_domestic_new_1 = ABE.obj_abhy_waterdraft_domestic_new.Where(x => x.state_name == State && x.district_name == Dist).ToList();
                    abhy_waterdraft_industry_new_1 = ABE.obj_abhy_waterdraft_industry_new.Where(x => x.state_name == State && x.district_name == Dist).ToList();
                    abhy_waterdraft_other_new_1 = ABE.obj_abhy_abhy_waterdraft_other_new.Where(x => x.state_name == State && x.district_name == Dist).ToList();

                }
                else if (State != "" && State != null)
                {
                    ddetails = ABE.obj_abhy_waterbalance_new.Where(x => x.state_name == State).ToList();//total list
                    abhy_wateravailability_new_1 = ABE.obj_abhy_wateravailability_new.Where(x => x.state_name == State).ToList();

                    abhy_waterdraft_new_1 = ABE.obj_abhy_waterdraft_new.Where(x => x.state_name == State).ToList();
                    abhy_waterdraft_domestic_new_1 = ABE.obj_abhy_waterdraft_domestic_new.Where(x => x.state_name == State).ToList();
                    abhy_waterdraft_industry_new_1 = ABE.obj_abhy_waterdraft_industry_new.Where(x => x.state_name == State).ToList();
                    abhy_waterdraft_other_new_1 = ABE.obj_abhy_abhy_waterdraft_other_new.Where(x => x.state_name == State).ToList();

                }
                if (ddetails.Count == 1)
                {
                    var ddetails1 = ddetails.SingleOrDefault();
                    ddetails1.state_name = State;
                    ddetails1.district_name = Dist;
                    ddetails1.block_name = Block;
                    ddetails1.gpname = Gram;
                    double wb_sw_avail = 0;
                    if (abhy_wateravailability_new_1[0].sw_available_for_use != null && abhy_wateravailability_new_1[0].sw_available_for_use != "")
                    {
                        wb_sw_avail = double.Parse(abhy_wateravailability_new_1[0].sw_available_for_use);
                    }

                    double wb_gw_avail = 0;

                    if (abhy_wateravailability_new_1[0].total_gw_available != null && abhy_wateravailability_new_1[0].total_gw_available != "")
                    {
                        wb_gw_avail = double.Parse(abhy_wateravailability_new_1[0].total_gw_available);
                    }

                    double wb_total_avail = wb_sw_avail + wb_gw_avail;


                    double irri_utili_surface_water = 0;
                    double irri_utili_ground_water = 0;

                    if (abhy_waterdraft_new_1[0].irri_utili_surface_water != null && abhy_waterdraft_new_1[0].irri_utili_surface_water != "")
                    {
                        irri_utili_surface_water = double.Parse(abhy_waterdraft_new_1[0].irri_utili_surface_water);
                    }
                    if (abhy_waterdraft_new_1[0].irri_utili_ground_water != null && abhy_waterdraft_new_1[0].irri_utili_ground_water != "")
                    {
                        irri_utili_ground_water = double.Parse(abhy_waterdraft_new_1[0].irri_utili_ground_water);
                    }


                    double domestic_demand_ground_water_total_value = 0;

                    double domestic_demand_surface_water_total_value = 0;

                    if (abhy_waterdraft_domestic_new_1[0].domestic_demand_ground_water_total_value != null && abhy_waterdraft_domestic_new_1[0].domestic_demand_ground_water_total_value != "")
                    {
                        domestic_demand_ground_water_total_value = double.Parse(abhy_waterdraft_domestic_new_1[0].domestic_demand_ground_water_total_value);
                    }
                    if (abhy_waterdraft_domestic_new_1[0].domestic_demand_surface_water_total_value != null && abhy_waterdraft_domestic_new_1[0].domestic_demand_surface_water_total_value != "")
                    {
                        domestic_demand_surface_water_total_value = double.Parse(abhy_waterdraft_domestic_new_1[0].domestic_demand_surface_water_total_value);
                    }


                    double industry_demand_ground_water = 0;

                    
                        foreach (var item in abhy_waterdraft_industry_new_1)
                        {
                            if (item.industry_demand_ground_water != null && item.industry_demand_ground_water != "")
                            {
                                industry_demand_ground_water += double.Parse(item.industry_demand_ground_water);
                            }
                        }
                    
                    


                    //if (abhy_waterdraft_industry_new_1[0].industry_demand_ground_water != null && abhy_waterdraft_industry_new_1[0].industry_demand_ground_water != "")
                    //{

                    //    industry_demand_ground_water = double.Parse(abhy_waterdraft_industry_new_1[0].industry_demand_ground_water);
                    //}


                    double other_demand_ground_water = 0;
                    
                        foreach (var item in abhy_waterdraft_other_new_1)
                        {
                            if (item.other_demand_ground_water != null && item.other_demand_ground_water != "")
                            {
                                other_demand_ground_water += double.Parse(item.other_demand_ground_water);
                            }
                        }
                    

                    

                    //if (abhy_waterdraft_other_new_1[0].other_demand_ground_water != null && abhy_waterdraft_other_new_1[0].other_demand_ground_water != "")
                    //{

                    //    other_demand_ground_water = double.Parse(abhy_waterdraft_other_new_1[0].other_demand_ground_water);
                    //}
                    double wb_sw_utili = irri_utili_surface_water + domestic_demand_ground_water_total_value;

                    double wb_gw_utili = irri_utili_ground_water + domestic_demand_surface_water_total_value + industry_demand_ground_water + other_demand_ground_water;


                    double wb_total_utili = wb_sw_utili + wb_gw_utili;

                    double wb_sw_balance = wb_sw_avail - wb_sw_utili;
                    double wb_gw_balance = wb_gw_avail - wb_gw_utili;


                    double wb_total_balance = wb_sw_balance + wb_gw_balance;



                    ddetails1.latitude = result.latitude;
                    ddetails1.longitude = result.longitude;
                    ddetails1.wb_sw_avail = wb_sw_avail.ToString("F");
                    ddetails1.wb_gw_avail = wb_gw_avail.ToString("F");
                    ddetails1.wb_total_avail = wb_total_avail.ToString("F");
                    ddetails1.wb_sw_utili = wb_sw_utili.ToString("F");
                    ddetails1.wb_gw_utili = wb_gw_utili.ToString("F");
                    ddetails1.wb_total_utili = wb_total_utili.ToString("F");
                    ddetails1.wb_sw_balance = wb_sw_balance.ToString("F");
                    ddetails1.wb_gw_balance = wb_gw_balance.ToString("F");
                    ddetails1.wb_total_balance = wb_total_balance.ToString("F");
                    var TodayDate1 = DateTime.Now.ToString();
                    ddetails1.officer_name = Session["Officer"].ToString();

                    ddetails1.datetime = TodayDate1;
                    ddetails1.userid = Convert.ToInt32(Session["UserId"]);
                    ABE.Entry(ddetails1).State = EntityState.Modified;
                    ABE.SaveChanges();
                    return Json("Successfully Saved");
                }
                else
                {
                    if (ddetails.Count == 0)
                    {

                        double wb_sw_avail = 0;
                        if (abhy_wateravailability_new_1[0].sw_available_for_use != null && abhy_wateravailability_new_1[0].sw_available_for_use != "")
                        {
                            wb_sw_avail = double.Parse(abhy_wateravailability_new_1[0].sw_available_for_use);
                        }

                        double wb_gw_avail = 0;

                        if (abhy_wateravailability_new_1[0].total_gw_available != null && abhy_wateravailability_new_1[0].total_gw_available != "")
                        {
                            wb_gw_avail = double.Parse(abhy_wateravailability_new_1[0].total_gw_available);
                        }

                        double wb_total_avail = wb_sw_avail + wb_gw_avail;


                        double irri_utili_surface_water = 0;
                        double irri_utili_ground_water = 0;

                        if (abhy_waterdraft_new_1[0].irri_utili_surface_water != null && abhy_waterdraft_new_1[0].irri_utili_surface_water != "")
                        {
                            irri_utili_surface_water = double.Parse(abhy_waterdraft_new_1[0].irri_utili_surface_water);
                        }
                        if (abhy_waterdraft_new_1[0].irri_utili_ground_water != null && abhy_waterdraft_new_1[0].irri_utili_ground_water != "")
                        {
                            irri_utili_ground_water = double.Parse(abhy_waterdraft_new_1[0].irri_utili_ground_water);
                        }


                        double domestic_demand_ground_water_total_value = 0;

                        double domestic_demand_surface_water_total_value = 0;

                        if (abhy_waterdraft_domestic_new_1[0].domestic_demand_ground_water_total_value != null && abhy_waterdraft_domestic_new_1[0].domestic_demand_ground_water_total_value != "")
                        {
                            domestic_demand_ground_water_total_value = double.Parse(abhy_waterdraft_new_1[0].domestic_demand_ground_water_total_value);
                        }
                        if (abhy_waterdraft_domestic_new_1[0].domestic_demand_surface_water_total_value != null && abhy_waterdraft_domestic_new_1[0].domestic_demand_surface_water_total_value != "")
                        {
                            domestic_demand_surface_water_total_value = double.Parse(abhy_waterdraft_domestic_new_1[0].domestic_demand_surface_water_total_value);
                        }

                        double industry_demand_ground_water = 0;

                        if (abhy_waterdraft_industry_new_1[0].industry_demand_ground_water != null && abhy_waterdraft_industry_new_1[0].industry_demand_ground_water != "")
                        {
                            industry_demand_ground_water = double.Parse(abhy_waterdraft_industry_new_1[0].industry_demand_ground_water);
                        }


                        double other_demand_ground_water = 0;

                        if (abhy_waterdraft_other_new_1[0].other_demand_ground_water != null && abhy_waterdraft_other_new_1[0].other_demand_ground_water != "")
                        {
                            other_demand_ground_water = double.Parse(abhy_waterdraft_other_new_1[0].other_demand_ground_water);
                        }

                        double wb_sw_utili = irri_utili_surface_water + domestic_demand_ground_water_total_value;

                        double wb_gw_utili = irri_utili_ground_water + domestic_demand_surface_water_total_value + industry_demand_ground_water + other_demand_ground_water;


                        double wb_total_utili = wb_sw_utili + wb_gw_utili;

                        double wb_sw_balance = wb_sw_avail - wb_sw_utili;
                        double wb_gw_balance = wb_gw_avail - wb_gw_utili;

                        double wb_total_balance = wb_sw_balance + wb_gw_balance;
                        obj.state_name = State;
                        obj.district_name = Dist;
                        obj.block_name = Block;
                        obj.gpname = Gram;
                        obj.latitude = result.latitude;
                        obj.longitude = result.longitude;
                        obj.wb_sw_avail = wb_sw_avail.ToString("F");
                        obj.wb_gw_avail = wb_gw_avail.ToString("F");
                        obj.wb_total_avail = wb_total_avail.ToString("F");
                        obj.wb_sw_utili = wb_sw_utili.ToString("F");
                        obj.wb_gw_utili = wb_gw_utili.ToString("F");
                        obj.wb_total_utili = wb_total_utili.ToString("F");
                        obj.wb_sw_balance = wb_sw_balance.ToString("F");
                        obj.wb_gw_balance = wb_gw_balance.ToString("F");
                        obj.wb_total_balance = wb_total_balance.ToString("F");
                        var TodayDate1 = DateTime.Now.ToString();

                        obj.datetime = TodayDate1;
                        obj.officer_name = Session["Officer"].ToString();

                        obj.userid = Convert.ToInt32(Session["UserId"]);
                        ABE.obj_abhy_waterbalance_new.Add(obj);
                        ABE.SaveChanges();
                        return Json("Successfully Saved");
                    }
                    else
                    {
                        return Json("Duplicate Data is there");
                    }

                }
            }
            else
            {
                Session["WSPHOME"] = "Data";
                return RedirectToAction("WSP_GWM_HOME", "WSPNew");
            }
        }


        [HttpGet]
        public ActionResult WaterBudgetInfo_Details()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_waterbudget_new> ddetails = new List<abhy_waterbudget_new>();

                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        ddetails = ABE.obj_abhy_waterbudget_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        ddetails = ABE.obj_abhy_waterbudget_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        ddetails = ABE.obj_abhy_waterbudget_new.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                    }
                    else if (State != "" && State != null)
                    {
                        ddetails = ABE.obj_abhy_waterbudget_new.Where(x => x.state_name == State).ToList();//total list

                    }
                    return Json(ddetails, JsonRequestBehavior.AllowGet);
                }
                catch (Exception Ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
                // return RedirectToAction("WSP_GWM_HOME", "WSPNew");
            }


        }

        [HttpGet]
        public ActionResult WaterBalanceInserted_Details()
        {
            List<abhy_waterbalance_new> ddetails = new List<abhy_waterbalance_new>();
            var State = Session["gstate"].ToString();
            var Dist = Session["gdist"].ToString();
            var Block = Session["gblock"].ToString();
            var Gram = Session["ggram"].ToString();

            if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
            {
                ddetails = ABE.obj_abhy_waterbalance_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

            }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
            {
                ddetails = ABE.obj_abhy_waterbalance_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

            }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
            {
                ddetails = ABE.obj_abhy_waterbalance_new.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

            }
            else if (State != "" && State != null)
            {
                ddetails = ABE.obj_abhy_waterbalance_new.Where(x => x.state_name == State).ToList();//total list

            }
            return Json(ddetails, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult WaterBudgetInfo__InsertData(string Data)
        {
            if (Session["UserId"] != null)
            {
                List<abhy_wateravailability_new> abhy_wateravailability_new_1 = new List<abhy_wateravailability_new>();
                List<abhy_waterbudget_new> ddetails = new List<abhy_waterbudget_new>();
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<abhy_waterbudget_new>(Data);
                abhy_waterbudget_new obj = new abhy_waterbudget_new();
                var State = Session["gstate"].ToString();
                var Dist = Session["gdist"].ToString();
                var Block = Session["gblock"].ToString();
                var Gram = Session["ggram"].ToString();

                if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                {
                    ddetails = ABE.obj_abhy_waterbudget_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list
                    abhy_wateravailability_new_1 = ABE.obj_abhy_wateravailability_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list
                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                {
                    ddetails = ABE.obj_abhy_waterbudget_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list
                    abhy_wateravailability_new_1 = ABE.obj_abhy_wateravailability_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list
                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                {
                    ddetails = ABE.obj_abhy_waterbudget_new.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list
                    abhy_wateravailability_new_1 = ABE.obj_abhy_wateravailability_new.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list
                }
                else if (State != "" && State != null)
                {
                    ddetails = ABE.obj_abhy_waterbudget_new.Where(x => x.state_name == State).ToList();//total list
                    abhy_wateravailability_new_1 = ABE.obj_abhy_wateravailability_new.Where(x => x.state_name == State).ToList();//total list
                }
                if (ddetails.Count == 1)
                {
                    var ddetails1 = ddetails.SingleOrDefault();
                    ddetails1.state_name = State;
                    ddetails1.district_name = Dist;
                    ddetails1.block_name = Block;
                    ddetails1.gpname = Gram;
                    ddetails1.latitude = result.latitude;
                    ddetails1.longitude = result.longitude;
                    double wb_drinking_project_pop = 0;
                    double wb_drinking_population = 0;
                    double population_growth_rate = 0;

                    if (result.wb_drinking_population != null && result.wb_drinking_population != "")
                    {
                        wb_drinking_population = double.Parse(result.wb_drinking_population);
                    }
                    if (result.population_growth_rate != null && result.population_growth_rate != "")
                    {
                        population_growth_rate = double.Parse(result.population_growth_rate);
                    }

                    wb_drinking_project_pop = wb_drinking_population * population_growth_rate;

                    double wb_drinking_percapita_req = 0;
                    if (result.wb_drinking_percapita_req != null && result.wb_drinking_percapita_req != "")
                    {
                        wb_drinking_percapita_req = double.Parse(result.wb_drinking_percapita_req);
                    }

                    double wb_drinking_alloc_req = wb_drinking_project_pop * wb_drinking_percapita_req * 365 * 1 / 10000000;
                    double wb_drinking_from_sw = wb_drinking_alloc_req * 0.3;
                    double wb_drinking_from_gw = wb_drinking_alloc_req * 0.7;
                    double wb_drinking_total = wb_drinking_from_sw + wb_drinking_from_gw;


                    double sw_available_for_use = 0;
                    double total_gw_available = 0;
                    if (abhy_wateravailability_new_1[0].total_gw_available != null && abhy_wateravailability_new_1[0].total_gw_available != "")
                    {
                        total_gw_available = double.Parse(abhy_wateravailability_new_1[0].total_gw_available);
                    }
                    if (abhy_wateravailability_new_1[0].sw_available_for_use != null && abhy_wateravailability_new_1[0].sw_available_for_use != "")
                    {
                        sw_available_for_use = double.Parse(abhy_wateravailability_new_1[0].sw_available_for_use);
                    }

                    double wb_irri_agri_sw = sw_available_for_use - wb_drinking_from_sw;
                    double wb_irri_agri_gw = total_gw_available - wb_drinking_from_gw;
                    double wb_irri_agri_total = wb_irri_agri_sw + wb_irri_agri_gw;

                    ddetails1.wb_drinking_population = result.wb_drinking_population;
                    ddetails1.wb_drinking_project_pop = wb_drinking_project_pop.ToString("F");
                    ddetails1.wb_drinking_percapita_req = wb_drinking_percapita_req.ToString("F");
                    ddetails1.wb_drinking_alloc_req = wb_drinking_alloc_req.ToString("F");
                    ddetails1.wb_drinking_from_sw = wb_drinking_from_sw.ToString("F");
                    ddetails1.wb_drinking_from_gw = wb_drinking_from_gw.ToString("F");
                    ddetails1.wb_drinking_total = wb_drinking_total.ToString("F");
                    ddetails1.wb_irri_agri_sw = wb_irri_agri_sw.ToString("F");
                    ddetails1.wb_irri_agri_gw = wb_irri_agri_gw.ToString("F");
                    ddetails1.wb_irri_agri_total = wb_irri_agri_total.ToString("F");
                    ddetails1.population_growth_rate = result.population_growth_rate;
                    ddetails1.userid = Convert.ToInt32(Session["UserId"]);
                    var TodayDate1 = DateTime.Now.ToString();
                    ddetails1.officer_name = Session["Officer"].ToString();
                    ddetails1.datetime = TodayDate1;
                    ABE.Entry(ddetails1).State = EntityState.Modified;
                    ABE.SaveChanges();
                    return Json("Successfully Saved");
                }
                else
                {
                    if (ddetails.Count == 0)
                    {
                        double wb_drinking_project_pop = 0;
                        double wb_drinking_population = 0;
                        double population_growth_rate = 0;

                        if (result.wb_drinking_population != null && result.wb_drinking_population != "")
                        {
                            wb_drinking_population = double.Parse(result.wb_drinking_population);
                        }
                        if (result.population_growth_rate != null && result.population_growth_rate != "")
                        {
                            population_growth_rate = double.Parse(result.population_growth_rate);
                        }

                        wb_drinking_project_pop = wb_drinking_population * population_growth_rate;

                        double wb_drinking_percapita_req = 0;
                        if (result.wb_drinking_percapita_req != null && result.wb_drinking_percapita_req != "")
                        {
                            wb_drinking_percapita_req = double.Parse(result.wb_drinking_percapita_req);
                        }

                        double wb_drinking_alloc_req = wb_drinking_project_pop * wb_drinking_percapita_req * 365 * 1 / 10000000;
                        double wb_drinking_from_sw = wb_drinking_alloc_req * 0.3;
                        double wb_drinking_from_gw = wb_drinking_alloc_req * 0.7;
                        double wb_drinking_total = wb_drinking_from_sw + wb_drinking_from_gw;


                        double sw_available_for_use = 0;
                        double total_gw_available = 0;
                        if (abhy_wateravailability_new_1[0].total_gw_available != null && abhy_wateravailability_new_1[0].total_gw_available != "")
                        {
                            total_gw_available = double.Parse(abhy_wateravailability_new_1[0].total_gw_available);
                        }
                        if (abhy_wateravailability_new_1[0].sw_available_for_use != null && abhy_wateravailability_new_1[0].sw_available_for_use != "")
                        {
                            sw_available_for_use = double.Parse(abhy_wateravailability_new_1[0].sw_available_for_use);
                        }

                        double wb_irri_agri_sw = sw_available_for_use - wb_drinking_from_sw;
                        double wb_irri_agri_gw = total_gw_available - wb_drinking_from_gw;
                        double wb_irri_agri_total = wb_irri_agri_sw + wb_irri_agri_gw;


                        obj.state_name = State;
                        obj.district_name = Dist;
                        obj.block_name = Block;
                        obj.gpname = Gram;
                        obj.latitude = result.latitude;
                        obj.longitude = result.longitude;
                        obj.wb_drinking_population = result.wb_drinking_population;
                        obj.wb_drinking_project_pop = wb_drinking_project_pop.ToString("F"); ;
                        obj.wb_drinking_percapita_req = wb_drinking_percapita_req.ToString("F");
                        obj.wb_drinking_alloc_req = wb_drinking_alloc_req.ToString("F"); ;
                        obj.wb_drinking_from_sw = wb_drinking_from_sw.ToString("F");
                        obj.wb_drinking_from_gw = wb_drinking_from_gw.ToString("F");
                        obj.wb_drinking_total = wb_drinking_total.ToString("F");
                        obj.wb_irri_agri_sw = wb_irri_agri_sw.ToString("F");
                        obj.wb_irri_agri_gw = wb_irri_agri_gw.ToString("F");
                        obj.wb_irri_agri_total = wb_irri_agri_total.ToString("F");
                        obj.population_growth_rate = result.population_growth_rate;
                        var TodayDate1 = DateTime.Now.ToString();
                        obj.officer_name = Session["Officer"].ToString();

                        obj.datetime = TodayDate1;
                        obj.userid = Convert.ToInt32(Session["UserId"]);
                        ABE.obj_abhy_waterbudget_new.Add(obj);
                        ABE.SaveChanges();
                        return Json("Successfully Saved");
                    }
                    else
                    {
                        return Json("Duplicate Data is there");
                    }


                }
            }
            else
            {
                Session["WSPHOME"] = "Data";
                return RedirectToAction("WSP_GWM_HOME", "WSPNew");
            }
        }




        [HttpGet]
        public ActionResult WaterBalanceInfo_Details()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_waterbalance_new> ddetails = new List<abhy_waterbalance_new>();

                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        ddetails = ABE.obj_abhy_waterbalance_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        ddetails = ABE.obj_abhy_waterbalance_new.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        ddetails = ABE.obj_abhy_waterbalance_new.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                    }
                    else if (State != "" && State != null)
                    {
                        ddetails = ABE.obj_abhy_waterbalance_new.Where(x => x.state_name == State).ToList();//total list
                    }
                    return Json(ddetails, JsonRequestBehavior.AllowGet);
                }
                catch (Exception Ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
                // return RedirectToAction("WSP_GWM_HOME", "WSPNew");
            }
        }



        [HttpGet]
        public ActionResult Papulation_Details()
        {
            if (Session["UserId"] != null)
            {
                List<abhy_gpdata_population> ddetails = new List<abhy_gpdata_population>();

                var userid = Convert.ToInt32(Session["UserId"]);
                var State = Session["gstate"].ToString();
                var Dist = Session["gdist"].ToString();

                var Block = Session["gblock"].ToString();
                var Gram = Session["ggram"].ToString();

                if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                {
                    ddetails = ABE.obj_abhy_gpdata_population.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list
                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                {
                    ddetails = ABE.obj_abhy_gpdata_population.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                }
                else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                {
                    ddetails = ABE.obj_abhy_gpdata_population.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                }
                else if (State != "" && State != null)
                {
                    ddetails = ABE.obj_abhy_gpdata_population.Where(x => x.state_name == State).ToList();//total list

                }
                return Json(ddetails, JsonRequestBehavior.AllowGet);
            }
            else
            {
                Session["WSPHOME"] = "Data";
                return RedirectToAction("WSP_GWM_HOME", "WSPNew");
            }
        }

        public string Image_Url_base64(string Path)
        {

            using (System.Drawing.Image image = System.Drawing.Image.FromFile(Path))
            {
                using (MemoryStream m = new MemoryStream())
                {
                    image.Save(m, image.RawFormat);
                    byte[] imageBytes = m.ToArray();

                    // Convert byte[] to Base64 String
                    string base64String = Convert.ToBase64String(imageBytes);
                    return base64String;
                }
            }

        }

        [HttpPost]
        public ActionResult MapImagesdetails(string Data)
        {
            if (Session["UserId"] != null)
            {
                List<abhy_gram_images> ddetails = new List<abhy_gram_images>();
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<abhy_gram_images>(Data);

                var State = result.state_name;
                var Dist = result.district_name;

                var Block = result.block_name;
                var Gram = result.gpname;


                var data = ABE.obj_abhy_gram_images.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list
                if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null && Gram != "" && Gram != null)
                {
                    ddetails = ABE.obj_abhy_gram_images.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                }
                else if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null)
                {
                    ddetails = ABE.obj_abhy_gram_images.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                }
                else if (State != "" && State != null && Dist != "" && Dist != null)
                {
                    ddetails = ABE.obj_abhy_gram_images.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                }
                else if (State != "" && State != null)
                {
                    ddetails = ABE.obj_abhy_gram_images.Where(x => x.state_name == State).ToList();//total list


                }

                if (ddetails.Count == 1)
                {
                    if (ddetails[0].gpimage1 != null && ddetails[0].gpimage1 != "")
                    {
                        string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                        string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");
                        string File_path = path + ddetails[0].gpimage1_filename;
                        //ddetails[0].gpimage1 = "/Ataljalimages/" + ddetails[0].gpimage1_filename;
                        string base64 = Image_Url_base64(File_path);
                        ddetails[0].gpimage1 = base64;


                    }

                    if (ddetails[0].gpimage2 != null && ddetails[0].gpimage2 != "")
                    {
                        string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                        string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");
                        string File_path = path + ddetails[0].gpimage2_filename;
                        //ddetails[0].gpimage2 = "/Ataljalimages/" + ddetails[0].gpimage2_filename;

                        string base64 = Image_Url_base64(File_path);
                        ddetails[0].gpimage2 = base64;
                    }

                    if (ddetails[0].gpimage3 != null && ddetails[0].gpimage3 != "")
                    {
                        string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                        string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");
                        string File_path = path + ddetails[0].gpimage3_filename;
                        //ddetails[0].gpimage3 = "/Ataljalimages/" + ddetails[0].gpimage3_filename;


                        string base64 = Image_Url_base64(File_path);
                        ddetails[0].gpimage3 = base64;
                    }

                    if (ddetails[0].gpimage4 != null && ddetails[0].gpimage4 != "")
                    {
                        string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                        string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");
                        string File_path = path + ddetails[0].gpimage4_filename;
                        //ddetails[0].gpimage4 = "/Ataljalimages/" + ddetails[0].gpimage4_filename;

                        string base64 = Image_Url_base64(File_path);
                        ddetails[0].gpimage4 = base64;
                    }
                    var resultdata = Json(ddetails[0], JsonRequestBehavior.AllowGet);
                    resultdata.MaxJsonLength = int.MaxValue;
                    return resultdata;
                }
                else
                {


                    var resultdata = Json(ddetails, JsonRequestBehavior.AllowGet);
                    resultdata.MaxJsonLength = int.MaxValue;
                    return resultdata;
                }


                // return Json(ddetails, JsonRequestBehavior.AllowGet);
            }
            else
            {
                Session["WSPHOME"] = "Data";
                return RedirectToAction("WSP_GWM_HOME", "WSPNew");
            }
        }


        [HttpPost]
        public ActionResult DeleteMOM_file_Detail(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_wsp_socialmonitoring>(Data);

                    if (result.id != 0)
                    {
                        var TKID = Convert.ToInt32(result.id);
                        var Data1 = ABE.obj_abhy_wsp_socialmonitoring.Where(x => x.id == TKID).SingleOrDefault();
                        if (Data1 != null)
                        {
                            Data1.minutesofmeeting = "";
                            Data1.mom_filename = "";
                            ABE.Entry(Data1).State = EntityState.Modified;
                            ABE.SaveChanges();
                            return Json("Deleted Successfully", JsonRequestBehavior.AllowGet);
                        }
                        else
                        {
                            return Json("Error", JsonRequestBehavior.AllowGet);
                        }


                    }
                    else
                    {
                        return Json("No Data", JsonRequestBehavior.AllowGet);
                    }
                }
                catch (Exception Ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }

        }
        [HttpPost]
        public ActionResult DeletePHotograph_file_Detail(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_wsp_socialmonitoring>(Data);

                    if (result.id != 0)
                    {
                        var TKID = Convert.ToInt32(result.id);
                        var Data1 = ABE.obj_abhy_wsp_socialmonitoring.Where(x => x.id == TKID).SingleOrDefault();
                        if (Data1 != null)
                        {
                            Data1.image = "";
                            Data1.photogragh_filename = "";

                            ABE.Entry(Data1).State = EntityState.Modified;
                            ABE.SaveChanges();
                            return Json("Deleted Successfully", JsonRequestBehavior.AllowGet);
                        }
                        else
                        {
                            return Json("Error", JsonRequestBehavior.AllowGet);
                        }


                    }
                    else
                    {
                        return Json("No Data", JsonRequestBehavior.AllowGet);
                    }
                }
                catch (Exception Ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }

        }

        [HttpPost]
        public ActionResult MapImagesdetails1(string Data)
        {
            if (Session["UserId"] != null)
            {
                List<abhy_gram_images> ddetails = new List<abhy_gram_images>();
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<abhy_gram_images>(Data);

                var State = result.state_name;
                var Dist = result.district_name;

                var Block = result.block_name;
                var Gram = result.gpname;


                var data = ABE.obj_abhy_gram_images.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list
                if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null && Gram != "" && Gram != null)
                {
                    ddetails = ABE.obj_abhy_gram_images.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list

                }
                else if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null)
                {
                    ddetails = ABE.obj_abhy_gram_images.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).ToList();//total list

                }
                else if (State != "" && State != null && Dist != "" && Dist != null)
                {
                    ddetails = ABE.obj_abhy_gram_images.Where(x => x.state_name == State && x.district_name == Dist).ToList();//total list

                }
                else if (State != "" && State != null)
                {
                    ddetails = ABE.obj_abhy_gram_images.Where(x => x.state_name == State).ToList();//total list


                }


                var resultdata = Json(ddetails, JsonRequestBehavior.AllowGet);
                resultdata.MaxJsonLength = int.MaxValue;
                return resultdata;


                // return Json(ddetails, JsonRequestBehavior.AllowGet);
            }
            else
            {
                Session["WSPHOME"] = "Data";
                return RedirectToAction("WSP_GWM_HOME", "WSPNew");
            }
        }

        [HttpGet]
        public ActionResult Social_Monitor_Details_website1()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_wsp_socialmonitoring> ddetails = new List<abhy_wsp_socialmonitoring>();


                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();
                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();

                    if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null && Gram != "" && Gram != null)
                    {
                        ddetails = ABE.obj_abhy_wsp_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block && x.grampanchayat == Gram).ToList();//total list

                    }
                    else if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null)
                    {
                        ddetails = ABE.obj_abhy_wsp_socialmonitoring.Where(x => x.state == State && x.district == Dist && x.block == Block).ToList();//total list

                    }
                    else if (State != "" && State != null && Dist != "" && Dist != null)
                    {
                        ddetails = ABE.obj_abhy_wsp_socialmonitoring.Where(x => x.state == State && x.district == Dist).ToList();//total list

                    }
                    else if (State != "" && State != null)
                    {
                        ddetails = ABE.obj_abhy_wsp_socialmonitoring.Where(x => x.state == State).ToList();//total list

                    }




                    var resultdata = Json(ddetails, JsonRequestBehavior.AllowGet);
                    resultdata.MaxJsonLength = int.MaxValue;
                    return resultdata;

                }
                catch (Exception Ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
                // return RedirectToAction("WSP_GWM_HOME", "WSPNew");
            }
        }

        [HttpPost]
        public ActionResult Save_Sprinkler_fund(string other_measures, string claim_year,string department_name, string scheme_name, string proposed_area, string approximate_cost, string type, string id)
        {
        //    String sDate = DateTime.Now.ToString();
        //    DateTime datevalue = (Convert.ToDateTime(sDate.ToString()));

        //    String dy = datevalue.Day.ToString();
        //    String mm = datevalue.Month.ToString();
        //    String yy = datevalue.Year.ToString();
            var userid = (Session["Email"]).ToString();
            var State = Session["gstate"].ToString();
            var Dist = Session["gdist"].ToString();
            var Block = Session["gblock"].ToString();
            var Gram = Session["ggram"].ToString();
            int SPID = Convert.ToInt32(id);
            if(SPID != 0)
            {
                var Data1 = ABE.obj_abhy_wsp_funding_source.Where(x => x.id == SPID).FirstOrDefault();
                //Data1.year = yy;
                //Data1.month = mm;
                Data1.claim_year = claim_year;
                Data1.department_name = department_name;
                Data1.other_measures = other_measures;
                Data1.scheme_name = scheme_name;
                Data1.proposed_area = proposed_area;
                Data1.approximate_cost = approximate_cost;
                Data1.type = type;                
                Data1.user_id = userid;
                Data1.entry_date = DateTime.Today.ToString("yyyy-MM-dd");
                ABE.Entry(Data1).State = EntityState.Modified;
                ABE.SaveChanges();
                return Json("Successfully Updated", JsonRequestBehavior.AllowGet);
            }
            else
            {
                abhy_wsp_funding_source details = new abhy_wsp_funding_source();
                var data = ABE.obj_abhy_wsp_funding_source.ToList();
                details.state_name = State;
                details.district_name = Dist;
                details.block_name = Block;
                details.gp_name = Gram;
                //details.year = yy;
                //details.month = mm;
                details.claim_year = claim_year;
                details.other_measures = other_measures;
                details.department_name = department_name;
                details.scheme_name = scheme_name;
                details.proposed_area = proposed_area;
                details.approximate_cost = approximate_cost;
                details.type = type;
                details.user_id = userid;
                details.new_table_entry = "0";
                details.entry_date = DateTime.Today.ToString("yyyy-MM-dd");
                ABE.obj_abhy_wsp_funding_source.Add(details);
                ABE.SaveChanges();
                return Json("Successfully Saved", JsonRequestBehavior.AllowGet);
            }

            
        }

        [HttpPost]
        public ActionResult get_sprinkler_fund(string Type)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var userid = (Session["Email"]).ToString();
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();
                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    List<abhy_wsp_funding_source> ddetails = new List<abhy_wsp_funding_source>();
                    if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null && Gram != "" && Gram != null)
                    {
                        ddetails = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.type == Type).ToList();//total list

                    }

                    

                    return Json(ddetails, JsonRequestBehavior.AllowGet);
                }
                catch (Exception Ex)
            {
                return Json("Error", JsonRequestBehavior.AllowGet);
            }

        }
            else
            {
                return RedirectToAction("WSP_GWM_HOME", "WSPNew");
            }
            
        }



        [HttpPost]
        public ActionResult get_demandside_fund()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var userid = (Session["Email"]).ToString();
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();
                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    List<abhy_wsp_funding_source> ddetails = new List<abhy_wsp_funding_source>();
                    if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null && Gram != "" && Gram != null)
                    {
                        ddetails = ABE.obj_abhy_wsp_funding_source.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram).ToList();//total list

                    }



                    return Json(ddetails, JsonRequestBehavior.AllowGet);
                }
                catch (Exception Ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }

            }
            else
            {
                return RedirectToAction("WSP_GWM_HOME", "WSPNew");
            }

        }


        [HttpPost]
        public ActionResult get_ar_supplyside_fund()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var userid = (Session["Email"]).ToString();
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();
                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    List<supply_AR_Structures> ddetails = new List<supply_AR_Structures>();
                    
                    if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null && Gram != "" && Gram != null)
                    {
                        ddetails = ABE.obj_supply_AR_Structures.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list
                        
                    }



                    return Json(ddetails, JsonRequestBehavior.AllowGet);
                }
                catch (Exception Ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }

            }
            else
            {
                return RedirectToAction("WSP_GWM_HOME", "WSPNew");
            }

        }
        [HttpPost]
        public ActionResult get_wc_supplyside_fund()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var userid = (Session["Email"]).ToString();
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();
                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    
                    List<supply_water_conservation> ddetails = new List<supply_water_conservation>();
                   
                    if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null && Gram != "" && Gram != null)
                    {

                        ddetails = ABE.obj_supply_water_conservation.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list
                        
                    }



                    return Json(ddetails, JsonRequestBehavior.AllowGet);
                }
                catch (Exception Ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }

            }
            else
            {
                return RedirectToAction("WSP_GWM_HOME", "WSPNew");
            }

        }
        [HttpPost]
        public ActionResult get_other_supplyside_fund()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var userid = (Session["Email"]).ToString();
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();
                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    
                    List<supply_any_other_intervention> ddetails = new List<supply_any_other_intervention>();
                    if (State != "" && State != null && Dist != "" && Dist != null && Block != "" && Block != null && Gram != "" && Gram != null)
                    {
                        
                        ddetails = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).ToList();//total list
                    }



                    return Json(ddetails, JsonRequestBehavior.AllowGet);
                }
                catch (Exception Ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }

            }
            else
            {
                return RedirectToAction("WSP_GWM_HOME", "WSPNew");
            }

        }
        [HttpPost]
        public ActionResult Delete_SP_fund(string id)
        {

            if (id != "")
            {
                var SPID = Convert.ToInt32(id);
                var Data1 = ABE.obj_abhy_wsp_funding_source.Where(x => x.id == SPID).FirstOrDefault();
                if (Data1 != null)
                {

                    ABE.Entry(Data1).State = EntityState.Deleted;
                    ABE.SaveChanges();
                    return Json("Deleted Successfully");
                }
                else
                {
                    return Json("Not Deleted");
                }

            }
            else
            {
                return View();
            }

        }


        [HttpPost]
        public ActionResult editrow_sp(string id)
        {

            if (id != "")
            {
                var SPID = Convert.ToInt32(id);
                var Data1 = ABE.obj_abhy_wsp_funding_source.Where(x => x.id == SPID).FirstOrDefault();
                if (Data1 != null)
                {

                    return Json(Data1);
                }
                else
                {
                    return Json("Not Deleted");
                }

            }
            else
            {
                return View();
            }

        }
    }
}